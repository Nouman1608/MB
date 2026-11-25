/**
 * IB trademark and non-affiliation wording (owner text, audit round 3 item 23,
 * 25 Nov 2026). Rendered by IbTrademarkNote.astro.
 */
export const IB_TRADEMARK_ATTRIBUTION =
  '“International Baccalaureate” and “IB” are trademarks of the International Baccalaureate Organization. Marlbridge is not affiliated with or endorsed by the IB.';

/** True when a page belongs to the IB (board slug list contains 'ib'). */
export const isIbPage = (boards: readonly string[] | undefined): boolean => Boolean(boards?.includes('ib'));
