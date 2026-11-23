---
title: "AQA A-Level Physics (7408): Physics of the ear"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Medical physics"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 10.2
syllabusTopics:
  - qualification: "a-level"
    topic: "medical-physics-aqa-alevel"
    subtopic: "physics-of-the-ear-aqa-alevel"
description: "AQA A-level Physics 7408 section 3.10.2 in depth: how the ear transmits sound, decibel and dBA calculations, equal loudness curves and hearing loss."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into section **3.10.2 Physics of the ear** of the AQA AS and A-level Physics specification (7407/7408). It sits inside the Medical physics option (section 3.10), which is A-level only and assessed in Paper 3 Section B if your school chooses it. The specification splits the sub-section into three parts: 3.10.2.1 the ear as a sound detection system, 3.10.2.2 sensitivity and frequency response, and 3.10.2.3 defects of hearing.

The whole option is summarised in the [Medical physics study guide](/resources/aqa-a-level-physics-medical-physics/). For quick recall use the [physics of the ear revision notes](/resources/aqa-a-level-physics-7408-physics-of-the-ear-revision-notes/), and test yourself with the [physics of the ear practice questions](/resources/aqa-a-level-physics-7408-physics-of-the-ear-practice/).

## What the specification asks for

| Spec ref | Content |
|---|---|
| 3.10.2.1 | Simple structure of the ear; transmission processes |
| 3.10.2.2 | Producing and interpreting equal loudness curves; perception of relative intensity and the need for a logarithmic scale; definition of intensity; intensity level = 10 log(I/I₀) with I₀ = 1.0 × 10⁻¹² W m⁻²; measuring intensity levels with the dB and dBA scales |
| 3.10.2.3 | How excessive noise and ageing change equal loudness curves and what the listener experiences (physiological changes excluded) |

## 3.10.2.1 The ear as a sound detection system

The ear has three regions, and each step of the transmission chain has a physical job.

**Outer ear.** The pinna collects sound and directs it along the auditory canal to the eardrum (tympanic membrane). The pressure variations of the wave make the eardrum vibrate at the frequency of the sound.

**Middle ear.** Three small bones, the ossicles (hammer, anvil and stirrup), link the eardrum to the oval window of the inner ear. The middle ear is filled with air, and the Eustachian tube connects it to the throat so the pressure on both sides of the eardrum stays equal; otherwise the drum would be pushed in or out and vibrate less freely.

**Inner ear.** The oval window passes the vibration into the fluid-filled cochlea. Pressure waves in the fluid make the basilar membrane vibrate. The membrane changes in stiffness and width along its length, so each frequency produces its largest vibration at a particular place: high frequencies near the oval window, low frequencies further along. Hair cells at that place are disturbed and trigger nerve impulses that travel along the auditory nerve to the brain.

### Why the middle ear is needed

The inner ear is filled with fluid, and the acoustic impedance of a liquid is very much larger than that of air. Using the impedance ideas from ultrasound (Z = ρc), with Z for air about 430 kg m⁻² s⁻¹ and for a water-like fluid about 1.48 × 10⁶ kg m⁻² s⁻¹:

```
fraction reflected = ((1.48 × 10⁶ − 430)/(1.48 × 10⁶ + 430))² = 0.9988
fraction transmitted ≈ 0.0012, about 0.1%
```

If sound in air struck the fluid directly, almost all of it would be reflected. The middle ear acts as an impedance matcher by **increasing the pressure** of the vibration:

- The ossicles act as a **lever**, so the force on the oval window is a little larger than the force on the eardrum (and the amplitude a little smaller).
- The **oval window has a much smaller area** than the eardrum. Pressure = force/area, so the same force on a smaller area gives a much larger pressure.

**Worked example 1.** Take illustrative values: eardrum area 60 mm², oval window area 3.2 mm², lever ratio of the ossicles 1.3.

```
force gain    = 1.3
area ratio    = 60/3.2 = 18.75
pressure gain = 1.3 × 18.75 = 24 (to 2 s.f.)
```

The area ratio does most of the work. In an exam, state both effects and say which one gives most of the increase.

## 3.10.2.2 Sensitivity and frequency response

### Intensity and the logarithmic scale

**Intensity** is the power per unit area carried by the wave through a surface perpendicular to its direction of travel, in W m⁻². For a point source radiating equally in all directions with no absorption, I = P/4πr².

The ear responds to an enormous range: the threshold of hearing at 1 kHz is defined as I₀ = 1.0 × 10⁻¹² W m⁻², and sounds that cause pain are roughly 10¹² times more intense. Our perception of loudness is roughly proportional to the **logarithm** of intensity: each tenfold increase in intensity sounds like about the same step up in loudness. A logarithmic scale therefore matches what we hear and compresses the range into manageable numbers:

**intensity level = 10 log₁₀(I/I₀)**, measured in decibels (dB).

Useful consequences:

- Multiplying I by 10 adds 10 dB; multiplying by 100 adds 20 dB.
- Doubling I adds 10 log 2 = 3.0 dB.
- Intensity levels **cannot be added**. Convert each to an intensity, add the intensities, then convert back.

**Worked example 2.** A point source emits 0.050 W of sound power. Find the intensity level at 4.0 m and at 8.0 m.

