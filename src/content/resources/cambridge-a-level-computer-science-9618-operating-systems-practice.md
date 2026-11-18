---
title: "Cambridge A Level Computer Science (9618): Operating Systems -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 5 – System Software"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 5.1
syllabusTopics:
  - qualification: "a-level"
    topic: "system-software"
    subtopic: "operating-systems"
description: "Original questions with mark-scheme answers on Cambridge 9618 section 5.1: the need for an OS, management tasks, utility software, program libraries and DLLs."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers available from your board.

These questions practise section 5.1 Operating Systems of the Cambridge International AS & A Level Computer Science (9618) syllabus for 2026: why a computer needs an operating system, its key management tasks, typical utility software and program libraries. Revise first with the [operating systems study guide](/resources/cambridge-a-level-computer-science-9618-operating-systems/) and the [operating systems revision notes](/resources/cambridge-a-level-computer-science-9618-operating-systems-revision-notes/).

## Section A

**1.** Explain **two** reasons why a computer system requires an operating system. **[4]**

**2.** Describe **two** tasks the operating system carries out as part of file management. **[2]**

**3.** State the purpose of a device driver. **[1]**

**4.** Explain why the operating system must protect the memory used by each process. **[2]**

**5.** State **two** ways in which the operating system provides security management. **[2]**

**6.** Describe the purpose of disk repair software. **[2]**

**7.** A user's laptop has a magnetic hard disk that has become slow to open files. Explain how defragmentation software could help. **[3]**

## Section B

**8.** A small design company has ten computers on a network. Several staff often print at the same time to one shared printer. Explain how the operating system's hardware management allows this to work. **[3]**

**9.** A student says, "The operating system lets me play music, write an essay and download a file all at once." Explain how process management makes this possible. **[3]**

**10.** The company in question 8 keeps all its client designs on one server.

**(a)** Explain why it should use back-up software. **[2]**

**(b)** Explain why it should use a virus checker. **[2]**

**11.** Explain the difference between a disk formatter and file compression software. **[2]**

**12.** A developer is writing an image-editing application.

**(a)** Explain **two** benefits to the developer of using routines from a program library. **[4]**

**(b)** The developer decides to use DLL files. Explain **one** benefit and **one** drawback of this decision. **[4]**

## Answers

**1.** Any two reasons, each explained, two marks each [4]: it provides a user interface, so users can run programs and manage files without understanding the hardware; it provides a platform of standard services, such as opening files or printing, so application programmers do not need to write code that controls the hardware directly; it manages resources such as processor time, memory and devices, so several programs can share them safely; it hides the complexity of the hardware behind simpler operations. **[4]**

**2.** Any two, one mark each [2]: provides a directory structure for organising files; allows files to be created, opened, saved, copied, moved, renamed and deleted; keeps track of where each file is stored and which space is free; applies access rights to files and folders. **[2]**

**3.** To translate the operating system's general commands into the specific instructions that a particular hardware device understands [1]. **[1]**

**4.** If one process could write to another's memory, it could corrupt that program's data or instructions and make it crash [1]; protection also stops a faulty or malicious program reading other programs' data or damaging the operating system itself [1]. **[2]**

**5.** Any two, one mark each [2]: user accounts with passwords or other authentication; access rights for files and folders; installing security updates; a firewall controlling network traffic; logs of log-ins and access attempts. **[2]**

**6.** It checks the disk for errors, such as bad sectors, and marks them so they are not used [1]; it repairs errors in the file system so that files remain accessible and data is not lost [1]. **[2]**

**7.** Over time, files have been split into pieces stored in separate places on the disk [1], so the read/write head must move many times to read one file [1]; defragmentation moves the pieces of each file into contiguous blocks, so files can be read with fewer head movements and open faster [1]. **[3]**

**8.** The operating system uses a printer driver to send each document in a form the printer understands [1]. Documents are placed in a print queue and held in a buffer or on disk, so staff can carry on working while they wait [1]. The printer signals with interrupts when it is ready for more data or has a problem, such as running out of paper, and the OS sends the next document in the queue [1]. **[3]**

**9.** The operating system schedules the processes, giving each one a short time on the processor in turn [1]; it switches between them so quickly that they appear to run at the same time [1]; it allocates each process its own memory and resources and keeps them separate, so one cannot interfere with another [1]. **[3]**

**10. (a)** Designs could be lost through hardware failure, accidental deletion or malware [1]; back-up software copies them regularly to another device or location, so they can be restored and work is not lost [1].

**(b)** Malware could corrupt, delete or steal the client designs and spread across the network to all ten computers [1]; a virus checker scans files for known signatures and suspicious behaviour and quarantines or deletes infected files [1]. **[4]**

**11.** A disk formatter prepares a storage device for use by setting up a file system, erasing any data already on it [1]; file compression software reduces the size of individual files to save space or transmission time, and the files can be restored when needed [1]. **[2]**

**12. (a)** Any two benefits, each explained, two marks each [4]: the routines are already written, so the developer saves time and can release the application sooner; the routines have already been tested, so they are likely to be reliable and the developer spends less time debugging; routines written by specialists, such as image filters, may be more efficient than the developer could write; complex features become possible without the developer needing specialist knowledge.

**(b)** Benefit [2]: the DLL is linked at run time, not copied into the executable, so the application file is smaller; or the DLL can be updated to fix a bug without rebuilding the application; or one copy in memory can be shared with other programs. One mark for the benefit, one for explaining it. Drawback [2]: if the DLL is missing, deleted or replaced by an incompatible version, the application will fail to run or will behave incorrectly. One mark for the drawback, one for explaining it. **[8]**

## Where marks are usually lost

- Naming a management task without describing what the OS does.
- Confusing a device driver with the device.
- Saying defragmentation deletes files or frees space.
- Describing a virus checker as preventing every virus.
- Giving benefits of libraries that are not linked to the developer.
- Listing DLL benefits but forgetting the drawbacks when asked for both.
