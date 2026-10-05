---
resourceId: "mb-ap-stats-3.14-study-guide"
title: "Setting Up a Chi-Square Test for Homogeneity or Independence: Study Guide (Statistics 3.14)"
description: "Learn what the chi-square statistic measures, how chi-square distributions behave, how to choose between homogeneity and independence, and how to write hypotheses and check conditions."
course: "statistics"
unit: 3
topics: ["3.14"]
resourceType: "study-guide"
prerequisites:
  - "Reading two-way tables and conditional relative frequencies (Topics 2.1 and 2.2)"
  - "The four-part structure of a significance test (Topics 3.5, 3.7, 3.12 and 3.13)"
  - "Random sampling and randomized experiments (Topics 1.11 and 1.13)"
prerequisiteResources: ["mb-ap-stats-3.13-study-guide"]
learningObjectives:
  - "Explain that the chi-square statistic measures how far observed counts are from expected counts, relative to the expected counts"
  - "Describe the shape of chi-square distributions and how the shape changes as the degrees of freedom increase"
  - "Choose between a chi-square test for homogeneity and a chi-square test for independence from the way the data were collected"
  - "Write the null and alternative hypotheses for either test in context, naming the variable(s) and the population(s)"
  - "Check the randomization, 10% and expected counts conditions, and say what to do when one fails"
