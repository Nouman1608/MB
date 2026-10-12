---
title: "OCR A Level Physics A: Gamma camera, PET scanning and ultrasound (H556) -- Revision Notes"
seoTitle: "OCR A Level Physics Gamma Camera PET Ultrasound Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Gamma camera, PET scanning and ultrasound"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H556"]
syllabusSeries: "Version 3.0 (March 2026), for first assessment in 2017"
order: 74
syllabusTopics:
  - qualification: "a-level"
    topic: "particles-and-medical-physics"
    subtopic: "medical-imaging-ocr-alevel"
description: "Condensed H556 revision notes for 6.5.2 and 6.5.3: tracers, gamma camera, PET, ultrasound, acoustic impedance, gel and Doppler, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---
These revision notes condense sections 6.5.2 (Diagnostic methods in medicine) and 6.5.3 (Using ultrasound) of the OCR Advanced GCE in Physics A (H556) specification, Version 3.0 (March 2026), for first assessment in 2017. Full explanations and worked examples are in the [study guide](/resources/ocr-a-level-physics-gamma-camera-pet-scanning-and-ultrasound/); test yourself with the [practice set](/resources/ocr-a-level-physics-gamma-camera-pet-scanning-and-ultrasound-practice/). The course hub is [OCR A Level Physics](/boards/ocr/a-level/physics/), the printable list is the [checklist](/checklists/ocr/a-level/physics/), and the [free 10-minute diagnostics](/diagnostics/) show where to focus. X-rays and CAT scanning (6.5.1) are covered separately.

## Tracers, 6.5.2(a)

| | Technetium-99m | Fluorine-18 |
|---|---|---|
| Emission | Gamma only (about 140 keV) | Positron (β⁺), then two gamma photons from annihilation |
| Half-life | About 6 hours | About 110 minutes |
| Used with | Gamma camera | PET scanner |
| Carried by | Compound chosen for the organ | Fluorodeoxyglucose, a glucose-like molecule |

A tracer is a radioactive substance attached to a molecule that goes where the doctor wants to look. A good one emits gamma rays (they leave the body), and has a half-life long enough to use and short enough to limit dose. The "m" in Tc-99m means metastable.

Activity after time t: A = A0 × (1/2)^(t / half-life).

## Gamma camera, 6.5.2(b) and (c)

| Component | Job |
|---|---|
| Collimator | Lead plate with parallel holes; only photons travelling along the holes pass, so the image is not blurred |
| Scintillator | Crystal that turns each absorbed gamma photon into a flash of light |
| Photomultiplier tubes | Light releases electrons from a photocathode; dynodes multiply them into a pulse |
| Computer and display | Compares pulses from tubes to find the position, adds a count, builds the image |

Method for describing image formation, in steps:

1. Tracer in the organ emits gamma photons in all directions.
2. The collimator lets through only those travelling straight along its holes.
3. A photon in the crystal gives a flash of light.
4. The tubes nearest the flash give the biggest pulses.
5. The computer works out the position and builds up the counts into an image.

Diagnosis: shows function, not just structure. Hot spots (high uptake) and cold spots (low uptake) show disease; images taken over time show how fast the organ takes up and clears the tracer.

## PET scanner, 6.5.2(d) and (e)

- Positron meets an electron and they annihilate: mass becomes two gamma photons.
- Momentum conservation: the photons go in opposite directions.
- Energy conservation: each carries the electron rest energy, mc² = 0.511 MeV (so 1.02 MeV in all).
- A ring of detectors records photons arriving together. Each pair defines a line through the annihilation. The computer finds where many lines cross.
- No collimator is used, so more of the radiation is detected than in a gamma camera.
- Resolution is limited because the positron travels a short distance before it annihilates.
- Diagnosis: fluorodeoxyglucose collects in tissue using much glucose, so tumours, the brain and the heart show brightly. Repeat scans show whether treatment has reduced activity.

Issues with an expensive scanner: purchase and running cost, a nearby supply of F-18 because of its short half-life, staff training, how many patients benefit, dose against benefit, and travel or waiting times without it.

## Ultrasound, 6.5.3(a) to (c)

- Longitudinal wave, frequency above 20 kHz. Scanners use a few MHz.
- Higher frequency: shorter wavelength (λ = v/f), more detail, but more absorption, so less depth.
- Piezoelectric effect: a p.d. across the crystal changes its shape, and deforming it gives a p.d.
- A transducer is one crystal that emits pulses (alternating p.d. makes it vibrate) and receives echoes (vibration gives a p.d.).
- A-scan: echo strength against time from one direction. Depth d = ct/2.
- B-scan: many A-scans combined into a two-dimensional image; brightness shows echo strength.

## Acoustic impedance and reflection, 6.5.3(d) to (f)

| Quantity | Equation | Unit |
|---|---|---|
| Acoustic impedance | Z = ρc | kg m⁻² s⁻¹ |
| Reflected fraction | Ir/I0 = (Z2 − Z1)² / (Z2 + Z1)² | none |
| Transmitted fraction | 1 − Ir/I0 | none |

