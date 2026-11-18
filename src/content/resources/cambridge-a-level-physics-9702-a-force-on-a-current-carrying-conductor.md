---
title: "Cambridge A Level Physics (9702): Force on a current-carrying conductor"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Magnetic fields"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 20.2
syllabusTopics:
  - qualification: "a-level"
    topic: "a-magnetic-fields"
    subtopic: "a-force-on-a-current-carrying-conductor"
description: "A focused guide to 20.2 Force on a current-carrying conductor in Cambridge A Level Physics 9702: F = BIL sin θ, Fleming's left-hand rule and defining the tesla."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **20.2 Force on a current-carrying conductor** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (A Level). The broader [Magnetic Fields study guide](/resources/a-physics-magnetic-fields/) introduces the whole of Topic 20 and states F = BIL sin θ; this page goes further into the 20.2 outcomes alone: why the force arises, how to apply Fleming's left-hand rule in three dimensions, what the angle θ really is, how the definition of magnetic flux density leads to the tesla, and how a balance can be used to measure B. For quick recall use the [Force on a current-carrying conductor revision notes](/resources/cambridge-a-level-physics-9702-a-force-on-a-current-carrying-conductor-revision-notes/), and for exam-style questions the [Force on a current-carrying conductor practice questions](/resources/cambridge-a-level-physics-9702-a-force-on-a-current-carrying-conductor-practice/).

## What 20.2 asks you to do

The syllabus lists three outcomes. Candidates should be able to:

- **understand that a force might act on a current-carrying conductor placed in a magnetic field**
- **recall and use the equation F = BIL sin θ, with directions as interpreted by Fleming's left-hand rule**
- **define magnetic flux density as the force acting per unit current per unit length on a wire placed at right-angles to the magnetic field**

Notice the word "might" in the first outcome. A current-carrying wire in a magnetic field does not always feel a force: if the current is parallel to the field, the force is zero.

## Why a force acts

A current is a flow of charge, and a moving charge produces its own magnetic field (20.1). Place a wire carrying a current in an external field and the two fields combine. On one side of the wire they are in the same direction and reinforce; on the other side they are opposed and partly cancel. The resultant pattern is sometimes called a **catapult field**: the lines are crowded on one side and sparse on the other, and the wire is pushed from the stronger-field side towards the weaker-field side.

At a deeper level, the force on the wire is the sum of the forces on all the moving charge carriers inside it (20.3). The carriers are pushed sideways, and they pass the push on to the lattice of the wire, so the whole wire moves.

## The equation and the meaning of θ

```
F = BIL sin θ
```

- B is the magnetic flux density (T).
- I is the current (A).
- L is the length of wire **inside the field** (m), not the whole length of the wire.
- θ is the angle **between the current direction and the field direction**.

Two ways to think about sin θ:

1. **Component of the field.** Only the component of B at right angles to the wire, B sin θ, produces a force. The component along the wire does nothing.
2. **Component of the wire.** Equivalently, only the length of wire at right angles to the field, L sin θ, counts.

| θ | sin θ | Force |
|---|---|---|
| 0° (current along the field) | 0 | zero |
| 30° | 0.50 | half the maximum |
| 90° (current perpendicular to field) | 1 | maximum, BIL |
| 180° (current opposite to the field) | 0 | zero |

The force is always at right angles to **both** the current and the field. It is never along either of them.

## Fleming's left-hand rule

Hold the thumb and first two fingers of the **left** hand mutually at right angles:

- **First finger**: field (N to S).
- **seCond finger**: conventional current (+ to −).
- **thuMb**: force (motion).

Apply it to the component of the field perpendicular to the wire. Two quick checks with page conventions:

- Current to the right, field **into** the page: force **up** the page.
- Current to the right, field **out of** the page: force **down** the page.

Reversing either the current or the field reverses the force; reversing both leaves it unchanged. Because the rule uses conventional current, a flow of electrons to the right counts as a current to the left.

## Defining magnetic flux density

Rearranging F = BIL for a wire at right angles to the field:

```
B = F / (IL)
```

The syllabus definition is: **magnetic flux density is the force acting per unit current per unit length on a wire placed at right angles to the magnetic field.** All three parts matter: "force", "per unit current per unit length", and "at right angles". Leaving out the angle condition is the most common way to lose the mark.

The unit is the **tesla** (T). One tesla is the flux density when a wire carrying 1 A at right angles to the field feels a force of 1 N on each metre of its length:

```
1 T = 1 N A⁻¹ m⁻¹
```

In SI base units, N = kg m s⁻², so 1 T = kg m s⁻² ÷ (A m) = **kg s⁻² A⁻¹**. Expressing the tesla in base units is a short, frequently set question.

## Worked example 1: measuring B with a balance

