---
resourceId: "mb-ap-stats-1.11-study-guide"
title: "Random Sampling: Study Guide (Statistics 1.11)"
description: "Learn to identify, carry out and justify simple random, stratified, cluster and systematic random samples, and to tell sampling with replacement from sampling without it."
course: "statistics"
unit: 1
topics: ["1.11"]
resourceType: "study-guide"
prerequisites:
  - "Population, sample and census (Topic 1.10)"
  - "Why a randomly selected sample lets you generalise to the population (Topic 1.10)"
prerequisiteResources: ["mb-ap-stats-1.10-study-guide"]
learningObjectives:
  - "Tell sampling without replacement from sampling with replacement, and say which one a study uses"
  - "Identify a simple random, stratified, cluster or systematic random sample from a description of how it was chosen"
  - "Describe, step by step, how to select each type of random sample, including with a random number generator"
  - "Explain how strata differ from clusters"
  - "Justify which random sampling method suits a given question, population and budget"
skills: ["2"]
studyMinutes: 35
difficulty: "foundation"
calculator: "graphing"
calculatorNote: "Any random number generator works, including a calculator's random-integer function. No calculation beyond simple division is needed."
related: ["mb-ap-stats-1.11-revision-notes", "mb-ap-stats-1.11-practice", "mb-ap-stats-1.11-checklist"]
next: "mb-ap-stats-1.11-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "A random sample uses a chance process, such as a random number generator, to choose every individual."
  - "Without replacement, an individual can be chosen only once. With replacement, it goes back and could be chosen again."
  - "Simple random sample (SRS): every possible sample of size n has the same chance of being chosen."
  - "Stratified: take an SRS from every stratum (similar individuals). Cluster: pick whole clusters at random and measure everyone in them."
  - "Systematic: a random starting point, then every k-th individual on the list."
  - "The best method depends on the question, the groups in the population and the cost of reaching people."
faqs:
  - question: "Is a stratified random sample a simple random sample?"
    answer: "No. In a stratified sample some samples of size n can never happen, for example a sample taken entirely from one stratum. In an SRS every sample of size n is possible and equally likely."
  - question: "How do I remember the difference between strata and clusters?"
    answer: "Strata are similar inside and different from each other; you sample from every stratum. Clusters are each a small copy of the population; you choose some clusters and measure everyone in them."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Why choose a sample at random?

In Topic 1.10 you met the **population** (every individual you want to learn about) and the **census** (data from all of them). A census is often too slow or too expensive. So you collect data from a **sample** and use it to learn about the population.

A sample only tells you about the population if it is chosen fairly. The safest way is to let **chance** choose: a random number generator, or numbered slips of paper drawn from a well-mixed box. Chance does not have favourites. It does not prefer friendly people, people who are easy to reach or people with strong opinions. That is why a randomly selected sample lets you generalise to the population it came from.

"Random" has a precise meaning here. Asking whoever walks past, or picking names that "look random", is **haphazard**, not random. A person choosing is never a chance process.

This guide covers four random sampling methods. Each one uses chance in a different way, and each suits a different situation.

## Sampling without replacement and with replacement

Imagine 30 numbered slips in a box. You draw one slip, write down the number, and then decide what to do with the slip.

- **Sampling without replacement:** the slip stays out of the box. That individual cannot be chosen again. Every individual in the sample is different.
- **Sampling with replacement:** the slip goes back into the box and the box is mixed again. The same individual could be chosen a second time.

Surveys and most studies of people sample **without replacement**. Asking the same person twice adds no new information. With a random number generator, sampling without replacement means: if a number you already have comes up again, ignore it and carry on.

Sampling with replacement still has uses. For example, drawing a raffle ticket, putting it back, and drawing again gives every ticket the same chance on every draw. You will meet it again when you study probability and simulation.

## Simple random sample (SRS)

In a **simple random sample (SRS)** of size n, **every possible sample of size n has the same chance of being chosen**. It is the basic building block of the other methods.

**What "every sample" means.** Take a tiny population of 6 people, A to F, and choose 2. There are 15 possible pairs (AB, AC, …, EF). In an SRS, each of those 15 pairs is equally likely. Now split the 6 people into two groups of 3 and take one person from each group. Only 9 pairs are now possible. The 6 pairs that come from the same group can never be chosen. So this second method is **not** an SRS, even though every person still has the same chance of being picked.

