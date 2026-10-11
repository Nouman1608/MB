---
title: "OCR A Level Mathematics A: Integration basics: fundamental theorem, integrals and areas (H240) -- Revision Notes"
seoTitle: "OCR A Level Maths Integration Basics Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Integration basics: fundamental theorem, indefinite and definite integrals, areas and standard integrals"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 119
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-ocr-alevel-maths"
    subtopic: "integration-ocr-alevel-maths"
description: "Condensed revision notes on standard integrals, definite integrals and areas for OCR A Level Mathematics A (H240), with a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense OCR A Level Mathematics A (H240) content references 1.08a to 1.08f from the OCR specification (Version 3.1, August 2026). The 1.08a, 1.08b, 1.08d and 1.08e statements are Stage 1, common to AS and A Level. Integrating e^kx, 1/x, sin kx and cos kx (1.08c) and the area between two curves (1.08f) are A Level only. The [study guide](/resources/ocr-a-level-mathematics-integration-basics-fundamental-theorem-indefinite-and/) has the full explanations. Test yourself with the [practice set](/resources/ocr-a-level-mathematics-integration-basics-fundamental-theorem-indefinite-and-practice/), tick topics off on the [checklist](/checklists/ocr/a-level/mathematics/), see the [course hub](/boards/ocr/a-level/mathematics/) and try the [free diagnostics](/diagnostics/). Reverse chain rule, parts, substitution, partial fractions, the trapezium rule and differential equations are not covered here.

## Key results

| Ref | Result |
|---|---|
| 1.08a | ∫ f(x) dx = F(x) + c when f(x) = d/dx F(x) |
| 1.08b | xⁿ integrates to xⁿ⁺¹/(n + 1) + c, for n ≠ -1 |
| 1.08c | ∫ e^kx dx = (1/k)e^kx + c; ∫ 1/x dx = ln\|x\| + c |
| 1.08c | ∫ sin kx dx = -(1/k)cos kx + c; ∫ cos kx dx = (1/k)sin kx + c |
| 1.08c | cos²A = (1 + cos 2A)/2; sin²A = (1 - cos 2A)/2 |
| 1.08d | ∫ₐᵇ f(x) dx = F(b) - F(a) |
| 1.08e | Area under a curve above the axis = ∫ₐᵇ y dx |
| 1.08f | Area between curves = ∫ₐᵇ (upper - lower) dx |

## 1.08a Reverse of differentiation

- Integrating undoes differentiating. Check any indefinite integral by differentiating your answer.
- **Indefinite**: no limits, answer is a function plus c. **Definite**: limits, answer is a number.
- "Hence" questions: differentiate the given function, rearrange so the target integrand appears, then integrate both sides.

**Worked reminder.** d/dx (x² cos x) = 2x cos x - x² sin x. So ∫ (x² sin x - 2x cos x) dx = -x² cos x + c, with no new integration needed.

## 1.08b Powers of x (Stage 1)

**Method in steps**
1. Rewrite each term as a multiple of a power of x (roots are fractions, 1/xᵐ is x⁻ᵐ).
2. Expand brackets and split fractions over a single term in the denominator.
3. Raise each index by 1, then divide by the index you now have.
4. Add c once. For a curve through a given point, substitute to find c.

**Worked reminders.**
- ∫ (6√x + 2/x³) dx = ∫ (6x^(1/2) + 2x⁻³) dx = 4x^(3/2) - 1/x² + c.
- ∫ (2x - 3)(x + 1) dx: expand to 2x² - x - 3, then integrate to (2/3)x³ - x²/2 - 3x + c.
- A curve with dy/dx = 2x - 3 through (2, 5): y = x² - 3x + c, so c = 7.

## 1.08c Standard integrals (A Level only)

- The factor 1/k appears for e^kx and cos kx. For sin kx it is -1/k.
- ln\|x\| needs the modulus because x can be negative.
- These cover kx only. Do not extend them to other inner functions without the method from another topic.
- The specification says integrals of arcsin, arccos and arctan will be given if required.

**Method for sin² and cos²**
1. Replace sin²(ax) by (1 - cos 2ax)/2 or cos²(ax) by (1 + cos 2ax)/2.
2. Integrate term by term.

**Worked reminders.**
- ∫ 6 cos² 2x dx = ∫ 3(1 + cos 4x) dx = 3x + (3/4) sin 4x + c.
- Divide before integrating: (e^(2x) + 4)/eˣ = eˣ + 4e^(-x), so the integral is eˣ - 4e^(-x) + c.

## 1.08d Definite integrals (Stage 1)

**Method in steps**
1. Integrate (no c).
2. Put the upper limit in, then the lower, and subtract.
3. Simplify exactly: leave π, e and ln in the answer unless told to give decimals.

**Worked reminders.**
- ∫₀^(ln 4) 6e^(-x) dx = [-6e^(-x)]₀^(ln 4) = -6/4 + 6 = 9/2.
- ∫_(-4)^(-1) (2/x) dx = [2 ln\|x\|]_(-4)^(-1) = 2 ln 1 - 2 ln 4 = -4 ln 2. The value is negative because 1/x is negative on this interval.

- Swapping limits changes the sign. Splitting at a point: ∫ₐᶜ = ∫ₐᵇ + ∫ᵇᶜ.
- Show the antiderivative and the substitution of limits. One of the specification's examples of detailed reasoning is a definite integral, and it says a bare calculator answer would not be awarded any marks there.

## 1.08e Area under a curve (Stage 1)

