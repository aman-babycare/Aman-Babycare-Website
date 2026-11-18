# Imagery

## Checklist for every photo
- Modest: women in hijab or covered; no bare shoulders, no tight clothing.
- The setting reads as a Gulf/Saudi home or neutral (no snow, no Western holiday decor, no alcohol, no musical instruments).
- Bright, warm, natural light. No heavy filters. No overlays on card photos (only behind hero text if needed).
- Children look calm and happy, never distressed.
- No visible third-party logos or watermarks.

## Sources
- Client-supplied AI-generated photos (Google Gemini), approved Oct 2026. Each must pass the checklist above. They are illustrations: never caption or describe them as real staff, real clients or "our team".
- Free-for-commercial-use stock (Unsplash, Pexels).
- Record every file in `src/assets/photos/CREDITS.md` with source, author and licence.
If no fitting photo exists, use a branded illustration panel. Never fill a gap with an off-culture photo.

## Technical
- Files in `src/assets/photos/`, served through Astro `<Picture>` (AVIF + WebP) with width/height.
- Photos uploaded from the admin panel: offers in `src/assets/photos/offers/`, services in `src/assets/photos/services/` (JPG, 5 MB at most; Publish commits them, the `image` field in offers.json / services.json names the file). An uploaded service photo replaces the slot photo on that service's cards and page, with the service name as its alt text. The checklist above still applies to them.
- Hero image: `loading="eager"` + `fetchpriority="high"`; everything else lazy.

## Alt text
In the page's language, describing what is shown ("A mother in a hijab holding her sleeping baby"). Decorative images get `alt=""`.
