---
resourceId: "mb-ap-csa-1.15-practice"
title: "String Manipulation: Practice Questions (Computer Science A 1.15)"
description: "Eleven original Marlbridge practice questions on String objects, concatenation, immutability, indices, length, substring, indexOf, equals and compareTo, with full explanations and rubrics."
course: "computer-science-a"
unit: 1
topics: ["1.15"]
resourceType: "practice-questions"
prerequisites: ["The Topic 1.15 study guide"]
learningObjectives: ["Evaluate String method calls and concatenation expressions by hand", "Explain immutability and the need to store a returned String", "Find indices and predict StringIndexOutOfBoundsException", "Write short code that takes strings apart with indexOf and substring"]
skills: ["2", "3", "4"]
studyMinutes: 55
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.15-study-guide", "mb-ap-csa-1.15-revision-notes", "mb-ap-csa-1.15-checklist"]
next: "mb-ap-csa-1.15-checklist"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["Questions 1 to 8 are multiple choice; 9 to 11 need written answers.", "Every answer explains why the wrong options are wrong.", "Rubrics are suggested Marlbridge rubrics, not official scoring."]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

These are **original Marlbridge practice questions**, not past exam questions. All code is invented for these questions and was compiled and run before publication. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. No calculator is allowed on the exam, so work everything by hand. Code fragments are assumed to be inside a `main` method. Write the index under each character when a question gives you a string: the first character is at index 0.

## Question 1 (multiple choice · foundation)

What is the value of `"banana split".length()`?

- (A) `11`
- (B) `12`
- (C) `13`
- (D) `5`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `banana` has 6 characters, the space is 1, and `split` has 5: 6 + 1 + 5 = 12. Spaces count.

- (A) leaves out the space.
- (C) counts one character too many (the last index is 11).
- (D) is the length of `split` alone.
</details>

## Question 2 (multiple choice · foundation)

What is the value of `"computer".substring(2, 5)`?

- (A) `"mput"`
- (B) `"omp"`
- (C) `"mpu"`
- (D) `"mpute"`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The letters are c0 o1 m2 p3 u4 t5 e6 r7. The substring starts at index 2 and ends at index 4 (`to - 1`): m, p, u.

- (A) includes index 5, as if the `to` index were included.
- (B) starts at index 1.
- (D) goes on to index 6.
</details>

## Question 3 (multiple choice · core)

What is printed by the following statement?

```java
System.out.println(1 + 2 + "3" + 4 + 5);
```

- (A) `3345`
- (B) `15`
- (C) `12345`
- (D) `3354`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The operators go left to right. `1 + 2` is the `int` 3. `3 + "3"` is the `String` `"33"`. Then `"33" + 4` is `"334"`, and `"334" + 5` is `"3345"`.

- (B) adds everything as numbers.
- (C) joins every item as text from the start, forgetting that `1 + 2` is evaluated first as addition.
- (D) is not produced by any order of evaluation.
</details>

## Question 4 (multiple choice · core)

What is printed by the following code segment?

```java
String w = "dog";
w.substring(1);
w = w + "s";
System.out.println(w);
```

- (A) `og`
- (B) `ogs`
- (C) `dog`
- (D) `dogs`

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** A `String` is immutable. `w.substring(1);` computes `"og"` but the result is not stored, so `w` still refers to `"dog"`. Then `w = w + "s";` joins `"dog"` and `"s"`, giving `"dogs"`.

- (A) and (B) assume that `substring` changed `w`.
- (C) forgets the assignment `w = w + "s";`.
</details>

## Question 5 (multiple choice · core)

What is displayed by the following statement?

```java
System.out.println("mississippi".indexOf("ss") + "mississippi".indexOf("pp"));
```

- (A) `13`
- (B) `10`
- (C) `2`
- (D) `8`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The letters are m(0) i(1) s(2) s(3) i(4) s(5) s(6) i(7) p(8) p(9) i(10). The first `"ss"` begins at index 2 and the first `"pp"` begins at index 8. The sum is 2 + 8 = 10.

