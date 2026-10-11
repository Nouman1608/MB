---
title: "Pearson Edexcel International Advanced Level Mathematics: Integration by substitution, by parts and using partial fractions (YMA01) -- Revision Notes"
seoTitle: "Edexcel IAL Maths P4 Integration Methods Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes for Edexcel IAL Maths P4 integration: substitution, by parts, partial fractions, with a self-test and common mistakes."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These revision notes cover Pearson Edexcel International Advanced Level Mathematics (YMA01), aligned to the *International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics* specification (Issue 3, April 2019), Pure Mathematics 4 topics 6.2 and 6.3. The specification states that P3 and P4 are compulsory for IAL Mathematics and Pure Mathematics only; they are not part of IAS.

For full explanations, read the [study guide](/resources/edexcel-ial-mathematics-integration-by-substitution-integration-by-parts-and/). When you are ready to test yourself, use the [practice questions](/resources/edexcel-ial-mathematics-integration-by-substitution-integration-by-parts-and-practice/). Related pages: [P3 integration](/resources/edexcel-ial-mathematics-integration-of-exponential-reciprocal-and/) and [partial fractions](/resources/edexcel-ial-mathematics-proof-by-contradiction-partial-fractions-and-the/). See also the [Edexcel IAL Mathematics hub](/boards/edexcel/a-level/mathematics/), the [checklist](/checklists/edexcel/a-level/mathematics/) and the [free diagnostics](/diagnostics/).

## Key ideas

| Method | Reverses | Core statement |
|---|---|---|
| Substitution (6.2) | Chain rule | Replace the inner function by u, replace dx by du, integrate, return to x |
| Parts (6.2) | Product rule | ∫ u (dv/dx) dx = uv − ∫ v (du/dx) dx |
| Partial fractions (6.3) | Adding fractions | Split the fraction, integrate each term with a standard form |
| Rational standard forms (6.3) | Chain rule and power rule | See the table below |

## Standard forms for 6.3

| Integrand | Integral |
|---|---|
| 1/(ax + b) | (1/a) ln\|ax + b\| + c |
| 1/(ax + b)ⁿ, n ≥ 2 | (ax + b)^(1−n) / (a(1 − n)) + c |
| f′(x)/f(x) | ln\|f(x)\| + c |
| x/(x² + a), a > 0 | ½ ln(x² + a) + c |

Examples: ∫ 6/(2x + 1) dx = 3 ln|2x + 1| + c. ∫ 5/(x + 3)² dx = −5/(x + 3) + c. ∫ 3/(2x − 5)⁴ dx = −1/(2(2x − 5)³) + c.

## Method boxes

### Substitution in steps

1. Pick u (the bracket, root or exponential).
2. Find du/dx and rewrite dx.
3. Solve for x if any x remains.
4. Convert limits if the integral is definite.
5. Integrate, then substitute back if indefinite.

Reminder: ∫ x(x + 1)⁵ dx, with u = x + 1 and x = u − 1:

```
∫ (u − 1)u⁵ du = u⁷/7 − u⁶/6 + c = (x + 1)⁷/7 − (x + 1)⁶/6 + c
```

Reminder with a given substitution: ∫ from 0 to ln 2 of e^(2x)/(eˣ + 1) dx with u = eˣ + 1. Then du = eˣ dx and e^(2x) dx = (u − 1) du. Limits: u = 2 to u = 3.

```
∫ from 2 to 3 of (u − 1)/u du = [u − ln u] from 2 to 3 = (3 − ln 3) − (2 − ln 2) = 1 − ln(3/2)
```

### Parts in steps

1. Decide u (simplifies when differentiated) and dv/dx (easy to integrate).
2. Write out du/dx and v in a small table before substituting.
3. Apply the formula, taking care with the minus sign.
4. If the new integral still needs parts, repeat with the same pattern.
5. If eˣ with sin or cos returns the original integral, rearrange for it.

| Integrand | u | dv/dx |
|---|---|---|
| xⁿ eᵏˣ, xⁿ sin kx, xⁿ cos kx | xⁿ | eᵏˣ, sin kx or cos kx |
| xⁿ ln x | ln x | xⁿ |
| ln x | ln x | 1 |
| eᵏˣ sin mx, eᵏˣ cos mx | either, but stay consistent | the other |

Reminders:

```
∫ from 0 to 1 of x e^(3x) dx = [⅓x e^(3x) − ⅑ e^(3x)] from 0 to 1
                             = (⅓e³ − ⅑e³) − (0 − ⅑) = (2e³ + 1)/9

∫ x⁴ ln x dx = ⅕x⁵ ln x − ∫ ⅕x⁴ dx = ⅕x⁵ ln x − (1/25)x⁵ + c

∫ eˣ sin 2x dx = eˣ(sin 2x − 2 cos 2x)/5 + c
```

For the last result, call the integral I. Two applications of parts give I = eˣ sin 2x − 2eˣ cos 2x − 4I, so 5I = eˣ(sin 2x − 2 cos 2x).

### Substitution followed by parts

Some integrals need both. Evaluate ∫ from 0 to √π of x³ sin(x²) dx, using u = x².

```
du = 2x dx, so x³ dx = ½ u du; limits u = 0 to u = π
½ ∫ from 0 to π of u sin u du
Parts (u and −cos u): ½ [−u cos u + sin u] from 0 to π
= ½ [(π + 0) − 0] = π/2
```

