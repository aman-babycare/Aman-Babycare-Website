// Line icons on a 24×24 grid, drawn with currentColor strokes (rendered by Icon.astro).
export const icons = {
  check: '<path d="M20 6 9 17l-5-5"/>',
  chevron: '<path d="m9 6 6 6-6 6"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h10"/>',
  shield:
    '<path d="M12 3 19 6v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6l7-3z"/><path d="m9 12 2 2 4-4"/>',
  heart: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  phone:
    '<path d="M5 4h3.5l1.5 4-2 1.5a11 11 0 0 0 6.5 6.5L16 14l4 1.5V19a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
  hands:
    '<path d="M8 13.5 5 10.6a1.6 1.6 0 0 1 2.3-2.3L10 11"/><path d="M16 13.5l3-2.9a1.6 1.6 0 0 0-2.3-2.3L14 11"/><path d="M6 15c1.5 2.5 3.6 4 6 4s4.5-1.5 6-4"/><path d="M12 4v4"/>',
  paw:
    '<circle cx="8" cy="7" r="1.6"/><circle cx="16" cy="7" r="1.6"/><circle cx="4.8" cy="11.6" r="1.5"/><circle cx="19.2" cy="11.6" r="1.5"/><path d="M12 12c-3 0-5 3.5-5 5.5 0 1.5 1.2 2.5 2.7 2.5.9 0 1.5-.5 2.3-.5s1.4.5 2.3.5c1.5 0 2.7-1 2.7-2.5 0-2-2-5.5-5-5.5z"/>',
  sparkle:
    '<path d="M4 11.5 12 4.5l8 7"/><path d="M6 10v9.5h12V10"/><path d="M12 11.5l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9z"/>',
  car:
    '<path d="M4 16.5V12l2.2-5h11.6L20 12v4.5z"/><path d="M4 12h16"/><circle cx="7.5" cy="16.5" r="1.8"/><circle cx="16.5" cy="16.5" r="1.8"/>',
  child:
    '<circle cx="12" cy="11.5" r="7"/><path d="M9.5 14c1.4 1.1 3.6 1.1 5 0"/><path d="M9.3 10.5h.01M14.7 10.5h.01"/><path d="M12 4.5c-1.2 0-1.6 1.4-.4 1.8"/>',
  elder:
    '<circle cx="10" cy="4.8" r="1.8"/><path d="M10 8v6.5L8 21"/><path d="m10 14.5 2.5 6.5"/><path d="M10 9.5 7 12.5"/><path d="m10 9.5 4.5 2"/><path d="M15.5 11.5V21"/>',
  bag:
    '<path d="M5.5 8h13l-1 12.5h-11z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/>',
  more: '<circle cx="6" cy="12" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="18" cy="12" r="1.2"/>',
  whatsapp:
    '<path d="M4 20l1.3-3.9A8 8 0 1 1 8.1 19z"/><path d="M9 8.6c0 3.4 2.9 6.4 6.4 6.4l1-1.5-2-1-1 .8a5 5 0 0 1-2.7-2.7l.8-1-1-2z"/>',
  // Social platforms (SocialLinks.astro), drawn as line marks to match the set.
  instagram: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17 7h.01"/>',
  facebook:
    '<path d="M14.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H9v3h2.5V21"/>',
  x: '<path d="M4 4h4.5L20 20h-4.5z"/><path d="M20 4l-6.6 7.3M10.6 12.7 4 20"/>',
  snapchat:
    '<path d="M12 3.5c-3 0-5 2.2-5 5.2v2.1l-1.7.7c-.5.2-.5.8 0 1l1.6.6c-.6 1.6-1.7 2.8-3.3 3.4.5 1 1.9 1 2.6 1.2.2.8.4 1.3 1.2 1.1 1.4-.3 2.4.2 3.1.8.8.6 2.2.6 3 0 .7-.6 1.7-1.1 3.1-.8.8.2 1-.3 1.2-1.1.7-.2 2.1-.2 2.6-1.2-1.6-.6-2.7-1.8-3.3-3.4l1.6-.6c.5-.2.5-.8 0-1L17 10.8V8.7c0-3-2-5.2-5-5.2z"/>',
  tiktok: '<path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 3c.4 2.6 2.2 4.4 5 4.6"/>',
  youtube: '<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="m10 9.5 4.5 2.5-4.5 2.5z"/>',
  linkedin:
    '<rect x="3.5" y="3.5" width="17" height="17" rx="3"/><path d="M8 10.5V16M8 7.5v.01M11.5 16v-5.5M11.5 13c0-1.5 1-2.5 2.3-2.5S16 11.5 16 13v3"/>',
  crescent: '<path d="M15 3.5a8.5 8.5 0 1 0 5.5 13.8A7 7 0 0 1 15 3.5z"/>',
  palm:
    '<path d="M12 21c.4-4.5.6-8.5 0-12"/><path d="M12 9C10 6 7 5.5 4 6.5"/><path d="M12 9c2-3 5-3.5 8-2.5"/><path d="M12 9c-1.8-.8-4.3-.2-6.2 2"/><path d="M12 9c1.8-.8 4.3-.2 6.2 2"/><path d="M12 9c0-2.6-1-4.6-3-5.6"/><path d="M12 9c0-2.6 1-4.6 3-5.6"/>',
  tag: '<path d="M3.5 12V4.5H11l9.5 9.5-6.5 6.5z"/><circle cx="7.6" cy="8.6" r="1.2"/>',
  book:
    '<path d="M4 5.5h5.5a2.5 2.5 0 0 1 2.5 2.5v12a2 2 0 0 0-2-2H4z"/><path d="M20 5.5h-5.5A2.5 2.5 0 0 0 12 8v12a2 2 0 0 1 2-2h6z"/>',
  gift:
    '<path d="M4.5 11h15v9h-15z"/><path d="M3.5 7.5h17V11h-17z"/><path d="M12 7.5V20"/><path d="M12 7.5C10.5 4.5 7 4.3 7 6.2s3.2 1.3 5 1.3c1.8 0 5 .6 5-1.3s-3.5-1.7-5 1.3z"/>',
  calendar: '<rect x="4" y="5.5" width="16" height="14.5" rx="2"/><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4"/>',
  chat: '<path d="M5 18.5V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H8.5z"/><path d="M9 9.5h6M9 12.5h4"/>',
  home: '<path d="M4 11 12 4l8 7"/><path d="M6 9.5V20h12V9.5"/><path d="M10 20v-5h4v5"/>',
  // Newborn & mother care
  baby:
    '<circle cx="12" cy="7.5" r="3.5"/><path d="M8.5 11.5C6.9 13.1 6 15.5 6 18c0 1.5 2.7 2.5 6 2.5s6-1 6-2.5c0-2.5-.9-4.9-2.5-6.5"/><path d="M9.5 15.5c1.5 1 3.5 1 5 0"/>',
  bottle:
    '<path d="M10 3.5h4"/><path d="M10.5 3.5V6L9 8h6l-1.5-2V3.5"/><rect x="8" y="8" width="8" height="12.5" rx="2"/><path d="M8 12h3M8 15.5h3"/>',
  bath: '<path d="M3.5 12h17v2a5 5 0 0 1-5 5h-7a5 5 0 0 1-5-5z"/><path d="M6 12V6.5a2 2 0 0 1 3.6-1.2"/><path d="M7 19l-1 2M17 19l1 2"/>',
  sleep: '<path d="M13 5a7.5 7.5 0 1 0 6.5 11A6 6 0 0 1 13 5z"/><path d="M16 3.5h4l-4 4h4"/>',
  mother:
    '<circle cx="9.5" cy="5" r="2.3"/><path d="M5 21v-6a4.5 4.5 0 0 1 8.2-2.5"/><circle cx="16" cy="13.5" r="2.3"/><path d="M9 17.5c2.5 1.8 6 2 9-.2"/>',
} as const;

export type IconName = keyof typeof icons;
