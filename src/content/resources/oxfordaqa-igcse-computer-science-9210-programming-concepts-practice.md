---
title: "OxfordAQA IGCSE Computer Science (9210): Programming concepts -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original OxfordAQA IGCSE Computer Science 9210 practice questions with answers on statement types, constants, loops, nesting and identifier names."
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

Related: [Programming concepts study guide](/resources/oxfordaqa-igcse-computer-science-9210-programming-concepts/) | [Programming concepts revision notes](/resources/oxfordaqa-igcse-computer-science-9210-programming-concepts-revision-notes/)

These questions cover section 3.2.2 Programming concepts of the OxfordAQA International GCSE Computer Science
(9210) specification. You may answer coding questions in pseudocode or in any suitable programming language.

---

## Section A

**1.** Name the type of statement in each line:
**(a)** `CONSTANT MaxLives ← 3` **(b)** `lives ← lives - 1` **(c)** `IF lives = 0 THEN`. **[3]**

**2.** State the difference between definite and indefinite iteration. **[2]**

**3.** State which type of loop always executes its body at least once, and explain why. **[2]**

**4.** Give **two** reasons why a programmer would use a named constant for the number of questions in a quiz
rather than writing the number each time it is needed. **[2]**

**5.** An outer loop runs 6 times. Inside it is an inner loop that runs 5 times on every pass of the outer loop.
State how many times the body of the inner loop is executed. **[1]**

## Section B

**6.** Study this pseudocode:

```
total ← 0
n ← 1
WHILE total < 15
  total ← total + n
  n ← n + 2
ENDWHILE
OUTPUT total
OUTPUT n
```

**(a)** Complete a trace table with columns `total` and `n`, showing every value taken. **[3]**
**(b)** State the two values output. **[2]**

**7.** These two code segments are intended to do the same thing:

```
Segment A                    Segment B
x ← 50                       x ← 50
WHILE x < 40                 REPEAT
  x ← x + 5                    x ← x + 5
ENDWHILE                     UNTIL x ≥ 40
OUTPUT x                     OUTPUT x
```

**(a)** State the output of each segment. **[2]**
**(b)** Explain why the outputs are different. **[2]**

**8.** Write a program that asks the user to enter a whole number, and keeps asking until the number entered is
greater than 0. It should then output the number. Use an indefinite loop with the condition at the end. **[4]**

**9.** Study this pseudocode:

```
FOR i ← 1 TO 4
  FOR j ← 1 TO i
    OUTPUT i * j
  ENDFOR
ENDFOR
```

**(a)** State how many values are output in total. **[1]**
**(b)** State the values output when `i` is 3. **[1]**
**(c)** State the last value output. **[1]**

**10.** A cinema charges different prices. A customer under 12 pays 4.00. A customer aged 12 or over pays 7.50,
but if they are also a member they pay 6.00. Write pseudocode using **nested selection** that sets `price`
correctly from the variables `age` and `isMember`. **[4]**

**11.** A student writes this code:

```
a ← 0
FOR b ← 1 TO 10
  c ← USERINPUT
  a ← a + c
ENDFOR
d ← a / 10
```

**(a)** Suggest meaningful identifier names for `a`, `c` and `d`. **[3]**
**(b)** Explain **two** benefits of using meaningful identifier names. **[2]**
**(c)** Explain how a named constant could improve this code. **[2]**

**12.** A program must repeatedly read temperatures from a sensor while the machine is switched on. The machine
may already be switched off when the program starts. State, with a reason, which type of loop is most suitable.
**[2]**

---

## Answers

**1.** (a) Constant declaration [1] (b) Assignment [1] (c) Selection [1].

**2.** Definite iteration repeats a number of times known before the loop starts [1]; indefinite iteration
repeats until a condition is met, so the number of repetitions is not known in advance [1].

**3.** `REPEAT...UNTIL` (indefinite iteration with the condition at the end) [1], because the condition is only
tested after the body has run [1].

**4.** Any two: if the number of questions changes it only needs editing in one place [1]; the code is easier to
read because the name explains what the number means [1]; the value cannot be changed by mistake while the
program runs. (Maximum 2.)

**5.** 30 [1].

**6.** **(a)**

| total | n |
|---|---|
| 0 | 1 |
| 1 | 3 |
| 4 | 5 |
| 9 | 7 |
| 16 | 9 |

Initial values 0 and 1 [1]; correct values of `total` 1, 4, 9, 16 [1]; correct values of `n` 3, 5, 7, 9 [1].
**(b)** 16 [1] and 9 [1].

**7.** **(a)** Segment A outputs 50 [1]; Segment B outputs 55 [1].
**(b)** In Segment A the condition is checked at the start and `x < 40` is already false, so the body never runs
[1]. In Segment B the condition is checked at the end, so the body runs once, adding 5, before the test [1].

**8.** One possible answer:

```
REPEAT
  OUTPUT "Enter a whole number greater than 0"
  number ← STRING_TO_INT(USERINPUT)
UNTIL number > 0
OUTPUT number
```

`REPEAT...UNTIL` structure [1]; input inside the loop [1]; correct condition `number > 0` at the end [1]; output
after the loop [1]. (Converting the input is good practice but not required for the marks.)

**9.** **(a)** 10 [1] (1 + 2 + 3 + 4).
**(b)** 3, 6, 9 [1].
**(c)** 16 [1].

**10.** One possible answer:

```
IF age < 12 THEN
  price ← 4.00
ELSE
  IF isMember THEN
    price ← 6.00
  ELSE
    price ← 7.50
  ENDIF
ENDIF
```

Outer test on age [1]; under-12 price set [1]; inner `IF` on membership inside the 12-or-over branch [1]; both
member and non-member prices correct [1].

**11.** **(a)** For example: `a` → `total` [1]; `c` → `mark` (or another name describing the input) [1]; `d` →
`average` [1].
**(b)** Any two: the code is easier for others (and the author) to read and understand [1]; logic errors are
easier to spot because the purpose of each variable is clear [1]; the program is easier to maintain or change.
**(c)** Declare a constant such as `CONSTANT NumMarks ← 10` and use it in both the loop and the division [1], so
the number of marks only has to be changed in one place and the two uses cannot become inconsistent [1].

**12.** A `WHILE` loop (condition at the start) [1], because if the machine is already off the body should run
zero times, and a `WHILE` loop tests the condition before running the body [1].

---

## Where marks are usually lost

- Tracing a `WHILE` loop one pass too few or too many: check the condition before every pass.
- Saying both loops in Question 7 output the same value.
- Writing a `FOR` loop where the question asks for an indefinite loop.
- Putting the membership test outside the over-12 branch in Question 10, which gives members under 12 the wrong
price.
- Explaining constants without saying the value is changed in **one place**.
