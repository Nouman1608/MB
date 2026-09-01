---
title: "IGCSE Mathematics: Probability — Practice Questions"
resourceType: "practice-questions"
subject: "mathematics"
level: ["igcse"]
topic: "Probability"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "For examination in 2025, 2026 and 2027"
order: 8
syllabusTopics:
  - qualification: "igcse"
    topic: "probability-cambridge-igcse-maths"
    subtopic: "introduction-to-probability-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "probability-cambridge-igcse-maths"
    subtopic: "relative-and-expected-frequencies-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "probability-cambridge-igcse-maths"
    subtopic: "probability-of-combined-events-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "probability-cambridge-igcse-maths"
    subtopic: "conditional-probability-cambridge-igcse-maths"
description: "Original exam-style practice questions with full worked answers on basic probability, relative and expected frequency, combined events and conditional probability for Cambridge IGCSE Mathematics 0580."
author: "nouman-ahmed"
publishedDate: 2026-09-01
featured: false
---
> **These are original questions written for Marlbridge**, in the style and at the
> standard of the examination. They are **not** reproduced past-paper questions —
> examination boards hold copyright in their own papers. Use these alongside the
> official past papers available free from your board.

---

## Questions

**1.** A fair six-sided dice is rolled once. State the probability that the score is a prime number. **[1]**

**2.** A biased coin is tossed 200 times and lands on heads 118 times.

**(a)** Calculate the relative frequency of heads. **[1]**
**(b)** The coin is tossed a further 50 times. Use the relative frequency from part (a) to estimate the expected number of heads in these 50 tosses. **[2]**

**3.** A bag contains 5 red counters and 3 blue counters. Two counters are taken from the bag at random, one after the other, without replacement.

**(a)** Draw and label a tree diagram to show the possible outcomes and their probabilities. **[3]**
**(b)** Calculate the probability that both counters are red. **[2]**
**(c)** Calculate the probability that the two counters are different colours. **[3]**

**4.** *(Extended)* For two events A and B, P(A) = 0.3 and P(A and B) = 0.15. Find P(B | A), the probability of B given that A has occurred. **[2]**

**5.** *(Extended)* In a group of 40 students, 24 study French, 18 study Spanish, and 10 study both. A student is picked at random from those who study French. Find the probability that this student also studies Spanish. **[3]**

---

## Answers

**1.** Prime scores on a dice are 2, 3, 5 — three out of six outcomes [1]. P(prime) = 3/6 = **½** [1].

**2. (a)** Relative frequency = 118 ÷ 200 = **0.59** [1].
**(b)** Expected heads = 0.59 × 50 [1] = **29.5** [1].

**3. (a)** First pick: P(red) = 5/8, P(blue) = 3/8 [1]. Second pick (no replacement): from red first, P(red) = 4/7, P(blue) = 3/7; from blue first, P(red) = 5/7, P(blue) = 2/7 [2] — a fully labelled two-stage tree diagram showing these four branches.
**(b)** P(both red) = 5/8 × 4/7 [1] = 20/56 = **5/14** [1].
**(c)** P(different colours) = P(R then B) + P(B then R) = (5/8 × 3/7) + (3/8 × 5/7) [2] = 15/56 + 15/56 = 30/56 = **15/28** [1].

**4.** P(B | A) = P(A and B) ÷ P(A) [1] = 0.15 ÷ 0.3 = **0.5** [1].

**5.** Of the 24 who study French, 10 also study Spanish [1]. P(Spanish | French) = 10 ÷ 24 [1] = **5/12** [1].

---

## Where marks are usually lost

- Confusing theoretical probability (counting outcomes) with relative frequency (an experimental estimate from data) — they are related but not automatically equal, and a question about one is not answered with the other.
- Multiplying the wrong branch probabilities together on a tree diagram, or forgetting that probabilities without replacement change on the second branch.
- Adding two combined-event probabilities when they should be multiplied (independent/sequential events), or the reverse when combining two mutually exclusive outcomes.
- Not simplifying a fraction at the end, or giving a probability greater than 1 or as a ratio instead of a fraction/decimal.
- In conditional probability, dividing by the wrong total — P(B | A) means restricting attention to the cases where A has already happened, not the whole sample space.

## Examiner report insight

- On a Venn diagram, shading the intersection (A n B) by default is a common habit -- check what the question actually asked for before shading, since the intersection is only one of many possible regions.
- Set-notation questions built from `n(...)` (a numerical count of elements) need the actual number of elements evaluated, not just a region shaded on a diagram -- practise both skills separately.
- Elements that belong only to the universal set -- outside every named subset -- are still part of the total and are easy to forget when completing a Venn diagram.
- The complement of a set (A') includes **everything** outside A, including any overlap with other sets -- a common error excludes the overlap by mistake.

*Source: Cambridge International, 0580 Mathematics Principal Examiner Report, June 2024 series, Papers 12, 13, 21, 22, 23, 31 (verified 2026-09-02).*
