---
title: "Cambridge AS & A Level Physics (9702): Gravitational potential energy and kinetic energy"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Work, energy and power"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 5.2
syllabusTopics:
  - qualification: "a-level"
    topic: "as-work-energy-and-power"
    subtopic: "as-gravitational-potential-energy-and-kinetic-energy"
description: "Subtopic 5.2 of Cambridge AS Physics 9702 in depth: deriving mgΔh and ½mv², why mass often cancels, slopes with friction and braking distance."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into **5.2 Gravitational potential energy and kinetic
energy**, the second subtopic of AS Topic 5, Work, energy and power, in Cambridge
International AS & A Level Physics 9702 (2025–2027 series). The
[Work, Energy and Power study guide](/resources/as-physics-work-energy-and-power/)
introduces both formulae; this page sets out the two derivations the syllabus
asks for in full and shows how to use the formulae in multi-step problems. For
quick recall, use the
[GPE and kinetic energy revision notes](/resources/cambridge-a-level-physics-9702-as-gravitational-potential-energy-and-kinetic-energy-revision-notes/),
then try the [GPE and kinetic energy practice questions](/resources/cambridge-a-level-physics-9702-as-gravitational-potential-energy-and-kinetic-energy-practice/).

## Syllabus coverage

**CAMBRIDGE INTERNATIONAL AS & A LEVEL PHYSICS 9702 — AS Level, 5.2 Gravitational potential energy and kinetic energy**

Candidates should be able to:

- derive, using W = Fs, the formula ∆Eₚ = mg∆h for gravitational potential
energy changes in a uniform gravitational field
- recall and use the formula ∆Eₚ = mg∆h for gravitational potential energy
changes in a uniform gravitational field
- derive, using the equations of motion, the formula for kinetic energy
Eₖ = ½mv²
- recall and use Eₖ = ½mv²

## Deriving ∆Eₚ = mg∆h

**Gravitational potential energy** is the energy an object has because of its
position in a gravitational field. The syllabus asks only for *changes* in it,
in a *uniform* field.

Derivation (each line is a mark-earning step):

```
1. Raise a mass m vertically at constant speed through a height dh.
2. Constant speed, so the upward force F equals the weight: F = mg.
3. Work done by F:  W = F s = mg x dh   (force and displacement both vertical)
4. This work is stored as gravitational potential energy:
   dEp = mg dh
```

Two conditions sit behind the result:

- **Uniform field.** g must be the same at every point between the two
heights, so the force mg is constant and W = Fs applies. Close to the Earth's
surface, over heights of metres or kilometres, this is an excellent
approximation. For changes comparable to the Earth's radius, the A Level
treatment in Gravitational Fields is needed.
- **Vertical height only.** If the mass is moved along a slope or a curved
path, the horizontal parts of the motion are perpendicular to the weight and
involve no work against gravity. So ∆Eₚ depends only on the change in
vertical height, whatever the route.

## Deriving Eₖ = ½mv²

**Kinetic energy** is the energy an object has because of its motion. The
syllabus asks you to derive it **using the equations of motion**:

```
1. A constant resultant force F acts on a mass m, initially at rest,
   over a displacement s in the direction of the force.
2. Newton's second law: a = F / m
3. Equation of motion with u = 0:  v^2 = u^2 + 2as = 2as,  so  s = v^2 / 2a
4. Work done by the resultant force: W = F s = (m a)(v^2 / 2a) = (1/2) m v^2
5. All this work becomes kinetic energy:  Ek = (1/2) m v^2
```

If the object starts at speed u instead of rest, the same steps give the
**work done by the resultant force = change in kinetic energy**:

```
W = (1/2) m v^2 - (1/2) m u^2
```

This form is the quickest way into braking and stopping problems.

## Why the mass often cancels

When gravitational potential energy changes into kinetic energy with no
resistive forces:

```
m g dh = (1/2) m v^2      so      v = sqrt(2 g dh)
```

The mass cancels, so a heavy and a light object dropped from the same height
reach the same speed, which agrees with all objects having the same
acceleration of free fall. As soon as friction or air resistance does work,
the mass no longer cancels, because the resistive force does not scale with
mass.

Energy is a scalar, which gives a second powerful shortcut: the speed at a
given height does not depend on the direction of travel.

**Worked example — a stone thrown from a cliff.** A stone is thrown from the
top of a cliff 20 m above the sea with a speed of 8.0 m s⁻¹. Ignoring air
resistance, find its speed as it reaches the sea.

