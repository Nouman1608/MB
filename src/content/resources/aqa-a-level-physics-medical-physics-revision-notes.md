---
title: "AQA A-Level Physics: Medical physics (7408) -- Revision Notes"
seoTitle: "AQA A-Level Physics Medical Physics Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Medical physics"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 10
syllabusTopics:
  - qualification: "a-level"
    topic: "medical-physics-aqa-alevel"
  - qualification: "a-level"
    topic: "medical-physics-aqa-alevel"
    subtopic: "physics-of-the-eye-aqa-alevel"
  - qualification: "a-level"
    topic: "medical-physics-aqa-alevel"
    subtopic: "physics-of-the-ear-aqa-alevel"
  - qualification: "a-level"
    topic: "medical-physics-aqa-alevel"
    subtopic: "biological-measurement-aqa-alevel"
  - qualification: "a-level"
    topic: "medical-physics-aqa-alevel"
    subtopic: "non-ionising-imaging-aqa-alevel"
  - qualification: "a-level"
    topic: "medical-physics-aqa-alevel"
    subtopic: "x-ray-imaging-aqa-alevel"
  - qualification: "a-level"
    topic: "medical-physics-aqa-alevel"
    subtopic: "radionuclide-imaging-and-therapy-aqa-alevel"
description: "Condensed revision notes for the AQA A-level Physics 7408 Medical physics option: equations, method steps, key distinctions and a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

These notes condense section 3.10 Medical physics (3.10.1 to 3.10.6) of the AQA AS and A-level Physics (7407/7408) specification, version 1.3 (AS and A-level exams June 2016 onwards). The section is **A-level only** and is one of the five options in sections 3.9-3.13: you study one, assessed in Paper 3 Section B. For full explanations and worked examples, use the [study guide](/resources/aqa-a-level-physics-medical-physics/).

Links: [course hub](/boards/aqa/a-level/physics/), [printable checklist](/checklists/aqa/a-level/physics/), [free diagnostics](/diagnostics/), [practice questions](/resources/aqa-a-level-physics-medical-physics-practice/). Exponential decay is revised in [Nuclear physics](/resources/aqa-a-level-physics-nuclear-physics-revision-notes/) and fibres in [Waves](/resources/aqa-a-level-physics-waves-revision-notes/).

## Equations

| Quantity | Equation | Notes |
|---|---|---|
| Lens power | P = 1/f | dioptres (D), f in metres |
| Thin lens | 1/u + 1/v = 1/f | real is positive; virtual v negative; diverging f negative |
| Magnification | m = v/u | |
| Intensity level | 10 log(I/I₀) | dB; I₀ = 1.0 × 10⁻¹² W m⁻² |
| Acoustic impedance | Z = ρc | kg m⁻² s⁻¹ |
| Reflected fraction | I_r/I_i = ((Z₂ − Z₁)/(Z₂ + Z₁))² | |
| Echo depth | d = ct/2 | t is the round trip |
| Max X-ray photon energy | E = eV | λ_min = hc/(eV) |
| Attenuation | I = I₀e^(−μx) | μ in m⁻¹ |
| Half-value thickness | x½ = ln 2/μ | |
| Mass attenuation coefficient | μm = μ/ρ | m² kg⁻¹ |
| Effective half-life | 1/T_E = 1/T_B + 1/T_P | T_E is shorter than both |

## 3.10.1 Eye

- **Refraction**: mostly at the cornea; the lens fine-tunes. Image on the retina is real and inverted.
- **Cones**: bright light, colour, three types (peaks near 420, 530, 560 nm), packed in the fovea, one nerve connection each, so **high resolution**.
- **Rods**: dim light, one type (peak near 498 nm), no colour, many share one nerve fibre, so **low resolution** but high sensitivity.
- **Resolution rule**: two images are seen as separate if they stimulate separate cones with an unstimulated cone between.

**Method: correcting lens power**

```
Myopia:        u = ∞,       v = −(far point)   → P negative (diverging)
Hypermetropia: u = 0.25 m,  v = −(near point)  → P positive (converging)
P = 1/u + 1/v
```

