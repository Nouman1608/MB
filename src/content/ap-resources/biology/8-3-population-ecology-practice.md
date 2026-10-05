---
resourceId: "mb-ap-bio-8.3-practice"
title: "Population Ecology: Practice Questions (Biology 8.3)"
description: "Seven original Marlbridge practice questions on populations, births and deaths, per capita rates, exponential growth and graphing population data, with worked solutions and suggested mark points."
course: "biology"
unit: 8
topics: ["8.3"]
resourceType: "practice-questions"
prerequisites:
  - "What a population is and the equations dN/dt = B − D and dN/dt = rₘₐₓN"
prerequisiteResources: ["mb-ap-bio-8.3-study-guide"]
learningObjectives:
  - "Calculate dN/dt and per capita rates from births, deaths and population size"
  - "Recognise exponential growth in a table or graph and choose a suitable graph"
  - "Compare populations of different sizes using per capita rates"
  - "Link energy and food supply to birth rate in an experiment"
skills: ["1", "3", "4", "5", "6"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Use dN/dt = B − D, r = (B − D) ÷ N and dN/dt = rₘₐₓN. Project one time step at a time unless told otherwise. Round to the precision of the data"
related: ["mb-ap-bio-8.3-study-guide", "mb-ap-bio-8.3-revision-notes", "mb-ap-bio-8.3-checklist"]
next: "mb-ap-bio-8.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working or reasoning."
  - "Keep totals (B, D, dN/dt) separate from per capita rates (b, d, r)."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Useful relationships: dN/dt = B − D; per capita growth rate r = (B − D) ÷ N; exponential growth dN/dt = rₘₐₓN. Assume no immigration or emigration unless told otherwise. A calculator is assumed. All populations and data sets are fictional.

## Question 1 (multiple choice · foundation)

Which of the following is a population?

- (A) All the brown trout living in one lake during one summer
- (B) All the fish species living in one lake during one summer
- (C) All the brown trout living in every river and lake on one continent
- (D) The brown trout in one lake and the mayfly larvae they feed on

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** A population is one species in one area at one time, whose members can interact and breed with each other. The trout in one lake meet all three conditions.

- (B) contains many species. That is part of a community, not a population.
- (C) is one species, but spread over a continent. Trout in rivers and lakes far apart rarely or never meet or interbreed, so this is a set of many populations.
- (D) includes two species, linked by feeding. That is a feeding relationship within a community.
</details>

## Question 2 (multiple choice · core)

A population of 2,500 voles has a per capita birth rate of 0.012 per day and a per capita death rate of 0.008 per day. What is dN/dt?

- (A) 0.004 voles per day
- (B) 10 voles per day
- (C) 50 voles per day
- (D) 2,510 voles per day

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** B = 0.012 × 2,500 = 30 births per day; D = 0.008 × 2,500 = 20 deaths per day. dN/dt = B − D = 30 − 20 = 10 voles per day. (Or: r = 0.012 − 0.008 = 0.004 per day, and rN = 0.004 × 2,500 = 10.)

- (A) is the per capita growth rate, r. It has not been multiplied by N, so it is a rate per vole, not for the population.
- (C) adds births and deaths (30 + 20) instead of subtracting.
- (D) is the population size after one day, not the rate of change.
</details>

## Question 3 (multiple choice · core)

A bacterial population is growing exponentially in fresh medium. Which quantity stays constant while this growth continues?

- (A) The number of new cells added per minute
- (B) The per capita growth rate
- (C) The number of cell divisions happening per minute
- (D) The time needed to add 1,000 more cells

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** With no constraints, each cell divides at the same maximum rate, so the per capita growth rate (rₘₐₓ) is constant. That is what makes dN/dt = rₘₐₓN.

- (A) dN/dt = rₘₐₓN rises as N rises, so the number added per minute keeps increasing.
- (C) more cells means more divisions per minute in total; only the rate per cell is constant.
- (D) as the population grows, it adds 1,000 cells faster and faster. The time that stays constant is the doubling time, not the time to add a fixed number.
</details>

## Question 4 (graph · core)

A student counts the fronds of duckweed (a tiny floating plant) in a tank of nutrient solution every 3 days.

| Day | 0 | 3 | 6 | 9 | 12 |
|---|---|---|---|---|---|
| Number of fronds | 20 | 40 | 79 | 161 | 322 |

<figure>
<svg viewBox="0 0 520 330" role="img" aria-labelledby="q4-title q4-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="q4-title">Duckweed fronds against time on a linear scale</title>
<desc id="q4-desc">Line graph of number of fronds, 0 to 350, against time in days, 0 to 12. Circle markers at 20, 40, 79, 161 and 322 are joined by a solid line. The line is nearly flat for the first 6 days and then rises steeply, a J shape.</desc>
<rect x="0" y="0" width="520" height="330" fill="#ffffff"/>
<line x1="70" y1="280" x2="450" y2="280" stroke="#1d2b44" stroke-width="2"/>
<line x1="70" y1="280" x2="70" y2="50" stroke="#1d2b44" stroke-width="2"/>
<line x1="70" y1="217.1" x2="450" y2="217.1" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="70" y1="154.3" x2="450" y2="154.3" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="70" y1="91.4" x2="450" y2="91.4" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<text x="70" y="298" text-anchor="middle" font-size="12" fill="#1d2b44">0</text>
<text x="160" y="298" text-anchor="middle" font-size="12" fill="#1d2b44">3</text>
<text x="250" y="298" text-anchor="middle" font-size="12" fill="#1d2b44">6</text>
<text x="340" y="298" text-anchor="middle" font-size="12" fill="#1d2b44">9</text>
<text x="430" y="298" text-anchor="middle" font-size="12" fill="#1d2b44">12</text>
<text x="62" y="284" text-anchor="end" font-size="12" fill="#1d2b44">0</text>
<text x="62" y="221" text-anchor="end" font-size="12" fill="#1d2b44">100</text>
<text x="62" y="158" text-anchor="end" font-size="12" fill="#1d2b44">200</text>
<text x="62" y="95" text-anchor="end" font-size="12" fill="#1d2b44">300</text>
<text x="260" y="322" text-anchor="middle" font-size="14" fill="#1d2b44">Time / days</text>
<text x="20" y="165" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 20 165)">Number of fronds</text>
<polyline points="70,267.4 160,254.9 250,230.3 340,178.8 430,77.6" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="70" cy="267.4" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="160" cy="254.9" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="250" cy="230.3" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="340" cy="178.8" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="430" cy="77.6" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
</svg>
<figcaption>Question 4 graph, drawn on a linear scale. The table above gives the same data.</figcaption>
</figure>

