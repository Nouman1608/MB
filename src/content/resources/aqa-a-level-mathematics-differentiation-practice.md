---
title: "AQA A-Level Mathematics: Differentiation — Practice Questions"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "G: Differentiation"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 3
syllabusTopics:
  - qualification: "a-level"
    topic: "g-differentiation-aqa-alevel-maths"
description: "Original exam-style practice questions with full worked answers on standard derivatives, stationary points, the product/quotient/chain rules, implicit/parametric differentiation and forming differential equations for AQA A-Level Mathematics (7357), Section G."
author: "marlbridge-academic-team"
publishedDate: 2026-09-06
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — AQA holds copyright in its own papers. Use these alongside the
> official past papers available free from AQA.

Related: [Differentiation study guide](/resources/aqa-a-level-mathematics-differentiation/) and
[revision notes](/resources/aqa-a-level-mathematics-differentiation-revision-notes/).

---

## Section A

**1.** Differentiate y = 5x³ - 2x + 7 with respect to x. **[2]**

**2.** Differentiate y = e⁴ˣ with respect to x. **[1]**

**3.** State the formula for the quotient rule. **[2]**

---

## Section B

**4.** Find and classify the stationary points of f(x) = x³ - 12x + 5. **[6]**

**5.** A curve is defined implicitly by x² + y² = 25.

**(a)** Find dy/dx in terms of x and y. **[3]**
**(b)** Find the gradient of the curve at the point (3, 4). **[2]**

**6.** A spherical balloon is inflated so that its radius r increases at a constant rate of 2 cm/s. Its volume V is given by V = (4/3)πr³.

**(a)** Find dV/dr. **[2]**
**(b)** Use the chain rule to find dV/dt when r = 5 cm. **[3]**

---

## Section C

**7.** A population P of bacteria grows such that the rate of increase of the population is proportional to the population size at any time t.

**(a)** Form a differential equation for this situation. **[2]**
**(b)** Explain why solving this equation is not part of what Section G expects. **[2]**
**(c)** A curve y = f(x) has f'(x) = 0 at x = 2, and f''(2) = 0. Explain what further work is needed to classify this stationary point, and describe the method. **[4]**

**8.** Differentiate y = (2x + 1)⁵(x - 3) using the product rule and the chain rule, giving your answer in a fully expanded or factorised form. **[6]**

**9.** A curve is defined parametrically by x = t² + 1, y = 2t³.

**(a)** Find dx/dt and dy/dt. **[2]**
**(b)** Hence find dy/dx in terms of t, and evaluate it at t = 2. **[3]**

---

## Worked answers

**1.** dy/dx = 15x² - 2. **[2]**

**2.** dy/dx = 4e⁴ˣ. **[1]**

**3.** (u/v)' = (u'v - uv') / v². **[2]**

**4.** f'(x) = 3x² - 12. Setting f'(x) = 0: 3x² = 12, x² = 4, x = 2 or x = -2. f''(x) = 6x. f''(2) = 12 > 0, so x = 2 is a minimum, with f(2) = 8 - 24 + 5 = -11. f''(-2) = -12 < 0, so x = -2 is a maximum, with f(-2) = -8 + 24 + 5 = 21. Stationary points: minimum at (2, -11), maximum at (-2, 21). **[6]**

**5. (a)** Differentiating both sides with respect to x: 2x + 2y(dy/dx) = 0, so dy/dx = -x/y. **[3]**
**(b)** At (3, 4): dy/dx = -3/4. **[2]**

**6. (a)** dV/dr = 4πr². **[2]**
**(b)** dV/dt = dV/dr × dr/dt = 4πr² × 2 = 8πr². At r = 5: dV/dt = 8π(25) = 200π cm³/s. **[3]**

**7. (a)** dP/dt = kP, where k is a positive constant of proportionality. **[2]**
**(b)** Section G covers constructing differential equations from a described situation, but the methods for actually solving a differential equation (finding P explicitly as a function of t) belong to Section H, Integration, which covers techniques such as separation of variables. **[2]**
**(c)** Because f''(2) = 0, the second-derivative test is inconclusive and cannot classify the stationary point on its own. The correct method is to check the sign of f'(x) at values of x either side of x = 2 (for example, at x = 1.9 and x = 2.1): if f'(x) changes from positive to negative, x = 2 is a maximum; if it changes from negative to positive, it is a minimum; if the sign is the same on both sides, x = 2 is a point of inflection with a horizontal tangent. **[4]**

**8.** Let u = (2x + 1)⁵ and v = (x - 3), so y = uv. By the chain rule, u' = 5(2x + 1)⁴ × 2 = 10(2x + 1)⁴. By the product rule: dy/dx = u'v + uv' = 10(2x + 1)⁴(x - 3) + (2x + 1)⁵(1). Factorising out the common factor (2x + 1)⁴: dy/dx = (2x + 1)⁴ [10(x - 3) + (2x + 1)] = (2x + 1)⁴ [10x - 30 + 2x + 1] = (2x + 1)⁴ (12x - 29). A common error here is expanding (2x + 1)⁵ by hand or trying to expand the whole product before differentiating — both are far slower than treating (2x + 1)⁵ as a single chain-rule "outer function" and only expanding at the very end, if at all. Since the question accepts either a fully expanded or a factorised final form, leaving the answer factorised as above is both quicker to produce and less error-prone than multiplying out. **[6]**

**9. (a)** x = t² + 1 gives dx/dt = 2t. y = 2t³ gives dy/dt = 6t². **[2]**
**(b)** By the chain rule for parametric differentiation, dy/dx = (dy/dt) ÷ (dx/dt) = 6t²/2t = 3t (for t ≠ 0). At t = 2: dy/dx = 3(2) = 6. Note that the division cancels a factor of t rather than t², since 6t²/2t = 3t, not 3t² — a frequent slip is forgetting to cancel correctly, or substituting t = 2 into dy/dt and dx/dt separately as 24 and 4 and then dividing (24/4 = 6, which happens to still check out here, but only works because the substitution is done correctly at each stage; it is safer to simplify dy/dx as an expression in t first). **[3]**

## A note on notation

Section G distinguishes between differentiating a function given explicitly as y = f(x), where dy/dx is found directly, and functions given implicitly (Question 5) or parametrically (Question 9), where dy/dx must be built up from partial results — either by differentiating both sides of an implicit equation with respect to x and rearranging, or by finding dy/dt and dx/dt separately and dividing. Examiners frequently penalise answers that skip the intermediate dy/dt and dx/dt steps for parametric curves, since the working shows whether the chain rule has actually been applied or the answer has been guessed.

## Official syllabus

AQA A-Level Mathematics (7357) specification, Section G Differentiation, for first teaching from September 2017 — the same specification cited by the [Differentiation study guide](/resources/aqa-a-level-mathematics-differentiation/) and its [revision notes](/resources/aqa-a-level-mathematics-differentiation-revision-notes/). Verified 2026-09-05.
