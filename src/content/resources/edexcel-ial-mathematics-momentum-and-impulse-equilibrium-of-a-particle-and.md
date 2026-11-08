---
title: "Pearson Edexcel International Advanced Level Mathematics: Momentum and impulse, equilibrium of a particle and moments (YMA01)"
seoTitle: "Edexcel IAL Maths M1 Momentum, Equilibrium, Moments"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Momentum and impulse, equilibrium of a particle and moments"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 157
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-m1-mechanics-1-edexcel-alevel-maths"
    subtopic: "m1-dynamics-edexcel-alevel-maths"
  - qualification: "a-level"
    topic: "unit-m1-mechanics-1-edexcel-alevel-maths"
    subtopic: "m1-statics-of-a-particle-edexcel-alevel-maths"
  - qualification: "a-level"
    topic: "unit-m1-mechanics-1-edexcel-alevel-maths"
    subtopic: "m1-moments-edexcel-alevel-maths"
description: "Study guide for Edexcel IAL Mathematics M1: momentum, impulse, resolving forces, equilibrium, friction at rest and moments, with worked examples."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-11
featured: false
reviewNote: "2026-11-08: reviewed by sajawal-zahid."
---
This guide is aligned to the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification (YMA01), Issue 3, April 2019. It covers Mechanics 1 (M1) topics 4.3, 5.1, 5.2, 5.3 and 6.1. The specification lists M1 as an optional unit for IAS Mathematics and Further Mathematics and for IAL Mathematics and Further Mathematics. Newton's laws, connected particles and motion on slopes are taught on other Marlbridge pages, so they are not repeated here.

Related pages: [revision notes](/resources/edexcel-ial-mathematics-momentum-and-impulse-equilibrium-of-a-particle-and-revision-notes/), [practice questions](/resources/edexcel-ial-mathematics-momentum-and-impulse-equilibrium-of-a-particle-and-practice/), [course hub](/boards/edexcel/a-level/mathematics/), [printable checklist](/checklists/edexcel/a-level/mathematics/), [exam preparation](/resources/edexcel-ial-mathematics-exam-preparation/) and the [free 10-minute diagnostics](/diagnostics/).

## What this unit covers

| Topic | You must be able to |
|---|---|
| 4.3 | Use momentum and impulse, the impulse-momentum principle, and conservation of momentum for two particles colliding directly. One dimension only. Newton's law of restitution is not required. |
| 5.1 | Treat forces as vectors and resolve them into components. |
| 5.2 | Use equilibrium of a particle under coplanar forces: weight, normal reaction, tension, thrust and friction. Only simple cases. |
| 5.3 | Use F ≤ μR when a particle is in equilibrium. |
| 6.1 | Find the moment of a force and solve simple problems with coplanar parallel forces and conditions for equilibrium. |

Use SI units throughout. Where a question gives g, use that value. This guide uses g = 9.8 m s⁻² and says so each time.

## 4.3 Momentum and impulse

Momentum of a particle of mass m moving with velocity v is mv. Impulse is the change in momentum:

I = mv − mu

with u the initial velocity and v the final velocity. Both are vectors. In one dimension, pick a positive direction first and give every velocity a sign. Momentum is measured in N s, which is the same as kg m s⁻¹.

If a constant force F acts for time t, the impulse is F × t. This links the idea to the average force in a short contact.

### Example 1: a rebound

A particle of mass 0.6 kg hits a smooth fixed wall at 8 m s⁻¹ and rebounds at 5 m s⁻¹, along the same line. Find the magnitude of the impulse on the particle. The contact lasts 0.02 s. Find the average force.

```
Positive direction: away from the wall.
u = −8 (moving towards the wall), v = +5.
I = 0.6 × 5 − 0.6 × (−8) = 3 + 4.8 = 7.8
Average force = I / t = 7.8 / 0.02 = 390
```

The impulse has magnitude 7.8 N s, directed away from the wall. The average force is 390 N.

### Example 2: a given impulse

A trolley of mass 1.5 kg moves at 4 m s⁻¹. It receives an impulse of 9 N s in its direction of motion. Then 9 = 1.5v − 1.5 × 4, so 1.5v = 15 and v = 10 m s⁻¹.

## 4.3 Conservation of momentum

In a direct collision with no outside impulse along the line of motion, the total momentum before equals the total momentum after:

m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂

The impulse on one particle is equal and opposite to the impulse on the other. If the particles join, they move together after the collision, so v₁ = v₂.

### Example 3: particles that join

