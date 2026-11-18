---
title: "Cambridge A Level Computer Science (9618): Purposes of an Operating System (OS) -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed 9618 notes on OS resource use, hiding hardware, process states, scheduling, the kernel, paging, segmentation, page replacement and thrashing."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense section 16.1 "Purposes of an Operating System (OS)" of Cambridge International AS & A Level Computer Science 9618: maximising resource use, how the user interface hides the hardware, process management (states, scheduling routines, the kernel as interrupt handler) and memory management (virtual memory, paging, segmentation, page replacement, disk thrashing). It is assessed in Paper 3.

Related: [Purposes of an operating system study guide](/resources/cambridge-a-level-computer-science-9618-purposes-of-an-operating-system-os/) · [Purposes of an operating system practice questions](/resources/cambridge-a-level-computer-science-9618-purposes-of-an-operating-system-os-practice/) · [Topic 16 System Software revision notes](/resources/a-level-computer-science-system-software-a-level-revision-notes/)

## Key terms

| Term | Meaning |
|---|---|
| Process | A program being executed, with its current state |
| Multi-tasking | Several processes in memory, the processor switched rapidly between them |
| Process control block (PCB) | Record of a process: ID, state, saved registers and program counter, priority, memory and file details |
| Context switch | Saving one process's state and loading another's |
| Pre-emptive | The OS can remove the processor from a running process |
| Kernel | Core of the OS, resident in memory, handles interrupts and scheduling |
| Low-level scheduler | Chooses which ready process gets the processor next |
| Virtual memory | Secondary storage used as an extension of RAM |
| Page / page frame | Fixed-size block of logical memory / of physical memory |
| Page table | Maps each page to its frame, or shows it is on disk |
| Segment | Variable-size block matching a logical part of a program |
| Page fault | A reference to a page not currently in RAM |
| Disk thrashing | Continuous swapping of pages that are still needed, so little useful work is done |

## Maximising resource use

- **Processor**: blocked processes give up the processor; another ready process runs.
- **Memory**: allocated and reclaimed as needed; virtual memory keeps more processes resident.
- **I/O**: interrupts instead of repeated checking; buffers; spooling to a disk queue for shared devices such as printers.
- **Storage**: the file system allocates and reuses blocks.

**Core reason**: the processor is much faster than I/O, so it should never wait if other work is ready.

## Hiding the hardware

GUI (windows, icons, menus) · device drivers (general request → device commands) · file system (named files and folders, not disk blocks) · system calls / API (standard services on any hardware).

## Process states

| From → To | Caused by |
|---|---|
| Ready → Running | Scheduler selects the process |
| Running → Ready | Time slice ends (timer interrupt) or pre-emption |
| Running → Blocked | Process requests I/O or waits for an event |
| Blocked → Ready | Event completes (interrupt) |

Never Blocked → Running.

## Scheduling routines

| Routine | Pre-emptive? | Rule | Benefit | Drawback |
|---|---|---|---|---|
| FCFS | No | Order of arrival | Simple, no starvation | Short jobs wait behind long ones |
| SJF | No | Shortest burst next | Low average wait | Needs burst times; long jobs may starve |
| SRT | Yes | Least remaining time runs | Lowest average wait; short jobs finish fast | Many switches; needs estimates; starvation |
| Round robin | Yes | Fixed time slice in turn | Good response time; fair | Switching overhead; higher average wait |

**Formulas**: turnaround = finish − arrival; waiting = turnaround − burst.

**Round robin rule to state**: a process arriving during a slice joins the queue before the pre-empted process rejoins it.

## Kernel as interrupt handler

Interrupt detected at end of cycle → save registers into PCB → identify source, run service routine → update states (timer: running → ready; I/O done: blocked → ready) → low-level scheduler picks next process → restore its registers.

## Paging and segmentation

| | Paging | Segmentation |
|---|---|---|
| Block size | Fixed | Variable |
| Based on | Physical memory division | Logical parts of the program |
| Programmer sees it? | No | Yes |
| Table | Page table (page → frame) | Segment map table (start address, size) |
| Waste | Unused space in the last page | Gaps between segments |

**Address translation (paging)**: page number = logical address DIV page size; offset = logical address MOD page size; physical address = frame × page size + offset.

## Page replacement

- Triggered by a **page fault with no free frame**.
- **FIFO**: remove the page loaded longest ago.
- **LRU**: remove the page not used for the longest time.
- A changed page is written back to disk before its frame is reused.

**Counting faults**: draw one column per reference showing frame contents; mark F for each fault; first loads into empty frames count as faults.

## Disk thrashing chain

Pages in active use do not all fit in RAM → a page is removed → it is needed again almost at once → bringing it back removes another needed page → continual page faults → disk busy, processor waiting, little useful work. **Reduce** by running fewer processes, adding RAM, or keeping frequently used pages.

## Exam traps

- Blocked → Running given as a transition.
- SRT treated as non-pre-emptive, or SJF as pre-emptive.
- "Round robin gives the lowest average waiting time."
- Virtual memory confused with virtual machines.
- Thrashing described without the "needed again soon" idea.
- First page loads not counted as page faults.

## Self-test

1. What does a PCB store?
2. Which interrupt moves a process from running to ready in round robin?
3. Which transition happens when a file read finishes?
4. Name the two pre-emptive routines in the syllabus.
5. Give one drawback of shortest job first.
6. A process arrives at 2, needs 5 ms and finishes at 12. What is its waiting time?
7. Give two ways the user interface hides the hardware.
8. What is spooling?
9. Pages are 2,048 bytes. Which page and offset does logical address 5,000 refer to?
10. State one difference between paging and segmentation.
11. When does a page need to be written back to disk on replacement?
12. Give two ways to reduce disk thrashing.

### Answers

1. Process ID, state, saved program counter and registers, priority, memory allocation and open files.
2. The timer interrupt at the end of the time slice.
3. Blocked → Ready.
4. Round robin and shortest remaining time.
5. Any one: needs burst times in advance; long jobs may wait indefinitely (starve); a short job arriving just after a long job starts must wait.
6. Turnaround 12 − 2 = 10; waiting 10 − 5 = 5 ms.
7. Any two: GUI; device drivers; file system with named files and folders; system calls.
8. Output for a shared device is stored in a queue on disk and sent to the device in turn, so processes do not wait for it.
9. 5,000 DIV 2,048 = 2, remainder 904: page 2, offset 904.
10. Any one: pages are fixed size, segments variable; pages are invisible to the programmer, segments follow program structure.
11. When it has been changed since it was loaded.
12. Any two: run fewer processes; add RAM; use a replacement method that keeps frequently used pages.
