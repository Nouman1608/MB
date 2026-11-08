/**
 * D-444 -- flashcards for AQA GCSE English Language 8700 (first teaching 2015).
 *
 * The syllabus record follows the specification's subject content (3.1.1
 * Critical reading and comprehension, 3.1.2 Writing, 3.1.3 Spoken language);
 * the cards on each content bullet cover the assessment objectives, what the
 * Paper 1 and Paper 2 questions that test it require, text types and their
 * conventions, and language and structural terms with a one-line effect.
 *
 * IDS. The specification does not number its content bullets, so their
 * subtopic number in syllabus-topics.ts is '' and the validator expects ids of
 * the form `-<n>`. To keep those ids unique, each bullet takes its own block of
 * n, in syllabus order: critical reading 101+, summary and synthesis 201+,
 * evaluation of a writer's choices 301+, comparing texts 401+, clear and
 * coherent text 501+, writing for impact 601+, presenting 701+, responding
 * 801+, spoken Standard English 901+. Ids are permanent: add a card with the
 * next unused n in its block, never renumber.
 *
 * Written from Marlbridge's 8700 study guides and revision notes; no
 * revision-notes page maps to a single content bullet, so every card is
 * authored. Not tiered. Plain text only (see types.ts).
 */
import type { Flashcard, FlashcardDeck } from './types.ts';

interface Spec { n: number; f: string; b: string }

const sub = (topic: string, subtopic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b }) => ({
    id: `${number}-${n}`,
    topic,
    subtopic,
    front: f,
    back: b,
    origin: 'authored' as const,
  }));

const R = 'paper-1-explorations-in-creative-reading-and-writing-8700';
const W = 'paper-2-writers-viewpoints-and-perspectives-8700';
const S = 'spoken-language-8700';

