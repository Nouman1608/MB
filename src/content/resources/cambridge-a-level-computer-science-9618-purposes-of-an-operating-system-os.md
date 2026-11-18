---
title: "Cambridge A Level Computer Science (9618): Purposes of an Operating System (OS)"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 16: System Software"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "A"
order: 16.1
syllabusTopics:
  - qualification: "a-level"
    topic: "a-system-software"
    subtopic: "purposes-of-an-operating-system-os"
description: "Study guide to 9618 section 16.1: resource use, hiding hardware, process states, scheduling traces, the kernel and interrupts, paging, page replacement and thrashing."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 16.1 of Cambridge International AS & A Level Computer Science 9618 asks you to "show understanding of how an OS can maximise the use of resources", to "describe the ways in which the user interface hides the complexities of the hardware from the user", and to show understanding of "process management" and of "virtual memory, paging and segmentation for memory management". The notes and guidance list the detail: the process states running, ready and blocked; the four scheduling routines (round robin, shortest job first, first come first served, shortest remaining time); how the kernel acts as an interrupt handler for low-level scheduling; the difference between paging and segmentation; how pages can be replaced; and how disk thrashing can occur. It is A Level content, assessed in Paper 3.

Related: [Purposes of an operating system revision notes](/resources/cambridge-a-level-computer-science-9618-purposes-of-an-operating-system-os-revision-notes/) · [Purposes of an operating system practice questions](/resources/cambridge-a-level-computer-science-9618-purposes-of-an-operating-system-os-practice/) · [Topic 16 System Software study guide](/resources/a-level-computer-science-system-software-a-level/)

## Maximising the use of resources

The resources are the processor, main memory, secondary storage and input/output devices. The OS aims to keep each one doing useful work as much of the time as possible.

- **Processor time.** A process waiting for a slow device does not keep the processor. It is moved to the blocked state and another ready process runs. The processor is idle only when no process is ready.
- **Main memory.** Memory is allocated to a process when it needs it and reclaimed when it ends. With virtual memory, only the pages a process is using need to be in RAM, so more processes can be resident at once and the processor is more likely to have a ready process.
- **Input/output devices.** Devices signal completion with interrupts, so the processor does not waste time repeatedly checking them. **Buffers** let data be transferred in blocks while the processor does other work. **Spooling** sends output for a shared device such as a printer to a queue on disk, so several processes can "print" at once and the printer works through the queue.
- **Secondary storage.** The file system allocates blocks to files and reuses freed blocks.

The common thread is the speed gap: the processor is far faster than I/O, so it should never wait for a device while other work is available.

## How the user interface hides the hardware

The user and the application programmer see an abstract machine, not the hardware:

- A **graphical user interface** presents windows, icons and menus; the user never deals with screen memory or device signals.
- **Device drivers** translate general requests ("print this page") into the commands a particular device understands. A new printer needs only a new driver, not changes to every program.
- The **file system** presents named files in folders. The user does not know which disk blocks hold a file, or whether they are contiguous.
- **System calls** (an application programming interface) give programs standard services, such as opening a file or allocating memory, so the same program works on different hardware.

## Process management

A **process** is a program in execution, together with its current state. **Multi-tasking** means several processes are in memory at the same time and the OS switches the processor between them so rapidly that they appear to run simultaneously.

For each process the OS keeps a **process control block (PCB)**, holding its identifier, its current state, the saved program counter and register contents, its priority, and details of its memory allocation and open files. Switching processes means saving one PCB and loading another, which is called a context switch.

The three states and their transitions:

- **Ready → Running**: the low-level scheduler gives this process the processor.
- **Running → Ready**: its time slice ends (a timer interrupt) or it is pre-empted by another process.
- **Running → Blocked**: it requests I/O or waits for some other event.
- **Blocked → Ready**: the event happens, signalled by an interrupt.

There is no direct Blocked → Running transition: a process whose event has occurred must wait in the ready queue like any other.

## Scheduling routines in action

**Pre-emptive** routines can take the processor away from a running process (round robin, shortest remaining time). **Non-pre-emptive** routines let a process run until it finishes or blocks (first come first served, shortest job first).

### Worked example 1: SRT and round robin

*Four processes (times in milliseconds):*

| Process | Arrival time | Burst time |
|---|---|---|
| A | 0 | 5 |
| B | 1 | 3 |
| C | 2 | 8 |
| D | 3 | 2 |

**Shortest remaining time.** At 0 only A is present, so A runs. At 1, B arrives needing 3, less than A's remaining 4, so B pre-empts A. At 3, D arrives needing 2, but B has only 1 left, so B continues and finishes at 4. D (2) now beats A (4), so D runs 4 to 6, then A 6 to 10, then C 10 to 18.

