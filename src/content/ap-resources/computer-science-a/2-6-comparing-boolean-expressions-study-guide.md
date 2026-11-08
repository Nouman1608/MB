---
resourceId: "mb-ap-csa-2.6-study-guide"
title: "Comparing Boolean Expressions: Study Guide (Computer Science A 2.6)"
description: "Learn equivalent Boolean expressions, De Morgan's laws and comparing object references, with a first-principles explanation, traced Java examples, a diagram, two worked examples and the mistakes to avoid."
course: "computer-science-a"
unit: 2
topics: ["2.6"]
resourceType: "study-guide"
prerequisites:
  - "Compound Boolean expressions with !, && and || (Topic 2.5)"
  - "Creating String objects and calling String methods (Topics 1.12 to 1.15)"
prerequisiteResources: ["mb-ap-csa-2.5-study-guide"]
learningObjectives:
  - "Use a truth table to show that two Boolean expressions are, or are not, equivalent"
  - "Apply De Morgan's laws and the complements of relational operators to rewrite a condition"
  - "Explain how == and != compare object references, and how equals compares contents"
  - "Use null comparisons, with a guard, so that a method is never called on a null reference"
skills: ["2", "3"]
studyMinutes: 40
difficulty: "stretch"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-2.6-revision-notes", "mb-ap-csa-2.6-practice", "mb-ap-csa-2.6-checklist"]
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
  - "For objects, == and != compare references (whether two variables name the same object); equals compares the contents."
  - "A reference can be null. Compare with == null or != null before calling a method, and put that test first with &&."
faqs:
  - question: "What does it mean for two Boolean expressions to be equivalent?"
    answer: "They evaluate to the same value for every possible combination of values of their variables. A truth table checks every combination. One combination that gives different results is enough to show they are not equivalent."
  - question: "What are De Morgan's laws?"
    answer: "!(a && b) is equivalent to !a || !b, and !(a || b) is equivalent to !a && !b. To negate a compound condition, negate each part and swap && with || (or || with &&)."
  - question: "Why does == give false for two Strings with the same letters?"
    answer: "== compares references. Two String objects created separately are different objects even if they contain the same characters. Use the equals method to compare the characters."
  - question: "What happens if I call a method on a null reference?"
    answer: "The program throws a NullPointerException. Test for null first, for example s != null && s.length() > 0, so the method call is skipped when s is null."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

## When are two conditions the same?

Programmers often rewrite a condition to make it shorter, clearer or the opposite way round. The rewrite is only safe if the new condition behaves exactly like the old one. Two Boolean expressions are **equivalent** if they evaluate to the **same value in all cases**: for every possible combination of values of the variables involved.

A **truth table** lists every combination and the value of each expression in it. If the two result columns match in every row, the expressions are equivalent. If even one row differs, they are not, and that row is a counterexample.

## Proving equivalence with a truth table

With two variables there are four rows. Here is the first of De Morgan's laws, `!(a && b)` against `!a || !b`.

| `a` | `b` | `a && b` | `!(a && b)` | `!a` | `!b` | `!a \|\| !b` |
|---|---|---|---|---|---|---|
| true | true | true | false | false | false | false |
| true | false | false | true | false | true | true |
| false | true | false | true | true | false | true |
| false | false | false | true | true | true | true |

The columns `!(a && b)` and `!a || !b` match in all four rows, so the two expressions are equivalent.

## De Morgan's laws

**De Morgan's laws** let you push a `!` inside a bracket. They say:

- `!(a && b)` is equivalent to `!a || !b`
- `!(a || b)` is equivalent to `!a && !b`

In words: to negate a compound condition, **negate each part and swap the operator** (`&&` becomes `||`, and `||` becomes `&&`). "It is not true that both hold" means "at least one fails". "It is not true that either holds" means "both fail".

You also need the **complements of the relational operators**, because the parts are often comparisons:

| Expression | Equivalent |
|---|---|
| `!(x < y)` | `x >= y` |
| `!(x <= y)` | `x > y` |
| `!(x > y)` | `x <= y` |
| `!(x >= y)` | `x < y` |
| `!(x == y)` | `x != y` |
| `!(x != y)` | `x == y` |

Notice that the complement of `<` is `>=`, not `>`: the boundary value x = y belongs to the opposite side. Applying both ideas:

```
!(x > 3 && y < 5)   =   !(x > 3) || !(y < 5)   =   x <= 3 || y >= 5
```

Two more useful identities: `!(!a)` is just `a`, and `a == true` is just `a`.

## Rewriting a range test

A common job is to turn "not in a range" into the plain form. For the age range 13 to 19 we check `!(age < 13 || age > 19)` against `age >= 13 && age <= 19` for four ages, two on the boundary and two just outside it.

