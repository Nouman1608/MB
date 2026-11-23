---
title: "IB DP Mathematics: Analysis and Approaches (AA): 2.5 Composite functions and inverse functions"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Functions"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 2.05
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-5"
description: "Study guide to IB Maths AA 2.5: composite functions and their domains, the identity function, finding and checking inverse functions, with worked examples."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This study guide covers section 2.5 of IB Diploma Programme Mathematics: Analysis and Approaches, common to SL and HL. The IB *Mathematics: analysis and approaches guide* (first assessment 2021) lists composite functions, written (f ∘ g)(x) = f(g(x)); the identity function; and finding the inverse function f⁻¹(x), with (f ∘ f⁻¹)(x) = (f⁻¹ ∘ f)(x) = x.

The [straight lines, functions, inverses and quadratics guide](/resources/ib-dp-mathematics-aa-sl-lines-functions-quadratics/) shows the basic method. This page goes deeper: the domain of a composite (a common source of lost marks), splitting a function into a composite, inverses of rational functions, restricting a domain so an inverse exists, and solving equations that involve composites and inverses. The ideas of domain, range and inverse as a reflection come from [2.2](/resources/ib-dp-mathematics-analysis-and-approaches-2-2/). Afterwards, use the [2.5 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-2-5-revision-notes/) and the [2.5 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-2-5-practice/).

## Composite functions

(f ∘ g)(x) = f(g(x)) means: apply g first, then apply f to the result. Read it from right to left.

- (f ∘ g)(2): find g(2), then put that into f.
- (f ∘ g)(x): replace every x in the rule for f by the whole expression g(x).
- In general f ∘ g ≠ g ∘ f.
- f ∘ f means apply f twice.

### The domain of a composite

For f(g(x)) to exist, x must be in the domain of g **and** g(x) must be in the domain of f. Simplifying the formula can hide this.

### Worked example 1: same functions, different domains

Let f(x) = √(x − 1), x ≥ 1, and g(x) = x² + 3, x ∈ ℝ.

```
(f ∘ g)(x) = √((x² + 3) − 1) = √(x² + 2)
  g(x) ≥ 3 for every x, so g(x) is always in the domain of f
  Domain: x ∈ ℝ        Range: (f ∘ g)(x) ≥ √2

(g ∘ f)(x) = (√(x − 1))² + 3 = x + 2
  but f only accepts x ≥ 1
  Domain: x ≥ 1        Range: (g ∘ f)(x) ≥ 3
```

The simplified rule x + 2 looks as if it works for every x, but g ∘ f is not defined at x = 0, because f(0) does not exist. State the domain from the inner function, not from the simplified formula.

### Splitting a function into a composite

Recognising a composite is a key skill for the chain rule in calculus. Look for an "inside" expression:

| Function h(x) | Inner g(x) | Outer f(x) | h = f ∘ g |
|---|---|---|---|
| (3x − 2)⁵ | 3x − 2 | x⁵ | f(g(x)) = (3x − 2)⁵ |
| √(5x + 1) | 5x + 1 | √x | f(g(x)) = √(5x + 1) |
| e^(x²) | x² | eˣ | f(g(x)) = e^(x²) |

## The identity function and inverses

The **identity function** I(x) = x leaves every input unchanged. For any function, f ∘ I = I ∘ f = f.

The inverse of f is the function f⁻¹ with

**(f ∘ f⁻¹)(x) = (f⁻¹ ∘ f)(x) = x.**

So composing a function with its inverse gives the identity. This is also the way to **check** an inverse you have found.

### Method for finding f⁻¹(x)

1. Write y = f(x).
2. Rearrange to make x the subject.
3. Swap x and y (or write f⁻¹(x) with x as the variable).
4. State the domain of f⁻¹: it is the range of f.

### Worked example 2: inverse of a rational function

Find f⁻¹(x) for f(x) = (3x + 1)/(x − 2), x ≠ 2.

