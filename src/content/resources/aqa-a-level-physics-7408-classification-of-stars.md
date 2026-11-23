---
title: "AQA A-Level Physics (7408): Classification of stars"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Astrophysics"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 9.2
syllabusTopics:
  - qualification: "a-level"
    topic: "astrophysics-aqa-alevel"
    subtopic: "classification-of-stars-aqa-alevel"
description: "AQA A-Level Physics 7408 classification of stars in depth: magnitudes, distance, Wien and Stefan, spectral classes, the HR diagram, supernovae and black holes."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This study guide goes deeper into sub-section 3.9.2 Classification of stars of the AQA AS and A-level Physics specification (7407/7408, AS and A-level exams June 2016 onwards), sections 3.9.2.1 to 3.9.2.6. It is part of the Astrophysics option (section 3.9), which is **A-level only** and assessed in Paper 3 Section B if your school studies it.

The [Astrophysics study guide](/resources/aqa-a-level-physics-astrophysics/) covers the option as a whole. Use the [classification of stars revision notes](/resources/aqa-a-level-physics-7408-classification-of-stars-revision-notes/) for recall and the [classification of stars practice questions](/resources/aqa-a-level-physics-7408-classification-of-stars-practice/) to test yourself.

Values used: σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴; Wien constant 2.9 × 10⁻³ m K; G = 6.67 × 10⁻¹¹ N m² kg⁻²; c = 3.00 × 10⁸ m s⁻¹; solar mass 1.99 × 10³⁰ kg; solar radius 6.96 × 10⁸ m; Sun's power 3.9 × 10²⁶ W; 1 pc = 3.08 × 10¹⁶ m; 1 light year = 9.46 × 10¹⁵ m.

## What this subtopic covers

| Spec ref | Content |
|---|---|
| 3.9.2.1 | Apparent magnitude m; Hipparcos scale; dimmest visible stars m = 6; a difference of 1 is an intensity ratio of 2.51; brightness is subjective |
| 3.9.2.2 | Parsec and light year; absolute magnitude M; m − M = 5 log(d/10) |
| 3.9.2.3 | Stefan's law and Wien's law; black-body curves; star as a black body; inverse square law and its assumptions; P = σAT⁴ to compare stars |
| 3.9.2.4 | Spectral classes O to M; Balmer lines and the n = 2 state |
| 3.9.2.5 | HR diagram: main sequence, dwarfs, giants; axis scales; the Sun; evolution of a Sun-like star |
| 3.9.2.6 | Supernovae, neutron stars, black holes; gamma ray bursts; type 1a standard candles and dark energy; supermassive black holes; Rs ≈ 2GM/c² |

## Magnitudes: the logarithmic scale

The **Hipparcos scale** assigns apparent magnitude m by how bright a star appears, with the dimmest stars visible to the naked eye at m = 6. Brighter means lower m, and very bright objects have negative magnitudes. Each step of 1 is an intensity ratio of 2.51, so the scale is logarithmic: 5 magnitudes is 2.51⁵ ≈ 100.

```
I₁/I₂ = 2.51^(m₂ − m₁)
Δm = log(ratio)/log 2.51        ratio 10 → Δm = 2.5;  ratio 100 → Δm = 5.0
```

The specification describes brightness as a **subjective** scale: the original magnitudes came from judgement by eye, whereas intensity (W m⁻²) is a measured physical quantity.

**Worked example 1.** Two stars have m = −1.5 and m = 4.5. The ratio of intensities is 2.51⁶ = 250, the brighter being the one with m = −1.5.

## Distance and absolute magnitude

The **light year** is the distance light travels in one year. The **parsec** is the distance at which one astronomical unit (the mean Earth–Sun distance) subtends an angle of one arcsecond. 1 pc = 3.08 × 10¹⁶ m = 3.26 light years.

**Absolute magnitude** M is the apparent magnitude a star would have at 10 pc, so it measures intrinsic brightness. The distance modulus links them: m − M = 5 log₁₀(d/10), with d in parsecs.

**Worked example 2.** A star with m = 1.25 is 130 pc away.

```
M = m − 5 log(130/10) = 1.25 − 5 × 1.114 = 1.25 − 5.57 = −4.3
```

Because M is lower than m, the star would look brighter at 10 pc, as expected for a star further than 10 pc away. If m − M is negative, the star is closer than 10 pc.

## Black-body radiation

Stars are modelled as **black bodies**: perfect absorbers and emitters whose spectrum depends only on temperature. The curves have a single peak; a hotter body emits more at every wavelength and peaks at a shorter wavelength.

- **Wien's law**: λ_max T = 2.9 × 10⁻³ m K. Use it to estimate surface temperature from the peak.
- **Stefan's law**: P = σAT⁴ with A = 4πr². Power depends on size and on the fourth power of temperature.
- **Inverse square law**: I = P/4πd². Assumptions: the star radiates equally in all directions, and no radiation is absorbed or scattered between star and observer.

**Worked example 3: comparing powers.** A star has T = 12 000 K and r = 2.5 solar radii; the Sun has T = 5800 K.

