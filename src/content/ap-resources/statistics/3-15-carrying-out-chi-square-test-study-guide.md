---
resourceId: "mb-ap-stats-3.15-study-guide"
title: "Carrying Out a Chi-Square Test for Homogeneity or Independence: Study Guide (Statistics 3.15)"
description: "Learn to calculate expected counts, the chi-square statistic, degrees of freedom and the p-value for a two-way table, then interpret the p-value and write a conclusion in context."
course: "statistics"
unit: 3
topics: ["3.15"]
resourceType: "study-guide"
prerequisites:
  - "Choosing between a chi-square test for homogeneity and a test for independence, and writing the hypotheses and conditions (Topic 3.14)"
  - "Interpreting a p-value and comparing it with a significance level (Topics 3.6 and 3.7)"
  - "Reading row and column totals in a two-way table (Topic 2.1)"
prerequisiteResources: ["mb-ap-stats-3.14-study-guide"]
learningObjectives:
  - "Calculate the expected count for each cell of a two-way table, assuming the null hypothesis is true"
  - "Calculate the chi-square statistic and its degrees of freedom, (rows − 1)(columns − 1)"
  - "Find the p-value from a chi-square distribution with a table or technology, always using the right tail"
  - "Interpret the p-value in context as a probability calculated by assuming the null hypothesis is true"
  - "Make a decision by comparing the p-value with α and write a non-definitive conclusion about the population or populations"
skills: ["3", "4"]
studyMinutes: 50
difficulty: "core"
calculator: "graphing"
calculatorNote: "Enter the observed counts as a matrix and use the chi-square test function (often called χ²-Test); it also stores the expected counts. Round χ² to 2 decimal places and p-values to 4 decimal places."
related: ["mb-ap-stats-3.15-revision-notes", "mb-ap-stats-3.15-practice", "mb-ap-stats-3.15-checklist"]
next: "mb-ap-stats-3.15-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Expected count = (row total × column total) ÷ table total. It is the count you would expect if H₀ were true."
  - "χ² = Σ (observed − expected)² ÷ expected, summed over every cell of the table."
  - "Degrees of freedom = (number of rows − 1)(number of columns − 1)."
  - "The p-value is always the area to the right of χ² under the chi-square distribution: only large χ² values are evidence against H₀."
  - "Compare the p-value with α, then conclude in context about the population(s), in terms of Hₐ, with non-definitive language."
faqs:
  - question: "Do expected counts have to be whole numbers?"
    answer: "No. An expected count is an average over many imagined samples, so values such as 22.4 are normal. Do not round them to whole numbers before calculating χ²."
  - question: "Why is the p-value always a right-tail area, even though Hₐ just says 'there is a difference'?"
    answer: "χ² adds up squared distances, so it is never negative, and it gets larger the further the observed counts are from the expected counts in any direction. Only large values are evidence for Hₐ, so the p-value is the area at or above the observed χ²."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## From set-up to conclusion

In Topic 3.14 you chose the right chi-square test, wrote the hypotheses and checked the conditions. This topic finishes the test. You calculate the expected counts, the chi-square statistic and the p-value, then make a decision and write a conclusion.

Use the same four-part structure as every other significance test in the course:

1. **Hypotheses.** State H₀ and Hₐ in context and give α.
   - **Homogeneity** (two or more populations or treatments, one categorical variable): H₀: there is no difference in the distribution of the variable across the populations; Hₐ: there is a difference.
   - **Independence** (one population, two categorical variables): H₀: there is no association between the two variables in the population; Hₐ: there is an association.
2. **Method and conditions.** Name the test. Check randomization (independent random samples or a randomized experiment for homogeneity; one random sample for independence), the 10% condition when sampling without replacement (not needed for a randomized experiment) and the expected counts condition: **every expected count is greater than 5**.
3. **Calculations.** Expected counts, χ², degrees of freedom and the p-value.
4. **Conclusion.** Compare the p-value with α, state the decision and conclude in context.

