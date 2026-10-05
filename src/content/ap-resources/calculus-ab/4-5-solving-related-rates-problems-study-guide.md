---
resourceId: "mb-ap-calcab-4.5-study-guide"
title: "Solving Related Rates Problems: Study Guide (Calculus AB 4.5)"
description: "Learn a step-by-step method for related rates problems: draw the situation, build the equation from geometry, differentiate with respect to time and explain the answer in context."
course: "calculus-ab"
unit: 4
topics: ["4.5"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Differentiating an equation with respect to time (Topic 4.4)"
  - "The chain, product and quotient rules, and derivatives of trigonometric functions (Units 2 and 3)"
  - "Interpreting a rate with units and sign (Topics 4.1 and 4.3)"
  - "Pythagoras' theorem, similar triangles, right-angle trigonometry, and area and volume formulas"
learningObjectives:
  - "Turn a written description into a labelled diagram, separating constants from quantities that change"
  - "Choose an equation that links the quantities, using Pythagoras, similar triangles, trigonometry or a volume formula"
  - "Use a geometric relationship to remove a variable whose rate is not known"
  - "Find any missing value at the instant from the equation before substituting"
  - "Calculate the unknown rate and explain its meaning in context, with units, sign and the instant it describes"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise every example here without a calculator. Leave π in exact answers; decimals are given only to help you interpret."
related: ["mb-ap-calcab-4.5-revision-notes", "mb-ap-calcab-4.5-practice", "mb-ap-calcab-4.5-checklist"]
next: "mb-ap-calcab-4.5-practice"
prerequisiteResources: ["mb-ap-calcab-4.4-study-guide"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "A related rates problem finds one rate from other rates that are known, using an equation that links the quantities."
  - "Draw and label first. Give a letter to every quantity that changes; write numbers only for quantities that never change."
  - "If the equation contains a variable whose rate you do not know, remove it with a second relationship such as similar triangles."
  - "Differentiate with respect to t, then substitute the values at the instant, then interpret: what changes, how fast, in which direction, in what units, and when."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 4.5 is common content, so the same page serves AB and BC students."
  - question: "How do I know which equation to use?"
    answer: "Look at the quantity you want and the quantities whose rates you know. Choose a relationship that contains them: Pythagoras for distances at right angles, similar triangles for shadows and cones, a trig ratio for angles, a volume formula for containers."
  - question: "What does a full interpretation need?"
    answer: "Say which quantity is changing, whether it is increasing or decreasing, how fast with units, and at which instant. A number alone is not an interpretation."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## From technique to problem solving

In Topic 4.4 the equation was usually given to you: V = s³, A = wh. You differentiated it with respect to time t and substituted. In Topic 4.5 you have to **build the equation yourself**, often from a sentence and a sketch, and then **explain what your answer means**.

The calculus is the same. The new work happens before and after it:

- **Before:** turning a description into a diagram and an equation.
- **After:** turning a number into a sentence about the real situation.

A related rates problem always has the same shape. Some quantities change with time. They are linked by geometry or a formula. You know some of their rates at one instant. You want the rate of another quantity at that same instant.

## A six-step method

1. **Draw and label.** Sketch the situation. Give a letter to every quantity that changes. Write a number on a length only if it **never** changes.
2. **List what you know and what you want.** Write the known rates with signs (decreasing means negative) and the instant ("when x = 30"). Write the rate you want, such as dθ/dt = ?
3. **Write an equation that holds at all times.** It must link the quantity you want to the quantities whose rates you know.
4. **Remove extra variables if needed.** If the equation contains a variable whose rate you do not know and cannot find, use a second relationship (often similar triangles) to replace it.
5. **Differentiate with respect to t, then substitute.** Find any missing value at the instant from the original equation first.
6. **Answer and interpret.** State the rate with units and sign, then say in words what it means at that instant.

## Choosing the equation

| The situation involves | A useful relationship | Typical letters |
|---|---|---|
| Two distances at right angles | Pythagoras: x² + y² = D² | x, y, D |
| An angle seen from a fixed point | A trig ratio: tan θ = opposite/adjacent | θ, x |
| A shadow, or liquid in a cone or a V-shaped trough | Similar triangles: corresponding sides in the same ratio | r, h, s |
| A container filling or draining | A volume formula, such as V = (1/3)πr²h for a cone | V, r, h |
| A circle or sphere growing | A = πr², V = (4/3)πr³ | A, V, r |

Two points matter when you choose:

- **Constants stay as numbers; variables stay as letters.** If a camera is always 40 m from a track, write 40. If a cyclist's distance along the track changes, write x, even if you know x = 30 at the instant.
- **The rate you want must be in the equation.** If you want dθ/dt, the equation must contain θ.

## Worked example 1: a camera tracking a cyclist

**Situation.** A cyclist rides along a straight track at a steady 6 m/s. A camera stands 40 m from the track. The point P is the point on the track closest to the camera. Consider the moment when the cyclist is 30 m past P and moving away from it.

<figure>
<svg viewBox="0 0 520 280" role="img" aria-labelledby="cyc-title cyc-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="cyc-title">Right triangle formed by a camera, the nearest point P on a track and a cyclist</title>
<desc id="cyc-desc">A horizontal line represents the track. Point P is on the track, and the camera is 40 m directly below P, so the segment from the camera to P is a fixed vertical side marked 40 m with a right-angle box at P. The cyclist is on the track to the right of P, at distance x from P; an arrow shows the cyclist moving right with dx/dt = 6 m/s. The slanted side from the camera to the cyclist is labelled D. The angle θ at the camera is between the fixed side to P and the line of sight to the cyclist.</desc>
<rect x="0" y="0" width="520" height="280" fill="#ffffff"/>
<line x1="30" y1="60" x2="500" y2="60" stroke="#1d2b44" stroke-width="2.5"/>
<text x="40" y="48" font-size="12" fill="#1d2b44">track</text>
<line x1="140" y1="60" x2="140" y2="230" stroke="#1d2b44" stroke-width="2"/>
<polyline points="140,74 154,74 154,60" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="140" y1="230" x2="268" y2="60" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 4"/>
<circle cx="140" cy="60" r="4" fill="#1d2b44"/>
<text x="130" y="50" font-size="13" fill="#1d2b44" text-anchor="end">P</text>
<rect x="128" y="230" width="24" height="16" fill="#eef2f8" stroke="#1d2b44" stroke-width="1.5"/>
<text x="164" y="252" font-size="12" fill="#1d2b44">camera</text>
<text x="132" y="150" font-size="13" fill="#1d2b44" text-anchor="end">40 m (fixed)</text>
<circle cx="268" cy="60" r="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="204" y="52" font-size="13" fill="#1d2b44" text-anchor="middle">x</text>
<line x1="280" y1="40" x2="330" y2="40" stroke="#1d2b44" stroke-width="2"/>
<polygon points="330,34 342,40 330,46" fill="#1d2b44"/>
<text x="276" y="28" font-size="12" fill="#1d2b44">cyclist: dx/dt = 6 m/s</text>
<text x="214" y="160" font-size="13" fill="#1d2b44">D (line of sight)</text>
<path d="M 140 200 A 30 30 0 0 1 158 206" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<text x="145" y="192" font-size="13" fill="#1d2b44">θ</text>
</svg>
<figcaption>Figure 1. Drawn to scale at the instant x = 30 m. The 40 m side never changes, so it is written as a number. The distance x along the track, the line-of-sight distance D and the camera angle θ all change, so they are letters. The dashed line of sight is the side whose rate is asked for in part (a).</figcaption>
</figure>

**Questions.** (a) How fast is the distance between the camera and the cyclist changing at that moment? (b) How fast must the camera turn to keep the cyclist in view at that moment?

**(a) Distance.**

1. **Know and want.** dx/dt = 6 m/s; at the instant x = 30 m. Want dD/dt.
2. **Equation at all times (Pythagoras):** x² + 40² = D².
3. **Missing value at the instant:** D² = 30² + 40² = 2500, so D = 50 m.
4. **Differentiate:** 2x · dx/dt = 2D · dD/dt (the 40² is a constant, so its derivative is 0).
5. **Substitute:** 2(30)(6) = 2(50) · dD/dt, so 360 = 100 · dD/dt and **dD/dt = 3.6 m/s**.

**Interpretation.** At the moment the cyclist is 30 m past P, the distance between the camera and the cyclist is increasing at 3.6 metres per second.

Notice that 3.6 m/s is less than the cyclist's speed of 6 m/s. Only part of the cyclist's motion is directed away from the camera. Right at P (x = 0) the distance is not changing at all, and far down the track dD/dt gets close to 6 m/s.

**(b) Angle.**

1. **Want** dθ/dt. The equation must contain θ.
2. **Equation at all times:** tan θ = x/40 (opposite over adjacent, from the camera).
3. **Differentiate:** sec²θ · dθ/dt = (1/40) · dx/dt.
4. **Missing value at the instant:** cos θ = adjacent/hypotenuse = 40/50, so sec θ = 50/40 and sec²θ = 2500/1600 = 25/16.
5. **Substitute:** (25/16) · dθ/dt = 6/40 = 3/20. So dθ/dt = (3/20) × (16/25) = **12/125 = 0.096 radians per second**.

**Interpretation.** At that moment the camera must turn at 0.096 radians per second (about 5.5 degrees per second) in the direction the cyclist is moving.

**Check.** If you forget sec²θ, you get 6/40 = 0.15 rad/s. That is the turning rate only at P, where θ = 0 and sec²θ = 1. As the cyclist moves further away, the camera turns more slowly, which matches what you see when you watch something pass you.

## Removing a variable with similar triangles

Sometimes the natural equation has one variable too many. The volume of liquid in a cone is V = (1/3)πr²h. If you know dV/dt and want dh/dt, the equation also contains r, and you do not know dr/dt.

The fix is a second relationship. In a cone with its point at the bottom, the surface of the liquid makes a small cone that is **similar** to the whole cone. So r/h is the same at every depth. Use this to write r in terms of h **before** differentiating. Then the equation has only the two variables you need.

## Worked example 2: filling a cone-shaped paper cup

**Situation.** A paper cup is a cone with its point at the bottom. The cup is 9 cm deep and the radius of its rim is 3 cm. Water flows into it at 4 cm³ per second.

<figure>
<svg viewBox="0 0 520 300" role="img" aria-labelledby="cone-title cone-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="cone-title">Cross-section of a cone-shaped cup partly filled with water</title>
<desc id="cone-desc">An upside-down triangle shows the side view of the cup, with the point at the bottom. The rim is at the top: rim radius 3 cm and full depth 9 cm are marked. A shaded smaller triangle at the bottom shows the water, filling two thirds of the depth, with depth h and surface radius r. The small water triangle and the large cup triangle have the same shape, so r divided by h equals 3 divided by 9.</desc>
<rect x="0" y="0" width="520" height="300" fill="#ffffff"/>
<polygon points="200,250 153,110 247,110" fill="#eef2f8" stroke="none"/>
<polygon points="200,250 130,40 270,40" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="153" y1="110" x2="247" y2="110" stroke="#1d2b44" stroke-width="2"/>
<line x1="200" y1="40" x2="200" y2="250" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4"/>
<line x1="200" y1="110" x2="247" y2="110" stroke="#1d2b44" stroke-width="1"/>
<text x="224" y="102" font-size="13" fill="#1d2b44" text-anchor="middle">r</text>
<text x="208" y="190" font-size="13" fill="#1d2b44">h</text>
<text x="235" y="32" font-size="13" fill="#1d2b44" text-anchor="middle">3 cm</text>
<line x1="200" y1="38" x2="270" y2="38" stroke="#1d2b44" stroke-width="1"/>
<line x1="345" y1="40" x2="345" y2="250" stroke="#1d2b44" stroke-width="1"/>
<line x1="339" y1="40" x2="351" y2="40" stroke="#1d2b44" stroke-width="1"/>
<line x1="339" y1="250" x2="351" y2="250" stroke="#1d2b44" stroke-width="1"/>
<text x="355" y="150" font-size="13" fill="#1d2b44">9 cm (full depth)</text>
<text x="60" y="160" font-size="12" fill="#1d2b44">shaded: water</text>
<text x="355" y="200" font-size="12" fill="#1d2b44">similar triangles:</text>
<text x="355" y="216" font-size="12" fill="#1d2b44">r/h = 3/9, so r = h/3</text>
</svg>
<figcaption>Figure 2. Side view of the cup. The water forms a small cone with the same shape as the cup, so its radius is always one third of its depth. Lengths are in cm. The drawing is to scale, with the water 6 cm deep.</figcaption>
</figure>

**Questions.** (a) How fast is the water level rising when the water is 6 cm deep? (b) Compare this with the rate when the water is 3 cm deep, and explain the difference.

**(a)**

1. **Know and want.** dV/dt = 4 cm³/s (positive: water is added). At the instant, h = 6 cm. Want dh/dt.
2. **Equation at all times:** V = (1/3)πr²h.
3. **Remove r.** By similar triangles, r/h = 3/9, so r = h/3 at every depth. Then
   **V = (1/3)π(h/3)²h = πh³/27**
4. **Differentiate:** dV/dt = (3πh²/27) · dh/dt = (πh²/9) · dh/dt.
5. **Substitute:** 4 = (π × 36/9) · dh/dt = 4π · dh/dt, so **dh/dt = 1/π cm per second** (about 0.32 cm/s).

**Interpretation.** At the moment the water is 6 cm deep, the water level is rising at 1/π centimetres per second, about 0.32 cm per second.

**Check with units.** πh²/9 has units cm², and cm² × cm/s = cm³/s, which matches dV/dt. Also, πh²/9 = πr² is the area of the water surface. So dh/dt = (rate of inflow) ÷ (surface area), which makes sense: the same volume spread over a wider surface raises the level less.

**(b)** At h = 3 cm: 4 = (π × 9/9) · dh/dt = π · dh/dt, so dh/dt = **4/π cm per second** (about 1.27 cm/s).

The level rises four times as fast at 3 cm deep as at 6 cm deep. The inflow rate is the same, but the cup is narrow near the bottom and wider higher up. Doubling the depth doubles the radius, so the surface area becomes four times as big, and the level rises four times as slowly.

**A common error.** Writing V = (1/3)π(3)²h = 3πh treats the radius as fixed at 3 cm. That describes a cylinder-like rate, not a cone. It gives dh/dt = 4/(3π) at every depth, which cannot be right: the cup gets wider as it fills. The rim radius is a constant, but the water's radius r is a variable.

## Interpreting the answer

The skill being tested here is explaining the meaning of a solution in context. A full answer has five parts.

| Part | Ask yourself | Example (Worked example 2) |
|---|---|---|
| Which quantity | What does the derivative measure? | the depth of the water |
| Direction | Is the rate positive or negative? | rising |
| Size with units | What number and what units? | 1/π cm per second |
| Instant | When is this true? | when the water is 6 cm deep |
| Reasonableness | Does the size and sign make sense? | slower than at 3 cm, because the cup is wider |

Two habits help:

- **Use words for direction, not a double negative.** If dh/dt = −0.5 cm/s, write "the depth is decreasing at 0.5 cm per second", not "decreasing at −0.5".
- **Say "at that instant".** A related rate is an instantaneous rate. In Worked example 2 the level does not rise 1/π cm in the next second, because the rate keeps changing as the cup fills.

## Common misconceptions

- **Writing a changing length as a number.** If the cyclist is 30 m past P "at the moment", x is still a variable. Use x in the equation and substitute 30 after differentiating.
- **Treating a variable radius as fixed.** In a cone the rim radius is fixed but the water's radius changes. Use similar triangles.
- **Keeping a variable whose rate is unknown.** If you cannot find dr/dt, remove r before differentiating.
- **Forgetting to find a missing value at the instant.** In Worked example 1 you need D = 50 and sec²θ = 25/16. Get them from the original equation or from the triangle.
- **Missing the chain-rule factor on a trig function.** d/dt(tan θ) = sec²θ · dθ/dt, not sec²θ.
- **Using degrees.** Calculus formulas for trig derivatives assume radians, so dθ/dt comes out in radians per unit time. Convert to degrees only at the end, if asked.
- **Giving a number without meaning.** "0.096" earns little. Say what is changing, how fast, in which direction and when.
- **Assuming the rate is constant.** Most related rates change from moment to moment, as both worked examples show.

## Where this leads

You can now set up and solve full related rates problems and explain the results. Topic 4.6 uses the derivative in a different way: the tangent line at a point gives a good estimate of nearby function values. Continue to [Topic 4.6, Approximating Values of a Function Using Local Linearity and Linearization](/advanced-course-resources/calculus-ab/4-6-approximating-values-function-local-linearity-study-guide/). To review the differentiation step on its own, go back to [Topic 4.4, Introduction to Related Rates](/advanced-course-resources/calculus-ab/4-4-introduction-related-rates-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/4-5-solving-related-rates-problems-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/4-5-solving-related-rates-problems-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/4-5-solving-related-rates-problems-checklist/) to consolidate.
