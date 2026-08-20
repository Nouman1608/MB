/**
 * v1.x CLOSURE WS5 -- translated copy for the /ar/, /ur/, /bn/ commercial
 * landing pages.
 *
 * Scope: this is a single translated landing page per locale (hero, three
 * pillars, the published pricing table from src/data/pricing.ts, and a
 * contact section) -- not a full parallel translation of every page on the
 * site. Building translated versions of every dynamic academic/resource
 * page would mean translating hundreds of subject/board/programme records
 * that do not have a translation layer, which risks exactly the kind of
 * uncontrolled rebuild the standing "do not rebuild the site" rule exists
 * to prevent. A single, real, correctly-linked commercial landing page per
 * language is the scoped, honest v1.x deliverable.
 *
 * METHOD: translations were produced by Claude (AI-assisted), not by a
 * professional translator or a native-speaking member of the Marlbridge
 * team. This matches the explicitly approved v1.x CLOSURE decision:
 * "AI-assisted, flag for your review." Every locale page renders a visible
 * banner saying so and asking visitors to use the English site/contact
 * form if anything is unclear. This flag should be removed only once an
 * owner or native speaker has reviewed the copy for accuracy and tone.
 */
import { REGION_PRICING, formatFee, feeFor } from '../data/pricing';

export type LocaleCode = 'ar' | 'ur' | 'bn';

export interface LocaleCopy {
  htmlLang: string;
  dir: 'rtl' | 'ltr';
  title: string;
  description: string;
  reviewBanner: string;
  eyebrow: string;
  h1: string;
  subhead: string;
  ctaContact: string;
  pillars: readonly { title: string; body: string }[];
  pricingHeading: string;
  pricingNote: string;
  tableHeaders: { region: string; currency: string; igcse: string; aLevel: string };
  termsNote: string;
  contactHeading: string;
  contactBody: string;
  contactButton: string;
  englishSiteLink: string;
}

