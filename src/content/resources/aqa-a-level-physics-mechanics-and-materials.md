---
title: "AQA A-Level Physics: Mechanics and materials (7408)"
seoTitle: "AQA A-Level Physics Mechanics and Materials Study Guide"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Mechanics and materials"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 4
syllabusTopics:
  - qualification: "a-level"
    topic: "mechanics-and-materials-aqa-alevel"
  - qualification: "a-level"
    topic: "mechanics-and-materials-aqa-alevel"
    subtopic: "force-energy-and-momentum"
  - qualification: "a-level"
    topic: "mechanics-and-materials-aqa-alevel"
    subtopic: "materials-aqa-alevel"
description: "Study guide for AQA A-Level Physics 7408 section 3.4: vectors, moments, motion, momentum, energy, materials and the Young modulus, with worked examples."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-06
featured: false
reviewNote: "2026-11-08: reviewed by hassan."
---

This guide teaches section 3.4, Mechanics and materials, of AQA A-level Physics (7408). It follows the AQA AS and A-level Physics specification (7407/7408), version 1.4, for AS and A-level exams from June 2016 onwards, and covers every sub-section from 3.4.1.1 to 3.4.2.2. Section 3.4 is AS and A-level content (no part of it is A-level only). At A-level it is examined on Paper 1, which covers sections 1 to 5 and 6.1, and it is assumed knowledge for Paper 2; Paper 3 Section A tests practical skills and data analysis, and the written papers assess the two required practicals here. Sections 3.9 to 3.13 are options: you study one, assessed in Paper 3 Section B.

Use it with the [revision notes](/resources/aqa-a-level-physics-mechanics-and-materials-revision-notes/) and the [practice questions](/resources/aqa-a-level-physics-mechanics-and-materials-practice/). See also the [course hub](/boards/aqa/a-level/physics/) and the [printable checklist](/checklists/aqa/a-level/physics/). For uncertainties in the required practicals, see [Measurements and their errors](/resources/aqa-alevel-physics-limitation-of-physical-measurements/).

## What this section covers

| Spec | Content |
|---|---|
| 3.4.1.1 | Scalars, vectors, resolving, equilibrium |
| 3.4.1.2 | Moments, couples, centre of mass |
| 3.4.1.3 | Straight-line motion, graphs, suvat; Required practical 3 |
| 3.4.1.4 | Projectiles, friction, lift, drag, terminal speed |
| 3.4.1.5 | Newton's laws |
| 3.4.1.6 | Momentum, impulse, collisions, explosions |
| 3.4.1.7 | Work, power, efficiency |
| 3.4.1.8 | Conservation of energy |
| 3.4.2.1 | Density, Hooke's law, stress, strain, strain energy |
| 3.4.2.2 | Young modulus; Required practical 4 |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-motion-and-newtons-laws--04-terminal-velocity.webp" width="900" height="1130" alt="A velocity-time graph for a faller computed from a drag-squared model, with points A to E and matching free-body diagrams. Drag grows from zero until it equals the weight at terminal velocity (40 m s-1), then the parachute opens, drag exceeds weight and the speed falls to a smaller terminal velocity (8 m s-1) where drag again equals weight." loading="lazy">
  <figcaption>Acceleration falls to zero as drag grows to equal weight; opening a parachute gives a new, smaller terminal velocity.</figcaption>
</figure>


## 3.4.1.1 Scalars and vectors

**Scalars** have magnitude only (speed, distance, mass). **Vectors** also have direction (velocity, displacement, force, weight, acceleration).

Add two vectors **at right angles** by Pythagoras and tan⁻¹; for other angles use a **scale drawing** (tip-to-tail).

To **resolve** a vector F at angle θ to a direction: component along it = F cos θ, component perpendicular = F sin θ. On a slope of angle θ, weight mg has components **mg sin θ down the slope** and **mg cos θ into the slope**.

**Equilibrium** means zero resultant force: the object is at rest or moving at constant velocity. Two forces in equilibrium are equal and opposite. Three coplanar forces in equilibrium form a **closed triangle** tip-to-tail, or their components cancel in two perpendicular directions.

**Worked example.** Forces of 12 N east and 5 N north act on a point. Find the resultant.

```
size  = √(12² + 5²) = 13 N
angle = tan⁻¹(5/12) = 22.6° north of east
```

A 4.0 kg box rests on a 30° slope (g = 9.81 m s⁻²). Weight = 39.2 N. Down the slope: 39.2 sin 30° = **19.6 N** (balanced by friction). Into the slope: 39.2 cos 30° = **34.0 N** (balanced by the normal reaction).

## 3.4.1.2 Moments

**Moment** = force × perpendicular distance from the point to the line of action of the force (unit N m).

A **couple** is a pair of equal and opposite coplanar forces. **Moment of a couple** = one force × perpendicular distance between the lines of action.

