---
resourceId: "mb-ap-phys1-2.9-study-guide"
title: "Circular Motion: Study Guide (Physics 1 2.9)"
description: "Centripetal and tangential acceleration, period and frequency, the forces that keep objects on circles (loops, banked curves, conical pendulums) and circular orbits, with algebra only."
course: "physics-1"
unit: 2
topics: ["2.9"]
resourceType: "study-guide"
prerequisites:
  - "Drawing free-body diagrams and splitting forces into components (Topics 2.2 and 1.5)"
  - "Applying Newton's second law, ΣF = ma, along a chosen axis (Topic 2.5)"
  - "Gravitational force between two masses, F = Gm₁m₂/r² (Topic 2.6)"
prerequisiteResources: ["mb-ap-phys1-2.8-study-guide"]
learningObjectives:
  - "Explain why an object moving in a circle at constant speed is accelerating, and give the size and direction of that acceleration"
  - "Use a_c = v²/r, T = 1/f and T = 2πr/v, and predict how a_c or T changes when speed, radius or period changes"
  - "Identify which forces, or components of forces, supply the net inward force in a loop, on a frictionless banked curve, in a conical pendulum and in an orbit"
  - "Combine centripetal and tangential acceleration into the net acceleration of an object that speeds up or slows down on a circle"
  - "Derive the link between period and orbital radius for a circular orbit and use it to compare orbits or find the central mass"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. g = 9.8 m/s² and G = 6.67 × 10⁻¹¹ N·m²/kg², as on the course equation table. Answers to 2 or 3 significant figures"
related: ["mb-ap-phys1-2.9-revision-notes", "mb-ap-phys1-2.9-practice", "mb-ap-phys1-2.9-checklist"]
next: "mb-ap-phys1-2.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Moving in a circle at constant speed is accelerated motion, because the direction of the velocity keeps changing."
  - "Centripetal acceleration points to the centre of the circle and has size a_c = v²/r."
  - "There is no special \"centripetal force\". Real forces (tension, normal, friction, gravity) or their components add up to a net inward force equal to m v²/r."
  - "Tangential acceleration changes the speed. The net acceleration is the vector sum of the centripetal and tangential parts."
  - "Period T = 1/f = 2πr/v. For a circular orbit, T² = (4π²/GM) r³, so T does not depend on the orbiting mass."
faqs:
  - question: "Is centripetal force a new kind of force to add to my free-body diagram?"
    answer: "No. Draw only real forces such as weight, normal, tension and friction. \"Centripetal\" just names the direction of their net force: towards the centre. Never add an extra arrow labelled F_c."
  - question: "Why does a passenger feel thrown outward on a sharp turn?"
    answer: "In the ground frame nothing pushes the passenger outward. Their body tends to keep moving in a straight line while the car turns underneath them, until the seat or door pushes them inward."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. You will use Newton's second law from Topic 2.5 in a new direction: towards the centre of a circle. No calculus is needed.

## Why moving in a circle is accelerated motion

Acceleration is the rate of change of **velocity**, and velocity has a direction. A car going round a roundabout at a steady 10 m/s has constant **speed**, but its direction changes every instant. So its velocity changes, and the car is accelerating.

At every point on the circle, the velocity is **tangent** to the path. The change in velocity, and so the acceleration, points **towards the centre** of the circle. This inward part of the acceleration is called the **centripetal acceleration** ("centripetal" means "centre-seeking").

**a_c = v² / r**, directed towards the centre of the circle

Here v is the speed along the path (the tangential speed) and r is the radius of the circle. Check the units: (m/s)² ÷ m = m/s².

Two quick predictions follow from this equation:

- **Double the speed, same radius:** a_c becomes 2² = **4 times** as large.
- **Double the radius, same speed:** a_c becomes **half** as large. A wide bend is gentler than a tight one at the same speed.

## Period and frequency

When an object goes round at constant speed (**uniform circular motion**), we describe the repetition with two quantities:

- **Period, T:** the time for one full revolution (seconds).
- **Frequency, f:** the number of revolutions per second (hertz, Hz, which is 1/s).

**T = 1 / f**

In one period the object travels one circumference, 2πr. So its speed is distance ÷ time:

**v = 2πr / T**, which rearranges to **T = 2πr / v**

Substituting v = 2πr/T into a_c = v²/r gives a second useful form: **a_c = 4π²r / T²**.

