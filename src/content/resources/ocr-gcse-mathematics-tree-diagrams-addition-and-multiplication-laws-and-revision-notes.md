---
title: "OCR GCSE Mathematics: Tree diagrams and probability laws (J560) -- Revision Notes"
seoTitle: "OCR GCSE Maths Tree Diagrams Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["gcse"]
topic: "Tree diagrams, addition and multiplication laws, and conditional probability"
boards: ["ocr"]
qualifications: ["gcse"]
syllabusCodes: ["J560"]
syllabusSeries: "Version 2.1 (August 2026), for first assessment in 2017"
order: 69
syllabusTopics:
  - qualification: "gcse"
    topic: "probability-ocr-gcse-maths"
    subtopic: "combined-events-and-probability-diagrams-ocr-gcse-maths"
description: "Condensed revision notes on tree diagrams, the addition and multiplication laws and conditional probability for OCR GCSE (9-1) Mathematics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These are condensed notes for OCR GCSE (9-1) Mathematics (J560), Version 2.1 (August 2026), content references 11.02d to 11.02f. Read the [study guide](/resources/ocr-gcse-mathematics-tree-diagrams-addition-and-multiplication-laws-and/) for full explanations and worked examples, and use the [practice questions](/resources/ocr-gcse-mathematics-tree-diagrams-addition-and-multiplication-laws-and-practice/) afterwards. Everything is for both tiers unless it is marked **Higher tier only**. Course pages: [OCR GCSE Mathematics hub](/boards/ocr/gcse/mathematics/), [checklist](/checklists/ocr/gcse/mathematics/) and the [free diagnostics](/diagnostics/).

## Key results

| Result | Meaning | Tier |
|---|---|---|
| p(A) + p(not A) = 1 | An event happens or it does not | Both |
| p(A or B) = p(A) + p(B) | A and B mutually exclusive | Both |
| p(A or B) = p(A) + p(B) - p(A and B) | General addition law | Both |
| p(A and B) = p(A) × p(B) | A and B independent | Both |
| p(A and B) = p(A given B) × p(B) | Multiplication law with conditional probability | Higher tier only |
| p(A given B) = p(A) | A and B independent, if and only if | Higher tier only |

## Definitions to know

- **Mutually exclusive:** the events cannot happen together on one trial, so p(A and B) = 0.
- **Independent:** the outcome of one event does not change the probability of the other.
- **Dependent:** the outcome of one event changes the probability of the other.
- **p(A given B)** (Higher tier only): the probability of A when you know B has happened.

## Method: drawing and using a tree diagram

```
1. Draw one set of branches per stage.
2. Put a probability on every branch. Branches from one point sum to 1.
3. For dependent events, change the second-stage numbers to match the first result.
4. Multiply along each route.
5. Add the routes that give the outcome you want.
6. Check that all the route probabilities add to 1.
```

If a tree frame is already printed, fill in the missing branch probabilities first. Then answer the question in the same way.

## Method: "at least one"

```
p(at least one) = 1 - p(none)
```

Work out the single route where nothing happens and subtract from 1. This is quicker than adding many routes, especially with three or more stages.

## Independent or dependent? Spot the wording

| Wording | Type | What changes |
|---|---|---|
| "with replacement", "puts it back" | Independent | Nothing; same numbers at each stage |
| "without replacement", "keeps it" | Dependent | Denominator drops by 1; the counted item may drop by 1 |
| "separate dice", "different days, unrelated" | Independent | Nothing |
| "if it is wet the first day, the chance becomes..." | Dependent | Second-stage probabilities differ |

## Worked reminders

**Mutually exclusive.** A spinner lands on A with probability 0.3 and on B with probability 0.45. It cannot land on both.

```
p(A or B) = 0.3 + 0.45 = 0.75
p(neither) = 1 - 0.75 = 0.25
```

**Overlapping events.** p(A) = 0.5, p(B) = 0.2, p(A and B) = 0.1.

```
p(A or B) = 0.5 + 0.2 - 0.1 = 0.6
```

**Independent tree.** A plant seed germinates with probability 0.9. A second, unrelated seed germinates with probability 0.5.

```
p(both) = 0.9 × 0.5 = 0.45
```

**Dependent tree.** A bag holds 3 red and 5 blue discs. Two are taken without replacement.

```
p(both red) = 3/8 × 2/7 = 6/56 = 3/28
p(no red)   = 5/8 × 4/7 = 20/56 = 5/14
p(at least one red) = 1 - 5/14 = 9/14
```

**Higher tier only: conditional probability.** A fair eight-sided die is rolled. Find p(odd given the score is greater than 4).

```
Greater than 4: 5, 6, 7, 8 (4 outcomes)
Odd among these: 5, 7 (2 outcomes)
p(odd given greater than 4) = 2/4 = 1/2
```

**Higher tier only: using the formula.** p(B) = 0.35 and p(A and B) = 0.14.

