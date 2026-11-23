---
title: "AQA A-Level Physics (7408): X-ray imaging -- Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Medical physics"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 10.5
syllabusTopics:
  - qualification: "a-level"
    topic: "medical-physics-aqa-alevel"
    subtopic: "x-ray-imaging-aqa-alevel"
description: "Condensed AQA A-level Physics 7408 X-ray imaging notes (3.10.5): spectra, beam controls, FTP detector, barium meal, attenuation, CT and a self-test."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section **3.10.5 X-ray imaging** of the AQA AS and A-level Physics specification (7407/7408), part of the A-level only Medical physics option. Full explanations and worked examples are in the [X-ray imaging study guide](/resources/aqa-a-level-physics-7408-x-ray-imaging/); test yourself with the [X-ray imaging practice questions](/resources/aqa-a-level-physics-7408-x-ray-imaging-practice/).

## Equations

| Equation | Use |
|---|---|
| E_max = eV | Maximum photon energy for tube voltage V |
| λ_min = hc/eV | Shortest wavelength in the beam |
| I = I₀e^(−μx) | Exponential attenuation of a narrow monochromatic beam |
| x½ = ln 2/μ | Half-value thickness |
| μm = μ/ρ | Mass attenuation coefficient (m² kg⁻¹) |
| P = VI | Power delivered to the anode (about 99% becomes heat) |

## Key terms

| Term | Meaning |
|---|---|
| Continuous spectrum | Photons from electrons decelerating in the target; up to eV |
| Characteristic spectrum | Lines from inner-shell vacancies being filled; energies set by the target element |
| Rotating anode | Spinning target disc that spreads the heat so the focal spot can be small |
| Focal spot | Area of the anode the electrons strike; smaller = sharper image |
| Aluminium filter | Removes low-energy photons that add dose without reaching the detector |
| Anti-scatter grid | Lead strips that absorb scattered photons to improve contrast |
| FTP detector | Scintillator → photodiode pixels → electronic scanning; digital image |
| X-ray opaque material | Strong absorber (barium compound) used to show the gut |
| Intensifying screen | Phosphor that turns X-rays into light to expose film with less dose |
| Image intensifier | Phosphor → photocathode → accelerated electrons → bright live image |
| Linear attenuation coefficient μ | Fractional loss of intensity per unit thickness (m⁻¹) |
| Half-value thickness | Thickness that halves the intensity |

## Spectrum changes

- **Current up**: more photons at every energy; E_max and line positions unchanged.
- **Voltage up**: E_max up, more intensity everywhere; lines fixed (appear only when eV exceeds the shell energy).
- **Target changed**: lines move; E_max set by V only.
- **Filter added**: low-energy end removed; mean energy up ("harder" beam).

## Controls in one table

| Quantity | How it is controlled |
|---|---|
| Intensity | Tube current and exposure time (mA s) |
| Photon energy | Tube voltage |
| Patient dose | Aluminium filter, collimation, short exposure, sensitive detector |
| Sharpness | Small focal spot, long source-to-patient distance, patient close to detector, patient still |
| Contrast | Suitable voltage; anti-scatter grid; contrast media such as barium |

## Detectors and enhancement

- **FTP advantages over film**: immediate, digital (store, send, enhance), lower dose, no chemical processing.
- **Barium meal**: gut tissue has similar absorption to its surroundings; barium absorbs strongly, so it outlines the gut.
- **Intensifying screen**: film is more sensitive to light than X-rays, so less dose for the same exposure; slight loss of sharpness.
- **Image intensifier**: real-time images during procedures.

## CT scanner

- Tube rotates round the patient; narrow monochromatic beam; detector array opposite; computer builds slices into 3D.
- Compared with plain X-ray: better resolution and soft-tissue contrast, 3D; but expensive and a higher dose.
- Detector construction is not examined.

## Exam traps

- Voltage, not current, sets E_max.
- Characteristic lines do not move with voltage.
- x½ = ln 2/μ, not log 2/μ.
- Units: μ in m⁻¹ needs x in m.
- The filter reduces dose by removing **low-energy** photons, not by reducing all photons equally.
- Intensifying screen (film) and image intensifier (live) are different devices.
- Bone appears light on the image because it transmits least.

## Self-test

1. Calculate E_max for a tube operating at 90 kV, in joules.
2. Calculate λ_min for the same tube.
3. Why does the anode rotate?
4. Which tube setting controls the number of photons without changing their maximum energy?
5. Explain why an aluminium filter reduces patient dose.
6. State two ways of making the image sharper.
7. A material has μ = 25 m⁻¹. Calculate its half-value thickness.
8. What fraction of the intensity passes through 5.0 cm of this material?
9. What fraction passes through three half-value thicknesses?
10. Why is a barium meal used?
11. Give two advantages of an FTP detector over film.
12. State one advantage and one disadvantage of CT compared with a plain X-ray.

### Answers

1. 1.60 × 10⁻¹⁹ × 9.0 × 10⁴ = **1.44 × 10⁻¹⁴ J** (90 keV).
2. 6.63 × 10⁻³⁴ × 3.00 × 10⁸/1.44 × 10⁻¹⁴ = **1.38 × 10⁻¹¹ m**.
3. To **spread the heat** over a ring of the anode so the small focal spot does not melt.
4. The **tube current** (and exposure time).
5. Low-energy photons would be **absorbed in the patient** without reaching the detector; the filter removes them, so they add no dose.
6. Any two: **small focal spot**; **large source-to-patient distance**; **patient close to the detector**; patient keeps still.
7. ln 2/25 = **0.028 m** (2.8 cm).
8. e^(−25 × 0.050) = e^(−1.25) = **0.29**.
9. (1/2)³ = **1/8**.
10. Gut tissue absorbs X-rays like the tissue around it; barium is **X-ray opaque**, so it **outlines the gut** and increases contrast.
11. Any two: **immediate** image; **digital** so it can be stored and enhanced; **lower dose**; no chemical processing.
12. Advantage: **better resolution / 3D / soft-tissue contrast**. Disadvantage: **higher dose** or **more expensive**.

## Frequently asked questions

**Why does increasing the tube voltage change the X-ray spectrum differently from increasing the current?**
Voltage sets the energy of each electron, so it raises the maximum photon energy and the intensity at all energies. Current sets only the number of electrons per second, so it scales the intensity without changing the shape or the maximum energy.

**What is the half-value thickness?**
It is the thickness of a material that reduces the intensity of an X-ray beam to half. It equals ln 2 divided by the linear attenuation coefficient.

## Official syllabus

AQA AS and A-level Physics specification (7407/7408), AS and A-level exams June 2016 onwards: section 3.10.5 X-ray imaging (A-level only).
