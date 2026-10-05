---
resourceId: "mb-ap-stats-3.8-study-guide"
title: "Potential Errors When Performing Tests: Study Guide (Statistics 3.8)"
description: "Learn to identify and describe Type I and Type II errors in context, find their probabilities from α and power, and explain what increases the power of a test."
course: "statistics"
unit: 3
topics: ["3.8"]
resourceType: "study-guide"
prerequisites:
  - "Writing hypotheses for a test about a population proportion (Topic 3.5)"
  - "Making a decision by comparing a p-value with a significance level α (Topic 3.7)"
prerequisiteResources: ["mb-ap-stats-3.7-study-guide"]
learningObjectives:
  - "Identify and describe a Type I error and a Type II error in the context of a test"
  - "Define the power of a test and interpret it in context"
  - "Find the probability of a Type I error from α and of a Type II error from the power"
  - "Explain how sample size, standard error, the true parameter value and α affect the power"
  - "Weigh the consequences of each error to justify a choice of α or sample size"
skills: ["2", "3", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "none-needed"
calculatorNote: "The only calculations are P(Type I error) = α and P(Type II error) = 1 − power. Power values in this guide come from software and are given to you."
related: ["mb-ap-stats-3.8-revision-notes", "mb-ap-stats-3.8-practice", "mb-ap-stats-3.8-checklist"]
next: "mb-ap-stats-3.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Type I error: finding convincing evidence for Hₐ (rejecting H₀) when H₀ is actually true."
  - "Type II error: not finding convincing evidence for Hₐ (failing to reject H₀) when Hₐ is actually true."
  - "P(Type I error) = α. Power = P(rejecting H₀ when it is false). P(Type II error) = 1 − power."
  - "Power rises when n increases, the standard error falls, the true value is further from p₀, or α increases (others fixed)."
  - "If a Type I error is worse, use a small α. If a Type II error is worse, use a larger α or a larger sample."
faqs:
  - question: "Can a test make both errors at once?"
    answer: "No. If you reject H₀, the only possible error is a Type I error. If you fail to reject H₀, the only possible error is a Type II error. In a real study you never know for certain whether an error was made, because you do not know the true parameter."
  - question: "Why not just set α very small to avoid Type I errors?"
    answer: "With the sample size fixed, a smaller α makes it harder to reject H₀, so the power falls and the probability of a Type II error rises. Reducing both error probabilities at once needs more data."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## Why a test can be wrong

A significance test makes a decision about a population from one random sample. Samples vary. Even when you do everything correctly, chance can give a sample that points the wrong way. So every decision carries a risk of error.

There are two possible decisions (reject H₀, or fail to reject H₀) and two possible truths (H₀ is true, or Hₐ is true). That gives four outcomes: two correct and two errors.

| | **H₀ is actually true** | **Hₐ is actually true** |
|---|---|---|
| **Reject H₀** (convincing evidence for Hₐ) | **Type I error** (probability α) | Correct decision (probability = power) |
| **Fail to reject H₀** (no convincing evidence for Hₐ) | Correct decision (probability 1 − α) | **Type II error** (probability = 1 − power) |

Read the table by columns. Each column is one possible truth, and the two probabilities in a column add to 1.

## Type I and Type II errors

- A **Type I error** happens when the test finds convincing evidence for Hₐ (the p-value is small, so you reject H₀), but in fact H₀ is true. You "see an effect that is not there".
- A **Type II error** happens when the test does not find convincing evidence for Hₐ (the p-value is not small, so you fail to reject H₀), but in fact Hₐ is true. You "miss an effect that is there".

To describe an error **in context**, say what the test concluded and what is actually true, using the parameter and the population. For a test of H₀: p = 0.30 against Hₐ: p > 0.30, where p is the proportion of a town's adults who use its swimming pool:

- **Type I:** the test finds convincing evidence that more than 30% of the town's adults use the pool, when really the proportion is 30%.
- **Type II:** the test does not find convincing evidence that more than 30% use the pool, when really more than 30% do.

Two facts follow from the table:

- After you **reject** H₀, the only error you could have made is a **Type I** error.
- After you **fail to reject** H₀, the only error you could have made is a **Type II** error.

You never know for sure whether you made an error, because you never know the true value of p.

## The probability of each error

**Type I error.** The significance level α *is* the probability of a Type I error. You choose it before you collect data, usually a small value such as 0.01, 0.05 or 0.10. If α = 0.05 and H₀ is true, the test will wrongly reject H₀ in about 5% of all possible samples.

**Power.** The **power** of a test is the probability that it correctly rejects H₀ when H₀ is false. Power depends on the true value of the parameter: a test has more power to detect a large departure from p₀ than a small one. So a power value is always "against" a particular alternative value, such as "power = 0.72 if p is really 0.68".

**Type II error.** The probability of a Type II error is often written β:

**P(Type II error) = β = 1 − power**

A well-planned study aims for a small β and a large power, for example β ≤ 0.20, so power ≥ 0.80.

In this course you are given power values (from software or a table). You are not expected to calculate power from scratch. Figure 1 shows where the numbers come from, so you can see why the factors in the next section matter.

## What affects the power

With everything else held the same, the power **increases** (and the probability of a Type II error **decreases**) when:

1. **The sample size n increases.** Larger samples give less variable sample proportions, so a real difference is easier to detect.
2. **The standard error decreases.** For a proportion, SE = √[p₀(1 − p₀) / n], so in practice this comes from a larger n. Narrower sampling distributions overlap less.
3. **The true parameter value is further from p₀.** A big difference is easier to spot than a small one.
4. **The significance level α increases.** A larger α makes it easier to reject H₀. The cost is a higher chance of a Type I error.

Point 4 is a trade-off. With a fixed sample size, lowering α to protect against a Type I error raises the chance of a Type II error, and the other way round. **Increasing the sample size** is the way to lower the Type II error probability without raising α.

<figure>
<svg viewBox="0 0 640 330" role="img" aria-labelledby="power-title power-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="power-title">Sampling distributions of the sample proportion under the null and under one alternative, showing alpha, beta and power</title>
<desc id="power-desc">A horizontal axis for the sample proportion runs from 0.60 to 0.85. A solid bell curve centred at 0.75 is labelled "if H0 is true, p = 0.75". A dashed bell curve centred at 0.68 is labelled "if p = 0.68". A vertical line at 0.6996 marks the cut-off: the test rejects H0 when the sample proportion is at or below it. The small area under the solid curve to the left of the cut-off is hatched and labelled alpha = 0.05, the probability of a Type I error. The area under the dashed curve to the right of the cut-off is dotted and labelled beta, about 0.28, the probability of a Type II error. The remaining area under the dashed curve, to the left of the cut-off, is labelled power, about 0.72.</desc>
<defs>
<pattern id="hatch38" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="#d9dee8"/><line x1="0" y1="0" x2="0" y2="6" stroke="#1d2b44" stroke-width="1.5"/></pattern>
<pattern id="dots38" width="7" height="7" patternUnits="userSpaceOnUse"><rect width="7" height="7" fill="#ffffff"/><circle cx="3.5" cy="3.5" r="1.3" fill="#1d2b44"/></pattern>
</defs>
<rect x="0" y="0" width="640" height="330" fill="#ffffff"/>
<path d="M279.2 250 L279.2 133.3 L283.2 137.6 L287.2 142.2 L291.2 147.0 L295.2 151.9 L299.2 157.0 L303.3 162.1 L307.3 167.2 L311.3 172.3 L315.3 177.4 L319.3 182.4 L323.3 187.3 L327.3 192.0 L331.3 196.6 L335.3 201.0 L339.3 205.2 L343.4 209.2 L347.4 213.0 L351.4 216.5 L355.4 219.8 L359.4 222.9 L363.4 225.8 L367.4 228.4 L371.4 230.9 L375.4 233.1 L379.4 235.1 L383.5 236.9 L387.5 238.6 L391.5 240.0 L395.5 241.3 L399.5 242.5 L403.5 243.5 L407.5 244.5 L411.5 245.3 L415.5 246.0 L419.6 246.6 L423.6 247.1 L427.6 247.6 L431.6 247.9 L435.6 248.3 L439.6 248.6 L443.6 248.8 L447.6 249.0 L451.6 249.2 L455.6 249.3 L459.7 249.5 L463.7 249.6 L467.7 249.6 L471.7 249.7 L475.7 249.8 L479.7 249.8 L483.7 249.8 L487.7 249.9 L491.7 249.9 L495.7 249.9 L499.8 249.9 L503.8 250.0 L507.8 250.0 L511.8 250.0 L515.8 250.0 L519.8 250.0 L523.8 250.0 L527.8 250.0 L531.8 250.0 L535.8 250.0 L539.9 250.0 L543.9 250.0 L547.9 250.0 L551.9 250.0 L555.9 250.0 L559.9 250.0 L563.9 250.0 L567.9 250.0 L571.9 250.0 L575.9 250.0 L579.9 250.0 L584.0 250.0 L588.0 250.0 L592.0 250.0 L596.0 250.0 L600.0 250.0 L600.0 250 Z" fill="url(#dots38)" stroke="none"/>
<path d="M40.0 250 L40.0 250.0 L43.0 250.0 L46.0 250.0 L49.0 250.0 L52.0 250.0 L55.0 250.0 L57.9 250.0 L60.9 250.0 L63.9 250.0 L66.9 250.0 L69.9 250.0 L72.9 250.0 L75.9 250.0 L78.9 250.0 L81.9 250.0 L84.9 250.0 L87.8 250.0 L90.8 250.0 L93.8 250.0 L96.8 250.0 L99.8 250.0 L102.8 250.0 L105.8 250.0 L108.8 250.0 L111.8 250.0 L114.8 250.0 L117.7 250.0 L120.7 250.0 L123.7 250.0 L126.7 250.0 L129.7 250.0 L132.7 250.0 L135.7 249.9 L138.7 249.9 L141.7 249.9 L144.7 249.9 L147.6 249.9 L150.6 249.9 L153.6 249.8 L156.6 249.8 L159.6 249.8 L162.6 249.7 L165.6 249.7 L168.6 249.6 L171.6 249.5 L174.5 249.5 L177.5 249.4 L180.5 249.3 L183.5 249.1 L186.5 249.0 L189.5 248.8 L192.5 248.6 L195.5 248.4 L198.5 248.1 L201.5 247.9 L204.4 247.5 L207.4 247.2 L210.4 246.8 L213.4 246.3 L216.4 245.8 L219.4 245.2 L222.4 244.5 L225.4 243.8 L228.4 243.0 L231.4 242.1 L234.4 241.1 L237.3 240.1 L240.3 238.9 L243.3 237.6 L246.3 236.2 L249.3 234.6 L252.3 233.0 L255.3 231.1 L258.3 229.2 L261.3 227.1 L264.3 224.9 L267.2 222.5 L270.2 219.9 L273.2 217.2 L276.2 214.3 L279.2 211.3 L279.2 250 Z" fill="url(#hatch38)" stroke="#1d2b44" stroke-width="1"/>
<path d="M40.0 248.6 L42.8 248.4 L45.6 248.2 L48.4 247.9 L51.2 247.7 L54.0 247.4 L56.8 247.1 L59.6 246.7 L62.4 246.3 L65.2 245.8 L68.0 245.3 L70.8 244.8 L73.6 244.2 L76.4 243.6 L79.2 242.9 L82.0 242.1 L84.8 241.3 L87.6 240.3 L90.4 239.4 L93.2 238.3 L96.0 237.1 L98.8 235.9 L101.6 234.6 L104.4 233.2 L107.2 231.6 L110.0 230.0 L112.8 228.3 L115.6 226.5 L118.4 224.5 L121.2 222.5 L124.0 220.3 L126.8 218.1 L129.6 215.7 L132.4 213.2 L135.2 210.6 L138.0 207.9 L140.8 205.0 L143.6 202.1 L146.4 199.1 L149.2 196.0 L152.0 192.8 L154.8 189.5 L157.6 186.2 L160.4 182.8 L163.2 179.3 L166.0 175.8 L168.8 172.2 L171.6 168.7 L174.4 165.1 L177.2 161.5 L180.0 157.9 L182.8 154.4 L185.6 150.9 L188.4 147.5 L191.2 144.1 L194.0 140.8 L196.8 137.6 L199.6 134.6 L202.4 131.6 L205.2 128.8 L208.0 126.2 L210.8 123.8 L213.6 121.5 L216.4 119.4 L219.2 117.5 L222.0 115.8 L224.8 114.4 L227.6 113.2 L230.4 112.2 L233.2 111.5 L236.0 111.0 L238.8 110.8 L241.6 110.8 L244.4 111.1 L247.2 111.6 L250.0 112.4 L252.8 113.4 L255.6 114.6 L258.4 116.1 L261.2 117.8 L264.0 119.7 L266.8 121.8 L269.6 124.1 L272.4 126.6 L275.2 129.2 L278.0 132.0 L280.8 135.0 L283.6 138.1 L286.4 141.3 L289.2 144.6 L292.0 147.9 L294.8 151.4 L297.6 154.9 L300.4 158.4 L303.2 162.0 L306.0 165.6 L308.8 169.2 L311.6 172.7 L314.4 176.3 L317.2 179.8 L320.0 183.3 L322.8 186.7 L325.6 190.0 L328.4 193.3 L331.2 196.5 L334.0 199.5 L336.8 202.6 L339.6 205.5 L342.4 208.3 L345.2 211.0 L348.0 213.5 L350.8 216.0 L353.6 218.4 L356.4 220.6 L359.2 222.8 L362.0 224.8 L364.8 226.7 L367.6 228.6 L370.4 230.3 L373.2 231.9 L376.0 233.4 L378.8 234.8 L381.6 236.1 L384.4 237.3 L387.2 238.4 L390.0 239.5 L392.8 240.5 L395.6 241.4 L398.4 242.2 L401.2 243.0 L404.0 243.7 L406.8 244.3 L409.6 244.9 L412.4 245.4 L415.2 245.9 L418.0 246.3 L420.8 246.7 L423.6 247.1 L426.4 247.4 L429.2 247.7 L432.0 248.0 L434.8 248.2 L437.6 248.4 L440.4 248.6 L443.2 248.8 L446.0 248.9 L448.8 249.1 L451.6 249.2 L454.4 249.3 L457.2 249.4 L460.0 249.5 L462.8 249.5 L465.6 249.6 L468.4 249.7 L471.2 249.7 L474.0 249.7 L476.8 249.8 L479.6 249.8 L482.4 249.8 L485.2 249.9 L488.0 249.9 L490.8 249.9 L493.6 249.9 L496.4 249.9 L499.2 249.9 L502.0 249.9 L504.8 250.0 L507.6 250.0 L510.4 250.0 L513.2 250.0 L516.0 250.0 L518.8 250.0 L521.6 250.0 L524.4 250.0 L527.2 250.0 L530.0 250.0 L532.8 250.0 L535.6 250.0 L538.4 250.0 L541.2 250.0 L544.0 250.0 L546.8 250.0 L549.6 250.0 L552.4 250.0 L555.2 250.0 L558.0 250.0 L560.8 250.0 L563.6 250.0 L566.4 250.0 L569.2 250.0 L572.0 250.0 L574.8 250.0 L577.6 250.0 L580.4 250.0 L583.2 250.0 L586.0 250.0 L588.8 250.0 L591.6 250.0 L594.4 250.0 L597.2 250.0 L600.0 250.0" fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 4"/>
<path d="M40.0 250.0 L42.8 250.0 L45.6 250.0 L48.4 250.0 L51.2 250.0 L54.0 250.0 L56.8 250.0 L59.6 250.0 L62.4 250.0 L65.2 250.0 L68.0 250.0 L70.8 250.0 L73.6 250.0 L76.4 250.0 L79.2 250.0 L82.0 250.0 L84.8 250.0 L87.6 250.0 L90.4 250.0 L93.2 250.0 L96.0 250.0 L98.8 250.0 L101.6 250.0 L104.4 250.0 L107.2 250.0 L110.0 250.0 L112.8 250.0 L115.6 250.0 L118.4 250.0 L121.2 250.0 L124.0 250.0 L126.8 250.0 L129.6 250.0 L132.4 250.0 L135.2 249.9 L138.0 249.9 L140.8 249.9 L143.6 249.9 L146.4 249.9 L149.2 249.9 L152.0 249.9 L154.8 249.8 L157.6 249.8 L160.4 249.8 L163.2 249.7 L166.0 249.7 L168.8 249.6 L171.6 249.5 L174.4 249.5 L177.2 249.4 L180.0 249.3 L182.8 249.2 L185.6 249.0 L188.4 248.9 L191.2 248.7 L194.0 248.5 L196.8 248.3 L199.6 248.0 L202.4 247.8 L205.2 247.4 L208.0 247.1 L210.8 246.7 L213.6 246.3 L216.4 245.8 L219.2 245.2 L222.0 244.6 L224.8 244.0 L227.6 243.2 L230.4 242.4 L233.2 241.5 L236.0 240.6 L238.8 239.5 L241.6 238.3 L244.4 237.1 L247.2 235.7 L250.0 234.2 L252.8 232.7 L255.6 230.9 L258.4 229.1 L261.2 227.2 L264.0 225.1 L266.8 222.8 L269.6 220.5 L272.4 218.0 L275.2 215.3 L278.0 212.5 L280.8 209.6 L283.6 206.6 L286.4 203.4 L289.2 200.0 L292.0 196.6 L294.8 193.0 L297.6 189.3 L300.4 185.6 L303.2 181.7 L306.0 177.7 L308.8 173.7 L311.6 169.6 L314.4 165.5 L317.2 161.3 L320.0 157.2 L322.8 153.0 L325.6 148.9 L328.4 144.8 L331.2 140.8 L334.0 136.9 L336.8 133.0 L339.6 129.3 L342.4 125.8 L345.2 122.4 L348.0 119.1 L350.8 116.1 L353.6 113.3 L356.4 110.7 L359.2 108.4 L362.0 106.3 L364.8 104.6 L367.6 103.0 L370.4 101.8 L373.2 100.9 L376.0 100.3 L378.8 100.0 L381.6 100.1 L384.4 100.4 L387.2 101.0 L390.0 102.0 L392.8 103.2 L395.6 104.8 L398.4 106.6 L401.2 108.7 L404.0 111.1 L406.8 113.7 L409.6 116.5 L412.4 119.6 L415.2 122.8 L418.0 126.3 L420.8 129.9 L423.6 133.6 L426.4 137.4 L429.2 141.4 L432.0 145.4 L434.8 149.5 L437.6 153.6 L440.4 157.8 L443.2 161.9 L446.0 166.1 L448.8 170.2 L451.6 174.3 L454.4 178.3 L457.2 182.2 L460.0 186.1 L462.8 189.9 L465.6 193.5 L468.4 197.1 L471.2 200.5 L474.0 203.8 L476.8 207.0 L479.6 210.0 L482.4 212.9 L485.2 215.7 L488.0 218.3 L490.8 220.8 L493.6 223.2 L496.4 225.4 L499.2 227.4 L502.0 229.4 L504.8 231.2 L507.6 232.9 L510.4 234.5 L513.2 235.9 L516.0 237.3 L518.8 238.5 L521.6 239.6 L524.4 240.7 L527.2 241.7 L530.0 242.5 L532.8 243.3 L535.6 244.1 L538.4 244.7 L541.2 245.3 L544.0 245.8 L546.8 246.3 L549.6 246.8 L552.4 247.1 L555.2 247.5 L558.0 247.8 L560.8 248.1 L563.6 248.3 L566.4 248.5 L569.2 248.7 L572.0 248.9 L574.8 249.0 L577.6 249.2 L580.4 249.3 L583.2 249.4 L586.0 249.5 L588.8 249.6 L591.6 249.6 L594.4 249.7 L597.2 249.7 L600.0 249.8" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="40" y1="250" x2="600" y2="250" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5"><line x1="80.0" y1="250" x2="80.0" y2="256"/><line x1="180.0" y1="250" x2="180.0" y2="256"/><line x1="280.0" y1="250" x2="280.0" y2="256"/><line x1="380.0" y1="250" x2="380.0" y2="256"/><line x1="480.0" y1="250" x2="480.0" y2="256"/><line x1="580.0" y1="250" x2="580.0" y2="256"/></g>
<g font-size="13" fill="#1d2b44" text-anchor="middle"><text x="80.0" y="271">0.60</text><text x="180.0" y="271">0.65</text><text x="280.0" y="271">0.70</text><text x="380.0" y="271">0.75</text><text x="480.0" y="271">0.80</text><text x="580.0" y="271">0.85</text></g>
<text x="320" y="300" text-anchor="middle" font-size="14" fill="#1d2b44">Sample proportion p̂ (n = 200)</text>
<line x1="279.2" y1="70" x2="279.2" y2="250" stroke="#1d2b44" stroke-width="1.5"/>
<text x="279.2" y="62" text-anchor="middle" font-size="12" fill="#1d2b44">cut-off p̂ = 0.6996</text>
<text x="271.2" y="44" text-anchor="end" font-size="12" fill="#1d2b44">← reject H₀</text>
<text x="287.2" y="44" text-anchor="start" font-size="12" fill="#1d2b44">fail to reject H₀ →</text>
<text x="420.0" y="105" text-anchor="start" font-size="12" fill="#1d2b44">solid: if H₀ true, p = 0.75</text>
<text x="195.0" y="105" text-anchor="end" font-size="12" fill="#1d2b44">dashed: if p = 0.68</text>
<text x="225" y="170" text-anchor="middle" font-size="12" fill="#1d2b44">power ≈ 0.72</text>
<line x1="356" y1="190" x2="318" y2="228" stroke="#1d2b44" stroke-width="1"/>
<text x="358" y="184" text-anchor="start" font-size="12" fill="#1d2b44">β ≈ 0.28 (dotted)</text>
<line x1="258" y1="228" x2="268" y2="243" stroke="#1d2b44" stroke-width="1"/>
<text x="255" y="224" text-anchor="end" font-size="12" fill="#1d2b44">α = 0.05 (hatched)</text>
</svg>
<figcaption>Figure 1. Illustration for Worked example 2, using a normal model for p̂. The test rejects H₀ when p̂ is at or below 0.6996. Hatched area under the solid curve: α, the chance of a Type I error if p really is 0.75. Dotted area under the dashed curve: β, the chance of a Type II error if p is really 0.68. The rest of the dashed curve is the power. You do not need to calculate these areas yourself in this course.</figcaption>
</figure>

## Consequences decide the design

The two errors usually have different consequences. Think about them **before** you collect the data, because they guide two design choices:

- **If a Type I error is more serious**, choose a small α (such as 0.01). Because α is the Type I error probability, the consequences of a Type I error drive the choice of α.
- **If a Type II error is more serious**, choose a larger α (such as 0.10) and, above all, a larger sample. Because the sample size affects the Type II error probability, the consequences of a Type II error drive the choice of n.

## Worked example 1: describing errors and their consequences

**Context (fictional).** The air-quality office of the fictional city of Corlan will limit traffic in the city centre if more than 10% of summer days have ozone above a health threshold. It selects a random sample of summer days from recent years and tests H₀: p = 0.10 against Hₐ: p > 0.10, where p is the true proportion of summer days with ozone above the threshold.

**Question.** (a) Describe a Type I error and a Type II error in context. (b) Give a consequence of each. (c) Which error is more serious? Use your answer to suggest α = 0.01 or α = 0.10.

**(a)**

- **Type I error:** the office finds convincing evidence that more than 10% of summer days have ozone above the threshold, when really the proportion is 10%.
- **Type II error:** the office does not find convincing evidence that more than 10% of summer days are above the threshold, when really the proportion is greater than 10%.

**(b)**

- **Type I consequence:** the city limits traffic when it is not needed. Businesses and commuters face disruption and cost for no health benefit.
- **Type II consequence:** the city does not limit traffic when it should. Residents, especially people with breathing problems, are exposed to more high-ozone days.

**(c)** A Type II error puts people's health at risk, while a Type I error mainly costs money and convenience. Most people would judge the **Type II error** more serious. To reduce its probability, the office should use the larger significance level, **α = 0.10**, and collect as many days of data as it can.

**Check.** Each error statement says what the test concluded *and* what is actually true, and both refer to the parameter (the proportion of summer days) and the population (Corlan's summer days). Another answer can earn credit if it is well argued, for example that unnecessary traffic limits would damage public trust. What matters is linking the more serious error to the choice of α.

## Worked example 2: probabilities of errors and power

**Context (fictional).** Pinecrest Water says that 75% of its customers are satisfied with its service. A consumer watchdog suspects the true proportion is lower. It plans to survey a random sample of 200 customers and test H₀: p = 0.75 against Hₐ: p < 0.75 at α = 0.05. Its statistician uses software to find the power of the test if the true proportion is 0.68. She also finds the power after changing one feature of the plan at a time.

| Plan (one change at a time) | Power | P(Type II error) |
|---|---|---|
| Original: n = 200, α = 0.05, true p = 0.68 | 0.72 | 0.28 |
| n = 400 | 0.93 | 0.07 |
| α = 0.10 | 0.82 | 0.18 |
| α = 0.01 | 0.49 | 0.51 |
| True p = 0.65 | 0.93 | 0.07 |

**Question.** (a) For the original plan, what is the probability of a Type I error? (b) Find the probability of a Type II error if p = 0.68, and interpret the power. (c) Use the table to explain how each change affects the power. (d) The watchdog wants power of at least 0.80 against p = 0.68 without raising the chance of a Type I error. What should it do?

**(a)** P(Type I error) = α = **0.05**. If 75% of customers really are satisfied, there is a 5% chance the watchdog wrongly finds convincing evidence that fewer than 75% are satisfied.

**(b)** P(Type II error) = 1 − 0.72 = **0.28**. Interpretation of power: if the true proportion of satisfied Pinecrest customers is 0.68, there is a 0.72 probability that the test will find convincing evidence that the proportion is less than 0.75.

**(c)**

- Doubling the sample size raises the power from 0.72 to 0.93, because p̂ varies less, so the standard error is smaller.
- Raising α to 0.10 raises the power to 0.82, but the Type I error probability doubles to 0.10.
- Lowering α to 0.01 cuts the power to 0.49, so a Type II error becomes more likely than not.
- If the true proportion is 0.65 (further from 0.75), the power is 0.93. Bigger departures from p₀ are easier to detect.

**(d)** Increase the sample size. With n = 400 the power is 0.93 against p = 0.68, well above 0.80, and α stays at 0.05. Raising α would also give power above 0.80, but it increases the Type I error probability, which the watchdog wants to avoid.

**Check.** In every row, power + P(Type II error) = 1. Changing α changes the power in the same direction: larger α, larger power.

## Common misconceptions

- **"α is the probability that H₀ is true."** α is the probability of rejecting H₀ *if* H₀ is true.
- **"Power is the probability that Hₐ is true."** Power is the probability of rejecting H₀ *if* a particular alternative value is true.
- **"P(Type II error) = 1 − α."** 1 − α is the probability of a correct decision when H₀ is true. P(Type II) = 1 − power.
- **Describing an error without context.** "Rejecting H₀ when it is true" earns little. Say what is concluded and what is true, using the parameter and population.
- **Describing the decision only.** "The test concludes the proportion is greater than 0.10" is not an error until you add "when really it is 0.10".
- **"A smaller α is always better."** It lowers the Type I risk but raises the Type II risk unless n increases.
- **"After failing to reject H₀ I might have made a Type I error."** A Type I error needs a rejection. Only a Type II error is possible here.
- **"Larger samples reduce α."** α is chosen by the researcher. A larger n increases the power; it does not change α.

## Where this leads

Next you will extend inference to two populations, starting with [Topic 3.9, the sampling distribution for a difference between sample proportions](/advanced-course-resources/statistics/3-9-sampling-distributions-difference-between-sample-study-guide/). Type I and Type II errors and power apply to every significance test in the course, including chi-square tests and tests about means. To revise the decision step, look back at [Topic 3.7](/advanced-course-resources/statistics/3-7-carrying-out-test-population-proportion-study-guide/). Try the [practice questions](/advanced-course-resources/statistics/3-8-potential-errors-when-performing-tests-practice/) now, then use the [revision notes](/advanced-course-resources/statistics/3-8-potential-errors-when-performing-tests-revision-notes/) and the [checklist](/advanced-course-resources/statistics/3-8-potential-errors-when-performing-tests-checklist/) to consolidate.
