---
title: "Sequences and Proportion"
resourceType: "study-guides"
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
description: "Find the nth term of linear, quadratic, cubic and exponential sequences, and solve direct and inverse proportion, for Cambridge O Level Maths 4024."
author: "muhammad-ghazali-siddiqui"
reviewer: "sajawal-zahid"
reviewStatus: "review-pending"
reviewedDate: 2026-09-29
publishedDate: 2026-08-18
featured: false
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review."
---

This guide covers subtopics **2.7 Sequences** and **2.8 Proportion**, from
Topic 2, Algebra and graphs, for Cambridge O Level Mathematics (Syllabus D)
4024, 2025–2027 series.

## Where this fits in 4024

Both subtopics are about recognising a *rule* connecting quantities —
between consecutive terms of a sequence, or between two related variables —
and expressing that rule algebraically. They're grouped here as two
compact, pattern-based subtopics that sit between the equation-solving of
[Inequalities](/resources/inequalities/) and the graph work later in Topic
2.

## Syllabus coverage

**CAMBRIDGE O LEVEL MATHEMATICS (SYLLABUS D) 4024**

- Continue a given number sequence or pattern (2.7)
- Recognise patterns in sequences, including the term-to-term rule, and
relationships between different sequences (2.7)
- Find and use the nth term of sequences, including linear, quadratic,
cubic and exponential sequences and simple combinations of these; subscript
notation may be used, e.g. Tₙ is the nth term of sequence T (2.7)
- Express direct and inverse proportion in algebraic terms, and use this
to find unknown quantities, including linear, square, square root, cube
and cube root proportion; knowledge of the proportional symbol (∝) is
required (2.8)

4024 is **not tiered** — every candidate covers all of the above.

## Sequences

<!-- marlbridge-diagram:math-sub-470-sequences -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/mathematics/math-sub-470-sequences.svg" aria-label="Open full-size diagram: math-sub-470-sequences"><img src="/images/learning/mathematics/math-sub-470-sequences.svg" width="1528" height="940" alt="Sequence number lines and first/second differences distinguish linear, quadratic and geometric patterns." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>Classify a sequence before finding its nth term — Marlbridge Mathematics.</figcaption>
</figure>
<!-- /marlbridge-diagram:math-sub-470-sequences -->


<!-- marlbridge-diagram:math-final-470-linear-sequence-nth-term -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/mathematics/math-final-470-linear-sequence-nth-term.svg" aria-label="Open full-size diagram: math-final-470-linear-sequence-nth-term"><img src="/images/learning/mathematics/math-final-470-linear-sequence-nth-term.svg" width="1528" height="940" alt="Term table shows a constant difference of three, leading to nth term 3n+2 and checking the fifth term is 17." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>Term table shows a constant difference of three, leading to nth term 3n+2 and checking the fifth term is 17.</figcaption>
</figure>
<!-- /marlbridge-diagram:math-final-470-linear-sequence-nth-term -->


Continuing a sequence or spotting its pattern starts with the
**term-to-term rule** — how each term relates to the one before it (add a
constant, multiply by a constant, and so on) — but 4024 also expects
recognising relationships *between* different sequences, such as one
sequence being the sequence of differences of another.

The **nth term** gives a formula for any term directly, without needing
every term before it. The type of formula depends on the sequence:

| Sequence type | nth term pattern | Example |
|---|---|---|
| Linear | Tₙ = an + b | 3, 7, 11, 15, ... → Tₙ = 4n − 1 |
| Quadratic | Tₙ = an² + bn + c | 1, 4, 9, 16, ... → Tₙ = n² |
| Cubic | Tₙ = an³ + ... | 1, 8, 27, 64, ... → Tₙ = n³ |
| Exponential | Tₙ = a × rⁿ⁻¹ | 3, 6, 12, 24, ... → Tₙ = 3 × 2ⁿ⁻¹ |

**Worked example.** Find the nth term of the linear sequence 5, 8, 11, 14, ...

```
common difference = 3, so Tₙ = 3n + c
when n = 1, T₁ = 5, so 3(1) + c = 5, c = 2
Tₙ = 3n + 2
```

**Worked example.** Find the nth term of the sequence 2, 6, 18, 54, ...

```
each term is 3× the previous term, so this is exponential: Tₙ = a × 3ⁿ⁻¹
when n = 1, T₁ = 2, so a = 2
Tₙ = 2 × 3ⁿ⁻¹
```

The syllabus also expects **simple combinations** of these types — for
instance a sequence whose nth term is a linear term plus a quadratic term.

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


