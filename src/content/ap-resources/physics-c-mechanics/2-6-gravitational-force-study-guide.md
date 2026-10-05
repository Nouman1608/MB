---
resourceId: "mb-ap-physcm-2.6-study-guide"
title: "Gravitational Force: Study Guide (Physics C: Mechanics 2.6)"
description: "Calculus-based gravitation: the universal law, gravitational field and weight, when g is constant, apparent weight and weightlessness, inertial and gravitational mass, and fields inside and outside spheres."
course: "physics-c-mechanics"
unit: 2
topics: ["2.6"]
resourceType: "study-guide"
prerequisites:
  - "Newton’s second law, a = ΣF/m, applied one axis at a time (Topic 2.5)"
  - "Center of mass of a system (Topic 2.1)"
  - "Differentiating v(t) to find a(t) (Topic 1.2)"
prerequisiteResources: ["mb-ap-physcm-2.5-study-guide"]
learningObjectives:
  - "Use F_g = Gm₁m₂/r² for the attractive force between two masses, acting along the line joining their centers of mass"
  - "Define the gravitational field as force per unit mass, find g = GM/r², and explain why a body acted on only by gravity accelerates at g"
  - "Decide when the gravitational force can be treated as constant and use weight = mg near Earth’s surface"
  - "Find apparent weight from the normal force in an accelerating system, and explain weightlessness and the equivalence principle"
  - "Distinguish inertial mass from gravitational mass and state that experiments find them equal"
  - "Use the shell theorem, without proof, and the partial-mass idea to find the field inside and outside uniform spheres and shells"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "core"
calculator: "scientific"
calculatorNote: "Calculator for powers of ten and roots. G = 6.67 × 10⁻¹¹ N·m²/kg² and g = 9.8 N/kg near Earth’s surface, as on the course equation table"
related: ["mb-ap-physcm-2.6-revision-notes", "mb-ap-physcm-2.6-practice", "mb-ap-physcm-2.6-checklist"]
next: "mb-ap-physcm-2.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "F_g = Gm₁m₂/r²: always attractive, along the line between centers of mass, with r measured center to center."
  - "Field strength g = F_g/m = GM/r² (N/kg). If gravity is the only force, the acceleration equals g."
  - "Near Earth’s surface g ≈ 9.8 N/kg is constant to within 1% for the first 32 km of height."
  - "Apparent weight is the normal force. It differs from mg whenever the system accelerates vertically, and is zero in free fall."
  - "Inside a thin shell the net force is zero; inside a uniform sphere only the mass closer to the center counts, so F ∝ r."
faqs:
  - question: "How is this different from the Physics 1 version of Topic 2.6?"
    answer: "They are separate courses with the same title. Both use Newton’s law of gravitation, weight, apparent weight and the two kinds of mass. Physics C: Mechanics adds the field inside and outside uniform spheres and shells, and uses calculus where the motion is given as a function of time."
  - question: "Do I need to prove the shell theorem?"
    answer: "No. The course does not expect you to derive or prove it mathematically. You must be able to use its results and the partial-mass idea for a uniform sphere."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**How this differs from the Physics 1 version.** Physics C: Mechanics and Physics 1 are **separate courses** that both have a Topic 2.6 with this title. This guide is the **calculus-based** one. It adds the field inside and outside spheres and shells, and uses derivatives where an acceleration has to come from v(t). The algebra-based treatment is in the [Physics 1 study guide](/advanced-course-resources/physics-1/2-6-gravitational-force-study-guide/); do not mix the two when you revise.

## Newton's law of universal gravitation

Any two objects with mass attract each other. For two objects (or systems) of masses m₁ and m₂ whose centers of mass are a distance r apart, the size of the force on each is:

**F_g = G m₁ m₂ / r²**  with  G = 6.67 × 10⁻¹¹ N·m²/kg²

Four features to remember:

1. **Proportional to each mass.** Double one mass and the force doubles.
2. **Inverse square.** Double r and the force falls to ¼. Always measure r from **center to center**, not surface to surface.
3. **Always attractive**, and directed **along the line joining the centers of mass**.
4. **Acts at the center of mass.** For force calculations you may treat the whole gravitational force on a system as acting at its center of mass.

