---
resourceId: "mb-ap-calcab-7.2-study-guide"
title: "Verifying Solutions for Differential Equations: Study Guide (Calculus AB 7.2)"
description: "Learn how to check that a function solves a differential equation by differentiating and substituting, why one point is not enough, and why there can be infinitely many solutions."
course: "calculus-ab"
unit: 7
topics: ["7.2"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Writing and reading differential equations (Topic 7.1)"
  - "Derivatives of polynomials, exponentials, trig and rational functions, and the chain rule (Units 2 and 3)"
  - "Second derivatives (Topic 3.6)"
prerequisiteResources: ["mb-ap-calcab-7.1-study-guide"]
learningObjectives:
  - "Explain what it means for a function to be a solution of a differential equation"
  - "Verify a proposed solution by finding the derivatives it needs, substituting into both sides and simplifying each side separately"
  - "Explain why checking at one input value does not prove a function is a solution"
  - "Show that a family of functions with an arbitrary constant solves a differential equation, so the equation has infinitely many solutions"
  - "Find an unknown constant that makes a given type of function a solution, including for second-order equations"
skills: ["1", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Every check here is algebra and differentiation. Work without a calculator and keep exact forms such as e^(4x)."
related: ["mb-ap-calcab-7.2-revision-notes", "mb-ap-calcab-7.2-practice", "mb-ap-calcab-7.2-checklist"]
next: "mb-ap-calcab-7.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "A function solves a differential equation if substituting it (and its derivatives) makes both sides equal for every input in an interval."
  - "To verify: differentiate, substitute into the left side and the right side separately, simplify each, and show they are identical."
  - "Equality at one input value proves nothing. You need equality for all inputs in the interval."
  - "A differential equation can have infinitely many solutions, often a family with an arbitrary constant C."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 7.2 is common content, so the same page serves AB and BC students."
  - question: "Do I need to know how the solution was found?"
    answer: "No. To verify, you only need to differentiate the given function and substitute. Finding solutions from scratch comes in Topics 7.6 and 7.7."
  - question: "How can there be more than one solution?"
    answer: "A differential equation only describes how the function changes, not where it starts. Many functions can change in the same way from different starting values. One extra condition, such as a starting value, usually picks out one of them."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## What "solution" means here

In Topic 7.1 you wrote differential equations such as dy/dt = 0.5(4 − y). The unknown in such an equation is a **function**. A solution is a function that makes the equation true.

> **Definition.** A function y = f(x) is a **solution** of a differential equation on an interval if, when you substitute f and its derivatives into the equation, the two sides are equal for **every** x in that interval.

Compare this with an algebra equation. The equation 2x + 3 = 11 is true for one number, x = 4. A differential equation such as dy/dx = 3y must be true as an **identity**: the left side and the right side must be the same expression, whatever x is.

## The verification method

You are given a differential equation and a function. To check it:

1. **Differentiate.** Find every derivative that appears in the equation (y′, and y″ if needed).
2. **Substitute.** Put y, y′ (and y″) into the left side, and separately into the right side.
3. **Simplify each side on its own.** Do not move terms across the equals sign; you are testing whether it is true, so you cannot assume it.
4. **Compare.** If the two sides are identical for all x in the interval, the function is a solution. If they differ for some x, it is not.

**A short example.** Is y = 5e^(3x) a solution of dy/dx = 3y?

- Left side: dy/dx = 15e^(3x) (chain rule: the derivative of 3x is 3).
- Right side: 3y = 3 × 5e^(3x) = 15e^(3x).
- The two sides are identical for every x. So **yes**, y = 5e^(3x) is a solution.

**Write it like this.** Exam answers are clearer if you set the work out as "Left side = … ; Right side = … ; these are equal for all x, so y is a solution." A line of algebra with "= " between the two sides from the start looks like you assumed what you were asked to show.

## Why one point is not enough

A common shortcut is to pick one value, such as x = 0, and check that both sides agree there. This can give the wrong answer.

Take the equation dy/dx = 2y + 2 − 2x² and the candidate y = x² − 1.

- Left side: dy/dx = 2x.
- Right side: 2(x² − 1) + 2 − 2x² = 2x² − 2 + 2 − 2x² = 0.

At x = 0 both sides are 0, so a one-point check would "pass". But the left side is 2x and the right side is 0, so they only agree at x = 0. At x = 1 the left side is 2 and the right side is 0. So y = x² − 1 is **not** a solution.

One point can show a function is **not** a solution (if the sides disagree there). It can never show a function **is** a solution.

## Infinitely many solutions

Differentiating loses information about starting values: y = x² + 7 and y = x² − 3 have the same derivative. In the same way, a differential equation often has a whole **family** of solutions, with an arbitrary constant C. Every value of C gives a different solution, so there are **infinitely many solutions**.

For example, y = Ce^(3x) solves dy/dx = 3y for **every** constant C:

- Left side: dy/dx = 3Ce^(3x).
- Right side: 3y = 3Ce^(3x).

C = 5 gives the solution checked above; C = −2, C = 0.1 and C = 0 are solutions too. (C = 0 gives y = 0, a constant solution: its derivative is 0 and 3 × 0 = 0.)

Figure 1 shows five members of the family that solves dy/dt = 0.5(4 − y), which you will verify in Worked example 1.

<figure>
<svg viewBox="0 0 540 330" role="img" aria-labelledby="fam-title fam-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="fam-title">Five solution curves of dy/dt = 0.5(4 − y), one for each of C = 4, 2, 0, −2 and −4</title>
<desc id="fam-desc">Graph of y against t for t from 0 to 6 and y from 0 to 8. Five curves of the form y = 4 + C e to the power minus t over 2. The curve for C = 4 starts at y = 8 and falls towards 4. The curve for C = 2 starts at 6 and falls towards 4. The curve for C = 0 is the horizontal line y = 4. The curve for C = −2 starts at 2 and rises towards 4. The curve for C = −4 starts at 0 and rises towards 4. The curves never cross. Each curve has a different line style and is labelled at its right-hand end.</desc>
<rect x="0" y="0" width="540" height="330" fill="#ffffff"/>
<line x1="70" y1="280" x2="470" y2="280" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="70" y1="290" x2="70" y2="25" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="297">0</text><text x="135" y="297">1</text><text x="200" y="297">2</text><text x="265" y="297">3</text><text x="330" y="297">4</text><text x="395" y="297">5</text><text x="460" y="297">6</text>
<text x="270" y="320">t</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="284">0</text><text x="62" y="224">2</text><text x="62" y="164">4</text><text x="62" y="104">6</text><text x="62" y="44">8</text>
<text x="62" y="20">y</text>
</g>
<g stroke="#1d2b44" stroke-width="1">
<line x1="135" y1="276" x2="135" y2="284"/><line x1="200" y1="276" x2="200" y2="284"/><line x1="265" y1="276" x2="265" y2="284"/><line x1="330" y1="276" x2="330" y2="284"/><line x1="395" y1="276" x2="395" y2="284"/><line x1="460" y1="276" x2="460" y2="284"/>
<line x1="66" y1="220" x2="74" y2="220"/><line x1="66" y1="160" x2="74" y2="160"/><line x1="66" y1="100" x2="74" y2="100"/><line x1="66" y1="40" x2="74" y2="40"/>
</g>
<g fill="none" stroke="#1d2b44">
<polyline stroke-width="2.5" points="70.0,40.0 86.2,54.1 102.5,66.5 118.8,77.5 135.0,87.2 151.2,95.8 167.5,103.3 183.8,110.0 200.0,115.9 216.2,121.0 232.5,125.6 248.8,129.7 265.0,133.2 281.2,136.4 297.5,139.1 313.8,141.6 330.0,143.8 346.2,145.7 362.5,147.4 378.8,148.8 395.0,150.1 411.2,151.3 427.5,152.3 443.8,153.2 460.0,154.0"/>
<polyline stroke-width="2" stroke-dasharray="8 4" points="70.0,100.0 86.2,107.1 102.5,113.3 118.8,118.8 135.0,123.6 151.2,127.9 167.5,131.7 183.8,135.0 200.0,137.9 216.2,140.5 232.5,142.8 248.8,144.8 265.0,146.6 281.2,148.2 297.5,149.6 313.8,150.8 330.0,151.9 346.2,152.8 362.5,153.7 378.8,154.4 395.0,155.1 411.2,155.7 427.5,156.2 443.8,156.6 460.0,157.0"/>
<polyline stroke-width="3" points="70,160 460,160"/>
<polyline stroke-width="2" stroke-dasharray="2 4" points="70.0,220.0 86.2,212.9 102.5,206.7 118.8,201.2 135.0,196.4 151.2,192.1 167.5,188.3 183.8,185.0 200.0,182.1 216.2,179.5 232.5,177.2 248.8,175.2 265.0,173.4 281.2,171.8 297.5,170.4 313.8,169.2 330.0,168.1 346.2,167.2 362.5,166.3 378.8,165.6 395.0,164.9 411.2,164.3 427.5,163.8 443.8,163.4 460.0,163.0"/>
<polyline stroke-width="2" stroke-dasharray="10 3 2 3" points="70.0,280.0 86.2,265.9 102.5,253.5 118.8,242.5 135.0,232.8 151.2,224.2 167.5,216.7 183.8,210.0 200.0,204.1 216.2,199.0 232.5,194.4 248.8,190.3 265.0,186.8 281.2,183.6 297.5,180.9 313.8,178.4 330.0,176.2 346.2,174.3 362.5,172.6 378.8,171.2 395.0,169.9 411.2,168.7 427.5,167.7 443.8,166.8 460.0,166.0"/>
</g>
<g stroke="#1d2b44" stroke-width="0.8">
<line x1="462" y1="154" x2="478" y2="122"/><line x1="462" y1="157" x2="478" y2="141"/><line x1="462" y1="160" x2="478" y2="160"/><line x1="462" y1="163" x2="478" y2="179"/><line x1="462" y1="166" x2="478" y2="198"/>
</g>
<g font-size="12" fill="#1d2b44">
<text x="482" y="126">C = 4</text><text x="482" y="145">C = 2</text><text x="482" y="164">C = 0</text><text x="482" y="183">C = −2</text><text x="482" y="202">C = −4</text>
</g>
<text x="250" y="60" font-size="12" fill="#1d2b44">y = 4 + Ce^(−t/2)</text>
</svg>
<figcaption>Figure 1. Five solutions of dy/dt = 0.5(4 − y). Each curve starts at y = 4 + C when t = 0, so C = 4, 2, 0, −2, −4 start at 8, 6, 4, 2, 0. Line styles differ so the curves can be told apart without colour. Every curve heads towards y = 4, and the horizontal line y = 4 (C = 0) is itself a solution. Axes are unitless.</figcaption>
</figure>

Two things to notice:

- **The curves never cross.** For this equation, through each starting point there is exactly one solution curve. That is why one extra fact, such as "y = 6 when t = 0", picks out exactly one solution (here C = 2). Using such a fact to find C is the subject of Topic 7.7.
- **The shapes match the equation.** Above y = 4, the right side 0.5(4 − y) is negative, so the curves fall. Below y = 4 it is positive, so they rise. You will draw this kind of picture as a slope field in Topic 7.3.

## Second-order equations

Some differential equations involve y″. The method is the same: find y′ and y″, substitute, and simplify each side.

For example, check that y = sin(2x) solves y″ + 4y = 0:

- y′ = 2cos(2x), y″ = −4sin(2x).
- Left side: y″ + 4y = −4sin(2x) + 4sin(2x) = 0. Right side: 0. Equal for all x, so it is a solution.

For second-order equations, families often have **two** arbitrary constants. Here y = A sin(2x) + B cos(2x) works for any A and B.

## Worked example 1: a family with a constant C

**Question.** Show that y = 4 + Ce^(−t/2) is a solution of dy/dt = 0.5(4 − y) for every constant C. Then decide whether y = 4 + e^(t/2) is a solution.

**Part 1.**

1. **Differentiate.** The 4 is constant, so its derivative is 0. By the chain rule, the derivative of e^(−t/2) is −(1/2)e^(−t/2). So
   **dy/dt = −0.5Ce^(−t/2)**.
2. **Right side.** Substitute y:
   0.5(4 − y) = 0.5(4 − 4 − Ce^(−t/2)) = 0.5(−Ce^(−t/2)) = **−0.5Ce^(−t/2)**.
3. **Compare.** Left side = right side = −0.5Ce^(−t/2) for every t, and C was never given a value. So the function is a solution for **every** constant C.

**Conclusion.** The equation has infinitely many solutions, one for each value of C, including the constant solution y = 4 (C = 0).

**Part 2.** For y = 4 + e^(t/2):

- Left side: dy/dt = 0.5e^(t/2).
- Right side: 0.5(4 − 4 − e^(t/2)) = −0.5e^(t/2).

These are negatives of each other. They are never equal, because e^(t/2) > 0 for all t. So y = 4 + e^(t/2) is **not** a solution.

**Interpretation.** This is the Topic 7.1 cooling-type model: the rate is proportional to the gap between y and 4. A true solution moves **towards** 4. The rejected function moves away from 4, so it was never going to fit the story.

## Worked example 2: finding a constant that makes it work

**Question.** For which values of r is y = e^(rx) a solution of y″ − 2y′ − 8y = 0? Then show that y = 3e^(4x) − 5e^(−2x) is also a solution.

**Part 1.**

1. **Differentiate.** y′ = re^(rx), y″ = r²e^(rx).
2. **Substitute into the left side.**
   r²e^(rx) − 2re^(rx) − 8e^(rx) = e^(rx)(r² − 2r − 8).
3. **Make it zero for all x.** e^(rx) is never 0, so the left side is 0 for every x exactly when
   r² − 2r − 8 = 0, that is (r − 4)(r + 2) = 0.
4. **Answer.** **r = 4 or r = −2.** So y = e^(4x) and y = e^(−2x) are both solutions.

**Part 2.** Let y = 3e^(4x) − 5e^(−2x).

- y′ = 12e^(4x) + 10e^(−2x).
- y″ = 48e^(4x) − 20e^(−2x).
- Left side: y″ − 2y′ − 8y
  = (48e^(4x) − 20e^(−2x)) − (24e^(4x) + 20e^(−2x)) − (24e^(4x) − 40e^(−2x))
  = (48 − 24 − 24)e^(4x) + (−20 − 20 + 40)e^(−2x) = 0.
- Right side: 0. Equal for all x, so it **is** a solution.

**Check a near miss.** y = e^(4x) + 1 is not a solution. The e^(4x) terms still cancel, but the constant 1 contributes −8 × 1 = −8, so the left side is −8, not 0. Adding a constant to a solution does not always give another solution: it depends on the equation.

## Worked example 3: watch the interval

**Question.** Show that y = 2/(x² + C) satisfies dy/dx = −xy² for every constant C. What happens when C = −4?

1. **Differentiate.** Write y = 2(x² + C)^(−1). By the chain rule,
   dy/dx = −2(x² + C)^(−2) × 2x = **−4x/(x² + C)²**.
2. **Right side.** y² = 4/(x² + C)², so −xy² = **−4x/(x² + C)²**.
3. **Compare.** The two sides are identical wherever y is defined. So the function is a solution for every C.

**When C = −4,** y = 2/(x² − 4) is undefined at x = 2 and x = −2. It is a solution only on an interval that avoids those values, such as x > 2 or −2 < x < 2. A solution must be differentiable on the whole interval you claim.

**One more solution.** y = 0 is also a solution (left side 0, right side −x × 0 = 0), but no value of C gives y = 0. So a family with a constant does not always list every solution.

## Common misconceptions

- **"It works at x = 0, so it is a solution."** Equality at one point proves nothing. Show the sides are identical for all x in the interval.
- **Assuming what you are checking.** Do not start with "y′ = 3y" and manipulate both sides. Simplify each side separately, then compare.
- **Treating C as a variable.** C is a constant, so the derivative of Ce^(3x) is 3Ce^(3x), and the derivative of a lone C is 0.
- **"A differential equation has one solution."** Usually there are infinitely many. An extra condition picks out one.
- **Forgetting the chain rule.** The derivative of e^(−t/2) is −(1/2)e^(−t/2), not e^(−t/2).
- **Checking only y′ in a second-order equation.** If y″ appears, you must find y″ and substitute it.
- **Ignoring where the function is defined.** A formula that blows up at x = 2 is only a solution on intervals that avoid x = 2.
- **Mixing up the variables.** If the equation uses t, differentiate with respect to t.

## Where this leads

Verifying solutions is the check you will use throughout Unit 7. In [Topic 7.3](/advanced-course-resources/calculus-ab/7-3-sketching-slope-fields-study-guide/) you draw slope fields, which show the whole family of solution curves at once, as in Figure 1. In Topics 7.6 and 7.7 you find solutions yourself, and then use an initial condition to choose one member of the family. After solving, substituting back is the best way to check your answer. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/7-2-verifying-solutions-differential-equations-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/7-2-verifying-solutions-differential-equations-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/7-2-verifying-solutions-differential-equations-checklist/) to consolidate.
