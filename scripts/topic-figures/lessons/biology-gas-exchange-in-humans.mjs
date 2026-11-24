// Board-neutral redraws of two GCSE breathing-system pictures first drawn for Cambridge IGCSE 0610
// and reused on AQA and OCR GCSE pages. Same labels; the "Extended" tier pill is gone.
import { C, svg, panel, t, path } from '../style.mjs';

export const slug = 'biology-gas-exchange-in-humans';
const W = 900;
const LUNG = '#dce9e7', RIB = '#f2e7b8', MUSC = '#b5602e', MUCUS = '#f2e7b8', CIL = '#b5d3cf', GOLD = '#d4b02e', BACT = '#e07a5f';
function fa(x1, y1, x2, y2, color = C.ink, w = 3.5, head = 18) {
  const L = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L, uy = (y2 - y1) / L;
  const bx = x2 - ux * head, by = y2 - uy * head, hw = head * 0.6;
  return `<line x1="${x1}" y1="${y1}" x2="${bx}" y2="${by}" stroke="${color}" stroke-width="${w}" stroke-linecap="round"/>` +
    `<polygon points="${x2},${y2} ${bx - uy * hw},${by + ux * hw} ${bx + uy * hw},${by - ux * hw}" fill="${color}"/>`;
}
const lead = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${C.ink}" stroke-width="2"/><circle cx="${x2}" cy="${y2}" r="5" fill="${C.ink}"/>`;

