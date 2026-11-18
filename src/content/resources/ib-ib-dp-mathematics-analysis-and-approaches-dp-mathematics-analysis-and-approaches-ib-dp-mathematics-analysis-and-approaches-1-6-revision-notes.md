---
title: "IB DP Mathematics: Analysis and Approaches (AA): 1.6 Simple deductive proof -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Number and algebra"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 1.06
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-6"
description: "Revision notes for IB DP Maths AA section 1.6: LHS to RHS layout, = and ≡, algebraic forms for integers, exam traps and a 12-question self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense **syllabus section 1.6, simple deductive proof**, of IB DP Mathematics: Analysis and Approaches (first assessment 2021). It is common content for SL and HL: numerical and algebraic proofs, the LHS to RHS layout, and the symbols for equality and identity. Full explanations and annotated examples are in the [section 1.6 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-6/).

## Condensed recall

**A deductive proof** moves from accepted facts to the result through steps that each follow logically from the last. A list of examples is never a proof of a general statement, however many examples it contains.

**Numerical versus algebraic.** A numerical proof establishes a specific fact, such as 1/4 − 1/6 = 1/12. An algebraic proof establishes a general fact for all permitted values, such as 1/(2n) − 1/(3n) ≡ 1/(6n). Questions often ask for the numerical case first, then the general case, then "hence" an application.

**LHS to RHS layout.**

1. Write "LHS =" and the left-hand side.
2. One valid step per line, each joined by "=".
3. Finish with the right-hand side and "= RHS".

Choose the more complicated side to start from. If both are complicated, simplify each separately to a common expression and conclude "LHS = RHS".

**Never** start from the result and operate on both sides; that assumes what you are proving.

**Equality and identity.**

- = : equal for particular values (an equation) or between consecutive working lines.
- ≡ : equal for all permitted values (an identity). State exclusions, such as x ≠ 0.

**Algebraic forms for integers** (n, m ∈ ℤ):

- even: 2n; odd: 2n + 1
- consecutive integers: n, n + 1, n + 2
- consecutive odd: 2n + 1, 2n + 3; consecutive even: 2n, 2n + 2
- multiple of k: km
- unrelated numbers need different letters: 2m + 1 and 2n + 1

**Finishing a divisibility or parity proof.** Factorise to k × (expression), then state that the expression is an integer. For "odd", reach 2 × (integer) + 1.

**Useful expansions to have automatic.**

- (a + b)² ≡ a² + 2ab + b² and (a − b)² ≡ a² − 2ab + b²
- (a + b)(a − b) ≡ a² − b²
- (a + b)² − (a − b)² ≡ 4ab

**Checking.** After an algebraic proof, substitute a convenient value into both sides. Agreement does not prove the result, but disagreement shows an error.

## Key terms

| Term | Meaning |
|---|---|
| Deductive proof | A chain of logically valid steps from accepted facts to a conclusion |
| Numerical proof | A proof of a fact about specific numbers |
| Algebraic proof | A proof of a fact for all values of a variable |
| Identity (≡) | A statement true for every permitted value of the variable |
| Equation (=) | A statement true only for particular values |
| LHS, RHS | Left-hand side and right-hand side of the statement being proved |
| Integer (ℤ) | A whole number: positive, negative or zero |
| Parity | Whether an integer is even or odd |
| Counterexample | A single case where a statement fails (developed further at HL in section 1.15) |

## Exam traps

- **Working on both sides.** Writing the identity, then cross-multiplying or squaring both sides, assumes the result. Examiners can withhold the marks.
- **One letter for two numbers.** "Let the two odd numbers be 2n + 1 and 2n + 1" proves only that an odd number plus itself is even.
- **Missing final sentence.** 6(n + 2) is a multiple of 6 *because n + 2 is an integer*. Say so.
- **Sign errors when subtracting a bracket.** −(n − 3)² = −n² + 6n − 9.
- **Substituting in a "show that".** "When x = 2 both sides equal 4/3" verifies one case; it is not the requested general proof.
- **Undefined values ignored.** Identities with fractions hold only where every denominator is non-zero.
- **Jumping to the answer.** In a "show that", the result is printed, so a final line copied from the question earns nothing without the steps before it.

## Self-test

1. Explain the difference between 2x + 4 = 10 and 2(x + 2) ≡ 2x + 4.
2. Write down algebraic forms for three consecutive even numbers.
3. Why should two unrelated odd numbers be written as 2m + 1 and 2n + 1?
4. Show that 3/5 − 1/3 = 4/15.
5. Show that (n + 4)² − n² ≡ 8(n + 2).
6. Prove that the sum of any three consecutive integers is a multiple of 3.
7. Prove that the product of two odd numbers is odd.
8. Show that (x + 1)/x − x/(x + 1) ≡ (2x + 1)/(x(x + 1)), stating the values of x that must be excluded.
9. A student "proves" 4x − 3 ≡ 3 − 4x by squaring both sides and getting the same expression. Explain the error.
10. Prove that the square of any even number is a multiple of 4.
11. What does the command term "verify" ask for, and how is it different from "show that"?
12. Prove that (a + b)² − (a − b)² ≡ 4ab, and hence write 4 × 17 × 3 as a difference of two squares.

**Answers**

1. The first is an equation, true only for x = 3. The second is an identity, true for every x.
2. 2n, 2n + 2, 2n + 4, where n ∈ ℤ.
3. Using the same letter forces them to be equal, so the proof would cover only that special case.
4. LHS = 9/15 − 5/15 = 4/15 = RHS.
5. LHS = n² + 8n + 16 − n² = 8n + 16 = 8(n + 2) = RHS.
6. n + (n + 1) + (n + 2) = 3n + 3 = 3(n + 1). n + 1 is an integer, so the sum is a multiple of 3.
7. (2m + 1)(2n + 1) = 4mn + 2m + 2n + 1 = 2(2mn + m + n) + 1. 2mn + m + n is an integer, so the product is odd.
8. LHS = ((x + 1)² − x²)/(x(x + 1)) = (x² + 2x + 1 − x²)/(x(x + 1)) = (2x + 1)/(x(x + 1)) = RHS. Exclude x = 0 and x = −1.
9. Squaring both sides assumes the result and also loses sign information: (4x − 3)² and (3 − 4x)² are equal even though 4x − 3 and 3 − 4x are not. The two expressions are equal only when x = 3/4.
10. (2n)² = 4n², and n² is an integer, so the square is a multiple of 4.
11. "Verify" asks for evidence that a result holds, usually by substituting values. "Show that" asks for the steps that reach a printed result in general.
12. LHS = (a² + 2ab + b²) − (a² − 2ab + b²) = 4ab = RHS. With a = 17 and b = 3: 4 × 17 × 3 = 20² − 14² (= 400 − 196 = 204).

## Where next

Write complete, marked proofs in the [section 1.6 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-6-practice/). HL students then extend proof to induction, contradiction and counterexample in the [section 1.15 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-15-revision-notes/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section 1.6.
