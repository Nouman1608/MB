---
title: "Cambridge A Level Computer Science (9618): Purposes of an Operating System (OS) -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original 9618 practice questions with answers on process states, scheduling traces, the kernel, paging addresses, page replacement and disk thrashing."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Purposes of an operating system study guide](/resources/cambridge-a-level-computer-science-9618-purposes-of-an-operating-system-os/) · [Purposes of an operating system revision notes](/resources/cambridge-a-level-computer-science-9618-purposes-of-an-operating-system-os-revision-notes/)

---

## Section A

**1.** State **three** items of data stored in a process control block. **[3]**

**2.** A process is in the running state. It asks to read data from a disk. State the state it moves to, and the state it moves to when the read is complete. **[2]**

**3.** Explain why a process cannot move directly from the blocked state to the running state. **[2]**

**4.** Describe how spooling helps an operating system make the best use of a shared printer. **[2]**

**5.** Describe **two** ways in which the user interface hides the complexities of the hardware from the user. **[4]**

**6.** A paged memory system uses pages of 512 bytes. A process refers to logical address 1,300. The page table shows that the page holding this address is stored in frame 5.

**(a)** Calculate the page number and offset for this logical address. **[2]**

**(b)** Calculate the physical address. **[1]**

## Section B

**7.** Four processes arrive as follows. Times are in milliseconds.

| Process | Arrival time | Burst time |
|---|---|---|
| W | 0 | 6 |
| X | 2 | 2 |
| Y | 3 | 4 |
| Z | 5 | 1 |

The operating system uses **shortest remaining time**. If two processes have equal remaining time, the one that arrived first runs.

**(a)** Show the order in which the processes run, with start and end times. **[3]**

**(b)** Calculate the average waiting time. **[2]**

**8.** The same four processes from Question 7 are scheduled using **round robin** with a time slice of 3 ms. A process arriving during a time slice joins the queue before the pre-empted process rejoins it.

**(a)** Show the order in which the processes run, with start and end times. **[3]**

**(b)** Calculate the average waiting time. **[2]**

**(c)** Explain why round robin may be preferred for an interactive system even though its average waiting time is higher here. **[2]**

**9.** Describe how the kernel acts as an interrupt handler when a timer interrupt occurs in a round robin system. **[5]**

**10.** A process is given 3 page frames. It refers to pages in this order: 3, 1, 2, 3, 4, 3, 1, 5, 3, 2.

**(a)** Calculate the number of page faults using first in, first out (FIFO) replacement. **[2]**

**(b)** Calculate the number of page faults using least recently used (LRU) replacement. **[2]**

**(c)** Explain why LRU caused fewer page faults for this sequence. **[2]**

**11.** Explain how disk thrashing can occur in a system that uses virtual memory, and state **one** way to reduce it. **[4]**

**12.** Compare paging and segmentation as methods of memory management. **[4]**

---

## Answers

**1.** Any three: process identifier [1]; current state (running, ready or blocked) [1]; saved program counter [1]; saved register contents [1]; priority [1]; memory allocated to the process [1]; open files or I/O devices in use [1].

**2.** It moves to the **blocked** state while it waits for the read [1]. When the read is complete (signalled by an interrupt) it moves to the **ready** state [1].

**3.** When the event a blocked process is waiting for occurs, another process is already using the processor [1]. The blocked process must join the ready queue so that the scheduler can choose it fairly according to the scheduling routine [1].

**4.** Output for the printer is stored in a queue (spool) on disk, so each process can finish "printing" quickly and continue with other work [1]; the printer then prints the queued jobs one after another, so it is kept busy and processes do not wait for it [1].

**5.** Any two, 2 marks each (method plus how it hides the hardware):
- A GUI lets the user work with windows, icons and menus [1], so they do not deal with screen memory or device signals [1].
- Device drivers translate general requests into device-specific commands [1], so the user and programs do not need to know how each device works [1].
- The file system shows named files in folders [1], hiding where the data is stored on the disk [1].
- System calls give programs standard services such as opening a file [1], so programs work on different hardware without change [1].

