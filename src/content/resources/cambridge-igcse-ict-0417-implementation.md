---
title: "Cambridge IGCSE ICT (0417): Implementation"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 7: The systems life cycle"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 7.4
syllabusTopics:
  - qualification: "igcse"
    topic: "the-systems-life-cycle"
    subtopic: "implementation-0417"
description: "Direct changeover, parallel running, pilot running and phased implementation compared, and how to justify a method, for Cambridge IGCSE ICT 0417 7.4."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Implementation is the stage where the organisation stops using the old system and starts using the new one. Section 7.4 of Cambridge IGCSE ICT 0417 asks for the "characteristics, uses, advantages and disadvantages of the four methods of implementation, direct changeover, parallel running, pilot running, phased implementation". Paper 1 (Theory) questions almost always attach these to an organisation and ask you to describe a method, compare two, or recommend one and justify it.

The [systems life cycle study guide](/resources/cambridge-igcse-ict-the-systems-life-cycle-study-guide/) introduces the four methods in one paragraph each. This page shows how to analyse a scenario and build a justified recommendation. For quick recall see the [implementation revision notes](/resources/cambridge-igcse-ict-0417-implementation-revision-notes/), and practise with the [implementation practice questions](/resources/cambridge-igcse-ict-0417-implementation-practice/).

## The four methods in detail

### Direct changeover

**Characteristics**: on an agreed date the old system is switched off and the new system is used from then on. There is no overlap.

**Uses**: small organisations, or systems where the old and new cannot sensibly run together, for example when the old system's hardware is being removed, or when a new system is needed urgently.

**Advantages**
- The benefits of the new system are available immediately across the organisation.
- It is the cheapest method: staff do not do work twice and there is only one system to support.
- It is the quickest method to complete.

**Disadvantages**
- If the new system fails, there is no working system to fall back on, so work stops and data may be lost.
- All staff must be trained and confident before the changeover date.
- It is the highest-risk method.

### Parallel running

**Characteristics**: the old and new systems run side by side for a period. The same data is entered into both and the outputs are compared. When the new system has been shown to be reliable, the old one is stopped.

**Uses**: systems where failure would be very serious, for example financial or medical records, and where outputs can be compared.

**Advantages**
- If the new system fails, the old system is still working, so no data is lost.
- Outputs can be compared, so errors in the new system are found before it is relied on.
- Staff can be trained gradually while the old system still works.

**Disadvantages**
- It is the most expensive method: every task is done twice, so more staff time is needed.
- Staff workload is heavy, which can itself cause errors.
- The full benefits of the new system arrive later.

### Pilot running

**Characteristics**: the whole new system is introduced in one branch, department or site first. The rest of the organisation continues with the old system. When the pilot works, the new system is rolled out to the other sites.

**Uses**: organisations with several branches or departments that do similar work, such as a chain of shops, libraries or schools.

**Advantages**
- If the system fails, only one site is affected.
- Staff at the pilot site can find problems and help train staff at other sites.
- It is cheaper than running two systems everywhere.

**Disadvantages**
- Other sites wait longer for the benefits.
- If the pilot fails, that site is still affected and may lose data.
- The pilot site may not be typical, so some problems only appear later at other sites.

### Phased implementation

**Characteristics**: the new system is introduced one part (module) at a time across the organisation. The old system continues for the parts not yet changed. When one part works, the next is introduced.

**Uses**: systems that can be split into separate modules, such as stock control, then sales, then payroll.

**Advantages**
- If one part fails, only that part is affected, and the problem is easier to trace.
- Staff learn the system a part at a time.
- Each part can be checked before the next is added.

**Disadvantages**
- The whole changeover takes a long time.
- Data must pass between old and new parts while both exist, which can cause problems.
- Only suitable if the system can be divided into parts.

## Pilot or phased? The key distinction

The two are often confused. Think of the organisation as a grid of **sites** (rows) and **parts of the system** (columns):

- **Pilot**: the *whole* new system, at *one site* first.
- **Phased**: *one part* of the new system, at *every site* (or across the organisation) first.

A chain of 20 garden centres that tries the complete new till and stock system in its largest store first is using pilot running. A hospital that switches every ward to the new admissions module first, then the pharmacy module, then billing, is using phased implementation.

## Choosing a method: four questions to ask

| Question about the scenario | Points towards |
|---|---|
| Would failure be dangerous or very costly (patients, money, legal records)? | Parallel running |
| Is the organisation small, or is cost or speed the main concern? | Direct changeover |
| Are there several similar branches or departments? | Pilot running |
| Can the system be split into clear modules? | Phased implementation |

Use the facts in the question. A recommendation with no reason taken from the scenario earns little.

### Worked example: applying the questions

*Scenario: a national chain of 45 pharmacies is replacing its prescription records system. Recommend an implementation method.*

- Failure is serious: wrong or missing prescription records could harm patients. This rules out direct changeover.
- There are 45 similar branches, so the full system could be tried in one first.
- Parallel running in all 45 branches would double the work of every pharmacist.

A strong recommendation combines these: **pilot running**, introducing the system in one branch first, so any fault affects only that branch's patients; the lessons learned and the trained staff can then help the other branches. Some answers would also suggest running the old and new systems in parallel *within* the pilot branch, which keeps a fall-back for patients there. Both are justified because each point links to a fact in the scenario.

## Annotated model answer

*Question: a small café with one till is replacing its cash register with a computerised point-of-sale system. Explain why direct changeover could be suitable.*

"The café has only one till and one site, so pilot or phased methods are not really possible **[uses the scenario to rule out alternatives]**. Direct changeover is the cheapest and quickest method, which matters for a small business **[advantage linked to size]**. If the new system fails, staff could temporarily take payments by hand, so the risk of failure is low **[addresses the main disadvantage]**."

## Common mistakes

- Describing pilot running as "introducing part of the system". That is phased.
- Recommending parallel running for every scenario without considering its cost.
- Giving an advantage without a reason, such as "parallel running is safer". Say why: the old system is still available if the new one fails.
- Confusing implementation with testing. Testing happens before implementation.
- Forgetting the disadvantages of direct changeover beyond "risky": say what is at risk.

## Exam technique

**Describe** a method: state what happens to the old and new systems. **Explain** an advantage: give the advantage and the reason. **Compare**: make matched points about both methods, linked by "whereas". **Justify** or **recommend**: choose one method and give reasons from the scenario, and, for the strongest answers, say why another method is less suitable.

## Syllabus reference

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Topic 7 "The systems life cycle", section 7.4 "Implementation".
