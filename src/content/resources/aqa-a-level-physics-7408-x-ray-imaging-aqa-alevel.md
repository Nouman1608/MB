---
title: "AQA A-Level Physics (7408): X-ray imaging"
resourceType: "study-guides"
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
description: "AQA A-level Physics 7408 section 3.10.5 in depth: X-ray production and spectra, controlling the beam, detectors and enhancement, attenuation and CT scans."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into section **3.10.5 X-ray imaging** of the AQA AS and A-level Physics specification (7407/7408), part of the A-level only Medical physics option assessed in Paper 3 Section B. The sub-section has four content statements: 3.10.5.1 the physics of diagnostic X-rays, 3.10.5.2 image detection and enhancement, 3.10.5.3 absorption of X-rays, and 3.10.5.4 the CT scanner.

The option overview is in the [Medical physics study guide](/resources/aqa-a-level-physics-medical-physics/). For recall use the [X-ray imaging revision notes](/resources/aqa-a-level-physics-7408-x-ray-imaging-aqa-alevel-revision-notes/), and test yourself with the [X-ray imaging practice questions](/resources/aqa-a-level-physics-7408-x-ray-imaging-aqa-alevel-practice/). Photon energy and the electronvolt come from [Particles and radiation](/resources/aqa-a-level-physics-particles-and-radiation/).

## 3.10.5.1 The physics of diagnostic X-rays

### Production

In an X-ray tube, electrons from a heated cathode are accelerated through a large p.d. V towards a metal **anode** (target), usually tungsten. Each electron arrives with kinetic energy eV. Most of this energy is transferred to the target as internal energy; only around 1% emerges as X-ray photons.

**Maximum photon energy.** An electron that loses all its energy in one interaction produces the most energetic photon possible: **E_max = eV**, so the minimum wavelength is λ_min = hc/eV.

**Worked example 1.** A tube runs at 70 kV with a current of 8.0 mA.

```
E_max = 1.60 × 10⁻¹⁹ × 7.0 × 10⁴ = 1.12 × 10⁻¹⁴ J (70 keV)
λ_min = 6.63 × 10⁻³⁴ × 3.00 × 10⁸ / 1.12 × 10⁻¹⁴ = 1.78 × 10⁻¹¹ m
electrons per second = 8.0 × 10⁻³ / 1.60 × 10⁻¹⁹ = 5.0 × 10¹⁶
power delivered to the anode = 7.0 × 10⁴ × 8.0 × 10⁻³ = 560 W
```

With about 1% emerging as X-rays, roughly 550 W heats the anode.

### The energy spectrum

A graph of intensity against photon energy has two parts:

- A **continuous spectrum** (bremsstrahlung), from electrons decelerating in the electric fields of target nuclei. It extends up to E_max = eV, where it falls to zero. Low-energy photons are mostly absorbed in the tube window and any filter, so the curve also falls towards zero at low energy.
- A **characteristic spectrum** of sharp lines on top. An incoming electron knocks an inner-shell electron out of a target atom; an electron from a higher level drops into the vacancy, emitting a photon whose energy equals the difference between the levels. The line energies depend only on the target element.

How the operating settings change the spectrum:

| Change | Effect on the spectrum |
|---|---|
| Increase tube current | More electrons per second: intensity rises at every energy; shape and E_max unchanged |
| Increase tube voltage | E_max rises; intensity rises at all energies; characteristic lines stay at the same energies (and appear only once eV exceeds the inner-shell energy) |
| Change target element | Characteristic lines move; continuous spectrum's E_max unchanged |
| Add aluminium filter | Low-energy part removed; mean photon energy rises |

### The rotating-anode tube

Because so much energy becomes heat, the anode is a disc that **rotates rapidly**, so the electron beam strikes a different part of its rim at each instant. The heat is spread over a ring rather than one spot, so the focal spot can be small without the target melting. The anode is made of a metal with a high melting point, and heat is radiated away from it.

### Controlling the beam

- **Intensity** (number of photons): tube current and exposure time. The total exposure is proportional to current × time (often quoted in mA s).
- **Photon energy** (penetrating power): tube voltage.
- **Patient dose**: an **aluminium filter** absorbs low-energy photons that would be absorbed in the patient without reaching the detector, so they add dose but not image information. A collimator limits the beam to the area being imaged. Short exposures and sensitive detectors also help.
- **Image sharpness**: the X-rays come from a focal spot of finite size, so edges have a blurred shadow. The blur is reduced by a **small focal spot**, a **large source-to-patient distance** and keeping the **patient close to the detector**. The patient must keep still.
- **Contrast**: choosing a suitable tube voltage (lower energies show larger differences in absorption between soft tissues), and an **anti-scatter grid** of lead strips in front of the detector, which absorbs scattered photons that would fog the image.

