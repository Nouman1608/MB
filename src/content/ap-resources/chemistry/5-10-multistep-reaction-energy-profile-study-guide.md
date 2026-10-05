---
resourceId: "mb-ap-chem-5.10-study-guide"
title: "Multistep Reaction Energy Profile: Study Guide (Chemistry 5.10)"
description: "Learn how to read and draw the energy profile of a reaction with several elementary steps: one hump per step, intermediates in the valleys, each step's activation energy and the overall ΔH."
course: "chemistry"
unit: 5
topics: ["5.10"]
resourceType: "study-guide"
prerequisites:
  - "Energy profile of a single elementary step: transition state, activation energy and ΔH (Topic 5.6)"
  - "Intermediates and the rate-limiting step in a mechanism (Topics 5.7 and 5.8)"
  - "The pre-equilibrium approximation (Topic 5.9)"
prerequisiteResources: ["mb-ap-chem-5.9-study-guide"]
learningObjectives:
  - "Explain how the energy profile of a multistep reaction is built from the profiles of its elementary steps"
  - "Identify transition states, intermediates, the number of steps and the number of intermediates on a profile"
  - "Read the activation energy of each step and the overall energy change from a profile"
  - "Identify the rate-limiting step as the step with the largest activation energy"
  - "Draw a labelled profile from the activation energies and energy changes of the steps"
skills: ["3", "6"]
studyMinutes: 40
difficulty: "core"
calculator: "four-function"
calculatorNote: "Energies in kJ mol⁻¹; every value is found by adding or subtracting heights on the profile"
related: ["mb-ap-chem-5.10-revision-notes", "mb-ap-chem-5.10-practice", "mb-ap-chem-5.10-checklist"]
next: "mb-ap-chem-5.10-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "A multistep profile is the single-step profiles joined end to end: one hump (transition state) for each elementary step."
  - "Intermediates sit in the valleys between humps. For steps in a chain, the number of intermediates is one less than the number of steps."
  - "Each step's activation energy is measured from the valley where that step starts up to its own peak, not from the reactants."
  - "The step with the largest activation energy is normally the slowest, so it is the rate-limiting step."
  - "The overall ΔH is products minus reactants. It equals the sum of the steps' ΔH values and does not depend on how many steps there are."
faqs:
  - question: "What is the difference between an intermediate and a transition state on a profile?"
    answer: "An intermediate is at a valley (a local minimum): it is a real species that lasts long enough to collide again, and it can in principle be detected. A transition state is at a peak (a maximum): an arrangement of atoms partway between bonds breaking and forming, which cannot be isolated."
  - question: "Does the profile tell me how long the reaction takes?"
    answer: "Not directly. The horizontal axis is the reaction coordinate, the progress of bond rearrangements, not time. A taller barrier means a smaller fraction of collisions succeed, so that step is slower, but the profile has no time scale."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## From one hump to several

In Topic 5.6 you drew the energy profile of a single elementary step. The curve starts at the reactants, climbs to one **transition state** at the top, then falls to the products. The height of the climb is the **activation energy**, Ea, and the drop from start to finish is the **energy change**, ΔH.

Most reactions happen through a mechanism with several elementary steps (Topic 5.7). Each step has its own transition state and its own activation energy. If you know the energetics of every step, you can build the profile of the whole reaction by joining the single-step profiles end to end:

- Step 1 starts at the reactants and ends at the first intermediate.
- Step 2 starts at that intermediate and ends at the next intermediate (or at the products).
- And so on, until the last step ends at the products.

So the profile of a two-step reaction has **two humps**, a three-step reaction has **three humps**, and so on.

## Anatomy of a multistep profile