**Principle of moments:** for an object in equilibrium, the sum of clockwise moments about any point equals the sum of anticlockwise moments about that point.

The **centre of mass** is the point where the whole weight can be taken to act. For a uniform regular solid it is at the centre.

**Worked example.** A uniform beam 3.0 m long, weight 200 N, rests on supports at each end. A 600 N person stands 1.0 m from the left end. Find each support force.

```
moments about left end:  R_right × 3.0 = 200 × 1.5 + 600 × 1.0 = 900
R_right = 300 N
vertical equilibrium:    R_left = 800 − 300 = 500 N
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-motion-and-newtons-laws--09-moments-beam.webp" width="900" height="930" alt="A 4.0 m, 220 N board rests on supports A and B with a 650 N worker 1.0 m from the left end. Taking moments about A removes R_A: 220 x 1.5 + 650 x 0.5 = R_B x 2.7, so R_B = 243 N, and balancing forces gives R_A = 627 N." loading="lazy">
  <figcaption>Choose a pivot where an unknown force acts, equate clockwise and anticlockwise moments, then balance forces.</figcaption>
</figure>


## 3.4.1.3 Motion along a straight line

Velocity v = Δs/Δt and acceleration a = Δv/Δt. **Average** velocity is total displacement ÷ total time; **instantaneous** velocity is the gradient of the tangent to the displacement–time graph at that moment.

| Graph | Gradient gives | Area gives |
|---|---|---|
| displacement–time | velocity | – |
| velocity–time | acceleration | displacement |
| acceleration–time | – | change in velocity |

A curved s–t or v–t graph means non-uniform acceleration. For a **bouncing ball** (up positive), the v–t graph is a set of parallel lines of gradient −g, jumping from negative to positive velocity at each bounce.

For **uniform acceleration**:

```
v = u + at          s = (u + v)t/2
s = ut + ½at²       v² = u² + 2as
```

Free-fall acceleration near the Earth is **g ≈ 9.81 m s⁻²**.

**Worked example.** A car moving at 4.0 m s⁻¹ accelerates at 2.5 m s⁻² over 30 m. Find its final speed and the time taken.

```
v² = 4.0² + 2 × 2.5 × 30 = 166   →  v = 12.9 m s⁻¹
t = (v − u)/a = (12.88 − 4.0)/2.5 = 3.55 s
```

**Required practical 3: determination of g by a free-fall method.** Release a steel ball from rest (electromagnet) and time its fall through height h electronically (light gates or trap door). Repeat for several heights. From h = ½gt², a graph of h against t² is a straight line with gradient g/2. A magnet release delay is a **systematic error**; scatter in timing is **random** and is reduced by repeats.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-motion-and-newtons-laws--06-impulse-area.webp" width="900" height="1140" alt="Two force-time graphs. A triangle rising to 800 N at 6 ms and falling to zero at 18 ms has area 7.2 N s, so a 0.16 kg ball leaves at 45 m s-1. Readings at 2 ms intervals are estimated with trapezium strips as 0.0020 x 1630 = 3.26 N s, about 20 m s-1." loading="lazy">
  <figcaption>Impulse is the area under a force-time graph; use exact shapes for straight lines and strips for a curve.</figcaption>
</figure>


## 3.4.1.4 Projectile motion

Horizontal and vertical motion are **independent**. Ignoring air resistance, horizontal velocity is constant and vertical acceleration is g. Time links the two directions.

**Worked example.** A ball is thrown horizontally at 15 m s⁻¹ from a 20 m cliff.

```
vertical:   20 = ½ × 9.81 × t²   →  t = 2.02 s
horizontal: range = 15 × 2.02 = 30.3 m
impact:     v_y = 9.81 × 2.02 = 19.8 m s⁻¹
            speed = √(15² + 19.8²) = 24.8 m s⁻¹
