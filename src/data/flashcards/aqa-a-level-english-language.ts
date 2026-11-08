/**
 * D-444 -- flashcards for AQA A-level English Language 7702 (first teaching 2015).
 *
 * Cards cover the assessment objectives, what each paper, section and NEA task
 * requires, the linguistic frameworks (language levels) with their key terms
 * and a one-line effect, and the named theories, models and debates for
 * children's language development and language diversity and change. The
 * specification repeats "Methods of language analysis" under each content
 * area (3.1.2, 3.2.2, 3.3.3), so the framework cards are split between them:
 * the core levels at 3.1.2, terms most used for variation and change at
 * 3.2.2, and the remaining levels (phonetics, prosodics, morphology) at 3.3.3.
 * Card ids are `<subtopic number>-<n>` and are permanent: add a new card with
 * the next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page; origin 'revision-notes'.
 *
 * Written from Marlbridge's 7702 study guides and revision notes. Not tiered.
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

const P1 = 'paper-1-language-the-individual-and-society-7702';
const P2 = 'paper-2-language-diversity-and-change-7702';
const NEA = 'non-exam-assessment-language-in-action-7702';
const DC = 'a-level-aqa-english-language-diversity-and-change-revision-notes';

export const DECK_AQA_A_LEVEL_ENGLISH_LANGUAGE: FlashcardDeck = {
  boardSlug: 'aqa',
  qualificationSlug: 'a-level',
  subjectSlug: 'english-language',
  syllabusCode: '7702',
  syllabusSeries: 'For first teaching 2015',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Language, the individual and society (Paper 1)
    ...sub(P1, 'section-a-textual-variations-and-representations-7702', '3.1.1', [
      { n: 1, f: 'How is AQA A-level English Language 7702 assessed?', b: 'Paper 1 Language, the Individual and Society (2 h 30, 100 marks, 40%), Paper 2 Language Diversity and Change (2 h 30, 100 marks, 40%) and the NEA Language in Action (100 marks, 20%).' },
      { n: 2, f: 'What does Paper 1 Section A (Textual variations and representations) require?', b: 'Three questions on two linked texts: analysis of Text A (25 marks), analysis of Text B (25 marks) and a comparison of the two (20 marks).' },
      { n: 3, f: 'What are the five assessment objectives in 7702?', b: 'AO1 apply methods of linguistic analysis with terminology and coherent expression; AO2 understanding of concepts and issues in language use; AO3 how context and language features construct meaning; AO4 connections across texts; AO5 expertise and creativity in using English.' },
      { n: 4, f: 'What is representation in language study?', b: 'How language constructs a version of people, groups or events, which can reinforce or challenge attitudes. Look at naming, modifiers, and whether agency is shown or hidden.' },
      { n: 5, f: 'What is transitivity, and why analyse it?', b: 'Who is presented as the agent doing an action and who as the one affected. It shows whether a text gives a group power and responsibility or presents them as passive.' },
      { n: 6, f: 'How can a text position its reader without stating a view?', b: 'Through presupposition (building a claim into the sentence), inclusive pronouns that enrol the reader, selection and omission of voices, and naming choices such as "protester" against "activist".' },
      { n: 7, f: 'How should the Paper 1 comparison question be organised?', b: 'By point of comparison across both texts, not one text then the other, and comparing language choices rather than content.' },
    ]),
    ...sub(P1, 'methods-of-language-analysis-3-1-2-7702', '3.1.2', [
      { n: 1, f: 'What are the language levels used for analysis in 7702?', b: 'Phonetics, phonology and prosodics; graphology; lexis and semantics; grammar (including morphology); pragmatics; and discourse.' },
      { n: 2, f: 'What is the three-step pattern for every analytical point?', b: 'Name the feature with correct terminology, quote it, and explain its effect in relation to audience, purpose and context. A feature named without an effect earns little.' },
      { n: 3, f: 'What does modality signal in a text?', b: 'The writer\'s degree of certainty or obligation. High modality (must, will) asserts authority; low modality (might, perhaps) hedges or softens.' },
      { n: 4, f: 'What is deixis?', b: 'Words whose meaning depends on the context of utterance, such as this, here, now and you. It ties language to a shared situation and can create closeness or immediacy.' },
      { n: 5, f: 'What is pragmatics?', b: 'The study of implied meaning in context: what a speaker intends beyond the literal words, including presupposition, implicature and politeness.' },
      { n: 6, f: 'What is mode, and why is it a spectrum?', b: 'Whether a text is spoken or written. Many forms mix features: a text message is written in medium but often speech-like, so mode is analysed as a continuum.' },
      { n: 7, f: 'How does a scripted news bulletin differ from a live phone-in?', b: 'The bulletin is written to be spoken: planned, dense, complete sentences, no repair. The phone-in is spontaneous: fillers, false starts, overlaps and self-repair, with structure negotiated live.' },
    ]),
    ...sub(P1, 'section-b-childrens-language-development-7702', '3.1.3', [
      { n: 1, f: 'What does Paper 1 Section B (Children\'s language development) require?', b: 'One 30-mark discursive essay from a choice of two, evaluating a view of children\'s language development and drawing on the data provided and on theories and research.' },
      { n: 2, f: 'What are the main stages of children\'s spoken language development?', b: 'Babbling, holophrastic (one-word), two-word, telegraphic, then post-telegraphic.' },
      { n: 3, f: 'What does the behaviourist view of acquisition claim?', b: 'Skinner: children learn language through imitation and reinforcement (praise or correction) from carers.' },
      { n: 4, f: 'What does the nativist view of acquisition claim?', b: 'Chomsky: children have an innate language acquisition device that lets them work out grammatical rules from limited input.' },
      { n: 5, f: 'What do cognitive and interactionist views of acquisition claim?', b: 'Cognitive (Piaget): language follows conceptual understanding. Interactionist (Bruner): child-directed speech and social interaction scaffold acquisition.' },
      { n: 6, f: 'What is a virtuous error, and what does it show?', b: 'A logical but non-standard form such as "goed" or "sheeps". The child cannot have imitated it, so it is evidence of rule formation, supporting nativist accounts against pure imitation.' },
      { n: 7, f: 'What is child-directed speech?', b: 'The simplified way carers often talk to young children: higher pitch, exaggerated intonation, repetition, short sentences and questions. Interactionists see it as support for learning.' },
    ]),

    // 2 Language diversity and change (Paper 2)
    ...sub(P2, 'section-a-diversity-and-change-7702', '3.2.1', [
      { n: 1, f: 'What does Paper 2 Section A require?', b: 'One 30-mark evaluative essay from a choice of two: one on language diversity and one on language change.' },
      { n: 2, f: 'Sociolect or dialect: what is the test?', b: 'A sociolect varies by social group (occupation, gender, ethnicity). A dialect varies by geography (regional, national, international).', src: DC },
      { n: 3, f: 'What timeframe does 7702 set for language change?', b: '1600 to the present day, so a change essay needs at least one historical comparison point, not only present-day examples.', src: DC },
      { n: 4, f: 'What are Aitchison\'s three metaphors for attitudes to change?', b: 'The damp spoon, the crumbling castle and the infectious disease: three prescriptivist images of change as decline, which Aitchison herself rejects.', src: DC },
      { n: 5, f: 'What is the S-curve model of language change?', b: 'A new form spreads slowly at first, then rapidly, then slowly again as it reaches the last holdouts.', src: DC },
      { n: 6, f: 'Functional theory or random fluctuation: what is the difference?', b: 'Functional theory says change meets new communicative needs (technology, social contexts). Random fluctuation says some changes have no single identifiable cause.' },
      { n: 7, f: 'What is the difference between accent and dialect?', b: 'Accent is pronunciation only. Dialect covers grammar and vocabulary as well.' },
    ]),
    ...sub(P2, 'methods-of-language-analysis-3-2-2-7702', '3.2.2', [
      { n: 1, f: 'What is semantic change? Name four kinds.', b: 'A shift in a word\'s meaning over time: broadening (more general), narrowing (more specific), amelioration (more positive) and pejoration (more negative).' },
      { n: 2, f: 'Name common word-formation processes in language change.', b: 'Borrowing, compounding, blending, affixation, conversion (a new word class), clipping, and acronyms or initialisms.' },
      { n: 3, f: 'What is standardisation in the history of English?', b: 'The process by which one variety became the accepted norm in spelling, grammar and vocabulary, helped by printing, dictionaries and grammars.' },
      { n: 4, f: 'How can language data such as corpora or frequency tables be used?', b: 'As evidence: describe the trend in usage over time or across groups, then link it to a plausible social or functional explanation.' },
    ]),
    ...sub(P2, 'section-b-language-discourses-7702', '3.2.3', [
      { n: 1, f: 'What does Paper 2 Section B Question 3 require?', b: 'Analysis of two texts about a language issue (40 marks): how each writer uses language to present ideas, attitudes and opinions about language.' },
      { n: 2, f: 'What is a language discourse?', b: 'A way of talking and writing about language that carries attitudes and values, for example presenting change as decline or a dialect as inferior.' },
      { n: 3, f: 'Prescriptivism or descriptivism: what is the difference?', b: 'Prescriptivism sets rules for correct usage and treats deviation as error. Descriptivism records how language is actually used and treats variation and change as natural.' },
      { n: 4, f: 'What is a named debate worth having ready for Paper 2?', b: 'Two or three, such as prescriptivist against descriptivist attitudes to change, or whether a dialect or sociolect is unfairly stigmatised, to bring into any essay.' },
    ]),
    ...sub(P2, 'writing-skills-7702', '3.2.4', [
      { n: 1, f: 'What does Paper 2 Question 4 (directed writing) require?', b: 'An opinion piece on a language issue for a specified audience, purpose and form (30 marks), assessed as writing as well as for its ideas about language.' },
      { n: 2, f: 'How should the directed writing differ from an essay?', b: 'It must follow the conventions of its form (such as an article) and engage a non-specialist reader, while conveying linguistic ideas accurately.' },
      { n: 3, f: 'What is the commonest timing error in Paper 2 Section B?', b: 'Spending too long on the 40-mark analysis and rushing the 30-mark directed writing.' },
    ]),

    // 3 Language in action (NEA)
    ...sub(NEA, 'language-investigation-7702', '3.3.1', [
      { n: 1, f: 'What is the 7702 language investigation?', b: 'A student-led enquiry of 2,000 words (excluding data and quotations) into an aspect of language, using spoken, written or multimodal data.' },
      { n: 2, f: 'What sections must a language investigation contain?', b: 'Introduction (reasons and aims), methodology (an evaluative account of data collection and approach), analysis, conclusion linked to the aim, references, and appendices with clean data.' },
      { n: 3, f: 'What makes a good investigation focus?', b: 'A narrow, specific question, such as the language of three adverts for one product rather than "advertising language", so every later stage has a clear boundary.' },
      { n: 4, f: 'What is the observer\'s paradox?', b: 'Observing or recording people changes how they speak, so natural data is hard to collect. Methodology should say how the investigation tried to reduce this.' },
    ]),
    ...sub(NEA, 'original-writing-7702', '3.3.2', [
      { n: 1, f: 'What does the 7702 original writing task require?', b: 'One piece of 750 words in The Power of Persuasion, The Power of Storytelling or The Power of Information, plus a 750-word commentary.' },
      { n: 2, f: 'What is a style model, and how is it used?', b: 'A published text of the same type that you study and analyse in detail. The submission includes an annotated style model, and its analysis feeds the commentary.' },
      { n: 3, f: 'What should the original-writing commentary evaluate?', b: 'The style model, the writing process, and how effectively the final piece\'s language choices meet its audience and purpose.' },
    ]),
    ...sub(NEA, 'methods-of-language-analysis-3-3-3-7702', '3.3.3', [
      { n: 1, f: 'What is prosody?', b: 'The features of speech beyond individual sounds: intonation, stress, pitch, pace, volume and pause. They signal emphasis, attitude and turn-taking.' },
      { n: 2, f: 'What is morphology?', b: 'The study of word structure: how morphemes (roots, prefixes, suffixes) combine, for example un-friend-ly. It explains both word formation and inflections such as -ed.' },
      { n: 3, f: 'What is cohesion in discourse?', b: 'The links that hold a text together, such as pronoun reference, repetition, connectives and lexical chains, so it reads as one connected whole.' },
      { n: 4, f: 'What is an adjacency pair?', b: 'Two linked turns in conversation where the first expects the second, such as question and answer or greeting and greeting.' },
    ]),
  ],
};
