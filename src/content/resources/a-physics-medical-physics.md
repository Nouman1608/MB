---
title: "Medical Physics"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Medical physics"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 24.1
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
description: "Ultrasound and acoustic impedance, X-ray production and attenuation, CT scanning and PET annihilation photons: Topic 24 of Cambridge A Level Physics 9702."
author: "iftikhar-azeemi"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by hassan on 2026-09-29; 2026-11-08: reviewed by hassan."
publishedDate: 2026-08-18
updatedDate: 2026-08-18
featured: false
---

This guide covers Topic 24, Medical physics, in full — subtopics **24.1
Production and use of ultrasound**, **24.2 Production and use of X-rays**
and **24.3 PET scanning** — from Cambridge International AS & A Level
Physics 9702, 2025–2027 series. This is A Level content, applying wave and
nuclear physics to medical imaging techniques. Note that this syllabus
series no longer names A-scan/B-scan terminology or "sharpness" as
examinable outcomes — the current requirement is that pulse-echo
reflection at tissue boundaries yields diagnostic information, and that
image quality is discussed in terms of **contrast**; A-scan and B-scan are
mentioned below only as background context for how that diagnostic
information is actually displayed.

## Before studying this

This resource assumes wave properties from [Waves: Progressive Waves, the
Doppler Effect and Polarisation](/resources/as-physics-waves/), and photon
and nuclear concepts from [Quantum Physics](/resources/a-physics-quantum-physics/)
and [Nuclear Physics](/resources/a-physics-nuclear-physics/).

## Syllabus coverage

**CAMBRIDGE INTERNATIONAL AS & A LEVEL PHYSICS 9702 — A Level, Topic 24**

**24.1 Production and use of ultrasound** — understanding how ultrasound
waves are generated and detected using piezo-electric transducers;
recalling and using the specific acoustic impedance Z = ρc; recalling and
using the intensity reflection coefficient equation
I_r/I_i = (Z₂ − Z₁)²/(Z₂ + Z₁)²; recalling and using I = I₀e^(−μx) for the
attenuation of ultrasound intensity in matter; understanding that pulse-echo
reflection at boundaries between tissues of different acoustic impedance
provides diagnostic information about internal body structures.

**24.2 Production and use of X-rays** — describing the principles of the
production of X-rays by electron bombardment of a metal target; recalling
and using λ_min = hc/(eV) for the minimum wavelength (maximum photon
energy) produced for a given accelerating potential difference; describing
the use of X-rays in imaging internal body structures, including a simple
treatment of the contrast of X-ray images; recalling and using the equation
I = I₀e^(−μx) for the attenuation of X-rays in matter; understanding
that computed tomography (CT) scanning produces a 3D image of an internal
structure by combining multiple X-ray images of the same section, taken
from different angles, into a 2D image of that section, then repeating this
along an axis and combining the 2D images of multiple sections.

**24.3 PET scanning** — outlining the principles of positron emission
tomography (PET scanning), including the production of positron-emitting
isotopes, positron-electron annihilation and the emission of two identical
gamma-ray photons, and how the resulting data is used to obtain diagnostic
information about internal body structures; calculating the energy of each
annihilation photon from the rest mass of the electron and positron using
E = mc².

## Production and detection of ultrasound

**Ultrasound** waves (sound waves above the range of human hearing) are
generated and detected using **piezo-electric transducers**: crystals that
change shape when a voltage is applied (producing ultrasound) and generate
a voltage when mechanically deformed (detecting reflected ultrasound).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-medical-physics--01-aphy-medical-ultrasound-echo.webp" width="900" height="970" alt="A probe sends a pulse down through fat, muscle and bone; echoes from the fat-muscle and muscle-bone boundaries return after 26 and 78 microseconds. Because the pulse goes there and back, the bone surface is at d = ct/2 = 6.0 cm. The muscle-bone echo is far stronger (41 percent) than the fat-muscle one (1.4 percent)." loading="lazy">
  <figcaption>Pulse-echo ultrasound: echo time gives depth through d = ct/2, and echo strength depends on the impedance change at each boundary.</figcaption>
</figure>


