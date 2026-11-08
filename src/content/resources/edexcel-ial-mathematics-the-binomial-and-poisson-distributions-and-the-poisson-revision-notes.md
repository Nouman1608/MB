---
title: "Pearson Edexcel International Advanced Level Mathematics: The Binomial and Poisson distributions and the Poisson approximation to the binomial (YMA01) -- Revision Notes"
seoTitle: "Edexcel IAL Maths S2 Binomial and Poisson Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "The Binomial and Poisson distributions and the Poisson approximation to the binomial"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 165
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s2-statistics-2-edexcel-alevel-maths"
    subtopic: "s2-binomial-and-poisson-distributions-edexcel-alevel-maths"
description: "Condensed revision notes on binomial and Poisson models, cumulative probabilities, mean and variance and the Poisson approximation for Edexcel IAL Unit S2."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-11
featured: false
reviewNote: "2026-11-08: reviewed by sajawal-zahid."
---

These revision notes condense Unit S2 section 1 (topics 1.1 to 1.3) of Pearson's International Advanced Subsidiary/Advanced Level Mathematics, Further Mathematics and Pure Mathematics specification (YMA01), Issue 3, April 2019. The specification states that Unit S2 is optional for IAS Further Mathematics and for IAL Mathematics and Further Mathematics. For full explanations and worked examples, read the [study guide](/resources/edexcel-ial-mathematics-the-binomial-and-poisson-distributions-and-the-poisson/).

Test yourself with the [practice questions](/resources/edexcel-ial-mathematics-the-binomial-and-poisson-distributions-and-the-poisson-practice/). The [course hub](/boards/edexcel/a-level/mathematics/), the [printable checklist](/checklists/edexcel/a-level/mathematics/) and the [diagnostics](/diagnostics/) help you plan the final weeks.

## Key results

| Result | B(n, p) | Po(λ) |
|---|---|---|
| Probability | P(X = r) = (n choose r) pʳ (1 − p)ⁿ⁻ʳ | P(X = r) = e⁻λ λʳ / r! |
| Values of r | 0, 1, …, n | 0, 1, 2, … with no upper limit |
| Mean | np | λ |
| Variance | np(1 − p) | λ |
| Sum | no result needed | independent Po(a) + Po(b) = Po(a + b) |

No derivations of the means or variances are required.

## Model checklists

**Binomial.** All four must hold, and you must say them in context:

- fixed number of trials
- two outcomes (success or failure)
- constant probability of success
- independent trials

**Poisson.** Events occur

- singly
- independently
- at random
- at a constant average rate

**Quick contrast.** A count with a known maximum (items in a box, patients in a ward of 20) points to binomial. A count of events with no natural maximum (calls, flaws, particles) points to Poisson. A Poisson model has variance equal to its mean, while a binomial variance is below its mean.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-the-binomial-and-poisson-distributions-and-the-poisson--01-poisson-vs-binomial-setup.webp" width="900" height="1040" alt="A timeline shows seven events in an interval, so X counts events with no upper limit. Below it, ten trial boxes show six successes, so a binomial X can never exceed n. Poisson events must be single, independent and at a constant average rate." loading="lazy">
  <figcaption>Poisson counts events in an interval with no upper limit; binomial counts successes in a fixed number of trials.</figcaption>
</figure>


## Method: cumulative probabilities

Let F(r) = P(X ≤ r).

| Request | Rewrite |
|---|---|
| P(X = r) | F(r) − F(r − 1) |
| P(X < r) | F(r − 1) |
| P(X ≥ r) | 1 − F(r − 1) |
| P(X > r) | 1 − F(r) |
| P(a ≤ X ≤ b) | F(b) − F(a − 1) |

**Worked reminder.** X ~ B(10, 0.3). Find P(X ≥ 4).

```
P(X ≥ 4) = 1 − P(X ≤ 3) = 1 − 0.6496 = 0.3504
```

Keep four decimal places in given cumulative values until the last line.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-the-binomial-and-poisson-distributions-and-the-poisson--02-poisson-shapes.webp" width="900" height="1090" alt="Three bar charts of P(X = r) on one scale for Po(0.8), Po(3) and Po(9). Po(0.8) is strongly skewed, Po(3) peaks at 2 and 3, and Po(9) is wide and nearly symmetric. A dashed line marks the mean λ." loading="lazy">
  <figcaption>As λ grows the distribution moves right, spreads out and becomes more symmetric.</figcaption>
</figure>


## Method: scaling a Poisson mean

