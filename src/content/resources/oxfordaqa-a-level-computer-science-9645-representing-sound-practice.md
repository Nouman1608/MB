---
title: "OxfordAQA A-Level Computer Science (9645): Representing sound -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Representing Sound Practice"
resourceType: "practice-questions"
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
description: "Eleven original OxfordAQA 9645 questions on sub-topic 3.5.6: ADC and DAC, sampling rate and resolution, file size calculations and Nyquist's theorem."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and practice on this content. They are **not** reproduced past-paper questions, and they do **not** replicate the exam's exact structure, question count or mark tariffs -- examination boards hold copyright in their own papers. Use these alongside the official past papers from your board or school.

These questions practise sub-topic **3.5.6 Representing sound** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: analogue and digital quantities, ADC and DAC, sampling rate, sample resolution, file size and Nyquist's theorem. Use file size (bits) = rate (Hz) × resolution × seconds.

Related pages: [representing sound study guide](/resources/oxfordaqa-a-level-computer-science-9645-representing-sound/) · [representing sound revision notes](/resources/oxfordaqa-a-level-computer-science-9645-representing-sound-revision-notes/)

## Section A

**1.** State the difference between an analogue quantity and a digital quantity. **[2]**

**2.** State what is meant by sampling rate and by sample resolution. **[2]**

**3.** A sound contains frequencies up to 12,000 Hz. State the minimum sampling rate needed to represent it accurately. **[1]**

## Section B

**4.** Describe the part played by an analogue to digital converter (ADC) when a voice is recorded on a computer. **[3]**

**5.** Describe the part played by a digital to analogue converter (DAC) when a sound file is played. **[2]**

**6.** A voice message is recorded at a sampling rate of 8,000 Hz with a sample resolution of 16 bits. It lasts 2 minutes.

**(a)** Calculate the file size in bits. **[2]**
**(b)** Convert your answer to bytes and to KiB. **[2]**

**7.** A music clip is recorded at 22,050 Hz with 16-bit resolution for 30 seconds.

**(a)** Calculate the file size in bytes. **[3]**
**(b)** The clip is re-recorded at 44,100 Hz. State the new file size in bytes and explain the change. **[2]**

**8.** A file occupies 480,000 bytes. It was recorded at 8,000 Hz with a 12-bit resolution. Calculate the length of the recording in seconds. **[3]**

**9.** An engineer must record a sound whose highest frequency is 15,000 Hz for 60 seconds, using 16-bit resolution.

**(a)** State Nyquist's theorem. **[1]**
**(b)** Calculate the minimum sampling rate. **[1]**
**(c)** Calculate the smallest file size, in bytes, that follows the theorem. **[3]**
**(d)** Describe what would be wrong with a recording made at 20,000 Hz. **[2]**

**10.** A sound system offers two settings: 8-bit resolution and 16-bit resolution.

**(a)** State the number of different amplitude levels available at each setting. **[2]**
**(b)** Explain **one** advantage and **one** disadvantage of choosing the 16-bit setting. **[2]**

**11.** A mono sound is recorded at 16,000 Hz with 8-bit resolution for 45 seconds.

**(a)** Calculate the file size in bytes. **[3]**
**(b)** The engineer changes the resolution to 16 bits. State the new file size in bytes and the effect on quality. **[2]**

## Answers

**1.** An analogue quantity varies **continuously** and can take any value in a range [1]; a digital quantity takes only **separate (discrete) values**, stored as binary [1]. **[2]**

**2.** Sampling rate is the **number of samples taken per second** (in hertz) [1]; sample resolution is the **number of bits used to represent each sample** [1]. **[2]**

**3.** 2 × 12,000 = **24,000 Hz** [1]. **[1]**

**4.** The microphone produces a continuous analogue electrical signal [1]; the ADC **measures (samples) the signal at regular intervals** [1] and converts each measurement into a **binary number**, which is stored in the file [1]. **[3]**

**5.** The DAC takes the **stored binary numbers** [1] and converts them into an **analogue signal** (voltage) that is amplified and sent to the speaker or headphones [1]. **[2]**

**6. (a)** 2 minutes = 120 seconds [1]; 8,000 × 16 × 120 = **15,360,000 bits** [1]. **[2]**
**(b)** 15,360,000 ÷ 8 = **1,920,000 bytes** [1]; ÷ 1,024 = **1,875 KiB** [1]. **[2]**

**7. (a)** 22,050 × 16 × 30 [1] = 10,584,000 bits [1]; ÷ 8 = **1,323,000 bytes** [1]. **[3]**
**(b)** **2,646,000 bytes** [1], because the sampling rate has doubled, so twice as many samples are stored [1]. **[2]**

**8.** Total bits = 480,000 × 8 = 3,840,000 [1]. Bits per second = 8,000 × 12 = 96,000 [1]. Time = 3,840,000 ÷ 96,000 = **40 seconds** [1]. **[3]**

**9. (a)** The sampling rate must be **at least twice the highest frequency** in the sound [1]. **[1]**
**(b)** 2 × 15,000 = **30,000 Hz** [1]. **[1]**
**(c)** 30,000 × 16 × 60 = 28,800,000 bits [2: formula [1]; value [1]]; ÷ 8 = **3,600,000 bytes** [1]. **[3]**
**(d)** 20,000 Hz is **below the minimum of 30,000 Hz** [1], so the high frequencies are not captured properly and the played-back sound will not match the original (it will be distorted) [1]. **[2]**

**10. (a)** 8 bits: 2^8 = **256** levels [1]; 16 bits: 2^16 = **65,536** levels [1]. **[2]**
**(b)** Advantage: amplitude is measured more precisely, so the sound is closer to the original [1]. Disadvantage: the file is twice as large [1]. **[2]**

**11. (a)** 16,000 × 8 × 45 [1] = 5,760,000 bits [1]; ÷ 8 = **720,000 bytes** [1]. **[3]**
**(b)** The file size doubles to **1,440,000 bytes** [1]; the amplitude of each sample is measured more precisely, so the sound is closer to the original [1]. **[2]**

## Frequently asked questions

**Is the sampling rate the same as the frequency of the sound?**
No. The frequency is a property of the sound wave; the sampling rate is how often the ADC measures it. Nyquist's theorem links them.

**Does a higher resolution change the pitch?**
No. Resolution affects how finely the loudness (amplitude) of each sample is measured, not the pitch.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.5.6 Representing sound.
