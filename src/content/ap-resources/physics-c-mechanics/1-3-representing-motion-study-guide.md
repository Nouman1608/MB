---
resourceId: "mb-ap-physcm-1.3-study-guide"
title: "Representing Motion: Study Guide (Physics C: Mechanics 1.3)"
description: "Calculus-based guide to moving between motion diagrams, graphs, equations and words: slopes and areas, constant-acceleration equations, free fall and factors of change."
course: "physics-c-mechanics"
unit: 1
topics: ["1.3"]
resourceType: "study-guide"
prerequisites:
  - "Velocity and acceleration as derivatives, and integration with initial conditions (Topic 1.2)"
  - "Solving quadratic equations; differentiating and integrating polynomials"
prerequisiteResources: ["mb-ap-physcm-1.2-study-guide"]
learningObjectives:
  - "Turn one description of a motion into any other: motion diagram, graph, equation or words"
  - "Read velocity and acceleration as tangent slopes, and displacement and change in velocity as areas under graphs"
  - "Sketch matching position, velocity and acceleration graphs, including curvature, for motion in stages"
  - "Choose and apply the constant-acceleration equations in any single dimension, including free fall near Earth"
  - "Derive symbolic results and use them to predict factors of change"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Calculus by hand; a calculator for arithmetic only. We use g = 9.8 m/s², the value on the course equation table; the course also accepts g = 10 m/s² or 9.81 m/s²"
related: ["mb-ap-physcm-1.3-revision-notes", "mb-ap-physcm-1.3-practice", "mb-ap-physcm-1.3-checklist"]
next: "mb-ap-physcm-1.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "One motion, five representations: motion diagram, figure, graph, equation and words. You must translate between them."
  - "Slopes go down the chain (x → v_x → a_x); areas go up (a_x → Δv_x → Δx)."
  - "The curvature of an x–t graph shows the sign of a_x: curving up means a_x > 0, curving down means a_x < 0."
  - "The three constant-acceleration equations work in any single direction, but only while a is constant."
  - "In free fall near Earth, a is constant, downward and about 9.8 m/s², even at the top of the path."
faqs:
  - question: "Is this the same as Topic 1.2?"
    answer: "Topic 1.2 builds the calculus links. Topic 1.3 uses them to translate between diagrams, graphs, equations and words, and adds free fall and the constant-acceleration equations as a problem-solving toolkit."
  - question: "Should I use g = 9.8 m/s² or g = 10 m/s²?"
    answer: "Either is accepted. The course says numerical answers may use 10 m/s², and you are not penalised for 9.8 or 9.81 m/s². This guide uses 9.8 m/s²."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**How this differs from the Physics 1 version.** Physics C: Mechanics and Physics 1 are **separate courses** that both have a Topic 1.3 called Representing Motion. This guide is the **calculus-based** one: slopes are derivatives and areas are integrals, so you can handle graphs of any shape, not only straight lines. The algebra-based treatment is in the [Physics 1 study guide](/advanced-course-resources/physics-1/1-3-representing-motion-study-guide/). This topic builds directly on [Topic 1.2](/advanced-course-resources/physics-c-mechanics/1-2-displacement-velocity-acceleration-study-guide/).

## One motion, five representations

The same motion can be shown in five ways. Each one makes some features easy to see and hides others.

| Representation | What it shows well | What it hides |
|---|---|---|
| **Narrative** (words) | the story and the conditions ("starts from rest", "brakes evenly") | exact values |
| **Figure** | the set-up, the axis and the origin | how things change in time |
| **Motion diagram** | where the object is at equal time steps, plus velocity and acceleration arrows | exact numbers |
| **Graph** (x–t, v_x–t, a_x–t) | how each quantity changes; slopes and areas | the physical set-up |
| **Equation** | exact values at any instant | the overall picture |

A strong answer moves between them. Free-response questions often ask you to sketch a graph from words, explain a graph in words, or check that a graph agrees with an equation. Always start by stating the axis, for example **"+x to the right, origin at the start"**. Every sign on every representation depends on it.

## Motion diagrams

A **motion diagram** shows the object as a dot at **equal time intervals**. Add a velocity arrow at each dot, with length proportional to speed. Add one acceleration arrow for each stage.

