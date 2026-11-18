---
title: "Cambridge A Level Physics (9702): Production and use of ultrasound -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge A Level Physics 9702 24.1 Ultrasound: piezo-electric transducers, pulse-echo, Z = ρc, reflection coefficient and attenuation, with a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Subtopic 24.1 of Cambridge International AS & A Level Physics 9702 (2025–2027) covers the piezo-electric effect, generation and detection of ultrasound, pulse-echo diagnosis, specific acoustic impedance, the intensity reflection coefficient and attenuation. These notes are condensed for recall. For full explanations and worked examples, read the [Ultrasound study guide](/resources/cambridge-a-level-physics-9702-a-production-and-use-of-ultrasound/); to apply the ideas, try the [Ultrasound practice questions](/resources/cambridge-a-level-physics-9702-a-production-and-use-of-ultrasound-practice/).

## Equations

```
Z = ρc                                 unit kg m⁻² s⁻¹
I_R / I₀ = (Z₁ − Z₂)² / (Z₁ + Z₂)²     (on the data sheet)
I = I₀ e^(−μx)                          (recall)
depth of boundary d = ct / 2
```

## Piezo-electric effect: both directions

| Cause | Effect | Used for |
|---|---|---|
| p.d. applied across crystal | Crystal changes shape | Generating ultrasound |
| Crystal's shape changed | e.m.f. generated across crystal | Detecting ultrasound |

## Generation and detection sequence

**Generating:**

1. Alternating p.d. applied across the crystal.
2. Crystal expands and contracts at that frequency.
3. Vibrating face produces longitudinal ultrasound waves.
4. Largest amplitude at resonance: applied frequency = natural frequency of crystal (set by its thickness).

**Detecting:**

1. Returning wave produces pressure changes at the crystal.
2. Crystal is compressed and stretched.
3. Alternating e.m.f. generated, then amplified.

**Pulses** are used so the same transducer can switch to receiving, and so the echo time can be measured. Damping material makes each pulse short.

## Diagnostic information from echoes

| Measurement | Tells you |
|---|---|
| Time delay of echo | Depth of boundary, d = ct/2 |
| Intensity of echo | How different the two tissues are (Z mismatch), after attenuation |
| Many echoes from a scan | Positions of boundaries, built into an image |

## Reflection: key comparisons

| Boundary | Z mismatch | Fraction reflected | Consequence |
|---|---|---|---|
| Air and skin | Huge | About 0.999 | Coupling gel essential |
| Gel and skin | Small | About 0.001 | Almost all enters the body |
| Soft tissue and bone | Large | About 0.4 | Strong echo; little reaches tissue behind bone |
| Fat and muscle | Small | About 0.015 | Weak echo, needs amplification |

Fraction transmitted = 1 − I_R/I₀.

## Attenuation

- Intensity falls exponentially with distance because of absorption and scattering.
- μ is the attenuation coefficient (m⁻¹).
- For an echo from depth x, the path is **2x**: I/I₀ = e^(−2μx).
- Echo fraction = (reflection coefficient) × (attenuation factor): **multiply**, do not add.
- Thickness that halves the intensity: x = ln 2 / μ (for μ = 23 m⁻¹, about 3.0 cm).

## Calculation chain for an echo

1. Z = ρc for each tissue (if not given).
2. Reflection coefficient at the boundary from the two Z values.
3. Attenuation factor e^(−μ × 2x) for the journey there and back.
4. Echo intensity = I₀ × reflection coefficient × attenuation factor.
5. Depth from the echo time: d = ct/2.

## Key terms

| Term | Meaning |
|---|---|
| Ultrasound | Longitudinal sound wave with frequency above about 20 kHz |
| Transducer | Device converting electrical energy to ultrasound and back |
| Specific acoustic impedance | Density of a medium × speed of sound in it |
| Intensity reflection coefficient | Fraction of incident intensity reflected at a boundary |
| Attenuation | Decrease in intensity as the wave passes through matter |
| Coupling gel | Gel with Z close to skin, removing air between transducer and skin |
| Impedance matching | Using media of similar Z so that most intensity is transmitted |

## Exam traps

- Saying a current, rather than a p.d., changes the crystal's shape.
- Describing generation only, and forgetting detection by the same crystal.
- d = ct instead of d = ct/2.
- Attenuating over x instead of 2x for an echo.
- "Gel acts as a lubricant": wrong reason.
- Leaving the 10⁶ in one impedance but not the other.
- Writing Z in kg m⁻³ (density units).

## Self-test

1. What happens to a piezo-electric crystal when a p.d. is applied across it?
2. What happens when its shape is changed by a sound wave?
3. Why must the applied p.d. be alternating to produce ultrasound?
4. Why is ultrasound sent in short pulses?
5. Define specific acoustic impedance.
6. Calculate Z for a tissue of density 1040 kg m⁻³ in which sound travels at 1570 m s⁻¹.
7. An echo returns 32 μs after the pulse. Sound travels at 1540 m s⁻¹. How deep is the boundary?
8. Explain why a coupling gel is used.
9. Calculate the reflection coefficient between media of Z = 1.34 × 10⁶ and 1.71 × 10⁶ kg m⁻² s⁻¹.
10. Ultrasound passes 5.0 cm into tissue with μ = 23 m⁻¹. What fraction of the intensity remains?
11. Why is it difficult to image organs lying behind bone?
12. Two echoes from the front and back of an organ arrive 32 μs apart. With c = 1540 m s⁻¹, how thick is the organ?

**Answers:** 1. It changes shape (becomes thicker or thinner). 2. An e.m.f. is generated across it. 3. The crystal must expand and contract repeatedly to produce a wave of that frequency. 4. So the crystal can stop and receive echoes, and so the echo time can be measured. 5. The product of the density of a medium and the speed of sound in it, Z = ρc. 6. 1040 × 1570 = 1.63 × 10⁶ kg m⁻² s⁻¹. 7. d = 1540 × 32 × 10⁻⁶ / 2 = 0.025 m. 8. Air between transducer and skin would reflect almost all the ultrasound because their Z values are very different; gel has Z close to skin, so most is transmitted. 9. (0.37)² / (3.05)² = 0.015. 10. e^(−23 × 0.050) = 0.32. 11. A large fraction is reflected at the tissue-bone boundary and much of the rest is absorbed in bone, so little reaches the organ. 12. 2.5 cm (the same calculation as Question 7).

## Related resources

- [Medical Physics revision notes](/resources/a-physics-medical-physics-revision-notes/) — the whole of Topic 24
- [Ultrasound practice questions](/resources/cambridge-a-level-physics-9702-a-production-and-use-of-ultrasound-practice/)
- [X-rays revision notes](/resources/cambridge-a-level-physics-9702-a-production-and-use-of-x-rays-revision-notes/) — subtopic 24.2
