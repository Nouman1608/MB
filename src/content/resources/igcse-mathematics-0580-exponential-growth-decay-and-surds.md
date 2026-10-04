---
title: "Cambridge IGCSE Mathematics 0580: Exponential growth and decay, and surds -- Study Guide"
seoTitle: "IGCSE Maths 0580 Exponential Growth, Decay and Surds Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Exponential growth and decay, and surds"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 1
syllabusTopics:
  - qualification: "igcse"
    topic: "number-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "number-cambridge-igcse-maths"
    subtopic: "exponential-growth-and-decay-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "number-cambridge-igcse-maths"
    subtopic: "surds-cambridge-igcse-maths"
description: "Study guide for Cambridge IGCSE Maths 0580 E1.17-E1.18: exponential growth and decay, simplifying surds and rationalising, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-04
featured: false
---

This guide teaches two subtopics of Topic 1 Number in the Cambridge IGCSE Mathematics 0580 syllabus for examination in 2025, 2026 and 2027: **E1.17 Exponential growth and decay** and **E1.18 Surds**. Both are **Extended only**. The Core column of the syllabus lists C1.17 and C1.18 as "Extended content only", so they are assessed on Paper 2 (non-calculator) and Paper 4 (calculator), not on Papers 1 and 3. Every learning outcome the syllabus lists under the two subtopics is covered below, with worked examples.

For the rest of Topic 1, see the [Number study guide](/resources/igcse-mathematics-number/) and the [Number revision notes](/resources/igcse-mathematics-number-revision-notes/), which include short summaries of both subtopics. When you have worked through this page, try the [Number (Extended) practice questions](/resources/igcse-mathematics-number-extended-practice/), which are written on exactly these two subtopics, and the wider [Number practice questions](/resources/igcse-mathematics-number-practice/). The worked examples here use different numbers from those pages, so nothing is repeated.

Course hub: [Cambridge IGCSE Mathematics](/boards/cambridge/igcse/mathematics/). Tick off your progress on the [printable checklist](/checklists/cambridge/igcse/mathematics/). To find your weak spots first, take the free [Extended diagnostic](/practice/0580/diagnostic/extended/) (a [Core diagnostic](/practice/0580/diagnostic/core/) is also available).

## What this guide covers

| Syllabus ref | What you must be able to do | Tier |
|---|---|---|
| E1.17 | Use exponential growth and decay, e.g. depreciation and population change. Knowledge of e is not required. | Extended only |
| E1.18.1 | Understand and use surds, including simplifying expressions | Extended only |
| E1.18.2 | Rationalise the denominator | Extended only |

Two related outcomes sit in other topics. Drawing and interpreting **graphs** of exponential growth and decay is E2.10, and giving quadratic solutions **in surd form** is E2.5. This guide touches on both only where they use the skills above.

## Exponential growth and decay (E1.17, Extended only)

### The idea

A quantity grows or decays **exponentially** when it changes by the **same percentage** in every time period. Each period, the new value is the old value multiplied by the same number, called the **multiplier**.

```
growth of r% per period:  multiplier = 1 + r/100
decay of r% per period:   multiplier = 1 - r/100

value after n periods = starting value x (multiplier)^n
```

So a 7% increase has multiplier 1.07, and a 7% decrease has multiplier 0.93. The power n counts the number of periods, so the time unit of n must match the time unit of the rate. A rate "per year" needs n in years.

This formula is **not** in the List of formulas printed on Paper 2 and Paper 4. You must know it.

### Why it is not the same as a linear change

In linear (simple) change, the same **amount** is added or taken away each period, because the percentage is always taken of the original value. In exponential change, each period's percentage is taken of the **current** value. For growth, the exponential total pulls further ahead each year. For decay, the value gets smaller and smaller but never reaches zero.

### Worked example 1: population growth (calculator)

A town has a population of 25 000. The population increases by 2.4% each year. Calculate the population after 8 years.

```
multiplier = 1 + 2.4/100 = 1.024
population = 25 000 x 1.024^8
           = 30 223.1...
```

The population after 8 years is about **30 223**, or **30 200** to 3 significant figures.

Compare with linear growth: 2.4% of 25 000 is 600, and 8 × 600 = 4800, giving 29 800. That is the wrong method. The difference of more than 400 people comes from taking each year's 2.4% of a larger number.

