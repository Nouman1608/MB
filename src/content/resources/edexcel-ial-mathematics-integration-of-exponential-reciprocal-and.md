---
title: "Pearson Edexcel International Advanced Level Mathematics: Exponential, reciprocal and trig integration (YMA01)"
seoTitle: "Edexcel IAL Maths P3 Integration by Recognition Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Integration of exponential, reciprocal and trigonometric functions, and integration by recognition"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 149
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p3-pure-mathematics-3-edexcel-alevel-maths"
    subtopic: "p3-integration-edexcel-alevel-maths"
description: "Study guide to P3 integration for Edexcel International Advanced Level Maths: e^kx, 1/x, sin kx, cos kx, recognition and trig identities, worked."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This study guide covers Pearson Edexcel International Advanced Level Mathematics (YMA01), aligned to the *International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics* specification (Issue 3, April 2019). It teaches Pure Mathematics 3 (P3) topics 5.1 and 5.2. The specification states that P3 is compulsory for IAL Mathematics and Pure Mathematics only; it is not part of IAS.

Use it with the [revision notes](/resources/edexcel-ial-mathematics-integration-of-exponential-reciprocal-and-revision-notes/) and the [practice questions](/resources/edexcel-ial-mathematics-integration-of-exponential-reciprocal-and-practice/). If you need powers of x first, see [differentiating and integrating powers of x](/resources/edexcel-ial-mathematics-differentiating-and-integrating-powers-of-x-gradients/). The course hub is at [Edexcel IAL Mathematics](/boards/edexcel/a-level/mathematics/), the [printable checklist](/checklists/edexcel/a-level/mathematics/) tracks your progress, and the [free diagnostics](/diagnostics/) show which parts need work.

## What this unit covers

| Topic | What you must be able to do |
|---|---|
| 5.1 | Integrate e^kx, 1/x, sin kx and cos kx, and their sums and differences, for example sin 3x, e^5x and 1/(2x) |
| 5.2 | Integrate by recognition of known derivatives, including ∫ f′(x)/f(x) dx = ln|f(x)| + c and ∫ f′(x)[f(x)]ⁿ dx = [f(x)]ⁿ⁺¹/(n + 1) + c, for example tan x and sec² 2x |
| 5.2 | Use trigonometric identities to integrate, for example sin² x, tan² x and cos² 3x |

Every result here is something you can check by differentiating. Do that habitually: differentiate your answer and see whether the original integrand comes back.

## 5.1 Standard integrals

Each result below reverses a derivative you already know.

| Integrand | Integral |
|---|---|
| e^kx | (1/k) e^kx + c |
| 1/x | ln|x| + c |
| sin kx | −(1/k) cos kx + c |
| cos kx | (1/k) sin kx + c |

In each case k is a non-zero constant. The factor 1/k appears because differentiating e^kx, sin kx or cos kx brings out a factor k (and a sign for cos). To integrate you divide by k.

The modulus in ln|x| matters. The function 1/x is defined for negative x too, and ln x is not. Write ln|x| unless the question tells you x > 0.

A constant multiple of 1/x gives a constant multiple of ln|x|. So ∫ 1/(2x) dx = ½ ∫ 1/x dx = ½ ln|x| + c. You may see this written as ½ ln|2x| + c. The two forms differ only by a constant, which the arbitrary constant absorbs.

### Worked example 1: a sum of standard terms

Find ∫ (8e^(−2x) + 3/x − 10 cos 5x) dx, for x > 0.

```
∫ 8e^(−2x) dx = 8 × e^(−2x)/(−2) = −4e^(−2x)
∫ 3/x dx      = 3 ln x
∫ 10 cos 5x dx = 10 × (sin 5x)/5 = 2 sin 5x
```

So the result is **−4e^(−2x) + 3 ln x − 2 sin 5x + c**. The minus sign before 10 cos 5x carries through. Differentiating gives 8e^(−2x) + 3/x − 10 cos 5x, which confirms it.

### Worked example 2: definite integrals with exact answers

Evaluate ∫ from 0 to π/6 of (4 sin 3x + cos 2x) dx.

