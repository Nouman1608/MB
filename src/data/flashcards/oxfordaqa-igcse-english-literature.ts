/**
 * D-444 -- flashcards for OxfordAQA International GCSE English Literature 9275 (Version 5.1).
 *
 * Cards cover what each paper, section and route requires, the poetic,
 * narrative and dramatic methods an answer analyses (each with a one-line
 * effect), and methods for anthology, unseen and non-exam work. Set texts come
 * from a prescribed list that is not encoded in the syllabus record, so no
 * card is about a particular set text. Card ids are `<subtopic number>-<n>`
 * and are permanent: add a new card with the next unused n, never renumber.
 *
 * Written from Marlbridge's 9275 study guides and revision notes; no
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

const PD = 'prose-and-drama-9275';
const RA = 'poetry-and-unseen-texts-9275';
const RB = 'route-b-poetry-and-non-exam-assessment-9275';

export const DECK_OXFORDAQA_IGCSE_ENGLISH_LITERATURE: FlashcardDeck = {
  boardSlug: 'oxfordaqa',
  qualificationSlug: 'igcse',
  subjectSlug: 'english-literature',
  syllabusCode: '9275',
  syllabusSeries: 'Version 5.1, for exams May/June 2018 onwards (final May/June exams 2027)',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Prose and drama (Paper 1, both routes)
    ...sub(PD, 'prose-fiction-9275', '3.1.1', [
      { n: 1, f: 'How is OxfordAQA 9275 Paper 1 (Prose and drama) set out?', b: '1 hour 30 minutes, closed book, 60 marks, 40% of the qualification, taken on both routes: Section A prose fiction (30 marks) and Section B drama (30 marks).' },
      { n: 2, f: 'What are the two routes through 9275?', b: 'Route A: Paper 1 plus Paper 2a (anthology poetry, unseen poetry and unseen prose). Route B: Paper 1 plus Paper 2b and a non-exam assessment.' },
      { n: 3, f: 'Essay-style or passage-based question: how do you choose?', b: 'Passage-based suits close line-by-line reading of a printed extract. Essay-style needs evidence selected from memory across the whole text. Practise both.' },
      { n: 4, f: 'What should a closed-book quotation bank cover for a novel?', b: 'Two or three major characters and two or three central themes, each with short quotations from more than one point in the text.' },
      { n: 5, f: 'What is foreshadowing, and what is its effect?', b: 'An early hint of later events. It builds suspense or a sense of inevitability and rewards the reader for noticing patterns.' },
      { n: 6, f: 'Why does the edition of a set text matter?', b: 'Editions can differ in pagination and sometimes content, so revise from the edition your course follows.' },
    ]),
    ...sub(PD, 'drama-9275', '3.1.2', [
      { n: 1, f: 'How should a 9275 drama answer differ from a prose answer?', b: 'Treat the play as written to be staged: comment on stage directions, how dialogue might be delivered, and dramatic structure, not just the words.' },
      { n: 2, f: 'What should a drama quotation bank add for each major character?', b: 'At least one quotation with a staging note: how it might be delivered or what the stage directions imply.' },
      { n: 3, f: 'What is a dramatic climax?', b: 'The point of highest tension where the central conflict comes to a head, usually leading to the resolution.' },
      { n: 4, f: 'What can a stage direction about silence or a pause achieve?', b: 'It lets tension, awkwardness or unspoken feeling register with the audience, often saying more than dialogue would.' },
    ]),

    // 2 Route A: Poetry and unseen texts (Paper 2a)
    ...sub(RA, 'poetry-9275', '3.2.1', [
      { n: 1, f: 'How is 9275 Paper 2a set out?', b: '2 hours 15 minutes, open book, 90 marks, 60% of the qualification: Section A anthology poetry, Section B unseen poetry, Section C unseen prose, 30 marks each.' },
      { n: 2, f: 'What is the 9275 poetry anthology?', b: 'People and Places, a collection of 20 thematically linked poems, supplied in the exam.' },
      { n: 3, f: 'How should you revise the People and Places anthology?', b: 'By theme rather than poem by poem: prepare two or three pairings across themes such as identity, displacement, place and memory, each with one real similarity and one real difference.' },
      { n: 4, f: 'Why does "both poems are about..." score poorly?', b: 'It states a shared subject and stops. Strong comparison explains how each poem treats the theme differently through its methods.' },
    ]),
    ...sub(RA, 'unseen-poetry-9275', '3.2.2', [
      { n: 1, f: 'What does Paper 2a Section B (Unseen poetry) reward?', b: 'Close reading of a poem you have not studied: the whole mark comes from what the poem contains, with no biography or context to fall back on.' },
      { n: 2, f: 'In what order should you work through an unseen poem?', b: 'Structure (stanza shape, line length, rhyme or its absence), then language (word choice, imagery, sound), then tone, asking what effect each choice creates.' },
      { n: 3, f: 'What is the effect of a line break placed mid-phrase?', b: 'It suspends meaning briefly, so the reader holds an idea alone at the line end before the next line completes or changes it.' },
      { n: 4, f: 'What is imagery, and why analyse it?', b: 'Language that appeals to the senses, including similes and metaphors. It shapes how the reader pictures and feels about the subject.' },
    ]),
    ...sub(RA, 'unseen-prose-9275', '3.2.3', [
      { n: 1, f: 'What does Paper 2a Section C (Unseen prose) require?', b: 'Analysis of how viewpoint, structure and language create meaning within an unseen prose extract. It is taken on Route A only.' },
      { n: 2, f: 'Why should you not speculate about the wider novel in unseen prose?', b: 'The assessment rewards close reading of what is on the page. Guessing at plot beyond the extract earns nothing.' },
      { n: 3, f: 'What three-step method works for both unseen sections?', b: 'Structure: where the text opens, shifts and ends, and why. Language: which words or images stand out and what they suggest. Effect: what the reader is meant to feel or understand.' },
      { n: 4, f: 'What is the effect of a close third-person viewpoint?', b: 'The narrator stays near one character\'s perceptions and feelings, so the reader shares their experience while still seeing from outside.' },
    ]),

    // 3 Route B: Poetry and non-exam assessment
    ...sub(RB, 'poetry-route-b-9275', '3.3.1', [
      { n: 1, f: 'What should a profile of each studied poem include?', b: 'Situation, theme and attitude, form and structure, key language, any context needed, and links to other poems in the group.' },
      { n: 2, f: 'How do you choose the second poem in a Route B comparison?', b: 'Pick the poem that best fits the question, not your favourite, and organise the comparison by an idea, explaining why the methods differ.' },
      { n: 3, f: 'What does a strong paragraph on a poem contain?', b: 'A clear claim, brief evidence, analysis of the poet\'s method and an explanation of its effect on the reader.' },
    ]),
    ...sub(RB, 'unseen-poetry-route-b-9275', '3.3.2', [
      { n: 1, f: 'What is a five-step approach to an unseen poem?', b: 'Read twice (sense, then detail); annotate repeated words, images and tone shifts; sum up what it is about in a sentence or two; choose three or four points on method; write in an organised way.' },
      { n: 2, f: 'What are common unseen-poetry traps?', b: 'Hunting for a hidden meaning and ignoring the surface meaning, listing techniques without effects, spending all the time on the first stanza, and writing about what the poem is not.' },
      { n: 3, f: 'How do you compare two unseen poems?', b: 'Plan around two or three shared ideas, such as the poets\' attitudes to nature, and show how each uses language and structure differently.' },
    ]),
    ...sub(RB, 'non-exam-assessment-route-b-9275', '3.3.3', [
      { n: 1, f: 'What is the 9275 Route B non-exam assessment?', b: 'Written work on a whole prose text, completed in school over a period rather than under timed conditions, in place of Route A\'s unseen prose.' },
      { n: 2, f: 'How should you plan NEA literature work?', b: 'Turn the task into a question, write a thesis and a sequence of points with evidence, and choose evidence from across the text to show development.' },
      { n: 3, f: 'How should an NEA draft be revised?', b: 'Revise for argument first (does each paragraph support the thesis and explain effects?), then edit for accuracy, check quotations and keep within the word limit.' },
      { n: 4, f: 'How should another reader\'s view be used in NEA work?', b: 'Put it in your own words and acknowledge where it came from, and use context only where you are sure of it and it explains a choice in the text.' },
    ]),
  ],
};
