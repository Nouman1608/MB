---
title: "Cambridge A Level Computer Science (9618): Software Development -- Revision Notes"
seoTitle: "Cambridge 9618 Software Development Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 12: Software Development"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 12
syllabusTopics:
  - qualification: "a-level"
    topic: "software-development"
  - qualification: "a-level"
    topic: "software-development"
    subtopic: "program-development-life-cycle"
  - qualification: "a-level"
    topic: "software-development"
    subtopic: "program-design"
  - qualification: "a-level"
    topic: "software-development"
    subtopic: "program-testing-and-maintenance"
description: "Revision notes on waterfall, iterative and RAD, structure charts, state-transition diagrams, error types, testing methods and maintenance for Cambridge 9618."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: credited to harris-khan (accountable teacher, D-379)."
---

Topic 12 Software Development covers how programs are planned, designed, tested and maintained: the program development life cycle and its waterfall, iterative and RAD models, structure charts and state-transition diagrams, error types, testing methods and test data, and the three types of maintenance. In Cambridge International AS & A Level Computer Science 9618 it is examined in Paper 2, often alongside a pseudocode task you must test or amend.

Related: [Software Development study guide](/resources/cambridge-a-level-computer-science-software-development-study-guide/) · [Software Development practice questions](/resources/cambridge-a-level-computer-science-software-development-practice/) · [Computer Science course hub](/boards/cambridge/a-level/computer-science/)

## Syllabus coverage

| Section | Candidates should be able to |
|---|---|
| 12.1 | Show understanding of the purpose of a development life cycle, and the need for different life cycles: waterfall, iterative, rapid application development (RAD) |
| 12.1 | Describe the principles, benefits and drawbacks of each life cycle |
| 12.1 | Show understanding of the analysis, design, coding, testing and maintenance stages |
| 12.2 | Use a structure chart to decompose a problem and show the parameters passed between modules; describe its purpose, construct one, and derive pseudocode from it |
| 12.2 | Show understanding of the purpose of state-transition diagrams to document an algorithm |
| 12.3 | Show understanding of ways of exposing and avoiding faults; locate, identify and correct syntax, logic and run-time errors |
| 12.3 | Show understanding of testing methods (dry run, walkthrough, white-box, black-box, integration, alpha, beta, acceptance, stub) and select test data for a method |
| 12.3 | Show understanding of a test strategy and test plan; choose normal, abnormal and extreme/boundary test data |
| 12.3 | Show understanding of perfective, adaptive and corrective maintenance; analyse a program and amend it to enhance functionality |

## Stages of the program development life cycle

| Stage | What happens | Typical output |
|---|---|---|
| Analysis | Investigate the problem and the users' needs; define what the program must do | Requirements specification |
| Design | Plan the solution: modules, algorithms, data structures, interface, test plan | Structure charts, pseudocode, test plan |
| Coding | Write the program in a programming language, testing modules as they are written | Program code |
| Testing | Run the program with planned test data to find and fix errors | Test results, corrected program |
| Maintenance | Correct, adapt and improve the program after it is in use | Updated versions |

**Purpose of a life cycle**: it gives a structured plan, so each stage is completed and checked, progress can be monitored, and the product meets the requirements.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-a-level-computer-science-software-development-study-guide--01-sd-lifecycle.webp" width="900" height="960" alt="Five stages run top to bottom: analysis, design, coding, testing and maintenance. Each has an icon and one line on its role. Analysis agrees the requirement specification; design plans charts, pseudocode and the test plan." loading="lazy">
  <figcaption>The five stages of the program development life cycle in order, with the role of each.</figcaption>
</figure>

## Waterfall, iterative and RAD compared

