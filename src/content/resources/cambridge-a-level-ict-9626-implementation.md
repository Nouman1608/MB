---
title: "Cambridge A Level Information Technology (ICT): 16.5 Implementation (9626)"
seoTitle: "Cambridge A Level IT 9626: Implementation Methods Guide"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "System life cycle"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 16.05
syllabusTopics:
  - qualification: "a-level"
    topic: "system-life-cycle"
  - qualification: "a-level"
    topic: "system-life-cycle"
    subtopic: "implementation"
description: "Study guide to section 16.5 of Cambridge A Level IT 9626: parallel running, direct changeover, phased and pilot implementation, with suitability for given situations."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide goes deeper into section **16.5 Implementation** of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 4). It is **A Level only** content examined in Paper 3 (Advanced Theory), where calculators are not allowed.

The syllabus asks you to know:

- the methods of implementing a system: **parallel running, direct changeover, phased implementation and pilot implementation**
- the advantages and disadvantages of each method for a given situation, including how each method is implemented in that situation and the suitability of each method for it.

Use it with the [whole-topic study guide](/resources/a-level-cambridge-ict-system-life-cycle/), the [section 16.5 revision notes](/resources/cambridge-a-level-ict-9626-implementation-revision-notes/) and the [practice questions](/resources/cambridge-a-level-ict-9626-implementation-practice/). The [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) lists every topic.

## What implementation means

Implementation is the stage in which the new system replaces the old one and starts to be used for real work. Whichever method is used, several jobs must be done:

- **Install** the hardware and software, and set up the network.
- **Transfer the data** from the old system into the new one (file conversion), checking that nothing is lost or changed.
- **Train the users** so they can use the system and know what to do if something goes wrong.
- **Choose a changeover method**, which decides how and when the old system is replaced.

The choice of method is a trade-off between **risk**, **cost**, **time** and **disruption**. Which is best depends on the situation, so a good answer always refers to the scenario.

## The four methods

### Parallel running

The old and new systems are both run, with the same real data, for a period. Results are compared. When the organisation is satisfied that the new system is correct, the old system is switched off.

**How it is implemented:** a payroll department enters this month's timesheets into both systems and compares the two sets of payslips. Differences are investigated. After, say, two pay runs with no unexplained differences, the old system is retired.

| Advantages | Disadvantages |
|---|---|
| Lowest risk: if the new system fails, the old one is still there | Expensive and slow: all work is done twice |
| Results can be compared to check that the new system is correct | Staff workload doubles, which can cause tiredness and errors |
| Users have time to learn the new system | Needs two sets of equipment or enough capacity for both |
| Little disruption to customers | Can be confusing about which system is the "master" |

**Suitable when:** the system is critical and mistakes would be serious, such as payroll or banking; the organisation can afford the extra staff time.

### Direct changeover

The old system is stopped on a set date and the new system starts immediately. There is no overlap.

**How it is implemented:** over a weekend, the company backs up and converts the old data, switches off the old system and starts the new one on Monday morning.

| Advantages | Disadvantages |
|---|---|
| Cheapest and quickest: no double running | Highest risk: if the new system fails there is no fallback |
| Everyone moves to the new system at once, with no confusion | Faults may appear only in real use and affect the whole organisation |
| No need for two systems | Users have no time to learn gradually; staff need full training beforehand |
| | The old system cannot be used to compare results |

**Suitable when:** the system is not critical or the old system is already failing; the new system has been tested very thoroughly; a short, planned stoppage is acceptable, such as a closed weekend.

### Phased implementation

The new system is introduced **one part at a time**. Each part (module, function or process) replaces the matching part of the old system, and the next part is not started until the previous one works.

**How it is implemented:** a college replaces its systems in three phases: first student enrolment, then timetabling and finally attendance recording. The old system carries on handling the parts that have not yet been replaced.

| Advantages | Disadvantages |
|---|---|
| If a part fails, only that part is affected, so the risk is lower than direct changeover | Takes longer to complete the whole changeover |
| Users learn one part at a time | The old and new systems must work together during the transition (interfaces) |
| Problems found in one phase can be fixed before the next | The parts must be able to be separated |
| Training and support can be spread out | May cost more overall because of the link between systems |

**Suitable when:** the system can be split into independent modules; the organisation wants to reduce risk without the cost of full parallel running.

### Pilot implementation

The **whole new system** is introduced, but only in **one location or department** (the pilot site). If the pilot is successful, the system is rolled out to the other sites.

**How it is implemented:** a supermarket chain with 40 stores installs the new till system in one store for six weeks. Staff report problems, which are fixed. If it works well, the other stores follow, perhaps in groups.

| Advantages | Disadvantages |
|---|---|
| Faults affect only one site, so the risk is limited | Takes a long time to reach all sites |
| The pilot site's users can help train the others | Pilot site staff may have more problems and lower morale |
| Tested in real conditions with real data | Two systems exist at the same time across the organisation |
| Experience from the pilot is used to improve the system | Only works where there are several sites or departments |

**Suitable when:** the organisation has many similar sites, branches or departments, and the system is big enough to justify a trial.

## Phased vs pilot

These two are often confused.

- **Phased:** *part* of the system, introduced *everywhere*.
- **Pilot:** *all* of the system, introduced in *one place*.

## Choosing a method: worked comparison

A regional bank must replace the system that calculates interest on savings accounts. An error would affect thousands of customers. **Parallel running** is the best fit: the bank calculates interest both ways for two months, compares the results, and only then closes the old system. The extra cost is justified by the risk.

A small café chain with three shops replaces its stock spreadsheet with a new stock app. The business can recover from a mistake in a day. **Direct changeover** on a Monday morning is cheap and quick.

A university with five faculties introduces a new student records system. It begins with the smallest faculty, fixes the problems, and then rolls it out to the others: **pilot implementation**. If instead the system has separate enrolment, fees and results modules, it could be introduced module by module: **phased implementation**.

### Structuring an exam answer

In an exam answer:

1. Name the method.
2. Say how it would be carried out *in this situation*.
3. Give an advantage or disadvantage *for this situation*.
4. If asked to justify or evaluate, reach a conclusion.

For example: "Parallel running is suitable because the hospital's patient records are critical. Both systems would run side by side, so if the new system fails the old one still holds the records. However, staff must enter data twice, which takes time."

## Common errors

- Describing phased implementation as "one department at a time". That is pilot (or a roll-out). Phased means one part of the system at a time.
- Giving "cheap" as the only reason for direct changeover with no mention of the risk.
- Writing generic advantages that do not mention the scenario.
- Saying parallel running is "safe" without saying why: the old system is still available.
- Recommending pilot implementation for an organisation with one site.

## Frequently asked questions

**What are the four implementation methods in Cambridge 9626?**
Parallel running, direct changeover, phased implementation and pilot implementation.

**Which implementation method is the riskiest?**
Direct changeover, because the old system is stopped and nothing is available to fall back on if the new system fails.

**Why is parallel running expensive?**
All the work is done twice, on both systems, so more staff time and equipment are needed.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 4, Cambridge University Press & Assessment. Section 16.5: Implementation.
