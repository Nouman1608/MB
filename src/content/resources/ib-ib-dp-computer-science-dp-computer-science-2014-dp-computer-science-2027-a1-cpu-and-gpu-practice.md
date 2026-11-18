---
title: "IB DP Computer Science (DP Computer Science): CPU and GPU Differences (HL) -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["ib"]
topic: "A.1 -- Computer fundamentals"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Computer Science"]
syllabusSeries: "First assessment 2027"
order: 1.11
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-computer-science-theme-a"
    subtopic: "ib-dp-computer-science-a-1"
description: "Twelve original HL questions on CPU and GPU differences for IB DP Computer Science A.1, from definitions to scenario evaluation, with mark-scheme answers."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-18: Written from the public subject brief and the A1.1.3 label (CPU and GPU differences, HL only); please check the questions and mark allocations against the full DP Computer Science guide."
publishedDate: 2026-11-18
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- the IB holds copyright in its own papers. Use these alongside
> the official past papers available through your school or the IB store.

These questions cover **A1.1.3, the differences between the CPU and the GPU** (HL only), inside A.1
Computer fundamentals. Related: [CPU and GPU differences study guide](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-a1-cpu-and-gpu/),
[revision notes](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-a1-cpu-and-gpu-revision-notes/)
and the wider [A.1 Computer fundamentals practice questions](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-1-practice/).

## Section A

**1.** Define the term *throughput*. **[1]**

**2.** State **two** differences between the cores of a CPU and the cores of a GPU. **[2]**

**3.** Identify which processor is better suited to each task, giving a reason in each case.
**(a)** Running the scheduler of an operating system.
**(b)** Converting every frame of a video from colour to greyscale. **[4]**

**4.** Outline why a GPU performs poorly on code containing many IF statements whose outcome differs
from one data item to the next. **[2]**

**5.** Distinguish between a discrete GPU and an integrated GPU. **[2]**

**6.** A GPU has 1536 cores. Using a simplified model in which each core processes one independent
item per step, calculate the number of steps needed to process 40,000 items. Show your working.
**[2]**

## Section B

**7.** Explain why a CPU is designed with large caches and branch prediction rather than a very large
number of cores. **[4]**

**8.** A scientist runs a weather simulation. The region is divided into a grid of 4 million cells.
In each time step, every cell's new temperature is calculated from the current temperatures of its
neighbours using the same formula. After each time step, the program checks the results and decides
whether to stop.
**(a)** Explain why the temperature calculation in each time step is well suited to a GPU. **[3]**
**(b)** Explain why the time steps themselves cannot be run in parallel. **[2]**
**(c)** Identify which part of the program should run on the CPU, and justify your answer. **[2]**

**9.** Describe the sequence of events when a program running on the CPU offloads a task to a
discrete GPU. **[4]**

**10.** A photo app on a phone applies a filter to a single small thumbnail image. A developer
notices that sending the work to the GPU is slower than doing it on the CPU. Suggest **two** reasons
for this. **[2]**

**11.** Compare and contrast the CPU and the GPU in terms of design aim, number and complexity of
cores, and memory. **[6]**

**12.** A school's case study describes a plan to buy powerful GPUs for every computer in its
library, which students use for word processing, web browsing and email. Evaluate this plan. **[6]**

---

## Answers

**1.** The amount of work (for example, number of operations or data items processed) completed per
unit of time [1].

**2.** Any two, [1] each: a CPU has few cores, a GPU has many (hundreds or thousands); CPU cores are
complex, GPU cores are simple; CPU cores each run their own instruction stream, GPU cores in a group
run the same instruction on different data; CPU cores usually run at a higher clock speed. Maximum 2.

**3. (a)** CPU [1]; scheduling is varied, decision-heavy, sequential work that must respond quickly to
events [1].
**(b)** GPU [1]; the same calculation is applied independently to every pixel of every frame, so it
can be done in parallel across many cores [1].

**4.** Cores in a GPU group execute the same instruction together [1]; when items take different
branches, the paths must be run one after the other with some cores idle, reducing the speed-up
[1].

