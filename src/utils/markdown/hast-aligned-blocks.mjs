/**
 * Aligned-column blocks drawn in a fixed-width face.
 *
 * Many study resources write columns of working as an unlabelled code block,
 * padding with spaces so the columns line up:
 *
 *   alkene          ->  halogenoalkane     HBr, room temp
 *   halogenoalkane  ->  alcohol            NaOH(aq), reflux
 *
 * An unlabelled block is drawn in the site's proportional, wrapping style
 * (right for worked steps, D-476), so the columns came out ragged on a desktop
 * and wrapped apart on a phone. A block fenced as `text` already gets the
 * fixed-width, scrolling style (D-478). This Sätteri hast plugin gives the same
 * style to an unlabelled block that is clearly in columns, by adding
 * `data-aligned` to its <pre>; the stylesheet does the rest. The content files
 * and their content hashes are unchanged. (D-523.)
 *
 * "Clearly in columns" is deliberately strict, because a prose-like block
 * drawn in fixed width that does not wrap is worse than a ragged one: at least
 * three non-blank lines, and one column start (a character offset that follows
 * a run of two or more spaces) shared by at least 60% of them, where the
 * offset is also a column start for at least three lines.
 */

const textOf = (n) => (n?.type === 'text' ? n.value ?? '' : (n?.children ?? []).map(textOf).join(''));

export function looksAligned(text) {
  const lines = String(text).split('\n').filter((l) => l.trim() !== '');
  if (lines.length < 3) return false;
  const counts = new Map();
  for (const line of lines) {
    const starts = new Set();
    for (const m of line.matchAll(/(?<=\S) {2,}(?=\S)/g)) starts.add(m.index + m[0].length);
    for (const p of starts) counts.set(p, (counts.get(p) ?? 0) + 1);
  }
  const best = Math.max(0, ...counts.values());
  return best >= 3 && best >= Math.ceil(lines.length * 0.6);
}

export const alignedBlocksPlugin = {
  name: 'marlbridge-aligned-blocks',
  element: {
    filter: ['pre'],
    visit(node, ctx) {
      // Shiki has already named the language on the <pre>: "plaintext" for an unlabelled fence.
      const lang = String(node.properties?.dataLanguage ?? '');
      if (lang && lang !== 'plaintext') return; // a real language, or text (already fixed-width), keeps its own style
      const code = (node.children ?? []).find((c) => c.type === 'element' && c.tagName === 'code');
      const text = textOf(code ?? node);
      if (/[֐-ࣿ]/.test(text)) return; // right-to-left text keeps the right-to-left block styling
      if (!looksAligned(text)) return;
      ctx.replaceNode(node, { ...node, properties: { ...node.properties, dataAligned: '' } });
    },
  },
};
