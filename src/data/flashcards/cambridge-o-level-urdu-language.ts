/**
 * D-444 -- flashcards for Cambridge O Level Urdu 3247 (First Language) / 3248
 * (Second Language).
 *
 * The syllabus record itemises four topics and no subtopics, so card ids are
 * `<topic number>-<n>` and are permanent: add a new card with the next unused n,
 * never renumber.
 *
 * Authored from the course's own Marlbridge pages and the syllabus record. The
 * 3247 Paper 2 cards name the prescribed authors and forms only as the Marlbridge
 * page lists them; nothing about the content of any poem or essay is stated.
 * Urdu is kept to simple, common words and sentences.
 *
 * Plain text only (see types.ts).
 */
import type { Flashcard, FlashcardDeck } from './types.ts';

interface Spec { n: number; f: string; b: string }

const topicOnly = (topic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b }) => ({
    id: `${number}-${n}`,
    topic,
    front: f,
    back: b,
    origin: 'authored' as const,
  }));

export const DECK_CAMBRIDGE_O_LEVEL_URDU_LANGUAGE: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'o-level',
  subjectSlug: 'urdu-language',
  syllabusCode: '3247 / 3248',
  syllabusSeries: '3247: 2027; 3248: 2027-2029',
  author: 'marlbridge-academic-team',
  updated: '2026-11-15',
  deckReview: { reviewerSlug: 'farheen-zehra', reviewedOn: '2026-11-15' },
  cards: [
    // 1 3247 First Language Urdu -- Paper 1 Reading and Writing
    ...topicOnly('fl-paper-1-reading-writing-3247', '1', [
      { n: 1, f: '3247 Paper 1: length, marks and parts?', b: '1 hour 30 minutes, 50 marks: Part 1 Reading (25 marks) and Part 2 Writing (25 marks). Paper 2 Texts carries the other 50%.' },
      { n: 2, f: '3247 Paper 1 Part 1 Reading: text and marks?', b: '25 marks. A non-literary text of roughly 400 words followed by comprehension questions of differing lengths.' },
      { n: 3, f: 'The four reading objectives R1 to R4 (3247)', b: 'R1 understand and convey information; R2 understand, order and present facts, ideas and opinions; R3 evaluate information and select what is relevant; R4 recognise implicit meanings and attitudes.' },
      { n: 4, f: 'Which objective tests inference and the writer\'s attitude?', b: 'R4: recognising implicit meanings and attitudes. "Why" questions need inference, so copying the text gives no credit; look at word choice for tone.' },
      { n: 5, f: '3247 Paper 1 Part 2 Writing: what must you write?', b: 'One composition of 300-400 words, 25 marks, chosen from argumentative, discursive, descriptive and narrative titles.' },
      { n: 6, f: 'The four topic areas of the 3247 writing titles', b: 'Health and fitness (food and diet, sport); the world of youth (music, culture, technology, fashion, family); education and training (school and college, work, professions); the world we live in (current affairs, environment, travel, media).' },
      { n: 7, f: 'How are the 25 Writing marks split in 3247?', b: 'Three strands: task achievement and content 10 marks, structure 5 marks, language 10 marks. Top-band content needs insight and full relevance, not just correctness.' },
      { n: 8, f: 'What does top-band language need in 3247 Part 2?', b: 'A confident range of complex sentence structures and wide, accurate vocabulary. An ambitious word used wrongly scores below a simpler word used correctly.' },
      { n: 9, f: 'Trap when choosing a 3247 Part 2 title?', b: 'Choosing without checking its topic area, then running out of things to say. Also writing under 300 words or drifting well past 400.' },
      { n: 10, f: 'Register in formal Urdu writing: which pronoun and why?', b: 'Use آپ throughout a formal piece, with respectful plural verbs: آپ جاتے ہیں. Drifting to تم mid-answer costs marks even if every sentence is correct.' },
      { n: 11, f: 'Accuracy points that decide the grade in Urdu writing', b: 'Gender agreement of noun, adjective and verb; tense and person; postpositions (نے، کو، سے، میں، پر); izafat in formal writing; dots and diacritics; Urdu punctuation.' },
      { n: 12, f: 'Why does a misplaced dot matter in Urdu?', b: 'Letters are distinguished by the number and position of dots, for example ب پ ت ٹ share a shape. Moving a dot gives a different letter and so a different word.' },
    ]),

    // 2 3247 First Language Urdu -- Paper 2 Texts
    ...topicOnly('fl-paper-2-texts-3247', '2', [
      { n: 1, f: '3247 Paper 2 Texts: the three parts and marks', b: 'Part 1 Unseen Passage 20 marks; Part 2 Poetry 15 marks; Part 3 Prose 15 marks. All three parts test AO3 (Literature).' },
      { n: 2, f: 'What does AO3 reward in 3247 Paper 2?', b: 'First-hand textual knowledge, literal and deeper meaning, how writers create effect through language, and an informed personal response.' },
      { n: 3, f: 'Part 1 Unseen Passage: can you learn it?', b: 'No. The extract (poetry or prose) is unseen, so you practise a skill: read unfamiliar extracts and say how the writer creates effect through word choice, imagery and structure, not only what it says.' },
      { n: 4, f: 'Part 2 Poetry: what is prescribed and how many questions?', b: '10 ghazals and 3 nazms. You answer 1 of 2 essay questions.' },
      { n: 5, f: 'The five ghazal poets prescribed for 3247', b: 'Khwaja Haider Ali Ahtish, Parveen Shakir, Momin Khan Momin, Allama Iqbal and Ahmed Faraz.' },
      { n: 6, f: 'The three prescribed nazms (3247)', b: 'Hali\'s Musaddas (17 selected stanzas), Zameer Jafri\'s "Admi" and Mahmood Sarhadi\'s "Qitaat", as listed on the Marlbridge Paper 2 page.' },
      { n: 7, f: 'Part 3 Prose: what is prescribed and how many questions?', b: '8 prose articles. You answer 1 of 2 essay questions.' },
      { n: 8, f: 'Authors of the prescribed prose (3247)', b: 'Muhammad Hussain Azad, Mirza Farhatullah Baig, Ghulam Abbas, Ahmad Nadeem Qasmi, Sir Syed Ahmed Khan, Mushtaq Ahmed Yousafi, Syed Imtiaz Ali Taj, and two letters of Ghalib (Khatoot-e-Ghalib).' },
      { n: 9, f: 'Define ghazal and nazm', b: 'A ghazal is made of couplets (اشعار) that each stand alone, linked by a shared rhyme and refrain. A nazm is a poem with a single unified theme developed from beginning to end.' },
      { n: 10, f: 'Ghazal terms: قافیہ، ردیف، مطلع، تخلص', b: 'قافیہ rhyme word; ردیف refrain repeated after the rhyme; مطلع opening couplet where both lines rhyme; تخلص the poet\'s pen name, usually in the last couplet.' },
      { n: 11, f: 'The four qualities the Paper 2 mark schemes reward', b: 'A personal, informed response; understanding beyond the literal meaning; explicit engagement with how effects are achieved; close, well-chosen textual reference rather than paraphrase. The top levels need sustained engagement with the writer\'s craft.' },
      { n: 13, f: 'How do you choose between the two essay questions?', b: 'Work out which prescribed text each question draws on, then choose the one you know in more depth. Depth of reference is rewarded, not how easy the wording looks.' },
    ]),

    // 3 3248 Second Language Urdu -- Paper 1 Reading and Writing
    ...topicOnly('sl-paper-1-reading-writing-3248', '3', [
      { n: 1, f: '3248 Paper 1: length, marks and shape?', b: '1 hour 45 minutes, 50 marks, five sequential exercises. Paper 1 is 50% of the qualification; Paper 2 Grammar, Writing and Translation is the other 50%.' },
      { n: 2, f: 'The five exercises of 3248 Paper 1 and their marks', b: '1 short-answer questions 8; 2 multiple matching 9; 3 note-making 9; 4 summary 10; 5 writing exercise 14. Total 50.' },
      { n: 3, f: '3248 Exercise 1 (8 marks): task?', b: 'Skim or gist-read a short functional text and answer short-answer questions with words or short phrases.' },
      { n: 4, f: '3248 Exercise 2 (9 marks): task?', b: 'Multiple matching: match sentences to paragraphs. Match on meaning, since a shared word can appear in two paragraphs with different ideas.' },
      { n: 5, f: '3248 Exercise 3 (9 marks): task?', b: 'Read a longer text and make brief notes under the headings supplied. Use short phrases, not copied sentences.' },
      { n: 6, f: '3248 Exercise 4 (10 marks): task and word limit?', b: 'A summary of up to 100 words on the Exercise 3 text, in your own words. Going over the limit wastes time for no extra credit.' },
      { n: 7, f: '3248 Exercise 5 (14 marks): task and length?', b: 'A functional piece of about 150 words from a prompt that specifies purpose, format and audience. It carries the most marks on the paper.' },
      { n: 8, f: 'Reading and Writing balance on 3248 Paper 1?', b: 'Reading carries roughly 60% of the marks and Writing roughly 40%. Paper 2 is almost entirely Writing, so the emphasis is reversed.' },
      { n: 9, f: 'Which 3248 objective names register and audience?', b: 'W5: use appropriate register and style or format for the given purpose and audience. W4 covers control of punctuation and spelling.' },
      { n: 10, f: 'Register for a formal letter versus a message to a friend', b: 'Formal letter, report or article: آپ throughout and neutral style. Message to a friend: تم is acceptable. Check the brief and keep one level throughout.' },
      { n: 11, f: 'When is the ergative نے required? Example.', b: 'With a transitive verb in the simple past: اس نے خط لکھا (he/she wrote a letter). The verb agrees with the object, not the subject: میں نے کتاب پڑھی.' },
      { n: 12, f: 'Gender agreement: میرا بھائی، میری بہن، اچھا لڑکا، اچھی لڑکی', b: 'Possessives and adjectives agree with the noun they describe, and so does the verb: میرا بھائی آیا، میری بہن آئی.' },
    ]),

    // 4 3248 Second Language Urdu -- Paper 2 Grammar, Writing and Translation
    ...topicOnly('sl-paper-2-grammar-writing-translation-3248', '4', [
      { n: 1, f: '3248 Paper 2: length, marks, choice?', b: '1 hour 30 minutes, 50 marks, 50% of the qualification. All four exercises are compulsory. Exercises 1-3 are set and answered in Urdu; Exercise 4 is set in English and answered in Urdu.' },
      { n: 2, f: 'The four exercises of 3248 Paper 2 and their marks', b: '1 sentence transformation 5; 2 multiple-choice cloze 10; 3 extended writing 20; 4 translation 15. Exercises 3 and 4 carry 35 of the 50 marks.' },
      { n: 3, f: 'Exercise 1 (5 marks): what must a transformation preserve?', b: 'The original meaning exactly, while you change the required structure such as tense, voice or sentence type. Each sentence is worth a mark, with no partial credit cushion.' },
      { n: 4, f: 'Transform the tense: وہ کھانا کھاتا ہے', b: 'Simple past: اس نے کھانا کھایا (note نے and the verb agreeing with the object). Future: وہ کھانا کھائے گا. Question: کیا وہ کھانا کھاتا ہے؟ Negative: وہ کھانا نہیں کھاتا.' },
      { n: 5, f: 'Exercise 2 (10 marks): which grammar points does the cloze test?', b: 'Verb conjugation, subject-verb agreement, comparatives, superlatives, parts of speech, nouns, prepositions, postpositions, articles and context-appropriate vocabulary.' },
      { n: 6, f: 'Why can a grammatically possible cloze option still be wrong?', b: 'It may fit the gap in isolation but not the passage. Always read the whole sentence around the gap before you choose.' },
      { n: 7, f: 'Comparative and superlative: علی احمد سے لمبا ہے', b: 'سے means than: Ali is taller than Ahmad. Superlative uses سب سے: سب سے لمبا لڑکا (the tallest boy), سب سے بڑا شہر (the biggest city).' },
      { n: 8, f: 'Exercise 3 (20 marks): task and length?', b: 'Extended writing of about 200 words in continuous prose, for a purpose, format and audience set on the paper. Ignoring them caps marks whatever the accuracy.' },
      { n: 9, f: 'Which purposes should you prepare for Exercise 3?', b: 'Narrative, descriptive, persuasive and informational, because the one set varies by series. Prepare vocabulary and structures for each, not just one.' },
      { n: 10, f: 'Exercise 4 (15 marks): task and the main trap?', b: 'Translate an English passage of about 150 words into natural Urdu. Word-for-word translation that sounds unnatural is marked below an accurate version that reads well.' },
      { n: 11, f: 'Translate: The book is on the table. / She wrote a letter to her brother.', b: 'کتاب میز پر ہے۔ / اس نے اپنے بھائی کو خط لکھا۔\nThe verb goes last, English prepositions become postpositions, and نے is needed with the transitive past.' },
      { n: 12, f: 'Where do candidates lose most translation marks?', b: 'On structure more than vocabulary: keeping English word order, missing gender and number agreement, and translating idioms word for word. Reread your Urdu as a standalone sentence.' },
    ]),
  ],
};