```
I(4.0 m) = 0.050/(4π × 4.0²) = 2.49 × 10⁻⁴ W m⁻²
level    = 10 log(2.49 × 10⁻⁴/1.0 × 10⁻¹²) = 84.0 dB
I(8.0 m) = I(4.0 m)/4, so level = 84.0 − 10 log 4 = 78.0 dB
```

Doubling the distance from a point source always lowers the level by 6.0 dB.

**Worked example 3.** Two machines produce 70 dB and 75 dB separately at a point. Find the combined level.

```
I₁ = 10⁻¹² × 10⁷   = 1.0 × 10⁻⁵ W m⁻²
I₂ = 10⁻¹² × 10^7.5 = 3.16 × 10⁻⁵ W m⁻²
total = 4.16 × 10⁻⁵ W m⁻²  →  10 log(4.16 × 10⁷) = 76.2 dB
```

The answer is only a little above the louder machine, not 145 dB.

### Equal loudness curves

To **produce** equal loudness curves, a listener with normal hearing wears headphones and hears a 1 kHz reference tone at a set intensity level. A test tone at another frequency is played, and its intensity is adjusted until the listener judges it equally loud. Repeating this at many frequencies, and for several reference levels, gives a family of curves: every point on one curve sounds equally loud. Results from many listeners are averaged.

To **interpret** them (intensity level on the vertical axis, frequency on a logarithmic horizontal axis from about 20 Hz to 20 kHz):

- The **lowest curve** is the threshold of hearing: the quietest sound detectable at each frequency.
- Where a curve **dips**, the ear is most sensitive; less intensity is needed for the same loudness. The minimum is at roughly 3 to 4 kHz.
- The curves **rise steeply** at low and high frequencies, so a 50 Hz tone needs a far higher intensity level than a 1 kHz tone to sound equally loud.
- The curves become **flatter at higher loudness**, so the ear's response is more even for loud sounds than for quiet ones.

### dB and dBA

A sound level meter measures intensity level with a microphone. On the plain **dB** scale every frequency counts equally, so a meter can read the same for a low hum and a 3 kHz whistle that sound very different. The **dBA** scale applies a frequency weighting, based on the shape of an equal loudness curve, that reduces the contribution of low and very high frequencies. A dBA reading therefore reflects **perceived loudness** and is the scale used for noise exposure limits. Two sounds with equal dBA readings sound roughly equally loud; two with equal dB readings may not.

## 3.10.2.3 Defects of hearing

A hearing test plots the listener's threshold of hearing against frequency. Hearing loss shows as the **threshold curve moving upwards** (a higher intensity level is needed to hear) at the affected frequencies; the other equal loudness curves are affected in the same region.

| Cause | Effect on the curves | What the person experiences |
|---|---|---|
| Excessive noise (injury) | Threshold raised over a band of frequencies, often a "notch" centred near 4 kHz | Sounds in that band seem quieter or are missed; speech can be hard to follow against background noise |
| Ageing | Threshold raised mainly at high frequencies, increasing with frequency; upper limit of hearing falls | High-pitched sounds fade first; consonants become harder to distinguish |

The specification excludes the physiological changes behind these effects, so describe the curves and the experience, not the damage to cells.

## Model answer

**Question:** Explain why a sound measured at 60 dB at 50 Hz sounds quieter than a sound measured at 60 dB at 3 kHz. **[3]**

**Answer:** The dB scale measures intensity relative to I₀ and does not take account of the ear's frequency response [1]. The equal loudness curves show the ear is much less sensitive at 50 Hz, so the threshold of hearing and every curve is higher there [1]. The 60 dB tone at 50 Hz lies on a lower-loudness curve than the 60 dB tone at 3 kHz, near the ear's most sensitive region, so it is perceived as quieter; on the dBA scale it would read lower [1].

## Common mistakes

- Adding decibel values directly instead of adding intensities.
- Using ln instead of log₁₀ in the intensity level equation.
- Saying the ossicles increase the pressure "by amplifying the sound": name the lever and the area ratio.
- Describing equal loudness curves without the 1 kHz reference tone or the listener's judgement.
- Saying dBA measures intensity more accurately; it measures perceived loudness.
- Explaining hearing loss with physiology instead of changes to the curves.

## Exam technique

- **State**: one fact, no explanation, such as "the threshold of hearing is 1.0 × 10⁻¹² W m⁻²".
- **Describe**: the steps of a process in order, such as the transmission chain from pinna to auditory nerve.
- **Explain**: give the physics reason, such as why the oval window's small area matters.
- **Calculate**: show the substitution into 10 log(I/I₀), keep intensities to 3 significant figures until the end, and give dB to the precision of the data.
- **Sketch**: for a hearing-loss graph, draw the normal threshold curve and the raised curve on the same axes, with frequency on a log scale.

Next, try the [physics of the ear practice questions](/resources/aqa-a-level-physics-7408-physics-of-the-ear-practice/) or review the whole option in the [Medical physics revision notes](/resources/aqa-a-level-physics-medical-physics-revision-notes/).

## Official syllabus

AQA AS and A-level Physics specification (7407/7408), AS and A-level exams June 2016 onwards: section 3.10.2 Physics of the ear (A-level only), within the Medical physics option.
