---
title: "Cambridge A Level Information Technology (ICT): Hardware and Software — Revision Notes (9626)"
seoTitle: "Cambridge A Level ICT 9626 Hardware and Software Notes"
resourceType: "revision-notes"
subject: "ict"
level: ["a-levels"]
topic: "Topic 2 – Hardware and Software"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 1
syllabusTopics:
  - qualification: "a-level"
    topic: "hardware-and-software"
  - qualification: "a-level"
    topic: "hardware-and-software"
    subtopic: "mainframe-computers-and-supercomputers"
  - qualification: "a-level"
    topic: "hardware-and-software"
    subtopic: "system-software"
  - qualification: "a-level"
    topic: "hardware-and-software"
    subtopic: "utility-software"
  - qualification: "a-level"
    topic: "hardware-and-software"
    subtopic: "custom-written-and-off-the-shelf-software"
  - qualification: "a-level"
    topic: "hardware-and-software"
    subtopic: "user-interfaces"
description: "Condensed notes on mainframes and supercomputers, system and utility software, custom-written and off-the-shelf software and interfaces for Cambridge 9626."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by harris-khan on 2026-09-29; 2026-11-08: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-09-03
updatedDate: 2026-09-27
featured: false
---

Related: [Topic 2 study guide](/resources/a-level-cambridge-ict-hardware-and-software/)

Condensed, exam-focused notes for Topic 2 of Cambridge AS & A Level Information Technology (9626), 2025-2027 series.

## 2.1 Mainframes and supercomputers

| | Mainframe | Supercomputer |
|---|---|---|
| Built for | High-volume transaction throughput | Raw processing speed |
| Example use | Census, transaction processing | Weather forecasting, quantum mechanics |
| Metrics | RAS and fault tolerance apply to both classes; MIPS is conventionally quoted for mainframes | RAS and fault tolerance apply to both classes; FLOPS is conventionally quoted for supercomputers |

