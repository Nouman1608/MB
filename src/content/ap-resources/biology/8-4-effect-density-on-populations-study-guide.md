---
resourceId: "mb-ap-bio-8.4-study-guide"
title: "Effect of Density on Populations: Study Guide (Biology 8.4)"
description: "Learn what carrying capacity is, how density-dependent and density-independent factors limit growth, and how to use the logistic equation and calculate means, ratios and percentages from population data."
course: "biology"
unit: 8
topics: ["8.4"]
resourceType: "study-guide"
prerequisites:
  - "Births, deaths and per capita growth rates (dN/dt = B − D)"
  - "Exponential growth and the equation dN/dt = rₘₐₓN"
prerequisiteResources: ["mb-ap-bio-8.3-study-guide"]
learningObjectives:
  - "Define population density and carrying capacity, and explain how resources set carrying capacity"
  - "Explain how a rising density reduces the resources available to each individual and so lowers births and raises deaths"
  - "Distinguish density-dependent from density-independent factors, with examples and data"
  - "Use dN/dt = rₘₐₓN(K − N)/K to calculate growth rates and describe the S-shaped logistic curve"
  - "Calculate means, rates, ratios, percentages and percentage changes from population data"
skills: ["1", "2", "4", "5", "6"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "Logistic growth: dN/dt = rₘₐₓN(K − N)/K. Work out (K − N)/K first. Keep full values until the last step"
related: ["mb-ap-bio-8.4-revision-notes", "mb-ap-bio-8.4-practice", "mb-ap-bio-8.4-checklist"]
next: "mb-ap-bio-8.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "Population density is the number of individuals per unit area or volume. Resources set how many individuals an area can support, and density sets how much of each resource each individual gets."
  - "Carrying capacity (K) is the largest population size the environment's total resources can support in the long term."
  - "Density-dependent factors (competition, predation, disease, waste) hit a larger fraction of the population as density rises. Density-independent factors (storms, frost, fire) hit about the same fraction at any density."
  - "As these limits take hold, growth usually becomes logistic: dN/dt = rₘₐₓN(K − N)/K. The curve is S-shaped, growth is fastest at N = K/2 and stops at N = K."
faqs:
  - question: "Is carrying capacity a fixed number for a species?"
    answer: "No. K belongs to a species in a particular environment. If food, water or space changes, for example in a drought or a good rainy season, K changes too."
  - question: "Can a population be larger than K?"
    answer: "For a short time, yes. Then (K − N)/K is negative, so the logistic equation gives a negative dN/dt and the population falls back toward K."
  - question: "Does reading about density effects count as a lab?"
    answer: "No. Reading and simulations do not meet the course's laboratory requirement. Growing cultures at different densities is a good investigation to carry out with your teacher."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Density and resources work in both directions

**Population density** is the number of individuals per unit area or volume: for example, 40 water fleas per litre or 200 ground beetles per square metre. Density matters because every individual needs **resources**: food, water, light, nutrients, space, shelter or nest sites.

The link runs both ways:

- **Resources determine density.** A habitat with more food or space can hold more individuals. The supply of the scarcest resource sets the upper limit.
- **Density affects resources.** When more individuals share the same supply, each one gets less. Less food means less energy for reproduction and a higher chance of starving. So as density rises, the per capita birth rate tends to fall and the per capita death rate tends to rise.

In the previous topic, the per capita growth rate stayed at its maximum, rₘₐₓ, because resources were unlimited. This topic is about what happens when they are not.

## Carrying capacity

**Carrying capacity (K)** is the largest population size that the total available resources of an ecosystem can support **sustainably**, that is, year after year, without the resources being used up.

- K is set by the **limiting resource**: the one that runs short first. For a plant on poor soil it might be nitrogen; for a nesting seabird it might be ledges on a cliff.
- K is not a property of the species alone. The same species has a higher K in a richer habitat.
- K can **change**. A drought can lower it; a new food source can raise it.
- At K, births and deaths balance on average (B = D), so dN/dt = 0.

## What limits growth: two kinds of factor

| | Density-dependent factors | Density-independent factors |
|---|---|---|
| **Key test** | the **fraction** affected rises as density rises | the **fraction** affected is about the same at any density |
| **Examples** | competition for food, water, light or nest sites; predation; disease and parasites (spread more easily when crowded); build-up of toxic waste; stress and territorial fighting | frost, heat waves, storms, floods, drought, fire, some human disturbances |
| **Effect on growth** | lowers per capita births and/or raises per capita deaths more strongly as N approaches K | knocks the population down by a set proportion, whatever its size |
| **Can it hold N near K?** | yes: it pushes back harder the larger N gets | no: it does not "know" how large the population is |

Notice the word **fraction**. A storm that kills 30% of a population kills more individuals in a dense population than in a sparse one, but the **percentage** is the same, so it is density-independent. A disease whose infection rate rises from 5% to 40% as crowding increases is density-dependent.

Both kinds of factor act together in real populations. A density-independent event, such as a hard frost, may cut a population far below K. Density-dependent factors then decide how quickly it recovers and where it levels off. A density-independent change, such as a long drought that reduces plant growth, can also lower K itself.

## Logistic growth

When density-dependent limits are included, growth usually follows the **logistic model**:

**dN/dt = rₘₐₓN × (K − N)/K**

where N is population size, t is time, rₘₐₓ is the maximum per capita growth rate and K is the carrying capacity.

The new part is the fraction **(K − N)/K**. It is the share of the carrying capacity that is still unused. It acts as a brake on exponential growth:

- **N small compared with K:** (K − N)/K is close to 1, so dN/dt ≈ rₘₐₓN. Growth is nearly exponential.
- **N = K/2:** (K − N)/K = 0.5. dN/dt reaches its **maximum**, rₘₐₓK/4. The curve is steepest here.
- **N close to K:** (K − N)/K is close to 0, so growth slows almost to a stop.
- **N = K:** dN/dt = 0. The population is stable.
- **N > K:** (K − N)/K is negative, so dN/dt is negative. The population falls back toward K.

The per capita growth rate is rₘₐₓ(K − N)/K. It falls steadily as N rises. This is density dependence written as an equation.

<figure>
<svg viewBox="0 0 520 330" role="img" aria-labelledby="log-title log-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="log-title">Logistic growth compared with exponential growth</title>
<desc id="log-desc">Graph of population size N, 0 to 500 and above, against time in years, 0 to 16. A dashed horizontal line at N equals 500 is labelled carrying capacity K. A solid S-shaped curve starts at 10, rises slowly, becomes steepest near N equals 250 at about 6.5 years, marked with a square and labelled K over 2, then levels off just below 500. A dashed J-shaped curve, labelled exponential, starts at the same point, follows the S-curve at first, then shoots up past 500 before 7 years.</desc>
<rect x="0" y="0" width="520" height="330" fill="#ffffff"/>
<line x1="70" y1="280" x2="480" y2="280" stroke="#1d2b44" stroke-width="2"/>
<line x1="70" y1="280" x2="70" y2="40" stroke="#1d2b44" stroke-width="2"/>
<text x="70" y="298" text-anchor="middle" font-size="12" fill="#1d2b44">0</text>
<text x="170" y="298" text-anchor="middle" font-size="12" fill="#1d2b44">4</text>
<text x="270" y="298" text-anchor="middle" font-size="12" fill="#1d2b44">8</text>
<text x="370" y="298" text-anchor="middle" font-size="12" fill="#1d2b44">12</text>
<text x="470" y="298" text-anchor="middle" font-size="12" fill="#1d2b44">16</text>
<text x="62" y="284" text-anchor="end" font-size="12" fill="#1d2b44">0</text>
<text x="62" y="124" text-anchor="end" font-size="12" fill="#1d2b44">400</text>
<text x="62" y="84" text-anchor="end" font-size="12" fill="#1d2b44">500</text>
<text x="275" y="322" text-anchor="middle" font-size="14" fill="#1d2b44">Time / years</text>
<text x="20" y="165" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 20 165)">Population size, N</text>
<line x1="70" y1="80" x2="480" y2="80" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="4 4"/>
<text x="480" y="70" text-anchor="end" font-size="13" font-weight="600" fill="#1d2b44">Carrying capacity, K = 500</text>
<line x1="70" y1="180" x2="232" y2="180" stroke="#1d2b44" stroke-width="0.8" stroke-dasharray="2 4"/>
<text x="62" y="184" text-anchor="end" font-size="12" fill="#1d2b44">250</text>
<polyline points="70,276 82.5,274.6 95,272.7 107.5,270.2 120,266.7 132.5,262.1 145,255.8 157.5,247.3 170,235.9 182.5,220.5 195,199.7 207.5,171.5 220,133.6 232.5,82.4 237.7,56" fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="9 6"/>
<polyline points="70,276 82.5,274.6 95,272.8 107.5,270.4 120,267.3 132.5,263.2 145,258 157.5,251.4 170,243.3 182.5,233.4 195,221.9 207.5,208.8 220,194.5 232.5,179.6 245,164.7 257.5,150.5 270,137.5 282.5,126 295,116.2 307.5,108.2 320,101.7 332.5,96.5 345,92.5 357.5,89.4 370,87.1 382.5,85.3 395,83.9 407.5,82.9 420,82.2 432.5,81.6 445,81.2 457.5,80.9 470,80.7" fill="none" stroke="#1d2b44" stroke-width="3"/>
<rect x="227" y="175" width="10" height="10" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="246" y="196" font-size="13" fill="#1d2b44">K/2: steepest point</text>
<text x="244" y="50" font-size="13" fill="#1d2b44">Exponential (dashed)</text>
<text x="330" y="125" font-size="13" fill="#1d2b44">Logistic (solid, S-shaped)</text>
</svg>
<figcaption>Figure 1. Model populations with rₘₐₓ = 0.6 per year, starting at N = 10. The logistic curve (solid) follows the exponential curve (dashed) at first, is steepest at K/2 = 250 (square) and levels off at K = 500.</figcaption>
</figure>

