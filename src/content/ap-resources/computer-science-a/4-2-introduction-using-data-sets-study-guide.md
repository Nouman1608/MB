---
resourceId: "mb-ap-csa-4.2-study-guide"
title: "Introduction to Using Data Sets: Study Guide (Computer Science A 4.2)"
description: "Learn what a data set is, how programs process it one value at a time, and how to plan an algorithm for a data set with a table, a flowchart or written steps before writing any Java."
course: "computer-science-a"
unit: 4
topics: ["4.2"]
resourceType: "study-guide"
prerequisites:
  - "Loops and if statements (Unit 2)"
  - "Ethical use of data (Topic 4.1)"
prerequisiteResources: ["mb-ap-csa-4.1-study-guide"]
learningObjectives:
  - "Say what a data set is and give examples from everyday life"
  - "Explain that a program processes a data set by accessing its values one at a time"
  - "Represent a pattern or algorithm for a data set in written language, a table or a flowchart"
  - "Trace a planned algorithm on a data set and record the result"
  - "Find a flaw in a plan, such as resetting a running count inside a loop"
skills: ["1", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-4.2-revision-notes", "mb-ap-csa-4.2-practice", "mb-ap-csa-4.2-checklist"]
next: "mb-ap-csa-4.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a"]
keyPoints:
  - "A data set is a collection of specific pieces of information, such as a column of readings or a table of records."
  - "Data sets can be manipulated and analysed to solve a problem or answer a question; values are accessed and used one at a time and then processed as the desired outcome requires."
  - "A chart, table or flowchart helps plan the algorithm before it is coded."
  - "Standard plans follow a pattern: set up (counter, total, best so far), repeat for each value, then report."
  - "Tracing a plan on a small data set with a table finds mistakes before any code is written."
faqs:
  - {"question": "Is a data set the same as an array?", "answer": "No. A data set is the information itself, such as a week of rainfall readings. An array is one way a Java program can store a data set. You plan with the data set and implement with arrays or other collections (Topic 4.3 onwards)."}
  - {"question": "Do I have to draw flowcharts?", "answer": "No particular diagram is required. The course asks you to be able to represent patterns and algorithms in written language or diagrams; use whichever makes your plan clear, as long as it shows each step and the order of repetition and selection."}
  - {"question": "Why plan before coding?", "answer": "A plan shows what you need to remember between values (a count, a total, the best so far), what is done to each value and what is reported at the end. Problems are far cheaper to fix on paper than in finished code."}
  - {"question": "What does processing values one at a time mean?", "answer": "The algorithm looks at the first value, does something with it, then the second, and so on, rather than looking at the whole collection at once. A loop is the usual way to express this."}
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

## What is a data set?

A **data set** is a collection of specific pieces of information. A week of daily rainfall readings is a data set. So is a list of quiz marks, a table of customers and what they spent, or the high scores in a game. Data sets are everywhere, and a great deal of programming consists of **manipulating and analysing** them to solve a problem or answer a question: how many days were wet? Who scored highest? What was the total?

Topic 4.1 asked whether a data set is the right one to use. This topic asks how to think about **processing** one, and how to **represent the pattern or algorithm on paper** before writing any Java. The Java for arrays comes in Topics 4.3 to 4.5; here we concentrate on the thinking that makes that code easy.

## Values are used one at a time

When a program analyses a data set, the values within the set are **accessed and used one at a time** and then **processed according to the desired outcome**. Even if you can see a whole table at a glance, a program cannot: it reads one value, does something, then moves to the next. That is why nearly every plan for a data set has the same three-part shape:

1. **Set up** anything you must remember between values: a counter, a running total, the best value so far.
2. **Repeat for each value**: look at it and update what you remember.
3. **Report** the result once every value has been seen.

## Representing a data set and a plan

Data can be shown in a diagram as a **chart or table**. This visual can also be used to **plan the algorithm** that will be used to manipulate the data. Here is a fictional week of rainfall.

| Day | Mon | Tue | Wed | Thu | Fri | Sat | Sun |
|---|---|---|---|---|---|---|---|
| Rainfall (mm) | 0 | 12 | 5 | 20 | 0 | 8 | 15 |

Suppose the question is "how many days had at least 10 mm of rain?" In written language, the plan is:

1. Set `wetDays` to 0.
2. For each day's reading, from Monday to Sunday: if the reading is 10 or more, add 1 to `wetDays`.
3. Report `wetDays`.

The same plan as a flowchart:

<figure>
<svg viewBox="0 0 640 420" role="img" aria-labelledby="flow-title flow-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="flow-title">Flowchart: count the days with at least 10 mm of rain</title>
<desc id="flow-desc">Flowchart, top to bottom. Start. Set wetDays to 0 and position to the first day. Decision: are there more days to look at? If no, go to Report wetDays and then End. If yes, read the next reading. Decision: is the reading at least 10? If yes, add 1 to wetDays. In both cases the flow returns to the decision are there more days.</desc>
<rect x="0" y="0" width="640" height="420" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="2" fill="#ffffff">
<rect x="230" y="10" width="120" height="32" rx="16"/>
<rect x="190" y="62" width="200" height="40"/>
<polygon points="290,122 390,160 290,198 190,160" fill="#dbe4f0"/>
<rect x="190" y="218" width="200" height="36"/>
<polygon points="290,272 390,308 290,344 190,308" fill="#dbe4f0"/>
<rect x="430" y="290" width="190" height="36"/>
<rect x="440" y="125" width="180" height="36"/>
<rect x="440" y="195" width="100" height="32" rx="16"/>
</g>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<path d="M290 42 L290 62"/><path d="M290 102 L290 122"/><path d="M290 198 L290 218"/><path d="M290 254 L290 272"/>
<path d="M390 160 L440 143"/><path d="M530 161 L530 195"/>
<path d="M390 308 L430 308"/>
<path d="M290 344 L290 400 L150 400 L150 160 L190 160"/>
<path d="M525 326 L525 400 L150 400" />
</g>
<g fill="#1d2b44" font-size="13" text-anchor="middle">
<text x="290" y="31">Start</text><text x="290" y="86">wetDays = 0, start at first day</text>
<text x="290" y="156">More days</text><text x="290" y="172">to look at?</text>
<text x="290" y="241">Read next reading</text>
<text x="290" y="304">Reading</text><text x="290" y="320">at least 10?</text>
<text x="525" y="313">Add 1 to wetDays</text>
<text x="530" y="148">Report wetDays</text><text x="490" y="216">End</text>
<text x="412" y="150" text-anchor="start">no</text><text x="300" y="214" text-anchor="start">yes</text>
<text x="396" y="300" text-anchor="start">yes</text><text x="300" y="362" text-anchor="start">no</text>
</g>
</svg>
<figcaption>Figure 1. Flowchart for counting wet days. Rectangles are steps, diamonds are yes-or-no questions, and rounded boxes are start and end. The loop returns to "More days to look at?" after every value, whether or not 1 was added. Words label every arrow, so the chart does not rely on colour.</figcaption>
</figure>

Writing the plan in two forms is not repetition: the flowchart makes the **loop and the choice** visible, and the written steps make you decide the **exact test** and **what to report**.

## Worked example 1: planning, tracing and then coding a count

**Task.** Plan and trace "number of days with at least 10 mm of rain" on the rainfall table.

**Step 1: choose what to remember.** One thing: the count of wet days so far, starting at 0.

**Step 2: trace the plan with a table.** Each row is one value being processed.

| Day | Reading | At least 10? | `wetDays` after |
|---|---|---|---|
| (start) | | | 0 |
| Mon | 0 | no | 0 |
| Tue | 12 | yes | 1 |
| Wed | 5 | no | 1 |
| Thu | 20 | yes | 2 |
| Fri | 0 | no | 2 |
| Sat | 8 | no | 2 |
| Sun | 15 | yes | 3 |

**Step 3: report.** `wetDays` is **3**.

**Step 4: check against the data.** Scanning the table by eye, the readings that are 10 or more are 12, 20 and 15, three of them. The trace and the scan agree.

**Step 5: preview the code.** Once you know arrays (Topic 4.3), the plan turns almost word for word into Java. You do not need to understand every symbol yet; notice how each line of code matches a line of the plan.

```java
int[] mm = {0, 12, 5, 20, 0, 8, 15};
int wetDays = 0;
for (int i = 0; i < mm.length; i++)
{
    if (mm[i] >= 10)
    {
        wetDays++;
    }
}
System.out.println(wetDays);
```

The program printed `3`, matching the trace.