**Example.** A coin sits 0.15 m from the centre of a turntable spinning at 0.75 Hz. Then T = 1 ÷ 0.75 = 1.33 s, v = 2π(0.15 m) ÷ 1.33 s = 0.707 m/s and a_c = (0.707)² ÷ 0.15 = 3.33 m/s². The second form agrees: 4π²(0.15) ÷ (1.33)² = 3.33 m/s².

The two forms give different factor-of-change answers, so read the question carefully. If the radius doubles **at the same speed**, a_c halves. If the radius doubles **at the same period** (two coins on the same turntable), the outer coin moves twice as fast and a_c **doubles**.

## Tangential acceleration and the net acceleration

Sometimes the speed changes as well. A car pulling away round a curve speeds up; a skater slowing on a curved rink slows down. The part of the acceleration that changes the speed points along the tangent and is called the **tangential acceleration**, a_t.

- a_t along the velocity: speeding up.
- a_t opposite to the velocity: slowing down.
- a_t = 0: constant speed (uniform circular motion).

The **net acceleration** is the vector sum of the two perpendicular parts. Its size is

**a = √(a_c² + a_t²)**

**Example.** A car on a circular track of radius 50 m is moving at 10 m/s and speeding up at 1.5 m/s². Then a_c = 10² ÷ 50 = 2.0 m/s² towards the centre and a_t = 1.5 m/s² forwards. The net acceleration is √(2.0² + 1.5²) = **2.5 m/s²**, pointing inward and forward, 37° from the line to the centre.

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="p1-cm-title p1-cm-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-cm-title">Velocity and acceleration vectors for circular motion</title>
<desc id="p1-cm-desc">Left panel: an object moves counterclockwise at constant speed on a circle. At four points, a solid arrow points along the tangent (velocity, labelled v) and a dashed arrow points to the centre (acceleration, labelled a_c); the labels appear at two of the points. Right panel: an object at the top of a circle moves to the left and is speeding up. A dashed arrow a_t points left along the tangent, a dashed arrow a_c points down to the centre, and a thick arrow a_net points down and to the left between them, completing a rectangle.</desc>
<defs>
<marker id="p1-cm-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker>
</defs>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<text x="150" y="24" font-size="13" fill="#1d2b44" text-anchor="middle" font-weight="600">(a) constant speed</text>
<circle cx="150" cy="175" r="105" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="150" cy="175" r="3" fill="#1d2b44"/>
<text x="158" y="192" font-size="11" fill="#1d2b44">centre</text>
<g stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p1-cm-arr)">
<path d="M150 70 L92 70"/><path d="M255 175 L255 117"/><path d="M150 280 L208 280"/><path d="M45 175 L45 233"/>
</g>
<g stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#p1-cm-arr)">
<path d="M150 70 L150 120"/><path d="M255 175 L205 175"/><path d="M150 280 L150 230"/><path d="M45 175 L95 175"/>
</g>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="2"><circle cx="150" cy="70" r="6"/><circle cx="255" cy="175" r="6"/><circle cx="150" cy="280" r="6"/><circle cx="45" cy="175" r="6"/></g>
<g font-size="12" fill="#1d2b44"><text x="96" y="62">v</text><text x="156" y="112">a_c</text><text x="262" y="125">v</text><text x="205" y="168">a_c</text></g>
<text x="150" y="318" font-size="11" fill="#1d2b44" text-anchor="middle">solid arrow: velocity (tangent)</text>
<text x="150" y="333" font-size="11" fill="#1d2b44" text-anchor="middle">dashed arrow: acceleration (to centre)</text>
<text x="420" y="24" font-size="13" fill="#1d2b44" text-anchor="middle" font-weight="600">(b) speeding up</text>
<circle cx="430" cy="210" r="100" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="430" cy="210" r="3" fill="#1d2b44"/>
<text x="438" y="228" font-size="11" fill="#1d2b44">centre</text>
<path d="M430 80 L370 80" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p1-cm-arr)"/>
<text x="372" y="72" font-size="12" fill="#1d2b44">v</text>
<path d="M385 110 L385 170 L430 170" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 3" fill="none"/>
<g stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#p1-cm-arr)">
<path d="M430 110 L387 110"/><path d="M430 110 L430 168"/>
</g>
<path d="M430 110 L388 167" stroke="#1d2b44" stroke-width="3.5" marker-end="url(#p1-cm-arr)"/>
<circle cx="430" cy="110" r="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44"><text x="392" y="103">a_t</text><text x="437" y="150">a_c</text><text x="330" y="160">a_net</text></g>
<text x="430" y="333" font-size="11" fill="#1d2b44" text-anchor="middle">thick arrow: net acceleration</text>
</svg>
<figcaption>Figure 1. (a) Uniform circular motion, counterclockwise: velocity is always tangent and acceleration always points to the centre, so the two are perpendicular. (b) Speeding up: the tangential part a_t points along v, the centripetal part a_c points to the centre, and the net acceleration is their vector sum. For the track example, a_c = 2.0 m/s², a_t = 1.5 m/s² and a_net = 2.5 m/s².</figcaption>
</figure>