// ---------- 01 Breathing system ----------
function breathing() {
  const o = [];
  const cx = 450;
  // ribs (behind lungs) and intercostal muscles
  for (let i = 0; i < 5; i++) {
    const y = 300 + i * 66, w = 270 + i * 6;
    o.push(`<path d="M${cx - w} ${y + 70} Q${cx - w + 10} ${y - 10} ${cx} ${y - 30} Q${cx + w - 10} ${y - 10} ${cx + w} ${y + 70}" fill="none" stroke="${C.olive}" stroke-width="17" stroke-linecap="round"/>`);
    o.push(`<path d="M${cx - w} ${y + 70} Q${cx - w + 10} ${y - 10} ${cx} ${y - 30} Q${cx + w - 10} ${y - 10} ${cx + w} ${y + 70}" fill="none" stroke="${RIB}" stroke-width="11" stroke-linecap="round"/>`);
  }
  o.push(`<line x1="${cx - 262}" y1="360" x2="${cx - 262}" y2="610" stroke="${MUSC}" stroke-width="6"/><line x1="${cx + 262}" y1="360" x2="${cx + 262}" y2="610" stroke="${MUSC}" stroke-width="6"/>`);
  // lungs
  o.push(`<path d="M${cx - 18} 300 C${cx - 60} 300 ${cx - 120} 300 ${cx - 160} 360 C${cx - 210} 440 ${cx - 225} 560 ${cx - 205} 690 L${cx - 18} 668 Z" fill="${LUNG}" stroke="${C.tealDark}" stroke-width="4"/>`);
  o.push(`<path d="M${cx + 18} 300 C${cx + 60} 300 ${cx + 120} 300 ${cx + 160} 360 C${cx + 210} 440 ${cx + 225} 560 ${cx + 205} 690 L${cx + 18} 668 Z" fill="${LUNG}" stroke="${C.tealDark}" stroke-width="4"/>`);
  // trachea with cartilage rings, larynx
  o.push(`<rect x="${cx - 18}" y="222" width="36" height="200" fill="${LUNG}" stroke="${C.tealDark}" stroke-width="3"/>`);
  for (let y = 236; y < 420; y += 22) o.push(`<line x1="${cx - 18}" y1="${y}" x2="${cx + 18}" y2="${y}" stroke="${C.olive}" stroke-width="5"/>`);
  o.push(`<rect x="${cx - 28}" y="184" width="56" height="40" rx="12" fill="${LUNG}" stroke="${C.tealDark}" stroke-width="3"/>`);
  o.push(fa(cx, 130, cx, 180, C.tealDark, 3.5, 16));
  o.push(t(cx, 122, 'Nose or mouth', { size: 22, weight: 700, anchor: 'middle' }));
  // bronchi and bronchioles
  const tree = (s) => {
    const bx = cx + s * 92, by = 486;
    o.push(path(`M${cx} 418 L${bx} ${by}`, { stroke: C.tealDark, w: 12 }));
    const kids = [[bx - s * 40, 556], [bx + s * 20, 586], [bx + s * 62, 536]];
    for (const [kx, ky] of kids) {
      o.push(path(`M${bx} ${by} L${kx} ${ky}`, { stroke: C.tealDark, w: 4 }));
      for (const [dx, dy] of [[-18, 26], [12, 30]]) {
        const ex = kx + dx, ey = ky + dy;
        o.push(path(`M${kx} ${ky} L${ex} ${ey}`, { stroke: C.tealDark, w: 2.5 }));
        for (const [ax, ay] of [[-8, 4], [8, 4], [0, 14]]) o.push(`<circle cx="${ex + ax}" cy="${ey + ay}" r="9" fill="#ffffff" stroke="${C.tealDark}" stroke-width="2.5"/>`);
      }
    }
  };
  tree(-1); tree(1);
  // diaphragm
  o.push(path(`M${cx - 300} 720 Q${cx} 610 ${cx + 300} 720`, { stroke: MUSC, w: 18 }));
  // labels
  o.push(t(cx - 46, 214, '1 Larynx', { size: 21, weight: 700, anchor: 'end' }), lead(cx - 44, 207, cx - 28, 204));
  o.push(t(cx + 40, 252, '2 Trachea', { size: 21, weight: 700 }), lead(cx + 36, 246, cx + 18, 246));
  o.push(t(cx - 40, 262, 'Cartilage rings', { size: 19, fill: C.muted, anchor: 'end' }), lead(cx - 36, 257, cx - 10, 258));
  o.push(t(760, 346, 'Lung', { size: 21, weight: 700 }), lead(754, 340, cx + 190, 420));
  o.push(t(760, 412, '3 Bronchi', { size: 21, weight: 700 }), lead(754, 406, cx + 62, 466));
  o.push(t(760, 478, '4 Bronchioles', { size: 21, weight: 700 }), lead(754, 472, cx + 112, 530));
  o.push(t(760, 544, '5 Alveoli', { size: 21, weight: 700 }), lead(754, 538, cx + 170, 570));
  o.push(t(760, 744, 'Diaphragm', { size: 21, weight: 700 }), lead(754, 738, cx + 290, 714));
  o.push(t(140, 380, 'Ribs', { size: 21, weight: 700, anchor: 'end' }), lead(146, 374, cx - 250, 390));
  o.push(t(140, 560, 'Intercostal', { size: 21, weight: 700, anchor: 'end' }), t(140, 586, 'muscles', { size: 21, weight: 700, anchor: 'end' }), lead(146, 566, cx - 262, 548));
  o.push(t(cx, 800, 'Numbers 1 to 5: the route air takes', { size: 20, fill: C.muted, anchor: 'middle' }));
  return svg(W, 830, 'The breathing system', o.join('\n'), 'Front view, schematic');
}

