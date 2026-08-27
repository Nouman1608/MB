/**
 * v1.x CLOSURE WS2 -- translated legal/editorial prose (accessibility,
 * cookies, editorial & trust policy, privacy, terms). Same disclosed
 * "AI-assisted, pending review" status as every other translated page on
 * this site (D-045/D-051/D-052) -- legal text carries real consequences,
 * so these are flagged for native-speaker/legal review before being
 * treated as authoritative in the relevant language, same as the English
 * originals already carry "this has not been reviewed by a lawyer" for
 * privacy/terms. The English page remains the governing version; each
 * translated legal page says so explicitly in its lead.
 */
export interface ProseSection { heading?: string; paragraphs: readonly string[]; list?: readonly string[] }

export interface LegalCopy {
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  lastUpdated: string;
  governingNote: string;
  sections: readonly ProseSection[];
}

import type { LocaleCode } from '../nav';

type LegalKey = 'accessibility' | 'cookies' | 'editorial-policy' | 'privacy' | 'terms';

export const LEGAL_COPY: Record<LegalKey, Record<LocaleCode, LegalCopy>> = {
  accessibility: {
    ar: { title: 'إمكانية الوصول', description: 'يستهدف مارلبريدج معيار WCAG 2.2 AA. كيفية الإبلاغ عن مشكلة في إمكانية الوصول.', eyebrow: 'قانوني', heading: 'إمكانية الوصول', lastUpdated: '17 أغسطس 2026', governingNote: 'النسخة الإنجليزية من هذه الصفحة هي النسخة المرجعية والملزمة.', sections: [
      { heading: 'التزامنا', paragraphs: ['يهدف مارلبريدج إلى تحقيق مستوى WCAG 2.2 AA للصفحات التي نتحكم بها. يشمل ذلك تباينًا كافيًا في الألوان، وتنقلًا يعمل بلوحة المفاتيح، ورابط "تخطِّ إلى المحتوى" ظاهرًا، وبنية عناوين ذات معنى، وبدائل نصية للصور المهمة.'] },
      { heading: 'القيود المعروفة', paragraphs: ['هذا موقع فتيّ وقيد التطوير النشط. لم نُجرِ بعد تدقيقًا كاملًا لإمكانية الوصول من طرف ثالث، لذا قد توجد ثغرات لم نكتشفها بأنفسنا.'] },
      { heading: 'الإبلاغ عن مشكلة', paragraphs: ['إذا كنت تستخدم تقنية مساعدة وواجهت عائقًا في أي مكان على marlbridge.com، أخبرنا بالصفحة وما حدث، وسننظر في الأمر عبر hello@marlbridge.com.'] },
      { heading: 'وصول بديل', paragraphs: ['إذا لم يكن مصدر أو صفحة معينة متاحًا لك، راسلنا وسنساعدك في الحصول على المحتوى بطريقة أخرى بينما نصلحه.'] },
    ] },
    ur: { title: 'رسائی', description: 'مارل برج WCAG 2.2 AA کو ہدف بناتا ہے۔ رسائی کے مسئلے کی اطلاع کیسے دیں۔', eyebrow: 'قانونی', heading: 'رسائی', lastUpdated: '17 اگست 2026', governingNote: 'اس صفحے کا انگریزی ورژن حوالہ اور پابند نسخہ ہے۔', sections: [
      { heading: 'ہمارا عزم', paragraphs: ['مارل برج اپنے کنٹرول میں موجود صفحات کے لیے WCAG 2.2 لیول AA حاصل کرنے کا ارادہ رکھتا ہے۔ اس میں مناسب رنگ کا تضاد، کی بورڈ سے قابلِ استعمال نیویگیشن، ایک نظر آنے والا سکِپ ٹو کانٹینٹ لنک، بامعنی ہیڈنگ ڈھانچہ، اور اہم تصاویر کے لیے متبادل متن شامل ہے۔'] },
      { heading: 'معلوم حدود', paragraphs: ['یہ ایک نوجوان اور فعال طور پر ترقی پذیر ویب سائٹ ہے۔ ہم نے ابھی تک مکمل تھرڈ پارٹی رسائی آڈٹ نہیں کیا، اس لیے ایسے خلا ہو سکتے ہیں جو ہم نے خود نہیں پائے۔'] },
      { heading: 'مسئلے کی اطلاع دینا', paragraphs: ['اگر آپ معاون ٹیکنالوجی استعمال کرتے ہیں اور marlbridge.com پر کہیں رکاوٹ کا سامنا کرتے ہیں، تو ہمیں بتائیں کہ کون سا صفحہ اور کیا ہوا، ہم hello@marlbridge.com پر اس کا جائزہ لیں گے۔'] },
      { heading: 'متبادل رسائی', paragraphs: ['اگر کوئی خاص مواد یا صفحہ آپ کے لیے قابل رسائی نہیں ہے، تو ہمیں ای میل کریں اور ہم اسے ٹھیک کرتے ہوئے آپ کو مواد تک دوسرے طریقے رسائی دلائیں گے۔'] },
    ] },
    bn: { title: 'অ্যাক্সেসযোগ্যতা', description: 'মার্লব্রিজ WCAG 2.2 AA লক্ষ্য করে। অ্যাক্সেসযোগ্যতা সমস্যা কীভাবে রিপোর্ট করবেন।', eyebrow: 'আইনি', heading: 'অ্যাক্সেসযোগ্যতা', lastUpdated: '১৭ আগস্ট ৢ০ৢ৬', governingNote: 'এই পৃষ্ঠার ইংরেজি সংস্করণটি নিয়ন্ত্রক ও বাধ্যতামূলক সংস্করণ।', sections: [
      { heading: 'আমাদের অঙ্গীকার', paragraphs: ['মার্লব্রিজ আমাদের নিয়ন্ত্রণাধীন পৃষ্ঠাগুলোর জন্য WCAG 2.2 লেভেল AA পূরণের লক্ষ্য রাখে। এর মধ্যে রয়েছে পর্যাপ্ত রঙের বৈসাদৃশ্য, কীবোর্ড-চালনাযোগ্য নেভিগেশন, একটি দৃশ্যমান স্কিপ-টু-কনতেন্ট লিংক, অর্থপূর্ণ হেডিং কাঠামো, এবং গুরুত্বপূর্ণ ছবির জন্য বিকল্প টেক্স্ট।'] },
      { heading: 'জানা সীমাবদ্ধতা', paragraphs: ['এটি একটি নতুন এবং সক্রিয়ভাবে উন্নয়নশীল সাইট। আমরা এখনো সম্পূর্ণ তৃতীয়-পক্ষ অ্যাক্সেসযোগ্যতা অডিট চালাইনি, তাই এমন ফাঁক থাকতে পারে যা আমরা নিজেরা খুঁজে পাইনি।'] },
      { heading: 'সমস্যা রিপোর্ট করা', paragraphs: ['আপনি যদি সহায়ক প্রযুক্তি ব্যবহার করেন এবং marlbridge.com-এ কোথাও বাধার সম্মুখীন হন, আমাদের বলুন কোন পৃষ্ঠা এবং কী ঘটেছে, আমরা hello@marlbridge.com-এ তা খতিয়ে দেখব।'] },
      { heading: 'বিকল্প অ্যাক্সেস', paragraphs: ['যদি কোনো নির্দিষ্ট উপকরণ বা পৃষ্ঠা আপনার জন্য অ্যাক্সেসযোগ্য না হয়, আমাদের ইমেইল করুন এবং আমরা ঠিক করার সময় অন্য উপায়ে আপনাকে বিষয়বস্তু পেতে সাহায্য করব।'] },
    ] },
  },
};
