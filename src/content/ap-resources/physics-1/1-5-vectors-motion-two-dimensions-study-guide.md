---
resourceId: "mb-ap-phys1-1.5-study-guide"
title: "Vectors and Motion in Two Dimensions: Study Guide (Physics 1 1.5)"
description: "Resolve vectors into perpendicular components with trigonometry, add them, and analyse two-dimensional and projectile motion as two separate one-dimensional problems linked by time."
course: "physics-1"
unit: 1
topics: ["1.5"]
resourceType: "study-guide"
prerequisites:
  - "Using signs for direction and the constant-acceleration equations in one dimension (Topics 1.1–1.3)"
  - "Right-angled triangle trigonometry: sine, cosine, tangent and Pythagoras' theorem"
prerequisiteResources: ["mb-ap-phys1-1.4-study-guide"]
learningObjectives:
  - "Split a vector into two perpendicular components using a stated coordinate system and sine, cosine or tangent"
  - "Rebuild a vector's size and direction from its components, checking the quadrant from a sketch"
  - "Add vectors such as successive displacements by adding their components"
  - "Treat motion in a plane as two one-dimensional motions that share the same time"
  - "Analyse projectiles with zero horizontal acceleration and constant downward vertical acceleration g"
  - "Predict how flight time and range change when launch speed, angle or height change, and plan a launch experiment"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "Algebra and trigonometry only; no calculus. Set your calculator to degrees. We use g = 9.8 m/s², the value on the course equation table; exam items that need a number for g use 10 m/s², and correct use of 9.8 m/s² is also accepted"
related: ["mb-ap-phys1-1.5-revision-notes", "mb-ap-phys1-1.5-practice", "mb-ap-phys1-1.5-checklist"]
next: "mb-ap-phys1-1.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Any vector can be replaced by two perpendicular components. With θ measured from the +x axis, A_x = A cos θ and A_y = A sin θ."
  - "Size and direction come back from A = √(A_x² + A_y²) and tan θ = A_y / A_x, but always sketch the vector to pick the right quadrant."
  - "Add vectors by adding their x-components and their y-components separately. Never add the magnitudes."
  - "Motion in two dimensions is two one-dimensional motions, one along each axis. The only thing they share is the time."
  - "A projectile has a_x = 0 and a_y = −g (with +y up), so its horizontal velocity never changes and its vertical velocity changes by 9.8 m/s every second."
faqs:
  - question: "Is the speed of a projectile zero at the top of its path?"
    answer: "No. Only the vertical component is zero there. The horizontal component is the same as at launch, so the speed at the top equals v_x0, and the acceleration is still g downward."
  - question: "Do I need to add velocities from moving frames at an angle, like a boat crossing a river?"
    answer: "Not in this course. Combining an object's velocity with a moving observer's velocity is kept to one dimension (Topic 1.4). In this topic you add components of vectors that describe one object, such as successive displacements."
  - question: "Does a heavier ball land sooner?"
    answer: "No, when air resistance is negligible, which the course assumes unless told otherwise. Mass does not appear in any projectile equation."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. Everything here uses algebra, trigonometry and graphs. If you are taking the calculus-based Physics C: Mechanics course, it has its own separate guide.

## From one axis to two

In one dimension, a + or − sign was enough to show direction. A ball kicked across a field moves forward **and** up and down at once, so we need **vectors** in two dimensions.

The trick of this topic is simple. Replace each vector with **two perpendicular components**, one along x and one along y. Each component is a signed number, like the one-dimensional quantities you already know. Then deal with each axis on its own.

As before, first write down a **coordinate system**, for example "+x east, +y north" or "+x horizontal in the direction of travel, +y up". Every sign in your answer depends on it.

## Resolving a vector into components

Draw the vector as an arrow from the origin and drop a line from its tip to the x-axis. This makes a right-angled triangle: the vector is the hypotenuse and the two shorter sides are the **components**.

If θ is the angle between the vector and the **+x axis**, right-angle trigonometry gives:

