---
resourceId: "mb-ap-calcbc-9.2-study-guide"
title: "Second Derivatives of Parametric Equations: Study Guide (Calculus BC 9.2)"
description: "How to find d²y/dx² for a parametric curve by differentiating dy/dx with respect to t and dividing by dx/dt, and how to use it for concavity and tangent-line estimates."
course: "calculus-bc"
unit: 9
topics: ["9.2"]
resourceType: "study-guide"
calculusScope: "bc-only"
prerequisites:
  - "dy/dx for a parametric curve (Topic 9.1)"
  - "The quotient rule and the chain rule (Topics 2.9 and 3.1)"
  - "Second derivatives and concavity (Topics 3.6 and 5.6)"
  - "Tangent-line approximation (Topic 4.6)"
prerequisiteResources: ["mb-ap-calcbc-9.1-study-guide"]
learningObjectives:
  - "Explain why d²y/dx² is not d²y/dt² divided by d²x/dt² for a parametric curve"
  - "Find d²y/dx² by differentiating dy/dx with respect to t and dividing by dx/dt"
  - "Evaluate d²y/dx² at a value of t and state the concavity of the curve there"
  - "Find the values of t for which a parametric curve is concave up or concave down, taking the sign of dx/dt into account"
  - "Decide whether a tangent-line approximation to a parametric curve is an overestimate or an underestimate"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "stretch"
calculator: "mixed"
calculatorNote: "Second derivatives are found by hand: this is a no-calculator skill. Where a calculator is allowed, you may use it to evaluate expressions at a decimal value of t, but show the setup. Angles are in radians."
related: ["mb-ap-calcbc-9.2-revision-notes", "mb-ap-calcbc-9.2-practice", "mb-ap-calcbc-9.2-checklist"]
next: "mb-ap-calcbc-9.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only: this topic is not part of Calculus AB."
  - "d²y/dx² = [d/dt (dy/dx)] ÷ (dx/dt). Differentiate the slope with respect to t, then divide by dx/dt again."
  - "d²y/dx² is not (d²y/dt²) ÷ (d²x/dt²). That shortcut gives wrong answers."
  - "d²y/dx² > 0 means concave up; d²y/dx² < 0 means concave down. When dx/dt < 0, the sign of d/dt (dy/dx) is the opposite of the concavity."
  - "Concave down: the tangent line lies above the curve nearby, so a tangent-line estimate is too big. Concave up: too small."
faqs:
  - question: "Do Calculus AB students need this?"
    answer: "No. Parametric second derivatives are BC-only content. AB students can skip this page."
  - question: "Why do I divide by dx/dt a second time?"
    answer: "dy/dx is a function of t, but d²y/dx² asks how it changes with x. The chain rule converts a t-derivative into an x-derivative by dividing by dx/dt, exactly as in Topic 9.1."
  - question: "Do I need the formula (x′y″ − y′x″)/(x′)³?"
    answer: "No. It is an optional check that gives the same answer. The method of differentiating dy/dx and dividing by dx/dt always works and is easier to remember."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**BC-only material.** Parametric equations are part of Calculus BC only. Calculus AB students do not need this topic.

## Before you start: prerequisites

You need these earlier ideas. If any is shaky, revisit it from the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) first.

| Prerequisite | Topic | What you use it for here |
|---|---|---|
| dy/dx = (dy/dt) ÷ (dx/dt) | 9.1 | The first step, and the same idea used again |
| Quotient rule and chain rule | 2.9, 3.1 | dy/dx is often a quotient of functions of t |
| Second derivatives and concavity | 3.6, 5.6 | Reading the sign of d²y/dx² |
| Tangent-line approximation | 4.6 | Deciding if an estimate is too big or too small |

Notation on this page: x′(t) = dx/dt, y′(t) = dy/dt, and x″(t), y″(t) are the second derivatives **with respect to t**. Angles are in radians. You should already be confident with [Topic 9.1](/advanced-course-resources/calculus-bc/9-1-defining-differentiating-parametric-equations-study-guide/).

## The tempting shortcut that fails

For y = f(x), the second derivative d²y/dx² measures how the slope changes as x changes. Its sign gives the concavity.

For a parametric curve, it is tempting to differentiate x and y twice with respect to t and divide: d²y/dt² ÷ d²x/dt². **This is wrong.** Here is a quick test.

Take x = 2t, y = t². Eliminating t gives y = x²/4, so the true second derivative is **d²y/dx² = ½** everywhere. But d²y/dt² = 2 and d²x/dt² = 0, so the shortcut gives 2 ÷ 0, which is undefined. The shortcut fails even on a simple parabola.

