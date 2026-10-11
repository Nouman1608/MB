---
title: "OCR GCSE Mathematics: Sample spaces, systematic listing, product rule, Venn diagrams and sets (J560) -- Revision Notes"
seoTitle: "OCR GCSE Maths Sample Spaces and Venn Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on sample spaces, systematic listing, the product rule, Venn diagrams and set notation for OCR GCSE Mathematics J560."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These revision notes cover sections 11.02a, 11.02b and 11.02c of the OCR GCSE (9-1) Mathematics J560 specification, Version 2.1 (August 2026): sample spaces, systematic listing, the product rule, and Venn diagrams and sets. For full explanations and longer worked examples, read the [study guide](/resources/ocr-gcse-mathematics-sample-spaces-systematic-listing-product-rule-venn/). Content marked "Higher tier only" is for Higher tier candidates; everything else is for both tiers. See the [OCR GCSE Mathematics hub](/boards/ocr/gcse/mathematics/) and the [checklist](/checklists/ocr/gcse/mathematics/). To find weak areas first, try the [10-minute diagnostics](/diagnostics/).

## Key ideas at a glance

| Term | Meaning |
|---|---|
| Outcome | One possible result of an event |
| Sample space | The complete list of outcomes, in a list, table or grid |
| Systematic listing | Listing in a fixed pattern so that nothing is missed or repeated |
| Product rule (Higher tier only) | Multiply the number of options at each stage |
| Set | A collection of objects, written in curly brackets |
| Set-builder notation | A rule for the members, for example the set of x such that x is a factor of 30 |
| Venn diagram | A rectangle with overlapping circles that sorts items by properties |
| Conditional probability (Higher tier only) | Probability of one outcome given that another has happened |

The specification says knowledge of intersection, union and complement symbols is not required. Describe regions in words.

## Sample spaces (11.02a)

**Method**

1. Decide what the stages are (two coins, two dice, two spinners).
2. Write a list for one stage across the top and the other down the side.
3. Fill each cell with the outcome or the score asked for.
4. Count all cells (the total) and the cells that match.
5. Write the probability as matching / total and simplify.

**Reminders**

- Two coins: HH, HT, TH, TT. HT and TH are different outcomes.
- Orders of E, F and G: EFG, EGF, FEG, FGE, GEF, GFE. That is 6.
- Two six-sided dice give 36 outcomes. The totals occur this many times:

| Total | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Ways | 1 | 2 | 3 | 4 | 5 | 6 | 5 | 4 | 3 | 2 | 1 |

- For two spinners, the number of cells is the number of sections on one spinner multiplied by the number on the other.

**Higher tier only.** Recognise when a sample space is the best form for a complex problem, and choose appropriate diagrams for unstructured questions where the route is not obvious. A grid suits two equally likely stages. A Venn diagram or two-way table suits group counts with overlaps.

**Worked reminder.** A fair spinner has 1, 3, 5 and a second fair spinner has 2, 4, 6, 8. Find P(the product is greater than 20).

The grid has 3 × 4 = 12 cells. Products: 1 gives 2, 4, 6, 8. 3 gives 6, 12, 18, 24. 5 gives 10, 20, 30, 40. Products greater than 20: 24, 30, 40. That is 3 out of 12, so the probability is 1/4.

## Systematic listing and the product rule (11.02b)

**Systematic listing strategy**

- Choose an order (alphabetical, numerical, or "first item fixed").
- Hold the first item fixed and vary the rest. Then change the first item.
- Count the list and check the count another way if you can.

**Product rule (Higher tier only)**

```
number of ways = (choices at stage 1) × (choices at stage 2) × ...
```

- Choices that may repeat keep the same number at each stage.
- Choices that may not repeat reduce by 1 each stage.
- To find a probability of one particular outcome, use 1 divided by the total number of outcomes.

| Situation | Calculation | Result |
|---|---|---|
| 3 starters, 4 mains, 2 drinks | 3 × 4 × 2 | 24 |
| 5 runners, first three places | 5 × 4 × 3 | 60 |
| PIN of 4 digits, repeats allowed | 10 × 10 × 10 × 10 | 10 000 |
| PIN of 4 digits, no repeats | 10 × 9 × 8 × 7 | 5 040 |

**Worked reminder (Higher tier only).** A locker code is one letter from A to D followed by two digits, and digits may repeat. There are 4 × 10 × 10 = 400 codes. If codes are chosen at random, the probability of the code B07 is 1/400. If the two digits must be different, there are 4 × 10 × 9 = 360 codes.

