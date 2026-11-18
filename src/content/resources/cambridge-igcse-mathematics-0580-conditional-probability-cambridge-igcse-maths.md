---
title: "Cambridge IGCSE Mathematics (0580): Conditional probability"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Topic 8 – Probability"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 8.4
syllabusTopics:
  - qualification: "igcse"
    topic: "probability-cambridge-igcse-maths"
    subtopic: "conditional-probability-cambridge-igcse-maths"
description: "Study guide to 0580 subtopic E8.4: conditional probability from two-way tables, Venn diagrams, sample spaces and tree diagrams, including reverse questions."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **E8.4 Conditional probability** in Topic 8 Probability of the Cambridge IGCSE Mathematics 0580 syllabus for examination in 2025, 2026 and 2027. It is **Extended only**: the Core column reads "Extended content only", so it is tested on Paper 2 (non-calculator) and Paper 4 (calculator).

The topic-level [probability study guide](/resources/igcse-mathematics-probability/) mentions conditional probability briefly. This page teaches one idea, **shrinking the total**, and applies it to every diagram the syllabus names, including "reverse" tree-diagram questions. Revise with the [conditional probability revision notes](/resources/cambridge-igcse-mathematics-0580-conditional-probability-cambridge-igcse-maths-revision-notes/) and practise with the [conditional probability practice questions](/resources/cambridge-igcse-mathematics-0580-conditional-probability-cambridge-igcse-maths-practice/).

## What subtopic E8.4 asks for

The syllabus statement is: **calculate conditional probability using Venn diagrams, tree diagrams and tables**.

The notes add that **knowledge of the notation P(A|B), and of formulas relating to conditional probability, is not required**. You will not be asked to quote a formula; you will be asked to read the right numbers from a diagram and divide.

## The one idea: "given that" changes the total

A conditional probability is the probability of an event **when you already know** that something else has happened. The words to look for are "given that", "if", "of those who" and "from the ... only".

Knowing the condition removes every outcome that does not satisfy it. So:

```
conditional probability = (number or probability in BOTH the event and the condition)
                          ÷ (number or probability in the CONDITION)
```

Compare these two questions about the same 150 students:

- "A student is chosen at random. Find the probability that the student is a boy who travels by car." The total is all 150.
- "A student who travels by car is chosen at random. Find the probability that the student is a boy." The total is only the car travellers.

## Conditional probability from a table

### Worked example 1 (non-calculator)

The table shows how 150 students travel to school.

| | Walk | Bus | Car | Total |
|---|---|---|---|---|
| Boys | 24 | 30 | 16 | 70 |
| Girls | 32 | 28 | 20 | 80 |
| Total | 56 | 58 | 36 | 150 |

Find the probability that (a) a student chosen at random from the girls walks, (b) a student chosen at random from those who travel by car is a boy, (c) a student chosen at random from all 150 is a boy who travels by car.

```
(a) Restrict to girls (80).  Girls who walk: 32.   P = 32/80 = 2/5
(b) Restrict to car (36).    Boys by car: 16.      P = 16/36 = 4/9
(c) No restriction (150).    Boys by car: 16.      P = 16/150 = 8/75
```

Parts (b) and (c) have the **same numerator** and **different denominators**. Deciding the denominator is the whole question.

## Conditional probability from a Venn diagram

### Worked example 2: counts (non-calculator)

Of 50 people, 18 play only football, 7 play football and hockey, 13 play only hockey and 12 play neither.

(a) A football player is chosen at random. Find the probability that they also play hockey. (b) A person who plays at most one of the sports is chosen at random. Find the probability that they play neither.

```
(a) Football circle: 18 + 7 = 25.  Also hockey: 7.     P = 7/25
(b) At most one sport: 18 + 13 + 12 = 43.  Neither: 12. P = 12/43
```

### Worked example 3: probabilities (non-calculator)

