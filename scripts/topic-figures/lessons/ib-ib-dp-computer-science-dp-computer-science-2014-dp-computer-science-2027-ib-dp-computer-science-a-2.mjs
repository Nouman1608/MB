import { C, svg, panel, t, tl, arrow, path, badge } from '../style.mjs';

export const slug = 'ib-dp-computer-science-a-2';
export const figures = [];
const add = (name, svgText, alt, caption, after) => figures.push({ name, svg: svgText, alt, caption, after });


// local helpers
const wrap = (s, n) => {
  const out = [''];
  for (const w of s.split(' ')) {
    const cur = out[out.length - 1];
    if (cur && (cur + ' ' + w).length > n) out.push(w); else out[out.length - 1] = cur ? cur + ' ' + w : w;
  }
  return out;
};
const para = (x, y, s, n, opts = {}, lh) => tl(x, y, wrap(s, n), opts, lh || (opts.size || 18) * 1.32);
const box = (x, y, w, h, fill = C.panel, edge = C.panelEdge, rx = 12) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>`;
const kbadge = (cx, cy, r, label, fill = C.cream) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${C.ink}" stroke-width="3"/>` + t(cx, cy + 7, label, { size: 19, weight: 700, anchor: 'middle' });
const pill = (x, y, w, h, s, { fill = C.cream, edge = C.olive, size = 17, weight = 600, color = C.ink } = {}) =>
  box(x, y, w, h, fill, edge, h / 2) + t(x + w / 2, y + h / 2 + size * 0.36, s, { size, weight, anchor: 'middle', fill: color });
