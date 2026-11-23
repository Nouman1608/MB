---
title: "AQA A-Level Physics (7408): Non-ionising imaging"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Medical physics"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 10.4
syllabusTopics:
  - qualification: "a-level"
    topic: "medical-physics-aqa-alevel"
    subtopic: "non-ionising-imaging-aqa-alevel"
description: "AQA A-level Physics 7408 section 3.10.4 in depth: ultrasound impedance and scans, piezoelectric probes, fibre-optic endoscopes and the MR scanner."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into section **3.10.4 Non-ionising imaging** of the AQA AS and A-level Physics specification (7407/7408), part of the A-level only Medical physics option assessed in Paper 3 Section B. It has three content statements: 3.10.4.1 ultrasound imaging, 3.10.4.2 fibre optics and endoscopy, and 3.10.4.3 the magnetic resonance (MR) scanner. None of these uses ionising radiation, which is their shared safety advantage over X-rays and radionuclides.

The [Medical physics study guide](/resources/aqa-a-level-physics-medical-physics/) gives the option overview. For recall use the [non-ionising imaging revision notes](/resources/aqa-a-level-physics-7408-non-ionising-imaging-revision-notes/), and test yourself with the [non-ionising imaging practice questions](/resources/aqa-a-level-physics-7408-non-ionising-imaging-practice/). Total internal reflection is first met in [Waves](/resources/aqa-a-level-physics-waves/).

## 3.10.4.1 Ultrasound imaging

### Acoustic impedance and reflection

Ultrasound is sound above about 20 kHz; medical scanners use frequencies of a few megahertz. When a pulse meets a boundary between two tissues, part is reflected and part transmitted. The deciding property is the **acoustic impedance**:

**Z = ρc** (kg m⁻² s⁻¹), where ρ is density and c the speed of sound in the material.

The fraction of intensity reflected at normal incidence is

**I_r/I_i = ((Z₂ − Z₁)/(Z₂ + Z₁))²**

and the rest is transmitted. A large difference in Z gives a strong echo; similar values of Z give a weak echo and good transmission.

**Worked example 1.** Use these illustrative impedances (all × 10⁶ kg m⁻² s⁻¹): coupling gel 1.60, skin 1.70, fat 1.38, muscle 1.70, bone 7.80; air 430 kg m⁻² s⁻¹.

```
gel → skin:     ((1.70 − 1.60)/(3.30))² = 9.2 × 10⁻⁴   (almost all transmitted)
fat → muscle:   ((1.70 − 1.38)/(3.08))² = 0.011        (weak but useful echo)
muscle → bone:  ((7.80 − 1.70)/(9.50))² = 0.41         (strong echo)
air → skin:     ((1.70 × 10⁶ − 430)/(1.70 × 10⁶ + 430))² = 0.999
```

Three conclusions follow, and each is a common exam point:

- Without gel, a thin air layer between probe and skin reflects 99.9% of the pulse, so **coupling gel**, with Z close to that of skin, is essential.
- Soft-tissue boundaries reflect about 1%, so most of the pulse continues and later boundaries can still be imaged.
- Bone reflects a large fraction and gas reflects almost everything, so ultrasound **cannot image through bone or air-filled organs** such as the lungs.

### Attenuation

As the pulse travels, its intensity falls because energy is absorbed and scattered by tissue. Attenuation increases with frequency. This creates the central trade-off of ultrasound:

- **Higher frequency** → shorter wavelength → **better resolution** (finer detail), but **more attenuation**, so less depth.
- **Lower frequency** → deeper penetration but poorer resolution.

At 3.5 MHz in soft tissue (c = 1540 m s⁻¹), λ = 1540/3.5 × 10⁶ = 0.44 mm; at 10 MHz, λ = 0.15 mm. Deep abdominal scans use the lower frequency; shallow structures such as the eye use the higher one. Scanners also amplify later echoes more than early ones to compensate for attenuation.

### Piezoelectric transducers

A **piezoelectric crystal** changes shape when a p.d. is applied across it, and produces a p.d. when it is deformed. One crystal does both jobs:

- **Generation**: a short burst of alternating p.d. at the crystal's resonant frequency makes it vibrate and emit an ultrasound pulse.
- **Damping**: backing material behind the crystal stops the vibration quickly, so the pulse is short. Short pulses let echoes from close boundaries be distinguished.
- **Detection**: between pulses the crystal acts as a receiver; returning echoes make it vibrate and produce a small p.d. that is amplified.

The probe must wait for the echoes from the deepest boundary before sending the next pulse. For a depth of 0.20 m the round trip takes 2 × 0.20/1540 = 260 µs, so at most about 3800 pulses can be sent each second.

### A-scans and B-scans

