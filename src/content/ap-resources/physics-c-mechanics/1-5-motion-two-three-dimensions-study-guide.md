---
resourceId: "mb-ap-physcm-1.5-study-guide"
title: "Motion in Two or Three Dimensions: Study Guide (Physics C: Mechanics 1.5)"
description: "Calculus-based motion in a plane: position, velocity and acceleration as vector functions, splitting motion into independent components, non-uniform acceleration, and projectiles derived by integration."
course: "physics-c-mechanics"
unit: 1
topics: ["1.5"]
resourceType: "study-guide"
prerequisites:
  - "Resolving vectors into components and finding a magnitude and angle (Topic 1.1)"
  - "Velocity and acceleration as derivatives, and integration with initial conditions (Topic 1.2)"
prerequisiteResources: ["mb-ap-physcm-1.4-study-guide"]
learningObjectives:
  - "Write position, velocity and acceleration as vector functions of time and move between them by differentiating or integrating each component"
  - "Split motion in a plane into two one-dimensional motions that share only the time"
  - "Explain why a change in one component of motion leaves the perpendicular component unchanged"
  - "Handle motion where the acceleration is different in each direction and changes with time in one of them"
  - "Derive the projectile equations, the parabolic path and the level-ground range from a = (0, −g)"
  - "Predict how flight time and range change when launch speed or height change, and plan a video-analysis experiment"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "Calculus by hand; a calculator for arithmetic, square roots and trigonometry (set to degrees). We use g = 9.8 m/s², the value on the course equation table"
related: ["mb-ap-physcm-1.5-revision-notes", "mb-ap-physcm-1.5-practice", "mb-ap-physcm-1.5-checklist"]
next: "mb-ap-physcm-1.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Position is a vector function r(t) = x(t) i + y(t) j. Then v = dr/dt and a = dv/dt, worked out one component at a time."
  - "Motion in a plane is two one-dimensional motions. The only thing the components share is the time t."
  - "Velocity and acceleration can be different in each direction, and either component can change with time."
  - "Changing the motion along x does not change the motion along y. A horizontal push does not alter the fall."
  - "A projectile has a_x = 0 and a_y = −g (with +y up). Integrating gives a parabolic path."
faqs:
  - question: "How is this different from the Physics 1 version of Topic 1.5?"
    answer: "They are separate courses. Physics 1 is algebra-based and works with constant accelerations and trigonometry. Physics C: Mechanics writes motion as vector functions, uses derivatives and integrals for each component, and expects you to handle an acceleration that changes with time in one direction."
  - question: "Do I need to calculate motion in three dimensions?"
    answer: "No. In this course the calculations stay in two dimensions. The same component method works with a third axis, z, and you should be able to say so, but numerical problems use two axes."
  - question: "Is the speed zero at the top of a projectile's path?"
    answer: "No. Only v_y is zero there. The horizontal component is unchanged, so the speed at the top equals v_x0, and the acceleration is still g downward."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**How this differs from the Physics 1 version.** Physics C: Mechanics and Physics 1 are **separate courses**, and both have a Topic 1.5 about motion in two dimensions. This guide is the **calculus-based** one. It treats position as a vector function of time, differentiates and integrates each component, and handles an acceleration that changes with time in one direction. The algebra-based treatment is in the [Physics 1 study guide](/advanced-course-resources/physics-1/1-5-vectors-motion-two-dimensions-study-guide/); do not mix the two when you revise.

## Position, velocity and acceleration as vectors

In Topic 1.2 the object moved along one line, and a sign gave its direction. In a plane you need two numbers for every position. Choose axes first and write them down, for example **"+x east, +y north, origin at the start"** or **"+x horizontal, +y up"**.

The **position vector** points from the origin to the object:

**r(t) = x(t) i + y(t) j**

Here i and j are unit vectors along +x and +y. Velocity and acceleration are derivatives, exactly as before, but now of a vector:

**v = dr/dt = (dx/dt) i + (dy/dt) j**, so v_x = dx/dt and v_y = dy/dt

**a = dv/dt = (dv_x/dt) i + (dv_y/dt) j**, so a_x = dv_x/dt and a_y = dv_y/dt

Because the unit vectors i and j do not change, you differentiate (or integrate) **each component on its own**. Going backwards, you need an initial condition for each component:

**v_x(t) = v_x0 + ∫₀ᵗ a_x dt    v_y(t) = v_y0 + ∫₀ᵗ a_y dt**

**x(t) = x₀ + ∫₀ᵗ v_x dt    y(t) = y₀ + ∫₀ᵗ v_y dt**

To report a vector as a size and a direction, use Topic 1.1: speed **|v| = √(v_x² + v_y²)**, and the angle from tan θ = v_y / v_x, checked against a sketch so you pick the right quadrant. The velocity vector is always **tangent to the path**. The acceleration vector need not be.

**Three dimensions.** Add a third axis: r = x i + y j + z k, with a third set of component equations. The method does not change. In this course you are expected to **describe** three-dimensional motion this way, but numerical work stays in **two dimensions**.

## One motion, two one-dimensional problems

The big idea of this topic: **motion in a plane can be analysed as two separate one-dimensional motions**, one along each axis. Every tool from Topics 1.2 and 1.3 applies to each component. The two components are linked only by the **time**, which is the same for both.

Three consequences follow.

1. **The components can be different.** A ball might move at 6 m/s horizontally and 2 m/s vertically. Its acceleration might be zero along x and 9.8 m/s² along y. Nothing forces the two directions to match.
2. **Either component can be non-uniform.** An acceleration a_x that grows with time is handled by integration, just as in one dimension, even while a_y stays constant. The constant-acceleration equations may apply along one axis and not the other.
3. **Changing one component does not change the perpendicular one.** Push a puck sideways on frictionless ice and its forward velocity stays the same. Throw one ball horizontally and drop another from the same height at the same moment: with air resistance ignored, they reach the floor together, because both start with v_y0 = 0 and both have a_y = −g.

A useful habit: make a two-column table, **x | y**, and fill in the initial position, initial velocity and acceleration for each axis before you calculate anything. Then write t only once, because it belongs to both columns.

## Projectile motion: a special case

A **projectile** is an object moving under gravity alone near Earth's surface, with air resistance ignored. With **+x horizontal and +y up**:

**a_x = 0    a_y = −g**

So a projectile has zero acceleration in one dimension and a constant, non-zero acceleration in the other. Launch it from the origin with speed v₀ at angle θ above the horizontal, so v_x0 = v₀ cos θ and v_y0 = v₀ sin θ. Integrate each component:

1. v_x = v₀ cos θ (constant), and x = (v₀ cos θ) t
2. v_y = v₀ sin θ − gt, and y = (v₀ sin θ) t − ½gt²

Eliminate t using t = x / (v₀ cos θ):

**y = x tan θ − g x² / (2v₀² cos²θ)**

This has the form y = bx − cx², so the path is a **parabola**. On level ground, set y = 0: the flight time is t = 2v₀ sin θ / g and the **range** is

**R = 2v₀² sin θ cos θ / g = v₀² sin 2θ / g**

Use this formula **only** when launch and landing heights are equal. It shows some useful patterns:

- R ∝ v₀², so **doubling the launch speed multiplies the range by 4** and the flight time by 2.
- Complementary angles (for example 30° and 60°) give the same range, and 45° gives the greatest range on level ground.
- For a horizontal launch from height h, the fall time is t = √(2h/g), independent of the horizontal speed. Making h four times larger doubles the time.

