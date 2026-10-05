---
resourceId: "mb-ap-stats-2.2-study-guide"
title: "Summary Statistics for Two Categorical Variables: Study Guide (Statistics 2.2)"
description: "Learn to calculate joint, marginal and conditional relative frequencies from a two-way table, compare conditional distributions for association, and justify claims in context."
course: "statistics"
unit: 2
topics: ["2.2"]
resourceType: "study-guide"
prerequisites:
  - "Reading and completing two-way tables (Topic 2.1)"
  - "Segmented bar charts and the idea of association (Topic 2.1)"
prerequisiteResources: ["mb-ap-stats-2.1-study-guide"]
learningObjectives:
  - "Calculate joint, marginal and conditional relative frequencies from a two-way table and choose the right denominator from the wording of a question"
  - "Interpret each kind of relative frequency in context"
  - "Compare conditional distributions to decide whether two categorical variables appear to be associated"
  - "Use relative frequencies to support or reject a claim, and avoid confusing the two directions of a conditional relative frequency"
skills: ["3", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "four-function"
calculatorNote: "Only division is needed. Give relative frequencies to 2 or 3 decimal places unless they are exact."
related: ["mb-ap-stats-2.2-revision-notes", "mb-ap-stats-2.2-practice", "mb-ap-stats-2.2-checklist"]
next: "mb-ap-stats-2.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Joint relative frequency = cell count ÷ grand total."
  - "Marginal relative frequency = row total or column total ÷ grand total."
  - "Conditional relative frequency = cell count ÷ the total of the row or column you restrict to."
  - "The wording decides the denominator: \"of the X, what proportion are Y\" divides by the X total."
  - "If the conditional distributions of one variable differ across the categories of the other, the variables are associated."
faqs:
  - question: "How do I know which total to divide by?"
    answer: "Find the group the question restricts you to. Words such as \"of the\", \"among\", \"for those who\" or \"given that\" name that group, and its total is the denominator. If no group is named and the question asks about all individuals, divide by the grand total."
  - question: "Is a conditional relative frequency the same as a probability?"
    answer: "It is a proportion of the individuals in the data. Later in this unit you will meet conditional probability, which uses the same idea: restrict to one group, then find a proportion within it."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## From pictures to numbers

In Topic 2.1 you displayed two categorical variables in a two-way table and in graphs, and judged association by eye. This topic gives you the numbers behind those displays. Every summary statistic here is a **relative frequency**: a count divided by a total. The only question is **which** count and **which** total.

There are three kinds:

- **Joint**: one cell as a share of everybody.
- **Marginal**: one row total or column total as a share of everybody.
- **Conditional**: one cell as a share of a single row or a single column.

## The data set used in this guide

A fictional sports centre, Fenwick Leisure, has 400 members. For each member it recorded two categorical variables: **membership plan** (Monthly or Annual) and **main activity** (Gym, Swim or Classes).

| Plan | Gym | Swim | Classes | **Total** |
|---|---|---|---|---|
| Monthly | 80 | 32 | 48 | **160** |
| Annual | 72 | 96 | 72 | **240** |
| **Total** | **152** | **128** | **120** | **400** |

Check: 160 + 240 = 400 and 152 + 128 + 120 = 400.

## Joint relative frequencies

A **joint relative frequency** is a cell count divided by the grand total. It answers "what proportion of **all** individuals are in this row category **and** this column category?"

For Monthly and Gym: 80 ÷ 400 = **0.20**. So 20% of all Fenwick members are on the Monthly plan **and** mainly use the gym.

The full table of joint relative frequencies is:

| Plan | Gym | Swim | Classes | **Total** |
|---|---|---|---|---|
| Monthly | 0.20 | 0.08 | 0.12 | **0.40** |
| Annual | 0.18 | 0.24 | 0.18 | **0.60** |
| **Total** | **0.38** | **0.32** | **0.30** | **1.00** |

All six joint relative frequencies add to 1, because every member is in exactly one cell.

## Marginal relative frequencies

A **marginal relative frequency** is a row total or a column total divided by the grand total. These numbers sit in the **margins** of the table, which is where the name comes from. A marginal relative frequency describes **one variable on its own**, ignoring the other.

- Plan: Monthly 160 ÷ 400 = **0.40**; Annual 240 ÷ 400 = **0.60**.
- Main activity: Gym 152 ÷ 400 = **0.38**; Swim 128 ÷ 400 = **0.32**; Classes 120 ÷ 400 = **0.30**.

The marginal relative frequencies for one variable form its **marginal distribution**. They add to 1.

## Conditional relative frequencies

A **conditional relative frequency** restricts attention to one category of one variable, then asks what proportion of that group is in a category of the other variable. The denominator is the total of that **row** or that **column** only.

**Within a row.** Of the 160 Monthly members, 80 mainly use the gym: 80 ÷ 160 = **0.50**. "Half of the Monthly members mainly use the gym."

**Within a column.** Of the 152 members who mainly use the gym, 80 are Monthly members: 80 ÷ 152 ≈ **0.53**. "About 53% of the gym users are on the Monthly plan."

These two numbers use the same cell (80) but answer **different questions**, so they have different denominators and different values. The phrase after "of the" tells you which group you are in.

<figure>
<svg viewBox="0 0 640 330" role="img" aria-labelledby="rf-title rf-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="rf-title">Where the numerator and denominator come from for each kind of relative frequency</title>
<desc id="rf-desc">A two-way table of 400 sports centre members with rows Monthly, Annual and Total and columns Gym, Swim, Classes and Total. The cell Monthly and Gym, 80, has a thick solid border. The Monthly row total, 160, has a thick dashed border. The Gym column total, 152, has a thick dotted border. The grand total, 400, has a double border. Below the table, four calculations use the same border styles: joint relative frequency 80 divided by 400 equals 0.20; marginal relative frequency 160 divided by 400 equals 0.40; conditional relative frequency within Monthly members 80 divided by 160 equals 0.50; conditional relative frequency within Gym users 80 divided by 152 is about 0.53.</desc>
<rect x="0" y="0" width="640" height="330" fill="#ffffff"/>
<line x1="40" y1="20" x2="550" y2="20" stroke="#c9d1dd" stroke-width="1"/>
<line x1="40" y1="54" x2="550" y2="54" stroke="#c9d1dd" stroke-width="1"/>
<line x1="40" y1="88" x2="550" y2="88" stroke="#c9d1dd" stroke-width="1"/>
<line x1="40" y1="122" x2="550" y2="122" stroke="#c9d1dd" stroke-width="1"/>
<line x1="40" y1="156" x2="550" y2="156" stroke="#c9d1dd" stroke-width="1"/>
<line x1="150" y1="20" x2="150" y2="156" stroke="#c9d1dd" stroke-width="1"/>
<line x1="250" y1="20" x2="250" y2="156" stroke="#c9d1dd" stroke-width="1"/>
<line x1="350" y1="20" x2="350" y2="156" stroke="#c9d1dd" stroke-width="1"/>
<line x1="450" y1="20" x2="450" y2="156" stroke="#c9d1dd" stroke-width="1"/>
<line x1="550" y1="20" x2="550" y2="156" stroke="#c9d1dd" stroke-width="1"/>
<line x1="40" y1="20" x2="40" y2="156" stroke="#c9d1dd" stroke-width="1"/>
<text x="200" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#1d2b44">Gym</text>
<text x="300" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#1d2b44">Swim</text>
<text x="400" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#1d2b44">Classes</text>
<text x="500" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#1d2b44">Total</text>
<text x="50" y="76" font-size="14" font-weight="bold" fill="#1d2b44">Monthly</text>
<text x="200" y="76" text-anchor="middle" font-size="14" fill="#1d2b44">80</text>
<text x="300" y="76" text-anchor="middle" font-size="14" fill="#1d2b44">32</text>
<text x="400" y="76" text-anchor="middle" font-size="14" fill="#1d2b44">48</text>
<text x="500" y="76" text-anchor="middle" font-size="14" fill="#1d2b44">160</text>
<text x="50" y="110" font-size="14" font-weight="bold" fill="#1d2b44">Annual</text>
<text x="200" y="110" text-anchor="middle" font-size="14" fill="#1d2b44">72</text>
<text x="300" y="110" text-anchor="middle" font-size="14" fill="#1d2b44">96</text>
<text x="400" y="110" text-anchor="middle" font-size="14" fill="#1d2b44">72</text>
<text x="500" y="110" text-anchor="middle" font-size="14" fill="#1d2b44">240</text>
<text x="50" y="144" font-size="14" font-weight="bold" fill="#1d2b44">Total</text>
<text x="200" y="144" text-anchor="middle" font-size="14" fill="#1d2b44">152</text>
<text x="300" y="144" text-anchor="middle" font-size="14" fill="#1d2b44">128</text>
<text x="400" y="144" text-anchor="middle" font-size="14" fill="#1d2b44">120</text>
<text x="500" y="144" text-anchor="middle" font-size="14" fill="#1d2b44">400</text>
<rect x="154" y="58" width="92" height="26" fill="none" stroke="#1d2b44" stroke-width="3"/>
<rect x="454" y="58" width="92" height="26" fill="none" stroke="#1d2b44" stroke-width="3" stroke-dasharray="8 5"/>
<rect x="154" y="126" width="92" height="26" fill="none" stroke="#1d2b44" stroke-width="3" stroke-dasharray="2 4"/>
<rect x="454" y="126" width="92" height="26" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="458" y="130" width="84" height="18" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<text x="40" y="196" font-size="14" fill="#1d2b44">Joint: cell ÷ grand total = 80 ÷ 400 = 0.20</text>
<text x="40" y="226" font-size="14" fill="#1d2b44">Marginal: row total ÷ grand total = 160 ÷ 400 = 0.40</text>
<text x="40" y="256" font-size="14" fill="#1d2b44">Conditional, within Monthly: cell ÷ row total = 80 ÷ 160 = 0.50</text>
<text x="40" y="286" font-size="14" fill="#1d2b44">Conditional, within Gym: cell ÷ column total = 80 ÷ 152 ≈ 0.53</text>
<text x="40" y="322" font-size="12" fill="#1d2b44">Solid box: the cell. Dashed: its row total. Dotted: its column total. Double: the grand total.</text>
</svg>
<figcaption>Figure 1. The same cell (80 Monthly gym users) gives four different relative frequencies depending on the denominator. Line styles, not colour, match each total to its calculation.</figcaption>
</figure>

A useful link: joint = marginal × conditional. For example, 0.40 of members are Monthly, and 0.50 of those mainly use the gym, so 0.40 × 0.50 = 0.20 of all members are Monthly gym users. This matches the joint relative frequency above.

## Conditional distributions and association

A **conditional distribution** is the full set of conditional relative frequencies within one group. For each plan, the conditional distribution of main activity is:

| Plan | Gym | Swim | Classes | **Total** |
|---|---|---|---|---|
| Monthly (n = 160) | 0.50 | 0.20 | 0.30 | 1.00 |
| Annual (n = 240) | 0.30 | 0.40 | 0.30 | 1.00 |
| All members (n = 400) | 0.38 | 0.32 | 0.30 | 1.00 |

<figure>
<svg viewBox="0 0 640 330" role="img" aria-labelledby="act-title act-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="act-title">Segmented bar chart of main activity for monthly members, annual members and all members</title>
<desc id="act-desc">Three bars of height 1 on a relative frequency axis from 0 to 1.0. Each bar is split, from bottom to top, into Gym (solid), Swim (hatched) and Classes (dotted). Monthly members: Gym 0.50, Swim 0.20, Classes 0.30. Annual members: Gym 0.30, Swim 0.40, Classes 0.30. All members: Gym 0.38, Swim 0.32, Classes 0.30. The Classes segment is the same size in every bar, but the Gym and Swim segments differ between monthly and annual members.</desc>
<defs><pattern id="act-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="8" height="8" fill="#ffffff"/><line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="2.5"/></pattern><pattern id="act-dots" width="8" height="8" patternUnits="userSpaceOnUse"><rect width="8" height="8" fill="#ffffff"/><circle cx="4" cy="4" r="1.6" fill="#1d2b44"/></pattern></defs>
<rect x="0" y="0" width="640" height="330" fill="#ffffff"/>
<text x="82" y="264" text-anchor="end" font-size="13" fill="#1d2b44">0.0</text>
<line x1="90" y1="220" x2="540" y2="220" stroke="#c9d1dd" stroke-width="1"/>
<text x="82" y="224" text-anchor="end" font-size="13" fill="#1d2b44">0.2</text>
<line x1="90" y1="180" x2="540" y2="180" stroke="#c9d1dd" stroke-width="1"/>
<text x="82" y="184" text-anchor="end" font-size="13" fill="#1d2b44">0.4</text>
<line x1="90" y1="140" x2="540" y2="140" stroke="#c9d1dd" stroke-width="1"/>
<text x="82" y="144" text-anchor="end" font-size="13" fill="#1d2b44">0.6</text>
<line x1="90" y1="100" x2="540" y2="100" stroke="#c9d1dd" stroke-width="1"/>
<text x="82" y="104" text-anchor="end" font-size="13" fill="#1d2b44">0.8</text>
<line x1="90" y1="60" x2="540" y2="60" stroke="#c9d1dd" stroke-width="1"/>
<text x="82" y="64" text-anchor="end" font-size="13" fill="#1d2b44">1.0</text>
<line x1="90" y1="260" x2="540" y2="260" stroke="#1d2b44" stroke-width="2"/>
<line x1="90" y1="50" x2="90" y2="260" stroke="#1d2b44" stroke-width="2"/>
<rect x="120" y="160" width="90" height="100" fill="#5b7299" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="143" y="200" width="44" height="18" fill="#ffffff"/><text x="165" y="214" text-anchor="middle" font-size="13" fill="#1d2b44">0.50</text>
<rect x="120" y="120" width="90" height="40" fill="url(#act-hatch)" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="143" y="130" width="44" height="18" fill="#ffffff"/><text x="165" y="144" text-anchor="middle" font-size="13" fill="#1d2b44">0.20</text>
<rect x="120" y="60" width="90" height="60" fill="url(#act-dots)" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="143" y="80" width="44" height="18" fill="#ffffff"/><text x="165" y="94" text-anchor="middle" font-size="13" fill="#1d2b44">0.30</text>
<text x="165" y="280" text-anchor="middle" font-size="13" fill="#1d2b44">Monthly (n = 160)</text>
<rect x="270" y="200" width="90" height="60" fill="#5b7299" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="293" y="220" width="44" height="18" fill="#ffffff"/><text x="315" y="234" text-anchor="middle" font-size="13" fill="#1d2b44">0.30</text>
<rect x="270" y="120" width="90" height="80" fill="url(#act-hatch)" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="293" y="150" width="44" height="18" fill="#ffffff"/><text x="315" y="164" text-anchor="middle" font-size="13" fill="#1d2b44">0.40</text>
<rect x="270" y="60" width="90" height="60" fill="url(#act-dots)" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="293" y="80" width="44" height="18" fill="#ffffff"/><text x="315" y="94" text-anchor="middle" font-size="13" fill="#1d2b44">0.30</text>
<text x="315" y="280" text-anchor="middle" font-size="13" fill="#1d2b44">Annual (n = 240)</text>
<rect x="420" y="184" width="90" height="76" fill="#5b7299" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="443" y="212" width="44" height="18" fill="#ffffff"/><text x="465" y="226" text-anchor="middle" font-size="13" fill="#1d2b44">0.38</text>
<rect x="420" y="120" width="90" height="64" fill="url(#act-hatch)" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="443" y="142" width="44" height="18" fill="#ffffff"/><text x="465" y="156" text-anchor="middle" font-size="13" fill="#1d2b44">0.32</text>
<rect x="420" y="60" width="90" height="60" fill="url(#act-dots)" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="443" y="80" width="44" height="18" fill="#ffffff"/><text x="465" y="94" text-anchor="middle" font-size="13" fill="#1d2b44">0.30</text>
<text x="465" y="280" text-anchor="middle" font-size="13" fill="#1d2b44">All members (n = 400)</text>
<text x="315" y="312" text-anchor="middle" font-size="14" fill="#1d2b44">Membership plan</text>
<text x="22" y="155" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 22 155)">Relative frequency</text>
<rect x="560" y="90" width="18" height="14" fill="url(#act-dots)" stroke="#1d2b44" stroke-width="1.5"/><text x="584" y="102" font-size="13" fill="#1d2b44">Classes</text>
<rect x="560" y="140" width="18" height="14" fill="url(#act-hatch)" stroke="#1d2b44" stroke-width="1.5"/><text x="584" y="152" font-size="13" fill="#1d2b44">Swim</text>
<rect x="560" y="190" width="18" height="14" fill="#5b7299" stroke="#1d2b44" stroke-width="1.5"/><text x="584" y="202" font-size="13" fill="#1d2b44">Gym</text>
</svg>
<figcaption>Figure 2. Conditional distributions of main activity for each plan, and the marginal distribution for all 400 fictional Fenwick members. Solid: Gym. Hatched: Swim. Dotted: Classes. The Gym and Swim segments differ between plans, which shows association.</figcaption>
</figure>

