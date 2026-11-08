---
title: "OCR GCSE Mathematics: Algebraic language, proof, simplifying and expanding (J560) -- Revision Notes"
seoTitle: "OCR GCSE Maths Algebraic Proof and Expanding Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["gcse"]
topic: "Algebraic language, proof, simplifying and expanding"
boards: ["ocr"]
qualifications: ["gcse"]
syllabusCodes: ["J560"]
syllabusSeries: "Version 2.1 (August 2026), for first assessment in 2017"
order: 44
syllabusTopics:
  - qualification: "gcse"
    topic: "algebra-ocr-gcse-maths"
    subtopic: "algebraic-expressions-ocr-gcse-maths"
description: "Condensed revision notes for OCR GCSE Mathematics sections 6.01a to 6.01d: vocabulary, identities, proof, indices and expanding, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense OCR GCSE (9-1) Mathematics, specification Version 2.1 (August 2026), sections 6.01a to 6.01d. For full explanations and longer worked examples, read the [study guide](/resources/ocr-gcse-mathematics-algebraic-language-proof-simplifying-and-expanding/). Content marked **Higher tier only** is for Higher tier candidates alone; everything else is for both tiers.

Use the [OCR GCSE Mathematics hub](/boards/ocr/gcse/mathematics/) and the [printable checklist](/checklists/ocr/gcse/mathematics/) to track what you have revised. When you are ready, try the [practice questions](/resources/ocr-gcse-mathematics-algebraic-language-proof-simplifying-and-expanding-practice/) and the [free diagnostics](/diagnostics/).

## Vocabulary (6.01a)

| Word | Remember |
|---|---|
| Term | A part of an expression with its sign: in 2x² − 7x + 1 the terms are 2x², −7x and +1 |
| Expression | No equals sign. Simplify it or expand it |
| Equation | Has =. True only for certain values. You solve it |
| Formula | Equation linking real quantities, such as v = u + at |
| Inequality | Uses <, >, ≤ or ≥ |
| Identity | True for all values. Written ≡ |
| Factor | Divides exactly into something. 4 and x are factors of 12xy |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-algebraic-language-proof-simplifying-and-expanding--08-identity-or-equation.webp" width="900" height="1030" alt="Two graphs. In the top graph the lines y = 3(x + 2) and y = 3x + 6 lie exactly on top of each other, so the identity is true for every x. In the bottom graph the line y = 5x minus 1 meets the horizontal line y = 14 at one point, x = 3, so the equation is true only when x = 3." loading="lazy">
  <figcaption>An identity is true for every x; an equation is true only at the point where the two sides meet.</figcaption>
</figure>


## Equivalence and arguments (6.01a, both tiers)

Method to show two expressions are equivalent:

1. Pick the more complicated side.
2. Expand and simplify it, one step per line.
3. Stop when it matches the other side exactly.
4. Write a short closing sentence.

Reminder: show (x + 2)² − (x − 2)² ≡ 8x.

```
(x² + 4x + 4) − (x² − 4x + 4) = 8x
```

To disprove a claim, one counterexample is enough. For (x + 2)² = x² + 4, try x = 2: the left is 16 and the right is 8.

To construct an argument, name the quantities with letters, build the expression, simplify, and say what the result tells you.

## Algebraic proof (6.01a, Higher tier only)

| Idea | Algebra |
|---|---|
| Any even number | 2n |
| Any odd number | 2n + 1 |
| Next even or odd number | add 2 |
| Consecutive integers | n, n + 1, n + 2 |
| Two different integers | two letters, such as a and b |

Method in steps:

1. Define the numbers with letters that stand for integers.
2. Form the expression and expand.
3. Factorise to show the required factor.
4. Write a closing sentence: "this is 4 times an integer, so it is a multiple of 4".

Worked reminder: the sum of two consecutive odd numbers is a multiple of 4.

```
(2n + 1) + (2n + 3) = 4n + 4 = 4(n + 1)
```

Another: the square of an odd number is one more than a multiple of 4.

```
(2n + 1)² = 4n² + 4n + 1 = 4n(n + 1) + 1
```

