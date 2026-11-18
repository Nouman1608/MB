---
title: "Cambridge A Level Physics (9702): Scalars and vectors"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Physical quantities and units"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 1.4
syllabusTopics:
  - qualification: "a-level"
    topic: "as-physical-quantities-and-units"
    subtopic: "as-scalars-and-vectors"
description: "Subtopic 1.4 of Cambridge AS Physics 9702 in depth: scalar and vector examples, adding and subtracting coplanar vectors, and resolving into perpendicular components."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **1.4 Scalars and vectors** of Cambridge International AS & A Level Physics 9702, 2025–2027 series. The [Physical Quantities, Units and Measurement study guide](/resources/as-physics-physical-quantities-units-and-measurement/) introduces vectors for the whole of Topic 1; this page goes further, with vector subtraction (change in velocity), a river crossing, the cosine rule for non-perpendicular forces and components on a slope. For quick recall use the [Scalars and vectors revision notes](/resources/cambridge-a-level-physics-9702-as-scalars-and-vectors-revision-notes/), and for exam-style questions the [Scalars and vectors practice questions](/resources/cambridge-a-level-physics-9702-as-scalars-and-vectors-practice/).

## Syllabus coverage

**CAMBRIDGE INTERNATIONAL AS & A LEVEL PHYSICS 9702 — AS Level, Topic 1.4**

Candidates should be able to:

1. understand the difference between scalar and vector quantities and give examples of scalar and vector quantities included in the syllabus;
2. add and subtract coplanar vectors;
3. represent a vector as two perpendicular components.

## Scalars and vectors in this syllabus

A **scalar** has magnitude only. A **vector** has magnitude and direction, and combines by the rules of vector addition rather than ordinary arithmetic.

| Scalars | Vectors |
|---|---|
| distance, speed, time | displacement, velocity, acceleration |
| mass, density | force (including weight), momentum |
| energy, work, power | electric field strength |
| pressure | gravitational field strength |
| temperature, charge, potential difference, resistance | |

Two cases catch students out. **Pressure** acts perpendicular to any surface it meets, but it is a scalar: at a point in a fluid it has no single direction. **Electric current** is given a direction around a circuit, yet it is treated as a scalar, because currents meeting at a junction add arithmetically, not as vectors.

**Coplanar** means the vectors lie in the same plane. All addition and subtraction at this level is in two dimensions.

## Adding vectors

Draw the vectors **tip to tail**; the resultant runs from the tail of the first to the tip of the last. Then choose a method:

- **Scale drawing**: accurate to a few per cent if drawn large with a sharp pencil.
- **Pythagoras and trigonometry**: when the two vectors are perpendicular.
- **Cosine rule**: when they are not perpendicular.
- **Components**: resolve every vector, add all the x-components and all the y-components, then recombine. This works for any number of vectors.

### Worked example 1: non-perpendicular forces (cosine rule)

Two tugs pull a ship with forces of 5.0 kN and 4.0 kN. The angle between the two ropes is 40°.

When the forces are drawn tip to tail, the angle inside the triangle opposite the resultant is 180° − 40° = 140°.

```
R^2 = 5.0^2 + 4.0^2 - 2(5.0)(4.0) cos 140
    = 25 + 16 + 30.6 = 71.6
R   = 8.5 kN
```

Check with components, taking x along the 5.0 kN force:

```
x: 5.0 + 4.0 cos 40 = 5.0 + 3.06 = 8.06 kN
y: 4.0 sin 40       = 2.57 kN
R = sqrt(8.06^2 + 2.57^2) = 8.5 kN
angle to the 5.0 kN force = tan^-1(2.57 / 8.06) = 18 degrees
```

Two methods giving the same answer is the best evidence you can offer.

### Worked example 2: crossing a river

A swimmer heads straight across a river at 2.4 m s⁻¹ relative to the water. The current flows at 1.0 m s⁻¹ parallel to the banks, and the river is 60 m wide.

```
resultant speed = sqrt(2.4^2 + 1.0^2) = 2.6 m s^-1
angle downstream from straight across = tan^-1(1.0 / 2.4) = 23 degrees
time to cross = 60 / 2.4 = 25 s
distance carried downstream = 1.0 x 25 = 25 m
```

