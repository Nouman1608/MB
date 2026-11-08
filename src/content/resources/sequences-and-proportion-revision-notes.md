---
title: "Sequences and Proportion: Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["o-levels"]
topic: "Algebra and graphs"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 2.7
syllabusTopics:
  - qualification: "o-level"
    topic: "algebra-and-graphs"
    subtopic: "sequences"
  - qualification: "o-level"
    topic: "algebra-and-graphs"
    subtopic: "proportion"
description: "Condensed recall notes on nth terms of linear, quadratic and other sequences, and direct and inverse proportion for Cambridge O Level Mathematics 4024."
author: "muhammad-ghazali-siddiqui"
reviewStatus: "review-pending"
publishedDate: 2026-08-22
featured: false
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by sajawal-zahid on 2026-09-29."
---

Condensed for the final weeks. For worked examples, use the
[Sequences and Proportion study guide](/resources/sequences-and-proportion/).

## Identifying a sequence

```
Constant FIRST difference   -> LINEAR       (nth term = dn + c)
Constant SECOND difference  -> QUADRATIC    (nth term = an^2 + bn + c)
Constant RATIO              -> GEOMETRIC    (nth term = ar^(n-1))
```

Always write the differences underneath the sequence before deciding. If neither the first nor the second difference is constant, check whether consecutive terms share a constant ratio instead, since that points to an exponential sequence rather than a polynomial one.

## Linear sequences

```
nth term = (first difference) x n  +  (adjustment)

Sequence:  5, 8, 11, 14
Difference = 3, so start with 3n:  3, 6, 9, 12
Adjustment: each term is 2 more   ->  nth term = 3n + 2
```

Check with n = 1 and n = 4 before committing.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/sequences-and-proportion--01-linear-nth-term.webp" width="900" height="940" alt="Graph of the sequence 5, 8, 11, 14 against n. Each point is 3 higher than the one before, so the points lie on a straight line of gradient 3. Extending the line back to n = 0 gives 2, so the nth term is 3n + 2." loading="lazy">
  <figcaption>A linear sequence lies on a straight line whose gradient is the common difference.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/sequences-and-proportion--02-differences-type.webp" width="900" height="1202" alt="Four sequences with their difference rows. Linear 3, 7, 11, 15 has constant first differences of 4. Quadratic 1, 4, 9, 16 has constant second differences of 2. Cubic 1, 8, 27, 64 has constant third differences of 6. Exponential 3, 6, 12, 24 has a constant ratio of 2." loading="lazy">
  <figcaption>Keep taking differences until a row is constant; that row tells you the type.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/sequences-and-proportion--03-four-shapes.webp" width="900" height="970" alt="Four small graphs of a sequence for n = 1 to 6. Linear 4n minus 1 rises in a straight line to 23. Quadratic n squared curves upward to 36. Cubic n cubed curves upward more steeply to 216. Exponential 3 times 2 to the n minus 1 doubles each step and reaches 96." loading="lazy">
  <figcaption>Linear sequences are straight; quadratic, cubic and exponential sequences curve upward at different rates.</figcaption>
</figure>


## Quadratic sequences

Second difference = **2a**, so `a = second difference ÷ 2`.

```
Sequence:      3,  8, 15, 24
1st diff:        5,  7,  9
2nd diff:          2,  2      ->  a = 1,  so start with n^2

n^2:           1,  4,  9, 16
Subtract:      2,  4,  6,  8   ->  this is 2n

nth term = n^2 + 2n
```

## Exponential sequences

Constant **ratio** between consecutive terms means the sequence is exponential: nth term = ar^(n-1).

```
Sequence:  2, 6, 18, 54
Each term is 3x the previous  ->  ratio r = 3
nth term = a x 3^(n-1),  and a = first term = 2
nth term = 2 x 3^(n-1)
```

## Special sequences to recognise

| Sequence | Terms |
|---|---|
| Square numbers | 1, 4, 9, 16, 25 |
| Cube numbers | 1, 8, 27, 64 |
| Triangular numbers | 1, 3, 6, 10, 15 |
| Fibonacci | 1, 1, 2, 3, 5, 8 (add the previous two) |
| Powers of 2 | 2, 4, 8, 16, 32 |

4024 also expects **simple combinations** of these types — for example, a sequence whose nth term is a linear term plus a quadratic term, such as Tₙ = n² + 3n. Substituting n = 1, 2, 3 gives the terms 4, 10, 18 — check any combined formula this way before relying on it in an answer.

