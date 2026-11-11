---
title: "IB DP Computer Science B.2: Programming"
resourceType: "study-guides"
subject: "computer-science"
level: ["ib"]
topic: "B.2 -- Programming"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Computer Science"]
syllabusSeries: "First assessment 2027"
order: 2
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-computer-science-theme-b"
    subtopic: "ib-dp-computer-science-b-2"
description: "Guide to B.2 Programming in IB DP Computer Science, first assessment 2027: core constructs, modularity, pseudocode design, test plans and links to B.1."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by harris-khan on 2026-09-29; 2026-11-08: reviewed by harris-khan."
publishedDate: 2026-09-06
featured: false
---

This guide covers **B.2 Programming**, the largest single sub-topic
in the entire DP Computer Science syllabus at SL (40 hours), remaining
large at HL (42 hours), as set out in the [full syllabus
guide](/resources/ib-dp-computer-science-syllabus-guide/), first
assessment 2027.

## Where this fits in the syllabus

B.1 Computational Thinking establishes a specify-decompose-abstract-
test process that is meant to be applied while programming, not
learned separately from it. Revising B.2 in isolation — purely as
syntax recall — misses what the syllabus actually rewards: being able
to decompose a described problem into smaller, programmable steps, and
to test a solution systematically rather than only running it once and
checking the output looks plausible. Paper 2 draws on Theme B,
including B.2 and B.3 object oriented programming at both levels,
and, for HL only, B.4 abstract data types.

## Syllabus coverage

**IB DP COMPUTER SCIENCE — B.2: PROGRAMMING**

Whichever language a course uses (Python or Java), the underlying
constructs examined are the same:

- **Sequence, selection, iteration** — the three basic control
structures every program is built from: executing instructions in
order, branching based on a condition (if/else), and repeating a block
of instructions (for/while loops)
- **Data types and structures** — primitive types (integer,
real/float, boolean, character/string) and simple structures such as
one-dimensional and two-dimensional arrays/lists, and choosing an
appropriate structure for a given problem
- **Modularity** — breaking a program into functions/procedures with
defined inputs and outputs, the direct programming expression of B.1's
"decompose" step
- **File and data handling** — reading from and writing to files, and
validating input, which matters for any solution that needs to persist
or check data rather than just process it in memory once
- **Pseudocode and program design** — representing a solution's logic
in pseudocode or a flowchart-style design before writing code
- **Testing and debugging** — normal, boundary and erroneous test
data; tracing through code to find where actual behaviour diverges
from expected behaviour

## How to approach it

Practise converting a described real-world problem directly into
pseudocode steps, then only afterwards translating that pseudocode
into actual Python or Java syntax — this two-step habit is exactly
what B.1's computational thinking process asks for, and is a more
reliable way to avoid logic errors than writing code directly from a
problem description. A program that runs without crashing is not the
same as a program that is correct: a well-designed test plan checks
normal (typical, expected), boundary (values at the very edge of what
is valid), and erroneous (invalid values the program should reject or
handle gracefully) test data against a defined set of expected
outcomes before a solution is considered complete. Because code-
reading and code-writing draw on the same underlying fluency, practise
both — predicting what a given piece of pseudocode or code outputs, as
well as producing a short program or function to a specification — not
just writing your own programs from scratch.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-computer-science-b2-programming--09-design-before-code.webp" width="900" height="890" alt="Four steps in order: problem description, pseudocode or flowchart, Python or Java code, then a test plan and a run. A dashed copper arrow that skips the design step and goes straight from the problem to code is crossed out: writing code directly from a problem description increases the risk of logic errors. A strip at the top lists the B.1 process, specify, decompose, abstract, test, which is applied while programming." loading="lazy">
  <figcaption>Design in pseudocode or a flowchart first, then write code, then test; skipping the design raises the risk of logic errors.</figcaption>
</figure>


## Worked example: designing a test plan

A program is meant to accept a student's exam score (0–100) and output
a grade. A test plan for this program should check:

```
Normal:      score = 75  -- a typical, valid mid-range value

Boundary:    score = 0 and score = 100  -- the extreme valid values
             at each edge of the accepted range

Erroneous:   score = -5 and score = 150  -- invalid values outside
             the accepted range, which the program should reject or
             handle gracefully, for example with an error message
             rather than crashing or silently producing a wrong
             grade
```

A test plan that only checks a normal value (score = 75) has not
actually confirmed the program handles the edges of its valid range or
rejects invalid input correctly — all three categories are required
before a solution can be considered properly tested.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-computer-science-b2-programming--10-test-plan-number-line.webp" width="900" height="932" alt="A chart with three lanes sharing one number scale from −20 to 160, for a program that accepts exam scores from 0 to 100. The valid range 0 to 100 is shaded. Normal data: 75, accepted. Boundary data: 0 and 100, the extreme valid values at each edge, both accepted. Erroneous data: −5 and 150, outside the range, which should be rejected with an error message. Testing only a normal value does not show that the edges and invalid input are handled." loading="lazy">
  <figcaption>Normal, boundary and erroneous test data for a score from 0 to 100.</figcaption>
