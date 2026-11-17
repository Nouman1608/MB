---
title: "OxfordAQA IGCSE Computer Science (9210): Random number generation in a programming language -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for OxfordAQA IGCSE Computer Science 9210 section 3.2.9: random integers, ranges, chances, simulations, common errors and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-17
reviewNote: "2026-11-17: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-17
featured: false
---

Condensed notes for section **3.2.9 Random number generation in a programming language** of OxfordAQA
International GCSE Computer Science (9210). Worked examples are in the [random number generation study
guide](/resources/oxfordaqa-igcse-computer-science-9210-random-number-generation/).

## What the specification asks

- Be able to **use** random number generation **within your own programs**.
- **Not required:** how pseudo-random numbers are generated.

## The function

`RANDOM_INT(low, high)`: a random integer from `low` to `high`, **both included**, each value equally likely.
Each call gives a **new** value.

| Language | 1 to 6 inclusive |
|---|---|
| Pseudocode | `RANDOM_INT(1, 6)` |
| Python | `random.randint(1, 6)` (after `import random`) |
| C# | `rnd.Next(1, 7)` (upper value excluded) |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-random-number-generation--01-inclusive-ranges.webp" width="900" height="762" alt="RANDOM_INT(1, 6) in pseudocode and random.randint(1, 6) in Python can each return 1, 2, 3, 4, 5 or 6, with both ends included. In C#, rnd.Next(1, 7) excludes the upper value 7, so its maximum is 6." loading="lazy">
  <figcaption>Pseudocode and Python include both ends; C# excludes the upper value.</figcaption>
</figure>

## Ranges for common tasks

| Task | Call |
|---|---|
| Dice | `RANDOM_INT(1, 6)` |
| Coin (0 = heads, 1 = tails) | `RANDOM_INT(0, 1)` |
| Card value 1 to 13 | `RANDOM_INT(1, 13)` |
| Random array element | `items[RANDOM_INT(0, LEN(items) - 1)]` |
| Random capital letter | `CODE_TO_CHAR(RANDOM_INT(65, 90))` |
| Random digit character | `CODE_TO_CHAR(RANDOM_INT(48, 57))` |
| Number of the form 100, 200 ... 900 | `RANDOM_INT(1, 9) * 100` |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-random-number-generation--02-random-index-range.webp" width="900" height="730" alt="An array items has indexes 0 to LEN − 1. RANDOM_INT(0, LEN(items) - 1) covers exactly those indexes. RANDOM_INT(0, LEN(items)) can produce LEN, which does not exist, and RANDOM_INT(1, LEN(items)) misses index 0 and can also go past the end." loading="lazy">
  <figcaption>For a random index, use RANDOM_INT(0, LEN(items) - 1).</figcaption>
</figure>

## Chances

- *n* in 10 chance: `RANDOM_INT(1, 10) ≤ n`.
- 25% chance: `RANDOM_INT(1, 4) = 1` (or `RANDOM_INT(1, 100) ≤ 25`).
- Several outcomes: **store one value**, then use `IF ... ELSE IF ... ELSE`.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-random-number-generation--03-random-chances.webp" width="900" height="690" alt="RANDOM_INT(1, 10) ≤ 3 is True for 3 of the 10 equally likely values, a 30% chance. For several outcomes, r ← RANDOM_INT(1, 4) is stored once and tested: 1 gives Sun, 2 gives Rain, and 3 or 4 give Cloud, so Cloud has a 2 in 4 chance and the others 1 in 4." loading="lazy">
  <figcaption>Compare with a threshold for one chance; store one value and test it for several outcomes.</figcaption>
</figure>

## Where to generate the value

| Situation | Generate... |
|---|---|
| A target that must stay the same during a game | Once, **before** the loop |
| A new dice roll every turn | **Inside** the loop |
| One value tested against several outcomes | Once, stored in a variable, **before** the selection |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-random-number-generation--04-guessing-game-trace.webp" width="900" height="770" alt="The guessing game pseudocode generates target with RANDOM_INT(1, 50) once, before a REPEAT … UNTIL loop. On a number line from 1 to 50 with target 29, the guesses 40, 20 and 29 give the outputs Too high, Too low, then Correct in 3 guesses." loading="lazy">
  <figcaption>Generate the target once, before the loop; a trace question tells you its value.</figcaption>
</figure>

## Simulations

