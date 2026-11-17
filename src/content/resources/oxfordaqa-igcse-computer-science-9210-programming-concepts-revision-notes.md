---
title: "OxfordAQA IGCSE Computer Science (9210): Programming concepts -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 2 – Programming"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 2.02
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "programming-concepts-9210"
description: "Revision notes for OxfordAQA IGCSE Computer Science 9210 section 3.2.2: statement types, constants, loop choice, nesting, identifiers, traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-17
reviewNote: "2026-11-17: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-17
featured: false
---

Condensed notes for section **3.2.2 Programming concepts** of OxfordAQA International GCSE Computer Science
(9210). The full explanations and traced examples are in the
[programming concepts study guide](/resources/oxfordaqa-igcse-computer-science-9210-programming-concepts/).

## What the specification asks

- Use, understand and combine: **variable declaration, constant declaration, assignment, iteration, selection,
  subroutine (procedure/function)**.
- Know **why named constants and variables are used**.
- Use **definite** and **indefinite** iteration, with the condition at the **start** or the **end**.
- Use **nested selection** and **nested iteration**.
- Use **meaningful identifier names** (variables, constants, subroutines) and know why they matter.

## Combining principles

**Sequence** (one statement after another), **iteration/repetition** and **selection/choice** are basic to all
imperative languages. Every program is built from them.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-programming-concepts--01-three-combining-principles.webp" width="900" height="649" alt="Three small flowcharts: sequence runs statements one after another; selection tests a condition and runs block A if True or block B if False; iteration repeats a loop body while the answer to &quot;repeat?&quot; is yes. Below, the six statement types are grouped: declaration, constant and assignment store values; selection and iteration control flow; a subroutine call reuses named code." loading="lazy">
  <figcaption>Every program combines the six statement types using sequence, selection and iteration.</figcaption>
</figure>

## Statement types at a glance

