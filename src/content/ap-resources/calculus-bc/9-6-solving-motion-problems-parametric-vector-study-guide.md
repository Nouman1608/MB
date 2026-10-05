---
resourceId: "mb-ap-calcbc-9.6-study-guide"
title: "Solving Motion Problems Using Parametric and Vector-Valued Functions: Study Guide (Calculus BC 9.6)"
description: "Solve planar motion problems: velocity, speed and acceleration from derivatives, direction of motion, and displacement, position and total distance from integrals."
course: "calculus-bc"
unit: 9
topics: ["9.6"]
resourceType: "study-guide"
calculusScope: "bc-only"
prerequisites:
  - "Vector-valued functions and their derivatives (Topic 9.4)"
  - "Integrating vector-valued functions with initial conditions (Topic 9.5)"
  - "Arc length of a parametric curve (Topic 9.3)"
  - "Straight-line motion: position, velocity, acceleration, displacement and distance (Topics 4.2 and 8.2)"
prerequisiteResources: ["mb-ap-calcbc-9.5-study-guide"]
learningObjectives:
  - "Find the velocity vector, acceleration vector and speed of a particle moving in the plane"
  - "Read the direction of motion from the signs of dx/dt and dy/dt, and decide when a particle is at rest"
  - "Decide whether the speed is increasing or decreasing at a given time, with a reason"
  - "Use the definite integral of velocity to find displacement and position"
  - "Use the definite integral of speed to find total distance travelled, and compare it with the size of the displacement"
skills: ["1", "3"]
studyMinutes: 55
difficulty: "core"
calculator: "mixed"
calculatorNote: "Derivatives and simple integrals by hand. Total distance usually needs a graphing calculator; give decimals to 3 decimal places and keep more digits in working."
related: ["mb-ap-calcbc-9.6-revision-notes", "mb-ap-calcbc-9.6-practice", "mb-ap-calcbc-9.6-checklist"]
next: "mb-ap-calcbc-9.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only: this topic is not part of Calculus AB."
  - "Velocity v(t) = ⟨x′(t), y′(t)⟩ and acceleration a(t) = ⟨x″(t), y″(t)⟩ are vectors; speed √((x′)² + (y′)²) is a number."
  - "The particle is at rest only when x′ and y′ are both 0 at the same time."
  - "Displacement = ∫ from a to b of v(t) dt (a vector). Total distance = ∫ from a to b of speed dt (a number)."
  - "Speed is increasing when x′x″ + y′y″ > 0 and decreasing when it is < 0."
faqs:
  - question: "Do Calculus AB students need this?"
    answer: "No. Motion in the plane is BC-only content. AB students study motion along a line in Topics 4.2 and 8.2."
  - question: "Is total distance travelled the same as arc length?"
    answer: "It uses the same integral, ∫ √((x′)² + (y′)²) dt. If the particle goes over part of its path twice, the distance counts that part twice, while the length of the curve as a shape does not."
  - question: "Can I decide whether speed is increasing just by looking at the acceleration vector?"
    answer: "Not from its size alone. You need to compare its direction with the velocity, which is what the sign of x′x″ + y′y″ does. You can also differentiate the speed directly."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**BC-only material.** Motion in the plane is part of Calculus BC only. Calculus AB students do not need this topic.

## Before you start: prerequisites

This topic puts together the derivative work of Topic 9.4, the integral work of [Topic 9.5](/advanced-course-resources/calculus-bc/9-5-integrating-vector-valued-functions-study-guide/) and the motion ideas you met for a single line. If any row is shaky, revisit it from the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) first.

| Prerequisite | Topic | What you use it for here |
|---|---|---|
| Derivatives of vector-valued functions | 9.4 | Velocity and acceleration vectors |
| Integrating with initial conditions | 9.5 | Position from velocity |
| Arc length of a parametric curve | 9.3 | The same integral gives distance travelled |
| Straight-line motion | 4.2, [8.2](/advanced-course-resources/calculus-ab/8-2-connecting-position-velocity-acceleration-functions-study-guide/) | Displacement versus distance, speeding up and slowing down |

**Notation on this page.** A particle's position is **r(t) = ⟨x(t), y(t)⟩**, the same as the parametric pair x = x(t), y = y(t). Primes mean derivatives with respect to time t. **∫ from a to b of f(t) dt** is a definite integral.

## The motion toolkit

Every quantity in a planar motion problem comes from position by differentiating or from velocity by integrating.

