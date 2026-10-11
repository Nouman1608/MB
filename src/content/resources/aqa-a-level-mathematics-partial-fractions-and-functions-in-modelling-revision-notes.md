---
title: "AQA A-level Mathematics: Partial Fractions and Functions in Modelling (7357) -- Revision Notes"
seoTitle: "AQA A-Level Maths Partial Fractions Modelling Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Partial Fractions and Functions in Modelling"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 14
syllabusTopics:
  - qualification: "a-level"
    topic: "b-algebra-and-functions-aqa-alevel-maths"
    subtopic: "b10-partial-fractions-aqa-alevel-maths"
  - qualification: "a-level"
    topic: "b-algebra-and-functions-aqa-alevel-maths"
    subtopic: "b11-functions-in-modelling-aqa-alevel-maths"
description: "Condensed revision notes for AQA A-level Mathematics B10 and B11: partial fraction forms, method, modelling checklist, self-test and common lost marks."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense **B10 (partial fractions)** and **B11 (functions in modelling)** from the AQA A-level Mathematics (7357) specification, version 1.3 (31 January 2018), for A-level exams from June 2018 onwards. Both are Section B content, assessed on Paper 1, and Papers 2 and 3 can also assess any Paper 1 content. For full explanations and longer worked examples, read the [study guide](/resources/aqa-a-level-mathematics-partial-fractions-and-functions-in-modelling/).

Then test yourself with the [practice questions](/resources/aqa-a-level-mathematics-partial-fractions-and-functions-in-modelling-practice/). Course links: [AQA A-level Mathematics hub](/boards/aqa/a-level/mathematics/), [printable checklist](/checklists/aqa/a-level/mathematics/) and the free [10-minute diagnostics](/diagnostics/). For the next step after decomposing, see [Integration](/resources/aqa-a-level-mathematics-integration-revision-notes/) (H6).

## Specification map

| Ref | Content | Notes |
|---|---|---|
| B10 | Partial fractions: denominators no more complicated than squared linear terms, no more than 3 terms, numerators constant or linear | Method and forms below |
| B11 | Functions in modelling, including limitations and refinements | Modelling checklist below |
| OT3 | Mathematical modelling: assumptions, use, interpret, refine | Applies to every B11 answer |

## B10: forms to recall

| Denominator | Decomposition |
|---|---|
| (ax + b)(cx + d) | A/(ax + b) + B/(cx + d) |
| (ax + b)(cx + d)(ex + f) | A/(ax + b) + B/(cx + d) + C/(ex + f) |
| (ax + b)² | A/(ax + b) + B/(ax + b)² |
| (ax + b)(cx + d)² | A/(ax + b) + B/(cx + d) + C/(cx + d)² |

The numerator of each partial fraction is a constant. The number of partial fractions equals the degree of the denominator.

### Method in steps

1. Factorise the denominator completely.
2. Write the form, using one constant per power of each factor.
3. Multiply through by the denominator to get an identity with no fractions.
4. Substitute values that make a factor zero, then use a coefficient comparison or another value for what remains.
5. Check with a value of x not used before.

### Worked reminders

**Distinct factors with a coefficient.** (9x − 5)/((3x − 1)(x − 1)):

```
9x − 5 ≡ A(x − 1) + B(3x − 1)
x = 1:    4 = 2B         → B = 2
x = 1/3: −2 = A(−2/3)    → A = 3
Result: 3/(3x − 1) + 2/(x − 1)
```

**Three distinct factors.** (x + 5)/((x + 1)(x + 2)(x + 3)):

```
x + 5 ≡ A(x + 2)(x + 3) + B(x + 1)(x + 3) + C(x + 1)(x + 2)
x = −1: 4 = 2A      → A = 2
x = −2: 3 = −B      → B = −3
x = −3: 2 = 2C      → C = 1
Result: 2/(x + 1) − 3/(x + 2) + 1/(x + 3)
```

**Repeated factor only.** (2x + 9)/(x + 3)². Write the numerator as 2(x + 3) + 3, then split:

```
(2x + 9)/(x + 3)² = 2/(x + 3) + 3/(x + 3)²
```

**Constant numerator with a repeated factor.** 9/(x(x + 3)²):

```
9 ≡ A(x + 3)² + Bx(x + 3) + Cx
x = 0: 9 = 9A → A = 1;  x = −3: 9 = −3C → C = −3
x² terms: 0 = A + B → B = −1
Result: 1/x − 1/(x + 3) − 3/(x + 3)²
```

**Repeated factor with another factor.** (2x + 8)/((x − 2)(x − 4)²):

```
2x + 8 ≡ A(x − 4)² + B(x − 2)(x − 4) + C(x − 2)
x = 2:   12 = 4A         → A = 3
x = 4:   16 = 2C         → C = 8
x² terms: 0 = A + B      → B = −3
Result: 3/(x − 2) − 3/(x − 4) + 8/(x − 4)²
```

Check with x = 0: left side is 8/(−2 × 16) = −1/4. Right side is −3/2 + 3/4 + 1/2 = −1/4. Correct.

### Must-know distinctions

- A repeated factor (x + 3)² needs two terms: one over (x + 3) and one over (x + 3)².
- A quadratic that factorises is two linear factors; factorise before you start.
- Keep a coefficient inside the factor: 3/(3x − 1), not 1/(x − 1/3).
- Cover-up substitution finds a constant only for a factor that appears once.
- The decomposition is an identity, so any x works for checking, except values that make a denominator zero.

