---
title: "Edexcel International GCSE Mathematics A (4MA1): Function notation -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["igcse"]
topic: "Sequences, functions and graphs"
boards: ["edexcel"]
qualifications: ["igcse"]
syllabusCodes: ["4MA1"]
syllabusSeries: "Specification Issue 2, November 2017"
order: 3.2
syllabusTopics:
  - qualification: "igcse"
    topic: "sequences-functions-and-graphs-edexcel-igcse-maths"
    subtopic: "function-notation-edexcel-igcse-maths"
description: "Condensed Higher tier 4MA1 section 3.2 notes: function notation, domain, range, excluded values, composite and inverse functions, with traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Quick-recall notes for section 3.2, Function notation, in Pearson Edexcel International GCSE Mathematics A (4MA1). The whole section is **Higher tier only**. For explanations and worked examples, read the [function notation study guide](/resources/edexcel-igcse-mathematics-4ma1-function-notation/); for exam-style questions, use the [function notation practice questions](/resources/edexcel-igcse-mathematics-4ma1-function-notation-practice/).

## The four statements

- **3.2 A:** a function is a mapping between elements of two sets; each input has exactly one output.
- **3.2 B:** notation f(x) = ... and f : x ↦ ...
- **3.2 C:** domain, range, and values excluded from a domain.
- **3.2 D:** composite functions fg ("do g first, then f") and inverse functions f⁻¹.

## Key terms

| Term | Meaning |
|---|---|
| Function | A rule giving exactly one output for each input |
| Mapping | Pairing each element of one set with an element of another |
| Domain | The set of inputs allowed |
| Range | The set of outputs produced |
| f(a) | The output of f when the input is a |
| f : x ↦ 4x − 7 | "f maps x to 4x − 7"; the same as f(x) = 4x − 7 |
| Composite function fg | f(g(x)): apply g, then f |
| Inverse function f⁻¹ | The function that reverses f |
| Excluded value | An input that must be left out of the domain |

## Mappings: function or not?

| Rule on the given inputs | Function? | Reason |
|---|---|---|
| x ↦ 2x + 1 | Yes | one output for each input |
| x ↦ x² | Yes | 2 and −2 share the output 4, which is allowed |
| x ↦ ±√x | No | 9 would map to 3 and to −3 |
| "a person ↦ their date of birth" | Yes | each person has one date of birth |
| "a date ↦ a person born on it" | No | many people share a date |

The test is always: can one input give more than one output? Several inputs sharing an output is fine.

## Building the composite step by step

Write the outer function with an empty bracket, then put the whole inner function in it:

```
f(x) = 4x − 7, g(x) = x + 2
fg(x) = f(   x + 2   ) = 4(x + 2) − 7 = 4x + 1
gf(x) = g( 4x − 7 ) = (4x − 7) + 2 = 4x − 5
```

## Evaluating and solving

```
f(x) = 4x − 7
f(3)     = 5
f(−2)    = −15
f(a + 1) = 4a − 3
f(x) = 13  →  x = 5        (solve: output given, input wanted)
```

## Excluded values and range

| Function | Excluded or restricted | Range |
|---|---|---|
| 1/(x + 4) | x ≠ −4 (denominator zero) | all values except 0 |
| √(x − 5) | x ≥ 5 (no root of a negative) | ≥ 0 |
| x² + 3 | none | ≥ 3 |
| x² − 6x + 11 = (x − 3)² + 2 | none | ≥ 2 |
| 2x + 1 | none | all real numbers |

For a quadratic, complete the square: the constant at the end is the least value when the x² coefficient is positive.

## Composite functions

```
f(x) = (x + 5)/3,  g(x) = 2x²

fg(2): g(2) = 8,  f(8) = 13/3
gf(1): f(1) = 2,  g(2) = 8
fg(x) = (2x² + 5)/3
gf(x) = 2(x + 5)²/9
ff(x) for f(x) = 3 − 2x:  3 − 2(3 − 2x) = 4x − 3
```

Order: the function written next to x acts first.

## Inverse functions

```
1  y = f(x)
2  make x the subject
3  swap: f⁻¹(x) = ...
```

| f(x) | f⁻¹(x) |
|---|---|
| (x + 5)/3 | 3x − 5 |
| 3 − 2x | (3 − x)/2 |
| 4/(x + 1) | 4/x − 1, x ≠ 0 |
| (x + 4)/(2x − 3) | (3x + 4)/(2x − 1) |
| x³ | ∛x |

Check: f⁻¹(f(a)) = a for any value a you choose.

## Exam traps

- **fg is not f × g**, and fg is usually not gf.
- **f⁻¹(x) is not 1/f(x).** For f(x) = 2x, f⁻¹(x) = x/2 but 1/f(x) = 1/(2x).
- **Final letter.** An inverse must be written in terms of x, starting "f⁻¹(x) =".
- **Squaring a fraction.** ((x + 5)/3)² = (x + 5)²/9: square the denominator too.
- **Range notation.** Write f(x) ≥ 3, not x ≥ 3.
- **Two x terms in an inverse.** Collect and factorise, as for a formula with the subject twice.
- **One input, two outputs.** If a rule can give two outputs for one input (such as ±√x), it is not a function.

## Useful facts

- f⁻¹f(x) = x and ff⁻¹(x) = x.
- If f(a) = b, then f⁻¹(b) = a, so you can find f⁻¹(b) without finding f⁻¹(x): solve f(x) = b.
- An inverse has its own domain: g⁻¹(x) = 4/x − 1 needs x ≠ 0.
- A self-inverse function satisfies f⁻¹ = f; for example f(x) = 6 − x, since f(f(x)) = 6 − (6 − x) = x.

## Self-test

1. f(x) = 4x − 7. Find f(−2).
2. f(x) = 4x − 7. Solve f(x) = 13.
3. f : x ↦ x² − 4x. Find f(−1).
4. Which value must be excluded from the domain of 5/(3x − 12)?
5. State the domain restriction for √(x + 2).
6. Find the range of f(x) = x² − 6x + 11.
7. f(x) = (x + 5)/3 and g(x) = 2x². Find fg(2).
8. With the same f and g, find gf(x).
9. f(x) = 3 − 2x. Find ff(x).
10. Find f⁻¹(x) when f(x) = (x + 5)/3.
11. Find h⁻¹(x) when h(x) = (x + 4)/(2x − 3).
12. f(x) = 2x + k and f⁻¹(11) = 4. Find k.

### Answers

1. **−15**.
2. **x = 5**.
3. 1 + 4 = **5**.
4. **x = 4**.
5. **x ≥ −2**.
6. **f(x) ≥ 2**.
7. g(2) = 8 and f(8) = **13/3**.
8. **2(x + 5)²/9**.
9. **4x − 3**.
10. **3x − 5**.
11. **(3x + 4)/(2x − 1)**.
12. f(4) = 11, so 8 + k = 11 and **k = 3**.
