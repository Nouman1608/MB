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
 *
 * Post-v2.0 Quality Closure WS4 (2026-08-30): `contactBody` previously
 * stated the enquiry form was "currently available only in English", and
 * both contact CTAs on this page hard-linked to the English /contact/
 * route. Both claims went stale once a later closure workstream shipped a
 * fully translated EnquiryForm (labels/hints/errors, via
 * NAV_COPY[locale].form) on the real /ar/, /ur/, /bn/ /contact/ and
 * /trial/ pages -- this file's copy was never updated to match. Fixed:
 * the false "English only" sentence is removed from contactBody, and the
 * homepage's CTAs now link to the localized contact page instead of the
 * English one (see src/pages/ar|ur|bn/index.astro). See D-086.
 *
 * Flagship Dominance/Trust programme (2026-08-31): this page previously
 * said nothing at all about where/how teaching is delivered, while the
 * same-language About page (src/i18n/pages/marketing.ts) states plainly
 * that in-person teaching happens only from the Pakistan academy and
 * everywhere else is online -- a visitor going home -> About in the same
 * language saw that fact appear with no lead-in. Added `locationNote`,
 * a short, honest, one-sentence version of the exact same model already
 * used on the English homepage/About page (in person from Pakistan,
 * online elsewhere) -- no new facts, no address/office claim, just
 * bringing this page in line with what the rest of the site already
 * says. Same AI-assisted-translation caveat as the rest of this file.
 */
import { REGION_PRICING, formatFee, feeFor, isIndicative, type PriceStatus } from '../data/pricing';

export type LocaleCode = 'ar' | 'ur' | 'bn';

/**
 * Audit round 3 (item 17, 25 Nov 2026) -- the region names in the fee tables
 * (REGION_PRICING, ONE_TO_ONE_PRICING, IB_PRICING in src/data/pricing.ts)
 * rendered in English on every translated page. These are the same names in
 * each page's language. Pakistan, the UK and Europe reuse the spellings
 * already used in src/i18n (copy.ts, legal.ts, marketing.ts); the other
 * names are new AI-assisted translations, listed for native review in
 * reports/audit3/A2.md. A region missing here falls back to its English
 * name, so a new pricing row can never render blank.
 */
export const REGION_NAMES: Record<LocaleCode, Readonly<Record<string, string>>> = {
  ar: {
    'Pakistan': 'باكستان',
    'Saudi Arabia': 'المملكة العربية السعودية',
    'United Arab Emirates': 'الإمارات العربية المتحدة',
    'Qatar': 'قطر',
    'Kuwait': 'الكويت',
    'Bahrain': 'البحرين',
    'Oman': 'عُمان',
    'United Kingdom': 'المملكة المتحدة',
    'Europe': 'أوروبا',
    'Malaysia': 'ماليزيا',
    'Singapore': 'سنغافورة',
    'Other countries': 'دول أخرى',
  },
  ur: {
    'Pakistan': 'پاکستان',
    'Saudi Arabia': 'سعودی عرب',
    'United Arab Emirates': 'متحدہ عرب امارات',
    'Qatar': 'قطر',
    'Kuwait': 'کویت',
    'Bahrain': 'بحرین',
    'Oman': 'عمان',
    'United Kingdom': 'برطانیہ',
    'Europe': 'یورپ',
    'Malaysia': 'ملائیشیا',
    'Singapore': 'سنگاپور',
    'Other countries': 'دیگر ممالک',
  },
  bn: {
    'Pakistan': 'পাকিস্তান',
    'Saudi Arabia': 'সৌদি আরব',
    'United Arab Emirates': 'সংযুক্ত আরব আমিরাত',
    'Qatar': 'কাতার',
    'Kuwait': 'কুয়েত',
    'Bahrain': 'বাহরাইন',
    'Oman': 'ওমান',
    'United Kingdom': 'যুক্তরাজ্য',
    'Europe': 'ইউরোপ',
    'Malaysia': 'মালয়েশিয়া',
    'Singapore': 'সিঙ্গাপুর',
    'Other countries': 'অন্যান্য দেশ',
  },
};
export const regionName = (locale: LocaleCode, region: string): string => REGION_NAMES[locale][region] ?? region;

