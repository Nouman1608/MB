---
resourceId: "mb-ap-stats-3.4-study-guide"
title: "Justifying a Claim Based on a Confidence Interval for a Population Proportion: Study Guide (Statistics 3.4)"
description: "Learn to interpret a confidence interval and a confidence level in context, use an interval to judge a claim about a proportion, and predict how sample size and confidence level change the width."
course: "statistics"
unit: 3
topics: ["3.4"]
resourceType: "study-guide"
prerequisites:
  - "Constructing a one-sample z-interval for a population proportion (Topic 3.3)"
  - "The critical value z* and the margin of error z* × SE"
prerequisiteResources: ["mb-ap-stats-3.3-study-guide"]
learningObjectives:
  - "Interpret a confidence interval for a population proportion in context, naming the parameter and the population"
  - "Interpret the confidence level as the long-run capture rate of the method in repeated random sampling"
  - "Explain why one computed interval may or may not contain the population proportion"
  - "Use the plausible values in an interval to decide whether there is convincing evidence for or against a claim"
  - "Predict how changing the confidence level or the sample size changes the critical value, the margin of error and the width"
skills: ["2", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "graphing"
calculatorNote: "Use the same calculator steps as Topic 3.3: z* = invNorm((1 + C)/2) and a one-proportion z-interval function to check. Give interval endpoints to 3 decimal places."
related: ["mb-ap-stats-3.4-revision-notes", "mb-ap-stats-3.4-practice", "mb-ap-stats-3.4-checklist"]
next: "mb-ap-stats-3.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Interval: “We are C% confident that the interval from a to b captures the [proportion of population who …].”"
  - "Confidence level: in repeated random samples of the same size, about C% of intervals built this way capture p."
  - "A value inside the interval is plausible; a value outside it is not, which gives convincing evidence against a claim that p equals it."
  - "Higher confidence means a larger z*, a larger margin of error and a wider interval."
  - "Larger samples give smaller standard errors; the width is roughly proportional to 1/√n, so 4 times the sample halves the width."
faqs:
  - question: "Can I say there is a 95% probability that p is in my interval?"
    answer: "No. Once the interval is calculated, p is either inside it or not; nothing is random any more. The 95% describes the method: about 95% of intervals made this way, from many random samples, capture p."
  - question: "If the claimed value is inside the interval, has the claim been proved?"
    answer: "No. A value inside the interval is plausible, so the data give no convincing evidence against the claim. But many other values are plausible too, so the claim is not proved."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## What a confidence interval does and does not tell you

In Topic 3.3 you built intervals of the form p̂ ± z* √[p̂(1 − p̂)/n]. Now you need to say what an interval **means**, and use it to make a decision.

Start with one fact. The population proportion p is a fixed number. The interval changes from sample to sample, because p̂ does. So any one interval you calculate **may or may not** contain p. You never find out which, because you do not know p.

That is why statistics uses the word **confidence**, not probability, for a single interval. Confidence describes how reliable the **method** is, not one particular result.

## Interpreting the interval

An interpretation of a C% confidence interval for p has three parts:

1. the confidence level, C%;
2. the interval, from the lower limit a to the upper limit b;
3. the parameter **in context**: the proportion, the response and the population.

A reliable template:

> **We are C% confident that the interval from a to b captures the proportion of all [population] who [response].**

For example: "We are 95% confident that the interval from 0.538 to 0.602 captures the proportion of all adult residents of Brennock who support the new park."

Avoid "the interval captures p̂" or "the proportion of the 900 residents". The sample proportion is the centre of the interval, so the interval always contains it. The interpretation is about the **population**.

## Interpreting the confidence level

The confidence level answers the question: "How often does this method work?"

> **If we took many random samples of the same size from this population and built a C% interval from each one, about C% of those intervals would capture the true proportion.**

Figure 1 shows this. A computer took 20 random samples of 150 people from a population in which p = 0.40 is known, and built a 95% interval from each.

<figure>
<svg viewBox="0 0 640 330" role="img" aria-labelledby="sim-title sim-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="sim-title">Twenty simulated 95% confidence intervals for a proportion of 0.40</title>
<desc id="sim-desc">Twenty horizontal line segments, one per simulated sample of 150, stacked from top to bottom over a horizontal axis from 0.20 to 0.60. A dot on each segment marks its sample proportion. A vertical line marks the true proportion, 0.40. Nineteen segments are solid and cross the vertical line. Sample 16 is drawn dashed, runs from 0.245 to 0.395, stops just short of 0.40 and is labelled "misses p". Samples 10 and 19 end at 0.402, only just reaching the line.</desc>
<rect x="0" y="0" width="640" height="330" fill="#ffffff"/>
<line x1="340" y1="22" x2="340" y2="280" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 3"/>
<text x="340" y="16" text-anchor="middle" font-size="13" fill="#1d2b44">true p = 0.40</text>
<line x1="263.3" y1="34" x2="468.7" y2="34" stroke="#1d2b44" stroke-width="2.5"/><circle cx="366.0" cy="34" r="3" fill="#1d2b44"/>
<line x1="305.8" y1="46" x2="512.9" y2="46" stroke="#1d2b44" stroke-width="2.5"/><circle cx="409.3" cy="46" r="3" fill="#1d2b44"/>
<line x1="271.8" y1="58" x2="477.6" y2="58" stroke="#1d2b44" stroke-width="2.5"/><circle cx="374.7" cy="58" r="3" fill="#1d2b44"/>
<line x1="229.7" y1="70" x2="433.0" y2="70" stroke="#1d2b44" stroke-width="2.5"/><circle cx="331.3" cy="70" r="3" fill="#1d2b44"/>
<line x1="188.1" y1="82" x2="387.9" y2="82" stroke="#1d2b44" stroke-width="2.5"/><circle cx="288.0" cy="82" r="3" fill="#1d2b44"/>
<line x1="254.9" y1="94" x2="459.8" y2="94" stroke="#1d2b44" stroke-width="2.5"/><circle cx="357.3" cy="94" r="3" fill="#1d2b44"/>
<line x1="263.3" y1="106" x2="468.7" y2="106" stroke="#1d2b44" stroke-width="2.5"/><circle cx="366.0" cy="106" r="3" fill="#1d2b44"/>
<line x1="297.2" y1="118" x2="504.1" y2="118" stroke="#1d2b44" stroke-width="2.5"/><circle cx="400.7" cy="118" r="3" fill="#1d2b44"/>
<line x1="254.9" y1="130" x2="459.8" y2="130" stroke="#1d2b44" stroke-width="2.5"/><circle cx="357.3" cy="130" r="3" fill="#1d2b44"/>
<line x1="147.1" y1="142" x2="342.2" y2="142" stroke="#1d2b44" stroke-width="2.5"/><circle cx="244.7" cy="142" r="3" fill="#1d2b44"/>
<line x1="213.0" y1="154" x2="415.0" y2="154" stroke="#1d2b44" stroke-width="2.5"/><circle cx="314.0" cy="154" r="3" fill="#1d2b44"/>
<line x1="263.3" y1="166" x2="468.7" y2="166" stroke="#1d2b44" stroke-width="2.5"/><circle cx="366.0" cy="166" r="3" fill="#1d2b44"/>
<line x1="246.5" y1="178" x2="450.9" y2="178" stroke="#1d2b44" stroke-width="2.5"/><circle cx="348.7" cy="178" r="3" fill="#1d2b44"/>
<line x1="196.4" y1="190" x2="396.9" y2="190" stroke="#1d2b44" stroke-width="2.5"/><circle cx="296.7" cy="190" r="3" fill="#1d2b44"/>
<line x1="322.9" y1="202" x2="530.5" y2="202" stroke="#1d2b44" stroke-width="2.5"/><circle cx="426.7" cy="202" r="3" fill="#1d2b44"/>
<line x1="139.0" y1="214" x2="333.0" y2="214" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="5 3"/><circle cx="236.0" cy="214" r="3" fill="#1d2b44"/>
<text x="133" y="218" text-anchor="end" font-size="12" fill="#1d2b44">16: misses p</text>
<line x1="171.7" y1="226" x2="369.7" y2="226" stroke="#1d2b44" stroke-width="2.5"/><circle cx="270.7" cy="226" r="3" fill="#1d2b44"/>
<line x1="254.9" y1="238" x2="459.8" y2="238" stroke="#1d2b44" stroke-width="2.5"/><circle cx="357.3" cy="238" r="3" fill="#1d2b44"/>
<line x1="147.1" y1="250" x2="342.2" y2="250" stroke="#1d2b44" stroke-width="2.5"/><circle cx="244.7" cy="250" r="3" fill="#1d2b44"/>
<line x1="221.4" y1="262" x2="424.0" y2="262" stroke="#1d2b44" stroke-width="2.5"/><circle cx="322.7" cy="262" r="3" fill="#1d2b44"/>
<line x1="80" y1="280" x2="600" y2="280" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="80" y1="280" x2="80" y2="287"/><line x1="145" y1="280" x2="145" y2="287"/><line x1="210" y1="280" x2="210" y2="287"/><line x1="275" y1="280" x2="275" y2="287"/><line x1="340" y1="280" x2="340" y2="287"/><line x1="405" y1="280" x2="405" y2="287"/><line x1="470" y1="280" x2="470" y2="287"/><line x1="535" y1="280" x2="535" y2="287"/><line x1="600" y1="280" x2="600" y2="287"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="80" y="302">0.20</text><text x="145" y="302">0.25</text><text x="210" y="302">0.30</text><text x="275" y="302">0.35</text><text x="340" y="302">0.40</text><text x="405" y="302">0.45</text><text x="470" y="302">0.50</text><text x="535" y="302">0.55</text><text x="600" y="302">0.60</text>
</g>
<text x="340" y="322" text-anchor="middle" font-size="13" fill="#1d2b44">Proportion</text>
</svg>
<figcaption>Figure 1. Twenty simulated 95% intervals from samples of 150 when p = 0.40. Nineteen (solid) capture 0.40; one (dashed, sample 16) does not. In the long run about 95% capture p, but in any short run the count varies.</figcaption>
</figure>

Two things to notice:

- 19 of the 20 intervals (95%) capture p here. In a different run you might see 18 or 20. The 95% is a **long-run** rate.
- Interval 16 looks just like the others. If it were your only sample, nothing would tell you it had missed. That is the "may or may not contain p" idea in action.

## Using an interval to justify a claim

An interval gives a range of **plausible values** for p. Compare a claimed value with the interval:

| Where the claimed value lies | What you can conclude |
|---|---|
| **Outside** the interval | The claimed value is not plausible. The interval gives **convincing evidence against** the claim that p equals it. |
| **Inside** the interval | The claimed value is plausible. There is **no convincing evidence against** the claim. This does **not** prove the claim, because other values are plausible too. |

Many claims are about a direction, such as "a majority" (p > 0.5) or "less than a quarter" (p < 0.25). Then check where the **whole interval** lies:

- every plausible value satisfies the claim → convincing evidence **for** the claim;
- the interval straddles the boundary → not convincing evidence either way;
- every plausible value contradicts the claim → convincing evidence **against** it.

Always finish with a sentence in context that refers to the interval.

## How confidence level and sample size change the interval

The margin of error is z* × √[p̂(1 − p̂)/n]. Change one piece and the others follow.

| Change (all else the same) | z* | Standard error | Margin of error and width |
|---|---|---|---|
| Increase the confidence level | increases | no change | increase |
| Decrease the confidence level | decreases | no change | decrease |
| Increase the sample size n | no change | decreases | decrease |

The width is roughly proportional to **1/√n**. Multiplying n by 4 roughly halves the width; multiplying n by 9 cuts it to about a third. To get more confidence **and** a narrow interval, you need a bigger sample.

<figure>
<svg viewBox="0 0 640 220" role="img" aria-labelledby="levels-title levels-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="levels-title">Three confidence intervals from the same sample at 90%, 95% and 99%</title>
<desc id="levels-desc">A horizontal axis from 0.50 to 0.70. Three horizontal segments centred on the sample proportion 0.57. The 90% interval runs from 0.543 to 0.597, the 95% interval from 0.538 to 0.602, and the 99% interval from 0.527 to 0.613. Dotted vertical reference lines mark 0.50, 0.60 and two-thirds (about 0.667). All three intervals lie entirely above 0.50 and entirely below 0.667. The 0.60 line falls outside the 90% interval but inside the 95% and 99% intervals.</desc>
<rect x="0" y="0" width="640" height="220" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="2 3">
<line x1="80" y1="30" x2="80" y2="170"/><line x1="340" y1="30" x2="340" y2="170"/><line x1="513.3" y1="30" x2="513.3" y2="170"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="80" y="22">0.50 (half)</text><text x="340" y="22">0.60</text><text x="513.3" y="22">2/3 ≈ 0.667</text>
</g>
<line x1="191.8" y1="60" x2="332.2" y2="60" stroke="#1d2b44" stroke-width="4"/>
<line x1="178.8" y1="95" x2="345.2" y2="95" stroke="#1d2b44" stroke-width="4"/>
<line x1="150.2" y1="130" x2="373.8" y2="130" stroke="#1d2b44" stroke-width="4"/>
<circle cx="262" cy="60" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="262" cy="95" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="262" cy="130" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44">
<text x="390" y="64">90%: 0.543 to 0.597</text><text x="390" y="99">95%: 0.538 to 0.602</text><text x="390" y="134">99%: 0.527 to 0.613</text>
</g>
<line x1="80" y1="170" x2="600" y2="170" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="80" y1="170" x2="80" y2="177"/><line x1="210" y1="170" x2="210" y2="177"/><line x1="340" y1="170" x2="340" y2="177"/><line x1="470" y1="170" x2="470" y2="177"/><line x1="600" y1="170" x2="600" y2="177"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="80" y="193">0.50</text><text x="210" y="193">0.55</text><text x="340" y="193">0.60</text><text x="470" y="193">0.65</text><text x="600" y="193">0.70</text>
<text x="340" y="213">Proportion of Brennock adults who support the park</text>
</g>
</svg>
<figcaption>Figure 2. The same sample (p̂ = 0.57, n = 900) gives wider intervals at higher confidence. Each interval is centred on p̂ (open circle). Text labels give each confidence level, so the figure does not rely on colour.</figcaption>
</figure>

## Worked example 1: interpreting an interval and judging three claims

**Context.** Brennock, a fictional town of about 12,000 adults, plans a new park. The council asked a random sample of 900 adult residents; 513 said they support the park. The conditions for a z-interval are met: the sample is random, 900 ≤ 10% of 12,000 = 1,200, and 513 successes and 387 failures are both at least 10.

**(a) Construct and interpret a 95% interval.**

1. p̂ = 513 ÷ 900 = 0.57.
2. SE = √(0.57 × 0.43 ÷ 900) = 0.0165.
3. MOE = 1.960 × 0.0165 = 0.0323.
4. Interval: 0.57 ± 0.0323 = (0.538, 0.602).

**Interpretation.** We are 95% confident that the interval from 0.538 to 0.602 captures the proportion of all adult residents of Brennock who support the new park.

**(b) Interpret the confidence level.** If the council took many random samples of 900 adults and built a 95% interval from each, about 95% of those intervals would capture the true proportion of Brennock adults who support the park.

**(c) Judge three claims.**

1. *"A majority of adults support the park."* Every value in (0.538, 0.602) is above 0.5. The interval gives **convincing evidence** that more than half of Brennock's adults support the park.
2. *"Exactly 60% support the park."* 0.60 is inside the interval, so it is plausible. There is **no convincing evidence against** this claim. But values such as 0.55 are plausible too, so the claim is not proved.
3. *"At least two-thirds support the park."* Two-thirds is about 0.667, above the whole interval. The interval gives **convincing evidence against** this claim.

**Check with Figure 2.** At 90% the interval (0.543, 0.597) excludes 0.60, so claim 2 would be judged differently at a lower confidence level. Claims 1 and 3 reach the same conclusion at all three levels.

## Worked example 2: predicting the effect of changes

**Context.** A fictional survey of 400 randomly chosen adults found p̂ = 0.30. The 95% interval is 0.30 ± 0.0449, that is (0.255, 0.345), with standard error 0.02291.

**(a) Same data, 99% confidence.** z* rises from 1.960 to 2.576. The standard error is unchanged. MOE = 2.576 × 0.02291 = 0.0590, so the interval (0.241, 0.359) is wider. The margin of error grows by a factor of 2.576 ÷ 1.960 ≈ 1.31.

**(b) Same data, 90% confidence.** z* = 1.645. MOE = 1.645 × 0.02291 = 0.0377, giving (0.262, 0.338). Lower confidence, narrower interval.

**(c) 95% confidence, but n = 1,600 with the same p̂.** n is 4 times larger, so the standard error is divided by √4 = 2: SE = 0.01146. MOE = 1.960 × 0.01146 = 0.0225, half of 0.0449. The interval is (0.278, 0.322).

**(d) What sample size cuts the 95% margin of error to about a third?** Divide the width by 3 by multiplying n by 3² = 9: n = 3,600. Check: MOE = 1.960 × √(0.3 × 0.7 ÷ 3,600) = 0.0150, which is one third of 0.0449.

**Lesson.** You cannot get higher confidence for free. With a fixed sample, more confidence means a wider, less precise interval. Only a larger sample gives both.

## Worked example 3: judging four written interpretations

**Context.** A fictional sports league selected 240 of its registered players at random; 30% said they had had a minor injury this season. The 90% interval for the proportion of all registered players with a minor injury this season is (0.251, 0.349). Four students wrote these sentences. Which are correct?

1. *"We are 90% confident that the interval from 0.251 to 0.349 captures the proportion of all registered players in the league who had a minor injury this season."* **Correct.** It names the level, both endpoints and the population proportion in context.
2. *"There is a 90% chance that between 25.1% and 34.9% of players were injured."* **Wrong.** It treats the fixed population proportion as random. The 90% belongs to the method.
3. *"90% of the 240 players had injury rates between 0.251 and 0.349."* **Wrong.** It describes individuals, and the sample instead of the population.
4. *"In many random samples of 240 players, about 90% of the 90% intervals built would capture the true proportion of injured players."* **Correct.** This interprets the confidence level, not the interval, and it does so properly.

**Then judge a claim.** The league's insurer assumes that 35% of players are injured each season. 0.35 is just above the upper limit, 0.349, so at 90% confidence it is not plausible: the interval gives convincing evidence that the true proportion is lower than 35%. At 95% the interval is (0.242, 0.358), which does include 0.35, so the conclusion is borderline. State the confidence level with every conclusion.

## Conditions still matter

Everything on this page assumes the interval was built correctly. If the sample was not random, the confidence level has no meaning, because the long-run capture rate relies on random sampling. If the large-counts condition fails, the true capture rate can be well below the stated C%. And the margin of error only allows for random sampling variation. It cannot rescue a biased sample, a leading question or a high non-response rate.

## Common misconceptions

- **"There is a 95% probability that p is in this interval."** After you calculate it, the interval either contains p or it does not. Say "95% confident", and explain the 95% as the long-run capture rate of the method.
- **"95% of the population (or sample) have values between a and b."** The interval estimates one number, the population proportion. It says nothing about individuals.
- **"95% of sample proportions fall in this interval."** The capture rate is about intervals capturing p, not about where other p̂ values land.
- **"The claimed value is in the interval, so the claim is true."** Inside means plausible, not proved.
- **"A higher confidence level gives a more precise interval."** It gives a wider, less precise interval.
- **"Doubling the sample size halves the margin of error."** Doubling n divides the margin of error by √2 ≈ 1.41. You need 4 times the sample to halve it.
- **"Increasing the confidence level changes the standard error."** The standard error depends only on p̂ and n. The confidence level changes z*.
- **Interpreting the interval without context.** Name the proportion, the response and the population every time.

## Where this leads

Next, Topic 3.5 sets up a significance test for a population proportion, which asks a related question in a different way: [Setting Up a Test for a Population Proportion](/advanced-course-resources/statistics/3-5-setting-up-test-population-proportion-study-guide/). Try the [practice questions](/advanced-course-resources/statistics/3-4-justifying-claim-based-on-confidence-practice/) now, then use the [revision notes](/advanced-course-resources/statistics/3-4-justifying-claim-based-on-confidence-revision-notes/) and the [checklist](/advanced-course-resources/statistics/3-4-justifying-claim-based-on-confidence-checklist/) to consolidate. To review how the interval is built, return to [Topic 3.3](/advanced-course-resources/statistics/3-3-constructing-confidence-interval-population-proportion-study-guide/).