| Quantity | Formula | Type |
|---|---|---|
| Velocity | v(t) = r′(t) = ⟨x′(t), y′(t)⟩ | vector |
| Acceleration | a(t) = v′(t) = ⟨x″(t), y″(t)⟩ | vector |
| Speed | \|v(t)\| = √((x′(t))² + (y′(t))²) | number, never negative |
| Slope of the path | dy/dx = y′(t) / x′(t), where x′(t) ≠ 0 | number |
| Displacement on [a, b] | ∫ from a to b of v(t) dt = r(b) − r(a) | vector |
| Position at time b | r(b) = r(a) + ∫ from a to b of v(t) dt | vector (a point) |
| Total distance on [a, b] | ∫ from a to b of √((x′(t))² + (y′(t))²) dt | number |
| Average speed on [a, b] | total distance ÷ (b − a) | number |

The two rows to keep apart are **velocity versus speed** and **displacement versus distance**. Velocity and displacement are vectors; they carry direction. Speed and distance are sizes; they are never negative.

## Derivatives: velocity, speed and direction

**Velocity** is the derivative of position, one component at a time. It points along the path, in the direction the particle is moving. **Speed** is the length of the velocity vector, found with Pythagoras.

**Direction of motion** comes from the signs of the two components:

- x′(t) > 0: moving right; x′(t) < 0: moving left.
- y′(t) > 0: moving up; y′(t) < 0: moving down.
- x′(t) = 0 and y′(t) ≠ 0: moving straight up or down at that instant (a vertical tangent).
- y′(t) = 0 and x′(t) ≠ 0: moving straight left or right (a horizontal tangent).
- **At rest only if x′(t) = 0 and y′(t) = 0 at the same time.** One zero component is not enough.

**Acceleration** is the derivative of velocity: a(t) = ⟨x″(t), y″(t)⟩. It is a vector too. It does not have to point along the path.

## Is the speed increasing or decreasing?

For motion along a line, speed increases when velocity and acceleration have the same sign. In the plane there are two components, so you look at the derivative of the speed. Let s(t) = √((x′)² + (y′)²). By the chain rule,

**s′(t) = (x′x″ + y′y″) / s(t)**

The denominator is positive whenever the particle is moving. So:

> **Speed is increasing when x′x″ + y′y″ > 0, and decreasing when x′x″ + y′y″ < 0.**

Each product x′x″ and y′y″ is the "same sign test" from line motion, applied to one coordinate. When a calculator is allowed, you can instead define the speed function and find its derivative numerically; the sign tells you the same thing. Either way, state the sign and what it means.

## Worked example 1: a full analysis without a calculator

**Question.** A particle moves in the plane with position

**r(t) = ⟨2t³ − 9t² + 12t, 4t − t²⟩ for 0 ≤ t ≤ 3.**

(a) Find v(t) and a(t). (b) When is the particle at rest? (c) Describe the direction of motion on each part of the interval. (d) Find the speed at t = 3 and decide whether the speed is increasing or decreasing there. (e) Find the displacement from t = 0 to t = 3.

**(a) Derivatives.**
- **v(t) = ⟨6t² − 18t + 12, 4 − 2t⟩ = ⟨6(t − 1)(t − 2), −2(t − 2)⟩**
- **a(t) = ⟨12t − 18, −2⟩**

**(b) At rest.** x′(t) = 0 at t = 1 and t = 2. y′(t) = 0 at t = 2 only. Both are zero only at **t = 2**, so the particle is at rest at t = 2, at the point r(2) = (4, 4). At t = 1, v(1) = ⟨0, 2⟩: the particle is moving straight up, not at rest.

**(c) Direction.** Use the factored forms to build a sign table.

| Interval | x′(t) | y′(t) | Motion |
|---|---|---|---|
| 0 < t < 1 | + | + | right and up |
| 1 < t < 2 | − | + | left and up |
| 2 < t < 3 | + | − | right and down |

**(d) Speed at t = 3.** v(3) = ⟨12, −2⟩, so the speed is √(144 + 4) = √148 = **2√37 ≈ 12.166**.
a(3) = ⟨18, −2⟩. Then x′x″ + y′y″ = 12 · 18 + (−2)(−2) = 220 > 0, so the **speed is increasing** at t = 3.

Compare t = 1: v(1) = ⟨0, 2⟩ and a(1) = ⟨−6, −2⟩ give 0 · (−6) + 2 · (−2) = −4 < 0, so at t = 1 the speed (2) is decreasing. That fits: the particle is about to stop at t = 2.

