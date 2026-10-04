---
resourceId: "mb-ap-calcbc-6.11-study-guide"
title: "Integrating Using Integration by Parts: Study Guide (Calculus BC 6.11)"
description: "Derive integration by parts from the product rule, learn how to choose u, and use it for repeated, self-returning and definite integrals, including an accumulation problem."
course: "calculus-bc"
unit: 6
topics: ["6.11"]
resourceType: "study-guide"
calculusScope: "bc-only"
prerequisites:
  - "The product rule for derivatives (Topic 2.8)"
  - "The Fundamental Theorem of Calculus and evaluating definite integrals (Topic 6.7)"
  - "Antiderivatives of basic functions: powers, eˣ, sin x, cos x, 1/x (Topic 6.8)"
  - "Integration by substitution (Topic 6.9)"
learningObjectives:
  - "Derive the integration by parts formula from the product rule"
  - "Choose u and dv so that the new integral is simpler, and explain why a choice works or fails"
  - "Find indefinite integrals by parts, including repeated use and integrals that return to themselves"
  - "Evaluate definite integrals by parts, applying the limits to both the uv term and the new integral"
  - "Verify an antiderivative by differentiating it"
skills: ["1", "3"]
studyMinutes: 50
difficulty: "stretch"
calculator: "mixed"
calculatorNote: "Find antiderivatives by hand: this is a no-calculator skill. Where a calculator is allowed, you may use it to check a definite integral numerically or to give a decimal answer, but show the exact working."
related: ["mb-ap-calcbc-6.11-revision-notes", "mb-ap-calcbc-6.11-practice", "mb-ap-calcbc-6.11-checklist"]
next: "mb-ap-calcbc-6.11-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only: this topic is not part of Calculus AB."
  - "∫u dv = uv − ∫v du is the product rule, integrated and rearranged."
  - "Choose u so that du is simpler, and dv so that you can integrate it. LIATE is a guide, not a rule."
  - "For a definite integral: ∫ from a to b of u dv = [uv] from a to b − ∫ from a to b of v du."
  - "Always check by differentiating your answer: you should get back the integrand."
faqs:
  - question: "Do Calculus AB students need this?"
    answer: "No. Integration by parts is BC-only content. AB students can skip this page; BC students need it for indefinite and definite integrals."
  - question: "Why don't I add + C when I find v?"
    answer: "Any constant you add to v cancels out in uv − ∫v du, so it is safe to leave it out. Add a single + C at the very end of an indefinite integral."
  - question: "Is the tabular method required?"
    answer: "No. It is an optional shortcut for repeated integration by parts when one factor differentiates to zero. The ordinary formula always works."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**BC-only material.** Integration by parts is part of Calculus BC only. Calculus AB students do not need this topic.

## Before you start: prerequisites

You need four earlier ideas. If any is shaky, revisit it from the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) first.

| Prerequisite | Topic | What you use it for here |
|---|---|---|
| Product rule | 2.8 | The formula comes straight from it |
| Fundamental Theorem of Calculus and definite integrals | 6.7 | Evaluating [uv] between limits |
| Basic antiderivatives | 6.8 | Finding v from dv |
| Substitution | 6.9 | Some v's and some leftover integrals need it; it is also the method to try first |

Integral notation on this page: **∫ from a to b of f(x) dx** is the definite integral with lower limit a and upper limit b. **[F(x)] from a to b** means F(b) − F(a).

## Why we need a new technique

Substitution undoes the chain rule. It works when the integrand contains a function and (a multiple of) its derivative, such as 2x cos(x²).

But many integrands are a product of two unrelated functions: x cos x, x eˣ, x² sin x. There is no inner function whose derivative is sitting outside, so substitution does not help. These products come from the **product rule**, so we undo the product rule instead.

## Deriving the formula from the product rule

Let u and v be differentiable functions of x. The product rule says

**d/dx [u v] = u′ v + u v′**

Rearrange to isolate one product:

**u v′ = d/dx [u v] − v u′**

Integrate both sides with respect to x. The integral of a derivative gives back the function (up to a constant), so

**∫ u v′ dx = u v − ∫ v u′ dx**

In differential shorthand, write dv = v′ dx and du = u′ dx:

> **∫ u dv = u v − ∫ v du**

The formula does not finish the integral. It **trades** one integral for another. The trade is worth it only if ∫ v du is easier than the original.

**Definite version.** Using the Fundamental Theorem on each part:

> **∫ from a to b of u dv = [u v] from a to b − ∫ from a to b of v du**

The limits apply to **both** pieces.

## Choosing u and dv

You split the integrand into two parts: u (which you will differentiate) and dv (which you will integrate). Two conditions decide a good choice:

1. **dv must be something you can integrate.** If you cannot find v, you are stuck immediately.
2. **du should be simpler than u**, so that v du is easier than u dv.

**LIATE as a guide.** Many teachers suggest choosing u from whichever factor appears first in this list: **L**ogarithmic, **I**nverse trig, **A**lgebraic (powers of x), **T**rigonometric, **E**xponential. It works often because logs and inverse trig functions get *simpler* when differentiated (ln x → 1/x), while exponentials and sin/cos are easy to integrate.

But LIATE is a habit, not a theorem. It can point you the wrong way. Consider ∫ x³ e^(x²) dx:

- LIATE says u = x³ and dv = e^(x²) dx. But e^(x²) has no elementary antiderivative, so condition 1 fails.
- A better split is **u = x²** and **dv = x e^(x²) dx**. Then v = ½ e^(x²) (by substitution) and du = 2x dx:
  ∫ x³ e^(x²) dx = ½ x² e^(x²) − ∫ x e^(x²) dx = ½ x² e^(x²) − ½ e^(x²) + C.

Always test a choice against the two conditions, not against a mnemonic.

**When dv = dx.** If the integrand is a single function that is hard to integrate but easy to differentiate, take dv = dx. For example, ∫ ln x dx: u = ln x, dv = dx, so du = (1/x) dx and v = x.

**∫ ln x dx = x ln x − ∫ x · (1/x) dx = x ln x − x + C**

## Worked example 1: ∫ x cos x dx, and a bad choice

**Question.** Find ∫ x cos x dx without a calculator. Check your answer.

1. **Is substitution possible?** No: x is not the derivative of anything inside cos x. The integrand is a product of an algebraic and a trig function, so try parts.
2. **Choose.** u = x (its derivative, 1, is simpler). dv = cos x dx (easy to integrate).
3. **Find du and v.** du = 1 dx. v = sin x (no + C needed here).
4. **Apply the formula.**
   **∫ x cos x dx = x sin x − ∫ sin x dx**
5. **Finish the easier integral.** ∫ sin x dx = −cos x, so
   **∫ x cos x dx = x sin x − (−cos x) + C = x sin x + cos x + C**

**Check by differentiating.** d/dx [x sin x + cos x] = (1 · sin x + x cos x) − sin x = x cos x. ✓

**What if you choose the other way?** u = cos x and dv = x dx give du = −sin x dx and v = ½x². Then

∫ x cos x dx = ½x² cos x + ½ ∫ x² sin x dx.

The new integral has x², which is *harder* than the original x. The formula is still true, but it has moved you backwards. Swap the choice.

## Worked example 2: accumulation in context (definite integral)

**Context.** Rain-water flows into a storage tank at a rate of **r(t) = 20 t e^(−t/2)** litres per hour, where t is the time in hours after a storm starts. The tank holds 30 litres at t = 0. How much water is in the tank at t = 4 hours? (Assume no water leaves the tank.)

