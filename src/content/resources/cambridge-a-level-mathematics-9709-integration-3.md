---
title: "Cambridge A Level Mathematics (9709): Integration (Pure Mathematics 3)"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 3 – Pure Mathematics 3"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 3.5
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-3-cambridge-alevel"
    subtopic: "integration-cambridge-alevel-maths-3"
description: "Study guide to Cambridge 9709 Paper 3 section 3.5 Integration: standard forms, trig identities, partial fractions, kf′(x)/f(x), parts and given substitutions."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section **3.5 Integration** of Pure Mathematics 3 in the Cambridge International AS & A Level Mathematics 9709 syllabus for 2026 and 2027, examined on Paper 3 (1 hour 50 minutes, 75 marks). Its techniques are needed again in section 3.8, where every differential equation is solved by integration. The [Pure Mathematics 3 study guide](/resources/a-level-maths-9709-pure-mathematics-3/) gives one example of each technique; this page adds the decisions between techniques, repeated integration by parts and substitutions that need an x term rewritten. Afterwards use the [3.5 revision notes](/resources/cambridge-a-level-mathematics-9709-integration-3-revision-notes/) and the [3.5 practice questions](/resources/cambridge-a-level-mathematics-9709-integration-3-practice/).

## What section 3.5 asks for

| Syllabus statement | Examples named in the syllabus |
|---|---|
| Integrate e^(ax + b), 1/(ax + b), sin(ax + b), cos(ax + b), sec²(ax + b) and 1/(x² + a²) | including 1/(2 + 3x²) |
| Use trigonometrical relationships | sin²x or cos²(2x) by double-angle formulae |
| Integrate rational functions by partial fractions | the three denominator types in 3.1 |
| Recognise and integrate kf′(x)/f(x) | x/(x² + 1), tan x |
| Integration by parts | x sin 2x, x²e^(−x), ln x, x tan⁻¹ x |
| Use a given substitution | sin²2x cos x with u = sin x |

The substitution is always given in the question. The trapezium rule belongs to Paper 2 only and is not in the Paper 3 section. MF19 lists ∫1/(x² + a²) dx = (1/a)tan⁻¹(x/a), the integration-by-parts formula and ∫f′(x)/f(x) dx = ln|f(x)|.

## Standard forms with a linear inside

| f(x) | ∫ f(x) dx |
|---|---|
| e^(ax + b) | (1/a)e^(ax + b) + c |
| 1/(ax + b) | (1/a)ln\|ax + b\| + c |
| sin(ax + b) | −(1/a)cos(ax + b) + c |
| cos(ax + b) | (1/a)sin(ax + b) + c |
| sec²(ax + b) | (1/a)tan(ax + b) + c |
| 1/(x² + a²) | (1/a)tan⁻¹(x/a) + c |

*Worked example 1.* Find the exact value of ∫₀^(2/3) 1/(4 + 9x²) dx.

```text
1/(4 + 9x²) = (1/9) × 1/(x² + 4/9),   so a = 2/3
∫ = (1/9) × (3/2) tan⁻¹(3x/2) = (1/6) tan⁻¹(3x/2)
[ ]₀^(2/3) = (1/6) tan⁻¹(1) − 0 = (1/6)(π/4) = π/24
```

The coefficient of x² must be 1 before you read off a. This is the step the syllabus example 1/(2 + 3x²) is testing.

## Using identities first

Squares of sin and cos are integrated through cos 2A: sin²x = ½(1 − cos 2x) and cos²x = ½(1 + cos 2x). tan²x is integrated through tan²x = sec²x − 1.

*Worked example 2.* Find ∫ tan²x dx and the exact value of ∫₀^(π/4) sin²x dx.

```text
∫ tan²x dx = ∫ (sec²x − 1) dx = tan x − x + c
∫₀^(π/4) ½(1 − cos 2x) dx = [x/2 − (sin 2x)/4]₀^(π/4) = π/8 − 1/4
```

## Recognising kf′(x)/f(x)

If the numerator is a constant multiple of the derivative of the denominator, the integral is k ln|f(x)|.

*Worked example 3.* Find ∫₀^(π/3) tan x dx.

```text
tan x = sin x/cos x, and d/dx(cos x) = −sin x, so k = −1
∫ tan x dx = −ln|cos x|
[−ln cos x]₀^(π/3) = −ln(½) + ln 1 = ln 2
```

Before reaching for partial fractions or a substitution, check this pattern: ∫ e^(2x)/(e^(2x) + 3) dx = ½ ln(e^(2x) + 3) + c in one line.

## Partial fractions

*Worked example 4.* Find the exact value of ∫₁² (5x − 1)/((x + 1)(2x − 1)) dx.

