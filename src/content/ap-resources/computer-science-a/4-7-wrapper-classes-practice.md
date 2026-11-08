---
resourceId: "mb-ap-csa-4.7-practice"
title: "Wrapper Classes: Practice Questions (Computer Science A 4.7)"
description: "Ten original questions on wrapper classes in Java: boxing and unboxing, integer division, parsing, compile errors, immutability and null, plus two code-writing tasks."
course: "computer-science-a"
unit: 4
topics: ["4.7"]
resourceType: "practice-questions"
prerequisites:
  - "Primitive types int and double, and casting (Topics 1.2 and 1.5)"
  - "Calling methods on objects and class (static) methods (Topics 1.10 and 1.14)"
  - "The String type and its methods (Topic 1.15)"
learningObjectives:
  - "Trace expressions that mix int, Integer, double and Double"
  - "Predict compile-time and run-time errors"
  - "Write methods that parse Strings"
skills: ["2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.7-study-guide", "mb-ap-csa-4.7-revision-notes", "mb-ap-csa-4.7-checklist"]
next: "mb-ap-csa-4.7-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "Ten questions: eight multiple choice, two constructed response."
  - "Every code fragment was compiled and run; outputs quoted come from those runs."
  - "Rubrics are a suggested Marlbridge rubric, not an official scoring guideline."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

These are **original Marlbridge practice questions**, not past exam questions. Mark points are a suggested Marlbridge rubric, not an official scoring guideline. Every code fragment was compiled and run, and the outputs quoted come from those runs.

## Question 1 (multiple choice · foundation)

Which line uses autoboxing?

- (A) `int n = Integer.parseInt("5");`
- (B) `Integer k = 12;`
- (C) `int m = k + 1;` where `k` is an `Integer`
- (D) `String s = "12";`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** An `int` value is assigned to an `Integer` variable, so the compiler boxes it.

- (A) `parseInt` returns an `int` directly; no wrapper is involved.
- (C) Here a wrapper is converted to a primitive, which is unboxing, not boxing.
- (D) A `String` has no wrapper class involved.
</details>

## Question 2 (multiple choice · core)

What is printed?

```java
Integer x = 10;
Integer y = 3;
double r = x / y;
System.out.println(r);
```

- (A) 3
- (B) 3.0
- (C) 3.3333333333333335
- (D) The code does not compile

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `x` and `y` unbox to `int`, so `x / y` is integer division: 3. That `int` is then widened to the `double` 3.0, and `println` shows `3.0` (run and confirmed).

- (A) The variable is a `double`, so the output has a decimal point.
- (C) Needs a cast before dividing, as in `(double) x / y`.
- (D) The code compiles; unboxing and widening are automatic.
</details>

## Question 3 (multiple choice · core)

What is printed?

```java
System.out.println(Integer.parseInt("42") + Integer.parseInt("8"));
```

- (A) 428
- (B) 50
- (C) 42 8
- (D) A `NumberFormatException` is thrown

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Both Strings convert to `int`, and `+` adds them: 50. For comparison, `"42" + "8"` joins two Strings into `"428"` (run and confirmed).

- (A) is the result of joining Strings, not adding numbers.
- (C) `println` receives one number and prints one value.
- (D) Both Strings are valid whole numbers.
</details>

## Question 4 (multiple choice · core)

Which declaration does **not** compile?

- (A) `double v = 7;`
- (B) `Double w = 7.0;`
- (C) `Double u = 7;`
- (D) `Integer t = 7;`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The literal 7 is an `int`, and an `int` cannot be boxed into a `Double`. The compiler message was `incompatible types: int cannot be converted to Double`.

- (A) `int` widens to `double` as an ordinary conversion.
- (B) A `double` boxes to `Double`.
- (D) An `int` boxes to `Integer`.
</details>

## Question 5 (multiple choice · core)

What is printed?

```java
Integer n = 5;
Integer m = n;
n++;
System.out.println(n + " " + m);
```

- (A) `6 6`
- (B) `5 5`
- (C) `6 5`
- (D) `5 6`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `Integer` objects are immutable. `n++` unboxes 5, adds 1 and boxes a new `Integer` 6 into `n`. `m` still refers to the original object holding 5.

- (A) would be right only if the object could be changed in place.
- (B) forgets that `n++` changes `n`.
- (D) swaps the values.
</details>

## Question 6 (multiple choice · core)

What happens when this code runs?