- Equal spacing: constant velocity, a = 0.
- Spacing that grows: speeding up; a points along the motion.
- Spacing that shrinks: slowing down; a points against the motion.
- If the **change** in spacing is the same each step, the acceleration is constant.

<figure>
<svg viewBox="0 0 560 390" role="img" aria-labelledby="pcm13-md-title pcm13-md-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm13-md-title">Motion diagram for a ball tossed straight up at 4.9 m/s</title>
<desc id="pcm13-md-desc">A vertical height scale runs from 0 to 1.2 metres. The left column shows the ball going up: six dots at 0.1 second intervals, starting at 0 m and ending at 1.225 m. The gaps shrink from 0.44 m to 0.05 m, and upward velocity arrows shrink from 4.9 m/s to zero. The right column shows the ball coming down from 1.225 m back to 0 m, with gaps growing and downward velocity arrows growing from zero to 4.9 m/s. A single downward arrow between the columns is labelled a_y = −9.8 m/s² at every dot, including the top.</desc>
<defs><marker id="pcm13-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="390" fill="#ffffff"/>
<path d="M60 330 V60" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="54" y="324">0</text><text x="54" y="224">0.5</text><text x="54" y="124">1.0</text>
</g>
<path d="M56 320 H64 M56 220 H64 M56 120 H64" stroke="#1d2b44" stroke-width="1.5"/>
<text x="22" y="200" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 200)">height, y (m)</text>
<path d="M70 320 H540" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 4"/>
<text x="200" y="345" font-size="12" fill="#1d2b44">hand level, y = 0</text>
<g fill="#1d2b44">
<circle cx="150" cy="320" r="5"/><circle cx="150" cy="231.8" r="5"/><circle cx="150" cy="163.2" r="5"/><circle cx="150" cy="114.2" r="5"/><circle cx="150" cy="84.8" r="5"/>
<circle cx="400" cy="84.8" r="5"/><circle cx="400" cy="114.2" r="5"/><circle cx="400" cy="163.2" r="5"/><circle cx="400" cy="231.8" r="5"/><circle cx="400" cy="320" r="5"/>
</g>
<circle cx="150" cy="75" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="400" cy="75" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="2" marker-end="url(#pcm13-arr)">
<path d="M175 320 V261.2"/><path d="M185 231.8 V184.8"/><path d="M195 163.2 V127.9"/><path d="M205 114.2 V90.7"/><path d="M215 84.8 V73"/>
<path d="M425 84.8 V96.6"/><path d="M435 114.2 V137.7"/><path d="M445 163.2 V198.5"/><path d="M455 231.8 V278.8"/><path d="M465 320 V378.8"/>
</g>
<path d="M285 150 V235" stroke="#1d2b44" stroke-width="3" marker-end="url(#pcm13-arr)"/>
<text x="285" y="258" font-size="12" fill="#1d2b44" text-anchor="middle">a_y = −9.8 m/s²</text>
<text x="285" y="274" font-size="12" fill="#1d2b44" text-anchor="middle">at every dot,</text>
<text x="285" y="290" font-size="12" fill="#1d2b44" text-anchor="middle">including the top</text>
<text x="150" y="48" font-size="12" fill="#1d2b44" text-anchor="middle">going up (0 to 0.5 s)</text>
<text x="400" y="48" font-size="12" fill="#1d2b44" text-anchor="middle">coming down (0.5 to 1.0 s)</text>
<text x="110" y="70" font-size="12" fill="#1d2b44" text-anchor="end">top: v = 0</text>
</svg>
<figcaption>Figure 1. Motion diagram for a ball tossed up at 4.9 m/s, +y upward, dots every 0.10 s. The two columns are drawn side by side only for clarity; the ball moves along one vertical line. Shrinking gaps and arrows show slowing on the way up; growing ones show speeding up on the way down. The acceleration arrow never changes.</figcaption>
</figure>

## The graph links: slopes down, areas up

Topic 1.2 gave you the calculus. Here it becomes a way to read and draw graphs.

| Link | Calculus | On the graph |
|---|---|---|
| position → velocity | v_x = dx/dt | slope of the tangent to the x–t graph |
| velocity → acceleration | a_x = dv_x/dt | slope of the tangent to the v_x–t graph |
| velocity → displacement | Δx = ∫ v_x dt | signed area between the v_x–t graph and the time axis |
| acceleration → change in velocity | Δv_x = ∫ a_x dt | signed area between the a_x–t graph and the time axis |