**How to select an SRS.**

1. **List** every individual in the population.
2. **Label** them with numbers of the same length, for example 001 to 250.
3. **Use a chance process** to choose labels:
   - a random number generator that gives whole numbers from 1 to N, or
   - numbered slips of the same size, mixed well in a box, drawn without looking.
4. **Ignore repeats** (sampling without replacement) and any numbers that are not labels. Stop when you have n different individuals.
5. **Collect data** from the chosen individuals.

A good answer on paper names the population size, the labels, the tool, what to do with repeats, and when to stop.

## Stratified random sample

To take a **stratified random sample**:

1. Split the population into groups called **strata** (one group is a **stratum**). The strata do not overlap. Each one contains individuals who share a characteristic, so individuals in a stratum are similar to each other. For example, school year group, district of a town, or full-time and part-time workers.
2. Take an SRS **within every stratum**.
3. Combine the chosen individuals into one sample.

The sample size in each stratum is often in proportion to the stratum's size, but it does not have to be.

**When is it a good choice?**

- When you want results for each group as well as overall. Every stratum is guaranteed to be in the sample.
- When the variable you are measuring differs a lot **between** the strata but little **within** them. Then a stratified sample usually gives estimates that vary less from sample to sample than an SRS of the same size.

So choose strata using a characteristic that is linked to the variable you are measuring. Stratifying by the first letter of people's surnames, for example, is allowed but does not help.

## Cluster random sample

To take a **cluster random sample**:

1. Split the population into groups called **clusters**. These are often natural groups, such as classes, streets, villages or flights.
2. Take an SRS **of clusters**.
3. Collect data from **every individual** in each chosen cluster.

Ideally, each cluster is a small copy of the population: it contains the same mix of individuals, and the clusters are similar to each other.

**When is it a good choice?** When the population is spread out and reaching individuals one by one is slow or expensive. Visiting two whole villages costs far less than visiting 60 households scattered across an island. The risk: if the individuals within a cluster are alike (for example, every house on one street is the same type), a few clusters may not represent the population well.

## Systematic random sample

To take a **systematic random sample** from a list of N individuals when you want a sample of about n:

1. Work out the interval k, about N ÷ n. For 1,200 households and a sample of 60, k = 20.
2. Choose a **random starting point** between 1 and k, for example 7.
3. Take that individual and then every k-th individual after it: 7, 27, 47, … , 1,187.

The random start is what makes it a random sample. Without it, the person choosing decides who is in.

**When is it a good choice?** When individuals come in a line or a list: customers through a door, products off a production line, names in a register. It is quick and spreads the sample across the whole list. The risk: if the list has a repeating pattern that matches k, every chosen individual could be the same type. A systematic sample is not an SRS: with k = 20 there are only 20 possible samples, one for each starting point.

## Seeing the four methods side by side

