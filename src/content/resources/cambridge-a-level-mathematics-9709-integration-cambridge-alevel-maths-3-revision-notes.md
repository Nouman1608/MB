---
title: "Cambridge A Level Mathematics (9709): Integration (Pure Mathematics 3) -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge 9709 Paper 3 section 3.5 Integration: standard integrals, identities, ln forms, partial fractions, parts and substitution."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section **3.5 Integration** of Pure Mathematics 3 (Paper 3) in the Cambridge International AS & A Level Mathematics 9709 syllabus for 2026 and 2027. For worked examples see the [3.5 study guide](/resources/cambridge-a-level-mathematics-9709-integration-cambridge-alevel-maths-3/); for marked questions use the [3.5 practice questions](/resources/cambridge-a-level-mathematics-9709-integration-cambridge-alevel-maths-3-practice/).

## Standard integrals (add + c)

| f(x) | ∫ f(x) dx |
|---|---|
| e^(ax + b) | (1/a)e^(ax + b) |
| 1/(ax + b) | (1/a)ln\|ax + b\| |
| sin(ax + b) | −(1/a)cos(ax + b) |
| cos(ax + b) | (1/a)sin(ax + b) |
| sec²(ax + b) | (1/a)tan(ax + b) |
| 1/(x² + a²) | (1/a)tan⁻¹(x/a) |
| f′(x)/f(x) | ln\|f(x)\| |
| tan x | −ln\|cos x\| (= ln\|sec x\|) |

For 1/(p + qx²), take out 1/q first: 1/(q(x² + p/q)), so a = √(p/q).

## Identities that unlock integrals

```text
sin²x = ½(1 − cos 2x)        cos²x = ½(1 + cos 2x)
tan²x = sec²x − 1            sin x cos x = ½ sin 2x
sin²x cos²x = ⅛(1 − cos 4x)
```

## Integration by parts

∫ u (dv/dx) dx = uv − ∫ v (du/dx) dx (in MF19).

| Integrand | u | dv/dx |
|---|---|---|
| x sin 2x, x eˣ | x | the trig or exponential |
| x²e^(−x) | x² (twice) | e^(−x) |
| x ln x, x² ln x | ln x | the power of x |
| ln x | ln x | 1 |
| tan⁻¹ x, x tan⁻¹ x | tan⁻¹ x | 1 or x |
| x sec²x | x | sec²x |

Rule of thumb: ln and tan⁻¹ are always u, because you can differentiate them but not easily integrate them.

## Substitution checklist

1. Write u in terms of x and find du/dx.
2. Replace dx (for example dx = du/(du/dx)).
3. Express any remaining x in terms of u.
4. Change the limits.
5. Integrate in u and evaluate; no need to return to x for a definite integral.

## Partial fractions route

Factorised denominator → split (forms from 3.1) → integrate each term: linear terms give logarithms, Bx/(x² + a²) gives (B/2)ln(x² + a²), C/(x² + a²) gives (C/a)tan⁻¹(x/a).

## Condensed worked lines

Each of these is one technique in its shortest correct form. Differentiate each answer to check it.

```text
∫ 1/(9 + 2x²) dx = ½ ∫ 1/(x² + 9/2) dx,  a = 3/√2
                 = ½ × (√2/3) tan⁻¹(√2x/3) = (√2/6) tan⁻¹(√2x/3) + c

∫ cos x/(3 + sin x) dx = ln(3 + sin x) + c          (f′/f with f = 3 + sin x)

∫ x sin 2x dx = −½x cos 2x + ∫ ½ cos 2x dx
              = −½x cos 2x + ¼ sin 2x + c

∫ x²e^(−x) dx = −e^(−x)(x² + 2x + 2) + c           (parts twice)

∫ x tan⁻¹ x dx = ½x² tan⁻¹ x − ½ ∫ x²/(1 + x²) dx
               = ½x² tan⁻¹ x − ½(x − tan⁻¹ x)
               = ½(x² + 1) tan⁻¹ x − ½x + c
```

In the last line, x²/(1 + x²) is rewritten as 1 − 1/(1 + x²) before integrating. That small division step appears often in by-parts questions with tan⁻¹ x.

## Spotting the method fast

- Is the numerator (a multiple of) the derivative of the denominator? Then it is a logarithm.
- Is there a square of sin, cos or tan? Then use an identity.
- Is it a product with a polynomial, or does it contain ln x or tan⁻¹ x? Then use parts.
- Does the denominator factorise into the 3.1 types? Then use partial fractions.
- Does the question name a substitution? Then use it and change the limits.

## Key terms

| Term | Meaning |
|---|---|
| Indefinite integral | A family of antiderivatives, written with + c |
| Definite integral | A number: F(b) − F(a) |
| Integrand | The function being integrated |
| kf′(x)/f(x) form | Numerator a constant multiple of the denominator's derivative |
| By parts | Method for products, from the product rule |
| Substitution | Change of variable that simplifies an integrand |
| Exact value | Left in terms of π, e, ln or surds |

## Exam traps

- Every linear inside brings a 1/a factor.
- In 1/(4 + 9x²) the value of a is 2/3, not 2 or 3.
- ∫ 1/(2x − 1) dx = ½ ln|2x − 1|, not ln|2x − 1|.
- A substitution with old limits gives a wrong number.
- In parts, subtract the whole second integral: use brackets.
- ∫ sin x dx = −cos x; ∫ cos x dx = +sin x.
- Trigonometric limits are in radians.
- Combine logarithms only at the end, and only if the question asks for a single logarithm.

## Self-test

1. ∫ e^(1 − 4x) dx
2. ∫ 3/(2x + 5) dx
3. ∫₀^(π/6) cos 3x dx
4. ∫ 1/(x² + 16) dx
5. ∫ 1/(1 + 4x²) dx
6. ∫ cos²x dx
7. ∫ (3x²)/(x³ + 1) dx
8. ∫ x e^(2x) dx
9. ∫₁^e ln x dx
10. Express 1/(x(x + 1)) in partial fractions and integrate it.
11. With u = sin x, write ∫ sin²x cos x dx in terms of u and integrate.
12. ∫ sec²(3x) dx

**Answers**

1. −¼e^(1 − 4x) + c.
2. (3/2) ln|2x + 5| + c.
3. [⅓ sin 3x]₀^(π/6) = **⅓**.
4. ¼ tan⁻¹(x/4) + c.
5. ¼ × 1/(x² + ¼): a = ½, so **½ tan⁻¹(2x) + c**.
6. ½x + ¼ sin 2x + c.
7. ln|x³ + 1| + c.
8. ½x e^(2x) − ¼e^(2x) + c.
9. [x ln x − x]₁^e = (e − e) − (0 − 1) = **1**.
10. 1/x − 1/(x + 1); integral **ln|x| − ln|x + 1| + c**.
11. du = cos x dx, so ∫ u² du = **⅓ sin³x + c**.
12. ⅓ tan 3x + c.

## Links

- Full explanations: [3.5 study guide](/resources/cambridge-a-level-mathematics-9709-integration-cambridge-alevel-maths-3/)
- Marked questions: [3.5 practice questions](/resources/cambridge-a-level-mathematics-9709-integration-cambridge-alevel-maths-3-practice/)
- Paper 3 summary: [Pure Mathematics 3 revision notes](/resources/a-level-maths-9709-pure-mathematics-3-revision-notes/)
