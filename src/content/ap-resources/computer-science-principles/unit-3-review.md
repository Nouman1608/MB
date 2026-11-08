---
resourceId: "mb-ap-csp-u3-review"
title: "Algorithms and Programming: Mixed Unit Review (Computer Science Principles Unit 3)"
description: "Big ideas, a method table and seven original exam-style questions that each combine two or more Unit 3 topics, with worked solutions and suggested rubrics."
course: "computer-science-principles"
unit: 3
topics: []
resourceType: "unit-review"
prerequisites:
  - "You have studied Topics 3.1 to 3.18"
  - "You have tried the Unit 3 diagnostic and closed any gaps it showed"
prerequisiteResources: ["mb-ap-csp-u3-diagnostic"]
learningObjectives:
  - "Connect the ideas of Unit 3: data, control flow, lists, procedures, libraries, randomness, simulation, efficiency and undecidability"
  - "Choose the right tool (loop, conditional, procedure, search) for a task and justify it"
  - "Answer multi-part questions that combine tracing, writing code and explaining"
  - "Write explanations of abstraction, bias and efficiency using specific details from a scenario"
skills: ["1", "2", "3", "4"]
studyMinutes: 75
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-u3-diagnostic", "mb-ap-csp-3.1-checklist", "mb-ap-csp-3.2-checklist", "mb-ap-csp-3.3-checklist", "mb-ap-csp-3.4-checklist", "mb-ap-csp-3.5-checklist", "mb-ap-csp-3.6-checklist", "mb-ap-csp-3.7-checklist", "mb-ap-csp-3.8-checklist", "mb-ap-csp-3.9-checklist", "mb-ap-csp-3.10-checklist", "mb-ap-csp-3.11-checklist", "mb-ap-csp-3.12-checklist", "mb-ap-csp-3.13-checklist", "mb-ap-csp-3.14-checklist", "mb-ap-csp-3.15-checklist", "mb-ap-csp-3.16-checklist", "mb-ap-csp-3.17-checklist", "mb-ap-csp-3.18-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "Every Unit 3 program is built from sequencing, selection and iteration, using variables, lists and procedures to manage complexity."
  - "Trace with a table, using current values, and test boundary and equal cases."
  - "Binary search needs sorted data and halves the work each check; nested loops multiply the work."
  - "Simulations and random values model variability but can carry bias from what is left out."
  - "Some problems take unreasonable time; undecidable problems have no algorithm that works for every input."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Read the big ideas and the method table, then try the seven questions without notes. Each question combines two or more Unit 3 topics. Check your answer against the worked solution before moving on.

These are **original Marlbridge practice questions**, not past exam questions, with fictional scenarios. The code is Marlbridge's rendering of the exam reference notation (`←` assignment, `=` equality test, lists start at index 1, `DISPLAY` shows a value and a space). The rubrics are a **suggested Marlbridge rubric**, not official scoring. No calculator is needed or allowed.

## Big ideas of the unit

