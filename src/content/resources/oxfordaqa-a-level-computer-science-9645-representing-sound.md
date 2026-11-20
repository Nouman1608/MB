---
title: "OxfordAQA A-Level Computer Science (9645): Representing sound"
seoTitle: "OxfordAQA A-Level CS 9645 Representing Sound Guide"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.5.6 in depth: analogue and digital, ADC and DAC, sampling rate, sample resolution, file size and Nyquist's theorem."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.5.6 Representing sound** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.5 Representing data (AS). It has two parts: **analogue and digital** (3.5.6.1) and **digital representation of sound and Nyquist's theorem** (3.5.6.2). You must understand the difference between analogue and digital quantities, describe an **analogue to digital converter (ADC)** and a **digital to analogue converter (DAC)** and their use in recording and playback; describe digital sound in terms of **sample resolution** and **sampling rate**; **calculate sound sample sizes** using the specification's formula; and describe **Nyquist's theorem** and use it to find a minimum sampling rate.

For quick recall use the [representing sound revision notes](/resources/oxfordaqa-a-level-computer-science-9645-representing-sound-revision-notes/), then try the [representing sound practice questions](/resources/oxfordaqa-a-level-computer-science-9645-representing-sound-practice/). The topic-level [representing data study guide](/resources/oxfordaqa-a-level-computer-science-representing-data/) covers all of section 3.5. Every figure below was recomputed with a script.

## Analogue and digital quantities

An **analogue** quantity varies **continuously**. It can take any value within a range, with no gaps. Sound is analogue: air pressure rises and falls smoothly as a sound wave passes. The voltage from a microphone is also analogue.

A **digital** quantity takes only **separate (discrete) values**, which a computer represents as binary numbers. A computer can store only a finite number of bits, so it cannot store a continuous wave exactly. It must convert the wave into a series of numbers.

| | Analogue | Digital |
|---|---|---|
| Values | Continuous: any value in a range | Discrete: a limited set of values |
| Example | Air pressure, microphone voltage | Binary numbers in a sound file |
| Stored in a computer? | Not directly | Yes |

## Analogue to digital converter (ADC)

An **ADC** converts a continuous analogue signal into digital values. It works by **measuring (sampling) the signal's amplitude at regular intervals** and **rounding each measurement to the nearest value** it can represent, giving a binary number. The result is a sequence of binary numbers, one per sample.

**Use in recording:** a microphone turns sound into an analogue electrical signal. The ADC samples it thousands of times per second, producing numbers that are stored as a digital audio file.

## Digital to analogue converter (DAC)

A **DAC** does the reverse. It takes the sequence of binary numbers and produces an **analogue signal** whose voltage follows those numbers, **smoothing** the steps into a continuous wave.

**Use in playback:** the numbers in the audio file go to the DAC. The analogue signal it produces is amplified and sent to a speaker or headphones, whose moving parts recreate the sound waves.

## Sampling

### Sampling rate

The **sampling rate** is the **number of samples taken in a second**, usually measured in **hertz (Hz)**. In the context of sampling, 1 hertz is 1 sample per second. A rate of 44,100 Hz takes 44,100 samples every second. A higher sampling rate follows the wave more closely, giving better quality but more data.

### Sample resolution

The **sample resolution** is the **number of bits used to represent one sample**. With a resolution of *r* bits, each sample can be one of 2^r levels. Higher resolution measures amplitude more precisely, so the sound is closer to the original, and the file is larger.

| Resolution (bits) | Levels |
|---|---|
| 4 | 16 |
| 8 | 256 |
| 12 | 4,096 |
| 16 | 65,536 |
| 24 | 16,777,216 |

### Worked example 1: sampling a wave

Suppose a pure wave swings between 0 and 7 in amplitude and is sampled 8 times per cycle, with 3-bit resolution (8 levels, 0 to 7). The rounded sample values are 4, 6, 7, 6, 4, 1, 0, 1, which are stored as 100, 110, 111, 110, 100, 001, 000 and 001. Those eight 3-bit numbers (24 bits) are all that is stored for the cycle. On playback, the DAC rebuilds a wave from them. It is close to the original, but not identical, because each value was rounded to the nearest level.

## Calculating the size of a sound file

The specification gives the formula:

**file size (bits) = rate (Hz) × res × secs**

where *rate* is the sampling rate in Hz, *res* is the sample resolution in bits and *secs* is the duration in seconds. Divide by 8 for bytes.

### Worked example 2: ten seconds of CD-style sound

Rate 44,100 Hz, resolution 16 bits, 10 seconds.
Size = 44,100 × 16 × 10 = 7,056,000 bits = 882,000 bytes. In binary units, that is 861.33 KiB.

