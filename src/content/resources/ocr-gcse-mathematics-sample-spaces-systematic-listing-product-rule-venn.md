---
title: "OCR GCSE Mathematics: Sample spaces, systematic listing, product rule, Venn diagrams and sets (J560)"
seoTitle: "OCR GCSE Maths Sample Spaces, Listing and Venn Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["gcse"]
topic: "Sample spaces, systematic listing, product rule, Venn diagrams and sets"
boards: ["ocr"]
qualifications: ["gcse"]
syllabusCodes: ["J560"]
syllabusSeries: "Version 2.1 (August 2026), for first assessment in 2017"
order: 68
syllabusTopics:
  - qualification: "gcse"
    topic: "probability-ocr-gcse-maths"
    subtopic: "combined-events-and-probability-diagrams-ocr-gcse-maths"
description: "A study guide to sample spaces, systematic listing, the product rule and Venn diagrams for OCR GCSE Mathematics J560, with fully worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This study guide is written for OCR GCSE (9-1) Mathematics J560, using the specification Version 2.1 (August 2026). It covers sections 11.02a, 11.02b and 11.02c: sample spaces, systematic listing, the product rule for counting, and Venn diagrams and sets. Most of the content is for both tiers. Anything that is Higher tier only is labelled "Higher tier only". Use the [OCR GCSE Mathematics hub](/boards/ocr/gcse/mathematics/) and the [checklist](/checklists/ocr/gcse/mathematics/) to see where this fits, and take a [10-minute diagnostic](/diagnostics/) to find your weak spots.

Tree diagrams and the addition and multiplication laws are separate sections of the specification and are not taught here.

## What this unit covers

| Section | What you must be able to do | Tier |
|---|---|---|
| 11.02a | Use tables and grids to list outcomes of single events and simple combinations, and find theoretical probabilities | Both |
| 11.02a | Use sample spaces for more complex combinations, such as the sum of two dice or two spinners | Both |
| 11.02a | Recognise when a sample space is the best form for a complex problem; choose diagrams for unstructured questions | Higher tier only |
| 11.02b | Use systematic listing strategies | Both |
| 11.02b | Use the product rule to count outcomes of combined events | Higher tier only |
| 11.02c | Use a two-circle Venn diagram to enumerate sets and find related probabilities; use simple set notation | Both |
| 11.02c | Construct a Venn diagram to classify outcomes; use set notation to describe a set of numbers or objects (set-builder notation) | Both |
| 11.02c | Use tree diagrams, two-way tables or Venn diagrams for more complex problems, including conditional probability, when no structure is given | Higher tier only |

The specification says that knowledge of intersection, union and complement symbols is not required, so none are used on this page. Describe regions in words instead.

## Sample spaces (11.02a)

A **sample space** is the complete list of possible outcomes. When outcomes are equally likely:

```
probability = number of favourable outcomes / total number of outcomes
```

For one event, a short list is enough. For two events, a table or grid keeps the list organised so that nothing is missed or counted twice.

### Two coins

Listing every outcome of flipping two fair coins gives HH, HT, TH, TT. There are 4 outcomes, so P(exactly one head) = 2/4 = 1/2. Notice that HT and TH are different outcomes. Treating them as one is a very common error.

### Orders of E, F and G

Write the letters in a systematic order, holding the first letter fixed:

```
EFG  EGF
FEG  FGE
GEF  GFE
```

There are 6 orders. If one is chosen at random, P(F is in the middle) = 2/6 = 1/3, because F is the middle letter in exactly two orders, EFG and GFE.

### Two spinners (both tiers)

Spinner A has the numbers 1, 2, 3, 4 and spinner B has 2, 4, 6. Both are fair. The score is the sum of the two numbers.

**Worked example 1.** Find the probability that the score is at least 8, and the probability that it is even.

Build a grid with spinner A down the side and spinner B across the top, and fill in each sum.

