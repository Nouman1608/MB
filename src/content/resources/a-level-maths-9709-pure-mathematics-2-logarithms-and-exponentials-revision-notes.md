---
title: "Cambridge International AS & A Level Mathematics 9709: Pure Mathematics 2 Logarithms and Exponentials -- Revision Notes"
seoTitle: "9709 P2 Logarithms and Exponentials Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Pure Mathematics 2: Logarithmic and exponential functions"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 38
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-2-cambridge-alevel"
  - qualification: "a-level"
    topic: "pure-mathematics-2-cambridge-alevel"
    subtopic: "logarithmic-and-exponential-functions-cambridge-2"
description: "Condensed revision notes for Cambridge 9709 Paper 2 logs and exponentials: laws, graphs, index equations, linear form and a 12-question self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review."
reviewedDate: 2026-09-29
publishedDate: 2026-09-28
featured: false
---

For full explanations and longer worked examples, use the [study guide](/resources/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials/).

These notes cover section 2.2, Logarithmic and exponential functions, of the Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027 (Version 4). Section 2.2 is part of Pure Mathematics 2 and is examined on Paper 2 (1 hour 15 minutes, 50 marks), the AS Level Pure Mathematics route. The same outcomes are section 3.2 of Pure Mathematics 3. A scientific calculator is allowed, but unsupported calculator answers earn no marks, so show each log step.

Course links: [A Level Mathematics hub](/boards/cambridge/a-level/mathematics/), [printable 9709 checklist](/checklists/cambridge/a-level/mathematics/), [practice questions for this unit](/resources/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials-practice/), and the whole-paper [Pure Mathematics 2 revision notes](/resources/a-level-mathematics-pure-mathematics-2-revision-notes/).

## 2.2 at a glance

| Outcome | You must be able to |
|---|---|
| Logs and indices | Switch between logₐ b = x and aˣ = b; use the three laws (no change of base) |
| eˣ and ln x | Use e^(ln x) = x and ln(eˣ) = x; sketch y = eˣ, y = ln x and y = e^(kx) for k > 0 and k < 0 |
| Unknown in an index | Take logs to solve equations and inequalities |
| Linear form | Change y = kxⁿ or y = k(aˣ) to a straight line; find constants from gradient and intercept |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--05-solve-index.webp" width="900" height="1160" alt="The graph of 5^x meets y = 40 at x = 2.29 (ln 40 divided by ln 5). Below, points 0.8^n fall; n = 13 gives 0.0550 and n = 14 gives 0.0440, the first below 0.05. Dividing by the negative ln 0.8 reverses the inequality, so n &gt; 13.4." loading="lazy">
  <figcaption>Taking logs solves aˣ = b, and a negative log reverses an inequality.</figcaption>
</figure>


## Definitions

- **Logarithm:** logₐ b = x ⇔ aˣ = b, with a > 0, a ≠ 1, b > 0.
- **lg x** = log₁₀ x. **ln x** = logₑ x, the natural logarithm. e ≈ 2.718.
- **Inverse pair:** e^(ln x) = x for x > 0, and ln(eˣ) = x for all x.
- **Special values:** logₐ 1 = 0, logₐ a = 1, ln 1 = 0, ln e = 1, e⁰ = 1.
- The log of zero or a negative number is **undefined**.

## Formulas

| Result | Form |
|---|---|
| Product law | log(xy) = log x + log y |
| Quotient law | log(x/y) = log x − log y |
| Power law | log(xⁿ) = n log x |
| Reciprocal (from the laws) | log(1/x) = −log x |
| Power model | y = kxⁿ ⇒ ln y = ln k + n ln x |
| Exponential model | y = k(aˣ) ⇒ ln y = ln k + x ln a |

Change of base is **not** in the 9709 syllabus. To find a value such as log₉ 27, write both numbers as powers of 3: 9ˣ = 27 ⇒ 3^(2x) = 3³ ⇒ x = 3/2.

## Graphs

