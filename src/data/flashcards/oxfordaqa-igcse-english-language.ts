/**
 * D-444 -- flashcards for OxfordAQA International GCSE English Language 9270 (Version 5.1).
 *
 * English Language is a skills course organised by papers, so the cards cover
 * the assessment objectives and their R and W strands, what each section
 * requires, text types and their conventions, and language and structural
 * features with a one-line effect. Card ids are `<subtopic number>-<n>` (or
 * `<topic number>-<n>` for the non-exam assessment and the speaking and
 * listening endorsement, which itemise no subtopics) and are permanent: add a
 * new card with the next unused n, never renumber.
 *
 * Written from Marlbridge's 9270 study guides and revision notes; no
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

const P1 = 'paper-1-literary-non-fiction-and-composition-9270';
const P2 = 'paper-2-source-based-reading-and-directed-writing-9270';

export const DECK_OXFORDAQA_IGCSE_ENGLISH_LANGUAGE: FlashcardDeck = {
  boardSlug: 'oxfordaqa',
  qualificationSlug: 'igcse',
  subjectSlug: 'english-language',
  syllabusCode: '9270',
  syllabusSeries: 'Version 5.1, for exams May/June 2018 onwards',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Literary non-fiction and composition (Paper 1)
    ...sub(P1, 'section-a-literary-non-fiction-9270', '3.1.1', [
      { n: 1, f: 'How is OxfordAQA 9270 Paper 1 set out?', b: '2 hours, 60% of the qualification: Section A Literary non-fiction (40 marks, reading) and Section B Composition (40 marks, writing). Paper 2 or the NEA makes up the other 40%.' },
      { n: 2, f: 'What is literary non-fiction?', b: 'Factual writing that uses the techniques of imaginative writing, such as travel writing, memoir, biography, essays, speeches, opinion journalism and reportage.' },
      { n: 3, f: 'What does Paper 1 Section A require?', b: 'Close study of a single unseen literary non-fiction text, divided into sections with questions; at least one question addresses the whole text. There is no comparison on this paper.' },
      { n: 4, f: 'What is the three-part formula for an analytical point?', b: 'Identify the feature with correct terminology, quote it briefly, and explain its effect on the reader in relation to the writer\'s purpose. The third step is where the mark is.' },
      { n: 5, f: 'What can a minor sentence do?', b: 'A sentence without a main verb ("Silence.") gives sudden emphasis to a single idea or image and can mimic speech or thought.' },
      { n: 6, f: 'What is tone, and why track it?', b: 'The writer\'s attitude to the subject (admiring, wry, critical, nostalgic). A shift in tone often marks a turning point in the writer\'s argument or feelings.' },
    ]),
    ...sub(P1, 'section-b-composition-9270', '3.1.2', [
      { n: 1, f: 'What does Paper 1 Section B (Composition) require?', b: 'One piece of writing from a choice of tasks including descriptive, imaginative, and argumentative or discursive writing. No named audience is set.' },
      { n: 2, f: 'What lifts a descriptive composition?', b: 'Rendering one moment fully through the senses rather than a whole day thinly, with varied sentence lengths and a closing image that suggests rather than states.' },
      { n: 3, f: 'What lifts an imaginative composition?', b: 'Deciding the ending before you start and keeping the characters few, so the plot stays controlled.' },
      { n: 4, f: 'What lifts an argumentative or discursive composition?', b: 'A clear line of argument with two or three developed points and a genuine counter-argument that is answered.' },
      { n: 5, f: 'Which technical accuracy points are directly credited?', b: 'Sentence demarcation (no comma splices), consistent tense, subject–verb agreement, apostrophes for possession not plurals, and paragraphing that signals shifts.' },
    ]),

    // 2 Source-based reading and directed writing (Paper 2)
    ...sub(P2, 'section-a-reading-9270', '3.2.1', [
      { n: 1, f: 'What kinds of source does 9270 Paper 2 use?', b: 'Current-affairs and issue-based writing such as opinion pieces, reports and campaign material, including sources that may be solely visual, such as infographics.' },
      { n: 2, f: 'What do the reading strands R1 to R4 ask for?', b: 'R1 read and understand, including purpose; R2 collate and synthesise detail, often across sources; R3 develop an interpretation of the writer\'s ideas; R4 explain and evaluate linguistic, grammatical, structural and presentational features.' },
      { n: 3, f: 'How do you read a visual or graphic source?', b: 'Read the explicit data and the implicit framing: what is emphasised, what is placed first or largest, and what is left out.' },
      { n: 4, f: 'Do you need prior knowledge of the topic on Paper 2?', b: 'No. The sources provide everything needed; the skill tested is analysing purposeful, real-world writing.' },
      { n: 5, f: 'What are presentational features?', b: 'Layout and design choices such as headlines, images, colour, font and bullet points, which guide the reader\'s attention and support the text\'s purpose.' },
    ]),
    ...sub(P2, 'section-b-writing-9270', '3.2.2', [
      { n: 1, f: 'What does Paper 2 Section B (Directed writing) require?', b: 'Writing for a specified audience and purpose in a set form, marked on AO2 (W1–W4): adapting form and register to that audience and purpose.' },
      { n: 2, f: 'How should you plan the directed writing task?', b: 'In about five minutes: one sentence each for audience and purpose, three or four content points in order, and a line on the form\'s required features.' },
      { n: 3, f: 'Which form features should directed writing show?', b: 'Those its form requires, such as a headline and sub-headings for an article, or a greeting, clear purpose and sign-off for a letter.' },
      { n: 4, f: 'How can Section A help with Section B?', b: 'Techniques analysed in the sources (rhetorical questions, direct address, the rule of three) can be used deliberately in your own writing for its audience.' },
    ]),

    // 3 Non-exam assessment
    ...topicOnly('non-exam-assessment-9270', '3', [
      { n: 1, f: 'What is the 9270 non-exam assessment?', b: 'The alternative to Paper 2: independent written work planned, drafted and refined over time under teacher supervision, assessed by the teacher and moderated by the board.' },
      { n: 2, f: 'Which skills does the 9270 NEA reward?', b: 'Purposeful writing, research and use of sources, organisation, control of language, and (where a commentary is required) reflection and evaluation.' },
      { n: 3, f: 'How do you narrow an NEA focus?', b: 'Turn a broad subject into a clear angle, such as "how streaming services have changed the way teenagers discover new bands" rather than "music".' },
      { n: 4, f: 'How should sources be used in NEA work?', b: 'Find reliable material, select what is relevant and combine ideas in your own words rather than copying, acknowledging where ideas come from.' },
      { n: 5, f: 'What should a reflective commentary do?', b: 'Explain the choices you made in your writing and judge how successfully they meet the purpose and audience.' },
      { n: 6, f: 'How should an NEA piece be organised?', b: 'An introduction, developed sections and a conclusion, linked by clear paragraphs and connectives.' },
    ]),

    // 4 Speaking and listening (optional endorsement)
    ...topicOnly('speaking-and-listening-optional-endorsement-9270', '4', [
      { n: 1, f: 'Does the 9270 speaking and listening endorsement count toward the grade?', b: 'No. It is optional and reported separately, recognising spoken skills the written papers cannot measure.' },
      { n: 2, f: 'How should a spoken presentation be structured?', b: 'Open by saying what you will talk about, develop two or three points with reasons and examples, and end by summing up.' },
      { n: 3, f: 'What does active listening involve?', b: 'Giving the speaker attention without interrupting, noticing the main point and its evidence, and responding to what was actually said.' },
      { n: 4, f: 'How do you adapt spoken language to an audience?', b: 'Explain terms they might not know, keep a formal register in a formal situation, and rephrase or give an example if they look confused.' },
      { n: 5, f: 'What makes delivery clear?', b: 'A measured pace, pauses between ideas, a projected voice and eye contact with listeners.' },
      { n: 6, f: 'How should claims in a talk be supported?', b: 'With examples, short anecdotes or facts you are sure of, rather than unverified statistics.' },
    ]),
  ],
};