The calculations are the same for both tests. Only the hypotheses, the randomization condition and the wording of the conclusion change.

## Expected counts

A chi-square test compares what you **observed** with what you would **expect if H₀ were true**.

If H₀ is true, the distribution of the column variable is the same in every row. So each row should split in the same proportions as the whole table. That gives the formula:

**expected count = (row total × column total) ÷ table total**

Here is why it works. Suppose 160 of all 400 people in a study travel by bus, which is 40%. If the travel mode does not depend on the row, then about 40% of the 120 people in the first row should travel by bus: 0.40 × 120 = 48. That is exactly (120 × 160) ÷ 400 = 48.

Three useful facts:

- Expected counts **need not be whole numbers**. Keep them unrounded (or to at least 2 decimal places).
- The expected counts in each row and each column add up to the **same totals** as the observed counts. Use this as a check.
- You need the expected counts twice: to check the expected counts condition, and to calculate χ².

## The chi-square statistic

The test statistic measures how far the observed counts are from the expected counts, **relative to** the expected counts:

**χ² = Σ (observed count − expected count)² ÷ expected count**

The sum is taken over **every cell** of the two-way table, not over the rows or the totals. Each term in the sum is called a **component** (or contribution) of χ².

- **Squaring** stops positive and negative differences from cancelling out, so χ² can never be negative.
- **Dividing by the expected count** puts the differences on a fair scale. A difference of 6 matters more when you expected 24 than when you expected 240.
- χ² = 0 only if every observed count equals its expected count. The **larger** χ² is, the further the data are from what H₀ predicts, and the stronger the evidence against H₀.

## Degrees of freedom and the null distribution

When H₀ is true and the conditions are met, χ² follows (approximately) a **chi-square distribution** with

**degrees of freedom (df) = (number of rows − 1)(number of columns − 1)**

Count only the rows and columns of categories, not the total row or total column. A 3 × 3 table has df = 2 × 2 = 4; a 3 × 2 table has df = 2 × 1 = 2.

Why this number? Once the row and column totals are fixed, you can fill in (r − 1)(c − 1) cells freely. Every other cell is then forced by the totals.

Recall from Topic 3.14 that chi-square distributions take only positive values and are skewed to the right, and that the skew becomes less strong as df increases.

## Finding the p-value

The p-value is the probability, assuming H₀ is true, of getting a χ² value **as large as or larger than** the one observed:

**p-value = P(χ² ≥ observed χ²)**, using the chi-square distribution with the correct df.

It is **always the right tail**. A two-way table has no "direction" to test: any kind of difference from the expected counts makes χ² bigger.

- **Technology** gives the p-value directly (a chi-square cdf from your χ² value up to a very large number, or the χ²-Test function, which works from the observed counts).
- **A chi-square table** gives a range. Find the row for your df and see which two critical values your χ² falls between. For df = 4, the critical values are 9.488 (tail area 0.05) and 11.143 (tail area 0.025). A χ² of 10.07 lies between them, so 0.025 < p-value < 0.05.

Show your work either way: the expected counts (or at least one sample calculation), the χ² formula with values, df and the p-value. "Calculator gives p = 0.0393" on its own does not show a method.