<figure>
<svg viewBox="0 0 540 320" role="img" aria-labelledby="flow-title flow-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="flow-title">Inflow rate r(t) = 20 t e^(−t/2) with the area from t = 0 to t = 4 shaded</title>
<desc id="flow-desc">Graph of rate in litres per hour against time in hours, from t = 0 to t = 8. The curve starts at 0, rises to a maximum of about 14.7 litres per hour at t = 2, then falls slowly to about 2.9 litres per hour at t = 8. The region under the curve between t = 0 and t = 4 is shaded with diagonal hatching and labelled as about 47.5 litres of water added. A dashed vertical line marks t = 4.</desc>
<defs><pattern id="hatch611" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="8" height="8" fill="#fdf6e3"/><line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="1"/></pattern></defs>
<rect x="0" y="0" width="540" height="320" fill="#ffffff"/>
<path d="M70 270 L75.5 243.4 L81.0 219.3 L86.5 197.7 L92.0 178.3 L97.5 161.0 L103.0 145.5 L108.5 131.9 L114.0 119.8 L119.5 109.3 L125.0 100.2 L130.5 92.3 L136.0 85.6 L141.5 80.0 L147.0 75.3 L152.5 71.6 L158.0 68.7 L163.5 66.6 L169.0 65.1 L174.5 64.3 L180.0 64.0 L185.5 64.2 L191.0 65.0 L196.5 66.1 L202.0 67.6 L207.5 69.4 L213.0 71.6 L218.5 74.0 L224.0 76.7 L229.5 79.5 L235.0 82.6 L240.5 85.8 L246.0 89.1 L251.5 92.5 L257.0 96.1 L262.5 99.7 L268.0 103.4 L273.5 107.1 L279.0 110.9 L284.5 114.6 L290.0 118.4 L290 270 Z" fill="url(#hatch611)" stroke="none"/>
<line x1="70" y1="270" x2="525" y2="270" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="70" y1="285" x2="70" y2="30" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="125" y1="266" x2="125" y2="274"/><line x1="180" y1="266" x2="180" y2="274"/><line x1="235" y1="266" x2="235" y2="274"/><line x1="290" y1="266" x2="290" y2="274"/><line x1="345" y1="266" x2="345" y2="274"/><line x1="400" y1="266" x2="400" y2="274"/><line x1="455" y1="266" x2="455" y2="274"/><line x1="510" y1="266" x2="510" y2="274"/>
<line x1="66" y1="214" x2="74" y2="214"/><line x1="66" y1="158" x2="74" y2="158"/><line x1="66" y1="102" x2="74" y2="102"/><line x1="66" y1="46" x2="74" y2="46"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="288">0</text><text x="125" y="288">1</text><text x="180" y="288">2</text><text x="235" y="288">3</text><text x="290" y="288">4</text><text x="345" y="288">5</text><text x="400" y="288">6</text><text x="455" y="288">7</text><text x="510" y="288">8</text>
<text x="300" y="310" font-size="13">time t (hours)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="218">4</text><text x="62" y="162">8</text><text x="62" y="106">12</text><text x="62" y="50">16</text>
</g>
<text x="20" y="160" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 20 160)">rate r(t) (L per hour)</text>
<line x1="290" y1="118" x2="290" y2="270" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="70.0,270.0 75.5,243.4 81.0,219.3 86.5,197.7 92.0,178.3 97.5,161.0 103.0,145.5 108.5,131.9 114.0,119.8 119.5,109.3 125.0,100.2 130.5,92.3 136.0,85.6 141.5,80.0 147.0,75.3 152.5,71.6 158.0,68.7 163.5,66.6 169.0,65.1 174.5,64.3 180.0,64.0 185.5,64.2 191.0,65.0 196.5,66.1 202.0,67.6 207.5,69.4 213.0,71.6 218.5,74.0 224.0,76.7 229.5,79.5 235.0,82.6 240.5,85.8 246.0,89.1 251.5,92.5 257.0,96.1 262.5,99.7 268.0,103.4 273.5,107.1 279.0,110.9 284.5,114.6 290.0,118.4 295.5,122.2 301.0,126.0 306.5,129.8 312.0,133.5 317.5,137.2 323.0,140.9 328.5,144.5 334.0,148.1 339.5,151.6 345.0,155.1 350.5,158.5 356.0,161.9 361.5,165.2 367.0,168.4 372.5,171.6 378.0,174.6 383.5,177.7 389.0,180.6 394.5,183.5 400.0,186.4 405.5,189.1 411.0,191.8 416.5,194.4 422.0,197.0 427.5,199.4 433.0,201.8 438.5,204.2 444.0,206.5 449.5,208.7 455.0,210.8 460.5,212.9 466.0,214.9 471.5,216.9 477.0,218.8 482.5,220.6 488.0,222.4 493.5,224.1 499.0,225.8 504.5,227.4 510.0,229.0"/>
<text x="185" y="52" font-size="12" fill="#1d2b44" text-anchor="middle">maximum ≈ 14.7 L/h at t = 2</text>
<rect x="128" y="185" width="124" height="38" fill="#ffffff" stroke="#1d2b44" stroke-width="1"/>
<text x="190" y="201" font-size="12" fill="#1d2b44" text-anchor="middle">hatched area</text>
<text x="190" y="216" font-size="12" fill="#1d2b44" text-anchor="middle">≈ 47.5 L added</text>
<text x="380" y="140" font-size="13" fill="#1d2b44">r(t) = 20 t e^(−t/2)</text>
</svg>
<figcaption>Figure 1. The inflow rate rises to a peak at t = 2 hours and then decays. The hatched area between t = 0 and t = 4 (dashed line) is the volume added in the first 4 hours, ∫ from 0 to 4 of r(t) dt ≈ 47.5 L.</figcaption>
</figure>

