---
title: "Cambridge A Level Computer Science (9618): Program Testing and Maintenance"
resourceType: "study-guides"
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
description: "Study guide to 9618 section 12.3: avoiding and finding faults, error types, testing methods, test plans, test data and the three types of maintenance."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 12.3 Program Testing and Maintenance of Cambridge International AS & A Level Computer Science 9618 asks you to show understanding of "ways of exposing and avoiding faults in programs", to locate, identify and correct syntax, logic and run-time errors, to know the testing methods and choose data for them, to explain test strategies and test plans, to choose normal, abnormal and extreme/boundary data, to explain perfective, adaptive and corrective maintenance, and to "analyse an existing program and make amendments to enhance functionality". It is AS content, examined in Paper 2.

Related: [Program Testing and Maintenance revision notes](/resources/cambridge-a-level-computer-science-9618-program-testing-and-maintenance-revision-notes/) · [Program Testing and Maintenance practice questions](/resources/cambridge-a-level-computer-science-9618-program-testing-and-maintenance-practice/) · [Software Development study guide (all of Topic 12)](/resources/cambridge-a-level-computer-science-software-development-study-guide/)

## Avoiding faults and exposing faults

**Avoiding** faults means writing code that is less likely to contain them:

- follow a clear design, such as a structure chart and pseudocode, before coding;
- build the program from small modules, each with one task and a defined interface;
- use meaningful identifiers, comments and consistent indentation;
- use library routines that have already been tested;
- validate inputs so that unexpected data cannot cause failure;
- use local variables and parameters rather than globals.

**Exposing** faults means finding the ones that remain, by testing with planned data, by dry runs and walkthroughs, and by letting users try the program before release.

## The three error types

| Type | What it is | When found | Example |
|---|---|---|---|
| Syntax error | A statement breaks the rules of the language | During translation; the program will not run | ENDWHLE instead of ENDWHILE; a missing closing bracket |
| Logic error | The program runs but produces a wrong result | Only by testing, comparing actual with expected results | Using < where <= was needed; a counter updated in the wrong place |
| Run-time error | The program fails while running | During execution, often only with certain data | Division by zero; an array index outside its bounds |

To **locate** an error, use the translator's error messages for syntax errors, and a trace table or test results for logic errors. To **correct** it, change the code and then repeat the test that revealed it.

## Testing methods

| Method | What it involves | Data chosen |
|---|---|---|
| Dry run | Working through an algorithm by hand with a trace table, recording each variable's value | A small set of values whose results are known |
| Walkthrough | The programmer leads colleagues step by step through the code, explaining it so that others can spot errors | Sample values chosen to follow each path |
| White-box | Testing with knowledge of the code, so that every path, branch and loop is exercised | Data chosen to make each condition both TRUE and FALSE |
| Black-box | Testing inputs against expected outputs from the specification, without looking at the code | Normal, abnormal and extreme/boundary values from the requirements |
| Stub testing | A simple dummy module stands in for one not yet written, so the calling module can be tested | Values that the stub returns, fixed in advance |
| Integration | Modules already tested separately are combined and tested together | Data that passes across the interfaces between modules |
| Alpha | In-house testing by the developers, or other staff, of a nearly complete program | Realistic and deliberately awkward data |
| Beta | Testing by a selected group of real users outside the company before general release | Users' own data and patterns of use |
| Acceptance | Testing by or for the client to show that the program meets the requirement specification | Data taken from the client's real tasks |

## Test strategy and test plan

A **test strategy** is the overall approach to testing: which methods will be used, in what order, by whom, and when. For example, each module is dry run and white-box tested as it is written, stub testing is used while modules are missing, integration testing follows, then alpha, beta and acceptance testing.

A **test plan** is the detailed list of tests. Its likely contents are: a test number, the purpose of the test, the test data, the type of data, the expected result and, once run, the actual result and any action taken. Writing it before coding means the expected results come from the specification, not from what the code happens to do.

## Choosing test data

For an order quantity that must be a whole number from 1 to 20:

- **Normal** data is within the range and should be accepted: 7, 15.
- **Abnormal** (erroneous) data should be rejected: −4, 35, "six".
- **Extreme** data is the smallest and largest values accepted: 1 and 20.
- **Boundary** data tests each side of each limit: 0 and 1, 20 and 21.

The syllabus groups extreme and boundary together. In an answer, give both the value and what should happen to it.

## Maintenance

| Type | Reason | Example |
|---|---|---|
| Corrective | Correct faults found after release | A report shows the wrong total for months with 31 days |
| Adaptive | Change the program to suit a changed environment or requirement | A new law changes how a tax is calculated, or the program must run on a new operating system |
| Perfective | Improve performance or add features, without a fault or outside change forcing it | Making a search faster, or adding an export to a spreadsheet |

**Continuing** maintenance is needed because faults appear only with real use, the environment changes, and users' needs grow.

## Worked example 1: locating and correcting errors

This function should return the average of the positive values in the global array Readings[1:10].

```
FUNCTION AveragePositive() RETURNS REAL
   DECLARE Total, Count, Index : INTEGER
   Total ← 0
   Count ← 0
   FOR Index ← 1 TO 10
      IF Readings[Index] > 0 THEN
         Total ← Total + Readings[Index]
      ENDIF
      Count ← Count + 1
   NEXT Index
   RETURN Total / Count
ENDFUNCTION
```

**Test**: Readings holds 4, −2, 6, 0, 5, −1, 3, 0, 2, 0. The positive values are 4, 6, 5, 3 and 2, so the expected result is 20 / 5 = 4.0. A dry run gives Total = 20 but Count = 10, so the function returns 2.0.

**Logic error**: Count ← Count + 1 is outside the IF, so every value is counted. Correction: move it inside the IF, after the Total line.

**Run-time error** exposed by a further test: if no value is positive, Count stays 0 and Total / Count divides by zero. Correction: before the RETURN, add IF Count = 0 THEN RETURN 0 ENDIF (or report an error, as the specification requires).

*Why it scores:* each error is named by type, located by line, explained with test data and expected and actual results, and corrected with a specific change.

## Worked example 2: amending a program to enhance functionality

The existing code accepts a PIN and repeats until it is correct.

```
REPEAT
   INPUT Attempt
UNTIL Attempt = StoredPin
OUTPUT "Access granted"
```

**Amendment requested**: allow at most three attempts, then lock the account.

```
Tries ← 0
REPEAT
   INPUT Attempt
   Tries ← Tries + 1
UNTIL Attempt = StoredPin OR Tries = 3
IF Attempt = StoredPin THEN
   OUTPUT "Access granted"
ELSE
   OUTPUT "Account locked"
ENDIF
```

Analysis comes first: identify where the loop ends and what happens afterwards. The amendment adds a counter, a second exit condition, and an IF after the loop, because the loop can now end in two ways. This is perfective maintenance. Test it with a correct PIN at the first and third attempts and with three wrong PINs.

## Common mistakes

- Describing a logic error as "the program crashes"; that is a run-time error.
- Calling a run-time error a syntax error because a message appears.
- Confusing a dry run (one person, trace table) with a walkthrough (explaining the code to others).
- Test data with no expected outcome.
- Saying corrective maintenance "adds features", or adaptive maintenance "fixes bugs".
- Amending code without checking every path through the changed section.

## Exam technique

**Identify** the error type: name it and quote the line. **Explain** how to find it: name a method and say what it would reveal. **Choose** test data: give each value, its type and its expected result, in a table if allowed. **Describe** a maintenance type: give the reason and an example from the scenario. When asked to amend code, rewrite the whole affected section so the examiner can see how the new lines fit.
