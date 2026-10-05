---
resourceId: "mb-ap-calcab-2.1-study-guide"
title: "Defining Average and Instantaneous Rates of Change at a Point: Study Guide (Calculus AB 2.1)"
description: "Learn the two difference quotients for an average rate of change and how their limit defines the derivative at a point, f′(a), with exact worked examples."
course: "calculus-ab"
unit: 2
topics: ["2.1"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "The idea of a rate at an instant as a limit of average rates (Topic 1.1)"
  - "Limits of 0/0 forms by factoring, conjugates and combining fractions (Topic 1.6)"
  - "One-sided limits (Topics 1.2 and 1.3)"
  - "Expanding brackets such as (a + h)² and (a + h)³"
prerequisiteResources: ["mb-ap-calcab-1.16-study-guide"]
learningObjectives:
  - "Write the average rate of change of f over an interval in both difference-quotient forms and evaluate it"
  - "Explain why the two forms describe the same quantity, using x = a + h"
  - "Define the derivative of f at x = a as the limit of a difference quotient and write it as f′(a)"
  - "Evaluate f′(a) exactly from either limit form, using the algebra of Topic 1.6"
  - "Recognise a given limit as the derivative of a particular function at a particular point"
  - "Explain what it means when the limit of the difference quotient does not exist"
skills: ["1", "2"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Work every limit by hand. A value of the difference quotient for a small h is a check, not a method."
related: ["mb-ap-calcab-2.1-revision-notes", "mb-ap-calcab-2.1-practice", "mb-ap-calcab-2.1-checklist"]
next: "mb-ap-calcab-2.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Average rate of change of f between a and another point: (f(a + h) − f(a))/h, or (f(x) − f(a))/(x − a). These are the same number when x = a + h."
  - "The instantaneous rate of change at a is the limit of either quotient: as h → 0, or as x → a. This limit, when it exists, is the derivative f′(a)."
  - "Every derivative from the definition is a 0/0 limit, so you use the algebra of Topic 1.6: expand, factor, combine fractions or use a conjugate, then cancel."
  - "If the left and right limits of the difference quotient differ, f′(a) does not exist."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 2.1 is common content, so the same page serves AB and BC students."
  - question: "Which form of the difference quotient should I use?"
    answer: "Either gives the same answer. The h-form is usually easier for polynomials, because you expand (a + h)ⁿ. The x-form is often easier when you can factor (x − a) out of f(x) − f(a), or when roots are involved."
  - question: "Can I just use the derivative rules instead?"
    answer: "Not yet. The rules start in Topic 2.5, and they are proved from this definition. Questions on this topic often ask you to use the definition, or to recognise a limit as a derivative."
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

This page has no equation renderer, so limits are written in a compact form:

**lim (h → 0) g(h)** means "the limit as h approaches 0 of g(h)".

**f′(a)** is read "f prime of a". It is the name for the instantaneous rate of change of f at x = a. The mark ′ is a prime, not an apostrophe. On paper, keep "lim" on every line until you substitute, exactly as in Topic 1.6.

## From Topic 1.1 to here

In Topic 1.1 you saw the big idea. An average rate of change needs two different input values. A rate at an instant is the value that average rates approach as the interval shrinks. Topic 2.1 turns that idea into a precise definition with a name, f′(a), and shows you how to calculate it exactly.

Three things are new:

1. Two standard ways to write the average rate, called **difference quotients**.
2. The **derivative at a point**, defined as the limit of a difference quotient.
3. Reading a limit backwards: spotting which function and which point it describes.

## Average rate of change: two difference quotients

The average rate of change of f over an interval is the change in output divided by the change in input. There are two common ways to label the interval.

**Form 1 (the h-form).** The interval runs from a to a + h, where h ≠ 0:

**(f(a + h) − f(a)) / h**

Here h is the change in input. If h > 0, the interval is [a, a + h]. If h < 0, it is [a + h, a].

**Form 2 (the x-form).** The interval runs from a to some other input x, with x ≠ a:

**(f(x) − f(a)) / (x − a)**

Here x − a is the change in input.

These are **the same quantity with different labels**. Put x = a + h. Then x − a = h and f(x) = f(a + h), so Form 2 turns into Form 1. Whichever form you use, the answer is the slope of the **secant line** through (a, f(a)) and the second point on the graph.

**Quick example.** Let p(x) = 8/x and a = 2. Over [2, 4]:

- h-form with h = 2: (p(4) − p(2))/2 = (2 − 4)/2 = **−1**
- x-form with x = 4: (p(4) − p(2))/(4 − 2) = **−1**

Same number, as expected. The negative sign means p decreases over this interval, by 1 unit of output per unit of input on average.

<figure>
<svg viewBox="0 0 520 340" role="img" aria-labelledby="dq-title dq-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="dq-title">A secant line and a tangent line on the curve y = x²/2, with the run h and the rise f(a + h) − f(a) labelled</title>
<desc id="dq-desc">A rising curve y = x²/2 drawn for x from 0 to 4. Point P is at (1, 0.5), labelled x = a. Point Q is at (3, 4.5), labelled x = a + h, also written as x. A long-dashed secant line passes through P and Q; its slope is 2. A horizontal segment from P to directly below Q is labelled run = h. A vertical segment from there up to Q is labelled rise = f(a + h) − f(a). A dotted line touches the curve at P with slope 1; this is the tangent line. As Q slides along the curve towards P, the secant slope moves towards the tangent slope.</desc>
<rect x="0" y="0" width="520" height="340" fill="#ffffff"/>
<line x1="50" y1="300" x2="500" y2="300" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="60" y1="310" x2="60" y2="15" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="160" y1="296" x2="160" y2="304"/><line x1="260" y1="296" x2="260" y2="304"/><line x1="360" y1="296" x2="360" y2="304"/><line x1="460" y1="296" x2="460" y2="304"/>
<line x1="56" y1="232" x2="64" y2="232"/><line x1="56" y1="164" x2="64" y2="164"/><line x1="56" y1="96" x2="64" y2="96"/><line x1="56" y1="28" x2="64" y2="28"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="160" y="318">1</text><text x="260" y="318">2</text><text x="360" y="318">3</text><text x="460" y="318">4</text>
<text x="160" y="334">x = a</text><text x="360" y="334">x = a + h</text>
<text x="505" y="304">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="52" y="236">2</text><text x="52" y="168">4</text><text x="52" y="100">6</text><text x="52" y="32">8</text>
<text x="52" y="16">y</text>
</g>
<polyline points="60,300 85,298.9 110,295.8 135,290.4 160,283 185,273.4 210,261.8 235,247.9 260,232 285,213.9 310,193.8 335,171.4 360,147 385,120.4 410,91.8 435,60.9 460,28" fill="none" stroke="#1d2b44" stroke-width="3"/>
<line x1="140" y1="296.6" x2="440" y2="92.6" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="12 6"/>
<line x1="110" y1="300" x2="460" y2="181" stroke="#1d2b44" stroke-width="2" stroke-dasharray="1.5 3.5" stroke-linecap="round"/>
<line x1="160" y1="283" x2="360" y2="283" stroke="#1d2b44" stroke-width="1"/>
<line x1="360" y1="283" x2="360" y2="147" stroke="#1d2b44" stroke-width="1"/>
<circle cx="160" cy="283" r="5" fill="#1d2b44"/>
<circle cx="360" cy="147" r="5" fill="#1d2b44"/>
<g font-size="12" fill="#1d2b44">
<text x="150" y="272" text-anchor="end">P (a, f(a))</text>
<text x="350" y="140" text-anchor="end">Q (a + h, f(a + h))</text>
<text x="260" y="278" text-anchor="middle">run = h</text>
<text x="366" y="262">rise = f(a + h) − f(a)</text>
</g>
<g font-size="12" fill="#1d2b44">
<line x1="78" y1="36" x2="118" y2="36" stroke="#1d2b44" stroke-width="3"/><text x="126" y="40">curve y = f(x) = x²/2</text>
<line x1="78" y1="56" x2="118" y2="56" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="12 6"/><text x="126" y="60">secant P to Q: slope = rise/run = 2</text>
<line x1="78" y1="76" x2="118" y2="76" stroke="#1d2b44" stroke-width="2" stroke-dasharray="1.5 3.5" stroke-linecap="round"/><text x="126" y="80">tangent at P: slope 1</text>
</g>
</svg>
<figcaption>Figure 1. The difference quotient is rise over run for the secant line PQ. Here a = 1 and h = 2, so the slope is (4.5 − 0.5)/2 = 2. The second point can be labelled a + h or simply x; the run is then h or x − a. Shrinking h slides Q towards P, and the secant slope approaches the tangent slope, 1. Lines are told apart by dash pattern and label. Axes are unitless.</figcaption>
</figure>

## The instantaneous rate of change: the derivative at a point

Now let the interval shrink. In Form 1, h → 0. In Form 2, x → a. The **instantaneous rate of change of f at x = a** is

**lim (h → 0) (f(a + h) − f(a)) / h**   or, equivalently,   **lim (x → a) (f(x) − f(a)) / (x − a)**

**provided the limit exists**. This number is called the **derivative of f at a** and is written **f′(a)**.

Four points to hold on to:

- **Both limits are 0/0 forms.** At h = 0 (or x = a), the top is f(a) − f(a) = 0 and the bottom is 0. So substitution never works directly. You rewrite first, using the algebra from Topic 1.6, and then substitute.
- **The two forms always agree.** They are the same limit with x = a + h. Use whichever makes the algebra easier.
- **The answer is a number.** f′(a) is the slope of the tangent line at (a, f(a)), and the rate at that single input. Its units are output units per input unit.
- **"Provided the limit exists" matters.** If the difference quotient does not approach a single finite value, f has no derivative at a.

**When the limit does not exist.** Take f(x) = |x − 3| at a = 3. Then f(3 + h) − f(3) = |h|, so the h-form quotient is |h|/h. For h > 0 this equals 1; for h < 0 it equals −1. The right-hand limit is 1 and the left-hand limit is −1. They differ, so the limit does not exist and **f′(3) does not exist**. On the graph, there is a sharp corner at (3, 0): no single tangent line fits. Topic 2.4 studies this in full.

## Worked example 1: the h-form for a polynomial

**Question.** Let f(x) = x³ − 4x.
(a) Find the average rate of change of f over [2, 2.1].
(b) Use the definition of the derivative to find f′(2).

1. **Find f(2).** f(2) = 8 − 8 = 0.
2. **Expand f(2 + h).** (2 + h)³ = 8 + 12h + 6h² + h³, and 4(2 + h) = 8 + 4h. So
   **f(2 + h) = 8 + 12h + 6h² + h³ − 8 − 4h = 8h + 6h² + h³**
3. **Form the difference quotient.** For h ≠ 0:
   **(f(2 + h) − f(2))/h = (8h + 6h² + h³)/h = 8 + 6h + h²**
4. **(a) Average rate over [2, 2.1].** This interval has h = 0.1. So the average rate is 8 + 0.6 + 0.01 = **8.61**.
5. **(b) Take the limit.** f′(2) = lim (h → 0) (8 + 6h + h²) = 8 + 0 + 0 = **8**.

**Answer.** (a) 8.61. (b) f′(2) = **8**.

**Check with the other form.** f(x) − f(2) = x³ − 4x = x(x − 2)(x + 2). Dividing by (x − 2) gives x(x + 2) for x ≠ 2. As x → 2 this approaches 2 × 4 = 8. Both forms agree.

**Interpretation.** Near x = 2 the outputs of f increase about 8 times as fast as the inputs. The average over [2, 2.1] is a little larger (8.61) because the graph gets steeper to the right of 2. Over [1.9, 2], with h = −0.1, the same formula gives 8 − 0.6 + 0.01 = 7.41, a little smaller. The true rate, 8, lies between the two.

**Why step 3 is allowed.** Cancelling h needs h ≠ 0. A limit only looks at h close to 0, never at h = 0, so this is fine (the key fact from Topic 1.6).

## Worked example 2: the x-form with a square root

**Question.** In a fictional experiment, the radius of a circular ripple on a pond is r(t) = √(2t + 1) metres, t seconds after a stone lands.
(a) Find the average rate of change of the radius over [4, 12].
(b) Find the rate at which the radius is increasing at t = 4, using the x-form of the definition.

1. **(a) Average rate.** r(4) = √9 = 3 and r(12) = √25 = 5. So the average rate is (5 − 3)/(12 − 4) = 2/8 = **0.25 m/s**.
2. **(b) Write the x-form.** With the input called t:
   **r′(4) = lim (t → 4) (√(2t + 1) − 3)/(t − 4)**
   Substitution gives 0/0, so rewrite.
3. **Multiply top and bottom by the conjugate** √(2t + 1) + 3. The top becomes (2t + 1) − 9 = 2t − 8 = 2(t − 4). Keep the bottom factored:
   **= lim (t → 4) 2(t − 4) / ((t − 4)(√(2t + 1) + 3))**
4. **Cancel (t − 4)**, valid for t ≠ 4:
   **= lim (t → 4) 2/(√(2t + 1) + 3)**
5. **Substitute.** 2/(3 + 3) = 2/6 = **1/3**.

**Answer.** (a) 0.25 m/s. (b) r′(4) = **1/3 m/s**, about 0.333 m/s.

**Check (with a calculator, not part of the method).** √9.02 ≈ 3.003331, so (r(4.01) − 3)/0.01 ≈ 0.3331. That is close to 1/3.

**Interpretation.** At t = 4 seconds, the ripple's radius is growing at 1/3 metre per second. Over the longer interval [4, 12] it grew more slowly on average (0.25 m/s), because the growth slows down as time passes.

## Worked example 3: reading a limit as a derivative

Exam questions often give you a limit and ask what it represents, or ask you to evaluate it by recognising it. Match it against the template **lim (h → 0) (f(a + h) − f(a))/h** or **lim (x → a) (f(x) − f(a))/(x − a)**.

**(a)** lim (h → 0) ((5 + h)² − 25)/h.

1. The pattern f(a + h) is (5 + h)², so f(x) = x² and a = 5.
2. Check f(a): 5² = 25, which matches the number being subtracted.
3. So the limit is **f′(5) for f(x) = x²**. To evaluate it: ((5 + h)² − 25)/h = (10h + h²)/h = 10 + h for h ≠ 0, which approaches **10**.

**(b)** lim (x → 1) (x⁴ − 1)/(x − 1).

1. The bottom is x − a with a = 1. The top must be f(x) − f(1). Try f(x) = x⁴: then f(1) = 1. It matches.
2. So the limit is **f′(1) for f(x) = x⁴**.
3. To evaluate it: x⁴ − 1 = (x − 1)(x + 1)(x² + 1). Cancel (x − 1), valid for x ≠ 1, to get (x + 1)(x² + 1). As x → 1 this approaches 2 × 2 = **4**.

**The match is not always unique.** In (a), you could also say f(x) = (5 + x)² with a = 0, since f(0 + h) = (5 + h)² and f(0) = 25. Both descriptions are correct; the value of the limit is the same. When a question gives you answer options, pick the one that fits the template exactly: check the function, the point **and** the value of f at that point.

## Representations

The same instantaneous rate shows up in all four representations the course uses:

| Representation | Average rate of change | Instantaneous rate (derivative at a) |
|---|---|---|
| Analytical | (f(a + h) − f(a))/h or (f(x) − f(a))/(x − a) | f′(a) = the limit of either quotient |
| Graphical | Slope of the secant line through two points | Slope of the tangent line at (a, f(a)) |
| Numerical | One quotient from two table values | The value the quotients approach as the interval shrinks (estimating from tables is Topic 2.3) |
| Verbal | "On average, the radius grew 0.25 m each second between t = 4 and t = 12" | "At t = 4 the radius is growing at 1/3 m per second" |

## Common misconceptions

- **"f′(a) is the same as f(a)."** f(a) is the value of the function; f′(a) is its rate of change. In Worked example 1, f(2) = 0 but f′(2) = 8.
- **Subtracting the wrong thing.** The top is f(a + h) − f(a), not f(a + h) − a, and not f(a + h) − f(h). In (f(x) − f(a))/(x − a), the bottom is x − a, not f(x) − f(a).
- **Expanding f(a) + h instead of f(a + h).** For f(x) = x², f(3 + h) = (3 + h)² = 9 + 6h + h². It is not 9 + h.
- **Putting h = 0 straight in.** That gives 0/0 every time. Simplify and cancel first.
- **Dropping the limit.** (f(a + h) − f(a))/h is an average rate. Only its limit is the instantaneous rate. In Worked example 1 the quotient is 8 + 6h + h²; the derivative is 8.
- **"The average over a long interval is a good enough rate at a point."** In Worked example 2, the average over [4, 12] is 0.25 m/s, but the rate at t = 4 is 1/3 m/s.
- **"Every function has a derivative everywhere."** The definition says "provided the limit exists". At the corner of |x − 3|, the one-sided limits are −1 and 1, so there is no derivative at 3.
- **Forgetting units.** A derivative has units of output per input, such as metres per second.

## Where this leads

Topic 2.1 gives the derivative at one point. In the next topic, [Defining the Derivative of a Function and Using Derivative Notation](/advanced-course-resources/calculus-ab/2-2-defining-derivative-function-derivative-notation-study-guide/), you let the point vary, so the derivative becomes a function f′(x). You also meet the notations dy/dx and y′ and use f′(a) to write the equation of a tangent line. Topic 2.3 estimates derivatives from tables and graphs, and Topic 2.4 explains exactly when the limit fails to exist. For the end of Unit 1, see [Working with the Intermediate Value Theorem](/advanced-course-resources/calculus-ab/1-16-working-intermediate-value-theorem-ivt-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/2-1-defining-average-instantaneous-rates-change-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/2-1-defining-average-instantaneous-rates-change-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/2-1-defining-average-instantaneous-rates-change-checklist/) to consolidate.
