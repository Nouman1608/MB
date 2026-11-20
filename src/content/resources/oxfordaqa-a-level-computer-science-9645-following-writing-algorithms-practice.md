---
title: "OxfordAQA A-Level Computer Science (9645): Following and writing algorithms -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Algorithms Practice"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 3 – Program design"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 3.3
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "program-design-9645"
  - qualification: "a-level"
    topic: "program-design-9645"
    subtopic: "following-and-writing-algorithms-oxfordaqa-alevel-cs"
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.3.3: reading pseudocode, trace tables, termination and converting pseudocode into Python, with answers."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and practice on this content. They are **not** reproduced past-paper questions, and they do **not** replicate the exam's exact structure, question count or mark tariffs -- examination boards hold copyright in their own papers. Use these alongside the official past papers from your board or school.

These questions practise sub-topic **3.3.3 Following and writing algorithms** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: the definition of an algorithm, reading pseudocode, hand-tracing and converting pseudocode into program code. The pseudocode uses `←` for assignment and `=` for comparison; `DIV` and `MOD` are integer division and remainder. Code is Python.

Related pages: [following and writing algorithms study guide](/resources/oxfordaqa-a-level-computer-science-9645-following-writing-algorithms/) · [following and writing algorithms revision notes](/resources/oxfordaqa-a-level-computer-science-9645-following-writing-algorithms-revision-notes/)

## Section A

**1.** State what is meant by an algorithm. **[2]**

**2.** Explain why the following is not an algorithm. **[2]**

```
n ← 10
WHILE n <> 0
    n ← n - 3
ENDWHILE
```

**3.** Give the value of each expression. **[2]**

**(a)** `47 MOD 5`
**(b)** `47 DIV 5`

## Section B

**4.** Trace this algorithm and state the output.

```
x ← 1
WHILE x < 50
    x ← x * 3
    OUTPUT x
ENDWHILE
```

Show the values of `x` after each pass. **[3]**

**5.** Trace the algorithm for the input 7305 using a trace table with columns for `n` and `count`, and state the value returned.

```
FUNCTION CountDigits(n)
    count ← 0
    WHILE n > 0
        n ← n DIV 10
        count ← count + 1
    ENDWHILE
    RETURN count
ENDFUNCTION
```

**[4]**

**6.** Study this algorithm.

```
FUNCTION Mystery(data)
    biggest ← data[0]
    smallest ← data[0]
    FOR EACH v IN data
        IF v > biggest THEN
            biggest ← v
        ENDIF
        IF v < smallest THEN
            smallest ← v
        ENDIF
    ENDFOR
    RETURN biggest - smallest
ENDFUNCTION
```

**(a)** State the value returned when `data` is `[8, 3, 11, 5, 9]`. **[2]**
**(b)** State what the algorithm calculates. **[1]**
**(c)** Convert the algorithm into a Python function. **[4]**

**7.** The algorithm below adds up all the multiples of 4 from 1 to 20 inclusive.

```
total ← 0
FOR i ← 1 TO 20
    IF i MOD 4 = 0 THEN
        total ← total + i
    ENDIF
ENDFOR
OUTPUT total
```

**(a)** State the output. **[1]**
**(b)** State the number of times `total ← total + i` is executed. **[1]**
**(c)** Write the algorithm in Python. **[3]**

**8.** A student converts the Gcd algorithm below into Python but gets a wrong answer.

```
WHILE b <> 0
    t ← b
    b ← a MOD b
    a ← t
ENDWHILE
```

```python
while b != 0:
    a = b
    t = b
    b = a % b
```

**(a)** Identify **two** errors in the Python code. **[2]**
**(b)** Write the corrected loop. **[2]**

**9.** Trace this algorithm for the values `a = 5` and `b = 9` and state the final values of `a` and `b`. State what the algorithm achieves. **[4]**

```
a ← a + b
b ← a - b
a ← a - b
```

