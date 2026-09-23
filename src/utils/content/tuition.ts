/**
 * D-286 -- FAQs for the five focused tuition sections. Generic answers are
 * built from src/data/pricing.ts (the single source for every fee and
 * service term), so they cannot drift from /pricing/; subject-specific
 * answers come from src/data/tuition-pages.ts. The hub merges these into
 * its own FAQ list so the page emits one FAQPage node, matching what is
 * visible.
 */
import type { TuitionPage } from '../../data/tuition-pages';
import { PRICING_TERMS, REGION_PRICING, ONE_TO_ONE_PRICING, formatFee, feeFor, QUALIFICATION_TIER } from '../../data/pricing';

export function tuitionFaqs(page: TuitionPage, courseLabel: string): { question: string; answer: string }[] {
  const tier = QUALIFICATION_TIER[page.qualificationSlug] ?? 'igcse';
  const pk = REGION_PRICING.find((r) => r.region === 'Pakistan')!;
  const pk1 = ONE_TO_ONE_PRICING.find((r) => r.region === 'Pakistan')!;
  const uk = REGION_PRICING.find((r) => r.region === 'United Kingdom')!;
  const uae = REGION_PRICING.find((r) => r.region === 'United Arab Emirates')!;
  return [
    {
      question: `How much does ${courseLabel} tuition cost?`,
      answer: `Group classes are charged per subject, per month: for example ${pk.symbol} ${formatFee(feeFor(pk, tier), pk.currency)} in Pakistan, ${formatFee(feeFor(uae, tier), uae.currency)} ${uae.currency} in the UAE and ${uk.symbol}${formatFee(feeFor(uk, tier), uk.currency)} in the UK. One-to-one classes are charged per class instead: ${pk1.symbol} ${formatFee(feeFor(pk1, tier), pk1.currency)} per class in Pakistan. Every region's rates are on the pricing page. ${PRICING_TERMS.freeTrial}`,
    },
    {
      question: 'How long are classes, and how often?',
      answer: `Group classes: ${PRICING_TERMS.classFormat.group} Groups have at most ${PRICING_TERMS.maxGroupSize} students. One-to-one: ${PRICING_TERMS.classFormat.oneToOne}`,
    },
    {
      question: 'When are the classes?',
      answer: 'Class times are agreed with you before the first class, in your own time zone. There is no fixed public timetable, so tell us when you are free on the trial form.',
    },
    {
      question: 'Does the trial request book a class?',
      answer: `No. It sends a request. ${PRICING_TERMS.enquiryResponse.summary} We confirm a teacher and a time with you before anything is scheduled.`,
    },
    ...page.faqs,
  ];
}