**Check.** A trace table forces you to process the values one at a time, which is exactly how the program will behave.

## Worked example 2: planning the largest value, and finding a flaw

**Task.** Plan "which day had the most rain, and how much?" Then examine a plan with a flaw.

**Step 1: what to remember.** The **best value so far** and **where it was** (its position). Start with the **first** reading as the best, not with 0: starting at 0 would fail if every reading could be negative (for a temperature, say), and starting from the first value always works.

**Step 2: the plan.**

1. Let `best` be the first position.
2. For each later position: if its reading is greater than the reading at `best`, let `best` become that position.
3. Report the day name and the reading at `best`.

**Step 3: trace.** (Readings 0, 12, 5, 20, 0, 8, 15 on Mon to Sun.)

| Position examined | Reading | Compare with best reading | `best` after |
|---|---|---|---|
| start | | | Mon (0) |
| Tue | 12 | 12 > 0, so yes | Tue (12) |
| Wed | 5 | 5 > 12, no | Tue (12) |
| Thu | 20 | 20 > 12, yes | Thu (20) |
| Fri | 0 | no | Thu (20) |
| Sat | 8 | no | Thu (20) |
| Sun | 15 | 15 > 20, no | Thu (20) |

**Step 4: report.** Thursday, 20 mm. The code version:

```java
String[] days = {"Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"};
int bestIndex = 0;
for (int i = 1; i < mm.length; i++)
{
    if (mm[i] > mm[bestIndex])
    {
        bestIndex = i;
    }
}
System.out.println(days[bestIndex] + " " + mm[bestIndex]);
```

It printed `Thu 20`.

**Step 5: a flawed plan.** A student writes: "For each reading: set `count` to 0; if the reading is 10 or more, add 1 to `count`; at the end report `count`." Trace it:

| Day | Reading | `count` after the reset | `count` after the test |
|---|---|---|---|
| Mon | 0 | 0 | 0 |
| Tue | 12 | 0 | 1 |
| Wed | 5 | 0 | 0 |
| Thu | 20 | 0 | 1 |
| Fri | 0 | 0 | 0 |
| Sat | 8 | 0 | 0 |
| Sun | 15 | 0 | 1 |

On every pass the count goes back to 0, so the final value depends only on the **last** reading. Since Sunday's reading is 15, the program reports **1**, not 3. The coded version of the flaw:

```java
int wrong = 0;
for (int i = 0; i < mm.length; i++)
{
    wrong = 0;                     // reset on every pass: a flaw in the plan
    if (mm[i] >= 10)
    {
        wrong++;
    }
}
System.out.println(wrong);
```

printed `1`. The set-up step belongs **before** the repetition; only the update belongs inside it.

**Check.** A plan can look right and still be wrong; tracing it on a small data set with known answer (3 here) exposes the flaw straight away.

## Common misconceptions

- **"A data set is a program feature."** It is just information. A program can store it in many ways.
- **"The program can see the whole table at once."** It processes values one at a time.
- **"Plans do not need to be traced."** A trace table is the cheapest test you have.
- **"The count can be set to 0 inside the loop."** Set-up steps go before the loop, or the count is lost every pass.
- **"Start the maximum at 0."** That is wrong for data that can be below 0; start from the first value.
- **"Flowcharts and written steps are interchangeable with no loss."** Either is fine, but whichever you choose must show the loop, the choice and the final report.

## Where this leads

Next, [Array Creation and Access](/advanced-course-resources/computer-science-a/4-3-array-creation-access-study-guide/) gives you the Java structure for holding a data set, and [Array Traversals](/advanced-course-resources/computer-science-a/4-4-array-traversals-study-guide/) and [Implementing Array Algorithms](/advanced-course-resources/computer-science-a/4-5-implementing-array-algorithms-study-guide/) turn plans like these into code. First practise with the [practice questions](/advanced-course-resources/computer-science-a/4-2-introduction-using-data-sets-practice/), read the [revision notes](/advanced-course-resources/computer-science-a/4-2-introduction-using-data-sets-revision-notes/) and tick the [topic checklist](/advanced-course-resources/computer-science-a/4-2-introduction-using-data-sets-checklist/). The ethical questions that precede any data work are in [Ethical and Social Issues Around Data Collection](/advanced-course-resources/computer-science-a/4-1-ethical-social-issues-data-collection-study-guide/).
