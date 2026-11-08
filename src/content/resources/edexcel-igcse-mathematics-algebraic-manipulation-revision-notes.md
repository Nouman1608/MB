---
title: "Pearson Edexcel IGCSE Mathematics: Use of Symbols and Algebraic Manipulation — Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["igcse"]
topic: "Equations, formulae and identities"
boards: ["edexcel"]
qualifications: ["igcse"]
syllabusCodes: ["4MA1"]
syllabusSeries: "Specification Issue 2, November 2017"
order: 1
syllabusTopics:
  - qualification: "igcse"
    topic: "equations-formulae-and-identities-edexcel-igcse-maths"
description: "Quick-recall notes on index laws, expanding, factorising, algebraic fractions, completing the square and proof for Edexcel IGCSE Maths 4MA1 Higher tier."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-09-02
featured: false
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by sajawal-zahid on 2026-09-29; 2026-11-08: reviewed by sajawal-zahid."
---

Condensed for the final weeks. For the full explanation, use the
[Use of Symbols and Algebraic Manipulation study guide](/resources/igcse-edexcel-mathematics-use-of-symbols-and-algebraic-manipulation/).

## Index notation (2.1)

```
x^(-n) = 1 / x^n           (negative power = reciprocal)
x^0 = 1                    (for any non-zero base)
x^(1/n) = nth root of x    (fractional power = a root)
```

Treat these as **three separate rules**, not one blurred idea of "powers can look different." Index laws for combining powers only apply to the **same base**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-algebraic-fractions-and-indices-ii--02-zero-negative-indices.webp" width="900" height="962" alt="A ladder of powers of 2 from 2^3=8 down to 2^-3=1/8, each step dividing by 2, so 2^0=1 and negative indices give one over the positive power." loading="lazy">
  <figcaption>Each step down divides by 2, which makes x^0 = 1 and x^-n = 1/x^n.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-algebraic-fractions-and-indices-ii--04-fractional-index.webp" width="900" height="1060" alt="64 is a 4 by 4 by 4 cube, so its cube root is 4; squaring gives 16, so 64^(2/3)=16 and 64^(-2/3)=1/16." loading="lazy">
  <figcaption>Take the root first, then the power; a negative index means one over.</figcaption>
</figure>


## Expanding three linear expressions (2.2A)

**Systematic method:** multiply the first two brackets fully, simplify, **then** multiply by the third bracket — don't attempt all three at once, where arithmetic slips creep in.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-mathematics-algebraic-manipulation-revision-notes--02-expand-three-brackets.webp" width="900" height="980" alt="Multiply the first two brackets to get x squared plus 3x plus 2, then multiply by x minus 3 using a grid. The two x squared terms cancel, leaving x cubed minus 7x minus 6, checked at x = 4 where both forms equal 30." loading="lazy">
  <figcaption>Multiply two brackets fully, then multiply by the third, and collect like terms.</figcaption>
</figure>


## Factorising quadratics (2.2B)

Factorise when the quadratic has **clean integer roots**. Example: 6x² − 5x − 6.

## Completing the square (2.2D)

Use when a quadratic does **not** factorise cleanly, or when finding a **turning point**.

**Worked example:** write 2x² + 6x − 1 in the form a(x + b)² + c.

```
2x^2 + 6x - 1
= 2(x^2 + 3x) - 1              [factor out coefficient of x^2]
= 2[(x + 1.5)^2 - 2.25] - 1    [complete the square inside]
= 2(x + 1.5)^2 - 4.5 - 1       [multiply -2.25 by 2 !]
= 2(x + 1.5)^2 - 5.5

a = 2, b = 1.5, c = -5.5
```

**The single most common error:** forgetting to multiply the adjustment term (−2.25) by the factored-out coefficient (2) before combining with the constant already outside the bracket.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-mathematics-algebraic-manipulation-revision-notes--03-complete-square-vertex.webp" width="900" height="1000" alt="A parabola y = 2x squared + 6x minus 1 with its lowest point marked at (minus 1.5, minus 5.5). The working shows 2 times 2.25 = 4.5 being combined with the minus 1 to give 2(x + 1.5) squared minus 5.5." loading="lazy">
  <figcaption>The completed-square form shows the turning point: a = 2, b = 1.5, c = -5.5.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-mathematics-algebraic-manipulation-revision-notes--06-factorise-or-complete.webp" width="900" height="1000" alt="Two parabolas. y = x squared + 6x + 5 crosses the x-axis at minus 5 and minus 1, so factorise to (x + 1)(x + 5). y = x squared + 4x + 1 crosses at about minus 3.73 and minus 0.27, not whole numbers, so complete the square to (x + 2) squared minus 3." loading="lazy">
  <figcaption>If the roots are whole numbers factorise; if not, complete the square.</figcaption>