- **Astigmatism**: different power in different planes; corrected with a cylindrical lens. Prescription = sphere power, cylinder power, axis angle in degrees.

## 3.10.2 Ear

- **Outer**: pinna, canal, eardrum.
- **Middle**: ossicles act as a lever; oval window area much smaller than eardrum, so pressure rises.
- **Inner**: cochlea fluid; basilar membrane; hair cells make nerve impulses; position along the membrane depends on frequency.
- **Intensity**: power per unit area normal to the wave.
- **Log scale**: loudness follows the log of intensity. Each ×10 in I is +10 dB; ×2 is +3 dB.
- **Equal loudness curve**: joins sounds that seem equally loud; built by matching tones to a 1 kHz reference; lowest curve is the threshold; most sensitive in the middle of the range.
- **dBA**: weighted for the ear's frequency response; dB is not.
- **Noise damage**: threshold rises over a band (a notch). **Age**: threshold rises most at high frequency; upper limit falls.

## 3.10.3 ECG

- Electrodes on limbs and chest; skin cleaned; conducting gel for good contact; high-gain, high input impedance amplifier; signal of order 1 mV.
- **P**: atrial depolarisation. **QRS**: ventricular depolarisation (largest). **T**: ventricular repolarisation.

## 3.10.4 Non-ionising imaging

**Ultrasound**

- Large difference in Z, strong reflection. Air-skin almost total reflection, so use gel.
- Piezoelectric crystal: p.d. pulse, vibration, ultrasound pulse; echoes deform the crystal, producing a p.d. Backing material damps the crystal for short pulses.
- **A-scan**: amplitude against time, one direction, gives depths. **B-scan**: swept probe, brightness = echo strength, 2D image.
- Pros: non-ionising, cheap, portable, real-time. Cons: lower resolution; bone and gas block it.

**Endoscope**

- TIR at core-cladding boundary.
- **Non-coherent** bundle: light in. **Coherent** bundle: image out (fibre positions match at both ends).
- Objective lens forms image on bundle end; eyepiece or camera views it.

**MR scanner (sequence)**

1. Superconducting magnet: protons align with spins parallel and precess about the field.
2. Gradient coils select the cross-section.
3. Short RF pulses excite protons in successive small regions.
4. Protons de-excite and emit RF signals.
5. Signals detected and processed by computer into an image.

## 3.10.5 X-rays

- **Continuous spectrum**: electrons decelerate in the target. **Characteristic lines**: inner-shell vacancies filled. Cut-off at E = eV.
- **Rotating anode**: spreads the heat.
- **Current** → intensity. **Voltage** → photon energy. **Al filter** → removes soft X-rays, lowers dose. **Small focal spot** → sharpness. **Lead grid** → less scatter, better contrast.
- **Flat panel detector**: scintillator (X-rays to light) → photodiode pixels → electronic scanning. Instant, digital, lower dose than film.
- **Barium meal**: X-ray opaque material outlines the gut.
- **Intensifying screen**: light from phosphor exposes film; less dose. **Image intensifier**: X-rays → light → electrons → accelerated onto output phosphor; bright live image.
- **Attenuation**: bone absorbs much more than soft tissue (differential absorption).
- **CT**: rotating tube, narrow monochromatic beam, detector array, computer image. High resolution, 3D; costly; high dose.

## 3.10.6 Radionuclides

- **Good tracer**: γ only, half-life suited to the scan, γ energy that escapes the body yet is stopped in the camera crystal, can be labelled to an organ-seeking compound.
- **Tc-99m**: pure γ (about 140 keV), half-life about 6 h, widely labelled. **I-131**: β⁻ and γ (main γ about 364 keV), half-life about 8 days, thyroid. **In-111**: electron capture, γ about 171 and 245 keV, half-life about 2.8 days, labels e.g. white blood cells. (Approximate values.)
- **Mo-Tc generator**: longer-lived Mo-99 (half-life about 66 h) decays to Tc-99m; Tc-99m is eluted with saline on site.
- **PET**: positron emitter; annihilation gives two γ photons back to back; coincidence detection locates the line of the source.
- **Gamma camera**: collimator → scintillator crystal → photomultiplier tubes → position logic → computer.
- **Photomultiplier**: photocathode (photoelectric effect) → dynodes at rising potentials multiply electrons → anode pulse.
- **High-energy X-ray therapy**: several beams crossing at the tumour or rotation, beam shaping, shielding, dose split into sessions.
- **β implants**: inside or beside the tumour; short β range keeps dose local.

