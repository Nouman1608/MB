/**
 * D-438 -- flashcards for OCR GCSE (9–1) Mathematics J560
 * (Version 2.1 (August 2026), for first assessment in 2017).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 *   u: true     Upper tier: Higher tier only content, following the "Higher tier
 *               only" marks on Marlbridge's own J560 revision notes. Foundation
 *               candidates can hide these cards.
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs J560); origin 'revision-notes'.
 *
 * Plain text only (see types.ts). Unicode for maths.
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

const RATIO = 'ocr-gcse-mathematics-ratio-simplifying-dividing-ratios-and-fractions-and-revision-notes';

const T1 = 'number-operations-and-integers-ocr-gcse-maths';
const T2 = 'fractions-decimals-and-percentages-ocr-gcse-maths';
const T3 = 'indices-and-surds-ocr-gcse-maths';
const T4 = 'approximation-and-estimation-ocr-gcse-maths';
const T5 = 'ratio-proportion-and-rates-of-change-ocr-gcse-maths';
const T6 = 'algebra-ocr-gcse-maths';
const T7 = 'graphs-of-equations-and-functions-ocr-gcse-maths';
const T8 = 'basic-geometry-ocr-gcse-maths';
const T9 = 'congruence-and-similarity-ocr-gcse-maths';
const T10 = 'mensuration-ocr-gcse-maths';
const T11 = 'probability-ocr-gcse-maths';
const T12 = 'statistics-ocr-gcse-maths';

export const DECK_OCR_GCSE_MATHEMATICS: FlashcardDeck = {
  boardSlug: 'ocr',
  qualificationSlug: 'gcse',
  subjectSlug: 'mathematics',
  syllabusCode: 'J560',
  syllabusSeries: 'Version 2.1 (August 2026), for first assessment in 2017',
  tierScheme: 'foundation-higher',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  cards: [
    // 1 Number operations and integers
    ...sub(T1, 'calculations-with-integers-ocr-gcse-maths', '1.01', [
      { n: 1, f: 'Adding and subtracting negative numbers', b: 'Subtracting a negative is the same as adding: 5 − (−3) = 8.\nAdding a negative is the same as subtracting: 5 + (−3) = 2.' },
      { n: 2, f: 'Signs when multiplying or dividing', b: 'Same signs give a positive answer; different signs give a negative answer. With many factors, an even number of negatives gives a positive.' },
      { n: 3, f: 'Work out (−4) × (−9) + (−20) ÷ 5', b: 'Multiply and divide first: 36 + (−4) = 32.' },
      { n: 4, f: 'How do you check a whole-number calculation quickly?', b: 'Estimate first by rounding (18 × 23 ≈ 20 × 20 = 400, so 414 fits). Reverse a division by multiplying back and a subtraction by adding back.' },
    ]),
    ...sub(T1, 'whole-number-theory-ocr-gcse-maths', '1.02', [
      { n: 1, f: 'Prime number, and the primes under 20', b: 'A number with exactly two factors. 1 is neither prime nor composite.\nPrimes under 20: 2, 3, 5, 7, 11, 13, 17, 19.' },
      { n: 2, f: 'Factor compared with multiple', b: 'A factor divides exactly into the number, so it is smaller than or equal to it. A multiple is in the number’s times table, so it is larger than or equal to it.' },
      { n: 3, f: 'How do you write a number as a product of prime factors?', b: '1. Divide by the smallest prime that fits.\n2. Keep dividing until you reach 1.\n3. Collect repeats into powers and multiply back to check.\nExample: 150 = 2 × 3 × 5².' },
      { n: 4, f: 'HCF and LCM of 72 and 60 from prime factors', b: '72 = 2³ × 3², 60 = 2² × 3 × 5.\nHCF: shared primes, lowest powers = 2² × 3 = 12.\nLCM: all primes, highest powers = 2³ × 3² × 5 = 360.' },
      { n: 5, f: 'Divisibility tests for 3, 4 and 9', b: '3: the digit sum is a multiple of 3.\n4: the last two digits form a multiple of 4.\n9: the digit sum is a multiple of 9.' },
      { n: 6, f: 'Uniqueness of prime factorisation', b: 'Every whole number above 1 has exactly one prime factorisation, apart from the order of the factors. Different factor trees always give the same result.' },
    ]),
    ...sub(T1, 'combining-arithmetic-operations-ocr-gcse-maths', '1.03', [
      { n: 1, f: 'Priority of operations', b: '1. Brackets, including fraction bars and the line of a root sign.\n2. Powers, roots and reciprocals.\n3. × and ÷, from the left.\n4. + and −, from the left.' },
      { n: 2, f: 'Work out 20 − 12 ÷ 4 + 2', b: 'Divide first: 20 − 3 + 2, then left to right: 19.' },
      { n: 3, f: 'Work out 2 × (3 + 4)² − 5 × 6', b: '2 × 49 − 30 = 98 − 30 = 68' },
      { n: 4, f: 'Work out 5 + 2 × (√100 − 4)²', b: 'Root inside the bracket first: 5 + 2 × 6² = 5 + 2 × 36 = 5 + 72 = 77.' },
    ]),
    ...sub(T1, 'inverse-operations-ocr-gcse-maths', '1.04', [
      { n: 1, f: 'Inverse operations', b: 'Add ↔ subtract. Multiply ↔ divide. Square ↔ square root. Cube ↔ cube root.' },
      { n: 2, f: 'How do you solve a "think of a number" puzzle?', b: '1. Write the steps in the order given.\n2. Reverse the order.\n3. Replace each step with its inverse.\n4. Check by running the original steps forward.' },
      { n: 3, f: 'I square a positive number and add 11 to get 92. What was the number?', b: 'Reverse: 92 − 11 = 81, and √81 = 9. Check: 9² + 11 = 92.' },
      { n: 4, f: 'Use inverse operations to work out 17 × 25 mentally', b: '× 25 is the same as × 100 ÷ 4: 1700 ÷ 4 = 425.' },
    ]),

    // 2 Fractions, decimals and percentages
    ...sub(T2, 'fractions-ocr-gcse-maths', '2.01', [
      { n: 1, f: 'Convert a mixed number to an improper fraction: 5 2/3', b: '(whole × bottom + top)/bottom = (5 × 3 + 2)/3 = 17/3' },
      { n: 2, f: 'How do you add or subtract fractions?', b: 'Convert mixed numbers to improper fractions, rewrite over the lowest common denominator, combine the numerators only, then simplify.\nExample: 1/6 + 7/10 = 5/30 + 21/30 = 26/30 = 13/15.' },
      { n: 3, f: 'How do you divide by a fraction?', b: 'Keep the first fraction, change ÷ to ×, flip the second fraction.\nExample: −4/5 ÷ 2/15 = −4/5 × 15/2 = −6.' },
      { n: 4, f: 'Find 5/6 of £4.20', b: 'Divide by the bottom, multiply by the top: £4.20 ÷ 6 = £0.70, × 5 = £3.50.' },
      { n: 5, f: 'Write 18 minutes as a fraction of 1 hour 30 minutes', b: 'Same units first: 18/90 = 1/5.' },
    ]),
    ...sub(T2, 'decimal-fractions-ocr-gcse-maths', '2.02', [
      { n: 1, f: 'How do you multiply decimals by hand? Example: 1.2 × (−0.07)', b: 'Multiply as whole numbers, then give the answer as many decimal places as the two factors have in total.\n12 × 7 = 84; 3 decimal places → 0.084; different signs → −0.084.' },
      { n: 2, f: 'How do you divide by a decimal? Example: 0.195 ÷ 0.15', b: 'Multiply both numbers by the same power of 10 so the divisor is a whole number: 19.5 ÷ 15 = 1.3.' },
      { n: 3, f: 'Which fractions give terminating decimals?', b: 'In its simplest form, a fraction terminates only if its denominator has no prime factors other than 2 and 5. Otherwise the decimal recurs.' },
      { n: 4, f: 'Write 0.545454… as a fraction', b: 'x = 0.5454…, 100x = 54.5454…\n100x − x = 99x = 54\nx = 54/99 = 6/11', u: true },
      { n: 5, f: 'Shortcut for a pure recurring decimal', b: 'Write the repeating block over the same number of 9s, then simplify: one digit over 9, two digits over 99, three over 999. So 0.2525… = 25/99.', u: true },
    ]),
    ...sub(T2, 'percentages-ocr-gcse-maths', '2.03', [
      { n: 1, f: 'Percentage change', b: '(new − original) ÷ original × 100. Divide by the original, not the new value.\nExample: 150 → 135 is −15/150 × 100 = a 10% decrease.' },
      { n: 2, f: 'After a 12% decrease a price is £74.80. Find the original price.', b: 'Multiplier 0.88. Original = 74.80 ÷ 0.88 = £85.\nCheck: 85 × 0.88 = 74.80.' },
      { n: 3, f: 'Multipliers for +150% and −6%', b: '+150%: × 2.5 (1 + 1.5).\n−6%: × 0.94 (1 − 0.06).' },
      { n: 4, f: 'Simple interest on £600 at 4% per year for 3 years', b: 'Per year: 600 × 4 ÷ 100 = £24. For 3 years: £72. Total: £672. The same amount is added each year.' },
      { n: 5, f: 'Find 24% of 150 without a calculator', b: '10% = 15, so 20% = 30. 1% = 1.5, so 4% = 6. 24% = 30 + 6 = 36.' },
    ]),
    ...sub(T2, 'ordering-fractions-decimals-and-percentages-ocr-gcse-maths', '2.04', [
      { n: 1, f: 'How do you order fractions, decimals and percentages?', b: '1. Convert every value to a decimal.\n2. Pad to the same number of decimal places.\n3. Put negatives first, the most negative smallest.\n4. Write the answer in the original forms.' },
      { n: 2, f: 'Order smallest first: 0.4, 3/8, 38%, −1/2', b: 'As decimals: 0.400, 0.375, 0.380, −0.500.\nOrder: −1/2, 3/8, 38%, 0.4' },
      { n: 3, f: 'Which inequality symbols include the end value?', b: '≤ (less than or equal to) and ≥ (greater than or equal to) include it. < and > do not.' },
      { n: 4, f: 'List the integers n with −1 < n ≤ 3', b: '0, 1, 2, 3 (−1 is excluded, 3 is included).' },
    ]),

    // 3 Indices and surds
    ...sub(T3, 'powers-and-roots-ocr-gcse-maths', '3.01', [
      { n: 1, f: 'Laws of indices (same base)', b: 'aᵐ × aⁿ = aᵐ⁺ⁿ\naᵐ ÷ aⁿ = aᵐ⁻ⁿ\n(aᵐ)ⁿ = aᵐⁿ\na⁰ = 1 for any non-zero a.\nDifferent bases do not combine: 2³ × 3² = 8 × 9 = 72.' },
      { n: 2, f: 'Negative indices: 3⁻² and (2/3)⁻³', b: 'A negative index means the reciprocal, not a negative number.\n3⁻² = 1/9\n(2/3)⁻³ = (3/2)³ = 27/8' },
      { n: 3, f: 'Simplify (2a³)⁴', b: 'The power applies to the number and every letter: 2⁴ × a¹² = 16a¹².' },
      { n: 4, f: 'Fractional indices: 32^(2/5) and 8^(−1/3)', b: 'The denominator is the root, the numerator the power; a negative sign means reciprocal.\n32^(2/5) = (fifth root of 32)² = 2² = 4\n8^(−1/3) = 1/∛8 = 1/2', u: true },
      { n: 5, f: 'Estimate √200 to the nearest whole number', b: '14² = 196 and 15² = 225, so it lies between 14 and 15. 14.5² = 210.25 is above 200, so √200 ≈ 14.', u: true },
    ]),
    ...sub(T3, 'standard-form-ocr-gcse-maths', '3.02', [
      { n: 1, f: 'Standard form', b: 'A × 10ⁿ with 1 ≤ A < 10 and n an integer. Large numbers have a positive index; numbers between 0 and 1 have a negative index.' },
      { n: 2, f: 'Write 0.00943 and 45 000 000 in standard form', b: '0.00943 = 9.43 × 10⁻³ (point moves 3 places right).\n45 000 000 = 4.5 × 10⁷.' },
      { n: 3, f: 'Work out (3.2 × 10⁵) × (4 × 10⁻⁸)', b: 'Multiply the numbers and add the indices: 12.8 × 10⁻³. Tidy A into 1 to 10: 1.28 × 10⁻².' },
      { n: 4, f: 'Work out 4.5 × 10⁶ + 3.2 × 10⁵', b: 'Rewrite to the same power of 10: 4.5 × 10⁶ + 0.32 × 10⁶ = 4.82 × 10⁶. You do not add the indices when adding.' },
      { n: 5, f: 'How do you order numbers in standard form?', b: 'Compare the powers of 10 first; when the powers match, compare the A values. Write every number in standard form first.' },
    ]),
    ...sub(T3, 'exact-calculations-ocr-gcse-maths', '3.03', [
      { n: 1, f: 'Perimeter and area of a semicircle of diameter 8, in terms of π', b: 'Perimeter = half of 8π + diameter = 4π + 8.\nArea = ½ × π × 4² = 8π.' },
      { n: 2, f: 'Surd rules', b: '√a × √b = √(ab)\n√a ÷ √b = √(a/b)\n√a × √a = a\nRoots do not split over addition: √(9 + 16) = 5, but √9 + √16 = 7.', u: true },
      { n: 3, f: 'Simplify √75', b: 'Largest square factor is 25: √75 = √(25 × 3) = 5√3.', u: true },
      { n: 4, f: 'Rationalise 10/√5', b: 'Multiply top and bottom by √5: 10√5/5 = 2√5.', u: true },
      { n: 5, f: 'Rationalise 3/(√7 + 2)', b: 'Multiply top and bottom by the conjugate √7 − 2:\n3(√7 − 2)/(7 − 4) = 3(√7 − 2)/3 = √7 − 2.', u: true },
    ]),

    // 4 Approximation and estimation
    ...sub(T4, 'approximation-and-estimation-detail-ocr-gcse-maths', '4.01', [
      { n: 1, f: 'Significant figures: which zeros count?', b: 'Zeros before the first non-zero digit of a decimal are place holders and do not count. Zeros between other digits count. Keep final zeros: 0.0070463 to 2 s.f. is 0.0070.' },
      { n: 2, f: 'How do you estimate a calculation?', b: 'Round each number to 1 significant figure (use the nearest perfect square for a root), work out the simpler calculation, and write the answer with ≈. Show the rounded numbers.' },
      { n: 3, f: 'Error interval: x = 2400 to 2 significant figures', b: 'The unit of rounding is 100; half of it is 50.\n2350 ≤ x < 2450' },
      { n: 4, f: 'Error interval: x = 0.58 truncated to 2 decimal places', b: 'Lower limit is the value; upper limit is one whole unit more:\n0.58 ≤ x < 0.59' },
      { n: 5, f: 'Bounds of a calculation: which bounds give the maximum?', b: 'Add: UB + UB. Subtract: UB − LB.\nMultiply: UB × UB. Divide: UB ÷ LB.\n(For the minimum, swap every UB and LB.)', u: true },
      { n: 6, f: 'Error interval for a count: 200 cars to the nearest hundred', b: 'A count is discrete, so the largest possible value is a whole number: 150 ≤ n ≤ 249 (or 150 ≤ n < 250). For a measured 200 g it would be 150 ≤ m < 250.', u: true },
    ]),

    // 5 Ratio, proportion and rates of change
    ...sub(T5, 'calculations-with-ratio-ocr-gcse-maths', '5.01', [
      { n: 1, f: 'Ratio', b: 'Compares quantities, written a : b. Order matters. 2 : 5 is not 5 : 2.', src: RATIO },
      { n: 2, f: 'Ratio in simplest form', b: 'Whole numbers with no common factor other than 1.', src: RATIO },
      { n: 3, f: 'Ratio in the form 1 : n', b: 'The first part is 1; n can be a decimal or fraction. Divide both parts by the first: 25 : 40 = 1 : 1.6.', src: RATIO },
      { n: 4, f: 'Share £510 in the ratio 1 : 2 : 3', b: 'Total parts 6; one part = 510 ÷ 6 = £85.\nShares: £85, £170, £255. Check: they add to £510.' },
      { n: 5, f: 'Two shares are in the ratio 5 : 2 and differ by 36. Find them.', b: 'The difference is 3 parts, so one part = 36 ÷ 3 = 12.\nShares: 60 and 24.' },
      { n: 6, f: 'Size check for a ratio answer', b: 'The larger ratio number must get the larger share. If it does not, you have swapped the order.', src: RATIO },
    ]),
    ...sub(T5, 'direct-and-inverse-proportion-ocr-gcse-maths', '5.02', [
      { n: 1, f: 'Direct proportion', b: 'y = kx, so y ÷ x is constant. The graph is a straight line through the origin. Doubling x doubles y.' },
      { n: 2, f: 'Inverse proportion', b: 'y = k/x, so x × y is constant. The graph is a curve that never meets the axes. Doubling x halves y.' },
      { n: 3, f: '8 painters take 6 days. How long do 12 painters take, at the same rate?', b: 'Inverse proportion: the job is 8 × 6 = 48 painter-days. 48 ÷ 12 = 4 days.' },
      { n: 4, f: 'If x doubles, what happens to y when y ∝ x², y ∝ x³ or y ∝ 1/x²?', b: 'y ∝ x²: y × 4.\ny ∝ x³: y × 8.\ny ∝ 1/x²: y ÷ 4.', u: true },
      { n: 5, f: 'y is inversely proportional to √x, and y = 4 when x = 9. Find x when y = 3.', b: 'y = k/√x, so 4 = k/3 and k = 12.\n3 = 12/√x, so √x = 4 and x = 16.', u: true },
    ]),
    ...sub(T5, 'discrete-growth-and-decay-ocr-gcse-maths', '5.03', [
      { n: 1, f: 'Simple interest compared with compound interest', b: 'Simple: P × r × n / 100, the same amount added every year.\nCompound: start × multiplierⁿ, so the amount added grows each year.' },
      { n: 2, f: 'A value falls by 10% and then by 20%. What is the overall change?', b: 'Multiply the multipliers: 0.9 × 0.8 = 0.72, a 28% fall overall (not 30%).' },
      { n: 3, f: 'After a 20% rise a price is £360. Find the original price.', b: 'Divide by the multiplier: 360 ÷ 1.2 = £300.' },
      { n: 4, f: 'Growth and decay formula A = A₀ × rⁿ', b: 'A₀ is the starting amount, r the multiplier per period and n the number of periods. r > 1 is growth; 0 < r < 1 is decay.', u: true },
      { n: 5, f: 'V = 900 × 0.9ⁿ. What does it describe, and what is V when n = 3?', b: 'A start of 900 falling by 10% each period.\nV = 900 × 0.9³ = 900 × 0.729 = 656.1', u: true },
    ]),

    // 6 Algebra
    ...sub(T6, 'algebraic-expressions-ocr-gcse-maths', '6.01', [
      { n: 1, f: 'Like terms', b: 'Terms with the same letters to the same powers. 4ab and −ba are like terms; 3x and 3x² are not. Keep the sign with its term: 6x + 2y − x + 4y = 5x + 6y.' },
      { n: 2, f: 'Expand and simplify (x + 5)(x − 3)', b: 'Four products: x² − 3x + 5x − 15 = x² + 2x − 15.' },
      { n: 3, f: '(a + b)² and (a + b)(a − b)', b: '(a + b)² = a² + 2ab + b² (not a² + b²).\n(a + b)(a − b) = a² − b².' },
      { n: 4, f: 'How do you factorise x² + bx + c?', b: 'Find two numbers with product c and sum b, then write (x + m)(x + n). If c is negative the numbers have different signs. Expand to check.' },
      { n: 5, f: 'Factorise fully 3x² − 27', b: 'Common factor first: 3(x² − 9). Then the difference of two squares: 3(x − 3)(x + 3).' },
      { n: 6, f: 'Prove that the sum of two consecutive odd numbers is a multiple of 4', b: '(2n + 1) + (2n + 3) = 4n + 4 = 4(n + 1), which is 4 times an integer. Examples are never a proof.', u: true },
      { n: 7, f: 'Factorise 8x² + 10x − 3', b: 'ac = −24; two numbers with product −24 and sum 10: 12 and −2.\n8x² + 12x − 2x − 3 = 4x(2x + 3) − 1(2x + 3) = (4x − 1)(2x + 3).', u: true },
      { n: 8, f: 'Write x² − 8x + 3 in the form (x + p)² + q', b: 'Halve −8 to get −4: (x − 4)² − 16 + 3 = (x − 4)² − 13.', u: true },
      { n: 9, f: 'Simplify (x² + x − 12)/(x² − 16)', b: 'Factorise: (x + 4)(x − 3) / ((x − 4)(x + 4)). Cancel the factor (x + 4): (x − 3)/(x − 4). Cancel whole factors, never single terms.', u: true },
    ]),
    ...sub(T6, 'algebraic-formulae-ocr-gcse-maths', '6.02', [
      { n: 1, f: 'Expression, formula and equation', b: 'Expression: no equals sign. Formula: links real quantities, such as v = u + at. Equation: true only for certain values; you solve it.' },
      { n: 2, f: 'Substitute a = −2, b = −5 into 3a² − b', b: 'Use brackets: 3(−2)² − (−5) = 3(4) + 5 = 17. Note (−2)² = 4 but −2² = −4.' },
      { n: 3, f: 'How do you change the subject when it appears twice?', b: 'Clear fractions, expand, collect every term with the new subject on one side, factorise it out, then divide.' },
      { n: 4, f: 'Kinematics formulae for constant acceleration', b: 'v = u + at\ns = ut + ½at²\nv² = u² + 2as\nu initial velocity, v final velocity, a acceleration, s displacement, t time.' },
      { n: 5, f: 'Kinematics: what do "starts from rest" and "stops" tell you?', b: 'Starts from rest: u = 0. Stops: v = 0. Choose the formula with exactly one unknown.' },
    ]),
    ...sub(T6, 'algebraic-equations-ocr-gcse-maths', '6.03', [
      { n: 1, f: 'Solve 5x + 2 = 3x + 14', b: 'Subtract 3x: 2x + 2 = 14. Subtract 2: 2x = 12. x = 6. Check in the original equation.' },
      { n: 2, f: 'Solve (x − 2)(x + 5) = 0', b: 'Each bracket equals 0: x = 2 or x = −5. The roots have the opposite signs to the numbers in the brackets.' },
      { n: 3, f: 'Why is "x² = 9x, so x = 9" wrong?', b: 'Dividing by x loses a root. Rearrange and factorise: x² − 9x = 0, x(x − 9) = 0, so x = 0 or x = 9.' },
      { n: 4, f: 'How do you solve linear simultaneous equations by elimination?', b: '1. Multiply so one unknown has equal coefficients.\n2. Same signs: subtract; opposite signs: add.\n3. Solve, substitute into an original equation.\n4. Check in the other equation.' },
      { n: 5, f: 'Quadratic formula and the discriminant', b: 'x = (−b ± √(b² − 4ac)) / (2a) for ax² + bx + c = 0.\nb² − 4ac > 0: two real solutions; = 0: one repeated; < 0: no real solutions.', u: true },
      { n: 6, f: 'Solve x² + 2x − 7 = 0 by completing the square', b: '(x + 1)² − 1 − 7 = 0, so (x + 1)² = 8.\nx = −1 ± √8 = −1 ± 2√2', u: true },
      { n: 7, f: 'Solve y = 9 − x and xy = 20 simultaneously', b: 'Substitute: x(9 − x) = 20, so x² − 9x + 20 = 0, (x − 4)(x − 5) = 0.\nx = 4, y = 5 or x = 5, y = 4. Find each partner from the linear equation.', u: true },
      { n: 8, f: 'Sign-change method for f(x) = 0', b: 'If f(a) and f(b) have opposite signs, a root lies between a and b, provided f is continuous on that interval. Narrow it by decimal search or interval bisection.', u: true },
    ]),
    ...sub(T6, 'algebraic-inequalities-ocr-gcse-maths', '6.04', [
      { n: 1, f: 'Solve 3(x − 2) ≥ 5x + 4', b: '3x − 6 ≥ 5x + 4\n−2x ≥ 10\nx ≤ −5 (dividing by −2 reverses the sign)' },
      { n: 2, f: 'Solve −5 < 2x − 1 ≤ 9', b: 'Do the same to all three parts. Add 1: −4 < 2x ≤ 10. Divide by 2: −2 < x ≤ 5.' },
      { n: 3, f: 'Number line: open or closed circle?', b: 'Open circle for < or > (boundary not included). Closed circle for ≤ or ≥ (boundary included).' },
      { n: 4, f: 'Solve x² − x − 6 > 0', b: '(x − 3)(x + 2) = 0 gives critical values −2 and 3. A U-shaped curve is above the axis outside the roots: x < −2 or x > 3 (two separate inequalities).', u: true },
      { n: 5, f: 'Set notation: what does {x | x ≥ 3} mean?', b: 'The set of all x such that x ≥ 3. The bar means "such that".', u: true },
      { n: 6, f: 'How do you show an inequality as a region on a graph?', b: 'Draw the boundary line: solid for ≤ or ≥, dashed for < or >. Test a point not on the line, such as (0, 0), to find which side satisfies the inequality.', u: true },
    ]),
    ...sub(T6, 'language-of-functions-ocr-gcse-maths', '6.05', [
      { n: 1, f: 'The function machine y = 2x + 3: input −1, and the input for output 11', b: 'Input −1: 2(−1) + 3 = 1.\nOutput 11: 2x + 3 = 11, so x = 4.' },
      { n: 2, f: 'How do you find the inverse of a function machine?', b: 'Reverse the order of the steps and replace each with its opposite.\ny = (x − 4)/5 (− 4, then ÷ 5) has inverse × 5, then + 4: x = 5y + 4.', u: true },
      { n: 3, f: 'Composite functions: machine C multiplies by 4, machine D subtracts 3', b: 'C then D: 4x − 3 (input 6 gives 21).\nD then C: 4(x − 3) (input 6 gives 12).\nThe order changes the result.', u: true },
      { n: 4, f: 'What happens when you reverse a squaring step?', b: 'You get both a positive and a negative square root.', u: true },
    ]),
    ...sub(T6, 'sequences-ocr-gcse-maths', '6.06', [
      { n: 1, f: 'Term-to-term rule compared with position-to-term rule', b: 'Term-to-term: builds each term from the one before (needs a starting term).\nPosition-to-term: a formula for the nth term.' },
      { n: 2, f: 'nth term of 11, 18, 25, 32, …', b: 'd = 7, and c = first term − d = 11 − 7 = 4. nth term = 7n + 4.' },
      { n: 3, f: 'nth term of 30, 26, 22, 18, …', b: 'd = −4, c = 30 − (−4) = 34. nth term = 34 − 4n. Its first negative term is the 9th: 34 − 36 = −2.' },
      { n: 4, f: 'Fibonacci-type sequence with 3rd term 11 and 5th term 31. Find it.', b: 'Terms a, b, a + b, a + 2b, 2a + 3b. So a + b = 11 and 2a + 3b = 31, giving b = 9, a = 2.\nSequence: 2, 9, 11, 20, 31.' },
      { n: 5, f: 'Arithmetic compared with geometric sequences', b: 'Arithmetic: add the same amount d each time (3, 6, 9).\nGeometric: multiply by the same ratio r each time (3, 6, 12). Find r by dividing a term by the one before.' },
      { n: 6, f: 'Find the nth term of 7, 12, 19, 28, 39, …', b: 'Second difference 2, so a = 1. Subtract n²: 6, 8, 10, 12, 14 = 2n + 4.\nnth term = n² + 2n + 4.', u: true },
      { n: 7, f: 'xₙ₊₁ compared with xₙ + 1', b: 'xₙ₊₁ is the next term after xₙ. xₙ + 1 is the current term plus one.\nExample: if xₙ₊₁ = 2xₙ − 3 and x₃ = 21, then x₂ = (21 + 3)/2 = 12.', u: true },
    ]),

    // 7 Graphs of equations and functions
    ...sub(T7, 'graphs-of-equations-and-functions-detail-ocr-gcse-maths', '7.01', [
      { n: 1, f: 'The four quadrants', b: 'Anticlockwise from top right: 1st (+, +), 2nd (−, +), 3rd (−, −), 4th (+, −). On the x-axis y = 0; on the y-axis x = 0.' },
      { n: 2, f: 'Shapes of y = x², y = x³ and y = 1/x', b: 'y = x²: U-shape, minimum (0, 0), symmetrical about the y-axis.\ny = x³: rising S through (0, 0), in quadrants 1 and 3.\ny = 1/x: two branches in quadrants 1 and 3, touching neither axis.' },
      { n: 3, f: 'How do you find the turning point of a quadratic that factorises?', b: 'Find the roots; the turning point’s x-value is their mean, then substitute for y.\nExample: y = (x + 6)(x − 4): roots −6 and 4, x = −1, y = −25, so (−1, −25).' },
      { n: 4, f: 'Turning point of y = (x + p)² + q', b: '(−p, q). Example: x² + 6x + 7 = (x + 3)² − 2, minimum (−3, −2).', u: true },
      { n: 5, f: 'Key facts about y = kˣ for k > 0', b: 'Passes through (0, 1) since k⁰ = 1. Always above the x-axis, with asymptote y = 0. k > 1: growth; 0 < k < 1: decay.', u: true },
      { n: 6, f: 'Graphs of sin x, cos x and tan x (degrees)', b: 'sin x: starts at (0, 0), max 1 at 90°, period 360°.\ncos x: starts at (0, 1), min −1 at 180°, period 360°.\ntan x: through (0, 0), period 180°, asymptotes at 90° and 270°.', u: true },
      { n: 7, f: 'How many solutions does sin x = 0.4 have for 0° ≤ x ≤ 720°?', b: 'For 0 < c < 1 the line y = c crosses the sine curve twice in each 360°, so 4 solutions.', u: true },
      { n: 8, f: 'Equation of a circle centre the origin', b: 'x² + y² = r², radius r = √(the number on the right). x² + y² = 49 has radius 7.', u: true },
    ]),
    ...sub(T7, 'straight-line-graphs-ocr-gcse-maths', '7.02', [
      { n: 1, f: 'Reading m and c from 2y = 6x + 1', b: 'Rearrange to y = mx + c first: y = 3x + 1/2. Gradient 3, y-intercept (0, 1/2).' },
      { n: 2, f: 'Equation of the line with gradient m through (x₁, y₁)', b: 'y − y₁ = m(x − x₁), then tidy up. Or substitute the point into y = mx + c to find c.' },
      { n: 3, f: 'Gradient and intercept in context: V = 40 + 15t litres after t minutes', b: 'Gradient 15: the rate, 15 litres added per minute.\nIntercept 40: the starting value, 40 litres at the start.' },
      { n: 4, f: 'Parallel lines', b: 'Parallel lines have equal gradients. A line parallel to y = 4x − 3 is y = 4x + c; use a given point to find c.' },
      { n: 5, f: 'Perpendicular gradients', b: 'm₁ × m₂ = −1: flip the fraction and change the sign. 3 becomes −1/3; −2/7 becomes 7/2.', u: true },
      { n: 6, f: 'How do you find the tangent to x² + y² = r² at (a, b)?', b: '1. Radius gradient = b/a.\n2. Tangent gradient = −a/b (negative reciprocal).\n3. Use y − b = m(x − a).', u: true },
    ]),
    ...sub(T7, 'transformations-of-curves-and-their-equations-ocr-gcse-maths', '7.03', [
      { n: 1, f: 'Adding a to the whole equation: y = (original) + a', b: 'Translation a units up (a units down if it is − a).', u: true },
      { n: 2, f: 'Replacing x by (x + a) in an equation', b: 'Translation a units left: the opposite way to the sign. Replacing x by (x − a) moves it a units right.', u: true },
      { n: 3, f: 'y = −(original) and replacing x by −x', b: 'y = −(original): reflection in the x-axis (every y changes sign).\nx replaced by −x: reflection in the y-axis (every x changes sign).', u: true },
      { n: 4, f: 'y = (x + 2)² − 1: turning point and y-intercept', b: 'y = x² moved 2 left and 1 down: turning point (−2, −1). y-intercept (0, 3).', u: true },
      { n: 5, f: 'y = 2ˣ − 3: asymptote and y-intercept', b: 'y = 2ˣ moved 3 down: asymptote y = −3, y-intercept (0, −2).', u: true },
    ]),
    ...sub(T7, 'interpreting-graphs-ocr-gcse-maths', '7.04', [
      { n: 1, f: 'Distance-time graph features', b: 'Up-sloping line: constant speed away. Horizontal: stationary. Down-sloping: constant speed back. Steeper means faster. Gradient = speed.' },
      { n: 2, f: 'Average speed for a trip out and back', b: 'Total distance travelled ÷ total time. The distance travelled is not 0 just because you return to the start.\nExample: 30 km out and 30 km back in 6 h: 60 ÷ 6 = 10 km/h.' },
      { n: 3, f: 'Conversion graphs: currency compared with Celsius to Fahrenheit', b: 'Currency: a straight line through the origin; gradient = exchange rate.\nTemperature: F = 1.8C + 32, a straight line not through the origin, so not a proportion graph.' },
      { n: 4, f: 'Velocity-time graph: what do the gradient and area give?', b: 'Gradient = acceleration (m/s²); a negative gradient is deceleration.\nArea under the graph = distance travelled.', u: true },
      { n: 5, f: 'Chord gradient compared with tangent gradient', b: 'Chord (joins two points on the curve): average rate of change.\nTangent (touches at one point): instantaneous rate of change; it is an estimate.', u: true },
      { n: 6, f: 'Estimating area under a curve with trapezia: over or under?', b: 'If the curve bends so the trapezia fall short of it, the estimate is too small; if the trapezia lie above the curve, it is too big.', u: true },
    ]),

    // 8 Basic geometry
    ...sub(T8, 'conventions-notation-and-terms-ocr-gcse-maths', '8.01', [
      { n: 1, f: 'Acute, obtuse and reflex angles', b: 'Acute: under 90°. Right: 90°. Obtuse: over 90° but under 180°. Reflex: over 180° but under 360°.' },
      { n: 2, f: 'Notation: angle ABC and side a in triangle ABC', b: 'In angle ABC the vertex is the middle letter, B. Side a is opposite angle A, so a = BC.' },
      { n: 3, f: 'How are parallel and perpendicular lines marked?', b: 'Parallel: matching arrows. Perpendicular (meet at 90°): a small square at the corner.' },
      { n: 4, f: 'Midpoint of (a, b) and (c, d)', b: '((a + c)/2, (b + d)/2)' },
      { n: 5, f: 'Rhombus compared with kite', b: 'Rhombus: four equal sides, opposite sides parallel.\nKite: two pairs of adjacent equal sides.' },
    ]),
    ...sub(T8, 'ruler-and-compass-constructions-ocr-gcse-maths', '8.02', [
      { n: 1, f: 'How do you construct the perpendicular bisector of AB?', b: '1. Set compasses wider than half of AB.\n2. Draw arcs above and below AB from A, then from B with the same radius.\n3. Join the two crossing points. Keep the arcs.' },
      { n: 2, f: 'How do you construct the bisector of an angle?', b: '1. Arc from the vertex cutting both arms at P and Q.\n2. Equal arcs from P and from Q crossing at R.\n3. Join the vertex to R.' },
      { n: 3, f: 'Locus of points equidistant from two points; from two intersecting lines', b: 'From two points: the perpendicular bisector of the line joining them.\nFrom two lines: the bisector of the angle between them.' },
      { n: 4, f: 'Locus of points a fixed distance from a line segment', b: 'Two parallel lines joined by two semicircles at the ends.' },
      { n: 5, f: 'Shortest distance from a point to a line', b: 'The perpendicular distance. Any slanted route is the hypotenuse of a right-angled triangle, so it is longer.' },
      { n: 6, f: 'Which angles can you construct with ruler and compasses?', b: '60° (equilateral triangle), 30° (bisect 60°), 90° (perpendicular) and 45° (bisect 90°).' },
    ]),
    ...sub(T8, 'angles-ocr-gcse-maths', '8.03', [
      { n: 1, f: 'Angles at a point, on a straight line, and vertically opposite', b: 'At a point: sum to 360°. On a straight line: sum to 180°. Vertically opposite angles are equal.' },
      { n: 2, f: 'Angles with parallel lines', b: 'Alternate angles are equal. Corresponding angles are equal. Co-interior angles sum to 180°.' },
      { n: 3, f: 'Exterior angle of a triangle', b: 'Equals the sum of the two opposite interior angles. Example: angles 47° and 68° give an exterior angle of 115° at the third vertex.' },
      { n: 4, f: 'Alternate angles are 4k + 6 and 6k − 34. Find the angle.', b: 'Alternate angles are equal: 4k + 6 = 6k − 34, so 40 = 2k and k = 20. The angle is 86°.' },
    ]),
    ...sub(T8, 'properties-of-polygons-ocr-gcse-maths', '8.04', [
      { n: 1, f: 'Interior and exterior angles of polygons', b: 'Interior angles of an n-sided polygon sum to (n − 2) × 180°. Exterior angles of any polygon sum to 360°. Interior + exterior = 180° at each vertex.' },
      { n: 2, f: 'Regular polygon: exterior angle and number of sides', b: 'Exterior angle = 360° ÷ n, so n = 360° ÷ exterior angle. Interior angle = 180° − exterior angle.' },
      { n: 3, f: 'The interior angles of a polygon sum to 2340°. How many sides?', b: '(n − 2) × 180 = 2340, so n − 2 = 13 and n = 15.' },
      { n: 4, f: 'Diagonals of a parallelogram, rhombus and kite', b: 'Parallelogram: bisect each other.\nRhombus: bisect each other at right angles (and bisect the angles).\nKite: perpendicular.' },
      { n: 5, f: 'Symmetry of a parallelogram and a rectangle', b: 'Parallelogram: no lines of symmetry, rotation symmetry of order 2.\nRectangle: 2 lines of symmetry, order 2.\nRegular n-gon: n lines, order n.' },
    ]),
    ...sub(T8, 'circles-ocr-gcse-maths', '8.05', [
      { n: 1, f: 'Chord, tangent, arc, sector and segment', b: 'Chord: line joining two points on the circumference. Tangent: touches the circle at one point. Arc: part of the circumference. Sector: region between two radii and an arc. Segment: region between a chord and an arc.' },
      { n: 2, f: 'Circle theorems: angle at the centre and angle in a semicircle', b: 'The angle at the centre is twice the angle at the circumference standing on the same arc. The angle in a semicircle is 90°.', u: true },
      { n: 3, f: 'Circle theorems: same segment and cyclic quadrilateral', b: 'Angles in the same segment are equal. Opposite angles of a cyclic quadrilateral add to 180°.', u: true },
      { n: 4, f: 'Circle theorems: tangent and chord', b: 'A radius meets a tangent at 90°. The perpendicular from the centre bisects a chord (and a radius that bisects a chord is perpendicular to it).', u: true },
      { n: 5, f: 'Alternate segment theorem', b: 'The angle between a tangent and a chord equals the angle in the alternate segment (on the other side of the chord).', u: true },
      { n: 6, f: 'A circle has radius 5 cm and a chord of 8 cm. How far is the chord from the centre?', b: 'The perpendicular from the centre bisects the chord: half-chord 4 cm. Distance = √(25 − 16) = 3 cm.', u: true },
    ]),
    ...sub(T8, 'three-dimensional-shapes-ocr-gcse-maths', '8.06', [
      { n: 1, f: 'Faces, edges and vertices: triangular prism and square-based pyramid', b: 'Triangular prism: 5 faces, 9 edges, 6 vertices.\nSquare-based pyramid: 5 faces, 8 edges, 5 vertices.' },
      { n: 2, f: 'Prism and pyramid with an n-sided base: faces, edges, vertices', b: 'Prism: n + 2 faces, 3n edges, 2n vertices.\nPyramid: n + 1 faces, 2n edges, n + 1 vertices.' },
      { n: 3, f: 'Check for counting faces, vertices and edges of a flat-faced solid', b: 'faces + vertices − edges = 2' },
      { n: 4, f: 'Plan compared with elevation', b: 'Plan: the view from above. Elevation: the view from the front or side. A standing cylinder has a circle as its plan and a rectangle as its front elevation.' },
    ]),

    // 9 Congruence and similarity
    ...sub(T9, 'plane-isometric-transformations-ocr-gcse-maths', '9.01', [
      { n: 1, f: 'What must you give to describe a transformation fully?', b: 'Reflection: the mirror line. Rotation: centre, angle and direction. Translation: a column vector. Reflection, rotation and translation keep lengths and angles, so the image is congruent.' },
      { n: 2, f: 'Reflection in y = x and in y = −x', b: 'y = x: swap the coordinates, (x, y) → (y, x).\ny = −x: swap and change both signs, (x, y) → (−y, −x).' },
      { n: 3, f: 'Rotation about the origin through 90° clockwise and 90° anticlockwise', b: '90° clockwise: (x, y) → (y, −x).\n90° anticlockwise: (x, y) → (−y, x).\n180°: (x, y) → (−x, −y).' },
      { n: 4, f: 'A translation maps (7, 2) to (3, 6). Find the column vector.', b: 'vector = image − object: top 3 − 7 = −4, bottom 6 − 2 = 4, so (−4 over 4). The inverse translation is (4 over −4).' },
      { n: 5, f: 'Invariant points of a reflection, rotation and translation', b: 'Reflection: every point on the mirror line. Rotation: the centre. Translation: none.', u: true },
      { n: 6, f: 'What single transformation is a reflection in two parallel lines?', b: 'A translation, at right angles to the lines, of twice the gap between them, from the first line towards the second.', u: true },
    ]),
    ...sub(T9, 'congruence-ocr-gcse-maths', '9.02', [
      { n: 1, f: 'Congruent shapes', b: 'Exactly the same shape and size: one can be moved onto the other by translation, rotation or reflection. (Similar shapes have the same shape but may differ in size.)' },
      { n: 2, f: 'The four conditions for congruent triangles', b: 'SSS: three pairs of sides.\nSAS: two sides and the included angle.\nASA: two angles and a corresponding side.\nRHS: right angle, hypotenuse and one other side.' },
      { n: 3, f: 'Which conditions do not prove congruence?', b: 'AAA (same shape, size may differ) and SSA, two sides with a non-included angle (can give two different triangles).' },
      { n: 4, f: 'How do you set out a congruence proof?', b: '1. Name the triangles with matching letters.\n2. State three equal pairs, each with a reason.\n3. Name the condition and say the triangles are congruent.\n4. State what follows.' },
      { n: 5, f: 'An isosceles triangle has apex angle 56°. Find each base angle.', b: 'Base angles are equal: (180° − 56°) ÷ 2 = 62°.' },
    ]),
    ...sub(T9, 'plane-vector-geometry-ocr-gcse-maths', '9.03', [
      { n: 1, f: 'Column vector from A to B', b: 'Top: x of B − x of A. Bottom: y of B − y of A. The top number is right (+) or left (−); the bottom is up (+) or down (−).' },
      { n: 2, f: 'Vector rules: BA, AB + BC, and AB in terms of OA and OB', b: 'BA = −AB (same size, opposite direction).\nAB + BC = AC.\nAB = OB − OA.' },
      { n: 3, f: 'When are two vectors parallel?', b: 'When one is a number times the other: a = k × b. A negative k means opposite directions.' },
      { n: 4, f: 'How do you prove points are collinear with vectors?', b: 'Show that two vectors from a shared point are multiples of each other, and state the shared point.', u: true },
      { n: 5, f: 'P divides AB in the ratio m : n. Write AP in terms of AB.', b: 'AP = m/(m + n) × AB', u: true },
    ]),
    ...sub(T9, 'similarity-ocr-gcse-maths', '9.04', [
      { n: 1, f: 'Tests for similar triangles', b: 'Any one: all three pairs of sides in the same ratio; two pairs of sides in the same ratio with equal included angles; or two pairs of equal angles (the third must then be equal too).' },
      { n: 2, f: 'How do you find a missing length in similar shapes?', b: 'Find the scale factor from a pair of matching sides (new ÷ original). Multiply to go from smaller to larger, divide to go from larger to smaller. Check the size makes sense.' },
      { n: 3, f: 'Describing an enlargement fully, and finding its centre', b: 'Give the word enlargement, the scale factor and the centre. To find the centre, draw lines through pairs of matching vertices: they meet at the centre.' },
      { n: 4, f: 'Enlarge (8, 6) with centre (2, 2) and scale factor −1/2', b: 'Steps from the centre: right 6, up 4. Multiply by −1/2: left 3, down 2. Image: (−1, 0). A negative scale factor puts the image on the other side of the centre, turned 180°.', u: true },
      { n: 5, f: 'Lengths in the ratio 3 : 5. Ratio of areas and of volumes?', b: 'Areas: 3² : 5² = 9 : 25.\nVolumes: 3³ : 5³ = 27 : 125.\nGeneral: length factor k gives area factor k² and volume factor k³.', u: true },
    ]),

    // 10 Mensuration
    ...sub(T10, 'units-and-measurement-ocr-gcse-maths', '10.01', [
      { n: 1, f: 'Area and volume conversions from 1 m = 100 cm', b: '1 m² = 100² = 10 000 cm².\n1 m³ = 100³ = 1 000 000 cm³.\n1 litre = 1000 cm³; 1 m³ = 1000 litres.' },
      { n: 2, f: 'Convert 4 h 45 min to hours, and 1.4 h to hours and minutes', b: '45 ÷ 60 = 0.75, so 4.75 h.\n0.4 × 60 = 24, so 1 h 24 min.' },
      { n: 3, f: 'Convert 8 m/s to km/h', b: '× 3.6: 8 × 3.6 = 28.8 km/h. (m/s to km/h is × 3.6; km/h to m/s is ÷ 3.6.)' },
      { n: 4, f: 'Density and pressure formulae and unit links', b: 'Density = mass ÷ volume; pressure = force ÷ area.\n1 g/cm³ = 1000 kg/m³.\nPressure in N/m² and N/cm² differ by a factor of 10 000.' },
      { n: 5, f: 'A map has scale 1 : 2000. What real length is 8 cm on the map?', b: '8 × 2000 = 16 000 cm = 160 m.' },
      { n: 6, f: 'Bearings and back bearings', b: 'Measured from north, clockwise, with three figures (such as 047°). Back bearing: add or subtract 180°. A bearing of 305° from X to Y gives 125° from Y to X.' },
    ]),
    ...sub(T10, 'perimeter-calculations-ocr-gcse-maths', '10.02', [
      { n: 1, f: 'Circumference of a circle', b: 'C = πd = 2πr' },
      { n: 2, f: 'Arc length for angle θ and radius r', b: 'Arc length = (θ/360) × 2πr' },
      { n: 3, f: 'Perimeter of a sector and of a semicircle', b: 'Sector: arc length + 2r.\nSemicircle: πr + 2r.' },
      { n: 4, f: 'Perimeter of a rectangle with a corner notch cut out', b: 'The same as the outer rectangle: the two inner edges of the notch replace the two missing outer lengths.' },
    ]),
    ...sub(T10, 'area-calculations-ocr-gcse-maths', '10.03', [
      { n: 1, f: 'Area of a triangle, parallelogram and trapezium', b: 'Triangle: ½ × base × perpendicular height.\nParallelogram: base × perpendicular height.\nTrapezium: ½ × (a + b) × h, where a and b are the parallel sides.' },
      { n: 2, f: 'Sector area, and the area of a sector of radius 5 cm and angle 288°', b: 'Sector area = (θ/360) × πr².\n288/360 = 4/5, so 4/5 × 25π = 20π ≈ 62.8 cm².' },
      { n: 3, f: 'Area of a ring with outer radius 7 cm and inner radius 3 cm', b: 'π × 7² − π × 3² = 49π − 9π = 40π ≈ 126 cm². It is not π(7 − 3)².' },
      { n: 4, f: 'A trapezium has area 66 cm² and parallel sides 8 cm and 14 cm. Find its height.', b: '66 = ½ × (8 + 14) × h = 11h, so h = 6 cm.' },
      { n: 5, f: 'Area of a triangle from two sides and the included angle', b: 'Area = ½ab sin C, where C is the angle between sides a and b.\nExample: 7 cm and 12 cm with 30°: ½ × 7 × 12 × 0.5 = 21 cm².', u: true },
    ]),
    ...sub(T10, 'volume-and-surface-area-calculations-ocr-gcse-maths', '10.04', [
      { n: 1, f: 'Volume and surface area of a prism', b: 'Volume = area of cross-section × length.\nSurface area = 2 × cross-section + perimeter of cross-section × length.' },
      { n: 2, f: 'Cylinder of radius r and height h', b: 'Volume = πr²h.\nCurved surface = 2πrh; total surface area = 2πr² + 2πrh.' },
      { n: 3, f: 'Cone: volume, curved surface and slant height', b: 'Volume = ⅓πr²h (perpendicular height). Curved surface = πrl (slant height). l = √(r² + h²).\nExample: r = 6, h = 8 gives l = 10 and curved area 60π cm².' },
      { n: 4, f: 'Sphere and solid hemisphere', b: 'Sphere: V = (4/3)πr³, surface area 4πr².\nSolid hemisphere: V = (2/3)πr³, total surface area 3πr² (curved part 2πr²).' },
      { n: 5, f: 'Volume of a pyramid', b: '⅓ × base area × perpendicular height.\nExample: 6 cm by 5 cm base, height 9 cm: ⅓ × 30 × 9 = 90 cm³.' },
      { n: 6, f: 'Volume units: 1 cm³ in ml, and 1000 cm³', b: '1 cm³ = 1 ml; 1000 cm³ = 1 litre. Convert all lengths to one unit before multiplying.' },
    ]),
    ...sub(T10, 'triangle-mensuration-ocr-gcse-maths', '10.05', [
      { n: 1, f: 'Pythagoras: finding the hypotenuse compared with a shorter side', b: 'a² + b² = c², c the hypotenuse (opposite the right angle).\nHypotenuse: add the squares, then √ (5 and 12 give 13).\nShorter side: subtract the squares, then √ (10 and 6 give 8).' },
      { n: 2, f: 'Right-angled trigonometry ratios', b: 'sin θ = opp/hyp, cos θ = adj/hyp, tan θ = opp/adj. Unknown side on top: multiply; on the bottom: divide. For an angle use sin⁻¹, cos⁻¹ or tan⁻¹.' },
      { n: 3, f: 'Exact values of sin, cos and tan for 0°, 30°, 45°, 60°, 90°', b: 'sin: 0, 1/2, √2/2, √3/2, 1\ncos: 1, √3/2, √2/2, 1/2, 0\ntan (0° to 60°): 0, √3/3, 1, √3' },
      { n: 4, f: 'Angles of elevation and depression', b: 'Both are measured from the horizontal: elevation looking up, depression looking down.' },
      { n: 5, f: 'Space diagonal of an 8 × 6 × 5 cuboid', b: 'Base diagonal: √(64 + 36) = 10.\nSpace diagonal: √(10² + 5²) = √125 ≈ 11.2. Keep exact values until the end.', u: true },
      { n: 6, f: 'Sine rule', b: 'a/sin A = b/sin B = c/sin C (or sin A/a = … for angles). Use it when you know a side and its opposite angle. For an angle, check whether 180° minus the answer also fits.', u: true },
      { n: 7, f: 'Cosine rule', b: 'a² = b² + c² − 2bc cos A, for two sides and the included angle.\ncos A = (b² + c² − a²)/(2bc), for an angle from three sides. A negative cosine means an obtuse angle.', u: true },
    ]),

    // 11 Probability
    ...sub(T11, 'basic-probability-and-experiments-ocr-gcse-maths', '11.01', [
      { n: 1, f: 'The probability scale', b: '0 is impossible, 0.5 evens, 1 certain. A probability is never below 0 or above 1. P(not A) = 1 − P(A).' },
      { n: 2, f: 'Relative frequency', b: 'Number of times the outcome happened ÷ number of trials. It estimates the probability, and gets more reliable with more trials.' },
      { n: 3, f: 'Expected number of outcomes', b: 'Probability × number of trials. It is an average, so it can be a decimal; the real result often differs.' },
      { n: 4, f: 'Random compared with fair', b: 'Random: the next outcome cannot be predicted. Fair (unbiased): every outcome equally likely. A biased dice is still random.' },
      { n: 5, f: 'Two fair dice: P(double) and P(total 7)', b: 'There are 36 equally likely pairs.\nP(double) = 6/36 = 1/6.\nP(total 7) = 6/36 = 1/6.' },
      { n: 6, f: 'Frequency tree: how do you fill in missing numbers?', b: 'Put the total in the first box. The numbers on the branches from one box add up to that box, so find missing numbers by subtracting.' },
    ]),
    ...sub(T11, 'combined-events-and-probability-diagrams-ocr-gcse-maths', '11.02', [
      { n: 1, f: 'Sample space for two coins', b: 'HH, HT, TH, TT: 4 equally likely outcomes. HT and TH are different outcomes.' },
      { n: 2, f: 'Addition laws for P(A or B)', b: 'Mutually exclusive: P(A or B) = P(A) + P(B).\nGeneral: P(A or B) = P(A) + P(B) − P(A and B).' },
      { n: 3, f: 'Mutually exclusive compared with independent', b: 'Mutually exclusive: cannot happen together, so P(A and B) = 0.\nIndependent: one does not change the probability of the other, so P(A and B) = P(A) × P(B).' },
      { n: 4, f: '3 red and 5 blue discs; two taken without replacement. P(both red) and P(at least one red)?', b: 'P(both red) = 3/8 × 2/7 = 6/56 = 3/28.\nP(no red) = 5/8 × 4/7 = 20/56 = 5/14, so P(at least one red) = 1 − 5/14 = 9/14.' },
      { n: 5, f: 'How do you fill a two-circle Venn diagram?', b: '1. Fill the overlap first.\n2. Subtract it from each set total for the "only" parts.\n3. Subtract all three from the group total for the outside.\n4. Check all four regions add to the total.' },
      { n: 6, f: 'Product rule: how many 4-digit PINs with no repeated digits?', b: 'Multiply the choices at each stage, reducing by 1 when repeats are not allowed: 10 × 9 × 8 × 7 = 5040.', u: true },
      { n: 7, f: 'Conditional probability formula', b: 'P(A given B) = P(A and B) ÷ P(B). The denominator is the group named after "given".\nExample: P(B) = 0.35, P(A and B) = 0.14 → 0.14 ÷ 0.35 = 0.4.', u: true },
      { n: 8, f: 'How can you test whether A and B are independent?', b: 'Check whether P(A and B) = P(A) × P(B), or equivalently P(A given B) = P(A).', u: true },
    ]),

    // 12 Statistics
    ...sub(T12, 'sampling-ocr-gcse-maths', '12.01', [
      { n: 1, f: 'Population compared with sample', b: 'Population: everything the study is about. Sample: a smaller group taken from it, used to estimate the population.' },
      { n: 2, f: 'Simple random sample, and how to take one', b: 'Every member has an equal chance of selection. Number everyone in the sampling frame, generate random numbers in that range, select the matching members and skip repeats.' },
      { n: 3, f: 'Sources of bias in a sample', b: 'Sampling at only one place or time; a sampling frame that misses people; volunteers only; leading questions. A very small sample is unreliable, which is a separate issue from bias.' },
      { n: 4, f: 'How do you estimate a population figure from a sample?', b: 'Proportion in the sample × population size, and say it is an estimate. A larger unbiased sample is more reliable.' },
    ]),
    ...sub(T12, 'interpreting-and-representing-data-ocr-gcse-maths', '12.02', [
      { n: 1, f: 'Pie chart: 24 pupils, 5 chose walking. What angle?', b: '360 ÷ 24 = 15° per pupil, so 5 × 15 = 75°. Check the angles add to 360°.' },
      { n: 2, f: 'Bar chart compared with histogram', b: 'Bar chart: gaps, shows categories or single values, height = frequency.\nHistogram: no gaps, continuous grouped data, area = frequency.' },
      { n: 3, f: 'Time series: trend and seasonal variation', b: 'Trend: the long-term direction (rising, falling, steady).\nSeasonal variation: a pattern that repeats over a fixed period, such as a peak in the same quarter each year.' },
      { n: 4, f: 'Multiple bar chart compared with composite bar chart', b: 'Multiple: bars for each group side by side. Composite: parts stacked in one bar, each section = top edge − bottom edge.' },
      { n: 5, f: 'Frequency density', b: 'Frequency ÷ class width; frequency = density × width.\nExample: 4 < x ≤ 10 with frequency 27 has density 27 ÷ 6 = 4.5.', u: true },
      { n: 6, f: 'Cumulative frequency graph: plotting and reading', b: 'Plot running totals at the upper class boundary, starting at (lowest boundary, 0). Read the median at n/2, the lower quartile at n/4 and the upper quartile at 3n/4.', u: true },
    ]),
    ...sub(T12, 'analysing-data-ocr-gcse-maths', '12.03', [
      { n: 1, f: 'Mean, median, mode and range', b: 'Mean: total ÷ count. Median: the middle value in order, at position (n + 1)/2. Mode: the most common value. Range: largest − smallest.' },
      { n: 2, f: 'When is the median a better average than the mean?', b: 'When the data contain extreme values or are skewed: an extreme value moves the mean a lot but the median little.' },
      { n: 3, f: 'How do you estimate the mean from grouped data?', b: 'Multiply each class midpoint by its frequency, add the products, and divide by the total frequency. It is an estimate because the actual values are not known.' },
      { n: 4, f: 'Interquartile range and box plots', b: 'IQR = Q3 − Q1, the spread of the middle half, not affected by extreme values. A box plot shows minimum, Q1, median, Q3 and maximum.', u: true },
      { n: 5, f: 'Correlation, causation, interpolation and extrapolation', b: 'Correlation alone does not show that one variable causes the other. Interpolation (inside the data range) is usually safer than extrapolation (beyond it).' },
      { n: 6, f: 'How can a graph misrepresent data?', b: 'A vertical axis that does not start at zero, uneven scale steps, missing labels, bars of unequal width or 3D effects, pictogram icons of different sizes, or a selected time period.' },
    ]),
  ],
};
