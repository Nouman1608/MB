---
resourceId: "mb-ap-csp-3.16-revision-notes"
title: "Simulations: Revision Notes (Computer Science Principles 3.16)"
description: "One-page recap of simulations: abstraction, purposes, when they are most useful, the role of random numbers, how bias arises, and how to compare a simulation with the real world."
course: "computer-science-principles"
unit: 3
topics: ["3.16"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csp-3.16-study-guide"]
learningObjectives:
  - "Recall the key ideas and notation of this topic quickly"
  - "Spot the common errors before making them"
skills: ["1"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.16-study-guide", "mb-ap-csp-3.16-practice", "mb-ap-csp-3.16-checklist"]
next: "mb-ap-csp-3.16-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "A simulation is an abstraction of a more complex object or phenomenon for a specific purpose."
  - "Developing one involves removing specific details or simplifying functionality."
  - "Simulations are most useful when real-world experiments are impractical: too big, small, fast, slow, expensive or dangerous."
  - "Random number generators represent the variability of the real world; one run is one possible outcome."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Recap

- A **simulation** is an **abstraction** of a complex object or phenomenon for a specific purpose.
- It uses **varying sets of values** to reflect changing state.
- Building one means **removing specific details or simplifying functionality**.
- Used to **draw inferences** without real-world constraints; best when the event is **too big, small, fast, slow, expensive or dangerous**.
- **Random number generators** simulate real-world variability; one run is one possible outcome.
- **Bias** can come from the choices of what to include or exclude.
- Simulations help **form and refine hypotheses**.

## Key relationships

| Idea | Why it matters | Example |
|---|---|---|
| Abstraction | Keep what the question needs | Traffic: speed and position, not car colour |
| Variability | Use RANDOM for chance | `RANDOM(1, 10) ≤ 3` for a 30% event |
| Many runs | Show typical results | Five runs gave 3, 4, 2, 5, 4 rainy days |
| Bias | Excluded details skew results | No blocked drains: under-predicted flooding |
| Compare with reality | Check and refine the model | Canteen counts versus simulated queue |
| Use cases | Real experiment impractical | Dangerous, expensive, too slow |

## Assumptions

- The simulation answers a specific question.
- Each `RANDOM` call is independent unless the model links them.
- Results from a simulation are predictions from the model, not facts about the real world.

## Method for evaluating a simulation

1. State the **purpose** of the simulation.
2. List what is **included** and what is **left out**.
3. For each omission say how it would change the results (higher or lower).
4. Say whether the simulation is **more useful than a real experiment** and why.
5. Suggest how to **check** it against real data.

## Mistakes to avoid

- Treating one random run as the answer.
- Saying a simulation is perfect because the code works.
- Listing omissions without saying their effect.
- Forgetting that variability comes from random numbers.
- Claiming that simulations never need real-world checking.

## Worked mini-example

A simulation of a bridge under traffic ignores strong wind. It reports that the bridge is safe for 40 lorries. Wind adds force that the model leaves out, so the real safe number may be **lower**. The bias is optimistic: a missing detail makes the structure look stronger. Real tests with a scale model in a wind tunnel would help refine the simulation.

## Quick self-check

1. Why are simulations useful for testing a spacecraft re-entry?
2. What does a random number generator do in a simulation?
3. How can a correct program still give misleading results?

<details>
<summary>Answers</summary>

1. The real test is too dangerous and expensive to repeat many times.
2. It represents the variability of the real world.
3. The model may exclude or simplify real-world details (bias), so the results differ from reality even though the code does what it was written to do.

</details>

## Where marks are won and lost

Expect conceptual questions: what makes a simulation an abstraction, which situation best suits one, and what bias a missing detail causes. Others give a short simulation that uses RANDOM and ask what it displays or what the possible results are. In scenario questions say what is included, what is left out, and what effect the omission would have on the results, using the exact words of the scenario.


Back to the full [study guide](/advanced-course-resources/computer-science-principles/3-16-simulations-study-guide/) for worked examples and explanations.
