---
title: "Pearson Edexcel International Advanced Level Mathematics: Exponentials, logs and numerical methods (YMA01) -- Revision Notes"
seoTitle: "Edexcel IAL Maths P3 Exponentials and Logs Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "The exponential and natural logarithm functions, logarithmic graphs and numerical methods"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 147
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p3-pure-mathematics-3-edexcel-alevel-maths"
    subtopic: "p3-exponentials-and-logarithms-edexcel-alevel-maths"
  - qualification: "a-level"
    topic: "unit-p3-pure-mathematics-3-edexcel-alevel-maths"
    subtopic: "p3-numerical-methods-edexcel-alevel-maths"
description: "Condensed revision notes on eˣ, ln x, log-graph methods, sign-change roots and iteration for Pearson Edexcel IAL Mathematics Unit P3, with a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-11
featured: false
reviewNote: "2026-11-08: reviewed by sajawal-zahid."
---

These revision notes condense P3 sections 3 and 6 (topics 3.1 to 3.3 and 6.1 to 6.2) of the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification (YMA01), Issue 3, April 2019. P3 is compulsory for IAL Mathematics and Pure Mathematics; its IAS weighting is N/A. The [study guide](/resources/edexcel-ial-mathematics-the-exponential-and-natural-logarithm-functions/) has the full explanations and longer worked examples.

Test yourself afterwards with the [practice questions](/resources/edexcel-ial-mathematics-the-exponential-and-natural-logarithm-functions-practice/). Course links: the [Edexcel A Level Mathematics hub](/boards/edexcel/a-level/mathematics/), the [printable checklist](/checklists/edexcel/a-level/mathematics/) and [all free 10-minute diagnostics](/diagnostics/).

## Key facts at a glance

| Topic | Fact to recall |
|---|---|
| 3.1 | y = eˣ passes through (0, 1), has range y > 0, asymptote y = 0, and increases everywhere |
| 3.1 | y = e^(ax + b) + c has asymptote y = c and range y > c (when the curve sits above it) |
| 3.2 | ln x is the inverse of eˣ: e^(ln x) = x when x > 0, and ln(eˣ) = x whatever x is |
| 3.2 | y = ln x passes through (1, 0), has asymptote x = 0, and domain x > 0 |
| 3.3 | y = axⁿ gives log y = n log x + log a: gradient n, intercept log a |
| 3.3 | y = kbˣ gives log y = (log b)x + log k: gradient log b, intercept log k |
| 6.1 | f continuous on [a, b] with f(a), f(b) of opposite sign means a root in [a, b] |
| 6.2 | xₙ₊₁ = f(xₙ): if the terms settle on α, then α = f(α) |

## 3.1 and 3.2: exponential and natural logarithm functions

**Graph of y = e^(ax + b) + c in steps.**

1. Find the asymptote: y = c.
2. Find the y-intercept by putting x = 0: y = eᵇ + c.
3. Find any x-intercept by solving e^(ax + b) = −c (possible only when −c > 0).
4. Decide the direction: increasing if a > 0, decreasing if a < 0.
5. Label the asymptote and the intercepts.

**Solving equations: method in steps.**

```
e^(ax + b) = p    →  ax + b = ln p      →  x = (ln p − b)/a      (p > 0)
ln(ax + b) = q    →  ax + b = e^q       →  x = (e^q − b)/a
```

For the second type, ax + b = e^q is positive automatically, so the solution is valid. The domain check matters when you first combine or rearrange logarithms.

**Reflection link.** If (a, b) is on y = eˣ, then (b, a) is on y = ln x. For example, (1.5, e^1.5) on the first curve gives (e^1.5, 1.5) on the second.

**Worked reminder.** Solve e^(4 − 3x) = 9 exactly.

```
4 − 3x = ln 9
x = (4 − ln 9)/3 = 0.601 (3 s.f.)
```

**Must-know distinctions.**

- e^(ax + b) = p is solved with ln; ln(ax + b) = q is solved with e to the power.
- The range of y = e^(ax + b) + c depends on c; the range of y = ln x is all real numbers.
- ln x has a vertical asymptote; eˣ has a horizontal one.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--01-inverse-graphs.webp" width="900" height="900" alt="The orange curve y = e^x passes through (0, 1) and (1, e) and approaches the x-axis. The blue curve y = ln x passes through (1, 0) and (e, 1) and approaches the y-axis. They are mirror images in the dashed line y = x, so the functions are inverses." loading="lazy">
  <figcaption>The graph of ln x is the reflection of eˣ in y = x.</figcaption>
