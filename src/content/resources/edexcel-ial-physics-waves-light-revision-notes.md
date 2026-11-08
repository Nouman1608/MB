---
title: "Edexcel IAL Physics: Waves and the Particle Nature of Light — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Unit 2: Waves and Electricity"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YPH11"]
syllabusSeries: "Issue 3"
order: 2.3
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-2-waves-and-electricity"
    subtopic: "waves-and-particle-nature-of-light"
description: "Recall notes on wave properties, refraction, polarisation, interference, the photoelectric effect and energy levels for Edexcel IAL Physics YPH11 (Unit 2)."
author: "iftikhar-azeemi"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by hassan on 2026-09-29."
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Waves and the Particle Nature of Light study guide](/resources/edexcel-ial-physics-waves-and-particle-nature-of-light/).

## Wave basics

```
v = f lambda        T = 1/f
```

**Transverse** — oscillations perpendicular to travel (light, water). **Longitudinal** — oscillations parallel (sound).

**Only transverse waves can be polarised**, because only they have oscillations in more than one plane perpendicular to travel. Polarisation is therefore the standard evidence that light is transverse — and it is why sound cannot be polarised.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-waves--02-aphy-waves-polarisation.webp" width="900" height="1080" alt="Unpolarised light oscillates in every direction; a first Polaroid leaves one plane. A second Polaroid at 30 degrees transmits cos 30 of the amplitude, so 8.0 W per square metre becomes 6.0. Sound oscillates along its direction of travel, so there is nothing to filter. A small graph shows I = I0 cos squared theta (Cambridge only)." loading="lazy">
  <figcaption>Only transverse waves can be polarised; sound cannot.</figcaption>
</figure>


## Refraction and total internal reflection

```
n = c / v            n1 sin(theta1) = n2 sin(theta2)
critical angle:      sin(C) = n2 / n1
```

**Total internal reflection requires two conditions:** the light must be travelling from a **denser to a less dense** medium, **and** the angle of incidence must **exceed** the critical angle. Both are needed; giving one is a half-answer.

This is the basis of optical fibres, where the cladding has a lower refractive index than the core.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-physics-electromagnetic-spectrum-refraction-and-total-internal--03-refraction-bending.webp" width="900" height="1070" alt="Top: light in air meets plastic (n = 1.47) at 38.0 degrees and refracts to 24.8 degrees, bending towards the normal. Bottom: light in glass (n = 1.50) meets water (n = 1.33) at 35.0 degrees and refracts to 40.3 degrees, bending away. Angles are from the normal." loading="lazy">
  <figcaption>Into a higher n the ray bends towards the normal; into a lower n it bends away.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-physics-electromagnetic-spectrum-refraction-and-total-internal--06-critical-angle.webp" width="900" height="1215" alt="A ray along a radius of a semi-circular glass block (n = 1.52) meets the flat face at 30 degrees (most light refracts out at 49.5 degrees), at the critical angle 41.1 degrees (refracted ray along the surface) and at 55 degrees (total internal reflection)." loading="lazy">
  <figcaption>Beyond the critical angle all the light is reflected back into the denser medium.</figcaption>
</figure>


## Superposition

**Coherence** — constant phase difference and the same frequency. Required for a **stable** interference pattern.

```
constructive:  path difference = n lambda
destructive:   path difference = (n + 1/2) lambda

grating:       d sin(theta) = n lambda
```

*Background — beyond the specification, not examinable (Unit 2 supplies
only the diffraction-grating relation above, not the double-slit fringe
relation):* for two-source (double-slit) interference, λ = ax/D, where
fringe spacing x increases with larger slit-to-screen distance D or
wavelength λ, and decreases with larger slit separation a.

**Stationary waves** form from two waves of equal frequency and amplitude travelling in opposite directions. **Node separation is λ/2**, not λ.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-waves--06-aphy-waves-two-source-interference.webp" width="900" height="1065" alt="Two in-phase coherent sources emit circular waves. Gold solid lines mark path difference n lambda (loud or bright); navy dashed lines mark (n + 1/2) lambda (quiet or dark). P lies at 2 lambda and is loud; Q lies at 1.5 lambda and is quiet. A loudspeaker example at 850 Hz confirms both." loading="lazy">
  <figcaption>Path difference n lambda gives reinforcement; (n + 1/2) lambda gives cancellation.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-waves--03-aphy-waves-stationary-formation.webp" width="900" height="1050" alt="Two identical waves of equal amplitude travel in opposite directions and are added at t = 0, T/4 and T/2. At t = 0 the resultant has double amplitude; at T/4 the waves cancel to a flat line; at T/2 it is the t = 0 pattern upside down. Nodes never move, antinodes swing most, and adjacent nodes are half a wavelength apart." loading="lazy">
  <figcaption>Superposing two opposite waves gives fixed nodes and antinodes half a wavelength apart.</figcaption>
