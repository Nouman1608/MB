---
resourceId: "mb-ap-calcab-4.6-study-guide"
title: "Local Linearity and Linearization: Study Guide (Calculus AB 4.6)"
description: "Learn how the tangent line gives a local linear approximation of a function, how to use it to estimate values, and how to tell whether an estimate is too high or too low."
course: "calculus-ab"
unit: 4
topics: ["4.6"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "The derivative as the slope of the tangent line, and the equation of a tangent line (Topics 2.1 to 2.3)"
  - "Derivatives of powers, roots and composite functions (Units 2 and 3)"
  - "Second derivatives (Topic 3.6)"
  - "Interpreting a derivative in context, with units (Topics 4.1 and 4.3)"
learningObjectives:
  - "Explain why a differentiable function looks almost straight when you zoom in near a point"
  - "Write the linearization L(x) = f(a) + f′(a)(x − a) and use it to estimate a function value"
  - "Choose a sensible point of tangency for an estimate"
  - "Use the shape of the graph or the sign of the second derivative to decide whether an estimate is an overestimate or an underestimate"
  - "Explain in context how an estimate relates to the actual value and why it gets worse further from the point of tangency"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Every estimate here is designed to be done by hand. Calculator values of the actual function are shown only to compare with the estimates."
related: ["mb-ap-calcab-4.6-revision-notes", "mb-ap-calcab-4.6-practice", "mb-ap-calcab-4.6-checklist"]
next: "mb-ap-calcab-4.6-practice"
prerequisiteResources: ["mb-ap-calcab-4.5-study-guide"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Near the point of tangency, the tangent line is a good approximation to the curve. This is called local linearity."
  - "The linearization of f at x = a is L(x) = f(a) + f′(a)(x − a). Use f(x) ≈ L(x) for x close to a."
  - "If the curve bends upward (f″ > 0) near a, the tangent line lies below it, so the estimate is an underestimate. If the curve bends downward (f″ < 0), it is an overestimate."
  - "The further x is from a, the less reliable the estimate."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 4.6 is common content, so the same page serves AB and BC students."
  - question: "Is a tangent line approximation the same as a linearization?"
    answer: "Yes. 'Tangent line approximation', 'local linear approximation' and 'linearization' all mean using the tangent line at x = a to estimate f(x) for x near a."
  - question: "Does the sign of f′(a) tell me whether the estimate is too high or too low?"
    answer: "No. The sign of f′(a) only says whether the tangent line slopes up or down. Over or under depends on how the curve bends near a, which the second derivative describes."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## Zoom in and the curve looks straight

Take the graph of a function that is differentiable at x = a. Zoom in on the point (a, f(a)) again and again. The curve looks less and less curved. After enough zooming it is hard to tell apart from a straight line, and that line is the **tangent line** at a.

This property is called **local linearity**. "Local" means it only works close to a. Far from a, the curve can bend away from the line.

Local linearity is what makes the tangent line useful. Straight lines are easy to evaluate. Many functions, such as ∛x or 1/x, are not easy to evaluate by hand. Near a point where you know the function's value and slope, you can use the line instead of the curve.

## The linearization formula

The tangent line at x = a passes through (a, f(a)) and has slope f′(a). In point-slope form:

> **L(x) = f(a) + f′(a)(x − a)**

L is called the **linearization** of f at a. For x close to a,

**f(x) ≈ L(x)**

Read the formula as a sentence: "start at the known value f(a), then add the slope times the step". The step is x − a, and it can be positive or negative.

The same idea in "change" form:

**change in f ≈ f′(a) × (change in x)**

This is the estimate "rate × step" that Topics 4.1 and 4.3 hinted at. A derivative of 1.5 units per minute suggests a change of about 1.5 × 3 = 4.5 units over the next 3 minutes, as long as the rate does not change much over that time.

**Choosing the point a.** Pick a point where (1) f(a) and f′(a) are known or easy to work out by hand, and (2) a is as close as possible to the x you care about. To estimate ∛8.3, use a = 8, because ∛8 = 2 exactly and 8 is close to 8.3.

**Differentiability matters.** The method needs f′(a) to exist. At a corner, such as x = 0 on y = |x|, zooming in never produces a single line, so there is no linearization there.

## Seeing the estimate and its error

<figure>
<svg viewBox="0 0 540 310" role="img" aria-labelledby="lin-title lin-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="lin-title">The curve y = cube root of x with its tangent line at x = 8</title>
<desc id="lin-desc">Graph of y equals the cube root of x for x from 2 to 20, bending downward. A straight tangent line touches the curve at the point (8, 2). Everywhere except at that point, the tangent line lies above the curve. At x = 18 a vertical bracket marks the gap between the line, at height about 2.83, and the curve, at height about 2.62. The gap is labelled "error". Close to x = 8 the line and the curve are almost on top of each other. The y-axis starts at 1.</desc>
<rect x="0" y="0" width="540" height="310" fill="#ffffff"/>
<line x1="60" y1="260" x2="515" y2="260" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="60" y1="275" x2="60" y2="10" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="60" y="278">0</text><text x="148" y="278">4</text><text x="236" y="278">8</text><text x="324" y="278">12</text><text x="412" y="278">16</text><text x="500" y="278">20</text>
<text x="525" y="264">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="53" y="264">1</text><text x="53" y="204">1.5</text><text x="53" y="144">2</text><text x="53" y="84">2.5</text><text x="53" y="24">3</text>
</g>
<g stroke="#1d2b44" stroke-width="1">
<line x1="148" y1="256" x2="148" y2="264"/><line x1="236" y1="256" x2="236" y2="264"/><line x1="324" y1="256" x2="324" y2="264"/><line x1="412" y1="256" x2="412" y2="264"/><line x1="500" y1="256" x2="500" y2="264"/>
<line x1="56" y1="200" x2="64" y2="200"/><line x1="56" y1="140" x2="64" y2="140"/><line x1="56" y1="80" x2="64" y2="80"/><line x1="56" y1="20" x2="64" y2="20"/>
</g>
<polyline points="104,228.8 148,189.5 192,161.9 236,140 280,121.5 324,105.3 368,90.8 412,77.6 456,65.5 500,54.3" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="104" y1="200" x2="500" y2="20" stroke="#1d2b44" stroke-width="2" stroke-dasharray="8 5"/>
<circle cx="236" cy="140" r="5" fill="#1d2b44"/>
<text x="244" y="158" font-size="13" fill="#1d2b44">(8, 2)</text>
<line x1="456" y1="40" x2="456" y2="65.5" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="450" y1="40" x2="462" y2="40" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="450" y1="65.5" x2="462" y2="65.5" stroke="#1d2b44" stroke-width="1.5"/>
<text x="466" y="57" font-size="12" fill="#1d2b44">error</text>
<text x="300" y="62" font-size="13" fill="#1d2b44">dashed: tangent line L</text>
<text x="330" y="140" font-size="13" fill="#1d2b44">solid: y = ∛x</text>
</svg>
<figcaption>Figure 1. The tangent line to y = ∛x at (8, 2) is L(x) = 2 + (x − 8)/12. Near x = 8 the line and the curve almost coincide. The curve bends downward, so the line lies above it on both sides of 8, and the gap (the error) grows as x moves away from 8. The y-axis starts at 1.</figcaption>
</figure>

Two facts can be read from the picture:

1. **The error grows with distance from a.** At x = 8.3 the gap is tiny. At x = 18 you can see it clearly.
2. **The bend decides the direction of the error.** Here the curve bends downward and the line sits above it, so every estimate from this line is too high.

## Overestimate or underestimate?

How the curve bends near a decides on which side of the curve the tangent line lies.

| Near x = a the graph… | The tangent line lies… | The estimate L(x) is… | Second derivative |
|---|---|---|---|
| bends upward (slope increasing) | below the curve | an **underestimate** | f″(x) > 0 near a |
| bends downward (slope decreasing) | above the curve | an **overestimate** | f″(x) < 0 near a |

Why the second derivative? f″ is the rate of change of f′. If f″ > 0 near a, the slope of the curve is increasing.

- To the right of a, the curve's slope is bigger than f′(a). The curve climbs faster than the line, so it pulls above the line.
- To the left of a, the curve's slope is smaller than f′(a). Reading from left to right, the curve gains height more slowly than the line, yet the two meet at a. So the curve must start above the line on this side too.

Either way the curve is above the line, and the estimate is too low. The case f″ < 0 is the mirror image.

Topic 5.6 gives this behaviour its formal name, **concavity**: f″ > 0 means concave up and f″ < 0 means concave down. For now, what you need is the link between the sign of f″ near a and the direction of the error.

Three cautions:

- **Look at f″ near a, on the side where x is.** If f″ changes sign at a, the answer can be different on the two sides of a.
- **The sign of f′ does not decide it.** An increasing function can give overestimates or underestimates.
- **If you cannot tell how the curve bends**, you cannot say whether the estimate is too high or too low. Say so.

## Worked example 1: estimating a cube root

**Question.** Use a tangent line approximation to estimate ∛8.3. Is your estimate too high or too low?

1. **Choose a.** Let f(x) = ∛x = x^(1/3). Use a = 8: f(8) = 2, and 8 is close to 8.3.
2. **Find the slope.** f′(x) = (1/3)x^(−2/3), so f′(8) = (1/3) × 8^(−2/3) = (1/3) × (1/4) = 1/12.
3. **Write the linearization.** L(x) = 2 + (1/12)(x − 8).
4. **Estimate.** ∛8.3 ≈ L(8.3) = 2 + (1/12)(0.3) = 2 + 0.025 = **2.025**.
5. **Over or under?** f″(x) = −(2/9)x^(−5/3). For x > 0 this is negative, so the curve bends downward and the tangent line lies above it. The estimate **2.025 is an overestimate**.

**Check.** A calculator gives ∛8.3 ≈ 2.02469. The estimate is too high by about 0.0003, as predicted. You can also check by hand: 2.025³ ≈ 8.304, slightly more than 8.3.

**How the error grows.** Using the same line further from 8:

| x | Estimate L(x) | Actual ∛x | Error L(x) − ∛x |
|---|---|---|---|
| 8.3 | 2.025 | 2.0247 | about 0.0003 |
| 10 | 2.1667 | 2.1544 | about 0.012 |
| 27 | 3.5833 | 3 | about 0.58 |

At x = 27 the estimate is useless. Local linearity is a statement about points close to a.

## Worked example 2: a phone battery (context)

**Situation.** B(t) is the charge of a phone battery, as a percentage, t minutes after it is plugged in. You are told that B(20) = 64 and B′(20) = 1.5. In this model the charging slows down as the battery fills, so B″(t) < 0 for the times in this question.

**Questions.** (a) Estimate the charge at t = 23. (b) Estimate the charge at t = 18. (c) Are these estimates too high or too low? (d) Why would it be unwise to use the same line to estimate B(60)?

**(a)**

1. **Linearization at a = 20:** L(t) = 64 + 1.5(t − 20).
2. **Estimate:** B(23) ≈ 64 + 1.5(3) = 64 + 4.5 = **68.5%**.

**Interpretation.** About 23 minutes after being plugged in, the battery is charged to approximately 68.5%.

**(b)** B(18) ≈ 64 + 1.5(−2) = 64 − 3 = **61%**. The step is negative because 18 is before 20.

**(c)** B″(t) < 0, so the graph of B bends downward and the tangent line lies **above** it on both sides of t = 20. Both estimates are **overestimates**: the actual charge at t = 23 is less than 68.5%, and at t = 18 it is less than 61%.

Think about (a) in context. The estimate assumes the battery keeps gaining 1.5% per minute for three minutes. But charging is slowing down, so it actually gains less than 4.5%. That is why the estimate is too high.

**(d)** At t = 60 the step is 40 minutes. The line would give 64 + 1.5(40) = 124%, which is impossible for a battery. Over a long interval the rate changes a lot, so a single tangent line is no longer a good model.

## Worked example 3: a function known only through its derivative

**Question.** A function f satisfies f(1) = 3 and f′(x) = √(x³ + 3). Estimate f(1.2), and decide whether the estimate is too high or too low.

1. **Slope at a = 1:** f′(1) = √(1 + 3) = √4 = 2.
2. **Linearization:** L(x) = 3 + 2(x − 1).
3. **Estimate:** f(1.2) ≈ 3 + 2(0.2) = **3.4**.
4. **Second derivative** (chain rule): f″(x) = 3x²/(2√(x³ + 3)). For x near 1 the top is positive and the bottom is positive, so f″(x) > 0. (At x = 1 it equals 3/4.)
5. **Conclusion.** The graph of f bends upward near x = 1, so the tangent line lies below it. **3.4 is an underestimate** of f(1.2).

You do not need a formula for f itself. A value and a derivative are enough for the estimate, and the second derivative is enough to judge its direction.

## Common misconceptions

- **Using f′(x) instead of f′(a).** The slope must be the value at the point of tangency. In L(x) = f(a) + f′(a)(x − a), only the last x is a variable.
- **Forgetting f(a).** f′(a)(x − a) is only the change. Add the starting value.
- **Using x instead of (x − a).** L(8.3) = 2 + (1/12)(8.3) is wrong; the step is 0.3, not 8.3.
- **Mixing up over and under.** Curve bending upward means the line is below it: underestimate. Sketch a quick curve if you are unsure.
- **Deciding over or under from the sign of f′.** The slope's sign is not the deciding factor; the bend is.
- **Claiming the estimate equals the actual value.** Use "≈" and the word "approximately" in your answer.
- **Using the line far from a.** The error grows with distance, as the table in Worked example 1 shows.
- **Writing a linearization at a corner.** If f is not differentiable at a, there is no tangent line to use.

## Where this leads

Tangent line approximations come back often. In Topic 4.7, L'Hospital's rule can be understood through local linearity: near a point where top and bottom are both 0, each behaves like its tangent line. In Unit 5 you will study concavity in depth. In Unit 7, Euler's method (Calculus BC) builds a solution of a differential equation from many short tangent-line steps. Continue to [Topic 4.7, Using L'Hospital's Rule for Determining Limits of Indeterminate Forms](/advanced-course-resources/calculus-ab/4-7-lhospitals-rule-determining-limits-indeterminate-study-guide/), or go back to [Topic 4.5, Solving Related Rates Problems](/advanced-course-resources/calculus-ab/4-5-solving-related-rates-problems-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/4-6-approximating-values-function-local-linearity-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/4-6-approximating-values-function-local-linearity-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/4-6-approximating-values-function-local-linearity-checklist/) to consolidate.