## Where does the inward force come from?

Newton's second law says the net force has the same direction as the acceleration. So for an object on a circle, the forces must add up to a net inward force:

**ΣF (towards the centre) = m v² / r**

This net inward force is sometimes called the "centripetal force", but it is **not a new force**. It is always supplied by real forces you already know, in one of three ways.

| Situation | What supplies the net inward force |
|---|---|
| Ball whirled on a string on a smooth table | one force: tension |
| Car turning on a flat road | one force: static friction from the road |
| Satellite in a circular orbit | one force: gravity from the planet |
| Car at the top of a vertical loop | more than one force: weight and normal force, both pointing down (inward) |
| Car on a banked curve with no friction | a component: the horizontal part of the normal force |
| Conical pendulum (ball swinging in a horizontal circle) | a component: the horizontal part of the tension |

The method is the same every time:

1. Draw a free-body diagram with real forces only.
2. Choose one axis pointing **towards the centre**.
3. Add the force components along that axis and set the sum equal to m v²/r.
4. If the motion has no vertical acceleration, also set the vertical forces to balance.

## Vertical loops and the minimum speed at the top

At the **top** of a vertical loop, the centre is directly below. Both the weight mg and the normal force N from the track (when the car is on the inside of the loop) point **down**, towards the centre:

N + mg = m v² / r

The faster the car goes, the larger N must be. Now slow the car down. N gets smaller until it reaches zero. At that point **gravity alone** provides the inward force:

mg = m v² / r, so **v_min = √(g r)**

Below this speed, gravity would pull the car inward more than a circle of that radius needs, so the car would leave the track and fall inside the loop. Notice that the mass cancels: the minimum speed is the same for a light car and a heavy one.

At the **bottom** of the loop the centre is above, so the normal force points inward and the weight points outward: N − mg = m v²/r. The normal force is now **larger** than the weight, which is why riders feel pressed into their seats there.

## Banked curves

A road or track that is tilted (banked) towards the centre of a curve lets the normal force help with the turn. The normal force is perpendicular to the surface, so it tilts inward. Its horizontal component, N sin θ, points towards the centre.

<figure>
<svg viewBox="0 0 560 320" role="img" aria-labelledby="p1-bank-title p1-bank-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-bank-title">Car on a banked curve with no friction, and its free-body diagram</title>
<desc id="p1-bank-desc">Left: cross-section of a road surface tilted at angle theta, rising to the right, with a car on it. The centre of the curve is to the left. Right: free-body diagram of the car as a dot. Weight mg points straight down. The normal force N points up and to the left, perpendicular to the road. Dashed component arrows show N cos theta pointing straight up, equal in length to mg, and N sin theta pointing left, towards the centre of the curve.</desc>
<defs>
<marker id="p1-bank-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker>
<pattern id="p1-bank-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 V8" stroke="#1d2b44" stroke-width="1"/></pattern>
</defs>
<rect x="0" y="0" width="560" height="320" fill="#ffffff"/>
<polygon points="40,280 330,200 330,280" fill="url(#p1-bank-hatch)" stroke="#1d2b44" stroke-width="1.5"/>
<g transform="translate(185 240) rotate(-15.4)"><rect x="-35" y="-26" width="70" height="26" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/></g>
<path d="M95 280 A55 55 0 0 0 93.3 265.5" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<text x="102" y="273" font-size="13" fill="#1d2b44">θ</text>
<path d="M150 60 L50 60" stroke="#1d2b44" stroke-width="2" marker-end="url(#p1-bank-arr)"/>
<text x="55" y="50" font-size="12" fill="#1d2b44">towards centre of curve</text>
<text x="185" y="305" font-size="12" fill="#1d2b44" text-anchor="middle">road surface, cross-section</text>
<path d="M450 170 L450 280" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p1-bank-arr)"/>
<path d="M450 170 L419.5 59.1" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p1-bank-arr)"/>
<g stroke="#1d2b44" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#p1-bank-arr)">
<path d="M450 170 L450 61"/><path d="M450 170 L421 170"/>
</g>
<circle cx="450" cy="170" r="5" fill="#1d2b44"/>
<g font-size="12" fill="#1d2b44">
<text x="458" y="275">mg</text><text x="400" y="56">N</text><text x="458" y="80">N cos θ</text><text x="360" y="190">N sin θ</text>
</g>
<text x="450" y="305" font-size="12" fill="#1d2b44" text-anchor="middle">free-body diagram</text>
</svg>
<figcaption>Figure 2. A car on a banked curve with no friction. Only two real forces act: weight and the normal force. Vertically, N cos θ balances mg. Horizontally, N sin θ is the unbalanced force towards the centre.</figcaption>
</figure>

