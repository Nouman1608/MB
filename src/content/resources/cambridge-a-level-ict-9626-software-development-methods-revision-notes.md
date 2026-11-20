---
title: "Cambridge A Level Information Technology (ICT): 16.8 Methods of software development (9626) -- Revision Notes"
seoTitle: "Cambridge A Level IT 9626: Development Methods Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on section 16.8 of Cambridge A Level IT 9626: waterfall, iterative, incremental, RAD and agile compared, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

For full explanations and a worked example, read the [section 16.8 study guide](/resources/cambridge-a-level-ict-9626-software-development-methods/) first. These notes condense **section 16.8 Methods of software development** of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 4). It is **A Level only** content, examined in Paper 3 (Advanced Theory).

Test yourself with the [practice questions](/resources/cambridge-a-level-ict-9626-software-development-methods-practice/). The [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) has every topic and the [free diagnostics](/diagnostics/) show where to start.

## The idea

All methods use the same stages (analysis, design, build, test, and so on). A method is a way of **arranging them in time**. The choice depends on how clear the requirements are, how fast the system is needed, how far users can take part and how costly mistakes are.

## The five methods

| Method | Process in one line |
|---|---|
| **Waterfall** | Stages in a fixed order; each is finished and signed off before the next; little going back |
| **Iterative** | Build a rough version of the whole system; test and review; repeat to refine it |
| **Incremental** | Split the system into parts; build, test and deliver each part; add to what exists |
| **RAD** | Quick prototypes, user workshops, reusable components, fixed short time-boxes |
| **Agile** | Short sprints with working software each time; small team; backlog; daily meetings; customer involved; change welcome |

## Advantages and disadvantages

| Method | Advantages | Disadvantages |
|---|---|---|
| **Waterfall** | Simple; clear milestones and documents; easy to plan cost and time | Changes are hard; users see the product late; early mistakes found late |
| **Iterative** | Changes can be included; problems found early; feedback on real versions | No clear end point; cost hard to predict; needs version control |
| **Incremental** | Parts delivered early; easy to test small pieces; lower risk | Parts must fit together, so overall planning is needed; integration work; whole system takes longer |
| **RAD** | Fast; users involved; reusable parts save effort | Needs skilled staff and tools; users must be available; quality and documentation may suffer; unsuitable for large or critical systems |
| **Agile** | Quick working software; flexible; feedback each sprint | Cost and final features hard to predict; needs constant customer involvement; less documentation |

## Which method suits which situation?

| Situation | Method |
|---|---|
| Requirements clear and fixed; errors very costly (such as medical device control) | Waterfall |
| Requirements unclear and likely to change; customer available | Agile or iterative |
| System can be split into independent modules; some features needed first | Incremental |
| Needed quickly; users free for workshops; not too large or critical | RAD |

## Iterative vs incremental

- **Iterative:** repeat and refine the *whole system*.
- **Incremental:** add finished *parts*.
- They can be combined: each increment is built iteratively.

## Worked example

A council needs a system to report potholes. It wants a basic web form in two months, then the possibility of an app and a map view later, depending on use.

- **Incremental** suits it: the form is delivered first as increment 1, the map view and app follow as later increments.
- **Agile** also suits: short sprints, feedback from council staff after each sprint.
- **Waterfall** is a poor fit: the future features are unknown, so a full design now would be guesswork.

## Must-know distinctions

- **Waterfall** (one pass, in order) vs **iterative** (repeat the cycle).
- **Iterative** (refine the whole) vs **incremental** (add parts).
- **RAD** (speed, prototypes, workshops) vs **agile** (sprints, backlog, change).
- **Documentation:** heavy in waterfall, light in agile and RAD.

## Quick self-test

1. In which method are stages completed in strict order?
2. Give one disadvantage of waterfall.
3. What is a sprint?
4. Which method delivers a system module by module?
5. Name two features of RAD.
6. Why is agile unsuitable if the customer cannot take part?
7. A project has fixed requirements and strict safety rules. Which method?
8. Give one advantage of the incremental method.
9. What does "time-boxed" mean?
10. State the difference between iterative and incremental development.

### Answers

1. Waterfall.
2. Any one: hard to change requirements; users see the product late; early errors found late.
3. A short, fixed period (often one to four weeks) in which the team builds a set of features and delivers working software.
4. Incremental.
5. Any two: prototypes; user workshops; reusable components or tools; strict time limits; strong user involvement.
6. Agile relies on customer feedback every sprint, so without it the team may build the wrong thing.
7. Waterfall.
8. Any one: useful parts delivered early; easier to test small pieces; lower risk.
9. Each stage has a fixed, short deadline that is not extended.
10. Iterative repeats the cycle to refine the whole system; incremental builds and delivers it part by part.

## Exam technique

- Name the method, describe how it works in the scenario, then give a point for and against.
- Look for clues: fixed or changing requirements, separate modules, tight deadline, users available, safety-critical use.
- Use the key terms: sprint, backlog, increment, iteration, prototype, time-box, sign-off.
- For "evaluate" or "recommend", compare at least two methods and finish with a clear choice and a reason.

## Where marks are usually lost

- Mixing up iterative and incremental.
- Giving the same advantage ("it is quick") for every method.
- Recommending a method with no link to the scenario.
- Saying waterfall "has no testing" or agile "has no planning".
- Giving only advantages.
- Describing RAD without mentioning prototypes and user involvement.

## Frequently asked questions

**When is waterfall the right choice?**
When the requirements are clear and stable and mistakes would be costly, because its fixed stages and documents give control and traceability.

**Why is agile popular?**
It delivers working software early and often, and lets customers change their minds between sprints.

**Can methods be combined?**
Yes. For example, a system may be built in increments, with each increment developed in short agile sprints.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 4, Cambridge University Press & Assessment. Section 16.8: Methods of software development.