| Time | 0–1 | 1–4 | 4–6 | 6–10 | 10–18 |
|---|---|---|---|---|---|
| Running | A | B | D | A | C |

Waiting time = finish − arrival − burst: A 10 − 0 − 5 = 5; B 4 − 1 − 3 = 0; D 6 − 3 − 2 = 1; C 18 − 2 − 8 = 8. Average **3.5 ms**.

**Round robin, time slice 2.** A process arriving during a slice joins the back of the queue before the pre-empted process rejoins.

| Time | 0–2 | 2–4 | 4–6 | 6–8 | 8–10 | 10–11 | 11–13 | 13–14 | 14–18 |
|---|---|---|---|---|---|---|---|---|---|
| Running | A | B | C | A | D | B | C | A | C |

Finish times: D 10, B 11, A 14, C 18. Waits: A 9, B 7, C 8, D 5. Average **7.25 ms**.

For the same data, first come first served averages 5.75 ms and shortest job first 4 ms. Round robin has the highest average wait here, yet no process waited more than 5 ms for its first turn, whereas under first come first served D waited 13 ms. That is its real benefit: good **response time** for interactive users, not low average waiting time.

## The kernel as interrupt handler

The **kernel** is the part of the OS that stays resident in memory and controls the processor. When an interrupt occurs:

1. At the end of the current fetch-execute cycle, the processor detects the interrupt.
2. The contents of the program counter and other registers are saved in the running process's PCB.
3. The kernel identifies the source of the interrupt and runs the matching interrupt service routine.
4. The kernel updates process states: for a timer interrupt, the running process goes back to ready; for an I/O interrupt, the waiting process moves from blocked to ready.
5. The **low-level scheduler** chooses which ready process runs next, using the scheduling routine.
6. That process's saved registers are loaded from its PCB and it continues.

So interrupts are the mechanism that makes pre-emptive scheduling and blocking possible.

## Virtual memory, paging and segmentation

**Virtual memory** makes secondary storage act as an extension of main memory: each process has a logical address space that can be larger than the RAM available to it.

In **paging**, logical memory is divided into fixed-size **pages** and RAM into **page frames** of the same size. The page table records which frame holds each page, or that it is on disk.

*Invented illustration: pages are 1,024 bytes. A process uses logical address 3,100. 3,100 ÷ 1,024 = 3 remainder 28, so this is page 3, offset 28. If the page table shows page 3 is in frame 7, the physical address is 7 × 1,024 + 28 = 7,196.*

In **segmentation**, a process is divided into variable-size **segments** that match logical parts of the program, such as a subroutine or a data area. A segment map table stores each segment's start address and size. Paging is invisible to the programmer and causes waste inside the last page of a process; segmentation follows the program's structure and leaves gaps between segments in memory.

### How pages are replaced: worked example 2

When a process refers to a page not in RAM, a **page fault** occurs. If no frame is free, a page must be removed. Here a process has 3 frames and refers to pages in the order 1, 2, 3, 1, 4, 1, 5, 1, 2, 1.

- **First in, first out (FIFO)** removes the page that has been in memory longest. Faults occur at 1, 2, 3, then 4 (removes 1), 1 (removes 2), 5 (removes 3) and 2 (removes 4): **7 page faults**.
- **Least recently used (LRU)** removes the page not used for the longest time. Faults at 1, 2, 3, then 4 (removes 2), 5 (removes 3) and 2 (removes 4): **6 page faults**. Page 1 is used often, so LRU keeps it, whereas FIFO removes it because it arrived first.

A removed page that has been changed must be written back to disk before its frame is reused.

### How disk thrashing occurs

If the pages that the running processes actively use cannot all fit in RAM, a page that has just been removed is needed again almost at once. Bringing it back forces out another page that is also about to be used, so page faults follow one another continuously. The disk is kept busy swapping, the processor waits, and little useful work is done. Thrashing is reduced by running fewer processes, adding RAM, or using a replacement method that keeps frequently used pages.

## Common mistakes

- Writing that a process moves from blocked straight to running.
- Saying round robin gives the lowest average waiting time; its strength is response time.
- Forgetting that SRT is pre-emptive and SJF is not.
- Confusing virtual memory with a virtual machine.
- Mixing up pages (fixed size) and segments (variable size).

## Exam technique

- **Complete** a scheduling table: one row per time unit or a timeline, and state your rule for simultaneous arrivals.
- **Calculate** waiting time as finish − arrival − burst; show each process before the average.
- **Explain** a transition: name the event that causes it (timer interrupt, I/O request, I/O complete).
- **Describe** page replacement: say what triggers it (a page fault with no free frame), which page goes, and what happens to a changed page.
- **Explain** thrashing as a cause-and-effect chain: too little RAM → page needed soon after removal → continual swapping → processor waits.
