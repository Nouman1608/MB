---
title: "Cambridge O Level Statistics: Scatter diagrams, correlation and lines of best fit (4040) -- Revision Notes"
seoTitle: "O Level Statistics 4040 Scatter Diagram Notes"
resourceType: "revision-notes"
subject: "statistics"
level: ["o-levels"]
topic: "Scatter diagrams, correlation and lines of best fit"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4040"]
syllabusSeries: "For examination in 2025-2027"
order: 24
syllabusTopics:
  - qualification: "o-level"
    topic: "bivariate-distributions-and-scatter-diagrams-4040"
    subtopic: "elementary-ideas-of-correlation-4040"
  - qualification: "o-level"
    topic: "bivariate-distributions-and-scatter-diagrams-4040"
    subtopic: "lines-of-best-fit-4040"
description: "Condensed revision notes on correlation, the method of semi-averages and prediction from y = mx + c, with a self-test, for O Level Statistics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense sections 9.1 and 9.2 of the Cambridge O Level Statistics (4040) syllabus for examination in 2025, 2026 and 2027: elementary ideas of correlation, and lines of best fit by the method of semi-averages. For full explanations and more worked examples, read the [study guide](/resources/cambridge-o-level-statistics-scatter-diagrams-correlation-and-lines-of-best-fit/). When you are ready to test yourself, use the [practice questions](/resources/cambridge-o-level-statistics-scatter-diagrams-correlation-and-lines-of-best-fit-practice/).

Also useful: the [Cambridge O Level Statistics hub](/boards/cambridge/o-level/statistics/), the [printable checklist](/checklists/cambridge/o-level/statistics/) and the [free 10-minute diagnostics](/diagnostics/).

## Key terms

| Term | Meaning |
|---|---|
| Bivariate data | Two measurements for each item, giving pairs (x, y) |
| Scatter diagram | Each pair plotted as a point; points are not joined |
| Positive correlation | y tends to increase as x increases; points slope up |
| Negative correlation | y tends to decrease as x increases; points slope down |
| Strong correlation | Points lie close to a straight line |
| Weak correlation | Points widely scattered, but a trend is visible |
| No correlation | No straight-line trend |
| Outlier | A point far from the general pattern |
| Mean point | (mean of all x, mean of all y) |
| Interpolation | Predicting inside the range of the data |
| Extrapolation | Predicting outside the range of the data |

## Describing correlation

Give the type, the strength and the meaning in context.

* Type: positive or negative, from the direction of the slope.
* Strength: strong if the points hug a line, weak if they are spread out.
* Context: say what happens to y as x increases, using the names of the variables.

Example wording: "Weak negative correlation: people who watch more television tend to score slightly lower, but there is a lot of scatter."

Strength is about the spread of the points, not the steepness of any line through them.

### Correlation and cause

* Correlation shows an association only. It does not prove that x causes y.
* A lurking variable may drive both. Example: ice cream sales and sunburn cases are both driven by hot weather.
* A good comment names the association and gives a possible third factor.

## Method of semi-averages in steps

1. Order the pairs by x, smallest first.
2. Split into two equal groups. For an odd number of pairs, leave out the middle pair.
3. Lower half: find the mean x and mean y. This is point A.
4. Upper half: find the mean x and mean y. This is point B.
5. Gradient: m = (ȳ₂ − ȳ₁)/(x̄₂ − x̄₁).
6. Substitute A into y = mx + c to find c.
7. Write the equation in the form y = mx + c, and plot A and B to draw the line.

The syllabus does not set a rule for an odd number of pairs. Leaving out the middle pair is the usual choice, so state it in your answer unless the question says otherwise.

### Worked reminder

The price of a fruit juice in dollars (x) and the number sold (y):

| x | 2 | 4 | 6 | 8 | 10 | 12 |
|---|---|---|---|---|---|---|
| y | 30 | 27 | 24 | 19 | 15 | 11 |

```
Lower half (x = 2, 4, 6):    mean x = 4     mean y = (30+27+24)/3 = 27
Upper half (x = 8, 10, 12):  mean x = 10    mean y = (19+15+11)/3 = 15

A = (4, 27)   B = (10, 15)
m = (15 − 27)/(10 − 4) = −12/6 = −2
27 = −2 × 4 + c  →  c = 35

y = −2x + 35
```

Prediction at x = 7 (inside the range 2 to 12): y = −14 + 35 = 21 sold. This is interpolation.
Prediction at x = 14 (outside the range): y = −28 + 35 = 7. This is extrapolation, so treat it with caution.
The line gives y = 0 at x = 17.5, so it cannot hold for high prices: sales cannot be negative.

### Worked reminder with an odd number of pairs

Hours of practice per week (x) and a skill score (y):

| x | 1 | 3 | 5 | 7 | 9 | 11 | 13 |
|---|---|---|---|---|---|---|---|
| y | 5 | 9 | 10 | 17 | 24 | 27 | 33 |

