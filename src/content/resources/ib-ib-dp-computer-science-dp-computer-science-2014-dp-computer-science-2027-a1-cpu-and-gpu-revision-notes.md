---
title: "IB DP Computer Science (DP Computer Science): CPU and GPU Differences (HL) -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed HL notes on CPU and GPU differences for IB DP Computer Science A.1: latency, throughput, core design, memory, task choice and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "Written from the public subject brief and the A1.1.3 label (CPU and GPU differences, HL only); please check the depth and wording against the full DP Computer Science guide."
publishedDate: 2026-11-18
featured: false
---

Quick-recall notes for **A1.1.3, the differences between the CPU and the GPU**, an HL-only statement
inside A.1 Computer fundamentals (IB DP Computer Science, first assessment 2027). For full
explanations and worked examples, use the
[CPU and GPU differences study guide](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-a1-cpu-and-gpu/);
for the CPU components these notes assume, see the
[A.1 Computer fundamentals study guide](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-1/).
The exact learning outcome is in the full DP guide held by your school.

## Key terms

| Term | Meaning |
|---|---|
| GPU | Graphics processing unit: a processor with many simple cores built for parallel work |
| Latency | Time taken to complete one task from start to finish |
| Throughput | Amount of work completed per unit of time |
| Data parallelism | Applying the same operation to many independent data items at once |
| Core | An independent processing unit able to execute instructions |
| Branch prediction | CPU logic that guesses which way a branch will go so the pipeline keeps running |
| Memory bandwidth | Rate at which data can be moved to or from memory |
| Discrete GPU | A separate GPU with its own memory, joined to the CPU by a bus |
| Integrated GPU | A GPU on the same chip as the CPU, sharing main memory |
| Offloading | The CPU passing a suitable task to the GPU to run |
| Kernel (GPU) | The small program the GPU runs on every data item |
| Co-processor / accelerator | A processor that assists the CPU with a particular kind of task |

## The one-line summary

**CPU: few powerful cores, low latency, good at varied and sequential work. GPU: many simple cores,
high throughput, good at the same operation on lots of data.**

## Side-by-side comparison

| Feature | CPU | GPU |
|---|---|---|
| Design aim | Low latency | High throughput |
| Cores | Few, complex | Many, simple |
| Control logic per core | Large (branch prediction, reordering) | Small, shared by a group of cores |
| Instruction handling | Each core runs its own instruction stream | A group of cores runs the same instruction on different data |
| Clock speed | Higher | Lower per core |
| Cache | Large, several levels | Smaller per core |
| Memory | Main RAM | High-bandwidth memory (own memory if discrete) |
| Handles branching | Well | Poorly: diverging cores take turns |
| System role | Runs the OS, manages devices, coordinates | Receives work from the CPU |

## Choosing a processor: the dependency test

1. Can the work be split into many pieces?
2. Does each piece need the **same** operation?
3. Is each piece **independent** of the others' results?

Three yeses point to a **GPU**. Any no (especially a step that needs the previous step's answer)
points to a **CPU**.

| Task | Processor | Reason |
|---|---|---|
| Rendering a 3D scene | GPU | Each pixel and vertex calculated the same way, independently |
| Applying a blur filter | GPU | Same calculation for every pixel |
| Training a neural network | GPU | Repeated, independent multiply-and-add operations on matrices |
| Running the operating system | CPU | Varied, branching work; handles interrupts and devices |
| Responding to key presses in a text editor | CPU | Short, unpredictable, sequential tasks |
| Calculating a running total where each value depends on the last | CPU | Each step waits for the previous one |

## How they cooperate

CPU prepares data → copies it to GPU memory (discrete GPU) → sends a kernel → GPU runs it on all
items in parallel → results copied back → CPU continues. The copy is an **overhead**: worth it for
large jobs, possibly not for small ones.

## Simplified step count (illustrative figures)

Steps ≈ number of independent items ÷ number of cores. For 2,073,600 pixels: 8 CPU cores need
259,200 steps; 2048 GPU cores need 1013 steps (2,073,600 ÷ 2048 = 1012.5, rounded up). State that the
model ignores clock speed and transfer time.

## Exam traps

- **"GPUs are faster"** without a qualifier earns nothing. Say *for data-parallel tasks*.
- **The GPU does not replace the CPU.** It cannot run the OS or coordinate the system.
- **Extra cores only help if the task divides.** A strictly sequential algorithm gains nothing.
- **Forgetting transfer time.** Data must move to and from a discrete GPU's memory.
- **Mixing up a multi-core CPU with a GPU.** A GPU's cores are far more numerous, simpler and run the
  same instruction together.
- **"Graphics only."** GPUs are also used for machine learning, simulation and video encoding.
- **Unsupported lists.** In a scenario question, link each feature to what the task does with its data.

## Linking to the rest of the course

- **A1.1 (CPU components):** a GPU still has control units, ALUs and registers, just organised
  differently.
- **A1.1.6 (pipelining in multi-core architectures, HL):** parallelism inside a core and across cores;
  see the [pipelining study guide](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-a1-pipelining-multi-core/).
- **A.4 (machine learning):** explains why training large models is done on GPUs, and links to the
  environmental cost of training.

## Self-test

1. State the design aim of a CPU and of a GPU in one word each.
2. Define throughput.
3. Why does a CPU core devote space to branch prediction?
4. What happens when cores in a GPU group need to follow different branches of an IF statement?
5. Give two tasks suited to a GPU other than drawing graphics.
6. Give one reason the operating system runs on the CPU, not the GPU.
7. What is the disadvantage of a discrete GPU having its own memory?
8. What is an advantage of an integrated GPU?
9. A program calculates each value of a sequence from the previous value. Which processor suits it,
   and why?
10. Define offloading.
11. Using the simplified model, how many steps does a 512-core GPU need for 10,000 independent items?
12. Give one limitation of the simplified step-count model.

**Answers:**
1. CPU: latency (finish one task fast). GPU: throughput (most work per second).
2. The amount of work completed per unit of time.
3. So the pipeline can keep fetching instructions without waiting to find out which way a branch
   goes, reducing delays on branching code.
4. The paths are executed in turn, with some cores idle each time, so the group slows down.
5. Any two: training machine learning models; scientific simulation; video encoding; image
   processing; large matrix calculations.
6. Any one: OS work is varied and branching; it must handle interrupts and devices; it needs fast
   response to single events rather than bulk parallel work.
7. Data must be copied to it and back, which takes time.
8. No copy between separate memories is needed (it shares main memory), and it uses less power and
   space.
9. A CPU, because each step depends on the previous one, so the work cannot be split across
   many cores.
10. The CPU passing a task suited to parallel processing to the GPU to execute.
11. 10,000 ÷ 512 = 19.53..., so 20 steps.
12. Any one: it ignores clock speed differences; it ignores data transfer time; it assumes every
    item takes the same time.

## Related pages

- [CPU and GPU differences practice questions](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-a1-cpu-and-gpu-practice/)
- [A.1 Computer fundamentals revision notes](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-1-revision-notes/)

## Official syllabus

International Baccalaureate Organization, *Diploma Programme Subject Brief -- Sciences: Computer
science*, first assessment 2027, © 2024.
