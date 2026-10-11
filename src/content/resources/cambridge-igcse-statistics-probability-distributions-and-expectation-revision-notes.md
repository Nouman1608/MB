---
title: "Cambridge IGCSE Statistics: Probability distributions and expectation (0479) -- Revision Notes"
seoTitle: "IGCSE Statistics 0479 Probability Distributions Notes"
resourceType: "revision-notes"
subject: "statistics"
level: ["igcse"]
topic: "Probability distributions and expectation"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0479"]
syllabusSeries: "2027"
order: 34
syllabusTopics:
  - qualification: "igcse"
    topic: "probability-distributions-0479"
description: "Condensed revision notes for Cambridge IGCSE Statistics 0479 Topic 8: distribution tables, ΣP(x) = 1, E(X), fair games and expected frequency."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

Quick recall for **Cambridge IGCSE Statistics (0479)**, based on the Cambridge IGCSE Statistics 0479 syllabus for examination in 2027, **Topic 8 Probability distributions (8.1 and 8.2)**. The [study guide](/resources/cambridge-igcse-statistics-probability-distributions-and-expectation/) has the full explanations and longer examples. Try the [practice questions](/resources/cambridge-igcse-statistics-probability-distributions-and-expectation-practice/). See also the [course hub](/boards/cambridge/igcse/statistics/), the [printable checklist](/checklists/cambridge/igcse/statistics/) and the [free diagnostics](/diagnostics/).

## Key definitions

| Term | Meaning |
|---|---|
| Random variable X | A chance-dependent quantity, such as a score, a count or an amount of money. |
| Probability distribution | A list of every value x that X can take, with P(X = x) for each, usually in a table. |
| Expectation E(X) | The average value of X over many repeats. A weighted average of the values. |
| Fair game | A game where the expected gain is zero, so the stake equals the expected payout. |
| Payout and gain | Payout is what you receive. Gain is the payout minus the stake. |

## Formulas

| Result | Formula | Syllabus |
|---|---|---|
| Probabilities add to 1 | ΣP(x) = 1 | 8.1 |
| Each probability | 0 ≤ P(x) ≤ 1 | 8.1 |
| Expectation | E(X) = Σ x P(x) | 8.2 |
| Expected frequency, n independent trials | n × p | 8.2 |
| Expected gain | E(payout) − stake | 8.2 |

## Method: build a distribution (8.1)

1. List all the values X can take.
2. Find each probability: count equally likely outcomes, or use a tree diagram and the multiplication and addition rules from Topic 7.
3. Write the table.
4. Check the probabilities add to 1.
5. If a constant is missing, set the sum equal to 1 and solve.

## Method: find E(X) (8.2)

1. Take each value of X and multiply by its probability.
2. Add the products.
3. Check the answer lies between the smallest and largest values of X.
4. Give the answer in context, with units for money.

## Small worked reminders

### Heads in three tosses of a fair coin

Let X be the number of heads. The 8 outcomes are equally likely.

| x | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| P(X = x) | 1/8 | 3/8 | 3/8 | 1/8 |

```
E(X) = (0 × 1 + 1 × 3 + 2 × 3 + 3 × 1)/8 = 12/8 = 1.5
```

Here the shortcut agrees: 3 tosses × 1/2 = 1.5. Also P(at least 2 heads) = 3/8 + 1/8 = 1/2.

### Missing probabilities from E(X)

X takes only the values 1 and 3, with E(X) = 2.4. Let P(1) = a and P(3) = b.

```
a + b = 1        and        a + 3b = 2.4
subtract:  2b = 1.4,  b = 0.7,  a = 0.3
```

### A game with a stake

You pay £2 to play. You win £5 with probability 0.3 and nothing otherwise.

```
E(payout) = 5 × 0.3 = £1.50
Expected gain = 1.50 − 2 = −£0.50 per game
```

For the game to be fair the stake would need to equal the expected payout, £1.50.

## Reminders for the two common sources of probabilities

### Tree diagram (outcomes in sequence)

Multiply along a branch. Add the branches that give the same value of X.

```
Two independent shots, P(hit) = 0.8 for the first and 0.5 for the second.
X = number of hits
P(X = 0) = 0.2 × 0.5 = 0.10
P(X = 2) = 0.8 × 0.5 = 0.40
P(X = 1) = 0.8 × 0.5 + 0.2 × 0.5 = 0.40 + 0.10 = 0.50
Total = 1.00
```

Then E(X) = 1 × 0.5 + 2 × 0.4 = 1.3. This equals 0.8 + 0.5, the sum of the two separate expected numbers of hits, which is a useful cross-check.

### Table of outcomes (two equally likely items)

List every pair in a grid, count how many pairs give each value, and divide by the total number of pairs. With a six-sided die and a coin, there are 12 pairs, so every probability is a multiple of 1/12.