| Type | Recognise it by | Example |
|---|---|---|
| Variable declaration | A name introduced to hold changing data | `int lives;` in C#, or first use in Python |
| Constant declaration | `CONSTANT` keyword; value fixed while running | `CONSTANT Rounds ← 10` |
| Assignment | `←` (value on the right stored on the left) | `lives ← lives - 1` |
| Iteration | `FOR`, `WHILE`, `REPEAT...UNTIL` | `WHILE lives > 0` |
| Selection | `IF ... THEN ... ELSE ... ENDIF` | `IF lives = 0 THEN` |
| Subroutine | A call by name | `DrawBoard()` |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-programming-concepts--02-assignment-right-to-left.webp" width="900" height="597" alt="In total ← total + price, the right-hand side total + price is worked out first using the current value of total, and the answer is then stored back in total on the left. Declaration gives a variable its name (and in C# or Visual Basic a type); assignment stores a value in it." loading="lazy">
  <figcaption>Work out the right-hand side first, then store the answer on the left.</figcaption>
</figure>

## Why constants and variables

- **Variables:** hold values that change while the program runs, referred to by a name.
- **Named constants:** change the value in **one place**; code is **easier to read** (`Rounds` not `10`); the
  value **cannot be changed by accident** while running.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-programming-concepts--03-named-constants.webp" width="900" height="698" alt="Left: the literal 0.2 appears in several calculations, so its meaning is unclear and every copy must be changed. Right: CONSTANT VatRate ← 0.2 is declared once and used as price * VatRate and in other calculations. Benefits: one change updates every use, the code explains itself, and the value cannot be changed accidentally while the program runs." loading="lazy">
  <figcaption>A named constant is declared once, explains itself and cannot change while the program runs.</figcaption>
</figure>

## Loops compared

| Loop | Kind | Condition checked | Minimum runs | Repeats while... |
|---|---|---|---|---|
| `FOR i ← 1 TO n` | Definite | Count fixed at the start | 0 if the start value is beyond the end value | counter has not passed `n` |
| `WHILE cond` | Indefinite | Start | 0 | `cond` is **true** |
| `REPEAT ... UNTIL cond` | Indefinite | End | 1 | `cond` is **false** (stops when it becomes true) |

**Converting between them:** `WHILE x < 5` and `UNTIL x ≥ 5` stop at the same point; the conditions are opposites.

**Choosing:**
- Known count → `FOR`.
- May need zero runs → `WHILE`.
- Must run once before testing (ask, then check) → `REPEAT...UNTIL`.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-programming-concepts--04-while-versus-repeat.webp" width="900" height="754" alt="Both programs start with n ← 10. The WHILE loop tests n &lt; 5 first, which is False, so the body never runs and 10 is output. The REPEAT loop runs the body once, making n 11, then tests n ≥ 5, which is True, so it stops and outputs 11." loading="lazy">
  <figcaption>A condition at the start allows zero runs; a condition at the end guarantees at least one.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-programming-concepts--05-choosing-a-loop.webp" width="900" height="520" alt="FOR is definite iteration, for when the count is known, such as processing 30 students. WHILE is indefinite with the test at the start, for when the loop might not need to run, such as reading while there is data. REPEAT … UNTIL tests at the end, for when the body must run once first, such as asking a question then checking the answer." loading="lazy">
  <figcaption>Known count: FOR. Might not run: WHILE. Must run once: REPEAT … UNTIL.</figcaption>
</figure>

## Nesting

- **Nested iteration:** the inner loop completes **all** its repetitions for **each** outer repetition. An outer
  loop of 4 and inner loop of 3 runs the inner body **12** times.
- **Nested selection:** the inner `IF` is tested **only** when the outer condition allows it.
- Where you put an initialisation matters: inside the outer loop it resets each time; outside it does not.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-programming-concepts--06-nested-loop-trace.webp" width="900" height="658" alt="Nested FOR loops with MaxRows set to 3. For row 1 the inner loop runs once, for row 2 twice and for row 3 three times, 6 times in all, outputting *, ** and ***. If line ← &quot;&quot; were moved above the outer loop, the line would never reset and the outputs would be *, *** and ******." loading="lazy">
  <figcaption>The inner loop finishes completely for each pass of the outer loop; reset the line inside the outer loop.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-programming-concepts--07-nested-selection.webp" width="900" height="687" alt="A decision flow: if age ≥ 18 is False, the output is &quot;Too young&quot;; if True, the inner test hasTicket decides between &quot;Enter&quot; and &quot;Buy a ticket&quot;. With age 20 and no ticket the output is &quot;Buy a ticket&quot;; with age 15 and a ticket it is &quot;Too young&quot;, because the inner IF is never reached." loading="lazy">
  <figcaption>The inner condition is only tested when the outer condition is True.</figcaption>
</figure>

## Meaningful identifiers

Good: `averageMark`, `MaxPlayers`, `PrintReceipt`. Poor: `x`, `n2`, `stuff`.
Why: easier to **read**, easier to **debug** (wrong logic stands out), easier to **maintain** by other
programmers.

## Key terms

| Term | Meaning |
|---|---|
| Variable | A named storage location whose value can change while the program runs |
| Constant | A named value that cannot change while the program runs |
| Declaration | Introducing a variable or constant's name (and often its type) before use |
| Assignment | Storing a value in a variable |
| Definite iteration | Repetition a known number of times |
| Indefinite iteration | Repetition until a condition is met; count not known in advance |
| Nesting | Placing one selection or iteration structure inside another |
| Identifier | The name of a variable, constant or subroutine |

## Exam traps

- **WHILE does not guarantee one run.** Only the condition-at-the-end loop does.
- **Same condition in WHILE and UNTIL** gives opposite behaviour. Flip the condition when converting.
- **Infinite loops:** a `WHILE` or `REPEAT` whose body never changes the condition variable never ends.
- **FOR for user-controlled repetition** ("until the user types STOP") is wrong; use indefinite iteration.
- **Constant explained as "a variable that stays the same"** misses that it **cannot** be changed.
- **Missing reasons:** "meaningful names are good practice" scores nothing on its own.
- **Counting nested repetitions:** multiply the counts when the inner loop's range is fixed; add them when it
  depends on the outer counter (1 + 2 + 3...).

## Self-test

1. Name the three combining principles of imperative programming.
2. State two reasons for using a named constant.
3. Explain the difference between declaring a variable and assigning to it.
4. State which loop always runs its body at least once.
5. Rewrite `WHILE count < 10` as the condition of a `REPEAT...UNTIL` loop that stops at the same point.
6. An outer `FOR` loop runs 5 times and contains an inner `FOR` loop that runs 4 times. How many times does the
inner body run?
7. `FOR i ← 1 TO 3` contains `FOR j ← 1 TO i`. How many times does the inner body run?
8. Give one situation where a `WHILE` loop is better than a `REPEAT...UNTIL` loop.
9. What is output by `x ← 3`, then `REPEAT x ← x * 2 UNTIL x > 20`, then `OUTPUT x`?
10. Explain why `FOR` is not suitable for "keep asking for a guess until it is correct".
11. Give two reasons for using meaningful identifier names.
12. In nested selection, when is the inner condition tested?

**Answers:**
1. Sequence, iteration (repetition) and selection (choice).
2. Any two: the value is changed in one place only; the code is easier to read; the value cannot be changed by
mistake while the program runs.
3. Declaring introduces the variable's name (and often its type); assigning stores a value in it.
4. `REPEAT...UNTIL` (condition at the end).
5. `UNTIL count ≥ 10`.
6. 20.
7. 6 (1 + 2 + 3).
8. When the body might not need to run at all, for example processing items while any remain, where there may be
none.
9. 24 (x becomes 6, 12, then 24, which is the first value greater than 20).
10. The number of guesses is not known in advance, so indefinite iteration is needed.
11. Any two: code is easier to read and understand; errors are easier to find; the program is easier for others
to maintain.
12. Only when the outer condition is true (or the branch containing it is taken).

## Related resources

- [Programming concepts study guide](/resources/oxfordaqa-igcse-computer-science-9210-programming-concepts/)
- [Programming concepts practice questions](/resources/oxfordaqa-igcse-computer-science-9210-programming-concepts-practice/)
- [Programming Fundamentals revision notes](/resources/oxfordaqa-igcse-computer-science-programming-revision-notes/)
