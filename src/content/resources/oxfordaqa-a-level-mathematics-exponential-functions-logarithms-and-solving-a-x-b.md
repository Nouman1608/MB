---
title: "OxfordAQA International AS and A-level Mathematics: Exponentials, logarithms and solving a^x = b (9660)"
seoTitle: "OxfordAQA Maths 9660 Exponentials and Logs Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Exponential functions, logarithms and solving a^x = b"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 182
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-psm1-pp1-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "pp1-exponential-and-logarithms-oxfordaqa-alevel-maths"
description: "Study guide to the graph of y = a^x, the laws of logarithms and solving a^x = b, with worked examples, for OxfordAQA International AS and A-level Maths."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide follows the *OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2*, section PP1.3 (Exponential and logarithms). The specification places this content in International AS, Unit PSM1 (3.2, PP1), and it applies to International AS exams from May/June 2018 and International A-level exams from May/June 2019.

Use it with the [revision notes](/resources/oxfordaqa-a-level-mathematics-exponential-functions-logarithms-and-solving-a-x-b-revision-notes/) and the [practice questions](/resources/oxfordaqa-a-level-mathematics-exponential-functions-logarithms-and-solving-a-x-b-practice/). The course page is [OxfordAQA A-level Mathematics](/boards/oxfordaqa/a-level/mathematics/), and the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/) lets you tick off each outcome. If you are not sure where to start, take a [free 10-minute diagnostic](/diagnostics/) first.

## What PP1.3 asks you to do

| Specification item | What you must be able to do |
|---|---|
| y = a^x and its graph | Sketch the graph for a > 1 and 0 < a < 1, using the laws of indices where they help |
| Logarithms and the laws of logarithms | Use logₐx + logₐy = logₐ(xy), logₐx − logₐy = logₐ(x/y) and k logₐx = logₐ(x^k) |
| Equivalence of y = a^x and x = logₐy | Move between index form and logarithm form |
| Solving a^x = b | Solve equations such as 3^(2x) = 2, including by using the logarithm function on your calculator |

## 1. The graph of y = a^x

<figure class="learning-diagram" style="margin:1.5rem 0;"><a href="/public/images/learning/mathematics/math-sub-403-exponential-graphs.svg" aria-label="Open full-size diagram: math-sub-403-exponential-graphs"><img src="/public/images/learning/mathematics/math-sub-403-exponential-graphs.svg" width="1528" height="940" alt="Both curves pass (0,1) and approach y = 0 without touching it a > 1: increasing curve; 0 < a < 1: decreasing curve; 4ˣ: (−1,¼), (0,1), (1,4); (¼)ˣ = 4⁻ˣ: reflection in y-axis" loading="lazy" decoding="async" style="display:block;width:100%;height:auto;" /></a><figcaption>Compare increasing and decreasing exponentials — Marlbridge Mathematics</figcaption></figure>

Take a > 0 and a ≠ 1. The graph of y = a^x always has these features.

- The point (0, 1) is always on the curve, since a⁰ = 1.
- It lies above the x-axis for every x, because a^x is never zero or negative.
- The x-axis is an asymptote: the curve gets closer to y = 0 but never reaches it.
- If a > 1 the curve rises, and it rises faster as x increases. If 0 < a < 1 it falls.

Here are values for y = 4^x and y = (1/4)^x.

| x | −2 | −1 | 0 | 1 | 2 |
|---|---|---|---|---|---|
| 4^x | 1/16 | 1/4 | 1 | 4 | 16 |
| (1/4)^x | 16 | 4 | 1 | 1/4 | 1/16 |

The second row is the first row reversed. That is because (1/4)^x = 4^(−x), so the graph of y = (1/4)^x is the reflection of y = 4^x in the y-axis.

Sketch description for y = 4^x: start just above the negative x-axis on the left, cross the y-axis at (0, 1), then climb steeply, passing (1, 4) and (2, 16). Label the intercept (0, 1) and say "asymptote y = 0".

### Laws of indices you will use

<figure class="learning-diagram" style="margin:1.5rem 0;"><a href="/public/images/learning/mathematics/math-sub-403-index-laws-exponential-equations.svg" aria-label="Open full-size diagram: math-sub-403-index-laws-exponential-equations"><img src="/public/images/learning/mathematics/math-sub-403-index-laws-exponential-equations.svg" width="1528" height="940" alt="Rewrite both sides as powers of a common base before equating exponents 125^(x+1) = 25^(2x−1); 5^(3x+3) = 5^(4x−2); 3x + 3 = 4x − 2; x = 5" loading="lazy" decoding="async" style="display:block;width:100%;height:auto;" /></a><figcaption>Use index laws to match bases — Marlbridge Mathematics</figcaption></figure>

