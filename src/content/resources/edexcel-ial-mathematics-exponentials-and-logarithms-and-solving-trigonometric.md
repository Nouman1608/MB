---
title: "Pearson Edexcel International Advanced Level Mathematics: Exponentials, logarithms and trig equations (YMA01)"
seoTitle: "Edexcel IAL Maths P2 Logs, Exponentials, Trig Equations"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Exponentials and logarithms, and solving trigonometric equations"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 143
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-mathematics-2-edexcel-alevel-maths"
    subtopic: "p2-exponentials-and-logarithms-edexcel-alevel-maths"
  - qualification: "a-level"
    topic: "unit-p2-pure-mathematics-2-edexcel-alevel-maths"
    subtopic: "p2-trigonometry-edexcel-alevel-maths"
description: "Study guide to exponential graphs, laws of logarithms, a^x = b, change of base, identities and trig equations for Edexcel IAL Mathematics P2."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
This guide follows the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics, Further Mathematics and Pure Mathematics specification (Issue 3, April 2019). It covers Unit P2 topics 5.1 to 5.3 (exponentials and logarithms) and 6.1 to 6.2 (trigonometric identities and equations). The specification lists P2 as a compulsory unit for both IAS Mathematics and IAL Mathematics (and Pure Mathematics).

Use it with the [revision notes](/resources/edexcel-ial-mathematics-exponentials-and-logarithms-and-solving-trigonometric-revision-notes/) and the [practice set](/resources/edexcel-ial-mathematics-exponentials-and-logarithms-and-solving-trigonometric-practice/). For the rest of the unit, see [Pure Mathematics 2](/resources/a-level-edexcel-mathematics-pure-mathematics-2/) and the [P2 revision notes](/resources/edexcel-a-level-mathematics-pure2-revision-notes/). Course hub: [Edexcel A Level Mathematics](/boards/edexcel/a-level/mathematics/). Printable [checklist](/checklists/edexcel/a-level/mathematics/). Not sure where you stand? Try a [free 10-minute diagnostic](/diagnostics/).

## What this unit covers

| Spec | What you must be able to do |
|---|---|
| 5.1 | Know y = a^x and its graph, for a > 0 and a ≠ 1 |
| 5.2 | Use the laws of logarithms, including log_a(1/x) = −log_a x and log_a a = 1 |
| 5.3 | Solve equations of the form a^x = b (the change of base formula may be used) |
| 6.1 | Know and use tan θ = sin θ / cos θ and sin²θ + cos²θ = 1 |
| 6.2 | Solve simple trigonometric equations in a given interval |

## 5.1 The graph of y = a^x

An exponential function has the variable in the power. The base a must be positive and not equal to 1.

| Feature | a > 1 (growth) | 0 < a < 1 (decay) |
|---|---|---|
| Shape | rises, steeper as x increases | falls, flattening as x increases |
| y-intercept | (0, 1) | (0, 1) |
| Asymptote | y = 0 (the x-axis) as x → −∞ | y = 0 as x → +∞ |
| Range | y > 0 | y > 0 |

The curve never touches the x-axis and never goes below it, so a^x = 0 and a^x = −3 have no solutions. Also, (1/a)^x = a^(−x), so y = (1/2)^x is the reflection of y = 2^x in the y-axis.

### Worked example 1: finding the base

The curve y = a^x passes through (4, 81/16), where a > 0. Find a, then the value of y when x = −2.

```
a⁴ = 81/16
a = (81/16)^(1/4) = 3/2          (a is positive)
y = (3/2)^(−2) = (2/3)² = 4/9
```

Answer: a = 3/2, and y = 4/9 when x = −2.

## 5.2 Laws of logarithms

log_a x = y means a^y = x, for a > 0, a ≠ 1 and x > 0. A logarithm is an index. The laws below come from the laws of indices.

```
log_a (xy) = log_a x + log_a y
log_a (x/y) = log_a x − log_a y
log_a (x^k) = k log_a x
log_a (1/x) = −log_a x
log_a a = 1
```

These hold for a, x, y > 0 and a ≠ 1. The fourth is the third with k = −1. The last says a¹ = a.

Two warnings. log_a (x + y) does not simplify, and (log_a x)/(log_a y) is not log_a(x/y). A logarithm of a negative number or of zero does not exist.

### Worked example 2: one logarithm

Write 2 log_3 6 − log_3 4 + 1 as a single logarithm, then evaluate it.