<figure>
<svg viewBox="0 0 640 430" role="img" aria-labelledby="chisq-title chisq-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="chisq-title">Chi-square null distributions showing the p-values for Worked examples 1 and 2</title>
<desc id="chisq-desc">Two right-skewed chi-square density curves, each drawn above a horizontal axis marked from 0 to 16. Top panel, Worked example 1, 4 degrees of freedom: the curve starts at 0, rises to a peak at 2 and has a long right tail. A dashed vertical line at chi-square equals 10.07 and the small area to its right is hatched and labelled p-value equals 0.0393. Bottom panel, Worked example 2, 2 degrees of freedom: the curve is highest at 0 and falls steadily. A dashed vertical line at chi-square equals 4.03 and the larger area to its right is hatched and labelled p-value equals 0.1331. Each curve is scaled to fit its panel.</desc>
<defs><pattern id="hatch315" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="#d9dee8"/><line x1="0" y1="0" x2="0" y2="6" stroke="#1d2b44" stroke-width="1.5"/></pattern></defs>
<rect x="0" y="0" width="640" height="430" fill="#ffffff"/>
<text x="20" y="28" font-size="14" fill="#1d2b44" font-weight="bold">Worked example 1: df = (3 − 1)(3 − 1) = 4</text>
<path d="M392.3 158 L392.3 149.1 L395.8 149.4 L399.3 149.8 L402.9 150.1 L406.4 150.4 L409.9 150.7 L413.4 151.0 L416.9 151.3 L420.5 151.6 L424.0 151.8 L427.5 152.1 L431.0 152.3 L434.5 152.5 L438.1 152.8 L441.6 153.0 L445.1 153.2 L448.6 153.4 L452.1 153.6 L455.7 153.7 L459.2 153.9 L462.7 154.1 L466.2 154.2 L469.7 154.4 L473.3 154.5 L476.8 154.7 L480.3 154.8 L483.8 155.0 L487.3 155.1 L490.9 155.2 L494.4 155.3 L497.9 155.4 L501.4 155.5 L504.9 155.6 L508.5 155.7 L512.0 155.8 L515.5 155.9 L519.0 156.0 L522.5 156.1 L526.1 156.2 L529.6 156.3 L533.1 156.3 L536.6 156.4 L540.2 156.5 L543.7 156.5 L547.2 156.6 L550.7 156.7 L554.2 156.7 L557.8 156.8 L561.3 156.8 L564.8 156.9 L568.3 156.9 L571.8 157.0 L575.4 157.0 L578.9 157.1 L582.4 157.1 L585.9 157.1 L589.4 157.2 L593.0 157.2 L596.5 157.2 L600.0 157.3 L600.0 158 Z" fill="url(#hatch315)" stroke="#1d2b44" stroke-width="1"/>
<path d="M40.0 158.0 L43.5 145.1 L47.0 133.4 L50.5 122.9 L54.0 113.5 L57.5 105.1 L61.0 97.6 L64.5 91.0 L68.0 85.1 L71.5 80.0 L75.0 75.6 L78.5 71.7 L82.0 68.5 L85.5 65.8 L89.0 63.5 L92.5 61.7 L96.0 60.3 L99.5 59.2 L103.0 58.5 L106.5 58.1 L110.0 58.0 L113.5 58.1 L117.0 58.5 L120.5 59.0 L124.0 59.8 L127.5 60.6 L131.0 61.7 L134.5 62.9 L138.0 64.2 L141.5 65.5 L145.0 67.0 L148.5 68.6 L152.0 70.2 L155.5 71.9 L159.0 73.6 L162.5 75.3 L166.0 77.1 L169.5 78.9 L173.0 80.8 L176.5 82.6 L180.0 84.4 L183.5 86.3 L187.0 88.1 L190.5 89.9 L194.0 91.7 L197.5 93.5 L201.0 95.3 L204.5 97.1 L208.0 98.8 L211.5 100.5 L215.0 102.2 L218.5 103.9 L222.0 105.5 L225.5 107.1 L229.0 108.7 L232.5 110.2 L236.0 111.7 L239.5 113.2 L243.0 114.6 L246.5 116.0 L250.0 117.4 L253.5 118.7 L257.0 120.0 L260.5 121.3 L264.0 122.5 L267.5 123.7 L271.0 124.9 L274.5 126.1 L278.0 127.2 L281.5 128.2 L285.0 129.3 L288.5 130.3 L292.0 131.3 L295.5 132.2 L299.0 133.1 L302.5 134.0 L306.0 134.9 L309.5 135.7 L313.0 136.5 L316.5 137.3 L320.0 138.1 L323.5 138.8 L327.0 139.5 L330.5 140.2 L334.0 140.9 L337.5 141.5 L341.0 142.1 L344.5 142.7 L348.0 143.3 L351.5 143.9 L355.0 144.4 L358.5 144.9 L362.0 145.4 L365.5 145.9 L369.0 146.4 L372.5 146.8 L376.0 147.3 L379.5 147.7 L383.0 148.1 L386.5 148.5 L390.0 148.8 L393.5 149.2 L397.0 149.5 L400.5 149.9 L404.0 150.2 L407.5 150.5 L411.0 150.8 L414.5 151.1 L418.0 151.4 L421.5 151.6 L425.0 151.9 L428.5 152.1 L432.0 152.4 L435.5 152.6 L439.0 152.8 L442.5 153.0 L446.0 153.2 L449.5 153.4 L453.0 153.6 L456.5 153.8 L460.0 154.0 L463.5 154.1 L467.0 154.3 L470.5 154.4 L474.0 154.6 L477.5 154.7 L481.0 154.9 L484.5 155.0 L488.0 155.1 L491.5 155.2 L495.0 155.3 L498.5 155.5 L502.0 155.6 L505.5 155.7 L509.0 155.8 L512.5 155.9 L516.0 155.9 L519.5 156.0 L523.0 156.1 L526.5 156.2 L530.0 156.3 L533.5 156.3 L537.0 156.4 L540.5 156.5 L544.0 156.5 L547.5 156.6 L551.0 156.7 L554.5 156.7 L558.0 156.8 L561.5 156.8 L565.0 156.9 L568.5 156.9 L572.0 157.0 L575.5 157.0 L579.0 157.1 L582.5 157.1 L586.0 157.1 L589.5 157.2 L593.0 157.2 L596.5 157.2 L600.0 157.3" fill="none" stroke="#1d2b44" stroke-width="2"/>
<line x1="40" y1="158" x2="600" y2="158" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5"><line x1="40.0" y1="158" x2="40.0" y2="164"/><line x1="110.0" y1="158" x2="110.0" y2="164"/><line x1="180.0" y1="158" x2="180.0" y2="164"/><line x1="250.0" y1="158" x2="250.0" y2="164"/><line x1="320.0" y1="158" x2="320.0" y2="164"/><line x1="390.0" y1="158" x2="390.0" y2="164"/><line x1="460.0" y1="158" x2="460.0" y2="164"/><line x1="530.0" y1="158" x2="530.0" y2="164"/><line x1="600.0" y1="158" x2="600.0" y2="164"/></g>
<g font-size="13" fill="#1d2b44" text-anchor="middle"><text x="40.0" y="179">0</text><text x="110.0" y="179">2</text><text x="180.0" y="179">4</text><text x="250.0" y="179">6</text><text x="320.0" y="179">8</text><text x="390.0" y="179">10</text><text x="460.0" y="179">12</text><text x="530.0" y="179">14</text><text x="600.0" y="179">16</text></g>
<line x1="392.3" y1="68" x2="392.3" y2="158" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 3"/>
<text x="392.3" y="62" text-anchor="middle" font-size="12" fill="#1d2b44">χ² = 10.07</text>
<text x="432.3" y="118" text-anchor="start" font-size="12" fill="#1d2b44">p-value = 0.0393 (right tail)</text>
<text x="320" y="198" text-anchor="middle" font-size="13" fill="#1d2b44">χ² value</text>
<text x="20" y="238" font-size="14" fill="#1d2b44" font-weight="bold">Worked example 2: df = (3 − 1)(2 − 1) = 2</text>
<path d="M181.2 368 L181.2 354.6 L188.3 355.9 L195.4 357.0 L202.5 358.1 L209.6 359.0 L216.7 359.9 L223.7 360.7 L230.8 361.4 L237.9 362.0 L245.0 362.6 L252.1 363.1 L259.2 363.6 L266.3 364.0 L273.4 364.4 L280.5 364.7 L287.6 365.1 L294.7 365.3 L301.8 365.6 L308.9 365.8 L316.0 366.0 L323.1 366.2 L330.2 366.4 L337.3 366.6 L344.4 366.7 L351.5 366.8 L358.6 366.9 L365.7 367.0 L372.8 367.1 L379.9 367.2 L387.0 367.3 L394.1 367.4 L401.2 367.4 L408.3 367.5 L415.4 367.5 L422.5 367.6 L429.6 367.6 L436.7 367.7 L443.8 367.7 L450.9 367.7 L458.0 367.7 L465.1 367.8 L472.2 367.8 L479.3 367.8 L486.4 367.8 L493.5 367.8 L500.6 367.9 L507.7 367.9 L514.8 367.9 L521.9 367.9 L529.0 367.9 L536.1 367.9 L543.2 367.9 L550.3 367.9 L557.4 367.9 L564.5 367.9 L571.6 367.9 L578.7 368.0 L585.8 368.0 L592.9 368.0 L600.0 368.0 L600.0 368 Z" fill="url(#hatch315)" stroke="#1d2b44" stroke-width="1"/>
<path d="M40.7 268.0 L44.2 272.9 L47.7 277.5 L51.2 281.9 L54.7 286.1 L58.2 290.1 L61.7 293.9 L65.2 297.5 L68.7 300.9 L72.2 304.2 L75.7 307.3 L79.2 310.3 L82.6 313.1 L86.1 315.8 L89.6 318.3 L93.1 320.7 L96.6 323.0 L100.1 325.2 L103.6 327.3 L107.1 329.3 L110.6 331.2 L114.1 333.0 L117.6 334.7 L121.1 336.3 L124.6 337.8 L128.1 339.3 L131.6 340.7 L135.1 342.0 L138.6 343.3 L142.1 344.5 L145.6 345.6 L149.1 346.7 L152.6 347.8 L156.1 348.8 L159.6 349.7 L163.0 350.6 L166.5 351.4 L170.0 352.2 L173.5 353.0 L177.0 353.7 L180.5 354.4 L184.0 355.1 L187.5 355.7 L191.0 356.3 L194.5 356.9 L198.0 357.4 L201.5 357.9 L205.0 358.4 L208.5 358.9 L212.0 359.3 L215.5 359.8 L219.0 360.2 L222.5 360.5 L226.0 360.9 L229.5 361.3 L233.0 361.6 L236.5 361.9 L240.0 362.2 L243.4 362.5 L246.9 362.7 L250.4 363.0 L253.9 363.2 L257.4 363.5 L260.9 363.7 L264.4 363.9 L267.9 364.1 L271.4 364.3 L274.9 364.5 L278.4 364.6 L281.9 364.8 L285.4 365.0 L288.9 365.1 L292.4 365.3 L295.9 365.4 L299.4 365.5 L302.9 365.6 L306.4 365.8 L309.9 365.9 L313.4 366.0 L316.9 366.1 L320.3 366.2 L323.8 366.2 L327.3 366.3 L330.8 366.4 L334.3 366.5 L337.8 366.6 L341.3 366.6 L344.8 366.7 L348.3 366.8 L351.8 366.8 L355.3 366.9 L358.8 366.9 L362.3 367.0 L365.8 367.0 L369.3 367.1 L372.8 367.1 L376.3 367.2 L379.8 367.2 L383.3 367.3 L386.8 367.3 L390.3 367.3 L393.8 367.4 L397.3 367.4 L400.7 367.4 L404.2 367.4 L407.7 367.5 L411.2 367.5 L414.7 367.5 L418.2 367.5 L421.7 367.6 L425.2 367.6 L428.7 367.6 L432.2 367.6 L435.7 367.6 L439.2 367.7 L442.7 367.7 L446.2 367.7 L449.7 367.7 L453.2 367.7 L456.7 367.7 L460.2 367.8 L463.7 367.8 L467.2 367.8 L470.7 367.8 L474.2 367.8 L477.7 367.8 L481.1 367.8 L484.6 367.8 L488.1 367.8 L491.6 367.8 L495.1 367.8 L498.6 367.9 L502.1 367.9 L505.6 367.9 L509.1 367.9 L512.6 367.9 L516.1 367.9 L519.6 367.9 L523.1 367.9 L526.6 367.9 L530.1 367.9 L533.6 367.9 L537.1 367.9 L540.6 367.9 L544.1 367.9 L547.6 367.9 L551.1 367.9 L554.6 367.9 L558.1 367.9 L561.5 367.9 L565.0 367.9 L568.5 367.9 L572.0 367.9 L575.5 368.0 L579.0 368.0 L582.5 368.0 L586.0 368.0 L589.5 368.0 L593.0 368.0 L596.5 368.0 L600.0 368.0" fill="none" stroke="#1d2b44" stroke-width="2"/>
<line x1="40" y1="368" x2="600" y2="368" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5"><line x1="40.0" y1="368" x2="40.0" y2="374"/><line x1="110.0" y1="368" x2="110.0" y2="374"/><line x1="180.0" y1="368" x2="180.0" y2="374"/><line x1="250.0" y1="368" x2="250.0" y2="374"/><line x1="320.0" y1="368" x2="320.0" y2="374"/><line x1="390.0" y1="368" x2="390.0" y2="374"/><line x1="460.0" y1="368" x2="460.0" y2="374"/><line x1="530.0" y1="368" x2="530.0" y2="374"/><line x1="600.0" y1="368" x2="600.0" y2="374"/></g>
<g font-size="13" fill="#1d2b44" text-anchor="middle"><text x="40.0" y="389">0</text><text x="110.0" y="389">2</text><text x="180.0" y="389">4</text><text x="250.0" y="389">6</text><text x="320.0" y="389">8</text><text x="390.0" y="389">10</text><text x="460.0" y="389">12</text><text x="530.0" y="389">14</text><text x="600.0" y="389">16</text></g>
<line x1="181.2" y1="278" x2="181.2" y2="368" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 3"/>
<text x="181.2" y="272" text-anchor="middle" font-size="12" fill="#1d2b44">χ² = 4.03</text>
<text x="221.2" y="328" text-anchor="start" font-size="12" fill="#1d2b44">p-value = 0.1331 (right tail)</text>
<text x="320" y="408" text-anchor="middle" font-size="13" fill="#1d2b44">χ² value</text>
</svg>
<figcaption>Figure 1. When H₀ is true, the χ² statistic follows a chi-square distribution with (r − 1)(c − 1) degrees of freedom. The p-value is always the hatched area to the right of the observed χ², because only large values of χ² count as evidence against H₀. Each curve is scaled to fit its panel; the area under each whole curve is 1.</figcaption>
</figure>

