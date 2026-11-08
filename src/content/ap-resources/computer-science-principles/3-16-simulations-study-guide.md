---
resourceId: "mb-ap-csp-3.16-study-guide"
title: "Simulations: Study Guide (Computer Science Principles 3.16)"
description: "What simulations are, why they simplify the real world, how random numbers add variability, how bias enters through what is included or excluded, and when simulations are most useful. Two worked examples."
course: "computer-science-principles"
unit: 3
topics: ["3.16"]
resourceType: "study-guide"
prerequisites:
  - "Random values (Topic 3.15)"
  - "Iteration (Topic 3.8)"
prerequisiteResources: ["mb-ap-csp-3.15-study-guide"]
learningObjectives:
  - "Explain what a simulation is and when it is most useful"
  - "Describe how abstraction (removing detail) shapes a simulation"
  - "Explain how random numbers represent real-world variability"
  - "Identify sources of bias and compare a simulation with the real world"
skills: ["1"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.16-revision-notes", "mb-ap-csp-3.16-practice", "mb-ap-csp-3.16-checklist"]
next: "mb-ap-csp-3.16-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "A simulation is an abstraction of a more complex object or phenomenon for a specific purpose."
  - "Developing one involves removing specific details or simplifying functionality."
  - "Simulations are most useful when real-world experiments are impractical: too big, small, fast, slow, expensive or dangerous."
  - "Random number generators represent the variability of the real world; one run is one possible outcome."
  - "Simulations can contain bias from the choices about which real-world elements were included or excluded."
faqs:
  - question: "What is a simulation?"
    answer: "A representation, built for a specific purpose, that uses varying sets of values to imitate the changing state of a more complex object or phenomenon."
  - question: "Why use random numbers in a simulation?"
    answer: "They represent the variability that exists in the real world, such as irregular arrival times or weather."
  - question: "How can a simulation be biased?"
    answer: "Bias can come from the choices about which real-world elements are included or left out, so the model gives results that differ systematically from reality."
  - question: "When is a simulation better than a real experiment?"
    answer: "When the real event is too big, small, fast, slow, expensive or dangerous to experiment on directly."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Engineers cannot crash a hundred real aircraft to test a new wing design, doctors cannot try a drug on millions of patients before knowing how it spreads, and astronomers cannot run a galaxy forward a billion years. Instead they build **simulations**: programs that imitate a real thing so that you can experiment on the imitation. This topic explains what a simulation is, why it always simplifies the real world, how random numbers add realistic variation, and how to judge what a simulation can and cannot tell you.

**Notation.** The exam uses its own pseudocode, not a real programming language. The code in this pack is Marlbridge's rendering of that reference notation, not a copy of the official sheet: `←` is assignment, `=` tests equality, lists start at index 1, `DISPLAY` shows a value, and braces mark blocks. Use the Exam Reference Sheet from your teacher for the official wording.

## What a simulation is

A **simulation** is an **abstraction** of a more complex object or phenomenon, built for a specific purpose. It is a representation that uses **varying sets of values** to reflect the **changing state** of the phenomenon. A flight simulator keeps track of height, speed and wind; a weather simulation keeps track of temperature and pressure on a grid; a queue simulation keeps track of how many people are waiting.

Simulations are used to **draw inferences**: to find out what is likely to happen. They allow you to investigate a phenomenon **without the constraints of the real world**, and they are most useful when the real-world event is impractical to experiment on because it is:

- too **big** or too **small** (a galaxy; the inside of a cell);
- too **fast** or too **slow** (a car crash; the movement of continents);
- too **expensive** or too **dangerous** (testing a spacecraft; the spread of a disease).

Simulations also **facilitate the formulation and refinement of hypotheses**. You can try "what if the speed limit were lower?" in seconds, see a result, and use it to decide what to test in the real world.

## Abstraction: what to leave out

Every simulation is an **abstraction**, so building one means **removing specific details or simplifying functionality**. A traffic simulation might track only each car's position and speed, ignoring its colour, its passengers and the radio station. That is a good choice, because those details do not affect traffic flow. The skill is to keep the details that matter to the question and to leave out the rest.

Because details are chosen by people, a simulation can contain **bias**. Bias in a simulation comes from the choices of which real-world elements were **included or excluded**. If a flood simulation leaves out blocked drains, it will under-predict flooding. The program can be perfectly correct and still give misleading answers because the *model* is incomplete.

## Random numbers and variability

The real world is full of variability: not every day brings the same weather, and not every shopper arrives at the same minute. **Random number generators can be used to simulate the variability that exists in the real world.** The exam notation has `RANDOM(a, b)` for this (Topic 3.15). Because results vary, one run of a simulation is a single possible outcome. Running it many times shows what is *typical* and how much it varies.

<figure>
<svg viewBox="0 0 702 120" role="img" aria-labelledby="f316-t f316-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="14">
<title id="f316-t">Using a simulation</title>
<desc id="f316-d">Four boxes in a row joined by arrows. Box 1: real situation, too big, small, fast, slow, costly or dangerous to test. Box 2: simplify it into a model by removing details and choosing what to include. Box 3: run the simulation with random values for variability. Box 4: draw inferences and compare with the real world to refine the model. An arrow returns from box 4 to box 2 to show refinement.</desc>
<rect x="0" y="0" width="702" height="120" fill="#ffffff"/>
<defs><marker id="f316-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="20" y="25" width="140" height="70" rx="8" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="90.0" y="57.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">Real situation</text><text x="90.0" y="74.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">(hard to test)</text><line x1="160" y1="60.0" x2="191" y2="60.0" stroke="#1d2b44" stroke-width="2" marker-end="url(#f316-a)"/><text x="177.0" y="18" text-anchor="middle" font-size="11" font-weight="normal" fill="#1d2b44">abstract</text><rect x="194" y="25" width="140" height="70" rx="8" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="264.0" y="49.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">Model</text><text x="264.0" y="66.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">simplify, choose</text><text x="264.0" y="83.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">what to include</text><line x1="334" y1="60.0" x2="365" y2="60.0" stroke="#1d2b44" stroke-width="2" marker-end="url(#f316-a)"/><text x="351.0" y="18" text-anchor="middle" font-size="11" font-weight="normal" fill="#1d2b44">run</text><rect x="368" y="25" width="140" height="70" rx="8" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="438.0" y="57.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">Run with</text><text x="438.0" y="74.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">RANDOM values</text><line x1="508" y1="60.0" x2="539" y2="60.0" stroke="#1d2b44" stroke-width="2" marker-end="url(#f316-a)"/><text x="525.0" y="18" text-anchor="middle" font-size="11" font-weight="normal" fill="#1d2b44">check</text><rect x="542" y="25" width="140" height="70" rx="8" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="612.0" y="57.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">Infer and compare</text><text x="612.0" y="74.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">with the real world</text>
</svg>
<figcaption>Figure 1. The simulation cycle: abstract the situation, run the model with random variation, then interpret and refine.</figcaption>
</figure>

## Worked example 1: a simple simulation

A weather game uses a simulation of 10 days. Each day has a 30% chance of rain, modelled by `RANDOM(1, 10) ≤ 3` (three of ten equally likely values). Count the rainy days.

```text
rainy ← 0
REPEAT 10 TIMES
{
  IF(RANDOM(1, 10) ≤ 3)
  {
    rainy ← rainy + 1
  }
}
DISPLAY(rainy)
```

Because the result depends on `RANDOM`, we cannot state *the* output. We can trace one run by supposing the ten calls returned, in order, 2, 9, 5, 1, 7, 10, 3, 8, 6, 4:

| Day | `RANDOM(1, 10)` | `≤ 3`? | `rainy` after |
|---|---|---|---|
| 1 | 2 | true | 1 |
| 2 | 9 | false | 1 |
| 3 | 5 | false | 1 |
| 4 | 1 | true | 2 |
| 5 | 7 | false | 2 |
| 6 | 10 | false | 2 |
| 7 | 3 | true | 3 |
| 8 | 8 | false | 3 |
| 9 | 6 | false | 3 |
| 10 | 4 | false | 3 |

**Step 1.** In this run the values 2, 1 and 3 are at most 3, so there are 3 rainy days: `3`.

**Step 2. Expect variation.** The expected number of rainy days is 10 × 0.3 = 3, but real runs vary. When Marlbridge ran the program five times with different random sequences it counted 3, 4, 2, 5 and 4 rainy days. One run is one possible outcome; many runs show the typical range.

**Step 3. What the model leaves out.** Real rain comes in spells (a wet day makes another more likely) and depends on the season. This simulation treats each day as independent, so it may predict too many isolated rainy days and too few long wet spells. That simplification is a source of **bias**.

**Check.** The count (3) matches the expected value, and the table shows every `≤ 3` result, so no rainy day was missed.

## Worked example 2: judging a simulation

A school canteen manager builds a simulation of the lunch queue to decide whether to hire another server. The model assumes:

- a student arrives each minute with a 50% chance (`RANDOM(1, 2) = 1`);
- one server serves exactly one student per minute;
- students always wait, however long the queue.

**Step 1. Say what it includes and excludes, and the effect.**

| Real-world detail | In the model? | Likely effect on results |
|---|---|---|
| Random arrivals | Yes (via RANDOM) | Captures variability from minute to minute |
| Rush when a class is dismissed | No | Real queues are longer at the start of lunch, so the model **under-estimates** waiting |
| Students who give up and leave when the queue is long | No | Real queue lengths are **shorter** than modelled at the worst times |
| Time to pay differs by student | No (fixed 1 minute) | Real service is slower for some students, so waiting is **under-estimated** |
| Server breaks | No | Real capacity is lower for short periods |

**Step 2. Draw a conclusion.** Two of the omissions push the real queue to be *longer* than modelled and one pushes it to be *shorter*. Overall the model probably under-estimates the peak queue, so using it alone could lead to the wrong decision about hiring.

**Step 3. Improve the model.** Make arrival probability higher for the first 10 minutes, add a random service time, let students leave above a queue length, then **compare the output with real counts** collected on a few days. If they disagree, refine the model again.

**Step 4. Is a simulation appropriate?** Yes: it is quick and cheap to test different numbers of servers, and a real experiment (hiring and firing staff to see what happens) would be expensive. But the answer is only as good as the choices made about what to include. A simulation **supports** a decision; it does not replace checking with real data.

## Simulation or real-world experiment?

Choose a **simulation** when the real thing is too big, small, fast, slow, expensive or dangerous, or when you want to try many variations quickly. Choose a **real-world test** when the real thing is easy to measure and a faithful model is hard to build. Often you use both: simulate first to narrow the options, then test the best option for real.

## Common misconceptions

- **"A simulation gives the true answer."** It gives what the *model* predicts. The model leaves details out and may be biased.
- **"More detail always makes a simulation better."** Extra detail can make it slower and harder to check. Include what matters to the question.
- **"If the program has no bugs, the simulation is accurate."** Bugs and bias are different. A correct program can still model the wrong thing.
- **"One run of a random simulation is enough."** One run is one possible outcome; run it many times.
- **"Simulations replace real-world experiments."** They complement them, especially when real experiments are impractical.
- **"Simulations contain no bias because computers are objective."** Bias comes from the choices about what to include or exclude.


## Where this leads

The last two topics of the unit ask what computers can and cannot do well: Topic 3.17 on how long algorithms take, and Topic 3.18 on problems no algorithm can solve. Simulations return in Unit 5, where bias and the effects of computing on society are examined.

Next steps: try the [practice questions](/advanced-course-resources/computer-science-principles/3-16-simulations-practice/), skim the [revision notes](/advanced-course-resources/computer-science-principles/3-16-simulations-revision-notes/) the night before, and tick off the [topic checklist](/advanced-course-resources/computer-science-principles/3-16-simulations-checklist/). The next topic is [Topic 3.17, Algorithmic Efficiency](/advanced-course-resources/computer-science-principles/3-17-algorithmic-efficiency-study-guide/).
