---
resourceId: "mb-ap-stats-2.10-study-guide"
title: "The Binomial Distribution: Study Guide (Statistics 2.10)"
description: "Learn to justify whether a random variable is binomial, calculate binomial probabilities, mean and standard deviation, estimate probabilities by simulation and interpret results in context."
course: "statistics"
unit: 2
topics: ["2.10"]
resourceType: "study-guide"
prerequisites:
  - "Multiplying probabilities of independent events and using complements (Topic 2.7)"
  - "Mean and standard deviation of a discrete random variable (Topic 2.9)"
prerequisiteResources: ["mb-ap-stats-2.9-study-guide"]
learningObjectives:
  - "Decide whether a random variable is binomial by checking each condition in context"
  - "Calculate exact and cumulative binomial probabilities with the binomial probability function and with technology"
  - "Calculate the mean and standard deviation of a binomial random variable"
  - "Interpret binomial probabilities, the mean and the standard deviation in context"
  - "Estimate a binomial probability from simulation results and compare it with the exact value"
skills: ["3", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "graphing"
calculatorNote: "Use the binomial pdf (exactly x) and cdf (x or fewer) functions to check hand calculations. Always write the distribution, n, p and the values you want, not only calculator syntax. Round probabilities to 4 decimal places."
related: ["mb-ap-stats-2.10-revision-notes", "mb-ap-stats-2.10-practice", "mb-ap-stats-2.10-checklist"]
next: "mb-ap-stats-2.10-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "X is binomial when it counts successes in a fixed number n of independent trials, each with two outcomes and the same probability of success p."
  - "P(X = x) = ₙCₓ · pˣ · (1 − p)ⁿ⁻ˣ for x = 0, 1, 2, …, n."
  - "Mean μ = np; standard deviation σ = √[ np(1 − p) ]."
  - "For 'at least' and 'at most', add the right probabilities or use a complement."
  - "Interpret every probability, mean and standard deviation in context."
faqs:
  - question: "What does ₙCₓ mean?"
    answer: "It is the number of different orders in which x successes can appear among n trials: ₙCₓ = n! ÷ [x!(n − x)!]. Calculators call it nCr. For example, ₁₂C₁₀ = 66."
  - question: "Is the number of trials until the first success binomial?"
    answer: "No. A binomial variable needs a fixed number of trials decided in advance. If you keep going until a success happens, the number of trials is not fixed."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## Counting successes

Many random variables **count** how many times something happens in a set number of tries: how many seeds sprout out of 12, how many customers buy out of 20, how many parcels arrive late out of 50. When these tries follow a few simple rules, the count has a **binomial distribution**. Then you do not need to build the probability table by hand, as in Topic 2.8. A single formula gives every probability, and short formulas give the mean and standard deviation.

Each try is called a **trial**. The outcome you are counting is called a **success**; the other outcome is a **failure**. "Success" is only a label. It can be something bad, such as a faulty part.

## When is a random variable binomial?

A random variable X is **binomial** when all four conditions hold.

| Condition | What to check in context |
|---|---|
| Two outcomes | Each trial is either a success or a failure. |
| Fixed number of trials | n is decided in advance, before any trial happens. |
| Independent trials | The outcome of one trial does not change the probabilities for another. |
| Same probability | Every trial has the same probability of success, p. |

X is then the **number of successes** in the n trials. We write X ~ B(n, p), read "X has a binomial distribution with n trials and success probability p". X can take the values 0, 1, 2, …, n.

To **justify** that X is binomial, state each condition in the words of the problem. To show that X is **not** binomial, name the condition that fails and explain why.

## The binomial probability function

Think about 3 seeds, each germinating with probability 0.85. What is the probability that exactly 2 germinate?

One way is germinate, germinate, fail: by independence its probability is 0.85 × 0.85 × 0.15 = 0.108375. But the failure could be first, second or third, so there are 3 such orders, each with the same probability. So P(X = 2) = 3 × 0.108375 = 0.3251.

In general, the probability of exactly x successes in n trials is:

**P(X = x) = ₙCₓ · pˣ · (1 − p)ⁿ⁻ˣ, for x = 0, 1, 2, …, n**

- pˣ(1 − p)ⁿ⁻ˣ is the probability of **one** particular order with x successes and n − x failures.
- ₙCₓ = n! ÷ [x!(n − x)!] is the **number of orders**. Here ₃C₂ = 3.

For "at most", "at least" or "between", add the exact probabilities for every value in the range. The **complement** often saves work: P(X ≥ 1) = 1 − P(X = 0). Technology helps too: a **binomial pdf** gives P(X = x), and a **binomial cdf** gives the cumulative probability P(X ≤ x), as in the cumulative distributions of Topic 2.8.

Be careful with the boundary. "At least 11" means 11 or more, so P(X ≥ 11) = 1 − P(X ≤ 10). "Fewer than 10" means 9 or fewer, so it is P(X ≤ 9).

## Mean and standard deviation

You could find the mean and standard deviation of a binomial variable with the Topic 2.9 formulas. The results always simplify to:

**μ = np  and  σ = √[ np(1 − p) ]**

The mean makes sense: if 85% of seeds germinate, then in 12 seeds you expect 0.85 of 12, or 10.2, on average. The variance is np(1 − p); take its square root to get σ.

## The data used in this guide

A fictional seed company, Greenrow Seeds, says that each of its tomato seeds germinates with probability 0.85. A gardener plants 12 seeds in separate pots, in the same conditions. Let **X = the number of the 12 seeds that germinate**.

## Seeing a binomial distribution

<figure>
<svg viewBox="0 0 640 310" role="img" aria-labelledby="seed-title seed-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="seed-title">Probability histogram of the number of seeds that germinate out of 12, with p equal to 0.85</title>
<desc id="seed-desc">Vertical bars for 6 to 12 seeds. Heights: 6 seeds 0.004, 7 seeds 0.019, 8 seeds 0.068, 9 seeds 0.172, 10 seeds 0.292, 11 seeds 0.301 and 12 seeds 0.142. Values 0 to 5 have a combined probability below 0.001 and are not drawn. A dashed vertical line marks the mean, 10.2 seeds. A bracket shows one standard deviation either side of the mean, from 8.96 to 11.44 seeds. The distribution is skewed to the left.</desc>
<rect x="0" y="0" width="640" height="310" fill="#ffffff"/>
<line x1="60" y1="250" x2="610" y2="250" stroke="#1d2b44" stroke-width="2"/>
<line x1="60" y1="250" x2="60" y2="60" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="53" y1="250" x2="60" y2="250"/><line x1="53" y1="190" x2="60" y2="190"/><line x1="53" y1="130" x2="60" y2="130"/><line x1="53" y1="70" x2="60" y2="70"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="end">
<text x="48" y="254">0</text><text x="48" y="194">0.1</text><text x="48" y="134">0.2</text><text x="48" y="74">0.3</text>
</g>
<text x="18" y="160" font-size="14" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 18 160)">Probability</text>
<g fill="#c9d3e6" stroke="#1d2b44" stroke-width="1.5">
<rect x="85" y="247.6" width="50" height="2.4"/><rect x="160" y="238.4" width="50" height="11.6"/><rect x="235" y="209" width="50" height="41"/><rect x="310" y="146.8" width="50" height="103.2"/><rect x="385" y="74.6" width="50" height="175.4"/><rect x="460" y="69.3" width="50" height="180.7"/><rect x="535" y="164.7" width="50" height="85.3"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="110" y="241">0.004</text><text x="185" y="232">0.019</text><text x="260" y="203">0.068</text><text x="335" y="141">0.172</text><text x="404" y="69">0.292</text><text x="485" y="63">0.301</text><text x="560" y="159">0.142</text>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="110" y="270">6</text><text x="185" y="270">7</text><text x="260" y="270">8</text><text x="335" y="270">9</text><text x="410" y="270">10</text><text x="485" y="270">11</text><text x="560" y="270">12</text>
</g>
<text x="335" y="298" text-anchor="middle" font-size="14" fill="#1d2b44">X = number of seeds that germinate (out of 12)</text>
<line x1="425" y1="26" x2="425" y2="250" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<text x="425" y="20" text-anchor="middle" font-size="13" fill="#1d2b44">μ = np = 10.2</text>
<path d="M332 55 V45 H518 V55" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<text x="326" y="50" text-anchor="end" font-size="12" fill="#1d2b44">μ ± σ: 8.96 to 11.44</text>
</svg>
<figcaption>Figure 1. Binomial distribution with n = 12 and p = 0.85 for the fictional Greenrow Seeds example. Bars show P(X = x), rounded to 3 decimal places. Dashed line: the mean, 10.2 seeds. Because p is close to 1, the distribution is skewed to the left.</figcaption>
</figure>

