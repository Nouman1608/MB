---
title: "OxfordAQA International AS and A-level Mathematics: Statics: forces, friction and equilibrium of a particle (9660)"
seoTitle: "OxfordAQA Maths M2 Statics of a Particle Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Statics: force diagrams, friction, resolving forces and equilibrium of a particle"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 209
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-m2-mechanics-oxfordaqa-alevel-maths"
    subtopic: "m2-statics-and-forces-oxfordaqa-alevel-maths"
description: "Study guide to force diagrams, friction, resolving forces and equilibrium of a particle (M2.3) for OxfordAQA International A-level Mathematics 9660."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide covers the first part of section M2.3 (Statics and forces) of the OxfordAQA International AS and A-level Mathematics specification (9660), Version 5.2: force diagrams, friction, forces as vectors, resolving, and the equilibrium of a particle. The specification states this content is part of International A-level Unit M2 (Mechanics) and is not examined at International AS. Moments, rigid bodies in equilibrium and centres of mass are the rest of M2.3 and are taught separately.

Related pages: [revision notes](/resources/oxfordaqa-a-level-mathematics-statics-force-diagrams-friction-resolving-forces-and-revision-notes/), [practice questions](/resources/oxfordaqa-a-level-mathematics-statics-force-diagrams-friction-resolving-forces-and-practice/), the [M1 forces study guide](/resources/oxfordaqa-a-level-mathematics-forces-newtons-laws-connected-particles-momentum-and/), the [course hub](/boards/oxfordaqa/a-level/mathematics/), the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/) and the [free diagnostics](/diagnostics/).

## What you must be able to do

| Specification content | You must be able to |
|---|---|
| Force diagrams | Identify the forces present and label them clearly |
| Friction, limiting friction, F ≤ μR | Derive and work with inequalities from the relationship |
| Forces as vectors, resultants | Model forces as vectors; find the resultant of forces at a point; resolve forces |
| Equilibrium | Know the resultant is zero; find unknown forces on bodies at rest |

Throughout, g = 9.8 m s⁻², the value the specification gives for M1.3. Forces are in newtons (N).

## 1. Force diagrams and modelling

<!-- marlbridge-diagram:math-sub-428-free-body -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/mathematics/math-sub-428-free-body.svg" aria-label="Open full-size diagram: math-sub-428-free-body"><img src="/images/learning/mathematics/math-sub-428-free-body.svg" width="1528" height="940" alt="Free body diagram for a particle on an inclined plane, with correctly directed forces." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>Draw forces from the particle, not from the surroundings — Marlbridge Mathematics.</figcaption>
</figure>
<!-- /marlbridge-diagram:math-sub-428-free-body -->


Draw a large diagram before any algebra. Show only the forces acting on the body you are studying, as arrows from the particle.

| Force | Direction |
|---|---|
| Weight, W = mg | Vertically downwards |
| Normal reaction, R | Perpendicular to the contact surface, away from it |
| Tension, T | Along the string, pulling the particle towards the string |
| Thrust | Along a rod, pushing the particle away from the rod |
| Friction, F | Along the surface, opposing the sliding or the tendency to slide |
| Applied force | As described: label its size and its angle |

Do not draw components and the original force together without marking which is which. Either draw the force, or draw its components with the force crossed out.

The specification expects you to comment on modelling words. "Particle" means the size and rotation of the body are ignored. "Smooth" means there is no friction, so the only contact force is R. "Light" means the string or rod has no mass, so the tension is the same at both ends of a straight string. "Inextensible" means the string does not stretch.

A particle on a slope of angle α to the horizontal has these arrows:

```
weight mg      : straight down, from the particle
normal R       : at 90° to the slope, away from it
friction F     : along the slope, opposing the tendency to slide
pull or push   : along the slope, or at the stated angle
```

Mark the angle α between the slope and the horizontal, then check that the angle between the weight and the perpendicular to the slope is also α.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-mechanics--01-amth-forces-lift.webp" width="900" height="1010" alt="Free-body diagrams of a 65 kg person in a lift with g = 9.8. At rest R = 637 N; accelerating up at 0.8 m per second squared R = 689 N; accelerating down R = 585 N. Arrow lengths are proportional to the forces. A strip below shows the third-law pair: the floor pushes the person up with R and the person pushes the floor down with R, on different bodies." loading="lazy">
  <figcaption>The reaction R is larger than the weight when the lift accelerates upwards and smaller when it accelerates downwards; third-law pairs act on different bodies.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-mechanics--04-amth-forces-tow.webp" width="900" height="1010" alt="Whole system of 2000 kg: 3300 − 800 = 2000a gives a = 1.25 m per second squared. Trailer alone: T − 300 = 800 × 1.25 gives T = 1300 N. With a rigid bar and braking, the system slows at 1.15 m per second squared and the bar pushes back on the trailer with 620 N thrust (Cambridge 9709, OxfordAQA)." loading="lazy">
  <figcaption>Treat the whole system first, then one part to find the tow-bar force; a rigid bar can push (thrust).</figcaption>
