---
title: "OCR A Level Physics A: Gamma camera, PET scanning and ultrasound (H556)"
seoTitle: "OCR A Level Physics Gamma Camera, PET, Ultrasound Guide"
resourceType: "study-guides"
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
description: "OCR A Level Physics A (H556) study guide to sections 6.5.2 and 6.5.3: Tc-99m and F-18 tracers, gamma camera, PET, ultrasound, impedance and Doppler."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---
This study guide follows the OCR Advanced GCE in Physics A (H556) specification, Version 3.0 (March 2026), for first assessment in 2017. It covers 6.5.2 (Diagnostic methods in medicine), statements (a) to (e), and 6.5.3 (Using ultrasound), statements (a) to (g). X-rays, attenuation and CAT scanning (6.5.1) are taught separately. Next: the [revision notes](/resources/ocr-a-level-physics-gamma-camera-pet-scanning-and-ultrasound-revision-notes/) and [practice set](/resources/ocr-a-level-physics-gamma-camera-pet-scanning-and-ultrasound-practice/). See the [course hub](/boards/ocr/a-level/physics/), the [checklist](/checklists/ocr/a-level/physics/) and the [free 10-minute diagnostics](/diagnostics/).

Data used: c = 3.00 × 10⁸ m s⁻¹, e = 1.60 × 10⁻¹⁹ C, h = 6.63 × 10⁻³⁴ J s; densities and sound speeds are given in each example. Photon energy E = hf is in the [photons guide](/resources/ocr-a-level-physics-photons-photoelectric-effect-and-wave-particle-duality/) and v = fλ in the [wave motion guide](/resources/ocr-a-level-physics-wave-motion-polarisation-and-wave-effects/).

## What this unit covers

| Statement | What you must be able to do |
|---|---|
| 6.5.2(a) | Medical tracers: technetium-99m and fluorine-18 |
| 6.5.2(b), (c) | Gamma camera components, image formation and diagnosis |
| 6.5.2(d), (e) | PET: annihilation, image formation, diagnosis; issues of an expensive scanner |
| 6.5.3(a), (b) | Ultrasound above 20 kHz; piezoelectric effect; transducer |
| 6.5.3(c) | A-scan and B-scan |
| 6.5.3(d), (e) | Z = ρc; Ir/I0 = (Z2 − Z1)² / (Z2 + Z1)² |
| 6.5.3(f) | Impedance matching; the gel |
| 6.5.3(g) | Doppler shift Δf/f = 2v cos θ / c for blood speed |

## 6.5.2(a) Medical tracers

A medical tracer is a radioactive substance, attached to a molecule the body handles in a known way, that is put into a patient so that its radiation can be detected from outside. The molecule carries it to the organ or process under study.

A good tracer emits gamma rays, which leave the body, and has a half-life long enough to use but short enough to keep the dose small.

**Technetium-99m (Tc-99m)** is a gamma emitter: its photons (about 140 keV) escape the body, and it gives out no alpha or beta. Its half-life is about 6 hours. The "m" means metastable: an excited nucleus that decays by gamma emission. 

**Fluorine-18 (F-18)** is a positron (β⁺) emitter with a half-life of about 110 minutes, attached to a glucose-like molecule (fluorodeoxyglucose) for PET scanning. It must be made close to where it is used.

**Worked example 1.** A Tc-99m injection of 600 MBq is used 9.0 h later (half-life 6.0 h): 1.5 half-lives, so A = 600 × (1/2)^1.5 = 212 MBq.

**Worked example 2.** F-18 of activity 370 MBq is made at a cyclotron and reaches the scanner 3.0 h later (half-life 110 min).

```
180/110 = 1.636 half-lives; fraction left = (1/2)^1.636 = 0.322
A = 370 × 0.322 = 119 MBq
```

About two thirds has decayed in transit, so F-18 needs a nearby supply and a tight schedule.

## 6.5.2(b) and (c) The gamma camera

A gamma camera makes an image of the gamma photons coming from tracer inside the patient. Follow a photon through in order.

1. **Collimator.** A thick lead plate with many narrow parallel holes. Only photons travelling nearly along the axis of a hole get through; photons travelling at an angle are absorbed by the lead walls (the septa). Without it the image would be a blur.
2. **Scintillator.** A crystal (sodium iodide with a small thallium impurity is the usual one). A gamma photon is absorbed and its energy is re-emitted as a flash of many visible or near-ultraviolet photons.
3. **Photomultiplier tubes.** An array of tubes sits behind the crystal. Light hitting a tube's photocathode releases electrons by the photoelectric effect, and a chain of dynodes multiplies them into a measurable pulse. The tube nearest the flash gives the biggest pulse.
4. **Computer and display.** The computer compares pulses from neighbouring tubes to locate the flash and adds one count there. Thousands of counts build the image, with brighter areas meaning more tracer.

