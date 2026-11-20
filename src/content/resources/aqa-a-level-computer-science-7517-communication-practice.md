---
title: "AQA A-Level Computer Science (7517): Communication -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of communication and networking"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 9.1
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-communication-and-networking"
    subtopic: "communication-7517"
description: "Original AQA 7517 section 4.9.1 questions with answers: serial and parallel transmission, asynchronous framing, baud rate, bit rate, bandwidth and latency calculations."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs: examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Communication study guide](/resources/aqa-a-level-computer-science-7517-communication/) | [Communication revision notes](/resources/aqa-a-level-computer-science-7517-communication-revision-notes/)

---

## Section A

**1.** Define serial transmission. **[1]**

**2.** State the unit in which baud rate is measured, and what it counts. **[2]**

**3.** State **one** reason why start and stop bits are not needed in synchronous transmission. **[1]**

**4.** Define latency. **[1]**

**5.** State what is meant by a protocol. **[1]**

## Section B

**6.** Explain **two** reasons why serial transmission is often preferred to parallel transmission for connections between devices. **[4]**

**7.** Describe the purpose of the start bit and the stop bit in asynchronous data transmission. **[3]**

**8.** Compare synchronous and asynchronous data transmission. **[4]**

**9.** An asynchronous frame consists of 1 start bit, 8 data bits, 1 parity bit and 2 stop bits.

**(a)** State the number of bits in one frame. **[1]**
**(b)** Calculate the percentage of each frame that is data, to one decimal place. **[2]**
**(c)** A message of 400 characters is sent at 4,800 bit/s. Calculate the time taken. **[3]**

**10.** A communications channel works at 1,200 baud and each signal change can take one of 8 possible values.

**(a)** Calculate the number of bits carried by each signal change. **[1]**
**(b)** Calculate the bit rate. **[2]**
**(c)** Explain why the bit rate is not the same as the baud rate in this case. **[2]**

**11.** A link has a bit rate of 14,400 bit/s and runs at 2,400 baud. Calculate the number of different signal levels used. **[3]**

**12.** A channel with a bandwidth of 3 kHz carries 6,000 bit/s using a particular encoding.

**(a)** State the relationship between bit rate and bandwidth. **[1]**
**(b)** Calculate the bit rate of a 9 kHz channel with the same encoding. **[2]**

**13.** A file of 1.5 MB is sent over a link with a bit rate of 12 megabits per second and a latency of 80 ms.

**(a)** Convert the file size to megabits. **[1]**
**(b)** Calculate the total time to send the file. **[3]**
**(c)** A short command of 100 bytes is sent over the same link. Explain why latency matters far more than bit rate for this message. **[2]**

**14.** A designer must choose between a wide parallel cable and a single serial cable to connect a sensor to a controller 30 metres away. Evaluate the choice. **[4]**

---

## Answers

**1.** Bits are sent one after another along a single channel (wire) [1].

**2.** Baud (symbols per second) [1]; it counts the number of signal changes per second [1].

**3.** The sender and receiver share a clock, so they are kept in step and do not need to mark the start and end of each character [1].

**4.** The delay between a signal being sent and the start of its arrival [1].

**5.** A set of rules that devices agree to follow so that they can communicate [1].

**6.** Any two reasons, each with an explanation [2 marks each]. Parallel wires suffer skew: bits arrive at different times over a long cable, so the clock must be slowed [1 each part]. Crosstalk between neighbouring wires corrupts data, especially at high speed [1 each part]. A serial cable has fewer wires, so it is cheaper and lighter [1 each part], and a serial link can use a faster clock, so it can be quicker overall [1 each part].

**7.** The start bit tells the receiver that a character is about to begin [1] and lets it synchronise its timing with the sender [1]; the stop bit marks the end of the character, returning the line to idle and giving the receiver time to process it [1].

**8.** Synchronous: a shared clock keeps sender and receiver in step [1]; data is sent in continuous streams or large blocks with little overhead, so it is faster [1]. Asynchronous: no shared clock, the speed is agreed in advance [1]; data is sent a character at a time with start and stop bits, so there is more overhead and it is slower but simpler and cheaper [1].

**9. (a)** 1 + 8 + 1 + 2 = 12 bits [1].
**(b)** 8 ÷ 12 [1] = 66.7% [1].
**(c)** Bits = 400 × 12 = 4,800 [1]; time = 4,800 ÷ 4,800 [1] = 1 second [1].

**10. (a)** 8 = 2³, so 3 bits [1].
**(b)** Bit rate = 1,200 × 3 [1] = 3,600 bit/s [1].
**(c)** Baud rate counts signal changes per second [1]; each change carries 3 bits, so there are three times as many bits per second as signal changes [1].

**11.** Bits per signal change = 14,400 ÷ 2,400 = 6 [1]; number of levels = 2⁶ [1] = 64 [1].

**12. (a)** Bit rate is directly proportional to bandwidth [1].
**(b)** 9 ÷ 3 = 3 times the bandwidth [1]; 6,000 × 3 = 18,000 bit/s [1].

**13. (a)** 1.5 × 8 = 12 megabits [1].
**(b)** Transfer time = 12 ÷ 12 = 1 second [1]; latency = 0.08 s [1]; total = 1.08 seconds [1].
**(c)** 100 bytes is 800 bits, which takes about 0.00007 s at 12 megabits per second [1], so the 80 ms latency is almost all of the time taken [1].

**14.** Parallel: sends several bits at once, which may be fast at short range [1], but over 30 m the bits will suffer skew and crosstalk, so the clock must be slowed or errors occur, and the cable is bulky and costly [1]. Serial: one data wire, so no skew between wires and little crosstalk [1], thinner and cheaper cable, and a fast clock can be used; so serial is the better choice for this distance, unless a very high data rate is not needed anyway [1].

---

## Where marks are usually lost

- Treating baud rate and bit rate as the same in every case.
- Forgetting to multiply bytes by 8 before dividing by a bit rate.
- Describing start and stop bits as carrying data.
- Saying parallel is faster without discussing skew and crosstalk.
- Leaving out units in numerical answers.
