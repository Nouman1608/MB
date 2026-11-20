---
title: "OxfordAQA A-Level Computer Science (9645): Structured approach to programming"
seoTitle: "OxfordAQA A-Level CS 9645 Structured Programming Guide"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.3.1 in depth: modularised programming, parameters, return values, local variables, advantages and drawing hierarchy and structure charts."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.3.1 Structured approach to programming** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.3 Program design (AS). The specification asks you to "understand the structured approach to program design and construction", to describe it including **modularised programming**, **the use of parameters and return values** and **the use of local or (if supported by language) block scope variables**, to **explain its advantages**, and to **construct and use hierarchy charts and structure charts** when designing programs.

For quick recall use the [structured approach revision notes](/resources/oxfordaqa-a-level-computer-science-9645-structured-approach-programming-revision-notes/), then try the [structured approach practice questions](/resources/oxfordaqa-a-level-computer-science-9645-structured-approach-programming-practice/). The topic-level [program design study guide](/resources/oxfordaqa-a-level-computer-science-program-design/) covers all of section 3.3; this page goes deeper on 3.3.1 alone. Code is Python and pseudocode.

## What "structured" means

In a **structured** program the work is divided into **modules**. A module is a self-contained subroutine that carries out one identifiable task and has a clear interface to the rest of the program. The main program then reads like an outline: it calls each module in order, and the detail lives inside the modules.

The approach has three linked ideas, all named in the specification.

1. **Modularised programming.** The solution is split into subroutines, each with one clear job.
2. **Parameters and return values.** Data goes into a module through its **parameters** and the result comes back as a **return value**, not through shared variables.
3. **Local variables (or block scope).** Each module keeps its working data in **local** variables, which exist only while the module runs and cannot be changed from outside.

Together these make each module a black box: you can describe it as "takes these inputs and gives that output" without caring how it works inside.

## Worked example 1: an unstructured and a structured version

The task: given a list of five test marks, display the total, the mean and the highest mark.

An **unstructured** version puts everything in one block and uses global variables:

```python
marks = [62, 48, 75, 91, 55]
total = 0
for m in marks:
    total = total + m
high = marks[0]
for m in marks:
    if m > high:
        high = m
mean = total / len(marks)
print(total, mean, high)
```

It works, but if the loop variable `m` or `total` were reused further down a longer program, a change in one place could silently break another. A **structured** version separates the tasks:

```python
def total_of(values):
    result = 0
    for v in values:
        result = result + v
    return result

def highest(values):
    best = values[0]
    for v in values:
        if v > best:
            best = v
    return best

def mean_of(values):
    return total_of(values) / len(values)

def main():
    marks = [62, 48, 75, 91, 55]
    print(total_of(marks), mean_of(marks), highest(marks))

main()
```

Recomputed output: the total is 331, the mean is 66.2 and the highest mark is 91. Each module takes a list through a parameter, uses local variables (`result`, `best`, `v`) and returns a single value. `mean_of` reuses `total_of`, so the totalling code exists once.

## Parameters and return values

A **parameter** is a variable named in the subroutine's definition that receives a value when the subroutine is called. The values supplied at the call are the **arguments**. A **return value** is the result handed back to the calling code, which can use it in an expression.

Passing data this way, rather than reading global variables, has a major benefit: the subroutine behaves the same wherever it is called from, so it can be tested alone with chosen inputs. A subroutine that depends on a hidden global is unpredictable, because the global might be changed by another part of the program.

The specification notes that students should know how to return more than one value from a subroutine, which C# and VB.Net can do with tuples. In Python, returning `(low, high)` also gives a tuple.

## Local variables and block scope

A **local variable** is declared inside a subroutine. It exists only while the subroutine runs, and only that subroutine can use it. In C# and VB.Net a **block scope** variable exists only inside the block (for example a loop or `if` structure) in which it is declared. The advantages of keeping variables local are:

- **No accidental interference.** Two modules can both use a variable called `total` without clashing.
- **Easier testing.** A module's behaviour depends only on its inputs.
- **Easier maintenance.** A change to a module's internal variables cannot affect other modules.
- **Memory is released** when the subroutine ends.

