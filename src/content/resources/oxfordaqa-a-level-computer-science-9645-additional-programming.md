---
title: "OxfordAQA A-Level Computer Science (9645): Additional programming"
seoTitle: "OxfordAQA A-Level CS 9645 Additional Programming Guide"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.9.4 in depth: reading and writing text files, and recursion with base and recursive cases, traced step by step."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.9.4 Additional programming** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.9 Object-oriented and additional programming (A-level). It has two parts. In **3.9.4.1 Files** you need to be able to **read from and write to a text file**. In **3.9.4.2 Recursion** you need to know that a **recursive subroutine calls itself**; that it has a **base case** (where it does not call itself) and a **recursive case** (where it does), that it must have a base case to stop it recursing indefinitely, and that there can be more than one of each; and you must be able to solve simple problems using recursion, read and write recursive code and trace recursive algorithms.

For quick recall use the [additional programming revision notes](/resources/oxfordaqa-a-level-computer-science-9645-additional-programming-revision-notes/), and test yourself with the [additional programming practice questions](/resources/oxfordaqa-a-level-computer-science-9645-additional-programming-practice/). The [object-oriented and additional programming study guide](/resources/oxfordaqa-a-level-computer-science-object-oriented-and-additional-programming/) covers all of topic 3.9. Code is Python, and the output shown was produced by running the code.

## Part 1: Text files

Variables disappear when a program ends. A **text file** keeps data on secondary storage so that a program can read it later. A text file holds characters, arranged in **lines**. Each line ends with a newline character.

### Opening a file

A file is opened in a **mode** that says what you want to do with it.

| Mode | Meaning | If the file exists | If it does not exist |
|---|---|---|---|
| `"r"` | Read | Opened at the start | Error (`FileNotFoundError`) |
| `"w"` | Write | **Contents are erased** | Created |
| `"a"` | Append | New text added at the end | Created |

The safest way to open a file in Python is the `with` statement. It **closes the file automatically** when the block ends, even if an error occurs. Closing is important because writing is often buffered and may not reach the file until it is closed.

### Writing

`write` puts a string into the file. It does **not** add a newline, so you must add `"\n"` yourself.

```python
scores = [72, 85, 64, 90]
with open("scores.txt", "w") as f:
    for s in scores:
        f.write(str(s) + "\n")
```

The file now has four lines: 72, 85, 64 and 90. Only strings can be written, which is why `s` is converted with `str`. Opening the same file again with `"a"` adds to it.

```python
with open("scores.txt", "a") as f:
    f.write("58\n")
```

### Reading

Looping over the file object gives one line at a time. Each line still has its newline at the end, so use `strip()` before converting.

```python
total = 0
count = 0
with open("scores.txt", "r") as f:
    for line in f:
        total = total + int(line.strip())
        count = count + 1
print(count, total, total / count)
```

This prints `5 369 73.8`: five scores that add up to 369, with a mean of 73.8.

Other ways to read: `readline()` returns the next single line, and `read()` returns the **whole rest of the file** as one string.

```python
with open("scores.txt", "r") as f:
    first = f.readline()
    rest = f.read()
print(repr(first), repr(rest))
```

The output is `'72\n' '85\n64\n90\n58\n'`. `repr` shows the newline characters. The first call took line 1; the second took everything after it.

### Several values on one line

Data is often stored with a separator such as a comma. Use `split` to break up each line.

```python
with open("names.txt", "w") as f:
    f.write("Ana,12\nBen,9\n")

with open("names.txt") as f:
    for line in f:
        name, age = line.strip().split(",")
        print(name, int(age) + 1)
```

This prints `Ana 13` and `Ben 10`. The ages are strings until `int()` converts them.

### Opening for write erases the file

```python
with open("scores.txt", "w") as f:
    f.write("overwritten\n")
```

All five scores are lost, and the file contains only `overwritten`. This is the most common file mistake: use `"a"` to keep what is there.

### A missing file

Opening a file that does not exist for reading raises an error. A program can catch it.

```python
try:
    open("missing.txt")
except FileNotFoundError:
    print("File not found")
```

In C# and VB.Net the same ideas apply, using classes such as `StreamReader` and `StreamWriter` to read and write lines, and closing or disposing the stream afterwards. Learn the file routines of your own language.

## Part 2: Recursion

A **recursive subroutine** is one that **calls itself**. It solves a problem by solving a smaller version of the same problem. Every recursive subroutine needs:

- a **base case**: a situation simple enough to answer directly, where the subroutine does **not** call itself; and
- a **recursive case**: where the subroutine calls itself with a **smaller or simpler** input that moves towards the base case.

Without a base case, the calls would never stop. Python stops the program with a `RecursionError`.

### Example 1: factorial

