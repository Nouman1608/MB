/**
 * D-444 -- flashcards for IB Diploma Programme Language A: Literature
 * (first assessments for SL and HL 2021).
 *
 * The syllabus record lists the three areas of exploration as topics with no
 * subtopics, so there is one block per area, in syllabus order. Card ids are
 * `<topic number>-<n>` and are permanent (browser progress is keyed by them):
 * add a new card with the next unused n, never renumber.
 *
 * This is a skills course: the cards cover what each assessment component
 * requires, literary forms and their conventions, devices with a one-line
 * effect, and the key ideas of each area. Assessment cards sit in the area
 * whose pages cover that component (Paper 1, poetry and critical lenses in
 * area 1; context, translation, prose and drama and the HL essay in area 2;
 * Paper 2, intertextuality and the individual oral in area 3).
 *
 *   The syllabus record is not tiered, so no card carries a tier. HL-only
 *   content is marked "(HL only)" in words.
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 'DP Language A: Literature');
 *               origin 'revision-notes'.
 *
 * Plain text only (see types.ts).
 */
import type { Flashcard, FlashcardDeck } from './types.ts';

interface Spec { n: number; f: string; b: string; u?: true; src?: string }

const topicOnly = (topic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b, u, src }) => ({
    id: `${number}-${n}`,
    topic,
    front: f,
    back: b,
    ...(u ? { tier: 'upper' as const } : {}),
    origin: src ? 'revision-notes' as const : 'authored' as const,
    ...(src ? { source: src } : {}),
  }));

const P = 'ib-dp-language-a-literature';
const HLE = 'ib-dp-language-a-literature-hl-essay-revision-notes';

