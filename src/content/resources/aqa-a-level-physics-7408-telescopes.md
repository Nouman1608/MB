---
title: "AQA A-Level Physics (7408): Telescopes"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Astrophysics"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 9.1
syllabusTopics:
  - qualification: "a-level"
    topic: "astrophysics-aqa-alevel"
    subtopic: "telescopes-aqa-alevel"
description: "AQA A-Level Physics 7408 telescopes in depth: refractor ray diagrams, Cassegrain reflectors, aberrations, non-optical telescopes, Rayleigh criterion and CCDs."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This study guide goes deeper into sub-section 3.9.1 Telescopes of the AQA AS and A-level Physics specification (7407/7408, AS and A-level exams June 2016 onwards), sections 3.9.1.1 to 3.9.1.4. It belongs to the Astrophysics option (section 3.9), which is **A-level only** and assessed in Paper 3 Section B if it is the option your school studies.

The [Astrophysics study guide](/resources/aqa-a-level-physics-astrophysics/) covers the whole option. For recall use the [telescopes revision notes](/resources/aqa-a-level-physics-7408-telescopes-revision-notes/); to test yourself use the [telescopes practice questions](/resources/aqa-a-level-physics-7408-telescopes-practice/). Diffraction background is in the [Waves study guide](/resources/aqa-a-level-physics-waves/). All angles here are in radians.

## What this subtopic covers

| Spec ref | Content |
|---|---|
| 3.9.1.1 | Two-lens astronomical telescope: ray diagram in normal adjustment; M = angle subtended by image at eye ÷ angle subtended by object at unaided eye; M = fₒ/fₑ |
| 3.9.1.2 | Cassegrain arrangement (parabolic concave primary, convex secondary); ray diagram to the eyepiece; relative merits of reflectors and refractors; spherical and chromatic aberration (qualitative) |
| 3.9.1.3 | Single-dish radio, I-R, U-V and X-ray telescopes: structure, positioning and use, resolving and collecting powers compared with optical telescopes |
| 3.9.1.4 | Rayleigh criterion θ ≈ λ/D; collecting power ∝ diameter²; eye and CCD compared for quantum efficiency, resolution and convenience |

The specification states that no knowledge of the structure of the CCD is required.

## Drawing the refracting telescope ray diagram

Examiners mark this diagram step by step, so draw it in this order:

1. Draw the principal axis, the objective (long focal length) on the left and the eyepiece on the right, separated by fₒ + fₑ. Mark the shared principal focus F between them.
2. Draw three parallel rays from a distant object arriving at angle α to the axis. One must pass undeviated through the centre of the objective.
3. Where that central ray meets the focal plane through F, mark the top of the intermediate image (real, inverted). Bring the other two rays from the objective to the same point.
4. Draw a dashed construction line from that image point through the centre of the eyepiece.
5. All three rays leave the eyepiece parallel to the construction line, at angle β to the axis. The final image is at infinity and inverted.

Marks are often lost for rays that do not meet at one point in the focal plane, for emerging rays that are not parallel, or for missing arrows.

**Angular magnification** compares angles, not sizes: M = β/α. For small angles in normal adjustment, α ≈ h/fₒ and β ≈ h/fₑ, where h is the height of the intermediate image, so M = fₒ/fₑ.

**Worked example 1: designing a telescope.** An objective has fₒ = 1.20 m. Choose an eyepiece for M = 40 and give the tube length.

```
fₑ = fₒ/M = 1.20/40 = 0.030 m (30 mm)
length = fₒ + fₑ = 1.23 m
```

**Worked example 2: viewing Jupiter.** Jupiter (diameter 1.43 × 10⁸ m) is 6.3 × 10¹¹ m away. Find the angle it subtends through a telescope with M = 36.

```
α = 1.43 × 10⁸/6.3 × 10¹¹ = 2.3 × 10⁻⁴ rad
β = Mα = 36 × 2.27 × 10⁻⁴ = 8.2 × 10⁻³ rad
```

## Reflectors, refractors and aberrations

In the **Cassegrain** arrangement, parallel light strikes the parabolic concave primary mirror and converges towards its focus. Before reaching it, the light meets a small convex secondary mirror on the axis, which reflects it back down the tube, converging less steeply, through a hole in the centre of the primary to a focus just behind it, where the eyepiece (or detector) sits. The effective focal length is longer than the primary's, but the tube is short.

