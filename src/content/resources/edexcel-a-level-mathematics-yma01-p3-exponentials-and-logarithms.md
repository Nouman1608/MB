---
title: "Pearson Edexcel International A Level Mathematics (YMA01): Exponentials and logarithms (P3.3)"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit P3: Pure Mathematics 3"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 3.3
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p3-pure-mathematics-3-edexcel-alevel-maths"
    subtopic: "p3-exponentials-and-logarithms-edexcel-alevel-maths"
description: "The graphs of e^x and ln x, solving exponential and log equations, and using log graphs to find a, n, k and b for Edexcel IAL Maths Unit P3, with examples."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 3 of Unit P3 in the Pearson Edexcel International Advanced Level Mathematics specification (YMA01, Issue 3). There are three content statements:

- **3.1** "The function eˣ and its graph", including "the graph of y = e^(ax + b) + c"
- **3.2** "The function ln x and its graph; ln x as the inverse function of eˣ", where "solution of equations of the form e^(ax + b) = p and ln(ax + b) = q is expected"
- **3.3** "Use logarithmic graphs to estimate parameters in relationships of the form y = axⁿ and y = kbˣ"

Unit P3 assumes all of Units P1 and P2, so the laws of logarithms from Unit P2 apply to ln exactly as to any other base. See the [P2 exponentials and logarithms study guide](/resources/edexcel-a-level-mathematics-yma01-p2-exponentials-and-logarithms/) if they are not secure.

The [guide to the exponential and natural logarithm functions](/resources/edexcel-ial-mathematics-the-exponential-and-natural-logarithm-functions/) introduces each statement. This page goes further on sketching transformed exponentials with every feature labelled, equations that need a substitution or the laws first, inverse functions, and reading constants from a straight-line graph. Afterwards, use the [P3 exponentials and logarithms revision notes](/resources/edexcel-a-level-mathematics-yma01-p3-exponentials-and-logarithms-revision-notes/) and the [P3 exponentials and logarithms practice questions](/resources/edexcel-a-level-mathematics-yma01-p3-exponentials-and-logarithms-practice/).

## The graph of y = e^(ax + b) + c

The basic curve y = eˣ passes through (0, 1), is always positive, increases for all x, and has the asymptote y = 0 as x → −∞. Every transformed version has:

- a horizontal asymptote at **y = c**
- a y-intercept found by putting x = 0
- at most one x-intercept, found by putting y = 0 and taking ln
- growth if a > 0 or decay if a < 0, multiplied by any coefficient in front

### Worked example 1: sketch y = 5 − 2e^(x + 1)

- **Asymptote.** As x → −∞, e^(x + 1) → 0, so y → 5. The asymptote is **y = 5**.
- **Shape.** −2e^(x + 1) is negative and becomes more negative as x increases, so the curve falls from just below 5 towards −∞.
- **y-intercept.** x = 0: y = 5 − 2e ≈ **−0.437**.
- **x-intercept.** 0 = 5 − 2e^(x + 1), so e^(x + 1) = 2.5 and x = ln 2.5 − 1 ≈ **−0.0837**.
- **Range.** y < 5.

Exam sketches expect the asymptote drawn and labelled with its equation, and intercepts given exactly (5 − 2e and ln 2.5 − 1), unless decimals are asked for.

## ln x as the inverse of eˣ

ln x means logₑ x. Because ln and e undo each other:

e^(ln x) = x for x > 0, and ln(eˣ) = x for all x.

The graph of y = ln x is the reflection of y = eˣ in the line y = x: it passes through (1, 0), is defined only for x > 0, increases for all x > 0, and has the asymptote **x = 0**. For y = ln(ax + b), the asymptote moves to where ax + b = 0.

**Finding an inverse.** For f(x) = e^(2x) + 1, x ∈ ℝ: write y = e^(2x) + 1, so e^(2x) = y − 1, 2x = ln(y − 1) and x = ½ ln(y − 1). So **f⁻¹(x) = ½ ln(x − 1)**, with domain x > 1, which is the range of f.

## Solving equations

The two basic moves are "take ln of both sides" and "take e of both sides":

- e^(ax + b) = p (p > 0) gives ax + b = ln p
- ln(ax + b) = q gives ax + b = e^q

Exact answers are left in terms of ln or e, such as x = (1 + ln 20)/3.

### Worked example 2: quadratics in eˣ

**(a) Solve e^(2x) − 7eˣ + 12 = 0.**

Let u = eˣ: u² − 7u + 12 = 0, so (u − 3)(u − 4) = 0. eˣ = 3 or eˣ = 4, so **x = ln 3 or x = ln 4**.

