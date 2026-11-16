/**
 * D-482 -- search title (<title>) for a flashcard topic page.
 *
 * The page heading always keeps the full official topic name; only the
 * <title> that Google shows in results is shortened here.
 *
 * Step 1 (fixed): when "<topic> Flashcards — <subject> <code>" is over 60
 * characters and the course has a syllabus code, drop the subject name.
 * The code (e.g. 7402) still identifies the course.
 *
 * Step 2 (fitLongTopic): 307 topics are still over 60 characters
 * because the board's own topic name is long, for example
 * "Organisms respond to changes in their internal and external environments".
 */
export const SEARCH_TITLE_MAX = 60;

export interface FlashcardTitleParts {
  topicName: string;
  /** "AS Level", "A Level" or "" */
  stageLabel: string;
  subject: string;
  /** syllabus code, or "" when the course has none */
  code: string;
  /** what follows the dash when there is no code, e.g. "IGCSE Chemistry" */
  codeWord: string;
}

export function flashcardSearchTitle(p: FlashcardTitleParts): string {
  const stage = p.stageLabel ? ` (${p.stageLabel})` : '';
  const full = `${p.topicName}${stage} Flashcards — ${p.code ? `${p.subject} ${p.code}` : p.codeWord}`;
  if (full.length <= SEARCH_TITLE_MAX || !p.code) return full;
  const codeOnly = `${p.topicName}${stage} Flashcards — ${p.code}`;
  if (codeOnly.length <= SEARCH_TITLE_MAX) return codeOnly;
  return fitLongTopic(p, codeOnly);
}

/**
 * Called only when even the code-only title is over 60 characters.
 * D-482 (owner, 16 Nov 2026): keep the board's official topic wording in
 * full -- it is what students copy from the syllabus -- and let search
 * results cut the end. The topic still reads first.
 */
function fitLongTopic(_p: FlashcardTitleParts, codeOnly: string): string {
  return codeOnly;
}
