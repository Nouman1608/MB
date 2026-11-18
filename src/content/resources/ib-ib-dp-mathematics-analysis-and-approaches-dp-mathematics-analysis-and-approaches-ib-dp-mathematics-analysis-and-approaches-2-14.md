---
title: "IB DP Mathematics: Analysis and Approaches (AA): 2.14 Odd and even functions; self-inverse functions (AHL only)"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Functions"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 2.14
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-14"
description: "HL study guide to IB Maths AA 2.14: proving functions odd or even, inverses with domain restrictions, and recognising and proving self-inverse functions."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers **section 2.14 of IB DP Mathematics: Analysis and Approaches** (first assessment 2021), which is **HL only** (AHL). The section has three parts: odd and even functions (including periodic ones), finding the inverse function f⁻¹(x) including a domain restriction, and self-inverse functions. The [further functions study guide](/resources/ib-dp-mathematics-aa-hl-further-functions/) gives the definitions and a short example of each. This page explains the algebra of odd and even functions, how to choose the right restriction and the right square root, and a general test for self-inverse rational functions.

Follow it with the [odd, even and self-inverse revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-14-revision-notes/) and the [odd, even and self-inverse practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-14-practice/).

## Odd and even: what the definitions really require

- f is **even** if f(−x) = f(x) for **every** x in the domain. The graph has the y-axis as a line of symmetry.
- f is **odd** if f(−x) = −f(x) for **every** x in the domain. The graph has rotational symmetry of order 2 about the origin.

Two consequences students miss:

1. **The domain must be symmetric about 0.** f(x) = x², 0 ≤ x ≤ 3, is not even, because f(−2) is not defined. The definition must make sense for every x in the domain.
2. **An odd function defined at 0 passes through the origin.** f(0) = −f(0) forces f(0) = 0. So f(x) = x³ + 1 cannot be odd: f(0) = 1.

**Proving and disproving need different evidence.** To prove "even" or "odd", work with a general x. To prove "neither", one specific value is enough, provided it breaks **both** conditions.

## Building functions from odd and even pieces

These rules let you classify many functions without expanding:

| Combination | Result |
|---|---|
| even × even | even |
| odd × odd | even |
| odd × even | odd |
| odd + odd | odd |
| even + even | even |
| odd + even (both non-zero) | usually neither; check |
| f(g(x)) with g even (any f) | even |
| f(g(x)) with f even and g odd | even |
| f(g(x)) with f and g both odd | odd |

The rule "odd × odd = even" follows from (−1)(−1) = 1: if f and g are odd, then f(−x)g(−x) = (−f(x))(−g(x)) = f(x)g(x).

### Periodic functions

The guide includes periodic functions in this section. Start from sin x (odd), cos x (even) and tan x (odd):

- sin 4x is odd and cos 5x is even, since replacing x by −x inside does not change which rule applies.
- sin²x is even (odd × odd), and sin x cos x is odd (odd × even).
- x sin x is even, x² tan x is odd, and cos x + sin x is neither.

### Worked example 1

Classify f(x) = ln(x² + 1), g(x) = eˣ − e⁻ˣ and h(x) = x + cos x.

```
f(−x) = ln((−x)² + 1) = ln(x² + 1) = f(x)          → even
g(−x) = e⁻ˣ − eˣ = −(eˣ − e⁻ˣ) = −g(x)             → odd
h(π)  = π − 1    and    h(−π) = −π − 1
h(−π) ≠ h(π) and h(−π) ≠ −h(π) = 1 − π             → neither
```

For h, the single value x = π fails both tests, which proves "neither". A sentence stating this earns the reasoning mark.

## Inverse functions and domain restrictions

f⁻¹ exists only when f is **one-to-one**: each output comes from exactly one input. A function such as a quadratic fails this, so the domain is restricted to one side of the turning point. The method:

1. Find the turning point (complete the square or use x = −b/2a).
2. Restrict to x ≥ (turning x) or x ≤ (turning x), as the question says.
3. Find the range of the restricted f: this becomes the domain of f⁻¹.
4. Swap x and y, rearrange, and choose the sign of any square root so that f⁻¹ outputs values in the restricted domain of f.

### Worked example 2: the negative square root

Let f(x) = 4 − (x − 1)², x ≤ 1. Find f⁻¹(x) and its domain.

```
Range of f: the vertex (1, 4) is a maximum, so f(x) ≤ 4.
y = 4 − (x − 1)²
(x − 1)² = 4 − y
x − 1 = −√(4 − y)          (x ≤ 1, so x − 1 ≤ 0)
f⁻¹(x) = 1 − √(4 − x),  x ≤ 4
```

Check: f(−1) = 4 − 4 = 0, and f⁻¹(0) = 1 − 2 = −1. Taking the positive root would give 3, which is outside the domain of f. The choice of sign is where most marks go.

Two facts to keep in mind: the graphs of f and f⁻¹ are reflections of each other in y = x, and f(f⁻¹(x)) = f⁻¹(f(x)) = x on the appropriate domains.

## Self-inverse functions

f is **self-inverse** when f⁻¹ = f, which is the same as f(f(x)) = x for every x in the domain. Its graph is its own reflection in y = x, so it is symmetric about that line.

Familiar examples:

- f(x) = c − x (gradient −1, perpendicular to y = x);
- f(x) = k/x, x ≠ 0;
- f(x) = √(1 − x²), 0 ≤ x ≤ 1 (a quarter of the unit circle).

Check the last one: f(f(x)) = √(1 − (1 − x²)) = √(x²) = x, because x ≥ 0 on this domain.

### A general result for rational functions

Let f(x) = (ax + b)/(cx − a), with a² + bc ≠ 0. Then

```
f(f(x)) = [a(ax + b) + b(cx − a)] / [c(ax + b) − a(cx − a)]
        = (a²x + bcx) / (bc + a²)
        = x
```

So any function of this shape, where the coefficient of x on top is the **negative** of the constant below, is self-inverse. The vertical asymptote x = a/c and the horizontal asymptote y = a/c meet on y = x, as the symmetry demands.

### Worked example 3: finding a parameter

f(x) = (2x + 3)/(x + k). Find the value of k for which f is self-inverse.

Matching the form (ax + b)/(cx − a) with a = 2 and c = 1 needs the denominator x − 2, so **k = −2**. The condition a² + bc = 4 + 3 = 7 ≠ 0 holds. A direct check of f(f(x)) with k = −2 gives 7x/7 = x.

## Common mistakes

- Testing one value and concluding "even" or "odd". One value can only prove "neither".
- Ignoring a domain that is not symmetric about 0.
- Claiming f(x) = x³ + 1 is odd because x³ is odd.
- Choosing the positive square root automatically when finding an inverse.
- Forgetting to state the domain of f⁻¹, which is the range of f.
- Thinking a function is self-inverse because f(x) = f⁻¹(x) at one point. That only means the graphs meet; it must hold for every x.
- Assuming every function symmetric about some line is self-inverse; the line must be y = x.

## Exam technique: command words

- **Show that f is even/odd**: start from f(−x), simplify step by step, and end with "= f(x), so f is even" or "= −f(x), so f is odd".
- **Determine whether f is odd, even or neither**: give a justification either way. For "neither", quote a specific x and both values.
- **Find f⁻¹(x) and state its domain**: show the swap and rearrangement, justify the sign of any root, and state the domain.
- **Show that f is self-inverse**: compute f(f(x)) in full and simplify to x. Simplify the numerator and denominator separately before dividing.
- **Hence write down f⁻¹(x)**: after showing f(f(x)) = x, the answer is simply f(x).

## Where to go next

Fix the definitions and rules with the [odd, even and self-inverse revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-14-revision-notes/), then test yourself with the [odd, even and self-inverse practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-14-practice/). The graph y = f(|x|), which is always even, is in the [modulus and related graphs guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-16/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus section AHL 2.14.
