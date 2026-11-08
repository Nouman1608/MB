---
resourceId: "mb-ap-csa-u1-diagnostic"
title: "Using Objects and Methods: Unit Diagnostic (Computer Science A Unit 1)"
description: "A 40-minute check with one short question per topic of Unit 1, from algorithms and variables to methods, objects and strings, showing which study guides to revisit."
course: "computer-science-a"
unit: 1
topics: []
resourceType: "unit-diagnostic"
prerequisites: ["You have studied some or all of Topics 1.1 to 1.15"]
learningObjectives: ["Find out which Unit 1 topics are secure and which need more work", "Practise short questions on expressions, methods, objects and strings", "Use the answer explanations to see why common wrong answers are tempting", "Choose the study guides to read next"]
skills: ["1", "2", "3", "4"]
studyMinutes: 40
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-u1-review", "mb-ap-csa-1.1-study-guide"]
next: "mb-ap-csa-u1-review"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["Fifteen short questions: one for each of the 15 topics in Unit 1.", "Twelve are multiple choice; three need a short written answer.", "Each answer links to the study guide to read if you missed it.", "It shows where to focus. It does not give or predict a score."]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Use this diagnostic to find **which Unit 1 topics to revisit**: one short question per topic, in the order of the topics.

These are **original Marlbridge practice questions**, not past exam questions. The diagnostic is not calibrated and gives **no predicted score**. Where a question uses a class, its code is shown just below.

**How to take it.** Allow 40 minutes; answer everything before opening any answer. No calculator is allowed on the exam, so work by hand, and write down trace tables. Code fragments are assumed to be inside a `main` method. Two classes are used in Questions 12 to 14.

```java
class Counter {
    private int count;

    public Counter() {
        count = 0;
    }

    public void increment() {
        count++;
    }

    public int getCount() {
        return count;
    }
}

class Cup {
    private int ml;

    public Cup() {
        ml = 250;
    }

    public Cup(int amount) {
        ml = amount;
    }

    public int getMl() {
        return ml;
    }
}
```

## Question 1 (multiple choice · 1.1)

A program compiles and runs to the end, with no error message, but it displays 120 when the correct answer is 80. Which kind of error is this?

- (A) A syntax error
- (B) A run-time error
- (C) A compile-time error
- (D) A logic error

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The program behaves incorrectly without stopping: a logic error, found by testing with data whose answer is known.

- (A) and (C) would stop the program being compiled, so it would not run at all.
- (B) would stop or disturb the program while it runs, usually with an exception message.

**If you missed this:** [Topic 1.1 study guide](/advanced-course-resources/computer-science-a/1-1-algorithms-programming-compilers-study-guide/).
</details>

## Question 2 (multiple choice · 1.2)

Which declaration compiles?

- (A) `double rate = 4;`
- (B) `int count = 3.0;`
- (C) `boolean open = "true";`
- (D) `int 2nd = 2;`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** An `int` value can be stored in a `double` variable, so `rate` holds 4.0.

- (B) stores a `double` in an `int`.
- (C) stores a `String` in a `boolean`.
- (D) uses a name that starts with a digit.

**If you missed this:** [Topic 1.2 study guide](/advanced-course-resources/computer-science-a/1-2-variables-data-types-study-guide/).
</details>

## Question 3 (multiple choice · 1.3)

What is printed by `System.out.println(17 / 5 + 17 % 5 * 2.0);`?

- (A) `7`
- (B) `7.0`
- (C) `5.8`
- (D) `3.4`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `17 / 5` is 3 (integer division). `17 % 5` is 2, and `2 * 2.0` is 4.0. Then `3 + 4.0` is 7.0.

- (A) forgets that a `double` operand makes the result a `double`.
- (C) uses 17 / 5 = 3.4 as a real division, which it is not.
- (D) is 17 / 5.0.

**If you missed this:** [Topic 1.3 study guide](/advanced-course-resources/computer-science-a/1-3-expressions-output-study-guide/).
</details>

## Question 4 (multiple choice · 1.4)

What is printed by the following code segment?

```java
int a = 4;
int b = a * 2;
a = b - a;
b = a + b;
System.out.println(a + " " + b);
```

- (A) `4 8`
- (B) `8 12`
- (C) `4 12`
- (D) `12 4`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `b` is 8. Then `a = b - a` is 8 - 4 = 4. Then `b = a + b` uses the new `a`: 4 + 8 = 12.