With no friction, the vertical and inward equations are:

- Vertical (no vertical acceleration): N cos θ = mg
- Inward: N sin θ = m v² / r

Dividing the second equation by the first cancels N and m:

**tan θ = v² / (r g)**

For a given bank angle and radius, there is exactly one speed (the **design speed**) at which the car needs no friction at all.

**Friction on banked curves (describe, do not calculate).** In this course you only calculate the no-friction case. You should be able to *describe* what happens at other speeds:

- **Faster than the design speed:** N sin θ alone is too small to provide m v²/r. The car tends to slide up and out, so static friction acts **down the slope**, and its horizontal part adds to the inward force.
- **Slower than the design speed:** N sin θ is more than is needed. The car tends to slide down and in, so static friction acts **up the slope**.

## Conical pendulums

A ball on a string can swing in a horizontal circle while the string traces out a cone. The string makes angle θ with the vertical. Two forces act: weight and tension. Tension tilts inward, so it does two jobs:

- Its vertical component balances the weight: F_T cos θ = mg
- Its horizontal component, F_T sin θ, is the net inward force: F_T sin θ = m v²/r

The radius of the circle is not the string length. It is **r = L sin θ**. Dividing the equations again gives tan θ = v²/(r g), the same form as the banked curve.

## Circular orbits and Kepler's third law

For a satellite in a circular orbit around a planet or star, the only force is the gravitational pull of the central body. It points to the centre, so gravity alone supplies the centripetal acceleration:

G M m / r² = m v² / r

Here M is the mass of the central body, m is the satellite's mass and r is measured from the **centre** of the central body. The satellite mass m cancels. Now use v = 2πr / T:

G M / r = (2πr / T)², which rearranges to **T² = (4π² / G M) r³**

This is **Kepler's third law** for circular orbits: the square of the period is proportional to the cube of the orbital radius. The constant of proportionality depends only on the central mass.

**Example (fictional planet).** A planet has mass 3.0 × 10²⁴ kg. A probe orbits at r = 8.0 × 10⁶ m from its centre. Then G M = (6.67 × 10⁻¹¹)(3.0 × 10²⁴) = 2.0 × 10¹⁴ N·m²/kg, and

T = 2π √(r³ / GM) = 2π √(5.12 × 10²⁰ ÷ 2.0 × 10¹⁴) = 2π × 1600 s = 1.0 × 10⁴ s, about 2.8 hours.

Its speed is v = 2πr / T = 5.0 × 10³ m/s.

**Factor of change.** Doubling the orbital radius around the same body multiplies T² by 2³ = 8, so T is multiplied by √8 ≈ 2.8.

You need only this third law. The course does not expect Kepler's first or second laws.

## Worked example 1: designing a frictionless banked curve

**Question.** An engineer wants cars to take a curve of radius 120 m at 18 m/s without needing any friction. Find the bank angle. Then describe the direction of static friction on a car that takes the curve at 25 m/s.

1. Real forces: weight mg (down) and normal force N (perpendicular to the road). Take one axis horizontal, towards the centre, and one vertical.
2. Vertical: N cos θ = mg. Inward: N sin θ = m v²/r.
3. Divide: tan θ = v² / (r g) = (18 m/s)² ÷ (120 m × 9.8 m/s²) = 324 ÷ 1176 = 0.276.
4. θ = **15°** (15.4° to 3 significant figures).

