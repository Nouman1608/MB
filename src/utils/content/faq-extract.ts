/**
 * Reads the visible "## Frequently asked questions" section of a study
 * resource's Markdown body and returns its question/answer pairs, so the
 * FAQPage JSON-LD on /resources/<slug>/ is built from exactly the text the
 * page shows (the same rule the hub pages follow: structured data only
 * repeats visible content).
 *
 * Expected shape (the site's house style):
 *
 *   ## Frequently asked questions
 *
 *   **What is a mole?**
 *   The amount of substance containing 6.02 × 10²³ particles.
 *
 *   **Next question?**
 *   Answer, possibly over several lines.
 *
 * The section ends at the next `#`/`##` heading or the end of the body.
 * Anything that does not fit the shape (a list, a table, a sub-heading) is
 * skipped rather than guessed at. Answers are returned as plain text.
 */
export interface FaqItem { question: string; answer: string }

const HEADING = /^##\s+(?:frequently asked questions|faqs?)\s*$/i;

/** Strip the inline Markdown a short answer may contain. */
export function plainText(md: string): string {
  return md
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/(^|[\s(])\*([^*\s][^*]*)\*/g, '$1$2')
    .replace(/(^|[\s(])_([^_\s][^_]*)_/g, '$1$2')
    .replace(/\s+/g, ' ')
    .trim();
}

export function extractFaq(body: string): FaqItem[] {
  const lines = body.replace(/\r\n/g, '\n').split('\n');
  const start = lines.findIndex((l) => HEADING.test(l.trim()));
  if (start === -1) return [];
  const items: FaqItem[] = [];
  let question: string | null = null;
  let answer: string[] = [];
  const flush = () => {
    const a = plainText(answer.join(' '));
    if (question && a) items.push({ question, answer: a });
    question = null;
    answer = [];
  };
  let inFence = false;
  for (let i = start + 1; i < lines.length; i++) {
    const line = lines[i];
    if (/^```/.test(line.trim())) inFence = !inFence;
    if (inFence) continue;
    if (/^#{1,2}\s/.test(line)) break;
    const q = line.trim().match(/^\*\*(.+\?)\*\*$/);
    if (q) { flush(); question = plainText(q[1]); continue; }
    // Inline style: "**Question?** Answer starts on the same line…"
    const qi = line.trim().match(/^\*\*([^*]+\?)\*\*\s+(\S.*)$/);
    if (qi) { flush(); question = plainText(qi[1]); answer.push(qi[2]); continue; }
    if (!question) continue;
    if (line.trim() === '') { if (answer.length) flush(); continue; }
    // A list, table or sub-heading under a question is not a plain answer: drop that pair.
    if (/^\s*([-*+]|\d+\.|\||#{3,})\s?/.test(line)) { question = null; answer = []; continue; }
    answer.push(line.trim());
  }
  flush();
  return items;
}
