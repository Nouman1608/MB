---
title: "Cambridge O Level Statistics (4040): Linear transformation of data to a given mean and standard deviation"
resourceType: "study-guides"
subject: "statistics"
level: ["o-levels"]
topic: "Topic 6 – Transformations involving mean and standard deviation"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4040"]
syllabusSeries: "For examination in 2025-2027"
order: 6.2
syllabusTopics:
  - qualification: "o-level"
    topic: "transformations-involving-mean-and-standard-deviation-4040"
    subtopic: "linear-transformation-to-given-mean-and-sd-4040"
description: "How to rescale data to a required mean and standard deviation with y = a + bx, compare scores on different tests and work backwards, for O Level Statistics 4040."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into section 6.2 of the Cambridge O Level Statistics (4040) syllabus for examination in 2025, 2026 and 2027: "linear transformation of data to a given mean and standard deviation". It builds on section 6.1, the effect of adding a constant and multiplying by a constant, which is covered with the basic two-step method in the [topic 6 study guide on constants and transformations](/resources/cambridge-o-level-statistics-effects-of-adding-or-multiplying-by-a-constant-and/). Here the focus is on the question types that go beyond a single "find a and b": comparing performances on different tests, starting from Σx and Σx², working backwards from scaled values, and judging whether a transformation makes sense. Condensed recall is in the [revision notes](/resources/cambridge-o-level-statistics-4040-linear-transformation-to-given-mean-and-sd-revision-notes/) and exam-style questions are in the [practice questions](/resources/cambridge-o-level-statistics-4040-linear-transformation-to-given-mean-and-sd-practice/).

Standard deviations on this page use the population form, dividing by n, as the 4040 syllabus pages on this site do.

## What section 6.2 asks you to do

A typical question gives you the mean x̄ and standard deviation s of some data (or enough to find them) and a target mean M and target standard deviation S. You must find constants a and b so that y = a + bx has mean M and standard deviation S, then use the rule on individual values.

The two facts from 6.1 do all the work:

| Quantity | Under y = a + bx |
|---|---|
| New mean | a + b x̄ |
| New standard deviation | \|b\| × s |
| New variance | b² × s² |

Because the standard deviation involves only b, you find b first:

```
b = S ÷ s
a = M − b x̄
```

## The same rule in "deviation" form

Substituting a = M − b x̄ into y = a + bx gives

```
y = M + (S ÷ s)(x − x̄)
```

Rearranged, this says

```
(y − M) ÷ S = (x − x̄) ÷ s
```

Both sides measure how many standard deviations a value lies above or below its own mean. This number is called a **standardised score**. A linear transformation with positive b keeps every value's standardised score unchanged; it only relabels the scale. That is why it is used to put marks from different tests on a common footing, and it is the reason a scaled mark can be interpreted: a scaled mark of M + S always means "one standard deviation above average", whatever the original test.

The deviation form is often quicker when you only need the scaled value of one or two marks, because you never write down a.

## Worked example 1: comparing performances on two tests

Amina sits two tests. On Test A the class mean is 56 and the standard deviation is 8; she scores 64. On Test B the mean is 48 and the standard deviation is 12; she scores 62. Both tests are to be scaled to mean 50 and standard deviation 10. On which test did she do better, relative to the class?

```
Test A:  b = 10 ÷ 8 = 1.25
         a = 50 − 1.25 × 56 = 50 − 70 = −20
         y = 1.25x − 20,   Amina: 1.25 × 64 − 20 = 60

Test B:  b = 10 ÷ 12 = 0.8333...
         a = 50 − (5/6) × 48 = 50 − 40 = 10
         y = 10 + (5/6)x,  Amina: 10 + (5/6) × 62 = 61.7 (3 s.f.)
```

Her raw mark was higher on Test A, but her scaled mark is higher on Test B (61.7 against 60), so she did relatively better on Test B. The standardised scores confirm it: (64 − 56) ÷ 8 = 1.00 and (62 − 48) ÷ 12 = 1.17.

An answer to "on which test did she do better?" needs the comparison figures and a sentence linking them to the class: "61.7 > 60, so relative to the other candidates she performed better on Test B."

## Worked example 2: starting from summary totals

A set of 20 marks has Σx = 860 and Σx² = 38 260. The marks are to be transformed to have mean 70 and standard deviation 12.

First find the original mean and standard deviation.

```
x̄ = 860 ÷ 20 = 43
variance = Σx² ÷ n − x̄² = 38 260 ÷ 20 − 43² = 1913 − 1849 = 64
s = √64 = 8
```

