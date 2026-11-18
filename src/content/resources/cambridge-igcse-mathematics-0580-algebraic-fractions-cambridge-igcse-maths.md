---
title: "Cambridge IGCSE Mathematics (0580): Algebraic fractions"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Topic 2 – Algebra and graphs"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 2.03
syllabusTopics:
  - qualification: "igcse"
    topic: "algebra-and-graphs-cambridge-igcse-maths"
    subtopic: "algebraic-fractions-cambridge-igcse-maths"
description: "Study guide to 0580 subtopic 2.3 (Extended): simplifying rational expressions and adding, subtracting, multiplying and dividing algebraic fractions."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **2.3 Algebraic fractions** in the Cambridge IGCSE Mathematics 0580 syllabus for examination in 2025, 2026 and 2027. It is **Extended only**: the syllabus lists no Core content at C2.3, so it is examined on Papers 2 and 4. The two statements are:

| Statement | What it means in practice |
|---|---|
| E2.3.1 Manipulate algebraic fractions | Add, subtract, multiply and divide fractions whose denominators are numbers or linear expressions |
| E2.3.2 Factorise and simplify rational expressions | Factorise the top and bottom, then cancel common factors |

The [algebraic fractions and indices II guide](/resources/igcse-mathematics-0580-algebraic-fractions-and-indices-ii/) introduces each operation. This page adds harder cases: denominators that share a factor, reversed brackets, three fractions at once, answers that cancel only after combining, and division by a quadratic. Summarise it afterwards with the [algebraic fractions revision notes](/resources/cambridge-igcse-mathematics-0580-algebraic-fractions-cambridge-igcse-maths-revision-notes/) and practise with the [algebraic fractions practice questions](/resources/cambridge-igcse-mathematics-0580-algebraic-fractions-cambridge-igcse-maths-practice/).

## One idea behind everything

An algebraic fraction is a division, exactly like 6/8. Every rule you use with number fractions carries over:

- **Cancel** by dividing top and bottom by the same factor: 6/8 = (2 × 3)/(2 × 4) = 3/4.
- **Add or subtract** only over a common denominator.
- **Multiply** tops together and bottoms together.
- **Divide** by multiplying by the reciprocal.

The only new step is that the factors are often hidden, so you **factorise first**. Everything in subtopic 2.2 (common factors, difference of two squares, quadratics) is used here.

## Simplifying rational expressions

### Worked example 1: factorise both parts

Simplify (x² − 2x − 15)/(2x² + 6x).

```
Numerator:   x^2 - 2x - 15 = (x - 5)(x + 3)
Denominator: 2x^2 + 6x     = 2x(x + 3)
Cancel the common factor (x + 3):
             (x - 5)/(2x)
```

The answer cannot be simplified further: x − 5 and 2x share no factor. Do not "cancel" the x in x − 5 with the x in 2x; the x in x − 5 is a term, not a factor.

### Worked example 2: a reversed bracket

Simplify (9 − x²)/(x² − x − 6).

```
Numerator:   9 - x^2 = (3 - x)(3 + x)
Denominator: x^2 - x - 6 = (x - 3)(x + 2)
(3 - x) = -(x - 3), so the numerator is -(x - 3)(x + 3)
Cancel (x - 3):  -(x + 3)/(x + 2)
```

Brackets such as (3 − x) and (x − 3) are negatives of each other. Cancelling them leaves a factor of −1, which must appear in the answer. You may write it as −(x + 3)/(x + 2) or (−x − 3)/(x + 2).

**Check by substitution.** With x = 1: (9 − 1)/(1 − 1 − 6) = 8/(−6) = −4/3, and −(1 + 3)/(1 + 2) = −4/3. The two agree, so the cancelling is correct. Avoid checking with a value that makes any denominator zero (here x = 3 or x = −2).

## Adding and subtracting

### Worked example 3: three fractions with numerical denominators

Write (x + 2)/3 − (x − 1)/4 + x/6 as a single fraction in its simplest form.

```
Lowest common denominator of 3, 4 and 6 is 12.
Multipliers: 12/3 = 4, 12/4 = 3, 12/6 = 2

4(x + 2) - 3(x - 1) + 2x = 4x + 8 - 3x + 3 + 2x
                         = 3x + 11
Answer: (3x + 11)/12
```