**(b) Solve eˣ − 6e^(−x) = 1.**

Multiply through by eˣ (which is never zero): e^(2x) − 6 = eˣ, so u² − u − 6 = 0 and (u − 3)(u + 2) = 0.

eˣ = −2 is impossible, since eˣ > 0, so **x = ln 3** only.

### Worked example 3: laws first

**Solve ln(x + 3) + ln x = ln 10.**

Combine: ln(x(x + 3)) = ln 10, so x² + 3x − 10 = 0 and (x + 5)(x − 2) = 0.

x = −5 makes ln x undefined, so **x = 2**.

## Logarithmic graphs

Both relationships in statement 3.3 become straight lines when logarithms are taken. The skill is knowing which pair of variables to plot and what the gradient and intercept mean.

| Model | Take logs | Plot | Gradient | Intercept |
|---|---|---|---|---|
| y = axⁿ | log y = log a + n log x | log y against log x | n | log a |
| y = kbˣ | log y = log k + x log b | log y against x | log b | log k |

Base 10 (lg) or base e (ln) can be used; the method is identical, but undo the logarithm with the same base.

### Worked example 4: a power law

**Values of x and y are believed to satisfy y = axⁿ. A graph of lg y against lg x is a straight line through (0.2, 1.1) and (1.0, 2.7). Find a and n.**

Gradient = (2.7 − 1.1)/(1.0 − 0.2) = 1.6/0.8 = 2, so **n = 2**.

Intercept: 1.1 = 2(0.2) + lg a, so lg a = 0.7 and **a = 10^0.7 = 5.01** (3 s.f.).

So y ≈ 5.01x².

### Worked example 5: an exponential law

**A quantity y is modelled by y = kbˣ. The graph of ln y against x is a straight line with gradient −0.3 and intercept 2.4 on the vertical axis. Find k and b.**

ln y = ln k + x ln b, so ln b = −0.3 and ln k = 2.4.

**b = e^(−0.3) = 0.741** and **k = e^2.4 = 11.0** (3 s.f.).

A negative gradient means b < 1: the quantity decays.

## Exponential models

Equations of this type often come in context. For example, if the temperature of a drink is T = 20 + 70e^(−0.04t) °C after t minutes, the drink starts at 90 °C (t = 0), tends to 20 °C (the asymptote), and reaches 50 °C when e^(−0.04t) = 30/70, so t = −25 ln(3/7) ≈ 21.2 minutes. Interpreting such models (initial value, long-term value, rate of change) is developed further in the differentiation section of this unit.

## Common mistakes

- **ln(a + b) split as ln a + ln b.** There is no such law.
- **e^(x + 1) treated as eˣ + 1** instead of e × eˣ.
- **Keeping impossible roots** such as eˣ = −2 or ln of a negative number.
- **Mixing bases** on a log graph: an intercept read on an lg graph must be undone with 10, not e.
- **Plotting the wrong variables:** for y = kbˣ the horizontal axis is x, not log x.
- **Missing the asymptote label** on a sketch.
- **Rounding before the end** of a multi-step model question.

## Exam technique

- **"Give your answer in the form ... ln ..."** or **"exact"**: do not use decimals; simplify with the laws, for example ln 4 − ln 2 = ln 2.
- **"Sketch"** an exponential curve: show the shape, the asymptote's equation and the coordinates of intercepts.
- **"Show that ... can be written as a straight line"**: take logs of both sides and compare with Y = mX + c, naming what Y, X, m and c are.
- **"Estimate the values of a and n"**: use two points on the line (or the given gradient and intercept), then undo the logarithm.
- **"Hence"** in a log graph question usually means use the constants just found to predict a value.

## More resources on this topic

- [P3 exponentials and logarithms revision notes](/resources/edexcel-a-level-mathematics-yma01-p3-exponentials-and-logarithms-revision-notes/)
- [P3 exponentials and logarithms practice questions](/resources/edexcel-a-level-mathematics-yma01-p3-exponentials-and-logarithms-practice/)
- [The exponential and natural logarithm functions, log graphs and numerical methods](/resources/edexcel-ial-mathematics-the-exponential-and-natural-logarithm-functions/)
- [P2 exponentials and logarithms study guide](/resources/edexcel-a-level-mathematics-yma01-p2-exponentials-and-logarithms/)
- [Differentiation of exponential, logarithmic and trigonometric functions](/resources/edexcel-ial-mathematics-differentiation-of-exponential-logarithmic-and/)