A second useful graph plots the **growth rate** against **population size**. For exponential growth it is a straight line through the origin. For logistic growth it is a hump: zero at N = 0, highest at K/2, zero again at K and negative above K.

<figure>
<svg viewBox="0 0 520 330" role="img" aria-labelledby="rate-title rate-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="rate-title">Population growth rate against population size</title>
<desc id="rate-desc">Graph of dN/dt in individuals per year, from minus 40 to 160, against population size N from 0 to 600. A dotted horizontal line marks dN/dt equals zero. A dashed straight line labelled exponential rises from the origin to 150 at N equals 250. A solid hump-shaped curve labelled logistic rises from 0 at N equals 0 to a peak of 75 at N equals 250, falls to 0 at N equals 500, and goes below zero, passing minus 33 at N equals 550 and continuing downward. Circles mark the points at N equals 50, 250, 450 and 550 used in Worked example 1.</desc>
<rect x="0" y="0" width="520" height="330" fill="#ffffff"/>
<line x1="70" y1="290" x2="440" y2="290" stroke="#1d2b44" stroke-width="2"/>
<line x1="70" y1="290" x2="70" y2="20" stroke="#1d2b44" stroke-width="2"/>
<line x1="70" y1="220" x2="440" y2="220" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4"/>
<text x="62" y="272" text-anchor="end" font-size="12" fill="#1d2b44">−40</text>
<text x="62" y="224" text-anchor="end" font-size="12" fill="#1d2b44">0</text>
<text x="62" y="176" text-anchor="end" font-size="12" fill="#1d2b44">40</text>
<text x="62" y="128" text-anchor="end" font-size="12" fill="#1d2b44">80</text>
<text x="62" y="80" text-anchor="end" font-size="12" fill="#1d2b44">120</text>
<text x="62" y="32" text-anchor="end" font-size="12" fill="#1d2b44">160</text>
<text x="70" y="306" text-anchor="middle" font-size="12" fill="#1d2b44">0</text>
<text x="130" y="306" text-anchor="middle" font-size="12" fill="#1d2b44">100</text>
<text x="190" y="306" text-anchor="middle" font-size="12" fill="#1d2b44">200</text>
<text x="250" y="306" text-anchor="middle" font-size="12" fill="#1d2b44">300</text>
<text x="310" y="306" text-anchor="middle" font-size="12" fill="#1d2b44">400</text>
<text x="370" y="306" text-anchor="middle" font-size="12" fill="#1d2b44">500</text>
<text x="430" y="306" text-anchor="middle" font-size="12" fill="#1d2b44">600</text>
<text x="255" y="324" text-anchor="middle" font-size="14" fill="#1d2b44">Population size, N</text>
<text x="20" y="155" text-anchor="middle" font-size="13" fill="#1d2b44" transform="rotate(-90 20 155)">dN/dt / individuals per year</text>
<line x1="70" y1="220" x2="220" y2="40" stroke="#1d2b44" stroke-width="2" stroke-dasharray="9 6"/>
<polyline points="70,220 85,202.9 100,187.6 115,174.1 130,162.4 145,152.5 160,144.4 175,138.1 190,133.6 205,130.9 220,130 235,130.9 250,133.6 265,138.1 280,144.4 295,152.5 310,162.4 325,174.1 340,187.6 355,202.9 370,220 385,238.9 400,259.6 415,282.1" fill="none" stroke="#1d2b44" stroke-width="3"/>
<circle cx="100" cy="187.6" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="220" cy="130" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="340" cy="187.6" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="400" cy="259.6" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="228" y="40" font-size="13" fill="#1d2b44">Exponential, rₘₐₓN (dashed)</text>
<text x="226" y="118" font-size="13" fill="#1d2b44">Peak at K/2 = 250</text>
<text x="300" y="100" font-size="13" fill="#1d2b44">Logistic (solid)</text>
<text x="378" y="212" font-size="12" fill="#1d2b44">K = 500</text>
<text x="408" y="252" font-size="12" fill="#1d2b44">N &gt; K: negative</text>
</svg>
<figcaption>Figure 2. Growth rate against population size for the same model (rₘₐₓ = 0.6 per year, K = 500). The dashed line is exponential growth; the solid hump is logistic growth. Circles are the four values calculated in Worked example 1.</figcaption>
</figure>

