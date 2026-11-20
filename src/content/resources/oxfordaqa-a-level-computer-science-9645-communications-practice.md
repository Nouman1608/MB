---
title: "OxfordAQA A-Level Computer Science (9645): Communications -- Practice Questions"
seoTitle: "OxfordAQA 9645 Communications Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 14 – Networking and cyber security"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 14.1
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "networking-and-cyber-security"
  - qualification: "a-level"
    topic: "networking-and-cyber-security"
    subtopic: "communications-oxfordaqa-alevel-cs"
description: "Twelve original OxfordAQA 9645 questions on sub-topic 3.14.1 Communications: serial and parallel, synchronous and asynchronous, baud rate, bit rate, bandwidth and latency."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions practise sub-topic **3.14.1 Communications** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: serial and parallel transmission, synchronous and asynchronous transmission, start and stop bits, and baud rate, bit rate, bandwidth, latency and protocol.

Related pages: [communications study guide](/resources/oxfordaqa-a-level-computer-science-9645-communications/) ·
[communications revision notes](/resources/oxfordaqa-a-level-computer-science-9645-communications-revision-notes/)

## Section A

**1.** Define the terms **baud rate** and **bit rate**. **[2]**

**2.** Define the term **protocol** as used in data communication. **[1]**

**3.** Define **latency**. **[1]**

**4.** A line has a baud rate of 1,200 and uses four signal levels. Calculate its bit rate. **[2]**

## Section B

**5.** A modem must achieve a bit rate of 14,400 bits per second using eight signal levels. Calculate the baud rate it needs. **[3]**

**6.** An asynchronous serial link sends each character as 1 start bit, 8 data bits and 1 stop bit. The link runs at 4,800 bits per second.

**(a)** Calculate the number of bits sent for the 11-character message "Hello World". **[1]**
**(b)** Calculate the time taken to send the message, in milliseconds to 1 decimal place. **[2]**
**(c)** Calculate the proportion of the transmitted bits that are data, as a percentage. **[1]**

**7.** A different asynchronous link uses 1 start bit, 8 data bits and 2 stop bits per character. Calculate the proportion of the transmitted bits that are data, as a percentage to 1 decimal place. **[2]**

**8.** Describe the purpose of the start bit and the stop bit in asynchronous transmission. **[4]**

**9.** Explain why serial transmission is often preferred to parallel transmission for long-distance, high-speed links. **[4]**

**10.** Compare synchronous and asynchronous transmission. **[4]**

**11.** A channel with a bandwidth of 3 MHz can carry 12 megabits per second. The bit rate is directly proportional to the bandwidth.

**(a)** State the bit rate for a similar channel with a bandwidth of 8 MHz. **[2]**
**(b)** State what happens to the bit rate if the bandwidth is halved. **[1]**

**12.** A 5 MB file (5,000,000 bytes) is downloaded over a link with a bit rate of 40 megabits per second and a latency of 80 ms.

**(a)** Calculate the time to transmit the bits of the file. **[2]**
**(b)** Calculate the total time for the download. **[1]**
**(c)** Explain why latency matters more than bit rate for a short message such as a game command. **[2]**

## Answers

**1.** **Baud rate**: the number of signal changes per second **[1]**. **Bit rate**: the number of bits transmitted per second **[1]**. **[2]**

**2.** An agreed set of rules that devices follow to communicate (for example the format of messages and the order of exchange) **[1]**.

**3.** The delay between data being sent and arriving (or between a request and the response starting) **[1]**.

**4.** Four levels encode log₂ 4 = 2 bits per signal change **[1]**. Bit rate = 1,200 × 2 = **2,400 bits per second** **[1]**. **[2]**

**5.** Eight levels encode log₂ 8 = 3 bits per signal change **[1]**. Baud rate = bit rate / bits per change **[1]** = 14,400 / 3 = **4,800 baud** **[1]**. **[3]**

**6. (a)** 11 × 10 = **110 bits** **[1]**
**(b)** 110 / 4,800 = 0.0229 s **[1]** = **22.9 ms** **[1]**. **[2]**
**(c)** 8 / 10 = **80%** **[1]**

**7.** Bits per character = 1 + 8 + 2 = 11 **[1]**. Proportion that is data = 8 / 11 = **72.7%** **[1]**. **[2]**

**8.** Start bit: tells the receiver that a byte is beginning **[1]** and brings the receiver's clock into phase with the sender's clock **[1]**. Stop bit: lets the next start bit be recognised, because it returns the line to a known level **[1]**; in older devices it also gave the receiver time to deal with the received data **[1]**. **[4]**

**9.** Parallel links suffer from **skew**: bits sent together arrive at slightly different times, especially over long cables **[1]**. They also suffer from **crosstalk** between neighbouring wires **[1]**. These problems limit the clock speed and distance of a parallel link, whereas a serial link sends bits one after another on a single channel so there is no skew, and it can run faster **[1]**. Serial cables also use fewer wires and connector pins, so they are cheaper **[1]**. **[4]**

**10.** Award up to **[4]** for points such as: synchronous uses a shared clock signal, whereas asynchronous has no shared clock **[1]**; synchronous sends data in continuous blocks, whereas asynchronous sends single characters or bytes **[1]**; asynchronous needs a start bit and stop bit for every byte, which adds overhead, whereas synchronous overhead is small per block **[1]**; asynchronous allows gaps of any length between bytes, whereas synchronous data is sent continuously **[1]**. **[4]**

**11. (a)** 8 / 3 × 12 **[1]** = **32 megabits per second** **[1]**. **[2]**
**(b)** The bit rate is halved **[1]**.

**12. (a)** Bits = 5,000,000 × 8 = 40,000,000 **[1]**; time = 40,000,000 / 40,000,000 = **1.0 s** **[1]**. **[2]**
**(b)** 1.0 + 0.08 = **1.08 s** **[1]**
**(c)** A short message has very few bits, so the time to transmit them is tiny **[1]**; most of the total time is the latency (the delay before the data arrives) **[1]**. **[2]**

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.14.1 Communications.