</figure>


## 2. Forces as vectors

<!-- marlbridge-diagram:math-sub-428-vector-sum -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/mathematics/math-sub-428-vector-sum.svg" aria-label="Open full-size diagram: math-sub-428-vector-sum"><img src="/images/learning/mathematics/math-sub-428-vector-sum.svg" width="1528" height="940" alt="Component addition and resultant vector triangle for three forces." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>Find the resultant by summing perpendicular components — Marlbridge Mathematics.</figcaption>
</figure>
<!-- /marlbridge-diagram:math-sub-428-vector-sum -->


A force in two dimensions can be written as Xi + Yj, with i horizontal and j vertical (or any perpendicular pair). The **resultant** of several forces acting at a point is their vector sum: add the i-components, then add the j-components.

For a resultant Xi + Yj:

* magnitude = √(X² + Y²)
* direction: the acute angle with the i-axis is arctan(|Y|/|X|); say which axis and which way the angle is measured.

**Example 1.** Three forces act on a particle: F₁ = (6i − 2j) N, F₂ = (−i + 5j) N and F₃ = (−2i + 3j) N. Find the resultant, its magnitude and its direction.

```
R = (6 − 1 − 2)i + (−2 + 5 + 3)j = 3i + 6j
|R| = √(9 + 36) = √45 = 3√5 ≈ 6.71 N
angle with i: arctan(6/3) = arctan 2 = 63.4° above the i direction
```

If a fourth force F₄ makes the particle stay at rest, F₄ = −R = (−3i − 6j) N.

**Forces given by size and direction.** A force of magnitude F at angle θ to the i-axis has components F cos θ along i and F sin θ along j. Use the angle to whichever axis is given, and check the sign in each quadrant.

**Example 2.** Forces of 10 N at 0°, 14 N at 50° and 8 N at 130° act at a point, all angles measured anticlockwise from the positive x-axis. Find the resultant.

| Force | x-component | y-component |
|---|---|---|
| 10 N at 0° | 10 | 0 |
| 14 N at 50° | 14 cos 50° = 8.999 | 14 sin 50° = 10.725 |
| 8 N at 130° | 8 cos 130° = −5.142 | 8 sin 130° = 6.128 |
| Sum | 13.857 | 16.853 |

```
|R| = √(13.857² + 16.853²) = 21.8 N (3 s.f.)
angle = arctan(16.853 / 13.857) = 50.6° above the positive x-axis
```

## 3. Resolving and equilibrium

<!-- marlbridge-diagram:math-sub-428-equilibrium -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/mathematics/math-sub-428-equilibrium.svg" aria-label="Open full-size diagram: math-sub-428-equilibrium"><img src="/images/learning/mathematics/math-sub-428-equilibrium.svg" width="1528" height="940" alt="Free body diagram of a suspended particle between two inclined strings, with component-balance equations." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>Equilibrium requires a zero force sum on both axes — Marlbridge Mathematics.</figcaption>
</figure>
<!-- /marlbridge-diagram:math-sub-428-equilibrium -->


<!-- marlbridge-diagram:math-final-428-two-string-equilibrium -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/mathematics/math-final-428-two-string-equilibrium.svg" aria-label="Open full-size diagram: math-final-428-two-string-equilibrium"><img src="/images/learning/mathematics/math-final-428-two-string-equilibrium.svg" width="1528" height="940" alt="Force diagram of a 3 kg mass supported by angled strings, with component-balance equations and solved tensions." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>Force diagram of a 3 kg mass supported by angled strings, with component-balance equations and solved tensions.</figcaption>
</figure>
<!-- /marlbridge-diagram:math-final-428-two-string-equilibrium -->


A particle is in equilibrium when the resultant force on it is zero. In components, the forces sum to zero in every direction you choose. For a particle at rest, that is the whole of the condition.

**Method**

1. Draw the force diagram with every force labelled.
2. Choose two perpendicular directions. Pick them so that the most unknown forces lie along them.
3. Resolve in each direction: forces one way = forces the other way.
4. Solve the two equations.
5. Answer the question, with units and a sensible rounding.

On an incline of angle α, resolve along and perpendicular to the slope. The weight has component mg sin α down the slope and mg cos α into the slope.

**Example 3.** A 3 kg particle hangs from two light strings attached to a horizontal ceiling. The strings make 35° and 50° with the vertical, on opposite sides. Find the tensions T₁ and T₂.