**6. (a)** 1,300 DIV 512 = **page 2** [1]; 1,300 − 1,024 = **offset 276** [1].

**(b)** 5 × 512 + 276 = **2,836** [1].

**7. (a)** W 0–2; X 2–4 (X's 2 is less than W's remaining 4) [1]; W 4–5 (equal remaining time with Y, W arrived first); Z 5–6 (Z's 1 is less than W's remaining 3) [1]; W 6–9; Y 9–13 [1].

**(b)** Waiting = finish − arrival − burst: W 9 − 0 − 6 = 3; X 4 − 2 − 2 = 0; Y 13 − 3 − 4 = 6; Z 6 − 5 − 1 = 0 [1]. Average = 9 ÷ 4 = **2.25 ms** [1].

**8. (a)** W 0–3; X 3–5 (finishes) [1]; Y 5–8; W 8–11 (finishes) [1]; Z 11–12; Y 12–13 [1].

**(b)** Finish times W 11, X 5, Y 13, Z 12. Waits: W 11 − 0 − 6 = 5; X 5 − 2 − 2 = 1; Y 13 − 3 − 4 = 6; Z 12 − 5 − 1 = 6 [1]. Average = 18 ÷ 4 = **4.5 ms** [1].

**(c)** Every process gets the processor regularly, within a short time of arriving [1], so interactive users always get a quick response, even when a long process is running [1].

**9.** Any five, in order:
- The timer interrupt is detected at the end of the current fetch-execute cycle [1].
- The running process's program counter and register contents are saved in its PCB [1].
- The kernel identifies the source of the interrupt and runs the timer's interrupt service routine [1].
- The running process is moved from the running state to the ready state, at the back of the ready queue [1].
- The low-level scheduler selects the process at the front of the ready queue [1].
- That process's saved state is loaded from its PCB and it continues running [1].

**10. (a)** FIFO: faults at 3, 1, 2, 4 (removes 3), 3 (removes 1), 1 (removes 2), 5 (removes 4) and 2 (removes 3) [1]: **8 page faults** [1].

**(b)** LRU: faults at 3, 1, 2, 4 (removes 1), 1 (removes 2), 5 (removes 4) and 2 (removes 1) [1]: **7 page faults** [1].

**(c)** Page 3 is used repeatedly throughout the sequence [1]. LRU keeps it because it was used recently, whereas FIFO removes it at the fourth fault simply because it was loaded first, and it is needed again at once [1].

**11.** When there is not enough RAM for the pages that the running processes are actively using [1], a page that has just been removed is needed again almost at once [1]. Bringing it back removes another page that is also needed, so page faults happen continuously and the processor spends most of its time waiting for pages to be swapped rather than executing instructions [1]. Reduce it by any one of: running fewer processes; adding RAM; using a replacement method that keeps frequently used pages [1].

**12.** Any four, as paired points:
- Pages are a fixed size set by the system; segments are variable in size [1].
- Paging divides memory without regard to the program's structure; segments match logical parts of the program, such as a subroutine [1].
- Paging is invisible to the programmer; segmentation is visible [1].
- Paging uses a page table mapping pages to frames; segmentation uses a segment map table with each segment's start address and size [1].
- Paging wastes space in the last page of a process; segmentation leaves gaps between segments in memory [1].

---

## Where marks are usually lost

- Not stating the rule used for ties or for arrivals at the end of a time slice.
- Calculating waiting time as start − arrival for a process that runs more than once.
- Forgetting that the first loads into empty frames are page faults.
- Describing the interrupt routine without the saving and restoring of registers.
- Explaining thrashing without saying that the removed pages are needed again soon.
- Comparing paging and segmentation with points about only one of them.
