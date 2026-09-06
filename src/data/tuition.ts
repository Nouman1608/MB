/**
 * Conversion & Trust round (2026-09-06, D-149).
 *
 * How tuition and the free trial actually work, in one typed place so the
 * homepage, /tutoring/, /trial/ and every program page state it identically.
 *
 * SOURCING RULE FOR THIS FILE: every string below is either (a) read
 * directly from src/data/pricing.ts, which is the approved source of truth
 * for commercial terms, or (b) a plain restatement of a fact already
 * published elsewhere on this site. Nothing here introduces a new claim
 * about outcomes, quality, speed or scale. If a future edit needs a fact
 * that is not yet in pricing.ts, add it there with its owner confirmation
 * and date first -- do not write it inline here.
 */
import { PRICING_TERMS } from './pricing';

export interface Step {
  readonly title: string;
  readonly body: string;
}

/**
 * The five stages between "interested" and "first class taught". Written to
 * remove the two objections a request form cannot answer on its own: what
 * happens after I press send, and am I committing to anything.
 */
export const TRIAL_STEPS: readonly Step[] = [
  {
    title: 'Send the request',
    body: 'Five fields, and a message telling us the qualification, exam board, subject, level, and the days and times that suit you. If something is not decided yet, say so — we will help you work it out.',
  },
  {
    title: 'We reply',
    body: PRICING_TERMS.enquiryResponse.summary,
  },
  {
    title: 'We confirm a teacher and a time',
    body: 'Sending the form is a request, not a booking. We check which specialist is free for your subject and level, agree a time in your own time zone, and confirm it with you before anything is scheduled.',
  },
  {
    title: 'You attend the free class',
    body: `${PRICING_TERMS.freeTrial} ${PRICING_TERMS.trialFormat.summary}`,
  },
  {
    title: 'You decide',
    body: `There is no obligation to continue. ${PRICING_TERMS.billing}`,
  },
] as const;

/**
 * Group vs one-to-one, stated together. Separating these two was the point:
 * the site published a per-subject-per-month group fee and a per-class
 * one-to-one fee, and several pages summarised only the first — which
 * quietly misdescribes the cost of one-to-one tuition.
 */
export const TUITION_FORMATS = [
  {
    id: 'group',
    name: 'Small-group tuition',
    format: PRICING_TERMS.classFormat.group,
    groupSize: `A maximum of ${PRICING_TERMS.maxGroupSize} students per class.`,
    billing: `Charged ${PRICING_TERMS.unit}.`,
    discounts: `A ${PRICING_TERMS.multiSubjectDiscount.percentOff}% discount applies for ${PRICING_TERMS.multiSubjectDiscount.minSubjects} or more subjects, and a ${PRICING_TERMS.siblingDiscount.percentOff}% discount for up to ${PRICING_TERMS.siblingDiscount.maxSiblings} siblings enrolled together. Both apply to group classes only, and combine if you qualify for both.`,
    trial: PRICING_TERMS.trialFormat.group,
  },
  {
    id: 'one-to-one',
    name: 'One-to-one tuition',
    format: PRICING_TERMS.classFormat.oneToOne,
    groupSize: 'One teacher, one student.',
    billing: 'Charged per class, not per month — a different basis from group tuition.',
    discounts: 'The multi-subject and sibling discounts do not apply to one-to-one classes.',
    trial: PRICING_TERMS.trialFormat.oneToOne,
  },
] as const;

/** Answers a family needs before enquiring, in the words already approved
 *  elsewhere on the site. Reused on the homepage and program pages; the
 *  fuller fee FAQ stays on /pricing/, which remains the source of truth. */
export const TUITION_FAQS: readonly { question: string; answer: string }[] = [
  {
    question: 'Is the trial class really free?',
    answer: `${PRICING_TERMS.freeTrial} There is no charge and no obligation to continue.`,
  },
  {
    question: 'How quickly will I hear back?',
    answer: PRICING_TERMS.enquiryResponse.summary,
  },
  {
    question: 'Is the trial one-to-one or in a group?',
    answer: `${PRICING_TERMS.trialFormat.summary} ${PRICING_TERMS.trialFormat.group} ${PRICING_TERMS.trialFormat.oneToOne}`,
  },
  {
    question: 'How large are group classes?',
    answer: `Group classes hold a maximum of ${PRICING_TERMS.maxGroupSize} students. ${PRICING_TERMS.classFormat.group}`,
  },
  {
    question: 'Can I be taught online?',
    answer: 'Yes. Marlbridge teaches in person in Pakistan and online everywhere else, with lesson times agreed in your own time zone.',
  },
  {
    question: 'When do I start paying?',
    answer: `${PRICING_TERMS.billing} ${PRICING_TERMS.enrolmentFee}`,
  },
  {
    question: 'What if I need to stop?',
    answer: PRICING_TERMS.cancellationPolicy,
  },
] as const;
