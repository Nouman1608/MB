---
resourceId: "mb-ap-csp-2.4-study-guide"
title: "Using Programs with Data: Study Guide (Computer Science Principles 2.4)"
description: "How programs filter, clean, transform, combine and visualise data to gain insight, with traced pseudocode on lists, an iterative analysis of two linked tables, and two worked examples."
course: "computer-science-principles"
unit: 2
topics: ["2.4"]
resourceType: "study-guide"
prerequisites: 
  - "Topic 2.3 (data versus information, cleaning and filtering)"
  - "Reading short pseudocode that uses a list"
prerequisiteResources: ["mb-ap-csp-2.3-study-guide"]
learningObjectives: 
  - "Explain how programs are used iteratively and interactively to gain insight and knowledge from data"
  - "Trace short code that filters, transforms and combines the elements of a list"
  - "Describe how combining data sources, clustering and classifying data contribute to insight"
  - "Choose a sensible sequence of processing steps for a described question and explain what each shows"
skills: ["2", "4", "5"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-2.4-revision-notes", "mb-ap-csp-2.4-practice", "mb-ap-csp-2.4-checklist"]
next: "mb-ap-csp-2.4-practice"
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "Programs process data to acquire information; users work with them iteratively and interactively, refining the question as they see results."
  - "Common processes are transforming every element, filtering, combining or comparing, and visualising."
  - "Combining data sources, clustering and classifying data are parts of using programs to gain insight."
  - "Patterns can emerge only after data are transformed or visualised, and spreadsheets and search tools help find trends."
  - "The insight is only as good as the data: cleaning is part of the process, and the result must be interpreted with care."
faqs:
  - question: "What does iterative and interactive mean for working with data?"
    answer: "Interactive means the user and the program go back and forth, for example filtering and then viewing a chart. Iterative means repeating and refining: the first result suggests a better question, which leads to another pass."
  - question: "What is the difference between filtering and transforming?"
    answer: "Filtering keeps some of the elements, those that meet a condition, and leaves the rest out. Transforming applies the same operation to every element, such as doubling each number, so the list keeps its length."
  - question: "What are clustering and classifying?"
    answer: "Clustering groups data items that are similar to each other. Classifying assigns each item to a category. Both are ways programs help find patterns and gain insight."
  - question: "Do I need to write list code in this topic?"
    answer: "You need to read and trace short code that processes a list. The exam uses its own pseudocode, so no particular programming language is required."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Why use a program at all?

Topic 2.3 described what we can learn from data. This topic is about **how**. A program can process far more data than a person, and it can repeat the same operation exactly. The usual way of working is **iterative and interactive**: you ask a question, the program processes the data, you look at the result, and then you refine the question and run it again. For example, you filter customers by region, see a chart, notice an odd bar and filter again by month. Each pass gives more **insight and knowledge** about the data.

Programs let people discover information and create new knowledge, but they do not decide what the answer means. That is still a human judgement, and it depends on the quality of the data (Topic 2.3).

## Four processes on data

The course describes some processes that extract or modify information from data. Each can be written as a short algorithm over a list.

| Process | What it does | Example |
|---|---|---|
| **Transform** | Applies the same operation to every element | Double every number; add a parent's email to every student record |
| **Filter** | Keeps only elements that meet a condition | Keep the scores that are at least 60 |
| **Combine or compare** | Reduces many elements to one result, or compares them | Add up a list; find the highest score |
| **Visualise** | Shows the data as a chart, graph or other picture | A bar chart of totals per club |

Other ways programs help gain insight are **combining data sources** (joining two tables on a shared identifier), **clustering** (grouping similar items) and **classifying** (assigning items to categories). **Search tools** find information efficiently, **filtering systems** pick out patterns, and **spreadsheets** organise data and make trends easy to see. Often a **pattern emerges** only after the data have been transformed or visualised.

## A note on the pseudocode

The examples use **Marlbridge's rendering of the course's reference notation**: lists are written in square brackets, `FOR EACH item IN list { ... }` visits each element in order, `APPEND(list, value)` adds to the end, `LENGTH(list)` gives the number of elements, and `MOD` gives a remainder. Lists are covered fully in Unit 3; here you only need to trace them. Use the official reference sheet your teacher provides for the exam.

## Tracing list-processing code

A **filter** builds a new list from the elements that pass a test:

```text
scores ← [72, 45, 88, 91, 54]
passed ← []
FOR EACH s IN scores
{
  IF (s >= 60)
  {
    APPEND(passed, s)
  }
}
DISPLAY(passed)
```

Tracing means recording the value of the loop variable and the list after each pass. A **transform** looks similar but has no IF, so every element is used:

```text
doubled ← []
FOR EACH s IN scores
{
  APPEND(doubled, s * 2)
}
```

A **combine** keeps a running total:

```text
total ← 0
FOR EACH s IN scores
{
  total ← total + s
}
DISPLAY(total)
```

<figure>
<svg viewBox="0 0 640 250" role="img" aria-labelledby="proc-title proc-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="proc-title">Filter, transform and combine applied to the list 72, 45, 88, 91, 54</title>
<desc id="proc-desc">A top row shows the input list: 72, 45, 88, 91, 54. Below it, three rows. The filter row keeps scores of at least 60 and gives 72, 88, 91; the elements 45 and 54 are crossed out. The transform row doubles each element and gives 144, 90, 176, 182, 108. The combine row adds all elements to give a single value, 350.</desc>
<rect x="0" y="0" width="640" height="250" fill="#ffffff"/>
<g fill="none" stroke="#1d2b44" stroke-width="2">
<rect x="150" y="14" width="400" height="36"/><line x1="230" y1="14" x2="230" y2="50"/><line x1="310" y1="14" x2="310" y2="50"/><line x1="390" y1="14" x2="390" y2="50"/><line x1="470" y1="14" x2="470" y2="50"/>
<rect x="150" y="80" width="240" height="36"/><line x1="230" y1="80" x2="230" y2="116"/><line x1="310" y1="80" x2="310" y2="116"/>
<rect x="150" y="134" width="400" height="36"/><line x1="230" y1="134" x2="230" y2="170"/><line x1="310" y1="134" x2="310" y2="170"/><line x1="390" y1="134" x2="390" y2="170"/><line x1="470" y1="134" x2="470" y2="170"/>
<rect x="150" y="190" width="80" height="36"/>
</g>
<g fill="#1d2b44" font-size="17" text-anchor="middle">
<text x="190" y="38">72</text><text x="270" y="38">45</text><text x="350" y="38">88</text><text x="430" y="38">91</text><text x="510" y="38">54</text>
<text x="190" y="104">72</text><text x="270" y="104">88</text><text x="350" y="104">91</text>
<text x="190" y="158">144</text><text x="270" y="158">90</text><text x="350" y="158">176</text><text x="430" y="158">182</text><text x="510" y="158">108</text>
<text x="190" y="214">350</text>
</g>
<g fill="#1d2b44" font-size="14" text-anchor="end">
<text x="140" y="38" font-weight="bold">input list</text>
<text x="140" y="95" font-weight="bold">filter</text><text x="140" y="110">(at least 60)</text>
<text x="140" y="149" font-weight="bold">transform</text><text x="140" y="164">(double each)</text>
<text x="140" y="204" font-weight="bold">combine</text><text x="140" y="219">(add up)</text>
</g>
<g fill="#1d2b44" font-size="13" text-anchor="start">
<text x="400" y="100">45 and 54 are left out (shorter list)</text>
<text x="560" y="158">same length</text>
<text x="240" y="214">one value from many</text>
</g>
</svg>
<figcaption>Figure 1. Three processes on the list 72, 45, 88, 91, 54: filtering keeps three elements, transforming keeps five with each doubled, and combining reduces the list to one total.</figcaption>
</figure>

## Worked example 1: tracing a filter and a combine

**Task.** Trace this code, give the output, and state what it does.

```text
scores ← [72, 45, 88, 91, 54]
total ← 0
count ← 0
FOR EACH s IN scores
{
  IF (s >= 60)
  {
    total ← total + s
    count ← count + 1
  }
}
DISPLAY(total)
DISPLAY(count)
```

**Step 1: trace.**

| `s` | `s >= 60`? | `total` after | `count` after |
|---|---|---|---|
| (start) | | 0 | 0 |
| 72 | yes | 72 | 1 |
| 45 | no | 72 | 1 |
| 88 | yes | 160 | 2 |
| 91 | yes | 251 | 3 |
| 54 | no | 251 | 3 |

**Step 2: output.** `DISPLAY(total)` shows **251** and `DISPLAY(count)` shows **3**.

**Step 3: what it does.** It **filters** the scores to those at least 60 and **combines** them, adding them up and counting them. In words: "displays the sum of the passing scores and how many there are".

**Check.** Verify by hand: the passing scores are 72, 88 and 91, whose sum is 72 + 88 + 91 = 251, and there are 3 of them. Notice that the two failing scores, 45 and 54, never change either variable. A teammate wanting the average of the passing scores could compute 251 ÷ 3 after the loop (about 83.7).

## Worked example 2: an iterative analysis of two linked tables

**Scenario.** A fictional running league keeps two tables, **combined using the runner number** as a shared key.

| Runner | Club |
|---|---|
| 1 | Hawks |
| 2 | Owls |
| 3 | Hawks |
| 4 | Owls |
| 5 | Hawks |

| Runner | Kilometres this week |
|---|---|
| 1 | 12 |
| 2 | 7 |
| 3 | 20 |
| 4 | 15 |
| 5 | 9 |

**Task.** Find out which club ran more, and refine the question once you see the first result.

**Pass 1: combine and add.** Join the tables on the runner number: 1 Hawks 12; 2 Owls 7; 3 Hawks 20; 4 Owls 15; 5 Hawks 9. Total per club: Hawks 12 + 20 + 9 = **41 km**; Owls 7 + 15 = **22 km**. A bar chart (visualising) shows Hawks almost twice as tall.

**Pass 2: refine.** The chart prompts a question: do the Hawks run more only because they have more runners? Hawks have 3 runners and Owls have 2. Compute the **average per runner**: Hawks 41 ÷ 3 = about **13.7 km**; Owls 22 ÷ 2 = **11 km**. The gap is much smaller.

**Pass 3: filter.** Another question: how many runners in each club ran at least 10 km? Filter the combined data to runners with 10 km or more: runner 1 (Hawks), runner 3 (Hawks) and runner 4 (Owls). Count per club: Hawks **2**, Owls **1**.

**Interpretation.** The totals alone overstated the difference; after adjusting for club size, the clubs are closer. Because the dataset has only five runners for one week, we should be careful about concluding anything about the clubs in general. This is the iterative and interactive process: each result suggested the next step.

<figure>
<svg viewBox="0 0 640 240" role="img" aria-labelledby="bar-title bar-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="bar-title">Total and average kilometres run by two clubs</title>
<desc id="bar-desc">A bar chart with two groups. Total kilometres: Hawks 41, Owls 22. Average kilometres per runner: Hawks about 13.7, Owls 11. Bars are labelled with their values, and the totals use a hatched fill while the averages use a plain outline so they can be told apart without colour.</desc>
<rect x="0" y="0" width="640" height="240" fill="#ffffff"/>
<defs><pattern id="hatch2" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="6" stroke="#1d2b44" stroke-width="2"/></pattern></defs>
<line x1="70" y1="20" x2="70" y2="190" stroke="#1d2b44" stroke-width="2"/><line x1="70" y1="190" x2="600" y2="190" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<rect x="110" y="26" width="60" height="164" fill="url(#hatch2)"/>
<rect x="180" y="102" width="60" height="88"  fill="url(#hatch2)"/>
<rect x="380" y="135" width="60" height="55"/>
<rect x="450" y="146" width="60" height="44"/>
</g>
<g fill="#1d2b44" font-size="14" text-anchor="middle">
<text x="140" y="18">41</text><text x="210" y="94">22</text><text x="410" y="127">13.7</text><text x="480" y="138">11</text>
<text x="140" y="210">Hawks</text><text x="210" y="210">Owls</text><text x="410" y="210">Hawks</text><text x="480" y="210">Owls</text>
<text x="175" y="232" font-weight="bold">Total km (hatched)</text><text x="445" y="232" font-weight="bold">Average km per runner (outline)</text>
</g>
<text x="62" y="30" font-size="12" text-anchor="end" fill="#1d2b44">km</text>
</svg>
<figcaption>Figure 2. Totals suggest a large gap between the clubs; the averages per runner show a smaller one. The bar heights are drawn to the same scale (1 km is 4 pixels).</figcaption>
</figure>

## Three patterns that appear again and again

Most list-processing code is a variation on one of three patterns. Learn the shape of each, and you can read unfamiliar code quickly.

1. **Count or sum.** Start a variable at 0 before the loop and add to it inside the loop (adding 1 for a count, or adding the element for a sum). Forgetting to start at 0, or resetting it inside the loop, are the usual mistakes.
2. **Filter.** Put the action (for example `APPEND`) inside an `IF` inside the loop.
3. **Find the largest (or smallest).** Start with the first item, then replace it whenever something larger appears.

Here is the third pattern for a list `values ← [14, 7, 22, 9]`:

```text
largest ← values[1]
FOR EACH v IN values
{
  IF (v > largest)
  {
    largest ← v
  }
}
DISPLAY(largest)
```

(In the reference notation, `values[1]` is the first item; list positions start at 1.) Trace: `largest` starts at 14. For v = 14, 14 > 14 is false. For v = 7, false. For v = 22, 22 > 14 is true, so `largest` becomes 22. For v = 9, 9 > 22 is false. The output is **22**.

Two cautions. First, if the loop started `largest` at 0, the code would give wrong answers for a list of negative numbers, so starting from the first item is safer. Second, the pattern fails on an empty list, because there is no first item: that is a run-time error, which a test with an empty list would reveal. Thinking of the pattern and then its edge cases is the quickest way to check any such code.

When you answer a question about processing data with a program, say what each step does to the data, and not only its name. "Filter the loans to those from March" tells the reader which records remain, and "add up the loans per student" tells them what number is produced. Names alone are easy to guess; descriptions show understanding.

## Common misconceptions

- **"A program tells you what the data mean."** A program processes data; people interpret the result, using context and care.
- **"Filtering changes every element."** Filtering keeps some elements; transforming changes every element.
- **"One pass is enough."** Analysis is usually iterative; the first result often suggests a better question.
- **"A chart proves a conclusion."** A visualisation reveals a pattern; the pattern may reflect small or biased data.
- **"Combining data sources always makes data more accurate."** It can add insight, but formats must match, and errors in either source carry over.
- **"Transforming removes elements."** A transform of every element keeps the same number of elements.
- **"The order of steps never matters."** Cleaning before counting, or filtering before averaging, can change the answer.

## Where this leads

This completes Big Idea 2. Unit 3 shows how to write the lists, loops and procedures that carry out these processes, and Unit 5 returns to the dangers of biased data and the privacy of personal data. Try the [Unit 2 diagnostic](/advanced-course-resources/computer-science-principles/unit-2-diagnostic/) when you have worked through the [practice questions](/advanced-course-resources/computer-science-principles/2-4-using-programs-data-practice/), the [revision notes](/advanced-course-resources/computer-science-principles/2-4-using-programs-data-revision-notes/) and the [checklist](/advanced-course-resources/computer-science-principles/2-4-using-programs-data-checklist/).