Two more rules help when you sketch:

- **Curvature of x–t.** Because a_x = d²x/dt², an x–t graph that curves upward (concave up) has a_x > 0. One that curves downward has a_x < 0. A straight x–t graph has a_x = 0.
- **Matching features.** Where x–t has a peak or trough, v_x = 0. Where v_x–t crosses the axis, the object turns around. Where a_x jumps between stages, the v_x–t graph has a corner but no break, because velocity cannot change in zero time.

**Areas give changes, not values.** The area under a v_x–t graph gives Δx, so you still need x₀ to find x. The area under an a_x–t graph gives Δv_x, so you still need v_x0. For **distance** rather than displacement, split the v_x–t graph where it crosses the axis and add the sizes of the areas.

## The constant-acceleration equations as a toolkit

When the acceleration is constant, three equations describe the motion at any instant. They were derived by integration in Topic 1.2:

1. **v_x = v_x0 + a_x t** (no x)
2. **x = x₀ + v_x0 t + ½a_x t²** (no v_x)
3. **v_x² = v_x0² + 2a_x(x − x₀)** (no t)

Each one leaves out one quantity. So list your knowns and your unknown, then pick the equation that leaves out the quantity you neither know nor want.

The equations are written for x, but they work in **any single dimension**. For vertical motion, replace x with y. They hold for one stage of motion at a time. If the acceleration changes, start a new stage, and use the final values of one stage as the initial values of the next.

## Free fall near Earth

Near Earth's surface, an object moving only under gravity has an acceleration that is **downward, constant and about 9.8 m/s²** in size. We call its size g. This is a model: it ignores air resistance and assumes the height changes are small compared with Earth's radius.

With **+y upward**, write a_y = −g. Then the toolkit becomes:

- v_y = v_y0 − gt
- y = y₀ + v_y0 t − ½gt²
- v_y² = v_y0² − 2g(y − y₀)

The course accepts g = 10 m/s² for numerical answers and does not penalise 9.8 or 9.81 m/s². State which value you use.

## Functional dependence and factors of change

Symbolic answers let you predict how a result scales without new numbers.

- **Stopping distance.** A car braking at a constant rate a from speed v₀ stops in d = v₀²/(2a). So d ∝ v₀². Doubling the speed makes the stopping distance **4 times** larger. At a braking rate of 6.0 m/s², 12 m/s needs 12 m, and 24 m/s needs 48 m.
- **Height of a vertical throw.** The ball rises to h = v₀²/(2g) in time t = v₀/g. Tripling the launch speed makes the height **9 times** larger and the rise time **3 times** larger.
- **Drop from rest.** h = ½gt², so t ∝ √h. Four times the height needs only twice the time.

Write the relationship as a proportion first, then find the factor. It is quicker and safer than recalculating.

## Worked example 1: from words to three matching graphs

**Question.** Take **+x forward along a corridor**, origin at the start. A delivery robot starts from rest. It speeds up evenly at 0.50 m/s² for 4.0 s, travels at a steady speed for 6.0 s, then slows evenly to rest in 2.0 s. Sketch the a_x–t, v_x–t and x–t graphs and find the total displacement.

1. **Stage speeds.** After stage 1: v_x = 0 + 0.50 × 4.0 = **2.0 m/s**. Stage 2 keeps 2.0 m/s. In stage 3, a_x = (0 − 2.0)/2.0 = **−1.0 m/s²**.
2. **a_x–t graph.** Three flat lines: +0.50, 0 and −1.0 m/s². Check the areas: +0.50 × 4.0 = +2.0 m/s and −1.0 × 2.0 = −2.0 m/s. They cancel, so the robot ends at rest, as stated.
3. **v_x–t graph.** A straight rise from 0 to 2.0 m/s, a flat line, then a straight fall to 0. Each slope equals the a_x value of that stage.
4. **Displacement from areas.** Stage 1: ½ × 4.0 × 2.0 = **4.0 m**. Stage 2: 2.0 × 6.0 = **12 m**. Stage 3: ½ × 2.0 × 2.0 = **2.0 m**. Total: **18 m**.
5. **x–t graph.** It curves upward from 0 to 4.0 m (a_x > 0), is a straight line from 4.0 m to 16 m (a_x = 0), then curves downward and levels off at 18 m (a_x < 0). There are no corners, because the velocity changes smoothly.