On a calculator, type `25000 × 1.024 ^ 8` in one go. Do not round the multiplier or any interim answer.

### Worked example 2: depreciation (non-calculator)

A machine costs $40 000. Its value depreciates by 10% each year. Find its value after 2 years.

```
multiplier = 1 - 10/100 = 0.9
0.9^2 = 0.81
value = 40 000 x 0.81 = 32 400
```

The value after 2 years is **$32 400**. Without a calculator, square the multiplier first, then multiply. You can also do it year by year: 40 000 → 36 000 → 32 400.

### Worked example 3: halving (non-calculator)

A medicine in the bloodstream halves every 3 hours. At 08 00 there are 640 mg. How much is left at 20 00?

The time from 08 00 to 20 00 is 12 hours, which is 12 ÷ 3 = **4** halving periods. The multiplier per period is 1/2.

```
amount = 640 x (1/2)^4 = 640 / 16 = 40
```

**40 mg** remain. The key step is counting periods correctly: n is 4, not 12.

### Worked example 4: when does it pass a value? (calculator)

The number of fish in a lake is 3600. It decreases by 6% each year. After how many complete years will the number first be below 2000?

The multiplier is 0.94. Logarithms are not required in this syllabus, so try whole numbers of years.

```
n = 9:   3600 x 0.94^9  = 2062.78...   (still above 2000)
n = 10:  3600 x 0.94^10 = 1939.01...   (below 2000)
```

The number is first below 2000 after **10 years**. Always show the values for the years either side of the answer. That is the evidence that 10 is the first such year.

### Worked example 5: finding the original value

A van is worth $6144 after 3 years. Its value has fallen by 20% each year. Find its value when new.

Working backwards, you **divide** by the multiplier once for each year.

```
original x 0.8^3 = 6144
0.8^3 = 0.512
original = 6144 / 0.512 = 12 000
```

The van was worth **$12 000** when new. A common wrong answer multiplies by 1.2 three times. A 20% rise does not undo a 20% fall.

### Worked example 6: finding the rate

An investment grows from 2000 to 2662 in 3 years, at the same percentage rate each year. Find the rate.

```
2000 x m^3 = 2662
m^3 = 2662 / 2000 = 1.331
m = cube root of 1.331 = 1.1
```

The multiplier is 1.1, so the rate is **10% per year**. When the numbers are less friendly, use the root key on your calculator and give the rate to 3 significant figures.

### Graphs

A growth graph curves upwards ever more steeply. A decay graph falls steeply, then levels off towards the horizontal axis. Plotting such graphs is in E2.10, using the same multiplier calculation.

## Surds (E1.18, Extended only)

### What a surd is

A **surd** is a root that cannot be simplified to a whole number or fraction, such as √2, √7 or 3√5. Surds are irrational. Leaving an answer as a surd keeps it **exact**. The syllabus states that where a question asks for an exact value, the answer may need to be in surd form.

The rules you use all the time:

```
√a x √b = √(ab)          √a / √b = √(a/b)          √a x √a = a
```

There is **no** rule for adding: √(a + b) is not √a + √b. For example, √(9 + 16) = √25 = 5, but √9 + √16 = 7.

### Simplifying a surd

Find the **largest square factor** of the number under the root, then take its square root outside.

```
√180 = √(36 x 5) = √36 x √5 = 6√5
√98  = √(49 x 2) = 7√2
```

If you choose a smaller square factor, for example √180 = √(9 × 20) = 3√20, you must keep going: √20 = 2√5, so 3√20 = 6√5. A surd is fully simplified only when the number under the root has no square factor except 1.

### Adding and subtracting surds

You can only collect surds that are multiples of the **same** root, like collecting terms in x. Simplify each one first.

Simplify √27 + √300 − √12.

```
√27  = √(9 x 3)   = 3√3
√300 = √(100 x 3) = 10√3
√12  = √(4 x 3)   = 2√3

3√3 + 10√3 - 2√3 = 11√3
```

The answer is **11√3**.

### Multiplying and expanding brackets

Treat a surd like a letter, then use √a × √a = a.

Expand and simplify (3 − √5)².