## Proportion

| | Direct | Inverse |
|---|---|---|
| Statement | y ∝ x | y ∝ 1/x |
| Equation | **y = kx** | **y = k/x** |
| As x doubles | y doubles | y **halves** |
| Graph | Straight line through origin | Curve (hyperbola) |

**Method every time:**
1. Write the equation with k.
2. Substitute the given pair to find **k**.
3. Rewrite the full equation.
4. Use it to answer the question.

Variations: `y ∝ x²` → y = kx²; `y ∝ x³` → y = kx³; `y ∝ √x` → y = k√x; `y ∝ 1/√x` → y = k/√x. Same method every time — only the power on x changes.

**Worked:** y is directly proportional to x². When x = 3, y = 45.

```
y = kx^2
45 = k x 3^2 = 9k   ->  k = 5
y = 5x^2

When x = 5:  y = 5 x 5^2 = 5 x 25 = 125
```

**Worked:** y is inversely proportional to x. When x = 4, y = 3.

```
y = k/x
3 = k/4   ->  k = 12
y = 12/x

When x = 6:  y = 12/6 = 2
```

## Exam traps

- Check both difference rows before assuming linear.
- For a quadratic, `a` is **half** the second difference.
- In inverse proportion, y = k/x — not y = kx with a negative.
- Always find k explicitly; skipping it is where errors creep in.
- "Proportional to the square" means x², not 2x.
- Confusing exponential sequences (constant ratio) with linear or quadratic ones (constant differences) — check the ratio between terms if the differences themselves are not constant.
- Using x when the question specifies x², √x, x³ or ³√x — always check exactly which power or root is stated before setting up the equation.

Related: [Sequences and Proportion practice questions](/resources/sequences-and-proportion-practice/) for further worked problems in this style.

## Self-test

1. Find the nth term of 7, 12, 17, 22.
2. Find the nth term of 2, 6, 12, 20.
3. y ∝ x and y = 15 when x = 3. Find y when x = 8.
4. p is inversely proportional to q. p = 6 when q = 2. Find p when q = 4.
5. Name the sequence 1, 3, 6, 10, 15.
6. Find the nth term of the sequence 2, 6, 18, 54.
7. y is directly proportional to x². y = 45 when x = 3. Find y when x = 5.

**Answers:** 1. First difference 5 → 5n gives 5, 10, 15, 20; each term is 2 more → **5n + 2**. 2. First differences 4, 6, 8; second difference 2 → a = 1, n² gives 1, 4, 9, 16; subtracting leaves 1, 2, 3, 4 = n → **n² + n**. 3. k = 5, so y = 5x → y = **40**. 4. k = 12, p = 12/q → p = **3**. 5. Triangular numbers. 6. Constant ratio 3, so exponential: **2 × 3ⁿ⁻¹**. 7. k = 5, so y = 5x² → y = **125**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/sequences-and-proportion--04-direct-square.webp" width="900" height="910" alt="Graph of y = 5x squared. The given point (3, 45) gives k = 5, and then at x = 5 the graph gives y = 125." loading="lazy">
  <figcaption>Use the given pair to find k, then use k to find the unknown value.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/sequences-and-proportion--05-inverse-constant-product.webp" width="900" height="940" alt="Graph of y = 24 over x with points (4, 6) and (8, 3). The rectangles from the origin to each point both have area 24, because x times y is always k. When x doubles, y halves." loading="lazy">
  <figcaption>In inverse proportion x times y stays constant, so doubling x halves y.</figcaption>
</figure>

## Frequently asked questions

**How do you tell if a sequence is linear, quadratic or exponential?**
Write the differences under the sequence. A constant first difference means linear and a constant second difference means quadratic; if neither is constant, check for a constant ratio between terms, which means exponential.

**What is the nth term of an exponential sequence?**
An exponential sequence with first term a and constant ratio r has nth term ar^(n−1). For example, 3, 6, 12, 24 has nth term 3 × 2^(n−1).

**What does "proportional to the square" mean?**
It means y ∝ x², so the equation is y = kx², not y = 2kx or y = kx. Always check which power or root the question states before writing the equation.

**What happens to y in inverse proportion when x doubles?**
In inverse proportion, y = k/x, so when x doubles y halves. In direct proportion, y = kx, so y doubles.