**(e) Displacement.** You already know r(t), so use r(3) − r(0) = ⟨54 − 81 + 36, 12 − 9⟩ − ⟨0, 0⟩ = **⟨9, 3⟩**. The particle ends 9 units right and 3 units up from where it started. The straight-line distance between start and end is √90 = 3√10 ≈ 9.487.

**Check.** The total distance travelled is larger, because the particle doubles back in x on 1 < t < 2 and in y on 2 < t < 3. A graphing calculator gives ∫ from 0 to 3 of √((x′)² + (y′)²) dt ≈ 12.638, which is indeed more than 9.487. ✓

## Integrals: displacement, position and distance

**Displacement** is the net change in position, so it is the definite integral of the velocity vector:

**∫ from a to b of v(t) dt = ⟨∫ from a to b of x′(t) dt, ∫ from a to b of y′(t) dt⟩ = r(b) − r(a)**

Adding the starting position gives the **position** at time b, exactly as in Topic 9.5.

**Total distance travelled** counts every bit of the path, so you integrate the **speed**:

**distance = ∫ from a to b of √((x′(t))² + (y′(t))²) dt**

This is the arc length integral from Topic 9.3, read as a motion question. Because speed is never negative, distance is never negative, and it is never less than the length of the displacement vector.

**An exact example.** Suppose v(t) = ⟨3t², 6t⟩ for 0 ≤ t ≤ √5. The speed is √(9t⁴ + 36t²) = 3t√(t² + 4) (since t ≥ 0). With u = t² + 4, du = 2t dt:

**∫ from 0 to √5 of 3t√(t² + 4) dt = [(t² + 4)^(3/2)] from 0 to √5 = 27 − 8 = 19.**

The displacement is ⟨[t³] from 0 to √5, [3t²] from 0 to √5⟩ = ⟨5√5, 15⟩, whose length is √350 ≈ 18.708. Here the path barely bends, so the two values are close, but the distance is still the larger one. Most speed integrals have no antiderivative you can write down, so expect to use a calculator for distance.

## Worked example 2: with a graphing calculator

**Context.** A toy hovercraft glides over a flat playground. Its position is measured in metres, with x east and y north, and t is in seconds. Its velocity is

**v(t) = ⟨3 cos(0.6t), 1 + sin(t²/5)⟩ m/s for 0 ≤ t ≤ 5,**

and at t = 0 it is at (1, 2).