<!-- marlbridge-diagram:math-b42-oxfordaqa-two-string-particle-equilibrium -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/mathematics/math-b42-oxfordaqa-two-string-particle-equilibrium.svg" aria-label="Open full-size diagram: math-b42-oxfordaqa-two-string-particle-equilibrium"><img src="/images/learning/mathematics/math-b42-oxfordaqa-two-string-particle-equilibrium.svg" width="1600" height="1050" alt="Three-kilogram particle in equilibrium on two strings" loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>Three-kilogram particle in equilibrium on two strings Select the image to enlarge it.</figcaption>
</figure>
<!-- /marlbridge-diagram:math-b42-oxfordaqa-two-string-particle-equilibrium -->


```
horizontal:  T₁ sin 35° = T₂ sin 50°
vertical:    T₁ cos 35° + T₂ cos 50° = 3 × 9.8 = 29.4
```

From the first equation T₂ = T₁ sin 35° / sin 50° = 0.7488 T₁. Substitute:

```
T₁ (cos 35° + 0.7488 cos 50°) = 29.4
T₁ (0.8192 + 0.4813) = 29.4
T₁ = 22.6 N,  T₂ = 16.9 N
```

**Example 4.** A 7 kg particle is held at rest on a smooth plane inclined at 34° by a horizontal force H. Find H and the normal reaction R.

Resolve along the slope (smooth, so no friction) and perpendicular to it.

```
along slope:       H cos 34° = 7g sin 34°   →  H = 7g tan 34° = 46.3 N
perpendicular:     R = 7g cos 34° + H sin 34°
                   R = 56.87 + 25.87 = 82.7 N
```

Check: R cos 34° = 68.6 = 7g, the weight, as the vertical resolution requires.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-mechanics--02-amth-forces-two-strings.webp" width="900" height="960" alt="A 5 kg particle hangs on two strings at 30 and 45 degrees to the horizontal. Solving the horizontal and vertical balances gives T1 = 35.9 N and T2 = 43.9 N. Drawn head to tail, W, T1 and T2 form a closed triangle, so the resultant is zero." loading="lazy">
  <figcaption>In equilibrium the forces sum to zero in every direction, so they close into a triangle.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-mechanics--03-amth-forces-pulley.webp" width="900" height="1210" alt="(Top) A 3 kg particle on a smooth table joined over a smooth pulley to a 2 kg hanging particle: T = 3a and 2g − T = 2a give a = 3.92 m per second squared, T = 11.8 N. (Bottom) 7 kg and 4 kg hanging masses: a = 3g/11 = 2.67 m per second squared, T = 49.9 N. Tension is the same on both sides." loading="lazy">
  <figcaption>Write one F = ma equation per particle; tension is the same each side of a smooth pulley.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-mechanics--06-amth-forces-rope-angle.webp" width="900" height="970" alt="A 12 kg box on rough ground (μ = 0.4) on the point of sliding. Pulled by a rope at 25 degrees above horizontal, T = 43.7 N and R = 99.1 N, less than the weight 117.6 N. Pushed at 25 degrees below horizontal, P = 63.8 N and R = 144.6 N, more than the weight. Dashed lines show components." loading="lazy">
  <figcaption>A pull at an angle lowers R and so the friction limit; a push at an angle raises it.</figcaption>
</figure>


## 4. Friction

<!-- marlbridge-diagram:math-sub-428-friction-range -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/mathematics/math-sub-428-friction-range.svg" aria-label="Open full-size diagram: math-sub-428-friction-range"><img src="/images/learning/mathematics/math-sub-428-friction-range.svg" width="1528" height="940" alt="Inclined particle free-body diagram and derivation of the admissible applied-force interval." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>Friction creates a range of possible equilibrium forces — Marlbridge Mathematics.</figcaption>
</figure>
<!-- /marlbridge-diagram:math-sub-428-friction-range -->


Friction acts along the surface and opposes the motion, or the tendency to move. Its size is limited:

**F ≤ μR**

where μ is the coefficient of friction. When F = μR the friction is **limiting**: the particle is on the point of slipping, but still in equilibrium. When the particle is at rest and F < μR, friction takes whatever value is needed, found by resolving. So there are three situations.

| Situation | What to use |
|---|---|
| At rest, not about to move | Resolve to find F, then check F ≤ μR |
| Limiting equilibrium (about to slip) | F = μR, and the direction of F opposes the slip |
| Finding a range of values | Write F ≤ μR with F from the resolving equation; solve the inequality |

**Example 5.** A crate of mass 11 kg is on rough horizontal ground with μ = 0.28. A rope pulls it at 32° above the horizontal and the crate is on the point of slipping. Find the tension T.