By Newton's third law, the force on m₁ and the force on m₂ are equal in size and opposite in direction, even if one mass is far larger. Their *accelerations* differ, because each is F_g divided by a different mass.

## The gravitational field

A **field** describes what a non-contact force would do to an object placed at each point in space. The **gravitational field** of a mass M at a point is the force per unit mass on a small test mass m placed there:

**g = F_g / m = G M / r²**  (unit: N/kg)

The test mass cancels, so g depends only on the source mass M and the distance r. The field points toward M.

Since 1 N/kg = 1 m/s², the field and an acceleration share a unit. Put Newton's second law together with the field: if gravity is the **only** force on an object, then a = F_g/m = g. So in free fall the acceleration in m/s² is numerically equal to the field strength in N/kg at that place.

**Weight** is the gravitational force a planet or moon exerts on a small object near it:

**W = F_g = m g**

Factors of change follow from g = GM/r². For a uniform planet, M = ρ(4/3)πR³, so the surface field is g = (4/3)πGρR. Two planets of the **same density**: the one with twice the radius has eight times the mass but four times the r², so its surface field is **twice** as strong.

## When is gravity constant?

The force changes as r changes. But if r changes by only a tiny fraction of itself, the change in F_g is negligible and you can treat the force as **constant** between the start and end positions.

Near Earth's surface the field is g ≈ 9.8 N/kg, and in that region we use W = mg with a fixed g. This is the assumption behind every free-fall and projectile calculation in Unit 1.

## Worked example 1: how far does "constant g" go?

**Question.** Use G = 6.67 × 10⁻¹¹ N·m²/kg², Earth's mass 5.97 × 10²⁴ kg and Earth's mean radius 6.37 × 10⁶ m. (a) Find g at the surface. (b) Find the height at which g is 1.0% smaller. (c) By what percentage does g fall between the ground and a point 1.0 km up?

1. **(a)** g₀ = GM/R² = (6.67 × 10⁻¹¹)(5.97 × 10²⁴) ÷ (6.37 × 10⁶)² = **9.81 N/kg**. This matches the 9.8 N/kg we use.
2. **(b)** We need GM/r² = 0.99 GM/R², so r = R/√0.99 = 1.00504R. The height is h = r − R = 0.00504 × 6.37 × 10⁶ m ≈ **3.2 × 10⁴ m (32 km)**.
3. **(c)** g/g₀ = (R/(R + h))² = (6.370/6.371)² = 0.99969, a fall of **0.031%**.

**Interpretation.** A 32 km climb, far above any building or most aircraft, changes g by only 1%. Over a 1 km height the change (0.03%) is smaller than the rounding in 9.8. That is why g is treated as constant for motion near the surface. For a satellite hundreds of kilometres up, it is not.

**Quick check.** For small h, (R/(R + h))² ≈ 1 − 2h/R. With h = 1.0 km, 2h/R = 0.031%, the same answer.

## Apparent weight and weightlessness

A bathroom scale does not measure the gravitational force. It measures how hard it pushes up on you: the **normal force**. That is your **apparent weight**.

Take +y upward. For a person of mass m standing on a scale in a lift with vertical acceleration a_y, the forces are the normal force N up and mg down:

**N − mg = m a_y, so N = m(g + a_y)**

- a_y = 0 (at rest **or moving at constant velocity**): N = mg.
- a_y > 0 (speeding up going up, or slowing down going down): N > mg, you feel heavier.
- a_y < 0 (speeding up going down, or slowing down going up): N < mg, you feel lighter.

So apparent weight differs from mg whenever the system accelerates. A system **appears weightless** (N = 0) in two cases: when no forces act on it at all, or when gravity is the only force acting. A falling lift and an orbiting spacecraft are both the second case. Gravity is still there; nothing is pushing back.

**The equivalence principle.** Inside a closed, windowless cabin, an observer cannot tell whether they are pressed to the floor by a gravitational field or by the cabin accelerating. A cabin at rest on a planet where g = 9.8 N/kg and a cabin far out in space accelerating "up" at 9.8 m/s² feel identical from inside. The cabin in the second case is a non-inertial frame.