</figure>


## Standing waves and diffraction: the practicals

The speed of a transverse wave on a stretched string is:

```
v = sqrt(T / mu)
```

where T is the tension and µ is the mass per unit length — investigated
directly in **CORE PRACTICAL 5**. **CORE PRACTICAL 4** determines the
speed of sound in air using a two-beam oscilloscope, signal generator,
speaker and microphone.

**Diffraction** — the spreading of a wave through a slit or around an
obstacle — is explained using **Huygens' construction**, treating every
point on a wavefront as a source of secondary wavelets. **CORE PRACTICAL
6** uses a diffraction grating to determine the wavelength of a laser (or
other) light source, applying nλ = dsinθ.

**Worked example.** Light of wavelength 589 nm is incident on a
diffraction grating with 500 lines per mm. Find the first-order angle.

```
d = 1 / (500 x 1000) = 2.0 x 10^-6 m
sin(theta) = n*lambda / d = (1 x 589e-9) / 2.0e-6 = 0.2945
theta = 17.1 degrees
```

**Intensity** is power per unit area, I = P/A. A **pulse-echo technique**
(ultrasound, radar) locates an object from the time delay of a reflected
pulse; resolution is limited by the wavelength used, or the pulse
duration — shorter pulses and shorter wavelengths resolve finer detail.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-physics-waves-light-revision-notes--02-mp-rn-45-sound-scope.webp" width="900" height="1020" alt="Apparatus for Core Practical 4: a signal generator drives a loudspeaker and feeds channel 1 of a two-beam oscilloscope; a microphone moved along a rule feeds channel 2. At 2000 Hz the traces are in step with the microphone at 0.340 m, opposite at 0.425 m and in step again at 0.510 m. One wavelength is 0.170 m, so v = f lambda = 340 m/s." loading="lazy">
  <figcaption>Move the microphone from one in-step position to the next: that distance is one wavelength.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-waves--09-aphy-waves-grating.webp" width="900" height="1060" alt="Two neighbouring slits show the path difference d sin theta between adjacent rays; a maximum occurs when it equals n lambda. For 300 lines per mm and 589 nm, d = 3.33 micrometres and maxima appear at 10.2, 20.7, 32.0, 45.0 and 62.1 degrees for orders 1 to 5 each side, so 11 maxima; the highest order is 5." loading="lazy">
  <figcaption>Maxima occur where d sin theta = n lambda; the highest order is d/lambda rounded down.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-waves--04-aphy-waves-string-harmonics.webp" width="900" height="1060" alt="First, second and third harmonics on a string fixed at both ends have 1, 2 and 3 loops, with lambda = 2L/n. For L = 0.80 m, T = 40 N and mu = 2.5e-3 kg/m the wave speed is 126.5 m/s and the first harmonic is 79.1 Hz, giving 158 Hz and 237 Hz. Quadrupling the tension doubles the frequency." loading="lazy">
  <figcaption>Harmonic n has n loops and frequency n times the first; f1 = (1/2l)sqrt(T/mu).</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-waves--08-aphy-waves-gap-diffraction.webp" width="900" height="1210" alt="Plane waves meet a gap of 6, 2 and 1 wavelengths. With a wide gap the waves go through nearly straight; as the gap approaches one wavelength they spread into near-semicircular fronts. Wavelength, frequency and speed are unchanged." loading="lazy">
  <figcaption>Diffraction is greatest when the gap is about one wavelength.</figcaption>
</figure>


## The photoelectric effect

```
E = hf = hc / lambda
hf = phi + KE_max
```

**Work function φ** — the minimum energy to remove an electron from the metal surface. **Threshold frequency f₀** — below it, no emission at any intensity.

**The one-photon-one-electron interaction is the entire argument.** Because a single photon transfers all its energy to a single electron, and energy is not accumulated, light below the threshold frequency produces no emission however intense or however long it shines. That single fact explains all four observations:

1. No emission below f₀ regardless of intensity.
2. Emission is **instantaneous** above f₀.
3. KE_max depends on **frequency**, not intensity.
4. Intensity affects only the **rate** of emission.

