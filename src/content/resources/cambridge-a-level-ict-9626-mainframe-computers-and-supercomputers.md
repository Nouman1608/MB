---
title: "Cambridge A Level Information Technology (9626): Mainframe computers and supercomputers"
resourceType: "study-guides"
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
description: "Cambridge 9626 IT section 2.1 study guide: mainframe and supercomputer characteristics, MIPS and FLOPS, RAS, uses, worked calculations and evaluation."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide teaches **section 2.1 Mainframe computers and supercomputers** of Topic 2 Hardware and software in the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. It is AS Level content, examined in Paper 1 Theory. The [Hardware and software overview](/resources/a-level-cambridge-ict-hardware-and-software/) introduces the whole topic; this page goes through every characteristic and use the syllabus names. Use it with the [mainframe and supercomputer revision notes](/resources/cambridge-a-level-ict-9626-mainframe-computers-and-supercomputers-revision-notes/) and the [mainframe and supercomputer practice questions](/resources/cambridge-a-level-ict-9626-mainframe-computers-and-supercomputers-practice/).

## What section 2.1 covers

| Syllabus point | What you must be able to do |
|---|---|
| Characteristics | Describe longevity; RAS; security; performance metrics (MIPS and FLOPS); volume of input, output and throughput; fault tolerance; operating system; number of processors; heat maintenance |
| Uses of mainframes | Census, transaction processing, industry statistics, consumer statistics |
| Uses of supercomputers | Weather forecasting, climate research, quantum mechanics |
| Evaluation | Advantages and disadvantages of each |

The key idea running through all of it: a **mainframe** is designed to handle an enormous number of relatively simple tasks reliably, such as millions of card payments. A **supercomputer** is designed to complete a small number of extremely complex calculations as fast as possible, such as a weather model.

## The nine characteristics compared

| Characteristic | Mainframe | Supercomputer |
|---|---|---|
| Longevity | Kept in service for many years; programs written decades ago often still run | Typically overtaken and replaced within about five years as faster designs appear |
| RAS | Very high: built to run continuously with almost no unplanned downtime | High, but a short pause matters less because jobs can be rerun |
| Security | Strong: handles confidential personal and financial data, with hardware encryption and strict access control | Less central to its purpose, though research data still needs protecting |
| Performance metric | MIPS (millions of instructions per second) | FLOPS (floating-point operations per second) |
| Input, output and throughput | Huge volumes of input and output; throughput (work completed per unit of time) is the priority | Smaller volumes of input, vast amounts of calculation per item of data |
| Fault tolerance | Duplicated components; failed parts can be swapped while the system keeps running | Present, but large jobs may be restarted from saved checkpoints instead |
| Operating system | Can run several operating systems at once in separate virtual machines | Usually a version of Linux, set up to share one job across many processing nodes |
| Number of processors | Many processors, shared between thousands of simultaneous users and tasks | Thousands to millions of processor cores working in parallel on one problem |
| Heat maintenance | Needs cooling and air-conditioned rooms | Produces so much heat that large cooling systems, often liquid cooling, are essential |

### Why MIPS for one and FLOPS for the other?

**MIPS** counts general instructions, which suits mainframe work: reading a record, checking a balance, writing an update. **FLOPS** counts calculations on floating-point numbers (numbers with a fractional part, such as 287.43), which dominate scientific simulations. Supercomputer speeds are quoted in very large multiples: a **petaFLOPS** is 10^15 FLOPS, and the fastest systems have passed an **exaFLOPS**, 10^18 FLOPS.

### RAS and fault tolerance are not the same thing

- **Reliability**: how rarely the system fails.
- **Availability**: the proportion of time it can be used.
- **Serviceability**: how quickly and easily faults can be found and repaired, ideally without switching off.
- **Fault tolerance**: the ability to **carry on working** when a component fails, because a duplicate takes over.

A system can be fault tolerant without being very reliable (parts fail often but backups take over), so treat the terms separately.

## Worked example 1: sizing a mainframe in MIPS