- Both **RAS** (reliability/availability/serviceability) and **fault tolerance** are characteristics of both classes, not a discriminator between them — the syllabus gives one shared characteristics list for mainframes and supercomputers together.
- **RAS**: reliability (how rarely it fails), availability (how much of the time it's usable, accounting
  for planned maintenance), serviceability (how quickly/easily it's repaired).
- **Fault tolerance**: ability to keep running, often in a degraded state, when a component fails.
- MIPS and FLOPS are both performance metrics usable for either class; MIPS (instructions per second) is conventionally quoted for a mainframe's transaction workload, and FLOPS (floating-point operations per second) for a supercomputer's computation-heavy workload — a matter of typical workload, not a rule.
- Keep the *use case* attached to each term — mainframe/supercomputer confusion is a common error.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-hardware-and-software--01-hs-mainframe-supercomputer.webp" width="900" height="830" alt="Two columns compare large-scale systems. A mainframe is built for high-volume transaction throughput and used for census, transaction processing and industry and consumer statistics. A supercomputer is built for raw processing speed on computation-heavy problems and used for weather forecasting, climate research and quantum mechanics. Both list reliability, availability and serviceability (RAS)." loading="lazy">
  <figcaption>Mainframes are built for transaction throughput; supercomputers for raw processing speed; both list RAS.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-hardware-and-software--02-hs-ras-fault-tolerance.webp" width="900" height="870" alt="An illustrative 100-unit timeline shows usable time, two failure-and-repair blocks and one planned maintenance block. Serviceability is how quickly a failure is repaired, availability is the share of time usable (85 percent here, because planned maintenance counts too) and reliability is how rarely it fails. A second bar shows fault tolerance: the system keeps running, often degraded, when a component fails." loading="lazy">
  <figcaption>Reliability, availability and serviceability read off one timeline; fault tolerance is a related idea.</figcaption>
</figure>

## 2.2 System software

- Types: compilers, interpreters, linkers, device drivers, operating systems, utilities.
- **Compiler**: translates and stores an entire program before execution. **Interpreter**: translates
  and executes line by line (why development-stage code is often run through an interpreter first).
- **Running on different systems**: the syllabus asks how a high-level program is translated to run on different
  computer systems using **interpreters** (the same source code runs anywhere a suitable interpreter exists) and
  **cross compilers** (a compiler on one type of computer produces machine code for a different type).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-hardware-and-software--04-hs-compiler-interpreter.webp" width="900" height="850" alt="A four-line program is handled in two ways. A compiler translates the whole program, stores it and then runs it. An interpreter translates and runs one line at a time: translate line 1, run line 1, translate line 2, and so on. Development-stage code is often run through an interpreter first." loading="lazy">
  <figcaption>A compiler translates everything first; an interpreter translates and runs line by line.</figcaption>
</figure>

## 2.3 Utility software

- Named types: anti-virus, back-up, data compression, disk defragmentation, formatting (low-level,
  partitioning, high-level), file copying/deleting, file management systems, disk management systems.
- **System software manages/translates for the computer itself; utility software performs a specific
  maintenance task for the user.** Mixing up the two categories weakens an otherwise correct answer.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-hardware-and-software--03-hs-system-utility-software.webp" width="900" height="890" alt="Two columns separate the categories. System software manages and translates for the computer itself: operating system, device drivers, compilers, interpreters and linkers. Utility software performs one specific maintenance task for the user: anti-virus, back-up, data compression, disk defragmentation, formatting, and file copying and deleting." loading="lazy">
  <figcaption>System software looks after the computer itself; utility software does a maintenance task for the user.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-utility-software-and-user-interfaces--02-defrag.webp" width="900" height="830" alt="Two rows of twelve disk clusters. Before defragmentation, file A is split into three pieces and the head moves twice to read it. After, file A is one piece, the head moves zero times and free space is grouped together. A note says SSDs gain little because they have no moving head." loading="lazy">
  <figcaption>Defragmenting moves a file's clusters together so the head moves less (the cluster layout is illustrative).</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-utility-software-and-user-interfaces--03-formatting-levels.webp" width="900" height="850" alt="Three stacked steps: low-level formatting marks tracks and sectors (normally by the manufacturer), partitioning divides the disk into logical drives, and high-level formatting creates the file system with directories and a file allocation table. A quick format keeps the data, so it may be recoverable." loading="lazy">
  <figcaption>Low-level, partitioning and high-level formatting in order.</figcaption>
</figure>

## 2.4 Custom-written vs off-the-shelf software

- **Off-the-shelf**: lower cost, available immediately, well tested by a large user base; may include
  unneeded features, can't be tailored exactly.
- **Custom-written**: matches exact requirements, adaptable as needs evolve; costs more, takes time,
  depends on ongoing developer support.
- Also: proprietary vs open-source software.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-hardware-and-software--05-hs-custom-vs-off-the-shelf.webp" width="900" height="930" alt="A small design studio compares off-the-shelf and custom-written graphics software. Off-the-shelf costs less, is available immediately and is well tested by many users, but may include unneeded features and cannot be tailored exactly. Custom-written matches the exact requirements and can be changed, but costs far more and takes time to develop and test. A strong answer weighs both sides against budget, timescale and how unusual the workflow is." loading="lazy">
  <figcaption>Tick and cross show the advantage and disadvantage of each option for the studio.</figcaption>
</figure>

## 2.5 User interfaces

- Types: command line, graphical, dialogue, gesture-based.
- Match each interface type to a suitable real-world use (e.g. command line for a systems administrator,
  graphical for a general consumer device), not just a definition.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-cambridge-ict-hardware-and-software--06-hs-user-interfaces.webp" width="900" height="880" alt="Four named interface types: command line (typed commands, suited to a systems administrator), graphical (windows, icons and a pointer, suited to a general consumer device), dialogue (two speech bubbles) and gesture-based (a hand with movement arrows)." loading="lazy">
  <figcaption>The four user interface types in the syllabus, with the two uses the lesson names.</figcaption>
</figure>

## Exam technique for this topic

Nearly every sub-topic in this topic ends in "advantages and disadvantages," so be ready to weigh options, not just define them — build revision around comparison tables (mainframe vs supercomputer, interpreter vs
compiler, proprietary vs open-source, GUI vs command line) rather than isolated definitions. When a
question describes a scenario and asks you to justify a software or hardware choice, weigh both options
against the scenario's specific details (budget, timescale, how unusual the workflow is) rather than
asserting one option is simply "better" — a generic "it's more advanced" answer earns little credit compared
with a scenario-linked justification.

## Worked example: mainframe or supercomputer?

A national statistics agency needs to process millions of census transactions reliably, ensuring no
data is lost even during scheduled maintenance windows. A mainframe suits this scenario because census
processing is one of its named uses and it is built for high-volume transaction throughput, exactly
matching a census's need to process enormous numbers of individual records accurately and continuously;
it also offers the RAS — high reliability, near-continuous availability, and quick serviceability — that
the no-data-loss requirement demands (RAS is a characteristic of both classes, so it supports the choice
rather than deciding it). A supercomputer, by contrast, would be the wrong choice here despite its
greater raw processing power, because the census task is not primarily computation-heavy in the way a
climate simulation or quantum mechanics calculation is — it needs sustained high-volume transaction
throughput, not maximum floating-point operations per second (FLOPS). This
kind of matched, scenario-specific justification — not simply "mainframes are for business, supercomputers
are for science" — is what a strong answer on this sub-topic looks like.

## Worked example: choosing an interface type

A public information kiosk in a museum needs to be usable by visitors of all ages and technical
abilities with no training. A graphical user interface with large touch-friendly icons suits this
scenario because it requires no prior knowledge of commands and gives immediate visual feedback. A
command line interface would be entirely unsuitable here — it demands memorised syntax that a casual,
untrained visitor cannot be expected to know — but would suit a systems administrator managing many
servers, where speed, precision and scriptability outweigh ease-of-learning concerns. Being able to
generate this kind of matched reasoning for any interface type and any described user group, rather
than reciting a fixed list of "GUI is easy, CLI is powerful," is what distinguishes strong answers.

## Self-test

1. What distinguishes a mainframe from a supercomputer, in terms of what each is built for?
2. Define reliability, availability and serviceability (RAS) as three separate concepts.
3. What is the key difference between a compiler and an interpreter?
4. Give one advantage and one disadvantage of custom-written software.
5. Which interface type would suit a systems administrator, and why?

**Answers:** 1. Mainframe: high-volume transaction throughput (census, transaction processing). Supercomputer: raw
processing speed on computation-heavy problems. 2. Reliability = how rarely it fails; availability = how
much of the time it's usable; serviceability = how quickly/easily it's repaired. 3. A compiler translates
and stores the whole program before execution; an interpreter translates and executes line by line. 4.
Advantage: matches exact requirements/adaptable. Disadvantage: higher cost/longer development time. 5.
Command line — allows precise, scriptable control suited to a technically skilled user.

## Why this topic rewards comparison over recall

Topic 2's content is unusually dense with named categories (mainframe, supercomputer, system software,
utility software, custom-written, off-the-shelf, four interface types), and it can be tempting to revise
each as an isolated definition to memorise. Because almost every sub-topic asks for advantages and
disadvantages, a different approach works better: for
every category, hold in mind at least one alternative it could be confused with, and one concrete
scenario where choosing between the two matters. This comparison-first revision style — rather than a
long list of separate definitions — is what turns recognition of a term into the ability to justify a
choice, which is what nearly every question in this topic actually tests.

## Frequently asked questions

**What is the difference between MIPS and FLOPS?**
MIPS measures millions of instructions per second and is conventionally quoted for a mainframe's transaction workload, while FLOPS measures floating-point operations per second and is conventionally quoted for a supercomputer's computation-heavy workload. Both can be used for either class.

**What is fault tolerance?**
Fault tolerance is the ability of a system to keep running, often in a degraded state, when a component fails. In Cambridge 9626 it is a characteristic of both mainframes and supercomputers.

**What types of utility software are in the 9626 syllabus?**
The named types are anti-virus, back-up, data compression, disk defragmentation, formatting (low-level, partitioning and high-level), file copying and deleting, file management systems and disk management systems.

**What are the advantages of off-the-shelf software?**
Off-the-shelf software is cheaper, available immediately and well tested by a large user base, but it may include features that are not needed and cannot be tailored exactly. Custom-written software matches exact requirements but costs more and takes longer.