```
(1/2) m v^2 = (1/2) m u^2 + m g dh
v^2 = u^2 + 2 g dh = 8.0^2 + 2 x 9.81 x 20 = 64 + 392.4 = 456.4
v   = 21 m/s
```

The answer is the same whether the stone is thrown upwards, horizontally or
downwards. Using the equations of motion would need the angle; the energy
method does not.

## Energy on slopes with friction

**Worked example — a skier.** A skier of mass 65 kg starts from rest and
slides 120 m down a straight slope inclined at 20° to the horizontal. The
average resistive force is 40 N. Find the speed at the bottom.

```
vertical drop    dh = 120 sin 20 = 41.0 m
GPE lost         = m g dh = 65 x 9.81 x 41.0 = 2.62 x 10^4 J
work against resistance = F s = 40 x 120 = 4800 J   (distance along slope)
KE gained        = 26 170 - 4800 = 2.14 x 10^4 J
v = sqrt(2 x 21 370 / 65) = 26 m/s
```

Notice the two different distances: the **vertical height** goes with the
weight, the **distance along the slope** goes with the resistive force. Using
the same length for both is the commonest error in this kind of question.

## Kinetic energy and braking distance

Because Eₖ depends on v², kinetic energy grows much faster than speed. For a
constant braking force F, the work done in stopping is Fs = ½mv², so the
braking distance s is proportional to v².

**Worked example.** A car of mass 1200 kg travelling at 15 m s⁻¹ stops in
18 m with a constant braking force. Find the force, and the braking distance
from 30 m s⁻¹ with the same force.

```
F = (1/2) m v^2 / s = 0.5 x 1200 x 15^2 / 18 = 7500 N
from 30 m/s:  s = 0.5 x 1200 x 30^2 / 7500 = 72 m
```

Doubling the speed quadruples the braking distance. Proportional reasoning
like this ("v doubles, so Eₖ is multiplied by four") often earns full marks
faster than a full calculation.

## Exam technique

- **Derive**: state the starting assumptions (constant force, uniform field,
starting from rest) and number the steps. Quote the equation of motion you
use; the syllabus specifically requires the equations of motion for Eₖ.
- **Show that**: give an intermediate value to more significant figures than
the answer quoted in the question.
- **Explain why the mass does not matter**: write the energy equation with m
on both sides and show it cancelling, then state the condition (no resistive
forces).
- **Calculate a speed**: square roots of energy terms are where unit errors
hide; keep everything in J, kg and m s⁻¹.

## Common mistakes

- Using the slope length instead of the vertical height in mg∆h.
- Squaring the mass or forgetting to square the speed in ½mv².
- Applying mg∆h to a spacecraft thousands of kilometres above the Earth,
where g is not uniform.
- Subtracting the work against friction from the wrong side of the energy
equation, giving a final speed larger than the frictionless value.
- Treating kinetic energy as a vector: it has no direction and is never
negative.

## Quick revision checklist

- Derivation of ∆Eₚ = mg∆h from W = Fs, with the uniform-field condition
- Derivation of Eₖ = ½mv² from F = ma and v² = u² + 2as
- Work done by the resultant force = change in kinetic energy
- v = √(2g∆h) when there are no resistive forces, independent of mass
- Vertical height for GPE, path length for work against resistance
- Braking distance ∝ v² for a constant braking force

## Frequently asked questions

**Why does ∆Eₚ = mg∆h only apply in a uniform field?**
The derivation uses W = Fs with a constant force mg. If g changes over the
height involved, the force is not constant and the simple product no longer
gives the work done.

**Does the path taken change the gravitational potential energy gained?**
No. Only the change in vertical height matters, because horizontal movement
is at right angles to the weight and does no work against gravity.

**Why does doubling speed quadruple kinetic energy?**
Kinetic energy is proportional to v², so multiplying v by 2 multiplies Eₖ by
2² = 4.

## Related resources

- [Work, Energy and Power](/resources/as-physics-work-energy-and-power/) — the whole of Topic 5 in one guide
- [Energy conservation](/resources/cambridge-a-level-physics-9702-as-energy-conservation/) — subtopic 5.1, work, efficiency and power
- [Kinematics: Equations of Motion](/resources/as-physics-kinematics-equations-of-motion/) — the equations used in the kinetic energy derivation
- [Cambridge AS & A Level Physics hub](/boards/cambridge/a-level/physics/)

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027
series. Always check the current syllabus for your examination year.*
