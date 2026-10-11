---
title: "OCR A Level Mathematics A: Laws of logarithms, exponential equations, linear form and modelling (H240) -- Revision Notes"
seoTitle: "OCR A Level Maths Log Laws and Linear Form Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Laws of logarithms, exponential equations, reduction to linear form and growth/decay modelling"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 115
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-ocr-alevel-maths"
    subtopic: "exponentials-and-logarithms-ocr-alevel-maths"
description: "Condensed revision notes on log laws, exponential equations, log graphs and growth and decay models for OCR A Level Mathematics A, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These revision notes condense sections 1.06f to 1.06i of the OCR A Level Mathematics A specification (Version 3.1, August 2026, for first assessment in 2018): laws of logarithms, exponential equations, reduction to linear form and exponential modelling. All four are listed as Stage 1, so they are common to AS and A Level. For full explanations and fully worked examples, read the [study guide](/resources/ocr-a-level-mathematics-laws-of-logarithms-exponential-equations-reduction-to/) first.

Then test yourself with the [practice questions](/resources/ocr-a-level-mathematics-laws-of-logarithms-exponential-equations-reduction-to-practice/). The course page is [OCR A Level Mathematics](/boards/ocr/a-level/mathematics/), the printable list is the [checklist](/checklists/ocr/a-level/mathematics/), and the [free diagnostics](/diagnostics/) show which topics need work. The graphs of a^x, e^x and ln x and the gradient of e^kx are separate outcomes and are not covered here.

## Key results

| Section | Result |
|---|---|
| 1.06f | log_a x + log_a y = log_a (xy) |
| 1.06f | log_a x − log_a y = log_a (x/y) |
| 1.06f | k log_a x = log_a (x^k), including k = −1 and k = −½ |
| 1.06f | log_a a = 1, log_a 1 = 0, ln e = 1, ln 1 = 0 |
| 1.06g | a^x = b gives x = ln b / ln a; e^x = b gives x = ln b |
| 1.06h | y = ax^n: plot lg y against lg x; gradient n, intercept lg a |
| 1.06h | y = kb^x: plot lg y (or ln y) against x; gradient lg b (or ln b), intercept lg k (or ln k) |
| 1.06i | N = N₀e^(kt): growth for k > 0, decay for k < 0; doubling or half-life time is ln 2 / |k| |

Change of base is excluded from the laws outcome.

## Laws of logarithms (1.06f)

### Method: combining

1. Put coefficients in as powers using the power law (k log x becomes log x^k).
2. Add logs by multiplying, subtract logs by dividing.
3. Check all logs share one base.
4. Simplify, then use log_a a = 1 or log_a a^m = m if you need a number.

Reminder: 2 ln 3 + ln 4 − ln 6 = ln (9 × 4 / 6) = ln 6.

### Method: solving log equations

1. Combine into a single log on each side, or a single log equal to a number.
2. Remove the logs: log_a f(x) = c means f(x) = a^c. If log f(x) = log g(x), then f(x) = g(x).
3. Solve, then substitute back into every original logarithm.
4. Reject any root that makes an input zero or negative.

### Must-know distinctions

- log x + log y is log (xy), but log (x + y) cannot be split.
- log x / log y is not log (x/y), and it does not simplify to x/y.
- (log x)² is not 2 log x. The power law applies to the input of the log only.
- Reject a root only because of the domain, not because it is negative. A negative root is fine if every log input stays positive.

## Exponential equations (1.06g)

### Method: a^x = b

1. Isolate the power so that a^x stands alone.
2. Take ln of both sides (or logs to any one base).
3. Bring the power down: x ln a = ln b.
4. Divide: x = ln b / ln a. Round only at the end.

### Method: x on both sides

Take logs, expand the brackets, collect the x terms on one side and factorise.

Reminder: 7^(2x−1) = 4^x

```
(2x − 1) ln 7 = x ln 4
x (2 ln 7 − ln 4) = ln 7
x = ln 7 / (2 ln 7 − ln 4) = 0.777 (3 s.f.)
```

### Reminder: isolate first

4e^(−x) = 10 gives e^(−x) = 2.5, so −x = ln 2.5 and x = −ln 2.5 = −0.916 (3 s.f.).

### Reminder: a hidden quadratic

e^(2x) − 7e^x + 12 = 0. Let t = e^x, so t² − 7t + 12 = 0 and (t − 3)(t − 4) = 0. Then e^x = 3 or e^x = 4, so x = ln 3 or x = ln 4. Both are valid because e^x is always positive. If a factor gives a negative or zero value for t, reject it.

## Reduction to linear form (1.06h)

| Model | Take logs | Plot | Gradient | Intercept | Parameters |
|---|---|---|---|---|---|
| y = ax^n | lg y = n lg x + lg a | lg y against lg x | n | lg a | a = 10^(intercept) |
| y = kb^x | lg y = x lg b + lg k | lg y against x | lg b | lg k | b = 10^(gradient), k = 10^(intercept) |
| y = kb^x (natural logs) | ln y = x ln b + ln k | ln y against x | ln b | ln k | b = e^(gradient), k = e^(intercept) |

