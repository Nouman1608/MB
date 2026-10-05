---
resourceId: "mb-ap-stats-3.13-study-guide"
title: "Carrying Out a Test for the Difference Between Two Proportions: Study Guide (Statistics 3.13)"
description: "Learn to calculate the pooled proportion, the two-sample z statistic and its p-value, interpret the p-value, and write a conclusion in context about two populations."
course: "statistics"
unit: 3
topics: ["3.13"]
resourceType: "study-guide"
prerequisites:
  - "Writing hypotheses and checking conditions for a two-sample z-test for proportions (Topic 3.12)"
  - "Carrying out a one-sample z-test for a proportion (Topic 3.7)"
  - "Finding areas under the standard normal curve with a table or technology"
prerequisiteResources: ["mb-ap-stats-3.12-study-guide"]
learningObjectives:
  - "Calculate the combined (pooled) sample proportion and explain why the test uses it"
  - "Calculate the two-sample z test statistic for a difference in proportions"
  - "Find the p-value from the standard normal distribution for a one-sided or two-sided alternative"
  - "Interpret the p-value in context, stating that it assumes the two population proportions are equal"
  - "Make a formal decision by comparing the p-value with α, and write a non-definitive conclusion about the populations or treatments that answers the investigative question"
skills: ["3", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "graphing"
calculatorNote: "Use the two-proportion z-test function (often called 2-PropZTest) or a normal cdf for p-values. Keep at least 4 decimal places in working; round z to 2 decimal places and p-values to 4."
related: ["mb-ap-stats-3.13-revision-notes", "mb-ap-stats-3.13-practice", "mb-ap-stats-3.13-checklist"]
next: "mb-ap-stats-3.13-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Pooled proportion: p̂c = (x₁ + x₂) / (n₁ + n₂), the success proportion of both groups combined."
  - "Test statistic: z = (p̂₁ − p̂₂ − 0) / √[p̂c(1 − p̂c)(1/n₁ + 1/n₂)]. If H₀ is true, z is approximately standard normal."
  - "The p-value is the area in the direction of Hₐ: right tail for >, left tail for <, both tails for ≠."
  - "Interpret the p-value by assuming the two true proportions are equal, in context."
  - "If p-value ≤ α, reject H₀; otherwise fail to reject H₀. Conclude about p₁ − p₂ in context, in terms of Hₐ, without claiming proof."
faqs:
  - question: "Why does the test pool the two samples when the confidence interval does not?"
    answer: "The test is calculated assuming H₀: p₁ = p₂ is true. If the two proportions are equal, both samples estimate the same value, so combining them gives the best estimate of it. A confidence interval makes no such assumption, so it uses p̂₁ and p̂₂ separately."
  - question: "Does it matter which group I call group 1?"
    answer: "No, as long as you are consistent. Swapping the groups changes the sign of z and flips the direction of Hₐ, but the p-value and the conclusion are the same. Define p₁ and p₂ clearly at the start."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## From set-up to decision

In Topic 3.12 you set up a test for the difference between two population proportions: you defined p₁ and p₂, wrote hypotheses and checked conditions. This topic finishes the job. You calculate the test statistic, find and interpret the p-value, make a decision and answer the investigative question.

The four parts are the same as for one proportion in Topic 3.7. Keep them in this order in every written answer:

1. **Hypotheses.** Define p₁ and p₂ in context (the proportion of *what*, in *which population or treatment group*). State H₀: p₁ = p₂ (or p₁ − p₂ = 0) and Hₐ with <, > or ≠. State α.
2. **Method and conditions.** Name the procedure: a **two-sample z-test for the difference between two population proportions**. Check randomization, the 10% condition (for samples drawn without replacement) and the normality condition using the pooled proportion.
3. **Calculations.** Find p̂₁, p̂₂, the pooled proportion p̂c, the test statistic z and the p-value.
4. **Conclusion.** Compare the p-value with α, state the decision and say what it means in context.

This guide concentrates on parts 3 and 4. The worked examples show all four parts so you can see a full answer.

## The pooled proportion

The null hypothesis says the two population proportions are equal. A test always asks: *if H₀ were true, how surprising would these data be?* So every calculation is done in a world where p₁ = p₂.

If the two proportions really are equal, both samples are estimating the same number. The best single estimate of that number uses all the data together. This is the **combined**, or **pooled**, sample proportion:

**p̂c = (x₁ + x₂) / (n₁ + n₂) = (n₁p̂₁ + n₂p̂₂) / (n₁ + n₂)**

Here x₁ and x₂ are the numbers of successes and n₁ and n₂ are the sample sizes. In words: add the successes, add the sample sizes, and divide.

Notice that p̂c is **not** the simple average of p̂₁ and p̂₂ unless n₁ = n₂. The larger sample has more weight, because it contains more individuals.

You met p̂c in Topic 3.12, where it was used to check the normality condition: n₁p̂c, n₁(1 − p̂c), n₂p̂c and n₂(1 − p̂c) must all be at least 10. Now it also appears in the test statistic.

## The test statistic

The test statistic measures how far the observed difference in sample proportions is from the difference stated in H₀ (zero), in standard-error units:

**z = (p̂₁ − p̂₂ − 0) / √[p̂c(1 − p̂c)(1/n₁ + 1/n₂)]**

- The numerator is the observed difference minus the null difference. The "− 0" is a reminder that H₀ says the difference is zero.
- The denominator is the standard deviation of the sampling distribution of p̂₁ − p̂₂ **if H₀ is true**, estimated with p̂c.
- The sign matters. A positive z means p̂₁ is above p̂₂; a negative z means p̂₁ is below p̂₂.

If H₀ is true and the conditions are met, z has approximately a **standard normal distribution**. This is the **null distribution** of the test statistic.

## Finding the p-value

The p-value is the probability, assuming H₀ is true, of a test statistic at least as extreme as the one observed, in the direction of Hₐ. Find it from the standard normal distribution with a table or technology:

| Alternative | p-value | Area under the standard normal curve |
|---|---|---|
| Hₐ: p₁ > p₂ (p₁ − p₂ > 0) | P(Z ≥ z) | right tail beyond z |
| Hₐ: p₁ < p₂ (p₁ − p₂ < 0) | P(Z ≤ z) | left tail beyond z |
| Hₐ: p₁ ≠ p₂ (p₁ − p₂ ≠ 0) | 2 × P(Z ≥ \|z\|) | both tails beyond ±\|z\| |

On a graphing calculator, the two-proportion z-test function takes x₁, n₁, x₂, n₂ and the direction of Hₐ. It returns z, the p-value, p̂₁, p̂₂ and p̂c. Still write the formula with your numbers in it, so that your method is visible.

<figure>
<svg viewBox="0 0 640 430" role="img" aria-labelledby="ztest313-title ztest313-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ztest313-title">Standard normal null distributions showing the p-values for Worked examples 1 and 2</title>
<desc id="ztest313-desc">Two bell-shaped standard normal curves centred at z equals 0, each with an axis marked from minus 3 to 3. Top panel, Worked example 1, alternative p1 greater than p2: a vertical line at z equals 2.04 and the small area to its right is hatched and labelled p-value equals 0.0209. Bottom panel, Worked example 2, alternative p1 not equal to p2: vertical lines at z equals minus 1.41 and plus 1.41; the areas to the left of minus 1.41 and to the right of plus 1.41 are both hatched, each labelled 0.0786, and together labelled p-value equals 2 times 0.07865, about 0.1573.</desc>
<defs><pattern id="hatch313" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="#d9dee8"/><line x1="0" y1="0" x2="0" y2="6" stroke="#1d2b44" stroke-width="1.5"/></pattern></defs>
<rect x="0" y="0" width="640" height="430" fill="#ffffff"/>
<text x="20" y="28" font-size="14" fill="#1d2b44" font-weight="bold">Worked example 1: Hₐ: p₁ &gt; p₂ (one-sided, right tail)</text>
<path d="M483.2 170 L483.2 156.3 L487.2 157.6 L491.3 158.9 L495.3 160.0 L499.3 161.1 L503.3 162.0 L507.4 162.9 L511.4 163.7 L515.4 164.4 L519.4 165.1 L523.5 165.7 L527.5 166.2 L531.5 166.7 L535.6 167.1 L539.6 167.5 L543.6 167.8 L547.6 168.1 L551.7 168.3 L555.7 168.6 L559.7 168.8 L563.8 168.9 L567.8 169.1 L571.8 169.2 L575.8 169.3 L579.9 169.4 L583.9 169.5 L587.9 169.6 L591.9 169.7 L596.0 169.7 L600.0 169.8 L600.0 170 Z" fill="url(#hatch313)" stroke="#1d2b44" stroke-width="1"/>
<path d="M40.0 169.8 L44.0 169.7 L48.0 169.7 L52.0 169.6 L56.0 169.5 L60.0 169.4 L64.0 169.3 L68.0 169.2 L72.0 169.1 L76.0 168.9 L80.0 168.8 L84.0 168.6 L88.0 168.4 L92.0 168.1 L96.0 167.8 L100.0 167.5 L104.0 167.1 L108.0 166.7 L112.0 166.3 L116.0 165.7 L120.0 165.2 L124.0 164.5 L128.0 163.8 L132.0 163.0 L136.0 162.2 L140.0 161.2 L144.0 160.2 L148.0 159.1 L152.0 157.9 L156.0 156.5 L160.0 155.1 L164.0 153.6 L168.0 151.9 L172.0 150.1 L176.0 148.2 L180.0 146.2 L184.0 144.1 L188.0 141.8 L192.0 139.4 L196.0 136.9 L200.0 134.3 L204.0 131.6 L208.0 128.7 L212.0 125.8 L216.0 122.7 L220.0 119.6 L224.0 116.5 L228.0 113.2 L232.0 109.9 L236.0 106.6 L240.0 103.3 L244.0 99.9 L248.0 96.6 L252.0 93.4 L256.0 90.1 L260.0 87.0 L264.0 83.9 L268.0 80.9 L272.0 78.1 L276.0 75.4 L280.0 72.9 L284.0 70.6 L288.0 68.5 L292.0 66.5 L296.0 64.8 L300.0 63.4 L304.0 62.2 L308.0 61.2 L312.0 60.5 L316.0 60.1 L320.0 60.0 L324.0 60.1 L328.0 60.5 L332.0 61.2 L336.0 62.2 L340.0 63.4 L344.0 64.8 L348.0 66.5 L352.0 68.5 L356.0 70.6 L360.0 72.9 L364.0 75.4 L368.0 78.1 L372.0 80.9 L376.0 83.9 L380.0 87.0 L384.0 90.1 L388.0 93.4 L392.0 96.6 L396.0 99.9 L400.0 103.3 L404.0 106.6 L408.0 109.9 L412.0 113.2 L416.0 116.5 L420.0 119.6 L424.0 122.7 L428.0 125.8 L432.0 128.7 L436.0 131.6 L440.0 134.3 L444.0 136.9 L448.0 139.4 L452.0 141.8 L456.0 144.1 L460.0 146.2 L464.0 148.2 L468.0 150.1 L472.0 151.9 L476.0 153.6 L480.0 155.1 L484.0 156.5 L488.0 157.9 L492.0 159.1 L496.0 160.2 L500.0 161.2 L504.0 162.2 L508.0 163.0 L512.0 163.8 L516.0 164.5 L520.0 165.2 L524.0 165.7 L528.0 166.3 L532.0 166.7 L536.0 167.1 L540.0 167.5 L544.0 167.8 L548.0 168.1 L552.0 168.4 L556.0 168.6 L560.0 168.8 L564.0 168.9 L568.0 169.1 L572.0 169.2 L576.0 169.3 L580.0 169.4 L584.0 169.5 L588.0 169.6 L592.0 169.7 L596.0 169.7 L600.0 169.8" fill="none" stroke="#1d2b44" stroke-width="2"/><line x1="40" y1="170" x2="600" y2="170" stroke="#1d2b44" stroke-width="2"/><g stroke="#1d2b44" stroke-width="1.5"><line x1="80.0" y1="170" x2="80.0" y2="176"/><line x1="160.0" y1="170" x2="160.0" y2="176"/><line x1="240.0" y1="170" x2="240.0" y2="176"/><line x1="320.0" y1="170" x2="320.0" y2="176"/><line x1="400.0" y1="170" x2="400.0" y2="176"/><line x1="480.0" y1="170" x2="480.0" y2="176"/><line x1="560.0" y1="170" x2="560.0" y2="176"/></g><g font-size="13" fill="#1d2b44" text-anchor="middle"><text x="80.0" y="191">−3</text><text x="160.0" y="191">−2</text><text x="240.0" y="191">−1</text><text x="320.0" y="191">0</text><text x="400.0" y="191">1</text><text x="480.0" y="191">2</text><text x="560.0" y="191">3</text></g>
<line x1="483.2" y1="100" x2="483.2" y2="170" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 3"/>
<text x="483.2" y="94" text-anchor="middle" font-size="12" fill="#1d2b44">z = 2.04</text>
<text x="500" y="140" text-anchor="start" font-size="12" fill="#1d2b44">p-value = 0.0209</text>
<text x="320" y="205" text-anchor="middle" font-size="13" fill="#1d2b44">z (standard normal)</text>
<text x="20" y="235" font-size="14" fill="#1d2b44" font-weight="bold">Worked example 2: Hₐ: p₁ ≠ p₂ (two-sided, both tails)</text>
<path d="M40.0 370 L40.0 369.8 L44.1 369.7 L48.2 369.7 L52.2 369.6 L56.3 369.5 L60.4 369.4 L64.5 369.3 L68.5 369.2 L72.6 369.1 L76.7 368.9 L80.8 368.7 L84.9 368.5 L88.9 368.3 L93.0 368.0 L97.1 367.7 L101.2 367.4 L105.2 367.0 L109.3 366.6 L113.4 366.1 L117.5 365.5 L121.6 364.9 L125.6 364.2 L129.7 363.5 L133.8 362.7 L137.9 361.8 L142.0 360.8 L146.0 359.7 L150.1 358.5 L154.2 357.2 L158.3 355.7 L162.3 354.2 L166.4 352.6 L170.5 350.8 L174.6 348.9 L178.7 346.9 L182.7 344.8 L186.8 342.5 L190.9 340.1 L195.0 337.6 L199.0 334.9 L203.1 332.2 L207.2 329.3 L207.2 370 Z" fill="url(#hatch313)" stroke="#1d2b44" stroke-width="1"/>
<path d="M432.8 370 L432.8 329.3 L436.9 332.2 L441.0 334.9 L445.0 337.6 L449.1 340.1 L453.2 342.5 L457.3 344.8 L461.3 346.9 L465.4 348.9 L469.5 350.8 L473.6 352.6 L477.7 354.2 L481.7 355.7 L485.8 357.2 L489.9 358.5 L494.0 359.7 L498.0 360.8 L502.1 361.8 L506.2 362.7 L510.3 363.5 L514.4 364.2 L518.4 364.9 L522.5 365.5 L526.6 366.1 L530.7 366.6 L534.8 367.0 L538.8 367.4 L542.9 367.7 L547.0 368.0 L551.1 368.3 L555.1 368.5 L559.2 368.7 L563.3 368.9 L567.4 369.1 L571.5 369.2 L575.5 369.3 L579.6 369.4 L583.7 369.5 L587.8 369.6 L591.8 369.7 L595.9 369.7 L600.0 369.8 L600.0 370 Z" fill="url(#hatch313)" stroke="#1d2b44" stroke-width="1"/>
<path d="M40.0 369.8 L44.0 369.7 L48.0 369.7 L52.0 369.6 L56.0 369.5 L60.0 369.4 L64.0 369.3 L68.0 369.2 L72.0 369.1 L76.0 368.9 L80.0 368.8 L84.0 368.6 L88.0 368.4 L92.0 368.1 L96.0 367.8 L100.0 367.5 L104.0 367.1 L108.0 366.7 L112.0 366.3 L116.0 365.7 L120.0 365.2 L124.0 364.5 L128.0 363.8 L132.0 363.0 L136.0 362.2 L140.0 361.2 L144.0 360.2 L148.0 359.1 L152.0 357.9 L156.0 356.5 L160.0 355.1 L164.0 353.6 L168.0 351.9 L172.0 350.1 L176.0 348.2 L180.0 346.2 L184.0 344.1 L188.0 341.8 L192.0 339.4 L196.0 336.9 L200.0 334.3 L204.0 331.6 L208.0 328.7 L212.0 325.8 L216.0 322.7 L220.0 319.6 L224.0 316.5 L228.0 313.2 L232.0 309.9 L236.0 306.6 L240.0 303.3 L244.0 299.9 L248.0 296.6 L252.0 293.4 L256.0 290.1 L260.0 287.0 L264.0 283.9 L268.0 280.9 L272.0 278.1 L276.0 275.4 L280.0 272.9 L284.0 270.6 L288.0 268.5 L292.0 266.5 L296.0 264.8 L300.0 263.4 L304.0 262.2 L308.0 261.2 L312.0 260.5 L316.0 260.1 L320.0 260.0 L324.0 260.1 L328.0 260.5 L332.0 261.2 L336.0 262.2 L340.0 263.4 L344.0 264.8 L348.0 266.5 L352.0 268.5 L356.0 270.6 L360.0 272.9 L364.0 275.4 L368.0 278.1 L372.0 280.9 L376.0 283.9 L380.0 287.0 L384.0 290.1 L388.0 293.4 L392.0 296.6 L396.0 299.9 L400.0 303.3 L404.0 306.6 L408.0 309.9 L412.0 313.2 L416.0 316.5 L420.0 319.6 L424.0 322.7 L428.0 325.8 L432.0 328.7 L436.0 331.6 L440.0 334.3 L444.0 336.9 L448.0 339.4 L452.0 341.8 L456.0 344.1 L460.0 346.2 L464.0 348.2 L468.0 350.1 L472.0 351.9 L476.0 353.6 L480.0 355.1 L484.0 356.5 L488.0 357.9 L492.0 359.1 L496.0 360.2 L500.0 361.2 L504.0 362.2 L508.0 363.0 L512.0 363.8 L516.0 364.5 L520.0 365.2 L524.0 365.7 L528.0 366.3 L532.0 366.7 L536.0 367.1 L540.0 367.5 L544.0 367.8 L548.0 368.1 L552.0 368.4 L556.0 368.6 L560.0 368.8 L564.0 368.9 L568.0 369.1 L572.0 369.2 L576.0 369.3 L580.0 369.4 L584.0 369.5 L588.0 369.6 L592.0 369.7 L596.0 369.7 L600.0 369.8" fill="none" stroke="#1d2b44" stroke-width="2"/><line x1="40" y1="370" x2="600" y2="370" stroke="#1d2b44" stroke-width="2"/><g stroke="#1d2b44" stroke-width="1.5"><line x1="80.0" y1="370" x2="80.0" y2="376"/><line x1="160.0" y1="370" x2="160.0" y2="376"/><line x1="240.0" y1="370" x2="240.0" y2="376"/><line x1="320.0" y1="370" x2="320.0" y2="376"/><line x1="400.0" y1="370" x2="400.0" y2="376"/><line x1="480.0" y1="370" x2="480.0" y2="376"/><line x1="560.0" y1="370" x2="560.0" y2="376"/></g><g font-size="13" fill="#1d2b44" text-anchor="middle"><text x="80.0" y="391">−3</text><text x="160.0" y="391">−2</text><text x="240.0" y="391">−1</text><text x="320.0" y="391">0</text><text x="400.0" y="391">1</text><text x="480.0" y="391">2</text><text x="560.0" y="391">3</text></g>
<line x1="207.2" y1="290" x2="207.2" y2="370" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 3"/>
<line x1="432.8" y1="290" x2="432.8" y2="370" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 3"/>
<text x="207.2" y="284" text-anchor="middle" font-size="12" fill="#1d2b44">z = −1.41</text>
<text x="432.8" y="284" text-anchor="middle" font-size="12" fill="#1d2b44">z = 1.41</text>
<text x="120" y="335" text-anchor="middle" font-size="12" fill="#1d2b44">0.0786</text>
<text x="520" y="335" text-anchor="middle" font-size="12" fill="#1d2b44">0.0786</text>
<text x="320" y="255" text-anchor="middle" font-size="12" fill="#1d2b44">p-value = 2 × 0.07865 ≈ 0.1573</text>
<text x="320" y="415" text-anchor="middle" font-size="13" fill="#1d2b44">z (standard normal)</text>
</svg>
<figcaption>Figure 1. If H₀: p₁ = p₂ is true, z follows the standard normal distribution. The p-value is the hatched area in the direction of Hₐ. Top: a right-tailed test, so only the right tail counts. Bottom: a two-sided test, so both tails beyond ±1.41 count.</figcaption>
</figure>

## Interpreting the p-value

A p-value interpretation has three ingredients:

1. **The assumption:** "Assuming the true proportions are equal…", written in context (for example, "assuming the true proportions of members who borrowed an e-book are the same in both towns").
2. **The probability:** "…there is a [p-value] probability of getting…"
3. **The event, in the direction of Hₐ:** "…a difference in sample proportions (group 1 minus group 2) of [observed difference] or more" (use "or less" for a left-tailed test, and "at least as far from 0 in either direction" for a two-sided test).

The p-value is **not** the probability that H₀ is true, and it is not the probability that the result "happened by chance" with no assumption stated. It is a probability about the **data**, calculated **assuming** H₀.

## Decision and conclusion

The formal decision compares the p-value with the significance level α, which was chosen before the data were collected:

- **p-value ≤ α:** reject H₀. There is convincing statistical evidence for Hₐ.
- **p-value > α:** fail to reject H₀. There is not convincing statistical evidence for Hₐ.

A full conclusion has three parts: the **linkage** (compare the p-value with α, using both numbers), the **decision**, and a **context sentence in terms of Hₐ**. The context sentence refers to the **parameters** (the true proportions, or their difference) and to the **populations** or treatments, and uses non-definitive language such as "there is convincing evidence that". Never write "accept H₀" or "this proves".

Then use the result to answer the **investigative question** that started the study. What you may claim depends on how the data were collected:

- **Independent random samples** let you generalise to the two populations sampled.
- **A randomized experiment** lets you conclude that the difference in treatments **caused** the difference in responses, for subjects like those in the experiment.

## Worked example 1: independent random samples, one-sided test

**Context (fictional).** The Westmoor library service runs libraries in two towns, Ashby Vale (about 6,500 adult members) and Corran (about 9,000 adult members). The investigative question is: *Is the proportion of adult members who borrowed an e-book in the past month greater in Ashby Vale than in Corran?* The service selects independent random samples of 180 Ashby Vale members and 220 Corran members. In Ashby Vale, 81 had borrowed an e-book in the past month; in Corran, 77 had. Use α = 0.05.

**1. Hypotheses.** Let p₁ = the true proportion of all Ashby Vale adult members who borrowed an e-book in the past month, and p₂ = the true proportion of all Corran adult members who did.

- H₀: p₁ − p₂ = 0
- Hₐ: p₁ − p₂ > 0
- α = 0.05

**2. Method and conditions.** Two-sample z-test for the difference between two population proportions.

- Randomization: independent random samples from the two towns' members.
- 10% condition: 180 ≤ 10% of 6,500 = 650, and 220 ≤ 10% of 9,000 = 900.
- Normality: p̂c = (81 + 77) ÷ (180 + 220) = 158 ÷ 400 = 0.395. Then n₁p̂c = 71.1, n₁(1 − p̂c) = 108.9, n₂p̂c = 86.9 and n₂(1 − p̂c) = 133.1, all at least 10.

**3. Calculations.**

- p̂₁ = 81 ÷ 180 = 0.45 and p̂₂ = 77 ÷ 220 = 0.35, so p̂₁ − p̂₂ = 0.10
- Standard error: √[0.395 × 0.605 × (1/180 + 1/220)] ≈ 0.04913
- z = (0.10 − 0) ÷ 0.04913 ≈ **2.04**
- p-value = P(Z ≥ 2.04) ≈ **0.0209** (right tail, because Hₐ uses >). A table with z = 2.04 gives 0.0207.

**Interpretation of the p-value.** Assuming the true proportions of adult members who borrowed an e-book in the past month are the same in Ashby Vale and Corran, there is about a 0.0209 probability of getting a difference in sample proportions (Ashby Vale minus Corran) of 0.10 or more by chance in random sampling.

**4. Conclusion.** Because the p-value of 0.0209 is less than α = 0.05, we reject H₀. There is convincing statistical evidence that the true proportion of adult members who borrowed an e-book in the past month is greater in Ashby Vale than in Corran (p₁ − p₂ > 0).

**Answer to the investigative question.** Yes: the samples give convincing evidence that a greater proportion of Ashby Vale members borrowed an e-book in the past month.

**Check.** The decision depends on α. With α = 0.01, chosen in advance, the same p-value (0.0209 > 0.01) would lead you to fail to reject H₀. This is why α must be fixed before you see the data.

## Worked example 2: a randomized experiment, two-sided test

**Context (fictional).** A bike-share company is testing two versions of its sign-up screen. During one week, 300 people who downloaded the app were randomly assigned, 150 to each version. With Version A, 96 completed sign-up; with Version B, 84 did. The investigative question is: *Does the sign-up screen version affect the proportion of new users who complete sign-up?* Use α = 0.05.

**1. Hypotheses.** Let p₁ = the true proportion of new users like these who would complete sign-up with Version A, and p₂ = the true proportion who would complete sign-up with Version B.

- H₀: p₁ = p₂
- Hₐ: p₁ ≠ p₂ (the question asks whether the version *affects* sign-up, with no direction)
- α = 0.05

**2. Method and conditions.** Two-sample z-test for the difference between two population proportions.

- Randomization: users were randomly assigned to the two versions (a randomized experiment).
- 10% condition: not needed, because the data come from a randomized experiment, not from sampling a population.
- Normality: p̂c = (96 + 84) ÷ 300 = 0.60, so n₁p̂c = n₂p̂c = 90 and n₁(1 − p̂c) = n₂(1 − p̂c) = 60, all at least 10.

**3. Calculations.**

- p̂₁ = 96 ÷ 150 = 0.64 and p̂₂ = 84 ÷ 150 = 0.56, so p̂₁ − p̂₂ = 0.08
- Standard error: √[0.60 × 0.40 × (1/150 + 1/150)] = √0.0032 ≈ 0.05657
- z = 0.08 ÷ 0.05657 ≈ **1.41**
- p-value = 2 × P(Z ≥ 1.41) ≈ **0.1573** (technology, unrounded z). A table with z = 1.41 gives 2 × 0.0793 = 0.1586.

**Interpretation of the p-value.** Assuming the version of the sign-up screen makes no difference to the true proportion who complete sign-up, there is about a 0.1573 probability of getting a difference in sample proportions at least as far from 0 as 0.08, in either direction, by chance in the random assignment.

**4. Conclusion.** Because the p-value of 0.1573 is greater than α = 0.05, we fail to reject H₀. There is not convincing statistical evidence that the true proportion of new users like these who complete sign-up differs between Version A and Version B.

**Answer to the investigative question.** The experiment does not give convincing evidence that the screen version affects sign-up. This does **not** show that the two versions are equally effective; an 8-percentage-point difference this size happens quite often by chance with groups of 150.

**Check.** If you had wrongly used a one-sided test, you would have reported 0.0786, half the correct value. The direction of Hₐ comes from the question, never from the data.

## Common misconceptions

- **Averaging p̂₁ and p̂₂ to get p̂c.** Add the successes and add the sample sizes. The simple average is only correct when n₁ = n₂.
- **Using the unpooled standard error in the test.** √[p̂₁(1 − p̂₁)/n₁ + p̂₂(1 − p̂₂)/n₂] belongs to the confidence interval. The test assumes p₁ = p₂, so it uses p̂c.
- **Choosing the tail from the sign of z.** The tail comes from Hₐ. If Hₐ is p₁ > p₂ but z is negative, the p-value is greater than 0.5.
- **Forgetting to double for a two-sided test.**
- **"The p-value is the probability that the two proportions are equal."** It is the probability of a result at least this extreme, *assuming* they are equal.
- **"We accept H₀, so the proportions are the same."** Failing to reject is a lack of evidence, not proof of equality.
- **Concluding about p̂₁ and p̂₂.** You already know the sample proportions differ. The conclusion is about the true proportions in the populations or treatments.
- **Claiming cause from independent samples.** Only a randomized experiment supports a cause-and-effect conclusion.

## Where this leads

So far you have compared one proportion across two groups. Next, in [Topic 3.14, Setting Up a Chi-Square Test for Homogeneity or Independence](/advanced-course-resources/statistics/3-14-setting-up-chi-square-test-study-guide/), you will compare whole distributions of a categorical variable, across two or more groups, using a new test statistic. To revise the set-up for this test, go back to [Topic 3.12](/advanced-course-resources/statistics/3-12-setting-up-test-difference-between-study-guide/). Try the [practice questions](/advanced-course-resources/statistics/3-13-carrying-out-test-difference-between-practice/) now, then use the [revision notes](/advanced-course-resources/statistics/3-13-carrying-out-test-difference-between-revision-notes/) and the [checklist](/advanced-course-resources/statistics/3-13-carrying-out-test-difference-between-checklist/) to consolidate.