```
a^m × a^n = a^(m+n)        a^m ÷ a^n = a^(m−n)
(a^m)^n = a^(mn)           a^(−n) = 1/a^n
a^0 = 1                    a^(1/n) is the n-th root of a
```

**Example 1.** Solve 125^(x+1) = 25^(2x−1).

Write both sides as powers of 5.

```
125 = 5³ and 25 = 5²
5^(3(x+1)) = 5^(2(2x−1))
3(x+1) = 2(2x−1)
3x + 3 = 4x − 2
x = 5
```

Check: 125⁶ = 5¹⁸ and 25⁹ = 5¹⁸. This only works when both sides can be written with the same base. When they cannot, you need logarithms (section 4).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--01-inverse-graphs.webp" width="900" height="900" alt="The orange curve y = e^x passes through (0, 1) and (1, e) and approaches the x-axis. The blue curve y = ln x passes through (1, 0) and (e, 1) and approaches the y-axis. They are mirror images in the dashed line y = x, so the functions are inverses." loading="lazy">
  <figcaption>The graph of ln x is the reflection of eˣ in y = x.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--02-base-family.webp" width="900" height="1000" alt="Curves 2^x, e^x, 3^x and (1/2)^x all pass through (0, 1), lie above the x-axis and have it as an asymptote. Bases above 1 give growth, with e^x between 2^x and 3^x; (1/2)^x decays and mirrors 2^x in the y-axis." loading="lazy">
  <figcaption>Every aˣ passes through (0, 1); a &gt; 1 grows and a &lt; 1 decays.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--05-solve-index.webp" width="900" height="1160" alt="The graph of 5^x meets y = 40 at x = 2.29 (ln 40 divided by ln 5). Below, points 0.8^n fall; n = 13 gives 0.0550 and n = 14 gives 0.0440, the first below 0.05. Dividing by the negative ln 0.8 reverses the inequality, so n &gt; 13.4." loading="lazy">
  <figcaption>Taking logs solves aˣ = b, and a negative log reverses an inequality.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--06-hidden-quadratic.webp" width="900" height="1080" alt="The parabola u^2 - 5u + 6 crosses the u-axis at 2 and 3; u &lt; 0 is shaded as impossible since e^x &gt; 0. The curve y = e^(2x) - 5e^x + 6 crosses the x-axis at x = ln 2 and ln 3." loading="lazy">
  <figcaption>Substituting u = eˣ turns e²ˣ − 5eˣ + 6 = 0 into a quadratic with roots ln 2 and ln 3.</figcaption>
</figure>


## 2. Logarithms and the equivalence with indices

<figure class="learning-diagram" style="margin:1.5rem 0;"><a href="/public/images/learning/mathematics/math-sub-403-logarithm-inverse.svg" aria-label="Open full-size diagram: math-sub-403-logarithm-inverse"><img src="/public/images/learning/mathematics/math-sub-403-logarithm-inverse.svg" width="1528" height="940" alt="A logarithm asks which exponent produces the stated value 2⁵ = 32; ⇕ equivalent statements; log₂ 32 = 5; logₐ y = x ⇔ aˣ = y" loading="lazy" decoding="async" style="display:block;width:100%;height:auto;" /></a><figcaption>Read logarithms as inverse powers — Marlbridge Mathematics</figcaption></figure>

The logarithm answers the question "what power?". The two statements below say the same thing.

```
y = a^x   ⇔   x = logₐ y        (a > 0, a ≠ 1, y > 0)
```

So log₂32 = 5 because 2⁵ = 32. The logarithm is the inverse of the exponential, so the graph of y = logₐx is the graph of y = a^x reflected in the line y = x. You can only take the logarithm of a positive number.

Two results follow straight from a¹ = a and a⁰ = 1:

```
logₐ a = 1        logₐ 1 = 0
```

**Example 2.** Evaluate (a) log₅(1/25), (b) log₉27, (c) log₈4.

(a) Let log₅(1/25) = k. Then 5^k = 1/25 = 5⁻², so **k = −2**.

(b) Let log₉27 = k. Then 9^k = 27, so 3^(2k) = 3³. Hence 2k = 3 and **k = 3/2**.

(c) Let log₈4 = k. Then 8^k = 4, so 2^(3k) = 2². Hence 3k = 2 and **k = 2/3**.

The method is always the same: write the logarithm equal to k, convert to index form, then match powers of a common base.

