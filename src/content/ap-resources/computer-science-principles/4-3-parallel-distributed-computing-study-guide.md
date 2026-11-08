---
resourceId: "mb-ap-csp-4.3-study-guide"
title: "Parallel and Distributed Computing: Study Guide (Computer Science Principles 4.3)"
description: "Sequential, parallel and distributed computing, how to calculate run time and speedup, why the sequential portion limits the gain, and benefits and challenges, with two fully worked examples."
course: "computer-science-principles"
unit: 4
topics: ["4.3"]
resourceType: "study-guide"
prerequisites: 
  - "Topic 4.1 (networks)"
  - "Adding times and dividing totals by hand"
prerequisiteResources: ["mb-ap-csp-4.2-study-guide"]
learningObjectives: 
  - "Describe sequential, parallel and distributed computing"
  - "Calculate the time taken by a sequential solution and by a parallel solution, and compute the speedup"
  - "Explain why the sequential portion limits the benefit of adding more parallel processing"
  - "Describe benefits and challenges of parallel and distributed computing for large problems and data sets"
skills: ["1", "4", "5"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-4.3-revision-notes", "mb-ap-csp-4.3-practice", "mb-ap-csp-4.3-checklist"]
next: "mb-ap-csp-4.3-practice"
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "Sequential computing performs operations in order, one at a time; parallel computing breaks a program into parts, some of which run at the same time; distributed computing uses multiple devices to run a program."
  - "A sequential solution takes as long as the sum of its steps; a parallel solution takes as long as its sequential tasks plus the longest of its parallel tasks."
  - "Speedup is the time taken sequentially divided by the time taken in parallel."
  - "The sequential portion limits the efficiency of a parallel solution, so adding more parallel parts eventually stops helping."
  - "Distributed computing can solve problems too large for one computer in time or storage, and scales well, but needs coordination and communication."
faqs:
  - question: "How do I calculate the time for a parallel solution?"
    answer: "Add the times of the tasks that must run one after another (the sequential tasks), and for each group of tasks that run at the same time add only the longest one in the group."
  - question: "What is speedup?"
    answer: "The time the task took sequentially divided by the time it took in parallel. A speedup of 2 means the parallel solution took half as long."
  - question: "Why can't I just add more processors to make it as fast as I like?"
    answer: "The sequential portion cannot be split up. However many parallel parts you add, the program still needs at least the time of its sequential tasks, so at some point extra parallel parts stop meaningfully increasing efficiency."
  - question: "What is the difference between parallel and distributed computing?"
    answer: "Parallel computing runs parts of a program at the same time. Distributed computing uses multiple devices to run a program. Distributed computing is usually also parallel, and it lets you use many computers linked by a network."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "drafted"
---

## One at a time, or many at once?

Most programs you read are **sequential**: operations are performed **in order, one at a time**. A sequential solution takes as long as the **sum of all of its steps**. If a program has three steps of 10, 20 and 30 seconds, a sequential run takes 60 seconds.

Some problems are made of parts that do not depend on each other. Then the work can be shared. Two models are used:

- **Parallel computing**: the program is broken into multiple smaller sequential computing operations, **some of which are performed simultaneously**. A single computer with several processors, or a group of machines, can do this.
- **Distributed computing**: **multiple devices are used to run a program**. The devices are linked by a network, which is why this topic sits with Computer Systems and Networks.

Imagine marking 200 exam scripts. One marker does them one after another (sequential). Four markers each take 50 (parallel). If the markers work in different schools and send results over the Internet (distributed), they can even take part from different places. But everyone must wait for the **head examiner to write the summary report**, which can only be done *after* all the marking. That job cannot be shared.

## Calculating the time

A parallel solution has two kinds of tasks.

- **Sequential tasks**: they must run one after another (or must run alone).
- **Parallel tasks**: a group that can run at the same time on different processors.

**A parallel solution takes as long as its sequential tasks plus the longest of its parallel tasks.** If there are several groups of parallel tasks, add the longest of *each* group. The reason is that the group is finished only when its slowest member is finished; the shorter tasks run in the "gaps".

The **efficiency** of two solutions can be compared by comparing the time they take for the same job. The **speedup** of a parallel solution is

speedup = time taken sequentially ÷ time taken in parallel.

A speedup of 2 means the parallel solution took half as long; a speedup of 1 means no gain.

<figure>
<svg viewBox="0 0 640 290" role="img" aria-labelledby="par-title par-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="par-title">Sequential and parallel timelines for four tasks</title>
<desc id="par-desc">A timeline scaled at 4 pixels per second. The sequential row shows four tasks end to end: task 1 for 30 seconds, task 2 for 40, task 3 for 20 and task 4 for 50, totalling 140 seconds. The parallel row shows task 1 for 30 seconds first, then tasks 2, 3 and 4 on three separate processors at the same time, lasting 40, 20 and 50 seconds; the group ends when the longest, task 4, ends, at 80 seconds in total.</desc>
<rect x="0" y="0" width="640" height="290" fill="#ffffff"/>
<g fill="none" stroke="#1d2b44" stroke-width="2">
<rect x="40" y="30" width="120" height="34"/><rect x="160" y="30" width="160" height="34"/><rect x="320" y="30" width="80" height="34"/><rect x="400" y="30" width="200" height="34"/>
<rect x="40" y="130" width="120" height="34"/>
<rect x="160" y="110" width="160" height="24"/><rect x="160" y="138" width="80" height="24"/><rect x="160" y="166" width="200" height="24"/>
<line x1="40" y1="220" x2="600" y2="220"/>
</g>
<g stroke="#1d2b44" stroke-width="2"><line x1="40" y1="216" x2="40" y2="224"/><line x1="160" y1="216" x2="160" y2="224"/><line x1="360" y1="216" x2="360" y2="224"/><line x1="600" y1="216" x2="600" y2="224"/></g>
<g fill="#1d2b44" font-size="14" text-anchor="middle">
<text x="100" y="52">1 (30 s)</text><text x="240" y="52">2 (40 s)</text><text x="360" y="52">3 (20 s)</text><text x="500" y="52">4 (50 s)</text>
<text x="100" y="152">1 (30 s)</text><text x="240" y="127">2 (40 s)</text><text x="200" y="155">3 (20 s)</text><text x="260" y="183">4 (50 s)</text>
<text x="40" y="240">0</text><text x="160" y="240">30</text><text x="360" y="240">80</text><text x="600" y="240">140 seconds</text>
</g>
<g fill="#1d2b44" font-size="15" font-weight="bold"><text x="40" y="22">Sequential: 30 + 40 + 20 + 50 = 140 s</text><text x="40" y="104">Parallel: 30 + longest of (40, 20, 50) = 80 s</text></g>
<g fill="#1d2b44" font-size="13"><text x="40" y="275">Tasks 2, 3 and 4 run on three processors at the same time (stacked bars). Scale: 4 pixels per second.</text></g>
</svg>
<figcaption>Figure 1. The same four tasks run sequentially (140 seconds) and with tasks 2, 3 and 4 in parallel after task 1 (80 seconds). Speedup: 140 ÷ 80 = 1.75.</figcaption>
</figure>

## Why more processors do not mean unlimited speed

Parallel computing consists of a **parallel portion** and a **sequential portion**. Only the parallel portion can be shared out. When you add more processors, the parallel portion gets shorter but the sequential portion stays the same. So the total time can never be less than the sequential portion: **the efficiency of the solution is still limited by the sequential portion**. At some point, adding more parallel capacity **no longer meaningfully increases efficiency**. This is why the speedup in real systems is usually less than the number of processors.

## Benefits and challenges

**Benefits.**

- Parallel solutions can **scale more effectively** than sequential ones: when the amount of work doubles, adding processors can keep the time down.
- **Distributed computing** allows problems to be solved that could not be solved on a single computer because of the **processing time or storage** needed, and it lets **much larger problems** be solved quicker than on a single computer.

**Challenges.**

- The sequential portion limits the gain.
- Tasks must be split up and the results combined, which needs coordination.
- Distributed systems rely on a network, so communication takes time and devices or connections can fail (Topic 4.2).

## Worked example 1: sequential time, parallel time and speedup

**Scenario.** A fictional photo-processing job has four tasks: task 1 loads the images (30 s) and must run first; tasks 2, 3 and 4 then each process a different batch of photos (40 s, 20 s and 50 s) and can run at the same time on different processors; the job ends when all are done.

**Task.** Compute the sequential time, the parallel time and the speedup.

**Sequential time.** Add all: 30 + 40 + 20 + 50 = **140 seconds**.

**Parallel time.** Task 1 is a sequential task (30 s). Tasks 2, 3 and 4 form one parallel group; the group takes as long as its longest member, 50 s. So the time is 30 + 50 = **80 seconds**.

**Speedup.** 140 ÷ 80 = **1.75**. The parallel solution took about 57% of the time (80 ÷ 140 = 0.571).

**Check.** The parallel time cannot be less than the longest single task (50 s), nor less than 30 + 50 = 80, the sequential task plus the longest parallel task. Also note task 3 (20 s) finishes long before the others and its processor sits idle for 30 s: parallel solutions are not perfectly efficient.

## Worked example 2: the sequential portion sets a limit

**Scenario.** A fictional program takes 100 seconds when run sequentially. 20 seconds of it is a sequential portion that cannot be split. The other 80 seconds can be divided evenly among any number of processors.

**Task.** Find the time and speedup with 1, 2, 4, 8 and 80 processors, and the best speedup possible.

The parallel time with p processors is 20 + 80 ÷ p.

| Processors p | Time = 20 + 80 ÷ p | Speedup = 100 ÷ time |
|---|---|---|
| 1 | 100 s | 1.00 |
| 2 | 20 + 40 = 60 s | 1.67 |
| 4 | 20 + 20 = 40 s | 2.50 |
| 8 | 20 + 10 = 30 s | 3.33 |
| 80 | 20 + 1 = 21 s | 4.76 |

**Best possible.** Even with unlimited processors the parallel portion shrinks towards 0 but the 20 s remains: the time cannot go below 20 s, so the speedup cannot exceed 100 ÷ 20 = **5**.

**Interpretation.** Going from 1 to 2 processors saves 40 s. Going from 8 to 80 processors (ten times as many) saves only 9 s (30 down to 21). The gain per extra processor shrinks, so adding more parallel portions no longer meaningfully increases efficiency. To do better, the programmers must shrink the sequential portion.

**Check.** At p = 1 the formula gives 100 s, matching the sequential run, which confirms the model.

## Reading parallel timing questions

Questions about parallel computing are mostly careful reading. Begin by sorting the tasks into **sequential** (must run alone, or one after another) and **parallel groups** (independent and able to run at the same time). Draw a short timeline if it helps: tasks that run in sequence go end to end, and tasks that run together go in stacked rows. The time for a group is the length of its **longest** row.

Be careful when a task depends on another. If task C needs the results of tasks A and B, it cannot start until **both** are done, so it belongs after the parallel group, not inside it. Also check how many processors there are. If there are three tasks in a group but only two processors, the third has to wait for one of the first two, and the simple rule of taking the longest no longer applies; exam questions normally state that each task has its own processor, or give a timeline.

## Where distributed computing is used

A web search is answered by many servers, each holding part of the index, working on your query at the same time. A film studio renders the frames of an animated film on a farm of computers, each doing a different set of frames. Volunteer projects let thousands of home computers analyse small pieces of scientific data when they would otherwise be idle. In each case the problem is **too big for one computer** in time or storage, the work can be split into pieces that do not depend on each other, and a **small sequential part** (collecting and combining results) remains.

## Common misconceptions

- **"Parallel means the time is the total divided by the number of processors."** Only the parallel portion can be divided; the sequential tasks still take their full time, and the group takes as long as its longest task.
- **"Doubling processors doubles the speed."** The sequential portion limits the gain.
- **"Parallel and distributed are the same."** Parallel means parts run at the same time; distributed means multiple devices run a program.
- **"Add the times of the parallel tasks."** Add only the **longest** one in each parallel group.
- **"Speedup is parallel time divided by sequential time."** It is sequential time divided by parallel time.
- **"Distributed computing is only about speed."** It also solves problems too big for one computer's storage.
- **"A sequential program is bad."** Some problems cannot be split, and sequential programs are simpler and cheaper.

## Where this leads

This completes Big Idea 4. Unit 2 mentioned that large data sets may need parallel systems, and Unit 5 looks at how crowdsourcing and citizen science use many people's devices. Practise with the [practice questions](/advanced-course-resources/computer-science-principles/4-3-parallel-distributed-computing-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-principles/4-3-parallel-distributed-computing-revision-notes/), and check your skills on the [checklist](/advanced-course-resources/computer-science-principles/4-3-parallel-distributed-computing-checklist/). Then try the [Unit 4 diagnostic](/advanced-course-resources/computer-science-principles/unit-4-diagnostic/).
