/**
 * D-444 -- flashcards for AQA GCSE Mathematics 8300 (for first teaching 2015).
 *
 * One block per subtopic (or per topic, where the syllabus record itemises no
 * subtopics), in syllabus order. Card ids are `<subtopic number>-<n>` (or
 * `<topic number>-<n>`) and are permanent (browser progress is keyed by them):
 * add a new card with the next unused n, never renumber.
 *
 *   u: true     Upper tier: Higher tier only content, following the "(Higher)" /
 *               "Higher tier only" marks on Marlbridge's own 8300 revision notes
 *               (the specification's "Higher content only" column). Foundation
 *               candidates can hide these cards.
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 8300); origin 'revision-notes'.
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

const topicOnly = (topic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b, u, src }) => ({
    id: `${number}-${n}`,
    topic,
    front: f,
    back: b,
    ...(u ? { tier: 'upper' as const } : {}),
    origin: src ? 'revision-notes' as const : 'authored' as const,
    ...(src ? { source: src } : {}),
  }));

const MEAS = 'aqa-gcse-maths-8300-measures-and-accuracy-revision-notes';
const NOTN = 'aqa-gcse-maths-8300-notation-vocabulary-and-manipulation-revision-notes';

export const DECK_AQA_GCSE_MATHEMATICS: FlashcardDeck = {
  boardSlug: 'aqa',
  qualificationSlug: 'gcse',
  subjectSlug: 'mathematics',
  syllabusCode: '8300',
  syllabusSeries: 'For first teaching 2015',
  tierScheme: 'foundation-higher',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'sajawal-zahid', reviewedOn: '2026-11-05' },
  cards: [
    // 1 Number
    ...sub('number-aqa-gcse-maths', 'structure-and-calculation-aqa-gcse-maths', '3.1.1', [
      { n: 1, f: 'Prime number', b: 'A number with exactly two factors: 1 and itself. 1 is not prime; 2 is the only even prime.' },
      { n: 2, f: 'How do you find the HCF and LCM from prime factors?', b: '1. Write each number as a product of primes in index form.\n2. HCF: the primes they share, each to the lowest power.\n3. LCM: every prime that appears, each to the highest power.' },
      { n: 3, f: 'Find the HCF and LCM of 48 and 180', b: '48 = 2⁴ × 3 and 180 = 2² × 3² × 5.\nHCF = 2² × 3 = 12.\nLCM = 2⁴ × 3² × 5 = 720.' },
      { n: 4, f: 'Priority of operations', b: 'Brackets → powers and roots → × and ÷ (left to right) → + and − (left to right).\nExample: 4 − 2 × (−3)² = 4 − 18 = −14.' },
      { n: 5, f: '−3² compared with (−3)²', b: '−3² = −9: the power acts before the minus sign.\n(−3)² = 9: the brackets make the whole −3 squared.' },
      { n: 6, f: 'Index laws for the same base a', b: 'aᵐ × aⁿ = aᵐ⁺ⁿ\naᵐ ÷ aⁿ = aᵐ⁻ⁿ\n(aᵐ)ⁿ = aᵐⁿ\na⁰ = 1\na⁻ⁿ = 1/aⁿ, so 2⁻³ = 1/8 (a positive number).' },
      { n: 7, f: 'Standard form', b: 'A × 10ⁿ with 1 ≤ A < 10 and n an integer.\nExample: (8 × 10⁻³) × (7 × 10⁶) = 56 × 10³ = 5.6 × 10⁴.' },
      { n: 8, f: 'Fractional indices: what do a^(1/n) and a^(m/n) mean?', b: 'a^(1/n) is the nth root of a.\na^(m/n) = (nth root of a)ᵐ: take the root first, then the power. A negative index also means take the reciprocal.\nExample: 4^(5/2) = 2⁵ = 32.', u: true },
      { n: 9, f: 'How do you simplify a surd such as √180?', b: '1. Find the largest square number that divides it (36).\n2. Split: √180 = √36 × √5.\n3. Square-root the square: 6√5.', u: true },
      { n: 10, f: 'Product rule for counting', b: 'If there are m ways to make one choice and n ways to make the next, there are m × n ways altogether.\nExample: 6 shirts, 4 trousers, 3 pairs of shoes → 6 × 4 × 3 = 72 outfits.', u: true },
    ]),
    ...sub('number-aqa-gcse-maths', 'fractions-decimals-and-percentages-aqa-gcse-maths', '3.1.2', [
      { n: 1, f: 'Terminating and recurring decimals', b: 'Terminating: stops after a finite number of digits (0.125).\nRecurring: a digit or block repeats forever (0.1666…).' },
      { n: 2, f: 'Which fractions give terminating decimals?', b: 'In its simplest form, a fraction terminates only when its denominator has no prime factors other than 2 and 5. So 3/16 = 0.1875 terminates; 3/14 recurs (14 has a factor 7).' },
      { n: 3, f: 'Dot notation: 0.1̇6̇ compared with 0.16̇', b: '0.1̇6̇ (dots on both digits) = 0.161616…\n0.16̇ (dot on the 6 only) = 0.1666…' },
      { n: 4, f: 'How do you order fractions, decimals and percentages?', b: '1. Convert every value to a decimal.\n2. Pad with zeros to the same number of decimal places.\n3. Compare column by column from the left.\n4. Write the answer using the original values.' },
      { n: 5, f: 'Multiplier for an increase or decrease of r%', b: 'Increase by r%: × (1 + r/100).\nDecrease by r%: × (1 − r/100).\nExample: decrease by 4.5% → × 0.955.' },
      { n: 6, f: 'How do you combine two successive percentage or fraction changes?', b: 'Multiply the multipliers; never add the percentages.\nExample: increase by 2/3 then decrease by 2/5: 5/3 × 3/5 = 1, so no overall change.' },
      { n: 7, f: '30% of 50 compared with increasing 50 by 30%', b: '30% of 50 = 0.3 × 50 = 15.\nIncrease 50 by 30% = 1.3 × 50 = 65.' },
      { n: 8, f: 'In the ratio a : b, what fraction is the first quantity of the total, and of the second quantity?', b: 'Of the total: a/(a + b).\nOf the second quantity: a/b.\nExample: in 3 : 5 the first is 3/8 of the total but 3/5 of the second.' },
      { n: 9, f: 'How do you convert a recurring decimal to a fraction?', b: '1. Let x = the decimal.\n2. Multiply by 10ⁿ, where n is the number of digits in the repeating block.\n3. Subtract so the recurring tails cancel.\n4. Solve for x and simplify.', u: true },
      { n: 10, f: 'Write 0.7̇2̇ as a fraction in its simplest form', b: 'x = 0.7272…, 100x = 72.7272…\n100x − x = 99x = 72\nx = 72/99 = 8/11', u: true },
    ]),
    ...sub('number-aqa-gcse-maths', 'measures-and-accuracy-aqa-gcse-maths', '3.1.3', [
      { n: 1, f: 'Rounding compared with truncation', b: 'Rounding goes half a unit either way; truncation goes a whole unit upwards only.', src: MEAS },
      { n: 2, f: 'Decimal places compared with significant figures', b: 'Decimal places are counted after the point; significant figures start at the first non-zero digit. 0.0503 is 4 d.p. but 3 s.f.', src: MEAS },
      { n: 3, f: 'Conversion factors for length, area and volume (cm to m)', b: 'Length: 100 for cm to m.\nArea: 10 000 for cm² to m².\nVolume: 1 000 000 for cm³ to m³.', src: MEAS },
      { n: 4, f: 'Decimal time compared with clock time', b: '1.3 hours is 1 h 18 min, not 1 h 30 min (0.3 × 60 = 18).', src: MEAS },
      { n: 5, f: 'How do you estimate a calculation?', b: '1. Round every number to 1 significant figure.\n2. Write the rounded calculation down.\n3. Work it out.\nExample: 397 × 0.512 ÷ 19.6 ≈ 400 × 0.5 ÷ 20 = 10.' },
      { n: 6, f: 'Error interval for a value rounded: p = 14.7 to 1 d.p.', b: 'Halve the unit of rounding (0.1 → 0.05), then go that far either way:\n14.65 ≤ p < 14.75' },
      { n: 7, f: 'Error interval for a truncated value: r = 9.2 truncated to 1 d.p.', b: 'The lower limit is the value itself; the upper limit is one whole unit more:\n9.2 ≤ r < 9.3' },
      { n: 8, f: 'Upper and lower bounds of a − b and a ÷ b', b: 'Maximum of a − b = UB of a − LB of b.\nMinimum of a − b = LB of a − UB of b.\nMaximum of a ÷ b = UB of a ÷ LB of b.\nMinimum of a ÷ b = LB of a ÷ UB of b.', u: true },
      { n: 9, f: 'How do you give an answer to an appropriate degree of accuracy using bounds?', b: '1. Find the upper and lower bounds of the answer.\n2. Round both to 1 s.f., 2 s.f., 3 s.f. …\n3. Stop at the most figures where they still agree, and give that as the answer with the reason.', u: true },
    ]),

    // 2 Algebra
    ...sub('algebra-aqa-gcse-maths', 'notation-vocabulary-and-manipulation-aqa-gcse-maths', '3.2.1', [
      { n: 1, f: 'Term (in algebra)', b: 'One part of an expression, such as −5x in 2x² − 5x.', src: NOTN },
      { n: 2, f: 'Equation compared with identity', b: 'An equation (=) is true for some values; an identity (≡) is true for all values.', src: NOTN },
      { n: 3, f: 'Expand compared with factorise', b: 'Expanding removes brackets; factorising puts them in.', src: NOTN },
      { n: 4, f: 'Difference of two squares', b: 'a² − b² = (a + b)(a − b). It has no middle term.\nExample: p² − 64 = (p + 8)(p − 8).' },
      { n: 5, f: 'How do you factorise x² + bx + c?', b: '1. List the factor pairs of c.\n2. Pick the pair that adds to b.\n3. Write (x + p)(x + q) and expand to check.\nExample: x² + 9x + 20 = (x + 4)(x + 5).' },
      { n: 6, f: 'How do you change the subject of a formula?', b: '1. Clear fractions and expand brackets.\n2. Collect the terms with the new subject on one side.\n3. If it appears in two terms, factorise it out.\n4. Divide, then take a root if needed.\nExample: v² = u² + 2as → u = ±√(v² − 2as).' },
      { n: 7, f: 'How do you factorise ax² + bx + c (a ≠ 1)?', b: '1. Work out a × c.\n2. Find two numbers with product ac and sum b.\n3. Split bx into those two terms and factorise in pairs.\nExample: 2x² − 7x + 3 = 2x(x − 3) − 1(x − 3) = (2x − 1)(x − 3).', u: true },
      { n: 8, f: 'fg(x) compared with gf(x)', b: 'The inner function acts first: fg(x) means g first, then f. They are usually different.', u: true, src: NOTN },
      { n: 9, f: 'f⁻¹(x) compared with 1/f(x)', b: 'The inverse function is not the reciprocal.', u: true, src: NOTN },
      { n: 10, f: 'How do you find an inverse function f⁻¹(x)?', b: '1. Write y = f(x).\n2. Make x the subject.\n3. Swap back to x.\nExample: f(x) = 2x + 7 gives f⁻¹(x) = (x − 7)/2.', u: true },
    ]),
    ...sub('algebra-aqa-gcse-maths', 'graphs-aqa-gcse-maths', '3.2.2', [
      { n: 1, f: 'Gradient of the line through (x₁, y₁) and (x₂, y₂)', b: 'm = (y₂ − y₁) ÷ (x₂ − x₁), subtracting in the same order top and bottom.\nExample: (2, 5) and (6, 17): 12 ÷ 4 = 3.' },
      { n: 2, f: 'In y = mx + c, what are m and c?', b: 'm is the gradient; c is the y-intercept. Rearrange to y = … first: 3x + 2y = 12 → y = −1.5x + 6, gradient −3/2, intercept 6.' },
      { n: 3, f: 'Gradients of perpendicular lines', b: 'm₁ × m₂ = −1, so m₂ = −1/m₁. A line perpendicular to y = 4x − 7 has gradient −1/4.', u: true },
      { n: 4, f: 'Turning point of y = (x + p)² + q', b: '(−p, q). Example: x² + 10x + 18 = (x + 5)² − 7, turning point (−5, −7).', u: true },
      { n: 5, f: 'Shapes of y = x³ and y = 1/x', b: 'y = x³: an S-shape through the origin, flat at (0, 0).\ny = 1/x: two branches in the first and third quadrants that never touch the axes.' },
      { n: 6, f: 'Equation of a circle centre the origin, and its tangent', b: 'x² + y² = r² has centre (0, 0) and radius r. A tangent is perpendicular to the radius at that point, so its gradient is the negative reciprocal of the radius gradient.', u: true },
      { n: 7, f: 'Effect on the point (a, b): y = f(x) + k and y = f(x + k)', b: 'y = f(x) + k: (a, b + k), a move up by k.\ny = f(x + k): (a − k, b), a move left by k (opposite to the sign).', u: true },
      { n: 8, f: 'Effect on the point (a, b): y = −f(x) and y = f(−x)', b: 'y = −f(x): (a, −b), a reflection in the x-axis.\ny = f(−x): (−a, b), a reflection in the y-axis.', u: true },
      { n: 9, f: 'Distance-time and velocity-time graphs: what does the gradient of a straight section give?', b: 'Distance-time: gradient = speed; a horizontal section means stationary.\nVelocity-time: gradient = acceleration; a horizontal section means constant velocity.' },
      { n: 10, f: 'How do you estimate the area under a curve?', b: 'Split it into equal-width trapezia: area ≈ (h/2) × [first + 2(middle values) + last]. Say whether it is an over- or underestimate: if the curve bends down, the trapezia sit below it (underestimate).', u: true },
      { n: 11, f: 'What does the area under a velocity-time graph give?', b: 'The distance travelled. Split the area into triangles, rectangles and trapezia; for a curve, estimate it with trapezia.', u: true },
      { n: 12, f: 'Gradients of parallel lines', b: 'Parallel lines have the same gradient. y = 3x + 1 and y = 3x − 4 are parallel (both have gradient 3).' },
    ]),
    ...sub('algebra-aqa-gcse-maths', 'solving-equations-and-inequalities-aqa-gcse-maths', '3.2.3', [
      { n: 1, f: 'How do you solve a quadratic equation by factorising?', b: '1. Rearrange to … = 0.\n2. Factorise.\n3. Set each bracket equal to 0.\nExample: x² − 7x + 12 = 0 → (x − 3)(x − 4) = 0 → x = 3 or x = 4.' },
      { n: 2, f: 'Why not divide x² − 8x = 0 by x?', b: 'You lose the solution x = 0. Factorise instead: x(x − 8) = 0, so x = 0 or x = 8.' },
      { n: 3, f: 'Quadratic formula', b: 'For ax² + bx + c = 0 (a ≠ 0):\nx = (−b ± √(b² − 4ac)) / (2a)\nIt is not given in the exam.', u: true },
      { n: 4, f: 'Solve x² + 4x − 1 = 0 by completing the square', b: '(x + 2)² − 4 − 1 = 0, so (x + 2)² = 5\nx + 2 = ±√5\nx = −2 ± √5', u: true },
      { n: 5, f: 'How do you solve linear simultaneous equations by elimination?', b: '1. Line up the x and y terms.\n2. Multiply to make one pair of coefficients equal.\n3. Same signs: subtract; different signs: add.\n4. Solve, substitute back, check.\nExample: 2x − y = 7, x + y = 8 → 3x = 15, x = 5, y = 3.' },
      { n: 6, f: 'How do you solve one linear and one quadratic equation simultaneously?', b: '1. Make y (or x) the subject of the linear equation.\n2. Substitute into the quadratic.\n3. Rearrange to = 0 and solve.\n4. Find the matching value of the other letter for each solution.', u: true },
      { n: 7, f: 'When does an inequality sign reverse?', b: 'Only when you multiply or divide both sides by a negative number.\nExample: 7 − 3x ≤ 1 → −3x ≤ −6 → x ≥ 2.' },
      { n: 8, f: 'Number line: open circle or closed circle?', b: 'Open circle for < or > (the end value is not included). Closed circle for ≤ or ≥ (it is included).' },
      { n: 9, f: 'How do you solve a quadratic inequality such as x² − 4x − 5 < 0?', b: 'Factorise to find the critical values: (x − 5)(x + 1), so −1 and 5. Sketch the U-shaped curve.\n< 0: between the roots, −1 < x < 5.\n> 0 would be outside: x < −1 or x > 5.', u: true },
      { n: 10, f: 'Iteration: what do xₙ and xₙ₊₁ mean, and how do you show a root lies between a and b?', b: 'xₙ is the current value and xₙ₊₁ = g(xₙ) is the next. Feed each answer back in and keep full values.\nA root of f(x) = 0 lies between a and b if f(a) and f(b) have opposite signs.', u: true },
    ]),
    ...sub('algebra-aqa-gcse-maths', 'sequences-aqa-gcse-maths', '3.2.4', [
      { n: 1, f: 'Term-to-term rule compared with position-to-term rule', b: 'Term-to-term: how to get the next term from the previous one (needs a first term).\nPosition-to-term (nth term): a formula in n that gives any term directly.' },
      { n: 2, f: 'How do you find the nth term of a linear sequence?', b: '1. The common difference d gives dn.\n2. Compare dn with the sequence and add or subtract the gap.\n3. Check one term.\nExample: 40, 37, 34, 31 → d = −3; nth term 43 − 3n.' },
      { n: 3, f: 'Is 75 a term of the sequence 4n − 1?', b: 'Set 4n − 1 = 75, so 4n = 76 and n = 19. n is a positive whole number, so yes: the 19th term.' },
      { n: 4, f: 'Triangular numbers', b: '1, 3, 6, 10, 15, 21, … (add 2, 3, 4, 5, …). nth term n(n + 1)/2.' },
      { n: 5, f: 'Fibonacci-type sequence', b: 'Each term is the sum of the two before it. Starting a, b: a, b, a + b, a + 2b, 2a + 3b, …' },
      { n: 6, f: 'Geometric progression: how do you find the common ratio r?', b: 'r = any term ÷ the term before it (check with a second pair).\nExample: 54, 18, 6, … has r = 18 ÷ 54 = 1/3, so the next term is 2.' },
      { n: 7, f: 'How do you recognise a quadratic sequence?', b: 'The second differences (differences between consecutive first differences) are constant.' },
      { n: 8, f: 'How do you find the nth term of a quadratic sequence?', b: '1. a = second difference ÷ 2; start with an².\n2. Subtract an² from every term.\n3. Find the nth term bn + c of what remains.\n4. nth term = an² + bn + c; check one term.', u: true },
      { n: 9, f: 'Find the nth term of 2, 5, 9, 14, 20, …', b: 'Second difference 1, so a = 1/2.\nTerm − ½n²: 1.5, 3, 4.5, 6, 7.5 (d = 1.5, gap 0).\nnth term = ½n² + (3/2)n. Check n = 3: 4.5 + 4.5 = 9.', u: true },
      { n: 10, f: 'Geometric sequence with first term 4 and common ratio √5', b: '4, 4√5, 20, 20√5, 100, … Keep surds exact: √5 × √5 = 5, so every second term is multiplied by 5.', u: true },
    ]),

    // 3 Ratio, proportion and rates of change
    ...topicOnly('ratio-proportion-and-rates-of-change-aqa-gcse', '3', [
      { n: 1, f: 'How do you share an amount in a given ratio?', b: '1. Add the parts of the ratio.\n2. Divide the total by that number to get one part.\n3. Multiply by each share of the ratio.\n4. Check the shares add back to the total.' },
      { n: 2, f: 'Two amounts are in the ratio 4 : 7 and differ by 18. Find them.', b: 'Difference = 3 parts, so one part = 18 ÷ 3 = 6.\nAmounts: 4 × 6 = 24 and 7 × 6 = 42.' },
      { n: 3, f: 'Formulae for speed, density and pressure', b: 'Speed = distance ÷ time\nDensity = mass ÷ volume\nPressure = force ÷ area' },
      { n: 4, f: 'Convert 72 km/h to m/s', b: '× 1000 ÷ 3600, which is the same as ÷ 3.6:\n72 000 m ÷ 3600 s = 20 m/s.' },
      { n: 5, f: 'How do you find the original value after a percentage increase?', b: 'Divide by the multiplier.\nExample: £89.70 after a 15% rise: 89.70 ÷ 1.15 = £78.' },
      { n: 6, f: 'Compound interest formula', b: 'Total accrued = P(1 + r/100)ⁿ, where P is the amount invested, r the percentage rate and n the number of years. It is not given in the exam.\nExample: £5000 at 4% for 3 years = 5000 × 1.04³ = £5624.32.' },
      { n: 7, f: 'Simple interest compared with compound interest', b: 'Simple: the same amount of interest each year (£2400 at 3.5% for 4 years: 2400 × 0.035 × 4 = £336).\nCompound: multiply by the same factor each year, so interest is earned on interest.' },
      { n: 8, f: 'Direct and inverse proportion: equations and graphs', b: 'y ∝ x: y = kx, a straight line through the origin; doubling x doubles y.\ny ∝ 1/x: y = k/x, a curve that never meets the axes; doubling x halves y.' },
      { n: 9, f: 'y is inversely proportional to x, and y = 8 when x = 5. Find y when x = 16.', b: 'y = k/x, so 8 = k/5 and k = 40.\ny = 40/16 = 2.5', u: true },
      { n: 10, f: 'Average rate of change compared with instantaneous rate of change', b: 'Average: the gradient of the chord joining two points on the curve.\nInstantaneous: the gradient of the tangent at a point. Draw it with a ruler and use two points far apart on it.', u: true },
    ]),

    // 4 Geometry and measures
    ...topicOnly('geometry-and-measures-aqa-gcse-maths', '4', [
      { n: 1, f: 'Angles and parallel lines', b: 'Alternate angles are equal. Corresponding angles are equal. Use these names as reasons, not "Z angles" or "F angles".' },
      { n: 2, f: 'Angle sums of polygons', b: 'Interior angles of an n-sided polygon add to (n − 2) × 180°.\nRegular polygon: exterior angle = 360° ÷ n; interior angle = 180° − exterior angle.' },
      { n: 3, f: 'Conditions for congruent triangles', b: 'SSS, SAS (the angle must be between the two sides), ASA, RHS. AAA shows similarity, not congruence.' },
      { n: 4, f: 'Arc length and sector area for angle θ and radius r', b: 'Arc length = (θ/360) × 2πr\nSector area = (θ/360) × πr²\nSector perimeter = arc length + 2r.\nExample: r = 12, θ = 75°: area 30π cm², arc 5π cm.' },
      { n: 5, f: 'Pythagoras and the right-angled trig ratios', b: 'a² + b² = c², where c is the hypotenuse.\nsin x = opp/hyp, cos x = adj/hyp, tan x = opp/adj. Use sin⁻¹, cos⁻¹ or tan⁻¹ to find an angle.' },
      { n: 6, f: 'Exact trig values for 30°, 45° and 60°', b: 'sin 30° = cos 60° = 1/2\nsin 60° = cos 30° = √3/2\nsin 45° = cos 45° = √2/2\ntan 30° = √3/3, tan 45° = 1, tan 60° = √3' },
      { n: 7, f: 'Circle theorems', b: 'Angle at the centre = 2 × angle at the circumference. Angle in a semicircle = 90°. Angles in the same segment are equal. Opposite angles of a cyclic quadrilateral add to 180°. Tangent ⊥ radius. Tangents from a point are equal. Perpendicular from the centre bisects a chord. Alternate segment theorem.', u: true },
      { n: 8, f: 'Sine rule, cosine rule and area: which to use?', b: 'Side and opposite angle known: sine rule, a/sin A = b/sin B.\nTwo sides and the included angle, or three sides: cosine rule, a² = b² + c² − 2bc cos A.\nArea = ½ab sin C.', u: true },
      { n: 9, f: 'Similar shapes with length scale factor k: area and volume factors', b: 'Area scale factor k². Volume scale factor k³. To go back from areas to lengths, square-root; from volumes, cube-root.', u: true },
      { n: 10, f: 'How do you prove three points are collinear with vectors?', b: 'Show two of the vectors are parallel (one is a multiple of the other) and that they share a point. Parallel alone is not enough.', u: true },
    ]),

    // 5 Probability
    ...topicOnly('probability-aqa-gcse-maths', '5', [
      { n: 1, f: 'Probability of an event not happening', b: 'P(not A) = 1 − P(A), because exhaustive outcomes sum to 1.' },
      { n: 2, f: 'Relative frequency and expected frequency', b: 'Relative frequency = times the outcome happened ÷ number of trials.\nExpected frequency = probability × number of trials.\nMore trials give a more reliable estimate.' },
      { n: 3, f: 'Mutually exclusive compared with independent events', b: 'Mutually exclusive: cannot happen at the same time, so P(A and B) = 0.\nIndependent: one does not change the probability of the other, so P(A and B) = P(A) × P(B).' },
      { n: 4, f: 'The "or" rule', b: 'P(A or B) = P(A) + P(B) − P(A and B).\nFor mutually exclusive events, P(A or B) = P(A) + P(B).' },
      { n: 5, f: 'How do you use a tree diagram?', b: '1. Each pair of branches from one point sums to 1.\n2. Multiply along the branches for each outcome.\n3. Add the outcomes that fit the event.\nWithout replacement, the second-pick denominators drop by 1.' },
      { n: 6, f: '3 green and 2 white beads; two are taken without replacement. P(both white)?', b: '2/5 × 1/4 = 2/20 = 1/10' },
      { n: 7, f: 'Two fair dice are rolled. P(the sum is 9)?', b: 'There are 36 equally likely outcomes. Sum 9: (3,6), (4,5), (5,4), (6,3), so 4/36 = 1/9.' },
      { n: 8, f: 'How do you work out P(at least one)?', b: '1 − P(none).' },
      { n: 9, f: 'Conditional probability formula', b: 'P(A given B) = P(A and B) ÷ P(B). "Given" cuts the sample space down to B: in a two-way table or Venn diagram, divide by the B total, not the grand total.', u: true },
      { n: 10, f: '60% of pupils take the bus and 25% of bus users are late. 20% of all pupils are late. P(took the bus given late)?', b: 'Out of 100 pupils: 60 take the bus, 15 of those are late, 20 are late in total.\nP(bus given late) = 15/20 = 0.75', u: true },
    ]),

    // 6 Statistics
    ...topicOnly('statistics-aqa-gcse-maths', '6', [
      { n: 1, f: 'Random sample compared with biased sample', b: 'Random: every member of the population has an equal chance of being chosen.\nBiased: some members are more likely to be chosen, so results are skewed. A bigger random sample is more reliable.' },
      { n: 2, f: 'Discrete compared with continuous data', b: 'Discrete: separate values, usually counts.\nContinuous: measured values that can take any value in a range.' },
      { n: 3, f: 'How do you estimate the mean from grouped data?', b: '1. Find each class midpoint.\n2. Multiply each midpoint by its frequency and add.\n3. Divide by the total frequency (not the number of classes).\nIt is an estimate because the exact values are not known.' },
      { n: 4, f: 'Position of the median', b: 'The (n + 1)/2 th value, with the data in order. In a frequency table, keep a running total until you pass that position.' },
      { n: 5, f: 'Pie chart angle', b: 'Angle = (frequency ÷ total) × 360°. Check that the angles add up to 360°.' },
      { n: 6, f: 'Frequency density', b: 'Frequency density = frequency ÷ class width. It goes on the vertical axis of a histogram; frequency = bar area.\nExample: 20 < t ≤ 40 with frequency 30 has density 30 ÷ 20 = 1.5.', u: true },
      { n: 7, f: 'Cumulative frequency graph: where are the points plotted, and how do you read the median?', b: 'Plot each running total at the upper class boundary. Read the median across from n/2, the lower quartile from n/4 and the upper quartile from 3n/4.', u: true },
      { n: 8, f: 'Box plot and interquartile range', b: 'A box plot shows minimum, LQ, median, UQ and maximum. IQR = UQ − LQ. The IQR is not affected by extreme values, so it is a better measure of spread than the range when there are outliers.', u: true },
      { n: 9, f: 'Scatter graphs: correlation, causation and extrapolation', b: 'Correlation does not mean one variable causes the other. Interpolation (inside the data) is fairly reliable; extrapolation (outside the data) may not be.' },
      { n: 10, f: 'How do you compare two distributions?', b: 'Compare an average (such as the median or mean) and a measure of spread (the range), each in a sentence about the context.' },
      { n: 11, f: 'Comparing two distributions with box plots', b: 'Compare the medians (average) and the interquartile ranges (spread), each in a sentence about the context. A smaller IQR means the middle half of the data is more consistent.', u: true },
    ]),
  ],
};
