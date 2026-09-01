// scripts/growth/csv-lite.mjs
// Minimal dependency-free CSV parser, sufficient for Google Search Console /
// GA4 UI exports (comma-separated, double-quote escaping, optional BOM).
// Deliberately not a general-purpose CSV library -- this repo keeps its
// script dependencies at zero beyond what's already in package.json, and
// GSC/GA4 exports are a well-known, simple shape.

export function parseCsv(text) {
  const clean = text.replace(/^﻿/, '').replace(/\r\n/g, '\n');
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  for (let i = 0; i < clean.length; i++) {
    const c = clean[i];
    if (inQuotes) {
      if (c === '"') {
        if (clean[i + 1] === '"') { field += '"'; i++; }
        else { inQuotes = false; }
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ',') {
      row.push(field);
      field = '';
    } else if (c === '\n') {
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
    } else {
      field += c;
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((r) => r.length > 1 || (r.length === 1 && r[0] !== ''));
}

export function parseCsvObjects(text) {
  const rows = parseCsv(text);
  if (rows.length === 0) return [];
  const header = rows[0].map((h) => h.trim());
  return rows.slice(1).map((r) => {
    const obj = {};
    header.forEach((h, i) => { obj[h] = (r[i] ?? '').trim(); });
    return obj;
  });
}