n! is n × (n − 1) × ... × 1. The key idea is that n! = n × (n − 1)!, and 1! = 1.

```python
def factorial(n):
    if n <= 1:
        return 1                    # base case
    return n * factorial(n - 1)    # recursive case
```

`factorial(5)` returns 120. The calls go down until the base case is reached, then the answers come back up:

| Call | Waiting to compute | Returns |
|---|---|---|
| `factorial(5)` | 5 × factorial(4) | 120 |
| `factorial(4)` | 4 × factorial(3) | 24 |
| `factorial(3)` | 3 × factorial(2) | 6 |
| `factorial(2)` | 2 × factorial(1) | 2 |
| `factorial(1)` | (base case) | 1 |

Each call waits on the stack for the call below it. `factorial(1)` returns 1 first, then `factorial(2)` returns 2 × 1, and so on up the table.

### Example 2: sum of digits

```python
def sum_digits(n):
    if n < 10:
        return n                           # base case: one digit
    return n % 10 + sum_digits(n // 10)    # last digit + the rest
```

Trace `sum_digits(4821)`:

1. 4821 is 10 or more, so it returns 1 + `sum_digits(482)`.
2. `sum_digits(482)` returns 2 + `sum_digits(48)`.
3. `sum_digits(48)` returns 8 + `sum_digits(4)`.
4. `sum_digits(4)`: 4 < 10, so the base case returns 4.
5. Unwinding: 8 + 4 = 12, then 2 + 12 = 14, then 1 + 14 = **15**.

### Example 3: greatest common divisor

```python
def gcd(a, b):
    if b == 0:
        return a
    return gcd(b, a % b)
```

`gcd(48, 18)` calls `gcd(18, 12)`, which calls `gcd(12, 6)`, which calls `gcd(6, 0)`. Now b is 0, so the base case returns 6. Each waiting call returns that same value, so the answer is **6**.

### Example 4: more than one base case and recursive call

The specification notes that a subroutine may have more than one base case or recursive case. The Fibonacci function has two base cases (0 and 1) and a recursive case with two calls.

```python
def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)
```

`fib(5)` is 5 and `fib(6)` is 8. Counting every call made, `fib(5)` makes **15 calls** and `fib(6)` makes 25. The number of calls grows very quickly because the same values are recalculated many times, which is a reason to prefer a loop for this particular problem.

### Example 5: working with strings and lists

```python
def reverse(s):
    if len(s) <= 1:
        return s
    return reverse(s[1:]) + s[0]

def total(lst):
    if len(lst) == 0:
        return 0
    return lst[0] + total(lst[1:])
```

`reverse("stack")` gives `kcats`, and `total([4, 7, 1, 8])` gives 20. In each case the base case is an empty or one-item sequence, and the recursive case works on all but the first item.

### Writing a recursive subroutine: a method

1. **Find the base case.** What is the simplest input, with an answer you know without calculation?
2. **Find the recursive case.** How does the answer for the input relate to the answer for a slightly smaller input?
3. **Make sure each call moves towards the base case.** Otherwise the recursion never ends.
4. **Check with a small input** by tracing by hand.

### Recursion and iteration

Anything done with recursion can be done with a loop. Recursion often gives shorter, clearer code for problems that are naturally self-similar. But each call uses memory on the call stack, so very deep recursion can run out of space, and some recursive solutions, such as Fibonacci above, repeat work.

## Exam technique

- **Name the base case and the recursive case** when asked to explain a recursive subroutine.
- **Trace with a table** of calls and returns. List the calls going down, then the returns coming back up.
- **Check the base case first** when asked why a subroutine never finishes.
- **For files, state the mode.** Reading uses `"r"`, writing `"w"` (erases), appending `"a"`.
- **Remember `strip()` and `str()`/`int()`.** Lines include a newline, and files hold text.
- **Close the file.** Use `with`, or close it explicitly.

## Common mistakes

- Opening a file with `"w"` and losing its contents.
- Forgetting `"\n"` when writing, so all values run together on one line.
- Forgetting to convert read text to a number before calculating.
- Writing a recursive case that does not get closer to the base case, such as calling `factorial(n)` again with the same n.
- Having no base case, or a base case that is never reached (for example testing `n == 0` when n starts at a negative value).
- Returning the wrong thing from the base case, which makes every answer wrong.

## Next steps

- [Additional programming revision notes](/resources/oxfordaqa-a-level-computer-science-9645-additional-programming-revision-notes/)
- [Additional programming practice questions](/resources/oxfordaqa-a-level-computer-science-9645-additional-programming-practice/)
- [Graphs study guide](/resources/oxfordaqa-a-level-computer-science-9645-graphs/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.9.4 Additional programming (3.9.4.1 Files and 3.9.4.2 Recursion).
