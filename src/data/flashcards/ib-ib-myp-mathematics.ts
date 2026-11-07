/**
 * D-444 -- flashcards for IB MYP Mathematics (from 2020, first assessment 2022).
 *
 * One block per subtopic (or per topic, where the syllabus record itemises no
 * subtopics), in syllabus order. Card ids are `<subtopic number>-<n>` (or
 * `<topic number>-<n>`) and are permanent (browser progress is keyed by them):
 * add a new card with the next unused n, never renumber.
 *
 * ID CLASH NOTE. Topic 1's subtopics are numbered '1' to '4' in the syllabus
 * record, so their ids ('2-1', '3-1', '4-1', …) share a prefix with the
 * topic-only topics 2, 3 and 4. To keep every id unique, the cards of topics
 * 2 (key concepts), 3 (related concepts) and 4 (global contexts) are numbered
 * from 51.
 *
 *   u: true     Upper tier: content the Marlbridge MYP notes mark as coming from
 *               the guide's extended mathematics column. Standard-pathway
 *               students can hide these cards. Enrichment-list content is left
 *               out of the deck.
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

const BR = 'ib-myp-mathematics-branches-of-mathematical-study';
const AC = 'ib-myp-mathematics-assessment-criteria';

export const DECK_IB_IB_MYP_MATHEMATICS: FlashcardDeck = {
  boardSlug: 'ib',
  qualificationSlug: 'ib-myp',
  subjectSlug: 'mathematics',
  syllabusCode: 'MYP Mathematics',
  syllabusSeries: 'From 2020, first assessment 2022',
  tierScheme: 'standard-extended',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'sajawal-zahid', reviewedOn: '2026-11-05' },
  cards: [
    // 1 Branches of mathematical study
    ...sub(BR, `${BR}-numerical-and-abstract-reasoning`, '1', [
      { n: 1, f: 'Rational compared with irrational numbers', b: 'Rational (Q): can be written as a/b; its decimal stops or recurs (3/8, −0.25).\nIrrational (Q′): the decimal neither stops nor recurs (√2, π).\nTogether they make the real numbers (R).' },
      { n: 2, f: 'Write 0.4545… as a fraction', b: 'x = 0.4545…, 100x = 45.4545…\n100x − x = 99x = 45\nx = 45/99 = 5/11' },
      { n: 3, f: 'How do you simplify a surd such as √48?', b: 'Find the largest square factor, take its root outside and leave the rest inside: √48 = √16 × √3 = 4√3.\nNote √(a + b) is not √a + √b.' },
      { n: 4, f: 'Laws of exponents', b: 'aᵐ × aⁿ = aᵐ⁺ⁿ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ; (ab)ⁿ = aⁿbⁿ; a⁰ = 1 (a ≠ 0); a⁻ⁿ = 1/aⁿ (a reciprocal, not a negative number). The bases must match.' },
      { n: 5, f: 'Work out 5 × 10⁻³ ÷ (2 × 10²) in standard form', b: 'Numbers: 5 ÷ 2 = 2.5. Powers: 10⁻³ ÷ 10² = 10⁻⁵.\nAnswer: 2.5 × 10⁻⁵ (a × 10ᵏ with 1 ≤ a < 10).' },
      { n: 6, f: 'Absolute error and percentage error', b: 'Absolute error = the size of (measured − true), always positive.\nPercentage error = absolute error ÷ true value × 100.' },
      { n: 7, f: 'Fractional exponents: a^(m/n)', b: 'Take the nth root first (the denominator), then raise to the power m (the numerator).', u: true },
      { n: 8, f: 'Logarithms: what does log_a x = y mean, and how do you solve 3ˣ = 20?', b: 'log_a x = y means aʸ = x, so log₃ 81 = 4 and log_a 1 = 0.\n3ˣ = 20 gives x = log 20 ÷ log 3 ≈ 2.73 (3 s.f.).', u: true },
      { n: 9, f: 'Bounds of a − b and a ÷ b', b: 'a − b: lower = lower a − upper b; upper = upper a − lower b.\na ÷ b: lower = lower a ÷ upper b; upper = upper a ÷ lower b.', u: true },
      { n: 10, f: 'nth term of arithmetic and geometric sequences', b: 'Arithmetic: aₙ = a₁ + (n − 1)d.\nGeometric: aₙ = a₁ × rⁿ⁻¹.\nExample: the 20th term of 8, 13, 18, 23, … is 8 + 19 × 5 = 103.', u: true },
    ]),
    ...sub(BR, `${BR}-thinking-with-models`, '2', [
      { n: 1, f: 'Function', b: 'A mapping where each input has exactly one output. f(x) is the output when the rule f is applied to x. A line or parabola is a function; a circle is a relation, not a function.' },
      { n: 2, f: 'Three forms of a quadratic and what each shows', b: 'General ax² + bx + c: y-intercept c, axis x = −b/(2a).\nFactorised a(x − p)(x − q): x-intercepts p and q.\nVertex a(x − h)² + k: vertex (h, k).\na > 0 opens up (minimum); a < 0 opens down (maximum).' },
      { n: 3, f: 'Write x² + 6x + 2 in vertex form', b: 'Complete the square: (x + 3)² − 9 + 2 = (x + 3)² − 7, so the vertex is (−3, −7).' },
      { n: 4, f: 'Exponential function f(x) = a × bˣ', b: 'b > 0, b ≠ 1. Start value f(0) = a. Growth when b > 1, decay when 0 < b < 1. Horizontal asymptote y = 0. A 12% rise each year is a factor of 1.12; a 12% fall is 0.88.' },
      { n: 5, f: 'Flowchart shapes and trace tables', b: 'Oval: start or stop. Parallelogram: input or output. Rectangle: process step. Diamond: yes/no decision.\nA trace table has one row per pass and one column per variable; record values after each step.' },
      { n: 6, f: 'Linear search compared with halving search', b: 'A linear search of n items needs up to n checks. A halving search needs k checks where 2ᵏ − 1 ≥ n, but only works on a sorted list. For 1000 items: up to 1000 checks against 10.' },
      { n: 7, f: 'Domain and range of 2ˣ and of x² − 4x + 1', b: 'Domain: allowed inputs. Range: outputs that occur.\n2ˣ: domain all reals, range f(x) > 0.\nx² − 4x + 1 = (x − 2)² − 3: domain all reals, range f(x) ≥ −3.', u: true },
      { n: 8, f: 'Asymptotes of f(x) = (ax + b)/(cx + d)', b: 'Vertical: cx + d = 0, so x = −d/c.\nHorizontal: y = a/c.\nDomain x ≠ −d/c; range f(x) ≠ a/c.', u: true },
      { n: 9, f: 'How do you solve a linear programming problem?', b: '1. Define the variables and write every constraint.\n2. Draw the feasible region (solid lines for ≤ or ≥, dashed for < or >).\n3. Find every corner.\n4. Evaluate the objective function at each corner and pick the best.', u: true },
      { n: 10, f: 'Networks: degree of a vertex, and the degree check', b: 'The degree is the number of edges that end at a vertex. The sum of all the degrees is twice the number of edges.', u: true },
    ]),
    ...sub(BR, `${BR}-spatial-reasoning`, '3', [
      { n: 1, f: 'Angle sums of polygons', b: 'Interior angles of an n-sided polygon sum to (n − 2) × 180°. A regular polygon has exterior angle 360°/n.' },
      { n: 2, f: 'Cone: volume, surface area and slant height', b: 'Volume = ⅓πr²h. Total surface area = πr² + πrl. Slant height l = √(r² + h²); r = 15, h = 8 gives l = 17. Slant height is not vertical height.' },
      { n: 3, f: 'Circle theorems', b: 'Angle at the centre = 2 × angle at the circumference (same arc). Angles in the same segment are equal. Angle in a semicircle = 90°. Opposite angles of a cyclic quadrilateral add to 180°. Tangent and radius meet at 90°.' },
      { n: 4, f: 'Distance and midpoint of (−2, 1) and (4, 9)', b: 'Distance = √[(x₂ − x₁)² + (y₂ − y₁)²] = √(6² + 8²) = 10.\nMidpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2) = (1, 5).' },
      { n: 5, f: 'Rotations about the origin', b: '90° anticlockwise: (x, y) → (−y, x).\n180°: (x, y) → (−x, −y).\n90° clockwise: (x, y) → (y, −x).\nFor another centre: subtract the centre, rotate, add it back.' },
      { n: 6, f: 'Congruence and similarity conditions for triangles', b: 'Congruent: SSS, SAS, ASA or AAS, RHS.\nSimilar: AA (two pairs of equal angles) or all three pairs of sides in the same ratio.' },
      { n: 7, f: 'Right-angled trigonometry: find the side opposite 52° when the adjacent side is 15 m', b: 'tan = opp/adj, unknown on top, so multiply: 15 × tan 52° ≈ 19.2 m.' },
      { n: 8, f: 'Converse of Pythagoras', b: 'If a² + b² = c² for the longest side c, the triangle is right-angled. 15, 20, 25: 225 + 400 = 625, so yes. 5, 6, 8: 61 ≠ 64, so no.', u: true },
      { n: 9, f: 'Sine rule and cosine rule', b: 'Sine rule: a/sin A = b/sin B = c/sin C, when you know a side and its opposite angle.\nCosine rule: a² = b² + c² − 2bc cos A, for two sides and the included angle, or three sides.', u: true },
      { n: 10, f: 'Line perpendicular to y = −3x + 2 through (6, 5)', b: 'm₁ × m₂ = −1, so the new gradient is 1/3. Then 5 = (1/3)(6) + c, so c = 3: y = x/3 + 3.', u: true },
    ]),
    ...sub(BR, `${BR}-reasoning-with-data`, '4', [
      { n: 1, f: 'What does the Reasoning with data branch cover?', b: 'Collecting and organising data, measures of central tendency and spread, graphical representation (bar charts, histograms, scatter plots, box plots), basic probability, and drawing and justifying conclusions from data.' },
      { n: 2, f: 'Which measure of centre suits which data?', b: 'Roughly symmetric: mean (uses every value).\nSkewed or with outliers: median (not distorted by extreme values).\nCategorical: mode.' },
      { n: 3, f: 'A few very high values pull a mean upwards. What should you do?', b: 'Recognise the data are skewed and consider the median as a more representative measure, and say why.' },
      { n: 4, f: 'Theoretical compared with experimental probability', b: 'Theoretical: calculated from the possible equally likely outcomes.\nExperimental: calculated from the results of repeated trials.' },
      { n: 5, f: 'Choosing a representation for spread, outliers or correlation', b: 'A box plot shows spread and outliers clearly; a scatter plot shows correlation between two variables. Label axes, give units and use sensible scales.' },
      { n: 6, f: 'Correlation compared with causation', b: 'A correlation between two variables does not show that one causes the other.' },
      { n: 7, f: 'Drawing a conclusion from data for criterion D', b: 'State what the data suggest in the real context, and reflect on the limitations, such as a small or unrepresentative sample that may not generalise.' },
    ]),

    // 2 Key concepts (ids from 51; see the note at the top)
    ...topicOnly('ib-myp-mathematics-key-concepts', '2', [
      { n: 51, f: 'How many MYP key concepts are there, and which three does mathematics contribute?', b: 'Sixteen key concepts across the MYP. Mathematics contributes form, logic and relationships.' },
      { n: 52, f: 'Key concept: form (in MYP mathematics)', b: 'The structure and shape of an entity, distinguished by its properties; also the aesthetic side of mathematical constructs.' },
      { n: 53, f: 'Key concept: logic (in MYP mathematics)', b: 'Reasoning used to decide things about numbers, shapes and variables, and to explain why conclusions are valid. It is not the same as symbolic logic.' },
      { n: 54, f: 'Key concept: relationships (in MYP mathematics)', b: 'Connections between quantities, properties or concepts, expressed as models, rules or statements; exploring patterns.' },
      { n: 55, f: 'Memory hook for form, logic and relationships', b: 'Form: what something is. Logic: why a conclusion holds. Relationships: how quantities connect.' },
      { n: 56, f: 'Test compared with proof', b: 'A test checks a rule on examples. A proof or justification covers every case. One counterexample ends a claim.' },
      { n: 57, f: 'Statement of inquiry', b: 'A sentence that combines a key concept, related concepts and a global context into one general idea that a unit explores.' },
      { n: 58, f: 'Three types of inquiry question', b: 'Factual: recall facts; can be looked up or calculated.\nConceptual: analyse a big idea that applies widely.\nDebatable: evaluate perspectives; no single right answer.' },
      { n: 59, f: 'Which two concepts appear in both the key concept and related concept lists?', b: 'Change and systems.' },
    ]),

    // 3 Related concepts (ids from 51)
    ...topicOnly('ib-myp-mathematics-related-concepts', '3', [
      { n: 51, f: 'The twelve related concepts in MYP mathematics', b: 'Approximation, change, equivalence, generalization, models, patterns, quantity, representation, simplification, space, systems, validity. Teachers may add others.' },
      { n: 52, f: 'Key concepts compared with related concepts', b: 'Key concepts are broad and shared across subjects. Related concepts belong to mathematics and look at a key concept more closely.' },
      { n: 53, f: 'Equivalence: how do you show two expressions are (or are not) equivalent?', b: 'Expand and simplify until the forms match: 4(x − 1) + 2x = 6x − 4. One counterexample shows they are not equivalent. A matching test value supports equivalence but does not prove it.' },
      { n: 54, f: 'Simplification compared with approximation', b: 'Simplifying rewrites an expression in an easier form and keeps its value exactly. Approximating changes the value slightly.' },
      { n: 55, f: 'Pattern compared with generalization', b: 'A pattern is the ordered set of numbers or objects. A generalization is the rule you state about it, built from particular cases (4, 9, 14, 19 → 5n − 1).' },
      { n: 56, f: 'Model compared with representation', b: 'A model depicts a real-life event through expressions, equations or graphs. A representation is the form something is shown in, such as a table or graph.' },
      { n: 57, f: 'Validity, with an example', b: 'Sound, logical mathematics giving a true conclusion or a sensible interpretation. x² + 2x − 24 = 0 gives x = 4 or −6; for a length, reject −6.' },
      { n: 58, f: 'Which related concepts appear in all four branches, and which in only one?', b: 'Equivalence, quantity and systems appear in all four branches. Space appears only in spatial reasoning.' },
    ]),

    // 4 Global contexts (ids from 51)
    ...topicOnly('ib-myp-mathematics-global-contexts', '4', [
      { n: 51, f: 'The six MYP global contexts', b: 'Identities and relationships; orientation in space and time; personal and cultural expression; scientific and technical innovation; globalization and sustainability; fairness and development.' },
      { n: 52, f: 'Which global context fits mathematics most naturally?', b: 'Scientific and technical innovation, but teachers are encouraged to use all six.' },
      { n: 53, f: 'Global context compared with topic', b: 'The global context says why the learning matters; the topic is the mathematics itself. A picture on a worksheet is decoration, not a context.' },
      { n: 54, f: 'How do you build a statement of inquiry?', b: '1. Name the mathematics.\n2. Pick the key concept it truly shows.\n3. Pick one to three related concepts.\n4. Pick the global context.\n5. Write one general sentence and test that the unit can explore it.' },
      { n: 55, f: 'Why is "Proportion" or "Students will calculate ratios" a weak statement of inquiry?', b: 'The first is only a topic name and the second is a task. A statement of inquiry must be a general idea written as a sentence, not a topic, task or question.' },
      { n: 56, f: 'Guide example: a volume unit', b: 'Key concept form; related concepts space and quantity; global context fairness and development.' },
      { n: 57, f: 'Fairness example: clinic X has 90 patients and 6 nurses; clinic Y has 150 and 8. Which is more stretched?', b: 'Patients per nurse: 90 ÷ 6 = 15 and 150 ÷ 8 = 18.75. Clinic Y is more stretched, though it has more nurses.' },
    ]),

    // 5 Assessment criteria
    ...sub(AC, `${AC}-a-knowing-and-understanding`, 'A', [
      { n: 1, f: 'The four MYP mathematics assessment criteria', b: 'A Knowing and understanding; B Investigating patterns; C Communicating; D Applying mathematics in real-life contexts. Equally weighted, each with a maximum level of 8.' },
      { n: 2, f: 'Criterion levels and band labels', b: 'Levels 0, then bands 1-2, 3-4, 5-6, 7-8 (limited, adequate, substantial, excellent). Level 0 means no descriptor is reached. The teacher chooses the best fit across the strands.' },
      { n: 3, f: 'The three strands of criterion A', b: 'i select appropriate mathematics; ii apply it successfully; iii solve problems correctly in a variety of contexts. The wording is the same in Years 1, 3 and 5.' },
      { n: 4, f: 'Criterion A: how do the bands progress?', b: '1-2: simple problems, familiar situations.\n3-4: more complex, familiar.\n5-6: challenging, familiar.\n7-8: challenging, familiar and unfamiliar situations.' },
      { n: 5, f: 'Method for a criterion A problem', b: '1. Name the branch of mathematics.\n2. Say in one line why the method fits.\n3. Carry it out, showing each step.\n4. Check units, rounding and reasonableness against the context.' },
      { n: 6, f: '12 notebooks cost 31.20. Find the cost of 20.', b: '31.20 ÷ 12 = 2.60 each; 2.60 × 20 = 52.00.' },
    ]),
    ...sub(AC, `${AC}-b-investigating-patterns`, 'B', [
      { n: 1, f: 'Criterion B strands in Year 5', b: 'i select and apply problem-solving techniques to discover complex patterns; ii describe patterns as general rules consistent with findings; iii prove, or verify and justify, these general rules.' },
      { n: 2, f: 'Verify, justify and prove (criterion B)', b: 'Verify: test the rule on further cases.\nJustify: explain why it must work.\nProve: a general argument that covers every case.' },
      { n: 3, f: 'Criterion B: what is the cap on a fully guided task?', b: 'Level 6 in Years 1 and 2; level 4 from Year 3 up. Naming the technique in the task lowers the ceiling.' },
      { n: 4, f: 'Simple compared with complex patterns (Year 5 examples)', b: 'Simple: linear, ax², ax² + c.\nComplex: other quadratics, cubic, quartic, exponential, rational f(x)/g(x).' },
      { n: 5, f: 'Method for a pattern investigation', b: '1. Build 5 to 6 cases in a table.\n2. Differences: constant first → linear; constant second → quadratic; constant ratio → exponential.\n3. Conjecture in words, then with n.\n4. Test on a new case.\n5. Justify or prove.' },
      { n: 6, f: 'Find a rule for 4, 10, 18, 28, 40', b: 'Second differences are 2, so start with n². Subtracting n² leaves 3, 6, 9, 12, 15 = 3n.\nRule: n² + 3n = n(n + 3). The 7th term is 70.' },
      { n: 7, f: 'Prediction compared with general rule', b: 'A prediction names one value, such as the 20th term. A general rule works for any n.' },
    ]),
    ...sub(AC, `${AC}-c-communicating`, 'C', [
      { n: 1, f: 'The five strands of criterion C', b: 'i appropriate mathematical language (notation, symbols, terminology); ii appropriate forms of representation; iii moving between forms of representation; iv lines of reasoning; v organising information logically.' },
      { n: 2, f: 'Criterion C strand iii in Year 1', b: 'Moving between forms of representation is not demonstrated at any band in Year 1; it applies in Years 3 and 5.' },
      { n: 3, f: 'Criterion C: reasoning at the top band by year', b: 'Year 1: coherent. Year 3: complete and coherent. Year 5: complete, coherent and concise.' },
      { n: 4, f: 'Complete, coherent and concise', b: 'Complete: no missing steps. Coherent: steps in a logical order. Concise: no unnecessary material.' },
      { n: 5, f: 'Notation habits for communicating', b: 'Write mathematical notation, not calculator notation (4.5 × 10³, not 4.5E3). Use superscripts and subscripts correctly. Use = only between equal quantities; do not chain unrelated results.' },
      { n: 6, f: 'Moving between forms: C = 18 + 22m. Find m when C = 260.', b: 'Graph: intercept 18, gradient 22; in words, 18 to join and 22 each month.\n22m = 242, so m = 11.' },
    ]),
    ...sub(AC, `${AC}-d-applying-mathematics-in-real-life-contexts`, 'D', [
      { n: 1, f: 'The five strands of criterion D', b: 'i identify the relevant elements of a real-life situation; ii select appropriate strategies; iii apply them to reach a valid solution; iv the degree of accuracy of the solution; v whether the solution makes sense in the context.' },
      { n: 2, f: 'Criterion D strands iv and v: command terms by year', b: 'Accuracy (iv): explain in Years 1 and 3; justify in Year 5.\nMakes sense (v): describe in Year 1; explain in Year 3; justify in Year 5.' },
      { n: 3, f: 'Describe, explain and justify', b: 'Describe: say what happened. Explain: give reasons. Justify: give reasons backed by evidence such as numbers or facts.' },
      { n: 4, f: 'Accuracy compared with sense (criterion D)', b: 'Accuracy concerns the precision of the number. Sense concerns how well the answer fits the real situation.' },
      { n: 5, f: 'Method for applying mathematics to a real situation', b: '1. List the relevant facts (identify).\n2. Choose a model and say why (select).\n3. Carry it out accurately (apply).\n4. State and explain the accuracy.\n5. Compare the answer with the real situation.' },
      { n: 6, f: 'Checklist for the validity of a model', b: 'State the domain where it works; test it against at least two data points; say whether the gaps grow, shrink or are random; name something it leaves out; do not predict outside the domain without saying it is unreliable.' },
    ]),
  ],
};
