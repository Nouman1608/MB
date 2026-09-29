---
title: "IB DP Mathematics: Applications and Interpretation -- Probability, discrete random variables, binomial and normal distributions Study Guide"
seoTitle: "IB Maths AI Probability, Binomial and Normal Study Guide"
resourceType: "study-guides"
subject: "mathematics-applications-and-interpretation"
level: ["ib"]
topic: "Probability, discrete random variables, binomial and normal distributions"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Applications and Interpretation"]
syllabusSeries: "First assessments for SL and HL—2021"
order: 4.5
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-statistics-and-probability"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-4-5"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-statistics-and-probability"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-4-6"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-statistics-and-probability"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-4-7"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-statistics-and-probability"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-4-8"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-statistics-and-probability"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-4-9"
description: "Study guide to probability, Venn and tree diagrams, discrete random variables, binomial and normal distributions, with worked examples, for IB DP Maths AI."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-27
featured: false
---

This study guide teaches probability, discrete random variables and the binomial and normal distributions for IB Diploma Programme Mathematics: Applications and Interpretation. It is aligned to the IB *Mathematics: applications and interpretation guide*, first assessment 2021, and covers syllabus sections 4.5–4.9, which are common content for SL and HL. It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 sessions.

Every paper in this course is "technology required". The guide says binomial probabilities should be found using technology in examinations, and that normal probabilities and values must be found using technology. Your job is to pick the right model, set it up clearly and interpret the answer.

Useful links: the [course hub](/boards/ib/ib-dp/mathematics-applications-and-interpretation/), the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-applications-and-interpretation/), the [revision notes for this unit](/resources/ib-dp-mathematics-ai-sl-probability-binomial-normal-revision-notes/) and the [practice questions for this unit](/resources/ib-dp-mathematics-ai-sl-probability-binomial-normal-practice/). For a short overview of the whole strand, see the [statistics and probability overview](/resources/ib-dp-mathematics-ai-statistics-probability/).

## What this unit covers

| Syllabus section | What you must be able to do | SL/HL |
|---|---|---|
| 4.5 | Use trial, outcome, equally likely outcomes, relative frequency, sample space (U) and event; find P(A) = n(A)/n(U); use complementary events A and A′; find an expected number of occurrences | SL and HL |
| 4.6 | Use Venn diagrams, tree diagrams, sample space diagrams and tables of outcomes; use the combined events formula; recognise mutually exclusive and independent events; find conditional probability; work with and without replacement | SL and HL |
| 4.7 | Work with a discrete random variable and its probability distribution; find E(X) and apply it, including fair games | SL and HL |
| 4.8 | Recognise when the binomial distribution is an appropriate model; find binomial probabilities with technology; use the mean and variance | SL and HL |
| 4.9 | Know the properties and shape of the normal curve and the 68%, 95%, 99.7% guide; find normal probabilities and inverse normal values with technology | SL and HL |

## Section 4.5: The language of probability

A **trial** is one repetition of an experiment, such as one spin of a spinner. An **outcome** is one possible result. The **sample space**, U, is the set of all outcomes. An **event**, A, is a set of outcomes.

When outcomes are equally likely:

```
P(A) = n(A) / n(U)
```

The **complementary event** A′ is "A does not happen", and P(A′) = 1 − P(A). Use it whenever "at least one" appears.

**Relative frequency** is the experimental estimate: (number of times A happened) ÷ (number of trials). It approaches the theoretical probability as the number of trials grows.

The **expected number of occurrences** of A in n trials is n × P(A). It does not have to be a whole number.

### Worked example 1

A spinner is spun 250 times and lands on red 85 times.

```
Relative frequency of red = 85/250 = 0.34
Expected number of reds in 600 more spins = 600 × 0.34 = 204
```

Two fair spinners are spun. Spinner A is numbered 1, 2, 3 and spinner B is numbered 1, 2, 3, 4. The score is the product. A sample space diagram (a 3 by 4 table of products) has 12 equally likely outcomes. The even products are 2, 4 (from A = 1), 2, 4, 6, 8 (from A = 2) and 6, 12 (from A = 3), so 8 outcomes.

```
P(product even) = 8/12 = 2/3
```

## Section 4.6: Combined events and conditional probability

### The rules