```text
5x − 1 ≡ A(2x − 1) + B(x + 1)
x = −1:   −6 = −3A   →  A = 2
x = ½:    3/2 = 3B/2  →  B = 1
∫ [2/(x + 1) + 1/(2x − 1)] dx = 2 ln|x + 1| + ½ ln|2x − 1|
[ ]₁² = (2 ln 3 + ½ ln 3) − (2 ln 2 + 0) = (5/2) ln 3 − 2 ln 2 = ln(9√3/4)
```

The ½ in front of ln|2x − 1| comes from the linear inside. It is the most frequently lost mark in these questions.

## Integration by parts

```text
∫ u (dv/dx) dx = uv − ∫ v (du/dx) dx
```

Choose u to be the factor that becomes simpler when differentiated: a polynomial, or ln x, or tan⁻¹ x. For ∫ ln x dx and ∫ tan⁻¹ x dx, take u as the function and dv/dx = 1.

*Worked example 5.* Find the exact value of ∫₀¹ x²eˣ dx.

```text
First:  u = x², dv/dx = eˣ:   ∫ x²eˣ dx = x²eˣ − ∫ 2x eˣ dx
Second: u = 2x, dv/dx = eˣ:   ∫ 2x eˣ dx = 2x eˣ − 2eˣ
So ∫ x²eˣ dx = eˣ(x² − 2x + 2) + c
[ ]₀¹ = e(1) − 1(2) = e − 2
```

Put the second result in brackets when you subtract it; the sign of the last term is where errors appear.

## A given substitution

Change three things: the integrand, the dx and the limits.

*Worked example 6.* Use the substitution u = 2x + 1 to find the exact value of ∫₀⁴ x/√(2x + 1) dx.

```text
u = 2x + 1:  x = (u − 1)/2,  dx = ½ du
x = 0 → u = 1;   x = 4 → u = 9
∫₁⁹ [(u − 1)/2] × u^(−½) × ½ du = ¼ ∫₁⁹ (u^½ − u^(−½)) du
= ¼ [ (2/3)u^(3/2) − 2u^½ ]₁⁹
= ¼ [(18 − 6) − (2/3 − 2)] = ¼ × 40/3 = 10/3
```

If you change the limits, you never need to return to x. If you keep the x limits, you must substitute back before evaluating.

## Choosing a method

| The integrand looks like | Try |
|---|---|
| Standard form with a linear inside | Table above, with the 1/a factor |
| sin², cos², tan² | Identity first |
| Numerator is a multiple of the denominator's derivative | k ln\|f(x)\| |
| Rational function with a factorised denominator | Partial fractions |
| Product of a polynomial with eˣ, sin or cos; or ln x, tan⁻¹ x | By parts |
| The question names a substitution | Use it, and change the limits |

## Common mistakes

- Missing the 1/a factor with e^(ax + b), 1/(ax + b) or sin(ax + b).
- Reading a = 3 from 1/(4 + 9x²) without first making the x² coefficient 1.
- Writing ∫ sin²x dx = sin³x/3.
- Taking u = eˣ in ∫ x eˣ dx, which makes the integral harder.
- Forgetting to change dx or the limits in a substitution.
- Losing a minus sign: ∫ sin x dx = −cos x.
- Using degrees with trigonometric integrals; limits are in radians.

## Exam technique

- **Find the exact value**: give answers such as π/24, ln(9√3/4) or e − 2. A decimal scores no accuracy mark.
- **Show that ∫ … = …**: write the integrated expression with its limits before simplifying, because the examiner checks that stage.
- **Hence**: if the partial fractions were found in an earlier part, integrate those fractions.
- Write "+ c" on every indefinite integral.

## Frequently asked questions

**Is the substitution always given in 9709 Paper 3?**
Yes. The syllabus says "use a given substitution", so the question names it.

**How do I know when to use integration by parts?**
When the integrand is a product in which one factor gets simpler on differentiation and the other can be integrated, or when it is ln x or tan⁻¹ x alone.

**Is the trapezium rule on Paper 3?**
No. The trapezium rule is in Pure Mathematics 2 only; Pure Mathematics 3 section 3.5 does not include it.

## Where to go next

- [3.5 revision notes](/resources/cambridge-a-level-mathematics-9709-integration-3-revision-notes/)
- [3.5 practice questions](/resources/cambridge-a-level-mathematics-9709-integration-3-practice/)
- These techniques solve [3.8 Differential equations](/resources/cambridge-a-level-mathematics-9709-differential-equations/)

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus for examination in 2026 and 2027, Cambridge University Press & Assessment. Topic 3, Pure Mathematics 3 (for Paper 3): section 3.5 Integration.
