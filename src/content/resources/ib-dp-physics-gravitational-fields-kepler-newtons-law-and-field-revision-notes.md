---
title: "IB DP Physics: Gravitational fields: Kepler, Newton's law and field strength (DP Physics) -- Revision Notes"
seoTitle: "IB Physics D.1 Gravitational Fields Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["ib"]
topic: "Gravitational fields: Kepler, Newton's law and field strength"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Physics"]
syllabusSeries: "First assessment 2025"
order: 288
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-physics-topic-d"
    subtopic: "ib-dp-physics-d-1"
description: "Condensed IB DP Physics D.1 revision notes for SL and HL: Kepler's laws, Newton's law, field strength g, field lines, formulae and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

These notes condense the standard level and higher level part of **sub-topic D.1, Gravitational fields**, from the IB Diploma Programme *Physics guide*, first assessment 2025. The [study guide](/resources/ib-dp-physics-gravitational-fields-kepler-newtons-law-and-field/) has the full explanations and longer examples. Try the [practice questions](/resources/ib-dp-physics-gravitational-fields-kepler-newtons-law-and-field-practice/). The potential-based, HL only content of D.1 is not in these notes.

Find all sub-topics on the [IB Physics hub](/boards/ib/ib-dp/physics/) and tick them off on the [printable checklist](/checklists/ib/ib-dp/physics/). Not sure where to start? Try the [free 10-minute diagnostics](/diagnostics/).

Use G = 6.67 × 10⁻¹¹ N m² kg⁻².

## Kepler's laws at a glance

| Law | Statement | What it lets you do |
|---|---|---|
| First | Each orbit is an ellipse, with the Sun at a focus | Describe the shape of a planetary orbit |
| Second | The Sun-planet line covers equal areas in equal times | Compare speeds at different distances |
| Third | T² ∝ r³ | Compare periods and radii of bodies orbiting the same mass |

In calculations the guide treats orbits as circular, so r is the orbital radius.

### Method: second law at the closest and furthest points

1. Identify the two points where the velocity is at right angles to the line to the central mass.
2. Write r₁v₁ = r₂v₂.
3. Rearrange for the unknown speed.
4. Check that the speed is higher at the smaller distance.

### Method: third law between two orbits

1. Confirm both bodies orbit the same central mass.
2. Write T₂/T₁ = (r₂/r₁)^(3/2).
3. Keep the same units for both periods and both radii. No conversion is needed.
4. Check the sign: a larger orbit gives a longer period.

Worked reminder: an orbit nine times larger gives T 9^(3/2) = 27 times longer.

## Newton's law of gravitation

```
F = G m₁ m₂ / r²
```

