---
title: "OxfordAQA International AS and A-level Physics: Refraction, total internal reflection and optical fibres (9630) -- Revision Notes"
seoTitle: "OxfordAQA A-level Physics Refraction Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on refractive index, Snell's law, critical angle, step index fibres, dispersion and absorption for OxfordAQA Physics."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-12
featured: false
reviewNote: "2026-11-08: reviewed by iftikhar-azeemi."
---

These notes condense section 3.5.8 (Refraction at a plane surface) of the OxfordAQA International AS and A-level Physics (9630) specification, Version 4.4. This is shared AS and A-level content. The [study guide](/resources/oxfordaqa-a-level-physics-refraction-total-internal-reflection-and-optical-fibres/). Check what to revise with the [free diagnostics](/diagnostics/), tick the [printable checklist](/checklists/oxfordaqa/a-level/physics/) and see the [course hub](/boards/oxfordaqa/a-level/physics/). Test yourself with the [practice questions](/resources/oxfordaqa-a-level-physics-refraction-total-internal-reflection-and-optical-fibres-practice/).

## Key definitions and equations

| Quantity | Statement | Notes |
|---|---|---|
| Refractive index | n = c / cs | c is the speed in a vacuum, cs the speed in the substance. No unit. n of air is approximately 1 |
| Snell's law | n1 sin θ1 = n2 sin θ2 | Angles from the normal. Medium 1 is the one the light leaves |
| Critical angle | sin θc = n2 / n1 | Needs n1 greater than n2. For air as medium 2, sin θc = 1/n1 |
| Wave speed | cs = fλ | f stays the same at a boundary |
| Wavelength in a medium | λ = λ(air) / n | Follows from constant f |

Constants used in these notes: c = 3.00 × 10⁸ m s⁻¹, n for air = 1.

## Refraction: method in steps

1. Draw the boundary and the normal. Mark both angles from the normal.
2. Label the medium the light leaves as 1 and the one it enters as 2.
3. Write n1 sin θ1 = n2 sin θ2 and rearrange for the unknown.
4. Check the direction: into a denser medium the ray bends towards the normal.
5. Quote the answer with a sensible number of significant figures.

**Reminder.** Air to a plastic with n = 1.47, incidence 35°. sin θ2 = sin 35° / 1.47 = 0.3902, so θ2 = 23.0°.

**Must-know distinctions**

| Property at a boundary | Changes? |
|---|---|
| Frequency | No |
| Speed | Yes, cs = c/n |
| Wavelength | Yes, shorter in the denser medium |
| Direction | Yes, unless incidence is along the normal |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-physics-electromagnetic-spectrum-refraction-and-total-internal--03-refraction-bending.webp" width="900" height="1070" alt="Top: light in air meets plastic (n = 1.47) at 38.0 degrees and refracts to 24.8 degrees, bending towards the normal. Bottom: light in glass (n = 1.50) meets water (n = 1.33) at 35.0 degrees and refracts to 40.3 degrees, bending away. Angles are from the normal." loading="lazy">
  <figcaption>Into a higher n the ray bends towards the normal; into a lower n it bends away.</figcaption>
</figure>


## Total internal reflection: method in steps

1. Check that the light is going from higher n to lower n. If not, there is no TIR.
2. Calculate θc from sin θc = n2/n1.
3. Compare the angle of incidence with θc. A larger angle gives TIR; a smaller one gives mostly refraction with a weak reflection; an equal one makes the refracted ray graze the surface.
4. For a ray at exactly θc, state that the angle of refraction is 90°.

**Reminder.** Glass n = 1.50 against air: sin θc = 1/1.50, so θc = 41.8°. Against water (n = 1.33): sin θc = 1.33/1.50 = 0.8867, so θc = 62.5°. A ray at 45° is totally reflected at a glass-air boundary but not at a glass-water boundary.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-physics-electromagnetic-spectrum-refraction-and-total-internal--05-refractive-index-practical.webp" width="900" height="1230" alt="A ray is traced through a rectangular block using marked points, then i and r are measured at the entry point. A graph of sin i against sin r is a straight line through the origin; a rise of 0.60 over a run of 0.40 gives a gradient of 1.50 = n." loading="lazy">
  <figcaption>Plot sin i against sin r; the gradient is the refractive index.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-physics-electromagnetic-spectrum-refraction-and-total-internal--06-critical-angle.webp" width="900" height="1215" alt="A ray along a radius of a semi-circular glass block (n = 1.52) meets the flat face at 30 degrees (most light refracts out at 49.5 degrees), at the critical angle 41.1 degrees (refracted ray along the surface) and at 55 degrees (total internal reflection)." loading="lazy">
  <figcaption>Beyond the critical angle all the light is reflected back into the denser medium.</figcaption>
