---
title: "OxfordAQA IGCSE Computer Science (9210): Random number generation in a programming language -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 2 – Programming"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 2.09
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "random-number-generation-9210"
description: "Original OxfordAQA IGCSE Computer Science 9210 practice questions with answers on random number ranges, chances, simulations and debugging random code."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-17
reviewNote: "2026-11-17: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-17
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Random number generation study guide](/resources/oxfordaqa-igcse-computer-science-9210-random-number-generation/) | [Random number generation revision notes](/resources/oxfordaqa-igcse-computer-science-9210-random-number-generation-revision-notes/)

These questions cover section 3.2.9 Random number generation in a programming language of the OxfordAQA
International GCSE Computer Science (9210) specification. `RANDOM_INT(low, high)` returns a random integer from
`low` to `high` inclusive.

---

## Section A

**1.** State every value that `RANDOM_INT(0, 3)` can return. **[1]**

**2.** Write a call that returns a random integer from 1 to 100. **[1]**

**3.** An array `colours` holds 8 strings. Write a statement that sets `pick` to a randomly chosen element of the
array. **[2]**

**4.** A program uses random numbers. Explain why running it twice with the same input may give different
outputs. **[1]**

**5.** State whether the specification requires you to explain how pseudo-random numbers are generated. **[1]**

## Section B

**6.** Write pseudocode that simulates tossing a coin 100 times and outputs the number of heads and the number of
tails. **[5]**

**7.** A student writes this guessing game:

```
REPEAT
  target ← RANDOM_INT(1, 20)
  guess ← STRING_TO_INT(USERINPUT)
UNTIL guess = target
OUTPUT "Well done"
```

**(a)** Explain the logic error. **[2]**
**(b)** Describe how to correct it. **[1]**

**8.** A program should choose a prize: a pen with a 1 in 3 chance, a badge with a 1 in 3 chance, and a sticker
otherwise.

```
IF RANDOM_INT(1, 3) = 1 THEN
  prize ← "Pen"
ELSE IF RANDOM_INT(1, 3) = 2 THEN
  prize ← "Badge"
ELSE
  prize ← "Sticker"
ENDIF
```

**(a)** Explain why the chances are not what the programmer intended. **[2]**
**(b)** Write a corrected version. **[2]**

**9.** Write pseudocode that creates and outputs a six-character code made of random capital letters. In ASCII,
`"A"` is 65 and `"Z"` is 90. **[4]**

**10.** In a board game, a player rolls a dice until they get a 6, and the program counts the rolls.

```
rolls ← 0
REPEAT
  d ← RANDOM_INT(1, 6)
  rolls ← rolls + 1
UNTIL d = 6
OUTPUT rolls
```

**(a)** The random values produced are 4, 2, 2, 6. State the output. **[1]**
**(b)** State the smallest possible output, and explain why a `REPEAT...UNTIL` loop is suitable here. **[2]**

**11.** A quiz stores 10 questions in the array `questions` and the matching answers in the array `answers`, so
the answer to the question at index `i` is at index `i` of `answers`. Write pseudocode that picks one question at
random, outputs it, inputs the user's answer and outputs `"Correct"` or `"Wrong"`. **[5]**

**12.** A programmer simulates the total of two dice with `total ← RANDOM_INT(2, 12)`.

**(a)** Explain why this is not a correct simulation. **[2]**
**(b)** Write a correct statement. **[1]**

**13.** Describe **two** tests a programmer could carry out to check that a function `rollDice` returns correct
values for a six-sided dice. **[2]**

---

## Answers

**1.** 0, 1, 2 and 3 [1].

**2.** `RANDOM_INT(1, 100)` [1].

**3.** `pick ← colours[RANDOM_INT(0, 7)]`: index range starting at 0 [1]; ending at 7 (or `LEN(colours) - 1`)
[1].

**4.** The random values produced are different each time the program runs, so any result that depends on them
changes [1].

**5.** No; only the use of random number generation is required [1].

**6.** One possible answer:

```
heads ← 0
tails ← 0
FOR i ← 1 TO 100
  toss ← RANDOM_INT(0, 1)
  IF toss = 0 THEN
    heads ← heads + 1
  ELSE
    tails ← tails + 1
  ENDIF
ENDFOR
OUTPUT heads
OUTPUT tails
```

Counters set to 0 [1]; loop running 100 times [1]; random value with two outcomes generated inside the loop [1];
correct counter increased for each outcome [1]; both counts output after the loop [1].

**7.** **(a)** The target is generated inside the loop, so it changes after every guess [1]; the user is never
guessing the same number twice, so they cannot work towards it and may never succeed [1].
**(b)** Move `target ← RANDOM_INT(1, 20)` to before the `REPEAT` [1].

**8.** **(a)** The second `RANDOM_INT` call produces a new number [1], so the badge is only chosen when the first
number was not 1 **and** the second is 2, which gives it a smaller chance (2 in 9) and the sticker a larger one
[1].
**(b)**

```
r ← RANDOM_INT(1, 3)
IF r = 1 THEN
  prize ← "Pen"
ELSE IF r = 2 THEN
  prize ← "Badge"
ELSE
  prize ← "Sticker"
ENDIF
```

One random value stored in a variable [1]; the same variable tested in each condition [1].

**9.** One possible answer:

```
code ← ""
FOR i ← 1 TO 6
  code ← code + CODE_TO_CHAR(RANDOM_INT(65, 90))
ENDFOR
OUTPUT code
```

Empty string initialised [1]; loop of 6 [1]; random code from 65 to 90 converted to a character [1];
concatenated and output [1].

**10.** **(a)** 4 [1].
**(b)** 1 [1]; the dice must be rolled at least once before it can be checked for a 6, and the condition is
tested at the end [1].

**11.** One possible answer:

```
q ← RANDOM_INT(0, 9)
OUTPUT questions[q]
reply ← USERINPUT
IF reply = answers[q] THEN
  OUTPUT "Correct"
ELSE
  OUTPUT "Wrong"
ENDIF
```

Random index from 0 to 9 [1]; stored in a variable so the same index is used twice [1]; question output [1]; reply
input [1]; comparison with the matching answer and correct messages [1].

**12.** **(a)** It makes every total from 2 to 12 equally likely [1], but with two real dice some totals can be
made in more ways than others, for example 7 in six ways but 2 in only one [1].
**(b)** `total ← RANDOM_INT(1, 6) + RANDOM_INT(1, 6)` [1].

**13.** Call the function many times and check that every result is from 1 to 6, never 0 or 7 [1]; check that
every value from 1 to 6 appears, including both 1 and 6 [1].

---

## Where marks are usually lost

- Index ranges that start at 1 or end at the array length.
- Generating a target inside the loop.
- Calling the random function again in each test of a selection chain.
- Using `RANDOM_INT(2, 12)` for two dice.
- Forgetting to convert a character code back into a character with `CODE_TO_CHAR`.
