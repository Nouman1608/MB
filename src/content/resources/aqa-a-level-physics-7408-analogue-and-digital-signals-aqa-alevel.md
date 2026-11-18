---
title: "AQA A-Level Physics (7408): Analogue and digital signals"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Electronics"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 13.2
syllabusTopics:
  - qualification: "a-level"
    topic: "electronics-aqa-alevel"
    subtopic: "analogue-and-digital-signals-aqa-alevel"
description: "Study guide to AQA A-Level Physics 7408 section 3.13.2: sampling, quantisation, bits per sample, data rates, noise, regeneration and pulse code modulation."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into one part of the Electronics option of AQA AS and A-level Physics (7407/7408): section 3.13.2, Analogue and digital signals, which has a single content statement, 3.13.2.1 "Difference between analogue and digital signals". Electronics is A-level only and is one of the five options assessed in Paper 3 Section B. For the whole option in one place, see the [Electronics study guide](/resources/aqa-a-level-physics-electronics/). When you have worked through this page, condense it with the [analogue and digital signals revision notes](/resources/aqa-a-level-physics-7408-analogue-and-digital-signals-aqa-alevel-revision-notes/) and test yourself with the [analogue and digital signals practice questions](/resources/aqa-a-level-physics-7408-analogue-and-digital-signals-aqa-alevel-practice/).

## What the specification asks for

| Content statement | What you should be able to do |
|---|---|
| Bits, bytes | Use the terms; read binary numbers from 1 to 10 |
| Analogue-to-digital conversion | Describe sampling audio for digital transmission, conversion to two voltage levels, quantisation and sampling rate |
| Quality of conversion | Explain how sampling rate and bits per sample affect quality |
| Digital sampling | Give advantages and disadvantages |
| Noise | Describe the effect of noise in communication systems and how original data is recovered from a noisy signal |
| Pulse code modulation | Describe PCM as the way the samples are sent |
| Sensors | Appreciate that many sensors collect analogue data |

The specification states that binary arithmetic is not required and that knowledge of binary numbers 1 to 10 is adequate. Questions therefore test the physics of conversion and noise, not number-base manipulation.

## Analogue and digital: the core distinction

An **analogue signal** is a voltage that varies continuously and can take any value within its range. The output of a microphone, a thermistor or light-dependent resistor in a potential divider, or a photodiode circuit all vary smoothly with the quantity being measured, so these sensors produce analogue data.

A **digital signal** uses only **two voltage levels**, representing 1 and 0. The exact voltage does not matter as long as the receiver can tell which of the two levels was sent. A **bit** is one binary digit; a **byte** is a group of 8 bits.

The binary numbers you need are:

| Decimal | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| 4-bit binary | 0001 | 0010 | 0011 | 0100 | 0101 | 0110 | 0111 | 1000 | 1001 | 1010 |

## Analogue-to-digital conversion step by step

An analogue-to-digital converter (ADC) turns the continuous signal into a stream of numbers in three stages.

1. **Sampling.** The signal voltage is measured at regular, equal time intervals. The **sampling rate** is the number of samples taken per second, in hertz. Between samples, the ADC has no information about the signal.
2. **Quantisation.** Each sample is assigned to one of a fixed set of voltage levels. With **n bits per sample** there are **2ⁿ levels**. The difference between the true sample voltage and the level it is assigned to is the **quantisation error**.
3. **Coding.** Each level number is written as an n-bit binary code. In **pulse code modulation (PCM)** these codes are sent one after another as a train of pulses at the two voltage levels.

The step size between levels is

```
step size (resolution) = input voltage range / 2ⁿ
```

How the sample is assigned depends on the converter. Some round to the nearest level, so the largest quantisation error is half a step; others assign the level at or below the sample, so the error can approach one full step. Exam questions state the rule; always use the rule given.

### Worked example 1: quantising four samples

A 4-bit ADC has an input range of 0 to 4.8 V. Each sample is assigned to the level at or below it, numbered from 0. Four successive samples are 0.70 V, 1.95 V, 3.05 V and 2.40 V. Find the code for each sample and the largest possible quantisation error.

```
levels = 2⁴ = 16           step = 4.8 / 16 = 0.30 V

0.70 / 0.30 = 2.33  → level 2   → 0010
1.95 / 0.30 = 6.5   → level 6   → 0110
3.05 / 0.30 = 10.17 → level 10  → 1010
2.40 / 0.30 = 8.0   → level 8   → 1000

largest error (level at or below) → just under one step, 0.30 V
```

When the receiver converts back, 1.95 V becomes 6 × 0.30 = 1.80 V. That 0.15 V difference is the quantisation error for that sample, and it cannot be recovered.

## What controls the quality of conversion

**Sampling rate.** To reproduce a signal component of frequency f, you must sample at **least twice per cycle**, so the sampling rate must be at least 2f. Sampling more slowly loses the fast changes completely, and a sampled high-frequency wave can be reconstructed as a false, lower frequency. A higher sampling rate captures faster changes, so the reconstructed waveform follows the original more closely.