export const DECK_IB_IB_DP_LANGUAGE_A_LITERATURE: FlashcardDeck = {
  boardSlug: 'ib',
  qualificationSlug: 'ib-dp',
  subjectSlug: 'language-a-literature',
  syllabusCode: 'DP Language A: Literature',
  syllabusSeries: 'First assessments for SL and HL 2021',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Readers, writers and texts
    ...topicOnly(`${P}-readers-writers-texts`, '1', [
      { n: 1, f: 'What is the central idea of Readers, writers and texts?', b: 'Reading is active: readers construct meaning from a writer\'s choices, so two readers can build different, defensible interpretations. Explain what a choice opens up or closes off for the reader, not just its name.' },
      { n: 2, f: 'What does Paper 1 involve in Language A: Literature?', b: 'Two unseen literary extracts from different literary forms, each with a guiding question. SL: guided analysis of one extract, 1 hour 15 minutes, 20 marks. HL: both extracts, 2 hours 15 minutes, 40 marks. 35% at both levels.' },
      { n: 3, f: 'How does Literature Paper 1 differ from Language and Literature Paper 1?', b: 'In Literature, Paper 1 uses only literary extracts (poetry, prose, drama). In Language and Literature, it uses unseen non-literary texts such as adverts, speeches and news reports.' },
      { n: 4, f: 'Enjambment versus caesura', b: 'Enjambment: the sentence runs over the line break, creating momentum or putting weight on the word at the start of the next line.\nCaesura: a strong pause inside a line, which can slow the reading or mark a shift.' },
      { n: 5, f: 'Petrarchan versus Shakespearean sonnet', b: 'Petrarchan: octave (abbaabba) + sestet, with the volta (turn) near line 9 — often problem, then response.\nShakespearean: three quatrains + couplet (abab cdcd efef gg) — argument, then a closing twist.' },
      { n: 6, f: 'What is iambic pentameter, and what is blank verse?', b: 'Iambic pentameter: five iambs (da-DUM) per line, ten syllables. Blank verse: unrhymed iambic pentameter, which sounds speech-like and flexible.' },
      { n: 7, f: 'Metre versus rhythm, and form versus structure', b: 'Metre is the regular pattern of stresses; rhythm is how the lines actually move, including departures from it.\nForm is the shape (sonnet, quatrains); structure is the movement (where it turns, what repeats, how it ends).' },
      { n: 8, f: 'What is apostrophe in poetry?', b: 'Direct address to an absent person or to an object ("O moon, ..."). It can create intensity or show the speaker\'s isolation, since the addressee cannot answer.' },
      { n: 9, f: 'Concept versus theme', b: 'A concept (creativity, perspective, culture, transformation, communication) is a question you bring to any text. A theme is what one particular text is about.' },
      { n: 10, f: 'What is a critical lens, and how should you choose one?', b: 'A way of reading, such as formalist, reader-response, historical, Marxist, feminist, postcolonial or ecocritical. The lens belongs to the reader, not the writer; choose the one the evidence in the text invites.' },
    ]),

    // 2 Time and space
    ...topicOnly(`${P}-time-space`, '2', [
      { n: 1, f: 'What is the key skill in Time and space?', b: 'Link a fact of context to a choice in the text and to its effect. Start from the text: quote a moment, name the choice, state the effect, then add the context that explains it. Context explains; it never fills space.' },
      { n: 2, f: 'Context of production versus context of reception', b: 'Production: the time, place, culture and conditions in which a work was written (Ibsen writing A Doll\'s House in 1879).\nReception: the time, place and culture in which it is read or watched now.' },
      { n: 3, f: 'What is an anachronistic reading?', b: 'Judging a work only by the values of the reader\'s own time, for example calling a character "backward" and stopping there, instead of exploring what the work meant in its own context.' },
      { n: 4, f: 'How should you write about a work studied in translation?', b: 'Name the translator and edition; base main claims on what survives translation (events, structure, images, point of view); treat claims about single words as claims about this translation; compare two translations of a key line where you can.' },
      { n: 5, f: 'Focaliser versus narrator', b: 'The narrator is the voice that tells the story. The focaliser is the character through whose eyes events are seen. They can differ, as in third-person limited narration.' },
      { n: 6, f: 'What is free indirect style?', b: 'A character\'s thoughts rendered in the narrator\'s sentence without "she thought". It blurs judgement, so the reader must ask whose view is being expressed.' },
      { n: 7, f: 'Soliloquy, monologue and aside', b: 'Soliloquy: a character alone on stage speaks thoughts aloud, giving the audience private access.\nMonologue: a long speech heard by other characters.\nAside: a brief remark other characters do not hear, creating complicity with the audience.' },
      { n: 8, f: 'What is dramatic irony?', b: 'When the audience knows more than a character. It creates tension, pity or comedy. Verbal irony, by contrast, is a speaker saying the opposite of what they mean.' },
      { n: 9, f: 'What is the HL essay in Language A: Literature?', b: 'Independent coursework of 1,200–1,500 words on one literary work studied in the course, built on a focused line of inquiry. If the work is a collection of poems or stories, refer to more than one text within it. 20% of the HL grade. (HL only)' },
      { n: 10, f: 'What is a line of inquiry in the HL essay?', b: 'The single, focused question your whole essay answers. The thesis is your answer to it in one or two sentences. (HL only)', src: HLE },
      { n: 11, f: 'Embedded versus dropped quotation', b: 'An embedded quotation is built into the grammar of your own sentence; a dropped quotation stands alone without being worked into your argument. Embedding keeps evidence and analysis together.', src: HLE },
    ]),

    // 3 Intertextuality: connecting texts
    ...topicOnly(`${P}-intertextuality`, '3', [
      { n: 1, f: 'What is intertextuality in Language A: Literature?', b: 'The idea that no literary work exists in isolation: every text is written and read against other texts and traditions, whether it deliberately echoes them or unconsciously works within them.' },
      { n: 2, f: 'Echo (homage), response and subversion', b: 'Echo or homage: borrows form or content admiringly.\nResponse: engages critically or in dialogue with an earlier work\'s ideas.\nSubversion: deliberately overturns the conventions or assumptions of an earlier work or genre.' },
      { n: 3, f: 'What makes an intertextual comparison strong?', b: 'A precise point of connection (a specific shared concern or technique, not just "both deal with loss"); how each work treats it differently; and what the comparison reveals that reading either work alone would not.' },
      { n: 4, f: 'Why must a comparison account for context?', b: 'Two works can share a theme but treat it very differently because of when, where and in which literary tradition each was written. A strong answer explains that difference rather than treating both as products of one moment.' },
      { n: 5, f: 'What does Paper 2 involve in Language A: Literature?', b: 'A comparative essay on two studied literary works, answering one of four questions, written from memory in 1 hour 45 minutes. 35% at SL, 25% at HL.' },
      { n: 6, f: 'What is a comparative thesis for Paper 2?', b: 'One arguable claim that answers the question for both works and names how they differ in method, and why (form or context). Body paragraphs then compare the works point by point.' },
      { n: 7, f: 'What is the individual oral in Language A: Literature?', b: 'A prepared response of 10 minutes plus 5 minutes of teacher questions on how a global issue is presented in two studied literary works, supported by an extract from each. One work must be originally written in the language studied and one studied in translation. 30% SL, 20% HL.' },
      { n: 8, f: 'What do the individual oral criteria cover?', b: 'Knowledge and understanding of both works and their context; analysis of how the global issue is presented in each extract; focus and organisation within the time; and language (register, clarity, terminology).' },
      { n: 9, f: 'Why is a narrow global issue better in the oral?', b: 'A tightly framed issue, evidenced in specific details from both extracts, can be analysed precisely in the time. A broad theme gestured at in general terms leads to description rather than analysis.' },
      { n: 10, f: 'What are the weightings of the four components at SL and HL?', b: 'SL: Paper 1 35%, Paper 2 35%, individual oral 30%.\nHL: Paper 1 35%, Paper 2 25%, individual oral 20%, HL essay 20%.' },
    ]),
  ],
};