```
vertical:    R = 11g − T sin 32° = 107.8 − T sin 32°
horizontal:  T cos 32° = μR = 0.28 (107.8 − T sin 32°)
T (cos 32° + 0.28 sin 32°) = 30.184
T (0.8480 + 0.1484) = 30.184
T = 30.3 N
```

Then R = 107.8 − 30.29 sin 32° = 91.7 N and F = 25.7 N. Notice R is smaller than the weight: an upward pull reduces R, and so reduces the friction available.

**Example 6 (range of a force).** A 10 kg particle rests on a rough plane inclined at α with tan α = 3/4, so sin α = 3/5 and cos α = 4/5. The coefficient of friction is 0.5. A force P acts up the slope along the line of greatest slope. Find the values of P for which the particle stays at rest.

```
perpendicular:  R = 10g cos α = 78.4
maximum friction: μR = 0.5 × 78.4 = 39.2
component of weight down the slope: 10g sin α = 58.8
```

If P is small, the particle tends to slide down, so friction acts up the slope: P + F = 58.8 with F ≤ 39.2, giving P ≥ 19.6. If P is large, it tends to slide up, so friction acts down the slope: P = 58.8 + F with F ≤ 39.2, giving P ≤ 98.

**19.6 N ≤ P ≤ 98 N.**

**Deriving a condition.** With no other force, a particle on a rough slope at rest has F = mg sin α and R = mg cos α. The condition F ≤ μR gives mg sin α ≤ μ mg cos α, so **μ ≥ tan α**. For the plane in Example 6, a particle left alone would stay at rest only if μ ≥ 0.75. With μ = 0.5 it would not, so P ≥ 19.6 N is needed to hold it.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-mechanics--05-amth-forces-friction-model.webp" width="900" height="940" alt="Graph of friction against push for a 5 kg box with μ = 0.4 (R = 49 N, maximum friction 19.6 N). F equals P until P = 19.6 N, then stays at 19.6 N when the box slides. P = 15 N gives F = 15 N, not 19.6 N. Three mini diagrams show at rest, limiting and sliding (a = 1.08 m per second squared)." loading="lazy">
  <figcaption>Friction matches the push up to a maximum μR; only when on the point of moving or sliding is F = μR.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-mechanics--07-amth-forces-slope.webp" width="900" height="920" alt="A 4 kg block on a 30 degree rough slope with μ = 0.25. Weight 39.2 N splits into mg sin 30 = 19.6 N down the slope and mg cos 30 = 33.9 N into it, so R = 33.9 N and F = 8.49 N up the slope. 19.6 − 8.49 = 4a gives a = 2.78 m per second squared down the slope." loading="lazy">
  <figcaption>Resolve the weight along and across the slope: R = mg cos θ and the net force down the slope is mg sin θ − μR.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-mechanics--09-amth-forces-conical.webp" width="900" height="940" alt="A 0.4 kg bob on a 1.2 m string moves in a horizontal circle at 5 rad per second. T = mLω² = 12 N, cos θ = g/(Lω²) = 0.327 so θ = 70.9 degrees, r = 1.13 m, v = 5.67 m per second. Tension plus weight give a horizontal resultant 11.3 N to the centre; from above, v is tangent and a = 28.3 m per second squared points to the centre." loading="lazy">
  <figcaption>The resultant of tension and weight points to the centre of the circle and equals mrω².</figcaption>
</figure>


## Common errors

* Putting F = μR when the particle is not about to slip. Use F = μR only for limiting equilibrium. Otherwise F is found from the resolving equations.
* Taking R = mg on a slope, or when a rope or push has a vertical component. Always resolve perpendicular to the surface.
* Drawing friction in the wrong direction. Friction opposes the tendency to slide. For a range question, draw it both ways.
* Mixing sin and cos on an incline. The weight component along the slope is mg sin α, with α the angle of the slope to the horizontal.
* Giving a single value when the question asks for a range, or reversing an inequality when dividing by a negative.
* Writing a direction without a reference axis. "63.4°" alone is incomplete; say from which axis and which way.
* Using g = 9.8 for part of a question and 10 for the rest. Keep one value throughout.

## Next steps

Test yourself on the [practice questions](/resources/oxfordaqa-a-level-mathematics-statics-force-diagrams-friction-resolving-forces-and-practice/), then condense with the [revision notes](/resources/oxfordaqa-a-level-mathematics-statics-force-diagrams-friction-resolving-forces-and-revision-notes/). For friction on a sliding particle and Newton's laws, see the [M1 forces guide](/resources/oxfordaqa-a-level-mathematics-forces-newtons-laws-connected-particles-momentum-and/). Use the [diagnostics](/diagnostics/) to find weak spots, and tick off the topic on the [checklist](/checklists/oxfordaqa/a-level/mathematics/).

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, section M2.3 Statics and forces, published by OxfordAQA.
