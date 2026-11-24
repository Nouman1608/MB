---
title: "Cambridge A Level Physics (9702): Gravitational field of a point mass -- Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Gravitational fields"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 13.3
syllabusTopics:
  - qualification: "a-level"
    topic: "a-gravitational-fields"
    subtopic: "a-gravitational-field-of-a-point-mass"
description: "Revision notes for Cambridge A Level Physics 9702 13.3: deriving g = GM/r², inverse square ratios, g nearly constant near the surface, traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

Subtopic 13.3 of Cambridge International AS & A Level Physics 9702 (2025–2027) covers the derivation and use of g = GM/r², and why g is approximately constant close to the Earth's surface. These notes are condensed for recall. For full explanations and worked examples, read the [study guide for this subtopic](/resources/cambridge-a-level-physics-9702-a-gravitational-field-of-a-point-mass/); to apply the ideas, try the [practice questions for this subtopic](/resources/cambridge-a-level-physics-9702-a-gravitational-field-of-a-point-mass-practice/).

## The derivation in four lines

```
force on test mass m at distance r from M:   F = GMm / r²
definition of field strength:                g = F / m
substitute:                                  g = (GMm / r²) / m
test mass cancels:                           g = GM / r²   (towards M)
```

- Valid for a **point mass**, or **outside a uniform sphere** with r from the **centre**.
- g depends only on **M** and **r**, not on the test mass.

## Using g = GM/r²

| Method | Use when |
|---|---|
| g = GM/r² directly | G, M and r are given |
| g = g₀(R/r)² | Surface value g₀ and radius R are given; no G needed |
| GM = g₀R² | You need GM for another equation (orbit speed, potential) |
| g ∝ 1/r² ratios | Comparing two distances from the same body |

## Inverse square ratios

| r | g |
|---|---|
| R | g₀ |
| 2R | g₀/4 |
| 3R | g₀/9 |
| √2 R ≈ 1.41R | g₀/2 |

- g against r (from r = R): steep fall, then flattens towards zero.
- g against 1/r²: straight line through the origin, **gradient GM**.

## Near the surface

```
g / g₀ = (R / (R + h))²       fractional decrease ≈ 2h / R
```

- h = 10 m: change ~3 × 10⁻⁶ (negligible).
- h = 1 km: change ~0.03%.
- h = 10 km: change ~0.3%.
- h = 400 km: g ≈ 8.7 N kg⁻¹ (still about 89% of g₀).

**Explanation for the mark:** the change in height is very small compared with the radius of the Earth, so r, and therefore g = GM/r², is almost unchanged.

## Two masses: the zero-field point

```
GM₁ / x² = GM₂ / (d − x)²    →    x / (d − x) = √(M₁ / M₂)
```

- Lies **nearer the smaller mass**; G cancels.
- Earth–Moon: about 0.90 of the way from the Earth to the Moon (3.46 × 10⁸ m from the Earth's centre).

## Link to orbits

For an orbiting body, gravity is the only force, so its centripetal acceleration equals g at that radius: v²/r = GM/r².

## Numbers worth recognising

| Location | g / N kg⁻¹ |
|---|---|
| Earth's surface | 9.81 |
| Surface of Mars (M = 6.42 × 10²³ kg, R = 3.39 × 10⁶ m) | 3.73 |
| Earth's field at the Moon's distance | 2.70 × 10⁻³ |
| Geostationary radius | 0.223 |

## Key terms

| Term | Meaning |
|---|---|
| Point mass | Mass treated as concentrated at a point; a uniform sphere is one for outside points |
| g₀ | Field strength at a planet's surface |
| Inverse square law | A quantity proportional to 1/r² |
| Zero-field (neutral) point | Point where fields from two bodies are equal and opposite |
| Radial field | Field directed along radii towards the centre of a sphere |

## Exam traps

- Using height instead of distance from the centre.
- "Deriving" g = GM/r² by writing it down, without g = F/m and the cancelling mass.
- Using g = GM/r² inside a planet.
- Treating g at the top of a mountain as noticeably smaller: the change is a fraction of a percent.
- Explaining constant g as "because the Earth is large" without comparing h with R.
- Forgetting the square root when locating a zero-field point.
- Adding the fields of two bodies on opposite sides of a point instead of subtracting.

## Self-test

1. Derive g = GM/r² from Newton's law and the definition of field strength.
2. A planet has surface field 12.5 N kg⁻¹. What is g at a distance of 2R from its centre?
3. At what distance from the Earth's centre is g half its surface value?
4. Calculate g at the surface of Mars using the data in the table above.
5. Why is g treated as constant in a laboratory?
6. Estimate the fractional change in g between the ground and a height of 3.2 km on Earth.
7. What is the gradient of a graph of g against 1/r²?
8. Write GM in terms of g₀ and R.
9. Two stars have masses M and 4M and are a distance d apart. How far from the smaller star is the zero-field point?
10. A satellite orbits where g = 6.0 N kg⁻¹. What is its centripetal acceleration?
11. g at the Earth's surface is 9.81 N kg⁻¹. Find g at a height of 6370 km.
12. Why does the derivation use a small test mass?

**Answers:** 1. F = GMm/r² on a test mass m; g = F/m; so g = GMm/r² ÷ m = GM/r². 2. 12.5 ÷ 4 = 3.1 N kg⁻¹. 3. r = √2 R = 9.0 × 10⁶ m. 4. g = 6.67 × 10⁻¹¹ × 6.42 × 10²³ ÷ (3.39 × 10⁶)² = 3.73 N kg⁻¹. 5. The height change is tiny compared with the Earth's radius, so r and g hardly change. 6. 2h/R = 2 × 3.2 ÷ 6370 = 1.0 × 10⁻³ (0.1%). 7. GM. 8. GM = g₀R². 9. x/(d − x) = √(M/4M) = ½, so x = d/3 from the smaller star. 10. 6.0 m s⁻² (towards the centre). 11. r = 2R, so g = 9.81 ÷ 4 = 2.45 N kg⁻¹. 12. So that its own field does not change the field being described; its mass cancels anyway.

## More resources on this topic

- [Gravitational Fields revision notes](/resources/a-physics-gravitational-fields-revision-notes/) — the whole of Topic 13
- [Practice questions for this subtopic](/resources/cambridge-a-level-physics-9702-a-gravitational-field-of-a-point-mass-practice/)
- [Gravitational potential revision notes](/resources/cambridge-a-level-physics-9702-a-gravitational-potential-revision-notes/) — subtopic 13.4