```
P/P_sun = (r/r_sun)² × (T/T_sun)⁴ = 2.5² × (12 000/5800)⁴ = 6.25 × 18.3 = 115
```

**Worked example 4: a hot but faint star.** A white dwarf with T = 20 000 K and r = 7.0 × 10⁶ m.

```
P = σ × 4πr² × T⁴ = 5.67 × 10⁻⁸ × 4π × (7.0 × 10⁶)² × (2.0 × 10⁴)⁴ = 5.6 × 10²⁴ W
P/P_sun = 5.6 × 10²⁴/3.9 × 10²⁶ = 0.014
```

Despite being more than three times hotter than the Sun, it emits about 1.4% of the Sun's power because its surface area is so small. A cool red giant at 3500 K peaks at 2.9 × 10⁻³/3500 = 830 nm, in the near infrared, yet can be very luminous because it is enormous.

## Spectral classes and Balmer lines

Stars are classified O, B, A, F, G, K, M in order of falling temperature. Each class has an intrinsic colour and characteristic absorption lines (helium and ionised helium in O stars; neutral metals and titanium oxide in M stars). The temperature reasoning the specification examines concerns hydrogen **Balmer** lines only:

1. Balmer absorption lines are produced by hydrogen atoms whose electrons are in the n = 2 level absorbing visible photons.
2. In cool stars (K, M) few atoms have enough energy to be excited to n = 2, so the lines are weak.
3. In the hottest stars (O) most hydrogen is ionised, so again few atoms are in n = 2.
4. A-class stars (7500–11 000 K) have the most atoms in n = 2, so their Balmer lines are strongest.

## The HR diagram

Absolute magnitude runs from +15 at the bottom to −10 at the top; temperature runs from 50 000 K on the left to 2500 K on the right (or spectral class O to M). The **main sequence** is a band from top left (hot, luminous) to bottom right (cool, faint). **Giants** and **supergiants** sit above it on the right; **white dwarfs** below it on the left. The Sun is on the main sequence at about 5800 K and M ≈ +5.

Reading the diagram: two stars at the same temperature but different M must differ in surface area (Stefan's law), so a star directly above another is larger. That is why giants, cool yet luminous, must be huge, and white dwarfs, hot yet faint, must be tiny.

**Evolution of a Sun-like star**: it forms from a contracting cloud and joins the main sequence, where it fuses hydrogen for most of its life; it then expands and cools into a red giant (moving up and to the right); it sheds its outer layers, and the core moves to the left and down to become a white dwarf.

## Supernovae, neutron stars and black holes

- A **supernova** is defined by a rapid increase in absolute magnitude.
- A **neutron star** is composed almost entirely of neutrons, with a density similar to that of a nucleus.
- A **black hole** has an escape velocity greater than c. The event horizon radius is Rs ≈ 2GM/c².
- **Gamma ray bursts** come from the collapse of supergiant stars to form neutron stars or black holes; compare their energy with the Sun's total output over its lifetime.
- **Supermassive black holes** lie at the centres of galaxies.

**Worked example 5: estimates.**

```
Neutron star, 1.4 solar masses, radius 10 km:
  ρ = 1.4 × 1.99 × 10³⁰/((4/3)π × (1.0 × 10⁴)³) = 6.7 × 10¹⁷ kg m⁻³
Black hole of 10 solar masses:
  Rs = 2 × 6.67 × 10⁻¹¹ × 1.99 × 10³¹/(3.00 × 10⁸)² = 2.9 × 10⁴ m
Sun's lifetime output (1.0 × 10¹⁰ years):
  3.9 × 10²⁶ × 1.0 × 10¹⁰ × 3.15 × 10⁷ = 1.2 × 10⁴⁴ J
```

**Type 1a supernovae as standard candles.** Their light curve rises rapidly to a peak and then declines more slowly over weeks and months. Because the peak absolute magnitude is about the same each time (about −19.3), measuring the peak apparent magnitude gives the distance. A type 1a peaking at m = 12.7 has d = 10 × 10^((12.7 + 19.3)/5) = 2.5 × 10⁷ pc. Distant type 1a supernovae appeared fainter than expected, implying the expansion of the Universe is accelerating; this is attributed to **dark energy**. The idea is controversial because the nature of dark energy is unknown and the conclusion depends on all type 1a events really having the same peak.

## Common mistakes

- Saying a higher magnitude means a brighter star.
- Using d in metres or light years in m − M = 5 log(d/10).
- Forgetting the fourth power of T, or using r instead of r².
- Explaining weak Balmer lines in only one of the two temperature extremes.
- Plotting temperature increasing to the right on an HR diagram.
- Describing a neutron star as "dense" without saying what it is made of.

## Exam technique for AQA command words

- **Explain** (Balmer lines): give both the low-temperature and the high-temperature reason.
- **Sketch** (HR diagram or light curve): correct axis directions and ranges, labelled regions, the Sun marked.
- **Compare** (two stars): use ratios from Stefan's law rather than calculating each power separately.
- **Discuss** (dark energy): give the evidence, the conclusion and why it is disputed.

## Official syllabus

AQA AS and A-level Physics specification (7407/7408), AS and A-level exams June 2016 onwards: section 3.9.2 Classification of stars (A-level only).