- **Programs store and update data.** Variables hold one value at a time, assignment copies, and lists give a collection of data one name ([3.1](/advanced-course-resources/computer-science-principles/3-1-variables-assignments-study-guide/), [3.2](/advanced-course-resources/computer-science-principles/3-2-data-abstraction-study-guide/), [3.10](/advanced-course-resources/computer-science-principles/3-10-lists-study-guide/)).
- **Expressions compute; Boolean expressions decide.** Arithmetic follows precedence (MOD shares it with `*` and `/`); comparisons and AND/OR/NOT give `true` or `false` ([3.3](/advanced-course-resources/computer-science-principles/3-3-mathematical-expressions-study-guide/), [3.4](/advanced-course-resources/computer-science-principles/3-4-strings-study-guide/), [3.5](/advanced-course-resources/computer-science-principles/3-5-boolean-expressions-study-guide/)).
- **Control flow is built from sequencing, selection and iteration.** Conditionals choose, nested conditionals ask follow-up questions, loops repeat ([3.6](/advanced-course-resources/computer-science-principles/3-6-conditionals-study-guide/), [3.7](/advanced-course-resources/computer-science-principles/3-7-nested-conditionals-study-guide/), [3.8](/advanced-course-resources/computer-science-principles/3-8-iteration-study-guide/)).
- **Algorithms can be compared.** Correct algorithms can differ in clarity and efficiency; test ties and boundaries ([3.9](/advanced-course-resources/computer-science-principles/3-9-developing-algorithms-study-guide/), [3.11](/advanced-course-resources/computer-science-principles/3-11-binary-search-study-guide/), [3.17](/advanced-course-resources/computer-science-principles/3-17-algorithmic-efficiency-study-guide/)).
- **Abstraction manages complexity.** Lists, procedures and libraries hide detail so programs are shorter, reusable and easier to change ([3.2](/advanced-course-resources/computer-science-principles/3-2-data-abstraction-study-guide/), [3.12](/advanced-course-resources/computer-science-principles/3-12-calling-procedures-study-guide/), [3.13](/advanced-course-resources/computer-science-principles/3-13-developing-procedures-study-guide/), [3.14](/advanced-course-resources/computer-science-principles/3-14-libraries-study-guide/)).
- **Randomness and simulation model the real world.** Random values give variability; simulations simplify and can carry bias ([3.15](/advanced-course-resources/computer-science-principles/3-15-random-values-study-guide/), [3.16](/advanced-course-resources/computer-science-principles/3-16-simulations-study-guide/)).
- **Some limits are fundamental.** Some problems take unreasonable time; some are undecidable ([3.17](/advanced-course-resources/computer-science-principles/3-17-algorithmic-efficiency-study-guide/), [3.18](/advanced-course-resources/computer-science-principles/3-18-undecidable-problems-study-guide/)).

## Method table

| If the question says... | Do this |
|---|---|
| "What is displayed?" or "What is the value of ...?" | Build a trace table; evaluate each right-hand side with the **current** values; follow procedure calls inward and back out |
| "Which condition ..." | Write the condition for each option and test the **boundary** values and the equal case |
| A loop or REPEAT UNTIL | Check the stopping condition before each pass, count passes, and ask whether it can ever become true |
| A list operation | Redraw the list with indices (from 1) after every INSERT, APPEND or REMOVE |
| "Explain how ... manages complexity" | Name it, say what it does, mention its parameter or loop, then say what would be worse without it |
| "Greatest number of checks" (binary search) | Double 1, 2, 4, 8, ... until you pass the list size |
| "Possible results" of a RANDOM expression | List every value RANDOM can return, apply the expression, collect the set |
| "Which algorithm / is it equivalent?" | Test equal values and boundaries; one counter-example proves they differ |
| Simulation scenario | State what is included, what is left out, and the direction of any bias |
| Problem classification | Is an algorithm possible for every input? If yes, is it reasonable (polynomial) or unreasonable (exponential, factorial)? |

## Question 1 (constructed response · core)

A procedure `aboveAverage(aList)` must return how many elements of a list of numbers are strictly greater than the average of the list. ([3.1](/advanced-course-resources/computer-science-principles/3-1-variables-assignments-study-guide/), [3.6](/advanced-course-resources/computer-science-principles/3-6-conditionals-study-guide/), [3.8](/advanced-course-resources/computer-science-principles/3-8-iteration-study-guide/), [3.10](/advanced-course-resources/computer-science-principles/3-10-lists-study-guide/)) (a) Write the procedure. (b) Trace it for `[20, 25, 31, 22, 30, 28]`, giving the average and the value returned. (c) State what it returns for `[4, 4, 4]` and why. (d) Explain what goes wrong for an empty list and how to guard against it.

<details>
<summary>Answer and explanation</summary>

(a)

```text
PROCEDURE aboveAverage(aList)
{
  total ← 0
  FOR EACH item IN aList
  {
    total ← total + item
  }
  average ← total / LENGTH(aList)
  count ← 0
  FOR EACH item IN aList
  {
    IF(item > average)
    {
      count ← count + 1
    }
  }
  RETURN(count)
}
```

