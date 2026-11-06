/**
 * D-438 -- flashcards for Pearson Edexcel International GCSE Mathematics A 4MA1
 * (Specification Issue 2, November 2017).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 *   u: true     Upper tier: Higher tier only content, following the "Higher tier
 *               only" marks on Marlbridge's own 4MA1 revision notes. Foundation
 *               candidates can hide these cards.
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 4MA1, or a term in the page's
 *               key-words table); origin 'revision-notes'.
 *
 * Plain text only (see types.ts). Unicode for maths. Column vectors are written
 * (x, y), as on the 4MA1 vectors notes.
 */
import type { Flashcard, FlashcardDeck } from './types.ts';

interface Spec { n: number; f: string; b: string; u?: true; src?: string }

const sub = (topic: string, subtopic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b, u, src }) => ({
    id: `${number}-${n}`,
    topic,
    subtopic,
    front: f,
    back: b,
    ...(u ? { tier: 'upper' as const } : {}),
    origin: src ? 'revision-notes' as const : 'authored' as const,
    ...(src ? { source: src } : {}),
  }));

const IPR = 'edexcel-igcse-maths-4ma1-integers-powers-and-roots-revision-notes';
const FD = 'edexcel-igcse-maths-4ma1-fractions-and-decimals-revision-notes';
const SET = 'edexcel-igcse-maths-4ma1-set-language-and-notation-revision-notes';
const ACC = 'edexcel-igcse-maths-4ma1-degree-of-accuracy-and-standard-form-revision-notes';
const SYM = 'edexcel-igcse-maths-4ma1-use-of-symbols-and-algebraic-manipulation-revision-notes';
const EXP = 'edexcel-igcse-maths-4ma1-expressions-formulae-and-linear-equations-revision-notes';
const PROP = 'edexcel-igcse-maths-4ma1-proportion-revision-notes';
const SIM = 'edexcel-igcse-maths-4ma1-simultaneous-linear-equations-revision-notes';
const INEQ = 'edexcel-igcse-maths-4ma1-inequalities-revision-notes';
const SFG = 'edexcel-igcse-maths-4ma1-sequences-functions-and-graphs-revision-notes';
const GT = 'edexcel-igcse-maths-4ma1-geometry-and-trigonometry-revision-notes';
const VT = 'edexcel-igcse-maths-4ma1-vectors-and-transformation-geometry-revision-notes';
const SP = 'edexcel-igcse-maths-4ma1-statistics-and-probability-revision-notes';

const T1 = 'numbers-and-the-number-system-edexcel-igcse-maths';
const T2 = 'equations-formulae-and-identities-edexcel-igcse-maths';
const T3 = 'sequences-functions-and-graphs-edexcel-igcse-maths';
const T4 = 'geometry-and-trigonometry-edexcel-igcse-maths';
const T5 = 'vectors-and-transformation-geometry-edexcel-igcse-maths';
const T6 = 'statistics-and-probability-edexcel-igcse-maths';