(a) Calculate the ratio of frond numbers for each 3-day interval, and state what the ratios show.
(b) Calculate dN/dt for days 9–12, and estimate the per capita growth rate using the mean number of fronds in that interval.
(c) The student wants to replot the data so the trend can be checked by eye. Describe the graph she should draw and what it would look like.
(d) Predict the number of fronds on day 15 if conditions stay the same, and give one reason the prediction might fail.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** 40 ÷ 20 = 2.0; 79 ÷ 40 = 1.98; 161 ÷ 79 = 2.04; 322 ÷ 161 = 2.0. The number of fronds **doubles about every 3 days**. A constant ratio over equal times means a constant per capita rate: the growth is **exponential**.

**(b)** dN/dt = (322 − 161) ÷ 3 = 161 ÷ 3 = **54 fronds per day** (53.7). Mean N = (161 + 322) ÷ 2 = 241.5. Per capita rate ≈ 53.7 ÷ 241.5 = **0.22 per day**. (The same calculation for days 0–3 gives 6.67 ÷ 30 = 0.22 per day, which confirms the per capita rate is constant.)

**(c)** A line graph with time (days) on the x-axis and number of fronds on a **log scale** on the y-axis (for example 10, 100, 1,000), both axes labelled. The points would lie on (or close to) a **straight line**, because equal ratios are equal distances on a log axis.

**(d)** About **640 fronds** (322 × 2 = 644). Reasons it might fail (any one): the tank surface fills up, so fronds shade or crowd each other; nutrients in the solution run low; waste builds up; temperature or light changes.

| Point | What earns it |
|---|---|
| 1 | Ratios calculated and linked to doubling or a constant per capita rate |
| 1 | dN/dt ≈ 54 fronds per day **and** per capita ≈ 0.22 per day |
| 1 | Log-scale y-axis with labels, and "straight line" stated |
| 1 | Prediction of about 640 **with** a resource-based reason it may fail |

Accept a per capita rate from N at the start of the interval (53.7 ÷ 161 ≈ 0.33 per day) if the method is stated.
</details>

## Question 5 (constructed response · core)

Two fictional newt populations were monitored for one month.

| Pond | N at start | Births in month | Deaths in month |
|---|---|---|---|
| A | 800 | 120 | 80 |
| B | 200 | 50 | 20 |

(a) Calculate dN/dt for each pond.
(b) Calculate the per capita birth, death and growth rates for each pond.
(c) A student says: "Pond A's population is growing faster." Evaluate this claim.
(d) Assume each per capita growth rate stays constant. Show that after 4 monthly steps, pond B adds more newts per month than pond A.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** A: 120 − 80 = **40 newts per month**. B: 50 − 20 = **30 newts per month**.

**(b)** A: b = 120 ÷ 800 = 0.15, d = 80 ÷ 800 = 0.10, r = **0.05 per month**. B: b = 50 ÷ 200 = 0.25, d = 20 ÷ 200 = 0.10, r = **0.15 per month**.

**(c)** The claim is true only for the **absolute** rate: A adds 40 newts a month against 30. Per individual, B grows **three times as fast** (0.15 against 0.05 per month), because its birth rate per newt is higher while the death rates are equal. A adds more only because it is four times larger.

**(d)** Multiply each N by (1 + r) each month: A by 1.05, B by 1.15.