<figure>
<svg viewBox="0 0 640 530" role="img" aria-labelledby="rs-title rs-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="rs-title">Four random sampling methods applied to the same 24 students</title>
<desc id="rs-desc">Four panels, each showing the same 24 students as numbered circles in a grid of 4 rows and 6 columns. The rows are year groups 9 to 12 and the columns are tutor groups T1 to T6; students are numbered 1 to 24 row by row. Selected students are filled circles and the others are hollow circles. Each method selects 8 students. Simple random sample: students 6, 7, 15, 17, 18, 19, 22 and 24, scattered with no pattern: one from Year 9, one from Year 10, three from Year 11 and three from Year 12. Stratified sample with year groups as strata, separated by dashed lines: two students from each row, numbers 4, 5, 11, 12, 13, 14, 21 and 22. Cluster sample with tutor groups as clusters: the whole of columns T1 and T5 are selected and outlined with dashed boxes, numbers 1, 7, 13, 19, 5, 11, 17 and 23. Systematic sample with interval 3 and random start 2: numbers 2, 5, 8, 11, 14, 17, 20 and 23.</desc>
<rect x="0" y="0" width="640" height="530" fill="#ffffff"/>
<text x="320" y="22" text-anchor="middle" font-size="13" fill="#1d2b44">Filled = selected, hollow = not selected. Each method picks 8 of 24 students.</text>
<rect x="20" y="40" width="290" height="230" fill="none" stroke="#1d2b44" stroke-width="1"/>
<text x="165" y="60" text-anchor="middle" font-size="13" font-weight="bold" fill="#1d2b44">Simple random sample</text>
<text x="30" y="96" font-size="11" fill="#1d2b44">Y9</text>
<text x="30" y="134" font-size="11" fill="#1d2b44">Y10</text>
<text x="30" y="172" font-size="11" fill="#1d2b44">Y11</text>
<text x="30" y="210" font-size="11" fill="#1d2b44">Y12</text>
<text x="88" y="252" text-anchor="middle" font-size="11" fill="#1d2b44">T1</text>
<text x="128" y="252" text-anchor="middle" font-size="11" fill="#1d2b44">T2</text>
<text x="168" y="252" text-anchor="middle" font-size="11" fill="#1d2b44">T3</text>
<text x="208" y="252" text-anchor="middle" font-size="11" fill="#1d2b44">T4</text>
<text x="248" y="252" text-anchor="middle" font-size="11" fill="#1d2b44">T5</text>
<text x="288" y="252" text-anchor="middle" font-size="11" fill="#1d2b44">T6</text>
<circle cx="88" cy="92" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="88" y="96" text-anchor="middle" font-size="10" fill="#1d2b44">1</text>
<circle cx="128" cy="92" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="128" y="96" text-anchor="middle" font-size="10" fill="#1d2b44">2</text>
<circle cx="168" cy="92" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="168" y="96" text-anchor="middle" font-size="10" fill="#1d2b44">3</text>
<circle cx="208" cy="92" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="208" y="96" text-anchor="middle" font-size="10" fill="#1d2b44">4</text>
<circle cx="248" cy="92" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="248" y="96" text-anchor="middle" font-size="10" fill="#1d2b44">5</text>
<circle cx="288" cy="92" r="12" fill="#1d2b44"/><text x="288" y="96" text-anchor="middle" font-size="10" fill="#ffffff">6</text>
<circle cx="88" cy="130" r="12" fill="#1d2b44"/><text x="88" y="134" text-anchor="middle" font-size="10" fill="#ffffff">7</text>
<circle cx="128" cy="130" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="128" y="134" text-anchor="middle" font-size="10" fill="#1d2b44">8</text>
<circle cx="168" cy="130" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="168" y="134" text-anchor="middle" font-size="10" fill="#1d2b44">9</text>
<circle cx="208" cy="130" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="208" y="134" text-anchor="middle" font-size="10" fill="#1d2b44">10</text>
<circle cx="248" cy="130" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="248" y="134" text-anchor="middle" font-size="10" fill="#1d2b44">11</text>
<circle cx="288" cy="130" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="288" y="134" text-anchor="middle" font-size="10" fill="#1d2b44">12</text>
<circle cx="88" cy="168" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="88" y="172" text-anchor="middle" font-size="10" fill="#1d2b44">13</text>
<circle cx="128" cy="168" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="128" y="172" text-anchor="middle" font-size="10" fill="#1d2b44">14</text>
<circle cx="168" cy="168" r="12" fill="#1d2b44"/><text x="168" y="172" text-anchor="middle" font-size="10" fill="#ffffff">15</text>
<circle cx="208" cy="168" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="208" y="172" text-anchor="middle" font-size="10" fill="#1d2b44">16</text>
<circle cx="248" cy="168" r="12" fill="#1d2b44"/><text x="248" y="172" text-anchor="middle" font-size="10" fill="#ffffff">17</text>
<circle cx="288" cy="168" r="12" fill="#1d2b44"/><text x="288" y="172" text-anchor="middle" font-size="10" fill="#ffffff">18</text>
<circle cx="88" cy="206" r="12" fill="#1d2b44"/><text x="88" y="210" text-anchor="middle" font-size="10" fill="#ffffff">19</text>
<circle cx="128" cy="206" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="128" y="210" text-anchor="middle" font-size="10" fill="#1d2b44">20</text>
<circle cx="168" cy="206" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="168" y="210" text-anchor="middle" font-size="10" fill="#1d2b44">21</text>
<circle cx="208" cy="206" r="12" fill="#1d2b44"/><text x="208" y="210" text-anchor="middle" font-size="10" fill="#ffffff">22</text>
<circle cx="248" cy="206" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="248" y="210" text-anchor="middle" font-size="10" fill="#1d2b44">23</text>
<circle cx="288" cy="206" r="12" fill="#1d2b44"/><text x="288" y="210" text-anchor="middle" font-size="10" fill="#ffffff">24</text>
<rect x="330" y="40" width="290" height="230" fill="none" stroke="#1d2b44" stroke-width="1"/>
<text x="475" y="60" text-anchor="middle" font-size="13" font-weight="bold" fill="#1d2b44">Stratified (strata = year groups)</text>
<text x="340" y="96" font-size="11" fill="#1d2b44">Y9</text>
<text x="340" y="134" font-size="11" fill="#1d2b44">Y10</text>
<text x="340" y="172" font-size="11" fill="#1d2b44">Y11</text>
<text x="340" y="210" font-size="11" fill="#1d2b44">Y12</text>
<text x="398" y="252" text-anchor="middle" font-size="11" fill="#1d2b44">T1</text>
<text x="438" y="252" text-anchor="middle" font-size="11" fill="#1d2b44">T2</text>
<text x="478" y="252" text-anchor="middle" font-size="11" fill="#1d2b44">T3</text>
<text x="518" y="252" text-anchor="middle" font-size="11" fill="#1d2b44">T4</text>
<text x="558" y="252" text-anchor="middle" font-size="11" fill="#1d2b44">T5</text>
<text x="598" y="252" text-anchor="middle" font-size="11" fill="#1d2b44">T6</text>
<line x1="338" y1="111" x2="612" y2="111" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 3"/>
<line x1="338" y1="149" x2="612" y2="149" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 3"/>
<line x1="338" y1="187" x2="612" y2="187" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 3"/>
<circle cx="398" cy="92" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="398" y="96" text-anchor="middle" font-size="10" fill="#1d2b44">1</text>
<circle cx="438" cy="92" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="438" y="96" text-anchor="middle" font-size="10" fill="#1d2b44">2</text>
<circle cx="478" cy="92" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="478" y="96" text-anchor="middle" font-size="10" fill="#1d2b44">3</text>
<circle cx="518" cy="92" r="12" fill="#1d2b44"/><text x="518" y="96" text-anchor="middle" font-size="10" fill="#ffffff">4</text>
<circle cx="558" cy="92" r="12" fill="#1d2b44"/><text x="558" y="96" text-anchor="middle" font-size="10" fill="#ffffff">5</text>
<circle cx="598" cy="92" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="598" y="96" text-anchor="middle" font-size="10" fill="#1d2b44">6</text>
<circle cx="398" cy="130" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="398" y="134" text-anchor="middle" font-size="10" fill="#1d2b44">7</text>
<circle cx="438" cy="130" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="438" y="134" text-anchor="middle" font-size="10" fill="#1d2b44">8</text>
<circle cx="478" cy="130" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="478" y="134" text-anchor="middle" font-size="10" fill="#1d2b44">9</text>
<circle cx="518" cy="130" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="518" y="134" text-anchor="middle" font-size="10" fill="#1d2b44">10</text>
<circle cx="558" cy="130" r="12" fill="#1d2b44"/><text x="558" y="134" text-anchor="middle" font-size="10" fill="#ffffff">11</text>
<circle cx="598" cy="130" r="12" fill="#1d2b44"/><text x="598" y="134" text-anchor="middle" font-size="10" fill="#ffffff">12</text>
<circle cx="398" cy="168" r="12" fill="#1d2b44"/><text x="398" y="172" text-anchor="middle" font-size="10" fill="#ffffff">13</text>
<circle cx="438" cy="168" r="12" fill="#1d2b44"/><text x="438" y="172" text-anchor="middle" font-size="10" fill="#ffffff">14</text>
<circle cx="478" cy="168" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="478" y="172" text-anchor="middle" font-size="10" fill="#1d2b44">15</text>
<circle cx="518" cy="168" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="518" y="172" text-anchor="middle" font-size="10" fill="#1d2b44">16</text>
<circle cx="558" cy="168" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="558" y="172" text-anchor="middle" font-size="10" fill="#1d2b44">17</text>
<circle cx="598" cy="168" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="598" y="172" text-anchor="middle" font-size="10" fill="#1d2b44">18</text>
<circle cx="398" cy="206" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="398" y="210" text-anchor="middle" font-size="10" fill="#1d2b44">19</text>
<circle cx="438" cy="206" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="438" y="210" text-anchor="middle" font-size="10" fill="#1d2b44">20</text>
<circle cx="478" cy="206" r="12" fill="#1d2b44"/><text x="478" y="210" text-anchor="middle" font-size="10" fill="#ffffff">21</text>
<circle cx="518" cy="206" r="12" fill="#1d2b44"/><text x="518" y="210" text-anchor="middle" font-size="10" fill="#ffffff">22</text>
<circle cx="558" cy="206" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="558" y="210" text-anchor="middle" font-size="10" fill="#1d2b44">23</text>
<circle cx="598" cy="206" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="598" y="210" text-anchor="middle" font-size="10" fill="#1d2b44">24</text>
<rect x="20" y="290" width="290" height="230" fill="none" stroke="#1d2b44" stroke-width="1"/>
<text x="165" y="310" text-anchor="middle" font-size="13" font-weight="bold" fill="#1d2b44">Cluster (clusters = tutor groups)</text>
<text x="30" y="346" font-size="11" fill="#1d2b44">Y9</text>
<text x="30" y="384" font-size="11" fill="#1d2b44">Y10</text>
<text x="30" y="422" font-size="11" fill="#1d2b44">Y11</text>
<text x="30" y="460" font-size="11" fill="#1d2b44">Y12</text>
<text x="88" y="502" text-anchor="middle" font-size="11" fill="#1d2b44">T1</text>
<text x="128" y="502" text-anchor="middle" font-size="11" fill="#1d2b44">T2</text>
<text x="168" y="502" text-anchor="middle" font-size="11" fill="#1d2b44">T3</text>
<text x="208" y="502" text-anchor="middle" font-size="11" fill="#1d2b44">T4</text>
<text x="248" y="502" text-anchor="middle" font-size="11" fill="#1d2b44">T5</text>
<text x="288" y="502" text-anchor="middle" font-size="11" fill="#1d2b44">T6</text>
<rect x="71" y="323" width="34" height="152" rx="6" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 3"/>
<rect x="231" y="323" width="34" height="152" rx="6" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 3"/>
<circle cx="88" cy="342" r="12" fill="#1d2b44"/><text x="88" y="346" text-anchor="middle" font-size="10" fill="#ffffff">1</text>
<circle cx="128" cy="342" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="128" y="346" text-anchor="middle" font-size="10" fill="#1d2b44">2</text>
<circle cx="168" cy="342" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="168" y="346" text-anchor="middle" font-size="10" fill="#1d2b44">3</text>
<circle cx="208" cy="342" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="208" y="346" text-anchor="middle" font-size="10" fill="#1d2b44">4</text>
<circle cx="248" cy="342" r="12" fill="#1d2b44"/><text x="248" y="346" text-anchor="middle" font-size="10" fill="#ffffff">5</text>
<circle cx="288" cy="342" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="288" y="346" text-anchor="middle" font-size="10" fill="#1d2b44">6</text>
<circle cx="88" cy="380" r="12" fill="#1d2b44"/><text x="88" y="384" text-anchor="middle" font-size="10" fill="#ffffff">7</text>
<circle cx="128" cy="380" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="128" y="384" text-anchor="middle" font-size="10" fill="#1d2b44">8</text>
<circle cx="168" cy="380" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="168" y="384" text-anchor="middle" font-size="10" fill="#1d2b44">9</text>
<circle cx="208" cy="380" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="208" y="384" text-anchor="middle" font-size="10" fill="#1d2b44">10</text>
<circle cx="248" cy="380" r="12" fill="#1d2b44"/><text x="248" y="384" text-anchor="middle" font-size="10" fill="#ffffff">11</text>
<circle cx="288" cy="380" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="288" y="384" text-anchor="middle" font-size="10" fill="#1d2b44">12</text>
<circle cx="88" cy="418" r="12" fill="#1d2b44"/><text x="88" y="422" text-anchor="middle" font-size="10" fill="#ffffff">13</text>
<circle cx="128" cy="418" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="128" y="422" text-anchor="middle" font-size="10" fill="#1d2b44">14</text>
<circle cx="168" cy="418" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="168" y="422" text-anchor="middle" font-size="10" fill="#1d2b44">15</text>
<circle cx="208" cy="418" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="208" y="422" text-anchor="middle" font-size="10" fill="#1d2b44">16</text>
<circle cx="248" cy="418" r="12" fill="#1d2b44"/><text x="248" y="422" text-anchor="middle" font-size="10" fill="#ffffff">17</text>
<circle cx="288" cy="418" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="288" y="422" text-anchor="middle" font-size="10" fill="#1d2b44">18</text>
<circle cx="88" cy="456" r="12" fill="#1d2b44"/><text x="88" y="460" text-anchor="middle" font-size="10" fill="#ffffff">19</text>
<circle cx="128" cy="456" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="128" y="460" text-anchor="middle" font-size="10" fill="#1d2b44">20</text>
<circle cx="168" cy="456" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="168" y="460" text-anchor="middle" font-size="10" fill="#1d2b44">21</text>
<circle cx="208" cy="456" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="208" y="460" text-anchor="middle" font-size="10" fill="#1d2b44">22</text>
<circle cx="248" cy="456" r="12" fill="#1d2b44"/><text x="248" y="460" text-anchor="middle" font-size="10" fill="#ffffff">23</text>
<circle cx="288" cy="456" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="288" y="460" text-anchor="middle" font-size="10" fill="#1d2b44">24</text>
<rect x="330" y="290" width="290" height="230" fill="none" stroke="#1d2b44" stroke-width="1"/>
<text x="475" y="310" text-anchor="middle" font-size="13" font-weight="bold" fill="#1d2b44">Systematic (k = 3, start at 2)</text>
<text x="340" y="346" font-size="11" fill="#1d2b44">Y9</text>
<text x="340" y="384" font-size="11" fill="#1d2b44">Y10</text>
<text x="340" y="422" font-size="11" fill="#1d2b44">Y11</text>
<text x="340" y="460" font-size="11" fill="#1d2b44">Y12</text>
<text x="398" y="502" text-anchor="middle" font-size="11" fill="#1d2b44">T1</text>
<text x="438" y="502" text-anchor="middle" font-size="11" fill="#1d2b44">T2</text>
<text x="478" y="502" text-anchor="middle" font-size="11" fill="#1d2b44">T3</text>
<text x="518" y="502" text-anchor="middle" font-size="11" fill="#1d2b44">T4</text>
<text x="558" y="502" text-anchor="middle" font-size="11" fill="#1d2b44">T5</text>
<text x="598" y="502" text-anchor="middle" font-size="11" fill="#1d2b44">T6</text>
<circle cx="398" cy="342" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="398" y="346" text-anchor="middle" font-size="10" fill="#1d2b44">1</text>
<circle cx="438" cy="342" r="12" fill="#1d2b44"/><text x="438" y="346" text-anchor="middle" font-size="10" fill="#ffffff">2</text>
<circle cx="478" cy="342" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="478" y="346" text-anchor="middle" font-size="10" fill="#1d2b44">3</text>
<circle cx="518" cy="342" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="518" y="346" text-anchor="middle" font-size="10" fill="#1d2b44">4</text>
<circle cx="558" cy="342" r="12" fill="#1d2b44"/><text x="558" y="346" text-anchor="middle" font-size="10" fill="#ffffff">5</text>
<circle cx="598" cy="342" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="598" y="346" text-anchor="middle" font-size="10" fill="#1d2b44">6</text>
<circle cx="398" cy="380" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="398" y="384" text-anchor="middle" font-size="10" fill="#1d2b44">7</text>
<circle cx="438" cy="380" r="12" fill="#1d2b44"/><text x="438" y="384" text-anchor="middle" font-size="10" fill="#ffffff">8</text>
<circle cx="478" cy="380" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="478" y="384" text-anchor="middle" font-size="10" fill="#1d2b44">9</text>
<circle cx="518" cy="380" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="518" y="384" text-anchor="middle" font-size="10" fill="#1d2b44">10</text>
<circle cx="558" cy="380" r="12" fill="#1d2b44"/><text x="558" y="384" text-anchor="middle" font-size="10" fill="#ffffff">11</text>
<circle cx="598" cy="380" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="598" y="384" text-anchor="middle" font-size="10" fill="#1d2b44">12</text>
<circle cx="398" cy="418" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="398" y="422" text-anchor="middle" font-size="10" fill="#1d2b44">13</text>
<circle cx="438" cy="418" r="12" fill="#1d2b44"/><text x="438" y="422" text-anchor="middle" font-size="10" fill="#ffffff">14</text>
<circle cx="478" cy="418" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="478" y="422" text-anchor="middle" font-size="10" fill="#1d2b44">15</text>
<circle cx="518" cy="418" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="518" y="422" text-anchor="middle" font-size="10" fill="#1d2b44">16</text>
<circle cx="558" cy="418" r="12" fill="#1d2b44"/><text x="558" y="422" text-anchor="middle" font-size="10" fill="#ffffff">17</text>
<circle cx="598" cy="418" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="598" y="422" text-anchor="middle" font-size="10" fill="#1d2b44">18</text>
<circle cx="398" cy="456" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="398" y="460" text-anchor="middle" font-size="10" fill="#1d2b44">19</text>
<circle cx="438" cy="456" r="12" fill="#1d2b44"/><text x="438" y="460" text-anchor="middle" font-size="10" fill="#ffffff">20</text>
<circle cx="478" cy="456" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="478" y="460" text-anchor="middle" font-size="10" fill="#1d2b44">21</text>
<circle cx="518" cy="456" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="518" y="460" text-anchor="middle" font-size="10" fill="#1d2b44">22</text>
<circle cx="558" cy="456" r="12" fill="#1d2b44"/><text x="558" y="460" text-anchor="middle" font-size="10" fill="#ffffff">23</text>
<circle cx="598" cy="456" r="12" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="598" y="460" text-anchor="middle" font-size="10" fill="#1d2b44">24</text>
</svg>
<figcaption>Figure 1. The same 24 students of a fictional school sampled four ways. Rows are year groups (similar students, so they make good strata). Columns are mixed-age tutor groups (each one is like the whole population, so they make good clusters). Students are numbered 1 to 24 along the rows for the systematic sample.</figcaption>
</figure>

