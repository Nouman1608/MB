---
resourceId: "mb-ap-stats-5.1-study-guide"
title: "Graphical Representations Between Two Quantitative Variables: Study Guide (Statistics 5.1)"
description: "Learn to build a scatterplot with the explanatory variable on the x-axis, describe its form, direction, strength and unusual features in context, and use it to judge a claim."
course: "statistics"
unit: 5
topics: ["5.1"]
resourceType: "study-guide"
prerequisites:
  - "Telling quantitative and categorical variables apart (Topic 1.2)"
  - "Describing one quantitative distribution in context (Topics 1.6 and 1.7)"
prerequisiteResources: ["mb-ap-stats-4.10-study-guide"]
learningObjectives:
  - "Recognise bivariate quantitative data as pairs of values measured on the same individuals"
  - "Decide which variable is explanatory and which is response, and place them on the correct axes"
  - "Construct a scatterplot with labelled axes, units and sensible scales"
  - "Describe the form, direction and strength of an association and any unusual features, in context"
  - "Use a scatterplot to support or challenge a claim about two variables"
skills: ["3", "4"]
studyMinutes: 40
difficulty: "foundation"
calculator: "graphing"
calculatorNote: "A graphing calculator or software can draw a scatterplot to check a hand-drawn one. No calculation is needed to describe a scatterplot in this topic."
related: ["mb-ap-stats-5.1-revision-notes", "mb-ap-stats-5.1-practice", "mb-ap-stats-5.1-checklist"]
next: "mb-ap-stats-5.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Bivariate quantitative data are pairs (x, y) measured on the same individuals; each pair is one dot on a scatterplot."
  - "Put the explanatory variable on the x-axis and the response variable on the y-axis."
  - "Describe four things: form (linear or non-linear), direction (positive or negative), strength (strong, moderate or weak) and unusual features (clusters or points outside the pattern)."
  - "Write the description in context: name both variables and say what 'positive' or 'negative' means for these individuals."
  - "A scatterplot can support or challenge a claim, but an association on its own does not show that one variable causes changes in the other."
faqs:
  - question: "What if neither variable obviously explains the other?"
    answer: "Then either choice of axes is acceptable. Choose the one that matches the question you are asking, and label both axes clearly."
  - question: "Does a scatterplot have to start both axes at zero?"
    answer: "No. Choose scales that spread the points across the graph. If an axis does not start at zero, show a break symbol or make the starting value clear."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## From one variable to two

In Unit 1 you described **one** quantitative variable at a time: its shape, centre and variability. Many questions are about how **two** quantitative variables relate. Do warmer days bring more customers? Do older cars sell for less?

To answer these, you need **bivariate quantitative data**. This means that for each individual you record **two** quantitative values, as an ordered pair (x, y). Both values must come from the **same individual**. If you measured temperature on some days and bike hires on different days, you could not pair them up.

A **scatterplot** shows bivariate quantitative data. Each individual becomes one dot. Its horizontal position is its x-value, and its vertical position is its y-value.

## Explanatory and response variables

Before drawing, decide which variable goes on which axis.

- The **explanatory variable** is the one you use to explain or predict the other. It goes on the **x-axis** (horizontal).
- The **response variable** is the one whose values you want to explain or predict. It goes on the **y-axis** (vertical).

Ask: "Which variable might help me predict the other?" A bike-hire manager wants to predict how many bikes will be hired from the weather forecast. So temperature is explanatory (x) and number of bikes hired is response (y).

Sometimes there is no natural choice. For example, the heights of pairs of sisters. Then either choice is fine, as long as you label the axes.

"Explanatory" does **not** mean "cause". It only says which variable you are using to predict the other.

## The data set used in this guide

A fictional bike-hire scheme in the town of Harbourton recorded the maximum temperature (°C) and the number of bikes hired on 12 days in spring. Each day is one individual.

| Max temperature (°C), x | 8 | 10 | 11 | 13 | 14 | 16 | 17 | 19 | 20 | 22 | 23 | 25 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bikes hired, y | 52 | 61 | 70 | 74 | 83 | 90 | 88 | 104 | 109 | 118 | 40 | 131 |

## Constructing a scatterplot

