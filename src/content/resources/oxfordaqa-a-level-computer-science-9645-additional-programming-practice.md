---
title: "OxfordAQA A-Level Computer Science (9645): Additional programming -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Additional Programming Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 9 – Object-oriented and additional programming"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 9.4
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "object-oriented-and-additional-programming"
  - qualification: "a-level"
    topic: "object-oriented-and-additional-programming"
    subtopic: "additional-programming-oxfordaqa-alevel-cs"
description: "Eleven original OxfordAQA 9645 questions on sub-topic 3.9.4: text files, recursion, base cases and traces, with full answers and verified output."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions practise sub-topic **3.9.4 Additional programming** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: reading and writing text files, and recursion. Code is Python. Output shown in the answers was produced by running the code.

Related pages: [additional programming study guide](/resources/oxfordaqa-a-level-computer-science-9645-additional-programming/) ·
[additional programming revision notes](/resources/oxfordaqa-a-level-computer-science-9645-additional-programming-revision-notes/) ·
[object-oriented and additional programming practice questions](/resources/oxfordaqa-a-level-computer-science-object-oriented-and-additional-programming-practice/)

## Section A

**1.** State what happens to the existing contents of a file when it is opened in write mode, and name the mode that keeps the contents and adds to the end. **[2]**

**2.** Explain what is meant by the base case of a recursive subroutine. **[2]**

**3.** State what happens if a recursive subroutine has no base case. **[1]**

**4.** State the value returned by `sum_digits(7305)`.

```python
def sum_digits(n):
    if n < 10:
        return n
    return n % 10 + sum_digits(n // 10)
```

**[2]**

## Section B

**5.** Write Python code that stores the names "Ana", "Ben" and "Cy" in a text file called `team.txt`, one name on each line. **[3]**

**6.** The file `marks.txt` contains one whole number on each line: 14, 9, 21 and 6. Write code that reads the file and displays the largest number. **[4]**

**7.** Study this function.

```python
def mystery(n):
    if n == 0:
        return 0
    return n + mystery(n - 2)
```

**(a)** State the value of `mystery(6)` and show the calls. **[2]**
**(b)** Explain what happens when `mystery(5)` is called. **[2]**
**(c)** Rewrite the base case so that `mystery(5)` finishes, and state the value it then returns. **[2]**

**8.** Write a recursive function `power(b, e)` that returns b to the power e, for a whole number e that is 0 or more. State the value returned by `power(3, 4)`. **[4]**

**9.** The function below returns a string of binary digits.

```python
def bin_str(n):
    if n < 2:
        return str(n)
    return bin_str(n // 2) + str(n % 2)
```

**(a)** Identify the base case and the recursive case. **[2]**
**(b)** Trace `bin_str(10)`, showing each call and what it returns. **[3]**

**10.** Fibonacci numbers can be found with a recursive function `fib(n)` that returns `n` if n is 0 or 1, and otherwise returns `fib(n - 1) + fib(n - 2)`. State the number of calls to `fib` (including the first) made by `fib(4)`, and explain why a loop would be a better way to compute large Fibonacci numbers. **[3]**

**11.** Compare recursion with iteration for solving a problem. **[3]**

## Answers

**1.** The existing contents are erased (the file is overwritten) [1]. Append mode (`"a"`) keeps them and adds to the end [1]. **[2]**

**2.** The base case is the case in which the subroutine does not call itself [1], where the answer can be returned directly, so the recursion stops [1]. **[2]**

**3.** It calls itself indefinitely and the program fails (for example with a `RecursionError`) [1]. **[1]**

**4.** `sum_digits(7305)` = 5 + 0 + 3 + 7 [1] = **15** [1]. **[2]**

**5.** Example answer:

```python
names = ["Ana", "Ben", "Cy"]
with open("team.txt", "w") as f:          # [1] open in write mode
    for n in names:
        f.write(n + "\n")                 # [1] write each name  [1] with a newline
```

**[3]**

**6.** Example answer:

```python
best = None
with open("marks.txt", "r") as f:         # [1] opens for reading
    for line in f:                        # [1] reads each line
        v = int(line.strip())             # [1] strips the newline and converts
        if best is None or v > best:
            best = v                      # [1] keeps the largest
print(best)
```

The output is `21`. **[4]**

**7. (a)** `mystery(6)` calls `mystery(4)`, then `mystery(2)`, then `mystery(0)`, which returns 0 [1]. The result is 6 + 4 + 2 + 0 = **12** [1]. **[2]**
**(b)** The calls are `mystery(5)`, `mystery(3)`, `mystery(1)`, `mystery(-1)` and so on [1]. n goes 5, 3, 1, -1, ... and never equals 0, so the base case is never reached and the recursion does not stop (a `RecursionError`) [1]. **[2]**
**(c)** Change the base case to `if n <= 0:` [1]. `mystery(5)` then returns 5 + 3 + 1 + 0 = **9** [1]. **[2]**

**8.** Example answer:

```python
def power(b, e):
    if e == 0:
        return 1                     # [1] base case
    return b * power(b, e - 1)       # [1] recursive case  [1] with e reduced by 1
```

`power(3, 4)` returns **81** [1]. **[4]**

**9. (a)** Base case: `n < 2` returns `str(n)` [1]. Recursive case: the call to `bin_str(n // 2)` followed by `str(n % 2)` [1]. **[2]**
**(b)** `bin_str(10)` calls `bin_str(5)` [1], which calls `bin_str(2)`, which calls `bin_str(1)`; `bin_str(1)` returns "1" [1]. Unwinding: `bin_str(2)` returns "1" + "0" = "10"; `bin_str(5)` returns "10" + "1" = "101"; `bin_str(10)` returns "101" + "0" = **"1010"** [1]. **[3]**

**10.** `fib(4)` makes **9** calls [1]. Values such as `fib(2)` are calculated several times [1], and the number of calls grows very quickly as n grows, whereas a loop calculates each value once [1]. **[3]**

**11.** Recursion: the subroutine calls itself with a smaller problem and can give short, clear code for naturally self-similar problems [1]. Iteration: uses a loop, needs no extra stack memory for each repetition and avoids the risk of very deep recursion [1]. Anything that can be done with one can be done with the other; the choice depends on clarity and efficiency [1]. **[3]**

## Frequently asked questions

**Does `write` start a new line?**
No. You must write `"\n"` yourself, or all the values will run together on one line.

**How do I trace a recursive function in the exam?**
List the calls going down until the base case, write the base case's return value, then work back up, adding the value each waiting call was holding.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.9.4 Additional programming (3.9.4.1 Files and 3.9.4.2 Recursion).
