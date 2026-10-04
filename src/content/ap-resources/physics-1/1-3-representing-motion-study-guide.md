---
resourceId: "mb-ap-phys1-1.3-study-guide"
title: "Representing Motion: Study Guide (Physics 1 1.3)"
description: "Describe one-dimensional motion with motion diagrams, graphs, equations and words, link graphs by slopes and areas, and use the three constant-acceleration equations, including free fall."
course: "physics-1"
unit: 1
topics: ["1.3"]
resourceType: "study-guide"
prerequisites:
  - "Displacement, average velocity and average acceleration with signs (Topic 1.2)"
  - "Finding the slope of a line and the area of a rectangle, triangle or trapezium"
prerequisiteResources: ["mb-ap-phys1-1.2-study-guide"]
learningObjectives:
  - "Move between a narrative, a motion diagram, position–time, velocity–time and acceleration–time graphs, and equations for the same motion"
  - "Find velocity and acceleration from tangent slopes, and displacement and change in velocity from areas under graphs"
  - "Choose and use the three constant-acceleration equations in any single dimension, including vertical free fall"
  - "Derive a symbolic result from the kinematic equations and use it to compare two situations"
  - "Describe and sketch graphs for motion with changing acceleration without calculating with it"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Algebra only; no calculus. We use g = 9.8 m/s² to match the rest of this unit. Exam questions that need a number for g use 10 m/s², and 9.8 or 9.81 m/s² is also accepted"
related: ["mb-ap-phys1-1.3-revision-notes", "mb-ap-phys1-1.3-practice", "mb-ap-phys1-1.3-checklist"]
next: "mb-ap-phys1-1.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "One motion can be shown five ways: words, a motion diagram, graphs, equations and data tables. Each should tell the same story."
  - "Slope of x–t is velocity; slope of v_x–t is acceleration. Area under v_x–t is displacement; area under a_x–t is change in velocity."
  - "The three kinematic equations work only when acceleration is constant. Pick the one that leaves out the quantity you neither know nor need."
  - "Near Earth's surface, free-fall acceleration is constant and downward, about 9.8 m/s². With +y up, a_y = −g."
  - "If acceleration changes, describe and sketch the motion, but do not use the constant-acceleration equations."
faqs:
  - question: "Which value of g should I use?"
    answer: "Exam questions that need a number use g = 10 m/s², and 9.8 m/s² or 9.81 m/s² is not penalised. This guide uses 9.8 m/s² to match the course equation table and the rest of the unit."
  - question: "Do I need calculus to find areas under curves?"
    answer: "No. In this course the graphs you calculate with are made of straight lines, so the areas are rectangles, triangles and trapeziums. For curved graphs you only describe or estimate."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. Everything here uses algebra and graphs. It builds on the definitions in [Topic 1.2](/advanced-course-resources/physics-1/1-2-displacement-velocity-acceleration-study-guide/): displacement, average velocity and average acceleration.

## One motion, five representations

Physicists describe the same motion in several ways. Each way makes some features easy to see. Good problem-solvers switch between them and check that they agree.

1. **Narrative.** Words: "A cart starts from rest and speeds up steadily to the right for 2.0 s."
2. **Motion diagram.** Dots showing where the object is at equal time intervals, with velocity arrows and an acceleration arrow.
3. **Graphs.** Position, velocity and acceleration plotted against time.
4. **Equations.** Algebra that links x, v_x, a_x and t.
5. **Data table.** Measured or calculated values, for example from a motion detector.

As always, start by writing your axis and origin, for example **"+x to the right, origin at the start"**.

### Motion diagrams

In a motion diagram, the object (treated as a point) is drawn at equal time intervals.

- **Spacing between dots** shows speed. Wider gaps mean faster motion.
- **Velocity arrows** point in the direction of motion. Their length shows speed.
- **One acceleration arrow** shows the direction in which the velocity is changing.