Using 3 × 4 × 6 = 72 as the denominator also works, but then the numerator must be simplified with the 72 at the end, and it is easy to leave the answer unsimplified.

### Worked example 4: denominators that share a factor

Write 5/(x² + 3x) − 2/(x² − 9) as a single fraction.

```
Factorise each denominator:
x^2 + 3x = x(x + 3)
x^2 - 9  = (x - 3)(x + 3)

Lowest common denominator: x(x + 3)(x - 3)
  first fraction needs (x - 3), second needs x

5(x - 3) - 2x = 5x - 15 - 2x = 3x - 15 = 3(x - 5)

Answer: 3(x - 5) / (x(x + 3)(x - 3))
```

The factor (x + 3) appears in both denominators, so it goes into the common denominator once. Factorising the numerator at the end, 3(x − 5), lets you confirm that nothing cancels.

### Worked example 5: an answer that cancels only after combining

Write x/(x − 2) − 4/(x² − 2x) as a single fraction in its simplest form.

```
x^2 - 2x = x(x - 2), so the common denominator is x(x - 2).
x/(x - 2) = x^2 / (x(x - 2))

x^2 - 4 = (x - 2)(x + 2)

(x - 2)(x + 2) / (x(x - 2)) = (x + 2)/x
```

Many candidates stop at (x² − 4)/(x(x − 2)). "Simplest form" means you must factorise the new numerator and look for a common factor with the denominator.

## Multiplying and dividing

### Worked example 6: division with quadratics

Simplify (x² + 4x)/(x² − 1) ÷ (x² + 3x − 4)/(x + 1).

```
Factorise everything first:
x^2 + 4x     = x(x + 4)
x^2 - 1      = (x - 1)(x + 1)
x^2 + 3x - 4 = (x + 4)(x - 1)

Turn the second fraction upside down and multiply:
x(x + 4) / ((x - 1)(x + 1))  x  (x + 1) / ((x + 4)(x - 1))

Cancel (x + 4) and (x + 1):
x / ((x - 1)(x - 1)) = x/(x - 1)^2
```

Two factors of (x − 1) remain on the bottom, one from each fraction. They do not cancel each other, because both are in the denominator.

## Common mistakes

- **Cancelling terms.** In (x + 6)/(x + 2) nothing cancels; only whole factors that multiply the entire top and bottom can cancel.
- **Missing a minus sign.** When a numerator is subtracted, bracket it: −3(x − 1) = −3x + 3.
- **Multiplying every denominator together** when they share a factor, which produces a larger denominator and extra cancelling.
- **Stopping too soon.** After combining, factorise the numerator and check it against the denominator.
- **Flipping the wrong fraction** in a division. Only the second fraction (the divisor) is inverted.
- **Losing the −1** from a reversed bracket such as (5 − x) = −(x − 5).

## Exam technique

- **"Simplify"**: factorise the numerator and denominator completely before cancelling. Show the factorised form, because it carries the method marks.
- **"Write as a single fraction"**: one numerator over one denominator. You may leave the denominator factorised; expanding it is unnecessary and risks errors.
- **"In its simplest form"**: check the final numerator and denominator for a common factor.
- On Paper 2 there is no calculator, so a substitution check with a small whole number is the quickest way to catch a sign error.
- Algebraic fractions return in fractional equations (subtopic 2.5) and in composite functions such as fg(x) given as "a fraction in its simplest form" (subtopic 2.13), so accuracy here earns marks elsewhere too.

## Next steps

- Condensed recall and a self-test: [algebraic fractions revision notes](/resources/cambridge-igcse-mathematics-0580-algebraic-fractions-cambridge-igcse-maths-revision-notes/).
- Exam-style questions with marked answers: [algebraic fractions practice questions](/resources/cambridge-igcse-mathematics-0580-algebraic-fractions-cambridge-igcse-maths-practice/).
- Review the factorising this depends on: [algebraic manipulation study guide](/resources/cambridge-igcse-mathematics-0580-algebraic-manipulation-cambridge-igcse-maths/).
- Fractional equations: [equations study guide](/resources/cambridge-igcse-mathematics-0580-equations-cambridge-igcse-maths/).

## Official syllabus

Cambridge International: *Cambridge IGCSE Mathematics 0580 syllabus* for examination in 2025, 2026 and 2027, Topic 2 Algebra and graphs, E2.3 Algebraic fractions (Extended content only; C2.3 has no Core content).