<figure>
<svg viewBox="0 0 560 520" role="img" aria-labelledby="pcm13-trio-title pcm13-trio-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm13-trio-title">Matching position, velocity and acceleration graphs for the delivery robot</title>
<desc id="pcm13-trio-desc">Three graphs share a time axis from 0 to 12 seconds, with dashed vertical lines at 4 s and 10 s. Top: position x in metres from 0 to 20. The curve bends upward from 0 to 4 m between 0 and 4 s, is a straight line from 4 m to 16 m between 4 and 10 s, then bends downward and levels off at 18 m at 12 s. Middle: velocity v_x in metres per second. It rises in a straight line from 0 to 2 m/s by 4 s, stays at 2 m/s until 10 s, then falls in a straight line to 0 at 12 s. The three areas under it are labelled 4 m, 12 m and 2 m. Bottom: acceleration a_x in metres per second squared. It is 0.5 from 0 to 4 s, 0 from 4 to 10 s, and −1.0 from 10 to 12 s. The areas are labelled +2.0 m/s and −2.0 m/s.</desc>
<rect x="0" y="0" width="560" height="520" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 4" opacity="0.6"><path d="M220 25 V480 M430 25 V480"/></g>
<path d="M80 150 H515 M80 150 V25" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="end"><text x="72" y="154">0</text><text x="72" y="94">10</text><text x="72" y="34">20</text></g>
<text x="24" y="90" font-size="12" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 24 90)">x (m)</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="80.0,150.0 88.8,149.9 97.5,149.6 106.2,149.2 115.0,148.5 123.8,147.7 132.5,146.6 141.2,145.4 150.0,144.0 158.8,142.4 167.5,140.6 176.2,138.7 185.0,136.5 193.8,134.2 202.5,131.6 211.2,128.9 220.0,126.0 228.8,123.0 237.5,120.0 246.2,117.0 255.0,114.0 263.8,111.0 272.5,108.0 281.2,105.0 290.0,102.0 298.8,99.0 307.5,96.0 316.2,93.0 325.0,90.0 333.8,87.0 342.5,84.0 351.2,81.0 360.0,78.0 368.8,75.0 377.5,72.0 386.2,69.0 395.0,66.0 403.8,63.0 412.5,60.0 421.2,57.0 430.0,54.0 438.8,51.2 447.5,48.8 456.2,46.7 465.0,45.0 473.8,43.7 482.5,42.8 491.2,42.2 500.0,42.0"/>
<g font-size="11" fill="#1d2b44"><text x="226" y="140">4.0 m</text><text x="436" y="68">16 m</text><text x="470" y="34">18 m</text></g>
<g font-size="11" fill="#1d2b44" font-style="italic"><text x="100" y="120">curves up</text><text x="290" y="125">straight</text><text x="440" y="100">curves down</text></g>
<polygon fill="#fdf6e3" stroke="none" points="80,300 220,220 430,220 500,300"/>
<path d="M80 300 H515 M80 300 V190" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="end"><text x="72" y="304">0</text><text x="72" y="264">1</text><text x="72" y="224">2</text></g>
<text x="24" y="250" font-size="12" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 24 250)">v_x (m/s)</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="80,300 220,220 430,220 500,300"/>
<g font-size="12" fill="#1d2b44" font-weight="600" text-anchor="middle"><text x="175" y="285">4 m</text><text x="325" y="270">12 m</text><text x="455" y="285">2 m</text></g>
<path d="M80 420 H515 M80 420 V370 M80 420 V475" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="end"><text x="72" y="404">0.5</text><text x="72" y="424">0</text><text x="72" y="464">−1.0</text></g>
<text x="24" y="425" font-size="12" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 24 425)">a_x (m/s²)</text>
<path d="M80 400 H220 M220 420 H430 M430 460 H500" stroke="#1d2b44" stroke-width="3" fill="none"/>
<g font-size="12" fill="#1d2b44" font-weight="600" text-anchor="middle"><text x="150" y="392">area +2.0 m/s</text><text x="465" y="478">area −2.0 m/s</text></g>
<g font-size="12" fill="#1d2b44" text-anchor="middle"><text x="80" y="498">0</text><text x="220" y="498">4</text><text x="430" y="498">10</text><text x="500" y="498">12</text><text x="320" y="514" font-size="13">time, t (s)</text></g>
</svg>
<figcaption>Figure 2. The robot's three graphs, +x forward. Read down: each lower graph is the slope of the one above. Read up: each area gives the change in the quantity above. The x–t graph curves up, runs straight, then curves down, matching the sign of a_x in each stage.</figcaption>
</figure>

