---
title: "Cambridge A Level Physics (9702): Gravitational field of a point mass"
resourceType: "study-guides"
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
description: "A focused guide to 13.3 in Cambridge A Level Physics 9702: deriving g = GM/r², how g falls with height, why g is nearly constant near the ground, null points."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **13.3 Gravitational field of a point mass** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (A Level). The broader [Gravitational Fields study guide](/resources/a-physics-gravitational-fields/) introduces all of Topic 13 and calculates g at the Earth's surface; this page goes further into the field-strength equation itself: a derivation set out the way mark schemes reward it, how g changes with distance, a quick method that avoids G altogether, a quantitative answer to why g hardly changes near the ground, and how to find the point where two fields cancel. For quick recall use the [revision notes for this subtopic](/resources/cambridge-a-level-physics-9702-a-gravitational-field-of-a-point-mass-revision-notes/), and for exam-style questions the [practice questions for this subtopic](/resources/cambridge-a-level-physics-9702-a-gravitational-field-of-a-point-mass-practice/).

## What 13.3 asks you to do

The syllabus lists three outcomes. Candidates should be able to:

- **derive**, from Newton's law of gravitation and the definition of gravitational field, the equation **g = GM/r²** for the gravitational field strength due to a point mass
- **recall and use g = GM/r²**
- understand **why g is approximately constant for small changes in height** near the Earth's surface

The equation applies to a point mass, and, using 13.2, to any point outside a uniform sphere, with r measured from the centre.

## The derivation, step by step

A derivation question usually carries two or three marks. Each line below is one idea; write them all.

1. Place a small test mass m at distance r from a point mass M.
2. Newton's law of gravitation gives the force on it: F = GMm/r².
3. Gravitational field strength is defined as force per unit mass: g = F/m.
4. Substitute: g = (GMm/r²) ÷ m.
5. The test mass cancels: **g = GM/r²**, directed towards M.

The cancellation in step 5 is the physical point: the field strength depends only on the mass creating the field and the distance from it, not on what is used to measure it. Starting from "mg = GMm/r²" without saying why is weaker, because it hides the definition of g that the syllabus asks you to use.

## How g varies with distance

g = GM/r² is an inverse square relationship. Outside a sphere of radius R with surface field strength g₀:

| Distance from centre | Field strength |
|---|---|
| R (surface) | g₀ |
| 2R | g₀ / 4 |
| 3R | g₀ / 9 |
| 10R | g₀ / 100 |

A graph of g against r, starting at r = R, is a curve that falls steeply at first and then flattens, approaching zero but never reaching it. A graph of g against 1/r² is a straight line through the origin with gradient GM, which is one way to find the mass of a planet from field measurements at different heights.

For the Earth (M = 5.97 × 10²⁴ kg, R = 6.37 × 10⁶ m):

| Height above surface | g / N kg⁻¹ |
|---|---|
| 0 | 9.81 |
| 10 km | 9.78 |
| 400 km (a low orbit) | 8.69 |
| 6370 km (r = 2R) | 2.45 |
| 35 900 km (geostationary) | 0.223 |

## A shortcut: GM = g₀R²

At the surface, g₀ = GM/R², so **GM = g₀R²**. At any distance r outside:

```
g = GM / r² = g₀ (R / r)²
```

This lets you find g at a height using only g₀ and the radius, with no need for G or M.

## Worked example 1: field strength at orbital height

Calculate the gravitational field strength 400 km above the Earth's surface, using g₀ = 9.81 N kg⁻¹ and R = 6370 km.

```
r = 6370 + 400 = 6770 km
g = g₀ (R / r)² = 9.81 × (6370 / 6770)²
g = 9.81 × 0.885 = 8.7 N kg⁻¹
```

*Annotation.* The units of R and r cancel in the ratio, so kilometres can stay as kilometres. The field at this height is still nearly 90% of the surface value: astronauts in orbit are not outside the Earth's field.

## Why g is nearly constant near the surface

The third outcome needs an explanation in words, but numbers make it convincing. For a height h above the surface:

```
g / g₀ = (R / (R + h))²
```

If h is very small compared with R, R + h is almost the same as R, so the ratio is almost 1. The fractional decrease is approximately **2h/R**.

## Worked example 2: how much does g change up a mountain?

Estimate the percentage decrease in g between sea level and an altitude of 10 km.

```
2h / R = 2 × 10 / 6370 = 3.1 × 10⁻³   →  about 0.3%
exact: (6370 / 6380)² = 0.9969          →  a decrease of 0.31%
```

*Annotation.* The written explanation the mark scheme looks for is: the change in height is very small compared with the radius of the Earth, so the distance from the centre, and hence g = GM/r², hardly changes. Over the height of a laboratory (a few metres), the change is less than one part in a million, which is why g is treated as constant in AS mechanics and why the field near the surface is drawn as uniform.

## The point where two fields cancel

Between two masses M₁ and M₂ a distance d apart, the fields point in opposite directions. At distance x from M₁ they are equal in size:

```
GM₁ / x² = GM₂ / (d − x)²
x / (d − x) = √(M₁ / M₂)
```

## Worked example 3: the Earth–Moon zero-field point

The Earth (5.97 × 10²⁴ kg) and the Moon (7.35 × 10²² kg) are 3.84 × 10⁸ m apart. Find the distance from the Earth's centre of the point between them where the resultant field is zero.

```
√(M_E / M_M) = √(5.97 × 10²⁴ / 7.35 × 10²²) = √81.2 = 9.01
x = 9.01 (d − x)   →   x = 9.01d / 10.01 = 0.900d
x = 0.900 × 3.84 × 10⁸ = 3.46 × 10⁸ m
```

*Annotation.* Taking the square root before rearranging keeps the algebra linear. The point lies 90% of the way to the Moon, closer to the smaller mass, as the field-line pattern suggests. G cancels completely, so it is not needed.

## Linking g to orbits

For a satellite in circular orbit, the only force is gravity, so its centripetal acceleration equals the field strength at its orbital radius: a = g = GM/r². Newton tested his law this way using the Moon. At the Moon's distance, g = GM/r² = 2.70 × 10⁻³ N kg⁻¹, while the Moon's centripetal acceleration from its orbit (radius 3.84 × 10⁸ m, period 27.3 days) is rω² = 2.72 × 10⁻³ m s⁻². The two agree to within the precision of the data, as the inverse square law predicts.

## Common mistakes

- **Using height above the surface for r** instead of the distance from the centre.
- **Applying g = GM/r² inside a planet.** It holds for points outside a uniform sphere only.
- **Writing "g = GM/r²" as the derivation**, without starting from F = GMm/r² and g = F/m.
- **Explaining the near-constant g with "the Earth is big"** without comparing h with R.
- **Forgetting that g is a vector** when two bodies contribute: subtract along a line, combine at right angles.
- **Halving instead of quartering** when r doubles.

## Exam technique for the command words

- **Derive** or **show that**: name the law, state the definition g = F/m, substitute and show the test mass cancelling.
- **Explain** (why g is constant near the surface): the height change is small compared with R, so r and therefore g are nearly unchanged.
- **Calculate**: decide whether a ratio (g₀(R/r)²) is quicker than GM/r²; convert heights to distances from the centre.
- **Determine** (the zero-field point): equate the two field strengths, take a square root, solve for the distance and say which body it is measured from.
- **Sketch** (g against r): start at the surface value at r = R, show g₀/4 at 2R, and a curve that approaches but does not reach zero.

## Related resources

- [Gravitational Fields study guide](/resources/a-physics-gravitational-fields/) — the whole of Topic 13
- [Gravitational field](/resources/cambridge-a-level-physics-9702-a-gravitational-field/) — the definition of g (13.1)
- [Gravitational force between point masses](/resources/cambridge-a-level-physics-9702-a-gravitational-force-between-point-masses/) — Newton's law and orbits (13.2)
- [Gravitational potential](/resources/cambridge-a-level-physics-9702-a-gravitational-potential/) — the energy description of the same field (13.4)

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