- Repeat a random event many times and **count** the results, often in an array of counters.
- Results **vary** from run to run; that is expected.
- Total of two dice = `RANDOM_INT(1, 6) + RANDOM_INT(1, 6)`, **not** `RANDOM_INT(2, 12)` (which wrongly makes every
  total equally likely).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-random-number-generation--05-dice-simulation-counts.webp" width="900" height="674" alt="An array counts holds six counters at indexes 0 to 5. Each of 600 rolls from RANDOM_INT(1, 6) adds 1 to counts[roll - 1], so a roll of 1 is counted at index 0 and a roll of 6 at index 5. Each face should appear roughly 100 times, but the counts change every run." loading="lazy">
  <figcaption>Faces 1 to 6 are counted at indexes 0 to 5, so use roll − 1 as the index.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-random-number-generation--06-two-dice-not-one.webp" width="900" height="696" alt="RANDOM_INT(2, 12) makes every total from 2 to 12 equally likely. A grid of the 36 pairs from two real dice shows that a total of 7 happens in six ways (1+6, 2+5, 3+4, 4+3, 5+2, 6+1) but a total of 2 in only one way (1+1). The correct simulation adds two calls: RANDOM_INT(1, 6) + RANDOM_INT(1, 6)." loading="lazy">
  <figcaption>Simulate two dice with two calls added together, not one call from 2 to 12.</figcaption>
</figure>

## Testing random programs

- Check every value is **within range** and that **both end values** can occur.
- Replace the random call with a **fixed value** temporarily to test the rest of the logic.
- In exam traces, use the random values the question gives, in order.

## Mini trace with given random values

```
score ← 0
FOR turn ← 1 TO 4
  d ← RANDOM_INT(1, 6)
  IF d MOD 2 = 0 THEN
    score ← score + d
  ELSE
    score ← score - 1
  ENDIF
ENDFOR
OUTPUT score
```

If the random values are 5, 2, 6, 3:

| turn | d | even? | score |
|---|---|---|---|
| 1 | 5 | No | −1 |
| 2 | 2 | Yes | 1 |
| 3 | 6 | Yes | 7 |
| 4 | 3 | No | 6 |

Output: **6**. In a trace, the question supplies the random values; use them in order, one per call.

## Key terms

| Term | Meaning |
|---|---|
| Random number generation | Producing numbers that cannot be predicted, for use in a program |
| Range | The smallest and largest values that can be produced |
| Inclusive | Both end values of the range can be produced |
| Simulation | A program that models a real event, often repeated many times with random values |
| Pseudo-random | Generated by an algorithm so as to appear random (how it works is not required) |

## Exam traps

- **Off-by-one ranges**: 0 to 6 is seven values; 1 to `LEN(a)` misses index 0.
- **Regenerating** a value that should stay fixed.
- **Two calls** in an `IF ... ELSE IF` chain, testing different numbers.
- **`RANDOM_INT(2, 12)`** for two dice.
- **Language ranges**: C#'s `Next(1, 7)` stops at 6; do not copy that habit into pseudocode as `RANDOM_INT(1, 7)`.
- **Explaining the algorithm** behind random numbers: not required and not credited.

## Self-test

1. State the possible values of `RANDOM_INT(3, 7)`.
2. Write a call that simulates a 10-sided dice numbered 1 to 10.
3. Write a call that picks a random index for an array of 20 elements.
4. Write a condition that is true with a 1 in 5 chance.
5. Explain why the target number in a guessing game is generated before the loop.
6. Explain why `RANDOM_INT(2, 12)` does not correctly simulate two dice.
7. Write a statement that sets `letter` to a random lower-case letter (`"a"` is 97, `"z"` is 122).
8. A program runs `RANDOM_INT(1, 6)` 600 times. About how many sixes would you expect, and why will it vary?
9. What is wrong with `IF RANDOM_INT(1, 3) = 1 THEN ... ELSE IF RANDOM_INT(1, 3) = 2 THEN ...`?
10. Give one way to test a program that uses random numbers.
11. State the Python function for a random integer in a range, both ends included.
12. Does the specification require you to explain how pseudo-random numbers are produced?

**Answers:**
1. 3, 4, 5, 6 or 7.
2. `RANDOM_INT(1, 10)`.
3. `RANDOM_INT(0, 19)` (or `RANDOM_INT(0, LEN(a) - 1)`).
4. `RANDOM_INT(1, 5) = 1` (any single value from 1 to 5).
5. So the number stays the same for every guess; generating it inside the loop would change it each time.
6. It makes all totals equally likely, but with two dice some totals (such as 7) can be made in more ways than
others (such as 2).
7. `letter ← CODE_TO_CHAR(RANDOM_INT(97, 122))`.
8. About 100, because each face has a 1 in 6 chance; each run is random, so the exact count changes.
9. Each call produces a different random number, so the two tests are not checking the same value; store one value
first.
10. Any one: check all values are in range; check both end values occur; replace the call with a fixed value to
test the rest of the code.
11. `random.randint(a, b)`.
12. No; only using random number generation is required.

## Related resources

- [Random number generation study guide](/resources/oxfordaqa-igcse-computer-science-9210-random-number-generation/)
- [Random number generation practice questions](/resources/oxfordaqa-igcse-computer-science-9210-random-number-generation-practice/)
- [Data structures, subroutines and translators revision notes](/resources/oxfordaqa-igcse-computer-science-programming-structures-and-translators-revision-notes/)
