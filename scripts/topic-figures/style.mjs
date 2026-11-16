// Shared house style for Marlbridge topic figures (matches the existing img.marlbridge.com set).
export const C = {
  bg: '#f4f6f6', ink: '#1e2a44', muted: '#4a5568', panel: '#ffffff', panelEdge: '#c9d6d4',
  teal: '#b5d3cf', tealLight: '#dce9e7', tealDark: '#2e6b62',
  mustard: '#d4b02e', cream: '#f2e7b8', olive: '#8a6d0d',
  rust: '#b5602e', blue: '#2b5a9a', sand: '#efdfa8', rock: '#cbbf9f', rockDark: '#9c8f6e', grass: '#6f9a52',
};
const FONT = "Inter, 'DejaVu Sans', Arial, sans-serif";

export function svg(w, h, title, body, subtitle) {
  const sub = subtitle ? `<text x="${w / 2}" y="92" text-anchor="middle" font-size="21" fill="${C.muted}">${subtitle}</text>` : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" font-family="${FONT}">
<defs>
 <marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="18" markerHeight="18" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${C.ink}"/></marker>
 <marker id="ahT" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="18" markerHeight="18" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${C.tealDark}"/></marker>
 <marker id="ahR" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="18" markerHeight="18" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${C.rust}"/></marker>
 <marker id="ahO" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="18" markerHeight="18" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${C.olive}"/></marker>
</defs>
<rect width="${w}" height="${h}" fill="${C.bg}"/>
<text x="${w / 2}" y="56" text-anchor="middle" font-size="31" font-weight="700" fill="${C.ink}">${title}</text>
${sub}
${body}
</svg>`;
}

export const panel = (x, y, w, h, fill = C.panel, edge = C.panelEdge) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>`;

export const t = (x, y, s, { size = 18, weight = 400, fill = C.ink, anchor = 'start', italic = false } = {}) =>
  `<text x="${x}" y="${y}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}"${italic ? ' font-style="italic"' : ''}>${s}</text>`;

// Multi-line text: lines array, line height lh
export const tl = (x, y, lines, opts = {}, lh = (opts.size || 18) * 1.3) =>
  lines.map((s, i) => t(x, y + i * lh, s, opts)).join('');

export const arrow = (x1, y1, x2, y2, { color = C.ink, w = 3.5, marker = 'ah', dash = '' } = {}) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}" marker-end="url(#${marker})"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;

export const path = (d, { fill = 'none', stroke = C.ink, w = 3, extra = '' } = {}) =>
  `<path d="${d}" fill="${fill}" stroke="${stroke}" stroke-width="${w}" stroke-linejoin="round" stroke-linecap="round" ${extra}/>`;

export const badge = (cx, cy, r, label, fill = C.mustard) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` +
  t(cx, cy + r * 0.36, label, { size: r * 1.0, weight: 700, anchor: 'middle' });