**Check.** Average velocity = 18 m ÷ 12 s = 1.5 m/s, less than the cruising 2.0 m/s, as expected with slow starts and finishes.

## Worked example 2: free fall in equations and symbols

**Question.** Take **+y upward**, origin at a footbridge rail 8.0 m above a river. A student tosses a stone straight up at 6.0 m/s from the rail. It misses the bridge on the way down. Ignore air resistance and use g = 9.8 m/s². Find (a) the greatest height above the water, (b) the velocity just before it hits the water, (c) the time in the air. Then (d) derive a symbolic expression for the time.

1. **Knowns.** y₀ = 0, v_y0 = +6.0 m/s, a_y = −9.8 m/s². The water is at y = −8.0 m.
2. **(a) Top of the path.** v_y = 0 there, and t is not needed, so use the equation with no t: 0 = 6.0² − 2(9.8)(y_top). So y_top = 36 ÷ 19.6 = 1.84 m. Height above water = 8.0 + 1.84 = **9.8 m**.
3. **(b) Impact velocity.** Again no t is needed: v_y² = 6.0² − 2(9.8)(−8.0 − 0) = 36 + 156.8 = 192.8. So v_y = **−14 m/s** (13.9 m/s downward). Take the negative root: the stone is moving down.
4. **(c) Time.** Now that v_y is known, the first equation avoids a quadratic: v_y = v_y0 − gt gives t = (6.0 − (−13.9)) ÷ 9.8 = **2.0 s**. Check with the position equation: −8.0 = 6.0t − 4.9t² has the positive root t = 2.03 s. The other root, −0.80 s, is before the throw, so reject it.
5. **(d) Symbol form.** Let the launch speed be v₀ and the height of the rail above the water be h. Then −h = v₀t − ½gt². Solve the quadratic and keep the positive root:

**t = [v₀ + √(v₀² + 2gh)] / g**

**Check.** Put v₀ = 6.0 m/s, h = 8.0 m, g = 9.8 m/s²: t = (6.0 + 13.9)/9.8 = 2.0 s. Units: (m/s)/(m/s²) = s. If h = 0, t = 2v₀/g, the familiar time to go up and come back to the launch level. With g = 10 m/s² you get 14 m/s and 2.0 s, the same to 2 significant figures.

## Common misconceptions

- **"The graph is a picture of the path."** An x–t graph that rises then falls does not mean the object went up a hill. It shows position along one axis against time.
- **"At the top, a = 0."** At the top of a throw, v_y = 0 but a_y = −g. The velocity is still changing, from upward to downward. The v_y–t graph crosses zero there with the same slope, −g, as everywhere else (see the arrow in Figure 1).
- **Reading the value instead of the slope.** The velocity is the slope of x–t, not its height. A large x can go with zero velocity.
- **"The area under a_x–t is the velocity."** It is the change in velocity. Add v_x0.
- **Using one set of constant-a equations across stages.** In Worked example 1, the acceleration changes twice. Treat each stage separately.
- **Sign of g.** g is a size, about 9.8 m/s². With +y upward, a_y = −g. Do not write a_y = −(−9.8).
- **Corners on an x–t graph.** A corner would mean an instant change in velocity. Real x–t graphs bend smoothly; corners appear on v_x–t graphs when a_x jumps.

## Where this leads

Topic 1.4, [Reference Frames and Relative Motion](/advanced-course-resources/physics-c-mechanics/1-4-reference-frames-relative-motion-study-guide/), asks how the same motion looks to different observers, and Topic 1.5 extends these representations to two and three dimensions. Try the [practice questions](/advanced-course-resources/physics-c-mechanics/1-3-representing-motion-practice/) now, then use the [revision notes](/advanced-course-resources/physics-c-mechanics/1-3-representing-motion-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/1-3-representing-motion-checklist/). You can also return to the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
