---
title: "AQA A-Level Physics (7408): Refraction, diffraction and interference"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Waves"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 3.2
syllabusTopics:
  - qualification: "a-level"
    topic: "waves-aqa-alevel"
    subtopic: "refraction-diffraction-and-interference"
description: "Study guide to AQA 7408 section 3.3.2: path difference, coherence, Young's slits, single-slit diffraction, gratings, refraction, critical angle and optical fibres."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide teaches section 3.3.2 Refraction, diffraction and interference of the AQA AS and A-level Physics specification (7407/7408): 3.3.2.1 Interference, 3.3.2.2 Diffraction and 3.3.2.3 Refraction at a plane surface, including Required practical 2. It goes deeper than the overview in the [Waves study guide](/resources/aqa-a-level-physics-waves/), with new worked examples on path difference, gratings and fibres. Use it with the [refraction, diffraction and interference revision notes](/resources/aqa-a-level-physics-7408-refraction-diffraction-and-interference-revision-notes/) and the [refraction, diffraction and interference practice questions](/resources/aqa-a-level-physics-7408-refraction-diffraction-and-interference-practice/).

## What 3.3.2 covers

| Sub-section | You must be able to |
|---|---|
| 3.3.2.1 Interference | Use path difference; explain coherence; describe and use Young's double slit, w = λD/s; describe fringes with white light; explain interference with sound and microwaves; laser safety; know how ideas about EM radiation changed |
| 3.3.2.2 Diffraction | Describe single-slit patterns for monochromatic and white light; explain how the central maximum depends on slit width and wavelength; use d sin θ = nλ; applications of gratings |
| 3.3.2.3 Refraction | Use n = c/cₛ and n₁ sin θ₁ = n₂ sin θ₂; find critical angles; describe step-index fibres, cladding, material and modal dispersion, absorption and pulse broadening |

## Path difference and coherence

Two sources are **coherent** if they have the same frequency and a constant phase difference. Only coherent sources give a stable interference pattern. A laser is a convenient coherent, monochromatic source; two slits lit by one laser act as two coherent sources.

For two coherent sources **in phase**, at a point P:

- path difference = nλ (0, λ, 2λ, …): the waves arrive in phase, **constructive** interference, a maximum;
- path difference = (n + ½)λ: they arrive in antiphase, **destructive** interference, a minimum.

**Worked example 1.** Two microwave transmitters 3.0 cm in wavelength are driven in phase. A detector is 52.5 cm from one and 45.0 cm from the other.

```
path difference = 52.5 − 45.0 = 7.5 cm
7.5 / 3.0 = 2.5 wavelengths
```

A half-integer number of wavelengths means the waves arrive in antiphase: the detector is at a **minimum**. If the sources were driven in antiphase instead, the same point would be a maximum.

## Young's double slit

Light from a laser passes through two narrow slits a distance s apart. On a screen a distance D away, bright and dark fringes form, equally spaced by

**w = λD/s**, valid when D is much larger than s.

**Worked example 2.** A green laser of wavelength 532 nm illuminates slits 0.25 mm apart. The screen is 2.40 m away.

```
w = λD/s = (532 × 10⁻⁹ × 2.40) / (0.25 × 10⁻³) = 5.1 × 10⁻³ m = 5.1 mm
```

To measure w precisely, measure across many fringes, for example 8 spacings, and divide by 8.

**White light.** With a white source and a single slit in front of the double slit, the central fringe is white, because every wavelength has zero path difference there. The other fringes are coloured spectra, with blue on the side nearer the centre: blue light has a shorter wavelength and so a smaller w. The fringes blur out a few orders from the centre as the colours overlap.

**Laser safety.** Never look into the beam or its reflections; keep the beam below eye level; remove reflective objects from the bench; use warning signs.

**Changing ideas about light.** The double-slit experiment showed interference, which is a wave property, and supported a wave model of light over a particle model at the time. Later, the photoelectric effect required a particle model too; ideas changed as evidence accumulated.

## Diffraction

Diffraction is the spreading of waves as they pass through a gap or around an obstacle. It is most noticeable when the gap is similar in size to the wavelength.

### Single slit

With monochromatic light through a single slit the screen shows a bright **central maximum** about **twice as wide** as the other maxima, which are much dimmer. Its width:

- **increases** when the slit is made narrower;
- **increases** when the wavelength is longer (red spreads more than blue).

With white light, the central maximum is white with coloured edges, and the side maxima are spectra, with violet nearest the centre.

### The diffraction grating

A grating has many slits a distance d apart (d = 1 ÷ number of lines per metre). Light incident normally gives sharp maxima at angles θ where

**d sin θ = nλ**

The highest order visible is the largest whole number n with n ≤ d/λ, because sin θ cannot exceed 1.

**Worked example 3.** A grating with 600 lines per mm is lit by red light of wavelength 656 nm.

