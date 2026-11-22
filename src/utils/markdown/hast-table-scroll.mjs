/**
 * Wide tables scroll inside their own box instead of running off the screen.
 *
 * A markdown table is rendered as a bare <table>. On a phone, about 7% of the
 * tables in the study resources are wider than the screen, and the page does
 * not scroll sideways, so their right-hand columns were cut off. Giving every
 * table some padding, which makes it more readable, would push roughly 4% more
 * of them over the edge.
 *
 * This Sätteri hast plugin wraps each <table> in a <div class="table-scroll">
 * whose CSS (src/styles/global.css) lets it scroll sideways. The table itself
 * is untouched, so its rows, headers and cells keep their table semantics for
 * screen readers. The wrapper is a focusable group so that a keyboard user can
 * scroll it; a table that fits never shows a scrollbar. The content files, and
 * their content hashes, are unchanged. (D-518.)
 */
export const tableScrollPlugin = {
  name: 'marlbridge-table-scroll',
  element: {
    filter: ['table'],
    visit(node, ctx) {
      ctx.wrapNode(node, {
        raw: '<div class="table-scroll" role="group" aria-label="Scrollable table" tabindex="0"></div>',
      });
    },
  },
};
