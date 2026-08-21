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
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For worked examples, use the
[Sequences and Proportion study guide](/resources/sequences-and-proportion/).

## Identifying a sequence

```
Constant FIRST difference   -> LINEAR       (nth term = dn + c)
Constant SECOND difference  -> QUADRATIC    (nth term = an^2 + bn + c)
Constant RATIO              -> GEOMETRIC    (nth term = ar^(n-1))
```

Always write the differences underneath the sequence before deciding.

## Linear sequences

```
nth term = (first difference) x n  +  (adjustment)

Sequence:  5, 8, 11, 14
Difference = 3, so start with 3n:  3, 6, 9, 12
Adjustment: each term is 2 more   ->  nth term = 3n + 2
```

Check with n = 1 and n = 4 before committing.

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

## Special sequences to recognise

| Sequence | Terms |
|---|---|
| Square numbers | 1, 4, 9, 16, 25 |
| Cube numbers | 1, 8, 27, 64 |
| Triangular numbers | 1, 3, 6, 10, 15 |
| Fibonacci | 1, 1, 2, 3, 5, 8 (add the previous two) |
| Powers of 2 | 2, 4, 8, 16, 32 |

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

Variations: `y ∝ x²` → y = kx²; `y ∝ 1/√x` → y = k/√x. Same method.

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

## Self-test

1. Find the nth term of 7, 12, 17, 22.
2. Find the nth term of 2, 6, 12, 20.
3. y ∝ x and y = 15 when x = 3. Find y when x = 8.
4. p is inversely proportional to q. p = 6 when q = 2. Find p when q = 4.
5. Name the sequence 1, 3, 6, 10, 15.

**Answers:** 1. First difference 5 → 5n gives 5, 10, 15, 20; each term is 2 more → **5n + 2**. 2. First differences 4, 6, 8; second difference 2 → a = 1, n² gives 1, 4, 9, 16; subtracting leaves 1, 2, 3, 4 = n → **n² + n**. 3. k = 5, so y = 5x → y = **40**. 4. k = 12, p = 12/q → p = **3**. 5. Triangular numbers.