(b) The total is 20 + 25 + 31 + 22 + 30 + 28 = 156 and `LENGTH(aList)` is 6, so the average is 156 / 6 = 26. Elements greater than 26: 31, 30 and 28. The procedure returns **3**.

(c) The average is 4 and no element is **greater than** 4, so it returns 0. Using `>` (not `≥`) counts only elements strictly above the average.

(d) For `[]`, `LENGTH(aList)` is 0 so the division `total / LENGTH(aList)` divides by zero, which is undefined and would cause an error. Guard with `IF(LENGTH(aList) > 0)` before dividing, and return 0 (or another agreed value) otherwise.

**Suggested Marlbridge rubric (7 marks)**

| Mark point | Marks |
|---|---|
| (a) Accumulates a total with FOR EACH over every element | 1 |
| (a) Computes the average as total divided by LENGTH, after the loop | 1 |
| (a) Second traversal counts elements with `item > average` and returns the count | 1 |
| (b) Average 26 and return value 3 | 1 |
| (c) Returns 0 and explains strictly greater | 1 |
| (d) Identifies division by zero for an empty list | 1 |
| (d) Suggests a guard such as IF(LENGTH(aList) > 0) | 1 |

</details>

## Question 2 (constructed response · core)

The procedure `digitSum(n)` adds the digits of a whole number n. ([3.3](/advanced-course-resources/computer-science-principles/3-3-mathematical-expressions-study-guide/), [3.8](/advanced-course-resources/computer-science-principles/3-8-iteration-study-guide/), [3.9](/advanced-course-resources/computer-science-principles/3-9-developing-algorithms-study-guide/), [3.12](/advanced-course-resources/computer-science-principles/3-12-calling-procedures-study-guide/)) (a) Trace `digitSum(4826)` in a table. (b) State what `digitSum(0)` returns and why. (c) A number is divisible by 3 exactly when its digit sum is divisible by 3. Write a procedure `divisibleBy3(n)` that uses `digitSum`. (d) Explain why it is a good idea to reuse `digitSum` here.

<details>
<summary>Answer and explanation</summary>

```text
PROCEDURE digitSum(n)
{
  total ← 0
  REPEAT UNTIL(n = 0)
  {
    total ← total + n MOD 10
    n ← (n - n MOD 10) / 10
  }
  RETURN(total)
}
```

(a)

| Pass | `n` at start | `n MOD 10` | `total` after | `n` after |
|---|---|---|---|---|
| 1 | 4826 | 6 | 6 | 482 |
| 2 | 482 | 2 | 8 | 48 |
| 3 | 48 | 8 | 16 | 4 |
| 4 | 4 | 4 | 20 | 0 |

The loop stops when `n` is 0, so `digitSum(4826)` returns **20**.

(b) `n` is already 0, so the `REPEAT UNTIL(n = 0)` loop runs zero times and the procedure returns the starting `total`, **0**.

(c)

```text
PROCEDURE divisibleBy3(n)
{
  RETURN(digitSum(n) MOD 3 = 0)
}
```

For example `divisibleBy3(4827)` is true (digit sum 21) and `divisibleBy3(4826)` is false (digit sum 20). (We checked that this agrees with `n MOD 3 = 0` for every whole number from 0 to 2,000.)

(d) The digit-adding code is already written and tested, so reusing it reduces development time and testing, keeps `divisibleBy3` short and readable, and means a correction to `digitSum` improves both.

**Suggested Marlbridge rubric (7 marks)**

| Mark point | Marks |
|---|---|
| (a) Correct trace values for all four passes | 1 |
| (a) Result 20 | 1 |
| (b) Returns 0, with the zero-pass reason | 1 |
| (c) Procedure returns `digitSum(n) MOD 3 = 0` (or an equivalent IF) | 1 |
| (c) Correct outputs for 4827 (true) and 4826 (false) | 1 |
| (d) Reuse reduces development time or testing | 1 |
| (d) A second benefit (readability, one place to fix) | 1 |