A card-payment processor (figures invented) must handle a peak of 30,000 transactions per second, and each transaction needs about 2 million instructions.

- Instructions needed per second = 30,000 × 2,000,000 = 60,000,000,000.
- In millions: 60,000,000,000 ÷ 1,000,000 = **60,000 MIPS**.

The processor needs a system rated above 60,000 MIPS at peak, with spare capacity for growth and for a failed component.

## Worked example 2: availability as downtime

Availability is often quoted as a percentage. A year has 365 × 24 × 60 = 525,600 minutes.

| Availability | Unavailable fraction | Downtime per year |
|---|---|---|
| 99.9% | 0.001 | 525.6 minutes (about 8.8 hours) |
| 99.99% | 0.0001 | about 52.6 minutes |
| 99.999% | 0.00001 | about 5.3 minutes |

For a bank, eight hours a year of lost card payments would be unacceptable, which is why mainframes are engineered for the highest figures.

## Worked example 3: a supercomputer run time

A weather model run needs 4 × 10^18 floating-point operations (invented). On a system sustaining 2 petaFLOPS (2 × 10^15 FLOPS):

- Time = 4 × 10^18 ÷ 2 × 10^15 = 2,000 seconds, about **33 minutes**.

Forecasts must be ready before broadcast deadlines, so speed is not a luxury: a run that took a day would forecast weather that had already happened.

## Uses of mainframe computers

- **Census.** A national census collects data from every household. A mainframe stores and processes many millions of records, checks them for errors and produces population totals by area, age and other categories. The work is mainly batch processing of huge volumes.
- **Transaction processing.** Banks, card networks, airlines and retailers process vast numbers of small transactions every second, each of which must be recorded correctly and securely. High throughput, high availability and security make the mainframe suitable.
- **Industry statistics.** Organisations process data collected from many businesses in an industry, such as output, sales or employment, to produce trends that firms and governments use for planning.
- **Consumer statistics.** Retailers and market researchers process records of purchases, such as loyalty-card data, to find patterns in what people buy, when and where.

## Uses of supercomputers

- **Weather forecasting.** The atmosphere is divided into a three-dimensional grid of points. Readings from weather stations, satellites and other sources set the starting conditions, and equations predict how temperature, pressure, wind and humidity change at every point over time. More points give a more accurate forecast but need far more calculation.
- **Climate research.** Climate models are similar but run over decades or centuries of simulated time, often many times with different assumptions, which multiplies the computing needed.
- **Quantum mechanics.** Simulating how atoms, electrons and molecules behave helps scientists design new materials and medicines. The number of interactions grows extremely quickly with the size of the system, so only supercomputers can handle realistic models.

## Advantages and disadvantages

| | Mainframe | Supercomputer |
|---|---|---|
| Advantages | Handles enormous transaction volumes; very high availability; strong security; long working life; runs several operating systems at once; can be expanded | Completes complex calculations that would take ordinary computers years; makes accurate forecasts and new research possible; huge parallel processing power |
| Disadvantages | Very high purchase and running cost; needs specialist staff, often with older programming skills; needs space and cooling | Extremely expensive to build and power; large cooling needs; short useful life; software must be written for parallel processing; suited only to specific types of problem |

## Common mistakes

- Using FLOPS for a mainframe or MIPS for a supercomputer without explaining why.
- Saying a supercomputer is "a faster mainframe". They are designed for different jobs.
- Treating fault tolerance and reliability as the same.
- Giving "expensive" as the only disadvantage. Say what costs money: power, cooling, specialist staff, replacement.
- Naming a use without explaining which characteristic makes the machine suitable.

## Exam technique

- **Describe** questions: give the characteristic and what it means in practice ("throughput: the number of transactions completed per second, which must be very high for a bank").
- **Explain** questions: link a characteristic to a use with "because" ("a census suits a mainframe because millions of records must be input and processed accurately").
- **Advantages and disadvantages**: make each point specific to the scenario, then, if asked to evaluate, conclude which system suits it and why.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, Cambridge International Education. Topic 2 Hardware and software, section 2.1 Mainframe computers and supercomputers.
