---
title: "OxfordAQA IGCSE Computer Science (9210): Representing sound -- Practice Questions"
seoTitle: "OxfordAQA IGCSE CS 9210 Representing Sound Practice"
resourceType: "practice-questions"
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
description: "Original OxfordAQA IGCSE Computer Science 9210 practice questions with answers on analogue sound, sampling rate, sample resolution and sound file sizes."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs; examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Representing sound study guide](/resources/oxfordaqa-igcse-computer-science-9210-representing-sound/) | [Representing sound revision notes](/resources/oxfordaqa-igcse-computer-science-9210-representing-sound-revision-notes/)

These questions cover section 3.3.7 Representing sound of the OxfordAQA International GCSE Computer Science (9210)
specification.

In calculations, use 1 kB = 1,000 bytes and 1 MB = 1,000 kB. File size in bits = rate × resolution × seconds.

---

## Section A

**1.** State why sound has to be converted to a digital form before it can be stored on a computer. **[1]**

**2.** State what is meant by a sample of a sound wave. **[1]**

**3.** State what is meant by the sampling rate and give the unit in which it is measured. **[2]**

**4.** State what is meant by the sample resolution. **[1]**

**5.** A sound is stored using a sample resolution of 4 bits. State how many different amplitude values each sample can
have. **[1]**

## Section B

**6.** A voice recording lasts 5 seconds. It is sampled at 8,000 Hz with a sample resolution of 16 bits.

**(a)** Calculate the size of the file in bits. **[2]**

**(b)** State the size of the file in bytes. **[1]**

**7.** A sound clip lasts 30 seconds and is recorded at 22,050 Hz with a sample resolution of 8 bits. Calculate the
file size in bytes. **[3]**

**8.** A song lasts 4 minutes. It is recorded at 44,100 Hz with a sample resolution of 16 bits. Calculate the file
size in megabytes. **[4]**

**9.** The amplitude of a sound wave is measured four times, and the values are 5, 2, 7 and 1. Each sample is stored
using 3 bits.

**(a)** Write down the binary data that is stored. **[2]**

**(b)** State the total number of bits stored. **[1]**

**10.** A sound is recorded at 44,100 Hz with 16 bits per sample for 10 seconds. A second recording of the same
length is made at 11,025 Hz with 8 bits per sample.

**(a)** Calculate the file size of each recording in bytes. **[2]**

**(b)** Calculate how many times larger the first file is than the second. **[1]**

**(c)** State one disadvantage for the sound quality of the second recording. **[1]**

**11.** A recording uses a sampling rate of 8,000 Hz and a sample resolution of 8 bits. Calculate how many seconds of
sound will fit in a file of 1 MB. **[3]**

**12.** Explain how increasing the sampling rate changes the quality of a recording and the size of the file. **[3]**

**13.** Explain why increasing the sample resolution makes a recording sound closer to the original. **[2]**

**14.** A student says, "Sampling rate and sample resolution mean the same thing." Explain why this is wrong. **[2]**

**15.** Explain why a sound wave has to be sampled, and describe what happens when a sound wave is sampled. **[3]**

---

## Answers

**1.** A computer can only store and process digital (binary) data, and sound is analogue [1].

**2.** A measure of the amplitude of the sound wave at a point in time [1].

**3.** The number of samples taken each second [1]; measured in hertz (Hz) [1].

**4.** The number of bits used to store each sample [1].

**5.** 16 [1] (2 to the power 4).

**6.** **(a)** 8,000 × 16 × 5 [1] = 640,000 bits [1]. **(b)** 640,000 ÷ 8 = 80,000 bytes [1].

**7.** 22,050 × 8 × 30 = 5,292,000 bits [1]; ÷ 8 [1] = 661,500 bytes [1].

**8.** 4 minutes = 240 seconds [1]; 44,100 × 16 × 240 = 169,344,000 bits [1]; ÷ 8 = 21,168,000 bytes [1]; 21.168 MB [1].

**9.** **(a)** 101 010 111 001 [2] (one mark for correct binary values, one for each sample in 3 bits and in order).
**(b)** 12 bits [1].

**10.** **(a)** First: 44,100 × 16 × 10 ÷ 8 = 882,000 bytes [1]; second: 11,025 × 8 × 10 ÷ 8 = 110,250 bytes [1].
**(b)** 8 times larger [1] (882,000 ÷ 110,250).
**(c)** The sound will be less accurate, because fewer samples are taken, and each sample is stored with less
precision [1].

**11.** 1 MB = 1,000,000 bytes = 8,000,000 bits [1]; one second needs 8,000 × 8 = 64,000 bits [1]; 8,000,000 ÷ 64,000 =
125 seconds [1].

**12.** A higher sampling rate takes more samples each second [1], so the digital sound follows the original wave
more closely, and the quality is better [1]; there are more samples to store, so the file is larger [1].

**13.** A higher resolution means each sample uses more bits [1], so there are more possible amplitude values and each
sample can be recorded more precisely, so the sound is closer to the original [1].

**14.** The sampling rate is the number of samples taken each second [1]; the sample resolution is the number of bits used to
store each sample [1].

**15.** A sound wave is analogue, but a computer can only store digital data [1]. When it is sampled, the amplitude of the
wave is measured at regular intervals [1], and each measurement is stored as a binary number [1].

---

## Where marks are usually lost

- Using minutes rather than seconds in Question 8.
- Forgetting to divide by 8 to convert bits to bytes.
- Mixing up the sampling rate (how often) and the sample resolution (bits per sample) in Question 14.
- Giving the answer to Question 10(b) as a difference rather than a ratio.
- Not stating a unit.