Notice that the SRS happened to include only one student each from Years 9 and 10, but three each from Years 11 and 12. Chance can do that. The stratified sample makes sure each year group gives exactly two students.

## Strata versus clusters

| | Strata | Clusters |
|---|---|---|
| Individuals inside a group | similar to each other | a mix, like the population |
| Groups compared with each other | different | similar |
| What is chosen at random | individuals within **every** stratum | **some** whole clusters |
| Who gives data | the chosen individuals in each stratum | everyone in the chosen clusters |
| Main reason to use it | results for each group; more precise estimates | lower cost and effort |

## Choosing a method: justifying your choice

There is no single best method. Each method fits a different question and population.

| Situation | A suitable method | Why |
|---|---|---|
| A full list exists and no groups matter | SRS | simple; every sample of size n equally likely |
| Groups differ on the variable, or results are needed for each group | Stratified | every group represented; precise estimates |
| Population spread out in natural, mixed groups; visits are costly | Cluster | far fewer places to visit |
| Individuals arrive in a line or appear on a long list | Systematic | quick, spread across the list |

When you justify a choice, link it to **this** population and **this** question. "Stratified is more accurate" earns little. "Stratify by district, because water use is likely to be higher in the district where houses have gardens, so every district is represented" is a full justification.

## Worked example 1: selecting an SRS with random digits