**A_x = A cos θ**  and  **A_y = A sin θ**

Here A is the magnitude (size) of the vector. It is never negative. The components can be negative: a component is negative when it points along −x or −y.

<figure>
<svg viewBox="0 0 480 300" role="img" aria-labelledby="p15-comp-title p15-comp-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p15-comp-title">A displacement vector resolved into perpendicular components</title>
<desc id="p15-comp-desc">Axes key: +x points east (right) and +y points north (up). A solid arrow labelled A equals 150 m starts at the origin and points 25 degrees above the +x direction. A dashed horizontal arrow from the origin, labelled A_x equals A cos 25 degrees equals 136 m, runs along the x direction to directly below the tip of A. A dashed vertical arrow, labelled A_y equals A sin 25 degrees equals 63.4 m, runs from there up to the tip of A. The three arrows form a right-angled triangle with A as the hypotenuse, and a small square marks the right angle.</desc>
<defs><marker id="p15-ah1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="480" height="300" fill="#ffffff"/>
<line x1="30" y1="70" x2="80" y2="70" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#p15-ah1)"/>
<line x1="30" y1="70" x2="30" y2="20" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#p15-ah1)"/>
<text x="86" y="74" font-size="12" fill="#1d2b44">+x (east)</text>
<text x="38" y="24" font-size="12" fill="#1d2b44">+y (north)</text>
<line x1="80" y1="260" x2="351.9" y2="260" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 5" marker-end="url(#p15-ah1)"/>
<line x1="351.9" y1="260" x2="351.9" y2="133.2" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 5" marker-end="url(#p15-ah1)"/>
<path d="M341.9 260 V250 H351.9" fill="none" stroke="#1d2b44" stroke-width="1"/>
<line x1="80" y1="260" x2="351.9" y2="133.2" stroke="#1d2b44" stroke-width="3" marker-end="url(#p15-ah1)"/>
<path d="M130 260 A50 50 0 0 0 125.3 238.9" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<text x="136" y="252" font-size="12" fill="#1d2b44">25°</text>
<circle cx="80" cy="260" r="4" fill="#1d2b44"/>
<text x="200" y="176" font-size="13" fill="#1d2b44" font-weight="600">A = 150 m</text>
<text x="215" y="282" font-size="12" fill="#1d2b44" text-anchor="middle">A_x = A cos 25° = 136 m (dashed)</text>
<text x="362" y="190" font-size="12" fill="#1d2b44">A_y = A sin 25°</text>
<text x="362" y="206" font-size="12" fill="#1d2b44">= 63.4 m (dashed)</text>
<text x="60" y="282" font-size="12" fill="#1d2b44" text-anchor="middle">start</text>
</svg>
<figcaption>Figure 1. The first leg of the drone flight in Worked example 1, with +x east and +y north. The vector A (solid) is the hypotenuse of a right-angled triangle. Its components (dashed) are the two perpendicular sides: A_x = A cos θ and A_y = A sin θ, with θ = 25° measured from the +x axis. Check: √(136² + 63.4²) = 150 m.</figcaption>
</figure>

The three trigonometric ratios you need, for a right-angled triangle, are:

| Ratio | Meaning | Use it to find |
|---|---|---|
| sin θ = opposite / hypotenuse | side opposite θ ÷ longest side | the component opposite the angle |
| cos θ = adjacent / hypotenuse | side next to θ ÷ longest side | the component next to the angle |
| tan θ = opposite / adjacent | ratio of the two components | the direction from the components |

Together with **Pythagoras' theorem**, a² + b² = c², these are all the mathematics this topic needs. The course equation sheet also lists sine, cosine and tangent values for some common angles.

**A warning about cos and sin.** "x uses cos, y uses sin" is true only when θ is measured from the x-axis. If a question gives the angle from the vertical, the y-component is next to the angle and uses cos. Always ask: which side of the triangle is **adjacent** to the angle I was given?

## Rebuilding a vector from its components

Going the other way, the components give back the size and direction:

**A = √(A_x² + A_y²)**  and  **tan θ = A_y / A_x**

A calculator's tan⁻¹ only returns angles between −90° and +90°, so **sketch the vector first** to choose the quadrant.

For example, a displacement has components (−5.0 m, +12.0 m). Its size is √(5.0² + 12.0²) = 13.0 m. A calculator gives tan⁻¹(12.0 ÷ −5.0) = −67.4°, which points down and to the right. That is wrong. The sketch shows the vector points **up and to the left**: it is 67.4° above the −x axis, which is 112.6° from the +x axis.

## Choosing a coordinate system

You may choose **any** pair of perpendicular axes. The vector does not change; only its components do.

A cart rolls down a 20° ramp at 3.0 m/s. With +x horizontal and +y up, its velocity components are v_x = 3.0 cos 20° = 2.82 m/s and v_y = −3.0 sin 20° = −1.03 m/s. With +x pointing **down the ramp**, the same velocity is simply v_x = 3.0 m/s and v_y = 0. The second choice turns a two-dimensional problem into a one-dimensional one. Pick the axes that make your problem simplest, then stick with them.

## Adding vectors by components

To add two or more vectors, add their components axis by axis:

**R_x = A_x + B_x**  and  **R_y = A_y + B_y**

Then rebuild the resultant R from R_x and R_y. You **cannot** add the magnitudes, unless both vectors point the same way. Worked example 1 shows the whole method.

**Scope note.** Combining an object's velocity with a moving observer's velocity stays in one dimension in this course (Topic 1.4). Here you add vectors that describe one object, such as successive displacements.

## Worked example 1: a drone's two-leg flight

**Question.** Take **+x east and +y north**, with the origin at the launch pad. A survey drone flies 150 m at 25° north of east, then 100 m at 60° north of west. The whole flight takes 50 s. Find (a) the drone's resultant displacement, as a size and direction, and (b) its average velocity and average speed.

1. **Leg 1 (A).** The angle is measured from +x, so A_x = 150 cos 25° = **+135.9 m** and A_y = 150 sin 25° = **+63.4 m** (Figure 1).
2. **Leg 2 (B).** "60° north of west" points up and to the left. Measured from the −x axis, the horizontal side is next to the angle: B_x = −100 cos 60° = **−50.0 m** and B_y = +100 sin 60° = **+86.6 m**. (Equivalently, the angle from +x is 120°, and 100 cos 120° = −50.0 m.)
3. **Add components.** R_x = 135.9 − 50.0 = **+85.9 m**. R_y = 63.4 + 86.6 = **+150.0 m**.
4. **Size.** R = √(85.9² + 150.0²) = **173 m**.
5. **Direction.** Both components are positive, so R is in the first quadrant and the calculator angle is correct: tan⁻¹(150.0 ÷ 85.9) = **60.2° north of east**.
6. **Average velocity** = displacement ÷ time = 173 m ÷ 50 s = **3.46 m/s at 60.2° north of east**. **Average speed** = distance ÷ time = (150 + 100) m ÷ 50 s = **5.00 m/s**.

**Check.** The resultant (173 m) is less than the path length (250 m), as it must be: a straight line from start to finish is never longer than the path. That is also why the average speed exceeds the size of the average velocity.

## Motion in two dimensions: one problem becomes two

Here is the key idea: **the x-motion and the y-motion are independent.** Each component follows the one-dimensional rules from Topics 1.2 and 1.3:

| Along x | Along y |
|---|---|
| v_x = v_x0 + a_x t | v_y = v_y0 + a_y t |
| x = x₀ + v_x0 t + ½ a_x t² | y = y₀ + v_y0 t + ½ a_y t² |
| v_x² = v_x0² + 2a_x(x − x₀) | v_y² = v_y0² + 2a_y(y − y₀) |

They hold when each acceleration component is constant. The **time t is the same in both columns**: it links the two problems. A typical solution finds t from one axis and uses it in the other.

## Projectile motion

A **projectile** moves only under gravity after launch, with air resistance negligible (the course assumes this unless told otherwise). Take **+y up**. Then:

- **a_x = 0.** v_x stays equal to v_x0 for the whole flight: x = x₀ + v_x0 t.
- **a_y = −g = −9.8 m/s².** The vertical motion is the free fall you met in Topics 1.2 and 1.3: v_y = v_y0 − g t and y = y₀ + v_y0 t − ½ g t².

So projectile motion is a special case of two-dimensional motion: **zero acceleration in one direction and constant, non-zero acceleration in the other**. The path is a curve (a parabola), but each component is simple.

If an object is launched at speed v₀ and angle θ above the horizontal, its starting components are v_x0 = v₀ cos θ and v_y0 = v₀ sin θ.


## Worked example 2: a marble rolls off a bench

**Question.** Take **+x horizontal in the direction of motion and +y up**, with the origin on the floor directly below the edge of a lab bench. A marble rolls off the bench edge at 2.50 m/s. The bench top is 1.20 m above the floor. Find (a) how long the marble is in the air, (b) how far from the bench it lands, and (c) its velocity just before it lands.

1. **Starting values.** v_x0 = 2.50 m/s, v_y0 = 0 (it leaves horizontally), x₀ = 0, y₀ = 1.20 m, a_y = −9.8 m/s².
2. **Time from the vertical motion.** It lands when y = 0: 0 = 1.20 − ½(9.8)t², so t² = 1.20 ÷ 4.9 and t = **0.495 s**.
3. **Horizontal distance.** x = v_x0 t = 2.50 m/s × 0.495 s = **1.24 m** from the foot of the bench.
4. **Final velocity components.** v_x = 2.50 m/s (unchanged). v_y = 0 − 9.8 × 0.495 = **−4.85 m/s**.
5. **Final velocity.** Size √(2.50² + 4.85²) = **5.46 m/s**. Direction tan⁻¹(4.85 ÷ 2.50) = **62.7° below the horizontal**.

**Check.** The time came only from the height. A second marble simply dropped from the bench edge at the same moment would also take 0.495 s and land at the same instant. The horizontal speed changes where the marble lands, not when.

## Worked example 3: a ball kicked from level ground

**Question.** Take **+x horizontal in the direction of travel and +y up**, origin at the launch point. A ball is kicked from level ground at 18.0 m/s, 40.0° above the horizontal. Find (a) the time to reach the highest point, (b) the maximum height, (c) the total time of flight, (d) the range and (e) the ball's velocity at the highest point.

1. **Components.** v_x0 = 18.0 cos 40.0° = **13.8 m/s**. v_y0 = 18.0 sin 40.0° = **11.6 m/s** (11.57 m/s; keep the unrounded value).
2. **(a) Highest point.** There v_y = 0. From v_y = v_y0 − g t: t_top = 11.57 ÷ 9.8 = **1.18 s**.
3. **(b) Maximum height.** From v_y² = v_y0² + 2a_y(y − y₀): 0 = 11.57² − 2(9.8)H, so H = 11.57² ÷ 19.6 = **6.83 m**.
4. **(c) Time of flight.** It lands when y = 0 again: 0 = v_y0 t − ½ g t², so t = 2v_y0 ÷ g = **2.36 s**, exactly twice t_top.
5. **(d) Range.** R = v_x0 × t = 13.79 m/s × 2.361 s = **32.6 m**.
6. **(e) At the top.** v_y = 0 but v_x = 13.8 m/s, so the velocity is **13.8 m/s horizontally**, not zero. The acceleration is still 9.8 m/s² downward.

**Check.** On level ground the path is symmetric. The ball lands with v_y = −11.6 m/s and v_x = 13.8 m/s, so its landing speed is 18.0 m/s, the same as the launch speed.

<figure>
<svg viewBox="0 0 580 330" role="img" aria-labelledby="p15-traj-title p15-traj-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p15-traj-title">Trajectory of a ball launched at 18.0 m/s and 40.0° above level ground, with velocity components</title>
<desc id="p15-traj-desc">A symmetric curved path rises from the launch point on level ground to a highest point 6.83 m up and 16.3 m across, then falls to land 32.6 m from the launch point after 2.36 s. Five equally spaced moments in time are marked with dots. At every dot a solid horizontal arrow of the same length shows the horizontal velocity component, 13.8 m/s. A dashed vertical arrow shows the vertical velocity component: +11.6 m/s upward at launch, +5.8 m/s upward a quarter of the way through the flight, zero at the top, −5.8 m/s downward three quarters of the way through, and −11.6 m/s downward at landing. A separate labelled arrow shows that the acceleration is 9.8 m/s² downward at every point.</desc>
<defs><marker id="p15-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="580" height="330" fill="#ffffff"/>
<path d="M20 230 H560" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.6"><path d="M267.9 230 V134.4"/></g>
<path d="M40 230 Q267.9 38.8 495.8 230" fill="none" stroke="#1d2b44" stroke-width="2"/>
<line x1="40.0" y1="230.0" x2="95.2" y2="230.0" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p15-ah)"/>
<line x1="40.0" y1="230.0" x2="40.0" y2="183.7" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#p15-ah)"/>
<circle cx="40.0" cy="230.0" r="4.5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="30.0" y="175.7" font-size="12" fill="#1d2b44" text-anchor="middle">v_y +11.6</text>
<line x1="154.0" y1="158.3" x2="209.1" y2="158.3" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p15-ah)"/>
<line x1="154.0" y1="158.3" x2="154.0" y2="135.1" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#p15-ah)"/>
<circle cx="154.0" cy="158.3" r="4.5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="144.0" y="127.1" font-size="12" fill="#1d2b44" text-anchor="middle">v_y +5.8</text>
<line x1="267.9" y1="134.4" x2="323.1" y2="134.4" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p15-ah)"/>
<circle cx="267.9" cy="134.4" r="4.5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="257.9" y="120.4" font-size="12" fill="#1d2b44" text-anchor="middle">v_y 0</text>
<line x1="381.9" y1="158.3" x2="437.0" y2="158.3" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p15-ah)"/>
<line x1="381.9" y1="158.3" x2="381.9" y2="181.4" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#p15-ah)"/>
<circle cx="381.9" cy="158.3" r="4.5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="371.9" y="197.4" font-size="12" fill="#1d2b44" text-anchor="middle">v_y −5.8</text>
<line x1="495.8" y1="230.0" x2="551.0" y2="230.0" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p15-ah)"/>
<line x1="495.8" y1="230.0" x2="495.8" y2="276.3" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#p15-ah)"/>
<circle cx="495.8" cy="230.0" r="4.5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="435.8" y="292.3" font-size="12" fill="#1d2b44" text-anchor="middle">v_y −11.6</text>
<line x1="535" y1="66" x2="535" y2="112" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p15-ah)"/>
<text x="524" y="84" font-size="12" fill="#1d2b44" text-anchor="end">a = 9.8 m/s²</text>
<text x="524" y="100" font-size="12" fill="#1d2b44" text-anchor="end">downward, at every point</text>
<text x="40" y="30" font-size="12" fill="#1d2b44">solid arrows: v_x = 13.8 m/s (same length every time)</text>
<text x="40" y="48" font-size="12" fill="#1d2b44">dashed arrows: v_y in m/s (changes by the same amount each step)</text>
<text x="273.9" y="200" font-size="12" fill="#1d2b44">H = 6.83 m</text>
<text x="40.0" y="250" font-size="12" fill="#1d2b44">launch, t = 0</text>
<text x="495.8" y="318" font-size="12" fill="#1d2b44" text-anchor="end">landing: t = 2.36 s, R = 32.6 m</text>
<text x="40" y="66" font-size="12" fill="#1d2b44">+x horizontal, +y up; dots are 0.59 s apart</text>
</svg>
<figcaption>Figure 2. The ball in Worked example 3, drawn to scale, with dots at equal time intervals of 0.59 s. The horizontal component of velocity (solid arrows) never changes, so the dots are equally spaced across. The vertical component (dashed arrows) falls by 5.8 m/s every interval, is zero at the top and is −11.6 m/s at landing. The acceleration is 9.8 m/s² downward throughout, including at the top.</figcaption>
</figure>