```
p(A given B) = p(A and B) ÷ p(B) = 0.14 ÷ 0.35 = 0.4
```

**Higher tier only: independence test.** p(A) = 0.2, p(B) = 0.5, p(A and B) = 0.1.

```
p(A) × p(B) = 0.2 × 0.5 = 0.1 = p(A and B)
```

The product equals p(A and B), so A and B are independent. Checking p(A given B) = 0.1 ÷ 0.5 = 0.2 = p(A) gives the same conclusion.

**Completing a partly filled frame.** A two-stage tree for a goalkeeper saving penalties shows p(save) = 0.35 on the first stage but leaves the "no save" branch blank. The second stage shows 0.35 on "save" and a blank beside it.

```
Blank first branch  = 1 - 0.35 = 0.65
Blank second branch = 1 - 0.35 = 0.65
p(save, then no save) = 0.35 × 0.65 = 0.2275
```

The repeated 0.35 tells you the two attempts are treated as independent.

**Higher tier only: conditional probability from a tree.** In the bag of 3 red and 5 blue discs, find the probability that the first disc was red, given that exactly one of the two discs is red.

```
RB: 3/8 × 5/7 = 15/56
BR: 5/8 × 3/7 = 15/56
p(exactly one red) = 30/56
p(first red given exactly one red) = 15/56 ÷ 30/56 = 1/2
```

## Quick check before you hand in

- Does every set of branches from one point add to 1?
- Does each route probability come from multiplying along?
- Do all the route probabilities add to 1?
- Did you add only the routes that match the wording?
- Is the answer in the form asked for, with units or accuracy if required?

## Must-know distinctions

- **Mutually exclusive is not the same as independent.** Mutually exclusive events cannot both happen, so knowing one happened tells you the other did not. That is a strong link, not independence.
- **Multiply along, add across.** "And" for successive events means multiply. "Or" for different routes means add.
- **p(A given B) is not p(B given A).** Use the group named after "given" as the denominator.
- **With replacement versus without.** The tree has the same shape; only the second-stage numbers differ.

## Quick self-test

1. A bus is late with probability 0.27. Find the probability it is not late.
2. Seed X germinates with probability 0.9 and seed Y, independently, with probability 0.5. Find p(both germinate).
3. A bag has 3 red and 5 blue discs. Two are taken without replacement. Find p(both red).
4. For the same bag, find p(at least one red).
5. p(A) = 0.5, p(B) = 0.2, p(A and B) = 0.1. Find p(A or B).
6. A fair coin is tossed three times. Find p(at least one head).
7. A fair eight-sided die is rolled. A branch on a tree shows "6 or more". Write down the branch probability and the probability of the opposite branch.
8. (Higher tier only) A fair eight-sided die is rolled. Find p(odd given the score is greater than 4).
9. (Higher tier only) p(A) = 0.5 and p(B) = 0.4 are independent. Find p(A and B).
10. (Higher tier only) p(B) = 0.35 and p(A and B) = 0.14. Find p(A given B).
11. (Higher tier only) p(A) = 0.2, p(B) = 0.5, p(A and B) = 0.1. Are A and B independent? Give a reason.

### Answers

1. 1 - 0.27 = 0.73
2. 0.9 × 0.5 = 0.45
3. 3/8 × 2/7 = 3/28
4. 1 - 5/8 × 4/7 = 1 - 5/14 = 9/14
5. 0.5 + 0.2 - 0.1 = 0.6
6. 1 - (1/2)³ = 1 - 1/8 = 7/8
7. "6 or more" is 6, 7, 8, so 3/8. The opposite branch is 5/8.
8. 2/4 = 1/2
9. 0.5 × 0.4 = 0.2
10. 0.14 ÷ 0.35 = 0.4
11. Yes. p(A) × p(B) = 0.2 × 0.5 = 0.1 = p(A and B). Equivalently p(A given B) = 0.1 ÷ 0.5 = 0.2 = p(A).

## Where marks are usually lost

- Writing branch probabilities that do not sum to 1 at a point on the tree.
- Using the same denominator at both stages in a without-replacement question.
- Adding along the branches instead of multiplying.
- Multiplying across when you needed to add two separate routes.
- Adding p(A) and p(B) without subtracting p(A and B) when the events overlap.
- Missing one route when an event can happen in more than one way, such as "one of each" in either order.
- Leaving an answer unsimplified or as an unrounded decimal when the question asks for a fraction or a stated accuracy.
- Using the total as the denominator in a conditional probability instead of the group after "given".
- Starting a long "at least one" question by listing every route instead of using 1 - p(none).
- Stating that two events are independent without showing the comparison in a test.

## Official syllabus

OCR GCSE (9-1) Mathematics (J560), Version 2.1 (August 2026), for first assessment in 2017, published by OCR. Content references 11.02d, 11.02e and 11.02f.
