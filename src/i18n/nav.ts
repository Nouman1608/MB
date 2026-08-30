/**
 * v1.x CLOSURE WS2 -- shared translated site chrome: the primary nav, the
 * footer link groups, the language switcher, common UI microcopy, and the
 * enquiry-form field labels/validation/status strings used by every
 * translated page. Kept in one file because this is exactly the "chrome"
 * layer named in the approved WS2 scope (D-045) -- distinct from each
 * page's own body content, which lives in src/i18n/pages/*.ts.
 *
 * METHOD: same as src/i18n/copy.ts -- AI-assisted translation, not yet
 * reviewed by a native speaker or Marlbridge owner. Every locale page
 * carries the same visible review-pending banner already established
 * there. Remove the "pending review" framing only once a human review has
 * actually happened (docs/decision-log.md D-045/D-051/D-052).
 */
import type { TranslationKey } from './routes';

export type LocaleCode = 'ar' | 'ur' | 'bn';

export interface NavLink { readonly key: TranslationKey; readonly label: string }

export interface EnquiryFormLabels {
  name: string;
  email: string;
  phone: string;
  country: string;
  message: string;
  optional: string;
  school: string;
  role: string;
  roleOptions: readonly string[];
  rolePlaceholder: string;
  messageHintStudent: string;
  messageHintTrial: string;
  messageHintTutoring: string;
  messageHintSchool: string;
  trialNote: string;
  privacyPrefix: string;
  privacyLinkText: string;
  privacySuffix: string;
  submit: string;
  preferEmail: string;
  sending: string;
  successMessage: string;
  genericError: string;
  networkError: string;
  requiredError: string;
  emailError: string;
  genericFieldError: string;
}

export interface NavCopy {
  htmlLang: string;
  dir: 'rtl' | 'ltr';
  reviewBanner: string;
  skipToContent: string;
  languageLabel: string;
  englishLabel: string;
  homeLabel: string;
  backToEnglish: string;
  languageNoteSuffix: string;
  /** D-081 -- label for the footer control that opens Cloudflare Zaraz's
   * own consent modal (see ConsentAnalytics.astro / Footer.astro). */
  cookieSettingsLabel: string;
  primaryNav: readonly NavLink[];
  ctaPrograms: string;
  ctaTrial: string;
  footerExploreHeading: string;
  footerExplore: readonly NavLink[];
  footerResourcesHeading: string;
  footerResources: readonly NavLink[];
  footerCompanyHeading: string;
  footerCompany: readonly NavLink[];
  copyright: string;
  questionsHeading: string;
  lastUpdatedLabel: string;
  form: EnquiryFormLabels;
}

