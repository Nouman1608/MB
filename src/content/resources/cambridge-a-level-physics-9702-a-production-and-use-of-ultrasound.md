---
title: "Cambridge A Level Physics (9702): Production and use of ultrasound"
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
description: "A focused guide to 24.1 Ultrasound in Cambridge A Level Physics 9702: piezo-electric transducers, pulse-echo imaging, acoustic impedance and attenuation."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **24.1 Production and use of ultrasound** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (A Level). The broader [Medical Physics study guide](/resources/a-physics-medical-physics/) introduces all three parts of Topic 24; this page goes further into how a piezo-electric transducer works as both source and detector, how echo timing and echo strength give diagnostic information, and calculations that combine reflection at boundaries with attenuation in tissue. For quick recall use the [Ultrasound revision notes](/resources/cambridge-a-level-physics-9702-a-production-and-use-of-ultrasound-revision-notes/), and for exam-style questions the [Ultrasound practice questions](/resources/cambridge-a-level-physics-9702-a-production-and-use-of-ultrasound-practice/).

## What 24.1 asks you to do

The syllabus lists six outcomes. Candidates should be able to:

- understand that a **piezo-electric crystal** changes shape when a p.d. is applied across it, and that the crystal generates an **e.m.f.** when its shape changes
- understand how ultrasound waves are **generated and detected** by a piezo-electric transducer
- understand how the **reflection of pulses** of ultrasound at boundaries between tissues can be used to obtain diagnostic information about internal structures
- define the **specific acoustic impedance** of a medium as **Z = ρc**, where c is the speed of sound in the medium
- use **I_R/I₀ = (Z₁ − Z₂)²/(Z₁ + Z₂)²** for the intensity reflection coefficient of a boundary between two media
- recall and use **I = I₀e^(−μx)** for the attenuation of ultrasound in matter

**Ultrasound** is sound (a longitudinal wave) with a frequency above the upper limit of human hearing, about 20 kHz. Medical imaging uses frequencies of a few megahertz.

## The piezo-electric effect

A piezo-electric crystal, such as quartz, has positive and negative ions arranged so that:

- **applying a p.d.** across opposite faces makes the ions move slightly, and the crystal **changes shape** (it gets thicker or thinner, depending on the polarity)
- **changing the crystal's shape** (squeezing or stretching it) displaces the ions and produces an **e.m.f.** across the faces

The effect works in both directions, which is why one crystal can be both transmitter and receiver.

## Generating and detecting ultrasound

### Generation

1. An **alternating p.d.** is applied across the crystal.
2. The crystal expands and contracts at the frequency of the p.d.
3. The vibrating face pushes on the surrounding medium, producing a longitudinal ultrasound wave of the same frequency.
4. The vibration is largest when the applied frequency equals the crystal's **natural frequency** (resonance), which depends on its thickness. A crystal is therefore cut to suit the frequency required.

### Detection

1. A returning ultrasound wave makes pressure variations at the crystal face.
2. These squeeze and stretch the crystal at the wave's frequency.
3. An alternating **e.m.f.** is generated across the crystal, which is amplified and processed.

### Why pulses?

The transducer sends a **short pulse**, then stops and acts as a receiver while the echoes return. Pulses are essential because:

- the same crystal cannot transmit and listen for echoes at the same moment
- the **time** between sending a pulse and receiving each echo can only be measured if the signal has a definite start

A damping (backing) material behind the crystal stops it vibrating quickly after each pulse, keeping pulses short.

## How echoes give diagnostic information

Each time a pulse meets a boundary between two tissues, part of it is reflected and part transmitted. The transducer receives a series of echoes from successive boundaries. Two measurements are used:

- **Time delay** t of each echo gives the **depth** of the boundary. The pulse travels there and back, so depth d = ct/2, where c is the speed of sound in tissue.
- **Intensity** of each echo depends on how different the two tissues are (their acoustic impedances) and how much attenuation the pulse has suffered on the way.

Scanning the transducer across the body, or using an array of crystals, builds up a two-dimensional image of the boundaries.

## Specific acoustic impedance

```
Z = ρc
```

where ρ is the density of the medium and c is the speed of sound in it. The unit is **kg m⁻² s⁻¹**. The bigger the difference in Z between two media, the larger the fraction of intensity reflected at their boundary.

## The intensity reflection coefficient

```
I_R / I₀ = (Z₁ − Z₂)² / (Z₁ + Z₂)²
```

The squared numerator means it does not matter which medium is labelled 1. The coefficient is always between 0 and 1, and the fraction transmitted is 1 − I_R/I₀ (ignoring absorption at the boundary).

### Why a coupling gel is used