```
y = (3x + 1)/(x − 2)
y(x − 2) = 3x + 1
xy − 2y = 3x + 1
xy − 3x = 2y + 1          (collect the x terms)
x(y − 3) = 2y + 1
x = (2y + 1)/(y − 3)
f⁻¹(x) = (2x + 1)/(x − 3),  x ≠ 3
```

The key step is collecting every x term on one side and factorising x out. The range of f is y ≠ 3 (the horizontal asymptote of f), which matches the domain of f⁻¹.

**Check:** f(f⁻¹(x)) has numerator 3(2x + 1)/(x − 3) + 1 = 7x/(x − 3) and denominator (2x + 1)/(x − 3) − 2 = 7/(x − 3), so f(f⁻¹(x)) = 7x/7 = x.

### Worked example 3: restricting the domain

Let f(x) = x² − 6x + 10.

(a) Find the largest domain of the form x ≥ a for which f has an inverse. (b) Find f⁻¹(x) and its domain.

```
(a) f(x) = (x − 3)² + 1, vertex (3, 1)
    f is one-to-one on x ≥ 3, so a = 3
(b) y = (x − 3)² + 1
    x − 3 = +√(y − 1)        (positive root, because x ≥ 3)
    f⁻¹(x) = 3 + √(x − 1),   x ≥ 1
```

Choosing the negative root would give the left half of the parabola, which is not in the restricted domain.

## Equations with composites and inverses

### Worked example 4: solving (f ∘ g)(x) = (g ∘ f)(x)

Let f(x) = x + 2 and g(x) = x².

```
(f ∘ g)(x) = x² + 2
(g ∘ f)(x) = (x + 2)² = x² + 4x + 4
x² + 2 = x² + 4x + 4  →  4x = −2  →  x = −1/2
```

Check: (f ∘ g)(−1/2) = 1/4 + 2 = 9/4 and (g ∘ f)(−1/2) = (3/2)² = 9/4.

### Solving f(x) = f⁻¹(x)

When f is **increasing**, the graphs of f and f⁻¹ can only meet on the line y = x, so you may solve the simpler equation f(x) = x. For f(x) = 2x − 3: 2x − 3 = x gives x = 3, and indeed f(3) = f⁻¹(3) = 3.

When f is decreasing, this shortcut can fail. For f(x) = −x³, f⁻¹(x) = −∛x, and f(1) = f⁻¹(1) = −1, an intersection that is not on y = x.

## Using a composite in context

Conversions chain naturally. Celsius to Fahrenheit is F(c) = 1.8c + 32, and Celsius to kelvin is K(c) = c + 273.15. To convert Fahrenheit to kelvin, first undo F, then apply K:

```
F⁻¹(x) = (x − 32)/1.8
(K ∘ F⁻¹)(x) = (x − 32)/1.8 + 273.15
(K ∘ F⁻¹)(98.6) = 66.6/1.8 + 273.15 = 37 + 273.15 = 310.15
```

## Common mistakes

- Working out g(f(x)) when f(g(x)) was asked for.
- Giving the domain of a composite from its simplified formula.
- Swapping x and y but not making x the subject properly, especially with rational functions.
- Writing f⁻¹(x) = 1/f(x).
- Keeping ± when the domain fixes one sign.
- Forgetting to state the domain of f⁻¹.
- Assuming f(x) = f⁻¹(x) always reduces to f(x) = x.

## Exam technique

- **Find (f ∘ g)(x):** substitute, then expand or simplify as far as reasonable.
- **Find f⁻¹(x):** show the rearrangement; the final answer must be in terms of x.
- **Show that g is the inverse of f:** compute f(g(x)) and simplify to x; one composite is usually enough unless both are asked for.
- **State the domain:** use the range of f for f⁻¹, and the inner function for a composite.
- These are Paper 1 skills, so exact algebra is expected; on Paper 2 you can check a value numerically.

## Where to go next

Condense this with the [2.5 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-2-5-revision-notes/), then try the [2.5 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-2-5-practice/). Inverses of exponential and logarithmic functions follow in the [2.9 study guide](/resources/ib-dp-mathematics-analysis-and-approaches-2-9/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus section SL 2.5.