1. **Set up.** Volume at t = 4 = starting volume + volume added:
   **V(4) = 30 + ∫ from 0 to 4 of 20 t e^(−t/2) dt**
2. **Choose u and dv.** u = t (simpler when differentiated). dv = e^(−t/2) dt (easy to integrate).
3. **Find du and v.** du = dt. v = −2 e^(−t/2), because d/dt [−2 e^(−t/2)] = −2 · (−½) e^(−t/2) = e^(−t/2).
4. **Apply the definite formula** to ∫ from 0 to 4 of t e^(−t/2) dt:
   **= [−2t e^(−t/2)] from 0 to 4 − ∫ from 0 to 4 of (−2 e^(−t/2)) dt**
   **= [−2t e^(−t/2)] from 0 to 4 + 2 ∫ from 0 to 4 of e^(−t/2) dt**
5. **Evaluate each piece.**
   - [−2t e^(−t/2)] from 0 to 4 = (−8 e^(−2)) − (0) = −8e⁻².
   - 2 ∫ from 0 to 4 of e^(−t/2) dt = 2 [−2 e^(−t/2)] from 0 to 4 = 2(−2e⁻² + 2) = 4 − 4e⁻².
   - Total: −8e⁻² + 4 − 4e⁻² = **4 − 12e⁻²**.
6. **Multiply by 20.** ∫ from 0 to 4 of 20 t e^(−t/2) dt = 20(4 − 12e⁻²) = **80 − 240e⁻² ≈ 47.52 L**.
7. **Add the starting volume.** V(4) = 30 + 80 − 240e⁻² = **110 − 240e⁻² ≈ 77.5 L**.

**Answer.** About **77.5 litres** (exact value 110 − 240e⁻² L).

**Checks.**
- *Units:* litres per hour × hours = litres. ✓
- *Size:* the rate stays below about 14.7 L/h for 4 hours, so the added volume must be below 4 × 14.7 ≈ 59 L. 47.5 L is sensible.
- *Antiderivative:* d/dt [−2t e^(−t/2) − 4 e^(−t/2)] = −2e^(−t/2) + t e^(−t/2) + 2e^(−t/2) = t e^(−t/2). ✓
- *Calculator (where allowed):* a numerical integral of r(t) from 0 to 4 gives 47.52. ✓

