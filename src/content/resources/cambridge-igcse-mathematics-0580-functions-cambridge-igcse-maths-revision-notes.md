---
title: "Cambridge IGCSE Mathematics (0580): Functions -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["igcse"]
topic: "Topic 2 – Algebra and graphs"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 2.13
syllabusTopics:
  - qualification: "igcse"
    topic: "algebra-and-graphs-cambridge-igcse-maths"
    subtopic: "functions-cambridge-igcse-maths"
description: "Revision notes for 0580 subtopic 2.13 Functions (Extended): notation, domain and range, inverse and composite functions, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense subtopic **2.13 Functions** of the Cambridge IGCSE Mathematics 0580 syllabus (examination in 2025, 2026 and 2027). It is **Extended only** (E2.13); there is no Core content at C2.13. The three statements are: understand functions, domain and range, and use function notation; understand and find inverse functions f⁻¹(x); and form composite functions as defined by gf(x) = g(f(x)). The syllabus notes that candidates are not expected to find the domains and ranges of composite functions, and that the topic may include mapping diagrams.

For full worked examples, read the [functions study guide](/resources/igcse-mathematics-0580-functions/); for marked exam-style questions, use the [functions practice questions](/resources/cambridge-igcse-mathematics-0580-functions-cambridge-igcse-maths-practice/).

## Key terms

| Term | Meaning |
|---|---|
| Function | A rule that gives exactly one output for each input |
| f(x) | The output of function f when the input is x |
| Domain | The set of inputs allowed |
| Range | The set of outputs produced from the domain |
| Mapping diagram | Arrows from each input in the domain to its output in the range |
| Inverse function f⁻¹(x) | The function that reverses f: if f(a) = b, then f⁻¹(b) = a |
| Composite function gf(x) | Apply f first, then g: g(f(x)) |

## Condensed recall

### Notation

```
f(x) = 4x - 1
f(3) = 4(3) - 1 = 11            substitute
f(x) = 9  ->  4x - 1 = 9  ->  x = 2.5      solve
f(a + 1) = 4(a + 1) - 1 = 4a + 3          replace x by the whole bracket
```

f(3) is a number; f(x) = 9 is an equation; f(a + 1) is an expression.

### Domain and range

- Find the range by putting the domain values (or the ends of an interval) through the function.
- Values that must be excluded from a domain: any x that makes a denominator zero, such as x = −1 for 6/(x + 1).
- For all real x, a square has least value 0: x² + 2 ≥ 2, so the range of g(x) = x² + 2 is g(x) ≥ 2.
- Range is written in terms of f(x) (or y), not x.

### Inverse functions

```
1. Write y = f(x).
2. Rearrange to make x the subject.
3. Swap x and y (or replace y by x) to write f^-1(x).
```

| f(x) | f⁻¹(x) |
|---|---|
| 4x − 1 | (x + 1)/4 |
| (x + 6)/2 | 2x − 6 |
| x³ − 5 | ∛(x + 5) |
| 6/(x + 1) | 6/x − 1, or (6 − x)/x |

Check: f(f⁻¹(x)) = x. For a single value, f⁻¹(b) is the input that gives b, so you can solve f(x) = b instead of finding the full inverse.

### Composite functions

```
gf(x) = g(f(x)):  put f(x) INTO g          (right-hand letter first)
fg(x) = f(g(x)):  put g(x) INTO f
ff(x) = f(f(x))
```

With f(x) = 4x − 1, g(x) = x² + 2, h(x) = 6/(x + 1):

- fg(x) = 4(x² + 2) − 1 = 4x² + 7
- gf(x) = (4x − 1)² + 2 = 16x² − 8x + 3
- hf(x) = 6/((4x − 1) + 1) = 6/(4x) = 3/(2x), a fraction in its simplest form

### Mapping diagrams

A mapping diagram shows the domain on the left, the range on the right and an arrow from each input to its output. For f(x) = 4x − 1 with domain {−1, 0, 1, 2}, the arrows go −1 → −5, 0 → −1, 1 → 3 and 2 → 7. Reversing every arrow gives the mapping diagram of f⁻¹. Each input has exactly one arrow leaving it; that is what makes the rule a function.

## Exam traps

- **Order of a composite.** fg(x) means g first. Read it right to left.
- **Brackets when substituting.** gf(x) = (4x − 1)² + 2, not 4x − 1² + 2.
- **f⁻¹(x) is not 1/f(x).** The −1 is a label for the inverse, not a power.
- **Range of a square.** x² can be 0, so x² + 2 has least value 2, not "all numbers above 2" with 2 excluded.
- **Unsimplified fractions.** "Give your answer as a fraction in its simplest form" means cancel common factors, as in 6/(4x) = 3/(2x).
- **f(x) = k versus f(k).** One is solved, the other evaluated.
- **Composite domains and ranges** are not required by the syllabus, so do not spend time on them.

## Self-test

Use f(x) = 4x − 1, g(x) = x² + 2 and h(x) = 6/(x + 1), x ≠ −1.

1. Find f(3).
2. Find g(−3).
3. Solve f(x) = 9.
4. Find h(2).
5. Find f⁻¹(x).
6. Find fg(x) in its simplest form.
7. Find gf(x), expanded and simplified.
8. Find fg(1).
9. Find h⁻¹(x).
10. State the range of g for all real values of x.
11. The domain of f is {−1, 0, 1, 2}. List the range.
12. Solve ff(x) = 23.

### Answers

1. **11**.
2. 9 + 2 = **11**.
3. 4x = 10, **x = 2.5**.
4. 6/3 = **2**.
5. y = 4x − 1, x = (y + 1)/4: **f⁻¹(x) = (x + 1)/4**.
6. **4x² + 7**.
7. (4x − 1)² + 2 = **16x² − 8x + 3**.
8. g(1) = 3, f(3) = **11**.
9. y = 6/(x + 1), x + 1 = 6/y, x = 6/y − 1: **h⁻¹(x) = 6/x − 1** (or (6 − x)/x).
10. **g(x) ≥ 2**.
11. **{−5, −1, 3, 7}**.
12. ff(x) = 4(4x − 1) − 1 = 16x − 5 = 23, so **x = 1.75**.

## Where to go next

- [Functions study guide](/resources/igcse-mathematics-0580-functions/) for worked examples, including mapping diagrams.
- [Functions practice questions](/resources/cambridge-igcse-mathematics-0580-functions-cambridge-igcse-maths-practice/) with marked answers.
- [Equations revision notes](/resources/cambridge-igcse-mathematics-0580-equations-cambridge-igcse-maths-revision-notes/), since finding an inverse is changing the subject.
- [Algebraic fractions revision notes](/resources/cambridge-igcse-mathematics-0580-algebraic-fractions-cambridge-igcse-maths-revision-notes/) for simplifying composite fractions.

## Official syllabus

Cambridge International: *Cambridge IGCSE Mathematics 0580 syllabus* for examination in 2025, 2026 and 2027, Topic 2 Algebra and graphs, E2.13 Functions (Extended content only).
