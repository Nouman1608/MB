/**
 * D-444 -- flashcards for Pearson Edexcel A Level Urdu 9UR0 (2018).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent: add a new card with the next unused n, never renumber.
 *
 * Sources: the syllabus record (theme headings, research subjects, Appendix 1
 * works) and Marlbridge's own 9UR0 pages (theme study guides 1-3, the Paper 1,
 * Paper 2 and Paper 3 notes). Vocabulary and sentences are taken from or kept to
 * the level of those pages. Theme 4 has no Marlbridge guide, so its cards use
 * only standard, common vocabulary and well-known historical facts. The prescribed
 * works carry identification, paper-structure and exam-approach cards only: no
 * plot, character or quotation is stated for any of them.
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

const T1 = 'theme-1-evolving-pakistani-society-9ur0';
const T2 = 'theme-2-art-and-culture-urdu-speaking-world-9ur0';
const T3 = 'theme-3-immigration-multicultural-society-9ur0';
const T4 = 'theme-4-aspects-of-pakistani-politics-9ur0';
const T5 = 'prescribed-literary-texts-and-films-9ur0';

export const DECK_EDEXCEL_A_LEVEL_URDU_LANGUAGE: FlashcardDeck = {
  boardSlug: 'edexcel',
  qualificationSlug: 'a-level',
  subjectSlug: 'urdu-language',
  syllabusCode: '9UR0',
  syllabusSeries: '2018',
  author: 'marlbridge-academic-team',
  updated: '2026-11-15',
  deckReview: { reviewerSlug: 'farheen-zehra', reviewedOn: '2026-11-15' },
  cards: [
    // Theme 1: Evolving Pakistani society
    ...sub(T1, 'khandan-family-9ur0', '1.1', [
      { n: 1, f: 'Theme 1 heading: پاکستانی معاشرے کا ارتقا', b: 'Evolving Pakistani society. Its sub-themes are family (خاندان), work (کام) and equal access to education in Pakistan (تعلیم), which is the research subject.' },
      { n: 2, f: 'Family vocabulary: خاندان، بزرگ، رشتے دار', b: 'خاندان family; بزرگ elder; رشتے دار relative.' },
      { n: 3, f: 'More family vocabulary: شادی، ذمہ داری، روایت، نسل، دیکھ بھال', b: 'شادی marriage; ذمہ داری responsibility; روایت tradition; نسل generation; دیکھ بھال care.' },
      { n: 4, f: 'مشترکہ خاندانی نظام versus الگ گھرانا', b: 'مشترکہ خاندانی نظام is the joint family system, several generations or related households living together. الگ گھرانا or چھوٹا خاندان is a separate or smaller household.' },
      { n: 5, f: 'How do you argue about joint and smaller families?', b: 'Take a balanced position: joint families give support and shared costs, smaller households give privacy and independence. You can say society is changing without calling either form simply right or wrong.' },
      { n: 6, f: 'Why is the verb plural? جوڑوں نے الگ گھر بنا لیے ہیں', b: 'With the ergative نے and a transitive past verb, the verb agrees with the object گھر (masculine plural here), not with the subject جوڑوں.' },
      { n: 7, f: 'Link phrases: اس کے برعکس، اس کے علاوہ، نتیجتاً', b: 'اس کے برعکس in contrast; اس کے علاوہ in addition; نتیجتاً as a result. Build each paragraph around one such link so the argument can be followed.' },
    ]),
    ...sub(T1, 'kaam-work-9ur0', '1.2', [
      { n: 1, f: 'Work vocabulary: روزگار، ملازمت، تنخواہ، مزدور', b: 'روزگار livelihood, employment; ملازمت job, service; تنخواہ salary; مزدور labourer.' },
      { n: 2, f: 'More work vocabulary: ہنر، دفتر، کاروبار، ترقی', b: 'ہنر skill; دفتر office; کاروبار business; ترقی progress, promotion.' },
      { n: 3, f: 'Urdu for unemployment and for women\'s employment', b: 'بے روزگاری is unemployment; خواتین کی ملازمت is women\'s employment. Both are common topics when discussing barriers, opportunities and pressure on young people.' },
      { n: 4, f: 'Ideas to cover for the sub-theme کام', b: 'Types of work (agriculture, industry, services, informal and self-employment, work abroad); women\'s employment; unemployment and the role of skills and training; technology, freelancing and changing workplaces.' },
      { n: 5, f: 'Paper 1 Urdu to English: translation method', b: 'Read the whole passage, find the verb (it is last in Urdu), identify subject and object, rebuild in English order, check tense and register, then reread the English alone. If it sounds odd, it is too literal.' },
      { n: 6, f: 'Paper 1 translation: what is penalised more, omission or awkwardness?', b: 'Omission. Every clause carries marks, so do not leave anything out and do not add explanation. Render idiom by sense, never word for word.' },
    ]),
    ...sub(T1, 'taleem-education-research-subject-9ur0', '1.3', [
      { n: 1, f: 'Education vocabulary: تعلیم، خواندگی، اسکول، استاد، معلم', b: 'تعلیم education; خواندگی literacy; اسکول school; استاد or معلم teacher.' },
      { n: 2, f: 'More education vocabulary: مساوی مواقع، صنفی امتیاز، دیہی، شہری، نصاب', b: 'مساوی مواقع equal opportunities; صنفی امتیاز gender discrimination; دیہی rural; شہری urban; نصاب curriculum.' },
      { n: 3, f: 'Public and private schools in Urdu', b: 'سرکاری public (government) and نجی private. Compare their resources and quality in your research.' },
      { n: 4, f: 'Translate into Urdu: "education is a right"', b: 'تعلیم ایک حق ہے۔' },
      { n: 5, f: 'Points to research on equal access to education in Pakistan', b: 'Access for girls and boys and for urban and rural children; public and private schools; language of instruction; constitutional commitments; poverty, distance, child labour and cost as barriers.' },
      { n: 6, f: 'Article 25A: what do you need to know before quoting it?', b: 'It was added in 2010 and provides for free and compulsory education for children in a stated age range. Check the exact wording and age range before you quote it.' },
      { n: 7, f: 'Country rule for Theme 1 research', b: 'Your research must be based on Pakistan. Keep a file of named sources, dates and figures you have checked, and never quote a statistic you cannot trace.' },
      { n: 8, f: 'Paper 1 Section C: marks, length and grids', b: 'Section C is 40 of Paper 1\'s 80 marks: about 320-370 words in Urdu. Grids: knowledge and understanding via research (AO4) 20; understanding of and response to the unseen text (AO2) 10; accuracy and range of language (AO3) 10.' },
    ]),

    // Theme 2: Art and culture in the Urdu-speaking world
    ...sub(T2, 'lok-rasoom-o-riwayat-folklore-9ur0', '2.1', [
      { n: 1, f: 'Theme 2 heading and sub-themes', b: 'اردو بولنے والی دُنیا میں تمدن اور فنونِ لطیفہ: art and culture in the Urdu-speaking world. Sub-themes: folklore and tradition (لوک رسوم و روایت), popular culture (مقبول کلچر), the media (میڈیا), which is the research subject.' },
      { n: 2, f: 'Folklore vocabulary: لوک کہانی، لوک گیت، رسم، میلہ', b: 'لوک کہانی folk tale; لوک گیت folk song; رسم custom; میلہ fair.' },
      { n: 3, f: 'More folklore vocabulary: داستان، مشاعرہ، وراثت، زبانی روایت', b: 'داستان long tale; مشاعرہ poetry gathering; وراثت heritage; زبانی روایت oral tradition.' },
      { n: 4, f: 'Examples of folk romances and performance traditions', b: 'Romances such as Heer and Ranjha (retold in a Punjabi poem attributed to Waris Shah) and Sohni and Mahiwal; qawwali, folk music and storytelling; the mushaira in Urdu literary culture.' },
      { n: 5, f: 'Passive voice: داستانیں پیش کی جاتی ہیں', b: 'The passive uses the past participle plus جانا. It agrees with the subject: داستانیں is feminine plural, so پیش کی جاتی ہیں is feminine plural. Say what is presented, not who presents it.' },
      { n: 6, f: 'Conditional structure: اگر ... تو ...', b: 'اگر نوجوان ان روایات سے کٹ گئے تو ہماری ثقافتی شناخت کمزور ہو جائے گی: if young people lose touch with these traditions, our cultural identity will weaken. Useful for an opinion with a condition.' },
      { n: 7, f: 'Paper 2 Section A: translation into Urdu', b: 'English to Urdu, 20 marks, about 30 minutes, marked as 20 one-mark chunks. Verb and adjective endings must be correct; only non-grammatical misspellings that do not create ambiguity are tolerated.' },
    ]),
    ...sub(T2, 'maqbool-culture-popular-culture-9ur0', '2.2', [
      { n: 1, f: 'Popular culture vocabulary: مقبول، ڈراما، فلم، موسیقی', b: 'مقبول popular; ڈراما drama; فلم film; موسیقی music.' },
      { n: 2, f: 'More popular culture vocabulary: کھیل، فیشن، نوجوان، رجحان', b: 'کھیل sport; فیشن fashion; نوجوان young person; رجحان trend.' },
      { n: 3, f: 'Ideas to cover for مقبول کلچر', b: 'Television drama, film and music; sport, especially cricket; fashion and food; youth culture and social media; local and global influences.' },
      { n: 4, f: 'The local versus global debate in popular culture', b: 'Regional entertainment mixes with international styles. The debate is whether this enriches local culture or dilutes it; argue one side with specific examples.' },
      { n: 5, f: 'Common mistake in Theme 2', b: 'Treating it as only literature, or listing cultural items without explaining why they matter. It also covers customs, entertainment and the media; give one clear viewpoint with examples.' },
      { n: 6, f: 'Gender agreement: وہ ایک مقبول ڈراما ہے / وہ ایک مقبول فلم ہے', b: 'ڈراما is masculine and فلم is feminine, so adjectives, possessives and verbs must agree: مقبول ڈراما دیکھا گیا، مقبول فلم دیکھی گئی. Learn each noun with its gender.' },
    ]),
    ...sub(T2, 'media-research-subject-9ur0', '2.3', [
      { n: 1, f: 'Media vocabulary: اخبار، رسالہ، خبر، نشریات', b: 'اخبار newspaper; رسالہ magazine; خبر news item; نشریات broadcasts.' },
      { n: 2, f: 'More media vocabulary: اشتہار، سوشل میڈیا، آزادیٔ اظہار، اثر', b: 'اشتہار advertisement; سوشل میڈیا social media; آزادیٔ اظہار freedom of expression; اثر influence.' },
      { n: 3, f: 'Translate into Urdu: "the media influences young people"', b: 'میڈیا نوجوانوں پر اثر ڈالتا ہے۔' },
      { n: 4, f: 'Areas to explore for the media research subject', b: 'Print and broadcast media and private channels; online and social media; influence on opinion, language and behaviour; freedom and responsibility (regulation, censorship, rumours); the register of Urdu in news, drama and advertising.' },
      { n: 5, f: 'Country rule for Theme 2 research', b: 'Base research on one country or area only: Pakistan, or one area of India where Urdu is an official language. This differs from Themes 1, 3 and 4, which must be based on Pakistan.' },
      { n: 6, f: 'What happens if Section C refers to more than one country or area?', b: 'It wastes time on content that earns nothing. For Themes 1, 3 and 4 only content on Pakistan is marked; for Theme 2 the examiner awards marks for whichever country or area gains the highest mark.' },
    ]),

    // Theme 3: Immigration and the multicultural society
    ...sub(T3, 'positive-features-diverse-society-9ur0', '3.1', [
      { n: 1, f: 'Theme 3 heading and sub-themes', b: 'ہجرت (ترکِ وطن) اور کثیر الثقافتی معاشرہ: immigration and the multicultural society. Sub-themes: positive features of a diverse society, attitudes to immigration, and emigration from Pakistan (the research subject).' },
      { n: 2, f: 'Diversity vocabulary: کثیر الثقافتی، تنوع، رواداری، باہمی احترام', b: 'کثیر الثقافتی multicultural; تنوع diversity; رواداری tolerance; باہمی احترام mutual respect.' },
      { n: 3, f: 'More diversity vocabulary: ثقافت، زبان، تہوار، شہریت', b: 'ثقافت culture; زبان language; تہوار festival; شہریت citizenship.' },
      { n: 4, f: 'Positive features of a diverse society to discuss', b: 'Cultural variety (languages, food, dress, music, festivals); economic contribution (skills, enterprise, labour); learning and reduced prejudice; shared citizenship with respect for difference.' },
      { n: 5, f: 'Translate into Urdu: "a diverse society respects everyone"', b: 'ایک متنوع معاشرہ سب کا احترام کرتا ہے۔' },
      { n: 6, f: 'Paper 3: structure, time and marks', b: '2 hours 15 minutes, 60 marks. Section A Listening Comprehension, 30 marks, recommended 45 minutes. Section B Listening, Reading and Writing, 30 marks, recommended 1 hour 30 minutes. No translation.' },
    ]),
    ...sub(T3, 'attitudes-towards-immigration-9ur0', '3.2', [
      { n: 1, f: 'Immigration vocabulary: ہجرت، تارکِ وطن، مہاجر', b: 'ہجرت migration; تارکِ وطن emigrant; مہاجر migrant.' },
      { n: 2, f: 'Attitude vocabulary: تعصب، امتیازی سلوک، انضمام، شناخت، رجحان', b: 'تعصب prejudice; امتیازی سلوک discriminatory treatment; انضمام integration; شناخت identity; رجحان attitude, trend.' },
      { n: 3, f: 'Ideas to cover on attitudes towards immigration', b: 'Welcoming attitudes; worries about jobs, housing, public services and local identity; prejudice and discrimination and what law, schools and communities can do; integration and identity; the role of the media and politicians.' },
      { n: 4, f: 'How do you discuss attitudes without being one-sided?', b: 'State what people on each side say, give their reasons, then say which you find more convincing and why. Do not claim only one view is reasonable.' },
      { n: 5, f: 'Dative construction: انھیں اپنی نوکریوں کی فکر ہوتی ہے', b: 'Urdu expresses feelings with the person marked by کو or the pronoun form انھیں (to them): "they have worry about their jobs". It differs from English, so practise it.' },
      { n: 6, f: 'Contrast and reason words: تاہم، کیونکہ، میرے خیال میں', b: 'تاہم however (counter-view); کیونکہ because (reason); میرے خیال میں in my opinion. Use them to move from a point to a counter-view to your own conclusion.' },
      { n: 7, f: 'Paper 3 Section B: what is the task?', b: 'Using a listening source and a reading text on the same sub-theme, summarise the points of view in each, then evaluate them and draw conclusions in continuous prose of about 220-270 words. Leave out examples and repetition.' },
    ]),
    ...sub(T3, 'emigration-from-pakistan-research-subject-9ur0', '3.3', [
      { n: 1, f: 'Emigration vocabulary: ترسیلاتِ زر، ذہین افراد کا انخلا', b: 'ترسیلاتِ زر remittances (money sent home); ذہین افراد کا انخلا brain drain (loss of skilled workers).' },
      { n: 2, f: 'Push and pull factors in emigration from Pakistan', b: 'Push factors: limited jobs, lower wages, insecurity, the wish for further study. Pull factors: higher pay, family links, better services at the destination.' },
      { n: 3, f: 'What aspects should your emigration research cover?', b: 'Push and pull factors; main destinations (the Gulf, Europe, North America), with different patterns of work and settlement; remittances; skilled emigration; effects on families left behind and on communities abroad.' },
      { n: 4, f: 'Emigration or immigration: which is which in Urdu?', b: 'Emigration is leaving your country (تارکِ وطن is the emigrant); immigration is arriving in a new one. The theme heading uses ہجرت for migration generally. Do not confuse them in your terms or your research focus.' },
      { n: 5, f: 'Country rule for Theme 3 research', b: 'Research must be based on Pakistan. Prepare points for and against emigration so you can write a balanced response on any statement.' },
      { n: 6, f: 'What are the three Section C marking grids for the research response?', b: 'Knowledge and understanding of society and culture via research (AO4) 20 marks; understanding of and response to the unseen text (AO2) 10 marks; accuracy and range of language (AO3) 10 marks.' },
    ]),

    // Theme 4: Aspects of Pakistani politics
    ...sub(T4, 'qiyam-e-pakistan-1947-9ur0', '4.1', [
      { n: 1, f: 'Theme 4 heading: پاکستانی سیاست کے رُخ', b: 'Aspects of Pakistani politics. Its sub-themes are the creation of Pakistan in 1947 (قیامِ پاکستان), the feudal system (جاگیرداری نظام), and environmental issues in Pakistan (the research subject).' },
      { n: 2, f: 'Vocabulary for قیامِ پاکستان (1947)', b: 'قیام creation, founding; آزادی independence; تقسیم partition; ہجرت migration; مہاجر migrant; مسلم لیگ the Muslim League.' },
      { n: 3, f: 'Who is the قائدِ اعظم?', b: 'The title for Muhammad Ali Jinnah (محمد علی جناح), the founder of Pakistan and its first Governor-General.' },
      { n: 4, f: 'What is the دو قومی نظریہ?', b: 'The two-nation theory: the idea that Muslims and Hindus of the subcontinent were two separate nations, which was the basis for the demand for Pakistan.' },
      { n: 5, f: 'What was the قراردادِ پاکستان and when was it passed?', b: 'The Pakistan (Lahore) Resolution, passed in Lahore in March 1940. It called for Muslim-majority areas to form independent states. Check dates and wording against your sources before using them.' },
      { n: 6, f: 'Paper 2 Sections B and C: marks and timing', b: 'Paper 2 is 2 hours 40 minutes, 110 marks, 30% of the A Level. Section B (literary text) and Section C (film) are 45 marks and about 1 hour 5 minutes each. You write two extended responses in total.' },
    ]),
    ...sub(T4, 'jagirdari-nizam-feudal-system-9ur0', '4.2', [
      { n: 1, f: 'Meaning of جاگیرداری نظام', b: 'The feudal (landholding) system, in which large areas of land are held by a few landowners and worked by tenants and labourers.' },
      { n: 2, f: 'Vocabulary: جاگیردار، زمیندار، کسان، زمین', b: 'جاگیردار large landholder; زمیندار landowner; کسان farmer, peasant; زمین land.' },
      { n: 3, f: 'Vocabulary: غربت، استحصال، زرعی اصلاحات', b: 'غربت poverty; استحصال exploitation; زرعی اصلاحات land (agrarian) reforms.' },
      { n: 4, f: 'Translate: land is held by a few people', b: 'زمین چند لوگوں کے پاس ہوتی ہے۔\nزمین is feminine, so the verb is ہوتی.' },
      { n: 5, f: 'How do you write a balanced response on the feudal system?', b: 'Give the criticisms and the arguments for reform with reasons and sourced evidence, and say which you find more convincing. Avoid unsupported statistics and sweeping claims.' },
      { n: 6, f: 'Paper 2: the five preparation angles for each work', b: 'Form and technique; key themes and issues; characterisation; plot structure; social and cultural setting. Link the writer\'s treatment of an issue to one of the broader themes, such as politics or society.' },
    ]),
    ...sub(T4, 'environmental-issues-pakistan-research-subject-9ur0', '4.3', [
      { n: 1, f: 'Environment vocabulary: ماحول، آلودگی، موسمیاتی تبدیلی', b: 'ماحول environment; آلودگی pollution; موسمیاتی تبدیلی climate change.' },
      { n: 2, f: 'More vocabulary: شجرکاری، سیلاب، پانی کی قلت، پلاسٹک', b: 'شجرکاری tree planting; سیلاب flood; پانی کی قلت water shortage; پلاسٹک plastic.' },
      { n: 3, f: 'Translate: environmental pollution is a big problem', b: 'ماحولیاتی آلودگی ایک بڑا مسئلہ ہے۔' },
      { n: 4, f: 'Country rule for Theme 4 research', b: 'The research must be based on Pakistan. Choose the responses to environmental issues that you can support with named, dated, checked sources.' },
      { n: 5, f: 'Research file rule for every theme', b: 'Keep a file of named sources, dates and figures that you have checked yourself, and never quote a statistic you cannot trace. Compare at least two viewpoints on each point.' },
      { n: 6, f: 'How should a Section C answer be built?', b: 'Use both your research and the unseen Urdu text, make clear which is which, plan first, give each paragraph one main idea and link them with connectives such as اس کے علاوہ and نتیجتاً.' },
    ]),

    // Prescribed literary texts and films
    ...sub(T5, 'aangan-khadija-mastur-9ur0', '5.1', [
      { n: 1, f: 'آنگن: author, year and form?', b: 'خدیجہ مستور, 1999, a novel. It is one of the prescribed literary texts in the 9UR0 specification (Appendix 1).' },
      { n: 2, f: 'Which Paper 2 section covers a literary text, and how many works do you study?', b: 'Section B, 45 marks, about 1 hour 5 minutes. You study two works: two literary texts, or one literary text and one film, never two films.' },
      { n: 3, f: 'What five angles should you prepare for آنگن?', b: 'Form and technique, key themes and issues, characterisation, plot structure, and social and cultural setting.' },
      { n: 4, f: 'How is an آنگن essay marked?', b: 'On AO4 (critical and analytical response, with cultural or social insight), range of language (AO3) and accuracy of language (AO3). There are no AO1 or AO2 marks on Paper 2.' },
    ]),
    ...sub(T5, 'patras-ke-mazameen-ahmed-shah-patras-bukhari-9ur0', '5.2', [
      { n: 1, f: 'پطرس کے مضامین: author, year and form?', b: 'احمد شاہ پطرس بخاری, 2011, a collection of essays. It is a prescribed literary text in Appendix 1.' },
      { n: 2, f: 'Do you study the whole of پطرس کے مضامین?', b: 'No. Five essays are prescribed: سویرے جو کل آنکھ میری کھُلی؛ اُردو کی آخری کتاب؛ مُرید پُور کا پیر؛ مرحُوم کی یاد میں؛ لاہور کا جغرافیہ.' },
      { n: 3, f: 'How should you structure a works answer on these essays?', b: 'Position, evidence, cultural connection: state your stance, support it with two or three specific points from the essays (not a full retelling), then link it to a broader social or cultural theme.' },
      { n: 4, f: 'What counts as strong evidence in a literary essay answer?', b: 'Specific, well-chosen references to the text, explained in your own accurate Urdu. Retelling the story without connecting it to a theme weakens the AO4 mark.' },
    ]),
    ...sub(T5, 'bisaat-basir-kazmi-9ur0', '5.3', [
      { n: 1, f: 'بساط: author, year and form?', b: 'باصر کاظمی, 1987, a play. It is a prescribed literary text in Appendix 1.' },
      { n: 2, f: 'Which section of Paper 2 covers بساط, and how is its language marked?', b: 'Section B, a literary-text response. Language is marked for range and accuracy, so write in controlled Urdu with correct agreement, tense and spelling.' },
      { n: 3, f: 'How do you answer a question about a play\'s form and technique?', b: 'Comment on how the writer presents ideas through the form: structure, scenes and dialogue. Link each point to a theme and give specific evidence, not general remarks.' },
      { n: 4, f: 'Can you choose a play and a film as your two works?', b: 'Yes. You may study one literary text (the novel, the essays or the play) and one film. You may not study two films.' },
    ]),
    ...sub(T5, 'bin-roye-momina-duraid-9ur0', '5.4', [
      { n: 1, f: 'بن روئے: director, year and type?', b: 'مومنہ دُرید, 2015, a prescribed film in Appendix 1. The specification gives each film as a name and a year only.' },
      { n: 2, f: 'Which section covers a film on Paper 2?', b: 'Section C, 45 marks, about 1 hour 5 minutes. You may choose one film only, together with one literary text.' },
      { n: 3, f: 'How do you approach a film response?', b: 'Use the same five angles as for a text: form and technique, themes and issues, characterisation, plot structure and social and cultural setting. Evaluate the film\'s treatment of an issue, not just the story.' },
    ]),
    ...sub(T5, 'baaghban-ravi-chopra-9ur0', '5.5', [
      { n: 1, f: 'باغبان: director, year and type?', b: 'روی چوپڑہ, 2003, a prescribed film in Appendix 1.' },
      { n: 2, f: 'What does a film answer need to show for the AO4 mark?', b: 'A critical and analytical response with cultural or social insight: connect the film\'s treatment of an issue to a broader social or cultural theme, supported by specific scenes.' },
      { n: 3, f: 'How do you prepare for a film essay without retelling the plot?', b: 'Work out your position, pick two or three specific scenes as evidence, and say what each shows about the theme. Practise writing it in accurate Urdu under the section timing.' },
    ]),
    ...sub(T5, 'bajrangi-bhaijaan-kabir-khan-9ur0', '5.6', [
      { n: 1, f: 'بجرنگی بھائی جان: director, year and type?', b: 'کبیر خان, 2015, a prescribed film in Appendix 1.' },
      { n: 2, f: 'What rule applies to the combination of works on Paper 2?', b: 'Every candidate writes exactly two extended responses: two literary texts, or one literary text and one film. Two films is never allowed.' },
      { n: 3, f: 'Timing across Paper 2', b: 'About 30 minutes for the Section A translation into Urdu and about 1 hour 5 minutes for each extended response. Do not let one section overrun, because the essays carry 45 marks each.' },
    ]),
  ],
};
