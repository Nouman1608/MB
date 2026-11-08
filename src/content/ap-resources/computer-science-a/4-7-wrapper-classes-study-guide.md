---
resourceId: "mb-ap-csa-4.7-study-guide"
title: "Wrapper Classes: Study Guide (Computer Science A 4.7)"
description: "How the Integer and Double wrapper classes work: autoboxing, unboxing, immutability, parseInt and parseDouble, with traced examples and the traps that lead to wrong answers."
course: "computer-science-a"
unit: 4
topics: ["4.7"]
resourceType: "study-guide"
prerequisites:
  - "Primitive types int and double, and casting (Topics 1.2 and 1.5)"
  - "Calling methods on objects and class (static) methods (Topics 1.10 and 1.14)"
  - "The String type and its methods (Topic 1.15)"
learningObjectives:
  - "Explain why Java has Integer and Double alongside int and double"
  - "Decide when the compiler applies autoboxing and when it applies unboxing, and state the result of an expression that mixes primitives and wrapper objects"
  - "Use Integer.parseInt and Double.parseDouble to convert a String to a number, and say what goes wrong with a bad String"
  - "Explain immutability of wrapper objects and why Integer and Double references can be null or compared with equals"
skills: ["2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.7-revision-notes", "mb-ap-csa-4.7-practice", "mb-ap-csa-4.7-checklist"]
next: "mb-ap-csa-4.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "Integer and Double wrap a primitive in an object; both are in java.lang (no import) and both are immutable."
  - "Autoboxing converts int to Integer and double to Double automatically; unboxing converts back. The compiler applies them on assignment and when passing parameters."
  - "Boxing does not widen types: Double d = 7; does not compile, but double x = 7; and Double d = 7.0; do."
  - "Integer.parseInt(String) and Double.parseDouble(String) return the number a String holds; a String that is not a valid number throws a NumberFormatException."
faqs:
  - question: "Why does Java have both int and Integer?"
    answer: "Some Java features, such as the ArrayList class, can only hold objects. A wrapper class lets a primitive value travel inside an object. Primitives are simpler and faster, so Java keeps both."
  - question: "Do I need to import Integer or Double?"
    answer: "No. Integer and Double are in the java.lang package, which Java makes available automatically."
  - question: "What does immutable mean for an Integer?"
    answer: "Once an Integer object is created, its value cannot be changed. An expression such as n++ on an Integer variable makes the variable refer to a different Integer object; it does not alter the old one."
  - question: "What happens if parseInt gets a String that is not a whole number?"
    answer: "The method throws a NumberFormatException at run time. Values such as \"12a\", \"4.0\" and \" 5\" (with a space) all cause it."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Why a primitive needs a wrapper

Java has two kinds of values. A **primitive** such as `int` or `double` holds its value directly. An **object** is reached through a reference and has methods. Some parts of Java work only with objects. The `ArrayList<E>` class in the next topic is the main example: its type parameter `E` must be a class, so you can write `ArrayList<Integer>` but not `ArrayList<int>`.

A **wrapper class** closes the gap. It is a class whose objects each hold one primitive value. The course uses two:

- `Integer` wraps an `int`.
- `Double` wraps a `double`.

Both are in the `java.lang` package, so no `import` is needed. Both are **immutable**: once an `Integer` object is created, its value cannot change. Think of a sealed envelope with a number inside. You can read the number or replace the whole envelope, but you cannot rewrite the number.

## Autoboxing and unboxing

You rarely create wrapper objects by hand. The compiler converts for you.

- **Autoboxing** is the automatic conversion from a primitive to its wrapper: `int` to `Integer`, `double` to `Double`.
- **Unboxing** is the automatic conversion from a wrapper back to the primitive.

The compiler applies **autoboxing** when a primitive is

1. passed as a parameter to a method that expects the wrapper type, or
2. assigned to a variable of the wrapper type.

It applies **unboxing** when a wrapper object is

1. passed as a parameter to a method that expects the primitive, or
2. assigned to a variable of the primitive type.

Arithmetic on wrapper objects also unboxes them first, since `+`, `-`, `*`, `/` and `%` work on primitives. Figure 1 shows the two directions.