## Ultrasound imaging

Every tissue in the body has a **specific acoustic impedance**:

```
Z = ρc
```

where ρ is the density of the tissue and c is the speed of ultrasound
through it. When ultrasound reaches a boundary between two tissues of
different acoustic impedance, part of the wave reflects and part
transmits through. The proportion of intensity reflected is given by the
**intensity reflection coefficient**:

```
I_r / I_i = (Z₂ − Z₁)² / (Z₂ + Z₁)²
```

A larger impedance mismatch produces a stronger reflection. It is exactly
this **pulse-echo reflection at tissue boundaries** — sending a pulse and
timing/measuring the strength of the echoes reflected from boundaries
inside the body — that provides the diagnostic information ultrasound
scanning is based on; older terminology described the resulting display as
an **A-scan** (a single line of amplitude against depth) or a **B-scan**
(many such lines combined into a two-dimensional image), and either
remains a reasonable way to picture how the reflected pulses are actually
displayed.

**Worked example.** Soft tissue has Z = 1.63 × 10⁶ kg m⁻² s⁻¹ and bone has
Z = 6.40 × 10⁶ kg m⁻² s⁻¹. The intensity reflection coefficient at the
boundary:

```
I_r/I_i = (6.40 − 1.63)² / (6.40 + 1.63)² = 22.75 / 64.48 ≈ 0.353
```

so about 35% of the incident intensity is reflected at a soft
tissue–bone boundary — which is also why structures lying behind bone are
poorly imaged by ultrasound.

### Attenuation of ultrasound

As with X-rays, ultrasound intensity decreases exponentially as it
travels through tissue, due to absorption and scattering:

```
I = I₀ e^(−μx)
```

where μ is the (ultrasound) attenuation coefficient of the tissue and x is
the distance travelled. Greater attenuation, alongside reflection at
boundaries, limits how deep into the body a useful ultrasound image can be
obtained.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-medical-physics--02-aphy-medical-ultrasound-gel.webp" width="900" height="840" alt="Without gel an air gap (Z about 408) lies against skin (Z 1.60 million) and 99.9 percent of the ultrasound is reflected. Gel with an impedance close to skin (1.52 million) reflects only 0.07 percent, so nearly all the beam enters the body. This is impedance matching, not lubrication." loading="lazy">
  <figcaption>Gel matches the impedance of the skin so that almost none of the ultrasound is reflected at the surface.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-medical-physics--03-aphy-medical-doppler.webp" width="900" height="1100" alt="A probe sends ultrasound at 60 degrees to blood flowing along a vessel and the echo is shifted in frequency by delta f = 2 f v cos(theta)/c. For 5.0 MHz, 0.45 m/s and c = 1570 m/s the shift is 1.4 kHz at 60 degrees; it is largest along the flow and zero at 90 degrees." loading="lazy">
  <figcaption>The Doppler shift depends on cos of the angle between beam and flow, so the beam must not be directed across the vessel.</figcaption>
</figure>


## Production of X-rays

**X-rays** are produced by accelerating electrons through a large potential
difference and firing them at a metal target. On impact, the rapid
deceleration of the electrons converts their kinetic energy into
electromagnetic radiation (X-ray photons), a process sometimes described as
bremsstrahlung ("braking radiation"). The maximum photon energy possible
equals the kinetic energy gained by an electron accelerated through the
full potential difference V, eV, which sets the **minimum wavelength**
produced:

```
λ_min = hc / (eV)
```

A photon can carry at most all of an electron's kinetic energy, so no
photon of shorter wavelength (higher energy) than this can be produced —
λ_min depends only on the accelerating p.d., not on the target material.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-medical-physics--04-aphy-medical-xray-production.webp" width="900" height="1210" alt="A heated filament releases electrons that a high voltage accelerates onto a tungsten target in a copper anode inside a lead-lined, evacuated tube. The spectrum has a sharp cut-off at the shortest wavelength hc/eV: 1.55 and 3.11 times 10 to the minus 11 m for 80 kV and 40 kV. Narrow characteristic lines depend on the target and appear only if eV is large enough." loading="lazy">
  <figcaption>Tube voltage sets the shortest wavelength (maximum photon energy); tube current sets the intensity.</figcaption>
