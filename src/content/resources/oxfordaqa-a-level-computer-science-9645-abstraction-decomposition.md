---
title: "OxfordAQA A-Level Computer Science (9645): Abstraction and decomposition"
seoTitle: "OxfordAQA A-Level CS 9645 Abstraction Decomposition"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 3 – Program design"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 3.2
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "program-design-9645"
  - qualification: "a-level"
    topic: "program-design-9645"
    subtopic: "abstraction-and-decomposition-oxfordaqa-alevel-cs"
description: "OxfordAQA 9645 sub-topic 3.3.2 in depth: abstraction, decomposition, worked examples of each and how subroutines put decomposition into practice."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.3.2 Abstraction and decomposition** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.3 Program design (AS). The specification asks you to be familiar with two concepts and gives a definition of each. **Abstraction** is "removing unnecessary details from a problem to facilitate its solution". **Decomposition** is "breaking a problem into a number of sub-problems, so that each sub-problem accomplishes an identifiable task, which might itself be further subdivided". It adds that decomposition "can be achieved through the use of subroutines".

For quick recall use the [abstraction and decomposition revision notes](/resources/oxfordaqa-a-level-computer-science-9645-abstraction-decomposition-revision-notes/), then try the [abstraction and decomposition practice questions](/resources/oxfordaqa-a-level-computer-science-9645-abstraction-decomposition-practice/). The topic-level [program design study guide](/resources/oxfordaqa-a-level-computer-science-program-design/) covers the whole of section 3.3.

## Why these two ideas matter

A real problem is usually too big and too messy to solve in one go. Computer scientists use two complementary techniques.

- **Abstraction** makes the problem *simpler* by deciding what to ignore.
- **Decomposition** makes the problem *smaller* by splitting it into parts.

They are used together. You first abstract to decide what the problem is really about, then decompose what is left.

## Abstraction

### The definition in practice

To abstract is to keep what matters for the purpose in hand and to leave out the rest. The key phrase in the definition is **unnecessary details**. A detail is unnecessary only in relation to a purpose, so the same real-world object can have several different abstractions.

| Real-world thing | Purpose | Details kept | Details removed |
|---|---|---|---|
| A railway network | Planning a journey | Stations, lines, interchanges | Real distances, curves of the track, scenery |
| A student | Library system | Name, ID number, books on loan | Height, hobbies, home address |
| A student | School timetable | Name, subjects, year group | Library loans, exam results |
| A car | Racing game | Speed, position, grip | Colour of the seats, engine parts |
| A map for a bus passenger | Choosing a route | Order of stops, the stop names | Road shapes, building positions |

The same student appears twice, with two different abstractions, because the purposes differ. A good abstraction contains **exactly enough** detail to solve the problem. Too little makes a solution impossible; too much makes it complicated and slow.

### Abstraction in a program

Abstraction shows up in several places.

- **A data model.** A variable or a record holds only the attributes the program needs.
- **A subroutine.** Calling `sort(names)` lets the programmer ignore how sorting happens. The details are hidden behind the name.
- **A library function.** `math.sqrt(x)` hides the algorithm.
- **The operating system.** It hides hardware detail from programs (sub-topic 3.6.2).

This last point is called **procedural abstraction** when it applies to subroutines: you use a subroutine through its name and parameters and do not need its internal code.

### Worked example 1: abstracting a bus route

A town wants a program to tell passengers how many stops there are between two bus stops. A real route has roads, traffic lights and gradients. None of this affects the answer. The abstraction is simply an ordered list of stop names.

```python
route = ["Park", "School", "Library", "Market", "Station"]

def stops_between(start, end):
    return abs(route.index(end) - route.index(start))
```

Called with `"Park"` and `"Station"`, the function returns 4 (`route.index("Station")` is 4 and `route.index("Park")` is 0). The data model is a list; the roads and the traffic have been abstracted away. If the town later wanted a journey *time*, the abstraction would need to keep more detail, such as the minutes between stops.

## Decomposition

### The definition in practice

Decomposition splits a problem into **sub-problems**. Each sub-problem should accomplish an **identifiable task**, meaning that you can name it and say what it must do. Sub-problems can themselves be split again, and the splitting stops when each piece is small enough to code directly.

The result is a tree of tasks, which can be drawn as a hierarchy chart (sub-topic 3.3.1). The top is the whole problem; the leaves are the pieces small enough to implement.

### Worked example 2: decomposing a car park ticket system

**Problem:** a car park records the time a car enters and leaves and works out the fee. Charges are 2.00 pounds for the first hour (or part of it) and 1.50 pounds for each further hour or part hour, with a maximum of 12.00 pounds per day.