skills: ["2", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "graphing"
calculatorNote: "A graphing calculator's chi-square test function stores the expected counts in a matrix, which you can use to check the expected counts condition. Round expected counts to 2 decimal places."
related: ["mb-ap-stats-3.14-revision-notes", "mb-ap-stats-3.14-practice", "mb-ap-stats-3.14-checklist"]
next: "mb-ap-stats-3.14-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "The chi-square statistic measures how far the observed counts are from the counts expected if H₀ is true, relative to those expected counts. Bigger values mean stronger evidence against H₀."
  - "Chi-square distributions take only positive values and are skewed right; the skew weakens as the degrees of freedom increase."
  - "Homogeneity: one categorical variable compared across two or more populations or treatments (separate samples or groups)."
  - "Independence: two categorical variables measured on each individual in one random sample from one population."
  - "Conditions: random samples or random assignment; n ≤ 10% of N when sampling without replacement; all expected counts greater than 5."
faqs:
  - question: "The two-way table looks the same for both tests. How do I choose?"
    answer: "Look at how the data were collected, not at the table. Separate samples (or treatment groups) compared on one variable means homogeneity. One sample with two variables recorded for each individual means independence."
  - question: "Do the observed counts need to be greater than 5?"
    answer: "No. The condition is about the expected counts, the counts you would expect if H₀ were true. An observed count of 2 is fine if its expected count is above 5."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## Comparing whole distributions

In Topics 3.12 and 3.13 you compared **one proportion** in two groups: the proportion of "successes". Many questions are bigger than that. A categorical variable often has three or more categories, and you may want to compare three or more groups. For example:

- Do students at three colleges differ in where they mainly study (library, home or somewhere else)?
- In one city, is the age group of an adult associated with their main source of news?

A single two-sample z-test cannot answer these. You need a test that compares **whole distributions** in a two-way table. That is a **chi-square test** (χ², "kye-square"). There are two versions:

- the **chi-square test for homogeneity**, and
- the **chi-square test for independence**.

The calculations are the same for both. This topic is about **setting up** the test: choosing the version, writing hypotheses and checking conditions. Topic 3.15 carries it out.

## What the chi-square statistic measures

Every chi-square test compares two sets of counts in the two-way table:

- **Observed counts:** what the sample actually produced.
- **Expected counts:** what you would expect in each cell **if H₀ were true**.

The chi-square statistic measures **how far the observed counts are from the expected counts, relative to the expected counts**. For each cell, the gap between observed and expected is squared (so it cannot be negative) and divided by the expected count (so a gap of 6 counts for more when 10 were expected than when 100 were). The cell values are then added.

This leads to three facts you can use now:

1. χ² is **never negative**.
2. χ² = 0 only if every observed count equals its expected count exactly.
3. The **larger** χ², the further the data are from what H₀ predicts, so the **stronger** the evidence against H₀.

*Preview:* the formula, χ² = Σ (observed − expected)² / expected, and the full calculation are taught in Topic 3.15.

## Chi-square distributions

If H₀ is true, the chi-square statistic follows (approximately) a **chi-square distribution**. These form a family of density curves. Each member is identified by its **degrees of freedom** (df), which depend on the number of rows and columns in the table (Topic 3.15 shows how).

All chi-square distributions:

- take **only positive values** (they start at 0 and have no left tail below it);
- are **skewed right**, with a long tail to the right;
- become **less skewed as the degrees of freedom increase**, and their peak moves to the right.

<figure>
<svg viewBox="0 0 640 310" role="img" aria-labelledby="chisq-title chisq-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="chisq-title">Chi-square density curves with 3, 6 and 10 degrees of freedom</title>
<desc id="chisq-desc">Three density curves on a horizontal axis from 0 to 24. The solid curve, 3 degrees of freedom, rises steeply to a high peak at about 1 and has a long right tail. The dashed curve, 6 degrees of freedom, has a lower peak at about 4 and is less skewed. The dotted curve, 10 degrees of freedom, has the lowest peak at about 8 and is the most symmetric of the three, though still skewed right. No curve takes values below 0.</desc>
<rect x="0" y="0" width="640" height="310" fill="#ffffff"/>
<path d="M60.0 250.0 L62.2 153.1 L64.5 119.6 L66.8 98.1 L69.0 83.1 L71.2 72.6 L73.5 65.1 L75.8 60.0 L78.0 56.8 L80.2 55.1 L82.5 54.6 L84.8 55.0 L87.0 56.3 L89.2 58.2 L91.5 60.7 L93.8 63.6 L96.0 66.9 L98.2 70.4 L100.5 74.2 L102.8 78.2 L105.0 82.4 L107.2 86.6 L109.5 90.9 L111.8 95.3 L114.0 99.6 L116.2 104.0 L118.5 108.4 L120.8 112.7 L123.0 117.0 L125.3 121.3 L127.5 125.5 L129.8 129.6 L132.0 133.6 L134.2 137.6 L136.5 141.5 L138.8 145.2 L141.0 148.9 L143.2 152.5 L145.5 156.1 L147.8 159.5 L150.0 162.8 L152.2 166.0 L154.5 169.1 L156.8 172.2 L159.0 175.1 L161.2 178.0 L163.5 180.7 L165.8 183.4 L168.0 186.0 L170.2 188.4 L172.5 190.9 L174.8 193.2 L177.0 195.4 L179.2 197.6 L181.5 199.7 L183.8 201.7 L186.0 203.6 L188.2 205.5 L190.5 207.3 L192.8 209.0 L195.0 210.7 L197.2 212.3 L199.5 213.9 L201.8 215.3 L204.0 216.8 L206.2 218.1 L208.5 219.5 L210.8 220.7 L213.0 222.0 L215.2 223.1 L217.5 224.3 L219.8 225.3 L222.0 226.4 L224.3 227.4 L226.5 228.3 L228.8 229.2 L231.0 230.1 L233.2 231.0 L235.5 231.8 L237.8 232.6 L240.0 233.3 L242.2 234.0 L244.5 234.7 L246.8 235.4 L249.0 236.0 L251.2 236.6 L253.5 237.2 L255.8 237.7 L258.0 238.3 L260.2 238.8 L262.5 239.3 L264.8 239.7 L267.0 240.2 L269.2 240.6 L271.5 241.0 L273.8 241.4 L276.0 241.8 L278.2 242.1 L280.5 242.5 L282.8 242.8 L285.0 243.1 L287.2 243.4 L289.5 243.7 L291.8 244.0 L294.0 244.3 L296.2 244.5 L298.5 244.8 L300.8 245.0 L303.0 245.2 L305.2 245.4 L307.5 245.6 L309.8 245.8 L312.0 246.0 L314.2 246.2 L316.5 246.4 L318.8 246.5 L321.0 246.7 L323.2 246.8 L325.5 247.0 L327.8 247.1 L330.0 247.2 L332.3 247.4 L334.5 247.5 L336.8 247.6 L339.0 247.7 L341.2 247.8 L343.5 247.9 L345.8 248.0 L348.0 248.1 L350.2 248.2 L352.5 248.3 L354.8 248.3 L357.0 248.4 L359.2 248.5 L361.5 248.5 L363.8 248.6 L366.0 248.7 L368.2 248.7 L370.5 248.8 L372.8 248.8 L375.0 248.9 L377.3 249.0 L379.5 249.0 L381.8 249.0 L384.0 249.1 L386.2 249.1 L388.5 249.2 L390.8 249.2 L393.0 249.2 L395.2 249.3 L397.5 249.3 L399.8 249.3 L402.0 249.4 L404.2 249.4 L406.5 249.4 L408.8 249.5 L411.0 249.5 L413.2 249.5 L415.5 249.5 L417.8 249.5 L420.0 249.6 L422.3 249.6 L424.5 249.6 L426.8 249.6 L429.0 249.6 L431.2 249.7 L433.5 249.7 L435.8 249.7 L438.0 249.7 L440.3 249.7 L442.5 249.7 L444.8 249.7 L447.0 249.8 L449.2 249.8 L451.5 249.8 L453.8 249.8 L456.0 249.8 L458.2 249.8 L460.5 249.8 L462.8 249.8 L465.0 249.8 L467.3 249.8 L469.5 249.8 L471.8 249.9 L474.0 249.9 L476.2 249.9 L478.5 249.9 L480.8 249.9 L483.0 249.9 L485.3 249.9 L487.5 249.9 L489.8 249.9 L492.0 249.9 L494.2 249.9 L496.5 249.9 L498.8 249.9 L501.0 249.9 L503.3 249.9 L505.5 249.9 L507.8 249.9 L510.0 249.9 L512.2 249.9 L514.5 249.9 L516.8 249.9 L519.0 249.9 L521.2 249.9 L523.5 250.0 L525.8 250.0 L528.0 250.0 L530.2 250.0 L532.5 250.0 L534.8 250.0 L537.0 250.0 L539.2 250.0 L541.5 250.0 L543.8 250.0 L546.0 250.0 L548.2 250.0 L550.5 250.0 L552.8 250.0 L555.0 250.0 L557.2 250.0 L559.5 250.0 L561.8 250.0 L564.0 250.0 L566.2 250.0 L568.5 250.0 L570.8 250.0 L573.0 250.0 L575.2 250.0 L577.5 250.0 L579.8 250.0 L582.0 250.0 L584.2 250.0 L586.5 250.0 L588.8 250.0 L591.0 250.0 L593.3 250.0 L595.5 250.0 L597.8 250.0 L600.0 250.0" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<path d="M60.0 250.0 L62.2 249.5 L64.5 248.2 L66.8 246.1 L69.0 243.4 L71.2 240.2 L73.5 236.5 L75.8 232.6 L78.0 228.3 L80.2 223.9 L82.5 219.4 L84.8 214.8 L87.0 210.1 L89.2 205.5 L91.5 200.9 L93.8 196.3 L96.0 191.9 L98.2 187.6 L100.5 183.5 L102.8 179.5 L105.0 175.7 L107.2 172.1 L109.5 168.7 L111.8 165.4 L114.0 162.4 L116.2 159.6 L118.5 157.0 L120.8 154.6 L123.0 152.4 L125.3 150.4 L127.5 148.6 L129.8 147.0 L132.0 145.6 L134.2 144.4 L136.5 143.4 L138.8 142.5 L141.0 141.9 L143.2 141.3 L145.5 141.0 L147.8 140.8 L150.0 140.7 L152.2 140.8 L154.5 141.0 L156.8 141.3 L159.0 141.7 L161.2 142.3 L163.5 142.9 L165.8 143.7 L168.0 144.5 L170.2 145.4 L172.5 146.4 L174.8 147.5 L177.0 148.6 L179.2 149.8 L181.5 151.1 L183.8 152.4 L186.0 153.7 L188.2 155.1 L190.5 156.6 L192.8 158.0 L195.0 159.5 L197.2 161.0 L199.5 162.6 L201.8 164.1 L204.0 165.7 L206.2 167.3 L208.5 168.9 L210.8 170.5 L213.0 172.1 L215.2 173.7 L217.5 175.3 L219.8 176.9 L222.0 178.5 L224.3 180.1 L226.5 181.7 L228.8 183.2 L231.0 184.8 L233.2 186.3 L235.5 187.8 L237.8 189.3 L240.0 190.8 L242.2 192.3 L244.5 193.7 L246.8 195.2 L249.0 196.6 L251.2 198.0 L253.5 199.3 L255.8 200.7 L258.0 202.0 L260.2 203.3 L262.5 204.6 L264.8 205.8 L267.0 207.1 L269.2 208.3 L271.5 209.4 L273.8 210.6 L276.0 211.7 L278.2 212.8 L280.5 213.9 L282.8 215.0 L285.0 216.0 L287.2 217.0 L289.5 218.0 L291.8 218.9 L294.0 219.9 L296.2 220.8 L298.5 221.7 L300.8 222.6 L303.0 223.4 L305.2 224.2 L307.5 225.0 L309.8 225.8 L312.0 226.6 L314.2 227.3 L316.5 228.0 L318.8 228.8 L321.0 229.4 L323.2 230.1 L325.5 230.7 L327.8 231.4 L330.0 232.0 L332.3 232.6 L334.5 233.1 L336.8 233.7 L339.0 234.2 L341.2 234.8 L343.5 235.3 L345.8 235.8 L348.0 236.3 L350.2 236.7 L352.5 237.2 L354.8 237.6 L357.0 238.0 L359.2 238.4 L361.5 238.8 L363.8 239.2 L366.0 239.6 L368.2 240.0 L370.5 240.3 L372.8 240.7 L375.0 241.0 L377.3 241.3 L379.5 241.6 L381.8 241.9 L384.0 242.2 L386.2 242.5 L388.5 242.7 L390.8 243.0 L393.0 243.2 L395.2 243.5 L397.5 243.7 L399.8 243.9 L402.0 244.2 L404.2 244.4 L406.5 244.6 L408.8 244.8 L411.0 245.0 L413.2 245.2 L415.5 245.3 L417.8 245.5 L420.0 245.7 L422.3 245.8 L424.5 246.0 L426.8 246.1 L429.0 246.3 L431.2 246.4 L433.5 246.5 L435.8 246.7 L438.0 246.8 L440.3 246.9 L442.5 247.0 L444.8 247.1 L447.0 247.3 L449.2 247.4 L451.5 247.5 L453.8 247.6 L456.0 247.6 L458.2 247.7 L460.5 247.8 L462.8 247.9 L465.0 248.0 L467.3 248.1 L469.5 248.1 L471.8 248.2 L474.0 248.3 L476.2 248.3 L478.5 248.4 L480.8 248.5 L483.0 248.5 L485.3 248.6 L487.5 248.6 L489.8 248.7 L492.0 248.7 L494.2 248.8 L496.5 248.8 L498.8 248.9 L501.0 248.9 L503.3 249.0 L505.5 249.0 L507.8 249.0 L510.0 249.1 L512.2 249.1 L514.5 249.2 L516.8 249.2 L519.0 249.2 L521.2 249.2 L523.5 249.3 L525.8 249.3 L528.0 249.3 L530.2 249.4 L532.5 249.4 L534.8 249.4 L537.0 249.4 L539.2 249.5 L541.5 249.5 L543.8 249.5 L546.0 249.5 L548.2 249.5 L550.5 249.6 L552.8 249.6 L555.0 249.6 L557.2 249.6 L559.5 249.6 L561.8 249.6 L564.0 249.7 L566.2 249.7 L568.5 249.7 L570.8 249.7 L573.0 249.7 L575.2 249.7 L577.5 249.7 L579.8 249.7 L582.0 249.8 L584.2 249.8 L586.5 249.8 L588.8 249.8 L591.0 249.8 L593.3 249.8 L595.5 249.8 L597.8 249.8 L600.0 249.8" fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="8 5"/>
<path d="M60.0 250.0 L62.2 250.0 L64.5 250.0 L66.8 250.0 L69.0 250.0 L71.2 249.9 L73.5 249.9 L75.8 249.8 L78.0 249.7 L80.2 249.6 L82.5 249.4 L84.8 249.1 L87.0 248.8 L89.2 248.4 L91.5 248.0 L93.8 247.5 L96.0 246.9 L98.2 246.2 L100.5 245.5 L102.8 244.7 L105.0 243.8 L107.2 242.8 L109.5 241.8 L111.8 240.7 L114.0 239.5 L116.2 238.2 L118.5 236.9 L120.8 235.5 L123.0 234.1 L125.3 232.6 L127.5 231.0 L129.8 229.4 L132.0 227.7 L134.2 226.0 L136.5 224.3 L138.8 222.6 L141.0 220.8 L143.2 219.0 L145.5 217.2 L147.8 215.4 L150.0 213.6 L152.2 211.7 L154.5 209.9 L156.8 208.1 L159.0 206.3 L161.2 204.5 L163.5 202.8 L165.8 201.1 L168.0 199.4 L170.2 197.7 L172.5 196.0 L174.8 194.4 L177.0 192.9 L179.2 191.4 L181.5 189.9 L183.8 188.5 L186.0 187.1 L188.2 185.8 L190.5 184.5 L192.8 183.3 L195.0 182.1 L197.2 181.0 L199.5 180.0 L201.8 179.0 L204.0 178.1 L206.2 177.2 L208.5 176.4 L210.8 175.6 L213.0 175.0 L215.2 174.3 L217.5 173.7 L219.8 173.2 L222.0 172.8 L224.3 172.4 L226.5 172.0 L228.8 171.7 L231.0 171.5 L233.2 171.3 L235.5 171.2 L237.8 171.1 L240.0 171.1 L242.2 171.1 L244.5 171.2 L246.8 171.3 L249.0 171.5 L251.2 171.7 L253.5 171.9 L255.8 172.2 L258.0 172.6 L260.2 172.9 L262.5 173.3 L264.8 173.8 L267.0 174.3 L269.2 174.8 L271.5 175.3 L273.8 175.9 L276.0 176.5 L278.2 177.1 L280.5 177.8 L282.8 178.4 L285.0 179.1 L287.2 179.9 L289.5 180.6 L291.8 181.4 L294.0 182.1 L296.2 182.9 L298.5 183.7 L300.8 184.5 L303.0 185.4 L305.2 186.2 L307.5 187.1 L309.8 187.9 L312.0 188.8 L314.2 189.7 L316.5 190.6 L318.8 191.5 L321.0 192.3 L323.2 193.2 L325.5 194.1 L327.8 195.0 L330.0 195.9 L332.3 196.8 L334.5 197.7 L336.8 198.6 L339.0 199.5 L341.2 200.4 L343.5 201.3 L345.8 202.2 L348.0 203.1 L350.2 204.0 L352.5 204.8 L354.8 205.7 L357.0 206.6 L359.2 207.4 L361.5 208.3 L363.8 209.1 L366.0 209.9 L368.2 210.7 L370.5 211.6 L372.8 212.4 L375.0 213.2 L377.3 213.9 L379.5 214.7 L381.8 215.5 L384.0 216.2 L386.2 217.0 L388.5 217.7 L390.8 218.4 L393.0 219.2 L395.2 219.9 L397.5 220.6 L399.8 221.2 L402.0 221.9 L404.2 222.6 L406.5 223.2 L408.8 223.9 L411.0 224.5 L413.2 225.1 L415.5 225.7 L417.8 226.3 L420.0 226.9 L422.3 227.5 L424.5 228.0 L426.8 228.6 L429.0 229.1 L431.2 229.6 L433.5 230.2 L435.8 230.7 L438.0 231.2 L440.3 231.6 L442.5 232.1 L444.8 232.6 L447.0 233.1 L449.2 233.5 L451.5 233.9 L453.8 234.4 L456.0 234.8 L458.2 235.2 L460.5 235.6 L462.8 236.0 L465.0 236.4 L467.3 236.7 L469.5 237.1 L471.8 237.5 L474.0 237.8 L476.2 238.2 L478.5 238.5 L480.8 238.8 L483.0 239.1 L485.3 239.4 L487.5 239.7 L489.8 240.0 L492.0 240.3 L494.2 240.6 L496.5 240.9 L498.8 241.1 L501.0 241.4 L503.3 241.6 L505.5 241.9 L507.8 242.1 L510.0 242.4 L512.2 242.6 L514.5 242.8 L516.8 243.0 L519.0 243.2 L521.2 243.4 L523.5 243.6 L525.8 243.8 L528.0 244.0 L530.2 244.2 L532.5 244.4 L534.8 244.5 L537.0 244.7 L539.2 244.9 L541.5 245.0 L543.8 245.2 L546.0 245.3 L548.2 245.5 L550.5 245.6 L552.8 245.8 L555.0 245.9 L557.2 246.0 L559.5 246.1 L561.8 246.3 L564.0 246.4 L566.2 246.5 L568.5 246.6 L570.8 246.7 L573.0 246.8 L575.2 246.9 L577.5 247.0 L579.8 247.1 L582.0 247.2 L584.2 247.3 L586.5 247.4 L588.8 247.5 L591.0 247.6 L593.3 247.6 L595.5 247.7 L597.8 247.8 L600.0 247.9" fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="2 4"/>
<line x1="60" y1="250" x2="600" y2="250" stroke="#1d2b44" stroke-width="2"/><g stroke="#1d2b44" stroke-width="1.5"><line x1="60.0" y1="250" x2="60.0" y2="256"/><line x1="150.0" y1="250" x2="150.0" y2="256"/><line x1="240.0" y1="250" x2="240.0" y2="256"/><line x1="330.0" y1="250" x2="330.0" y2="256"/><line x1="420.0" y1="250" x2="420.0" y2="256"/><line x1="510.0" y1="250" x2="510.0" y2="256"/><line x1="600.0" y1="250" x2="600.0" y2="256"/></g><g font-size="13" fill="#1d2b44" text-anchor="middle"><text x="60.0" y="271">0</text><text x="150.0" y="271">4</text><text x="240.0" y="271">8</text><text x="330.0" y="271">12</text><text x="420.0" y="271">16</text><text x="510.0" y="271">20</text><text x="600.0" y="271">24</text></g>
<text x="95" y="48" text-anchor="start" font-size="13" fill="#1d2b44">df = 3 (solid)</text>
<text x="162" y="130" text-anchor="start" font-size="13" fill="#1d2b44">df = 6 (dashed)</text>
<text x="252" y="162" text-anchor="start" font-size="13" fill="#1d2b44">df = 10 (dotted)</text>
<text x="330" y="296" text-anchor="middle" font-size="14" fill="#1d2b44">Value of the chi-square statistic</text>
</svg>
<figcaption>Figure 1. Three chi-square distributions. Each takes only positive values and is skewed right. As the degrees of freedom increase (3, then 6, then 10), the peak moves right, the curve spreads out and the skew becomes less pronounced. Line styles, not colour, distinguish the curves.</figcaption>
</figure>

Because large values of χ² are the evidence against H₀, the p-value for a chi-square test is always the area in the **right tail**.

## Homogeneity or independence?

Decide by asking **how the data were collected**.

| | Chi-square test for homogeneity | Chi-square test for independence |
|---|---|---|
| Design | Independent random samples from two or more populations, **or** two or more treatment groups in a randomized experiment | **One** random sample from **one** population |
| Variables | **One** categorical variable, recorded for each sample or group | **Two** categorical variables, both recorded for each individual |
| Question | Is the distribution of the variable different across the populations or treatments? | Is there an association between the two variables in the population? |
| The groups | fixed by the researcher before the data are collected | emerge from the data (the row totals are not chosen) |

A quick test: if the researcher **chose how many** individuals to take from each group, it is usually homogeneity. If the researcher took one sample and **sorted** it by two variables afterwards, it is independence.

A test for homogeneity should name **the categorical variable and the populations** (or treatments). A test for independence should name **both categorical variables and the one population**.

## Writing the hypotheses

Hypotheses for chi-square tests are written in words, in context, about **populations**, not about samples.

**Homogeneity**

- H₀: There is no difference in the distribution of [variable] across [populations or treatments].
- Hₐ: There is a difference in the distribution of [variable] across [populations or treatments].

**Independence**

- H₀: There is no association between [variable 1] and [variable 2] among [population]. (Equivalently: the two variables are independent in this population.)
- Hₐ: There is an association between [variable 1] and [variable 2] among [population]. (Equivalently: they are not independent.)

Hₐ does **not** say that every distribution is different from every other. One difference anywhere in the table is enough to make Hₐ true.

## The three conditions

1. **Randomization.**
   - Homogeneity: the data come from independent random samples, or from a randomized experiment.
   - Independence: the data come from one random sample.
2. **10% condition.** When sampling without replacement, each sample size should be no more than 10% of its population: n ≤ 10%N. This is not needed for a randomized experiment.
3. **Expected counts condition.** **All** expected counts should be **greater than 5**.

To check condition 3 you need the expected counts. Technology produces them. *Preview of Topic 3.15:* each expected count is (row total × column total) ÷ table total. You will practise this calculation in the next topic; here you mainly need to compare the expected counts with 5.

If a condition is not met, say so and say what it means. If the randomization condition fails, you cannot generalise to a population. If the expected counts condition fails, the chi-square distribution is not a good model for the statistic, so the test should not be carried out as it stands. A larger sample would help. Sometimes it makes sense to combine categories, but this changes the question being asked, so say so.

## Worked example 1: a test for homogeneity

**Context (fictional).** A researcher wants to know whether students at three colleges differ in where they mainly study. She takes independent random samples of 120 students from Elmfield College (1,800 students), 100 from Northcote College (1,500 students) and 80 from Riverside College (1,100 students). Each student names their main study place.

| | Library | Home | Other | Total |
|---|---|---|---|---|
| Elmfield | 48 | 52 | 20 | 120 |
| Northcote | 30 | 55 | 15 | 100 |
| Riverside | 22 | 44 | 14 | 80 |
| Total | 100 | 151 | 49 | 300 |

**Question.** Identify the appropriate test, state the hypotheses and check the conditions.

**1. Test.** There are three separate random samples, one from each college, and one categorical variable (main study place). This is a **chi-square test for homogeneity**.

**2. Hypotheses.**

- H₀: There is no difference in the distribution of main study place (library, home, other) among all students at Elmfield, Northcote and Riverside colleges.
- Hₐ: There is a difference in the distribution of main study place among all students at the three colleges.

**3. Conditions.**

- Randomization: independent random samples from the three colleges.
- 10% condition: 120 ≤ 10% of 1,800 = 180; 100 ≤ 10% of 1,500 = 150; 80 ≤ 10% of 1,100 = 110.
- Expected counts (from technology):

| | Library | Home | Other |
|---|---|---|---|
| Elmfield | 40.00 | 60.40 | 19.60 |
| Northcote | 33.33 | 50.33 | 16.33 |
| Riverside | 26.67 | 40.27 | 13.07 |

The smallest expected count is 13.07, so all expected counts are greater than 5. (Check one: Elmfield–Other = 120 × 49 ÷ 300 = 19.60.)

**Conclusion of the set-up.** All three conditions are met, so a chi-square test for homogeneity is appropriate. Topic 3.15 carries it out.

**Check.** The observed counts for Elmfield–Library (48) and Elmfield–Home (52) are some distance from their expected counts (40.00 and 60.40). Gaps like these make χ² larger. Whether they are large enough to be convincing is what the p-value will tell you.

## Worked example 2: a test for independence where a condition fails

**Context (fictional).** A local newspaper in the city of Kestrelton (about 250,000 adults) wants to know whether age group is associated with main news source among the city's adults. It takes a random sample of 160 adults and records each person's age group and main news source.

| | Online | TV | Print | Total |
|---|---|---|---|---|
| 18–34 | 40 | 12 | 2 | 54 |
| 35–59 | 30 | 24 | 4 | 58 |
| 60 and over | 14 | 28 | 6 | 48 |
| Total | 84 | 64 | 12 | 160 |

**Question.** Identify the appropriate test, state the hypotheses and check the conditions.

**1. Test.** One random sample from one population, with two categorical variables recorded for each adult. This is a **chi-square test for independence**. Notice that the newspaper did not choose 54, 58 and 48; the row totals came out of the sample.

**2. Hypotheses.**

- H₀: There is no association between age group and main news source among adults in Kestrelton.
- Hₐ: There is an association between age group and main news source among adults in Kestrelton.

**3. Conditions.**

- Randomization: one random sample of the city's adults.
- 10% condition: 160 ≤ 10% of 250,000 = 25,000.
- Expected counts (from technology):

| | Online | TV | Print |
|---|---|---|---|
| 18–34 | 28.35 | 21.60 | 4.05 |
| 35–59 | 30.45 | 23.20 | 4.35 |
| 60 and over | 25.20 | 19.20 | 3.60 |

None of the three expected counts in the Print column (4.05, 4.35 and 3.60) is greater than 5. **The expected counts condition is not met**, so a chi-square test for independence should not be carried out on this table.

**What next?** The newspaper could take a larger random sample. Alternatively, it could combine TV and Print into one category, "TV or print". The expected counts would then be 25.65, 27.55 and 22.80 for that column, all greater than 5. But the question has changed: the test would now ask about online versus traditional sources, not about all three sources.

**Check.** Do not be fooled by the observed counts. The observed count of 2 is small, but it is the expected counts that matter, and here the whole Print column fails.

## Common misconceptions

- **Choosing the test from the shape of the table.** Both tests use a two-way table. The design decides: separate samples or treatments means homogeneity; one sample with two variables means independence.
- **Checking observed counts against 5.** The condition is about **expected** counts.
- **Hypotheses about the sample.** "There is no association in the sample" is not a hypothesis; you can see the sample. Talk about the population.
- **"Hₐ: all the distributions are different."** Hₐ says there is *a* difference somewhere.
- **"An association means one variable causes the other."** A test for independence on an observational sample cannot show cause and effect.
- **"χ² can be negative" or "a small χ² is strong evidence".** χ² is never negative, and **large** values are evidence against H₀.
- **Using percentages in the table.** Chi-square tests work with counts. Convert percentages back to counts first.
- **Checking the 10% condition for an experiment.** It is only needed when sampling without replacement from a population.

## Where this leads

Next, in [Topic 3.15, Carrying Out a Chi-Square Test for Homogeneity or Independence](/advanced-course-resources/statistics/3-15-carrying-out-chi-square-test-study-guide/), you will calculate expected counts, the chi-square statistic, the degrees of freedom and the p-value, and write a conclusion. To compare with tests for one proportion in two groups, look back at [Topic 3.13](/advanced-course-resources/statistics/3-13-carrying-out-test-difference-between-study-guide/). Try the [practice questions](/advanced-course-resources/statistics/3-14-setting-up-chi-square-test-practice/) now, then use the [revision notes](/advanced-course-resources/statistics/3-14-setting-up-chi-square-test-revision-notes/) and the [checklist](/advanced-course-resources/statistics/3-14-setting-up-chi-square-test-checklist/) to consolidate.
