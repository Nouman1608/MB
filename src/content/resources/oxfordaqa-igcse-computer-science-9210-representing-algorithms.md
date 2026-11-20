---
title: "OxfordAQA IGCSE Computer Science (9210): Representing algorithms -- Study Guide"
seoTitle: "OxfordAQA IGCSE CS 9210 Representing Algorithms Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 1 – Algorithms"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 1.01
syllabusTopics:
  - qualification: "igcse"
    topic: "algorithms-9210"
  - qualification: "igcse"
    topic: "algorithms-9210"
    subtopic: "representing-algorithms-9210"
description: "Study guide to OxfordAQA IGCSE Computer Science 9210 section 3.1.1: algorithm, decomposition, abstraction, pseudocode, flowcharts, inputs, processing, outputs and trace tables."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers section **3.1.1 Representing algorithms** of OxfordAQA International GCSE Computer Science
(9210). The specification asks you to understand and explain the terms **algorithm**, **decomposition** and
**abstraction**, to use a **systematic approach** to problem solving, to represent algorithms in **pseudocode and
flowcharts**, to explain simple algorithms in terms of **inputs, processing and outputs**, and to **determine the
purpose** of a simple algorithm using trace tables and visual inspection. The wider topic is summarised in the
[Algorithms study guide](/resources/igcse-oxfordaqa-computer-science-algorithms/); this guide goes further on
this one section, with worked traces for every step.

## What is an algorithm?

The specification says: "An algorithm is a sequence of steps that can be followed to complete a task." Two points
make that definition useful in the exam.

- The steps must be **clear and in a definite order**. "Make the tea" is a task; "boil water, put a tea bag in a
  cup, pour the water, wait three minutes, remove the bag" is an algorithm for it.
- An algorithm does not belong to any one language, or even to computers. You can follow an algorithm with a
  pencil.

The specification also says to "be aware that a computer program is an implementation of an algorithm and that an
algorithm is not a computer program". The algorithm is the **idea** (the method); the program is that idea
written in a particular programming language so that a computer can run it. One algorithm can be implemented in
many different languages, and the same algorithm can be written as a flowchart, as pseudocode or as plain
sentences.

## Decomposition

**Decomposition** means breaking a problem into a number of sub-problems, so that each sub-problem accomplishes an
identifiable task, which might itself be further subdivided.

Take the problem "run a school canteen till system". A decomposition might look like this:

- Read the items a customer wants.
  - Look up each price.
  - Apply any discount.
- Work out the total.
- Take payment.
  - Calculate change.
- Print a receipt.

Each sub-problem is small enough to solve on its own, and the sub-problems can be solved by different people.
Each one will later become a **subroutine** when you write the program. In an exam, a good answer names the
sub-problems and says what each one does. "Split it into parts" earns nothing; "one part calculates the total, a
second part works out the change" does.

## Abstraction

**Abstraction** is the process of removing unnecessary detail from a problem. You keep only the detail that
matters for the task in hand.

A bus route map shows stops and the order they come in. It leaves out the shape of the roads, the colour of the
buildings and the distance between stops, because a passenger deciding where to get off does not need them. In a
program for the canteen till, the abstraction of a "customer" is probably just a name or a number and a list of
items. The customer's age, hair colour and favourite football team are removed because they do not help calculate
a bill.

A common mistake is to say that abstraction means "making things simple" or "hiding the code". The precise
meaning is **removing unnecessary detail**, so always use those words. Always say which details are removed and
why they are not needed.

## A systematic approach to problem solving

The specification asks you to use a **systematic approach to problem solving and algorithm creation**. You are not
tied to one named method, but a sensible order of work is:

1. **Understand the problem.** State what data goes in, what must come out, and any rules.
2. **Abstract.** Decide which details matter and which can be ignored.
3. **Decompose.** Split the problem into sub-problems.
4. **Design** an algorithm for each part, using pseudocode or a flowchart.
5. **Trace** the algorithm with test data, including awkward values, to check it does what you meant.
6. **Refine** the algorithm if the trace shows a fault, and trace it again.

