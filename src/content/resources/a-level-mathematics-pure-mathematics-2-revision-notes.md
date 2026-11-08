---
title: "A Level Mathematics: Pure Mathematics 2 — Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Pure Mathematics 2"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 3
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-2-cambridge-alevel"
description: "Cambridge 9709 Pure Mathematics 2 revision notes: modulus, factor and remainder theorems, logs, sec, cosec and cot, calculus combinations and numerical methods."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by sajawal-zahid on 2026-09-29."
publishedDate: 2026-09-05
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Pure Mathematics 2 study guide](/resources/a-level-mathematics-pure-mathematics-2/).

## 2.1 Algebra — modulus first, then fluency with division

**The modulus function |x|** gives the non-negative value of x,
so |x| = x for x ≥ 0 and |x| = -x for x < 0. The graph of
y = |ax + b| is a "V": the part of the line y = ax + b that lies below
the x-axis is reflected in the x-axis, with the vertex at x = -b/a.
Solve equations and inequalities involving a modulus by considering
both the positive and negative case, or by squaring both sides, using
|a| = |b| ⇔ a² = b². For inequalities use
|x − a| < b ⇔ a − b < x < a + b. For example, |3x − 2| = |2x + 7|
gives 3x − 2 = 2x + 7 or 3x − 2 = −(2x + 7), so x = 9 or x = −1.
(Graphs of y = |f(x)| and y = f(|x|) for non-linear f are not
required.)

**Polynomial division, the factor theorem and the remainder theorem
must also be automatic.** Divide a polynomial of degree up to 4 by a
linear or quadratic polynomial, identifying the quotient and the
remainder. The remainder when f(x) is divided by (ax + b) is f(−b/a),
and (ax + b) is a factor exactly when f(−b/a) = 0. Use these to find
factors and remainders, solve polynomial equations and find unknown
coefficients.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-edexcel-mathematics-pure-mathematics-1--03-quotient-stationary.webp" width="900" height="1060" alt="Two aligned graphs. Top: y = ln x divided by x, which crosses the axis at x = 1, rises to a maximum at (e, 1 over e), about (2.72, 0.37), then falls slowly. Bottom: its gradient dy by dx = (1 minus ln x) over x squared, which is positive before x = e, zero at x = e and negative after. The quotient rule gives (x times 1 over x minus ln x times 1) over x squared." loading="lazy">
  <figcaption>The quotient rule gives dy/dx = (1 − ln x)/x², which is zero at the maximum x = e.</figcaption>
</figure>


## 2.2 Logarithms and exponentials — practise as a pair

Convert confidently between **index form** and **logarithmic form** —
exam questions frequently mix both representations in a **single**
problem rather than testing either alone.

| Form | Example |
|---|---|
| Index | aˣ = b |
| Logarithmic | logₐ b = x |

## 2.3 Trigonometry — the extra three functions

The **secant, cosecant and cotangent** functions are the least
familiar part of this topic moving on from Pure Mathematics 1.
Deliberately practise identities involving **all six** trig
functions, not just sin/cos/tan — this closes the most common gap
early.

## 2.4–2.5 Differentiation and integration — the combination trap

These are the **most heavily tested in combination**: expect
differentiating a product/quotient involving an exponential **and** a
trig function in the same expression, or integrating a function that
first needs simplifying via a log law.

**Habit**: check whether an expression can be simplified
algebraically **before** attempting to differentiate or integrate it
directly — saves time, avoids errors.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-edexcel-mathematics-pure-mathematics-1--02-one-cubic-toolkit.webp" width="900" height="940" alt="Graph of the cubic f(x) = x cubed minus 3x squared minus x plus 3, which factorises as (x + 1)(x minus 1)(x minus 3). The roots at x = minus 1, 1 and 3 come from the factor theorem. Turning points, ringed, are where f dash is zero, at x = 1 minus or plus 2 over root 3, about minus 0.15 and 2.15. The region between x = minus 1 and 1 lies above the axis and has integral +4. The region between 1 and 3 lies below the axis and has integral minus 4. The integral from minus 1 to 3 is zero, but the total area is 8, because areas below the axis count as positive." loading="lazy">
  <figcaption>One cubic shows roots, turning points and signed versus total area.</figcaption>
