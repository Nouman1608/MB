---
title: "IB DP Computer Science B.2: Programming -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["ib"]
topic: "B.2 -- Programming"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Computer Science"]
syllabusSeries: "First assessment 2027"
order: 3
description: "Condensed revision notes on IB Diploma Programme Computer Science's B.2 Programming sub-topic -- the syllabus's single largest sub-topic at SL -- covering the programming process, testing, and how it links to B.1's computational thinking cycle, with self-test questions."
author: "marlbridge-academic-team"
publishedDate: 2026-09-02
featured: false
---

B.2 Programming is the largest single sub-topic in the entire DP Computer Science syllabus at SL (40
hours), and remains large at HL (42 hours), as set out in the
[full syllabus guide](/resources/ib-dp-computer-science-syllabus-guide/). These notes work through
the skills this sub-topic actually tests, alongside the
[subject overview](/resources/ib-dp-computer-science-subject-guide/) and
[assessment revision notes](/resources/ib-dp-computer-science-assessment-revision-notes/) already on
the site.

## Why B.2 sits inside computational thinking, not apart from it

B.1 Computational thinking establishes a specify-decompose-abstract-test process that is meant to be
applied while programming, not learned separately from it. Revising B.2 in isolation -- purely as
syntax recall -- misses what the syllabus actually rewards: being able to decompose a described
problem into smaller, programmable steps, and to test a solution systematically rather than only
running it once and checking the output looks plausible.

## Core programming constructs to revise

Whichever language your course uses (Python or Java), the underlying constructs examined are the
same:

- **Sequence, selection, iteration** -- the three basic control structures every program is built
  from: executing instructions in order, branching based on a condition (if/else), and repeating a
  block of instructions (for/while loops).
- **Data types and structures** -- primitive types (integer, real/float, boolean, character/string)
  and simple structures such as one-dimensional and two-dimensional arrays/lists, and how to choose
  an appropriate structure for a given problem.
- **Modularity** -- breaking a program into functions/procedures with defined inputs and outputs,
  which is the direct programming expression of B.1's "decompose" step.
- **File and data handling** -- reading from and writing to files, and validating input, which
  matters for any solution that needs to persist or check data rather than just process it in memory
  once.

## Pseudocode and program design

Before writing code, the syllabus expects students to be able to represent a solution's logic in
pseudocode or a flowchart-style design. Revise by practising converting a described real-world
problem directly into pseudocode steps, then only afterwards translating that pseudocode into actual
Python or Java syntax -- this two-step habit is exactly what B.1's computational thinking process
asks for, and it is a more reliable way to avoid logic errors than writing code directly from a
problem description.

## Testing and debugging

A program that runs without crashing is not the same as a program that is correct. Revise the
distinction between different kinds of test data: normal (typical, expected values), boundary
(values at the very edge of what is valid), and erroneous (invalid values the program should reject
or handle gracefully). A well-designed test plan checks all three categories against a defined set of
expected outcomes before a solution is considered complete. Debugging skills -- tracing through code
step by step to find where actual behaviour diverges from expected behaviour -- are examined
alongside writing code, not treated as a separate topic.

## Connecting B.2 to the computational solution (internal assessment)

The 35-hour computational solution internal assessment is where B.2's skills are applied at full
scale: designing, building and documenting a solution to a real-world problem the student defines.
Because the IA is scored partly on the quality of design and testing documentation, not just on
whether the final program works, practising writing a clear test plan and recording actual test
results (not just "it worked") during any programming practice across the course builds a habit that
pays off directly when the IA itself is due.

## How B.2 is examined on Paper 2

Paper 2 draws on Theme B, including B.2, and (for HL) the OOP and abstract-data-type extensions in
B.3 and B.4. Expect a mix of code-reading questions (predicting what a given piece of pseudocode or
code outputs), code-writing questions (producing a short program or function to a specification), and
questions asking you to identify or fix an error in given code. Because code-reading and code-writing
draw on the same underlying fluency, practising both -- not just writing your own programs from
scratch -- is worth building into revision time specifically.

## Self-test

1. Name the three basic control structures every program is built from.
2. What is the purpose of breaking a program into functions/procedures (modularity), and which step
   of the computational thinking process does this correspond to?
3. Name the three categories of test data a test plan should include, and give a one-line description
   of each.
4. Why does the syllabus expect pseudocode or a design representation before code is written, rather
   than code written directly from a problem description?
5. Give one reason B.2's skills matter directly for the computational solution internal assessment,
   beyond simply "you need to be able to code."

**Answers:** 1. Sequence, selection and iteration. 2. It breaks a program into smaller units with
defined inputs and outputs, making the program easier to build, test and understand; it corresponds
to the "decompose" step of computational thinking. 3. Normal (typical, expected values), boundary
(values at the very edge of validity), and erroneous (invalid values the program should reject or
handle gracefully). 4. Because designing the logic first, separately from syntax, reduces logic
errors and directly practises the specify-decompose-abstract-test process the whole course is built
around, rather than conflating problem-solving with syntax recall. 5. The IA is scored partly on the
quality of design and testing documentation, not just on whether the final program runs, so a habit
of writing clear test plans and recording real test results (built through B.2 revision) pays off
directly in the IA's assessment criteria.

## Official syllabus

International Baccalaureate Organization, *Diploma Programme Subject Brief -- Sciences: Computer
Science*, first assessment 2027, (c) 2024 -- the same source already cited by the
[full syllabus guide](/resources/ib-dp-computer-science-syllabus-guide/), which first reproduced
B.2's teaching hours and its place within Theme B from it.