## Interpreting the p-value

An interpretation of the p-value must include the condition "assuming H₀ is true", written in context. A good template:

> Assuming [H₀ in context], there is a [p-value] probability of getting a χ² statistic of [observed value] or larger by chance in random sampling (or random assignment).

The p-value is **not** the probability that H₀ is true, and it is not the probability that the result "happened by chance".

## Decision and conclusion

The formal decision compares the p-value with the significance level α, which you set before looking at the data:

- **p-value ≤ α:** reject H₀. There is convincing statistical evidence for Hₐ.
- **p-value > α:** fail to reject H₀. There is not convincing statistical evidence for Hₐ.

Write the conclusion in context, in terms of **Hₐ**, with non-definitive language ("there is convincing evidence that…", never "this proves…"). Name the **population(s)**:

| Test | Conclusion when you reject H₀ |
|---|---|
| Homogeneity | There is convincing statistical evidence that the distribution of [variable] differs across [the populations or treatments]. |
| Independence | There is convincing statistical evidence of an association between [variable 1] and [variable 2] in [the population]. |

When you fail to reject, put "not" in front of "convincing". Then use the result to **answer the investigative question** the study started with.

## Worked example 1: a test for homogeneity that rejects H₀

**Context (fictional).** The transport department of the city of Corrandale wants to know: *Do commuters in the city's three districts differ in how they travel to work?* It takes independent random samples of commuters from each district: 120 from North, 150 from Central and 130 from Southbank. Each district has more than 20,000 commuters. Each person gives their main way of travelling to work.