```
Antiderivative: −(4/3) cos 3x + ½ sin 2x
At x = π/6:  −(4/3) cos(π/2) + ½ sin(π/3) = 0 + ½ × (√3/2) = √3/4
At x = 0:    −(4/3) cos 0 + ½ sin 0 = −4/3
Difference:  √3/4 − (−4/3) = 4/3 + √3/4
```

The answer is **4/3 + √3/4**. Keep radians throughout, and keep the exact values of sin and cos at standard angles.

### Worked example 3: mixing e^kx and 1/x

Evaluate ∫ from 1 to 4 of (e^(x/2) + 6/x) dx.

```
Antiderivative: 2e^(x/2) + 6 ln x      (since 1/k = 2 when k = ½)
At x = 4:  2e² + 6 ln 4 = 2e² + 12 ln 2
At x = 1:  2e^(1/2) + 0
```

The answer is **2e² − 2√e + 12 ln 2**. Here 6 ln 4 = 12 ln 2 uses the power law for logarithms.

## 5.2 Integration by recognition

Recognition means spotting that the integrand is the result of differentiating a known function, perhaps up to a constant factor. There is no new rule to memorise beyond the two forms below.

### Form 1: f′(x)/f(x)

If the numerator is the derivative of the denominator, then

∫ f′(x)/f(x) dx = ln|f(x)| + c

This follows from the chain rule: d/dx of ln|f(x)| is f′(x)/f(x). If the numerator is only a constant multiple of f′(x), take the constant outside first.

### Worked example 4: constant multiples and signs

Find (a) ∫ 3x²/(x³ + 2) dx, (b) ∫ 6/(3 − 2x) dx, (c) ∫ eˣ/(eˣ + 5) dx.

(a) The derivative of x³ + 2 is 3x², which is the numerator exactly. The answer is **ln|x³ + 2| + c**.

(b) The derivative of 3 − 2x is −2. Write 6 = −3 × (−2):

```
∫ 6/(3 − 2x) dx = −3 ∫ (−2)/(3 − 2x) dx = −3 ln|3 − 2x| + c
```

(c) The derivative of eˣ + 5 is eˣ, so the answer is **ln(eˣ + 5) + c**. The modulus is not needed because eˣ + 5 is always positive.

A definite integral using this form: ∫ from 0 to 2 of x/(x² + 3) dx. The derivative of x² + 3 is 2x, so the integrand is ½ × 2x/(x² + 3):

```
[½ ln(x² + 3)] from 0 to 2 = ½ ln 7 − ½ ln 3 = ½ ln(7/3)
```

### The integral of tan x

Write tan x as sin x / cos x. The derivative of cos x is −sin x, so

```
∫ tan x dx = −∫ (−sin x)/cos x dx = −ln|cos x| + c
```

This can also be written ln|sec x| + c. Likewise ∫ tan 2x dx = −½ ln|cos 2x| + c. For a definite integral:

```
∫ from 0 to π/3 of tan x dx = [−ln(cos x)] = −ln(½) + ln 1 = ln 2
```

### The integral of sec² kx

You know that d/dx (tan x) = sec² x. So ∫ sec² x dx = tan x + c, and with a linear argument you divide by k:

```
∫ sec² 2x dx = ½ tan 2x + c
∫ from 0 to π/8 of sec² 2x dx = ½ tan(π/4) − ½ tan 0 = ½
```

### Form 2: f′(x)[f(x)]ⁿ

If the integrand is a derivative times a power of the function, then for n ≠ −1

∫ f′(x)[f(x)]ⁿ dx = [f(x)]ⁿ⁺¹/(n + 1) + c

The excluded case n = −1 is Form 1. You do not need a new method: ask "what is inside, and is its derivative sitting beside it?"

### Worked example 5: spotting the derivative

Find (a) ∫ sin x cos³ x dx, (b) ∫ x(x² + 1)⁵ dx, (c) ∫ cos x √(sin x) dx.

(a) Take f = cos x, so f′ = −sin x. The integrand is −f′f³:

```
∫ sin x cos³ x dx = −∫ (−sin x)(cos x)³ dx = −(cos x)⁴/4 + c
```