</figure>


## X-ray imaging and attenuation

As X-rays pass through the body, different tissues absorb (attenuate) them
by different amounts — denser tissue such as bone absorbs more than soft
tissue, which is what creates image **contrast** on an X-ray photograph.
This attenuation follows an exponential law:

```
I = I₀ e^(−μx)
```

where I₀ is the initial intensity, x is the thickness of the material, and
μ is the attenuation (absorption) coefficient, which depends on the
material and the X-ray energy.

**Worked example.** X-rays of initial intensity I₀ pass through 5.0 cm of
tissue with attenuation coefficient 0.20 cm⁻¹. The transmitted intensity as
a fraction of I₀:

```
I/I₀ = e^(−μx) = e^(−0.20 × 5.0) = e^(−1.0) ≈ 0.37
```

**Worked example.** X-rays are produced using an accelerating p.d. of
80 kV. The minimum wavelength produced:

```
λ_min = hc/(eV) = (6.63 × 10⁻³⁴ × 3.00 × 10⁸) / (1.60 × 10⁻¹⁹ × 80 000)
      ≈ 1.55 × 10⁻¹¹ m
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-medical-physics--05-aphy-medical-attenuation-contrast.webp" width="900" height="1060" alt="X-ray intensity falls exponentially, I = I0 e^(-mu x), with a half-value thickness ln2/mu (3.3 cm for mu = 0.21 per cm). A beam crossing a 1.8 cm bone block ends at 7.8 percent of its original intensity against 15.1 percent through tissue alone, about half. That difference is the image contrast." loading="lazy">
  <figcaption>Bone has a larger attenuation coefficient than soft tissue, so the beam behind it is weaker: this is image contrast.</figcaption>
</figure>


## Computed tomography (CT)

A **CT scanner** rotates an X-ray tube (and detectors) around the patient,
taking many X-ray images of the **same thin section** from different
angles. A computer combines these images into a **two-dimensional image of
that section**. The process is then repeated for successive sections along
an axis through the body, and the 2D images of all the sections are
combined into a **three-dimensional** image of the internal structure,
which can be viewed as any chosen slice. (Background, beyond the syllabus
outcome: compared with a single plain X-ray image, CT gives far better
soft-tissue contrast and full 3-D information, but at the cost of a
substantially **higher radiation dose**, longer scan time and higher
expense.)

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-medical-physics--06-aphy-medical-ct-scanner.webp" width="900" height="1110" alt="A CT scanner rotates an X-ray tube so that a thin fan beam crosses one slice of the body from many angles, recorded by a ring of detectors. A computer combines the readings into a grey-scale image whose pixel brightness shows how strongly each small volume absorbs. Moving the couch gives a series of slices that build a 3-D image." loading="lazy">
  <figcaption>CT combines many angled X-ray views of each slice, then stacks slices into a 3-D image.</figcaption>
</figure>


## PET scanning

**Positron emission tomography (PET)** uses a radioactive tracer that emits
**positrons** (the antiparticle of the electron). Each emitted positron
travels a very short distance before meeting an electron in the body
tissue, and the two particles undergo **annihilation** — their combined
mass is converted entirely into energy, emitted as **two identical
gamma-ray photons** travelling in opposite directions. Detectors surrounding
the body record these paired gamma-ray emissions; because the two photons
travel in exactly opposite directions, the location of each annihilation
event (and hence the tracer's concentration) can be reconstructed, building
up a detailed image of metabolic activity inside the body.

### Annihilation photon energy

Because momentum is conserved and the total momentum before annihilation
is approximately zero, the two photons share the total energy released
equally. That total energy comes from the combined rest mass of the
electron and positron converting entirely into radiation, via E = mc².
For an electron (or positron) of rest mass 9.11 × 10⁻³¹ kg, the energy of
**each** photon is:

```
E = mc² = 9.11 × 10⁻³¹ × (3.00 × 10⁸)² ≈ 8.19 × 10⁻¹⁴ J ≈ 0.511 MeV
```

so each annihilation produces two photons of 0.511 MeV, not one photon of
1.022 MeV — the energy is shared between the pair, one mass's worth of
energy per photon.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-medical-physics--08-aphy-medical-pet.webp" width="900" height="1030" alt="A positron from a tracer such as fluorine-18 annihilates with an electron to give two 0.511 MeV gamma photons travelling in opposite directions. A ring of detectors records photons that arrive together; the source lies on the line joining the two detectors. Lines from many events cross at the tracer-rich tissue." loading="lazy">
  <figcaption>PET detects pairs of back-to-back photons, so each coincidence marks a line through the source.</figcaption>
</figure>


## Common mistakes

- **Forgetting X-ray (or ultrasound) attenuation is exponential**, not
linear — I = I₀e^(−μx) must be used, not a simple proportional reduction.
- **Assuming PET scanning detects the positron itself** — it detects the
pair of gamma-ray photons produced by positron-electron annihilation, not
the positron directly.
- **Mixing up acoustic impedance mismatch (relevant to ultrasound
reflection) with X-ray attenuation coefficient (relevant to X-ray
absorption)** — these are distinct physical quantities relevant to
different imaging techniques.
- **Saying λ_min depends on the target material** — it depends only on the
accelerating p.d.; the target material instead determines the
characteristic line spectrum superimposed on the continuous background.
- **Giving 1.022 MeV as the energy of one annihilation photon** — that is
the *total* energy released; each of the two photons carries half of it,
0.511 MeV.
- **Claiming CT delivers a lower radiation dose than a plain X-ray image**
— CT's much richer 3-D information comes at the cost of a substantially
higher dose.

## Quick revision checklist

- Piezo-electric transducers generating and detecting ultrasound
- Z = ρc for specific acoustic impedance, and I_r/I_i = (Z₂−Z₁)²/(Z₂+Z₁)² for the intensity reflection coefficient
- I = I₀e^(−μx) for the attenuation of ultrasound as well as X-rays
- X-ray production by electron bombardment, and λ_min = hc/(eV) for the minimum wavelength
- I = I₀e^(−μx) for X-ray attenuation, and contrast from differential absorption between tissues
- Computed tomography: rotating the X-ray source/detectors to build a 3-D image, at the cost of a higher dose
- PET scanning: positron emission, annihilation, and paired 0.511 MeV gamma-ray detection, from E = mc²

## Frequently asked questions

**How are ultrasound waves produced and detected?**
Ultrasound is generated and detected by piezo-electric transducers: a crystal changes shape when a voltage is applied, producing ultrasound, and generates a voltage when deformed by returning echoes.

**How does a CT scanner build a 3D image?**
The X-ray tube and detectors rotate around the patient, taking many images of the same thin section from different angles, which a computer combines into a 2D image of that section. Repeating this for successive sections along an axis and combining the 2D images gives a 3D image.

**Is the energy of each PET annihilation photon 1.022 MeV?**
No. 1.022 MeV is the total energy released by an electron-positron annihilation; each of the two photons carries half of it, 0.511 MeV.

**Is ultrasound attenuation in the Cambridge 9702 syllabus?**
Yes. Cambridge 9702 requires you to recall and use I = I₀e^(−μx) for the attenuation of ultrasound in matter, as well as for X-rays.

## Related resources

- [Nuclear Physics](/resources/a-physics-nuclear-physics/) — the previous A Level topic
- [Astronomy and Cosmology](/resources/a-physics-astronomy-and-cosmology/) — the final A Level topic
- [Cambridge AS & A Level Physics hub](/boards/cambridge/a-level/physics/)

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027
series. Always check the current syllabus for your examination year.*

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-medical-physics--07-aphy-medical-gamma-camera.webp" width="900" height="990" alt="Gamma photons from tracer in an organ pass through a lead collimator that only lets photons travelling straight along a hole through; photons at an angle are absorbed. Each photon makes a flash in the crystal, the photomultiplier tubes give pulses (largest from the nearest tube) and the computer uses them to add a count at that place in the image." loading="lazy">
  <figcaption>A gamma camera forms an image of tracer distribution, one counted photon at a time.</figcaption>
</figure>
