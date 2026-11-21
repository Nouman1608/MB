/**
 * Flashcards for IB MYP Language Acquisition (from 2020, first
 * eAssessment May 2023/November 2023).
 *
 * The syllabus record lists five topics. Topics 1-3 and 5 list no subtopics, so
 * each has one block, in syllabus order. Topic 4 (assessment criteria) is keyed
 * by its subtopics, the four lettered criteria A-D, one block per criterion.
 * Card ids are `<topic number>-<n>` for topics 1-3 and 5 and
 * `<criterion letter>-<n>` for the criteria, and are permanent (browser
 * progress is keyed by them): add a new card with the next unused n, never
 * renumber. The letter prefixes cannot clash with the numbered topic ids.
 * Cards that were on topic 4 before the criteria were itemised moved to their
 * criterion's ids; `idMigration` below carries saved progress across. The
 * criterion A card on the four criteria in general sits first, under A.
 *
 * MYP Language Acquisition is criterion-assessed (A Listening, B Reading,
 * C Speaking, D Writing, each 0-8 in class). The deck is language-neutral (it
 * serves every target language): no vocabulary lists. The cards cover the key
 * and related concepts, global contexts and statements of inquiry, what each
 * criterion asks for, text types and their conventions, and the eAssessment
 * structure and proficiency levels, as the Marlbridge MYP Language Acquisition
 * pages describe them.
 *
 *   The syllabus record is not tiered, so no card carries a tier.
 *   Almost every card is authored (origin 'authored'): the only candidates that
 *   scripts/flashcard-candidates.mjs lists are worked-example fragments, not
 *   term/definition pairs. A few cards in the criterion B and C blocks restate
 *   that criterion's own revision-notes page and name it as `src`.
 *
 * Plain text only (see types.ts).
 */
import type { Flashcard, FlashcardDeck } from './types.ts';

interface Spec { n: number; f: string; b: string; u?: true; src?: string }

const sub = (topic: string, subtopic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b, u, src }) => ({
    id: `${number}-${n}`,
    topic,
    subtopic,
    front: f,
    back: b,
    ...(u ? { tier: 'upper' as const } : {}),
    origin: src ? 'revision-notes' as const : 'authored' as const,
    ...(src ? { source: src } : {}),
  }));

const topicOnly = (topic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b, u, src }) => ({
    id: `${number}-${n}`,
    topic,
    front: f,
    back: b,
    ...(u ? { tier: 'upper' as const } : {}),
    origin: src ? 'revision-notes' as const : 'authored' as const,
    ...(src ? { source: src } : {}),
  }));

const P = 'ib-myp-language-acquisition';
const AC = `${P}-assessment-criteria`;