## Worked example 2: a scale in a lift

**Question.** Take **+y upward**. A 60 kg passenger stands on a scale in a lift that starts from rest. The lift's velocity is v_y(t) = (1.2 m/s³)t² − (0.40 m/s⁴)t³ for 0 ≤ t ≤ 3.0 s. Find the scale reading at t = 0, 1.0, 2.0 and 3.0 s, the greatest reading, and the distance the lift rises.

1. Acceleration: a_y = dv_y/dt = **2.4t − 1.2t²** (m/s²).
2. Apparent weight: N = m(g + a_y) = 60(9.8 + a_y).

| t (s) | v_y (m/s) | a_y (m/s²) | N (N) |
|---|---|---|---|
| 0 | 0 | 0 | 588 |
| 1.0 | 0.80 | +1.2 | 660 |
| 2.0 | 1.6 | 0 | 588 |
| 3.0 | 0 | −3.6 | 372 |

3. Greatest reading: da_y/dt = 2.4 − 2.4t = 0 at t = 1.0 s, so the maximum is **660 N** (about 12% above the true weight, 588 N).
4. Rise: Δy = ∫₀³ v_y dt = [0.40t³ − 0.10t⁴]₀³ = 10.8 − 8.1 = **2.7 m**.

**Interpretation.** At t = 2.0 s the lift is moving at its fastest, yet the scale reads exactly mg, because a_y = 0 at that instant. Apparent weight depends on **acceleration**, not velocity. At 3.0 s the lift is momentarily at rest but braking hard, and the passenger feels light.

## Inertial mass and gravitational mass

"Mass" appears in two different laws:

- **Inertial mass** is in ΣF = ma. It measures how strongly an object resists a change in its motion.
- **Gravitational mass** is in F_g = Gm₁m₂/r². It measures how strongly an object takes part in gravitational attraction.

There is no obvious reason these should be the same quantity. But experiments, from careful torsion balances to tests in orbit, have found them equal to very high precision. That equality is why all objects in the same field fall with the same acceleration: a = (G M m_grav / r²) ÷ m_inertial = GM/r² only if m_grav = m_inertial.

## Fields from more than one mass

Gravitational forces add as vectors. If two or more bodies pull on an object, find the force from each one with F_g = Gm₁m₂/r², give each its direction (toward that body), and add the components. Fields add the same way, because each field is just a force divided by the same test mass.

A useful case is a point on the line between two bodies. There the two fields point in opposite directions, so somewhere between them they cancel. Set GM₁/x² = GM₂/(d − x)² and solve for x. The cancellation point is always **closer to the smaller mass**, since a weaker source needs a shorter distance to match a stronger one. Off that line the fields are not opposite, and you must add components instead.

This adding-up idea is also how any extended body works. Split it into many tiny masses dm, find the small force from each, and add (integrate) them as vectors. For most shapes this sum is hard. For uniform spheres it gives the simple results below, which the course lets you use without doing the integral.

## Spheres and shells

A planet is not a point. Its gravitational force on you is the vector sum of the forces from all its small pieces of mass. For a **uniform spherical shell** (thin and hollow) that sum has a simple result, **Newton's shell theorem**, which you use without proving:

- **Outside the shell:** the force is the same as if all the shell's mass were a single point at its center.
- **Inside the shell:** the net force is **zero** everywhere, not only at the center.

A **uniform solid sphere** is a set of nested shells. At distance r from the center (r < R), the shells outside you pull with zero net force. Only the **partial mass** within radius r counts:

**M_partial = ρ(4/3)πr³ = M r³/R³**

so

**F_g = G M_partial m / r² = (G M m / R³) r**

Inside a uniform sphere the force grows **in proportion to r**. As a vector pointing toward the center, F_g = −k r with k = GMm/R³: zero at the center and greatest at the surface. Outside, the 1/r² law takes over.