<figure>
<svg viewBox="0 0 640 360" role="img" aria-labelledby="mep1-title mep1-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="mep1-title">Energy profile for a two-step reaction</title>
<desc id="mep1-desc">Energy against reaction coordinate. The curve starts at the reactants at 0 kilojoules per mole, rises to a first peak, transition state 1, at 62, falls to a valley, the intermediate, at 25, rises to a higher second peak, transition state 2, at 98, then falls to the products at minus 40. Arrows mark the first activation energy from reactants to the first peak (62), the second activation energy from the intermediate valley to the second peak (73), and the overall enthalpy change from reactants down to products (minus 40).</desc>
<defs><marker id="mep1-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<path d="M90 20 V310 H630" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<text x="22" y="165" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 165)">Energy (kJ mol⁻¹)</text>
<text x="355" y="332" font-size="13" fill="#1d2b44" text-anchor="middle">Reaction coordinate →</text>
<path d="M85 268.2 H90" stroke="#1d2b44" stroke-width="1.5"/><text x="82" y="272.2" font-size="11" fill="#1d2b44" text-anchor="end">−40</text>
<path d="M85 204.7 H90" stroke="#1d2b44" stroke-width="1.5"/><text x="82" y="208.7" font-size="11" fill="#1d2b44" text-anchor="end">0</text>
<path d="M85 165.0 H90" stroke="#1d2b44" stroke-width="1.5"/><text x="82" y="169.0" font-size="11" fill="#1d2b44" text-anchor="end">25</text>
<path d="M85 106.2 H90" stroke="#1d2b44" stroke-width="1.5"/><text x="82" y="110.2" font-size="11" fill="#1d2b44" text-anchor="end">62</text>
<path d="M85 49.1 H90" stroke="#1d2b44" stroke-width="1.5"/><text x="82" y="53.1" font-size="11" fill="#1d2b44" text-anchor="end">98</text>
<path d="M95 204.7 H135.0 C190.0 204.7 190.0 106.2 245.0 106.2 C300.0 106.2 300.0 165.0 355.0 165.0 C410.0 165.0 410.0 49.1 465.0 49.1 C520.0 49.1 520.0 268.2 575.0 268.2 H615" fill="none" stroke="#1d2b44" stroke-width="3"/>
<text x="135.0" y="224.7" font-size="12" fill="#1d2b44" text-anchor="middle">Reactants</text>
<text x="245.0" y="96.2" font-size="12" fill="#1d2b44" text-anchor="middle">TS 1</text>
<text x="355.0" y="185.0" font-size="12" fill="#1d2b44" text-anchor="middle">Intermediate</text>
<text x="465.0" y="39.1" font-size="12" fill="#1d2b44" text-anchor="middle">TS 2</text>
<text x="575.0" y="288.2" font-size="12" fill="#1d2b44" text-anchor="middle">Products</text>
<path d="M135.0 204.7 H253.0" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 3"/>
<path d="M245.0 204.7 V109.2" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#mep1-a)"/>
<text x="251.0" y="159.5" font-size="12" font-weight="600" fill="#1d2b44" text-anchor="start">Ea, step 1</text>
<path d="M355.0 165.0 H473.0" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 3"/>
<path d="M465.0 165.0 V52.1" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#mep1-a)"/>
<text x="459.0" y="158.0" font-size="12" font-weight="600" fill="#1d2b44" text-anchor="end">Ea, step 2</text>
<path d="M135.0 204.7 H583.0" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 3"/>
<path d="M575.0 204.7 V265.2" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#mep1-a)"/>
<text x="581.0" y="240.5" font-size="12" font-weight="600" fill="#1d2b44" text-anchor="start">ΔH</text>
</svg>
<figcaption>Figure 1. A two-step reaction. Peaks are transition states (TS 1, TS 2); the valley between them is the intermediate. Each upward arrow starts from the dashed level where its step begins. The downward arrow is the overall ΔH.</figcaption>
</figure>

| Feature on the profile | What it represents | How many? |
|---|---|---|
| A peak (maximum) | A transition state: bonds partly broken and partly formed | One per elementary step |
| A valley between two peaks (local minimum) | An intermediate: a real species, made in one step and used in the next | Steps − 1 (for steps in a chain) |
| Start of the curve | Reactants of the overall reaction | 1 |
| End of the curve | Products of the overall reaction | 1 |

