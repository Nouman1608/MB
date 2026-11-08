---
title: "AS Physics: Superposition — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Superposition"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
order: 8.1
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "as-superposition"
    subtopic: "as-stationary-waves"
  - qualification: "a-level"
    topic: "as-superposition"
    subtopic: "as-diffraction"
  - qualification: "a-level"
    topic: "as-superposition"
    subtopic: "as-interference"
  - qualification: "a-level"
    topic: "as-superposition"
    subtopic: "as-the-diffraction-grating"
description: "Condensed recall notes on interference, coherence, path difference, diffraction gratings and stationary waves for Cambridge AS & A Level Physics 9702."
author: "iftikhar-azeemi"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by hassan on 2026-09-29; 2026-11-08: reviewed by hassan."
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Superposition study guide](/resources/as-physics-superposition/).

## The principle of superposition

> When two or more waves meet, the resultant displacement is the **vector sum** of the individual displacements.

## Interference

**Coherence** — a constant phase difference, which requires the **same frequency**. Without it, the interference pattern shifts randomly and no stable fringes are seen. Coherence is the condition for a *stable* pattern, not for interference itself. Two **independent** light sources of the same colour will **not** produce a stable pattern — a single source split into two coherent paths, as in a double slit, is needed.

| Condition | Path difference |
|---|---|
| **Constructive** | nλ |
| **Destructive** | (n + ½)λ |

**Young's double slit:**

```
lambda = a x / D        a = slit separation, x = fringe spacing, D = slit-to-screen distance
```

To increase fringe spacing: increase D, increase λ, or **decrease** a. The inverse relationship with slit separation is the one most often reversed.

**Worked example.** Slits 0.50 mm apart produce fringes spaced 1.2 mm apart on a screen 1.5 m away. Find the wavelength.

```
lambda = a x / D = (0.50x10^-3 x 1.2x10^-3) / 1.5 = 4.0x10^-7 m = 400 nm
```

Young's experiment is the standard evidence that **light behaves as a wave**, because interference cannot be explained by a classical, ray-like particle model (the AS-level contrast is with light travelling as simple particles in straight lines, not with modern quantum theory, which does account for interference).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-waves--06-aphy-waves-two-source-interference.webp" width="900" height="1065" alt="Two in-phase coherent sources emit circular waves. Gold solid lines mark path difference n lambda (loud or bright); navy dashed lines mark (n + 1/2) lambda (quiet or dark). P lies at 2 lambda and is loud; Q lies at 1.5 lambda and is quiet. A loudspeaker example at 850 Hz confirms both." loading="lazy">
  <figcaption>Path difference n lambda gives reinforcement; (n + 1/2) lambda gives cancellation.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-waves--07-aphy-waves-double-slit.webp" width="900" height="1120" alt="A laser lights two slits a distance s apart, giving equally spaced fringes of spacing w = lambda D / s on a screen distance D away (not to scale). For 633 nm, 0.50 mm and 1.80 m, w = 2.28 mm. With white light the central fringe is white and violet fringes lie nearer the centre than red ones." loading="lazy">
  <figcaption>Fringe spacing w = lambda D / s; white light gives a white centre and coloured fringes.</figcaption>
</figure>


## Diffraction

Waves spread out when passing through a gap or around an obstacle. **Diffraction is greatest when the gap is comparable to the wavelength** — which is why sound diffracts around doorways but light does not.

**Diffraction grating:**

```
d sin(theta) = n lambda        d = 1 / (lines per metre)
```

A grating gives **sharper, narrower maxima** than a double slit because many slits contribute, so the maxima are more precisely located — which is why gratings are used for accurate wavelength measurement. (Whether a grating maximum is also *brighter* depends on the illumination, slit width and how intensity is measured — sharpness, not brightness, is the guaranteed advantage.)

The maximum order is found by setting sin θ = 1, giving `n = d/λ`, then rounding **down** to a whole number.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-waves--08-aphy-waves-gap-diffraction.webp" width="900" height="1210" alt="Plane waves meet a gap of 6, 2 and 1 wavelengths. With a wide gap the waves go through nearly straight; as the gap approaches one wavelength they spread into near-semicircular fronts. Wavelength, frequency and speed are unchanged." loading="lazy">
  <figcaption>Diffraction is greatest when the gap is about one wavelength.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-waves--09-aphy-waves-grating.webp" width="900" height="1060" alt="Two neighbouring slits show the path difference d sin theta between adjacent rays; a maximum occurs when it equals n lambda. For 300 lines per mm and 589 nm, d = 3.33 micrometres and maxima appear at 10.2, 20.7, 32.0, 45.0 and 62.1 degrees for orders 1 to 5 each side, so 11 maxima; the highest order is 5." loading="lazy">
  <figcaption>Maxima occur where d sin theta = n lambda; the highest order is d/lambda rounded down.</figcaption>
</figure>


## Stationary waves

Formed when two waves of the **same frequency and amplitude travelling in opposite directions** superpose — usually a wave and its reflection.

| | Progressive wave | Stationary wave |
|---|---|---|
| Energy | Transferred | **Not transferred** |
| Amplitude | Same for all points | Varies from zero at nodes to maximum at antinodes |
| Phase | Varies continuously | Points between adjacent nodes are **in phase** |

**Node** — zero amplitude, from destructive interference. **Antinode** — maximum amplitude.

A stationary wave does not transfer energy along its length — energy is **stored**, oscillating between kinetic and potential forms within each section between adjacent nodes.

**The distance between adjacent nodes is λ/2**, not λ. That is the most common error in stationary-wave calculations.

Fundamental frequency for a string fixed at both ends: `L = λ/2`, so `f = v/2L`.