In a Venn diagram for events A and B, the probabilities are: A only 0.3, A and B 0.2, B only 0.25, neither 0.25. Given that B happens, find the probability that A also happens.

```
Inside B: 0.2 + 0.25 = 0.45
In both:  0.2
Conditional probability = 0.2 ÷ 0.45 = 20/45 = 4/9
```

Dividing probabilities works in exactly the same way as dividing counts. A useful check is that the answer is a probability between 0 and 1.

## Conditional probability from a sample space

A table of equally likely outcomes, such as the grid for two dice, also counts as a table.

### Worked example 4 (non-calculator)

Two fair dice are rolled. Given that at least one dice shows a 6, find the probability that both show a 6.

```
Outcomes with at least one 6: the six in the "first dice = 6" row
plus the six in the "second dice = 6" column, minus (6, 6) counted twice:
6 + 6 − 1 = 11
Outcomes with both 6: 1
P = 1/11
```

The answer is not 1/6: knowing at least one 6 has appeared changes the set of possible outcomes.

## Conditional probability from a tree diagram

### Reading a branch directly

On a tree, the second-stage branches **are** conditional probabilities. A bag contains 4 red and 6 white counters, and two are taken without replacement. Given that the first counter is white, the probability that the second is red is the branch value **4/9**: there are still 4 red counters, out of 9 left.

### Worked example 5: a "reverse" question (calculator)

A factory has two machines. Machine A makes 60% of the items, and 5% of its items are faulty. Machine B makes 40% of the items, and 10% of its items are faulty. An item is chosen at random and found to be faulty. Find the probability that it was made by machine A.

```
Tree:  A (0.6) → faulty (0.05):  0.6 × 0.05 = 0.03
       B (0.4) → faulty (0.1):   0.4 × 0.1  = 0.04
P(faulty) = 0.03 + 0.04 = 0.07

Given faulty, restrict to the faulty paths (total 0.07):
P(made by A) = 0.03 ÷ 0.07 = 3/7
```

Although machine A makes most of the items, it is responsible for fewer than half of the faulty ones. This "reverse" type of question appears often, and the tree is the clearest way to organise it.

### Worked example 6: given a combined result (non-calculator)

Using the bag of 4 red and 6 white counters, two taken without replacement: given that the counters are different colours, find the probability that the first one was red.

```
P(RW) = 4/10 × 6/9 = 24/90
P(WR) = 6/10 × 4/9 = 24/90
Different colours: 48/90
Given different colours, P(first red) = (24/90) ÷ (48/90) = 1/2
```

When both fractions have the same denominator, divide the numerators: 24 ÷ 48.

## A method that always works

1. Underline the condition ("given that ...").
2. Find the total for the condition (a row or column, a circle, a set of tree paths).
3. Find the part of that total that also satisfies the event.
4. Divide. Simplify, and check the answer is between 0 and 1.

## Common mistakes

- Using the grand total instead of the condition total.
- Swapping the event and the condition: "given car, P(boy)" is 16/36, but "given boy, P(car)" is 16/70.
- In a Venn diagram, using only the "B only" region for the condition total instead of the whole circle.
- In reverse tree questions, giving the branch probability (such as 0.05) instead of dividing one path by the total of the relevant paths.
- Writing P(A|B) and a formula you cannot apply correctly; working from the diagram is enough and is what the syllabus expects.

## Exam technique

- **Find the probability**: write the fraction with the counts or probabilities visible, such as 7/25, before simplifying.
- In tree questions, write the value of each path you use and the total of the paths in the condition.
- On Paper 2, leave answers as fractions; on Paper 4, give decimals to 3 significant figures if you convert.

## Official syllabus

Cambridge International, *Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027*, Subject content, Topic 8 Probability, E8.4 Conditional probability (Extended subject content), with C8.4 marked "Extended content only". See also the [Cambridge IGCSE Mathematics hub](/boards/cambridge/igcse/mathematics/).
