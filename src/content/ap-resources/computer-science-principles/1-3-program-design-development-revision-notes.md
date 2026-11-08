---
resourceId: "mb-ap-csp-1.3-revision-notes"
title: "Program Design and Development: Revision Notes (Computer Science Principles 1.3)"
description: "One-page recap of development phases, iterative versus incremental development, investigation and requirements, design activities, documentation and acknowledgement."
course: "computer-science-principles"
unit: 1
topics: ["1.3"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csp-1.3-study-guide"]
learningObjectives: 
  - "Recall the key ideas of program design and development without notes"
  - "Spot the common errors before making them"
skills: ["1", "2", "4"]
studyMinutes: 10
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-1.3-study-guide", "mb-ap-csp-1.3-practice", "mb-ap-csp-1.3-checklist"]
next: "mb-ap-csp-1.3-practice"
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "Common development phases are investigating and reflecting, designing, prototyping and testing; a process can be ordered and intentional or exploratory."
  - "Iterative means refining and revising based on feedback, testing or reflection, sometimes returning to earlier phases."
  - "Incremental means building in small pieces and making sure each piece works before adding it."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "drafted"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/computer-science-principles/1-3-program-design-development-study-guide/).

## Recap

- A **development process** can be **ordered and intentional** or **exploratory**.
- Common phases: **investigating and reflecting**, **designing**, **prototyping**, **testing**.
- **Iterative**: refine and revise based on feedback, testing or reflection; may revisit earlier phases.
- **Incremental**: break the problem into smaller pieces and make sure each piece works before adding it.
- **Investigation** methods: surveys, user testing, interviews, direct observation. They reveal constraints and users' concerns.
- **Requirements** describe how the program must function; the **specification** defines them; the **design** outlines how to meet them.
- **Design** may include brainstorming, planning and storyboarding, modules, interface diagrams and a testing strategy.
- **Documentation** describes what code does and how it was developed; **comments** are documentation inside the program and do not affect how it runs.
- **Acknowledge** code from other sources, including the origin or author's name.

## Key relationships

| Idea | How to recognise it |
|---|---|
| Iterative | "Revised after feedback", "went back to the design" |
| Incremental | "One feature at a time", "made sure it worked before adding the next" |
| Requirement | "The program must..." |
| Specification | The set of requirements, in writing |
| Design | "How will the program meet the requirements?" |
| Documentation | Comments, written descriptions of code and development |
| Acknowledgement | Names the origin or author of borrowed code |

## Assumptions and conventions

- A project may be both iterative and incremental. Judge each statement separately.
- Comments are shown here between `/*` and `*/`, Marlbridge's convention; follow the official reference sheet in the exam.
- For acknowledgement questions, always include **who or where** the code came from.

## Mistakes to avoid

1. Saying "iterative" when the scenario describes adding verified pieces (incremental).
2. Treating the phases as a one-way sequence.
3. Writing comments that merely repeat the code instead of explaining purpose.
4. Believing comments change program behavior.
5. Forgetting to acknowledge a borrowed code segment.
6. Describing requirements and design as the same thing.

## Two quick worked examples

**1.** A team interviews shoppers, sketches the screens, builds one screen, tests it, then redesigns it. Interviews are *investigating*; sketches are *designing*; the built screen is *prototyping*; showing it to users is *testing*; redesigning is a return to design, so the process is *iterative*.

**2.** A comment above a loop says "Counts quiz answers that are correct; the idea for skipping blank answers came from Jo Lin." It documents the purpose and acknowledges the source by name. If a question asks whether it changes how the program runs, the answer is no.

## Quick self-check

1. A team builds the login page, checks it fully works, then starts the profile page. Iterative or incremental? *(Incremental.)*
2. After a user test the team redraws the menu layout. Which phase do they return to? *(Design; this is iterative.)*
3. Name two ways to investigate user needs. *(For example, interviews and direct observation; also surveys and user testing.)*

Next: [practice questions](/advanced-course-resources/computer-science-principles/1-3-program-design-development-practice/).
