---
title: "OxfordAQA International AS and A-level Physics: Flux, flux linkage and electromagnetic induction (9630) -- Revision Notes"
seoTitle: "OxfordAQA A-level Physics Induction Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Flux, flux linkage and electromagnetic induction"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
stage: "A"
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
order: 122
syllabusTopics:
  - qualification: "a-level"
    topic: "magnetic-fields-oxfordaqa-alevel"
    subtopic: "magnetic-flux-and-flux-linkage-oxfordaqa-alevel-physics"
  - qualification: "a-level"
    topic: "magnetic-fields-oxfordaqa-alevel"
    subtopic: "electromagnetic-induction-oxfordaqa-alevel-physics"
description: "Condensed revision notes on flux, flux linkage, Faraday's and Lenz's laws, eddy currents and the rotating coil for OxfordAQA A-level Physics (9630)."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

These notes condense sections 3.10.3 (Magnetic flux and flux linkage) and 3.10.4 (Electromagnetic induction) of OxfordAQA International AS and A-level Physics (9630), Version 4.4. The specification marks both as International A-level only. The [study guide](/resources/oxfordaqa-a-level-physics-flux-flux-linkage-and-electromagnetic-induction/) has the full explanations. Then try the [practice questions](/resources/oxfordaqa-a-level-physics-flux-flux-linkage-and-electromagnetic-induction-practice/), check the [course hub](/boards/oxfordaqa/a-level/physics/) and tick off the [checklist](/checklists/oxfordaqa/a-level/physics/). A [free 10-minute diagnostic](/diagnostics/) will show which parts to revise first.

## Definitions

- **Magnetic flux Φ:** Φ = BA, where B is perpendicular to the area A. Unit: weber, Wb (1 Wb = 1 T m²).
- **Flux linkage:** NΦ for a coil of N turns. Same unit as flux.
- **Faraday's law:** induced emf (magnitude) = rate at which flux linkage changes.
- **Lenz's law:** the induced emf and current oppose the cause of the induction, which is the change in flux linkage.
- **Eddy currents:** circulating currents induced in a piece of bulk metal when the flux through it changes.

## Formulas

| Quantity | Equation | Notes |
|---|---|---|
| Flux | Φ = BA | B perpendicular to A |
| Flux linkage | NΦ | N turns |
| Rotated coil | NΦ = BAN cos θ | θ = angle between B and the normal to the coil |
| Induced emf | ε = ΔΦ/Δt | Δ(NΦ) is the change in flux linkage |
| Moving straight conductor | ε = BLv | B, L and v mutually perpendicular |
| Rotating coil | ε = BANω sin ωt | t = 0 with normal along B |
| Peak emf | ε₀ = BANω | ω = 2πf |
| Force on a current-carrying conductor | F = BIL | Links to induction through Lenz's law |

Unit link: 1 Wb = 1 V s, so 1 V = 1 Wb s⁻¹.

## Method boxes

**Flux linkage of a tilted coil**
1. Sketch the coil and the normal to it.
2. Mark θ between the field and the normal. If you are given the angle between the field and the plane, subtract it from 90°.
3. Work out A in m² and NΦ = BAN cos θ.

**Size of an induced emf**
1. Find the initial and final flux linkage, including N.
2. Subtract to find Δ(NΦ), and divide by the time taken.
3. For a changing rate, use the gradient of the flux linkage–time graph.

**Direction of an induced current (Lenz)**
1. Work out if the flux linkage is rising or falling.
2. The induced field opposes the change: reverse to B if rising, parallel to B if falling.
3. Use the right-hand grip rule to get the current direction.

**A moving rod in a circuit**
1. ε = BLv.
2. I = ε/R.
3. Opposing force F = BIL; power needed = Fv = I²R at constant speed.

## Reminders from worked values

A rectangular coil of 30 turns, 0.12 m by 0.090 m, in a field of 0.35 T, normal along the field:

```
A = 0.12 × 0.090 = 1.08 × 10⁻² m²
Φ = 0.35 × 1.08 × 10⁻² = 3.78 × 10⁻³ Wb
NΦ = 30 × 3.78 × 10⁻³ = 0.113 Wb
```

A generator coil has BAN = 0.20 × 2.0 × 10⁻³ × 100 = 0.040 Wb and turns at 50 Hz: ω = 314.2 rad s⁻¹, so peak emf = 0.040 × 314.2 = 12.6 V.

A rod of length 0.20 m moves at 2.5 m s⁻¹ across a 0.30 T field in a circuit of resistance 0.50 Ω:

```
ε = 0.30 × 0.20 × 2.5 = 0.15 V
I = 0.15 / 0.50 = 0.30 A
F = BIL = 0.30 × 0.30 × 0.20 = 0.018 N
Fv = 0.018 × 2.5 = 0.045 W, and I²R = 0.30² × 0.50 = 0.045 W
```

## Reading flux linkage graphs

The emf at any instant is the gradient of the flux linkage–time graph, and the size of the gradient is what you quote unless the question asks for direction.