The collimator absorbs most photons, so few are detected and scans take a long time.

**Diagnosis (6.5.2(c)).** The gamma camera shows function. The tracer compound is chosen to go where the doctor wants to look. In a bone scan, Tc-99m on a bone-seeking compound collects where bone is active, so a hot spot can indicate a fracture or tumour. A series of images over time shows how fast an organ takes up and clears the tracer, and low uptake (a cold spot) can show a region that is not working.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-medical-physics--04-aphy-medical-xray-production.webp" width="900" height="1210" alt="A heated filament releases electrons that a high voltage accelerates onto a tungsten target in a copper anode inside a lead-lined, evacuated tube. The spectrum has a sharp cut-off at the shortest wavelength hc/eV: 1.55 and 3.11 times 10 to the minus 11 m for 80 kV and 40 kV. Narrow characteristic lines depend on the target and appear only if eV is large enough." loading="lazy">
  <figcaption>Tube voltage sets the shortest wavelength (maximum photon energy); tube current sets the intensity.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-medical-physics--07-aphy-medical-gamma-camera.webp" width="900" height="990" alt="Gamma photons from tracer in an organ pass through a lead collimator that only lets photons travelling straight along a hole through; photons at an angle are absorbed. Each photon makes a flash in the crystal, the photomultiplier tubes give pulses (largest from the nearest tube) and the computer uses them to add a count at that place in the image." loading="lazy">
  <figcaption>A gamma camera forms an image of tracer distribution, one counted photon at a time.</figcaption>
</figure>


## 6.5.2(d) and (e) PET scanning

**Positron emission tomography (PET)** uses a positron emitter such as F-18. The key physics is annihilation.

A positron is the antiparticle of the electron. After emission it travels about a millimetre through tissue, slows down, and meets an electron. The pair annihilate: their mass is converted to energy in the form of two gamma photons.

- Momentum is conserved: the pair has almost none before, so the photons leave in opposite directions.
- Energy is conserved: each photon carries the rest energy of one electron.

**Worked example 3.** Each photon carries 0.511 MeV, the rest energy mc² of an electron. Find its frequency and wavelength.

```
E = 0.511 × 10⁶ × 1.60 × 10⁻¹⁹ = 8.18 × 10⁻¹⁴ J
f = E/h = 1.23 × 10²⁰ Hz;  λ = c/f = 2.43 × 10⁻¹² m
```

**The PET scanner.** The patient lies inside a ring of detectors (scintillators with photomultiplier tubes). When two detectors on opposite sides record photons at almost the same instant, the computer takes it as one annihilation lying somewhere along the straight line joining those two detectors. Millions of such lines are recorded. The computer finds where the lines cross most densely and builds a map (a tomographic image) of where the positrons were emitted.

No collimator is needed, because the line comes from the pair of photons, so PET detects a much larger fraction of the emitted radiation than a gamma camera does. Sharpness is limited by the distance the positron travels before annihilating.

**Diagnosis (6.5.2(e)).** F-18 is attached to fluorodeoxyglucose, a molecule that cells take up like glucose. Tissue that uses a lot of glucose shows up bright: active tumours, and the more active parts of the brain or heart. PET can therefore show a tumour that is working, and whether a treatment has reduced its activity. Compared with a gamma camera, PET is more sensitive but needs the tracer made nearby.

**Issues in equipping a hospital with an expensive scanner.** You may be asked to weigh these:

- Cost of buying and running the scanner, supplying F-18, and trained staff.
- How many patients would benefit, against other uses of the money.
- Radiation dose to patients and staff, against the value of the diagnosis.
- Travel and waiting times if no scanner is available locally.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-medical-physics--06-aphy-medical-ct-scanner.webp" width="900" height="1110" alt="A CT scanner rotates an X-ray tube so that a thin fan beam crosses one slice of the body from many angles, recorded by a ring of detectors. A computer combines the readings into a grey-scale image whose pixel brightness shows how strongly each small volume absorbs. Moving the couch gives a series of slices that build a 3-D image." loading="lazy">
  <figcaption>CT combines many angled X-ray views of each slice, then stacks slices into a 3-D image.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-medical-physics--08-aphy-medical-pet.webp" width="900" height="1030" alt="A positron from a tracer such as fluorine-18 annihilates with an electron to give two 0.511 MeV gamma photons travelling in opposite directions. A ring of detectors records photons that arrive together; the source lies on the line joining the two detectors. Lines from many events cross at the tracer-rich tissue." loading="lazy">
  <figcaption>PET detects pairs of back-to-back photons, so each coincidence marks a line through the source.</figcaption>
