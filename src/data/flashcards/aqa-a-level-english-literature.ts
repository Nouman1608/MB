/**
 * D-444 -- flashcards for AQA A-level English Literature B 7717 (recorded in
 * syllabus-topics.ts as '7712 / 7717'; the record verifies Literature B).
 *
 * Literature B is genre-led, so cards cover the five assessment objectives,
 * what each paper, section and NEA task requires, the conventions of each genre
 * option (tragedy, comedy, crime, political and social protest) with their key
 * terms, the Critical anthology lenses, and a few set-text facts for texts named
 * on Marlbridge's 7717 pages, with short out-of-copyright quotations only.
 * Card ids are `<subtopic number>-<n>` and are permanent: add a new card with
 * the next unused n, never renumber.
 *
 * Written from Marlbridge's 7717 study guides and revision notes; no
 * revision-notes page maps to a single option, so every card is authored.
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

const P1 = 'paper-1-literary-genres-7717';
const P2 = 'paper-2-texts-and-genres-7717';
const NEA = 'non-exam-assessment-theory-and-independence-7717';

export const DECK_AQA_A_LEVEL_ENGLISH_LITERATURE: FlashcardDeck = {
  boardSlug: 'aqa',
  qualificationSlug: 'a-level',
  subjectSlug: 'english-literature',
  syllabusCode: '7712 / 7717',
  syllabusSeries: 'English Literature B, for first teaching 2025 (AS 7716; code matches this site\'s overview record)',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Literary genres (Paper 1)
    ...sub(P1, 'option-1a-aspects-of-tragedy-7717', '3.1.1', [
      { n: 1, f: 'How is AQA English Literature B Paper 1 (Literary genres) set out?', b: '2 hours 30 minutes, closed book, 75 marks, 40% of the A-level, on one option (Tragedy or Comedy): Section A a Shakespeare passage, Section B a Shakespeare essay, Section C an essay linking two further texts. 25 marks each.' },
      { n: 2, f: 'What are the five assessment objectives in AQA English Literature?', b: 'AO1 an informed, accurate, well-expressed personal response; AO2 how meanings are shaped in texts; AO3 the significance of contexts; AO4 connections across texts; AO5 different interpretations.' },
      { n: 3, f: 'What is a tragic hero?', b: 'A protagonist of high standing whose downfall arises from their own choices or flaw as well as circumstance, arousing the audience\'s pity and fear.' },
      { n: 4, f: 'Hamartia, hubris and catharsis: what does each mean?', b: 'Hamartia: the tragic flaw or error of judgement. Hubris: excessive pride that defies limits. Catharsis: the release of pity and fear the audience feels at the end.' },
      { n: 5, f: 'What does a genre-led answer do that a text-led answer does not?', b: 'It debates how the text uses, subverts or complicates the genre\'s conventions (does the ending really achieve catharsis?) rather than summarising plot and features.' },
      { n: 6, f: 'What does the Section C linking essay require?', b: 'An essay connecting two further texts within the genre option, from a choice of two questions. One text must be drama and one must be written before 1900.' },
    ]),
    ...sub(P1, 'option-1b-aspects-of-comedy-7717', '3.1.2', [
      { n: 1, f: 'Which conventions belong to the Aspects of Comedy option?', b: 'Comic resolution, misunderstanding or mistaken identity, social correction, and the restoration of order by the end.' },
      { n: 2, f: 'What is the comic resolution, and why question it?', b: 'The ending that restores order, often through marriage. Strong answers ask whether it is fully satisfying or leaves some characters excluded or uneasy.' },
      { n: 3, f: 'What is the role of disguise and mistaken identity in comedy?', b: 'They create misunderstanding and confusion that drive the plot and allow the text to play with identity, gender and status before order is restored.' },
      { n: 4, f: 'Why does Paper 1 need a memorised quotation bank?', b: 'It is closed book, unlike Paper 2, so quotations for the Shakespeare play and the further texts must be learned in advance.' },
    ]),

    // 2 Texts and genres (Paper 2)
    ...sub(P2, 'option-2a-elements-of-crime-writing-7717', '3.2.1', [
      { n: 1, f: 'How is AQA English Literature B Paper 2 (Texts and genres) set out?', b: 'Open book, 75 marks, 40% of the A-level, on one option: Section A an unseen passage (25), Section B an essay on one set text (25), Section C a connective essay on two set texts (25).' },
      { n: 2, f: 'Name some elements of crime writing listed for Option 2A.', b: 'Settings for criminal action; crimes, criminals and motives; detection and investigation; restoration of moral order; guilt, remorse and confession; the detective-hero and nemesis; criminal, legal and police language.' },
      { n: 3, f: 'Name some set texts for Option 2A Elements of crime writing.', b: 'They include Oliver Twist, Hamlet, The Murder of Roger Ackroyd, Brighton Rock, Atonement, When Will There Be Good News?, The Rime of the Ancient Mariner, and a poetry selection of Crabbe, Browning and Wilde.' },
      { n: 4, f: 'What is the pre-1900 rule for Option 2A?', b: 'The three set texts are one post-2000 prose text, one poetry text and one further text, and the poetry text must be pre-1900.' },
      { n: 5, f: 'Why does the specification say "elements" rather than "genre"?', b: 'Many set texts pre-date crime writing as a recognised genre, so ask which elements a text shows and how strongly, rather than whether it belongs to the genre.' },
      { n: 6, f: 'How does guilt work in The Rime of the Ancient Mariner?', b: 'After killing the albatross the Mariner suffers isolation and torment ("Water, water, every where, / Nor any drop to drink"), and must retell his tale as a form of confession.' },
      { n: 7, f: 'Which Option 2A text is new for 2027, and what are the post-2000 prose choices?', b: 'Colin Walsh\'s Kala is first assessed in 2027. The post-2000 prose texts are When Will There Be Good News?, Atonement and, from 2027, Kala.' },
      { n: 8, f: 'Which texts can you use in Paper 2 Section C?', b: 'Two texts that you have not used in Section B. Across Sections B and C you write about all three of your texts: one poetry, one post-2000 prose and one further text.' },
    ]),
    ...sub(P2, 'option-2b-elements-of-political-and-social-protest-writing-7717', '3.2.2', [
      { n: 1, f: 'Name some elements of political and social protest writing listed for Option 2B.', b: 'Settings for power struggles; the pursuit of power and rebellion; corruption and control; individual against collective experience; gender politics and social class; structures that heighten or resolve tension.' },
      { n: 2, f: 'Name some set texts for Option 2B.', b: 'They include Hard Times, Henry IV Part I, Songs of Innocence and of Experience, The Handmaid\'s Tale, The Kite Runner and Harvest.' },
      { n: 3, f: 'What is the pre-1900 rule for Option 2B?', b: 'The three texts must include a post-2000 prose text and a poetry text, and any one of the three may be the pre-1900 text, not necessarily the poetry.' },
      { n: 4, f: 'What does Blake\'s "mind-forg\'d manacles" suggest in London?', b: 'That oppression is not only imposed by institutions but internalised in people\'s minds, a protest against the control that limits city life.' },
      { n: 5, f: 'What makes a Section C answer genuinely connective?', b: 'It tracks one specific element (such as the structure of a power struggle) across both texts in one argument, using each to illuminate the other, not two mini-essays.' },
      { n: 6, f: 'How should you revise for an open-book paper?', b: 'Build a mental map of each text: which sections deal with which elements, so you can locate material quickly. Word-perfect recall matters less.' },
      { n: 7, f: 'Which Option 2B texts count as post-2000 prose?', b: 'Harvest, Brotherless Night and The Kite Runner. The Handmaid\'s Tale (1985) is not post-2000, so it can only be the further text.' },
      { n: 8, f: 'Which edition of A Doll\'s House must Option 2B students use?', b: 'The Bloomsbury Methuen Drama edition translated by Michael Meyer, which AQA treats as Ibsen\'s own words for assessment.' },
    ]),

    // 3 Theory and independence (NEA)
    ...sub(NEA, 'text-selection-7717', '3.3.1', [
      { n: 1, f: 'What do you submit for the 7717 non-exam assessment?', b: 'Two essays of 1,250–1,500 words on two different texts, one poetry and one prose, each linked to a different section of the AQA Critical anthology. It is 20% of the A-level.' },
      { n: 2, f: 'What are the sections of the AQA Critical anthology?', b: 'Narrative theory, feminist theory, Marxist theory, eco-critical theory, post-colonial theory, and literary value and the canon.' },
      { n: 3, f: 'What is a re-creative response?', b: 'One essay may rewrite or extend part of a text (a new voice, a missing scene) to offer a critical reading of it, with a commentary linking the choices to the text and the anthology lens.' },
      { n: 4, f: 'Which texts may not be used for the NEA?', b: 'Any text on the A-level exam set-text lists, even if your centre does not study it for the exam.' },
      { n: 5, f: 'Feminist and Marxist readings: what does each foreground?', b: 'Feminist: gender, power and voice. Marxist: class, economics and social structure.' },
      { n: 6, f: 'What do eco-critical and post-colonial readings foreground?', b: 'Eco-critical: nature, the environment and the non-human. Post-colonial: empire, race and cultural power.' },
    ]),
  ],
};
