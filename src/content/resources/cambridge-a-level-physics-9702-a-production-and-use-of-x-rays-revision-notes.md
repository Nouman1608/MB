---
title: "Cambridge A Level Physics (9702): Production and use of X-rays -- Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Medical physics"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 24.2
syllabusTopics:
  - qualification: "a-level"
    topic: "a-medical-physics"
    subtopic: "a-production-and-use-of-x-rays"
description: "Revision notes for Cambridge A Level Physics 9702 24.2 X-rays: the X-ray tube, λ_min = hc/eV, contrast, attenuation and CT, with a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Subtopic 24.2 of Cambridge International AS & A Level Physics 9702 (2025–2027) covers the production of X-rays by electron bombardment, the minimum wavelength, contrast in X-ray images, exponential attenuation and computed tomography. These notes are condensed for recall. For full explanations and worked examples, read the [X-rays study guide](/resources/cambridge-a-level-physics-9702-a-production-and-use-of-x-rays/); to apply the ideas, try the [X-rays practice questions](/resources/cambridge-a-level-physics-9702-a-production-and-use-of-x-rays-practice/).

## Equations

```
kinetic energy of each electron = eV
λ_min = hc / (eV)            (one electron → one photon, all its energy)
I = I₀ e^(−μx)               (recall)
layers: I = I₀ e^(−(μ₁x₁ + μ₂x₂))
number of electrons per second = I_tube / e
```

## The X-ray tube

| Part | Function |
|---|---|
| Heated cathode (filament) | Releases electrons by thermionic emission; filament current sets beam intensity |
| High p.d. | Accelerates electrons; sets maximum photon energy |
| Metal target (e.g. tungsten) | Electrons decelerate in it and emit X-ray photons |
| Cooling / rotating anode | Removes heat: about 99 % of the electron energy becomes thermal energy |
| Vacuum | No collisions with gas molecules |

## Minimum wavelength: the reasoning

- Electrons lose energy in one or many interactions, so photon energies form a continuous range.
- The most energetic photon takes **all** of one electron's kinetic energy eV.
- So hc/λ_min = eV.
- λ_min depends **only** on the accelerating p.d.

| p.d. / kV | λ_min / m |
|---|---|
| 25 | 4.97 × 10⁻¹¹ |
| 50 | 2.49 × 10⁻¹¹ |
| 80 | 1.55 × 10⁻¹¹ |
| 100 | 1.24 × 10⁻¹¹ |

## Contrast

- **Contrast** = difference in degree of blackening (brightness) between areas of the image.
- Good when neighbouring structures have very different μ (bone and soft tissue).
- Poor between soft tissues with similar μ.
- **Improve it** with a contrast medium of high μ (barium compound swallowed; iodine compound injected) or a suitable choice of X-ray energy.

## Attenuation reminders

- μ depends on the material and the photon energy; bone has larger μ than soft tissue.
- For several layers, add the μx terms in the exponent (or multiply the separate factors).
- Thickness halving the intensity = ln 2 / μ (for μ = 20 m⁻¹: 3.5 cm; for μ = 60 m⁻¹: 1.2 cm).

## CT scanning in four stages

1. X-ray source and detectors rotate; many images of **one section** taken from **different angles**.
2. Computer combines them into a **2D image of that section**.
3. Patient moved along an **axis**; repeated for many sections.
4. 2D images of all sections combined into a **3D image**.

## Key terms

| Term | Meaning |
|---|---|
| Electron bombardment | Firing high-energy electrons at a metal target |
| Thermionic emission | Release of electrons from a heated metal |
| Minimum wavelength | Shortest X-ray wavelength produced; set by accelerating p.d. |
| Hard X-rays | High photon energy, short wavelength, more penetrating |
| Attenuation coefficient μ | Constant in I = I₀e^(−μx) for a given material and photon energy |
| Contrast | Difference in degree of blackening between regions of the image |
| Contrast medium | Substance with large μ introduced into the body to improve contrast |
| Computed tomography | Building a 3D image from 2D section images, each from many X-ray images |

## Exam traps

- Leaving the p.d. in kV in λ_min = hc/(eV).
- Using the power of the tube instead of eV as the photon energy.
- Saying λ_min depends on the target material or tube current.
- Mixing up contrast and sharpness.
- Using x in cm with μ in m⁻¹.
- Describing CT without the "same section, different angles" and "repeated along an axis" stages.
- Claiming X-rays are reflected by bone; they are attenuated (absorbed and scattered).

## Self-test

1. How are the electrons in an X-ray tube released?
2. What happens to most of the energy of the electrons hitting the target?
3. Explain why the X-ray spectrum has a minimum wavelength.
4. Calculate λ_min for a tube operating at 120 kV.
5. What p.d. gives λ_min = 2.0 × 10⁻¹¹ m?
6. A tube current is 4.0 mA. How many electrons hit the target each second?
7. Define contrast in an X-ray image.
8. Why is a barium compound used when imaging the stomach?
9. X-rays pass through 1.5 cm of bone with μ = 60 m⁻¹. What fraction is transmitted?
10. How is the intensity transmitted through two different layers calculated?
11. List the stages by which CT produces a 3D image.
12. Why do two soft tissues show poor contrast on an X-ray image?

**Answers:** 1. Thermionic emission from a heated filament (cathode). 2. It becomes thermal energy in the target. 3. The highest-energy photon is produced when an electron gives all its kinetic energy eV to one photon, so no photon can have a shorter wavelength than hc/(eV). 4. 6.63 × 10⁻³⁴ × 3.00 × 10⁸ / (1.60 × 10⁻¹⁹ × 1.20 × 10⁵) = 1.04 × 10⁻¹¹ m. 5. V = hc/(eλ) = 6.2 × 10⁴ V (62 kV). 6. 4.0 × 10⁻³ / 1.60 × 10⁻¹⁹ = 2.5 × 10¹⁶. 7. The difference in degree of blackening between different areas of the image. 8. It has a large attenuation coefficient, so it shows the outline of the stomach clearly against surrounding soft tissue. 9. e^(−60 × 0.015) = 0.41. 10. I = I₀e^(−(μ₁x₁ + μ₂x₂)), or multiply the two transmitted fractions. 11. Many images of one section from different angles; combined into a 2D image of the section; repeated for sections along an axis; 2D images combined into 3D. 12. Their attenuation coefficients are similar, so similar intensities pass through each.

## Related resources

- [Medical Physics revision notes](/resources/a-physics-medical-physics-revision-notes/) — the whole of Topic 24
- [X-rays practice questions](/resources/cambridge-a-level-physics-9702-a-production-and-use-of-x-rays-practice/)
- [Ultrasound revision notes](/resources/cambridge-a-level-physics-9702-a-production-and-use-of-ultrasound-revision-notes/) — subtopic 24.1
- [PET scanning revision notes](/resources/cambridge-a-level-physics-9702-a-pet-scanning-revision-notes/) — subtopic 24.3
