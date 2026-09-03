---
title: "Cambridge A-Level ICT: Hardware and Software — Revision Notes (9626)"
resourceType: "revision-notes"
subject: "ict"
level: ["a-levels"]
topic: "Section 2 – Hardware and Software"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 1
syllabusTopics:
  - qualification: "a-level"
    topic: "hardware-and-software"
description: "Condensed revision notes on mainframes/supercomputers, system and utility software, custom vs off-the-shelf software, and user interfaces for Cambridge AS & A Level ICT Section 2 (9626)."
author: "marlbridge-academic-team"
publishedDate: 2026-09-03
featured: false
---

Related: [Section 2 study guide](/resources/a-level-cambridge-ict-hardware-and-software/)

Condensed, exam-focused notes for Section 2 of Cambridge AS & A Level ICT (9626), 2025-2027 series.

## 2.1 Mainframes and supercomputers

| | Mainframe | Supercomputer |
|---|---|---|
| Built for | Reliability, high-volume transaction throughput | Raw processing speed |
| Example use | Census, transaction processing | Weather forecasting, quantum mechanics |
| Metrics | RAS (reliability/availability/serviceability), fault tolerance | MIPS, FLOPS |

- **RAS**: reliability (how rarely it fails), availability (how much of the time it's usable, accounting
  for planned maintenance), serviceability (how quickly/easily it's repaired).
- **Fault tolerance**: ability to keep running, often in a degraded state, when a component fails.
- Keep the *use case* attached to each term — mainframe/supercomputer confusion is a common error.

## 2.2 System software

- Types: compilers, interpreters, linkers, device drivers, operating systems, utilities.
- **Compiler**: translates and stores an entire program before execution. **Interpreter**: translates
  and executes line by line (why development-stage code is often run through an interpreter first).

## 2.3 Utility software

- Named types: anti-virus, back-up, data compression, disk defragmentation, formatting (low-level,
  partitioning, high-level), file copying/deleting, file management systems, disk management systems.
- **System software manages/translates for the computer itself; utility software performs a specific
  maintenance task for the user.** Confusing the two loses marks even with correct factual content.

## 2.4 Custom-written vs off-the-shelf software

- **Off-the-shelf**: lower cost, available immediately, well tested by a large user base; may include
  unneeded features, can't be tailored exactly.
- **Custom-written**: matches exact requirements, adaptable as needs evolve; costs more, takes time,
  depends on ongoing developer support.
- Also: proprietary vs open-source software.

## 2.5 User interfaces

- Types: command line, graphical, dialogue, gesture-based.
- Match each interface type to a suitable real-world use (e.g. command line for a systems administrator,
  graphical for a general consumer device), not just a definition.

## Exam technique for this topic

Nearly every sub-topic in this section ends in "advantages and disadvantages," which is where exam marks
concentrate — build revision around comparison tables (mainframe vs supercomputer, interpreter vs
compiler, proprietary vs open-source, GUI vs command line) rather than isolated definitions. When a
question describes a scenario and asks you to justify a software or hardware choice, weigh both options
against the scenario's specific details (budget, timescale, how unusual the workflow is) rather than
asserting one option is simply "better" — a generic "it's more advanced" answer earns no marks compared
with a scenario-linked justification.

## Worked example: mainframe or supercomputer?

A national statistics agency needs to process millions of census transactions reliably, ensuring no
data is lost even during scheduled maintenance windows. A mainframe suits this scenario because it is
built for RAS — high reliability, near-continuous availability, and quick serviceability — and for
high-volume transaction throughput, exactly matching a census's need to process enormous numbers of
individual records accurately and continuously. A supercomputer, by contrast, would be the wrong choice
here despite its greater raw processing power, because the census task is not primarily
computation-heavy in the way a climate simulation or quantum mechanics calculation is — it needs
sustained transactional reliability, not maximum floating-point operations per second (FLOPS). This
kind of matched, scenario-specific justification — not simply "mainframes are for business, supercomputers
are for science" — is what full marks on this sub-topic require.

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

**Answers:** 1. Mainframe: reliability and high-volume transaction throughput. Supercomputer: raw
processing speed on computation-heavy problems. 2. Reliability = how rarely it fails; availability = how
much of the time it's usable; serviceability = how quickly/easily it's repaired. 3. A compiler translates
and stores the whole program before execution; an interpreter translates and executes line by line. 4.
Advantage: matches exact requirements/adaptable. Disadvantage: higher cost/longer development time. 5.
Command line — allows precise, scriptable control suited to a technically skilled user.

## Why this section rewards comparison over recall

Section 2's content is unusually dense with named categories (mainframe, supercomputer, system software,
utility software, custom-written, off-the-shelf, four interface types), and it can be tempting to revise
each as an isolated definition to memorise. The exam consistently rewards a different approach: for
every category, hold in mind at least one alternative it could be confused with, and one concrete
scenario where choosing between the two matters. This comparison-first revision style — rather than a
long list of separate definitions — is what turns recognition of a term into the ability to justify a
choice, which is what nearly every question in this section actually tests.