```
2 log_3 6 = log_3 36                (power law)
log_3 36 − log_3 4 = log_3 9        (subtraction law)
1 = log_3 3                         (log_a a = 1)
log_3 9 + log_3 3 = log_3 27        (addition law)
log_3 27 = 3                        (because 3³ = 27)
```

The result is **3**. Replacing the constant 1 by log_3 3 is the step most often missed.

### Worked example 3: in terms of p and q

Given log_a 2 = p and log_a 5 = q, find each of these in terms of p and q.

(i) log_a 20: 20 = 2² × 5, so log_a 20 = 2p + q.

(ii) log_a (1/8): log_a (1/8) = −log_a 8 = −3 log_a 2 = −3p.

(iii) log_a (√(2a) / 25):

```
log_a √(2a) = ½ (log_a 2 + log_a a) = ½ (p + 1)
log_a 25 = 2q
so the whole expression = ½(p + 1) − 2q
```

Factorise each number into the values you were given, then apply the laws one at a time.

## 5.3 Solving a^x = b

When the unknown is in the power, take logarithms of both sides, then bring the power down with the third law. Any base for the logarithm works as long as you use the same base on both sides. Use base 10 or natural logs so the answer can be evaluated.

If b is an exact power of a, you can compare indices directly. If not, the answer is log_a b, written as a quotient.

### Change of base

```
log_a b = log_c b / log_c a        (a, b, c > 0; a, c ≠ 1)
```

Choose c to suit the problem. It is useful for evaluating a logarithm such as log_5 40 as ln 40 / ln 5, and for rewriting awkward logarithms in a common base. Setting c = b gives log_a b = 1 / log_b a.

### Worked example 4: evaluating and simplifying

(i) Find log_8 32 exactly. Use base 2: log_8 32 = log_2 32 / log_2 8 = 5/3.

(ii) Find log_5 40 to 3 significant figures: ln 40 / ln 5 = 3.6889 / 1.6094 = 2.29.

### Worked example 5: solving

Solve (i) 6^x = 50 and (ii) 2^(3x − 1) = 45. Give answers to 3 significant figures.

```
(i)  x ln 6 = ln 50
     x = ln 50 / ln 6 = 2.18

(ii) (3x − 1) ln 2 = ln 45
     3x − 1 = ln 45 / ln 2 = 5.4919
     3x = 6.4919
     x = 2.16
```

Keep the unrounded value from the quotient until the last line. In part (ii), divide by ln 2 first, then solve the linear equation.

### Worked example 6: inequalities and growth

(i) Find the smallest integer n with 1.04^n > 2.

n ln 1.04 > ln 2. Here ln 1.04 is positive, so the direction holds: n > ln 2 / ln 1.04 = 17.67. Smallest integer: **n = 18**.

(ii) Find the smallest integer n with 0.8^n < 0.1.

n ln 0.8 < ln 0.1. Here ln 0.8 is negative, so dividing by it reverses the inequality: n > ln 0.1 / ln 0.8 = 10.32. Smallest integer: **n = 11**.

Always check the sign of the logarithm you divide by.

## 6.1 Two identities

For every angle θ for which the expressions are defined:

```
tan θ = sin θ / cos θ
sin²θ + cos²θ = 1
```

The second gives two useful rearrangements: sin²θ = 1 − cos²θ and cos²θ = 1 − sin²θ. Writing sin²θ means (sin θ)². Note that tan θ is undefined where cos θ = 0.

### Worked example 7: finding exact values

Given sin θ = 3/5 and θ is obtuse, find cos θ and tan θ.

```
cos²θ = 1 − 9/25 = 16/25, so cos θ = ±4/5
θ is obtuse (90° < θ < 180°), so cos θ is negative: cos θ = −4/5
tan θ = (3/5) ÷ (−4/5) = −3/4
```

### Worked example 8: proving an identity

Prove that tan θ + 1/tan θ ≡ 1/(sin θ cos θ).

```
LHS = sin θ/cos θ + cos θ/sin θ
    = (sin²θ + cos²θ) / (sin θ cos θ)
    = 1 / (sin θ cos θ) = RHS
```

Start from the more complicated side, work on one side only, and name each identity when you use it.

## 6.2 Solving trigonometric equations in an interval

The specification asks for equations such as sin(x + π/2) = 3/4, cos(x + 30°) = 1/2, tan 2x = 1, a quadratic in sin x or cos x, and sin 2(x + π/6) = 1/2, each in a stated interval.

### Method

