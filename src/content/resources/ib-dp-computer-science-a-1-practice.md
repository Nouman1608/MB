---
title: "IB DP Computer Science A.1: Computer Fundamentals -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["ib"]
topic: "A.1 -- Computer fundamentals"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Computer Science"]
syllabusSeries: "First assessment 2027"
order: 1.1
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-computer-science-theme-a"
    subtopic: "ib-dp-computer-science-a-1"
description: "Twelve original questions on the CPU, fetch-execute, storage, binary, file sizes, a trace table and the OS for IB DP Computer Science A.1, with worked answers."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-17
reviewNote: "2026-11-17: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-17: New page written from the IB subject brief and the site's Theme A coverage; please check the questions and mark allocations against the full DP Computer Science guide."
publishedDate: 2026-11-17
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- the IB holds copyright in its own papers. Use these alongside
> the official past papers available through your school or the IB store.

Related: [A.1 Computer fundamentals study guide](/resources/ib-dp-computer-science-a-1/)
and [revision notes](/resources/ib-dp-computer-science-a-1-revision-notes/).

## Section A

**1.** State the function of the arithmetic logic unit and of the control unit. **[2]**

**2.** Identify the register that holds the address of the next instruction to be fetched. **[1]**

**3.** Convert the denary number 47 to 8-bit binary and to hexadecimal. **[2]**

**4.** State **two** differences between primary and secondary storage. **[2]**

**5.** Explain why 8 bits can represent 256 different values. **[2]**

**6.** State **two** reasons why Unicode is used instead of ASCII in many applications. **[2]**

## Section B

**7.** Describe the fetch-execute cycle, referring to the PC, MAR, MDR and control unit. **[6]**

**8.** A photograph is stored as a bitmap of 1280 × 720 pixels with a colour depth of 24 bits.
**(a)** Calculate the size of the uncompressed image in bytes. Show your working. **[2]**
**(b)** Explain the effect on the image of reducing the colour depth to 8 bits. **[2]**

**9.** A voice message is recorded in mono for 30 seconds at 22,050 samples per second with a bit
depth of 8.
**(a)** Calculate the size of the recording in bytes. Show your working. **[2]**
**(b)** Explain **two** effects of increasing the sample rate. **[2]**

**10.** Consider the following algorithm.

```
n <- 22
result <- ""
WHILE n > 0
    remainder <- n MOD 2
    result <- remainder + result
    n <- n DIV 2
ENDWHILE
OUTPUT result
```

**(a)** Copy and complete a trace table with columns n (start of loop), remainder, result and n (end
of loop). **[4]**
**(b)** State the output and show how it can be checked. **[1]**

**11.** A student opens a word processor, a browser and a music player at the same time. Explain how
the operating system manages memory and the processor so that all three can run. **[4]**

**12.** A clinic gives nurses tablet computers to record patient visits on the move. The tablets are
often dropped, must start quickly, and slow down when several apps are open.
**(a)** Explain why a solid-state drive is more suitable than a hard disk drive for these tablets. **[3]**
**(b)** Explain why adding more RAM would reduce the slowdown. **[3]**

---

## Answers

**1.** ALU: performs arithmetic and logical operations, such as addition and comparisons [1]. CU:
decodes instructions and sends control signals to coordinate the components and the movement of data
[1].

**2.** The program counter (PC) [1].

**3.** 0010 1111 [1]; 2F [1].

**4.** Any two, [1] each: primary storage is accessed directly by the CPU, secondary is not; primary
(RAM) is volatile, secondary is non-volatile; primary is faster; secondary has much larger capacity;
primary holds programs and data in use, secondary holds files long term. Maximum 2.

**5.** Each bit has two possible states [1], so 8 bits give 2 × 2 × … × 2 = 2⁸ = 256 different
combinations [1].

**6.** Any two, [1] each: ASCII can represent only 128 characters (or 256 in extended forms); Unicode
can represent characters from many writing systems; it allows symbols and emoji; it lets text in
different languages be shared consistently. Maximum 2.

**7.** One mark per point, up to 6:
- The address in the PC is copied to the MAR [1].
- The CU sends a read signal along the control bus [1].
- The instruction at that address is copied along the data bus into the MDR [1].
- The PC is incremented to point to the next instruction [1].
- The instruction passes to the CU, which decodes it [1].
- The CU sends signals to execute it; any data needed is fetched via the MAR and MDR and the ALU
  performs any calculation [1].
- The result is stored, for example in the accumulator or memory, and the cycle repeats [1].
Maximum 6.

**8. (a)** 1280 × 720 × 24 = 22,118,400 bits [1]; ÷ 8 = 2,764,800 bytes [1].
**(b)** Only 2⁸ = 256 colours can be shown instead of about 16.7 million, so colours may look banded
or less realistic [1]; the file size falls to a third, 921,600 bytes [1].

**9. (a)** 22,050 × 8 × 1 × 30 = 5,292,000 bits [1]; ÷ 8 = 661,500 bytes [1].
**(b)** Any two, [1] each: the recording is a closer copy of the original sound; higher frequencies can
be captured; the file size increases; more storage or bandwidth is needed to send it. Maximum 2.

**10. (a)** One mark for each correct row [4]:

| n (start of loop) | remainder | result | n (end of loop) |
|---|---|---|---|
| 22 | 0 | "0" | 11 |
| 11 | 1 | "10" | 5 |
| 5 | 1 | "110" | 2 |
| 2 | 0 | "0110" | 1 |
| 1 | 1 | "10110" | 0 |

(Award the fourth mark for the final two rows together.)
**(b)** 10110; check: 16 + 4 + 2 = 22 [1].

**11.** Any two developed points, [2] each:
- The OS allocates each program its own area of RAM and keeps them separate so one cannot overwrite
  another [2].
- If RAM is full, the OS moves less-used data to virtual memory on secondary storage [2].
- The OS schedules processes, giving each a short turn on the CPU in rapid succession, so all three
  appear to run at once [2].
- The OS handles input and output for each program, such as sending sound to the speakers through a
  device driver [2].
Maximum 4.

**12. (a)** Any three, [1] each: an SSD has no moving parts, so it is less likely to be damaged when
dropped; it has faster access times, so the tablet starts and loads apps quickly; it is lighter and
uses less power, which suits a portable device; it is silent. Maximum 3.
**(b)** When several apps are open, RAM fills and the OS swaps data to virtual memory [1]; secondary
storage is much slower than RAM, so the processor waits for data [1]; more RAM lets more data stay in
main memory, reducing swapping and speeding the tablet up [1].

## Where marks are usually lost

- Describing the fetch-execute cycle without the registers.
- Forgetting to divide by 8, or not showing working in calculations.
- Trace tables with the result string built in the wrong order.
- Generic answers to scenario questions that do not use the details given.

## Frequently asked questions

**Why are scenario questions included?**
Paper 1 sets Theme A content alongside a pre-released case study, so applying concepts to a situation
is an essential skill.

**Are these real IB questions?**
No. They are original practice questions.
