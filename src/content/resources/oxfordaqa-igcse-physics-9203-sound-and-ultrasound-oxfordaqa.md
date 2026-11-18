---
title: "OxfordAQA International GCSE Physics (9203): Sound and ultrasound"
resourceType: "study-guides"
subject: "physics"
level: ["igcse"]
topic: "Waves"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9203"]
syllabusSeries: "For exams May/June 2018 onwards"
order: 3.3
syllabusTopics:
  - qualification: "igcse"
    topic: "waves-oxfordaqa-igcse"
    subtopic: "sound-and-ultrasound-oxfordaqa"
description: "A deeper guide to OxfordAQA IGCSE Physics 3.3.3: sound as a longitudinal wave, pitch and loudness traces, echoes, ultrasound ranging and medical uses."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers **3.3.3 Sound and ultrasound** (statements a to h) of the OxfordAQA International GCSE Physics (9203) specification, for exams May/June 2018 onwards. Statements d to h, on ultrasound, are marked P, so they are assessed in the full Physics award. The [wave properties, sound and ultrasound guide](/resources/oxfordaqa-igcse-physics-wave-properties-sound-and-ultrasound/) introduces each statement; this page goes deeper into comparing oscilloscope traces, the halving step in echo calculations, reading multi-echo traces, and explaining the two medical uses the specification names. Quick recall is in the [Sound and ultrasound revision notes](/resources/oxfordaqa-igcse-physics-9203-sound-and-ultrasound-oxfordaqa-revision-notes/) and exam-style questions are in the [Sound and ultrasound practice questions](/resources/oxfordaqa-igcse-physics-9203-sound-and-ultrasound-oxfordaqa-practice/).

## What the specification asks for

| Statement | Content |
|---|---|
| a | Sound waves are longitudinal and cause vibrations in a medium, detected as sound; human hearing range is about 20 Hz to 20 000 Hz (no ear structure needed) |
| b | Pitch is set by the frequency of the source; loudness is related to amplitude |
| c | Sound waves can be reflected (echoes) and diffracted |
| d | Ultrasound is sound with a frequency above the human hearing range (P) |
| e | Electronic systems can produce ultrasound (P) |
| f | Ultrasound is partially reflected at a boundary between two media; the time for reflections to return can be used to find how far away the boundary is (P) |
| g | s = v × t for the distance between interfaces; use and interpret oscilloscope traces (P) |
| h | Medical uses include prenatal scanning and the removal of kidney stones (P) |

## Sound as a longitudinal wave

A vibrating source, such as a loudspeaker cone, pushes and pulls on the air next to it. This creates a series of **compressions** (air pressed together) and **rarefactions** (air spread out) that travel outwards. The air particles oscillate back and forth along the direction the sound travels; they do not travel with it.

Because sound is vibrations **in a medium**, it needs a material to travel through: a solid, liquid or gas. It cannot cross a vacuum. A ringing bell inside a jar fades to silence as the air is pumped out, even though you can still see the hammer striking it.

### The range of hearing

Humans hear frequencies from about 20 Hz to about 20 000 Hz (20 kHz). Using v = f λ (section 3.3.1) with a speed of 340 m/s in air:

```
lowest:  λ = 340 / 20     = 17 m
highest: λ = 340 / 20 000 = 0.017 m (1.7 cm)
```

Audible sound therefore has wavelengths from centimetres to many metres, comparable to doorways and furniture. That is why sound diffracts noticeably round corners and through open doors (statement c): you can hear someone in the next room without seeing them.

## Pitch, loudness and oscilloscope traces

A microphone connected to an oscilloscope turns sound into a trace. The trace shows a graph of displacement against time, even though sound itself is longitudinal.

| Feature of the trace | Property of the sound |
|---|---|
| More waves across the screen (shorter period) | Higher frequency, so higher pitch |
| Taller waves (greater amplitude) | Louder sound |

To find the frequency from a trace:

1. Measure the horizontal length of one complete wave, in divisions.
2. Multiply by the time-base setting to get the period T.
3. Frequency f = 1 ÷ T.

**Worked example 1: comparing two notes.** The time base is set to 2.0 ms per division.

- Note A: one complete wave covers 2.5 divisions, peak height 3.0 divisions.
- Note B: one complete wave covers 5.0 divisions, peak height 3.0 divisions.

```
note A: T = 2.5 x 2.0 = 5.0 ms = 0.0050 s; f = 1 / 0.0050 = 200 Hz
note B: T = 5.0 x 2.0 = 10 ms = 0.010 s;   f = 1 / 0.010 = 100 Hz
```

