---
title: "A Level Physics: Medical Physics — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Medical physics"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
order: 24.1
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "a-medical-physics"
    subtopic: "a-production-and-use-of-ultrasound"
  - qualification: "a-level"
    topic: "a-medical-physics"
    subtopic: "a-production-and-use-of-x-rays"
  - qualification: "a-level"
    topic: "a-medical-physics"
    subtopic: "a-pet-scanning"
description: "Condensed recall notes on ultrasound, X-rays, attenuation, CT scanning and PET for Cambridge AS & A Level Physics 9702."
author: "iftikhar-azeemi"
publishedDate: 2026-08-22
featured: false
---

Condensed recall notes on ultrasound, X-rays, CT and PET scanning --
Topic 24, Medical Physics, of Cambridge International AS & A Level
Physics 9702, 2025-2027 series. Condensed for the final weeks; for the
full explanation, use the
[Medical Physics study guide](/resources/a-physics-medical-physics/).

## Ultrasound

Sound above 20 kHz, generated and detected by the **piezoelectric effect** in a quartz crystal: an alternating p.d. makes the crystal vibrate, and returning vibrations induce an alternating p.d. The same crystal both transmits and receives.

```
specific acoustic impedance   Z = rho c        kg m^-2 s^-1

intensity reflection coefficient:
  I_r / I_i = (Z_2 - Z_1)^2 / (Z_2 + Z_1)^2
```

**The coupling gel is the standard question.** The impedance of air is enormously different from that of skin, so at an air–skin boundary the reflection coefficient is close to 1 and almost all the ultrasound is reflected before it enters the body. Gel has an impedance close to skin's, so it displaces the air and allows transmission — this is **impedance matching**.

**Worked example.** Soft tissue has Z = 1.63 × 10⁶ kg m⁻² s⁻¹, bone has Z = 6.40 × 10⁶ kg m⁻² s⁻¹.

```
I_r/I_i = (Z2-Z1)^2 / (Z2+Z1)^2 = (6.40-1.63)^2 / (6.40+1.63)^2 = 22.75/64.48 ≈ 0.353
```

About **35% of the intensity is reflected** at a soft tissue–bone boundary, so relatively little penetrates further — structures lying behind bone are poorly imaged by ultrasound.

- **A-scan** — a single line, amplitude against time; used for simple depth measurement.
- **B-scan** — many A-scans combined into a two-dimensional image, brightness representing echo amplitude.

Attenuation in tissue: `I = I₀ e^(−μx)`.

## X-rays

Produced by accelerating electrons through a large p.d. onto a metal target. Two components in the spectrum:

- **Braking radiation (bremsstrahlung)** — the continuous background, from electrons decelerating in the target. Its **maximum photon energy equals eV**, giving the minimum wavelength `λ_min = hc/(eV)`.
- **Characteristic lines** — sharp peaks from electron transitions in the target atoms; their positions depend on the **target material only**.

Well under 1% of the input energy becomes X-rays; the rest is heat, which is why the anode rotates and is cooled.

### Attenuation

```
I = I_0 e^(-mu x)

half-value thickness:   x_1/2 = ln2 / mu
```

μ depends on photon energy and on the material — strongly on **atomic number**, which is why bone (calcium, Z = 20) absorbs far more than soft tissue (mostly carbon, oxygen and hydrogen) and appears white on the image.

**Contrast media** — barium (Z = 56) and iodine (Z = 53) are swallowed or injected to make soft-tissue structures such as the gut or blood vessels visible, because their high atomic number gives them a much larger attenuation coefficient than the surrounding tissue.

**Image quality:** sharpness is improved by a narrower beam and a smaller focal spot; contrast is improved by choosing photon energy appropriately and by contrast media.

## CT scanning

An X-ray tube rotates around the patient, taking many images from different angles; a computer reconstructs a **three-dimensional** image from the set of two-dimensional slices.

| | Advantage | Disadvantage |
|---|---|---|
| CT vs plain X-ray | 3-D image, far better soft-tissue contrast, any slice can be viewed | **Much higher radiation dose**, slower, more expensive |

## PET scanning

1. A **positron-emitting** tracer (commonly fluorine-18 in fluorodeoxyglucose) is injected.
2. Each emitted positron travels a short distance and **annihilates** with an electron.
3. Annihilation produces **two gamma photons of 0.511 MeV travelling in exactly opposite directions** — required by conservation of momentum.
4. A ring of detectors registers both; the **difference in arrival times** locates the annihilation along the line between them.

The 0.511 MeV figure comes from `E = mc²` using the rest mass of an electron. PET shows **function and metabolism**, not just structure — active tissue such as a tumour takes up more tracer.

## Exam traps

- Omitting the reason gel works: impedance matching, not lubrication.
- Confusing the continuous spectrum's origin with the characteristic lines'.
- Forgetting that λ_min depends only on the accelerating p.d., not the target.
- Using ln2/μ where μx is required, or vice versa.
- Saying the two PET gamma photons travel in the same direction.
- Claiming CT gives a lower dose than a plain X-ray.

## Self-test

1. Why is coupling gel essential in ultrasound scanning?
2. What determines the minimum X-ray wavelength, and what determines the characteristic lines?
3. Why does bone appear white on an X-ray image?
4. Give the attenuation equation and the expression for half-value thickness.
5. Why are two gamma photons produced in PET, and what is the energy of each?

**Answers:** 1. Air and skin have very different acoustic impedances, so almost all the ultrasound would be reflected at the boundary; the gel has an impedance close to skin's, displacing the air and allowing transmission. 2. λ_min = hc/(eV), set by the accelerating p.d. alone; the characteristic lines depend only on the target material. 3. Calcium has a much higher atomic number than the elements in soft tissue, giving a larger attenuation coefficient, so more X-rays are absorbed. 4. I = I₀e^(−μx); x_½ = ln2/μ. 5. Momentum must be conserved in electron–positron annihilation, so two photons are emitted in opposite directions, each of 0.511 MeV from E = mc² for the electron rest mass.

## Related resources

- [Medical Physics study guide](/resources/a-physics-medical-physics/) — the full explanation behind these condensed notes
- [Cambridge AS & A Level Physics hub](/boards/cambridge/a-level/physics/) — syllabus 9702 topics and all Marlbridge Physics resources