<figure>
<svg viewBox="0 0 560 390" role="img" aria-labelledby="pcm15-traj-title pcm15-traj-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm15-traj-title">Path of a stone thrown from a 25 m cliff, with velocity components and acceleration</title>
<desc id="pcm15-traj-desc">Height y above the sea in metres against horizontal distance x in metres. A cliff 25 m high stands on the left. The stone leaves the cliff edge at 14 m/s, 35 degrees above the horizontal, rises to a maximum height of 28.3 m at x = 9.4 m, then falls in a parabola and enters the sea at x = 37.0 m. Dots mark the stone every 0.4 s; they are equally spaced horizontally. At the launch point, solid arrows show velocity components 11.5 m/s horizontal and 8.0 m/s upward. At the top only the horizontal component, 11.5 m/s, remains. At t = 2.8 s the components are 11.5 m/s horizontal and 19.4 m/s downward. Dashed arrows labelled g point straight down at three points, showing the acceleration is the same everywhere.</desc>
<defs><marker id="pcm15-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="390" fill="#ffffff"/>
<rect x="40" y="90" width="50" height="250" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M30 340 H530" stroke="#1d2b44" stroke-width="2"/>
<path d="M90 340 V30" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 3"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="90" y="358">0</text><text x="190" y="358">10</text><text x="290" y="358">20</text><text x="390" y="358">30</text><text x="490" y="358">40</text>
<text x="300" y="380" font-size="13">horizontal distance, x (m)</text>
</g>
<path d="M190 336 V344 M290 336 V344 M390 336 V344 M490 336 V344" stroke="#1d2b44" stroke-width="1.5"/>
<text x="65" y="220" font-size="12" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 65 220)">cliff, 25 m</text>
<text x="300" y="333" font-size="12" fill="#1d2b44">sea level, y = 0</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="90.0,90.0 99.2,83.8 108.5,78.3 117.7,73.5 127.0,69.2 136.2,65.6 145.4,62.6 154.7,60.3 163.9,58.6 173.1,57.5 182.4,57.1 191.6,57.3 200.9,58.2 210.1,59.6 219.3,61.8 228.6,64.5 237.8,67.9 247.0,71.9 256.3,76.6 265.5,81.9 274.8,87.8 284.0,94.4 293.2,101.6 302.5,109.4 311.7,117.9 321.0,127.0 330.2,136.8 339.4,147.1 348.7,158.2 357.9,169.8 367.1,182.1 376.4,195.0 385.6,208.6 394.9,222.8 404.1,237.6 413.3,253.1 422.6,269.2 431.8,286.0 441.0,303.3 450.3,321.3 459.5,340.0"/>
<g fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5">
<circle cx="90.0" cy="90.0" r="4"/><circle cx="135.9" cy="65.7" r="4"/><circle cx="181.7" cy="57.1" r="4"/><circle cx="227.6" cy="64.2" r="4"/><circle cx="273.5" cy="87.0" r="4"/><circle cx="319.4" cy="125.4" r="4"/><circle cx="365.2" cy="179.5" r="4"/><circle cx="411.1" cy="249.3" r="4"/><circle cx="457.0" cy="334.8" r="4"/>
</g>
<g stroke="#1d2b44" stroke-width="2" fill="none" marker-end="url(#pcm15-ah)">
<path d="M90 90 H118.7"/><path d="M90 90 V69.9"/>
<path d="M184 57.1 H212.7"/>
<path d="M411.1 249.3 H439.8"/><path d="M411.1 249.3 V297.8"/>
</g>
<g stroke="#1d2b44" stroke-width="1.8" fill="none" stroke-dasharray="5 3" marker-end="url(#pcm15-ah)">
<path d="M135.9 65.7 V90.2"/><path d="M273.5 87.0 V111.5"/><path d="M365.2 179.5 V204.0"/>
</g>
<g font-size="12" fill="#1d2b44">
<text x="95" y="48">8.0 m/s up</text>
<text x="96" y="110">11.5 m/s</text>
<text x="160" y="30">top: v = 11.5 m/s across, v_y = 0</text>
<text x="141" y="84">g</text><text x="281" y="110">g</text><text x="352" y="204">g</text>
<text x="444" y="244">11.5 m/s</text>
<text x="318" y="292">19.4 m/s down</text>
<text x="300" y="72">dots every 0.4 s:</text>
<text x="300" y="88">equal x-steps</text>
</g>
</svg>
<figcaption>Figure 1. Worked example 1, with +x horizontal and +y up. Solid arrows are velocity components; dashed arrows are the acceleration g, which is the same at every point. The dots, 0.4 s apart, are equally spaced across because v_x never changes, but their vertical spacing changes because v_y does.</figcaption>
</figure>

## Worked example 1: a stone thrown from a cliff

**Question.** Take **+x horizontal, away from the cliff, and +y up, with the origin at sea level directly below the cliff edge**. A stone is thrown from the edge, 25.0 m above the sea, at 14.0 m/s and 35.0° above the horizontal. Ignore air resistance. Find (a) the time until it reaches the sea, (b) how far from the cliff it lands, (c) its greatest height, and (d) its velocity as it enters the water.

**Set up the table.**

