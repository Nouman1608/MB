---
title: "Pearson Edexcel International Advanced Level Mathematics: Integration by substitution, by parts and using partial fractions (YMA01)"
seoTitle: "Edexcel IAL Maths P4 Integration Methods Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Integration by substitution, integration by parts and integration using partial fractions"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 152
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p4-pure-mathematics-4-edexcel-alevel-maths"
    subtopic: "p4-integration-edexcel-alevel-maths"
description: "Study guide to P4 integration for Edexcel International Advanced Level Maths: substitution, integration by parts and partial fractions, fully worked."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This study guide covers Pearson Edexcel International Advanced Level Mathematics (YMA01), aligned to the *International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics* specification (Issue 3, April 2019). It teaches Pure Mathematics 4 (P4) topics 6.2 and 6.3. The specification states that P3 and P4 are compulsory for IAL Mathematics and Pure Mathematics only; they are not part of IAS.

Use it with the [revision notes](/resources/edexcel-ial-mathematics-integration-by-substitution-integration-by-parts-and-revision-notes/) and the [practice questions](/resources/edexcel-ial-mathematics-integration-by-substitution-integration-by-parts-and-practice/). Standard integrals and integration by recognition are in the [P3 integration guide](/resources/edexcel-ial-mathematics-integration-of-exponential-reciprocal-and/), and finding partial fractions is in the [partial fractions guide](/resources/edexcel-ial-mathematics-proof-by-contradiction-partial-fractions-and-the/). The course hub is at [Edexcel IAL Mathematics](/boards/edexcel/a-level/mathematics/), the [printable checklist](/checklists/edexcel/a-level/mathematics/) tracks your progress, and the [free diagnostics](/diagnostics/) show where to start.

## What this unit covers

| Topic | What you must be able to do |
|---|---|
| 6.2 | Use a substitution to integrate simple cases such as x√(x − 2); when the integral is harder, the substitution is given |
| 6.2 | Integrate by parts, and understand it as the reverse of the product rule (substitution is the reverse of the chain rule) |
| 6.2 | Integrate ln x; apply parts more than once, as in x²eˣ and eˣ sin x |
| 6.3 | Integrate expressions that come from partial fractions, such as 2/(3x + 5) and 3/(x − 1)² |
| 6.3 | Integrate other rational expressions such as x/(x² + 5) and 2/(2x − 1)⁴ |

Volumes of revolution, separable differential equations and areas from parametric equations are other P4 topics, covered elsewhere. This page stays with the three methods above.

## 6.2 Integration by substitution

Substitution undoes the chain rule. If you can see an inner function whose derivative is (up to a constant) also present, replace the inner function with a single letter, integrate, then put the original variable back.

### Method

1. Choose u (often the awkward bracket or root).
2. Differentiate u, then express dx using du.
3. Rewrite every x in the integrand using u. If x remains, solve the substitution for x.
4. Integrate with respect to u.
5. For an indefinite integral, substitute back. For a definite integral, either change the limits to u-values or substitute back and use the x-limits. Do not mix the two.

### Worked example 1: indefinite integral

Find ∫ x√(x + 4) dx.

Let u = x + 4. Then x = u − 4 and dx = du.

```
∫ (u − 4) u^(1/2) du = ∫ (u^(3/2) − 4u^(1/2)) du
                     = (2/5)u^(5/2) − (8/3)u^(3/2) + c
```

Substituting back gives **(2/5)(x + 4)^(5/2) − (8/3)(x + 4)^(3/2) + c**. Differentiating confirms it.

### Worked example 2: changing the limits

Evaluate ∫ from 0 to 2 of x/√(2x + 1) dx.

Let u = 2x + 1, so du = 2 dx, dx = ½ du and x = (u − 1)/2. When x = 0, u = 1. When x = 2, u = 5.

```
∫ from 1 to 5 of [(u − 1)/2] × u^(−1/2) × ½ du
 = ¼ ∫ (u^(1/2) − u^(−1/2)) du
 = ¼ [ (2/3)u^(3/2) − 2u^(1/2) ] from 1 to 5
```

At u = 5: (2/3)(5√5) − 2√5 = 4√5/3. At u = 1: 2/3 − 2 = −4/3. The difference is 4√5/3 + 4/3, so the value is ¼ × (4√5 + 4)/3 = **(√5 + 1)/3**.

### Worked example 3: the substitution is given

Use u = eˣ to evaluate ∫ from 0 to ln 3 of 1/(eˣ + 1) dx.

