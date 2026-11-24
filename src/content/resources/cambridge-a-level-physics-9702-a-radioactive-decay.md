---
title: "Cambridge A Level Physics (9702): Radioactive decay"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Nuclear physics"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 23.2
syllabusTopics:
  - qualification: "a-level"
    topic: "a-nuclear-physics"
    subtopic: "a-radioactive-decay"
description: "A focused guide to 23.2 Radioactive decay in Cambridge A Level Physics 9702: randomness, activity, decay constant, half-life and exponential decay calculations."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **23.2 Radioactive decay** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (A Level). The broader [Nuclear Physics study guide](/resources/a-physics-nuclear-physics/) gives the main equations; this page goes further into what "random" and "spontaneous" mean and how to show them, the precise definitions examiners want, finding the number of nuclei from a mass, solving decay problems that do not involve whole numbers of half-lives, and handling count rates and background. For quick recall use the [Radioactive decay revision notes](/resources/cambridge-a-level-physics-9702-a-radioactive-decay-revision-notes/), and for exam-style questions the [Radioactive decay practice questions](/resources/cambridge-a-level-physics-9702-a-radioactive-decay-practice/).

## What 23.2 asks you to do

The syllabus lists six outcomes. Candidates should be able to:

- understand that **fluctuations in count rate** provide evidence for the random nature of radioactive decay
- understand that radioactive decay is both **spontaneous and random**
- define **activity** and **decay constant**, and recall and use **A = λN**
- define **half-life**
- use **λ = 0.693/t½**
- understand the **exponential** nature of radioactive decay, and sketch and use **x = x₀e^(−λt)**, where x could represent activity, number of undecayed nuclei or received count rate

The equations for radioactive decay and the decay constant appear on the A Level data sheet; the definitions do not, so they must be learned.

## Random and spontaneous

These two words mean different things, and a question may ask for both.

- **Random**: it is impossible to predict **when** a particular nucleus will decay, or which nucleus in a sample will decay next. Each nucleus has the same constant probability of decaying in a given time, whatever has happened before.
- **Spontaneous**: the decay is **not affected by external conditions** such as temperature, pressure, or the chemical compound the atom is part of. Nothing outside the nucleus triggers it.

### Evidence from fluctuations in count rate

Place a Geiger-Müller tube near a long-lived source and record the number of counts in, say, ten consecutive 10 s intervals. The readings vary: for example 212, 197, 225, 204, 189 and so on, scattered around a mean. Because the source's activity hardly changes over the experiment, the variations cannot be caused by the source running down. They show that the number of nuclei decaying in each interval varies unpredictably, which is what random decay predicts.

Notice what this experiment does **not** show: it gives no information about spontaneity. To test that, you would have to change the conditions (heat the source, for example) and find the activity unchanged.

## Activity and the decay constant

Learn these definitions word for word:

- **Activity** A: the number of nuclei that decay per unit time. Unit: the **becquerel**, 1 Bq = 1 decay per second (s⁻¹).
- **Decay constant** λ: the probability that an individual nucleus will decay per unit time. Unit: s⁻¹ (or h⁻¹, year⁻¹ to match the time unit used).

Because each nucleus has probability λ per unit time of decaying, a sample of N undecayed nuclei has, on average, λN decays per unit time:

```
A = λN
```

**Units must match.** If A is in Bq (per second), λ must be in s⁻¹. A decay constant found from a half-life in days must be converted before using A = λN with activity in becquerels.

## Half-life

**Half-life** t½: the time taken for the number of undecayed nuclei of an isotope (or its activity) to fall to half of its initial value.

Starting from N = N₀e^(−λt) and setting N = N₀/2 at t = t½:

```
½ = e^(−λt½)    so    ln 2 = λt½    and    λ = 0.693 / t½
```

A short half-life means a large decay constant: the nuclei are more likely to decay in each second.

## The exponential decay law

```
x = x₀ e^(−λt)
```

Here x can be the **number of undecayed nuclei**, the **activity**, or the **received count rate**. All three fall by the same factor in the same time, because A = λN and the count rate is a fixed fraction of the activity for a given detector set-up.

### Sketching the curve

A sketch of x against t must show:

- a curve starting at x₀ on the vertical axis
- the value falling to x₀/2 after one half-life, x₀/4 after two, x₀/8 after three, at **equal time intervals**
- a gradient that becomes less steep with time
- the curve approaching but **never reaching** zero