### Worked example 3: a voice recording

Rate 8,000 Hz, resolution 8 bits, 30 seconds.
Size = 8,000 × 8 × 30 = 1,920,000 bits = 240,000 bytes (about 234.4 KiB).

### Worked example 4: a three-minute track

Rate 44,100 Hz, resolution 16 bits, 180 seconds.
Size = 44,100 × 16 × 180 = 127,008,000 bits = 15,876,000 bytes. That is about 15,504 KiB or **15.14 MiB**.

### More recomputed sizes

| Rate (Hz) | Resolution (bits) | Duration (s) | Bytes |
|---|---|---|---|
| 22,050 | 8 | 60 | 1,323,000 |
| 48,000 | 24 | 5 | 720,000 |
| 11,025 | 8 | 20 | 220,500 |

### Effects of changing the settings

- Halving the sampling rate **halves** the file size (44,100 to 22,050 Hz gives exactly half).
- Halving the resolution (16 to 8 bits) also halves it.
- Doubling the duration doubles it.

### Working backwards

A file of 1,764,000 bytes was recorded at 44,100 Hz with 16-bit resolution. Its length is bits ÷ (rate × resolution) = (1,764,000 × 8) ÷ (44,100 × 16) = 14,112,000 ÷ 705,600 = **20 seconds**.

## Nyquist's theorem

Sampling too slowly loses information. **Nyquist's theorem** states that to represent a sound accurately, the **sampling rate must be at least twice the highest frequency** in the sound:

**minimum sampling rate = 2 × highest frequency**

| Highest frequency in the sound (Hz) | Minimum sampling rate (Hz) |
|---|---|
| 20,000 | 40,000 |
| 15,000 | 30,000 |
| 4,000 | 8,000 |
| 3,400 | 6,800 |
| 22,000 | 44,000 |

Human hearing reaches about 20,000 Hz, so a rate above 40,000 Hz captures all audible sound, and CD audio uses 44,100 Hz. A telephone voice signal contains frequencies up to about 3,400 Hz, so a rate of 8,000 Hz is enough for speech.

If the rate is below the minimum, high frequencies are not captured and are wrongly recorded as lower frequencies (a distortion known as aliasing). The sound that is played back does not match the original. A rate **above** the minimum gives no extra accuracy for the frequency range, but a bigger file.

### Worked example 5: choosing a rate

A sound has a highest frequency of 15,000 Hz and is to be recorded for 60 seconds with 16-bit resolution. The minimum rate is 2 × 15,000 = 30,000 Hz. The minimum file size is 30,000 × 16 × 60 = 28,800,000 bits = 3,600,000 bytes (about 3.43 MiB).

## Why sampling loses some detail

An ADC measures the wave only at the sampling instants and rounds each reading to one of 2^res levels. Between samples the DAC has to join the points up, so some detail is lost. Raising the sampling rate puts the points closer together, and raising the resolution makes each point more precise. Neither can make the playback exactly identical to the original wave, which is why digital sound is an approximation that becomes good enough for the human ear.

## Putting it together

| Step | Device or action | What happens |
|---|---|---|
| 1 | Microphone | Sound waves become an analogue electrical signal |
| 2 | ADC | The signal is sampled at the sampling rate and each sample is stored as a binary number of the chosen resolution |
| 3 | Storage | The numbers are stored as a file |
| 4 | DAC | The numbers are converted back to an analogue signal |
| 5 | Amplifier and speaker | The signal is turned into sound waves |

## Exam technique

- **Write the formula** (rate × res × secs) before substituting.
- **Check units:** the answer is in bits; divide by 8 for bytes.
- **For Nyquist,** state the rule, then double the highest frequency.
- **Describe conversion in terms of sampling** (ADC) and building a continuous signal (DAC).
- **Explain quality trade-offs** with both effects: quality up, file size up.

## Common mistakes

- Using the sampling rate as the highest frequency (or the reverse).
- Forgetting to multiply by the number of seconds.
- Not dividing by 8 to get bytes.
- Confusing sampling rate (samples per second) with sample resolution (bits per sample).
- Saying a higher resolution gives a higher pitch. It gives a more accurate amplitude.
- Describing the ADC as playing sound, or the DAC as recording it.

## Next steps

- [Representing sound revision notes](/resources/oxfordaqa-a-level-computer-science-9645-representing-sound-revision-notes/)
- [Representing sound practice questions](/resources/oxfordaqa-a-level-computer-science-9645-representing-sound-practice/)
- [Representing graphics study guide](/resources/oxfordaqa-a-level-computer-science-9645-representing-graphics/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.5.6 Representing sound.
