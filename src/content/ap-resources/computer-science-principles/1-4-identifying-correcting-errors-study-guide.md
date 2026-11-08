---
resourceId: "mb-ap-csp-1.4-study-guide"
title: "Identifying and Correcting Errors: Study Guide (Computer Science Principles 1.4)"
description: "How to classify logic, syntax, run-time and overflow errors, design test cases with expected outputs and boundary values, and find errors by hand tracing, with two worked examples."
course: "computer-science-principles"
unit: 1
topics: ["1.4"]
resourceType: "study-guide"
prerequisites: 
  - "Topic 1.2 (inputs, outputs and tracing short code)"
  - "Topic 1.3 (testing as a development phase)"
prerequisiteResources: ["mb-ap-csp-1.3-study-guide"]
learningObjectives: 
  - "Classify an error as a logic, syntax, run-time or overflow error"
  - "Design test cases with defined inputs and expected outputs, including values at or just beyond the extremes"
  - "Find an error by hand tracing, extra output statements, visualisations or a debugger, and correct it"
  - "Explain why passing some tests does not prove a program is correct"
skills: ["2", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-1.4-revision-notes", "mb-ap-csp-1.4-practice", "mb-ap-csp-1.4-checklist"]
next: "mb-ap-csp-1.4-practice"
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "A logic error gives wrong behavior; a syntax error breaks the language's rules; a run-time error happens while the program runs; an overflow error comes from a number outside the representable range."
  - "Testing uses defined inputs and the outputs expected from the requirements; a mismatch shows an error."
  - "Good test inputs include values at or just beyond the extremes of the allowed input, as well as typical values."
  - "Hand tracing, test cases, visualisations, debuggers and extra output statements all help to locate an error."
  - "Passing tests shows only that those cases work; it does not prove correctness for every input."
faqs:
  - question: "How do I tell a logic error from a run-time error?"
    answer: "A program with a logic error runs to the end but behaves incorrectly, for example it gives the wrong total. A program with a run-time error stops or fails during execution, for example when it divides by zero."
  - question: "What is a good test case?"
    answer: "A defined input paired with the output the requirements say is expected. Good sets include typical values and values at or just beyond the minimum and maximum of the input range."
  - question: "What is an overflow error?"
    answer: "An error that happens when a computer tries to handle a number outside the range it can represent. Many languages store integers in a fixed number of bits, which limits the largest value."
  - question: "If all my tests pass, is my program correct?"
    answer: "Not necessarily. It is correct for those tests. Different inputs, especially at boundaries, may still reveal an error, so test a representative and varied set."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## What is an error, and how do we know?

A program is correct only if it behaves as the requirements say, for **every** input it should handle. An **error** is any mistake that stops that happening. The course names four kinds, and a question will usually describe a symptom and ask you to name the error.

| Error type | What it is | Typical symptom | Example |
|---|---|---|---|
| **Syntax error** | A mistake where the rules of the programming language are not followed | The program will not start, or the environment points at the line | A missing closing bracket for a block |
| **Logic error** | A mistake in the algorithm or program that makes it behave incorrectly or unexpectedly | Runs to the end but gives wrong results | Using `>` where `>=` was needed |
| **Run-time error** | A mistake that occurs *during execution*; each language defines its own | The program stops or fails part-way | Dividing by zero; reading past the end of a list |
| **Overflow error** | The computer tries to handle a number outside the defined range of values | Wrong or impossible values | Adding 1 to the largest integer a fixed number of bits can hold |

Figure 1 turns this into a quick decision path.

<figure>
<svg viewBox="0 0 640 270" role="img" aria-labelledby="err-title err-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="err-title">Decision path for naming an error from its symptom</title>
<desc id="err-desc">A top box asks: can the program start at all. The left branch, labelled no, leads to a box: syntax error, the language rules were broken. The right branch, labelled yes, leads to a second question box: does it finish without stopping. Its left branch, labelled no, leads to a box: run-time error, or overflow if a number went outside the representable range. Its right branch, labelled yes, leads to a box: if the output is wrong it is a logic error.</desc>
<rect x="0" y="0" width="640" height="270" fill="#ffffff"/>
<g fill="none" stroke="#1d2b44" stroke-width="2">
<rect x="210" y="10" width="220" height="50" rx="8"/>
<rect x="20" y="110" width="190" height="64" rx="8"/>
<rect x="330" y="95" width="220" height="50" rx="8"/>
<rect x="250" y="195" width="180" height="64" rx="8"/>
<rect x="450" y="195" width="180" height="64" rx="8"/>
</g>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="250" y1="60" x2="130" y2="108"/><path d="M122 98 L130 110 L140 102"/>
<line x1="390" y1="60" x2="440" y2="92"/><path d="M430 84 L441 94 L433 102"/>
<line x1="380" y1="145" x2="340" y2="193"/><path d="M336 183 L340 195 L350 188"/>
<line x1="500" y1="145" x2="540" y2="193"/><path d="M532 184 L541 196 L544 185"/>
</g>
<g fill="#1d2b44" font-size="13" text-anchor="middle">
<text x="320" y="32">Can the program start at all?</text>
<text x="320" y="50">(language rules followed?)</text>
<text x="170" y="82">no</text><text x="440" y="82">yes</text>
<text x="115" y="136" font-weight="bold">Syntax error</text>
<text x="115" y="156">language rules broken</text>
<text x="440" y="116">Does it run to the end</text>
<text x="440" y="134">without stopping?</text>
<text x="330" y="170">no</text><text x="540" y="170">yes</text>
<text x="340" y="220" font-weight="bold">Run-time error</text>
<text x="340" y="238">(overflow if a number is</text>
<text x="340" y="254">out of range)</text>
<text x="540" y="220" font-weight="bold">Logic error</text>
<text x="540" y="238">if the output is wrong</text>
</g>
</svg>
<figcaption>Figure 1. Starting from the symptom: a program that cannot start has a syntax error; one that stops during execution has a run-time (or overflow) error; one that finishes with a wrong answer has a logic error.</figcaption>
</figure>

Two further notes. First, **overflow** appears because many languages store integers using a **fixed number of bits**, which limits the range of values. Adding to the largest value gives a result that cannot be represented. (The language in the exam reference sheet lets integers grow only as far as memory allows, but the course still expects you to understand overflow in general.) Second, real numbers are stored with a fixed number of bits too, which can cause **round-off** errors: some values are stored only as approximations.

## Testing: defined inputs and expected outputs

**Testing** uses **defined inputs** to check that an algorithm or program produces the **expected outcomes**. The expected output comes from the **requirements**, not from running the program and accepting whatever it says. A test case is therefore a pair: *input* and *expected output*. If the actual output differs, there is an error to find.

Which inputs should you choose? A good set demonstrates the **different expected outcomes** and includes values **at or just beyond the extremes** (minimum and maximum) of the input data. Bugs tend to hide at **boundaries**, where a condition changes from true to false.

For a requirement such as "a ticket is free for ages under 5, half price for ages 5 to 17, full price from 18", boundaries are 4 and 5, 17 and 18, plus the extremes 0 and the oldest age allowed. Choosing 3, 10 and 40 shows each outcome, but misses the boundaries.

## Finding the error: five techniques

The course lists effective ways to find and correct errors:

1. **Test cases**: run defined inputs and compare actual with expected.
2. **Hand tracing**: step through the code yourself, recording each variable's value after every statement, usually in a table.
3. **Visualisations**: a diagram or display of what the program is doing, such as a picture of a list changing.
4. **Debuggers**: tools that let you run code one statement at a time and inspect values.
5. **Extra output statements**: temporarily `DISPLAY` a value at a chosen point to see what it is.

Correcting an error is a separate step: once you know *where* the mismatch starts, you change the code and **run the tests again**, because a fix can break something that used to work.

## Worked example 1: designing tests and finding a logic error

**Requirement.** An online shop gives a 10% discount when the order total is **50 or more**. The program below should display the amount to pay. (The reference notation uses `*` for multiply.)

```text
total ← INPUT()
IF (total > 50)
{
  total ← total * 0.9
}
DISPLAY(total)
```

**Step 1: choose tests.** Typical values for each outcome and the boundary at 50:

| Input | Expected output (from the requirement) | Why this input |
|---|---|---|
| 20 | 20 | well below the threshold (no discount) |
| 49 | 49 | just below the boundary |
| 50 | 45 | exactly on the boundary: discount applies (50 × 0.9 = 45) |
| 51 | 45.9 | just above the boundary (51 × 0.9 = 45.9) |
| 200 | 180 | well above (200 × 0.9 = 180) |

**Step 2: run and compare.** The condition is `total > 50`.

| Input | Condition true? | Actual output | Matches expected? |
|---|---|---|---|
| 20 | no | 20 | yes |
| 49 | no | 49 | yes |
| 50 | no (50 is not greater than 50) | 50 | **no** (expected 45) |
| 51 | yes | 45.9 | yes |
| 200 | yes | 180 | yes |

**Step 3: diagnose.** Only the boundary input fails. The program runs without stopping and gives a wrong answer, so this is a **logic error**. The test at 50 located it exactly: the condition should include 50.

**Step 4: correct and retest.** Change the condition to `total >= 50` and rerun all five tests. Now 50 gives 45 and the others are unchanged, so all pass.

**Check.** If the tester had used only 20, 51 and 200, every test would have passed and the error would have survived. This is why boundary values matter.

## Worked example 2: hand tracing a loop

**Requirement.** Display the sum of the numbers 1 to 5, which is 15.

```text
sum ← 0
i ← 1
REPEAT 4 TIMES
{
  sum ← sum + i
  i ← i + 1
}
DISPLAY(sum)
```

**Step 1: trace.** Record the values after each pass through the loop.

| After pass | `sum` | `i` |
|---|---|---|
| start | 0 | 1 |
| 1 | 0 + 1 = 1 | 2 |
| 2 | 1 + 2 = 3 | 3 |
| 3 | 3 + 3 = 6 | 4 |
| 4 | 6 + 4 = 10 | 5 |

**Step 2: compare.** The program displays 10, but 15 was required. It ran to the end with a wrong result: a **logic error**.

**Step 3: locate.** The trace shows the value 5 was never added: `i` reaches 5 only after the fourth pass, and the loop then stops. The loop repeats one time too few.

**Step 4: correct.** Change `REPEAT 4 TIMES` to `REPEAT 5 TIMES`. A fifth pass gives 10 + 5 = 15. Test again with the same requirement, and consider what a different requirement (sum of 1 to 1) would give: the loop should run once, so `sum` should be 1.

**Step 5: an alternative technique.** An extra output statement such as `DISPLAY(i)` inside the loop would print 1, 2, 3, 4, which also shows the missing 5 without a trace table.

**Check.** The corrected program passes the sum-to-5 test. If you only fixed it by writing `DISPLAY(15)`, it would pass this test but fail every other, which is the danger of fitting code to the tests rather than to the requirement.

## More about run-time errors and tracing

A **run-time error** appears only when the program is running, and often only for certain inputs. A common one is asking for an item that is not there. If a list holds 5 items, then asking for item 6 is a run-time error, because there is no sixth item. Another is dividing by zero. These errors can hide until the right input arrives, which is why tests should include unusual values such as an empty entry, zero, the largest allowed value, and one beyond it.

Tracing carefully is a skill with a few habits.

- Write a **column for every variable** that changes, and a row for every statement or pass.
- **Update only what the statement changes**; copy the other values down unchanged.
- Record **what is displayed** in a separate column, so you do not confuse a variable's value with the output.
- After a loop, check **how many times it ran** against what was intended; off-by-one errors are the most common logic error in loops.

When you find the first row where the actual value differs from the expected value, you have found where the error starts. The fix is usually at or just before that row.

## Common misconceptions

- **"A syntax error and a logic error are the same."** A syntax error breaks the language rules, often stopping the program from starting. A logic error follows the rules but does the wrong thing.
- **"If it runs, it is correct."** Running means no syntax or run-time error; the output may still be wrong.
- **"The expected output is whatever the program prints."** It comes from the requirements.
- **"Testing with many typical values is enough."** Boundary values at or just beyond the extremes are the most likely to reveal errors.
- **"Overflow only happens in old computers."** Any fixed number of bits limits the range of values, including today's.
- **"Fixing an error ends testing."** After a fix, rerun all the tests; fixes can introduce new errors.
- **"Comments and variable names cannot cause problems."** Comments do not affect execution, but a mistyped variable name can cause an error.

## Where this leads

This topic completes Big Idea 1. Unit 3 extends hand tracing to loops, lists and procedures, and the Create performance task asks you to test your own program with defined inputs. Practise with the [practice questions](/advanced-course-resources/computer-science-principles/1-4-identifying-correcting-errors-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-principles/1-4-identifying-correcting-errors-revision-notes/), and check your skills on the [checklist](/advanced-course-resources/computer-science-principles/1-4-identifying-correcting-errors-checklist/). Then try the [Unit 1 diagnostic](/advanced-course-resources/computer-science-principles/unit-1-diagnostic/).
