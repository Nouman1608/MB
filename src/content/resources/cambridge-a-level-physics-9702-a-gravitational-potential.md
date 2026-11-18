---
title: "Cambridge A Level Physics (9702): Gravitational potential"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Gravitational fields"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 13.4
syllabusTopics:
  - qualification: "a-level"
    topic: "a-gravitational-fields"
    subtopic: "a-gravitational-potential"
description: "A focused guide to 13.4 Gravitational potential in Cambridge A Level Physics 9702: the definition, ϕ = –GM/r, E_P = –GMm/r, energy changes and orbit examples."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **13.4 Gravitational potential** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (A Level). The broader [Gravitational Fields study guide](/resources/a-physics-gravitational-fields/) introduces all of Topic 13 and states the potential equations; this page goes further into using them: unpacking each word of the definition, why every value is negative, how potential differences give energy changes, why mgΔh is only an approximation, and how to handle energy changes for satellites. For quick recall use the [Gravitational potential revision notes](/resources/cambridge-a-level-physics-9702-a-gravitational-potential-revision-notes/), and for exam-style questions the [Gravitational potential practice questions](/resources/cambridge-a-level-physics-9702-a-gravitational-potential-practice/).

## What 13.4 asks you to do

The syllabus lists three outcomes. Candidates should be able to:

- **define gravitational potential** at a point as the work done per unit mass in bringing a small test mass from infinity to the point
- **use ϕ = –GM/r** for the gravitational potential in the field due to a point mass
- understand how the concept of gravitational potential leads to the **gravitational potential energy of two point masses** and **use E_P = –GMm/r**

Both equations appear on the A Level data sheet, so the marks are for using them correctly: signs, distances from the centre, and the difference between potential and potential energy.

## The definition, word by word

> The gravitational potential at a point is the **work done per unit mass** in bringing a **small test mass** from **infinity** to that point.

- **Work done per unit mass**: potential is an energy per kilogram, unit **J kg⁻¹**. It describes the point in the field, not any object.
- **Small test mass**: so that the mass does not disturb the field being described.
- **From infinity**: infinity is the reference where the potential is defined as **zero**, because the field there is zero.

Potential is a **scalar**. It has a sign but no direction, which makes potentials from several bodies easy to combine: you simply add them.

## Why gravitational potential is negative

Gravity is attractive. As a test mass is brought in from infinity, the field pulls it inwards, so the field does positive work on it. The work done **on** the mass by whatever brings it in steadily (with no gain in kinetic energy) is therefore **negative**: it has to hold the mass back. Per unit mass, that negative work is the potential.

Two consequences:

- Every point at a finite distance has a **negative** potential, and the potential is **highest (zero) at infinity**.
- Moving **away** from a mass, the potential **increases** (becomes less negative). Moving away therefore requires energy to be supplied, as it should.

At the Earth's surface, ϕ = –GM/R = –(6.67 × 10⁻¹¹ × 5.97 × 10²⁴) ÷ 6.37 × 10⁶ = **–6.25 × 10⁷ J kg⁻¹**. At twice that distance from the centre the potential is half as negative, –3.13 × 10⁷ J kg⁻¹: ϕ ∝ 1/r, not 1/r².

## From potential to potential energy

Potential describes the field; potential energy belongs to a mass placed in it. If the work done per kilogram in bringing a mass from infinity is ϕ, the work done for a mass m is mϕ:

```
E_P = mϕ = –GMm / r
```

This is the gravitational potential energy **of the two point masses together**, M and m at separation r. It is the energy needed to assemble them from infinite separation, which is negative: energy would have to be supplied to pull them apart again. The same value is obtained whichever mass is thought of as "the field" and which as "the test mass".

## Potential differences and energy changes

Absolute values are rarely the point of a question; changes are. Moving a mass m between two points:

```
ΔE_P = m Δϕ = m (ϕ_final – ϕ_initial)
ΔE_P = GMm (1/r_initial – 1/r_final)
```

If the mass moves further away, r_final > r_initial, so ΔE_P is positive: the potential energy increases. Always write the subtraction as final minus initial and let the signs do the work.

## Worked example 1: lifting a satellite

A satellite of mass 1500 kg is raised from the Earth's surface to a height of 2.0 × 10⁶ m. Calculate the increase in gravitational potential energy, and compare it with the value given by mgΔh with g = 9.81 N kg⁻¹.

```
r_i = 6.37 × 10⁶ m,   r_f = 8.37 × 10⁶ m
ΔE_P = GMm (1/r_i – 1/r_f)
     = 6.67 × 10⁻¹¹ × 5.97 × 10²⁴ × 1500 × (1/6.37 × 10⁶ – 1/8.37 × 10⁶)
     = 2.2 × 10¹⁰ J
mgΔh = 1500 × 9.81 × 2.0 × 10⁶ = 2.9 × 10¹⁰ J
```