/**
 * D4 (owner, audit round 3) -- the fee-tier column headings of the
 * translated pricing tables (home and /pricing/), and from them the list of
 * qualifications that have a price there. The Arabic home hero names only
 * these, so it can never name a qualification the table gives no fee for.
 * A tier counts only if REGION_PRICING actually carries an amount for it.
 * The headings are the Latin qualification names every translated page
 * already uses; they are not translations.
 */
export const TIER_COLUMN_LABEL = { igcse: 'IGCSE/GCSE/O Level', aLevel: 'AS/A Level' } as const;
export const PRICED_QUALIFICATIONS: readonly string[] = (Object.keys(TIER_COLUMN_LABEL) as (keyof typeof TIER_COLUMN_LABEL)[])
  .filter((tier) => REGION_PRICING.some((r) => Number.isFinite(r[tier])))
  .flatMap((tier) => TIER_COLUMN_LABEL[tier].split('/'));

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
  locationNote: string;
  pricingHeading: string;
  pricingNote: string;
  tableHeaders: { region: string; currency: string; igcse: string; aLevel: string; status: string };
  termsNote: string;
  /** D-297 -- explains indicative (converted) rows. D-517: no asterisk; every row carries its status. */
  indicativeNote: string;
  /** D-517 -- the two status labels, as PRICE_STATUS_LABEL in src/data/pricing.ts. */
  statusLabel: Record<PriceStatus, string>;
  /** D-517 -- what the two labels mean for a parent (PRICE_STATUS_EXPLAINER). */
  statusExplainer: string;
  contactHeading: string;
  contactBody: string;
  contactButton: string;
  englishSiteLink: string;
  /** Audit 3 item 17 -- PRICING_TERMS.unsupportedRegionNote in this language
   * (it rendered in English). Keep in step with the English sentence. */
  unsupportedRegionNote: string;
  /** D3 (owner, audit round 3) -- Bengali only: no taka row; Bangladesh
   * families pay the "Other countries (US dollars)" rate. */
  bangladeshNote?: string;
}