**Bits per sample.** Each extra bit doubles the number of levels and halves the step size, so the quantisation error halves. A 1-bit converter can only say "high" or "low"; an 8-bit converter has 256 levels.

**The cost of quality.** Both improvements increase the amount of data:

```
data rate (bit s⁻¹) = sampling rate × bits per sample × number of channels
```

A higher data rate needs more storage, a transmission path with more bandwidth, and more time to send over a given link.

### Worked example 2: a stereo audio recording

Music is sampled at 44.1 kHz with 16 bits per sample on each of two channels. Find the data rate, the highest frequency that can be reproduced, and the storage needed for 3.0 minutes, in bytes.

```
data rate = 44 100 × 16 × 2 = 1 411 200 bit s⁻¹ ≈ 1.41 Mbit s⁻¹
highest frequency ≈ 44.1 kHz / 2 = 22.05 kHz
bits in 180 s = 1 411 200 × 180 = 2.54 × 10⁸ bits
bytes = 2.54 × 10⁸ / 8 = 3.18 × 10⁷ bytes (about 32 MB)
```

The highest frequency is just above the upper limit of human hearing (about 20 kHz), which is why a rate of this size suits music. Speech, with little useful content above a few kilohertz, can be sampled far more slowly.

## Noise and how digital data is recovered

**Noise** is random, unwanted variation added to a signal by electrical interference, by thermal motion of charge carriers in components, and along the transmission path. As a signal travels, it is also **attenuated** (weakened), so it must be amplified at intervals.

- In an **analogue** system, an amplifier cannot tell the signal from the noise. It amplifies both, and each stage adds more noise. The noise accumulates and cannot be removed.
- In a **digital** system, the receiver only has to decide whether each pulse was a 1 or a 0. A **regenerator** uses a comparator with a threshold voltage between the two levels: anything above the threshold becomes a clean 1, anything below becomes a clean 0. The original pulse train is recovered exactly, and regenerators along a long link stop noise from building up.

Regeneration fails only when noise is large enough to push a pulse across the threshold, producing a **bit error**.

### Worked example 3: when does regeneration fail?

A link uses 0 V for 0 and 5.0 V for 1. The regenerator threshold is 2.5 V. Explain the effect of noise with peak value (a) 1.2 V and (b) 3.0 V.

```
(a) a 0 can rise to at most 1.2 V; a 1 can fall to at least 3.8 V
    neither crosses 2.5 V → every pulse is regenerated correctly
(b) a 0 can rise to 3.0 V and a 1 can fall to 2.0 V
    both cross 2.5 V → some pulses are misread → bit errors
```

The margin between each level and the threshold (2.5 V here) is the largest noise the link can tolerate without errors.

## Advantages and disadvantages of digital sampling

| Advantages | Disadvantages |
|---|---|
| Original data can be regenerated exactly from a noisy signal | Quantisation error is introduced and cannot be removed |
| Noise does not accumulate along a long link with regenerators | Information between samples is lost |
| Easy to store, copy, process and encrypt without loss | Needs a higher bandwidth than the analogue signal it carries |
| Several signals can share one link by time-division multiplexing | Needs ADC and DAC stages, adding complexity |

## Common mistakes

- Writing 2n levels instead of 2ⁿ: 8 bits give 256 levels, not 16.
- Dividing the range by 2ⁿ − 1. Questions on this specification use range / 2ⁿ unless they say otherwise.
- Claiming digital signals are "not affected by noise". They are; the credit is for explaining regeneration with a threshold.
- Forgetting the number of channels, or the factor of 8 between bits and bytes, in data-rate questions.
- Saying a higher sampling rate reduces quantisation error. It does not: sampling rate controls the time detail, bits per sample control the voltage detail.

## Exam technique

- **State** questions (the number of levels, the highest frequency reproduced) need a value or phrase, not an explanation.
- **Calculate** questions need the equation, the substitution and a unit; data rates are in bit s⁻¹.
- **Explain** questions on noise need a chain: noise is added, an analogue amplifier amplifies it, a digital regenerator compares each pulse with a threshold and restores clean levels.
- **Discuss** or **compare** questions on choosing a sampling rate or bit depth reward a trade-off: better quality against a higher data rate, storage and bandwidth.

## Next steps

Condense this page with the [analogue and digital signals revision notes](/resources/aqa-a-level-physics-7408-analogue-and-digital-signals-aqa-alevel-revision-notes/), then try the [analogue and digital signals practice questions](/resources/aqa-a-level-physics-7408-analogue-and-digital-signals-aqa-alevel-practice/). Pulse code modulation and multiplexing are used again in [data communication systems](/resources/aqa-a-level-physics-7408-data-communication-systems-aqa-alevel/), and the comparator used in regeneration is explained in [analogue signal processing](/resources/aqa-a-level-physics-7408-analogue-signal-processing-aqa-alevel/).

## Official syllabus

AQA AS and A-level Physics (7407/7408) specification, AS and A-level exams June 2016 onwards, published by AQA. Section 3.13.2 Analogue and digital signals (A-level only), within section 3.13 Electronics.