| Section of graph | Gradient | Induced emf |
|---|---|---|
| Rises from 0 to 0.060 Wb in 0.30 s | 0.060 / 0.30 = 0.20 Wb s⁻¹ | 0.20 V |
| Flat at 0.060 Wb | zero | zero |
| Falls from 0.060 Wb to 0 in 0.10 s | −0.60 Wb s⁻¹ | 0.60 V, opposite sense |

A steeper line gives a bigger emf, and a flat line gives none, however large the flux linkage is. The area under an emf–time graph over an interval equals the change in flux linkage in that interval.

## Must-know distinctions

| Idea | Compare |
|---|---|
| Flux and flux linkage | Flux is for one turn, flux linkage is for the whole coil |
| Flux and emf | A large flux gives no emf unless it is changing |
| cos θ and sin θ | θ is from the normal, so flux linkage uses cos θ |
| NΦ graph and emf graph | Cosine for flux linkage, sine for emf, a quarter of a cycle apart |
| Faraday and Lenz | Faraday gives the size, Lenz gives the direction |
| Induced emf and induced current | An emf exists in any conductor, a current needs a complete circuit |

**The rotating coil, quarter cycle by quarter cycle** (coil starting with the normal along the field)

| Coil position | NΦ | ε |
|---|---|---|
| Plane perpendicular to B | maximum | zero |
| Plane parallel to B (a quarter turn later) | zero | maximum |
| Plane perpendicular again (half turn) | maximum in the opposite sense | zero |
| Plane parallel (three-quarters) | zero | maximum in the opposite sense |

## Experiments and eddy currents in brief

- A bar magnet moved into a coil gives a deflection only during movement. Withdrawing it reverses the deflection, and faster motion gives a larger, shorter pulse.
- Switching a current on or off in a neighbouring coil induces a short pulse in the first one. A steady current induces nothing.
- A conductor moved across a field gives an emf only while it cuts the field lines.
- Eddy currents flow in loops in solid metal and oppose the motion or change causing them. They heat the metal and damp motion. Thin insulated sheets (laminations) reduce them.
- A magnet falls slowly in a vertical metal tube because the eddy currents in the tube produce a force on the magnet, opposing its motion and transferring its energy to thermal energy.

## Quick self-test

1. A rectangular loop 0.12 m by 0.090 m in a perpendicular field of 0.35 T. Find the flux.
2. A coil of 500 turns has 2.0 × 10⁻⁵ Wb through each turn. What is its flux linkage?
3. A coil has maximum flux linkage 0.080 Wb. Find its flux linkage when θ is 40°.
4. Over 0.12 s, a coil's flux linkage grows steadily from nothing to 0.036 Wb. Find the emf.
5. A rod of length 0.25 m moves at 1.6 m s⁻¹ across a 0.50 T field. Find the emf across its ends.
6. Show that the weber is equivalent to V s.
7. A coil has BAN = 0.040 Wb and turns at 50 Hz. Find the peak emf.
8. A coil rotates in a uniform field. State the flux linkage when the emf is at a maximum.
9. State what happens to the peak emf and the period if the coil's speed is doubled.
10. A north pole is withdrawn from a coil. Which pole forms at the end nearest the magnet?
11. Why are transformer cores laminated?
12. State why a stationary magnet in a stationary coil induces no emf.

### Answers

1. A = 1.08 × 10⁻² m², Φ = 0.35 × 1.08 × 10⁻² = **3.8 × 10⁻³ Wb**
2. 500 × 2.0 × 10⁻⁵ = **1.0 × 10⁻² Wb**
3. 0.080 × cos 40° = **0.061 Wb**
4. 0.036 / 0.12 = **0.30 V**
5. ε = BLv = 0.50 × 0.25 × 1.6 = **0.20 V**
6. B = F/(IL), so T = N A⁻¹ m⁻¹. Wb = T m² = N m A⁻¹ = J A⁻¹. Since J = V A s, Wb = **V s**.
7. ω = 2π × 50 = 314.2 rad s⁻¹, ε₀ = 0.040 × 314.2 = **12.6 V**
8. **Zero**, because the coil plane is parallel to the field.
9. The peak emf **doubles** and the period **halves**.
10. A **south** pole. It attracts the departing magnet, opposing its motion.
11. The thin insulated sheets break up the paths of eddy currents, so the currents and the heating are smaller.
12. The flux linkage is not changing, so Δ(NΦ)/Δt = 0.

## Where marks are usually lost

- Putting the angle to the coil's plane into cos θ instead of the angle to the normal.
- Forgetting to multiply by N, or multiplying by it twice.
- Quoting the emf from the flux rather than the change in flux.
- Saying the induced emf opposes the flux, not the change in flux.
- Giving a direction of current with no reasoning about whether the flux is rising or falling.
- Calling the emf maximum when the coil faces the field.
- Using cm² or mm² for area without converting to m².
- Explaining eddy-current braking as "friction" rather than induced currents and a resisting force.

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), Version 4.4, for International AS and A-level exams from May/June 2020 onwards, published by OxfordAQA. Sections 3.10.3 Magnetic flux and flux linkage and 3.10.4 Electromagnetic induction (International A-level only).
