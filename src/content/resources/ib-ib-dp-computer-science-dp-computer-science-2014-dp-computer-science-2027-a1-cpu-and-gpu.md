---
title: "IB DP Computer Science (DP Computer Science): CPU and GPU Differences (HL)"
resourceType: "study-guides"
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
description: "HL study guide to how CPUs and GPUs differ in IB DP Computer Science A.1: cores, design aims, memory, suitable tasks and how the two processors work together."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "Written from the public subject brief and the A1.1.3 label (CPU and GPU differences, HL only); please check the depth and wording against the full DP Computer Science guide."
publishedDate: 2026-11-18
featured: false
---

**This unit covers statement A1.1.3 of A.1 Computer fundamentals, the differences between the
central processing unit (CPU) and the graphics processing unit (GPU), which the guide marks HL
only.** It builds on the CPU components and the fetch-execute cycle in the
[A.1 Computer fundamentals study guide](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-1/),
so read that first if registers and buses are not yet secure.

> **Scope of this page.** The public subject brief names A.1 and its teaching hours; the statement
> number and its HL status come from the full DP Computer Science guide (first assessment 2027),
> which schools access through the Programme Resource Centre. Check your school's copy for the exact
> wording of the learning outcome.

## What the statement asks you to do

You need to be able to compare the two processors on their design, the kind of work each is built
for, and how they cooperate inside one computer. A good answer always links a design feature to a
consequence: "a GPU has thousands of simple cores, **so** it can apply the same operation to many
data items at the same time".

## Two different design aims

A CPU is designed to finish **one stream of instructions as quickly as possible**. Its aim is low
**latency**: the shortest time from starting a task to finishing it. A GPU is designed to process
**a huge number of similar operations in the same period**. Its aim is high **throughput**: the most
work completed per second, even if each individual operation is not finished especially quickly.

Every other difference follows from these two aims.

| Feature | CPU | GPU |
|---|---|---|
| Number of cores | Few (typically a handful to a few dozen) | Many (hundreds to thousands) |
| Complexity of each core | High: large control unit, branch prediction, deep caches | Low: small control logic shared across groups of cores |
| Typical clock speed | Higher | Lower per core |
| Best at | Sequential, branching, varied tasks | Data-parallel tasks: the same operation on many items |
| Memory | Large caches; uses main RAM | High-bandwidth memory designed to stream large blocks of data |
| Role in the system | Runs the operating system, manages devices, coordinates work | Accelerator: receives work from the CPU |

### Cores and control

A CPU core spends much of its silicon on deciding **what to do next**: predicting which way a
branch will go, reordering instructions so the ALU is never idle, and keeping frequently used data in
cache. This makes it excellent at programs full of IF statements, function calls and unpredictable
memory access, such as running the operating system or a web browser.

A GPU groups its cores so that one control unit drives many arithmetic units at once. All the cores
in a group carry out the **same instruction** on **different data**. This is ideal when the data can
be split into independent pieces, but wasteful when the cores need to take different branches: if
half the group must follow the IF branch and half the ELSE branch, the two halves take turns and
the group runs at half speed.

### Memory

GPU tasks read and write very large blocks of data, so GPUs use memory with a very high
**bandwidth** (data transferred per second). A dedicated (discrete) GPU has its own memory, which
means data must be **copied** from main RAM to the GPU before processing and copied back afterwards.
An integrated GPU shares main memory with the CPU, which avoids the copy but competes with the CPU
for memory bandwidth.

## Which tasks suit which processor?

Ask one question: **can the work be split into many independent pieces that all need the same
operation?**

- **Suits a GPU:** rendering graphics (each pixel or vertex is calculated in the same way), applying
  a filter to an image, training a machine learning model (repeated matrix multiplication; see A.4),
  scientific simulations over grids of cells, video encoding.
- **Suits a CPU:** running the operating system and handling interrupts, a word processor responding
  to key presses, compiling a program, a database deciding which index to use, any algorithm where
  each step depends on the result of the step before.

Most real applications use **both**. A video game's CPU runs the game logic, reads the controller
and decides what should appear on screen; the GPU then draws the millions of pixels of each frame.

## Worked example: why the image filter goes to the GPU

A photo-editing app increases the brightness of a 1920 × 1080 image. The new value of each pixel
depends only on its old value. Compare an 8-core CPU and a GPU with 2048 cores, using a simplified
model in which every core processes one pixel per step. The core counts are illustrative, and the
model ignores clock speed and transfer time.

