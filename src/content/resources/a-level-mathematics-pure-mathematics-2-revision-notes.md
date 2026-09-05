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
description: "Condensed recall notes on rational-function algebra, logarithms/exponentials, extended trigonometry, differentiation/integration, and numerical methods for Cambridge International AS & A Level Mathematics (9709), Pure Mathematics 2."
author: "marlbridge-academic-team"
publishedDate: 2026-09-05
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Pure Mathematics 2 study guide](/resources/a-level-mathematics-pure-mathematics-2/).

## 2.1 Algebra — fluency first

**Factor theorem and polynomial division must be automatic** before
moving on — later rational-function work assumes this, not a fresh
challenge each time. Use the factor theorem to find roots, then
divide to simplify or solve.

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
is only required for the full A Level -- it is not part of the
standalone AS Pure Mathematics award built from Paper 1 alone.
Students moving straight from Paper 1 into Paper 2 should expect
single questions that combine techniques across several sub-topics at
once, rather than the more isolated sub-topic testing typical of
Paper 1.

## Self-test

1. What must be automatic before attempting rational-function
simplification in 2.1?
2. Why should logarithms and exponentials be practised as a pair
rather than separately?
3. What does a sign change across an interval demonstrate in 2.6 —
and what does it NOT tell you?
4. What habit should you build before differentiating or integrating
any expression in 2.4–2.5?
5. Why is Pure Mathematics 2 a step up from Pure Mathematics 1 in
how questions are structured?

**Answers:** 1. Fluency with the factor theorem and polynomial
division. 2. Because exam questions frequently mix index and
logarithmic representations within a single problem, rather than
testing either form in isolation. 3. It demonstrates that a root lies
within that interval; it does not tell you the root's actual value.
4. Checking whether the expression can be simplified algebraically
first — this saves time and avoids errors. 5. Because Paper 2
combines techniques from across multiple sub-topics within a single
question, rather than testing each sub-topic separately as Paper 1
more often does.