| Fact | Detail |
|---|---|
| Nature | Attractive only |
| Dependence | F ∝ m₁, F ∝ m₂, F ∝ 1/r² |
| Direction | Along the line joining the two masses |
| Pair | The two forces are equal and opposite (Newton's third law) |
| Distance | r is centre to centre, never surface to centre |

Scaling shortcut: work out the factor for each change and multiply them. Triple r gives 1/9, double one mass gives 2, so together F becomes 2/9 of its original value.

### Extended bodies as point masses

Treat a body as a point mass at its centre when:

- it is spherical with uniform density (or spherically symmetric), or
- the separation is far bigger than the size of either body.

Do not take r from the surface.

## Field strength

| Quantity | Result | Unit |
|---|---|---|
| Definition | g = F/m, force divided by the mass of a small point mass | N kg⁻¹ |
| Point mass or uniform sphere | g = GM/r² | N kg⁻¹ |
| Weight | W = mg | N |
| Free fall | a = g | m s⁻² |

- g is a vector that points towards the source.
- g does not depend on the test mass.
- Inverse square: at r = 2R, g is a quarter of its surface value.
- N kg⁻¹ and m s⁻² are equivalent units.

### Method: g at a given height

1. Find r = R + h.
2. Substitute into g = GM/r².
3. Keep four digits in the working, then round to three significant figures.
4. State the unit and direction (towards the centre).

### Method: two bodies on a line

1. Draw the line and mark the point you want.
2. Find each body's g at that point using its own distance.
3. Between the bodies: subtract the field strengths. Outside: add them.
4. Give the direction of the larger one.
5. For a null point, solve M₁/x² = M₂/(d − x)². Taking square roots, x/(d − x) = √(M₁/M₂). The null point is nearer the smaller mass.

Worked reminder: if one mass is 16 times the other, √16 = 4, so the null point is 4/5 of the separation from the larger mass.

## Field lines

| Field | Pattern | Spacing |
|---|---|---|
| Radial (point mass, sphere) | Straight lines pointing to the centre | Closer near the mass |
| Uniform (near a planet's surface) | Parallel, equally spaced, pointing down | Constant |
| Two masses | Lines curve between them, with a null point | Sparse at the null point |

Rules to remember:

- The arrow shows the direction of the force on a mass.
- Closer lines mean a stronger field.
- Lines never cross.
- Lines end at the surface of a sphere, pointing at its centre.

## Worked reminders

**Field strength at a height.** Find g at 500 km above a planet of mass 6.0 × 10²³ kg and radius 3.0 × 10⁶ m.

```
r = 3.0e6 + 0.5e6 = 3.5 × 10⁶ m
g = 6.67e-11 × 6.0e23 / (3.5e6)² = 3.27 N kg⁻¹
```

**Third law with a ratio.** A moon orbits at 3.0 × 10⁸ m with period 2.0 days. A second moon of the same planet orbits at 6.0 × 10⁸ m. The radius doubles, so T grows by 2^(3/2) = 2.83, giving 5.7 days.

**Weight from field strength.** A 12 kg instrument on a planet where g = 3.27 N kg⁻¹ weighs 12 × 3.27 = 39 N.

## Units check

| Quantity | Symbol | Unit |
|---|---|---|
| Gravitational constant | G | N m² kg⁻² |
| Field strength | g | N kg⁻¹ |
| Period | T | s (or days, if you use a ratio) |
| Separation | r | m, measured centre to centre |
| Mass | M, m | kg |

A quick check on any answer: the unit of GM/r² is N m² kg⁻² × kg / m² = N kg⁻¹, which confirms the formula is dimensionally consistent.

## Must-know distinctions

- **g and G.** G is a universal constant. g is a field strength that changes with position.
- **Mass and weight.** Mass is in kg and does not change. Weight is a force in N and depends on g.
- **Kepler and Newton.** Kepler's laws describe the orbits. Newton's law of gravitation explains them.
- **Radial and uniform.** The field is radial in general and treated as uniform only over heights small compared with the planet's radius.

## Quick self-test

1. State Kepler's second law in your own words.
2. A planet orbits a star at nine times the distance of a second planet. By what factor is its period longer?
3. Find the force between masses of 2.0 × 10³ kg and 3.0 × 10³ kg whose centres are 10 m apart.
4. The separation of two masses is tripled. By what factor does the force change?
5. The Earth pulls a satellite with a force of 800 N. What force does the satellite exert on the Earth?
6. At the surface g = 9.81 N kg⁻¹. What is g at a distance of 2R from the planet's centre?
7. Find g at the surface of the Moon, whose mass is 7.35 × 10²² kg and whose radius is 1.74 × 10⁶ m.
8. Find the weight of a 60 kg person on the Moon, using your answer to question 7.
9. A comet is 1.0 × 10¹⁰ m from a star moving at 6.0 × 10⁴ m s⁻¹. What is its speed when it is 4.0 × 10¹⁰ m from the star, at a point where the velocity is again perpendicular to the line to the star?
10. Two masses differ by a factor of 16 and are separated by 5.0 m. How far from the heavier mass is the null point?

### Answers

1. The line from the Sun to a planet covers equal areas in equal intervals of time.
2. 9^(3/2) = **27 times longer**.
3. F = 6.67 × 10⁻¹¹ × 2.0 × 10³ × 3.0 × 10³ / 10² = **4.00 × 10⁻⁶ N**.
4. 1/3² = **one ninth**.
5. **800 N**, towards the satellite (Newton's third law).
6. g is a quarter: 9.81/4 = **2.45 N kg⁻¹**.
7. g = 6.67 × 10⁻¹¹ × 7.35 × 10²² / (1.74 × 10⁶)² = **1.62 N kg⁻¹**.
8. W = 60 × 1.619 = **97.2 N**.
9. v₂ = 6.0 × 10⁴ × 1.0 × 10¹⁰ / 4.0 × 10¹⁰ = **1.5 × 10⁴ m s⁻¹**.
10. √16 = 4, so the null point is 4/5 of 5.0 m from the heavier mass: **4.0 m**.

## Where marks are usually lost

- Using the height above the surface as r, instead of R + h.
- Giving g in N, or force in N kg⁻¹. Check the unit against the quantity.
- Writing "g is the force on a mass" without "per unit mass" in a definition.
- Stating that g depends on the mass of the test object.
- Treating Kepler's laws as the cause of orbits rather than a description of them.
- Missing the direction on a resultant field strength.
- Subtracting field strengths outside the pair of bodies, where they add.
- Drawing field lines for a sphere that do not point at the centre, or that cross.
- Mixing days and seconds when working out T²/r³ for a single body, though not when taking a ratio.

## Official syllabus

This page follows sub-topic D.1 (Gravitational fields), standard level and higher level content, of the IB Diploma Programme *Physics guide*, first assessment 2025, published by the International Baccalaureate Organization.