</details>

## Question 3 (constructed response · core)

A museum charges 5 for under-13s, 8 for members aged 13 or over, and 10 for non-members aged 13 or over. Three programmers write `price1`, `price2` and `price3`. ([3.5](/advanced-course-resources/computer-science-principles/3-5-boolean-expressions-study-guide/), [3.6](/advanced-course-resources/computer-science-principles/3-6-conditionals-study-guide/), [3.7](/advanced-course-resources/computer-science-principles/3-7-nested-conditionals-study-guide/), [3.9](/advanced-course-resources/computer-science-principles/3-9-developing-algorithms-study-guide/)) (a) Complete a table of what each returns for the four inputs (9, true), (9, false), (30, true), (30, false). (b) State which procedures match the requirement and which does not, with the input that shows it. (c) Explain why `price2` has the same behaviour as `price1` although it has no ELSE.

<details>
<summary>Answer and explanation</summary>

```text
PROCEDURE price1(age, isMember)
{
  IF(age < 13)
  {
    RETURN(5)
  }
  ELSE
  {
    IF(isMember)
    {
      RETURN(8)
    }
    ELSE
    {
      RETURN(10)
    }
  }
}

PROCEDURE price2(age, isMember)
{
  IF(age < 13)
  {
    RETURN(5)
  }
  IF(isMember)
  {
    RETURN(8)
  }
  RETURN(10)
}

PROCEDURE price3(age, isMember)
{
  IF(isMember)
  {
    RETURN(8)
  }
  IF(age < 13)
  {
    RETURN(5)
  }
  RETURN(10)
}
```

(a)

| (age, isMember) | `price1` | `price2` | `price3` |
|---|---|---|---|
| (9, true) | 5 | 5 | **8** |
| (9, false) | 5 | 5 | 5 |
| (30, true) | 8 | 8 | 8 |
| (30, false) | 10 | 10 | 10 |

(b) `price1` and `price2` match the requirement. `price3` does not: for a 9-year-old member it returns 8, but under-13s should pay 5. It tests membership before age.

(c) In `price2` the first `RETURN` leaves the procedure immediately, so the later tests are only reached when `age < 13` was false. That is exactly what the ELSE of `price1` achieved, so the two procedures give the same result for every input (we confirmed this for ages 0 to 39 with both membership values).

**Suggested Marlbridge rubric (6 marks)**

| Mark point | Marks |
|---|---|
| (a) `price1` and `price2` columns correct | 1 |
| (a) `price3` column correct (8 for a member aged 9) | 1 |
| (b) Identifies `price3` as incorrect with the differing input | 1 |
| (b) Identifies `price1` and `price2` as correct | 1 |
| (c) Explains that RETURN ends the procedure so later tests run only when the earlier one failed | 1 |
| (c) Concludes equivalent behaviour for every input | 1 |

</details>

## Question 4 (constructed response · core)

A sorted list `ids` of 1,000 customer numbers is searched many times a day. ([3.10](/advanced-course-resources/computer-science-principles/3-10-lists-study-guide/), [3.11](/advanced-course-resources/computer-science-principles/3-11-binary-search-study-guide/), [3.17](/advanced-course-resources/computer-science-principles/3-17-algorithmic-efficiency-study-guide/)) (a) State the greatest number of elements a linear search and a binary search need to check. (b) Trace a binary search for 17 in `[2, 5, 8, 11, 14, 17, 20]`, showing each comparison. (c) The company expects 2,000 customers next year. What is the new greatest number of checks for binary search? (d) A second list is not sorted. State which search must be used and explain why.

<details>
<summary>Answer and explanation</summary>

(a) Linear search: up to **1,000** elements. Binary search: halving 1,000 repeatedly gives 500, 250, 125, 62, 31, 15, 7, 3, 1, nine halvings plus the final check, so up to **10** (2<sup>10</sup> = 1,024 is the first power of two above 1,000).

(b)

