---
title: "Cambridge A Level Information Technology (ICT): 16.10 Maintenance (9626)"
seoTitle: "Cambridge A Level IT 9626: Maintenance Study Guide"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "System life cycle"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 16.10
syllabusTopics:
  - qualification: "a-level"
    topic: "system-life-cycle"
  - qualification: "a-level"
    topic: "system-life-cycle"
    subtopic: "maintenance"
description: "Study guide to section 16.10 of Cambridge A Level IT 9626: perfective, adaptive, preventive and corrective maintenance, how each is carried out, and their advantages and disadvantages."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide goes deeper into section **16.10 Maintenance** of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 4). It is **A Level only** content examined in Paper 3 (Advanced Theory), where calculators are not allowed.

The syllabus asks you to know:

- the **types of maintenance** and why each is needed: **perfective, adaptive, preventive and corrective**
- **how each type of maintenance is carried out**
- the **advantages and disadvantages** of the different types of maintenance.

Use it with the [whole-topic study guide](/resources/a-level-cambridge-ict-system-life-cycle/), the [section 16.10 revision notes](/resources/cambridge-a-level-ict-9626-maintenance-revision-notes/) and the [practice questions](/resources/cambridge-a-level-ict-9626-maintenance-practice/). The [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) lists every topic.

## Why systems need maintenance

A system does not stop needing attention when it goes live. Faults appear that testing missed. Laws, hardware and operating systems change. Users think of improvements. Over time, code that was written quickly becomes hard to understand. **Maintenance** is the work done on a system after it has been implemented to keep it working, up to date and useful. For most systems, maintenance costs more over the system's life than the original development, so planning for it matters.

Maintenance is carried out by support or development staff, using the **technical documentation** to understand the system. Each change must be **tested** before it is released, and the **documentation updated**, or the next change will be harder.

## The four types

### Corrective maintenance

**What it is.** Fixing faults (bugs) that are found after the system is in use.

**Why it is needed.** No amount of testing can prove a system has no faults. Users find errors such as wrong totals, crashes or data not saving.

**How it is carried out.**

1. A user or the help desk reports the fault, with details of what happened.
2. The developer tries to reproduce the fault.
3. The cause is found in the code, data or settings and corrected.
4. The corrected part is tested, including the parts that depend on it, to be sure that no new fault has been introduced.
5. The fix is released as a patch or update, and the documentation and fault log are updated.

**Example.** A booking system crashes when a customer's name contains an apostrophe. The code that handles names is corrected and tested with names such as O'Neil.

| Advantages | Disadvantages |
|---|---|
| Removes faults that harm users or give wrong results | Reactive: users are affected before the fix |
| Improves reliability and confidence | Urgent fixes may be rushed and untested, causing new faults |
| Often small and quick for simple faults | Can disrupt work if the system must be taken offline |

### Adaptive maintenance

**What it is.** Changing the system so that it keeps working when its **environment** changes.

**Why it is needed.** Laws, tax rates, hardware, operating systems, other software or business rules change, and the system must change with them or it becomes unusable or illegal.

**How it is carried out.**

1. The change in the environment is identified, such as a new data protection rule or a new version of the operating system.
2. The parts of the system that are affected are found, using the technical documentation.
3. The code, data or settings are modified.
4. The modified system is tested in the new environment.
5. It is released, and users are told and trained if the way they work has changed.

**Example.** A payroll system is changed after the government introduces a new tax band.

| Advantages | Disadvantages |
|---|---|
| Keeps the system legal, compatible and usable | Forced by outside events, so cannot always be planned |
| Extends the life of the system and avoids replacing it | Can be costly and give users no new benefit |
| Protects the organisation from fines or loss of service | Deadlines may be tight, increasing the risk of mistakes |

### Perfective maintenance

**What it is.** Improving the system, by adding features or making it faster, easier to use or more efficient, when nothing is wrong and the environment has not changed.

**Why it is needed.** Users find ways the system could serve them better, and the organisation's needs grow.

**How it is carried out.**

1. Requests and suggestions are collected from users, through feedback, evaluation or help-desk records.
2. The requests are assessed for value and cost, and the useful ones are chosen.
3. The changes are designed, written and tested.
4. The updated version is released with updated documentation and, if needed, training.

**Example.** Users ask for search results to load faster, so the database queries are improved.

| Advantages | Disadvantages |
|---|---|
| Makes the system better, more efficient or more pleasant | Costs time and money without fixing a fault |
| Increases user satisfaction and benefits | Changes can introduce new faults |
| Keeps the system competitive | Users must learn the changes; "feature creep" can make the system complicated |

### Preventive maintenance

**What it is.** Changing the system now to **prevent problems in the future**, before faults or failures happen.

**Why it is needed.** Weaknesses that have not yet caused a fault, such as hard-to-read code, out-of-date documentation, outdated security or a database nearing its capacity, can cause trouble later when they are more expensive to fix.

**How it is carried out.**

1. Reviews, audits or monitoring identify risks, such as code that is hard to understand or storage that is nearly full.
2. Code is tidied and made clearer (restructured) without changing what it does.
3. Documentation is brought up to date.
4. Security updates are applied and the system is tested for weaknesses.
5. Changes are tested and released, often in planned downtime.

**Example.** Developers rewrite an unclear module and update its documentation before any fault is reported.

| Advantages | Disadvantages |
|---|---|
| Reduces future faults and costs | Costs time and money now for a benefit that cannot be seen |
| Makes later changes easier and safer | Users see no visible change, so it can be hard to justify |
| Reduces the risk of security breaches and unplanned downtime | Careless changes can themselves cause faults |

## Comparing the types

| Type | Trigger | Aim | Planned? |
|---|---|---|---|
| **Corrective** | A fault has been found | Fix it | No: reactive |
| **Adaptive** | The environment changes | Keep it working | Partly: a deadline is set from outside |
| **Perfective** | Users want it better | Improve it | Yes |
| **Preventive** | A risk of future trouble | Avoid faults | Yes |

### Spotting the type

Ask: *what caused the change?*

- A fault happened: **corrective**.
- The world around the system changed (a law, a device, an operating system): **adaptive**.
- A user wants a new or better feature and nothing is wrong: **perfective**.
- Nothing has gone wrong yet, but the team is removing a risk: **preventive**.

### Worked example

A school's attendance system receives these requests in one term. Classify each.

1. The register shows the wrong total on days with a school trip: **corrective**.
2. The school moves to a new operating system on its computers, and the system has to be changed to run on it: **adaptive**.
3. Teachers ask for a one-click button to mark all pupils present: **perfective**.
4. The IT team notices that the system's passwords are stored without protection and encrypts them before anyone's data is stolen: **preventive**.

## Common errors

- Confusing adaptive and perfective. Adaptive responds to a change in the environment; perfective improves something that already works.
- Confusing preventive and perfective. Preventive removes a risk; perfective adds value.
- Saying corrective maintenance "improves the system". It fixes a fault.
- Naming a type without saying why it was needed in the scenario.
- Forgetting to mention testing and updating the documentation when describing how maintenance is carried out.

## Frequently asked questions

**What are the four types of maintenance?**
Corrective, adaptive, perfective and preventive.

**What is the difference between adaptive and perfective maintenance?**
Adaptive maintenance changes the system because the environment has changed. Perfective maintenance improves a working system because users want it to be better.

**Why must maintenance be tested?**
A change can introduce new faults, so every change needs testing before release.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 4, Cambridge University Press & Assessment. Section 16.10: Maintenance.
