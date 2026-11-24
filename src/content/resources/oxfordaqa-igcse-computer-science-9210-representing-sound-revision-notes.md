---
title: "OxfordAQA IGCSE Computer Science (9210): Representing sound -- Revision Notes"
seoTitle: "OxfordAQA IGCSE CS 9210 Representing Sound Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 3: Data representation"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 3.07
syllabusTopics:
  - qualification: "igcse"
    topic: "data-representation-9210"
  - qualification: "igcse"
    topic: "data-representation-9210"
    subtopic: "representing-sound-9210"
description: "Revision notes for OxfordAQA IGCSE Computer Science 9210 section 3.3.7: analogue and digital sound, sampling rate, sample resolution, file size calculations and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

Condensed notes for section **3.3.7 Representing sound** of OxfordAQA International GCSE Computer Science (9210).
Worked examples are in the [Representing sound study
guide](/resources/oxfordaqa-igcse-computer-science-9210-representing-sound/).

## What the specification asks

- Understand that sound is **analogue** and must be converted to **digital** for storage and processing.
- Understand that sound waves are **sampled**; a sample is a measure of **amplitude at a point in time**.
- Describe digital sound using **sampling rate** and **sample resolution**.
- **Calculate sound file sizes** from the sampling rate and the sample resolution.

## Key terms

| Term | Meaning |
|---|---|
| Analogue | Continuous; can take any value in a range (a sound wave) |
| Digital | Stored as discrete values in binary |
| Amplitude | The height of the wave; how loud the sound is |
| Sample | A measure of the amplitude at one point in time |
| Sampling rate | The number of samples taken each second, in hertz (1 Hz = 1 sample per second) |
| Sample resolution | The number of bits used for each sample |

## How sound is made digital

1. Measure the amplitude of the wave at regular, short intervals (sampling).
2. Round each measurement to the nearest storable level.
3. Store each measurement as a binary number.
4. Play back by turning the numbers into a changing signal for the speaker.

Example: 4 samples a second, 3 bits each. Amplitudes 3, 6, 7, 4, 1, 0, 2, 5 are stored as 011 110 111 100 001 000
010 101, which is 8 × 3 = 24 bits.

## Effect of the settings

| Setting | Quality | File size |
|---|---|---|
| Higher sampling rate | Closer to the original wave | Larger |
| Lower sampling rate | Detail lost | Smaller |
| Higher sample resolution | More precise amplitude | Larger |
| Lower sample resolution | Less precise amplitude | Smaller |

Levels of amplitude for a resolution of n bits: 2 to the power n. For example, 3 bits give 8 levels, 8 bits give 256
levels and 16 bits give 65,536 levels.

Rates in common use: 8,000 Hz for telephone speech; 44,100 Hz for CD music.

## File size formula

**File size (bits) = rate (Hz) × res × secs**

Divide by 8 for bytes. Use seconds, not minutes. The formula has no channel term.

| Recording | Bits | Bytes |
|---|---|---|
| 10 s, 44,100 Hz, 16-bit | 7,056,000 | 882,000 (0.882 MB) |
| 60 s, 8,000 Hz, 8-bit | 3,840,000 | 480,000 (480 kB) |
| 180 s, 44,100 Hz, 16-bit | 127,008,000 | 15,876,000 (15.876 MB) |
| 30 s, 22,050 Hz, 8-bit | 5,292,000 | 661,500 |
| 5 s, 16,000 Hz, 16-bit | 1,280,000 | 160,000 |

Doubling the rate, the resolution or the time doubles the file size. Doubling two of them quadruples it.

## Method for a calculation

1. List the rate, resolution and time.
2. Change minutes to seconds.
3. Multiply the three values for the size in bits.
4. Divide by 8 for bytes.
5. Convert to kB or MB by dividing by 1,000 for each step.
6. Add the unit.

## Quality and size trade-off

- Speech over a telephone: low rate and resolution is enough, and the file is small.
- Music: high rate and resolution give better quality, but the file is large.
- Longer recordings give larger files.

## Worked example in full

**A 2 minute recording is made at 22,050 Hz with a sample resolution of 8 bits. Calculate the file size in kilobytes.**

1. Convert the length to seconds: 2 × 60 = 120 s.
2. Bits = 22,050 × 8 × 120 = 21,168,000 bits.
3. Bytes = 21,168,000 ÷ 8 = 2,646,000 bytes.
4. Kilobytes = 2,646,000 ÷ 1,000 = **2,646 kB**.

## Describing sampling in an answer

A full-mark description has three points: the amplitude of the wave is measured at regular intervals; each
measurement (sample) is stored as a binary number; and the number of measurements per second is the sampling rate.

## Model answer

**Explain how an analogue sound is stored as a digital file. [4 marks]** The amplitude of the sound wave is measured at
regular intervals (sampled). Each measurement is rounded to the nearest level that can be stored, and written as a binary
number using the sample resolution. The number of samples taken each second is the sampling rate. The list of binary numbers
is the digital recording.

## Exam traps

- **Minutes used instead of seconds.**
- **No division by 8** for bytes.
- **Rate and resolution confused.** Rate is how often; resolution is bits per sample.
- **Resolution described as "quality".** It is the number of bits per sample.
- **"Digital sound is identical to the original."** It is an approximation.
- **"Sound is digital."** Sound is analogue.
- **Amplitude and frequency confused.** Amplitude is loudness; frequency is pitch.
- **No unit** in the answer.

## Self-test

1. State why a sound must be converted to a digital form for a computer.
2. State what a sample is.
3. State the unit of the sampling rate and what 1 unit means.
4. State the number of amplitude levels that can be stored with 4 bits.
5. Calculate the file size in bits for 5 seconds at 1,000 Hz with 4 bits per sample.
6. Calculate the file size in bytes for 12 seconds at 5,000 Hz with 8 bits per sample.
7. State the effect on file size of doubling the sampling rate.
8. State one effect on sound quality of increasing the sample resolution.
9. A clip lasts 2 minutes. State how many seconds to use in the formula.
10. Explain the difference between sampling rate and sample resolution.

**Answers:**
1. A computer can only store and process binary data, and sound is an analogue wave.
2. A measure of the amplitude of the sound wave at a point in time.
3. Hertz (Hz); 1 Hz is 1 sample per second.
4. 16 (2 to the power 4).
5. 20,000 bits (1,000 × 4 × 5).
6. 60,000 bytes (5,000 × 8 × 12 = 480,000 bits; divide by 8).
7. The file size doubles.
8. The amplitude is stored more precisely, so the sound is closer to the original.
9. 120 seconds.
10. Sampling rate is how many samples are taken each second; sample resolution is how many bits are used to store each sample.

## More resources on this topic

- [Representing sound study guide](/resources/oxfordaqa-igcse-computer-science-9210-representing-sound/)
- [Representing sound practice questions](/resources/oxfordaqa-igcse-computer-science-9210-representing-sound-practice/)
- [Data compression revision notes](/resources/oxfordaqa-igcse-computer-science-9210-data-compression-revision-notes/)