export const LOCALE_COPY: Record<LocaleCode, LocaleCopy> = {
  ar: {
    htmlLang: 'ar', dir: 'rtl',
    title: 'مارلبريدج — دروس خصوصية دولية',
    description: 'دروس خصوصية دولية لطلاب IGCSE وO Level وGCSE وA Level وفق مناهج Cambridge وEdexcel وAQA وOCR وOxfordAQA.',
    reviewBanner: 'تمت ترجمة هذه الصفحة بمساعدة الذكاء الاصطناعي وهي في انتظار مراجعة فريق مارلبريدج. إذا كان هناك ما يحتاج إلى توضيح، يُرجى التواصل معنا باللغة الإنجليزية.',
    eyebrow: 'مارلبريدج',
    h1: 'دروس خصوصية دولية لطلاب Cambridge وEdexcel وAQA وOCR وOxfordAQA',
    subhead: 'دروس فردية وفي مجموعات صغيرة لطلاب IGCSE وO Level وGCSE وA Level، يقدّمها متخصصون في المادة يدرّسون وفق المنهج الدقيق الذي يحدده مجلس الامتحانات الخاص بك.',
    ctaContact: 'التواصل معنا (بالإنجليزية)',
    pillars: [
      { title: 'تدريس خاص بكل مجلس امتحاني', body: 'يُخطَّط كل درس وفق رمز المنهج الدقيق الخاص بك، وليس منهجًا عامًا.' },
      { title: 'متخصصون مؤهلون في المادة', body: 'يتم اختيار المعلمين بما يتوافق مع مجلسك ومؤهلك ومادتك الدراسية.' },
      { title: 'أسعار شفافة', body: 'اطّلع على الرسوم الشهرية الدقيقة لمنطقتك أدناه — دون أي تكاليف خفية.' },
    ],
    pricingHeading: 'الأسعار',
    pricingNote: 'الأسعار معروضة بعملة منطقتك، لكل مادة شهريًا.',
    tableHeaders: { region: 'المنطقة', currency: 'العملة', igcse: 'IGCSE', aLevel: 'A Level' },
    termsNote: 'الدرس التجريبي الأول مجاني. تُطبَّق خصومات عند تسجيل ثلاث مواد أو أكثر، وكذلك للأشقاء المسجَّلين معًا.',
    contactHeading: 'هل أنتم مستعدون للبدء؟',
    contactBody: 'أخبرونا بما تحتاجونه وسنرد عليكم عبر البريد الإلكتروني خلال يوم عمل واحد. نموذج الاستفسار متاح حاليًا باللغة الإنجليزية فقط.',
    contactButton: 'الانتقال إلى نموذج الاستفسار',
    englishSiteLink: 'عرض الموقع الكامل بالإنجليزية',
  },
  ur: {
    htmlLang: 'ur', dir: 'rtl',
    title: 'مارل برج — بین الاقوامی ٹیوشن',
    description: 'Cambridge، Edexcel، AQA، OCR اور OxfordAQA کے تحت IGCSE، O Level، GCSE اور A Level طلبہ کے لیے بین الاقوامی ٹیوشن۔',
    reviewBanner: 'اس صفحے کا ترجمہ AI کی مدد سے کیا گیا ہے اور یہ مارل برج ٹیم کے جائزے کا منتظر ہے۔ اگر کچھ واضح نہ ہو تو براہ کرم ہم سے انگریزی میں رابطہ کریں۔',
    eyebrow: 'مارل برج',
    h1: 'کیمبرج، ایڈیکسل، اے کیو اے، او سی آر اور آکسفورڈ اے کیو اے کے طلبہ کے لیے بین الاقوامی ٹیوشن',
    subhead: 'IGCSE، او لیول، جی سی ایس ای اور اے لیول طلبہ کے لیے انفرادی اور چھوٹے گروپ کی ٹیوشن، جو مضمون کے ماہر اساتذہ آپ کے امتحانی بورڈ کے مقرر کردہ عین نصاب کے مطابق پڑھاتے ہیں۔',
    ctaContact: 'انگریزی میں رابطہ کریں',
    pillars: [
      { title: 'بورڈ کے مطابق تدریس', body: 'ہر سبق آپ کے عین سلیبس کوڈ کے مطابق ترتیب دیا جاتا ہے، عمومی نصاب کے مطابق نہیں۔' },
      { title: 'تجربہ کار مضمون کے ماہرین', body: 'اساتذہ کو آپ کے بورڈ، قابلیت اور مضمون کے مطابق منتخب کیا جاتا ہے۔' },
      { title: 'شفاف فیس', body: 'نیچے اپنے علاقے کی درست ماہانہ فیس دیکھیں — کوئی چھپی ہوئی لاگت نہیں۔' },
    ],
    pricingHeading: 'فیس',
    pricingNote: 'فیس آپ کے علاقے کی کرنسی میں، فی مضمون فی ماہ دکھائی گئی ہے۔',
    tableHeaders: { region: 'علاقہ', currency: 'کرنسی', igcse: 'IGCSE', aLevel: 'اے لیول' },
    termsNote: 'پہلا ٹرائل سبق مفت ہے۔ تین یا زیادہ مضامین اور اکٹھے داخلہ لینے والے بہن بھائیوں کے لیے رعایت دی جاتی ہے۔',
    contactHeading: 'شروع کرنے کے لیے تیار ہیں؟',
    contactBody: 'ہمیں بتائیں کہ آپ کو کیا چاہیے، ہم ایک کاروباری دن کے اندر ای میل کے ذریعے جواب دیں گے۔ ہمارا استفسار فارم فی الحال صرف انگریزی میں دستیاب ہے۔',
    contactButton: 'استفسار فارم پر جائیں',
    englishSiteLink: 'مکمل ویب سائٹ انگریزی میں دیکھیں',
  },
  bn: {
    htmlLang: 'bn', dir: 'ltr',
    title: 'মার্লব্রিজ — আন্তর্জাতিক টিউটরিং',
    description: 'Cambridge, Edexcel, AQA, OCR এবং OxfordAQA-এর অধীনে IGCSE, O Level, GCSE এবং A Level শিক্ষার্থীদের জন্য আন্তর্জাতিক টিউটরিং।',
    reviewBanner: 'এই পৃষ্ঠাটি AI-সহায়তায় অনুবাদ করা হয়েছে এবং মার্লব্রিজ টিমের পর্যালোচনার অপেক্ষায় রয়েছে। কিছু অস্পষ্ট মনে হলে অনুগ্রহ করে ইংরেজিতে আমাদের সাথে যোগাযোগ করুন।',
    eyebrow: 'মার্লব্রিজ',
    h1: 'কেমব্রিজ, এডেক্সেল, একিউএ, ওসিআর এবং অক্সফোর্ডএকিউএ শিক্ষার্থীদের জন্য আন্তর্জাতিক টিউটরিং',
    subhead: 'IGCSE, O Level, GCSE এবং A Level শিক্ষার্থীদের জন্য একক ও ছোট গ্রুপে টিউটরিং, যা বিষয়ভিত্তিক বিশেষজ্ঞ শিক্ষকরা আপনার পরীক্ষা বোর্ডের নির্ধারিত সঠিক সিলেবাস অনুযায়ী পড়ান।',
    ctaContact: 'ইংরেজিতে যোগাযোগ করুন',
    pillars: [
      { title: 'বোর্ড-নির্দিষ্ট পাঠদান', body: 'প্রতিটি পাঠ আপনার সঠিক সিলেবাস কোড অনুযায়ী পরিকল্পনা করা হয়, সাধারণ পাঠ্যক্রম অনুযায়ী নয়।' },
      { title: 'যোগ্য বিষয় বিশেষজ্ঞ', body: 'শিক্ষকদের আপনার বোর্ড, যোগ্যতা এবং বিষয় অনুযায়ী মিলিয়ে দেওয়া হয়।' },
      { title: 'স্বচ্ছ মূল্য', body: 'নিচে আপনার অঞ্চলের সঠিক মাসিক ফি দেখুন — কোনো লুকানো খরচ নেই।' },
    ],
    pricingHeading: 'মূল্য',
    pricingNote: 'প্রতি বিষয়ে প্রতি মাসে, আপনার অঞ্চলের মুদ্রায় ফি দেখানো হয়েছে।',
    tableHeaders: { region: 'অঞ্চল', currency: 'মুদ্রা', igcse: 'IGCSE', aLevel: 'A Level' },
    termsNote: 'প্রথম ট্রায়াল ক্লাসটি বিনামূল্যে। তিন বা তার বেশি বিষয় এবং একসঙ্গে ভর্তি হওয়া ভাইবোনদের জন্য ছাড় প্রযোজ্য।',
    contactHeading: 'শুরু করতে প্রস্তুত?',
    contactBody: 'আপনার প্রয়োজন আমাদের জানান, আমরা এক কার্যদিবসের মধ্যে ইমেইলে উত্তর দেব। আমাদের অনুসন্ধান ফর্মটি বর্তমানে শুধুমাত্র ইংরেজিতে উপলব্ধ।',
    contactButton: 'অনুসন্ধান ফর্মে যান',
    englishSiteLink: 'সম্পূর্ণ ওয়েবসাইট ইংরেজিতে দেখুন',
  },
};

/** Pricing rows shared by all three locale pages -- reads only from the verified pricing data, never re-states numbers. */
export const pricingRows = REGION_PRICING.map((r) => ({
  region: r.region,
  currency: r.currency,
  igcse: `${r.symbol} ${formatFee(feeFor(r, 'igcse'), r.currency)}`,
  aLevel: `${r.symbol} ${formatFee(feeFor(r, 'a-level'), r.currency)}`,
}));
