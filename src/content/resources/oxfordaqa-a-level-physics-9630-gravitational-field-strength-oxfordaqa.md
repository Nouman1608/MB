---
title: "OxfordAQA International AS and A-level Physics (9630): Gravitational field strength"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.7 – Gravitational fields and satellites"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
stage: "A"
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
order: 7.02
syllabusTopics:
  - qualification: "a-level"
    topic: "gravitational-fields-and-satellites"
    subtopic: "gravitational-field-strength-oxfordaqa"
description: "Deeper study guide to 9630 section 3.7.2: force fields, field lines, g = F/m, g = GM/r², fields of two bodies, the neutral point and g with height."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to iftikhar-azeemi (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into section **3.7.2 Gravitational field strength** of the OxfordAQA International AS and A-level Physics (9630) specification. The section covers the "concept of a force field as a region in which a body experiences a force", "representation by gravitational field lines", "g as force per unit mass defined by g = F/m" and the "magnitude of g in a radial field given by g = GM/r²". Section 3.7 is International A-level only.

The broader [study guide to Newton's law of gravitation and gravitational field strength](/resources/oxfordaqa-a-level-physics-newtons-law-of-gravitation-and-gravitational-field/) derives g = GM/r² and tabulates how g falls with distance. This page takes the ideas further: combining the fields of two bodies, locating the point where they cancel, linking g to a planet's density, and judging when a field may be treated as uniform. Afterwards use the [gravitational field strength revision notes](/resources/oxfordaqa-a-level-physics-9630-gravitational-field-strength-oxfordaqa-revision-notes/) and the [gravitational field strength practice questions](/resources/oxfordaqa-a-level-physics-9630-gravitational-field-strength-oxfordaqa-practice/).

Data used, as a question would give them: G = 6.67 × 10⁻¹¹ N m² kg⁻²; Earth mass 5.97 × 10²⁴ kg and radius 6.37 × 10⁶ m; Moon mass 7.35 × 10²² kg; Earth-Moon distance 3.84 × 10⁸ m.

## A field is a property of a place

A force field is a region in which a body experiences a force. The gravitational field around the Earth exists whether or not anything is placed in it. The field strength at a point tells you the force that **any** mass would feel there, per kilogram:

g = F/m, in N kg⁻¹

Three consequences follow:

- g is a **vector**, pointing in the direction of the force on a mass, which for gravity is towards the body creating the field.
- g does not depend on the test mass. A larger test mass feels a larger force, but the ratio F/m is unchanged.
- N kg⁻¹ is equivalent to m s⁻², so g at a point is also the free-fall acceleration there.

## Field lines that earn marks

| Feature | What to draw | What it shows |
|---|---|---|
| Arrows | Pointing towards the mass | Direction of the force on a test mass |
| Spacing | Closer together near the mass | Stronger field |
| Radial field | Straight lines aimed at the centre of a sphere, spreading apart outwards | g falls with distance |
| Near the surface | Parallel, evenly spaced, vertical lines | Field is almost uniform over small heights |
| Crossing | Lines never cross | Each point has one field direction |

## When can the field be treated as uniform?

In a radial field g = GM/r², so g at height h above a planet of radius R is

g(h) = g(surface) × (R/(R + h))²

### Worked example 1: how much does g change in 10 km?

```
(R / (R + h))² = (6.37 × 10⁶ / 6.38 × 10⁶)² = 0.9969
g falls by about 0.31%
```

Over the height of a building or a mountain, g is constant to well under 1%, which is why near-surface problems use parallel field lines and a single value of g. At the height of a geostationary orbit, about 3.6 × 10⁷ m above the surface, g has fallen to about 0.22 N kg⁻¹, and the uniform model is useless.

## Fields of two bodies

Field strengths are vectors, so at any point the total field is the vector sum of the fields of each body. Between two bodies the fields point in opposite directions and partly cancel. Beyond one of them, on the line joining them, they point the same way and add.

### Worked example 2: the neutral point between the Earth and the Moon

Find the point on the line between the centres where the resultant gravitational field is zero.

Let x be the distance from the Earth's centre, so the distance from the Moon's centre is d − x.

```
G M(E) / x² = G M(M) / (d − x)²
x / (d − x) = √(M(E) / M(M)) = √(5.97 × 10²⁴ / 7.35 × 10²²) = 9.01
x = 9.01 (d − x), so x = 9.01d / 10.01 = 0.900d
x = 0.900 × 3.84 × 10⁸ = 3.46 × 10⁸ m from the Earth's centre
```

The neutral point is nine-tenths of the way to the Moon. Taking the square root before rearranging keeps the algebra linear; expanding the squares instead leads to a quadratic with one answer that lies outside the region between the bodies and must be rejected.

A probe slightly closer to the Earth than this point is pulled back towards the Earth; slightly beyond it, the Moon's pull wins.

### Worked example 3: where the fields add

Find the resultant field at a point on the far side of the Moon, on the Earth-Moon line, 4.20 × 10⁸ m from the Earth's centre.

```
distance from the Moon's centre = 4.20 × 10⁸ − 3.84 × 10⁸ = 3.6 × 10⁷ m
g(Earth) = 6.67 × 10⁻¹¹ × 5.97 × 10²⁴ / (4.20 × 10⁸)² = 2.26 × 10⁻³ N kg⁻¹
g(Moon)  = 6.67 × 10⁻¹¹ × 7.35 × 10²² / (3.6 × 10⁷)² = 3.78 × 10⁻³ N kg⁻¹
resultant = 6.0 × 10⁻³ N kg⁻¹, towards the Moon and the Earth
```

Both fields point back along the line towards the two bodies, so they add.

## Linking g to density

For a uniform sphere of radius R and density ρ, the mass is M = (4/3)πR³ρ. Substituting into g = GM/R²:

g = (4/3)πGρR

So for planets of the same density, the surface field strength is proportional to the radius.

### Worked example 4: an invented rocky planet

A planet has radius 3.4 × 10⁶ m and mean density 3900 kg m⁻³. Find g at its surface.

```
g = (4/3) × π × 6.67 × 10⁻¹¹ × 3900 × 3.4 × 10⁶ = 3.7 N kg⁻¹
```

A second planet of the same density but twice the radius would have g = 7.4 N kg⁻¹, even though its mass would be eight times larger: the mass rises with R³ while g falls with 1/R².

## Common mistakes

- Treating g as the same everywhere. It is a property of position and falls with distance from the centre.
- Saying g depends on the mass of the object placed in the field.
- Adding field strengths between two bodies when they point in opposite directions.
- Expanding the neutral-point equation into a quadratic and keeping the wrong root.
- Drawing radial field lines pointing outwards, or not reaching the surface.
- Using the radius of the planet for r when the point is above the surface.

## Exam technique

- **Define** gravitational field strength: "the force per unit mass acting on a small mass placed at that point". Both "per unit mass" and "at a point" matter.
- **Draw** field lines: arrows inward, more crowded near the body, parallel and equally spaced for a uniform region.
- **Calculate** a resultant field: find each field separately, assign directions, then add as vectors.
- **Explain** why the near-surface field is uniform: compare the change in height with the planet's radius and quote the percentage change in g.

## More on this topic

Condense the page with the [gravitational field strength revision notes](/resources/oxfordaqa-a-level-physics-9630-gravitational-field-strength-oxfordaqa-revision-notes/) and test yourself with the [gravitational field strength practice questions](/resources/oxfordaqa-a-level-physics-9630-gravitational-field-strength-oxfordaqa-practice/). The force law behind these fields is in the [Newton's gravitational law study guide](/resources/oxfordaqa-a-level-physics-9630-newtons-gravitational-law/), and the energy description of the same field is in the [gravitational potential study guide](/resources/oxfordaqa-a-level-physics-9630-gravitational-potential-oxfordaqa/).