```
7 pairs: leave out the middle pair (7, 17)
Lower: (1, 3, 5)     mean x = 3     mean y = (5+9+10)/3 = 8
Upper: (9, 11, 13)   mean x = 11    mean y = (24+27+33)/3 = 28

m = (28 − 8)/(11 − 3) = 20/8 = 2.5
8 = 2.5 × 3 + c  →  c = 0.5
y = 2.5x + 0.5
```

At x = 8 the line gives y = 20.5, which is interpolation.

### Drawing the line

* Plot A and B on the same grid as the data, using a different mark such as a circle.
* Join A and B with a ruler and extend the line a little each side, but only as far as the data justify.
* Check that the line passes close to the mean point and that points fall on both sides of it.
* If a question asks you to draw the line, show the points A and B so the method can be seen.

## Equation from two points

If you are given or read two points (x₁, y₁) and (x₂, y₂) on the line:

```
m = (y₂ − y₁)/(x₂ − x₁)
c = y₁ − m x₁
```

Example: the points (5, 12) and (20, 42) give m = 30/15 = 2 and c = 12 − 10 = 2, so y = 2x + 2.

* m is how far y moves when x goes up by 1. Give it with units.
* c is the value of y when x = 0. Check whether x = 0 makes sense before you interpret it.
* To find x from a known y, rearrange: x = (y − c)/m.

## Using and judging a line

| Situation | What to say |
|---|---|
| x inside the data range | Interpolation: usually reasonably reliable if correlation is strong |
| x outside the data range | Extrapolation: the pattern may not continue; less reliable |
| Correlation weak | Predictions may be far from the true value |
| Line gives an impossible value | The line cannot be used there (negative sales, negative value) |
| Small sample | The line may not apply to a wider group |
| Outlier present | It may pull the line; check for an error and comment |

## Must-know distinctions

* Correlation (an association) versus causation (one thing makes the other happen).
* Strong versus steep: strength is about scatter, steepness is about the gradient.
* Interpolation (inside the range) versus extrapolation (outside it).
* Mean point of all data versus the semi-average points A and B. The fitted line passes through the mean point when the two halves together contain all the data (an even number of pairs).
* Gradient m versus intercept c.

## Quick self-test

1. A scatter diagram shows points sloping downwards from left to right, close to a straight line. Describe the correlation.
2. Which axis normally carries the variable that explains or controls the other?
3. For 11 pairs ordered by x, which pair is left out when using semi-averages, and how many pairs are in each half?
4. A lower-half mean point is (3, 10) and an upper-half mean point is (9, 28). Find the gradient.
5. Using your gradient from question 4, find the equation of the line.
6. Using the line in question 5, estimate y when x = 6.
7. The data in question 4 had x values from 1 to 11. Is a prediction at x = 20 an interpolation or an extrapolation, and why does it matter?
8. A line is y = 40 − 2.5x. Write down the gradient and the value of y when x = 0.
9. Shoe size and reading score are strongly positively correlated among children aged 5 to 12. Give a reason why shoe size does not cause better reading.
10. The points (2, 7) and (10, 19) lie on a line. Find its equation.
11. Two data sets both have a line of best fit with gradient 2. One has points tightly packed along the line, the other widely scattered. Which has stronger correlation?

### Answers

1. Strong negative correlation: as x increases, y decreases.
2. The horizontal axis (x).
3. The sixth pair (the middle one) is left out; each half has 5 pairs.
4. m = (28 − 10)/(9 − 3) = 18/6 = 3.
5. 10 = 3 × 3 + c, so c = 1. The equation is y = 3x + 1.
6. y = 3 × 6 + 1 = 19.
7. Extrapolation, because 20 is outside 1 to 11. The pattern may not continue, so the estimate is less reliable.
8. Gradient −2.5; y = 40 when x = 0.
9. Age drives both: older children have bigger feet and read better. Age is the lurking variable.
10. m = (19 − 7)/(10 − 2) = 12/8 = 1.5; c = 7 − 1.5 × 2 = 4; y = 1.5x + 4.
11. The tightly packed set, since correlation strength depends on how close the points are to the line, not on the gradient.

## Where marks are usually lost

* Describing correlation with one word instead of type, strength and context.
* Joining the plotted points rather than drawing a single straight line.
* Splitting the data into halves before ordering by x.
* Including the middle pair in one half when the number of pairs is odd.
* Subtracting in different orders in the numerator and denominator of the gradient.
* Writing the equation without c, or forgetting that c is found from a point on the line.
* Predicting outside the data range without any comment on reliability.
* Saying correlation proves cause, or confusing strong correlation with a steep line.

## Official syllabus

Cambridge O Level Statistics (4040) syllabus, for examination in 2025, 2026 and 2027, published by Cambridge University Press & Assessment (Cambridge International Education). Sections 9.1 and 9.2.