<figure>
<svg viewBox="0 0 560 250" role="img" aria-labelledby="p13-md-title p13-md-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p13-md-title">Two motion diagrams: a cart speeding up and a cart slowing down</title>
<desc id="p13-md-desc">Two rows of dots taken every 0.50 s, with +x to the right and a position scale from 0 to 4 metres under each row. Row A, speeding up: dots at 0, 0.25, 1.0, 2.25 and 4.0 m, so the gaps grow; velocity arrows above the dots grow from zero to 4 m/s; the acceleration arrow points right. Row B, slowing down: dots at 0, 1.75, 3.0, 3.75 and 4.0 m, so the gaps shrink; velocity arrows shrink from 4 m/s to zero; the acceleration arrow points left.</desc>
<defs><marker id="p13-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="250" fill="#ffffff"/>
<text x="20" y="24" font-size="13" fill="#1d2b44" font-weight="600">A: speeding up (v_x +, a_x +)</text>
<text x="350" y="24" font-size="12" fill="#1d2b44">acceleration a_x</text>
<path d="M450 20 H510" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p13-arr)"/>
<text x="44" y="50" font-size="11" fill="#1d2b44">v = 0</text>
<g stroke="#1d2b44" stroke-width="2" marker-end="url(#p13-arr)">
<path d="M85 55 H105"/><path d="M160 55 H200"/><path d="M285 55 H345"/><path d="M460 55 H540"/>
</g>
<g fill="#1d2b44"><circle cx="60" cy="75" r="5"/><circle cx="85" cy="75" r="5"/><circle cx="160" cy="75" r="5"/><circle cx="285" cy="75" r="5"/><circle cx="460" cy="75" r="5"/></g>
<path d="M60 95 H470 M60 91 V99 M160 91 V99 M260 91 V99 M360 91 V99 M460 91 V99" stroke="#1d2b44" stroke-width="1.2"/>
<g font-size="11" fill="#1d2b44" text-anchor="middle"><text x="60" y="111">0</text><text x="160" y="111">1</text><text x="260" y="111">2</text><text x="360" y="111">3</text><text x="460" y="111">4 m</text></g>
<text x="20" y="144" font-size="13" fill="#1d2b44" font-weight="600">B: slowing down (v_x +, a_x −)</text>
<text x="350" y="144" font-size="12" fill="#1d2b44">acceleration a_x</text>
<path d="M510 140 H450" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p13-arr)"/>
<text x="466" y="170" font-size="11" fill="#1d2b44">v = 0</text>
<g stroke="#1d2b44" stroke-width="2" marker-end="url(#p13-arr)">
<path d="M60 175 H140"/><path d="M235 175 H295"/><path d="M360 175 H400"/><path d="M435 175 H455"/>
</g>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="2"><circle cx="60" cy="195" r="5"/><circle cx="235" cy="195" r="5"/><circle cx="360" cy="195" r="5"/><circle cx="435" cy="195" r="5"/><circle cx="460" cy="195" r="5"/></g>
<path d="M60 215 H470 M60 211 V219 M160 211 V219 M260 211 V219 M360 211 V219 M460 211 V219" stroke="#1d2b44" stroke-width="1.2"/>
<g font-size="11" fill="#1d2b44" text-anchor="middle"><text x="60" y="231">0</text><text x="160" y="231">1</text><text x="260" y="231">2</text><text x="360" y="231">3</text><text x="460" y="231">4 m</text></g>
</svg>
<figcaption>Figure 1. Motion diagrams with dots every 0.50 s and +x to the right. Row A (filled dots) starts from rest with a_x = +2.0 m/s²: the gaps are 0.25, 0.75, 1.25 and 1.75 m. Row B (open dots) starts at 4.0 m/s with a_x = −2.0 m/s²: the gaps are 1.75, 1.25, 0.75 and 0.25 m. The gaps change by the same amount each time, which is the sign of constant acceleration.</figcaption>
</figure>

Notice that both carts move to the right. Only the acceleration arrow tells them apart. When the acceleration arrow points the same way as the velocity arrows, the object speeds up. When it points the opposite way, the object slows down.

## Graphs: slopes and areas

Three graphs against time carry the same information in different forms. Two rules link them.

| Graph | Its **slope** gives | The **area** between it and the time axis gives |
|---|---|---|
| position x against t | velocity v_x (tangent slope at an instant) | (no standard meaning in this course) |
| velocity v_x against t | acceleration a_x (tangent slope at an instant) | displacement Δx |
| acceleration a_x against t | (not used in this course) | change in velocity Δv_x |

Area **below** the time axis counts as negative. On a curved graph, the slope at an instant is the slope of the **tangent line** at that point, as in Topic 1.2.

Figure 2 shows one trolley described by all three graphs. Take **+x to the right**, origin at the start.

- 0 to 2.0 s: it moves at a steady +2.0 m/s.
- 2.0 to 4.0 s: it speeds up steadily, a_x = +1.0 m/s², reaching +4.0 m/s.
- 4.0 to 6.0 s: it brakes steadily, a_x = −2.0 m/s², and stops.