### Method: from data to parameters

1. Choose the model. A straight line on log-log axes means a power; a straight line with log y against x means exponential.
2. Calculate the new columns (lg x and lg y, or x and ln y).
3. Plot the points and draw a line of best fit by eye.
4. Pick two points on the line, far apart, and find the gradient.
5. Read or calculate the vertical intercept.
6. Undo the log to get a or k, and undo it for the gradient if the model is exponential.
7. Write the equation and quote values as estimates.

### Reminder

A line of lg y against lg x with gradient 3 and intercept 0.6 gives n = 3 and a = 10^0.6 = 3.98, so y ≈ 3.98x³. The same sort of line for ln y against x with gradient 0.5 and intercept 2 gives b = e^0.5 = 1.65 and k = e² = 7.39.

### Must-know distinctions

- The intercept on the vertical axis is the log of the constant, not the constant itself.
- On a log-log plot the gradient is the power n. On a log y against x plot the gradient is the log of the base b.
- Use the same base for every log in one question.
- Take points from the line, not from the data table, when you find the gradient.

## Modelling with exponentials (1.06i)

### Standard models

| Context | Model |
|---|---|
| Population growth | P = P₀e^(kt), k > 0 |
| Continuous compound interest | A = Pe^(rt) |
| Radioactive decay | m = m₀e^(−kt), k > 0 |
| Drug concentration | C = C₀e^(−kt), k > 0 |

### Method: using a model

1. Identify the initial value at t = 0.
2. Use a second reading to find the rate constant k: e^(kt) = ratio, so k = ln (ratio) / t.
3. To find a time, set the formula equal to the target, isolate the exponential and take ln.
4. State the answer with units and the right degree of accuracy.

Reminder: C = 25e^(−0.3t). Time to fall to 5: e^(−0.3t) = 0.2, so t = ln 5 / 0.3 = 5.36. The half-life is ln 2 / 0.3 = 2.31.

### Limitations and refinements

| Limitation | Possible refinement |
|---|---|
| Growth has no upper limit | A model that levels off at a maximum value |
| Decay goes to zero, but a background level exists | Add a constant to the model |
| Constant rate k may not hold for a long time | Let k change with time or conditions |
| Counts are whole numbers | Round answers sensibly, or note that the model is an approximation |
| Predictions far outside the data are uncertain | Collect more data, restrict the time range |

Always link the comment to the context. A statement like "the model is not accurate" is too vague to be a useful comment.

## Quick self-test

1. Evaluate log₅ 50 − log₅ 2.
2. Write 3 log_a 2 + log_a 5 as one logarithm.
3. Write −2 log_a x as a single logarithm.
4. Solve 2^x = 50, giving x to 3 significant figures.
5. Solve e^(2x) = 9, giving x as ln 3.
6. Solve log₁₀ x + log₁₀ (x − 3) = 1.
7. For y = 4x³, which axes make a straight line, and what are its gradient and intercept (in log base 10)?
8. ln y against x is a straight line with gradient 0.5 and intercept 2. Write y in the form kb^x.
9. A mass decays as m = m₀e^(−0.2t). Find the half-life to 3 significant figures.
10. Give one limitation of the model P = P₀e^(kt) for a population.

### Answers

1. log₅ (50/2) = log₅ 25 = **2**.
2. log_a 8 + log_a 5 = **log_a 40**.
3. **log_a (1/x²)**.
4. x = ln 50 / ln 2 = **5.64**.
5. e^(2x) = 9 gives 2x = ln 9 = 2 ln 3, so **x = ln 3**.
6. x(x − 3) = 10, so x² − 3x − 10 = 0 and (x − 5)(x + 2) = 0. Reject −2 (log of a negative input). **x = 5**.
7. lg y = 3 lg x + lg 4: **lg y against lg x, gradient 3, intercept lg 4 = 0.602**.
8. b = e^0.5 and k = e², so **y = 7.39 × 1.65^x**.
9. Half-life = ln 2 / 0.2 = **3.47**.
10. Any one of: growth is unbounded, so a real population would eventually run out of resources; k is assumed constant; the model gives non-integer counts.

## Where marks are usually lost

- Splitting log (x + y) into two logs.
- Leaving a root that makes the input of a logarithm negative.
- Rounding in the middle of a calculation and losing accuracy in the final answer.
- Writing x = ln b × ln a instead of dividing, or dividing the wrong way round.
- Reading the vertical intercept of a log graph as a or k without undoing the log.
- Choosing points from the data table, not from the line of best fit, to find a gradient.
- Giving an exact answer when the question asks for 3 significant figures, or the reverse.
- Making a comment about a model that is generic ("it is not realistic") with no link to the context.

## Official syllabus

OCR, *A Level Mathematics A (H240) specification*, Version 3.1 (August 2026), for first assessment in 2018, published by OCR. These notes cover section 1.06f to 1.06i.
