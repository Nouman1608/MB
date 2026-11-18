---
title: "IB DP Mathematics: Analysis and Approaches (DP Mathematics: Analysis and Approaches): Counting principles and extension of the binomial theorem (AHL only)"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Number and algebra"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 1.1
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-10"
description: "IB DP Maths AA HL section 1.10 study guide: multiplication and addition principles, nPr and nCr, cases, and the binomial theorem for rational n."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers **syllabus section 1.10** of IB DP Mathematics: Analysis and Approaches (first assessment 2021): counting principles, including permutations and combinations, and the extension of the binomial theorem to fractional and negative exponents. It is **HL only** (additional higher level).

It builds on section 1.9, where the binomial theorem was used for n ∈ ℕ; see the [section 1.9 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-9/). The HL unit overview, with its own examples on teams, shelves and validity, is the [counting principles, partial fractions, proof and linear systems study guide](/resources/ib-dp-mathematics-aa-hl-counting-partial-fractions-proof-systems/).

## What section 1.10 asks of you

- Use counting principles, including permutations and combinations, with nPr and nCr found by formula and by technology.
- Expand (a + b)ⁿ when n ∈ ℚ (a fraction or a negative integer), and state the values of x for which the expansion is valid.

## The two counting principles

**Multiplication principle ("and").** If one choice can be made in p ways and, for each of those, a second choice can be made in q ways, the pair of choices can be made in p × q ways. A four-character code made of a letter then three digits has 26 × 10 × 10 × 10 = 26 000 possibilities.

**Addition principle ("or").** If a task can be done in one of several cases that cannot happen together, add the counts for the cases. Splitting into cases is the standard way to handle a condition that changes the number of options for a later position.

## Permutations and combinations

- **n!** counts the arrangements of n different objects in a row.
- **nPr = n!/(n − r)!** counts the ordered selections (arrangements) of r objects from n different objects.
- **nCr = n!/(r!(n − r)!)** counts unordered selections.

The link is nPr = nCr × r!: choose the r objects, then arrange them. For example 8P3 = 8 × 7 × 6 = 336, and 8C3 × 3! = 56 × 6 = 336.