</figure>


## Algebraic fractions (2.2C)

Combines several skills at once: **factorise → cancel common factors → find a common denominator**. Revise this **only after 2.2B is genuinely fluent** — a factorising weakness will surface here.

**Worked example:** express (3x+1)/(x+2) − (x−2)/(x−1) as a single fraction.

```
Common denominator: (x + 2)(x - 1)

(3x + 1)(x - 1) - (x - 2)(x + 2)
---------------------------------
        (x + 2)(x - 1)

Numerator: (3x^2 - 2x - 1) - (x^2 - 4) = 2x^2 - 2x + 3

Result: (2x^2 - 2x + 3) / [(x + 2)(x - 1)]
```

**Two commonly rushed steps:** expanding each bracket fully first, and subtracting the **entire second numerator**, not just its first term.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-mathematics-algebraic-manipulation-revision-notes--04-subtract-whole-numerator.webp" width="900" height="890" alt="Subtracting only the first term of (x squared minus 4) gives 2x squared minus 2x minus 5, worth 0.7 at x = 3. Subtracting the whole bracket gives 2x squared minus 2x + 3, worth 1.5 at x = 3, which matches the original expression." loading="lazy">
  <figcaption>Subtract the entire second numerator: every sign in it flips.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-algebraic-fractions-and-indices-ii--05-cancel-algebraic-fraction.webp" width="900" height="1130" alt="(2x^2+5x-3)/(4x^2-1) factorises to (2x-1)(x+3) over (2x-1)(2x+1); cancelling (2x-1) leaves (x+3)/(2x+1), checked at x=5 as 8/11. Terms that are added, such as x^2 in (x^2+3)/(x^2-1), cannot be cancelled." loading="lazy">
  <figcaption>Factorise, then cancel whole brackets only.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-algebraic-fractions-and-indices-ii--06-common-denominator.webp" width="900" height="1020" alt="Bars of twelve cells show 1/4 = 3/12 and 1/6 = 2/12. Then 3(2x+1)-2(x-3) = 6x+3-2x+6 = 4x+9, so the answer is (4x+9)/12." loading="lazy">
  <figcaption>Rewrite over the common denominator, then combine numerators carefully.</figcaption>
</figure>


## Proof using algebra (2.2E)

Algebra is used to construct proofs — express an unknown generally (e.g. "let the number be n" or "2n" for any even number), manipulate, and show the required result holds for **all** valid values, not just checked examples.

## Worked example: factorising vs. completing the square

Decide the more efficient method for x^2 + 6x + 5, then for x^2 + 4x + 1.

```
x^2 + 6x + 5:
  Look for two numbers multiplying to 5, adding to 6: 1 and 5.
  Factorises cleanly: (x + 1)(x + 5).
  -> FACTORISING is the faster method here.

x^2 + 4x + 1:
  No integer pair multiplies to 1 and adds to 4.
  Does not factorise with integers.
  -> COMPLETING THE SQUARE is required:
     x^2 + 4x + 1 = (x + 2)^2 - 4 + 1 = (x + 2)^2 - 3
```

Practising this decision -- try factorising first, and switch to completing the square only when it doesn't yield clean integers -- rather than defaulting to one method regardless of the expression, saves time in an exam and avoids forcing a factorisation that doesn't actually exist.

## Where this content leads

Sub-topics 2.1 and 2.2 are the toolkit every later sub-topic in Topic 2 (Equations, Formulae and Identities) depends on: solving quadratic equations by factorisation, the quadratic formula and completing the square (2.7) uses factorising and completing the square directly; functions and graphs, in Topic 3 (Sequences, Functions and Graphs), require confident algebraic manipulation to find intercepts, turning points and asymptotes. Treat fluency here as a prerequisite to secure before moving on, not content to revise once in isolation.