(b) Take f = x² + 1, so f′ = 2x. The integrand is ½ f′f⁵:

```
∫ x(x² + 1)⁵ dx = ½ × (x² + 1)⁶/6 + c = (x² + 1)⁶/12 + c
```

(c) Take f = sin x, f′ = cos x, n = ½:

```
∫ cos x (sin x)^(1/2) dx = (sin x)^(3/2)/(3/2) + c = (2/3)(sin x)^(3/2) + c
```

A related case is ∫ sec² x tan⁴ x dx. With f = tan x, f′ = sec² x, the answer is **tan⁵ x / 5 + c**.

## 5.2 Using trigonometric identities

Some trigonometric products and squares cannot be recognised directly. Rewrite them first with an identity, then integrate term by term.

| Identity | Use |
|---|---|
| cos 2A = 1 − 2 sin² A, so sin² A = ½(1 − cos 2A) | Integrate sin² |
| cos 2A = 2 cos² A − 1, so cos² A = ½(1 + cos 2A) | Integrate cos² |
| sec² A = 1 + tan² A, so tan² A = sec² A − 1 | Integrate tan² |
| sin 2A = 2 sin A cos A | Integrate sin x cos x |

### Worked example 6: squares of sine, cosine and tangent

(a) ∫ sin² x dx = ∫ ½(1 − cos 2x) dx = **x/2 − (sin 2x)/4 + c**.

(b) ∫ cos² 3x dx. Put A = 3x, so cos² 3x = ½(1 + cos 6x):

```
∫ ½(1 + cos 6x) dx = x/2 + (sin 6x)/12 + c
```

For the definite integral from 0 to π/6, the sin term is sin π = 0 at the top and 0 at the bottom, so the value is (π/6)/2 = **π/12**.

(c) ∫ tan² x dx = ∫ (sec² x − 1) dx = **tan x − x + c**. Over 0 to π/4 this gives (1 − π/4) − 0 = **1 − π/4**.

### Worked example 7: expanding a bracket first

Find ∫ (1 + tan x)² dx.

```
(1 + tan x)² = 1 + 2 tan x + tan² x
             = 1 + 2 tan x + (sec² x − 1)
             = sec² x + 2 tan x
```

Then ∫ (sec² x + 2 tan x) dx = **tan x − 2 ln|cos x| + c**. The identity tan² x = sec² x − 1 cancels the constant term and leaves two standard results, so no further work is needed.

## Choosing a method

Ask these questions in order:

1. Is the integrand a standard form (e^kx, 1/x, sin kx, cos kx) or a sum of them? Integrate term by term.
2. Is it a fraction whose numerator is, or is a multiple of, the derivative of the denominator? Use ln|f(x)|.
3. Is it a derivative multiplied by a power of its own function? Use the power form.
4. Is there a squared trigonometric function? Use an identity to reduce the power.

Differentiate your answer to confirm it.

## Common errors

- Forgetting 1/k. Writing ∫ e^(5x) dx = e^(5x) loses the factor 1/5.
- Losing the sign on sin kx. The integral of sin kx is −(1/k) cos kx, with a minus sign.
- Writing ∫ 1/(2x) dx as ln|2x| with no ½. The correct form carries the factor ½.
- Treating tan x as if its integral were sec² x. That is the derivative.
- Applying f′/f when the numerator is not a multiple of f′. For example, x/(x² + 3x) is not of that form.
- Dropping the modulus in ln|f(x)| when the function can be negative.
- Integrating sin² x as (sin³ x)/3 or as −cos² x. Squared functions need an identity first.
- Substituting degrees. All of this assumes radians.

## Next steps

Work through the [practice questions](/resources/edexcel-ial-mathematics-integration-of-exponential-reciprocal-and-practice/), then use the [revision notes](/resources/edexcel-ial-mathematics-integration-of-exponential-reciprocal-and-revision-notes/) for quick recall. The [exam preparation guide](/resources/edexcel-ial-mathematics-exam-preparation/) covers wider strategy.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019, first teaching September 2018, published by Pearson Education Limited. This guide covers Unit P3 topics 5.1 and 5.2.