A has mass 3 kg and moves at 5 m s⁻¹. B has mass 2 kg and moves towards A at 4 m s⁻¹. They join on impact. Take A's direction as positive, so B's velocity is −4.

```
3 × 5 + 2 × (−4) = (3 + 2)v
15 − 8 = 5v
v = 1.4
```

The combined particle moves at 1.4 m s⁻¹ in A's original direction.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-mechanics--03-amth-forces-pulley.webp" width="900" height="1210" alt="(Top) A 3 kg particle on a smooth table joined over a smooth pulley to a 2 kg hanging particle: T = 3a and 2g − T = 2a give a = 3.92 m per second squared, T = 11.8 N. (Bottom) 7 kg and 4 kg hanging masses: a = 3g/11 = 2.67 m per second squared, T = 49.9 N. Tension is the same on both sides." loading="lazy">
  <figcaption>Write one F = ma equation per particle; tension is the same each side of a smooth pulley.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-mechanics--04-amth-forces-tow.webp" width="900" height="1010" alt="Whole system of 2000 kg: 3300 − 800 = 2000a gives a = 1.25 m per second squared. Trailer alone: T − 300 = 800 × 1.25 gives T = 1300 N. With a rigid bar and braking, the system slows at 1.15 m per second squared and the bar pushes back on the trailer with 620 N thrust (Cambridge 9709, OxfordAQA)." loading="lazy">
  <figcaption>Treat the whole system first, then one part to find the tow-bar force; a rigid bar can push (thrust).</figcaption>
</figure>


### Example 4: particles that separate

A of mass 4 kg moving at 6 m s⁻¹ catches B of mass 1.5 kg moving at 2 m s⁻¹ in the same direction. After impact A moves at 4.2 m s⁻¹ in the same direction. Find B's speed and the impulse each particle receives.

```
4 × 6 + 1.5 × 2 = 4 × 4.2 + 1.5v
27 = 16.8 + 1.5v
v = 6.8
Impulse on B = 1.5 × (6.8 − 2) = 7.2 N s
Impulse on A = 4 × (4.2 − 6) = −7.2 N s
```

B moves at 6.8 m s⁻¹. The two impulses are equal and opposite, which is a useful check.

## 5.1 Forces as vectors

A force has magnitude and direction. A force F at angle θ to a chosen direction has a component F cos θ along that direction and F sin θ perpendicular to it. Check which angle you are given before choosing cos or sin.

Forces can also be written with the unit vectors i and j, for example F = (3i + 5j) N. The resultant is the vector sum. Its magnitude is √(x² + y²) and its direction comes from tan⁻¹(y/x), with a sketch to fix the quadrant.

### Example 5: components

A force of 20 N acts at 35° above the horizontal. Horizontal component: 20 cos 35° = 16.4 N. Vertical component: 20 sin 35° = 11.5 N (3 s.f.).

## 5.2 Equilibrium of a particle

A particle is in equilibrium when the forces on it have zero resultant. Resolve along two perpendicular lines and make each total zero. Choose directions that put unknown forces along an axis.

The forces you meet are:

- weight, mg, acting vertically downwards
- normal reaction, at right angles to a surface
- tension, pulling along a string
- thrust, pushing along a rod
- friction, along a rough surface and opposing the tendency to slide

### Example 6: two strings

A 5 kg particle is suspended by two strings, one at 30° to the horizontal and the other at 50°, on opposite sides. With g = 9.8, the weight is 49 N.

```
Horizontal: T₁ cos 30° = T₂ cos 50°
Vertical:   T₁ sin 30° + T₂ sin 50° = 49
From the first, T₁ = T₂ cos 50° / cos 30°
Substitute: T₂ (cos 50° tan 30° + sin 50°) = 49
T₂ = 43.1, T₁ = 32.0
```

The tensions are 32.0 N and 43.1 N (3 s.f.). The steeper string carries more.

### Example 7: a thrust

A light rod AB is fixed to a wall at A and slopes upwards at 50° to the horizontal. A particle of mass 6 kg is attached at B. A horizontal string at B is fixed to the wall. The rod pushes B with thrust S along AB, and the string pulls B with tension T.

```
Vertical:   S sin 50° = 6 × 9.8 = 58.8, so S = 76.8
Horizontal: T = S cos 50° = 49.3
```

The thrust is 76.8 N and the tension is 49.3 N.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-mechanics--02-amth-forces-two-strings.webp" width="900" height="960" alt="A 5 kg particle hangs on two strings at 30 and 45 degrees to the horizontal. Solving the horizontal and vertical balances gives T1 = 35.9 N and T2 = 43.9 N. Drawn head to tail, W, T1 and T2 form a closed triangle, so the resultant is zero." loading="lazy">
  <figcaption>In equilibrium the forces sum to zero in every direction, so they close into a triangle.</figcaption>
