---
resourceId: "mb-ap-bio-8.3-study-guide"
title: "Population Ecology: Study Guide (Biology 8.3)"
description: "Learn what a population is, how births, deaths and population size set its growth rate, how to use dN/dt = B − D and dN/dt = rₘₐₓN, and how to graph exponential growth."
course: "biology"
unit: 8
topics: ["8.3"]
resourceType: "study-guide"
prerequisites:
  - "Energy flow and how organisms obtain energy and matter from their environment"
  - "Reading line graphs and calculating rates of change"
prerequisiteResources: ["mb-ap-bio-8.2-study-guide"]
learningObjectives:
  - "Define a population and describe how its members interact with each other and with their environment"
  - "Explain how birth rate, death rate and population size together set the rate of population growth"
  - "Use dN/dt = B − D and per capita rates to calculate and compare population growth"
  - "Describe exponential growth, use dN/dt = rₘₐₓN and say when it applies"
  - "Link adaptations for obtaining and using energy and matter to births and deaths"
  - "Construct a suitable graph of population data, including a log scale and error bars where appropriate"
skills: ["1", "2", "4", "5", "6"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "You need subtraction, multiplication, division and powers. Use logarithms only for a log-scale axis. Keep full values until the last step"
related: ["mb-ap-bio-8.3-revision-notes", "mb-ap-bio-8.3-practice", "mb-ap-bio-8.3-checklist"]
next: "mb-ap-bio-8.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "A population is all the individuals of one species in one area that interact with each other and with their environment."
  - "Population growth depends on birth rate, death rate and population size: dN/dt = B − D, where B and D are births and deaths per unit time."
  - "Per capita growth rate r = (B − D) ÷ N. With no limits on reproduction, r stays at its maximum, rₘₐₓ, and growth is exponential: dN/dt = rₘₐₓN."
  - "In exponential growth the population adds more individuals each time step, but the per capita rate and the doubling time stay constant. On a log scale the curve becomes a straight line."
  - "Births and deaths depend on how well organisms obtain and use energy and matter, so adaptations for feeding and energy use shape population growth."
faqs:
  - question: "What is the difference between B and b?"
    answer: "B is the number of births per unit time in the whole population (for example 96 births per month). The per capita birth rate, b, is births per individual per unit time: b = B ÷ N. The same goes for D and d."
  - question: "Do I need to include immigration and emigration?"
    answer: "The equation in this topic uses only births and deaths, as if the population were closed. Real populations also gain and lose individuals by movement. Include them only if a question gives you the numbers."
  - question: "Does reading about population growth count as a lab?"
    answer: "No. Reading and simulations do not meet the course's laboratory requirement. Counting a growing yeast or duckweed culture is a good investigation to carry out with your teacher."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## What a population is

A **population** is all the individuals of **one species** living in the same area at the same time. The members of a population are not isolated. They interact with each other: they compete for food and space, find mates, and may cooperate or spread disease. They also interact with their environment: they take in energy and matter, and they are affected by temperature, water and other species.

Three features help you tell a population apart from other groups:

- **One species.** All the fish in a lake form part of a community. All the perch in that lake form a population.
- **One place.** Members must be close enough to interact and, usually, to breed with each other.
- **One time.** A population is counted at a particular moment. Its size changes over time.

We write population size as **N**. Ecologists study how N changes and why. That is **population ecology**.

## What changes population size

A population grows when individuals are added faster than they are removed. In the simplest model, the population is closed: no individuals move in or out. Then only two processes matter:

- **births** (B), the number of new individuals added per unit time;
- **deaths** (D), the number of individuals lost per unit time.

The rate of change of population size is:

**dN/dt = B − D**

where dN is the change in population size and dt is the change in time. The units are individuals per unit time, for example beetles per month.

- If B > D, dN/dt is positive and the population grows.
- If B = D, dN/dt is zero and the population size stays the same.
- If B < D, dN/dt is negative and the population shrinks.

<figure>
<svg viewBox="0 0 640 260" role="img" aria-labelledby="pop-title pop-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pop-title">What adds to and removes from a population</title>
<desc id="pop-desc">A central box labelled population, size N. On the left, a solid arrow labelled births, B, points into the box. On the right, a solid arrow labelled deaths, D, points out of the box. Below the box, two dashed arrows: immigration pointing in and emigration pointing out, labelled movement, background only. Text under the box reads dN/dt equals B minus D for a closed population.</desc>
<rect x="0" y="0" width="640" height="260" fill="#ffffff"/>
<rect x="230" y="60" width="180" height="90" rx="10" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="320" y="98" text-anchor="middle" font-size="18" font-weight="700" fill="#1d2b44">Population</text>
<text x="320" y="124" text-anchor="middle" font-size="16" fill="#1d2b44">size N</text>
<line x1="60" y1="105" x2="222" y2="105" stroke="#1d2b44" stroke-width="4"/>
<polygon points="228,105 212,96 212,114" fill="#1d2b44"/>
<text x="130" y="90" text-anchor="middle" font-size="15" font-weight="600" fill="#1d2b44">Births, B</text>
<text x="130" y="130" text-anchor="middle" font-size="13" fill="#1d2b44">add individuals</text>
<line x1="410" y1="105" x2="572" y2="105" stroke="#1d2b44" stroke-width="4"/>
<polygon points="580,105 564,96 564,114" fill="#1d2b44"/>
<text x="500" y="90" text-anchor="middle" font-size="15" font-weight="600" fill="#1d2b44">Deaths, D</text>
<text x="500" y="130" text-anchor="middle" font-size="13" fill="#1d2b44">remove individuals</text>
<line x1="270" y1="215" x2="270" y2="158" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 5"/>
<polygon points="270,152 263,166 277,166" fill="#1d2b44"/>
<text x="200" y="232" text-anchor="middle" font-size="13" fill="#1d2b44">Immigration (in)</text>
<line x1="370" y1="158" x2="370" y2="209" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 5"/>
<polygon points="370,215 363,201 377,201" fill="#1d2b44"/>
<text x="448" y="232" text-anchor="middle" font-size="13" fill="#1d2b44">Emigration (out)</text>
<text x="320" y="252" text-anchor="middle" font-size="12" fill="#1d2b44">dashed = movement, background only</text>
<text x="320" y="36" text-anchor="middle" font-size="15" font-weight="600" fill="#1d2b44">Closed population: dN/dt = B − D</text>
</svg>
<figcaption>Figure 1. Births add individuals and deaths remove them (solid arrows). Movement in and out (dashed arrows) also changes N in real populations, but the equation in this topic leaves it out.</figcaption>
</figure>

### Per capita rates: comparing populations of different sizes

A large population has more births than a small one simply because it has more parents. To compare populations fairly, divide by N to get **per capita** ("per head") rates:

- per capita birth rate, b = B ÷ N
- per capita death rate, d = D ÷ N
- per capita growth rate, **r = b − d = (B − D) ÷ N**

So **dN/dt = rN**. This form shows the key idea of the topic: **growth rate depends on birth rate, death rate and population size together.** Two populations with the same r grow at different speeds if their sizes differ.

## Energy, matter and births and deaths

Every birth costs energy and matter. A parent must gather enough food to stay alive, grow, and then build eggs, seeds or young. Every death that is avoided also depends on energy and matter: an animal that cannot find enough food starves or becomes easier prey. This is why many adaptations are tied to **obtaining and using energy and matter**, and why they show up in population numbers.

- **Feeding adaptations** (beak shape, root depth, hunting behaviour) set how much energy an individual can gather. More energy available for reproduction usually means more offspring, raising B.
- **Energy budgets.** Energy used for keeping warm, moving or repairing tissue is not available for reproduction. An endotherm spends much of its energy keeping a constant body temperature, so it usually needs more food than an ectotherm of similar mass.
- **Timing.** Many animals breed when food is most plentiful, so young are raised when energy is easy to find. This raises survival and lowers D.
- **Saving energy in hard times.** Dormancy, hibernation or dropping leaves reduce energy use when food or water is scarce, which lowers deaths.

So a change in the environment that changes food supply changes B and D, and through them dN/dt.

## Exponential growth

Imagine a population with **no constraints on reproduction**: plenty of food, space and water, no build-up of waste and few predators or diseases. Each individual then reproduces at its highest possible rate. The per capita growth rate takes its largest value, called **rₘₐₓ** (the maximum per capita growth rate), and stays constant. The growth equation becomes:

**dN/dt = rₘₐₓN**

This is **exponential growth**. Read the equation carefully:

- rₘₐₓ is constant, so dN/dt is **proportional to N**. Double the population and you double the number added per unit time.
- As N grows, dN/dt grows too, so the curve of N against time gets steeper and steeper. Its shape is often called a **J-shaped curve**.
- Because the per capita rate is constant, the population takes the **same time to double**, whatever its size. A culture that doubles every 2 hours goes 1 → 2 → 4 → 8 → 16 units in 8 hours.

Exponential growth happens when resources are, for a while, far more than the population needs. Examples include bacteria or yeast added to fresh nutrient medium, a species reaching a new habitat with no competitors, or a population recovering after a disaster. It **cannot continue forever**: resources run short. What happens then is the subject of the next topic.

## Representing population data on graphs

Population data are usually counts at different times, so the natural choice is a **line graph** (or a scatter plot of points joined by a line or trend line):

1. **Type of graph.** Time is continuous, so plot N against time as points joined by lines. Do not use a bar chart for a time series.
2. **Axes and units.** Time on the x-axis (the independent variable), population size or density on the y-axis, each with a label and a unit, for example "Cell density / 10⁴ cells mL⁻¹". Add a legend if there is more than one data set.
3. **Scaling.** Choose even steps that use most of the grid. For exponential data, a **log scale** on the y-axis (1, 10, 100, …) gives equal spacing to equal ratios, so steady doubling plots as a **straight line**.
4. **Plotting.** Plot means. If you have repeated counts, add **error bars** (for example, showing the range, or a confidence interval as in later topics).
5. **Trend line.** Draw a smooth curve or straight line through the general trend, not "dot to dot" through every wobble, when the pattern is clear.

<figure>
<svg viewBox="0 0 640 330" role="img" aria-labelledby="yeast-title yeast-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="yeast-title">The same yeast growth data on a linear scale and on a log scale</title>
<desc id="yeast-desc">Two graphs side by side, both with time in hours from 0 to 10 on the horizontal axis. Panel A, linear scale: cell density from 0 to 35, in units of 10 to the power 4 cells per millilitre. Points at 1.0, 2.1, 4.0, 8.2, 15.9 and 32.3 lie on a curve that is almost flat at first and then rises steeply, a J shape. Panel B, log scale: cell density from 1 to 100 with marks at 1, 2, 5, 10, 20, 50, 100. The same points, drawn as squares, lie close to a dashed straight line. In panel B, small vertical error bars show the range of three replicate flasks at each time.</desc>
<rect x="0" y="0" width="640" height="330" fill="#ffffff"/>
<text x="170" y="30" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">A. Linear scale (J-shaped)</text>
<line x1="60" y1="270" x2="290" y2="270" stroke="#1d2b44" stroke-width="2"/>
<line x1="60" y1="270" x2="60" y2="50" stroke="#1d2b44" stroke-width="2"/>
<text x="60" y="288" text-anchor="middle" font-size="12" fill="#1d2b44">0</text>
<text x="104" y="288" text-anchor="middle" font-size="12" fill="#1d2b44">2</text>
<text x="148" y="288" text-anchor="middle" font-size="12" fill="#1d2b44">4</text>
<text x="192" y="288" text-anchor="middle" font-size="12" fill="#1d2b44">6</text>
<text x="236" y="288" text-anchor="middle" font-size="12" fill="#1d2b44">8</text>
<text x="280" y="288" text-anchor="middle" font-size="12" fill="#1d2b44">10</text>
<text x="52" y="274" text-anchor="end" font-size="12" fill="#1d2b44">0</text>
<text x="52" y="214" text-anchor="end" font-size="12" fill="#1d2b44">10</text>
<text x="52" y="154" text-anchor="end" font-size="12" fill="#1d2b44">20</text>
<text x="52" y="94" text-anchor="end" font-size="12" fill="#1d2b44">30</text>
<polyline points="60,264 104,257.4 148,246 192,220.8 236,174.6 280,76.2" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="60" cy="264" r="4.5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="104" cy="257.4" r="4.5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="148" cy="246" r="4.5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="192" cy="220.8" r="4.5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="236" cy="174.6" r="4.5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="280" cy="76.2" r="4.5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="490" y="30" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">B. Log scale (straight line)</text>
<line x1="380" y1="270" x2="610" y2="270" stroke="#1d2b44" stroke-width="2"/>
<line x1="380" y1="270" x2="380" y2="60" stroke="#1d2b44" stroke-width="2"/>
<text x="380" y="288" text-anchor="middle" font-size="12" fill="#1d2b44">0</text>
<text x="424" y="288" text-anchor="middle" font-size="12" fill="#1d2b44">2</text>
<text x="468" y="288" text-anchor="middle" font-size="12" fill="#1d2b44">4</text>
<text x="512" y="288" text-anchor="middle" font-size="12" fill="#1d2b44">6</text>
<text x="556" y="288" text-anchor="middle" font-size="12" fill="#1d2b44">8</text>
<text x="600" y="288" text-anchor="middle" font-size="12" fill="#1d2b44">10</text>
<text x="372" y="274" text-anchor="end" font-size="12" fill="#1d2b44">1</text>
<text x="372" y="244" text-anchor="end" font-size="12" fill="#1d2b44">2</text>
<text x="372" y="204" text-anchor="end" font-size="12" fill="#1d2b44">5</text>
<text x="372" y="174" text-anchor="end" font-size="12" fill="#1d2b44">10</text>
<text x="372" y="144" text-anchor="end" font-size="12" fill="#1d2b44">20</text>
<text x="372" y="104" text-anchor="end" font-size="12" fill="#1d2b44">50</text>
<text x="372" y="74" text-anchor="end" font-size="12" fill="#1d2b44">100</text>
<line x1="380" y1="170" x2="610" y2="170" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="380" y1="70" x2="610" y2="70" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="380" y1="270" x2="600" y2="119.1" stroke="#1d2b44" stroke-width="2" stroke-dasharray="8 5"/>
<line x1="380" y1="265.9" x2="380" y2="274.6" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="424" y1="233.8" x2="424" y2="242.1" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="468" y1="206.7" x2="468" y2="213.2" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="512" y1="176" x2="512" y2="181.9" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="556" y1="147.5" x2="556" y2="152.4" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="600" y1="116.3" x2="600" y2="121.7" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="375.5" y="265.5" width="9" height="9" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="419.5" y="233.3" width="9" height="9" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="463.5" y="205.3" width="9" height="9" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="507.5" y="174.1" width="9" height="9" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="551.5" y="145.4" width="9" height="9" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="595.5" y="114.6" width="9" height="9" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="320" y="318" text-anchor="middle" font-size="14" fill="#1d2b44">Time / h (both graphs)</text>
<text x="18" y="160" text-anchor="middle" font-size="13" fill="#1d2b44" transform="rotate(-90 18 160)">Cell density / 10⁴ cells mL⁻¹</text>
<text x="338" y="165" text-anchor="middle" font-size="13" fill="#1d2b44" transform="rotate(-90 338 165)">Cell density / 10⁴ cells mL⁻¹ (log)</text>
</svg>
<figcaption>Figure 2. Fictional yeast data from Worked example 2. Panel A (circles, solid line) shows the J shape on a linear axis. Panel B (squares, dashed trend line) shows the same means on a log axis, where steady doubling gives a straight line. Vertical bars show the range of three flasks.</figcaption>
</figure>

## Worked example 1: births, deaths and growth in a beetle population

**Question.** A population of 256 leaf beetles colonises a new glasshouse crop. In the first month there are 96 births and 32 deaths. No beetles enter or leave.

(a) Calculate dN/dt for the first month.
(b) Calculate the per capita birth, death and growth rates.
(c) Assuming the per capita growth rate stays the same, project the population month by month for 4 months, and comment on the number added each month.

**(a)** dN/dt = B − D = 96 − 32 = **64 beetles per month**.

**(b)**

1. b = B ÷ N = 96 ÷ 256 = **0.375 per month** (each beetle produces, on average, 0.375 offspring per month).
2. d = D ÷ N = 32 ÷ 256 = **0.125 per month**.
3. r = b − d = 0.375 − 0.125 = **0.25 per month**. Check: 64 ÷ 256 = 0.25. ✓

**(c)** Use dN/dt = rN for each month, then add the increase to N.

| Month | N at start | Added this month (0.25 × N) | N at end |
|---|---|---|---|
| 1 | 256 | 64 | 320 |
| 2 | 320 | 80 | 400 |
| 3 | 400 | 100 | 500 |
| 4 | 500 | 125 | 625 |

**Interpretation.** The per capita rate never changes, yet the number added each month rises, from 64 to 125, nearly double (125 ÷ 64 ≈ 1.95). The increase grows because N grows. This is the signature of exponential growth.

**A note on the model.** dN/dt describes the rate at one instant. Stepping one month at a time treats each month's growth as one jump, so it is an estimate. With smaller steps, the new beetles would start breeding sooner and the total after 4 months would be larger (about 696 if growth were truly continuous). For this course, a step-by-step projection is enough; just say it is an estimate.

## Worked example 2: graphing and testing exponential growth

**Question.** A student adds yeast to fresh sugar solution in three flasks and counts the cells every 2 hours. Cell density (×10⁴ cells mL⁻¹):

| Time / h | 0 | 2 | 4 | 6 | 8 | 10 |
|---|---|---|---|---|---|---|
| Flask 1 | 0.9 | 1.9 | 3.7 | 7.6 | 15.0 | 30.4 |
| Flask 2 | 1.0 | 2.1 | 4.0 | 8.3 | 15.9 | 32.1 |
| Flask 3 | 1.1 | 2.3 | 4.3 | 8.7 | 16.8 | 34.4 |

(a) Calculate the mean at each time and describe how to graph the data.
(b) Use the means to test whether growth is exponential.
(c) Estimate dN/dt and the per capita growth rate between 8 h and 10 h.

**(a) Means.** Add the three flasks and divide by 3. For example, at 10 h: (30.4 + 32.1 + 34.4) ÷ 3 = 96.9 ÷ 3 = **32.3**. The means are 1.0, 2.1, 4.0, 8.2, 15.9 and 32.3.

**Graph.** Line graph of mean cell density against time; time on the x-axis in hours; cell density on the y-axis with its unit; error bars showing the range of the three flasks. On a linear axis (Figure 2A) the first four points are squashed near zero. A log axis (Figure 2B) spreads them out.

**(b) Test.** For exponential growth, the population should be multiplied by the same factor in each equal time interval.

| Interval / h | 0–2 | 2–4 | 4–6 | 6–8 | 8–10 |
|---|---|---|---|---|---|
| Ratio of means | 2.1 | 1.9 | 2.05 | 1.94 | 2.03 |

Each ratio is close to 2, so the culture doubles about every 2 hours. Over 10 h the density rises 32.3-fold, about five doublings (2⁵ = 32). The points lie close to a straight line on the log graph. The data **support** exponential growth over this period.

**(c) Rates.**

1. dN/dt ≈ change in N ÷ change in time = (32.3 − 15.9) ÷ 2 = 16.4 ÷ 2 = **8.2 × 10⁴ cells mL⁻¹ h⁻¹**.
2. Mean density over the interval = (15.9 + 32.3) ÷ 2 = 24.1 × 10⁴ cells mL⁻¹.
3. Per capita growth rate ≈ 8.2 ÷ 24.1 = **0.34 per hour**.

**Interpretation.** Between 0 and 2 h, dN/dt was only 0.55 × 10⁴ cells mL⁻¹ h⁻¹, but the per capita rate was similar (0.55 ÷ 1.55 ≈ 0.36 per hour). The absolute rate rose about 15-fold while the per capita rate stayed roughly constant: exactly what dN/dt = rₘₐₓN predicts. The sugar was plentiful, so rₘₐₓ ≈ 0.34–0.36 per hour for these conditions. With only three flasks and 10 hours of data, this is support, not proof; a longer run would show growth slowing as sugar runs out.

## Common misconceptions

- **"Exponential growth just means fast growth."** It means growth in proportion to N, with a constant per capita rate. A slow-breeding species can grow exponentially; it just has a smaller rₘₐₓ.
- **"In exponential growth the growth rate is constant."** The per capita rate is constant. The number added per unit time (dN/dt) keeps rising.
- **"B is the birth rate per individual."** In dN/dt = B − D, B and D are totals for the whole population per unit time. Divide by N to get per capita rates.
- **"A population with more births per year must be growing faster."** Compare per capita rates: a large population can have more births but a lower growth rate per individual.
- **"Deaths stop a population growing."** The population still grows as long as B > D. It only shrinks when deaths outnumber births.
- **"All the animals in a forest are a population."** Several species together form a community. A population is one species.
- **"A straight line on a log graph means linear growth."** On a log scale, a straight line means steady multiplication, which is exponential growth.
- **"Populations can grow exponentially forever."** Exponential growth needs unlimited resources. Sooner or later, food, space or other limits slow it down.

## Where this leads

This topic builds on how energy moves through ecosystems ([Energy Flow Through Ecosystems](/advanced-course-resources/biology/8-2-energy-flow-through-ecosystems-study-guide/)). Next, you will see what happens when resources run short and the population's own density slows its growth: [Effect of Density on Populations](/advanced-course-resources/biology/8-4-effect-density-on-populations-study-guide/). Test yourself with the [practice questions](/advanced-course-resources/biology/8-3-population-ecology-practice/), then use the [revision notes](/advanced-course-resources/biology/8-3-population-ecology-revision-notes/) and the [checklist](/advanced-course-resources/biology/8-3-population-ecology-checklist/).