## Advantages of the structured approach

Be ready to explain these, with a link to the situation in the question.

| Advantage | Explanation |
|---|---|
| Easier to understand | Short modules with meaningful names are quicker to read than one long block |
| Easier to test and debug | Each module can be tested alone; an error is traced to one module |
| Reuse | A module written once can be called many times or in other programs |
| Teamwork | Different programmers can write different modules at the same time |
| Easier maintenance | A change is made in one place, and local variables stop side effects |
| Fewer errors | Parameters and local variables limit unexpected interactions |

Do not simply list the words "readable" or "reusable". An answer that says "the VAT calculation can be called from both the invoice and the receipt module, so it is written and tested once" will earn the mark.

## Hierarchy charts

A **hierarchy chart** shows how a program is divided into modules. The top box is the main program. Below it are the modules it calls. Below those are the modules they call, and so on. Lines show "calls" relationships. A hierarchy chart shows **what the modules are and how they are organised**, not what data passes between them.

For the marks program:

```
                    main
          ┌──────────┼───────────┐
      total_of    mean_of     highest
                     │
                  total_of
```

`mean_of` calls `total_of`, so `total_of` appears beneath it as well as beneath `main`. Many charts show each module once and draw several lines to it instead. Either form is acceptable, provided the call relationships are clear. Read left to right the order often shows the sequence in which the modules are called.

## Structure charts

A **structure chart** adds the **data flow**. It has the same module boxes but labels each connection with the **parameters going down** and the **return values coming up**, usually drawn as small arrows beside the lines.

For `mean_of`:

| Link | Data going down (parameters) | Data coming up (return value) |
|---|---|---|
| `main` to `total_of` | `marks` (list) | `total` (integer) |
| `main` to `mean_of` | `marks` (list) | `mean` (float) |
| `main` to `highest` | `marks` (list) | `best` (integer) |
| `mean_of` to `total_of` | `values` (list) | `result` (integer) |

Notice that the table gives the same information as a chart. In an exam you may be asked to **complete** a structure chart by adding the missing labels or modules, or to **read** a given chart and write the matching subroutine headers. The headers follow directly: `mean_of(values)` takes a list and returns a float.

## Worked example 2: from chart to code

A structure chart shows a module `price_with_vat` that receives `price` (float) and returns `gross` (float), called from `main`. The VAT rate is 20 per cent.

```python
def price_with_vat(price):
    gross = price * 1.2
    return round(gross, 2)

print(price_with_vat(50))      # 60.0
print(price_with_vat(19.99))   # 23.99
```

The chart tells you the parameter and the return value; nothing else about the inside is needed to write the call. The same information would be shown in pseudocode as `FUNCTION price_with_vat(price) RETURNS gross`.

## Choosing module boundaries

Good modules have **one clear task** that you can name in a short phrase ("find the highest mark"). A module that both reads input and calculates a result is harder to reuse and test than two modules that each do one thing. A useful test: if you need the word "and" to describe what a module does, consider splitting it.

## Exam technique

- **Describing the approach:** mention modularisation, parameters and return values, and local variables. Naming all three covers the specification.
- **Advantages:** give two or three, each with a reason.
- **Charts:** a hierarchy chart shows structure only; a structure chart shows data flow as well. Use exact module names from the question.
- **Code questions:** pass data in through parameters and return results; avoid global variables.

## Common mistakes

- Describing a hierarchy chart as showing data flow.
- Leaving out the direction or the name of the data on a structure chart.
- Using global variables where a parameter would do.
- Writing one module that does several jobs.
- Listing advantages with no explanation.
- Confusing a parameter (in the definition) with an argument (in the call).

## Next steps

- [Structured approach revision notes](/resources/oxfordaqa-a-level-computer-science-9645-structured-approach-programming-revision-notes/)
- [Structured approach practice questions](/resources/oxfordaqa-a-level-computer-science-9645-structured-approach-programming-practice/)
- [Program design study guide](/resources/oxfordaqa-a-level-computer-science-program-design/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.3.1 Structured approach to programming.