To look for **association**, compare the conditional distributions:

- **If they are the same (or nearly the same)** in every group, there is no evidence of association. Each would also equal the marginal distribution.
- **If they differ**, the variables are associated: knowing a member's plan changes what you expect about their main activity.

Here the conditional distributions differ. Monthly members are more likely to mainly use the gym (0.50 against 0.30), and Annual members are twice as likely to mainly swim (0.40 against 0.20). The proportion for Classes is the same (0.30) in both plans. Association does not need **every** category to differ; one or more clear differences are enough. So **plan and main activity are associated** for these 400 members.

You can also condition the other way: compare the plan distribution for Gym, Swim and Classes users. Monthly members are 0.53 of Gym users, 0.25 of Swim users (32 ÷ 128) and 0.40 of Classes users (48 ÷ 120). Those also differ, and they lead to the same conclusion. When one variable is clearly explanatory, condition on it: here, compare activities **within each plan**.

## Justifying a claim with summary statistics

A strong justification:

1. **Names the right relative frequency** for the claim, with the correct denominator.
2. **Quotes the values** and compares them with words such as "greater than", "twice" or "about the same as".
3. **Answers in context** and stays within what the data show. These are fictional observational data, so they show association, not cause. A difference between sample proportions may also be partly due to chance; later in the course you will meet a formal test for this.