</figure>


## 6.5.3(a) to (c) Ultrasound basics

Ultrasound is a longitudinal wave with frequency greater than 20 kHz. Medical scanners usually use a few megahertz. Since λ = v/f, a higher frequency gives a shorter wavelength and finer detail, but it is absorbed more quickly and penetrates less deeply.

**The piezoelectric effect.** In a piezoelectric crystal, a p.d. across it makes it change shape, and squeezing it produces a p.d. One crystal does both jobs. An alternating p.d. at the right frequency makes the crystal vibrate and emit ultrasound pulses. Between pulses the same crystal receives echoes, which make it vibrate and give a small alternating p.d.

**A-scan.** One transducer sends a short pulse in a fixed direction and records echoes against time. The display is a graph of echo strength against time (and so depth). Each peak marks a boundary. If an echo returns after time t, the boundary is at depth d = ct/2 (the factor 2 is because the pulse goes there and back).

**B-scan.** An array of transducers (or a moved one) takes many A-scans across the body, and the computer combines them into a two-dimensional image in which brightness shows echo strength.

**Worked example 4.** An echo from a boundary returns 78 μs after the pulse. The speed of ultrasound in the tissue is 1540 m s⁻¹.

```
d = ct/2 = 1540 × 78 × 10⁻⁶ / 2 = 0.060 m = 6.0 cm
```

To image to 18 cm, the next pulse must wait at least 2 × 0.18 / 1540 = 234 μs.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-medical-physics--01-aphy-medical-ultrasound-echo.webp" width="900" height="970" alt="A probe sends a pulse down through fat, muscle and bone; echoes from the fat-muscle and muscle-bone boundaries return after 26 and 78 microseconds. Because the pulse goes there and back, the bone surface is at d = ct/2 = 6.0 cm. The muscle-bone echo is far stronger (41 percent) than the fat-muscle one (1.4 percent)." loading="lazy">
  <figcaption>Pulse-echo ultrasound: echo time gives depth through d = ct/2, and echo strength depends on the impedance change at each boundary.</figcaption>
</figure>


## 6.5.3(d) and (e) Acoustic impedance and reflection

The acoustic impedance of a medium is Z = ρc, where ρ is the density and c the speed of ultrasound in it. The unit is kg m⁻² s⁻¹.

At a boundary, part of the intensity is reflected and part is transmitted. For a beam at right angles to the boundary:

Ir / I0 = (Z2 − Z1)² / (Z2 + Z1)²

where I0 is the incident intensity, Ir the reflected intensity, and Z1 and Z2 the impedances on either side. The order of the media does not matter. The transmitted fraction is 1 − Ir/I0.

**Worked example 5.** Fat has density 920 kg m⁻³ and ultrasound speed 1450 m s⁻¹. Muscle has density 1080 kg m⁻³ and speed 1560 m s⁻¹. Bone has density 1900 kg m⁻³ and speed 4080 m s⁻¹.

```
Z(fat) = 1.334 × 10⁶;  Z(muscle) = 1.685 × 10⁶;  Z(bone) = 7.75 × 10⁶  (kg m⁻² s⁻¹)

fat to muscle:  (1.685 - 1.334)² / (1.685 + 1.334)² = 0.0135
muscle to bone: (7.752 - 1.685)² / (7.752 + 1.685)² = 0.413
```

A small difference in Z gives a weak echo, so most of the beam goes on past soft-tissue boundaries. A large difference reflects much of the beam, so structures behind bone are hard to image.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-medical-physics--02-aphy-medical-ultrasound-gel.webp" width="900" height="840" alt="Without gel an air gap (Z about 408) lies against skin (Z 1.60 million) and 99.9 percent of the ultrasound is reflected. Gel with an impedance close to skin (1.52 million) reflects only 0.07 percent, so nearly all the beam enters the body. This is impedance matching, not lubrication." loading="lazy">
  <figcaption>Gel matches the impedance of the skin so that almost none of the ultrasound is reflected at the surface.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-medical-physics--05-aphy-medical-attenuation-contrast.webp" width="900" height="1060" alt="X-ray intensity falls exponentially, I = I0 e^(-mu x), with a half-value thickness ln2/mu (3.3 cm for mu = 0.21 per cm). A beam crossing a 1.8 cm bone block ends at 7.8 percent of its original intensity against 15.1 percent through tissue alone, about half. That difference is the image contrast." loading="lazy">
  <figcaption>Bone has a larger attenuation coefficient than soft tissue, so the beam behind it is weaker: this is image contrast.</figcaption>
