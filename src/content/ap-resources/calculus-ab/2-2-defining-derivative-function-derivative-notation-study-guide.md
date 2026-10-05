---
resourceId: "mb-ap-calcab-2.2-study-guide"
title: "Defining the Derivative of a Function and Using Derivative Notation: Study Guide (Calculus AB 2.2)"
description: "Learn how the limit definition turns into a derivative function f′(x), how to read and write dy/dx, f′(x) and y′, and how to find a tangent line equation."
course: "calculus-ab"
unit: 2
topics: ["2.2"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "The derivative at a point as the limit of a difference quotient (Topic 2.1)"
  - "Limits of 0/0 forms by expanding, factoring, conjugates and combining fractions (Topic 1.6)"
  - "Point-slope form of a straight line, y − y₁ = m(x − x₁)"
prerequisiteResources: ["mb-ap-calcab-2.1-study-guide"]
learningObjectives:
  - "Define the derivative function f′(x) as a limit of a difference quotient in which x is a variable"
  - "Find f′(x) from the definition for polynomial, rational and root functions, and state where it exists"
  - "Read and write the notations f′(x), dy/dx and y′, including the value of a derivative at a point"
  - "Move between graphical, numerical, analytical and verbal descriptions of a derivative, with units"
  - "Use f′(a) as the slope of the tangent line and write the tangent line equation at a given point"
skills: ["1", "2", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Work every derivative here by hand from the definition. Derivative rules start in Topic 2.5."
related: ["mb-ap-calcab-2.2-revision-notes", "mb-ap-calcab-2.2-practice", "mb-ap-calcab-2.2-checklist"]
next: "mb-ap-calcab-2.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "The derivative of f is the function f′(x) = lim (h → 0) (f(x + h) − f(x))/h, defined wherever this limit exists."
  - "For y = f(x), the derivative can be written f′(x), dy/dx or y′. They all mean the same thing."
  - "f′(a) is a number: the slope of the tangent line to the graph of f at (a, f(a))."
  - "Tangent line at x = a: y − f(a) = f′(a)(x − a). The slope must be the number f′(a), not the formula f′(x)."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 2.2 is common content, so the same page serves AB and BC students."
  - question: "Is dy/dx a fraction?"
    answer: "Treat it as one symbol for now: it names the derivative of y with respect to x. It is built from the fraction Δy/Δx, which is why it looks like one, but in this unit you do not split it into dy and dx."
  - question: "Why do I have to use the limit definition when there are shortcuts?"
    answer: "The shortcuts, starting with the power rule in Topic 2.5, are proved from this definition. Some questions also ask for the definition directly, or give you a limit and ask what derivative it represents."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer, so limits are written as **lim (h → 0) g(h)**, meaning "the limit as h approaches 0 of g(h)". The derivative is written with a prime, **f′(x)**, read "f prime of x". The value of dy/dx at a particular point, say x = 3, is written here as **dy/dx at x = 3**. On paper you will often see a vertical bar after dy/dx with "x = 3" written small at its foot; both mean the same.

## From a number to a function

In Topic 2.1 you found the derivative at **one** point a:

**f′(a) = lim (h → 0) (f(a + h) − f(a))/h**

You can do this at a = 1, then at a = 2, then at a = 3, and so on. Each time you get a number. Instead of repeating the work, keep the point as a **variable**, x:

> **Definition.** The derivative of f is the function f′ whose value at x is
> **f′(x) = lim (h → 0) (f(x + h) − f(x))/h**,
> provided this limit exists.

Inside the limit, x is held fixed while h → 0. Only after the limit is taken do you let x vary. The result is a new function. Feed it any input a where the limit exists, and it returns f′(a), the slope of the graph of f at that input.

**A first example.** Let f(x) = x²/2. Then

f(x + h) − f(x) = (x² + 2xh + h²)/2 − x²/2 = xh + h²/2.

Divide by h (h ≠ 0) to get x + h/2. Let h → 0: **f′(x) = x**.

One calculation now answers infinitely many questions. The slope of y = x²/2 is −2 at x = −2, 0 at x = 0, 1 at x = 1 and 3 at x = 3. (Topic 2.1, Figure 1 showed the slope 1 at x = 1 on this same curve.)

**Where f′ exists.** f′(x) is defined only at inputs where the limit exists. This can be fewer inputs than f has. For example, √x is defined at x = 0, but its derivative from the definition, 1/(2√x), exists only for x > 0. Topic 2.4 looks at such points in detail.

## Derivative notation

For y = f(x), these all name the derivative:

| Notation | Read as | Notes |
|---|---|---|
| f′(x) | "f prime of x" | Names the function f. Value at a point: f′(3) |
| y′ | "y prime" | Short; use when the function is called y |
| dy/dx | "d y d x", or "the derivative of y with respect to x" | Shows both variables. Value at a point: dy/dx at x = 3 |
| d/dx (f(x)) | "the derivative of f(x) with respect to x" | Useful for an expression without a name, e.g. d/dx (x²/2) = x |

**Why dy/dx looks like a fraction.** It comes from the average rate Δy/Δx, the change in y over the change in x. The "d" signals that the limit has been taken. In this unit, treat dy/dx as a single symbol.

**Other letters.** If s(t) is a position at time t, its derivative is s′(t) or ds/dt. The letters change; the meaning does not. The variable in the bottom (dt, dx) tells you the input you are differentiating with respect to.

**Two common slips.** f′(3) means "find f′(x), then put x = 3". It does **not** mean "put x = 3 into f, then differentiate the number": that would give 0, because a constant has slope 0. And y′ is not y: y is a height on the graph, y′ is a slope.

## Worked example 1: a polynomial from the definition

**Question.** Let f(x) = 2x² − 3x + 1. Use the definition to find f′(x). Then find f′(0), f′(3/4) and f′(2).

1. **Write f(x + h).** Replace every x by (x + h):
   f(x + h) = 2(x + h)² − 3(x + h) + 1 = 2x² + 4xh + 2h² − 3x − 3h + 1.
2. **Subtract f(x).** The terms 2x², −3x and +1 cancel:
   **f(x + h) − f(x) = 4xh + 2h² − 3h**
3. **Divide by h** (h ≠ 0):
   **(f(x + h) − f(x))/h = 4x + 2h − 3**
4. **Take the limit**, holding x fixed:
   **f′(x) = lim (h → 0) (4x + 2h − 3) = 4x − 3**
5. **Evaluate.** f′(0) = −3, f′(3/4) = 0, f′(2) = 5.

**Answer.** f′(x) = **4x − 3**; f′(0) = −3, f′(3/4) = 0, f′(2) = 5.

**Interpretation.** At x = 0 the graph of f falls with slope −3. At x = 3/4 the tangent line is horizontal. At x = 2 the graph rises with slope 5.

**Check.** Every term that does not contain h must cancel in step 2. If one survives, you have made an expansion error, because the top must be 0 when h = 0.

## Worked example 2: a rational function

**Question.** Let f(x) = 3/(x + 1). Use the definition to find f′(x), and state where it exists.

1. **Write the difference quotient.**
   **(f(x + h) − f(x))/h = [3/(x + h + 1) − 3/(x + 1)] / h**
2. **Combine the fractions on top** over the common denominator (x + h + 1)(x + 1):
   3(x + 1) − 3(x + h + 1) = 3x + 3 − 3x − 3h − 3 = −3h.
   So the top is −3h / ((x + h + 1)(x + 1)).
3. **Divide by h** and cancel (h ≠ 0):
   **= −3 / ((x + h + 1)(x + 1))**
4. **Take the limit.** As h → 0, x + h + 1 → x + 1:
   **f′(x) = −3/(x + 1)²**
5. **Where it exists.** The formula works for every x ≠ −1. At x = −1, f itself is undefined, so there is no derivative there either.

**Answer.** f′(x) = **−3/(x + 1)²**, for x ≠ −1.

**Interpretation.** The numerator is negative and (x + 1)² is positive, so f′(x) < 0 everywhere it exists: the graph of f falls on each side of its asymptote. For example, f′(0) = −3, f′(2) = −1/3 and f′(−3) = −3/4.

## The tangent line

f′(a) is the slope of the tangent line to y = f(x) at the point (a, f(a)). A line through a known point with a known slope has the point-slope equation

> **Tangent line at x = a:** y − f(a) = f′(a)(x − a)

You need two numbers: the height f(a) and the slope f′(a).

## Worked example 3: writing a tangent line

**Question.** Find an equation of the line tangent to the graph of y = 3/(x + 1) at x = 2.

1. **Point.** f(2) = 3/3 = 1. The point is (2, 1).
2. **Slope.** From Worked example 2, f′(x) = −3/(x + 1)². So f′(2) = −3/9 = **−1/3**.
3. **Point-slope form.**
   **y − 1 = −(1/3)(x − 2)**
4. **Optional rearrangement.** y = −x/3 + 5/3. Point-slope form is acceptable as a final answer unless a question asks for another form.

**Answer.** **y − 1 = −(1/3)(x − 2)**, or y = (5 − x)/3.

**Check.** Near x = 2, the tangent line should be close to the curve. At x = 2.3 the line gives 0.9 and the curve gives 3/3.3 ≈ 0.909. Close, as expected.

<figure>
<svg viewBox="0 0 520 320" role="img" aria-labelledby="tan-title tan-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="tan-title">The curve y = 3/(x + 1) and its tangent line at the point (2, 1)</title>
<desc id="tan-desc">A falling curve, y = 3/(x + 1), drawn for x from 0 to 5. It starts at (0, 3) and flattens out, passing through (2, 1) and (5, 0.5). A dotted straight line touches the curve at (2, 1) and has slope −1/3. It meets the y-axis at 5/3 and the x-axis at 5. Near the point (2, 1) the line and the curve are very close; further away the curve lies above the line.</desc>
<rect x="0" y="0" width="520" height="320" fill="#ffffff"/>
<line x1="50" y1="280" x2="500" y2="280" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="60" y1="290" x2="60" y2="40" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="140" y1="276" x2="140" y2="284"/><line x1="220" y1="276" x2="220" y2="284"/><line x1="300" y1="276" x2="300" y2="284"/><line x1="380" y1="276" x2="380" y2="284"/><line x1="460" y1="276" x2="460" y2="284"/>
<line x1="56" y1="210" x2="64" y2="210"/><line x1="56" y1="140" x2="64" y2="140"/><line x1="56" y1="70" x2="64" y2="70"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="140" y="298">1</text><text x="220" y="298">2</text><text x="300" y="298">3</text><text x="380" y="298">4</text><text x="460" y="298">5</text>
<text x="505" y="284">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="52" y="214">1</text><text x="52" y="144">2</text><text x="52" y="74">3</text>
<text x="52" y="44">y</text>
</g>
<line x1="220" y1="210" x2="220" y2="280" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 3"/>
<line x1="60" y1="210" x2="220" y2="210" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 3"/>
<polyline points="60,70 80,112 100,140 120,160 140,175 160,186.7 180,196 200,203.6 220,210 240,215.4 260,220 280,224 300,227.5 320,230.6 340,233.3 360,235.8 380,238 400,240 420,241.8 440,243.5 460,245" fill="none" stroke="#1d2b44" stroke-width="3"/>
<line x1="60" y1="163.3" x2="460" y2="280" stroke="#1d2b44" stroke-width="2" stroke-dasharray="1.5 3.5" stroke-linecap="round"/>
<circle cx="220" cy="210" r="5" fill="#1d2b44"/>
<text x="232" y="198" font-size="12" fill="#1d2b44">(2, 1)</text>
<g font-size="12" fill="#1d2b44">
<line x1="290" y1="56" x2="330" y2="56" stroke="#1d2b44" stroke-width="3"/><text x="338" y="60">curve y = 3/(x + 1)</text>
<line x1="290" y1="76" x2="330" y2="76" stroke="#1d2b44" stroke-width="2" stroke-dasharray="1.5 3.5" stroke-linecap="round"/><text x="338" y="80">tangent at x = 2: slope −1/3</text>
</g>
</svg>
<figcaption>Figure 1. The tangent line at (2, 1) has slope f′(2) = −1/3 and equation y − 1 = −(1/3)(x − 2). Close to x = 2 the line is almost indistinguishable from the curve, which is why a tangent line is useful for estimates later in the course. The curve and the line are told apart by thickness, dash pattern and label. Axes are unitless.</figcaption>
</figure>

## Four representations of a derivative

A derivative can be given, or asked for, in any of four forms. Be ready to move between them.

| Representation | What it looks like | Example from this page |
|---|---|---|
| Analytical | A formula for f′(x), or a limit | f′(x) = 4x − 3, from the definition |
| Numerical | A table of derivative values | For f(x) = 3/(x + 1): f′(0) = −3, f′(2) = −1/3 |
| Graphical | The slope of the tangent line at each point of the graph of f | Figure 1: slope −1/3 at (2, 1) |
| Verbal | A sentence about the rate of change, with units | "At t = 5 minutes, the volume is decreasing at 2 litres per minute" means V′(5) = −2, if V(t) is in litres and t in minutes |

**Units.** The units of f′(x) are the units of f divided by the units of x. If C(n) is a cost in dollars for n kilograms, then C′(n) is in dollars per kilogram. Topic 2.3 adds estimating derivatives from tables and graphs.

## Common misconceptions

- **"f′(x) and f′(a) are the same kind of thing."** f′(x) is a function; f′(a) is one number. A tangent line needs the number.
- **Using f′(x) as the slope of a tangent line.** "y − 3 = (4x − 3)(x − 2)" is not a line. Substitute x = a into f′ first.
- **Using f(a) as the slope, or f′(a) as the height.** The point is (a, f(a)); the slope is f′(a).
- **Substituting before differentiating.** For f(x) = 2x² − 3x + 1, f(2) = 3 is a constant. "Differentiating 3" gives 0, but f′(2) = 5.
- **Expanding f(x) + h instead of f(x + h).** Replace every x by (x + h), including inside powers and denominators.
- **Splitting dy/dx.** In this unit, dy/dx is one symbol, not d × y ÷ (d × x).
- **"The derivative exists wherever the function does."** √x is defined at 0, but its derivative is not. And f′ never exists where f is undefined.
- **"A tangent line touches the curve only once."** It touches the curve at the point of tangency, but it may cross the curve somewhere else. What defines it is the slope f′(a) at that point.

## Where this leads

You now have the derivative as a function, three ways to write it and a way to find tangent lines. The next topic, [Estimating Derivatives of a Function at a Point](/advanced-course-resources/calculus-ab/2-3-estimating-derivatives-function-point-study-guide/), estimates f′(a) from tables and graphs, and with technology. Topic 2.4 explains when the derivative fails to exist, and from Topic 2.5 onwards you meet the rules that let you skip the limit for familiar functions. For the previous topic, see [Defining Average and Instantaneous Rates of Change at a Point](/advanced-course-resources/calculus-ab/2-1-defining-average-instantaneous-rates-change-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/2-2-defining-derivative-function-derivative-notation-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/2-2-defining-derivative-function-derivative-notation-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/2-2-defining-derivative-function-derivative-notation-checklist/) to consolidate.