## Worked example 1: choosing the denominator

**Question.** A fictional town council surveyed 250 residents about a planned cycle lane. Of the 90 residents who live near the planned route, 63 support it and 27 oppose it. Of the 160 residents who do not live near the route, 64 support it and 96 oppose it. Find and interpret: (a) the proportion of all residents who live near the route and support the lane; (b) the proportion of all residents who support the lane; (c) the proportion of residents near the route who support the lane; (d) the proportion of supporters who live near the route.

**Step 1: build the table.**

| Opinion | Near the route | Not near | **Total** |
|---|---|---|---|
| Support | 63 | 64 | **127** |
| Oppose | 27 | 96 | **123** |
| **Total** | **90** | **160** | **250** |

**(a) Joint.** "Of all residents … near **and** support": 63 ÷ 250 = **0.252**. About 25% of the residents surveyed live near the route and support the lane.

**(b) Marginal.** "Of all residents … support": 127 ÷ 250 = **0.508**. Just over half (50.8%) of the residents surveyed support the lane.

**(c) Conditional, within the near-route group.** "Of residents near the route": denominator 90. 63 ÷ 90 = **0.70**. 70% of residents who live near the route support the lane.

**(d) Conditional, within supporters.** "Of supporters": denominator 127. 63 ÷ 127 ≈ **0.496**. About half (49.6%) of the supporters live near the route.