In Figure 2, equal time steps give **equal horizontal steps** (constant v_x) but **unequal vertical steps** (changing v_y): the independence of the two motions, drawn to scale.

## Predicting changes without starting again

You can often predict a result from how the quantities depend on each other, without a full calculation.

**Launched horizontally from height h.** From y-motion, h = ½ g t², so t = √(2h / g). Then the landing distance is x = v_x0 √(2h / g).

- Double the launch speed: same time, **twice the distance**.
- Double the height: time and distance both grow by √2 ≈ 1.41, not by 2.
- Four times the height: time and distance both **double**.

**Launched from level ground and landing at the same level.** From Worked example 3, t = 2v_y0 / g, so the range is **R = 2v_x0 v_y0 / g**.

- Double the launch speed at the same angle: both components double, so the range is **four times** larger.
- Swap the two components, for example 40° and 50° at the same speed: the product v_x0 v_y0 is unchanged, so the **range is the same**. At 50° the ball goes higher (9.70 m instead of 6.83 m) and stays up longer, but moves across more slowly.

## Planning a launch experiment

To test x = v_x0 √(2h / g), release a ball from the same mark on a short ramp clamped to a table, so it always leaves the edge horizontally at the same speed. Change the table height h and measure it with a metre rule. Mark each landing spot with carbon paper and measure x from a plumb line below the edge. Repeat each height several times and average.

