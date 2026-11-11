---
title: "OxfordAQA A-Level Computer Science: Procedural Programming (9645)"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 1 – Procedural Programming"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
stage: "AS"
order: 1
syllabusTopics:
  - qualification: "a-level"
    topic: "procedural-programming"
description: "Sequence, selection and iteration -- the opening topic of OxfordAQA International AS & A-Level Computer Science (9645), a 16-topic, modular syllabus."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by harris-khan on 2026-09-29; 2026-11-08: reviewed by harris-khan."
publishedDate: 2026-08-21
featured: false
---

This guide covers **Topic 1 Procedural Programming**, the first of
sixteen topics in OxfordAQA International AS & A-Level Computer
Science (9645), updated February 2024. The syllabus is modular: AS
Papers 1-2 (topics 1-8) form the AS-level and 40% of the A-level;
A-level Papers 1-2 (topics 9-16) add the remaining 60%.

## Where this fits in 9645

Topic 1 opens the AS content, alongside Fundamental data structures,
Program design, Searching and sorting algorithms, Representing data,
Computer systems, Computer organisation and architecture, and Machine
code and assembly language. Procedural programming skills learned here
are a prerequisite for the A-level's Object-oriented and additional
programming (Topic 9) and Functional programming (Topic 12).

## Syllabus coverage

**OXFORDAQA INTERNATIONAL AS & A-LEVEL COMPUTER SCIENCE (9645) — TOPIC
1 PROCEDURAL PROGRAMMING**

Topic 1 covers the fundamentals of procedural programming: sequence,
selection and iteration constructs, the use of procedures and
functions, and how to design and write structured programs using
these building blocks.

## How to approach it

Because procedural programming underpins every other programming topic
in this syllabus, prioritise hands-on coding practice over reading
alone -- writing and debugging your own programs using sequence,
selection and iteration builds fluency that theoretical study cannot
replicate. Practise decomposing a problem into procedures and
functions before writing code, since exam questions often assess
design thinking as well as syntax. Since this topic feeds directly
into the A-level's object-oriented and functional programming topics,
a genuinely secure grasp of procedural constructs now will make those
later, more abstract paradigms considerably easier to pick up.

## Official syllabus