// ---------- 08 Airway protection ----------
function airway() {
  const o = [];
  const dust = (x, y) => `<polygon points="${x},${y - 9} ${x + 9},${y - 2} ${x + 6},${y + 8} ${x - 6},${y + 8} ${x - 9},${y - 2}" fill="#56627a" stroke="${C.ink}" stroke-width="1.5"/>`;
  const bact = (x, y, r = 25) => `<rect x="${x - 14}" y="${y - 7}" width="28" height="14" rx="7" fill="${BACT}" stroke="${C.rust}" stroke-width="2" transform="rotate(${r} ${x} ${y})"/>`;
  o.push(t(450, 166, 'Air with dust and bacteria', { size: 21, fill: C.muted, anchor: 'middle' }));
  for (const x of [110, 330, 560, 770]) o.push(`<polygon points="${x - 9},186 ${x + 9},186 ${x},200" fill="${C.ink}"/>`, dust(x, 216));
  for (const [x, y, r] of [[150, 260, -20], [210, 236, 30], [440, 240, -30], [660, 238, 40]]) o.push(bact(x, y, r));
  o.push(t(850, 286, 'Mucus', { size: 21, weight: 700, anchor: 'end' }));
  o.push(`<rect x="40" y="300" width="820" height="54" rx="12" fill="${MUCUS}" stroke="${C.olive}" stroke-width="3"/>`);
  for (const x of [130, 520]) o.push(dust(x, 328));
  for (const [x, r] of [[300, 15], [690, -20]]) o.push(bact(x, 328, r));
  for (const x of [210, 420, 610, 790]) o.push(`<polygon points="${x - 12},318 ${x + 14},328 ${x - 12},338" fill="${C.ink}"/>`);
  // cells
  const cil = (x) => {
    o.push(`<rect x="${x - 40}" y="380" width="80" height="160" rx="10" fill="${CIL}" stroke="${C.tealDark}" stroke-width="3"/>`);
    for (let i = 0; i < 5; i++) o.push(`<line x1="${x - 30 + i * 15}" y1="380" x2="${x - 22 + i * 15}" y2="356" stroke="${C.tealDark}" stroke-width="2.5"/>`);
    o.push(`<circle cx="${x}" cy="476" r="5" fill="${C.ink}"/>`);
  };
  const gob = (x) => {
    o.push(`<path d="M${x - 44} 380 H${x + 44} L${x + 40} 440 Q${x + 36} 470 ${x + 14} 480 V540 H${x - 14} V480 Q${x - 36} 470 ${x - 40} 440 Z" fill="${MUCUS}" stroke="${C.olive}" stroke-width="3"/>`);
    o.push(`<polygon points="${x - 12},380 ${x + 12},380 ${x},356" fill="${C.olive}"/>`);
    for (const [dx, dy] of [[-18, 404], [10, 398], [-4, 420], [-22, 434], [16, 424], [0, 446]]) o.push(`<circle cx="${x + dx}" cy="${dy}" r="8" fill="${GOLD}" stroke="${C.olive}" stroke-width="1.8"/>`);
    o.push(`<circle cx="${x}" cy="510" r="5" fill="${C.ink}"/>`);
  };
  cil(120); gob(230); cil(340); gob(450); cil(560); gob(670); cil(780);
  o.push(`<line x1="120" y1="476" x2="120" y2="590" stroke="${C.ink}" stroke-width="2"/>`, `<line x1="450" y1="510" x2="450" y2="590" stroke="${C.ink}" stroke-width="2"/>`);
  o.push(t(120, 618, 'Ciliated cell', { size: 22, weight: 700, anchor: 'middle' }), t(120, 646, 'cilia move the mucus', { size: 19, fill: C.muted, anchor: 'middle' }));
  o.push(t(450, 618, 'Goblet cell', { size: 22, weight: 700, anchor: 'middle' }), t(450, 646, 'makes mucus', { size: 19, fill: C.muted, anchor: 'middle' }));
  o.push(panel(30, 690, 840, 136, '#ffffff', C.ink));
  o.push(`<rect x="60" y="718" width="40" height="28" rx="8" fill="${MUCUS}" stroke="${C.olive}" stroke-width="2.5"/>`, t(120, 740, 'Mucus traps dust and bacteria', { size: 22, weight: 700 }));
  o.push(`<polygon points="66,778 98,790 66,802" fill="${C.ink}"/>`, t(120, 798, 'Cilia move it to the throat, swallowed', { size: 22, weight: 700 }));
  return svg(W, 850, 'Protecting the airway', o.join('\n'), 'Lining of the trachea and bronchi, schematic');
}

export const figures = [
  { name: '01-breathing-system', after: '## Lungs', svg: breathing(),
    alt: 'Front view of the chest. Air enters at the nose or mouth and passes in order through the larynx (1), trachea (2), bronchi (3) and bronchioles (4) to the alveoli (5) in the lungs. Ribs, intercostal muscles and the diaphragm surround and sit under the lungs. Also shown: the trachea has rings of cartilage.',
    caption: 'Follow the numbers 1 to 5 to trace the route air takes into the lungs.' },
  { name: '08-airway-protection', after: '## B6.3k: Non-specific defences', svg: airway(),
    alt: 'Goblet cells make mucus that forms a layer on the airway lining and traps dust and bacteria from the air. Ciliated cells have cilia that beat and move the mucus to the throat, where it is swallowed. The mucus traps; the cilia move the mucus.',
    caption: 'Goblet cells make mucus to trap particles and ciliated cells move it to the throat.' },
];