**Question.** The fictional Maple Lane Running Club has 250 members. The secretary wants to phone an SRS of 5 members to ask about training times. Use this line of random digits to choose the sample. Explain each step.

**04417 78308 48216 09221 64076 88203 14897 05728**

1. **Label.** Give the members three-digit labels 001 to 250, using the club's membership list. Three digits are needed because 250 has three digits.
2. **Read the digits** from the left in groups of three, ignoring the spaces: 044, 177, 830, 848, 216, 092, 216, 407, 688, 203, …
3. **Apply the rules.** Use a group if it is between 001 and 250. Skip 000 and anything from 251 to 999. Skip a label that is already chosen, because each member should be phoned only once (sampling without replacement).

| Group | Decision |
|---|---|
| 044 | take |
| 177 | take |
| 830 | skip: not a label |
| 848 | skip: not a label |
| 216 | take |
| 092 | take |
| 216 | skip: repeat |
| 407 | skip: not a label |
| 688 | skip: not a label |
| 203 | take, 5 members found, stop |

4. **Result.** Phone the members labelled 044, 177, 216, 092 and 203.

**With technology instead.** Generate random whole numbers from 1 to 250. Ignore repeats. Stop when you have 5 different numbers. Phone those members.

**Check.** Five different labels, all between 001 and 250. Each label had the same chance at each step, so every group of 5 members was equally likely: this is an SRS.

