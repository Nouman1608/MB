---
title: "IB DP Mathematics: Analysis and Approaches (AA): 4.13 Bayes' theorem (HL)"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Statistics and probability"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 4.94
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-13"
description: "HL study guide to IB DP Maths AA section 4.13: Bayes' theorem for two and three events, the tree diagram method, worked examples and common errors."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 4.13 of IB DP Mathematics: Analysis and Approaches (first assessment 2021) is **Bayes'
theorem**, and the guide limits its use to **a maximum of three events**. It is additional higher
level (AHL) content, so it is examined at HL only. It builds on the formal definition of conditional
probability in section 4.11: Bayes' theorem is that definition applied twice, so that a conditional
probability can be "turned round".

The [probability and distributions study guide](/resources/ib-dp-mathematics-aa-probability-distributions/)
gives the formula and two short examples. This page explains where the formula comes from, sets out a
reliable layout, and works through a wider range of contexts. Afterwards, use the
[4.13 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-4-13-revision-notes/)
and the
[4.13 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-4-13-practice/).
If the definition P(A | B) = P(A ∩ B)/P(B) is not yet secure, start with the
[4.11 study guide](/resources/ib-dp-mathematics-analysis-and-approaches-4-11/).

## The problem Bayes' theorem solves

Questions are usually set up in "forward" order: first something happens (which machine, which route,
whether a person has a condition), then an observable result occurs with a known conditional
probability (a fault, being late, a positive test). Bayes' theorem answers the "backward" question:
**given the result, how likely is each starting point?**

## Deriving the formula

Start from the definition of conditional probability and the multiplication rule:

```
P(B | A) = P(B ∩ A) / P(A)        and        P(B ∩ A) = P(B) P(A | B)
```

A can happen with B or with B′, so P(A) = P(B)P(A | B) + P(B′)P(A | B′). Substituting:

```
P(B | A) = P(B) P(A | B) / [ P(B) P(A | B) + P(B′) P(A | B′) ]
```

With three mutually exclusive events B₁, B₂, B₃ that between them cover every possibility:

```
P(Bᵢ | A) = P(Bᵢ) P(A | Bᵢ) / [ P(B₁) P(A | B₁) + P(B₂) P(A | B₂) + P(B₃) P(A | B₃) ]
```

Both forms are in the formula booklet. Read them as **one branch divided by the sum of all branches
that end in A**.

## A layout that always works

1. Draw a tree. First branches: the starting events (B and B′, or B₁, B₂, B₃) with their
   probabilities. Second branches: A and A′ with the conditional probabilities.
2. Multiply along every branch that ends in A.
3. Add those products to get P(A).
4. Divide the product for the branch you want by P(A).

The tree makes the denominator visible, which is where most errors happen.

## Worked example 1: two events

A student takes the bus to school on 70% of days and walks on the rest. When she takes the bus she is
late with probability 0.1; when she walks she is late with probability 0.25. On a particular day she
is late. Find the probability that she took the bus.

```
Bus and late:   0.7 × 0.1  = 0.07
Walk and late:  0.3 × 0.25 = 0.075
P(late) = 0.07 + 0.075 = 0.145

P(bus | late) = 0.07 / 0.145 = 14/29 = 0.483 (3 s.f.)
```

Before the information "late", P(bus) = 0.7. After it, the probability falls to 0.483, because
walking is the more likely cause of lateness. This shift from the starting probability to the
updated one is what Bayes' theorem measures.

## Worked example 2: three events

A shop buys light bulbs from three suppliers, P, Q and R, which provide 25%, 35% and 40% of its stock.
The proportions of defective bulbs are 4%, 2% and 1% respectively. (Figures invented.)

**(a)** Find the probability that a randomly chosen bulb is defective.
**(b)** A bulb is defective. Find the probability that it came from P.
**(c)** A bulb is not defective. Find the probability that it came from R.

```
(a) P(D) = 0.25 × 0.04 + 0.35 × 0.02 + 0.40 × 0.01
         = 0.010 + 0.007 + 0.004 = 0.021
(b) P(P | D) = 0.010 / 0.021 = 10/21 = 0.476 (3 s.f.)
(c) P(D′) = 1 − 0.021 = 0.979
    P(R ∩ D′) = 0.40 × 0.99 = 0.396
    P(R | D′) = 0.396 / 0.979 = 0.404 (3 s.f.)
```

Supplier P provides only a quarter of the bulbs, but almost half of the defective ones. Part (c)
is a reminder that the observed event can be the complement: the same method applies along the D′
branches.

## Worked example 3: a calculator-free version

A fair die is rolled. If it shows 1 or 2, a counter is taken from bag X, which holds 3 red and 2 blue
counters. Otherwise a counter is taken from bag Y, which holds 1 red and 4 blue counters. The counter
is red. Find the probability that it came from bag X.

```
P(X and red) = (1/3)(3/5) = 3/15
P(Y and red) = (2/3)(1/5) = 2/15
P(red) = 5/15 = 1/3
P(X | red) = (3/15) / (5/15) = 3/5
```

Writing both products over the common denominator 15 lets the fractions cancel cleanly, which is
helpful on Paper 1.

## Worked example 4: why the starting probability matters

An email filter knows that 30% of incoming emails are spam. The word "offer" appears in 40% of spam
emails and 5% of other emails. Find the probability that an email containing "offer" is spam.

```
P(spam and "offer")     = 0.3 × 0.4  = 0.12
P(not spam and "offer") = 0.7 × 0.05 = 0.035
P(spam | "offer") = 0.12 / 0.155 = 24/31 = 0.774 (3 s.f.)
```

If only 3% of emails were spam, the same word frequencies would give 0.012/(0.012 + 0.0485) = 0.198.
The evidence is identical, but a rarer starting event leads to a much lower updated probability.
Questions often ask you to comment on this, especially in screening contexts.

## Common mistakes

- **Confusing P(A | B) with P(B | A).** The question "given that the bulb is defective, which
  supplier?" is P(P | D), not P(D | P) = 0.04.
- **Leaving branches out of the denominator.** With three starting events, all three branches that
  end in A belong in P(A).
- **Using P(A′ | B) where P(A | B) is needed.** Label every branch before multiplying.
- **Assuming the starting events are equally likely** when the question gives different
  proportions.
- **Rounding P(A) first** and dividing by the rounded value. Keep exact values or store them.
- **Going beyond three events.** The guide limits Bayes' theorem to a maximum of three; questions will
  not need more.

## Exam technique and command words

- **Find**: show the tree (or the products) and P(A) as a separate line before the final division.
  Method marks are usually attached to the denominator.
- **Show that**: give the exact fraction; on Paper 1 that is expected anyway.
- **Interpret** or **comment**: compare the updated probability with the starting probability and
  say what the evidence changed.
- On Paper 2 decimals are acceptable; give three significant figures unless told otherwise.

## Where to go next

Condense the section with the
[4.13 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-4-13-revision-notes/),
then work through the
[4.13 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-4-13-practice/).
The other HL probability section, variance and continuous random variables, is covered in the
[4.14 study guide](/resources/ib-dp-mathematics-analysis-and-approaches-4-14/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches
guide*, first assessment 2021. Section AHL 4.13: use of Bayes' theorem for a maximum of three events.