Wave theory predicts the opposite in every case, which is why the photoelectric effect is the evidence that light is particulate.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-physics-waves-light-revision-notes--01-mp-rn-45-photon-electron.webp" width="900" height="1040" alt="Two panels show light reaching a metal with work function 2.30 eV. Intense red light of 650 nm gives five photons of 1.91 eV each; each is below the work function and acts alone, so no electron is emitted at any intensity. Weak blue light of 400 nm gives one 3.10 eV photon, which frees one electron with maximum kinetic energy 0.80 eV, since 3.10 = 2.30 + 0.80." loading="lazy">
  <figcaption>One photon gives all its energy to one electron, so energy is not saved up across photons.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-quantum-physics--07-aphy-quantum-photoelectric.webp" width="900" height="1090" alt="Graph of maximum kinetic energy against frequency for two metals with work functions 2.3 eV and 3.2 eV: straight lines of equal gradient h, with threshold frequencies 5.55 and 7.72 times 10^14 Hz and vertical intercepts minus the work function. Two small graphs show that at fixed frequency, intensity changes photocurrent but not maximum kinetic energy." loading="lazy">
  <figcaption>Frequency sets photoelectron energy and intensity sets how many are emitted.</figcaption>
</figure>


## Wave–particle duality

```
de Broglie:  lambda = h / p = h / mv
```

**Electron diffraction** is the evidence: electrons produce diffraction rings through a thin graphite film, and diffraction is a wave property. Together with the photoelectric effect, this establishes that both light and matter show wave and particle behaviour depending on the experiment.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-quantum-physics--09-aphy-quantum-de-broglie.webp" width="900" height="1190" alt="Electrons accelerated through a potential difference pass through graphite and form rings on a screen. Doubling V from 2.5 kV to 5 kV shortens lambda from 24.6 pm to 17.4 pm and shrinks the rings by 0.71. A log scale shows a 0.057 kg ball at 40 m/s with lambda about 3e-34 m, far smaller than an electron at 3.5 kV (2e-11 m)." loading="lazy">
  <figcaption>Faster electrons have a shorter wavelength, and only atom-sized wavelengths diffract noticeably.</figcaption>
</figure>


## Energy levels

Electron energy levels are **discrete** and **negative** (zero is defined at infinite separation).

```
hf = E2 - E1
```

**Line spectra are discrete because energy levels are discrete** — only photons of exactly the right energy can be emitted or absorbed. Emission lines come from electrons falling; absorption lines from photons being absorbed. Each element's pattern is unique, which is how stellar composition is determined.

## Exam traps

- Saying sound can be polarised.
- Giving only one condition for total internal reflection.
- Using λ instead of λ/2 for node separation.
- Saying intense red light will eventually eject electrons.
- Omitting the minus sign on energy levels.

## Self-test

1. Why can only transverse waves be polarised, and what does that prove about light?
2. Give both conditions for total internal reflection.
3. Why does intensity not overcome the threshold frequency?
4. What is the evidence for the wave nature of electrons?
5. Why are line spectra discrete?

**Answers:** 1. Only transverse waves oscillate in planes perpendicular to the direction of travel, so their oscillations can be restricted to one plane; the fact that light can be polarised shows it is transverse. 2. Light must pass from a denser to a less dense medium, and the angle of incidence must exceed the critical angle. 3. One photon interacts with one electron and transfers all its energy at once; increasing intensity supplies more photons but each still carries too little energy, and energy is not accumulated. 4. Electron diffraction — electrons passing through a thin graphite film produce diffraction rings, which is a wave phenomenon. 5. Electron energy levels are discrete, so only photons whose energy exactly matches a difference between two levels can be emitted or absorbed.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-quantum-physics--08-aphy-quantum-energy-levels.webp" width="900" height="1230" alt="Hydrogen energy levels at -13.6, -3.40, -1.51 and -0.85 eV. Falls from n=3 and n=4 to n=2 give 658 nm red and 488 nm blue photons and n=2 to 1 gives 122 nm ultraviolet. A continuous spectrum is shown beside the hydrogen line spectrum with lines at the computed wavelengths." loading="lazy">
  <figcaption>Each spectral line is one photon whose energy equals a gap between two levels.</figcaption>
</figure>

## Frequently asked questions

**Is the double-slit equation λ = ax/D examinable in Edexcel IAL Physics?**
No. It is background beyond the specification. Unit 2 supplies only the diffraction-grating relation, nλ = d sin θ.

**What is the distance between nodes on a stationary wave?**
Adjacent nodes are λ/2 apart, not λ. Using λ for the node separation is a common exam error.

**Why are electron energy levels negative?**
Zero energy is defined at infinite separation, so a bound electron has less energy than that and its energy levels are negative.

**What are Core Practicals 4 and 5 in Edexcel IAL Physics?**
Core Practical 4 determines the speed of sound in air using a two-beam oscilloscope, signal generator, speaker and microphone. Core Practical 5 investigates a vibrating string, linked to v = √(T/µ).