## Key terms

**Index notation** — writing repeated multiplication as a power (base and exponent). **Factorising** — writing an expression as a product of factors. **Completing the square** — rewriting a quadratic as a(x+b)²+c. **Algebraic fraction** — a fraction with an algebraic expression in the numerator and/or denominator.

## A note on proof by algebra (2.2E)

A typical exam task: "Prove that the sum of any two consecutive odd numbers is always even." Represent the first odd number generally as 2n + 1 (for any integer n), so the next consecutive odd number is 2n + 3. Their sum is (2n + 1) + (2n + 3) = 4n + 4 = 4(n + 1), which is a multiple of 4 and therefore always even, for **every** integer value of n -- not just the specific examples you might check by hand. Representing the unknown generally, rather than proving the claim only for a few chosen numbers, is what separates a genuine algebraic proof from an unconvincing pattern-spotting answer.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-mathematics-algebraic-manipulation-revision-notes--05-consecutive-odds-proof.webp" width="900" height="854" alt="Rows for n = 0 to 4 show sums 4, 8, 12, 16 and 20 as groups of four blocks. The general result (2n + 1) + (2n + 3) = 4(n + 1) holds for every integer n." loading="lazy">
  <figcaption>Writing the numbers as 2n + 1 and 2n + 3 proves the result for all n, not just the examples.</figcaption>
</figure>


## Common mistakes

- Applying an index law to terms with **different bases**.
- Sign errors when expanding three linear expressions, especially with a negative term in more than one bracket.
- **Cancelling additive terms** in an algebraic fraction as though they were multiplicative factors — not valid.
- Forgetting to multiply the adjustment term by the factored-out coefficient when completing the square.

## Quick self-test

1. Simplify x⁻³, x⁰, and x^(1/2) in words.
2. Expand (x + 1)(x + 2)(x − 3).
3. Write 3x² − 12x + 5 in completed-square form.
4. Simplify (2x² + 3x)/(4x² − 9).
5. Express (x+1)/(x−1) + (x−2)/(x+1) as a single fraction.

**Answers:**

1. x⁻³ is the **reciprocal of x cubed**, 1/x³; x⁰ is **1** for any non-zero x; x^(1/2) is the **square root of x**, √x.
2. (x + 1)(x + 2)(x − 3) = (x² + 3x + 2)(x − 3) = **x³ − 7x − 6**.
3. 3x² − 12x + 5 = 3(x² − 4x) + 5 = 3[(x − 2)² − 4] + 5 = **3(x − 2)² − 7**.
4. (2x² + 3x)/(4x² − 9) = x(2x + 3) / [(2x − 3)(2x + 3)] = **x/(2x − 3)**.
5. (x+1)/(x−1) + (x−2)/(x+1) = [(x+1)² + (x−2)(x−1)] / [(x−1)(x+1)] = (x² + 2x + 1 + x² − 3x + 2) / (x² − 1) = **(2x² − x + 3)/(x² − 1)**.

Higher-tier candidates should expect 2.2A–2.2E assessed **both in isolation and combined** within a single longer question — practising them together is genuinely representative of exam demand.

## Frequently asked questions

**What does x⁰ equal?**
x⁰ = 1 for any non-zero x. Similarly, x⁻³ means 1/x³ and x^(1/2) means the square root of x.

**How do you expand three brackets?**
Multiply the first two brackets fully and simplify, then multiply the result by the third bracket. Working systematically like this reduces sign errors.

**Can you cancel terms in an algebraic fraction?**
Only common factors can be cancelled, not separate added terms. Factorise the numerator and denominator fully first, then cancel any bracket that appears in both.

**How do you prove a result using algebra in IGCSE Maths?**
Represent the numbers in general form, such as 2n for any even number or 2n + 1 for an odd number, then simplify the expression to show it has the required property.

## Official syllabus

Pearson Edexcel International GCSE Mathematics (Specification A) (4MA1)
specification, Issue 2, November 2017 —
[qualifications.pearson.com](https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Mathematics%20A/2016/Specification%20and%20sample%20assessments/international-gcse-in-mathematics-spec-a.pdf).