**Interpretation.** In the first 4 hours after the storm starts, about 47.5 litres flow in, so the tank holds about 77.5 litres at t = 4.

## Using parts more than once

**Repeated parts.** For ∫ x² eˣ dx, one application lowers the power of x by one:

- u = x², dv = eˣ dx → ∫ x² eˣ dx = x² eˣ − ∫ 2x eˣ dx.
- Apply parts again to ∫ 2x eˣ dx with u = 2x, dv = eˣ dx: it equals 2x eˣ − 2eˣ.
- So **∫ x² eˣ dx = x² eˣ − 2x eˣ + 2eˣ + C = eˣ(x² − 2x + 2) + C**.

Check: d/dx [eˣ(x² − 2x + 2)] = eˣ(x² − 2x + 2) + eˣ(2x − 2) = x² eˣ. ✓

**Integrals that come back: solve for the integral.** Let I = ∫ eˣ sin x dx. Neither factor ever disappears when differentiated, but after two steps the original integral returns.

1. u = sin x, dv = eˣ dx: I = eˣ sin x − ∫ eˣ cos x dx.
2. u = cos x, dv = eˣ dx (**keep the trig function as u**; swapping would undo step 1): ∫ eˣ cos x dx = eˣ cos x + ∫ eˣ sin x dx = eˣ cos x + I.
3. Substitute: I = eˣ sin x − eˣ cos x − I.
4. Solve: 2I = eˣ(sin x − cos x), so **I = ½ eˣ(sin x − cos x) + C**.

Check: d/dx [½ eˣ(sin x − cos x)] = ½ eˣ(sin x − cos x) + ½ eˣ(cos x + sin x) = eˣ sin x. ✓

**Optional shortcut: the tabular method.** When u is a polynomial (so repeated differentiation reaches 0) and dv is easy to integrate repeatedly, list derivatives of u and antiderivatives of dv side by side, then multiply along the diagonals with alternating signs + − + − …

| Sign | Differentiate u | Integrate dv |
|---|---|---|
| + | x² | eˣ |
| − | 2x | eˣ |
| + | 2 | eˣ |
| | 0 | eˣ |

Diagonal products: +x² eˣ − 2x eˣ + 2eˣ, the same answer as above. The table is just repeated parts written compactly. It is not required, and it does not suit integrals like eˣ sin x, where nothing differentiates to 0.

## Common misconceptions

- **"The integral of a product is the product of the integrals."** ∫ x eˣ dx is not ½x² · eˣ. Differentiate ½x² eˣ and you get x eˣ + ½x² eˣ, not x eˣ.
- **"LIATE always gives the right u."** It fails for ∫ x³ e^(x²) dx. Check that dv can actually be integrated.
- **Forgetting the minus sign** in uv − ∫ v du, or losing a minus inside v (for example v = −cos x from dv = sin x dx).
- **Applying the limits only to the integral part** in a definite integral. [uv] from a to b must be evaluated too.
- **Forgetting the chain-rule factor in v.** From dv = e^(−t/2) dt, v = −2e^(−t/2), not e^(−t/2).
- **Swapping the choice of u halfway through** a self-returning integral. You end up with 0 = 0 or back at the start.
- **Using parts when substitution works.** ∫ x e^(x²) dx is a substitution integral (u = x²). Try substitution first.
- **Dropping + C** on an indefinite integral, or adding + C to a definite one.

## Where this leads

Integration by parts returns in BC Topic 6.13 (improper integrals such as ∫ from 0 to ∞ of x e^(−x) dx) and in the applications of integration in Unit 8, wherever an accumulation, area or volume problem has a product integrand. Topic 6.14 then asks you to select the right technique for an unfamiliar integral. Use the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) to see the order.

Try the [practice questions](/advanced-course-resources/calculus-bc/6-11-integration-by-parts-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-bc/6-11-integration-by-parts-revision-notes/) and the [checklist](/advanced-course-resources/calculus-bc/6-11-integration-by-parts-checklist/) to consolidate.