<figure>
<svg viewBox="0 0 560 190" role="img" aria-labelledby="box47-t box47-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="box47-t">Autoboxing and unboxing between int and Integer</title>
<desc id="box47-d">On the left a plain box labelled int variable b holds the value 8. On the right a rounded box labelled Integer object holds the value 8. An arrow from left to right is labelled autoboxing, done by the compiler when an int is assigned to an Integer. An arrow from right to left is labelled unboxing, done when an Integer is used where an int is needed. A note under the Integer box says it is an object, can be null, and cannot be changed after it is created.</desc>
<rect width="560" height="190" fill="#ffffff"/>
<g fill="none" stroke="#1d2b44" stroke-width="2">
<rect x="20" y="50" width="150" height="70"/>
<rect x="390" y="50" width="150" height="70" rx="16"/>
<line x1="170" y1="70" x2="382" y2="70"/><path d="M374 64 L384 70 L374 76"/>
<line x1="390" y1="102" x2="178" y2="102"/><path d="M186 96 L176 102 L186 108"/>
</g>
<g fill="#1d2b44" text-anchor="middle" font-size="13">
<text x="95" y="40" font-weight="bold">primitive int</text>
<text x="95" y="90" font-size="22">8</text>
<text x="95" y="112" font-size="12">int b</text>
<text x="465" y="40" font-weight="bold">Integer object</text>
<text x="465" y="90" font-size="22">8</text>
<text x="465" y="112" font-size="12">Integer c</text>
<text x="276" y="62">autoboxing (int to Integer)</text>
<text x="276" y="124">unboxing (Integer to int)</text>
<text x="280" y="165" font-size="12">An Integer is an object: it can be null and it is immutable. An int is neither.</text>
</g>
</svg>
<figcaption>Figure 1. The compiler converts between a primitive and its wrapper object automatically. Boxing goes from int to Integer (or double to Double); unboxing goes back.</figcaption>
</figure>

The conversion is **exact, not a cast**. `int` boxes only to `Integer`, and `double` boxes only to `Double`. That has an important consequence, which the practice set tests.

```java
Double d1 = 7.0;      // fine: double boxes to Double
double d2 = 7;        // fine: int widens to double (not boxing)
Double d3 = 7;        // does NOT compile: an int cannot be boxed to a Double
```

Compiling the third line gives the compiler message `incompatible types: int cannot be converted to Double`.

## Turning a String into a number

Text read from a file (Topic 4.6) or cut out with `split` is a `String`. Two class methods from the Java Quick Reference convert it:

| Method | Returns | Example | Result |
|---|---|---|---|
| `static int parseInt(String s)` | the `int` the String holds | `Integer.parseInt("42")` | `42` |
| `static double parseDouble(String s)` | the `double` the String holds | `Double.parseDouble("4")` | `4.0` |

They are **class methods**, called on the class name, not on an object. The String must contain exactly a number. If it does not, the method throws a `NumberFormatException`. Run on each of these, all three threw it: `"12a"`, `"4.0"` given to `parseInt` (an int cannot hold a decimal point) and `" 5"` with a leading space. A String such as `"007"` is fine and gives 7.

A common source of error is joining versus adding. `"42" + "8"` is the String `"428"`, but `Integer.parseInt("42") + Integer.parseInt("8")` is the number 50. Both were run.

## Worked example 1: tracing boxing and unboxing

**Task.** Trace the code and give each variable's final value and the output.

```java
Integer a = 5;
int b = a + 3;
Double d = 2.5;
double e = d * b;
Integer c = b;
System.out.println(a + " " + b + " " + d + " " + e + " " + c);
```

**Line by line.**

| Line | What the compiler does | Value stored |
|---|---|---|
| `Integer a = 5;` | autoboxes the `int` 5 into an `Integer` | `a` refers to an Integer holding 5 |
| `int b = a + 3;` | unboxes `a` to 5, adds 3 as `int`s, stores an `int` | `b` is 8 |
| `Double d = 2.5;` | autoboxes the `double` 2.5 | `d` refers to a Double holding 2.5 |
| `double e = d * b;` | unboxes `d` to 2.5; `b` (8) is widened to 8.0; multiplies | `e` is 20.0 |
| `Integer c = b;` | autoboxes `b` | `c` refers to an Integer holding 8 |

**Output.** `5 8 2.5 20.0 8`. Running this gives exactly that line. Notice that printing a wrapper object shows its value (`5`, `2.5`), not a memory address, because `Integer` and `Double` define how they are displayed.

