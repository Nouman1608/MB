---
title: "OxfordAQA IGCSE Computer Science (9210): Representing sound -- Study Guide"
seoTitle: "OxfordAQA IGCSE CS 9210 Representing Sound Study Guide"
resourceType: "study-guides"
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
description: "Study guide to OxfordAQA IGCSE Computer Science 9210 section 3.3.7: analogue sound, sampling, sampling rate, sample resolution and calculating sound file sizes."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers section **3.3.7 Representing sound** of OxfordAQA International GCSE Computer Science (9210). The
specification asks you to understand that **sound is analogue** and must be converted to a **digital** form for
storage and processing in a computer; that **sound waves are sampled** to create the digital version, where "a
sample is a measure of amplitude at a point in time"; to describe digital sound in terms of **sampling rate** and
**sample resolution**; and to **calculate sound file sizes** from the sampling rate and the sample resolution.

## Analogue and digital

**Sound is analogue.** A sound is a vibration that travels through the air as a wave. The pressure of the air changes
smoothly and continuously, and it can take any value in a range, not just a few fixed values. The **amplitude** of the
wave, how far the pressure rises and falls, decides how loud the sound is. The number of vibrations per second
decides the pitch.

A computer stores only **digital** data, made of bits. It cannot store a smooth, continuous wave directly. The
analogue sound must be converted into a series of numbers before it can be stored, processed or sent. The device that
does this is an analogue to digital converter, usually built into a microphone input, a phone or a sound card.

## Sampling

The wave is **sampled**. This means measuring the amplitude of the wave at regular, very short intervals. Each
measurement is called a **sample**. The specification defines a sample as "a measure of amplitude at a point in time".

The process is as follows.

1. The sound wave is measured at a point in time and the amplitude is noted.
2. The measured amplitude is rounded to the nearest value that can be stored, and written as a binary number.
3. After a short, fixed interval, the next measurement is taken, and so on for the length of the sound.

The result is a long list of binary numbers. To play the sound back, the computer turns the numbers back into a varying
electrical signal, which makes a speaker move to recreate the wave.

### An example

A very short sound is sampled 4 times each second, and the amplitude is recorded using 3 bits for each sample, so
that the amplitude can be one of eight values (0 to 7). The eight samples taken during two seconds are:

| Sample | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| Amplitude | 3 | 6 | 7 | 4 | 1 | 0 | 2 | 5 |
| Stored as 3 bits | 011 | 110 | 111 | 100 | 001 | 000 | 010 | 101 |

The stored data is **011 110 111 100 001 000 010 101**, which is 8 × 3 = 24 bits for two seconds of sound.

## Sampling rate

The **sampling rate** is the number of samples taken **each second**. It is usually measured in **hertz (Hz)**, where
1 Hz is 1 sample per second. The specification says "1 Hertz = 1 sample per second". Common rates are 8,000 Hz for
telephone-quality speech and 44,100 Hz for music on a CD.

A **higher** sampling rate:

- takes more measurements of the wave, so the digital version follows the original wave more closely and the sound
  is a better match to the original;
- needs more data, so the file is **larger**.

A **lower** sampling rate misses detail in the wave, so the sound quality is lower, but the file is smaller.

## Sample resolution

The **sample resolution** is the **number of bits used for each sample**. It decides how many different amplitude
values can be stored.

| Sample resolution | Number of amplitude levels |
|---|---|
| 3 bits | 8 |
| 8 bits | 256 |
| 16 bits | 65,536 |

A **higher** sample resolution:

- allows the amplitude to be recorded more precisely, because there are more levels to choose from, so the sound is
  closer to the original;
- uses more bits per sample, so the file is **larger**.

A **lower** resolution forces the amplitude to be rounded to fewer levels, which loses accuracy and can make the sound
less clear, but the file is smaller.

Note carefully the difference between the two terms: **sampling rate** is about **how often** measurements are made;
**sample resolution** is about **how many bits** each measurement uses.

## Calculating sound file sizes

The specification gives the formula:

**File size (bits) = rate (Hz) × res × secs**

where rate is the sampling rate in hertz, res is the sample resolution in bits, and secs is the length of the
recording in seconds. The formula has no term for the number of channels, so use it as it is given. To find the size in
bytes, divide by 8.