export const DECK_EDEXCEL_IGCSE_MATHEMATICS: FlashcardDeck = {
  boardSlug: 'edexcel',
  qualificationSlug: 'igcse',
  subjectSlug: 'mathematics',
  syllabusCode: '4MA1',
  syllabusSeries: 'Specification Issue 2, November 2017',
  tierScheme: 'foundation-higher',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'sajawal-zahid', reviewedOn: '2026-11-05' },
  cards: [
    // 1 Numbers and the number system
    ...sub(T1, 'integers-edexcel-igcse-maths', '1.1', [
      { n: 1, f: 'Prime number', b: 'A number with exactly two factors: 1 and itself. 1 is not prime, and 2 is the only even prime.', src: IPR },
      { n: 2, f: 'Factor and multiple of n', b: 'Factor: divides into n with no remainder (6 is a factor of 54).\nMultiple: in the n times table (54 is a multiple of 6).', src: IPR },
      { n: 3, f: 'Write 600 as a product of powers of its prime factors', b: 'Divide by primes: 600 → 300 → 150 → 75 → 25 → 5 → 1 (÷2, ÷2, ÷2, ÷3, ÷5, ÷5).\n600 = 2³ × 3 × 5²' },
      { n: 4, f: 'Find the HCF and LCM of 90 and 126', b: '90 = 2 × 3² × 5 and 126 = 2 × 3² × 7.\nHCF (common primes, lower powers) = 2 × 3² = 18.\nLCM (every prime, higher powers) = 2 × 3² × 5 × 7 = 630.' },
      { n: 5, f: 'Work out 7 + 24 ÷ (5 − 9)', b: 'Brackets first: 5 − 9 = −4. Then divide: 24 ÷ (−4) = −6. Then add: 7 + (−6) = 1.' },
      { n: 6, f: 'What is the difference between (−4)² and −4²?', b: '(−4)² = 16: the negative number is squared.\n−4² = −(4²) = −16: only the 4 is squared.' },
    ]),
    ...sub(T1, 'fractions-edexcel-igcse-maths', '1.2', [
      { n: 1, f: 'Reciprocal', b: 'The number you multiply by to get 1. The reciprocal of 6 is 1/6; the reciprocal of 2/5 is 5/2.', src: FD },
      { n: 2, f: 'Simplest form of a fraction', b: 'The numerator and denominator have no common factor except 1. Divide both by their HCF: 42/56 → 3/4 (HCF 14).', src: FD },
      { n: 3, f: 'Work out 5/6 ÷ 10/9', b: 'Keep the first, flip the second, multiply:\n5/6 × 9/10 = 45/60 = 3/4' },
      { n: 4, f: 'Work out 1 1/2 × 2 2/9', b: 'Change to improper fractions first: 3/2 × 20/9 = 60/18 = 10/3 = 3 1/3.' },
      { n: 5, f: '"3/5 of 40" and "24 as a fraction of 40": which operation for each?', b: '3/5 of 40: multiply, 40 ÷ 5 × 3 = 24.\n24 as a fraction of 40: divide, 24/40 = 3/5.' },
    ]),
    ...sub(T1, 'decimals-edexcel-igcse-maths', '1.3', [
      { n: 1, f: 'Terminating and recurring decimals', b: 'Terminating: stops after a finite number of digits (0.375).\nRecurring: a digit or block repeats forever (0.3̇ = 0.333…).', src: FD },
      { n: 2, f: 'Put in order, smallest first: 2.09, 2.9, 2.019, 2.1', b: 'Pad to the same number of places and compare from the left: 2.090, 2.900, 2.019, 2.100.\nOrder: 2.019, 2.09, 2.1, 2.9' },
      { n: 3, f: 'Write 0.035 as a fraction in its simplest form', b: '35/1000 = 7/200 (which is 3.5%).' },
      { n: 4, f: 'Convert 0.83̇ (0.8333…) to a fraction', b: '100x = 83.333… and 10x = 8.333…\nSubtract: 90x = 75, so x = 75/90 = 5/6.\nOne digit comes before the recurring digit, so use 100x − 10x.', u: true },
      { n: 5, f: 'Convert 0.6̇3̇ (0.6363…) to a fraction', b: 'x = 0.6363…, 100x = 63.6363…\n100x − x = 99x = 63, so x = 63/99 = 7/11.', u: true },
    ]),
    ...sub(T1, 'powers-and-roots-edexcel-igcse-maths', '1.4', [
      { n: 1, f: 'Index laws (same base)', b: 'aᵐ × aⁿ = aᵐ⁺ⁿ\naᵐ ÷ aⁿ = aᵐ⁻ⁿ\na⁰ = 1\na⁻ⁿ = 1/aⁿ\nExample: 5³ ÷ 5⁻² = 5⁵.' },
      { n: 2, f: 'What is 6⁻²?', b: '1/6² = 1/36. It is not −36 or −12.' },
      { n: 3, f: 'How can prime factors show a square root? Find √1764.', b: 'If every power in the prime factorisation is even, the number is a square: halve each power.\n1764 = 2² × 3² × 7², so √1764 = 2 × 3 × 7 = 42.' },
      { n: 4, f: 'Surd', b: 'An irrational root, such as √3 or √10. √36 = 6 is not a surd.', u: true },
      { n: 5, f: 'Simplify √12 + √75', b: '√12 = 2√3 and √75 = 5√3 (take out the largest square factor).\n2√3 + 5√3 = 7√3. It is not √87.', u: true },
      { n: 6, f: 'Rationalise 3/(√7 − 2)', b: 'Multiply top and bottom by the conjugate √7 + 2.\nDenominator: 7 − 4 = 3.\n3(√7 + 2)/3 = √7 + 2', u: true },
      { n: 7, f: 'Evaluate 64^(−2/3)', b: 'Cube root of 64 = 4; 4² = 16; the negative power flips it: 1/16.', u: true },
    ]),
    ...sub(T1, 'set-language-and-notation-edexcel-igcse-maths', '1.5', [
      { n: 1, f: 'Universal set ℰ', b: 'Everything under consideration in the question. Every other set is drawn from it.', src: SET },
      { n: 2, f: 'Empty set ∅', b: 'A set with no elements. It is not {0}, which has one element.', src: SET },
      { n: 3, f: 'Complement A′', b: 'The elements of ℰ that are not in A.', src: SET },
      { n: 4, f: 'A ∩ B and A ∪ B', b: 'A ∩ B (intersection): elements in both A and B.\nA ∪ B (union): elements in A or B or both.' },
      { n: 5, f: '(A ∪ B)′ and (A ∩ B)′: which regions?', b: '(A ∪ B)′: one region, outside both circles (in neither).\n(A ∩ B)′: everything except the overlap.' },
      { n: 6, f: 'Formula for n(A ∪ B), and what n(A) means', b: 'n(A) is the number of elements in A.\nn(A ∪ B) = n(A) + n(B) − n(A ∩ B)', u: true },
      { n: 7, f: 'Of 30 people, 18 have a cat, 15 have a dog and 6 have neither. How many have both?', b: 'At least one pet: 30 − 6 = 24.\n18 + 15 − both = 24, so both = 9.', u: true },
      { n: 8, f: 'Meaning of ⊂ and of {x : …}', b: 'A ⊂ B: A is a subset of B (every element of A is in B).\n{x : …}: the set of all x such that …\nExample: {x : x is an integer, 0 ≤ x < 4} = {0, 1, 2, 3}.', u: true },
    ]),
    ...sub(T1, 'percentages-edexcel-igcse-maths', '1.6', [
      { n: 1, f: 'Multiplier for a percentage increase or decrease of r%', b: 'Increase: × (1 + r/100). Decrease: × (1 − r/100).\nExample: decrease by 18% → × 0.82. A 40% reduction is × 0.6, not × 0.4.' },
      { n: 2, f: 'Percentage change formula', b: '(change ÷ original) × 100\nExample: £125 to £140 is a change of 15, so 15/125 × 100 = 12%. Divide by the original, not the new value.' },
      { n: 3, f: 'A price is 172.80 after an 8% rise. Find the original price.', b: 'Divide by the multiplier: 172.80 ÷ 1.08 = 160.\nCheck: 160 × 1.08 = 172.80.' },
      { n: 4, f: 'Compound interest and depreciation formulae', b: 'Growth: P × (1 + r/100)ⁿ\nDepreciation: P × (1 − r/100)ⁿ\nP = starting amount, r = rate per year (%), n = years. Subtract P for the interest.\nExample: £3200 at 2.5% for 2 years = £3362.' },
      { n: 5, f: 'A value rises by 40% then falls by 25%. Find the overall percentage change.', b: 'Multiply the multipliers: 1.4 × 0.75 = 1.05, an overall increase of 5%. Do not add the percentages.', u: true },
      { n: 6, f: 'A machine falls from £50 000 to £40 500 in 2 years at a fixed rate. Find the rate.', b: 'm² = 40 500 ÷ 50 000 = 0.81, so m = 0.9.\nRate = (1 − 0.9) × 100 = 10% per year.', u: true },
    ]),
    ...sub(T1, 'ratio-and-proportion-edexcel-igcse-maths', '1.7', [
      { n: 1, f: 'Share 96 in the ratio 5 : 3', b: 'Total parts = 8; one part = 96 ÷ 8 = 12.\nShares: 5 × 12 = 60 and 3 × 12 = 36.' },
      { n: 2, f: 'Write 12 : 30 in the form 1 : n', b: 'Divide both parts by the first part: 30 ÷ 12 = 2.5, so 1 : 2.5.' },
      { n: 3, f: 'a : b = 2 : 7. What fraction of the total is a, and what fraction of b is a?', b: 'a is 2/9 of the total (2 out of 9 parts).\na is 2/7 of b.' },
      { n: 4, f: 'A map has scale 1 : 20 000. A path is 4.5 cm on the map. Find its real length in km.', b: '4.5 × 20 000 = 90 000 cm = 900 m = 0.9 km.\nMultiply by n first, then convert units.' },
      { n: 5, f: 'y is directly proportional to x, and y = 21 when x = 6. Find y when x = 10.', b: 'k = y ÷ x = 21 ÷ 6 = 3.5, so y = 3.5x.\ny = 3.5 × 10 = 35.' },
    ]),
    ...sub(T1, 'degree-of-accuracy-edexcel-igcse-maths', '1.8', [
      { n: 1, f: 'Significant figures', b: 'Digits counted from the first non-zero digit. Leading zeros in a decimal do not count; zeros between digits do.', src: ACC },
      { n: 2, f: 'Round 0.080 96 to 3 significant figures, and 61 540 to 2 significant figures', b: '0.080 96 → 0.0810 (keep the final 0: it is the third significant figure).\n61 540 → 62 000 (not 62).' },
      { n: 3, f: 'A length is 40 cm to the nearest 5 cm. Write its bounds.', b: 'Half of 5 is 2.5.\n37.5 ≤ x < 42.5' },
      { n: 4, f: 'How do you estimate a calculation? Estimate (0.587 × 3.94) ÷ 0.213', b: 'Round every number to 1 significant figure and write the rounded calculation:\n(0.6 × 4) ÷ 0.2 = 2.4 ÷ 0.2 = 12.' },
      { n: 5, f: 'Bounds: which values give the upper bound of a − b and of a ÷ b?', b: 'Upper bound of a with the lower bound of b, for both.\nFor the lower bound: lower a with upper b.\nSums and products: upper with upper, lower with lower.', u: true },
      { n: 6, f: 'How do you give an answer to a suitable degree of accuracy using bounds?', b: 'Work out the upper and lower bounds of the answer. Round both to 1, 2, 3… significant figures. The answer is the most accurate value on which both bounds agree.', u: true },
    ]),
    ...sub(T1, 'standard-form-edexcel-igcse-maths', '1.9', [
      { n: 1, f: 'Standard form', b: 'a × 10ⁿ, with 1 ≤ a < 10 and n an integer.\nExamples: 92 000 = 9.2 × 10⁴; 0.000 605 = 6.05 × 10⁻⁴.', src: ACC },
      { n: 2, f: 'Multiplying and dividing in standard form', b: 'Multiply: multiply the a parts and add the powers. Divide: divide the a parts and subtract the powers.\nThen adjust: 25 × 10⁻⁶ = 2.5 × 10⁻⁵.' },
      { n: 3, f: 'Work out 2.4 × 10⁵ + 6 × 10⁴ in standard form', b: 'Match the powers or use ordinary numbers: 240 000 + 60 000 = 300 000 = 3 × 10⁵.\nIt is not 8.4 × 10⁵.' },
      { n: 4, f: 'How many times bigger is 6 × 10⁸ than 1.5 × 10⁵?', b: 'Divide: (6 ÷ 1.5) × 10⁸⁻⁵ = 4 × 10³ times (4000).', u: true },
      { n: 5, f: 'Work out √(3.6 × 10⁷)', b: 'Make the power even first: 3.6 × 10⁷ = 36 × 10⁶.\n√(36 × 10⁶) = 6 × 10³ = 6000.', u: true },
    ]),
    ...sub(T1, 'applying-number-edexcel-igcse-maths', '1.10', [
      { n: 1, f: 'Converting between decimal hours and minutes', b: 'Decimal hours to minutes: × 60 (0.85 h = 51 min).\nMinutes to hours: ÷ 60 (35 min = 35/60 h, not 0.35 h).\n1.5 h is 1 h 30 min, not 1 h 50 min.' },
      { n: 2, f: 'How do you decide which pack is the best buy?', b: 'Find the cost of one common amount (per item, per 100 g, per litre) for each pack, show both values, then state which is better value.\nExample: 6 for £2.94 is 49p each; 10 for £4.75 is 47.5p each, so the 10-pack.' },
      { n: 3, f: 'The rate is £1 = €1.15. Change €230 into pounds.', b: 'From the other currency into pounds, divide by the rate: 230 ÷ 1.15 = £200.' },
      { n: 4, f: 'Area and volume conversions from m to cm', b: '1 m² = 10 000 cm² (square the length factor).\n1 m³ = 1 000 000 cm³ (cube it).\n1 cm³ = 1 ml; 1000 cm³ = 1 litre; 1 m³ = 1000 litres.' },
      { n: 5, f: 'Everyday problems: when do you round up and when down?', b: 'Round up when you must have enough (tins of paint, buses, packs).\nRound down when only whole items fit or can be afforded (boxes in a lift, tickets on a budget).' },
    ]),
    ...sub(T1, 'electronic-calculators-edexcel-igcse-maths', '1.11', [
      { n: 1, f: 'Using a calculator: how do you enter a fraction with a sum on top and bottom?', b: 'Put brackets round the whole numerator and the whole denominator (or use the fraction template).\nExample: (3.8 + 4.6) ÷ (2.1 × 0.5) = 8.4 ÷ 1.05 = 8.' },
      { n: 2, f: 'Why type brackets when squaring a negative number on a calculator?', b: 'Without brackets the calculator works out −3² = −9. With brackets, (−3)² = 9.' },
      { n: 3, f: 'Interpret the display 2.25 as a time, and 14.7 as money in pounds', b: '2.25 hours = 2 h 15 min (0.25 × 60 = 15).\n14.7 → £14.70 (money to 2 decimal places).' },
      { n: 4, f: 'A calculator shows 4.6E+05. How do you write it?', b: '4.6 × 10⁵ (not 4.6⁵). Always write proper standard form notation.' },
    ]),

    // 2 Equations, formulae and identities
    ...sub(T2, 'use-of-symbols-edexcel-igcse-maths', '2.1', [
      { n: 1, f: 'Expression, equation and formula', b: 'Expression: terms joined by + or −, no equals sign (3a − 2b + 7).\nEquation: true only for certain values of the letter (2x + 5 = 11).\nFormula: a rule linking variables (P = 2(l + w)).', src: SYM },
      { n: 2, f: 'Coefficient', b: 'The number multiplying a letter. In −4x the coefficient is −4.', src: SYM },
      { n: 3, f: 'Simplify 4x³ × 2x⁻¹', b: 'Multiply the numbers and add the powers: 8x².' },
      { n: 4, f: 'Simplify a⁻³ × a⁸, and give 9⁰ and 9⁻¹', b: 'a⁻³⁺⁸ = a⁵.\n9⁰ = 1 and 9⁻¹ = 1/9.' },
      { n: 5, f: 'Work out 16^(−3/4)', b: '1. Negative: take the reciprocal, 1/16^(3/4).\n2. Denominator 4: fourth root of 16 = 2.\n3. Numerator 3: 2³ = 8.\nAnswer: 1/8', u: true },
    ]),
    ...sub(T2, 'algebraic-manipulation-edexcel-igcse-maths', '2.2', [
      { n: 1, f: 'Factorise fully 14x²y + 21xy', b: 'Take out the HCF of the numbers and the letters: 7xy(2x + 3).' },
      { n: 2, f: 'Factorise x² − x − 12', b: 'Two numbers with product −12 and sum −1: −4 and +3.\n(x − 4)(x + 3)' },
      { n: 3, f: 'Factorising x² + bx + c: sign patterns', b: 'c positive, b positive: both numbers positive.\nc positive, b negative: both negative.\nc negative: one of each; the larger has the sign of b.' },
      { n: 4, f: 'Factorise 6x² + 7x − 3', b: 'ac = −18; two numbers with product −18 and sum 7: 9 and −2.\n6x² + 9x − 2x − 3 = 3x(2x + 3) − (2x + 3) = (3x − 1)(2x + 3)', u: true },
      { n: 5, f: 'Write x² + 6x − 2 in the form (x + p)² + q', b: '(x + 3)² − 9 − 2 = (x + 3)² − 11\nGeneral: x² + bx + c = (x + b/2)² − (b/2)² + c', u: true },
      { n: 6, f: 'Simplify (x² − 6x + 9)/(x² − 9)', b: 'Factorise fully: (x − 3)(x − 3) / ((x − 3)(x + 3)).\nCancel the common factor: (x − 3)/(x + 3)', u: true },
      { n: 7, f: 'Prove that (2n + 1)² − 1 is a multiple of 4 for every integer n', b: '(2n + 1)² − 1 = 4n² + 4n + 1 − 1 = 4n² + 4n = 4n(n + 1).\nn(n + 1) is an integer, so this is a multiple of 4.', u: true },
    ]),
    ...sub(T2, 'expressions-and-formulae-edexcel-igcse-maths', '2.3', [
      { n: 1, f: 'Subject of a formula', b: 'The letter on its own on one side of a formula: P in P = 2l + 2w.', src: EXP },
      { n: 2, f: 'Evaluate 2a² − b when a = −3 and b = −0.5', b: '2(−3)² − (−0.5) = 2 × 9 + 0.5 = 18.5\nPut each value in brackets when you substitute.' },
      { n: 3, f: 'A plumber charges £45 call-out plus £30 per hour. Write a formula for the cost £C for h hours.', b: 'C = 45 + 30h\n"Per" means multiply; the fixed charge is added.' },
      { n: 4, f: 'Make v the subject of E = ½mv²', b: '2E = mv²\nv² = 2E/m\nv = √(2E/m)' },
      { n: 5, f: 'Make y the subject of x = (y + 2)/(y − 5)', b: 'x(y − 5) = y + 2\nxy − 5x = y + 2\nxy − y = 5x + 2\ny(x − 1) = 5x + 2\ny = (5x + 2)/(x − 1)', u: true },
    ]),
    ...sub(T2, 'linear-equations-edexcel-igcse-maths', '2.4', [
      { n: 1, f: 'Method for solving a linear equation with fractions and brackets', b: '1. Multiply every term by the LCM of the denominators.\n2. Expand brackets, watching the sign in front.\n3. Collect the unknown on one side and numbers on the other.\n4. Divide by the coefficient, then check.' },
      { n: 2, f: 'Solve 6 − (x − 4) = 2x + 1', b: '6 − x + 4 = 2x + 1 (the minus changes both signs in the bracket)\n10 − x = 2x + 1\n9 = 3x, so x = 3' },
      { n: 3, f: 'Solve (x + 2)/4 = (x − 1)/3', b: 'Multiply both sides by 12: 3(x + 2) = 4(x − 1)\n3x + 6 = 4x − 4\nx = 10' },
      { n: 4, f: 'Angles on a straight line are 2y°, (3y + 20)° and (y − 8)°. Find y.', b: '2y + 3y + 20 + y − 8 = 180\n6y + 12 = 180, so y = 28.\nThe angles are 56°, 104° and 20°.' },
    ]),
    ...sub(T2, 'proportion-edexcel-igcse-maths', '2.5', [
      { n: 1, f: 'Constant of proportionality', b: 'The number k. It is the same for every pair of values.', u: true, src: PROP },
      { n: 2, f: 'Write formulae: y ∝ x², y ∝ √x, y inversely proportional to x², y inversely proportional to √x', b: 'y = kx²\ny = k√x\ny = k/x²\ny = k/√x', u: true },
      { n: 3, f: 'P is inversely proportional to √Q. P = 6 when Q = 25. Find P when Q = 36.', b: 'P = k/√Q, so 6 = k/5 and k = 30.\nP = 30/√36 = 30/6 = 5', u: true },
      { n: 4, f: 'y ∝ x³. x is increased by 10%. Find the percentage increase in y.', b: 'Multiplier for x: 1.1. For y: 1.1³ = 1.331, so y increases by 33.1%.', u: true },
      { n: 5, f: 'Graph of y ∝ x', b: 'A straight line through the origin, with gradient k.', u: true, src: PROP },
      { n: 6, f: 'Is y = 3x + 2 an example of direct proportion?', b: 'No. It is a linear relationship, but the line does not pass through the origin. In proportion, k multiplies and there is no added constant.', u: true },
    ]),
    ...sub(T2, 'simultaneous-linear-equations-edexcel-igcse-maths', '2.6', [
      { n: 1, f: 'Simultaneous equations', b: 'Two equations that must both be true for the same values of the unknowns.', src: SIM },
      { n: 2, f: 'Elimination: when do you add and when do you subtract the equations?', b: 'Make one letter have the same size of coefficient in both. Same signs: subtract. Different signs: add.' },
      { n: 3, f: 'Solve 3x + 4y = 10 and 5x − 6y = 4', b: 'Multiply by 3 and 2: 9x + 12y = 30 and 10x − 12y = 8.\nAdd: 19x = 38, so x = 2.\nThen 6 + 4y = 10, so y = 1.' },
      { n: 4, f: 'Solve x = 2y + 1 and 3x − 4y = 7', b: 'Substitute, with brackets: 3(2y + 1) − 4y = 7\n2y + 3 = 7, so y = 2 and x = 5.' },
      { n: 5, f: 'What does the solution of two simultaneous linear equations show on a graph?', b: 'The coordinates of the point where the two straight lines intersect.', u: true },
      { n: 6, f: 'Why do 2x + y = 3 and 4x + 2y = 10 have no solution?', b: 'They are y = −2x + 3 and y = −2x + 5: the same gradient with different intercepts, so the lines are parallel and never meet.', u: true },
    ]),
    ...sub(T2, 'quadratic-equations-edexcel-igcse-maths', '2.7', [
      { n: 1, f: 'The rule behind solving a quadratic by factorising', b: 'If A × B = 0, then A = 0 or B = 0. It only works with zero on one side, so rearrange to = 0 first.' },
      { n: 2, f: 'Solve x² + 11x + 28 = 0', b: '(x + 4)(x + 7) = 0\nx = −4 or x = −7' },
      { n: 3, f: 'Solve x² = 7x', b: 'Do not divide by x (you lose x = 0). Rearrange: x² − 7x = 0, so x(x − 7) = 0.\nx = 0 or x = 7' },
      { n: 4, f: 'The quadratic formula', b: 'For ax² + bx + c = 0:\nx = (−b ± √(b² − 4ac)) / (2a)\nIt is on the Higher formulae sheet. Work out b² − 4ac first.', u: true },
      { n: 5, f: 'What does b² − 4ac tell you about ax² + bx + c = 0?', b: 'b² − 4ac > 0: two different solutions.\nb² − 4ac = 0: two equal solutions.\nb² − 4ac < 0: no real solutions.', u: true },
      { n: 6, f: 'Solve x² − 4x − 7 = 0 by completing the square, giving exact answers', b: '(x − 2)² − 4 − 7 = 0, so (x − 2)² = 11.\nx − 2 = ±√11, so x = 2 ± √11.', u: true },
      { n: 7, f: 'Solve y = 3x and x² + y² = 40', b: 'Substitute the linear equation into the quadratic: x² + 9x² = 40, so x² = 4 and x = ±2.\nPairs from y = 3x: (2, 6) and (−2, −6).', u: true },
    ]),
    ...sub(T2, 'inequalities-edexcel-igcse-maths', '2.8', [
      { n: 1, f: 'Strict and inclusive inequalities', b: 'Strict: > or <; the boundary value is not included (open circle).\nInclusive: ≥ or ≤; the boundary value is included (closed circle).', src: INEQ },
      { n: 2, f: 'Solve 9 − 2x ≤ 1', b: '−2x ≤ −8. Dividing by −2 reverses the sign: x ≥ 4.' },
      { n: 3, f: 'Solve 1 < 7 − 2x ≤ 9', b: 'Subtract 7 from all three parts: −6 < −2x ≤ 2.\nDivide by −2 and reverse both signs: 3 > x ≥ −1.\nWrite in ascending order: −1 ≤ x < 3.' },
      { n: 4, f: 'Boundary line', b: 'The line you get by replacing the inequality sign with =.', src: INEQ },
      { n: 5, f: 'How do you decide which side of a boundary line to shade?', b: 'Substitute a test point not on the line, such as (0, 0). If it makes the inequality true, the region is on its side. The required region is where all the conditions overlap.' },
      { n: 6, f: 'Solve x² − 7x + 10 ≤ 0', b: '(x − 2)(x − 5) ≤ 0; critical values 2 and 5.\n"≤ 0" means between the roots: 2 ≤ x ≤ 5.', u: true },
      { n: 7, f: 'Solve x² > 16', b: 'Outside the roots: x < −4 or x > 4.\n(x² < 16 would be −4 < x < 4.)', u: true },
    ]),

    // 3 Sequences, functions and graphs
    ...sub(T3, 'sequences-edexcel-igcse-maths', '3.1', [
      { n: 1, f: 'Term-to-term rule', b: 'How to get the next term from the one before, for example "add 4" or "multiply by 2".', src: SFG },
      { n: 2, f: 'Position-to-term rule', b: 'A formula for the nth term in terms of n, for example 7n − 4. It gives any term directly.', src: SFG },
      { n: 3, f: 'Find the nth term of 13, 9, 5, 1, …', b: 'Difference −4, so start with −4n: −4, −8, −12, …\nEach term is 17 more: nth term = 17 − 4n.' },
      { n: 4, f: 'How do you test whether a number is a term of a sequence?', b: 'Set the nth term equal to the number and solve for n. A whole-number n means it is a term; otherwise it is not.' },
      { n: 5, f: 'nth term of an arithmetic sequence with first term a and common difference d', b: 'a + (n − 1)d. Learn it: it is not on the formulae sheet.', u: true },
      { n: 6, f: 'Find the sum of the first 15 terms of 2 + 5 + 8 + 11 + …', b: 'Sₙ = (n/2)[2a + (n − 1)d], with a = 2, d = 3.\nS₁₅ = (15/2)(4 + 14 × 3) = (15/2)(46) = 345', u: true },
    ]),
    ...sub(T3, 'function-notation-edexcel-igcse-maths', '3.2', [
      { n: 1, f: 'Function', b: 'A mapping that sends each input to exactly one output. Written f(x) = … or f : x ↦ …', u: true, src: SFG },
      { n: 2, f: 'Domain and range of a function', b: 'Domain: the allowed inputs.\nRange: the resulting outputs.', u: true, src: SFG },
      { n: 3, f: 'f(x) = x + 2 and g(x) = 3x. Find fg(x) and gf(x).', b: 'fg(x): do g first, then f: 3x + 2.\ngf(x): do f first, then g: 3(x + 2) = 3x + 6.', u: true },
      { n: 4, f: 'f(x) = (x − 7)/4. Find f⁻¹(x).', b: 'y = (x − 7)/4, so x = 4y + 7.\nReplace y with x: f⁻¹(x) = 4x + 7.', u: true },
      { n: 5, f: 'Is f⁻¹(x) the same as 1/f(x)?', b: 'No. f⁻¹ is the inverse function, which reverses f. 1/f(x) is the reciprocal.', u: true },
      { n: 6, f: 'Which value of x must be excluded from the domain of f(x) = 1/(x − 3)?', b: 'x = 3, the value that makes the denominator zero (not the value of the denominator itself).', u: true },
    ]),
    ...sub(T3, 'graphs-edexcel-igcse-maths', '3.3', [
      { n: 1, f: 'Gradient of a line', b: '(Increase in y) ÷ (increase in x).\nExample: through (−2, 5) and (4, −7): −12 ÷ 6 = −2.', src: SFG },
      { n: 2, f: 'Shape of a quadratic graph', b: 'U-shape if the x² coefficient is positive, ∩-shape if negative; symmetrical about a vertical line through the turning point.', src: SFG },
      { n: 3, f: 'Distance–time graphs: what do steep, horizontal and downward lines show?', b: 'Steeper line: faster. Horizontal line: stopped. Line sloping back down: returning to the start.' },
      { n: 4, f: 'Find the equation of the line parallel to y = 3x − 1 through (2, 9)', b: 'Parallel, so gradient 3. Substitute: 9 = 3 × 2 + c, so c = 3.\ny = 3x + 3', u: true },
      { n: 5, f: 'Gradient of a line perpendicular to a line of gradient m', b: '−1/m (the negative reciprocal), because m₁ × m₂ = −1.\nExample: perpendicular to gradient −1/4 is gradient 4.', u: true },
      { n: 6, f: 'Shapes of cubic and reciprocal graphs', b: 'Cubic: S-shaped; it ends top right if the x³ coefficient is positive, bottom right if negative.\ny = k/x: two branches that never meet the axes.', u: true },
      { n: 7, f: 'Trigonometric graphs: period and range', b: 'sin and cos repeat every 360° and stay between −1 and 1.\ntan repeats every 180°, with asymptotes at 90°, 270°, …', u: true },
      { n: 8, f: 'How do y = f(x) + a and y = f(x + a) transform the graph of y = f(x)?', b: 'y = f(x) + a: translation up a; (p, q) → (p, q + a).\ny = f(x + a): translation left a; (p, q) → (p − a, q).', u: true },
    ]),
    ...sub(T3, 'calculus-edexcel-igcse-maths', '3.4', [
      { n: 1, f: 'Differentiate y = axⁿ', b: 'dy/dx = naxⁿ⁻¹: multiply by the power, then reduce the power by 1.', u: true },
      { n: 2, f: 'Differentiate y = 5x⁴ − 3/x', b: 'Write 3/x as 3x⁻¹: y = 5x⁴ − 3x⁻¹.\ndy/dx = 20x³ + 3x⁻² = 20x³ + 3/x²', u: true },
      { n: 3, f: 'Stationary (turning) point', b: 'A point where dy/dx = 0.', u: true, src: SFG },
      { n: 4, f: 'Find the turning point of y = x² − 6x + 1', b: 'dy/dx = 2x − 6 = 0, so x = 3.\ny = 9 − 18 + 1 = −8 (substitute into the original equation).\n(3, −8) is a minimum (U-shaped graph).', u: true },
      { n: 5, f: 'Kinematics: how are displacement s, velocity v and acceleration a linked?', b: 'v = ds/dt (differentiate displacement).\na = dv/dt (differentiate velocity).', u: true },
      { n: 6, f: '"At rest" and "maximum velocity": what condition does each give?', b: 'At rest: v = 0.\nMaximum velocity: a = 0.', u: true, src: SFG },
    ]),

    // 4 Geometry and trigonometry
    ...sub(T4, 'angles-lines-and-triangles-edexcel-igcse-maths', '4.1', [
      { n: 1, f: 'Exterior angle of a triangle', b: 'It equals the sum of the two interior opposite angles.\nExample: interior angles 48° and 67° give an exterior angle of 115° at the third vertex.' },
      { n: 2, f: 'Alternate and allied angles on parallel lines', b: 'Alternate angles are equal; allied (co-interior) angles add to 180°.', src: GT },
      { n: 3, f: 'Acute, obtuse and reflex angles', b: 'Acute: less than 90°.\nObtuse: between 90° and 180°.\nReflex: between 180° and 360°.' },
      { n: 4, f: 'Isosceles triangle: angle fact', b: 'The base angles are equal.' },
    ]),
    ...sub(T4, 'polygons-edexcel-igcse-maths', '4.2', [
      { n: 1, f: 'Sum of the interior angles of an n-sided polygon', b: '(n − 2) × 180°, the same as (2n − 4) × 90°.\nA 12-sided polygon: 10 × 180° = 1800°.' },
      { n: 2, f: 'Exterior and interior angle of a regular polygon', b: 'Exterior = 360° ÷ n.\nInterior = 180° − exterior.\nRegular decagon: exterior 36°, interior 144°.' },
      { n: 3, f: 'Interior and exterior angles', b: 'They add to 180° at each vertex; only the exterior angles always total 360°.', src: GT },
      { n: 4, f: 'A regular polygon has exterior angle 30°. How many sides, and what is the interior angle?', b: 'n = 360° ÷ 30° = 12 sides.\nInterior angle = 180° − 30° = 150°.' },
    ]),
    ...sub(T4, 'symmetry-edexcel-igcse-maths', '4.3', [
      { n: 1, f: 'Lines of symmetry and order of rotational symmetry: parallelogram', b: '0 lines of symmetry; rotational symmetry of order 2.' },
      { n: 2, f: 'Lines of symmetry and order of rotational symmetry: rhombus and kite', b: 'Rhombus: 2 lines, order 2.\nKite: 1 line, order 1.' },
      { n: 3, f: 'Symmetry of a regular polygon with n sides', b: 'n lines of symmetry and rotational symmetry of order n. A square has 4 and 4.' },
      { n: 4, f: 'Congruent shapes', b: 'The same shape and the same size. Reflected copies count as congruent.' },
    ]),
    ...sub(T4, 'measures-edexcel-igcse-maths', '4.4', [
      { n: 1, f: 'Bearings', b: 'Measured from north, clockwise, with three figures. Back bearing = bearing ± 180°.', src: GT },
      { n: 2, f: 'Speed, density and pressure formulae', b: 'Speed = distance ÷ time.\nDensity = mass ÷ volume.\nPressure = force ÷ area (given in the exam).' },
      { n: 3, f: 'A car travels 91 km in 1 h 45 min. Find its average speed.', b: '1 h 45 min = 1.75 h.\n91 ÷ 1.75 = 52 km/h' },
      { n: 4, f: 'Convert 15 m/s to km/h', b: 'Multiply by 3.6 (× 3600 ÷ 1000): 15 × 3.6 = 54 km/h.' },
      { n: 5, f: 'Reading scales', b: 'Find the value of one small division first. If 5 divisions span 0 g to 100 g, each division is 20 g.', src: GT },
    ]),
    ...sub(T4, 'construction-edexcel-igcse-maths', '4.5', [
      { n: 1, f: 'How do you construct the perpendicular bisector of AB?', b: '1. Set the compasses to more than half of AB.\n2. Draw arcs above and below the line from A, then from B, with the same radius.\n3. Rule a line through the two crossing points.' },
      { n: 2, f: 'How do you construct the bisector of the angle at B?', b: '1. Draw an arc from B cutting both arms.\n2. From those two points draw equal arcs that cross inside the angle.\n3. Rule a line from B through the crossing.' },
      { n: 3, f: 'Why must you keep construction arcs visible?', b: 'The arcs are the evidence of the construction method; rubbing them out removes the marks that depend on them.' },
      { n: 4, f: 'Scale drawing: how do you find a real length?', b: 'Real length = drawing length × scale factor, then convert units (100 000 cm = 1 km).' },
    ]),
    ...sub(T4, 'circle-properties-edexcel-igcse-maths', '4.6', [
      { n: 1, f: 'Chord, tangent and radius', b: 'A chord joins two points on the circle; a tangent touches it once; a radius joins the centre to the circumference.', src: GT },
      { n: 2, f: 'Circle facts about tangents (both tiers)', b: 'A tangent is perpendicular to the radius at the point of contact.\nTangents from one external point are equal in length.' },
      { n: 3, f: 'Perpendicular from the centre to a chord', b: 'It bisects the chord (and the line from the centre to the midpoint of a chord is perpendicular to it).' },
      { n: 4, f: 'Angle at the centre and angle in a semicircle', b: 'The angle at the centre is twice the angle at the circumference on the same arc.\nThe angle in a semicircle is 90°.', u: true },
      { n: 5, f: 'Cyclic quadrilateral, and angles in the same segment', b: 'Opposite angles of a cyclic quadrilateral add up to 180°.\nAngles in the same segment are equal.', u: true },
      { n: 6, f: 'Alternate segment theorem', b: 'The angle between a tangent and a chord equals the angle in the alternate segment.', u: true },
      { n: 7, f: 'Intersecting chords theorem', b: 'Chords AB and CD meeting inside the circle at X: AX × XB = CX × XD.\nExtended to meet outside at P: PA × PB = PC × PD.', u: true },
    ]),
    ...sub(T4, 'geometrical-reasoning-edexcel-igcse-maths', '4.7', [
      { n: 1, f: 'How should you write reasons in an angle proof?', b: 'Use the full fact, for example "alternate angles are equal" or "corresponding angles are equal", not "Z angles" or "F angles". Give a reason for each stage.' },
      { n: 2, f: 'Angles on a straight line, and angles at a point', b: 'Angles on a straight line add up to 180°.\nAngles at a point add up to 360°.' },
      { n: 3, f: 'Vertically opposite angles, and angles in a quadrilateral', b: 'Vertically opposite angles are equal.\nAngles in a quadrilateral add up to 360°.' },
      { n: 4, f: 'A tangent from P touches a circle of radius 7 cm at T. OP = 25 cm. Find PT.', b: 'The tangent is perpendicular to the radius, so OTP has a right angle at T.\nPT = √(25² − 7²) = √576 = 24 cm.' },
    ]),
    ...sub(T4, 'trigonometry-and-pythagoras-theorem-edexcel-igcse-maths', '4.8', [
      { n: 1, f: "Pythagoras' theorem, and the hypotenuse with legs 9 and 12", b: 'a² + b² = c², where c is the hypotenuse.\n√(81 + 144) = √225 = 15.' },
      { n: 2, f: 'sin, cos and tan in a right-angled triangle', b: 'sin = opposite/hypotenuse\ncos = adjacent/hypotenuse\ntan = opposite/adjacent\nThese are not on the formulae sheet.' },
      { n: 3, f: 'A right-angled triangle has hypotenuse 20 cm and an angle of 35°. Find the side opposite 35°.', b: 'opposite = 20 × sin 35° = 11.5 cm (3 s.f.)' },
      { n: 4, f: 'The sine rule and the cosine rule', b: 'Sine rule: a/sin A = b/sin B = c/sin C (use with a side and its opposite angle).\nCosine rule: a² = b² + c² − 2bc cos A (two sides and the included angle, or three sides).', u: true },
      { n: 5, f: 'Area of a triangle with sides 5 cm and 8 cm and included angle 150°', b: 'Area = ½ab sin C = ½ × 5 × 8 × sin 150° = 20 × 0.5 = 10 cm²', u: true },
      { n: 6, f: 'sin x = 0.6. Find both values of x between 0° and 180°.', b: 'x = sin⁻¹ 0.6 = 36.9°, and 180° − 36.9° = 143.1° (1 d.p.), because sin(180° − θ) = sin θ.', u: true },
      { n: 7, f: 'Angle of elevation and angle of depression', b: 'Both are measured from the horizontal, up or down. The angle of depression from A to B equals the angle of elevation from B to A.', u: true },
      { n: 8, f: '3D trigonometry: angle between a line and a plane', b: 'Use the right-angled triangle made by the line, its projection on the plane and the vertical. Find any missing base length first, often a diagonal, using Pythagoras.', u: true },
    ]),

    // 5 Vectors and transformation geometry
    ...sub(T5, 'vectors-edexcel-igcse-maths', '5.1', [
      { n: 1, f: 'Vector and scalar', b: 'Vector: a quantity with magnitude and direction.\nScalar: a quantity with magnitude only.', u: true, src: VT },
      { n: 2, f: 'Resultant vector', b: 'The single vector with the same effect as two or more vectors followed in turn.', u: true, src: VT },
      { n: 3, f: 'Modulus of a vector, and |(−9, 12)|', b: 'The magnitude (length) of a vector, written |a|: |(x, y)| = √(x² + y²).\n|(−9, 12)| = √(81 + 144) = 15', u: true, src: VT },
      { n: 4, f: 'A is (1, 3) and B is (4, −1). Find →AB.', b: '→AB = →OB − →OA ("end minus start") = (4 − 1, −1 − 3) = (3, −4).', u: true },
      { n: 5, f: 'Parallel vectors', b: 'One is a scalar multiple of the other. 6a − 9b = 3(2a − 3b), so they are parallel.', u: true, src: VT },
      { n: 6, f: 'Parallel vectors and collinear points: what is the difference?', b: 'Parallel needs a scalar multiple only; collinear also needs a shared point.', u: true, src: VT },
      { n: 7, f: 'P is on AB with AP : PB = 3 : 1. Write →AP in terms of →AB.', b: '→AP = (3/(3 + 1))→AB = (3/4)→AB.', u: true },
    ]),
    ...sub(T5, 'transformation-geometry-edexcel-igcse-maths', '5.2', [
      { n: 1, f: 'What do you give to describe fully each transformation?', b: 'Rotation: centre and angle (anticlockwise +, clockwise −).\nReflection: the mirror line.\nTranslation: the column vector.\nEnlargement: centre and scale factor.' },
      { n: 2, f: 'Rotations of (x, y) about the origin', b: '+90° (anticlockwise): (−y, x).\n−90° (clockwise): (y, −x).\n180°: (−x, −y).' },
      { n: 3, f: 'Reflect (5, −2) in y = x, and in x = 1', b: 'In y = x: swap the coordinates, (−2, 5).\nIn x = 1: (2 × 1 − 5, −2) = (−3, −2).' },
      { n: 4, f: 'Which transformations give congruent images and which give similar images?', b: 'Rotation, reflection and translation give congruent images; enlargement gives similar images.', src: VT },
      { n: 5, f: 'A side of 6 cm maps to 2 cm, the same way round. Describe the transformation.', b: 'Enlargement, scale factor 2 ÷ 6 = 1/3, plus its centre. A smaller image is still called an enlargement; 4MA1 uses positive scale factors only.' },
      { n: 6, f: 'How do you find a translation vector from an object and its image?', b: 'Image minus object, for x and then y. Object minus image reverses both signs.' },
    ]),

    // 6 Statistics and probability
    ...sub(T6, 'graphical-representation-of-data-edexcel-igcse-maths', '6.1', [
      { n: 1, f: 'Pie chart: 12 of 45 people chose "walk". Find the sector angle.', b: 'Angle = (frequency ÷ total) × 360° = 12/45 × 360° = 96°.' },
      { n: 2, f: 'Bar charts and pictograms: key rules', b: 'Bar charts for categories have equal widths and gaps between bars. Pictograms need a key.' },
      { n: 3, f: 'How do you complete a two-way table?', b: 'Every row and column must add to its total. Fill the cell that is missing only one value first, then repeat.' },
      { n: 4, f: 'Histograms', b: 'No gaps, a continuous scale on the horizontal axis, and frequency density on the vertical axis. Area represents frequency.', u: true, src: SP },
      { n: 5, f: 'The class 20 < x ≤ 35 has frequency 24. Find its frequency density.', b: 'Class width = 35 − 20 = 15.\nFrequency density = frequency ÷ class width = 24 ÷ 15 = 1.6.', u: true },
      { n: 6, f: 'Cumulative frequency graphs', b: 'Plot running totals at upper class boundaries, starting at the lower boundary with 0; the graph never goes down.', u: true, src: SP },
    ]),
    ...sub(T6, 'statistical-measures-edexcel-igcse-maths', '6.2', [
      { n: 1, f: 'Mean, median and mode: one strength or weakness of each', b: 'Mean: uses every value; affected by extreme values.\nMedian: the middle value; not affected by extreme values.\nMode: the only average for non-numerical data; there can be more than one.', src: SP },
      { n: 2, f: 'Mode and modal class', b: 'Mode: a single value, for discrete data. Modal class: a class, for grouped data. Give the value or class, not its frequency.', src: SP },
      { n: 3, f: 'Estimate the mean: 0 < x ≤ 4 (frequency 3), 4 < x ≤ 8 (5), 8 < x ≤ 12 (2)', b: 'Midpoints 2, 6, 10.\n(3 × 2 + 5 × 6 + 2 × 10) ÷ 10 = 56 ÷ 10 = 5.6\nIt is an estimate, because midpoints replace the real values.' },
      { n: 4, f: 'The mean of five numbers is 12. Four of them are 10, 14, 9 and 15. Find the fifth.', b: 'Total = 5 × 12 = 60. The four add to 48, so the fifth is 12.' },
      { n: 5, f: 'Find the interquartile range of 2, 4, 5, 7, 8, 10, 13', b: 'n = 7. Lower quartile: (n + 1)/4 = 2nd value = 4. Upper quartile: 3(n + 1)/4 = 6th value = 10.\nIQR = 10 − 4 = 6', u: true },
      { n: 6, f: 'Range and interquartile range', b: 'Range uses the two extreme values. The IQR (upper quartile − lower quartile) measures the spread of the middle half and ignores extremes.', u: true },
    ]),
    ...sub(T6, 'probability-edexcel-igcse-maths', '6.3', [
      { n: 1, f: 'Outcome, event and sample space', b: 'Outcome: one possible result.\nEvent: one or more outcomes.\nSample space: the list of all outcomes.', src: SP },
      { n: 2, f: 'Mutually exclusive events', b: 'Events that cannot happen together. For them, P(A or B) = P(A) + P(B).', src: SP },
      { n: 3, f: 'Independent events', b: 'One does not affect the other. P(A and B) = P(A) × P(B).\nExample: P(A) = 0.6, P(B) = 0.3 gives P(A and B) = 0.18.', u: true },
      { n: 4, f: 'Relative frequency and expected frequency', b: 'Relative frequency = times the event occurs ÷ number of trials; it is an estimate that improves with more trials.\nExpected frequency = probability × number of trials: P(win) = 0.15 in 240 games gives 36.' },
      { n: 5, f: 'Two fair coins are thrown. Find P(at least one head).', b: 'Outcomes HH, HT, TH, TT; three contain a head: 3/4.\n(Or 1 − P(no heads) = 1 − 1/4.)' },
      { n: 6, f: 'A bag has 4 green and 6 yellow sweets. Two are taken without replacement. Find P(both green).', b: '4/10 × 3/9 = 12/90 = 2/15.\nOn the second pick the denominator and the green numerator each go down by one.', u: true },
    ]),
  ],
};