Method for a reflection question:

1. Find Z for each medium, using Z = ρc if only density and speed are given.
2. Subtract, add, then square the ratio.
3. Convert to intensity or percent if asked.
4. Comment: a big difference in Z means strong reflection and little transmission.

Gel: air has a tiny Z, skin a large one, so a bare air gap would reflect nearly everything. The gel removes air and has Z close to skin (impedance matching), so most ultrasound enters.

## Doppler, 6.5.3(g)

Δf / f = 2v cos θ / c

- θ is the angle between the beam and the blood flow; at 90° there is no shift.
- The 2 arises because the moving blood acts as a receiver and then a source.
- Rearranged: v = c Δf / (2 f cos θ).
- Check the units: f and Δf in Hz (not MHz and kHz mixed).
- Blood speed comes out in m s⁻¹ because c is in m s⁻¹.

## Worked reminders

**Decay.** A Tc-99m source of 300 MBq is used 12 h later. That is 2 half-lives, so A = 300 × (1/2)² = 75 MBq.

**Reflection.** A beam of intensity 8.0 mW m⁻² crosses a boundary between tissues of Z = 1.38 × 10⁶ and 1.62 × 10⁶ kg m⁻² s⁻¹.

```
Ir/I0 = (0.24 × 10⁶ / 3.00 × 10⁶)² = 0.0064
Ir = 0.0064 × 8.0 = 0.051 mW m⁻²;  transmitted = 7.95 mW m⁻²
```

**Doppler.** A 6.0 MHz beam meets blood at 0.80 m s⁻¹, at 30° to the flow (c = 1540 m s⁻¹).

```
Δf = 2 × 6.0×10⁶ × 0.80 × cos 30° / 1540 = 5.4 × 10³ Hz
```

**Image description.** For any "describe how the image is formed" question, name each component in order and say what it does to the signal. For PET the order is: positron emitted, annihilation, two photons in opposite directions, detectors in a ring, coincidence, lines of response, computer.

## Must-know distinctions

- Gamma camera: single gamma photons, collimator needed. PET: pair of photons from annihilation, no collimator.
- Tc-99m is a gamma emitter. F-18 is a positron emitter.
- A-scan: a graph for one line. B-scan: a two-dimensional image.
- Z is a property of the medium. Reflection depends on the difference between two Z values.
- Gamma camera: shows where single photons came from by blocking the rest. PET: shows where pairs came from by timing.
- Ultrasound intensity reflected and transmitted add up to the incident intensity at a boundary.

## Quick self-test

1. A Tc-99m source of 400 MBq is used 3.5 h later. Half-life 6.0 h. Find the activity.
2. F-18 of 250 MBq is used 120 min later. Half-life 110 min. Find the activity.
3. A gel has density 1030 kg m⁻³ and speed 1480 m s⁻¹. Find Z.
4. Two media have Z = 1.50 × 10⁶ and 2.25 × 10⁶ kg m⁻² s⁻¹. Find Ir/I0.
5. An echo arrives 52 μs after the pulse, with speed 1540 m s⁻¹. Find the depth.
6. A 3.5 MHz beam at 40° gives a shift of 1.8 kHz (c = 1540 m s⁻¹). Find v.
7. State the energy of one annihilation photon in MeV and the number of photons produced.
8. Why does the gamma camera need a collimator?
9. Why is F-18 made near the PET scanner?
10. By what factor is the Doppler shift changed if the angle goes from 40° to 70°, other things equal?

### Answers

1. 400 × (1/2)^(3.5/6.0) = 267 MBq.
2. 250 × (1/2)^(120/110) = 117 MBq.
3. 1030 × 1480 = 1.52 × 10⁶ kg m⁻² s⁻¹.
4. (0.75/3.75)² = 0.040.
5. d = 1540 × 52 × 10⁻⁶ / 2 = 0.040 m (4.0 cm).
6. v = 1540 × 1.8 × 10³ / (2 × 3.5 × 10⁶ × cos 40°) = 0.52 m s⁻¹.
7. 0.511 MeV; two photons.
8. It allows only photons travelling along the holes to reach the crystal, so each point in the image corresponds to a line through the patient.
9. Its half-life of about 110 minutes means the activity falls quickly in transit.
10. cos 70° / cos 40° = 0.45, so the shift falls to 45% of its value.

## Where marks are usually lost

- Giving the gel as a lubricant, with no mention of impedance or air.
- Using d = ct rather than d = ct/2.
- Dropping the 2 or cos θ in the Doppler equation, or mixing MHz and Hz.
- Saying PET photons travel the same way: they go in opposite directions.
- Saying the gamma camera detects positrons.
- Writing the reflection fraction without squaring, or giving a negative answer.
- Describing the collimator, scintillator and tubes without saying what each does to the signal.
- Giving a one-sided answer when asked to discuss a scanner's cost and benefit.

## Official syllabus

OCR Advanced GCE in Physics A (H556), specification Version 3.0 (March 2026), for first assessment in 2017, published by OCR: sections 6.5.2 and 6.5.3.
