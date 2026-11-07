/**
 * D-444 -- flashcards for Cambridge IGCSE Mathematics 0580 (2025-2027).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 *   u: true     Upper tier: Extended (Supplement) content, following the
 *               "(Extended)" / "Extended only" marks on Marlbridge's own 0580
 *               revision notes and study guides. Every card on a subtopic whose
 *               syllabus tier is 'supplement' (Core column: "Extended content
 *               only") carries it. Core candidates can hide these cards.
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 0580); origin 'revision-notes'.
 *
 * Plain text only (see types.ts). Unicode for maths. Column vectors are
 * written (x, y) on the cards: x is the top entry, y the bottom entry.
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

/** Every 0580 topic and subtopic slug carries this suffix in syllabus-topics.ts. */
const m = (slug: string) => `${slug}-cambridge-igcse-maths`;

const NUMBER = m('number');
const ALGEBRA = m('algebra-and-graphs');
const COORD = m('coordinate-geometry');
const GEOM = m('geometry');
const MENS = m('mensuration');
const TRIG = m('trigonometry');
const VECT = m('transformations-and-vectors');
const PROB = m('probability');
const STATS = m('statistics');

const NUM_NOTES = 'igcse-mathematics-number-revision-notes';

export const DECK_CAMBRIDGE_IGCSE_MATHEMATICS: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'igcse',
  subjectSlug: 'mathematics',
  syllabusCode: '0580',
  syllabusSeries: '2025-2027',
  tierScheme: 'core-extended',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'sajawal-zahid', reviewedOn: '2026-11-05' },
  cards: [
    // 1 Number
    ...sub(NUMBER, m('types-of-number'), '1.1', [
      { n: 1, f: 'Prime number', b: 'A number with exactly two factors: 1 and itself.\n1 is not prime (it has only one factor). 2 is the only even prime.' },
      { n: 2, f: 'Rational and irrational numbers', b: 'Rational: can be written as a fraction of two integers, e.g. 0.75 = 3/4, or −5 = −5/1.\nIrrational: cannot be written as a fraction, e.g. √2, π.' },
      { n: 3, f: 'Reciprocal of a number', b: '1 ÷ the number. The reciprocal of 4 is 1/4; the reciprocal of 2/3 is 3/2. A number multiplied by its reciprocal gives 1.' },
      { n: 4, f: 'Finding the HCF from prime factors', b: 'Multiply the lowest power of each common prime.', src: NUM_NOTES },
      { n: 5, f: 'Finding the LCM from prime factors', b: 'Multiply the highest power of every prime that appears.', src: NUM_NOTES },
      { n: 6, f: 'Find the HCF and LCM of 24 and 36 using prime factors', b: '24 = 2³ × 3 and 36 = 2² × 3²\nHCF = 2² × 3 = 12\nLCM = 2³ × 3² = 72' },
      { n: 7, f: 'Factor and multiple', b: 'A factor divides exactly into a number: the factors of 12 are 1, 2, 3, 4, 6, 12.\nA multiple is in its times table: the multiples of 12 are 12, 24, 36, …' },
    ]),
    ...sub(NUMBER, m('sets'), '1.2', [
      { n: 1, f: 'Set notation: ℰ, n(A) and A′', b: 'ℰ: the universal set, everything being considered.\nn(A): the number of elements in set A.\nA′: the complement of A, the elements in ℰ that are not in A.' },
      { n: 2, f: 'A ∪ B and A ∩ B', b: 'A ∪ B (union): elements in A or B or both.\nA ∩ B (intersection): elements in both A and B.' },
      { n: 3, f: 'List the set {x : x is an integer and 2 ≤ x ≤ 6}', b: '{2, 3, 4, 5, 6}. It reads "all x such that x is an integer from 2 to 6".' },
      { n: 4, f: 'In a class of 30, 18 study French, 14 study Spanish and 5 study neither. How many study both?', b: 'n(F ∪ S) = 30 − 5 = 25\nboth = 18 + 14 − 25 = 7\nCheck: 11 French only + 7 Spanish only + 7 both + 5 neither = 30.' },
      { n: 5, f: 'How do you fill in a Venn diagram from given totals?', b: 'Start with the overlap (intersection), then work outwards to the "only" regions and the region outside the circles. Check that all the regions add up to n(ℰ).' },
      { n: 6, f: 'The symbols ∈, ∉, ∅, ⊆ and ⊈', b: '∈ is an element of; ∉ is not an element of; ∅ the empty set; ⊆ is a subset of; ⊈ is not a subset of.\nWrite the empty set as ∅, not {0} or {∅}.', u: true },
      { n: 7, f: 'Three-set Venn diagram: 8 students are in both M and C, and 3 are in all three sets. What goes in the "M and C only" region?', b: '8 − 3 = 5. The 8 includes the 3 in all three sets, so fill the centre first and subtract.', u: true },
    ]),
    ...sub(NUMBER, m('powers-and-roots'), '1.3', [
      { n: 1, f: 'The squares from 11² to 15²', b: '11² = 121, 12² = 144, 13² = 169, 14² = 196, 15² = 225' },
      { n: 2, f: 'The cubes you must recall', b: '1³ = 1, 2³ = 8, 3³ = 27, 4³ = 64, 5³ = 125, 10³ = 1000' },
      { n: 3, f: 'Work out √144 + ∛64 without a calculator', b: '12 + 4 = 16' },
      { n: 4, f: 'Work out ∛(−27) and (−3)²', b: '∛(−27) = −3, because (−3)³ = −27.\n(−3)² = 9. (A negative number has no real square root.)' },
      { n: 5, f: 'Work out √(9/25) and 0.2²', b: '√(9/25) = 3/5\n0.2² = 0.04 (not 0.4)' },
    ]),
    ...sub(NUMBER, m('fractions-decimals-and-percentages'), '1.4', [
      { n: 1, f: 'Proper fraction, improper fraction, mixed number', b: 'Proper: numerator smaller than denominator, e.g. 3/8.\nImproper: numerator larger than denominator, e.g. 11/4.\nMixed number: a whole number and a fraction, e.g. 2¾.' },
      { n: 2, f: 'Write 3/8 as a decimal and as a percentage', b: '3 ÷ 8 = 0.375 = 37.5%' },
      { n: 3, f: 'Write 35% and 0.64 as fractions in their simplest form', b: '35% = 35/100 = 7/20\n0.64 = 64/100 = 16/25' },
      { n: 4, f: 'Convert 3⅖ to an improper fraction, and 11/4 to a mixed number', b: '3⅖ = (3 × 5 + 2)/5 = 17/5\n11/4 = 2 remainder 3 = 2¾' },
      { n: 5, f: 'What do 0.2666… and 0.363636… mean in recurring decimal notation?', b: '0.2666…: only the 6 repeats (one dot, over the 6).\n0.363636…: the block 36 repeats (dots over the 3 and the 6).', u: true },
      { n: 6, f: 'Write 0.363636… (36 recurring) as a fraction in its simplest form', b: 'x = 0.3636…, 100x = 36.3636…\n100x − x = 36, so 99x = 36\nx = 36/99 = 4/11', u: true },
      { n: 7, f: 'Write 0.2666… (6 recurring) as a fraction in its simplest form', b: '10x = 2.666…, 100x = 26.666…\n100x − 10x = 24, so 90x = 24\nx = 24/90 = 4/15', u: true },
    ]),
    ...sub(NUMBER, m('ordering'), '1.5', [
      { n: 1, f: 'The symbols ≠, ≥ and ≤', b: '≠ not equal to\n≥ greater than or equal to\n≤ less than or equal to' },
      { n: 2, f: 'How do you order numbers given as fractions, decimals and percentages?', b: 'Convert them all to decimals, then compare place value by place value (tenths first, then hundredths, …).' },
      { n: 3, f: 'Order smallest first: 5/8, 0.6, 62%, 0.59, 2/3', b: 'As decimals: 0.625, 0.6, 0.62, 0.59, 0.666…\nOrder: 0.59, 0.6, 62%, 5/8, 2/3' },
      { n: 4, f: 'Which is larger: 0.3 or 0.25? And −7 or −4?', b: '0.3 is larger (3 tenths beats 2 tenths).\n−4 is larger: the negative number further from zero is smaller, so −7 < −4.' },
    ]),
    ...sub(NUMBER, m('the-four-operations'), '1.6', [
      { n: 1, f: 'Order of operations (BIDMAS)', b: 'Brackets, Indices, then Division and Multiplication (left to right), then Addition and Subtraction (left to right).\n28 − 8 ÷ 2 = 28 − 4 = 24, not 10.' },
      { n: 2, f: 'How do you divide by a fraction? Work out 3/4 ÷ 2/5', b: 'Multiply by the reciprocal of the second fraction.\n3/4 × 5/2 = 15/8 = 1⅞' },
      { n: 3, f: 'Work out 2/3 + 1/4', b: 'Use a common denominator: 8/12 + 3/12 = 11/12' },
      { n: 4, f: 'Work out 1½ × 2⅔', b: 'Change mixed numbers to improper fractions first: 3/2 × 8/3 = 24/6 = 4' },
      { n: 5, f: 'The temperature is −4 °C and rises by 9 °C. What is the new temperature? Also work out (−6) × (−3).', b: '−4 + 9 = 5 °C\n(−6) × (−3) = 18 (negative × negative = positive)' },
    ]),
    ...sub(NUMBER, m('indices-i'), '1.7', [
      { n: 1, f: 'Rules of indices for multiplying and dividing powers of the same base', b: 'aᵐ × aⁿ = aᵐ⁺ⁿ (add the indices)\naᵐ ÷ aⁿ = aᵐ⁻ⁿ (subtract the indices)' },
      { n: 2, f: 'Rule for a power of a power', b: '(aᵐ)ⁿ = aᵐⁿ (multiply the indices). For example (5²)³ = 5⁶.' },
      { n: 3, f: 'Zero and negative indices: work out 7⁰ and 2⁻³', b: 'a⁰ = 1 (a ≠ 0), so 7⁰ = 1.\na⁻ⁿ = 1/aⁿ, so 2⁻³ = 1/2³ = 1/8.' },
      { n: 4, f: 'Fractional indices: what do a^(1/n) and a^(m/n) mean?', b: 'a^(1/n) = ⁿ√a (the nth root).\na^(m/n) = (ⁿ√a)ᵐ: take the root first, then the power.', u: true },
      { n: 5, f: 'Work out 8^(2/3) and 16^(−1/2)', b: '8^(2/3) = (∛8)² = 2² = 4\n16^(−1/2) = 1/√16 = 1/4', u: true },
    ]),
    ...sub(NUMBER, m('standard-form'), '1.8', [
      { n: 1, f: 'Standard form', b: 'A × 10ⁿ, where 1 ≤ A < 10 and n is an integer.' },
      { n: 2, f: 'Write 4 560 000 and 0.00032 in standard form', b: '4 560 000 = 4.56 × 10⁶\n0.00032 = 3.2 × 10⁻⁴' },
      { n: 3, f: 'Work out (6 × 10⁴) × (4 × 10³), giving the answer in standard form', b: '6 × 4 = 24 and 10⁴ × 10³ = 10⁷, giving 24 × 10⁷.\nRe-normalise: 2.4 × 10⁸' },
      { n: 4, f: 'Exam trap: an answer of 42 × 10⁵', b: 'Not standard form, because 42 is not between 1 and 10. It is 4.2 × 10⁶. Always re-check A after multiplying or dividing.' },
    ]),
    ...sub(NUMBER, m('estimation'), '1.9', [
      { n: 1, f: 'Decimal places or significant figures: where do you start counting?', b: 'Decimal places: from the decimal point.\nSignificant figures: from the first non-zero digit.\n0.006382 is 0.01 to 2 d.p. but 0.0064 to 2 s.f.' },
      { n: 2, f: 'How do you estimate a calculation?', b: '1. Round every number to 1 significant figure.\n2. Write the rounded calculation down (this earns the method mark).\n3. Work it out mentally.' },
      { n: 3, f: 'Estimate (38.6 × 5.12) ÷ 0.207', b: '(40 × 5) ÷ 0.2 = 200 ÷ 0.2 = 1000' },
      { n: 4, f: 'Round 8.0449 to 1 decimal place', b: '8.0. Look only at the next digit (4). Do not "double round" 8.0449 → 8.045 → 8.05 → 8.1.' },
      { n: 5, f: 'Round 299 600 to 3 s.f., and 7.4951 to 2 d.p.', b: '299 600 → 300 000 (the 9s carry)\n7.4951 → 7.50 (keep the 0 to show 2 d.p.)' },
      { n: 6, f: '230 eggs are packed in boxes of 6. How many boxes are needed, and how many boxes can be filled?', b: '230 ÷ 6 = 38.33…\nBoxes needed to hold them all: 39 (round up).\nFull boxes: 38 (round down).' },
    ]),
    ...sub(NUMBER, m('limits-of-accuracy'), '1.10', [
      { n: 1, f: 'Bounds of a value rounded to the nearest unit u', b: 'The value lies within half a unit either side: from (value − u/2) up to, but not including, (value + u/2).' },
      { n: 2, f: 'A mass is 4.6 kg to 1 decimal place. Write the error interval.', b: '4.55 ≤ m < 4.65' },
      { n: 3, f: 'A length is 30 cm to the nearest 10 cm. State its lower and upper bounds.', b: 'Lower bound 25 cm, upper bound 35 cm: 25 ≤ l < 35.' },
      { n: 4, f: 'Why is the upper bound not included in the error interval (< not ≤)?', b: 'A value exactly at the upper bound rounds up to the next value: 4.65 kg to 1 d.p. is 4.7 kg, not 4.6 kg.' },
      { n: 5, f: 'Bounds of a calculation: the combinations that give the MAXIMUM (positive quantities)', b: 'Add: UB + UB\nSubtract: UB − LB\nMultiply: UB × UB\nDivide: UB ÷ LB\nSubtraction and division cross over.', u: true, src: NUM_NOTES },
      { n: 6, f: 'Bounds of a calculation: the combinations that give the MINIMUM (positive quantities)', b: 'Add: LB + LB\nSubtract: LB − UB\nMultiply: LB × LB\nDivide: LB ÷ UB', u: true, src: NUM_NOTES },
      { n: 7, f: 'a = 8 and b = 3, both to the nearest whole number. Find the upper bound of a − b.', b: 'UB of a − LB of b = 8.5 − 2.5 = 6', u: true },
    ]),
    ...sub(NUMBER, m('ratio-and-proportion'), '1.11', [
      { n: 1, f: 'How do you share an amount in a given ratio?', b: 'Add the parts, divide the total by the number of parts, then multiply by each share.\nShare 180 in the ratio 2 : 3 : 4: 9 parts, 180 ÷ 9 = 20, giving 40, 60 and 80.' },
      { n: 2, f: 'Simplify the ratio 1.5 kg : 500 g', b: 'Use the same units first: 1500 g : 500 g = 3 : 1' },
      { n: 3, f: 'Two ages are in the ratio 3 : 5 and differ by 12 years. Find the ages.', b: 'The difference is 5 − 3 = 2 parts = 12, so 1 part = 6.\nAges: 18 and 30.' },
      { n: 4, f: '5 pens cost $3.40. How much do 8 pens cost?', b: 'Unitary method: one pen costs 3.40 ÷ 5 = $0.68, so 8 pens cost 8 × 0.68 = $5.44.' },
      { n: 5, f: 'Money is shared in the ratio 2 : 3. What fraction of the total is the first share?', b: '2/5 (2 parts out of 2 + 3 = 5 parts).' },
    ]),
    ...sub(NUMBER, m('rates'), '1.12', [
      { n: 1, f: 'Average speed (a formula you must know)', b: 'average speed = total distance ÷ total time\nAlso: distance = speed × time, time = distance ÷ speed.' },
      { n: 2, f: 'Convert 72 km/h to m/s', b: '72 km = 72 000 m and 1 h = 3600 s.\n72 000 ÷ 3600 = 20 m/s' },
      { n: 3, f: 'A bus travels 54 km in 1 hour 20 minutes. Find its average speed.', b: '20 minutes = 20/60 = ⅓ hour (not 0.2 hours), so the time is 4/3 hours.\n54 ÷ 4/3 = 40.5 km/h' },
      { n: 4, f: 'A car drives 60 km at 30 km/h, then 60 km at 60 km/h. What is the average speed for the whole journey?', b: 'Time: 2 h + 1 h = 3 h. Average speed = 120 ÷ 3 = 40 km/h, not the mean of the two speeds (45 km/h).' },
      { n: 5, f: 'Density, pressure and population density', b: 'density = mass ÷ volume (e.g. g/cm³)\npressure = force ÷ area (e.g. N/m²)\npopulation density = population ÷ area\nThe syllabus says these formulas are given in the question.' },
      { n: 6, f: 'A metal block has mass 540 g and volume 200 cm³. Find its density.', b: '540 ÷ 200 = 2.7 g/cm³' },
    ]),
    ...sub(NUMBER, m('percentages'), '1.13', [
      { n: 1, f: 'Percentage change', b: 'percentage change = (change ÷ original value) × 100\nDivide by the ORIGINAL value, not the new one.' },
      { n: 2, f: 'Multipliers for a 20% increase and a 20% decrease', b: 'Increase by 20%: × 1.2\nDecrease by 20%: × 0.8' },
      { n: 3, f: 'Write 18 as a percentage of 24', b: '18 ÷ 24 × 100 = 75%' },
      { n: 4, f: 'Simple and compound interest on $500 at 4% per year for 3 years', b: 'Simple (on the original amount each year): 500 × 0.04 × 3 = $60 interest.\nCompound (on the running total): 500 × 1.04³ = $562.43, so $62.43 interest.' },
      { n: 5, f: 'A price rises by 20%, then falls by 20%. Is it back to the original price?', b: 'No. 1.2 × 0.8 = 0.96, so it is 4% lower than the original.' },
      { n: 6, f: 'Reverse percentage: a price is $84 after a 20% increase. Find the original price.', b: 'Divide by the multiplier: 84 ÷ 1.2 = $70.\n(Not 84 × 0.8 = $67.20.)', u: true },
    ]),
    ...sub(NUMBER, m('using-a-calculator'), '1.14', [
      { n: 1, f: 'When should you round in a calculator question?', b: 'Only at the end. Keep full values with the Ans or memory key. If a later part uses an earlier answer, use the unrounded value.' },
      { n: 2, f: 'Accuracy for answers on the calculator papers, unless the question says otherwise', b: 'Non-exact answers to 3 significant figures; angles in degrees to 1 decimal place. Use the π key or 3.142.' },
      { n: 3, f: 'How do you enter (3.2 + 4.7) ÷ (2.1 × 0.6) correctly?', b: 'Put brackets round the whole numerator and the whole denominator. Without them the calculator divides only part of the expression.' },
      { n: 4, f: 'Why does typing −4² give −16?', b: 'The calculator squares 4 first, then applies the minus sign. To square −4, type (−4)², which is 16.' },
      { n: 5, f: 'How do you enter 3 hours 20 minutes, and read 5.15 hours?', b: 'Enter 3 + 20 ÷ 60 (= 3.333… h), never 3.20.\n5.15 h: 0.15 × 60 = 9, so 5 hours 9 minutes (not 5 h 15 min).' },
      { n: 6, f: 'The display shows 2.3E−05. How do you write the value?', b: '2.3 × 10⁻⁵ = 0.000023. Never copy "E−05" as the answer.' },
    ]),
    ...sub(NUMBER, m('time'), '1.15', [
      { n: 1, f: 'Write 3.15 p.m., 12.30 a.m. and 12.30 p.m. in the 24-hour clock', b: '3.15 p.m. → 15 15\n12.30 a.m. (just after midnight) → 00 30\n12.30 p.m. (just after noon) → 12 30' },
      { n: 2, f: 'How long is it from 09 47 to 13 22?', b: 'Count on: 09 47 → 10 00 is 13 min; 10 00 → 13 00 is 3 h; 13 00 → 13 22 is 22 min.\nTotal 3 h 35 min.' },
      { n: 3, f: 'Exam trap: finding a time interval by working out 13.22 − 9.47', b: 'Times are not decimals: there are 60 minutes in an hour, not 100. Count on to the next hour instead.' },
      { n: 4, f: 'City Q is 5 hours ahead of City P. A flight leaves P at 21 40 (P time) and takes 8 h 45 min. What is the local time in Q when it lands?', b: '21 40 + 8 h 45 min = 06 25 the next day, P time.\nAdd 5 hours: 11 25 the next day, Q time.' },
    ]),
    ...sub(NUMBER, m('money'), '1.16', [
      { n: 1, f: 'A calculator shows 4.8 for an amount in dollars. How do you write it?', b: '$4.80. Money is given to the nearest cent (2 decimal places).' },
      { n: 2, f: 'Exchange rate 1 unit of A = r units of B. How do you convert?', b: 'A to B: multiply by r.\nB to A: divide by r.' },
      { n: 3, f: '£1 = $1.28. Convert £250 to dollars and $500 to pounds.', b: '£250 × 1.28 = $320\n$500 ÷ 1.28 = 390.625 = £390.63' },
      { n: 4, f: 'How can you check a currency conversion?', b: 'Sense check which amount should be larger. If £1 buys more than $1, the dollar amount must be the larger number.' },
    ]),
    ...sub(NUMBER, m('exponential-growth-and-decay'), '1.17', [
      { n: 1, f: 'Exponential growth and decay formula', b: 'value after n periods = starting value × (multiplier)ⁿ\nGrowth by r%: multiplier = 1 + r/100\nDecay by r%: multiplier = 1 − r/100', u: true },
      { n: 2, f: '800 bacteria increase by 15% each hour. How many are there after 5 hours?', b: '800 × 1.15⁵ = 1609.08…, so about 1609 bacteria.', u: true },
      { n: 3, f: 'A car worth $12 000 loses 18% of its value each year. Find its value after 3 years.', b: '12 000 × 0.82³ = $6616.42 (to the nearest cent).', u: true },
      { n: 4, f: 'Exam trap: depreciation by 18% each year', b: 'Do not subtract 18% of the ORIGINAL value each year: that is a linear (simple) decrease. Multiply by 0.82 once for each year.', u: true },
      { n: 5, f: '$1000 is invested at 5% compound interest per year. After how many whole years is it first worth more than $1200?', b: 'Try values of n: 1000 × 1.05³ = $1157.63; 1000 × 1.05⁴ = $1215.51.\nAfter 4 years.', u: true },
    ]),
    ...sub(NUMBER, m('surds'), '1.18', [
      { n: 1, f: 'How do you simplify a surd such as √48?', b: 'Use √(ab) = √a × √b with the largest square factor: √48 = √(16 × 3) = 4√3.', u: true },
      { n: 2, f: 'Simplify √75 − √12', b: '5√3 − 2√3 = 3√3\nSurds can only be added or subtracted as multiples of the same root: it is not √63.', u: true },
      { n: 3, f: 'Rationalise the denominator of 12/√3', b: 'Multiply top and bottom by √3: 12√3/3 = 4√3', u: true },
      { n: 4, f: 'Rationalise the denominator of 2/(√5 − 1)', b: 'Multiply top and bottom by the conjugate √5 + 1:\n2(√5 + 1)/(5 − 1) = (√5 + 1)/2', u: true },
      { n: 5, f: 'Simplify √50 and √8 × √2', b: '√50 = √(25 × 2) = 5√2\n√8 × √2 = √16 = 4', u: true },
    ]),

    // 2 Algebra and graphs
    ...sub(ALGEBRA, m('introduction-to-algebra'), '2.1', [
      { n: 1, f: 'Letters as generalised numbers: if n is any integer, what can you say about 2n and 2n + 1?', b: '2n is always even and 2n + 1 is always odd, whatever integer n is.' },
      { n: 2, f: 'A pen costs p cents and a ruler costs r cents. Write an expression for the cost of 3 pens and 2 rulers.', b: '3p + 2r cents' },
      { n: 3, f: 'How do you substitute a negative number into a formula?', b: 'Put the negative number in brackets, then follow the order of operations.\nv = u + at with u = 12, a = −3, t = 5: v = 12 + (−3)(5) = −3.' },
      { n: 4, f: 'Work out 2x² when x = −3', b: '2 × (−3)² = 2 × 9 = 18. Square first, then multiply (not (2 × −3)² = 36).' },
    ]),
    ...sub(ALGEBRA, m('algebraic-manipulation'), '2.2', [
      { n: 1, f: 'Simplify 5x + 3y − 2x + y', b: 'Collect like terms: 3x + 4y' },
      { n: 2, f: 'Expand and simplify (x + 3)(x − 5)', b: 'x² − 5x + 3x − 15 = x² − 2x − 15' },
      { n: 3, f: 'Expand (a + b)²', b: 'a² + 2ab + b². Not a² + b²: the middle term 2ab is the common slip.' },
      { n: 4, f: 'Factorise fully 6x² + 9x', b: '3x(2x + 3). "Factorise" means take out the highest common factor of the numbers and the letters.' },
      { n: 5, f: 'Difference of two squares: factorise 2x² − 18', b: 'Take out the common factor first: 2(x² − 9) = 2(x + 3)(x − 3).\na² − b² = (a + b)(a − b)', u: true },
      { n: 6, f: 'Factorise x² + 5x + 6 and 2x² + 7x + 3', b: 'x² + 5x + 6 = (x + 2)(x + 3)\n2x² + 7x + 3 = (2x + 1)(x + 3)', u: true },
      { n: 7, f: 'Factorise by grouping: xy + 2x + 3y + 6', b: 'x(y + 2) + 3(y + 2) = (x + 3)(y + 2)', u: true },
      { n: 8, f: 'Complete the square for x² + 6x + 5', b: 'Halve the coefficient of x: (x + 3)² − 9 + 5 = (x + 3)² − 4', u: true },
    ]),
    ...sub(ALGEBRA, m('algebraic-fractions'), '2.3', [
      { n: 1, f: 'Simplify (x² − 9)/(x² + 3x)', b: 'Factorise top and bottom: (x + 3)(x − 3) / x(x + 3)\nCancel the common factor (x + 3): (x − 3)/x', u: true },
      { n: 2, f: 'Exam trap: cancelling the x² in (x² + 3)/(x² − 1)', b: 'Only whole factors cancel, not single terms. This fraction does not simplify by cancelling x².', u: true },
      { n: 3, f: 'Write 2/x + 3/(x + 1) as a single fraction', b: 'Common denominator x(x + 1):\n(2(x + 1) + 3x) / x(x + 1) = (5x + 2) / x(x + 1)', u: true },
      { n: 4, f: 'Simplify (x + 1)/2 − (x − 3)/3', b: '(3(x + 1) − 2(x − 3))/6 = (3x + 3 − 2x + 6)/6 = (x + 9)/6\nKeep the bracket round the subtracted numerator: −2(x − 3) = −2x + 6.', u: true },
      { n: 5, f: 'Simplify x/3 ÷ x²/6', b: 'Multiply by the reciprocal: x/3 × 6/x² = 6x/(3x²) = 2/x', u: true },
    ]),
    ...sub(ALGEBRA, m('indices-ii'), '2.4', [
      { n: 1, f: 'Simplify (2x³)⁴', b: 'The power applies to every factor, numbers included: 2⁴x¹² = 16x¹²' },
      { n: 2, f: 'Simplify 6x⁵ ÷ 2x²', b: 'Divide the numbers and subtract the indices: 3x³' },
      { n: 3, f: 'Solve 2ˣ = 32', b: '32 = 2⁵, so x = 5.' },
      { n: 4, f: 'Write x⁻² and 5x⁰ without negative or zero indices', b: 'x⁻² = 1/x²\n5x⁰ = 5 × 1 = 5' },
      { n: 5, f: 'Simplify (8x⁶)^(1/3)', b: '∛8 × (x⁶)^(1/3) = 2x²', u: true },
      { n: 6, f: 'Solve 9ˣ⁺¹ = 27ˣ', b: 'Write both sides as powers of 3: 3^(2x + 2) = 3^(3x)\n2x + 2 = 3x, so x = 2.\nSet the indices equal only once the bases match.', u: true },
    ]),
    ...sub(ALGEBRA, m('equations'), '2.5', [
      { n: 1, f: 'Solve 5x + 3 = 2x + 15', b: '3x + 3 = 15, so 3x = 12, x = 4. Do the same operation to both sides.' },
      { n: 2, f: 'Solve the simultaneous equations 2x + y = 7 and x − y = 2', b: 'Add to eliminate y: 3x = 9, so x = 3.\nSubstitute: 2(3) + y = 7, so y = 1.' },
      { n: 3, f: 'Elimination: when do you add the equations and when do you subtract?', b: 'Once the coefficients of one letter match in size: if their signs are the same, subtract; if their signs are different, add.' },
      { n: 4, f: 'Make t the subject of v = u + at', b: 'v − u = at, so t = (v − u)/a' },
      { n: 5, f: 'The quadratic formula', b: 'For ax² + bx + c = 0:\nx = (−b ± √(b² − 4ac)) / (2a)', u: true },
      { n: 6, f: 'Solve x² − 4x + 1 = 0, giving exact answers', b: 'x = (4 ± √(16 − 4)) / 2 = (4 ± √12)/2 = 2 ± √3\n(x ≈ 3.73 or 0.268)', u: true },
      { n: 7, f: 'Solve y = x + 1 and y = x² − 1 simultaneously', b: 'Substitute the linear equation: x² − 1 = x + 1, so x² − x − 2 = 0, (x − 2)(x + 1) = 0.\nx = 2, y = 3 or x = −1, y = 0.', u: true },
      { n: 8, f: 'Solve x/3 + x/4 = 7', b: 'Multiply every term by 12: 4x + 3x = 84, so 7x = 84 and x = 12.', u: true },
      { n: 9, f: 'Make x the subject of ax + 3 = bx + 7 (the subject appears twice)', b: 'Collect the x terms on one side: ax − bx = 4\nFactorise: x(a − b) = 4\nDivide: x = 4/(a − b)', u: true },
    ]),
    ...sub(ALGEBRA, m('inequalities'), '2.6', [
      { n: 1, f: 'Number line: open circle or filled circle?', b: 'Open circle (○) for < or >: the end value is not included.\nFilled circle (●) for ≤ or ≥: the end value is included.' },
      { n: 2, f: 'List the integers n with −2 < n ≤ 3', b: '−1, 0, 1, 2, 3 (−2 is not included; 3 is).' },
      { n: 3, f: 'Solve 4 − 2x ≥ 10', b: '−2x ≥ 6. Dividing by a negative number reverses the sign: x ≤ −3.', u: true },
      { n: 4, f: 'Solve −5 < 2x + 3 ≤ 11', b: 'Subtract 3 from every part: −8 < 2x ≤ 8\nDivide every part by 2: −4 < x ≤ 4', u: true },
      { n: 5, f: 'Regions for inequalities in two variables: line style and shading', b: 'Draw the boundary solid for ≤ or ≥ and broken (dashed) for < or >. Shade the UNWANTED side unless the question says otherwise. Test a point such as (0, 0) to choose the side.', u: true },
    ]),
    ...sub(ALGEBRA, m('sequences'), '2.7', [
      { n: 1, f: 'Term-to-term rule and nth term', b: 'Term-to-term rule: how to get from one term to the next (e.g. add 3).\nnth term: a formula for any term from its position n (e.g. 3n + 2).' },
      { n: 2, f: 'Find the nth term of 5, 8, 11, 14, …', b: 'The difference is 3, so 3n + b. When n = 1: 3 + b = 5, so b = 2.\nnth term = 3n + 2' },
      { n: 3, f: 'Find the nth term of 20, 17, 14, 11, …', b: 'The difference is −3, so −3n + b. When n = 1: −3 + b = 20, b = 23.\nnth term = 23 − 3n' },
      { n: 4, f: 'How do the differences tell you the type of sequence?', b: 'Constant 1st difference: linear (an + b).\nConstant 2nd difference: quadratic (an² + bn + c).\nConstant 3rd difference: cubic.' },
      { n: 5, f: 'Find the nth term of 2, 5, 10, 17, …', b: 'These are one more than the square numbers 1, 4, 9, 16: nth term = n² + 1.' },
      { n: 6, f: 'Find the nth term of the quadratic sequence 3, 8, 15, 24, …', b: '2nd difference 2, so the n² coefficient is 2 ÷ 2 = 1.\nSubtract n²: 2, 4, 6, 8, which is 2n.\nnth term = n² + 2n', u: true },
      { n: 7, f: 'Find the nth term of the exponential sequence 3, 6, 12, 24, …', b: 'Each term is double the one before: nth term = 3 × 2ⁿ⁻¹', u: true },
    ]),
    ...sub(ALGEBRA, m('proportion'), '2.8', [
      { n: 1, f: 'y ∝ x and y ∝ 1/x as equations', b: 'Direct: y = kx\nInverse: y = k/x\nk is the constant of proportionality. The same pattern gives y = kx², y = k√x, y = k/x², and so on.', u: true },
      { n: 2, f: 'How do you solve a proportion question?', b: '1. Write the equation with k (e.g. y = kx²).\n2. Substitute the known pair of values to find k.\n3. Rewrite the equation with that k.\n4. Use it to find the unknown.', u: true },
      { n: 3, f: 'y is proportional to x². y = 12 when x = 2. Find y when x = 5.', b: '12 = k × 4, so k = 3 and y = 3x².\nx = 5: y = 3 × 25 = 75', u: true },
      { n: 4, f: 'y is inversely proportional to x². y = 5 when x = 4. Find y when x = 2.', b: '5 = k/16, so k = 80 and y = 80/x².\nx = 2: y = 80/4 = 20', u: true },
      { n: 5, f: 'y = kx²: x is multiplied by 3. y = k/x³: x is doubled. What happens to y?', b: 'y = kx²: y is multiplied by 3² = 9.\ny = k/x³: y is divided by 2³ = 8.', u: true },
    ]),
    ...sub(ALGEBRA, m('graphs-in-practical-situations'), '2.9', [
      { n: 1, f: 'Distance–time graph: what do the gradient, a horizontal section and a downward slope mean?', b: 'Gradient: speed.\nHorizontal: stationary.\nSloping down: travelling back towards the start.' },
      { n: 2, f: 'Gradient of a straight-line graph in a practical situation', b: 'The rate of change of the vertical quantity with the horizontal one, e.g. cost per item, litres per minute, km per hour.' },
      { n: 3, f: 'A van travels 36 km in 45 minutes. Find its speed in km/h.', b: '45 min = 0.75 h, so 36 ÷ 0.75 = 48 km/h (not 36 ÷ 45 = 0.8).' },
      { n: 4, f: 'Conversion graph trap: a line that does not pass through the origin', b: 'You cannot scale up from one reading (e.g. a fixed charge plus a rate). Read each value from the graph, or use the equation of the line.' },
      { n: 5, f: 'Speed–time graph: what do the gradient, the area under it and a horizontal section mean?', b: 'Gradient: acceleration (a negative gradient is a deceleration).\nArea under the graph: distance travelled.\nHorizontal: constant speed (not stopped).', u: true },
      { n: 6, f: 'An object accelerates uniformly from rest to 12 m/s in 4 s. Find the acceleration and the distance travelled.', b: 'Acceleration = 12 ÷ 4 = 3 m/s²\nDistance = area of triangle = ½ × 4 × 12 = 24 m', u: true },
      { n: 7, f: 'How do you estimate the rate of change at a point on a curved graph?', b: 'Draw the tangent to the curve at that point, then find the gradient of the tangent using two points on the tangent (not on the curve).', u: true },
    ]),
    ...sub(ALGEBRA, m('graphs-of-functions'), '2.10', [
      { n: 1, f: 'Shapes of y = ax + b, y = x² + ax + b and y = −x² + ax + b', b: 'y = ax + b: a straight line.\ny = x² + ax + b: a U-shaped parabola (minimum).\ny = −x² + ax + b: an n-shaped parabola (maximum).\nBoth parabolas are symmetrical.' },
      { n: 2, f: 'Shape of the graph of y = a/x', b: 'Two separate branches that never touch the axes. For a > 0 they lie in the first and third quadrants; for a < 0, in the second and fourth. There is no point at x = 0.' },
      { n: 3, f: 'Drawing a curve from a table of values: two common slips', b: 'Squaring a negative wrongly: (−3)² = 9, not −9 (a wrong value breaks the symmetry).\nJoining points with a ruler: draw a smooth curve.' },
      { n: 4, f: 'How do you solve x² − 2x − 3 = 0 from the graph of y = x² − 2x − 3?', b: 'Read the x-coordinates where the curve crosses the x-axis (y = 0): x = −1 and x = 3.' },
      { n: 5, f: 'How do you solve x² − 2x − 3 = x + 1 using the graph of y = x² − 2x − 3?', b: 'Draw the line y = x + 1 on the same axes and read the x-coordinates of the points where it meets the curve.' },
      { n: 6, f: 'Which graphs does Extended add in 2.10?', b: 'y = axⁿ for n = −2, −1, −½, 0, ½, 1, 2, 3 (and sums of up to three such terms), and exponential graphs y = abˣ + c.', u: true },
      { n: 7, f: 'Features of an exponential decay graph', b: 'The value falls by the same factor in each equal time interval (a constant halving time), and the curve never reaches 0.', u: true },
    ]),
    ...sub(ALGEBRA, m('sketching-curves'), '2.11', [
      { n: 1, f: 'Sketch y = x² − 2x − 8: what must you show?', b: 'U-shape (positive x²). Roots: (x − 4)(x + 2) = 0, so x = −2 and x = 4. y-intercept −8. Line of symmetry halfway between the roots, x = 1. Label the intercepts.' },
      { n: 2, f: 'How do you sketch a straight line such as 2x + 5y = 10?', b: 'Find the intercepts: x = 0 gives y = 2; y = 0 gives x = 5. Join (0, 2) and (5, 0) and extend the line.', u: true },
      { n: 3, f: 'Turning point of y = (x + p)² + q, and of y = (x + 1)² − 16', b: 'y = (x + p)² + q has its turning point at (−p, q).\ny = (x + 1)² − 16 has its turning point at (−1, −16), not (1, −16).', u: true },
      { n: 4, f: 'Asymptotes of y = a/x + b', b: 'Vertical asymptote x = 0 and horizontal asymptote y = b. The two branches never cross or touch them.', u: true },
      { n: 5, f: 'Key features of y = arˣ + b', b: 'Horizontal asymptote y = b. Crosses the y-axis at (0, a + b). Growth if r > 1, decay if 0 < r < 1.', u: true },
      { n: 6, f: 'Sketching y = ax³ + bx² + cx: what do you know about the roots?', b: 'Factorise as x(ax² + bx + c), so x = 0 is always a root. There can be up to three roots and two turning points.', u: true },
    ]),
    ...sub(ALGEBRA, m('differentiation'), '2.12', [
      { n: 1, f: 'Derivative of y = axⁿ', b: 'dy/dx = anxⁿ⁻¹\nMultiply by the power, then reduce the power by 1. A constant term differentiates to 0.', u: true },
      { n: 2, f: 'Differentiate y = 4x² − 3x + 7', b: 'dy/dx = 8x − 3', u: true },
      { n: 3, f: 'Find the gradient of y = x³ − 12x at x = 1', b: 'dy/dx = 3x² − 12. At x = 1: 3 − 12 = −9.', u: true },
      { n: 4, f: 'How do you find the turning points of a curve?', b: '1. Find dy/dx.\n2. Solve dy/dx = 0 for x.\n3. Substitute each x into the equation of the curve to find y.', u: true },
      { n: 5, f: 'Find the turning points of y = x³ − 12x and say which is a maximum', b: '3x² − 12 = 0, so x = ±2. Points (2, −16) and (−2, 16).\nd²y/dx² = 6x: at x = 2 it is 12 > 0 (minimum); at x = −2 it is −12 < 0 (maximum).', u: true },
      { n: 6, f: 'Ways to tell a maximum from a minimum', b: 'Second derivative: d²y/dx² > 0 minimum, < 0 maximum.\nOr the sign of dy/dx either side: + then − is a maximum; − then + is a minimum.\nOr an accurate sketch.', u: true },
    ]),
    ...sub(ALGEBRA, m('functions'), '2.13', [
      { n: 1, f: 'Domain and range of a function', b: 'Domain: the set of inputs the function is allowed to take.\nRange: the set of outputs it produces from that domain.', u: true },
      { n: 2, f: 'g(x) = 3x² + 1 and k(x) = 5/(x − 4). State the range of g and a value not in the domain of k.', b: 'x² is never negative, so the range of g is g(x) ≥ 1.\nx = 4 is not in the domain of k (division by zero).', u: true },
      { n: 3, f: 'f(x) = x + 2 and g(x) = 3x. Find gf(x) and fg(x).', b: 'gf(x): f first, then g: 3(x + 2) = 3x + 6\nfg(x): g first, then f: 3x + 2', u: true },
      { n: 4, f: 'How do you find an inverse function f⁻¹(x)?', b: '1. Write y = f(x).\n2. Swap x and y.\n3. Rearrange to make y the subject. That expression is f⁻¹(x).', u: true },
      { n: 5, f: 'Find f⁻¹(x) when f(x) = (2x + 1)/3', b: 'x = (2y + 1)/3, so 3x = 2y + 1 and y = (3x − 1)/2.\nf⁻¹(x) = (3x − 1)/2', u: true },
      { n: 6, f: 'Exam trap: f⁻¹(x) and 1/f(x)', b: 'They are different. f⁻¹(x) undoes f; 1/f(x) is the reciprocal of the output.', u: true },
    ]),

    // 3 Coordinate geometry
    ...sub(COORD, m('coordinates'), '3.1', [
      { n: 1, f: 'What does the point (x, y) mean?', b: 'x: how far across (right positive, left negative). y: how far up or down (up positive). The origin O is (0, 0). Across first, then up.' },
      { n: 2, f: 'Signs of x and y in each region of the grid', b: 'Top right (+, +); top left (−, +); bottom left (−, −); bottom right (+, −).' },
      { n: 3, f: 'Points with the same x-coordinate, and points with the same y-coordinate, lie on what kind of line?', b: 'Same x-coordinate: a vertical line.\nSame y-coordinate: a horizontal line.' },
      { n: 4, f: 'Does the point (2, 3) lie on the line y = 2x − 1?', b: 'Yes: 2(2) − 1 = 3. A point lies on a line if its coordinates make the equation true.' },
    ]),
    ...sub(COORD, m('drawing-linear-graphs'), '3.2', [
      { n: 1, f: 'How do you draw a straight-line graph from its equation?', b: 'Make a table of values with at least three x-values, plot the points, and rule one straight line across the whole range asked for.' },
      { n: 2, f: 'Complete the table for y = 2x − 1 at x = −2, 0 and 2', b: 'x = −2: y = −5\nx = 0: y = −1\nx = 2: y = 3' },
      { n: 3, f: 'Why plot three points rather than two?', b: 'The third point is a check. If the points do not lie in a straight line, a value in the table is wrong: fix the table rather than bending the line.' },
      { n: 4, f: 'Describe the lines x = 3 and y = −2', b: 'x = 3: a vertical line through (3, 0).\ny = −2: a horizontal line through (0, −2).' },
      { n: 5, f: 'Draw 4x + 3y = 12: which points are quickest to find?', b: 'The intercepts: x = 0 gives y = 4, and y = 0 gives x = 3. Plot (0, 4) and (3, 0) and a third point as a check, e.g. x = 6 gives y = −4.', u: true },
    ]),
    ...sub(COORD, m('gradient-of-linear-graphs'), '3.3', [
      { n: 1, f: 'Gradient of a straight line', b: 'gradient = vertical change ÷ horizontal change. On a grid, count squares up (or down) and across between two points on the line.' },
      { n: 2, f: 'Gradient of a line sloping up, a line sloping down, a horizontal line and a vertical line', b: 'Up from left to right: positive.\nDown from left to right: negative.\nHorizontal: 0.\nVertical: undefined.' },
      { n: 3, f: 'Gradient from the coordinates of two points', b: 'm = (y₂ − y₁)/(x₂ − x₁)\nSubtract the coordinates in the same order on the top and the bottom.', u: true },
      { n: 4, f: 'Find the gradient of the line through (0, 3) and (4, 11)', b: '(11 − 3)/(4 − 0) = 8/4 = 2', u: true },
      { n: 5, f: 'Exam trap when finding a gradient', b: 'Dividing the change in x by the change in y. It is change in y ÷ change in x.' },
    ]),
    ...sub(COORD, m('length-and-midpoint'), '3.4', [
      { n: 1, f: 'Length of the line segment from (x₁, y₁) to (x₂, y₂)', b: 'length = √((x₂ − x₁)² + (y₂ − y₁)²)\nThis is Pythagoras’ theorem on the horizontal and vertical distances.', u: true },
      { n: 2, f: 'Midpoint of the line segment from (x₁, y₁) to (x₂, y₂)', b: '((x₁ + x₂)/2, (y₁ + y₂)/2): the mean of the x-coordinates and the mean of the y-coordinates.', u: true },
      { n: 3, f: 'A is (1, 2) and B is (7, 10). Find the length of AB and its midpoint.', b: 'Length = √(6² + 8²) = √100 = 10\nMidpoint = (4, 6)', u: true },
      { n: 4, f: 'Two exam traps with length and midpoint', b: 'Leaving the length as the sum of the squares (forgetting the square root).\nAdding the coordinates for a midpoint but not dividing by 2.', u: true },
    ]),
    ...sub(COORD, m('equations-of-linear-graphs'), '3.5', [
      { n: 1, f: 'In y = mx + c, what do m and c tell you?', b: 'm is the gradient. c is the y-intercept: the line crosses the y-axis at (0, c).' },
      { n: 2, f: 'State the gradient and y-intercept of y = 3x − 4', b: 'Gradient 3, y-intercept −4.' },
      { n: 3, f: 'Write the equation of the line with gradient −2 through the origin', b: 'y = −2x (c = 0 for a line through the origin).' },
      { n: 4, f: 'Find the equation of the line through (2, 3) and (4, 9)', b: 'm = (9 − 3)/(4 − 2) = 3\nSubstitute (2, 3): 3 = 3(2) + c, so c = −3.\ny = 3x − 3', u: true },
      { n: 5, f: 'Find the gradient and y-intercept of 2x + 3y = 12', b: 'Rearrange: 3y = 12 − 2x, so y = −(2/3)x + 4.\nGradient −2/3, y-intercept 4.', u: true },
    ]),
    ...sub(COORD, m('parallel-lines'), '3.6', [
      { n: 1, f: 'What is true about the gradients of parallel lines?', b: 'Parallel lines have the same gradient.' },
      { n: 2, f: 'Find the equation of the line parallel to y = 3x − 7 through (1, 4)', b: 'The gradient stays 3: 4 = 3(1) + c, so c = 1.\ny = 3x + 1' },
      { n: 3, f: 'Which two of these lines are parallel? y = 2x + 1, y = −2x + 1, y = 2x − 5', b: 'y = 2x + 1 and y = 2x − 5: both have gradient 2. (y = −2x + 1 has gradient −2.)' },
      { n: 4, f: 'Find the equation of a line parallel to a given line through a new point: the two steps', b: '1. Keep the gradient m of the given line.\n2. Substitute the new point into y = mx + c and solve for the new c.' },
      { n: 5, f: 'Is 2y = 6x + 1 parallel to y = 3x − 2?', b: 'Yes. Rearranged, 2y = 6x + 1 is y = 3x + ½, which has gradient 3.', u: true },
    ]),
    ...sub(COORD, m('perpendicular-lines'), '3.7', [
      { n: 1, f: 'Gradients of perpendicular lines', b: 'They are negative reciprocals: if one gradient is m, the other is −1/m, so the two gradients multiply to −1.', u: true },
      { n: 2, f: 'Gradient perpendicular to a line of gradient 2, and to a line of gradient −2/3', b: 'Gradient 2: perpendicular gradient −½.\nGradient −2/3: perpendicular gradient 3/2.', u: true },
      { n: 3, f: 'Find the equation of the line perpendicular to y = 4x − 1 through (2, 5)', b: 'Perpendicular gradient −¼: 5 = −¼(2) + c, so c = 5.5.\ny = −¼x + 5.5', u: true },
      { n: 4, f: 'Find the perpendicular bisector of A(0, 0) and B(4, 2)', b: 'Midpoint (2, 1). Gradient of AB = 2/4 = ½, so the perpendicular gradient is −2.\n1 = −2(2) + c, c = 5: y = −2x + 5', u: true },
    ]),

    // 4 Geometry
    ...sub(GEOM, m('geometrical-terms'), '4.1', [
      { n: 1, f: 'Acute, obtuse and reflex angles', b: 'Acute: less than 90°.\nObtuse: between 90° and 180°.\nReflex: between 180° and 360°.\n(A right angle is exactly 90°.)' },
      { n: 2, f: 'Congruent and similar shapes', b: 'Congruent: identical in shape and size.\nSimilar: identical in shape only; one is an enlargement (scaled copy) of the other.' },
      { n: 3, f: 'Trapezium, kite and rhombus', b: 'Trapezium: exactly one pair of parallel sides.\nKite: two pairs of equal adjacent sides.\nRhombus: four equal sides, opposite sides parallel.' },
      { n: 4, f: 'Chord, tangent, sector and segment of a circle', b: 'Chord: a straight line joining two points on the circle.\nTangent: a straight line touching the circle at one point.\nSector: region between two radii and an arc.\nSegment: region between a chord and an arc.' },
      { n: 5, f: 'Number of sides of a pentagon, hexagon, octagon and decagon', b: 'Pentagon 5, hexagon 6, octagon 8, decagon 10.' },
      { n: 6, f: 'Hemisphere and frustum', b: 'Hemisphere: half a sphere.\nFrustum: a cone or pyramid with the top cut off parallel to the base.', u: true },
      { n: 7, f: 'Minor arc and major arc', b: 'Minor arc: the shorter part of the circumference between two points.\nMajor arc: the longer part.', u: true },
    ]),
    ...sub(GEOM, m('geometrical-constructions'), '4.2', [
      { n: 1, f: 'Construct a triangle given its three sides (ruler and compasses only)', b: '1. Draw the longest side with a ruler.\n2. Set the compasses to the second length and draw an arc from one end.\n3. Set them to the third length and draw an arc from the other end.\n4. Join the crossing point to both ends.' },
      { n: 2, f: 'Why must you leave the construction arcs on a constructed triangle?', b: 'The syllabus says construction arcs must be shown: they are the evidence of the method. Do not rub them out.' },
      { n: 3, f: 'Sides 3 cm, 4 cm and 8 cm: why can the triangle not be constructed?', b: '3 + 4 is less than 8, so the arcs do not cross. If one side is as long as the other two together, or longer, no triangle exists.' },
      { n: 4, f: 'Nets: how many faces does the net of a cuboid and of a triangular prism have?', b: 'Cuboid: six rectangles.\nTriangular prism: two triangles and three rectangles.' },
      { n: 5, f: 'How do you find a surface area from a net?', b: 'Add the areas of all the faces of the net: the surface area is the total area of the net.' },
    ]),
    ...sub(GEOM, m('scale-drawings'), '4.3', [
      { n: 1, f: 'A map scale is 1 : 25 000. Two places are 4.4 cm apart on the map. What is the real distance?', b: '4.4 × 25 000 = 110 000 cm = 1100 m = 1.1 km' },
      { n: 2, f: 'A lake is 2.4 km long. How long is it on a map of scale 1 : 50 000?', b: '2.4 km = 240 000 cm; 240 000 ÷ 50 000 = 4.8 cm. Real to map: divide.' },
      { n: 3, f: 'Write "1 cm represents 2 km" as a ratio scale', b: '2 km = 200 000 cm, so 1 : 200 000.' },
      { n: 4, f: 'Three-figure bearings', b: 'An angle measured clockwise from north, written with three figures. North 000°, east 090°, south 180°, west 270°. 45° is written 045°.' },
      { n: 5, f: 'The bearing of B from A: where do you measure from?', b: 'Stand at A (the point after "from"), draw a north line at A, and turn clockwise until you face B.' },
      { n: 6, f: 'The bearing of Q from P is 063°. Find the bearing of P from Q.', b: '063° + 180° = 243°. Back bearings differ by 180° (add 180° if under 180°, subtract if 180° or more).' },
    ]),
    ...sub(GEOM, m('similarity'), '4.4', [
      { n: 1, f: 'What is true about two similar shapes?', b: 'Their corresponding angles are equal and their corresponding sides are in the same ratio (the scale factor).' },
      { n: 2, f: 'Two triangles are similar. A side of 4 cm corresponds to 6 cm. Another side of the smaller triangle is 5 cm. Find the matching side.', b: 'Scale factor 6 ÷ 4 = 1.5, so 5 × 1.5 = 7.5 cm.' },
      { n: 3, f: 'Linear scale factor k: what are the area and volume scale factors?', b: 'Area scale factor k². Volume scale factor k³.', u: true },
      { n: 4, f: 'AB = 2 cm corresponds to PQ = 5 cm in similar triangles. Triangle ABC has area 12 cm². Find the area of PQR.', b: 'k = 2.5, so area factor 2.5² = 6.25.\n12 × 6.25 = 75 cm²', u: true },
      { n: 5, f: 'Two similar solids have volumes in the ratio 8 : 27. Find the ratio of their lengths and of their surface areas.', b: 'Lengths: cube root, 2 : 3.\nSurface areas: square the length ratio, 4 : 9.', u: true },
      { n: 6, f: 'How do you show that two triangles are similar?', b: 'Show that two pairs of corresponding angles are equal, giving a geometric reason for each (e.g. alternate angles, a shared angle). The third pair must then be equal too.', u: true },
    ]),
    ...sub(GEOM, m('symmetry'), '4.5', [
      { n: 1, f: 'Line symmetry and order of rotational symmetry', b: 'Line symmetry: the number of mirror lines.\nOrder of rotational symmetry: how many times the shape fits onto itself in one full turn. Order 1 means no rotational symmetry.' },
      { n: 2, f: 'Symmetry of a parallelogram (not a rectangle or rhombus)', b: 'No lines of symmetry, rotational symmetry of order 2.' },
      { n: 3, f: 'Symmetry of a rectangle and of a rhombus (neither a square)', b: 'Both: 2 lines of symmetry, rotational order 2.\nRectangle: the lines join midpoints of opposite sides (not the diagonals).\nRhombus: the lines are the diagonals.' },
      { n: 4, f: 'Symmetry of a kite (not a rhombus) and of an isosceles trapezium', b: 'Both: 1 line of symmetry and rotational order 1.' },
      { n: 5, f: 'Symmetry of a regular polygon with n sides', b: 'n lines of symmetry and rotational symmetry of order n. A regular hexagon: 6 lines, order 6.' },
      { n: 6, f: 'Plane of symmetry of a solid', b: 'A plane that cuts the solid into two halves that are mirror images: the 3D version of a line of symmetry.', u: true },
      { n: 7, f: 'Planes of symmetry: a cuboid with all edges different, and a cube', b: 'Cuboid (all edges different): 3 planes.\nCube: 9 planes.', u: true },
    ]),
    ...sub(GEOM, m('angles'), '4.6', [
      { n: 1, f: 'Angles on a straight line, angles at a point, vertically opposite angles', b: 'On a straight line: sum to 180°.\nAt a point: sum to 360°.\nVertically opposite: equal.' },
      { n: 2, f: 'Angles formed with parallel lines', b: 'Corresponding angles are equal.\nAlternate angles are equal.\nCo-interior angles sum to 180°.' },
      { n: 3, f: 'Angle sum of a triangle and of a quadrilateral', b: 'Triangle: 180°. Quadrilateral: 360°.' },
      { n: 4, f: 'Exterior and interior angle of a regular octagon', b: 'Exterior angles sum to 360°, so one exterior angle = 360° ÷ 8 = 45°.\nInterior angle = 180° − 45° = 135°.' },
      { n: 5, f: 'Each interior angle of a regular polygon is 150°. How many sides does it have?', b: 'Exterior angle = 180° − 150° = 30°. Number of sides = 360° ÷ 30° = 12.' },
      { n: 6, f: 'Sum of the interior angles of a polygon with n sides', b: '(n − 2) × 180°. For a pentagon: 3 × 180° = 540°.' },
      { n: 7, f: 'Four exterior angles of an irregular pentagon are 70°, 80°, 60° and 90°. Find the fifth.', b: 'Exterior angles of any polygon sum to 360°: 360° − 300° = 60°.', u: true },
    ]),
    ...sub(GEOM, m('circle-theorems'), '4.7', [
      { n: 1, f: 'The angle in a semicircle', b: 'The angle in a semicircle is 90°: a triangle drawn on a diameter, with its third vertex on the circle, has a right angle at that vertex.' },
      { n: 2, f: 'The angle between a tangent and a radius', b: '90°: a tangent meets the radius at right angles at the point of contact.' },
      { n: 3, f: 'AB is a diameter and C is on the circle. Angle CAB = 35°. Find angle ABC.', b: 'Angle ACB = 90° (angle in a semicircle), so angle ABC = 180° − 90° − 35° = 55°.' },
      { n: 4, f: 'Angle at the centre theorem', b: 'The angle at the centre is twice the angle at the circumference standing on the same arc.', u: true },
      { n: 5, f: 'Angles in the same segment', b: 'Angles in the same segment, standing on the same arc (chord), are equal.', u: true },
      { n: 6, f: 'Cyclic quadrilateral theorem', b: 'Opposite angles of a cyclic quadrilateral sum to 180°. It applies only when all four vertices lie on the circle.', u: true },
      { n: 7, f: 'Alternate segment theorem', b: 'The angle between a tangent and a chord equals the angle in the alternate segment.', u: true },
    ]),
    ...sub(GEOM, m('circle-theorems-ii'), '4.8', [
      { n: 1, f: 'The perpendicular bisector of a chord', b: 'The perpendicular bisector of a chord passes through the centre of the circle.', u: true },
      { n: 2, f: 'Equal chords', b: 'Equal chords are equidistant (the same perpendicular distance) from the centre.', u: true },
      { n: 3, f: 'Tangents from an external point P touch the circle at A and B. What do you know?', b: 'PA = PB (tangents from an external point are equal). Triangle PAB is isosceles, and OAPB is a kite with right angles at A and B.', u: true },
      { n: 4, f: 'A chord of length 16 cm is in a circle of radius 10 cm. How far is the chord from the centre?', b: 'Use half the chord: √(10² − 8²) = √36 = 6 cm.', u: true },
      { n: 5, f: 'Exam trap with chords and Pythagoras', b: 'Using the whole chord as a side of the right-angled triangle. The triangle uses half the chord and the perpendicular distance from the centre.', u: true },
    ]),

    // 5 Mensuration
    ...sub(MENS, m('units-of-measure'), '5.1', [
      { n: 1, f: 'Converting units: when do you multiply and when do you divide?', b: 'To a smaller unit (km → m): there are more of them, so multiply.\nTo a larger unit (ml → l): there are fewer of them, so divide.' },
      { n: 2, f: 'How many cm² in 1 m², and mm² in 1 cm²?', b: '1 m² = 100² = 10 000 cm²\n1 cm² = 10² = 100 mm²\nSquare the length factor for area.' },
      { n: 3, f: 'How many cm³ in 1 m³, and mm³ in 1 cm³?', b: '1 m³ = 100³ = 1 000 000 cm³\n1 cm³ = 10³ = 1000 mm³\nCube the length factor for volume.' },
      { n: 4, f: 'Link between volume and capacity', b: '1 cm³ = 1 ml, so 1000 cm³ = 1 litre and 1 m³ = 1000 litres.' },
      { n: 5, f: 'Convert 0.36 m² to cm²', b: '0.36 × 10 000 = 3600 cm²' },
      { n: 6, f: 'A tank is 1.2 m by 80 cm by 50 cm. How many litres does it hold?', b: '120 × 80 × 50 = 480 000 cm³\n480 000 ÷ 1000 = 480 litres' },
    ]),
    ...sub(MENS, m('area-and-perimeter'), '5.2', [
      { n: 1, f: 'Area of a rectangle, a triangle and a parallelogram', b: 'Rectangle: length × width.\nTriangle: ½ × base × perpendicular height.\nParallelogram: base × perpendicular height.' },
      { n: 2, f: 'Area of a trapezium', b: '½(a + b)h, where a and b are the parallel sides and h is the perpendicular distance between them. You must learn it: only the triangle formula is given.' },
      { n: 3, f: 'A trapezium has parallel sides 5 cm and 9 cm and height 4 cm. Find its area.', b: '½ × (5 + 9) × 4 = 28 cm²' },
      { n: 4, f: 'Perimeter of a rectangle', b: '2(length + width): the total distance round the edge.' },
      { n: 5, f: 'Exam trap: area of a parallelogram', b: 'Using the slanted side instead of the perpendicular height. The height must be at right angles to the base.' },
    ]),
    ...sub(MENS, m('circles-arcs-and-sectors'), '5.3', [
      { n: 1, f: 'Circumference and area of a circle', b: 'Circumference = 2πr = πd\nArea = πr²' },
      { n: 2, f: 'Arc length and sector area for a sector of angle θ° and radius r', b: 'Arc length = (θ/360) × 2πr\nSector area = (θ/360) × πr²' },
      { n: 3, f: 'Find the area of a quarter circle (90° sector) of radius 4 cm, in terms of π', b: '(90/360) × π × 4² = ¼ × 16π = 4π cm² (≈ 12.6 cm²)' },
      { n: 4, f: 'Find the perimeter of a 60° sector of radius 6 cm', b: 'Arc = (60/360) × 2π × 6 = 2π\nPerimeter = arc + two radii = 2π + 12 ≈ 18.3 cm' },
      { n: 5, f: 'The minor angle of a sector is 80°. What angle do you use for the major sector?', b: '360° − 80° = 280°.', u: true },
      { n: 6, f: 'Find the area of a sector of radius 8 cm and angle 110°', b: '(110/360) × π × 8² = 61.4 cm² (3 s.f.)', u: true },
    ]),
    ...sub(MENS, m('surface-area-and-volume'), '5.4', [
      { n: 1, f: 'Volume of a prism, and of a pyramid', b: 'Prism: area of cross-section × length.\nPyramid: ⅓ × base area × perpendicular height.' },
      { n: 2, f: 'Volume and total surface area of a closed cylinder', b: 'V = πr²h\nTotal surface area = 2πrh + 2πr² (curved surface plus two circular ends).' },
      { n: 3, f: 'A cylinder has radius 5 cm and height 8 cm. Find its volume and total surface area in terms of π.', b: 'V = π × 25 × 8 = 200π cm³\nSA = 2π × 5 × 8 + 2π × 25 = 80π + 50π = 130π cm²' },
      { n: 4, f: 'Volume and curved surface area of a cone', b: 'V = ⅓πr²h, where h is the perpendicular height.\nCurved surface area = πrl, where l is the slant height.' },
      { n: 5, f: 'A cone has radius 3 cm and slant height 5 cm. Find its volume.', b: 'Perpendicular height: h² = 5² − 3² = 16, so h = 4.\nV = ⅓ × π × 9 × 4 = 12π ≈ 37.7 cm³' },
      { n: 6, f: 'Volume and surface area of a sphere', b: 'V = (4/3)πr³\nSurface area = 4πr²' },
      { n: 7, f: 'Volume and surface area of a cuboid 8 cm × 5 cm × 3.5 cm', b: 'V = 8 × 5 × 3.5 = 140 cm³\nSA = 2(40 + 28 + 17.5) = 171 cm²' },
    ]),
    ...sub(MENS, m('compound-shapes-and-parts-of-shapes'), '5.5', [
      { n: 1, f: 'How do you find the area or volume of a compound shape?', b: 'Split it into simple shapes. Add the parts joined on and subtract any parts removed.' },
      { n: 2, f: 'A semicircle of diameter 6 cm is cut from a 10 cm × 6 cm rectangle. Find the remaining area.', b: '60 − ½ × π × 3² = 60 − 14.14 = 45.9 cm² (3 s.f.)' },
      { n: 3, f: 'Area of a semicircle of radius r', b: '½πr². Use the radius, not the diameter.' },
      { n: 4, f: 'Perimeter of a compound shape', b: 'Add only the lengths round the outside. Leave out any edges where two parts join.' },
      { n: 5, f: 'Volume and curved surface area of a hemisphere (half a sphere)', b: 'Volume = ½ × (4/3)πr³ = (2/3)πr³\nCurved surface area = ½ × 4πr² = 2πr² (add πr² for the flat face).' },
      { n: 6, f: 'How do you find the volume of a frustum of a cone?', b: 'Volume of the whole cone minus the volume of the small cone cut off the top.', u: true },
    ]),

    // 6 Trigonometry
    ...sub(TRIG, m('pythagoras-theorem'), '6.1', [
      { n: 1, f: 'Pythagoras’ theorem', b: 'In a right-angled triangle: hypotenuse² = a² + b². The hypotenuse is the longest side, opposite the right angle. It is not on the List of formulas.' },
      { n: 2, f: 'Pythagoras: finding the hypotenuse or finding a shorter side', b: 'Hypotenuse: square the two shorter sides, add, square root.\nShorter side: square both, subtract (hypotenuse² − other side²), square root.' },
      { n: 3, f: 'A 5 m ladder has its foot 1.4 m from a wall. How high up the wall does it reach?', b: '√(5² − 1.4²) = √(25 − 1.96) = √23.04 = 4.8 m' },
      { n: 4, f: 'Four Pythagorean triples', b: '3, 4, 5\n5, 12, 13\n8, 15, 17\n7, 24, 25' },
      { n: 5, f: 'Is a triangle with sides 20, 21 and 29 right-angled?', b: 'Yes: 20² + 21² = 400 + 441 = 841 = 29². The right angle is opposite the 29 side.' },
      { n: 6, f: 'The shorter sides of a right-angled triangle are 4 cm and 8 cm. Find the exact hypotenuse.', b: '√(16 + 64) = √80 = 4√5 cm', u: true },
    ]),
    ...sub(TRIG, m('right-angled-triangles'), '6.2', [
      { n: 1, f: 'SOHCAHTOA', b: 'sin θ = opposite/hypotenuse\ncos θ = adjacent/hypotenuse\ntan θ = opposite/adjacent' },
      { n: 2, f: 'How do you label the sides before using sin, cos or tan?', b: 'Find the hypotenuse first (opposite the right angle). Then label the opposite and adjacent sides relative to the marked angle: they swap if you use the other angle.' },
      { n: 3, f: 'The hypotenuse is 12 cm and the angle is 40°. Find the side opposite the angle.', b: 'opposite = 12 × sin 40° = 7.71 cm (3 s.f.)' },
      { n: 4, f: 'The opposite side is 5 cm and the hypotenuse is 10 cm. Find the angle.', b: 'sin θ = 5/10 = 0.5, so θ = sin⁻¹(0.5) = 30°.' },
      { n: 5, f: 'Angles of elevation and depression', b: 'Both are measured from the horizontal: elevation looking up, depression looking down. The angle of depression from A to B equals the angle of elevation from B to A (alternate angles).', u: true },
      { n: 6, f: 'Shortest distance from a point to a line', b: 'The perpendicular distance: measured along the line through the point at right angles to the given line.', u: true },
    ]),
    ...sub(TRIG, m('exact-trigonometric-values'), '6.3', [
      { n: 1, f: 'Exact values of sin 0°, sin 30°, sin 45°, sin 60°, sin 90°', b: '0, 1/2, √2/2, √3/2, 1', u: true },
      { n: 2, f: 'Exact values of cos 0°, cos 30°, cos 45°, cos 60°, cos 90°', b: '1, √3/2, √2/2, 1/2, 0 (the sin values in reverse order).', u: true },
      { n: 3, f: 'Exact values of tan 0°, tan 30°, tan 45°, tan 60°', b: '0, √3/3 (= 1/√3), 1, √3', u: true },
      { n: 4, f: 'Find the exact value of sin 60° × cos 30°', b: '(√3/2) × (√3/2) = 3/4', u: true },
      { n: 5, f: 'Exam trap with exact values', b: 'Giving a rounded decimal such as 0.707 or 1.73 instead of √2/2 or √3. (0.5 for sin 30° is fine: it is exactly 1/2.)', u: true },
    ]),
    ...sub(TRIG, m('trigonometric-functions'), '6.4', [
      { n: 1, f: 'Key values of y = sin x and y = cos x for 0° ≤ x ≤ 360°', b: 'sin x: 0 at 0°, 1 at 90°, 0 at 180°, −1 at 270°, 0 at 360°.\ncos x: 1 at 0°, 0 at 90°, −1 at 180°, 0 at 270°, 1 at 360°.\nBoth lie between −1 and 1.', u: true },
      { n: 2, f: 'Shape of y = tan x for 0° ≤ x ≤ 360°', b: 'Repeats every 180°. 0 at 0°, 180° and 360°. Undefined at 90° and 270°, where it has vertical asymptotes.', u: true },
      { n: 3, f: 'Solve sin x = 0.5 for 0° ≤ x ≤ 360°', b: 'x = 30° and x = 180° − 30° = 150°.', u: true },
      { n: 4, f: 'Solve cos x = 0.5 for 0° ≤ x ≤ 360°', b: 'x = 60° and x = 360° − 60° = 300°. (For cosine use 360° − x, not 180° − x.)', u: true },
      { n: 5, f: 'Solve tan x = 1 for 0° ≤ x ≤ 360°', b: 'x = 45° and x = 45° + 180° = 225°.', u: true },
    ]),
    ...sub(TRIG, m('non-right-angled-triangles'), '6.5', [
      { n: 1, f: 'The sine rule, and when to use it', b: 'a/sin A = b/sin B = c/sin C\nUse it when you know an angle and the side opposite it, plus one more side or angle.', u: true },
      { n: 2, f: 'The cosine rule, and when to use it', b: 'a² = b² + c² − 2bc cos A\nUse it for two sides and the included angle, or for three sides (to find an angle).', u: true },
      { n: 3, f: 'The cosine rule rearranged to find an angle', b: 'cos A = (b² + c² − a²)/(2bc)\nA negative value means angle A is obtuse.', u: true },
      { n: 4, f: 'Area of a triangle using sine. Find the area when a = 6 cm, b = 8 cm and C = 30°.', b: 'Area = ½ab sin C, with C the angle between sides a and b.\n½ × 6 × 8 × sin 30° = 12 cm²', u: true },
      { n: 5, f: 'AB = 7 cm, AC = 10 cm, angle BAC = 110°. Find BC.', b: 'BC² = 49 + 100 − 140 cos 110° = 196.9…\nBC = 14.0 cm (3 s.f.). cos 110° is negative, so the last term adds.', u: true },
      { n: 6, f: 'The ambiguous case of the sine rule', b: 'When finding an angle, sin θ = k has two solutions between 0° and 180°: θ and 180° − θ. Check whether the obtuse one also fits the triangle.', u: true },
    ]),
    ...sub(TRIG, m('pythagoras-theorem-and-trigonometry'), '6.6', [
      { n: 1, f: 'How do you solve a 3D Pythagoras or trigonometry problem?', b: 'Find the right-angled triangle inside the solid (often using a diagonal of the base or a face), sketch it flat, then use Pythagoras or SOHCAHTOA.', u: true },
      { n: 2, f: 'Space diagonal of a cuboid with edges a, b and c', b: 'd = √(a² + b² + c²)\nFor 6 × 8 × 10: √200 = 14.1 cm (3 s.f.).', u: true },
      { n: 3, f: 'Angle between a line and a plane', b: 'The angle between the line and its projection on the plane (the line in the plane directly "below" it), found from a right-angled triangle.', u: true },
      { n: 4, f: 'A cuboid has base 6 cm by 8 cm and height 10 cm. Find the angle between the space diagonal and the base.', b: 'Base diagonal = √(36 + 64) = 10 cm.\ntan θ = 10/10 = 1, so θ = 45.0°.', u: true },
      { n: 5, f: 'Find the exact length of the space diagonal of a cube of side 4 cm', b: '√(4² + 4² + 4²) = √48 = 4√3 cm (≈ 6.93 cm). Keep exact values until the final step.', u: true },
    ]),

    // 7 Transformations and vectors
    ...sub(VECT, m('transformations'), '7.1', [
      { n: 1, f: 'What must you state to describe each transformation fully?', b: 'Reflection: the mirror line.\nRotation: angle, direction (unless 180°) and centre.\nEnlargement: scale factor and centre.\nTranslation: the column vector.' },
      { n: 2, f: 'Image of (x, y) after a reflection in the x-axis and in the y-axis', b: 'x-axis (y = 0): (x, −y)\ny-axis (x = 0): (−x, y)' },
      { n: 3, f: 'Image of (x, y) after a rotation about the origin of 90° clockwise, 90° anticlockwise and 180°', b: '90° clockwise: (y, −x)\n90° anticlockwise: (−y, x)\n180°: (−x, −y)' },
      { n: 4, f: 'Enlarge the point (2, 5) by scale factor 3 about the origin', b: '(6, 15): multiply both coordinates by the scale factor (never add).' },
      { n: 5, f: 'A translation by the column vector with top entry 4 and bottom entry −2', b: 'Move 4 units in the positive x-direction (right) and 2 units in the negative y-direction (down).' },
      { n: 6, f: 'Which transformations give an image congruent to the object?', b: 'Reflection, rotation and translation. An enlargement (scale factor not 1 or −1) gives a similar image.' },
      { n: 7, f: 'Image of (x, y) after a reflection in y = x and in y = −x', b: 'y = x: (y, x)\ny = −x: (−y, −x)', u: true },
      { n: 8, f: 'Enlargement with a negative scale factor: enlarge (3, 1) by scale factor −2 about the origin', b: '(−6, −2). The image is on the opposite side of the centre and is turned upside down.', u: true },
      { n: 9, f: 'Which single enlargement has the same effect as a rotation of 180° about the origin?', b: 'An enlargement with scale factor −1, centre the origin.', u: true },
    ]),
    ...sub(VECT, m('vectors-in-two-dimensions'), '7.2', [
      { n: 1, f: 'Vector and scalar', b: 'A vector has magnitude and direction (e.g. a displacement). A scalar has magnitude only (e.g. a distance). A vector is printed as AB with an arrow or as bold a; by hand, underline the letter.', u: true },
      { n: 2, f: 'a = (3, 4) and b = (−6, 1). Find a + b and 2a − b.', b: 'a + b = (−3, 5)\n2a − b = (6 − (−6), 8 − 1) = (12, 7)', u: true },
      { n: 3, f: 'A is (2, 5) and B is (7, 1). Find the column vector AB.', b: 'End minus start: (7 − 2, 1 − 5) = (5, −4).', u: true },
      { n: 4, f: 'Effect of multiplying a vector by a scalar k', b: 'k > 1: same direction, longer.\n0 < k < 1: same direction, shorter.\nk < 0: opposite direction, length × |k|.', u: true },
      { n: 5, f: 'How are AB and BA related?', b: 'BA = −AB: the same length, in the opposite direction.', u: true },
    ]),
    ...sub(VECT, m('magnitude-of-a-vector'), '7.3', [
      { n: 1, f: 'Magnitude of the vector (x, y)', b: '|v| = √(x² + y²): Pythagoras on the components.', u: true },
      { n: 2, f: 'Find the magnitude of (−5, 12)', b: '√(25 + 144) = √169 = 13', u: true },
      { n: 3, f: 'Find the exact magnitude of (4, −6)', b: '√(16 + 36) = √52 = 2√13', u: true },
      { n: 4, f: 'The vector (k, 6) has magnitude 10. Find k.', b: 'k² + 36 = 100, so k² = 64 and k = 8 or k = −8.', u: true },
      { n: 5, f: 'Is |a + b| the same as |a| + |b|?', b: 'Not usually. Find the vector a + b first, then its magnitude. They are equal only when a and b point in the same direction.', u: true },
    ]),
    ...sub(VECT, m('vector-geometry'), '7.4', [
      { n: 1, f: 'Position vector', b: 'The vector from the origin O to a point: the position vector of A is OA.', u: true },
      { n: 2, f: 'OA = a and OB = b. Write AB in terms of a and b.', b: 'AB = AO + OB = −a + b = b − a', u: true },
      { n: 3, f: 'OA = a, OB = b and M is the midpoint of AB. Find OM.', b: 'OM = OA + ½AB = a + ½(b − a) = ½a + ½b', u: true },
      { n: 4, f: 'OA = a, OB = b. P lies on AB with AP : PB = 1 : 2. Find OP.', b: 'AP = ⅓AB = ⅓(b − a)\nOP = a + ⅓(b − a) = ⅔a + ⅓b', u: true },
      { n: 5, f: 'How do you show two vectors are parallel?', b: 'Show that one is a scalar multiple of the other, e.g. 4a − 2b = 2(2a − b).', u: true },
      { n: 6, f: 'How do you show that points A, B and C are collinear?', b: 'Show that AB is a scalar multiple of AC (or BC). Parallel vectors that share a point lie on the same straight line.', u: true },
    ]),

    // 8 Probability
    ...sub(PROB, m('introduction-to-probability'), '8.1', [
      { n: 1, f: 'The probability scale', b: 'From 0 (impossible) to 1 (certain). 0.5 is an even chance. Give probabilities as fractions, decimals or percentages, never more than 1.' },
      { n: 2, f: 'Probability of an event when all outcomes are equally likely', b: 'P = number of favourable outcomes ÷ total number of possible outcomes' },
      { n: 3, f: 'Probability of an event not happening', b: '1 − the probability that it happens. The probabilities of all the possible outcomes sum to 1.' },
      { n: 4, f: 'A spinner lands on red 0.35, blue 0.2, green x and yellow 2x. Find x.', b: '0.35 + 0.2 + 3x = 1, so 3x = 0.45 and x = 0.15.' },
      { n: 5, f: 'Venn diagram: S only 9, both S and T 5, T only 11, neither 7. One person is chosen at random. Find the probability they are in S.', b: 'Total 9 + 5 + 11 + 7 = 32. In S: 9 + 5 = 14.\n14/32 = 7/16' },
      { n: 6, f: 'Probability notation P(A) and P(A′)', b: 'P(A): the probability of event A.\nP(A′): the probability of not A, so P(A′) = 1 − P(A).', u: true },
    ]),
    ...sub(PROB, m('relative-and-expected-frequencies'), '8.2', [
      { n: 1, f: 'Relative frequency', b: 'number of times the outcome happened ÷ total number of trials\nAn experimental estimate of the probability.' },
      { n: 2, f: 'Which relative frequency gives the best estimate of a probability?', b: 'The one from the most trials. Relative frequency tends to settle as the number of trials grows.' },
      { n: 3, f: 'Expected frequency', b: 'expected frequency = probability × number of trials\nIt is what you expect on average; the real result is usually close, not exact.' },
      { n: 4, f: 'A fair ten-sided dice (1 to 10) is rolled 150 times. How many times do you expect a multiple of 3?', b: 'Multiples of 3: 3, 6, 9, so P = 3/10.\n3/10 × 150 = 45' },
      { n: 5, f: 'Fair, biased and random', b: 'Fair: every outcome is equally likely.\nBiased: the outcomes are not equally likely.\nRandom: chosen by chance, with no outcome favoured.' },
      { n: 6, f: 'After many trials, how do you decide whether a spinner is biased?', b: 'Compare the relative frequencies from a large number of trials with the fair probabilities. Big differences suggest bias; say "suggests", not "proves".' },
    ]),
    ...sub(PROB, m('probability-of-combined-events'), '8.3', [
      { n: 1, f: 'When do you multiply probabilities and when do you add them?', b: 'Multiply for A AND B when the events are independent.\nAdd for A OR B when the events are mutually exclusive.' },
      { n: 2, f: 'Tree diagram rules', b: 'Branches from the same point sum to 1. Multiply along a path for its probability. Add the probabilities of the different paths that give the outcome you want.' },
      { n: 3, f: 'Two fair dice are rolled. Find the probability that the scores add to 7.', b: 'Sample space: 36 equally likely outcomes. Six give 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).\n6/36 = 1/6' },
      { n: 4, f: 'A bag has 5 red and 3 blue counters. One is taken, replaced, then another taken. Find P(both red).', b: '5/8 × 5/8 = 25/64' },
      { n: 5, f: 'A fair dice is rolled twice. Find the probability of at least one six.', b: '1 − P(no six) = 1 − (5/6)² = 1 − 25/36 = 11/36' },
      { n: 6, f: 'A bag has 5 red and 3 blue counters. Two are taken WITHOUT replacement. Find P(both red).', b: '5/8 × 4/7 = 20/56 = 5/14\nAfter one red is removed, 4 of the 7 left are red.', u: true },
      { n: 7, f: 'Venn diagram notation P(A ∩ B) and P(A ∪ B)', b: 'P(A ∩ B): the probability of A and B.\nP(A ∪ B): the probability of A or B (or both).', u: true },
    ]),
    ...sub(PROB, m('conditional-probability'), '8.4', [
      { n: 1, f: 'Conditional probability: the method', b: 'Restrict attention to the group already known to have happened, then find the fraction of that group with the outcome you want. No formula or P(B|A) notation is required.', u: true },
      { n: 2, f: '12 of 30 students play chess, and 5 of those also play tennis. A chess player is chosen at random. Find P(plays tennis).', b: '5/12. Only the 12 chess players can be chosen.', u: true },
      { n: 3, f: 'Two-way table: 16 girls, 11 of whom take the bus (30 students in all). A girl is chosen at random. Find P(she takes the bus).', b: '11/16. Divide by the number of girls, not by 30.', u: true },
      { n: 4, f: 'On a tree diagram for picking without replacement, what are the second-stage branches?', b: 'Conditional probabilities: each is the probability of the second outcome given the first. After a red from 5 red and 3 blue, P(red) = 4/7.', u: true },
      { n: 5, f: 'Exam trap in conditional probability', b: 'Dividing by the whole total instead of by the size of the group already known to have happened.', u: true },
    ]),

    // 9 Statistics
    ...sub(STATS, m('classifying-statistical-data'), '9.1', [
      { n: 1, f: 'Qualitative and quantitative data', b: 'Qualitative (categorical): words or categories, e.g. favourite sport.\nQuantitative: numbers.' },
      { n: 2, f: 'Discrete and continuous data', b: 'Discrete: counted, can only take certain values (e.g. number of siblings, goals scored).\nContinuous: measured, can take any value in a range (e.g. height, time).' },
      { n: 3, f: 'Tally table', b: 'Each item is recorded as a stroke, grouped in fives. The frequency is the total for each row; the frequencies must add up to the number of data items.' },
      { n: 4, f: 'How do you fill a missing cell in a two-way table?', b: 'Use the row and column totals: every row and every column must add up. E.g. girls total 16 and girls walk 5, so girls by bus = 16 − 5 = 11.' },
      { n: 5, f: 'Classes 10 ≤ t < 15 and 15 ≤ t < 20: where does 15 go?', b: 'Only in 15 ≤ t < 20: the first class does not include 15.' },
    ]),
    ...sub(STATS, m('interpreting-statistical-data'), '9.2', [
      { n: 1, f: 'How do you compare two sets of data?', b: 'Compare an average and a measure of spread, and say what each means in context (e.g. "Class Q did better on average; Class P’s marks were more consistent").' },
      { n: 2, f: 'Restrictions on drawing conclusions from data', b: 'Is the sample big enough and representative? Is the time period long enough? Does the data measure what is claimed? A link between two quantities does not prove that one causes the other.' },
      { n: 3, f: 'Two-way table: 38 members swim, 18 of them juniors; 80 members in all. What fraction of swimmers are juniors?', b: '18/38 = 9/19. The denominator is the swimming total, because the question is about swimmers.' },
      { n: 4, f: 'Exam trap when comparing data sets', b: 'Comparing a median from one set with a mean from the other. Compare like with like, and comment on more than one feature.' },
      { n: 5, f: 'Why is the interquartile range useful for comparing data sets?', b: 'It measures the spread of the middle half of the data, so extreme values do not affect it. A smaller IQR means more consistent data.', u: true },
    ]),
    ...sub(STATS, m('averages-and-range'), '9.3', [
      { n: 1, f: 'Mean, median, mode and range', b: 'Mean: sum of the values ÷ number of values.\nMedian: the middle value once in order.\nMode: the most frequent value.\nRange: largest − smallest.' },
      { n: 2, f: 'Find the mean, median, mode and range of 3, 5, 5, 7, 9, 20', b: 'Mean = 49/6 = 8.17 (3 s.f.)\nMedian = (5 + 7)/2 = 6\nMode = 5\nRange = 20 − 3 = 17' },
      { n: 3, f: 'Which average to use: data with an extreme value, and non-numerical data', b: 'Extreme values (outliers): the median, which they do not affect.\nNon-numerical (categorical) data: the mode, the only average that works.' },
      { n: 4, f: 'Mean from a frequency table', b: 'Multiply each value by its frequency, add these, then divide by the total frequency: Σ(x × f) ÷ Σf.\nE.g. a total of 26 pets for 20 students gives a mean of 1.3.' },
      { n: 5, f: 'Estimating the mean of grouped data', b: 'Σ(midpoint × frequency) ÷ total frequency. It is an estimate because the midpoint stands in for the unknown values in each class.', u: true },
      { n: 6, f: 'Modal class and interquartile range', b: 'Modal class: the class with the highest frequency in grouped data.\nInterquartile range = upper quartile − lower quartile: the spread of the middle 50%.', u: true },
    ]),
    ...sub(STATS, m('statistical-charts-and-diagrams'), '9.4', [
      { n: 1, f: 'Pie chart: 12 of 40 people chose red. What angle is the red sector?', b: '12/40 × 360° = 108°. The angles must add up to 360°.' },
      { n: 2, f: 'Composite (stacked) bar chart: a section runs from 60 to 90. What does it show?', b: '90 − 60 = 30. Each section is end minus start; reading off 90 is the classic error.' },
      { n: 3, f: 'Dual or composite bar chart: which shows what best?', b: 'Dual (side by side): comparing one category across groups, as every bar starts at 0.\nComposite (stacked): comparing totals and the make-up of each total.' },
      { n: 4, f: 'Stem-and-leaf diagram: what must it have?', b: 'Leaves in order along each row, and a key (e.g. 14 | 2 means 14.2). With 20 values, the median is halfway between the 10th and 11th.' },
      { n: 5, f: 'Rules for drawing a bar chart', b: 'Label both axes, start the frequency axis at 0 with an even scale, make every bar the same width and leave equal gaps between bars for categories.' },
      { n: 6, f: 'Two pie charts with different totals: does the bigger sector mean more people?', b: 'Not necessarily. A sector shows a proportion of its own total; compare actual numbers using each total.' },
    ]),
    ...sub(STATS, m('scatter-diagrams'), '9.5', [
      { n: 1, f: 'Positive, negative and zero correlation', b: 'Positive: as one variable increases the other tends to increase.\nNegative: as one increases the other tends to decrease.\nZero: no clear pattern.' },
      { n: 2, f: 'How do you draw a line of best fit?', b: 'One ruled straight line, drawn by eye, following the trend across the data, with the points roughly evenly spread either side. It need not pass through any data point or the origin.' },
      { n: 3, f: 'When should you NOT draw a line of best fit?', b: 'When the scatter diagram shows zero correlation.' },
      { n: 4, f: 'Using a line of best fit to estimate a value', b: 'Read across to the line and then down (or up and across). Estimates inside the range of the data are more reliable than those beyond it.' },
    ]),
    ...sub(STATS, m('cumulative-frequency-diagrams'), '9.6', [
      { n: 1, f: 'How do you draw a cumulative frequency diagram?', b: 'Find the running totals. Plot each one at the UPPER class boundary (not the midpoint), start at cumulative frequency 0, and join the points with a smooth curve.', u: true },
      { n: 2, f: 'Reading the median and quartiles from a cumulative frequency curve (total frequency n)', b: 'Median: at cumulative frequency n/2.\nLower quartile: n/4. Upper quartile: 3n/4.\nIQR = upper quartile − lower quartile.\nStart on the cumulative frequency axis.', u: true },
      { n: 3, f: 'n = 80. At what cumulative frequency do you read the 90th percentile?', b: '0.9 × 80 = 72', u: true },
      { n: 4, f: '120 students; the cumulative frequency at 40 minutes is 92. How many took more than 40 minutes?', b: '120 − 92 = 28. For "more than", subtract from the total.', u: true },
      { n: 5, f: 'Exam trap: using (n + 1)/2 for the median on a cumulative frequency diagram', b: '(n + 1)/2 is for a list of individual values. On a cumulative frequency diagram, read the median at n/2.', u: true },
    ]),
    ...sub(STATS, m('histograms'), '9.7', [
      { n: 1, f: 'Frequency density', b: 'frequency density = frequency ÷ class width\nThe vertical axis of a histogram is labelled "Frequency density".', u: true },
      { n: 2, f: 'Why use frequency density on a histogram?', b: 'For classes of unequal width. Plotting raw frequency would make the wider classes look too big; with frequency density, the area of each bar shows its frequency.', u: true },
      { n: 3, f: 'Class 10 ≤ x < 15 has frequency 20; class 15 ≤ x < 25 has frequency 30. Find each frequency density.', b: '20 ÷ 5 = 4\n30 ÷ 10 = 3\nThe second class has more items but a lower bar, because it is wider.', u: true },
      { n: 4, f: 'A histogram bar has frequency density 2.4 and class width 5. Find the frequency.', b: 'frequency = frequency density × class width = 2.4 × 5 = 12', u: true },
    ]),
  ],
};