## Direct and inverse proportion

<!-- marlbridge-diagram:math-sub-470-proportion -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/mathematics/math-sub-470-proportion.svg" aria-label="Open full-size diagram: math-sub-470-proportion"><img src="/images/learning/mathematics/math-sub-470-proportion.svg" width="1528" height="940" alt="Direct square proportion rises with x while inverse proportion falls, with worked values." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>Use the right model, then determine the constant k — Marlbridge Mathematics.</figcaption>
</figure>
<!-- /marlbridge-diagram:math-sub-470-proportion -->


Two quantities are in **direct proportion** if one is a constant multiple
of the other — as one increases, the other increases at the same rate.
Using the proportional symbol ∝:

```
y ∝ x        means        y = kx        (k a constant)
```

4024 extends this beyond simple linear proportion to **square, square
root, cube and cube root** proportion:

```
y ∝ x²        y = kx²
y ∝ √x        y = k√x
y ∝ x³        y = kx³
y ∝ ³√x       y = k³√x
```

**Inverse proportion** means one quantity increases as the other
decreases, in a constant-product relationship:

```
y ∝ 1/x        means        y = k/x
```

**Worked example.** y is directly proportional to x². When x = 3, y = 45.
Find y when x = 5.

```
y = kx²
45 = k(3²) = 9k
k = 5
y = 5x²
when x = 5: y = 5(25) = 125
```

**Worked example.** y is inversely proportional to x. When x = 4, y = 6.
Find y when x = 8.

```
y = k/x
6 = k/4
k = 24
y = 24/x
when x = 8: y = 24/8 = 3
```

The method is the same in every case: use the given pair of values to find
the constant k, then use k to find the unknown quantity.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/sequences-and-proportion--04-direct-square.webp" width="900" height="910" alt="Graph of y = 5x squared. The given point (3, 45) gives k = 5, and then at x = 5 the graph gives y = 125." loading="lazy">
  <figcaption>Use the given pair to find k, then use k to find the unknown value.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/sequences-and-proportion--05-inverse-constant-product.webp" width="900" height="940" alt="Graph of y = 24 over x with points (4, 6) and (8, 3). The rectangles from the origin to each point both have area 24, because x times y is always k. When x doubles, y halves." loading="lazy">
  <figcaption>In inverse proportion x times y stays constant, so doubling x halves y.</figcaption>
</figure>


## Common mistakes

- **Assuming every sequence is linear.** Check the differences between
terms first — if they're not constant, check second differences (constant
second differences indicate a quadratic sequence) before assuming a more
complex form.
- **Confusing direct and inverse proportion.** In direct proportion, both
quantities increase together; in inverse proportion, one increases as the
other decreases — writing y = kx when the relationship is actually y = k/x
(or vice versa) is a common and costly error.
- **Forgetting to find k first.** Every proportion problem requires
finding the constant from the given pair of values before it can be used
to find anything else.
- **Using x instead of x², √x, x³ or ³√x** — always check exactly which
power or root the question specifies before setting up the proportion
equation.

## Quick revision checklist

- Term-to-term rules and recognising relationships between sequences
- Finding the nth term for linear, quadratic, cubic and exponential
sequences, and simple combinations
- Setting up y = kx (or the square/root/cube variant) from y ∝ x, finding
k, then solving
- Direct vs inverse proportion, and not confusing the two

## Frequently asked questions

**Is Cambridge O Level Mathematics 4024 tiered for sequences and proportion?**
No. Cambridge O Level Mathematics (Syllabus D) 4024 is not tiered, so every candidate covers all of subtopics 2.7 Sequences and 2.8 Proportion.

**What is a term-to-term rule?**
A term-to-term rule describes how each term relates to the one before it, such as adding or multiplying by a constant. The nth term, by contrast, gives any term directly from its position.

**How do you set up a proportion equation?**
Write the relationship with a constant k, such as y = kx for direct or y = k/x for inverse proportion, substitute the given pair to find k, rewrite the full equation, then use it to answer the question.

**What graph shows direct proportion?**
Direct proportion, y = kx, gives a straight line through the origin. Inverse proportion, y = k/x, gives a curve (a hyperbola).

## Related resources

- [Inequalities](/resources/inequalities/) — the previous subtopic
- [Graphs in Practical Situations](/resources/graphs-in-practical-situations/) — the next subtopic
- [Cambridge O Level Mathematics subject hub](/subjects/mathematics/)

*Written against Cambridge O Level Mathematics (Syllabus D) 4024,
2025–2027 series. Always check the current syllabus for your examination
year.*