```

**Friction** opposes relative motion between surfaces (static versus dynamic friction is not tested). **Drag** opposes motion through a fluid; **lift** acts perpendicular to the fluid flow. **Air resistance increases with speed**, so a falling object speeds up until drag equals weight: resultant force zero, **terminal speed**.

With air resistance a projectile's range and maximum height fall and the descent is steeper than the ascent. A vehicle reaches maximum speed when driving force equals total resistive force, so this depends on power and shape.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-motion-and-newtons-laws--01-slope-forces.webp" width="900" height="840" alt="Free-body diagram of a 12 kg block on a 25 degree slope with arrows to scale. Weight 118 N acts down, the normal contact force 107 N is perpendicular to the slope and friction 18 N acts up the slope. Weight is resolved into mg sin 25 = 49.8 N down the slope and mg cos 25 = 107 N into it, giving a net 31.8 N and a = 2.6 m s-2." loading="lazy">
  <figcaption>The normal force is perpendicular to the slope, and the weight splits into components along and into it.</figcaption>
</figure>


## 3.4.1.5 Newton's laws of motion

1. An object stays at rest or at constant velocity unless a resultant force acts on it.
2. Resultant force = mass × acceleration, **F = ma**, when mass is constant.
3. If A exerts a force on B, B exerts an equal and opposite force of the same type on A (they act on **different** bodies).

Draw a **free-body diagram** (one object only) before using F = ma.

**Worked example.** Find the floor's reaction on a 60 kg person in a lift accelerating upwards at 1.5 m s⁻².

```
R − mg = ma   →  R = 60 × (9.81 + 1.5) = 679 N
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-motion-and-newtons-laws--02-third-law-pairs.webp" width="900" height="1090" alt="Two third-law pairs for a book on a table: Earth pulls book with book pulls Earth, and table pushes book with book pushes table. A pair is the same kind of force, equal and opposite, on different bodies. Weight and the normal force both act on the book, so they are not a pair." loading="lazy">
  <figcaption>Third-law pairs act on different bodies; weight and the normal contact force act on one body and are not a pair.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-motion-and-newtons-laws--03-lift-tension.webp" width="900" height="900" alt="Three free-body diagrams of a 640 kg lift to one scale. Accelerating upward the tension is 7.0 kN, at constant speed 6.3 kN, and decelerating while moving up 5.5 kN, always against a weight of 6.3 kN. Net force is 0.77 kN up, zero, and 0.77 kN down." loading="lazy">
  <figcaption>Tension is larger than weight when acceleration is upward and smaller when it is downward, T = m(g + a).</figcaption>
</figure>


## 3.4.1.6 Momentum

Momentum = mass × velocity (kg m s⁻¹ or N s), a vector. In a closed system, **total momentum is conserved** in collisions and explosions (one-dimensional problems only).

Newton's second law in general form: **F = Δ(mv)/Δt**. **Impulse** FΔt = Δ(mv) for a constant force. The **area under a force–time graph** is the change in momentum, even for a varying force. For a given momentum change, a longer contact time means a smaller force: crumple zones, airbags and packaging use this, which links momentum to ethical transport design.

**Elastic** collision: total kinetic energy conserved. **Inelastic**: it is not. **Explosion**: total momentum is unchanged (zero if starting at rest); kinetic energy comes from a store such as a spring.

**Worked example.** A 2.0 kg trolley at 3.0 m s⁻¹ hits a stationary 1.0 kg trolley and they stick together.

```
2.0 × 3.0 = 3.0 × v   →  v = 2.0 m s⁻¹
Ek before = ½ × 2.0 × 3.0² = 9.0 J;  Ek after = ½ × 3.0 × 2.0² = 6.0 J
```

Kinetic energy falls, so the collision is inelastic.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-motion-and-newtons-laws--05-momentum-change.webp" width="900" height="1090" alt="A ball hits a wall at 32 m s-1 and rebounds at 24 m s-1. Taking towards the wall as positive, the initial momentum is +1.824 and the final is -1.368 kg m s-1, so the change is -3.192. The velocity change is 56 m s-1, not 8. Over 4.5 ms the average force is 709 N away from the wall." loading="lazy">
  <figcaption>Because momentum is a vector, a rebound changes it by the sum of the two sizes, and F = Δp/Δt gives the force.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-motion-and-newtons-laws--07-collisions-1d.webp" width="900" height="1240" alt="Two one-dimensional collisions with bar charts. Gliders sticking together keep momentum 0.378 kg m s-1 but kinetic energy falls from 0.170 J to 0.102 J. Elastic trolleys keep both momentum (1.44) and kinetic energy (1.728 J), and the speeds of approach and separation are both 2.4 m s-1." loading="lazy">
  <figcaption>Momentum is conserved in both kinds of collision; kinetic energy is conserved only if the collision is perfectly elastic.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-motion-and-newtons-laws--08-collision-2d.webp" width="900" height="1110" alt="A 0.16 kg puck at 5.0 m s-1 hits a stationary 0.24 kg puck. The first leaves at 3.0 m s-1 at 35 degrees; the second leaves at 2.0 m s-1 at 34 degrees on the other side. A to-scale momentum triangle closes on the original 0.80 kg m s-1. Kinetic energy falls from 2.0 J to 1.22 J, so it is inelastic." loading="lazy">
  <figcaption>Momentum is conserved on each axis, so the two final momenta add as vectors to the initial momentum.</figcaption>
</figure>


## 3.4.1.7 Work, energy and power

Work done **W = Fs cos θ** (θ between force and displacement). The **area under a force–displacement graph** is the work done, even for a variable force. Power P = ΔW/Δt = **Fv**.