Following steps like these is what "systematic" means: you plan before coding, and you check before declaring it
finished.

## Pseudocode

**Pseudocode** is a way of writing an algorithm in structured text that looks like a program but ignores the
punctuation rules of any one language. The specification says that any exam question that gives you pseudocode
will use the **Oxford International AQA standard version**. When you write your own pseudocode, you may use any
form as long as the meaning is **clear and unambiguous**.

The main features used on this site are:

| Idea | Pseudocode |
|---|---|
| Assignment | `total ← 0` |
| Input | `n ← STRING_TO_INT(USERINPUT)` |
| Output | `OUTPUT total` |
| Selection | `IF ... THEN ... ELSE ... ENDIF` |
| Count-controlled loop | `FOR i ← 1 TO 5 ... ENDFOR` |
| Condition-controlled loops | `WHILE ... ENDWHILE` and `REPEAT ... UNTIL ...` |
| Integer division and remainder | `DIV` and `MOD` |

Some points to remember. The arrow `←` means "store the value on the right in the variable on the left"; it is
not an equals sign. Every `IF` needs an `ENDIF`, every `WHILE` an `ENDWHILE` and every `FOR` an `ENDFOR`, and
**indentation** shows what is inside each structure. You should also use meaningful variable names such as `total`
or `count`, not single letters, unless the letter is a loop counter.

## Flowcharts

A **flowchart** shows the same algorithm as a diagram. The standard symbols are:

- a **rounded rectangle (terminator)** for the start and for the end;
- a **parallelogram** for input and output;
- a **rectangle** for a process, such as an assignment or a calculation;
- a **diamond** for a decision, with two exits labelled Yes and No (or True and False);
- **arrows** showing the direction of flow.

A loop appears in a flowchart as an arrow that returns to an earlier step. For example, the "keep reading numbers
until -1 is entered" algorithm below has a decision diamond after the input box, and its No arrow goes back up to
the input box.

Three mistakes cost marks again and again: using a rectangle where a diamond is needed, leaving a diamond with
only one labelled exit, and drawing arrows without arrow heads so that the direction is unclear. To convert a
flowchart to pseudocode, turn each diamond into an `IF` or a `WHILE` and turn each backwards arrow into a loop.

## Inputs, processing and outputs

The specification says you must be able to "explain simple algorithms in terms of their inputs, processing and
outputs", and to "identify where inputs, processing and outputs are taking place". Look at this algorithm.

```
total ← 0
count ← 0
n ← STRING_TO_INT(USERINPUT)
WHILE n ≠ -1
  total ← total + n
  count ← count + 1
  n ← STRING_TO_INT(USERINPUT)
ENDWHILE
IF count > 0 THEN
  OUTPUT total DIV count
ENDIF
```

- **Inputs:** the numbers typed by the user, read in the two `USERINPUT` lines. The value -1 is an input that
  means "stop".
- **Processing:** adding each number to `total`, adding 1 to `count` and the comparison `n ≠ -1`. The division
  `total DIV count` is also processing.
- **Outputs:** the `OUTPUT` line, which shows the whole-number part of the average.

Do not describe a line as an output just because it changes a variable. Output means something the user can see
(or a signal sent to another device). Storing a number in `total` is processing.

## Determining the purpose of an algorithm

When a question says "state the purpose of this algorithm", you are being asked what problem the algorithm solves,
not what each line does. There are two techniques, and the specification names both: **trace tables** and **visual
inspection**.

### Using a trace table

Trace the algorithm above with the inputs 14, 9, 20, -1. Record the variables after every pass round the loop.

| Pass | n read | total | count |
|---|---|---|---|
| start | 14 | 0 | 0 |
| 1 | 9 | 14 | 1 |
| 2 | 20 | 23 | 2 |
| 3 | -1 | 43 | 3 |