1. **Choose the axes.** Explanatory variable on the x-axis, response on the y-axis.
2. **Label each axis** with the variable name **and its units**, for example "Maximum temperature (°C)".
3. **Choose scales.** Each axis needs equal steps between tick marks. The scale should cover the smallest to the largest value and spread the points across most of the graph. Here x runs from 8 to 25 °C and y from 40 to 131 bikes, so axes from 5 to 25 °C and 30 to 140 bikes work well. An axis does not have to start at zero.
4. **Plot one dot per individual.** For the first day, go across to 8 °C and up to 52 bikes.
5. **Do not join the dots.** A scatterplot is not a line graph. The days are separate individuals.

<figure>
<svg viewBox="0 0 640 310" role="img" aria-labelledby="bike-title bike-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="bike-title">Scatterplot of bikes hired against maximum temperature for 12 days</title>
<desc id="bike-desc">The horizontal axis shows maximum temperature from 5 to 25 degrees Celsius. The vertical axis shows bikes hired from 30 to 140. Eleven dots rise steadily from the lower left (8 degrees, 52 bikes) to the upper right (25 degrees, 131 bikes) in a fairly straight band. One dot, at 23 degrees and 40 bikes, sits far below the others and is labelled as an unusual point: a rainy day.</desc>
<rect x="0" y="0" width="640" height="310" fill="#ffffff"/>
<line x1="70" y1="250" x2="600" y2="250" stroke="#1d2b44" stroke-width="2"/>
<line x1="70" y1="250" x2="70" y2="25" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="70" y1="250" x2="70" y2="257"/><line x1="200" y1="250" x2="200" y2="257"/><line x1="330" y1="250" x2="330" y2="257"/><line x1="460" y1="250" x2="460" y2="257"/><line x1="590" y1="250" x2="590" y2="257"/>
<line x1="63" y1="250" x2="70" y2="250"/><line x1="63" y1="210" x2="70" y2="210"/><line x1="63" y1="170" x2="70" y2="170"/><line x1="63" y1="130" x2="70" y2="130"/><line x1="63" y1="90" x2="70" y2="90"/><line x1="63" y1="50" x2="70" y2="50"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="70" y="272">5</text><text x="200" y="272">10</text><text x="330" y="272">15</text><text x="460" y="272">20</text><text x="590" y="272">25</text>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="end">
<text x="58" y="255">30</text><text x="58" y="215">50</text><text x="58" y="175">70</text><text x="58" y="135">90</text><text x="58" y="95">110</text><text x="58" y="55">130</text>
</g>
<text x="330" y="298" text-anchor="middle" font-size="14" fill="#1d2b44">Maximum temperature (°C)</text>
<text x="18" y="140" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 18 140)">Bikes hired</text>
<g fill="#1d2b44">
<circle cx="148" cy="206" r="5"/><circle cx="200" cy="188" r="5"/><circle cx="226" cy="170" r="5"/><circle cx="278" cy="162" r="5"/><circle cx="304" cy="144" r="5"/><circle cx="356" cy="130" r="5"/><circle cx="382" cy="134" r="5"/><circle cx="434" cy="102" r="5"/><circle cx="460" cy="92" r="5"/><circle cx="512" cy="74" r="5"/><circle cx="590" cy="48" r="5"/>
</g>
<circle cx="538" cy="230" r="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="528" y="215" text-anchor="end" font-size="12" fill="#1d2b44">unusual: 23 °C, 40 bikes (rain)</text>
</svg>
<figcaption>Figure 1. Bikes hired against maximum temperature on 12 days at the fictional Harbourton scheme. Each dot is one day. The open circle marks the one day that does not fit the pattern.</figcaption>
</figure>

## Describing a scatterplot: four features

A full description covers **form, direction, strength and unusual features**, always in context.

| Feature | Question to ask | Words to use |
|---|---|---|
| **Form** | Do the points follow a straight-line pattern or a curve? | linear; non-linear (curved) |
| **Direction** | As x increases, does y tend to increase or decrease? | positive; negative; (no clear direction) |
| **Strength** | How closely do the points follow the pattern? | strong; moderate; weak |
| **Unusual features** | Are there points far from the pattern, or separate groups? | unusual point (outlier); clusters; gaps |

**Direction in detail.** A **positive association** means that as the explanatory variable increases, the response variable **tends to** increase. A **negative association** means that as the explanatory variable increases, the response **tends to** decrease. The words "tends to" matter. Not every point has to follow the trend.