## Sets and Venn diagrams (11.02c)

**Set notation**

- A = {even numbers} names a set by description.
- A list such as {2, 4, 6} names a set by its members.
- Set-builder notation uses a bar for "such that": D = {x | 1 < x < 3}.
- Always say what type of number x is. If x is an integer and D = {x | 1 < x < 3}, then D = {2}.
- G = {x | x is an integer, −2 < x ≤ 3} = {−1, 0, 1, 2, 3}. Note that −2 is excluded and 3 is included.

**Filling a two-circle Venn diagram: method in steps**

1. Fill the overlap first (items in both sets).
2. Subtract the overlap from each set total to find the "only" parts.
3. Subtract all three numbers from the group total to find the number outside both circles.
4. Check that the four regions add up to the group total.
5. For a probability, use the relevant region divided by the group total.

**Worked reminder.** 30 learners: 18 play hockey, 12 play netball, 5 play both.

| Region | Working | Number |
|---|---|---|
| Both | given | 5 |
| Hockey only | 18 − 5 | 13 |
| Netball only | 12 − 5 | 7 |
| Neither | 30 − (13 + 5 + 7) | 5 |

P(hockey only) = 13/30. P(neither) = 5/30 = 1/6.

**Higher tier only: conditional probability.** The condition reduces the group. For "given that", the denominator is the size of the group named in the condition.

From the table above: P(plays hockey given plays netball) = 5/12, because 5 of the 12 netball players also play hockey.

**Two-way tables (Higher tier only).** Fill the totals first, then work out the missing cells by subtraction. Check that rows and columns each add to the correct total.

**Worked reminder with set-builder notation.** Let H = {x | x is a whole number from 1 to 12} and let K = {x | x is a factor of 12}. Then K = {1, 2, 3, 4, 6, 12}, which is 6 of the 12 members of H. A whole number picked at random from H is in K with probability 6/12 = 1/2.

## Must-know distinctions

- Total of a set versus "only" part of a set: 18 hockey players includes the 5 who also play netball.
- P(A and B) over the whole group versus P(A given B) over group B only.
- Outcomes (equally likely cells) versus scores (the values written in cells). Probabilities are based on counting cells.
- Listing with repeats allowed versus not allowed.

## Quick self-test

1. A coin is flipped and a fair six-sided die is rolled. How many outcomes are there, and what is P(head and a 6)?
2. How many different orders can the letters M, N and O be written in?
3. Two fair dice are rolled and the numbers added. Find P(total of 9).
4. (Higher tier only) A café offers 3 starters, 4 mains and 2 drinks. How many different meals with one of each?
5. (Higher tier only) Five runners race. In how many ways can first, second and third be filled?
6. (Higher tier only) How many four-digit PINs are there if no digit may be repeated?
7. List the members of G = {x | x is an integer, −2 < x ≤ 3}.
8. Of 30 learners, 18 play hockey, 12 play netball and 5 play both. How many play neither?
9. For the same group, find P(plays hockey only).
10. (Higher tier only) For the same group, find P(plays hockey given plays netball).

### Answers

1. 12 outcomes; P = 1/12.
2. 6 orders.
3. 4 ways out of 36, so 4/36 = 1/9.
4. 3 × 4 × 2 = 24.
5. 5 × 4 × 3 = 60.
6. 10 × 9 × 8 × 7 = 5 040.
7. {−1, 0, 1, 2, 3}.
8. 5 learners.
9. 13/30.
10. 5/12.

## Where marks are usually lost

- Writing only part of the sample space, then giving a total that is too small.
- Treating HT and TH as the same outcome.
- Counting the score instead of the number of cells, for example 7 as one outcome instead of six cells.
- Not simplifying a probability, or leaving it as a ratio such as 4:36.
- Subtracting the overlap twice, or forgetting to subtract it at all, in a Venn diagram.
- Leaving out the number outside both circles.
- Using the group total as the denominator for a conditional probability.
- Using 10 × 10 × 10 × 10 when repeats are not allowed.
- Giving set notation without saying whether x is an integer.

## Next steps

Test yourself with the [practice questions](/resources/ocr-gcse-mathematics-sample-spaces-systematic-listing-product-rule-venn-practice/), and return to the [study guide](/resources/ocr-gcse-mathematics-sample-spaces-systematic-listing-product-rule-venn/) for anything unclear.

## Official syllabus

OCR GCSE (9-1) Mathematics J560, Version 2.1 (August 2026), first assessment 2017, published by OCR.