</figure>


## Step index optical fibre

| Part | Property | Function |
|---|---|---|
| Core | Higher n (n1), thin | Carries the light pulses |
| Cladding | Lower n (n2) | Allows TIR at the core boundary; protects the core surface; stops cross-talk between fibres; adds strength |

- Rays hitting the core boundary at more than θc stay in the core by repeated TIR.
- Only step index fibres are on the specification: n changes abruptly from n1 to n2.
- Rays within (90° − θc) of the axis are guided.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-physics-electromagnetic-spectrum-refraction-and-total-internal--07-fibre-guiding.webp" width="900" height="1120" alt="In a step index fibre (core 1.55, cladding 1.50, critical angle 75.4 degrees) a ray at 80 degrees to the boundary is totally internally reflected along the core; one at 70 degrees leaks into the cladding. Only rays within 14.6 degrees of the axis are guided. The cladding gives the lower index needed for TIR and also protects the core, stops cross-talk and adds strength." loading="lazy">
  <figcaption>A lower-index cladding makes total internal reflection keep light in the core.</figcaption>
</figure>


## Pulse broadening and dispersion

| Type | Cause | Reduced by |
|---|---|---|
| Modal dispersion | Different paths (modes) take different times | Narrow core (single mode); closer n1 and n2 |
| Material dispersion | n depends on wavelength, so wavelengths travel at different speeds | Narrow range of wavelengths, such as a laser |

- Pulse broadening means the output pulse is longer than the input pulse.
- Consequence: pulses overlap, so they must be sent further apart. The maximum data rate falls as the broadening increases.
- Modal path times for length L: axial L n1/c; at the critical angle L n1²/(c n2).

**Reminder.** L = 5.0 km, n1 = 1.50, n2 = 1.47. Axial time 2.50 × 10⁻⁵ s. Critical-angle ray 2.55 × 10⁻⁵ s. Spread 5.1 × 10⁻⁷ s.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-physics-electromagnetic-spectrum-refraction-and-total-internal--08-modal-dispersion.webp" width="900" height="1040" alt="In a 3.0 km fibre the axial ray takes 15.50 microseconds and the critical-angle zigzag ray, with path L n1/n2, takes 16.02 microseconds. It arrives 517 ns later, so the received pulse is wider and lower. A single-mode narrow core or smaller n1 - n2 reduces the effect." loading="lazy">
  <figcaption>Rays on different paths arrive at different times, so pulses broaden.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-physics-electromagnetic-spectrum-refraction-and-total-internal--09-dispersion-absorption.webp" width="900" height="1085" alt="Two light pulses are sent. After dispersion each is wider and lower and they merge into one hump. After absorption over 5.0 km at 85 percent per km each keeps its width but only 0.85^5 = 44 percent of the power remains. Regenerators restore shape and strength." loading="lazy">
  <figcaption>Dispersion lengthens pulses; absorption shrinks them.</figcaption>
</figure>


## Absorption

- Energy is absorbed and scattered along the fibre, so the pulse gets smaller (lower power and amplitude).
- Absorption does not lengthen a pulse. Dispersion does.
- A constant fraction of power is lost per unit length, so the fraction remaining after x km is (fraction passed per km) raised to the power x.
- Consequence: regenerators or amplifiers are needed at intervals on long links. A regenerator restores both size and shape.
- Reduced by purer glass and by using light the glass absorbs weakly.

## Worked reminders

**Speed and wavelength.** Light of frequency 5.00 × 10¹⁴ Hz has wavelength c/f = 3.00 × 10⁸ / 5.00 × 10¹⁴ = 600 nm in air. In glass of n = 1.50 the frequency is unchanged, the speed is 2.00 × 10⁸ m s⁻¹ and the wavelength is 400 nm.

**Finding n from a boundary.** Light in glass of n = 1.60 meets air. At the critical angle sin θc = 1/1.60 = 0.625, so θc = 38.7°. Any ray in the glass meeting the surface at more than 38.7° stays inside.

**Rays guided in the core.** A ray must meet the core-cladding boundary at more than θc, so it must lie within (90° − θc) of the axis. For core n = 1.56 and cladding n = 1.52, θc = 77.0° and the limit is 13.0° to the axis.

**Pulse spread.** Time difference = (L n1 / c)(n1/n2 − 1). It grows with length and with the index difference, so a short, single-mode fibre has the smallest spread.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-physics-electromagnetic-spectrum-refraction-and-total-internal--04-refraction-wavelength.webp" width="900" height="950" alt="Wavefronts are 589 nm apart in air and 378 nm apart in glass of index 1.56, so the ray bends towards the normal. Frequency is unchanged, speed falls from c to c/n = 1.92x10^8 m/s and wavelength shrinks by the factor n." loading="lazy">
  <figcaption>Frequency stays fixed, so slower light has a shorter wavelength.</figcaption>