| A \ B | 2 | 4 | 6 |
|---|---|---|---|
| 1 | 3 | 5 | 7 |
| 2 | 4 | 6 | 8 |
| 3 | 5 | 7 | 9 |
| 4 | 6 | 8 | 10 |

There are 4 × 3 = 12 outcomes. The scores of at least 8 are 8, 9, 8 and 10, which is 4 outcomes, so the probability is 4/12 = 1/3. The even scores are 4, 6, 8, 6, 8 and 10, which is 6 outcomes, so the probability is 6/12 = 1/2.

### Two dice and a difference

**Worked example 2.** Two fair six-sided dice are rolled. The score is the positive difference between the numbers. Find the probability that the score is at least 3.

A 6 × 6 grid has 36 cells. Fill each cell with the larger number minus the smaller.

| | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| 1 | 0 | 1 | 2 | 3 | 4 | 5 |
| 2 | 1 | 0 | 1 | 2 | 3 | 4 |
| 3 | 2 | 1 | 0 | 1 | 2 | 3 |
| 4 | 3 | 2 | 1 | 0 | 1 | 2 |
| 5 | 4 | 3 | 2 | 1 | 0 | 1 |
| 6 | 5 | 4 | 3 | 2 | 1 | 0 |

Count the cells showing 3 or more: the score 3 appears 6 times, 4 appears 4 times and 5 appears 2 times, which is 12 cells. The probability is 12/36 = 1/3.

### Higher tier only: choosing the sample space

**Higher tier only.** Some questions do not say how to organise the working. Ask yourself: are there two or more stages, and are the outcomes of each stage equally likely? If yes, a grid or list of all outcomes is usually the safest route. If a question gives group sizes and overlaps, a Venn diagram or two-way table is usually better (see below). If you are unsure, sketch the simplest diagram that holds all the given information and see whether the missing value drops out.

## Systematic listing and the product rule (11.02b)

A **systematic list** follows a fixed pattern, for example alphabetical or numerical order, or "first item fixed, then vary the second". It makes missing items obvious.

**Worked example 3.** The digits 2, 5 and 8 are each used once to make a three-digit number. List all the numbers. How many are greater than 500?

Fix the first digit, then swap the other two:

```
258  285
528  582
825  852
```

There are 6 numbers. Those greater than 500 start with 5 or 8: 528, 582, 825, 852. That is 4 numbers.

**Worked example 4.** A fair coin is flipped three times. Find the probability of exactly two heads.

List by the position of the tail, or by number of heads: HHH, HHT, HTH, THH, HTT, THT, TTH, TTT. That is 8 outcomes. Exactly two heads: HHT, HTH, THH. The probability is 3/8.

### Product rule (Higher tier only)

**Higher tier only.** If one choice can be made in m ways and a second, independent choice in n ways, there are m × n ways to make both. Extend to more stages by multiplying all the numbers.

When a choice cannot be repeated, the number of options falls at each stage.

**Worked example 5.** A meal has a starter from 4, a main course from 5 and a dessert from 3. How many different meals are there?

4 × 5 × 3 = **60**.

**Worked example 6.** A code is two letters chosen from A to F (letters may repeat), followed by three digits from 0 to 9 (digits may repeat).

(a) How many codes are there? 6 × 6 × 10 × 10 × 10 = **36 000**.

(b) How many codes have two different letters? 6 × 5 × 10 × 10 × 10 = **30 000**.

(c) A code is chosen at random. The probability that it is one particular code is 1/36 000.

**Worked example 7.** Six runners are in a race. In how many ways can the first three places be filled?

The winner can be any of 6, the second place any of the remaining 5, third place any of the remaining 4: 6 × 5 × 4 = **120**.

## Venn diagrams and sets (11.02c)

### Set notation

A **set** is a collection of objects, written inside curly brackets. Examples from the specification style:

- A = {even numbers}
- B = {mathematics learners}
- C = {isosceles triangles}

**Set-builder notation** describes the members by a rule. The vertical bar means "such that".

