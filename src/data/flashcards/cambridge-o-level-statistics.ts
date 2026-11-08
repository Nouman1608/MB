/**
 * D-444 -- flashcards for Cambridge O Level Statistics 4040 (2025-2027).
 *
 * One block per subtopic, in syllabus order. Topics 7, 8 and 11 list no
 * subtopics in the syllabus record, so their cards sit on the topic (topicOnly
 * helper). Card ids are `<subtopic number>-<n>` (or `<topic number>-<n>`) and
 * are permanent (browser progress is keyed by them): add a new card with the
 * next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 4040); origin 'revision-notes'.
 *
 * Written from Marlbridge's own 4040 revision notes and study guides, keeping
 * their notation (for example y = a + bx in topic 6). Every worked figure on a
 * card was recalculated by hand. Not tiered. Plain text only (see types.ts).
 */
import type { Flashcard, FlashcardDeck } from './types.ts';

interface Spec { n: number; f: string; b: string; src?: string }

const sub = (topic: string, subtopic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b, src }) => ({
    id: `${number}-${n}`,
    topic,
    subtopic,
    front: f,
    back: b,
    origin: src ? 'revision-notes' as const : 'authored' as const,
    ...(src ? { source: src } : {}),
  }));

const topicOnly = (topic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b, src }) => ({
    id: `${number}-${n}`,
    topic,
    front: f,
    back: b,
    origin: src ? 'revision-notes' as const : 'authored' as const,
    ...(src ? { source: src } : {}),
  }));

const DATA = 'o-level-statistics-data-collection-revision-notes';
const SURV = 'cambridge-o-level-statistics-surveys-and-questionnaire-design-open-and-closed-revision-notes';
const IX = 'o-level-statistics-4040-index-numbers-revision-notes';
const TS = 'o-level-statistics-4040-time-series-moving-averages-revision-notes';

const T1 = 'data-and-its-collection-4040';
const T2 = 'summary-representation-of-data-4040';
const T3 = 'formation-of-data-into-frequency-distributions-4040';
const T4 = 'formation-of-cumulative-frequency-distributions-4040';
const T5 = 'statistical-measures-interpretation-and-use-4040';
const T6 = 'transformations-involving-mean-and-standard-deviation-4040';
const T9 = 'bivariate-distributions-and-scatter-diagrams-4040';
const T10 = 'time-series-4040';
const T12 = 'probability-distributions-4040';

