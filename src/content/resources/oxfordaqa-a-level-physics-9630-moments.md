---
title: "OxfordAQA A-Level Physics (9630): Moments"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.2 – Mechanics and Materials"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
stage: "AS"
order: 2.2
syllabusTopics:
  - qualification: "a-level"
    topic: "mechanics-and-materials-oxfordaqa-alevel"
    subtopic: "moments-oxfordaqa-alevel"
description: "OxfordAQA 9630 subtopic 3.2.2 in depth: moments with perpendicular distances, couples, the principle of moments, hinged beams and finding a centre of mass."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to iftikhar-azeemi (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into **3.2.2 Moments** in Section 3.2 Mechanics and materials of the OxfordAQA International AS and A-level Physics (9630) specification. It is International AS content, assessed in Unit 1. Moments questions reward one habit above all: choosing the right pivot so that an unknown force disappears from the equation.

When you have read the guide, condense it with the [moments revision notes](/resources/oxfordaqa-a-level-physics-9630-moments-revision-notes/) and test yourself with the [moments practice questions](/resources/oxfordaqa-a-level-physics-9630-moments-practice/). For vectors and moments together, see the [vectors, equilibrium of forces and moments study guide](/resources/oxfordaqa-a-level-physics-vectors-equilibrium-of-forces-and-moments/).

## What the specification asks for

- moment of a force about a point, defined as force × perpendicular distance from the point to the line of action of the force
- a couple as a pair of equal and opposite coplanar forces
- moment of a couple, defined as force × perpendicular distance between the lines of action of the forces
- the principle of moments
- centre of mass, including knowing that the centre of mass of a uniform regular solid is at its centre.

## The moment of a force

**Moment = F × d**, where d is the **perpendicular** distance from the pivot to the **line of action** of the force. The unit is the newton metre, N m. (Do not write it as J: a moment is not energy, even though the base units match.)

The line of action is the force arrow extended in both directions. If the force is not at right angles to the lever, either:

- multiply F by the perpendicular distance to its line of action, or
- resolve F and use only the component perpendicular to the lever.

Both give the same answer.

### Worked example 1: a push at an angle

**Question.** A person pushes a door with a force of 30 N at a point 0.80 m from the hinge. The force makes an angle of 60° with the plane of the door. Find the moment about the hinge.

**Method.**

1. Perpendicular distance from the hinge to the line of action = 0.80 sin 60° = 0.693 m.
2. Moment = 30 × 0.693 = **21 N m**.
3. Check by components: perpendicular component = 30 sin 60° = 26.0 N; 26.0 × 0.80 = 21 N m.

**Comment.** A push along the plane of the door (angle 0°) has a line of action through the hinge, so its moment is zero, however large the force.

## Couples

A **couple** is two forces that are equal in size, opposite in direction and parallel, but not acting along the same line. Because the forces cancel, a couple gives no resultant force, so it causes rotation without any acceleration of the centre of mass.

**Moment of a couple = F × d**, where d is the perpendicular distance **between the two lines of action**. Its value is the same about any point.

**Example.** Turning a tap handle with forces of 25 N on each side, with lines of action 0.080 m apart: moment = 25 × 0.080 = **2.0 N m**. Note that this is F × d, not 2 × F × d: the factor of 2 is already included because d is the full separation, not the distance from the centre to one force.

## The principle of moments

For an object in equilibrium, the **sum of the clockwise moments about any point equals the sum of the anticlockwise moments about that point**.

An extended object is in equilibrium only when **both** conditions hold:

1. the resultant force is zero (from 3.2.1)
2. the resultant moment about any point is zero.

The phrase "about any point" is the key to solving problems. Take moments about the point where an unknown force acts: that force has zero moment there and drops out.

### Worked example 2: a wheelbarrow

**Question.** A wheelbarrow and its load have a combined weight of 600 N, acting 0.40 m horizontally from the wheel's axle. The handles are 1.4 m horizontally from the axle. Find the vertical force needed at the handles to hold it level.

**Method.** Take moments about the axle, so the unknown force at the wheel disappears.

1. Clockwise moment of the weight = 600 × 0.40 = 240 N m.
2. Anticlockwise moment of the lifting force = F × 1.4.
3. F = 240 ÷ 1.4 = **170 N** (171 N).

**Comment.** The lifting force is less than the weight because it acts further from the pivot. The upward force from the ground on the wheel is 600 − 171 = 429 N, from the force condition.

### Worked example 3: a hinged beam held by a cable

**Question.** A uniform beam of mass 12 kg and length 2.0 m is hinged to a wall at one end and held horizontal by a cable fixed to its other end. The cable makes 30° with the beam. A lamp of weight 40 N hangs from the free end. Find the cable tension and the force from the hinge. Take g = 9.81 N kg⁻¹.

**Method.**

1. Weight of beam = 12 × 9.81 = 117.7 N, acting at its centre, 1.0 m from the hinge (uniform beam).
2. Moments about the hinge (the hinge force drops out):
   - clockwise: 117.7 × 1.0 + 40 × 2.0 = 197.7 N m
   - anticlockwise: vertical component of tension × 2.0 = T sin 30° × 2.0 = 1.0T
   - so T = **198 N**.
3. Hinge force, from the force condition:
   - horizontal: H = T cos 30° = 171 N, pushing away from the wall
   - vertical: V = 117.7 + 40 − T sin 30° = 157.7 − 98.9 = 58.9 N, upwards
   - magnitude = √(171² + 58.9²) = **181 N**.

**Comment.** The cable tension is far larger than the total weight of 158 N. A shallow cable has a small vertical component, so it needs a large tension to supply the moment.

## Centre of mass

The **centre of mass** is the single point at which the whole mass of an object can be taken to act. For moments, the weight acts at the centre of mass.

- For a **uniform regular solid** (rod, cuboid, sphere, cylinder) it is at the geometric centre.
- For a non-uniform object it lies closer to the heavier end and must be found by experiment or by moments.
- An object hanging freely comes to rest with its centre of mass directly below the point of suspension.
- A standing object topples once the line of action of its weight passes outside its base, because the weight then has a moment that rotates it further over.

### Worked example 4: locating the centre of mass

**Question.** A non-uniform plank 3.0 m long rests on two bathroom scales, one at each end. The left scale reads 110 N and the right reads 70 N. Find the weight of the plank and the position of its centre of mass.

**Method.**

1. Force condition: weight = 110 + 70 = **180 N**.
2. Moments about the left end: 180 × x = 70 × 3.0, so x = **1.17 m from the left end**.
3. Check: the larger reading is on the left, so the centre of mass should be left of centre (1.5 m). It is.

## Common mistakes

- Using the distance along the lever instead of the perpendicular distance to the line of action.
- Writing the unit as J, or as N m⁻¹.
- Doubling the moment of a couple: it is F × (separation), not 2F × (separation).
- Placing the weight of a uniform beam at one end instead of at its centre.
- Taking moments about a point where two unknowns both have non-zero moments.
- Forgetting the weight of the beam itself when a load is also present.

## Exam technique for OxfordAQA command words

- **Define** the moment of a force: force multiplied by the perpendicular distance from the point to the line of action of the force. "Force × distance" alone is not enough.
- **State** the principle of moments in full, including "in equilibrium" and "about any point".
- **Calculate**: say which point you take moments about, list clockwise and anticlockwise moments separately, then equate.
- **Explain** why an object topples or balances by referring to the line of action of the weight relative to the base or pivot.
- **Describe** an experiment to find a centre of mass: suspend the object from two points in turn, marking the vertical below each with a plumb line; the centre of mass lies where the lines cross.

## Where this subtopic leads

Moments complete the conditions for equilibrium started in 3.2.1, and in 3.2.5 Newton's first law links zero resultant force to an unchanging velocity. Revisit the [scalars and vectors study guide](/resources/oxfordaqa-a-level-physics-9630-scalars-and-vectors-oxfordaqa/), then continue to the [motion along a straight line study guide](/resources/oxfordaqa-a-level-physics-9630-motion-along-a-straight-line-oxfordaqa/).