Examples are never a proof. Testing 3, 5 and 7 shows nothing about all odd numbers.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-algebraic-language-proof-simplifying-and-expanding--10-odd-times-odd.webp" width="900" height="900" alt="A grid of 5 rows by 7 columns of dots, 35 in all, showing (2a + 1)(2b + 1) with a = 2 and b = 3. 24 teal dots are 4ab, 10 gold dots down one side and along the bottom are 2a + 2b, and one copper dot in the corner is left over. Every other dot is in a pair, 17 pairs in all, which is 2(2ab + a + b). So the product is 2 times an integer plus 1, which is odd." loading="lazy">
  <figcaption>Pair up the dots: one is always left over, so odd times odd is odd.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-algebraic-language-proof-simplifying-and-expanding--02-diff-squares-consecutive-odd.webp" width="900" height="660" alt="A 7 by 7 grid with a 5 by 5 square removed leaves 24 squares in three blocks of 8. This is the case k = 2 of (2k + 3)² − (2k + 1)² = 8(k + 1)." loading="lazy">
  <figcaption>The L-shaped difference of 7² and 5² splits into 3 blocks of 8, the k = 2 case of 8(k + 1).</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-introduction-to-algebra-and-manipulation--01-three-in-a-row.webp" width="900" height="940" alt="Three columns of blocks stand for n, n + 1 and n + 2, drawn with n = 4 as 4, 5 and 6 blocks. The 3 extra blocks are regrouped so each column has n + 1 blocks. So the sum 3n + 3 is 3 groups of (n + 1), a multiple of 3." loading="lazy">
  <figcaption>The sum of three consecutive numbers is always 3(n + 1).</figcaption>
</figure>


## Collecting like terms (6.01b)

Like terms have the same letters with the same powers. Keep the sign with its term.

| Terms | Like? |
|---|---|
| 4ab and −ba | Yes |
| 3x and 3x² | No |
| 2xy and 2x | No |

Worked reminder: 6x + 2y − x + 4y = 5x + 6y.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-introduction-to-algebra-and-manipulation--03-collect-like-terms.webp" width="900" height="800" alt="Tiles for 4x^2 - 3xy + 7 - x^2 + 5xy - 9 are sorted into x^2, xy and number bins. Added and taken-away tiles leave 3x^2, 2xy and -2, so the answer is 3x^2 + 2xy - 2." loading="lazy">
  <figcaption>Only like terms combine: x^2 tiles with x^2, xy with xy, numbers with numbers.</figcaption>
</figure>


## Products and quotients (6.01c)

### Both tiers

| Rule | Example |
|---|---|
| Multiply numbers, then letters | 2a × 3b = 6ab |
| aᵐ × aⁿ = aᵐ⁺ⁿ | a² × a³ = a⁵ |
| aᵐ ÷ aⁿ = aᵐ⁻ⁿ | 3a³ ÷ a² = 3a |
| (aᵐ)ⁿ = aᵐⁿ | (a²)⁴ = a⁸ |

Method in steps: numbers first, then each letter in turn, then write the answer in alphabetical order.

Worked reminder: 3a² × 4a³ = 12a⁵, and 20m⁵n ÷ 5m² = 4m³n.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-algebraic-language-proof-simplifying-and-expanding--09-square-a-binomial.webp" width="900" height="830" alt="Two three-by-three grids drawn with x = 1. On the left a square of side x + 2 is split into x squared, two strips of 2x and a 2 by 2 square of 4, which total 9. On the right only the x squared and 4 pieces are drawn and the two 2x strips are dashed question marks, giving 5. So (x + 2) squared is x squared + 4x + 4, not x squared + 4." loading="lazy">
  <figcaption>Squaring a bracket gives four pieces, so the two middle strips cannot be left out.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-introduction-to-algebra-and-manipulation--04-expand-two-brackets.webp" width="900" height="940" alt="An area diagram has widths 2x and +5 and heights 3x and -2. Its cells are 6x^2, 15x, -4x and -10, which sum to 6x^2 + 11x - 10." loading="lazy">
  <figcaption>Multiply every term in one bracket by every term in the other, then collect like terms.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/algebraic-manipulation--01-expand-area-grid.webp" width="900" height="820" alt="An area grid for (3x + y)(x minus 4y) with columns 3x and y and rows x and minus 4y. The cells are 3x squared, xy, minus 12xy and minus 4y squared. Adding them and combining the xy terms gives 3x squared minus 11xy minus 4y squared." loading="lazy">
  <figcaption>Every term in the first bracket multiplies every term in the second.</figcaption>
</figure>


### Negative and fractional powers (Higher tier only)