Two points about the valleys:

- An intermediate usually sits **above** the reactants, because it is less stable. It is still a minimum, so it lasts long enough to collide with something else. A transition state lasts only for the instant of the collision.
- The deeper an intermediate's valley, the more stable that intermediate is compared with what comes before and after it.

## Reading the numbers

**Activation energy of each step.** Measure from the **valley where the step starts** up to that step's peak:

- Ea for step 1 = (energy of TS 1) − (energy of reactants)
- Ea for step 2 = (energy of TS 2) − (energy of the intermediate)

Do not measure every barrier from the reactants. Step 2 starts at the intermediate, so the intermediate is its baseline.

**Energy change of each step.** ΔH for a step = (energy at its end) − (energy at its start). A step that goes downhill is exothermic (ΔH negative). A step that goes uphill is endothermic (ΔH positive).

**Overall energy change.** ΔH overall = (energy of products) − (energy of reactants). This always equals the sum of the steps' ΔH values, because the intermediates cancel out, just as they cancel when you add the steps' equations. The overall ΔH does not depend on the route.

**Reverse barriers.** The activation energy for the reverse of a step is measured from the valley **after** the step, back up to the same peak. For any step, Ea(reverse) = Ea(forward) − ΔH.

## Which step is rate-limiting?

A taller barrier means a smaller fraction of collisions have enough energy to get over it (Topic 5.5). So the step with the **largest activation energy** is the slowest, and it is the **rate-limiting step**. In Figure 1, step 2 has the larger barrier, so step 2 is rate-limiting.

*Background, beyond this topic:* the "largest barrier" rule is a simplification. When an intermediate sits very high, only just below the peak before it, chemists also compare the heights of the transition states themselves. In every profile on these pages, both ways of judging pick the same step.

You can also read the profile in the other direction, from a mechanism to a shape:

- **First step slow, later steps fast:** the first hump is the tallest climb. The rate law comes straight from step 1 (Topic 5.8).
- **First step fast and reversible, second step slow:** the first hump is low. The intermediate's valley sits close below TS 1, so the intermediate can easily slide back to the reactants, while the climb to TS 2 is much higher. This is the shape of a **pre-equilibrium** (Topic 5.9): the intermediate goes back and forth over the first barrier many times before one crosses the second barrier.

## Worked example 1: reading a two-step profile

**Question.** Use Figure 1 (reactants 0, TS 1 at 62, intermediate at 25, TS 2 at 98, products at −40, all in kJ mol⁻¹). Find (a) the number of steps and intermediates, (b) the activation energy and ΔH of each step, (c) the overall ΔH, (d) the rate-limiting step and (e) the activation energy for the reverse of step 2.

1. **(a)** Two peaks, so **two elementary steps**. One valley between them, so **one intermediate**.
2. **(b)** Step 1: Ea = 62 − 0 = **62 kJ mol⁻¹**; ΔH = 25 − 0 = **+25 kJ mol⁻¹** (endothermic).
   Step 2: Ea = 98 − 25 = **73 kJ mol⁻¹**; ΔH = −40 − 25 = **−65 kJ mol⁻¹** (exothermic).
3. **(c)** ΔH overall = −40 − 0 = **−40 kJ mol⁻¹**. Check: +25 + (−65) = −40. The reaction is exothermic overall even though step 1 is endothermic.
4. **(d)** 73 > 62, so **step 2** has the larger barrier and is rate-limiting.
5. **(e)** The reverse of step 2 starts at the products (−40) and climbs to TS 2 (98): 98 − (−40) = **138 kJ mol⁻¹**. Check with the rule: 73 − (−65) = 138.

