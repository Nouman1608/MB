---
resourceId: "mb-ap-csa-2.10-practice"
title: "Implementing String Algorithms: Practice Questions (Computer Science A 2.10)"
description: "10 original Marlbridge practice questions on standard algorithms that process strings with loops, with full answers, an explanation of every wrong option and a suggested rubric."
course: "computer-science-a"
unit: 2
topics: ["2.10"]
resourceType: "practice-questions"
prerequisites:
  - "String methods length, substring, indexOf, equals and compareTo (Topic 1.15)"
  - "for and while loops (Topics 2.7 and 2.8)"
prerequisiteResources: ["mb-ap-csa-2.10-study-guide"]
learningObjectives:
  - "Traverse a String with a loop using length and substring(i, i + 1), without going out of range"
  - "Write standard string algorithms: check a property, count matching substrings, and build a reversed string"
  - "Explain that String objects cannot be changed, so methods return new strings that must be assigned"
  - "Diagnose StringIndexOutOfBoundsException, off-by-one errors in substring windows and compile errors in string code"
skills: ["2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-2.10-study-guide", "mb-ap-csa-2.10-revision-notes", "mb-ap-csa-2.10-checklist"]
next: "mb-ap-csa-2.10-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. All scenarios are fictional. Mark points are a suggested Marlbridge rubric, not an official scoring guideline. Use only the String methods listed in this topic. Assume every code segment compiles unless a question says otherwise, and that no calculator is allowed.

## Question 1 (multiple choice · foundation)

What is printed?

```java
String s = "computer";
System.out.println(s.substring(3, 6));
System.out.println(s.length());
```

- (A) put then 8
- (B) mput then 8
- (C) put then 7
- (D) pute then 8

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The characters of "computer" are c(0) o(1) m(2) p(3) u(4) t(5) e(6) r(7). `substring(3, 6)` takes indexes 3, 4 and 5: "put". The length is 8.

- (B) starts one index too early.
- (C) gets the substring right but treats the last index (7) as the length.
- (D) includes the end index 6.
</details>

## Question 2 (multiple choice · core)

What is printed?

```java
String word = "banana";
int count = 0;
for (int i = 0; i < word.length(); i++) {
    if (word.substring(i, i + 1).equals("a")) {
        count++;
    }
}
System.out.println(count);
```

- (A) 2
- (B) 3
- (C) 6
- (D) 0

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The letter "a" is at indexes 1, 3 and 5, so `count` is 3.

- (A) misses one occurrence.
- (C) is the length of the String, the number of loop passes.
- (D) would be the result if no letter matched, but "a" occurs three times.
</details>

## Question 3 (multiple choice · core)

What is printed?

```java
String s = "abc";
String r = "";
for (int i = 0; i < s.length(); i++) {
    r = s.substring(i, i + 1) + r;
}
System.out.println(r);
```

- (A) abc
- (B) cba
- (C) bca
- (D) c

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Each new letter goes in front: "a", then "ba", then "cba".

- (A) would be the result of appending (`r = r + ...`).
- (C) comes from an incorrect mix of prepending and appending.
- (D) keeps only the last letter, as if `r` were replaced each pass without keeping the previous text.
</details>

## Question 4 (multiple choice · core)

Which line causes a `StringIndexOutOfBoundsException` when it runs?

```java
String s = "river";
```

- (A) `String a = s.substring(0, 5);`
- (B) `String a = s.substring(5);`
- (C) `String a = s.substring(2, 6);`
- (D) `String a = s.substring(1, 1);`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** "river" has length 5, so the end index of a substring can be at most 5. `substring(2, 6)` uses 6, which is out of range.

- (A) is valid: it returns the whole String.
- (B) is valid: a start equal to the length returns the empty String.
- (D) is valid: the start equals the end, so it returns the empty String.
</details>

## Question 5 (multiple choice · core)

What is printed?

```java
String s = "sunny";
s.substring(1, 3);
s = s + "!";
System.out.println(s);
```

- (A) un!
- (B) unny!
- (C) sunny!
- (D) sun!

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The call `s.substring(1, 3)` returns "un" but its result is not stored, and Strings are immutable, so `s` is still "sunny". Then "!" is added.

- (A) assumes `s` became "un".
- (B) assumes `s` was shortened to "unny".
- (D) assumes `s` became "sun".
</details>

## Question 6 (multiple choice · stretch)

A method is intended to count how many times "ab" appears in a String. For which input does it throw an exception?

```java
public static int countAb(String s) {
    int count = 0;
    for (int i = 0; i < s.length(); i++) {
        if (s.substring(i, i + 2).equals("ab")) {
            count++;
        }
    }
    return count;
}
```

- (A) Only when `s` is empty.
- (B) Only when `s` contains no "ab".
- (C) For any String of length 1 or more.
- (D) Only for very long Strings.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** On the last pass `i` is `s.length() - 1`, so the window is `substring(length - 1, length + 1)`, whose end index is beyond the length. That throws `StringIndexOutOfBoundsException` for every String of length 1 or more. (Even `"ab"` fails: the second pass uses `substring(1, 3)`.) The loop should stop at `i <= s.length() - 2`.

- (A) is wrong: an empty String never enters the loop, so it does not throw.
- (B) is wrong: the problem is the loop bound, not what the String contains.
- (D) is wrong: the length of the String does not matter; the last window is always out of range.
</details>

## Question 7 (constructed response · core)

Write a method `countVowels(String s)` that returns the number of vowels (a, e, i, o, u in lower case) in `s`. Use `indexOf` on a String of vowels. (5 marks)

Then give `countVowels("education")`. (1 mark)

<details>
<summary>Answer and explanation</summary>

**Model answer.**