**Imaging comparisons (3.10.6.6)**: answer on resolution, convenience and safety only.

- Ultrasound: lowest resolution; cheap, portable, live; non-ionising.
- CT: high resolution, 3D; expensive; high ionising dose.
- MR: high resolution, best for soft tissue; expensive and slow; non-ionising, but not with some metal implants.
- Gamma camera and PET: lower resolution but show organ function; need a tracer; ionising dose.

## Must-know distinctions

- **Coherent vs non-coherent bundle**: image vs illumination.
- **dB vs dBA**: intensity level vs level weighted for the ear.
- **A-scan vs B-scan**: one-line depth graph vs 2D brightness image.
- **T_P vs T_B vs T_E**: decay vs removal by body vs both.
- **μ vs μm**: per metre of material vs divided by density.
- **Continuous vs characteristic**: deceleration vs inner-shell transitions.
- **Myopia vs hypermetropia**: far point too close (diverging) vs near point too far (converging).

## Quick self-test

1. A lens has f = −0.40 m. Find its power.
2. A myopic eye has a far point of 0.50 m. Find the correcting power.
3. Find the intensity of a 60 dB sound.
4. Find the intensity level of 1.0 × 10⁻⁴ W m⁻².
5. By how much does the intensity level rise if the intensity rises by a factor of 100?
6. Fat: ρ = 950 kg m⁻³, c = 1450 m s⁻¹. Find Z.
7. Find the fraction reflected at a fat (Z = 1.38 × 10⁶) to muscle (Z = 1.70 × 10⁶) boundary.
8. What fraction of an X-ray beam passes through three half-value thicknesses?
9. μ = 0.50 cm⁻¹. Find the half-value thickness.
10. T_P = 6.0 h and T_B = 24 h. Find T_E.
11. Which part of the ECG shows ventricular repolarisation?
12. Find the maximum photon energy, in J, from a 120 kV tube.

### Answers

1. P = 1/(−0.40) = **−2.5 D**
2. P = 1/(−0.50) = **−2.0 D**
3. I = 10⁻¹² × 10⁶ = **1.0 × 10⁻⁶ W m⁻²**
4. 10 log(10⁸) = **80 dB**
5. 10 log 100 = **+20 dB**
6. 950 × 1450 = **1.38 × 10⁶ kg m⁻² s⁻¹**
7. (0.32/3.08)² = **0.011**
8. (1/2)³ = **0.125**
9. ln 2/0.50 = **1.39 cm**
10. 1/T_E = 1/24 + 1/6.0 = 5/24, so **T_E = 4.8 h**
11. **The T wave**
12. 1.60 × 10⁻¹⁹ × 1.20 × 10⁵ = **1.92 × 10⁻¹⁴ J**

## Where marks are usually lost

- Using a positive v for a virtual image, so the sign of the lens power is wrong.
- Working with the near point for a myopia question, or the far point for hypermetropia.
- Leaving power in m⁻¹ without saying D, or using f in cm.
- Squaring only the top of the reflection ratio, or forgetting to square at all.
- Missing the 2 in d = ct/2.
- Using log in place of ln for half-value thickness, and mixing cm and m in μx.
- Describing an image intensifier when the question asks about an intensifying screen.
- Saying the coherent bundle carries light in.
- Writing T_E = T_B + T_P.
- In comparisons, giving cost alone when resolution and safety are also asked for.

## Official syllabus

AQA AS and A-level Physics (7407/7408) specification, version 1.3, 1 June 2017 (AS and A-level exams June 2016 onwards), section 3.10 Medical physics.