| Observed | Bus | Bicycle | Car | Total |
|---|---|---|---|---|
| North | 54 | 30 | 36 | 120 |
| Central | 62 | 28 | 60 | 150 |
| Southbank | 44 | 22 | 64 | 130 |
| Total | 160 | 80 | 160 | 400 |

Use α = 0.05.

**1. Hypotheses.**

- H₀: there is no difference in the distribution of main travel mode for commuters in North, Central and Southbank.
- Hₐ: there is a difference in the distribution of main travel mode for commuters in North, Central and Southbank.
- α = 0.05

**2. Method and conditions.** Chi-square test for homogeneity (three populations, one categorical variable).

- Randomization: independent random samples from the three districts.
- 10% condition: the largest sample is 150, and every district has more than 10 × 150 = 1,500 commuters.
- Expected counts: see the table below. The smallest is 24, so every expected count is greater than 5.

**3. Calculations.** Expected counts, using (row total × column total) ÷ 400:

| Expected | Bus | Bicycle | Car | Total |
|---|---|---|---|---|
| North | 120 × 160 ÷ 400 = 48 | 120 × 80 ÷ 400 = 24 | 48 | 120 |
| Central | 60 | 30 | 60 | 150 |
| Southbank | 52 | 26 | 52 | 130 |
| Total | 160 | 80 | 160 | 400 |