</figure>


## 6.5.3(f) Impedance matching and gel

Air has a very small impedance (about 408 kg m⁻² s⁻¹, from ρ = 1.2 kg m⁻³ and c = 340 m s⁻¹).

**Worked example 6.** Take skin as 1.60 × 10⁶ and the gel as 1.52 × 10⁶ kg m⁻² s⁻¹.

```
air to skin: (1.60×10⁶ - 408)² / (1.60×10⁶ + 408)² = 0.9990
gel to skin: (1.60 - 1.52)² / (1.60 + 1.52)² = 6.6 × 10⁻⁴
```

Without gel, 99.9% is reflected. The gel is spread between transducer and skin to remove air: its impedance is close to that of skin, so there is little reflection (impedance matching) and nearly all the beam enters.

## 6.5.3(g) The Doppler effect and blood speed

Ultrasound reflected from moving blood cells has a different frequency from the one emitted. The frequency shift is

Δf / f = 2v cos θ / c

where f is the emitted frequency, v the blood speed, θ the angle between the beam and the direction of blood flow, and c the speed of ultrasound in tissue. The 2 arises because moving blood acts first as a moving receiver, then as a moving source.

**Worked example 7.** A 5.0 MHz beam is directed at 60° to blood flowing at 0.45 m s⁻¹. Take c = 1570 m s⁻¹.

```
Δf = 2 × 5.0×10⁶ × 0.45 × cos 60° / 1570 = 1.4 × 10³ Hz
```

**Worked example 8.** A 4.0 MHz beam at 50° gives a shift of 2.4 kHz. Find v.

```
v = Δf c / (2 f cos θ) = 2.4×10³ × 1570 / (2 × 4.0×10⁶ × cos 50°) = 0.73 m s⁻¹
```

At θ = 90° the shift is zero, so the beam must not be across the vessel.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-medical-physics--03-aphy-medical-doppler.webp" width="900" height="1100" alt="A probe sends ultrasound at 60 degrees to blood flowing along a vessel and the echo is shifted in frequency by delta f = 2 f v cos(theta)/c. For 5.0 MHz, 0.45 m/s and c = 1570 m/s the shift is 1.4 kHz at 60 degrees; it is largest along the flow and zero at 90 degrees." loading="lazy">
  <figcaption>The Doppler shift depends on cos of the angle between beam and flow, so the beam must not be directed across the vessel.</figcaption>
</figure>


## Common errors

- Saying the gamma camera detects positrons, or that PET needs one photon rather than two detected together.
- Saying the gel is "to stop friction" rather than to match impedance.
- Using d = ct instead of d = ct/2 for echoes.
- Using Δf/f = v/c without the 2 and the cos θ.
- Leaving out the square in the reflection equation.

## Frequently asked questions

**What does the collimator do in a gamma camera?**
The collimator is a thick lead plate with many narrow parallel holes. It only lets through gamma photons travelling nearly along the holes, so the image is not blurred.

**Why does PET not need a collimator?**
In PET the line along which annihilation happened is fixed by the two photons detected at almost the same instant on opposite sides of the ring. Without a collimator, PET detects a much larger fraction of the emitted radiation than a gamma camera.

**Why is gel used in an ultrasound scan?**
Air has a very small acoustic impedance, so without gel about 99.9% of the ultrasound would be reflected at the skin. The gel removes air and has an impedance close to that of skin, so nearly all the beam enters the body; this is impedance matching.

**How does a piezoelectric transducer produce and detect ultrasound?**
An alternating p.d. across a piezoelectric crystal makes it vibrate and emit ultrasound pulses. Between pulses, returning echoes make the crystal vibrate and produce a small alternating p.d.

**What is the difference between an A-scan and a B-scan?**
An A-scan sends pulses in one direction and displays echo strength against time, so each peak marks a boundary at depth d = ct/2. A B-scan combines many A-scans across the body into a two-dimensional image.

## Official syllabus

OCR Advanced GCE in Physics A (H556), specification Version 3.0 (March 2026), for first assessment in 2017, published by OCR: sections 6.5.2 and 6.5.3.