Level 1 (the whole system) splits into:

1. Get the entry and exit times.
2. Work out how long the car stayed.
3. Work out the fee.
4. Display the ticket.

Step 3 can be split again:

- 3.1 If the stay is up to 60 minutes, the fee is 2.00 pounds.
- 3.2 Otherwise, count the extra hours or part hours and add 1.50 for each.
- 3.3 Apply the maximum.

Each piece has one clear task and becomes a subroutine.

```python
import math

def minutes_between(entry, exit_):
    return (exit_[0] * 60 + exit_[1]) - (entry[0] * 60 + entry[1])

def fee_for(minutes):
    if minutes <= 60:
        return 2.0
    extra_hours = math.ceil((minutes - 60) / 60)
    return min(12.0, 2.0 + 1.5 * extra_hours)
```

Here are the recomputed results.

| Entry | Exit | Minutes | Extra hours | Fee (pounds) |
|---|---|---|---|---|
| 09:15 | 10:00 | 45 | none | 2.00 |
| 09:15 | 11:40 | 145 | 2 | 5.00 |
| 08:00 | 17:30 | 570 | 9 | 12.00 (capped; 15.50 uncapped) |
| 08:00 | 20:00 | 720 | 11 | 12.00 (capped) |

For 145 minutes, the time over the first hour is 85 minutes, which is two part hours: 2.00 + 2 × 1.50 = 5.00 pounds. Notice that the decomposition lets us test `fee_for` without involving the time functions at all.

## How decomposition and subroutines connect

The specification says decomposition can be achieved through the use of subroutines. A well-decomposed program has these features.

- Each subroutine does **one identifiable task** and has a name that says what it does.
- The main program calls the subroutines in order.
- The subroutines can be **tested separately**, **reused**, and **shared** between programmers.
- Where a sub-problem is itself complex, its subroutine calls further subroutines.

## Abstraction versus decomposition

| | Abstraction | Decomposition |
|---|---|---|
| Question it answers | "What can I ignore?" | "What are the parts?" |
| Effect on the problem | Makes it simpler | Makes it smaller |
| Result | A model with only the needed details | A set of sub-problems |
| Typical program feature | Data model; use of a subroutine through its name | Subroutines; modules |
| Example | A tube map showing only stations and lines | Splitting a booking system into search, select seat, pay, confirm |

An exam question may give a scenario and ask you to **identify the abstraction** (what is left out and why) or **decompose** it (list the sub-problems). It may also ask you to **explain** the benefit. Linking your answer to the scenario earns the marks.

## Abstraction, decomposition and the structured approach

The structured approach in sub-topic 3.3.1 brings the two ideas together. A programmer first abstracts the problem to a data model, then decomposes the work into modules with parameters and return values. In a hierarchy chart, the top box is the whole problem and each lower box is a sub-problem, so the chart is a picture of the decomposition.

## Benefits

- **Abstraction** reduces complexity, keeps focus on the essentials, lets you reuse a solution for a general case, and lets you use a subroutine without understanding its inner workings.
- **Decomposition** makes the problem manageable; lets several programmers work in parallel; allows each part to be tested separately; and makes later change easier because a fault or a new requirement affects only one part.

## Exam technique

- **Define the terms using the specification wording**, then apply them to the scenario.
- **For abstraction questions:** name at least one detail that is kept and one that is removed, and say why.
- **For decomposition questions:** give sub-problems as short task names, such as "calculate the fee", not vague phrases such as "do the maths".
- **Keep each sub-problem to one task.** A sub-problem called "input data and calculate and print" is not decomposed.

## Common mistakes

- Defining abstraction as "hiding code" without mentioning unnecessary detail and the purpose of the problem.
- Describing decomposition as "making the program shorter".
- Giving a list of steps in time order and calling it decomposition when the sub-problems are not separate tasks.
- Removing a detail the program needs, such as leaving out the stop order in the bus example.
- Forgetting that a problem can be broken down more than once.
- Treating abstraction and decomposition as the same thing.

## Next steps

- [Abstraction and decomposition revision notes](/resources/oxfordaqa-a-level-computer-science-9645-abstraction-decomposition-revision-notes/)
- [Abstraction and decomposition practice questions](/resources/oxfordaqa-a-level-computer-science-9645-abstraction-decomposition-practice/)
- [Structured approach study guide](/resources/oxfordaqa-a-level-computer-science-9645-structured-approach-programming/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.3.2 Abstraction and decomposition.
