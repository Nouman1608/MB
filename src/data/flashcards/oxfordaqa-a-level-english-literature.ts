/**
 * D-444 -- flashcards for OxfordAQA International AS and A-level English Literature 9675
 * (Version 5.3).
 *
 * Cards cover what each unit and section requires, the conventions of the
 * genres and ideas the units are built on (tragedy, place, crime and mystery,
 * representation) with their key terms, and set-text facts for texts the
 * specification names in the syllabus record (Units 1 and 2), with short
 * out-of-copyright quotations only.
 *
 * IDS. The Unit 1 and Unit 2 sections are not numbered in syllabus-topics.ts
 * (number ''), so the validator expects ids of the form `-<n>`. To keep those
 * ids unique, each section takes its own block of n: Unit 1 Section A 101+,
 * Section B 201+; Unit 2 Section A 301+, Section B 401+. Units 3 and 4 itemise
 * no subtopics, so their ids are `3-<n>` and `4-<n>`. Ids are permanent: add a
 * card with the next unused n in its block, never renumber.
 *
 * Written from Marlbridge's 9675 study guides and revision notes; no
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

const topicOnly = (topic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b }) => ({
    id: `${number}-${n}`,
    topic,
    front: f,
    back: b,
    origin: 'authored' as const,
  }));

const U1 = 'unit-1-aspects-of-dramatic-tragedy-9675';
const U2 = 'unit-2-place-in-literary-texts-9675';

export const DECK_OXFORDAQA_A_LEVEL_ENGLISH_LITERATURE: FlashcardDeck = {
  boardSlug: 'oxfordaqa',
  qualificationSlug: 'a-level',
  subjectSlug: 'english-literature',
  syllabusCode: '9675',
  syllabusSeries: 'Version 5.3, for International AS exams from May/June 2018, A-level from May/June 2019',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Unit 1 Aspects of Dramatic Tragedy -- Section A
    ...sub(U1, 'unit-1-section-a-9675', '', [
      { n: 101, f: 'How is OxfordAQA 9675 Unit 1 (Aspects of Dramatic Tragedy) set out?', b: '2 hours, closed book, 50 marks: 50% of the International AS and 20% of the A-level. Section A a passage-based question on an Elizabethan or Jacobean tragedy (25), Section B an essay on a later tragedy (25).' },
      { n: 102, f: 'Which plays are set for 9675 Unit 1 Section A?', b: 'One of Othello, King Lear, Hamlet, Doctor Faustus (B text) and The Duchess of Malfi.' },
      { n: 103, f: 'What does Unit 1 Section A require?', b: 'Close reading of the given extract\'s language and dramatic method first, then connecting outward to how that moment works in the play\'s tragic structure.' },
      { n: 104, f: 'What does Iago\'s "the green-eyed monster" show about jealousy in Othello?', b: 'Iago warns Othello against jealousy while deliberately provoking it; the image presents jealousy as a devouring creature, and the irony shows his manipulation.' },
      { n: 105, f: 'What does Lear\'s "Nothing will come of nothing" reveal in the opening scene?', b: 'Lear\'s angry reply to Cordelia\'s refusal to flatter him shows his pride and his blindness to true love, the error of judgement that sets his downfall in motion.' },
      { n: 106, f: 'What is the tragic significance of Faustus\'s pact in Doctor Faustus?', b: 'He sells his soul for twenty-four years of knowledge and power. His pride and refusal to repent, despite chances, drive the morality-play structure to damnation.' },
    ]),
    // 1 Unit 1 -- Section B
    ...sub(U1, 'unit-1-section-b-9675', '', [
      { n: 201, f: 'Which plays are set for 9675 Unit 1 Section B?', b: 'One of Death of a Salesman, A Streetcar Named Desire, Hedda Gabler, Waiting for Godot and Translations.' },
      { n: 202, f: 'What does Unit 1 Section B require?', b: 'A sustained, genre-focused essay on the whole play, with memorised evidence from several points in the text.' },
      { n: 203, f: 'What are hamartia and catharsis?', b: 'Hamartia: the tragic hero\'s fatal flaw or error of judgement. Catharsis: the release of pity and fear the audience experiences through the tragedy.' },
      { n: 204, f: 'Why does Unit 1 set tragedies from two different periods?', b: 'To test whether your understanding of tragic convention (flawed protagonists, pride, blindness and insight, pity and fear) transfers across eras.' },
      { n: 205, f: 'What makes a genre-focused answer stronger than a plot-and-theme answer?', b: 'It debates whether the play uses, complicates or subverts each tragic convention, rather than only identifying that the convention is present.' },
    ]),

    // 2 Unit 2 Place in Literary Texts -- Section A
    ...sub(U2, 'unit-2-section-a-9675', '', [
      { n: 301, f: 'How is OxfordAQA 9675 Unit 2 (Place in Literary Texts) set out?', b: '2 hours, open book (clean copies), 50 marks: 50% of the International AS and 20% of the A-level. Section A an essay on a prose text (25), Section B an essay on a poetry selection (25).' },
      { n: 302, f: 'Which prose texts are set for 9675 Unit 2 Section A?', b: 'One of Heart of Darkness, The Great Gatsby, Americanah, Small Island, Last Man in Tower and The Remains of the Day.' },
      { n: 303, f: 'Name some angles on "place" that a Unit 2 essay can explore.', b: 'Specific locations; the setting in place and time; the natural world; social identity and class; place as a setting for relationships; place as a political space; home and homeland; the language used for place.' },
      { n: 304, f: 'Why should a Unit 2 essay range beyond geography?', b: '"Place" is left deliberately open, so strong essays use several angles, such as class, home or politics, not location alone.' },
    ]),
    // 2 Unit 2 -- Section B
    ...sub(U2, 'unit-2-section-b-9675', '', [
      { n: 401, f: 'Which poets are set for 9675 Unit 2 Section B?', b: 'A selection by one of William Wordsworth, Robert Frost, Thomas Hardy or Seamus Heaney.' },
      { n: 402, f: 'How do poets use the natural world to explore place?', b: 'Landscape can carry beauty, memory or loss, or show its despoliation, and often reflects the speaker\'s feelings or a wider social change.' },
      { n: 403, f: 'How should you prepare for an open-book poetry essay?', b: 'Know the selection well enough to find strong evidence quickly across several poems, and have links between poems ready by theme and method.' },
      { n: 404, f: 'What is a lyric poem?', b: 'A short poem expressing a single speaker\'s thoughts and feelings, often about a moment, place or memory.' },
    ]),

    // 3 Unit 3 Elements of Crime and Mystery
    ...topicOnly('unit-3-elements-of-crime-and-mystery-9675', '3', [
      { n: 1, f: 'What elements of crime and mystery writing should you look for?', b: 'The crime and how it is revealed; the investigator; suspects; clues and red herrings; setting; narrative method; and the resolution (is order restored and justice complete?).' },
      { n: 2, f: 'What is a red herring?', b: 'A misleading clue that points suspicion in the wrong direction, keeping the mystery open and the reader guessing.' },
      { n: 3, f: 'What are the "two stories" in much crime fiction?', b: 'The crime that happened in the past and the investigation in the present. The writer controls the order in which information reaches the reader.' },
      { n: 4, f: 'What is delayed revelation, and what is its effect?', b: 'Withholding the culprit or a key fact until late. It sustains suspense and can force the reader to re-read earlier scenes differently.' },
      { n: 5, f: 'How can the criminal be presented in crime writing?', b: 'As monstrous, as a victim of circumstance, or as uncomfortably close to ordinary people, which shapes the reader\'s sympathy and judgement.' },
      { n: 6, f: 'Why ask whether a crime text follows or breaks the genre\'s conventions?', b: 'Conventions can satisfy readers or be broken to surprise or challenge them, so ask what the writer gains either way.' },
      { n: 7, f: 'How is OxfordAQA 9675 Unit 3 assessed?', b: 'A 2-hour closed-book exam worth 50 marks and 30% of the International A-level: two essays of 25 marks, one on each of two texts chosen from the set list. The specification says two from eight but prints nine texts.' },
    ]),

    // 4 Unit 4 Literary Representations
    ...topicOnly('unit-4-literary-representations-9675', '4', [
      { n: 1, f: 'What does representation mean in Unit 4?', b: 'The way a text portrays a person, group, place, event or idea through choices of language, structure, viewpoint and form: a construction, not a mirror.' },
      { n: 2, f: 'What questions should you ask about a representation?', b: 'Who is represented and who is missing or silent; who does the representing; what is emphasised or left out; what attitude is invited; and whether it stays stable.' },
      { n: 3, f: 'How does narrative viewpoint shape representation?', b: 'First person presents others subjectively, possibly unreliably. Third person can seem objective but still guides judgement through selection and tone.' },
      { n: 4, f: 'How can structure shape a representation?', b: 'Where and how often a character appears matters: a figure kept at the margins is represented differently from one at the centre.' },
      { n: 5, f: 'How should context be used in a representation essay?', b: 'Show how attitudes of the time (to class, gender, race, empire or religion) shape or are challenged by a feature of the text, using only facts you are sure of.' },
      { n: 6, f: 'What does it mean when a character is given no direct speech?', b: 'They are represented only through others\' words, which can silence them and shows whose perspective the text privileges.' },
    ]),
  ],
};
