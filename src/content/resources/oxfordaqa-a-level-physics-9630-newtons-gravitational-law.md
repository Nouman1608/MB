---
title: "OxfordAQA International AS and A-level Physics (9630): Newton's gravitational law"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.7 – Gravitational fields and satellites"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
stage: "A"
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
order: 7.01
syllabusTopics:
  - qualification: "a-level"
    topic: "gravitational-fields-and-satellites"
    subtopic: "newtons-gravitational-law"
description: "Deeper study guide to 9630 section 3.7.1: gravity as a universal attractive force, F = Gm1m2/r², resultant forces from two bodies and the unit of G."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to iftikhar-azeemi (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into section **3.7.1 Newton's gravitational law** of the OxfordAQA International AS and A-level Physics (9630) specification. The section states "gravity as a universal attractive force acting between all matter" and the "force between point masses", F = Gm₁m₂/r², "where G is the gravitational constant". Section 3.7 is International A-level only.

The broader [study guide to Newton's law of gravitation and gravitational field strength](/resources/oxfordaqa-a-level-physics-newtons-law-of-gravitation-and-gravitational-field/) states the law and its basic scaling. This page extends it to the problems that cost marks: the unit of G, forces between astronomical bodies, the resultant force on an object pulled by two bodies, and testing the inverse square law from data. Afterwards use the [Newton's gravitational law revision notes](/resources/oxfordaqa-a-level-physics-9630-newtons-gravitational-law-revision-notes/) and the [Newton's gravitational law practice questions](/resources/oxfordaqa-a-level-physics-9630-newtons-gravitational-law-practice/).

Data used, as a question would give them: G = 6.67 × 10⁻¹¹ N m² kg⁻²; Earth mass 5.97 × 10²⁴ kg and radius 6.37 × 10⁶ m; Moon mass 7.35 × 10²² kg; Earth-Moon distance (centre to centre) 3.84 × 10⁸ m.

## What "universal" and "attractive" mean in an answer

- **Universal**: the same law, with the same constant G, applies to every pair of masses anywhere: apples and the Earth, the Moon and the Earth, two grains of dust.
- **Attractive**: the force on each mass always points towards the other. There is no gravitational repulsion, and nothing screens gravity off.
- **Between all matter**: any object with mass both exerts and feels the force. A small mass pulls on a planet exactly as hard as the planet pulls on it.

## The law, piece by piece

F = Gm₁m₂/r²

| Symbol | Meaning | Unit |
|---|---|---|
| F | Size of the attractive force on each mass | N |
| m₁, m₂ | The two masses | kg |
| r | Distance between the centres of the masses | m |
| G | Gravitational constant | N m² kg⁻² |

### The unit of G

Rearrange the law: G = Fr²/(m₁m₂). Putting in units gives N × m² ÷ kg², so the unit is **N m² kg⁻²**. In base units, since N = kg m s⁻², this is kg⁻¹ m³ s⁻². A question that asks you to "show that the unit of G is..." expects the rearrangement written out.

### Point masses and spheres

The law is stated for point masses. A uniform sphere acts on an outside mass as if all its mass were at its centre. So for planets, moons and stars, r is centre to centre. For two touching spheres, r is the sum of their radii, not zero.

## How small G makes gravity

G is tiny, so gravitational forces between everyday objects are negligible, and gravity only becomes large when at least one mass is enormous.

### Worked example 1: people and planets

Two people of mass 70 kg stand with their centres 1.0 m apart. Compare the force between them with the weight of one person.

```
F = 6.67 × 10⁻¹¹ × 70 × 70 / 1.0² = 3.3 × 10⁻⁷ N
weight = mg = 70 × 9.81 = 687 N
```

The mutual attraction is about two billion times smaller than the weight. Now the Earth and the Moon:

```
F = 6.67 × 10⁻¹¹ × 5.97 × 10²⁴ × 7.35 × 10²² / (3.84 × 10⁸)²
  = 2.0 × 10²⁰ N
```

That force provides the centripetal force that keeps the Moon in its orbit, and the Moon pulls on the Earth with the same 2.0 × 10²⁰ N.

### A consistency check with weight

For a 1.0 kg mass at the Earth's surface, F = GMm/R² = 6.67 × 10⁻¹¹ × 5.97 × 10²⁴ × 1.0/(6.37 × 10⁶)² = 9.81 N, the familiar weight of 1 kg. Newton's law and the everyday weight are the same force described in two ways.

## Resultant force from two bodies

Gravitational forces are vectors. When two bodies pull on one object, find each force separately, then add them as vectors. Along a straight line, forces in opposite directions subtract.

### Worked example 2: a spacecraft between the Earth and the Moon

A 1500 kg spacecraft lies on the line joining the centres of the Earth and the Moon, 3.00 × 10⁸ m from the Earth's centre and 0.84 × 10⁸ m from the Moon's centre. Find the resultant gravitational force on it.

```
from the Earth: F = 6.67 × 10⁻¹¹ × 5.97 × 10²⁴ × 1500 / (3.00 × 10⁸)² = 6.64 N, towards the Earth
from the Moon:  F = 6.67 × 10⁻¹¹ × 7.35 × 10²² × 1500 / (0.84 × 10⁸)² = 1.04 N, towards the Moon
resultant = 6.64 − 1.04 = 5.6 N, towards the Earth
```

Although the spacecraft is much closer to the Moon, the Earth's far larger mass still wins. Somewhere closer to the Moon the two forces are equal and the resultant is zero; finding that point is a field-strength problem, treated in the [gravitational field strength study guide](/resources/oxfordaqa-a-level-physics-9630-gravitational-field-strength-oxfordaqa/).

If the two forces are not along one line, add them with a vector diagram or by resolving into components, exactly as for any other forces.

## Testing the inverse square law

An inverse square law means F × r² stays constant. Two quick tests work on data:

- **Product test**: calculate F × r² for each row of results. If it is constant within experimental uncertainty, F ∝ 1/r².
- **Ratio test**: if r increases by a factor k, F should fall by k². Tripling r should divide F by 9.

A graph of F against 1/r² is a straight line through the origin with gradient Gm₁m₂. A graph of log F against log r is a straight line of gradient −2.

### Worked example 3: checking data

A table gives F = 36.0 N at r = 2.0 × 10⁷ m and F = 4.0 N at r = 6.0 × 10⁷ m for the force on a probe near a planet.

```
F × r² (first)  = 36.0 × (2.0 × 10⁷)² = 1.44 × 10¹⁶ N m²
F × r² (second) = 4.0 × (6.0 × 10⁷)² = 1.44 × 10¹⁶ N m²
```

The products agree, so the data fit an inverse square law. The ratio test agrees too: r tripled and F fell by a factor of 9.

## Common mistakes

- Using the distance between surfaces instead of between centres.
- Squaring only the number and not the power of ten in r.
- Saying the larger mass exerts the larger force. The forces in the pair are equal and opposite.
- Writing the unit of G as N kg⁻² or N m kg⁻².
- Adding the two forces in Worked example 2 instead of subtracting them.
- Confusing G, a universal constant, with g, the field strength at a place.

## Exam technique

- **State** Newton's law: "the force between two point masses is proportional to the product of the masses and inversely proportional to the square of their separation". Both proportionalities are needed for the mark.
- **Calculate**: write the equation, convert all distances to metres from the centres, and give the direction of the force if asked.
- **Show that**: give the final value to at least one more significant figure than the value in the question.
- **Explain** why gravity is unnoticed between everyday objects: refer to the small value of G and compare with weight.

## Next steps

Condense the page with the [Newton's gravitational law revision notes](/resources/oxfordaqa-a-level-physics-9630-newtons-gravitational-law-revision-notes/) and test yourself with the [Newton's gravitational law practice questions](/resources/oxfordaqa-a-level-physics-9630-newtons-gravitational-law-practice/). The next subtopic is in the [gravitational field strength study guide](/resources/oxfordaqa-a-level-physics-9630-gravitational-field-strength-oxfordaqa/), and circular motion is revised in the [circular motion study guide](/resources/oxfordaqa-a-level-physics-circular-motion-angular-speed-and-centripetal-force/).