The reason: d²y/dx² means "the derivative **with respect to x** of dy/dx". Nothing in the shortcut takes a derivative with respect to x.

## Deriving the correct method

Call the slope m = dy/dx. In a parametric problem, m is a function of t. We want dm/dx, the rate at which the slope changes as x changes.

This is exactly the problem from Topic 9.1, with m in place of y. The chain rule gives dm/dt = (dm/dx)(dx/dt), so, provided dx/dt ≠ 0,

> **d²y/dx² = dm/dx = [d/dt (dy/dx)] ÷ (dx/dt)**

Check with x = 2t, y = t²: dy/dx = 2t/2 = t. Then d/dt (t) = 1, and 1 ÷ (dx/dt) = 1 ÷ 2 = **½**. ✓ This matches y = x²/4.

**The method in four steps.**

1. Find dx/dt and dy/dt.
2. Find dy/dx = (dy/dt) ÷ (dx/dt), and **simplify it** as a function of t.
3. Differentiate dy/dx **with respect to t**.
4. Divide the result by dx/dt.

Simplifying in step 2 saves a lot of quotient-rule work in step 3.

**Background: a single formula.** If you apply the quotient rule to (y′/x′) and divide by x′, you get d²y/dx² = (x′y″ − y′x″) ÷ (x′)³. It gives the same answer and can be used as a check. You do not need to memorise it.

## What the sign tells you

Once you have d²y/dx², you read it exactly as for y = f(x):

| Sign of d²y/dx² | Shape near the point | Tangent line nearby | Tangent-line estimate |
|---|---|---|---|
| Positive | Concave up | Lies below the curve | Underestimate |
| Negative | Concave down | Lies above the curve | Overestimate |

**Watch the sign of dx/dt.** In step 4 you divide by dx/dt. If dx/dt < 0 (the point is moving left), dividing flips the sign. So d/dt (dy/dx) > 0 does **not** always mean concave up. Worked example 2 shows this happening.

## Worked example 1: a second derivative at a point

**Question.** A curve is given by x = 4 sin t, y = 2 cos 2t. Without a calculator, find d²y/dx² at t = π/6 and state the concavity there.

1. **First derivatives.** dx/dt = 4 cos t. dy/dt = −4 sin 2t (chain rule: d/dt [cos 2t] = −2 sin 2t).
2. **dy/dx, simplified.** Use sin 2t = 2 sin t cos t:
   dy/dx = (−4 sin 2t)/(4 cos t) = (−8 sin t cos t)/(4 cos t) = **−2 sin t**, for cos t ≠ 0.
3. **Differentiate with respect to t.** d/dt (−2 sin t) = −2 cos t.
4. **Divide by dx/dt.** d²y/dx² = (−2 cos t)/(4 cos t) = **−½**, for cos t ≠ 0.
5. **At t = π/6.** The point is (4 · ½, 2 cos(π/3)) = (2, 1). The slope is −2 sin(π/6) = −1, and **d²y/dx² = −½ < 0**, so the curve is **concave down** there.

**Check by eliminating t.** cos 2t = 1 − 2 sin²t, so y = 2 − 4 sin²t = 2 − x²/4. Then dy/dx = −x/2 = −2 sin t ✓ and d²y/dx² = −½ ✓. The curve is part of a downward parabola.

**The wrong shortcut here.** d²y/dt² = −8 cos 2t = −4 and d²x/dt² = −4 sin t = −2 at t = π/6, giving (−4) ÷ (−2) = 2. That has the wrong sign and the wrong size, and would wrongly say "concave up".

## Worked example 2: concavity on intervals, and a tangent-line estimate

**Question.** A curve is given by x = t² + 2t and y = t³ − 3t (Figure 1).
(a) Find dy/dx and d²y/dx² in terms of t.
(b) For which values of t is the curve concave up? Concave down?
(c) Use the tangent line at t = 0 to estimate y when x = 0.2 on the same part of the curve. Is the estimate too big or too small?

