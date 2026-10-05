---
resourceId: "mb-ap-calcab-7.8-study-guide"
title: "Exponential Models with Differential Equations: Study Guide (Calculus AB 7.8)"
description: "Learn how the sentence 'rate proportional to amount' becomes dy/dt = ky, why its solutions are y = y₀e^(kt), and how to find, check and interpret k in context."
course: "calculus-ab"
unit: 7
topics: ["7.8"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Separation of variables and particular solutions (Topics 7.6 and 7.7)"
  - "Derivatives of eˣ and ln x, and the chain rule (Units 2 and 3)"
  - "Laws of logarithms and exponents, for example ln(a/b) = ln a − ln b and e^(ln a) = a"
  - "Velocity, acceleration and position for motion along a line (Topic 4.2), and position as an accumulated velocity (Unit 6)"
prerequisiteResources: ["mb-ap-calcab-7.7-study-guide"]
learningObjectives:
  - "Translate a sentence about a rate being proportional to an amount into the differential equation dy/dt = ky, and say what y, t and k mean in context"
  - "Derive the solution y = y₀e^(kt) by separating variables, and confirm it by differentiating and checking the initial value"
  - "Find k from a growth rate, a half-life, a doubling time or two data values, and use the model to predict values, rates and times"
  - "Judge whether an answer is reasonable from the sign of k, the units and the long-run behaviour of the model"
  - "Use a proportional decay model for velocity to answer questions about motion along a line"
skills: ["1", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "mixed"
calculatorNote: "Set up and solve the differential equation by hand. A calculator is useful for values of e^(kt) and ln; round final decimal answers to three decimal places and keep full accuracy in between."
related: ["mb-ap-calcab-7.8-revision-notes", "mb-ap-calcab-7.8-practice", "mb-ap-calcab-7.8-checklist"]
next: "mb-ap-calcab-7.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "'The rate of change of y is proportional to y' means dy/dt = ky. k > 0 gives growth; k < 0 gives decay."
  - "With y = y₀ when t = 0, the solution is y = y₀e^(kt). Check it: its derivative is k·y₀e^(kt) = ky, and at t = 0 it equals y₀."
  - "k is the relative rate of change, (dy/dt)/y. Its units are 'per unit of time'."
  - "Doubling time = ln 2 / k and half-life = ln 2 / |k|. Neither depends on the starting amount."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 7.8 is common content, so the same page serves AB and BC students. BC students go on to the logistic model in Topic 7.9."
  - question: "Do I have to derive y = y₀e^(kt) every time?"
    answer: "No. Once you recognise dy/dt = ky you may write the solution straight away. But you should be able to derive it by separation of variables, and you should always be able to check it by differentiating."
  - question: "Should I write the decay equation as dy/dt = −ky or dy/dt = ky with k negative?"
    answer: "Either is correct if you say which. Write dy/dt = −ky with k > 0, or dy/dt = ky with k < 0. Then keep the sign consistent in every later step."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer, so powers of e are written in a compact form:

**e^(kt)** means "e raised to the power kt". **y₀** (say "y nought") is the value of y when t = 0. **ln** is the natural logarithm, so ln(e^a) = a and e^(ln a) = a for a > 0.

On paper, write e^(kt) with kt as a raised exponent.

## From a sentence to a differential equation

Many quantities change at a rate that depends on how much of them there is. A large population has more parents, so it gains more new members per day. A large dose of a drug is cleared faster than a small one. The common sentence is:

> **A quantity changes at a rate proportional to its current size.**

"Proportional to" means "equals a constant times". So if y is the quantity and t is time, the sentence becomes

**dy/dt = ky**

Read each symbol in context:

- **y** is the amount (people, milligrams, cells, metres per second).
- **t** is time (hours, days, years).
- **dy/dt** is the rate of change of the amount, in units of y per unit of t.
- **k** is the constant of proportionality. Because ky must have the units of dy/dt, k has units of **1 per unit of time** (for example, per hour).

The sign of k tells you the direction. If the amount is positive and k > 0, then dy/dt > 0, so y grows. If k < 0, y decays. Some questions write decay as dy/dt = −ky with k > 0. Both forms are correct; just be clear which one you are using.

Not every sentence about rates gives this equation. Translate carefully:

| Sentence | Differential equation | Exponential model? |
|---|---|---|
| Rate of change of P is proportional to P | dP/dt = kP | Yes |
| Q decreases at a rate proportional to the amount present | dQ/dt = −kQ, k > 0 | Yes (decay) |
| Rate of change of y is proportional to time | dy/dt = kt | No: y = (k/2)t² + C |
| Rate of change of y is proportional to the square of y | dy/dt = ky² | No |
| Rate of change of T is proportional to the difference between T and 20 | dT/dt = k(T − 20) | Shifted version (see below) |

## Solving dy/dt = ky by separation of variables

You met this method in Topics 7.6 and 7.7. Suppose y > 0.

1. **Separate:** (1/y) dy = k dt.
2. **Integrate both sides:** ln|y| = kt + C.
3. **Exponentiate:** |y| = e^(kt + C) = e^C · e^(kt).
4. **Tidy the constant:** e^C is just a positive constant. Allowing for negative y as well, write y = A·e^(kt), where A is any constant. (A = 0 gives the constant solution y = 0, which also satisfies the equation.)
5. **Use the initial condition** y = y₀ when t = 0: y₀ = A·e⁰ = A.

So the particular solution is

> **y = y₀e^(kt)**

Notice step 3. The constant C ends up **multiplying** e^(kt), not added to it. Writing y = e^(kt) + C is a very common error. It does not satisfy dy/dt = ky.

**A domain note.** Dividing by y in step 1 assumes y ≠ 0. That is safe here: if y₀ > 0, then y₀e^(kt) is positive for every t, so y never reaches 0. The solution is valid for all real t, although a model is only trusted over the times it was built for.

## Confirm the solution before you use it

You can always check a proposed solution, without repeating the algebra.

**Does it satisfy the differential equation?** Differentiate y = y₀e^(kt) using the chain rule: dy/dt = y₀ · k e^(kt) = k(y₀e^(kt)) = ky. ✓

**Does it satisfy the initial condition?** At t = 0, y = y₀e⁰ = y₀. ✓

Then check that your numbers are **reasonable**:

- If the situation is growth, k must come out positive and later values must be larger. For decay, k is negative and the amount falls but stays positive.
- The units must match: k in "per hour" if t is in hours.
- Exponential decay never reaches exactly 0. If your model predicts a negative amount, something has gone wrong.

## What y₀ and k mean

**y₀** is the starting amount.

**k** is the **relative rate of change**. Divide both sides of dy/dt = ky by y:

**(dy/dt)/y = k**

So k is the rate of change as a fraction of the current amount. If k = 0.04 per year, the amount is changing at 4% of its current size per year, at every instant.

Two consequences matter in questions:

**1. The rate is not constant.** dy/dt = ky changes as y changes. When y doubles, the rate doubles. A model with dy/dt = ky is not "y increases by the same amount each hour".

**2. Equal time steps multiply y by the same factor.** From y = y₀e^(kt), moving forward Δt units of time multiplies y by e^(kΔt), whatever the current value. This gives the two famous times:

- **Doubling time** (k > 0): solve e^(kT) = 2, so **T = ln 2 / k**.
- **Half-life** (k < 0): solve e^(kT) = 1/2, so **T = ln 2 / |k|** (equivalently k = −ln 2 / T).

Neither depends on y₀. A quantity with a half-life of 2 hours halves every 2 hours, whether you start with 64 mg or 6 mg.

<figure>
<svg viewBox="0 0 520 330" role="img" aria-labelledby="decay-title decay-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="decay-title">Exponential decay curve Q = 64e^(kt) with half-life 2, with tangent lines showing the slope halves when the height halves</title>
<desc id="decay-desc">A decreasing curve starting at (0, 64) and passing through (2, 32), (4, 16), (6, 8), (8, 4) and (10, 2). It gets flatter as it falls but never touches the t-axis. Dashed horizontal guide lines mark heights 32 and 16 at t = 2 and t = 4. Short solid tangent segments are drawn at t = 0, t = 2 and t = 4, labelled with slopes of about −22.18, −11.09 and −5.55. Each slope is half the one before, just as each height is half the one before.</desc>
<rect x="0" y="0" width="520" height="330" fill="#ffffff"/>
<line x1="40" y1="280" x2="500" y2="280" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="60" y1="300" x2="60" y2="20" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="60" y="297">0</text><text x="144" y="297">2</text><text x="228" y="297">4</text><text x="312" y="297">6</text><text x="396" y="297">8</text><text x="480" y="297">10</text>
<text x="500" y="318">t (hours)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="53" y="228">16</text><text x="53" y="172">32</text><text x="53" y="116">48</text><text x="53" y="60">64</text>
<text x="56" y="16">Q (mg)</text>
</g>
<g stroke="#1d2b44" stroke-width="1">
<line x1="144" y1="276" x2="144" y2="284"/><line x1="228" y1="276" x2="228" y2="284"/><line x1="312" y1="276" x2="312" y2="284"/><line x1="396" y1="276" x2="396" y2="284"/><line x1="480" y1="276" x2="480" y2="284"/>
<line x1="56" y1="224" x2="64" y2="224"/><line x1="56" y1="168" x2="64" y2="168"/><line x1="56" y1="112" x2="64" y2="112"/><line x1="56" y1="56" x2="64" y2="56"/>
</g>
<line x1="60" y1="168" x2="144" y2="168" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4"/>
<line x1="144" y1="168" x2="144" y2="280" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4"/>
<line x1="60" y1="224" x2="228" y2="224" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4"/>
<line x1="228" y1="224" x2="228" y2="280" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="60.0,56.0 70.5,74.6 81.0,91.6 91.5,107.3 102.0,121.6 112.5,134.8 123.0,146.8 133.5,157.9 144.0,168.0 154.5,177.3 165.0,185.8 175.5,193.6 186.0,200.8 196.5,207.4 207.0,213.4 217.5,218.9 228.0,224.0 238.5,228.6 249.0,232.9 259.5,236.8 270.0,240.4 280.5,243.7 291.0,246.7 301.5,249.5 312.0,252.0 322.5,254.3 333.0,256.5 343.5,258.4 354.0,260.2 364.5,261.8 375.0,263.4 385.5,264.7 396.0,266.0 406.5,267.2 417.0,268.2 427.5,269.2 438.0,270.1 448.5,270.9 459.0,271.7 469.5,272.4 480.0,273.0"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="60" y1="56" x2="93.6" y2="118.1"/>
<line x1="118.8" y1="144.7" x2="169.2" y2="191.3"/>
<line x1="202.8" y1="212.4" x2="253.2" y2="235.6"/>
</g>
<g fill="#1d2b44"><circle cx="60" cy="56" r="4"/><circle cx="144" cy="168" r="4"/><circle cx="228" cy="224" r="4"/></g>
<g font-size="12" fill="#1d2b44">
<text x="72" y="50">(0, 64): slope ≈ −22.18</text>
<text x="156" y="160">(2, 32): slope ≈ −11.09</text>
<text x="240" y="214">(4, 16): slope ≈ −5.55</text>
<text x="300" y="120">Q = 64e^(kt), k = −ln 2 / 2 ≈ −0.347</text>
<text x="300" y="138">half the height → half the slope</text>
</g>
</svg>
<figcaption>Figure 1. A decay model with half-life 2 hours. Every 2 hours the amount halves (64, 32, 16, …), and so does the slope of the tangent line, because dQ/dt = kQ. The ratio slope ÷ height is the same, k ≈ −0.347 per hour, at every point. The curve gets closer to the t-axis but never reaches it. The data are invented for illustration.</figcaption>
</figure>

## Worked example 1: finding k from two measurements

**Question.** A laboratory yeast culture grows at a rate proportional to the number of cells present. At t = 0 hours there are 1200 cells; at t = 3 hours there are 2700 cells. (The data are invented.)

(a) Write and solve a differential equation for the number of cells N(t).
(b) Estimate N(5).
(c) Find dN/dt at t = 3 and interpret it.
(d) When will there be 10 000 cells?

1. **Translate.** "Rate proportional to number present" gives **dN/dt = kN**, with N(0) = 1200. So N(t) = 1200e^(kt).
2. **Use the second data point to find k.** 2700 = 1200e^(3k), so e^(3k) = 2700/1200 = 9/4.
   Take ln of both sides: 3k = ln(9/4), so **k = (1/3) ln(9/4) ≈ 0.270 per hour**.
3. **Check reasonableness.** The culture grew, and k > 0. ✓
4. **(b) Predict.** N(5) = 1200e^(5k) ≈ **4636.093**, so about 4636 cells.
5. **(c) Rate.** Use the differential equation directly: dN/dt = kN = 0.27031 × 2700 ≈ **729.837 cells per hour**. At t = 3 hours the culture is gaining cells at about 730 cells per hour. This is an instantaneous rate, not a count for the next hour.
6. **(d) Time.** Solve 1200e^(kt) = 10 000: e^(kt) = 10 000/1200, so t = ln(10 000/1200)/k ≈ **7.844 hours**.

**Check.** Substituting t = 7.844 back gives N ≈ 10 000. The doubling time is ln 2 / k ≈ 2.564 hours, so in about 7.8 hours the culture doubles about three times: 1200 → 2400 → 4800 → 9600. That is close to 10 000, so the answer is sensible.

**Tip.** Keep k stored to full accuracy in your calculator. Rounding k to 0.27 too early shifts later answers.

## Worked example 2: a half-life without a calculator

**Question.** A tracer substance (invented for this example) leaves the body at a rate proportional to the amount present. Its half-life is 6 hours. A patient receives 40 mg at t = 0.

(a) Find the amount A(t) in milligrams.
(b) Find A(15) exactly.
(c) After how many hours is there 5 mg left?

1. **Model.** dA/dt = kA with A(0) = 40, so A(t) = 40e^(kt).
2. **Find k from the half-life.** A(6) = 20, so e^(6k) = 1/2. Then 6k = ln(1/2) = −ln 2, so **k = −ln 2 / 6 ≈ −0.116 per hour**. Negative, as decay requires. ✓
3. **Rewrite.** e^(kt) = e^(−(ln 2)t/6) = (e^(ln 2))^(−t/6) = 2^(−t/6). So **A(t) = 40 · 2^(−t/6)**. This form shows the halving directly.
4. **(b)** A(15) = 40 · 2^(−15/6) = 40 · 2^(−5/2) = 40/(4√2) = 10/√2 = **5√2 ≈ 7.071 mg**.
5. **(c)** 40 → 20 → 10 → 5 takes three half-lives, so **t = 18 hours**. Algebraically: 2^(−t/6) = 5/40 = 1/8 = 2^(−3), so t/6 = 3.

**Check.** 15 hours is between two half-lives (12 hours, 10 mg) and three (18 hours, 5 mg), and 7.071 mg is between 10 and 5. ✓

## Worked example 3: motion along a line

Finding particular solutions also answers questions about motion. Here the velocity, not an amount, decays.

**Question.** A test cart on a straight track coasts after its motor switches off at t = 0. Its velocity v (m/s) satisfies dv/dt = −0.5v, with v(0) = 12. Its position is x(0) = 0 metres. (Invented data.)

(a) Find v(t).
(b) Find the position x(t).
(c) When is the velocity 3 m/s, and where is the cart then?
(d) How far can the cart travel in total?

1. **(a)** This is dv/dt = kv with k = −0.5 per second. So **v(t) = 12e^(−0.5t)**.
   **Confirm:** dv/dt = 12 × (−0.5)e^(−0.5t) = −0.5v ✓, and v(0) = 12 ✓.
2. **Interpret the equation.** dv/dt is acceleration. At t = 0 the acceleration is −0.5 × 12 = −6 m/s². The faster the cart moves, the harder it slows.
3. **(b)** Position is the accumulated velocity: x(t) = 0 + ∫ (0 to t) 12e^(−0.5s) ds = [−24e^(−0.5s)] from 0 to t = **24 − 24e^(−0.5t)** metres.
4. **(c)** 12e^(−0.5t) = 3 gives e^(−0.5t) = 1/4, so t = 2 ln 4 = **4 ln 2 ≈ 2.773 seconds**. Then x = 24 − 24 × (1/4) = **18 m**.
5. **(d)** As t → ∞, e^(−0.5t) → 0, so x(t) → 24. The cart moves forward for all time but never passes **24 m**.

**Check.** v stays positive, so x should always increase; it does. The acceleration when v = 3 is −0.5 × 3 = −1.5 m/s², a quarter of the starting value, just as the velocity is a quarter of its start. ✓

## A related model: rate proportional to a difference

Sometimes the rate is proportional to the **gap** between y and a fixed value M: dy/dt = k(y − M). Let u = y − M. Then du/dt = dy/dt = ku, which is the exponential model again. So

**y − M = (y₀ − M)e^(kt)**

This is solved with the same separation of variables from Topic 7.6. Example (invented): a metal part at 90 °C cools in a 20 °C room with dT/dt = −0.1(T − 20), t in minutes. Then T = 20 + 70e^(−0.1t). The gap above room temperature halves from 70 to 35 when T = 55 °C, at t = 10 ln 2 ≈ 6.931 minutes. Note that T itself does not halve: only the gap behaves exponentially.

## Common misconceptions

- **"y = e^(kt) + C."** The constant from integrating multiplies e^(kt). Check: e^(kt) + C does not satisfy dy/dt = ky unless C = 0.
- **"k is the amount gained each hour."** k is a relative rate (a fraction of the current amount per unit time). The amount gained per hour changes as y changes.
- **"The rate is constant, so I can use rate × time."** In Worked example 1, the rate at t = 0 is about 324 cells per hour and at t = 3 about 730. Only the relative rate is constant.
- **"k = 0.05 means 5% growth per year exactly."** Over one year, y is multiplied by e^0.05 ≈ 1.0513, a rise of about 5.13%. The 5% is an instantaneous rate.
- **"Half-life depends on how much you start with."** It does not: T = ln 2 / |k|.
- **Sign errors with decay.** If you write dy/dt = −ky, then k > 0 and y = y₀e^(−kt). Do not put a second minus sign in.
- **"Proportional to t" is the same as "proportional to y".** dy/dt = kt gives a parabola, not an exponential. Read the sentence carefully.
- **Rounding k early.** Store k exactly (for example as ln(9/4)/3) and round only the final answer.

## Where this leads

Exponential models are the simplest models built from differential equations. BC students next meet the logistic model in Topic 7.9, where growth slows as the amount approaches a limit. Unit 8 then uses definite integrals for averages and accumulations, beginning with the [average value of a function](/advanced-course-resources/calculus-ab/8-1-finding-average-value-function-on-study-guide/). If separating variables still feels slow, go back to [Topic 7.7](/advanced-course-resources/calculus-ab/7-7-finding-particular-solutions-initial-conditions-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/7-8-exponential-models-differential-equations-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/7-8-exponential-models-differential-equations-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/7-8-exponential-models-differential-equations-checklist/) to consolidate.