| | y = eˣ | y = ln x | y = e^(kx), k < 0 |
|---|---|---|---|
| Passes through | (0, 1) | (1, 0) | (0, 1) |
| Asymptote | y = 0 | x = 0 | y = 0 |
| Domain | all x | x > 0 | all x |
| Range | y > 0 | all y | y > 0 |
| Direction | increasing | increasing | decreasing |

y = eˣ and y = ln x are reflections of each other in y = x. For y = e^(kx), k > 0 gives growth (steeper as k increases) and k < 0 gives decay towards the x-axis.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--01-inverse-graphs.webp" width="900" height="900" alt="The orange curve y = e^x passes through (0, 1) and (1, e) and approaches the x-axis. The blue curve y = ln x passes through (1, 0) and (e, 1) and approaches the y-axis. They are mirror images in the dashed line y = x, so the functions are inverses." loading="lazy">
  <figcaption>The graph of ln x is the reflection of eˣ in y = x.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--02-base-family.webp" width="900" height="1000" alt="Curves 2^x, e^x, 3^x and (1/2)^x all pass through (0, 1), lie above the x-axis and have it as an asymptote. Bases above 1 give growth, with e^x between 2^x and 3^x; (1/2)^x decays and mirrors 2^x in the y-axis." loading="lazy">
  <figcaption>Every aˣ passes through (0, 1); a &gt; 1 grows and a &lt; 1 decays.</figcaption>
</figure>


## Method in steps

**A. Log equation (logs on one or both sides)**

```
1. Use the power law first: 2 log x -> log(x^2)
2. Combine into one log on each side (product/quotient laws)
3. Remove logs:  log_a P = log_a Q  ->  P = Q
                 log_a P = c        ->  P = a^c
4. Solve (often a quadratic)
5. Reject any root that makes an original log argument <= 0
```

**B. Unknown in an index, different bases**

```
1. Take ln (or lg) of both sides
2. Bring the index down with the power law
3. Expand brackets, collect x terms on one side
4. Factorise out x and divide
5. Give an exact form if asked, then 3 s.f.
```

**C. Hidden quadratic**

```
1. Spot e^(2x) = (e^x)^2, or 9^x = (3^x)^2, or 3^(x+1) = 3 * 3^x
2. Let u = e^x (or 3^x) and solve the quadratic in u
3. Reject u <= 0, since e^x > 0 and a^x > 0
4. Take logs to find x
```

**D. Inequality**

```
1. Take logs of both sides
2. If you divide by ln of a number between 0 and 1, reverse the sign
3. For "smallest integer", round up the boundary; check both sides of it
```

**E. Finding constants from a straight-line graph**

