/**
 * Plain-text helpers for advanced-course (AP) resource pages. No Astro imports, so the
 * functions can be checked with `node --experimental-strip-types`.
 */

/**
 * Audit 3, item 28 (25 Nov 2026) -- search snippet for an AP resource page.
 *
 * AP descriptions are one or two sentences of up to 220 characters (content.config.ts)
 * and are also the visible lead. The shared snippet cut (src/utils/seo/meta.ts
 * metaDescription, 155 characters) drops the last clause it can, which on these pages
 * often splits a list: "...how to convert between mass." for "...between mass, moles
 * and particles with dimensional analysis". This picks the snippet from the
 * description's own words, by deletion only:
 * 1. drop a trailing part that is a whole sentence, a part introduced by a colon or a
 *    dash, or a clause that opens with a word that cannot continue a list ("with ...",
 *    "each ...", ", and how ...", ", and the mistakes that cost marks" ...);
 * 2. if no such cut fits, try again with the words repeated on every page of a type
 *    removed ("original Marlbridge", "Specific", "that shows whether you can do it").
 * The longest result of at least 70 characters wins (then at least 40). When nothing
 * fits, the description is returned unchanged and metaDescription cuts it as before.
 * The visible lead and the JSON-LD keep the full description.
 */
const SNIPPET_MAX = 155;
const TAIL_START = /^(?:and |but )?(?:with|each|every|from|plus|including|so|then|which|where|who|how|why|what|when|whether|while|using|without|ready|as well as|and (?:the )?(?:mistakes|common (?:mistakes|errors|slips)|errors|slips|traps|pitfalls)|and common|before|after|because|showing|giving|for each|all|both|one|two|three|four|five|six|seven|eight|nine|ten|twelve)\b/i;
/** ", and <verb> ...": a second coordinated instruction, not the last item of a list. */
const CLAUSE_AND = /^and (?:learn|use|see|practise|practice|explain|find|compare|decide|check|show|write|predict|avoid|apply|interpret|connect|calculate|identify|describe|judge|justify|link|build|test|trace|spot|choose|state|set out|work)\b/;
const BOUNDARY = /[.!?](?=\s+[A-Z])|[,;:](?=\s)|\s[–—](?=\s)|(?<=\S)(?=\s(?:(?:and|or) (?:how|why|what|where|when|which|whether)|and (?:the )?(?:mistakes|common (?:mistakes|errors|slips)|errors|slips|traps|pitfalls)|with (?:the )?(?:mistakes|common (?:mistakes|errors)|worked|full|suggested|answers|solutions))\b)/g;

const compact = (t: string): string => t
  .replace(/^(\w+) original Marlbridge practice questions/, '$1 practice questions')
  .replace(/^Specific (“I can” statements)/, '$1')
  .replace(/ that shows whether you can (?:really )?do it\.$/, ' that tests it.');

function snippetCut(text: string, max: number, min: number): string {
  let best = '';
  for (const m of text.matchAll(BOUNDARY)) {
    const i = m.index ?? 0;
    const head = text.slice(0, i).trimEnd();
    const tail = text.slice(i + m[0].length).trimStart();
    const sentence = /[.!?]/.test(m[0]);
    if (sentence) {
      if (/(?:\b[A-Z]|\d|Mr|Mrs|Ms|Dr|Prof|St|vs|e\.g|i\.e)$/.test(head)) continue;
    } else if (m[0] !== ':' && !/[–—]/.test(m[0]) && !TAIL_START.test(tail) && !(m[0] === ',' && CLAUSE_AND.test(tail))) continue;
    const out = sentence ? `${head}${m[0]}` : `${head.replace(/[,;:]$/, '')}.`;
    if (out.length <= max && out.length >= min && out.length > best.length) best = out;
  }
  return best;
}

export function apMetaDescription(description: string, max = SNIPPET_MAX): string {
  const full = description.replace(/\s+/g, ' ').trim();
  if (full.length <= max) return full;
  for (const min of [70]) {
    for (const text of [full, compact(full)]) {
      if (text.length <= max && text.length >= min) return text;
      const s = snippetCut(text, max, min);
      if (s) return s;
    }
  }
  return full;
}

/**
 * D-532c -- the meta description for an AP resource page: the hand-written `seoDescription`
 * when the frontmatter has one, else the automatic cut of the description above.
 */
export const apPageMetaDescription = (description: string, seoDescription?: string): string =>
  seoDescription?.replace(/s+/g, ' ').trim() || apMetaDescription(description);

/**
 * Audit 3, item 28 -- chemistry subscripts in frontmatter text (key points, objectives,
 * prerequisites, calculator note), which the page prints as plain text. Same pattern as
 * the Markdown bodies (Topic 8.9 revision notes): K_a -> K<sub>a</sub>, P_CO₂ ->
 * P<sub>CO₂</sub>, n_A⁻ -> n<sub>A⁻</sub>; a superscript after the subscript stays
 * outside it (mol_rxn⁻¹). The text is HTML-escaped first, so the result is safe for set:html.
 */
const SUBSCRIPT = /(?<=[A-Za-zΑ-Ωα-ωΔ°0-9)\]₀-₉⁰-⁹⁺⁻])_([A-Za-z0-9][A-Za-z0-9₀-₉]*(?:[⁺⁻](?![¹²³⁴⁵⁶⁷⁸⁹⁰]))?)(?![A-Za-z0-9_])/gu;
export const escapeHtml = (s: string): string => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const apSubscriptHtml = (s: string): string => escapeHtml(s).replace(SUBSCRIPT, '<sub>$1</sub>');