**Check.** (c) and (d) use the same cell, 63, but different groups. Swapping them is the most common error in this topic. Also, the support rate is 0.70 near the route against 64 ÷ 160 = 0.40 elsewhere, so in these data opinion is associated with where people live.

## Worked example 2: judging four claims

**Question.** A fictional supermarket chain recorded whether 600 shoppers used self-checkout at three branches.

| Self-checkout | Northgate | Riverside | Hilltop | **Total** |
|---|---|---|---|---|
| Used | 150 | 120 | 45 | **315** |
| Did not use | 100 | 80 | 105 | **285** |
| **Total** | **250** | **200** | **150** | **600** |

Decide whether each claim is supported.

- Claim A: "Self-checkout is more popular at Northgate than at Riverside, because more Northgate shoppers used it."
- Claim B: "Branch and self-checkout use are associated."
- Claim C: "Most self-checkout users shopped at Northgate."
- Claim D: "Hilltop shoppers avoid self-checkout because they are older."

**Step 1: conditional relative frequencies within each branch.** Northgate 150 ÷ 250 = 0.60. Riverside 120 ÷ 200 = 0.60. Hilltop 45 ÷ 150 = 0.30.

**Claim A: not supported.** 150 is more than 120 only because Northgate had more shoppers. The proportion is the same, 0.60, at both branches.