</figure>


## 5.3 Friction in equilibrium

Friction F is not always μR. In equilibrium it adjusts to balance the other forces, up to a limit:

F ≤ μR

When the particle is on the point of slipping, friction is limiting and F = μR. The word "limiting" or "about to move" tells you to use equality.

### Example 8: rope at an angle

A crate of mass 12 kg rests on rough horizontal ground. A rope at 30° above the horizontal has tension 40 N and the crate does not move. With g = 9.8:

```
Vertical:   R + 40 sin 30° = 117.6, so R = 97.6
Horizontal: F = 40 cos 30° = 34.64
```

For this to be possible, 34.64 ≤ 97.6μ, so μ ≥ 0.355 (3 s.f.). The friction is 34.6 N, not μR, unless the crate is about to slip.

### Example 9: greatest tension

The same crate has μ = 0.45. Find the greatest tension in the rope, at 30° above the horizontal, for which the crate stays at rest.

```
Limiting: T cos 30° = 0.45 (117.6 − T sin 30°)
T (cos 30° + 0.45 sin 30°) = 52.92
T = 52.92 / 1.0910 = 48.5
```

The greatest tension is 48.5 N. A larger tension would make the crate move, which is a topic for the dynamics pages.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-mechanics--05-amth-forces-friction-model.webp" width="900" height="940" alt="Graph of friction against push for a 5 kg box with μ = 0.4 (R = 49 N, maximum friction 19.6 N). F equals P until P = 19.6 N, then stays at 19.6 N when the box slides. P = 15 N gives F = 15 N, not 19.6 N. Three mini diagrams show at rest, limiting and sliding (a = 1.08 m per second squared)." loading="lazy">
  <figcaption>Friction matches the push up to a maximum μR; only when on the point of moving or sliding is F = μR.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-mechanics--06-amth-forces-rope-angle.webp" width="900" height="970" alt="A 12 kg box on rough ground (μ = 0.4) on the point of sliding. Pulled by a rope at 25 degrees above horizontal, T = 43.7 N and R = 99.1 N, less than the weight 117.6 N. Pushed at 25 degrees below horizontal, P = 63.8 N and R = 144.6 N, more than the weight. Dashed lines show components." loading="lazy">
  <figcaption>A pull at an angle lowers R and so the friction limit; a push at an angle raises it.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-mechanics--07-amth-forces-slope.webp" width="900" height="920" alt="A 4 kg block on a 30 degree rough slope with μ = 0.25. Weight 39.2 N splits into mg sin 30 = 19.6 N down the slope and mg cos 30 = 33.9 N into it, so R = 33.9 N and F = 8.49 N up the slope. 19.6 − 8.49 = 4a gives a = 2.78 m per second squared down the slope." loading="lazy">
  <figcaption>Resolve the weight along and across the slope: R = mg cos θ and the net force down the slope is mg sin θ − μR.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-mechanics--09-amth-forces-conical.webp" width="900" height="940" alt="A 0.4 kg bob on a 1.2 m string moves in a horizontal circle at 5 rad per second. T = mLω² = 12 N, cos θ = g/(Lω²) = 0.327 so θ = 70.9 degrees, r = 1.13 m, v = 5.67 m per second. Tension plus weight give a horizontal resultant 11.3 N to the centre; from above, v is tangent and a = 28.3 m per second squared points to the centre." loading="lazy">
  <figcaption>The resultant of tension and weight points to the centre of the circle and equals mrω².</figcaption>
</figure>


## 6.1 Moments

The moment of a force about a pivot is the force times the shortest distance from the pivot to the line along which the force acts. The unit is N m. Say whether each moment is clockwise or anticlockwise.

For a rigid body under coplanar parallel forces to be in equilibrium:

1. the forces in each direction sum to zero (for vertical forces: upward total = downward total)
2. the total clockwise moment about any point equals the total anticlockwise moment about that point

The weight of a uniform rod acts at its midpoint. A light rod has no weight. For a non-uniform rod the question gives the position of the centre of mass.

### Example 10: two supports

