---
title: "Cambridge O Level Mathematics (4024): Relative and Expected Frequencies"
resourceType: "study-guides"
subject: "mathematics"
level: ["o-levels"]
topic: "Probability"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 8.2
syllabusTopics:
  - qualification: "o-level"
    topic: "probability"
  - qualification: "o-level"
    topic: "probability"
    subtopic: "relative-and-expected-frequencies-4024"
description: "Study guide to 4024 section 8.2: relative frequency as an estimate of probability, expected frequencies, and the meanings of fair, biased and random."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers section 8.2, Relative and expected frequencies, in the Probability topic of the Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027. The syllabus asks you to understand relative frequency as an estimate of probability, for example by using the results of experiments with a spinner, and to calculate expected frequencies, for example by using a probability to estimate an expected value from a population. It also includes understanding what is meant by fair, bias and random. After this guide, use the [probability revision notes](/resources/o-level-mathematics-probability-revision-notes/) and the [relative and expected frequencies practice questions](/resources/cambridge-o-level-mathematics-4024-relative-and-expected-frequencies-practice/).

## What section 8.2 asks for

1. Calculate a relative frequency from the results of an experiment or survey.
2. Use relative frequency as an estimate of probability, and explain why more trials give a better estimate.
3. Calculate an expected frequency from a probability and a number of trials.
4. Use the words fair, biased and random correctly, and decide from data whether something might be biased.

## Relative frequency

The **frequency** of an outcome is the number of times it happens in an experiment. The **relative frequency** is that number as a fraction of the total number of trials:

```
relative frequency = frequency of the outcome / total number of trials
```

Relative frequency is a number between 0 and 1. You can write it as a fraction, a decimal or a percentage. When the experiment cannot be worked out by symmetry, such as dropping a drawing pin, relative frequency is the best estimate of the probability.

### Worked example 1

A spinner is spun 200 times and lands on red 54 times. Find the relative frequency of red.

```
relative frequency = 54/200 = 0.27
```

An estimate of the probability that the spinner lands on red is 0.27.

### Worked example 2

A drawing pin is dropped 150 times and lands point up 96 times. Estimate the probability that it lands point up.

```
96/150 = 0.64
```

This number cannot be found by counting equally likely outcomes, because a pin does not have equally likely sides. Experiment is the only way.

## More trials, a better estimate

If you repeat an experiment only a few times, the relative frequency can differ greatly from the true probability. As the number of trials increases, the relative frequency usually settles close to the true probability. This is why larger samples are more reliable.

Results from several experiments can be combined by adding the frequencies and the number of trials.

### Worked example 3

In a first experiment, 12 of 40 drawing pins land point up. In a second experiment, 52 of 160 land point up. Give the best estimate of the probability.

```
combined: 12 + 52 = 64 point up out of 40 + 160 = 200 trials
relative frequency = 64/200 = 0.32
```

Do not average 12/40 and 52/160 (0.30 and 0.325), because the second experiment is bigger and deserves more weight.

## Expected frequency

If the probability of an event is known or estimated, the number of times you expect it to happen in n trials is:

```
expected frequency = probability × number of trials
```

An expected frequency is an average over many repetitions. It does not have to be a whole number, and it does not mean the event will definitely happen that many times in a single run.

### Worked example 4

The probability that a spinner lands on red is 0.27. How many reds do you expect in 500 spins?

```
expected number = 0.27 × 500 = 135
```

### Worked example 5

The probability that an item from a factory is defective is 0.03. A batch contains 2000 items. How many defective items do you expect?

```
0.03 × 2000 = 60
```

### Worked example 6

The probability that it rains on a day in a certain month is 0.2. How many rainy days do you expect in a month of 30 days?

```
0.2 × 30 = 6 days
```

### Worked example 7

A fair dice is rolled 60 times. How many sixes do you expect?

```
P(6) = 1/6, so expected number = 1/6 × 60 = 10
```

## Estimating a population from a sample

A sample can be used to estimate a population. The proportion in the sample is the relative frequency, and the expected number in the population is that proportion times the population size.