| Model | Principle | Benefits | Drawbacks |
|---|---|---|---|
| Waterfall | Each stage is completed and signed off before the next starts; little going back | Simple to manage; clear milestones and documentation; suits fixed, well-understood requirements | Changes are hard and costly late on; the client sees a working program only near the end; errors in analysis are found late |
| Iterative | The program is developed in small parts; each iteration repeats design, coding and testing and adds to a working version | Working versions early; feedback after each iteration; easier to accommodate change; risks found early | Needs more client involvement; total cost and time harder to predict; the system design can suffer if the whole is not planned |
| RAD | Prototypes are built quickly, often from reusable components, and refined with continuous user feedback; time-boxed | Fast delivery; the product closely matches what users want; changes welcomed | Needs users available throughout; less suited to large or safety-critical systems; documentation and code quality may suffer |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-a-level-computer-science-software-development-study-guide--02-sd-models.webp" width="900" height="1240" alt="Three panels show waterfall as a staircase of stages, iterative as growing versions linked by feedback, and RAD as a prototype passed to users and back. Each panel gives one strength and one weakness taken from the lesson." loading="lazy">
  <figcaption>Waterfall, iterative and RAD compared by shape, with one strength and one weakness each.</figcaption>
</figure>

## Structure charts

A **structure chart** shows the modules of a program in a hierarchy, how a problem is decomposed, and the **parameters** passed between modules.

| Notation | Meaning |
|---|---|
| Rectangle | A module (procedure or function) |
| Line from a higher to a lower module | The higher module calls the lower one |
| Arrow with an open circle (data couple) | Data passed as a parameter, in the direction of the arrow |
| Arrow with a filled circle (flag) | A Boolean flag passed between modules |
| Diamond where lines leave a module | Selection: only one of the lower modules is called |
| Curved arrow over the lines | Iteration: the lower modules are called repeatedly |

**Deriving pseudocode**: each box becomes a PROCEDURE or FUNCTION. A module that passes data down receives parameters; a module that sends a single value back up is usually a FUNCTION; a module sending back several values uses BYREF parameters.

## State-transition diagrams

A **state-transition diagram** documents an algorithm whose behaviour depends on its current state and the input or event received. States are drawn as circles; transitions as arrows labelled with the event (and any output); an arrow with no source marks the start state; a double circle often marks a final or halting state. They are used for systems such as a vending machine, a traffic-light controller or a login with limited attempts.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-a-level-computer-science-software-development-study-guide--03-sd-state-ticket.webp" width="900" height="1010" alt="A ticket machine moves from Waiting to Accepting money when money is inserted, to Issuing ticket when enough is paid, and back to Waiting when the ticket is taken. A state table lists the same three transitions." loading="lazy">
  <figcaption>A state-transition diagram and state table for the ticket machine mentioned in the lesson.</figcaption>
</figure>

## Error types

| Error | Cause | Found by | Example |
|---|---|---|---|
| Syntax | Code breaks the grammar rules of the language | The translator; the program will not run | `ENDIF` missing; `Total ← ` with no value |
| Logic | Code runs but gives the wrong result | Testing with known expected results; dry runs | `<` used instead of `<=`; wrong formula |
| Run-time | The program crashes or stops while running | Testing; it occurs only when the line executes | Division by zero; array index out of range; reading past the end of a file |

**Avoiding faults**: good design (modules, structure charts); meaningful identifiers; comments; using library routines that are already tested; declaring variables and constants; validation of input.

## Testing methods

| Method | What it means |
|---|---|
| Dry run | Working through the code by hand, usually with a trace table, to check what each variable holds |
| Walkthrough | The programmer takes others through the code or algorithm step by step, so the team can spot errors |
| White-box | Tests chosen with knowledge of the code, so every path (each branch of each IF, each loop) is tested |
| Black-box | Tests based only on the specification: inputs are given and outputs compared with those expected, without looking at the code |
| Stub | A simple dummy module (e.g. outputs "Module called" or returns a fixed value) stands in for one not yet written, so the calling module can be tested |
| Integration | Testing that modules that each work correctly also work together once combined |
| Alpha | Testing by the developers (or in-house testers) before release |
| Beta | Testing by a group of real users outside the company, using a near-final version, who report faults |
| Acceptance | Testing by or for the client, against the requirements, to show the program does what was agreed before it is handed over |

Stub testing is not integration testing (June 2025 examiners).

## Test plans and test data

A **test strategy** sets out the overall approach (which methods, in what order, who tests). A **test plan** lists each test: what is being tested, the test data, its type, the expected result, and space for the actual result.