Then du = eˣ dx, so dx = du/u. The limits become u = 1 and u = 3.

```
∫ from 1 to 3 of 1/(u(u + 1)) du = ∫ (1/u − 1/(u + 1)) du
                                 = [ln u − ln(u + 1)] from 1 to 3
```

This gives (ln 3 − ln 4) − (0 − ln 2) = ln 3 − ln 4 + ln 2, which is **ln(3/2)**. The fraction 1/(u(u + 1)) has two linear factors, so it is split into partial fractions before integrating.

## 6.2 Integration by parts

The product rule says d(uv)/dx = u dv/dx + v du/dx. Integrating both sides and rearranging gives the formula:

```
∫ u (dv/dx) dx = uv − ∫ v (du/dx) dx
```

Pick u as the factor that becomes simpler after differentiating, such as a power of x or ln x. Pick dv/dx as the factor you can integrate directly, such as eˣ, sin x or cos x. Parts has helped only if the new integral is easier than the one you began with.

### Worked example 4: one application

Find ∫ x cos 3x dx.

Take u = x, dv/dx = cos 3x. Then du/dx = 1 and v = (1/3) sin 3x.

```
∫ x cos 3x dx = (x/3) sin 3x − ∫ (1/3) sin 3x dx
              = (x/3) sin 3x + (1/9) cos 3x + c
```

The answer is **(x/3) sin 3x + (1/9) cos 3x + c**.

### Worked example 5: the integral of ln x

There is no obvious product, so write ln x as 1 × ln x. Take u = ln x and dv/dx = 1, so du/dx = 1/x and v = x.

```
∫ ln x dx = x ln x − ∫ x × (1/x) dx = x ln x − x + c
```

For a definite integral, ∫ from 1 to 4 of ln x dx = [x ln x − x] from 1 to 4 = (4 ln 4 − 4) − (0 − 1) = 4 ln 4 − 3, which is **8 ln 2 − 3**.

### Worked example 6: parts twice

Find ∫ x² e^(2x) dx.

First pass: u = x², dv/dx = e^(2x), so du/dx = 2x and v = ½ e^(2x).

```
∫ x² e^(2x) dx = ½x² e^(2x) − ∫ (x)(e^(2x)) dx
```

For the remaining integral, apply parts again with u = x and dv/dx = e^(2x). That gives ½x e^(2x) − ¼ e^(2x).

```
∫ x² e^(2x) dx = ½x² e^(2x) − ½x e^(2x) + ¼ e^(2x) + c
```

Factorising, the result is **e^(2x)(½x² − ½x + ¼) + c**. Each pass lowers the power of x by one, so x³ would need three passes.

### Worked example 7: the integral returns to itself

Find ∫ e^(2x) cos x dx.

Let I stand for the integral. Take u = cos x, dv/dx = e^(2x).

```
I = ½ e^(2x) cos x + ½ ∫ e^(2x) sin x dx
```

Apply parts again to the new integral, with u = sin x and dv/dx = e^(2x):

```
∫ e^(2x) sin x dx = ½ e^(2x) sin x − ½ ∫ e^(2x) cos x dx = ½ e^(2x) sin x − ½ I
```

Substitute this back:

```
I = ½ e^(2x) cos x + ¼ e^(2x) sin x − ¼ I
(5/4) I = ¼ e^(2x)(2 cos x + sin x)
```

So **I = e^(2x)(2 cos x + sin x)/5 + c**. Use the same choice of u (trigonometric both times, or exponential both times) in the two passes. If you swap halfway, the integral cancels itself and you get 0 = 0.

## 6.3 Integrating rational expressions

### Standard forms

| Integrand | Result | Why |
|---|---|---|
| k/(ax + b) | (k/a) ln\|ax + b\| + c | derivative of the logarithm brings out a |
| k/(ax + b)ⁿ, n ≥ 2 | k(ax + b)^(1−n) / (a(1 − n)) + c | treat as a power; divide by a |
| kx/(x² + a) | (k/2) ln(x² + a) + c | numerator is a multiple of the derivative of the denominator |

For 2/(3x + 5) the result is (2/3) ln|3x + 5| + c, and for 3/(x − 1)² it is −3/(x − 1) + c. These are the first two forms. The third form, f′(x)/f(x) integrating to a logarithm, is recognition; see the P3 guide. For example, ∫ 3x/(x² + 7) dx = (3/2) ln(x² + 7) + c, because x² + 7 is always positive and needs no modulus.

### Worked example 8: negative coefficients and powers

