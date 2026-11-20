---
title: "OxfordAQA IGCSE Computer Science (9210): Systems architecture -- Practice Questions"
seoTitle: "OxfordAQA IGCSE CS 9210 Systems Architecture Practice"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 4: Computer systems"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 4.04
syllabusTopics:
  - qualification: "igcse"
    topic: "computer-systems-9210"
  - qualification: "igcse"
    topic: "computer-systems-9210"
    subtopic: "systems-architecture-9210"
description: "Original OxfordAQA IGCSE Computer Science 9210 practice questions with answers on the CPU, buses, fetch-execute cycle, memory, storage, cloud storage and embedded systems."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs; examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Systems architecture study guide](/resources/oxfordaqa-igcse-computer-science-9210-systems-architecture/) | [Systems architecture revision notes](/resources/oxfordaqa-igcse-computer-science-9210-systems-architecture-revision-notes/)

These questions cover section 3.4.4 Systems architecture of the OxfordAQA International GCSE Computer Science
(9210) specification.

---

## Section A

**1.** State what is meant by the stored program concept in the Von Neumann architecture. **[2]**

**2.** State the role of each of these parts of the CPU.

**(a)** the arithmetic logic unit **[1]**

**(b)** the control unit **[1]**

**(c)** the clock **[1]**

**3.** Name the three buses that connect the CPU to main memory and state what each one carries. **[3]**

**4.** State the three stages of the fetch-execute cycle, in order. **[2]**

**5.** State what is meant by volatile memory, and state whether RAM is volatile. **[2]**

## Section B

**6.** A computer's processor is changed from a single core running at 2 GHz to a quad-core processor running at the same
clock speed.

**(a)** Explain how having more cores can improve performance. **[2]**

**(b)** Explain why a program may not run faster on the new processor. **[2]**

**7.** Explain how increasing the cache size can improve the performance of a CPU. **[3]**

**8.** Describe what happens at each stage of the fetch-execute cycle. **[4]**

**9.** Give two differences between RAM and ROM. **[2]**

**10.** Explain why a computer needs secondary storage as well as main memory. **[3]**

**11.** A photographer needs to store thousands of high resolution photographs and carry some of them to client
meetings. Compare the suitability of magnetic storage and solid state storage for this use. **[4]**

**12.** Describe how data is read from an optical disc. **[3]**

**13.** A company is deciding between storing its files on its own magnetic hard disk drives and using cloud storage.

**(a)** Give two advantages of cloud storage. **[2]**

**(b)** Give two disadvantages of cloud storage. **[2]**

**14.** A microwave oven contains a computer that controls the cooking time and power.

**(a)** State the term used for this type of system. **[1]**

**(b)** Explain how it differs from a laptop computer. **[2]**

**15.** Explain why the CPU cannot execute instructions directly from a hard disk drive. **[2]**

**16.** Describe the role of the address bus when the CPU fetches an instruction. **[2]**

---

## Answers

**1.** Program instructions and data are both stored in the same main memory [1], in binary, and the CPU fetches and
executes the instructions from there [1].

**2.** **(a)** Carries out arithmetic and logic operations (such as add or compare) [1]. **(b)** Decodes instructions and
controls and coordinates the other parts of the CPU using control signals [1]. **(c)** Produces regular pulses that
synchronise the operations of the CPU [1].

**3.** Data bus: carries data and instructions [1]. Address bus: carries the address (memory location) to be read or
written [1]. Control bus: carries control signals such as read or write [1].

**4.** Fetch [1], decode, execute [1] (both marks only if the three stages are in order).

**5.** Volatile memory loses its contents when the power is switched off [1]; RAM is volatile [1].

**6.** **(a)** Each core can run its own instructions [1], so the processor can carry out more than one instruction at a
time, or run several programs together [1].
**(b)** The program may be written to use only one core [1], so the other cores are not used and the program runs at
about the same speed [1].

**7.** Cache is small, very fast memory close to the CPU that holds frequently used instructions and data [1]; a larger
cache can hold more of the data the CPU needs [1]; the CPU waits less often for the slower main memory, so it executes
instructions faster [1].

**8.** Fetch: the next instruction is fetched from main memory to the CPU [1]. Decode: the control unit works out what
the instruction means [1]. Execute: the instruction is carried out [1]; this may involve the ALU, or reading or writing
main memory [1].

**9.** Any two from: RAM can be read and written, whereas ROM is normally read only [1]; RAM is volatile, whereas ROM is
non-volatile [1]; RAM holds programs and data currently in use, whereas ROM holds permanent instructions such as the
start-up program [1].

**10.** Main memory (RAM) is volatile, so it loses its contents when the power is off [1]; secondary storage is
non-volatile, so programs and files are kept permanently [1]; secondary storage also has a larger capacity than main
memory [1].

**11.** Magnetic: low cost per gigabyte and large capacity, so suitable for storing thousands of photographs [1]; but
the moving parts make it more easily damaged and less suitable to carry [1]. Solid state: robust, small and light
because it has no moving parts, so suitable to carry to meetings [1]; but it costs more per gigabyte, so it is less
suitable for a very large collection [1].

**12.** A laser shines onto the track of the disc [1]; the light is reflected differently by pits and by lands (flat
areas) [1]; a sensor detects the changes in reflection, which represent 0 and 1 [1].

**13.** **(a)** Any two from: files can be accessed from any device or place with an internet connection [1]; the
provider keeps extra copies, so it is a backup if a local device fails [1]; capacity is easy to increase [1]; no local
hardware to buy and maintain [1].
**(b)** Any two from: it needs an internet connection [1]; there may be ongoing costs such as a subscription [1];
there are security and privacy concerns because another company holds the data [1]; the company relies on the provider
[1].

**14.** **(a)** An embedded system [1]. **(b)** It has a dedicated function (cooking control), and its program is fixed,
often in ROM [1]; a laptop is a general-purpose computer that can run many different programs chosen by the user [1].

**15.** The hard disk drive is secondary storage, which is not directly accessible by the CPU [1]; the instructions must
first be copied into main memory (RAM), from which the CPU can fetch them [1].

**16.** The CPU puts the address of the instruction onto the address bus [1]; this tells main memory which location to
read, so that the instruction at that address can be sent to the CPU [1].

---

## Where marks are usually lost

- Saying that more cores always make a program faster, as in Question 6.
- Confusing the control unit with the ALU, as in Question 2.
- Describing RAM as non-volatile, or ROM as volatile.
- Not comparing with the other storage type in Question 11.
- Writing the stages of the fetch-execute cycle in the wrong order.