OxfordAQA International AS & A-Level Computer Science (9645)
qualification page —
[oxfordaqa.com](https://www.oxfordaqa.com/qualifications/international-as-a-level-computer-science/).

## The procedural paradigm

Procedural programming structures a solution as a sequence of instructions organised into **subroutines** that operate on data passed to them. It contrasts with object-oriented programming, where data and the operations on it are bound together in objects.

Its strengths are clarity for algorithmic tasks, straightforward decomposition and ease of testing individual routines. Its weakness is that as programs grow, data and the code acting on it drift apart, which is precisely the problem object orientation was designed to solve.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-computer-science-procedural-programming--11-pp-paradigm.webp" width="900" height="990" alt="Data passed through subroutines (procedural), objects binding data and operations (contrast), and data and code drifting apart as programs grow." loading="lazy">
  <figcaption>Procedural programs organise instructions into subroutines acting on data passed to them.</figcaption>
</figure>


## Building blocks

Programs are constructed from **sequence**, **selection** and **iteration**.

```
DEFINITE iteration     FOR i = 1 TO 10        count known in advance
INDEFINITE iteration   WHILE condition        tests BEFORE, may run 0 times
                       REPEAT ... UNTIL       tests AFTER, always runs once
```

Nested loops multiply work: a loop of n inside a loop of n performs n² operations, which is why nesting is the first thing to examine when a program is slow.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-computer-science-procedural-programming--12-pp-loops.webp" width="900" height="960" alt="FOR runs 10 times; WHILE x&lt;5 tests first and runs 0 times when x starts at 10; REPEAT UNTIL x&gt;=5 tests after and runs once." loading="lazy">
  <figcaption>WHILE may run zero times; REPEAT UNTIL always runs once.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-computer-science-procedural-programming--13-pp-nested-loops.webp" width="900" height="920" alt="Squares of dots for n=3, 6, 12 show 9, 36 and 144 runs of the inner body." loading="lazy">
  <figcaption>Nested loops multiply the work to n squared.</figcaption>
</figure>


## Decomposition and modularity

**Top-down design** breaks a problem into sub-problems until each is small enough to implement as a subroutine. The benefits are testability, reuse, parallel development and comprehensibility.

Good subroutines exhibit **high cohesion** (each does one clearly defined thing) and **low coupling** (each depends minimally on the internals of others). An **interface** — the parameters in and the value out — should be all a caller needs to know.

Parameters may be passed **by value** (a copy, so the original is unchanged) or **by reference** (the address, so the original can be modified). Returning a value is generally safer than modifying a parameter, because the effect is visible at the call site.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-computer-science-procedural-programming--14-pp-decomposition.webp" width="900" height="960" alt="A problem splits into sub-problems then subroutines; a good subroutine has one job and an interface of parameters in and value out." loading="lazy">
  <figcaption>Top-down design ends in small subroutines with clear interfaces.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-computer-science-procedural-programming--15-pp-parameters.webp" width="900" height="1050" alt="By value the copy changes and x stays 5; by reference x becomes 6." loading="lazy">
  <figcaption>Pass by value copies; pass by reference changes the original.</figcaption>
</figure>


## Data structures, validation and testing

Arrays, records, and where available lists and dictionaries hold structured data. Choosing the structure to match the access pattern — indexed access, key lookup, first-in-first-out — matters more than any micro-optimisation.

Robust programs **validate** input at the point of entry: range, type, length, presence and format checks, with a clear message and a re-prompt rather than a crash.

Testing should use **normal**, **boundary** and **erroneous** data. Boundary values are where defects cluster: if valid input is 1 to 100, test 0, 1, 100 and 101.

Errors divide into **syntax** (code will not compile), **runtime** (crashes during execution, such as division by zero) and **logic** (runs, but gives the wrong answer — the hardest to find, and what trace tables and breakpoints are for).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-computer-science-procedural-programming--17-pp-error-types.webp" width="900" height="920" alt="Syntax stops at compile, runtime crashes during the run, logic gives a wrong result (average of 2 and 4 computed as 4, not 3)." loading="lazy">
  <figcaption>The three error types show up at different stages.</figcaption>
</figure>


## Worked example

Design a test plan for a routine accepting a percentage mark from 0 to 100.

```
Normal      45      typical valid value, expect ACCEPT
            72      second valid value

Boundary    0       lowest valid,  expect ACCEPT
            100     highest valid, expect ACCEPT
            -1      just below,    expect REJECT
            101     just above,    expect REJECT

Erroneous   "abc"   wrong type,    expect REJECT
            (empty) missing,       expect REJECT
```

Stating the **expected result** for each case is what makes it a test plan rather than a list of inputs.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-computer-science-procedural-programming--16-pp-test-plan.webp" width="900" height="990" alt="Normal 45 and 72 accepted; boundary -1 reject, 0 accept, 100 accept, 101 reject; erroneous &quot;abc&quot; and empty rejected." loading="lazy">
  <figcaption>Test plans use normal, boundary and erroneous data with expected results.</figcaption>
</figure>


## Common mistakes

Choosing FOR when the repetition count is unknown. Believing WHILE always executes at least once. Confusing pass by value with pass by reference. Testing only valid data and omitting boundary and erroneous cases. Describing a logic error as a syntax error. Writing subroutines with high coupling that cannot be tested independently.

## Quick revision checklist

- Explain the procedural paradigm and contrast it with object orientation.
- Use all three constructs correctly and recognise the cost of nested iteration.
- Apply top-down decomposition, aiming for high cohesion and low coupling.
- Distinguish pass by value from pass by reference.
- Choose data structures to match the access pattern.
- Write a test plan with normal, boundary and erroneous data and expected results.
- Classify syntax, runtime and logic errors and state how each is found.

## Frequently asked questions

**How is OxfordAQA International A-Level Computer Science 9645 structured?**
The syllabus has sixteen topics and is modular. AS Papers 1 and 2 cover topics 1 to 8 and form 40% of the A-level, and A-level Papers 1 and 2 cover topics 9 to 16 for the remaining 60%.

**What is the difference between definite and indefinite iteration?**
Definite iteration, such as a FOR loop, repeats a number of times known in advance. Indefinite iteration, such as WHILE or REPEAT UNTIL, repeats until a condition is met.

**What do high cohesion and low coupling mean?**
High cohesion means each subroutine does one clearly defined thing. Low coupling means each subroutine depends as little as possible on the internals of others.

**What are the three types of program error?**
Syntax errors stop the code compiling, runtime errors crash the program during execution, and logic errors let it run but give the wrong answer. Logic errors are the hardest to find.

## Related resources

- [Procedural Programming — Practice
  Questions](/resources/a-computer-science-procedural-practice/) —
  original exam-style questions with full worked answers on
  algorithms, searching, sorting, complexity and modular design
- [Procedural Programming — Revision
  Notes](/resources/a-computer-science-procedural-revision-notes/) —
  condensed recall notes covering constructs, subroutines, recursion,
  data structures and algorithm complexity
- [Computer Science subject hub](/subjects/computer-science/) — all
  Marlbridge Computer Science resources across IGCSE and A Level