- (A) uses index 5, the second occurrence of `"ss"`; `indexOf` returns the **first** occurrence.
- (C) is the first call alone.
- (D) is the second call alone.
</details>

## Question 6 (multiple choice · core)

Which statement about `"pear".compareTo("peach")` is true?

- (A) It returns a value less than 0
- (B) It returns a value greater than 0
- (C) It returns 0
- (D) It cannot be compared, because the strings have different lengths

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The first three letters, p, e and a, are the same. The fourth letters differ: `r` comes after `c` in the alphabet, so `"pear"` is greater than `"peach"` and the result is above 0.

- (A) would be correct for the reverse comparison.
- (C) is for identical strings.
- (D) is wrong: strings of different lengths are compared normally.
</details>

## Question 7 (multiple choice · core)

For `String s = "hello";` (length 5), which call throws a `StringIndexOutOfBoundsException`?

- (A) `s.substring(3, 6)`
- (B) `s.substring(5)`
- (C) `s.substring(2, 5)`
- (D) `s.substring(0, 5)`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The `to` index 6 is greater than the length 5, which is outside the allowed range.

- (B) is legal: starting at the length gives the empty string.
- (C) takes indices 2, 3 and 4: `"llo"`.
- (D) is the whole string.
</details>

## Question 8 (multiple choice · core)

What is printed by the following statement?

```java
System.out.println("Java".equals("java") + " " + "Java".equals("Java"));
```

- (A) `true true`
- (B) `true false`
- (C) `false false`
- (D) `false true`

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** `equals` compares the characters exactly, including capital letters, so `"Java"` and `"java"` are not equal. The second call compares identical strings. The two `boolean` results are joined to a space as text.

- (A) ignores the difference between `J` and `j`.
- (B) reverses the two results.
- (C) assumes that even identical strings are not equal.
</details>

## Question 9 (extracting parts · core)

The variable `full` holds `"Ada Lovelace"`.

(a) Write code using `indexOf` and `substring` that stores the first name in `first` and the last name in `last`.

(b) Write a statement that displays the last name preceded by the first initial and a full stop and a space: `A. Lovelace`.

(c) State the value of `full.indexOf(" ")`.

<details>
<summary>Worked solution</summary>

```java
String full = "Ada Lovelace";
int sp = full.indexOf(" ");
String first = full.substring(0, sp);
String last = full.substring(sp + 1);
System.out.println(first.substring(0, 1) + ". " + last);
```

(c) The characters are A0 d1 a2 and the space at index 3, so `full.indexOf(" ")` is **3**. Then `first` is `full.substring(0, 3)`, which is `"Ada"`; `last` is `full.substring(4)`, which is `"Lovelace"`. The first initial is `first.substring(0, 1)`, which is `"A"`. The output is `A. Lovelace`.

**Suggested Marlbridge rubric (5 marks):**

| Mark | Awarded for |
|---|---|
| 1 | `indexOf(" ")` used to find the space (value 3) |
| 1 | `first` taken as `substring(0, sp)` |
| 1 | `last` taken as `substring(sp + 1)` (starts after the space) |
| 1 | Initial taken with `substring(0, 1)` |
| 1 | Pieces joined to give `A. Lovelace` |
</details>

## Question 10 (tracing strings · stretch)

Trace the following code segment and state the output.

```java
String s = "marlbridge";
String a = s.substring(0, 4);
String b = s.substring(4);
s = b + a;
int k = s.indexOf("ma");
String c = s.substring(k, k + 2) + s.length();
System.out.println(s + " " + a + " " + k + " " + c);
```

<details>
<summary>Worked solution</summary>

The letters of `marlbridge` are m0 a1 r2 l3 b4 r5 i6 d7 g8 e9.

