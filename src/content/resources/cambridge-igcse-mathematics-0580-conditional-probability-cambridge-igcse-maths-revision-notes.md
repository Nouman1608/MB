---
title: "Cambridge IGCSE Mathematics (0580): Conditional probability -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for 0580 subtopic E8.4: restricting the total, conditional probability from tables, Venn diagrams and trees, reverse questions and a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense subtopic **E8.4 Conditional probability** of the Cambridge IGCSE Mathematics 0580 syllabus (examination in 2025, 2026 and 2027). It is **Extended only**; C8.4 reads "Extended content only". For full explanations and worked examples, read the [conditional probability study guide](/resources/cambridge-igcse-mathematics-0580-conditional-probability-cambridge-igcse-maths/); for exam-style questions, use the [conditional probability practice questions](/resources/cambridge-igcse-mathematics-0580-conditional-probability-cambridge-igcse-maths-practice/).

## What the syllabus says

Calculate conditional probability using Venn diagrams, tree diagrams and tables. Knowledge of the notation P(A|B), and of formulas relating to conditional probability, is **not required**.

## Key terms

| Term | Meaning |
|---|---|
| Condition | What you are told has happened ("given that ...") |
| Conditional probability | The probability of an event once the condition is known |
| Restricted total | The number or probability for the condition only; the new denominator |
| Reverse question | A tree question that gives the second-stage result and asks about the first stage |
| Two-way table | A table with categories in rows and columns, with totals |

## The rule in words

```
probability = part that is in BOTH the event and the condition
              ÷ whole of the CONDITION
```

Trigger phrases: "given that", "if it is known that", "of those who", "chosen from the ... only".

## Where the condition total comes from

| Diagram | Condition total | Numerator |
|---|---|---|
| Two-way table | the row or column total for the condition | the cell where row and column meet |
| Venn diagram | the whole circle (or regions) named in the condition | the regions also in the event |
| Sample space grid | the cells satisfying the condition | of those, the cells in the event |
| Tree diagram | the sum of the paths satisfying the condition | the path(s) also in the event |

## Tree diagrams: two kinds of question

**Forwards (read a branch).** "Given that the first is blue, find the probability that the second is blue." This is the second-stage branch after blue.

**Reverse (divide paths).** "Given that the second is blue, find the probability that the first was blue."

```
probability the first was blue, given the second is blue
= P(blue, blue) ÷ [P(blue, blue) + P(other, blue)]
```

## Worked reminders

**Table.** 200 adults: 90 own a car; of those 90, 36 also own a bicycle. Given an adult owns a car, P(owns a bicycle) = 36/90 = **2/5**.

**Venn (probabilities).** A only 0.35, both 0.15, B only 0.3, neither 0.2. Given A: 0.15 ÷ 0.5 = **3/10**. Given not B: A only ÷ (A only + neither) = 0.35 ÷ 0.55 = **7/11**.

**Reverse tree.** P(rain) = 0.2. If rain, P(match cancelled) = 0.5; if no rain, 0.05.

```
rain and cancelled    = 0.2 × 0.5  = 0.1
no rain and cancelled = 0.8 × 0.05 = 0.04
Given cancelled, P(rain) = 0.1 ÷ 0.14 = 5/7
```

**Sample space.** Two fair dice are rolled. Given that the total is 8, the possible outcomes are (2, 6), (3, 5), (4, 4), (5, 3) and (6, 2). The probability that both dice show the same score is **1/5**, not 1/6.

**Table with a missing total.** 64 people were asked about breakfast:

| | Cereal | Toast | Total |
|---|---|---|---|
| Under 18 | 15 | 9 | 24 |
| 18 and over | 22 | 18 | 40 |

Given that a person chose toast, P(under 18) = 9 ÷ (9 + 18) = **1/3**. The toast total, 27, is not printed, so add it before dividing.

## Exam traps

- Dividing by the grand total instead of the condition total.
- Swapping the event and the condition (given A, find B is not the same as given B, find A).
- Using only the "B only" region of a Venn circle as the condition total.
- In reverse tree questions, quoting a branch value instead of dividing paths.
- Forgetting "at least one" outcomes in a sample space: count every cell that satisfies the condition, once.
- Giving an answer greater than 1, which signals the fraction is upside down.

## Self-test

1. In a table, 45 of 75 musicians play piano, and 18 of those 45 also sing. A pianist is chosen at random. Find P(sings).
2. In question 1, a musician is chosen at random from all 75. Find P(plays piano and sings).
3. Venn: A only 12, both 8, B only 20, neither 10. Given B, find P(A).
4. For question 3, given not A, find P(B).
5. A fair dice is rolled. Given that the score is even, find P(score is 6).
6. Two fair coins are tossed. Given at least one tail, find P(two tails).
7. A bag has 3 red and 5 blue balls; two are taken without replacement. Given the first is red, find P(second is red).
8. For question 7, find P(both red).
9. Venn probabilities: A only 0.1, both 0.3, B only 0.4, neither 0.2. Given A, find P(B).
10. P(A) = 0.5, then P(B) = 0.6 if A happens, 0.2 if A does not. Find P(B).
11. For question 10, given B, find P(A).
12. Why is "given B, P(A)" usually different from "given A, P(B)"?

### Answers

1. 18/45 = **2/5**
2. 18/75 = **6/25**
3. 8/28 = **2/7**
4. Not A: 20 + 10 = 30; B in that: 20; **2/3**
5. Even: 2, 4, 6; **1/3**
6. HT, TH, TT; **1/3**
7. **2/7**
8. 3/8 × 2/7 = **3/28**
9. 0.3 ÷ 0.4 = **3/4**
10. 0.5 × 0.6 + 0.5 × 0.2 = **0.4**
11. 0.3 ÷ 0.4 = **3/4**
12. The **denominators differ**: one uses the total for B, the other the total for A.

## Next steps

- Re-read the worked examples in the [conditional probability study guide](/resources/cambridge-igcse-mathematics-0580-conditional-probability-cambridge-igcse-maths/).
- Revise tree diagrams with the [combined events revision notes](/resources/cambridge-igcse-mathematics-0580-probability-of-combined-events-cambridge-igcse-maths-revision-notes/).
- More Extended questions: [statistics and probability (Extended) practice](/resources/igcse-mathematics-statistics-and-probability-extended-practice/).

## Official syllabus

Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027, Cambridge International. Topic 8 Probability, subtopic E8.4 Conditional probability (Extended only).
