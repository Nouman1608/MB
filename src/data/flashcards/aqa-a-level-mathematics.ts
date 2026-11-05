/**
 * D-438 -- flashcards for AQA A-level Mathematics 7357 (for first teaching 2017).
 *
 * One block per subtopic (or per topic, where the syllabus record lists no
 * subtopics), in syllabus order. Card ids are `<subtopic number>-<n>`, or
 * `<topic number>-<n>` for a topic with no subtopics, and are permanent (browser
 * progress is keyed by them): add a new card with the next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 7357); origin 'revision-notes'.
 *
 * 7357 is not tiered, so no card is marked upper tier. Mechanics uses g = 9.8 m s⁻²,
 * as Marlbridge's 7357 notes do.
 *
 * Plain text only (see types.ts). Unicode for formulae.
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

const OT = 'overarching-themes-aqa-alevel-maths';
const B = 'b-algebra-and-functions-aqa-alevel-maths';

const QUAD = 'aqa-a-level-mathematics-quadratics-revision-notes';
const DIFF = 'aqa-a-level-mathematics-differentiation-revision-notes';
const TRIG = 'aqa-a-level-mathematics-trigonometry-revision-notes';
const DATA = 'aqa-a-level-mathematics-data-presentation-and-interpretation-revision-notes';
const MOM = 'aqa-a-level-mathematics-moments-revision-notes';
const UOD = 'aqa-a-level-mathematics-use-of-data-in-statistics-revision-notes';

export const DECK_AQA_A_LEVEL_MATHEMATICS: FlashcardDeck = {
  boardSlug: 'aqa',
  qualificationSlug: 'a-level',
  subjectSlug: 'mathematics',
  syllabusCode: '7357',
  syllabusSeries: 'For first teaching 2017',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'sajawal-zahid', reviewedOn: '2026-11-05' },
  cards: [
    // 1 Overarching themes
    ...sub(OT, 'ot1-mathematical-argument-language-and-proof-aqa-alevel-maths', 'OT1', [
      { n: 1, f: 'Equation vs identity', b: 'An equation is true only for some values (you solve it). An identity is true for all values and uses ≡, for example (x + 2)² − 1 ≡ x² + 4x + 3.' },
      { n: 2, f: 'What do ⇒, ⇐ and ⇔ mean?', b: '⇒: implies.\n⇐: is implied by.\n⇔: if and only if; both directions must be true.' },
      { n: 3, f: 'Find a, b and c if 3x² − 6x + 8 ≡ a(x + b)² + c.', b: 'Compare coefficients: x²: a = 3; x: 2ab = −6, so b = −1; constant: ab² + c = 8, so c = 5.\n3(x − 1)² + 5.' },
      { n: 4, f: 'Term, coefficient, constant and expression in 5x³ − 2x + 9', b: 'Terms: 5x³, −2x and 9.\nCoefficients: 5 and −2.\nConstant: 9.\nIt is an expression because it has no equals sign.' },
      { n: 5, f: 'Set notation: what do ∈, ∪, ∩ and ∅ mean?', b: '∈: is an element of.\nA ∪ B: union (in A or B or both).\nA ∩ B: intersection (in both A and B).\n∅: the empty set.' },
      { n: 6, f: 'The converse of "P ⇒ Q", and why it matters', b: 'The converse is "Q ⇒ P". It is not automatically true: x = 4 ⇒ x² = 16, but x² = 16 does not imply x = 4.' },
    ]),
    ...sub(OT, 'ot2-mathematical-problem-solving-aqa-alevel-maths', 'OT2', [
      { n: 1, f: 'The four stages of the problem-solving cycle', b: '1. Specify the problem.\n2. Collect information.\n3. Process and represent.\n4. Interpret the results (which may send you round the cycle again).' },
      { n: 2, f: 'How do you start an unstructured problem?', b: 'Underline what is wanted and what is fixed; name the variables with units; draw a diagram; spot the structure (optimise, rate of change, equilibrium, …); write one equation in one variable and note its domain.' },
      { n: 3, f: 'Resolve a force of 10 N at 40° to the horizontal.', b: 'Horizontal: 10 cos 40° = 7.66 N.\nVertical: 10 sin 40° = 6.43 N.' },
      { n: 4, f: 'How are bearings written?', b: 'As three figures, measured clockwise from north (for example 045°).' },
      { n: 5, f: 'How do you check an answer at the end of a problem?', b: 'Answer the original question in a sentence, with units. Test the sign, size and units, and check that the value lies in the allowed domain.' },
      { n: 6, f: 'When should you round in a multi-step calculation?', b: 'Only at the end. Carry full calculator accuracy through every intermediate step, or the final answer may be wrong.' },
    ]),
    ...sub(OT, 'ot3-mathematical-modelling-aqa-alevel-maths', 'OT3', [
      { n: 1, f: 'The stages of the modelling cycle', b: '1. Translate the situation into mathematics, stating simplifying assumptions.\n2. Use the model with chosen inputs.\n3. Interpret the outputs in context.\n4. Compare with reality, judge the model and refine it.' },
      { n: 2, f: 'Give three common simplifying assumptions in mechanics models.', b: 'Treat a body as a particle; treat a string as light and inextensible; treat a surface as smooth (no friction) or ignore air resistance.' },
      { n: 3, f: 'A taxi model is cost = 8 + 1.6d pounds for d km. A 20 km fare was actually £44. Evaluate the model.', b: 'The model predicts 8 + 1.6 × 20 = £40, so it underestimates. Refine it by adding a missing feature (such as waiting time or a minimum charge) and test it on new data.' },
      { n: 4, f: 'What should you consider when criticising a model?', b: 'Whether its assumptions are realistic, whether the inputs used are in a sensible domain, how well its predictions match real data, and a specific refinement.' },
      { n: 5, f: 'Why must model outputs be interpreted in context?', b: 'A numerical answer may be impossible in reality (negative, too large, not a whole number). State what it means with units, and whether it is sensible.' },
    ]),

    // 2 A: Proof
    ...topicOnly('a-proof-aqa-alevel-maths', 2, [
      { n: 1, f: 'What is a mathematical proof?', b: 'A chain of logical steps from given assumptions to a conclusion, valid for every case the statement covers. Testing a few values is evidence, not proof.' },
      { n: 2, f: 'Proof by deduction', b: 'Argue directly from known facts and definitions to the result, one valid step at a time.' },
      { n: 3, f: 'Prove that the sum of three consecutive integers is a multiple of 3.', b: 'Let the integers be n, n + 1, n + 2 (n ∈ ℤ). Sum = 3n + 3 = 3(n + 1). Since n + 1 is an integer, the sum is a multiple of 3.' },
      { n: 4, f: 'Proof by exhaustion', b: 'Split all possibilities into a finite set of cases (for example n even and n odd) and prove each one. State that the cases cover everything.' },
      { n: 5, f: 'Disproof by counter-example', b: 'Find one case that meets the conditions of the statement but where the conclusion fails. One correct counter-example is enough to disprove it.' },
      { n: 6, f: 'Proof by contradiction', b: 'Assume the statement is false, reason to something impossible, and conclude that the statement must be true.' },
      { n: 7, f: 'Rational and irrational numbers', b: 'Rational: can be written a/b with a ∈ ℤ and b ∈ ℤ⁺.\nIrrational: cannot be written in this form (for example √2 and π).' },
      { n: 8, f: 'Outline the proof that √2 is irrational.', b: 'Assume √2 = a/b in lowest terms. Then a² = 2b², so a² is even and a is even: a = 2k. Then 4k² = 2b², so b² = 2k² and b is even. Both even contradicts lowest terms, so √2 is irrational.' },
      { n: 9, f: 'Outline the proof that there are infinitely many primes.', b: 'Assume there are finitely many, p₁, p₂, …, pₙ. Let N = p₁p₂…pₙ + 1. Dividing N by any pᵢ leaves remainder 1, so N has a prime factor not in the list (or is prime itself). Contradiction.' },
      { n: 10, f: 'How do you write an even number, an odd number and two different odd numbers in a proof?', b: 'Even: 2n. Odd: 2n + 1 (n ∈ ℤ).\nTwo different odd numbers: 2m + 1 and 2n + 1 (m, n ∈ ℤ), not 2n + 1 twice.' },
    ]),

    // 3 B: Algebra and functions
    ...sub(B, 'b1-laws-of-indices-aqa-alevel-maths', 'B1', [
      { n: 1, f: 'The core laws of indices', b: 'aᵐ × aⁿ = aᵐ⁺ⁿ\naᵐ ÷ aⁿ = aᵐ⁻ⁿ\n(aᵐ)ⁿ = aᵐⁿ\na⁰ = 1 (a ≠ 0)\nSame base only.' },
      { n: 2, f: 'What do a⁻ⁿ and a^(m/n) mean?', b: 'a⁻ⁿ = 1/aⁿ (a reciprocal, not a negative number).\na^(m/n) = (ⁿ√a)ᵐ = ⁿ√(aᵐ).' },
      { n: 3, f: 'Evaluate 27^(−2/3).', b: 'Negative index: reciprocal. Cube root of 27 is 3; squared is 9.\n27^(−2/3) = 1/9.' },
      { n: 4, f: 'Solve 2^(x + 1) = 8ˣ.', b: 'Write both sides as powers of 2: 2^(x + 1) = 2^(3x), so x + 1 = 3x and x = ½.' },
      { n: 5, f: 'Simplify (2x³)⁴.', b: 'Apply the power to every factor, including the number: 2⁴x¹² = 16x¹².' },
    ]),
    ...sub(B, 'b2-surds-aqa-alevel-maths', 'B2', [
      { n: 1, f: 'Simplify √75 and 3√8 + √18.', b: '√75 = √25 × √3 = 5√3.\n3√8 + √18 = 6√2 + 3√2 = 9√2.' },
      { n: 2, f: 'How do you rationalise k/√a?', b: 'Multiply top and bottom by √a: k/√a = k√a/a.' },
      { n: 3, f: 'Rationalise 4/(3 + √5).', b: 'Multiply top and bottom by the conjugate 3 − √5: 4(3 − √5)/(9 − 5) = 3 − √5.' },
      { n: 4, f: 'Why does multiplying by the conjugate work?', b: '(a + √b)(a − √b) = a² − b, which has no surd, so the denominator becomes rational.' },
      { n: 5, f: 'Is √a + √b equal to √(a + b)?', b: 'No. √(ab) = √a × √b, but there is no such rule for addition: √9 + √16 = 7, while √25 = 5.' },
    ]),
    ...sub(B, 'b3-quadratic-functions-aqa-alevel-maths', 'B3', [
      { n: 1, f: 'What does each sign of the discriminant b² − 4ac tell you?', b: '> 0: two distinct real roots.\n= 0: one repeated (equal) root.\n< 0: no real roots.', src: QUAD },
      { n: 2, f: 'Completed-square form a(x + p)² + q: what does it reveal?', b: 'The turning point (−p, q) and the line of symmetry x = −p. q is the minimum value if a > 0, the maximum if a < 0.' },
      { n: 3, f: 'Write x² − 6x + 11 in completed-square form. Why is it always positive?', b: '(x − 3)² − 9 + 11 = (x − 3)² + 2.\n(x − 3)² ≥ 0, so the expression is at least 2. Minimum point (3, 2).' },
      { n: 4, f: 'The quadratic formula', b: 'x = (−b ± √(b² − 4ac))/(2a) for ax² + bx + c = 0. It works for any quadratic; factorising is quicker only when it is clean.' },
      { n: 5, f: 'Solve x⁴ − 5x² + 4 = 0.', b: 'Let u = x²: u² − 5u + 4 = 0, so u = 1 or u = 4.\nx² = 1 or x² = 4, so x = ±1 or x = ±2.' },
    ]),
    ...sub(B, 'b4-simultaneous-equations-aqa-alevel-maths', 'B4', [
      { n: 1, f: 'Solving two linear simultaneous equations by elimination', b: '1. Scale one or both equations so one letter has equal coefficients.\n2. Add if the signs differ, subtract if they match.\n3. Solve, then substitute back.\n4. Check in the equation you did not use.' },
      { n: 2, f: 'Solving one linear and one quadratic equation by substitution', b: '1. Rearrange the linear equation for one letter.\n2. Substitute into the quadratic, with brackets.\n3. Solve the quadratic.\n4. Use the linear equation to find each matching value; give answers as pairs.' },
      { n: 3, f: 'After substituting a line into a quadratic curve, what does the discriminant show?', b: '> 0: the line meets the curve twice.\n= 0: the line is a tangent (touches once).\n< 0: the line misses the curve.' },
      { n: 4, f: 'Solve y = x + 1 and y = x² − 5.', b: 'x² − 5 = x + 1, so x² − x − 6 = 0 and (x − 3)(x + 2) = 0.\nSolutions (3, 4) and (−2, −1).' },
      { n: 5, f: 'What can happen when you solve two linear simultaneous equations?', b: 'One solution (the lines meet once), no solution (parallel lines), or infinitely many (the same line).' },
    ]),
    ...sub(B, 'b5-inequalities-aqa-alevel-maths', 'B5', [
      { n: 1, f: 'When must you reverse an inequality sign?', b: 'When you multiply or divide both sides by a negative number. Do not multiply by an expression in x unless you know its sign.' },
      { n: 2, f: 'Solve x² − x − 6 > 0.', b: 'Roots: (x − 3)(x + 2) = 0, x = −2 or 3. The ∪-shaped curve is above the axis outside the roots.\nx < −2 or x > 3.' },
      { n: 3, f: 'Write "x < −2 or x > 3" and "−2 < x < 3" in set notation.', b: '{x : x < −2} ∪ {x : x > 3}\n{x : −2 < x < 3}\n∪ means "or"; ∩ means "and".' },
      { n: 4, f: 'Shading a region for an inequality on a graph: strict and non-strict boundaries', b: 'Strict (< or >): dashed boundary line.\nNon-strict (≤ or ≥): solid boundary line.' },
      { n: 5, f: 'Why sketch the graph before writing the solution of a quadratic inequality?', b: 'It shows whether the solution is between the roots (one interval, "and") or outside them (two intervals, "or"), which prevents writing it the wrong way round.' },
    ]),
    ...sub(B, 'b6-manipulating-polynomials-aqa-alevel-maths', 'B6', [
      { n: 1, f: 'Factor theorem', b: 'f(a) = 0 exactly when (x − a) is a factor of f(x).' },
      { n: 2, f: 'Remainder when f(x) is divided by (x − a)', b: 'f(a). The identity is f(x) ≡ (x − a) × quotient + remainder.' },
      { n: 3, f: 'Show that (x − 2) is a factor of x³ − 3x² + 4 and factorise fully.', b: 'f(2) = 8 − 12 + 4 = 0, so (x − 2) is a factor.\nx³ − 3x² + 4 = (x − 2)(x² − x − 2) = (x − 2)²(x + 1).' },
      { n: 4, f: 'Expand (x + 2)(x − 4)(3x + 1).', b: '(x² − 2x − 8)(3x + 1) = 3x³ − 5x² − 26x − 8.\nCheck at x = 1: 3 × (−3) × 4 = −36 and 3 − 5 − 26 − 8 = −36.' },
      { n: 5, f: 'Simplify (x² − 9)/(x² + x − 6).', b: '(x − 3)(x + 3)/((x + 3)(x − 2)) = (x − 3)/(x − 2), for x ≠ −3 (and x ≠ 2). Cancel whole factors only.' },
      { n: 6, f: 'How do you factorise a cubic with no obvious common factor?', b: '1. Test factors of the constant term in f(x) until f(r) = 0.\n2. Write (x − r) as a factor.\n3. Divide (or compare coefficients) to get a quadratic.\n4. Factorise the quadratic and state all roots.' },
    ]),
    ...sub(B, 'b7-graphs-of-functions-aqa-alevel-maths', 'B7', [
      { n: 1, f: 'How does a polynomial graph behave at a single root, a double root (x − a)² and a triple root (x − a)³?', b: 'Single root: crosses the x-axis.\nDouble root: touches the axis and turns back.\nTriple root: crosses with a flat (stationary) point.' },
      { n: 2, f: 'Sketch y = |2x − 1|: vertex, y-intercept and arm gradients', b: 'Vertex at (1/2, 0), y-intercept (0, 1), arm gradients +2 and −2. The part of y = 2x − 1 below the x-axis is reflected above it.' },
      { n: 3, f: 'What does y ∝ x mean, and y ∝ 1/x?', b: 'y ∝ x: y = kx for a constant k.\ny ∝ 1/x: y = k/x.\nFind k from one pair of values.' },
      { n: 4, f: 'Asymptotes and shape of y = a/x and y = a/x² (a > 0)', b: 'Both: asymptotes x = 0 and y = 0.\ny = a/x: first and third quadrants.\ny = a/x²: above the x-axis on both sides.' },
      { n: 5, f: 'The ends of a cubic graph', b: 'Positive x³ coefficient: from bottom left to top right.\nNegative x³ coefficient: from top left to bottom right.' },
    ]),
    ...sub(B, 'b8-composite-and-inverse-functions-aqa-alevel-maths', 'B8', [
      { n: 1, f: 'What does gf(x) mean?', b: 'g(f(x)): apply f first, then g. Usually gf(x) ≠ fg(x).' },
      { n: 2, f: 'f(x) = 2x + 1 and g(x) = x². Find fg(x) and gf(x).', b: 'fg(x) = 2x² + 1.\ngf(x) = (2x + 1)².' },
      { n: 3, f: 'Which functions have an inverse?', b: 'Only one-one functions (each output comes from only one input). f⁻¹ undoes f: f⁻¹f(x) = x and ff⁻¹(x) = x.' },
      { n: 4, f: 'Domain, range and graph of f⁻¹', b: 'Domain of f⁻¹ = range of f; range of f⁻¹ = domain of f. The graph of y = f⁻¹(x) is the reflection of y = f(x) in y = x.' },
      { n: 5, f: 'Find f⁻¹(x) for f(x) = (2x + 3)/(x − 1), x ≠ 1.', b: 'y(x − 1) = 2x + 3, so x(y − 2) = y + 3 and x = (y + 3)/(y − 2).\nf⁻¹(x) = (x + 3)/(x − 2), x ≠ 2.' },
    ]),
    ...sub(B, 'b9-transformations-of-graphs-aqa-alevel-maths', 'B9', [
      { n: 1, f: 'Describe y = f(x) + a, y = f(x + a), y = af(x) and y = f(ax).', b: 'f(x) + a: translation by (0, a).\nf(x + a): translation by (−a, 0).\naf(x): stretch parallel to the y-axis, scale factor a.\nf(ax): stretch parallel to the x-axis, scale factor 1/a.' },
      { n: 2, f: 'Describe y = −f(x) and y = f(−x).', b: 'y = −f(x): reflection in the x-axis.\ny = f(−x): reflection in the y-axis.' },
      { n: 3, f: 'Changes inside and outside the bracket of f', b: 'Outside: acts on y and does the obvious thing.\nInside: acts on x and does the opposite (f(x + 3) moves left 3; f(2x) halves the x-values).' },
      { n: 4, f: '(2, 5) lies on y = f(x). Find its image on y = 2f(x − 3).', b: 'x-coordinate + 3; y-coordinate × 2.\nThe image is (5, 10).' },
      { n: 5, f: 'Which features stay fixed under a stretch parallel to the y-axis, and under a stretch parallel to the x-axis?', b: 'Stretch parallel to the y-axis: the x-intercepts stay fixed.\nStretch parallel to the x-axis: the y-intercept stays fixed.' },
    ]),
    ...sub(B, 'b10-partial-fractions-aqa-alevel-maths', 'B10', [
      { n: 1, f: 'Partial fractions: the forms for (ax + b)(cx + d), (ax + b)² and (ax + b)(cx + d)²', b: 'A/(ax + b) + B/(cx + d)\nA/(ax + b) + B/(ax + b)²\nA/(ax + b) + B/(cx + d) + C/(cx + d)²\nEach numerator is a constant.' },
      { n: 2, f: 'Express (9x − 5)/((3x − 1)(x − 1)) in partial fractions.', b: '9x − 5 ≡ A(x − 1) + B(3x − 1).\nx = 1: 4 = 2B, B = 2. x = 1/3: −2 = −(2/3)A, A = 3.\n3/(3x − 1) + 2/(x − 1).' },
      { n: 3, f: 'How do you find the constants in partial fractions?', b: '1. Multiply through by the denominator to get an identity.\n2. Substitute values that make a factor zero.\n3. Compare coefficients (or use another value) for any constant left.\n4. Check with a value not yet used.' },
      { n: 4, f: 'How many partial fractions should there be?', b: 'As many as the degree of the denominator, with one constant for each power of each factor.' },
      { n: 5, f: 'What are partial fractions used for later in the course?', b: 'Integrating rational functions (each part gives a ln term) and expanding with the binomial series.' },
    ]),
    ...sub(B, 'b11-functions-in-modelling-aqa-alevel-maths', 'B11', [
      { n: 1, f: 'Which type of function models a quantity that approaches a limit?', b: 'A − Be^(−kt) (k > 0), which has a horizontal asymptote at A.' },
      { n: 2, f: 'Which function models a repeating pattern, and what do its parameters show?', b: 'a + b sin(kt) or a + b cos(kt): midline a, amplitude b, period 2π/k (360°/k in degrees).' },
      { n: 3, f: 'What should you check about the domain of a model?', b: 'Which inputs make sense: watch for negative values, values beyond a physical maximum, and division by zero.' },
      { n: 4, f: 'Warning signs in the long-term behaviour of a model', b: 'Unbounded growth, negative values of a quantity that cannot be negative, and exact repeats in real data.' },
      { n: 5, f: 'How do you refine a model?', b: 'Name a specific change: add a limit, add a term, use a piecewise rule, or gather more data, then test it again.' },
    ]),

    // 4 C: Coordinate geometry
    ...topicOnly('c-coordinate-geometry-aqa-alevel-maths', 4, [
      { n: 1, f: 'Equation of a line through (x₁, y₁) with gradient m, and the gradient of ax + by + c = 0', b: 'y − y₁ = m(x − x₁).\nThe gradient of ax + by + c = 0 is −a/b.' },
      { n: 2, f: 'Conditions for parallel and perpendicular lines', b: 'Parallel: m₁ = m₂.\nPerpendicular: m₁m₂ = −1.' },
      { n: 3, f: 'Midpoint and distance between (x₁, y₁) and (x₂, y₂)', b: 'Midpoint ((x₁ + x₂)/2, (y₁ + y₂)/2).\nDistance √((x₂ − x₁)² + (y₂ − y₁)²).' },
      { n: 4, f: 'Equation of a circle with centre (a, b) and radius r', b: '(x − a)² + (y − b)² = r².' },
      { n: 5, f: 'Find the centre and radius of x² + y² − 6x + 4y − 12 = 0.', b: '(x − 3)² − 9 + (y + 2)² − 4 − 12 = 0, so (x − 3)² + (y + 2)² = 25.\nCentre (3, −2), radius 5.' },
      { n: 6, f: 'Three circle properties used in coordinate geometry', b: 'The angle in a semicircle is a right angle.\nThe perpendicular from the centre to a chord bisects the chord.\nThe radius is perpendicular to the tangent at the point of contact.' },
      { n: 7, f: 'How do you find the tangent to a circle at a point P on it?', b: 'Find the gradient of the radius from the centre to P. The tangent gradient is −1/(that gradient). Use y − y₁ = m(x − x₁) through P.' },
      { n: 8, f: 'Parametric form of the circle with centre (a, b) and radius r', b: 'x = a + r cos θ, y = b + r sin θ.' },
      { n: 9, f: 'Convert x = t², y = 2t to a Cartesian equation.', b: 't = y/2, so x = y²/4, that is y² = 4x.' },
    ]),

    // 5 D: Sequences and series
    ...topicOnly('d-sequences-and-series-aqa-alevel-maths', 5, [
      { n: 1, f: 'General term of the binomial expansion of (a + b)ⁿ, n a positive integer', b: 'ⁿCᵣ aⁿ⁻ʳ bʳ, with ⁿCᵣ = n!/(r!(n − r)!). There are n + 1 terms. Bracket b completely, sign included.' },
      { n: 2, f: 'Binomial expansion of (1 + x)ⁿ for rational n, and its validity', b: '(1 + x)ⁿ = 1 + nx + n(n − 1)x²/2! + n(n − 1)(n − 2)x³/3! + …, valid for |x| < 1.' },
      { n: 3, f: 'Expand √(4 − x) up to the term in x², and state the validity.', b: '2(1 − x/4)^(1/2) = 2(1 − x/8 − x²/128 + …) = 2 − x/4 − x²/64 + …\nValid for |x| < 4.' },
      { n: 4, f: 'Arithmetic sequence: nth term and sum of n terms', b: 'uₙ = a + (n − 1)d\nSₙ = (n/2)(2a + (n − 1)d) = (n/2)(a + l)' },
      { n: 5, f: 'Geometric sequence: nth term, sum of n terms and sum to infinity', b: 'uₙ = arⁿ⁻¹\nSₙ = a(1 − rⁿ)/(1 − r), r ≠ 1\nS∞ = a/(1 − r), only for |r| < 1' },
      { n: 6, f: 'Σ r from r = 1 to n, and Σ r from 1 to 100', b: 'Σ r = n(n + 1)/2 (an arithmetic series).\nFor n = 100: 100 × 101/2 = 5050.' },
      { n: 7, f: 'Recurrence relation, and increasing, decreasing and periodic sequences', b: 'A recurrence gives each term from the previous one: uₙ₊₁ = f(uₙ) with a first term.\nIncreasing: uₙ₊₁ > uₙ. Decreasing: uₙ₊₁ < uₙ. Periodic: the terms repeat in a cycle.' },
      { n: 8, f: 'How do you find the limit of a convergent recurrence uₙ₊₁ = f(uₙ)?', b: 'Set uₙ₊₁ = uₙ = L and solve L = f(L). For uₙ₊₁ = 0.5uₙ + 3: L = 0.5L + 3, so L = 6.' },
      { n: 9, f: 'Find the coefficient of x³ in (1 + 2x)⁵.', b: '⁵C₃ × 2³ = 10 × 8 = 80.' },
    ]),

    // 6 E: Trigonometry
    ...topicOnly('e-trigonometry-aqa-alevel-maths', 6, [
      { n: 1, f: 'sin⁻¹x vs (sin x)⁻¹', b: 'arcsin x is the inverse function; cosec x = 1/sin x.', src: TRIG },
      { n: 2, f: 'Degrees vs radians', b: 'Arc length, sector area, small angles and calculus all need radians.', src: TRIG },
      { n: 3, f: 'Identity (≡) vs equation (=)', b: 'An identity is true for all values; an equation is solved for particular ones.', src: TRIG },
      { n: 4, f: 'Principal value vs all solutions', b: 'arcsin, arccos and arctan return one value; the question usually wants all in the interval.', src: TRIG },
      { n: 5, f: 'Small-angle approximations (θ in radians), and sin 4θ and cos 3θ', b: 'sin θ ≈ θ, cos θ ≈ 1 − θ²/2, tan θ ≈ θ.\nSubstitute the whole argument: sin 4θ ≈ 4θ, cos 3θ ≈ 1 − 9θ²/2.' },
      { n: 6, f: 'Arc length and sector area', b: 's = rθ and A = ½r²θ, with θ in radians.' },
      { n: 7, f: 'Sine rule, cosine rule and area of a triangle', b: 'a/sin A = b/sin B = c/sin C\na² = b² + c² − 2bc cos A\nArea = ½ab sin C' },
      { n: 8, f: 'The three Pythagorean identities', b: 'cos²A + sin²A ≡ 1\nsec²A ≡ 1 + tan²A\ncosec²A ≡ 1 + cot²A' },
      { n: 9, f: 'Double-angle formulae', b: 'sin 2A ≡ 2 sin A cos A\ncos 2A ≡ cos²A − sin²A ≡ 2cos²A − 1 ≡ 1 − 2sin²A\ntan 2A ≡ 2 tan A/(1 − tan²A)' },
      { n: 10, f: 'Compound-angle formulae for sin(A ± B) and cos(A ± B)', b: 'sin(A ± B) ≡ sin A cos B ± cos A sin B\ncos(A ± B) ≡ cos A cos B ∓ sin A sin B' },
      { n: 11, f: 'How do you write a cos θ + b sin θ as R cos(θ − α)?', b: 'Expand: R cos θ cos α + R sin θ sin α. Match R cos α = a, R sin α = b.\nR = √(a² + b²), tan α = b/a.' },
      { n: 12, f: 'Signs of sin, cos and tan in each quadrant (0 to 2π)', b: 'First quadrant: all positive. Second: sin positive. Third: tan positive. Fourth: cos positive.' },
    ]),

    // 7 F: Exponentials and logarithms
    ...topicOnly('f-exponentials-and-logarithms-aqa-alevel-maths', 7, [
      { n: 1, f: 'Definition of a logarithm', b: 'For a > 0 and x > 0: y = logₐ x ⇔ aʸ = x. The log is the power. ln x = logₑ x.' },
      { n: 2, f: 'Laws of logarithms', b: 'logₐ x + logₐ y = logₐ(xy)\nlogₐ x − logₐ y = logₐ(x/y)\nk logₐ x = logₐ(xᵏ)' },
      { n: 3, f: 'Key features of y = eˣ and y = ln x', b: 'y = eˣ: through (0, 1), asymptote y = 0, range y > 0.\ny = ln x: through (1, 0), asymptote x = 0, domain x > 0.\nThey are reflections of each other in y = x.' },
      { n: 4, f: 'Gradient of y = e^(kx)', b: 'dy/dx = k e^(kx): the gradient is proportional to the value of the function.' },
      { n: 5, f: 'Solve e^(2x) = 5 and 3ˣ = 20.', b: 'e^(2x) = 5: 2x = ln 5, x = ½ ln 5 (= 0.805).\n3ˣ = 20: x = ln 20/ln 3 = 2.73 (3 s.f.).' },
      { n: 6, f: 'Which graphs make y = axⁿ and y = kbˣ straight lines?', b: 'y = axⁿ: log y against log x (gradient n, intercept log a).\ny = kbˣ: log y against x (gradient log b, intercept log k).' },
      { n: 7, f: 'The exponential model y = Ae^(kt)', b: 'A is the initial value (t = 0). k > 0 gives growth, k < 0 gives decay. y = c + Ae^(kx) has asymptote y = c.' },
      { n: 8, f: 'A quantity decays as N = N₀e^(−kt). Find the half-life.', b: '½N₀ = N₀e^(−kt), so e^(−kt) = ½ and t = ln 2/k.' },
      { n: 9, f: 'Limitations of exponential growth models', b: 'Real quantities cannot grow without limit (resources, space), so the model usually fails for large t. Refine it, for example with a limiting value.' },
    ]),

    // 8 G: Differentiation
    ...topicOnly('g-differentiation-aqa-alevel-maths', 8, [
      { n: 1, f: 'The two meanings of a derivative', b: 'Geometric: the gradient of the tangent line.\nPhysical: the instantaneous rate of change.', src: DIFF },
      { n: 2, f: 'Points of inflection', b: 'Where f″(x) = 0 and the concavity changes (f″ changes sign).', src: DIFF },
      { n: 3, f: 'Differentiation from first principles', b: 'f′(x) = lim (h → 0) [f(x + h) − f(x)]/h. Required for small positive integer powers of x and for sin x and cos x.' },
      { n: 4, f: 'Standard derivatives of xⁿ, e^(kx), aᵏˣ, ln x, sin kx, cos kx and tan kx', b: 'nxⁿ⁻¹\nk e^(kx)\nk aᵏˣ ln a\n1/x\nk cos kx\n−k sin kx\nk sec² kx' },
      { n: 5, f: 'Product rule and quotient rule', b: 'y = uv: dy/dx = u dv/dx + v du/dx.\ny = u/v: dy/dx = (v du/dx − u dv/dx)/v².' },
      { n: 6, f: 'Chain rule, with an example', b: 'dy/dx = (dy/du) × (du/dx).\nd/dx (3x² + 1)⁵ = 5(3x² + 1)⁴ × 6x = 30x(3x² + 1)⁴.' },
      { n: 7, f: 'Convex and concave', b: 'Convex: f″(x) > 0 (the gradient is increasing).\nConcave: f″(x) < 0 (the gradient is decreasing).' },
      { n: 8, f: 'How do you find and classify stationary points?', b: 'Solve f′(x) = 0. Then f″(x) > 0: minimum; f″(x) < 0: maximum. If f″(x) = 0, check the sign of f′(x) either side.' },
      { n: 9, f: 'Implicit and parametric differentiation (first derivative only)', b: 'Implicit: differentiate both sides with respect to x; each y term gains a factor dy/dx (d/dx(y²) = 2y dy/dx).\nParametric: dy/dx = (dy/dt) ÷ (dx/dt).' },
      { n: 10, f: 'Sketching a gradient function from a curve', b: 'Where the curve increases, the gradient function is positive; where it decreases, negative; at each turning point the gradient function crosses zero.' },
    ]),

    // 9 H: Integration
    ...topicOnly('h-integration-aqa-alevel-maths', 9, [
      { n: 1, f: 'Fundamental theorem of calculus', b: 'If F′(x) = f(x), then ∫ f(x) dx = F(x) + c and ∫ₐᵇ f(x) dx = F(b) − F(a).' },
      { n: 2, f: '∫ xⁿ dx, ∫ e^(kx) dx, ∫ 1/x dx, ∫ sin kx dx and ∫ cos kx dx', b: 'xⁿ⁺¹/(n + 1) + c (n ≠ −1)\n(1/k)e^(kx) + c\nln|x| + c\n−(1/k) cos kx + c\n(1/k) sin kx + c' },
      { n: 3, f: '∫ 1/(ax + b) dx and ∫ f′(x)/f(x) dx', b: '(1/a) ln|ax + b| + c\nln|f(x)| + c' },
      { n: 4, f: 'Use d/dx (sin(x²)) = 2x cos(x²) to find ∫ 2x cos(x²) dx.', b: 'sin(x²) + c. A derivative you have found is an integral you now know.' },
      { n: 5, f: 'Integration by parts', b: '∫ u (dv/dx) dx = uv − ∫ v (du/dx) dx. Choose u to simplify when differentiated, e.g. ∫ x eˣ dx = x eˣ − eˣ + c.' },
      { n: 6, f: 'Integration by substitution', b: 'Choose u = g(x), replace dx using du/dx, rewrite everything in u, and change the limits (or substitute back) before evaluating.' },
      { n: 7, f: 'Find ∫ 1/(x(x + 1)) dx.', b: 'Partial fractions: 1/x − 1/(x + 1).\n∫ = ln|x| − ln|x + 1| + c = ln|x/(x + 1)| + c.' },
      { n: 8, f: 'Area between a curve and the x-axis when part of it is below the axis', b: 'Integrals of parts below the axis are negative. Find the roots, integrate each part separately, and add the sizes.' },
      { n: 9, f: 'Area between two curves', b: '∫ₐᵇ (upper − lower) dx, where a and b are the x-coordinates of the intersection points.' },
      { n: 10, f: 'Solving a separable differential equation', b: 'Write dy/dx = f(x)g(y) as ∫ 1/g(y) dy = ∫ f(x) dx, integrate with one constant, then use the given condition to find it. dy/dx = ky gives y = Ae^(kx).' },
      { n: 11, f: 'Integration as the limit of a sum', b: '∫ₐᵇ f(x) dx = lim (δx → 0) Σ f(x)δx: the area is the limit of the sum of thin strips.' },
    ]),

    // 10 I: Numerical methods
    ...topicOnly('i-numerical-methods-aqa-alevel-maths', 10, [
      { n: 1, f: 'Locating a root by a change of sign', b: 'If f is continuous on [a, b] and f(a) × f(b) < 0, then f(x) = 0 has a root in (a, b).' },
      { n: 2, f: 'When can the change-of-sign method fail?', b: 'A repeated root or two close roots give no sign change; an asymptote (discontinuity) can give a sign change with no root.' },
      { n: 3, f: 'How do you show a root is correct to n decimal places?', b: 'Show a change of sign across an interval whose ends both round to that n-decimal-place value (for 1.76 to 2 d.p., use 1.755 and 1.765).' },
      { n: 4, f: 'Fixed-point iteration, and staircase and cobweb diagrams', b: 'Rearrange f(x) = 0 to x = g(x) and use xₙ₊₁ = g(xₙ).\nOn y = x and y = g(x) the iterates form a staircase (approaching from one side) or a cobweb (alternating sides).' },
      { n: 5, f: 'When does fixed-point iteration converge?', b: 'From a start close to the root α, it converges when −1 < g′(x) < 1 near α. Otherwise it diverges, and another rearrangement may work.' },
      { n: 6, f: 'Newton–Raphson formula', b: 'xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ)' },
      { n: 7, f: 'Use Newton–Raphson on f(x) = x³ − 5 with x₁ = 2 to find x₂ and x₃.', b: 'f′(x) = 3x².\nx₂ = 2 − 3/12 = 1.75.\nx₃ = 1.75 − 0.359375/9.1875 = 1.7109 (4 d.p.), approaching ∛5 ≈ 1.7100.' },
      { n: 8, f: 'When does Newton–Raphson fail?', b: 'When f′(xₙ) = 0 (the tangent is horizontal), or when a start near a stationary point sends the next value far from the root.' },
      { n: 9, f: 'Trapezium rule', b: '∫ₐᵇ y dx ≈ (h/2)[y₀ + yₙ + 2(y₁ + … + yₙ₋₁)], h = (b − a)/n, with n strips and n + 1 ordinates.' },
      { n: 10, f: 'Is the trapezium rule an overestimate or an underestimate?', b: 'Convex curve (bends upwards): overestimate.\nConcave curve (bends downwards): underestimate.\nMore strips give a better estimate.' },
    ]),

    // 11 J: Vectors
    ...topicOnly('j-vectors-aqa-alevel-maths', 11, [
      { n: 1, f: 'Magnitude of xi + yj and of xi + yj + zk', b: '√(x² + y²) and √(x² + y² + z²).' },
      { n: 2, f: 'Unit vector in the direction of a', b: 'â = a/|a|.' },
      { n: 3, f: 'Vector →AB and distance AB from position vectors a and b', b: '→AB = b − a; AB = |b − a|. Midpoint (a + b)/2.' },
      { n: 4, f: 'Position vector of the point dividing AB in the ratio m : n', b: 'a + (m/(m + n))(b − a).' },
      { n: 5, f: 'When are two vectors parallel?', b: 'When one is a non-zero scalar multiple of the other: b = ka.' },
      { n: 6, f: 'A vector has magnitude r at angle θ to i. Write it in components.', b: 'r cos θ i + r sin θ j.' },
      { n: 7, f: 'Find |2i − j + 2k| and the angle it makes with the z-axis (k).', b: '|a| = √(4 + 1 + 4) = 3.\ncos θ = (k-component)/|a| = 2/3, so θ = 48.2°.' },
      { n: 8, f: 'Is the scalar product a.b needed for AQA A-level Mathematics 7357?', b: 'No. The specification lists it as Further Maths only. Find angles from components and magnitudes instead.' },
      { n: 9, f: 'Scalar vs vector quantities in mechanics', b: 'Scalars have size only (distance, speed, mass, time). Vectors have size and direction (displacement, velocity, acceleration, force).' },
    ]),

    // 12 K: Statistical sampling
    ...topicOnly('k-statistical-sampling-aqa-alevel-maths', 12, [
      { n: 1, f: 'Population, sample and census', b: 'Population: the whole set of items of interest.\nSample: a part of the population from which data are collected.\nCensus: data from every member of the population.' },
      { n: 2, f: 'Sampling frame', b: 'A list of the population from which the sample is chosen.' },
      { n: 3, f: 'Simple random sampling: definition and method', b: 'Every sample of size n is equally likely. Number the sampling frame, generate random numbers, ignore repeats and out-of-range values, and stop at n members.' },
      { n: 4, f: 'Opportunity sampling: method and drawback', b: 'Use whoever is available at the time. It is quick and cheap, but not random and likely to be biased.' },
      { n: 5, f: 'Systematic, stratified, cluster and quota sampling in one line each', b: 'Systematic: every kth item from a random start.\nStratified: random samples from each group in proportion.\nCluster: whole groups chosen at random.\nQuota: set numbers per group, chosen by the interviewer.' },
      { n: 6, f: 'Why might two samples from the same population give different conclusions?', b: 'Each sample is only part of the population, so sample statistics vary from sample to sample. Conclusions from a sample are informal inferences, not certainties.' },
      { n: 7, f: 'Advantages and disadvantages of a census', b: 'Advantage: exact information about the whole population.\nDisadvantages: expensive and slow, and impossible when testing destroys the item.' },
    ]),

    // 13 L: Data presentation and interpretation
    ...topicOnly('l-data-presentation-and-interpretation-aqa-alevel-maths', 13, [
      { n: 1, f: 'Frequency density', b: 'Frequency ÷ class width. The height of a histogram bar.', src: DATA },
      { n: 2, f: 'Relative frequency', b: 'Frequency ÷ total frequency. Estimates a probability.', src: DATA },
      { n: 3, f: 'Interquartile range (IQR)', b: 'Q₃ − Q₁. The spread of the middle half of the data.', src: DATA },
      { n: 4, f: 'Regression line y = a + bx: what does b mean?', b: 'The estimated change in y when x increases by 1, in context, with units.', src: DATA },
      { n: 5, f: 'Regression line y = a + bx: what does a mean?', b: 'The estimated y when x = 0. Often meaningless if x = 0 is far outside the data.', src: DATA },
      { n: 6, f: 'Cleaning data: missing values', b: 'Leave out, say so, reduce n. Never record them as 0.', src: DATA },
      { n: 7, f: 'Cleaning data: outliers', b: 'Investigate. Remove only if they are errors or not from the population.', src: DATA },
      { n: 8, f: 'Two rules for identifying outliers', b: 'Below Q₁ − 1.5 × IQR or above Q₃ + 1.5 × IQR.\nOutside x̄ ± 2σ (or x̄ ± 3σ if the question says so).' },
      { n: 9, f: 'Mean and standard deviation of raw data', b: 'x̄ = Σx/n\nσ = √(Σx²/n − x̄²)' },
      { n: 10, f: 'Cumulative frequency graph: where are points plotted, and where are the median and quartiles read?', b: 'Plot at upper class boundaries. Read the median at n/2 and the quartiles at n/4 and 3n/4.' },
      { n: 11, f: 'Interpolation vs extrapolation with a regression line', b: 'Interpolation predicts inside the range of the observed x-values (more reliable). Extrapolation predicts outside it (unreliable).' },
    ]),

    // 14 M: Probability
    ...topicOnly('m-probability-aqa-alevel-maths', 14, [
      { n: 1, f: 'Complement rule and addition rule', b: 'P(A′) = 1 − P(A).\nP(A ∪ B) = P(A) + P(B) − P(A ∩ B).' },
      { n: 2, f: 'Mutually exclusive events', b: 'They cannot happen together: P(A ∩ B) = 0, so P(A ∪ B) = P(A) + P(B).' },
      { n: 3, f: 'Independent events', b: 'One does not affect the other: P(A ∩ B) = P(A) × P(B), equivalently P(A | B) = P(A).' },
      { n: 4, f: 'Conditional probability and the multiplication rule', b: 'P(A | B) = P(A ∩ B)/P(B), for P(B) > 0.\nP(A ∩ B) = P(B) × P(A | B), used along tree branches.' },
      { n: 5, f: 'P(A) = 0.5, P(B) = 0.4 and P(A ∩ B) = 0.2. Are A and B independent? Find P(A ∪ B).', b: 'P(A) × P(B) = 0.2 = P(A ∩ B), so they are independent.\nP(A ∪ B) = 0.5 + 0.4 − 0.2 = 0.7.' },
      { n: 6, f: 'The easiest way to find P(at least one)', b: '1 − P(none).' },
      { n: 7, f: 'Can two events with non-zero probabilities be both mutually exclusive and independent?', b: 'No: mutually exclusive means P(A ∩ B) = 0, but independence needs P(A ∩ B) = P(A)P(B) > 0.' },
    ]),

    // 15 N: Statistical distributions
    ...topicOnly('n-statistical-distributions-aqa-alevel-maths', 15, [
      { n: 1, f: 'Rule for a discrete probability distribution', b: 'Every probability is between 0 and 1, and Σ P(X = x) = 1.' },
      { n: 2, f: 'Discrete uniform distribution', b: 'Every value is equally likely, for example the score on a fair dice (each 1/6).' },
      { n: 3, f: 'Conditions for a binomial distribution B(n, p)', b: 'A fixed number n of independent trials, each with two outcomes and the same probability of success p. X is the number of successes.' },
      { n: 4, f: 'Binomial: P(X = r), mean and variance', b: 'P(X = r) = ⁿCᵣ pʳ(1 − p)ⁿ⁻ʳ.\nMean np; variance np(1 − p).' },
      { n: 5, f: 'X ~ B(10, 0.5). Find P(X = 5).', b: '¹⁰C₅ × 0.5¹⁰ = 252/1024 = 0.246 (3 s.f.).' },
      { n: 6, f: 'Key features of the normal distribution N(μ, σ²)', b: 'Continuous, bell-shaped and symmetrical about the mean μ, with variance σ². Points of inflection at x = μ ± σ.' },
      { n: 7, f: 'Standardising a normal variable', b: 'Z = (X − μ)/σ, where Z ~ N(0, 1) has mean 0 and standard deviation 1.' },
      { n: 8, f: 'When can B(n, p) be approximated by a normal distribution, and how?', b: 'For large n with p not near 0 or 1. Use N(np, np(1 − p)) with a continuity correction: P(X ≥ 55) becomes P(Y > 54.5).' },
      { n: 9, f: 'Binomial or normal model?', b: 'Binomial: a discrete count of successes in a fixed number of trials.\nNormal: a continuous measurement (mass, time, length) that is roughly symmetrical and bell-shaped.' },
    ]),

    // 16 O: Statistical hypothesis testing
    ...topicOnly('o-statistical-hypothesis-testing-aqa-alevel-maths', 16, [
      { n: 1, f: 'Null and alternative hypotheses', b: 'H₀: the starting belief, one value of the parameter (p = 0.3, μ = 50, ρ = 0).\nH₁: uses <, > or ≠, and is accepted if the evidence is strong enough.' },
      { n: 2, f: 'Significance level', b: 'The threshold probability for rejecting H₀; it is the probability of incorrectly rejecting H₀.' },
      { n: 3, f: 'Critical region, critical value and acceptance region', b: 'Critical region: values of the test statistic that lead to rejecting H₀.\nCritical value: the first value inside it.\nAcceptance region: everything else.' },
      { n: 4, f: 'p-value, and the decision rule', b: 'p-value: P(result at least as extreme as observed, assuming H₀ is true).\nReject H₀ if the p-value < the significance level, or the test statistic is in the critical region.' },
      { n: 5, f: '1-tail vs 2-tail test', b: '1-tail: H₁ is one-directional (< or >).\n2-tail: H₁ uses ≠, and the significance level is split equally between the two tails.' },
      { n: 6, f: 'How should the conclusion of a hypothesis test be worded?', b: 'In context and without certainty: "there is (or is not) sufficient evidence to suggest…". Never "accept H₁" or "prove H₀".' },
      { n: 7, f: 'Distribution of the sample mean of n values from N(μ, σ²)', b: 'X̄ ~ N(μ, σ²/n). For σ = 6 and n = 9, the standard deviation of X̄ is 6/3 = 2.' },
      { n: 8, f: 'Test statistic for a test of a normal mean', b: 'z = (x̄ − μ₀)/(σ/√n), where μ₀ is the value in H₀.' },
      { n: 9, f: 'Hypothesis test for correlation', b: 'H₀: ρ = 0 (no correlation in the population); H₁: ρ > 0, ρ < 0 or ρ ≠ 0. Compare the sample product moment correlation coefficient r with the critical value (or use the p-value).' },
      { n: 10, f: 'Binomial test: which probability do you compare for H₁: p > p₀ and for H₁: p < p₀?', b: 'p > p₀: P(X ≥ observed value).\np < p₀: P(X ≤ observed value).\nBoth are found under H₀, X ~ B(n, p₀).' },
    ]),

    // 17 P: Quantities and units in mechanics
    ...topicOnly('p-quantities-and-units-in-mechanics-aqa-alevel-maths', 17, [
      { n: 1, f: 'The fundamental quantities and their SI units', b: 'Mass: kilogram (kg).\nLength: metre (m).\nTime: second (s).' },
      { n: 2, f: 'Derived SI units of velocity, acceleration and force', b: 'Velocity: m s⁻¹.\nAcceleration: m s⁻².\nForce: newton, 1 N = 1 kg m s⁻².' },
      { n: 3, f: 'Weight', b: 'W = mg, a force measured in newtons, acting vertically downwards. With g = 9.8 m s⁻², a 5 kg mass has weight 49 N.' },
      { n: 4, f: 'Convert 54 km h⁻¹ to m s⁻¹.', b: 'Divide by 3.6: 54 ÷ 3.6 = 15 m s⁻¹.' },
      { n: 5, f: 'How can units check a formula?', b: 'Every term must have the same units. In v² = u² + 2as each term is in m² s⁻², so the formula is consistent.' },
      { n: 6, f: 'Mass vs weight', b: 'Mass is the amount of matter, in kg, and does not change. Weight is the gravitational force mg, in N.' },
    ]),

    // 18 Q: Kinematics
    ...topicOnly('q-kinematics-aqa-alevel-maths', 18, [
      { n: 1, f: 'The constant-acceleration (suvat) equations', b: 'v = u + at\ns = ut + ½at²\ns = vt − ½at²\ns = ½(u + v)t\nv² = u² + 2as' },
      { n: 2, f: 'Gradients and areas on displacement–time and velocity–time graphs', b: 's–t graph: gradient = velocity.\nv–t graph: gradient = acceleration; area under it = displacement.' },
      { n: 3, f: 'Variable acceleration: linking s, v and a with calculus', b: 'v = ds/dt, a = dv/dt = d²s/dt².\ns = ∫ v dt and v = ∫ a dt, each with a constant found from given conditions.' },
      { n: 4, f: 'A ball is thrown upwards at 9.8 m s⁻¹ (g = 9.8). When does it reach the top, and how high does it go?', b: 'At the top v = 0: t = 9.8/9.8 = 1 s.\nHeight = 9.8²/(2 × 9.8) = 4.9 m. It returns to its start after 2 s.' },
      { n: 5, f: 'Projectile launched at speed u, angle α above the horizontal: the two components of motion', b: 'Horizontal: constant velocity u cos α, so x = (u cos α)t.\nVertical: initial u sin α, acceleration −g, so y = (u sin α)t − ½gt².' },
      { n: 6, f: 'A particle is projected horizontally at 12 m s⁻¹ from 4.9 m above level ground (g = 9.8). Where does it land?', b: 'Vertically: 4.9 = ½(9.8)t², so t = 1 s.\nHorizontally: 12 × 1 = 12 m from the point below its start.' },
      { n: 7, f: 'A particle is projected from level ground with velocity (10i + 19.6j) m s⁻¹ (g = 9.8). Find the time of flight, range and greatest height.', b: '19.6t − 4.9t² = 0 gives t = 4 s.\nRange = 10 × 4 = 40 m.\nGreatest height = 19.6²/(2 × 9.8) = 19.6 m.' },
      { n: 8, f: 'Vector kinematics', b: 'r = position, v = dr/dt, a = dv/dt. With constant acceleration: v = u + at and r = r₀ + ut + ½at², worked component by component.' },
      { n: 9, f: 'Sign of g in vertical motion', b: 'Take upwards as positive, so a = −9.8 m s⁻². Losing this sign is a common error.' },
    ]),

    // 19 R: Forces and Newton's laws
    ...topicOnly('r-forces-and-newtons-laws-aqa-alevel-maths', 19, [
      { n: 1, f: 'Newton’s first law', b: 'A body remains at rest or moves with constant velocity unless acted on by a resultant force.' },
      { n: 2, f: 'Newton’s second law', b: 'Resultant force = mass × acceleration, F = ma, in the direction of the acceleration (also in vector form).' },
      { n: 3, f: 'Newton’s third law', b: 'If body A exerts a force on body B, then B exerts an equal and opposite force on A.' },
      { n: 4, f: 'Resolving a force F acting at θ to the horizontal', b: 'Horizontal component F cos θ; vertical component F sin θ. On a slope at α, the weight has components mg sin α down the slope and mg cos α into it.' },
      { n: 5, f: 'Particles of 3 kg and 2 kg hang either side of a smooth pulley (g = 9.8). Find the acceleration and the tension.', b: 'System: 3g − 2g = 5a, so a = 9.8/5 = 1.96 m s⁻².\n2 kg particle: T − 2g = 2a, so T = 2(9.8 + 1.96) = 23.52 N.' },
      { n: 6, f: 'Friction: the inequality and limiting friction', b: 'F ≤ μR, where R is the normal reaction and μ the coefficient of friction. F = μR when on the point of slipping or sliding.' },
      { n: 7, f: 'A particle rests on a rough plane at angle α, on the point of slipping, with only weight, R and friction acting. Find μ.', b: 'R = mg cos α and μR = mg sin α, so μ = tan α.' },
      { n: 8, f: 'Condition for a particle to be in equilibrium', b: 'The resultant force is zero: the forces balance when resolved in any two perpendicular directions.' },
      { n: 9, f: 'Normal reaction on a person of mass m in a lift accelerating upwards at a', b: 'R − mg = ma, so R = m(g + a). When accelerating downwards, R = m(g − a).' },
    ]),

    // 20 S: Moments
    ...topicOnly('s-moments-aqa-alevel-maths', 20, [
      { n: 1, f: 'Light (modelling word)', b: 'No weight.', src: MOM },
      { n: 2, f: 'Uniform (modelling word)', b: 'Weight at the midpoint.', src: MOM },
      { n: 3, f: 'Non-uniform (modelling word)', b: 'Weight at an unknown point; find it with moments.', src: MOM },
      { n: 4, f: 'Rigid (modelling word)', b: 'Does not bend.', src: MOM },
      { n: 5, f: 'Moment of a force about a point', b: 'Force × perpendicular distance from the point to the line of action of the force, in N m, with a sense (clockwise or anticlockwise).' },
      { n: 6, f: 'Conditions for a rigid body to be in equilibrium', b: 'The resultant force is zero, and the total moment about any point is zero (clockwise moments = anticlockwise moments).' },
      { n: 7, f: 'A beam on two supports is about to tilt about support D. What do you use?', b: 'The reaction at the other support is zero. Take moments about D.' },
      { n: 8, f: 'A uniform rod AB, 2 m long and weight 40 N, hangs horizontally from vertical strings at A and B. A 20 N load is 0.5 m from A. Find the tensions.', b: 'Moments about A: 2T_B = 40 × 1 + 20 × 0.5 = 50, so T_B = 25 N.\nVertically: T_A = 60 − 25 = 35 N.' },
      { n: 9, f: 'Choosing the point to take moments about', b: 'Take moments about the point where most unknown forces act: their moments are zero there, so they drop out of the equation.' },
    ]),

    // 21 Use of data in statistics
    ...topicOnly('use-of-data-in-statistics-aqa-alevel-maths', 21, [
      { n: 1, f: 'σ and s', b: 'Divisor n against divisor n − 1. Close for large n.', src: UOD },
      { n: 2, f: 'Missing and zero', b: 'A missing value is not a measurement of 0.', src: UOD },
      { n: 3, f: 'Error and outlier', b: 'An error is wrong and is corrected or removed; an outlier may be real.', src: UOD },
      { n: 4, f: 'Correlation and causation', b: 'Data from a survey can show association, not cause.', src: UOD },
      { n: 5, f: 'Summary and raw data', b: 'From n, Σx and Σx² you can find x̄ and σ, but not the median.', src: UOD },
      { n: 6, f: 'n = 10, Σx = 50 and Σx² = 290. Find the mean and standard deviation.', b: 'x̄ = 50/10 = 5.\nσ² = 290/10 − 5² = 29 − 25 = 4, so σ = 2.' },
      { n: 7, f: 'The four requirements for using data in A-level statistics', b: 'Become familiar with one or more large data sets; use technology (spreadsheets or statistical software) to explore them; interpret real data in summary or graphical form; use data to investigate questions in real contexts.' },
      { n: 8, f: 'What should you know about the AQA large data set?', b: 'Its contexts, its main features, and how technology helps to explore it. Exam questions may assume this familiarity.' },
      { n: 9, f: 'Sample statistic vs population value', b: 'A sample statistic (such as x̄) estimates a population value (such as μ), and a different sample would usually give a different estimate.' },
    ]),
  ],
};