- D = {x | 1 < x < 3} reads "D is the set of x such that x is greater than 1 and less than 3".
- E = {x | x is a factor of 30}, which is {1, 2, 3, 5, 6, 10, 15, 30}.
- F = {x | 2 ≤ x < 7, x is an integer} = {2, 3, 4, 5, 6}.

Say what type of number x is. D above contains every real number between 1 and 3 unless the question says "x is an integer", in which case D = {2}.

### Drawing a two-circle Venn diagram

Draw a rectangle for everything being considered. Draw two circles that overlap. The overlap holds items in both sets. Always fill in the overlap first, then the parts of each circle outside it, then the number outside both circles. The total of all four numbers must equal the size of the group.

**Worked example 8.** Of 40 learners, 24 take music, 17 take art and 9 take both. Draw the Venn diagram and find the probability that a learner chosen at random takes art only.

Overlap (both) = 9. Music only = 24 − 9 = 15. Art only = 17 − 9 = 8. Neither = 40 − (15 + 9 + 8) = 8.

```
Music only: 15 | Both: 9 | Art only: 8 | Neither: 8   (total 40)
```

P(art only) = 8/40 = 1/5.

**Worked example 9.** Sort the whole numbers 1 to 20 by A = {multiples of 3} and B = {even numbers}.

Multiples of 3 are 3, 6, 9, 12, 15, 18. Even numbers are 2, 4, ..., 20 (10 numbers). In both: 6, 12, 18.

| Region | Numbers | Count |
|---|---|---|
| A only | 3, 9, 15 | 3 |
| Both | 6, 12, 18 | 3 |
| B only | 2, 4, 8, 10, 14, 16, 20 | 7 |
| Neither | 1, 5, 7, 11, 13, 17, 19 | 7 |

The counts total 20. P(neither) = 7/20.

### Higher tier only: more complex problems and conditional probability

**Higher tier only.** The specification says the structure of the diagram may not be given. You choose a Venn diagram, a two-way table or a tree diagram. A **conditional probability** is the probability of an outcome given that another is already known. Knowing the condition shrinks the group you are choosing from: the new "total" is the size of the group named after "given that".

**Worked example 10.** 90 students are sorted by year and by how they travel. 48 are in Year 10 and 42 in Year 11. 36 travel by bus, of whom 20 are in Year 10.

| | Bus | Other | Total |
|---|---|---|---|
| Year 10 | 20 | 28 | 48 |
| Year 11 | 16 | 26 | 42 |
| Total | 36 | 54 | 90 |

(a) A bus traveller is chosen. P(Year 10 given bus) = 20/36 = 5/9.

(b) A Year 11 student is chosen. P(bus given Year 11) = 16/42 = 8/21.

**Worked example 11.** Of 60 learners, 35 study French, 28 study Spanish and 12 study neither. Find the probability that a Spanish learner also studies French.

Learners studying at least one language: 60 − 12 = 48. Both = 35 + 28 − 48 = 15. French only = 20, Spanish only = 13. The group is the 28 Spanish learners, 15 of whom study French, so the probability is 15/28.

## Common errors

- Counting HT and TH as one outcome, or leaving out repeated cells such as 3 and 3 on a grid.
- Using a grid of the wrong size, for example 6 + 6 = 12 cells instead of 6 × 6 = 36.
- Putting the "both" number in only one circle and then double-counting it.
- Forgetting the number outside both circles.
- Giving a conditional probability over the whole group instead of the named group.
- Using the product rule when a choice cannot repeat and not reducing the options.

## Next steps

Work through the [revision notes](/resources/ocr-gcse-mathematics-sample-spaces-systematic-listing-product-rule-venn-revision-notes/) for the condensed version and the [practice questions](/resources/ocr-gcse-mathematics-sample-spaces-systematic-listing-product-rule-venn-practice/) to test yourself.

## Official syllabus

OCR GCSE (9-1) Mathematics J560, Version 2.1 (August 2026), first assessment 2017, published by OCR.