**Method in steps**
1. Sketch or sign-test the curve between the limits.
2. Find any x-intercepts inside the interval.
3. Integrate on each piece. A piece below the axis gives a negative value.
4. Add the positive sizes.

**A Level only extensions (Stage 2 wording)**
- Against the y-axis: express x using y, then area = ∫ x dy between the two y-values.
- Parametric: area = ∫ y (dx/dt) dt, with limits converted to t.

**Worked reminders.**
- y = x² - 4x between x = 0 and x = 4 is below the axis: ∫₀⁴ (x² - 4x) dx = -32/3, so the area is 32/3.
- x = 2t, y = 3t² for t from 1 to 2: ∫₁² 3t² × 2 dt = [2t³]₁² = 14.

## 1.08f Area between curves (A Level only)

**Method in steps**
1. Set f(x) = g(x) and solve; the roots are the limits.
2. Pick an x-value between the roots to see which curve is higher.
3. Integrate (upper - lower).
4. If the curves cross inside the interval, split there and reverse the subtraction.

**Worked reminder.** The curve y = 8 - x² and the line y = 2x meet where x² + 2x - 8 = 0, so x = -4 or 2. At x = 0 the curve (8) is above the line (0). Area = ∫_(-4)^2 (8 - 2x - x²) dx = [8x - x² - x³/3]_(-4)^2 = 28/3 + 80/3 = 36.

## Exam technique in short

- Read the verb. "Find" an indefinite integral needs +c. "Evaluate" and "find the exact value" need limits substituted and a simplified exact answer.
- In "hence" questions the earlier part is the intended route, so use it and show where it feeds in.
- When a question says to show detailed reasoning, write every line: the antiderivative, the limits substituted, and the simplification.
- Sketch the curve before any area question. Two minutes on signs and intersections saves a lost mark.
- Check an indefinite integral by differentiating it, and an area by asking whether the size looks sensible against the graph.
- For an area between curves, write the subtraction as one bracket, (upper - lower), before you expand. It keeps the signs under control.

## Must-know distinctions

| Idea | Contrast |
|---|---|
| Indefinite vs definite | A function with +c vs a number with limits |
| Net integral vs area | Signed total vs positive size of each piece added |
| ∫ 1/x dx vs ∫ xⁿ dx | ln\|x\| vs the power rule (n = -1 excluded) |
| ∫ e^kx vs d/dx e^kx | Divide by k vs multiply by k |
| Stage 1 vs Stage 2 | Curve and axis vs curve and curve (A Level only) |

## Quick self-test

1. Find ∫ (4x³ - 6x⁻⁴) dx.
2. Find ∫ (9e^(3x) + 5/x) dx.
3. Find ∫ (cos 4x - 2 sin(x/2)) dx.
4. Evaluate ∫₁² (12x² - 5) dx.
5. Evaluate ∫₁^(e³) (2/x) dx.
6. Evaluate ∫₀^(ln 2) 10e^(-5x) dx.
7. Evaluate ∫₀^(π/4) 8 cos 2x dx.
8. Evaluate ∫₀^(π/2) cos²x dx.
9. Given that k > 1 and ∫₁^k 3x² dx = 63, find k.
10. A curve has dy/dx = 2x - 3 and passes through (2, 5). Find its equation.
11. Find the area between y = x² - 9 and the x-axis.
12. Find the area between y = x² and y = 2x + 3.
13. Find the area enclosed between y = sin x and the x-axis for 0 ≤ x ≤ 2π.

### Answers

1. x⁴ + 2x⁻³ + c, which is x⁴ + 2/x³ + c
2. 3e^(3x) + 5 ln\|x\| + c
3. (1/4) sin 4x + 4 cos(x/2) + c
4. [4x³ - 5x]₁² = (32 - 10) - (4 - 5) = 23
5. [2 ln x]₁^(e³) = 6
6. [-2e^(-5x)]₀^(ln 2) = -2/32 + 2 = 31/16
7. [4 sin 2x]₀^(π/4) = 4
8. ∫ (1 + cos 2x)/2 dx = [x/2 + (sin 2x)/4]₀^(π/2) = π/4
9. k³ - 1 = 63, so k³ = 64 and k = 4
10. y = x² - 3x + c; 4 - 6 + c = 5, so c = 7 and y = x² - 3x + 7
11. The curve is below the axis between x = -3 and 3: area = 36
12. The curves meet at x = -1 and 3: area = ∫_(-1)^3 (2x + 3 - x²) dx = 32/3
13. The net integral is 0. Area = 2 × 2 = 4

## Where marks are usually lost

- Leaving out +c on an indefinite integral, or carrying +c into a definite one.
- Multiplying instead of dividing by k when integrating e^kx, sin kx and cos kx.
- Dropping the minus sign in ∫ sin kx dx.
- Writing ln x instead of ln\|x\| when the interval or question allows negative x.
- Not expanding a bracket or splitting a fraction before integrating.
- Quoting a net integral as an area when the curve crosses the axis.
- Using the wrong upper curve, or missing a crossing inside the limits.
- Giving a decimal where the question wants an exact answer.
- Substituting x-limits into an integral that is already in terms of t, or the reverse.
- Working out ln of a negative number instead of using ln\|x\| and then simplifying.
- Writing down only a calculator value for a definite integral that asks for detailed reasoning.

## Official syllabus

These notes follow content references 1.08a to 1.08f of the OCR A Level in Mathematics A (H240) specification, Version 3.1 (August 2026), for first assessment in 2018, published by OCR.