<figure>
<svg viewBox="0 0 540 350" role="img" aria-labelledby="hov96-title hov96-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="hov96-title">Path of the hovercraft for 0 ≤ t ≤ 5, with its displacement and its velocity at t = 2</title>
<desc id="hov96-desc">Axes with equal scales show x in metres from 0 to 7 and y in metres from 0 to 9. A solid curve starts at (1, 2) when t = 0 and moves right and up through (3.8, 3.1) at t = 1 and (5.7, 4.5) at t = 2. It reaches its furthest east point, x = 6, at about t = 2.62, marked with an open circle, then bends back left while still rising, through (5.9, 6.4) at t = 3 and (4.4, 8.0) at t = 4, ending at about (1.7, 8.3) at t = 5. A dashed arrow goes almost straight up from the start (1, 2) to the end (1.7, 8.3): this is the displacement. A thick solid arrow at the t = 2 point points up and to the right, along the path: this is the velocity v(2). A key on the right gives the path length as about 12.324 metres and the displacement length as about 6.345 metres.</desc>
<rect x="0" y="0" width="540" height="350" fill="#ffffff"/>
<line x1="70" y1="310" x2="300" y2="310" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="70" y1="320" x2="70" y2="15" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="134" y1="306" x2="134" y2="314"/><line x1="198" y1="306" x2="198" y2="314"/><line x1="262" y1="306" x2="262" y2="314"/>
<line x1="66" y1="246" x2="74" y2="246"/><line x1="66" y1="182" x2="74" y2="182"/><line x1="66" y1="118" x2="74" y2="118"/><line x1="66" y1="54" x2="74" y2="54"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="328">0</text><text x="134" y="328">2</text><text x="198" y="328">4</text><text x="262" y="328">6</text>
<text x="185" y="345" font-size="13">x (metres east)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="250">2</text><text x="62" y="186">4</text><text x="62" y="122">6</text><text x="62" y="58">8</text>
</g>
<text x="22" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 170)">y (metres north)</text>
<line x1="102" y1="246" x2="123.3" y2="56.1" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="7 5"/>
<polygon points="124.6,44.2 128.3,56.7 118.3,55.5" fill="#1d2b44"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="102.0,246.0 106.8,244.4 111.6,242.8 116.4,241.2 121.2,239.6 125.9,238.0 130.6,236.3 135.4,234.7 140.0,233.1 144.7,231.4 149.3,229.7 153.8,228.0 158.4,226.3 162.8,224.6 167.2,222.9 171.6,221.1 175.9,219.3 180.1,217.5 184.3,215.6 188.3,213.8 192.3,211.9 196.3,209.9 200.1,208.0 203.8,206.0 207.5,203.9 211.1,201.9 214.5,199.8 217.9,197.6 221.1,195.4 224.3,193.2 227.3,190.9 230.3,188.6 233.1,186.2 235.8,183.8 238.3,181.4 240.8,178.9 243.1,176.3 245.3,173.7 247.4,171.1 249.3,168.4 251.1,165.7 252.8,162.9 254.3,160.1 255.7,157.3 257.0,154.4 258.1,151.4 259.1,148.4 259.9,145.4 260.6,142.4 261.2,139.3 261.6,136.2 261.9,133.1 262.0,129.9 262.0,126.8 261.8,123.6 261.5,120.4 261.0,117.2 260.5,114.0 259.7,110.8 258.8,107.6 257.8,104.4 256.7,101.3 255.4,98.2 253.9,95.1 252.3,92.0 250.6,89.0 248.8,86.1 246.8,83.2 244.7,80.4 242.5,77.7 240.1,75.0 237.6,72.4 235.0,69.9 232.3,67.5 229.5,65.3 226.5,63.1 223.4,61.0 220.2,59.1 217.0,57.3 213.6,55.6 210.1,54.0 206.5,52.6 202.8,51.2 199.0,50.1 195.2,49.0 191.2,48.1 187.2,47.3 183.1,46.6 178.9,46.0 174.7,45.5 170.4,45.1 166.0,44.8 161.6,44.6 157.1,44.4 152.6,44.3 148.0,44.3 143.4,44.3 138.7,44.3 134.0,44.3 129.3,44.3 124.6,44.2"/>
<g fill="#1d2b44">
<circle cx="102" cy="246" r="4.5"/><circle cx="192.3" cy="211.9" r="4.5"/><circle cx="251.1" cy="165.7" r="4.5"/><circle cx="257.8" cy="104.4" r="4.5"/><circle cx="210.1" cy="54" r="4.5"/><circle cx="124.6" cy="44.2" r="4.5"/>
</g>
<circle cx="262" cy="128.8" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<line x1="251.1" y1="165.7" x2="279.5" y2="120.8" stroke="#1d2b44" stroke-width="3.5"/>
<polygon points="285.9,110.7 283.7,123.5 275.3,118.1" fill="#1d2b44"/>
<g font-size="12" fill="#1d2b44">
<text x="110" y="264">t = 0</text><text x="198" y="230">t = 1</text><text x="243" y="172" text-anchor="end">t = 2</text><text x="250" y="102" text-anchor="end">t = 3</text><text x="214" y="40">t = 4</text><text x="116" y="36" text-anchor="end">t = 5</text>
<text x="292" y="104">v(2)</text><text x="292" y="134">t ≈ 2.62</text>
</g>
<rect x="306" y="156" width="228" height="140" fill="#ffffff" stroke="#1d2b44" stroke-width="1"/>
<g font-size="11" fill="#1d2b44">
<line x1="314" y1="176" x2="342" y2="176" stroke="#1d2b44" stroke-width="2.5"/><text x="350" y="180">path, length ≈ 12.324 m</text>
<line x1="314" y1="202" x2="342" y2="202" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="7 5"/><text x="350" y="206">displacement ⟨0.706, 6.306⟩</text>
<text x="350" y="221">length ≈ 6.345 m</text>
<line x1="314" y1="244" x2="334" y2="244" stroke="#1d2b44" stroke-width="3.5"/><polygon points="342,244 332,239 332,249" fill="#1d2b44"/><text x="350" y="248">v(2) ≈ ⟨1.087, 1.717⟩ m/s</text>
<circle cx="328" cy="272" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/><text x="350" y="276">furthest east, x = 6</text>
</g>
</svg>
<figcaption>Figure 1. The hovercraft's path from Worked example 2, drawn with equal scales on both axes. Filled circles mark whole seconds; the open circle is where it stops moving east and starts moving west. The dashed arrow is the displacement from t = 0 to t = 5. The curved path is about twice as long as the dashed arrow, so the distance travelled (≈ 12.324 m) is much more than the size of the displacement (≈ 6.345 m).</figcaption>
</figure>

