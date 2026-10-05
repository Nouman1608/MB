---
resourceId: "mb-ap-stats-4.5-study-guide"
title: "Carrying Out a Test for a Population Mean or Population Mean Difference: Study Guide (Statistics 4.5)"
description: "Learn to calculate the t test statistic and p-value for a mean or a matched-pairs mean difference, interpret the p-value, compare it with α and write a conclusion in context."
course: "statistics"
unit: 4
topics: ["4.5"]
resourceType: "study-guide"
prerequisites:
  - "Setting up a one-sample t-test: parameter, hypotheses and conditions (Topic 4.4)"
  - "t-distributions and degrees of freedom (Topic 4.2)"
  - "The meaning of a p-value and the decision rule from tests for proportions (Topics 3.6 and 3.7)"
prerequisiteResources: ["mb-ap-stats-4.4-study-guide"]
learningObjectives:
  - "Calculate the t test statistic for a population mean or a population mean difference and state its degrees of freedom"
  - "Find the p-value from the correct t-distribution with technology, or bound it with a t-table, for a one-sided or two-sided alternative"
  - "Interpret a p-value in context, stating that it is calculated by assuming the null hypothesis is true"
  - "Make a formal decision by comparing the p-value with the significance level α"
  - "Write a non-definitive conclusion about the parameter and the population, in terms of the alternative hypothesis, and use it to answer the investigative question"
