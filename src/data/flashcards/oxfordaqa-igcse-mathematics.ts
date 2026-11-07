/**
 * D-444 -- flashcards for OxfordAQA International GCSE Mathematics 9260
 * (For exams May/June 2018 onwards, Version 5.1).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * (the specification's own numbering, e.g. 3.1.1) and are permanent (browser
 * progress is keyed by them): add a new card with the next unused n, never
 * renumber.
 *
 *   u: true     Upper tier. 9260 is tiered Core / Extension; a card is marked
 *               when Marlbridge's own 9260 revision notes label its content
 *               "Extension only". Core candidates
 *               can hide these cards.
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 9260, or a term in the page's
 *               key-terms table); origin 'revision-notes'.
 *
 * Plain text only (see types.ts). Unicode for maths. Column vectors are written
 * (x, y); a 2 × 2 matrix is written with a slash between rows, (a b / c d),
 * as on the 9260 matrices notes.
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

const P = 'oxfordaqa-igcse-mathematics-';
const ORD = `${P}ordering-the-four-operations-primes-powers-and-revision-notes`;
const RND = `${P}rounding-estimation-bounds-and-fraction-decimal-revision-notes`;
const ALG = `${P}algebra-manipulation-revision-notes`;
const SEQ = `${P}sequences-nth-terms-and-quadratic-sequences-revision-notes`;
const CIRC = `${P}circle-properties-circle-theorems-and-geometrical-proof-revision-notes`;
const SYM3 = `${P}symmetry-congruence-similarity-and-3d-solids-with-revision-notes`;
const VEC = `${P}vectors-and-vector-geometry-revision-notes`;
const DATA = `${P}data-types-tables-and-averages-revision-notes`;
const INTP = `${P}interpreting-graphs-comparing-distributions-and-revision-notes`;
const PROB = `${P}probability-scale-relative-frequency-expected-revision-notes`;
const SAMP = `${P}sample-spaces-mutually-exclusive-events-and-venn-revision-notes`;
const IND = `${P}independent-events-tree-diagrams-and-conditional-revision-notes`;

const T1 = 'number-oxfordaqa-igcse-maths';
const T2 = 'algebra-oxfordaqa-igcse-maths';
const T3 = 'geometry-and-measures-oxfordaqa-igcse-maths';
const T4 = 'statistics-and-probability-oxfordaqa-igcse-maths';

export const DECK_OXFORDAQA_IGCSE_MATHEMATICS: FlashcardDeck = {
  boardSlug: 'oxfordaqa',
  qualificationSlug: 'igcse',
  subjectSlug: 'mathematics',
  syllabusCode: '9260',
  syllabusSeries: 'For exams May/June 2018 onwards, Version 5.1',
  tierScheme: 'core-extension',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'sajawal-zahid', reviewedOn: '2026-11-05' },
  cards: [
    // 1 Number
    ...sub(T1, 'structure-and-calculation-oxfordaqa-igcse-maths', '3.1.1', [
      { n: 1, f: 'Prime number', b: 'A number with exactly two factors, 1 and itself. 1 is not prime; the only even prime is 2. Primes up to 30: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.', src: ORD },
      { n: 2, f: 'Find the HCF and LCM of 84 and 90', b: '84 = 2² × 3 × 7 and 90 = 2 × 3² × 5.\nHCF (shared primes, lower powers) = 2 × 3 = 6.\nLCM (every prime, higher powers) = 2² × 3² × 5 × 7 = 1260.\nCheck: 6 × 1260 = 84 × 90.' },
      { n: 3, f: 'A lamp flashes every 14 s and a buzzer every 20 s. They start together. When do they next coincide?', b: '"Next together" means LCM. 14 = 2 × 7, 20 = 2² × 5.\nLCM = 2² × 5 × 7 = 140 seconds (2 minutes 20 seconds).' },
      { n: 4, f: 'Work out 20 − 2 × 3², and compare −2² with (−2)²', b: 'Indices first: 3² = 9, then 2 × 9 = 18, then 20 − 18 = 2.\n−2² = −4 (square, then negate). (−2)² = 4.' },
      { n: 5, f: 'Roots of negative numbers: ∛(−125) and √(−25)', b: '∛(−125) = −5, because (−5)³ = −125. Odd roots of negatives exist.\n√(−25) is not a real number. Even roots of negatives do not exist.' },
      { n: 6, f: 'Simplify 4a³ × 6a⁻⁷, with a positive index', b: 'Multiply the numbers: 4 × 6 = 24. Add the indices: 3 + (−7) = −4.\n24a⁻⁴ = 24/a⁴' },
      { n: 7, f: 'Evaluate 32^(2/5) and 4^(−3/2)', b: '32^(2/5): fifth root of 32 is 2, and 2² = 4.\n4^(−3/2) = 1/4^(3/2) = 1/(√4)³ = 1/8.\nRoot first, then power; a negative power is a reciprocal.', u: true },
      { n: 8, f: 'Simplify √45 + √20', b: 'Take out the largest square factor: √45 = 3√5 and √20 = 2√5.\n3√5 + 2√5 = 5√5', u: true },
      { n: 9, f: 'Rationalise 8/(4 + √3)', b: 'Multiply top and bottom by the conjugate 4 − √3. Denominator: 16 − 3 = 13.\n8(4 − √3)/13 = (32 − 8√3)/13', u: true },
      { n: 10, f: 'Calculate (6 × 10⁴) × (5 × 10⁻⁷) in standard form', b: '6 × 5 = 30 and 10⁴ × 10⁻⁷ = 10⁻³, giving 30 × 10⁻³.\nTidy so the first number is from 1 up to 10: 3 × 10⁻².' },
      { n: 11, f: '30 pupils study Spanish or French. 18 study Spanish and 16 study French. How many study both?', b: 'n(A ∪ B) = n(A) + n(B) − n(A ∩ B), so 30 = 18 + 16 − both.\nBoth = 34 − 30 = 4.' },
      { n: 12, f: 'Error interval', b: 'The range of true values that round to a given value: value ± half the rounding unit, with ≤ at the bottom and < at the top.\nExample: 530 to the nearest 10 gives 525 ≤ x < 535.', src: RND },
      { n: 13, f: 'Round 0.003951 to 2 significant figures', b: 'The first significant figures are 3 and 9; the next digit is 5, so round up: 0.0040. The trailing zero shows the accuracy and must be written.' },
      { n: 14, f: 'Estimate 9.7 × 0.52 ÷ 4.9', b: 'Round each number to 1 significant figure and show it: 10 × 0.5 ÷ 5 = 1.' },
      { n: 15, f: 'Bounds: how do you find the upper bound of a − b and of a ÷ b?', b: 'Use the upper bound of a with the lower bound of b in both.\nExample: 155 ÷ 0.55 is the upper bound of p ÷ q when p = 150 (nearest 10) and q = 0.6 (1 d.p.).', u: true },
    ]),
    ...sub(T1, 'fractions-decimal-and-percentages-oxfordaqa-igcse-maths', '3.1.2', [
      { n: 1, f: 'Which fractions give terminating decimals?', b: 'A fraction in lowest terms terminates if its denominator has only 2 and 5 as prime factors (5/16 = 0.3125). Otherwise it recurs (1/6 = 0.16̇).' },
      { n: 2, f: 'Write 0.1̇2̇ (0.1212…) as a fraction', b: 'x = 0.1212…, 100x = 12.1212…\nSubtract: 99x = 12, so x = 12/99 = 4/33.', u: true },
      { n: 3, f: 'Write 0.4̇5̇ (0.4545…) as a fraction', b: '99x = 45, so x = 45/99 = 5/11.\nTwo repeating digits give a denominator of 99.', u: true },
      { n: 4, f: 'Find 3/7 of 91', b: '91 ÷ 7 × 3 = 13 × 3 = 39.' },
      { n: 5, f: 'Write 85 cm as a percentage of 2.5 m', b: 'Same units first: 2.5 m = 250 cm.\n85/250 = 17/50 = 34%.' },
      { n: 6, f: 'Multiplier for an increase or decrease of r%', b: 'Increase: 1 + r/100 (8% up → × 1.08).\nDecrease: 1 − r/100 (8% down → × 0.92).\nNew amount = original × multiplier.' },
      { n: 7, f: 'A bike costs £70 in a shop and £91 online. Find the percentage change.', b: '(change ÷ original) × 100 = (91 − 70)/70 × 100 = 30% increase.' },
      { n: 8, f: 'Simple interest on £1200 at 4% a year for 3 years', b: 'Simple interest = P × r/100 × t = 1200 × 0.04 × 3 = £144.\nIt is the same every year, unlike compound interest.' },
      { n: 9, f: 'Simple and compound interest: the difference', b: 'Simple interest uses the original sum every year. Compound interest is worked out on the balance at the start of each year, so the interest grows. They are equal after one year.' },
      { n: 10, f: 'After a 16% increase a price is £1566. Find the original price.', b: 'Divide by the multiplier: 1566 ÷ 1.16 = £1350.\nCheck: 1350 × 1.16 = 1566.', u: true },
      { n: 11, f: 'Compound interest formula', b: 'Value = P(1 + r/100)ⁿ\nP = amount invested, r = rate (%), n = years.\nExample: £2000 at 5% for 4 years = 2000 × 1.05⁴ = £2431.01.', u: true },
    ]),
    ...sub(T1, 'ratio-and-proportion-oxfordaqa-igcse-maths', '3.1.3', [
      { n: 1, f: 'Write 1.5 m : 60 cm in simplest form', b: 'Same unit first: 150 : 60. Divide by 30: 5 : 2. Leave the units off.' },
      { n: 2, f: 'Share 1350 in the ratio 4 : 5 : 6', b: 'Parts = 15; one part = 1350 ÷ 15 = 90.\nShares: 360, 450, 540 (they add to 1350).' },
      { n: 3, f: 'Boys to girls is 7 : 5 and there are 45 girls. How many boys?', b: 'One part = 45 ÷ 5 = 9.\nBoys = 7 × 9 = 63.' },
      { n: 4, f: 'Combine P : Q = 3 : 5 and Q : R = 10 : 7', b: 'Make Q the same in both: P : Q = 6 : 10.\nP : Q : R = 6 : 10 : 7' },
      { n: 5, f: 'Best buy: 3 kg for 7.50 or 5 kg for 12.00?', b: 'Cost per kg: 7.50 ÷ 3 = 2.50; 12.00 ÷ 5 = 2.40.\nThe 5 kg pack is the better buy.' },
      { n: 6, f: 'How can you test a table for direct or inverse proportion?', b: 'Direct: y ÷ x is the same for every pair (graph is a straight line through the origin).\nInverse: x × y is the same for every pair.' },
      { n: 7, f: '4 machines take 18 hours to do a job. How long do 6 machines take?', b: 'Inverse proportion: total = 4 × 18 = 72 machine-hours.\n72 ÷ 6 = 12 hours (assuming every machine works at the same rate).' },
      { n: 8, f: 'A value rises by 10% then falls by 10%. What is the overall change?', b: 'Multiply the multipliers: 1.1 × 0.9 = 0.99, a 1% decrease, not zero.' },
      { n: 9, f: 'Exponential growth and decay model', b: 'Amount = start × kᵗ, with k = 1 + r/100 for growth or k = 1 − r/100 for decay.\nExample: 6400 litres losing 10% a day: 6400 × 0.9³ = 4665.6 litres after 3 days.', u: true },
      { n: 10, f: 'A 250 g sample loses 20% of its mass each hour. After how many whole hours is it first below 100 g?', b: 'Mass = 250 × 0.8ᵗ. Try whole values:\nt = 4: 102.4 g (not yet). t = 5: 81.92 g.\nAnswer: 5 hours.', u: true },
      { n: 11, f: 'A train covers 210 km in 2 h 20 min. Find its speed.', b: '2 h 20 min = 2⅓ h = 7/3 h (not 2.2 h).\n210 ÷ 7/3 = 210 × 3/7 = 90 km/h' },
    ]),

    // 2 Algebra
    ...sub(T2, 'notation-and-manipulation-oxfordaqa-igcse-maths', '3.2.1', [
      { n: 1, f: 'Expression, equation and identity', b: 'Expression: no equals sign (3x + 2).\nEquation: true only for specific values.\nIdentity: true for all values.', src: ALG },
      { n: 2, f: 'Expand (x − 2)(x + 3)', b: 'x² + 3x − 2x − 6 = x² + x − 6' },
      { n: 3, f: 'Factorise x² + 5x + 6, and x² − 9', b: 'Two numbers with product 6 and sum 5: (x + 2)(x + 3).\nDifference of two squares: (x − 3)(x + 3).' },
      { n: 4, f: 'Simplify x/3 + x/4', b: 'Common denominator 12: 4x/12 + 3x/12 = 7x/12.' },
      { n: 5, f: 'Make r the subject of A = πr²', b: 'Divide by π: r² = A/π.\nSquare root: r = √(A/π).' },
      { n: 6, f: 'Why can x²y³ and x³y² not be collected as like terms?', b: 'Like terms need identical powers of every letter; here the powers of x and y differ. (Multiplying them is fine: x²y³ × x³y² = x⁵y⁵.)' },
      { n: 7, f: 'Factorise 2x² + 5x + 3', b: 'ac = 6; two numbers with product 6 and sum 5: 2 and 3.\n2x² + 2x + 3x + 3 = 2x(x + 1) + 3(x + 1) = (2x + 3)(x + 1)', u: true },
      { n: 8, f: 'Simplify (2x² + 3x)/(4x² − 9)', b: 'Factorise: x(2x + 3) / ((2x − 3)(2x + 3)).\nCancel the common factor (2x + 3): x/(2x − 3)', u: true },
      { n: 9, f: 'Changing the subject when it appears twice: make x the subject of ax + b = cx + d', b: 'Collect the x terms: ax − cx = d − b.\nFactorise: x(a − c) = d − b.\nDivide: x = (d − b)/(a − c).', u: true },
      { n: 10, f: 'Expand (x + 1)(x + 2)(x + 3)', b: 'First two brackets: x² + 3x + 2.\nThen × (x + 3): x³ + 6x² + 11x + 6.', u: true },
      { n: 11, f: 'Prove that the sum of two consecutive odd numbers is a multiple of 4', b: 'Write them as 2n + 1 and 2n + 3, where n is an integer.\nSum = 4n + 4 = 4(n + 1). n + 1 is an integer, so the sum is a multiple of 4.', u: true },
    ]),
    ...sub(T2, 'functions-graphs-and-calculus-oxfordaqa-igcse-maths', '3.2.2', [
      { n: 1, f: 'Function machine: write "add 3 then multiply by 5" and "multiply by 5 then add 3"', b: 'Add 3 then multiply by 5: 5(x + 3).\nMultiply by 5 then add 3: 5x + 3.\nTo find an input from an output, undo the steps in reverse order.' },
      { n: 2, f: 'Domain and range of a function', b: 'Domain: the allowed inputs (1/(x − 4) needs x ≠ 4).\nRange: the resulting outputs.', u: true },
      { n: 3, f: 'f(x) = 2x + 3 and g(x) = x² − 5. Find fg(x).', b: 'fg(x): do g first, then f.\nfg(x) = 2(x² − 5) + 3 = 2x² − 7', u: true },
      { n: 4, f: 'h(x) = (3x − 4)/5. Find h⁻¹(x).', b: 'y = (3x − 4)/5, so 5y = 3x − 4 and x = (5y + 4)/3.\nh⁻¹(x) = (5x + 4)/3. Check: h(h⁻¹(x)) = x.', u: true },
      { n: 5, f: 'Find the gradient and y-intercept of 3x + 4y = 12', b: 'Rearrange to y = mx + c: 4y = −3x + 12, so y = −(3/4)x + 3.\nGradient −3/4, y-intercept 3.' },
      { n: 6, f: 'Gradient of a line perpendicular to a line with gradient m', b: '−1/m, because m₁ × m₂ = −1.\nExample: perpendicular to gradient −7/3 is gradient 3/7.', u: true },
      { n: 7, f: 'Find the equation of the line through (−3, −4) and (5, 8)', b: 'Gradient = (8 − (−4)) ÷ (5 − (−3)) = 12/8 = 3/2.\nSubstitute (5, 8): 8 = 7.5 + c, so c = 1/2.\ny = (3/2)x + 1/2', u: true },
      { n: 8, f: 'Find the roots and turning point of y = x² + 6x + 8', b: '(x + 2)(x + 4) = 0: roots −2 and −4.\nAxis of symmetry halfway: x = −3.\ny = 9 − 18 + 8 = −1, so the minimum is (−3, −1). y-intercept 8.' },
      { n: 9, f: 'Turning point from completed square form: x² − 10x + 21', b: '(x − 5)² − 25 + 21 = (x − 5)² − 4.\ny = (x − p)² + q has a minimum at (p, q), so (5, −4).', u: true },
      { n: 10, f: 'Shapes of y = x³ and y = 1/x', b: 'y = x³: S-shaped, rising, through the origin, no turning point.\ny = 1/x: two branches in quadrants 1 and 3, never touching the axes (x ≠ 0).' },
      { n: 11, f: 'Graph of y = kˣ (k > 0)', b: 'Always passes through (0, 1) and stays above the x-axis. Rising if k > 1, falling if 0 < k < 1.', u: true },
      { n: 12, f: 'Solve sin x = 0.8 for 0° ≤ x ≤ 180°', b: 'sin⁻¹ 0.8 = 53.1°. The second angle is 180° − 53.1° = 126.9°.\nsin and cos have period 360°; tan has period 180°.', u: true },
      { n: 13, f: 'A water bill line passes through (0, 18) and (20, 66), cost in £ against cubic metres. Interpret it.', b: 'Gradient = 48/20 = 2.4: £2.40 per cubic metre.\nIntercept 18: a fixed charge of £18.' },
      { n: 14, f: 'Velocity–time graph: what does the gradient show?', b: 'Gradient: acceleration (a downward slope means slowing down; a horizontal line means constant velocity).' },
      { n: 15, f: 'A lift goes from rest to 3 m/s in 4 s, holds 3 m/s for 10 s, then stops in 2 s. Find the distance.', b: 'Area of the trapezium: parallel sides 10 s and 16 s, height 3 m/s.\n½ × (10 + 16) × 3 = 39 m', u: true },
      { n: 16, f: 'y is proportional to x³, and y = 40 when x = 2. Find y when x = 3.', b: 'y = kx³: 40 = 8k, so k = 5.\ny = 5 × 27 = 135', u: true },
      { n: 17, f: 'Differentiate y = 4x³ − x² + 6', b: 'Multiply by the power, then reduce the power by 1; a constant gives 0.\ndy/dx = 12x² − 2x', u: true },
      { n: 18, f: 'Find the equation of the tangent to y = x² − 4x + 7 at x = 3', b: 'Point: y = 9 − 12 + 7 = 4, so (3, 4).\nGradient: dy/dx = 2x − 4 = 2.\ny − 4 = 2(x − 3), so y = 2x − 2.', u: true },
      { n: 19, f: 'How do you classify a stationary point using the sign of dy/dx?', b: 'Find dy/dx just before and just after.\n+ then −: maximum.\n− then +: minimum.\nSame sign both sides: point of inflection (for example y = x³ at the origin).', u: true },
      { n: 20, f: 'Velocity–time graph: what does the area under it show?', b: 'The distance travelled. Split the area into triangles, rectangles and trapezia; for a curved graph, estimate the area.', u: true },
    ]),
    ...sub(T2, 'solving-equations-and-inequalities-oxfordaqa-igcse-maths', '3.2.3', [
      { n: 1, f: 'Solve 2(3x − 1) − (x − 7) = 20', b: '6x − 2 − x + 7 = 20 (the minus changes both signs in the second bracket)\n5x + 5 = 20, so x = 3' },
      { n: 2, f: 'Solve (x + 3)/4 = (2x − 1)/3', b: 'Multiply both sides by 12: 3(x + 3) = 4(2x − 1)\n3x + 9 = 8x − 4\n13 = 5x, so x = 13/5 = 2.6' },
      { n: 3, f: 'How do you solve f(x) = g(x) with a graph?', b: 'Draw y = f(x) and y = g(x). The solutions are the x-coordinates of the crossing points. A graph gives approximate values; algebra gives exact ones.' },
      { n: 4, f: 'Three consecutive integers add up to 87. Find them.', b: 'x + (x + 1) + (x + 2) = 87\n3x + 3 = 87, so x = 28.\nThe integers are 28, 29 and 30.' },
      { n: 5, f: 'Solve 2x + 3y = 12 and 3x − y = 7', b: 'Multiply the second by 3: 9x − 3y = 21.\nAdd to the first: 11x = 33, so x = 3.\nThen 6 + 3y = 12, so y = 2. Check: 9 − 2 = 7.' },
      { n: 6, f: 'Simultaneous linear equations: what if both letters vanish?', b: 'A false statement (for example 0 = 5): the lines are parallel, so there is no solution.\nA true statement (0 = 0): it is the same line, with infinitely many solutions.' },
      { n: 7, f: 'Solve y = x² − 3x and y = x + 5', b: 'x² − 3x = x + 5, so x² − 4x − 5 = 0 and (x − 5)(x + 1) = 0.\nFind y from the linear equation: (5, 10) and (−1, 4).', u: true },
      { n: 8, f: 'Solve 2x² − 8x = 0', b: 'Factorise: 2x(x − 4) = 0, so x = 0 or x = 4.\nDo not divide by x, or you lose x = 0.' },
      { n: 9, f: 'Solve 3x² + 11x − 4 = 0', b: 'ac = −12; 12 and −1 have product −12 and sum 11.\n3x² + 12x − x − 4 = 3x(x + 4) − (x + 4) = (x + 4)(3x − 1) = 0\nx = −4 or x = 1/3', u: true },
      { n: 10, f: 'Solve 2x² + 5x − 1 = 0, giving answers to 3 significant figures', b: 'x = (−b ± √(b² − 4ac))/(2a), with b² − 4ac = 25 + 8 = 33.\nx = (−5 ± √33)/4, so x = 0.186 or x = −2.69.', u: true },
      { n: 11, f: 'Solve x² − 6x + 2 = 0 by completing the square', b: '(x − 3)² − 9 + 2 = 0, so (x − 3)² = 7.\nx = 3 ± √7 (5.65 or 0.35 to 2 d.p.)', u: true },
      { n: 12, f: 'Solve 6 − 4x ≥ 18', b: '−4x ≥ 12. Dividing by a negative reverses the sign: x ≤ −3.' },
      { n: 13, f: 'Number lines: open and closed circles', b: 'Open circle: < or >, the boundary is not included.\nClosed circle: ≤ or ≥, the boundary is included.\nThe integers in −1 ≤ x < 4 are −1, 0, 1, 2, 3.' },
      { n: 14, f: 'Solve x² + x − 12 > 0', b: '(x + 4)(x − 3) > 0; critical values −4 and 3.\n"> 0" means outside the roots: x < −4 or x > 3.\n("< 0" would be between the roots.)', u: true },
      { n: 15, f: 'Inequalities on a graph: line style and which side', b: 'Solid line for ≤ or ≥; dashed line for < or >.\nTest a point not on the line, such as (0, 0): if it satisfies the inequality, that side is the region.', u: true },
      { n: 16, f: 'Turn into symbols: "at least", "at most", "from 3 to 8 inclusive"', b: 'At least: ≥.\nAt most: ≤.\nFrom 3 to 8 inclusive: 3 ≤ x ≤ 8.' },
    ]),
    ...sub(T2, 'sequences-oxfordaqa-igcse-maths', '3.2.4', [
      { n: 1, f: 'Term-to-term rule', b: 'A rule that builds each term from the previous one. It needs a starting term.', src: SEQ },
      { n: 2, f: 'Position-to-term rule', b: 'A formula giving a term from its position, also called the nth term.', src: SEQ },
      { n: 3, f: 'Start at 4 and use the rule "multiply by 3, then subtract 2". Write the first three terms.', b: '4, then 3 × 4 − 2 = 10, then 3 × 10 − 2 = 28.\nTerms: 4, 10, 28' },
      { n: 4, f: 'Find the nth term of 7, 10, 13, 16, … and of 30, 25, 20, 15, …', b: 'd = 3, constant 7 − 3 = 4: 3n + 4.\nd = −5, constant 30 + 5 = 35: 35 − 5n.' },
      { n: 5, f: 'The 7th term of an arithmetic sequence is 40 and the common difference is −3. Find the nth term.', b: 'nth term = −3n + c. Use the 7th term: −21 + c = 40, so c = 61.\nnth term = 61 − 3n (check: n = 7 gives 40).' },
      { n: 6, f: 'Is 99 a term of the sequence with nth term 4n − 1? Is 60?', b: '4n − 1 = 99 gives n = 25, a whole number: yes, the 25th term.\n4n − 1 = 60 gives n = 15.25: no.' },
      { n: 7, f: 'Triangular numbers and their nth term', b: '1, 3, 6, 10, 15, 21, …\nnth term = n(n + 1)/2. The differences go up by 1 each time.' },
      { n: 8, f: 'Quadratic sequence: how is the second difference linked to the nth term an² + bn + c?', b: 'Second difference = 2a, so a = half the second difference. Then subtract an² from the sequence and find the linear nth term bn + c of what is left.', u: true },
      { n: 9, f: 'Find the nth term of 6, 15, 28, 45, 66, …', b: 'First differences 9, 13, 17, 21; second difference 4, so a = 2.\nSequence − 2n²: 4, 7, 10, 13, 16, which is 3n + 1.\nnth term = 2n² + 3n + 1', u: true },
    ]),

    // 3 Geometry and measures
    ...sub(T3, 'properties-and-constructions-oxfordaqa-igcse-maths', '3.3.1', [
      { n: 1, f: 'Angles on parallel lines: corresponding, alternate and interior', b: 'Corresponding angles are equal.\nAlternate angles are equal.\nInterior (co-interior) angles add up to 180°.\nUse these full names as reasons.' },
      { n: 2, f: 'Exterior angle of a triangle', b: 'It equals the sum of the two interior opposite angles.\nExample: angles of 48° and 77° give an exterior angle of 125° at the third vertex.' },
      { n: 3, f: 'A regular polygon has interior angle 165°. How many sides?', b: 'Exterior angle = 180° − 165° = 15°.\nn = 360° ÷ 15° = 24 sides.\n(Sum of interior angles of any polygon = (n − 2) × 180°.)' },
      { n: 4, f: 'Rhombus and kite: how do they differ?', b: 'Rhombus: four equal sides; opposite angles equal; diagonals bisect each other at 90°.\nKite: two pairs of adjacent equal sides; one pair of equal opposite angles; diagonals cross at 90°.' },
      { n: 5, f: 'Sector and segment', b: 'Sector: two radii and an arc.\nSegment: a chord and an arc.', src: CIRC },
      { n: 6, f: 'Circle theorems: angle at the centre and angle in a semicircle', b: 'The angle subtended by an arc at the centre is twice the angle at the circumference.\nThe angle in a semicircle is 90°.', u: true },
      { n: 7, f: 'Circle theorems: same segment and cyclic quadrilateral', b: 'Angles in the same segment are equal.\nOpposite angles of a cyclic quadrilateral sum to 180°.', u: true },
      { n: 8, f: 'Circle theorems about tangents', b: 'A tangent is perpendicular to the radius at the point of contact.\nTangents from an external point are equal in length.\nAlternate segment theorem: the angle between a tangent and a chord equals the angle in the alternate segment.', u: true },
      { n: 9, f: 'A circle has radius 13 cm and a chord of 24 cm. How far is the chord from the centre?', b: 'The perpendicular from the centre bisects the chord, so the half-chord is 12 cm.\nDistance = √(13² − 12²) = √25 = 5 cm.', u: true },
      { n: 10, f: 'The bearing of B from A is 287°. Find the bearing of A from B.', b: 'Back bearing: add 180° if below 180°, otherwise subtract 180°.\n287° − 180° = 107°' },
      { n: 11, f: 'A scale drawing has scale 1 : 1500. A line is 9 cm long. Find the real length.', b: '9 × 1500 = 13 500 cm = 135 m.\nMultiply by n to go from the drawing to real life.' },
      { n: 12, f: 'Loci: points equidistant from A and B, and points a fixed distance from a point O', b: 'Equidistant from A and B: the perpendicular bisector of AB.\nFixed distance r from O: a circle, centre O, radius r.' },
      { n: 13, f: 'How do you construct an angle of 60° at P?', b: 'Draw an arc from P cutting the line at X. With the same compass width, draw an arc from X cutting the first arc at Z. Join P to Z. Leave the arcs visible.' },
      { n: 14, f: 'Conditions for congruent triangles', b: 'SSS, SAS (angle between the two sides), ASA or AAS, and RHS (right angle, hypotenuse, side).\nAAA and SSA are not enough.', u: true },
      { n: 15, f: 'Lines of symmetry and order of rotation symmetry of a parallelogram and of a regular n-gon', b: 'Parallelogram: 0 lines, order 2.\nRegular n-gon: n lines, order n.' },
      { n: 16, f: 'Faces, edges and vertices of a prism with an n-sided cross-section', b: 'n + 2 faces, 3n edges, 2n vertices.\nExample: a triangular prism has 5 faces, 9 edges and 6 vertices.' },
      { n: 17, f: 'Plan and elevation', b: 'Plan: the view from directly above.\nElevation: the view from the front or a stated side.', src: SYM3 },
    ]),
    ...sub(T3, 'mensuration-and-calculation-oxfordaqa-igcse-maths', '3.3.2', [
      { n: 1, f: 'Area and volume unit conversions', b: 'Square the length factor for area: 1 m² = 10 000 cm²; 1 cm² = 100 mm².\nCube it for volume: 1 m³ = 1 000 000 cm³.\n1 litre = 1000 cm³; 1 m³ = 1000 litres.' },
      { n: 2, f: 'A bar of volume 250 cm³ has mass 1.75 kg. Find its density in g/cm³ and kg/m³.', b: 'Density = mass ÷ volume = 1750 g ÷ 250 cm³ = 7 g/cm³.\n× 1000 for kg/m³: 7000 kg/m³.' },
      { n: 3, f: 'Area of a trapezium, and volume of a prism', b: 'Trapezium: ½ × (sum of the parallel sides) × perpendicular height.\nPrism: V = Ah, cross-sectional area × length.' },
      { n: 4, f: 'Perimeter and area of a semicircle of radius r', b: 'Perimeter = πr + 2r (the arc plus the diameter).\nArea = ½πr².\nFor r = 5: perimeter 5π + 10 = 25.7, area 12.5π = 39.3.' },
      { n: 5, f: 'Volumes of a sphere, a cone and a pyramid', b: 'Sphere: (4/3)πr³ (surface area 4πr²).\nCone: (1/3)πr²h (curved surface πrl, where l is the slant height).\nPyramid: (1/3) × base area × height.', u: true },
      { n: 6, f: 'How do you find the volume of a frustum?', b: 'Volume of the whole cone (or pyramid) − volume of the smaller similar one removed from the top. Use the scale factor from the heights to find the small one\'s lengths.', u: true },
      { n: 7, f: "Pythagoras' theorem and the three trig ratios", b: 'a² + b² = c², where c is the hypotenuse.\nsin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, tan θ = opposite/adjacent (SOH CAH TOA).' },
      { n: 8, f: 'cos 40° = 15/h. Find h.', b: 'The unknown is underneath, so swap: h = 15/cos 40° = 19.6 (3 s.f.).\n(If the unknown is on top, multiply.)' },
      { n: 9, f: 'A right-angled triangle has adjacent side 7.2 cm and hypotenuse 11.5 cm. Find the angle.', b: 'cos θ = 7.2/11.5, so θ = cos⁻¹(7.2/11.5) = 51.2° (1 d.p.).' },
      { n: 10, f: 'Space diagonal of a cuboid 12 × 5 × 9 cm', b: 'Base diagonal √(12² + 5²) = 13.\nSpace diagonal = √(13² + 9²) = √250 = 15.8 cm (3 s.f.).', u: true },
      { n: 11, f: 'The sine rule', b: 'a/sin A = b/sin B = c/sin C, where side a is opposite angle A. Use it when you have a matching side and angle pair.', u: true },
      { n: 12, f: 'The cosine rule (side and angle forms)', b: 'a² = b² + c² − 2bc cos A (two sides and the included angle).\ncos A = (b² + c² − a²)/(2bc) (three sides). A negative cosine means an obtuse angle.', u: true },
      { n: 13, f: 'A triangle has sides 6, 9 and 10. Find the angle opposite the side of length 6.', b: 'cos θ = (9² + 10² − 6²)/(2 × 9 × 10) = 145/180\nθ = 36.3° (1 d.p.)', u: true },
      { n: 14, f: 'Area of a triangle with two sides and the included angle', b: 'Area = ½ab sin C, where C is the angle between sides a and b.\nExample: ½ × 12 × 9 × sin 30° = 27.', u: true },
      { n: 15, f: 'Two similar jugs have heights 9 cm and 12 cm. The small one holds 270 ml. How much does the large one hold?', b: 'k = 12/9 = 4/3, so the volume factor is k³ = 64/27.\n270 × 64/27 = 640 ml.\n(Areas scale by k², volumes by k³.)', u: true },
      { n: 16, f: 'Arc length and area of a sector of radius 15 cm and angle 48°', b: 'Fraction = 48/360 = 2/15.\nArc = 2/15 × 2π × 15 = 4π cm.\nArea = 2/15 × π × 15² = 30π cm².\n(Perimeter = arc + 2r.)', u: true },
    ]),
    ...sub(T3, 'transformations-matrices-and-vectors-oxfordaqa-igcse-maths', '3.3.3', [
      { n: 1, f: 'What must you state to describe each transformation fully?', b: 'Translation: the column vector.\nReflection: the equation of the mirror line.\nRotation: angle, direction and centre.\nEnlargement: scale factor and centre.' },
      { n: 2, f: 'Reflections of (x, y) in y = x, y = −x and x = k', b: 'y = x: (y, x).\ny = −x: (−y, −x).\nx = k: (2k − x, y).' },
      { n: 3, f: 'Rotations of (x, y) about the origin', b: '90° anticlockwise: (−y, x).\n90° clockwise: (y, −x).\n180°: (−x, −y).' },
      { n: 4, f: 'Enlarge (3, 2) by scale factor 4, centre (1, 1)', b: 'Image = centre + k × (point − centre).\nRelative position (2, 1); × 4 gives (8, 4); add the centre: (9, 5).' },
      { n: 5, f: 'What does a negative scale factor of enlargement do?', b: 'The image is on the opposite side of the centre. Its size is the size of k times the object. k = −1 is the same as a rotation of 180° about the centre.', u: true },
      { n: 6, f: 'Invariant points of a reflection, a rotation and a translation', b: 'Reflection: the points on the mirror line.\nRotation: the centre only.\nTranslation: none.' },
      { n: 7, f: 'Reflecting in two parallel lines, one after the other, gives which single transformation?', b: 'A translation perpendicular to the lines, of twice the distance between them.', u: true },
      { n: 8, f: 'Work out (3 −2 / 1 4) × the column (5, −1)', b: 'Row times column:\n3 × 5 + (−2) × (−1) = 17\n1 × 5 + 4 × (−1) = 1\nAnswer: the column (17, 1).', u: true },
      { n: 9, f: 'Identity matrix I', b: 'I = (1 0 / 0 1). MI = IM = M, and it leaves any point unchanged: the "do nothing" transformation.', u: true },
      { n: 10, f: 'How do you read a transformation from its 2 × 2 matrix?', b: 'The first column is the image of (1, 0); the second column is the image of (0, 1).\nExample: (0 −1 / 1 0) sends (1, 0) to (0, 1) and (0, 1) to (−1, 0): rotation 90° anticlockwise about the origin.', u: true },
      { n: 11, f: 'Transformation A is done first, then B. What is the single matrix?', b: 'BA: the second matrix on the left, the first nearest the point. In general AB ≠ BA.', u: true },
      { n: 12, f: 'Drawing the sum of two vectors a + b', b: 'Draw a, then draw b from the end of a. The sum runs from the start of a to the end of b.', u: true, src: VEC },
      { n: 13, f: 'Scalar multiples 3a and −a', b: '3a is the same direction as a and three times the length. −a is the same length as a but in the opposite direction.', u: true, src: VEC },
      { n: 14, f: 'C is (−4, 6) and D is (3, −2). Find →CD.', b: '→CD = D − C = (3 − (−4), −2 − 6) = (7, −8). Then →DC = (−7, 8).', u: true },
      { n: 15, f: '→OP = 2a + b and →OQ = 6a + 3b. Show that O, P and Q are collinear.', b: '→OQ = 3(2a + b) = 3→OP, so OP and OQ are parallel. They share the point O, so O, P and Q are collinear.', u: true },
    ]),

    // 4 Statistics and probability
    ...sub(T4, 'presentation-and-analysis-oxfordaqa-igcse-maths', '3.4.1', [
      { n: 1, f: 'Qualitative, discrete and continuous data', b: 'Qualitative: described in words (colour).\nDiscrete: numerical, separate values, counted (shoe size).\nContinuous: numerical, any value in a range, measured (time, mass).', src: DATA },
      { n: 2, f: 'Classes 30 ≤ x < 40 and 40 ≤ x < 50: which class holds 40?', b: 'The second class, 40 ≤ x < 50. Class intervals must not overlap and must leave no gaps.' },
      { n: 3, f: 'x = 10, 11, 12, 13 with frequencies 3, 7, 6, 4. Find the mean and median.', b: 'Σfx = 30 + 77 + 72 + 52 = 231; Σf = 20; mean = 231 ÷ 20 = 11.55.\nMedian at position 10.5: the 10th value is 11 and the 11th is 12, so the median is 11.5.' },
      { n: 4, f: 'How do you find the class that contains the median of grouped data?', b: 'Work out n ÷ 2, then add frequencies down the table until the running total first reaches or passes it. You can give only the class, not an exact median.' },
      { n: 5, f: '8 items have mean 5 and 2 items have mean 10. Find the mean of all 10.', b: 'Total = 8 × 5 + 2 × 10 = 60.\nMean = 60 ÷ 10 = 6.' },
      { n: 6, f: 'Find the IQR of 4, 6, 9, 12, 15, 18, 25', b: 'n + 1 = 8. Lower quartile at position 2: 6. Upper quartile at position 6: 18.\nIQR = 18 − 6 = 12', u: true },
      { n: 7, f: 'Pie chart: 45 pupils choose art 9, drama 14, music 22. Find the angles.', b: 'One pupil = 360° ÷ 45 = 8°.\nArt 72°, drama 112°, music 176° (total 360°).' },
      { n: 8, f: 'Frequency polygon', b: 'Plot each frequency above its class midpoint and join the points with straight lines. Midpoint = (lower boundary + upper boundary) ÷ 2.' },
      { n: 9, f: 'Histogram with unequal class widths', b: 'Bar height = frequency density = frequency ÷ class width. Bars touch, and area represents frequency (frequency = density × width).\nExample: 44 in 10 < x ≤ 20 gives density 4.4.', u: true },
      { n: 10, f: 'Cumulative frequency diagram: where are points plotted, and where do you read the quartiles?', b: 'Plot each running total at the upper end of its class, plus (start, 0), and draw a smooth curve.\nRead across from n ÷ 4, n ÷ 2 and 3n ÷ 4.', u: true },
      { n: 11, f: 'Box plot: what five values does it show?', b: 'Smallest value, lower quartile, median, upper quartile and largest value. The box runs between the quartiles and is cut at the median.', u: true },
      { n: 12, f: 'Bar chart and histogram: the difference', b: 'A bar chart has gaps and shows categories or discrete values. A histogram has no gaps and a continuous scale.' },
    ]),
    ...sub(T4, 'interpretation-oxfordaqa-igcse-maths', '3.4.2', [
      { n: 1, f: 'What does a full comparison of two distributions include?', b: 'An average for each set with its value, a measure of spread for each with its value, a sentence saying which is higher or more consistent in context, and a reason or caution.' },
      { n: 2, f: 'Scores P: 6, 8, 9, 10, 12 and Q: 2, 9, 9, 10, 15. Compare them.', b: 'Both have mean 9 and median 9, so typical performance is equal.\nRanges: P 6, Q 13. P is more consistent.' },
      { n: 3, f: 'Signs that a graph may mislead', b: 'The vertical axis does not start at zero; the scale is uneven or bars have different widths; a 3-D or stretched picture; a very small sample or no source.' },
      { n: 4, f: 'Positive, negative and no correlation', b: 'Positive: points rise left to right.\nNegative: points fall left to right.\nNone: no pattern.\nState strength too, for example "weak positive correlation".', src: INTP },
      { n: 5, f: 'How do you draw a line of best fit by eye?', b: 'Find the mean point (mean of x, mean of y). Draw one straight ruled line through or very close to it, following the trend with points balanced above and below. Leave out outliers.' },
      { n: 6, f: 'Interpolate and extrapolate', b: 'Interpolate: estimate inside the range of the data (fairly reliable).\nExtrapolate: estimate outside the range of the data (not reliable).', src: INTP },
      { n: 7, f: 'Does correlation mean that one variable causes the other?', b: 'No. Correlation shows a relationship; a third factor may affect both.' },
      { n: 8, f: 'Outlier', b: 'A point well away from the general pattern.', src: INTP },
      { n: 9, f: 'A line of best fit passes through (0, 10) and (5, 35). Find its equation and estimate y at x = 3.', b: 'Gradient = 25 ÷ 5 = 5, intercept 10: y = 5x + 10.\nAt x = 3: y = 25.' },
    ]),
    ...sub(T4, 'probability-oxfordaqa-igcse-maths', '3.4.3', [
      { n: 1, f: 'The probability scale', b: '0 impossible, 0.5 evens, 1 certain. Probabilities are fractions, decimals or percentages, never ratios, and lie from 0 to 1.' },
      { n: 2, f: 'Fair and biased', b: 'Fair (unbiased): all outcomes equally likely.\nBiased: some outcomes favoured.', src: PROB },
      { n: 3, f: 'Relative frequency: a pin lands point up 74 times in 200 drops. How many in 1500 drops?', b: 'Relative frequency = 74/200 = 0.37 (an estimate of the probability).\nExpected frequency = 0.37 × 1500 = 555.' },
      { n: 4, f: 'Expected frequency: a fair spinner has 8 equal sectors, 3 shaded. Spun 240 times?', b: 'P(shaded) = 3/8. Expected = probability × trials = 3/8 × 240 = 90.' },
      { n: 5, f: 'Why do more trials usually give a better estimate?', b: 'More trials generally give a relative frequency closer to the true probability (likely, not certain). A large sample taken in a biased way is still a poor sample.' },
      { n: 6, f: 'A coin has landed heads five times in a row. What is P(heads) next time?', b: 'Still 1/2. Past results do not change the probability of the next trial.' },
      { n: 7, f: 'Mutually exclusive and exhaustive', b: 'Mutually exclusive: the events cannot both happen (no overlap).\nExhaustive: at least one of the outcomes must happen (no gap).', src: SAMP },
      { n: 8, f: 'P(win) = 0.35, P(draw) = 0.2 and P(lose) = y. Find y.', b: 'The outcomes are mutually exclusive and exhaustive, so they sum to 1:\n0.35 + 0.2 + y = 1, so y = 0.45.' },
      { n: 9, f: 'Of 30 pupils, 14 have a dog, 11 a cat and 5 both. Find P(neither).', b: 'Dog only 9, both 5, cat only 6: 20 in the circles.\nNeither = 30 − 20 = 10, so P(neither) = 10/30 = 1/3.' },
      { n: 10, f: 'Two independent machines run with probabilities 0.8 and 0.7. Find P(at least one runs).', b: 'P(neither) = 0.2 × 0.3 = 0.06.\nP(at least one) = 1 − 0.06 = 0.94.\nFor independent events, P(A ∩ B) = P(A) × P(B).', u: true },
      { n: 11, f: 'A bag has 3 red and 8 blue counters. Two are taken without replacement. Find P(same colour).', b: 'P(red, red) = 3/11 × 2/10 = 6/110.\nP(blue, blue) = 8/11 × 7/10 = 56/110.\nP(same) = 62/110 = 31/55.', u: true },
      { n: 12, f: 'Frost has probability 0.4. With frost a car fails to start with probability 0.2; without, 0.05. Find P(frost | fails).', b: 'P(frost and fails) = 0.08; P(no frost and fails) = 0.6 × 0.05 = 0.03; P(fails) = 0.11.\nP(frost | fails) = 0.08 ÷ 0.11 = 8/11.', u: true },
      { n: 13, f: 'Using a two-way table for conditional probability', b: 'It is ideal for conditional probability: read the given row or column total as the new total. Example: 9 of 24 juniors play chess, so P(chess | junior) = 9/24 = 3/8.', u: true, src: IND },
      { n: 14, f: 'A player scores each shot with probability 0.6, independently. Find P(exactly two of three shots).', b: 'One arrangement (score, score, miss): 0.6 × 0.6 × 0.4 = 0.144.\nThere are 3 arrangements, so P = 3 × 0.144 = 0.432.', u: true },
    ]),
  ],
};
