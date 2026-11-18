---
title: "OxfordAQA A-level Mathematics (9660): Exponentials and logarithms"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit P2: Pure Maths (International A-level)"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 5.5
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "p2-exponentials-and-logarithms-oxfordaqa-alevel-maths"
description: "OxfordAQA 9660 P2.5 study guide: sketching e^x and ln x graphs, ln as the inverse of e^x, hidden quadratics, and fitting growth and decay models."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into section P2.5 (Exponentials and logarithms) of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. P2.5 is in Unit P2 (Pure Maths), which is International A-level content. It builds on PP1.3 from International AS, where you met y = aˣ, the laws of logarithms and the solution of aˣ = b.

The broader [parametric equations and exponential functions guide](/resources/oxfordaqa-a-level-mathematics-parametric-equations-and-exponential-and-logarithmic/) lists the features of eˣ and ln x and gives standard growth and decay examples. This page concentrates on sketching transformed graphs systematically, on the inverse relationship, and on building a model from data and judging it. Condense it with the [exponentials and logarithms revision notes](/resources/oxfordaqa-a-level-mathematics-9660-p2-exponentials-and-logarithms-oxfordaqa-alevel-maths-revision-notes/) and test yourself with the [exponentials and logarithms practice questions](/resources/oxfordaqa-a-level-mathematics-9660-p2-exponentials-and-logarithms-oxfordaqa-alevel-maths-practice/).

## What the specification asks for

| Content | Additional information |
|---|---|
| The function eˣ and its graph | |
| The function ln x and its graph; ln x as the inverse function of eˣ | |
| Exponential growth and decay | The use of exponential functions as models |

Differentiating eˣ and ln x is in P2.6 and integrating them is in P2.7. Questions on P2.5 can still be combined with those sections in the exam, so the graphs and equations here need to be fluent.

## 1. Where eˣ sits among exponential graphs

Every graph y = aˣ with a > 1 passes through (0, 1), lies above the x-axis and increases. The number e ≈ 2.718 lies between 2 and 3, so for x > 0 the graph of y = eˣ lies between y = 2ˣ (below) and y = 3ˣ (above). For x < 0 it still lies between them, but 3ˣ is now the lowest of the three. What makes e special, as P2.6 shows, is that the gradient of y = eˣ at any point equals its y-coordinate.

Any exponential aˣ can be rewritten with base e, because a = e^(ln a):

```
aˣ = e^(x ln a)
2ˣ = e^(0.693x)       (ln 2 ≈ 0.693)
(1.04)ᵗ = e^(0.0392t)  (ln 1.04 ≈ 0.0392)
```

This lets you move between a model written as N = A × bᵗ and one written as N = Aeᵏᵗ: k = ln b.

## 2. Sketching transformed graphs

For any sketch, find and label three things: the intercepts with the axes, the equation of the asymptote, and the behaviour at the ends.

### Worked example 1: y = 3 − 2e⁻ˣ

- **y-intercept**: x = 0 gives y = 3 − 2 = 1, so (0, 1).
- **Asymptote**: as x → ∞, e⁻ˣ → 0, so y → 3. The line y = 3 is a horizontal asymptote.
- **Left-hand behaviour**: as x → −∞, e⁻ˣ grows without limit, so y → −∞.
- **x-intercept**: 3 − 2e⁻ˣ = 0 gives e⁻ˣ = 3/2, so x = −ln 1.5 ≈ −0.405.

The curve rises from the bottom left, crosses the x-axis at x = −ln 1.5, passes through (0, 1) and levels off below y = 3. The exact x-intercept, −ln(3/2), is the form an examiner expects unless a decimal is asked for.

### Worked example 2: y = ln(3x − 6)

- **Domain**: ln needs a positive input, so 3x − 6 > 0 and x > 2.
- **Asymptote**: as x → 2 from above, 3x − 6 → 0 and y → −∞. The line x = 2 is a vertical asymptote.
- **x-intercept**: ln(3x − 6) = 0 when 3x − 6 = 1, so x = 7/3.
- **Right-hand behaviour**: y increases without limit, but slowly.

There is no y-intercept, because x = 0 is outside the domain. Students who draw the curve crossing the y-axis have ignored the domain.

## 3. ln x as the inverse of eˣ

Because y = eˣ and y = ln x are inverse functions:

- ln(eˣ) = x for all real x, and e^(ln x) = x for x > 0;
- the domain of one is the range of the other: eˣ has domain all real numbers and range y > 0, while ln x has domain x > 0 and range all real numbers;
- their graphs are reflections of each other in the line y = x.

### Worked example 3: an inverse function

Let f(x) = e²ˣ − 3, for all real x. Find f⁻¹(x) and state its domain.

```
y = e²ˣ − 3
e²ˣ = y + 3
2x = ln(y + 3)
x = ½ ln(y + 3)
f⁻¹(x) = ½ ln(x + 3)
```

The range of f is f(x) > −3, because e²ˣ > 0. That range becomes the domain of the inverse: x > −3. The graph of f has a horizontal asymptote y = −3, and the graph of f⁻¹ has the vertical asymptote x = −3, as a reflection in y = x should.

## 4. Equations that need a substitution