| Rule | Example |
|---|---|
| a⁻ⁿ = 1/aⁿ | x⁻² = 1/x² |
| a^(1/2) = √a | 25^(1/2) = 5 |
| a^(1/n) = nth root of a | 27^(1/3) = 3 |
| a^(m/n) = (a^(1/n))ᵐ | 8^(2/3) = 4 |

Method in steps for a fractional power of a product: deal with the number and each letter separately. For a negative power, work out the positive power first and then take the reciprocal.

Worked reminder: 2a⁻³ × 3a⁵ = 6a², and (16x⁸)^(3/4) = 8x⁶, because 16^(3/4) = 8 and x⁸ to the power ¾ is x⁶.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-algebraic-fractions-and-indices-ii--01-index-rules-tiles.webp" width="900" height="1070" alt="Tiles each represent one factor of x. x^3 times x^2 is five tiles, x^5. x^5 divided by x^2 cancels two pairs leaving x^3. (x^2)^3 is three groups of two tiles, x^6." loading="lazy">
  <figcaption>Multiply adds indices, divide subtracts, power of a power multiplies.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-algebraic-fractions-and-indices-ii--02-zero-negative-indices.webp" width="900" height="962" alt="A ladder of powers of 2 from 2^3=8 down to 2^-3=1/8, each step dividing by 2, so 2^0=1 and negative indices give one over the positive power." loading="lazy">
  <figcaption>Each step down divides by 2, which makes x^0 = 1 and x^-n = 1/x^n.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-algebraic-fractions-and-indices-ii--04-fractional-index.webp" width="900" height="1060" alt="64 is a 4 by 4 by 4 cube, so its cube root is 4; squaring gives 16, so 64^(2/3)=16 and 64^(-2/3)=1/16." loading="lazy">
  <figcaption>Take the root first, then the power; a negative index means one over.</figcaption>
</figure>


## Expanding brackets (6.01d)

### Single bracket (both tiers)

Multiply every term inside by the term outside, with its sign. A minus sign in front of a bracket flips every sign inside.

Worked reminder: 5(x − 2) − (3 − x) = 5x − 10 − 3 + x = 6x − 13.

### Two binomials (both tiers)

Multiply each term in the first bracket by each term in the second (four products), then collect like terms.

Worked reminder: (x + 5)(x − 3) = x² − 3x + 5x − 15 = x² + 2x − 15.

Special patterns, which you can always expand by the grid method:

| Pattern | Result |
|---|---|
| (a + b)² | a² + 2ab + b² |
| (a − b)² | a² − 2ab + b² |
| (a + b)(a − b) | a² − b² |

### More than two binomials (Higher tier only)

Expand two brackets, tidy, then multiply by the third. Check by substituting x = 1 or x = 2 into the original and the answer.

Worked reminder: (x − 1)(x + 1)(x + 3).

```
(x − 1)(x + 1) = x² − 1
(x² − 1)(x + 3) = x³ + 3x² − x − 3
```

Check with x = 2: the original gives 1 × 3 × 5 = 15, and the answer gives 8 + 12 − 2 − 3 = 15.

## What the command words ask for

| Word | What to do |
|---|---|
| Simplify | Collect like terms and combine powers until nothing more can be joined |
| Expand | Remove the brackets by multiplying out |
| Expand and simplify | Remove the brackets, then collect like terms |
| Show that | Start from one side and reach the stated result, with every line visible |
| Prove (Higher tier only) | Use letters for general numbers and end with a sentence |
| Write in the form | Rewrite so that the answer matches the pattern given |

## Quick order of work for a mixed expression

Take 2x(3x − 1) + (x + 4)(x − 2) as an example.

```
2x(3x − 1)     = 6x² − 2x
(x + 4)(x − 2) = x² − 2x + 4x − 8 = x² + 2x − 8
Add:  6x² − 2x + x² + 2x − 8 = 7x² − 8
```

1. Expand each part separately.
2. Write each result in full before joining them.
3. Collect like terms at the end.
4. Substitute a small number such as x = 1 as a check: the original gives 2 × 2 + 5 × (−1) = −1, and the answer gives 7 − 8 = −1.

## Must-know distinctions