| Month | N (A) | added by A next month | N (B) | added by B next month |
|---|---|---|---|---|
| 0 | 800 | 40 | 200 | 30 |
| 1 | 840 | 42 | 230 | 34.5 |
| 2 | 882 | 44.1 | 264.5 | 39.7 |
| 3 | 926.1 | 46.3 | 304.2 | 45.6 |
| 4 | 972.4 | 48.6 | 349.8 | 52.5 |

After 4 steps, B adds about 52 newts per month and A about 49. The higher per capita rate overtakes the larger starting size.

| Point | What earns it |
|---|---|
| 1 | Both dN/dt values correct with units |
| 1 | All per capita rates correct |
| 1 | Distinguishes absolute and per capita growth, concluding B grows faster per individual |
| 1 | Correct step-by-step projection showing B's dN/dt exceeds A's after 4 steps |

Accept values rounded to whole newts at each step if the conclusion is correct.
</details>

## Question 6 (constructed response · core)

Researchers studied a fictional insect-eating songbird. In spring, 20 nests were given extra food (mealworms placed near the nest every day) and 20 similar nests in the same wood received none. Mean number of chicks fledged (leaving the nest) per nest: extra food 4.6; no extra food 3.4.

(a) Identify the independent variable, the dependent variable and the control group.
(b) Calculate the percentage increase in chicks fledged per nest with extra food.
(c) Explain the result in terms of energy and matter.
(d) Predict how a spring with a poor insect supply would affect dN/dt for this bird population, and justify your prediction.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Independent variable: extra food (given or not). Dependent variable: number of chicks fledged per nest. Control group: the 20 nests without extra food, kept in the same wood so that habitat, weather and predators are similar.

**(b)** (4.6 − 3.4) ÷ 3.4 × 100 = 1.2 ÷ 3.4 × 100 = **35%** (35.3%).

**(c)** Raising chicks needs a lot of energy and matter. Parents must feed themselves and bring enough food to build chick tissue. With extra food, parents gather more energy in less time, so more of it can go into reproduction: they can feed more chicks, and fewer chicks starve. More chicks fledged means a higher birth rate (more young added) for the population.

**(d)** dN/dt would **fall** (and could become negative). Fewer insects means less energy for reproduction, so fewer chicks fledge (lower B), and weak adults or chicks may die (higher D). Since dN/dt = B − D, a lower B and higher D both reduce it.

| Point | What earns it |
|---|---|
| 1 | Independent variable, dependent variable and control group all correct |
| 1 | 35% increase |
| 1 | Links extra food to more energy and matter available for producing and feeding young |
| 1 | Predicts lower dN/dt, justified through B and/or D |
</details>

## Question 7 (calculation · stretch)

A fictional plant-eating snail is introduced to an island with plenty of food and no predators. The first count finds 128 snails. Assume rₘₐₓ = 0.5 per year and use yearly steps.

(a) Calculate dN/dt when N = 432.
(b) Project the population year by year and find the first year in which it exceeds 1,000.
(c) A student plots N against time on a linear axis and sees a curve that "suddenly takes off" after year 3. Explain why this impression is misleading.
(d) Explain why this growth cannot continue for many more years.

<details>
<summary>Worked solution</summary>

**(a)** dN/dt = rₘₐₓN = 0.5 × 432 = **216 snails per year**.

**(b)** Multiply by 1.5 each year: year 0: 128; year 1: 192; year 2: 288; year 3: 432; year 4: 648; year 5: 972; year 6: 1,458. The population first exceeds 1,000 in **year 6**.

**(c)** The per capita rate is the same every year (0.5). The population is multiplied by 1.5 each year from the start; the early increases only look small because N is small. On a log y-axis the points would lie on a straight line, with no sudden change.

**(d)** Exponential growth needs unlimited resources. As the snails multiply, they will eat plants faster than the plants grow back, run short of shelter or water, and possibly spread disease more easily. Births will fall and deaths will rise, so the per capita rate will drop below rₘₐₓ. (Another 10 years at 1.5 times per year would give about 84,000 snails, which a small island is unlikely to support.)

Suggested mark points (4): 1 for 216 snails per year; 1 for year 6 with the yearly values; 1 for explaining that the per capita rate is constant and the log graph is straight; 1 for a resource-based reason linked to falling births or rising deaths.

Common errors: adding 0.5 × 128 = 64 every year (linear growth) gives only 512 by year 6; treating 1.5 as rₘₐₓ multiplies N by 2.5 each year, so it passes 1,000 in year 3 (2,000), which is far too fast.
</details>

## How did you do?

- **Q1 wrong:** re-read "What a population is" in the [study guide](/advanced-course-resources/biology/8-3-population-ecology-study-guide/).
- **Q2 or Q5 calculations wrong:** rework Worked example 1; keep totals (B, D) and per capita rates (b, d, r) separate.
- **Q3, Q4 or Q7 wrong:** re-read "Exponential growth" and "Representing population data on graphs", then Worked example 2 and Figure 2.
- **Q6 incomplete:** re-read "Energy, matter and births and deaths".

Then tick off the [topic checklist](/advanced-course-resources/biology/8-3-population-ecology-checklist/).