```java
Integer z = null;
int w = z;
System.out.println(w);
```

- (A) It prints 0
- (B) It prints `null`
- (C) It does not compile
- (D) It throws a `NullPointerException`

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Unboxing `null` means asking a missing object for its value, which throws `NullPointerException` (run and confirmed).

- (A) Java does not substitute a default value.
- (B) `w` is an `int` and cannot hold `null`.
- (C) The code compiles, because `null` may be assigned to an `Integer`.
</details>

## Question 7 (multiple choice · core)

Which call returns the `double` 12.5 from the String `s`, where `s` is `"12.5"`?

- (A) `Integer.parseInt(s)`
- (B) `s.parseDouble()`
- (C) `Double.parseDouble(s)`
- (D) `Double(s)`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `parseDouble` is a class method called on `Double`.

- (A) `parseInt("12.5")` throws a `NumberFormatException`.
- (B) `parseDouble` is not an instance method of `String`.
- (D) This is not a method call at all and does not compile.
</details>

## Question 8 (multiple choice · stretch)

What is the output?

```java
Integer k = 7;
Double q = 3.0;
System.out.println(k + 2.5);
System.out.println((int) (q * 2));
```

- (A) `9.5` then `6`
- (B) `9` then `6`
- (C) `9.5` then `6.0`
- (D) `72.5` then `6`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** `k` unboxes to 7, then `7 + 2.5` is the `double` 9.5. `q` unboxes to 3.0, `q * 2` is 6.0 and the cast to `int` gives 6. The run printed `9.5` and `6`.

- (B) drops the decimals from the first line; `7 + 2.5` is a `double` sum.
- (C) forgets that `(int)` removes the decimal part.
- (D) treats the `+` as String joining; neither operand is a String.
</details>

## Question 9 (constructed response · core)

Write `sumStrings(String[] vals)`, which returns the sum of the whole numbers held as Strings in `vals`. For example `{"12", "007", "-4"}` gives 15. Assume every String is a valid whole number.

<details>
<summary>Answer and explanation</summary>

```java
public static int sumStrings(String[] vals)
{
    int sum = 0;
    for (String s : vals)
    {
        sum += Integer.parseInt(s);
    }
    return sum;
}
```

For the example the sum is 12 + 7 + (-4) = 15 (run and confirmed).

**Suggested Marlbridge rubric (4 points)**

| Point | Award for |
|---|---|
| 1 | Correct header returning `int` and taking `String[]` |
| 2 | Initialises an accumulator and traverses every element |
| 3 | Converts each String with `Integer.parseInt` (not `+` on Strings) |
| 4 | Adds to the accumulator and returns it |

An indexed `for` loop is equally acceptable.
</details>

## Question 10 (constructed response · stretch)

(a) Write `meanOf(String[] vals)`, which returns the mean of the decimal numbers held as Strings in `vals`, or `0.0` if the array is empty.

(b) State the value returned for `{"3.5", "4.25", "2"}` and explain why `Integer.parseInt` could not be used.

<details>
<summary>Answer and explanation</summary>

(a)

```java
public static double meanOf(String[] vals)
{
    if (vals.length == 0)
    {
        return 0.0;
    }
    double total = 0;
    for (String s : vals)
    {
        total += Double.parseDouble(s);
    }
    return total / vals.length;
}
```

(b) The total is 3.5 + 4.25 + 2.0 = 9.75 and 9.75 / 3 = 3.25 (run and confirmed). `Integer.parseInt("3.5")` would throw a `NumberFormatException`, because an `int` String may not contain a decimal point.

**Suggested Marlbridge rubric (6 points)**

| Point | Award for |
|---|---|
| 1 | Returns `0.0` (and does not divide by zero) for an empty array |
| 2 | Accumulates in a `double` |
| 3 | Traverses every element |
| 4 | Uses `Double.parseDouble` on each String |
| 5 | Divides by the number of elements and returns a `double`; the sum must not be an `int` |
| 6 | Part (b): 3.25 and a correct reason (`parseInt` rejects a String with a decimal point) |
</details>

## How did you do?

Questions 1 to 8 are one mark each. If you slipped on boxing rules, re-read the boxing section of the [Topic 4.7 study guide](/advanced-course-resources/computer-science-a/4-7-wrapper-classes-study-guide/); then tick off the [checklist](/advanced-course-resources/computer-science-a/4-7-wrapper-classes-checklist/).
