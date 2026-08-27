/**
 * v1.x CLOSURE WS2 -- translated heading/lead copy for the 7 "directory"
 * pages (boards, checklists, levels, programs, resources, subjects,
 * articles). These pages list real, dynamically-generated entries (board
 * names, subject titles, resource titles, etc.) that are themselves
 * untranslated content -- see D-051's scope line, which explicitly defers
 * the 160-row academic hub matrix and collection-item detail pages. The
 * translated directory page therefore renders a real translated heading
 * and explanatory lead around the SAME real data every English directory
 * page reads, with a short, honest note that the linked destination pages
 * are in English -- rather than either faking a fully translated
 * directory or omitting it.
 */
export interface DirectoryCopy {
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  lead: string;
  /** e.g. "The linked pages below are in English." */
  englishNote: string;
  /** Singular/plural count label helpers, e.g. {n} combinations across {m} boards. */
  combinationsLabel: string;
  boardsLabel: string;
  qualificationsLabel: string;
  viewLabel: string;
  notOffered: string;
}

import type { LocaleCode } from '../nav';

export const DIRECTORY_COPY: Record<'boards' | 'checklists' | 'levels' | 'programs' | 'resources' | 'subjects' | 'articles', Record<LocaleCode, DirectoryCopy>> = {
  boards: {
    ar: {
      title: 'مجالس الامتحانات', description: 'Cambridge وPearson Edexcel وAQA وOCR وOxfordAQA والبكالوريا الدولية — الجهات المانحة للمؤهلات التي يدرّسها مارلبريدج.',
      eyebrow: 'المجالس', heading: 'مجالس الامتحانات', lead: 'كل مجلس امتحاني في نموذج مارلبريدج الأكاديمي، وما ننشره لكل منه. لا يُفعَّل الرابط إلا عندما يكون المجلس مُدرَّسًا فعليًا من قِبل مارلبريدج.',
      englishNote: 'الصفحات المرتبطة أدناه بالإنجليزية.', combinationsLabel: 'مجموعة', boardsLabel: 'مجلس', qualificationsLabel: 'مؤهل', viewLabel: 'عرض', notOffered: 'غير متاح حاليًا لدى مارلبريدج.',
    },
    ur: {
      title: 'امتحانی بورڈز', description: 'Cambridge، Pearson Edexcel، AQA، OCR، OxfordAQA اور بین الاقوامی بکلوریٹ — وہ ادارے جن کی قابلیتیں مارل برج پڑھاتا ہے۔',
      eyebrow: 'بورڈز', heading: 'امتحانی بورڈز', lead: 'مارل برج کے تعلیمی ماڈل کا ہر بورڈ، اور ہم اس کے لیے کیا شائع کرتے ہیں۔ بورڈ کا لنک تب ہی فعال ہوتا ہے جب مارل برج واقعی وہ بورڈ پڑھاتا ہو۔',
      englishNote: 'نیچے دیے گئے لنکس انگریزی میں ہیں۔', combinationsLabel: 'مجموعہ', boardsLabel: 'بورڈ', qualificationsLabel: 'قابلیت', viewLabel: 'دیکھیں', notOffered: 'فی الحال مارل برج میں دستیاب نہیں۔',
    },
    bn: {
      title: 'পরীক্ষা বোর্ড', description: 'Cambridge, Pearson Edexcel, AQA, OCR, OxfordAQA এবং আন্তর্জাতিক ব্যাকালরিয়েট — মার্লব্রিজ যেসব বোর্ডের যোগ্যতা পড়ায়।',
      eyebrow: 'বোর্ড', heading: 'পরীক্ষা বোর্ড', lead: 'মার্লব্রিজের একাডেমিক মডেলের প্রতিটি বোর্ড, এবং আমরা প্রতিটির জন্য কী প্রকাশ করি। কোনো বোর্ড তখনই লিংক হয় যখন মার্লব্রিজ প্রকৃতপক্ষে তা পড়ায়।',
      englishNote: 'নিচের লিংকগুলো ইংরেজিতে।', combinationsLabel: 'কম্বিনেশন', boardsLabel: 'বোর্ড', qualificationsLabel: 'যোগ্যতা', viewLabel: 'দেখুন', notOffered: 'বর্তমানে মার্লব্রিজে উপলব্ধ নয়।',
    },
  },
  checklists: {
    ar: { title: 'قوائم مراجعة قابلة للطباعة', description: 'قوائم مراجعة قابلة للطباعة، موضوعًا بموضوع، مأخوذة مباشرة من المنهج الرسمي لكل مجلس ومؤهل ومادة يدرّسها مارلبريدج.', eyebrow: 'قوائم المراجعة', heading: 'قوائم مراجعة قابلة للطباعة', lead: 'كل قائمة مبنية مباشرة على قائمة الموضوعات المنشورة في وثيقة المنهج الرسمية — لا شيء ملخّص أو مُختلَق. افتح القائمة واستخدم خاصية الطباعة في متصفحك.', englishNote: 'الصفحات المرتبطة أدناه بالإنجليزية.', combinationsLabel: 'مجموعة', boardsLabel: 'مجلس', qualificationsLabel: 'مؤهل', viewLabel: 'عرض', notOffered: 'غير متاح.' },
    ur: { title: 'قابل پرنٹ چیک لسٹیں', description: 'ہر بورڈ، قابلیت اور مضمون کے لیے سرکاری نصاب سے براہ راست حاصل کردہ، موضوع بہ موضوع، قابل پرنٹ نظرثانی چیک لسٹیں۔', eyebrow: 'چیک لسٹیں', heading: 'قابل پرنٹ چیک لسٹیں', lead: 'ہر چیک لسٹ سرکاری نصابی دستاویز میں شائع شدہ موضوعات کی فہرست سے براہ راست بنائی گئی ہے — کچھ بھی خلاصہ یا فرضی نہیں۔ چیک لسٹ کھولیں اور اپنے براؤزر کے پرنٹ فنکشن کا استعمال کریں۔', englishNote: 'نیچے دیے گئے لنکس انگریزی میں ہیں۔', combinationsLabel: 'مجموعہ', boardsLabel: 'بورڈ', qualificationsLabel: 'قابلیت', viewLabel: 'دیکھیں', notOffered: 'دستیاب نہیں۔' },
    bn: { title: 'প্রিন্টযোগ্য চেকলিস্ট', description: 'মার্লব্রিজ যে প্রতিটি বোর্ড, যোগ্যতা এবং বিষয় পড়ায় তার সরকারি সিলেবাস থেকে সরাসরি নেওয়া, বিষয়ভিত্তিক প্রিন্টযোগ্য রিভিশন চেকলিস্ট।', eyebrow: 'চেকলিস্ট', heading: 'প্রিন্টযোগ্য চেকলিস্ট', lead: 'প্রতিটি চেকলিস্ট সরাসরি সরকারি সিলেবাস নথিতে প্রকাশিত বিষয়তালিকা থেকে তৈরি — কিছুই সারাংশিত বা কল্পিত নয়। চেকলিস্ট খুলুন এবং আপনার ব্রাউজারের প্রিন্ট ফাংশন ব্যবহার করুন।', englishNote: 'নিচের লিংকগুলো ইংরেজিতে।', combinationsLabel: 'কম্বিনেশন', boardsLabel: 'বোর্ড', qualificationsLabel: 'যোগ্যতা', viewLabel: 'দেখুন', notOffered: 'উপলব্ধ নয়।' },
  },
  levels: {
    ar: { title: 'المؤهلات', description: 'IGCSE وO Level وGCSE وAS Level وA Level وبرنامجا البكالوريا الدولية — كل مجلس ومادة ننشرها لكل مؤهل، في مكان واحد.', eyebrow: 'المؤهلات', heading: 'المؤهلات', lead: 'كل مؤهل يدرّسه مارلبريدج، مع كل مجلس ومادة ننشرها له.', englishNote: 'الصفحات المرتبطة أدناه بالإنجليزية.', combinationsLabel: 'مجموعة', boardsLabel: 'مجلس', qualificationsLabel: 'مؤهل', viewLabel: 'عرض', notOffered: 'غير متاح.' },
    ur: { title: 'قابلیتیں', description: 'IGCSE، او لیول، جی سی ایس ای، اے ایس لیول، اے لیول اور آئی بی کے دونوں پروگرام — ہر قابلیت کے لیے ہم جو بورڈ اور مضمون شائع کرتے ہیں، ایک ہی جگہ۔', eyebrow: 'قابلیتیں', heading: 'قابلیتیں', lead: 'مارل برج جو ہر قابلیت پڑھاتا ہے، اس کے لیے شائع کردہ ہر بورڈ اور مضمون کے ساتھ۔', englishNote: 'نیچے دیے گئے لنکس انگریزی میں ہیں۔', combinationsLabel: 'مجموعہ', boardsLabel: 'بورڈ', qualificationsLabel: 'قابلیت', viewLabel: 'دیکھیں', notOffered: 'دستیاب نہیں۔' },
    bn: { title: 'যোগ্যতাসমূহ', description: 'IGCSE, O Level, GCSE, AS Level, A Level এবং IB-এর দুই প্রোগ্রাম — প্রতিটি যোগ্যতার জন্য আমরা যে বোর্ড ও বিষয় প্রকাশ করি, এক জায়গায়।', eyebrow: 'যোগ্যতাসমূহ', heading: 'যোগ্যতাসমূহ', lead: 'মার্লব্রিজ যে প্রতিটি যোগ্যতা পড়ায়, তার জন্য প্রকাশিত প্রতিটি বোর্ড ও বিষয়সহ।', englishNote: 'নিচের লিংকগুলো ইংরেজিতে।', combinationsLabel: 'কম্বিনেশন', boardsLabel: 'বোর্ড', qualificationsLabel: 'যোগ্যতা', viewLabel: 'দেখুন', notOffered: 'উপলব্ধ নয়।' },
  },
  programs: {
    ar: { title: 'البرامج', description: 'IGCSE وO Level وA Level وGCSE وIB وSAT وIELTS والدعم الأكاديمي لدى مارلبريدج — مع مصادر دراسية منشورة للمواد التي نغطيها.', eyebrow: 'البرامج', heading: 'البرامج في مارلبريدج', lead: 'تدريس مركّز على المؤهل ودعم أكاديمي. توضّح كل صفحة برنامج ما تغطيه ولمن تناسب وما نقدّمه حاليًا.', englishNote: 'صفحات البرامج أدناه بالإنجليزية.', combinationsLabel: 'مجموعة', boardsLabel: 'مجلس', qualificationsLabel: 'مؤهل', viewLabel: 'عرض', notOffered: 'غير متاح.' },
    ur: { title: 'پروگرامز', description: 'مارل برج میں IGCSE، او لیول، اے لیول، جی سی ایس ای، آئی بی، سیٹ، آئی ایلٹس اور تعلیمی معاونت — ان مضامین کے لیے شائع شدہ مطالعاتی مواد کے ساتھ جن کا ہم احاطہ کرتے ہیں۔', eyebrow: 'پروگرامز', heading: 'مارل برج کے پروگرامز', lead: 'قابلیت پر مرکوز تدریس اور تعلیمی معاونت۔ ہر پروگرام صفحہ بتاتا ہے کہ وہ کیا احاطہ کرتا ہے، کس کے لیے موزوں ہے، اور ہم فی الحال کیا پیش کرتے ہیں۔', englishNote: 'نیچے پروگرام صفحات انگریزی میں ہیں۔', combinationsLabel: 'مجموعہ', boardsLabel: 'بورڈ', qualificationsLabel: 'قابلیت', viewLabel: 'دیکھیں', notOffered: 'دستیاب نہیں۔' },
    bn: { title: 'প্রোগ্রাম', description: 'মার্লব্রিজে IGCSE, O Level, A Level, GCSE, IB, SAT, IELTS এবং একাডেমিক সহায়তা — যেসব বিষয় আমরা কভার করি তার জন্য প্রকাশিত পড়াশোনার উপকরণসহ।', eyebrow: 'প্রোগ্রাম', heading: 'মার্লব্রিজের প্রোগ্রামসমূহ', lead: 'যোগ্যতা-কেন্দ্রিক শিক্ষাদান ও একাডেমিক সহায়তা। প্রতিটি প্রোগ্রাম পৃষ্ঠায় বলা আছে এটি কী কভার করে, কার জন্য উপযুক্ত এবং আমরা বর্তমানে কী প্রদান করি।', englishNote: 'নিচের প্রোগ্রাম পৃষ্ঠাগুলো ইংরেজিতে।', combinationsLabel: 'কম্বিনেশন', boardsLabel: 'বোর্ড', qualificationsLabel: 'যোগ্যতা', viewLabel: 'দেখুন', notOffered: 'উপলব্ধ নয়।' },
  },
  resources: {
    ar: { title: 'مصادر التعلّم', description: 'أدلة دراسية وملاحظات مراجعة كتبها متخصصون في المادة. مجانية للقراءة، ومنظّمة حسب المادة والمستوى والموضوع.', eyebrow: 'المصادر', heading: 'مصادر تعليمية متاحة مجانًا', lead: 'مواد دراسية كتبها متخصصون في المادة، منظمة حسب المادة والمستوى والموضوع. مجانية للقراءة، وتُضاف موضوعًا بموضوع.', englishNote: 'المصادر المنشورة أدناه بالإنجليزية.', combinationsLabel: 'مجموعة', boardsLabel: 'مجلس', qualificationsLabel: 'مؤهل', viewLabel: 'عرض', notOffered: 'قيد التطوير.' },
    ur: { title: 'تعلیمی مواد', description: 'مضمون کے ماہرین کے لکھے ہوئے مطالعاتی گائیڈز اور نظرثانی نوٹس۔ پڑھنے کے لیے مفت، اور مضمون، سطح اور موضوع کے مطابق منظم۔', eyebrow: 'مواد', heading: 'کھلے طور پر دستیاب تعلیمی مواد', lead: 'مضمون کے ماہرین کا لکھا ہوا مطالعاتی مواد، مضمون، سطح اور موضوع کے مطابق منظم۔ پڑھنے کے لیے مفت، اور موضوع بہ موضوع شامل کیا جاتا ہے۔', englishNote: 'نیچے شائع شدہ مواد انگریزی میں ہے۔', combinationsLabel: 'مجموعہ', boardsLabel: 'بورڈ', qualificationsLabel: 'قابلیت', viewLabel: 'دیکھیں', notOffered: 'زیرِ تیاری۔' },
    bn: { title: 'শিক্ষা উপকরণ', description: 'বিষয় বিশেষজ্ঞদের লেখা স্টাডি গাইড এবং রিভিশন নোট। পড়ার জন্য বিনামূল্যে, এবং বিষয়, স্তর ও টপিক অনুযায়ী সাজানো।', eyebrow: 'উপকরণ', heading: 'উন্মুক্তভাবে উপলব্ধ শিক্ষা উপকরণ', lead: 'বিষয় বিশেষজ্ঞদের লেখা পড়াশোনার উপকরণ, বিষয়, স্তর ও টপিক অনুযায়ী সাজানো। পড়ার জন্য বিনামূল্যে, এবং টপিক অনুযায়ী যোগ করা হয়।', englishNote: 'নিচের প্রকাশিত উপকরণ ইংরেজিতে।', combinationsLabel: 'কম্বিনেশন', boardsLabel: 'বোর্ড', qualificationsLabel: 'যোগ্যতা', viewLabel: 'দেখুন', notOffered: 'উন্নয়নাধীন।' },
  },
  subjects: {
    ar: { title: 'المواد الدراسية', description: 'الرياضيات والعلوم وعلوم الحاسوب والاقتصاد والمحاسبة وإدارة الأعمال واللغة الإنجليزية واللغات — يجمع كل مركز مادة الموضوعات والأدلة الدراسية ومواد التدريب.', eyebrow: 'المواد', heading: 'المواد التي ندرّسها وننشر لها', lead: 'يجمع كل مركز مادة الموضوعات والأدلة الدراسية ومواد التدريب لتلك المادة في مكان واحد.', englishNote: 'صفحات المواد أدناه بالإنجليزية.', combinationsLabel: 'مجموعة', boardsLabel: 'مجلس', qualificationsLabel: 'مؤهل', viewLabel: 'عرض', notOffered: 'غير متاح.' },
    ur: { title: 'مضامین', description: 'ریاضی، سائنسز، کمپیوٹر سائنس، اکنامکس، اکاؤنٹنگ، بزنس، انگریزی اور زبانیں — ہر مضمون کا مرکز اس مضمون کے موضوعات، مطالعاتی گائیڈز اور مشقی مواد کو یکجا کرتا ہے۔', eyebrow: 'مضامین', heading: 'وہ مضامین جو ہم پڑھاتے اور شائع کرتے ہیں', lead: 'ہر مضمون کا مرکز اس مضمون کے موضوعات، مطالعاتی گائیڈز اور مشقی مواد کو ایک جگہ یکجا کرتا ہے۔', englishNote: 'نیچے مضمون کے صفحات انگریزی میں ہیں۔', combinationsLabel: 'مجموعہ', boardsLabel: 'بورڈ', qualificationsLabel: 'قابلیت', viewLabel: 'دیکھیں', notOffered: 'دستیاب نہیں۔' },
    bn: { title: 'বিষয়সমূহ', description: 'গণিত, বিজ্ঞান, কম্পিউটার সায়েন্স, অর্থনীতি, হিসাববিজ্ঞান, ব্যবসা, ইংরেজি ও ভাষা — প্রতিটি বিষয় হাব সেই বিষয়ের টপিক, স্টাডি গাইড ও অনুশীলন উপকরণ একত্র করে।', eyebrow: 'বিষয়সমূহ', heading: 'আমরা যেসব বিষয় পড়াই ও প্রকাশ করি', lead: 'প্রতিটি বিষয় হাব সেই বিষয়ের টপিক, স্টাডি গাইড ও অনুশীলন উপকরণ এক জায়গায় একত্র করে।', englishNote: 'নিচের বিষয় পৃষ্ঠাগুলো ইংরেজিতে।', combinationsLabel: 'কম্বিনেশন', boardsLabel: 'বোর্ড', qualificationsLabel: 'যোগ্যতা', viewLabel: 'দেখুন', notOffered: 'উপলব্ধ নয়।' },
  },
  articles: {
    ar: { title: 'مجلة التعلّم', description: 'إرشادات حول الامتحانات وأسلوب الدراسة واختيار المناهج والتعليم العالي، بقلم من يقومون بالتدريس فعليًا.', eyebrow: 'مجلة التعلّم', heading: 'كتابة للمتعلمين وأولياء الأمور والمعلمين', lead: 'إرشادات حول الامتحانات وأسلوب الدراسة واختيار المناهج والتعليم العالي — بقلم من يقومون بالتدريس فعليًا.', englishNote: 'المقالات أدناه بالإنجليزية.', combinationsLabel: 'مجموعة', boardsLabel: 'مجلس', qualificationsLabel: 'مؤهل', viewLabel: 'عرض', notOffered: 'لا توجد مقالات منشورة بعد.' },
    ur: { title: 'لرننگ جرنل', description: 'امتحانات، مطالعے کے طریقہ کار، نصاب کے انتخاب اور اعلیٰ تعلیم پر رہنمائی، ان لوگوں کے قلم سے جو خود پڑھاتے ہیں۔', eyebrow: 'لرننگ جرنل', heading: 'طلبہ، والدین اور اساتذہ کے لیے تحریریں', lead: 'امتحانات، مطالعے کے طریقہ کار، نصاب کے انتخاب اور اعلیٰ تعلیم پر رہنمائی — ان لوگوں کے قلم سے جو خود پڑھاتے ہیں۔', englishNote: 'نیچے مضامین انگریزی میں ہیں۔', combinationsLabel: 'مجموعہ', boardsLabel: 'بورڈ', qualificationsLabel: 'قابلیت', viewLabel: 'دیکھیں', notOffered: 'ابھی تک کوئی مضمون شائع نہیں ہوا۔' },
    bn: { title: 'লার্নিং জার্নাল', description: 'পরীক্ষা, পড়াশোনার পদ্ধতি, কারিকুলাম নির্বাচন এবং উচ্চশিক্ষা নিয়ে দিকনির্দেশনা, যারা প্রকৃতপক্ষে পড়ান তাদের লেখা।', eyebrow: 'লার্নিং জার্নাল', heading: 'শিক্ষার্থী, অভিভাবক ও শিক্ষকদের জন্য লেখা', lead: 'পরীক্ষা, পড়াশোনার পদ্ধতি, কারিকুলাম নির্বাচন এবং উচ্চশিক্ষা নিয়ে দিকনির্দেশনা — যারা প্রকৃতপক্ষে পড়ান তাদের লেখা।', englishNote: 'নিচের নিবন্ধগুলো ইংরেজিতে।', combinationsLabel: 'কম্বিনেশন', boardsLabel: 'বোর্ড', qualificationsLabel: 'যোগ্যতা', viewLabel: 'দেখুন', notOffered: 'এখনো কোনো নিবন্ধ প্রকাশিত হয়নি।' },
  },
};
