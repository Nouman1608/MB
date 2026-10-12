---
title: "OxfordAQA International AS and A-level Physics: Refraction, total internal reflection and optical fibres (9630)"
seoTitle: "OxfordAQA A-level Physics Refraction and Fibres Guide"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Refraction, total internal reflection and optical fibres"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
stage: "AS"
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
order: 111
syllabusTopics:
  - qualification: "a-level"
    topic: "oscillations-and-waves-oxfordaqa-alevel"
    subtopic: "refraction-at-a-plane-surface-oxfordaqa"
description: "Study guide to refractive index, Snell's law, total internal reflection, step index fibres, dispersion and absorption for OxfordAQA Physics (9630)."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

This guide follows the OxfordAQA International AS and A-level Physics (9630) specification, Version 4.4, for exams from May/June 2020 onwards. It covers section 3.5.8 (Refraction at a plane surface), which is shared International AS and A-level content, so it is relevant to both qualifications. Read it with the [course hub](/boards/oxfordaqa/a-level/physics/) and tick off each point on the [printable checklist](/checklists/oxfordaqa/a-level/physics/).

Companion pages: the [revision notes](/resources/oxfordaqa-a-level-physics-refraction-total-internal-reflection-and-optical-fibres-revision-notes/) and the [practice questions](/resources/oxfordaqa-a-level-physics-refraction-total-internal-reflection-and-optical-fibres-practice/). To find your weak spots first, try the [free diagnostics](/diagnostics/).

## What 3.5.8 asks you to do

| Specification statement | What you must be able to do |
|---|---|
| Refractive index n = c/cs | Define it and use it; recall that n for air is approximately 1 |
| Snell's law, n1 sin θ1 = n2 sin θ2 | Calculate angles, refractive indices and speeds at a boundary |
| Total internal reflection, sin θc = n2/n1 | State the conditions and calculate the critical angle |
| Simple treatment of fibre optics, including the function of the cladding | Explain how a signal travels along a fibre |
| Step index fibres only | Describe the refractive index profile of core and cladding |
| Material and modal dispersion | Explain each and how to reduce it |
| Pulse broadening and absorption | Explain the principles and consequences for a signal |

## Refractive index

Light travels fastest in a vacuum, at c = 3.00 × 10⁸ m s⁻¹. In a transparent substance it travels at a lower speed cs. The **refractive index** of the substance is

n = c / cs

Because cs is always less than c, n is always greater than 1. Air is only slightly different from a vacuum, so remember that n for air is approximately 1. A material with a larger n is optically denser: light travels more slowly in it. n has no unit, because it is a ratio of two speeds.

**Worked example 1.** A glass has n = 1.56. Find the speed of light in it.

cs = c / n = 3.00 × 10⁸ / 1.56 = 1.92 × 10⁸ m s⁻¹.

When light crosses a boundary its frequency does not change, because the source sets the frequency. The speed changes, so the wavelength changes too, since cs = fλ. In a denser medium the wavelength is shorter.

**Worked example 2.** Light of wavelength 589 nm in air enters the glass above (n = 1.56). Since f is constant and cs = c/n, the wavelength in the glass is λ = 589 / 1.56 = 378 nm (3 s.f.).

## Snell's law

When light crosses the boundary between two transparent media, it changes direction unless it meets the boundary along the normal. Angles are always measured from the **normal**, the line at 90° to the surface, never from the surface itself.

n1 sin θ1 = n2 sin θ2

Here n1 and θ1 belong to the medium the light is leaving, n2 and θ2 to the medium it enters. Three consequences follow:

- Entering a denser medium (n2 > n1), the ray bends towards the normal and θ2 < θ1.
- Entering a less dense medium (n2 < n1), the ray is deviated away from the normal.
- A ray travelling along the normal (θ1 = 0) passes straight through without bending, but its speed and wavelength still change.

Some light is always reflected at the boundary as well as refracted. In a ray diagram, the reflected ray leaves at an angle equal to the angle of incidence.

**Worked example 3.** A ray in air strikes a liquid at 52° to the normal and refracts at 33°. Find n for the liquid, taking n for air as 1.

1 × sin 52° = n sin 33°, so n = sin 52° / sin 33° = 0.7880 / 0.5446 = 1.45.

**Worked example 4.** A ray in glass (n = 1.52) meets a boundary with water (n = 1.33) at 40° to the normal. Find the angle in the water.

1.52 × sin 40° = 1.33 × sin θ2, so sin θ2 = 1.52 × 0.6428 / 1.33 = 0.7346, giving θ2 = 47.3°.

The ray bends away from the normal because water is less dense than the glass. Check the direction of the bend every time: it catches wrong signs and upside-down ratios.

### Finding n in the laboratory

Shine a narrow ray through a rectangular block, measure the angle of incidence i and the angle of refraction r for a range of values, and plot sin i against sin r. Snell's law makes the graph a straight line through the origin whose gradient is n of the block (with air as medium 1). A graph uses every reading and shows an outlier; one pair of angles does not. Measure the angles from the normal drawn at the point of entry, and use a thin ray so the angle is read to a small uncertainty.

## Total internal reflection

When light travels towards a **less** dense medium (n1 > n2), the refracted ray bends away from the normal. As θ1 increases, θ2 reaches 90° and the refracted ray runs along the boundary. The angle of incidence at which this happens is the **critical angle** θc. Setting θ2 = 90° (so sin θ2 = 1) in Snell's law gives

sin θc = n2 / n1

For a boundary with air, n2 = 1 and sin θc = 1/n1. Above the critical angle no light is refracted and all of it is reflected: **total internal reflection** (TIR). Two conditions must both be met:

1. The light travels from the denser medium towards the less dense medium (n1 > n2).
2. The angle of incidence exceeds θc.

At exactly the critical angle the refracted ray grazes the surface. If n1 < n2, sin θc would exceed 1 and there is no critical angle.

**Worked example 5.** Find the critical angle for diamond (n = 2.42) in air.

sin θc = 1 / 2.42 = 0.4132, so θc = 24.4°. This small angle is why a cut diamond traps so much light.

**Worked example 6.** A fibre core has n = 1.55 and its cladding has n = 1.50. Find the critical angle at the boundary.

sin θc = 1.50 / 1.55 = 0.9677, so θc = 75.4°. Rays must meet the boundary at more than 75.4° to the normal, so they must travel within 90° − 75.4° = 14.6° of the fibre axis.

Because the critical angle depends on the ratio n2/n1, the same block can show TIR against air and not against water: n2 is larger for water, so θc is larger.

## Optical fibres

A **step index** optical fibre has two layers, and its refractive index changes in one step at the boundary between them:

- A thin **core** of glass or plastic with refractive index n1, which carries the light.
- A surrounding layer of **cladding** with a slightly lower refractive index n2.

The specification limits you to step index fibres. A pulse of light enters the core at one end. Rays that meet the core-cladding boundary at more than θc undergo TIR again and again, and are guided along the fibre, even round gentle bends. Fibres carry telephone, internet and television signals as pulses of light.

The cladding has several functions:

- Its lower refractive index makes TIR possible at the core boundary. Without cladding, TIR would occur only against the air outside.
- It protects the core surface from scratches and dirt, where light would otherwise escape.
- It stops light leaking from one fibre into another when fibres touch, so signals do not cross over (cross-talk).
- It gives the fibre strength.

## Pulse broadening: dispersion

A short pulse put into a fibre arrives longer than it started. This is **pulse broadening**. If the pulses are close together they overlap at the far end and the receiver cannot tell them apart, so the data rate is limited. Two causes are on the specification.

### Modal dispersion

Light can follow different paths (modes) in a wide core. A ray along the axis takes the shortest route. A ray that zigzags at just above the critical angle travels a longer path in the same fibre, at the same speed, and takes longer. Pulse energy arrives spread over a range of times.

For a fibre of length L, the axial ray takes L n1/c. The most oblique guided ray travels a path L/sin θc = L n1/n2 and takes L n1² / (c n2). The spread is the difference between these times.

**Worked example 7.** A step index fibre is 3.0 km long, with core n = 1.55 and cladding n = 1.50. Find the difference in transit time between the axial ray and the ray at the critical angle.

Axial time = 3000 × 1.55 / 3.00 × 10⁸ = 1.550 × 10⁻⁵ s.
Oblique time = 1.550 × 10⁻⁵ × (1.55 / 1.50) = 1.602 × 10⁻⁵ s.
Difference = 5.17 × 10⁻⁷ s, which is 517 ns.

To reduce modal dispersion, use a very narrow core so that only the axial path is available (a single-mode fibre), or reduce the difference between n1 and n2.

### Material dispersion

The refractive index of glass depends slightly on wavelength, so different wavelengths travel at different speeds. A source that emits a spread of wavelengths, such as an LED, sends different wavelengths of the same pulse along at different speeds, and the pulse spreads. Using a source with a very narrow range of wavelengths, such as a laser, reduces material dispersion. The effect is present even in a single-mode fibre, where modal dispersion has been removed.

## Absorption

As light travels along a fibre, the glass absorbs some of the energy and some is scattered. The pulse becomes weaker, so its power and amplitude fall. Absorption does not change the length of a pulse the way dispersion does; it reduces its size. In many fibres a constant fraction of the power is lost per kilometre.

**Worked example 8.** A fibre transmits 85% of the power entering each kilometre. What fraction of the input power reaches the end of 5.0 km?

Fraction = 0.85⁵ = 0.444, so 44% remains.

The consequence is that over long distances the signal falls below what the receiver can detect. Signals are therefore boosted at intervals along a long link by regenerators or amplifiers. A regenerator also restores the shape of broadened pulses, so it deals with both absorption and dispersion. Using light of a wavelength that the glass absorbs weakly, and glass of high purity, reduces absorption.

## Common errors

- Taking angles from the surface of the boundary instead of the normal.
- Putting n1 and n2 the wrong way round in sin θc = n2/n1, which can give a sine larger than 1.
- Claiming TIR when light enters a denser medium. TIR needs light to approach a less dense medium.
- Saying the frequency changes when light enters glass. It stays the same; speed and wavelength change.
- Writing that the cladding "protects against heat" or "keeps light in" with no mention of its lower refractive index.
- Mixing up modal dispersion (different paths, one wavelength) with material dispersion (different wavelengths, different speeds).
- Treating absorption as the cause of pulse broadening. Absorption lowers the power; dispersion lengthens the pulse.

## Next steps

Condense this section with the [revision notes](/resources/oxfordaqa-a-level-physics-refraction-total-internal-reflection-and-optical-fibres-revision-notes/), then test yourself with the [practice questions](/resources/oxfordaqa-a-level-physics-refraction-total-internal-reflection-and-optical-fibres-practice/). If the graph method needs uncertainty work, revisit [measurements and their errors](/resources/a-level-oxfordaqa-physics-measurements-and-their-errors/).

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), Version 4.4, for International AS and A-level exams May/June 2020 onwards, published by OxfordAQA. Section 3.5.8 Refraction at a plane surface.
