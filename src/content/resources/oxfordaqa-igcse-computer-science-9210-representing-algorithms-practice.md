---
title: "OxfordAQA IGCSE Computer Science (9210): Representing algorithms -- Practice Questions"
seoTitle: "OxfordAQA IGCSE CS 9210 Representing Algorithms Practice"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 1 – Algorithms"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 1.01
syllabusTopics:
  - qualification: "igcse"
    topic: "algorithms-9210"
  - qualification: "igcse"
    topic: "algorithms-9210"
    subtopic: "representing-algorithms-9210"
description: "Original OxfordAQA IGCSE Computer Science 9210 practice questions with answers on algorithms, decomposition, abstraction, pseudocode, trace tables and purpose."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs; examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Representing algorithms study guide](/resources/oxfordaqa-igcse-computer-science-9210-representing-algorithms/)

These questions cover section 3.1.1 Representing algorithms of the OxfordAQA International GCSE Computer Science
(9210) specification.

---

## Section A

**1.** Explain what is meant by an algorithm, and explain why a program is not the same thing as an algorithm. **[3]**

**2.** A teacher wants a system that records pupils' test marks and prints a report for each pupil.

**(a)** Describe how decomposition could be used to plan this system. **[2]**

**(b)** The system will not store the pupils' hobbies or their addresses. State the name of the process of leaving
out this detail, and explain why it is appropriate. **[2]**

**3.** State the name of the flowchart symbol used for each of these:

**(a)** a decision **[1]**

**(b)** an input or an output **[1]**

**(c)** the start of the flowchart **[1]**

**4.** Describe three stages of a systematic approach to solving a problem and creating an algorithm. **[3]**

## Section B

**5.** Study this algorithm. The array `x` holds the values `[3, 8, 5, 12, 7]`.

```
c ← 0
t ← 0
FOR i ← 0 TO 4
  IF x[i] > 6 THEN
    c ← c + 1
    t ← t + x[i]
  ENDIF
ENDFOR
OUTPUT t DIV c
```

**(a)** Complete the trace table for the algorithm. **[4]**

| i | x[i] | c | t |
|---|---|---|---|
| 0 | 3 | | |
| 1 | 8 | | |
| 2 | 5 | | |
| 3 | 12 | | |
| 4 | 7 | | |

**(b)** State the value that is output. **[1]**

**(c)** State the purpose of the algorithm. **[2]**

**6.** Here is an algorithm.

```
n ← STRING_TO_INT(USERINPUT)
total ← 0
FOR i ← 1 TO n
  m ← STRING_TO_INT(USERINPUT)
  total ← total + m
ENDFOR
OUTPUT "Total is " + INT_TO_STRING(total)
```

State where the inputs, the processing and the outputs take place in this algorithm. **[3]**

**7.** Trace this algorithm and state the output.

```
a ← 84
b ← 36
WHILE b ≠ 0
  r ← a MOD b
  a ← b
  b ← r
ENDWHILE
OUTPUT a
```

**(a)** Complete a trace table with the columns `a`, `b` and `r`, showing the starting values and each pass round the
loop. **[3]**

**(b)** State the value that is output and describe what the algorithm does. **[2]**

**8.** A programmer wants to know how many digits a whole number contains.

```
n ← 5036
c ← 0
WHILE n > 0
  n ← n DIV 10
  c ← c + 1
ENDWHILE
OUTPUT c
```

**(a)** State the values of `n` and `c` after each pass of the loop. **[2]**

**(b)** State the output. **[1]**

**(c)** Explain why the algorithm would output 0 if the starting value of `n` were 0, even though 0 has one
digit. **[2]**

**9.** The algorithm below should output the **largest** of a list of numbers held in the array `nums`, but it has a
fault.

```
largest ← 0
FOR i ← 0 TO LEN(nums) - 1
  IF nums[i] > largest THEN
    largest ← nums[i]
  ENDIF
ENDFOR
OUTPUT largest
```

**(a)** The array holds `[-4, -9, -2]`. State the output, and explain why it is wrong. **[2]**

**(b)** Describe how to correct the algorithm. **[1]**

**10.** Write pseudocode for an algorithm that repeatedly inputs whole numbers, stops when the user enters 0, and
then outputs the total of the numbers entered (not including the 0). **[4]**

**11.** The following algorithm is meant to repeat until a number is smaller than 5.

