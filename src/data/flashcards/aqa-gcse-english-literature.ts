/**
 * D-444 -- flashcards for AQA GCSE English Literature 8702 (first teaching 2015).
 *
 * Cards cover the assessment objectives, what each paper and section requires,
 * dramatic, narrative and poetic methods with a one-line effect, and a few
 * set-text facts for texts the specification names (the Shakespeare and
 * 19th-century novel lists and the anthology clusters), with short
 * out-of-copyright quotations only.
 *
 * IDS. Sections 3.1-3.2 are numbered, so their ids are `<subtopic number>-<n>`.
 * The two 3.3 Skills headings are not numbered by the specification, so their
 * subtopic number in syllabus-topics.ts is '' and the validator expects ids of
 * the form `-<n>`: reading takes the block 101+ and writing 201+. Ids are
 * permanent: add a card with the next unused n, never renumber.
 *
 * Written from Marlbridge's 8702 study guides and revision notes; no
 * revision-notes page maps to a single section, so every card is authored.
 * Not tiered. Plain text only (see types.ts).
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

const P1 = 'paper-1-shakespeare-and-the-19th-century-novel-8702';
const P2 = 'paper-2-modern-texts-and-poetry-8702';
const SK = 'skills-8702';

export const DECK_AQA_GCSE_ENGLISH_LITERATURE: FlashcardDeck = {
  boardSlug: 'aqa',
  qualificationSlug: 'gcse',
  subjectSlug: 'english-literature',
  syllabusCode: '8702',
  syllabusSeries: 'For first teaching 2015',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Shakespeare and the 19th-century novel (Paper 1)
    ...sub(P1, 'section-a-shakespeare-8702', '3.1.1', [
      { n: 1, f: 'How is AQA GCSE English Literature Paper 1 set out?', b: '1 hour 45 minutes, closed book, 64 marks, 40% of the GCSE. Section A Shakespeare and Section B the 19th-century novel, each starting from a printed extract and moving out to the whole text.' },
      { n: 2, f: 'Which Shakespeare plays are set for AQA 8702?', b: 'Macbeth, Romeo and Juliet, The Tempest, The Merchant of Venice, Much Ado About Nothing and Julius Caesar.' },
      { n: 3, f: 'How many marks is the Shakespeare question worth?', b: '34: 30 for the response plus 4 for AO4 (vocabulary, sentence structures, spelling and punctuation).' },
      { n: 4, f: 'How should a Shakespeare answer use the printed extract?', b: 'Start from the extract and reach outward to the play as a whole, so the two feel like one argument rather than two halves.' },
      { n: 5, f: 'What does "Fair is foul, and foul is fair" establish at the start of Macbeth?', b: 'The witches\' paradox sets up a world where appearances deceive and moral values are inverted, a theme that runs through the play.' },
      { n: 6, f: 'Why note staging in a Shakespeare answer?', b: 'The play is drama, so how a line might be delivered or staged is analysable evidence, not just what it means on the page.' },
    ]),
    ...sub(P1, 'section-b-the-19th-century-novel-8702', '3.1.2', [
      { n: 1, f: 'Which 19th-century novels are set for AQA 8702?', b: 'The Strange Case of Dr Jekyll and Mr Hyde, A Christmas Carol, Great Expectations, Jane Eyre, Frankenstein, Pride and Prejudice and The Sign of Four.' },
      { n: 2, f: 'How many marks is the 19th-century novel question worth?', b: '30, marked on AO1, AO2 and AO3. There are no AO4 accuracy marks on this question.' },
      { n: 3, f: 'How should you organise a quotation bank for the novel?', b: 'Chronologically across the novel, so you can trace how a character or theme develops, which outscores single-scene answers.' },
      { n: 4, f: 'How does Dickens introduce Scrooge as "solitary as an oyster"?', b: 'The simile presents him as closed, hard and isolated, yet hints that something valuable may be hidden inside, preparing for his transformation.' },
      { n: 5, f: 'How should context be used in a novel answer?', b: 'Woven into the analysis of a quotation (for example Victorian attitudes to poverty), not saved for a standalone paragraph.' },
    ]),

    // 2 Modern texts and poetry (Paper 2)
    ...sub(P2, 'section-a-modern-texts-8702', '3.2.1', [
      { n: 1, f: 'How is AQA GCSE English Literature Paper 2 set out?', b: '2 hours 15 minutes, closed book, 96 marks, 60% of the GCSE. Section A modern texts (34), Section B the poetry anthology (30), Section C unseen poetry (32).' },
      { n: 2, f: 'What does Paper 2 Section A require?', b: 'One essay from a choice of two on the studied modern prose or drama text (post-1914), 30 marks plus 4 for AO4 accuracy. There is no printed extract.' },
      { n: 3, f: 'Name some modern texts on the AQA 8702 list.', b: 'There are twelve, centre-chosen, including An Inspector Calls, Lord of the Flies and Animal Farm.' },
      { n: 4, f: 'What should a strong modern-text paragraph combine?', b: 'What a character does or says, the theme it connects to, the context that shapes why it matters, and the writer\'s method, moving between them fluidly.' },
    ]),
    ...sub(P2, 'section-b-poetry-8702', '3.2.2', [
      { n: 1, f: 'What does Paper 2 Section B require?', b: 'A 30-mark comparison of a named poem from your anthology cluster with a second poem of your own choice from the same cluster. The named poem is printed.' },
      { n: 2, f: 'What are the clusters in the AQA poetry anthology?', b: 'Poems Past and Present has three clusters of 15 poems: Love and Relationships, Power and Conflict, and Worlds and Lives. You study one.' },
      { n: 3, f: 'Why does comparing poems by theme alone cap the mark?', b: 'AO2\'s higher bands need comparison of form and structure as well as language and theme, for example a rhyme scheme that breaks down against restless enjambment.' },
      { n: 4, f: 'What is a pairing plan for the anthology question?', b: 'Two or three poems you could confidently compare with any other poem in the cluster on shared themes such as loss, power or identity, prepared in advance.' },
    ]),
    ...sub(P2, 'section-c-unseen-poetry-8702', '3.2.3', [
      { n: 1, f: 'What does Paper 2 Section C require?', b: 'Two compulsory questions: analyse one unseen poem (24 marks), then compare it with a second unseen poem (8 marks).' },
      { n: 2, f: 'What is a repeatable first-read routine for an unseen poem?', b: 'First read: subject and tone. Second: structural shape (stanzas, rhyme, line length). Then find two or three language choices that support or complicate the first impression.' },
      { n: 3, f: 'What should the 8-mark unseen comparison focus on?', b: 'How the two poets\' methods (language, structure, form) compare in presenting a shared subject, not just what each poem is about.' },
      { n: 4, f: 'What is the effect of a regular rhyme scheme breaking down?', b: 'The form can enact a loss of order or control that the speaker feels, so the structure itself carries the meaning.' },
    ]),

    // 3 Skills
    ...sub(SK, 'reading-comprehension-and-reading-critically-8702', '', [
      { n: 101, f: 'What are the four assessment objectives in AQA GCSE English Literature?', b: 'AO1 read, understand and respond, with an informed personal response and textual references; AO2 analyse language, form and structure using terminology; AO3 the relationship between texts and their contexts; AO4 vocabulary, sentence structures, spelling and punctuation.' },
      { n: 102, f: 'What is the difference between summary and interpretation?', b: 'Summary says what happens. Interpretation states a testable view of what it suggests, such as what a decision reveals about a character\'s values.' },
      { n: 103, f: 'Why use tentative language such as "may suggest" or "could imply"?', b: 'Meanings can often be read more than one way, and offering a second possible reading is a mark of higher-level work.' },
      { n: 104, f: 'Language, form and structure: what does each cover?', b: 'Language: word choice, imagery, sound, tone. Form: the type of text and its conventions (play, sonnet, novel). Structure: how it is organised, including order, shifts, openings and endings.' },
      { n: 105, f: 'What does context mean in English Literature?', b: 'The circumstances that shaped a text or how it is read, such as its time and society, the writer\'s background and the audience. Use it only where it explains an idea in the text.' },
    ]),
    ...sub(SK, 'writing-skills-8702', '', [
      { n: 201, f: 'Where are AO4 accuracy marks awarded in AQA 8702?', b: 'On the Shakespeare question (Paper 1) and the modern-text question (Paper 2), 4 marks each, for vocabulary, sentence structures, spelling and punctuation.' },
      { n: 202, f: 'How should quotations be used in a literature essay?', b: 'Short, precise and embedded in your own sentence, then explained: point, evidence, explanation. A quotation is not an explanation.' },
      { n: 203, f: 'Which comparative words help a poetry comparison?', b: '"Whereas", "in contrast", "similarly" and "both poets", used to compare ideas and methods throughout, not only subject matter.' },
      { n: 204, f: 'Why must a closed-book quotation be recalled exactly?', b: 'There is no text to check against in the exam, and analysis of a specific word choice falls apart if the words are wrong. Learn a focused bank precisely.' },
    ]),
  ],
};
