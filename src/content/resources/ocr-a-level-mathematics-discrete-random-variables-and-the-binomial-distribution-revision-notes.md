---
title: "OCR A Level Mathematics A: Discrete random variables and the binomial distribution (H240) -- Revision Notes"
seoTitle: "OCR A Level Maths Binomial Distribution Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Discrete random variables and the binomial distribution"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 127
syllabusTopics:
  - qualification: "a-level"
    topic: "statistics-ocr-alevel-maths"
    subtopic: "statistical-distributions-ocr-alevel-maths"
description: "Condensed revision notes on discrete probability distributions, binomial conditions, B(n, p) probabilities and np and npq for OCR A Level Mathematics A."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These revision notes condense the [full study guide](/resources/ocr-a-level-mathematics-discrete-random-variables-and-the-binomial-distribution/) for the OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), first assessment 2018. They cover 2.04a to 2.04c (Stage 1, common with AS) and 2.04d (Stage 2, **A Level only**). Use the [practice set](/resources/ocr-a-level-mathematics-discrete-random-variables-and-the-binomial-distribution-practice/) afterwards, tick items off on the [checklist](/checklists/ocr/a-level/mathematics/), see the [course hub](/boards/ocr/a-level/mathematics/) and the wider [Statistics revision notes](/resources/ocr-a-level-mathematics-statistics-revision-notes/). Not sure where you stand? Try the [free diagnostics](/diagnostics/).

## Key definitions

| Term | Meaning |
|---|---|
| Random variable X | A number produced by a chance process. Capital X is the variable, lower-case x is a value. |
| Discrete | Takes separate values, usually whole numbers |
| Probability distribution | Every value x with its P(X = x), as a table or formula |
| Finite | A fixed list of possible values |
| Trial | One repetition of the experiment |
| Success, failure | The two outcomes of a trial. Success is the outcome you are counting. |
| p, q | p = P(success), q = 1 − p = P(failure) |
| X ~ B(n, p) | X is binomial: n trials, success probability p |

## Formulae and results

| Result | Statement | Stage |
|---|---|---|
| Total probability | ΣP(X = x) = 1, and 0 ≤ P(X = x) ≤ 1 | Stage 1 |
| Binomial probability | P(X = x) = nCx pˣ qⁿ⁻ˣ for x = 0, 1, …, n | Stage 1 |
| Cumulative probability | P(X ≤ r) = P(X = 0) + … + P(X = r) | Stage 1 |
| Mean | μ = np | A Level only |
| Variance | σ² = npq | A Level only |
| Standard deviation | σ = √(npq) | A Level only |

Finding the mean and variance of a general distribution from its table is excluded. Only the binomial formulae above are required.

## Method 1: a distribution with an unknown

1. Write out all the probabilities in the table, or substitute each x into the formula.
2. Set the total equal to 1 and solve for the unknown.
3. Substitute back to get every probability and check they are all between 0 and 1.
4. Add the required probabilities. Check whether an inequality includes its end value.

Small reminder: P(X = x) = k(2x − 1) for x = 1, 2, 3 gives k + 3k + 5k = 1, so k = 1/9. Then P(X ≥ 2) = 8/9.

## The four conditions

The binomial model needs:

1. a **fixed number** of trials, n;
2. **two outcomes** for each trial (success or failure);
3. **independent** trials;
4. the **same probability** p of success every time.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-mathematics-bernoulli-and-binomial-distributions--06-binomial-conditions.webp" width="900" height="1000" alt="Four cards show the conditions for B(n, p): a fixed number of trials, two outcomes, independent trials and the same probability p each time. Three failures are listed: cards dealt without replacement, throws until the first six, and rain on following days." loading="lazy">
  <figcaption>The four conditions, and three situations where the model fails.</figcaption>
</figure>


## Conditions and assumptions

| | Condition | Assumption |
|---|---|---|
| What it is | A requirement of the model | A statement about the real context that lets a condition be taken to hold |
| Wording | General | Mentions the situation |
| Example | The trials are independent | Whether one seed germinates does not affect whether another seed germinates |

Quick check of a scenario:

- Sampling without replacement from a small group fails independence and constant p.
- Counting trials until something first happens fails the fixed n.
- A situation where trials affect one another (rain on consecutive days) fails independence.
- A situation with two different groups mixed together (adults and children with different p) fails constant p.

## Method 2: binomial probabilities

1. Define X in words and write X ~ B(n, p). Say what a success is.
2. Write the probability you need as P(X = r), P(X ≤ r) or a combination.
3. Convert any other inequality to the form "X ≤ whole number" using the table below.
4. Evaluate with the formula or the calculator's binomial functions.
5. Round to the accuracy asked (3 significant figures is a sensible default if none is stated) and answer in context.