<!-- marlbridge-diagram:maths-b22-plank-support-reactions-moments -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/mathematics/maths-b22-plank-support-reactions-moments.svg" aria-label="Open full-size diagram: maths-b22-plank-support-reactions-moments"><img src="/images/learning/mathematics/maths-b22-plank-support-reactions-moments.svg" width="1600" height="1050" alt="A uniform 3 m plank of mass 16 kg has supports C at 0.4 m from A and D at 0.6 m from B. Its weight 156.8 N acts at the midpoint, 1.1 m to the right of C; CD=2 m. Moments about C give RD×2=156.8×1.1, so RD=86.24 N; vertical equilibrium gives RC=70.56 N." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>A uniform 3 m plank of mass 16 kg has supports C at 0.4 m from A and D at 0.6 m from B. Its weight 156.8 N acts at the midpoint, 1.1 m to the right of C; CD=2 m. Moments about C give RD×2=156.8×1.1, so RD=86.24 N; vertical equilibrium gives RC=70.56 N. Select the image to enlarge it.</figcaption>
</figure>
<!-- /marlbridge-diagram:maths-b22-plank-support-reactions-moments -->


A uniform plank AB of length 3 m and mass 16 kg lies on supports at C and D. C is 0.4 m from A and D is 0.6 m from B, so CD = 2 m and the weight acts 1.1 m from C. With g = 9.8, the weight is 156.8 N.

```
Moments about C: R_D × 2 = 156.8 × 1.1, so R_D = 86.24
Resolve:         R_C + R_D = 156.8, so R_C = 70.56
```

The reactions are 70.6 N at C and 86.2 N at D (3 s.f.). Taking moments about C removes R_C from the equation.

### Example 11: about to tilt

A uniform rod AB has length 8 m and mass 27 kg. It rests on supports at C, 1 m from A, and D, 5 m from A. A particle of mass M kg is attached at end B. Find the largest M for which the rod still rests on both supports.

The rod is about to tilt about D when R_C = 0. The rod's weight is 4 m from A, which is 1 m left of D. B is 3 m right of D.

```
Moments about D: 27g × 1 = Mg × 3
M = 9
```

The greatest mass is 9 kg. For M = 6, the same moment equation with R_C included gives 27g = 4R_C + 18g, so R_C = 22.05 N.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-mechanics--08-amth-forces-moments.webp" width="900" height="1010" alt="A uniform plank AB, 5 m and 22 kg, rests on supports C (0.5 m from A) and D (1.5 m from B); a 55 kg person stands 1 m from A. Moments about C: clockwise 269.5 + 431.2 = 700.7 N m equals R_D × 3.0, so R_D = 233.6 N and R_C = 754.6 − 233.6 = 521.0 N. Distances are to scale." loading="lazy">
  <figcaption>Take moments about a support to remove its reaction; clockwise moments equal anticlockwise moments.</figcaption>
</figure>


## Common errors

- Using cos where sin is needed. Mark the angle on a sketch and say which side the component is adjacent to.
- Using F = μR when the particle is merely in equilibrium. Use F ≤ μR unless the question says limiting, about to slip or on the point of moving.
- Treating R as equal to the weight when the applied force has a vertical part. An upward pull lowers R and a downward push raises it.
- Mixing up the sign of velocities in a collision. Choose a positive direction and keep it.
- Using the distance along a rod instead of the perpendicular distance in a moment.
- Placing a uniform rod's weight off-centre, or giving a light rod a weight.
- Setting R_C = 0 for "about to tilt" but taking moments about the wrong support.

Next, try the [practice questions](/resources/edexcel-ial-mathematics-momentum-and-impulse-equilibrium-of-a-particle-and-practice/) and keep the [revision notes](/resources/edexcel-ial-mathematics-momentum-and-impulse-equilibrium-of-a-particle-and-revision-notes/) for the final weeks.

## Frequently asked questions

**What is the principle of conservation of momentum?**
In a direct collision with no outside impulse along the line of motion, total momentum before equals total momentum after: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂. If the particles join, they move with one common velocity afterwards.

**When is a particle in equilibrium?**
A particle is in equilibrium when the resultant of the forces on it is zero. Resolve in two perpendicular directions and set each total to zero.

**Does an upward pull change the normal reaction?**
Yes. If an applied force has a vertical component, the normal reaction is no longer equal to the weight: an upward pull reduces R and a downward push increases it.

**What are the conditions for a rod to be in equilibrium under parallel forces?**
The forces in each direction must sum to zero, and the total clockwise moment about any point must equal the total anticlockwise moment about that point.

**Which value of g should you use in Edexcel IAL M1 questions?**
Use the value of g given in the question. This guide uses g = 9.8 m s⁻² and gives answers to 3 significant figures unless they are exact.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019 (Pearson Education Limited), unit M1 topics 4.3, 5.1, 5.2, 5.3 and 6.1.