## Wording to recognise

| The question says | What to do |
|---|---|
| "Show that the probabilities sum to 1" | Add every probability and state that the total is 1. |
| "Find the value of k" | Set ΣP(x) = 1 and solve. |
| "Calculate the expectation" | Work out Σ x P(x) and give the value in context. |
| "Is the game fair?" | Compare the stake with the expected payout. State your conclusion. |
| "How many do you expect?" | Use n × p, or E(X) from the distribution. |
| "Comment on your answer" | Say it is an average over many trials, not a prediction for one trial. |

## Checking list before you move on

- Does the table include every possible value of X, with no gaps?
- Is every probability between 0 and 1, and does the total equal 1?
- Does E(X) lie between the smallest and largest values of X?
- Does E(X) sit nearer the values that have the larger probabilities?
- If money is involved, have you separated payout, stake and gain, and used the right one?
- If the question asks for a total over many plays, have you multiplied the expected gain per play by the number of plays?
- Have you answered in words, with units, as the context requires?

## Must-know distinctions

- **x and X.** Capital X is the variable. Small x is one of its values.
- **Payout versus gain.** Do not forget to take the stake away when the question asks for gain or profit.
- **Expectation versus most likely value.** The value with the highest probability (the mode) is not the expectation.
- **Expectation versus an actual result.** E(X) predicts the average over many trials. It says little about one trial.
- **Possible value versus expectation.** E(X) can be a value X never takes, such as 1.5 heads.
- **Sum of probabilities versus sum of values.** ΣP(x) is always 1. Σx is not used here.

## Quick self-test

1. A distribution has P(X = x) = 0.15, 0.35, p and 0.1 for four values of x. Find p.
2. X takes the values 1, 2 and 3 with probabilities 0.2, 0.5 and 0.3. Find E(X).
3. P(X = x) = kx for x = 1, 2, 3, 4, 5. Find k.
4. Explain why a table with probabilities 0.3, 0.4 and 0.5 cannot be a probability distribution.
5. A fair coin is tossed three times. Find P(X ≥ 2), where X is the number of heads.
6. A trial succeeds with probability 0.35. How many successes do you expect in 80 independent trials?
7. You pay £2 to play a game. You win £5 with probability 0.3 and nothing otherwise. Find the expected gain.
8. Two fair coins are tossed and X is the number of tails. Write the distribution and find E(X).
9. X takes the values 1 and 3 only, with E(X) = 2.4. Find P(X = 1) and P(X = 3).
10. True or false: E(X) must be one of the values that X can take.
11. A game pays £8 with probability 1/4 and nothing otherwise. What stake makes it fair?
12. A distribution has four listed probabilities, 0.2, 0.3, 0.25 and 0.15, and one more value of X. Find the probability of the last value.

### Answers

1. p = 1 − 0.15 − 0.35 − 0.1 = **0.4**.
2. 1 × 0.2 + 2 × 0.5 + 3 × 0.3 = 0.2 + 1 + 0.9 = **2.1**.
3. 15k = 1, so **k = 1/15**.
4. The probabilities add to 1.2, which is more than 1, so ΣP(x) = 1 fails.
5. 3/8 + 1/8 = **1/2**.
6. 80 × 0.35 = **28**.
7. 5 × 0.3 − 2 = **−£0.50**. You expect to lose 50p per game.
8. P(0) = 1/4, P(1) = 1/2, P(2) = 1/4. E(X) = 0 + 1/2 + 1/2 = **1**.
9. a + b = 1 and a + 3b = 2.4 give **P(X = 1) = 0.3** and **P(X = 3) = 0.7**.
10. **False.** For example, E(X) = 1.5 heads in three tosses.
11. E(payout) = 8 × 1/4 = 2, so the fair stake is **£2**.
12. The four given probabilities add to 0.9, so the last probability is **0.1**.

## Where marks are usually lost

- Not showing the working that proves ΣP(x) = 1 when a question asks you to show or find a constant.
- Adding only one route when an outcome can happen in two ways, so the table does not total 1.
- Writing E(X) as the plain average of the x values.
- Dropping the stake: giving the expected payout when the question asks for the expected gain.
- Rounding in the middle of the working. Carry exact fractions or decimals to the final line.
- Giving a final answer with no context, for example no £ sign or no statement that the game is not fair.
- Using n × p without checking that each trial has the same probability and the trials are independent.
- Treating a negative expected gain as an actual loss on every play.
- Leaving a possible value out of the table, for example forgetting X = 0, when the question asks for every possible outcome.

## Official syllabus

Cambridge IGCSE Statistics 0479 syllabus for examination in 2027, Cambridge University Press & Assessment (Cambridge International Education), Topic 8: Probability distributions, learning outcomes 8.1 and 8.2.