| After statement | s | a | b | k | c |
|---|---|---|---|---|---|
| `String s = "marlbridge";` | `marlbridge` | - | - | - | - |
| `String a = s.substring(0, 4);` | `marlbridge` | `marl` | - | - | - |
| `String b = s.substring(4);` | `marlbridge` | `marl` | `bridge` | - | - |
| `s = b + a;` | `bridgemarl` | `marl` | `bridge` | - | - |
| `int k = s.indexOf("ma");` | `bridgemarl` | `marl` | `bridge` | 6 | - |
| `String c = s.substring(k, k + 2) + s.length();` | `bridgemarl` | `marl` | `bridge` | 6 | `ma10` |

In `bridgemarl` the letters are b0 r1 i2 d3 g4 e5 m6 a7 r8 l9, so `"ma"` is at index 6, and the length is 10. `s.substring(6, 8)` is `"ma"`, and joining the `int` 10 gives `"ma10"`. The output is `bridgemarl marl 6 ma10`.

**Suggested Marlbridge rubric (5 marks):**

| Mark | Awarded for |
|---|---|
| 1 | `a` is `marl` and `b` is `bridge` |
| 1 | `s` becomes `bridgemarl` (a new string; `a` and `b` are unchanged) |
| 1 | `k` is 6 |
| 1 | `c` is `ma10` (substring then the length joined as text) |
| 1 | Output line exactly `bridgemarl marl 6 ma10` |
</details>

## Question 11 (a method with a precondition · stretch)

A class method removes the first and last characters of a string.

```java
public class Trim {
    /**
     * Returns s without its first and last characters.
     * Precondition: s.length() >= 2
     * Postcondition: the value returned has length s.length() - 2
     */
    public static String middle(String s) {
        return s.substring(1, s.length() - 1);
    }

    public static void main(String[] args) {
        System.out.println(middle("adventure"));
        System.out.println("[" + middle("ab") + "]");
    }
}
```

```text
dventur
[]
```

(a) Explain why `middle("adventure")` returns `dventur`.

(b) The output for `middle("ab")` is the empty string. Explain why that is legal.

(c) What would happen for `middle("a")`? Relate your answer to the precondition.

<details>
<summary>Worked solution</summary>

**(a)** The string has 9 characters (a0 d1 v2 e3 n4 t5 u6 r7 e8), so `s.length() - 1` is 8. `substring(1, 8)` takes indices 1 to 7: d, v, e, n, t, u, r, which is `dventur`.

**(b)** For `"ab"` the call is `substring(1, 1)`. Equal indices give the empty string, which is a valid result with length 0 = 2 - 2.

**(c)** For `"a"` the call is `substring(1, 0)`: the `from` index is greater than the `to` index, so a `StringIndexOutOfBoundsException` is thrown. The precondition `s.length() >= 2` is broken, and the method is not expected to check it, so the exception is the caller's responsibility.

**Suggested Marlbridge rubric (5 marks):**

| Mark | Awarded for |
|---|---|
| 1 | (a) length 9 and the range of indices 1 to 7 |
| 1 | (a) result `dventur` |
| 1 | (b) `substring(1, 1)` gives an empty string |
| 1 | (c) `substring(1, 0)` throws a `StringIndexOutOfBoundsException` |
| 1 | (c) links this to the broken precondition, with the caller responsible |
</details>

## How did you do?

- **Questions 1, 2, 5 and 7:** write the string with an index under every character, then apply the method's rule.
- **Questions 3 and 8:** re-read "Joining strings with + and +=" and "Comparing strings" in the [study guide](/advanced-course-resources/computer-science-a/1-15-string-manipulation-study-guide/).
- **Questions 4 and 10:** re-read "Strings cannot be changed". Every method returns a new value.
- **Question 6:** find the first position where the two strings differ, then compare those letters.
- **Questions 9 and 11:** practise extracting parts of three other strings.

Then try the [checklist](/advanced-course-resources/computer-science-a/1-15-string-manipulation-checklist/).
