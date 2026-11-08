/**
 * D-444 -- flashcards for IB Diploma Programme Language B (first assessment 2020).
 *
 * The syllabus record lists the five prescribed themes as topics with no
 * subtopics, so there is one block per theme, in syllabus order. Card ids are
 * `<topic number>-<n>` and are permanent (browser progress is keyed by them):
 * add a new card with the next unused n, never renumber.
 *
 * This is a skills course and the deck is language-neutral (it serves every
 * Language B language): no vocabulary lists. Each theme block has cards on the
 * theme itself (guiding principle, recommended topics, possible questions),
 * then cards on one part of the assessment or the conceptual understandings,
 * placed on a theme the matching Marlbridge page is mapped to.
 *
 *   The syllabus record is not tiered, so no card carries a tier. HL-only
 *   content is marked "(HL only)" in words.
 *   Every card is authored (origin 'authored'): scripts/flashcard-candidates.mjs
 *   lists no candidates for 'DP Language B'. The cards are written from the
 *   course's revision notes; the Paper 1 criteria card (which those pages leave
 *   to the teacher) is written conservatively from the official guide.
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

const P = 'ib-dp-language-b';

export const DECK_IB_IB_DP_LANGUAGE_B: FlashcardDeck = {
  boardSlug: 'ib',
  qualificationSlug: 'ib-dp',
  subjectSlug: 'language-b',
  syllabusCode: 'DP Language B',
  syllabusSeries: 'First assessment 2020',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Identities
    ...topicOnly(`${P}-identities`, '1', [
      { n: 1, f: 'What does the Identities theme explore?', b: 'The nature of the self and what it means to be human. A guiding question: how do language and culture contribute to forming an identity?' },
      { n: 2, f: 'Name the recommended topics for Identities', b: 'Lifestyles; health and well-being; beliefs and values; subcultures; language and identity.' },
      { n: 3, f: 'What are the five prescribed themes of Language B?', b: 'Identities, experiences, human ingenuity, social organization and sharing the planet. They frame the texts studied and the stimuli used in the assessments.' },
      { n: 4, f: 'What does Paper 1 (productive skills) involve?', b: 'One writing task chosen from three. Each task sets a context, audience and purpose and lists text types to choose from. 25% of the final grade, 30 marks. SL: 1 hour 15 minutes, 250–400 words. HL: 1 hour 30 minutes, 450–600 words, with more complex language and higher-order thinking.' },
      { n: 5, f: 'What is register, and how is formal register signalled?', b: 'Register is how formal or informal the language is. Formal signals: the polite "you" form of the language (such as vous, usted or Sie), titles and surnames, set opening and closing formulas, precise impersonal vocabulary, complete linked sentences.' },
      { n: 6, f: 'Tone versus register', b: 'Register is the level of formality. Tone is the writer\'s attitude (urgent, reassuring, critical, ironic), shown through intensifiers, modal verbs, punctuation and the balance of facts and feelings. A formal text can still be enthusiastic.' },
      { n: 7, f: 'What conventions should a personal text type show?', b: 'Personal texts (diary, personal email or letter, personal blog post) for yourself or people you know: a date or greeting, first person, feelings and reflection, and an informal to neutral register.' },
    ]),

    // 2 Experiences
    ...topicOnly(`${P}-experiences`, '2', [
      { n: 1, f: 'What does the Experiences theme explore?', b: 'The stories of the events, experiences and journeys that shape our lives. Possible questions: How does our past shape our present and future? How and why do different cultures mark important moments in life?' },
      { n: 2, f: 'Name the recommended topics for Experiences', b: 'Leisure activities; holidays and travel; life stories; rites of passage; customs and traditions; migration.' },
      { n: 3, f: 'What does Paper 2 (receptive skills) involve?', b: 'Separate listening and reading sections, 50% of the final grade in total. Listening: 25 marks, 25%. Reading: 40 marks, 25%. Reading is nearly two-thirds of the raw marks.' },
      { n: 4, f: 'How long are the Paper 2 sections at SL and HL?', b: 'Listening: 45 minutes at SL, 1 hour at HL. Reading: 1 hour at both levels. Only the listening section gets longer at HL.' },
      { n: 5, f: 'How should you approach a Paper 2 listening task?', b: 'Before: read all questions and predict answer types (number, place, reason, feeling). During: notes and symbols, not sentences; keep going if you miss one. Watch for self-corrections, two numbers, options mentioned then rejected. After: fill gaps and check spelling.' },
      { n: 6, f: 'Why does Experiences often call for past-tense control?', b: 'Life stories, travel and rites of passage are usually told in the past, so a text needs the language\'s completed-past form, its background or habitual past form, and an earlier-past (pluperfect) form, used accurately together.' },
    ]),

    // 3 Human ingenuity
    ...topicOnly(`${P}-human-ingenuity`, '3', [
      { n: 1, f: 'What does the Human ingenuity theme explore?', b: 'The ways in which human creativity and innovation affect our world. Possible questions: What can we learn about a culture through its artistic expression? How do the media change the way we relate to each other?' },
      { n: 2, f: 'Name the recommended topics for Human ingenuity', b: 'Entertainment; artistic expressions; communication and media; technology; scientific innovation.' },
      { n: 3, f: 'What are the five conceptual understandings of Language B?', b: 'Context (the situation around a text), audience (who it is for and the writer–reader relationship), purpose (why it exists), meaning (what it communicates, explicitly or implicitly) and variation (how language changes with the other four).' },
      { n: 4, f: 'What kinds of variation does Language B ask you to notice?', b: 'Register (formal to informal); tone (the writer\'s attitude); medium (spoken is looser than written, a message shorter than a letter); and regional variety in vocabulary, pronunciation and some grammar.' },
      { n: 5, f: 'How do you answer a Paper 2 reading question?', b: 'Circle the question word (who, why, how many) to fix the answer type; underline key words and note the marks; list synonyms; scan for them; read the full sentence and the next one; answer only what is asked.' },
      { n: 6, f: 'How do you answer true/false with justification and reference-word questions?', b: 'True/false: decide, then quote the shortest words from the text that prove it.\nReference word: look back for what the word refers to, check agreement, substitute it and reread.' },
      { n: 7, f: 'How do you answer an inference question?', b: 'Quote the line → state its literal meaning → state what it implies. The answer must be supported by the text, not by general knowledge.' },
    ]),

    // 4 Social organization
    ...topicOnly(`${P}-social-organization`, '4', [
      { n: 1, f: 'What does the Social organization theme explore?', b: 'The ways in which groups of people organize themselves, or are organized, through common systems or interests. Possible questions: What is the individual\'s role in the community? What role do rules and regulations play in forming a society?' },
      { n: 2, f: 'Name the recommended topics for Social organization', b: 'Social relationships; community; social engagement; education; the working world; law and order.' },
      { n: 3, f: 'What conventions should a professional text type show?', b: 'Professional texts (formal letter or email, report, proposal) for an organisation: purpose stated early, one point per paragraph, formal opening and closing formulas, formal register, and headings in a report.' },
      { n: 4, f: 'What are the Paper 1 assessment criteria?', b: 'A: Language (12 marks). B: Message (12 marks). C: Conceptual understanding (6 marks) — choosing and using the right text type, register and conventions for the context, audience and purpose. Total 30.' },
      { n: 5, f: 'What is the HL literature requirement?', b: 'HL students study two literary works originally written in the target language. The HL individual oral uses an excerpt from one of them as its stimulus. (HL only)' },
      { n: 6, f: 'Direct versus indirect characterisation', b: 'Direct: the text tells you what a character is like ("She was proud").\nIndirect: you infer it from actions, speech, appearance or others\' reactions. Useful when analysing an HL literary extract. (HL only)' },
      { n: 7, f: 'Literary theme versus prescribed theme', b: 'A literary theme is an idea a work explores (belonging, loss). A prescribed theme is one of the five course themes. In the HL oral, link the literary theme of the extract to a prescribed theme. (HL only)' },
    ]),

    // 5 Sharing the planet
    ...topicOnly(`${P}-sharing-the-planet`, '5', [
      { n: 1, f: 'What does the Sharing the planet theme explore?', b: 'The challenges and opportunities faced by individuals and communities in the modern world. Possible questions: What environmental and social issues challenge the world, and how can they be overcome? What challenges and benefits does globalization bring?' },
      { n: 2, f: 'Name the recommended topics for Sharing the planet', b: 'The environment; human rights; peace and conflict; equality; globalization; ethics; urban and rural environment.' },
      { n: 3, f: 'What is the individual oral in Language B?', b: 'Internal assessment, 25% of the final grade, 30 marks, conducted by your teacher. SL: based on a visual image linked to a theme (15 minutes\' preparation). HL: based on an excerpt from one of the two literary works (20 minutes\' preparation). It tests receptive, productive and interactive skills.' },
      { n: 4, f: 'What are the individual oral assessment criteria?', b: 'A: Language (12). B1: Message — visual stimulus at SL, literary extract at HL (6). B2: Message — conversation (6). C: Interactive skills — communication (6). Total 30.' },
      { n: 5, f: 'How do you read an SL visual stimulus?', b: 'Literal: who, where, what in 2–3 sentences. Theme: which theme and topic, and which details show it. Lens: one possible question as your main idea. Culture: one specific example from a target-language culture.' },
      { n: 6, f: 'What is the most common weakness in the individual oral?', b: 'Spending too much of the presentation describing the surface of the stimulus or extract, leaving too little time to develop an argument and link it to the theme and target-language culture.' },
      { n: 7, f: 'How does Language B differ from Language A and ab initio?', b: 'Language B is an additional language for students with some prior learning. Language A courses are studied in a student\'s best language. Ab initio is a separate SL course for beginners with no background in the language.' },
    ]),
  ],
};