Some equations hide a quadratic. Look for e²ˣ alongside eˣ, or for e⁻ˣ, which you can clear by multiplying by eˣ.

### Worked example 4

Solve eˣ = 3e⁻ˣ + 2.

```
Multiply every term by eˣ:   e²ˣ = 3 + 2eˣ
Rearrange:                   e²ˣ − 2eˣ − 3 = 0
Let u = eˣ:                  u² − 2u − 3 = 0
                             (u − 3)(u + 1) = 0
```

u = 3 gives x = ln 3. u = −1 is impossible, because eˣ > 0 for every x. So the only solution is x = ln 3. State the reason for rejecting the second root: it is a mark in many schemes.

### Worked example 5

Solve 2 ln x − ln(x + 2) = ln 3.

```
ln(x²) − ln(x + 2) = ln 3
ln(x²/(x + 2)) = ln 3
x² = 3(x + 2)
x² − 3x − 6 = 0
x = (3 ± √33)/2
```

The negative root, (3 − √33)/2 ≈ −1.37, is rejected because ln x is undefined for x < 0. The answer is x = (3 + √33)/2 ≈ 4.37. Check the original equation, not only the quadratic, before accepting a root.

## 5. Exponential functions as models

Three forms cover most questions:

| Model | Meaning of the constants |
|---|---|
| N = Aeᵏᵗ, k > 0 | A is the value at t = 0; growth at a rate proportional to N |
| N = Ae⁻ᵏᵗ, k > 0 | Decay towards 0 |
| T = a + be⁻ᵏᵗ, k > 0 | Decay towards the long-term value a; a + b is the starting value |

In N = Aeᵏᵗ, each unit of time multiplies N by eᵏ. So N = Ae^(0.05t) grows by a factor e^0.05 ≈ 1.0513 per unit, which is about 5.13% per unit time, not 5%.

### Worked example 6: fitting a growth model to two readings

A colony of bacteria is modelled by N = Aeᵏᵗ, where t is the time in hours. There are 150 bacteria when t = 2 and 400 when t = 5. Find A and k, and the first whole number of hours after which the model predicts more than 1000 bacteria.

```
150 = Ae²ᵏ  and  400 = Ae⁵ᵏ
Divide:  e³ᵏ = 400/150 = 8/3
k = (1/3) ln(8/3) = 0.327 (3 s.f.)
A = 150e^(−2k) = 78.0 (3 s.f.)

N > 1000:  e^(kt) > 1000/A
t > ln(1000/A)/k = 7.80
```

The model first predicts more than 1000 bacteria after 8 hours. Dividing the two equations eliminates A in one step, so always try that first. Keep k unrounded in the calculator when you find A and t.

### Worked example 7: a model with a long-term value

A cup of tea cools in a room. Its temperature, θ °C, after t minutes is modelled by θ = 20 + be⁻ᵏᵗ. Initially θ = 90, and after 10 minutes θ = 55.

```
t = 0:   90 = 20 + b, so b = 70
t = 10:  55 = 20 + 70e^(−10k)
         e^(−10k) = 35/70 = 1/2
         k = (ln 2)/10 = 0.0693 (3 s.f.)
```

The model predicts the tea reaches 30 °C when 70e⁻ᵏᵗ = 10, so t = 10 ln 7/ln 2 ≈ 28.1 minutes. The temperature gap above the room halves every 10 minutes: 70, 35, 17.5 and so on.

### Judging a model

When asked to comment on or criticise a model:

- interpret each constant in context (20 is the room temperature, 70 is the starting gap);
- test the long-term behaviour (pure growth N = Aeᵏᵗ increases without limit, which no real colony can do);
- compare a prediction with any data given, saying whether the model overestimates or underestimates;
- say over which range of t the model is likely to be reasonable.

## Common mistakes

- Drawing ln x crossing the y-axis, or eˣ dipping below the x-axis.
- Forgetting to state the asymptote's equation on a sketch.
- Accepting eˣ = −1 or ln of a negative number as a solution.
- Writing ln(x + 2) = ln x + ln 2.
- Rounding k early, so A and later predictions drift.
- Reading N = Ae^(0.05t) as "5% growth per unit time".

## Exam technique

- **Sketch** needs shape, intercepts and asymptotes labelled; it does not need plotted points.
- **Give your answer in exact form** means ln 3 or (3 + √33)/2, not decimals.
- **Show that** a value of k is correct: derive it, then give it to more figures than stated.
- **Comment on** or **criticise** the model: refer to the context and give a reason, such as a limit on space or food.
- **Hence**: use the inverse or the model you have just found.

## Where next

Work through the [exponentials and logarithms practice questions](/resources/oxfordaqa-a-level-mathematics-9660-p2-exponentials-and-logarithms-oxfordaqa-alevel-maths-practice/), then condense with the [exponentials and logarithms revision notes](/resources/oxfordaqa-a-level-mathematics-9660-p2-exponentials-and-logarithms-oxfordaqa-alevel-maths-revision-notes/). The International AS groundwork is in the [exponentials, logarithms and solving aˣ = b guide](/resources/oxfordaqa-a-level-mathematics-exponential-functions-logarithms-and-solving-a-x-b/).

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, section P2.5 Exponentials and logarithms, published by OxfordAQA.
