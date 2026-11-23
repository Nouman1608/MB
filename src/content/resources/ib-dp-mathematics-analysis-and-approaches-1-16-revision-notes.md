---
title: "IB DP Mathematics: Analysis and Approaches (AA): 1.16 Systems of linear equations (HL) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Number and algebra"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 1.16
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-16"
description: "Revision notes for IB Maths AA HL 1.16 linear systems: elimination steps, reading the final equation, general solutions, exam traps and a 12-question self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section 1.16 of the IB *Mathematics: analysis and approaches guide* (first assessment 2021): solutions of systems of up to three linear equations in three unknowns, including the cases of a unique solution, infinitely many solutions and no solution. The section is HL only. For full explanations and longer worked examples, use the [1.16 study guide](/resources/ib-dp-mathematics-analysis-and-approaches-1-16/); for exam-style questions, use the [1.16 practice set](/resources/ib-dp-mathematics-analysis-and-approaches-1-16-practice/).

## Core recall

- A **linear** equation has each unknown to the power 1 only, with no products such as xy.
- The syllabus maximum is **three equations in three unknowns**. Two equations in two unknowns follow the same rules.
- There are exactly **three outcomes**: one solution, infinitely many, or none. A linear system can never have exactly two solutions.
- If a system has two different solutions P and Q, every point (1 − t)P + tQ is also a solution, so it has infinitely many.
- Solve **by hand** on HL Paper 1; on Papers 2 and 3 you may use a GDC, but you must still interpret what it shows.

## Key terms

| Term | Meaning |
|---|---|
| Consistent | The system has at least one solution |
| Inconsistent | The system has no solution |
| Unique solution | Exactly one ordered triple (x, y, z) satisfies every equation |
| General solution | All solutions written in terms of a parameter, such as x = 2 − λ, y = 1 + λ, z = λ, λ ∈ ℝ |
| Parameter | A letter (λ, μ, t) that can take any real value |
| Pivot equation | The equation used to remove a variable from the others |
| Row operation | Replacing an equation by itself plus a multiple of another, written e.g. (3) − 2(1) |
| Triangular form | Equations containing x, y, z; then y, z; then z only |
| Back-substitution | Finding z, then y, then x from the triangular form |

## The method in five lines

1. Label the equations (1), (2), (3) and put one with x coefficient 1 first if possible.
2. Remove x from (2) and (3) using (1).
3. Remove y (or z) from one of the two new equations using the other.
4. Read the last equation a·z = b.
5. Back-substitute and check in an unused equation.

## Reading the last equation a·z = b

| Case | Outcome | What to write |
|---|---|---|
| a ≠ 0 | Unique solution | z = b/a, then y and x |
| a = 0, b = 0 | Infinitely many solutions | "0 = 0, so the system is consistent with infinitely many solutions"; let z = λ |
| a = 0, b ≠ 0 | No solution | "0 = b is false, so the system is inconsistent" |

When a and b contain constants, solve **a = 0 first**. Only the values that make a = 0 can give "none" or "infinitely many"; then test b at those values.

**Quick example.** A reduced system ends with (k² − 4)z = k − 2.
- k ≠ ±2: unique solution.
- k = 2: 0 = 0, infinitely many solutions.
- k = −2: 0 = −4, no solution.

## Writing a general solution

- Let the free variable equal a parameter: z = λ, λ ∈ ℝ.
- Express the others in terms of λ from the triangular form.
- Substitute into an original equation: the λ terms must cancel.
- Another valid answer may use a different free variable; the solution set is the same.

**Quick example.** From y − 2z = 3 and x + y + z = 4: let z = λ, then y = 3 + 2λ and x = 4 − (3 + 2λ) − λ = 1 − 3λ.

## Using a GDC well

- Enter the coefficients carefully, including zeros for missing terms (3x + 2z = 5 has y coefficient 0).
- Copy the system you entered into your answer.
- A reduced matrix with last row 0 0 0 | 0 means infinitely many solutions; 0 0 0 | c with c ≠ 0 means none.
- Give decimal answers to 3 significant figures unless told otherwise; give exact fractions on Paper 1.

## Exam traps

- Losing the minus sign on the constant term during a row operation.
- Calling 0 = 0 "no solution". It is the infinitely-many case.
- Dividing by (k − 3) without treating k = 3 separately.
- Answering "infinitely many" without the general solution when the question says "solve" or "find".
- Leaving out "λ ∈ ℝ" or not defining the parameter at all.
- Missing a zero coefficient when entering a system into a GDC.
- Stating an answer without checking it in an unused equation.

## Self-test

1. What does it mean for a system to be consistent?
2. A reduced system ends with 0z = 0. What is the outcome?
3. A reduced system ends with 0z = 3. What is the outcome?
4. Solve 2x + y = 7 and x − 3y = 7.
5. Solve x + y + z = 6, y − z = 1, 2z = 4.
6. A reduced system ends with (k + 2)z = k − 1. For which k is there no solution? Can there be infinitely many?
7. Is (2 − λ, 1 + 2λ, λ) a solution of x + y − z = 3 for every λ?
8. Write the general solution of y + 2z = 4 and x − y = 1, using z = λ.
9. Explain why the system x + y − z = 0, 2x − y + 3z = 0, x + 4y − 6z = 0 must be consistent.
10. Describe the solutions of 2x + 4y = 6 and x + 2y = 3.
11. Describe the solutions of 2x + 4y = 6 and x + 2y = 5.
12. A system has the two solutions (1, 0, 2) and (3, 2, 2). How many solutions does it have?

### Answers

1. It has at least one solution.
2. Infinitely many solutions.
3. No solution: the system is inconsistent.
4. From the second, x = 7 + 3y; then 14 + 6y + y = 7, so y = −1 and x = 4.
5. z = 2, y = 3, x = 1.
6. k = −2 gives 0 = −3, so no solution. Infinitely many would need k + 2 = 0 and k − 1 = 0 together, which is impossible, so never.
7. Yes: (2 − λ) + (1 + 2λ) − λ = 3 for every λ.
8. z = λ, y = 4 − 2λ, x = 5 − 2λ, λ ∈ ℝ.
9. x = y = z = 0 satisfies every equation, because each right-hand side is 0.
10. The second equation is half the first, so the lines coincide: infinitely many solutions, x = 3 − 2λ, y = λ, λ ∈ ℝ.
11. Halving the first gives x + 2y = 3, which contradicts x + 2y = 5: no solution (parallel lines).
12. Infinitely many, since two distinct solutions of a linear system imply infinitely many.

## Where to go next

Return to the [1.16 study guide](/resources/ib-dp-mathematics-analysis-and-approaches-1-16/) for any step that felt uncertain, then complete the [1.16 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-1-16-practice/). The wider HL unit is summarised in the [counting, partial fractions, proof and linear systems revision notes](/resources/ib-dp-mathematics-aa-hl-counting-partial-fractions-proof-systems-revision-notes/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus section AHL 1.16.