Typical data (illustrative values): air, Z = 4.3 × 10² kg m⁻² s⁻¹; soft tissue, Z = 1.63 × 10⁶ kg m⁻² s⁻¹.

```
I_R / I₀ = (1.63 × 10⁶ − 430)² / (1.63 × 10⁶ + 430)² = 0.999
```

Almost all the ultrasound would be reflected at a layer of air between transducer and skin. A gel with Z close to that of skin fills the gap: with Z = 1.53 × 10⁶ kg m⁻² s⁻¹ for the gel, only about 0.1 % is reflected. This is called **impedance matching**.

## Worked example 1: depth and reflection

Soft tissue has density 1060 kg m⁻³ and speed of sound 1540 m s⁻¹. Bone has Z = 7.75 × 10⁶ kg m⁻² s⁻¹. An echo from a tissue-bone boundary arrives 65 μs after the pulse is sent. Calculate the depth of the boundary and the fraction of intensity reflected there.

```
d = ct/2 = 1540 × 65 × 10⁻⁶ / 2 = 0.050 m (5.0 cm)
Z(tissue) = ρc = 1060 × 1540 = 1.63 × 10⁶ kg m⁻² s⁻¹
I_R/I₀ = (7.75 − 1.63)² / (7.75 + 1.63)² = 37.5 / 88.0 = 0.43
```

*Annotation.* The factor of 10⁶ cancels, so the impedances can be used in units of 10⁶ kg m⁻² s⁻¹. About 43 % is reflected and most of the rest is absorbed in bone, which is why structures behind bone are hard to image with ultrasound.

## Attenuation

As ultrasound travels through tissue, its intensity falls exponentially, because energy is absorbed and scattered:

```
I = I₀ e^(−μx)
```

μ is the **attenuation coefficient** (unit m⁻¹ when x is in m). For an echo, the pulse is attenuated on the way **to** the boundary and again on the way **back**, so the path length is 2x.

## Worked example 2: how strong is the echo?

A boundary between fat (Z = 1.34 × 10⁶ kg m⁻² s⁻¹) and muscle (Z = 1.71 × 10⁶ kg m⁻² s⁻¹) lies 4.0 cm below the skin. The attenuation coefficient of the fat is 23 m⁻¹. Find the echo intensity as a fraction of the pulse intensity entering the fat.

```
reflection: I_R/I₀ = (1.71 − 1.34)² / (1.71 + 1.34)² = 0.137 / 9.30 = 0.0147
attenuation (there and back, 0.080 m): e^(−23 × 0.080) = e^(−1.84) = 0.159
echo fraction = 0.0147 × 0.159 = 2.3 × 10⁻³
```

*Annotation.* Small differences in Z between soft tissues give weak echoes, which is why the receiver must amplify the signals, and why deeper echoes are amplified more to compensate for attenuation.

## Common mistakes

- **Saying the crystal "vibrates because of the current"**. It is the applied **p.d.** that changes its shape.
- **Forgetting that the transducer also detects**, by generating an e.m.f. when the returning wave deforms it.
- **Using d = ct** instead of d = ct/2 for the depth of a boundary.
- **Using x instead of 2x** when attenuating an echo.
- **Explaining the gel as "lubrication"** or "to stop friction". It removes air and matches the impedance.
- **Quoting Z without units**, or with the units of density.
- **Adding instead of multiplying** the reflection fraction and the attenuation fraction.

## Exam technique for the command words

- **Explain** (how ultrasound is generated): alternating p.d., crystal changes shape at that frequency, vibrations produce longitudinal waves, resonance at the crystal's natural frequency.
- **Explain** (how it is detected): returning wave deforms crystal, e.m.f. generated.
- **Define** (specific acoustic impedance): the product of the density of the medium and the speed of sound in it.
- **Explain** (why gel is needed): Z of air is very different from Z of skin, so almost all the intensity would be reflected.
- **Calculate**: Z first if needed, then the reflection coefficient, then attenuation with the full path length.
- **Describe** (how pulse reflections give diagnostic information): time delay gives depth; echo intensity gives the nature of the boundary.

## Related resources

- [Medical Physics study guide](/resources/a-physics-medical-physics/) — the whole of Topic 24
- [Ultrasound revision notes](/resources/cambridge-a-level-physics-9702-a-production-and-use-of-ultrasound-revision-notes/)
- [Ultrasound practice questions](/resources/cambridge-a-level-physics-9702-a-production-and-use-of-ultrasound-practice/)
- [Production and use of X-rays](/resources/cambridge-a-level-physics-9702-a-production-and-use-of-x-rays/) — subtopic 24.2, which uses the same attenuation law
- [Progressive waves](/resources/cambridge-a-level-physics-9702-as-progressive-waves/) — longitudinal waves and intensity from AS Level

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
