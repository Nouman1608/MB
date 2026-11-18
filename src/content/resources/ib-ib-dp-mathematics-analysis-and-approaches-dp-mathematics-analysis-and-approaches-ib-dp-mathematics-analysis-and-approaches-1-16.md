---
title: "IB DP Mathematics: Analysis and Approaches (AA): 1.16 Systems of linear equations (HL)"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Topic 1 -- Number and algebra"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 1.16
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-16"
description: "HL study guide to IB Maths AA 1.16: solving up to three linear equations in three unknowns, with unique, infinite and no-solution cases and parameters."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This study guide covers one subtopic of IB Diploma Programme Mathematics: Analysis and Approaches: section 1.16, solutions of systems of linear equations. It is HL only (AHL). The IB *Mathematics: analysis and approaches guide* (first assessment 2021) limits the content to a maximum of three equations in three unknowns, and asks you to recognise the three possible outcomes: a unique solution, infinitely many solutions, or no solution. You are expected to solve systems both by hand and with technology.

The broader [HL guide to counting, partial fractions, proof and linear systems](/resources/ib-dp-mathematics-aa-hl-counting-partial-fractions-proof-systems/) gives a first pass through this section. This page goes further: how to organise elimination so it never goes wrong, how to read the outcome from the last equation, how to handle parameters, and how to write and check a general solution. Condense it afterwards with the [1.16 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-16-revision-notes/) and test yourself with the [1.16 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-16-practice/).

## What the subtopic asks of you

| You must be able to | Where it is tested |
|---|---|
| Solve two or three linear equations in two or three unknowns by elimination | HL Paper 1 (no technology) |
| Solve the same systems with a GDC equation solver or matrix tool | HL Papers 2 and 3 |
| Decide whether a system has one solution, infinitely many or none | All papers |
| Give the general solution, in terms of a parameter, when there are infinitely many | All papers |
| Find the values of constants in the equations that produce each outcome | Mostly Paper 1 |

Two words appear in questions. A system that has at least one solution is **consistent**. A system with no solution is **inconsistent**.

## Key idea: elimination in a fixed order

Every hand method reduces the system to **triangular form**: the first equation still contains x, y and z, the second contains only y and z, and the third contains only z. Then you substitute back upwards.

A reliable order:

1. Choose a **pivot** equation with a simple x coefficient (ideally 1). Write it first.
2. Use it to remove x from the other two equations. You now have two equations in y and z.
3. Use one of those to remove y from the other. The last equation now has the form a·z = b.
4. Read the outcome from that last equation (next section), then back-substitute.

Label every equation (1), (2), (3) and write each operation, such as (2) − 2(1). Examiners award method marks for visible, correct row operations, and labels let you find an arithmetic slip quickly.

## Reading the outcome from the last equation

After elimination the final equation is a·z = b.

| Final equation | Meaning | Outcome |
|---|---|---|
| a ≠ 0 | z = b/a is fixed, so y and x are fixed | Unique solution |
| a = 0 and b = 0 (0 = 0) | One equation gave no new information | Infinitely many solutions |
| a = 0 and b ≠ 0 (0 = b) | The equations contradict each other | No solution (inconsistent) |

Geometrically, each equation in three unknowns is a plane. A unique solution is one point common to all three planes; infinitely many solutions form a line (or a whole plane) common to all three; no solution means there is no common point at all. The plane picture is developed in the HL vectors unit, covered by the [vectors, lines and planes guide](/resources/ib-dp-mathematics-aa-hl-vectors-lines-planes/).

## Worked example 1: a unique solution by hand

Solve
2x + y − z = −3,
x − 3y + 2z = 13,
3x + 2y + z = 2.

```
Reorder so the pivot has x coefficient 1:
(1)  x − 3y + 2z = 13
(2)  2x + y − z = −3
(3)  3x + 2y + z = 2
(2) − 2(1):   7y − 5z = −29     (4)
(3) − 3(1):  11y − 5z = −37     (5)
(5) − (4):    4y = −8,  so y = −2
(4):  −14 − 5z = −29,  so z = 3
(1):  x + 6 + 6 = 13,  so x = 1
```

Solution: x = 1, y = −2, z = 3. **Check in an equation you did not use last:** in (3), 3 − 4 + 3 = 2. The check costs ten seconds and catches most sign errors.

Notice that (4) and (5) had the same z coefficient, so subtracting removed z rather than y. Either variable can go second; remove whichever is quicker.

## Worked example 2: infinitely many solutions

