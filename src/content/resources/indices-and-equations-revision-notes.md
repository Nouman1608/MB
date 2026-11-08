---
title: "Indices and Equations: Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["o-levels"]
topic: "Algebra and graphs"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 2.4
syllabusTopics:
  - qualification: "o-level"
    topic: "algebra-and-graphs"
    subtopic: "indices-ii"
  - qualification: "o-level"
    topic: "algebra-and-graphs"
    subtopic: "equations"
description: "Condensed recall notes on index laws, linear, simultaneous and quadratic equations, and changing the subject for Cambridge O Level Mathematics 4024."
author: "muhammad-ghazali-siddiqui"
reviewStatus: "review-pending"
publishedDate: 2026-08-22
featured: false
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by sajawal-zahid on 2026-09-29."
---

Condensed for the final weeks. For worked examples, use the
[Indices and Equations study guide](/resources/indices-and-equations/).

## Index laws

```
a^m x a^n  =  a^(m+n)        a^0     =  1
a^m / a^n  =  a^(m-n)        a^-n    =  1 / a^n
(a^m)^n    =  a^(mn)         a^(1/n) =  nth root of a
                             a^(m/n) =  (nth root of a)^m
```

**Worked:** 8^(2/3) = (∛8)² = 2² = **4**. Take the root first, then the power — the numbers stay small.

**Equations with the unknown in the index**, e.g. 5^(x+1) = 25^x: rewrite both sides with a **matching base** first, then equate the indices.
```
5^(x+1) = (5^2)^x = 5^(2x)
so  x + 1 = 2x  ->  x = 1
```
Matching bases, then equating indices, is the standard technique — logarithms are not needed at this level.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/indices-and-equations--01-index-ladder.webp" width="900" height="1140" alt="A ladder of powers of 2 where each step down divides by 2: 8, 4, 2, 1, 1/2, 1/4, so 2^0 = 1 and 2^-2 = 1/2^2. Below, three 3s multiplied make 27, so 27^(1/3) = 3." loading="lazy">
  <figcaption>Dividing by 2 each step explains zero and negative indices, and equal factors explain a fractional index.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/indices-and-equations--02-matching-bases.webp" width="900" height="990" alt="Two columns show 32^x = 2 and 5^(x+1) = 25^x solved by rewriting 32 as 2^5 and 25 as 5^2, then equating indices. Results are x = 1/5 and x = 1." loading="lazy">
  <figcaption>Rewrite both sides with the same base, then equate the indices.</figcaption>
</figure>


## Solving linear equations

Do the same to both sides; unwind the operations in reverse order. With fractions, multiply **every** term by the common denominator first.

**Worked example (fractional equation).** Solve x/(x + 2) = 3/(x − 6).
```
x(x - 6) = 3(x + 2)
x^2 - 6x = 3x + 6
x^2 - 9x - 6 = 0
```
This reduces to a quadratic — solve with the formula below, and always check the answer doesn't make an original denominator zero.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/indices-and-equations--03-linear-intersection.webp" width="900" height="970" alt="Graphs of y = 5 - 2x and y = 3(x + 7) cross at x = -3.2, y = 11.4, the solution of the equation." loading="lazy">
  <figcaption>The solution of an equation is the x where both sides have the same value.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/indices-and-equations--04-fractional-equation.webp" width="900" height="900" alt="Graphs of x/(x + 2) and 3/(x - 6) with dashed lines at x = -2 and x = 6 meet at two points, the roots of x^2 - 9x - 6 = 0. Neither root is an excluded value." loading="lazy">
  <figcaption>Excluded values are where a denominator is zero; genuine solutions are where the curves meet.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/indices-and-equations--05-quadratic-surd-roots.webp" width="900" height="970" alt="The parabola y = x^2 - 4x - 3 has line of symmetry x = 2 and crosses the x axis a distance sqrt(7) either side, giving x = 2 +/- sqrt(7)." loading="lazy">
  <figcaption>The surd roots sit sqrt(7) either side of the line of symmetry x = 2.</figcaption>
</figure>


## Simultaneous equations

| Method | Use when |
|---|---|
| **Elimination** | Both equations are linear |
| **Substitution** | One equation is already in the form y = … (or can easily be rearranged into it) |

Construct the two equations from the wording first if a question describes a situation rather than giving the equations directly — this is where marks are lost before any algebra even begins.

```
3x + 2y = 16
 x -  y =  2   ->  x = y + 2

Substitute:  3(y + 2) + 2y = 16
             3y + 6 + 2y = 16
             5y = 10  ->  y = 2,  x = 4
```

**Always check** in the *other* equation — it catches almost every arithmetic slip.

## Quadratic equations — three methods