The loop ends when -1 is read. The output is `43 DIV 3`, which is **14**. Because the algorithm adds the numbers
and divides by how many there were, the purpose is **to calculate the (whole-number) average of a series of
numbers ending with -1**. Notice that a trace table tells you the output, but you have to look at the pattern of
the values to name the purpose.

### Using visual inspection

Now try an algorithm where the purpose is not obvious.

```
a ← 48
b ← 18
WHILE b ≠ 0
  r ← a MOD b
  a ← b
  b ← r
ENDWHILE
OUTPUT a
```

| Pass | a | b | r |
|---|---|---|---|
| start | 48 | 18 | |
| 1 | 18 | 12 | 12 |
| 2 | 12 | 6 | 6 |
| 3 | 6 | 0 | 0 |

The loop stops when `b` is 0 and the output is **6**. Inspecting the algorithm, it repeatedly replaces the pair of
numbers with the smaller number and the remainder, which is the classic method for finding the **highest common
factor** of two numbers. 6 is the largest number that divides into both 48 and 18. To give the purpose you can
either recognise the method or run two or three different inputs and spot the relationship.

## How to build a good trace table

- Give each variable its own column, and add a column for the output if the algorithm has several outputs.
- Write the **starting values** in the first row, before the loop runs.
- Add one row per pass, and update only the variables that change in that pass.
- Do the work **line by line**. Doing the whole loop in your head is where most errors happen.
- Stop when the loop condition fails, and check the output line afterwards.

## Worked example: from description to algorithm

**Problem:** a user enters ten marks. Output the highest mark.

*Decompose:* read ten marks; keep the highest so far; output it. *Abstract:* we need only the marks, not the
pupils' names.

```
highest ← STRING_TO_INT(USERINPUT)
FOR i ← 2 TO 10
  mark ← STRING_TO_INT(USERINPUT)
  IF mark > highest THEN
    highest ← mark
  ENDIF
ENDFOR
OUTPUT highest
```

The first mark is read before the loop so that `highest` starts with a real value; setting `highest ← 0` would
fail if every mark were negative. Because the first mark has been read, the loop runs nine times, from 2 to 10.
Test it with the marks 3, 8, 5, 12, 7: `highest` becomes 3, then 8, then stays at 8, then becomes 12, then stays at
12, so the output is 12. Inputs, processing and outputs are easy to point out: ten `USERINPUT` calls are the inputs,
the comparison and assignment are the processing, and the final `OUTPUT` is the output.

## Common mistakes

- Saying that an algorithm is a program, or that a flowchart is not an algorithm. A flowchart and pseudocode are
  both ways to **represent** an algorithm.
- Defining abstraction as "simplifying" without saying that **unnecessary detail is removed**.
- Describing decomposition without mentioning **sub-problems** that each do an identifiable task.
- Forgetting the end of a structure (`ENDIF`, `ENDWHILE`, `ENDFOR`) or ignoring indentation.
- Using `=` for assignment when `←` is meant, or `←` for a comparison when `=` is meant.
- Updating every variable in every row of a trace table, instead of only the ones that change.
- Stating the output as the purpose. The output is **6**; the purpose is "finds the highest common factor".
- Missing the final row of a trace, so the last pass of the loop is not recorded.

## Exam technique

- **State/define** questions need the specification's ideas: sequence of steps, sub-problems, removing unnecessary detail.
- **Trace** questions are marks for care: show every row and every changed value.
- **Purpose** questions: say what the algorithm achieves for the problem, in the form "It calculates the ... of ...".
- **Inputs, processing and outputs:** quote the line for each one.

## Next steps

Use the [Representing algorithms practice
questions](/resources/oxfordaqa-igcse-computer-science-9210-representing-algorithms-practice/) to test yourself
on traces and purposes, and the [Algorithms revision
notes](/resources/igcse-oxfordaqa-computer-science-algorithms-revision-notes/) for a condensed summary of the whole
topic.