```java
public static int countVowels(String s) {
    int count = 0;
    for (int i = 0; i < s.length(); i++) {
        String letter = s.substring(i, i + 1);
        if ("aeiou".indexOf(letter) >= 0) {
            count++;
        }
    }
    return count;
}
```

"education" has the letters e, d, u, c, a, t, i, o, n. The vowels are e, u, a, i, o: **5**.

**Suggested Marlbridge rubric (6 marks).**

| Marks | Awarded for |
|---|---|
| 1 | Counter initialised to 0 before the loop |
| 1 | Loop covers every index (`i < s.length()` from 0) |
| 1 | Extracts one character with `substring(i, i + 1)` |
| 1 | Tests membership correctly (`indexOf(...) >= 0`; a test of `> 0` loses this mark) |
| 1 | Increments the counter inside the selection and returns it after the loop |
| 1 | 5 |
</details>

## Question 8 (constructed response · core)

Write a method `isPalindrome(String s)` that returns true if `s` reads the same forwards and backwards. Do not call any method you have not written. (6 marks)

<details>
<summary>Answer and explanation</summary>

**Model answer.**

```java
public static boolean isPalindrome(String s) {
    String rev = "";
    for (int i = 0; i < s.length(); i++) {
        rev = s.substring(i, i + 1) + rev;
    }
    return s.equals(rev);
}
```

An alternative with no new string compares the first and last characters moving inward:

```java
public static boolean isPalindrome(String s) {
    for (int i = 0; i < s.length() / 2; i++) {
        String front = s.substring(i, i + 1);
        String back = s.substring(s.length() - 1 - i, s.length() - i);
        if (!front.equals(back)) {
            return false;
        }
    }
    return true;
}
```

**Suggested Marlbridge rubric (6 marks).**

| Marks | Awarded for |
|---|---|
| 1 | Correct header and boolean return |
| 2 | Builds the reverse correctly (new letter placed in front), or pairs front and back correctly in the alternative |
| 1 | Compares with `equals`, not `==` |
| 1 | Every index is visited, or half the String in the alternative, with no out-of-range call |
| 1 | Returns the correct value on every path (the empty String is a palindrome) |
</details>

## Question 9 (constructed response · core)

Trace the code and give the output. (6 marks)

```java
String s = "tattoo";
int count = 0;
String t = "";
for (int i = 0; i <= s.length() - 2; i++) {
    String pair = s.substring(i, i + 2);
    if (pair.equals("tt") || pair.equals("oo")) {
        count++;
        t = t + pair.substring(0, 1);
    }
}
System.out.println(count + " " + t);
```

| `i` | `pair` | doubled letters? | `count` | `t` |
|---|---|---|---|---|
| 0 | | | | |
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |

<details>
<summary>Answer and explanation</summary>

| `i` | `pair` | doubled letters? | `count` | `t` |
|---|---|---|---|---|
| 0 | ta | no | 0 | "" |
| 1 | at | no | 0 | "" |
| 2 | tt | yes | 1 | "t" |
| 3 | to | no | 1 | "t" |
| 4 | oo | yes | 2 | "to" |

The loop runs for `i` from 0 to 4 (`s.length() - 2` is 4). The output is `2 to`.

**Suggested Marlbridge rubric (6 marks).** 1 mark for each of the five rows (correct pair, decision, `count` and `t`), and 1 mark for the correct output.
</details>

## Question 10 (constructed response · stretch)

A method must return the number of times a 3-letter String `code` appears in `s` (overlaps allowed), using a window.

```java
public static int countCode(String s, String code) {
    int count = 0;
    for (int i = 0; i < s.length() - 3; i++) {
        if (s.substring(i, i + 3).equals(code)) {
            count++;
        }
    }
    return count;
}
```

(a) Show that `countCode("xyzxyz", "xyz")` returns the wrong value, and say what it should return. (2 marks)

(b) Explain the fault. (2 marks)

(c) Give the corrected loop header. (1 mark)

(d) With the corrected header, what happens if `s` is shorter than 3 characters? (1 mark)

<details>
<summary>Answer and explanation</summary>

**(a)** The String has length 6, so the loop runs for `i < 3`, that is `i` = 0, 1, 2. The windows are "xyz" (i = 0, a match), "yzx" (i = 1) and "zxy" (i = 2). The count is **1**, but "xyz" also occurs at index 3, so the correct answer is **2**.

**(b)** The loop test is off by one: the last window starts at `s.length() - 3`, which is 3, but `i < s.length() - 3` stops one position too soon, so the last window is never examined.

**(c)** `for (int i = 0; i <= s.length() - 3; i++)`

**(d)** If `s.length() - 3` is negative (length under 3), the test `0 <= negative number` is false at once, so the loop does not run and the method returns 0, with no exception.

**Suggested Marlbridge rubric (6 marks).**

| Marks | Awarded for |
|---|---|
| 1 | (a) The windows examined ("xyz", "yzx", "zxy") and the returned value 1 |
| 1 | (a) The correct value 2 |
| 1 | (b) States that the last window is skipped |
| 1 | (b) Identifies the last start index as `s.length() - 3` and the bound as one too small |
| 1 | (c) `i <= s.length() - 3` |
| 1 | (d) Returns 0 with no exception |
</details>

## How did you do?

Questions 1 to 5 test indexes, traversal and immutability. If you missed Question 1 or 4, revisit "Strings as sequences you can loop over" in the [study guide](/advanced-course-resources/computer-science-a/2-10-implementing-string-algorithms-study-guide/). If you missed Question 6 or 10, review "Worked example 2". If you missed Question 5, review "Strings are immutable". Then use the [checklist](/advanced-course-resources/computer-science-a/2-10-implementing-string-algorithms-checklist/).