**Strength in detail.** Strength is about **scatter**, not steepness. If the points lie in a tight band around the pattern, the association is strong. If they are widely scattered around it, it is weak. A gentle slope can still be a strong association.

**Unusual features in detail.**
- An **unusual point** lies well away from the general pattern. It may have an unusual x-value, an unusual y-value, or a usual x and y that do not fit together (like the rainy day above).
- **Clusters** are separate groups of points with a gap between them. They often mean the individuals come from different groups, such as weekdays and weekends.

Direction only makes sense for a pattern that keeps going one way. A curve that rises then falls has no single direction, so describe each part.

## Worked example 1: describing the bike-hire scatterplot

**Question.** Describe the association between maximum temperature and the number of bikes hired shown in Figure 1.

1. **Form.** Apart from one day, the points follow a straight-line pattern. The form is **linear**.
2. **Direction.** As temperature increases, the number of bikes hired tends to increase. The direction is **positive**.
3. **Strength.** The 11 typical days lie very close to a straight band. The association is **strong**.
4. **Unusual features.** The day at 23 °C with only 40 hires is far below the pattern. Days near 23 °C had well over 100 hires. The scheme's records show it rained all that day, which could explain it. There are no clusters.

**Answer in context.** There is a strong, positive, linear association between maximum temperature and the number of bikes hired at Harbourton: warmer days tend to have more bikes hired. One day stands out: at 23 °C only 40 bikes were hired, far fewer than on other days with similar temperatures.

**Check.** Each feature has a word and a reason from the plot, and the sentence names both variables.

## Worked example 2: a curved, negative association

**Question.** A fictional dealer listed ten used cars of the same model. Construct and describe a scatterplot of price against age.

| Age (years), x | 1 | 2 | 3 | 3 | 4 | 5 | 6 | 7 | 8 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Price ($ thousands), y | 25.0 | 21.0 | 18.0 | 18.6 | 15.6 | 13.8 | 12.4 | 11.5 | 10.9 | 10.2 |

**Step 1: axes.** The dealer uses age to predict price, so age (years) is on the x-axis and price ($ thousands) on the y-axis. Two cars are 3 years old, so there are two dots above x = 3.

<figure>
<svg viewBox="0 0 640 310" role="img" aria-labelledby="car-title car-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="car-title">Scatterplot of used-car price against age for 10 cars</title>
<desc id="car-desc">The horizontal axis shows age from 0 to 10 years. The vertical axis shows price from 8 to 26 thousand dollars. The dots fall steeply at first, from 25 thousand dollars at 1 year to about 15.6 thousand dollars at 4 years, then level off, reaching about 10.2 thousand dollars at 10 years. The pattern is a curve that bends, not a straight line. A dashed straight reference line joining the first and last points shows that the middle points sit below a straight line.</desc>
<rect x="0" y="0" width="640" height="310" fill="#ffffff"/>
<line x1="70" y1="250" x2="600" y2="250" stroke="#1d2b44" stroke-width="2"/>
<line x1="70" y1="250" x2="70" y2="25" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="70" y1="250" x2="70" y2="257"/><line x1="174" y1="250" x2="174" y2="257"/><line x1="278" y1="250" x2="278" y2="257"/><line x1="382" y1="250" x2="382" y2="257"/><line x1="486" y1="250" x2="486" y2="257"/><line x1="590" y1="250" x2="590" y2="257"/>
<line x1="63" y1="250" x2="70" y2="250"/><line x1="63" y1="201.1" x2="70" y2="201.1"/><line x1="63" y1="152.2" x2="70" y2="152.2"/><line x1="63" y1="103.3" x2="70" y2="103.3"/><line x1="63" y1="54.4" x2="70" y2="54.4"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="70" y="272">0</text><text x="174" y="272">2</text><text x="278" y="272">4</text><text x="382" y="272">6</text><text x="486" y="272">8</text><text x="590" y="272">10</text>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="end">
<text x="58" y="255">8</text><text x="58" y="206">12</text><text x="58" y="157">16</text><text x="58" y="108">20</text><text x="58" y="59">24</text>
</g>
<text x="330" y="298" text-anchor="middle" font-size="14" fill="#1d2b44">Age (years)</text>
<text x="18" y="140" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 18 140)">Price ($ thousands)</text>
<line x1="122" y1="42.2" x2="590" y2="223.1" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<g fill="#1d2b44">
<circle cx="122" cy="42.2" r="5"/><circle cx="174" cy="91.1" r="5"/><circle cx="226" cy="127.8" r="5"/><circle cx="226" cy="120.4" r="5"/><circle cx="278" cy="157.1" r="5"/><circle cx="330" cy="179.1" r="5"/><circle cx="382" cy="196.2" r="5"/><circle cx="434" cy="207.2" r="5"/><circle cx="486" cy="214.5" r="5"/><circle cx="590" cy="223.1" r="5"/>
</g>
<text x="400" y="120" font-size="12" fill="#1d2b44">dashed: straight line from first to last car</text>
</svg>
<figcaption>Figure 2. Price against age for ten used cars of one model at a fictional dealer. The dashed straight line is only a reference: most dots sit below it, which shows the pattern bends.</figcaption>
</figure>