| | x | y |
|---|---|---|
| initial position | 0 | 25.0 m |
| initial velocity | 14.0 cos 35.0° = 11.47 m/s | 14.0 sin 35.0° = 8.03 m/s |
| acceleration | 0 | −9.8 m/s² |

1. **(a)** Integrating a_y twice gives y = 25.0 + 8.03t − 4.9t². Set y = 0 and solve the quadratic: t = [8.03 + √(8.03² + 2 × 9.8 × 25.0)] ÷ 9.8 = **3.2 s** (3.22 s). The other root is negative, so we reject it: the stone was not in flight before it was thrown.
2. **(b)** x = 11.47 × 3.22 = **37 m**.
3. **(c)** At the top v_y = 8.03 − 9.8t = 0, so t = 0.82 s. Rise = 8.03² ÷ (2 × 9.8) = 3.3 m, so the greatest height is **28 m above the sea** (28.3 m).
4. **(d)** v_x = 11.47 m/s (unchanged). v_y = 8.03 − 9.8 × 3.22 = −23.5 m/s. Speed = √(11.47² + 23.5²) = **26 m/s**, at tan⁻¹(23.5 ÷ 11.47) = **64° below the horizontal**.

**Check.** The constant-acceleration equation for y alone gives v_y² = 8.03² + 2 × 9.8 × 25.0, so |v_y| = 23.5 m/s, matching step 4.

**A tempting mistake.** R = v₀² sin 2θ / g gives 19 m here. That formula assumes landing at the launch height, which is not true when the stone drops 25 m below the cliff top.

## Worked example 2: a rover with changing acceleration

**Question.** Take **+x east and +y north**, origin at the start, on a flat test field. A small rover starts at the origin with velocity 2.0 m/s north. Its drive gives a_x = (0.60 m/s³)t, while a steering control gives a constant a_y = −0.40 m/s². Find v(t) and r(t), the moment the rover is moving due east, and its position and speed at that moment.

1. **x components (non-uniform).** v_x = 0 + ∫₀ᵗ 0.60t dt = **0.30t²** (m/s). x = ∫₀ᵗ 0.30t² dt = **0.10t³** (m).
2. **y components (uniform).** v_y = 2.0 − 0.40t (m/s). y = **2.0t − 0.20t²** (m).
3. **Due east** means v_y = 0 while v_x > 0: 2.0 − 0.40t = 0, so **t = 5.0 s**.
4. At t = 5.0 s: r = (0.10 × 125) i + (10 − 5.0) j = **12.5 i + 5.0 j m**. The rover is 13 m from the start, 22° north of east.
5. Speed = |v| = v_x = 0.30 × 25 = **7.5 m/s**, because v_y = 0.
6. Acceleration then: a = 3.0 i − 0.40 j m/s². It is **not** parallel to the velocity, which shows that v and a can point in different directions.