const apath = (d, color = C.ink, marker = 'ah', w = 3.5) => path(d, { stroke: color, w, extra: `marker-end="url(#${marker})"` });
const PINK = '#f6e3d6';
const darr = (x1, y1, x2, y2, color = C.ink, w = 3.5) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}" marker-start="url(#ah)" marker-end="url(#ah)"/>`;
const line = (x1, y1, x2, y2, color = C.ink, w = 3, dash = '') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const pc = (cx, cy, f = C.tealLight) => `<rect x="${cx - 22}" y="${cy - 18}" width="44" height="30" rx="4" fill="${f}" stroke="${C.ink}" stroke-width="2.5"/><rect x="${cx - 8}" y="${cy + 12}" width="16" height="6" fill="${C.ink}"/><rect x="${cx - 16}" y="${cy + 17}" width="32" height="4" rx="2" fill="${C.ink}"/>`;
const server = (cx, cy) => `<rect x="${cx - 22}" y="${cy - 30}" width="44" height="60" rx="5" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + [0, 1, 2].map((i) => `<line x1="${cx - 14}" y1="${cy - 16 + i * 16}" x2="${cx + 14}" y2="${cy - 16 + i * 16}" stroke="${C.olive}" stroke-width="3"/>`).join('');
const cloud = (cx, cy, s = 1, f = C.panel) => path(`M${cx - 70 * s},${cy + 20 * s} a24,24 0 0 1 8,-44 a34,34 0 0 1 62,-14 a30,30 0 0 1 56,10 a24,24 0 0 1 14,48 z`.replace(/a(\d+),(\d+) 0 0 1 (-?\d+),(-?\d+)/g, (m, r1, r2, dx, dy) => `a${r1 * s},${r2 * s} 0 0 1 ${dx * s},${dy * s}`), { fill: f, w: 2.5 });
const dev = (cx, cy, s, f = C.panel, w = 110) => box(cx - w / 2, cy - 22, w, 44, f, C.ink, 8) + t(cx, cy + 6, s, { size: 16, weight: 700, anchor: 'middle' });

// 01 Clients, servers, LANs and WAN
{
  let b = '';
  const lan = (x, name) => {
    let s = box(x, 130, 330, 300, C.tealLight, C.tealDark, 16) + t(x + 20, 162, name, { size: 19, weight: 700, fill: C.tealDark });
    s += t(x + 20, 186, 'LAN: small area; usually owned', { size: 15, fill: C.muted });
    s += server(x + 70, 270) + t(x + 70, 326, 'server', { size: 15, anchor: 'middle', weight: 600 });
    [[200, 230], [270, 300], [200, 370]].forEach(([dx, dy]) => { s += line(x + 94, 270, x + dx - 24, dy, C.tealDark, 2.5) + pc(x + dx, dy); });
    s += t(x + 270, 340, 'clients', { size: 15, anchor: 'middle', weight: 600 });
    return s;
  };
  b += lan(30, 'School LAN') + lan(540, 'Office LAN');
  b += cloud(450, 250, 0.95, C.cream);
  b += t(450, 248, 'WAN', { size: 20, weight: 700, anchor: 'middle' });
  b += line(360, 280, 395, 266, C.ink, 4) + line(505, 266, 540, 280, C.ink, 4);
  b += tl(450, 318, ['large distances;', 'often leased from', 'telecoms providers'], { size: 15, anchor: 'middle', fill: C.muted }, 19);
  b += box(30, 452, 840, 140, C.panel, C.panelEdge);
  b += t(52, 486, 'Client and server are roles', { size: 19, weight: 700 });
  b += pc(120, 548) + server(640, 540);
  b += apath('M160,526 L596,526', C.tealDark, 'ahT') + t(380, 516, 'request a service', { size: 15, anchor: 'middle', fill: C.tealDark, weight: 600 });
  b += apath('M596,560 L160,560', C.olive, 'ahO') + t(380, 584, 'provide the service', { size: 15, anchor: 'middle', fill: C.olive, weight: 600 });
  b += t(120, 584, 'client', { size: 15, anchor: 'middle', weight: 600 }) + t(700, 520, 'server: files,', { size: 15, weight: 600 }) + t(700, 540, 'web pages,', { size: 15, weight: 600 }) + t(700, 560, 'addresses', { size: 15, weight: 600 });
  b += box(30, 610, 840, 56, C.cream, C.olive) + t(450, 645, 'One machine can be both client and server. The internet is the largest WAN.', { size: 17, weight: 700, anchor: 'middle' });
  add('01-lan-wan-client-server',
    svg(900, 690, 'LANs, a WAN, clients and servers', b),
    'Two LANs, a school and an office, each with a server and client computers, joined by a WAN that spans large distances over infrastructure often leased from telecoms providers. Below, a client requests a service and a server provides it, such as files, web pages or addresses.',
    'A LAN covers one site; a WAN links LANs over distance, and the internet is the largest WAN.',
    '## Clients, servers, LANs and WANs');
}

// 02 Devices mapped to TCP/IP layers
{
  let b = '';
  const bands = [['Transport', 'reads port numbers', C.cream, C.olive, 130], ['Internet', 'reads IP addresses', C.tealLight, C.tealDark, 250], ['Network interface', 'reads MAC addresses', C.teal, C.tealDark, 370]];
  bands.forEach(([n, r, f, e, y]) => {
    b += box(30, y, 840, 110, f, e, 12) + t(52, y + 38, n, { size: 19, weight: 700 }) + t(52, y + 64, r, { size: 15, fill: e, weight: 600, italic: true });
  });
  // network interface devices
  [['NIC', 290], ['Switch', 420], ['WAP', 550], ['Modem', 680]].forEach(([s, x]) => { b += dev(x + 40, 425, s); });
  b += dev(330, 305, 'Router', C.mustard, 130);
  // gateway spans internet (often) dashed
  b += box(470, 278, 140, 44, C.panel, C.ink, 8) + t(540, 306, 'Gateway', { size: 16, weight: 700, anchor: 'middle' });
  b += t(540, 346, 'often here; may span layers', { size: 15, anchor: 'middle', fill: C.muted, italic: true });
  // firewall spans transport + internet
  b += `<rect x="730" y="152" width="120" height="200" rx="10" fill="${PINK}" stroke="${C.rust}" stroke-width="2.5"/>` + tl(790, 240, ['Hardware', 'firewall'], { size: 16, weight: 700, anchor: 'middle', fill: C.rust }, 20);
  b += t(790, 290, 'ports and', { size: 15, anchor: 'middle', fill: C.rust }) + t(790, 308, 'IP addresses', { size: 15, anchor: 'middle', fill: C.rust });
  // device roles
  const roles = [
    ['NIC', 'connects a device to a network; has a unique MAC address'],
    ['Switch', 'forwards frames within a LAN to the matching MAC address'],
    ['WAP', 'lets wireless devices join a wired network'],
    ['Modem', 'converts digital signals for the line, and back'],
    ['Router', 'forwards packets between networks by IP address'],
    ['Gateway', 'connects networks using different protocols'],
    ['Firewall', 'blocks traffic by rules such as IP addresses and ports'],
  ];
  roles.forEach(([k, d], i) => {
    const y = 496 + i * 30;
    b += t(52, y + 22, k, { size: 16, weight: 700 }) + t(150, y + 22, d, { size: 16, fill: C.muted });
  });
  add('02-devices-and-layers',
    svg(900, 732, 'Network devices and the layers they work at', b),
    'Devices placed in TCP/IP layers by what they read. In the network interface layer, which reads MAC addresses: NIC, switch, wireless access point and modem. In the internet layer, which reads IP addresses: the router, and often the gateway, which may span several layers. The hardware firewall spans the internet and transport layers, filtering by IP addresses and port numbers.',
    'A device’s layer follows from what it reads: MAC addresses, IP addresses or port numbers.',
    '## What does each device do?');
}

// 03 TCP vs UDP and the other protocols
{
  let b = '';
  const col = (x, title, sub, f, e) => box(x, 110, 410, 420, f, e) + t(x + 22, 146, title, { size: 22, weight: 700, fill: e }) + t(x + 22, 172, sub, { size: 15, fill: C.muted });
  b += col(30, 'TCP', 'connection-based', C.tealLight, C.tealDark);
  b += col(460, 'UDP', 'connectionless', C.cream, C.olive);
  // TCP sequence
  const sx = 80, rx = 380;
  b += line(sx, 190, sx, 420, C.ink, 2.5) + line(rx, 190, rx, 420, C.ink, 2.5) + t(sx, 438, 'sender', { size: 15, anchor: 'middle' }) + t(rx, 438, 'receiver', { size: 15, anchor: 'middle' });
  const msg = (y1, y2, s, dir = 1, color = C.ink, mk = 'ah', dash = '') => (dir > 0 ? arrow(sx, y1, rx - 4, y2, { color, w: 3, marker: mk, dash }) : arrow(rx, y1, sx + 4, y2, { color, w: 3, marker: mk, dash })) + t((sx + rx) / 2, (y1 + y2) / 2 - 6, s, { size: 15, anchor: 'middle', weight: 600, fill: color });
  b += msg(200, 214, 'set up connection');
  b += msg(240, 254, 'segment 1');
  b += msg(270, 284, 'ack 1', -1, C.tealDark, 'ahT');
  b += arrow(sx, 302, 230, 310, { w: 3, color: C.rust, marker: 'ahR' }) + t(250, 316, '✗', { size: 20, weight: 700, fill: C.rust }) + t(150, 296, 'segment 2', { size: 15, weight: 600, fill: C.rust });
  b += msg(350, 364, 'segment 2 resent');
  b += msg(380, 394, 'ack 2', -1, C.tealDark, 'ahT');
  b += t(52, 472, 'numbered, checked, acknowledged:', { size: 15, weight: 600 }) + t(52, 492, 'arrives complete and in order', { size: 15, weight: 700, fill: C.tealDark });
  b += t(52, 516, 'web pages · email · file transfer', { size: 15, fill: C.muted });
  // UDP
  const ux = 510, urx = 810;
  b += line(ux, 190, ux, 420, C.ink, 2.5) + line(urx, 190, urx, 420, C.ink, 2.5) + t(ux, 438, 'sender', { size: 15, anchor: 'middle' }) + t(urx, 438, 'receiver', { size: 15, anchor: 'middle' });
  [0, 1, 2, 3, 4].forEach((i) => {
    const y = 210 + i * 44;
    b += i === 2 ? arrow(ux, y, 680, y + 8, { w: 3, color: C.rust, marker: 'ahR' }) + t(700, y + 14, '✗', { size: 20, weight: 700, fill: C.rust }) : arrow(ux, y, urx - 4, y + 12, { w: 3 });
    b += t(560, y - 4, 'datagram', { size: 15, weight: 600 });
  });
  b += t(482, 472, 'no acknowledgements or resending:', { size: 15, weight: 600 }) + t(482, 492, 'faster, less overhead, may lose data', { size: 15, weight: 700, fill: C.olive });
  b += t(482, 516, 'live video calls · online games · streaming', { size: 15, fill: C.muted });
  // others
  const others = [['HTTP', 'browsers request web pages; servers send them'], ['HTTPS', 'HTTP with TLS encryption and a certificate check'], ['DHCP', 'gives a joining device an IP address and settings']];
  others.forEach(([k, d], i) => {
    const x = 30 + i * 285;
    b += box(x, 550, 270, 110, C.panel, C.panelEdge) + t(x + 20, 584, k, { size: 19, weight: 700, fill: C.tealDark }) + para(x + 20, 612, d, 30, { size: 15, fill: C.muted }, 19);
  });
  add('03-protocols',
    svg(900, 684, 'TCP, UDP and the application protocols', b),
    'TCP sets up a connection, numbers and acknowledges segments and resends a lost one, so data arrives complete and in order; it suits web pages, email and file transfer. UDP sends datagrams without acknowledgements or resending, so it is faster but may lose data; it suits live calls, games and streaming. HTTP fetches web pages, HTTPS adds TLS encryption and certificates, and DHCP hands out IP addresses.',
    'TCP trades speed for completeness; UDP trades completeness for speed.',
    '## Which protocols must you know?');
}

// 04 Encapsulation (HL)
{
  let b = '';
  b += pill(30, 106, 200, 34, 'HL: layer functions', { fill: C.cream, edge: C.olive, size: 15, color: C.olive });
  const L = [['Application', 'network services to applications', C.panel], ['Transport', 'segments, ports; TCP reliability or UDP speed', C.cream], ['Internet', 'IP addresses; routes packets', C.tealLight], ['Network interface', 'frames over the physical medium', C.teal]];
  const hdr = [null, ['transport', 'header', C.cream], ['IP', 'header', C.tealLight], ['frame', 'header', C.teal]];
  L.forEach(([n, r, f], i) => {
    const y = 156 + i * 118;
    b += box(30, y, 220, 100, f, C.ink, 12) + t(48, y + 36, n, { size: 18, weight: 700 }) + para(48, y + 62, r, 24, { size: 15, fill: C.ink }, 18);
    // packet build-up
    const dataX = 760;
    let x = dataX;
    b += box(dataX, y + 26, 110, 50, C.panel, C.ink, 0) + t(dataX + 55, y + 57, 'data', { size: 16, weight: 600, anchor: 'middle' });
    for (let k = 1; k <= i; k++) {
      x -= 116;
      b += box(x, y + 26, 116, 50, hdr[k][2], C.ink, 0) + t(x + 58, y + 48, hdr[k][0], { size: 15, weight: 700, anchor: 'middle' }) + t(x + 58, y + 67, 'header', { size: 15, anchor: 'middle' });
    }
    b += t(x - 12, y + 57, ['message', 'segment', 'packet', 'frame'][i], { size: 16, weight: 700, anchor: 'end', fill: C.tealDark, italic: true });
    if (i < 3) b += arrow(140, y + 102, 140, y + 116, { w: 3 });
  });
  b += apath('M880,170 L880,500', C.tealDark, 'ahT', 3) ;
  b += box(30, 636, 410, 92, C.panel, C.tealDark) + t(52, 668, 'Sending: encapsulation', { size: 17, weight: 700, fill: C.tealDark }) + t(52, 694, 'each layer adds its header on the way down', { size: 15 });
  b += box(460, 636, 410, 92, C.panel, C.olive) + t(482, 668, 'Receiving', { size: 17, weight: 700, fill: C.olive }) + t(482, 694, 'each layer reads and removes its header', { size: 15 });
  b += box(30, 744, 840, 70, C.cream, C.olive);
  b += t(450, 772, 'Reliability: the internet layer delivers on a best-effort basis;', { size: 16, anchor: 'middle', weight: 600 });
  b += t(450, 796, 'TCP detects missing or damaged segments and requests them again.', { size: 16, anchor: 'middle', weight: 600 });
  add('04-encapsulation',
    svg(900, 838, 'Encapsulation down the TCP/IP layers', b),
    'An HL diagram of the four TCP/IP layers with their roles. Going down, data gains a transport header to become a segment, an IP header to become a packet and a frame header to become a frame; the receiver removes the headers on the way up. Reliability comes from TCP re-requesting segments that the best-effort internet layer loses or damages.',
    'Each layer adds its own header going down and strips it going up.',
    '## The TCP/IP model (layer functions are HL only)');
}

// 05 Packet switching
{
  let b = '';
  b += t(52, 128, 'Each packet has a header', { size: 18, weight: 700 });
  const hf = [['source address', 170, C.tealLight], ['destination address', 200, C.tealLight], ['sequence no.', 140, C.mustard], ['data', 120, C.panel]];
  let hx = 52;
  hf.forEach(([s, w, f]) => { b += box(hx, 142, w, 46, f, C.ink, 0) + t(hx + w / 2, 171, s, { size: 15, weight: 600, anchor: 'middle' }); hx += w; });
  // network
  const R = { A: [260, 330], B: [430, 260], C: [430, 420], D: [600, 300], E: [600, 440] };
  const links = [['A', 'B'], ['A', 'C'], ['B', 'D'], ['C', 'E'], ['B', 'C'], ['D', 'E']];
  b += box(30, 214, 840, 300, C.panel, C.panelEdge);
  links.forEach(([p, q]) => { b += line(R[p][0], R[p][1], R[q][0], R[q][1], C.panelEdge, 4); });
  b += line(130, 330, R.A[0], R.A[1], C.panelEdge, 4) + line(R.D[0], R.D[1], 760, 370, C.panelEdge, 4) + line(R.E[0], R.E[1], 760, 370, C.panelEdge, 4);
  // routes
  b += path(`M130,322 L260,322 L430,252 L600,292 L760,362`, { stroke: C.tealDark, w: 3.5, extra: 'stroke-dasharray="9 6"' });
  b += path(`M130,338 L260,338 L430,428 L600,448 L760,378`, { stroke: C.olive, w: 3.5, extra: 'stroke-dasharray="9 6"' });
  Object.entries(R).forEach(([k, [x, y]]) => { b += `<circle cx="${x}" cy="${y}" r="22" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>` + t(x, y + 5, 'R', { size: 15, weight: 700, anchor: 'middle' }); });
  b += pc(100, 330) + t(100, 372, 'sender', { size: 15, anchor: 'middle' });
  b += pc(790, 370) + t(790, 412, 'destination', { size: 15, anchor: 'middle' });
  const pk = (x, y, n, f) => box(x - 18, y - 16, 36, 32, f, C.ink, 5) + t(x, y + 6, n, { size: 16, weight: 700, anchor: 'middle' });
  b += pk(345, 270, '1', C.tealLight) + pk(515, 258, '3', C.tealLight) + pk(345, 400, '2', C.cream) + pk(515, 452, '4', C.cream);
  b += t(52, 246, 'each router chooses the best available path', { size: 15, fill: C.muted, italic: true });
  b += t(450, 498, 'R = router · packets of one message may take different routes', { size: 15, anchor: 'middle', fill: C.muted });
  // arrive and reassemble
  b += t(52, 556, 'Arrive', { size: 17, weight: 700 }) + [3, 1, 4, 2].map((n, i) => pk(190 + i * 50, 550, String(n), n % 2 ? C.tealLight : C.cream)).join('');
  b += t(370, 556, 'out of order', { size: 15, fill: C.muted });
  b += arrow(490, 550, 540, 550, { w: 3.5 });
  b += t(556, 556, 'Reassembled', { size: 17, weight: 700 }) + [1, 2, 3, 4].map((n, i) => pk(700 + i * 46, 550, String(n), C.mustard)).join('');
  b += t(560, 596, 'using sequence numbers; with TCP, missing packets are requested again', { size: 15, fill: C.tealDark, weight: 600, anchor: 'middle' });
  b += box(30, 620, 840, 84, C.cream, C.olive);
  b += t(52, 652, 'Why it is used', { size: 17, weight: 700 });
  b += t(52, 682, 'lines are shared efficiently · traffic routes around broken links or busy routers · it scales', { size: 15 });
  add('05-packet-switching',
    svg(900, 728, 'Packet switching', b),
    'Each packet carries a header with source and destination addresses and a sequence number. Packets of one message travel independently through routers, each choosing the best available path, so they take different routes and arrive out of order (3, 1, 4, 2); the destination reassembles them as 1, 2, 3, 4 using the sequence numbers. Packet numbers are illustrative.',
    'Packets travel independently and are put back in order by sequence number.',
    '## How does packet switching work?');
}

// 06 Bandwidth calculation and errors
{
  let b = '';
  b += box(30, 110, 840, 270, C.tealLight, C.tealDark);
  b += t(52, 146, 'Worked example: 50 MB file, bandwidth 20 Mbps', { size: 19, weight: 700, fill: C.tealDark });
  const step = (y, k, expr, res, f) => box(52, y, 130, 58, C.panel, C.tealDark, 8) + t(117, y + 36, k, { size: 16, weight: 700, anchor: 'middle' }) + t(206, y + 37, expr, { size: 19 }) + arrow(500, y + 29, 540, y + 29, { w: 3 }) + box(548, y, 300, 58, f, C.ink, 8) + t(698, y + 37, res, { size: 19, weight: 700, anchor: 'middle' });
  b += step(170, 'bytes → bits', '50 × 8', '400 megabits', C.panel);
  b += step(246, 'time', '400 ÷ 20', '20 seconds', C.mustard);
  b += t(698, 340, 'at best', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 700, italic: true });
  b += t(52, 340, 'Bandwidth = the maximum rate, in bits per second.', { size: 15, fill: C.ink });
  b += t(52, 362, 'Congestion and protocol overheads make actual speed lower.', { size: 15, fill: C.muted });
  b += t(450, 420, 'Common causes of transmission error', { size: 20, weight: 700, anchor: 'middle' });
  const causes = ['electromagnetic interference', 'attenuation: signal weakens over distance', 'physical damage to cables', 'congestion: routers drop packets', 'wireless collisions or interference'];
  causes.forEach((s, i) => {
    const x = 30 + (i % 2) * 430, y = 438 + Math.floor(i / 2) * 60;
    const w = i === 4 ? 840 : 410;
    b += box(x, y, w, 48, PINK, C.rust, 10) + t(x + 20, y + 30, s, { size: 16, fill: C.ink, weight: 600 });
  });
  b += arrow(450, 620, 450, 646, { w: 3.5, color: C.tealDark, marker: 'ahT' });
  b += box(30, 652, 840, 56, C.panel, C.tealDark) + t(450, 687, 'Protocols respond with error detection (such as checksums) and retransmission.', { size: 17, weight: 700, anchor: 'middle', fill: C.tealDark });
  add('06-bandwidth-and-errors',
    svg(900, 732, 'Bandwidth and transmission errors', b),
    'A 50 MB file is 50 × 8 = 400 megabits; at a bandwidth of 20 Mbps it takes 400 ÷ 20 = 20 seconds at best, since congestion and overheads lower real speed. Common causes of errors are interference, attenuation, cable damage, congestion and wireless collisions; protocols respond with checksums and retransmission.',
    'Convert bytes to bits before dividing by the bandwidth.',
    '## Bandwidth and transmission errors');
}

// 07 Decentralised internet
{
  let b = '';
  const nets = [[170, 210], [420, 160], [680, 210], [170, 420], [420, 460], [680, 420], [420, 310]];
  const links = [[0, 1], [1, 2], [0, 3], [2, 5], [3, 4], [4, 5], [0, 6], [1, 6], [2, 6], [3, 6], [5, 6], [4, 6]];
  b += box(30, 110, 840, 430, C.panel, C.panelEdge);
  links.forEach(([p, q]) => { const bad = (p === 1 && q === 6); b += line(nets[p][0], nets[p][1], nets[q][0], nets[q][1], bad ? C.rust : C.panelEdge, 4, bad ? '8 6' : ''); });
  nets.forEach(([x, y], i) => { b += cloud(x, y + 8, 0.6, i === 6 ? PINK : C.tealLight); });
  b += t(420, 316, 'failed', { size: 15, weight: 700, anchor: 'middle', fill: C.rust });
  b += t(170, 216, 'network', { size: 15, anchor: 'middle', weight: 600 }) + t(420, 166, 'network', { size: 15, anchor: 'middle', weight: 600 }) + t(680, 216, 'network', { size: 15, anchor: 'middle', weight: 600 });
  b += t(170, 426, 'network', { size: 15, anchor: 'middle', weight: 600 }) + t(420, 466, 'network', { size: 15, anchor: 'middle', weight: 600 }) + t(680, 426, 'network', { size: 15, anchor: 'middle', weight: 600 });
  b += path('M170,240 L170,395 L420,440 L680,395 L680,240', { stroke: C.tealDark, w: 4, extra: 'stroke-dasharray="2 8"' });
  b += apath('M640,232 L668,236', C.tealDark, 'ahT', 3);
  b += t(450, 520, 'packets are routed around the failure', { size: 16, anchor: 'middle', fill: C.tealDark, weight: 700 });
  const pts = [['No single controller', 'many independent organisations agree on common protocols'], ['No single point of failure', 'routers send packets around failures'], ['Result', 'resilient and able to grow, but harder to regulate']];
  pts.forEach(([h, d], i) => {
    const x = 30 + i * 285;
    b += box(x, 560, 270, 120, i === 2 ? C.cream : C.tealLight, i === 2 ? C.olive : C.tealDark) + t(x + 18, 592, h, { size: 17, weight: 700 }) + para(x + 18, 620, d, 30, { size: 15 }, 19);
  });
  add('07-decentralised-internet',
    svg(900, 704, 'A decentralised network of networks', b),
    'Seven networks linked in a mesh; when one central network fails, packets are routed around it through the others. No single organisation controls the internet, there is no single point of failure, and the result is resilient and able to grow but harder to regulate.',
    'With no centre to fail, traffic finds another way round.',
    '## Why is the internet decentralised?');
}

// 08 Loading a web page
{
  let b = '';
  const Y = 260;
  const nodes = [
    [80, 'laptop', (x) => pc(x, Y)],
    [210, 'WAP', (x) => dev(x, Y, 'WAP', C.teal, 90)],
    [340, 'firewall', (x) => dev(x, Y, 'Firewall', PINK, 100)],
    [470, 'router', (x) => dev(x, Y, 'Router', C.mustard, 100)],
    [600, 'modem', (x) => dev(x, Y, 'Modem', C.panel, 100)],
    [730, 'internet', (x) => cloud(x, Y + 10, 0.55, C.cream) + t(x, Y + 6, 'routers', { size: 15, anchor: 'middle', weight: 600 })],
    [840, 'server', (x) => server(x, Y)],
  ];
  b += box(30, 140, 640, 200, C.tealLight, C.tealDark, 16).replace(`stroke-width="2.5"`, `stroke-width="2.5" stroke-dasharray="8 6"`) + t(50, 168, 'School network', { size: 16, weight: 700, fill: C.tealDark });
  for (let i = 0; i < nodes.length - 1; i++) {
    const a = nodes[i][0], c = nodes[i + 1][0];
    b += i === 0 ? path(`M${a + 26},${Y - 4} q${(c - a) / 2 - 30},-24 ${c - a - 70},0`, { stroke: C.tealDark, w: 2.5, extra: 'stroke-dasharray="4 5"' }) : line(a + (i === 5 ? 40 : 50), Y, c - (i + 1 === 5 ? 40 : i + 1 === 6 ? 24 : 50), Y, C.ink, 3);
  }
  nodes.forEach(([x, , draw]) => { b += draw(x); });
  b += t(840, Y + 52, 'web server', { size: 15, anchor: 'middle', weight: 600 });
  b += t(80, Y + 52, 'laptop', { size: 15, anchor: 'middle', weight: 600 });
  // step markers
  const mk = [[80, '1'], [80, '2'], [80, '3'], [340, '4'], [730, '5'], [80, '6']];
  b += badge(140, 210, 15, '1', C.mustard) + badge(340, 210, 15, '4', C.mustard) + badge(470, 210, 15, '4', C.mustard) + badge(730, 200, 15, '5', C.mustard);
  const steps = [
    ['1', 'The laptop joins the Wi-Fi through a WAP; DHCP gives it an IP address.'],
    ['2', 'The browser sends an HTTPS request to the web server.'],
    ['3', 'TCP establishes a connection and splits the request into segments.'],
    ['4', 'The firewall checks the traffic is allowed; the router forwards packets towards the internet through the modem.'],
    ['5', 'Routers across the internet forward packets by IP address; the reply returns the same way.'],
    ['6', 'TCP reassembles the response in order and the browser displays the page.'],
  ];
  let y = 362;
  steps.forEach(([n, s]) => {
    const wl = wrap(s, 82), h = 22 + wl.length * 21;
    b += panel(30, y, 840, h) + badge(62, y + h / 2, 16, n, C.cream) + tl(96, y + 26, wl, { size: 16 }, 21);
    y += h + 8;
  });
  add('08-loading-a-web-page',
    svg(900, y + 16, 'Loading a web page, end to end', b),
    'A laptop on the school Wi-Fi reaches a web server through a wireless access point, firewall, router and modem, then routers across the internet. Six steps: DHCP gives the laptop an IP address, the browser sends an HTTPS request, TCP splits it into segments, the firewall checks it and the router forwards it through the modem, internet routers forward packets by IP address, and TCP reassembles the reply.',
    'Every device and protocol in A.2 plays a part in one page request.',
    '## Worked example: loading a web page');
}
