---
title: "IB DP Mathematics: Analysis and Approaches (AA): 5.16 Integration by substitution and by parts (AHL only)"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Calculus"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.16
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-16"
description: "IB DP Maths AA HL section 5.16 study guide: integration by substitution with changed limits, integration by parts, repeated and cyclic parts, with examples."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deep on one syllabus section of IB Diploma Programme Mathematics: Analysis and Approaches: **section 5.16, integration by substitution, integration by parts and repeated integration by parts**. It is AHL content, examined at HL only, and it follows the IB *Mathematics: analysis and approaches guide* for first assessment 2021.

The SL reverse chain rule in the [section 5.10 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-10/) is the starting point. The [AA HL further calculus study guide](/resources/ib-dp-mathematics-aa-hl-further-calculus/) shows one substitution and one parts example; this page goes through the decisions each method involves and the layouts that keep the algebra under control.

## What section 5.16 asks of you

- Integrate by substitution, including definite integrals where the limits change. The guide notes that a substitution will be provided in examinations unless the integral is of the form ∫ k g′(x) f(g(x)) dx.
- Integrate by parts: ∫ u (dv/dx) dx = uv − ∫ v (du/dx) dx.
- Use repeated integration by parts, including integrals that return to themselves.

## Substitution beyond the SL form

At HL a substitution can be any change of variable that simplifies the integral, not only the reverse chain rule. The steps:

1. From the given substitution, express x (or the awkward part) and dx in terms of u and du.
2. Replace **every** x, and the dx.
3. For a definite integral, change the limits to u-values. Then there is no need to return to x.
4. For an indefinite integral, substitute back to x and add + C.

### Worked example 1 (calculator-free): leftover x

Use u = 2x − 1 to find ∫ x√(2x − 1) dx.

```
u = 2x − 1  →  x = (u + 1)/2,  dx = du/2
∫ x√(2x − 1) dx = ∫ ((u + 1)/2) u^(1/2) (du/2)
                = (1/4) ∫ (u^(3/2) + u^(1/2)) du
                = (1/4)((2/5)u^(5/2) + (2/3)u^(3/2)) + C
                = (1/10)(2x − 1)^(5/2) + (1/6)(2x − 1)^(3/2) + C
```

This is the case the SL method cannot handle: the leftover x is not a constant multiple of d/dx(2x − 1). Writing x in terms of u removes it.

### Worked example 2 (calculator-free): a trigonometric substitution

Use x = sin θ to evaluate ∫₀¹ √(1 − x²) dx.

```
dx = cos θ dθ;  x = 0 → θ = 0,  x = 1 → θ = π/2
√(1 − sin²θ) = cos θ   (cos θ ≥ 0 on [0, π/2])
∫₀^(π/2) cos²θ dθ = ∫₀^(π/2) (1 + cos 2θ)/2 dθ
                 = [θ/2 + (sin 2θ)/4]₀^(π/2) = π/4
```

The answer is the area of a quarter of the unit circle, a useful check. The double-angle identity for cos²θ is essential here.

### Worked example 3 (calculator-free): an exponential substitution

Use u = eˣ to evaluate ∫₀^(ln √3) eˣ/(e^(2x) + 1) dx.

```
du = eˣ dx;  x = 0 → u = 1,  x = ln √3 → u = √3
∫₁^√3 1/(u² + 1) du = [arctan u]₁^√3 = π/3 − π/4 = π/12
```

Substitution turns the integrand into a section 5.15 arctan form.

## Integration by parts

The product rule d/dx(uv) = u dv/dx + v du/dx, integrated and rearranged, gives

```
∫ u (dv/dx) dx = uv − ∫ v (du/dx) dx
```

Choose u to be the factor that **becomes simpler when differentiated**, and dv/dx to be a factor you can integrate. A useful order of priority for u is: logarithms, inverse trigonometric functions, powers of x, then trigonometric and exponential functions.

### Worked example 4 (calculator-free)

```
(a) ∫ x cos 3x dx:  u = x, dv/dx = cos 3x, v = (1/3) sin 3x
    = (x/3) sin 3x − ∫ (1/3) sin 3x dx
    = (x/3) sin 3x + (1/9) cos 3x + C

(b) ∫ x² ln x dx:  u = ln x (not x²), dv/dx = x², v = x³/3
    = (x³/3) ln x − ∫ (x³/3)(1/x) dx
    = (x³/3) ln x − x³/9 + C

(c) ∫ arctan x dx:  u = arctan x, dv/dx = 1, v = x
    = x arctan x − ∫ x/(1 + x²) dx
    = x arctan x − (1/2) ln(1 + x²) + C
```

In (b), choosing u = x² would require integrating ln x, which is harder than the original problem. In (c), the "hidden 1" trick works for any single function you can differentiate but not integrate directly, such as ln x and arcsin x.

## Repeated integration by parts

When u is x², one application leaves an integral with x, so apply parts again.

### Worked example 5 (calculator-free)

```
∫ x² sin x dx:  u = x², v = −cos x
= −x² cos x + ∫ 2x cos x dx
Again: u = 2x, v = sin x
∫ 2x cos x dx = 2x sin x − ∫ 2 sin x dx = 2x sin x + 2 cos x
Answer: −x² cos x + 2x sin x + 2 cos x + C
```

Each application lowers the power of x by one, so xⁿ needs n applications.

### Worked example 6 (calculator-free): an integral that returns

Find I = ∫ e^(2x) sin x dx.

```
u = sin x, dv/dx = e^(2x):   I = (1/2)e^(2x) sin x − (1/2)∫ e^(2x) cos x dx
u = cos x, dv/dx = e^(2x):   ∫ e^(2x) cos x dx = (1/2)e^(2x) cos x + (1/2) I
So I = (1/2)e^(2x) sin x − (1/4)e^(2x) cos x − (1/4) I
(5/4) I = e^(2x)((1/2) sin x − (1/4) cos x)
I = (1/5)e^(2x)(2 sin x − cos x) + C
```

Keep the same type of function as u in both applications (here the trigonometric factor). Switching to u = e^(2x) in the second step undoes the first and returns 0 = 0.

## Definite integrals by parts

Apply the limits to the uv term as well as to the remaining integral:

```
∫₀^π x sin x dx = [−x cos x]₀^π + ∫₀^π cos x dx
               = (−π cos π − 0) + [sin x]₀^π = π + 0 = π
```

## Common mistakes

- Substituting for part of the integrand but leaving an x or a dx unconverted.
- Changing the variable but not the limits, or changing the limits and then substituting back as well.
- Choosing u = eˣ or u = sin x when a power of x or a logarithm is present.
- Sign errors in v when integrating sin: v = −cos x.
- Forgetting to apply the limits to the uv part in a definite integral.
- In a cyclic integral, switching the choice of u in the second application.

## Exam technique: the command words

- **Using the substitution u = …, find / show that**: the given substitution must be used; another valid method may not earn the marks.
- **Show that** a definite integral has a given exact value: show the new limits and every evaluation.
- **Hence**: a previous result, such as ∫ x eˣ dx, is reused inside a further parts calculation.

## Where next

Condense this section with the [section 5.16 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-16-revision-notes/) and practise with the [section 5.16 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-16-practice/). These techniques are used for areas and volumes in the [section 5.17 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-17/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section AHL 5.16.