<figure>
<svg viewBox="0 0 560 520" role="img" aria-labelledby="p13-trio-title p13-trio-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p13-trio-title">Position, velocity and acceleration graphs for one trolley</title>
<desc id="p13-trio-desc">Three stacked graphs sharing a time axis from 0 to 6 seconds. Top: position from 0 to 16 metres; a straight line from 0 m at 0 s to 4 m at 2 s, then a curve bending upward to 10 m at 4 s, then a curve bending over to level off at 14 m at 6 s. Middle: velocity from 0 to 5 metres per second; flat at 2 m/s from 0 to 2 s, a straight rise to 4 m/s at 4 s, then a straight fall to 0 at 6 s. The regions under the velocity line are labelled with areas 4 m, 6 m and 4 m. Bottom: acceleration from minus 3 to plus 2 metres per second squared; zero from 0 to 2 s, plus 1 from 2 to 4 s with area plus 2 m/s, and minus 2 from 4 to 6 s with area minus 4 m/s.</desc>
<rect x="0" y="0" width="560" height="520" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.6">
<path d="M216.7 30 V490 M363.3 30 V490"/>
</g>
<path d="M70 150 H520 M70 150 V22" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="11" fill="#1d2b44" text-anchor="end"><text x="62" y="154">0</text><text x="62" y="124">4</text><text x="62" y="94">8</text><text x="62" y="64">12</text><text x="62" y="34">16</text></g>
<text x="20" y="90" font-size="12" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 20 90)">x (m)</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="70.0,150.0 88.3,146.2 106.7,142.5 125.0,138.8 143.3,135.0 161.7,131.2 180.0,127.5 198.3,123.8 216.7,120.0 235.0,116.0 253.3,111.6 271.7,106.6 290.0,101.2 308.3,95.4 326.7,89.1 345.0,82.3 363.3,75.0 381.7,68.0 400.0,61.9 418.3,56.7 436.7,52.5 455.0,49.2 473.3,46.9 491.7,45.5 510.0,45.0"/>
<text x="80" y="110" font-size="11" fill="#1d2b44">straight: constant v</text>
<text x="290" y="125" font-size="11" fill="#1d2b44">steepening</text>
<text x="400" y="80" font-size="11" fill="#1d2b44">flattening, then level</text>
<path d="M70 310 H520 M70 310 V200" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="11" fill="#1d2b44" text-anchor="end"><text x="62" y="314">0</text><text x="62" y="274">2</text><text x="62" y="234">4</text></g>
<text x="20" y="260" font-size="12" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 20 260)">v_x (m/s)</text>
<polygon points="70,310 70,270 216.7,270 363.3,230 510,310" fill="#fdf6e3" stroke="none"/>
<path d="M216.7 270 V310 M363.3 230 V310" stroke="#1d2b44" stroke-width="1"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="70,270 216.7,270 363.3,230 510,310"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle"><text x="143" y="296">area 4.0 m</text><text x="290" y="296">area 6.0 m</text><text x="420" y="296">area 4.0 m</text></g>
<text x="230" y="222" font-size="11" fill="#1d2b44">slope +1.0 m/s²</text>
<text x="420" y="240" font-size="11" fill="#1d2b44">slope −2.0 m/s²</text>
<path d="M70 420 H520 M70 370 V490" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="11" fill="#1d2b44" text-anchor="end"><text x="62" y="384">+2</text><text x="62" y="404">+1</text><text x="62" y="424">0</text><text x="62" y="444">−1</text><text x="62" y="464">−2</text><text x="62" y="484">−3</text></g>
<text x="20" y="430" font-size="12" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 20 430)">a_x (m/s²)</text>
<rect x="216.7" y="400" width="146.6" height="20" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1"/>
<defs><pattern id="p13-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 V8" stroke="#1d2b44" stroke-width="1"/></pattern></defs>
<rect x="363.3" y="420" width="146.7" height="40" fill="url(#p13-hatch)" stroke="#1d2b44" stroke-width="1"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="70,420 216.7,420 216.7,400 363.3,400 363.3,460 510,460"/>
<text x="230" y="392" font-size="11" fill="#1d2b44">area +2.0 m/s</text>
<text x="380" y="478" font-size="11" fill="#1d2b44" font-weight="600">area −4.0 m/s (hatched)</text>
<g font-size="11" fill="#1d2b44" text-anchor="middle"><text x="70" y="506">0</text><text x="143.3" y="506">1</text><text x="216.7" y="506">2</text><text x="290" y="506">3</text><text x="363.3" y="506">4</text><text x="436.7" y="506">5</text><text x="510" y="506">6</text></g>
<text x="530" y="506" font-size="12" fill="#1d2b44" text-anchor="end">t (s)</text>
</svg>
<figcaption>Figure 2. One trolley, three graphs, +x to the right. The slope of the x–t graph is 2.0 m/s at first and 4.0 m/s at the steepest point (t = 4.0 s). The areas under the v_x–t graph add to 4.0 + 6.0 + 4.0 = 14 m, the final position. The areas under the a_x–t graph, +2.0 m/s and −4.0 m/s, match the velocity rising from 2.0 to 4.0 m/s and then falling to 0.</figcaption>
</figure>

