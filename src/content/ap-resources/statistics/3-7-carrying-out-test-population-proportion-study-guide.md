---
resourceId: "mb-ap-stats-3.7-study-guide"
title: "Carrying Out a Test for a Population Proportion: Study Guide (Statistics 3.7)"
description: "Learn to calculate the z test statistic and p-value for one population proportion, compare the p-value with a significance level and write a conclusion in context."
course: "statistics"
unit: 3
topics: ["3.7"]
resourceType: "study-guide"
prerequisites:
  - "Writing hypotheses and checking conditions for a one-proportion test (Topic 3.5)"
  - "Interpreting a p-value as a probability found by assuming the null hypothesis is true (Topic 3.6)"
  - "Finding areas under the standard normal curve with a table or technology"
prerequisiteResources: ["mb-ap-stats-3.6-study-guide"]
learningObjectives:
  - "Calculate the z test statistic for a population proportion, using the null value p₀ in the standard error"
  - "Find the p-value from the standard normal distribution for a one-sided or two-sided alternative"
  - "Explain the significance level α as the chosen probability of rejecting a true null hypothesis"
  - "Make a formal decision by comparing the p-value with α"
  - "Write a non-definitive conclusion in context, in terms of the alternative hypothesis, that answers the investigative question"
skills: ["3", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "graphing"
calculatorNote: "Use the one-proportion z-test function (often called 1-PropZTest) or a normal cdf to find p-values. Round z to 2 decimal places and p-values to 4 decimal places."
related: ["mb-ap-stats-3.7-revision-notes", "mb-ap-stats-3.7-practice", "mb-ap-stats-3.7-checklist"]
next: "mb-ap-stats-3.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Test statistic: z = (p̂ − p₀) / √[p₀(1 − p₀) / n]. Use p₀, not p̂, in the standard error."
  - "If H₀ is true and the conditions hold, z follows (approximately) the standard normal distribution."
  - "The p-value is the area in the direction of Hₐ: right tail for >, left tail for <, both tails for ≠."
  - "If p-value ≤ α, reject H₀; if p-value > α, fail to reject H₀. Never accept or prove H₀."
  - "Conclude in context, about the parameter and the population, in terms of Hₐ, with non-definitive language."
faqs:
  - question: "Why does the test use p₀ in the standard error when a confidence interval uses p̂?"
    answer: "A test asks how surprising the data would be if H₀ were true, so every calculation assumes p = p₀. That includes the spread of the null distribution, √[p₀(1 − p₀) / n]. A confidence interval makes no such assumption, so it estimates the spread with p̂."
  - question: "What if the p-value is exactly equal to α?"
    answer: "The rule in this course is: reject H₀ when the p-value is less than or equal to α. In practice an exact tie is rare once you keep enough decimal places."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## From set-up to decision

In Topic 3.5 you wrote hypotheses and checked conditions. In Topic 3.6 you learned what a p-value means. This topic puts the pieces together and finishes the job: you calculate the test statistic, find the p-value, make a decision and write a conclusion.

A complete significance test for one proportion has four parts. Keep them in this order in every written answer:

1. **Hypotheses.** Define the parameter p in context (the proportion of *what*, in *which population*). State H₀: p = p₀ and Hₐ with <, > or ≠. State the significance level α.
2. **Method and conditions.** Name the procedure: a **one-sample z-test for a population proportion**. Check the randomization condition, the 10% condition (when sampling without replacement) and the normality condition (np₀ ≥ 10 and n(1 − p₀) ≥ 10).
3. **Calculations.** Find p̂, the test statistic z and the p-value.
4. **Conclusion.** Compare the p-value with α, state the decision, and say what it means in context.

This guide concentrates on parts 3 and 4, but the worked examples show all four so you can see a full answer.

## The test statistic

The test statistic measures how far the sample proportion is from the null value, in standard-error units:

**z = (p̂ − p₀) / √[p₀(1 − p₀) / n]**

- p̂ = x / n is the sample proportion (x successes in a sample of size n).
- p₀ is the value of p stated in H₀.
- The denominator, √[p₀(1 − p₀) / n], is the standard deviation of the sampling distribution of p̂ **if H₀ is true**.

Two things to notice:

- **Use p₀ in the denominator, not p̂.** The whole test is calculated in a world where H₀ is true, so the spread comes from p₀.
- **The sign matters.** A negative z means p̂ is below p₀; a positive z means p̂ is above p₀.

If H₀ is true and the conditions are met, z has approximately a **standard normal distribution** (mean 0, standard deviation 1). This distribution of the test statistic, assuming H₀ is true, is called the **null distribution**. The normality condition is what lets you use the standard normal curve as a model for it.

## Finding the p-value

The p-value is the probability, assuming H₀ is true, of a test statistic at least as extreme as the one you observed, in the direction of Hₐ. With the standard normal model:

| Alternative | p-value | Area under the standard normal curve |
|---|---|---|
| Hₐ: p > p₀ | P(Z ≥ z) | right tail beyond z |
| Hₐ: p < p₀ | P(Z ≤ z) | left tail beyond z |
| Hₐ: p ≠ p₀ | P(Z ≤ −\|z\|) + P(Z ≥ \|z\|) = 2 × P(Z ≥ \|z\|) | both tails beyond ±\|z\| |

You can find these areas with a standard normal table or with technology. For example, if z = 1.50:

- for Hₐ: p > p₀, the p-value is P(Z ≥ 1.50) = 0.0668;
- for Hₐ: p < p₀, the p-value is P(Z ≤ 1.50) = 0.9332 (the data point the "wrong" way, so the p-value is large);
- for Hₐ: p ≠ p₀, the p-value is 2 × 0.0668 = 0.1336.

On a graphing calculator, the one-proportion z-test function takes p₀, x, n and the direction of Hₐ, and returns z, the p-value and p̂. You still need to show the formula with your numbers substituted, because "calculator says 0.0087" alone does not show your method.

<figure>
<svg viewBox="0 0 640 430" role="img" aria-labelledby="ztest-title ztest-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ztest-title">Standard normal null distributions showing the p-values for Worked examples 1 and 2</title>
<desc id="ztest-desc">Two bell-shaped standard normal curves centred at z equals 0, each with an axis marked from minus 3 to 3. Top panel, Worked example 1, alternative p less than 0.85: a vertical line at z equals minus 2.38 and the small area to its left is hatched and labelled p-value equals 0.0087. Bottom panel, Worked example 2, alternative p not equal to 0.60: vertical lines at z equals minus 1.33 and plus 1.33; the areas to the left of minus 1.33 and to the right of plus 1.33 are both hatched, each labelled 0.0912, and together labelled p-value equals 0.1824.</desc>
<defs><pattern id="hatch37" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="#d9dee8"/><line x1="0" y1="0" x2="0" y2="6" stroke="#1d2b44" stroke-width="1.5"/></pattern></defs>
<rect x="0" y="0" width="640" height="430" fill="#ffffff"/>
<text x="20" y="28" font-size="14" fill="#1d2b44" font-weight="bold">Worked example 1: Hₐ: p &lt; 0.85 (one-sided, left tail)</text>
<path d="M40.0 170 L40.0 169.8 L44.1 169.7 L48.1 169.7 L52.2 169.6 L56.3 169.5 L60.4 169.4 L64.4 169.3 L68.5 169.2 L72.6 169.1 L76.7 168.9 L80.7 168.7 L84.8 168.5 L88.9 168.3 L92.9 168.0 L97.0 167.7 L101.1 167.4 L105.2 167.0 L109.2 166.6 L113.3 166.1 L117.4 165.5 L121.5 164.9 L125.5 164.3 L129.6 163.5 L129.6 170 Z" fill="url(#hatch37)" stroke="#1d2b44" stroke-width="1"/>
<path d="M40.0 169.8 L44.0 169.7 L48.0 169.7 L52.0 169.6 L56.0 169.5 L60.0 169.4 L64.0 169.3 L68.0 169.2 L72.0 169.1 L76.0 168.9 L80.0 168.8 L84.0 168.6 L88.0 168.4 L92.0 168.1 L96.0 167.8 L100.0 167.5 L104.0 167.1 L108.0 166.7 L112.0 166.3 L116.0 165.7 L120.0 165.2 L124.0 164.5 L128.0 163.8 L132.0 163.0 L136.0 162.2 L140.0 161.2 L144.0 160.2 L148.0 159.1 L152.0 157.9 L156.0 156.5 L160.0 155.1 L164.0 153.6 L168.0 151.9 L172.0 150.1 L176.0 148.2 L180.0 146.2 L184.0 144.1 L188.0 141.8 L192.0 139.4 L196.0 136.9 L200.0 134.3 L204.0 131.6 L208.0 128.7 L212.0 125.8 L216.0 122.7 L220.0 119.6 L224.0 116.5 L228.0 113.2 L232.0 109.9 L236.0 106.6 L240.0 103.3 L244.0 99.9 L248.0 96.6 L252.0 93.4 L256.0 90.1 L260.0 87.0 L264.0 83.9 L268.0 80.9 L272.0 78.1 L276.0 75.4 L280.0 72.9 L284.0 70.6 L288.0 68.5 L292.0 66.5 L296.0 64.8 L300.0 63.4 L304.0 62.2 L308.0 61.2 L312.0 60.5 L316.0 60.1 L320.0 60.0 L324.0 60.1 L328.0 60.5 L332.0 61.2 L336.0 62.2 L340.0 63.4 L344.0 64.8 L348.0 66.5 L352.0 68.5 L356.0 70.6 L360.0 72.9 L364.0 75.4 L368.0 78.1 L372.0 80.9 L376.0 83.9 L380.0 87.0 L384.0 90.1 L388.0 93.4 L392.0 96.6 L396.0 99.9 L400.0 103.3 L404.0 106.6 L408.0 109.9 L412.0 113.2 L416.0 116.5 L420.0 119.6 L424.0 122.7 L428.0 125.8 L432.0 128.7 L436.0 131.6 L440.0 134.3 L444.0 136.9 L448.0 139.4 L452.0 141.8 L456.0 144.1 L460.0 146.2 L464.0 148.2 L468.0 150.1 L472.0 151.9 L476.0 153.6 L480.0 155.1 L484.0 156.5 L488.0 157.9 L492.0 159.1 L496.0 160.2 L500.0 161.2 L504.0 162.2 L508.0 163.0 L512.0 163.8 L516.0 164.5 L520.0 165.2 L524.0 165.7 L528.0 166.3 L532.0 166.7 L536.0 167.1 L540.0 167.5 L544.0 167.8 L548.0 168.1 L552.0 168.4 L556.0 168.6 L560.0 168.8 L564.0 168.9 L568.0 169.1 L572.0 169.2 L576.0 169.3 L580.0 169.4 L584.0 169.5 L588.0 169.6 L592.0 169.7 L596.0 169.7 L600.0 169.8" fill="none" stroke="#1d2b44" stroke-width="2"/><line x1="40" y1="170" x2="600" y2="170" stroke="#1d2b44" stroke-width="2"/><g stroke="#1d2b44" stroke-width="1.5"><line x1="80.0" y1="170" x2="80.0" y2="176"/><line x1="160.0" y1="170" x2="160.0" y2="176"/><line x1="240.0" y1="170" x2="240.0" y2="176"/><line x1="320.0" y1="170" x2="320.0" y2="176"/><line x1="400.0" y1="170" x2="400.0" y2="176"/><line x1="480.0" y1="170" x2="480.0" y2="176"/><line x1="560.0" y1="170" x2="560.0" y2="176"/></g><g font-size="13" fill="#1d2b44" text-anchor="middle"><text x="80.0" y="191">−3</text><text x="160.0" y="191">−2</text><text x="240.0" y="191">−1</text><text x="320.0" y="191">0</text><text x="400.0" y="191">1</text><text x="480.0" y="191">2</text><text x="560.0" y="191">3</text></g>
<line x1="129.6" y1="100" x2="129.6" y2="170" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 3"/>
<text x="129.6" y="94" text-anchor="middle" font-size="12" fill="#1d2b44">z = −2.38</text>
<text x="118" y="140" text-anchor="end" font-size="12" fill="#1d2b44">p-value = 0.0087</text>
<text x="320" y="205" text-anchor="middle" font-size="13" fill="#1d2b44">z (standard normal)</text>
<text x="20" y="235" font-size="14" fill="#1d2b44" font-weight="bold">Worked example 2: Hₐ: p ≠ 0.60 (two-sided, both tails)</text>
<path d="M40.0 370 L40.0 369.8 L44.0 369.7 L48.1 369.7 L52.1 369.6 L56.1 369.5 L60.2 369.4 L64.2 369.3 L68.3 369.2 L72.3 369.1 L76.3 368.9 L80.4 368.8 L84.4 368.6 L88.4 368.3 L92.5 368.1 L96.5 367.8 L100.6 367.4 L104.6 367.1 L108.6 366.6 L112.7 366.2 L116.7 365.6 L120.7 365.1 L124.8 364.4 L128.8 363.7 L132.9 362.9 L136.9 362.0 L140.9 361.0 L145.0 360.0 L149.0 358.8 L153.0 357.5 L157.1 356.2 L161.1 354.7 L165.2 353.1 L169.2 351.4 L173.2 349.6 L177.3 347.6 L181.3 345.5 L185.3 343.3 L189.4 341.0 L193.4 338.5 L197.5 336.0 L201.5 333.3 L205.5 330.5 L209.6 327.6 L213.6 324.6 L213.6 370 Z" fill="url(#hatch37)" stroke="#1d2b44" stroke-width="1"/>
<path d="M426.4 370 L426.4 324.6 L430.4 327.6 L434.5 330.5 L438.5 333.3 L442.5 336.0 L446.6 338.5 L450.6 341.0 L454.7 343.3 L458.7 345.5 L462.7 347.6 L466.8 349.6 L470.8 351.4 L474.8 353.1 L478.9 354.7 L482.9 356.2 L487.0 357.5 L491.0 358.8 L495.0 360.0 L499.1 361.0 L503.1 362.0 L507.1 362.9 L511.2 363.7 L515.2 364.4 L519.3 365.1 L523.3 365.6 L527.3 366.2 L531.4 366.6 L535.4 367.1 L539.4 367.4 L543.5 367.8 L547.5 368.1 L551.6 368.3 L555.6 368.6 L559.6 368.8 L563.7 368.9 L567.7 369.1 L571.7 369.2 L575.8 369.3 L579.8 369.4 L583.9 369.5 L587.9 369.6 L591.9 369.7 L596.0 369.7 L600.0 369.8 L600.0 370 Z" fill="url(#hatch37)" stroke="#1d2b44" stroke-width="1"/>
<path d="M40.0 369.8 L44.0 369.7 L48.0 369.7 L52.0 369.6 L56.0 369.5 L60.0 369.4 L64.0 369.3 L68.0 369.2 L72.0 369.1 L76.0 368.9 L80.0 368.8 L84.0 368.6 L88.0 368.4 L92.0 368.1 L96.0 367.8 L100.0 367.5 L104.0 367.1 L108.0 366.7 L112.0 366.3 L116.0 365.7 L120.0 365.2 L124.0 364.5 L128.0 363.8 L132.0 363.0 L136.0 362.2 L140.0 361.2 L144.0 360.2 L148.0 359.1 L152.0 357.9 L156.0 356.5 L160.0 355.1 L164.0 353.6 L168.0 351.9 L172.0 350.1 L176.0 348.2 L180.0 346.2 L184.0 344.1 L188.0 341.8 L192.0 339.4 L196.0 336.9 L200.0 334.3 L204.0 331.6 L208.0 328.7 L212.0 325.8 L216.0 322.7 L220.0 319.6 L224.0 316.5 L228.0 313.2 L232.0 309.9 L236.0 306.6 L240.0 303.3 L244.0 299.9 L248.0 296.6 L252.0 293.4 L256.0 290.1 L260.0 287.0 L264.0 283.9 L268.0 280.9 L272.0 278.1 L276.0 275.4 L280.0 272.9 L284.0 270.6 L288.0 268.5 L292.0 266.5 L296.0 264.8 L300.0 263.4 L304.0 262.2 L308.0 261.2 L312.0 260.5 L316.0 260.1 L320.0 260.0 L324.0 260.1 L328.0 260.5 L332.0 261.2 L336.0 262.2 L340.0 263.4 L344.0 264.8 L348.0 266.5 L352.0 268.5 L356.0 270.6 L360.0 272.9 L364.0 275.4 L368.0 278.1 L372.0 280.9 L376.0 283.9 L380.0 287.0 L384.0 290.1 L388.0 293.4 L392.0 296.6 L396.0 299.9 L400.0 303.3 L404.0 306.6 L408.0 309.9 L412.0 313.2 L416.0 316.5 L420.0 319.6 L424.0 322.7 L428.0 325.8 L432.0 328.7 L436.0 331.6 L440.0 334.3 L444.0 336.9 L448.0 339.4 L452.0 341.8 L456.0 344.1 L460.0 346.2 L464.0 348.2 L468.0 350.1 L472.0 351.9 L476.0 353.6 L480.0 355.1 L484.0 356.5 L488.0 357.9 L492.0 359.1 L496.0 360.2 L500.0 361.2 L504.0 362.2 L508.0 363.0 L512.0 363.8 L516.0 364.5 L520.0 365.2 L524.0 365.7 L528.0 366.3 L532.0 366.7 L536.0 367.1 L540.0 367.5 L544.0 367.8 L548.0 368.1 L552.0 368.4 L556.0 368.6 L560.0 368.8 L564.0 368.9 L568.0 369.1 L572.0 369.2 L576.0 369.3 L580.0 369.4 L584.0 369.5 L588.0 369.6 L592.0 369.7 L596.0 369.7 L600.0 369.8" fill="none" stroke="#1d2b44" stroke-width="2"/><line x1="40" y1="370" x2="600" y2="370" stroke="#1d2b44" stroke-width="2"/><g stroke="#1d2b44" stroke-width="1.5"><line x1="80.0" y1="370" x2="80.0" y2="376"/><line x1="160.0" y1="370" x2="160.0" y2="376"/><line x1="240.0" y1="370" x2="240.0" y2="376"/><line x1="320.0" y1="370" x2="320.0" y2="376"/><line x1="400.0" y1="370" x2="400.0" y2="376"/><line x1="480.0" y1="370" x2="480.0" y2="376"/><line x1="560.0" y1="370" x2="560.0" y2="376"/></g><g font-size="13" fill="#1d2b44" text-anchor="middle"><text x="80.0" y="391">−3</text><text x="160.0" y="391">−2</text><text x="240.0" y="391">−1</text><text x="320.0" y="391">0</text><text x="400.0" y="391">1</text><text x="480.0" y="391">2</text><text x="560.0" y="391">3</text></g>
<line x1="213.6" y1="290" x2="213.6" y2="370" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 3"/>
<line x1="426.4" y1="290" x2="426.4" y2="370" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 3"/>
<text x="213.6" y="284" text-anchor="middle" font-size="12" fill="#1d2b44">z = −1.33</text>
<text x="426.4" y="284" text-anchor="middle" font-size="12" fill="#1d2b44">z = 1.33</text>
<text x="120" y="330" text-anchor="middle" font-size="12" fill="#1d2b44">0.0912</text>
<text x="520" y="330" text-anchor="middle" font-size="12" fill="#1d2b44">0.0912</text>
<text x="320" y="255" text-anchor="middle" font-size="12" fill="#1d2b44">p-value = 0.0912 + 0.0912 = 0.1824</text>
<text x="320" y="415" text-anchor="middle" font-size="13" fill="#1d2b44">z (standard normal)</text>
</svg>
<figcaption>Figure 1. The null distribution of z is standard normal. The p-value is the hatched area in the direction of the alternative hypothesis. Top: a left-tailed test, so only the left tail counts. Bottom: a two-sided test, so both tails beyond ±1.33 count.</figcaption>
</figure>

## Significance level and the decision

The **significance level**, α, is a probability chosen **before** you look at the data. It is the probability of rejecting H₀ when H₀ is actually true. Common choices are 0.10, 0.05 and 0.01. A question may give α, or you may need to choose it; if none is given, 0.05 is the usual default, and you should say that you are using it.

The formal decision always compares the p-value with α:

- **p-value ≤ α:** reject H₀. The result is **statistically significant** at level α. There is convincing statistical evidence for Hₐ.
- **p-value > α:** fail to reject H₀. The result is not statistically significant at level α. There is not convincing statistical evidence for Hₐ.

Notice the asymmetry. A test can find evidence **for Hₐ**. It can never find evidence that H₀ is true. A large p-value only means the data are the kind of data you would often see if H₀ were true; they might also be quite likely if H₀ were false. So "fail to reject H₀" is the correct phrase, never "accept H₀" and never "prove H₀".

## Writing the conclusion

A full conclusion has three parts:

1. **Linkage:** compare the p-value with α, with both numbers ("Because the p-value of 0.0087 is less than α = 0.05…").
2. **Decision:** "we reject H₀" or "we fail to reject H₀".
3. **Context, in terms of Hₐ:** "There is convincing statistical evidence that the true proportion of [successes] in [population] is [less than / greater than / different from] p₀." When you fail to reject, say "There is **not** convincing statistical evidence that…".

Use **non-definitive** language: "there is convincing evidence that", not "this proves that". Refer to the **parameter** (the true or population proportion), not the sample proportion. You already know p̂ is below 0.85; the question is about p.

Finally, use the conclusion to **answer the investigative question** that started the study. The test result is the statistical reasoning behind your answer.

## Worked example 1: a one-sided test that rejects H₀

**Context (fictional).** Fernhollow Seeds states that 85% of its tomato seeds germinate. A gardening club suspects the germination rate for this year's seeds is lower. The investigative question is: *Is the germination rate of this year's Fernhollow tomato seeds less than the stated 85%?* The club takes a random sample of 200 seeds from this year's batch of about 12,000 seeds. Under the same conditions, 158 of them germinate. Use α = 0.05.

**1. Hypotheses.** Let p = the true proportion of all seeds in this year's Fernhollow tomato batch that germinate.

- H₀: p = 0.85
- Hₐ: p < 0.85
- α = 0.05

**2. Method and conditions.** One-sample z-test for a population proportion.

- Randomization: the 200 seeds were a random sample from the batch.
- 10% condition: sampling is without replacement. The batch of about 12,000 seeds is more than 10 × 200 = 2,000.
- Normality: np₀ = 200(0.85) = 170 ≥ 10 and n(1 − p₀) = 200(0.15) = 30 ≥ 10.

**3. Calculations.**

- p̂ = 158 ÷ 200 = 0.79
- Standard error (using p₀): √[0.85 × 0.15 ÷ 200] = √0.0006375 ≈ 0.02525
- z = (0.79 − 0.85) ÷ 0.02525 ≈ **−2.38**
- p-value = P(Z ≤ −2.38) ≈ **0.0087** (left tail, because Hₐ uses <)

**4. Conclusion.** Because the p-value of 0.0087 is less than α = 0.05, we reject H₀. There is convincing statistical evidence that the true proportion of seeds in this year's Fernhollow tomato batch that germinate is less than 0.85.

**Answer to the investigative question.** Yes: the data give convincing evidence that this year's germination rate is below the stated 85%.

**Check.** The sample proportion (79%) is 6 percentage points below 85%, and z ≈ −2.38 says that is about 2.4 standard errors below. Results that far out in the left tail happen less than 1% of the time when p really is 0.85, so a small p-value makes sense.

## Worked example 2: a two-sided test that fails to reject H₀

**Context (fictional).** Tidewell Ferries says that 60% of its passengers book their tickets online. Last month 4,800 passengers used its new island route. A manager asks: *Is the proportion of the new route's passengers who book online different from 60%?* She takes a random sample of 150 of last month's passengers on the route; 98 of them booked online. Use α = 0.05.

**1. Hypotheses.** Let p = the true proportion of last month's passengers on the new island route who booked online.

- H₀: p = 0.60
- Hₐ: p ≠ 0.60 (the question says "different from", so the test is two-sided)
- α = 0.05

**2. Method and conditions.** One-sample z-test for a population proportion.

- Randomization: a random sample of the route's passengers.
- 10% condition: 150 ≤ 10% of 4,800 = 480.
- Normality: np₀ = 150(0.60) = 90 ≥ 10 and n(1 − p₀) = 150(0.40) = 60 ≥ 10.

**3. Calculations.**

- p̂ = 98 ÷ 150 ≈ 0.6533
- Standard error: √[0.60 × 0.40 ÷ 150] = √0.0016 = 0.04
- z = (0.6533 − 0.60) ÷ 0.04 ≈ **1.33**
- p-value = 2 × P(Z ≥ 1.33) ≈ 2 × 0.0912 = **0.1824** (technology, unrounded z). A table with z = 1.33 gives about 0.1835; the small difference comes from rounding z.

**4. Conclusion.** Because the p-value of 0.1824 is greater than α = 0.05, we fail to reject H₀. There is not convincing statistical evidence that the true proportion of last month's passengers on the new island route who booked online is different from 0.60.

**Answer to the investigative question.** The sample does not give convincing evidence that the new route differs from the company-wide 60%. This does **not** show that the route's proportion is exactly 60%; a sample of 150 passengers simply cannot rule out values near 60%.

**Check.** The p-value would still be greater than 0.10, so the decision is the same at α = 0.10. If you had used a one-sided test by mistake, you would have reported 0.0912 instead, which is half the correct value.

## Common misconceptions

- **Using p̂ in the standard error.** In a test, use √[p₀(1 − p₀) / n]. With p̂ you get a different z, and the method is wrong even if the decision happens to match.
- **Using the wrong tail.** The tail comes from Hₐ, not from the sign of z. If Hₐ is p > p₀ and z is negative, the p-value is large (more than 0.5).
- **Forgetting to double for a two-sided test.** For Hₐ: p ≠ p₀, add both tails.
- **"We accept H₀" or "this proves p = p₀".** A large p-value is a lack of evidence against H₀, not evidence for it.
- **Concluding about p̂.** "The sample proportion is less than 0.85" is not a conclusion; you knew that before the test. Conclude about the true proportion p in the population.
- **A decision with no linkage.** "Reject H₀" on its own is incomplete. Compare the p-value with α, using both numbers.
- **Choosing α after seeing the p-value.** α is set in advance. Changing it to get the answer you want makes the test meaningless.
- **"The p-value is the probability that H₀ is true."** It is the probability of data at least this extreme, *assuming* H₀ is true.

## Where this leads

Every decision in a test can be wrong in one of two ways. Next, in [Topic 3.8, Potential Errors When Performing Tests](/advanced-course-resources/statistics/3-8-potential-errors-when-performing-tests-study-guide/), you will meet Type I and Type II errors and the power of a test. The same four-part structure returns for tests about a difference in proportions, chi-square tests and inference for means later in the course. Try the [practice questions](/advanced-course-resources/statistics/3-7-carrying-out-test-population-proportion-practice/) now, then use the [revision notes](/advanced-course-resources/statistics/3-7-carrying-out-test-population-proportion-revision-notes/) and the [checklist](/advanced-course-resources/statistics/3-7-carrying-out-test-population-proportion-checklist/) to consolidate. To review the meaning of a p-value, go back to [Topic 3.6](/advanced-course-resources/statistics/3-6-p-values-study-guide/).