Check: each row and column of expected counts adds to the observed total.

Components, (O − E)² ÷ E:

| Component | Bus | Bicycle | Car |
|---|---|---|---|
| North | (54 − 48)² ÷ 48 = 0.7500 | (30 − 24)² ÷ 24 = 1.5000 | (36 − 48)² ÷ 48 = 3.0000 |
| Central | (62 − 60)² ÷ 60 = 0.0667 | (28 − 30)² ÷ 30 = 0.1333 | (60 − 60)² ÷ 60 = 0 |
| Southbank | (44 − 52)² ÷ 52 = 1.2308 | (22 − 26)² ÷ 26 = 0.6154 | (64 − 52)² ÷ 52 = 2.7692 |

- χ² = 0.7500 + 1.5000 + 3.0000 + 0.0667 + 0.1333 + 0 + 1.2308 + 0.6154 + 2.7692 ≈ **10.07**
- df = (3 − 1)(3 − 1) = **4**
- p-value = P(χ² ≥ 10.07) with df = 4 ≈ **0.0393** (technology). A table gives 0.025 < p-value < 0.05.

**4. Conclusion.** Because the p-value of 0.0393 is less than α = 0.05, we reject H₀. There is convincing statistical evidence that the distribution of main travel mode differs for commuters in North, Central and Southbank.

