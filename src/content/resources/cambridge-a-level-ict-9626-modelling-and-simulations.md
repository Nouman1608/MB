---
title: "Cambridge A Level Information Technology (9626): Modelling and simulations"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Topic 9 – Modelling"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 9.1
syllabusTopics:
  - qualification: "a-level"
    topic: "modelling"
  - qualification: "a-level"
    topic: "modelling"
    subtopic: "modelling-and-simulations"
description: "Cambridge 9626 IT section 9.1 study guide: what-if analysis, goal seek, modelling software, the need for computer models, spreadsheet models and simulations, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide teaches **section 9.1 Modelling and simulations** of Topic 9 Modelling in the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. It is AS Level content, examined in Paper 1 Theory and applied in Paper 2 Practical when you change values in a spreadsheet model. The [Modelling overview](/resources/a-level-cambridge-ict-modelling/) gives a summary; this page explains each part with worked calculations. Use it with the [modelling and simulations practice questions](/resources/cambridge-a-level-ict-9626-modelling-and-simulations-practice/).

## What section 9.1 covers

| Syllabus point | What you must be able to do |
|---|---|
| What-if analysis | Predict the result of changing data; change data to model different scenarios; use goal seek; describe uses such as financial forecasting, population growth, climate change, weather systems, queue management, traffic flow and construction |
| Modelling software | Describe its characteristics |
| Need for computer models | Explain why they are used |
| Spreadsheet models | Evaluate their effectiveness |
| Simulations | Explain the use of a model to create and run simulations: natural disaster planning, pilot training, learning to drive a car and nuclear science research |

## Models and modelling

A **model** is a simplified representation of a real situation or system, built from **variables**, **rules** and **relationships**. It is usually mathematical: a set of values that can be changed and formulas that link them. **Modelling** is the process of building a model and using it to study the real system.

A computer model has three parts:
- **Inputs (variables):** values the user can change, such as a price or an interest rate.
- **Rules (formulas):** the relationships between the inputs, such as profit = income minus costs.
- **Outputs (results):** the values the model calculates.

The model is only as good as the **rules** and the **data** in it. A model that leaves out something important will give misleading results.

## What-if analysis

**What-if analysis** means changing one or more inputs and watching how the outputs change, to answer the question "what would happen if...?" The syllabus asks for two skills.

1. **Predict the result of changing data.** Before changing a value, think about what should happen. This checks that the model behaves sensibly.
2. **Change data to model different scenarios.** Create several sets of inputs, such as best case, expected case and worst case, and compare the outputs.

### Worked example 1: a pricing model

A school club sells badges. Each costs 4 pounds to make, there is a fixed cost of 500 pounds for the machine, and the club expects to sell 300 badges at 7 pounds each.

**Rules.** Profit = units sold × (price − cost per badge) − fixed cost.

**Base case.** Profit = 300 × (7 − 4) − 500 = 900 − 500 = **400 pounds**.

**Scenarios.** Raising the price reduces the number sold.

| Scenario | Price (pounds) | Units sold | Calculation | Profit (pounds) |
|---|---|---|---|---|
| Base | 7 | 300 | 300 × 3 − 500 | 400 |
| Higher price | 8 | 260 | 260 × 4 − 500 | 540 |
| Highest price | 9 | 240 | 240 × 5 − 500 | 700 |

Raising the price gives more profit in this model, even though fewer badges are sold. A manager would then ask whether the sales forecasts at the higher prices are realistic, because the result depends on them. This is why the **assumptions** in a model must be checked.

In a spreadsheet, the price, cost, units and fixed cost are in separate input cells, and the profit is a formula that refers to them. Changing the price cell updates the profit at once. This is the key reason spreadsheets are used for what-if analysis.

### Goal seek

**Goal seek** works **backwards**. You choose the result you want and one input to change, and the software finds the value of that input that produces the result.

**Worked example 2.** The club wants a profit of 800 pounds, selling 300 badges. What price is needed?

- The goal: profit cell equals 800.
- The cell to change: price.
- Solving 300 × (price − 4) − 500 = 800 gives 300 × (price − 4) = 1300, so price − 4 = 4.333, and the price is **8.33 pounds** (to the nearest penny).
- Goal seek gives the same value by trying values until the formula matches the target.

**Worked example 3: investment growth.** 1000 pounds is invested for 5 years. The value after 5 years is 1000 × (1 + rate)^5. At 4% the final value is 1216.65 pounds, and at 6% it is 1338.23 pounds. To find the rate that gives 1500 pounds, goal seek changes the rate until the final value reaches 1500. The answer is a rate of about **8.45%**.