| Check | Live positions | Middle | Value | Result |
|---|---|---|---|---|
| 1 | 1–7 | 4 | 11 | 11 < 17, keep positions 5–7 |
| 2 | 5–7 | 6 | 17 | found |

Two checks.

(c) 2,000 items: the first power of two above 2,000 is 2,048 = 2<sup>11</sup>, so **11** checks, only one more than before.

(d) Linear search. Binary search needs the data to be sorted: it discards half the list after each comparison, which is valid only if the order guarantees the target is not in the discarded half. In an unsorted list the target could be discarded.

**Suggested Marlbridge rubric (7 marks)**

| Mark point | Marks |
|---|---|
| (a) 1,000 for linear | 1 |
| (a) 10 for binary with the halving or power-of-two reasoning | 1 |
| (b) Middle position 4, value 11, correct half kept | 1 |
| (b) Second check finds 17 at position 6 | 1 |
| (c) 11 checks | 1 |
| (d) Linear search | 1 |
| (d) Binary search requires sorted data, with the reason | 1 |

</details>

## Question 5 (constructed response · core)

A library `TextKit` is documented as follows: `toUpper(text)` returns the text with every letter in capitals. A student writes the procedure below. ([3.4](/advanced-course-resources/computer-science-principles/3-4-strings-study-guide/), [3.12](/advanced-course-resources/computer-science-principles/3-12-calling-procedures-study-guide/), [3.13](/advanced-course-resources/computer-science-principles/3-13-developing-procedures-study-guide/), [3.14](/advanced-course-resources/computer-science-principles/3-14-libraries-study-guide/)) (a) State what `DISPLAY(banner("go"))` displays. (b) Identify the parameter, the argument and the value returned in this call. (c) Explain how using the library and the procedure together manages complexity. (d) The student later rewrites the inside of `banner` to build the capitals differently but with the same results. Must the callers be told?

<details>
<summary>Answer and explanation</summary>

```text
PROCEDURE banner(word)
{
  RETURN(concat(toUpper(word), "!"))
}
```

(a) `toUpper("go")` returns `"GO"`, then `concat("GO", "!")` is `"GO!"`, so `GO!` is displayed.

(b) The parameter is `word`; the argument is `"go"`; the value returned is `"GO!"`.

(c) The library supplies a tested capitalising procedure, so the student does not have to write or test it, and the API documentation says what it does without showing how. `banner` wraps the steps under one name with a parameter, so any word can be turned into a shout with a single call, and the details are hidden from the callers. Together they reduce development time and keep the program short and readable.

(d) No. Callers depend on what `banner` does (returns the word in capitals followed by an exclamation mark), not how. Because that is unchanged, the internals can change without notifying users.

**Suggested Marlbridge rubric (5 marks)**

| Mark point | Marks |
|---|---|
| (a) GO! | 1 |
| (b) Parameter `word`, argument "go", returned "GO!" | 1 |
| (c) Library benefit: ready-made, documented procedure, saves development time or testing | 1 |
| (c) Procedural abstraction benefit: named, reusable, parameter allows any word | 1 |
| (d) No, with the reason that what it does is unchanged | 1 |

</details>

## Question 6 (constructed response · core)

In a dice game a player rolls two fair six-sided dice and wins a round if the total is at least 10. A programmer simulates five rounds with the code below. ([3.8](/advanced-course-resources/computer-science-principles/3-8-iteration-study-guide/), [3.15](/advanced-course-resources/computer-science-principles/3-15-random-values-study-guide/), [3.16](/advanced-course-resources/computer-science-principles/3-16-simulations-study-guide/)) (a) The ten `RANDOM(1, 6)` calls return 6, 5, 2, 3, 4, 6, 1, 1, 5, 5 in order. State what is displayed. (b) What is the probability of winning one round? (c) Explain why a different run might display a different number, and why one run cannot show whether the game is fair. (d) Name one simplification in the simulation that could introduce bias.

<details>
<summary>Answer and explanation</summary>