**Faster car.** At 25 m/s the car needs more inward force than N sin θ can give at this angle. (A frictionless bank for 25 m/s would need about 28°.) The car tends to slide up the slope, so static friction acts **down the slope**, and its horizontal part adds to the inward force.

**Check.** Put θ = 15.4° back in: v = √(r g tan θ) = √(120 × 9.8 × tan 15.4°) = 18.0 m/s. The answer does not depend on the car's mass, so the same bank suits a lorry and a bicycle at 18 m/s.

## Worked example 2: a loop-the-loop car

**Question.** A 450 kg roller-coaster car goes round the inside of a vertical loop. At the top, the radius of the loop is 8.0 m. (a) Find the minimum speed at the top. (b) The car actually passes the top at 12 m/s. Find the normal force from the track.

**(a)** At minimum speed, N = 0 and gravity alone provides the inward force:

v_min = √(g r) = √(9.8 m/s² × 8.0 m) = √78.4 = **8.9 m/s**

**(b)** Take **"towards the centre" (downward at the top) as positive.** Both forces point down:

1. N + mg = m v² / r
2. m v² / r = 450 kg × (12 m/s)² ÷ 8.0 m = 450 × 18 = 8100 N
3. mg = 450 kg × 9.8 m/s² = 4410 N
4. N = 8100 − 4410 = **3690 N ≈ 3.7 × 10³ N**, directed **downward** (towards the centre).

**Check.** 12 m/s is above the 8.9 m/s minimum, so N must come out positive, and it does. Setting v = 8.9 m/s in step 1 would give N ≈ 0, matching part (a).

## Worked example 3: a conical pendulum

**Question.** A 0.20 kg ball hangs from a 0.80 m string and swings in a horizontal circle with the string at 30° to the vertical. Find (a) the radius of the circle, (b) the tension, (c) the ball's speed and (d) its period.

**(a)** r = L sin θ = 0.80 m × sin 30° = **0.40 m**.

**(b)** Vertical: F_T cos θ = mg, so F_T = (0.20 kg × 9.8 m/s²) ÷ cos 30° = 1.96 N ÷ 0.866 = **2.3 N**.

**(c)** Dividing the inward and vertical equations: tan θ = v² / (r g), so v² = r g tan θ = 0.40 × 9.8 × 0.577 = 2.26 m²/s², and v = **1.5 m/s**.

**(d)** T = 2πr / v = 2π(0.40 m) ÷ 1.50 m/s = **1.7 s**.

**Check.** The inward force is F_T sin θ = 2.26 N × 0.5 = 1.13 N, and m v²/r = 0.20 × 2.26 ÷ 0.40 = 1.13 N. They match.

## Common misconceptions

- **"Constant speed means zero acceleration."** Only in a straight line. On a circle the direction changes, so a_c = v²/r even at constant speed.
- **"Draw a centripetal force on the free-body diagram."** No. Draw real forces only; their net (or a component of it) points to the centre.
- **"There is an outward centrifugal force."** Not in an inertial frame. The outward "push" you feel is your body tending to continue in a straight line.
- **"If the string breaks, the ball flies straight outward."** It moves off along the **tangent**, in the direction of its velocity at that instant.
- **"The normal force always equals mg."** At the top of a loop, the bottom of a dip or on a banked curve, it does not. Write Newton's second law each time.
- **"A heavier satellite must go faster to stay in the same orbit."** The satellite mass cancels; the period depends only on r and the central mass.
- **Using the string length as the radius.** For a conical pendulum, r = L sin θ.
- **Measuring orbital radius from the surface.** Use the distance from the centre of the central body.

## Where this leads

This topic completes Unit 2. You will meet circular motion again in Topic 5.2, which links linear and rotational motion, and in Topic 6.6, where energy and angular momentum describe orbiting satellites. Unit 3 starts with [Topic 3.1, Translational Kinetic Energy](/advanced-course-resources/physics-1/3-1-translational-kinetic-energy-study-guide/). Before moving on, try the [practice questions](/advanced-course-resources/physics-1/2-9-circular-motion-practice/), then use the [revision notes](/advanced-course-resources/physics-1/2-9-circular-motion-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/2-9-circular-motion-checklist/). You can also review [Topic 2.5, Newton's Second Law](/advanced-course-resources/physics-1/2-5-newtons-second-law-study-guide/), or return to the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