1. **Factorising** — try first, since it's fastest when it works. Two numbers multiplying to *ac*, adding to *b*.
2. **Completing the square** — also gives the turning point.
3. **Formula** — always works, whatever the numbers, even when the expression won't factorise neatly:

```
x = [ -b +/- sqrt(b^2 - 4ac) ] / 2a
```

Rearrange to `= 0` before doing anything else.

**Discriminant b² − 4ac:** positive → two roots · zero → one repeated root · negative → no real roots.

**Worked example (surd form).** Solve x² − 4x − 3 = 0, giving answers in surd form.
```
x = (4 +/- sqrt(16 + 12)) / 2 = (4 +/- sqrt(28)) / 2 = 2 +/- sqrt(7)
```
Since 28 has no integer square root, leave the answer as a surd rather than approximating it — that's exactly what "surd form" is asking for.

## Changing the subject

Treat it as solving for a letter. Unwind operations in reverse; if the required letter appears **twice**, collect those terms on one side and **factorise**.

```
Make r the subject:  A = pi r^2
                     r^2 = A / pi
                     r = sqrt(A / pi)
```

**Worked example (subject inside a root).** Make x the subject of y = √(x + 3) − 2.
```
y + 2 = sqrt(x + 3)
(y + 2)^2 = x + 3
x = (y + 2)^2 - 3
```
When the subject is under a root, isolate the root first, then square both sides to remove it — squaring is always the last step, once the root stands alone. This rearrangement is only valid when y + 2 ≥ 0, since a square root cannot itself be negative; squaring both sides must always be checked for reversibility like this.

## Exam traps

- `a^-n` is a reciprocal, not a negative number: 2⁻³ = 1/8, not −8.
- `a^0 = 1` for any non-zero a.
- Rearrange a quadratic to `= 0` before factorising or using the formula.
- In the formula, `−b` means the **opposite sign** of b — if b = −5, then −b = +5.
- When the subject appears twice, you must factorise; you cannot just divide.
- Multiply **every** term when clearing fractions, including those without a denominator.
- In a fractional equation, always reject any solution that would make an original denominator zero.
- Approximating a surd answer when a question explicitly asks for surd form, or vice versa.
- Squaring too early, before the root is isolated on its own, when the subject sits under a root.

## Self-test

1. Simplify (2x³)⁴.
2. Evaluate 27^(2/3) and 5⁻².
3. Solve simultaneously: 2x + y = 11, x − y = 1.
4. Solve x² − 5x + 6 = 0.
5. Make h the subject of V = πr²h.
6. Solve 5^(x+1) = 25^x.
7. Make x the subject of y = √(x + 3) − 2.

**Answers:** 1. 2⁴ × x¹² = **16x¹²**. 2. 27^(2/3) = (∛27)² = 3² = **9**; 5⁻² = 1/25 = **0.04**. 3. Adding: 3x = 12 → x = 4, y = 3. 4. (x − 2)(x − 3) = 0 → x = **2 or 3**. 5. h = V / (πr²). 6. Rewrite 25 as 5²: x + 1 = 2x → x = **1**. 7. x = **(y + 2)² − 3**, valid provided y + 2 ≥ 0.

For worked examples with full explanations, see the [Indices and Equations study guide](/resources/indices-and-equations/); for exam-style practice with full mark schemes, see the [Indices and Equations practice questions](/resources/indices-and-equations-practice/).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/indices-and-equations--06-subject-root.webp" width="900" height="850" alt="The graph of x = (y + 2)^2 - 3 is a sideways parabola; only the upper branch (y + 2 &gt;= 0) is the original function, and the lower dotted branch is added by squaring." loading="lazy">
  <figcaption>Squaring adds a second branch, so the rearrangement is valid only when y + 2 &gt;= 0.</figcaption>
</figure>

## Frequently asked questions

**How do you solve an equation with the unknown in the power?**
Rewrite both sides with the same base and then equate the indices. For example, 9^x = 27 becomes 3^(2x) = 3³, so 2x = 3 and x = 3/2.

**What does a negative index mean?**
A negative index means a reciprocal, so 2⁻³ = 1/8, not −8. Any non-zero number to the power 0 equals 1.

**What does the discriminant tell you?**
For ax² + bx + c = 0, if b² − 4ac is positive there are two roots, if it is zero there is one repeated root, and if it is negative there are no real roots.

**Why must you check solutions to a fractional equation?**
Any solution that makes an original denominator zero must be rejected, because the equation is undefined there.

**Are logarithms needed for index equations in Cambridge O Level Maths 4024?**
No. Index equations such as 32^x = 2 are solved by matching bases and equating indices, and logarithms are not needed.
