/**
 * D-444 -- flashcards for Pearson Edexcel International GCSE English Language A 4EA1
 * (first teaching 2016, Issue 7).
 *
 * English Language is a skills course organised by components, so the cards
 * cover the assessment objectives, what each section and assignment requires,
 * the transactional and imaginative forms with their conventions, and language
 * and structural devices with a one-line effect.
 *
 * IDS. The specification does not number its sections, so their subtopic
 * number in syllabus-topics.ts is '' and the validator expects ids of the form
 * `-<n>`. To keep those ids unique across the deck, each unnumbered section
 * takes its own block of n: Component 1 Section A 101+, Section B 201+;
 * Component 2 Section A 301+, Section B 401+; Component 3 Assignment A 501+,
 * Assignment B 601+. The Spoken Language Endorsement has no subtopics, so its
 * ids are `4-<n>`. Ids are permanent: add a card with the next unused n in its
 * block, never renumber.
 *
 * Written from Marlbridge's 4EA1 study guides and revision notes; no
 * revision-notes page maps to a single section, so every card is authored.
 * Not tiered.
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

const C1 = 'component-1-non-fiction-texts-and-transactional-writing-4ea1';
const C2 = 'component-2-poetry-and-prose-texts-and-imaginative-writing-4ea1';
const C3 = 'component-3-poetry-and-prose-texts-and-imaginative-writing-nea-4ea1';

export const DECK_EDEXCEL_IGCSE_ENGLISH_LANGUAGE: FlashcardDeck = {
  boardSlug: 'edexcel',
  qualificationSlug: 'igcse',
  subjectSlug: 'english-language',
  syllabusCode: '4EA1',
  syllabusSeries: 'For first teaching 2016 (Issue 7, August 2025)',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Component 1 -- Section A Non-fiction texts
    ...sub(C1, 'section-a-non-fiction-texts-4ea1', '', [
      { n: 101, f: 'How is 4EA1 Component 1 set out?', b: '2 hours 15 minutes, 90 marks (45 per section), 60% of the qualification. Section A reading non-fiction (about 1 hour 30 minutes) and Section B transactional writing (about 45 minutes).' },
      { n: 102, f: 'What are the five assessment objectives in 4EA1?', b: 'AO1 read and understand texts, selecting and interpreting information; AO2 analyse how writers use language and structure for effect; AO3 compare texts; AO4 communicate effectively, adapting form, tone and register; AO5 write with a range of vocabulary and sentence structures, accurately.' },
      { n: 103, f: 'Which texts are used in Component 1 Section A?', b: 'One previously unseen non-fiction extract and one non-fiction text from Part 1 of the Pearson Edexcel International GCSE English Anthology, which is supplied in the exam.' },
      { n: 104, f: 'Name some Part 1 Anthology texts for 4EA1.', b: 'The ten include The Danger of a Single Story, A Passage to Africa, The Explorer\'s Daughter, 127 Hours: Between a Rock and a Hard Place, H is for Hawk and Chinese Cinderella.' },
      { n: 105, f: 'What three stages do 4EA1 reading questions move through?', b: 'Literal comprehension (explicit information), inference (implied meaning) and analysis of language and structure (the effect of word choices or organisation).' },
      { n: 106, f: 'How should you structure a comparison of two non-fiction texts?', b: 'Point by point: take the same feature or idea in both texts in each paragraph, using connectives such as whereas, similarly and by contrast, and compare how the writers achieve effects, not only what they say.' },
      { n: 107, f: 'What is the effect of an anecdote in non-fiction?', b: 'It makes an abstract issue personal and concrete, so it is harder for the reader to dismiss.' },
      { n: 108, f: 'What is the effect of statistics or expert quotation?', b: 'They lend authority and an air of objectivity to a claim, though it is worth asking whose expertise is being used and why.' },
    ]),
    // 1 Component 1 -- Section B Transactional Writing
    ...sub(C1, 'section-b-transactional-writing-4ea1', '', [
      { n: 201, f: 'What does 4EA1 Component 1 Section B require?', b: 'One piece of transactional writing chosen from two prompts, marked on AO4 and AO5 only. There is no source text, so no reading marks.' },
      { n: 202, f: 'Which six transactional forms does 4EA1 specify?', b: 'An article (for a magazine or newspaper), a speech, a letter, a guide, a review, and the text of a leaflet. A report is not one of the named forms.' },
      { n: 203, f: 'What three things should you fix before transactional writing?', b: 'Form, audience and purpose, and keep all three consistent through the whole piece, not just the opening line.' },
      { n: 204, f: 'What conventions does a 4EA1 article need?', b: 'A headline, a hook in the opening, an engaging semi-formal register and clearly structured paragraphs.' },
      { n: 205, f: 'What conventions does a guide or leaflet need?', b: 'Headings, clear step-by-step or sectioned structure, bullet points where helpful, and direct address to the reader.' },
      { n: 206, f: 'What is a comma splice, and how do you fix it?', b: 'Two complete sentences joined only by a comma. Fix it with a full stop, a semicolon or a conjunction.' },
    ]),

    // 2 Component 2 -- Section A Poetry and Prose Texts
    ...sub(C2, 'section-a-poetry-and-prose-texts-4ea1', '', [
      { n: 301, f: 'How is 4EA1 Component 2 set out?', b: '1 hour 30 minutes, 60 marks, 40% of the qualification: Section A on a poetry or prose text from Part 2 of the Anthology (30 marks) and Section B imaginative writing (30 marks), about 45 minutes each.' },
      { n: 302, f: 'How should you prepare for Component 2 Section A?', b: 'Build two or three defensible points on language, structure and effect for every Part 2 Anthology text, because the question can be set on any of them.' },
      { n: 303, f: 'What is the mark-earning pattern in an Anthology analysis?', b: 'Quote the language or structural choice, say what it suggests, then explain why the writer chose it for this effect. Naming a device alone earns no AO2 credit.' },
      { n: 304, f: 'What structural choices should you analyse in a poem?', b: 'Stanza length, line breaks, rhyme or its absence, and where the poem\'s tone shifts, not imagery alone.' },
      { n: 305, f: 'How can a prose writer slow down a key moment?', b: 'Short sentences, a shift to the present tense and close focus on detail. Pacing is often where the intended effect lies.' },
      { n: 306, f: 'What is sibilance, and what can it do?', b: 'Repeated s and sh sounds. It can create a soft, hushed or whispering mood, or a hissing, sinister one.' },
    ]),
    // 2 Component 2 -- Section B Imaginative Writing
    ...sub(C2, 'section-b-imaginative-writing-4ea1', '', [
      { n: 401, f: 'What does 4EA1 Component 2 Section B require?', b: 'One piece of imaginative writing from a choice of prompts, 30 marks in about 45 minutes, marked on AO4 (communication and adapting form, tone and register) and AO5 (vocabulary, sentences and accuracy).' },
      { n: 402, f: 'What is "technique transfer" in imaginative writing?', b: 'Deliberately using techniques you analysed in Anthology texts (such as short sentences at a tense moment or a controlling image) in your own writing, adapted to the prompt.' },
      { n: 403, f: 'How should you plan an imaginative piece in 45 minutes?', b: 'Spend about five minutes on an opening hook, a turning point and an ending that resolves or deliberately withholds resolution.' },
      { n: 404, f: 'Which technical errors most often cost AO5 marks in narrative writing?', b: 'Tense drift without a reason, overlong unpunctuated sentences, and a rushed ending caused by skipping planning.' },
      { n: 405, f: 'How can vocabulary lift an imaginative piece?', b: 'Precise words replace generic ones: unease rather than worried, oppressive rather than hot. AO5 rewards range and precision.' },
    ]),

    // 3 Component 3 (non-examined) -- Assignment A
    ...sub(C3, 'assignment-a-poetry-and-prose-texts-4ea1', '', [
      { n: 501, f: 'What is 4EA1 Component 3?', b: 'The coursework alternative to Component 2: 40% of the qualification, 60 marks split into Assignment A (30) and Assignment B (30), internally assessed and externally moderated by Pearson.' },
      { n: 502, f: 'What does Component 3 Assignment A require?', b: 'A written response of about 1,200 words (advisory) on three or more Part 2 Anthology texts, including at least one poem and one prose text. AO1 12 marks, AO2 18 marks.' },
      { n: 503, f: 'How should Assignment A\'s texts be handled?', b: 'Choose them around one clear, statable idea and discuss them together, not as three separate mini-essays.' },
      { n: 504, f: 'Which assessment objectives does Component 3 test?', b: 'The same as Component 2: AO1 and AO2 in Assignment A, AO4 and AO5 in Assignment B.' },
    ]),
    // 3 Component 3 (non-examined) -- Assignment B
    ...sub(C3, 'assignment-b-imaginative-writing-4ea1', '', [
      { n: 601, f: 'What does Component 3 Assignment B require?', b: 'A single piece of imaginative writing to narrate, describe or entertain, about 700 words (advisory), marked on AO4 and AO5.' },
      { n: 602, f: 'Why is the 700-word guide for Assignment B worth respecting?', b: 'The length is deliberately short: going far over it typically weakens control and precision rather than adding marks.' },
      { n: 603, f: 'What is a cyclical structure in a story?', b: 'Ending where the story began, with a returning image, place or line. It gives a sense of completeness and can show how a character has (or has not) changed.' },
    ]),

    // 4 Spoken Language Endorsement
    ...topicOnly('spoken-language-endorsement-4ea1', '4', [
      { n: 1, f: 'What is the 4EA1 Spoken Language Endorsement?', b: 'An optional, centre-assessed presentation in a formal setting, reported separately. It does not change the grade for the written components.' },
      { n: 2, f: 'How should you plan a spoken-language presentation?', b: 'Decide the purpose, think about the audience, state the main message in one sentence, plan an opening, two to four developed points and a conclusion, gather evidence you are sure of, and use key-word notes, not a script.' },
      { n: 3, f: 'Which delivery skills matter in a formal presentation?', b: 'Steady pace that slows on key points, pauses around important ideas, varied volume and tone, eye contact, upright posture and purposeful gesture.' },
      { n: 4, f: 'How should you answer questions after a presentation?', b: 'Listen to the whole question, pause, give a direct answer first and then a reason or example. If you do not know, say so honestly rather than bluff.' },
      { n: 5, f: 'What makes spoken English formal enough for the endorsement?', b: 'Accurate grammar, varied sentence lengths, precise vocabulary, and no slang, text-speak or fillers such as "like" and "basically".' },
      { n: 6, f: 'What does a strong presentation topic need?', b: 'An opinion, some knowledge and examples, and ideally two sides, so you can show reasoning rather than just describe.' },
    ]),
  ],
};
