---
title: "Cambridge A Level Information Technology (ICT): 16.9 Prototyping (9626)"
seoTitle: "Cambridge A Level IT 9626: Prototyping Study Guide"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "System life cycle"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 16.09
syllabusTopics:
  - qualification: "a-level"
    topic: "system-life-cycle"
  - qualification: "a-level"
    topic: "system-life-cycle"
    subtopic: "prototyping"
description: "Study guide to section 16.9 of Cambridge A Level IT 9626: evolutionary, incremental, throwaway and rapid prototyping, why each is used and their advantages and disadvantages."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-20: check the wording that separates rapid prototyping from throwaway prototyping against the examiner reports; the syllabus names both but does not define them."
publishedDate: 2026-11-20
featured: false
---

This guide goes deeper into section **16.9 Prototyping** of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 4). It is **A Level only** content examined in Paper 3 (Advanced Theory), where calculators are not allowed.

The syllabus asks you to know:

- the **types of prototyping** and why each is needed: **evolutionary, incremental, throwaway and rapid**
- the **advantages and disadvantages** of each type of prototyping.

Use it with the [whole-topic study guide](/resources/a-level-cambridge-ict-system-life-cycle/), the [section 16.9 revision notes](/resources/cambridge-a-level-ict-9626-prototyping-revision-notes/) and the [practice questions](/resources/cambridge-a-level-ict-9626-prototyping-practice/). The [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) lists every topic.

## What is a prototype?

A **prototype** is an early, working model of all or part of a system. It may be a set of screens that users can click through, a working part with a few functions, or a simplified version of the whole system. It lets users and developers see and try something real before the whole system is built.

### Why use prototypes?

- Users often cannot say what they need until they see something. A prototype turns an abstract specification into something they can react to.
- Misunderstandings between users and developers are found early, when changes are cheap.
- Designs for screens, menus and reports can be tested with real users.
- Risks, such as whether a technology can do the job, can be tested before a large investment.
- Users are involved, so they feel ownership and are more likely to accept the result.

## The four types

### Evolutionary prototyping

**What it is.** A first prototype is built from the best understood requirements. Users try it, give feedback, and the prototype is improved again and again. Each version builds on the last, and the final version **becomes the finished system**.

**Why it is needed.** When requirements are unclear or likely to change, so the system must grow as understanding grows.

| Advantages | Disadvantages |
|---|---|
| Users are involved throughout, so the result fits their needs | Hard to plan the end date and cost: it can go on for a long time |
| No work is wasted, since each version is kept | The first version may not have been built with a good structure, and later changes can make the system messy |
| Changes in requirements are easy to include | Documentation and testing may be neglected |
| Working software is available early | Users may keep asking for extras ("feature creep") |

### Incremental prototyping

**What it is.** The system is divided into separate components (for example, the booking screens, the reports, the payments). A prototype is built for each component separately, and the finished components are **combined** to form the whole system.

**Why it is needed.** When the system is large and can be split into parts that different teams can build, or when some parts are better understood than others.

| Advantages | Disadvantages |
|---|---|
| Teams can work on components at the same time | The components must fit together, so the overall design must be planned |
| Each component is tested and refined on its own | Problems in joining components (integration) may appear late |
| Parts that are ready can be used early | An early decision about how to split the system may prove wrong |
| Easier to manage than one large prototype | The whole system takes longer to be seen working together |

*Note:* incremental *development* delivers working parts as they are finished. Incremental *prototyping* builds trial versions of the parts and then combines them.

### Throwaway prototyping

**What it is.** A prototype is built to find out what users really need, or to test an idea, and then it is **discarded**. The real system is built separately, starting again with what was learned. The prototype is quick and rough: it need not be well built, because it will not be used.

**Why it is needed.** When requirements are poorly understood and mistakes would be expensive, so it is worth building something that will be thrown away to avoid building the wrong system.

| Advantages | Disadvantages |
|---|---|
| Quickly clarifies the requirements before the real build | The effort of building the prototype is wasted |
| Can be built with simple tools without worrying about quality | Users may think the prototype is nearly the finished system and expect it soon |
| Reduces the risk of building the wrong system | Adds time and cost to the project |
| Poor ideas can be dropped cheaply | There may be pressure to keep the prototype and not discard it, leading to poor quality |

### Rapid prototyping

**What it is.** A prototype is built **as quickly as possible**, usually with tools that can produce screens and simple behaviour fast, such as screen designers, templates and code generators. The aim is to get something in front of users within days. It can be used to show the look and feel of a system, and it is often then thrown away, though a rapid prototype can also be developed further.

**Why it is needed.** When feedback is needed fast, for example at the start of a project, or to win approval for an idea.

| Advantages | Disadvantages |
|---|---|
| Users see something very quickly and can give early feedback | Speed may mean poor quality, so the prototype may not be reliable |
| Misunderstandings are found early | May leave out important features such as security, validation and error handling |
| Cheap and quick to change | Users may expect the real system to be built as quickly |
| Encourages user involvement | Needs suitable tools and skilled developers |

### Rapid vs throwaway

The two overlap. **Rapid** describes *how* the prototype is built (very quickly). **Throwaway** describes *what happens* to it (it is discarded after it has been used to find out requirements). A prototype can be both, but a rapid prototype need not be thrown away. In answers, make clear which feature you mean: speed of building, or being discarded.

## Comparing the four

| Type | Final product | Main purpose | Main risk |
|---|---|---|---|
| **Evolutionary** | The prototype itself, after many refinements | Grow the system as requirements become clear | Never finishes; messy structure |
| **Incremental** | Prototypes of components, combined | Build a large system by parts | Integration problems |
| **Throwaway** | A new system, built after the prototype is discarded | Discover requirements | Wasted effort |
| **Rapid** | May be discarded or developed | Fast feedback | Poor quality; false expectations |

### Worked example

A hospital wants a system to schedule operating theatres, but the staff cannot explain exactly how they plan lists.

1. The developers build a **rapid, throwaway** prototype in two days: screens only, with sample data.
2. The theatre managers click through it and say that the list must show anaesthetists as well as surgeons. This would have been missed in a written specification.
3. The prototype is discarded, and the real system is built to a revised specification.

Alternatively, if the team expected the requirements to keep changing, they might build an **evolutionary** prototype and refine it until it becomes the live system.

## Common errors

- Describing every prototype as "thrown away". Evolutionary prototypes become the final system.
- Confusing incremental prototyping with incremental development.
- Saying a prototype is "a draft on paper". A prototype in this syllabus is a working model.
- Giving advantages only, or giving the same advantage for all types.
- Not linking the type to when it is needed.

## Frequently asked questions

**What types of prototyping does the 9626 syllabus include?**
Evolutionary, incremental, throwaway and rapid.

**What is the difference between evolutionary and throwaway prototyping?**
An evolutionary prototype is refined repeatedly until it becomes the final system. A throwaway prototype is used to clarify requirements and is then discarded.

**Why is prototyping useful?**
It lets users see and try something real early, so misunderstandings and design problems are found when they are cheap to fix.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 4, Cambridge University Press & Assessment. Section 16.9: Prototyping.