```
P(A ∪ B) = P(A) + P(B) − P(A ∩ B)        (combined events)
Mutually exclusive:  P(A ∩ B) = 0
Independent:         P(A ∩ B) = P(A)P(B)
Conditional:         P(A | B) = P(A ∩ B) / P(B)
                     so P(A ∩ B) = P(B) P(A | B)
```

"A or B" in probability includes both. That is why P(A ∩ B) is subtracted: it was counted twice. The guide notes that many problems can be solved from a Venn diagram, tree diagram, sample space diagram or table without writing the formulae. Show the numbers you read off.

To **test independence**, compute P(A)P(B) and compare it with P(A ∩ B). Equal means independent. Mutually exclusive events with non-zero probabilities are never independent: if one happens, the other cannot.

### Worked example 2: Venn diagram

In a group of 60 students, 34 study Biology (B), 25 study Chemistry (C) and 12 study both.

```
Regions: B only = 34 − 12 = 22, both = 12, C only = 25 − 12 = 13
Neither = 60 − (22 + 12 + 13) = 13

P(B ∪ C) = (34 + 25 − 12)/60 = 47/60 ≈ 0.783
P(C | B) = 12/34 = 6/17 ≈ 0.353
Independence: P(B)P(C) = (34/60)(25/60) = 17/72 ≈ 0.236
              P(B ∩ C) = 12/60 = 0.2
0.236 ≠ 0.2, so B and C are not independent.
```

For P(C | B), the "given" event B becomes the new sample space: 34 students, of whom 12 study Chemistry.

### Worked example 3: tree diagram without replacement

A box holds 12 pens, 3 of them faulty (F). Two pens are taken at random without replacement.

```
First pen:   P(F) = 3/12        P(F′) = 9/12
Second pen:  after F:  P(F) = 2/11,  P(F′) = 9/11
             after F′: P(F) = 3/11,  P(F′) = 8/11

P(exactly one faulty) = (3/12)(9/11) + (9/12)(3/11) = 54/132 = 9/22 ≈ 0.409
P(at least one faulty) = 1 − P(F′F′) = 1 − (9/12)(8/11) = 1 − 72/132 = 5/11 ≈ 0.455
P(second faulty) = (3/12)(2/11) + (9/12)(3/11) = 33/132 = 1/4
P(second faulty | at least one faulty) = (1/4) ÷ (5/11) = 11/20 = 0.55
```

In the last line, "second faulty" is already inside "at least one faulty", so the intersection is just P(second faulty). With replacement, the second-stage fractions would be the same as the first (3/12 and 9/12) and the two draws would be independent.

## Section 4.7: Discrete random variables

A **discrete random variable** X takes separate values, each with a probability. The guide says a distribution may be given as a table or as a formula such as P(X = x) = k(…) for x in a listed set. In every case:

```
Σ P(X = x) = 1                   (use this to find an unknown)
E(X) = Σ x P(X = x)              (the mean, or expected value)
```

E(X) is the long-run average value of X. If X is a player's gain in a game, **E(X) = 0 means the game is fair**. A negative E(X) means the player loses on average.

### Worked example 4: a distribution given by a formula

P(X = x) = kx² for x ∈ {1, 2, 3}.

```
k(1 + 4 + 9) = 1  →  14k = 1  →  k = 1/14
E(X) = 1(1/14) + 2(4/14) + 3(9/14) = (1 + 8 + 27)/14 = 36/14 = 18/7 ≈ 2.57
P(X ≥ 2) = 4/14 + 9/14 = 13/14
```

### Worked example 5: a fair game

A player pays c euros to roll a fair six-sided die. A 6 pays out 12 euros, a 4 or 5 pays out 3 euros, and anything else pays nothing.

```
Expected payout = 12(1/6) + 3(2/6) + 0(3/6) = 2 + 1 = 3 euros
The game is fair when c = 3.
If c = 4, the gain X takes values 8, −1, −4 with probabilities 1/6, 2/6, 3/6:
E(X) = 8/6 − 2/6 − 12/6 = −6/6 = −1 euro per game.
```

Always say whose gain X is. The organiser's expected gain is the negative of the player's.

## Section 4.8: The binomial distribution

X ~ B(n, p) is an appropriate model when:

- there is a fixed number of trials, n;
- each trial has two outcomes, "success" and "failure";
- the probability of success, p, is the same on every trial;
- the trials are independent.

