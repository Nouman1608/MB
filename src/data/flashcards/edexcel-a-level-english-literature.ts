/**
 * D-444 -- flashcards for Pearson Edexcel International Advanced Level English Literature
 * YET01 (first teaching 2015, units WET01-WET04).
 *
 * Cards cover the five assessment objectives, what each unit and section
 * requires, poetic, narrative and dramatic methods with a one-line effect, and
 * set-text facts only for texts the specification names (the Unit 1 and Unit 2
 * lists given on Marlbridge's YET01 pages). Quotations are short lines from
 * out-of-copyright texts only. Card ids are `<subtopic number>-<n>` and are
 * permanent: add a new card with the next unused n, never renumber.
 *
 * Written from Marlbridge's YET01 study guides and revision notes; no
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

const U1 = 'unit-1-post-2000-poetry-and-prose-yet01';
const U2 = 'unit-2-drama-yet01';
const U3 = 'unit-3-poetry-and-prose-yet01';
const U4 = 'unit-4-shakespeare-and-pre-1900-poetry-yet01';

export const DECK_EDEXCEL_A_LEVEL_ENGLISH_LITERATURE: FlashcardDeck = {
  boardSlug: 'edexcel',
  qualificationSlug: 'a-level',
  subjectSlug: 'english-literature',
  syllabusCode: 'YET01',
  syllabusSeries: 'For first teaching 2015 (units WET01–WET04)',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Unit 1 Post-2000 Poetry and Prose
    ...sub(U1, 'unit-1-poetry-yet01', '1.3', [
      { n: 1, f: 'How is YET01 Unit 1 (WET01) set out?', b: '2 hours, open book, 50 marks: 50% of the IAS and 25% of the full IAL. Section A post-2000 poetry (25 marks) and Section B post-2000 prose (25 marks), each with a choice of two questions.' },
      { n: 2, f: 'What are the five assessment objectives in YET01?', b: 'AO1 an informed, coherent personal response with accurate expression; AO2 analysis of how meanings are shaped; AO3 the significance of contexts; AO4 connections across texts; AO5 different interpretations of texts.' },
      { n: 3, f: 'What does Unit 1 Section A require?', b: 'A comparative essay on a poem named by the board and a second poem of your choice from the 21 prescribed Poems of the Decade poems. Marked on AO1, AO2 and AO4; context (AO3) is not assessed here.' },
      { n: 4, f: 'How should a Unit 1 poetry comparison be organised?', b: 'By point of comparison, moving between the two poems in each paragraph, so AO4 connections are visible throughout rather than only in the conclusion.' },
      { n: 5, f: 'Why does an open-book exam change how you revise the anthology?', b: 'Memorised quotations matter less than fast, precise navigation: knowing the poems well enough to find strong evidence quickly.' },
    ]),
    ...sub(U1, 'unit-1-prose-yet01', '1.4', [
      { n: 1, f: 'Which prose texts are set for YET01 Unit 1 Section B?', b: 'One of Brooklyn, The Kite Runner, Life of Pi, Purple Hibiscus and The White Tiger.' },
      { n: 2, f: 'What does Unit 1 Section B require?', b: 'One essay from a choice of two on your post-2000 prose text, marked on AO1, AO2 and AO3 (context).' },
      { n: 3, f: 'What kind of context matters for a post-2000 novel?', b: 'Contemporary social and cultural concerns the writer engages with, not period history.' },
      { n: 4, f: 'Where do weaker Unit 1 prose answers lose marks?', b: 'They describe what the novel is "about" instead of analysing the techniques (structure, narrative voice, form) through which the writer explores it, which is what AO2 rewards.' },
    ]),

    // 2 Unit 2 Drama
    ...sub(U2, 'unit-2-pre-1900-and-post-1900-drama-yet01', '2.3', [
      { n: 1, f: 'How is YET01 Unit 2 (WET02) Drama set out?', b: '2 hours, open book (clean copies only), 50 marks, 50% of the IAS. Section A a pre-1900 play and Section B a post-1900 play, one essay from two in each, 25 marks each.' },
      { n: 2, f: 'Which pre-1900 plays are set for YET01 Unit 2?', b: 'One of Doctor Faustus, Othello, The Rover, She Stoops to Conquer and Twelfth Night.' },
      { n: 3, f: 'Which post-1900 plays are set for YET01 Unit 2?', b: 'One of A Raisin in the Sun, A Streetcar Named Desire, Death of a Salesman, Top Girls and Waiting for Godot.' },
      { n: 4, f: 'Which assessment objectives does Unit 2 assess?', b: 'AO1, AO2, AO3 and AO5 in both sections. Each question gives a statement to respond to, which invites AO5, and asks you to consider context (AO3).' },
      { n: 5, f: 'How do you show AO5 in a drama essay?', b: 'Name a range of readings or productions (for example Willy Loman as a victim of economic forces, or as complicit in his own downfall), then argue your own position within that range.' },
      { n: 6, f: 'How does AO3 context differ between the pre-1900 and post-1900 plays?', b: 'Pre-1900: often the conventions of the original genre (morality-play structure for Doctor Faustus, Restoration comedy for The Rover). Post-1900: the play\'s immediate social and political moment.' },
      { n: 7, f: 'What does "dramatic form" include?', b: 'Staging, stage directions, entrances and exits, and silence: the ways meaning is made in performance, distinct from prose.' },
    ]),

    // 3 Unit 3 Poetry and Prose
    ...sub(U3, 'unit-3-poetry-yet01', '3.3', [
      { n: 1, f: 'How is YET01 Unit 3 (WET03) set out?', b: '2 hours, 50 marks: a 20-mark poetry section on a compulsory unseen post-1900 poem and a 30-mark prose section on two texts from a chosen theme. Roughly 48 and 72 minutes.' },
      { n: 2, f: 'What is a five-step method for reading any poem?', b: 'Establish the situation (who speaks, to whom); note the form; look at language (imagery, diction, sound, tone); find the turn; explain the effect of each choice.' },
      { n: 3, f: 'Why write about "the speaker" rather than "the poet"?', b: 'The voice of a poem is often a persona, not the poet, so treating them as identical can mislead the reading unless there is a reason to connect them.' },
      { n: 4, f: 'Why should Unit 3 not be paced like the other units?', b: 'Its sections are unequal (20 and 30 marks). Splitting the time evenly gives the poetry section time it does not need and takes it from the prose section.' },
    ]),
    ...sub(U3, 'unit-3-prose-yet01', '3.4', [
      { n: 1, f: 'What does YET01 Unit 3\'s prose section require?', b: 'An essay on two prose texts studied from a chosen theme, so the comparison of the two texts is central. The theme lists include pre-1900 as well as later novels.' },
      { n: 2, f: 'What should you analyse in a novel\'s narrative viewpoint?', b: 'Whether it is first or third person, omniscient or limited, and how trustworthy the narrator is, since this controls what the reader knows and how they judge.' },
      { n: 3, f: 'How should a whole-novel essay select evidence?', b: 'Choose moments from the beginning, middle and end, so the answer shows how an idea develops rather than treating the text as a single block.' },
      { n: 4, f: 'How should two prose texts be compared?', b: 'Build paragraphs around an idea (such as how each writer presents loss) and move between the texts within each paragraph, rather than writing about one then the other.' },
    ]),

    // 4 Unit 4 Shakespeare and Pre-1900 Poetry
    ...sub(U4, 'unit-4-shakespeare-yet01', '4.3', [
      { n: 1, f: 'How is YET01 Unit 4 (WET04) set out?', b: '2 hours, 50 marks, completing the full IAL: a Shakespeare section and a pre-1900 poetry section of equal size.' },
      { n: 2, f: 'What is blank verse, and why do departures from it matter?', b: 'Unrhymed iambic pentameter. A switch to prose often marks lower status, comedy or loss of control; rhyming couplets often close a scene with finality.' },
      { n: 3, f: 'What is a foil?', b: 'A character who contrasts with the protagonist, throwing their qualities into sharper relief.' },
      { n: 4, f: 'How should you write about a Shakespeare extract?', b: 'Say where it falls and what has just happened, make a claim about its dramatic purpose, analyse language, verse, stagecraft and imagery, then connect it to the play as a whole.' },
      { n: 5, f: 'What does the balance of "To be, or not to be" set up in Hamlet\'s soliloquy?', b: 'An either-or structure that the rest of the speech complicates. The soliloquy lets the audience watch thought in progress rather than a conclusion.' },
    ]),
    ...sub(U4, 'unit-4-poetry-yet01', '4.4', [
      { n: 1, f: 'What are the conventions of a ballad and an ode?', b: 'A ballad tells a story in a simple, regular rhythm, often with a refrain. An ode addresses and praises a subject in an elevated tone.' },
      { n: 2, f: 'How do you approach the language of a pre-1900 poem?', b: 'Read slowly, aloud if possible, and paraphrase difficult lines (unfamiliar diction, inverted word order, classical references) before analysing them.' },
      { n: 3, f: 'What does "charter\'d" suggest in Blake\'s "I wander thro\' each charter\'d street"?', b: 'Ownership and control: with the heavy, repeated rhythm, it presents the city as restricted and oppressive.' },
      { n: 4, f: 'What concerns are often linked with Romantic and Victorian poetry?', b: 'Romantic poets often respond to nature, imagination and social change; Victorian poets to doubt, industry and morality. Show how a specific feature reflects such a concern rather than forcing a label.' },
    ]),
  ],
};
