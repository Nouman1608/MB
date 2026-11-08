---
resourceId: "mb-ap-csa-2.6-practice"
title: "Comparing Boolean Expressions: Practice Questions (Computer Science A 2.6)"
description: "10 original Marlbridge practice questions on equivalent Boolean expressions, De Morgan's laws and comparing object references, with full answers, an explanation of every wrong option and a suggested rubric."
course: "computer-science-a"
unit: 2
topics: ["2.6"]
resourceType: "practice-questions"
prerequisites:
  - "Compound Boolean expressions with !, && and || (Topic 2.5)"
  - "Creating String objects and calling String methods (Topics 1.12 to 1.15)"
prerequisiteResources: ["mb-ap-csa-2.6-study-guide"]
learningObjectives:
  - "Use a truth table to show that two Boolean expressions are, or are not, equivalent"
  - "Apply De Morgan's laws and the complements of relational operators to rewrite a condition"
  - "Explain how == and != compare object references, and how equals compares contents"
  - "Use null comparisons, with a guard, so that a method is never called on a null reference"
skills: ["2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-2.6-study-guide", "mb-ap-csa-2.6-revision-notes", "mb-ap-csa-2.6-checklist"]
next: "mb-ap-csa-2.6-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources:
  - "ced-computer-science-a"
  - "page-computer-science-a"
  - "exam-computer-science-a"
keyPoints:
  - "Questions 1 to 6 are multiple choice; the rest ask for written code, a trace or an explanation."
  - "Every answer explains why each wrong option is wrong."
  - "Rubrics are a suggested Marlbridge rubric, not official scoring."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

These are **original Marlbridge practice questions**, not past exam questions. All scenarios are fictional. Mark points are a suggested Marlbridge rubric, not an official scoring guideline. Assume every code segment compiles unless a question says otherwise, and that no calculator is allowed.

## Question 1 (multiple choice · foundation)

Which expression is equivalent to `!(x > 3 && y < 5)`?

- (A) `x <= 3 && y >= 5`
- (B) `x <= 3 || y >= 5`
- (C) `x < 3 || y > 5`
- (D) `x > 3 || y < 5`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** De Morgan's law turns `!(A && B)` into `!A || !B`. The complement of `x > 3` is `x <= 3`, and the complement of `y < 5` is `y >= 5`.

- (A) keeps `&&`, but De Morgan's law changes it to `||`.
- (C) uses `<` and `>` as complements, which drops the boundary values 3 and 5.
- (D) negates nothing.
</details>

## Question 2 (multiple choice · core)

Which statement about `!a || b` and `!(a && !b)` is correct?

- (A) They are equivalent, because De Morgan's law turns `!(a && !b)` into `!a || b`.
- (B) They are not equivalent: they differ when `a` is true and `b` is false.
- (C) They are not equivalent: they differ when `a` is false and `b` is true.
- (D) They are not equivalent: they differ when `a` and `b` are both false.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** De Morgan's law gives `!(a && !b)` = `!a || !(!b)`, and the double negation `!(!b)` is `b`, so the result is `!a || b`. A truth table agrees:

| `a` | `b` | `!a \|\| b` | `!(a && !b)` |
|---|---|---|---|
| true | true | true | true |
| true | false | false | false |
| false | true | true | true |
| false | false | true | true |

- (B) For a true and b false, both expressions are false, so they do not differ.
- (C) For a false and b true, both are true.
- (D) For a and b both false, both are true.
</details>

## Question 3 (multiple choice · core)

What is printed?

```java
String p = new String("moon");
String q = new String("moon");
String r = p;
System.out.println((p == q) + " " + (p == r) + " " + p.equals(q));
```

- (A) true true true
- (B) false true true
- (C) false false true
- (D) false true false

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `p == q`: two separate objects, so false. `p == r`: `r = p` copies the reference, so true. `p.equals(q)`: same characters, so true.

- (A) treats `==` as a content comparison for `p == q`.
- (C) treats the copied reference as a different object.
- (D) says that `equals` gives false for strings with identical characters.
</details>

## Question 4 (multiple choice · core)

Which code segment can throw a NullPointerException?

- (A) `String s = null; boolean b = s == null || s.length() > 3;`
- (B) `String s = null; boolean b = s != null && s.length() > 3;`
- (C) `String s = null; boolean b = s.length() > 3 && s != null;`
- (D) `String s = "abc"; boolean b = s != null && s.length() > 3;`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The method call `s.length()` is evaluated first and `s` is null, so the program throws before the null test is reached.

- (A) is safe: `s == null` is true, so `||` skips the call.
- (B) is safe: `s != null` is false, so `&&` skips the call.
- (D) is safe: `s` refers to an object.
</details>

## Question 5 (multiple choice · core)

Which pair of expressions is **not** equivalent for all integer values of `n`?

- (A) `!(n < 0)` and `n >= 0`
- (B) `!(n > 5 || n < 2)` and `n <= 5 && n >= 2`
- (C) `!(n == 3 && n > 0)` and `n != 3 || n <= 0`
- (D) `!(n >= 4)` and `n <= 4`

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The complement of `n >= 4` is `n < 4`, not `n <= 4`. For `n = 4` the first is false and the second is true.

- (A) is the standard complement.
- (B) applies De Morgan's law for `||` and complements both comparisons correctly.
- (C) applies De Morgan's law for `&&`: `!(n == 3)` is `n != 3` and `!(n > 0)` is `n <= 0`.
</details>

## Question 6 (multiple choice · stretch)

What is printed?

```java
String x = new String("ant");
String y = x;
x = new String("bee");
String z = new String("bee");
System.out.println((x == y) + " " + (x == z) + " " + x.equals(z) + " " + (x == null));
```

