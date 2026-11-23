---
title: "AQA A-Level Physics (7408): Analogue and digital signals -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original practice questions with mark-scheme answers on AQA A-Level Physics 7408 section 3.13.2: quantisation, sampling, data rates, noise and regeneration."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover section 3.13.2, Analogue and digital signals, of the AQA AS and A-level Physics specification (7407/7408), part of the A-level only Electronics option assessed in Paper 3 Section B. Learn the content first with the [analogue and digital signals study guide](/resources/aqa-a-level-physics-7408-analogue-and-digital-signals/) and the [analogue and digital signals revision notes](/resources/aqa-a-level-physics-7408-analogue-and-digital-signals-revision-notes/). Unless a question says otherwise, the step size of an ADC is its input range divided by 2ⁿ.

## Questions

### Section A: short questions

**1.** **(a)** State what is meant by a bit and by a byte. **[2]**
**(b)** Write the decimal number 7 as a 4-bit binary code. **[1]**

**2.** Explain why the output of a microphone must pass through an analogue-to-digital converter before it can be sent by pulse code modulation. **[2]**

**3.** A 5-bit ADC has an input range of 0 to 6.4 V. Each sample is rounded to the nearest level, numbered from 0.

**(a)** Calculate the number of levels and the step size. **[2]**
**(b)** An input of 1.85 V is sampled. State its level number and write it as a 5-bit code. **[2]**
**(c)** State the largest possible quantisation error for this ADC. **[1]**

**4.** A signal contains frequencies up to 12 kHz. State the minimum sampling rate needed to reproduce it. **[1]**

**5.** Explain why amplifying an analogue signal at intervals along a long cable makes the received signal noisier. **[2]**

**6.** Explain the difference between the effect of increasing the sampling rate and the effect of increasing the number of bits per sample. **[2]**

### Section B: structured questions

**7.** A heart monitor records three channels. The useful part of each signal contains frequencies up to 150 Hz. Each channel is sampled at 500 Hz with 10 bits per sample.

**(a)** Show that the sampling rate is high enough. **[1]**
**(b)** Calculate the total data rate. **[1]**
**(c)** Calculate the storage needed for 24 hours of recording, in bytes. **[2]**
**(d)** Suggest one reason for not increasing the number of bits per sample to 16. **[1]**

**8.** A digital link uses 0 V for 0 and 5.0 V for 1. A regenerator at the receiving end has a threshold of 2.5 V. Five successive pulses arrive with voltages 0.9 V, 4.1 V, 2.9 V, 1.8 V and 3.6 V.

**(a)** State the bit sequence the regenerator outputs. **[2]**
**(b)** The transmitter sent 0 1 0 0 1. Identify the bit error and explain how it arose. **[2]**
**(c)** Suggest two ways of reducing the number of bit errors on a long link. **[2]**

**9.** A 3-bit ADC has an input range of 0 to 8.0 V. Each sample is assigned to the level at or below it, numbered from 0. Four samples are 2.3 V, 5.9 V, 7.6 V and 4.0 V.

**(a)** Calculate the step size. **[1]**
**(b)** Write the 3-bit code for each sample. **[2]**
**(c)** The receiver converts each code back to level number × step size. Identify the sample with the largest quantisation error and state its value. **[1]**
**(d)** Calculate the smallest number of bits per sample that gives a step size of 0.25 V or less over the same range. **[2]**

**10.** A telephone channel is sampled at 8.0 kHz with 8 bits per sample. A studio recording uses two channels, each sampled at 48 kHz with 24 bits per sample.

**(a)** Calculate how many times greater the studio data rate is than the telephone data rate. **[2]**
**(b)** Explain why the telephone settings are acceptable for speech but not for music. **[2]**

**11.** A museum plans to convert old analogue tape recordings into digital files. Discuss the advantages and disadvantages of storing and distributing the recordings in digital form. **[6]**

**12.** A 5.0 kHz tone is sampled at 6.0 kHz.

**(a)** Explain why the reconstructed signal will not reproduce the tone. **[2]**
**(b)** State the minimum sampling rate that would allow the tone to be reproduced. **[1]**

## Answers

**1. (a)** A bit is one binary digit, 0 or 1 [1]; a byte is a group of 8 bits [1].
**(b)** 0111 [1] **[3]**
*Examiner insight:* "A byte is 8 digits" is accepted only if the digits are binary; say "8 bits" to be safe.

**2.** The microphone gives an analogue voltage that varies continuously [1]. PCM sends binary codes at two voltage levels, so the voltage must first be sampled and quantised into numbers [1]. **[2]**
*Examiner insight:* Name both sides of the contrast: continuous input, two-level output.

**3. (a)** 2⁵ = 32 levels [1]; step = 6.4/32 = 0.20 V [1]
**(b)** 1.85/0.20 = 9.25, nearest level 9 [1]; code 01001 [1]
**(c)** Half a step, 0.10 V [1] **[5]**
*Examiner insight:* With "nearest level" the maximum error is half a step; with "level at or below" it approaches a full step. Read the rule before answering (c).

