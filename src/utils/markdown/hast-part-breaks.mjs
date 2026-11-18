/**
 * Line breaks before question parts and multiple-choice options.
 *
 * Practice pages write a question's parts and a multiple-choice question's
 * options on consecutive source lines:
 *
 *   **(a)** Calculate gross profit. **[2]**
 *   **(b)** Calculate the gross profit margin. **[4]**
 *
 *   A: UK households buy more imported cars.
 *   B: More students from the USA pay fees to UK universities.
 *
 * Markdown joins consecutive lines into one paragraph, so the parts and
 * options ran together as a single block of text. This Sätteri hast plugin
 * turns the soft line break into a <br> only where the next line starts a
 * part label such as "(b)", "(ii)" or "3. (a)", or an option label such as
 * "A:" or "B)". Ordinary wrapped prose is left alone, and the content files
 * (and their content hashes) are unchanged. (D-500.)
 */

const PART_LABEL = /^\(?(?:[a-h]|i{1,3}|iv|v|vi{0,3}|ix|x)\)$|^\d{1,2}\.\s*\((?:[a-h]|i{1,3}|iv|v|vi{0,3}|ix|x)\)$/;
// After a newline inside a text node: a plain "(b) " part, or an option "A: " / "B) " / "C. ".
const INLINE_START = /\n[ \t]*(?=\((?:[a-h]|i{1,3}|iv|v|vi{0,3}|ix|x)\)\s|[A-E][:.)]\s+\S)/g;

const textOf = (n) => (n?.type === 'text' ? n.value ?? '' : (n?.children ?? []).map(textOf).join(''));

const br = () => ({ type: 'element', tagName: 'br', properties: {}, children: [] });

export const partBreaksPlugin = {
  name: 'marlbridge-part-breaks',
  text(node, ctx) {
    const value = node.value ?? '';
    if (!value.includes('\n')) return;
    const parent = ctx.parent(node);
    if (!parent || parent.type !== 'element' || !['p', 'li', 'blockquote'].includes(parent.tagName)) return;

    const parts = [];
    let last = 0;
    for (const m of value.matchAll(INLINE_START)) {
      parts.push({ type: 'text', value: value.slice(last, m.index) }, br());
      last = m.index + m[0].length;
    }

    // A text node that ends in a newline, followed by **(b)** or **3. (a)**.
    const kids = parent.children ?? [];
    const next = kids[kids.indexOf(node) + 1];
    const tail = value.slice(last);
    const endsWithBreak = /\n[ \t]*$/.test(tail);
    const nextIsPart = next?.type === 'element' && ['strong', 'b', 'em'].includes(next.tagName) && PART_LABEL.test(textOf(next).trim());

    if (parts.length === 0 && !(endsWithBreak && nextIsPart)) return;
    if (endsWithBreak && nextIsPart) {
      parts.push({ type: 'text', value: tail.replace(/\n[ \t]*$/, '') }, br());
    } else {
      parts.push({ type: 'text', value: tail });
    }
    ctx.replaceNode(node, parts.filter((p) => p.type !== 'text' || p.value !== ''));
  },
};