**Common slip.** Reading step 2's barrier as 98 kJ mol⁻¹ (from the reactants) instead of 73 kJ mol⁻¹ (from the intermediate). You still pick step 2 here, but 98 kJ mol⁻¹ is not step 2's activation energy, so any question that asks for the value loses the mark (see Practice Question 2).

**Link to Topic 5.9.** The intermediate's way back over TS 1 is 62 − 25 = 37 kJ mol⁻¹, much lower than its way forward over TS 2 (73 kJ mol⁻¹). So the intermediate returns to reactants far more often than it goes on, which is the situation where a pre-equilibrium approximation is reasonable.

## Worked example 2: drawing a profile from step data

**Question.** A hypothetical reaction has three elementary steps with these energetics (kJ mol⁻¹):

| Step | Ea (forward) | ΔH | Speed |
|---|---|---|---|
| 1 | 30 | +20 | fast, reversible |
| 2 | 85 | −15 | slow |
| 3 | 18 | −55 | fast |

Draw and label the energy profile, taking the reactants as 0 kJ mol⁻¹, and state the overall ΔH.

**Step 1: turn the data into heights.** Start at 0 and work along, adding Ea to reach each peak and ΔH to reach each valley.

| Point | Working | Energy (kJ mol⁻¹) |
|---|---|---|
| Reactants | start | 0 |
| TS 1 | 0 + 30 | 30 |
| Intermediate I₁ | 0 + 20 | 20 |
| TS 2 | 20 + 85 | 105 |
| Intermediate I₂ | 20 − 15 | 5 |
| TS 3 | 5 + 18 | 23 |
| Products | 5 − 55 | −50 |

**Step 2: draw.** Three humps; two valleys (I₁ and I₂) between them; the middle hump is by far the tallest.

<figure>
<svg viewBox="0 0 640 360" role="img" aria-labelledby="mep2-title mep2-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="mep2-title">Constructed energy profile for a three-step reaction</title>
<desc id="mep2-desc">Energy against reaction coordinate with three humps. Reactants at 0 kilojoules per mole; first peak at 30; first intermediate valley at 20; second peak, much the tallest, at 105; second intermediate valley at 5; third, small peak at 23; products at minus 50. An arrow marks the activation energy of step 2, 85, from the first intermediate valley to the second peak.</desc>
<defs><marker id="mep2-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<path d="M90 20 V310 H630" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<text x="22" y="165" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 165)">Energy (kJ mol⁻¹)</text>
<text x="355" y="332" font-size="13" fill="#1d2b44" text-anchor="middle">Reaction coordinate →</text>
<path d="M85 271.6 H90" stroke="#1d2b44" stroke-width="1.5"/><text x="82" y="275.6" font-size="11" fill="#1d2b44" text-anchor="end">−50</text>
<path d="M85 200.5 H90" stroke="#1d2b44" stroke-width="1.5"/><text x="82" y="204.5" font-size="11" fill="#1d2b44" text-anchor="end">0</text>
<path d="M85 172.1 H90" stroke="#1d2b44" stroke-width="1.5"/><text x="82" y="176.1" font-size="11" fill="#1d2b44" text-anchor="end">20</text>
<path d="M85 157.9 H90" stroke="#1d2b44" stroke-width="1.5"/><text x="82" y="161.9" font-size="11" fill="#1d2b44" text-anchor="end">30</text>
<path d="M85 51.3 H90" stroke="#1d2b44" stroke-width="1.5"/><text x="82" y="55.3" font-size="11" fill="#1d2b44" text-anchor="end">105</text>
<path d="M95 200.5 H135.0 C171.7 200.5 171.7 157.9 208.3 157.9 C245.0 157.9 245.0 172.1 281.7 172.1 C318.3 172.1 318.3 51.3 355.0 51.3 C391.7 51.3 391.7 193.4 428.3 193.4 C465.0 193.4 465.0 167.8 501.7 167.8 C538.3 167.8 538.3 271.6 575.0 271.6 H615" fill="none" stroke="#1d2b44" stroke-width="3"/>
<text x="135.0" y="220.5" font-size="12" fill="#1d2b44" text-anchor="middle">Reactants</text>
<text x="208.3" y="147.9" font-size="12" fill="#1d2b44" text-anchor="middle">TS 1</text>
<text x="281.7" y="192.1" font-size="12" fill="#1d2b44" text-anchor="middle">I₁</text>
<text x="355.0" y="41.3" font-size="12" fill="#1d2b44" text-anchor="middle">TS 2</text>
<text x="428.3" y="213.4" font-size="12" fill="#1d2b44" text-anchor="middle">I₂</text>
<text x="501.7" y="157.8" font-size="12" fill="#1d2b44" text-anchor="middle">TS 3</text>
<text x="575.0" y="291.6" font-size="12" fill="#1d2b44" text-anchor="middle">Products</text>
<path d="M281.7 172.1 H363.0" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 3"/>
<path d="M355.0 172.1 V54.3" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#mep2-a)"/>
<text x="333.0" y="60.7" font-size="12" font-weight="600" fill="#1d2b44" text-anchor="end">Ea, step 2 = 85</text>
</svg>
<figcaption>Figure 2. The profile built from the table. Step 2 has the largest barrier (85 kJ mol⁻¹, measured from I₁), so it is rate-limiting. The products end 50 kJ mol⁻¹ below the reactants.</figcaption>
</figure>

