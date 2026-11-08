/**
 * D-444 -- flashcards for Cambridge IGCSE Literature in English 0475 (2026).
 *
 * Literature is organised by papers and routes, and its set texts rotate by
 * examination year, so no card is about a particular set text. Cards cover the
 * four assessment objectives, what each paper and question type requires, the
 * routes through the qualification, and the poetic, prose and dramatic methods
 * an answer analyses, each with a one-line effect. Card ids are `<subtopic
 * number>-<n>` (or `<topic number>-<n>` where a paper has no subtopics) and are
 * permanent: add a new card with the next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 0475); origin 'revision-notes'.
 *
 * Written from Marlbridge's 0475 study guides and revision notes. Not tiered.
 * Plain text only (see types.ts).
 */
import type { Flashcard, FlashcardDeck } from './types.ts';

interface Spec { n: number; f: string; b: string; src?: string }

const sub = (topic: string, subtopic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b, src }) => ({
    id: `${number}-${n}`,
    topic,
    subtopic,
    front: f,
    back: b,
    origin: src ? 'revision-notes' as const : 'authored' as const,
    ...(src ? { source: src } : {}),
  }));

const topicOnly = (topic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b, src }) => ({
    id: `${number}-${n}`,
    topic,
    front: f,
    back: b,
    origin: src ? 'revision-notes' as const : 'authored' as const,
    ...(src ? { source: src } : {}),
  }));

const P1 = 'paper-1-poetry-and-prose-0475';
const D2 = 'igcse-english-literature-paper-2-drama-revision-notes';
const D3 = 'igcse-english-literature-paper-3-drama-revision-notes';
const U4 = 'igcse-english-literature-paper-4-unseen-revision-notes';