Solve
x + 2y − z = 1,
2x + 5y + z = 7,
x + 3y + 2z = 6.

```
(2) − 2(1):  y + 3z = 5     (4)
(3) − (1):   y + 3z = 5     (5)
(5) − (4):   0 = 0
```

The last line is 0 = 0, so the system is consistent with infinitely many solutions. Let z = λ, where λ ∈ ℝ.

```
(4):  y = 5 − 3λ
(1):  x = 1 − 2(5 − 3λ) + λ = −9 + 7λ
General solution: x = −9 + 7λ, y = 5 − 3λ, z = λ,  λ ∈ ℝ
```

Check in (2): 2(−9 + 7λ) + 5(5 − 3λ) + λ = −18 + 14λ + 25 − 15λ + λ = 7. The λ terms cancel, as they must for every value of λ.

**Different but equivalent answers.** If you let x = μ instead, you get z = (μ + 9)/7 and y = 5 − 3(μ + 9)/7. This describes exactly the same set of solutions. Mark schemes accept any correct parametrisation, but your answer must state the parameter and that it can be any real number.

## Worked example 3: constants and the three cases

Consider
x + y + 2z = 3,
2x − y + z = 0,
x + 4y + kz = m.

```
(2) − 2(1):  −3y − 3z = −6,  so  y + z = 2            (4)
(3) − (1):    3y + (k − 2)z = m − 3                    (5)
(5) − 3(4):   (k − 5)z = m − 9                         (6)
```

Now read equation (6):

- **k ≠ 5:** z = (m − 9)/(k − 5), a unique solution for every m.
- **k = 5 and m ≠ 9:** (6) reads 0 = m − 9 ≠ 0, so there is no solution.
- **k = 5 and m = 9:** (6) reads 0 = 0, so there are infinitely many solutions.

For the last case let z = λ. Then y = 2 − λ and x = 3 − (2 − λ) − 2λ = 1 − λ. The general solution is x = 1 − λ, y = 2 − λ, z = λ. Check in the third equation with k = 5: (1 − λ) + 4(2 − λ) + 5λ = 9.

Two points earn the reasoning marks. First, deal with k before m: the coefficient decides whether z can be found at all. Second, say what each case means in words ("no solution", "infinitely many solutions"), not just "0 = 4".

## Two equations in two unknowns

The same logic applies to a 2 × 2 system. For 3x − 2y = 16 and 5x + 4y = −10, double the first and add: 11x = 22, so x = 2 and y = −5. A 2 × 2 system has no solution when the lines are parallel (same gradient, different intercept) and infinitely many when they coincide.

## Using technology

On Papers 2 and 3, a GDC simultaneous-equation solver or a matrix reduced-row-echelon tool gives the solution in seconds. Write down the system you entered, then the result. If the calculator reports "no solution" or "infinitely many solutions", you still need a general solution, so either read it from the reduced matrix or eliminate by hand. A reduced matrix with last row 0 0 0 | 0 means infinitely many solutions; a last row 0 0 0 | c with c ≠ 0 means none.

Technology is the right choice when coefficients are decimals, such as in a pricing or mixture context. For example, if three invented order totals give 2c + t + 3m = 16.00, c + 2t + m = 10.30 and 3c + 2m = 13.90, a solver returns c = 2.90, t = 2.40 and m = 2.60.

## Common mistakes

- Subtracting only some terms of an equation, especially the constant on the right-hand side.
- Writing "no solution" when the last line is 0 = 0. That is the infinitely-many case.
- Giving a general solution without naming the parameter or saying λ ∈ ℝ.
- Dividing by an expression such as k − 5 without first treating k = 5 as a separate case.
- Using a parameter value from one case in another case's working.
- Never checking a final answer in an equation not used for back-substitution.

## Exam technique and command words

- **Solve:** find all solutions; for a consistent system with infinitely many, that means the general solution.
- **Show that the system has infinitely many solutions:** reach 0 = 0 with visible row operations, then state the conclusion.
- **Find the value of k for which the system does not have a unique solution:** make the coefficient in the final equation zero.
- **Hence:** use the reduced form you have just found; starting again earns no method marks for the link.
- On Paper 1, give exact fractions such as z = 1/2, not decimals.

## Where to go next

Use the [1.16 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-16-revision-notes/) for quick recall, then attempt the [1.16 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-16-practice/). The [AA syllabus guide](/resources/ib-dp-mathematics-analysis-and-approaches-syllabus-guide/) shows where this HL section sits in the course.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus section AHL 1.16.