export const DECK_CAMBRIDGE_O_LEVEL_STATISTICS: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'o-level',
  subjectSlug: 'statistics',
  syllabusCode: '4040',
  syllabusSeries: '2025-2027',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Data and its collection
    ...sub(T1, 'general-ideas-of-sampling-4040', '1.1', [
      { n: 1, f: 'What are a population and a sampling frame?', b: 'The population is the whole group you want information about. The sampling frame is the list the sample is chosen from.' },
      { n: 2, f: 'What are the advantages and disadvantages of a census compared with a sample?', b: 'A census covers every member, so it has no sampling error. It costs much more time and money and is often impractical for a large population. A sample is cheaper and quicker but has sampling error.' },
      { n: 3, f: 'Is a sample automatically inaccurate?', b: 'No. A sample has sampling error (chance differences from the population), which is different from bias (a systematic error in the method).' },
      { n: 4, f: 'Does a larger sample remove bias?', b: 'No. It reduces sampling error only. A biased method stays biased however large the sample is.' },
    ]),
    ...sub(T1, 'types-of-sampling-4040', '1.2', [
      { n: 1, f: 'What is simple random sampling?', b: 'Every member of the population has an equal chance of being chosen, for example by lottery or random numbers. It can still be unrepresentative by chance.' },
      { n: 2, f: 'How do you take a systematic sample of 20 students from a school of 800?', b: 'List all 800 students. Sampling interval = 800 ÷ 20 = 40. Pick a random start between 1 and 40, then take every 40th student. Risk: a hidden pattern in the list that matches the interval.' },
      { n: 3, f: 'A factory has 240 production, 90 sales and 30 admin staff. Find a stratified sample of 36', b: 'Sampling fraction = 36 ÷ 360 = 1/10. Production 24, sales 9, admin 3 (total 36). Each stratum\'s share is then chosen at random within that stratum.' },
      { n: 4, f: 'What is quota sampling?', b: 'The interviewer fills a fixed quota for each category, choosing who to ask within each group. It is not truly random, so interviewer bias is possible.' },
      { n: 5, f: 'What is the difference between cluster and stratified sampling?', b: 'Cluster: whole groups are chosen at random and everyone in a chosen cluster is included. Stratified: a random sample is taken from every group, in proportion to its size.' },
      { n: 6, f: 'What is opportunity sampling?', b: 'Sampling whoever happens to be available. It is quick, but highly unrepresentative.' },
    ]),
    ...sub(T1, 'bias-how-it-arises-and-is-avoided-4040', '1.3', [
      { n: 1, f: 'How do leading or loaded questions cause bias?', b: 'The wording pushes a particular answer.', src: DATA },
      { n: 2, f: 'What is non-response bias?', b: 'Those who do not respond may differ systematically from those who do.', src: DATA },
      { n: 3, f: 'What is interviewer bias?', b: 'The presence or tone of the interviewer affects the answers.', src: DATA },
      { n: 4, f: 'How can an unrepresentative sample cause bias?', b: 'For example, surveying only one location or one age group, so some parts of the population are left out.', src: DATA },
      { n: 5, f: 'How can bias in a survey be reduced?', b: 'Use a random method from a complete sampling frame, write neutral and clear questions with options that do not overlap, run a pilot survey first, and raise the response rate (for example with a reminder).' },
    ]),
    ...sub(T1, 'general-ideas-of-surveys-4040', '1.4', [
      { n: 1, f: 'What is the difference between a closed and an open question?', b: 'Closed has fixed options, open has none. Do not call a question open just because it has a long stem.', src: SURV },
      { n: 2, f: 'What are the advantages and disadvantages of open questions?', b: 'Open questions give reasons and unexpected answers. They are slower to answer and must be coded (sorted into categories) before they can be counted. Memory line: closed gives counts, open gives reasons.' },
      { n: 3, f: 'What do "exhaustive" and "mutually exclusive" mean for response options?', b: 'Exhaustive means nothing is missing; mutually exclusive means nothing overlaps.', src: SURV },
      { n: 4, f: 'What does a pilot survey test?', b: 'The pilot tests the questionnaire, not the population. It finds unclear questions, missing options and length problems so they can be fixed before the main survey.', src: SURV },
      { n: 5, f: 'How is a response rate calculated?', b: 'Response rate = usable replies ÷ number asked × 100.\nExample: 150 forms given out, 90 usable ones returned → 60%.' },
      { n: 6, f: 'What is a double-barrelled question, and how is it fixed?', b: 'A question that joins two ideas with "and", such as "Is the cafeteria cheap and friendly?". Split it into two separate questions.' },
    ]),
    ...sub(T1, 'types-of-data-and-variable-4040', '1.5', [
      { n: 1, f: 'What is qualitative data?', b: 'Data described by category, not number (favourite subject, eye colour).', src: DATA },
      { n: 2, f: 'What is discrete quantitative data?', b: 'Data that takes only certain, separate values (number of siblings, goals scored). It is usually countable, but "counted" is a rule of thumb, not the deciding test.', src: DATA },
      { n: 3, f: 'What is continuous quantitative data?', b: 'Data that takes any value in a range (height, time, mass). It is usually measured, but that is a heuristic, not the definition.', src: DATA },
      { n: 4, f: 'What is the difference between primary and secondary data?', b: 'Primary data is collected by the researcher for their exact need: well matched but more costly. Secondary data was collected by someone else for another purpose (such as census data): cheaper but may not fit exactly.' },
      { n: 5, f: 'A time is recorded as 8.6 seconds to 1 decimal place. Between which values does it lie?', b: '8.55 ≤ t < 8.65. The boundaries sit halfway between neighbouring recorded values.' },
    ]),

    // 2 Summary representation of data
    ...sub(T2, 'classification-tabular-form-4040', '2.1', [
      { n: 1, f: 'What rules must the categories of a frequency table follow?', b: 'They must not overlap and must cover every observation. Tally in fives, then check that the frequencies add to the number of observations.' },
      { n: 2, f: 'How do you find a missing entry in a two-way table?', b: 'Subtract from a row or column total, then check it the other way using the other direction. Row totals, column totals and the grand total must all agree.' },
      { n: 3, f: 'In a two-way table, 25 of the 36 Year 11 pupils walk. What percentage of Year 11 walk?', b: '25 ÷ 36 × 100 = 69.4% (1 d.p.). The base is the Year 11 row total, not the grand total.' },
      { n: 4, f: 'What is the difference between a frequency table and a two-way table?', b: 'A frequency table classifies data by one variable. A two-way table cross-classifies by two variables at once.' },
    ]),
    ...sub(T2, 'representation-pictorial-diagrammatic-4040', '2.2', [
      { n: 1, f: 'How do you read a frequency from a pie chart?', b: 'Frequency = (angle ÷ 360) × total.\nExample: a 135° sector in a pie chart of 80 people → 135 ÷ 360 × 80 = 30 people.' },
      { n: 2, f: 'A pie chart with total 40 has radius 3 cm. Find the radius for total 90, with areas in proportion to totals', b: 'Radius = 3 × √(90 ÷ 40) = 3 × 1.5 = 4.5 cm. The radii are in the ratio of the square roots of the totals, not the totals.' },
      { n: 3, f: 'A pictogram uses 1 symbol = 4 items. How many symbols show 22 items?', b: '22 ÷ 4 = 5½ symbols. Give a key, draw symbols the same size, and use whole and half symbols only.' },
      { n: 4, f: 'What is the difference between a sectional and a percentage bar chart?', b: 'A sectional bar shows amounts: its height is the total. A percentage bar shows shares: every bar is the same height (100%), so groups with different totals can be compared.' },
      { n: 5, f: 'In a group of 30, n(A) = 14, n(B) = 11 and n(A ∩ B) = 5. How many are in neither set?', b: 'n(A ∪ B) = 14 + 11 − 5 = 20, so neither = 30 − 20 = 10. A only = 9, B only = 6.' },
      { n: 6, f: 'What are the rules for drawing a stem-and-leaf diagram?', b: 'Stems in order with none missing, leaves in order and equally spaced, and a key with units (for example 3 | 4 means 3.4 kg). In a back-to-back diagram the leaves are ordered outwards from the stem on both sides.' },
    ]),
    ...sub(T2, 'purpose-use-representation-advantages-disadvantages-4040', '2.3', [
      { n: 1, f: 'What is a Venn diagram good for, and what is its drawback?', b: 'It shows overlaps and the "neither" group, with counts at a glance. It becomes hard to read with many sets and shows counts only.' },
      { n: 2, f: 'What are the advantages and disadvantages of a stem-and-leaf diagram?', b: 'No data is lost and the shape is visible. It becomes long and unwieldy for a large data set. A back-to-back version compares only two sets.' },
      { n: 3, f: 'What are the advantages and disadvantages of a box-and-whisker diagram?', b: 'It is quick to read, works for any size of data set and compares median and spread directly. The individual values are lost and it does not show the mean.' },
      { n: 4, f: 'Pie chart or bar chart: what is the trade-off?', b: 'A pie chart shows proportion clearly, but it is harder than a bar chart for comparing precise values across categories.' },
      { n: 5, f: 'When should you use a comparative pie chart or a dual bar chart rather than a single chart?', b: 'When the question needs two or more data sets compared, not just one data set displayed.' },
    ]),
    ...sub(T2, 'interpretation-data-tabular-pictorial-diagrammatic-4040', '2.4', [
      { n: 1, f: 'What should a comparison of two data sets include?', b: 'One average (such as the median), one measure of spread (IQR or range), a sentence in context using comparison words, and a conclusion that answers the question.' },
      { n: 2, f: 'Two classes both have median 64. Class 1 has IQR 14 and Class 2 has IQR 24. Compare them', b: 'The typical pupil did equally well in both classes (same median). Class 1 is more consistent, because its IQR is smaller.' },
      { n: 3, f: 'Club X has 60 of 240 members in a quiz; Club Y has 24 of 80. Which has the higher participation?', b: 'X: 60 ÷ 240 = 25%. Y: 24 ÷ 80 = 30%. Club Y has the higher rate, though Club X has the larger number. With groups of different sizes, compare percentages.' },
      { n: 4, f: 'In a sectional bar chart (1 cm = 10 units), parts end at 4 cm and 6.5 cm. What is the second part?', b: '(6.5 − 4) × 10 = 25 units. Subtract the lower boundary from the upper one; do not read 6.5 cm as the part on its own.' },
    ]),

    // 3 Frequency distributions
    ...sub(T3, 'class-measures-grouped-frequency-4040', '3.1', [
      { n: 1, f: 'What is the difference between class limits and class boundaries?', b: 'Limits are the lowest and highest values that can be written in a class, as printed; there are gaps between classes. Boundaries are the exact edges on the number line, so neighbouring classes meet.' },
      { n: 2, f: 'Masses are recorded to the nearest kg. Find the boundaries, width and mid-point of the class 40–44', b: 'Gap 1, half-gap 0.5. Boundaries 39.5 and 44.5. Width 44.5 − 39.5 = 5. Mid-point (39.5 + 44.5) ÷ 2 = 42.' },
      { n: 3, f: 'Lengths are recorded to 1 decimal place. What are the boundaries of the class 2.0–2.4?', b: 'Gap 0.1, so half-gap 0.05. Boundaries 1.95 and 2.45; width 0.5; mid-point 2.2.' },
      { n: 4, f: 'What are the boundaries of the class 135 ≤ h < 145?', b: 'Exactly 135 and 145: an inequality class is already in boundary form and needs no adjustment. Width 10, mid-point 140.' },
      { n: 5, f: 'Ages are recorded as age last birthday. What are the width and mid-point of the class 10–14?', b: 'The class covers ages from 10 up to, but not including, 15. Width 5, mid-point 12.5 (not 12).' },
      { n: 6, f: 'What is the classic error when finding the width of a class such as 40–44?', b: 'Taking upper limit − lower limit, which gives 4. The width is upper boundary − lower boundary = 5.' },
    ]),
    ...sub(T3, 'frequency-polygons-and-histograms-4040', '3.2', [
      { n: 1, f: 'How do you draw a frequency polygon?', b: 'Plot (midpoint, frequency) for each class, plus a zero-frequency point at the midpoint of an empty class before the first and after the last. Join with straight ruled lines.' },
      { n: 2, f: 'Classes run 20–<30 up to 60–<70. Where are the zero points of the frequency polygon?', b: 'At x = 15 and x = 75, the midpoints of the empty classes 10–<20 and 70–<80.' },
      { n: 3, f: 'How is a histogram with unequal class widths drawn?', b: 'Find each width from the boundaries, then frequency density = frequency ÷ width. Draw touching bars from boundary to boundary at that height, and label the axis "frequency density". The area of each bar is its frequency.' },
      { n: 4, f: 'A histogram bar of width 20 has frequency density 0.65. What frequency does it show?', b: 'Frequency = density × width = 0.65 × 20 = 13.' },
      { n: 5, f: 'The class 10 ≤ x < 20 has frequency 30. Estimate how many values lie between 10 and 14', b: 'Assuming an even spread: density 30 ÷ 10 = 3, so 3 × 4 = 12. It is an estimate.' },
      { n: 6, f: 'What is the modal class on a histogram with unequal widths?', b: 'The class with the greatest frequency density, which is not necessarily the class with the greatest frequency.' },
    ]),

    // 4 Cumulative frequency distributions
    ...sub(T4, 'cumulative-frequency-tabular-form-4040', '4.1', [
      { n: 1, f: 'What does a cumulative frequency of 33 at x = 3 mean?', b: '33 observations are less than or equal to 3. Cumulative frequency is the running total of the frequencies.' },
      { n: 2, f: 'How do you build a cumulative frequency table for grouped data?', b: 'Add each frequency to the running total and label each total with the upper class boundary. The last total must equal the total frequency.' },
      { n: 3, f: 'Cumulative frequencies at the ends of four classes are 3, 10, 24 and 30. Find the class frequencies', b: 'Subtract each cumulative frequency from the next: 3, 7, 14, 6. The first class keeps its value.' },
      { n: 4, f: 'What can you read from a cumulative frequency table without drawing a graph?', b: 'At a class boundary only: items up to it (read directly), between two boundaries (subtract), above it (total − cumulative frequency). Values between boundaries must be estimated.' },
    ]),
    ...sub(T4, 'cumulative-frequency-graphical-form-4040', '4.2', [
      { n: 1, f: 'Where do you plot the points of a cumulative frequency graph?', b: 'At the upper class boundaries, starting with cumulative frequency 0 at the lower boundary of the first class.' },
      { n: 2, f: 'What is the difference between a cumulative frequency polygon and a curve?', b: 'A polygon joins the plotted points with straight lines; a curve joins them with one smooth curve. Read the question to see which is wanted. Both give estimates.' },
      { n: 3, f: 'How do you read a cumulative frequency graph in each direction?', b: 'From a value: go up from the horizontal axis to the graph, then across, to read the number of items at most that value. From a number of items: go across from the vertical axis, then down, to read a value.' },
      { n: 4, f: 'How do you answer "more than" and "the highest k items" questions from a cumulative graph?', b: '"More than" a value: total − the reading at that value. "Highest k items": read across at cumulative frequency total − k.' },
      { n: 5, f: 'Lengths measured to the nearest mm are grouped 30–39, 40–49, … Where does the graph start?', b: 'At (29.5, 0). 29.5 is the true lower boundary; 30 is only the class limit.' },
    ]),

    // 5 Statistical measures
    ...sub(T5, 'measures-of-central-tendency-4040', '5.1', [
      { n: 1, f: 'Where is the median in a list of n values, and in a grouped table?', b: 'List or ungrouped table: the (n + 1)/2 th value of the ordered data. Grouped table: the n/2 th value, found by interpolation.' },
      { n: 2, f: 'What is the formula for the median of grouped data?', b: 'Median ≈ L + ((n/2 − F) ÷ f) × w, where L is the lower boundary of the median class, F the cumulative frequency before it, f its frequency and w its width.' },
      { n: 3, f: 'Leaves: 0–<10 (3), 10–<20 (9), 20–<30 (6), 30–<40 (2). Estimate the mean and median', b: 'Mean ≈ (15 + 135 + 150 + 70) ÷ 20 = 370 ÷ 20 = 18.5 cm.\nMedian: 10th value, 3 below 10 → 10 + (7/9) × 10 = 17.8 cm.' },
      { n: 4, f: 'Classes 5 ≤ x < 10 (frequency 15) and 10 ≤ x < 20 (frequency 24). Which is the modal class?', b: 'Densities: 15 ÷ 5 = 3 and 24 ÷ 10 = 2.4, so the modal class is 5 ≤ x < 10, even though 24 is the larger frequency.' },
      { n: 5, f: 'The value 40 is added to 6, 7, 7, 8, 9. What happens to the mean, median and mode?', b: 'Mean 7.4 → 77 ÷ 6 = 12.83. Median 7 → 7.5. Mode stays 7. One extreme value moves the mean a lot and the median only a little.' },
      { n: 6, f: 'How do you choose between the mean, median and mode?', b: 'Categories → mode. Skewed data or outliers → median. Roughly symmetrical numerical data, or when totals matter → mean. Justify with the figure and a reason tied to the data.' },
    ]),
    ...sub(T5, 'measures-of-dispersion-4040', '5.2', [
      { n: 1, f: 'What are the variance and the standard deviation?', b: 'Variance: the mean of the squared distances from the mean, in squared units. Standard deviation: the square root of the variance, in the same units as the data.' },
      { n: 2, f: 'What is the squares form of the variance, for a list and for a frequency table?', b: 'List: Σx² ÷ n − x̄².\nTable: Σfx² ÷ Σf − x̄², with x the class midpoint for grouped data (an estimate). Here the divisor is n (or Σf).' },
      { n: 3, f: 'For ten values, Σx = 60 and Σx² = 400. Find the variance and standard deviation', b: 'Mean = 6. Variance = 400 ÷ 10 − 6² = 40 − 36 = 4. Standard deviation = 2.' },
      { n: 4, f: 'What is the difference between Σx² and (Σx)²?', b: 'Σx²: square each value, then add. (Σx)²: add, then square. Also, Σ(x − x̄)² is positive, but Σ(x − x̄) is always zero.' },
      { n: 5, f: 'Team A has standard deviation 4.1 points and team B 7.3 points, with equal means. Which is more consistent?', b: 'Team A, because its smaller standard deviation means its scores lie closer to the mean.' },
    ]),
    ...sub(T5, 'quartiles-and-percentiles-4040', '5.3', [
      { n: 1, f: 'What are the quartiles and the P-th percentile as percentiles?', b: 'Q1 is the 25th percentile, the median the 50th and Q3 the 75th. The P-th percentile is the value with P% of the data at or below it.' },
      { n: 2, f: 'n = 84. Which cumulative frequencies give Q1, the median, Q3 and the 40th percentile?', b: 'Q1: 84/4 = 21. Median: 42. Q3: 63. 40th percentile: 0.4 × 84 = 33.6.' },
      { n: 3, f: '22 values are at or below 30, and the class 30 < x ≤ 40 holds 16. Estimate the value with 30 at or below it', b: 'Value = lower boundary + (target − CF before) ÷ class frequency × width = 30 + (30 − 22) ÷ 16 × 10 = 35.' },
      { n: 4, f: 'How do you find the value that marks off the top 10% or the highest 20 values?', b: 'Top 10%: the 90th percentile, at 0.9n. Highest 20 of n values: read at cumulative frequency n − 20.' },
      { n: 5, f: 'What is the difference between a percentile and a percentage?', b: 'A percentile is a value in the data. A percentage is a share of the data.' },
    ]),
    ...sub(T5, 'measures-for-combined-sets-of-data-4040', '5.4', [
      { n: 1, f: 'How do you get Σx and Σx² for a set from its mean and standard deviation?', b: 'Σx = n × mean, and Σx² = n × (σ² + mean²).\nExample: 5 values with mean 6 and σ = 2 → Σx² = 5 × (4 + 36) = 200.' },
      { n: 2, f: 'Ten values have mean 8 and thirty values have mean 12. Find the mean of all forty', b: '(10 × 8 + 30 × 12) ÷ 40 = 440 ÷ 40 = 11. Weight each mean by its group size.' },
      { n: 3, f: 'How do you find the standard deviation of two combined sets?', b: 'Add the n, Σx and Σx² of both sets. Combined σ = √(total Σx² ÷ total n − combined mean²). Never average the two standard deviations.' },
      { n: 4, f: 'Set P: 5 values, mean 6, σ = 2. Set Q: 3 values, mean 10, σ = 1. Find the combined σ', b: 'Σx² = 200 + 303 = 503; Σx = 60; n = 8; mean 7.5.\nσ² = 503 ÷ 8 − 7.5² = 62.875 − 56.25 = 6.625, so σ = 2.57 (3 s.f.).' },
      { n: 5, f: 'Twelve values with mean 30 join n values with mean 40. The combined mean is 36. Find n', b: '360 + 40n = 36(12 + n) = 432 + 36n, so 4n = 72 and n = 18.' },
    ]),

    // 6 Transformations
    ...sub(T6, 'effect-of-adding-or-multiplying-by-a-constant-4040', '6.1', [
      { n: 1, f: 'What happens to the mean and standard deviation when a constant a is added to every value?', b: 'The mean increases by a. The standard deviation (and variance) are unchanged, because the gaps between the values and the mean do not change.' },
      { n: 2, f: 'What happens when every value is multiplied by a constant b?', b: 'Mean → b × mean. Standard deviation → |b| × standard deviation. Variance → b² × variance.' },
      { n: 3, f: 'Times have mean 25 min and standard deviation 6 min. The charge is y = 10 + 4x. Find the mean and SD of y', b: 'Mean = 10 + 4 × 25 = 110. Standard deviation = 4 × 6 = 24.' },
      { n: 4, f: 'x has mean 8 and standard deviation 1.5. Find the mean and standard deviation of y = 50 − 3x', b: 'Mean = 50 − 3 × 8 = 26. Standard deviation = |−3| × 1.5 = 4.5. A standard deviation is never negative.' },
      { n: 5, f: 'Coded values y = (x − 80) ÷ 4 have mean 2.5 and SD 0.5. Find the mean and SD of x', b: 'Undo the coding: x = 80 + 4y. Mean of x = 80 + 4 × 2.5 = 90. SD of x = 4 × 0.5 = 2.' },
      { n: 6, f: 'Does adding 10 to every observation change the range?', b: 'No. The largest and smallest values both rise by 10, so the range is unchanged, like the standard deviation.' },
    ]),
    ...sub(T6, 'linear-transformation-to-given-mean-and-sd-4040', '6.2', [
      { n: 1, f: 'How do you find y = a + bx that gives a target mean and standard deviation?', b: 'Find b first: b = target SD ÷ old SD. Then a = target mean − b × old mean. Check by substituting the old mean: it must give the target mean.' },
      { n: 2, f: 'Data with mean 55 and SD 8 are to have mean 100 and SD 20. Find the transformation', b: 'b = 20 ÷ 8 = 2.5. a = 100 − 2.5 × 55 = −37.5. So y = −37.5 + 2.5x.\nCheck: −37.5 + 137.5 = 100.' },
      { n: 3, f: 'Data with mean 20 and SD 5 are to have mean 50 and SD 10. Find y = a + bx', b: 'b = 10 ÷ 5 = 2. a = 50 − 2 × 20 = 10. So y = 10 + 2x.' },
      { n: 4, f: 'Data with mean 12 and SD 3 are to have mean 0 and SD 1. Find a and b', b: 'b = 1/3 and a = 0 − (1/3) × 12 = −4, so y = −4 + x/3. This is standardising the data.' },
    ]),

    // 7 Crude and standardised rates
    ...topicOnly('crude-and-standardised-rates-and-their-use-4040', '7', [
      { n: 1, f: 'How is a crude death rate calculated?', b: 'Deaths ÷ total population × 1000, giving deaths per thousand people. Use the definition the question gives.' },
      { n: 2, f: 'A country has 460 000 people and 4140 deaths in a year. Find the crude death rate', b: '4140 ÷ 460 000 × 1000 = 9.0 per thousand.' },
      { n: 3, f: 'A region has 11 500 women aged 15 to 49 and 690 births to them. Find the fertility rate', b: '690 ÷ 11 500 × 1000 = 60.0 per thousand women. The denominator is women in the stated age range, not the whole population.' },
      { n: 4, f: 'A bus depot has 640 drivers and 24 accidents. Find the accident rate', b: '24 ÷ 640 × 1000 = 37.5 per thousand drivers.' },
      { n: 5, f: 'Why can crude death rates give a misleading comparison between two towns?', b: 'Death rates depend on age, and towns can have different proportions of older people. The crude rate reflects that make-up as well as the risk in each age group.' },
      { n: 6, f: 'What is the formula for a standardised rate?', b: 'Σ(standard population of group × group rate) ÷ Σ(standard population): a weighted average of the group rates, weighted by the standard population given in the question.' },
      { n: 7, f: 'Standard population: 7000 children, 3000 adults. Accident rates 5 and 12 per thousand. Find the standardised rate', b: '(7000 × 5 + 3000 × 12) ÷ 10 000 = (35 000 + 36 000) ÷ 10 000 = 7.1 per thousand.' },
      { n: 8, f: 'Town X: crude 11.2, standardised 8.4. Town Y: crude 9.8, standardised 9.1. Interpret', b: 'X has the older population, since its crude rate is far above its standardised rate. Y has the higher death rate once age is allowed for (9.1 against 8.4).' },
      { n: 9, f: 'A district of 75 000 people has a crude death rate of 9.6 per thousand. How many deaths?', b: 'Deaths = rate × population ÷ 1000 = 9.6 × 75 000 ÷ 1000 = 720.' },
      { n: 10, f: 'What should you write when crude and standardised rates rank two populations differently?', b: 'Quote both pairs of rates and explain the reversal by naming the difference in make-up, for example a smaller share of people aged 60 and over, which lowers one population\'s crude rate.' },
      { n: 11, f: 'Does a higher death rate mean a population has more deaths?', b: 'Not necessarily. Rates and totals answer different questions: check the population sizes before claiming more events.' },
    ]),

    // 8 Index numbers
    ...topicOnly('index-numbers-4040', '8', [
      { n: 1, f: 'What is the base year of an index?', b: 'The year used for comparison. Every price relative for the base year is 100.', src: IX },
      { n: 2, f: 'What is a price relative?', b: 'The price of one item in the given year, as a number where the base-year price is 100.', src: IX },
      { n: 3, f: 'What is a weight in an index number?', b: 'A number showing how much importance an item has in the index.', src: IX },
      { n: 4, f: 'What is a weighted aggregate index number?', b: 'One figure that summarises the price change of several items, using weights.', src: IX },
      { n: 5, f: 'What does a price relative above 100 show?', b: 'Prices have risen. A relative of 108 means 8% higher than in the base year.', src: IX },
      { n: 6, f: 'A fabric cost Rs 480 per metre in the base year and costs Rs 408 now. Find the price relative', b: '408 ÷ 480 × 100 = 85. The price has fallen by 15% since the base year.' },
      { n: 7, f: 'A school bag has price relative 125 and now costs Rs 750. Find its base-year price', b: 'Base-year price = (given-year price ÷ price relative) × 100 = 750 ÷ 125 × 100 = Rs 600.' },
      { n: 8, f: 'How do you calculate a weighted aggregate index, and where do the weights come from?', b: 'Index = Σ(weight × price relative) ÷ Σ(weights). If weights are not given, use base-year expenditure: base-year price × base-year quantity.' },
      { n: 9, f: 'Base prices 20, 45, 10; base quantities 30, 12, 60; current prices 23, 54, 11. Find the weighted index', b: 'Relatives 115, 120, 110. Weights 600, 540, 600 (sum 1740).\n(69 000 + 64 800 + 66 000) ÷ 1740 = 199 800 ÷ 1740 = 114.8.' },
      { n: 10, f: 'An index rises from 125 to 140. What is the percentage increase?', b: '(140 − 125) ÷ 125 × 100 = 12%. Divide by the earlier index; the 15-point difference is not the percentage.' },
      { n: 11, f: 'What are the limitations of a fixed-weight index?', b: 'Weights go out of date as buying changes; buyers substitute cheaper items, so the index can overstate rises; new or omitted items are missing; and an average hides different spending patterns. Link each point to an item in the question.' },
    ]),

    // 9 Bivariate distributions
    ...sub(T9, 'elementary-ideas-of-correlation-4040', '9.1', [
      { n: 1, f: 'What do positive and negative correlation look like?', b: 'Positive: y tends to increase as x increases, so the points slope up. Negative: y tends to decrease as x increases, so the points slope down.' },
      { n: 2, f: 'What decides the strength of a correlation?', b: 'How close the points lie to a straight line: strong if they hug a line, weak if widely scattered but still showing a trend. Strength is about scatter, not about how steep the line is.' },
      { n: 3, f: 'How do you describe a correlation for full marks?', b: 'Give the type, the strength and the meaning in context, for example "weak negative correlation: people who watch more television tend to score slightly lower".' },
      { n: 4, f: 'Does correlation show that x causes y?', b: 'No, it shows an association only. A lurking variable may drive both: ice cream sales and sunburn cases are both driven by hot weather.' },
      { n: 5, f: 'What is an outlier on a scatter diagram?', b: 'A point far from the general pattern. It may pull a line of best fit, so check whether it is an error and comment on it.' },
    ]),
    ...sub(T9, 'lines-of-best-fit-4040', '9.2', [
      { n: 1, f: 'How do you find a line of best fit by the method of semi-averages?', b: 'Order the pairs by x and split into two equal halves (for an odd number, leave out the middle pair and say so). Find the mean point of each half, then the gradient and intercept of the line through them.' },
      { n: 2, f: 'Price x: 2, 4, 6, 8, 10, 12; sold y: 30, 27, 24, 19, 15, 11. Find the semi-average line', b: 'Mean points (4, 27) and (10, 15). m = (15 − 27) ÷ (10 − 4) = −2. 27 = −8 + c, so c = 35.\ny = −2x + 35.' },
      { n: 3, f: 'How do you find the equation of a line through (2, 7) and (10, 19)?', b: 'm = (19 − 7) ÷ (10 − 2) = 1.5. c = 7 − 1.5 × 2 = 4. So y = 1.5x + 4.' },
      { n: 4, f: 'With 7 pairs, x = 1, 3, 5, 7, 9, 11, 13 and y = 5, 9, 10, 17, 24, 27, 33, find the semi-average line', b: 'Leave out (7, 17). Mean points (3, 8) and (11, 28). m = 20 ÷ 8 = 2.5. 8 = 7.5 + c, so c = 0.5.\ny = 2.5x + 0.5.' },
      { n: 5, f: 'Why is a prediction from y = −2x + 35 at x = 14 less reliable than at x = 7, if x ran from 2 to 12?', b: 'x = 7 is inside the data (interpolation, y = 21). x = 14 is outside it (extrapolation, y = 7), and the pattern may not continue. The line even gives y = 0 at x = 17.5, and sales cannot be negative.' },
      { n: 6, f: 'Does the semi-average line pass through the mean point of the data?', b: 'Yes, when the two halves together contain all the data (an even number of pairs). The mean point is (mean of all x, mean of all y).' },
    ]),

    // 10 Time series
    ...sub(T10, 'understanding-of-trend-4040', '10.1', [
      { n: 1, f: 'What is a time series?', b: 'Values of one quantity recorded at regular intervals, such as every quarter or every school day, and plotted in time order.', src: TS },
      { n: 2, f: 'What is a trend?', b: 'The long-term direction of the series (rising, falling or flat) once short repeating ups and downs are removed.', src: TS },
      { n: 3, f: 'What is a moving average?', b: 'The mean of a fixed number of consecutive values, moved along the series one value at a time.', src: TS },
      { n: 4, f: 'How do you choose the number of points in a moving average?', b: 'From the length of one cycle, not the number of values: 4 for quarterly data, 5 for school days, 7 for days of the week, 12 for monthly data with a yearly pattern.' },
      { n: 5, f: 'When are moving averages centred, and where does the first centred 4-point average belong?', b: 'Centre when the number of points is even, by averaging neighbouring pairs. The first centred 4-point average belongs to the third period of the data.' },
      { n: 6, f: 'Find the four-point moving averages of 30, 18, 22, 34, 32, 20, 24, 36', b: '26.0, 26.5, 27.0, 27.5, 28.0 (for example (30 + 18 + 22 + 34) ÷ 4 = 26.0). They rise steadily, so the trend is upward.' },
    ]),
    ...sub(T10, 'understanding-of-seasonal-variation-4040', '10.2', [
      { n: 1, f: 'What is seasonal variation in a time series?', b: 'A regular swing around the trend that returns after the same number of periods each time. A "season" can be a quarter, a day of the week or a month.', src: TS },
      { n: 2, f: 'How do you calculate the mean seasonal variation (seasonal component)?', b: 'For every period with a moving average, find actual value − moving average. Group the differences by season and take the mean of each group.' },
      { n: 3, f: 'What is the difference between a seasonal component and a difference?', b: 'A difference belongs to one period; the component is the mean of the differences for that season.', src: TS },
      { n: 4, f: 'Three seasonal components are +5.2, −3.1 and −6.0. What do you expect the fourth to be?', b: 'About +3.9, so that the four components total roughly zero.' },
      { n: 5, f: 'How do you predict a future value using the trend line and seasonal component?', b: 'Read (or extend) the trend line to find the trend value for that period, then add the seasonal component. Add it to a trend value, not to the last actual value.' },
      { n: 6, f: 'What assumptions make a time series prediction unreliable?', b: 'It assumes the trend continues in a straight line and each season keeps the same effect. A trend line drawn by eye varies, and one-off events are not in the model. The further ahead, the less reliable.' },
    ]),

    // 11 Elementary ideas of probability
    ...topicOnly('elementary-ideas-of-probability-4040', '11', [
      { n: 1, f: 'What are the sample space and an event?', b: 'The sample space S is the set of all possible outcomes of an experiment. An event is the set of outcomes you are interested in.' },
      { n: 2, f: 'How do you find P(A) when outcomes are equally likely?', b: 'P(A) = n(A) ÷ n(S), and 0 ≤ P(A) ≤ 1.\nExample: P(more than 4 on a fair die) = 2/6 = 1/3.' },
      { n: 3, f: 'An event happens 36 times in 150 trials. Estimate its probability and the number expected in 400 trials', b: 'Relative frequency = 36 ÷ 150 = 0.24. Expected number = probability × trials = 0.24 × 400 = 96.' },
      { n: 4, f: 'What is the complement of an event?', b: 'A′, the event that A does not happen. P(A′) = 1 − P(A).' },
      { n: 5, f: 'What are mutually exclusive events, and what rule do they follow?', b: 'Events that cannot both happen in one trial, so A ∩ B = Ø and P(A ∪ B) = P(A) + P(B). A full set of exclusive outcomes has probabilities adding to 1.' },
      { n: 6, f: 'P(A) = 0.6, P(B) = 0.35 and P(neither) = 0.1. Find P(A ∩ B)', b: 'P(A ∪ B) = 1 − 0.1 = 0.9. Then P(A ∩ B) = P(A) + P(B) − P(A ∪ B) = 0.6 + 0.35 − 0.9 = 0.05.' },
      { n: 7, f: 'Could events with P(A) = 0.6 and P(B) = 0.5 be mutually exclusive?', b: 'No. If they were, P(A ∪ B) = 0.6 + 0.5 = 1.1, which is more than 1.' },
      { n: 8, f: 'How do you test two events for independence?', b: 'Check whether P(A ∩ B) = P(A) × P(B).\nExample: 50 members, 20 in choir, 10 in band, 4 in both: 20/50 × 10/50 = 0.08 = 4/50, so they are independent.' },
      { n: 9, f: 'A bag has 4 black and 5 white counters. Find P(both black) with and without replacement', b: 'With: 4/9 × 4/9 = 16/81.\nWithout: 4/9 × 3/8 = 12/72 = 1/6. Without replacement the total and the count of the colour taken both fall by one.' },
      { n: 10, f: 'Each component fails with probability 0.3, independently. Find P(at least one of three fails)', b: 'P(all work) = 0.7³ = 0.343, so P(at least one fails) = 1 − 0.343 = 0.657.' },
      { n: 11, f: 'What are the rules for tree diagrams?', b: 'Branches from one point add to 1. Multiply along a path; add the paths that make up the event, since different paths are exclusive. All path probabilities add to 1.' },
      { n: 12, f: 'How do you find the probability of dependent picks in order?', b: 'P(X then Y) = P(X) × P(Y given X).\nExample: 2 red and 6 yellow, no replacement, first red on the second pick: 6/8 × 2/7 = 3/14.' },
    ]),

    // 12 Probability distributions
    ...sub(T12, 'probability-distribution-of-a-discrete-variable-4040', '12.1', [
      { n: 1, f: 'What is a probability distribution of a discrete random variable?', b: 'A table of every value x that X can take, with its probability p(x). Capital X is the variable; small x is a value it takes.' },
      { n: 2, f: 'What must be true of the probabilities in a distribution?', b: 'Each satisfies 0 ≤ p(x) ≤ 1, and together they sum to exactly 1: Σp(x) = 1.' },
      { n: 3, f: 'p(0) = 0.1, p(1) = 0.3, p(2) = k and p(3) = 0.35. Find k', b: 'k = 1 − (0.1 + 0.3 + 0.35) = 0.25.' },
      { n: 4, f: 'A box has 4 red and 6 blue pens. Two are taken without replacement. Find the distribution of X, the number of red pens', b: 'p(0) = 6/10 × 5/9 = 1/3.\np(1) = 2 × (4/10 × 6/9) = 8/15.\np(2) = 4/10 × 3/9 = 2/15.\nCheck: 5/15 + 8/15 + 2/15 = 1.' },
      { n: 5, f: 'How do you find two unknown probabilities when E(X) is given?', b: 'Form one equation from Σp(x) = 1 and another from Σxp(x) = E(X), then solve them together.\nExample: p(1) = 0.15, p(2) = a, p(3) = b, p(4) = 0.25, E(X) = 2.7 → a = 0.25, b = 0.35.' },
    ]),
    ...sub(T12, 'expectation-4040', '12.2', [
      { n: 1, f: 'How do you calculate E(X), and what is the common mistake?', b: 'E(X) = Σ x p(x): multiply each value by its probability and add. Do not divide by the number of values; E(X) is weighted by the probabilities.' },
      { n: 2, f: 'What is E(aX + b), and does the rule work for E(X²)?', b: 'E(aX + b) = aE(X) + b. It holds only for straight-line functions: E(X²) = Σx²p(x), which is not the same as [E(X)]².' },
      { n: 3, f: 'p(1) = 0.4, p(2) = 0.35, p(3) = 0.25. Find E(X), E(X²) and E(3X − 1)', b: 'E(X) = 0.4 + 0.70 + 0.75 = 1.85.\nE(X²) = 0.4 + 1.40 + 2.25 = 4.05.\nE(3X − 1) = 3 × 1.85 − 1 = 4.55.' },
      { n: 4, f: 'Stake Rs 3. A fair 1–5 spinner pays Rs 10 for a 5 and Rs 4 for a 4. Find the expected net gain', b: 'E(received) = 10 × 1/5 + 4 × 1/5 = 2.8. Expected net gain = 2.8 − 3 = −Rs 0.20 per play, an expected loss of Rs 30 over 150 plays.' },
      { n: 5, f: 'What is a fair game?', b: 'One where the expected net gain is zero, so the stake equals the expected amount received.\nExample: Rs 1 to roll a die, prize for a 6 → the game is fair if the prize is Rs 6.' },
      { n: 6, f: 'A raffle of 500 tickets has prizes totalling Rs 500. What ticket price makes it fair?', b: 'Expected prize per ticket = 500 ÷ 500 = Rs 1, so a Rs 1 ticket is fair. At Rs 1.50 the organiser expects Rs 0.50 per ticket.' },
    ]),
  ],
};
