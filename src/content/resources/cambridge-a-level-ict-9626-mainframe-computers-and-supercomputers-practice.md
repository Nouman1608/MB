---
title: "Cambridge A Level Information Technology (9626): Mainframe computers and supercomputers -- Practice Questions"
resourceType: "practice-questions"
subject: "ict"
level: ["a-levels"]
topic: "Topic 2 – Hardware and software"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 2.1
syllabusTopics:
  - qualification: "a-level"
    topic: "hardware-and-software"
    subtopic: "mainframe-computers-and-supercomputers"
description: "Twelve original Cambridge 9626 IT section 2.1 questions with mark-scheme answers: MIPS and FLOPS calculations, availability, RAS, uses and evaluation."
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

Related: [Mainframe and supercomputer study guide](/resources/cambridge-a-level-ict-9626-mainframe-computers-and-supercomputers/) | [Mainframe and supercomputer revision notes](/resources/cambridge-a-level-ict-9626-mainframe-computers-and-supercomputers-revision-notes/)

These questions are for **section 2.1 Mainframe computers and supercomputers** (Topic 2, AS Level) of Cambridge International AS & A Level Information Technology (9626), 2025–2027. All organisations and figures are invented.

---

## Section A

**1.** State what is meant by MIPS and by FLOPS. **[2]**

**2.** State **four** characteristics of mainframe computers named in the syllabus. **[4]**

**3.** Explain what is meant by throughput. **[2]**

**4.** Explain why heat maintenance must be planned when a supercomputer is installed. **[2]**

**5.** Explain what is meant by longevity and why it is an advantage of a mainframe. **[3]**

**6.** Identify **one** use of supercomputers, other than weather forecasting, and explain why a supercomputer is needed for it. **[3]**

## Section B

**7.** A national statistics office processes 25 million census returns. Each return needs about 40 million instructions to validate and process. Its mainframe sustains 20,000 MIPS.

**(a)** Calculate the total number of instructions needed. **[1]**

**(b)** Calculate the processing time in hours, to one decimal place. **[2]**

**(c)** Explain **three** reasons why a mainframe is suitable for processing census data. **[3]**

**8.** A bank requires its payment system to be unavailable for no more than 30 minutes a year.

**(a)** Calculate the minimum availability needed, as a percentage to three decimal places. Use 525,600 minutes in a year. **[2]**

**(b)** Explain **two** features of mainframe design that help the bank achieve this. **[4]**

**9.** A weather service's forecast run needs 6 × 10^17 floating-point operations on a supercomputer sustaining 5 petaFLOPS. It plans a finer grid that multiplies the number of operations by 4.

**(a)** Calculate the run time, in seconds, of the current run and of the finer-grid run. **[3]**

**(b)** Explain why the weather service uses a supercomputer rather than a mainframe. **[3]**

**10.** A supermarket chain uses a mainframe to produce consumer statistics from its loyalty-card records. Describe how the mainframe is used to do this. **[4]**

**11.** Discuss the advantages and disadvantages of using supercomputers for climate research. **[6]**

**12.** Compare mainframe computers with supercomputers in terms of number of processors, operating system and fault tolerance. **[6]**

---

## Answers

**1.** MIPS is millions of instructions per second, used to measure mainframe performance [1]. FLOPS is floating-point operations per second, used to measure supercomputer performance [1]. **[2]**

**2.** Any four from: longevity [1]; reliability, availability and serviceability (RAS) [1]; security [1]; performance measured in MIPS [1]; high volume of input, output and throughput; fault tolerance; ability to run several operating systems; many processors; heat maintenance. **[4]**

**3.** Throughput is the amount of work a system completes in a given time [1], for example the number of transactions processed per second [1]. **[2]**

**4.** Thousands of processors working at full speed generate a great deal of heat [1], so large cooling systems, often liquid cooling, are needed to prevent overheating and damage, adding to installation and running costs [1]. **[2]**

**5.** Longevity is how long a system stays in useful service [1]. Mainframes are kept running for many years and can still run programs written long ago [1], so the organisation avoids frequent replacement costs and rewriting its software [1]. **[3]**

**6.** Climate research [1]: models simulate the atmosphere and oceans over decades or centuries, often many times [1], which needs far more calculation than an ordinary computer could complete in a useful time [1]. Alternatively, quantum mechanics: simulating the behaviour of atoms and molecules, where the calculations grow extremely quickly with system size. **[3]**

**7. (a)** 25,000,000 × 40,000,000 = **1 × 10^15 instructions** [1].

**(b)** 20,000 MIPS = 2 × 10^10 instructions per second; 1 × 10^15 ÷ 2 × 10^10 = 50,000 seconds [1]; 50,000 ÷ 3,600 = **13.9 hours** [1].

**(c)** Very large volume of input and output: millions of records must be read and written [1]. High reliability and fault tolerance, so a long processing run is not lost through a failure [1]. Strong security, because census returns contain confidential personal data [1]. **[6]**

**8. (a)** Unavailable fraction = 30 ÷ 525,600 = 0.0000571 [1]; availability = **99.994%** [1].

**(b)** Fault tolerance [1]: processors, power supplies and storage are duplicated, so if one fails another takes over and payments continue [1]. Serviceability [1]: faulty parts can be hot-swapped while the system keeps running, so repairs do not need planned downtime [1]. **[6]**

**9. (a)** 5 petaFLOPS = 5 × 10^15 FLOPS [1]; current run = 6 × 10^17 ÷ 5 × 10^15 = **120 seconds** [1]; finer grid = 4 × 120 = **480 seconds** [1].

**(b)** The model needs an enormous number of floating-point calculations on each grid point [1]; a supercomputer splits the work across thousands of processors in parallel [1], so the forecast is ready before it is needed, whereas a mainframe is designed for large numbers of simple transactions, not intensive calculation [1]. **[6]**

**10.** Each purchase is recorded against a loyalty-card number, giving millions of records [1]. The mainframe stores and processes this large volume of data [1], grouping and totalling purchases by product, store, time and type of customer [1] to produce statistics such as which products sell together or how spending changes by season, used for stocking and promotions [1]. **[4]**

**11.** Advantages: can run very complex models of the atmosphere and oceans in a useful time [1]; can run many versions with different assumptions, giving a range of predictions [1]; finer detail improves the accuracy of results [1]. Disadvantages: extremely high cost to build and run [1]; very high power use and cooling needs, which is ironic for climate work [1]; the machine is outdated within a few years and software must be written for parallel processing [1]. **[6]**

**12.** Processors: a mainframe has many processors shared between thousands of separate tasks [1]; a supercomputer has thousands to millions of cores working together on one problem [1]. Operating system: a mainframe can run several operating systems at once in virtual machines [1]; a supercomputer usually runs a version of Linux [1]. Fault tolerance: a mainframe duplicates components so work continues without interruption [1]; a supercomputer job may instead be restarted from a saved checkpoint, because a short delay matters less [1]. **[6]**

## Where marks are usually lost

- Giving MIPS and FLOPS without saying which machine each measures.
- Dividing by MIPS without converting it to instructions per second.
- Defining availability but not linking it to the scenario's downtime limit.
- Comparing the two machines with points that apply equally to both.
- Listing advantages with no disadvantages when the question says "discuss".