export const NAV_COPY: Record<LocaleCode, NavCopy> = {
  ar: {
    htmlLang: 'ar', dir: 'rtl',
    reviewBanner: 'تمت ترجمة هذه الصفحة بمساعدة الذكاء الاصطناعي وهي في انتظار مراجعة فريق مارلبريدج. إذا كان هناك ما يحتاج إلى توضيح، يُرجى التواصل معنا باللغة الإنجليزية.',
    skipToContent: 'الانتقال إلى المحتوى',
    languageLabel: 'اللغة',
    englishLabel: 'English',
    homeLabel: 'الرئيسية',
    backToEnglish: 'عرض هذه الصفحة بالإنجليزية',
    languageNoteSuffix: '(مراجعة بمساعدة الذكاء الاصطناعي، بانتظار المراجعة)',
    cookieSettingsLabel: 'إعدادات ملفات تعريف الارتباط',
    primaryNav: [
      { key: 'programs', label: 'البرامج' },
      { key: 'subjects', label: 'المواد الدراسية' },
      { key: 'resources', label: 'مصادر التعلّم' },
      { key: 'tutoring', label: 'الدروس الخصوصية' },
      { key: 'pricing', label: 'الأسعار' },
      { key: 'schools', label: 'للمدارس' },
      { key: 'about', label: 'من نحن' },
      { key: 'search', label: 'بحث' },
    ],
    ctaPrograms: 'استكشاف البرامج',
    ctaTrial: 'درس تجريبي مجاني',
    footerExploreHeading: 'استكشاف',
    footerExplore: [
      { key: 'programs', label: 'البرامج' },
      { key: 'subjects', label: 'المواد الدراسية' },
      { key: 'boards', label: 'مجالس الامتحانات' },
      { key: 'levels', label: 'المؤهلات' },
      { key: 'resources', label: 'مصادر التعلّم' },
      { key: 'tutoring', label: 'الدروس الخصوصية' },
      { key: 'pricing', label: 'الأسعار' },
      { key: 'schools', label: 'للمدارس' },
    ],
    footerResourcesHeading: 'مصادر التعلّم',
    footerResources: [
      { key: 'resources', label: 'مكتبة المصادر' },
      { key: 'articles', label: 'مجلة التعلّم' },
      { key: 'checklists', label: 'قوائم مراجعة قابلة للطباعة' },
    ],
    footerCompanyHeading: 'الشركة',
    footerCompany: [
      { key: 'about', label: 'من نحن' },
      { key: 'contact', label: 'تواصل معنا' },
      { key: 'legal-editorial-policy', label: 'سياسة التحرير والثقة' },
      { key: 'legal-privacy', label: 'سياسة الخصوصية' },
      { key: 'legal-terms', label: 'الشروط' },
      { key: 'legal-cookies', label: 'سياسة ملفات تعريف الارتباط' },
      { key: 'legal-accessibility', label: 'إمكانية الوصول' },
    ],
    copyright: '© 2026 مارلبريدج',
    questionsHeading: 'أسئلة',
    lastUpdatedLabel: 'آخر تحديث',
    form: {
      name: 'الاسم الكامل', email: 'البريد الإلكتروني', phone: 'رقم الهاتف', country: 'الدولة', message: 'الرسالة',
      optional: '(اختياري)', school: 'المدرسة', role: 'دورك', roleOptions: ['مدير المدرسة', 'رئيس قسم', 'معلم', 'منسق', 'أخرى'],
      rolePlaceholder: 'يرجى الاختيار',
      messageHintStudent: 'ما الذي يحتاج الطالب المساعدة فيه؟ يُرجى ذكر البرنامج (مثل IGCSE أو A Level)، ومجلس الامتحان إن كان معروفاً، والمادة، والمستوى.',
      messageHintTrial: 'أخبرنا بما تريد أن يغطيه الدرس التجريبي: البرنامج أو المؤهل (مثل IGCSE أو A Level)، مجلس الامتحان إن كان معروفاً، المادة، المستوى، الأيام/الأوقات المفضلة والمنطقة الزمنية، وما الدعم الذي تحتاجه.',
      messageHintTutoring: 'ما الذي يحتاج الطالب المساعدة فيه؟ يُرجى ذكر البرنامج (مثل IGCSE أو A Level)، ومجلس الامتحان إن كان معروفاً، والمادة، والمستوى.',
      messageHintSchool: 'ما الذي تحتاجه مدرستكم؟',
      trialNote: 'هذا الطلب ليس حجزًا مؤكدًا — سيرد مارلبريدج عبر البريد الإلكتروني لترتيب الدرس التجريبي بمجرد تأكيد المعلم والموعد.',
      privacyPrefix: 'بإرسال هذا النموذج، فإنك توافق على ',
      privacyLinkText: 'سياسة الخصوصية',
      privacySuffix: ' الخاصة بمارلبريدج — تُستخدم معلوماتك فقط للرد على استفسارك.',
      submit: 'إرسال الاستفسار',
      preferEmail: 'تفضّل البريد الإلكتروني؟ راسلنا على',
      sending: 'جارٍ الإرسال…',
      successMessage: 'شكرًا — تم إرسال استفسارك. سنرد عليك عبر البريد الإلكتروني.',
      genericError: 'تعذّر إرسال استفسارك.',
      networkError: 'تعذّر الوصول إلى الخادم. يُرجى التحقق من اتصالك، أو مراسلتنا عبر البريد الإلكتروني.',
      requiredError: 'هذا الحقل مطلوب.',
      emailError: 'يُرجى إدخال بريد إلكتروني صالح.',
      genericFieldError: 'يُرجى التحقق من هذا الحقل.',
    },
  },
  ur: {
    htmlLang: 'ur', dir: 'rtl',
    reviewBanner: 'اس صفحے کا ترجمہ AI کی مدد سے کیا گیا ہے اور یہ مارل برج ٹیم کے جائزے کا منتظر ہے۔ اگر کچھ واضح نہ ہو تو براہ کرم ہم سے انگریزی میں رابطہ کریں۔',
    skipToContent: 'مواد پر جائیں',
    languageLabel: 'زبان',
    englishLabel: 'English',
    homeLabel: 'ہوم',
    backToEnglish: 'یہ صفحہ انگریزی میں دیکھیں',
    languageNoteSuffix: '(AI کی مدد سے ترجمہ، جائزے کا منتظر)',
    cookieSettingsLabel: 'کوکی کی ترتیبات',
    primaryNav: [
      { key: 'programs', label: 'پروگرامز' },
      { key: 'subjects', label: 'مضامین' },
      { key: 'resources', label: 'تعلیمی مواد' },
      { key: 'tutoring', label: 'ٹیوشن' },
      { key: 'pricing', label: 'فیس' },
      { key: 'schools', label: 'اسکولوں کے لیے' },
      { key: 'about', label: 'ہمارے بارے میں' },
      { key: 'search', label: 'تلاش' },
    ],
    ctaPrograms: 'پروگرامز دیکھیں',
    ctaTrial: 'مفت ٹرائل کلاس',
    footerExploreHeading: 'دریافت کریں',
    footerExplore: [
      { key: 'programs', label: 'پروگرامز' },
      { key: 'subjects', label: 'مضامین' },
      { key: 'boards', label: 'امتحانی بورڈز' },
      { key: 'levels', label: 'قابلیتیں' },
      { key: 'resources', label: 'تعلیمی مواد' },
      { key: 'tutoring', label: 'ٹیوشن' },
      { key: 'pricing', label: 'فیس' },
      { key: 'schools', label: 'اسکولوں کے لیے' },
    ],
    footerResourcesHeading: 'تعلیمی مواد',
    footerResources: [
      { key: 'resources', label: 'وسائل کی لائبریری' },
      { key: 'articles', label: 'لرننگ جرنل' },
      { key: 'checklists', label: 'قابل پرنٹ چیک لسٹیں' },
    ],
    footerCompanyHeading: 'کمپنی',
    footerCompany: [
      { key: 'about', label: 'ہمارے بارے میں' },
      { key: 'contact', label: 'رابطہ کریں' },
      { key: 'legal-editorial-policy', label: 'ادارتی اور اعتماد کی پالیسی' },
      { key: 'legal-privacy', label: 'رازداری کی پالیسی' },
      { key: 'legal-terms', label: 'شرائط' },
      { key: 'legal-cookies', label: 'کوکی پالیسی' },
      { key: 'legal-accessibility', label: 'رسائی' },
    ],
    copyright: '© 2026 مارل برج',
    questionsHeading: 'سوالات',
    lastUpdatedLabel: 'آخری تجدید',
    form: {
      name: 'پورا نام', email: 'ای میل', phone: 'فون نمبر', country: 'ملک', message: 'پیغام',
      optional: '(اختیاری)', school: 'اسکول', role: 'آپ کا کردار', roleOptions: ['ہیڈ آف اسکول', 'ہیڈ آف ڈیپارٹمنٹ', 'استاد', 'کوآرڈینیٹر', 'دیگر'],
      rolePlaceholder: 'براہ کرم منتخب کریں',
      messageHintStudent: 'طالب علم کو کس چیز میں مدد درکار ہے؟ براہ کرم پروگرام (مثلاً IGCSE، A Level)، امتحانی بورڈ اگر معلوم ہو، مضمون، اور سطح شامل کریں۔',
      messageHintTrial: 'ہمیں بتائیں کہ آپ ٹرائل کلاس میں کیا چاہتے ہیں: آپ کا پروگرام یا قابلیت (مثلاً IGCSE، A Level)، امتحانی بورڈ اگر معلوم ہو، مضمون، سطح، پسندیدہ دن/اوقات اور ٹائم زون، اور آپ کو کس مدد کی ضرورت ہے۔',
      messageHintTutoring: 'طالب علم کو کس چیز میں مدد درکار ہے؟ براہ کرم پروگرام (مثلاً IGCSE، A Level)، امتحانی بورڈ اگر معلوم ہو، مضمون، اور سطح شامل کریں۔',
      messageHintSchool: 'آپ کے اسکول کو کیا چاہیے؟',
      trialNote: 'یہ ایک درخواست ہے، پکی بکنگ نہیں — مارل برج معلم اور وقت کی تصدیق ہونے پر ای میل کے ذریعے جواب دے گا۔',
      privacyPrefix: 'یہ فارم جمع کروا کر آپ مارل برج کی ',
      privacyLinkText: 'رازداری کی پالیسی',
      privacySuffix: ' سے اتفاق کرتے ہیں — آپ کی معلومات صرف آپ کے استفسار کا جواب دینے کے لیے استعمال کی جاتی ہیں۔',
      submit: 'استفسار بھیجیں',
      preferEmail: 'ای میل ترجیح دیتے ہیں؟ ہمیں لکھیں',
      sending: 'بھیجا جا رہا ہے…',
      successMessage: 'شکریہ — آپ کا استفسار بھیج دیا گیا ہے۔ ہم ای میل کے ذریعے جواب دیں گے۔',
      genericError: 'آپ کا استفسار نہیں بھیجا جا سکا۔',
      networkError: 'سرور تک رسائی نہیں ہو سکی۔ براہ کرم اپنا کنکشن چیک کریں، یا ہمیں ای میل کریں۔',
      requiredError: 'یہ خانہ درکار ہے۔',
      emailError: 'براہ کرم درست ای میل ایڈریس درج کریں۔',
      genericFieldError: 'براہ کرم یہ خانہ چیک کریں۔',
    },
  },
  bn: {
    htmlLang: 'bn', dir: 'ltr',
    reviewBanner: 'এই পঔ3ষ্ঠাটি AI-সহায়তায় অনুবাদ করা হয়েছে এবং মার্লব্রিজ টিমের পর্যালোচনার অপেক্ষায় রয়েছে। কিছু অস্পষ্ট মনে হলে অনুগ্রহ করে ইংরেজিতে আমাদের সাথে যোগাযোগ করুন।',
    skipToContent: 'মূল বিষয়বস্তুতে যান',
    languageLabel: 'ভাষা',
    englishLabel: 'English',
    homeLabel: 'হোম',
    backToEnglish: 'এই পঔ3ষ্ঠাটি ইংরেজিতে দেখুন',
    languageNoteSuffix: '(AI-সহায়তায় অনুবাদ, পর্যালোচনাধীন)',
    cookieSettingsLabel: 'কুকি সেটিংস',
    primaryNav: [
      { key: 'programs', label: 'প্রোগ্রাম' },
      { key: 'subjects', label: 'বিষয়সমূহ' },
      { key: 'resources', label: 'শিক্ষা উপকরণ' },
      { key: 'tutoring', label: 'টিউটরিং' },
      { key: 'pricing', label: 'মূল্য' },
      { key: 'schools', label: 'স্কুলের জন্য' },
      { key: 'about', label: 'আমাদের সম্পর্কে' },
      { key: 'search', label: 'অনুসন্ধান' },
    ],
    ctaPrograms: 'প্রোগ্রাম দেখুন',
    ctaTrial: 'ফ্রি ট্রায়াল ক্লাস',
    footerExploreHeading: 'ঘুরে দেখুন',
    footerExplore: [
      { key: 'programs', label: 'প্রোগ্রাম' },
      { key: 'subjects', label: 'বিষয়সমূহ' },
      { key: 'boards', label: 'পরীক্ষা বোর্ড' },
      { key: 'levels', label: 'যোগ্যতাসমূহ' },
      { key: 'resources', label: 'শিক্ষা উপকরণ' },
      { key: 'tutoring', label: 'টিউটরিং' },
      { key: 'pricing', label: 'মূল্য' },
      { key: 'schools', label: 'স্কুলের জন্য' },
    ],
    footerResourcesHeading: 'শিক্ষা উপকরণ',
    footerResources: [
      { key: 'resources', label: 'রিসোর্স লাইব্রেরি' },
      { key: 'articles', label: 'লার্নিং জার্নাল' },
      { key: 'checklists', label: 'প্রিন্টযোগ্য চেকলিস্ট' },
    ],
    footerCompanyHeading: 'কোমপানি',
    footerCompany: [
      { key: 'about', label: 'আমাদের সম্পর্কে' },
      { key: 'contact', label: 'যোগাযোগ' },
      { key: 'legal-editorial-policy', label: 'সম্পাদকীয় ও বিশ্বাস নীতি' },
      { key: 'legal-privacy', label: 'গোপনীয়তা নীতি' },
      { key: 'legal-terms', label: 'শর্তাবলী' },
      { key: 'legal-cookies', label: 'কুকি নীতি' },
      { key: 'legal-accessibility', label: 'অ্যাক্সেসযোগ্যতা' },
    ],
    copyright: '© ২০২৬ মার্লব্রিজ',
    questionsHeading: 'প্রশ্নাবলী',
    lastUpdatedLabel: 'সর্বশেষ হালনাগাদ',
    form: {
      name: 'পূর্ণ নাম', email: 'ইমেইল', phone: 'ফোন নম্বর', country: 'দেশ', message: 'বার্তা',
      optional: '(ঐচ্ছিক)', school: 'স্কুল', role: 'আপনার ভূমিকা', roleOptions: ['প্রধান শিক্ষক', 'বিভাগীয় প্রধান', 'শিক্ষক', 'সমন্বয়কারী', 'অন্যান্য'],
      rolePlaceholder: 'অনুগ্রহ করে নির্বাচন করুন',
      messageHintStudent: 'শিক্ষার্থীর কী বিষয়ে সাহায্য দরকার? অনুগ্রহ করে প্রোগ্রাম (যেমন IGCSE, A Level), পরীক্ষা বোর্ড জানা থাকলে, বিষয় এবং স্তর উল্লেখ করুন।',
      messageHintTrial: 'ট্রায়াল ক্লাসে কী কভার করতে চান তা আমাদের জানান: আপনার প্রোগ্রাম বা যোগ্যতা (যেমন IGCSE, A Level), পরীক্ষা বোর্ড জানা থাকলে, বিষয়, স্তর, পছন্দের দিন/সময় ও সময় অঞ্চল, এবং কী ধরনের সহায়তা প্রয়োজন।',
      messageHintTutoring: 'শিক্ষার্থীর কী বিষয়ে সাহায্য দরকার? অনুগ্রহ করে প্রোগ্রাম (যেমন IGCSE, A Level), পরীক্ষা বোর্ড জানা থাকলে, বিষয় এবং স্তর উল্লেখ করুন।',
      messageHintSchool: 'আপনার স্কুলের কী প্রয়োজন?',
      trialNote: 'এটি একটি অনুরোধ পাঠায়, নিশ্চিত বুকিং নয় — শিক্ষক ও সময় নিশ্চিত করার পর মার্লব্রিজ ইমেইলে জবাব দেবে।',
      privacyPrefix: 'এই ফর্মটি জমা দিয়ে আপনি মার্লব্রিজের ',
      privacyLinkText: 'গোপনীয়তা নীতি',
      privacySuffix: '-তে সম্মত হচ্ছেন — আপনার তথ্য শুধুমাত্র আপনার অনুরোধের জবাব দিতে ব্যবহৃত হয়।',
      submit: 'অনুরোধ পাঠান',
      preferEmail: 'ইমেইল পছন্দ করেন? আমাদের লিখুন',
      sending: 'পাঠানো হচ্ছে…',
      successMessage: 'ধন্যবাদ — আপনার অনুরোধ পাঠানো হয়েছে। আমরা ইমেইলে জবাব দেব।',
      genericError: 'আপনার অনুরোধ পাঠানো যায়নি।',
      networkError: 'সার্ভারে পৌঁছানো যায়নি। অনুগ্রহ করে আপনার সংযোগ পরীক্ষা করুন, অথবা আমাদের ইমেইল করুন।',
      requiredError: 'এই ঘরটি আবশ্যক।',
      emailError: 'অনুগ্রহ করে একটি বৈধ ইমেইল ঠিকানা লিখুন।',
      genericFieldError: 'অনুগ্রহ করে এই ঘরটি পরীক্ষা করুন।',
    },
  },
};
