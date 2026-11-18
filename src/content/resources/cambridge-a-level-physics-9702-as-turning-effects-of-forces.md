---
title: "Cambridge A Level Physics (9702): Turning effects of forces"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Forces, density and pressure"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 4.1
syllabusTopics:
  - qualification: "a-level"
    topic: "as-forces-density-and-pressure"
    subtopic: "as-turning-effects-of-forces"
description: "Subtopic 4.1 of Cambridge AS Physics 9702 in depth: centre of gravity, the moment of a force at an angle, couples and the torque of a couple, with worked examples."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **4.1 Turning effects of forces** of Cambridge International AS & A Level Physics 9702, 2025–2027 series. The [Forces, Density and Pressure study guide](/resources/as-physics-forces-density-and-pressure/) defines moments and couples for the whole of Topic 4; this page goes further, with forces at an angle, the torque of a couple about different points, locating the centre of gravity of a non-uniform object, and toppling. For quick recall use the [Turning effects of forces revision notes](/resources/cambridge-a-level-physics-9702-as-turning-effects-of-forces-revision-notes/), and for exam-style questions the [Turning effects of forces practice questions](/resources/cambridge-a-level-physics-9702-as-turning-effects-of-forces-practice/).

## Syllabus coverage

**CAMBRIDGE INTERNATIONAL AS & A LEVEL PHYSICS 9702 — AS Level, Topic 4.1**

Candidates should be able to:

1. understand that the weight of an object may be taken as acting at a single point known as its centre of gravity;
2. define and apply the moment of a force;
3. understand that a couple is a pair of forces that acts to produce rotation only;
4. define and apply the torque of a couple.

The principle of moments, used to solve balance problems, belongs to subtopic 4.2 and is covered in the [Equilibrium of forces study guide](/resources/cambridge-a-level-physics-9702-as-equilibrium-of-forces/).

## Centre of gravity

Every particle of an object is pulled by gravity. The **centre of gravity** is the single point at which the whole weight of the object may be taken to act, so the many small forces can be replaced by one force, mg, at one point.

- For a **uniform** object with a simple shape (a rod, a rectangular plate, a sphere), the centre of gravity is at the geometric centre.
- For a **non-uniform** object it is nearer the heavier end, and must be found by experiment or by calculation.
- The centre of gravity need not lie within the material: for a ring or an L-shaped bracket it can be in empty space.

Replacing the distributed weight by one force at the centre of gravity is what lets you include an object's own weight in a moments calculation.

## The moment of a force

**Definition:** the moment of a force about a point is the product of the force and the **perpendicular distance from the point to the line of action of the force**.

```
moment = F x d      (d perpendicular to the line of action)      unit: N m
```

The word "perpendicular" is where marks are won or lost. If the force is not at right angles to the lever, either find the perpendicular distance or use the component of the force perpendicular to the lever; both give the same answer.

### Worked example 1: a force at an angle

A door is pushed with a force of 30 N at a point 0.80 m from the hinge. The force makes an angle of 60° with the door.

```
method 1: perpendicular distance from hinge to line of action
   d = 0.80 sin 60 = 0.693 m
   moment = 30 x 0.693 = 20.8 N m

method 2: component of force perpendicular to the door
   F_perp = 30 sin 60 = 26.0 N
   moment = 26.0 x 0.80 = 20.8 N m
```

Pushing at right angles to the door would give 30 × 0.80 = 24 N m, the largest possible moment for this force at this point. Pushing along the door, towards the hinge, gives zero moment because the line of action passes through the hinge.

### Clockwise and anticlockwise

A moment has a sense of rotation. When several forces act, find each moment separately, label it clockwise or anticlockwise, and combine them with signs. The moment of a force whose line of action passes through the chosen point is zero, which is why choosing that point removes an unknown force from the calculation.

### Worked example 2: locating a centre of gravity

A non-uniform pole of length 3.0 m and weight 90 N rests horizontally on two supports, one at each end. The supports push up with 60 N at end A and 30 N at end B. Where is the centre of gravity?