**What this shows.** The two directions behave differently: v_x grows faster and faster, while v_y falls steadily. The east drive has **no effect** on the north motion; if it were switched off, y at 5.0 s would still be 5.0 m. Using a constant a_x = 3.0 m/s² (its value at 5.0 s) for the whole run would give v_x = 15 m/s, twice the true value.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="pcm15-vt-title pcm15-vt-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm15-vt-title">Velocity components of the rover against time</title>
<desc id="pcm15-vt-desc">Velocity in metres per second from −2 to 12 against time in seconds from 0 to 6. The east component v_x is a solid curve starting at zero and curving upward to 10.8 m/s at 6 s, passing 7.5 m/s at 5 s. The north component v_y is a dashed straight line falling from 2.0 m/s at t = 0 to −0.4 m/s at 6 s, crossing zero at 5 s. A vertical dotted line at t = 5 s marks where the rover moves due east.</desc>
<rect x="0" y="0" width="560" height="330" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M140 306 V48 M210 306 V48 M280 306 V48 M350 306 V48 M490 306 V48"/>
<path d="M70 234 H500 M70 198 H500 M70 162 H500 M70 126 H500 M70 90 H500 M70 54 H500"/>
</g>
<path d="M70 306 V40 M70 270 H515" stroke="#1d2b44" stroke-width="2" fill="none"/>
<path d="M420 300 V60" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="1 3"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="140" y="288">1</text><text x="210" y="288">2</text><text x="280" y="288">3</text><text x="350" y="288">4</text><text x="420" y="320">5</text><text x="490" y="288">6</text>
<text x="250" y="320" font-size="13">time, t (s)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="310">−2</text><text x="62" y="274">0</text><text x="62" y="238">2</text><text x="62" y="202">4</text><text x="62" y="166">6</text><text x="62" y="130">8</text><text x="62" y="94">10</text><text x="62" y="58">12</text>
</g>
<text x="22" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 170)">velocity component (m/s)</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="70.0,270.0 87.5,269.7 105.0,268.6 122.5,267.0 140.0,264.6 157.5,261.6 175.0,257.9 192.5,253.5 210.0,248.4 227.5,242.7 245.0,236.2 262.5,229.2 280.0,221.4 297.5,213.0 315.0,203.8 332.5,194.1 350.0,183.6 367.5,172.5 385.0,160.7 402.5,148.2 420.0,135.0 437.5,121.2 455.0,106.7 472.5,91.5 490.0,75.6"/>
<path d="M70 234 L490 277.2" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="8 5" fill="none"/>
<circle cx="420" cy="135" r="4" fill="#1d2b44"/>
<circle cx="420" cy="270" r="4" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44">
<text x="300" y="150">solid curve: v_x = 0.30t² (east)</text>
<text x="90" y="222">dashed line: v_y = 2.0 − 0.40t (north)</text>
<text x="428" y="130">7.5 m/s at 5.0 s</text>
<text x="428" y="258">v_y = 0 at 5.0 s</text>
</g>
</svg>
<figcaption>Figure 2. Worked example 2. The east component (solid) is non-uniform: its slope, a_x, grows with time. The north component (dashed) has a constant slope of −0.40 m/s². At t = 5.0 s the dashed line crosses zero, so the rover is moving due east at 7.5 m/s.</figcaption>
</figure>

## Investigating motion in a plane

A good way to study two-dimensional motion in the lab is **video analysis**. Film a launched ball against a measuring scale, with the camera far away and square to the plane of motion to reduce perspective error. Step through the frames and record x and y at equal time intervals.

- Plot **x against t**. A straight line shows a_x = 0; its slope is v_x.
- For y, a straight-line graph is easier to judge than a curve. Since y = v_y0 t − ½gt², dividing by t gives **y/t = v_y0 − (g/2)t**. Plot y/t against t: the slope is −g/2 and the intercept is v_y0.
- To test that the components are independent, launch the ball horizontally at several different speeds from the same height. If the fall time stays the same while the horizontal distance grows in proportion to the speed, the evidence supports the claim.

Choose your scales so the data fill most of each axis, and label every axis with the quantity and unit.

## Common misconceptions

- **"The speed is zero at the top."** Only v_y is zero. The speed there is v_x0, and the acceleration is still g downward.
- **"A faster horizontal throw falls more slowly."** The fall time depends only on the vertical motion (Figure 1, and the dropped-and-thrown pair).
- **Using R = v₀² sin 2θ / g everywhere.** It only applies when launch and landing heights are equal (Worked example 1).
- **Using the constant-acceleration equations for a non-uniform component.** Integrate that component instead (Worked example 2).
- **Adding magnitudes of components.** A velocity of 3 m/s east and 4 m/s north is 5 m/s, not 7 m/s.
- **"The velocity and the acceleration point the same way."** The velocity is tangent to the path; the acceleration of a projectile always points down.
- **Using a different t for each component.** The time is the one thing the two directions share.

## Where this leads

This is the last topic of Unit 1. In Unit 2, Force and Translational Dynamics, Newton's second law is applied **component by component**, exactly like the x | y tables here, and forces that depend on time give the kind of non-uniform acceleration you met in Worked example 2. Earlier: [Topic 1.4, Reference Frames and Relative Motion](/advanced-course-resources/physics-c-mechanics/1-4-reference-frames-relative-motion-study-guide/), where a ball thrown from a moving vehicle becomes a projectile problem in the ground frame. Try the [practice questions](/advanced-course-resources/physics-c-mechanics/1-5-motion-two-three-dimensions-practice/) now, then use the [revision notes](/advanced-course-resources/physics-c-mechanics/1-5-motion-two-three-dimensions-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/1-5-motion-two-three-dimensions-checklist/). You can also return to the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
