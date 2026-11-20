---
title: "OxfordAQA A-Level Computer Science (9645): Software -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Software Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 6 – Computer systems"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 6.2
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "computer-systems-9645"
  - qualification: "a-level"
    topic: "computer-systems-9645"
    subtopic: "software-oxfordaqa-alevel-cs"
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.6.2 Software: system and application software, operating system functions, utilities and libraries."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and practice on this content. They are **not** reproduced past-paper questions, and they do **not** replicate the exam's exact structure, question count or mark tariffs -- examination boards hold copyright in their own papers. Use these alongside the official past papers from your board or school.

These questions practise sub-topic **3.6.2 Software** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: system and application software, the operating system (hiding hardware complexity, scheduling, memory allocation, I/O device management and interrupt handling), utility programs, libraries and translators. Use 1 GiB = 1,024 MiB.

Related pages: [software study guide](/resources/oxfordaqa-a-level-computer-science-9645-software/) · [software revision notes](/resources/oxfordaqa-a-level-computer-science-9645-software-revision-notes/)

## Section A

**1.** Explain what is meant by system software and by application software. **[2]**

**2.** Classify each item as system software or application software. **[4]**

**(a)** a spreadsheet package
**(b)** a virus checker
**(c)** a compiler
**(d)** a web browser

**3.** Give **two** examples of utility programs and state the purpose of each. **[4]**

## Section B

**4.** Explain what is meant by the operating system hiding the complexity of the hardware. Use an example. **[3]**

**5.** Three processes are run by a round robin scheduler with a time slice of 2 ms. Process X needs 5 ms of processor time, Y needs 3 ms and Z needs 4 ms. They join the queue in the order X, Y, Z.

**(a)** Complete the sequence of time slices, giving the process running and its start and end times. **[4]**
**(b)** State the time at which each process finishes. **[2]**
**(c)** Explain why round robin scheduling makes the computer seem to run several programs at once. **[2]**

**6.** A computer has 2 GiB of main memory. The operating system allocates 512 MiB to itself, 640 MiB to a browser and 300 MiB to a music player.

**(a)** Calculate the amount of main memory still free, in MiB. **[3]**
**(b)** Describe what the operating system does with a process's memory when the process ends. **[1]**
**(c)** Explain why the operating system prevents one process from using another process's memory. **[2]**

**7.** Several users send documents to the same printer at the same time. Describe how the operating system manages this. **[3]**

**8.** A user presses a key while a spreadsheet is recalculating.

**(a)** State what is meant by an interrupt. **[1]**
**(b)** Describe the sequence of events the operating system carries out. **[3]**
**(c)** Explain one advantage of interrupts over the processor repeatedly checking the keyboard. **[1]**

**9.** A programmer writes a game and wants to find square roots, generate random numbers and draw shapes without writing the code from scratch.

**(a)** State what the programmer should use. **[1]**
**(b)** Give **two** advantages of this approach. **[2]**

**10.** A 250 MiB folder is compressed by a compression program to 80 MiB.

**(a)** State what kind of software a compression program is. **[1]**
**(b)** Calculate the percentage saving in size. **[2]**

## Answers

**1.** System software manages and controls the computer and supports other software [1]; application software lets the user perform a task for its own sake [1]. **[2]**

**2. (a)** Application [1] **(b)** System (utility) [1] **(c)** System (translator) [1] **(d)** Application [1] **[4]**

**3.** Any two examples, each with a purpose [2 each: example [1]; purpose [1]]. Examples: virus checker (finds and removes malicious software); compression program (reduces file sizes); backup software (copies files so they can be recovered); defragmenter or clean-up tool (tidies storage). **[4]**

**4.** The OS provides a **simple interface** so that programs and users do not need to deal with the details of the hardware [1]. Example: when a program saves a file, it makes one request to the OS [1], and the OS deals with which drive and how the device is controlled, so the program does not need to know the type of storage device [1]. **[3]**

**5. (a)**

| Slot | Process | Start (ms) | End (ms) |
|---|---|---|---|
| 1 | X | 0 | 2 |
| 2 | Y | 2 | 4 |
| 3 | Z | 4 | 6 |
| 4 | X | 6 | 8 |
| 5 | Y | 8 | 9 |
| 6 | Z | 9 | 11 |
| 7 | X | 11 | 12 |

Slots 1 to 3 correct [1]; slots 4 to 5 correct [1]; slot 6 correct [1]; slot 7 correct [1]. **[4]**
**(b)** Y finishes at **9 ms**, Z at **11 ms**, X at **12 ms** [2: all three [2]; two [1]]. **[2]**
**(c)** The processor **switches between processes** very quickly, giving each a short time slice [1], so each seems to make progress continuously, although only one is executing at any instant [1]. **[2]**

**6. (a)** 2 GiB = 2,048 MiB [1]; allocated 512 + 640 + 300 = 1,452 MiB [1]; free = 2,048 − 1,452 = **596 MiB** [1]. **[3]**
**(b)** The OS **frees** the memory so it can be allocated to other processes [1]. **[1]**
**(c)** Any two [1 each]: so that a faulty process cannot **corrupt** another's data or instructions; so that one program cannot **read** another's private data; to keep the system **stable and secure**. **[2]**

**7.** The OS places each job in a **queue** (spooler) [1], sends the jobs to the printer **one at a time** using the printer's **driver** [1], so programs can carry on running without waiting for the slow printer [1]. **[3]**

**8. (a)** A signal that tells the processor something needs **immediate attention** [1]. **[1]**
**(b)** The processor suspends the current task and **saves its state** [1]; the OS runs the **interrupt handler** for the key press (reads the key) [1]; the saved task then **resumes** [1]. **[3]**
**(c)** The processor does not waste time **polling** the keyboard, and can do useful work until something needs attention [1]. **[1]**

**9. (a)** A **library** (such as a mathematics library and a graphics library) [1]. **[1]**
**(b)** Any two [1 each]: saves development time; code is already **tested**, so fewer errors; the programmer does not need to know how the routines work; provides a standard way to do common tasks. **[2]**

**10. (a)** A **utility program** (system software) [1]. **[1]**
**(b)** Saving = 250 − 80 = 170 MiB [1]; 170 ÷ 250 × 100 = **68%** [1]. **[2]**

## Frequently asked questions

**Do I need to know about virtual memory?**
No. The specification says students only need to understand how main memory is allocated.

**Is a library the same as a translator?**
No. A library supplies pre-written code that programmers use; a translator converts a program from one language to another.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.6.2 Software.