Read the three graphs together:

- **0–2.0 s.** x–t is a straight line with slope 4.0 m ÷ 2.0 s = 2.0 m/s. So v_x–t is flat at 2.0 m/s, and a_x = 0.
- **2.0–4.0 s.** v_x–t rises with slope (4.0 − 2.0) m/s ÷ 2.0 s = +1.0 m/s². The x–t graph curves upward (gets steeper) because the velocity is increasing.
- **4.0–6.0 s.** v_x–t falls with slope −2.0 m/s². The x–t graph still rises, because v_x is still positive, but it gets flatter until it is level at t = 6.0 s, when v_x = 0.

The trolley never moves backwards, so x never decreases. A falling v_x–t line does **not** mean the object is moving backwards. Only a negative v_x means that.

## Where the constant-acceleration equations come from

When a_x is constant, the v_x–t graph is a straight line. That gives the first equation directly, because the slope is a_x:

**v_x = v_x0 + a_x t**

The displacement is the area under that line from 0 to t. The shape is a trapezium with parallel sides v_x0 and v_x and width t:

Δx = ½(v_x0 + v_x)t = ½(v_x0 + v_x0 + a_x t)t = v_x0 t + ½a_x t²

Writing Δx = x − x₀ gives the second equation. Eliminating t between the first two gives the third.

| Equation | Leaves out | Use it when you do not know or need |
|---|---|---|
| v_x = v_x0 + a_x t | x | the displacement |
| x = x₀ + v_x0 t + ½a_x t² | v_x | the final velocity |
| v_x² = v_x0² + 2a_x(x − x₀) | t | the time |

Three points matter:

- The equations are valid **only for constant acceleration**. If a_x changes during the interval, split the motion into stages where it is constant, or describe it qualitatively.
- They describe **instantaneous** values at time t, not averages.
- They work in **any single dimension**. For vertical motion, replace x with y.

**How to choose.** List the five quantities (Δx, v_x0, v_x, a_x, t). Mark the three you know and the one you want. Use the equation that leaves out the fifth.

## Free fall near Earth's surface

Near Earth's surface, an object moving only under gravity has a vertical acceleration that is **downward, constant, and about 9.8 m/s²** in size. We call this size g. With **+y upward**, a_y = −g. This holds on the way up, at the top and on the way down. It applies whether the object was dropped, thrown up or thrown down, as long as air resistance is small enough to ignore.

Because a_y is constant, the three equations apply with y in place of x and a_y = −g. In exam questions that need a numerical value, g is taken as 10 m/s², and using 9.8 or 9.81 m/s² correctly is not penalised. This guide uses 9.8 m/s².

## Worked example 1: choosing an equation

**Question.** Take **+x along the track in the direction of travel**. A train passes a signal at 4.0 m/s. It then speeds up with constant acceleration 0.50 m/s² over the next 240 m. Find its speed at the end of the 240 m and the time taken.

1. Known: v_x0 = +4.0 m/s, a_x = +0.50 m/s², x − x₀ = +240 m. Wanted: v_x. Not known or needed: t. So use the equation that leaves out t.
2. v_x² = v_x0² + 2a_x(x − x₀) = (4.0)² + 2(0.50)(240) = 16 + 240 = 256 m²/s².
3. v_x = +√256 = **+16 m/s**. Take the positive root, because the train is still moving in the +x direction.
4. Now find t from v_x = v_x0 + a_x t: t = (16 − 4.0) ÷ 0.50 = **24 s**.

**Check with another representation.** On a v_x–t graph this is a straight line from 4.0 m/s to 16 m/s over 24 s. The trapezium area is ½(4.0 + 16) × 24 = 240 m, which matches the given displacement.

## Worked example 2: a ball thrown up from a balcony

**Question.** Take **+y upward**, origin at the hand. A student on a balcony throws a ball straight up at 12 m/s. The ground is 8.0 m below the hand. Ignore air resistance and use g = 9.8 m/s². Find (a) the time to reach the top, (b) the maximum height above the hand, (c) the velocity just before it hits the ground and (d) the total time in the air.