**Example 3.** Find x when (a) log_x 81 = 4, (b) log₂x = −3.

(a) x⁴ = 81, so x = 3 (a base must be positive).

(b) x = 2⁻³ = **1/8**.

## 3. The laws of logarithms

<figure class="learning-diagram" style="margin:1.5rem 0;"><a href="/public/images/learning/mathematics/math-sub-403-log-laws.svg" aria-label="Open full-size diagram: math-sub-403-log-laws"><img src="/public/images/learning/mathematics/math-sub-403-log-laws.svg" width="1528" height="940" alt="All terms must share the same base logₐx + logₐy = logₐ(xy); logₐx − logₐy = logₐ(x/y); k logₐx = logₐ(xᵏ); 2 log₅10 − log₅4 = log₅25 = 2" loading="lazy" decoding="async" style="display:block;width:100%;height:auto;" /></a><figcaption>Combine logarithms using product, quotient and power laws — Marlbridge Mathematics</figcaption></figure>

All three laws need the same base on every term.

```
logₐ x + logₐ y = logₐ(xy)
logₐ x − logₐ y = logₐ(x/y)
k logₐ x = logₐ(x^k)
```

Why they hold: if x = a^p and y = a^q, then xy = a^(p+q), so logₐ(xy) = p + q = logₐx + logₐy. The other laws come from the same idea with a^p ÷ a^q and (a^p)^k.

**Example 4.** Evaluate without a calculator.

(a) log₆4 + log₆9 = log₆36 = **2**

(b) log₃54 − log₃2 = log₃27 = **3**

(c) 2log₅10 − log₅4 = log₅100 − log₅4 = log₅25 = **2**

**Example 5.** Suppose logₐ2 = p and logₐ3 = q. Write logₐ12 and logₐ(9/8) in terms of p and q.

```
logₐ12 = logₐ(4 × 3) = 2logₐ2 + logₐ3 = 2p + q
logₐ(9/8) = 2logₐ3 − 3logₐ2 = 2q − 3p
```

Split the number into factors that are powers of 2 and 3 first, then apply the laws.

**Example 6.** Solve log₂x + log₂(x − 2) = 3.

```
log₂[x(x − 2)] = 3
x(x − 2) = 2³ = 8
x² − 2x − 8 = 0
(x − 4)(x + 2) = 0
```

The roots are x = 4 and x = −2. Because log₂x needs x > 0, discard x = −2. The solution is **x = 4**. Check: log₂4 + log₂2 = 2 + 1 = 3.

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


## 4. Solving a^x = b

<!-- marlbridge-diagram:math-final-403-logarithmic-equation-solve -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/mathematics/math-final-403-logarithmic-equation-solve.svg" aria-label="Open full-size diagram: math-final-403-logarithmic-equation-solve"><img src="/images/learning/mathematics/math-final-403-logarithmic-equation-solve.svg" width="1528" height="940" alt="Equation flow takes logarithms, brings down the exponent and solves to x about 0.315." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>Equation flow takes logarithms, brings down the exponent and solves to x about 0.315.</figcaption>
</figure>
<!-- /marlbridge-diagram:math-final-403-logarithmic-equation-solve -->


When the bases will not match, take logarithms of both sides. You may choose any base for the logarithms provided both sides use the same one; the calculator's logarithm function then gives numerical values. The key step is the third law: it brings the unknown power down in front.

```
a^x = b
x log a = log b
x = log b / log a
```

