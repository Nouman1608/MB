---
title: "AQA A-Level Physics (7408): Analogue and digital signals -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for AQA A-Level Physics 7408 section 3.13.2: ADC steps, levels and step size, data rates, noise and regeneration, with a 12-question self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense section 3.13.2, Analogue and digital signals (content statement 3.13.2.1), of the AQA AS and A-level Physics specification (7407/7408). It is part of the A-level only Electronics option, assessed in Paper 3 Section B. For full explanations and worked examples, read the [analogue and digital signals study guide](/resources/aqa-a-level-physics-7408-analogue-and-digital-signals-aqa-alevel/); then test yourself with the [analogue and digital signals practice questions](/resources/aqa-a-level-physics-7408-analogue-and-digital-signals-aqa-alevel-practice/). The whole option is summarised in the [Electronics revision notes](/resources/aqa-a-level-physics-electronics-revision-notes/).

## Key equations

| Quantity | Relationship |
|---|---|
| Number of quantisation levels | 2ⁿ for n bits per sample |
| Step size (resolution) | input range / 2ⁿ |
| Highest frequency reproduced | about sampling rate / 2 |
| Minimum sampling rate | 2 × highest signal frequency |
| Data rate | sampling rate × bits per sample × channels |
| Storage in bytes | total bits / 8 |

Binary arithmetic is not required; you only need binary numbers 1 to 10 (0001 to 1010).

## Key terms

| Term | Meaning |
|---|---|
| Analogue signal | A voltage that varies continuously and can take any value in a range |
| Digital signal | A signal that uses only two voltage levels, for 1 and 0 |
| Bit | One binary digit, 0 or 1 |
| Byte | A group of 8 bits |
| Sampling | Measuring the signal voltage at regular time intervals |
| Sampling rate | Number of samples per second (Hz) |
| Quantisation | Assigning each sample to one of 2ⁿ fixed levels |
| Quantisation error | Difference between a sample's true value and its assigned level |
| Bits per sample | Length of the binary code for each sample; sets the number of levels |
| Pulse code modulation (PCM) | Sending each sample as an n-bit binary code of pulses |
| Noise | Random unwanted voltage added to a signal |
| Attenuation | Loss of signal strength along the transmission path |
| Regenerator | Circuit that compares each pulse with a threshold and outputs a clean 1 or 0 |
| Bit error | A 1 read as 0, or a 0 read as 1, because noise crossed the threshold |

## Condensed recall

**Three stages of conversion.** Sample at regular intervals; quantise each sample to a level; code each level as binary and send by PCM.

**Two quality controls.**
- Sampling rate controls detail **in time**. Too low a rate misses fast changes and can make a high frequency appear as a false lower one.
- Bits per sample control detail **in voltage**. One extra bit doubles the levels and halves the step size.

**The price.** Both raise the data rate, so more storage and more bandwidth are needed.

**Rounding rule.** Round to nearest: largest error is half a step. Level at or below: error can approach one step. Use the rule the question gives.

**Sensors give analogue data.** Microphones, thermistors and light-dependent resistors in potential dividers, and photodiodes all produce smoothly varying voltages that need an ADC.

**Noise.**
- Analogue: amplifiers boost signal and noise together; noise accumulates stage by stage.
- Digital: a regenerator compares each pulse with a threshold set between the two levels and restores the original pulse train exactly, unless noise crosses the threshold.
- Noise margin = gap between a level and the threshold.

**Advantages of digital sampling:** exact regeneration; no build-up of noise; easy storage, copying, processing and encryption; signals can be multiplexed.

**Disadvantages:** quantisation error; loss of information between samples; more bandwidth needed; extra conversion stages.

## Quick-check numbers

| ADC | Levels | Step size |
|---|---|---|
| 3-bit, 0 to 4.0 V | 8 | 0.50 V |
| 4-bit, 0 to 4.8 V | 16 | 0.30 V |
| 8-bit, 0 to 5.12 V | 256 | 0.020 V |
| 10-bit, 0 to 10.24 V | 1024 | 0.010 V |

Telephone speech: 8.0 kHz × 8 bits = 64 kbit s⁻¹ per channel, reproducing up to about 4 kHz.

## Exam traps

- 2n instead of 2ⁿ: 8 bits give 256 levels, not 16.
- Dividing by 2ⁿ − 1 when the question expects range / 2ⁿ.
- Writing "digital signals are immune to noise". Describe regeneration with a threshold instead.
- Leaving out the number of channels, or forgetting to divide by 8 for bytes.
- Confusing the two quality controls: a faster sampling rate does not reduce quantisation error.
- Rounding a level up when the question says "the level at or below".
- Quoting the maximum frequency as equal to the sampling rate rather than half of it.

## Self-test

1. State the difference between an analogue and a digital signal.
2. How many bits are in a byte?
3. Write the decimal number 9 as a 4-bit binary code.
4. A 6-bit ADC has an input range of 0 to 3.2 V. Calculate the number of levels and the step size.
5. State the minimum sampling rate needed to reproduce a 7.5 kHz tone.
6. A signal is sampled at 16 kHz with 12 bits per sample on one channel. Calculate the data rate.
7. Explain why adding one bit per sample improves the quality of conversion.
8. Give one disadvantage of increasing the sampling rate.
9. What does a regenerator do to a received pulse?
10. A link uses 0 V and 3.3 V with a threshold of 1.65 V. What is the largest noise peak it can tolerate without bit errors?
11. Name the method in which each sample is sent as a binary code of pulses.
12. Give two sensors that produce analogue data.

### Answers

1. An analogue signal varies continuously and can take any value in its range; a digital signal has only two voltage levels, representing 1 and 0.
2. 8.
3. 1001.
4. 2⁶ = 64 levels; step = 3.2 / 64 = 0.050 V.
5. 2 × 7.5 = 15 kHz.
6. 16 000 × 12 = 192 000 bit s⁻¹ (192 kbit s⁻¹).
7. It doubles the number of levels, halving the step size, so the quantisation error is halved and the digital values follow the original voltage more closely.
8. Any one: more data per second, so more storage is needed; more bandwidth is needed to transmit it; transmission over a given link takes longer.
9. It compares the pulse with a threshold and outputs a clean 1 if the pulse is above it, or a clean 0 if below, removing the noise.
10. Just under 1.65 V, the gap between each level and the threshold.
11. Pulse code modulation (PCM).
12. Any two: microphone; thermistor in a potential divider; light-dependent resistor in a potential divider; photodiode.

## Official syllabus

AQA AS and A-level Physics (7407/7408) specification, AS and A-level exams June 2016 onwards, published by AQA. Section 3.13.2 Analogue and digital signals (A-level only), within section 3.13 Electronics.