(a) Find the speed at t = 2. Is the speed increasing or decreasing at t = 2?
(b) For what times is the hovercraft moving west?
(c) Find its position at t = 5.
(d) Find the total distance travelled from t = 0 to t = 5, and the average speed.

**(a) Speed and its change.**
- v(2) = ⟨3 cos 1.2, 1 + sin 0.8⟩ ≈ ⟨1.0871, 1.7174⟩, so the speed is √(1.0871² + 1.7174²) ≈ **2.032 m/s**.
- a(t) = ⟨−1.8 sin(0.6t), (2t/5) cos(t²/5)⟩, so a(2) ≈ ⟨−1.6777, 0.5574⟩.
- x′x″ + y′y″ ≈ (1.0871)(−1.6777) + (1.7174)(0.5574) ≈ −0.867 < 0, so the **speed is decreasing** at t = 2. (A calculator derivative of the speed function at t = 2 gives about −0.426, the same sign.)

**(b) Moving west.** West means x′(t) < 0. 3 cos(0.6t) < 0 when π/2 < 0.6t < 3π/2, that is, for **2.618 < t ≤ 5** (π/1.2 ≈ 2.618; the upper value 3π/2 ÷ 0.6 ≈ 7.85 is beyond the interval). Meanwhile y′(t) = 1 + sin(t²/5) ≥ 0 throughout, so the hovercraft never moves south.

**(c) Position at t = 5.**
- x(5) = 1 + ∫ from 0 to 5 of 3 cos(0.6t) dt = 1 + 5 sin 3 ≈ 1 + 0.7056 = **1.706**
- y(5) = 2 + ∫ from 0 to 5 of (1 + sin(t²/5)) dt ≈ 2 + 6.3058 = **8.306**

So r(5) ≈ **(1.706, 8.306)**. The x-integral can be done by hand; the y-integral needs the calculator, because sin(t²/5) has no elementary antiderivative.

**(d) Distance and average speed.**
- Distance = ∫ from 0 to 5 of √((3 cos(0.6t))² + (1 + sin(t²/5))²) dt ≈ **12.324 m**.
- Average speed = 12.324 ÷ 5 ≈ **2.465 m/s**.

**Checks.**
- The displacement is about ⟨0.706, 6.306⟩, with length about 6.345 m. The distance, 12.324 m, is larger, as it must be: the hovercraft goes east to x = 6 (at t ≈ 2.618, where x = 1 + 5 sin(π/2) = 6) and then comes back west.
- Units: metres per second integrated over seconds gives metres. ✓

## Choosing the right tool

| The question asks for … | Use … |
|---|---|
| velocity, acceleration, speed at a time | derivatives of r(t), then Pythagoras for speed |
| which way the particle moves | signs of x′ and y′ |
| whether it is at rest | x′ = 0 **and** y′ = 0 at the same t |
| whether speed is increasing | sign of x′x″ + y′y″ (or of the derivative of speed) |
| where it is at a later time | r(b) = r(a) + ∫ from a to b of v(t) dt |
| how far its position changed | displacement vector ∫ from a to b of v(t) dt |
| how far it travelled | ∫ from a to b of speed dt |

## Common misconceptions

- **"Speed is x′ + y′."** Speed is √((x′)² + (y′)²). Adding the components does not give the length of a vector.
- **"x′ = 0 means at rest."** The particle may still be moving straight up or down. Both components must be 0.
- **Integrating velocity to get distance.** ∫ v dt is the displacement vector. Distance needs the speed inside the integral.
- **Forgetting the starting position.** ∫ from a to b of v(t) dt is a change. Add r(a) for the position.
- **"Large acceleration means speeding up."** The acceleration can point against the motion. Use the sign of x′x″ + y′y″.
- **Using |r(t)| as the speed.** The length of the position vector is distance from the origin, not speed.
- **Calculator in degree mode** for trigonometric velocity components. Use radians.
- **Rounding early** inside a speed or distance calculation. Keep stored values and round at the end.

## Where this leads

Next, the unit turns to polar coordinates, which are parametric curves in disguise: x = r(θ) cos θ and y = r(θ) sin θ. The chain-rule thinking you used here carries straight over. Continue with [Topic 9.7, Defining Polar Coordinates and Differentiating in Polar Form](/advanced-course-resources/calculus-bc/9-7-defining-polar-coordinates-differentiating-polar-study-guide/), or see the order on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-bc/9-6-solving-motion-problems-parametric-vector-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-bc/9-6-solving-motion-problems-parametric-vector-revision-notes/) and the [checklist](/advanced-course-resources/calculus-bc/9-6-solving-motion-problems-parametric-vector-checklist/) to consolidate.