### Worked example 8

In a survey of 50 students, 12 say they prefer a cooked lunch. Estimate how many of the 400 students in the school prefer a cooked lunch.

```
relative frequency = 12/50 = 0.24
expected number = 0.24 × 400 = 96
```

### Worked example 9

A bag has 50 counters, some red and the rest blue. A counter is drawn, its colour noted, and it is replaced. This is done 100 times, and 38 draws are red. Estimate the number of red counters in the bag.

```
relative frequency of red = 38/100 = 0.38
expected number of red = 0.38 × 50 = 19
```

Because the counter is replaced each time, the probability stays the same for every draw.

### Worked example 10

A coin is flipped and the number of heads is recorded after different numbers of flips.

| Flips | 10 | 100 | 1000 |
|---|---|---|---|
| Heads | 3 | 46 | 512 |
| Relative frequency | 0.3 | 0.46 | 0.512 |

The relative frequency moves closer to 0.5 as the number of flips grows. With only 10 flips, the result of 0.3 is a poor estimate. This pattern is the reason that the most reliable estimate uses the most trials.

### Worked example 11

A spinner has four sections with probabilities 0.4, 0.3, 0.2 and 0.1. It is spun 240 times. How many times do you expect each section?

```
0.4 × 240 = 96
0.3 × 240 = 72
0.2 × 240 = 48
0.1 × 240 = 24
check: 96 + 72 + 48 + 24 = 240
```

The expected frequencies always add up to the total number of trials, because the probabilities add up to 1.

## Fair, biased and random

- **Fair**: all outcomes are equally likely. A fair dice has probability 1/6 for each face.
- **Biased**: some outcomes are more likely than others. A dice that is weighted so that 6 comes up more often is biased.
- **Random**: chosen with no pattern or preference, so that every item has an equal chance of being picked. A random sample is not influenced by the person choosing.

### Is it biased?

Compare the relative frequencies with the expected ones for a fair situation.

### Worked example 12

A dice is rolled 120 times. The results are:

| Score | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Frequency | 15 | 18 | 21 | 17 | 30 | 19 |

Is there evidence the dice is biased?

```
total = 15 + 18 + 21 + 17 + 30 + 19 = 120
expected frequency for each score if fair = 120 × 1/6 = 20
relative frequency of 5 = 30/120 = 0.25, compared with 1/6 = 0.167
```

The score of 5 came up 30 times, 10 more than expected, which is the largest difference, so the dice may be biased towards 5. Because the results always vary by chance, a larger number of rolls would give stronger evidence. The data alone do not prove bias.

### Worked example 13

A coin is flipped 1000 times and lands heads 540 times. Is the coin necessarily biased?

```
relative frequency of heads = 540/1000 = 0.54
expected heads for a fair coin = 500
```

A difference of 40 might arise by chance. A reasonable answer is that the coin could be slightly biased, but more trials would be needed to be sure.

## Common mistakes

- Dividing by the wrong total when finding a relative frequency.
- Treating an expected frequency as a guarantee.
- Averaging two relative frequencies from samples of different sizes.
- Expecting a fair coin to give exactly equal numbers of heads and tails.
- Saying a result "proves" bias from only a small number of trials.
- Rounding expected frequencies too early, or giving them as impossible quantities when the question asks for a sensible estimate.

## Exam technique

- **Estimate** the probability: calculate the relative frequency.
- **Calculate** the expected number: multiply the probability by the number of trials.
- **Explain** or **comment**: compare data with the expected values, and mention the number of trials.
- When asked how to make the estimate more reliable, say: repeat the experiment more times.

## Next steps

Work through the [relative and expected frequencies practice questions](/resources/cambridge-o-level-mathematics-4024-relative-and-expected-frequencies-practice/) and recap with the [probability revision notes](/resources/o-level-mathematics-probability-revision-notes/).


## Syllabus reference

Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027, published by Cambridge University Press & Assessment. The relevant section is 8.2 Relative and expected frequencies.
