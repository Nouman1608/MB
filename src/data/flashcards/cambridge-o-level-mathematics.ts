/**
 * D-438 -- flashcards for Cambridge O Level Mathematics (Syllabus D) 4024 (2025-2027).
 *
 * One block per subtopic (or per topic, where the syllabus record lists no
 * subtopics), in syllabus order. Card ids are `<subtopic number>-<n>` or
 * `<topic number>-<n>` and are permanent (browser progress is keyed by them):
 * add a new card with the next unused n, never renumber.
 *
 *   4024 is not tiered, so no card carries a tier.
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 4024, or a term in the page's
 *               key-terms table); origin 'revision-notes'.
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

const topicOnly = (topic: string, number: number, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b, u, src }) => ({
    id: `${number}-${n}`,
    topic,
    front: f,
    back: b,
    ...(u ? { tier: 'upper' as const } : {}),
    origin: src ? 'revision-notes' as const : 'authored' as const,
    ...(src ? { source: src } : {}),
  }));

const NUM = 'o-level-mathematics-number-revision-notes';
const IND = 'indices-and-equations-revision-notes';
const FUNC = 'functions-revision-notes';
const COORD = 'o-level-mathematics-coordinate-geometry-revision-notes';
const GEOM = 'o-level-mathematics-geometry-revision-notes';
const PROB = 'o-level-mathematics-probability-revision-notes';
const VEC = 'cambridge-o-level-mathematics-vectors-in-two-dimensions-column-vectors-magnitude-and-revision-notes';
const STAT = 'cambridge-o-level-mathematics-statistics-classifying-data-averages-spread-and-revision-notes';

export const DECK_CAMBRIDGE_O_LEVEL_MATHEMATICS: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'o-level',
  subjectSlug: 'mathematics',
  syllabusCode: '4024',
  syllabusSeries: '2025-2027',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'sajawal-zahid', reviewedOn: '2026-11-05' },
  cards: [
    // 1 Number
    ...topicOnly('number', 1, [
      { n: 1, f: 'Prime number', b: 'A number with exactly two factors: 1 and itself. 1 is not prime (it has only one factor).', src: NUM },
      { n: 2, f: 'Rational and irrational numbers', b: 'Rational: can be written as a/b, where a and b are integers (b ≠ 0).\nIrrational: cannot be written as a fraction, for example π and √2.', src: NUM },
      { n: 3, f: 'How do you find the HCF and LCM of two numbers?', b: '1. Write each number as a product of prime factors.\n2. HCF: multiply the shared primes, each to its lowest power.\n3. LCM: multiply every prime, each to its highest power.\nExample: 56 = 2³ × 7, 210 = 2 × 3 × 5 × 7, so HCF = 14 and LCM = 840.' },
      { n: 4, f: 'Sets: formula for n(A ∪ B)', b: 'n(A ∪ B) = n(A) + n(B) − n(A ∩ B)\nn means "number of elements in". Subtract the overlap because it was counted twice.' },
      { n: 5, f: 'Write 0.6̇3̇ (0.6363…) as a fraction', b: 'x = 0.6363…, so 100x = 63.6363…\nSubtract: 99x = 63\nx = 63/99 = 7/11' },
      { n: 6, f: 'Index rules for zero, negative and fractional powers', b: 'a⁰ = 1\na⁻ⁿ = 1/aⁿ\na^(m/n) = (ⁿ√a)ᵐ: take the root first, then the power.\nExample: 64^(2/3) = 4² = 16.' },
      { n: 7, f: 'Standard form', b: 'A × 10ⁿ, where 1 ≤ A < 10 and n is an integer.\nExamples: 45 000 000 = 4.5 × 10⁷; 0.00306 = 3.06 × 10⁻³.\n30 × 10⁴ is not in standard form: write 3 × 10⁵.' },
      { n: 8, f: 'A length is 847.6 m to 1 decimal place. Write its bounds.', b: '847.55 ≤ l < 847.65\nThe bounds are half a unit (0.05) either side. For the largest a − b or a ÷ b, use the upper bound of a with the lower bound of b.' },
      { n: 9, f: 'How do you share an amount in a ratio? (240 in the ratio 3 : 5)', b: '1. Add the parts: 3 + 5 = 8.\n2. One part = 240 ÷ 8 = 30.\n3. Multiply: 3 × 30 = 90 and 5 × 30 = 150.' },
      { n: 10, f: 'Reverse percentage: after a 20% discount a coat costs 1920 dollars. Find the original price.', b: 'The multiplier for a 20% decrease is 0.8.\nOriginal = 1920 ÷ 0.8 = 2400 dollars.\nDivide by the multiplier; do not take 20% of the new price.' },
      { n: 11, f: 'Compound interest formula', b: 'Amount = P × (1 + r/100)ⁿ\nP = principal, r = rate per year (%), n = number of years. Subtract P to get the interest.\nExample: 480 dollars at 5% for 3 years: 480 × 1.05³ = 555.66 dollars.' },
      { n: 12, f: 'How do you rationalise a denominator of the form a + √b?', b: 'Multiply top and bottom by a − √b. The denominator becomes a² − b.\nExample: 9/(4 + √7) = 9(4 − √7)/(16 − 7) = 4 − √7.' },
    ]),

    // 2 Algebra and graphs
    ...sub('algebra-and-graphs', 'introduction-to-algebra', '2.1', [
      { n: 1, f: 'Like terms', b: 'Terms with exactly the same letters raised to exactly the same powers. 3a² and 5a² are like terms; 3a² and 3a are not.' },
      { n: 2, f: 'Find the value of 3x² − 2x when x = −2', b: '3 × (−2)² − 2 × (−2) = 3 × 4 + 4 = 16.\nSquare the negative number: (−2)² = 4.' },
      { n: 3, f: 'Simplify 2a² + 3ab − 1 + 5a² − 9ab + 4', b: 'a² terms: 7a². ab terms: −6ab. Numbers: 3.\nAnswer: 7a² − 6ab + 3' },
      { n: 4, f: 'Write an expression for the product of two consecutive even numbers', b: 'n(n + 2), where n is an even number. Letters stand for general numbers, so the expression works for any case.' },
    ]),
    ...sub('algebra-and-graphs', 'algebraic-manipulation', '2.2', [
      { n: 1, f: 'Expand (x + a)²', b: 'x² + 2ax + a²\nTrap: (x + a)² is not x² + a². The middle term 2ax is compulsory.' },
      { n: 2, f: 'Difference of two squares', b: 'x² − a² = (x + a)(x − a)\nExample: x² − 25 = (x + 5)(x − 5).' },
      { n: 3, f: 'Factorising: what order do you check in?', b: '1. Common factor first, always.\n2. Difference of two squares.\n3. Quadratic trinomial: two numbers that multiply to ac and add to b.\n4. Grouping, for four terms.' },
      { n: 4, f: 'Factorise fully 2x³ + 10x² + 12x', b: 'Common factor first: 2x(x² + 5x + 6)\nThen the quadratic: 2x(x + 2)(x + 3)' },
      { n: 5, f: 'Complete the square: x² + 8x + 3', b: '(x + 4)² − 16 + 3 = (x + 4)² − 13\nGeneral: x² + bx + c = (x + b/2)² − (b/2)² + c. Check by expanding back out.' },
      { n: 6, f: 'Factorise by grouping: ax + ay + bx + by', b: 'a(x + y) + b(x + y) = (a + b)(x + y)\nPair terms that share a factor, then take out the common bracket.' },
    ]),
    ...sub('algebra-and-graphs', 'algebraic-fractions', '2.3', [
      { n: 1, f: 'How do you simplify an algebraic fraction?', b: 'Factorise the top and the bottom, then cancel common factors. Never cancel individual terms: in (x + 2)/(x + 4) nothing cancels.' },
      { n: 2, f: 'Simplify (x² − 9)/(x² + 4x + 3)', b: '(x + 3)(x − 3) / ((x + 3)(x + 1)) = (x − 3)/(x + 1)' },
      { n: 3, f: 'Simplify x/3 + (x − 4)/2', b: 'Common denominator 6: 2x/6 + 3(x − 4)/6 = (2x + 3x − 12)/6 = (5x − 12)/6' },
      { n: 4, f: 'How do you divide algebraic fractions? (3a/4 ÷ 9a/10)', b: 'Multiply by the reciprocal of the second fraction:\n3a/4 × 10/(9a) = 30a/(36a) = 5/6' },
    ]),
    ...sub('algebra-and-graphs', 'indices-ii', '2.4', [
      { n: 1, f: 'Index laws for multiplying, dividing and raising a power', b: 'aᵐ × aⁿ = aᵐ⁺ⁿ\naᵐ ÷ aⁿ = aᵐ⁻ⁿ\n(aᵐ)ⁿ = aᵐⁿ\nThe base must be the same.' },
      { n: 2, f: 'What is 2⁻³?', b: '1/2³ = 1/8. A negative index means a reciprocal, not a negative number (it is not −8).' },
      { n: 3, f: 'Evaluate 27^(2/3)', b: 'Root first, then power: (∛27)² = 3² = 9.' },
      { n: 4, f: 'Simplify (2x³)⁴', b: '2⁴ × x¹² = 16x¹². Raise the number and the letter to the power 4.' },
      { n: 5, f: 'Solve 5^(x+1) = 25ˣ', b: 'Write both sides with base 5: 5^(x+1) = 5^(2x).\nEquate the indices: x + 1 = 2x, so x = 1.' },
    ]),
    ...sub('algebra-and-graphs', 'equations', '2.5', [
      { n: 1, f: 'Simultaneous equations: when is elimination a good method?', b: 'When both equations are linear. Make the coefficients of one letter match, then add or subtract the equations.', src: IND },
      { n: 2, f: 'Simultaneous equations: when is substitution a good method?', b: 'When one equation is already in the form y = … (or can easily be rearranged into it). Substitute it into the other equation.', src: IND },
      { n: 3, f: 'The quadratic formula', b: 'For ax² + bx + c = 0:\nx = (−b ± √(b² − 4ac)) / (2a)\nRearrange to = 0 first. If b = −5, then −b = +5.' },
      { n: 4, f: 'What does the discriminant b² − 4ac tell you?', b: 'Positive: two real roots.\nZero: one repeated root.\nNegative: no real roots.' },
      { n: 5, f: 'Changing the subject when the letter appears twice: make x the subject of ax + b = cx + d', b: 'Collect the x terms on one side: ax − cx = d − b.\nFactorise: x(a − c) = d − b.\nDivide: x = (d − b)/(a − c).' },
      { n: 6, f: 'Solving an equation with x in a denominator: what must you check at the end?', b: 'Reject any solution that would make an original denominator zero.' },
    ]),
    ...sub('algebra-and-graphs', 'inequalities', '2.6', [
      { n: 1, f: 'When does an inequality sign reverse?', b: 'When you multiply or divide both sides by a negative number.\nExample: −3x > 12 gives x < −4. Adding and subtracting never reverse it.' },
      { n: 2, f: 'Number line: open circle or filled circle?', b: 'Open circle: < or > (the end value is not included).\nFilled circle: ≤ or ≥ (the end value is included).' },
      { n: 3, f: 'Graph of an inequality: dashed or solid boundary line?', b: 'Dashed: < or > (points on the line are not included).\nSolid: ≤ or ≥ (points on the line are included).' },
      { n: 4, f: 'Solve −5 < 2x + 1 ≤ 9 and list the integer solutions', b: 'Subtract 1 from each part: −6 < 2x ≤ 8. Divide by 2: −3 < x ≤ 4.\nIntegers: −2, −1, 0, 1, 2, 3, 4 (−3 is not included, 4 is).' },
      { n: 5, f: 'How do you decide which side of a line satisfies an inequality?', b: 'Test a point that is not on the line, usually (0, 0). If it makes the inequality true, that side is the required region.' },
    ]),
    ...sub('algebra-and-graphs', 'sequences', '2.7', [
      { n: 1, f: 'How do you tell a linear, a quadratic and an exponential sequence apart?', b: 'Constant first difference: linear.\nConstant second difference: quadratic.\nConstant ratio between terms: exponential.' },
      { n: 2, f: 'Find the nth term of 5, 8, 11, 14, …', b: 'Difference 3, so start with 3n: 3, 6, 9, 12.\nEach term is 2 more, so the nth term is 3n + 2.' },
      { n: 3, f: 'Find the nth term of 3, 8, 15, 24, …', b: 'Second difference 2, so a = 2 ÷ 2 = 1: start with n².\nTerms − n²: 2, 4, 6, 8, which is 2n.\nnth term = n² + 2n.' },
      { n: 4, f: 'Find the nth term of 2, 6, 18, 54, …', b: 'Constant ratio r = 3 and first term a = 2.\nnth term = arⁿ⁻¹ = 2 × 3ⁿ⁻¹.' },
      { n: 5, f: 'Triangular numbers', b: '1, 3, 6, 10, 15, … The differences go up by 1 each time.' },
    ]),
    ...sub('algebra-and-graphs', 'proportion', '2.8', [
      { n: 1, f: 'y is directly proportional to x: equation and graph', b: 'y = kx, where k is a constant. The graph is a straight line through the origin. If x doubles, y doubles.' },
      { n: 2, f: 'y is inversely proportional to x: equation and effect', b: 'y = k/x. If x doubles, y halves. The product xy stays constant.' },
      { n: 3, f: 'Method for a proportion question', b: '1. Write the equation with k (for example y = kx²).\n2. Substitute the given pair to find k.\n3. Rewrite the equation with that k.\n4. Use it to answer the question.' },
      { n: 4, f: 'y is directly proportional to x². When x = 3, y = 45. Find y when x = 5.', b: '45 = k × 9, so k = 5 and y = 5x².\nWhen x = 5: y = 5 × 25 = 125.' },
    ]),
    ...sub('algebra-and-graphs', 'graphs-in-practical-situations', '2.9', [
      { n: 1, f: 'What does the gradient of a distance–time graph show?', b: 'The speed. A horizontal line means the object is stationary.' },
      { n: 2, f: 'Speed–time graph: what do the gradient and the area under the graph show?', b: 'Gradient: acceleration.\nArea under the graph: distance travelled.\nA horizontal line means constant speed, not stopped.' },
      { n: 3, f: 'A car goes from 0 to 15 m/s in 6 s at a steady rate. Find the acceleration and the distance.', b: 'Acceleration = 15 ÷ 6 = 2.5 m/s².\nDistance = area of triangle = ½ × 6 × 15 = 45 m.' },
      { n: 4, f: 'How do you change km/h into m/s?', b: 'Divide by 3.6 (1 km/h = 1000 m ÷ 3600 s).\nExample: 72 km/h = 72 ÷ 3.6 = 20 m/s.' },
      { n: 5, f: 'When does a conversion graph pass through the origin?', b: 'Only when the two quantities are directly proportional (for example miles and kilometres). The Celsius–Fahrenheit line does not, because 0 °C = 32 °F.' },
    ]),
    ...sub('algebra-and-graphs', 'graphs-of-functions', '2.10', [
      { n: 1, f: 'Shape of y = ax² + bx + c', b: 'A parabola with one turning point. It opens upwards (a minimum) if a > 0 and downwards (a maximum) if a < 0.' },
      { n: 2, f: 'Shape of y = k/x', b: 'A hyperbola with two separate branches. The x-axis and y-axis are asymptotes: the curve gets closer and closer to them but never meets them.' },
      { n: 3, f: 'Exponential graph y = abˣ + c: growth or decay?', b: 'Growth when b > 1; decay when 0 < b < 1 (for a > 0). The curve approaches the horizontal asymptote y = c but never reaches it.' },
      { n: 4, f: 'How do you solve f(x) = g(x) using graphs?', b: 'Draw both graphs and read the x-coordinates of the points where they intersect. The answer is the x-values, not the coordinate pairs.' },
      { n: 5, f: 'How do you find the gradient of a curve at a point?', b: 'Draw a tangent to the curve at that point, then find the gradient of the tangent using a large triangle.' },
      { n: 6, f: 'The curve y = x² − 2x − 3 is drawn. Which line do you draw to solve x² − 3x − 1 = 0?', b: 'Rearrange so one side is the drawn curve: x² − 2x − 3 = x − 2.\nDraw y = x − 2 and read the x-coordinates where it meets the curve.' },
    ]),
    ...sub('algebra-and-graphs', 'sketching-curves', '2.11', [
      { n: 1, f: 'Which key features should a sketch of a curve show?', b: 'The y-intercept (set x = 0), the x-intercepts or roots (set y = 0), any turning points, and any asymptotes, all labelled. It need not be to scale.' },
      { n: 2, f: 'Turning point from completed square form y = a(x + p)² + q', b: 'Turning point at (−p, q). The line of symmetry is x = −p.' },
      { n: 3, f: 'Sketch facts for y = x² − 2x − 3', b: 'y-intercept −3. Roots: (x + 1)(x − 3) = 0, so x = −1 and x = 3.\nLine of symmetry halfway between the roots, x = 1, so the minimum point is (1, −4).' },
      { n: 4, f: 'Shape of a cubic y = ax³ + …', b: 'If a > 0 the curve rises from bottom left to top right; if a < 0 it falls from top left to bottom right. It has either two turning points or none.' },
      { n: 5, f: 'What tells you the shape of a graph before you plot anything?', b: 'The highest power of x: 1 gives a straight line, 2 a parabola, 3 a cubic; x in a denominator (k/x) gives a hyperbola; x as a power gives an exponential.' },
    ]),
    ...sub('algebra-and-graphs', 'functions', '2.12', [
      { n: 1, f: 'Domain of a function', b: 'The set of inputs (x values) allowed.', src: FUNC },
      { n: 2, f: 'Range of a function', b: 'The set of outputs (y values) produced.', src: FUNC },
      { n: 3, f: 'f(x) = 2x + 1 and g(x) = x². Find fg(x).', b: 'fg(x) means do g first, then f:\nfg(x) = f(x²) = 2x² + 1.\n(gf(x) = (2x + 1)², which is different.)' },
      { n: 4, f: 'How do you find an inverse function? (f(x) = 3x − 5)', b: '1. Write y = 3x − 5.\n2. Swap x and y: x = 3y − 5.\n3. Make y the subject: y = (x + 5)/3.\n4. f⁻¹(x) = (x + 5)/3.' },
      { n: 5, f: 'What does f⁻¹(x) mean, and how is its graph related to y = f(x)?', b: 'The inverse function, which undoes f. It is not 1/f(x). Its graph is the reflection of y = f(x) in the line y = x.' },
      { n: 6, f: 'Which value must be excluded from the domain of g(x) = 1/(x − 2)?', b: 'x = 2, because it makes the denominator zero and division by zero is undefined.' },
    ]),

    // 3 Coordinate geometry
    ...topicOnly('coordinate-geometry', 3, [
      { n: 1, f: 'Gradient (meaning)', b: 'How much y changes for each 1 unit increase in x. Rising to the right is positive; falling to the right is negative.', src: COORD },
      { n: 2, f: 'Gradient of the line through (x₁, y₁) and (x₂, y₂)', b: 'm = (y₂ − y₁) ÷ (x₂ − x₁)\nSubtract in the same order on top and below.' },
      { n: 3, f: 'Length of the line segment from (x₁, y₁) to (x₂, y₂)', b: '√((x₂ − x₁)² + (y₂ − y₁)²)' },
      { n: 4, f: 'Midpoint of (x₁, y₁) and (x₂, y₂)', b: '((x₁ + x₂)/2, (y₁ + y₂)/2): add the coordinates and halve each.' },
      { n: 5, f: 'Find the midpoint and length of the segment from (−1, −2) to (5, 6)', b: 'Midpoint: (4/2, 4/2) = (2, 2).\nLength: √(6² + 8²) = √100 = 10.' },
      { n: 6, f: 'In y = mx + c, what do m and c stand for?', b: 'm is the gradient (the number multiplying x); c is the y-intercept, where the line crosses the y-axis (x = 0).' },
      { n: 7, f: 'Find the gradient and y-intercept of 3x − 4y = 24', b: 'Rearrange: −4y = 24 − 3x, so y = (3/4)x − 6.\nGradient 3/4, y-intercept −6.' },
      { n: 8, f: 'Parallel lines and perpendicular lines: gradient rules', b: 'Parallel: equal gradients, m₁ = m₂.\nPerpendicular: m₁ × m₂ = −1, so the perpendicular gradient is −1/m (flip the fraction and change the sign).' },
      { n: 9, f: 'Find the line parallel to y = 3x + 1 through (2, 5)', b: 'Gradient 3. Substitute: 5 = 3 × 2 + c, so c = −1.\ny = 3x − 1' },
      { n: 10, f: 'Perpendicular bisector (meaning)', b: 'A line that cuts a line segment in half at 90°.', src: COORD },
      { n: 11, f: 'How do you find the equation of the perpendicular bisector of PQ?', b: '1. Find the midpoint of PQ.\n2. Find the gradient of PQ.\n3. Take the perpendicular gradient −1/m.\n4. Use y − y₁ = m(x − x₁) through the midpoint.' },
      { n: 12, f: 'The lines x = 3 and y = 3: how do they differ?', b: 'x = 3 is vertical, through (3, 0); its gradient is undefined.\ny = 3 is horizontal, through (0, 3); its gradient is 0.' },
    ]),

    // 4 Geometry
    ...topicOnly('geometry', 4, [
      { n: 1, f: 'Similar and congruent shapes', b: 'Similar: same shape, with lengths in a constant ratio.\nCongruent: same shape and same size.', src: GEOM },
      { n: 2, f: 'Sector and segment of a circle', b: 'Sector: bounded by two radii and an arc.\nSegment: bounded by a chord and an arc.', src: GEOM },
      { n: 3, f: 'Bearings: the rules, and the back bearing of 296°', b: 'Measured clockwise from north, written with three figures (for example 040°).\nBack bearing: add 180° if under 180°, subtract 180° if 180° or more. 296° − 180° = 116°.' },
      { n: 4, f: 'Similar shapes: length scale factor k. What are the area and volume scale factors?', b: 'Area scale factor k². Volume scale factor k³.\nGiven areas or volumes, take the square root or cube root first to get k.' },
      { n: 5, f: 'Two similar cylinders have heights in the ratio 2 : 3. The smaller holds 40 cm³. Find the volume of the larger.', b: 'Volume factor (3/2)³ = 27/8.\n40 × 27/8 = 135 cm³.' },
      { n: 6, f: 'Sum of the interior angles of a polygon with n sides', b: '(n − 2) × 180°. The exterior angles of any polygon add up to 360°.' },
      { n: 7, f: 'Each interior angle of a regular polygon is 140°. How many sides?', b: 'Exterior angle = 180° − 140° = 40°.\nn = 360° ÷ 40° = 9 sides.' },
      { n: 8, f: 'Angles with parallel lines: corresponding, alternate, co-interior', b: 'Corresponding angles (F shape) are equal.\nAlternate angles (Z shape) are equal.\nCo-interior angles (C shape) add up to 180°.' },
      { n: 9, f: 'Circle theorems: angle at the centre, and angle in a semicircle', b: 'The angle at the centre is twice the angle at the circumference standing on the same arc.\nThe angle in a semicircle is 90°.' },
      { n: 10, f: 'Circle theorems: cyclic quadrilateral, and angles in the same segment', b: 'Opposite angles of a cyclic quadrilateral add up to 180°.\nAngles in the same segment are equal.' },
      { n: 11, f: 'Circle theorems about tangents', b: 'A tangent is perpendicular to the radius at the point of contact.\nTangents from an external point are equal in length.\nAlternate segment theorem: the angle between a tangent and a chord equals the angle in the alternate segment.' },
      { n: 12, f: 'A circle has diameter 26 cm. A chord is 10 cm long. How far is the chord from the centre?', b: 'The perpendicular from the centre bisects the chord. Radius 13, half-chord 5.\nDistance = √(13² − 5²) = √144 = 12 cm.' },
    ]),

    // 5 Mensuration
    ...topicOnly('mensuration', 5, [
      { n: 1, f: 'Area and volume unit conversions: m² to cm², m³ to cm³', b: '1 m² = 100² = 10 000 cm².\n1 m³ = 100³ = 1 000 000 cm³.\nSquare the length factor for area; cube it for volume.' },
      { n: 2, f: 'Capacity conversions', b: '1 cm³ = 1 ml.\n1 litre = 1000 cm³.\n1 m³ = 1000 litres.' },
      { n: 3, f: 'Area of a trapezium', b: '½(a + b)h, where a and b are the parallel sides and h is the perpendicular height between them.' },
      { n: 4, f: 'Arc length and sector area for angle θ', b: 'Arc length = (θ/360) × 2πr.\nSector area = (θ/360) × πr².\nThe perimeter of a sector is the arc length + 2r.' },
      { n: 5, f: 'A sector has radius 8 cm and angle 135°. Find the arc length and area in terms of π.', b: 'Fraction = 135/360 = 3/8.\nArc = 3/8 × 16π = 6π cm.\nArea = 3/8 × 64π = 24π cm².' },
      { n: 6, f: 'Volume and curved surface area of a cone', b: 'Volume = ⅓πr²h (h = perpendicular height).\nCurved surface area = πrl (l = slant height).' },
      { n: 7, f: 'A cone has base radius 5 cm and slant height 13 cm. Find its height and volume.', b: 'h = √(13² − 5²) = √144 = 12 cm.\nVolume = ⅓ × π × 25 × 12 = 100π cm³.' },
      { n: 8, f: 'Volume and surface area of a sphere', b: 'Volume = (4/3)πr³.\nSurface area = 4πr².' },
      { n: 9, f: 'Total surface area of a solid hemisphere of radius r', b: 'Curved surface 2πr² plus the flat circle πr² = 3πr².\nFor r = 3 cm: 27π cm².' },
      { n: 10, f: 'Volume of a prism and of a cylinder', b: 'Prism: area of cross-section × length.\nCylinder: πr²h. Its curved surface area is 2πrh.' },
      { n: 11, f: 'A sphere of radius 3 cm is melted and recast as a cone of base radius 3 cm. Find the cone height.', b: 'The volume stays the same. Sphere: (4/3)π × 27 = 36π.\nCone: ⅓ × π × 9 × h = 3πh = 36π, so h = 12 cm.' },
      { n: 12, f: 'How do you find the volume of a frustum?', b: 'A frustum is a cone (or pyramid) with the top cut off parallel to the base. Volume = volume of the whole cone − volume of the small cone removed (the two cones are similar).' },
    ]),

    // 6 Trigonometry
    ...topicOnly('trigonometry', 6, [
      { n: 1, f: "Pythagoras' theorem", b: 'In a right-angled triangle with hypotenuse c: a² + b² = c².\nAdd the squares to find the hypotenuse; subtract to find a shorter side.' },
      { n: 2, f: 'sin θ, cos θ and tan θ in a right-angled triangle', b: 'sin θ = opposite/hypotenuse\ncos θ = adjacent/hypotenuse\ntan θ = opposite/adjacent' },
      { n: 3, f: 'Angle of elevation and angle of depression', b: 'Both are measured from the horizontal: elevation upwards to the line of sight, depression downwards. The depression from A to B equals the elevation from B to A (alternate angles).' },
      { n: 4, f: 'The sine rule', b: 'a/sin A = b/sin B = c/sin C\n(side a is opposite angle A). Use it when you know a side and its opposite angle.' },
      { n: 5, f: 'The cosine rule (finding a side and finding an angle)', b: 'a² = b² + c² − 2bc cos A\ncos A = (b² + c² − a²)/(2bc)\nUse it with two sides and the included angle, or with all three sides.' },
      { n: 6, f: 'Area of a triangle using sine', b: 'Area = ½ab sin C, where C is the angle between sides a and b.' },
      { n: 7, f: 'Two sides are 5 cm and 8 cm with an included angle of 60°. Find the third side.', b: 'a² = 25 + 64 − 2 × 5 × 8 × cos 60° = 89 − 40 = 49\na = 7 cm' },
      { n: 8, f: 'sin(180° − x) and cos(180° − x)', b: 'sin(180° − x) = sin x, so sin 140° = sin 40°.\ncos(180° − x) = −cos x, so a negative cosine means an obtuse angle.' },
      { n: 9, f: 'The ambiguous case of the sine rule', b: 'Given two sides and a non-included angle, sin B can give B or 180° − B. Keep the obtuse value only if the angles still add up to less than 180°.' },
      { n: 10, f: 'Space diagonal of a cuboid l × w × h', b: '√(l² + w² + h²)\nExample: 4 × 3 × 12 cm gives √(16 + 9 + 144) = 13 cm.' },
      { n: 11, f: 'Angle between a line and a plane', b: 'The angle between the line and its projection on the plane. Drop a perpendicular from the top of the line to the plane, draw the right-angled triangle, then use a trig ratio.' },
      { n: 12, f: '4024 accuracy for answers on the calculator paper', b: 'Non-exact answers to 3 significant figures and angles in degrees to 1 decimal place, unless the question says otherwise. Do not round until the final answer.' },
    ]),

    // 7 Transformations and vectors
    ...sub('transformations-and-vectors', 'transformations-4024', '7.1', [
      { n: 1, f: 'Describe a transformation fully: what must you state for each type?', b: 'Reflection: the mirror line as an equation.\nRotation: angle, direction and centre.\nEnlargement: scale factor and centre.\nTranslation: the column vector.' },
      { n: 2, f: 'Reflection of (x, y) in y = x and in y = −x', b: 'In y = x: (y, x).\nIn y = −x: (−y, −x).' },
      { n: 3, f: 'Rotation of (x, y) through 90° about the origin', b: 'Anticlockwise: (−y, x).\nClockwise: (y, −x).\nHalf turn (180°): (−x, −y).' },
      { n: 4, f: 'Negative scale factor of enlargement: what does it do?', b: 'The image is on the opposite side of the centre and is inverted. Lengths are multiplied by the size of k. A scale factor of −1 is the same as a 180° rotation about the centre.' },
      { n: 5, f: 'A shape of area 20 cm² is enlarged by scale factor 3/2. Find the image area.', b: 'Areas are multiplied by k² = 9/4.\n20 × 9/4 = 45 cm².' },
      { n: 6, f: 'P(3, −1) is translated to P′(−2, 5). Find the translation vector.', b: 'Image minus object: x: −2 − 3 = −5, y: 5 − (−1) = 6.\nColumn vector with top −5 and bottom 6.' },
    ]),
    ...sub('transformations-and-vectors', 'vectors-in-two-dimensions-4024', '7.2', [
      { n: 1, f: 'Vector', b: 'A quantity with size (magnitude) and direction.', src: VEC },
      { n: 2, f: 'Scalar', b: 'An ordinary number used to multiply a vector.', src: VEC },
      { n: 3, f: 'Position vector', b: 'The vector from the origin O to a point: OA = a.', src: VEC },
      { n: 4, f: 'p = (1, 4) and q = (−3, 2) as column vectors. Find 2p + 3q.', b: '2p = (2, 8), 3q = (−9, 6).\n2p + 3q = (−7, 14).' },
      { n: 5, f: 'OA = a and OB = b. Write AB and BA.', b: 'AB = OB − OA = b − a.\nBA = −AB = a − b.' },
    ]),
    ...sub('transformations-and-vectors', 'magnitude-of-a-vector-4024', '7.3', [
      { n: 1, f: 'Magnitude of the column vector (x, y)', b: '|(x, y)| = √(x² + y²), the length of the vector. It is always a non-negative number.', src: VEC },
      { n: 2, f: 'Find |(8, 15)|', b: '√(64 + 225) = √289 = 17' },
      { n: 3, f: 'The vector (k, 4) has magnitude 5 and k is positive. Find k.', b: 'k² + 16 = 25, so k² = 9 and k = 3.' },
      { n: 4, f: 'a = (3, 4) and b = (5, 12). Is |a + b| equal to |a| + |b|?', b: 'No. |a| = 5 and |b| = 13, but a + b = (8, 16), so |a + b| = √320 = 8√5 ≈ 17.9, not 18.' },
    ]),
    ...sub('transformations-and-vectors', 'vector-geometry-4024', '7.4', [
      { n: 1, f: 'Parallel vectors', b: 'One is a scalar multiple of the other. Example: 9a − 6b = 1.5(6a − 4b), so they are parallel.', src: VEC },
      { n: 2, f: 'How do you show that three points P, Q and R are collinear?', b: '1. Find PQ and QR.\n2. Show one is a scalar multiple of the other, so they are parallel.\n3. State that they share the point Q.\n4. Conclude that P, Q and R lie on a straight line.' },
      { n: 3, f: 'Position vector of the midpoint M of AB', b: 'OM = ½(a + b), where OA = a and OB = b.' },
      { n: 4, f: 'AP : PB = 1 : 3. Find OP in terms of a and b.', b: 'AP = ¼AB = ¼(b − a).\nOP = a + ¼(b − a) = ¾a + ¼b.' },
      { n: 5, f: 'A point P divides AB in the ratio 2 : 3. What fraction of AB is AP?', b: '2/5 (the first part out of 2 + 3 = 5 parts), not 2/3.' },
    ]),

    // 8 Probability
    ...topicOnly('probability', 8, [
      { n: 1, f: 'The probability scale', b: '0 means impossible and 1 means certain. Every probability lies from 0 to 1. Give it as a fraction, decimal or percentage, never as a ratio like 5:2.' },
      { n: 2, f: 'Probability that A does not happen', b: "P(A′) = 1 − P(A)" },
      { n: 3, f: 'Relative frequency', b: 'Times the event happened ÷ number of trials. It is an estimate of the probability and improves as the number of trials grows.', src: PROB },
      { n: 4, f: 'Expected frequency: a pin lands point up with relative frequency 0.3. How many times in 1500 trials?', b: 'Expected frequency = probability × number of trials = 0.3 × 1500 = 450.' },
      { n: 5, f: 'Fair and biased', b: 'Fair: all outcomes are equally likely.\nBiased: outcomes are not equally likely; some are favoured.', src: PROB },
      { n: 6, f: 'How do you find P(at least one)?', b: '1. Write the opposite event, "none".\n2. Find P(none).\n3. P(at least one) = 1 − P(none).' },
      { n: 7, f: 'Tree diagrams: when do you multiply and when do you add?', b: 'Multiply along the branches of one path. Add the probabilities of different paths that give the event. Branches from one point add up to 1.' },
      { n: 8, f: 'P(test) = 0.4. If there is a test, P(revise) = 0.9; if not, P(revise) = 0.5. Find P(revise).', b: '0.4 × 0.9 + 0.6 × 0.5 = 0.36 + 0.30 = 0.66' },
      { n: 9, f: 'A bag has 4 red and 6 blue counters. Two are taken without replacement. Find P(both red).', b: '4/10 × 3/9 = 12/90 = 2/15.\nWithout replacement, the second denominator drops by one.' },
      { n: 10, f: 'Same bag (4 red, 6 blue), without replacement. Find P(one of each colour).', b: 'Two paths: 4/10 × 6/9 + 6/10 × 4/9 = 24/90 + 24/90 = 48/90 = 8/15.' },
      { n: 11, f: 'Two fair spinners numbered 1 to 4 are spun and the scores added. Find P(total = 4).', b: 'Sample space has 4 × 4 = 16 outcomes. (1, 3), (2, 2), (3, 1) give 4.\nP = 3/16' },
      { n: 12, f: 'Of 40 people, 18 speak French, 14 speak German and 12 speak neither. How many speak both?', b: 'At least one language: 40 − 12 = 28.\n18 + 14 − both = 28, so both = 4.' },
    ]),

    // 9 Statistics
    ...sub('statistics', 'classifying-statistical-data-4024', '9.1', [
      { n: 1, f: 'Categorical data', b: 'Data described in words, for example colour or type of transport.', src: STAT },
      { n: 2, f: 'Discrete data', b: 'Numerical data that can take only separate values, for example number of goals or shoe size.', src: STAT },
      { n: 3, f: 'Continuous data', b: 'Numerical data that can take any value in a range, for example time, mass or length.', src: STAT },
      { n: 4, f: 'How do you fill in a missing entry in a two-way table?', b: '1. Find a row or column with only one blank.\n2. Subtract the known entries from its total.\n3. Repeat until the table is full.\n4. Check the grand total both across and down.' },
    ]),
    ...sub('statistics', 'interpreting-statistical-data-4024', '9.2', [
      { n: 1, f: 'How do you compare two sets of data?', b: 'Make one comparison of an average and one of the spread, each in context and quoting figures from the data.' },
      { n: 2, f: 'Two classes have the same mean mark. Class A has range 8 and Class B range 35. What does this tell you?', b: 'The typical marks are the same, but Class A is more consistent; the marks in Class B are more spread out.' },
      { n: 3, f: 'Give reasons a conclusion from data may not be reliable', b: 'The sample is small or biased; grouping hides detail; averages hide spread; a chart does not prove cause; scales can mislead; predictions beyond the data are unreliable.' },
    ]),
    ...sub('statistics', 'averages-and-measures-of-spread-4024', '9.3', [
      { n: 1, f: 'Mean, median, mode and range', b: 'Mean: sum of values ÷ number of values.\nMedian: middle value of the ordered data.\nMode: most common value.\nRange: largest − smallest.', src: STAT },
      { n: 2, f: 'Position of the median of n ordered values', b: '(n + 1) ÷ 2. For 20 values this is 10.5, so the median is halfway between the 10th and 11th values.' },
      { n: 3, f: 'Mean from a frequency table: x = 0, 1, 2, 3 with frequencies 5, 7, 6, 2', b: 'Mean = Σfx ÷ Σf\nΣfx = 0 + 7 + 12 + 6 = 25, Σf = 20\nMean = 25 ÷ 20 = 1.25' },
      { n: 4, f: 'How do you estimate the mean of grouped data?', b: '1. Find the midpoint of each class.\n2. Multiply each frequency by its midpoint.\n3. Divide the total of these by the total frequency.\nIt is an estimate because the exact values are not known.' },
      { n: 5, f: 'Which average should you use when the data has an outlier?', b: 'The median. The mean is pulled towards an extreme value; the median is hardly affected.' },
    ]),
    ...sub('statistics', 'statistical-charts-and-diagrams-4024', '9.4', [
      { n: 1, f: 'Pie chart: angle for a category', b: 'Angle = (frequency ÷ total) × 360°.\nExample: 14 out of 40 gives 14/40 × 360° = 126°. Check the angles add up to 360°.' },
      { n: 2, f: 'A pie chart shows 117 people. How many does an 80° sector represent?', b: 'Frequency = (angle ÷ 360°) × total = 80/360 × 117 = 26 people.' },
      { n: 3, f: 'Composite bar chart and dual bar chart', b: 'Composite: parts stacked on one bar; the bar height is the total. Read a section as its top minus its bottom.\nDual: two bars side by side for each category, to compare the groups.' },
      { n: 4, f: 'Bar chart: what should it show?', b: 'Bars of equal width with gaps between them, a scale starting from zero, and labelled axes.' },
    ]),
    ...sub('statistics', 'scatter-diagrams-4024', '9.5', [
      { n: 1, f: 'Positive, negative and zero correlation', b: 'Positive: as x increases, y tends to increase.\nNegative: as x increases, y tends to decrease.\nZero: no link. Strong means the points lie close to a line.' },
      { n: 2, f: 'How do you draw a line of best fit?', b: 'Plot the mean point of the two variables. Draw a single ruled line through or near it, with the points roughly evenly spread on both sides along the whole line.' },
      { n: 3, f: 'Does correlation show that one variable causes the other?', b: 'No. Correlation shows a link in the data, not cause and effect.' },
      { n: 4, f: 'When is an estimate from a line of best fit reliable?', b: 'Inside the range of the data (interpolation). Far outside the range (extrapolation) it is unreliable.' },
      { n: 5, f: 'A line of best fit passes through (10, 25) and (30, 65). Find its equation.', b: 'Gradient = (65 − 25) ÷ (30 − 10) = 2.\nc = 25 − 2 × 10 = 5, so y = 2x + 5.' },
    ]),
    ...sub('statistics', 'cumulative-frequency-diagrams-4024', '9.6', [
      { n: 1, f: 'Where do you plot the points of a cumulative frequency diagram?', b: 'At the upper class boundary of each class, against the running total. Also plot (lower boundary of the first class, 0).' },
      { n: 2, f: 'How do you join the points of a cumulative frequency diagram?', b: 'With a smooth curve (not a ruled line). It never slopes downwards, because frequencies cannot be negative.' },
      { n: 3, f: 'n = 240. At what heights do you read the lower quartile, median and upper quartile?', b: 'n/4 = 60 (lower quartile), n/2 = 120 (median), 3n/4 = 180 (upper quartile). Read across to the curve, then down to the axis.' },
      { n: 4, f: 'Interquartile range', b: 'IQR = upper quartile − lower quartile. It measures the spread of the middle half of the data.' },
      { n: 5, f: 'Cumulative frequency: how many values are more than x?', b: 'Read the cumulative frequency at x (the number at or below x) and subtract it from the total n.' },
    ]),
    ...sub('statistics', 'histograms-4024', '9.7', [
      { n: 1, f: 'Frequency density', b: 'Frequency density = frequency ÷ class width. It is the height of a histogram bar, and the vertical axis is labelled "Frequency density".' },
      { n: 2, f: 'In a histogram, what does the area of a bar show?', b: 'The frequency: frequency = frequency density × class width. Bars touch, with no gaps.' },
      { n: 3, f: 'The class 2 ≤ x < 8 has frequency 9. Find the bar height.', b: 'Width = 8 − 2 = 6. Frequency density = 9 ÷ 6 = 1.5.' },
      { n: 4, f: 'A bar from 30 to 45 has height 0.8. How many values does it represent?', b: 'Width = 15. Frequency = 15 × 0.8 = 12.' },
      { n: 5, f: 'Which class of a histogram holds the most values?', b: 'The bar with the largest area, not necessarily the tallest bar.' },
      { n: 6, f: 'A bar from 40 to 60 has height 1.5. Estimate how many values lie from 50 to 60.', b: '10 × 1.5 = 15, assuming the values are spread evenly through the class. State that assumption.' },
    ]),
  ],
};