export const DECK_AQA_GCSE_ENGLISH_LANGUAGE: FlashcardDeck = {
  boardSlug: 'aqa',
  qualificationSlug: 'gcse',
  subjectSlug: 'english-language',
  syllabusCode: '8700',
  syllabusSeries: 'For first teaching 2015',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Critical reading and comprehension
    ...sub(R, 'critical-reading-and-comprehension-8700', '', [
      { n: 101, f: 'How are AQA GCSE English Language Papers 1 and 2 set out?', b: 'Each is 1 hour 45 minutes, 80 marks, 50% of the GCSE: Section A Reading (40 marks) and Section B Writing (40 marks).' },
      { n: 102, f: 'What does Paper 1 (Explorations in creative reading and writing) use as its source?', b: 'One unseen literary fiction extract from the 20th or 21st century. The 19th century is kept for Paper 2.' },
      { n: 103, f: 'What do the AQA English Language reading objectives AO1 to AO4 test?', b: 'AO1 identify and interpret explicit and implicit information and ideas, and select and synthesise evidence; AO2 analyse language and structure using terminology; AO3 compare writers\' ideas and perspectives; AO4 evaluate texts critically.' },
      { n: 104, f: 'What does Paper 1 Question 1 require?', b: '4 marks: list four things from a specified part of the source. It rewards identifying explicit information accurately (AO1).' },
      { n: 105, f: 'What is the difference between explicit and implicit information?', b: 'Explicit information is stated directly in the text. Implicit information is suggested and must be inferred from clues such as word choice or behaviour.' },
    ]),
    ...sub(R, 'summary-and-synthesis-8700', '', [
      { n: 201, f: 'What does Paper 2 (Writers\' viewpoints and perspectives) use as its sources?', b: 'Two unseen non-fiction extracts on a shared theme: one from the 19th century and one from the 20th or 21st century.' },
      { n: 202, f: 'What does Paper 2 Question 2 require?', b: 'A summary of the differences (or similarities) between the two sources on a given focus, 8 marks (AO1): inferences drawn from both texts, supported by evidence.' },
      { n: 203, f: 'What does "synthesise" mean in AQA English Language?', b: 'Bring together information from more than one text into one coherent answer, rather than dealing with each separately.' },
      { n: 204, f: 'Why does Paper 2 pair a 19th-century text with a modern one?', b: 'It forces comparison across real historical distance: tone, assumed audience and rhetorical conventions differ more clearly than between two contemporary texts.' },
    ]),
    ...sub(R, 'evaluation-of-a-writers-choice-of-vocabulary-form-grammatical-and-structural-features-8700', '', [
      { n: 301, f: 'What does Paper 1 Question 2 require?', b: '8 marks (AO2): analyse how the writer uses language in a given section, quoting precisely and explaining the effect of words, phrases, techniques and sentence forms.' },
      { n: 302, f: 'What does Paper 1 Question 3 require?', b: '8 marks (AO2): analyse how the writer structures the whole extract, such as the opening focus, shifts, zooming in or out, and the ending.' },
      { n: 303, f: 'What does Paper 1 Question 4 require?', b: '20 marks (AO4): evaluate a statement about part of the extract, judging how far the writer achieves an effect with textual evidence. It is worth as much as Questions 1–3 combined.' },
      { n: 304, f: 'What does Paper 2 Question 3 require?', b: '12 marks (AO2): analyse how the writer of one source uses language to achieve effects.' },
      { n: 305, f: 'What is a structural feature in a fiction extract? Give examples.', b: 'A choice about how the text is ordered and shaped: a shift in focus, a flashback, a change of perspective, a one-line paragraph, or a cyclical ending. Each shapes what the reader notices and when.' },
      { n: 306, f: 'What is the effect of a one-sentence paragraph?', b: 'It isolates a moment or idea, slowing the pace and giving it emphasis, often marking a shock or turning point.' },
      { n: 307, f: 'What is a semantic field, and why comment on one?', b: 'A group of words linked by meaning (such as words of war or of decay). A pattern of them builds a consistent mood or idea across the text.' },
    ]),
    ...sub(R, 'comparing-texts-8700', '', [
      { n: 401, f: 'What does Paper 2 Question 4 require?', b: '16 marks (AO3): compare how the two writers convey their different perspectives or viewpoints, and the methods they use to do so.' },
      { n: 402, f: 'How do you structure a strong comparison of two sources?', b: 'Work through comparable points (an attitude, a language choice, a structural device), discussing both texts together each time and explaining why each writer chose their approach (audience, era, purpose).' },
      { n: 403, f: 'Which assessment objective is tested on Paper 2 but not Paper 1?', b: 'AO3, comparing writers\' ideas and perspectives. Paper 1 has a single source, so there is nothing to compare.' },
    ]),

    // 2 Writing
    ...sub(W, 'producing-clear-and-coherent-text-8700', '', [
      { n: 501, f: 'What do the AQA English Language writing objectives AO5 and AO6 reward?', b: 'AO5: communicate clearly, effectively and imaginatively, matching tone, style and register to form, purpose and audience, and organise ideas with structural and grammatical features. AO6: a range of vocabulary and sentence structures with accurate spelling and punctuation.' },
      { n: 502, f: 'How are the 40 Section B writing marks split?', b: '24 marks for content and organisation (AO5) and 16 for technical accuracy (AO6), on both papers.' },
      { n: 503, f: 'What does Paper 1 Question 5 require?', b: 'One piece of descriptive or narrative writing, from a choice of tasks linked in theme to the reading source. It is an original piece, not a continuation of the extract.' },
      { n: 504, f: 'What does Paper 2 Question 5 require?', b: 'Writing to present a viewpoint on the Section A theme, in a specified form such as an article, letter or speech, for a given audience and purpose.' },
      { n: 505, f: 'What conventions does a newspaper or magazine article need?', b: 'A headline and often a subheading, an opening that hooks the reader, clearly paragraphed points, and a register suited to its readership.' },
    ]),
    ...sub(W, 'writing-for-impact-8700', '', [
      { n: 601, f: 'Which persuasive devices suit Paper 2 viewpoint writing?', b: 'Rhetorical questions, direct address, a counter-argument then rebuttal, facts and anecdotes, the rule of three, and a deliberate tone, all serving a clear viewpoint.' },
      { n: 602, f: 'What makes a strong piece of descriptive writing?', b: 'A clear shape (hook, development, turning point, ending), precise vocabulary and sensory detail, and varied sentence structures, rather than sheer length.' },
      { n: 603, f: 'What is the effect of the rule of three?', b: 'A list of three items or phrases sounds complete and memorable, adding emphasis and rhythm to an argument or description.' },
      { n: 604, f: 'What is the effect of a short sentence after several long ones?', b: 'It stops the reader abruptly, giving the idea emphasis and often creating tension or a sense of finality.' },
      { n: 605, f: 'What is a counter-argument, and why include one?', b: 'An opposing view that you state and then rebut. It makes your argument seem fair and considered, and so more convincing.' },
    ]),

    // 3 Spoken language
    ...sub(S, 'presenting-information-and-ideas-8700', '', [
      { n: 701, f: 'How is AQA GCSE English Language spoken language assessed?', b: 'A teacher-assessed presentation in a formal setting, followed by questions and feedback. It is reported separately as an endorsement with 0% weighting toward the GCSE grade.' },
      { n: 702, f: 'What makes a strong spoken presentation?', b: 'A clear purpose, a structure (an attention-gaining opening, a few developed points, a conclusion), detail and evidence, knowledge without reading a script, and controlled delivery.' },
      { n: 703, f: 'What is signposting in a presentation?', b: 'Phrases that tell the audience where the talk is going, such as "my second point is". It helps listeners follow the structure.' },
    ]),
    ...sub(S, 'responding-to-spoken-language-8700', '', [
      { n: 801, f: 'How should you respond to questions after a presentation?', b: 'Listen to the whole question, think, then give a relevant, developed answer: a short answer followed by a reason or example.' },
      { n: 802, f: 'How should you respond to feedback or a challenge?', b: 'Show you have understood it, concede a fair point or defend your view politely, and stay appropriately formal.' },
      { n: 803, f: 'How can you prepare for the questions?', b: 'Predict three or four likely questions and practise answers, and have a polite way to buy time, such as "That\'s an interesting question, let me think about the most important part of it."' },
    ]),
    ...sub(S, 'spoken-standard-english-8700', '', [
      { n: 901, f: 'What is Standard English?', b: 'The form of English used in formal writing and public speech, with consistent grammar and vocabulary not restricted to one region.' },
      { n: 902, f: 'Which non-standard forms should you avoid in a formal presentation?', b: 'Errors of verb agreement and tense, such as "we was" (we were) and "they done it" (they did it), plus slang and fillers such as "like".' },
      { n: 903, f: 'Is speaking with a regional accent non-standard English?', b: 'No. Standard English is about grammar and vocabulary, not accent, so it can be spoken in any accent.' },
    ]),
  ],
};