Plotting x against h gives a curve. Plotting x against **√h** should give a straight line through the origin, with slope v_x0 √(2 / g). From the slope you can find the launch speed. Practice Question 6 takes you through this analysis.

## Limiting cases worth knowing

- **Launched straight up (θ = 90°).** v_x0 = 0, so the range is zero: the vertical throw from Topic 1.2.
- **Launched along level ground (θ = 0°).** v_y0 = 0, so the flight time and range are zero.
- **Just after launch.** The path is almost straight along the launch direction, because gravity has had little time to change v_y.

## Common misconceptions

- **"The velocity is zero at the top."** Only v_y is zero. The speed at the top equals v_x0 (Worked example 3 and Figure 2).
- **"The acceleration is zero at the top."** It is g downward at every point of the flight, including the top.
- **"The horizontal velocity slowly dies away."** With negligible air resistance a_x = 0, so v_x never changes.
- **"A ball thrown sideways stays up longer than one dropped."** The fall time depends only on the vertical motion (Worked example 2).
- **"The x-component always uses cos."** Only when the angle is measured from the x-axis. Check which side is adjacent to the given angle.
- **"Add the magnitudes to get the resultant."** 150 m plus 100 m did not give 250 m in Worked example 1. Add components.
- **"tan⁻¹ gives the direction."** It gives an angle between −90° and +90°. Sketch the vector to choose the quadrant.
- **"A steeper launch always goes farther."** On level ground, 40° and 50° at the same speed give the same range.
- **"A heavier ball falls faster."** Mass appears in no projectile equation when air resistance is negligible.

## Where this leads

This is the last topic of Unit 1. In Unit 2 you will resolve **forces** into components with the same trigonometry and treat each axis separately. To review reference frames, revisit the [Topic 1.4 study guide](/advanced-course-resources/physics-1/1-4-reference-frames-relative-motion-study-guide/). Try the [practice questions](/advanced-course-resources/physics-1/1-5-vectors-motion-two-dimensions-practice/) now, then use the [revision notes](/advanced-course-resources/physics-1/1-5-vectors-motion-two-dimensions-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/1-5-vectors-motion-two-dimensions-checklist/) to consolidate. You can also return to the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