```java
public class DeMorganDemo {
    public static void show(int age) {
        boolean original = !(age < 13 || age > 19);
        boolean rewritten = age >= 13 && age <= 19;
        System.out.println(age + " " + original + " " + rewritten);
    }

    public static void main(String[] args) {
        show(12);
        show(13);
        show(19);
        show(20);
    }
}
```

**Output:**

```text
12 false false
13 true true
19 true true
20 false false
```

Both expressions agree at the boundaries (13 and 19) and just outside them (12 and 20). That is evidence rather than a proof, but the algebra is exact: negating `age < 13` gives `age >= 13`, negating `age > 19` gives `age <= 19`, and the `||` becomes `&&`.

## Comparing object references

So far `==` compared primitive values. A variable of a **reference type**, such as `String`, does not hold the object itself; it holds a **reference** to it. Two different variables can hold references to the **same** object. For objects, `==` and `!=` compare **references**: do the two variables refer to the same object?

<figure>
<svg viewBox="0 0 600 250" role="img" aria-labelledby="f26-title f26-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="f26-title">Reference diagram: == compares references, equals compares contents</title>
<desc id="f26-desc">Three variable boxes a, c and b on the left. Arrows from a and from c point to the same String object containing cat. An arrow from b points to a different String object that also contains cat. Notes on the right: a == c is true because both references point to the same object; a == b is false because they refer to different objects; a.equals(b) is true because the characters are the same.</desc>
<defs><marker id="ah-f26" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="600" height="250" fill="#ffffff"/>
<rect x="20" y="20" width="70" height="36" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="55" y="43.6" font-size="16" text-anchor="middle" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">a</text>
<rect x="20" y="80" width="70" height="36" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="55" y="103.6" font-size="16" text-anchor="middle" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">c</text>
<rect x="20" y="170" width="70" height="36" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="55" y="193.6" font-size="16" text-anchor="middle" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">b</text>
<rect x="210" y="36" width="130" height="58" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="275" y="61.05" font-size="13" text-anchor="middle" fill="#1d2b44">String object</text>
<text x="275" y="78.05" font-size="13" text-anchor="middle" fill="#1d2b44">"cat"</text>
<rect x="210" y="160" width="130" height="58" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="275" y="185.05" font-size="13" text-anchor="middle" fill="#1d2b44">String object</text>
<text x="275" y="202.05" font-size="13" text-anchor="middle" fill="#1d2b44">"cat"</text>
<polyline points="90,38 150,38 210,55" fill="none" stroke="#1d2b44" stroke-width="2" marker-end="url(#ah-f26)"/>
<polyline points="90,98 150,98 210,76" fill="none" stroke="#1d2b44" stroke-width="2" marker-end="url(#ah-f26)"/>
<polyline points="90,188 210,189" fill="none" stroke="#1d2b44" stroke-width="2" marker-end="url(#ah-f26)"/>
<text x="380" y="62" font-size="14" text-anchor="start" fill="#1d2b44" font-weight="bold" font-family="ui-monospace, Menlo, Consolas, monospace">a == c  is true</text>
<text x="380" y="80" font-size="12" text-anchor="start" fill="#1d2b44">same object</text>
<text x="380" y="156" font-size="14" text-anchor="start" fill="#1d2b44" font-weight="bold" font-family="ui-monospace, Menlo, Consolas, monospace">a == b  is false</text>
<text x="380" y="174" font-size="12" text-anchor="start" fill="#1d2b44">two different objects</text>
<text x="380" y="206" font-size="14" text-anchor="start" fill="#1d2b44" font-weight="bold" font-family="ui-monospace, Menlo, Consolas, monospace">a.equals(b)  is true</text>
<text x="380" y="224" font-size="12" text-anchor="start" fill="#1d2b44">same characters</text>
</svg>
<figcaption>Figure 1. a and c hold the same reference, so a == c is true. b refers to a separate String object with the same characters, so a == b is false, though a.equals(b) is true.</figcaption>
</figure>

```java
String a = new String("cat");
String b = new String("cat");
String c = a;
System.out.println(a == b);
System.out.println(a == c);
System.out.println(a.equals(b));
```

**Output:**

```text
false
true
true
```

- `a == b` is false: each `new String("cat")` creates a separate object.
- `a == c` is true: the assignment `c = a` copies the reference, so both name the same object.
- `a.equals(b)` is true: the `equals` method of `String` compares the characters. It is part of the Java Quick Reference, with the signature `boolean equals(Object other)`.

Many classes define their own `equals` method, which decides what "equivalent" means for objects of that class, usually by comparing attributes. Writing your own `equals` is outside the scope of this course. What matters is that you use `equals`, not `==`, when you want to compare contents.

## null references

A reference variable can hold the special value `null`, meaning "no object". You can compare any reference with `null` using `==` or `!=` to find out whether it actually refers to an object. Calling a method on a `null` reference throws a `NullPointerException`, so the check must come **first**.

```java
String d = null;
System.out.println(d == null);
System.out.println(d != null && d.length() > 0);
```