### Real populations are messier

The logistic curve is a model. Real populations often **overshoot** K and then fall back, or **oscillate** around it, because births and deaths respond to crowding with a delay. Density-independent events add sudden drops. As background, these patterns do not mean the model is useless: it still predicts the general shape and the role of K.

## Worked example 1: using the logistic equation

**Question.** A fictional population of marsh voles has rₘₐₓ = 0.6 per year in a meadow with K = 500. Calculate dN/dt when N = 50, 250, 450 and 550. Compare the value at N = 250 with exponential growth, and interpret the results.

1. Work out (K − N)/K first for each N:
   - N = 50: (500 − 50) ÷ 500 = 450 ÷ 500 = 0.9
   - N = 250: 250 ÷ 500 = 0.5
   - N = 450: 50 ÷ 500 = 0.1
   - N = 550: −50 ÷ 500 = −0.1
2. Multiply by rₘₐₓN:

| N | rₘₐₓN | (K − N)/K | dN/dt / voles per year | Per capita rate / per year |
|---|---|---|---|---|
| 50 | 30 | 0.9 | **27** | 0.54 |
| 250 | 150 | 0.5 | **75** | 0.30 |
| 450 | 270 | 0.1 | **27** | 0.06 |
| 550 | 330 | −0.1 | **−33** | −0.06 |

