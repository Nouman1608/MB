/**
 * D-444 -- flashcards for Cambridge IGCSE Statistics 0479 (for examination in 2027).
 *
 * The syllabus record lists twelve topics and no subtopics, so every card sits
 * on its topic (topicOnly helper) and ids are `<topic number>-<n>`. Ids are
 * permanent (browser progress is keyed by them): add a new card with the next
 * unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 0479); origin 'revision-notes'.
 *
 * Written from Marlbridge's own 0479 revision notes and study guides (topics 9,
 * 10 and 12 from the shared 4040/0479 pages). Every worked figure on a card was
 * recalculated by hand. Not tiered. Plain text only (see types.ts).
 */
import type { Flashcard, FlashcardDeck } from './types.ts';

interface Spec { n: number; f: string; b: string; src?: string }

const topicOnly = (topic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b, src }) => ({
    id: `${number}-${n}`,
    topic,
    front: f,
    back: b,
    origin: src ? 'revision-notes' as const : 'authored' as const,
    ...(src ? { source: src } : {}),
  }));

const DC = 'statistics-data-collection-revision-notes';
const IX = 'o-level-statistics-4040-index-numbers-revision-notes';
const TS = 'o-level-statistics-4040-time-series-moving-averages-revision-notes';

export const DECK_CAMBRIDGE_IGCSE_STATISTICS: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'igcse',
  subjectSlug: 'statistics',
  syllabusCode: '0479',
  syllabusSeries: '2027',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Data and its collection
    ...topicOnly('data-and-its-collection-0479', '1', [
      { n: 1, f: 'What is the difference between qualitative and quantitative data?', b: 'Qualitative data is described by categories, not numbers (for example eye colour). Quantitative data is numerical, and is either discrete or continuous.' },
      { n: 2, f: 'What is discrete data?', b: 'Data that takes only certain, separate values: number of children, goals scored, shoe size. It is usually counted, but "counted vs measured" is a rule of thumb, not the deciding test.', src: DC },
      { n: 3, f: 'What is continuous data?', b: 'Data that takes any value in a range: height, mass, time, limited only by the precision of the measuring instrument. It is usually measured, but that is a heuristic, not the definition.', src: DC },
      { n: 4, f: 'Is shoe size discrete or continuous?', b: 'Discrete, even with half sizes. The deciding factor is that the possible values form a separate, listable set.' },
      { n: 5, f: 'What is the difference between primary and secondary data?', b: 'Primary data is collected first-hand for this purpose, so you control what is measured and how. Secondary data already exists, collected by someone else for another purpose: quicker and cheaper, but no control over its accuracy or definitions.' },
      { n: 6, f: 'When would you use a census rather than a sample?', b: 'When the population is small and complete accuracy matters. A sample is used when the population is large, or when testing destroys the item. A sample is cheaper and quicker but has sampling error.' },
      { n: 7, f: 'Which four sampling methods does 0479 name?', b: 'Simple random, systematic, stratified and quota. A sampling frame is needed for all of them except quota.' },
      { n: 8, f: 'How do you take a systematic sample, and what is its weakness?', b: 'Choose every nth member from a list, starting from a random start. It can be biased if the list has a pattern that matches the interval.' },
      { n: 9, f: 'How do you work out the numbers for a stratified sample?', b: 'Number from a group = (group size ÷ population) × sample size. Round so the parts still total the sample size.\nExample: 300 girls and 200 boys, sample of 50 → 30 girls and 20 boys.' },
      { n: 10, f: 'What is quota sampling, and what is its weakness?', b: 'The interviewer fills a set number of people in each category, choosing who to ask. It needs no sampling frame, but it is not random, so interviewer bias is possible.' },
      { n: 11, f: 'Give sources of bias in a survey', b: 'An incomplete sampling frame, non-response, self-selection, leading questions, the interviewer effect, and response options that overlap or do not cover every answer.' },
      { n: 12, f: 'Does taking a larger sample remove bias?', b: 'No. A larger sample reduces sampling error, but bias is a systematic error in the method, so a biased method stays biased at any sample size.' },
    ]),

    // 2 Representation of data
    ...topicOnly('representation-of-data-0479', '2', [
      { n: 1, f: 'Which parts of data representation are not required in 0479?', b: 'Drawing pictograms is not required, although reading a drawn pictogram is. Identifying outliers from a box-and-whisker diagram is not required.' },
      { n: 2, f: 'How do you find the angle for a sector of a pie chart?', b: 'Angle = (frequency ÷ total) × 360°.\nExample: 18 out of 72 → 18/72 × 360° = 90°. Check the angles add to 360°.' },
      { n: 3, f: 'How are the two circles of a comparative pie chart sized?', b: 'Their areas are in proportion to the totals, so the radii are in proportion to the square roots of the totals.\nExample: totals 50 and 200, first radius 2 cm → second radius 2 × √(200 ÷ 50) = 4 cm.' },
      { n: 4, f: 'Pie chart or bar chart: what is each better at?', b: 'A pie chart shows each part as a proportion of the whole clearly. A bar chart makes it easier to compare exact values between categories.' },
      { n: 5, f: 'What does a two-way table show?', b: 'It cross-tabulates two variables at once (for example travel method against gender). Be ready to read a single cell, a row total and a column total.' },
      { n: 6, f: 'When is a Venn diagram the right representation?', b: 'When data falls into overlapping categories, for example students who cycle to school and also play a sport.' },
      { n: 7, f: 'What is the advantage of a stem-and-leaf diagram?', b: 'It keeps every individual value visible while showing the shape. A back-to-back stem-and-leaf diagram compares two small data sets. It needs a key and becomes long for large data sets.' },
      { n: 8, f: 'Which five values does a box-and-whisker diagram show, and what is it good for?', b: 'Minimum, lower quartile, median, upper quartile and maximum. It summarises spread and is good for comparing the middle 50% of two or more data sets.' },
      { n: 9, f: 'What is the difference between a sectional bar chart and a multiple (dual) bar chart?', b: 'A sectional bar chart stacks the parts in one bar per group, showing the total and its make-up. A multiple bar chart puts separate bars side by side for comparison.' },
      { n: 10, f: 'What does a "justify your choice of diagram" question need?', b: 'A reason tied to the data and the purpose, not just the name of the diagram. For example: a stem-and-leaf diagram keeps every value of this small set, which a grouped bar chart would lose.' },
    ]),

    // 3 Frequency distributions
    ...topicOnly('frequency-distributions-0479', '3', [
      { n: 1, f: 'What is gained and lost by grouping data into classes?', b: 'Grouping makes a large data set easier to summarise and compare, but the exact values are lost, so later results can only be estimates.' },
      { n: 2, f: 'Which class measures are needed for discrete data and for continuous data?', b: 'Discrete: class limits, boundaries, midpoints and widths. Continuous: boundaries, midpoints and widths only, because the stated limits and the boundaries coincide.' },
      { n: 3, f: 'A time is recorded as 9.7 s to 1 decimal place. Between which values does it lie?', b: '9.65 ≤ t < 9.75. The lower bound uses ≤ and the upper bound uses <, so neighbouring classes never overlap.' },
      { n: 4, f: 'Why must class intervals not overlap?', b: 'With classes such as 10–20 and 20–30, the value 20 could go in either class. Every value must belong to exactly one class.' },
      { n: 5, f: 'What is frequency density, and when do you need it?', b: 'Frequency density = frequency ÷ class width. It goes on the vertical axis of a histogram with unequal class widths.\nExample: class 10 to under 30 (width 20) with frequency 8 → 0.4.' },
      { n: 6, f: 'In a histogram, what represents the frequency of a class?', b: 'The area of its bar, not its height. This matters when the class widths are unequal.' },
      { n: 7, f: 'How do you draw a frequency polygon?', b: 'Plot each frequency against the class midpoint and join the points with straight lines. It is used with equal class widths, and is the clearest way to compare two distributions on the same axes.' },
      { n: 8, f: 'What is cumulative frequency, and where is it plotted?', b: 'The running total of the frequencies up to and including each class. It is plotted against the upper class boundaries, starting at the first lower boundary with 0.' },
      { n: 9, f: 'How do you get an ordinary frequency table back from a cumulative one?', b: 'Subtract each cumulative total from the next one. The first class keeps its own cumulative total.' },
      { n: 10, f: 'A cumulative frequency curve for 60 students passes through (50, 45). How many scored more than 50?', b: '45 scored 50 or below, so 60 − 45 = 15 scored more than 50. Check whether the question asks for "below" or "above" before reading off the curve.' },
    ]),

    // 4 Measures of central tendency
    ...topicOnly('measures-of-central-tendency-0479', '4', [
      { n: 1, f: 'How do you find the mean from a list and from a frequency table?', b: 'List: mean = Σx ÷ n.\nFrequency table: mean = Σfx ÷ Σf. Divide by Σf, never by the number of rows.' },
      { n: 2, f: 'How do you find the median of a list?', b: 'Put the values in order; the median is at position (n + 1)/2. For even n, take the mean of the two middle values.\nExample: 3, 4, 6, 8, 9, 12 → (6 + 8) ÷ 2 = 7.' },
      { n: 3, f: 'What is the mode of a frequency table?', b: 'The value x with the largest frequency. Quote the value, not the frequency. A data set can have no mode or more than one.' },
      { n: 4, f: 'How do you estimate the mean of a grouped frequency distribution?', b: 'Use each class midpoint as x: mean ≈ Σfx ÷ Σf.\nExample: 0–10, 10–20, 20–30 with frequencies 3, 5, 2 → (15 + 75 + 50) ÷ 10 = 14. Say it is an estimate.' },
      { n: 5, f: 'How do you estimate the median of grouped data by interpolation?', b: 'Median ≈ lower boundary + (n/2 − cf before the class) ÷ f(class) × class width.\nExample: n = 40, class 30 to under 40 has f = 12, 12 values below 30 → 30 + 8/12 × 10 = 36.7.' },
      { n: 6, f: 'How do you find the modal class when class widths are unequal?', b: 'Choose the class with the highest frequency density (frequency ÷ width), not the highest frequency.\nExample: 0–10 (8), 10–20 (12), 20–40 (20) → densities 0.8, 1.2, 1.0, so the modal class is 10 to under 20.' },
      { n: 7, f: 'How do you find a missing value when the mean is given?', b: 'Total = mean × number of values.\nExample: five values have mean 12, so the total is 60. If four of them add to 47, the fifth is 13.' },
      { n: 8, f: 'How do you find the combined mean of two groups?', b: '(total of A + total of B) ÷ (number in A + number in B). Never average the two means unless the groups are the same size.' },
      { n: 9, f: 'When is the median a better average than the mean?', b: 'When the data is skewed or has an extreme value. One very high pay figure inflates the mean, but the median is unaffected.' },
      { n: 10, f: 'When is the mode the most suitable average?', b: 'When you need the most common item or category, such as which dish a canteen should prepare most of. It is the only average that works for categorical data.' },
      { n: 11, f: 'Why should you avoid estimating the mean when the last class is "60 and over"?', b: 'An open-ended class has no upper boundary, so it has no midpoint to use in Σfx.' },
      { n: 12, f: 'Why are a grouped mean and a grouped median only estimates?', b: 'The individual values in each class are unknown. The mean assumes they sit at the midpoint, and the median assumes they are spread evenly through the class.' },
    ]),

    // 5 Quartiles, percentiles and measures of dispersion
    ...topicOnly('quartiles-percentiles-and-measures-of-dispersion-0479', '5', [
      { n: 1, f: 'What are the lower and upper quartiles?', b: 'Lower quartile Q1: the median of the lower half of the ordered data, the 25th percentile.\nUpper quartile Q3: the median of the upper half, the 75th percentile.' },
      { n: 2, f: 'What is the k-th percentile?', b: 'The value with k% of the data at or below it.' },
      { n: 3, f: 'What is the difference between the range and the interquartile range?', b: 'Range = largest − smallest, so it uses only the two extremes.\nInterquartile range = Q3 − Q1, the spread of the middle half of the data.' },
      { n: 4, f: 'Find the quartiles and IQR of 23, 31, 18, 27, 35, 29, 21', b: 'Ordered: 18, 21, 23, 27, 29, 31, 35. Median 27, left out of both halves.\nQ1 = 21, Q3 = 31, so IQR = 31 − 21 = 10.' },
      { n: 5, f: 'At which cumulative frequencies do you read the quartiles and percentiles from a graph?', b: 'Q1 at n/4, median at n/2, Q3 at 3n/4, and the k-th percentile at (k/100) × n. Read across from the vertical axis to the curve, then down.' },
      { n: 6, f: 'How do you find which percentile a value is from a cumulative frequency graph?', b: 'Go up from the value to the curve and across to read the cumulative frequency, then divide by n and multiply by 100.\nExample: 63 out of 90 → 70th percentile.' },
      { n: 7, f: 'What are the two formulae for the standard deviation of n values?', b: 'Form 1: √[Σ(x − x̄)² ÷ n]\nForm 2: √[Σx² ÷ n − (Σx ÷ n)²], the mean of the squares minus the square of the mean.' },
      { n: 8, f: 'What is the standard deviation formula for a frequency table?', b: '√[Σfx² ÷ Σf − (Σfx ÷ Σf)²]. For grouped data use the class midpoints as x, and state that the answer is an estimate.' },
      { n: 9, f: 'What is the link between the variance and the standard deviation?', b: 'The variance is the quantity under the square root; the standard deviation is the square root of the variance. A common slip is giving the variance and forgetting the square root.' },
      { n: 10, f: 'Find the standard deviation of 7, 3, 9, 5, 6', b: 'Mean = 30 ÷ 5 = 6. Squared deviations 1, 9, 9, 1, 0 add to 20.\nSD = √(20 ÷ 5) = √4 = 2.' },
      { n: 11, f: 'Which measure of spread is least affected by one extreme value?', b: 'The interquartile range. One extreme value changes the range and the standard deviation a lot, but the IQR may not change at all.' },
      { n: 12, f: 'A grouped table has an open-ended top class. Which measures of spread can you still find?', b: 'The range and the standard deviation cannot be calculated. The IQR can still be estimated if both quartiles lie outside the open-ended class.' },
    ]),

    // 6 Transformations of data sets
    ...topicOnly('transformations-of-data-sets-0479', '6', [
      { n: 1, f: 'Each value x is coded as y = ax + b. What happens to the mean and the median?', b: 'Both follow the whole rule: new mean = a × mean + b, new median = a × median + b.' },
      { n: 2, f: 'Each value x is coded as y = ax + b. What happens to the standard deviation and the IQR?', b: 'Both are multiplied by |a|. Spread measures ignore b and ignore the sign of a, so a spread is never negative.' },
      { n: 3, f: 'Data with mean 30 and standard deviation 4 are each multiplied by 2.5. Find the new mean and standard deviation', b: 'Mean = 30 × 2.5 = 75. Standard deviation = 4 × 2.5 = 10.\n(Adding 12 to every value instead would give mean 42 and standard deviation 4.)' },
      { n: 4, f: 'A data set with median 55 and IQR 14 is coded with y = 100 − x. Find the new median and IQR', b: 'Median = 100 − 55 = 45. IQR = |−1| × 14 = 14. The order reverses, so the old upper quartile becomes the new lower quartile.' },
      { n: 5, f: 'A value equal to the mean is added to a data set. What happens to the mean and the standard deviation?', b: 'The mean stays the same. The standard deviation decreases, because n rises while the sum of squared deviations does not change.' },
      { n: 6, f: 'A value above the median is added to a data set. What can you say about the median?', b: 'It increases or stays the same; it cannot decrease.' },
      { n: 7, f: 'How do you find the combined standard deviation of two groups?', b: 'For each group, total = n × mean and Σx² = n × (σ² + mean²). Add the totals, the Σx² values and the group sizes. Combined variance = (Σx² of both) ÷ (n₁ + n₂) − (combined mean)²; then square root.' },
      { n: 8, f: 'A group of 20 values has mean 5 and a group of 30 values has mean 10. Find the combined mean', b: '(20 × 5 + 30 × 10) ÷ 50 = 400 ÷ 50 = 8.' },
      { n: 9, f: 'What is a z-score (standardised value)?', b: 'z = (x − mean) ÷ σ: the number of standard deviations a value lies above or below the mean. Standardised data have mean 0 and standard deviation 1, so z-scores compare results from different distributions.' },
      { n: 10, f: 'A mark of 70 comes from a test with mean 58 and σ = 8. Scale it to mean 50 and σ = 10', b: 'z = (70 − 58) ÷ 8 = 1.5. New value = new mean + new σ × z = 50 + 10 × 1.5 = 65.' },
      { n: 11, f: 'How do you compare two distributions in a full answer?', b: 'Give one comparison of centre (mean or median: which has larger values generally) and one of spread (standard deviation or IQR: smaller means more consistent), with the figures and the context. Pair mean with SD, median with IQR.' },
    ]),

    // 7 Probability
    ...topicOnly('probability-0479', '7', [
      { n: 1, f: 'What do P(A′), P(A ∩ B) and P(A ∪ B) mean?', b: 'P(A′): A does not happen.\nP(A ∩ B): both A and B happen.\nP(A ∪ B): A or B or both happen.' },
      { n: 2, f: 'How do you find a probability when outcomes are equally likely?', b: 'P = number of favourable outcomes ÷ total number of outcomes. Every probability lies between 0 (impossible) and 1 (certain), as a fraction, decimal or percentage.' },
      { n: 3, f: 'What is the addition rule for any two events?', b: 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B).\nExample: P(A) = 2/5, P(B) = 1/3, P(A ∩ B) = 1/10 → 12/30 + 10/30 − 3/30 = 19/30.' },
      { n: 4, f: 'How do with-replacement and without-replacement picks differ?', b: 'With replacement the probabilities are the same at every pick. Without replacement the total and the count of the type taken both fall by one.\nExample, 3 grey and 5 black socks, both grey: with 3/8 × 3/8 = 9/64; without 3/8 × 2/7 = 3/28.' },
      { n: 5, f: 'What is the quickest way to find P(at least one)?', b: 'P(at least one) = 1 − P(none).\nExample: three independent attempts, each succeeding with probability 0.2 → 1 − 0.8³ = 1 − 0.512 = 0.488.' },
      { n: 6, f: 'What are mutually exclusive events?', b: 'Events that cannot happen together, so P(A ∩ B) = 0 and P(A ∪ B) = P(A) + P(B).' },
      { n: 7, f: 'What are independent events, and how do you test for independence?', b: 'One happening does not change the probability of the other, so P(A ∩ B) = P(A) × P(B). Test: if P(A) × P(B) equals P(A ∩ B), they are independent. State the conclusion in context.' },
      { n: 8, f: 'Can two mutually exclusive events with non-zero probabilities be independent?', b: 'No. For exclusive events P(A ∩ B) = 0, but P(A) × P(B) is not 0.' },
      { n: 9, f: 'How do you find a conditional probability without a formula?', b: 'Keep only the group named after "given"; that is the denominator. Count how many of that group also meet the event.\nExample: 27 chess players, 12 of them adults → P(adult given chess player) = 12/27 = 4/9.' },
      { n: 10, f: 'What are the rules for using a tree diagram?', b: 'Branches from one point add to 1. Multiply along a path for that outcome; add the paths that make up the event. All end outcomes add to 1.' },
      { n: 11, f: 'Which probability methods does 0479 not require?', b: 'Permutation and combination formulas (count by listing, or multiply the choices at each pick), and the formula P(A | B) = P(A ∩ B)/P(B) (use the restricted-group method instead).' },
    ]),

    // 8 Probability distributions
    ...topicOnly('probability-distributions-0479', '8', [
      { n: 1, f: 'What is a probability distribution?', b: 'A list, usually a table, of every value x that the random variable X can take, with P(X = x) for each value.' },
      { n: 2, f: 'What two conditions must a probability distribution meet?', b: 'Every probability satisfies 0 ≤ P(x) ≤ 1, and the probabilities add to 1: ΣP(x) = 1.' },
      { n: 3, f: 'P(X = x) = kx for x = 1, 2, 3, 4, 5. Find k', b: 'k + 2k + 3k + 4k + 5k = 15k = 1, so k = 1/15.' },
      { n: 4, f: 'How do you calculate the expectation E(X)?', b: 'E(X) = Σ x P(x): multiply each value by its probability and add.\nExample: values 1, 2, 3 with probabilities 0.2, 0.5, 0.3 → 0.2 + 1 + 0.9 = 2.1.' },
      { n: 5, f: 'How many successes do you expect in n independent trials with probability p?', b: 'Expected number = n × p.\nExample: 80 trials with p = 0.35 → 28.' },
      { n: 6, f: 'What is the expected gain in a game with a stake?', b: 'Expected gain = expected payout − stake.\nExample: pay £2 to win £5 with probability 0.3 → 5 × 0.3 − 2 = −£0.50, an expected loss of 50p per game.' },
      { n: 7, f: 'What makes a game fair?', b: 'The expected gain is zero, so the stake equals the expected payout.\nExample: £8 paid with probability 1/4 → fair stake = 8 × 1/4 = £2.' },
      { n: 8, f: 'X is the number of heads in three tosses of a fair coin. Give its distribution and E(X)', b: 'P(0) = 1/8, P(1) = 3/8, P(2) = 3/8, P(3) = 1/8.\nE(X) = (0 + 3 + 6 + 3) ÷ 8 = 1.5.' },
      { n: 9, f: 'Must E(X) be a value that X can take?', b: 'No. It is the long-run average over many trials, such as 1.5 heads in three tosses. It is also not the most likely value (the mode).' },
    ]),

    // 9 Crude and standardised rates
    ...topicOnly('crude-and-standardised-rates-0479', '9', [
      { n: 1, f: 'How is a crude birth rate or crude death rate calculated?', b: 'Number of births (or deaths) ÷ total population × 1000, giving a rate per thousand people. The question defines the rate it wants, so use its definition.' },
      { n: 2, f: 'An island has 52 000 people and 936 births in a year. Find the crude birth rate', b: '936 ÷ 52 000 × 1000 = 18.0 per thousand.' },
      { n: 3, f: 'How does the denominator of a fertility rate differ from a crude birth rate?', b: 'A fertility rate usually divides births by the number of women in a stated age range (per thousand women), not by the whole population. Check the definition given in the question.' },
      { n: 4, f: 'What is an age-specific (subgroup) rate?', b: 'Events in one group ÷ people in that group × 1000. The group can be an age band, a sex, an occupation or years of driving experience.' },
      { n: 5, f: 'Why is a standardised rate calculated?', b: 'Event rates depend on age, and populations differ in age structure, so crude rates may not compare like with like. A standardised rate removes the effect of population make-up.' },
      { n: 6, f: 'How do you calculate a standardised rate?', b: 'Standardised rate = Σ(standard population of group × group rate) ÷ Σ(standard population). It is a weighted mean of the subgroup rates, weighted by the standard population, which the question supplies.' },
      { n: 7, f: 'A standard population is 40% under 50 and 60% aged 50 and over. A town has death rates of 4 and 10 per thousand. Find the standardised rate', b: '(40 × 4 + 60 × 10) ÷ 100 = 760 ÷ 100 = 7.6 per thousand.' },
      { n: 8, f: 'Why is the plain mean of the group rates not the standardised rate?', b: 'A plain mean treats every group as equally common. The standardised rate weights each group by the size of that group in the standard population.' },
      { n: 9, f: 'How do you find the number of events from a rate?', b: 'Number of events = rate × population ÷ 1000.\nExample: crude birth rate 12.5 per thousand in 240 000 people → 3000 births.' },
      { n: 10, f: 'A town\'s crude death rate is much higher than its standardised rate. What does that suggest?', b: 'The town has a larger share of older people than the standard population, which pushes its crude rate up.' },
      { n: 11, f: 'Is a standardised rate the actual rate in the population?', b: 'No. It is a measure for fair comparison, and its value depends on which standard population was used.' },
    ]),

    // 10 Index numbers
    ...topicOnly('index-numbers-0479', '10', [
      { n: 1, f: 'What is the base year of an index?', b: 'The year used for comparison. Every price relative for the base year is 100.', src: IX },
      { n: 2, f: 'What is a price relative?', b: 'The price of one item in the given year, as a number where the base-year price is 100.', src: IX },
      { n: 3, f: 'How do you calculate a price relative?', b: '(price in given year ÷ price in base year) × 100.\nExample: Rs 160 in the base year and Rs 184 now → 184 ÷ 160 × 100 = 115.' },
      { n: 4, f: 'What does a price relative below 100 show?', b: 'Prices have fallen. A relative of 85 means 15% lower than in the base year.', src: IX },
      { n: 5, f: 'How do you calculate a weighted aggregate index number?', b: 'Σ(weight × price relative) ÷ Σ(weights). It is a weighted mean, with the weights playing the part of frequencies.' },
      { n: 6, f: 'Where do the weights come from when they are not given?', b: 'Base-year expenditure: base-year price × base-year quantity for each item.' },
      { n: 7, f: 'Weights 40, 35 and 25 have price relatives 112, 105 and 130. Find the weighted index', b: '(4480 + 3675 + 3250) ÷ 100 = 11 405 ÷ 100 = 114.05, so 114.1 to 1 d.p.' },
      { n: 8, f: 'An index was 108 last year and is 118.8 this year. What is the percentage increase?', b: '(118.8 − 108) ÷ 108 × 100 = 10%. The 10.8-point difference is not the percentage change.' },
      { n: 9, f: 'What does an index of 118.2 mean?', b: 'Prices are 18.2% higher on average than in the base year, not 118.2% higher. It is an average change: not every item rose by that amount.' },
      { n: 10, f: 'Give limitations of a weighted index number', b: 'Weights go out of date as spending patterns change; buyers switch to cheaper items, so a fixed basket can overstate rises; items outside the basket are missing; and the average hides differences between households.' },
    ]),

    // 11 Bivariate distributions
    ...topicOnly('bivariate-distributions-0479', '11', [
      { n: 1, f: 'Which variable goes on which axis of a scatter diagram?', b: 'The independent variable (the one you choose, control or predict from) on the x-axis; the dependent variable (the one that responds) on the y-axis.' },
      { n: 2, f: 'How do you describe correlation fully?', b: 'Give the direction (positive or negative), the strength (strong or weak) and the context, for example "strong negative correlation: older laptops tend to be worth less".' },
      { n: 3, f: 'What is the difference between strong, weak and no correlation?', b: 'Strong: points close to a straight line. Weak: points spread loosely but still showing a trend. None: no pattern at all.' },
      { n: 4, f: 'How should a line of best fit be drawn by eye?', b: 'One straight ruled line through the middle of the points, following the trend, with similar numbers of points either side, across the range of the data. It need not pass through the origin.' },
      { n: 5, f: 'How do you draw a line of best fit by semi-averages?', b: 'Sort the pairs by x, split them into a lower half and an upper half of equal size, find the mean point (mean x, mean y) of each half, then plot both mean points and join them.' },
      { n: 6, f: 'Find the semi-average line for (2, 10), (4, 14), (6, 19), (8, 25)', b: 'Mean points (3, 12) and (7, 22). Gradient = (22 − 12) ÷ (7 − 3) = 2.5. Then 12 = 2.5 × 3 + c, so c = 4.5.\ny = 2.5x + 4.5.' },
      { n: 7, f: 'In y = mx + c for a line of best fit, what do m and c mean?', b: 'm is the change in y for each one-unit increase in x. c is the value of y when x = 0, which may lie outside the data.' },
      { n: 8, f: 'How do you estimate x from a given y using y = mx + c?', b: 'Rearrange to x = (y − c) ÷ m.\nExample: y = 2x + 6 and y = 40 → x = 34 ÷ 2 = 17.' },
      { n: 9, f: 'What is the difference between interpolation and extrapolation?', b: 'Interpolation estimates inside the range of the data and is more reliable. Extrapolation estimates outside it and is less reliable, because the pattern may not continue.' },
      { n: 10, f: 'What assumptions lie behind an estimate from a line of best fit?', b: 'The straight-line trend continues for the values used, the sample is representative, and other influences stay the same. Correlation by itself does not show that one variable causes the other.' },
    ]),

    // 12 Time series
    ...topicOnly('time-series-0479', '12', [
      { n: 1, f: 'What is a time series?', b: 'Values of one quantity recorded at regular intervals, such as every quarter or every school day, and plotted in time order.', src: TS },
      { n: 2, f: 'What is the trend of a time series?', b: 'The long-term direction of the series (rising, falling or flat) once short repeating ups and downs are removed.', src: TS },
      { n: 3, f: 'What is seasonal variation?', b: 'A regular swing around the trend that returns after the same number of periods each time. A "season" can be a quarter, a day of the week or a month.', src: TS },
      { n: 4, f: 'What is a moving average?', b: 'The mean of a fixed number of consecutive values, moved along the series one value at a time.', src: TS },
      { n: 5, f: 'How many points should each moving average use?', b: 'The length of one cycle: 4 for quarterly data, 12 for monthly data with a yearly pattern, 5 for school days, 7 for days of the week. A full cycle in each average cancels the seasonal swings, leaving the trend.' },
      { n: 6, f: 'When must moving averages be centred, and how?', b: 'When the number of points is even, because each average then sits between two time periods. Centre by taking the mean of each pair of neighbouring moving averages.' },
      { n: 7, f: 'A series has 20 values. How many four-point moving averages are there, and how many after centring?', b: '20 − 4 + 1 = 17 four-point moving averages, and 16 after centring.' },
      { n: 8, f: 'How do you calculate a seasonal component?', b: 'For each period find actual value − moving average. Group these differences by season and take the mean of each group. The components should add to roughly zero.' },
      { n: 9, f: 'How do you predict a future value from a time series?', b: 'Predicted value = trend value (read from the trend line) + seasonal component.\nExample: trend 53.5 and component −6.5 → 47.0.' },
      { n: 10, f: 'Where should the trend line be drawn?', b: 'By eye through the plotted moving averages, not through the raw data, with each moving average plotted at the time of its middle value.' },
      { n: 11, f: 'Why may a time series prediction be unreliable?', b: 'It assumes the trend continues in a straight line and each season keeps the same effect; a trend line drawn by eye varies between people; and one-off events are not in the model. Reliability falls the further ahead you predict.' },
    ]),
  ],
};