```
Pixels to process     = 1920 × 1080        = 2,073,600
CPU steps (8 cores)   = 2,073,600 ÷ 8      = 259,200
GPU steps (2048 cores)= 2,073,600 ÷ 2048   = 1012.5, so 1013 steps
```

The GPU needs roughly 256 times fewer steps. Two refinements make the answer stronger:

1. **Clock speed.** Each CPU step is faster, which narrows the gap but does not close it.
2. **Transfer cost.** The image must be copied to the GPU and back. For one small image this
   overhead can cancel the advantage; for a 4K video with thousands of frames it is easily
   worth paying.

Now consider an algorithm in which each pixel's new value depends on the pixel **to its left after
that pixel has been updated**. The pieces are no longer independent: pixel 2 must wait for pixel 1,
and so on. The GPU's cores would sit idle, so a CPU is the better choice. Being able to spot this
dependency is what separates a top-band answer from a list of features.

## Worked example: an annotated model answer

**Question.** A university trains a neural network on millions of labelled images. Explain why the
training is carried out on GPUs rather than CPUs. [4]

> Training repeats the same calculation (multiplying inputs by weights and adding them) for every
> image and every neuron **[1: identifies a repeated, identical operation]**. These calculations are
> largely independent of each other, so they can be carried out in parallel **[1: data
> parallelism]**. A GPU has thousands of simple cores that execute the same instruction on different
> data at once, whereas a CPU has only a few cores **[1: links design to task]**, so the GPU completes
> far more operations per second and training finishes in much less time; its high-bandwidth memory
> also keeps those cores supplied with data **[1: consequence plus memory point]**.

Notice that each sentence earns a mark by connecting a feature of the processor to the scenario.
"GPUs are faster" on its own earns nothing.

## How the CPU and GPU work together

The CPU remains in charge. A typical sequence:

1. The program, running on the CPU, prepares data in main memory.
2. The CPU copies the data to GPU memory (for a discrete GPU) and sends the GPU a small program,
   often called a kernel, to run on every data item.
3. The GPU runs the kernel across its cores in parallel.
4. The results are copied back, and the CPU continues with the sequential parts of the task.

This is called **offloading**, and the GPU is acting as a **co-processor** or accelerator. Because
the CPU and GPU can work at the same time, a well-designed program keeps the CPU busy with the next
round of game logic while the GPU draws the current frame.

## Common mistakes

- **"A GPU is faster than a CPU."** Only for data-parallel work. On sequential, branching code a CPU
  core is much faster.
- **"The GPU replaces the CPU."** The GPU cannot run the operating system or manage devices; it is
  given work by the CPU.
- **"More cores always means better performance."** Only if the task can be divided. A task that
  must run step by step gains nothing from extra cores.
- **Forgetting the data transfer.** Copying data to and from a discrete GPU takes time and can make
  small tasks slower overall.
- **Confusing a GPU with a multi-core CPU.** Both have several cores, but a GPU's cores are simpler,
  far more numerous and run the same instruction together.

## Exam technique for the command words

- **Distinguish** or **Compare and contrast:** use paired sentences ("A CPU has ... whereas a GPU
  has ..."). A table is acceptable if each row makes a direct comparison.
- **Explain:** give a feature, then its consequence for the scenario.
- **Evaluate** or **Discuss** (for example, whether to buy GPU hardware for a task): give the
  benefit, the limitation (cost, power, transfer time, unsuitable sequential parts) and a conclusion
  tied to the scenario.
- **Suggest:** state which processor and give one reason drawn from the task's structure.

In Paper 1, these questions are often embedded in the case study. Before answering, underline what
the scenario's task does to its data, because that decides which processor suits it.

## Practise and revise

- [CPU and GPU differences revision notes](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-a1-cpu-and-gpu-revision-notes/)
- [CPU and GPU differences practice questions](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-a1-cpu-and-gpu-practice/)
- [Pipelining in multi-core architectures study guide](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-a1-pipelining-multi-core/)
- [A.4 Machine learning study guide](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-4/)

## Source

International Baccalaureate Organization, *Diploma Programme Subject Brief, Sciences: Computer
science, first assessment 2027* (© 2024). The complete subject guide is available through the IB
Programme Resource Centre.
