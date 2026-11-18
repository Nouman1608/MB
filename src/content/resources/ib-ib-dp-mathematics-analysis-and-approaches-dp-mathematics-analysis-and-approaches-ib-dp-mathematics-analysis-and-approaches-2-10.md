---
title: "IB DP Mathematics: Analysis and Approaches (AA): 2.10 Solving equations graphically and analytically"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Functions"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 2.10
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-10"
description: "Study guide to IB Maths AA 2.10: analytic or graphical methods, exponential, log and root equations, checking roots, and solving with a GDC in context."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This study guide covers section 2.10 of IB Diploma Programme Mathematics: Analysis and Approaches, common to SL and HL. The IB *Mathematics: analysis and approaches guide* (first assessment 2021) asks you to solve equations both graphically and analytically; to use technology to solve a variety of equations, including those where there is no appropriate analytic approach; and to apply graphing skills and equation solving to real-life situations. Solutions may be referred to as roots of equations or zeros of functions.

The [rational, exponential and logarithmic functions guide](/resources/ib-dp-mathematics-aa-sl-rational-exponential-log-functions-transformations/) shows one equation of each kind. This page is about judgement: deciding which method a question expects, the main analytic types with their traps, checking for false roots, and using a GDC carefully when no algebra will work. Afterwards, use the [2.10 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-10-revision-notes/) and the [2.10 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-10-practice/).

## Which method?

| Signal in the question | Expected method |
|---|---|
| Paper 1, or "find the exact value", "show that", "solve algebraically" | Analytic |
| Paper 2 with no request for exact values | GDC is acceptable, and often fastest |
| Different function types mixed, such as eˣ = 4 − x² or ln x = 2 − x² | Graphical: no analytic approach exists |
| "Hence" after an algebraic part | Use the result just found |
| A context with decimal data | GDC, then interpret |

If an equation can be solved by hand, a GDC answer still earns marks on Paper 2 unless the question demands an exact or algebraic method. If it cannot, only technology will do, so recognising the mixed types matters.

## Analytic types you must recognise

### 1. Exponential equations with one term each side

Take logarithms of both sides.

**Worked example 1.** Solve 5 × 2ˣ = 3^(x + 1) exactly.

```
ln 5 + x ln 2 = (x + 1) ln 3
x ln 2 − x ln 3 = ln 3 − ln 5
x(ln 2 − ln 3) = ln 3 − ln 5
x = (ln 3 − ln 5)/(ln 2 − ln 3) = ln(5/3)/ln(3/2) ≈ 1.26
```

Collect the x terms before factorising, exactly as with an unknown in a linear equation.

### 2. Disguised quadratics in aˣ

If the terms are a^(2x), aˣ and a constant, let u = aˣ.

**Worked example 2.** Solve 3^(2x) − 4 × 3ˣ + 3 = 0.

```
u = 3ˣ:  u² − 4u + 3 = 0
(u − 1)(u − 3) = 0
3ˣ = 1  →  x = 0        3ˣ = 3  →  x = 1
```

Any negative value of u must be rejected, with the reason that aˣ > 0.

### 3. Logarithmic equations

Combine logarithms with the laws, remove the log, then **check every root in the original equation**.

**Worked example 3.** Solve log₂ x + log₂(x − 2) = 3.

```
log₂(x(x − 2)) = 3
x² − 2x = 8
x² − 2x − 8 = 0  →  x = 4 or x = −2
x = −2 makes log₂ x undefined: reject
x = 4
```

The rejected root is not a slip: combining the logs widened the domain, so a false root appeared. Saying why you reject it earns the reasoning mark.

### 4. Equations with roots or fractions

Squaring both sides, or multiplying by a denominator, can also introduce false roots.

```
√(x + 6) = x
x + 6 = x²  →  x² − x − 6 = 0  →  x = 3 or x = −2
Check: √9 = 3 ✓;  √4 = 2 ≠ −2 ✗
x = 3
```

## Graphical method with technology

Two equivalent routes:

1. Graph y = left side and y = right side; use the intersect tool for each point.
2. Rearrange to f(x) = 0, graph y = f(x) and use the zero tool.

**Worked example 4.** Solve eˣ = 4 − x².

```
Graph y = eˣ and y = 4 − x²
Intersections at x = −1.96 and x = 1.06 (3 s.f.)
```

**How many solutions?** Before reading values, decide how many there should be. Here 4 − x² is a downward parabola with maximum 4, and eˣ is positive and increasing; the parabola starts above eˣ near x = 0 (4 > 1), falls below it on both sides, so there are exactly two crossings. By contrast, ln x = 2 − x² has exactly one solution, x = 1.31, because ln x increases while 2 − x² decreases for x > 0.

**What to write.** Write down the equation you graphed (or the two functions), the tool used, and each solution. A bare list of numbers risks the method mark if one is wrong.

### Near-misses and tangency

When two graphs nearly touch, the screen may show one point, two close points or none. Zoom in on the region until you can see clearly whether the curves cross. If they only touch, the equation has a repeated root there, and the zero tool on y = f(x) − g(x) may fail; use the minimum or maximum tool on the difference instead.

## Real-life applications

Models lead to equations that are sometimes analytic and sometimes not.

**Worked example 5.** In an invented model, a cup of tea cools so that T = 20 + 70e^(−0.1t) °C after t minutes. Find when it reaches 45 °C.

```
70e^(−0.1t) = 25
e^(−0.1t) = 25/70
t = 10 ln(70/25) = 10.3 minutes (3 s.f.)
```

If the question then asks when this tea is at the same temperature as a second drink whose temperature falls linearly, say 90 − 3t, the equation 20 + 70e^(−0.1t) = 90 − 3t mixes an exponential with a linear term, so you would graph both and use the intersect tool.

After solving, check the answer is inside the model's domain and makes sense: a negative time, or a temperature below the room's, signals an error or a root to reject.

## Checking answers

- Substitute an analytic answer back into the original equation (not a rearranged one).
- Compare with a rough sketch: does the number of solutions match?
- For a GDC answer, zoom out once to make sure no intersection lies outside the window.

## Common mistakes

- Keeping a root that makes a logarithm or square root undefined.
- Keeping u < 0 in a disguised quadratic in aˣ.
- Writing ln(a + b) = ln a + ln b while combining logs.
- Missing a solution because the GDC window was too small.
- Giving a GDC decimal where "exact" was requested.
- Dividing both sides by an expression that might be zero, such as x, and losing the root x = 0.

## Exam technique

- **Solve algebraically / find the exact value:** full working, exact form such as ln(5/3)/ln(3/2).
- **Solve (Paper 2):** a GDC answer to 3 s.f., with the equation you graphed written down.
- **Find the number of solutions:** refer to a sketch or graph and give a reason.
- **Interpret:** answer in the context's units, and reject values outside the domain.

## Where to go next

Condense this with the [2.10 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-10-revision-notes/), then try the [2.10 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-10-practice/). Finding intersections with technology is covered in the [2.4 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-4/), and exponential and logarithmic functions in the [2.9 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-9/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus section SL 2.10.
