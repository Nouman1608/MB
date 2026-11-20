---
title: "OxfordAQA A-Level Computer Science (9645): Representing sound -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Representing Sound Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 5 – Representing data"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 5.6
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "representing-data"
  - qualification: "a-level"
    topic: "representing-data"
    subtopic: "representing-sound-oxfordaqa-alevel-cs"
description: "Recall notes for OxfordAQA 9645 sub-topic 3.5.6: analogue and digital, ADC and DAC, sampling, the file size formula, Nyquist's theorem and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.5.6 Representing sound** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (AS content in topic 3.5 Representing data). For worked examples, see the [representing sound study guide](/resources/oxfordaqa-a-level-computer-science-9645-representing-sound/); then practise with the [representing sound practice questions](/resources/oxfordaqa-a-level-computer-science-9645-representing-sound-practice/).

## What the specification requires

| Ref | Requirement |
|---|---|
| 3.5.6.1 | Difference between analogue and digital quantities; principles of an **ADC** and a **DAC**; use of an ADC in recording and a DAC in playback |
| 3.5.6.2 | Digital sound in terms of **sample resolution** and **sampling rate**; calculate file size with **file size (bits) = rate (Hz) × res × secs**; describe **Nyquist's theorem** and use it to find the minimum sampling rate |

## Key terms

| Term | Meaning |
|---|---|
| Analogue | Varies continuously; any value within a range |
| Digital | Takes discrete values, stored as binary |
| ADC | Analogue to digital converter: samples a signal and outputs binary numbers |
| DAC | Digital to analogue converter: turns binary numbers into an analogue signal |
| Sampling rate | Samples taken per second, in hertz (1 Hz = 1 sample per second) |
| Sample resolution | Number of bits used for one sample |
| Nyquist's theorem | The sampling rate must be at least twice the highest frequency in the sound |

## ADC and DAC

| | ADC | DAC |
|---|---|---|
| Input | Analogue signal | Binary numbers |
| Output | Binary numbers | Analogue signal |
| Method | Measure the amplitude at regular intervals and round to the nearest level | Produce a voltage for each number and smooth between them |
| Used for | Recording (microphone to file) | Playback (file to speaker) |

## Quality and size

- A higher **sampling rate** follows the wave more closely.
- A higher **resolution** measures amplitude more precisely (2^res levels).
- Both increase the file size.

| Resolution (bits) | Levels |
|---|---|
| 4 | 16 |
| 8 | 256 |
| 16 | 65,536 |
| 24 | 16,777,216 |

## File size formula

**bits = rate × res × secs**, then ÷ 8 for bytes.

Recomputed:

| Rate (Hz) | Res (bits) | Secs | Bits | Bytes |
|---|---|---|---|---|
| 44,100 | 16 | 10 | 7,056,000 | 882,000 |
| 8,000 | 8 | 30 | 1,920,000 | 240,000 |
| 44,100 | 16 | 180 | 127,008,000 | 15,876,000 |
| 16,000 | 16 | 45 | 11,520,000 | 1,440,000 |
| 8,000 | 12 | 10 | 960,000 | 120,000 |
| 32,000 | 8 | 90 | 23,040,000 | 2,880,000 |

- Half the rate gives half the size.
- Half the resolution gives half the size.
- Double the duration gives double the size.

**Working backwards.** A file of 480,000 bytes at 8,000 Hz and 12-bit resolution lasts (480,000 × 8) ÷ (8,000 × 12) = 3,840,000 ÷ 96,000 = **40 seconds**.

## Nyquist's theorem

**minimum sampling rate = 2 × highest frequency**

| Highest frequency (Hz) | Minimum rate (Hz) |
|---|---|
| 18,000 | 36,000 |
| 12,000 | 24,000 |
| 2,500 | 5,000 |
| 20,000 | 40,000 |

If the rate is too low, high frequencies are not captured and the playback sounds wrong (high frequencies appear as lower ones). A rate above the minimum gives a bigger file with no extra range of frequencies.

Minimum file size for a 15,000 Hz sound, 16-bit, 60 s: rate 30,000 Hz, so 30,000 × 16 × 60 = 28,800,000 bits = 3,600,000 bytes.

## Recording and playback chain

1. Microphone makes an analogue signal.
2. ADC samples it at the sampling rate with the set resolution.
3. The numbers are stored.
4. DAC converts the numbers back to an analogue signal.
5. Amplifier and speaker produce sound.

## Quality and file size trade-offs

| Change | Effect on quality | Effect on file size |
|---|---|---|
| Raise the sampling rate | Follows the wave more closely; captures higher frequencies | Larger |
| Raise the resolution | Amplitude measured more precisely | Larger |
| Lower the sampling rate below the Nyquist minimum | High frequencies lost or distorted | Smaller |
| Lower the resolution | Coarser amplitude steps, more audible noise | Smaller |

Recomputed: 16,000 Hz, 8 bits and 45 seconds give 16,000 × 8 × 45 = 5,760,000 bits = 720,000 bytes. A 30-second clip at 44,100 Hz and 16 bits is 44,100 × 16 × 30 / 8 = 2,646,000 bytes.

A common exam sequence is: state the formula, substitute, divide by 8 for bytes, then convert to the unit asked for. Write each step on its own line.

## Exam traps

- **Rate versus resolution.** Rate is samples per second; resolution is bits per sample.
- **Bits to bytes.** Divide by 8.
- **Duration in seconds.** Convert minutes to seconds.
- **Nyquist uses the highest frequency,** not the sampling rate.
- **Doubling, not adding.** The minimum rate is twice the frequency.
- **ADC for recording, DAC for playback.**
- **Higher resolution is not higher pitch.** It means finer amplitude steps.

## Quick self-test

1. What is the difference between an analogue and a digital quantity?
2. What does an ADC do?
3. Where is a DAC used?
4. Define sampling rate.
5. Define sample resolution.
6. State the file size formula.
7. Calculate the size in bytes of 20 seconds at 11,025 Hz and 8 bits.
8. State Nyquist's theorem.
9. A sound has a highest frequency of 12,000 Hz. State the minimum sampling rate.
10. What happens if the sampling rate is too low?
11. What is the effect on file size of halving the sample resolution?
12. How many levels does a 12-bit sample have?

### Answers

1. Analogue varies continuously; digital has discrete values.
2. It converts a continuous signal into binary numbers by sampling and rounding.
3. In playback, to turn stored numbers into an analogue signal for the speaker.
4. The number of samples taken per second, in hertz.
5. The number of bits used to represent one sample.
6. File size (bits) = rate (Hz) × res × secs.
7. 11,025 × 8 × 20 = 1,764,000 bits = 220,500 bytes.
8. The sampling rate must be at least twice the highest frequency in the sound.
9. 24,000 Hz.
10. High frequencies are lost or misrepresented, so the sound does not match the original.
11. It halves it.
12. 4,096.

## Next steps

- [Representing sound study guide](/resources/oxfordaqa-a-level-computer-science-9645-representing-sound/)
- [Representing sound practice questions](/resources/oxfordaqa-a-level-computer-science-9645-representing-sound-practice/)
- [Representing graphics revision notes](/resources/oxfordaqa-a-level-computer-science-9645-representing-graphics-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.5.6 Representing sound.