</figure>


## Practical: finding n with a block

1. Place the block on paper and draw round it. Draw a normal at the point of entry.
2. Direct a thin ray at the point of entry at a measured angle of incidence i.
3. Mark the emerging ray, remove the block, join the points, and measure the angle r inside from the normal.
4. Repeat for at least six values of i.
5. Graph sin i (y-axis) against sin r (x-axis); the slope equals n of the block, with air as medium 1.
6. Use points far apart on the line to find the gradient.

Check that the ray stays thin and sharp, and that the normal is at 90° to the surface. Cut the uncertainty by drawing a thin ray, marking points as far apart as possible and using a fine-scale protractor.

## Quick self-test

1. The speed of light in a liquid is 2.25 × 10⁸ m s⁻¹. Find n.
2. Light of wavelength 640 nm in air enters glass of n = 1.60. Find its wavelength in the glass.
3. A ray in air meets a liquid (n = 1.36) at 50° to the normal. Find the angle of refraction.
4. Find the critical angle for a glass-air boundary when n = 1.62.
5. State the two conditions for total internal reflection.
6. A core has n = 1.50 and the cladding has n = 1.45. Find the critical angle.
7. Name the type of dispersion caused by rays taking different path lengths.
8. Why does a laser source reduce material dispersion more than an LED?
9. A fibre passes 90% of the power in each kilometre. What fraction remains after 3.0 km?
10. Give one effect of absorption and one effect of pulse broadening on a signal.

### Answers

1. n = 3.00 × 10⁸ / 2.25 × 10⁸ = **1.33**.
2. λ = 640 / 1.60 = **400 nm**.
3. sin θ2 = sin 50° / 1.36 = 0.5633, so θ2 = **34.3°**.
4. sin θc = 1/1.62 = 0.6173, so θc = **38.1°**.
5. The light travels from a more dense to a less dense medium **and** the angle of incidence exceeds the critical angle.
6. sin θc = 1.45/1.50 = 0.9667, so θc = **75.2°**.
7. **Modal dispersion**.
8. A laser emits a very narrow range of wavelengths, so there is little difference in speed within the pulse. An LED emits a wide range.
9. 0.90³ = **0.729**, so 73%.
10. Absorption: the signal power falls, so it may become too weak to detect. Pulse broadening: pulses overlap, which limits the rate at which pulses can be sent.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-physics-electromagnetic-spectrum-refraction-and-total-internal--01-em-spectrum.webp" width="900" height="1174" alt="Seven bars on a log wavelength scale from 10^3 m to 10^-12 m show radio waves to gamma rays; visible light is a very thin band. All travel at 3.00x10^8 m/s in a vacuum so wavelength = c/f: 98 MHz gives 3.06 m, 2.45 GHz gives 0.122 m and 3.0x10^18 Hz gives 1.0x10^-10 m." loading="lazy">
  <figcaption>The spectrum on one wavelength scale, with lambda = c / f examples.</figcaption>
</figure>


## Where marks are usually lost

- Taking angles from the boundary line instead of the normal.
- Swapping n1 and n2 in the critical angle formula, giving a sine above 1.
- Claiming TIR for light going from a less dense to a denser medium.
- Saying frequency changes on refraction.
- Giving the function of the cladding without mentioning its lower refractive index.
- Confusing modal and material dispersion, or saying absorption makes pulses longer.
- Describing a bent ray with no stated direction relative to the normal.
- Rounding the angle too early in a chain of calculations.
- Leaving the pulse broadening argument as "the signal gets blurred" without saying the pulses overlap and limit the data rate.

## Frequently asked questions

**What is the refractive index of a material?**
The refractive index is n = c/cs, the speed of light in a vacuum divided by the speed of light in the material. The refractive index of air is approximately 1.

**How do you calculate the critical angle?**
Use sin θc = n2/n1, where n1 is the refractive index of the denser medium the light is in and n2 is that of the less dense medium beyond the boundary.

**Which way does light bend when it enters a denser medium?**
It bends towards the normal, so the angle of refraction is smaller than the angle of incidence. Entering a less dense medium, it bends away from the normal.

**What is Snell's law?**
Snell's law states that n1 sin θ1 = n2 sin θ2 at a boundary, with both angles measured from the normal. It is used to find angles, refractive indices and speeds.

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), Version 4.4, for International AS and A-level exams May/June 2020 onwards, published by OxfordAQA. Section 3.5.8 Refraction at a plane surface.