<figure>
<svg viewBox="0 0 540 380" role="img" aria-labelledby="p92-title p92-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p92-title">The curve x = t² + 2t, y = t³ − 3t, showing a concave-down part and a concave-up part</title>
<desc id="p92-desc">Graph on x and y axes, x from −1.5 to 9.5 and y from −7 to 4.5. Both parts of the curve meet at a sharp point (a cusp) at (−1, 2) when t = −1. The part for t less than −1 comes in from the lower right near (0.96, −6.6), passes through (0, −2), and rises steeply to the cusp, bending so that it is concave down; an arrow shows it moving up and to the left. The part for t greater than −1 leaves the cusp going down and to the right, passes through the origin at t = 0, reaches a lowest point (3, −2) at t = 1, and then rises to (8, 2) and beyond, bending so that it is concave up; an arrow shows it moving to the right. A dashed tangent line through the origin with slope −3/2 lies just below the concave-up part.</desc>
<defs><marker id="arr92" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="540" height="380" fill="#ffffff"/>
<line x1="70" y1="156" x2="520" y2="156" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="130" y1="360" x2="130" y2="25" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="90" y1="152" x2="90" y2="160"/><line x1="210" y1="152" x2="210" y2="160"/><line x1="290" y1="152" x2="290" y2="160"/><line x1="370" y1="152" x2="370" y2="160"/><line x1="450" y1="152" x2="450" y2="160"/>
<line x1="126" y1="44" x2="134" y2="44"/><line x1="126" y1="100" x2="134" y2="100"/><line x1="126" y1="212" x2="134" y2="212"/><line x1="126" y1="268" x2="134" y2="268"/><line x1="126" y1="324" x2="134" y2="324"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="210" y="172">2</text><text x="290" y="172">4</text><text x="370" y="172">6</text><text x="450" y="172">8</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="122" y="48">4</text><text x="122" y="104">2</text><text x="122" y="216">−2</text><text x="122" y="272">−4</text><text x="122" y="328">−6</text>
</g>
<text x="528" y="160" font-size="14" fill="#1d2b44">x</text>
<text x="136" y="24" font-size="14" fill="#1d2b44">y</text>
<line x1="110" y1="135" x2="190" y2="219" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="7 4"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="10 3" points="168.4,341.5 162.9,322.0 157.6,303.5 152.5,285.9 147.6,269.3 142.9,253.7 138.4,238.9 134.1,225.0 130.0,212.0 126.1,199.8 122.4,188.5 118.9,177.9 115.6,168.1 112.5,159.1 109.6,150.8 106.9,143.2 104.4,136.3 102.1,130.1 100.0,124.5 98.1,119.6 96.4,115.2 94.9,111.5 93.6,108.3 92.5,105.7 91.6,103.6 90.9,102.0 90.4,100.9 90.1,100.2 90.0,100.0"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="90.0,100.0 90.2,100.4 90.7,101.4 91.6,103.1 92.8,105.4 94.4,108.3 96.4,111.6 98.7,115.4 101.4,119.6 104.4,124.2 107.8,129.0 111.5,134.1 115.6,139.4 120.0,144.9 124.8,150.4 130.0,156.0 135.5,161.6 141.4,167.1 147.6,172.6 154.2,177.9 161.1,183.0 168.4,187.8 176.0,192.4 184.0,196.6 192.4,200.4 201.1,203.7 210.2,206.6 219.6,208.9 229.4,210.6 239.5,211.6 250.0,212.0 260.8,211.6 272.0,210.4 283.6,208.4 295.5,205.5 307.8,201.6 320.4,196.8 333.4,190.9 346.7,183.9 360.4,175.7 374.4,166.4 388.8,155.8 403.6,143.9 418.7,130.7 434.2,116.1 450.0,100.0 466.2,82.4 482.7,63.3 499.6,42.7"/>
<line x1="122.4" y1="188.5" x2="112.5" y2="159.1" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#arr92)"/>
<line x1="414.9" y1="134.1" x2="438.1" y2="112.2" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#arr92)"/>
<line x1="134" y1="78" x2="96" y2="96" stroke="#1d2b44" stroke-width="1"/>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="2">
<circle cx="90" cy="100" r="4.5"/><circle cx="130" cy="156" r="4.5"/><circle cx="250" cy="212" r="4.5"/>
</g>
<g font-size="12" fill="#1d2b44">
<text x="138" y="78">cusp at t = −1, point (−1, 2)</text>
<text x="140" y="148">t = 0</text>
<text x="250" y="198" text-anchor="middle">t = 1</text>
<text x="192" y="230">tangent at t = 0</text>
<text x="300" y="252">solid part, t &gt; −1:</text>
<text x="300" y="267">concave up, d²y/dx² &gt; 0</text>
<text x="176" y="300">dashed part, t &lt; −1:</text>
<text x="176" y="315">concave down, d²y/dx² &lt; 0</text>
</g>
</svg>
<figcaption>Figure 1. The curve x = t² + 2t, y = t³ − 3t for −2.4 ≤ t ≤ 2.2. The part for t &lt; −1 (long dashes) is concave down and moves up and left towards the cusp at (−1, 2); the part for t &gt; −1 (solid) is concave up and moves to the right. The short-dashed line is the tangent at t = 0, which lies below the concave-up part.</figcaption>
</figure>