export const LOCALE_COPY: Record<LocaleCode, LocaleCopy> = {
  ar: {
    htmlLang: 'ar', dir: 'rtl',
    title: 'مارلبريدج — دروس خصوصية دولية',
    description: 'دروس خصوصية دولية لطلاب IGCSE وO Level وGCSE وA Level وفق مناهج Cambridge وEdexcel وAQA وOCR وOxfordAQA.',
    reviewBanner: 'تمت ترجمة هذه الصفحة بمساعدة الذكاء الاصطناعي وهي في انتظار مراجعة فريق مارلبريدج. إذا كان هناك ما يحتاج إلى توضيح، يُرجى التواصل معنا باللغة الإنجليزية.',
    eyebrow: 'مارلبريدج',
    h1: 'دروس خصوصية دولية لطلاب Cambridge وEdexcel وAQA وOCR وOxfordAQA',
    // D4 -- the qualifications named here are the ones the pricing table prices (PRICED_QUALIFICATIONS).
    subhead: `دروس فردية وفي مجموعات صغيرة لطلاب ${PRICED_QUALIFICATIONS.join(' و')}، يقدّمها متخصصون في المادة يدرّسون وفق المنهج الدقيق الذي يحدده مجلس الامتحانات الخاص بك.`,
    ctaContact: 'تواصل معنا',
    pillars: [
      { title: 'تدريس خاص بكل مجلس امتحاني', body: 'يُخطَّط كل درس وفق رمز المنهج الدقيق الخاص بك، وليس منهجًا عامًا.' },
      { title: 'متخصصون ذوو خبرة في المادة', body: 'يتم اختيار المعلمين بما يتوافق مع مجلسك ومؤهلك ومادتك الدراسية.' },
      { title: 'أسعار شفافة', body: 'اطّلع على الرسوم الشهرية الدقيقة لمنطقتك أدناه — دون أي تكاليف خفية.' },
    ],
    locationNote: 'تُقام الدروس الحضورية فقط من أكاديميتنا في باكستان؛ وفي أي مكان آخر، نقدّم التدريس مباشرة عبر الإنترنت.',
    pricingHeading: 'الأسعار',
    pricingNote: 'أسعار الدروس الجماعية معروضة بعملة منطقتك، لكل مادة شهريًا. أما الدروس الفردية وتدريس IB فتُحتسب لكل درس (راجع صفحة الأسعار).',
    tableHeaders: { region: 'المنطقة', currency: 'العملة', igcse: TIER_COLUMN_LABEL.igcse, aLevel: TIER_COLUMN_LABEL.aLevel, status: 'الحالة' },
    termsNote: 'الدرس التجريبي الأول مجاني. تُطبَّق على الدروس الجماعية خصومات عند تسجيل ثلاث مواد أو أكثر، وكذلك للأشقاء المسجَّلين معًا.',
    indicativeNote: 'تقديري: مبلغ استرشادي بعملتك، محوَّل من رسوم باكستان. قد يختلف مبلغ فاتورتك قليلًا بحسب سعر الصرف، ويُؤكَّد الرسم الدقيق كتابيًا قبل أي دفع.',
    statusLabel: { confirmed: 'يحدده مارلبريدج', indicative: 'تقديري' },
    statusExplainer: '«يحدده مارلبريدج» تعني أن الرسم ثابت بتلك العملة، وهو المبلغ الذي تُصدَر به فاتورتك. «تقديري» تعني أن المبلغ استرشادي بعملتك، محوَّل من رسم محدد؛ وقد يختلف مبلغ فاتورتك قليلًا بحسب سعر الصرف.',
    contactHeading: 'هل أنتم مستعدون للبدء؟',
    contactBody: 'أخبرونا بما تحتاجونه وسنرد عليكم عبر واتساب خلال ساعة (من 8 صباحًا حتى 11 مساءً بتوقيت باكستان، كل يوم)، وعبر البريد الإلكتروني في اليوم نفسه.',
    contactButton: 'الانتقال إلى نموذج الاستفسار',
    englishSiteLink: 'عرض الموقع الكامل بالإنجليزية',
    unsupportedRegionNote: `تُطبَّق أسعار الدولار الأمريكي («${REGION_NAMES.ar['Other countries']}») على الأسر في الدول غير المدرجة في الجدول بصف خاص بها. رسوم الدروس الجماعية بالدولار الأمريكي تقديرية، محوَّلة من رسوم باكستان؛ أما أسعار الدروس الفردية وIB وAP وOCR بالدولار الأمريكي فيحددها مارلبريدج. يُؤكَّد الرسم الدقيق كتابيًا قبل أي دفع.`,
  },
  ur: {
    htmlLang: 'ur', dir: 'rtl',
    title: 'مارل برج — بین الاقوامی ٹیوشن',
    description: 'Cambridge، Edexcel، AQA، OCR اور OxfordAQA کے تحت IGCSE، O Level، GCSE اور A Level طلبہ کے لیے بین الاقوامی ٹیوشن۔',
    reviewBanner: 'اس صفحے کا ترجمہ AI کی مدد سے کیا گیا ہے اور یہ مارل برج ٹیم کے جائزے کا منتظر ہے۔ اگر کچھ واضح نہ ہو تو براہ کرم ہم سے انگریزی میں رابطہ کریں۔',
    eyebrow: 'مارل برج',
    h1: 'کیمبرج، ایڈیکسل، اے کیو اے، او سی آر اور آکسفورڈ اے کیو اے کے طلبہ کے لیے بین الاقوامی ٹیوشن',
    subhead: 'IGCSE، او لیول، جی سی ایس ای اور اے لیول طلبہ کے لیے انفرادی اور چھوٹے گروپ کی ٹیوشن، جو مضمون کے ماہر اساتذہ آپ کے امتحانی بورڈ کے مقرر کردہ عین نصاب کے مطابق پڑھاتے ہیں۔',
    ctaContact: 'ہم سے رابطہ کریں',
    pillars: [
      { title: 'بورڈ کے مطابق تدریس', body: 'ہر سبق آپ کے عین سلیبس کوڈ کے مطابق ترتیب دیا جاتا ہے، عمومی نصاب کے مطابق نہیں۔' },
      { title: 'تجربہ کار مضمون کے ماہرین', body: 'اساتذہ کو آپ کے بورڈ، قابلیت اور مضمون کے مطابق منتخب کیا جاتا ہے۔' },
      { title: 'شفاف فیس', body: 'نیچے اپنے علاقے کی درست ماہانہ فیس دیکھیں — کوئی چھپی ہوئی لاگت نہیں۔' },
    ],
    locationNote: 'کلاس روم میں حاضری کے ساتھ تدریس صرف پاکستان میں ہماری اکیڈمی سے کی جاتی ہے؛ باقی ہر جگہ ہم براہِ راست آن لائن پڑھاتے ہیں۔',
    pricingHeading: 'فیس',
    pricingNote: 'گروپ کلاسوں کی فیس آپ کے علاقے کی کرنسی میں، فی مضمون فی ماہ دکھائی گئی ہے۔ انفرادی کلاسوں اور آئی بی کی تدریس کی فیس فی کلاس ہے (فیس کا صفحہ دیکھیں)۔',
    tableHeaders: { region: 'علاقہ', currency: 'کرنسی', igcse: TIER_COLUMN_LABEL.igcse, aLevel: TIER_COLUMN_LABEL.aLevel, status: 'حیثیت' },
    termsNote: 'پہلا ٹرائل سبق مفت ہے۔ گروپ کلاسوں میں تین یا زیادہ مضامین اور اکٹھے داخلہ لینے والے بہن بھائیوں کے لیے رعایت دی جاتی ہے۔',
    indicativeNote: 'تخمینی: آپ کی کرنسی میں ایک اندازہ، جو پاکستان کی فیس سے تبدیل کیا گیا ہے۔ شرحِ تبادلہ کے مطابق آپ کے بل کی رقم کچھ مختلف ہو سکتی ہے، اور کسی بھی ادائیگی سے پہلے درست فیس کی تحریری تصدیق کی جاتی ہے۔',
    statusLabel: { confirmed: 'مارل برج کی مقرر کردہ', indicative: 'تخمینی' },
    statusExplainer: '"مارل برج کی مقرر کردہ" کا مطلب ہے کہ فیس اسی کرنسی میں طے ہے، اور آپ کا بل اسی رقم کا بنتا ہے۔ "تخمینی" کا مطلب ہے کہ یہ رقم آپ کی کرنسی میں ایک اندازہ ہے، جو مقرر کردہ فیس سے تبدیل کی گئی ہے؛ شرحِ تبادلہ کے مطابق آپ کے بل کی رقم کچھ مختلف ہو سکتی ہے۔',
    contactHeading: 'شروع کرنے کے لیے تیار ہیں؟',
    contactBody: 'ہمیں بتائیں کہ آپ کو کیا چاہیے، ہم واٹس ایپ پر ایک گھنٹے کے اندر (پاکستانی وقت کے مطابق روزانہ صبح 8 سے رات 11 بجے تک) اور ای میل پر اسی دن جواب دیں گے۔',
    contactButton: 'استفسار فارم پر جائیں',
    englishSiteLink: 'مکمل ویب سائٹ انگریزی میں دیکھیں',
    unsupportedRegionNote: `جو ممالک جدول میں الگ سے درج نہیں، وہاں کے خاندانوں پر امریکی ڈالر کی فیس («${REGION_NAMES.ur['Other countries']}») لاگو ہوتی ہے۔ امریکی ڈالر میں گروپ فیس تخمینی ہے، جو پاکستان کی فیس سے تبدیل کی گئی ہے؛ امریکی ڈالر میں انفرادی کلاس، آئی بی، AP اور OCR کی فیس مارل برج کی مقرر کردہ ہے۔ کسی بھی ادائیگی سے پہلے درست فیس کی تحریری تصدیق کی جاتی ہے۔`,
  },
  bn: {
    htmlLang: 'bn', dir: 'ltr',
    title: 'মার্লব্রিজ — আন্তর্জাতিক টিউটরিং',
    description: 'Cambridge, Edexcel, AQA, OCR এবং OxfordAQA-এর অধীনে IGCSE, O Level, GCSE এবং A Level শিক্ষার্থীদের জন্য আন্তর্জাতিক টিউটরিং।',
    reviewBanner: 'এই পৃষ্ঠাটি AI-সহায়তায় অনুবাদ করা হয়েছে এবং মার্লব্রিজ টিমের পর্যালোচনার অপেক্ষায় রয়েছে। কিছু অস্পষ্ট মনে হলে অনুগ্রহ করে ইংরেজিতে আমাদের সাথে যোগাযোগ করুন।',
    eyebrow: 'মার্লব্রিজ',
    h1: 'কেমব্রিজ, এডেক্সেল, একিউএ, ওসিআর এবং অক্সফোর্ডএকিউএ শিক্ষার্থীদের জন্য আন্তর্জাতিক টিউটরিং',
    subhead: 'IGCSE, O Level, GCSE এবং A Level শিক্ষার্থীদের জন্য একক ও ছোট গ্রুপে টিউটরিং, যা বিষয়ভিত্তিক বিশেষজ্ঞ শিক্ষকরা আপনার পরীক্ষা বোর্ডের নির্ধারিত সঠিক সিলেবাস অনুযায়ী পড়ান।',
    ctaContact: 'আমাদের সাথে যোগাযোগ করুন',
    pillars: [
      { title: 'বোর্ড-নির্দিষ্ট পাঠদান', body: 'প্রতিটি পাঠ আপনার সঠিক সিলেবাস কোড অনুযায়ী পরিকল্পনা করা হয়, সাধারণ পাঠ্যক্রম অনুযায়ী নয়।' },
      { title: 'অভিজ্ঞ বিষয় বিশেষজ্ঞ', body: 'শিক্ষকদের আপনার বোর্ড, যোগ্যতা এবং বিষয় অনুযায়ী মিলিয়ে দেওয়া হয়।' },
      { title: 'স্বচ্ছ মূল্য', body: 'নিচে আপনার অঞ্চলের সঠিক মাসিক ফি দেখুন — কোনো লুকানো খরচ নেই।' },
    ],
    locationNote: 'সশরীরে ক্লাস কেবল পাকিস্তানে আমাদের একাডেমি থেকে পড়ানো হয়; অন্য সব জায়গায় আমরা সরাসরি অনলাইনে পড়াই।',
    pricingHeading: 'মূল্য',
    pricingNote: 'গ্রুপ ক্লাসের ফি প্রতি বিষয়ে প্রতি মাসে, আপনার অঞ্চলের মুদ্রায় দেখানো হয়েছে। একক ক্লাস ও IB টিউশনের ফি প্রতি ক্লাসে (মূল্য পৃষ্ঠা দেখুন)।',
    tableHeaders: { region: 'অঞ্চল', currency: 'মুদ্রা', igcse: TIER_COLUMN_LABEL.igcse, aLevel: TIER_COLUMN_LABEL.aLevel, status: 'অবস্থা' },
    termsNote: 'প্রথম ট্রায়াল ক্লাসটি বিনামূল্যে। গ্রুপ ক্লাসে তিন বা তার বেশি বিষয় এবং একসঙ্গে ভর্তি হওয়া ভাইবোনদের জন্য ছাড় প্রযোজ্য।',
    indicativeNote: 'আনুমানিক: আপনার মুদ্রায় একটি ধারণা, যা পাকিস্তানের ফি থেকে রূপান্তরিত। বিনিময় হার অনুযায়ী আপনার ইনভয়েসের অঙ্ক সামান্য ভিন্ন হতে পারে, এবং কোনো অর্থপ্রদানের আগে সঠিক ফি লিখিতভাবে নিশ্চিত করা হয়।',
    statusLabel: { confirmed: 'মার্লব্রিজ নির্ধারিত', indicative: 'আনুমানিক' },
    statusExplainer: '"মার্লব্রিজ নির্ধারিত" মানে ফি ওই মুদ্রাতেই স্থির, এবং আপনার ইনভয়েস সেই অঙ্কেই হয়। "আনুমানিক" মানে অঙ্কটি আপনার মুদ্রায় একটি ধারণা, যা নির্ধারিত ফি থেকে রূপান্তরিত; বিনিময় হার অনুযায়ী আপনার ইনভয়েসের অঙ্ক সামান্য ভিন্ন হতে পারে।',
    contactHeading: 'শুরু করতে প্রস্তুত?',
    contactBody: 'আপনার প্রয়োজন আমাদের জানান, আমরা WhatsApp-এ এক ঘণ্টার মধ্যে (প্রতিদিন, পাকিস্তান সময় সকাল ৮টা থেকে রাত ১১টা) এবং ইমেইলে একই দিনে উত্তর দেব।',
    // Audit 3 item 18 -- was 'অনুসন্ধান ফর্মে যান', which reads as "go to the search form" (অনুসন্ধান is also the
    // nav label for search). The button opens the contact page; 'যোগাযোগ ফর্ম' is the term legal.ts already uses.
    contactButton: 'যোগাযোগ ফর্মে যান',
    englishSiteLink: 'সম্পূর্ণ ওয়েবসাইট ইংরেজিতে দেখুন',
    unsupportedRegionNote: `যেসব দেশ টেবিলে আলাদাভাবে তালিকায় নেই, সেসব দেশের পরিবারের জন্য মার্কিন ডলারের ফি ("${REGION_NAMES.bn['Other countries']}") প্রযোজ্য। মার্কিন ডলারে গ্রুপ ফি আনুমানিক, যা পাকিস্তানের ফি থেকে রূপান্তরিত; মার্কিন ডলারে একক ক্লাস, IB, AP ও OCR-এর ফি মার্লব্রিজ নির্ধারিত। কোনো অর্থপ্রদানের আগে সঠিক ফি লিখিতভাবে নিশ্চিত করা হয়।`,
    bangladeshNote: `বাংলাদেশের পরিবারগুলো "${REGION_NAMES.bn['Other countries']} (মার্কিন ডলার)" হারে ফি দেয়।`,
  },
};

/** Pricing rows shared by all three locale pages -- reads only from the verified pricing data, never re-states numbers. */
// D-297 -- amounts only: the table already has a currency column, so the
// symbol is not repeated in the cell ("SAR 270" next to "SAR" read twice).
// D-517 -- every row carries its status (set by Marlbridge, or indicative),
// shown in its own column in the page's language; no asterisk.
export const pricingRows = REGION_PRICING.map((r) => ({
  region: r.region,
  status: (r.status ?? 'confirmed') as PriceStatus,
  currency: r.currency,
  igcse: formatFee(feeFor(r, 'igcse'), r.currency),
  aLevel: formatFee(feeFor(r, 'a-level'), r.currency),
}));
export const hasIndicativeRows = REGION_PRICING.some(isIndicative);