**Worked example 2: geometric blur.** Focal spot 1.2 mm wide, source-to-object 0.80 m, object-to-detector 0.20 m. By similar triangles, blur width = 1.2 × 0.20/0.80 = **0.30 mm**. Halving the object-to-detector distance halves the blur.

## 3.10.5.2 Image detection and enhancement

**Flat panel (FTP) detector.** An **X-ray scintillator** layer converts each X-ray photon into many visible photons. Beneath it, an array of **photodiode pixels** converts the light into charge. The charges are read out row by row by **electronic scanning** to form a digital image.

Advantages compared with photographic film: the image is available almost immediately; it is digital, so it can be stored, transmitted and enhanced (contrast and brightness adjusted); the detector is more sensitive, so a lower dose is needed; and no chemical processing is required.

**Barium meal.** Soft tissues of the gut absorb X-rays similarly to the tissue around them, so they barely show. The patient swallows a barium compound, an **X-ray opaque** material that absorbs X-rays strongly. It coats the lining of the gut, which then shows clearly. This is contrast enhancement by adding an absorber.

**Intensifying screen.** Film is far more sensitive to light than to X-rays. Screens containing a phosphor are placed on either side of the film; each X-ray photon absorbed produces many light photons that expose the film. The same image is obtained with a much lower X-ray dose, at the cost of slightly less sharpness because the light spreads.

**Fluoroscopic image intensifier.** For live (moving) images, X-rays strike an input phosphor and produce light; the light releases electrons from a photocathode; the electrons are accelerated and focused onto a small output phosphor, giving a much brighter image that a camera displays in real time. It is used, for example, to watch a barium meal move or to guide a procedure.

## 3.10.5.3 Absorption of X-rays

The intensity of a parallel, monochromatic beam falls **exponentially** with thickness x:

**I = I₀e^(−μx)**

μ is the **linear attenuation coefficient** (m⁻¹). The **half-value thickness** x½ is the thickness that halves the intensity: x½ = ln 2/μ. The **mass attenuation coefficient** is **μm = μ/ρ** (m² kg⁻¹), which allows materials of different density to be compared.

**Differential tissue absorption**: bone absorbs X-rays much more strongly than soft tissue, and air in the lungs absorbs very little, so the transmitted intensity varies across the body and forms the image. The absorption processes themselves are not required.

**Worked example 3.** Illustrative values: soft tissue μ = 18 m⁻¹; bone μ = 55 m⁻¹, ρ = 1900 kg m⁻³. Compare a 4.0 cm path through soft tissue alone with a 4.0 cm path containing 1.0 cm of bone.

```
soft tissue only:  e^(−18 × 0.040) = 0.487
with bone:         e^(−(55 × 0.010 + 18 × 0.030)) = e^(−1.09) = 0.336
ratio = 1.45, so the bone shows as a lighter (less exposed) region
x½ for soft tissue = ln 2/18 = 0.0385 m;  μm for bone = 55/1900 = 0.029 m² kg⁻¹
```

**Worked example 4: why the filter works.** Take illustrative attenuation coefficients for aluminium of 300 m⁻¹ for low-energy photons and 50 m⁻¹ for high-energy photons. A 3.0 mm filter transmits e^(−0.90) = 0.41 of the low-energy photons but e^(−0.15) = 0.86 of the high-energy ones, so the beam reaching the patient is "harder".

## 3.10.5.4 The CT scanner

- The **X-ray tube moves** in a circle around the patient.
- It produces a **narrow, monochromatic** beam (a thin fan or pencil), so attenuation follows I = I₀e^(−μx) cleanly.
- An **array of detectors** on the opposite side records the transmitted intensity for many angles.
- A **computer** combines the measurements to calculate the attenuation in each small volume of a slice, producing a cross-sectional image. Successive slices build a three-dimensional image.

The specification limits comparisons to **resolution, cost and safety**: CT gives much better resolution and soft-tissue contrast than a plain X-ray and shows 3D structure, but the scanner is expensive and the patient dose is much higher. Detector construction is not examined.

## Common mistakes

- Saying higher current raises E_max: only voltage does.
- Moving the characteristic lines when the voltage changes.
- Using log instead of ln for half-value thickness.
- Saying the filter "reduces the intensity to protect the patient": it removes low-energy photons that add dose without forming the image.
- Confusing the intensifying screen (film) with the image intensifier (live images).

## Exam technique

- **Sketch** spectra with labelled axes, E_max on the energy axis and characteristic lines as spikes.
- **Explain** control methods by naming the setting and the physical reason.
- **Calculate** attenuation with consistent units (x in metres if μ is in m⁻¹).
- **Compare** CT with other methods under the three named headings.

Next, try the [X-ray imaging practice questions](/resources/aqa-a-level-physics-7408-x-ray-imaging-aqa-alevel-practice/).

## Official syllabus

AQA AS and A-level Physics specification (7407/7408), AS and A-level exams June 2016 onwards: section 3.10.5 X-ray imaging (A-level only), content statements 3.10.5.1 to 3.10.5.4.