## Worked example 2: identifying and justifying sampling methods

**Question.** The water authority in the fictional town of Ostervale wants to estimate the mean daily water use per household. Its list has 1,200 households in three districts: Riverside (240 households, large houses with gardens), Central (600 households, mostly flats) and Hillside (360 households). It can afford a sample of 60. Four plans are proposed.

- **Plan P.** Number the households 1 to 1,200. A random number generator chooses 60 different numbers.
- **Plan Q.** A random number from 1 to 20 is chosen; it is 7. The sample is households 7, 27, 47, … , 1,187 on the list.
- **Plan R.** Choose 12 households at random in Riverside, 30 in Central and 18 in Hillside.
- **Plan S.** The town has 40 streets of 30 households. Choose 2 streets at random and measure every household on them.

(a) Name the sampling method in each plan. (b) The authority expects Riverside households to use much more water, and it wants an estimate for each district as well as for the town. Which plan should it use? Justify your answer. (c) Plan S is the cheapest. Explain one risk of using it.

**(a)**

1. **Plan P: simple random sample.** Every set of 60 households is equally likely.
2. **Plan Q: systematic random sample.** Random start 7, interval k = 1,200 ÷ 60 = 20. This gives exactly 60 households.
3. **Plan R: stratified random sample**, with the districts as strata. The sizes are in proportion: 240 ÷ 1,200 = 0.2, and 0.2 × 60 = 12; 0.5 × 60 = 30; 0.3 × 60 = 18. Check: 12 + 30 + 18 = 60.
4. **Plan S: cluster random sample**, with streets as clusters. 2 × 30 = 60 households.