X counts the number of successes. For the binomial distribution:

```
E(X) = np            Var(X) = np(1 − p)
```

The guide does not require a proof of these, and links E(X) = np back to the expected number of occurrences in 4.5.

**Using your GDC.** Use the binomial pdf for P(X = r) and the binomial cdf for P(X ≤ r). Convert every other inequality into one of these:

```
P(X < r)  = P(X ≤ r − 1)
P(X ≥ r)  = 1 − P(X ≤ r − 1)
P(X > r)  = 1 − P(X ≤ r)
P(a ≤ X ≤ b) = P(X ≤ b) − P(X ≤ a − 1)
```

Write the distribution and the probability statement before the answer, for example "X ~ B(20, 0.85), P(X ≥ 18) = 1 − P(X ≤ 17)". This earns method marks even if you key in a wrong number.

### Worked example 6

Each seed in a packet germinates with probability 0.85, independently. A packet has 20 seeds. Let X be the number that germinate, so X ~ B(20, 0.85).

```
P(X = 17) = 0.243                        (binomial pdf)
P(X ≥ 18) = 1 − P(X ≤ 17) = 0.405
P(X < 15) = P(X ≤ 14) = 0.0673
E(X) = 20 × 0.85 = 17
Var(X) = 20 × 0.85 × 0.15 = 2.55,  standard deviation = √2.55 ≈ 1.60
```

## Section 4.9: The normal distribution

X ~ N(μ, σ²) models a continuous variable, such as a mass or a time, that clusters around a mean. Note that the second parameter is the **variance**. N(150, 12²) has standard deviation 12.

Properties of the normal curve:

- bell-shaped and symmetrical about x = μ, so mean = median = mode;
- total area under the curve is 1, and area gives probability;
- for a continuous variable, P(X = a) = 0, so P(X < a) = P(X ≤ a).

The guide expects you to know that approximately **68%** of the data lies within μ ± σ, **95%** within μ ± 2σ and **99.7%** within μ ± 3σ.

**Using your GDC.** Use normal cdf with a lower bound, an upper bound, μ and σ. For inverse normal, enter the area to the **left** and the guide says μ and σ will be given. The guide states this does not involve transforming to the standardised variable z. A quick sketch with the mean and shaded area catches "left or right" errors.

### Worked example 7

The masses of apples are modelled by X ~ N(150, 12²) grams.

```
About 68% of apples have masses between 150 − 12 = 138 g and 150 + 12 = 162 g.
P(X > 165) = 0.106
P(140 < X < 160) = 0.595
Heaviest 5%: P(X < m) = 0.95 → m = 169.7 ≈ 170 g
Expected number over 165 g in 500 apples = 500 × 0.10565… ≈ 52.8
```

### Worked example 8: normal feeding into binomial

A bag contains 8 of these apples, chosen independently. Let Y be the number in the bag heavier than 165 g. Then Y ~ B(8, 0.10565…).

```
P(Y ≥ 2) = 1 − P(Y ≤ 1) = 0.204
```

Carry the unrounded 0.10565… from your GDC into the binomial calculation. Rounding it first can change the third significant figure.

## Common errors

- Adding P(A) + P(B) for "A or B" when the events overlap.
- Treating "mutually exclusive" and "independent" as the same thing.
- Dividing by the whole sample space in a conditional probability instead of by P(given event).
- Keeping the same denominators on the second branch of a "without replacement" tree.
- Using binomial cdf for P(X ≥ r) directly, or turning P(X < 15) into P(X ≤ 15).
- Using a binomial model when p changes from trial to trial, as with drawing without replacement.
- Entering the variance instead of the standard deviation into normal cdf.
- Entering the area to the right into inverse normal.

## Where to go next

Test your recall with the [revision notes](/resources/ib-dp-mathematics-ai-sl-probability-binomial-normal-revision-notes/), then work through the [practice questions](/resources/ib-dp-mathematics-ai-sl-probability-binomial-normal-practice/). For how the papers are set out, see the [exam preparation guide](/resources/ib-dp-mathematics-applications-and-interpretation-exam-preparation/) and the [syllabus guide](/resources/ib-dp-mathematics-applications-and-interpretation-syllabus-guide/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: applications and interpretation guide*, first assessment 2021.
