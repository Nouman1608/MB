---
resourceId: "mb-ap-physcm-3.1-study-guide"
title: "Translational Kinetic Energy: Study Guide (Physics C: Mechanics 3.1)"
description: "Calculus-based guide to translational kinetic energy: K = ½mv² from velocity components, K as a scalar, how K changes with time, graph shapes, and why K depends on the observer's frame."
course: "physics-c-mechanics"
unit: 3
topics: ["3.1"]
resourceType: "study-guide"
prerequisites:
  - "Velocity as dx/dt and acceleration as dv_x/dt (Topic 1.2)"
  - "Velocity components and relative velocity between frames (Topics 1.4 and 1.5)"
prerequisiteResources: ["mb-ap-physcm-2.10-study-guide"]
learningObjectives:
  - "Calculate an object's translational kinetic energy from its mass and its speed or velocity components"
  - "Explain why kinetic energy is a scalar that is never negative and does not depend on the direction of motion"
  - "Predict how kinetic energy changes when mass or speed changes by a given factor"
  - "Find K(t) from a position or velocity function and use dK/dt = m v_x a_x to decide when K rises or falls"
  - "Sketch and interpret graphs of kinetic energy against speed, time and position"
  - "Compare the kinetic energy of one object measured by observers in different reference frames"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "Calculus by hand; a calculator for arithmetic. g = 9.8 m/s², the value on the course equation table. Answers to 2 significant figures unless stated"
related: ["mb-ap-physcm-3.1-revision-notes", "mb-ap-physcm-3.1-practice", "mb-ap-physcm-3.1-checklist"]
next: "mb-ap-physcm-3.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Translational kinetic energy is K = ½mv², where v is the speed of the object (or of a system's centre of mass)."
  - "K is a scalar. In components, v² = v_x² + v_y² + v_z², so direction never matters and K is never negative."
  - "K ∝ v²: doubling the speed multiplies K by 4. Doubling the mass doubles K."
  - "Differentiating gives dK/dt = m v_x a_x in one dimension: K rises when v_x and a_x have the same sign."
  - "K depends on the observer. Observers moving relative to each other measure different speeds, so different K."
faqs:
  - question: "How is this different from the Physics 1 version of Topic 3.1?"
    answer: "They are separate courses with the same topic title. The definition K = ½mv² is the same. Physics C: Mechanics also expects you to find K from position or velocity functions with calculus, to use the rate dK/dt, and to work with velocity components in two or three dimensions."
  - question: "Is kinetic energy ever negative?"
    answer: "No. Mass is positive and v² cannot be negative, so K ≥ 0. A change in kinetic energy, ΔK, can be negative."
  - question: "Why 'translational'?"
    answer: "It is the energy of the object moving from place to place. A spinning object also has rotational kinetic energy, which comes in Unit 6."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**How this differs from the Physics 1 version.** Physics C: Mechanics and Physics 1 are **separate courses** that both have a Topic 3.1 called Translational Kinetic Energy. This guide is the **calculus-based** one. It uses the same definition, then finds kinetic energy from position and velocity functions, uses the rate of change dK/dt, and works with velocity components. The algebra-based treatment is in the [Physics 1 study guide](/advanced-course-resources/physics-1/3-1-translational-kinetic-energy-study-guide/); do not mix the two when you revise. This topic opens Unit 3 and follows [Topic 2.10, Circular Motion](/advanced-course-resources/physics-c-mechanics/2-10-circular-motion-study-guide/).

## Energy of motion

Unit 2 described motion with forces. Unit 3 describes it with **energy**: a scalar quantity that a system has and that can be transferred into or out of it. The first form of energy you meet is the energy an object has because it moves.

An object of mass m moving with speed v has **translational kinetic energy**

**K = ½mv²**

- m is in kilograms and v in metres per second, so K is in kg·m²/s². This unit is the **joule**: 1 J = 1 kg·m²/s².
- "Translational" means motion from place to place. For a system, use the speed of its **centre of mass** (Topic 2.1). Energy of spinning about the centre of mass is rotational kinetic energy, which comes in Unit 6.
- K depends only on mass and **speed**. It does not depend on where the object is, which way it moves, or how it got that speed.

## Kinetic energy is a scalar

Velocity is a vector, but kinetic energy uses only its size. In two or three dimensions, the speed squared is the dot product of the velocity with itself:

**v² = **v** · **v** = v_x² + v_y² + v_z²**

So

**K = ½m(v_x² + v_y² + v_z²)**

Three consequences follow.

1. **No direction.** A 1.0 kg ball moving at 5.0 m/s north and the same ball moving at 5.0 m/s downward both have K = 12.5 J. You never write a direction or a + or − sign on K.
2. **Never negative.** Each square is zero or positive, so K ≥ 0. K = 0 only when the object is at rest in the frame you are using.
3. **Components cannot be "added" as speeds.** For v = (4.0, −3.0) m/s, the speed is √(16 + 9) = 5.0 m/s, not 4.0 + 3.0 or 4.0 − 3.0. Square each component first, then add.

A **change** in kinetic energy, ΔK = K_f − K_i, can be positive, negative or zero. In Topic 3.2 you will see that ΔK equals the net work done on the object.

## How K depends on mass and speed

K is proportional to m, and proportional to the **square** of v. That gives quick factor-of-change predictions:

| Change | Factor on K |
|---|---|
| Speed × 2, same mass | × 4 |
| Speed × 3, same mass | × 9 |
| Mass × 2, same speed | × 2 |
| Mass × ½ and speed × 2 | × ½ × 4 = × 2 |
| Mass × 4 and speed × ½ | × 4 × ¼ = × 1 (no change) |

Rearranged, **v = √(2K/m)**. For example, a 1500 kg car with K = 300 kJ has v = √(2 × 300 000 ÷ 1500) = 20 m/s.

**Graph shapes** (useful for sketching questions):

- **K against v** (fixed m): a parabola through the origin, symmetric about v = 0, because K depends on v². Its slope is dK/dv = mv; you will meet mv again as momentum in Unit 4.
- **K against m** (fixed v): a straight line through the origin with slope ½v².
- **K against v²**: a straight line through the origin with slope ½m. Plotting v² is how you linearise kinetic-energy data.

## How K changes with time

When velocity changes, so does K. Use the chain rule on K = ½mv_x² for motion along one axis:

**dK/dt = ½m · 2v_x · dv_x/dt = m v_x a_x**

This is the calculus version of a rule from Topic 1.2:

- v_x and a_x have the **same sign**: dK/dt > 0, the object speeds up and K **increases**.
- v_x and a_x have **opposite signs**: dK/dt < 0, the object slows down and K **decreases**.
- v_x = 0 or a_x = 0: dK/dt = 0. K has a turning point (a minimum or a maximum) or is momentarily steady.

In more than one dimension the same argument gives dK/dt = m **v** · **a**. Only the part of the acceleration **along** the velocity changes the speed. An acceleration **perpendicular** to the velocity, like the centripetal acceleration in uniform circular motion (Topic 2.10), changes the direction of motion but leaves K unchanged. Because m**a** is the net force, this rate is also **F**_net · **v**. You will use that link in Topic 3.2 (work) and Topic 3.5 (power).

## Worked example 1: kinetic energy from a position function

**Question.** Take **+x along a straight corridor**, origin at the start. A 2.0 kg delivery robot moves with x(t) = (3.0 m/s²)t² − (0.50 m/s³)t³ for 0 ≤ t ≤ 4.0 s. Find (a) K(t), (b) K at t = 1.0 s and 2.0 s, (c) when K is greatest, and (d) the rate of change of K at t = 1.0 s and at t = 3.0 s.

1. Differentiate: v_x = dx/dt = 6.0t − 1.5t² = 1.5t(4.0 − t) m/s. Then a_x = dv_x/dt = 6.0 − 3.0t m/s².
2. **(a)** K = ½mv_x² = ½(2.0)(6.0t − 1.5t²)² = **2.25t²(t − 4.0)²** J (t in s).
3. **(b)** At t = 1.0 s: v_x = 4.5 m/s, so K = ½(2.0)(4.5)² = **20 J** (20.25 J). At t = 2.0 s: v_x = 6.0 m/s, so K = **36 J**.
4. **(c)** dK/dt = m v_x a_x = 2.0 × 1.5t(4.0 − t) × (6.0 − 3.0t) = 9.0t(t − 2.0)(t − 4.0). This is zero at t = 0, 2.0 s and 4.0 s. K = 0 at t = 0 and t = 4.0 s (the robot is at rest), so the greatest K is **36 J at t = 2.0 s**, where a_x = 0 and the speed is greatest.
5. **(d)** At t = 1.0 s: dK/dt = 2.0 × 4.5 × 3.0 = **+27 J/s**. At t = 3.0 s: v_x = 4.5 m/s and a_x = −3.0 m/s², so dK/dt = **−27 J/s**.