The answer is **π/2**. Do the substitution first, then treat the new integral on its own terms. Keep the limits in u throughout.

### Partial fractions in steps

1. Factorise the denominator.
2. If the degree of the numerator is not less than the degree of the denominator, divide first.
3. Write the form: A/(x − p) for a linear factor; A/(x − p) + B/(x − p)² for a repeated one.
4. Find the constants by substituting convenient x-values and comparing coefficients.
5. Integrate each term: logarithms for the first-power terms, a reciprocal for the squared term.

Reminder with a numerator of equal degree: (x² + 4x − 1)/((x − 1)(x + 2)). The denominator expands to x² + x − 2, so dividing gives 1 + (3x + 1)/((x − 1)(x + 2)). Then (3x + 1)/((x − 1)(x + 2)) = (4/3)/(x − 1) + (5/3)/(x + 2).

```
∫ from 2 to 4: [x + (4/3) ln(x − 1) + (5/3) ln(x + 2)]
 = (4 + (4/3) ln 3 + (5/3) ln 6) − (2 + 0 + (5/3) ln 4)
 = 2 + (4/3) ln 3 + (5/3) ln(3/2)
```

Choosing between methods: x/(x + 1)² can be done by substitution (u = x + 1) or by partial fractions (1/(x + 1) − 1/(x + 1)²). Both give ln(x + 1) + 1/(x + 1) + c.

## Must-know distinctions

- Substitution needs the derivative to be present (or made present by a constant). Parts is for products that do not simplify by substitution.
- ∫ 1/(ax + b) is a logarithm. ∫ 1/(ax + b)², and higher powers, are not.
- ∫ 1/x² dx is −1/x, not a logarithm. The logarithm arises only for the first power.
- x/(x² + a) gives a logarithm (the numerator is the derivative of the inside, up to a constant). 1/(x² + a) does not, and is a different integral from the ones on this page.
- For ln x as u, v must be the integral of what is left, so that du/dx × v is simpler than the original.
- Changing limits with u means the answer is evaluated at u-values, and no back-substitution is needed.

## Quick self-test

1. Find ∫ 4x/(x² + 9) dx.
2. Find ∫ 3/(2x − 5)⁴ dx.
3. Find ∫ 2x(x − 3)⁴ dx using u = x − 3.
4. Find ∫ x e^(−x) dx.
5. Evaluate ∫ from 1 to e of ln x dx.
6. Evaluate ∫ from 0 to π of x sin x dx.
7. Write 3/((x + 1)(x + 4)) in partial fractions and evaluate its integral from 0 to 2.
8. Use u = cos x to evaluate ∫ from 0 to π/3 of sin x cos³x dx.
9. Find ∫ 6/(2x + 1) dx.
10. Find ∫ 5/(x + 3)² dx.

### Answers

1. **2 ln(x² + 9) + c**
2. **−1/(2(2x − 5)³) + c**
3. With x = u + 3: ∫ 2(u + 3)u⁴ du = u⁶/3 + 6u⁵/5, so **(x − 3)⁶/3 + 6(x − 3)⁵/5 + c**
4. u = x, v = −e^(−x): −x e^(−x) + ∫ e^(−x) dx, so **−(x + 1)e^(−x) + c**
5. [x ln x − x] from 1 to e = (e − e) − (0 − 1) = **1**
6. [−x cos x + sin x] from 0 to π = π − 0 = **π**
7. 3/((x + 1)(x + 4)) = 1/(x + 1) − 1/(x + 4). Integral from 0 to 2: (ln 3 − ln 6) − (0 − ln 4) = ln(3 × 4 / 6) = **ln 2**
8. du = −sin x dx. The integral becomes −∫ u³ du from u = 1 to ½, which is [−u⁴/4], giving −1/64 + 1/4 = **15/64**
9. **3 ln|2x + 1| + c**
10. **−5/(x + 3) + c**

## Where marks are usually lost

- Forgetting the factor from dx = du/k in a substitution, or from the coefficient inside a bracket.
- Mixing x and u in the same line, or applying x-limits to a u-expression.
- Losing a minus sign in the parts formula, especially on the second application.
- Choosing u = eˣ on one pass and u = sin x on the next, so the integral cancels out.
- Writing a logarithm for a squared denominator, or a power for a first-power denominator.
- Not dividing first when the numerator has degree at least that of the denominator.
- Leaving ln 4 or ln 9 unsimplified when a single logarithm is requested, or mixing exact and decimal forms.
- Writing ln(x − 3) when the domain makes x − 3 negative; use the modulus in an indefinite answer.
- Omitting + c on an indefinite integral.

## Checks before moving on

Differentiate every indefinite answer mentally or on paper: the original integrand should come back. For definite integrals, check that the answer is the right sign for the shape of the curve. A positive integrand on the interval must give a positive value. Check that a logarithm in your answer has a positive argument over the whole interval. These checks take under a minute and catch most slips.

## Next steps

Work through the [practice questions](/resources/edexcel-ial-mathematics-integration-by-substitution-integration-by-parts-and-practice/), then return to the [study guide](/resources/edexcel-ial-mathematics-integration-by-substitution-integration-by-parts-and/) for any method that went wrong.

## Official syllabus

*International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics*, Specification Issue 3, April 2019, Pearson Education Limited. This page covers unit P4 topics 6.2 and 6.3.