**Check.** `e` has a decimal point because one operand of `*` was a `double`; `b` is an `int` that Java widened. If you had written `a / 2` with `a` holding 5, both operands unbox to `int`, so the result would be 2.

## Worked example 2: averaging text values

A line from a file is `3.5,4.25,2`. Write `meanOf(String[] vals)` to return the mean of the numbers in the array, or `0.0` if the array is empty, then apply it to that line.

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

**Trace** for `"3.5,4.25,2".split(",")`, which gives the array `{"3.5", "4.25", "2"}`:

| `s` | `Double.parseDouble(s)` | `total` after |
|---|---|---|
| (start) | | 0.0 |
| `"3.5"` | 3.5 | 3.5 |
| `"4.25"` | 4.25 | 7.75 |
| `"2"` | 2.0 | 9.75 |

The method returns 9.75 / 3 = 3.25. Running `meanOf` on this array printed `3.25`.

**Why `parseDouble` and not `parseInt`?** The first token has a decimal point, and `Integer.parseInt("3.5")` would throw an exception. `Double.parseDouble("2")` is fine, as it returns 2.0.

**Why `total` is a `double` and `vals.length` is an `int`.** The final division is a `double` divided by an `int`, so the `int` widens and the division keeps its decimals. Had `total` been an `int`, the sum could not hold 3.5 at all.

## Other behaviours to know

**Integer division still applies.** With `Integer x = 10; Integer y = 3;` the expression `x / y` unboxes both and divides as `int`s, giving 3. Storing it in a `double` gives `3.0`, not 3.3333. To get the decimals, cast one operand first: `(double) x / y` gives 3.3333333333333335. All three were run.

**Immutability.** In `Integer n = 5; Integer m = n; n++;` the `n++` unboxes `n`, adds one and boxes a **new** `Integer` 6 into `n`. The object that `m` refers to is untouched. The program printed `6 5`.

**`null`.** A wrapper variable is a reference, so it can hold `null`; an `int` cannot. Unboxing `null` throws a `NullPointerException`, which was confirmed with `Integer z = null; int w = z;`.

**Comparing.** `==` on two wrapper variables compares **references**, not values. `Integer big1 = 1000, big2 = 1000;` gave `big1 == big2` false and `big1.equals(big2)` true when run. Java happens to reuse objects for small values (100 compared true), which hides the bug in small tests. When you want to compare the values of two wrapper objects, use `equals`, or unbox one to a primitive first.

**Range.** `Integer.MAX_VALUE` is 2147483647 and `Integer.MIN_VALUE` is -2147483648, as printed by the run. An `int` has no `NaN` or infinity, so the usual way to start a minimum search is `Integer.MAX_VALUE`.

## Common misconceptions

- **"Autoboxing can change `int` to `Double`."** It cannot. `Double d = 7;` is a compile-time error.
- **"An Integer can be changed in place."** Wrapper objects are immutable. `n++` points the variable at a new object.
- **"`parseInt` is called on a String, like `s.parseInt()`."** It is a class method: `Integer.parseInt(s)`.
- **"`parseInt` accepts any number-like text."** It accepts only an optional sign and digits. `"4.0"` and `" 5"` fail.
- **"`==` is fine for Integer values."** It tests whether the two variables refer to the same object.
- **"An `Integer` is always safe to use as an `int`."** If it is `null`, unboxing throws `NullPointerException`.
- **"`Integer` and `int` behave identically in division."** Division of two `Integer`s unboxes both and uses integer division.

## Where this leads

Wrapper classes are what make `ArrayList<Integer>` and `ArrayList<Double>` possible, so they unlock Topic 4.8 and the list algorithms of Topic 4.10. They also finish the file-reading pattern of Topic 4.6, since `split` and `parseInt` turn text into data. Work the [Topic 4.7 practice questions](/advanced-course-resources/computer-science-a/4-7-wrapper-classes-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-a/4-7-wrapper-classes-revision-notes/), and use the [checklist](/advanced-course-resources/computer-science-a/4-7-wrapper-classes-checklist/). Next: the [Topic 4.8 study guide on ArrayList methods](/advanced-course-resources/computer-science-a/4-8-arraylist-methods-study-guide/).