**Check.** From 0 to 2.0 s, v_x > 0 and a_x > 0: speeding up, K rising. From 2.0 to 4.0 s, v_x > 0 and a_x < 0: slowing down, K falling. K(1.0 s) = K(3.0 s) = 20.25 J because the speed is 4.5 m/s at both times. A joule per second is a watt; this rate returns in Topic 3.5.

## Worked example 2: kinetic energy of a projectile

**Question.** Take **+x horizontal and +y upward**. A 0.50 kg ball is launched from ground level with velocity components v_x0 = 6.0 m/s and v_y0 = 9.8 m/s. Ignore air resistance. Find K at launch, K at the top of the path, and sketch K against t until the ball returns to launch height.

1. Launch: K₀ = ½(0.50)(6.0² + 9.8²) = ½(0.50)(36 + 96.04) = **33 J** (33.01 J). The launch speed is √132.04 ≈ 11 m/s.
2. In free fall v_x stays 6.0 m/s and v_y = 9.8 − 9.8t. So K(t) = ½(0.50)[36 + (9.8 − 9.8t)²] J.
3. Top of the path: v_y = 0 at t = 1.0 s. Then K_top = ½(0.50)(6.0)² = **9.0 J**. This is **not zero**: the ball still moves horizontally.
4. At t = 2.0 s, v_y = −9.8 m/s, so K returns to **33 J** at launch height.

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="pcm31-kt-title pcm31-kt-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm31-kt-title">Kinetic energy against time for a projectile</title>
<desc id="pcm31-kt-desc">Kinetic energy K in joules from 0 to 35 against time t in seconds from 0 to 2. A U-shaped curve starts at 33 J at t = 0, falls to a minimum of 9.0 J at t = 1.0 s, and rises back to 33 J at t = 2.0 s. A dashed horizontal line at 9.0 J is labelled one half m v x squared, the kinetic energy from horizontal motion alone. The curve has zero slope at the minimum, labelled top of path.</desc>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M175 290 V45 M280 290 V45 M385 290 V45 M490 290 V45"/>
<path d="M70 220 H500 M70 150 H500 M70 80 H500"/>
</g>
<path d="M70 290 H515 M70 290 V40" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="308">0</text><text x="175" y="308">0.5</text><text x="280" y="308">1.0</text><text x="385" y="308">1.5</text><text x="490" y="308">2.0</text>
<text x="280" y="330" font-size="13">time, t (s)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="294">0</text><text x="62" y="224">10</text><text x="62" y="154">20</text><text x="62" y="84">30</text>
</g>
<text x="22" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 170)">kinetic energy, K (J)</text>
<path d="M70 227 H500" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="7 5"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="70.0,58.9 80.5,75.3 91.0,90.9 101.5,105.6 112.0,119.4 122.5,132.5 133.0,144.6 143.5,156.0 154.0,166.5 164.5,176.2 175.0,185.0 185.5,193.0 196.0,200.1 206.5,206.4 217.0,211.9 227.5,216.5 238.0,220.3 248.5,223.2 259.0,225.3 269.5,226.6 280.0,227.0 290.5,226.6 301.0,225.3 311.5,223.2 322.0,220.3 332.5,216.5 343.0,211.9 353.5,206.4 364.0,200.1 374.5,193.0 385.0,185.0 395.5,176.2 406.0,166.5 416.5,156.0 427.0,144.6 437.5,132.5 448.0,119.4 458.5,105.6 469.0,90.9 479.5,75.3 490.0,58.9"/>
<circle cx="70" cy="58.9" r="4" fill="#1d2b44"/>
<circle cx="280" cy="227" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="490" cy="58.9" r="4" fill="#1d2b44"/>
<text x="80" y="50" font-size="12" fill="#1d2b44">launch: 33 J</text>
<text x="400" y="50" font-size="12" fill="#1d2b44">back at launch height: 33 J</text>
<text x="280" y="250" font-size="12" fill="#1d2b44" text-anchor="middle">top of path: 9.0 J (slope zero)</text>
<text x="310" y="272" font-size="12" fill="#1d2b44">dashed line: ½m v_x² = 9.0 J</text>
</svg>
<figcaption>Figure 1. K against t for the projectile in Worked example 2. The curve is a parabola in t with a minimum of 9.0 J, not zero, at the top of the path. The dashed line shows the part of K due to the constant horizontal velocity.</figcaption>
</figure>

