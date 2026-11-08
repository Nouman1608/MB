/**
 * D-444 -- flashcards for OxfordAQA International AS and A-level English Language 9670
 * (Version 5.2).
 *
 * Cards cover what each unit and section requires, the linguistic frameworks
 * (language levels) with key terms and a one-line effect, text types and
 * their conventions for directed writing, the social functions of language,
 * and the stages, theories and models for learning language and
 * international English. Card ids are `<subtopic number>-<n>` (or `4-<n>`
 * for Unit 4, which itemises no subtopics) and are permanent: add a new card
 * with the next unused n, never renumber.
 *
 * Written from Marlbridge's 9670 study guides and revision notes; no
 * revision-notes page maps to a single section, so every card is authored.
 * Not tiered.
 * Plain text only (see types.ts).
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

const U1 = 'unit-1-language-and-context-9670';
const U2 = 'unit-2-language-and-society-9670';
const U3 = 'unit-3-language-variation-9670';

export const DECK_OXFORDAQA_A_LEVEL_ENGLISH_LANGUAGE: FlashcardDeck = {
  boardSlug: 'oxfordaqa',
  qualificationSlug: 'a-level',
  subjectSlug: 'english-language',
  syllabusCode: '9670',
  syllabusSeries: 'Version 5.2, for International AS exams from May/June 2018, A-level from May/June 2019',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Unit 1 Language and Context
    ...sub(U1, 'section-a-understanding-texts-9670', '3.1.1', [
      { n: 1, f: 'How is OxfordAQA 9670 assessed?', b: 'Unit 1 and Unit 2 (AS): 2 hours, 50 marks, 20% of the A-level each. Unit 3: 2 hours, 50 marks, 30%. Unit 4: 30%, either an exam (2 hours 30 minutes) or a non-exam language investigation.' },
      { n: 2, f: 'What does Unit 1 Section A (Understanding Texts) require?', b: 'A compulsory analysis of two texts, using precise linguistic terminology to explain how language creates meaning in context.' },
      { n: 3, f: 'What are the seven frameworks for analysing a text?', b: 'Phonology, lexis, semantics, grammar, pragmatics, discourse and graphology.' },
      { n: 4, f: 'What is presupposition, and what is its effect?', b: 'What a sentence takes for granted. "When did you stop worrying about this?" builds in an assumption that is hard to challenge.' },
      { n: 5, f: 'What is nominalisation, and what can it do?', b: 'Turning an action into a noun ("mistakes", "lessons"). It makes events abstract and can distance them from anyone responsible.' },
      { n: 6, f: 'What is synthetic personalisation?', b: 'Addressing a mass audience with "you" as though speaking to each person individually, creating a false sense of a personal relationship.' },
      { n: 7, f: 'Overt and covert prestige: what is the difference?', b: 'Overt prestige is the status of Standard English in society. Covert prestige is the value a non-standard variety carries within the group that uses it.' },
    ]),
    ...sub(U1, 'section-b-directed-writing-9670', '3.1.2', [
      { n: 1, f: 'What does Unit 1 Section B (Directed Writing) require?', b: 'Using some or all of the Section A material to create a new text for a specified brief. There is no separate commentary; credit goes to sustaining an appropriate style.' },
      { n: 2, f: 'How do you transform material in directed writing?', b: 'Fix form, audience and purpose first; adjust the register; select only relevant material; rephrase rather than lift; and keep the form\'s conventions throughout.' },
      { n: 3, f: 'Which assessment objective dominates Unit 1?', b: 'AO3, using English in different ways for different purposes, which is why sustained style in the directed writing matters so much.' },
      { n: 4, f: 'What are field, tenor and mode?', b: 'The three components of register: field is the subject, tenor the relationship between participants, and mode whether the text is spoken, written or in between.' },
    ]),

    // 2 Unit 2 Language and Society
    ...sub(U2, 'section-a-language-and-social-groups-texts-9670', '3.2.1', [
      { n: 1, f: 'What does Unit 2 Section A require?', b: 'Analysis of spoken, written or multimodal texts, naming the social functions that specific language features perform for the groups using them.' },
      { n: 2, f: 'What four social functions of language does Unit 2 focus on?', b: 'Group rapport and shared perspectives; power and status; identity and relationships; and play and performance.' },
      { n: 3, f: 'How is power visible in a conversation transcript?', b: 'In who interrupts, who controls the topic, who asks closed questions and who answers, who hedges, and who holds the floor longest.' },
      { n: 4, f: 'What is a multimodal text?', b: 'A text that combines more than one channel of meaning, such as image and caption in a meme or advertisement. It is not a synonym for informal.' },
      { n: 5, f: 'What is back-channelling?', b: 'Short responses such as "mm" or "yeah" from a listener, showing attention and support without taking the floor.' },
    ]),
    ...sub(U2, 'section-b-language-and-social-groups-writing-9670', '3.2.2', [
      { n: 1, f: 'What does Unit 2 Section B require?', b: 'An academic essay that uses the Section A analysis as evidence to argue a point about language and social groups, rather than restating it.' },
      { n: 2, f: 'How should Section A be read with Section B in mind?', b: 'Note while analysing which observations could support the later argument, so the two sections work as one connected task.' },
      { n: 3, f: 'Which assessment objective weighs more in Unit 2 than Unit 1?', b: 'AO1, understanding of methods, terminology, concepts and issues, so precise named terminology matters as much as fluent style.' },
      { n: 4, f: 'What is code-switching?', b: 'Moving between languages or varieties within a conversation, often to signal identity, solidarity or a change of topic.' },
    ]),

    // 3 Unit 3 Language Variation
    ...sub(U3, 'section-a-learning-language-9670', '3.3.1', [
      { n: 1, f: 'What are the stages of children\'s speech development?', b: 'Pre-verbal (crying, cooing, babbling), holophrastic, two-word, telegraphic and post-telegraphic. Ages vary greatly between children.' },
      { n: 2, f: 'What are overextension and underextension?', b: 'Overextension: using a word too widely (every four-legged animal is "dog"). Underextension: using it too narrowly (only the family pet is "dog").' },
      { n: 3, f: 'What are expansion and recasting in child-directed speech?', b: 'Recasting repeats the child\'s utterance in correct adult form; expansion extends it ("Doggy run." / "Yes, the doggy is running fast"). Both model grammar without direct correction.' },
      { n: 4, f: 'Why does overgeneralisation challenge behaviourism?', b: 'Forms such as "runned" or "mouses" apply a regular rule to irregular words. Adults do not say them, so they cannot be imitated.' },
      { n: 5, f: 'How does children\'s writing develop?', b: 'From drawing and writing-like marks, to letters, to phonetic spelling, then conventional spelling and punctuation, then control of genres and audiences. Kroll\'s model runs from preparatory to integrated writing.' },
      { n: 6, f: 'What is a five-step method for analysing child language data?', b: 'Note the age and context; pick three or four features; name and quote each; explain what the child can and cannot yet do; link to a theory and evaluate it.' },
    ]),
    ...sub(U3, 'section-b-international-english-9670', '3.3.2', [
      { n: 1, f: 'What are Kachru\'s three circles?', b: 'Inner circle: English as a first language (UK, US, Australia). Outer circle: an official or institutional role, often after colonial history (India, Nigeria, Singapore). Expanding circle: English as a foreign language.' },
      { n: 2, f: 'Pidgin or creole: what is the difference?', b: 'A pidgin is a simplified contact language with no native speakers. A creole develops when a pidgin becomes a first language, with expanded vocabulary and grammar.' },
      { n: 3, f: 'What does the term World Englishes express?', b: 'That the many varieties of English around the world have equal linguistic validity, each with its own standard forms.' },
      { n: 4, f: 'How has English spread around the world?', b: 'Through trade, colonisation and migration, and later through media, technology, education and business.' },
      { n: 5, f: 'How should non-standard features of a variety be described?', b: 'As systematic features of that variety, explained by causes such as language contact or local culture, never as errors or "slang".' },
    ]),

    // 4 Unit 4 Language Exploration
    ...topicOnly('unit-4-language-exploration-9670', '4', [
      { n: 1, f: 'What are the two routes for 9670 Unit 4?', b: 'An examined paper on Language Exploration (2 hours 30 minutes, 50 marks) or a non-exam language investigation. Both are 30% of the A-level.' },
      { n: 2, f: 'What makes a good language investigation question?', b: 'It is specific, answerable with data you can collect, and connected to a language concept, for example how speakers in recorded meetings use interruptions and whether this varies with role.' },
      { n: 3, f: 'What ethical steps does collecting language data need?', b: 'Get permission to record, tell participants how the data will be used, protect identities by changing names, and avoid collecting private information.' },
      { n: 4, f: 'Why is a table of counts not an analysis?', b: 'Counts show patterns but must be interpreted: explain what the pattern shows, note exceptions, and quote examples.' },
      { n: 5, f: 'What should an investigation\'s conclusion include?', b: 'A reasoned answer to the question, how strong the evidence is, its limitations (small sample, one context, the effect of being recorded) and what further research could add.' },
      { n: 6, f: 'What is accommodation theory?', b: 'Speakers adjust their speech towards others (convergence) to build rapport or away from them (divergence) to show distance or identity.' },
      { n: 7, f: 'What is face in politeness theory?', b: 'A person\'s public self-image. Positive face is the wish to be liked and approved of; negative face is the wish not to be imposed on. Politeness strategies protect both.' },
      { n: 8, f: 'How long is a 9670 Unit 4b investigation?', b: 'The specification gives two figures: 2,500 to 3,000 words in the assessment overview, and approximately 2,500 words excluding data in section 3.4.2. Check the current limit with your teacher.' },
    ]),
  ],
};