**Step 2: form.** The price falls by $4.0 thousand from age 1 to age 2 and by $3.0 thousand from age 2 to age 3, but by only $0.6 thousand from age 7 to age 8. The rate of decrease changes, so the form is **non-linear (curved)**. Over the first four years (age 1 to 5) the price falls by $11.2 thousand; over the last four (age 6 to 10) by only $2.2 thousand.

**Step 3: direction.** As age increases, price tends to decrease. The direction is **negative**.

**Step 4: strength.** The points lie very close to a smooth curve with little scatter. The association is **strong**.

**Step 5: unusual features.** No point lies away from the curve, and there are no clusters.

**Answer in context.** There is a strong, negative, non-linear association between age and price for these cars: older cars tend to cost less, but the price drops quickly in the first few years and then levels off.

**Check.** "Non-linear" is justified by the changing **rate** of decrease, not just by the fact that the price changes.

## Worked example 3: using a scatterplot to judge claims

**Question.** Use the Harbourton data to judge each claim.

**(a)** The manager says: "On warmer days we tend to hire out more bikes."
**(b)** A staff member says: "Whenever the maximum is 20 °C or more, we hire out at least 100 bikes."

**(a) Supported.** The scatterplot shows a strong positive linear association. Days below 15 °C had between 52 and 83 hires. Six of the seven days above 15 °C had more than 85 hires. So warmer days did tend to have more hires.

**(b) Not supported.** Four days reached 20 °C or more. Three had at least 100 hires (109, 118 and 131), but the 23 °C day had only 40. One counterexample is enough to show "whenever" is false. Temperature is not the only thing that matters: rain matters too.

**Careful with cause.** The plot supports an **association**. It does not prove that warm weather alone **causes** more hires. Warm days in spring may also be weekends or school holidays. You will return to this in Topic 5.2.

## Common misconceptions

- **"It is linear because I can draw a line through it."** You can draw a straight line through any set of points. Form is linear only if the points follow a straight-line **pattern**, with a roughly constant rate of change.
- **"Steep means strong."** Steepness is about how fast y changes. Strength is about how closely the points follow the pattern.
- **"Positive means good."** Positive only means that both variables tend to increase together. A positive association between hours of screen use and eye strain is not "good".
- **"Every point must follow the trend."** An association describes a tendency. Write "tends to", not "always".
- **Putting the response on the x-axis.** The variable you want to predict goes on the y-axis.
- **Joining the dots.** The individuals are separate; a scatterplot has no line through the points.
- **Describing without context.** "Strong, positive, linear" is incomplete. Name both variables and say what the direction means for these individuals.
- **Ignoring unusual features.** One unusual point or a cluster can change the story. Mention it and, if you can, suggest a reason.

## Where this leads

Next you will measure the strength and direction of a **linear** association with one number, the correlation coefficient r, in [Topic 5.2: Correlation](/advanced-course-resources/statistics/5-2-correlation-study-guide/). Later in Unit 5 you will fit a line to a linear pattern and use it to predict. Try the [practice questions](/advanced-course-resources/statistics/5-1-graphical-representations-between-two-quantitative-practice/) now, then use the [revision notes](/advanced-course-resources/statistics/5-1-graphical-representations-between-two-quantitative-revision-notes/) and the [checklist](/advanced-course-resources/statistics/5-1-graphical-representations-between-two-quantitative-checklist/) to consolidate.