When p is near 0.5 a binomial distribution is roughly symmetric. When p is close to 1, as here, it is skewed to the left; when p is close to 0 it is skewed to the right.

## Worked example 1: probabilities for the seed trial

**Question.** (a) Justify that X is a binomial random variable. (b) Find the probability that exactly 10 seeds germinate. (c) Find the probability that at least 11 germinate. (d) Find the probability that fewer than 10 germinate. Interpret (d) in context.

**(a)** Each seed either germinates (success) or does not (failure). The number of trials is fixed at n = 12 seeds. The seeds are in separate pots, so it is reasonable to assume one seed germinating does not affect another (independence). Each seed has the same probability of germinating, p = 0.85. So X ~ B(12, 0.85).

**(b)** P(X = 10) = ₁₂C₁₀ (0.85)¹⁰ (0.15)² = 66 × 0.19687… × 0.0225 = **0.2924**.

**(c)** P(X ≥ 11) = P(X = 11) + P(X = 12) = 0.3012 + 0.1422 = **0.4435** (unrounded values added).

**(d)** "Fewer than 10" means X ≤ 9.

P(X ≤ 9) = 1 − P(X ≥ 10) = 1 − [P(X = 10) + P(X = 11) + P(X = 12)] = 1 − 0.7358 = **0.2642**.

