---
title: "AQA A-Level Computer Science (7517): Hardware and software -- Practice Questions"
seoTitle: "AQA A-Level CS Hardware and Software Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of computer systems"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 6.1
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-computer-systems"
  - qualification: "a-level"
    topic: "fundamentals-of-computer-systems"
    subtopic: "hardware-and-software-7517"
description: "Original AQA 7517 section 4.6.1 questions with answers: hardware and software, system and application software, and the role of the operating system."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs, because examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Hardware and software study guide](/resources/aqa-a-level-computer-science-7517-hardware-and-software/) | [Hardware and software revision notes](/resources/aqa-a-level-computer-science-7517-hardware-and-software-revision-notes/)

---

## Section A

**1.** Define the term hardware. **[1]**

**2.** Define the term software. **[1]**

**3.** State what is meant by application software and give one example. **[2]**

**4.** Name three types of system software. **[3]**

**5.** State the purpose of a utility program and give one example. **[2]**

## Section B

**6.** For each program, state whether it is system software or application software.

**(a)** A compiler. **[1]**
**(b)** A spreadsheet. **[1]**
**(c)** A disk defragmenter. **[1]**
**(d)** An operating system. **[1]**

**7.** Explain the relationship between hardware and software. **[2]**

**8.** Explain what is meant by the statement that an operating system hides the complexity of the hardware, using an example. **[3]**

**9.** An operating system manages hardware resources among competing processes. For each resource, describe what the operating system does.

**(a)** The processor. **[2]**
**(b)** Main memory. **[2]**
**(c)** An input/output device such as a printer. **[2]**

**10.** Explain why a programmer might use a library rather than writing their own subroutines. **[3]**

**11.** A small company needs software to manage its customer orders. It can buy an off-the-shelf package or commission bespoke software. Compare the two options. **[4]**

**12.** Explain why a translator is needed for a program written in a high-level language. **[2]**

**13.** Describe the difference between a compiler and an interpreter. **[2]**

**14.** A user saves a document from a word processor to a disk. Describe how the word processor, the operating system and the hardware are each involved. **[4]**

**15.** Explain why an operating system needs to manage memory when several programs are running at the same time. **[3]**

**16.** A school replaces its printers with a different model. Explain why the word processing software does not need to be changed. **[2]**

---

## Answers

**1.** The physical components of a computer system (such as the processor, memory and devices) [1].

**2.** Programs and the associated data: the instructions that tell the hardware what to do [1].

**3.** Software that carries out tasks that the user wants to do [1]; any example, such as a word processor, spreadsheet, web browser or game [1].

**4.** Any three from: operating system; utility program; library; translator (compiler, assembler or interpreter) [3].

**5.** A utility program performs tasks that help to maintain, protect or manage the computer system [1]; any example, such as antivirus, disk defragmenter, backup or compression [1].

**6. (a)** System software [1].
**(b)** Application software [1].
**(c)** System software (a utility) [1].
**(d)** System software [1].

**7.** Hardware needs software because without instructions it cannot do anything useful [1]; software needs hardware because it can only be run (stored, loaded and executed) on physical components such as the processor and memory [1].

**8.** The operating system provides a simpler interface to the hardware, so that programs and users do not need to deal with the detailed workings of each device [1]; for example, a program asks the operating system to save a file [1], and the operating system uses a device driver to control the particular disk, so the program does not need to know which disk is installed [1].

**9. (a)** It decides which process uses the processor and for how long [1], so that all processes make progress and the processor is kept busy [1].
**(b)** It allocates areas of memory to each process [1], and ensures that one process does not use or overwrite the memory of another [1].
**(c)** It controls access to the device so that requests from different processes do not clash [1], for example by queuing print jobs in a buffer and serving them in order [1].

**10.** The subroutines have already been written, which saves development time [1]; they have been tested, so they are more likely to be correct and reliable [1]; they give consistent behaviour across different programs [1].

**11.** Off-the-shelf: cheaper [1], available immediately and already tested by many users [1]; but may not fit the company's needs exactly. Bespoke: written to fit the company's requirements exactly [1]; but it costs more and takes longer to develop [1]. (Four marks for two valid points on each option.)

**12.** The processor can execute only machine code [1]; a translator converts the high-level program into machine code (or a form that can be executed) [1].

**13.** A compiler translates the whole program into machine code before it is run [1]; an interpreter translates and executes the program one statement at a time [1].

**14.** The word processor (application software) asks the operating system to save the file [1]; the operating system manages the file system and decides where on the disk the data is stored [1]; it uses a device driver to give the disk the instructions it understands [1]; the disk hardware writes the data to its storage [1].

**15.** Each program needs its own area of main memory to hold its instructions and data [1]; the operating system allocates areas so that programs do not overlap [1]; without this one program could overwrite another's data, causing errors or crashes [1].

**16.** The word processor sends its request to the operating system and not directly to the printer [1]; the operating system uses a device driver for the new model, so only the driver needs to change and the complexity of the hardware is hidden from the application [1].

---

## Where marks are usually lost

- Classifying a compiler or a utility program as application software.
- Describing the operating system only as the interface and leaving out resource management.
- Giving definitions with no mention of "physical" for hardware or "instructions" for software.
- Listing features of off-the-shelf and bespoke software without comparing them.
- Confusing a compiler with an interpreter.