**(a) First and second derivatives.**

1. dx/dt = 2t + 2 = 2(t + 1). dy/dt = 3t² − 3 = 3(t − 1)(t + 1).
2. dy/dx = 3(t − 1)(t + 1) ÷ 2(t + 1) = **3(t − 1)/2**, for t ≠ −1.
3. d/dt (dy/dx) = **3/2**. This is positive for every t.
4. d²y/dx² = (3/2) ÷ 2(t + 1) = **3 / (4(t + 1))**, for t ≠ −1.

**(b) Concavity.**

- For t > −1: t + 1 > 0, so d²y/dx² > 0 and the curve is **concave up**.
- For t < −1: t + 1 < 0, so d²y/dx² < 0 and the curve is **concave down**.
- At t = −1, dx/dt = 0 and dy/dt = 0, so dy/dx and d²y/dx² are not defined there. Figure 1 shows a sharp point (a cusp) at (−1, 2).

Notice that d/dt (dy/dx) = 3/2 is positive for **all** t, yet the curve is concave down for t < −1. The difference comes from dividing by dx/dt, which is negative when t < −1 (the point is moving left).

**(c) Tangent-line estimate.**

1. At t = 0: the point is (0, 0), the slope is 3(0 − 1)/2 = −3/2, and d²y/dx² = 3/4.
2. Tangent line: y = −1.5x. At x = 0.2 it gives **y ≈ −0.3**.
3. d²y/dx² = 3/4 > 0, so the curve is concave up near t = 0. The tangent line lies below the curve, so the estimate **−0.3 is an underestimate**.

**Checks.**
- *Actual value:* x = 0.2 gives t² + 2t − 0.2 = 0, so t = −1 + √1.2 ≈ 0.0954 on this part of the curve. Then y ≈ −0.2855, which is greater than −0.3. ✓ Underestimate.
- *Why "same part" matters:* x = 0.2 also occurs at t = −1 − √1.2 ≈ −2.095 on the concave-down part, where y ≈ −2.91. The tangent line at t = 0 says nothing about that point.
- *Optional formula:* (x′y″ − y′x″)/(x′)³ = [2(t + 1) · 6t − 3(t² − 1) · 2] / [8(t + 1)³] = 6(t + 1)² / [8(t + 1)³] = 3/(4(t + 1)). ✓

## Common misconceptions

- **"d²y/dx² = (d²y/dt²) ÷ (d²x/dt²)."** This shortcut is wrong. It fails for x = 2t, y = t², and gives the wrong sign in Worked example 1.
- **Stopping after step 3.** d/dt (dy/dx) is not the answer. You must divide by dx/dt again.
- **Differentiating dy/dx with respect to x when it is written in t.** You cannot treat t as x. Differentiate with respect to t, then convert by dividing by dx/dt.
- **Reading the concavity from d/dt (dy/dx).** When dx/dt < 0 its sign is the opposite of the concavity, as in Worked example 2.
- **Not simplifying dy/dx first.** A messy quotient makes step 3 long and error-prone. Cancel common factors and use identities such as sin 2t = 2 sin t cos t.
- **Ignoring where dx/dt = 0.** Neither dy/dx nor d²y/dx² is defined there by this method.
- **Mixing up over and under.** Concave down means the tangent line is above the curve, so the estimate is too big.

## Where this leads

Topic 9.3 uses dx/dt and dy/dt to find the arc length of a parametric curve. Topics 9.4 to 9.6 treat the parameter as time: there, the second derivatives x″(t) and y″(t) are the components of acceleration, which is a different quantity from d²y/dx². Keep the two separate. Next: [Finding Arc Lengths of Curves Given by Parametric Equations (9.3)](/advanced-course-resources/calculus-bc/9-3-finding-arc-lengths-curves-given-study-guide/).

Try the [practice questions](/advanced-course-resources/calculus-bc/9-2-second-derivatives-parametric-equations-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-bc/9-2-second-derivatives-parametric-equations-revision-notes/) and the [checklist](/advanced-course-resources/calculus-bc/9-2-second-derivatives-parametric-equations-checklist/) to consolidate.