Known throughout: v_y0 = +12 m/s, a_y = −9.8 m/s².

**(a)** At the top v_y = 0. Using v_y = v_y0 + a_y t: 0 = 12 − 9.8t, so t = 12 ÷ 9.8 = **1.2 s** (1.22 s).

**(b)** Using v_y² = v_y0² + 2a_y(y − y₀) with v_y = 0: 0 = 144 − 19.6y, so y = 144 ÷ 19.6 = **7.3 m** above the hand.

**(c)** At the ground y = −8.0 m. v_y² = 144 + 2(−9.8)(−8.0) = 144 + 156.8 = 300.8 m²/s², so |v_y| = 17.3 m/s. The ball is moving down, so take the negative root: **v_y = −17 m/s**.

**(d)** Using v_y = v_y0 + a_y t: −17.34 = 12 − 9.8t, so t = 29.34 ÷ 9.8 = **3.0 s** (2.99 s).

**Check.** From the top, the ball falls 7.35 + 8.0 = 15.35 m from rest. Using y − y₀ = ½a_y t² gives t = √(2 × 15.35 ÷ 9.8) = 1.77 s. Adding 1.22 s for the way up gives 2.99 s, which agrees.

**Interpretation.** The acceleration was −9.8 m/s² at every moment, including at the top where v_y = 0. With g = 10 m/s² the answers become 7.2 m, −17 m/s and 2.9 s.

## Worked example 3: deriving a scaling result

**Question.** A stone is dropped from rest from height h. Derive an expression for the time t to fall, and use it to compare a drop from h with a drop from 4h.

1. Take **+y downward** for this question, so a_y = +g, v_y0 = 0 and the displacement is +h.
2. y − y₀ = v_y0 t + ½a_y t² gives h = ½gt², so **t = √(2h/g)**.
3. Compare: t₂ / t₁ = √(2(4h)/g) ÷ √(2h/g) = √4 = **2**. Four times the height takes twice the time, not four times.
4. Landing speed v = gt also doubles.

**Check with numbers.** For h = 5.0 m, t = √(10 ÷ 9.8) = 1.0 s and v = 9.9 m/s. For 20 m, t = 2.0 s and v = 20 m/s (19.8 m/s). The ratios are both 2.

## When acceleration is not constant

Real accelerations often change. A car pulling away from traffic lights usually has a large acceleration at first and less as it speeds up. In this course you are not asked to calculate such motion. You are expected to describe it, sketch its graphs and reason about it.

For the car:

- **a_x–t** starts high and falls towards zero.
- **v_x–t** rises steeply at first, then more and more gently. It curves over and levels off. Its tangent slope at each instant is the acceleration then.
- **x–t** curves upward and gets steeper, but more slowly as time goes on, and ends up close to a straight line once the velocity is almost steady.

Areas still have the same meanings. The area under a curved v_x–t graph is still the displacement; you can estimate it by counting grid squares. But the equation x = x₀ + v_x0 t + ½a_x t² does not apply, because there is no single value of a_x to put in it.

## Common misconceptions

- **"The x–t graph shows the path."** No. It shows position against time. A ball thrown straight up and caught makes an arch on a y–t graph, but it travels in a vertical line.
- **"A falling v_x–t line means moving backwards."** It means a_x is negative. The object moves backwards only when v_x itself is negative.
- **"The highest point on a v_x–t graph is where the object turns around."** That is where it moves fastest. It turns around where v_x changes sign, which is where the v_x–t graph crosses the time axis.
- **"Use any kinematic equation whenever there is motion."** They need constant acceleration. Check this first.
- **"At the top of a throw, a = 0."** The acceleration is −g all the way (Worked example 2).
- **"Double the height, double the fall time."** Fall time grows with the square root of height (Worked example 3).
- **Taking the wrong square root.** v_x² = … gives two roots. Choose the sign from the direction of motion.
- **Mixing axes.** If you choose +y upward, a falling object has negative velocity and a_y = −g, all in the same calculation.

## Where this leads

Topic 1.4 (Reference Frames and Relative Motion) asks how these graphs and equations change when the observer is moving. Continue with the [Topic 1.4 study guide](/advanced-course-resources/physics-1/1-4-reference-frames-relative-motion-study-guide/). First, try the [practice questions](/advanced-course-resources/physics-1/1-3-representing-motion-practice/), then use the [revision notes](/advanced-course-resources/physics-1/1-3-representing-motion-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/1-3-representing-motion-checklist/) to consolidate. You can also return to the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
