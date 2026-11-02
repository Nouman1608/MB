---
title: "OxfordAQA IGCSE Physics: Forces and Their Effects — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["igcse"]
topic: "Forces and their effects"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9203"]
syllabusSeries: "For exams May/June 2018 onwards"
order: 1
syllabusTopics:
  - qualification: "igcse"
    topic: "forces-and-their-effects-oxfordaqa-igcse"
description: "Condensed recall notes on forces, motion graphs, Newton laws, momentum, moments and Hooke law for International GCSE Physics."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Forces and Their Effects study guide](/resources/igcse-oxfordaqa-physics-forces-and-their-effects/).

## Motion

```
speed = distance / time        acceleration = (v - u) / t
```

(The equation sheet for this specification has no symbol for initial
velocity and no uniform-acceleration ("SUVAT") equation -- work
acceleration out from the gradient of a velocity-time graph instead.)

**Distance–time graph:** gradient = speed.
**Velocity–time graph:** gradient = **acceleration**, area = **distance**.

Reading area as gradient is the most common error on this topic.

**Scalars** (distance, speed, mass, energy) have magnitude only; **vectors** (displacement, velocity, force, momentum) have direction too.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-oxfordaqa-physics-forces-and-their-effects--04-scalar-vector.webp" width="900" height="960" alt="A walk of 6 m east then 2 m west on a number line from 0 to 8 m. The distance travelled is 6 plus 2, 8 m, a scalar with no direction. The displacement is an arrow from the start to the end point, 4 m east, a vector. Below, scalars are mass, speed, distance and energy; vectors, drawn with arrows, are force, velocity, displacement and acceleration." loading="lazy">
  <figcaption>Distance versus displacement for a 6 m east, 2 m west walk, with scalar and vector examples from the lesson.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-physics-forces-hookes-law-vectors-and-distance-time-motion--11-fo-walker-distance-displacement.webp" width="900" height="830" alt="A walker goes 60 m east then 20 m west in 40 s. Distance is 80 m (scalar), average speed 2.0 m/s. Displacement is 40 m east (vector), average velocity 1.0 m/s east." loading="lazy">
  <figcaption>The same walk gives a distance of 80 m but a displacement of 40 m east.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-physics-forces-hookes-law-vectors-and-distance-time-motion--09-cyclist-average-speed.webp" width="900" height="960" alt="Distance-time graph for the cyclist: 5.0 m/s for 10 s, rest for 15 s, then 4.5 m/s for 20 s. A dashed line from the origin to (45 s, 140 m) has gradient 3.1 m/s, the average speed." loading="lazy">
  <figcaption>Average speed is total distance over total time, and the rest counts as time.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-physics-resultant-forces-acceleration-and-newtons-laws--02-cyclist-velocity-time.webp" width="900" height="920" alt="Velocity-time graph: 0 to 12 m/s in 6 s, constant 12 m/s for 8 s, then down to 0 in 6 s. Gradients are 2.0, 0 and minus 2.0 m/s squared; areas 36, 96 and 36 m; total 168 m and average speed 8.4 m/s." loading="lazy">
  <figcaption>Gradients and areas of the cyclist graph give 168 m and 8.4 m/s.</figcaption>
</figure>


## Forces

**Newton's laws:** constant velocity without a resultant force; `F = ma`; equal and opposite forces on **different** bodies.

**Resultant force** determines the motion. Balanced forces mean constant velocity — which includes being at rest, but also includes moving steadily. Forces along the same line combine algebraically: 8 N right and 3 N left give a resultant of 5 N right.

**Third-law pairs** are equal, opposite, the **same type of force**, and act on **two different bodies** — never on the same object. A book resting on a table has its weight balanced by the table's normal contact force, but those two forces act on the *same* object (the book), so they are a first-law balance, not a third-law pair.

**Worked example.** A 1200 kg car accelerates from rest to 24 m/s in 8.0 s. Find the driving force if drag is 400 N.

```
a = (v - u) / t = (24 - 0) / 8.0 = 3.0 m/s^2
F(resultant) = m a = 1200 x 3.0 = 3600 N
Driving force = resultant + drag = 3600 + 400 = 4000 N
```

The driving force is **not** the resultant — the resultant is what remains once drag has been subtracted. If the car instead moved at a constant 24 m/s, the resultant would be zero and driving force would exactly equal drag, 400 N.

**Terminal velocity**, in order:

1. Weight acts downwards, so the object accelerates.
2. Air resistance **increases with speed**.
3. When air resistance **equals** weight, resultant force is zero.
4. Acceleration is zero, so velocity is **constant** — the object still moves.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-physics-forces-revision-notes--03-driving-force-not-resultant.webp" width="900" height="940" alt="A 1200 kg car speeds up from rest to 24 m/s in 8.0 s against 400 N drag: a = 3.0 m/s2, resultant 3600 N, driving force 4000 N. Arrows and a bar are to the same scale. At steady speed the resultant is zero and the driving force equals the 400 N drag." loading="lazy">
  <figcaption>The driving force is the resultant plus drag, and only equals drag at constant velocity.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-physics-forces-revision-notes--04-third-law-pair-vs-balance.webp" width="900" height="940" alt="A free-body diagram of a book shows weight and normal contact force on the same object, a first-law balance. A second panel shows the real third-law pair: the table pushes the book up and the book pushes the table down, equal, opposite, same type, on different objects. The weight’s partner is the book pulling the Earth up." loading="lazy">
  <figcaption>Weight and normal contact force act on one object, so they are not a third-law pair.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-physics-forces-revision-notes--05-terminal-velocity-stages.webp" width="900" height="1230" alt="A speed-time graph for a skydiver of weight 800 N rises and levels at about 50 m/s. Four marked moments show weight and air resistance arrows to the same scale: drag grows from zero until it equals the weight, acceleration falls to zero and the speed becomes constant." loading="lazy">
  <figcaption>Air resistance grows with speed until it equals weight; the skydiver then falls at constant velocity.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-physics-resultant-forces-acceleration-and-newtons-laws--03-sledge-resultant-450-180-70.webp" width="900" height="840" alt="Force arrows to scale show a 450 N forward pull and backward friction of 180 N and wind of 70 N on a sledge. A bar splits the 450 N into 180 N, 70 N and 200 N left over. The resultant is 200 N forwards." loading="lazy">
  <figcaption>Forwards positive: 450 − 180 − 70 = 200 N forwards.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-physics-momentum-collisions-and-safety-in-road-transport--03-steady-speed-balanced-forces.webp" width="900" height="640" alt="A car at steady speed has a 1800 N driving force forward and 1800 N of resistive forces backward, drawn with equal arrow lengths. The resultant force is zero." loading="lazy">
  <figcaption>At a steady speed the driving force equals the resistive forces.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-physics-resultant-forces-acceleration-and-newtons-laws--01-first-law-balanced-forces.webp" width="900" height="1060" alt="A car at a steady 20 m/s has equal and opposite driving and resistive forces, so the resultant is zero. A bus drawn twice shows the passenger keeping the old velocity when the bus brakes, until a seat belt pushes. The passenger leans forward because nothing slows them." loading="lazy">
  <figcaption>Zero resultant force means constant velocity; a braking bus does not slow an unrestrained passenger.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-physics-terminal-velocity-centre-of-mass-moments-and-levers--01-parachute-velocity-time.webp" width="900" height="1320" alt="A speed-time graph in four stages: speed rises and flattens, holds at a first terminal speed, drops steeply when the parachute opens, then holds at a much lower terminal speed. Force arrows show drag below, equal to, then much greater than, then equal to weight." loading="lazy">
  <figcaption>Opening a parachute gives a second, much lower terminal speed.</figcaption>
</figure>


## Momentum and safety

```
p = mv        F = (mv - mu) / t
```

Momentum is conserved in a closed system and is a **vector**, so opposite directions must be assigned opposite signs.

**Crumple zones, airbags and seatbelts all work identically:** they **increase the time** over which momentum changes, so the force is reduced. The momentum change itself is fixed by the collision — only the time can be altered.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-physics-momentum-collisions-and-safety-in-road-transport--01-bounce-collision.webp" width="900" height="1130" alt="Trolley A (0.60 kg, right at 1.8 m/s) and trolley B (0.80 kg, left at 0.40 m/s) have momenta +1.08 and -0.32, total +0.76 kg m/s. After the bounce A moves left at 0.20 m/s (-0.12) and B moves right at 1.1 m/s (+0.88). The total is unchanged and B has reversed direction." loading="lazy">
  <figcaption>Two trolleys bounce apart and the momentum bars before and after both total +0.76 kg m/s.</figcaption>
</figure>


## Stopping distance

```
stopping = thinking + braking
```

Thinking distance rises with speed, tiredness, alcohol and distraction. Braking distance rises with speed, worn tyres and wet or icy roads.

**Braking distance increases with the square of speed**, because kinetic energy is proportional to v². Doubling speed quadruples braking distance.

## Moments and stability

```
moment = force x perpendicular distance from pivot
```

**Principle of moments:** in equilibrium, clockwise moments equal anticlockwise moments.

An object **topples when the line of action of its weight falls outside its base**. Stability improves with a lower centre of mass and a wider base.

## Hooke's law

```
F = k x
```

Valid **up to the limit of proportionality**. Beyond the elastic limit, deformation is permanent.

Elastic potential energy stored = **area under the force–extension graph** = ½Fx for a linear region.

## Exam traps

- Confusing gradient and area on a velocity–time graph.
- Saying an object stops at terminal velocity.
- Treating braking distance as proportional to speed.
- Omitting "perpendicular" from the moment definition.
- Saying an airbag absorbs the force.
- Saying balanced forces mean the object is stationary.
- Treating the driving force as if it were the resultant force.
- Naming weight and normal contact force on a resting object as a third-law pair — they act on the same object, so they cannot be.

## Self-test

1. What do gradient and area give on a velocity–time graph?
2. Explain terminal velocity in four steps.
3. Why does braking distance rise so steeply with speed?
4. How does a seatbelt reduce injury?
5. When does an object topple?
6. A 1200 kg car accelerates from rest to 24 m/s in 8.0 s against 400 N of drag. Find the driving force.
7. Why are weight and normal contact force on a book resting on a table not a third-law pair?

**Answers:** 1. Gradient is acceleration; area is distance travelled. 2. Weight causes acceleration; air resistance increases with speed; when air resistance equals weight the resultant force is zero; acceleration becomes zero so velocity is constant. 3. Braking distance depends on kinetic energy, which is proportional to v², so doubling speed quadruples it. 4. It increases the time over which the passenger's momentum changes, reducing the force since force is rate of change of momentum. 5. When the line of action of its weight falls outside the base of support. 6. a = (24 − 0) ÷ 8.0 = 3.0 m/s²; resultant F = ma = 1200 × 3.0 = 3600 N; driving force = 3600 + 400 = 4000 N. 7. They act on the **same object** (the book) — a third-law pair must act on two different bodies, so this is a first-law balance instead.
