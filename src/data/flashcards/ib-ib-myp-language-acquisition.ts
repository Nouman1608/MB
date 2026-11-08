/**
 * D-444 -- flashcards for IB MYP Language Acquisition (from 2020, first
 * eAssessment May 2023/November 2023).
 *
 * The syllabus record lists five topics and no subtopics, so there is one block
 * per topic, in syllabus order. Card ids are `<topic number>-<n>` and are
 * permanent (browser progress is keyed by them): add a new card with the next
 * unused n, never renumber.
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
 *   Every card is authored (origin 'authored'): the only candidates that
 *   scripts/flashcard-candidates.mjs lists are worked-example fragments, not
 *   term/definition pairs.
 *
 * Plain text only (see types.ts).
 */
import type { Flashcard, FlashcardDeck } from './types.ts';

interface Spec { n: number; f: string; b: string; u?: true; src?: string }

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

export const DECK_IB_IB_MYP_LANGUAGE_ACQUISITION: FlashcardDeck = {
  boardSlug: 'ib',
  qualificationSlug: 'ib-myp',
  subjectSlug: 'myp-language-acquisition',
  syllabusCode: 'MYP Language Acquisition',
  syllabusSeries: 'From 2020 (first eAssessment May 2023/November 2023)',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
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

    // 4 Assessment criteria
    ...topicOnly(`${P}-assessment-criteria`, '4', [
      { n: 1, f: 'What are the four MYP Language Acquisition criteria?', b: 'A: Listening. B: Reading. C: Speaking. D: Writing. Equally weighted; each has eight achievement levels in four bands, plus level 0, so 0–8 each and 0–32 in class. There is no SL/HL split.' },
      { n: 2, f: 'What does criterion A (Listening) assess?', b: 'Interpreting and constructing meaning from spoken multimodal text, including how images and other spatial aspects work with the speech to convey ideas, values and attitudes.' },
      { n: 3, f: 'Explicit versus implicit information, and what is a distractor?', b: 'Explicit: stated directly. Implicit: suggested, so you infer it from evidence. A distractor sounds like an answer but is not the right one, such as an old time that a speaker then corrects.' },
      { n: 4, f: 'How should you approach a listening task?', b: 'Before: read every question, underline key words and predict answer types. First listen: gist and explicit facts, mark doubts with "?". Second listen: check doubts, listen for corrections, note tone and what the visuals add.' },
      { n: 5, f: 'What does criterion B (Reading) assess?', b: 'Constructing meaning from written, spatial and visual aspects of texts, and how they work with the words to convey ideas, values and attitudes.' },
      { n: 6, f: 'Visual aspects versus spatial aspects of a text', b: 'Visual: photos, drawings, icons, charts, logos, colour.\nSpatial: where things sit on the page — position, size, boxes, columns, grouping and white space.' },
      { n: 7, f: 'What does criterion C (Speaking) assess?', b: 'Interacting in the target language on topics of personal, local and global interest and significance, supported by spoken, written and visual texts.' },
      { n: 8, f: 'Fluency, accuracy, range and intelligibility in speaking', b: 'Fluency: smooth flow with natural pauses. Accuracy: control of grammar, vocabulary and word order. Range: variety of vocabulary and structures. Intelligibility: how easily a listener understands you.' },
      { n: 9, f: 'What does criterion D (Writing) assess?', b: 'Using language suited to audience and purpose (formal and informal, social and academic registers), and applying understanding of language, form, mode and medium to express ideas.' },
      { n: 10, f: 'Cohesion versus coherence in writing', b: 'Cohesion: language that links sentences and paragraphs (connectives, reference words).\nCoherence: whether the ideas make sense in a logical order. A text can use many connectives and still be incoherent.' },
      { n: 11, f: 'How do you decode a writing prompt?', b: 'PATS: purpose, audience, text type, stimulus. Choose the register from the audience, mine the stimulus for 3–4 ideas (including what the image adds), plan one job per paragraph, then check verbs, agreement, spelling and register.' },
    ]),

    // 5 MYP eAssessment structure and proficiency levels
    ...topicOnly(`${P}-eassessment-structure`, '5', [
      { n: 1, f: 'What is the structure of the MYP Language Acquisition eAssessment?', b: 'An on-screen examination with three tasks: comprehending spoken multimodal texts (A), comprehending written multimodal texts (B) and writing in response to multimodal texts (D), 24 marks each. Speaking (C, 24 marks) is a separate examination.' },
      { n: 2, f: 'How is the speaking examination assessed?', b: 'It is an interactive task marked internally by your teacher against the published year 5 speaking criteria, then moderated by the IB, which samples each school and can adjust marks.' },
      { n: 3, f: 'Classroom scale versus eAssessment blueprint', b: 'Classroom: each criterion 0–8, total 0–32. eAssessment blueprint: 24 raw marks per criterion, total 96, and the marks per task may vary by up to three from the blueprint.' },
      { n: 4, f: 'What are the three eAssessment proficiency levels?', b: 'Emergent, capable and proficient. A student is examined at one of these levels, reflecting actual progress in the language, not year group.' },
      { n: 5, f: 'Six proficiency phases versus three proficiency levels', b: 'The six phases form a teaching continuum; students enter and leave a phase individually as their proficiency grows, not by age or year group. The three levels (emergent, capable, proficient) are a coarser scale used for reporting eAssessment results.' },
      { n: 6, f: 'What is a multimodal text?', b: 'A text that combines two or more modes — written, spoken, visual, spatial, aural — such as a poster, web page, video, infographic, comic or social media post.' },
      { n: 7, f: 'What does interplay mean in multimodal texts?', b: 'The brief\'s idea that the aspects of a text (words, images, layout, sound) work together to convey ideas, values and attitudes. Say what each visual or spatial choice adds to the words.' },
      { n: 8, f: 'What topics can the on-screen examination draw on?', b: 'Any topic from the language acquisition list your school works from, set within the six global contexts. The brief does not say which topic will appear, so build thematic word banks across contexts.' },
    ]),
  ],
};
