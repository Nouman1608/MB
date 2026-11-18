---
title: "Cambridge A Level Information Technology (9626): Mainframe computers and supercomputers -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge 9626 IT section 2.1: the nine characteristics, MIPS versus FLOPS, mainframe and supercomputer uses, key terms and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense **section 2.1 Mainframe computers and supercomputers** (Topic 2 Hardware and software) of the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. It is AS Level content, examined in Paper 1 Theory. Full explanations and worked calculations are in the [mainframe and supercomputer study guide](/resources/cambridge-a-level-ict-9626-mainframe-computers-and-supercomputers/); test yourself with the [mainframe and supercomputer practice questions](/resources/cambridge-a-level-ict-9626-mainframe-computers-and-supercomputers-practice/).

## The core distinction

- **Mainframe**: a very large number of relatively simple tasks, processed reliably and securely, often for thousands of users at once. Measured in **MIPS**.
- **Supercomputer**: a small number of extremely complex calculations, completed as fast as possible using massive parallel processing. Measured in **FLOPS**.

## Key terms

| Term | Meaning |
|---|---|
| Longevity | How long a system stays in useful service |
| Reliability | How rarely the system fails |
| Availability | The proportion of time the system can be used |
| Serviceability | How quickly and easily faults are found and repaired |
| RAS | Reliability, availability and serviceability, taken together |
| Fault tolerance | Carrying on working when a component fails, because a duplicate takes over |
| MIPS | Millions of instructions per second |
| FLOPS | Floating-point operations per second |
| Throughput | The amount of work completed in a given time |
| Parallel processing | Many processors working on parts of one problem at the same time |
| Virtual machine | A software-created computer, letting one mainframe run several operating systems at once |
| Hot-swapping | Replacing a component while the system keeps running |

## The nine characteristics: one line each

1. **Longevity**: mainframes run for many years and keep old programs working; supercomputers are usually replaced within about five years.
2. **RAS**: mainframes are engineered for near-continuous operation.
3. **Security**: mainframes protect confidential personal and financial data with encryption and strict access control.
4. **Performance metrics**: MIPS for mainframes, FLOPS for supercomputers.
5. **Volume of input, output and throughput**: mainframes handle enormous volumes of input and output; supercomputers do vast calculation on comparatively little input.
6. **Fault tolerance**: duplicated processors, power supplies and storage.
7. **Operating system**: mainframes can run several at once in virtual machines; supercomputers usually run a version of Linux.
8. **Number of processors**: mainframes have many, shared between tasks; supercomputers have thousands to millions of cores working on one problem.
9. **Heat maintenance**: both need cooling; supercomputers need very large cooling systems, often liquid cooling.

## Uses: match the machine to the job

| Use | Machine | Why it suits |
|---|---|---|
| Census | Mainframe | Millions of records input, checked and totalled accurately |
| Transaction processing | Mainframe | Very high throughput, availability and security |
| Industry statistics | Mainframe | Large volumes of data from many firms combined into trends |
| Consumer statistics | Mainframe | Huge numbers of purchase records analysed for patterns |
| Weather forecasting | Supercomputer | Complex model over a 3D grid, finished before the forecast deadline |
| Climate research | Supercomputer | Simulations over decades or centuries, often repeated |
| Quantum mechanics | Supercomputer | Simulating atoms and molecules needs enormous calculation |

## Advantages and disadvantages

**Mainframe.** Advantages: huge volumes, high availability, strong security, long life, several operating systems, expandable. Disadvantages: very costly to buy and run, specialist staff, space and cooling.

**Supercomputer.** Advantages: solves problems ordinary computers could not finish in a useful time; enables accurate forecasts and research. Disadvantages: extremely costly to build and power, heavy cooling, short useful life, needs specially written parallel software, limited range of uses.

## Quick calculations

- **MIPS needed** = transactions per second × instructions per transaction ÷ 1,000,000. Example: 12,000 per second × 5 million instructions = 60,000 MIPS.
- **Downtime per year** = (1 − availability) × 525,600 minutes. At 99.95%: 0.0005 × 525,600 = 262.8 minutes, about 4.4 hours.
- **Run time** = operations ÷ FLOPS. 9 × 10^17 operations at 3 × 10^15 FLOPS = 300 seconds (5 minutes).
- Prefixes: peta = 10^15; exa = 10^18.

## Exam traps

- Calling a supercomputer a "fast mainframe".
- Swapping MIPS and FLOPS.
- Defining RAS as one idea instead of three.
- Using fault tolerance to mean reliability.
- Writing "expensive" with no detail of what costs money.
- Naming a use with no reason linked to a characteristic.

## Self-test

1. What do the letters RAS stand for?
2. Which performance metric is used for supercomputers, and why?
3. Give two uses of mainframes named in the syllabus.
4. Give two uses of supercomputers named in the syllabus.
5. Distinguish reliability from fault tolerance.
6. Why can a mainframe run several operating systems at once?
7. Why is heat maintenance a bigger problem for supercomputers?
8. Why do supercomputers have shorter working lives than mainframes?
9. A system is available 99.98% of the time. How many minutes of downtime is that per year?
10. How many MIPS are needed for 8,000 transactions per second at 3 million instructions each?
11. Why is high throughput essential for card-payment processing?
12. Give one disadvantage of a supercomputer other than cost.

### Answers

1. Reliability, availability and serviceability.
2. FLOPS, because their work is mainly calculations on floating-point (fractional) numbers in scientific models.
3. Any two: census, transaction processing, industry statistics, consumer statistics.
4. Any two: weather forecasting, climate research, quantum mechanics.
5. Reliability is how rarely it fails; fault tolerance is carrying on working when a part does fail.
6. It uses virtual machines, each running its own operating system on shared hardware.
7. Thousands to millions of cores running flat out produce far more heat, so large cooling systems are needed.
8. Faster designs appear within a few years, so an older supercomputer is soon outperformed and costly to run per calculation.
9. 0.0002 × 525,600 = 105.12, about 105 minutes.
10. 8,000 × 3,000,000 ÷ 1,000,000 = 24,000 MIPS.
11. Thousands of payments arrive every second and each must be completed quickly, or customers wait and sales are lost.
12. Software must be specially written for parallel processing (or: large cooling and power needs; short life).