```
d = 1 / (600 × 10³) = 1.667 × 10⁻⁶ m
first order:  sin θ₁ = 656 × 10⁻⁹ / 1.667 × 10⁻⁶ = 0.394, θ₁ = 23.2°
second order: sin θ₂ = 0.787, θ₂ = 51.9°
d/λ = 2.54, so the highest order is n = 2
```

**Worked example 4: finding a wavelength.** With a 400 lines per mm grating, the two second-order maxima either side of the centre are separated by an angle of 64.0°, so θ₂ = 32.0°.

```
d = 2.50 × 10⁻⁶ m
λ = d sin θ / n = 2.50 × 10⁻⁶ × sin 32.0° / 2 = 6.62 × 10⁻⁷ m
```

Measuring the angle between the two orders and halving it halves the uncertainty in θ compared with measuring from the central maximum.

**Applications**: spectral analysis of light from stars to identify elements, and measuring the wavelengths of spectral lines.

## Required practical 2

**Investigation of interference effects to include the Young's slit experiment and interference by a diffraction grating.** Measure fringe spacing across several fringes and D with a metre rule or tape; find λ from w = λD/s with a known slit separation, or use a grating and measure angles (or distances on a screen, using tan θ = distance from centre ÷ D). The largest uncertainty is usually in w or the slit separation.

## Refraction at a plane surface

The **refractive index** of a material is **n = c/cₛ**, where cₛ is the speed of light in the material. Air has n ≈ 1. At a boundary, **Snell's law** is

**n₁ sin θ₁ = n₂ sin θ₂**

with angles measured from the normal.

**Total internal reflection** happens when light in a denser medium meets a boundary with a less dense one at an angle greater than the **critical angle** θc, where

**sin θc = n₂/n₁** (n₁ > n₂)

**Worked example 5.** Light travels from water (n = 1.33) into air.

```
critical angle: sin θc = 1.00/1.33, θc = 48.8°
at 40° incidence: sin θ₂ = 1.33 × sin 40° = 0.855, θ₂ = 58.7°
at 55° incidence: 55° > 48.8°, so total internal reflection
speed in water: cₛ = 3.00 × 10⁸ / 1.33 = 2.26 × 10⁸ m s⁻¹
```

### Step-index optical fibres

A fibre has a thin **core** surrounded by **cladding** of lower refractive index. Light travels along the core by total internal reflection at the core–cladding boundary. The cladding protects the core from scratches (which would let light escape) and stops signals crossing between fibres.

**Worked example 6.** A core has n = 1.50 and the cladding n = 1.47.

```
sin θc = 1.47 / 1.50, θc = 78.5°
rays must meet the boundary at more than 78.5° to the normal,
so they travel within 11.5° of the fibre axis
```

**Pulse broadening** limits how close together pulses can be sent.

- **Modal dispersion**: rays taking different paths take different times. Over 1.0 km of the fibre above, an axial ray takes 5.00 μs, while a ray at the critical angle travels 1000 ÷ sin 78.5° = 1020 m and takes 5.10 μs: a spread of 0.10 μs. A narrower core reduces it.
- **Material dispersion**: different wavelengths travel at different speeds in the glass. Monochromatic light reduces it.
- **Absorption**: part of the signal's energy is absorbed by the fibre, so the amplitude falls. Regular amplifiers (or regenerators) restore it.

## Common mistakes

- Treating sources as coherent just because they have the same frequency.
- Using w = λD/s with s in mm and λ in nm without converting.
- Saying the central maximum gets narrower with a narrower slit.
- Forgetting that the highest grating order is limited by sin θ ≤ 1.
- Measuring angles from the surface instead of the normal.
- Writing sin θc = n₁/n₂ (it must be less than 1).
- Confusing modal dispersion (paths) with material dispersion (wavelengths).

## Exam technique

"Explain the pattern" questions need the cause (path difference), the condition (nλ or (n + ½)λ) and the result (bright or dark). "Describe" questions on single-slit patterns need the relative width and intensity of the maxima. In fibre questions, link each effect to a remedy: narrower core for modal dispersion, monochromatic source for material dispersion, amplifiers for absorption.

## Frequently asked questions

**What makes two sources coherent?**
They have the same frequency and a constant phase difference. Coherent sources produce a stable interference pattern.

**How does slit width affect single-slit diffraction?**
A narrower slit gives a wider central maximum, because the light diffracts more. Longer wavelengths also give a wider central maximum.

**Why do optical fibres need cladding?**
The cladding has a lower refractive index, so total internal reflection happens at the core boundary. It also protects the core from scratches and stops signals passing between fibres.

## Official syllabus

AQA AS and A-level Physics specification (7407/7408), for AS and A-level exams June 2016 onwards, published by AQA. Section 3.3.2 Refraction, diffraction and interference.
