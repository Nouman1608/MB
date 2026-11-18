---
title: "OxfordAQA International AS and A-level Physics (9630): Diffraction"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.5 – Oscillations and waves"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
stage: "AS"
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
order: 5.07
syllabusTopics:
  - qualification: "a-level"
    topic: "oscillations-and-waves-oxfordaqa-alevel"
    subtopic: "diffraction-oxfordaqa-alevel"
description: "Deeper study guide to 9630 section 3.5.7 diffraction: single-slit patterns, central maximum width, d sin θ = nλ, overlapping spectra and grating uses."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into section **3.5.7 Diffraction** of the OxfordAQA International AS and A-level Physics (9630) specification. The section covers the "appearance of the diffraction pattern from a single slit using monochromatic and white light", a "qualitative treatment of the variation of the width of the central diffraction maximum with wavelength and slit width", the "plane transmission diffraction grating at normal incidence" with the "derivation of d sin θ = nλ", and "applications of diffraction gratings". The intensity-angle graph is not required, and use of the spectrometer will not be tested. It is shared AS and A-level content.

The broader [study guide to interference and diffraction with double slits and gratings](/resources/oxfordaqa-a-level-physics-interference-and-diffraction-double-slits-and-gratings/) sets out the basic results. This page adds what the harder questions ask for: explaining the trends in the single-slit pattern, finding a grating spacing from measurements on both sides, overlapping orders with white light, and how a grating separates close wavelengths. Afterwards use the [diffraction revision notes](/resources/oxfordaqa-a-level-physics-9630-diffraction-oxfordaqa-alevel-revision-notes/) and the [diffraction practice questions](/resources/oxfordaqa-a-level-physics-9630-diffraction-oxfordaqa-alevel-practice/).

## What diffraction is

Diffraction is the spreading of a wave as it passes through a gap or around an obstacle. Every wave diffracts, but the spreading is only noticeable when the gap is not much larger than the wavelength. Light has a wavelength below a micrometre, so it needs a very narrow slit; sound, with wavelengths around a metre, diffracts easily through doorways.

Diffraction does not change the wavelength, frequency or speed of the wave. It changes only the direction in which the energy travels.

## The single-slit pattern

### With monochromatic light

A laser shone through one narrow vertical slit gives a horizontal row of bright patches on a distant screen:

- a **central maximum** that is much brighter than anything else and twice as wide as the other maxima;
- **subsidiary maxima** on each side, each much dimmer than the one inside it, and of roughly equal width;
- **dark minima** separating them.

### With white light

Each wavelength produces its own pattern, and every pattern has its central maximum straight ahead. So the centre is **white**. The central maximum has coloured edges and the side maxima are small spectra, with **blue or violet on the inner side and red on the outer side**, because longer wavelengths are diffracted through larger angles.

### How the width of the central maximum changes

The specification asks only for the qualitative trends, but you must be able to explain them.

| Change | Central maximum | Explanation |
|---|---|---|
| Narrower slit | Wider | Diffraction is greater when the gap is closer in size to the wavelength |
| Wider slit | Narrower, and brighter | More light passes and it spreads less |
| Longer wavelength (towards red) | Wider | λ is larger relative to the gap, so the spread is greater |
| Shorter wavelength (towards blue) | Narrower | Less spreading for the same gap |

A useful way to phrase it: the angular width of the central maximum increases as the ratio λ/(slit width) increases. If the slit is many times wider than λ, the beam passes almost straight through with very little spreading.

## The diffraction grating

A plane transmission grating has many parallel, equally spaced slits. The grating spacing d is the distance between the centres of adjacent slits. For N lines per metre, d = 1/N. Always convert lines per millimetre to lines per metre first: 300 lines per mm is 3.00 × 10⁵ lines per metre, so d = 3.33 × 10⁻⁶ m.

### Writing the derivation for full marks

The derivation of d sin θ = nλ is named in the specification. Make sure your answer contains each of these points, with a labelled sketch of two adjacent slits:

1. Light arrives at normal incidence, so the waves leave all the slits in phase.
2. Consider waves leaving two adjacent slits at angle θ to the normal.
3. The extra distance travelled by the wave from one slit is the side of a right-angled triangle whose hypotenuse is d, so the path difference is d sin θ.
4. For a maximum, the waves from adjacent slits must arrive in phase, so the path difference is a whole number of wavelengths: d sin θ = nλ.
5. Since waves from every pair of adjacent slits then reinforce, all slits contribute in phase.