For a pipe **closed at one end**, there is a node at the closed end and an antinode at the open end, giving `L = λ/4` and only **odd harmonics**.

## Exam traps

- Saying coherence requires equal amplitude — it requires constant phase difference and equal frequency.
- Reversing the relationship between slit separation and fringe spacing.
- Using λ instead of λ/2 for the node separation.
- Rounding the maximum order up instead of down.
- Saying stationary waves transfer energy.
- Forgetting that a closed pipe supports only odd harmonics.
- Mixing up which quantity is a and which is x when rearranging λ = ax/D.
- Believing two independent lamps of the same colour will produce a stable interference pattern — they won't, without a fixed phase relationship.
- Confusing the diffraction grating's n (a whole-number order) with a refractive index or any other quantity.

## Self-test

1. State the principle of superposition.
2. What does coherence require, and what does it achieve?
3. How does fringe spacing change if slit separation is halved?
4. Give three differences between progressive and stationary waves.
5. What is the distance between adjacent nodes?
6. Slits 0.50 mm apart produce fringes spaced 1.2 mm apart on a screen 1.5 m away. Find the wavelength.
7. Why does a diffraction grating give sharper, narrower maxima than a double slit?
8. Why can two independent lamps of the same colour not produce a stable interference pattern?
9. Explain why a stationary wave does not transfer energy, in terms of what happens between adjacent nodes.

**Answers:** 1. When two or more waves meet, the resultant displacement is the vector sum of the individual displacements. 2. A constant phase difference and the same frequency; it produces a stable, observable interference pattern. 3. It doubles, since fringe spacing is inversely proportional to slit separation. 4. Progressive waves transfer energy, stationary waves do not; for an ideal, undamped progressive wave in a uniform medium, amplitude is constant along its length, while a stationary wave's amplitude varies from nodes to antinodes; in a stationary wave all points between adjacent nodes are in phase. 5. Half a wavelength. 6. λ = ax/D = (0.50×10⁻³ × 1.2×10⁻³) ÷ 1.5 = 4.0×10⁻⁷ m = **400 nm**. 7. Many slits contribute to each maximum, so the maxima are narrower and more precisely located, giving sharper fringes (brightness depends separately on illumination and slit width). 8. They are not coherent — there is no constant phase relationship between them, so any interference pattern shifts randomly and no stable fringes are seen. 9. Energy is stored, oscillating between kinetic and potential forms within each section between adjacent nodes, rather than being carried along the wave.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-waves--01-aphy-waves-phase.webp" width="900" height="1060" alt="A sound wave of 250 Hz and wavelength 1.36 m is drawn as a displacement-distance graph with points A to D. A and B are 0.34 m apart (quarter cycle, 90 degrees), A and C 0.68 m (half cycle, antiphase), A and D 1.36 m (one cycle, in phase). A second graph of displacement against time gives the period 4.0 ms." loading="lazy">
  <figcaption>Phase difference is x/wavelength of a cycle; the distance graph gives wavelength, the time graph gives period.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-waves--02-aphy-waves-polarisation.webp" width="900" height="1080" alt="Unpolarised light oscillates in every direction; a first Polaroid leaves one plane. A second Polaroid at 30 degrees transmits cos 30 of the amplitude, so 8.0 W per square metre becomes 6.0. Sound oscillates along its direction of travel, so there is nothing to filter. A small graph shows I = I0 cos squared theta (Cambridge only)." loading="lazy">
  <figcaption>Only transverse waves can be polarised; sound cannot.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-waves--03-aphy-waves-stationary-formation.webp" width="900" height="1050" alt="Two identical waves of equal amplitude travel in opposite directions and are added at t = 0, T/4 and T/2. At t = 0 the resultant has double amplitude; at T/4 the waves cancel to a flat line; at T/2 it is the t = 0 pattern upside down. Nodes never move, antinodes swing most, and adjacent nodes are half a wavelength apart." loading="lazy">
  <figcaption>Superposing two opposite waves gives fixed nodes and antinodes half a wavelength apart.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-waves--04-aphy-waves-string-harmonics.webp" width="900" height="1060" alt="First, second and third harmonics on a string fixed at both ends have 1, 2 and 3 loops, with lambda = 2L/n. For L = 0.80 m, T = 40 N and mu = 2.5e-3 kg/m the wave speed is 126.5 m/s and the first harmonic is 79.1 Hz, giving 158 Hz and 237 Hz. Quadrupling the tension doubles the frequency." loading="lazy">
  <figcaption>Harmonic n has n loops and frequency n times the first; f1 = (1/2l)sqrt(T/mu).</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-waves--05-aphy-waves-air-columns.webp" width="900" height="1080" alt="Displacement patterns for a tube 0.375 m long: closed at one end it has a node at the closed end and an antinode at the open end, giving only odd harmonics (227, 680, 1130 Hz). Open at both ends it has antinodes at each end and all harmonics (453, 907 Hz), so it sounds an octave higher." loading="lazy">
  <figcaption>A closed tube supports only odd harmonics; an open tube has twice the fundamental frequency.</figcaption>
</figure>

## Frequently asked questions

**What is the principle of superposition?**
When two or more waves meet, the resultant displacement at a point is the vector sum of the individual displacements.

**How do you increase the fringe spacing in Young's double slit?**
From λ = ax/D, the fringe spacing x increases if you increase the slit-to-screen distance D, increase the wavelength, or decrease the slit separation a.

**Why is a diffraction grating better than a double slit for measuring wavelength?**
Many slits contribute to each maximum, so a grating gives sharper, narrower maxima whose angles can be measured more precisely.

**What is the distance between adjacent nodes in a stationary wave?**
Adjacent nodes, or adjacent antinodes, are half a wavelength apart, not a full wavelength. Using λ instead of λ/2 is a common error.
