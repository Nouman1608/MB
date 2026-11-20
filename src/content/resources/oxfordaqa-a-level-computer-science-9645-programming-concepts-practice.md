---
title: "OxfordAQA A-Level Computer Science (9645): Programming concepts -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Programming Concepts Practice"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 1 – Procedural programming"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 1.2
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "procedural-programming"
  - qualification: "a-level"
    topic: "procedural-programming"
    subtopic: "programming-concepts-oxfordaqa-alevel-cs"
description: "Twelve original OxfordAQA 9645 questions on sub-topic 3.1.2 Programming concepts: iteration traces, operators, strings, exceptions and subroutines, with answers."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and practice on this content. They are **not** reproduced past-paper questions, and they do **not** replicate the exam's exact structure, question count or mark tariffs -- examination boards hold copyright in their own papers. Use these alongside the official past papers from your board or school.

These questions practise sub-topic **3.1.2 Programming concepts** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: statement types, iteration, arithmetic, relational and Boolean operations, string handling, random numbers, exception handling and subroutines. Code is Python. Indexes start at 0.

Related pages: [programming concepts study guide](/resources/oxfordaqa-a-level-computer-science-9645-programming-concepts/) · [procedural programming revision notes](/resources/a-computer-science-procedural-revision-notes/)

## Section A

**1.** State the value of each Python expression. **[4]**

**(a)** `47 // 5`
**(b)** `47 % 5`
**(c)** `2 ** 5`
**(d)** `int(-2.7)`

**2.** State the difference between definite and indefinite iteration, and give one situation where each is suitable. **[4]**

**3.** Give **two** reasons why it is good practice to use meaningful identifier names. **[2]**

**4.** The variables are `a = True`, `b = False` and `c = True`. Give the value of each expression, using the order of precedence NOT, then AND, then OR. **[3]**

**(a)** `NOT a OR b AND c`
**(b)** `(NOT a OR b) AND c`
**(c)** `a AND NOT b OR c`

## Section B

**5.** Trace this code and state the final value of `total` and how many times the loop body runs. **[3]**

```python
total = 0
for i in range(2, 11, 3):
    total = total + i
```

**6.** Trace this code, showing the value of `n` after each pass, and state the final value of `count`. **[4]**

```python
n = 100
count = 0
while n >= 10:
    n = n // 2
    count = count + 1
```

**7.** Write a Python function `grade(mark)` that returns `"A"` for 70 or more, `"B"` for 50 to 69 and `"C"` otherwise. Use nested or chained selection. **[4]**

**8.** The variable `word` holds `"programming"`. State the result of each expression. **[4]**

**(a)** `len(word)`
**(b)** `word[3:7]` (index 3 up to, but not including, index 7)
**(c)** `word.find("g")`
**(d)** `chr(ord("A") + 3)`

**9.** A program asks for a whole-number age.

```python
age = int(input("Age: "))
```

**(a)** Describe what happens if the user types `abc` and the program has no exception handling. **[1]**
**(b)** Rewrite the statement so that the program prints `Invalid` instead of stopping, using exception handling. **[3]**

**10.** A subroutine is defined as follows.

```python
def f(x, y):
    z = x * 2
    return z + y

x = 3
y = 4
print(f(y, x))
print(x, y)
```

**(a)** State the two values printed by the first `print` and second `print` statements, in order. **[2]**
**(b)** State the name given to `z` and explain why it cannot be used after the call. **[2]**

**11.** Explain **three** advantages of using subroutines in a large program. **[3]**

**12.** A program calls subroutine `A`, which calls subroutine `B`.

**(a)** Name the **three** items stored in the stack frame created for each call. **[3]**
**(b)** Explain why a stack is the appropriate structure for this. **[2]**

## Answers

**1. (a)** 9 [1] **(b)** 2 [1] **(c)** 32 [1] **(d)** −2 [1] **[4]**

**2.** Definite iteration repeats a **known number of times** [1]; example: processing every item in a list of 30 items [1]. Indefinite iteration repeats **until a condition changes**, so the count is not known in advance [1]; example: asking for a password until it is correct [1]. **[4]**

**3.** Any two [1 each]: the code is easier to **read and understand**; easier to **maintain** or debug later; others can follow the program without extra explanation; reduces the chance of using the wrong variable. **[2]**

**4. (a)** `NOT a` is False; `b AND c` is False; False OR False is **False** [1]
**(b)** (False OR False) AND True is **False** [1]
**(c)** `a AND NOT b` is True; True OR c is **True** [1]
**[3]**

**5.** The loop values are i = 2, 5, 8 [1]. `total` = 2 + 5 + 8 = **15** [1]. The body runs **3** times [1]. **[3]**

**6.** `n` after each pass: 50, 25, 12, 6 [3 marks: all four correct [2]; three correct [1]]. The loop stops when n = 6, which is below 10. `count` = **4** [1]. **[4]**

**7.** Example answer:

```python
def grade(mark):
    if mark >= 70:        # [1] first condition
        return "A"        # [1] A returned
    elif mark >= 50:      # [1] second condition (chained or nested)
        return "B"
    else:
        return "C"        # [1] default C returned
```

**[4]**

**8. (a)** 11 [1] **(b)** `"gram"` [1] **(c)** 3 [1] **(d)** `"D"` [1] **[4]**

**9. (a)** The program raises a **ValueError** and **stops** [1].
**(b)** Example:

```python
try:                                  # [1] try block around the conversion
    age = int(input("Age: "))
except ValueError:                    # [1] handles the error
    print("Invalid")                  # [1] message printed
```

**[3]**

**10. (a)** `f(y, x)` is `f(4, 3)`, so `z` = 8 and the result is 8 + 3 = **11** [1]. The second print shows **3 4**, because the global `x` and `y` are not changed [1]. **[2]**
**(b)** `z` is a **local variable** [1]; it exists only while the subroutine is executing and is accessible only within it, so it is out of scope after the call [1]. **[2]**

**11.** Any three [1 each]: code is **written once and reused**; the program is split into **smaller, manageable parts**; each part can be **tested separately**; the main program becomes **shorter and easier to read**; several programmers can work on **different subroutines**; a change or fix is made in **one place**. **[3]**

**12. (a)** **Return address** [1]; **parameters** [1]; **local variables** [1]. **[3]**
**(b)** Calls are nested: the most recently called subroutine (`B`) must finish first and return before `A` can continue [1], which is last-in first-out order, so each call **pushes** a frame and each return **pops** it [1]. **[2]**

## Frequently asked questions

**Do I need to know the difference between a function and a procedure?**
No. The specification says students do not need the terms to distinguish between subroutines that do and do not return values.

**Is pass by value or reference examined?**
No. You may use either if your language supports it, but you will not be asked to distinguish them.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.1.2 Programming concepts.