With technology: binomial cdf with n = 12, p = 0.85, x = 9 gives 0.2642.

**Interpretation.** If the company's claim is true, about 26% of the times a gardener plants 12 of these seeds, fewer than 10 will germinate.

**Check.** All values from 0 to 12 have probabilities adding to 1, and the most likely values (10 and 11) are next to the mean, 10.2.

## Worked example 2: binomial or not?

**Question.** For each random variable, decide whether it is binomial. Justify your answer.

**(i)** A fictional quality inspector at a pottery tests 20 mugs chosen at random from a very large day's output. Each mug is cracked with probability 0.03, independently. X = the number of cracked mugs.
**Binomial.** Two outcomes (cracked or not), n = 20 fixed, independent mugs and the same p = 0.03 for each. X ~ B(20, 0.03).

**(ii)** A player rolls a fair six-sided die until a 6 appears. Y = the number of rolls needed.
**Not binomial.** The number of trials is not fixed in advance; Y counts trials, not successes in a fixed n.

**(iii)** A box holds 8 batteries, 3 of them flat. A technician takes out 4 batteries one at a time **without replacement**. W = the number of flat batteries taken.
**Not binomial.** The trials are not independent and p changes: the first battery is flat with probability 3/8, but if it is flat, the next is flat with probability 2/7.

**(iv)** A student answers 10 questions. T = the total number of minutes spent.
**Not binomial.** T is not a count of successes; each trial does not have just two outcomes.

**Looking ahead.** When a small sample is drawn without replacement from a **very large** population, the probability hardly changes from one draw to the next, so a binomial model is still a good approximation. You will meet the condition that makes this precise in later units.

## Worked example 3: mean, standard deviation and a simulation

**Question.** (a) Calculate and interpret the mean and standard deviation of X for the Greenrow seeds. (b) A class simulated 200 plantings of 12 seeds. Use the results to estimate P(X ≤ 9) and compare with the exact value. (c) One gardener finds that only 8 of 12 seeds germinate. Does this give strong reason to doubt the company's claim?

**(a)** μ = np = 12 × 0.85 = **10.2 seeds**. σ = √[12 × 0.85 × 0.15] = √1.53 = **1.24 seeds**.

If many gardeners each planted 12 of these seeds, the mean number germinating would be about 10.2 seeds per gardener. Over many such plantings, the number that germinates typically differs from the mean of 10.2 by about 1.24 seeds.

**(b)** The simulation used two-digit random numbers 00 to 99 for each seed: 01 to 85 means "germinates" and 86 to 99 or 00 means "fails", so P(germinate) = 85/100 = 0.85. Each planting used 12 numbers. Results:

| Seeds germinating | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|
| Number of simulated plantings | 3 | 14 | 32 | 57 | 63 | 31 |

Plantings with X ≤ 9: 3 + 14 + 32 = 49. Estimate: 49 ÷ 200 = **0.245**. The exact value is 0.2642. The estimate is close but not equal, because a simulation's relative frequency varies by chance. More simulated plantings would usually give an estimate closer to 0.2642.

**(c)** P(X ≤ 8) = 0.0922. If the claim is true, 8 or fewer seeds would germinate in about 9% of plantings of 12. That is not very rare, so this one result alone does not give strong reason to doubt the claim.

## Common misconceptions

- **Leaving out ₙCₓ.** pˣ(1 − p)ⁿ⁻ˣ is the probability of one order only. Multiply by the number of orders.
- **Mixing up p and 1 − p in the powers.** The power of p is the number of successes; the power of 1 − p is the number of failures.
- **Getting the boundary wrong.** "At least 11" includes 11; "fewer than 10" stops at 9. Write the inequality before you calculate.
- **σ = np(1 − p).** That is the variance. Take the square root.
- **"Any count is binomial."** Check all four conditions. Counting until a success, or drawing without replacement from a small group, breaks a condition.
- **Writing only calculator syntax.** Name the distribution, n, p and the values: "X ~ B(12, 0.85), P(X ≤ 9) = 0.2642".
- **"The mean is the number that will happen."** np = 10.2 seeds is a long-run average over many sets of 12; it is not even a possible count.
- **"An unlikely result proves the claim is false."** A small probability gives evidence against a claim; it does not prove anything.

## Where this leads

Next, in Topic 2.11, you study the normal distribution, a model for continuous variables. Binomial counts return when you look at sample proportions later in the course. Try the [practice questions](/advanced-course-resources/statistics/2-10-binomial-distribution-practice/) now, then use the [revision notes](/advanced-course-resources/statistics/2-10-binomial-distribution-revision-notes/) and the [checklist](/advanced-course-resources/statistics/2-10-binomial-distribution-checklist/). When you are ready, move on to [The Normal Distribution](/advanced-course-resources/statistics/2-11-normal-distribution-study-guide/). To review expected values first, return to [Parameters of Random Variables](/advanced-course-resources/statistics/2-9-parameters-random-variables-study-guide/).
