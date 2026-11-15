/**
 * D-444 -- flashcards for OxfordAQA International GCSE Urdu 9264 (Version 1.1).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent: add a new card with the next unused n in the theme's range.
 * The specification numbers topics 1-4 inside each theme, so the same subtopic
 * number ('Topic 1') occurs in all three themes. To keep every id unique,
 * Theme 1 uses n = 1-99, Theme 2 uses n = 101-199 and Theme 3 uses n = 201-299.
 *
 * Authored from the course's own Marlbridge pages and the syllabus record. The
 * qualification has no listening or speaking component, so the cards are about
 * reading, grammar and meaning, and writing. Urdu is kept to simple, common words
 * and sentences.
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

const T1 = 'theme-1-identity-culture-9264';
const T2 = 'theme-2-local-national-international-9264';
const T3 = 'theme-3-study-employment-9264';

export const DECK_OXFORDAQA_IGCSE_URDU_LANGUAGE: FlashcardDeck = {
  boardSlug: 'oxfordaqa',
  qualificationSlug: 'igcse',
  subjectSlug: 'urdu-language',
  syllabusCode: '9264',
  syllabusSeries: 'Version 1.1',
  author: 'marlbridge-academic-team',
  updated: '2026-11-15',
  cards: [
    // Theme 1: Identity and Culture
    ...sub(T1, 'family-friends-9264', 'Topic 1', [
      { n: 1, f: '9264 assessment: papers, time and marks', b: 'Paper 1 Reading, Grammar and Meaning and Paper 2 Writing, each 1 hour 45 minutes, 70 marks and 50% of the GCSE. The three themes are examined across both papers. There is no listening or speaking component.' },
      { n: 2, f: 'Family vocabulary: ماں، باپ، والدین، بھائی، بہن', b: 'ماں mother; باپ father; والدین parents; بھائی brother; بہن sister.\nRoman: maan, baap, waalidain, bhai, behen.' },
      { n: 3, f: 'Extended family: دادا، دادی، نانا، نانی', b: 'دادا paternal grandfather; دادی paternal grandmother; نانا maternal grandfather; نانی maternal grandmother.' },
      { n: 4, f: 'Uncles and aunts: چچا، ماموں، خالہ، پھوپھی', b: 'چچا father\'s brother; ماموں mother\'s brother; خالہ mother\'s sister; پھوپھی father\'s sister. Urdu names each relative precisely.' },
      { n: 5, f: 'Introduce yourself: میرا نام ... ہے۔ میری عمر ... سال ہے۔', b: 'My name is ... My age is ... years. Example: میری عمر پندرہ سال ہے (I am fifteen years old). نام name and عمر age.' },
      { n: 6, f: 'Describe people: مہربان، ایماندار، شرمیلا، ہنس مکھ', b: 'مہربان kind; ایماندار honest; شرمیلا shy; ہنس مکھ cheerful. Add a reason: وہ مہربان ہے کیونکہ وہ سب کی مدد کرتا ہے.' },
      { n: 7, f: 'Friends and relationships: دوست، دوستی، پڑوسی، رشتہ', b: 'دوست friend; دوستی friendship; پڑوسی neighbour; رشتہ relationship. Also ہم ایک دوسرے کی مدد کرتے ہیں: we help each other.' },
      { n: 8, f: 'Gender agreement: اچھا لڑکا، اچھی لڑکی', b: 'Adjectives and verbs agree with the noun: اچھا masculine, اچھی feminine; لڑکا جاتا ہے، لڑکی جاتی ہے. One gender mistake carries through the whole sentence.' },
      { n: 9, f: 'Possessives agree with the thing owned: میرا بھائی، میری بہن', b: 'میرا with a masculine noun, میری with a feminine noun, میرے with a plural or oblique masculine: میرے دوست (my friends).' },
    ]),
    ...sub(T1, 'technology-everyday-life-9264', 'Topic 2', [
      { n: 1, f: 'Technology words: موبائل فون، کمپیوٹر، انٹرنیٹ، سوشل میڈیا', b: 'موبائل فون mobile phone; کمپیوٹر computer; انٹرنیٹ internet; سوشل میڈیا social media.' },
      { n: 2, f: 'Online activities: ویڈیو، تصویر، پیغام، آن لائن', b: 'ویڈیو video; تصویر picture; پیغام message; آن لائن online. Example: میں دوستوں کو پیغام بھیجتا ہوں (I send my friends messages).' },
      { n: 3, f: 'Advantages and disadvantages: فائدہ، نقصان، وقت ضائع کرنا', b: 'فائدہ benefit; نقصان harm; وقت ضائع کرنا to waste time. Weigh both sides: انٹرنیٹ کا فائدہ ہے لیکن زیادہ استعمال نقصان دیتا ہے.' },
      { n: 4, f: 'Say how often you use your phone', b: 'میں روزانہ فون استعمال کرتا ہوں: I use my phone every day (feminine speaker: کرتی ہوں). روزانہ daily; استعمال کرنا to use.' },
      { n: 5, f: 'Use an opinion with a reason on technology', b: 'میرے خیال میں سوشل میڈیا مفید ہے کیونکہ میں دوستوں سے رابطہ رکھ سکتا ہوں (in my opinion social media is useful because I can keep in touch with friends). رابطہ contact.' },
      { n: 6, f: 'Compare in Urdu: بہتر، سب سے بہتر، اس سے زیادہ مشکل', b: 'بہتر better; سب سے بہتر the best; اس سے زیادہ مشکل more difficult than this. Example: فون کمپیوٹر سے سستا ہے (a phone is cheaper than a computer).' },
    ]),
    ...sub(T1, 'free-time-activities-9264', 'Topic 3', [
      { n: 1, f: 'Free-time vocabulary: شوق، موسیقی، فلم، ڈراما، کھیل', b: 'شوق hobby; موسیقی music; فلم film; ڈراما drama, TV serial; کھیل sport, game.' },
      { n: 2, f: 'Sports words: کرکٹ، فٹ بال، تیراکی، ورزش', b: 'کرکٹ cricket; فٹ بال football; تیراکی swimming; ورزش exercise. Example: مجھے کرکٹ کھیلنا پسند ہے (I like playing cricket).' },
      { n: 3, f: 'Likes and dislikes: مجھے پسند ہے، مجھے پسند نہیں', b: 'مجھے ... پسند ہے I like ...; مجھے ... پسند نہیں I do not like .... Add a reason with کیونکہ: مجھے موسیقی پسند ہے کیونکہ یہ مجھے خوش کرتی ہے.' },
      { n: 4, f: 'Festivals: عید، رمضان، شادی، یومِ آزادی', b: 'عید Eid; رمضان Ramadan; شادی wedding; یومِ آزادی Independence Day.' },
      { n: 5, f: 'Customs and hospitality: مہمان، مہمان نوازی، مٹھائی، نئے کپڑے', b: 'مہمان guest; مہمان نوازی hospitality; مٹھائی sweets; نئے کپڑے new clothes. Example: عید کے دن ہم نئے کپڑے پہنتے ہیں.' },
      { n: 6, f: 'Which tenses lift a festival answer?', b: 'Present to describe the festival, past for one occasion you remember, future for what you will do next year, plus an opinion with a reason. Past: میں نے ... کیا. Future: میں ... کروں گا.' },
      { n: 7, f: 'The five main tenses of پڑھنا (to read), masculine speaker', b: 'Present: میں پڑھتا ہوں. Continuous: میں پڑھ رہا ہوں. Past habitual: میں پڑھتا تھا. Simple past: میں نے پڑھا. Future: میں پڑھوں گا.' },
      { n: 8, f: 'Why does the simple past use نے? میں نے کتاب پڑھی', b: 'A transitive verb in the simple past takes نے after the subject, and the verb agrees with the object: کتاب is feminine, so پڑھی. Learn this before writing about past events.' },
    ]),

    // Theme 2: Local, National, International and Global Areas of Interest
    ...sub(T2, 'home-town-neighbourhood-9264', 'Topic 1', [
      { n: 101, f: 'Where you live: گھر، محلہ، شہر، گاؤں، علاقہ', b: 'گھر home; محلہ neighbourhood; شہر city, town; گاؤں village; علاقہ area, region.' },
      { n: 102, f: 'Rooms and parts of the house: کمرہ، باورچی خانہ، باغ', b: 'کمرہ room; باورچی خانہ kitchen; باغ garden. Example: ہمارے گھر میں چار کمرے ہیں (our house has four rooms).' },
      { n: 103, f: 'Local amenities: بازار، دکان، پارک، مسجد، ہسپتال', b: 'بازار market; دکان shop; پارک park; مسجد mosque; ہسپتال hospital.' },
      { n: 104, f: 'Directions: سیدھا، دائیں، بائیں، مڑیں', b: 'سیدھا straight; دائیں right; بائیں left; مڑیں turn (polite command). Example: دائیں مڑیں (turn right). Use آپ forms when giving directions to a stranger.' },
      { n: 105, f: 'Position words: کے قریب، کے سامنے، کے پیچھے', b: 'کے قریب near; کے سامنے opposite, in front of; کے پیچھے behind. Example: پارک اسکول کے پیچھے ہے (the park is behind the school).' },
      { n: 106, f: 'Compare places: this town is quieter than the city', b: 'یہ شہر سے زیادہ پرسکون ہے is the pattern: سے means than, زیادہ means more. Superlative: سب سے بڑا شہر (the biggest city).' },
    ]),
    ...sub(T2, 'social-issues-9264', 'Topic 2', [
      { n: 101, f: 'Charity vocabulary: خیرات، مدد، رضاکار، فلاحی کام', b: 'خیرات charity; مدد help; رضاکار volunteer; فلاحی کام welfare, charity work.' },
      { n: 102, f: 'Healthy living: صحت، ورزش، صحت مند غذا، بیماری', b: 'صحت health; ورزش exercise; صحت مند غذا healthy food; بیماری illness.' },
      { n: 103, f: 'Unhealthy habits: جنک فوڈ، سگریٹ نوشی', b: 'جنک فوڈ junk food; سگریٹ نوشی smoking. Example: سگریٹ نوشی صحت کے لیے نقصان دہ ہے (smoking is harmful for health).' },
      { n: 104, f: 'Problem and solution language for social issues', b: 'The issue is ... (مسئلہ یہ ہے کہ ...); a possible solution would be ... (ایک حل یہ ہو سکتا ہے کہ ...); this would help because ... (اس سے مدد ملے گی کیونکہ ...). Treat it as core vocabulary.' },
      { n: 105, f: 'Four-step structure for a social or global issue', b: 'Name the problem, give a cause, propose a solution using if ... then ..., and give your opinion with a reason. It beats a description that never proposes a solution.' },
      { n: 106, f: 'Cause and effect words: اس لیے، اس کا نتیجہ یہ ہے کہ', b: 'اس لیے therefore, for this reason; اس کا نتیجہ یہ ہے کہ as a result of this. Use them to explain an issue, not just name it.' },
    ]),
    ...sub(T2, 'global-issues-9264', 'Topic 3', [
      { n: 101, f: 'Environment vocabulary: ماحول، آلودگی، موسمیاتی تبدیلی', b: 'ماحول environment; آلودگی pollution; موسمیاتی تبدیلی climate change.' },
      { n: 102, f: 'Environment actions: درخت، دوبارہ استعمال، پانی', b: 'درخت tree; دوبارہ استعمال reuse, recycling; پانی water. Example: ہمیں زیادہ درخت لگانے چاہئیں (we should plant more trees).' },
      { n: 103, f: 'Poverty vocabulary: غربت، بھوک، بے گھر', b: 'غربت poverty; بھوک hunger; بے گھر homeless.' },
      { n: 104, f: 'Conditional: if we plant more trees, the environment will improve', b: 'اگر ہم زیادہ درخت لگائیں تو ماحول بہتر ہو جائے گا۔\nاگر ... تو is the if ... then pattern, essential for proposing solutions.' },
      { n: 105, f: 'Social issues versus global issues: where does poverty belong?', b: 'In 9264, poverty sits under Global issues (Topic 3) with the environment, not under Social issues. Social issues are charity and voluntary work, and healthy and unhealthy living.' },
      { n: 106, f: 'Reading skill: identify the task type first', b: 'Decide whether a text describes a problem, proposes a solution or evaluates a solution. Answering the wrong type gives no credit even with accurate vocabulary.' },
    ]),
    ...sub(T2, 'travel-tourism-9264', 'Topic 4', [
      { n: 101, f: 'Travel vocabulary: سفر، چھٹیاں، سیاح، سیاحت', b: 'سفر journey, travel; چھٹیاں holidays; سیاح tourist; سیاحت tourism.' },
      { n: 102, f: 'Transport: ہوائی جہاز، ٹرین، بس، ٹکٹ', b: 'ہوائی جہاز aeroplane; ٹرین train; بس bus; ٹکٹ ticket.' },
      { n: 103, f: 'At the airport and hotel: ہوائی اڈا، پاسپورٹ، سامان، ہوٹل', b: 'ہوائی اڈا airport; پاسپورٹ passport; سامان luggage; ہوٹل hotel.' },
      { n: 104, f: 'Recount a holiday in the past tense', b: 'پچھلے سال ہم لاہور گئے (last year we went to Lahore). ہم ٹرین سے گئے (we went by train). With intransitive verbs there is no نے, and the verb agrees with the subject.' },
      { n: 105, f: 'Past narrative plus present evaluation', b: 'Travel tasks want what happened (past) and what you think of it now (present): میں نے سیر کی (I toured) and میرے خیال میں یہ بہترین چھٹی تھی (in my opinion it was the best holiday).' },
      { n: 106, f: 'Compare destinations in Urdu', b: 'لاہور کراچی سے زیادہ پرانا ہے (Lahore is older than Karachi). Use سے for than and سب سے for the most: سب سے اچھی چھٹی (the best holiday).' },
    ]),

    // Theme 3: Current and Future Study and Employment
    ...sub(T3, 'my-studies-9264', 'Topic 1', [
      { n: 201, f: 'School subjects: ریاضی، سائنس، انگریزی، اردو، تاریخ، جغرافیہ', b: 'ریاضی mathematics; سائنس science; انگریزی English; اردو Urdu; تاریخ history; جغرافیہ geography.' },
      { n: 202, f: 'Science subjects: حیاتیات، طبیعیات، کیمیا', b: 'حیاتیات biology; طبیعیات physics; کیمیا chemistry.' },
      { n: 203, f: 'Say your favourite subject and why', b: 'میرا پسندیدہ مضمون سائنس ہے کیونکہ مجھے تجربے پسند ہیں (my favourite subject is science because I like experiments). مضمون subject; پسندیدہ favourite.' },
      { n: 204, f: 'The school day: جماعت، گھنٹی، وقفہ، ہوم ورک، امتحان', b: 'جماعت class; گھنٹی bell; وقفہ break; ہوم ورک homework; امتحان exam.' },
      { n: 205, f: 'Why is "I like maths" not enough?', b: 'A bare preference scores little. Pair every opinion with a reason, and add an example if you can: مجھے ریاضی پسند ہے کیونکہ یہ دلچسپ ہے.' },
      { n: 206, f: 'Keep Topic 1 and Topic 2 vocabulary apart', b: 'My studies: subjects, opinions on them, timetables. Life at school: facilities, uniform, rules, routine. Both are set in school, but the topics are different.' },
    ]),
    ...sub(T3, 'life-school-college-9264', 'Topic 2', [
      { n: 201, f: 'School facilities: لائبریری، لیبارٹری، کھیل کا میدان', b: 'لائبریری library; لیبارٹری laboratory; کھیل کا میدان playground, sports field.' },
      { n: 202, f: 'School people and rules: استاد، پرنسپل، وردی، قواعد', b: 'استاد teacher; پرنسپل principal; وردی uniform; قواعد rules. Example: ہمیں وردی پہننی پڑتی ہے (we have to wear a uniform).' },
      { n: 203, f: 'Describe your school routine', b: 'ہمارا اسکول صبح آٹھ بجے شروع ہوتا ہے (our school starts at eight in the morning). شروع ہونا to begin; صبح morning; بجے at ... o\'clock.' },
      { n: 204, f: 'Compare school experiences: میرا اسکول ... سے بڑا ہے', b: 'Use سے for than: میرا اسکول پرانے اسکول سے بڑا ہے (my school is bigger than my old school). Add a reason with کیونکہ.' },
      { n: 205, f: 'Past tense for reflecting on school', b: 'میں نے پچھلے سال امتحان دیا (last year I took an exam). Remember نے with a transitive past verb. Tasks sometimes ask you to look back before looking forward.' },
    ]),
    ...sub(T3, 'education-post-16-9264', 'Topic 3', [
      { n: 201, f: 'Post-16 vocabulary: کالج، یونیورسٹی، اعلیٰ تعلیم، ڈگری', b: 'کالج college; یونیورسٹی university; اعلیٰ تعلیم higher education; ڈگری degree.' },
      { n: 202, f: 'Applying and funding: داخلہ، وظیفہ، امتحان', b: 'داخلہ admission; وظیفہ scholarship; امتحان exam. Example: میں کالج میں داخلہ لوں گا (I will take admission at college).' },
      { n: 203, f: 'Future plans: use the future tense', b: 'Future ends in گا (masculine) or گی (feminine): میں یونیورسٹی جاؤں گا، میں یونیورسٹی جاؤں گی (I will go to university).' },
      { n: 204, f: 'Would like to: چاہتا ہوں / چاہتی ہوں', b: 'میں اعلیٰ تعلیم حاصل کرنا چاہتا ہوں (I would like to obtain higher education); a girl says چاہتی ہوں. It is a more tentative aspiration than the future tense.' },
      { n: 205, f: 'Conditional about exams: اگر ... تو ...', b: 'اگر میں محنت کروں گا تو کامیاب ہو جاؤں گا (if I work hard, I will succeed). محنت hard work; کامیاب successful.' },
    ]),
    ...sub(T3, 'jobs-career-choices-9264', 'Topic 4', [
      { n: 201, f: 'Professions: ڈاکٹر، انجینئر، استاد، وکیل، نرس', b: 'ڈاکٹر doctor; انجینئر engineer; استاد teacher; وکیل lawyer; نرس nurse.' },
      { n: 202, f: 'Work vocabulary: ملازمت، تنخواہ، کاروبار، تجربہ', b: 'ملازمت job; تنخواہ salary; کاروبار business; تجربہ experience. A part-time job is پارٹ ٹائم نوکری.' },
      { n: 203, f: 'State an ambition with a reason', b: 'میں ڈاکٹر بننا چاہتا ہوں کیونکہ میں لوگوں کی مدد کرنا چاہتا ہوں (I would like to become a doctor because I want to help people). A girl says چاہتی ہوں.' },
      { n: 204, f: 'Why must every career answer have a justification?', b: 'A bare ambition is a list. A reason, such as کیونکہ ... or اس لیے ..., is what separates a strong answer from a weak one.' },
      { n: 205, f: 'Switching from present to future in one answer', b: 'Describe studies in the present (میں سائنس پڑھتا ہوں) then give plans in the future (میں کالج جاؤں گا). Check the verb agrees with the subject through the switch.' },
      { n: 206, f: 'Theme 3 is the only theme built around the future', b: 'Treat future and would-like-to structures as essential vocabulary: plans, ambitions and things not yet true. Use them with comparatives and opinion plus reason.' },
    ]),
  ],
};