```
n ← 100
steps ← 0
REPEAT
  n ← n DIV 2
  steps ← steps + 1
UNTIL n < 5
OUTPUT steps
```

**(a)** Complete a trace table showing `n` and `steps` after each pass. **[3]**

**(b)** State the output. **[1]**

---

## Answers

**1.** An algorithm is a sequence of steps that can be followed to complete a task [1]. A program is an
implementation of an algorithm, written in a particular programming language [1]; an algorithm can be written in
other forms such as pseudocode or a flowchart and is not itself a program [1].

**2.** **(a)** Break the problem into sub-problems, each carrying out one identifiable task [1], for example one part
to input marks, one part to calculate a pupil's total or average, and one part to print the report [1].
**(b)** Abstraction [1]; it removes unnecessary detail, because hobbies and addresses are not needed to record
marks or print a report [1].

**3.** **(a)** Diamond [1]. **(b)** Parallelogram [1]. **(c)** Rounded rectangle (terminator) [1].

**4.** Any three from: understand the problem (inputs, outputs and rules) [1]; abstract, removing unnecessary
detail [1]; decompose into sub-problems [1]; design the algorithm using pseudocode or a flowchart [1]; trace or
test with sample data [1]; refine the algorithm if faults are found [1].

**5.** **(a)**

| i | x[i] | c | t |
|---|---|---|---|
| 0 | 3 | 0 | 0 |
| 1 | 8 | 1 | 8 |
| 2 | 5 | 1 | 8 |
| 3 | 12 | 2 | 20 |
| 4 | 7 | 3 | 27 |

One mark for each correct row pair: rows 0 and 1 correct [1]; row 2 correct [1]; row 3 correct [1]; row 4
correct [1].
**(b)** 9 [1] (27 DIV 3).
**(c)** It calculates the (whole-number) average [1] of the values in the array that are greater than 6 [1].

**6.** Inputs: the `USERINPUT` calls, which read `n` and then each `m` [1]. Processing: adding `m` to `total`, and the
`FOR` loop that repeats `n` times [1]. Output: the `OUTPUT` line that displays the total [1].

**7.** **(a)**

| Pass | a | b | r |
|---|---|---|---|
| start | 84 | 36 | |
| 1 | 36 | 12 | 12 |
| 2 | 12 | 0 | 0 |

Starting values [1]; pass 1 correct [1]; pass 2 correct [1].
**(b)** 12 [1]. It finds the highest common factor of 84 and 36 [1].

**8.** **(a)** After pass 1: `n` = 503 and `c` = 1; pass 2: 50 and 2; pass 3: 5 and 3; pass 4: 0 and 4 [1 for the
`n` values, 1 for the `c` values].
**(b)** 4 [1].
**(c)** The condition `n > 0` is False at the start, so the loop body never runs [1], so `c` keeps its starting value
of 0 [1].

**9.** **(a)** The output is 0 [1], because all of the numbers are below the starting value of `largest`, so the
condition is never True and 0 is not in the list [1].
**(b)** Start `largest` with the first element, `largest ← nums[0]`, instead of 0 [1].

**10.** One possible answer:

```
total ← 0
n ← STRING_TO_INT(USERINPUT)
WHILE n ≠ 0
  total ← total + n
  n ← STRING_TO_INT(USERINPUT)
ENDWHILE
OUTPUT total
```

`total` set to 0 before the loop [1]; first input before the loop [1]; loop with the correct condition and the
total updated and the next input inside it [1]; output after the loop [1]. Other clear and unambiguous forms are
accepted.

**11.** **(a)**

| Pass | n | steps |
|---|---|---|
| start | 100 | 0 |
| 1 | 50 | 1 |
| 2 | 25 | 2 |
| 3 | 12 | 3 |
| 4 | 6 | 4 |
| 5 | 3 | 5 |

Starting values and first two passes correct [1]; passes 3 and 4 correct [1]; pass 5 correct [1].
**(b)** 5 [1].

---

## Where marks are usually lost

- Defining an algorithm as "a program" or "code".
- Saying abstraction is "making it simpler" without mentioning that unnecessary detail is removed.
- Stating the output when asked for the purpose of an algorithm in Question 5 or Question 7.
- Starting a "largest value" variable at 0, as in Question 9.
- Forgetting the starting row in a trace table, or updating every variable in every row.
