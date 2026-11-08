/**
 * D-444 -- flashcards for Cambridge International AS & A Level Literature in English 9695 (2024-2026).
 *
 * Literature is organised by papers and its set texts rotate by examination
 * series, so most cards cover the assessment objectives, what each paper and
 * question type requires, and the dramatic, poetic and narrative methods an
 * answer analyses, each with a one-line effect. The only set-text cards are on
 * the 2026 Shakespeare plays named on Marlbridge's Paper 3 notes. Card ids are
 * `<subtopic number>-<n>` and are permanent: add a new card with the next
 * unused n, never renumber.
 *
 * Written from Marlbridge's 9695 study guides and revision notes; no
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

const P1 = 'paper-1-drama-and-poetry-9695';
const P2 = 'paper-2-prose-and-unseen-9695';
const P3 = 'paper-3-shakespeare-and-drama-9695';
const P4 = 'paper-4-pre-and-post-1900-poetry-and-prose-9695';

export const DECK_CAMBRIDGE_A_LEVEL_ENGLISH_LITERATURE: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'a-level',
  subjectSlug: 'english-literature',
  syllabusCode: '9695',
  syllabusSeries: '2024-2026',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Paper 1 Drama and Poetry
    ...sub(P1, 'section-a-drama-9695', '1.1', [
      { n: 1, f: 'How is 9695 Paper 1 Drama and Poetry set out?', b: '2 hours, 50 marks: one question from Section A Drama and one from Section B Poetry, 25 marks each. Set texts and dictionaries are not allowed. It is half of the AS Level.' },
      { n: 2, f: 'What are the four AS Level assessment objectives in 9695?', b: 'AO1 knowledge and understanding, with relevant context; AO2 analysis of how language, form and structure shape meaning; AO3 an informed, independent personal response; AO4 a relevant, structured, well-supported response. Each is 25% on Papers 1 and 2.' },
      { n: 3, f: 'What is the difference between an (a) and a (b) question in 9695?', b: '(a) is a discursive essay on the text as a whole, with no extract printed. (b) is anchored to a passage or poem printed on the paper, needing close commentary that also connects to the whole text.' },
      { n: 4, f: 'What should a drama answer focus on beyond plot?', b: 'Theatricality: staging, stage directions, dramatic irony, pacing, how a scene would work on a live audience, and character shown through action and dialogue.' },
      { n: 5, f: 'What is the effect of short, clipped exchanges of dialogue?', b: 'A rapid rhythm that can dramatise a scene accelerating emotionally, building tension or conflict.' },
      { n: 6, f: 'What can a stage direction that withholds a reaction achieve?', b: 'It stages indecision or tension physically, so the audience watches the uncertainty rather than being told about it.' },
    ]),
    ...sub(P1, 'section-b-poetry-9695', '1.2', [
      { n: 1, f: 'What should line-level poetry analysis cover?', b: 'Diction (word choice), imagery, sound, rhythm and metre, and form and structure, always with the effect of each choice.' },
      { n: 2, f: 'What is the effect of an extended metaphor in a poem?', b: 'Sustained across several lines, it suggests the subject has its own internal logic or pattern, not just a passing comparison.' },
      { n: 3, f: 'What can an asyndetic list do in a poem?', b: 'Items joined without connectives can mimic memory or perception surfacing in fragments rather than as one continuous narrative.' },
      { n: 4, f: 'What is iambic pentameter?', b: 'A line of five metrical feet, each an unstressed then a stressed syllable (ten syllables). Its regularity can feel natural or controlled, so a break in it draws attention.' },
      { n: 5, f: 'Why does paraphrasing a poem score poorly?', b: 'Saying what the poem is about is description, not analysis. It does not access AO2, which rewards how language, form and structure create meaning.' },
    ]),

    // 2 Paper 2 Prose and Unseen
    ...sub(P2, 'section-a-prose-9695', '2.1', [
      { n: 1, f: 'What does 9695 Paper 2 Section A Prose require?', b: 'An answer on a set prose text showing knowledge of narrative technique, character and theme, drawing on the text as a whole rather than disconnected moments.' },
      { n: 2, f: 'How should you revise a set novel for Paper 2?', b: 'Know its overall shape: structure, turning points and how each major character or theme develops chronologically, so you can adapt detail to any question rather than force in memorised quotations.' },
      { n: 3, f: 'What is free indirect discourse?', b: 'Third-person narration that takes on a character\'s thoughts and idiom without quotation marks, blending narrator and character so the reader shares their view while keeping some ironic distance.' },
      { n: 4, f: 'What is an unreliable narrator?', b: 'A narrator whose account the reader has reason to doubt, through bias, limited knowledge or self-deception. It makes the reader read between the lines.' },
      { n: 5, f: 'Is AO5 assessed on 9695 Paper 2?', b: 'No. Paper 2, like Paper 1, is marked on AO1–AO4 at 25% each. AO5 appears only on Papers 3 and 4.' },
    ]),
    ...sub(P2, 'section-b-unseen-9695', '2.2', [
      { n: 1, f: 'What does 9695 Paper 2 Section B Unseen require?', b: 'One question from two, each on a previously unseen passage. The two passages come from two of prose, poetry and drama; no prior knowledge is needed.' },
      { n: 2, f: 'What is a reliable three-step method for an unseen passage?', b: 'First read for overall sense and tone; second read to annotate language and structural choices and their effects; then plan a few well-developed points.' },
      { n: 3, f: 'What should you annotate in an unseen drama extract?', b: 'Stage directions and the rhythm of the dialogue, as well as language. For prose, narrative voice and pacing; for poetry, form, line breaks and rhyme or metre.' },
      { n: 4, f: 'Why should you not speculate beyond an unseen passage?', b: 'The section tests close reading of what is on the page. Guessing at plot or context is not rewarded and can undermine an accurate reading.' },
      { n: 5, f: 'What is the effect of long, unpunctuated sentences in prose?', b: 'Breathless syntax can mimic a character\'s sensory overload, denying the reader any pause and recreating their disorientation at the level of the sentence.' },
    ]),

    // 3 Paper 3 Shakespeare and Drama
    ...sub(P3, 'section-a-shakespeare-9695', '3.1', [
      { n: 1, f: 'How is 9695 Paper 3 Shakespeare and Drama set out?', b: '2 hours, 50 marks, 25% of the A Level (A Level only): Section A Shakespeare and Section B Drama, 25 marks each, with an essay (a) or passage-based (b) question on each text.' },
      { n: 2, f: 'What is AO5 in 9695 English Literature?', b: 'Evaluation of opinion: discussing and evaluating varying opinions and interpretations of literary texts. It is assessed only on Papers 3 and 4.' },
      { n: 3, f: 'AO3 or AO5: what is the difference?', b: 'AO3 rewards your own independent opinion. AO5 rewards discussing and weighing other people\'s readings (critics, alternative interpretations, productions) alongside your own.' },
      { n: 4, f: 'How do you build AO5 into a paragraph?', b: 'Make an analytical point (AO2), state your view of its effect (AO3) clearly (AO4), then add how some critics or productions have read it differently and weigh that against your view. Spread this through the essay.' },
      { n: 5, f: 'Which Shakespeare plays are set for 9695 Paper 3 in the 2026 series?', b: 'Hamlet or The Taming of the Shrew. Set texts rotate, so always check the list for the series you are sitting.' },
      { n: 6, f: 'Which Hamlet soliloquy begins "To be, or not to be, that is the question"?', b: 'Hamlet\'s Act 3 soliloquy weighing life against death. Its balanced alternatives and questions dramatise his paralysing deliberation, a central idea in the play.' },
      { n: 7, f: 'Which Shakespeare plays are set for 9695 Paper 3 in 2027?', b: 'Henry IV, Part 1 or The Taming of the Shrew, from the 9695 syllabus for 2027 and 2028. Hamlet is not set for 2027.' },
    ]),
    ...sub(P3, 'section-b-drama-9695', '3.2', [
      { n: 1, f: 'Which drama texts are set for 9695 Paper 3 Section B in 2026?', b: 'One of Sweat (Lynn Nottage), Long Day\'s Journey Into Night (Eugene O\'Neill) or Kongi\'s Harvest (Wole Soyinka).' },
      { n: 2, f: 'How does a Paper 3 drama answer differ from a Paper 1 drama answer?', b: 'It needs AO5 as well: awareness of how the play has been interpreted differently by critics, readers or productions. Paper 1 drama is marked on AO1–AO4 only.' },
      { n: 3, f: 'What is the commonest mistake on a passage-based (b) question?', b: 'Answering it in essay style and ignoring the extract printed on the paper. The answer must work closely with that passage.' },
      { n: 4, f: 'How can performance history support AO5?', b: 'Noting that different productions have staged a scene differently (for example as comic or as tragic) offers an alternative interpretation to weigh against your own reading.' },
      { n: 5, f: 'Which drama texts are set for 9695 Paper 3 Section B in 2027?', b: 'One of Sweat (Lynn Nottage), Kongi\'s Harvest (Wole Soyinka) or Our Country\'s Good (Timberlake Wertenbaker). Long Day\'s Journey Into Night is not set for 2027.' },
    ]),

    // 4 Paper 4 Pre- and Post-1900 Poetry and Prose
    ...sub(P4, 'section-a-pre-1900-poetry-and-prose-9695', '4.1', [
      { n: 1, f: 'What does 9695 Paper 4 cover?', b: 'Poetry and prose from two eras: texts written before 1900 in Section A and after 1900 in Section B. It completes the full A Level with Paper 3 and assesses AO1–AO5.' },
      { n: 2, f: 'How should context be used in a pre-1900 answer?', b: 'Woven in to explain a writer\'s choice or how the text belongs to its time, then returned to the text. Detached background does not earn marks.' },
      { n: 3, f: 'What is a sonnet?', b: 'A fourteen-line poem, usually in iambic pentameter, with a set rhyme scheme (Petrarchan octave and sestet, or Shakespearean three quatrains and a couplet), often with a volta or turn.' },
      { n: 4, f: 'How should you plan each Paper 4 answer?', b: 'In about five minutes: underline the question\'s key words, jot a thesis, list evidence in order and note the context to weave in. End with a conclusion that gives a final judgement.' },
      { n: 5, f: 'Which pre-1900 texts are set for 9695 Paper 4 Section A in 2027?', b: 'Prose: Mansfield Park, Middlemarch, Jude the Obscure. Poetry: Byron selected poems, The Wife of Bath\'s Prologue and Tale, Shakespeare\'s Selected Sonnets.' },
    ]),
    ...sub(P4, 'section-b-post-1900-poetry-and-prose-9695', '4.2', [
      { n: 1, f: 'What is free verse, and what can it achieve?', b: 'Poetry without regular metre or rhyme. Its freedom can mirror natural speech or thought, and line breaks become the main way to create emphasis.' },
      { n: 2, f: 'What is stream of consciousness?', b: 'A narrative method that presents a character\'s thoughts as a continuous, often unpunctuated flow, recreating the movement of the mind.' },
      { n: 3, f: 'How should a conclusion end a Paper 4 essay?', b: 'With a final judgement that answers the question directly, not a repeat of the introduction.' },
      { n: 4, f: 'Why should time be allocated in proportion to marks on Paper 4?', b: 'An over-long first answer leaves the second underdeveloped. Check the marks for each question on the paper and plan both answers into the time available.' },
      { n: 5, f: 'Which post-1900 texts are set for 9695 Paper 4 Section B in 2027?', b: 'Prose: Waiting for the Barbarians, Katherine Mansfield\'s Selected Stories, The Overstory. Poetry: Elizabeth Bishop, Gabriel Okara and Ocean Vuong selections.' },
    ]),
  ],
};
