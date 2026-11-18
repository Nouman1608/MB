---
title: "Cambridge A Level Computer Science (9618): Program Testing and Maintenance -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 12: Software Development"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 12.3
syllabusTopics:
  - qualification: "a-level"
    topic: "software-development"
    subtopic: "program-testing-and-maintenance"
description: "Revision notes for 9618 section 12.3: error types, the nine testing methods, test plan contents, test data, maintenance types and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Condensed notes for 12.3 Program Testing and Maintenance, AS content in Cambridge International AS & A Level Computer Science 9618, examined in Paper 2. You need ways of avoiding and exposing faults, the three error types, the named testing methods, test strategies and plans, test data, the three types of maintenance, and the skill of amending an existing program.

Related: [Program Testing and Maintenance study guide](/resources/cambridge-a-level-computer-science-9618-program-testing-and-maintenance/) · [Program Testing and Maintenance practice questions](/resources/cambridge-a-level-computer-science-9618-program-testing-and-maintenance-practice/) · [Software Development revision notes (all of Topic 12)](/resources/cambridge-a-level-computer-science-software-development-revision-notes/)

## Avoiding and exposing faults

- **Avoid**: design first; modular code; meaningful names, comments, indentation; tested library routines; input validation; local variables.
- **Expose**: planned testing with chosen data; dry runs; walkthroughs; alpha and beta testing by others.

## Error types

| Type | Program runs? | How found | Classic example |
|---|---|---|---|
| Syntax | No; translation fails | Translator error messages | Misspelt keyword, missing ENDIF |
| Logic | Yes, wrong output | Testing, dry run | Wrong operator, wrong loop limit |
| Run-time | Starts, then fails | Testing with particular data | Divide by zero, index out of bounds |

## Testing methods in one line each

- **Dry run**: trace the code by hand, recording variables in a trace table.
- **Walkthrough**: the programmer explains the code step by step to others, who look for errors.
- **White-box**: test every path using knowledge of the code.
- **Black-box**: test inputs against expected outputs without seeing the code.
- **Stub**: a dummy module returns fixed values so callers can be tested.
- **Integration**: test separately tested modules once combined.
- **Alpha**: in-house testing near completion.
- **Beta**: testing by selected real users before release.
- **Acceptance**: the client confirms the program meets the requirements.

## Strategy and plan

- **Test strategy**: the overall approach; which methods, in which order, by whom, when.
- **Test plan contents**: test number; purpose; test data; type of data; expected result; actual result; action taken.
- Write expected results from the specification before running the tests.

## Test data (example: a whole number from 1 to 20)

| Type | Values | Expected |
|---|---|---|
| Normal | 7, 15 | Accepted |
| Extreme | 1, 20 | Accepted |
| Boundary | 0 and 1; 20 and 21 | 0 and 21 rejected, 1 and 20 accepted |
| Abnormal | −4, 35, "six" | Rejected |

## Maintenance types

| Type | Trigger | Example |
|---|---|---|
| Corrective | A fault found in use | Wrong total for some inputs |
| Adaptive | A change in the environment or rules | New operating system, new tax law |
| Perfective | A wish to improve | Faster search, extra feature |

## Amending a program

1. Read the existing code and find where the change must go.
2. Identify every path affected, including how loops can now end.
3. Make the change and rewrite the whole affected section.
4. Retest the old behaviour and the new behaviour.

## Locating and correcting an error: method

1. Run the test and compare the actual result with the expected one.
2. Dry run the suspect section with the same data, one row per statement, until a variable first takes a wrong value.
3. Name the error type and quote the line.
4. Correct the line, then rerun the failed test and the earlier passing tests.

Example: a loop FOR I ← 1 TO 9 meant to total ten values gives a total missing the last value; the dry run shows I never reaches 10, so this is a logic error, corrected to FOR I ← 1 TO 10.

## Key terms

| Term | Meaning |
|---|---|
| Fault | An error in a program that causes it to behave incorrectly |
| Trace table | A table recording variable values as each statement is executed |
| Stub | A simple placeholder module used during testing |
| Test strategy | The overall plan for how a program will be tested |
| Test plan | The list of tests with data and expected results |
| Abnormal data | Data that should be rejected |
| Extreme data | The largest and smallest values that should be accepted |
| Boundary data | Values just inside and just outside a limit |

## Exam traps

- A crash is a run-time error, not a logic error.
- A dry run is done alone with a trace table; a walkthrough involves explaining to others.
- Black-box does not look at the code; white-box does.
- Beta testers are outside users; alpha testers are in-house.
- Test data without expected results scores poorly.
- Adaptive is not "fixing bugs"; that is corrective.

## Self-test

1. What type of error is a missing ENDIF?
2. A program outputs 9 instead of 10 for a total. What type of error is this likely to be?
3. Give a cause of a run-time error.
4. State the difference between a dry run and a walkthrough.
5. Which testing method uses knowledge of the code?
6. What is a stub used for?
7. Who carries out acceptance testing?
8. List four items in a test plan.
9. A field accepts 10 to 50. Give the two extreme values.
10. For the same field, give boundary data for the upper limit.
11. A program must be changed because the company moves to a new database system. Which maintenance type is this?
12. State two ways of avoiding faults when writing code.

**Answers:** 1. Syntax error. 2. A logic error, such as a loop running one time too few. 3. Any one: dividing by zero; an array index outside its bounds; reading past the end of a file. 4. A dry run is a hand trace of the code using a trace table; a walkthrough is the programmer explaining the code step by step to others, who check it. 5. White-box testing. 6. To stand in for a module not yet written, returning fixed values, so the module that calls it can be tested. 7. The client (or users acting for the client). 8. Any four: test number, purpose, test data, type of data, expected result, actual result, action taken. 9. 10 and 50. 10. 50 (accepted) and 51 (rejected). 11. Adaptive. 12. Any two: design before coding; use modules; meaningful identifiers and comments; use tested library routines; validate input; use local variables.