3. **Comparison.** With no limits, dN/dt at N = 250 would be rₘₐₓN = 150 voles per year. Logistic growth gives 75, a reduction of (150 − 75) ÷ 150 × 100 = **50%**.

**Check the units.** rₘₐₓ (per year) × N (voles) × a pure number gives voles per year. ✓

**Interpretation.**

- The largest growth, 75 voles per year, is at N = 250, which is K/2 (check: rₘₐₓK/4 = 0.6 × 500 ÷ 4 = 75 ✓).
- N = 50 and N = 450 give the **same** dN/dt (27), for opposite reasons. At 50, each vole reproduces fast but there are few voles. At 450, there are many voles but each one reproduces slowly because resources are scarce.
- The per capita rate falls steadily, from 0.54 to 0.06 per year, as density rises. That is density dependence.
- At N = 550 the population is above K, so it shrinks by about 33 voles a year, back toward 500.

These four values are the circles in Figure 2.

## Worked example 2: is reproduction density-dependent?

**Question.** A student grows water fleas (*Daphnia*) in 1-litre jars at four densities, with three jars per density. Every jar gets the same daily amount of algae as food. After 10 days she records the number of offspring per adult female.

| Females per litre | Jar 1 | Jar 2 | Jar 3 |
|---|---|---|---|
| 5 | 12.4 | 11.8 | 12.1 |
| 10 | 9.6 | 9.0 | 9.3 |
| 20 | 6.1 | 6.4 | 5.8 |
| 40 | 3.3 | 2.8 | 3.2 |