**Interpretation of the p-value.** Assuming the distribution of main travel mode is the same for commuters in all three districts, there is about a 0.0393 probability of getting a χ² statistic of 10.07 or larger by chance in random sampling.

**Answer to the investigative question.** Yes: the samples give convincing evidence that commuters in the three districts differ in how they travel to work.

**Check.** The decision depends on α. At α = 0.01 the same p-value (0.0393 > 0.01) would lead you to fail to reject H₀. This is why α must be chosen before you see the data.

**Going further (background, beyond the required content).** To see *where* the difference is, look at the largest components. The two biggest are North–Car (3.00: 36 observed, 48 expected) and Southbank–Car (2.77: 64 observed, 52 expected). In the samples, 30% of North commuters drove, compared with about 49% in Southbank. This describes the samples; it is not a second test.

## Worked example 2: a test for independence that fails to reject H₀

**Context (fictional).** Ashby Lane Library has about 9,000 members. The librarian asks: *Among the library's members, is age group associated with whether they prefer print books or e-books?* She selects a random sample of 240 members and records both variables for each.

| Observed | Print | E-book | Total |
|---|---|---|---|
| Under 30 | 50 | 34 | 84 |
| 30 to 59 | 56 | 40 | 96 |
| 60 and over | 44 | 16 | 60 |
| Total | 150 | 90 | 240 |

Use α = 0.05.