export const DECK_IB_IB_MYP_LANGUAGE_ACQUISITION: FlashcardDeck = {
  boardSlug: 'ib',
  qualificationSlug: 'ib-myp',
  subjectSlug: 'myp-language-acquisition',
  // Recorded on the owner's word (16 Nov 2026), accountable teacher for this course.
  deckReview: { reviewerSlug: 'ammar-bilal', reviewedOn: '2026-11-16' },
  syllabusCode: 'MYP Language Acquisition',
  syllabusSeries: 'From 2020 (first eAssessment May 2023/November 2023)',
  author: 'marlbridge-academic-team',
  updated: '2026-11-20',
  // Old id -> new id for every card in the deck as it stood before the criteria were itemised,
  // so progress saved before the change follows each card. Cards whose id did not change map to themselves.
  idMigration: {
    id: 'myp-language-acquisition-subtopics-2026-11-20',
    before: '2026-11-20',
    map: {
      '1-1': '1-1', '1-2': '1-2', '1-3': '1-3', '1-4': '1-4',
      '1-5': '1-5', '1-6': '1-6', '2-1': '2-1', '2-2': '2-2',
      '2-3': '2-3', '2-4': '2-4', '2-5': '2-5', '2-6': '2-6',
      '2-7': '2-7', '2-8': '2-8', '3-1': '3-1', '3-2': '3-2',
      '3-3': '3-3', '3-4': '3-4', '3-5': '3-5', '3-6': '3-6',
      '4-1': 'A-1', '4-2': 'A-2', '4-3': 'A-3', '4-4': 'A-4',
      '4-5': 'B-1', '4-6': 'B-2', '4-7': 'C-1', '4-8': 'C-2',
      '4-9': 'D-1', '4-10': 'D-2', '4-11': 'D-3', '5-1': '5-1',
      '5-2': '5-2', '5-3': '5-3', '5-4': '5-4', '5-5': '5-5',
      '5-6': '5-6', '5-7': '5-7', '5-8': '5-8',
    },
  },
  cards: [
    // 1 Key concepts
    ...topicOnly(`${P}-key-concepts`, '1', [
      { n: 1, f: 'Which key concepts frame MYP Language Acquisition?', b: 'Communication, connections, creativity and culture.' },
      { n: 2, f: 'What does communication mean as a language acquisition key concept?', b: 'Exchanging meaning, matched to audience, purpose and mode — for example telling the same news to a friend by text and to a head teacher by email.' },
      { n: 3, f: 'What does connections mean as a language acquisition key concept?', b: 'Links between languages, subjects, people and places — for example finding cognates between your own language and the target language.' },
      { n: 4, f: 'What does creativity mean as a language acquisition key concept?', b: 'Using known language in new combinations for a purpose — for example inventing and performing a radio advert.' },
      { n: 5, f: 'What does culture mean as a language acquisition key concept?', b: 'The shared beliefs, values, habits and products of a group — for example choosing the right form of address for an older stranger.' },
      { n: 6, f: 'How do the key concepts show up in task design and marking?', b: 'They are the lens tasks are built around: a strong response shows awareness of how the target language connects to the culture of its speakers, not just correct grammar.' },
    ]),

    // 2 Related concepts
    ...topicOnly(`${P}-related-concepts`, '2', [
      { n: 1, f: 'Which related concepts does the brief give as examples for language acquisition?', b: 'Word choice, conventions and idiom. Related concepts are grounded in the subject and deepen the key concepts; your teacher may use others from the full guide.' },
      { n: 2, f: 'What is word choice, and how do you make good word choices?', b: 'Picking words for register, connotation and precision. Identify the audience and purpose, set the register (including the right form of "you"), replace vague words with precise ones, check connotation and watch for false friends.' },
      { n: 3, f: 'What are conventions?', b: 'The expected rules of a text type or exchange — its layout, openings, closings and typical language, such as the correct opening and closing of a formal email.' },
      { n: 4, f: 'What is an idiom?', b: 'A fixed phrase whose meaning is not the sum of its words, such as the Spanish tomar el pelo ("to tease", literally "to take the hair").' },
      { n: 5, f: 'What conventions does a formal email need?', b: 'Subject line, formal greeting, paragraphs, a polite sign-off formula with a request for reply, and your name and role. Formal register, often opening "I am writing to…".' },
      { n: 6, f: 'Blog post versus article: conventions', b: 'Blog post: title, date, author, short paragraphs, semi-formal to informal, ending with a question or call for comments.\nArticle: headline, byline, optional subheading, semi-formal to formal, ending by returning to the headline idea.' },
      { n: 7, f: 'What are format signals?', b: 'Visible layout cues (subject line, headline, date, headings) that identify a text type before a word is read.' },
      { n: 8, f: 'Denotation versus connotation in a multimodal text', b: 'Denotation: what is literally shown or heard. Connotation: what a detail suggests or makes you feel.' },
    ]),

    // 3 Global contexts
    ...topicOnly(`${P}-global-contexts`, '3', [
      { n: 1, f: 'What are the six MYP global contexts?', b: 'Identities and relationships; orientation in space and time; personal and cultural expression; scientific and technical innovation; globalization and sustainability; fairness and development.' },
      { n: 2, f: 'Global context versus topic in language acquisition', b: 'A global context is a lens shared by every MYP subject. A topic is the actual subject matter of a task (food waste, festivals, online learning). One topic can sit under several contexts.' },
      { n: 3, f: 'What makes a strong statement of inquiry in language acquisition?', b: 'A general, transferable statement (not a question or task description) joining a key concept, related concept(s) and a global context. Example: "Where and how people celebrate reflects the culture and history of a community."' },
      { n: 4, f: 'Why is "In this unit we will learn about holidays in Spain" a weak statement of inquiry?', b: 'It is a task description about one topic, with no concept and no global context, so it does not transfer to another language or unit.' },
      { n: 5, f: 'Receptive versus productive vocabulary', b: 'Receptive vocabulary: words you recognise when listening or reading. Productive vocabulary: words you can recall and use accurately when speaking or writing.' },
      { n: 6, f: 'What is a chunk or collocation, and why learn them?', b: 'A group of words that normally go together ("take part in", "make a difference"). Learning them as units makes speech more fluent and writing more natural.' },
    ]),

    // 4 Assessment criteria: A Listening
    ...sub(AC, `${AC}-a-listening`, 'A', [
      { n: 1, f: 'What are the four MYP Language Acquisition criteria?', b: 'A: Listening. B: Reading. C: Speaking. D: Writing. Equally weighted; each has eight achievement levels in four bands, plus level 0, so 0–8 each and 0–32 in class. There is no SL/HL split.' },
      { n: 2, f: 'What does criterion A (Listening) assess?', b: 'Interpreting and constructing meaning from spoken multimodal text, including how images and other spatial aspects work with the speech to convey ideas, values and attitudes.' },
      { n: 3, f: 'Explicit versus implicit information, and what is a distractor?', b: 'Explicit: stated directly. Implicit: suggested, so you infer it from evidence. A distractor sounds like an answer but is not the right one, such as an old time that a speaker then corrects.' },
      { n: 4, f: 'How should you approach a listening task?', b: 'Before: read every question, underline key words and predict answer types. First listen: gist and explicit facts, mark doubts with "?". Second listen: check doubts, listen for corrections, note tone and what the visuals add.' },
    ]),

    // 4 Assessment criteria: B Reading
    ...sub(AC, `${AC}-b-reading`, 'B', [
      { n: 1, f: 'What does criterion B (Reading) assess?', b: 'Constructing meaning from written, spatial and visual aspects of texts, and how they work with the words to convey ideas, values and attitudes.' },
      { n: 2, f: 'Visual aspects versus spatial aspects of a text', b: 'Visual: photos, drawings, icons, charts, logos, colour.\nSpatial: where things sit on the page — position, size, boxes, columns, grouping and white space.' },
      { n: 3, f: 'Name, describe, explain, link: how do you explain a visual or spatial feature?', b: 'Name it (photo, icon, green strip), describe it precisely (what it shows and where it sits), explain its effect (does it repeat, add to or contrast with the words?), then link it to the text’s purpose or audience.', src: 'ib-myp-language-acquisition-criterion-b-reading-revision-notes' },
      { n: 4, f: 'Main idea against supporting detail in a reading text', b: 'The main idea is the central point of the whole text, written in your own words. A supporting detail is a fact, example or reason that backs up one point. Check your main idea covers the whole text, not one detail.', src: 'ib-myp-language-acquisition-criterion-b-reading-revision-notes' },
      { n: 5, f: 'How do you answer a true or false question with justification?', b: 'Find the part of the text the statement refers to, check negatives, contrast words and time words, decide, then copy the shortest phrase that proves your answer.', src: 'ib-myp-language-acquisition-criterion-b-reading-revision-notes' },
    ]),

    // 4 Assessment criteria: C Speaking
    ...sub(AC, `${AC}-c-speaking`, 'C', [
      { n: 1, f: 'What does criterion C (Speaking) assess?', b: 'Interacting in the target language on topics of personal, local and global interest and significance, supported by spoken, written and visual texts.' },
      { n: 2, f: 'Fluency, accuracy, range and intelligibility in speaking', b: 'Fluency: smooth flow with natural pauses. Accuracy: control of grammar, vocabulary and word order. Range: variety of vocabulary and structures. Intelligibility: how easily a listener understands you.' },
      { n: 3, f: 'The four steps for responding to a stimulus in the speaking task', b: 'See (describe what is shown), read (what the headline or key words mean), think (audience, purpose, how image and words work together), relate (me, my community, the wider world, with a view and a reason).', src: 'ib-myp-language-acquisition-criterion-c-speaking-revision-notes' },
      { n: 4, f: 'The chain for extending any spoken answer', b: 'Answer, reason, example, consequence: “yes”, “because…”, “for example, last week…”, “so / if…, then…”. It brings in different tenses naturally.', src: 'ib-myp-language-acquisition-criterion-c-speaking-revision-notes' },
      { n: 5, f: 'What is the difference between prepared and memorised speaking, and between interaction and presentation?', b: 'Prepared: frames and vocabulary ready to adapt. Memorised: whole answers recited, which fails when questions change. Interaction is two-way and reacts to what is asked; a presentation is one-way and pre-planned.', src: 'ib-myp-language-acquisition-criterion-c-speaking-revision-notes' },
    ]),

    // 4 Assessment criteria: D Writing
    ...sub(AC, `${AC}-d-writing`, 'D', [
      { n: 1, f: 'What does criterion D (Writing) assess?', b: 'Using language suited to audience and purpose (formal and informal, social and academic registers), and applying understanding of language, form, mode and medium to express ideas.' },
      { n: 2, f: 'Cohesion versus coherence in writing', b: 'Cohesion: language that links sentences and paragraphs (connectives, reference words).\nCoherence: whether the ideas make sense in a logical order. A text can use many connectives and still be incoherent.' },
      { n: 3, f: 'How do you decode a writing prompt?', b: 'PATS: purpose, audience, text type, stimulus. Choose the register from the audience, mine the stimulus for 3–4 ideas (including what the image adds), plan one job per paragraph, then check verbs, agreement, spelling and register.' },
    ]),

    // 5 MYP eAssessment structure and proficiency levels
    ...topicOnly(`${P}-eassessment-structure`, '5', [
      { n: 1, f: 'What is the structure of the MYP Language Acquisition eAssessment?', b: 'An on-screen examination of three tasks, about 35 minutes each (1 hour 45 minutes in all). Tasks 1 and 2 each pair a written-visual text with an audio-visual text and are marked on criteria A (listening) and B (reading); Task 3 is writing in response to multimodal texts, marked on criterion D. A, B and D are worth 32 marks each, 96 marks in all. Speaking (C, 32 marks) is a separate examination.' },
      { n: 2, f: 'How is the speaking examination assessed?', b: 'It is an interactive task marked internally by your teacher against the published year 5 speaking criteria, then moderated by the IB, which samples each school and can adjust marks.' },
      { n: 3, f: 'Classroom scale versus eAssessment blueprint', b: 'Classroom: each criterion 0–8, total 0–32. eAssessment blueprint: 32 marks for each of A, B and D on screen, 96 in all, plus 32 marks for the speaking examination (C). The marks in an examination may vary by up to three from the blueprint.' },
      { n: 4, f: 'What are the three eAssessment proficiency levels?', b: 'Emergent, capable and proficient. A student is examined at one of these levels, reflecting actual progress in the language, not year group.' },
      { n: 5, f: 'Six proficiency phases versus three proficiency levels', b: 'The six phases form a teaching continuum; students enter and leave a phase individually as their proficiency grows, not by age or year group. The three levels (emergent, capable, proficient) are a coarser scale used for reporting eAssessment results.' },
      { n: 6, f: 'What is a multimodal text?', b: 'A text that combines two or more modes — written, spoken, visual, spatial, aural — such as a poster, web page, video, infographic, comic or social media post.' },
      { n: 7, f: 'What does interplay mean in multimodal texts?', b: 'The brief\'s idea that the aspects of a text (words, images, layout, sound) work together to convey ideas, values and attitudes. Say what each visual or spatial choice adds to the words.' },
      { n: 8, f: 'What topics can the on-screen examination draw on?', b: 'Any topic from the language acquisition list your school works from, set within the six global contexts. The brief does not say which topic will appear, so build thematic word banks across contexts.' },
    ]),
  ],
};
