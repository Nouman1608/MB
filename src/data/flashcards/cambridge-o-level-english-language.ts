/**
 * D-444 -- flashcards for Cambridge O Level English Language 1123 (2024-2026).
 *
 * The syllabus has two skill strands with no subtopics, Reading (Paper 1) and
 * Writing (Paper 2), so every card sits on a topic (topicOnly helper). Cards
 * cover the R1-R5 and W1-W5 objectives, what each question requires, text
 * types and their conventions, and language devices with a one-line effect.
 * Card ids are `<topic number>-<n>` and are permanent: add a new card with the
 * next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 1123); origin 'revision-notes'.
 *
 * Written from Marlbridge's 1123 study guides and revision notes. Not tiered.
 * Plain text only (see types.ts).
 */
import type { Flashcard, FlashcardDeck } from './types.ts';

interface Spec { n: number; f: string; b: string; src?: string }

const topicOnly = (topic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b, src }) => ({
    id: `${number}-${n}`,
    topic,
    front: f,
    back: b,
    origin: src ? 'revision-notes' as const : 'authored' as const,
    ...(src ? { source: src } : {}),
  }));

const RN1 = 'o-level-english-language-paper-1-reading-revision-notes';
const RN = 'o-level-english-language-revision-notes';
const RN2 = 'o-level-english-paper-2-writing-revision-notes';

export const DECK_CAMBRIDGE_O_LEVEL_ENGLISH_LANGUAGE: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'o-level',
  subjectSlug: 'english-language',
  syllabusCode: '1123',
  syllabusSeries: '2024-2026',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Reading
    ...topicOnly('reading-1123', '1', [
      { n: 1, f: 'How is 1123 Paper 1 Reading set out?', b: '2 hours, 50 marks, 50% of the qualification. 80% of its marks are for Reading (AO1) and 20% for Writing (AO2). The two texts are in a separate insert; no dictionaries.', src: RN1 },
      { n: 2, f: 'What do the Reading objectives R1 to R5 test?', b: 'R1 explicit meanings; R2 implicit meanings and attitudes; R3 analysing, evaluating and developing facts, ideas and opinions; R4 how writers achieve effects; R5 selecting and using information for a purpose.' },
      { n: 3, f: 'What does Paper 1 Question 1 (Comprehension) require?', b: '16 marks on Text A, a narrative of about 900 words. Explicit sub-questions ask you to locate and restate (R1); implicit ones need an inference grounded in specific detail (R2).' },
      { n: 4, f: 'What does Paper 1 Question 2 (Use of Language) require?', b: '9 marks, testing R4: quote briefly and explain the effect of the writer\'s word or phrase on the reader. A correct paraphrase of meaning alone does not earn the marks.' },
      { n: 5, f: 'What does Paper 1 Question 3(a) (Summary) require?', b: 'A summary of Text B (about 550–600 words) in continuous prose of no more than 150 words: 10 Reading marks (R1, R5) and 10 Writing marks (W2, W3), awarded independently.', src: RN1 },
      { n: 6, f: 'What happens to summary points written after the 150-word limit?', b: 'They are not credited. Bullet points and copied phrases also cost marks, so select the points first, then join them in your own words.' },
      { n: 7, f: 'What does Paper 1 Question 3(b) require?', b: '5 marks testing R2 only: a clear inference about Text B, grounded in its specific wording.' },
      { n: 8, f: 'How do you check whether a point belongs in the summary?', b: 'Test it against the exact focus of the instruction, not just whether it is true of the text. An accurate point about something else earns nothing and wastes words.' },
      { n: 9, f: 'What does a strong Use of Language answer look like?', b: 'A short quotation plus its effect in context, for example: the metaphor "the crowd was a river" suggests people moving as one uncontrollable mass, stressing the narrator\'s helplessness.' },
      { n: 10, f: 'What do the command words identify, explain and summarise require on Paper 1?', b: 'Identify: name, select or recognise. Explain: set out reasons and say why or how, with evidence. Summarise: give the main points only, without incidental detail.' },
      { n: 11, f: 'What is the effect of personification in a narrative?', b: 'Giving an object or place human qualities makes it seem alive or active, often making a setting feel threatening, sympathetic or watchful.' },
      { n: 12, f: 'Why should you read the questions before the passage?', b: 'It focuses your first reading on what you actually need to find, rather than absorbing every detail equally.', src: RN },
    ]),

    // 2 Writing
    ...topicOnly('writing-1123', '2', [
      { n: 1, f: 'How is 1123 Paper 2 Writing set out?', b: '2 hours, 50 marks, 50% of the qualification. 80% Writing (AO2) and 20% Reading (AO1), the mirror of Paper 1. Section A Directed Writing and Section B Composition, 25 marks each.', src: RN2 },
      { n: 2, f: 'What do the Writing objectives W1 to W5 reward?', b: 'W1 articulating experience, thought and imagination; W2 organising ideas for deliberate effect; W3 a range of vocabulary and sentence structures; W4 register appropriate to context; W5 accurate spelling, punctuation and grammar.' },
      { n: 3, f: 'What does Paper 2 Section A (Directed Writing) require?', b: 'One compulsory task: use one or two source texts (about 400–450 words) to write a speech, email, report, letter or article of about 250–350 words for a set audience and purpose.', src: RN2 },
      { n: 4, f: 'How are the 25 Directed Writing marks split?', b: '15 for writing (all of W1–W5) and 10 for reading (R3, R5): how well you analyse, evaluate and develop the source material, not merely refer to it.' },
      { n: 5, f: 'What is the most common way to lose marks in Directed Writing?', b: 'Writing a general opinion essay instead of grounding every point in the given texts. Draw at least one specific point from each source.' },
      { n: 6, f: 'What does Paper 2 Section B (Composition) require?', b: 'One piece of about 350–450 words chosen from four titles: two descriptive and two narrative. No source text; all 25 marks are for writing.', src: RN2 },
      { n: 7, f: 'Why is register (W4) not assessed in the Composition?', b: 'There is no set audience or format, so only W1, W2, W3 and W5 are assessed.', src: RN2 },
      { n: 8, f: 'Descriptive or narrative composition: what is the difference?', b: 'Descriptive writing builds a vivid, controlled picture of a person, place or situation with no plot needed. Narrative writing tells connected events with a beginning, development and resolution or turning point.' },
      { n: 9, f: 'What conventions does a formal letter need?', b: 'An appropriate greeting and sign-off, a clear opening stating the purpose, paragraphs for each point, a register suited to the recipient, and a closing that states what you want to happen next.' },
      { n: 10, f: 'What conventions does a speech need?', b: 'Direct address to the audience, a strong opening, signposting so listeners can follow, rhetorical devices such as questions and patterns of three, and a memorable close.' },
      { n: 11, f: 'What is the effect of a rhetorical question in persuasive writing?', b: 'It involves the reader or listener by making them answer silently, usually with the answer the writer wants.' },
      { n: 12, f: 'Which accuracy errors cost W5 marks most often?', b: 'Subject–verb agreement, inconsistent tense, comma splices (sentences joined only by a comma) and apostrophes confused between possession and plurals.' },
    ]),
  ],
};