### Why grating maxima are sharp

With only two slits, moving a little away from a maximum leaves the waves only slightly out of step, so the brightness falls gradually. With hundreds of slits, a small change of angle puts the waves from far-apart slits completely out of step, and they cancel. Light is only sent strongly in the exact directions given by d sin θ = nλ, so the maxima are narrow and bright and their angles can be measured precisely.

### Worked example 1: finding d from both sides

A laser of wavelength 633 nm is shone normally onto a grating. The angle between the two first-order maxima, measured from one to the other across the centre, is 44.6°. Find the grating spacing and the number of lines per millimetre.

```
θ = 44.6° / 2 = 22.3°
d = nλ / sin θ = 1 × 633 × 10⁻⁹ / sin 22.3° = 1.67 × 10⁻⁶ m
N = 1 / d = 6.0 × 10⁵ lines per metre = 600 lines per mm
```

Measuring across both sides and halving reduces the effect of any small error in finding the exact straight-through direction.

### Worked example 2: overlapping orders in white light

White light (400 nm to 700 nm) falls normally on a grating with 300 lines per mm. Find the angular range of the first three orders.

```
d = 3.33 × 10⁻⁶ m
order 1: violet 6.9°,  red 12.1°
order 2: violet 13.9°, red 24.8°
order 3: violet 21.1°, red 39.1°
```

The first-order spectrum is clear. But the red end of the second order (24.8°) lies beyond the violet end of the third order (21.1°), so those spectra overlap. This happens with every grating, because 2 × 700 nm = 1400 nm is larger than 3 × 400 nm = 1200 nm; the value of d cancels out of the comparison.

### Worked example 3: separating two close wavelengths

A sodium lamp emits two yellow lines at 589.0 nm and 589.6 nm. A grating with 600 lines per mm is used.

```
d = 1.667 × 10⁻⁶ m
first order:  20.70° and 20.72°, difference ≈ 0.02°
second order: 44.98° and 45.03°, difference ≈ 0.06°
```

The higher order spreads the two lines further apart, so they are easier to tell apart. A grating with more lines per millimetre spreads them further still. This is why gratings, rather than double slits, are used to analyse spectra.

### How many orders?

The largest possible value of sin θ is 1, so n cannot exceed d/λ. Round **down**. If d/λ is exactly a whole number, that order would be at 90°, along the grating surface, and cannot be observed.

## Applications of diffraction gratings

- **Measuring wavelengths** of light precisely, using a source of known or unknown wavelength.
- **Identifying elements** from their line spectra, in the laboratory or in light from stars, since each element emits its own set of wavelengths.
- **Analysing the composition** of gases and flames from the wavelengths present.
- **X-ray diffraction** by the regular layers of atoms in a crystal, which act like a grating with a spacing comparable to X-ray wavelengths and reveal the arrangement of the atoms.

## Common mistakes

- Saying a wider slit gives a wider central maximum. A narrower slit spreads the light more.
- Describing the white-light single-slit pattern with red on the inside. Red is diffracted most, so it is on the outside.
- Using lines per millimetre directly as d, or forgetting to take the reciprocal.
- Using the full angle between the two first orders as θ instead of half of it.
- Rounding d/λ up to find the highest order.
- Leaving out "normal incidence" or "adjacent slits" from the derivation.
- Claiming diffraction changes the wavelength.

## Exam technique

- **Describe** a pattern: mention the bright central maximum, its width compared with the others, the decreasing brightness of the side maxima, and the colours for white light.
- **Explain** a trend in width: relate the amount of spreading to the size of the wavelength compared with the slit width.
- **Derive**: use a labelled diagram and the five points above, ending with the condition for a maximum.
- **Calculate**: write d = 1/N with the conversion shown, then d sin θ = nλ, and quote angles to three significant figures.

## Next steps

Condense the page with the [diffraction revision notes](/resources/oxfordaqa-a-level-physics-9630-diffraction-oxfordaqa-alevel-revision-notes/) and test yourself with the [diffraction practice questions](/resources/oxfordaqa-a-level-physics-9630-diffraction-oxfordaqa-alevel-practice/). The coherence and path-difference ideas behind the grating are in the [interference study guide](/resources/oxfordaqa-a-level-physics-9630-interference-oxfordaqa-alevel/). Electron diffraction, which uses the same wave idea, is covered in the [wave-particle duality study guide](/resources/oxfordaqa-a-level-physics-9630-wave-particle-duality-oxfordaqa/).