Note A has the higher pitch (twice the frequency). The two notes are equally loud, because their amplitudes are the same. If the volume control were turned up for note B only, its trace would become taller but keep the same spacing.

When comparing traces, check that the time-base and vertical settings are the same before comparing spacing or height.

## Echoes

An echo is a reflected sound wave. The time between making a sound and hearing its echo covers the **journey there and back**, so:

```
distance to the reflector = speed x (echo time / 2)
```

The specification's equation is s = v × t. Write which time you are using: the total echo time gives the total path; half of it gives the distance to the reflector.

## Ultrasound (P)

Ultrasound is sound with a frequency above the upper limit of human hearing, above about 20 000 Hz. It is produced by **electronic systems**: an electrical signal at the chosen frequency drives a transducer that vibrates and sends out ultrasound waves. Because the wavelength of ultrasound is short, its beam can be directed narrowly and it shows fine detail.

### Partial reflection at boundaries

When ultrasound meets a boundary between two different media, such as between fat and muscle or between soft tissue and bone, **part** of the wave is reflected and the rest is transmitted onwards. The transmitted part can reflect again at deeper boundaries. A detector therefore receives a series of echoes, one from each boundary, with deeper boundaries giving later echoes.

### Reading an ultrasound trace

**Worked example 2: two boundaries in the body.** An oscilloscope time base is set to 10 μs per division. The transmitted pulse appears at 0. An echo from a fat-muscle boundary appears at 4.0 divisions and an echo from a bone surface at 10.0 divisions. The speed of ultrasound in tissue is 1500 m/s.

```
fat-muscle echo: t = 4.0 x 10 = 40 μs = 4.0 x 10^-5 s
  total path s = v x t = 1500 x 4.0 x 10^-5 = 0.060 m
  depth = 0.060 / 2 = 0.030 m = 3.0 cm

bone echo: t = 10.0 x 10 = 100 μs = 1.0 x 10^-4 s
  total path = 1500 x 1.0 x 10^-4 = 0.15 m
  depth = 0.15 / 2 = 0.075 m = 7.5 cm

thickness of muscle between the boundaries = 7.5 - 3.0 = 4.5 cm
```

The later echo is usually smaller, because some energy has been reflected or absorbed at the first boundary.

**Worked example 3: echo sounding at sea.** A ship sends an ultrasound pulse to the sea bed. The echo returns after 0.80 s. The speed of sound in sea water is 1500 m/s.

```
total path = 1500 x 0.80 = 1200 m
depth = 1200 / 2 = 600 m
```

## Medical uses (P)

**Prenatal scanning.** Pulses of ultrasound are sent into the mother's abdomen. Partial reflections from the boundaries between different tissues of the fetus return at different times; a computer uses the times and strengths of the echoes to build an image. Ultrasound is used instead of X-rays because it is **not ionising**, so it does not damage cells of the developing fetus.

**Removal of kidney stones.** High-energy ultrasound waves are focused on the stone from outside the body. The vibrations break the stone into small pieces, which can then pass out of the body naturally in urine. No surgical cut is needed.

## Common mistakes

- Forgetting to halve the echo time (or the total distance).
- Leaving μs or ms unconverted.
- Saying a louder sound has a higher frequency.
- Saying ultrasound is "not sound". It is sound, at frequencies too high to hear.
- Saying ultrasound is completely reflected at each boundary; it is partially reflected.
- Describing ultrasound scanning as "safe" without saying why (it is non-ionising).

## Exam technique for the command words

- **Describe** how ultrasound measures depth: pulse sent, partial reflection at boundary, echo timed, distance calculated with s = v × t and halved.
- **Compare** two traces: pitch from wave spacing, loudness from height, in comparative sentences.
- **Calculate** from a trace: show the division count, the time-base setting and the conversion.
- **Explain** a medical use: say what the ultrasound does and why it is suitable.

## Next steps

Try the [Sound and ultrasound practice questions](/resources/oxfordaqa-igcse-physics-9203-sound-and-ultrasound-oxfordaqa-practice/), and revisit the [General properties of waves study guide](/resources/oxfordaqa-igcse-physics-9203-general-properties-of-waves/) for wave terms and diffraction.

## Official syllabus

OxfordAQA International GCSE Physics (9203) specification, version 5.2, for exams May/June 2018 onwards. Section 3.3.3 Sound and ultrasound, statements a to h (d to h are P content).