| Pair | Difference |
|---|---|
| Expression and equation | An expression is simplified; an equation is solved |
| Equation and identity | Some values compared with all values |
| Proof and checking | Proof uses letters and covers every case; checking uses numbers and does not |
| Adding and multiplying indices | Add indices when multiplying terms; multiply indices for a power of a power |
| x⁻² and −x² | 1/x² compared with minus x squared |
| (a + b)² and a² + b² | Missing 2ab in the second |
| 2a × 3b and 2a + 3b | 6ab compared with 2a + 3b, which cannot be simplified |
| a^(1/2) and a² | A square root compared with a square |
| Term and factor | Terms are added; factors are multiplied |

## Quick self-test

1. Simplify 6x + 2y − x + 4y.
2. State whether 3(x + 1) = 3x + 3 is an equation or an identity, and say why.
3. Simplify 3a² × 4a³.
4. Simplify 20m⁵n ÷ 5m².
5. (Higher tier only) Simplify 2a⁻³ × 3a⁵.
6. (Higher tier only) Simplify (16x⁸)^(3/4).
7. Expand and simplify 5(x − 2) − (3 − x).
8. Expand (x + 5)(x − 3).
9. (Higher tier only) Expand (x − 1)(x + 1)(x + 3).
10. (Higher tier only) Prove that the sum of two consecutive odd numbers is a multiple of 4.
11. Show that (x + 2)² − (x − 2)² ≡ 8x.
12. Give a value of x that shows (x + 2)² = x² + 4 is not an identity.

### Answers

1. 5x + 6y.
2. An identity, because it is true for every value of x (the left side expands to the right side).
3. 12a⁵.
4. 4m³n.
5. 6a².
6. 8x⁶.
7. 6x − 13.
8. x² + 2x − 15.
9. x³ + 3x² − x − 3.
10. Let the numbers be 2n + 1 and 2n + 3. The sum is 4n + 4 = 4(n + 1), which is 4 times an integer.
11. (x² + 4x + 4) − (x² − 4x + 4) = 8x.
12. x = 2 gives 16 on the left and 8 on the right. Any value other than 0 works.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-algebraic-language-proof-simplifying-and-expanding--01-perimeter-6x-plus-8.webp" width="900" height="760" alt="A rectangle with sides 2x + 5 and x − 1 drawn for x = 4, with the four sides added to give 6x + 8. The check 13 + 3 + 13 + 3 = 32 matches 6(4) + 8." loading="lazy">
  <figcaption>Adding the four sides of the rectangle gives 6x + 8.</figcaption>
</figure>


## Where marks are usually lost

* Not showing the expansion line in a "show that" or proof question, so there is nothing for the reader to credit.
* Using one letter for two different integers in a proof.
* Finishing a proof with a correct expression but no sentence saying why it proves the claim.
* Losing a minus sign when a bracket has a negative number or a minus sign in front.
* Writing (x + 3)² as x² + 9, or (x − 4)² as x² − 16.
* Adding indices that should be multiplied, or the other way round.
* Reading a negative power as a negative number.
* Stopping after expanding, without collecting like terms.
* Making a slip in the third bracket of a triple expansion because the first two were not tidied.
* Giving a few numerical checks as the whole proof.
* Writing the final answer in a different form from the one asked for, such as a negative power when a fraction was requested.

## Frequently asked questions

**What is the difference between an expression, an equation and an identity in OCR GCSE Maths?**
An expression has no equals sign and is simplified or expanded, not solved. An equation is true only for particular values of the letter, while an identity, written with ≡, is true for every value.

**When do you add indices and when do you multiply them?**
Add indices when multiplying terms with the same base, so a² × a³ = a⁵. Multiply indices when raising a power to a power, so (a²)⁴ = a⁸.

**How do you represent even, odd and consecutive numbers in an algebraic proof?**
Use 2n for any even number, 2n + 1 for any odd number and n, n + 1, n + 2 for consecutive integers, where n is an integer. Use two different letters, such as a and b, when the numbers need not be equal.

**Are negative and fractional indices on the OCR GCSE Foundation tier?**
No. In OCR GCSE Mathematics J560 section 6.01c, using the laws of indices with negative and fractional powers is Higher tier only; Foundation covers positive whole-number powers.

**How many counterexamples do you need to disprove an algebraic claim?**
One counterexample is enough. For example, x = 2 shows that (x + 2)² = x² + 4 is false, because the left side gives 16 and the right side gives 8.

## Official syllabus

OCR GCSE (9-1) Mathematics (J560), Version 2.1 (August 2026), for first assessment in 2017, published by OCR. These notes cover sections 6.01a to 6.01d.
