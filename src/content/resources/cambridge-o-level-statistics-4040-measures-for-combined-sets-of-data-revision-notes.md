---
title: "Cambridge O Level Statistics (4040): Measures for combined sets of data -- Revision Notes"
resourceType: "revision-notes"
subject: "statistics"
level: ["o-levels"]
topic: "Topic 5 – Statistical measures, their interpretation and appropriate use"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4040"]
syllabusSeries: "For examination in 2025-2027"
order: 5.4
syllabusTopics:
  - qualification: "o-level"
    topic: "statistical-measures-interpretation-and-use-4040"
    subtopic: "measures-for-combined-sets-of-data-4040"
description: "Revision notes on combining means and standard deviations in 4040: the totals method, missing values, corrections, exam traps and a self-test with answers."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section 5.4 of the Cambridge O Level Statistics (4040) syllabus for examination in 2025, 2026 and 2027: "Measures for combined sets of data", including calculation of the mean and standard deviation. Worked examples are in the [combined sets study guide](/resources/cambridge-o-level-statistics-4040-measures-for-combined-sets-of-data/), and the [combined sets practice questions](/resources/cambridge-o-level-statistics-4040-measures-for-combined-sets-of-data-practice/) give exam-style drill.

## Key terms

| Term | Meaning |
|---|---|
| Σx | Sum of all values in a group; equals n × mean |
| Σx² | Sum of the squares of all values; equals n × (σ² + mean²) |
| Combined mean | Total Σx ÷ total n; a mean weighted by group size |
| Combined variance | Total Σx² ÷ total n − combined mean² |
| Combined standard deviation | Square root of the combined variance |
| Weighted mean | A mean in which each group mean counts in proportion to its size |

## The method in four lines

```
1. For each group: Σx = n x̄,  Σx² = n(σ² + x̄²)
2. Add the n's, the Σx's and the Σx²'s
3. Combined mean = Σx / n
4. Combined σ = √(Σx²/n − mean²)
```

Lay the work out in a table with columns n, Σx and Σx², and a Total row.

## Worked reminder

Group 1: n = 10, mean 6, σ = 2. Group 2: n = 15, mean 11, σ = 3.

```
Group 1: Σx = 60,  Σx² = 10 × (4 + 36)  = 400
Group 2: Σx = 165, Σx² = 15 × (9 + 121) = 1950
Total:   n = 25,   Σx = 225,  Σx² = 2350
mean = 9;  variance = 94 − 81 = 13;  σ = 3.61
```

The combined σ (3.61) is larger than both group values (2 and 3) because the group means (6 and 11) are far apart.

## Working backwards

| Unknown | Approach |
|---|---|
| A group's mean | Combined Σx − known Σx = unknown Σx; divide by its n |
| A group's size | Write total Σx = combined mean × total n as an equation in n |
| A group's σ | Combined Σx² − known Σx² = unknown Σx²; then σ² = Σx²/n − mean² |
| Values after removing a group | Subtract that group's n, Σx and Σx² |

## Changes to one data set

- **Add values**: add their count, sum and sum of squares.
- **Remove a value v**: n − 1, Σx − v, Σx² − v².
- **Correct a value from a to b**: n unchanged, Σx − a + b, Σx² − a² + b².

**Worked reminder.** 25 values, mean 40, σ = 5; a value 28 should be 53. Σx = 1000 − 28 + 53 = 1025, mean 41. Σx² = 25 × 1625 − 784 + 2809 = 42 650; variance = 1706 − 1681 = 25, σ = 5. The mean rises by 1 and the standard deviation happens to stay the same.

## What can and cannot be combined

- Mean: yes, from n and means.
- Standard deviation: yes, from n, means and σ.
- Range: yes, from the overall smallest and largest values.
- Median, quartiles, mode: no, not from summaries alone.

## Exam traps

- Averaging the means of groups of different sizes.
- Averaging standard deviations or variances.
- Writing Σx² = n(σ + x̄)² or n(σ² + x̄), instead of n(σ² + x̄²).
- Squaring a rounded mean; keep full accuracy.
- Using a group mean in the final variance step instead of the combined mean.
- When correcting a value, changing Σx but forgetting Σx².
- Forgetting that removing a group also changes n.

## Quick self-test

1. 25 boys have mean 62 and 15 girls have mean 70. Find the combined mean.
2. Find Σx² for n = 10, mean 8, σ = 3.
3. Group 1 has 12 values with mean 50; Group 2 has mean 60; the combined mean is 54. How many values are in Group 2?
4. Nine values have mean 20 and σ = 4. A tenth value, 30, is added. Find the new mean.
5. In question 4, find the new standard deviation.
6. Set A ranges from 12 to 40 and Set B from 18 to 47. What is the combined range?
7. Why can two medians not be combined into one median?
8. Group sizes 10, 20, 30 have means 5, 8, 12. Find the combined mean.
9. n = 20, Σx = 300, Σx² = 4580. Find the mean and σ.
10. Which total is unchanged when one value is corrected?
11. A combined group has n = 40, Σx = 1000. A subgroup with n = 10 and mean 19 is removed. Find the mean of those left.
12. Give a reason why a combined σ can exceed both groups' σ.

### Answers

1. (1550 + 1050)/40 = 65.
2. 10 × (9 + 64) = 730.
3. 600 + 60k = 54(12 + k), so 6k = 48 and k = 8.
4. Σx = 210, n = 10, mean 21.
5. Σx² = 9 × 416 + 900 = 4644; variance = 464.4 − 441 = 23.4; σ = 4.84.
6. 47 − 12 = 35.
7. The medians do not show where the other values lie, so the middle of the merged data cannot be found from them.
8. (50 + 160 + 360)/60 = 9.5.
9. Mean 15; variance 229 − 225 = 4; σ = 2.
10. n.
11. (1000 − 190)/30 = 27.
12. The gap between the group means adds spread to the merged data.

## Frequently asked questions

**Why is the combined mean called a weighted mean?**
Each group's mean counts in proportion to its size, so larger groups pull the combined mean towards their own mean.

**Do I need the standard deviation formula with Σx²?**
Yes. Combining is far quicker with Σx² than with deviations from the mean, because totals simply add.

## Official syllabus

Cambridge O Level Statistics (4040), syllabus for examination in 2025, 2026 and 2027, Cambridge University Press & Assessment. Topic 5, section 5.4: Measures for combined sets of data.