</figure>


## 2.6 Numerical solution of equations — approximating, not solving

Conceptually different from the rest of the topic. A **sign change**
across an interval shows a root **lies within it** — not what the
root's value is.

```
Iteration formula: x_(n+1) = g(x_n)
```

**Carry more decimal places than the final answer needs** through
each step until the last stated iteration — under-carrying decimals
is a frequent source of lost marks.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-edexcel-mathematics-pure-mathematics-1--04-tank-drain.webp" width="900" height="1020" alt="A differential-equation model of a draining tank. Three tanks show the water level at t = 0 with h = 16, t = 5 with h = 9 and t = 20 with h = 0. Below, a graph of h against t is the curve h = (4 minus 0.2t) squared, passing through (0, 16), (5, 9) and (20, 0), with a dashed line after t = 20 marking where the model ends. Tangents show the gradient is minus 1.6 at t = 0 and minus 1.2 at t = 5, so the water falls faster when the tank is deeper. This comes from dh by dt = minus k root h with k = 0.4." loading="lazy">
  <figcaption>The tank drains faster when deeper and the model ends at t = 20.</figcaption>
</figure>


## Choosing the easiest representation — a cross-cutting habit

Before calculating, ask **which representation is easiest**:
logarithmic form often simplifies an equation unmanageable in index
form; a trig identity can turn an intractable integral into a
standard form from 2.5. Examiners reward recognising the **most
efficient** method, not just applying the first technique that comes
to mind.

## Worked example: combining logs and differentiation

Differentiate y = ln(3x² + 1).

```
Let u = 3x^2 + 1, so y = ln(u)
dy/du = 1/u
du/dx = 6x
Chain rule: dy/dx = (1/u) x du/dx = 6x / (3x^2 + 1)
```

This exact chain-rule-with-logarithm pattern recurs throughout 2.4 —
practising it until automatic saves significant time under exam
pressure.

## Worked example: locating a root by sign change

Show that x^3 - x - 1 = 0 has a root between x = 1 and x = 2.

```
f(x) = x^3 - x - 1
f(1) = 1 - 1 - 1 = -1   (negative)
f(2) = 8 - 2 - 1 = 5    (positive)
```

Since f(1) is negative and f(2) is positive, and f(x) is continuous
between these values, **a root lies somewhere in the interval (1,
2)** -- this sign-change argument is what the syllabus means by
"locating roots by sign changes." It says nothing yet about the
root's precise value; finding that requires the iterative method that
follows in the same sub-topic.

## Worked example: differentiating a product involving trig and exponential terms

Differentiate y = e^(2x) sin(3x), using the product rule.

```
Let u = e^(2x),  du/dx = 2e^(2x)
Let v = sin(3x), dv/dx = 3cos(3x)

Product rule: dy/dx = u(dv/dx) + v(du/dx)
            = e^(2x) x 3cos(3x) + sin(3x) x 2e^(2x)
            = e^(2x) [3cos(3x) + 2sin(3x)]
```

Factoring out the common e^(2x) at the end, rather than leaving the
two terms unsimplified, is what a fully worked answer at this level
looks like — an unsimplified but algebraically correct answer can
still lose a final accuracy mark for presentation.

## Worked example: integrating using a logarithm law first

Find the integral of 1/(2x + 1) dx.

```
d/dx [ln|2x + 1|] = 2 / (2x + 1)        (chain rule, derivative of
                                          the linear inside function
                                          is 2)

So integral of 1/(2x+1) dx = (1/2) ln|2x + 1| + c
```

Recognising the pattern "integral of f'(x)/f(x) is ln|f(x)|", adjusted
by a constant factor for a linear inner function, is one of the most
frequently reused techniques across 2.4-2.5 -- it is worth practising
until it is recognised on sight rather than derived from scratch each
time.

## Exam traps