Goal seek changes **one** input to reach a target. It cannot tell you whether the target is realistic.

### Uses of what-if analysis

| Use | What is modelled |
|---|---|
| Financial forecasting | Future income, costs, loan repayments and cash flow under different assumptions |
| Population growth | Births, deaths and migration to predict future numbers and the services needed |
| Climate change | Gases, temperature and sea level over decades |
| Weather systems | Pressure, temperature and wind used to forecast conditions |
| Queue management | Arrival rates and the number of service points, to reduce waiting times |
| Traffic flow | Timings of lights and effects of new roads or roadworks |
| Construction | Loads, materials and costs of a building or bridge |

## Characteristics of modelling software

Modelling software (such as a spreadsheet or a specialist package) typically:

- allows **variables and rules** to be set and changed easily;
- **recalculates automatically** when an input changes;
- stores a **large amount of data** and performs fast, repeated calculations;
- can show results as **tables, graphs and charts**;
- allows **scenarios** to be saved and compared;
- may include tools such as goal seek, solver and random number generation;
- may let the user **run the model over time**, step by step.

## The need for computer models

Computer models are used because testing in the real world may be:

- **Too dangerous**, such as nuclear accidents, crashes or natural disasters.
- **Too expensive**, such as building and testing many prototype bridges or aircraft.
- **Too slow**, as climate change and population growth take decades.
- **Impossible**, such as events in the past, in space or deep in the earth.
- **Not repeatable**, because real conditions cannot be controlled.

A model lets many scenarios be tested **quickly, safely and cheaply**, and the same test can be repeated with identical conditions.

## Effectiveness of spreadsheet models

**Strengths:**
- Widely available and familiar, so little training is needed.
- Formulas recalculate at once when an input changes.
- Charts show the results clearly.
- Good for modest amounts of data and simple relationships.
- Easy to change the model's rules.

**Limitations:**
- The results depend on the **accuracy of the formulas and the assumptions**, and errors can be hard to find.
- Poor at very large or highly complex models, such as global weather, which need specialist software and powerful computers.
- Cannot show the real world in full: some factors are left out.
- Predictions about the future are only estimates.
- Poor design (hard-coded values in formulas, no checks) makes errors likely.

**Making a spreadsheet model effective:** keep inputs in labelled cells, use named cells or absolute references for fixed values, protect formula cells, validate the inputs and **test** the model with data whose results are known (section 8.2).

## Simulations

A **simulation** uses a model to imitate how a real system behaves over time, so people can learn, train or predict without the risks of the real thing. The model is run with chosen inputs, often with random elements, and the outputs are observed.

| Simulation | What it does | Why a simulation |
|---|---|---|
| Natural disaster planning | Models floods, earthquakes or fires to plan evacuation and emergency services | Real disasters cannot be tested; plans can be improved safely |
| Pilot training | A flight simulator reproduces controls, instruments and emergencies | Trainees can practise engine failure with no risk to lives or aircraft; costs less than real flights |
| Learning to drive a car | A driving simulator with controls and scenes | Learners can practise hazards safely before going on the road |
| Nuclear science research | Models reactions and reactor behaviour | Real experiments are dangerous, expensive and heavily controlled |

**Advantages of simulations:** safe; cheaper than real events; scenarios can be repeated and varied; time can be speeded up or slowed down; mistakes carry no real cost.

**Disadvantages:** a simulation can never be exactly the same as reality, so trainees may behave differently in a real emergency; a poor model gives misleading results; building a high-quality simulator is expensive; users may become over-confident.

## Common mistakes

- Defining a model as "a copy" instead of a **simplified representation**.
- Describing goal seek as "finding the best answer". It finds the value of one input that gives a **chosen result**.
- Writing a what-if example without saying which variable is changed and which output is observed.
- Saying that models always give correct predictions. Results depend on the assumptions and data.
- Listing uses (such as "weather") without saying what the model predicts.
- Confusing a **model** (the representation) with a **simulation** (running the model to imitate the system over time).

## Exam technique

- **Describe** what-if analysis by naming the input changed, the output observed and why it helps a decision.
- **Explain** the need for a model with a specific reason (danger, cost, time or impossibility) linked to the scenario.
- For **calculations**, set out the rule, substitute the values and give the result with units.
- **Evaluate** a spreadsheet model with a strength, a limitation and a judgement based on the size and complexity of the task.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, Cambridge International Education. Topic 9 Modelling, section 9.1 Modelling and simulations.