export const DECK_CAMBRIDGE_IGCSE_ENGLISH_LITERATURE: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'igcse',
  subjectSlug: 'english-literature',
  syllabusCode: '0475',
  syllabusSeries: '2026',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Paper 1 Poetry and Prose
    ...sub(P1, 'section-a-poetry-0475', '1.1', [
      { n: 1, f: 'How is 0475 Paper 1 Poetry and Prose set out?', b: '1 hour 30 minutes, 50 marks, compulsory for every candidate. Two questions: one from Section A Poetry and one from Section B Prose, 25 marks each. Relevant poems and passages are printed on the paper.' },
      { n: 2, f: 'What are the four assessment objectives in 0475 English Literature?', b: 'AO1 knowledge of the content, shown through reference and quotation; AO2 understanding of meanings, contexts and themes; AO3 understanding of how writers use language, structure and form; AO4 a sensitive, informed personal response.' },
      { n: 3, f: 'What does the command word "Explore" mean in 0475?', b: 'Write in detail about particular aspects: sustained close analysis of two or three well-chosen moments rather than a broad survey of the whole poem or passage.' },
      { n: 4, f: 'What is enjambment, and what can it do?', b: 'A sentence running on past the end of a line without punctuation. It can create pace, a sense of overflow or surprise, or throw emphasis onto the first word of the next line.' },
      { n: 5, f: 'What is a caesura, and what can it do?', b: 'A pause in the middle of a line, usually marked by punctuation. It can slow the rhythm, create hesitation, or isolate a word or phrase for emphasis.' },
      { n: 6, f: 'How do you show AO4 personal response without a bolted-on "I think" sentence?', b: 'Let it run through the analysis: finish each point by saying what the choice does to the reader and why it matters, so the response is shown by implication.' },
    ]),
    ...sub(P1, 'section-b-prose-0475', '1.2', [
      { n: 1, f: 'What makes a strong paragraph on a Paper 1 prose passage?', b: 'A point about the text, a short embedded quotation, analysis of the specific language or structural choice, and a link to the writer\'s purpose or the effect on the reader.' },
      { n: 2, f: 'What is the effect of first-person narration?', b: 'It gives direct access to one character\'s thoughts and feelings, creating intimacy, but limits the view to what that narrator knows, which can make them unreliable.' },
      { n: 3, f: 'What is a third-person omniscient narrator?', b: 'A narrator outside the story who can report any character\'s thoughts and comment on events, giving the reader a wide view and often guiding judgement.' },
      { n: 4, f: 'What is pathetic fallacy, and what is its effect?', b: 'Weather or surroundings that reflect a character\'s mood or the atmosphere, such as a storm during conflict. It reinforces tone and can foreshadow events.' },
      { n: 5, f: 'Why does retelling the plot of a passage score poorly?', b: 'Narration earns little beyond basic AO1. Marks come from analysing how language, structure and form create meaning and effect.' },
      { n: 6, f: 'How should time be split across the two Paper 1 answers?', b: 'Evenly: about 5 minutes reading and planning and 35–38 minutes writing for each 25-mark answer, with a small buffer. Over-running the first answer costs marks on the second.' },
    ]),

    // 2 Paper 2 Drama
    ...topicOnly('paper-2-drama-0475', '2', [
      { n: 1, f: 'How is 0475 Paper 2 Drama set out?', b: '1 hour 30 minutes, 50 marks, 50% of the qualification. Two questions on two set plays, 25 marks each. Closed book: extracts for passage-based questions are printed on the paper.', src: D2 },
      { n: 2, f: 'What is the one-of-each rule on Paper 2?', b: 'For each play you choose a passage-based (a) or an essay (b) question, but across the paper you must answer one passage-based and one essay question.', src: D2 },
      { n: 3, f: 'Passage-based or essay question: what does each require?', b: 'Passage-based: close reading of the printed extract\'s language and stagecraft. Essay: a planned argument of three or four developing points across the whole play, directed at the named character, relationship or theme.' },
      { n: 4, f: 'Why does a closed-book drama paper need a quotation bank?', b: 'No texts are allowed, so quotations must come from memory. About 10–15 flexible lines per play, covering several characters and themes, will serve most essay titles.' },
      { n: 5, f: 'What should a drama answer say that a novel answer would not?', b: 'How the play works on stage and on an audience: entrances and exits, stage directions, staging, what the audience sees and hears, and dramatic irony.' },
      { n: 6, f: 'What is dramatic irony, and what is its effect?', b: 'The audience knows something a character does not. It creates tension or suspense and makes the character\'s words carry an extra, often painful, meaning.' },
      { n: 7, f: 'What is a soliloquy, and why does it matter?', b: 'A speech in which a character alone on stage voices their thoughts. It reveals motives and inner conflict directly to the audience, building intimacy or complicity.' },
      { n: 8, f: 'What is an aside?', b: 'A short remark to the audience (or one character) that others on stage are not meant to hear, often creating dramatic irony or comedy.' },
      { n: 9, f: 'How should time be split on Paper 2?', b: '45 minutes per question. Two balanced 25-mark answers nearly always outscore one long answer and one rushed one.', src: D2 },
    ]),

    // 3 Paper 3 Drama (Open Text)
    ...topicOnly('paper-3-drama-open-text-0475', '3', [
      { n: 1, f: 'How is 0475 Paper 3 Drama (Open Text) set out?', b: '45 minutes, 25 marks: one question from a choice of two, both on the same single set play. Open book.', src: D3 },
      { n: 2, f: 'What does "open book" permit on Paper 3?', b: 'A clean copy of the set text. Annotations, highlighting and underlining are not allowed, nor are editions with extensive study notes or facing-page explanations.', src: D3 },
      { n: 3, f: 'Which papers can Paper 3 be paired with?', b: 'Paper 3 is never taken alone: it pairs with either Paper 4 Unseen or Component 5 Coursework. The alternative route is Paper 2 Drama on its own.' },
      { n: 4, f: 'Which assessment objective does an open book help most?', b: 'AO1, because quotations can be located and checked. It does not help AO2 understanding or AO4 personal response, which must be worked out in advance.' },
      { n: 5, f: 'How do you prepare to use an open text efficiently?', b: 'Pre-select key passages by theme and character, for example each character\'s opening position, the turning point, and the resolution, so exam time is not spent searching the play cold.' },
      { n: 6, f: 'Is Paper 2 or Paper 3 the closed-book drama paper?', b: 'Paper 2 is closed book (two plays from memory). Paper 3 is open book (one play, clean copy).' },
    ]),

    // 4 Paper 4 Unseen
    ...topicOnly('paper-4-unseen-0475', '4', [
      { n: 1, f: 'How is 0475 Paper 4 Unseen set out?', b: '1 hour 15 minutes, 25 marks: one question from two, either an unseen poem or an unseen prose extract, printed in full. No set text and no prior knowledge needed.', src: U4 },
      { n: 2, f: 'Who sits 0475 Paper 4?', b: 'Only candidates on the Paper 3 plus Paper 4 route. Candidates entered for Paper 2 Drama do not sit it.', src: U4 },
      { n: 3, f: 'How should the planning time on Paper 4 be used?', b: 'About 20 of the 75 minutes: read the extract twice, annotate for language, structure, form, tone and shifts in mood, then commit to the poem or the prose option.', src: U4 },
      { n: 4, f: 'What form features matter most in an unseen poem?', b: 'Line breaks, rhyme and rhythm, and stanza structure, each linked to the effect it creates.' },
      { n: 5, f: 'What form features matter most in an unseen prose extract?', b: 'Paragraphing, narrative viewpoint and pacing, and how tension or character builds across the extract.' },
      { n: 6, f: 'What is a volta in a poem?', b: 'A turn or shift in a poem\'s argument, tone or mood, often marked by "but" or a new stanza. Tracking it shows how the poem\'s meaning develops.' },
      { n: 7, f: 'What is the commonest weakness in a Paper 4 answer?', b: 'A running summary of what happens instead of selective, well-supported analysis of how specific words, images and structural choices create effects.' },
    ]),

    // 5 Component 5 Coursework
    ...topicOnly('component-5-coursework-0475', '5', [
      { n: 1, f: 'What is 0475 Component 5 Coursework?', b: 'A portfolio of two assignments on different studied texts, 600–1200 words each, 25 marks. It is taken with Paper 3 as the alternative to Paper 4.' },
      { n: 2, f: 'What makes a good coursework task?', b: 'A question that invites an argument (not a topic), focuses on the writer\'s methods, and is narrow enough to explore in depth within the word limit.' },
      { n: 3, f: 'What is a thesis in a literature essay?', b: 'A one-sentence answer to the question, decided before writing. Every paragraph should support, develop, qualify or complicate it.' },
      { n: 4, f: 'What are the four parts of a point-evidence-analysis-link paragraph?', b: 'Point (a claim that moves the argument on), evidence (a short quotation or precise reference), analysis (how the writer\'s choice creates meaning) and link (back to the thesis or another part of the text).' },
      { n: 5, f: 'When does context earn marks in a literature essay?', b: 'When it helps explain a choice the writer made and the answer returns to the text. Background history or biography that does not is not credited.' },
      { n: 6, f: 'Which tense should you use when writing about a text?', b: 'The present tense, for example "the narrator reveals", because the text exists now whenever it is read.' },
      { n: 7, f: 'How do you keep coursework authentic?', b: 'Write it yourself, acknowledge any critic\'s idea in your own words with its source, and keep dated drafts and notes showing how the work developed.' },
    ]),
  ],
};