| You need | Use |
|---|---|
| P(X < r) | P(X ≤ r − 1) |
| P(X ≥ r) | 1 − P(X ≤ r − 1) |
| P(X > r) | 1 − P(X ≤ r) |
| P(a ≤ X ≤ b) | P(X ≤ b) − P(X ≤ a − 1) |
| P(X ≥ 1) | 1 − P(X = 0) = 1 − qⁿ |

Worked reminder: X ~ B(7, 0.2).

```
P(X = 2)  = 7C2 × 0.2² × 0.8⁵ = 21 × 0.04 × 0.32768 = 0.2753
P(X ≥ 1)  = 1 − 0.8⁷ = 0.7903
P(X ≥ 3)  = 1 − P(X ≤ 2) = 1 − 0.8520 = 0.1480
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-mathematics-bernoulli-and-binomial-distributions--08-binomial-probabilities.webp" width="900" height="1040" alt="Two bar charts of B(12, 0.35). The bar at x = 4 is highlighted: P(X = 4) = 495 x 0.35^4 x 0.65^8 = 0.2367. In the second chart the bars up to 4 sum to 0.5833 and those from 5 upward sum to 1 - 0.5833 = 0.4167, so P(X &gt;= 5) = 1 - P(X &lt;= 4)." loading="lazy">
  <figcaption>A single probability, and why &quot;at least 5&quot; is one minus the cumulative probability up to 4.</figcaption>
</figure>


## Worked reminder: building a table

A bag holds 3 mint and 3 toffee sweets. Two are taken without replacement and X is the number of mints.

| x | 0 | 1 | 2 |
|---|---|---|---|
| P(X = x) | 1/5 | 3/5 | 1/5 |

Working: P(X = 0) = 3/6 × 2/5 = 1/5. P(X = 2) = 3/6 × 2/5 = 1/5. P(X = 1) is the rest, 1 − 1/5 − 1/5 = 3/5. This is not binomial, because taking without replacement changes the probability of a mint.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-mathematics-bernoulli-and-binomial-distributions--07-bernoulli-to-binomial.webp" width="900" height="980" alt="Three trials each succeed with probability 0.4. The 8 outcomes are grouped by successes x: 1 way for x = 0 (0.216), 3 ways for x = 1 (0.432 in total), 3 ways for x = 2 (0.288), 1 way for x = 3 (0.064). One trial has mean 0.4 and variance 0.24; three have np = 1.2 and npq = 0.72." loading="lazy">
  <figcaption>Why the binomial has coefficients nCx: it counts the arrangements of successes.</figcaption>
</figure>


## Writing it up in context

Answers that name the context are easier to follow and to credit than general statements, so write sentences such as these:

- "Let X be the number of seeds, out of 15, that germinate. Then X ~ B(15, 0.8)."
- "Assume each seed germinates independently of the others."
- "Assume the probability of germination is 0.8 for every seed."
- "The model may not be suitable if the seeds come from different packets with different germination rates."

When a question says "explain why a binomial model may not be appropriate", pick one condition, say which one, and link it to a feature of the scenario.

## Method 3: mean and variance (A Level only)

1. Identify n and p, and work out q = 1 − p.
2. μ = np, σ² = npq.
3. If asked for the standard deviation, take √(npq).
4. To go backwards from a given mean and variance: divide to get q = σ²/μ, then p = 1 − q, then n = μ/p.

Worked reminder: X ~ B(50, 0.1) has μ = 5, σ² = 50 × 0.1 × 0.9 = 4.5. A normal model with the same mean and variance is written N(5, 4.5). The next unit covers how that model is chosen and used.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-mathematics-bernoulli-and-binomial-distributions--02-mean-balance-point.webp" width="900" height="820" alt="A bar chart of X = 0 to 4 with probabilities 0.10, 0.30, 0.35, 0.20, 0.05 balanced on a plank with the pivot at 1.8 = E(X). A gold band shows the mean plus and minus one standard deviation, 1.03. E(X^2) = 4.3 so Var(X) = 4.3 - 3.24 = 1.06." loading="lazy">
  <figcaption>E(X) is where the distribution balances; Var(X) measures spread about it.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-mathematics-bernoulli-and-binomial-distributions--03-linear-change-ax-b.webp" width="900" height="920" alt="Two bar charts on one scale. X takes 0 to 4 with mean 1.8 and variance 1.06. Y = 4X - 3 takes -3, 1, 5, 9, 13 with the same bar heights: the mean moves to 4.2 and the variance is 16 times larger, 16.96. Adding b shifts, multiplying by a stretches." loading="lazy">
  <figcaption>Shifting moves the mean only; scaling by a multiplies the variance by a squared.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-mathematics-bernoulli-and-binomial-distributions--09-binomial-mean-variance.webp" width="900" height="1170" alt="Three bar charts of B(20, p). For p = 0.2 the mean is 4 and the variance 3.2; for p = 0.5 the mean is 10 and the variance 5, the widest; for p = 0.8 the mean is 16 and the variance 3.2. A dashed line marks each mean and a gold band one standard deviation either side." loading="lazy">
  <figcaption>Mean np and variance npq, and why the spread is greatest at p = 0.5.</figcaption>
</figure>


## Must-know distinctions

- **Condition and assumption.** The condition is the rule of the model. The assumption is the statement in context.
- **P(X < r) and P(X ≤ r).** They differ by P(X = r). On a discrete variable they are not the same.
- **p and q.** A question may give q, or the probability of failure, as its headline number.
- **Variance and standard deviation.** npq is the variance. Square-root it when σ is wanted.
- **Distribution table and formula.** Both describe the same thing. A table has to sum to 1 to be valid.

## Quick self-test

1. A table has P(X = x) values 0.2, 0.3, k, 0.1 for x = 0, 1, 2, 3. Find k.
2. X ~ B(5, 0.4). Find P(X = 0) and P(X = 5).
3. X ~ B(5, 0.4). Find P(X = 2).
4. X ~ B(10, 0.5). Find P(X ≤ 3).
5. X ~ B(10, 0.5). Find P(X ≥ 8).
6. Write P(X ≥ 6) for X ~ B(15, 0.3) in terms of a cumulative probability.
7. State why "the number of cards dealt before the first ace" is not binomial.
8. State the mean and variance of X ~ B(40, 0.25). (A Level only)
9. Y ~ B(n, p) has mean 24 and variance 6. Find n and p. (A Level only)
10. Twelve people share a room during a flu outbreak and X is the number who catch it. Name the condition that could fail.

### Answers

1. 1 − 0.6 = **0.4**
2. P(X = 0) = 0.6⁵ = **0.0778**, and P(X = 5) = 0.4⁵ = **0.0102**
3. 10 × 0.4² × 0.6³ = **0.3456**
4. **0.1719** (this is 176/1024)
5. 1 − P(X ≤ 7) = **0.0547**
6. **1 − P(X ≤ 5)**
7. The number of trials is not fixed. The cards are also drawn without replacement, so p changes.
8. Mean **10**, variance **7.5**
9. q = 6/24 = 0.25, so p = 0.75 and n = 24 ÷ 0.75 = 32. So **n = 32, p = 0.75**
10. **Independence.** One person being infected makes it more likely that others are.

## Where marks are usually lost

- Not stating the distribution X ~ B(n, p) with the parameters before using it.
- Treating P(X ≥ r) as 1 − P(X ≤ r) instead of 1 − P(X ≤ r − 1).
- Quoting the conditions as a bare list when the question asks for an assumption in context.
- Rounding a probability too early, so that the last digit of the answer is wrong.
- Using the binomial for sampling without replacement from a small group without comment.
- Forgetting that the table of a distribution should add to 1, and not using this to find an unknown.
- Giving npq when the question asks for the standard deviation.
- Swapping p and q in the formula when the failure probability is the one given.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-mathematics-bernoulli-and-binomial-distributions--04-discrete-uniform.webp" width="900" height="770" alt="Ten equal bars of height 0.1 for X = 1 to 10. The mean 5.5 is at the centre and a gold band marks one standard deviation either side. For n = 10, E(X) = 5.5 and Var(X) = 99/12 = 8.25; a fair die (n = 6) has mean 3.5 and variance 35/12." loading="lazy">
  <figcaption>Equal bars: the mean sits at the centre, (n + 1)/2.</figcaption>
</figure>


## Last-minute checklist

- Can you write the sum-to-one equation for a table or a formula in under a minute?
- Can you list the four conditions from memory and give an assumption in context for each?
- Can you convert P(X < r), P(X ≥ r), P(X > r) and P(a ≤ X ≤ b) into cumulative form without looking?
- Do you know that npq is a variance and that np and npq are A Level only?
- Do you say what a success is, and write X ~ B(n, p), at the start of every binomial answer?

## Official syllabus

OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), for first assessment in 2018, published by OCR: sections 2.04a to 2.04d.
