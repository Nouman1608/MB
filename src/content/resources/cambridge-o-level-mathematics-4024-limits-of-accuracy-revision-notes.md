---
title: "Cambridge O Level Mathematics (4024): Limits of accuracy -- Revision Notes"
seoTitle: "O Level Maths 4024 Limits of Accuracy Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["o-levels"]
topic: "Number"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 1.1
syllabusTopics:
  - qualification: "o-level"
    topic: "number"
  - qualification: "o-level"
    topic: "number"
    subtopic: "limits-of-accuracy-4024"
description: "Revision notes for Cambridge O Level Maths 4024 subtopic 1.10: bounds of rounded values and of calculations with sums, differences, products, quotients and speeds."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Condensed notes for subtopic **1.10 Limits of accuracy** of Cambridge O Level Mathematics (Syllabus D) 4024, 2025 to 2027. The [Limits of accuracy study guide](/resources/cambridge-o-level-mathematics-4024-limits-of-accuracy/) explains each method with worked examples; the [Limits of accuracy practice questions](/resources/cambridge-o-level-mathematics-4024-limits-of-accuracy-practice/) give exam-style questions with mark schemes.

## Syllabus outcomes

1. Give upper and lower bounds for data rounded to a specified accuracy.
2. Find upper and lower bounds of the results of calculations which have used data rounded to a specified accuracy.

## Key terms

| Term | Meaning | Example |
|---|---|---|
| Lower bound | smallest value that rounds to the stated number | 6.5 for 7 to the nearest unit |
| Upper bound | boundary at the top of the range (not reached) | 7.5 for 7 to the nearest unit |
| Error interval | range of possible values | 6.5 ⩽ x < 7.5 |
| Rounding unit | place value of the last rounded digit | 0.1 for 1 d.p. |
| Half unit | half the rounding unit | 0.05 for 1 d.p. |

## Bounds of a rounded value

Subtract and add **half the rounding unit**.

| Value | Accuracy | Half unit | Interval |
|---|---|---|---|
| 7 m | nearest metre | 0.5 | 6.5 ⩽ x < 7.5 |
| 4.3 kg | 1 d.p. | 0.05 | 4.25 ⩽ x < 4.35 |
| 12.46 s | 2 d.p. | 0.005 | 12.455 ⩽ x < 12.465 |
| 5 600 | nearest 100 | 50 | 5 550 ⩽ x < 5 650 |
| 3 200 | 2 s.f. | 50 | 3 150 ⩽ x < 3 250 |
| 0.045 | 2 s.f. | 0.0005 | 0.0445 ⩽ x < 0.0455 |
| 80 | nearest 10 | 5 | 75 ⩽ x < 85 |
| 2 000 | 1 s.f. | 500 | 1 500 ⩽ x < 2 500 |

The lower bound is included. The upper bound is not included in the interval, but it is used as the upper bound value in calculations.

## Which bounds to use

| Calculation | For the upper bound | For the lower bound |
|---|---|---|
| a + b | upper + upper | lower + lower |
| a - b | upper a - lower b | lower a - upper b |
| a × b | upper × upper | lower × lower |
| a ÷ b | upper a ÷ lower b | lower a ÷ upper b |
| Perimeter of rectangle | 2(upper l + upper w) | 2(lower l + lower w) |
| Area of rectangle | upper l × upper w | lower l × lower w |
| Speed = distance ÷ time | upper d ÷ lower t | lower d ÷ upper t |
| Time = distance ÷ speed | upper d ÷ lower s | lower d ÷ upper s |

For a subtraction or division, the second quantity is the one that works in the opposite direction.

## Worked examples

### Rectangle, 15 cm by 9 cm, nearest centimetre

| Quantity | Upper | Lower |
|---|---|---|
| Length | 15.5 | 14.5 |
| Width | 9.5 | 8.5 |
| Perimeter | 2(15.5 + 9.5) = 50 | 2(14.5 + 8.5) = 46 |
| Area | 15.5 × 9.5 = 147.25 | 14.5 × 8.5 = 123.25 |

### Three parcels of 2.4 kg (1 d.p.)

Total: 3 × 2.35 = 7.05 up to 3 × 2.45 = 7.35 kg.

### Difference

a = 9.6, b = 3.9 (1 d.p.): upper = 9.65 - 3.85 = 5.8; lower = 9.55 - 3.95 = 5.6.

### Speed

45 km (nearest km) in 3.8 h (1 d.p.): lower speed 44.5 ÷ 3.85 = 11.56 km/h; upper speed 45.5 ÷ 3.75 = 12.13 km/h.

### Quotient

a = 18.4 and b = 2.3 (1 d.p.): upper 18.45 ÷ 2.25 = 8.2; lower 18.35 ÷ 2.35 = 7.81 (to 3 s.f.).

## Deducing an answer to a given accuracy

1. Find the upper and lower bounds of the result without rounding.
2. Round both to 1 significant figure. Do they agree?
3. Try 2 significant figures, and so on.
4. The answer is the most precise value at which both bounds round to the same number.

| Bounds | 1 s.f. | 2 s.f. | Conclusion |
|---|---|---|---|
| 5.6 and 5.8 | 6 and 6 | 5.6 and 5.8 | 6 to 1 s.f. |
| 7.81 and 8.2 | 8 and 8 | 7.8 and 8.2 | 8 to 1 s.f. |
| 12.41 and 12.49 | 10 and 10 | 12 and 12 | 12 to 2 s.f. |
| 4.46 and 4.54 | 4 and 5 | 4.5 and 4.5 | 4.5 to 2 s.f. |

An upper bound that lies exactly on a rounding boundary is a special case; treat it as not reached.

## Exam traps

- Half the unit, not the whole unit.
- 4.3 to 1 d.p. means 4.25 up to 4.35, not 4.2 to 4.4.
- For 3 200 to 2 s.f., the half unit is 50, not 5 or 500.
- Subtract using the lower bound of the second quantity for the upper bound of a difference.
- Divide using the lower bound of the divisor for the upper bound of a quotient.
- Do not round the bounds before using them.
- Interval notation: lower bound with ⩽, upper bound with <.
- Quote units with the final answer.

## Self-test

1. Write the lower and upper bounds of 80 m, measured to the nearest 10 m.
2. Write the error interval for 0.6 kg to 1 decimal place.
3. Write the bounds of 45 000 to 2 significant figures.
4. A square has side 8 cm to the nearest centimetre. Find the upper bound of its area.
5. p = 12.4 and q = 3.6, both to 1 d.p. Find the lower bound of p - q.
6. Find the upper bound of p ÷ q for the same values.
7. A car travels 150 km (nearest 10 km) in 2 hours (nearest hour). Find the upper bound of its speed.
8. Two lengths are 6.7 cm and 3.4 cm to 1 d.p. Find the lower bound of their total length.

**Answers**

1. Lower **75 m**, upper **85 m**.
2. **0.55 ⩽ m < 0.65**.
3. **44 500 ⩽ x < 45 500**.
4. 8.5² = **72.25 cm²**.
5. 12.35 - 3.65 = **8.7**.
6. 12.45 ÷ 3.55 = **3.507...**, about **3.51**.
7. 155 ÷ 1.5 = **103.3 km/h** (103.33...).
8. 6.65 + 3.35 = **10.0 cm**.