skills: ["3", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "graphing"
calculatorNote: "Use the one-sample t-test function (often called T-Test) or a t cdf with df = n − 1. Show the formula with your numbers as well. Round t to 2 decimal places and p-values to 4 decimal places."
related: ["mb-ap-stats-4.5-revision-notes", "mb-ap-stats-4.5-practice", "mb-ap-stats-4.5-checklist"]
next: "mb-ap-stats-4.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Test statistic: t = (x̄ − μ₀) / (s / √n), with df = n − 1. For matched pairs, use x̄d, sd and the number of pairs, with μ₀ = 0."
  - "If H₀ is true and the conditions are met, t follows a t-distribution with n − 1 degrees of freedom. Find the p-value from it with technology or a t-table."
  - "The p-value is the area in the direction of Hₐ: left tail for <, right tail for >, both tails for ≠."
  - "Interpret the p-value as a probability calculated by assuming the true mean equals μ₀."
  - "If p-value ≤ α, reject H₀; if p-value > α, fail to reject H₀. Conclude about the parameter and the population, in terms of Hₐ, without claiming proof."
faqs:
  - question: "Why do I use a t-distribution and not the standard normal curve?"
    answer: "The standard error uses the sample standard deviation s, which changes from sample to sample. That extra variability makes extreme test statistics more likely than the normal curve suggests. The t-distribution with n − 1 degrees of freedom has heavier tails to allow for it."
  - question: "My t-table has no row for my degrees of freedom. What do I do?"
    answer: "Use the nearest row with fewer degrees of freedom. That gives slightly larger critical values, so your bounds on the p-value are conservative. Technology gives the exact p-value for any df."
  - question: "Is the test for a mean difference a different test?"
    answer: "No. Once you have one difference per pair, the differences are a single sample. You run a one-sample t-test on them, usually with μ₀ = 0."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## From set-up to decision

In Topic 4.4 you set up a test for a population mean: you defined the parameter, wrote the hypotheses and checked the conditions. This topic finishes the job. You calculate a test statistic, find a p-value, make a decision and write a conclusion.

A complete significance test has four parts. Use them, in this order, in every written answer:

1. **Hypotheses.** Define μ (or μd) in context. State H₀ and Hₐ, and the significance level α.
2. **Method and conditions.** Name the procedure: a **one-sample t-test for a population mean** or a **one-sample t-test for a population mean difference**. Check the randomization, 10% and sample data conditions.
3. **Calculations.** Find x̄ and s (or x̄d and sd), the test statistic t, the degrees of freedom and the p-value.
4. **Conclusion.** Compare the p-value with α, state the decision and say what it means in context.

The ideas are the same as the test for a proportion in Topic 3.7. Only the test statistic and the reference distribution change.

## The test statistic

The test statistic measures how far the sample mean is from the null value, in standard-error units:

**t = (x̄ − μ₀) / (s / √n)**

- x̄ is the sample mean and s is the sample standard deviation.
- μ₀ is the value of μ stated in H₀.
- n is the sample size.
- s / √n is the **standard error** of x̄: an estimate of how much x̄ typically varies from sample to sample.

The sign tells you the direction. A negative t means x̄ is below μ₀; a positive t means x̄ is above μ₀.

**Degrees of freedom.** If H₀ is true and the conditions are met, t follows a **t-distribution with df = n − 1**. This is the **null distribution** of the test statistic.

**Matched pairs.** The formula is the same, applied to the differences. Use x̄d (the mean of the differences), sd (their standard deviation) and n = the number of pairs. The null value is usually 0, so t = (x̄d − 0) / (sd / √n), with df = n − 1.

**Why not z?** In a z-test the standard error would use the population standard deviation σ, which you do not know. Replacing σ with s adds extra variability, because s changes from sample to sample. The t-distributions have heavier tails than the standard normal curve to allow for this. As n grows, s becomes a steadier estimate and the t-distribution gets closer to the standard normal.

## Finding the p-value

The p-value is the probability, assuming H₀ is true, of getting a test statistic at least as extreme as the one you observed, in the direction of Hₐ. Use the t-distribution with df = n − 1:

| Alternative | p-value | Area under the t-curve |
|---|---|---|
| Hₐ: μ > μ₀ | P(T ≥ t) | right tail beyond t |
| Hₐ: μ < μ₀ | P(T ≤ t) | left tail beyond t |
| Hₐ: μ ≠ μ₀ | 2 × P(T ≥ \|t\|) | both tails beyond ±\|t\| |

The same table works for μd, with 0 in place of μ₀.

**With technology.** The one-sample t-test function takes μ₀, the data (or x̄, s and n) and the direction of Hₐ. It returns t, df and the p-value. A t cdf command with df = n − 1 also gives tail areas. Write the formula with your numbers substituted, because "calculator gives 0.0103" alone does not show your method.

**With a t-table.** A t-table lists critical values for a few tail areas, so it usually gives a **range** for the p-value, not an exact value. Find the row for your df, then find the two table values on either side of |t|. If your df is not in the table, use the next smaller df. Worked example 3 shows how.

## Interpreting the p-value

A good interpretation of a p-value has three parts:

1. **The assumption:** "Assuming the true mean [variable] of [population] is μ₀…"
2. **The probability:** "…there is a [p-value] probability of getting…"
3. **The result, in the direction of Hₐ:** "…a sample mean of [x̄] or less (or greater, or as far from μ₀ in either direction) in a random sample of n [individuals]."

The p-value is **not** the probability that H₀ is true. It is calculated by assuming H₀ is true. A small p-value says the data would be unusual in a world where μ = μ₀.

## Decision and conclusion

The **significance level** α is chosen before you look at the data. If none is given, use 0.05 and say so.

- **p-value ≤ α:** reject H₀. There is convincing statistical evidence for Hₐ.
- **p-value > α:** fail to reject H₀. There is not convincing statistical evidence for Hₐ.

A full conclusion has three parts:

1. **Linkage:** compare the p-value with α, using both numbers.
2. **Decision:** reject or fail to reject H₀.
3. **Context in terms of Hₐ:** "There is (not) convincing statistical evidence that the true mean [variable] of [population] is [less than / greater than / different from] μ₀."

Use non-definitive language. A test never **proves** Hₐ, and failing to reject never shows that H₀ is true. Refer to the **parameter** (the true or population mean), not to x̄, which you already know. Then use the result to **answer the investigative question** that started the study: the test is the statistical reasoning behind your answer.

<figure>
<svg viewBox="0 0 640 460" role="img" aria-labelledby="t45-title t45-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="t45-title">t-distributions showing the p-values for Worked examples 1 and 2</title>
<desc id="t45-desc">Two bell-shaped t-distribution curves centred at 0, each over an axis marked from minus 4 to 4. Top panel, Worked example 1, alternative mu less than 8, t-distribution with 35 degrees of freedom: a vertical line at t equals minus 2.43, and the small area to its left is hatched; the note below reads p-value equals 0.0103. Bottom panel, Worked example 2, alternative mu d not equal to 0, t-distribution with 9 degrees of freedom: vertical lines at t equals minus 1.26 and plus 1.26, and the areas beyond each line are hatched; the note below reads p-value equals 0.1192 plus 0.1192 equals 0.2384.</desc>
<defs><pattern id="hatch45" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="#d9dee8"/><line x1="0" y1="0" x2="0" y2="6" stroke="#1d2b44" stroke-width="1.5"/></pattern></defs>
<rect x="0" y="0" width="640" height="460" fill="#ffffff"/>
<text x="320" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#1d2b44">Worked example 1: Hₐ: μ &lt; 8, t-distribution with df = 35</text>
<path d="M60.0 170 L60.0 169.9 L63.2 169.8 L66.5 169.8 L69.8 169.8 L73.0 169.8 L76.2 169.7 L79.5 169.7 L82.8 169.6 L86.0 169.6 L89.2 169.5 L92.5 169.5 L95.8 169.4 L99.0 169.3 L102.2 169.2 L105.5 169.1 L108.8 169.0 L112.0 168.8 L115.2 168.7 L118.5 168.5 L121.8 168.3 L125.0 168.1 L128.2 167.8 L131.5 167.5 L134.8 167.2 L138.0 166.9 L141.2 166.5 L144.5 166.1 L147.8 165.6 L151.0 165.1 L154.2 164.5 L157.5 163.8 L160.8 163.1 L162.3 162.7 L162.3 170 Z" fill="url(#hatch45)" stroke="#1d2b44" stroke-width="1"/>
<path d="M60.0 169.9 L66.5 169.8 L73.0 169.8 L79.5 169.7 L86.0 169.6 L92.5 169.5 L99.0 169.3 L105.5 169.1 L112.0 168.8 L118.5 168.5 L125.0 168.1 L131.5 167.5 L138.0 166.9 L144.5 166.1 L151.0 165.1 L157.5 163.8 L164.0 162.3 L170.5 160.6 L177.0 158.5 L183.5 156.0 L190.0 153.1 L196.5 149.7 L203.0 145.9 L209.5 141.5 L216.0 136.7 L222.5 131.3 L229.0 125.4 L235.5 119.1 L242.0 112.5 L248.5 105.5 L255.0 98.4 L261.5 91.3 L268.0 84.2 L274.5 77.5 L281.0 71.2 L287.5 65.5 L294.0 60.5 L300.5 56.5 L307.0 53.6 L313.5 51.8 L320.0 51.2 L326.5 51.8 L333.0 53.6 L339.5 56.5 L346.0 60.5 L352.5 65.5 L359.0 71.2 L365.5 77.5 L372.0 84.2 L378.5 91.3 L385.0 98.4 L391.5 105.5 L398.0 112.5 L404.5 119.1 L411.0 125.4 L417.5 131.3 L424.0 136.7 L430.5 141.5 L437.0 145.9 L443.5 149.7 L450.0 153.1 L456.5 156.0 L463.0 158.5 L469.5 160.6 L476.0 162.3 L482.5 163.8 L489.0 165.1 L495.5 166.1 L502.0 166.9 L508.5 167.5 L515.0 168.1 L521.5 168.5 L528.0 168.8 L534.5 169.1 L541.0 169.3 L547.5 169.5 L554.0 169.6 L560.5 169.7 L567.0 169.8 L573.5 169.8 L580.0 169.9" fill="none" stroke="#1d2b44" stroke-width="2"/>
<line x1="40" y1="170" x2="600" y2="170" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5"><line x1="60" y1="170" x2="60" y2="177"/><line x1="125" y1="170" x2="125" y2="177"/><line x1="190" y1="170" x2="190" y2="177"/><line x1="255" y1="170" x2="255" y2="177"/><line x1="320" y1="170" x2="320" y2="177"/><line x1="385" y1="170" x2="385" y2="177"/><line x1="450" y1="170" x2="450" y2="177"/><line x1="515" y1="170" x2="515" y2="177"/><line x1="580" y1="170" x2="580" y2="177"/></g>
<g font-size="13" fill="#1d2b44" text-anchor="middle"><text x="60" y="192">−4</text><text x="125" y="192">−3</text><text x="190" y="192">−2</text><text x="255" y="192">−1</text><text x="320" y="192">0</text><text x="385" y="192">1</text><text x="450" y="192">2</text><text x="515" y="192">3</text><text x="580" y="192">4</text></g>
<line x1="162.3" y1="112" x2="162.3" y2="170" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<text x="162.3" y="105" text-anchor="middle" font-size="13" fill="#1d2b44">t = −2.43</text>
<text x="320" y="214" text-anchor="middle" font-size="13" fill="#1d2b44">Hatched left tail beyond t = −2.43: p-value = 0.0103</text>
<text x="320" y="254" text-anchor="middle" font-size="14" font-weight="bold" fill="#1d2b44">Worked example 2: Hₐ: μd ≠ 0, t-distribution with df = 9</text>
<path d="M60.0 390 L60.0 389.3 L63.2 389.2 L66.5 389.2 L69.8 389.1 L73.0 389.0 L76.2 388.9 L79.5 388.9 L82.8 388.8 L86.0 388.7 L89.2 388.5 L92.5 388.4 L95.8 388.3 L99.0 388.1 L102.2 388.0 L105.5 387.8 L108.8 387.6 L112.0 387.4 L115.2 387.2 L118.5 386.9 L121.8 386.7 L125.0 386.4 L128.2 386.0 L131.5 385.7 L134.8 385.3 L138.0 384.9 L141.2 384.5 L144.5 384.0 L147.8 383.5 L151.0 382.9 L154.2 382.3 L157.5 381.7 L160.8 381.0 L164.0 380.2 L167.2 379.4 L170.5 378.5 L173.8 377.5 L177.0 376.5 L180.2 375.3 L183.5 374.1 L186.8 372.9 L190.0 371.5 L193.2 370.0 L196.5 368.4 L199.8 366.8 L203.0 365.0 L206.2 363.1 L209.5 361.1 L212.8 358.9 L216.0 356.7 L219.2 354.3 L222.5 351.9 L225.8 349.3 L229.0 346.5 L232.2 343.7 L235.5 340.8 L237.9 338.5 L237.9 390 Z" fill="url(#hatch45)" stroke="#1d2b44" stroke-width="1"/>
<path d="M402.1 390 L402.1 338.5 L405.3 341.5 L408.6 344.4 L411.8 347.3 L415.1 349.9 L418.3 352.5 L421.6 355.0 L424.8 357.3 L428.1 359.5 L431.3 361.6 L434.6 363.6 L437.8 365.5 L441.1 367.2 L444.3 368.9 L447.6 370.4 L450.8 371.9 L454.1 373.2 L457.3 374.5 L460.6 375.6 L463.8 376.7 L467.1 377.8 L470.3 378.7 L473.6 379.6 L476.8 380.4 L480.1 381.1 L483.3 381.8 L486.6 382.5 L489.8 383.1 L493.1 383.6 L496.3 384.1 L499.6 384.6 L502.8 385.0 L506.1 385.4 L509.3 385.8 L512.6 386.1 L515.8 386.4 L519.1 386.7 L522.3 387.0 L525.6 387.2 L528.8 387.4 L532.1 387.7 L535.3 387.8 L538.6 388.0 L541.8 388.2 L545.1 388.3 L548.3 388.4 L551.6 388.6 L554.8 388.7 L558.1 388.8 L561.3 388.9 L564.6 389.0 L567.8 389.0 L571.1 389.1 L574.3 389.2 L577.6 389.3 L580.0 389.3 L580.0 390 Z" fill="url(#hatch45)" stroke="#1d2b44" stroke-width="1"/>
<path d="M60.0 389.3 L66.5 389.2 L73.0 389.0 L79.5 388.9 L86.0 388.7 L92.5 388.4 L99.0 388.1 L105.5 387.8 L112.0 387.4 L118.5 386.9 L125.0 386.4 L131.5 385.7 L138.0 384.9 L144.5 384.0 L151.0 382.9 L157.5 381.7 L164.0 380.2 L170.5 378.5 L177.0 376.5 L183.5 374.1 L190.0 371.5 L196.5 368.4 L203.0 365.0 L209.5 361.1 L216.0 356.7 L222.5 351.9 L229.0 346.5 L235.5 340.8 L242.0 334.6 L248.5 328.0 L255.0 321.3 L261.5 314.3 L268.0 307.4 L274.5 300.7 L281.0 294.3 L287.5 288.5 L294.0 283.4 L300.5 279.2 L307.0 276.1 L313.5 274.2 L320.0 273.6 L326.5 274.2 L333.0 276.1 L339.5 279.2 L346.0 283.4 L352.5 288.5 L359.0 294.3 L365.5 300.7 L372.0 307.4 L378.5 314.3 L385.0 321.3 L391.5 328.0 L398.0 334.6 L404.5 340.8 L411.0 346.5 L417.5 351.9 L424.0 356.7 L430.5 361.1 L437.0 365.0 L443.5 368.4 L450.0 371.5 L456.5 374.1 L463.0 376.5 L469.5 378.5 L476.0 380.2 L482.5 381.7 L489.0 382.9 L495.5 384.0 L502.0 384.9 L508.5 385.7 L515.0 386.4 L521.5 386.9 L528.0 387.4 L534.5 387.8 L541.0 388.1 L547.5 388.4 L554.0 388.7 L560.5 388.9 L567.0 389.0 L573.5 389.2 L580.0 389.3" fill="none" stroke="#1d2b44" stroke-width="2"/>
<line x1="40" y1="390" x2="600" y2="390" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5"><line x1="60" y1="390" x2="60" y2="397"/><line x1="125" y1="390" x2="125" y2="397"/><line x1="190" y1="390" x2="190" y2="397"/><line x1="255" y1="390" x2="255" y2="397"/><line x1="320" y1="390" x2="320" y2="397"/><line x1="385" y1="390" x2="385" y2="397"/><line x1="450" y1="390" x2="450" y2="397"/><line x1="515" y1="390" x2="515" y2="397"/><line x1="580" y1="390" x2="580" y2="397"/></g>
<g font-size="13" fill="#1d2b44" text-anchor="middle"><text x="60" y="412">−4</text><text x="125" y="412">−3</text><text x="190" y="412">−2</text><text x="255" y="412">−1</text><text x="320" y="412">0</text><text x="385" y="412">1</text><text x="450" y="412">2</text><text x="515" y="412">3</text><text x="580" y="412">4</text></g>
<line x1="237.9" y1="300" x2="237.9" y2="390" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<line x1="402.1" y1="300" x2="402.1" y2="390" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<text x="231.9" y="304" text-anchor="end" font-size="13" fill="#1d2b44">t = −1.26</text>
<text x="408.1" y="304" text-anchor="start" font-size="13" fill="#1d2b44">t = 1.26</text>
<text x="150" y="362" text-anchor="middle" font-size="12" fill="#1d2b44">0.1192</text>
<text x="490" y="362" text-anchor="middle" font-size="12" fill="#1d2b44">0.1192</text>
<text x="320" y="436" text-anchor="middle" font-size="13" fill="#1d2b44">Hatched tails beyond ±1.26: p-value = 0.1192 + 0.1192 = 0.2384</text>
</svg>
<figcaption>Figure 1. If H₀ is true and the conditions are met, the test statistic follows a t-distribution with n − 1 degrees of freedom. The p-value is the hatched area in the direction of Hₐ. Top: a left-tailed test, so only the left tail counts. Bottom: a two-sided test, so both tails count.</figcaption>
</figure>

## Worked example 1: a one-sided test that rejects H₀

**Context (fictional).** Ashgrove School wants its students to sleep 8 hours a night on school nights, on average. The wellbeing officer suspects they sleep less. The investigative question is: *Do Ashgrove students sleep less than 8 hours a night on school nights, on average?* She selects a random sample of 36 of the school's 1,150 students. Each student records their mean nightly sleep over one school week. The sample gives x̄ = 7.62 hours and s = 0.94 hours. Use α = 0.05.

**1. Hypotheses.** Let μ = the true mean nightly sleep on school nights (hours) of all Ashgrove students.

- H₀: μ = 8
- Hₐ: μ < 8
- α = 0.05

**2. Method and conditions.** One-sample t-test for a population mean.

- Randomization: a random sample of students. ✓
- 10%: 36 ≤ 10% of 1,150 = 115. ✓
- Sample data: n = 36 ≥ 30. ✓

**3. Calculations.**

- Standard error: s / √n = 0.94 / √36 = 0.94 / 6 ≈ 0.15667 hours
- t = (7.62 − 8) / 0.15667 ≈ **−2.43**, with df = 36 − 1 = 35
- p-value = P(T ≤ −2.43) ≈ **0.0103** (left tail, because Hₐ uses <; see Figure 1, top)

**Interpreting the p-value.** Assuming the true mean nightly sleep of all Ashgrove students is 8 hours, there is about a 0.0103 probability of getting a sample mean of 7.62 hours or less in a random sample of 36 students.

**4. Conclusion.** Because the p-value of 0.0103 is less than α = 0.05, we reject H₀. There is convincing statistical evidence that the true mean nightly sleep on school nights of all Ashgrove students is less than 8 hours.

**Answer to the investigative question.** Yes: the data give convincing evidence that Ashgrove students sleep less than 8 hours a night on school nights, on average.

**Check.**

- A t-table with no row for df = 35 should be read at df = 30. There, 2.43 lies between 2.147 (tail area 0.02) and 2.457 (tail area 0.01), so 0.01 < p-value < 0.02. This agrees with 0.0103.
- The standard normal curve would give P(Z ≤ −2.43) ≈ 0.0075. That is too small: it ignores the extra variability from using s.
- At α = 0.01 the decision would change: 0.0103 > 0.01, so you would fail to reject H₀. This is why α must be chosen before you see the data.

## Worked example 2: a matched-pairs test that fails to reject H₀

**Context (fictional).** The Skyline weather app forecasts each day's maximum temperature for the town of Portmere, the evening before. A user asks: *Are the app's forecasts biased, that is, too high or too low on average?* She selects a random sample of 10 of last year's 365 days and records the forecast and the actual maximum (°C). Use α = 0.05.

| Day | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Forecast | 24 | 27 | 22 | 19 | 25 | 30 | 21 | 26 | 23 | 28 |
| Actual | 23.4 | 26.1 | 22.5 | 17.9 | 24.6 | 30.8 | 21.3 | 24.9 | 23.5 | 27.0 |
| d = forecast − actual | 0.6 | 0.9 | −0.5 | 1.1 | 0.4 | −0.8 | −0.3 | 1.1 | −0.5 | 1.0 |

Each day gives two temperatures, so the data are paired and you analyse the differences.

**1. Hypotheses.** Let μd = the true mean difference (forecast − actual) in maximum temperature, in °C, for all of last year's days in Portmere.

- H₀: μd = 0
- Hₐ: μd ≠ 0 ("too high or too low" gives a two-sided test)
- α = 0.05

**2. Method and conditions.** One-sample t-test for a population mean difference.

- Randomization: a random sample of days. ✓
- 10%: 10 ≤ 10% of 365 = 36.5. ✓
- Sample data: only 10 differences, so check them. Ordered: −0.8, −0.5, −0.5, −0.3, 0.4, 0.6, 0.9, 1.0, 1.1, 1.1. Q1 = −0.5, Q3 = 1.0, IQR = 1.5, so the fences are −2.75 and 3.25. No outliers, and no strong skewness. ✓

**3. Calculations.**

- x̄d = 3.0 / 10 = 0.30 °C and sd ≈ 0.7513 °C
- Standard error: 0.7513 / √10 ≈ 0.2376 °C
- t = (0.30 − 0) / 0.2376 ≈ **1.26**, with df = 10 − 1 = 9
- p-value = 2 × P(T ≥ 1.26) ≈ 2 × 0.1192 = **0.2384** (both tails; see Figure 1, bottom)

**Interpreting the p-value.** Assuming the true mean difference (forecast − actual) over all of last year's days is 0 °C, there is about a 0.2384 probability of getting a sample mean difference at least 0.30 °C away from 0, in either direction, in a random sample of 10 days.

**4. Conclusion.** Because the p-value of 0.2384 is greater than α = 0.05, we fail to reject H₀. There is not convincing statistical evidence that the true mean difference (forecast − actual) in maximum temperature for last year's days in Portmere is different from 0 °C.

**Answer to the investigative question.** The sample does not give convincing evidence that the app's forecasts were biased last year. This does **not** show that they were unbiased: 10 days cannot rule out a small bias in either direction.

**Check.** A 95% t-interval for μd from the same data is (−0.24, 0.84) °C. It contains 0, which agrees with failing to reject H₀ at α = 0.05 (Topic 4.3).

## Worked example 3: bounding a p-value with a t-table

**Question.** A one-sample t-test with n = 16 and Hₐ: μ ≠ μ₀ gives t = 2.21. Use a t-table to find a range for the p-value, then state the decision at α = 0.05 and at α = 0.01.

1. df = 16 − 1 = 15.
2. In the df = 15 row, 2.21 lies between 2.131 (upper-tail area 0.025) and 2.249 (upper-tail area 0.02).
3. So the one-tail area is between 0.02 and 0.025.
4. The test is two-sided, so double: **0.04 < p-value < 0.05**. Technology gives 0.0431.
5. At α = 0.05: the p-value is less than 0.05, so reject H₀. At α = 0.01: the p-value is greater than 0.01, so fail to reject H₀.

**Check.** The table range was enough to decide at both levels. If |t| had fallen between two values that straddle α, you would need technology.

## Common misconceptions

- **Using the standard normal curve.** For a mean with σ unknown, the p-value comes from a t-distribution. The normal curve gives p-values that are too small.
- **df = n.** The degrees of freedom are n − 1. For matched pairs, n is the number of pairs, not the number of measurements.
- **Dividing by n or by s alone.** The standard error is s / √n.
- **Wrong tail.** The tail comes from Hₐ, not from the sign of t. If Hₐ is μ > μ₀ and t is negative, the p-value is more than 0.5.
- **Forgetting to double** for a two-sided test.
- **Analysing paired data as two separate samples.** Take the differences first.
- **"The p-value is the probability that H₀ is true."** It is a probability about the data, calculated by assuming H₀ is true.
- **"We accept H₀" or "this proves μ = μ₀".** Failing to reject means the evidence is not convincing, nothing more.
- **Concluding about x̄.** "The sample mean is less than 8" is not a conclusion. Conclude about μ, the population mean.
- **A decision with no linkage.** Compare the p-value with α, using both numbers, before you state the decision.

## Where this leads

Next you compare **two** separate groups. [Topic 4.6, Sampling Distributions for the Difference Between Two Sample Means](/advanced-course-resources/statistics/4-6-sampling-distributions-difference-between-two-study-guide/), describes how x̄₁ − x̄₂ varies, which leads to intervals and tests for μ₁ − μ₂ later in Unit 4. Try the [practice questions](/advanced-course-resources/statistics/4-5-carrying-out-test-population-mean-practice/) now, then use the [revision notes](/advanced-course-resources/statistics/4-5-carrying-out-test-population-mean-revision-notes/) and the [checklist](/advanced-course-resources/statistics/4-5-carrying-out-test-population-mean-checklist/) to consolidate. To review the set-up step, go back to the [Topic 4.4 study guide](/advanced-course-resources/statistics/4-4-setting-up-test-population-mean-study-guide/).
