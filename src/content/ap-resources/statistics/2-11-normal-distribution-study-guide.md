---
resourceId: "mb-ap-stats-2.11-study-guide"
title: "The Normal Distribution: Study Guide (Statistics 2.11)"
description: "Learn to describe normal distributions, use the 68–95–99.7 rule, find probabilities as areas, find boundary values for a given area, and compare positions with percentiles."
course: "statistics"
unit: 2
topics: ["2.11"]
resourceType: "study-guide"
prerequisites:
  - "Calculating and interpreting z-scores (Topic 1.9)"
  - "Probability distributions and their mean and standard deviation (Topics 2.8 and 2.9)"
prerequisiteResources: ["mb-ap-stats-2.10-study-guide"]
learningObjectives:
  - "Describe a continuous random variable and explain why probabilities for it are areas over intervals"
  - "Describe a normal curve by its shape and its two parameters, and explain how the standard deviation changes the curve"
  - "State the mean and standard deviation of the standard normal distribution and standardise values with z-scores"
  - "Estimate percentages for a normal distribution with the 68–95–99.7 rule"
  - "Calculate the probability that a normal random variable falls in an interval, using technology or a z-table"
  - "Find the boundary values that cut off a given area: the lowest p%, the highest p%, the middle p% and the most extreme p%"
  - "Compare the relative positions of values within one normal distribution or between two, using percentiles and proportions"