### The logarithmic graph

Taking natural logarithms gives ln x = ln x₀ − λt. A graph of **ln x against t is a straight line** with gradient −λ and intercept ln x₀. This is the best way to find λ from experimental data, because a straight line can be checked by eye and averages out scatter.

## Worked example 1: activity from mass

A sample contains 1.0 μg of an isotope with molar mass 131 g mol⁻¹ and half-life 8.0 days. Calculate the activity of the sample.

```
N = (mass / molar mass) × N_A = (1.0 × 10⁻⁶ / 131) × 6.02 × 10²³ = 4.60 × 10¹⁵
t½ = 8.0 × 24 × 3600 = 6.91 × 10⁵ s
λ = 0.693 / 6.91 × 10⁵ = 1.00 × 10⁻⁶ s⁻¹
A = λN = 1.00 × 10⁻⁶ × 4.60 × 10¹⁵ = 4.6 × 10⁹ Bq
```

*Annotation.* The mass is in grams to match the molar mass in g mol⁻¹. The half-life must be in seconds because the answer is in becquerels.

## Worked example 2: a time that is not a whole number of half-lives

A source has a half-life of 6.0 hours. How long does its activity take to fall from 800 Bq to 150 Bq?

```
λ = 0.693 / 6.0 = 0.1155 h⁻¹
150 = 800 e^(−0.1155 t)
ln(800/150) = 0.1155 t
t = 1.674 / 0.1155 = 14.5 h
```

*Annotation.* Check with half-lives: 800 → 400 → 200 → 100 Bq takes 18 h, and 150 Bq lies between 12 h and 18 h, so 14.5 h is sensible. Here it is fine to keep λ in h⁻¹, since no activity in becquerels is calculated from N.

## Worked example 3: count rate and background

A detector registers 20 counts per minute with no source present. With the source in place it registers 520 counts per minute, falling to 145 counts per minute after 30 minutes. Find the half-life.

```
corrected count rate at start = 520 − 20 = 500 min⁻¹
corrected count rate after 30 min = 145 − 20 = 125 min⁻¹
500 → 250 → 125 is two half-lives in 30 min, so t½ = 15 min
```

*Annotation.* Without the correction, 520 → 145 is a factor of 3.6, giving a wrong half-life. Background is subtracted from every reading **before** any decay calculation.

## Common mistakes

- **Defining half-life as "half the time for a sample to decay"** or "the time for the mass to halve". It is the time for the number of undecayed nuclei (or activity) to halve; the sample's mass hardly changes, because the daughter nuclei remain.
- **Defining the decay constant as "the rate of decay"**. It is a probability per unit time for one nucleus.
- **Mixing time units**, such as λ in day⁻¹ with A in Bq.
- **Saying random means "nobody knows what will happen"** without the specific idea of being unable to predict which nucleus decays or when.
- **Confusing random with spontaneous.**
- **Forgetting to subtract background count rate.**
- **Sketching a straight line or a curve that reaches zero.**

## Exam technique for the command words

- **Define** (activity, decay constant, half-life): learn the exact wording above.
- **State** (what is meant by spontaneous): not affected by external factors such as temperature or pressure.
- **Explain** (how fluctuations show randomness): readings in equal time intervals vary unpredictably about a mean, although the activity is effectively constant.
- **Sketch** (decay curve): equal half-life intervals, asymptote to zero, labelled axes.
- **Calculate**: write x = x₀e^(−λt), substitute, take logarithms, and check units.
- **Determine** (λ from a graph): plot ln(count rate) against time; λ = −gradient.

## More resources on this topic

- [Nuclear Physics study guide](/resources/a-physics-nuclear-physics/) — the whole of Topic 23
- [Radioactive decay revision notes](/resources/cambridge-a-level-physics-9702-a-radioactive-decay-revision-notes/)
- [Radioactive decay practice questions](/resources/cambridge-a-level-physics-9702-a-radioactive-decay-practice/)
- [Mass defect and nuclear binding energy](/resources/cambridge-a-level-physics-9702-a-mass-defect-and-nuclear-binding-energy/) — subtopic 23.1
- [Capacitance](/resources/a-physics-capacitance/) — the same exponential decay mathematics for capacitor discharge
- [PET scanning](/resources/cambridge-a-level-physics-9702-a-pet-scanning/) — radioactive tracers in medicine

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