</figure>


## 3.3 Logarithmic graphs

**Method in steps for a table of data.**

1. Decide the model. For y = axⁿ, compute log x and log y. For y = kbˣ, compute only log y and keep x.
2. Check the points lie close to a straight line.
3. Pick two points that are far apart on the line (not necessarily data points).
4. Gradient m = (change in vertical)/(change in horizontal).
5. Read the vertical intercept c.
6. Convert: power law n = m, a = 10^c; exponential law b = 10^m, k = 10^c. With natural logs use e in place of 10.

| Plot | Straight line means | Gradient | Intercept |
|---|---|---|---|
| log y against log x | y = axⁿ | n | log a |
| log y against x | y = kbˣ | log b | log k |

**Working in the other direction.** A line on an lg y against lg x plot through (0.2, 0.6) and (1.0, 2.2) has gradient (2.2 − 0.6)/(1.0 − 0.2) = 2. The intercept is 0.6 − 2(0.2) = 0.2, so a = 10^0.2 = 1.58 and y = 1.58x².

**Worked reminder with natural logs.** On a plot of ln y against x, the points fall on a line through (0, 1.1) and (5, 3.1). The gradient is (3.1 − 1.1)/5 = 0.4, so ln b = 0.4 and b = e^0.4 = 1.49. The intercept is 1.1, so k = e^1.1 = 3.00. The model is y = 3.00 × 1.49ˣ, which is the same as y = 3.00e^(0.4x).

**Distinctions to remember.** Read log a or log k off the vertical axis; never read a or k directly. If the horizontal axis shows log x, then the vertical axis crossing is where x = 1, not where x = 0. If the horizontal axis shows x, the crossing is x = 0.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--02-base-family.webp" width="900" height="1000" alt="Curves 2^x, e^x, 3^x and (1/2)^x all pass through (0, 1), lie above the x-axis and have it as an asymptote. Bases above 1 give growth, with e^x between 2^x and 3^x; (1/2)^x decays and mirrors 2^x in the y-axis." loading="lazy">
  <figcaption>Every aˣ passes through (0, 1); a &gt; 1 grows and a &lt; 1 decays.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--07-linear-form.webp" width="900" height="1110" alt="ln y against ln x is a straight line for y = ax^n: through (0.5, 1.85) and (2.5, 4.85), gradient n = 1.5 and intercept ln a = 1.10. lg y against x is a straight line for y = kb^x with intercept lg k = 0.70 and gradient lg b = 0.14." loading="lazy">
  <figcaption>A straight line on log axes gives gradient and intercept for power and exponential laws.</figcaption>
</figure>


## 6.1 Locating roots

**Method in steps.**

1. Rearrange to f(x) = 0.
2. Calculate f at each end of the interval.
3. State that f is continuous on the interval.
4. State the sign change and conclude a root lies in the interval.

For a root to a given number of decimal places, test the two values half a unit in the last place either side. For a root of 2.543 (3 d.p.), test 2.5425 and 2.5435.

**Traps.**

- A pole in the interval, for example tan x between 1 and 2, can give a sign change with no root.
- A repeated root, as in (x − 1)², touches the axis without changing sign.
- Two roots in one interval can hide each other, because the signs match at both ends.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--06-hidden-quadratic.webp" width="900" height="1080" alt="The parabola u^2 - 5u + 6 crosses the u-axis at 2 and 3; u &lt; 0 is shaded as impossible since e^x &gt; 0. The curve y = e^(2x) - 5e^x + 6 crosses the x-axis at x = ln 2 and ln 3." loading="lazy">
  <figcaption>Substituting u = eˣ turns e²ˣ − 5eˣ + 6 = 0 into a quadratic with roots ln 2 and ln 3.</figcaption>
</figure>


## 6.2 Iteration

**Method in steps.**

1. Start from x₀ and apply the formula given.
2. Carry full accuracy between steps, but write down four decimal places.
3. Stop when successive terms agree to the accuracy needed.
4. Justify a final value by a sign change around it, as in 6.1.

