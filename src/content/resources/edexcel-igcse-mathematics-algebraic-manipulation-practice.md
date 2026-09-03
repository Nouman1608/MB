---
title: "Pearson Edexcel IGCSE Mathematics: Use of Symbols and Algebraic Manipulation — Practice Questions (4MA1)"
resourceType: "practice-questions"
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
description: "Original exam-style practice questions with full worked answers on index notation, expanding, factorising, algebraic fractions and completing the square, for Pearson Edexcel International GCSE Mathematics Higher Tier (4MA1)."
author: "marlbridge-academic-team"
publishedDate: 2026-09-03
featured: false
---
> **These are original questions written for Marlbridge**, in the style and at the
> standard of the examination. They are **not** reproduced past-paper questions —
> examination boards hold copyright in their own papers. Use these alongside the
> official past papers available free from your board.

Related: [Use of symbols and algebraic manipulation study guide](/resources/igcse-edexcel-mathematics-use-of-symbols-and-algebraic-manipulation/)

---

## Section A

**1.** Simplify: (a) x⁻³ (b) x⁰ (c) x^(1/2). **[3]**

**2.** Factorise 6x² − 5x − 6. **[2]**

## Section B

**3.** Expand and simplify (x + 2)(x + 3)(x − 1). **[4]**

**4.** Write 2x² + 6x − 1 in the form a(x + b)² + c. **[4]**

**5.** Express (3x + 1)/(x + 2) − (x − 2)/(x − 1) as a single fraction in its simplest form. **[5]**

**6.** Simplify (2x² + 3x)/(4x² − 9). **[4]**

---

## Answers

**(a)** x⁻³ = 1/x³ [1]. **(b)** x⁰ = 1 [1]. **(c)** x^(1/2) = √x [1].

**2.** 6x² − 5x − 6 = (2x − 3)(3x + 2) [2] (1 mark for a partially correct factorisation with correct
signs, full marks for the fully correct pair of brackets, verifiable by expanding back out).

**3.**
```
(x + 2)(x + 3) = x^2 + 5x + 6                       [1]
(x^2 + 5x + 6)(x - 1) = x^3 - x^2 + 5x^2 - 5x + 6x - 6
                       = x^3 + 4x^2 + x - 6          [1] [1] [1]
```

**4.**
```
2x^2 + 6x - 1
= 2(x^2 + 3x) - 1              [1]
= 2[(x + 1.5)^2 - 2.25] - 1    [1]
= 2(x + 1.5)^2 - 4.5 - 1
= 2(x + 1.5)^2 - 5.5           [1]

So a = 2, b = 1.5, c = -5.5    [1]
```

**5.**
```
Common denominator: (x + 2)(x - 1)                              [1]

(3x + 1)(x - 1) - (x - 2)(x + 2)
= (3x^2 - 2x - 1) - (x^2 - 4)                                    [1] [1]
= 2x^2 - 2x + 3                                                  [1]

Result: (2x^2 - 2x + 3) / [(x + 2)(x - 1)]                       [1]
```

**6.**
```
Numerator:   2x^2 + 3x = x(2x + 3)                [1]
Denominator: 4x^2 - 9 = (2x - 3)(2x + 3)           [1]

Cancel shared (2x + 3) factor:                     [1]
Result: x / (2x - 3)                               [1]
```

---

## Exam technique for this topic

Higher-tier questions on this specification frequently combine two or three of 2.1-2.2's skills within a
single longer question — Q5 above, for instance, requires factorising-level fluency with finding a
common denominator and then careful expansion of two brackets before subtracting, so a weakness in any
one of those underlying skills surfaces immediately in a combined question like this. Practise checking
completed-the-square answers by expanding a(x + b)² + c back out and confirming it matches the original
expression — this single habit catches the most common error in this sub-topic, forgetting to multiply
the adjustment term by the factored-out coefficient. For algebraic fraction questions, always factorise
the numerator and denominator fully before attempting to cancel anything, since cancelling before fully
factorising is a frequent source of an incorrect or incompletely simplified answer.

## Worked example: an index-law calculation combining three rules

Simplify (x³ × x⁻⁵) / x⁰.

```
Step 1: combine the numerator using the multiplication law (add powers)
        x^3 x x^-5 = x^(3 + (-5)) = x^-2

Step 2: divide by x^0, and recall that x^0 = 1 for any non-zero base
        x^-2 / 1 = x^-2

Step 3: express with a positive index using the negative-power rule
        x^-2 = 1/x^2

Final answer: 1/x^2
```

This question deliberately combines all three index rules covered in 2.1 within a single calculation —
practising short chained questions like this, rather than only single-rule questions in isolation, more
accurately reflects how Higher-tier papers actually test index notation.

## Worked example: choosing between factorising and completing the square

Given the quadratic x² + 4x − 5, a candidate must decide whether factorising or completing the square is
the more efficient method. Because the roots are clean integers (x² + 4x − 5 = (x + 5)(x − 1)),
factorising is the faster route here. By contrast, for 2x² + 6x − 1 (as in Q4), the roots are not clean
integers, so completing the square is the more reliable method — attempting to factorise this expression
by trial and error would likely fail or take considerably longer. Practising this judgement — trying
factorising first, and switching to completing the square only when factors don't appear cleanly — is a
transferable exam-efficiency skill worth building deliberately rather than defaulting to one method for
every quadratic regardless of its form.

## Checking answers by substitution

A quick way to catch errors in expansion or simplification questions like Q3 and Q5 is to substitute a
simple value, such as x = 2, into both the original expression and your simplified answer, and confirm
the two numerical results match. This will not catch every possible error, but it reliably flags sign
mistakes and dropped terms — the two most common sources of lost marks in longer algebraic manipulation
questions — and takes only a few seconds once the simplified answer has been reached, making it a habit
worth building into every longer algebra question attempted under exam conditions.

## Where marks are usually lost

- Applying an index law to terms with different bases, when the rules for combining powers only apply to the same base.
- Sign errors when expanding three linear expressions, particularly with a negative bracket like (x − 1).
- Cancelling additive terms in an algebraic fraction as though they were multiplicative common factors.
- Forgetting to multiply the adjustment term by the factored-out coefficient when completing the square.
