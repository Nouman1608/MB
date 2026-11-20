---
title: "Cambridge A Level Information Technology (ICT): 16.10 Maintenance (9626) -- Revision Notes"
seoTitle: "Cambridge A Level IT 9626: Maintenance Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on section 16.10 of Cambridge A Level IT 9626: the four types of maintenance, how they are carried out, comparisons and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

For full explanations and a worked example, read the [section 16.10 study guide](/resources/cambridge-a-level-ict-9626-maintenance/) first. These notes condense **section 16.10 Maintenance** of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 4). It is **A Level only** content, examined in Paper 3 (Advanced Theory).

Test yourself with the [practice questions](/resources/cambridge-a-level-ict-9626-maintenance-practice/). The [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) has every topic and the [free diagnostics](/diagnostics/) show where to start.

## Why maintenance?

- Faults appear that testing missed.
- Laws, hardware and software change.
- Users want improvements.
- Code and documentation decay over time.
- Every change must be **tested** and the **documentation updated**.

## The four types

| Type | What | Why needed | How carried out |
|---|---|---|---|
| **Corrective** | Fix faults found in use | Testing cannot prove a system is fault-free | Report, reproduce, find cause, fix, test (including related parts), release patch, update fault log |
| **Adaptive** | Change the system for a changed environment | Laws, tax rates, operating systems or hardware change | Identify the change, find affected parts, modify, test in the new environment, release, retrain if needed |
| **Perfective** | Improve a working system | Users want faster, easier or extra features | Collect requests, assess value and cost, design, build, test, release with updated documents |
| **Preventive** | Avoid future problems | Hidden risks (messy code, old documents, weak security) | Review or audit, tidy code, update documentation, apply security updates, test, release in planned downtime |

## Advantages and disadvantages

| Type | Advantages | Disadvantages |
|---|---|---|
| **Corrective** | Removes harmful faults; improves reliability; often quick | Reactive; rushed fixes can add faults; may need downtime |
| **Adaptive** | Keeps system legal and compatible; extends its life | Outside deadlines; costly; no new benefit to users |
| **Perfective** | Better system; happier users; competitive | Costs without fixing a fault; may add faults; feature creep |
| **Preventive** | Fewer future faults; easier later changes; safer | Cost now, benefit later and unseen; hard to justify; can cause faults |

## Spot the type: ask what caused the change

| Cause | Type |
|---|---|
| A fault happened | Corrective |
| The environment changed (law, device, operating system) | Adaptive |
| Users want it better; nothing is wrong | Perfective |
| Nothing has gone wrong yet; removing a risk | Preventive |

## Examples

- Crash when a name has an apostrophe: **corrective**.
- New tax band in a payroll system: **adaptive**.
- Faster searches on request: **perfective**.
- Rewriting unclear code and updating documents before any fault: **preventive**.
- New version of the operating system means the program must be changed to run: **adaptive**.
- Adding a dark-mode option because users asked: **perfective**.

## Worked example

A shop's till software has these tasks on its list.

1. The receipt prints the wrong VAT when a discount code is used: **corrective**. Reproduce the fault, correct the calculation, test with discounts, release a patch.
2. The card machine supplier changes its connection method, so the till must be changed: **adaptive**.
3. The manager asks for a daily sales graph: **perfective**.
4. The developer notices that the database has no automatic backup and sets one up: **preventive**.

## Must-know distinctions

- **Adaptive** (environment changed) vs **perfective** (user wants better).
- **Preventive** (stop a future problem) vs **perfective** (add value now).
- **Corrective** (fix a fault now) vs **preventive** (no fault has happened yet).
- **Reactive** (corrective) vs **planned** (perfective, preventive).

## Quick self-test

1. Which type fixes faults found by users?
2. A new law changes how holiday pay is calculated. Which type?
3. Users ask for a search facility. Which type?
4. A programmer cleans up the code and updates the documentation, with no fault reported. Which type?
5. Why must maintenance changes be tested?
6. Give one disadvantage of preventive maintenance.
7. Which document does a maintainer use to understand the system?
8. Give one disadvantage of corrective maintenance.
9. A web app breaks when a browser is updated and is changed so that it works again. Which type?
10. Why is perfective maintenance sometimes criticised?

### Answers

1. Corrective maintenance.
2. Adaptive maintenance.
3. Perfective maintenance.
4. Preventive maintenance.
5. A change can introduce new faults, and the system must still work for everything else.
6. Any one: costs time and money now for a benefit that cannot be seen; users see no change; careless changes can cause faults.
7. The technical documentation.
8. Any one: it is reactive, so users are affected before the fix; rushed fixes may add new faults; may need downtime.
9. Adaptive maintenance (the environment, the browser, changed).
10. It costs money without fixing a fault and can lead to feature creep, making the system more complicated.

## Where marks are usually lost

- Mixing up adaptive and perfective.
- Calling preventive maintenance "fixing a fault".
- Naming the type but not the reason in the scenario.
- Leaving out how it is carried out (find, change, test, release, update documents).
- Giving advantages only.
- Forgetting that every type needs testing.

## Frequently asked questions

**How do I tell adaptive from perfective maintenance?**
Ask whether something outside the system changed. If so, it is adaptive. If the system works and users simply want it improved, it is perfective.

**Does maintenance include updating documentation?**
Yes. Every change should be recorded in the documentation, or later maintainers will be misled.

**Is maintenance part of the system life cycle?**
Yes. It follows implementation and evaluation, and large changes may start a new round of analysis.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 4, Cambridge University Press & Assessment. Section 16.10: Maintenance.