```
Example: xₙ₊₁ = √(3xₙ + 1), x₀ = 3
x₁ = 3.1623, x₂ = 3.2383, x₃ = 3.2734, x₄ = 3.2894, x₅ = 3.2967
The root of x² = 3x + 1 is (3 + √13)/2 = 3.3028, and the terms approach it.
```

**Reading the sequence.** Differences between successive terms that shrink steadily point to convergence. Terms that keep growing, or that switch between large and small values, show the iteration is failing for that start value. Then try another formula or another x₀ if the question allows.

**Convergence.** The terms approach a root only if the formula and starting point suit that root. A staircase diagram drawn with y = f(x) and y = x shows whether the steps move toward the root or away from it.

## Quick self-test

1. State the asymptote of y = e^(x + 1) − 2 and its y-intercept.
2. Solve e^(3x) = 20, giving x to 3 significant figures.
3. Solve ln(2x − 1) = 3, giving x to 3 significant figures.
4. State the largest set of x-values for which y = ln(4 − x) exists.
5. Simplify e^(2 ln 3).
6. A graph of lg y against lg x for y = 5x³ is drawn. State the gradient and the vertical intercept.
7. For y = 7 × 2ˣ, state the gradient and intercept of the straight line of lg y against x.
8. A line of lg y against lg x has gradient −0.5 and intercept 0.3. Write y in terms of x.
9. Show that f(x) = x³ − 4x + 1 has a root in [1, 2].
10. Use xₙ₊₁ = √(3xₙ + 1) with x₀ = 3 to find x₁ and x₂ to 4 decimal places.
11. Explain why a sign change of tan x between x = 1 and x = 2 does not show a root.

### Answers

1. Asymptote y = −2; y-intercept e − 2 = 0.718.
2. 3x = ln 20, so x = 0.999.
3. 2x − 1 = e³, so x = (e³ + 1)/2 = 10.5.
4. x < 4 (the argument must be positive).
5. e^(ln 9) = 9.
6. Gradient 3; intercept lg 5 = 0.699.
7. Gradient lg 2 = 0.301; intercept lg 7 = 0.845.
8. y = 10^0.3 x^(−0.5) = 2.00x^(−0.5) (3 s.f.).
9. f(1) = −2 and f(2) = 1, and f is continuous, so the sign changes and a root lies in [1, 2].
10. x₁ = 3.1623 and x₂ = 3.2383.
11. tan x is not continuous at x = π/2 (about 1.571), which lies inside [1, 2]; tan 1 = 1.557 and tan 2 = −2.185 differ in sign without a root.

## Where marks are usually lost

- Leaving an answer as a decimal when the question says exact, or the reverse.
- Accepting a solution of an equation with ln(ax + b) in it, after combining logarithms, with no check that the argument is positive.
- Using the wrong axes: logging x as well for an exponential law.
- Reporting the vertical intercept as a or k itself.
- Writing a sign-change conclusion with no values of f, or no mention of continuity.
- Rounding too early during iteration and drifting away from the true value.
- Giving 2.54 when asked to justify 3 decimal places, or testing a poorly chosen interval.
- Sketching e^(ax + b) + c with the asymptote at y = 0 rather than y = c.

## Frequently asked questions

**What is the relationship between eˣ and ln x?**
ln x is the inverse function of eˣ, so the graph of y = ln x is the reflection of y = eˣ in the line y = x. If (a, b) is on y = eˣ, then (b, a) is on y = ln x.

**Which graph do you plot for a power law y = axⁿ?**
Plot log y against log x. The gradient of the straight line is n and the vertical intercept is log a.

**Which graph do you plot for an exponential law y = kbˣ?**
Plot log y against x. The gradient is log b and the vertical intercept is log k.

**When can a sign change fail to show a root?**
A discontinuity such as an asymptote of tan x can give a sign change with no root. A repeated root, or two roots in the same interval, can also mean a root exists without any change of sign.

**Which P3 topics do these Edexcel IAL notes cover?**
They cover exponential and logarithmic functions and logarithmic graphs (topics 3.1 to 3.3) and numerical methods for locating roots and iteration (topics 6.1 and 6.2) in Unit P3 of the Edexcel IAL Mathematics specification (YMA01).

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019, Unit P3, sections 3 and 6 (Pearson Education Limited).