**5.** A discrete GPU is a separate component with its own dedicated memory, joined to the CPU by a
bus [1]; an integrated GPU is on the same chip as the CPU and shares main memory with it [1].

**6.** 40,000 ÷ 1536 = 26.04... [1]; a part-step cannot happen, so 27 steps [1].

**7.** One mark per point, up to 4:
- A CPU's aim is low latency: finishing one stream of instructions quickly [1].
- Most general-purpose programs are sequential and full of branches, so extra cores would often sit
  idle [1].
- Branch prediction lets the CPU keep fetching and executing instructions without waiting to learn
  the outcome of each branch [1].
- Large caches keep frequently used data close to the CPU, reducing time spent waiting for RAM [1].
- Spending chip area on these features makes each core fast at varied work, at the cost of fitting
  fewer cores [1].
Maximum 4.

**8. (a)** One mark per point, up to 3: the same formula is applied to every cell [1]; within one
time step each cell's calculation uses only current values, so the cells are independent of each
other [1]; 4 million cells can be divided across the GPU's many cores and processed at the same time
[1]; the GPU's high memory bandwidth suits reading the large grid [1]. Maximum 3.
**(b)** Each time step needs the results of the previous time step [1], so step *n* + 1 cannot start
until step *n* has finished (a sequential dependency) [1].
**(c)** The check that decides whether to stop (and the overall control of the loop) [1], because it
is a single decision based on the results, which is sequential, branching work suited to the CPU
[1].

**9.** One mark per step, in a sensible order, up to 4:
- The CPU prepares the data in main memory [1].
- The data is copied from main memory to the GPU's memory [1].
- The CPU sends the GPU the program (kernel) to run on each item and starts it [1].
- The GPU executes the kernel on many items in parallel [1].
- The results are copied back to main memory for the CPU to use [1].
Maximum 4.

**10.** Any two, [1] each: the thumbnail has too few pixels for parallelism to give a large saving;
the time to transfer data to and from the GPU outweighs the time saved; starting the GPU task has a
fixed overhead; the CPU core's higher clock speed handles a small task quickly. Maximum 2.

**11.** Award up to 2 marks for each of the three areas, provided both processors are addressed:
- **Design aim:** the CPU is optimised for low latency on a single stream of varied instructions [1];
  the GPU is optimised for high throughput across many similar operations [1].
- **Cores:** the CPU has a few complex cores, each with substantial control logic and branch
  prediction [1]; the GPU has hundreds or thousands of simple cores that run the same instruction on
  different data in groups [1].
- **Memory:** the CPU relies on large multi-level caches and main RAM [1]; the GPU uses
  high-bandwidth memory (its own, if discrete) to stream large blocks of data to its cores [1].
Similarities may be credited within these marks, for example both contain ALUs and registers and
both execute instructions using a fetch-execute style cycle. Maximum 6.

**12.** Level-style marking. Award up to 6:
- Identifies that the library tasks (word processing, browsing, email) are mainly sequential,
  interactive and run on the CPU [1].
- Explains that these tasks do not involve large amounts of data-parallel work, so a powerful GPU
  would be largely idle [1].
- Recognises a possible benefit: smoother video playback or display of graphics-heavy web pages, or
  future use for specialist tasks such as video editing or machine learning projects [1].
- Identifies a cost: powerful GPUs are expensive to buy [1].
- Identifies a running cost or impact: higher power consumption and heat, raising electricity costs
  and possibly needing better cooling [1].
- Reaches a justified conclusion: for example, the money would be better spent on more RAM, faster
  storage or more machines, with GPUs bought only for a few computers used for specialist work [1].
Maximum 6. A conclusion without reasons linked to the scenario earns no mark.

---

## Where marks are usually lost

- Writing "GPUs are faster" without saying for which kind of task.
- Choosing the GPU for any task with lots of data, even when each step depends on the previous one.
- Forgetting to round up a step count: a part-step still takes a whole step.
- In evaluation questions, listing GPU features without relating them to what the users actually do.

## Frequently asked questions

**Do SL students need these questions?**
No. The CPU and GPU comparison is marked HL only in the guide, so these questions are for HL
students.

**Are these real IB questions?**
No. They are original practice questions written for revision.
