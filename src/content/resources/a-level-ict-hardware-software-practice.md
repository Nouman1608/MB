---
title: "Cambridge A-Level ICT: Hardware and Software — Practice Questions"
resourceType: "practice-questions"
subject: "ict"
level: ["a-levels"]
topic: "Section 2 – Hardware and Software"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 2
syllabusTopics:
  - qualification: "a-level"
    topic: "hardware-and-software"
description: "Exam-style questions with full worked answers on mainframes and supercomputers, system and utility software, custom-written vs off-the-shelf software, and user interfaces, for Cambridge AS & A Level ICT (9626) Section 2."
author: "marlbridge-academic-team"
publishedDate: 2026-09-06
featured: false
---

> These are original practice questions written in the style of Cambridge
> AS & A Level ICT (9626) assessment objectives. They are not taken from any
> past paper and are not endorsed by Cambridge International.

Use these questions alongside the [Section 2 – Hardware and Software study
guide](/resources/a-level-cambridge-ict-hardware-and-software/) and
[revision
notes](/resources/a-level-ict-hardware-software-revision-notes/).

## Section A

**1.** Define reliability, availability and serviceability (RAS) as
three separate concepts. **[3]**

**2.** State the key difference between a compiler and an interpreter. **[2]**

**3.** State the difference between system software and utility
software, giving one example of each. **[2]**

**4.** Name the four types of user interface listed in the syllabus. **[2]**

**5.** State one advantage and one disadvantage of off-the-shelf
software. **[2]**

## Section B

**6.** A national weather service needs a computer system capable of
running highly complex atmospheric simulations as quickly as possible.

**(a)** State whether a mainframe or a supercomputer is more suitable
for this task, and justify your answer. **[3]**
**(b)** Name one metric used to measure this type of system's
performance. **[1]**

**7.** A bank operates a transaction-processing system that must remain
available 24 hours a day, with almost no tolerance for data loss, even
during scheduled maintenance.

**(a)** Explain why a mainframe, rather than a supercomputer, is the
appropriate choice for this scenario. **[3]**
**(b)** Explain how fault tolerance differs from reliability in this
context. **[2]**

**8.** A software development team is writing a new program. During
early development, they run their code through an interpreter, but
plan to use a compiler once the program is finished.

**(a)** Explain why an interpreter is useful during early development. **[2]**
**(b)** Explain why a compiler is more suitable once development is
complete. **[2]**

**9.** A small accounting firm is deciding between buying off-the-shelf
accounting software and commissioning custom-written software.

**(a)** Give one factor that would favour off-the-shelf software for
this firm. **[1]**
**(b)** Give one factor that would favour custom-written software for
this firm. **[1]**
**(c)** Explain why a strong answer to this scenario weighs both
options against the firm's specific situation, rather than asserting
one is simply "better." **[2]**

**10.** A museum installs a public information kiosk intended to be
usable by visitors of all ages with no prior training, while a
separate room houses servers managed by a systems administrator who
values speed and precise control.

**(a)** State which interface type suits the public kiosk, and
justify your answer. **[2]**
**(b)** State which interface type suits the systems administrator,
and justify your answer. **[2]**

---

## Answers

**1.** Reliability is how rarely a system fails [1]; availability is
how much of the time the system is usable, accounting for planned
maintenance as well as failures [1]; serviceability is how quickly and
easily the system can be repaired when something goes wrong [1].

**2.** A compiler translates and stores an entire program before
execution; an interpreter translates and executes the program line by
line [2].

**3.** System software manages or translates for the computer itself
(for example, an operating system or device driver) [1]; utility
software performs a specific maintenance task for the user (for
example, anti-virus software or a back-up utility) [1].

**4.** Command line, graphical, dialogue, and gesture-based interfaces
[2, allow 1 mark for any two correct].

**5.** Advantage: lower cost and available immediately, having already
been tested by a large user base [1]. Disadvantage: may include
unneeded features and cannot be tailored exactly to the user's
workflow [1].

**6. (a)** A supercomputer is more suitable [1], because it is built
for raw processing speed on computation-heavy problems such as weather
forecasting and climate research, rather than for high-volume
transaction throughput, which is what a mainframe is optimised for
[2].
**(b)** FLOPS (floating-point operations per second) or MIPS
(millions of instructions per second) [1].

**7. (a)** A mainframe is appropriate because it is built to score
highly on RAS — reliability, availability and serviceability — which
matches the bank's need for near-continuous availability and minimal
data loss, whereas a supercomputer is optimised for raw computational
speed rather than sustained transactional reliability [3].
**(b)** Fault tolerance is the ability of the system to keep running,
often in a degraded state, when a component fails, whereas reliability
more generally describes how rarely the system fails in the first
place — fault tolerance is about coping with a failure that has
already happened, not preventing failures [2].

**8. (a)** An interpreter translates and executes code line by line,
which allows errors to be identified and fixed quickly during
development without needing to wait for the entire program to be
translated first [2].
**(b)** A compiler translates and stores the whole program in advance,
producing an executable file that runs faster and does not need the
source code or a translator present at run time, which is preferable
once the program is finished and ready for regular use [2].

**9. (a)** For example, lower cost or immediate availability without
a lengthy development period [1].
**(b)** For example, the ability to match the firm's exact
requirements and adapt the software as its needs change over time [1].
**(c)** Because the right choice depends on the firm's specific
budget, timescale, and how unusual or standard its accounting workflow
is; a generic assertion that one option is "better" without relating
it to these factors does not demonstrate the evaluative skill the
question is testing [2].

**10. (a)** A graphical user interface, because it requires no prior
knowledge of commands and gives immediate visual feedback, making it
usable by visitors of all ages and technical abilities without
training [2].
**(b)** A command line interface, because it allows precise,
scriptable control and faster operation for a technically skilled
user managing many servers, where speed and precision outweigh
ease-of-learning concerns [2].

## A note on exam technique for this topic

Nearly every sub-topic in Section 2 is examined through "advantages
and disadvantages" or a "justify your choice" scenario, so the
highest-value revision habit is holding, for every named category, at
least one alternative it could be confused with and one concrete
scenario where choosing between the two genuinely matters. A generic
answer that a system is simply "more advanced" or "better" earns
little credit; the mark scheme is looking for the choice to be tied
explicitly to the scenario's specific details — budget, timescale,
required reliability, or the technical skill of the intended user —
the same way questions 6 to 10 above are structured.