The crossing time uses only the component across the river; the current does not slow the crossing, it only carries the swimmer downstream. Treating the two perpendicular components independently is the key idea.

## Subtracting vectors

To find **a − b**, add **a** and **−b**, where −b has the same magnitude as b but the opposite direction. The commonest use is a **change in velocity**, Δv = v − u.

### Worked example 3: a ball changing direction

A ball moving east at 4.0 m s⁻¹ is deflected and moves north at 3.0 m s⁻¹. Find the change in velocity.

```
delta v = v - u = (3.0 north) + (4.0 west)
|delta v| = sqrt(3.0^2 + 4.0^2) = 5.0 m s^-1
direction: tan^-1(3.0 / 4.0) = 37 degrees north of west
```

The speed fell from 4.0 to 3.0 m s⁻¹, yet the change in velocity is 5.0 m s⁻¹. Subtracting the magnitudes (4.0 − 3.0 = 1.0) is wrong, because the directions differ. In one dimension, the same idea is handled with signs: a ball hitting a wall at +6.0 m s⁻¹ and rebounding at −4.0 m s⁻¹ has Δv = −4.0 − 6.0 = −10.0 m s⁻¹.

## Resolving a vector into perpendicular components

A vector F at angle θ to a chosen axis has:

```
component along the axis         = F cos(theta)
component perpendicular to it    = F sin(theta)
```

The cosine always belongs to the component **adjacent to the angle you are given**, so always check which angle the question shows. Components are an alternative to the original vector, not extra forces: once you resolve, use the components or the original, never both.

### Worked example 4: a block on a slope

A 2.0 kg block rests on a ramp inclined at 25° to the horizontal.

```
W = mg = 2.0 x 9.81 = 19.6 N
along the slope:          W sin 25 = 19.6 x 0.423 = 8.3 N
perpendicular to slope:   W cos 25 = 19.6 x 0.906 = 17.8 N
```

The angle between the weight (vertical) and the normal to the slope equals the angle of the slope, so the component along the slope uses sin 25°. Choosing axes along and perpendicular to the slope makes the later dynamics and equilibrium problems far simpler.

### Worked example 5: launch velocity

A ball is kicked at 15 m s⁻¹ at 35° above the horizontal. Horizontal component 15 cos 35° = 12.3 m s⁻¹; vertical component 15 sin 35° = 8.6 m s⁻¹. These two components are what the kinematics topic treats separately.

## Common mistakes

- **Adding magnitudes of vectors that point in different directions.** 5.0 kN + 4.0 kN at 40° is 8.5 kN, not 9.0 kN.
- **Using the 40° between the ropes in the cosine rule.** The angle in the triangle is 140°; with the "plus" form of the rule, R² = a² + b² + 2ab cos θ uses the 40°.
- **Swapping sin and cos** when the angle is measured from the vertical rather than the horizontal.
- **Subtracting speeds to find a change in velocity.**
- **Giving a vector answer without a direction.**
- **Calling pressure a vector because it "pushes on a surface".**

## Exam technique for the command words

- **State** whether a quantity is a vector: one word, with a reason only if asked.
- **Calculate** or **determine** a resultant: give magnitude **and** direction, with the direction measured from a stated reference.
- **Sketch** or **draw** a vector diagram: arrows tip to tail, labelled, resultant shown with a double arrowhead or clearly marked.
- **Show that** a component has a given value: write the trigonometric expression before the number.

## Frequently asked questions

**Is pressure a vector or a scalar?**
A scalar. It produces a force perpendicular to a surface, but pressure itself has no direction.

**How do I subtract two vectors?**
Reverse the vector being subtracted and add it tip to tail to the other.

**When should I use the cosine rule rather than components?**
Either works for two vectors; components are better for three or more, and give the direction directly.

## Related resources

- [Scalars and vectors revision notes](/resources/cambridge-a-level-physics-9702-as-scalars-and-vectors-revision-notes/)
- [Scalars and vectors practice questions](/resources/cambridge-a-level-physics-9702-as-scalars-and-vectors-practice/)
- [Errors and uncertainties study guide](/resources/cambridge-a-level-physics-9702-as-errors-and-uncertainties/) — the previous subtopic
- [Equilibrium of forces study guide](/resources/cambridge-a-level-physics-9702-as-equilibrium-of-forces/) — vector triangles for forces in equilibrium

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
