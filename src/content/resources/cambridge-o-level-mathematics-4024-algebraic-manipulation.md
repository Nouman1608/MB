---
title: "Cambridge O Level Mathematics (4024): Algebraic manipulation"
resourceType: "study-guides"
subject: "mathematics"
level: ["o-levels"]
topic: "Algebra and graphs"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 2.2
syllabusTopics:
  - qualification: "o-level"
    topic: "algebra-and-graphs"
    subtopic: "algebraic-manipulation"
description: "Cambridge O Level Maths 4024 subtopic 2.2 in depth: simplifying, expanding, all five factorising forms and completing the square, with harder worked examples."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **2.2 Algebraic manipulation** in Topic 2, Algebra and graphs, of Cambridge O Level Mathematics (Syllabus D) 4024, 2025–2027 series. The broader [Algebraic Manipulation study guide](/resources/algebraic-manipulation/) shows each skill once, using the syllabus's own examples. This page takes each skill further: negative signs, two-letter expressions, factorising that needs a second step, and completing the square when the coefficient of x² is not 1 or is negative.

Companion pages: the [algebraic manipulation revision notes](/resources/cambridge-o-level-mathematics-4024-algebraic-manipulation-revision-notes/) and the [algebraic manipulation practice questions](/resources/cambridge-o-level-mathematics-4024-algebraic-manipulation-practice/).

## What the syllabus asks

The 4024 syllabus lists five outcomes for 2.2:

1. Simplify expressions by collecting like terms.
2. Expand products of algebraic expressions, including products of more than two brackets.
3. Factorise by extracting common factors. The syllabus notes that "factorise" means factorise fully.
4. Factorise expressions of the forms ax + bx + kay + kby, a²x² − b²y², a² + 2ab + b², ax² + bx + c and ax³ + bx² + cx.
5. Complete the square for expressions in the form ax² + bx + c.

All of this can appear on Paper 1, so it must be done accurately without a calculator.

## 1. Collecting like terms

Like terms have the same letters with the same powers. The order of letters does not matter: ab and ba are like terms, but a²b and ab² are not.

**Worked example.** Simplify 4a²b − 3ab² + 2ba² + 5b²a − ab.

```
a²b terms:  4a²b + 2a²b  = 6a²b
ab² terms: −3ab² + 5ab²  = 2ab²
ab term:    −ab           (nothing to combine with)

answer: 6a²b + 2ab² − ab
```

## 2. Expanding

### A minus sign in front of a bracket

The sign belongs to the number outside, so it multiplies every term inside.

```
4(x − 2) − 3(2x − 5)
= 4x − 8 − 6x + 15
= 7 − 2x
```

The −3 multiplied by −5 gives +15. Writing −15 here is the most common expansion error.

### Two brackets

Every term in the first bracket multiplies every term in the second.

```
(2x + 5)(3x − 4)
= 6x² − 8x + 15x − 20
= 6x² + 7x − 20
```

A squared bracket must be written out as two brackets:

```
(3x − 2y)² = (3x − 2y)(3x − 2y)
           = 9x² − 6xy − 6xy + 4y²
           = 9x² − 12xy + 4y²
```

### Three brackets

Expand any two brackets first, simplify, then multiply by the third. Choosing a pair that gives a simple product saves work.

**Worked example.** Expand and simplify (2x − 1)(x + 3)(x − 4).

```
(x + 3)(x − 4) = x² − x − 12

(2x − 1)(x² − x − 12)
= 2x³ − 2x² − 24x − x² + x + 12
= 2x³ − 3x² − 23x + 12
```

A quick check is to substitute x = 1 into both forms: (1)(4)(−3) = −12, and 2 − 3 − 23 + 12 = −12. ✓

**Worked example.** Expand (x + 1)³.

```
(x + 1)² = x² + 2x + 1
(x² + 2x + 1)(x + 1) = x³ + x² + 2x² + 2x + x + 1
                     = x³ + 3x² + 3x + 1
```

## 3. Factorising

Always check for a common factor first, then decide which form is left.

### Common factors, including letters

Take out the highest common factor of the numbers and the lowest power of each letter that appears in every term.

```
6a²b − 9ab² = 3ab(2a − 3b)
```

### Grouping: ax + bx + kay + kby

Pair terms that share a factor. If the brackets do not match, try a different pairing or take out a negative factor.

