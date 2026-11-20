---
title: "OxfordAQA A-Level Computer Science (9645): Structured approach to programming -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Structured Approach Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 3 – Program design"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 3.1
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "program-design-9645"
  - qualification: "a-level"
    topic: "program-design-9645"
    subtopic: "structured-approach-to-programming-oxfordaqa-alevel-cs"
description: "Recall notes for OxfordAQA 9645 sub-topic 3.3.1: modularisation, parameters and return values, local variables, advantages, hierarchy and structure charts."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.3.1 Structured approach to programming** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (AS content in topic 3.3 Program design). For worked code and chart examples, see the [structured approach study guide](/resources/oxfordaqa-a-level-computer-science-9645-structured-approach-programming/); then practise with the [structured approach practice questions](/resources/oxfordaqa-a-level-computer-science-9645-structured-approach-programming-practice/).

## What the specification requires

- Understand the **structured approach** to program design and construction.
- Describe it, including **modularised programming**, **parameters and return values** and **local (or block scope) variables**.
- **Explain the advantages** of the structured approach.
- **Construct and use hierarchy charts and structure charts** when designing programs.

## Key terms

| Term | Meaning |
|---|---|
| Structured approach | Designing a program as modules that have clear interfaces and keep their own data |
| Module | A self-contained subroutine that does one identifiable task |
| Parameter | A variable named in a subroutine definition that receives data |
| Argument | The value supplied for a parameter when the subroutine is called |
| Return value | The result passed back to the calling code |
| Local variable | A variable that exists only while its subroutine runs and is usable only inside it |
| Block scope | A variable that exists only inside the block (loop or selection) where it is declared (C# and VB.Net) |
| Global variable | A variable accessible throughout the program |
| Hierarchy chart | A diagram of modules and which calls which |
| Structure chart | A hierarchy chart with the data passed down and returned up labelled |

## The three parts of the approach

1. **Modularise.** Split the problem into subroutines, each with one clear job.
2. **Pass data through parameters and return values.** Do not rely on global variables.
3. **Keep variables local** (or block scoped) so one module cannot change another's data.

A module should be describable as: "takes these inputs, returns that output".

## Advantages (with reasons)

| Advantage | Reason to give |
|---|---|
| Easier to read | Short, named modules; the main program reads like an outline |
| Easier to test | Each module can be tested alone with chosen inputs |
| Easier to debug | A fault is traced to one module |
| Reuse | Written once, called from many places |
| Teamwork | Modules can be written in parallel |
| Easier to maintain | A change is made in one place; local variables prevent side effects |

## Charts compared

| | Hierarchy chart | Structure chart |
|---|---|---|
| Shows modules | Yes | Yes |
| Shows which calls which | Yes | Yes |
| Shows data passed | No | Yes |
| Labels | Module names | Module names, parameters, return values |
| Main use | Overall structure of the design | The interface of each module |

### Worked reminder

The marks program has `main` calling `total_of`, `mean_of` and `highest`; `mean_of` also calls `total_of`. Recomputed for marks 62, 48, 75, 91, 55: total 331, mean 66.2, highest 91.

| Link | Down (parameter) | Up (return) |
|---|---|---|
| `main` to `total_of` | `marks` | `total` |
| `main` to `mean_of` | `marks` | `mean` |
| `main` to `highest` | `marks` | `best` |
| `mean_of` to `total_of` | `values` | `result` |

A structure chart label such as `values (list)` down and `result (integer)` up tells you the subroutine header: `total_of(values)` returns an integer.

## Parameter, argument, return: a quick check

```python
def price_with_vat(price):          # price is the parameter
    return round(price * 1.2, 2)    # the value returned

cost = price_with_vat(19.99)        # 19.99 is the argument; cost becomes 23.99
```

## Exam traps

- **Hierarchy charts do not show data flow.** Only a structure chart does.
- **Parameter versus argument.** The parameter is in the definition; the argument is in the call.
- **Global variables** make a module depend on hidden state, which breaks the structured idea.
- **One job per module.** If you need "and" to describe it, split it.
- **Advantages need reasons.** "Easier to test because each module can be run on its own" earns more than "easier to test".
- **Use the exact names** on the chart in your answers.

## Quick self-test

1. Name the three features of the structured approach listed in the specification.
2. What is a module?
3. State the difference between a parameter and an argument.
4. Why is passing data by parameter better than using a global variable?
5. What does a local variable's scope mean?
6. State one difference between a hierarchy chart and a structure chart.
7. Give two advantages of a structured program.
8. In the marks program, what does `mean_of` call?
9. A module takes `price` and returns `gross`. Write its header in Python.
10. Why is `price_with_vat(50)` equal to 60.0?
11. Can C# block scope variables be used outside their block?
12. What would you do if a module needs "and" to describe what it does?

### Answers

1. Modularised programming; parameters and return values; local (or block scope) variables.
2. A self-contained subroutine that carries out one identifiable task.
3. A parameter is the variable named in the definition; an argument is the value supplied in the call.
4. The module behaves the same wherever it is called and can be tested alone; a global could be changed by other code.
5. The variable exists only while the subroutine runs and is accessible only inside it.
6. A structure chart also labels the data passed down and returned up; a hierarchy chart does not.
7. Any two, each with a reason, such as easier testing and reuse.
8. `total_of`.
9. `def price_with_vat(price):` (returning the gross value).
10. 50 × 1.2 = 60.0 after rounding to 2 decimal places.
11. No. They exist only inside the block where they are declared.
12. Split it into two modules.

## Next steps

- [Structured approach study guide](/resources/oxfordaqa-a-level-computer-science-9645-structured-approach-programming/)
- [Structured approach practice questions](/resources/oxfordaqa-a-level-computer-science-9645-structured-approach-programming-practice/)
- [Program design revision notes](/resources/oxfordaqa-a-level-computer-science-program-design-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.3.1 Structured approach to programming.