1. Write the rate with its unit, for example 1.2 per 4 minutes.
2. Convert to the interval in the question: 1.2 ÷ 4 × 10 = 3 per 10 minutes.
3. State the distribution: X ~ Po(3).
4. Calculate, using P(X ≥ r) = 1 − P(X ≤ r − 1) when needed.

**Worked reminder.** X ~ Po(6). Then P(3 ≤ X ≤ 5) = F(5) − F(2) = 0.4457 − 0.0620 = 0.3837, and P(X ≥ 7) = 1 − F(6) = 0.3937.

If the interval is five times as long, the mean is five times as large: Po(λ) becomes Po(5λ). The probability is not multiplied by five.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-the-binomial-and-poisson-distributions-and-the-poisson--03-poisson-scaling-interval.webp" width="900" height="1080" alt="Six 10-minute blocks each with mean 1.5 show 20 minutes has λ = 3 and one hour has λ = 9. Po(3) with r ≤ 3 shaded gives 0.647 and Po(9) with r ≥ 10 shaded gives 0.413." loading="lazy">
  <figcaption>Rescale the mean to the interval you observe before calculating any probability.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-the-binomial-and-poisson-distributions-and-the-poisson--05-poisson-variance-equals-mean.webp" width="900" height="940" alt="A number line of variance divided by mean. B(50, 0.3) gives 0.70, data with mean 2.3 and variance 2.2 give 0.96, Po(λ) gives exactly 1, and data with mean 2.6 and variance 5.9 give 2.27. Values near 1 suit Poisson, values above 1 suggest clustering." loading="lazy">
  <figcaption>A Poisson count has variance equal to its mean; a ratio well above 1 signals clustered events or a varying rate.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-the-binomial-and-poisson-distributions-and-the-poisson--06-poisson-critical-region.webp" width="900" height="1010" alt="Bar chart of Po(4.5). The critical region X = 0 or X ≥ 10 is shaded gold with tail probabilities 0.0111 and 0.0171, total 0.0282. The observed 11 lies in the critical region so H0 is rejected." loading="lazy">
  <figcaption>At the 5% level each tail gets at most 2.5%, and the actual significance level 0.0282 is the probability of a Type I error.</figcaption>
</figure>


## Method: finding n, p or λ from information

- From a mean and variance of a binomial: divide the variance by the mean to get 1 − p, then n = mean ÷ p.
- From a Poisson statement such as P(X = 0) = 0.2: e⁻λ = 0.2, so λ = ln 5.
- From P(X = r) = P(X = r + 1): cancel e⁻λ and solve. For example λ²/2 = λ³/6 gives λ = 3.

## Method: the Poisson approximation to B(n, p)

1. Check n is large and p is small, as your teacher's conditions require.
2. Use Po(np).
3. Calculate with the Poisson distribution and state that the answer is an approximation.

**Worked reminder.** X ~ B(300, 0.01). Then np = 3, and P(X = 2) ≈ e⁻³ × 3²/2 = 0.2240. The exact value is 0.2244.

If p is near 0.5, the Poisson approximation is poor, and Po(np) has the wrong variance.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-the-binomial-and-poisson-distributions-and-the-poisson--04-poisson-approximates-binomial.webp" width="900" height="1190" alt="Binomial bars with Poisson values as dots. B(150, 0.02) and Po(3) match closely (0.4209 against 0.4232 for P(X ≤ 2)). B(20, 0.4) and Po(8) do not (0.1256 against 0.1912), because p is not small." loading="lazy">
  <figcaption>The approximation works when n is large and p is small, and fails when p is not small.</figcaption>
</figure>


## Worked reminders: mixed

**Poisson then binomial.** Faults occur on a cable at 0.5 per 100 m. For 400 m the mean is 2, so X ~ Po(2) and P(X = 0) = e⁻² = 0.1353. If five separate 400 m cables are tested, the number with no faults is B(5, 0.1353). The probability that exactly one of the five has no faults is 5 × 0.1353 × 0.8647⁴ = 0.378. Work out the Poisson probability first, keep it unrounded for the next step, and name the new distribution before you use it. That is the usual route when a question links the two distributions.

**Reading data.** Counts of text messages in 60 five-minute spells have mean 3.1 and variance 3.0. Both are close to 3, so Po(3.1) is plausible. Say what you tested and give the reason: the mean and variance are nearly equal. State any condition you cannot check from the data, such as independence.

**Choosing the model.** Four questions settle it:

1. Is there a fixed number of trials n? If yes, think binomial.
2. Is the count a number of events in an interval with no maximum? If yes, think Poisson.
3. Is the probability or rate constant throughout?
4. Are the trials or events independent?

## Model comments: templates