**4.** 2 × 12 = 24 kHz [1] **[1]**
*Examiner insight:* Quoting 12 kHz, the signal frequency itself, is the most common wrong answer.

**5.** Noise is added to the signal along the cable [1]. Each amplifier cannot separate noise from signal, so it amplifies both, and the noise added at each stage accumulates [1]. **[2]**
*Examiner insight:* "Noise is amplified" alone earns one mark; the second needs the idea of accumulation along the link.

**6.** A higher sampling rate takes samples closer together in time, so faster changes (higher frequencies) are captured [1]. More bits per sample give more, smaller voltage levels, so the quantisation error is smaller [1]. **[2]**
*Examiner insight:* Keep the two separate: time detail versus voltage detail.

**7. (a)** 2 × 150 = 300 Hz is needed, and 500 Hz is greater than this [1]
**(b)** 500 × 10 × 3 = 15 000 bit s⁻¹ [1]
**(c)** 15 000 × 24 × 3600 = 1.30 × 10⁹ bits [1]; ÷ 8 = 1.62 × 10⁸ bytes [1]
**(d)** Any one of: data rate and storage rise by 60%; the extra resolution is finer than the measurement needs; transmission takes longer [1] **[5]**
*Examiner insight:* In (c), leaving the answer in bits when bytes are asked for loses the final mark.

**8. (a)** 0, 1, 1, 0, 1 [2] (one mark for four correct)
**(b)** The third pulse was sent as 0 but read as 1 [1]; noise raised its voltage from 0 V to 2.9 V, above the 2.5 V threshold [1]
**(c)** Any two of: place regenerators closer together, so less noise and attenuation build up before each one; increase the voltage difference between the two levels, widening the noise margin; use a medium with less interference, such as optic fibre [2] **[6]**
*Examiner insight:* An answer to (c) that says "amplify the signal more" scores nothing: amplification boosts the noise too.

**9. (a)** 8.0/2³ = 1.0 V [1]
**(b)** Levels 2, 5, 7 and 4 [1]; codes 010, 101, 111, 100 [1]
**(c)** 5.9 V, reconstructed as 5.0 V, error 0.9 V [1]
**(d)** 8.0/2ⁿ ≤ 0.25 gives 2ⁿ ≥ 32 [1], so n = 5 bits [1] **[6]**
*Examiner insight:* 7.6 V becomes 111 (level 7), not "level 8": with 3 bits the highest level is 7.

**10. (a)** Telephone: 8000 × 8 = 64 000 bit s⁻¹; studio: 48 000 × 24 × 2 = 2 304 000 bit s⁻¹ [1]; ratio = 36 [1]
**(b)** Sampling at 8.0 kHz reproduces frequencies up to about 4 kHz, which carries enough of speech to be understood [1]. Music contains frequencies up to about 20 kHz, and 8 bits gives a coarse step size, so detail and quiet passages would be lost [1]. **[4]**
*Examiner insight:* Link each setting to its effect: sampling rate to frequency range, bit depth to resolution.

**11.** Marked by points here for self-checking; in the exam a discussion may be marked by levels. A strong answer covers:
- Once digital, copies are exact, so quality does not fall with each copy, unlike copying tape [1].
- Files can be sent over noisy links and regenerated without adding noise, and can be stored, indexed and backed up easily [1].
- Hiss already on the tapes is copied into the file; digitising does not remove existing noise [1].
- Quantisation error is introduced, so a low bit depth adds audible distortion [1].
- Detail above half the sampling rate is lost, and high rates and bit depths give large files needing more storage and bandwidth [1].
- A justified conclusion, for example that digital storage is better provided the sampling rate and bit depth are high enough for the recordings [1].

**[6]**
*Examiner insight:* A balanced answer that names the trade-off between quality and file size scores higher than a list of advantages only.

**12. (a)** Fewer than two samples are taken per cycle of the tone [1], so the samples do not capture each oscillation and the reconstructed waveform has a different, lower frequency [1].
**(b)** 2 × 5.0 = 10 kHz [1] **[3]**
*Examiner insight:* A sketch of the tone with the sample points marked is valid supporting evidence for (a).

## Where marks are usually lost

- Using 2n instead of 2ⁿ for the number of levels.
- Forgetting that the highest level with n bits is 2ⁿ − 1 when numbering from 0.
- Ignoring the stated rounding rule.
- Leaving data in bits when bytes are asked for.
- Saying digital signals are unaffected by noise.
- Suggesting more amplification as a cure for noise.
- Mixing up the effects of sampling rate and bits per sample.

## Next steps

- Recap with the [analogue and digital signals revision notes](/resources/aqa-a-level-physics-7408-analogue-and-digital-signals-revision-notes/).
- Re-read the [analogue and digital signals study guide](/resources/aqa-a-level-physics-7408-analogue-and-digital-signals/).
- Try questions across the whole option in the [Electronics practice questions](/resources/aqa-a-level-physics-electronics-practice/).

## Official syllabus

AQA AS and A-level Physics (7407/7408) specification, AS and A-level exams June 2016 onwards, published by AQA. Section 3.13.2 Analogue and digital signals (A-level only), within section 3.13 Electronics.