```
xy − 3x + 2y − 6
= x(y − 3) + 2(y − 3)
= (x + 2)(y − 3)
```

```
2ax − 6ay − bx + 3by
= 2a(x − 3y) − b(x − 3y)       ← take out −b so the brackets match
= (2a − b)(x − 3y)
```

### Difference of two squares: a²x² − b²y²

Look for a common factor first; the difference of two squares may only appear afterwards.

```
50x² − 8y² = 2(25x² − 4y²)
           = 2(5x − 2y)(5x + 2y)
```

### Perfect square: a² + 2ab + b²

Check the first and last terms are squares and the middle term is twice their product.

```
9x² − 12xy + 4y²:   9x² = (3x)²,  4y² = (2y)²,  2 × 3x × 2y = 12xy
= (3x − 2y)²
```

### Quadratic trinomial: ax² + bx + c with a ≠ 1

Find two numbers with product ac and sum b, split the middle term, then group.

**Worked example.** Factorise 10x² − 11x − 6.

```
ac = 10 × (−6) = −60;  need sum −11  →  −15 and 4
10x² − 15x + 4x − 6
= 5x(2x − 3) + 2(2x − 3)
= (5x + 2)(2x − 3)
```

### Cubic with a common factor: ax³ + bx² + cx

Every term contains x, so x (and any number) comes out first.

```
4x³ + 2x² − 12x = 2x(2x² + x − 6)
                = 2x(2x − 3)(x + 2)
```

for the quadratic: ac = −12, sum 1 → 4 and −3, so 2x² + 4x − 3x − 6 = 2x(x + 2) − 3(x + 2).

## 4. Completing the square

The aim is to write ax² + bx + c as a(x + p)² + q.

### When a = 1 and b is odd

The method is the same; the numbers are fractions.

**Worked example.** Write x² − 5x + 2 in the form (x + p)² + q.

```
half of −5 is −5/2
(x − 5/2)² = x² − 5x + 25/4
x² − 5x + 2 = (x − 5/2)² − 25/4 + 2
            = (x − 5/2)² − 17/4
```

### When a is not 1

Factor a out of the x² and x terms only.

**Worked example.** Write 3x² − 12x + 7 in the form a(x + p)² + q.

```
3x² − 12x + 7 = 3(x² − 4x) + 7
              = 3[(x − 2)² − 4] + 7
              = 3(x − 2)² − 12 + 7
              = 3(x − 2)² − 5
```

The −4 inside the square bracket is multiplied by 3. Forgetting this gives the wrong constant, −4 + 7 = 3.

### When a is negative

Factor out −1 (or the negative coefficient) from the first two terms.

**Worked example.** Write −x² + 4x + 1 in the form a(x + p)² + q.

```
−x² + 4x + 1 = −(x² − 4x) + 1
             = −[(x − 2)² − 4] + 1
             = −(x − 2)² + 4 + 1
             = −(x − 2)² + 5
```

Because −(x − 2)² is never positive, the greatest value of the expression is 5, when x = 2. This is how completed square form is used later, in equations (2.5) and in sketching quadratics (2.11).

Always expand your answer back out as a check: −(x² − 4x + 4) + 5 = −x² + 4x + 1. ✓

## Exam technique

- **Expand and simplify**: show the full expansion line before collecting terms; a method mark is often given for it.
- **Factorise** or **Factorise completely**: in 4024 these both mean fully. Check every bracket to see whether it factorises again.
- **Write in the form a(x + p)² + q**: give the values of a, p and q clearly, including signs.
- **Show that**: for an identity such as (x + 1)³ − x³ = 3x² + 3x + 1, start from one side and reach the other, line by line.

Check answers by expanding factorised forms, or by substituting a simple value into both versions.

## Common mistakes

- Treating a²b and ab² as like terms.
- Writing −3(2x − 5) = −6x − 15.
- Writing (3x − 2y)² as 9x² + 4y² or 9x² − 4y².
- Stopping at 2(25x² − 4y²) instead of factorising the difference of two squares.
- Grouping with brackets that do not match, such as 2a(x − 3y) + b(−x + 3y), and stopping.
- In completing the square with a ≠ 1, not multiplying the constant inside the bracket by a.
- In x² − 5x + 2, halving 5 but losing the negative sign.

For algebraic fractions, which use these factorising skills, see the [algebraic fractions study guide](/resources/cambridge-o-level-mathematics-4024-algebraic-fractions/).
