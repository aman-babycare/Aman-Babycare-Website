// Company stamp for the About page: brand_assets/stamp/company-stamp-source.jpg → src/assets/company-stamp.png.
// The photo is blue ink on grey paper with uneven light, so the alpha comes from how blue a pixel is (blue minus
// red), not from brightness: shadows on the paper stay transparent and the ink keeps its soft edges. Every kept
// pixel gets the same ink colour, then the image is trimmed to the stamp and saved at 640px.
// Usage: node scripts/process-stamp.mjs
import sharp from 'sharp';

const SRC = 'brand_assets/stamp/company-stamp-source.jpg';
const OUT = 'src/assets/company-stamp.png';
const INK = [33, 52, 140]; // the stamp's blue
const LOW = 18; // blue − red at or below this is paper
const HIGH = 70; // at or above this is solid ink

const { data, info } = await sharp(SRC).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height } = info;
const out = Buffer.alloc(width * height * 4);
let [minX, minY, maxX, maxY] = [width, height, 0, 0];
for (let i = 0; i < width * height; i++) {
  const r = data[i * 3];
  const b = data[i * 3 + 2];
  const t = Math.min(1, Math.max(0, (b - r - LOW) / (HIGH - LOW)));
  const a = Math.round(t * t * (3 - 2 * t) * 255); // smoothstep: crisp edges without a hard cut-off
  out.set([...INK, a], i * 4);
  if (a > 40) {
    const x = i % width;
    const y = Math.floor(i / width);
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y);
  }
}
const pad = 6;
const left = Math.max(0, minX - pad);
const top = Math.max(0, minY - pad);
const box = { left, top, width: Math.min(width, maxX + pad + 1) - left, height: Math.min(height, maxY + pad + 1) - top };
await sharp(out, { raw: { width, height, channels: 4 } })
  .extract(box)
  .resize(640, 640, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ compressionLevel: 9 })
  .toFile(OUT);
console.log(`${OUT}: stamp box ${box.width}×${box.height} from ${width}×${height}`);