- **A-scan** (amplitude scan): the probe is held still, and echo amplitude is displayed against time. Depth = ct/2, where t is the echo time. Used to measure distances along one line, such as the depth of structures in the eye.
- **B-scan** (brightness scan): the probe is moved or swept, often using an array of crystals. Each echo is shown as a dot whose brightness depends on the echo strength, at a position set by its depth and the probe direction. The dots build a two-dimensional image, used in fetal scanning and for imaging organs.

**Worked example 2.** An A-scan through a section of tissue shows echoes from its front and back surfaces at 40 µs and 95 µs. Find the depth of each surface and the thickness (c = 1540 m s⁻¹).

```
front: 1540 × 40 × 10⁻⁶/2 = 0.0308 m = 30.8 mm
back:  1540 × 95 × 10⁻⁶/2 = 0.0732 m = 73.2 mm
thickness = 42.4 mm
```

### Comparing ultrasound with alternatives

| Advantages | Disadvantages |
|---|---|
| Non-ionising, so safe for fetuses and repeat scans | Lower resolution than CT or MR |
| Cheap and portable | Cannot pass through bone or gas |
| Real-time images of movement | Image quality depends on the operator and on the patient's build |

## 3.10.4.2 Fibre optics and endoscopy

An optical fibre has a **core** of higher refractive index surrounded by a **cladding** of lower refractive index. Light hitting the core–cladding boundary at more than the critical angle is **totally internally reflected**, so it travels along the fibre even when it bends. The cladding protects the core surface and stops light leaking between touching fibres.

**Worked example 3.** Core n = 1.50, cladding n = 1.47: sin c = 1.47/1.50 = 0.980, so c = 78.5°. Rays must strike the boundary at more than 78.5° to the normal; this limits how sharply the fibre can be bent before light escapes.

A **flexible endoscope** contains two fibre bundles:

- A **non-coherent bundle** carries light from an external source into the body. The fibres can be arranged randomly because only light, not an image, is carried; it is cheaper to make.
- A **coherent bundle** carries the image out. The fibres keep the **same relative positions at both ends**, so each fibre carries one small part of the image to the matching place at the other end. An **objective lens** at the distal end forms an image on the end of the bundle; an **eyepiece** or camera views the image at the other end.

Resolution depends on fibre diameter: thinner fibres give more picture elements and finer detail. The endoscope tube also has channels for water, air and surgical instruments. Uses include viewing the stomach, airways or joints and **keyhole surgery**, which needs only small incisions, so patients recover faster with less risk of infection than after open surgery.

## 3.10.4.3 The MR scanner

The specification lists the principles to know:

1. The patient lies in the strong, uniform field of a **superconducting magnet**.
2. **Hydrogen nuclei (protons)** in the body have spin; they **align** with spins parallel to the field and **precess** about the field lines.
3. **Gradient field coils** add a field that varies across the patient, so only one cross-section (and, within it, one small region at a time) meets the conditions for excitation.
4. **Short radio-frequency (RF) pulses** excite protons in successive small regions, changing their spin state.
5. As the excited protons **de-excite**, they **emit RF signals**.
6. The RF signals are **detected** and processed by a **computer** to build a visual image of the cross-section.

Different tissues contain different amounts of hydrogen, mostly in water and fat, so soft tissues are distinguished very well. Production of the fields and relaxation times are not examined.

**Comparing MR**: no ionising radiation and excellent soft-tissue detail with high resolution in any plane; but the scanner is expensive, scans are slow and noisy, the patient must stay still in a confined tube, and metal implants or pacemakers can be dangerous in the strong field.

## Model answer

**Question:** Explain why a gel is applied between an ultrasound probe and the skin. **[2]**

**Answer:** Without gel there is air between probe and skin; the acoustic impedance of air is very much smaller than that of skin, so almost all the ultrasound is reflected at the boundary [1]. The gel has an acoustic impedance close to that of skin, so almost all the ultrasound is transmitted into the body [1].

## Common mistakes

- Forgetting the 2 in depth = ct/2.
- Saying the coherent bundle carries light in; it carries the image out.
- Saying ultrasound is used for lungs or bones.
- Describing MR in terms of X-rays or ionisation.
- Claiming higher frequency penetrates further.

## Exam technique

- **Calculate** reflected fractions to 2 or 3 significant figures, then **comment** on what the number means for the image.
- **Explain** coherent bundles with "same relative positions at each end".
- **Describe** MR as a sequence of the six steps above.
- **Compare**: the specification limits comparisons to resolution, convenience and safety, so organise answers under those headings.

Next, try the [non-ionising imaging practice questions](/resources/aqa-a-level-physics-7408-non-ionising-imaging-practice/).

## Official syllabus

AQA AS and A-level Physics specification (7407/7408), AS and A-level exams June 2016 onwards: section 3.10.4 Non-ionising imaging (A-level only), content statements 3.10.4.1 to 3.10.4.3.
