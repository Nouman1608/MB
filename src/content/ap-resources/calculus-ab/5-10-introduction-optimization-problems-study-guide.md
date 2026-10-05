---
resourceId: "mb-ap-calcab-5.10-study-guide"
title: "Introduction to Optimization Problems: Study Guide (Calculus AB 5.10)"
description: "Learn the shared structure behind every optimization problem: one quantity, one variable, one interval, then critical points and a test that proves the extreme value."
course: "calculus-ab"
unit: 5
topics: ["5.10"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Critical points and the Extreme Value Theorem (Topic 5.2)"
  - "The first derivative test and the candidates test (Topics 5.4 and 5.5)"
  - "The second derivative test and the single-critical-point idea (Topic 5.7)"
  - "Area and perimeter of rectangles, and rearranging an equation to make one variable the subject"
prerequisiteResources: ["mb-ap-calcab-5.9-study-guide"]
learningObjectives:
  - "Recognise the common structure of optimization problems in different settings: a quantity to optimise, a constraint and an interval"
  - "Write the quantity to optimise as a function of a single variable and state the interval of allowed values"
  - "Find the minimum or maximum value of a function on an interval using critical points"
  - "Confirm an extreme value with the candidates test on a closed interval, or with a single-critical-point argument on an open interval"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise every example here without a calculator. Leave exact answers unless a question asks for a decimal."
related: ["mb-ap-calcab-5.10-revision-notes", "mb-ap-calcab-5.10-practice", "mb-ap-calcab-5.10-checklist"]
next: "mb-ap-calcab-5.10-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "An optimization problem asks for the largest or smallest value of one quantity on an interval."
  - "Every such problem has the same skeleton: the quantity to optimise, a constraint linking the variables, and an interval of allowed values."
  - "Use the constraint to write the quantity as a function of one variable before you differentiate."
  - "Closed interval: compare the function at critical points and endpoints. Open interval: show there is one critical point and that it is the right kind of extremum."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 5.10 is common content, so the same page serves AB and BC students."
  - question: "What is the difference between Topic 5.10 and Topic 5.11?"
    answer: "Topic 5.10 sets up the method: build the function, find the extreme value and prove it is the extreme. Topic 5.11 uses the same method on fuller problems and asks you to explain what the answer means in the situation, with units."
  - question: "Do I always need the second derivative test?"
    answer: "No. On a closed interval the candidates test is enough. On an open interval you can use the first derivative test or the second derivative test, together with the fact that there is only one critical point."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation and words

"Optimise" means find the largest (maximum) or smallest (minimum) value. The **maximum value** is a value of the function, such as 2700 m². The place where it happens, such as x = 30 m, is the **location** of the maximum. Questions often ask for both, so read carefully.

Intervals: [a, b] includes the endpoints and (a, b) does not.

## What an optimization problem is

You already know how to find the absolute maximum and minimum of a function on an interval. In Topic 5.5 you used the candidates test: on a closed interval [a, b], a continuous function takes its extreme values only at critical points or at endpoints, so you evaluate the function at those points and compare.

An optimization problem is that same task with one extra step at the start. The function is not handed to you in finished form. Sometimes it is given as a model ("the number of visitors is N(t) = …"). Often you must build it from a description ("a fence of fixed length encloses the largest possible area"). Once you have a function of one variable on an interval, everything is Topic 5.5 to 5.7 again.

Why derivatives help: if a differentiable function has its largest value at a point inside the interval, the graph must be flat there, so the derivative is 0. That is why the search begins with critical points.

## The common structure

Problems that look very different share one skeleton. Learn to see it before you calculate.

| Part of the skeleton | Fencing problem (Worked example 2) | Number problem | Shape under a curve |
|---|---|---|---|
| Quantity to optimise | Enclosed area A | Sum S of two positive numbers | Area A of a rectangle |
| Variables | Fence lengths x and y | The numbers x and y | Half-width x, height y |
| Constraint | Total fencing is 180 m | Product xy = 64 | Top corners lie on y = 9 − x² |
| One-variable function | A(x) = x(180 − 3x) | S(x) = x + 64/x | A(x) = 2x(9 − x²) |
| Interval | 0 < x < 60 | x > 0 | 0 < x < 3 |

The three rows "constraint", "one-variable function" and "interval" are where the thinking happens. The calculus that follows is the same in every column: differentiate, find critical points, test them.

**Where the interval comes from.** Lengths must be positive. Here, 180 − 3x > 0 gives x < 60, and the curve 9 − x² is above the x-axis only for x < 3. A question about a model usually states the interval directly, for example 0 ≤ t ≤ 10.

## The method

1. **Name the quantity to optimise** and say whether you want a maximum or a minimum.
2. **Draw and label** a diagram if there is a shape. Give every changing length a letter.
3. **Write the quantity as a formula.** It may use two variables at first.
4. **Use the constraint** to replace one variable, so the quantity is a function of a single variable.
5. **State the interval** of allowed values.
6. **Differentiate and find the critical points** inside the interval.
7. **Prove the extreme value.** Closed interval: candidates test. Open interval: show there is only one critical point and use the first or second derivative test to show it is a maximum (or minimum). A continuous function with a single critical point that is a relative maximum on an interval has its absolute maximum there (Topic 5.7).
8. **Answer the question asked**: the value, the location, or both.

Step 7 is the step most often skipped. Finding f′(x) = 0 only finds a candidate. It could be a maximum, a minimum or neither.

## Worked example 1: a model on a closed interval

**Question.** A gallery records how many visitors are inside during a 10-hour day. The number is modelled by

**N(t) = t³ − 18t² + 81t + 40, for 0 ≤ t ≤ 10,**

where t is hours after opening. (The data are fictional.) Find the maximum and minimum number of visitors predicted by the model, and when each occurs.

**Solution.**

1. **The function and interval are given.** N is a polynomial, so it is continuous on the closed interval [0, 10]. The Extreme Value Theorem guarantees a maximum and a minimum, and the candidates test applies.
2. **Differentiate.** N′(t) = 3t² − 36t + 81 = 3(t² − 12t + 27) = 3(t − 3)(t − 9).
3. **Critical points.** N′(t) = 0 at t = 3 and t = 9. Both lie inside [0, 10]. N′ exists everywhere, so there are no others.
4. **Candidates table.**

| t | 0 (endpoint) | 3 (critical) | 9 (critical) | 10 (endpoint) |
|---|---|---|---|---|
| N(t) | 40 | 148 | 40 | 50 |

Working: N(3) = 27 − 162 + 243 + 40 = 148. N(9) = 729 − 1458 + 729 + 40 = 40. N(10) = 1000 − 1800 + 810 + 40 = 50.

5. **Compare.** The largest value is 148 and the smallest is 40.

**Answer.** The model predicts a **maximum of 148 visitors, at t = 3** (3 hours after opening), and a **minimum of 40 visitors**, which occurs twice: **at opening (t = 0) and at t = 9**.

**Check.** N″(t) = 6t − 36, so N″(3) = −18 < 0 (a relative maximum) and N″(9) = 18 > 0 (a relative minimum). That agrees with the table. Notice the endpoint t = 0 ties with the interior minimum, and the endpoint t = 10 (value 50) is higher than the local minimum at t = 9. Skipping endpoints would have missed the tie.

<figure>
<svg viewBox="0 0 520 320" role="img" aria-labelledby="gal-title gal-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="gal-title">Graph of the visitor model N(t) on 0 ≤ t ≤ 10 with the four candidates marked</title>
<desc id="gal-desc">A cubic curve for t from 0 to 10. It starts at (0, 40), rises to a peak at (3, 148), falls to a low point at (9, 40) and rises slightly to (10, 50). The four candidate points are marked: filled squares at the endpoints t = 0 and t = 10, and filled circles at the critical points t = 3 and t = 9. A dashed horizontal line at height 40 shows that the values at t = 0 and t = 9 are equal.</desc>
<rect x="0" y="0" width="520" height="320" fill="#ffffff"/>
<line x1="50" y1="280" x2="510" y2="280" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="60" y1="290" x2="60" y2="20" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="104" y1="276" x2="104" y2="284"/><line x1="148" y1="276" x2="148" y2="284"/><line x1="192" y1="276" x2="192" y2="284"/><line x1="236" y1="276" x2="236" y2="284"/><line x1="280" y1="276" x2="280" y2="284"/><line x1="324" y1="276" x2="324" y2="284"/><line x1="368" y1="276" x2="368" y2="284"/><line x1="412" y1="276" x2="412" y2="284"/><line x1="456" y1="276" x2="456" y2="284"/><line x1="500" y1="276" x2="500" y2="284"/>
<line x1="56" y1="205" x2="64" y2="205"/><line x1="56" y1="130" x2="64" y2="130"/><line x1="56" y1="55" x2="64" y2="55"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="60" y="298">0</text><text x="104" y="298">1</text><text x="148" y="298">2</text><text x="192" y="298">3</text><text x="236" y="298">4</text><text x="280" y="298">5</text><text x="324" y="298">6</text><text x="368" y="298">7</text><text x="412" y="298">8</text><text x="456" y="298">9</text><text x="500" y="298">10</text>
<text x="285" y="315">t (hours after opening)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="52" y="209">50</text><text x="52" y="134">100</text><text x="52" y="59">150</text>
</g>
<text x="66" y="18" font-size="12" fill="#1d2b44">N (visitors)</text>
<line x1="60" y1="220" x2="456" y2="220" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="60.0,220.0 71.0,191.3 82.0,165.8 93.0,143.4 104.0,124.0 115.0,107.4 126.0,93.4 137.0,82.0 148.0,73.0 159.0,66.2 170.0,61.6 181.0,58.9 192.0,58.0 203.0,58.8 214.0,61.2 225.0,65.0 236.0,70.0 247.0,76.2 258.0,83.3 269.0,91.3 280.0,100.0 291.0,109.3 302.0,118.9 313.0,128.9 324.0,139.0 335.0,149.1 346.0,159.1 357.0,168.7 368.0,178.0 379.0,186.7 390.0,194.7 401.0,201.8 412.0,208.0 423.0,213.0 434.0,216.8 445.0,219.2 456.0,220.0 467.0,219.1 478.0,216.4 489.0,211.8 500.0,205.0"/>
<rect x="55" y="215" width="10" height="10" fill="#1d2b44"/>
<rect x="495" y="200" width="10" height="10" fill="#1d2b44"/>
<circle cx="192" cy="58" r="5.5" fill="#1d2b44"/>
<circle cx="456" cy="220" r="5.5" fill="#1d2b44"/>
<g font-size="12" fill="#1d2b44">
<text x="200" y="46">(3, 148): absolute maximum</text>
<text x="70" y="240">(0, 40)</text>
<text x="400" y="244">(9, 40)</text>
<text x="440" y="192">(10, 50)</text>
</g>
</svg>
<figcaption>Figure 1. The visitor model on [0, 10]. Squares mark the endpoints and circles mark the critical points: these four points are the only candidates. The dashed line shows the minimum value 40 occurs at both t = 0 and t = 9. Data are fictional.</figcaption>
</figure>

## Worked example 2: building the function yourself

**Question.** A sports club sets up a rectangular warm-up area against a long straight wall. The wall forms one side, so no fencing is needed there. Portable fencing is used for the other three sides and for one extra fence, perpendicular to the wall, that splits the area into two parts. The club has 180 m of fencing. Find the largest possible total area, and the dimensions that give it.

<figure>
<svg viewBox="0 0 520 230" role="img" aria-labelledby="pen-title pen-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pen-title">Plan view of the warm-up area: a rectangle against a wall, split by one inner fence</title>
<desc id="pen-desc">A plan view. A thick hatched line along the top is the wall. Below it is a rectangle formed by three fences perpendicular to the wall, each labelled x, at the left, middle and right, and one fence parallel to the wall along the bottom, labelled 180 − 3x. The middle fence splits the rectangle into two equal parts.</desc>
<rect x="0" y="0" width="520" height="230" fill="#ffffff"/>
<line x1="70" y1="40" x2="450" y2="40" stroke="#1d2b44" stroke-width="5"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="80" y1="40" x2="70" y2="28"/><line x1="110" y1="40" x2="100" y2="28"/><line x1="140" y1="40" x2="130" y2="28"/><line x1="170" y1="40" x2="160" y2="28"/><line x1="200" y1="40" x2="190" y2="28"/><line x1="230" y1="40" x2="220" y2="28"/><line x1="260" y1="40" x2="250" y2="28"/><line x1="290" y1="40" x2="280" y2="28"/><line x1="320" y1="40" x2="310" y2="28"/><line x1="350" y1="40" x2="340" y2="28"/><line x1="380" y1="40" x2="370" y2="28"/><line x1="410" y1="40" x2="400" y2="28"/><line x1="440" y1="40" x2="430" y2="28"/>
</g>
<text x="260" y="20" font-size="13" fill="#1d2b44" text-anchor="middle">wall (no fencing needed)</text>
<g stroke="#1d2b44" stroke-width="2.5" fill="none">
<polyline points="100,40 100,170 420,170 420,40"/>
<line x1="260" y1="40" x2="260" y2="170"/>
</g>
<g font-size="14" fill="#1d2b44" font-style="italic">
<text x="84" y="110">x</text><text x="266" y="110">x</text><text x="428" y="110">x</text>
</g>
<text x="260" y="194" font-size="14" fill="#1d2b44" text-anchor="middle">180 − 3x</text>
<text x="180" y="110" font-size="12" fill="#1d2b44" text-anchor="middle">part 1</text>
<text x="340" y="110" font-size="12" fill="#1d2b44" text-anchor="middle">part 2</text>
</svg>
<figcaption>Figure 2. The three fences perpendicular to the wall each have length x metres. The fence parallel to the wall uses the rest of the 180 m, so its length is 180 − 3x metres. The thick hatched line is the wall.</figcaption>
</figure>

**Solution.**

1. **Quantity to optimise:** the total area A, in m². We want a maximum.
2. **Variables:** let x be the length of each fence perpendicular to the wall and y the length of the fence parallel to the wall (Figure 2).
3. **Formula:** A = xy.
4. **Constraint:** 3x + y = 180, so y = 180 − 3x. Substitute: **A(x) = x(180 − 3x) = 180x − 3x²**.
5. **Interval:** x > 0 and y = 180 − 3x > 0, so **0 < x < 60**. This is an open interval, so the candidates test does not apply directly.
6. **Critical points:** A′(x) = 180 − 6x = 0 gives x = 30, which is inside (0, 60).
7. **Prove it is the maximum.** A″(x) = −6 < 0, so x = 30 is a relative maximum. It is the **only** critical point in (0, 60), and A is continuous there, so the relative maximum is the absolute maximum on the interval. (Or: A′ > 0 for x < 30 and A′ < 0 for x > 30, so A increases up to x = 30 and decreases after it.)
8. **Answer:** x = 30 m and y = 180 − 90 = 90 m. **The largest area is 30 × 90 = 2700 m²**, with each perpendicular fence 30 m long and the fence parallel to the wall 90 m long.

**Check.** Try a nearby value: A(29) = 29 × 93 = 2697 and A(31) = 31 × 87 = 2697. Both are a little smaller than 2700, as expected. Also, 3 × 30 + 90 = 180, so all the fencing is used.

**Notice the structure.** Exactly the same steps would solve a problem about a box, a can or a pair of numbers. Only steps 2 to 5 change.

## Common misconceptions

- **Differentiating with two variables still in the formula.** Use the constraint first. A = xy cannot be optimised until y is written in terms of x.
- **Stopping at f′(x) = 0.** A critical point is a candidate, not an answer. Show it is a maximum or minimum.
- **Forgetting endpoints on a closed interval.** In Worked example 1 the minimum also occurs at t = 0, an endpoint.
- **Using the second derivative test alone for an absolute extremum.** f″(c) < 0 gives a relative maximum. To call it absolute on an open interval, you also need "it is the only critical point" (or a candidates comparison).
- **Giving the location when the value is asked, or the reverse.** "The maximum is at x = 30" does not answer "what is the largest area?".
- **Ignoring the interval.** A critical point outside the allowed values (a negative length, say) must be rejected.
- **Putting the constraint value into the wrong place.** In Worked example 2, the fencing total includes three lengths x, not two, because of the dividing fence. A labelled diagram prevents this.

## Where this leads

You now have a method that works for any optimization problem. In [Topic 5.11, Solving Optimization Problems](/advanced-course-resources/calculus-ab/5-11-solving-optimization-problems-study-guide/), you apply it to fuller situations and explain what the maximum or minimum means in context, with units. The graph-reading skills from [Topic 5.9](/advanced-course-resources/calculus-ab/5-9-connecting-function-its-first-derivative-study-guide/) help you check that a critical point really is the kind of extremum you need. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/5-10-introduction-optimization-problems-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/5-10-introduction-optimization-problems-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/5-10-introduction-optimization-problems-checklist/) to consolidate.