**Claim B: supported.** The conditional distributions are not all the same. Hilltop's rate (0.30) is half of the rate at the other two branches (0.60). Knowing the branch changes how likely a shopper was to use self-checkout.

**Claim C: not supported.** This needs a conditional relative frequency within the **users**: 150 ÷ 315 ≈ 0.476. Northgate has the largest share of users, but 0.476 is less than 0.50, so it is not "most". (The marginal relative frequency of Northgate shoppers is 250 ÷ 600 ≈ 0.417, so Northgate's share of users is a little above its share of all shoppers.)

**Claim D: not supported by these data.** The table has no information about age. The difference could have many explanations, such as the number of self-checkout machines at each branch. These are observational data, so they cannot show what causes the lower rate at Hilltop.

**Check.** All three branch proportions use the branch totals as denominators; Claim C is the only one that conditions on the other variable.

## Common misconceptions

- **Swapping the direction of a conditional.** "Of supporters, the proportion near the route" (0.496) is not "of residents near the route, the proportion who support" (0.70). Find the group named after "of the" or "among".
- **Using the grand total for every proportion.** Only joint and marginal relative frequencies use the grand total. Conditional ones use a row or column total.
- **Comparing joint relative frequencies to judge association.** Joint values depend on group sizes. Compare conditional distributions instead.
- **"No association means equal counts."** It means equal **conditional** proportions. Groups of different sizes will have different counts even with no association.
- **"Every category must differ for there to be association."** One clear difference in the conditional distributions is enough.
- **"Largest share" = "most".** "Most" needs a proportion greater than 0.50.
- **Concluding cause from observational data.** Association can come from confounding variables.

## Where this leads

Conditional relative frequencies lead straight into probability. Next, Topic 2.3 estimates probabilities from simulations: see the [Topic 2.3 study guide](/advanced-course-resources/statistics/2-3-estimating-probabilities-simulation-study-guide/). Later in this unit, conditional probability uses the same "restrict to one group" idea as this topic. Try the [practice questions](/advanced-course-resources/statistics/2-2-summary-statistics-two-categorical-variables-practice/) now, then use the [revision notes](/advanced-course-resources/statistics/2-2-summary-statistics-two-categorical-variables-revision-notes/) and the [checklist](/advanced-course-resources/statistics/2-2-summary-statistics-two-categorical-variables-checklist/) to consolidate. For the tables and graphs behind these numbers, go back to the [Topic 2.1 study guide](/advanced-course-resources/statistics/2-1-tabular-graphical-representations-distributions-two-study-guide/).
