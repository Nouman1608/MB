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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-tree-diagrams-addition-and-multiplication-laws-and--03-addition-law-overlap.webp" width="900" height="810" alt="A Venn diagram of football 0.45 and chess 0.30 with overlap 0.12: football only 0.33, chess only 0.18, neither 0.37. Adding 0.45 and 0.30 counts the overlap twice; subtracting 0.12 gives 0.63." loading="lazy">
  <figcaption>Adding p(A) and p(B) counts the overlap twice, so subtract p(A and B) once.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-tree-diagrams-addition-and-multiplication-laws-and--12-at-least-one-three.webp" width="900" height="834" alt="A three-stage tree with eight routes. Only the route with three failures (0.8 x 0.8 x 0.8 = 0.512) has no success; the other seven total 0.488." loading="lazy">
  <figcaption>For at least one, work out the single route for none and subtract from 1.</figcaption>
</figure>


## Independent or dependent? Spot the wording

| Wording | Type | What changes |
|---|---|---|
| "with replacement", "puts it back" | Independent | Nothing; same numbers at each stage |
| "without replacement", "keeps it" | Dependent | Denominator drops by 1; the counted item may drop by 1 |
| "separate dice", "different days, unrelated" | Independent | Nothing |
| "if it is wet the first day, the chance becomes..." | Dependent | Second-stage probabilities differ |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-tree-diagrams-addition-and-multiplication-laws-and--13-rain-dependent-tree.webp" width="900" height="710" alt="A two-stage tree: Monday rain 0.3, dry 0.7. After rain Tuesday rain is 0.6, after dry 0.2. Routes 0.18, 0.12, 0.14, 0.56 total 1; the Tuesday-rain routes give 0.18 + 0.14 = 0.32." loading="lazy">
  <figcaption>The second-stage branches change with the first result, so the events are dependent.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-probability--02-tree-with-replacement.webp" width="900" height="1070" alt="Bag of 5 red and 3 blue, two draws with replacement. Branches are 5/8 and 3/8 both times; ends RR 25/64, RB 15/64, BR 15/64, BB 9/64. One of each is 15/64+15/64 = 15/32." loading="lazy">
  <figcaption>With replacement the second branches repeat the first; multiply along paths and add the paths you want.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-probability--03-tree-without-replacement.webp" width="900" height="1020" alt="Same bag, first counter not replaced. After a red, 4 red and 3 blue remain (4/7, 3/7); after a blue, 5 red and 2 blue remain (5/7, 2/7). Both red is 5/8 x 4/7 = 5/14." loading="lazy">
  <figcaption>Without replacement the second branches change because the bag has one fewer counter.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-probability--04-conditional-venn.webp" width="900" height="910" alt="Venn diagram of 40 students: 12 French only, 6 both, 8 Spanish only, 14 neither. Given French, the sample space is the 18 in the French circle; 6 also study Spanish, so 6/18 = 1/3." loading="lazy">
  <figcaption>Given a condition, only the part of the diagram that satisfies it counts.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-tree-diagrams-addition-and-multiplication-laws-and--10-mult-law-area.webp" width="900" height="820" alt="A unit square: width 0.6 is rain, and in that column the bottom 0.25 is a late bus. The shaded rectangle has area 0.25 x 0.6 = 0.15 = p(rain and late)." loading="lazy">
  <figcaption>p(A and B) = p(A given B) x p(B) shown as the area of a rectangle.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-tree-diagrams-addition-and-multiplication-laws-and--11-independence-bars.webp" width="900" height="820" alt="Two squares split into columns. In example 10 the bar for A is 0.4 high in both B and not B, equal to p(A), so independent. In example 6, diamonds fill 1/2 of the red column but p(diamond) is 1/4, so not independent." loading="lazy">
  <figcaption>Independent means p(A given B) = p(A).</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-probability-and-expected-frequency--02-adds-to-one.webp" width="900" height="850" alt="Two bars of length 1. The spinner bar is red 0.35, blue 0.2, green x, yellow 2x, so x = 0.15 and yellow 0.3. The rain bar is 35 percent rain and 65 percent no rain." loading="lazy">
  <figcaption>All the probabilities of one event add to 1, so not happening is 1 minus happening.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-probability-and-expected-frequency--03-venn-two-sets.webp" width="900" height="680" alt="Three copies of a Venn diagram of 32 club members (swim only 9, both 5, tennis only 11, neither 7). Shading shows plays tennis 16/32, exactly one sport 20/32 and neither 7/32." loading="lazy">
  <figcaption>Shade the region you want, add its counts, and divide by the total of 32.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-probability--05-conditional-table.webp" width="900" height="780" alt="Two-way table of 60 students: boys 14 walk and 16 bus, girls 18 walk and 12 bus. Given a walker, use the walk column total 32; 18 are girls, so 18/32 = 9/16." loading="lazy">
  <figcaption>From a table, the given condition picks one row or column as the whole sample space.</figcaption>
</figure>


## Official syllabus

OCR GCSE (9-1) Mathematics (J560), Version 2.1 (August 2026), for first assessment in 2017, published by OCR. Content references 11.02d, 11.02e and 11.02f.