**Output:**

```text
true
false
```

The second line is safe because of short-circuit evaluation (Topic 2.5): `d != null` is false, so `d.length()` is never called. Reversing the operands, `d.length() > 0 && d != null`, would throw a `NullPointerException`.

## Worked example 1: proving and rewriting

**Question.** (a) Show with a truth table that `!(p || q)` is equivalent to `!p && !q`. (b) Rewrite `!(score >= 50 || attempts < 3)` without any `!` in front of a bracket. (c) Are `a && !b` and `!(a && b)` equivalent?

**(a)**

| `p` | `q` | `p \|\| q` | `!(p \|\| q)` | `!p` | `!q` | `!p && !q` |
|---|---|---|---|---|---|---|
| true | true | true | false | false | false | false |
| true | false | true | false | false | true | false |
| false | true | true | false | true | false | false |
| false | false | false | true | true | true | true |

The fourth and seventh columns are identical in every row, so the expressions are equivalent.

**(b)** Apply De Morgan's law for `||`: negate each part and change `||` to `&&`. `!(score >= 50)` is `score < 50`. `!(attempts < 3)` is `attempts >= 3`. So the result is `score < 50 && attempts >= 3`. **Check:** try `score = 40, attempts = 5`. The original: `40 >= 50` false, `5 < 3` false, so `false || false` is false and `!` of that is true. The rewrite: `40 < 50` true and `5 >= 3` true, so true. They agree.

**(c)** Compare them row by row.

| `a` | `b` | `a && !b` | `!(a && b)` |
|---|---|---|---|
| true | true | false | false |
| true | false | true | true |
| false | true | false | true |
| false | false | false | true |

The third row differs (false against true), so they are **not equivalent**. `!(a && b)` equals `!a || !b`, which is true in more cases than `a && !b`.

## Worked example 2: equals, == and null

**Question.** Trace the code and give the output of each `println`.

```java
public class RefTrace {
    public static void main(String[] args) {
        String s = new String("tea");
        String t = new String("tea");
        String u = t;
        t = new String("coffee");
        System.out.println(s == u);
        System.out.println(s.equals(u));
        System.out.println(u == t);
        System.out.println(t.equals("coffee"));
        String w = null;
        System.out.println(w == null || w.length() == 0);
    }
}
```

**Output:**

```text
false
true
false
true
true
```

**Trace.**

| Statement | `s` | `t` | `u` |
|---|---|---|---|
| `s = new String("tea")` | object 1 "tea" | | |
| `t = new String("tea")` | object 1 | object 2 "tea" | |
| `u = t` | object 1 | object 2 | object 2 (same reference as `t`) |
| `t = new String("coffee")` | object 1 | object 3 "coffee" | object 2 |

1. `s == u`: object 1 against object 2, different objects, so **false**.
2. `s.equals(u)`: both contain "tea", so **true**.
3. `u == t`: object 2 against object 3, so **false**. Reassigning `t` changed only `t`; `u` still refers to the old object.
4. `t.equals("coffee")`: the characters match, so **true**.
5. `w == null || w.length() == 0`: `w == null` is true, so `||` short-circuits and `w.length()` is never called: **true**, with no exception.

**Check.** After `u = t`, `u == t` would have been true. It became false only because `t` was reassigned afterwards.

## Common misconceptions

- **"`==` compares the contents of two Strings."** It compares references. Use `equals` to compare contents.
- **"`!(a && b)` is `!a && !b`."** De Morgan's law swaps the operator: `!(a && b)` is `!a || !b`.
- **"The complement of `<` is `>`."** It is `>=`. The boundary belongs to the opposite side.
- **"One matching row proves two expressions equivalent."** Every row must match. One different row proves they are not equivalent.
- **"Assigning one reference variable to another copies the object."** It copies the reference, so both variables name the same object.
- **"`x != null` is the same as `x.equals(null)`."** Calling `equals` on a null reference throws a `NullPointerException`; the `!= null` test does not.
- **"The order of `d != null && d.length() > 0` does not matter."** If the method call is first and `d` is null, the program crashes.

## Where this leads

Simplified conditions make loop conditions easier to read in Topics 2.7 and 2.8. Comparing strings with `equals` and `compareTo` returns in Topics 2.10 and 4.14. Try the [practice questions](/advanced-course-resources/computer-science-a/2-6-comparing-boolean-expressions-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-a/2-6-comparing-boolean-expressions-revision-notes/) and tick off the [checklist](/advanced-course-resources/computer-science-a/2-6-comparing-boolean-expressions-checklist/). Then move to the [Topic 2.7 study guide](/advanced-course-resources/computer-science-a/2-7-while-loops-study-guide/) on `while` loops. If short-circuit evaluation is hazy, revisit the [Topic 2.5 study guide](/advanced-course-resources/computer-science-a/2-5-compound-boolean-expressions-study-guide/).
