---
title: "Cambridge A Level Information Technology (ICT): 16.8 Methods of software development (9626)"
seoTitle: "Cambridge A Level IT 9626: Software Development Methods"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "System life cycle"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 16.08
syllabusTopics:
  - qualification: "a-level"
    topic: "system-life-cycle"
  - qualification: "a-level"
    topic: "system-life-cycle"
    subtopic: "methods-of-software-development"
description: "Study guide to section 16.8 of Cambridge A Level IT 9626: the stages, processes, advantages and disadvantages of agile, iterative, incremental, RAD and waterfall development."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide goes deeper into section **16.8 Methods of software development** of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 4). It is **A Level only** content examined in Paper 3 (Advanced Theory), where calculators are not allowed.

The syllabus asks you to know the **stages and processes** of each of these methods, and the **advantages and disadvantages** of each:

- agile
- iterative
- incremental
- rapid application development (RAD)
- waterfall.

Use it with the [whole-topic study guide](/resources/a-level-cambridge-ict-system-life-cycle/), the [section 16.8 revision notes](/resources/cambridge-a-level-ict-9626-software-development-methods-revision-notes/) and the [practice questions](/resources/cambridge-a-level-ict-9626-software-development-methods-practice/). The [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) lists every topic.

## Why there is more than one method

The stages of the system life cycle (analysis, design, development, testing, and so on) are the same in all projects. A **development method** is a way of arranging those stages in time. Some methods do each stage once, in order. Others repeat stages in short cycles, so users see working software early.

The best method depends on how clear the requirements are, how fast the product is needed, how much users can be involved and how costly a mistake would be.

## Waterfall

**Process.** The stages are completed one after another, each one finished and signed off before the next begins: requirements, design, build, test, implement, maintain. Work flows down like a waterfall and there is little or no going back.

**Features.** Heavy documentation at each stage; the user sees the product only at the end.

| Advantages | Disadvantages |
|---|---|
| Simple to understand and manage | Hard to change requirements once the design is finished |
| Clear milestones and documents for each stage | Users see nothing working until near the end, so mismatches are found late |
| Easy to plan time and cost | A mistake in an early stage may not be found until testing, when it is costly to fix |
| Works well when requirements are clear and fixed | Slow to deliver any benefit |

**Suitable when:** requirements are clear and unlikely to change, and the cost of errors is high, for example software for an aircraft system or a regulated medical device.

## Iterative development

**Process.** The team builds a first, rough version of the *whole* system, tests it, gathers feedback and then repeats the cycle (analyse, design, build, test, review). Each repetition (iteration) refines and improves the whole system until it is good enough.

**Features.** The product is improved by repeating the cycle; requirements are allowed to develop as users see versions.

| Advantages | Disadvantages |
|---|---|
| Changes to requirements can be included in the next iteration | May go on too long if there is no clear end point |
| Problems found early and fixed in later versions | Cost and time are harder to predict |
| Users give feedback on real versions | Needs good management of versions and documentation |
| Risk is reduced because there is always a working version | The whole design must be thought out enough at the start to support later cycles |

**Suitable when:** requirements are not fully known and are expected to change as users see the product.

## Incremental development

**Process.** The system is split into parts (increments), for example modules. Each increment is analysed, designed, built, tested and delivered, and added to those already finished. After several increments the system is complete.

**Features.** Each increment is a working part; core functions come first.

| Advantages | Disadvantages |
|---|---|
| Users get useful parts of the system early | The parts must be designed to fit together, which needs overall planning |
| Easier to test small pieces | Mistakes in the overall design show up late |
| Lower risk: if one increment is poor, the others are unaffected | More integration work is needed |
| Easier to change later increments | The complete system takes longer to finish |

**Suitable when:** the system can be split into independent modules and the client wants core features quickly.

### Iterative vs incremental

- **Iterative:** repeat and *refine the whole thing*. The first version is rough; later versions are better.
- **Incremental:** *add parts*. Each part, once delivered, is finished.

In practice they are often combined: each increment is built in iterations.

## Rapid application development (RAD)

**Process.** RAD uses quick prototypes, strong user involvement and reusable components or tools such as code generators and templates. A typical RAD project includes: planning of requirements with users, user design workshops in which prototypes are built and refined, rapid construction using reusable parts, and then cutover to the live system. Work is **time-boxed**: each stage has a fixed, short deadline.

| Advantages | Disadvantages |
|---|---|
| Fast delivery | Needs highly skilled developers and tools |
| Users are involved all the way, so the product fits their needs | Needs users to be available for workshops, which takes them from their work |
| Reusable components save effort | Quality and documentation may suffer from the speed |
| Changes are easy in early stages | Not suitable for large, complex or safety-critical systems |

**Suitable when:** a working system is needed quickly, users are available, and the system is not too large or critical.

## Agile

**Process.** Agile builds software in short cycles called **sprints** (commonly one to four weeks). At the start of each sprint the team chooses items from a prioritised list (the backlog), and at the end it delivers working software. Teams are small and work closely with the customer. They hold short daily meetings to share progress and end each sprint with a review and a look back at how to improve. Requirements can change between sprints.

**Features.** Working software over heavy documentation; frequent customer involvement; welcoming change.

| Advantages | Disadvantages |
|---|---|
| Quick delivery of working software | Hard to predict the final cost, time and exact features |
| Flexible: changes can be added in any sprint | Needs constant customer involvement, which may not be possible |
| Customer feedback every sprint | Less documentation, which can make maintenance harder |
| Problems spotted early | Needs a skilled, disciplined team; can drift without a clear goal |

**Suitable when:** requirements are uncertain or change quickly, and the customer can work with the team.

## Choosing a method

| Situation | Suitable method | Why |
|---|---|---|
| Control software for a train braking system with fixed rules | Waterfall | Requirements are clear; safety needs full documentation and checking |
| A new mobile app where the client is unsure what features users will want | Agile (or iterative) | Features can be changed after each sprint or version |
| A large school management system that can be released as modules (registers, reports, fees) | Incremental | Each module can be delivered and used on its own |
| A basic internal booking tool needed in six weeks, with users available | RAD | Speed and user involvement |
| A new design tool where user feedback decides what works | Iterative | Each version is refined |

### Worked example

A charity needs a volunteer rota system. The manager knows she wants a rota, but is unsure about reports or text alerts, and her staff are happy to meet the developers weekly. The best choice is **agile**: a first sprint delivers the rota, later sprints add reports or alerts as she decides, and weekly meetings give feedback. Waterfall would fix the features before anyone had seen the system, so late changes would be costly.

## Common errors

- Confusing iterative and incremental. Iterative repeats the whole cycle to refine; incremental adds finished parts.
- Describing waterfall as "no testing". Testing is a stage, but it comes late.
- Saying agile means "no planning" or "no documentation". It means less documentation and short-term plans.
- Recommending a method without reference to the scenario.
- Stating only advantages.

## Frequently asked questions

**Which software development methods are in the 9626 syllabus?**
Agile, iterative, incremental, rapid application development (RAD) and waterfall.

**What is the main disadvantage of waterfall?**
It is hard to change anything once a stage is finished, and users see the product only at the end, so errors are found late.

**What is the main difference between iterative and incremental development?**
Iterative development repeats the cycle to refine the whole system. Incremental development builds and delivers the system part by part.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 4, Cambridge University Press & Assessment. Section 16.8: Methods of software development.