**1. Hypotheses.**

- H₀: there is no association between age group and preferred format among Ashby Lane Library members.
- Hₐ: there is an association between age group and preferred format among Ashby Lane Library members.
- α = 0.05

**2. Method and conditions.** Chi-square test for independence (one population, two categorical variables).

- Randomization: one random sample of members, classified by two variables.
- 10% condition: 240 is less than 10% of about 9,000 members (900).
- Expected counts: all are greater than 5 (the smallest is 22.5).

**3. Calculations.**

| Expected | Print | E-book |
|---|---|---|
| Under 30 | 84 × 150 ÷ 240 = 52.5 | 84 × 90 ÷ 240 = 31.5 |
| 30 to 59 | 60 | 36 |
| 60 and over | 37.5 | 22.5 |

Components: 0.1190, 0.1984 (under 30); 0.2667, 0.4444 (30 to 59); 1.1267, 1.8778 (60 and over).

- χ² ≈ **4.03**
- df = (3 − 1)(2 − 1) = **2**
- p-value = P(χ² ≥ 4.03) with df = 2 ≈ **0.1331** (technology). A table gives 0.10 < p-value < 0.15.

**4. Conclusion.** Because the p-value of 0.1331 is greater than α = 0.05, we fail to reject H₀. There is not convincing statistical evidence of an association between age group and preferred format among Ashby Lane Library members.

**Interpretation of the p-value.** Assuming there is no association between age group and preferred format among the library's members, there is about a 0.1331 probability of getting a χ² statistic of 4.03 or larger by chance in random sampling.

**Answer to the investigative question.** The sample does not give convincing evidence that preferred format is associated with age group. In the sample, 73.3% of members aged 60 and over preferred print, compared with 59.5% and 58.3% in the other groups. But a difference this size happens fairly often (about 13% of the time) in random samples of 240 members even when there is no association.

**Check.** Failing to reject H₀ does **not** show that the variables are independent. A larger sample with the same percentages would give a larger χ² (see Practice Question 7).

## Common misconceptions

- **Using percentages or proportions in the χ² formula.** χ² uses **counts**. If you are given percentages, convert them to counts first.
- **Rounding expected counts to whole numbers.** Expected counts are averages; keep their decimals.
- **Including the totals as cells.** Sum the components over the category cells only. The "Total" row and column are not cells of the table.
- **df = rows × columns, or df = (number of cells) − 1.** The degrees of freedom are (r − 1)(c − 1). A 4 × 3 table has df = 6, not 12 or 11.
- **Using the left tail or doubling the p-value.** The p-value for a chi-square test is always the area to the right of the observed χ².
- **Checking "observed counts greater than 5".** The condition is about **expected** counts. An observed count of 3 is fine if its expected count is greater than 5.
- **"The p-value is the probability that the variables are independent."** It is the probability of a χ² at least this large, *assuming* H₀ is true.
- **"We accept H₀, so the variables are independent."** A large p-value is a lack of evidence, not proof of independence or of identical distributions.
- **Mixing up the wording.** A homogeneity conclusion talks about the distribution of one variable across several populations; an independence conclusion talks about an association between two variables in one population.

## Where this leads

This completes Unit 3. The same four-part structure (hypotheses, method and conditions, calculations, conclusion) returns in Unit 4, where the data are quantitative and the parameter is a mean. Start with [Topic 4.1, Sampling Distributions for Sample Means](/advanced-course-resources/statistics/4-1-sampling-distributions-sample-means-study-guide/). To review the hypotheses and conditions for this test, go back to [Topic 3.14](/advanced-course-resources/statistics/3-14-setting-up-chi-square-test-study-guide/). Try the [practice questions](/advanced-course-resources/statistics/3-15-carrying-out-chi-square-test-practice/) now, then use the [revision notes](/advanced-course-resources/statistics/3-15-carrying-out-chi-square-test-revision-notes/) and the [checklist](/advanced-course-resources/statistics/3-15-carrying-out-chi-square-test-checklist/) to consolidate.