For an input that must be a whole number from 1 to 50:

| Type | Meaning | Examples |
|---|---|---|
| Normal | Valid data that should be accepted | 7, 23, 41 |
| Extreme | The largest and smallest acceptable values | 1, 50 |
| Boundary | Values at each side of a limit: the last one accepted and the first one rejected | 50 and 51; 1 and 0 |
| Abnormal | Data that should be rejected | −8, 75, "ten" |

Abnormal data is not extreme data (November 2024). Test data must fit the range in the question (June 2024 to June 2025).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-a-level-computer-science-software-development-study-guide--05-sd-test-plan.webp" width="900" height="700" alt="A number line from 0 to 50 with the pass mark at 25. Nine tests are shown with their expected results: minus 1, 51 and abc give Error; 0, 10 and 24 give Fail; 25, 37 and 50 give Pass. Two sets of boundaries are tested: the limits of valid input and the pass mark." loading="lazy">
  <figcaption>The nine tests of the worked example placed on the 0 to 50 score line, coloured by expected result.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-a-level-computer-science-software-development-study-guide--04-sd-test-data-v2.webp" width="900" height="700" alt="A number line from 10 to 22 for an age input that accepts 13 to 19. 14 and 18 are normal. 13 and 19, the smallest and largest accepted values, are extreme. The boundary pairs are 12 and 13, and 19 and 20: the last value accepted and the first rejected on each side. Minus 5, 30 and the word ten are abnormal." loading="lazy">
  <figcaption>Normal, extreme, boundary and abnormal test data for an input accepting ages 13 to 19.</figcaption>
</figure>

## Maintenance

| Type | Purpose | Example |
|---|---|---|
| Corrective | Fix errors found after the program is in use | A discount is calculated wrongly for large orders |
| Adaptive | Change the program because its environment or requirements change | A new tax rate, a new operating system, a new law |
| Perfective | Improve performance or usability, or add features, without fixing an error | Make searches faster; add an export option |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-a-level-computer-science-software-development-study-guide--06-sd-maintenance.webp" width="900" height="760" alt="A released program has three arrows to corrective, adaptive and perfective maintenance. Corrective fixes faults found in use, adaptive changes the program for a new operating system or tax law, and perfective improves performance or adds features users ask for." loading="lazy">
  <figcaption>The three types of maintenance with the trigger for each.</figcaption>
</figure>

## Worked example: a test plan entry and a fix

A function `Discount(Total : REAL) RETURNS REAL` should return 10% of Total when Total is 100.00 or more, otherwise 0. The code uses `IF Total > 100 THEN`.

- Test: Total = 100.00, boundary data, expected result 10.00. Actual result: 0.00.
- This is a **logic error**: the program runs but gives the wrong answer at the boundary.
- Correction: `IF Total >= 100 THEN`. Retest with 99.99 (expected 0) and 100.00 (expected 10.00).

## Common mistakes and exam traps

- Misclassifying errors: a crash during a run is a run-time error, not a syntax error; a wrong output is a logic error (June 2024, November 2024).
- Calling abnormal data "extreme" (November 2024).
- Calling stub testing integration testing (June 2025).
- Choosing test data outside the range given, or with no expected result.
- Describing waterfall benefits without linking them to the scenario's requirements.
- Saying perfective maintenance fixes bugs; that is corrective.

## Frequently asked questions

**What is the difference between white-box and black-box testing?**
White-box testing uses the code itself to pick tests that cover every path; black-box testing uses only the specification, checking inputs against expected outputs.

**When is beta testing used?**
After alpha testing, when a nearly finished version is given to real users outside the development team, who find faults in real conditions before the full release.

**Why use a stub?**
So a module that calls another can be tested before the called module has been written; the stub returns a fixed value or shows it was called.

## Official syllabus

Cambridge International AS & A Level Computer Science 9618, syllabus for 2026 and syllabus for 2027, 2028 and 2029, Topic 12 (12.1 to 12.3). Examiner points are summarised on our [9618 past papers page](/resources/cambridge-a-level-computer-science-9618-past-papers/).