1. Rearrange to sin, cos or tan of an angle equal to a number (use the identities if two functions appear).
2. Rewrite the interval for the whole angle inside the brackets. If the angle is x + 20°, add 20° to both ends. If it is 3x, multiply both ends by 3.
3. Find the principal value from the inverse function.
4. Use symmetry and periodicity to list every value in the new interval.
5. Convert back to x and reject anything outside the original interval.

| Function | Solutions of f(u) = k | Period |
|---|---|---|
| sin u = k | u = α or 180° − α (π − α), plus full turns | 360° (2π) |
| cos u = k | u = α or −α, plus full turns | 360° (2π) |
| tan u = k | u = α, plus half turns | 180° (π) |

### Worked example 9: a shifted sine, in radians

Solve sin(x + π/6) = 0.6 for 0 ≤ x < 2π. Give answers to 3 significant figures.

```
Interval for u = x + π/6:  π/6 ≤ u < 13π/6   (0.524 ≤ u < 6.807)
arcsin 0.6 = 0.6435
u = 0.6435   or   π − 0.6435 = 2.4981
next values: 0.6435 + 2π = 6.927 (too big: 6.927 > 6.807)
x = u − π/6:  x = 0.120  or  x = 1.97
```

### Worked example 10: a shifted cosine, in degrees

Solve cos(x − 35°) = −1/2 for −180° < x < 180°.

```
Interval for u = x − 35°:  −215° < u < 145°
cos u = −1/2 gives u = ±120° (plus multiples of 360°)
u = 120° and u = −120° are both inside (−215°, 145°)
x = u + 35°:  x = 155°  or  x = −85°
```

The values u = ±240° fall outside the interval, so there are only two solutions.

### Worked example 11: a multiple angle

Solve tan 3x = 2 for 0° ≤ x < 180°, giving each answer to 1 decimal place.

```
Interval for 3x: 0° ≤ 3x < 540°
arctan 2 = 63.43°
3x = 63.43°, 243.43°, 423.43°          (add 180° each time)
x = 21.1°, 81.1°, 141.1°
```

Multiplying the angle by 3 triples the number of solutions you must look for. Finding only the first one is the usual error.

### Worked example 12: a quadratic in sin x

Solve 2 cos²x − sin x − 1 = 0 for 0° ≤ x < 360°.

```
Use cos²x = 1 − sin²x:
2(1 − sin²x) − sin x − 1 = 0
2 sin²x + sin x − 1 = 0
(2 sin x − 1)(sin x + 1) = 0
sin x = 1/2   or   sin x = −1
x = 30°, 150°     or   x = 270°
```

Replace so that only one function remains, then factorise. If a root is outside −1 to 1, reject it.

### Worked example 13: do not divide by a function

Solve tan x = 2 sin x for 0° ≤ x < 360°.

```
sin x / cos x = 2 sin x
sin x = 2 sin x cos x             (multiply by cos x, where cos x ≠ 0)
sin x (1 − 2 cos x) = 0
sin x = 0:     x = 0°, 180°
cos x = 1/2:   x = 60°, 300°
```

Dividing both sides by sin x would lose the solutions 0° and 180°. Collect the terms on one side and factorise.

### Worked example 14: a bracket with a factor of 2

Solve sin 2(x − π/12) = √3/2 for −π ≤ x < π.

```
Let u = 2(x − π/12) = 2x − π/6.
Interval for u: −13π/6 ≤ u < 11π/6
sin u = √3/2 gives u = π/3 or 2π/3, plus or minus 2π
In the interval: u = −5π/3, −4π/3, π/3, 2π/3
x = u/2 + π/12:  x = −3π/4, −7π/12, π/4, 5π/12
```

## Common errors

- Writing log_a(x + y) = log_a x + log_a y, or treating (log_a x)/(log_a y) as log_a(x/y).
- Forgetting that log_a a = 1 when a constant appears in a logarithm expression.
- Dividing an inequality by a negative logarithm without reversing the sign.
- Applying the interval for x to the angle inside the bracket instead of transforming it.
- Dividing by sin x or cos x instead of factorising, which discards solutions.
- Giving cos x = 3 or sin x = −2 as if they gave angles. Reject them.

## Next steps

Condense the results with the [revision notes](/resources/edexcel-ial-mathematics-exponentials-and-logarithms-and-solving-trigonometric-revision-notes/), then test yourself on the [practice questions](/resources/edexcel-ial-mathematics-exponentials-and-logarithms-and-solving-trigonometric-practice/).

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019 (Pearson Education Limited), Unit P2 topics 5.1 to 5.3 and 6.1 to 6.2.
