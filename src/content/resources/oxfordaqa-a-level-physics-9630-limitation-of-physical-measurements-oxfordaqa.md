---
title: "OxfordAQA A-Level Physics (9630): Limitation of physical measurements"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.1 – Measurements and Their Errors"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
stage: "AS"
order: 1.2
syllabusTopics:
  - qualification: "a-level"
    topic: "measurements-and-their-errors-oxfordaqa-alevel"
    subtopic: "limitation-of-physical-measurements-oxfordaqa"
description: "OxfordAQA 9630 subtopic 3.1.2 in depth: random and systematic errors, precision versus accuracy, combining uncertainties and gradient and intercept uncertainty."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to iftikhar-azeemi (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into **3.1.2 Limitation of physical measurements** in Section 3.1 of the OxfordAQA International AS and A-level Physics (9630) specification. It is International AS content, assessed in Unit 1, and its skills return in every practical-based question, including the data analysis section of Unit 1 and the whole of Unit 5 (Physics in practice).

When you have read the guide, condense it with the [limitation of physical measurements revision notes](/resources/oxfordaqa-a-level-physics-9630-limitation-of-physical-measurements-oxfordaqa-revision-notes/) and test yourself with the [limitation of physical measurements practice questions](/resources/oxfordaqa-a-level-physics-9630-limitation-of-physical-measurements-oxfordaqa-practice/). For the whole of Section 3.1, see the [measurements and their errors study guide](/resources/a-level-oxfordaqa-physics-measurements-and-their-errors/).

## What the specification asks for

The subtopic lists:

- identification of random and systematic errors, and suggestions for removing them
- precision, repeatability, reproducibility, resolution and accuracy
- absolute, fractional and percentage uncertainties to represent uncertainty in a final answer
- combining absolute and percentage uncertainties when measurements are added, subtracted, multiplied, divided or raised to powers
- error bars on graphs, and the uncertainties in the gradient and intercept of a straight-line graph, with or without error bars
- the link between the number of significant figures in a value and its uncertainty.

Combinations involving trigonometric or logarithmic functions are not required.

## Random and systematic errors

| | Random error | Systematic error |
|---|---|---|
| Effect | Readings scatter unpredictably either side of the true value | Every reading is shifted the same way, by the same amount or the same proportion |
| Examples | Judging the moment a ball passes a mark; small fluctuations in a reading; variations in a wire's diameter along its length | A zero error on a micrometer; a metre rule read from one side (consistent parallax); a balance that reads 0.02 g with nothing on it |
| Shows up as | Spread in repeated readings; points scattered about a line | A non-zero intercept where theory predicts zero; readings consistently above or below an accepted value |
| Reduced by | Repeating and averaging; using a larger quantity so the error is a smaller fraction; plotting a graph and drawing a line of best fit | Checking and correcting zero errors; calibrating instruments; reading scales at eye level; changing the method |

Repeating readings **does not** remove a systematic error. If the stopwatch always starts late, the mean is late too.

### Worked example 1: diagnosing an error

**Situation.** A student measures the length of a spring with a metre rule whose end is worn, so the zero mark is 2 mm in from the end. She places the end of the rule, not the zero mark, against the top of the spring.

**Diagnosis.** Every length is 2 mm too large: a systematic zero error. Repeats will agree well with each other (good precision) but all be wrong (poor accuracy). The fix is to measure from a clear mark on the scale, or to subtract 2 mm from every reading. On a graph of length against load, the intercept would be 2 mm higher than the true natural length, while the gradient would be unaffected.

## Five words to use precisely

- **Precise**: repeated measurements show very little spread about their mean. Precision depends only on random errors.
- **Repeatable**: the same experimenter, using the same method and equipment, obtains the same results.
- **Reproducible**: the same results are obtained by a different experimenter, or with a different technique or different equipment.
- **Resolution**: the smallest change in the quantity being measured that gives a perceptible change in the reading. A micrometer has a resolution of 0.01 mm; a metre rule, 1 mm.
- **Accurate**: close to the true value.

Precision is not accuracy. A set of readings can be precise but inaccurate (a systematic error), or imprecise but with a mean close to the true value (large random error, no systematic error).

## Uncertainty in a single measurement

- **Analogue scale**: about ± half the smallest division per reading. A length found from two readings on a rule (one at each end) has an uncertainty of ±1 mm.
- **Digital instrument**: ± the resolution, the last digit shown.
- **Repeated readings**: ± half the range, (largest − smallest)/2, about the mean. If this is smaller than the resolution, quote the resolution instead.

**Three ways to express it.** For t = 2.40 ± 0.05 s:

- absolute uncertainty: ±0.05 s
- fractional uncertainty: 0.05/2.40 = 0.021
- percentage uncertainty: 0.021 × 100 = 2.1%

## Combining uncertainties

| Operation | Rule |
|---|---|
| y = a + b or y = a − b | Add the **absolute** uncertainties |
| y = ab or y = a/b | Add the **percentage** (or fractional) uncertainties |
| y = aⁿ | Multiply the percentage uncertainty by n |
| y = ka, k an exact constant | Percentage uncertainty unchanged |

Uncertainties always add, even when quantities are subtracted.

### Worked example 2: a difference

**Question.** A thermometer reads 19.5 ± 0.5 °C before heating and 47.0 ± 0.5 °C after. Find the temperature rise and its percentage uncertainty.

**Method.** Rise = 47.0 − 19.5 = 27.5 °C. Absolute uncertainty = 0.5 + 0.5 = 1.0 °C. Percentage = 1.0/27.5 × 100 = **3.6%**. Result: **27.5 ± 1.0 °C**.

**Comment.** Each reading alone is uncertain by only 1 to 3%, but the difference is uncertain by 3.6%. Subtracting two similar values magnifies the percentage uncertainty, which is why a larger temperature rise gives a better experiment.

### Worked example 3: a power of three

**Question.** A steel ball has diameter d = 12.50 ± 0.01 mm (micrometer) and mass m = 8.17 ± 0.01 g. Its density is ρ = m ÷ (πd³/6). Find ρ with its absolute uncertainty.

**Method.**

1. % uncertainty in d = 0.01/12.50 × 100 = 0.08%; in d³, 3 × 0.08 = 0.24%.
2. % uncertainty in m = 0.01/8.17 × 100 = 0.12%.
3. π and 6 are exact, so % uncertainty in ρ = 0.24 + 0.12 = 0.36%.
4. ρ = 8.17 × 10⁻³ ÷ (π × (12.50 × 10⁻³)³ ÷ 6) = 7989 kg m⁻³.
5. Absolute uncertainty = 0.0036 × 7989 = 29 kg m⁻³, rounded to 3 × 10¹.
6. Result: **ρ = (7.99 ± 0.03) × 10³ kg m⁻³**.

**Comment.** The uncertainty fixes how many figures the answer deserves. With ±30, quoting 7989 implies a precision the data do not have; three significant figures matches the uncertainty.

## Significant figures and uncertainty

Give the uncertainty to one significant figure (occasionally two), then round the value to the same decimal place. 9.7234 ± 0.3 m s⁻² should be written **9.7 ± 0.3 m s⁻²**. In a calculation without stated uncertainties, give the answer to the same number of significant figures as the least precise data value.

## Uncertainty on a graph

**Error bars** extend above and below (or either side of) a point by its absolute uncertainty. Draw:

- the **line of best fit** through the points
- the **steepest** and **shallowest** straight lines that still pass through every error bar (without error bars: the steepest and shallowest lines that still fit the scatter of points reasonably).

Uncertainty in the gradient = (steepest − shallowest)/2. Some teachers use the difference between the best-fit gradient and the worst acceptable gradient; either is an accepted approach, so state which you used. The **intercept** uncertainty is found the same way, from the intercepts of the worst lines.

### Worked example 4: free-fall graph

**Data (invented for this example).** A student plots drop height s against t² for a falling ball. Best-fit gradient 4.86 m s⁻², intercept 0.012 m. Steepest acceptable line: gradient 5.02 m s⁻², intercept −0.010 m. Shallowest: gradient 4.71 m s⁻², intercept 0.034 m.

**Method.**

1. Gradient uncertainty = (5.02 − 4.71)/2 = 0.16 m s⁻², which is 0.16/4.86 × 100 = 3.2%.
2. Since s = ½gt², gradient = g/2, so g = 2 × 4.86 = 9.72 m s⁻². Doubling is exact, so % uncertainty stays 3.2%: ±0.31 m s⁻².
3. Result: **g = 9.7 ± 0.3 m s⁻²**.
4. Intercept uncertainty = (0.034 − (−0.010))/2 = 0.022 m, so intercept = 0.012 ± 0.022 m.

**Interpretation.** Zero lies inside the intercept's range, so the graph gives no evidence of a systematic error in the height. Had the intercept been, say, 0.05 ± 0.02 m, you would suspect a consistent error in measuring s.

## Common mistakes

- Saying repeat readings reduce systematic error.
- Using "accurate" and "precise" as synonyms, or "reliable" in place of either.
- Adding percentage uncertainties for a sum or difference.
- Forgetting to multiply by the power, such as 3 for d³.
- Quoting an answer to five significant figures with an uncertainty in the second.
- Drawing worst-fit lines that miss some error bars.
- Describing an error without saying how it affects the result, or how to remove it.

## Exam technique for OxfordAQA command words

- **Identify**: name the error type and its source, such as "systematic: zero error on the micrometer".
- **Suggest**: give a specific improvement linked to the error: "use a micrometer, resolution 0.01 mm, instead of a ruler, to reduce the percentage uncertainty in the diameter".
- **Calculate**: show the percentage uncertainty for each measured quantity before combining them.
- **Evaluate**: identify the largest source of uncertainty and say whether the conclusion is justified within it.
- **Explain**: link cause to effect, such as "the temperature rise is a difference of two readings, so their absolute uncertainties add".

## Where this subtopic leads

The same rules apply in every required practical. For units and prefixes, see the [SI units and prefixes study guide](/resources/oxfordaqa-a-level-physics-9630-use-of-si-units-and-their-prefixes-oxfordaqa/); for order-of-magnitude reasoning, the [estimation of physical quantities study guide](/resources/oxfordaqa-a-level-physics-9630-estimation-of-physical-quantities-oxfordaqa/).