**Does order matter?** Positions, ranks or roles (first, second, chair, secretary, a number's digits) make order matter, so use permutations. A plain group (a committee, a hand of cards, a team with no roles) does not, so use combinations.

## Worked example 1 (calculator-free): arranging letters

The six letters of the word NUMBER are arranged in a row.

**(a)** How many arrangements are possible?

All six letters are different: 6! = **720**.

**(b)** How many begin and end with a vowel?

The vowels are U and E. They fill the two end positions in 2! = 2 ways; the other four letters fill the middle in 4! = 24 ways. Total 2 × 24 = **48**.

**(c)** In how many are the two vowels **not** next to each other?

Vowels together: treat UE as one block, so there are 5 items, arranged in 5! ways, and the block itself in 2 ways: 240. Not together: 720 − 240 = **480**.

*Annotation.* Fill restricted positions first, then the free ones. For "not together" with exactly two items, the complement of "together" is correct; with three or more items, "not all together" and "no two together" differ, so read the condition carefully.

## Worked example 2 (calculator-free): numbers and cases

Four-digit numbers are formed from the digits 1 to 7, with no digit repeated.

**(a)** How many are even?

```
Last digit even: 3 choices (2, 4, 6)
Remaining three positions from the 6 digits left: 6P3 = 120
Total: 3 × 120 = 360
```

**(b)** How many are even **and** greater than 5000?

The first digit must be 5, 6 or 7, and whether it is even affects the last digit, so split into cases.

```
Case 1: first digit 5 or 7 (2 ways); last digit 2, 4 or 6 (3 ways);
        middle two from the 5 remaining digits: 5P2 = 20
        2 × 3 × 20 = 120
Case 2: first digit 6 (1 way); last digit 2 or 4 (2 ways);
        middle two: 5P2 = 20
        1 × 2 × 20 = 40
Total (addition principle): 120 + 40 = 160
```

*Annotation.* Without the cases, you might multiply 3 choices for the first digit by 3 for the last, double-counting the 6. When one restriction changes the options for another, cases are needed.

## Worked example 3 (calculator-free): a pair who cannot be together

A committee of 4 is chosen from 9 people. Two of them, A and B, refuse to serve together. How many committees are possible?

```
All committees: 9C4 = 126
Committees with both A and B: choose the other 2 from 7: 7C2 = 21
Required: 126 − 21 = 105
```

Check by cases: neither A nor B, 7C4 = 35; exactly one of them, 2 × 7C3 = 70. Total 35 + 70 = 105.

## Extending the binomial theorem to n ∈ ℚ

For any rational n and |x| < 1,

(1 + x)ⁿ = 1 + nx + (n(n − 1)/2!)x² + (n(n − 1)(n − 2)/3!)x³ + …

Three differences from section 1.9:

- When n is negative or a fraction, the expansion **never stops**: it is an infinite series.
- The coefficients come from the formula, not Pascal's triangle.
- It is valid only for **|x| < 1**. Outside that interval the series does not converge.

For (a + b)ⁿ, take out the factor aⁿ first: (a + b)ⁿ = aⁿ(1 + b/a)ⁿ, valid for |b/a| < 1.

## Worked example 4 (calculator-free): a negative exponent

Expand (2 + x)⁻² in ascending powers of x up to the term in x³, and state the range of validity.

```
(2 + x)⁻² = 2⁻²(1 + x/2)⁻² = (1/4)(1 + x/2)⁻²
(1 + y)⁻² = 1 − 2y + 3y² − 4y³ + …        (n = −2)
With y = x/2:  1 − x + (3/4)x² − (1/2)x³ + …
(2 + x)⁻² = 1/4 − x/4 + (3/16)x² − (1/8)x³ + …
Valid for |x/2| < 1, that is |x| < 2
```

*Annotation.* The coefficients −2, 3, −4 come from (−2)(−3)/2! = 3 and (−2)(−3)(−4)/3! = −4. Forgetting the factor 2⁻² = 1/4 is a method error that loses every later accuracy mark.

## Worked example 5 (calculator-free): an approximation

**(a)** Expand √(1 − 2x) up to the term in x². **(b)** Use x = 0.01 to approximate √0.98.

```
(1 − 2x)^(1/2) = 1 + (1/2)(−2x) + ((1/2)(−1/2)/2)(−2x)² + …
               = 1 − x − (1/2)x² + …     valid for |2x| < 1, that is |x| < 1/2
x = 0.01:  √0.98 ≈ 1 − 0.01 − 0.00005 = 0.98995
```

The true value is 0.989949… (to 6 d.p.), so the approximation is correct to 5 decimal places. A value of x close to zero, well inside the interval of validity, makes later terms negligible.

## Common mistakes

- Using nCr when positions or roles make order matter, or nPr for a plain group.
- Multiplying when the problem has separate cases that should be added.
- Filling unrestricted positions first, so a restriction later has the wrong number of options.
- Forgetting to factor out aⁿ before expanding (a + b)ⁿ.
- Raising only x, not the whole term (such as −2x or x/2), to each power.
- Omitting the interval of validity, or writing it as |x| < 1 regardless of the bracket.

## Exam technique: the command words

- **Find the number of ways**: give a single integer, with the product or sum that produced it.
- **Expand … up to and including the term in x³**: four terms, simplified, plus the validity if asked.
- **State the values of x for which the expansion is valid**: an inequality such as |x| < 2; no working needed beyond it.
- **Hence approximate**: substitute into your expansion and show the value of x you chose.

HL Paper 1 is calculator-free; counting answers are then left as products or evaluated by hand. On Papers 2 and 3, use technology for nPr and nCr, and still write the expression you evaluated.

## Where next

Condense these methods with the [section 1.10 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-10-revision-notes/), then practise with the [section 1.10 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-10-practice/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section 1.10.
