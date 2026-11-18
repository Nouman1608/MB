---
title: "Cambridge IGCSE Mathematics (0580): Exact trigonometric values"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Exact trigonometric values"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 6.3
syllabusTopics:
  - qualification: "igcse"
    topic: "trigonometry-cambridge-igcse-maths"
    subtopic: "exact-trigonometric-values-cambridge-igcse-maths"
description: "Study guide to Cambridge IGCSE Maths 0580 E6.3 (Extended only): using exact sin, cos and tan values in non-calculator triangle, surd and equation problems."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This study guide goes deeper into subtopic **E6.3 Exact trigonometric values** from Topic 6 Trigonometry of the Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027. It is **Extended only**: the Core syllabus lists C6.3 as "Extended content only". Because the point of exact values is to work without a calculator, expect them on **Paper 2**.

Where the values come from, and first examples, are in the [exact trigonometric values and trigonometric functions study guide](/resources/igcse-mathematics-0580-exact-trigonometric-values-and-trigonometric-functions/). This page concentrates on using them: unknowns on the bottom of a ratio, problems with two triangles, exact areas, angles of elevation and simple equations. Consolidate with the [exact trigonometric values revision notes](/resources/cambridge-igcse-mathematics-0580-exact-trigonometric-values-cambridge-igcse-maths-revision-notes/) and test yourself with the [exact trigonometric values practice questions](/resources/cambridge-igcse-mathematics-0580-exact-trigonometric-values-cambridge-igcse-maths-practice/).

## What this subtopic covers

The syllabus says: know the exact values of

1. sin x and cos x for x = 0°, 30°, 45°, 60° and 90°;
2. tan x for x = 0°, 30°, 45° and 60°.

tan 90° is left out because it has no value. Everything else follows from two triangles.

| x | 0° | 30° | 45° | 60° | 90° |
|---|---|---|---|---|---|
| sin x | 0 | 1/2 | √2/2 | √3/2 | 1 |
| cos x | 1 | √3/2 | √2/2 | 1/2 | 0 |
| tan x | 0 | √3/3 | 1 | √3 | not required |

## Think in side ratios, not just values

The two special triangles give **side ratios** you can scale to any size. This is often faster than writing a ratio equation.

```
45°, 45°, 90° triangle:   sides  1 : 1 : √2      (short : short : hypotenuse)
30°, 60°, 90° triangle:   sides  1 : √3 : 2      (opposite 30° : opposite 60° : hypotenuse)
```

The shortest side is always opposite the smallest angle. In the 30°–60°–90° triangle, the side opposite 30° is **half the hypotenuse**, which is the quickest fact to spot.

## Unknown on the bottom

When the unknown is the hypotenuse, or the adjacent side in a tangent, you divide by an exact value. Dividing by a fraction means multiplying by its reciprocal, and then you may need to rationalise the denominator (E1.18 Surds).

### Worked example 1

In a right-angled triangle, the side opposite a 45° angle is 6 cm. Find the exact length of the hypotenuse.

```
sin 45° = 6 / h
h = 6 ÷ (√2/2) = 6 × 2/√2 = 12/√2
rationalise: 12/√2 × √2/√2 = 12√2/2 = 6√2 cm
```

Check with the side ratio 1 : 1 : √2: a short side of 6 gives a hypotenuse of 6√2.

## Two triangles in one diagram

Paper 2 questions often join a 45° triangle to a 30°–60° triangle along a shared side. Find the shared side first.

### Worked example 2

In triangle ABC, D is the point on BC with AD perpendicular to BC. AD = 6 cm, angle ABC = 45° and angle ACB = 30°. Find the exact lengths of BC, AB and AC.

```
Triangle ABD (45°):  BD = AD = 6 cm
                     AB = 6√2 cm       (ratio 1 : 1 : √2)
Triangle ACD (30°):  AD is opposite the 30° angle, so
                     AC = 2 × 6 = 12 cm (opposite 30° = half the hypotenuse)
                     DC = 6√3 cm       (ratio 1 : √3 : 2)
BC = BD + DC = (6 + 6√3) cm
```

Leave a sum such as 6 + 6√3 as it is, or factorise it to 6(1 + √3). It cannot be combined into one surd.

## Exact areas

