---
resourceId: "mb-ap-csa-2.6-revision-notes"
title: "Comparing Boolean Expressions: Revision Notes (Computer Science A 2.6)"
description: "One-page recap of equivalent Boolean expressions, De Morgan's laws and comparing object references: the rules, a key-relationships table, mistakes to avoid and a short self-check with answers."
course: "computer-science-a"
unit: 2
topics: ["2.6"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csa-2.6-study-guide"]
learningObjectives:
  - "Use a truth table to show that two Boolean expressions are, or are not, equivalent"
  - "Apply De Morgan's laws and the complements of relational operators to rewrite a condition"
skills: ["2", "3"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-2.6-study-guide", "mb-ap-csa-2.6-practice", "mb-ap-csa-2.6-checklist"]
next: "mb-ap-csa-2.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources:
  - "ced-computer-science-a"
  - "page-computer-science-a"
  - "exam-computer-science-a"
keyPoints:
  - "Two Boolean expressions are equivalent if they give the same value in every possible case; a truth table can prove it."
  - "De Morgan's laws: !(a && b) is equivalent to !a || !b, and !(a || b) is equivalent to !a && !b."
  - "The complement of a relational operator reverses it: !(x < y) is x >= y, and !(x == y) is x != y."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Recap

Two Boolean expressions are **equivalent** if they give the same value in all cases. A truth table checks every case. For objects, `==` and `!=` compare **references**; `equals` compares **contents**.

| Law or fact | Statement |
|---|---|
| De Morgan 1 | `!(a && b)` is equivalent to `!a \|\| !b` |
| De Morgan 2 | `!(a \|\| b)` is equivalent to `!a && !b` |
| Double negation | `!(!a)` is `a` |
| Relational complements | `!(x < y)` is `x >= y`; `!(x > y)` is `x <= y`; `!(x == y)` is `x != y` |
| Reference equality | `a == b` is true only if both name the same object |
| Content equality | `a.equals(b)` compares the characters of two Strings |
| Null test | `x == null` or `x != null`; test before calling a method |

## Key relationships

| Idea | Rule |
|---|---|
| Prove equivalence | Same value in every row of the truth table |
| Disprove equivalence | One row with different values |
| Negate a compound condition | Negate each part, swap `&&` and `\|\|` |
| Aliasing | `c = a` copies the reference, not the object |
| Guard | `s != null && s.length() > 0` is safe; reversed it is not |

## Assumptions

- All variables in the comparison have a value.
- `equals` is the `String` method in the Java Quick Reference; overriding `equals` is outside this course.
- Short-circuit evaluation applies to `&&` and `||`.

## Mistakes to avoid

- Forgetting to swap `&&` and `||` when applying De Morgan's law.
- Using `>` as the complement of `<`.
- Using `==` to compare the characters of two Strings.
- Concluding equivalence from one or two matching cases.
- Calling a method on a reference that might be null before checking it.
- Assuming that two variables assigned the same text refer to the same object.

## Worked mini-example

Simplify `!(n > 10 && n % 2 == 1)`. By De Morgan's law it equals `!(n > 10) || !(n % 2 == 1)`. The complements are `n <= 10` and `n % 2 != 1`, so the result is `n <= 10 || n % 2 != 1`. Check with `n = 12`: original `12 > 10` true and `12 % 2 == 1` false, so `true && false` is false and `!false` is true. Rewrite: `12 <= 10` false, `12 % 2 != 1` true, so true. They agree. Check with `n = 11`: original `true && true` is true, `!true` is false. Rewrite: `11 <= 10` false, `11 % 2 != 1` false, so false. They agree again. Because the rewrite follows from the law, it holds for all `n`; the two checks catch slips in the algebra.

## Quick self-check

1. Rewrite `!(a || b)` using De Morgan's law. *Answer: `!a && !b`.*
2. What is the complement of `x >= 8`? *Answer: `x < 8`.*
3. For `String p = new String("hi"); String q = new String("hi");`, what are `p == q` and `p.equals(q)`? *Answer: false and true.*
4. Why is `s.length() > 0 && s != null` unsafe? *Answer: when `s` is null, `s.length()` throws a NullPointerException before the null test is made.*

Full explanations and diagrams are in the [Topic 2.6 study guide](/advanced-course-resources/computer-science-a/2-6-comparing-boolean-expressions-study-guide/).