A U-shaped magnet sits on a top-pan balance. A straight horizontal wire is clamped so that 5.0 cm of it lies between the poles, at right angles to the field, without touching the magnet. When a current of 3.0 A flows, the balance reading increases by 2.4 g. Determine the flux density, and state the direction of the force on the wire.

```
Extra force on the magnet = Δm g = 2.4 × 10⁻³ × 9.81 = 0.0235 N
By Newton's third law, the force on the wire is also 0.0235 N
B = F / (IL) = 0.0235 / (3.0 × 0.050) = 0.16 T
```

*Annotation.* The reading **increases**, so the wire pushes the magnet **down**; by Newton's third law the magnet pushes the wire **up**. This set-up is a good way to determine B: repeat for several currents and plot F against I. The gradient is BL, so B = gradient ÷ L. A straight line through the origin also confirms that F ∝ I.

## Worked example 2: a wire at an angle

A straight wire of length 0.25 m carries 2.0 A in a uniform field of 0.040 T. The wire makes an angle of 30° with the field. Calculate the force.

```
F = BIL sin θ = 0.040 × 2.0 × 0.25 × sin 30° = 0.010 N
```

*Annotation.* The direction is perpendicular to the plane containing the wire and the field. If the wire were rotated to lie along the field, the force would fall to zero, which is the meaning of "might" in the first outcome.

## Worked example 3: a rectangular coil

A rectangular coil of 50 turns sits in a uniform field of 0.20 T, with its plane parallel to the field. Its two sides of length 4.0 cm are perpendicular to the field and 3.0 cm apart; the other two sides are parallel to the field. The current is 0.50 A. Calculate the force on each 4.0 cm side and the torque on the coil.

```
Each turn contributes BIL, so for 50 turns:
F = N B I L = 50 × 0.20 × 0.50 × 0.040 = 0.20 N on each long side
The sides parallel to the field feel no force (θ = 0).
The two forces are equal, opposite and 3.0 cm apart: a couple.
Torque = F × perpendicular separation = 0.20 × 0.030 = 6.0 × 10⁻³ N m
```

*Annotation.* The currents in the two 4.0 cm sides flow in opposite directions, so the forces are opposite: there is no resultant force, only a turning effect. This is the principle of an electric motor. The torque calculation uses the idea of a couple from AS Topic 4.

## Worked example 4: balancing a weight

A horizontal metal rod of mass 5.0 g and length 0.10 m rests on two rails in a horizontal uniform field of 0.050 T, perpendicular to the rod. What current would make the magnetic force on the rod equal to its weight?

```
BIL = mg
I = mg / (BL) = 5.0 × 10⁻³ × 9.81 / (0.050 × 0.10) = 9.8 A
```

*Annotation.* For the force to be upward, the field and current directions must be arranged according to the left-hand rule: for example, current to the right with the field into the page.

## Common mistakes

- **Using the whole wire length** rather than the length inside the field.
- **Measuring θ from the wrong line.** It is the angle between the current and the field, not between the wire and the pole face.
- **Using the right hand** for the force on a current. The left-hand rule is for force; right-hand rules are for fields produced by currents (20.4).
- **Leaving out "at right angles"** in the definition of flux density.
- **Forgetting N for a coil**: each turn in the field adds BIL.
- **Applying the rule with electron flow** instead of conventional current.

## Exam technique for the command words

- **Define** (magnetic flux density): force per unit current per unit length on a wire at right angles to the field.
- **State** (the direction of a force): use "up the page", "into the page" and similar phrases, or name a compass direction; avoid "sideways".
- **Calculate**: write F = BIL sin θ, state θ, convert cm to m and g to kg.
- **Determine** (from a balance experiment or graph): show Δm g, Newton's third law, and B = F/(IL) or B = gradient ÷ L.
- **Explain** (why there is no force, or no resultant force): refer to θ = 0, or to equal and opposite forces on opposite sides of a coil.
- **Show that** the tesla is kg s⁻² A⁻¹: start from B = F/(IL) and substitute base units for the newton.

## Related resources

- [Magnetic Fields study guide](/resources/a-physics-magnetic-fields/) — the whole of Topic 20
- [Force on a current-carrying conductor revision notes](/resources/cambridge-a-level-physics-9702-a-force-on-a-current-carrying-conductor-revision-notes/)
- [Force on a current-carrying conductor practice questions](/resources/cambridge-a-level-physics-9702-a-force-on-a-current-carrying-conductor-practice/)
- [Force on a moving charge study guide](/resources/cambridge-a-level-physics-9702-a-force-on-a-moving-charge/) — the force on the individual charge carriers
- [Magnetic fields due to currents study guide](/resources/cambridge-a-level-physics-9702-a-magnetic-fields-due-to-currents/) — forces between two current-carrying wires

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