<figure>
<svg viewBox="0 0 620 320" role="img" aria-labelledby="pcm26-gr-title pcm26-gr-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm26-gr-title">Field strength against distance from the center for a uniform solid sphere and a thin shell</title>
<desc id="pcm26-gr-desc">Two graphs side by side, each showing field strength g, as a fraction of the surface value, against distance r from the center, from 0 to 3R. Left, uniform solid sphere: g rises in a straight line from zero at the center to the surface value at r = R, then falls as 1 over r squared, to one quarter at 2R and one ninth at 3R. Right, thin shell of the same mass and radius: g is zero for all r less than R, jumps to the surface value at r = R, then follows the same 1 over r squared curve outside as the solid sphere.</desc>
<rect x="0" y="0" width="620" height="320" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M145 250 V60 M220 250 V60 M295 250 V60 M435 250 V60 M510 250 V60 M585 250 V60"/>
<path d="M70 70 H300 M70 205 H300 M360 70 H590 M360 205 H590"/>
</g>
<path d="M70 250 H305 M70 250 V55 M360 250 H595 M360 250 V55" stroke="#1d2b44" stroke-width="1.5" fill="none"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="70.0,250.0 73.8,241.0 77.5,232.0 81.2,223.0 85.0,214.0 88.8,205.0 92.5,196.0 96.2,187.0 100.0,178.0 103.8,169.0 107.5,160.0 111.2,151.0 115.0,142.0 118.8,133.0 122.5,124.0 126.2,115.0 130.0,106.0 133.8,97.0 137.5,88.0 141.2,79.0 145.0,70.0 148.8,86.7 152.5,101.2 156.2,113.9 160.0,125.0 163.8,134.8 167.5,143.5 171.2,151.2 175.0,158.2 178.8,164.4 182.5,170.0 186.2,175.1 190.0,179.7 193.8,183.9 197.5,187.7 201.2,191.2 205.0,194.4 208.8,197.4 212.5,200.1 216.2,202.7 220.0,205.0 223.8,207.2 227.5,209.2 231.2,211.1 235.0,212.8 238.8,214.4 242.5,216.0 246.2,217.4 250.0,218.8 253.8,220.0 257.5,221.2 261.2,222.3 265.0,223.4 268.8,224.4 272.5,225.3 276.2,226.2 280.0,227.0 283.8,227.8 287.5,228.6 291.2,229.3 295.0,230.0"/>
<path d="M360 250 H435" stroke="#1d2b44" stroke-width="5"/>
<path d="M435 250 V70" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 4"/>
<circle cx="435" cy="250" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="435.0,70.0 438.8,86.7 442.5,101.2 446.2,113.9 450.0,125.0 453.8,134.8 457.5,143.5 461.2,151.2 465.0,158.2 468.8,164.4 472.5,170.0 476.2,175.1 480.0,179.7 483.8,183.9 487.5,187.7 491.2,191.2 495.0,194.4 498.8,197.4 502.5,200.1 506.2,202.7 510.0,205.0 513.8,207.2 517.5,209.2 521.2,211.1 525.0,212.8 528.8,214.4 532.5,216.0 536.2,217.4 540.0,218.8 543.8,220.0 547.5,221.2 551.2,222.3 555.0,223.4 558.8,224.4 562.5,225.3 566.2,226.2 570.0,227.0 573.8,227.8 577.5,228.6 581.2,229.3 585.0,230.0"/>
<circle cx="435" cy="70" r="4" fill="#1d2b44"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="268">0</text><text x="145" y="268">R</text><text x="220" y="268">2R</text><text x="295" y="268">3R</text>
<text x="360" y="268">0</text><text x="435" y="268">R</text><text x="510" y="268">2R</text><text x="585" y="268">3R</text>
<text x="185" y="290" font-size="13">distance from center, r</text>
<text x="475" y="290" font-size="13">distance from center, r</text>
<text x="185" y="35" font-size="13" font-weight="600">Uniform solid sphere</text>
<text x="475" y="35" font-size="13" font-weight="600">Thin shell (same M, R)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="254">0</text><text x="62" y="209">¼</text><text x="62" y="74">g_s</text>
<text x="352" y="254">0</text><text x="352" y="209">¼</text><text x="352" y="74">g_s</text>
</g>
<text x="80" y="140" font-size="12" fill="#1d2b44">g ∝ r</text>
<text x="190" y="160" font-size="12" fill="#1d2b44">g ∝ 1/r²</text>
<text x="368" y="240" font-size="12" fill="#1d2b44">g = 0 inside</text>
<text x="480" y="160" font-size="12" fill="#1d2b44">g ∝ 1/r²</text>
</svg>
<figcaption>Figure 1. Field strength (as a fraction of the surface value g_s) against distance from the center. Left: inside a uniform sphere g rises in proportion to r; outside it falls as 1/r². Right: a thin shell of the same mass gives zero field everywhere inside (thick line on the axis) and the same field as the solid sphere outside.</figcaption>
</figure>