*Annotation.* mgΔh overestimates by about 30% because it assumes g stays at 9.81 N kg⁻¹ all the way up, when in fact g falls with height. For a rise of 1000 m the two methods agree to better than one part in a thousand: mgΔh is the special case of ΔE_P = mΔϕ for a height change much smaller than the radius, where the field is uniform.

## Adding potentials from two bodies

Because potential is a scalar, the potential at a point near two masses is the **sum** of the two (negative) potentials, with no directions to consider.

## Worked example 2: a point between the Earth and the Moon

Calculate the gravitational potential at a point on the line between the Earth and the Moon, 3.0 × 10⁸ m from the Earth's centre. The Earth–Moon separation is 3.84 × 10⁸ m and the Moon's mass is 7.35 × 10²² kg.

```
ϕ_Earth = –(6.67 × 10⁻¹¹ × 5.97 × 10²⁴) / 3.0 × 10⁸  = –1.33 × 10⁶ J kg⁻¹
ϕ_Moon  = –(6.67 × 10⁻¹¹ × 7.35 × 10²²) / 0.84 × 10⁸ = –5.8 × 10⁴ J kg⁻¹
ϕ = –1.33 × 10⁶ + (–5.8 × 10⁴) = –1.39 × 10⁶ J kg⁻¹
```

*Annotation.* Compare this with field strength: the fields from the Earth and the Moon point in opposite directions here and partly cancel, while the potentials, both negative, always add. The zero-field point found in the [Gravitational field of a point mass guide](/resources/cambridge-a-level-physics-9702-a-gravitational-field-of-a-point-mass/) is **not** a point of zero potential.

## Worked example 3: moving a satellite to a higher orbit

A satellite of mass 800 kg moves from a circular orbit of radius 7.0 × 10⁶ m to one of radius 8.0 × 10⁶ m. Calculate the changes in its gravitational potential energy and kinetic energy.

From 13.2, gravity provides the centripetal force: GMm/r² = mv²/r, so ½mv² = **GMm/2r**.

```
ΔE_P = GMm (1/7.0 × 10⁶ – 1/8.0 × 10⁶) = +5.69 × 10⁹ J
ΔE_K = (GMm/2)(1/8.0 × 10⁶ – 1/7.0 × 10⁶) = –2.84 × 10⁹ J
net energy to be supplied = 5.69 × 10⁹ – 2.84 × 10⁹ = 2.8 × 10⁹ J
```

*Annotation.* In the higher orbit the satellite moves more slowly, so it loses kinetic energy, but it gains twice as much potential energy. Engines must supply the difference. A useful check: for a circular orbit, E_K is always half the size of E_P, and of opposite sign.

## The shape of the ϕ–r graph

For r ≥ R, the graph of ϕ against r is a curve below the r-axis, starting at –GM/R and rising towards zero as r increases, never crossing the axis. It is steeper close to the planet, where the field is stronger, and flattens far away, where the field is weak. A ball rolling "uphill" on this curve is a fair picture of a mass moving away from a planet: energy must be supplied.

## Common mistakes

- **Dropping the minus sign** in ϕ = –GM/r or E_P = –GMm/r.
- **Defining potential as "the work done in bringing a mass from infinity"** without "per unit mass" and "small test mass".
- **Using 1/r² in potential calculations** (that is field strength).
- **Using mgΔh for large height changes**, where g is not constant.
- **Subtracting potentials as if they were vectors** when two bodies contribute; potentials are scalars and simply add.
- **Confusing ϕ (J kg⁻¹) with E_P (J).**
- **Thinking a zero-field point has zero potential.**

## Exam technique for the command words

- **Define**: use the full syllabus wording: work done per unit mass, small test mass, from infinity to the point.
- **Explain** (why ϕ is negative): potential is zero at infinity; gravity is attractive, so the work done on the mass in bringing it from infinity is negative.
- **Calculate** or **determine** (energy needed): find Δϕ or ΔE_P from the two radii, final minus initial; for orbits, include the change in kinetic energy if the question asks for total energy.
- **Suggest** (why mgΔh is inaccurate): g decreases with height, so the field is not uniform over a large height change.
- **Sketch** (ϕ against r): negative throughout, rising towards zero, steeper near the surface.

## Related resources

- [Gravitational Fields study guide](/resources/a-physics-gravitational-fields/) — the whole of Topic 13
- [Gravitational potential revision notes](/resources/cambridge-a-level-physics-9702-a-gravitational-potential-revision-notes/)
- [Gravitational potential practice questions](/resources/cambridge-a-level-physics-9702-a-gravitational-potential-practice/)
- [Gravitational force between point masses](/resources/cambridge-a-level-physics-9702-a-gravitational-force-between-point-masses/) — the orbit analysis used in worked example 3
- [Gravitational potential energy and kinetic energy (AS)](/resources/cambridge-a-level-physics-9702-as-gravitational-potential-energy-and-kinetic-energy/) — ΔE_P = mgΔh in a uniform field

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
