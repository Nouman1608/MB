---
title: "Cambridge IGCSE Mathematics (0580): Trigonometric functions"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Topic 6 – Trigonometry"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 6.4
syllabusTopics:
  - qualification: "igcse"
    topic: "trigonometry-cambridge-igcse-maths"
    subtopic: "trigonometric-functions-cambridge-igcse-maths"
description: "Study guide to 0580 subtopic E6.4: reading the sine, cosine and tangent graphs, related angles, and solving trig equations that need rearranging first."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **E6.4 Trigonometric functions** in Topic 6 Trigonometry of the Cambridge IGCSE Mathematics 0580 syllabus for examination in 2025, 2026 and 2027. The Core column says "Extended content only", so this is tested on Paper 2 (non-calculator) and Paper 4 (calculator) only.

The [exact values and trigonometric functions study guide](/resources/igcse-mathematics-0580-exact-trigonometric-values-and-trigonometric-functions/) introduces the three graphs and the basic second-solution rules. This page goes further: recognising a graph from a few features, using the graphs to link angles in all four quarters of the range, equations that need several steps of algebra first, and equations whose range or conditions cut down the number of answers. Revise with the [trigonometric functions revision notes](/resources/cambridge-igcse-mathematics-0580-trigonometric-functions-cambridge-igcse-maths-revision-notes/) and test yourself with the [trigonometric functions practice questions](/resources/cambridge-igcse-mathematics-0580-trigonometric-functions-cambridge-igcse-maths-practice/).

## What subtopic E6.4 asks for

| Statement | What you must be able to do | Syllabus example |
|---|---|---|
| E6.4.1 | Recognise, sketch and interpret the graphs of y = sin x, y = cos x and y = tan x for 0° ⩽ x ⩽ 360° | -- |
| E6.4.2 | Solve trigonometric equations involving sin x, cos x or tan x for 0° ⩽ x ⩽ 360° | sin x = √3/2; 2 cos x + 1 = 0 |

The equations are always linear in sin x, cos x or tan x: once you have rearranged, there is one trigonometric ratio equal to one number.

## Recognising a graph from its features

Questions may show part of a curve and ask which function it is. Three checks settle it.

| Feature | y = sin x | y = cos x | y = tan x |
|---|---|---|---|
| Value at x = 0° | 0 | 1 | 0 |
| Value at x = 180° | 0 | −1 | 0 |
| Greatest and least values | 1 at 90°, −1 at 270° | 1 at 0° and 360°, −1 at 180° | none |
| Crosses the x-axis at | 0°, 180°, 360° | 90°, 270° | 0°, 180°, 360° |
| Asymptotes | none | none | x = 90°, x = 270° |
| Repeats every | 360° | 360° | 180° |

So a curve through (0°, 1) must be cos x, and a curve through (0°, 0) that never goes above 1 must be sin x. Any curve with a vertical asymptote is tan x.

## Interpreting the graphs: four related angles

Every angle you need in a 0580 equation is linked to one **acute angle** (call it α) by the symmetry of the graphs. Reading the graph left to right, the quarters of the range are 0° to 90°, 90° to 180°, 180° to 270° and 270° to 360°.

| Angle | sin | cos | tan |
|---|---|---|---|
| α | + sin α | + cos α | + tan α |
| 180° − α | + sin α | − cos α | − tan α |
| 180° + α | − sin α | − cos α | + tan α |
| 360° − α | − sin α | + cos α | − tan α |

You do not need to learn the table: sketch the graph, mark α, and the table drops out. For instance, sin x is above the axis from 0° to 180° and below it from 180° to 360°, which gives the signs in the sin column.

One more link is worth knowing: cos x = sin(90° − x), because the cosine curve is the reflection of the sine curve in the line x = 45°. So cos 65° = sin 25°.

### Worked example 1: using a given value (non-calculator)

You are given that sin 25° = 0.4226 (to 4 decimal places). Without a calculator, find all the angles between 0° and 360° for which (a) sin x = −0.4226, (b) cos x = 0.4226, (c) cos x = −0.4226.

```
(a) sin is negative from 180° to 360°; related acute angle 25°
    x = 180° + 25° = 205°   and   x = 360° − 25° = 335°

(b) cos 65° = sin 25° = 0.4226, so the acute angle is 65°
    cos is positive from 0° to 90° and 270° to 360°
    x = 65°   and   x = 360° − 65° = 295°

(c) cos is negative from 90° to 270°; acute angle 65°
    x = 180° − 65° = 115°   and   x = 180° + 65° = 245°
```

Each part has two answers: a horizontal line between −1 and 1 (other than 0) crosses one full wave twice.

## Solving equations: the full method

1. Rearrange until sin x, cos x or tan x is alone, exactly as you would solve 2y + 1 = 0.
2. If the value is greater than 1 or less than −1 for sin or cos, there are **no solutions**.
3. Find the acute angle α from the value without its sign (exact values on Paper 2, the inverse key on Paper 4).
4. Use the signs table or a sketch to place the answers in the correct quarters.
5. Keep only answers inside the stated range, and give non-exact angles to 1 decimal place.