## Worked example 3: inside and outside a uniform moon

**Question.** Tamsa is a fictional moon: a uniform sphere of density 3.0 × 10³ kg/m³ and radius 1.5 × 10⁶ m. A 20 kg probe is (a) on the surface, (b) at the bottom of a deep shaft at r = R/3, and (c) in space at r = 2R. Find the field and the force on the probe in each place. Then find k in F = −kr for the inside region.

1. Mass: M = ρ(4/3)πR³ = 3.0 × 10³ × (4/3)π × (1.5 × 10⁶)³ = **4.24 × 10²² kg**.
2. **(a)** g_s = GM/R² = (6.67 × 10⁻¹¹)(4.24 × 10²²) ÷ (1.5 × 10⁶)² = **1.26 N/kg**. Force: 20 × 1.257 = **25 N**.
3. **(b)** Partial mass: M(R/3)³/R³ = M/27. Then g = G(M/27)/(R/3)² = (9/27) g_s = g_s/3 = **0.42 N/kg**. Force: **8.4 N**.
4. **(c)** Outside, the whole mass acts from the center: g = GM/(2R)² = g_s/4 = **0.31 N/kg**. Force: **6.3 N**.
5. k = GMm/R³ = m g_s/R = 20 × 1.257 ÷ (1.5 × 10⁶) = **1.7 × 10⁻⁵ N/m**. Check: k × R/3 = 8.4 N, matching (b).

**What if Tamsa were a hollow shell** of the same mass and radius? At r = R/3 the force would be **zero**; at r = 2R it would be the same 6.3 N, since outside, a shell and a solid sphere of the same mass act alike.

A common error is to use the whole mass at r = R/3: GM m/(R/3)² = 9 × 25 N ≈ 230 N, about 27 times too large.

## Common misconceptions

- **"There is no gravity in orbit."** In a low orbit a few hundred kilometres up, g is still roughly 90% of its surface value. Astronauts float because gravity is the only force on them.
- **Measuring r from the surface.** In F_g = Gm₁m₂/r², r is between centers.
- **"The bigger mass pulls harder."** The two forces are equal in size (third law). The smaller mass has the larger acceleration.
- **"A scale reads your weight."** It reads the normal force, which equals mg only when a_y = 0.
- **"Moving upward means heavier."** Apparent weight depends on acceleration, not on velocity (Worked example 2, t = 2.0 s).
- **"Inside a planet, gravity gets stronger as you go deeper."** For a uniform sphere it gets weaker, in proportion to r, reaching zero at the center.
- **"Heavier objects fall faster."** With equal inertial and gravitational mass, all objects in the same field have the same free-fall acceleration (air resistance ignored).

## Where this leads

Earlier: [Topic 2.5, Newton's Second Law](/advanced-course-resources/physics-c-mechanics/2-5-newtons-second-law-study-guide/), which turns these forces into accelerations. Next, [Topic 2.7, Kinetic and Static Friction](/advanced-course-resources/physics-c-mechanics/2-7-kinetic-static-friction-study-guide/), uses the normal force you met here as apparent weight. Gravitational potential energy (Unit 3) and orbits (Topic 6.6) build on F_g = Gm₁m₂/r², and the linear F = −kr inside a uniform sphere returns in Unit 7, where a force of that form produces simple harmonic motion. Try the [practice questions](/advanced-course-resources/physics-c-mechanics/2-6-gravitational-force-practice/) now, then use the [revision notes](/advanced-course-resources/physics-c-mechanics/2-6-gravitational-force-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/2-6-gravitational-force-checklist/). You can also return to the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