```
1. Pick the model from the axes: ln y v ln x -> y = kx^n ;  ln y v x -> y = k(a^x)
2. Gradient from two points on the line
3. Substitute one point to get the intercept c
4. k = e^c ;  n = gradient  or  a = e^(gradient)
   (with lg:  k = 10^c,  a = 10^gradient)
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--06-hidden-quadratic.webp" width="900" height="1080" alt="The parabola u^2 - 5u + 6 crosses the u-axis at 2 and 3; u &lt; 0 is shaded as impossible since e^x &gt; 0. The curve y = e^(2x) - 5e^x + 6 crosses the x-axis at x = ln 2 and ln 3." loading="lazy">
  <figcaption>Substituting u = eˣ turns e²ˣ − 5eˣ + 6 = 0 into a quadratic with roots ln 2 and ln 3.</figcaption>
</figure>


## Small worked reminders

- 3 ln 2 + ln 5 − ln 4 = ln 8 + ln 5 − ln 4 = ln(8 × 5/4) = ln 10.
- e^(3 ln 2) = e^(ln 8) = 8.
- log₂(x + 1) = 4 ⇒ x + 1 = 2⁴ ⇒ x = 15.
- 6ˣ = 11 ⇒ x ln 6 = ln 11 ⇒ x = ln 11/ln 6 = 1.34 (3 s.f.).
- ln y against x has gradient 0.2 and intercept 1.5 ⇒ a = e^0.2 = 1.22, k = e^1.5 = 4.48 (3 s.f.).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--03-gradient-ekx.webp" width="900" height="1040" alt="On y = e^(2x), the tangent at (0, 1) has gradient 2 and at x = 0.6 (height 3.32) has gradient 6.64, shown by a triangle with run 0.4 and rise 2.66. Each gradient is 2 times the height, so dy/dx = ky." loading="lazy">
  <figcaption>The gradient of e^kx is k times its height, so growth is proportional to size.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--04-log-ruler-laws.webp" width="900" height="940" alt="A log ruler marks 1 to 10 at their base-10 logs. Bars of length lg 2 and lg 3 end at 6, so lg 2 + lg 3 = lg 6. A bar lg 8 minus lg 2 has length lg 4. Two bars of lg 3 end at 9, so 2 lg 3 = lg 9." loading="lazy">
  <figcaption>Logarithms turn products into sums: lengths on a log ruler add.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--07-linear-form.webp" width="900" height="1110" alt="ln y against ln x is a straight line for y = ax^n: through (0.5, 1.85) and (2.5, 4.85), gradient n = 1.5 and intercept ln a = 1.10. lg y against x is a straight line for y = kb^x with intercept lg k = 0.70 and gradient lg b = 0.14." loading="lazy">
  <figcaption>A straight line on log axes gives gradient and intercept for power and exponential laws.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--08-ln-calculus.webp" width="900" height="1050" alt="The tangent to y = ln x at x = 2 has gradient one half, equal to 1/x. Below, the area under y = 1/x from 1 to e is shaded and equals 1, because the integral is ln x and ln e minus ln 1 is 1." loading="lazy">
  <figcaption>ln x differentiates to 1/x and the area under 1/x from 1 to e is 1.</figcaption>
</figure>


## Must-know distinctions

- **ln 5 − ln 3 vs (ln 5)/(ln 3):** the first equals ln(5/3) = 0.511; the second is 1.46. They are not the same.
- **log(x + y) vs log x + log y:** only the second has a law; log(x + y) cannot be split.
- **(ln x)² vs ln(x²):** ln(x²) = 2 ln x, but (ln x)² is ln x times itself.
- **y = kxⁿ vs y = k(aˣ):** in the first the unknown power n is fixed and x is the base; in the second x is the index. They need different graphs.
- **Intercept vs constant:** the intercept on the ln y axis is ln k, so k = e^(intercept).
- **Exact vs 3 s.f.:** "exact" means leave ln 3, e², 2/(e − 1) in the answer; otherwise give 3 s.f.
- **y = e^(kx), k > 0 vs k < 0:** both pass through (0, 1); only the sign of k decides growth or decay.

## Quick self-test

1. Find the exact value of log₄ 8.
2. Write 3 ln 2 + ln 7 − ln 14 as a single logarithm.
3. Solve e^(3x) = 20, giving x to 3 s.f.
4. Solve ln(2x − 1) = 3, giving x to 3 s.f.
5. Solve 2^(x + 3) = 7ˣ, giving x to 3 s.f.
6. Solve the inequality 0.6ˣ < 0.01.
7. Solve eˣ − 12e^(−x) = 1, giving an exact answer.
8. State the y-intercept and the asymptote of y = e^(−2x), and say whether it is increasing or decreasing.
9. y = kxⁿ. The graph of ln y against ln x has gradient 2.5 and intercept −0.7. Find k and n.
10. y = k(aˣ). The graph of ln y against x has gradient −0.3 and intercept 2. Find a and k.
11. Solve log₆ x + log₆(x + 5) = 2.
12. Simplify e^(2 ln 3).

### Answers

1. 4ˣ = 8 ⇒ 2^(2x) = 2³ ⇒ **3/2**.
2. ln(8 × 7/14) = **ln 4**.
3. 3x = ln 20 ⇒ x = (ln 20)/3 = **0.999**.
4. 2x − 1 = e³ ⇒ x = (e³ + 1)/2 = **10.5**.
5. (x + 3) ln 2 = x ln 7 ⇒ x(ln 7 − ln 2) = 3 ln 2 ⇒ x = 3 ln 2/ln 3.5 = **1.66**.
6. x ln 0.6 < ln 0.01; ln 0.6 < 0 so the sign reverses: x > ln 0.01/ln 0.6, **x > 9.02**.
7. Multiply by eˣ: e^(2x) − eˣ − 12 = 0 ⇒ (eˣ − 4)(eˣ + 3) = 0. eˣ = −3 is impossible, so **x = ln 4**.
8. **(0, 1)**, asymptote **y = 0**, **decreasing** (k = −2 < 0).
9. **n = 2.5**, ln k = −0.7 ⇒ **k = 0.497**.
10. ln a = −0.3 ⇒ **a = 0.741**; ln k = 2 ⇒ **k = 7.39**.
11. x(x + 5) = 6² ⇒ x² + 5x − 36 = 0 ⇒ (x + 9)(x − 4) = 0. x = −9 makes log₆ x undefined, so **x = 4**.
12. e^(ln 9) = **9**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--09-decay-half-life.webp" width="900" height="1020" alt="C = 15e^(-0.2t) falls from 15 mg/L. It halves to 7.5 after 3.47 hours and to 3.75 after another 3.47 hours, so the half-life is constant (ln 2 divided by k). It reaches 2 mg/L at t = 10.1 hours." loading="lazy">
  <figcaption>Exponential decay has a constant half-life of ln 2 ÷ k.</figcaption>
</figure>


## Where marks are usually lost

- Removing logs term by term: ln(x + 4) − ln x = 2 does **not** give x + 4 − x = 2.
- Combining before using the power law, so 2 ln x − ln 3 becomes ln(2x/3) instead of ln(x²/3).
- Not reversing the inequality after dividing by ln 0.6, ln 0.85 or any other negative log.
- Keeping a root such as eˣ = −3 or x = −9 that makes the original expression undefined, or rejecting a root without giving the reason.
- Giving k as the intercept of the ln y graph rather than e^(intercept).
- Using a rounded gradient (0.4 instead of 0.405) and losing the accuracy mark on a = e^(gradient).
- Writing a decimal when the question says "exact", or leaving ln 45/ln(25/3) unevaluated when it asks for 3 s.f.
- Sketches of y = e^(kx) that cross the x-axis, miss the label (0, 1) or show the wrong direction for the sign of k.
- A bare calculator answer to "solve 5^(2x − 1) = 3^(x + 2)" with no log line: the method mark is lost and the answer is then unsupported.

## Frequently asked questions

**What are the three laws of logarithms?**
log(xy) = log x + log y, log(x/y) = log x − log y, and log(xⁿ) = n log x. There is no law for log(x + y).

**Is change of base in the Cambridge 9709 syllabus?**
No. To find a value such as log₉ 27, write both numbers as powers of the same base: 9ˣ = 27 gives 3^(2x) = 3³, so x = 3/2.

**What are the key features of the graphs of y = eˣ and y = ln x?**
y = eˣ passes through (0, 1) with asymptote y = 0, and y = ln x passes through (1, 0) with asymptote x = 0. They are reflections of each other in the line y = x.

**What is the difference between ln 5 − ln 3 and (ln 5)/(ln 3)?**
ln 5 − ln 3 = ln(5/3), about 0.511, while (ln 5)/(ln 3) is about 1.46. They are not the same.

**Which straight-line graph do you use for y = k(aˣ)?**
Plot ln y against x: ln y = ln k + x ln a, so the gradient is ln a and the intercept is ln k.

## Next steps

Try the [practice questions](/resources/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials-practice/), then check your AS readiness with the free [AS diagnostic](/practice/9709/diagnostic/as/) or the [9709 self-check bank](/practice/9709/). For the rest of Paper 2, see the [Pure Mathematics 2 guide](/resources/a-level-mathematics-pure-mathematics-2/). A Level candidates meet this content again in the [Pure Mathematics 3 revision notes](/resources/a-level-maths-9709-pure-mathematics-3-revision-notes/).

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus, for exams in 2026 and 2027 (Version 4), Cambridge University Press & Assessment. Topic 2, Pure Mathematics 2 (for Paper 2): section 2.2 Logarithmic and exponential functions.
