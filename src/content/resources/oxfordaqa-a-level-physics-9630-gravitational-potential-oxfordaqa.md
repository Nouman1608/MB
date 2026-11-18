---
title: "OxfordAQA International AS and A-level Physics (9630): Gravitational potential"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.7 – Gravitational fields and satellites"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
stage: "A"
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
order: 7.03
syllabusTopics:
  - qualification: "a-level"
    topic: "gravitational-fields-and-satellites"
    subtopic: "gravitational-potential-oxfordaqa"
description: "Deeper study guide to 9630 section 3.7.3: potential and potential difference, ΔW = mΔV, V = −GM/r, equipotential spacing, graphs and g = −ΔV/Δr."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to iftikhar-azeemi (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into section **3.7.3 Gravitational potential** of the OxfordAQA International AS and A-level Physics (9630) specification. The section requires an "understanding of definition of gravitational potential including zero potential at infinity and gravitational potential difference", the work done in moving a mass, ΔW = mΔV, the potential in a radial field, V = −GM/r, "equipotential surfaces: appreciation that no work is done when moving a mass along an equipotential surface", "graphical representations of the variations of g and V with r", and V related to g by g = −ΔV/Δr. Section 3.7 is International A-level only. (The specification prints the work-done equation with a lower-case v; it means the potential difference.)

The broader [study guide to gravitational potential and orbits](/resources/oxfordaqa-a-level-physics-gravitational-potential-and-orbits-of-planets-and/) gives the definitions and the basic calculations. This page develops the graphical and conceptual side: why equipotentials spread out, how the area under a g-r graph gives a potential difference, how potentials from two bodies combine, and why zero field does not mean zero potential. Afterwards use the [gravitational potential revision notes](/resources/oxfordaqa-a-level-physics-9630-gravitational-potential-oxfordaqa-revision-notes/) and the [gravitational potential practice questions](/resources/oxfordaqa-a-level-physics-9630-gravitational-potential-oxfordaqa-practice/).

Data used, as a question would give them: G = 6.67 × 10⁻¹¹ N m² kg⁻²; Earth mass 5.97 × 10²⁴ kg and radius 6.37 × 10⁶ m, so GM(Earth) = 3.98 × 10¹⁴ N m² kg⁻¹; Moon mass 7.35 × 10²² kg; Earth-Moon distance 3.84 × 10⁸ m.

## The definition, unpacked

The gravitational potential at a point is the work done per unit mass in moving a small mass from infinity to that point.

- **Zero at infinity**: infinitely far away, a mass feels no gravitational force, so that is the natural reference.
- **Negative everywhere else**: gravity attracts, so the field does work on a mass as it falls inwards. The work done by an external agent to bring it in slowly is negative.
- **Scalar**: potential has a size and a sign but no direction.
- **Unit**: J kg⁻¹.

The gravitational potential difference between two points is the work done per unit mass in moving a mass from one to the other. Moving a mass m through a potential difference ΔV requires work ΔW = mΔV.

## Energy to escape completely

Because V is the work per kilogram measured from infinity, the energy needed to take a mass from a point right out to infinity is m × |V|. At the Earth's surface:

```
V = −GM / R = −3.98 × 10¹⁴ / 6.37 × 10⁶ = −6.25 × 10⁷ J kg⁻¹
energy to remove 1000 kg to infinity = 1000 × 6.25 × 10⁷ = 6.25 × 10¹⁰ J
```

This ignores air resistance and the Earth's rotation. It shows why the potential is often described as how deep a point is in a "potential well".

## Equipotential surfaces

An equipotential surface joins points of equal potential. Around a spherical planet they are concentric spheres. Two facts carry the marks:

1. Moving along an equipotential, ΔV = 0, so ΔW = mΔV = 0. No work is done.
2. Field lines cross equipotentials at right angles, because the force has no component along a surface of constant potential.

### Worked example 1: why equipotentials spread out

Find the radii of the equipotentials at −6.0, −5.0 and −4.0 × 10⁷ J kg⁻¹ around the Earth.

```
r = GM / |V|
V = −6.0 × 10⁷: r = 3.98 × 10¹⁴ / 6.0 × 10⁷ = 6.64 × 10⁶ m
V = −5.0 × 10⁷: r = 7.96 × 10⁶ m
V = −4.0 × 10⁷: r = 9.95 × 10⁶ m
gaps: 1.33 × 10⁶ m, then 1.99 × 10⁶ m
```

Equal steps of potential are further apart further out. Since g = −ΔV/Δr, wider spacing for the same ΔV means a weaker field, which is exactly what g = GM/r² predicts.

## The two graphs and their links

For r greater than the planet's radius:

| Graph | Shape | Feature to use |
|---|---|---|
| V against r | Negative, rising towards zero, never reaching it | The **gradient** at a point equals the size of g there |
| g against r | Positive, falling as 1/r², never reaching zero | The **area** under it between two radii equals the potential difference ΔV |

The second link follows from the first: if g is the gradient of the V-r graph, then the change in V is the area under the g-r graph.

### Worked example 2: ΔV from the area under a g-r graph

Estimate the potential difference between the Earth's surface (r = R) and r = 2R using a g-r graph, then compare with V = −GM/r.

Read g from the graph at three radii:

```
r = R:    g = 9.81 N kg⁻¹
r = 1.5R: g = 4.36 N kg⁻¹
r = 2R:   g = 2.45 N kg⁻¹
```

Use two trapezium strips, each of width R/2 = 3.185 × 10⁶ m:

```
area ≈ ½ × 3.185 × 10⁶ × (9.81 + 4.36) + ½ × 3.185 × 10⁶ × (4.36 + 2.45)
     ≈ 3.34 × 10⁷ J kg⁻¹
exact: ΔV = GM/R − GM/2R = GM/2R = 3.13 × 10⁷ J kg⁻¹
```

The trapezium estimate is about 7% too high, because the curve sags below the straight tops of the strips. More, narrower strips give a better estimate. Questions may ask you to count squares instead; the principle is the same.

### Worked example 3: gradient of a V-r graph

On a V-r graph for a planet, the tangent at r = 8.0 × 10⁶ m passes through (6.0 × 10⁶ m, −5.0 × 10⁷ J kg⁻¹) and (1.0 × 10⁷ m, −3.0 × 10⁷ J kg⁻¹).

```
gradient = (−3.0 × 10⁷ − (−5.0 × 10⁷)) / (1.0 × 10⁷ − 6.0 × 10⁶)
         = 2.0 × 10⁷ / 4.0 × 10⁶ = 5.0 J kg⁻¹ m⁻¹
g = −ΔV/Δr = −5.0 N kg⁻¹
```

The size of the field is 5.0 N kg⁻¹, and the minus sign shows it points towards decreasing r, towards the planet. As a check, GM = gr² = 5.0 × (8.0 × 10⁶)² = 3.2 × 10¹⁴ N m² kg⁻¹, so V at that radius should be −3.2 × 10¹⁴/8.0 × 10⁶ = −4.0 × 10⁷ J kg⁻¹, which is where the tangent touches the curve.

## Potentials from two bodies add as numbers

Because potential is a scalar, the potential at a point due to two bodies is the simple sum of the two potentials, each negative. There are no directions to resolve.

### Worked example 4: potential at the Earth-Moon neutral point

The neutral point, where the two fields cancel, lies 3.46 × 10⁸ m from the Earth's centre and 3.8 × 10⁷ m from the Moon's centre.

```
V(Earth) = −3.98 × 10¹⁴ / 3.46 × 10⁸ = −1.15 × 10⁶ J kg⁻¹
V(Moon)  = −6.67 × 10⁻¹¹ × 7.35 × 10²² / 3.8 × 10⁷ = −1.3 × 10⁵ J kg⁻¹
V(total) = −1.28 × 10⁶ J kg⁻¹
```

The field there is zero, but the potential is not. g = −ΔV/Δr says that zero field means the potential is not changing at that point along the line: the V graph is at a peak between the two wells, not at zero. A mass placed there still needs energy to escape to infinity.

## Common mistakes

- Giving potential as a positive number, or forgetting that it rises towards zero.
- Defining potential without "per unit mass" or without "from infinity".
- Treating potential as a vector and resolving it.
- Taking the gradient of a g-r graph, or the area under a V-r graph, when the reverse is meant.
- Assuming zero field means zero potential.
- Using mgh for large changes in height, where g is not constant.

## Exam technique

- **Define** gravitational potential: work done per unit mass in moving a small mass from infinity to the point.
- **Explain** why potential is negative: the zero is at infinity and gravity is attractive, so work must be done to move a mass away to infinity.
- **Use a graph**: say whether you are finding a gradient or an area, and show the values read off.
- **Explain** equipotentials: no work along them, field lines at right angles, spacing increasing outwards for equal steps of V.

## Next steps

Condense the page with the [gravitational potential revision notes](/resources/oxfordaqa-a-level-physics-9630-gravitational-potential-oxfordaqa-revision-notes/) and test yourself with the [gravitational potential practice questions](/resources/oxfordaqa-a-level-physics-9630-gravitational-potential-oxfordaqa-practice/). The field-strength ideas used here are in the [gravitational field strength study guide](/resources/oxfordaqa-a-level-physics-9630-gravitational-field-strength-oxfordaqa/), and satellite energy is continued in the [orbits of planets and satellites study guide](/resources/oxfordaqa-a-level-physics-9630-orbits-of-planets-and-satellites-oxfordaqa/).