</figure>


## Connecting to the computational solution internal assessment

The 35-hour computational solution internal assessment is where B.2's
skills are applied at full scale: designing, building and documenting
a solution to a real-world problem the student defines. Because the
IA is scored partly on the quality of design and testing
documentation, not just on whether the final program works, practising
writing a clear test plan and recording actual test results (not just
"it worked") during any programming practice across the course builds
a habit that pays off directly when the IA itself is due -- a student
who only ever runs a program once and moves on, without documenting
what was tested and what the result was, arrives at the IA without the
documentation habit it specifically rewards.

## Common mistakes

Writing code directly from a problem description without a pseudocode
or design step first, which increases the risk of logic errors.
Testing a program only with typical, expected values and skipping
boundary and erroneous test data. Treating "the program ran without
crashing" as equivalent to "the program is correct." Practising only
code-writing and neglecting code-reading, despite Paper 2 testing both
skills. Treating modularity as a stylistic preference rather than the
direct programming expression of decomposing a problem.

## Quick revision checklist

- Practise the pseudocode-then-code two-step habit for unfamiliar
  problems.
- Build a test plan with normal, boundary and erroneous data for every
  program written during revision.
- Practise both code-reading (predicting output) and code-writing
  questions, not just one or the other.
- Know how modularity connects directly to B.1's "decompose" step.
- Carry good testing and documentation habits from B.2 practice
  forward into the computational solution internal assessment.

## Frequently asked questions

**What does B.2 Programming cover in IB DP Computer Science?**
B.2 covers sequence, selection and iteration, data types and structures, modularity, file and data handling, pseudocode and program design, and testing and debugging.

**Which paper assesses B.2 Programming?**
Paper 2 draws on Theme B, including B.2 and B.3 object-oriented programming at both levels, and B.4 abstract data types at HL only.

**What should a test plan for a score from 0 to 100 include?**
It should include a normal value such as 75, boundary values 0 and 100, and erroneous values such as −5 and 150, each with its expected outcome.

**Is a program that runs without crashing correct?**
Not necessarily. A program must also be checked with normal, boundary and erroneous test data against expected outcomes before it can be considered properly tested.

## Official syllabus

International Baccalaureate Organization, *Diploma Programme Subject
Brief -- Sciences: Computer Science*, first assessment 2027, © 2024 —
the same source already cited by the [full syllabus
guide](/resources/ib-dp-computer-science-syllabus-guide/), which first
reproduced B.2's teaching hours and its place within Theme B. Verified
2026-09-06.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-computer-science-b2-programming--08-control-structures.webp" width="900" height="880" alt="Three small flowcharts. Sequence: Step 1, Step 2 and Step 3 run in order. Selection: a condition is tested; if yes, block A runs, if no, block B runs, and then the program carries on. Iteration: a block is repeated, and after each pass the program asks whether to go again; if yes it loops back, if no it carries on." loading="lazy">
  <figcaption>Sequence, selection and iteration are the three basic control structures.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-computer-science-b2-programming--11-types-and-structures.webp" width="900" height="892" alt="Four primitive types with example values: integer 42, real or float 3.5, boolean True, character or string &quot;Hi&quot;. A one-dimensional array of five values 12, 7, 31, 5, 20 with indexes 0 to 4, where scores[2] is 31. A two-dimensional array with three rows and four columns, where grid[1][2], row 1 and column 2, is 2. The values are illustrative." loading="lazy">
  <figcaption>Primitive types plus one- and two-dimensional arrays.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-computer-science-b2-programming--12-modularity.webp" width="900" height="780" alt="A problem is broken into three functions, each with defined inputs and outputs, as the programming form of the decompose step. 1: get_score takes nothing and returns a score. 2: check_score takes the score and returns whether it is valid. 3: show_result takes the score and the validity and returns a message. Running with a score of 75 gives the message Score 75 accepted. The function names and the 0 to 100 rule are illustrative." loading="lazy">
  <figcaption>Functions with defined inputs and outputs are the programming form of decomposing a problem.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-computer-science-b2-programming--13-trace-divergence.webp" width="900" height="826" alt="An illustrative loop meant to add the numbers 1 to 4 but written to stop at 3. A trace table compares the total after each pass for the code and for the plan: after i=1 both give 1, after i=2 both give 3, after i=3 both give 6, but on pass 4 the code has already ended while the plan reaches 10. The output is 6 from the code and 10 expected. Tracing shows exactly where actual behaviour diverges from expected behaviour." loading="lazy">
  <figcaption>Tracing shows exactly where actual behaviour diverges from expected behaviour.</figcaption>
</figure>