**10.** An algorithm checks whether a number `n` greater than 1 is prime by testing every `i` from 2 while `i * i <= n`.

**(a)** Complete a trace table for `n = 21`, showing `i`, `i * i` and `n MOD i`, until the algorithm returns a result. **[3]**
**(b)** Explain why the algorithm always terminates. **[2]**

## Answers

**1.** A **sequence of steps** that can be followed to complete a task [1] and that **always terminates** [1]. **[2]**

**2.** The value of `n` goes 10, 7, 4, 1, −2, −5 and so on [1], so it **never equals 0**; the loop never ends, so the sequence of steps does not terminate [1]. A correct condition would be `n > 0`. **[2]**

**3. (a)** 2 [1] **(b)** 9 [1] **[2]**

**4.** `x` after each pass: 3, 9, 27, 81 [2 marks: all four values [2]; three correct [1]]. The loop stops when `x` is 81, because 81 is not less than 50 [1]. Output: **3, 9, 27, 81** (accept the values listed in order). **[3]**

**5.**

| Pass | n | count |
|---|---|---|
| start | 7305 | 0 |
| 1 | 730 | 1 |
| 2 | 73 | 2 |
| 3 | 7 | 3 |
| 4 | 0 | 4 |

Starting values [1]; `n` correct on all passes [1]; `count` correct on all passes [1]; returns **4** [1]. **[4]**

**6. (a)** biggest = 11 [1]; smallest = 3; difference = **8** [1]. **[2]**
**(b)** The **range** of the data: the difference between the largest and smallest values [1]. **[1]**
**(c)** Example:

```python
def mystery(data):
    biggest = data[0]                 # [1] initialise both from first item
    smallest = data[0]
    for v in data:                    # [1] loop over data
        if v > biggest:               # [1] both comparisons correct
            biggest = v
        if v < smallest:
            smallest = v
    return biggest - smallest         # [1] return the difference
```

**[4]**

**7. (a)** 4 + 8 + 12 + 16 + 20 = **60** [1]. **[1]**
**(b)** **5** times [1]. **[1]**
**(c)** Example:

```python
total = 0
for i in range(1, 21):        # [1] range ends at 21 so that 20 is included
    if i % 4 == 0:            # [1] MOD becomes %, comparison uses ==
        total = total + i
print(total)                  # [1] output
```

**[3]**

**8. (a)** Any two [1 each]: `a = b` is executed **first**, so the old value of `a` is **lost** before `b = a % b` uses it; `t` is saved but **never used**, so `a` is not given the old `b` at the end of the pass in the right order; the three statements are in the **wrong order**. **[2]**
**(b)** Corrected loop:

```python
while b != 0:
    t = b              # [1] save b first
    b = a % b          # uses the old a
    a = t              # [1] then a becomes the old b
```

**[2]**

**9.** Trace:

| Statement | a | b |
|---|---|---|
| start | 5 | 9 |
| `a ← a + b` | 14 | 9 |
| `b ← a - b` | 14 | 5 |
| `a ← a - b` | 9 | 5 |

Correct rows [2]; final values a = 9 and b = 5 [1]. The algorithm **swaps the values of `a` and `b` without a third variable** [1]. **[4]**

**10. (a)**

| i | i * i | n MOD i |
|---|---|---|
| 2 | 4 | 1 |
| 3 | 9 | 0 |

Row for 2 correct [1]; row for 3 correct [1]; algorithm stops at i = 3 and returns False because 21 is not prime [1]. **[3]**
**(b)** `i` **increases by 1** on every pass [1]; so `i * i` eventually exceeds `n` and the loop condition becomes false (or a factor is found first) [1]. **[2]**

## Frequently asked questions

**Will I have to write pseudocode in the exam?**
No. The specification says students will be expected to understand algorithms written in pseudocode but will not be expected to write pseudocode.

**Can I use a different pseudocode style?**
When reading, follow the style used in the question. When you write code, use the language you have studied.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.3.3 Following and writing algorithms.