**Step 3: check.** Overall ΔH = −50 − 0 = **−50 kJ mol⁻¹**, and the steps add up: +20 − 15 − 55 = −50. ✓ The largest barrier (85) belongs to step 2, matching "slow" in the table. ✓

**What a good sketch must show.** On an exam you will usually sketch rather than plot. Get the **relative** heights right: the right number of humps, the tallest climb on the slow step, each intermediate valley above or below the reactants as the data say, and the products at the correct side of the reactants. Label the axes (energy; reaction coordinate), the transition states, the intermediates, and at least the activation energy and ΔH you are asked for.

**Interpretation.** Step 1 has a reverse barrier of only 10 kJ mol⁻¹ (30 − 20), so I₁ readily falls back to reactants. That fits step 1 being "fast, reversible", a pre-equilibrium ahead of the slow step 2. Step 3 comes after the slow step, so it has no effect on the rate law.

## Common misconceptions

- **"Count the valleys to get the number of steps."** Count the **peaks**. Each elementary step has exactly one transition state. Valleys between peaks are intermediates.
- **"Intermediates and transition states are the same thing."** An intermediate sits in a valley and can, in principle, be detected. A transition state sits at a peak and cannot be isolated.
- **"Measure every activation energy from the reactants."** Each step's barrier is measured from the valley where that step begins.
- **"The first step is always the slow one."** The slow step is whichever has the largest barrier. It can be any step.
- **"The biggest drop is the slowest step."** A large downhill drop is a large negative ΔH. It says nothing about how fast that step is.
- **"More steps means a different overall ΔH."** Overall ΔH depends only on the reactants and products.
- **"An exothermic reaction cannot have an endothermic step."** It can: in Worked example 1, step 1 is uphill but the reaction is downhill overall.
- **"The x-axis is time."** It is the reaction coordinate: progress through the bond changes.

## Where this leads

Topic 5.11 shows how a catalyst changes the profile: it provides a new route, usually with more steps but lower barriers, and new intermediates. The overall ΔH stays the same. Unit 6 then looks at ΔH itself in more detail. Continue to [catalysis](/advanced-course-resources/chemistry/5-11-catalysis-study-guide/) when you are ready, or revise the [pre-equilibrium approximation](/advanced-course-resources/chemistry/5-9-pre-equilibrium-approximation-study-guide/). Try the [practice questions](/advanced-course-resources/chemistry/5-10-multistep-reaction-energy-profile-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/5-10-multistep-reaction-energy-profile-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/5-10-multistep-reaction-energy-profile-checklist/) to consolidate.