**efficiency = useful output power ÷ input power**, often given as a percentage.

**Worked example.** A 50 N pull at 30° above the horizontal drags a sledge 40 m: W = 50 × 40 × cos 30° = **1730 J**. A motor with input power 5.0 W lifts 0.50 kg through 1.2 m in 2.0 s:

```
useful power = mgh/t = 0.50 × 9.81 × 1.2 / 2.0 = 2.94 W
efficiency   = 2.94/5.0 = 0.59 = 59%
```

## 3.4.1.8 Conservation of energy

Energy is never created or destroyed. ΔEp = mgΔh and Ek = ½mv². Loss of Ep = gain of Ek + work done against resistive forces.

**Worked example.** A 70 kg skier starts from rest and descends 25 m vertically, reaching 18 m s⁻¹.

```
Ep lost = 70 × 9.81 × 25 = 17 168 J
Ek gained = ½ × 70 × 18² = 11 340 J
work against resistance = 5830 J (5.8 kJ)
```

## 3.4.2.1 Bulk properties of solids

**Density** ρ = m/V. A 0.540 kg block of volume 2.0 × 10⁻⁴ m³ has ρ = **2700 kg m⁻³**.

**Hooke's law:** F = kΔL up to the limit of proportionality; k is the **stiffness** or **spring constant** (N m⁻¹). Beyond the **elastic limit** the material does not return to its original length.

- **Tensile stress** = F/A (Pa). **Tensile strain** = ΔL/L (no unit).
- **Breaking stress** is the stress at which the material breaks.
- **Elastic strain energy** = ½FΔL = area under the force–extension graph (up to the elastic limit).

On a force–extension graph, **plastic behaviour** is large extension for little extra force, with permanent deformation (copper). **Brittle** materials (glass) stay near-linear up to **fracture** with almost no plastic region. Loaded beyond the elastic limit and unloaded, a metal's unloading line is parallel to the loading line; the area between them is the energy used to deform it.

The initial gradient of a **stress–strain curve** is the Young modulus. Crumple zones absorb energy by deforming, another ethical-transport link.

**Worked example.** A spring with k = 250 N m⁻¹ is compressed 0.080 m and launches a 0.050 kg ball vertically. Find the maximum height, ignoring air resistance.

```
E = ½kΔL² = ½ × 250 × 0.080² = 0.80 J
h = E/(mg) = 0.80/(0.050 × 9.81) = 1.63 m
```

## 3.4.2.2 The Young modulus

```
Young modulus E = tensile stress / tensile strain = FL/(AΔL)
```

E is the gradient of the linear part of a stress–strain graph. Unit: Pa.

**Worked example.** A steel wire 2.0 m long, diameter 0.50 mm, extends by 2.0 mm under a 40 N load.

```
A = π(0.25 × 10⁻³)² = 1.96 × 10⁻⁷ m²
stress = 40/1.96 × 10⁻⁷ = 2.04 × 10⁸ Pa
strain = 2.0 × 10⁻³/2.0 = 1.0 × 10⁻³
E = 2.04 × 10¹¹ Pa
```

**Required practical 4: determination of the Young modulus by a simple method.** Measure a long thin wire's length (metre rule) and diameter at several points (micrometer). Add masses and read extension against a fixed marker. Plot stress against strain; E is the gradient of the straight part. Long and thin gives a measurable extension; the squared diameter carries the largest percentage uncertainty. Wear eye protection.

## Common errors

- Using sin and cos the wrong way round on a slope: mg sin θ acts **along** the slope.
- Taking moments with a distance that is not perpendicular to the line of action.
- Naming weight and normal reaction as a Newton's third law pair: they act on the same body.
- Adding speeds in a collision without signs; give each velocity a direction.
- Using diameter instead of radius in A = πr², or forgetting to convert mm to m.
- Calling a collision elastic just because the objects bounce apart; check kinetic energy.

## Frequently asked questions

**How do you resolve weight on a slope?**
On a slope at angle θ, the weight mg has a component mg sin θ down the slope and mg cos θ into the slope. Swapping sin and cos is a common error.

**What is the moment of a couple?**
A couple is a pair of equal and opposite coplanar forces. Its moment is one force multiplied by the perpendicular distance between their lines of action.

**How do you measure the Young modulus in AQA Required practical 4?**
Measure a long thin wire's length with a metre rule and its diameter at several points with a micrometer, add masses and read the extension against a fixed marker. Plot stress against strain; the Young modulus is the gradient of the straight part.

**What does the area under a force-time graph represent?**
The area under a force-time graph is the change in momentum, or impulse, even when the force varies.

## Official syllabus

AQA AS and A-level Physics specification (7407/7408), version 1.4, July 2026, for AS and A-level exams June 2016 onwards, published by AQA. Section 3.4 Mechanics and materials.