```
(3 - √5)(3 - √5) = 9 - 3√5 - 3√5 + √5 x √5
                 = 9 - 6√5 + 5
                 = 14 - 6√5
```

The answer is **14 − 6√5**. A common slip is to write 9 + 5 = 14 and forget the middle terms.

Now expand (√7 + 2)(√7 − 2).

```
= 7 - 2√7 + 2√7 - 4 = 3
```

The surd terms cancel and the answer is a whole number. This is the difference of two squares, (a + b)(a − b) = a² − b². It is the reason the conjugate method below works.

## Rationalising the denominator (E1.18.2, Extended only)

To **rationalise** a denominator means to rewrite a fraction so that no surd is left on the bottom. You multiply the top and bottom by the same thing, so the value does not change.

### Single surd on the bottom

Multiply top and bottom by that surd.

```
15 / √6 = (15 x √6) / (√6 x √6) = 15√6 / 6 = 5√6 / 2

6 / (2√3) = (6 x √3) / (2√3 x √3) = 6√3 / 6 = √3
```

So 15/√6 = **(5√6)/2** and 6/(2√3) = **√3**. In the second one you only need to multiply by √3, not by 2√3. Always cancel common factors at the end.

### A bracket with a surd on the bottom

For a denominator such as a + √b or a − √b, multiply top and bottom by the **conjugate**: the same two terms with the sign between them changed.

Rationalise 4 / (3 − √5).

```
4 / (3 - √5) x (3 + √5) / (3 + √5)

bottom: (3 - √5)(3 + √5) = 9 - 5 = 4
top:    4(3 + √5)

answer: 4(3 + √5) / 4 = 3 + √5
```

The answer is **3 + √5**.

When the top also contains a surd, expand it fully. Rationalise (1 + √2) / (3 − √2).

```
multiply top and bottom by (3 + √2)

top:    (1 + √2)(3 + √2) = 3 + √2 + 3√2 + 2 = 5 + 4√2
bottom: (3 - √2)(3 + √2) = 9 - 2 = 7

answer: (5 + 4√2) / 7
```

The answer is **(5 + 4√2)/7**. Check whether anything cancels. Here 5, 4 and 7 share no common factor, so this is the final form.

### Surds in other topics

Surds turn up whenever a question asks for an exact answer. For example, solving x² − 6x + 4 = 0 with the quadratic formula gives x = (6 ± √20)/2. Simplify √20 = 2√5, then divide each term by 2 to get **x = 3 ± √5**. The diagonal of a square of side 6 cm is √72 = **6√2** cm by Pythagoras. On Paper 2 there is no calculator, so all surd work there must be done by hand, with every step shown.

## Common errors

- Using 0.06 instead of 0.94 as the multiplier for a 6% decrease, or 1.6 instead of 1.06 for a 6% increase.
- Taking the percentage of the original value every period. That is linear change, not exponential.
- Counting the wrong number of periods when the rate is "every 3 hours" or "every half year". Divide the total time by the length of one period.
- Rounding the multiplier or an interim value, then giving a final answer that is out by a few units.
- In "after how many years" questions, giving one value only. Show both the year before and the year that first passes the target.
- Writing √(a + b) = √a + √b, or adding surds with different roots, such as √3 + √12 = √15. The correct answer is √3 + 2√3 = 3√3.
- Stopping before a surd is fully simplified, such as leaving 3√20 instead of 6√5.
- Multiplying by the denominator itself, such as (3 − √5), instead of its conjugate (3 + √5). Only the conjugate removes the surd.
- Forgetting the middle terms when squaring a bracket that contains a surd.

## Where to go next

- Recap the whole of Topic 1 with the [Number revision notes](/resources/igcse-mathematics-number-revision-notes/).
- Practise these two subtopics with the [Number (Extended) practice questions](/resources/igcse-mathematics-number-extended-practice/).
- Find gaps across the course with the free [Extended diagnostic](/practice/0580/diagnostic/extended/).
- Other resources for syllabus 0580 start from the [Number study guide](/resources/igcse-mathematics-number/).

## Official syllabus

Cambridge IGCSE Mathematics 0580 syllabus for examination in 2025, 2026 and 2027, published by Cambridge International (Cambridge Assessment International Education). Subject content E1.17 Exponential growth and decay and E1.18 Surds (Extended).