## B11: modelling

### Choosing a function

| Behaviour | Function | Key point |
|---|---|---|
| Constant rate | y = mx + c | Gradient m is the rate in context |
| Maximum or minimum | Quadratic | Vertex; the roots show where it changes sign |
| Approaches a limit | A − Be^(−kt) | Horizontal asymptote at A |
| Repeats | a + b sin(kt), a + b cos(kt) | Period, amplitude, midline |
| Different rules in different ranges | Piecewise | Check the value at each join |
| Two competing parts | Rational function | Large-input behaviour, excluded inputs |

### Modelling checklist

Run through these in order for any "evaluate the model" question.

1. **Assumption.** State what is being ignored or held constant.
2. **Domain.** Which inputs make sense? Check for negative values, values beyond a physical maximum, or division by zero.
3. **Interpolation or extrapolation.** Inside the data range is safer than outside.
4. **Long-term behaviour.** Unbounded growth, negative values and exact repeats are warning signs.
5. **Refinement.** Name a specific change: add a limit, add a term, use a piecewise rule, or gather more data.
6. **Context.** Give the answer with units and a sentence about what it means.

### Worked reminders for modelling

**Quadratic model.** A pen has area A = 18x − x². Complete the square: A = 81 − (x − 9)². The largest area is 81 at x = 9. The domain is 0 < x < 18.

**Limit model.** V = 20 − 14e^(−0.2t). For V = 15, divide by 14 to get e^(−0.2t) = 5/14, then take natural logs: t = 5 ln(14/5) = 5.15.

**Percentage error.** If the model gives 68 and the data value is 66, the error is 2, which is 2/66 = 3.0% of the observed value (2 s.f.). State which value you divide by.

**Piecewise model.** Evaluate each rule at its join. If both rules give the same value, the model is continuous there, and a jump means the two rules disagree.

### Sentences you can adapt

- "The model assumes a constant rate, but in reality the rate slows, so the prediction for large t is too high."
- "t = 40 lies far outside the data, so this is extrapolation and may not be reliable."
- "A refinement is to use A − Be^(−kt), because it levels off at A."
- "The model gives a negative value here, which is impossible in context, so the domain must be restricted."

## Quick self-test

1. Write the form of the decomposition of (px + q)/((x − 1)(2x + 3)).
2. Write the form of the decomposition of (x + 4)/((x + 2)²(x − 3)).
3. Express (6x + 7)/((x + 1)(x + 2)) in partial fractions.
4. Express (5x + 3)/((3x − 1)(x + 2)) in partial fractions.
5. Express (2x + 9)/(x + 3)² in partial fractions.
6. Express (x + 5)/((x + 1)(x + 2)(x + 3)) in partial fractions.
7. A model gives V = 20 − 14e^(−0.2t). State V when t = 0, the value V approaches, and the time when V = 15.
8. A linear model y = 3.2x + 14 is fitted to data with x between 2 and 10. Which of x = 6 and x = 25 is a safer prediction, and why?
9. A population is modelled by P = 1200 × 1.04^t. Find P when t = 50 and give one limitation.
10. A rectangle has area A = 18x − x² for side x. State a sensible domain and the largest area.

### Answers

1. A/(x − 1) + B/(2x + 3).
2. A/(x − 3) + B/(x + 2) + C/(x + 2)².
3. 1/(x + 1) + 5/(x + 2).
4. 2/(3x − 1) + 1/(x + 2).
5. 2/(x + 3) + 3/(x + 3)².
6. 2/(x + 1) − 3/(x + 2) + 1/(x + 3).
7. V = 6 at t = 0; V approaches 20; for V = 15, 14e^(−0.2t) = 5, so t = 5 ln 2.8 = 5.15 (3 s.f.).
8. x = 6 is interpolation inside the data range (y = 33.2). x = 25 is extrapolation (y = 94) and is less reliable.
9. P = 8528 to the nearest whole number. Limitation: growth at a fixed 4% a year ignores limits on space and resources, so the population cannot grow indefinitely.
10. Domain 0 < x < 18, since the area must be positive. The vertex is at x = 9, giving a largest area of 81.

## Last-week routine

- Spend ten minutes decomposing four fractions, one of each type in the forms table, and check each with a spare value of x.
- Pick two models from the choosing table and write one assumption, one limitation and one refinement for each.
- Redo any practice question where you lost the final communication mark, because those marks depend on wording rather than algebra.
- Write your own "Sentences you can adapt" list in your own words, so it is quick to recall in the exam.

## Where marks are usually lost

- Writing the form with a missing term for a repeated factor.
- Using the wrong factor when substituting, for example x = 3 for the factor (3x − 1).
- Dropping the coefficient when the factor is (2x + 1) or (3x − 1).
- Not factorising a quadratic denominator before starting.
- Arithmetic slips in the substitution step. Check with one extra value of x.
- Giving a modelling answer as a bare number with no units and no sentence about what it means.
- Naming a limitation without explaining why it matters, or suggesting a refinement without saying what it changes.
- Accepting an extrapolated value without comment.
- Stating a domain but not testing the end points in the model.
- Writing an answer in the wrong form, such as one combined fraction when the question asks for partial fractions.

## Official syllabus

AQA A-level Mathematics (7357) specification, version 1.3 (31 January 2018), A-level exams June 2018 onwards, published by AQA. Sections B10 and B11 and theme OT3 are the sources for these notes.