```text
wins ← 0
REPEAT 5 TIMES
{
  total ← RANDOM(1, 6) + RANDOM(1, 6)
  IF(total ≥ 10)
  {
    wins ← wins + 1
  }
}
DISPLAY(wins)
```

(a) The totals are 6 + 5 = 11 (win), 2 + 3 = 5, 4 + 6 = 10 (win), 1 + 1 = 2, 5 + 5 = 10 (win). Three totals are at least 10, so `3` is displayed.

(b) There are 36 equally likely pairs and six of them total at least 10: (4,6), (5,5), (6,4), (5,6), (6,5), (6,6). So the probability is 6/36 = 1/6 (about 17%).

(c) Each `RANDOM` call is random, so every run uses a new set of values and the count of wins can differ. One run is a single possible outcome; many runs (or counting the possible pairs, as in part (b)) are needed to judge the game.

(d) The simulation assumes the dice are fair (each face equally likely). Real dice may be slightly weighted, and the model also ignores things such as dice landing off the table. If the assumption is wrong, the results are biased.

**Suggested Marlbridge rubric (7 marks)**

| Mark point | Marks |
|---|---|
| (a) Correct totals and 3 wins | 1 |
| (a) Display of 3 | 1 |
| (b) 6 of 36 pairs listed or counted | 1 |
| (b) Probability 1/6 | 1 |
| (c) Random values differ between runs | 1 |
| (c) One run is one outcome so cannot show fairness | 1 |
| (d) Names a valid simplification and links it to bias | 1 |

</details>

## Question 7 (constructed response · core)

A delivery company wants software for three tasks. Task 1: decide whether any route exists between two depots on a given map. Task 2: find the shortest route that visits 50 depots, trying every possible order. Task 3: check any third-party script and report whether it will ever finish. ([3.17](/advanced-course-resources/computer-science-principles/3-17-algorithmic-efficiency-study-guide/), [3.18](/advanced-course-resources/computer-science-principles/3-18-undecidable-problems-study-guide/)) (a) Classify each task as decidable and solvable in reasonable time, decidable but not in reasonable time, or undecidable, with a reason. (b) For Task 2, suggest a practical approach and say what it cannot guarantee. (c) Explain the difference between your answers for Tasks 2 and 3.

<details>
<summary>Answer and explanation</summary>

(a) **Task 1:** decidable and solvable in reasonable time. Exploring the map from one depot (an algorithm exists) takes a number of steps that grows slowly with the size of the map, and it gives the correct answer for every map.

**Task 2:** decidable but not in reasonable time. Trying every order is an algorithm that always gives the best route, but 49! orders is far too many for a computer to check.

**Task 3:** undecidable. It is the halting problem: no algorithm can correctly decide, for every script and input, whether it will ever finish.

(b) Use a heuristic, such as always travelling to the nearest unvisited depot. It finds a good route quickly but is **not guaranteed to be the shortest**.

(c) For Task 2 an algorithm exists that always works; it just takes an unreasonable amount of time, so a faster method or approximation helps. For Task 3 no algorithm exists that is always correct, so no amount of time or speed would solve the general problem (though some scripts can be checked individually).

**Suggested Marlbridge rubric (6 marks)**

| Mark point | Marks |
|---|---|
| Task 1 classified as decidable and reasonable, with a reason | 1 |
| Task 2 classified as decidable but unreasonable time, with a reason | 1 |
| Task 3 classified as undecidable (halting problem) | 1 |
| (b) Proposes a heuristic and says it does not guarantee the best route | 1 |
| (c) Existence of an algorithm that is too slow versus no algorithm | 1 |
| (c) Notes a faster computer does not fix Task 3 | 1 |

</details>

## Where to go next

Mark each question out of its rubric total and note where marks were lost: a trace slip, a boundary, a missing reason, or an idea you could not recall. Go back to the matching study guide for any idea you missed, then retry the topic practice questions. When the guides feel secure, use the topic checklists to confirm that every "I can" line is true without notes. The diagnostic is here: [Unit 3 diagnostic](/advanced-course-resources/computer-science-principles/unit-3-diagnostic/).