(a) Calculate the mean offspring per female at each density.
(b) Calculate the percentage change in offspring per female from 5 to 40 females per litre, and the ratio of the two means.
(c) Calculate the total offspring per jar at each density, and explain what the totals suggest.
(d) State whether this factor is density-dependent, and explain why.

**(a) Means.** Add the three jars and divide by 3. At 5 per litre: (12.4 + 11.8 + 12.1) ÷ 3 = 36.3 ÷ 3 = **12.1**. Likewise, 10 per litre: **9.3**; 20 per litre: **6.1**; 40 per litre: **3.1**.

**(b) Percentage change** = (new − original) ÷ original × 100 = (3.1 − 12.1) ÷ 12.1 × 100 = −9.0 ÷ 12.1 × 100 = **−74%** (a 74% decrease). **Ratio** 12.1 : 3.1 ≈ **3.9 : 1**. So an 8-fold rise in density cut each female's output to about a quarter.

**(c) Totals per jar** = females × mean offspring per female:

| Females per litre | 5 | 10 | 20 | 40 |
|---|---|---|---|---|
| Total offspring per jar | 60.5 | 93 | 122 | 124 |

The total rises at first but then levels off: doubling from 20 to 40 females adds almost nothing (122 to 124, under 2%). The fixed food supply limits how many offspring a jar can produce, however many females share it. This is carrying capacity in action: the jar's resources cap the population's growth.

**(d)** **Density-dependent.** As density rises, the effect per individual grows: each female gets a smaller share of the same algae, so has less energy and matter for making eggs. The per capita birth rate falls as density rises, which is exactly the brake in the logistic equation.

**How confident?** The three jars at each density agree closely (for example 2.8–3.3 at 40 per litre), and the ranges do not overlap between densities, so the pattern is unlikely to be chance. A further control, such as extra food at high density, would test whether food (and not, say, waste build-up) is the cause.

## Common misconceptions

- **"Carrying capacity is the most individuals that can ever be present."** It is the size that can be **sustained**. A population can briefly exceed K, but it then declines.
- **"K is fixed for a species."** It depends on the environment and changes when resources change.
- **"A storm that kills more individuals in a dense population is density-dependent."** Look at the **fraction** killed. If the percentage is the same at all densities, the factor is density-independent.
- **"Logistic growth is fastest when the population is near K."** It is fastest at K/2. Near K, growth almost stops.
- **"At carrying capacity, nothing is born and nothing dies."** Births and deaths continue; they balance, so dN/dt = 0.
- **"The per capita rate is constant in logistic growth."** It falls as N rises: per capita rate = rₘₐₓ(K − N)/K.
- **"Density-independent factors do not matter to population size."** They can cause sudden crashes and can change K, but they do not hold the population steady around K.

## Where this leads

This topic builds on exponential growth from [Population Ecology](/advanced-course-resources/biology/8-3-population-ecology-study-guide/). Competition, predation and disease link one population to others, which is the focus of the next topic, [Community Ecology](/advanced-course-resources/biology/8-5-community-ecology-study-guide/). Test yourself with the [practice questions](/advanced-course-resources/biology/8-4-effect-density-on-populations-practice/), then use the [revision notes](/advanced-course-resources/biology/8-4-effect-density-on-populations-revision-notes/) and the [checklist](/advanced-course-resources/biology/8-4-effect-density-on-populations-checklist/).
