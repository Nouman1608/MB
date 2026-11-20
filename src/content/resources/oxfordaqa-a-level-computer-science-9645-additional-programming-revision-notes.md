---
title: "OxfordAQA A-Level Computer Science (9645): Additional programming -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Additional Programming Notes"
resourceType: "revision-notes"
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
description: "Recall notes for OxfordAQA 9645 sub-topic 3.9.4: text file modes, reading and writing, recursion with base and recursive cases, traces and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.9.4 Additional programming** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (A-level content in topic 3.9 Object-oriented and additional programming). For longer explanations and traces, see the [additional programming study guide](/resources/oxfordaqa-a-level-computer-science-9645-additional-programming/); then practise with the [additional programming practice questions](/resources/oxfordaqa-a-level-computer-science-9645-additional-programming-practice/). Code is Python.

## What the specification requires

- **3.9.4.1 Files:** read from and write to a text file.
- **3.9.4.2 Recursion:** know that a recursive subroutine **calls itself**; that it has a **base case** (no further call) and a **recursive case** (calls itself); that a base case is needed to prevent indefinite recursion; that there may be more than one of each.
- Solve simple problems using recursion; **read and write** recursive code; **trace** recursive algorithms.

## Key terms

| Term | Meaning |
|---|---|
| Text file | A file holding characters arranged in lines |
| Mode | How a file is opened: read, write or append |
| Newline | The character that ends a line, written `"\n"` |
| Recursive subroutine | A subroutine that calls itself |
| Base case | The case where the subroutine does not call itself |
| Recursive case | The case where it calls itself with a simpler input |
| Call stack | Where each waiting call is held until the calls below it return |
| Unwinding | The returns coming back up after the base case is reached |

## File modes and methods

| Mode | Effect | File missing? |
|---|---|---|
| `"r"` | Read from the start | Error |
| `"w"` | Write; **erases** existing contents | Created |
| `"a"` | Add to the end | Created |

| Method | Does |
|---|---|
| `write(text)` | Writes a string; add `"\n"` yourself |
| `readline()` | Returns the next line, including its newline |
| `read()` | Returns the rest of the file as one string |
| `for line in f:` | Gives one line at a time |
| `line.strip()` | Removes the newline and spaces from the ends |
| `line.split(",")` | Breaks a line into a list at each comma |

Use `with open(name, mode) as f:` so that the file is closed automatically.

## File patterns

**Write a list, one item per line**

```python
with open("scores.txt", "w") as f:
    for s in scores:
        f.write(str(s) + "\n")
```

**Read numbers and total them**

```python
total = 0
with open("scores.txt", "r") as f:
    for line in f:
        total = total + int(line.strip())
```

**Read lines with two fields**

```python
with open("names.txt") as f:
    for line in f:
        name, age = line.strip().split(",")
```

Reminders: only strings can be written; everything read is a string until you convert it; opening with `"w"` loses the old contents.

## Recursion: base case and recursive case

```python
def factorial(n):
    if n <= 1:
        return 1                    # base case
    return n * factorial(n - 1)    # recursive case
```

- `factorial(5)` = 5 × `factorial(4)` = ... = 120.
- The recursive call must be **closer to the base case**.
- A missing or unreachable base case gives a `RecursionError`.

## Worked traces

*sum_digits(4821).* Calls down: 4821 → 482 → 48 → 4 (base, returns 4). Returns up: 8 + 4 = 12; 2 + 12 = 14; 1 + 14 = **15**.

*gcd(48, 18).* `gcd(48, 18)` → `gcd(18, 12)` → `gcd(12, 6)` → `gcd(6, 0)` returns 6, so the answer is **6**.

*Fibonacci.* `fib(n)` has two base cases (0 and 1) and a recursive case with two calls. `fib(5)` is 5 and takes 15 calls, because values are recalculated.

## Writing a recursive subroutine

1. Find the **base case** and its answer.
2. Find the **recursive case**: relate the answer to the answer for a smaller input.
3. Check each call moves towards the base case.
4. Test with a small input by hand.

## Recursion or iteration?

| | Recursion | Iteration |
|---|---|---|
| Code | Often shorter for self-similar problems | Often longer, but direct |
| Memory | Each call uses stack space | Uses little extra memory |
| Risk | Too deep a recursion fails; may repeat work | Fewer risks |

## Common file tasks

| Task | Approach |
|---|---|
| Save a list | Open with `"w"`, write each item followed by `"\n"` |
| Add one record | Open with `"a"` and write the record and a newline |
| Count the lines | Read with a `for` loop and add 1 to a counter |
| Find the largest value | Read each line, convert with `int()`, keep the best so far |
| Search for a name | Read each line, `strip()` it and compare |
| Split fields | `line.strip().split(",")` gives a list of strings |

If the file may not exist, put the `open` inside a `try` and catch `FileNotFoundError`.

## Recursion trace template

For a call such as `sum_digits(7305)`, write the expression the call is waiting for, and replace it when the answer arrives:

| Call | Waiting for | Value returned |
|---|---|---|
| `sum_digits(7305)` | 5 + `sum_digits(730)` | 15 |
| `sum_digits(730)` | 0 + `sum_digits(73)` | 10 |
| `sum_digits(73)` | 3 + `sum_digits(7)` | 10 |
| `sum_digits(7)` | base case | 7 |

Fill the table from the bottom up: 7, then 3 + 7 = 10, then 0 + 10 = 10, then 5 + 10 = 15.

## String recursion reminder

`reverse(s)`: the base case is a string of length 0 or 1, which is returned unchanged. The recursive case returns `reverse(s[1:]) + s[0]`, which is the reverse of everything after the first character, followed by the first character. `reverse("stack")` gives `kcats`.

## Exam traps

- **`"w"` erases.** Use `"a"` to add.
- **No newline.** `write` does not add one.
- **Text, not numbers.** Convert with `int()` or `float()`.
- **No base case.** The calls never stop.
- **Base case never reached.** A test for `n == 0` fails if n skips over 0.
- **Trace order.** Calls go down first; the returns happen on the way back up.
- **Wrong return in the base case.** For a product, the base case should return 1, not 0.

## Quick self-test

1. Which mode opens a file to add text at the end?
2. What does opening a file with `"w"` do to existing contents?
3. Why use `with open(...)`?
4. What does `line.strip()` do?
5. What is a recursive subroutine?
6. What is a base case?
7. What happens if there is no base case?
8. What does `factorial(4)` return?
9. What is `sum_digits(305)`?
10. Can a subroutine have more than one base case?
11. What does `"a,b,c".split(",")` return?
12. Give one disadvantage of recursion compared with iteration.

### Answers

1. `"a"` (append).
2. It erases them.
3. It closes the file automatically, even if an error occurs.
4. It removes the newline and any spaces from the ends of the line.
5. A subroutine that calls itself.
6. The case in which the subroutine does not call itself.
7. It recurses indefinitely, and the program fails (a `RecursionError` in Python).
8. 24.
9. 5 + 0 + 3 = 8.
10. Yes (for example, Fibonacci has two).
11. `["a", "b", "c"]`.
12. Any one of: each call uses stack memory so deep recursion can run out of space; some recursive solutions repeat work.

## Next steps

- [Additional programming study guide](/resources/oxfordaqa-a-level-computer-science-9645-additional-programming/)
- [Additional programming practice questions](/resources/oxfordaqa-a-level-computer-science-9645-additional-programming-practice/)
- [Graphs revision notes](/resources/oxfordaqa-a-level-computer-science-9645-graphs-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.9.4 Additional programming (3.9.4.1 Files and 3.9.4.2 Recursion).