### Worked example 1

A 10 second recording is made at 44,100 Hz with a sample resolution of 16 bits.

- Bits: 44,100 × 16 × 10 = 7,056,000 bits.
- Bytes: 7,056,000 ÷ 8 = 882,000 bytes.
- In megabytes: 882,000 ÷ 1,000,000 = **0.882 MB**.

### Worked example 2

A voice message lasts 60 seconds. It is sampled at 8,000 Hz with 8 bits per sample.

- Bits: 8,000 × 8 × 60 = 3,840,000 bits.
- Bytes: 3,840,000 ÷ 8 = 480,000 bytes, which is **480 kB**.

### Worked example 3

A song lasts 3 minutes, so 180 seconds. It is sampled at 44,100 Hz with 16 bits per sample.

- Bits: 44,100 × 16 × 180 = 127,008,000 bits.
- Bytes: 127,008,000 ÷ 8 = 15,876,000 bytes, which is **15.876 MB**.

Remember to convert minutes to seconds before you multiply.

### Worked example 4: the effect of changing one value

A clip at 22,050 Hz and 8 bits for 30 seconds gives 22,050 × 8 × 30 = 5,292,000 bits, which is 661,500 bytes. If the
sampling rate is **doubled** to 44,100 Hz and the other values stay the same, the file doubles to 1,323,000 bytes.
If instead the resolution is doubled to 16 bits, the file also doubles. File size is **directly proportional** to each
of the three values.

### Method

1. Write down the rate in Hz, the resolution in bits and the length in seconds.
2. Convert the length to seconds if it is in minutes.
3. Multiply the three numbers to get the size in **bits**.
4. Divide by 8 for bytes, and by 1,000 for each step up to kB, MB or GB.
5. Write the unit.

## Quality against file size

There is always a trade-off between quality and size.

| Setting | Effect on quality | Effect on file size |
|---|---|---|
| Higher sampling rate | Better match to the original | Larger |
| Lower sampling rate | Detail lost | Smaller |
| Higher sample resolution | More precise amplitudes | Larger |
| Lower sample resolution | Less accurate amplitudes | Smaller |

For speech on a telephone, a low rate and resolution give a small file that is still understandable. For music, a high
rate and resolution are chosen so the sound is as faithful as possible. A longer recording gives a larger file in
proportion to its length.

## Quick comparison of two recordings

A 10 second clip at 44,100 Hz with 16 bits per sample needs 7,056,000 bits (882,000 bytes). The same clip at 8,000 Hz with 8
bits per sample needs 640,000 bits (80,000 bytes). The second file is smaller because it has fewer samples each second and
fewer bits for each sample, but it loses detail, so the sound is less accurate.

## Common mistakes

- Using minutes in the formula instead of **seconds**.
- Forgetting to divide by **8** when the answer is wanted in bytes.
- Mixing up the sampling rate (how often) and the sample resolution (how many bits).
- Describing the sample resolution as "how good the sound is" without saying that it is the **number of bits per
  sample**.
- Saying that the digital sound is "exactly" the same as the original. It is an approximation made of discrete
  samples.
- Saying that sound is digital. Sound is **analogue**; it is converted to digital for the computer.
- Writing the sampling rate in the wrong unit. It is in **hertz**, which is samples per second.
- Confusing amplitude (loudness) with frequency (pitch) when explaining a sample.
- Forgetting the unit with the answer.

## Exam technique

- **Explain why sound is converted** to digital: the computer can only store and process binary data, and sound is an
  analogue wave.
- **Describe sampling**: measure the amplitude at regular intervals, and store each measurement as a binary number.
- **Define** sampling rate and resolution in a sentence each, with their units.
- **Calculate** questions: write the formula, substitute, calculate in bits, then convert. Show each stage.
- **Effect** questions: name which setting changes, say whether the file size and the quality go up or down, and
  explain why.

## Next steps

For a condensed summary and a self-test, use the [Representing sound revision
notes](/resources/oxfordaqa-igcse-computer-science-9210-representing-sound-revision-notes/), and practise with the
[Representing sound practice
questions](/resources/oxfordaqa-igcse-computer-science-9210-representing-sound-practice/).