- (A) false false true false
- (B) false true true false
- (C) true false true false
- (D) false false false true

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** After `x = new String("bee")`, `x` refers to a new object, while `y` still refers to the original "ant" object, so `x == y` is false. `x` and `z` are separate objects, so `x == z` is false. The characters match, so `x.equals(z)` is true. `x` is not null, so the last is false.

- (B) treats the two "bee" objects as one object.
- (C) assumes `y` followed `x` when `x` was reassigned.
- (D) misreads the final comparison and the `equals` result.
</details>

## Question 7 (constructed response · core)

(a) Complete a truth table to decide whether `!(p && q)` and `!p && !q` are equivalent. (4 marks)

(b) If they are not equivalent, give a row that shows it. (1 mark)

(c) Write the expression that **is** equivalent to `!(p && q)`. (1 mark)

<details>
<summary>Answer and explanation</summary>

**(a)**

| `p` | `q` | `!(p && q)` | `!p && !q` |
|---|---|---|---|
| true | true | false | false |
| true | false | true | false |
| false | true | true | false |
| false | false | true | true |

The columns differ in rows 2 and 3, so the expressions are **not equivalent**.

**(b)** For `p` true and `q` false, `!(p && q)` is true but `!p && !q` is false.

**(c)** `!p || !q` (De Morgan's law).

**Suggested Marlbridge rubric (6 marks).** One mark for each correct row of the table (4); one mark for a valid counterexample row; one mark for `!p || !q`.
</details>

## Question 8 (constructed response · core)

Rewrite each condition so that no `!` appears in front of a bracket, and each comparison is stated in its simplest form. (6 marks)

(a) `!(a < 10 && b == 4)`
(b) `!(c >= 7 || d != 0)`
(c) `!(!(e > 2) || f < 9)`

<details>
<summary>Answer and explanation</summary>

**(a)** `a >= 10 || b != 4`.

**(b)** `c < 7 && d == 0`.

**(c)** `e > 2 && f >= 9`. Working: De Morgan gives `!(!(e > 2)) && !(f < 9)`. The double negation `!(!(e > 2))` is `e > 2`, and the complement of `f < 9` is `f >= 9`.

**Suggested Marlbridge rubric (6 marks).** For (a) and (b): 1 mark for the correct operator swap and 1 mark for correct complements. For (c): 1 mark for removing the double negation and 1 mark for the final expression. A student who writes `f > 9` has used the wrong complement and loses the second mark in that part.
</details>

## Question 9 (constructed response · core)

Trace the code and give each printed value. (6 marks)

```java
public class Q9 {
    public static void main(String[] args) {
        String m = new String("sun");
        String n = m;
        String o = new String("sun");
        n = new String("sun");
        System.out.println(m == n);
        System.out.println(m == o);
        System.out.println(m.equals(n));
        System.out.println(n.equals(o));
        String p = null;
        System.out.println(p != null && p.equals("sun"));
        System.out.println(p == null || p.equals("sun"));
    }
}
```

<details>
<summary>Answer and explanation</summary>

| Line | Value | Reason |
|---|---|---|
| `m == n` | false | `n` was reassigned to a new object, so it no longer shares the object with `m` |
| `m == o` | false | `m` and `o` are separate objects |
| `m.equals(n)` | true | both contain "sun" |
| `n.equals(o)` | true | both contain "sun" |
| `p != null && p.equals("sun")` | false | `p != null` is false, so `equals` is never called |
| `p == null \|\| p.equals("sun")` | true | `p == null` is true, so `equals` is never called |

**Suggested Marlbridge rubric (6 marks).** One mark for each line. Give no marks for a line whose answer is right but whose reasoning mentions comparing the characters with `==`.
</details>

## Question 10 (constructed response · stretch)

A method must return true when a username is **valid**: it is not null, it has at least 4 characters, and it is not the word "admin".

```java
public static boolean valid(String name) {
    return name != null && name.length() >= 4 && !name.equals("admin");
}
```

(a) Evaluate the method for `null`, "abc", "admin" and "maria". (4 marks)

(b) Explain why the null test must be first. (1 mark)

(c) Use De Morgan's law to write an expression for **invalid**, that is `!valid`. (2 marks)

<details>
<summary>Answer and explanation</summary>

**(a)** `null`: false (the first test fails; the others are not evaluated). "abc": false (length 3 is less than 4). "admin": false (it equals "admin"). "maria": true.

**(b)** If `name` is null, the call `name.length()` would throw a `NullPointerException`. The short-circuit `&&` stops after the first test, which is false, so the other tests are never evaluated.

**(c)** `name == null || name.length() < 4 || name.equals("admin")`. Each part is negated (`!=` becomes `==`, `>=` becomes `<`, and `!name.equals(...)` becomes `name.equals(...)`) and each `&&` becomes `||`. The null test is still first, so `name.length()` is only reached when `name` is not null.

**Suggested Marlbridge rubric (7 marks).**

| Marks | Awarded for |
|---|---|
| 4 | (a) one mark for each correct value |
| 1 | (b) explains the NullPointerException and the short-circuit |
| 1 | (c) all `&&` swapped for `\|\|` |
| 1 | (c) all three parts correctly negated |
</details>

## How did you do?

Questions 1, 2, 5 and 7 test equivalence and De Morgan's laws. Questions 3, 4, 6, 9 and 10 test references and null. If you missed Question 3 or 6, revisit "Comparing object references" in the [study guide](/advanced-course-resources/computer-science-a/2-6-comparing-boolean-expressions-study-guide/). If you missed Question 1 or 8, review "De Morgan's laws". Then use the [checklist](/advanced-course-resources/computer-science-a/2-6-comparing-boolean-expressions-checklist/).
