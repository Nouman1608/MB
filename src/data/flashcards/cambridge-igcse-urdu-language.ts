/**
 * D-444 -- flashcards for Cambridge IGCSE Urdu as a Second Language 0539 (2025-2027).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent. The syllabus numbers the exercises 1-6 in Paper 1, 1-4 in
 * Paper 2 and the parts 1-3 in Component 5, so the same subtopic number occurs
 * up to three times: to keep every id unique, Paper 1 uses n = 1-39, Paper 2
 * uses n = 51-99 and Component 5 uses n = 101 onward. Add new cards with the
 * next unused n in the block's range. On 20 Nov 2026 the Component 5 cards were
 * re-filed from the topic onto its three parts, and `idMigration` below moves
 * saved progress onto the new ids.
 *
 * All cards are authored from the course's own Marlbridge pages and the syllabus
 * record. Urdu is kept to simple, common words and sentences.
 *
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

const P1 = 'paper-1-reading-writing-0539';
const P2 = 'paper-2-listening-0539';
const C5 = 'component-5-speaking-0539';

export const DECK_CAMBRIDGE_IGCSE_URDU_LANGUAGE: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'igcse',
  subjectSlug: 'urdu-language',
  syllabusCode: '0539',
  syllabusSeries: '2025-2027',
  author: 'marlbridge-academic-team',
  updated: '2026-11-20',
  deckReview: { reviewerSlug: 'farheen-zehra', reviewedOn: '2026-11-15' },
  idMigration: {
    id: '0539-subtopics-2026-11-20',
    before: '2026-11-20',
    map: {
      '1-1': '1-1', '1-2': '1-2', '1-3': '1-3', '1-4': '1-4', '1-5': '1-5',
      '1-6': '1-6', '2-1': '2-1', '2-2': '2-2', '2-3': '2-3', '2-4': '2-4',
      '2-5': '2-5', '3-1': '3-1', '3-2': '3-2', '3-3': '3-3', '3-4': '3-4',
      '4-1': '4-1', '4-2': '4-2', '4-3': '4-3', '4-4': '4-4', '4-5': '4-5',
      '5-1': '5-1', '5-2': '5-2', '5-3': '5-3', '5-4': '5-4', '5-5': '5-5',
      '5-6': '5-6', '5-7': '5-7', '6-1': '6-1', '6-2': '6-2', '6-3': '6-3',
      '6-4': '6-4', '6-5': '6-5', '6-6': '6-6', '6-7': '6-7', '6-8': '6-8',
      '6-9': '6-9', '6-10': '6-10', '6-11': '6-11', '6-12': '6-12', '6-13': '6-13',
      '6-14': '6-14', '1-51': '1-51', '1-52': '1-52', '1-53': '1-53', '1-54': '1-54',
      '1-55': '1-55', '1-56': '1-56', '1-57': '1-57', '2-51': '2-51', '2-52': '2-52',
      '2-53': '2-53', '2-54': '2-54', '2-55': '2-55', '2-56': '2-56', '3-51': '3-51',
      '3-52': '3-52', '3-53': '3-53', '3-54': '3-54', '4-51': '4-51', '4-52': '4-52',
      '4-53': '4-53', '4-54': '4-54', '4-55': '4-55', '3-101': '1-101', '3-102': '1-102',
      '3-103': '1-103', '3-104': '2-101', '3-105': '3-101', '3-106': '1-104', '3-107': '2-102',
      '3-108': '2-103', '3-109': '2-104',
    },
  },
  cards: [
    // Paper 1 -- Reading and Writing
    ...sub(P1, 'exercise-1-short-answer-questions-0539', '1', [
      { n: 1, f: 'Paper 1 (0539): total marks, time and language of the answers?', b: '60 marks, 2 hours. All questions and responses are in Urdu and dictionaries are not permitted. Paper 1 is 67% of the qualification; Paper 2 Listening is 33%.' },
      { n: 2, f: 'Exercise 1 (8 marks): what do you read and how do you answer?', b: 'A short text such as an advertisement, brochure or newspaper article, which you skim or gist-read. You answer with single words or short phrases.' },
      { n: 3, f: 'Best order of work for a comprehension exercise?', b: 'Read the questions first, read the passage once for overall sense, then find the relevant section and read around it. Match the length of the answer to the marks available.' },
      { n: 4, f: 'Urdu question words: کیا، کون، کب، کہاں، کیوں، کیسے', b: 'کیا what; کون who; کب when; کہاں where; کیوں why; کیسے how.\nRoman: kya, kaun, kab, kahan, kyun, kaise.' },
      { n: 5, f: 'Which question type needs inference, not a located detail?', b: '"Why" (کیوں) questions. Copying the text scores nothing; give the reason in your own words. What, who and when questions only need a located detail.' },
      { n: 6, f: 'Common mistake on a short answer question?', b: 'Writing a long answer to a question worth one mark. Give a word or a short phrase and move on.' },
    ]),
    ...sub(P1, 'exercise-2-multiple-matching-0539', '2', [
      { n: 1, f: 'Exercise 2 (9 marks): what is the task?', b: 'Multiple matching: you match sentences to a series of short paragraphs.' },
      { n: 2, f: 'How do you tackle multiple matching?', b: 'Find the key idea in each sentence, then look for the paragraph that expresses the same idea, often in different words. Match on meaning, not on identical words.' },
      { n: 3, f: 'Why can a shared word be a trap in matching?', b: 'Two paragraphs may use the same word for different ideas. Read the whole paragraph before you commit to a match.' },
      { n: 4, f: 'Linking words: اور، لیکن، کیونکہ، اس لیے', b: 'اور and; لیکن but; کیونکہ because; اس لیے therefore. They show how ideas connect, which helps you decide where a sentence belongs.' },
      { n: 5, f: 'Opposites help with paraphrase: بڑا، اچھا، نیا، مہنگا', b: 'The opposites are چھوٹا small; برا bad; پرانا old; سستا cheap.\nRoman: bara/chhota, achha/bura, naya/purana, mehnga/sasta.' },
    ]),
    ...sub(P1, 'exercise-3-note-making-0539', '3', [
      { n: 1, f: 'Exercise 3 (9 marks): what is the task?', b: 'Read a longer text and make brief notes under the headings supplied on the paper.' },
      { n: 2, f: 'What do the supplied headings tell you before you read?', b: 'They tell you what information to look for. Read the headings first, then scan the text for each one in turn.' },
      { n: 3, f: 'What should good notes look like?', b: 'Short phrases or key words placed under the right heading, not long copied sentences. Leave out examples and repetition.' },
      { n: 4, f: 'Exercise 3 (note-making) or Exercise 4 (summary): what is the difference?', b: 'Exercise 3: brief notes under supplied headings, 9 marks. Exercise 4: a continuous paragraph of up to 100 words in your own words, 10 marks.' },
    ]),
    ...sub(P1, 'exercise-4-summary-0539', '4', [
      { n: 1, f: 'Exercise 4 (10 marks): length and language rule?', b: 'A paragraph-length summary of up to 100 words, using your own words as far as possible.' },
      { n: 2, f: 'What belongs in a summary and what is left out?', b: 'Keep the main points. Leave out examples, repetition and minor detail.' },
      { n: 3, f: 'How do you avoid copying the source text in a summary?', b: 'Note the main points, cover the text, then write from your notes. Change the sentence structure and replace source words with your own.' },
      { n: 4, f: 'Why do long copied stretches lose marks in a summary?', b: 'The task rewards your own words. Lifting phrases from the text shows that you can find them, not that you understand them.' },
      { n: 5, f: 'Linking words for a summary: اس کے علاوہ، لیکن، اس لیے، آخر میں', b: 'اس کے علاوہ in addition; لیکن but; اس لیے therefore; آخر میں finally. Use them to join the points into one flowing paragraph.' },
    ]),
    ...sub(P1, 'exercise-5-writing-exercise-0539', '5', [
      { n: 1, f: 'Exercise 5 (8 marks): task and length?', b: 'A short piece of functional prose, such as an email, of approximately 120 words, for a specified purpose, format and audience.' },
      { n: 2, f: 'What three things does the Exercise 5 task specify?', b: 'Purpose, format and audience. Appropriateness is credited as well as accuracy, so an accurate answer in the wrong style still loses marks.' },
      { n: 3, f: 'Which Urdu forms of address suit a formal task and an informal task?', b: 'Formal (head teacher, official): آپ throughout, with آپ کیسے ہیں؟ Informal (friend): تم is acceptable, with تم کیسے ہو؟ Never drift between them in one piece.' },
      { n: 4, f: 'Three levels of address in Urdu: آپ، تم، تو', b: 'آپ formal and respectful; تم familiar; تو intimate. The verb changes with each: آپ ہیں، تم ہو، تو ہے.' },
      { n: 5, f: 'A common greeting to open an email or letter in Urdu', b: 'السلام علیکم (peace be upon you). An informal opening to a friend can be پیارے دوست (dear friend).' },
      { n: 6, f: 'How do you close a formal letter in Urdu (yours sincerely)?', b: 'آپ کا مخلص is the usual closing; a female writer can write آپ کی مخلص.\nRoman: aap ka mukhlis / aap ki mukhlis.' },
      { n: 7, f: 'How should you use the ~120 words in Exercise 5?', b: 'A brief greeting, then cover every point the task asks for, then a short closing. Stay close to the length given.' },
    ]),
    ...sub(P1, 'exercise-6-extended-writing-exercise-0539', '6', [
      { n: 1, f: 'Exercise 6 (16 marks): task and length?', b: 'A longer piece of continuous prose of approximately 200 words, for a specified purpose, format and audience. It is prompt-driven, not a choice of titles.' },
      { n: 2, f: 'Exercises 5 and 6: share of Paper 1 marks?', b: '24 of the 60 marks (8 + 16). They carry the most marks on the paper, so they deserve the most timed practice.' },
      { n: 3, f: 'How do you structure the Exercise 6 composition?', b: 'Plan first: introduction, three or four paragraphs with one main idea each, and a conclusion. For a discussion decide your line of argument first; for a story decide the ending first.' },
      { n: 4, f: 'Why does changing register mid-piece lose marks?', b: 'Examiners read for one consistent level of formality across the whole response. Drifting between formal and informal costs marks even when each sentence is correct.' },
      { n: 5, f: 'Urdu word order: where does the verb go?', b: 'Subject, object, verb. The verb comes last: میں کتاب پڑھتا ہوں (I read a book).\nRoman: main kitaab parhta hoon.' },
      { n: 6, f: 'Gender agreement: اچھا لڑکا، اچھی لڑکی', b: 'The adjective agrees with the noun: اچھا masculine, اچھی feminine. The verb agrees too: لڑکا جاتا ہے، لڑکی جاتی ہے.' },
      { n: 7, f: 'Possessives agree with the thing owned: میرا بھائی، میری بہن', b: 'میرا goes with a masculine noun (brother), میری with a feminine noun (sister), not with the gender of the owner.' },
      { n: 8, f: 'When must the ergative نے be used? Give an example.', b: 'With a transitive verb in the simple past (perfective): اس نے خط لکھا (he/she wrote a letter). The verb then agrees with the object: میں نے کتاب پڑھی.' },
      { n: 9, f: 'Does an intransitive past verb take نے?', b: 'No. وہ آیا (he came), لڑکی گئی (the girl went). The verb agrees with the subject, and there is no نے.' },
      { n: 10, f: 'The five main tenses of پڑھنا (to read), masculine speaker', b: 'Present: میں پڑھتا ہوں. Continuous: میں پڑھ رہا ہوں. Past habitual: میں پڑھتا تھا. Simple past: میں نے پڑھا. Future: میں پڑھوں گا.' },
      { n: 11, f: 'Postpositions: میں، پر، سے، کو، کا. What do they mean?', b: 'میں in; پر on; سے from, with or by; کو to; کا of. They come after the noun: کتاب میز پر ہے (the book is on the table).' },
      { n: 12, f: 'Two phrases to give an opinion in Urdu', b: 'میرے خیال میں (in my opinion) and میرا خیال ہے کہ (I think that). Follow the opinion with a reason, using کیونکہ (because).' },
      { n: 13, f: 'Script accuracy: why do dots matter?', b: 'Many letters share one shape and differ only by dots, for example ب پ ت ٹ and ج چ ح خ. A misplaced dot changes the word entirely.' },
      { n: 14, f: 'How should you use the last minutes of Exercises 5 and 6?', b: 'Reread for gender and verb agreement, the use of نے, the form of address and dots. A five-minute check catches most agreement errors.' },
    ]),

    // Paper 2 -- Listening
    ...sub(P2, 'p2-exercise-1-short-answer-questions-0539', '1', [
      { n: 51, f: 'Paper 2 Listening (0539): marks, time and key rules?', b: '30 marks, about 35-45 minutes, 33% of the qualification. Everything is in Urdu, all questions are compulsory, no dictionaries, and each recording is heard twice.' },
      { n: 52, f: 'Paper 2 Exercise 1 (8 marks): what do you hear and write?', b: 'Several short spoken texts, such as a travel announcement, a recorded phone message or a brief dialogue. You write short answers to eight questions.' },
      { n: 53, f: 'What do you read before each recording starts?', b: 'The instruction line and the questions. The instruction tells you the exact format of the answer: a single word, a short phrase or a sentence.' },
      { n: 54, f: 'Numbers 1-10 in Urdu', b: 'ایک، دو، تین، چار، پانچ، چھ، سات، آٹھ، نو، دس.\nRoman: ek, do, teen, chaar, paanch, chhe, saat, aath, nau, das.' },
      { n: 55, f: 'Telling the time: تین بجے، ساڑھے تین بجے، سوا تین، پونے تین', b: 'تین بجے at three o\'clock; ساڑھے تین بجے at half past three; سوا تین quarter past three (3:15); پونے تین quarter to three (2:45).' },
      { n: 56, f: 'Times of day: صبح، دوپہر، شام، رات', b: 'صبح morning; دوپہر noon, afternoon; شام evening; رات night. Listen for these in announcements and phone messages.' },
      { n: 57, f: 'What does the word کل mean?', b: 'Both yesterday and tomorrow. The tense of the verb tells you which: کل میں گیا (yesterday I went), کل میں جاؤں گا (tomorrow I will go). Likewise پرسوں means both the day before yesterday and the day after tomorrow.' },
    ]),
    ...sub(P2, 'p2-exercise-2-gap-fill-sentences-0539', '2', [
      { n: 51, f: 'Paper 2 Exercise 2 (8 marks): what is the task?', b: 'You hear a longer text, such as a conversation, interview, monologue or formal talk, and complete gaps in notes or sentences printed on the paper.' },
      { n: 52, f: 'How do you use the two playings in gap-fill?', b: 'Use the first playing to see the structure and note possible answers. Commit your answers after the second playing.' },
      { n: 53, f: 'In gap-fill, should you paraphrase or write what you heard?', b: 'Write exactly the word or phrase you heard. A paraphrase risks losing the mark even if the meaning is close.' },
      { n: 54, f: 'Days of the week in Urdu', b: 'پیر Monday, منگل Tuesday, بدھ Wednesday, جمعرات Thursday, جمعہ Friday, ہفتہ Saturday, اتوار Sunday.' },
      { n: 55, f: 'Tens in Urdu: بیس، تیس، چالیس، پچاس، ساٹھ', b: 'بیس 20; تیس 30; چالیس 40; پچاس 50; ساٹھ 60. Also ستر 70, اسی 80, نوے 90, سو 100. Urdu numbers up to 100 are irregular, so learn each one.' },
      { n: 56, f: 'Which listening skills do Exercises 1 and 2 test?', b: 'L1 and L2: locating stated information and grasping the ideas and opinions expressed. Exercise 2 rewards catching specific factual detail more than general gist.' },
    ]),
    ...sub(P2, 'p2-exercise-3-multiple-matching-0539', '3', [
      { n: 51, f: 'Paper 2 Exercise 3 (6 marks): what do you hear and do?', b: 'Six short extracts, each from a different speaker. You match each speaker to the appropriate option, which means telling similar speakers or viewpoints apart.' },
      { n: 52, f: 'How do you keep track of six speakers?', b: 'Jot a one- or two-word cue for each speaker on the first playing, then check against the options on the second. Note one distinguishing detail, not just the topic.' },
      { n: 53, f: 'Which objectives does Exercise 3 test?', b: 'L3 and L4: a step up from Exercises 1 and 2, because you must separate speakers or viewpoints, not just pick out one fact.' },
      { n: 54, f: 'Opinion phrases: مجھے پسند ہے، مجھے پسند نہیں', b: 'مجھے پسند ہے I like it; مجھے پسند نہیں I do not like it. Also میں متفق ہوں (I agree) and میں متفق نہیں ہوں (I disagree).' },
    ]),
    ...sub(P2, 'p2-exercise-4-multiple-choice-questions-0539', '4', [
      { n: 51, f: 'Paper 2 Exercise 4 (8 marks): what is the task?', b: 'You hear a discussion between two speakers and answer multiple-choice comprehension questions on what was said.' },
      { n: 52, f: 'Why is Exercise 4 the most demanding listening exercise?', b: 'It draws on all four listening objectives, L1 to L4, together.' },
      { n: 53, f: 'Should you change an answer after the second playing?', b: 'Be careful. The option that seemed right after a careful first playing is usually right. Changing it because of a half-remembered detail is a common source of lost marks.' },
      { n: 54, f: 'Words that signal a reason: کیونکہ، اس لیے', b: 'کیونکہ because; اس لیے therefore, that is why. In a discussion they point to the speaker\'s reasons and opinions, which the multiple-choice options often test.' },
      { n: 55, f: 'Exercise marks on Paper 2 (Exercises 1 to 4)?', b: '8, 8, 6 and 8, which makes 30. Exercise 3, with six extracts, carries the fewest marks.' },
    ]),

    // Component 5 -- Speaking
    ...sub(C5, 'part-1-presentation-0539', '1', [
      { n: 101, f: 'What is Component 5 and how is it reported?', b: 'An optional speaking test, conducted and marked in Urdu by the centre and externally moderated by Cambridge. It is separately endorsed with a grade from 1 (high) to 5 (low) and does not count towards the overall grade.' },
      { n: 102, f: 'Component 5: total marks and length of the test?', b: '60 marks. The syllabus gives the whole test as approximately 10-12 minutes.' },
      { n: 103, f: 'Component 5 Part 1: what is it and how long?', b: 'Presentation, 2-3 minutes. You choose the topic in advance, related to Urdu-speaking society or culture, and give a prepared outline. You may use a small card of prompt headings.' },
      { n: 104, f: 'How should you choose a Part 1 topic?', b: 'Choose a topic connected to Urdu-speaking society or culture that you can speak about in depth, for example a festival or family tradition. It must sustain Part 1 and the discussion in Part 2.' },
    ]),
    ...sub(C5, 'part-2-topic-conversation-0539', '2', [
      { n: 101, f: 'Component 5 Part 2: what is it and how long?', b: 'Discussion, 3-4 minutes. The examiner discusses your presentation with you and you must explain and justify your opinions in natural, unscripted Urdu.' },
      { n: 102, f: 'Why can Part 2 and Part 3 not be memorised?', b: 'Part 2 asks real follow-up questions, and Part 3 topics are unknown. Practise answering why and what-do-you-think questions aloud, with vocabulary banks, not scripts.' },
      { n: 103, f: 'Phrases to ask for help in a speaking test', b: 'معاف کیجیے (excuse me); کیا آپ دوبارہ کہہ سکتے ہیں؟ (can you say that again?); میں سمجھا نہیں (I did not understand, male speaker). Use آپ with the examiner.' },
      { n: 104, f: 'Component 5: how do you give an opinion with a reason?', b: 'Use میرے خیال میں ... کیونکہ ... (in my opinion ... because ...). A reason and an example make a spoken answer fuller and more natural.' },
    ]),
    ...sub(C5, 'part-3-general-conversation-0539', '3', [
      { n: 101, f: 'Component 5 Part 3: what is it, how long, how many marks?', b: 'General conversation, 3-4 minutes, 20 marks, on two or three general topics that you do not know in advance.' },
    ]),
  ],
};
