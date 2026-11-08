---
resourceId: "mb-ap-csa-exam-skills-code-tracing-and-java-pitfalls"
title: "Code Tracing, Multiple Choice and Java Pitfalls: Exam Skills Guide (Computer Science A)"
description: "A method for tracing Java code by hand, a strategy for the multiple-choice section, and the Java behaviours that most often trap students, with original compiled examples."
course: "computer-science-a"
unit: 1
topics: []
resourceType: "exam-skills"
prerequisites:
  - "You have studied at least Units 1 and 2 of the course, and ideally all four"
  - "You can write and read loops, conditions, arrays, ArrayLists and simple classes in Java"
learningObjectives:
  - "Trace a piece of Java code by hand with a table of variable values and predict its output"
  - "Spot the Java behaviours that give surprising results: integer division, == on Strings, aliasing, removing from an ArrayList while looping"
  - "Pace the 42-question multiple-choice section and decide when to move on"
  - "Use elimination and quick tests to choose between answers that look alike"
  - "Predict which exception a faulty piece of code throws"
skills: ["3", "4", "5"]
studyMinutes: 55
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section. All the arithmetic here is small enough to do by hand, and a trace table keeps it reliable."
related: ["mb-ap-csa-1.1-study-guide", "mb-ap-csa-1.5-study-guide", "mb-ap-csa-1.15-study-guide", "mb-ap-csa-2.7-study-guide", "mb-ap-csa-4.8-study-guide", "mb-ap-csa-4.16-study-guide", "mb-ap-csa-exam-skills-free-response-question-types"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "Section I has 42 multiple-choice questions in 90 minutes, a little over two minutes each, with no calculator. Reading code accurately is the skill it rewards."
  - "A trace table, with one column per variable and one row per pass through a loop, turns guessing into checking."
  - "Many wrong answers are built from a specific Java behaviour: integer division, truncation, == on objects, a changed copy of a parameter, or a skipped element after an ArrayList removal."
  - "Trace the code as written, not as intended; the question asks what the program does, and the answer may be a bug."
  - "If a question is taking more than about three minutes, flag it, choose your best answer and move on."
faqs:
  - question: "Should I guess if I am not sure?"
    answer: "Yes. Treat every question as worth answering. Eliminate the options you can prove wrong first, then choose among those left. Do not leave a question blank."
  - question: "Is it faster to trace the code or to reason about what it does?"
    answer: "Reason first if the pattern is familiar, such as a standard count, total or search. Trace whenever the code has a twist, such as a changing bound, a method that modifies a parameter or a loop whose variable is changed inside it. When the numbers are small, a quick trace is the most reliable way to check your reasoning."
  - question: "What is the difference between a compile-time error and a run-time error in a question?"
    answer: "A compile-time error means the code does not follow the rules of Java (a missing return, a type mismatch, calling a method that does not exist) and the program never starts. A run-time error means the code compiled and then failed while running, such as an ArrayIndexOutOfBoundsException. The two have different answer options, so identify which one it is before you choose."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## How to use this guide

This guide is for students preparing for Section I (multiple choice) and for anyone who writes correct-looking Java that behaves differently from what they expect. It covers a method for tracing code, a plan for the 42 questions, and the Java behaviours that most often trap students. Every code sample and answer here is **original Marlbridge practice**: the programs are invented, none is from a past exam, and each was compiled and run with a Java compiler so the printed outputs are real. The suggested method and the pacing are Marlbridge advice, not official guidance.

## The section at a glance

| Feature | Detail |
|---|---|
| Questions | 42, mostly stand-alone, occasionally in a set of 2 |
| Time | 90 minutes, about 2 minutes 9 seconds per question |
| Weight | 55% of the exam |
| Practices | All five computational thinking practices are assessed |
| Tools | No calculator; the Java Quick Reference is provided in the exam app |
| Format | Fully digital in the May 2027 exam |

The questions mix several kinds of task: predict the output or the value of a variable after some code, say what a method does, find the error in a piece of code, choose a code segment that does a stated job, compare two algorithms or decide which of several expressions is equivalent. Nearly all of them can be answered by reading code carefully.

## Tracing: your main tool

To **trace** code is to run it by hand. You keep a table in which each variable has a column and each step (or each pass through a loop) has a row. Write a new value whenever a variable changes, and keep the rest of the row unchanged. You are playing the computer, so do exactly what the code says.

### Worked example 1: a loop with a changing bound

```java
int x = 3;
int y = 20;
int n = 0;
while (y > x)
{
    y -= x;
    x++;
    n += y % x;
}
System.out.println(n * 100 + y);
```

Both `x` and `y` change, so the number of passes is not obvious. The table shows each variable at the **end** of a pass.

| Pass | `y > x` at start? | `y` | `x` | `y % x` | `n` |
|---|---|---|---|---|---|
| start | | 20 | 3 | | 0 |
| 1 | 20 > 3, yes | 17 | 4 | 1 | 1 |
| 2 | 17 > 4, yes | 13 | 5 | 3 | 4 |
| 3 | 13 > 5, yes | 8 | 6 | 2 | 6 |
| 4 | 8 > 6, yes | 2 | 7 | 2 | 8 |
| test | 2 > 7, no: stop | | | | |

The statement prints 8 × 100 + 2 = **802**, which the compiled program confirms. Notice the order of the statements inside the loop: `x++` runs *before* `y % x`, so the remainder uses the new `x`. Using the old one gives `17 % 3 = 2` on the first pass and a different answer.

### Worked example 2: nested loops

```java
int count = 0;
for (int i = 1; i <= 4; i++)
{
    for (int j = i; j <= 4; j++)
    {
        if ((i + j) % 3 == 0)
        {
            count++;
        }
    }
}
System.out.println(count);
```

The inner loop starts at `j = i`, so write the pairs out: i = 1 gives j = 1, 2, 3, 4; i = 2 gives j = 2, 3, 4; i = 3 gives j = 3, 4; i = 4 gives j = 4. The sums that are multiples of 3 are 1 + 2 = 3, 2 + 4 = 6 and 3 + 3 = 6. The code prints **3**. Listing the pairs, not just counting them, is what prevents an arithmetic slip.

### Worked example 3: recursion

```java
static int mystery(int n)
{
    if (n <= 1)
    {
        return 1;
    }
    return mystery(n - 1) + mystery(n - 2) + n;
}
```

To find `mystery(4)`, work from the base case up and write each result down:

| Call | Value |
|---|---|
| `mystery(0)` and `mystery(1)` | 1 (base case) |
| `mystery(2)` | 1 + 1 + 2 = 4 |
| `mystery(3)` | `mystery(2)` + `mystery(1)` + 3 = 4 + 1 + 3 = 8 |
| `mystery(4)` | `mystery(3)` + `mystery(2)` + 4 = 8 + 4 + 4 = **16** |

The program prints `16`. A recursive trace is a table of smaller calls; do not try to hold the whole call tree in your head.

## A multiple-choice routine

1. **Read the code before the options.** Options are written to tempt you; decide what the code does first.
2. **Underline the question.** "Which output?" and "which statement is true?" and "which could replace the loop?" need different work.
3. **Trace on the smallest input that tests the point.** Use the example in the question if there is one; otherwise invent a tiny case such as an array of two or three elements.
4. **Eliminate.** Cross out options that fail your trace, then choose among what remains. Two options that differ by one detail (`<` versus `<=`, an index of `i` versus `i + 1`) usually mean the boundary decides it: test the first and last element.
5. **Flag and move on** if a question has taken about three minutes. Take your best answer so a blank does not remain, then return if time allows.
6. **Do not argue with the code.** If the code looks wrong or silly, that is often the point: you are asked what it does, not what the programmer meant.

### Worked example 4: an ArrayList question

```java
ArrayList<Integer> nums = new ArrayList<Integer>();
nums.add(5);
nums.add(1);
nums.add(7);
nums.add(1);
nums.remove(1);
nums.remove(0);
nums.add(1, 4);
nums.set(0, nums.get(0) + nums.size());
System.out.println(nums);
```

Which output is produced?

- (A) `[10, 4, 1]`
- (B) `[7, 4, 1]`
- (C) `[9, 4, 1]`
- (D) `[9, 4, 7, 1]`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Trace the list after each statement: `[5, 1, 7, 1]`; `remove(1)` removes the element at **index 1** (the argument is an index, whatever values the list holds), giving `[5, 7, 1]`; `remove(0)` removes the element at index 0, giving `[7, 1]`; `add(1, 4)` inserts at index 1, giving `[7, 4, 1]`; `nums.set(0, 7 + 3)` replaces index 0 with 10, because the list now has size 3, giving `[10, 4, 1]`.

Option (B) forgets the final `set`. Option (C) uses the size before the insertion (2) instead of 3. Option (D) treats `remove(0)` as removing a *value* 0, finds nothing to remove and keeps the 5. The compiled program prints `[10, 4, 1]`.
</details>

## Java behaviours that trap students

Each of these has a recognisable symptom. Learn them as pairs: the code, and the surprising result. The outputs shown come from compiling and running the code.

### Arithmetic and types

| Code | Result | Why |
|---|---|---|
| `7 / 2` | `3` | Two ints: integer division truncates |
| `7 / 2.0` | `3.5` | One double makes the division a double |
| `(double) (7 / 2)` | `3.0` | The division happens first, then the cast |
| `(double) 7 / 2` | `3.5` | The cast applies to 7 first |
| `-7 / 2` | `-3` | Truncation is towards zero, not down |
| `(int) 3.9 + (int) -3.9` | `0` | Casting to int truncates (3 and -3) |
| `(int) (3.9 + 0.5)` | `4` | The usual rounding idiom for a positive double |
| `5 + 3 + "a" + 5 + 3` | `8a53` | Left to right: 5 + 3 is 8, and once a String appears the rest is concatenation |
| `Integer.MAX_VALUE + 1` | `-2147483648` | An int overflows and wraps round, with no error |

### Strings

```java
String s = "computer";
s.toUpperCase();
System.out.println(s);                       // computer
System.out.println(s.substring(2, 5));       // mpu
System.out.println(s.indexOf("t") + " " + s.indexOf("z"));   // 5 -1
String t = "comp";
String u = t + "uter";
System.out.println((u == s) + " " + u.equals(s));   // false true
```

- **Strings are immutable.** `s.toUpperCase();` creates a new String and throws it away. The variable `s` is unchanged. You must write `s = s.toUpperCase();`.
- **`substring(a, b)` includes `a` and excludes `b`**, so its length is `b - a`. Here `substring(2, 5)` is characters at indexes 2, 3 and 4.
- **`indexOf` returns -1 when the text is absent.**
- **`==` compares references.** Two Strings with equal text can be different objects, so `u == s` is `false` while `u.equals(s)` is `true`. Always use `equals` (and `compareTo` for order).

### Parameters, references and aliases

```java
static void change(int a, int[] arr, int[] other)
{
    a = a + 10;
    arr[0] = arr[0] + 10;
    other = new int[] {99, 99};
}
// in main:  int a = 1;  int[] arr = {1, 2};  int[] other = {5, 6};
//           change(a, arr, other);
//           System.out.println(a + " " + arr[0] + " " + other[0]);   // 1 11 5
```

Java passes **copies of values**. The int `a` is copied, so the caller's `a` stays 1. For `arr`, the copy is of a reference to the *same* array, so changing `arr[0]` is visible to the caller (it becomes 11). For `other`, the method points its own copy at a new array, which does nothing to the caller's variable. The rule: changing **what a reference points to** is private; changing **the object it points to** is shared.

### ArrayList and loops

- **`remove` takes an index.** With an `ArrayList<Integer>`, `remove(1)` removes the element at index 1, not the value 1, and returns the removed element. (See worked example 4.)
- **Removing in a forward loop skips elements.** After `remove(i)` the later elements shift left, so the next element is now at `i`, but the loop has moved to `i + 1`. Loop backwards, or add 1 to the index only when you did not remove. The free-response guide shows an example with a result.
- **The for-each variable is a copy.** In `for (int v : data) { v = v * 2; }` the array `data` is unchanged (it prints `1 2 3`). To change elements of an int array you need an indexed loop.
- **The indexes run from 0 to `size() - 1`.** Using `<= size()` throws an exception on the last pass.

### Boolean logic

```java
static boolean safeCheck(int[] a, int i)
{
    return i < a.length && a[i] > 0;
}
```

`&&` and `||` **short-circuit**: if the left side already decides the result, the right side is not evaluated. Here `safeCheck(new int[] {4}, 1)` returns `false` without ever reading `a[1]`, so no exception occurs. Reverse the two conditions and it throws an `ArrayIndexOutOfBoundsException`. Remember De Morgan's laws for the opposite of a compound condition: `!(a && b)` is `!a || !b`, and `!(a || b)` is `!a && !b`.

### Static and instance

A `static` variable has one copy shared by the whole class; an instance variable has one per object. A static method has no `this` and cannot use instance variables directly. Two calls to a static method that does `tally++; tally += 2;` leave `tally` at 6.

### Exceptions you must be able to name

| Code | Exception |
|---|---|
| `int[] z = new int[3]; z[3] = 1;` | `ArrayIndexOutOfBoundsException` (valid indexes are 0 to 2) |
| `String nothing = null; nothing.length();` | `NullPointerException` (calling a method on a null reference) |
| `"abc".substring(2, 7)` | `StringIndexOutOfBoundsException` |
| `list.get(list.size())` | `IndexOutOfBoundsException` |
| `5 / 0` (ints) | `ArithmeticException` |

A run-time exception is only thrown for code that compiled. Code that does not compile never runs at all.

## Trace checklist

Use this list when your trace gives an answer you do not trust.

- Did I apply `++` and `--` at the right moment (before or after the value is used)?
- Are both sides of each `/` ints? Did I truncate?
- Did I follow the loop bound after the variables changed?
- Is the method changing a copy or the shared object?
- Did I use `equals` where the code uses `==`, or the reverse?
- Did the code return early, so the later lines never ran?
- Is the answer a value, a String (check the quotation marks and spacing), or an exception?

## Common misconceptions

- **"If the code compiles it must be right."** Compiling means the code follows Java's rules. The logic can still be wrong.
- **"A Java method can change the caller's int."** It cannot; only the object a reference points to can be shared.
- **"`==` means equal."** For objects it asks whether they are the same object.
- **"A for-each loop can replace any loop."** It cannot assign to the elements of a primitive array, and it is unsafe if you remove elements as you go.
- **"Integer division rounds."** It truncates towards zero. Convert before you divide if you want a decimal result.
- **"I should skip the table when the loop is short."** Short loops with surprising bounds are exactly where careless tracing goes wrong.

## Where to practise next

- [Algorithms, programming and compilers: study guide](/advanced-course-resources/computer-science-a/1-1-algorithms-programming-compilers-study-guide/)
- [Casting and range of variables: study guide](/advanced-course-resources/computer-science-a/1-5-casting-range-study-guide/)
- [String manipulation: study guide](/advanced-course-resources/computer-science-a/1-15-string-manipulation-study-guide/)
- [While loops: study guide](/advanced-course-resources/computer-science-a/2-7-while-loops-study-guide/)
- [ArrayList methods: study guide](/advanced-course-resources/computer-science-a/4-8-arraylist-methods-study-guide/)
- [Recursion: study guide](/advanced-course-resources/computer-science-a/4-16-recursion-study-guide/)
- [The four free-response question types: exam skills guide](/advanced-course-resources/computer-science-a/exam-skills-free-response-question-types/)
- [Unit 2 mixed review](/advanced-course-resources/computer-science-a/unit-2-review/)