### Worked example 2: the syllabus examples (non-calculator)

Solve for 0° ⩽ x ⩽ 360°: (a) sin x = √3/2, (b) 2 cos x + 1 = 0.

```
(a) α = 60°  (sin 60° = √3/2); sin is positive in the first two quarters
    x = 60°   or   x = 180° − 60° = 120°

(b) 2 cos x = −1, so cos x = −1/2
    α = 60°  (cos 60° = 1/2); cos is negative in the middle two quarters
    x = 180° − 60° = 120°   or   x = 180° + 60° = 240°
```

### Worked example 3: brackets first (calculator)

Solve 3(2 − cos x) = 5 for 0° ⩽ x ⩽ 360°.

```
6 − 3 cos x = 5
−3 cos x = −1
cos x = 1/3
α = cos⁻¹(1/3) = 70.528...°
cos is positive in the first and last quarters:
x = 70.528...°   or   x = 360° − 70.528...° = 289.471...°
```

**x = 70.5° or 289.5°** (1 d.p.). Treat cos x as the unknown and collect it on one side before you touch the inverse key.

### Worked example 4: the unknown on both sides (calculator)

Solve 2 tan x − 3 = 4 tan x + 2 for 0° ⩽ x ⩽ 360°.

```
−3 − 2 = 4 tan x − 2 tan x
2 tan x = −5
tan x = −2.5
α = tan⁻¹(2.5) = 68.198...°
tan is negative in the second and fourth quarters:
x = 180° − 68.198...° = 111.801...°
x = 360° − 68.198...° = 291.801...°
```

**x = 111.8° or 291.8°** (1 d.p.). The two tan answers are always exactly 180° apart, which is a quick check.

### Worked example 5: two graphs meeting (non-calculator)

The graphs of y = sin x and y = cos x are drawn on the same axes for 0° ⩽ x ⩽ 360°. Find the exact coordinates of the points where they cross.

```
The curves meet where sin x and cos x have the same value.
Both are positive and equal at 45°: sin 45° = cos 45° = √2/2.
Both are negative and equal at 180° + 45° = 225°:
    sin 225° = −√2/2 and cos 225° = −√2/2.
In the second and fourth quarters one is positive and the other negative,
so they cannot be equal there.
```

The points are **(45°, √2/2)** and **(225°, −√2/2)**. A sketch with both curves confirms there are exactly two crossings.

## When the range or a condition removes answers

Read the range every time. For tan x = √3 with 0° ⩽ x ⩽ 180°, only x = 60° is allowed; 240° is outside the range. For sin x = 0 with 0° ⩽ x ⩽ 360°, there are **three** answers (0°, 180°, 360°) because both ends are included.

Some questions add a condition. "Find x such that cos x = 1/2 and sin x is negative" has cos answers 60° and 300°; sin is negative only from 180° to 360°, so the answer is **x = 300°** alone.

## Sketching for marks

For a **sketch**, the shape and key features earn the marks, not accurate plotting. Mark 90°, 180°, 270° and 360°, and 1 and −1 for sin and cos; draw the tan asymptotes as dashed lines the curve never touches. Keep turning points rounded, not pointed.

## Common mistakes

- Typing a negative value into the inverse key and then applying the second-solution rule to the negative angle wrongly. Working from the acute angle α and the signs table avoids this.
- Dividing only one term by a coefficient: from 6 − 3 cos x = 5, writing cos x = 5 − 6 ÷ 3.
- Missing a third answer at 0° and 360° when the value is 0 for sin or tan, or 1 for cos.
- Giving a solution to sin x = 1.2. If the value is outside −1 to 1, write "no solutions" and say why.
- Rounding α before subtracting it from 180° or 360°, which can move the last decimal place.
- Ignoring a restricted range such as 0° ⩽ x ⩽ 180°.

## Exam technique for the command words

- **Solve**: give every solution in the range. One answer out of two usually earns only part of the marks.
- **Write down**: the answer can be read from the graph or recalled; little or no working is needed.
- **Show that**: for instance, "show that x = 240° is a solution" needs the value substituted and the arithmetic shown, ending at the required result.
- **Sketch**: shape plus labelled key values, as above.

On Paper 4, write down the unrounded calculator value of α before you use it, so a method mark is available even if a later step slips.

## Frequently asked questions

**Is E6.4 Trigonometric functions on the Core paper for 0580?**
No. The syllabus lists C6.4 as "Extended content only", so it is examined on Papers 2 and 4.

**What should I do when the calculator gives a negative angle?**
Ignore the sign and use the acute angle α, then place the answers in the quarters where the ratio has the sign you need.

## Official syllabus

Cambridge International, *Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027*, Subject content, Topic 6 Trigonometry, E6.4 Trigonometric functions (Extended subject content), with C6.4 marked "Extended content only". See also the [Cambridge IGCSE Mathematics hub](/boards/cambridge/igcse/mathematics/) and the [printable 0580 checklist](/checklists/cambridge/igcse/mathematics/).