The pole is in equilibrium, so the moments about A balance. The 60 N force at A has no moment about A.

```
anticlockwise moment of support B about A = 30 x 3.0 = 90 N m
clockwise moment of the weight about A    = 90 x x
90 x = 90   ->   x = 1.0 m from end A
```

The centre of gravity is nearer A, which is why support A carries the larger force.

## Couples and torque

A **couple** is a pair of forces that are **equal in magnitude, opposite in direction and parallel, with lines of action that do not coincide**. Because the forces are equal and opposite, the resultant force is zero, so the couple produces no change in linear motion. Because their lines of action are separated, they produce a turning effect: **rotation only**.

**Torque of a couple:** one of the forces multiplied by the **perpendicular distance between the lines of action** of the two forces.

```
torque = F x d      unit: N m
```

### Worked example 3: a steering wheel

A driver turns a steering wheel of diameter 0.38 m by applying equal and opposite tangential forces of 20 N with each hand, at opposite ends of a diameter.

```
torque = F x d = 20 x 0.38 = 7.6 N m
```

Check by taking moments about the centre: each force has a moment of 20 × 0.19 = 3.8 N m in the same sense, giving 7.6 N m. About one hand, that hand's force has zero moment and the other gives 20 × 0.38 = 7.6 N m. The torque of a couple is the **same about every point**, which is why it is defined without naming a pivot. A single force has a moment that depends on the point chosen; a couple does not.

**Single force versus couple.** A single force applied to a spanner on a nut produces a turning effect and also pushes the nut sideways (the bolt supplies the balancing force). Two equal and opposite forces on a double-ended tap key produce turning only.

## Toppling

An object resting on a base is stable while the vertical line through its centre of gravity falls **within** the base: the weight then has a moment about the tipping edge that turns the object back. If the object is tilted until that line passes outside the base, the weight's moment acts the other way and the object topples.

A box with a base 0.40 m wide and its centre of gravity 0.50 m above the base, centrally placed, is on the point of toppling when the centre of gravity is directly above the edge:

```
tan(theta) = (half base width) / (height of centre of gravity) = 0.20 / 0.50
theta = 22 degrees
```

A lower centre of gravity or a wider base increases this angle, making the object more stable.

## Common mistakes

- **Using the distance along the lever instead of the perpendicular distance** when the force is at an angle.
- **Defining moment as "force × distance"** without "perpendicular" and "line of action".
- **Calculating the torque of a couple as 2Fd**, using the full separation for both forces.
- **Describing a couple as "two equal and opposite forces"** without "parallel" and "lines of action not coinciding".
- **Forgetting the object's own weight**, acting at its centre of gravity.

## Exam technique for the command words

- **Define** the moment of a force or the torque of a couple: use every key word (product, perpendicular distance, line of action, point or pivot).
- **Calculate** a moment: draw or describe the perpendicular distance before substituting.
- **Explain** why a couple produces rotation only: zero resultant force, so no linear acceleration; non-zero resultant moment, so angular acceleration (rotation starts or changes).
- **State** the position of a centre of gravity: refer to uniformity or symmetry.

## Frequently asked questions

**What is the difference between a moment and a torque?**
Both measure turning effect in N m. A moment is of a single force about a point; the torque of a couple is one force times the perpendicular separation of the pair, and is the same about any point.

**Can the centre of gravity be outside an object?**
Yes. For a ring or a horseshoe shape it lies in the empty space.

**Why does a couple not make an object accelerate in a straight line?**
Its two forces are equal and opposite, so the resultant force is zero.

## Related resources

- [Turning effects of forces revision notes](/resources/cambridge-a-level-physics-9702-as-turning-effects-of-forces-revision-notes/)
- [Turning effects of forces practice questions](/resources/cambridge-a-level-physics-9702-as-turning-effects-of-forces-practice/)
- [Equilibrium of forces study guide](/resources/cambridge-a-level-physics-9702-as-equilibrium-of-forces/) — the principle of moments
- [Scalars and vectors study guide](/resources/cambridge-a-level-physics-9702-as-scalars-and-vectors/) — resolving a force into components

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
