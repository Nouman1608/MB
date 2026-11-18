---
title: "AQA A-Level Physics (7408): Physics of the ear -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA A-level Physics 7408 notes on the ear (3.10.2): transmission chain, decibel rules, equal loudness curves, dBA, hearing loss and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense section **3.10.2 Physics of the ear** of the AQA AS and A-level Physics specification (7407/7408), part of the A-level only Medical physics option. Learn the explanations first in the [physics of the ear study guide](/resources/aqa-a-level-physics-7408-physics-of-the-ear-aqa-alevel/), then use the [physics of the ear practice questions](/resources/aqa-a-level-physics-7408-physics-of-the-ear-aqa-alevel-practice/). The [Medical physics revision notes](/resources/aqa-a-level-physics-medical-physics-revision-notes/) cover the rest of the option.

## The transmission chain (3.10.2.1)

1. **Pinna** collects sound; the **auditory canal** guides it to the **eardrum**.
2. The eardrum vibrates at the sound's frequency.
3. The **ossicles** (hammer, anvil, stirrup) lever the vibration to the **oval window**: force up slightly, amplitude down.
4. The oval window's area is much smaller than the eardrum's, so **pressure rises greatly** (pressure gain ≈ lever ratio × area ratio).
5. Pressure waves travel through the **cochlear fluid**; the **basilar membrane** vibrates most at a frequency-dependent position (high f near the oval window).
6. **Hair cells** at that position send impulses along the **auditory nerve**.

Why the pressure gain matters: air and the cochlear fluid have very different acoustic impedances, so without it about 99.9% of the sound energy would be reflected at the fluid boundary. The **Eustachian tube** keeps the air pressure equal on both sides of the eardrum.

## Key terms

| Term | Meaning |
|---|---|
| Intensity | Power per unit area perpendicular to the direction of travel (W m⁻²) |
| Threshold of hearing I₀ | 1.0 × 10⁻¹² W m⁻², the reference intensity at 1 kHz |
| Intensity level | 10 log₁₀(I/I₀), in decibels (dB) |
| Equal loudness curve | Line joining intensity levels at different frequencies that sound equally loud |
| Threshold curve | Lowest equal loudness curve: quietest audible sound at each frequency |
| dBA scale | Intensity level weighted for the ear's frequency response; matches perceived loudness |
| Sound level meter | Microphone-based instrument reading dB or dBA |
| Noise-induced loss | Raised threshold over a band, typically a notch near 4 kHz |
| Age-related loss | Raised threshold mainly at high frequencies; upper limit of hearing falls |

## Decibel rules (3.10.2.2)

| Change in intensity | Change in level |
|---|---|
| × 2 | + 3.0 dB |
| × 4 (distance halved, point source) | + 6.0 dB |
| × 10 | + 10 dB |
| × 100 | + 20 dB |
| ÷ 4 (distance doubled, point source) | − 6.0 dB |

- From level to intensity: **I = I₀ × 10^(level/10)**.
- Point source: I = P/4πr², assuming equal emission in all directions and no absorption.
- **Combining sources**: convert each level to I, add, convert back. n identical sources add 10 log n.
- Loudness perception is roughly logarithmic: each × 10 in intensity feels like a similar step in loudness, which is why a log scale is used.

## Equal loudness curves

**Producing them:** a listener compares a test tone at each frequency with a 1 kHz reference tone and adjusts the test tone until they sound equally loud; repeat for several reference levels; average many listeners with normal hearing.

**Reading them** (level against frequency on a log axis):

- Dip at about 3 to 4 kHz: the ear's most sensitive region.
- Steep rise at low and high frequencies: much more intensity needed.
- Flatter curves at high loudness: the ear's response is more even for loud sounds.
- Range of hearing roughly 20 Hz to 20 kHz for a young adult.

## Hearing defects (3.10.2.3)

- Hearing loss = the threshold curve moves **up** at the affected frequencies.
- **Excessive noise**: a notch over a band of frequencies (often near 4 kHz); sounds in that band seem quiet.
- **Ageing**: loss grows with frequency; high-pitched sounds and speech consonants are lost first.
- Describe the curves and the experience only; physiological causes are not required.

## Exam traps

- Adding dB values: 80 dB + 80 dB is 83 dB, not 160 dB.
- Forgetting the 10 in 10 log(I/I₀), or using ln.
- Rearranging wrongly: I = I₀ × 10^(L/10), not I₀ × 10L.
- Saying the ear is most sensitive at 1 kHz: 1 kHz is the reference, the minimum is near 3 to 4 kHz.
- Calling dBA "more accurate": it is weighted to match human perception.
- Drawing hearing loss as the curve moving down.
- Leaving out the area ratio when explaining the pressure increase at the oval window.

## Self-test

1. State the definition of intensity.
2. Give the value of the threshold of hearing used in the intensity level equation.
3. A sound has intensity 4.0 × 10⁻⁶ W m⁻². Calculate its intensity level.
4. Calculate the intensity of a 92 dB sound.
5. Three identical machines each give 85 dB at a point. Calculate the combined level.
6. A listener moves from 2.0 m to 6.0 m from a point source. By how many dB does the level fall?
7. Name the two features of the middle ear that increase the pressure at the oval window.
8. Eardrum area 55 mm², oval window 3.0 mm², lever ratio 1.2. Estimate the pressure gain.
9. Why is a logarithmic scale used for intensity level?
10. Describe how an equal loudness curve is produced.
11. Why does a sound level meter for workplace noise use the dBA scale?
12. How does the threshold curve of an elderly person differ from that of a young adult?

### Answers

1. The power per unit area carried through a surface perpendicular to the direction of travel of the wave.
2. **I₀ = 1.0 × 10⁻¹² W m⁻²**.
3. 10 log(4.0 × 10⁻⁶/1.0 × 10⁻¹²) = 10 log(4.0 × 10⁶) = **66 dB**.
4. I = 10⁻¹² × 10^9.2 = **1.6 × 10⁻³ W m⁻²**.
5. 85 + 10 log 3 = **89.8 dB** (about 90 dB).
6. Intensity falls by a factor of 3² = 9, so the level falls by 10 log 9 = **9.5 dB**.
7. The **lever action of the ossicles** and the **smaller area of the oval window** compared with the eardrum.
8. 1.2 × 55/3.0 = **22**.
9. Perceived loudness is roughly proportional to the logarithm of intensity, and the range of audible intensities is about 10¹², so a log scale matches perception and compresses the range.
10. A listener adjusts the intensity of a test tone at each frequency until it sounds as loud as a 1 kHz reference tone; the points are joined, repeated for other reference levels and averaged over many listeners.
11. dBA weights each frequency according to the ear's response, so the reading reflects perceived loudness (and risk to hearing) rather than raw intensity.
12. It is **higher**, increasingly so at **higher frequencies**, and the upper frequency limit is lower.

## Frequently asked questions

**Why can decibel values not be added together?**
Intensity level is a logarithm of intensity, so the intensities add, not the levels. Convert each level to an intensity, add them, then take 10 log(I/I₀) of the total.

**Where is the human ear most sensitive?**
Equal loudness curves dip lowest at roughly 3 to 4 kHz, so the least intensity is needed there for a given loudness. Sensitivity falls steeply at low and very high frequencies.

## Official syllabus

AQA AS and A-level Physics specification (7407/7408), AS and A-level exams June 2016 onwards: section 3.10.2 Physics of the ear (A-level only).