**(b)** **Plan R.** Water use probably differs between districts (gardens in Riverside), so the districts are sensible strata: households within a district are similar to each other. Plan R guarantees 12, 30 and 18 households from the three districts, so the authority can estimate the mean for each district. An SRS might, by chance, include very few Riverside households, giving a poor estimate for that district.

**(c)** Households on the same street are likely to be alike, because a street lies in one district and usually has one type of housing. With only 2 streets, the whole sample could come from Central, with no houses with gardens at all. The clusters do not mirror the town, so the estimate for the town could be far too low or too high.

**Check.** Each plan selects 60 households. Every plan uses chance, so each is a random sample; they differ in **how** chance is used.

## Common misconceptions

- **"Random means haphazard."** Stopping whoever passes, or picking names that "look random", is not random sampling. Chance must make every choice.
- **"Every individual has the same chance, so it is an SRS."** Stratified and systematic samples can give each individual the same chance too. An SRS needs every **sample** of size n to be equally likely.
- **Mixing up strata and clusters.** Strata are similar inside, and you sample from all of them. Clusters are mixed inside, and you take all of a few of them.
- **"In a cluster sample, take a few people from each cluster."** That describes a stratified-style plan. In a cluster sample you choose clusters at random and measure **everyone** in them.
- **"A systematic sample does not need chance."** It needs a random starting point between 1 and k.
- **Labels of different lengths.** Labels 1 to 250 read from a digit line as 1, 2, 3, … cause confusion. Use 001 to 250 so every label has three digits.
- **Keeping repeats when sampling people.** Unless the question says "with replacement", ignore a label that comes up twice.
- **"Stratify by anything."** Strata help only when they are linked to the variable being measured.

## Where this leads

Next, Topic 1.12 looks at what goes wrong with sampling: how bias arises from nonrandom samples, undercoverage and nonresponse. Start with the [Topic 1.12 study guide](/advanced-course-resources/statistics/1-12-potential-problems-sampling-study-guide/). Random selection returns when you study sampling distributions and inference later in the course. Try the [practice questions](/advanced-course-resources/statistics/1-11-random-sampling-practice/) now, then use the [revision notes](/advanced-course-resources/statistics/1-11-random-sampling-revision-notes/) and the [checklist](/advanced-course-resources/statistics/1-11-random-sampling-checklist/) to consolidate. If you need to review populations, censuses and generalisation first, see the [Topic 1.10 study guide](/advanced-course-resources/statistics/1-10-investigative-question-revisited-data-collection-study-guide/).