**Interpretation.** At the top, the acceleration (g, downward) is perpendicular to the velocity (horizontal), so dK/dt = m **v** · **a** = 0: the K–t curve has zero slope there. Before the top, **v** · **a** < 0 and K falls; after it, **v** · **a** > 0 and K rises. A ball thrown **straight** up would be the limiting case v_x = 0, where the minimum K is zero.

## Kinetic energy depends on the observer

Speed is measured relative to a reference frame (Topic 1.4). Observers moving relative to each other measure different speeds, so they measure **different kinetic energies** for the same object. Neither is wrong. If a frame moves with velocity **u** relative to the ground, an object with ground velocity **v** has velocity **v** − **u** in that frame, and

**K′ = ½m|**v** − **u**|²**

An object at rest in one frame has K = 0 there, but K > 0 in any frame that moves relative to it. When you compare energies, or later add up energy changes, use **one** frame for the whole problem.

## Worked example 3: one drone, three observers

**Question.** Take **+x east and +y north**. A 0.50 kg drone flies north at 4.0 m/s relative to the ground, then speeds up to 8.0 m/s north. Car A drives east at 3.0 m/s and car B drives north at 3.0 m/s, both relative to the ground. Find the drone's kinetic energy before and after, and the change ΔK, for (a) the ground, (b) car A and (c) car B.

1. **(a) Ground.** K_i = ½(0.50)(4.0)² = **4.0 J**; K_f = ½(0.50)(8.0)² = **16 J**; ΔK = **+12 J**.
2. **(b) Car A.** Relative velocity = **v** − **u** = (−3.0, 4.0) m/s before and (−3.0, 8.0) m/s after. Speeds: 5.0 m/s and √73 ≈ 8.5 m/s. K_i = ½(0.50)(25) = **6.3 J** (6.25 J); K_f = ½(0.50)(73) = **18 J** (18.25 J); ΔK = **+12 J**.
3. **(c) Car B.** Relative velocity = (0, 1.0) m/s before and (0, 5.0) m/s after. K_i = **0.25 J**; K_f = **6.3 J** (6.25 J); ΔK = **+6.0 J**.

**Interpretation.** All three observers disagree about K. Car A happens to agree with the ground about ΔK, because car A moves at right angles to the change in velocity. Car B, moving along the change in velocity, measures a **smaller** ΔK. So even an energy **change** can depend on the frame. In general ΔK′ = ΔK − m**u** · Δ**v**; for car B, 12 − (0.50)(3.0)(4.0) = 6.0 J.

## Common misconceptions

- **"K has a direction."** It is a scalar. Never give it a direction or a sign.
- **"K can be negative when the object moves in −x."** v_x² is positive either way. Only ΔK can be negative.
- **"Doubling the speed doubles K."** K ∝ v², so K becomes four times larger.
- **"ΔK = ½m(Δv)²."** Find K_f and K_i separately, then subtract. An object going from 2.0 m/s to 3.0 m/s does not have the same ΔK as one going from 0 to 1.0 m/s.
- **"K is zero at the top of a projectile's path."** Only the vertical component is zero. K_top = ½mv_x² (Worked example 2).
- **"Adding components as numbers gives the speed."** Square, add, then take the root: v² = v_x² + v_y² + v_z².
- **"K is the same for every observer."** It depends on the frame (Worked example 3).
- **Mass in grams.** K comes out in joules only with m in kg and v in m/s.

## Where this leads

[Topic 3.2, Work](/advanced-course-resources/physics-c-mechanics/3-2-work-study-guide/) explains how forces change K: the net work done on an object equals ΔK, and you will derive that result from dK/dt = **F**_net · **v**. Topic 3.3 adds potential energy, and Topic 3.5 treats the rate of energy transfer as power. Try the [practice questions](/advanced-course-resources/physics-c-mechanics/3-1-translational-kinetic-energy-practice/) now, then use the [revision notes](/advanced-course-resources/physics-c-mechanics/3-1-translational-kinetic-energy-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/3-1-translational-kinetic-energy-checklist/). You can also return to the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