skills: ["3", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "graphing"
calculatorNote: "Use normalcdf(lower, upper, μ, σ) for areas and invNorm(area to the left, μ, σ) for boundaries. Table answers can differ from technology in the third or fourth decimal place. Give probabilities to 4 decimal places."
related: ["mb-ap-stats-2.11-revision-notes", "mb-ap-stats-2.11-practice", "mb-ap-stats-2.11-checklist"]
next: "mb-ap-stats-2.11-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "A normal distribution is continuous, unimodal, symmetric and bell-shaped, and is fixed by its mean μ and standard deviation σ."
  - "For a continuous random variable, a probability is an area under the curve over an interval; the total area is 1."
  - "About 68%, 95% and 99.7% of values lie within 1, 2 and 3 standard deviations of the mean."
  - "The standard normal distribution has μ = 0 and σ = 1; z = (x − μ) / σ moves any normal value onto it."
  - "Show your work: name the distribution and its parameters, mark the boundary and direction, then give the area."
faqs:
  - question: "Should I use a z-table or my calculator?"
    answer: "Either is accepted. Technology (normalcdf and invNorm) is quicker and more precise. A table needs the z-score rounded to 2 decimal places, so its answer can differ slightly. Whichever you use, write the distribution, its parameters and the boundaries so a reader can follow your work."
  - question: "Is P(X < 785) different from P(X ≤ 785) for a normal variable?"
    answer: "No. For a continuous random variable the probability of any single exact value is 0, so including or excluding the boundary does not change the area."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Continuous random variables

In Topics 2.8 to 2.10 you met **discrete** random variables, such as a count of successes. You could list their values and give each one a probability.

A **continuous random variable** can take any value in an interval: a mass, a time, a height. You cannot list every value. So probability works differently:

- Probability belongs to **intervals**, not single values. "The loaf weighs between 790 g and 815 g" has a probability. "The loaf weighs exactly 800 g" has probability 0, because exactly 800.000… g is one point among infinitely many.
- The probability that the variable falls in an interval is the **area under the density curve** over that interval.
- The **total area** under the curve is 1, just as the probabilities of a discrete distribution add to 1.

Because a single value has probability 0, P(X < a) and P(X ≤ a) are the same for a continuous variable.

## The normal curve

Many continuous variables are **well modelled by a normal distribution**: lengths and masses of manufactured items, measurement errors, many biological measurements. A normal curve is:

- **continuous**: a smooth curve, with no gaps;
- **unimodal**: one peak;
- **symmetric** about its centre;
- **bell-shaped**: it falls away on both sides and gets very close to the axis in the tails, without ever touching it.

A normal distribution is completely fixed by two parameters:

- the **mean μ**, which is the centre (and, by symmetry, also the median and the mode);
- the **standard deviation σ**, which sets the spread.

We write **X ~ N(μ, σ)**. For example, N(800, 12) means a normal distribution with mean 800 and standard deviation 12. (Some books put the variance σ² second. In this course, the second number is the standard deviation; say so if there could be doubt.)

A normal curve can model two things: a **distribution of data** (the masses of all the loaves a bakery made last month) or a **random variable** (the mass of one loaf chosen at random). The same areas answer both kinds of question: "what proportion of loaves…?" and "what is the probability that a randomly chosen loaf…?".

## How σ changes the curve

The area under every normal curve is 1. So if the values are more spread out, the curve has to be lower:

- **smaller σ:** the curve is **taller** and more **concentrated** around μ;
- **larger σ:** the curve is **shorter** and more **spread out**.

Changing μ just slides the curve left or right without changing its shape.

<figure>
<svg viewBox="0 0 640 260" role="img" aria-labelledby="sd-title sd-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="sd-title">Two normal curves with the same mean and different standard deviations</title>
<desc id="sd-desc">A horizontal axis from 40 to 160. A solid curve for a normal distribution with mean 100 and standard deviation 10 is tall and narrow, peaking above 100 and almost touching the axis by 70 and 130. A dashed curve for a normal distribution with mean 100 and standard deviation 20 has the same centre but is half as tall and spreads from about 40 to 160. Both curves are symmetric about 100.</desc>
<rect x="0" y="0" width="640" height="260" fill="#ffffff"/>
<line x1="40" y1="200" x2="600" y2="200" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5"><line x1="40" y1="200" x2="40" y2="207"/><line x1="133" y1="200" x2="133" y2="207"/><line x1="227" y1="200" x2="227" y2="207"/><line x1="320" y1="200" x2="320" y2="207"/><line x1="413" y1="200" x2="413" y2="207"/><line x1="507" y1="200" x2="507" y2="207"/><line x1="600" y1="200" x2="600" y2="207"/></g>
<g font-size="13" fill="#1d2b44" text-anchor="middle"><text x="40" y="222">40</text><text x="133" y="222">60</text><text x="227" y="222">80</text><text x="320" y="222">100</text><text x="413" y="222">120</text><text x="507" y="222">140</text><text x="600" y="222">160</text></g>
<path d="M40.0 200.0 L44.7 200.0 L49.3 200.0 L54.0 200.0 L58.7 200.0 L63.3 200.0 L68.0 200.0 L72.7 200.0 L77.3 200.0 L82.0 200.0 L86.7 200.0 L91.3 200.0 L96.0 200.0 L100.7 200.0 L105.3 200.0 L110.0 200.0 L114.7 200.0 L119.3 200.0 L124.0 200.0 L128.7 200.0 L133.3 199.9 L138.0 199.9 L142.7 199.9 L147.3 199.8 L152.0 199.8 L156.7 199.7 L161.3 199.5 L166.0 199.4 L170.7 199.1 L175.3 198.8 L180.0 198.3 L184.7 197.8 L189.3 197.0 L194.0 196.1 L198.7 194.9 L203.3 193.4 L208.0 191.6 L212.7 189.3 L217.3 186.7 L222.0 183.5 L226.7 179.7 L231.3 175.3 L236.0 170.3 L240.7 164.6 L245.3 158.3 L250.0 151.3 L254.7 143.7 L259.3 135.6 L264.0 127.0 L268.7 118.1 L273.3 109.0 L278.0 99.9 L282.7 91.1 L287.3 82.6 L292.0 74.7 L296.7 67.6 L301.3 61.5 L306.0 56.6 L310.7 53.0 L315.3 50.7 L320.0 50.0 L324.7 50.7 L329.3 53.0 L334.0 56.6 L338.7 61.5 L343.3 67.6 L348.0 74.7 L352.7 82.6 L357.3 91.1 L362.0 99.9 L366.7 109.0 L371.3 118.1 L376.0 127.0 L380.7 135.6 L385.3 143.7 L390.0 151.3 L394.7 158.3 L399.3 164.6 L404.0 170.3 L408.7 175.3 L413.3 179.7 L418.0 183.5 L422.7 186.7 L427.3 189.3 L432.0 191.6 L436.7 193.4 L441.3 194.9 L446.0 196.1 L450.7 197.0 L455.3 197.8 L460.0 198.3 L464.7 198.8 L469.3 199.1 L474.0 199.4 L478.7 199.5 L483.3 199.7 L488.0 199.8 L492.7 199.8 L497.3 199.9 L502.0 199.9 L506.7 199.9 L511.3 200.0 L516.0 200.0 L520.7 200.0 L525.3 200.0 L530.0 200.0 L534.7 200.0 L539.3 200.0 L544.0 200.0 L548.7 200.0 L553.3 200.0 L558.0 200.0 L562.7 200.0 L567.3 200.0 L572.0 200.0 L576.7 200.0 L581.3 200.0 L586.0 200.0 L590.7 200.0 L595.3 200.0 L600.0 200.0" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<path d="M40.0 199.2 L44.7 199.0 L49.3 198.9 L54.0 198.7 L58.7 198.5 L63.3 198.3 L68.0 198.0 L72.7 197.8 L77.3 197.4 L82.0 197.1 L86.7 196.7 L91.3 196.3 L96.0 195.8 L100.7 195.3 L105.3 194.7 L110.0 194.0 L114.7 193.3 L119.3 192.6 L124.0 191.7 L128.7 190.8 L133.3 189.8 L138.0 188.8 L142.7 187.7 L147.3 186.5 L152.0 185.2 L156.7 183.8 L161.3 182.3 L166.0 180.8 L170.7 179.1 L175.3 177.4 L180.0 175.6 L184.7 173.8 L189.3 171.8 L194.0 169.8 L198.7 167.8 L203.3 165.7 L208.0 163.5 L212.7 161.3 L217.3 159.0 L222.0 156.8 L226.7 154.5 L231.3 152.2 L236.0 150.0 L240.7 147.7 L245.3 145.5 L250.0 143.4 L254.7 141.3 L259.3 139.3 L264.0 137.3 L268.7 135.5 L273.3 133.8 L278.0 132.2 L282.7 130.8 L287.3 129.4 L292.0 128.3 L296.7 127.3 L301.3 126.5 L306.0 125.8 L310.7 125.4 L315.3 125.1 L320.0 125.0 L324.7 125.1 L329.3 125.4 L334.0 125.8 L338.7 126.5 L343.3 127.3 L348.0 128.3 L352.7 129.4 L357.3 130.8 L362.0 132.2 L366.7 133.8 L371.3 135.5 L376.0 137.3 L380.7 139.3 L385.3 141.3 L390.0 143.4 L394.7 145.5 L399.3 147.7 L404.0 150.0 L408.7 152.2 L413.3 154.5 L418.0 156.8 L422.7 159.0 L427.3 161.3 L432.0 163.5 L436.7 165.7 L441.3 167.8 L446.0 169.8 L450.7 171.8 L455.3 173.8 L460.0 175.6 L464.7 177.4 L469.3 179.1 L474.0 180.8 L478.7 182.3 L483.3 183.8 L488.0 185.2 L492.7 186.5 L497.3 187.7 L502.0 188.8 L506.7 189.8 L511.3 190.8 L516.0 191.7 L520.7 192.6 L525.3 193.3 L530.0 194.0 L534.7 194.7 L539.3 195.3 L544.0 195.8 L548.7 196.3 L553.3 196.7 L558.0 197.1 L562.7 197.4 L567.3 197.8 L572.0 198.0 L576.7 198.3 L581.3 198.5 L586.0 198.7 L590.7 198.9 L595.3 199.0 L600.0 199.2" fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="8 5"/>
<line x1="320" y1="200" x2="320" y2="40" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4"/>
<text x="328" y="44" font-size="13" fill="#1d2b44">μ = 100</text>
<text x="357" y="80" font-size="13" fill="#1d2b44">σ = 10 (solid): taller, narrower</text>
<text x="423" y="148" font-size="13" fill="#1d2b44">σ = 20 (dashed)</text><text x="423" y="164" font-size="13" fill="#1d2b44">shorter, wider</text>
<text x="320" y="245" text-anchor="middle" font-size="14" fill="#1d2b44">Value of the variable</text>
</svg>
<figcaption>Figure 1. Two normal curves with mean 100. The solid curve (σ = 10) is twice as tall as the dashed curve (σ = 20) because it spreads the same total area of 1 over a narrower range.</figcaption>
</figure>

## The standard normal distribution

The **standard normal distribution** is the normal distribution with **mean 0 and standard deviation 1**, written N(0, 1). Its variable is usually called Z.

You already know z-scores from Topic 1.9: **z = (x − μ) / σ** counts how many standard deviations a value lies above or below the mean. If X ~ N(μ, σ), then the z-score of X follows N(0, 1). This is why a single table of areas for Z works for every normal distribution. To go back from a z-score to a value, use **x = μ + zσ**.

A standard normal table gives the **area to the left** of z, that is P(Z < z), with z rounded to 2 decimal places. For example, P(Z < 1.25) = 0.8944.

## The empirical rule (68–95–99.7)

For any normal distribution, approximately:

- **68%** of values lie within **1** standard deviation of the mean;
- **95%** lie within **2** standard deviations;
- **99.7%** lie within **3** standard deviations.

Using symmetry, you can split these into strips: 34% between μ and μ + σ, 13.5% between μ + σ and μ + 2σ, 2.35% between μ + 2σ and μ + 3σ, and 0.15% beyond μ + 3σ (the same on the left). The rule gives quick **estimates**; technology gives more precise values (for example, 68.27% rather than 68%).

The fictional Corran Bakery makes sourdough loaves. Their masses are approximately normal with **mean 800 g and standard deviation 12 g**: X ~ N(800, 12).

<figure>
<svg viewBox="0 0 640 290" role="img" aria-labelledby="er-title er-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="er-title">The empirical rule for loaf masses with mean 800 g and standard deviation 12 g</title>
<desc id="er-desc">A normal curve centred on 800 grams. Dashed vertical lines mark 764, 776, 788, 800, 812, 824 and 836 grams, which are the mean and 1, 2 and 3 standard deviations either side. Labels inside the curve give the approximate area of each strip: 34% between the mean and one standard deviation on each side, 13.5% between one and two standard deviations, and 2.35% between two and three. Brackets above the curve show that about 68% of loaves lie between 788 and 812 grams, 95% between 776 and 824 grams, and 99.7% between 764 and 836 grams.</desc>
<rect x="0" y="0" width="640" height="290" fill="#ffffff"/>
<path d="M240 70 V62 H400 V70" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="320" y="57" text-anchor="middle" font-size="13" fill="#1d2b44">68%</text><path d="M160 48 V40 H480 V48" fill="none" stroke="#1d2b44" stroke-width="1.5"/><text x="320" y="35" text-anchor="middle" font-size="13" fill="#1d2b44">95%</text><path d="M80 26 V18 H560 V26" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<text x="566" y="24" font-size="13" fill="#1d2b44">99.7%</text>
<line x1="40" y1="230" x2="600" y2="230" stroke="#1d2b44" stroke-width="2"/>
<path d="M40.0 229.7 L43.3 229.7 L46.7 229.6 L50.0 229.6 L53.3 229.5 L56.7 229.4 L60.0 229.3 L63.3 229.2 L66.7 229.1 L70.0 229.0 L73.3 228.9 L76.7 228.7 L80.0 228.6 L83.3 228.4 L86.7 228.2 L90.0 227.9 L93.3 227.7 L96.7 227.4 L100.0 227.0 L103.3 226.7 L106.7 226.3 L110.0 225.9 L113.3 225.4 L116.7 224.9 L120.0 224.3 L123.3 223.7 L126.7 223.0 L130.0 222.3 L133.3 221.5 L136.7 220.6 L140.0 219.7 L143.3 218.7 L146.7 217.6 L150.0 216.4 L153.3 215.2 L156.7 213.8 L160.0 212.4 L163.3 210.9 L166.7 209.3 L170.0 207.6 L173.3 205.8 L176.7 203.9 L180.0 201.9 L183.3 199.8 L186.7 197.6 L190.0 195.3 L193.3 192.9 L196.7 190.4 L200.0 187.8 L203.3 185.1 L206.7 182.3 L210.0 179.5 L213.3 176.6 L216.7 173.6 L220.0 170.5 L223.3 167.4 L226.7 164.2 L230.0 161.0 L233.3 157.7 L236.7 154.4 L240.0 151.2 L243.3 147.9 L246.7 144.6 L250.0 141.3 L253.3 138.1 L256.7 135.0 L260.0 131.9 L263.3 128.8 L266.7 125.9 L270.0 123.1 L273.3 120.3 L276.7 117.7 L280.0 115.3 L283.3 113.0 L286.7 110.8 L290.0 108.8 L293.3 107.0 L296.7 105.4 L300.0 104.0 L303.3 102.8 L306.7 101.8 L310.0 101.0 L313.3 100.5 L316.7 100.1 L320.0 100.0 L323.3 100.1 L326.7 100.5 L330.0 101.0 L333.3 101.8 L336.7 102.8 L340.0 104.0 L343.3 105.4 L346.7 107.0 L350.0 108.8 L353.3 110.8 L356.7 113.0 L360.0 115.3 L363.3 117.7 L366.7 120.3 L370.0 123.1 L373.3 125.9 L376.7 128.8 L380.0 131.9 L383.3 135.0 L386.7 138.1 L390.0 141.3 L393.3 144.6 L396.7 147.9 L400.0 151.2 L403.3 154.4 L406.7 157.7 L410.0 161.0 L413.3 164.2 L416.7 167.4 L420.0 170.5 L423.3 173.6 L426.7 176.6 L430.0 179.5 L433.3 182.3 L436.7 185.1 L440.0 187.8 L443.3 190.4 L446.7 192.9 L450.0 195.3 L453.3 197.6 L456.7 199.8 L460.0 201.9 L463.3 203.9 L466.7 205.8 L470.0 207.6 L473.3 209.3 L476.7 210.9 L480.0 212.4 L483.3 213.8 L486.7 215.2 L490.0 216.4 L493.3 217.6 L496.7 218.7 L500.0 219.7 L503.3 220.6 L506.7 221.5 L510.0 222.3 L513.3 223.0 L516.7 223.7 L520.0 224.3 L523.3 224.9 L526.7 225.4 L530.0 225.9 L533.3 226.3 L536.7 226.7 L540.0 227.0 L543.3 227.4 L546.7 227.7 L550.0 227.9 L553.3 228.2 L556.7 228.4 L560.0 228.6 L563.3 228.7 L566.7 228.9 L570.0 229.0 L573.3 229.1 L576.7 229.2 L580.0 229.3 L583.3 229.4 L586.7 229.5 L590.0 229.6 L593.3 229.6 L596.7 229.7 L600.0 229.7" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="80" y1="230" x2="80" y2="228.6" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 3"/><line x1="160" y1="230" x2="160" y2="212.4" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 3"/><line x1="240" y1="230" x2="240" y2="151.2" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 3"/><line x1="320" y1="230" x2="320" y2="100.0" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 3"/><line x1="400" y1="230" x2="400" y2="151.2" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 3"/><line x1="480" y1="230" x2="480" y2="212.4" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 3"/><line x1="560" y1="230" x2="560" y2="228.6" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 3"/>
<g stroke="#1d2b44" stroke-width="1.5"><line x1="80" y1="230" x2="80" y2="237"/><line x1="160" y1="230" x2="160" y2="237"/><line x1="240" y1="230" x2="240" y2="237"/><line x1="320" y1="230" x2="320" y2="237"/><line x1="400" y1="230" x2="400" y2="237"/><line x1="480" y1="230" x2="480" y2="237"/><line x1="560" y1="230" x2="560" y2="237"/></g>
<g font-size="13" fill="#1d2b44" text-anchor="middle"><text x="80" y="252">764</text><text x="160" y="252">776</text><text x="240" y="252">788</text><text x="320" y="252">800</text><text x="400" y="252">812</text><text x="480" y="252">824</text><text x="560" y="252">836</text></g>
<g font-size="12" fill="#1d2b44" text-anchor="middle"><text x="80" y="268">μ − 3σ</text><text x="160" y="268">μ − 2σ</text><text x="240" y="268">μ − σ</text><text x="320" y="268">μ</text><text x="400" y="268">μ + σ</text><text x="480" y="268">μ + 2σ</text><text x="560" y="268">μ + 3σ</text></g>
<g font-size="12" fill="#1d2b44" text-anchor="middle"><line x1="80" y1="197" x2="127" y2="224" stroke="#1d2b44" stroke-width="1"/><line x1="560" y1="197" x2="513" y2="224" stroke="#1d2b44" stroke-width="1"/><text x="67" y="192">2.35%</text><text x="200" y="222">13.5%</text><text x="280" y="175">34%</text><text x="360" y="175">34%</text><text x="440" y="222">13.5%</text><text x="573" y="192">2.35%</text></g>
<text x="320" y="284" text-anchor="middle" font-size="14" fill="#1d2b44">Mass of loaf (g)</text>
</svg>
<figcaption>Figure 2. The empirical rule for the Corran Bakery loaves, X ~ N(800, 12). Each vertical line is one standard deviation (12 g) further from the mean.</figcaption>
</figure>

## Worked example 1: estimating with the empirical rule

**Question.** Use the empirical rule to estimate the percentage of Corran loaves that (a) weigh between 776 g and 824 g, (b) weigh more than 824 g, (c) weigh between 788 g and 836 g, (d) weigh less than 788 g.

1. **Locate each boundary in standard deviations.** 776 = 800 − 2(12), 788 = 800 − 12, 824 = 800 + 2(12), 836 = 800 + 3(12).
2. **(a)** 776 g to 824 g is μ ± 2σ, so about **95%**.
3. **(b)** The 5% outside μ ± 2σ is split equally between the two tails by symmetry: 5% ÷ 2 = **2.5%**.
4. **(c)** From μ − σ to μ is half of 68%, which is 34%. From μ to μ + 3σ is half of 99.7%, which is 49.85%. Total: 34% + 49.85% = **83.85%**.
5. **(d)** 32% lies outside μ ± σ, half in each tail: 32% ÷ 2 = **16%**.

**Interpretation.** About 83.85% of Corran sourdough loaves weigh between 788 g and 836 g.

**Check.** Technology gives 84.00% for (c) and 15.87% for (d). The rule is close but approximate, so say "about" or "approximately".

## Probabilities as areas: technology or a table

When a boundary is not a whole number of standard deviations from the mean, use technology or a z-table. Show your work in three parts:

1. **Name the distribution and its parameters**: X ~ N(800, 12).
2. **Write the probability with its boundary and direction**, and sketch it: P(790 < X < 815). Shade the region.
3. **Give the area**, with the calculator command and its inputs, or the z-scores and table values.

A bare calculator command such as "normalcdf(790, 815, 800, 12)" with no labels is not a complete answer. Label which number is the mean and which is the standard deviation.

## Worked example 2: probability for an interval

**Question.** A Corran loaf is chosen at random. Find (a) the probability that it weighs less than 785 g, (b) the probability that it weighs between 790 g and 815 g. (c) The bakery bakes 400 loaves on Saturday. About how many would you expect to weigh between 790 g and 815 g?

**(a)**

1. X ~ N(800, 12). We want P(X < 785).
2. z = (785 − 800) ÷ 12 = −15 ÷ 12 = −1.25.
3. Table: P(Z < −1.25) = **0.1056**. Technology: normalcdf(lower = −10⁹⁹, upper = 785, μ = 800, σ = 12) = 0.1056.

**(b)**

1. We want P(790 < X < 815), the hatched area in Figure 3.
2. z-scores: (790 − 800) ÷ 12 = −0.8333…, which rounds to −0.83 for a table; (815 − 800) ÷ 12 = 1.25.
3. Table: P(Z < 1.25) − P(Z < −0.83) = 0.8944 − 0.2033 = 0.6911.
4. Technology: normalcdf(lower = 790, upper = 815, μ = 800, σ = 12) = **0.6920**.

**(c)** Expected number = 400 × 0.6920 ≈ 276.8, so **about 277 loaves**.

**Interpretation.** There is about a 0.69 probability that a randomly chosen Corran loaf weighs between 790 g and 815 g, so about 69% of loaves are in this range.

<figure>
<svg viewBox="0 0 640 275" role="img" aria-labelledby="ar-title ar-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ar-title">Area under the normal curve between 790 g and 815 g</title>
<desc id="ar-desc">A normal curve centred on 800 grams with standard deviation 12 grams. The region under the curve between 790 grams and 815 grams is filled with diagonal hatching and labelled area about 0.69. The z-scores of the boundaries, minus 0.83 and 1.25, are written below the axis.</desc>
<defs><pattern id="hatch211" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="2"/></pattern></defs>
<rect x="0" y="0" width="640" height="275" fill="#ffffff"/>
<path d="M253.3 200.0 L253.3 101.1 L256.7 97.7 L260.0 94.3 L263.3 91.1 L266.7 87.9 L270.0 84.8 L273.3 81.9 L276.7 79.1 L280.0 76.5 L283.3 74.0 L286.7 71.6 L290.0 69.5 L293.3 67.6 L296.7 65.8 L300.0 64.3 L303.3 63.0 L306.7 61.9 L310.0 61.1 L313.3 60.5 L316.7 60.1 L320.0 60.0 L323.3 60.1 L326.7 60.5 L330.0 61.1 L333.3 61.9 L336.7 63.0 L340.0 64.3 L343.3 65.8 L346.7 67.6 L350.0 69.5 L353.3 71.6 L356.7 74.0 L360.0 76.5 L363.3 79.1 L366.7 81.9 L370.0 84.8 L373.3 87.9 L376.7 91.1 L380.0 94.3 L383.3 97.7 L386.7 101.1 L390.0 104.5 L393.3 108.0 L396.7 111.5 L400.0 115.1 L403.3 118.6 L406.7 122.1 L410.0 125.6 L413.3 129.1 L416.7 132.5 L420.0 135.9 L420.0 200.0 Z" fill="url(#hatch211)" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="40" y1="200" x2="600" y2="200" stroke="#1d2b44" stroke-width="2"/>
<path d="M40.0 199.7 L43.3 199.6 L46.7 199.6 L50.0 199.5 L53.3 199.5 L56.7 199.4 L60.0 199.3 L63.3 199.2 L66.7 199.1 L70.0 198.9 L73.3 198.8 L76.7 198.6 L80.0 198.4 L83.3 198.2 L86.7 198.0 L90.0 197.8 L93.3 197.5 L96.7 197.2 L100.0 196.8 L103.3 196.4 L106.7 196.0 L110.0 195.5 L113.3 195.0 L116.7 194.5 L120.0 193.8 L123.3 193.2 L126.7 192.5 L130.0 191.7 L133.3 190.8 L136.7 189.9 L140.0 188.9 L143.3 187.8 L146.7 186.6 L150.0 185.4 L153.3 184.0 L156.7 182.6 L160.0 181.1 L163.3 179.4 L166.7 177.7 L170.0 175.9 L173.3 173.9 L176.7 171.9 L180.0 169.7 L183.3 167.5 L186.7 165.1 L190.0 162.6 L193.3 160.0 L196.7 157.3 L200.0 154.5 L203.3 151.7 L206.7 148.7 L210.0 145.6 L213.3 142.4 L216.7 139.2 L220.0 135.9 L223.3 132.5 L226.7 129.1 L230.0 125.6 L233.3 122.1 L236.7 118.6 L240.0 115.1 L243.3 111.5 L246.7 108.0 L250.0 104.5 L253.3 101.1 L256.7 97.7 L260.0 94.3 L263.3 91.1 L266.7 87.9 L270.0 84.8 L273.3 81.9 L276.7 79.1 L280.0 76.5 L283.3 74.0 L286.7 71.6 L290.0 69.5 L293.3 67.6 L296.7 65.8 L300.0 64.3 L303.3 63.0 L306.7 61.9 L310.0 61.1 L313.3 60.5 L316.7 60.1 L320.0 60.0 L323.3 60.1 L326.7 60.5 L330.0 61.1 L333.3 61.9 L336.7 63.0 L340.0 64.3 L343.3 65.8 L346.7 67.6 L350.0 69.5 L353.3 71.6 L356.7 74.0 L360.0 76.5 L363.3 79.1 L366.7 81.9 L370.0 84.8 L373.3 87.9 L376.7 91.1 L380.0 94.3 L383.3 97.7 L386.7 101.1 L390.0 104.5 L393.3 108.0 L396.7 111.5 L400.0 115.1 L403.3 118.6 L406.7 122.1 L410.0 125.6 L413.3 129.1 L416.7 132.5 L420.0 135.9 L423.3 139.2 L426.7 142.4 L430.0 145.6 L433.3 148.7 L436.7 151.7 L440.0 154.5 L443.3 157.3 L446.7 160.0 L450.0 162.6 L453.3 165.1 L456.7 167.5 L460.0 169.7 L463.3 171.9 L466.7 173.9 L470.0 175.9 L473.3 177.7 L476.7 179.4 L480.0 181.1 L483.3 182.6 L486.7 184.0 L490.0 185.4 L493.3 186.6 L496.7 187.8 L500.0 188.9 L503.3 189.9 L506.7 190.8 L510.0 191.7 L513.3 192.5 L516.7 193.2 L520.0 193.8 L523.3 194.5 L526.7 195.0 L530.0 195.5 L533.3 196.0 L536.7 196.4 L540.0 196.8 L543.3 197.2 L546.7 197.5 L550.0 197.8 L553.3 198.0 L556.7 198.2 L560.0 198.4 L563.3 198.6 L566.7 198.8 L570.0 198.9 L573.3 199.1 L576.7 199.2 L580.0 199.3 L583.3 199.4 L586.7 199.5 L590.0 199.5 L593.3 199.6 L596.7 199.6 L600.0 199.7" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<g stroke="#1d2b44" stroke-width="1.5"><line x1="160" y1="200" x2="160" y2="207"/><line x1="253" y1="200" x2="253" y2="207"/><line x1="320" y1="200" x2="320" y2="207"/><line x1="420" y1="200" x2="420" y2="207"/><line x1="480" y1="200" x2="480" y2="207"/></g>
<g font-size="13" fill="#1d2b44" text-anchor="middle"><text x="160" y="222">776</text><text x="253" y="222">790</text><text x="320" y="222">800</text><text x="420" y="222">815</text><text x="480" y="222">824</text></g>
<g font-size="12" fill="#1d2b44" text-anchor="middle"><text x="253" y="238">z = −0.83</text><text x="420" y="238">z = 1.25</text></g>
<text x="467" y="90" font-size="13" fill="#1d2b44">shaded area ≈ 0.69</text>
<line x1="460" y1="94" x2="373" y2="125" stroke="#1d2b44" stroke-width="1"/>
<text x="320" y="266" text-anchor="middle" font-size="14" fill="#1d2b44">Mass of loaf (g)</text>
</svg>
<figcaption>Figure 3. P(790 &lt; X &lt; 815) for X ~ N(800, 12). The hatched area is about 0.69. Below the axis are the z-scores of the two boundaries.</figcaption>
</figure>

**Check.** The table answer (0.6911) and the technology answer (0.6920) differ because the table needs z = −0.83 instead of −0.8333…. Both are acceptable if the work is shown. The answer is close to the 68% within one standard deviation (788 g to 812 g). That makes sense: the interval 790 g to 815 g is 25 g wide, almost the same as the 24 g width of μ ± σ.

## Working backwards: boundaries for a given area

Sometimes you know the area and need the boundary. Think about **where the area is** before you calculate. With p a percentage:

| You want… | Write it as… | Area to the left of the boundary |
|---|---|---|
| the **lowest p%** | P(X < xₐ) = p/100 | p/100 |
| the **highest p%** | P(X > x_b) = p/100 | 1 − p/100 |
| the **middle p%** | P(xₐ < X < x_b) = p/100 | (1 − p/100)/2 for xₐ and its mirror for x_b |
| the **most extreme p%** (both tails) | P(X < xₐ) = P(X > x_b) = ½(p/100) | ½(p/100) for xₐ and its mirror for x_b |

Then find z with invNorm or by reading the table **backwards** (find the area inside the table, read off z), and convert with x = μ + zσ. Most calculators' invNorm uses the **area to the left**, so a "highest p%" question needs 1 − p/100.

## Worked example 3: finding boundaries

**Question.** For the Corran loaves, X ~ N(800, 12), find (a) the mass below which the lightest 5% of loaves fall, (b) the mass above which the heaviest 10% fall, (c) the interval containing the middle 80%, (d) the boundaries of the most extreme 1% of loaves.

**(a)** P(X < xₐ) = 0.05. invNorm(area = 0.05, μ = 0, σ = 1) gives z = −1.6449. xₐ = 800 + (−1.6449)(12) = **780.26 g**.

**(b)** P(X > x_b) = 0.10, so the area to the left is 0.90. z = 1.2816 and x_b = 800 + 1.2816(12) = **815.38 g**.

**(c)** The middle 80% leaves 20% in the tails, 10% each side. The lower boundary has area 0.10 to its left, so z = −1.2816; the upper has 0.90, so z = 1.2816. Interval: 800 ± 1.2816(12) = **784.62 g to 815.38 g**.

**(d)** The most extreme 1% is split into 0.5% in each tail. Lower boundary: area to the left 0.005, z = −2.5758. Upper boundary: area to the left 0.995, z = 2.5758. Boundaries: 800 ± 2.5758(12) = **769.09 g and 830.91 g**. Loaves lighter than 769.09 g or heavier than 830.91 g are the most extreme 1%.

**Check.** With a table, the nearest values are z = 1.28 (area 0.8997) and z = 2.58 (area 0.9951), which give boundaries within about 0.05 g of these. Each answer should match the sketch: (a) is below the mean, (b) above it, and (c) and (d) are symmetric about 800 g.

## Comparing relative positions with percentiles

A z-score tells you how many standard deviations a value is from its mean. When a distribution is normal, you can turn that into a **percentile**: the percentage of the distribution at or below the value. Percentiles and proportions let you compare positions within one normal distribution, or between two different ones.

## Worked example 4: which loaf is more unusually heavy?

**Question.** Corran Bakery's rye loaves have masses that are approximately N(650 g, 20 g). One sourdough loaf weighs 815 g and one rye loaf weighs 680 g. Which loaf is heavier **relative to its own type**? Use percentiles.

1. **Sourdough:** z = (815 − 800) ÷ 12 = 1.25. P(Z < 1.25) = 0.8944, so the loaf is at about the **89th percentile**. About 10.56% of sourdough loaves are heavier.
2. **Rye:** z = (680 − 650) ÷ 20 = 1.5. P(Z < 1.5) = 0.9332, so the loaf is at about the **93rd percentile**. About 6.68% of rye loaves are heavier.
3. **Compare.** 93rd percentile > 89th percentile.

**Conclusion.** The rye loaf is heavier relative to its type. A smaller proportion of rye loaves (about 6.68%) are heavier than it, compared with about 10.56% of sourdough loaves heavier than the sourdough loaf. The sourdough loaf is heavier in grams, but that comparison mixes two different distributions.

## Common misconceptions

- **"The second number in N(800, 12) is the variance."** In this course it is the standard deviation. Dividing by 12² = 144 in a z-score gives a wrong answer.
- **"A taller curve has more area."** Every normal curve has total area 1. A taller curve is narrower: its σ is smaller.
- **"P(X = 800) is the height of the curve at 800."** For a continuous variable the probability of one exact value is 0. Only intervals have probability.
- **"Use the empirical rule for any boundary."** It only works for boundaries a whole number of standard deviations from the mean, and it gives estimates. Otherwise use technology or a table.
- **Wrong direction.** A table and invNorm work with the area to the **left**. For "more than" or "the highest p%", use 1 minus the area.
- **Putting all of the "most extreme p%" in one tail.** Split it: p/2 % in each tail.
- **"Every distribution is normal."** Check that the data are roughly unimodal and symmetric first. A skewed variable, or one that cannot go below 0 with a mean close to 0, is not well modelled by a normal curve.
- **A bare calculator command.** Name the distribution, the parameters, the boundaries and the direction, as well as the answer.

## Where this leads

The normal distribution is the model behind most of the rest of the course. Next, in [Topic 2.12](/advanced-course-resources/statistics/2-12-sampling-distributions-central-limit-theorem-study-guide/), you will see why: the sample mean from a random sample has a sampling distribution that is approximately normal, and the approximation improves as the sample gets larger. Try the [practice questions](/advanced-course-resources/statistics/2-11-normal-distribution-practice/) now, then use the [revision notes](/advanced-course-resources/statistics/2-11-normal-distribution-revision-notes/) and the [checklist](/advanced-course-resources/statistics/2-11-normal-distribution-checklist/) to consolidate. Coming from the binomial distribution? The [Topic 2.10 study guide](/advanced-course-resources/statistics/2-10-binomial-distribution-study-guide/) is the step before this one.