Then transform.

```
b = 12 ÷ 8 = 1.5
a = 70 − 1.5 × 43 = 70 − 64.5 = 5.5
y = 5.5 + 1.5x
```

A raw mark of 35 becomes 5.5 + 1.5 × 35 = 58. To find which raw mark becomes 85, reverse the rule: x = (85 − 5.5) ÷ 1.5 = 53.

Notice that 35 is one standard deviation below the old mean (43 − 8) and 58 is one standard deviation below the new mean (70 − 12). Checking one value like this catches most slips in a.

## Worked example 3: working backwards to the original data

Scores x are transformed by y = a + bx. A score of 40 becomes 55 and a score of 60 becomes 80. The transformed scores have mean 70 and standard deviation 15. Find a and b, and the mean and standard deviation of the original scores.

Two values give two equations:

```
a + 40b = 55
a + 60b = 80
Subtract: 20b = 25, so b = 1.25, then a = 55 − 50 = 5
```

Now reverse the mean and standard deviation results:

```
70 = 5 + 1.25 x̄   →   x̄ = 65 ÷ 1.25 = 52
15 = 1.25 s        →   s = 15 ÷ 1.25 = 12
```

The constant a is not used when recovering s. Dividing (15 − 5) by 1.25 is a common error.

## When a transformation gives values that make no sense

The algebra always works, but the results must still be read in context. Suppose marks out of 50 have mean 30 and standard deviation 6, and someone wants them rescaled to mean 60 and standard deviation 20.

```
b = 20 ÷ 6 = 10/3,   a = 60 − (10/3) × 30 = −40
A raw 50 becomes −40 + (10/3) × 50 = 126.7
A raw 10 becomes −40 + (10/3) × 10 = −6.7
```

If the scaled marks are meant to be percentages, neither value is possible. A target standard deviation that is large compared with the gap between the target mean and the ends of the scale stretches the extreme marks beyond the scale. A good comment names the impossible value and says why: "a mark of 126.7 exceeds the maximum of 100, so the target standard deviation is too large for these data."

Two other points of interpretation are tested:

- With b > 0 the **order** of candidates is unchanged, so rankings, the median position and which candidate is top all stay the same.
- The **shape** of the distribution is unchanged. Scaling does not make skewed data symmetrical; it shifts and stretches the whole distribution.

## Transforming a frequency distribution

If the data are in a frequency table, transform the values, not the frequencies. Each candidate with raw mark x receives a + bx, so the frequency column is copied across unchanged. The new mean can be found either from the transformed table or from a + b x̄; doing both is a quick check.

## Common mistakes

- Finding a before b. The mean equation contains both unknowns; the standard deviation equation contains only b.
- Dividing the wrong way: b is target sd ÷ original sd, not original ÷ target.
- Using the variance instead of the standard deviation, giving b = 144 ÷ 64 in Worked example 2 rather than 12 ÷ 8.
- Adding or subtracting a when converting a standard deviation.
- Rounding b early. Keep 5/6 as a fraction or the full calculator value until the final line.
- Transforming frequencies as well as values in a table.
- Concluding that the higher raw mark is the better performance without scaling or standardising.

## Exam technique for the command words

- **Find** or **Calculate** a and b: show the equation b = S ÷ s with numbers substituted, then a = M − b x̄. A check line (substituting x̄) costs ten seconds.
- **Show that** a given rule works: substitute the original mean and standard deviation into a + b x̄ and \|b\| s and state that the results equal the targets. Do not just restate the rule.
- **Explain** or **Comment**: link your figures to the context, for example which candidate did better relative to the group, or why a scaled value is impossible.
- **Hence**: use the a and b you have just found; a fresh method may not earn the marks.

## Frequently asked questions

**Does the order of candidates change when marks are scaled?**
No, provided b is positive. Every mark is multiplied by the same positive number and shifted by the same amount, so the ranking is preserved.

**Can I find a and b if I am only given two raw marks and their scaled marks?**
Yes. Each pair gives an equation a + bx = y. Solve the two equations simultaneously, then use the rule to convert means and standard deviations in either direction.

**Why compare scaled marks rather than raw marks?**
Raw marks on different tests have different means and spreads. Scaling both to the same mean and standard deviation compares each candidate's position relative to the group taking that test.

## Official syllabus

Cambridge International, Cambridge O Level Statistics 4040, syllabus for examination in 2025, 2026 and 2027, section 6.2: linear transformation of data to a given mean and standard deviation.
