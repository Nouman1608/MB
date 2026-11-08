---
resourceId: "mb-ap-csp-1.3-study-guide"
title: "Program Design and Development: Study Guide (Computer Science Principles 1.3)"
description: "The phases of program development, iterative versus incremental processes, requirements and specifications, design activities, documentation and acknowledging code, with two worked examples."
course: "computer-science-principles"
unit: 1
topics: ["1.3"]
resourceType: "study-guide"
prerequisites: 
  - "Topic 1.2 (purpose, inputs and outputs)"
  - "Reading short pseudocode"
prerequisiteResources: ["mb-ap-csp-1.2-study-guide"]
learningObjectives: 
  - "Describe the phases of a development process (investigating and reflecting, designing, prototyping, testing) and sort activities into them"
  - "Distinguish an iterative process from an incremental one, and an ordered process from an exploratory one"
  - "Explain how investigation produces requirements and a specification, and list what a design phase may include"
  - "Write and judge program documentation, and acknowledge code that came from another source"
skills: ["1", "2", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-1.3-revision-notes", "mb-ap-csp-1.3-practice", "mb-ap-csp-1.3-checklist"]
next: "mb-ap-csp-1.3-practice"
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "Common development phases are investigating and reflecting, designing, prototyping and testing; a process can be ordered and intentional or exploratory."
  - "Iterative means refining and revising based on feedback, testing or reflection, sometimes returning to earlier phases."
  - "Incremental means building in small pieces and making sure each piece works before adding it."
  - "Investigation (surveys, user testing, interviews, observation) leads to requirements, which a specification states and the design phase plans how to meet."
  - "Documentation (such as comments) describes what code does and how it was developed; code from other sources must be acknowledged, including the origin or author."
faqs:
  - question: "Do all programmers follow the same development process?"
    answer: "No. There are several processes. Some are ordered and planned from the start; others are exploratory, where the developer tries ideas and learns as they go. Both usually involve the same kinds of activity."
  - question: "What is the difference between iterative and incremental?"
    answer: "Iterative means repeating a cycle of refinement based on feedback, which may mean revisiting earlier phases. Incremental means splitting the problem into small pieces and getting each piece to work before adding it to the whole. A project can be both."
  - question: "Do comments change how a program runs?"
    answer: "No. Comments are written for people to read and do not affect how the program runs. They explain what a code segment does and why."
  - question: "Do I have to acknowledge a short code segment I adapted?"
    answer: "Yes. Any code segment developed by another source, or collaboratively, should be acknowledged, and the acknowledgement should include the origin or the original author's name."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## How is a program really developed?

Programs rarely appear fully formed. Developers follow a **development process**, a way of organising the work. Some processes are **ordered and intentional**: the team plans each step before starting. Others are **exploratory**: the developer tries ideas, sees what happens and decides next steps from what they learn. Real projects often mix the two.

Whatever the process, the work commonly passes through four kinds of activity:

1. **Investigating and reflecting.** Finding out what is needed, by whom and under what constraints.
2. **Designing.** Planning how the program will meet those needs.
3. **Prototyping.** Building an early, partial version to try out ideas.
4. **Testing.** Running the program with defined inputs to check it behaves as expected.

These are *phases*, not a one-way staircase. A tester who finds that users cannot understand the layout sends the team back to design. That looping is the heart of the next idea.

## Iterative and incremental

Two words that students often swap are different in meaning.

- An **iterative** process **refines and revises** the program or design repeatedly, based on feedback, testing or reflection. It may require **revisiting earlier phases**. Think of a cycle: design, prototype, test, learn, design again.
- An **incremental** process **breaks the problem into smaller pieces and makes sure each piece works before adding it** to the whole. Think of building a wall one brick at a time and checking each is level.

A project can be both: build one feature at a time (incremental), and revise each after user feedback (iterative).

<figure>
<svg viewBox="0 0 640 260" role="img" aria-labelledby="dev-title dev-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="dev-title">A development cycle with a loop back and incremental pieces</title>
<desc id="dev-desc">Four boxes in a row labelled 1 investigate and reflect, 2 design, 3 prototype, 4 test, each joined to the next by an arrow. A long arrow from test curves back to design, labelled iterate: revise from feedback. Below, three small boxes labelled piece A works, piece B works, piece C works are placed side by side and joined into a larger box labelled whole program, labelled incremental: add each piece once it works.</desc>
<rect x="0" y="0" width="640" height="260" fill="#ffffff"/>
<g fill="none" stroke="#1d2b44" stroke-width="2">
<rect x="10" y="20" width="132" height="56" rx="8"/>
<rect x="172" y="20" width="132" height="56" rx="8"/>
<rect x="334" y="20" width="132" height="56" rx="8"/>
<rect x="496" y="20" width="132" height="56" rx="8"/>
<path d="M562 76 L562 110 L238 110 L238 80"/>
<rect x="30" y="160" width="100" height="44" rx="6"/>
<rect x="150" y="160" width="100" height="44" rx="6"/>
<rect x="270" y="160" width="100" height="44" rx="6"/>
<rect x="430" y="150" width="190" height="64" rx="8" stroke-dasharray="6 4"/>
</g>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="142" y1="48" x2="166" y2="48"/><path d="M158 42 L168 48 L158 54"/>
<line x1="304" y1="48" x2="328" y2="48"/><path d="M320 42 L330 48 L320 54"/>
<line x1="466" y1="48" x2="490" y2="48"/><path d="M482 42 L492 48 L482 54"/>
<path d="M232 88 L238 78 L244 88"/>
<line x1="370" y1="182" x2="424" y2="182"/><path d="M416 176 L426 182 L416 188"/>
</g>
<g fill="#1d2b44" font-size="13" text-anchor="middle">
<text x="76" y="44">1 Investigate</text><text x="76" y="62">and reflect</text>
<text x="238" y="52">2 Design</text>
<text x="400" y="52">3 Prototype</text>
<text x="562" y="52">4 Test</text>
<text x="400" y="104">Iterative: revise from feedback, revisit earlier phases</text>
<text x="80" y="186">Piece A works</text>
<text x="200" y="186">Piece B works</text>
<text x="320" y="186">Piece C works</text>
<text x="525" y="178" font-weight="bold">Whole program</text>
<text x="525" y="196">grows piece by piece</text>
<text x="320" y="238">Incremental: add each piece only once it works.</text>
</g>
</svg>
<figcaption>Figure 1. Iterative development loops back to earlier phases after testing; incremental development adds small, working pieces to the whole.</figcaption>
</figure>

## Investigation, requirements and specification

Good design starts with investigation. Developers need to understand the **constraints** (time, devices, budget) and the **concerns and interests** of the people who will use the program. Ways to investigate include **surveys**, **user testing**, **interviews** and **direct observation**.

Investigation produces **program requirements**: statements of how the program must function, which may include the user interactions it must provide. A program's **specification** defines those requirements. The **design** phase then outlines *how* to meet the specification. Requirements are also needed to choose sensible test inputs later: you cannot say whether the program is correct unless you know what it is supposed to do.

## What the design phase may include

The design phase can include any of the following:

- **Brainstorming** ideas;
- **Planning and storyboarding**, sketching how screens or steps follow each other;
- **Organising the program into modules** and functional components;
- **Diagrams of the user interface layouts**;
- Developing a **testing strategy** for the program.

Notice that design happens *before* a lot of code is written, though in an iterative process it is revisited.

## Documentation and acknowledgement

**Program documentation** is a written description of the function of a code segment, event, procedure or program and how it was developed. **Comments** are a form of documentation written inside the program for people to read; they do not affect how the program runs. Developers should document **throughout** development, not only at the end, because it helps people (including their future selves) understand, fix and extend the code. Not every programming environment supports comments, so other ways of documenting, such as a separate text file, may be needed.

If you use a code segment that someone else wrote, or that was developed collaboratively, you must **acknowledge** it. The acknowledgement can be placed in the documentation and should include the **origin or the original author's name**. In these resources, comments appear in Marlbridge's rendering of the reference notation as text between `/*` and `*/`; the official sheet your teacher provides is the authority for exam notation.

The same habits matter for the Create performance task you complete in class. Keep a record of your design decisions, test cases and sources as you go, and check your teacher's current task instructions for exactly what is required and what help is allowed.

## Worked example 1: sorting a project into phases

**Scenario.** A student team builds an app that tells people which recycling bin to use. They (1) interview staff at the local recycling centre and watch residents sorting waste, (2) sketch three screens on paper and list the app's modules (search, results, help), (3) build a version with only the search screen and show it to five residents, (4) discover that residents do not know product names but recognise pictures, (5) change the design so that users can search by choosing a picture, and (6) build the results screen next, only after the search screen works.

**Task.** Name the phase of each numbered activity, then say where the process is iterative and where it is incremental.

**Step 1: classify.**

| Activity | Phase | Why |
|---|---|---|
| 1 Interviews and observation | Investigating and reflecting | Direct observation and interviews gather the needs of users |
| 2 Sketching screens, listing modules | Designing | Storyboarding and organising into modules |
| 3 Building the search screen and showing residents | Prototyping (and a first test) | An early, partial version tried out |
| 4 Finding residents prefer pictures | Testing / reflecting | The result of user testing |
| 5 Changing the design | Designing (again) | Going back to an earlier phase |
| 6 Building the results screen after the search screen works | Prototyping | Next piece, built only once the previous one works |

**Step 2: iterative.** Activity 5 returns to design because of feedback from testing. That is **iterative**.

**Step 3: incremental.** Building one screen at a time and moving on only when it works (activities 3 and 6) is **incremental**.

**Check.** The process is both iterative and incremental, and it is not a strict one-way sequence. A common error is to call the whole project "incremental" because it has steps; the test is whether each piece is verified before the next is added.

## Worked example 2: documenting and acknowledging code

**Scenario.** A student writes a code segment that finds the average of a list of quiz scores. The idea of checking that the list is not empty came from a classmate, Priya Nair. The student writes:

```text
/* Purpose: displays the average of the quiz scores in the list scores.
   Idea for the empty-list check came from Priya Nair (classmate). */
IF (LENGTH(scores) > 0)
{
  total ← 0
  FOR EACH s IN scores
  {
    total ← total + s
  }
  DISPLAY(total / LENGTH(scores))
}
ELSE
{
  DISPLAY("No scores yet")
}
```

**Task.** Explain what the comment does and does not do, and say whether the acknowledgement is adequate.

**Step 1: what the comment does.** It states the *purpose* of the segment in plain words and records where an idea came from. A reader who skips the code still learns what it is for.

**Step 2: what it does not do.** It does not change how the program runs: if every comment were deleted, the output would be identical.

**Step 3: is the acknowledgement adequate?** It names the origin (a classmate, by name) and what was borrowed (the empty-list check). That meets the requirement that an acknowledgement include the origin or author. If the student had copied several lines from a website, a good acknowledgement would name the site or author and say which lines.

**Step 4: improve.** A strong comment would also explain *why* the check exists ("avoids dividing by zero when no scores have been entered"), since explaining why is more useful to a future reader than repeating what the statement already says.

**Check.** The comment describes the segment; it does not claim anything the code does not do.

## Choosing a process for a project

Neither an ordered nor an exploratory process is better in every case. An **ordered and intentional** process suits a project where requirements are clear and mistakes are costly, such as software for a medical device: plan carefully and check each step. An **exploratory** process suits a project where the best idea is not yet known, such as a new game or an art tool: try things, discard what does not work and keep what does. Exploration leaves **room for experimentation and risk-taking**, which can lead to ideas that careful planning would not have produced, but it makes a schedule harder to predict.

Many real projects start exploratory (to learn what users want) and become more ordered as the requirements settle. Whichever is used, the same four kinds of activity appear, and **iterative** and **incremental** habits help: revise from feedback, and add only pieces that work. When a question asks you to recommend an approach, tie the recommendation to a feature of the scenario, such as unclear requirements or high cost of failure, and not to a general preference.

## Common misconceptions

- **"Development is a straight line: plan, code, test, done."** Real processes loop back. Testing can send you back to design.
- **"Iterative and incremental mean the same."** Iterative refines through feedback; incremental adds small working pieces.
- **"Prototyping and testing are the same."** A prototype is an early version; testing is checking it with defined inputs or users.
- **"Comments make a program run differently or faster."** Comments are for people and do not affect execution.
- **"Documentation is something you do at the end."** It should be written throughout development.
- **"Acknowledgement is only needed for large copied programs."** Any code segment developed by someone else, or collaboratively, should be acknowledged.
- **"Requirements are the same as the design."** Requirements say what the program must do; the design says how.

## Where this leads

Topic 1.4 takes the testing phase further: how to choose test inputs, and how to find and fix different kinds of error. Practise this topic with the [practice questions](/advanced-course-resources/computer-science-principles/1-3-program-design-development-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-principles/1-3-program-design-development-revision-notes/), and review your skills on the [checklist](/advanced-course-resources/computer-science-principles/1-3-program-design-development-checklist/). The next topic is [Identifying and Correcting Errors](/advanced-course-resources/computer-science-principles/1-4-identifying-correcting-errors-study-guide/).