- (A) forgets the last statement.
- (B) leaves `a` as 8, as if `a = b - a;` had not run.
- (D) swaps the order of the two values.

**If you missed this:** [Topic 1.4 study guide](/advanced-course-resources/computer-science-a/1-4-assignment-input-study-guide/).
</details>

## Question 5 (multiple choice · 1.5)

What is the value of `(int) 3.9 + (int) -2.5`?

- (A) `0`
- (B) `2`
- (C) `1`
- (D) `1.4`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The casts truncate toward zero: `(int) 3.9` is 3 and `(int) -2.5` is -2. The sum is 1.

- (A) treats `(int) -2.5` as -3, moving away from zero; truncation moves toward zero.
- (B) rounds 3.9 up to 4; a cast truncates and never rounds.
- (D) adds the two `double` values without casting.

**If you missed this:** [Topic 1.5 study guide](/advanced-course-resources/computer-science-a/1-5-casting-range-study-guide/).
</details>

## Question 6 (multiple choice · 1.6)

What is the value of `n` after the following code segment?

```java
int n = 10;
n -= 3;
n *= 2 + 1;
n %= 8;
```

- (A) `7`
- (B) `5`
- (C) `21`
- (D) `2`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `n -= 3` gives 7. `n *= 2 + 1` means `n = n * (2 + 1)`, which is 21. Then `21 % 8` is 5.

- (A) stops after the first update.
- (C) stops after the second update.
- (D) reads `%=` as a division: 21 / 8 is 2. The operator stores the remainder.

**If you missed this:** [Topic 1.6 study guide](/advanced-course-resources/computer-science-a/1-6-compound-assignment-study-guide/).
</details>

## Question 7 (multiple choice · 1.7)

Which statement is true?

- (A) The `Scanner` class needs an `import` statement, but `String` and `Math` do not
- (B) All library classes are available without an import
- (C) A library is documentation that explains how to use classes
- (D) Attributes are the methods of a class

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** `String` and `Math` are in `java.lang`, which is available by default. `Scanner` is in `java.util` and must be imported.

- (B) is wrong: only `java.lang` is available by default.
- (C) describes the API specification; a library is a collection of classes.
- (D) mixes up attributes (data in variables) with behaviors (methods).

**If you missed this:** [Topic 1.7 study guide](/advanced-course-resources/computer-science-a/1-7-api-libraries-study-guide/).
</details>

## Question 8 (multiple choice · 1.8)

A method `static int quotient(int a, int b)` has the precondition `b != 0`. A caller passes 0 for `b`. Which statement is correct?

- (A) The compiler reports an error
- (B) The method is expected to check and return -1
- (C) The postcondition is still guaranteed
- (D) The caller broke the precondition, so the postcondition is not guaranteed

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** A precondition is the caller's responsibility. If it is broken, nothing is promised about the result.

- (A) is wrong: the compiler does not check preconditions.
- (B) is wrong: there is no expectation that a method checks its precondition.
- (C) is wrong: the postcondition depends on the precondition holding.

**If you missed this:** [Topic 1.8 study guide](/advanced-course-resources/computer-science-a/1-8-documentation-comments-study-guide/).
</details>

## Question 9 (multiple choice · 1.9)

What is the signature of `public static double mean(int a, int b, int c)`?

- (A) `double mean(int, int, int)`
- (B) `mean(a, b, c)`
- (C) `mean`
- (D) `mean(int, int, int)`

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The signature is the name plus the ordered list of parameter types.

- (A) includes the return type.
- (B) uses parameter names.
- (C) leaves out the parameter list.

**If you missed this:** [Topic 1.9 study guide](/advanced-course-resources/computer-science-a/1-9-method-signatures-study-guide/).
</details>

## Question 10 (multiple choice · 1.10)

A class `Calc` has the class method `static int half(int n)`, which returns `n / 2`. Which statement, in a **different** class, stores the value of `half(9)` in an `int` variable `h`?

- (A) `int h = Calc.half(9);`
- (B) `int h = half(9);`
- (C) `int h = new Calc().half;`
- (D) `int h = Calc(9).half();`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** A class method is called with the class name and the dot operator. The result is 4, stored in `h`.

- (B) omits the class name, which is needed from another class.
- (C) is not a valid call.
- (D) is not valid syntax.

**If you missed this:** [Topic 1.10 study guide](/advanced-course-resources/computer-science-a/1-10-calling-class-methods-study-guide/).
</details>

## Question 11 (multiple choice · 1.11)

