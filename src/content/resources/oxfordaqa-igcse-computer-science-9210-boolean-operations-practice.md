---
title: "OxfordAQA IGCSE Computer Science (9210): Boolean operations in a programming language -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 2 – Programming"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 2.05
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "boolean-operations-9210"
description: "Original OxfordAQA IGCSE Computer Science 9210 practice questions with answers on NOT, AND and OR in compound conditions for loops and selection."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-17
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Boolean operations study guide](/resources/oxfordaqa-igcse-computer-science-9210-boolean-operations/) | [Boolean operations revision notes](/resources/oxfordaqa-igcse-computer-science-9210-boolean-operations-revision-notes/)

These questions cover section 3.2.5 Boolean operations in a programming language of the OxfordAQA International
GCSE Computer Science (9210) specification.

---

## Section A

**1.** State the result of each expression when `p ← True` and `q ← False`:
**(a)** `p AND q` **(b)** `p OR q` **(c)** `NOT q` **(d)** `NOT (p OR q)`. **[4]**

**2.** Explain the difference between the Boolean operators AND and OR. **[2]**

**3.** Write a condition that is true when the variable `height` is between 100 and 200 inclusive. **[2]**

**4.** A student writes `IF day = "Sat" OR "Sun" THEN`. Write the corrected condition. **[1]**

**5.** State the result of `x > 5 AND x < 3` for any value of `x`, and explain why. **[2]**

## Section B

**6.** A theme park ride has these rules: riders must be at least 120 cm tall, and must either be at least 10 years
old or be accompanied by an adult.

**(a)** Write a single condition using `height`, `age` and `withAdult` (a Boolean) that is true when a person may
ride. **[3]**
**(b)** Complete the table to show whether each person may ride. **[4]**

| height | age | withAdult | May ride? |
|---|---|---|---|
| 125 | 9 | False | |
| 125 | 9 | True | |
| 118 | 12 | True | |
| 140 | 11 | False | |

**7.** Study this pseudocode:

```
attempts ← 0
correct ← False
WHILE attempts < 3 AND NOT correct
  guess ← USERINPUT
  IF guess = "lime" THEN
    correct ← True
  ENDIF
  attempts ← attempts + 1
ENDWHILE
```

**(a)** The user enters `"lemon"`, then `"lime"`. State the values of `attempts` and `correct` when the loop ends.
**[2]**
**(b)** State the largest number of guesses the user can make. **[1]**
**(c)** Explain what would happen if `AND` were replaced with `OR`. **[2]**

**8.** Evaluate each expression when `a ← True`, `b ← False`, `c ← True`, and state why the answers differ:
**(a)** `NOT a OR c` **(b)** `NOT (a OR c)`. **[3]**

**9.** Write pseudocode that inputs a temperature and outputs `"Alert"` if it is below 2 or above 35, and `"OK"`
otherwise. **[4]**

**10.** A programmer wants a loop that rejects any answer that is not `"A"`, `"B"` or `"C"`. They write:

```
REPEAT
  answer ← USERINPUT
UNTIL answer = "A" AND answer = "B" AND answer = "C"
```

**(a)** Explain why this loop never ends. **[2]**
**(b)** Write the corrected `UNTIL` condition. **[1]**

**11.** A login allows access if the username and password both match, unless the account is locked. Write a
condition using `userOK`, `passOK` and `locked` (all Boolean) that is true when access should be allowed. **[2]**

**12.** Explain why it is good practice to use brackets in the condition `a OR b AND c`. **[2]**

**13.** A heating system should switch on when the room temperature is below 18 and someone is at home, or at any
time when the frost alarm is active. Write a condition using `temp`, `atHome` and `frostAlarm` (both Boolean)
that is true when the heating should be on, and give one set of values for which it is true even though nobody is
at home. **[3]**

---

## Answers

**1.** (a) False [1] (b) True [1] (c) True [1] (d) False [1].

**2.** AND gives True only when both conditions are True [1]; OR gives True when at least one condition is True,
including when both are [1].

**3.** `height ≥ 100 AND height ≤ 200`: both comparisons correct [1]; joined with AND [1].

**4.** `IF day = "Sat" OR day = "Sun" THEN` [1].

**5.** Always False [1], because no number can be both greater than 5 and less than 3 at the same time [1].

**6.** **(a)** `height ≥ 120 AND (age ≥ 10 OR withAdult)`: height test [1]; age-or-adult part joined with OR [1];
brackets so that the height rule applies in every case [1].
**(b)** No [1]; Yes [1]; No [1]; Yes [1].

**7.** **(a)** `attempts` = 2 [1]; `correct` = True [1].
**(b)** 3 [1].
**(c)** The loop would continue while either part is True, so it would not stop after three wrong guesses
[1]; it would also keep asking after a correct guess while `attempts` is less than 3 [1].

**8.** (a) True [1] (`NOT a` is False; `False OR True` is True). (b) False [1] (`a OR c` is True, and `NOT True` is
False). They differ because `NOT` applies only to `a` in (a) but to the whole bracket in (b) [1].

**9.** One possible answer:

```
temp ← STRING_TO_REAL(USERINPUT)
IF temp < 2 OR temp > 35 THEN
  OUTPUT "Alert"
ELSE
  OUTPUT "OK"
ENDIF
```

Input [1]; both comparisons correct [1]; joined with OR [1]; correct outputs in each branch [1].

**10.** **(a)** A single value cannot equal "A", "B" and "C" at the same time [1], so the condition is always False
and `UNTIL` never stops the loop [1].
**(b)** `UNTIL answer = "A" OR answer = "B" OR answer = "C"` [1].

**11.** `userOK AND passOK AND NOT locked`: both matches required with AND [1]; `NOT locked` included with AND [1].

**12.** The result depends on whether `AND` or `OR` is evaluated first, and brackets make the intended order clear
[1]; for example, with `a` True and `c` False, `(a OR b) AND c` is False but `a OR (b AND c)` is True, so a
misread order changes the program's behaviour [1].


**13.** `(temp < 18 AND atHome) OR frostAlarm`: temperature and home tests joined with AND [1]; frost alarm joined
with OR outside the brackets [1]. Example: `frostAlarm` True with `atHome` False (any temperature) [1].
---

## Where marks are usually lost

- Leaving out the brackets in Question 6, so that a short person with an adult is allowed to ride.
- Writing `day = "Sat" OR "Sun"` style conditions.
- Using AND for "outside the range" in Question 9.
- Forgetting that a WHILE with AND stops when **either** part fails.
- Applying NOT to only the first variable when it was meant for the whole bracket.