Find ∫ 8/(1 − 4x)³ dx. Raise the power by one, giving (1 − 4x)^(−2), then divide by the new power (−2) and by the coefficient of x (−4). Together these divide by 8, which cancels the 8 on top, so the result is **(1 − 4x)^(−2) + c**. Differentiating, −2 × (1 − 4x)^(−3) × (−4) = 8/(1 − 4x)³ confirms it.

### Using partial fractions

When the denominator factorises, split the fraction first, then use the standard forms.

### Worked example 9: distinct linear factors

Evaluate ∫ from 1 to 3 of (13x − 2)/((3x − 1)(x + 2)) dx.

Write (13x − 2)/((3x − 1)(x + 2)) = A/(3x − 1) + B/(x + 2), so 13x − 2 = A(x + 2) + B(3x − 1). Put x = −2: −28 = −7B, so B = 4. Put x = ⅓: 7/3 = (7/3)A, so A = 1.

```
∫ [1/(3x − 1) + 4/(x + 2)] dx = ⅓ ln|3x − 1| + 4 ln|x + 2|
At x = 3: ⅓ ln 8 + 4 ln 5 = ln 2 + 4 ln 5
At x = 1: ⅓ ln 2 + 4 ln 3
Difference: ⅔ ln 2 + 4 ln 5 − 4 ln 3
```

The value is **⅔ ln 2 + 4 ln(5/3)**. Note that 1/(3x − 1) integrates to ⅓ ln|3x − 1|, because the coefficient of x divides the result.

### Worked example 10: a repeated factor

Find ∫ from 2 to 3 of (4x² − 3x + 5)/((x − 1)²(x + 2)) dx.

The form is A/(x − 1) + B/(x − 1)² + C/(x + 2), and the numerator satisfies

4x² − 3x + 5 = A(x − 1)(x + 2) + B(x + 2) + C(x − 1)².

Put x = 1: 6 = 3B, so B = 2. Put x = −2: 27 = 9C, so C = 3. Compare x²: 4 = A + C, so A = 1.

```
∫ [1/(x − 1) + 2/(x − 1)² + 3/(x + 2)] dx
   = ln(x − 1) − 2/(x − 1) + 3 ln(x + 2)
At x = 3: ln 2 − 1 + 3 ln 5.  At x = 2: 0 − 2 + 3 ln 4.
Difference: ln 2 + 1 + 3 ln 5 − 6 ln 2 = 1 + 3 ln 5 − 5 ln 2
```

The value is **1 + 3 ln 5 − 5 ln 2**. If the numerator has the same degree as the denominator, or a higher one, divide first (see the revision notes) and integrate the polynomial part separately.

## Choosing a method

| Integrand looks like | Try |
|---|---|
| A bracket or root raised to a power, times x | Substitution on the bracket |
| Polynomial times eˣ, sin x or cos x | Parts, with the polynomial as u |
| ln x, alone or times a power of x | Parts, with ln x as u |
| Product of eˣ and sin x or cos x | Parts twice, then rearrange |
| A fraction with a factorised denominator | Partial fractions |
| A numerator that is the derivative of the denominator | Recognition: ln of the denominator |

## Common errors

- Forgetting to change dx. After u = 2x + 1 you need dx = ½ du, not dx = du.
- Leaving an x inside a u-integral. Solve the substitution for x and replace it.
- Using x-limits on a u-integral. Either convert the limits or substitute back first.
- Dropping the minus sign in parts: the second term is − ∫ v du/dx dx. In x² eˣ-type questions the sign alternates on each pass.
- Dividing by the wrong coefficient: ∫ 1/(2x − 1)⁴ dx has factors of 1/(−3) and 1/2 together, giving −1/(6(2x − 1)³).
- Giving a repeated factor two logarithms. The term B/(x − 1)² integrates to −B/(x − 1), not a logarithm.
- Missing + c on indefinite integrals, or leaving it on a definite one.

## Next steps

Condense this into the [revision notes](/resources/edexcel-ial-mathematics-integration-by-substitution-integration-by-parts-and-revision-notes/), then test yourself with the [practice questions](/resources/edexcel-ial-mathematics-integration-by-substitution-integration-by-parts-and-practice/). Tick off topics on the [checklist](/checklists/edexcel/a-level/mathematics/) and take a [free 10-minute diagnostic](/diagnostics/) when you want to see what is left.

## Official syllabus

*International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics*, Specification Issue 3, April 2019, Pearson Education Limited. This page covers unit P4 topics 6.2 and 6.3.