**Spherical aberration** happens when rays far from the axis are brought to a different focus from rays near the axis, so the image blurs. A spherical mirror suffers it; a parabolic mirror brings all rays parallel to the axis to one focus. **Chromatic aberration** happens in lenses because the refractive index of glass depends on wavelength: blue light focuses closer to the lens than red, giving coloured fringes. Mirrors reflect all wavelengths identically, so they have none.

| Factor | Reflector | Refractor |
|---|---|---|
| Chromatic aberration | none | present |
| Size | mirror supported across its back, so can be very large | lens supported only at its rim, sags if large |
| Surface quality | one surface must be perfect | two surfaces and the whole glass volume must be flawless |
| Absorption | little | glass absorbs some wavelengths (such as some U-V) |
| Obstruction | secondary mirror blocks some light and adds diffraction | none |

## Telescopes beyond the visible

**Radio** telescopes use a large parabolic dish to reflect radio waves to an antenna at the focus. Compared with optical telescopes:

- **Structure**: both use parabolic reflectors; the dish can be wire mesh provided the gaps are much smaller than the wavelength.
- **Positioning and use**: the atmosphere transmits radio waves, so dishes work on the ground, by day or night and through cloud; they suffer man-made interference, so sites are chosen away from it. A single dish is steered to scan a source and build a map.
- **Resolving power**: much poorer for the same diameter, because λ is so much longer.
- **Collecting power**: dishes are made far larger than optical mirrors.

**Worked example 3: radio versus optical resolution.** A 76 m dish at 0.21 m, against a 0.10 m optical telescope at 500 nm.

```
radio:   θ ≈ 0.21/76 = 2.8 × 10⁻³ rad (about 0.16°)
optical: θ ≈ 500 × 10⁻⁹/0.10 = 5.0 × 10⁻⁶ rad
dish needed to match the small optical telescope: D = 0.21/5.0 × 10⁻⁶ = 4.2 × 10⁴ m
```

A single dish 42 km across is impossible, which shows why single-dish radio maps are coarse.

**Infrared** radiation is absorbed by water vapour, so I-R telescopes go on high, dry mountains or in space, and their detectors are cooled so the telescope's own thermal emission does not swamp the signal. **Ultraviolet** and **X-rays** are absorbed by the atmosphere, so these telescopes must be in space. X-rays pass through or are absorbed by ordinary mirrors, so X-ray telescopes reflect them only at grazing angles.

## Resolution and collecting power

**Rayleigh criterion**: two point sources are just resolved when the central maximum of one diffraction pattern lies on the first minimum of the other, giving θ ≈ λ/D. A smaller θ means better resolution.

**Worked example 4: the smallest lunar crater.** A 0.15 m telescope observes the Moon (3.84 × 10⁸ m away) at 550 nm.

```
θ ≈ 550 × 10⁻⁹/0.15 = 3.7 × 10⁻⁶ rad
smallest feature ≈ θ × distance = 3.67 × 10⁻⁶ × 3.84 × 10⁸ = 1.4 × 10³ m
```

**Collecting power** is the energy collected per second, proportional to the aperture area and so to D². An 8.0 m mirror collects (8.0/0.20)² = 1600 times as much light per second as a 0.20 m amateur telescope, so it can image objects 1600 times fainter in the same exposure.

**Eye versus CCD**

| Property | Eye | CCD |
|---|---|---|
| Quantum efficiency (fraction of incident photons detected) | low | much higher |
| Resolution | set by spacing of receptor cells | set by pixel spacing, which can be finer |
| Convenience | real-time viewing only, no record | long exposures add up faint light; digital image can be stored, processed and shared |

## Common mistakes

- Writing M = fₑ/fₒ, or giving the lens separation as fₒ.
- Treating M as a ratio of image heights.
- Describing the Cassegrain secondary as concave or plane.
- Saying mirrors have no aberration at all (spherical mirrors do have spherical aberration).
- Comparing θ in degrees with λ/D in radians.
- Saying collecting power is proportional to D.

## Exam technique for AQA command words

- **Draw** (ray diagram): ruler, arrows, three rays meeting in the focal plane, emerging rays parallel.
- **Compare**: each point must mention both telescopes or both detectors.
- **Explain** (positioning): link the wavelength to atmospheric absorption or transmission.
- **Calculate** then **deduce** (resolution): compare the calculated θ with the separation given, quoting both numbers.

## Official syllabus

AQA AS and A-level Physics specification (7407/7408), AS and A-level exams June 2016 onwards: section 3.9.1 Telescopes (A-level only).