- Treating factor theorem/polynomial division as a fresh challenge
each time rather than an automatic first step.
- Testing logarithm/exponential conversion in isolation instead of
practising mixed-representation problems.
- Neglecting secant, cosecant and cotangent identities in favour of
only sine/cosine/tangent.
- Attempting to differentiate or integrate directly without first
checking for algebraic simplification.
- Under-carrying decimal places through iteration steps in numerical
methods questions.

## Where this sits in the 9709 structure

9709 is modular: Pure Mathematics (Papers 1-3), Mechanics (Paper 4),
Probability & Statistics (Papers 5-6). Pure Mathematics 2 (Paper 2)
is offered only in the Pure Mathematics only AS Level route (Paper 1
plus Paper 2), which cannot count towards the full A Level. AS Level
candidates take two components: Paper 1 with Paper 2, Paper 4 or
Paper 5. A Level candidates take four components: Papers 1 and 3 with
either Papers 4 and 5 or Papers 5 and 6.
Students moving straight from Paper 1 into Paper 2 should expect
single questions that combine techniques across several sub-topics at
once, rather than the more isolated sub-topic testing typical of
Paper 1.

## Self-test

1. How do you solve an equation involving a modulus, and how does the
remainder theorem give the remainder when f(x) is divided by (ax + b)
in 2.1?
2. Why should logarithms and exponentials be practised as a pair
rather than separately?
3. What does a sign change across an interval demonstrate in 2.6 —
and what does it NOT tell you?
4. What habit should you build before differentiating or integrating
any expression in 2.4–2.5?
5. Why is Pure Mathematics 2 a step up from Pure Mathematics 1 in
how questions are structured?

**Answers:** 1. Consider the positive and negative case separately
(or square both sides, using |a| = |b| ⇔ a² = b²); the remainder is
f(−b/a), and (ax + b) is a factor exactly when f(−b/a) = 0.
2. Because exam questions frequently mix index and
logarithmic representations within a single problem, rather than
testing either form in isolation. 3. It demonstrates that a root lies
within that interval; it does not tell you the root's actual value.
4. Checking whether the expression can be simplified algebraically
first — this saves time and avoids errors. 5. Because Paper 2
combines techniques from across multiple sub-topics within a single
question, rather than testing each sub-topic separately as Paper 1
more often does.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-edexcel-mathematics-pure-mathematics-1--01-paper-routes.webp" width="900" height="976" alt="A route map of the pure mathematics papers for four boards. Cambridge 9709: AS Level is Paper 1 plus Paper 2, or Paper 1 plus Paper 4 or 5; A Level is Papers 1 and 3 plus either Papers 4 and 5 or Papers 5 and 6, and Paper 2 never counts towards the A Level. Edexcel International A Level: AS is P1, P2 and one applied unit; A Level is P1 to P4 plus two applied units. OxfordAQA 9660: AS is P1 and PSM1; A Level adds P2 and either S2 or M2. OCR H240: three two-hour papers, each worth one third, with pure mathematics in every one (pure; pure and statistics; pure and mechanics). A colour key shows pure, applied, and mixed papers." loading="lazy">
  <figcaption>Which pure papers each board requires for AS and A Level.</figcaption>
</figure>

## Frequently asked questions

**What is the remainder theorem?**
When a polynomial f(x) is divided by (ax + b), the remainder is f(−b/a). If that value is zero, (ax + b) is a factor of f(x).

**How do you sketch y = |ax + b|?**
Draw the line y = ax + b and reflect the part below the x-axis in the x-axis. The result is a V shape with its vertex at x = −b/a.

**Can Cambridge 9709 Paper 2 count towards the full A Level?**
No. Paper 2 is offered only in the Pure Mathematics only AS Level route (Paper 1 plus Paper 2), and that route cannot count towards the full A Level, which uses Paper 3 instead.

**Which trigonometric functions are new in Pure Mathematics 2?**
Secant, cosecant and cotangent are introduced here, so practise identities involving all six trigonometric functions rather than only sine, cosine and tangent.

**How do you differentiate ln(f(x))?**
Use the chain rule: the derivative of ln(f(x)) is f′(x)/f(x). For example, the derivative of ln(3x² + 1) is 6x/(3x² + 1).