Which expression produces a random `int` from 10 to 19, **both inclusive**?

- (A) `(int) (Math.random() * 19)`
- (B) `(int) (Math.random() * 10) + 10`
- (C) `(int) Math.random() * 10 + 10`
- (D) `(int) (Math.random() * 20)`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** There are 10 values (10 to 19), so scale by 10, cast the product, and shift by 10.

- (A) gives 0 to 18.
- (C) casts `Math.random()` alone, so the result is always 10.
- (D) gives 0 to 19.

**If you missed this:** [Topic 1.11 study guide](/advanced-course-resources/computer-science-a/1-11-math-class-study-guide/).
</details>

## Question 12 (short answer · 1.12)

Use the `Counter` class above.

```java
Counter a = new Counter();
Counter b = a;
b.increment();
Counter c = new Counter();
System.out.println(a.getCount() + " " + c.getCount());
```

(a) State the output. (b) How many `Counter` objects exist, and what does `b = a` copy?

<details>
<summary>Answer and explanation</summary>

**(a)** The output is `1 0`.

**(b)** Two `Counter` objects exist. The statement `b = a;` copies the **reference**, so `a` and `b` refer to the same object; incrementing through `b` changes the count seen through `a`. The object that `c` refers to is separate and still holds 0.

**Check yourself:** one mark each for `1 0`, for two objects, and for saying the reference (not the object) is copied.

**If you missed this:** [Topic 1.12 study guide](/advanced-course-resources/computer-science-a/1-12-objects-instances-classes-study-guide/).
</details>

## Question 13 (short answer · 1.13)

Use the `Cup` class above, which has two constructors.

(a) State the value returned by `getMl()` for `new Cup()` and for `new Cup(330)`.

(b) Say why `new Cup(1, 2)` does not compile.

<details>
<summary>Answer and explanation</summary>

**(a)** `new Cup()` calls the constructor with no parameters, so `getMl()` returns 250. `new Cup(330)` calls the constructor with one `int`, so it returns 330.

**(b)** No constructor of `Cup` has two parameters, so no signature matches the two arguments.

**Check yourself:** one mark each for 250, 330 and the reason for the error.

**If you missed this:** [Topic 1.13 study guide](/advanced-course-resources/computer-science-a/1-13-object-creation-storage-study-guide/).
</details>

## Question 14 (multiple choice · 1.14)

What happens when the following code segment is compiled and run?

```java
Counter c = null;
c.increment();
System.out.println("done");
```

- (A) It prints `done`
- (B) It does not compile
- (C) It compiles, then throws a `NullPointerException` and does not print `done`
- (D) It compiles, then throws an `ArithmeticException`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** An instance method call on a `null` reference results in a `NullPointerException` at run time, which stops the program before `done`.

- (A) assumes that the call does nothing.
- (B) is wrong: the compiler cannot tell what the variable will refer to.
- (D) is the exception for integer division by zero.

**If you missed this:** [Topic 1.14 study guide](/advanced-course-resources/computer-science-a/1-14-calling-instance-methods-study-guide/).
</details>

## Question 15 (short answer · 1.15)

The variable `s` holds `"banana bread"`. State the value of each expression.

(a) `s.length()` (b) `s.substring(7)` (c) `s.indexOf("na")` (d) `s.substring(0, 6) + s.length()`

<details>
<summary>Answer and explanation</summary>

The characters are b(0) a(1) n(2) a(3) n(4) a(5), a space at index 6, then b(7) r(8) e(9) a(10) d(11).

- (a) `12`.
- (b) `"bread"`: from index 7 to the end.
- (c) `2`: the first `"na"` starts at index 2.
- (d) `"banana12"`: `substring(0, 6)` is `"banana"`, and the `int` 12 is joined as text.

**Check yourself:** one mark for each part.

**If you missed this:** [Topic 1.15 study guide](/advanced-course-resources/computer-science-a/1-15-string-manipulation-study-guide/).
</details>

## What next?

- **Missed one question?** Read that topic's study guide and redo its practice questions.
- **Missed several in Topics 1.3 to 1.6?** Work through the expressions and assignment topics again: the later topics rely on them.
- **Missed Questions 12 to 15?** Revisit objects and strings, then try the [Unit 1 mixed review](/advanced-course-resources/computer-science-a/unit-1-review/).
- Tick off the [Topic 1.15 checklist](/advanced-course-resources/computer-science-a/1-15-string-manipulation-checklist/) once you can do everything on it.