### Worked example 3

Find the exact area of an equilateral triangle with side 8 cm.

```
Height splits the triangle into two 30°–60°–90° triangles:
height = 8 × sin 60° = 8 × √3/2 = 4√3 cm
area = ½ × 8 × 4√3 = 16√3 cm²
```

Exact values also combine with the Extended area formula ½ab sin C from subtopic 6.5. For example, a triangle with sides 6 cm and 10 cm and an included angle of 30° has area ½ × 6 × 10 × ½ = 15 cm².

## Exact values with elevation (Extended 6.2)

### Worked example 4

From a point P on level ground, 30 m from the foot of a vertical tower, the angle of elevation of the top is 60°. A girl walks directly away from the tower to a point Q where the angle of elevation is 30°. Find the exact height of the tower and the distance PQ.

```
height = 30 × tan 60° = 30√3 m
distance from the tower to Q:  tan 30° = 30√3 / d
d = 30√3 ÷ (1/√3) = 30√3 × √3 = 30 × 3 = 90 m
PQ = 90 − 30 = 60 m
```

√3 × √3 = 3 is the step that turns a surd answer into a whole number. Look for it whenever 30° and 60° appear together.

## Simple equations

If an equation reduces to sin x, cos x or tan x equal to an exact value, and x is acute or between 0° and 90°, read the angle from the table. (Solutions beyond 90° use the graphs of subtopic E6.4.)

### Worked example 5

Solve, for 0° ≤ x ≤ 90°: (a) 2 cos x − √3 = 0, (b) 3 tan x = √3, (c) 4 sin² x = 3.

```
(a) cos x = √3/2          x = 30°
(b) tan x = √3/3          x = 30°
(c) sin² x = 3/4
    sin x = √3/2           (the negative root gives no angle in this range)
    x = 60°
```

## "Show that" questions

### Worked example 6

Show that sin 60° ÷ tan 30° = 3/2.

```
sin 60° = √3/2,  tan 30° = 1/√3
(√3/2) ÷ (1/√3) = √3/2 × √3/1 = 3/2
```

Every value must be written down before it is used, and the arithmetic must be shown. A calculator display of 1.5 earns nothing on Paper 2, where calculators are not allowed.

## Exam technique

- Write the exact value of each trigonometric term on its own line before combining.
- Simplify surds fully and rationalise when the question says "simplest form" or "rationalise".
- Do not replace an exact answer such as 6√2 with a decimal such as 8.49.
- If a ratio simplifies to 1/2, √2/2, √3/2, √3/3, 1 or √3, look for a standard angle.

## Common mistakes

- Swapping √3/2 and √2/2, or sin 30° and cos 30°.
- Putting √3 opposite the 30° angle; the side opposite 30° is the shortest.
- Writing sin 60° as 2 × sin 30°. sin(2 × 30°) is not 2 × sin 30°.
- Treating sin² x as sin(x²) instead of (sin x)².
- Adding unlike surds: 6 + 6√3 is not 12√3.
- Giving tan 90° a value.

## Frequently asked questions

**Is exact trigonometry on the Core paper for 0580?**
No. E6.3 is Extended only, so it appears on Papers 2 and 4, most often on the non-calculator Paper 2.

**Should I write 1/√3 or √3/3?**
They are equal. Use either unless the question asks for a rationalised denominator or simplest form, when √3/3 is the expected form.

**Why is tan 90° not in the syllabus list?**
tan 90° has no value: in the triangle the adjacent side becomes zero, and you cannot divide by zero.

## Next steps

- Consolidate with the [exact trigonometric values revision notes](/resources/cambridge-igcse-mathematics-0580-exact-trigonometric-values-cambridge-igcse-maths-revision-notes/).
- Practise with the [exact trigonometric values practice questions](/resources/cambridge-igcse-mathematics-0580-exact-trigonometric-values-cambridge-igcse-maths-practice/).
- Review the ratios themselves in the [right-angled triangles study guide](/resources/cambridge-igcse-mathematics-0580-right-angled-triangles-cambridge-igcse-maths/).

## Official syllabus

Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027, Cambridge International. Topic 6 Trigonometry, E6.3 Exact trigonometric values (Extended subject content), with C6.3 marked "Extended content only".
