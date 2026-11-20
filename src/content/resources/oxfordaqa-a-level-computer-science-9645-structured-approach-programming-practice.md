---
title: "OxfordAQA A-Level Computer Science (9645): Structured approach to programming -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Structured Approach Practice"
resourceType: "practice-questions"
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
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.3.1: modular design, parameters, return values, local variables and hierarchy and structure charts."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and practice on this content. They are **not** reproduced past-paper questions, and they do **not** replicate the exam's exact structure, question count or mark tariffs -- examination boards hold copyright in their own papers. Use these alongside the official past papers from your board or school.

These questions practise sub-topic **3.3.1 Structured approach to programming** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: modularised programming, parameters and return values, local variables, the advantages of the approach, and hierarchy and structure charts. Code is Python.

Related pages: [structured approach study guide](/resources/oxfordaqa-a-level-computer-science-9645-structured-approach-programming/) · [structured approach revision notes](/resources/oxfordaqa-a-level-computer-science-9645-structured-approach-programming-revision-notes/)

## Section A

**1.** Describe what is meant by a **module** in a structured program. **[2]**

**2.** State the difference between a parameter and a return value. **[2]**

**3.** State **one** difference between a hierarchy chart and a structure chart. **[1]**

**4.** Give **two** advantages of declaring a variable inside a subroutine rather than making it global. **[2]**

## Section B

**5.** A program calculates the area and perimeter of a rectangle.

```python
def area(w, h):
    return w * h

def perimeter(w, h):
    return 2 * (w + h)

def main():
    print(area(6, 4))
    print(perimeter(6, 4))

main()
```

**(a)** State the two values printed. **[2]**
**(b)** Identify the parameters of `area`. **[1]**
**(c)** Draw a hierarchy chart for the program. **[2]**

**6.** A programmer writes this code using a global variable.

```python
discount = 10

def price_after_discount(price):
    return price * (1 - discount / 100)
```

**(a)** Explain why `price_after_discount` is not fully modular. **[2]**
**(b)** Rewrite the subroutine so that the discount is passed as a parameter. Name the new subroutine `cost_after_discount`. **[2]**
**(c)** State the value returned by `cost_after_discount(34, 10)`. Use the unit price 34. **[1]**

**7.** An online shop has a program with these modules: `main`, `get_order`, `calculate_total`, `print_receipt`. `main` calls the other three. `calculate_total` receives `items` (a list of prices) and returns `total` (a number). `print_receipt` receives `total`.

**(a)** State the name of the chart that shows the data passed between modules. **[1]**
**(b)** Draw this chart, showing the data passed between `main` and `calculate_total`. **[3]**
**(c)** Write the header of `calculate_total` in Python. **[1]**

**8.** Explain **three** advantages of using a structured approach when a team of programmers builds a large program. **[6]**

**9.** The subroutine below works out the larger of two numbers. It is called to find the largest of three numbers.

```python
def larger(a, b):
    if a > b:
        return a
    return b

result = larger(larger(3, 9), 5)
```

**(a)** State the value of `result`. **[1]**
**(b)** Explain why `a` and `b` in `larger` do not clash with a variable called `a` in the main program. **[2]**

**10.** A temperature program contains this module.

```python
def to_fahrenheit(c):
    return c * 9 / 5 + 32
```

**(a)** State the values returned by `to_fahrenheit(25)` and `to_fahrenheit(-40)`. **[2]**
**(b)** Describe how the module could be tested without running the rest of the program. **[2]**

## Answers

**1.** A module is a **self-contained subroutine** [1] that carries out **one identifiable task** (with a clear interface) [1]. **[2]**

**2.** A parameter is a variable that **receives data into** the subroutine [1]; a return value is the **result passed back** to the code that called it [1]. **[2]**

**3.** A structure chart shows the **data passed** (parameters and return values) between modules; a hierarchy chart does not [1]. **[1]**

**4.** Any two [1 each]: it cannot be **changed accidentally** by other parts of the program; the same name can be **reused** in other subroutines without clashing; the subroutine can be **tested in isolation**; memory is released when the subroutine ends. **[2]**

**5. (a)** 24 [1] and 20 [1]. **[2]**
**(b)** `w` and `h` [1]. **[1]**
**(c)** `main` at the top [1] with `area` and `perimeter` joined to it by lines beneath [1]. **[2]**

```
        main
       /    \
    area   perimeter
```

**6. (a)** The subroutine **depends on a global variable** `discount` [1], so its result depends on something outside it that other code could change, and it cannot be reused or tested on its own [1]. **[2]**
**(b)** Example:

```python
def cost_after_discount(price, discount):     # [1] second parameter added
    return price * (1 - discount / 100)       # [1] uses the parameter
```

**[2]**
**(c)** 34 × (1 − 0.10) = **30.6** [1]. **[1]**

**7. (a)** A **structure chart** [1]. **[1]**
**(b)** `main`, `get_order`, `calculate_total` and `print_receipt` shown with `main` above the other three [1]; a link from `main` to `calculate_total` labelled with `items` going down [1]; `total` labelled coming up [1]. **[3]**
**(c)** `def calculate_total(items):` [1]. **[1]**

**8.** Three advantages, each with an explanation [2 each: advantage [1], reason or link to the team situation [1]]. Examples: programmers can write **different modules at the same time**, so the work is shared and finished sooner; each module can be **tested separately**, so faults are found quickly and traced to one module; modules with clear parameters and return values mean one programmer **needs only the interface**, not the internal code of another's module; a module can be **reused** in the program or in later projects; **changes** are made in one place, with local variables preventing side effects. **[6]**

**9. (a)** `larger(3, 9)` gives 9; `larger(9, 5)` gives **9** [1]. **[1]**
**(b)** `a` and `b` are **parameters**, which are **local** to the subroutine [1]; they exist only while it runs, so a variable of the same name elsewhere is a separate variable [1]. **[2]**

**10. (a)** 25 × 9 / 5 + 32 = **77.0** [1]; −40 × 9 / 5 + 32 = **−40.0** [1]. **[2]**
**(b)** Call the module on its own with chosen test values [1] and compare the returned value with the expected result, because it takes its input by parameter and returns its output [1]. **[2]**

## Frequently asked questions

**Do I need to draw charts with exact symbols?**
No special symbols are needed. Boxes for modules, lines for calls and labelled arrows for data are enough, provided the module names are clear.

**Can a module call another module?**
Yes. In the hierarchy it appears beneath the module that calls it, and it may appear more than once if several modules call it.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.3.1 Structured approach to programming.