**Example 7 (the specification's own type).** Solve 3^(2x) = 2.

```
2x log 3 = log 2
x = log 2 / (2 log 3) = 0.6931 / 2.1972
x = 0.315   (3 s.f.)
```

Check: 3^(0.6309) = 2.

**Example 8.** Solve 7^(2x−1) = 30.

```
(2x − 1) log 7 = log 30
2x − 1 = log 30 / log 7 = 1.7479
2x = 2.7479
x = 1.37   (3 s.f.)
```

Divide first, then rearrange. Avoid rounding 1.7479 early; carry the unrounded calculator value to the final line.

**Example 9.** Solve 2^(x+1) = 3^x.

```
(x + 1) log 2 = x log 3
x log 2 + log 2 = x log 3
log 2 = x (log 3 − log 2)
x = log 2 / (log 3 − log 2) = 1.71   (3 s.f.)
```

When the unknown is on both sides, collect the x terms on one side and factor.

**Example 10.** Solve 0.8^x = 0.3.

```
x log 0.8 = log 0.3
x = log 0.3 / log 0.8 = 5.40   (3 s.f.)
```

Both logarithms are negative, so the quotient is positive. That agrees with the graph: 0.8^x falls, and it equals 0.3 at a positive x.

### Using this in context

<figure class="learning-diagram" style="margin:1.5rem 0;"><a href="/public/images/learning/mathematics/math-sub-403-growth-context.svg" aria-label="Open full-size diagram: math-sub-403-growth-context"><img src="/public/images/learning/mathematics/math-sub-403-growth-context.svg" width="1528" height="940" alt="A colony grows from 800 cells by 15% each hour. Find when it reaches 5000. Model: 800 × 1.15ᵗ = 5000; Divide by 800: 1.15ᵗ = 6.25; Take logs: t log(1.15) = log(6.25); t = log(6.25) / log(1.15) ≈ 13.1 hours" loading="lazy" decoding="async" style="display:block;width:100%;height:auto;" /></a><figcaption>Solve an exponential growth model with logarithms — Marlbridge Mathematics</figcaption></figure>

**Example 11.** A colony starts at 800 cells and grows by 15% each hour, so after t hours it has 800 × 1.15^t cells. When does it reach 5000?

```
800 × 1.15^t = 5000
1.15^t = 6.25
t = log 6.25 / log 1.15 = 13.1 hours
```

**Example 12.** A value falls by 10% each year from a start of 1. Find the first whole number of years n for which 0.9^n < 0.2.

```
n log 0.9 < log 0.2
```

Now divide by log 0.9. It is negative, so the inequality reverses.

```
n > log 0.2 / log 0.9 = 15.28
```

The smallest whole number is **n = 16**. Check: 0.9¹⁵ = 0.206 (not below 0.2) and 0.9¹⁶ = 0.185 (below 0.2).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--09-decay-half-life.webp" width="900" height="1020" alt="C = 15e^(-0.2t) falls from 15 mg/L. It halves to 7.5 after 3.47 hours and to 3.75 after another 3.47 hours, so the half-life is constant (ln 2 divided by k). It reaches 2 mg/L at t = 10.1 hours." loading="lazy">
  <figcaption>Exponential decay has a constant half-life of ln 2 ÷ k.</figcaption>
</figure>


## Common errors

- Splitting log(x + y) into log x + log y. Only a product inside the bracket splits, as in logₐ(xy).
- Writing log 6 − log 2 = log 4. Subtraction of logarithms gives log(6/2) = log 3.
- Writing (log x)² = 2 log x. The third law applies to log(x²), not to (log x)².
- Combining logarithms with different bases without changing them first.
- Forgetting to check log equations. A root that makes an argument zero or negative must be rejected.
- Rounding part-way through a^x = b, which can change the third significant figure.
- Dividing an inequality by a negative logarithm and keeping the sign. If the base is between 0 and 1, the logarithm is negative and the sign reverses.
- Saying a^x can be negative or zero. It cannot, so an equation such as 3^x = −2 has no solution.

## Where to go next

Try the [practice questions](/resources/oxfordaqa-a-level-mathematics-exponential-functions-logarithms-and-solving-a-x-b-practice/) and then recheck with the [revision notes](/resources/oxfordaqa-a-level-mathematics-exponential-functions-logarithms-and-solving-a-x-b-revision-notes/). For the pure maths in the neighbouring Unit P1, see the [Unit P1 study guide](/resources/a-level-oxfordaqa-mathematics-unit-p1/).

## Frequently asked questions

**What is a logarithm?**
A logarithm answers the question "what power?". The statement y = a^x means the same as x = logₐy, so log₂32 = 5 because 2⁵ = 32.

**When do you need logarithms to solve an exponential equation?**
If both sides can be written as powers of the same base, you can simply equate the indices. When they cannot, as in 3^(2x) = 2, take logarithms of both sides and bring the index down.

**Can 3^x ever equal a negative number?**
No. a^x is always positive for a > 0, so an equation such as 3^x = −2 has no solution.

**Is solving a^x = b with a calculator in the OxfordAQA 9660 syllabus?**
Yes. Section PP1.3 of the OxfordAQA 9660 specification includes solving equations such as 3^(2x) = 2, including by using the logarithm function on a calculator.

**How is the graph of y = (1/4)^x related to y = 4^x?**
Because (1/4)^x = 4^(−x), the graph of y = (1/4)^x is the reflection of y = 4^x in the y-axis.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2: section PP1.3, Exponential and logarithms. Published by OxfordAQA for International AS exams from May/June 2018 and International A-level exams from May/June 2019.