- Binomial fails: "The trials are not independent because [one trial changes the probability of the next], so B(n, p) is not suitable."
- Binomial fails: "The probability is not constant because [it differs between trials], so B(n, p) is not suitable."
- Poisson fails: "The rate is not constant because [it changes with the time of day or location], so Po(λ) is not suitable."
- Poisson fails: "Events occur in clusters, not singly or independently, so Po(λ) is not suitable."
- Model holds: name each condition and give a reason it is reasonable in this context.

Fill the square brackets with the context in the question. A comment that could be pasted into any question earns little.

## Must-know distinctions

- Binomial: fixed n, p constant. Poisson: no fixed n, rate constant.
- Binomial variance np(1 − p) is less than the mean. Poisson variance equals the mean.
- Scaling λ changes the mean. Scaling a probability is never valid.
- 1 − F(r − 1) includes r. 1 − F(r) does not.
- An approximation is stated as "≈" and uses Po(np), not B(n, p).
- "Comment on the model" needs a condition and a reason from the context.

## Quick self-test

1. X ~ B(10, 0.3). Write down E(X) and Var(X).
2. X ~ Po(4.2). Write down E(X) and Var(X).
3. X ~ B(6, 0.5). Find P(X = 2).
4. X ~ Po(2.5). Find P(X = 0).
5. Calls arrive at 0.9 per minute on average. State the distribution of the number in 5 minutes.
6. X ~ B(15, 0.4) and F(r) = P(X ≤ r). Write P(X ≥ 6) in terms of F.
7. X ~ B(n, p) has mean 6 and variance 4.2. Find n and p.
8. X ~ B(300, 0.01). Use a Poisson approximation to estimate P(X = 2).
9. A and B are independent, A ~ Po(2) and B ~ Po(3). Find P(A + B = 1).
10. A sample of counts has mean 5.1 and variance 5.0. State, with a reason, what this suggests about a Poisson model.
11. X ~ B(12, 0.25). Find P(X ≥ 1).
12. State why the number of faulty items in a box of 10 is better modelled by a binomial than a Poisson distribution.

### Answers

1. E(X) = np = **3**, Var(X) = np(1 − p) = **2.1**.
2. E(X) = **4.2** and Var(X) = **4.2**.
3. 15 × 0.5² × 0.5⁴ = 15/64 = **0.2344**.
4. e⁻²·⁵ = **0.0821**.
5. Mean 0.9 × 5 = 4.5, so **Po(4.5)**.
6. P(X ≥ 6) = **1 − F(5)**.
7. 1 − p = 4.2 ÷ 6 = 0.7, so p = **0.3** and n = 6 ÷ 0.3 = **20**.
8. np = 3, so P(X = 2) ≈ e⁻³ × 3²/2 = **0.224**.
9. A + B ~ Po(5), so P = 5e⁻⁵ = **0.0337**.
10. Mean and variance are almost equal, which is consistent with a Poisson model. It does not prove the model fits.
11. 1 − 0.75¹² = **0.968**.
12. The number of items is fixed at 10 and cannot exceed 10, but a Poisson variable has no upper limit.

## Where marks are usually lost

- Using F(r) when F(r − 1) is needed, especially for "at least" and for ranges.
- Not rescaling the Poisson mean, or rescaling by the wrong factor.
- Leaving a model comment generic ("it is random") without naming the condition and the context.
- Applying the Poisson approximation without checking that n is large and p is small.
- Using the Poisson variance rule for a binomial variable, or the reverse.
- Rounding table values early and losing accuracy in a difference.
- Forgetting that a Poisson variable starts at 0, so P(X ≥ 1) = 1 − P(X = 0).
- Not stating the distribution (for example Po(4.5)) before calculating.

## Frequently asked questions

**What are the conditions for a binomial distribution?**
There must be a fixed number of trials, two outcomes on each trial, a constant probability of success and independent trials. In an answer, state each condition in the context of the question.

**What are the conditions for a Poisson distribution?**
Events must occur singly, independently, at random and at a constant average rate in the interval of time, length or area being counted.

**How can sample data suggest a Poisson model?**
For a Poisson distribution the mean equals the variance, so a sample whose mean and variance are close supports a Poisson model.

**When can you use a Poisson approximation to the binomial?**
When n is large and p is small, B(n, p) can be approximated by Po(np). If p is near 0.5 the approximation is poor.

**Do you need to derive the binomial and Poisson mean and variance in Edexcel IAL S2?**
No. The Edexcel IAL Mathematics specification (YMA01) says no derivations of the means or variances are required in Unit S2, but you must know and use them.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019 (Pearson Education Limited). This page covers Unit S2, section 1.
