---
resourceId: "mb-ap-csa-1.11-study-guide"
title: "Math Class: Study Guide (Computer Science A 1.11)"
description: "Learn the Math class methods abs, pow, sqrt and random, how to combine them in expressions, and how to scale and cast Math.random to get random numbers in a chosen range."
course: "computer-science-a"
unit: 1
topics: ["1.11"]
resourceType: "study-guide"
prerequisites: ["Topic 1.10: calling class methods with the class name and dot operator", "Topic 1.5: casting a double to an int truncates"]
prerequisiteResources: ["mb-ap-csa-1.10-study-guide"]
learningObjectives: ["Call Math.abs, Math.pow, Math.sqrt and Math.random correctly, stating the type and value each returns", "Evaluate expressions that combine Math method calls with arithmetic and casts", "Write expressions that give a random int or double in a stated range, with each end inclusive or exclusive", "Explain why a cast placed in the wrong position gives a wrong random range"]
skills: ["2", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.11-revision-notes", "mb-ap-csa-1.11-practice", "mb-ap-csa-1.11-checklist"]
next: "mb-ap-csa-1.11-practice"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["The Math class is in java.lang, so it is available by default, and contains only class methods.", "abs returns an int for an int argument and a double for a double argument; pow and sqrt return a double; random returns a double from 0.0 up to but not including 1.0.", "To get a random int in [0, n) write (int) (Math.random() * n); to get one in [low, high] inclusive write (int) (Math.random() * (high - low + 1)) + low.", "The cast must apply to the whole scaled value: (int) Math.random() * 6 is always 0 because the cast truncates Math.random() to 0 first.", "Each end of a range can be inclusive (the value can occur) or exclusive (it cannot)."]
faqs: [{"question": "Which Math methods do I need to know for the exam?", "answer": "The course lists five in the Java Quick Reference: abs(int), abs(double), pow(double, double), sqrt(double) and random(). The Quick Reference is provided in the exam, with an explanation of each."}, {"question": "Can Math.random() return 1.0?", "answer": "No. It returns a double greater than or equal to 0.0 and less than 1.0. The lower end is inclusive and the upper end is exclusive, which is exactly what makes the scale-and-cast technique give a clean range of integers."}, {"question": "Why does Math.pow(2, 3) print 8.0 and not 8?", "answer": "pow returns a double, so the result is the double 8.0. If you need an int, cast it: (int) Math.pow(2, 3). The cast is safe for results that are whole numbers within the int range."}, {"question": "How do I get a random whole number from 1 to 10 inclusive?", "answer": "Use (int) (Math.random() * 10) + 1. Math.random() * 10 is from 0.0 up to but not including 10.0, the cast gives 0 to 9, and adding 1 shifts that to 1 to 10."}]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## A toolbox of mathematical class methods

Topic 1.10 showed that a class method is called through its class name. The **`Math` class** is the most important example. It is part of the **`java.lang` package**, so, like `String`, it is **available by default**: no `import` is needed. The `Math` class contains **only class methods**, so you never create a `Math` object; you just write `Math.` followed by the method.

Five of its methods are listed in the Java Quick Reference, which is provided in the exam:

| Method | Returns | What it does |
|---|---|---|
| `static int abs(int x)` | `int` | the absolute value of an `int` value |
| `static double abs(double x)` | `double` | the absolute value of a `double` value |
| `static double pow(double base, double exponent)` | `double` | the first parameter raised to the power of the second |
| `static double sqrt(double x)` | `double` | the nonnegative square root of a `double` value |
| `static double random()` | `double` | a value greater than or equal to 0.0 and less than 1.0 |

Notice that `abs` is **overloaded** (Topic 1.9): the version chosen depends on the type of the argument. The other three always return a `double`.

```java
public class MathBasics {
    public static void main(String[] args) {
        System.out.println(Math.abs(-7));
        System.out.println(Math.abs(3.5));
        System.out.println(Math.abs(-7) + Math.abs(-2.5));
        System.out.println(Math.pow(2, 5));
        System.out.println((int) Math.pow(2, 10));
        System.out.println(Math.pow(2, -1));
        System.out.println(Math.pow(5, 0));
        System.out.println(Math.sqrt(144));
    }
}
```

```text
7
3.5
9.5
32.0
1024
0.5
1.0
12.0
```

Read the outputs against the table. `Math.abs(-7)` has an `int` argument, so it uses the `int` version and prints `7` with no decimal point. `Math.abs(-7) + Math.abs(-2.5)` is `7 + 2.5`, which is `9.5`. `Math.pow(2, 5)` prints `32.0`, because `pow` returns a `double`; the cast in `(int) Math.pow(2, 10)` gives the `int` 1024. The arguments 2 and 5 are `int` values converted automatically to `double` parameters.

### Combining calls in expressions

Because every non-void call is an expression, Math calls fit into bigger expressions, and they can be nested. For the distance between points (x1, y1) and (x2, y2), the formula is the square root of the sum of the squared differences:

```java
public class Distance {
    public static double distance(int x1, int y1, int x2, int y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

    public static void main(String[] args) {
        System.out.println(distance(1, 2, 4, 6));
    }
}
```

```text
5.0
```

The two `pow` calls are evaluated first (`3` squared is 9.0 and `4` squared is 16.0), their sum is 25.0, and `sqrt` of that is 5.0.

## Random numbers from Math.random

`Math.random()` returns a `double` that is **at least 0.0 and less than 1.0**. Its two ends are different: 0.0 is **inclusive** (it can occur) and 1.0 is **exclusive** (it never occurs). Each time you call it you get a different, unpredictable value in that interval.

That is not directly useful: a die shows 1 to 6, not a decimal between 0 and 1. The values returned from `Math.random()` can be manipulated using **arithmetic and casting operators** to produce a random `int` or `double` in a defined range. Two operations do the work:

1. **Multiply (scale)** to stretch the interval. `Math.random() * 6` is from 0.0 inclusive to 6.0 exclusive.
2. **Cast to `int`** to turn the stretched interval into whole numbers. `(int) (Math.random() * 6)` truncates, so it is one of 0, 1, 2, 3, 4, 5, each equally likely. The number 6 never occurs, because `Math.random() * 6` never reaches 6.0.
3. **Add (shift)** to move the range. `(int) (Math.random() * 6) + 1` is 1 to 6.

<figure>
<svg viewBox="0 0 700 230" role="img" aria-labelledby="fig-rand-t fig-rand-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="fig-rand-t">From Math.random() to a die roll</title>
<desc id="fig-rand-d">a horizontal number line with labelled tick marks; span Math.random(): from 0 (included, filled dot) to 1 (excluded, open dot); span Math.random() * 6: from 0 (included, filled dot) to 6 (excluded, open dot); span Math.random() * 6 + 1, then cast with (int) gives 1, 2, 3, 4, 5 or 6: from 1 (included, filled dot) to 7 (excluded, open dot).</desc>
<rect x="0" y="0" width="700" height="230" fill="#ffffff"/>
<line x1="95" y1="50" x2="605" y2="50" stroke="#1d2b44" stroke-width="2"/>
<line x1="95.0" y1="44" x2="95.0" y2="56" stroke="#1d2b44" stroke-width="2"/>
<text x="95.0" y="76" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" >0</text>
<line x1="167.85714285714283" y1="44" x2="167.85714285714283" y2="56" stroke="#1d2b44" stroke-width="2"/>
<text x="167.85714285714283" y="76" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" >1</text>
<line x1="240.7142857142857" y1="44" x2="240.7142857142857" y2="56" stroke="#1d2b44" stroke-width="2"/>
<text x="240.7142857142857" y="76" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" >2</text>
<line x1="313.57142857142856" y1="44" x2="313.57142857142856" y2="56" stroke="#1d2b44" stroke-width="2"/>
<text x="313.57142857142856" y="76" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" >3</text>
<line x1="386.4285714285714" y1="44" x2="386.4285714285714" y2="56" stroke="#1d2b44" stroke-width="2"/>
<text x="386.4285714285714" y="76" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" >4</text>
<line x1="459.2857142857143" y1="44" x2="459.2857142857143" y2="56" stroke="#1d2b44" stroke-width="2"/>
<text x="459.2857142857143" y="76" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" >5</text>
<line x1="532.1428571428571" y1="44" x2="532.1428571428571" y2="56" stroke="#1d2b44" stroke-width="2"/>
<text x="532.1428571428571" y="76" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" >6</text>
<line x1="605.0" y1="44" x2="605.0" y2="56" stroke="#1d2b44" stroke-width="2"/>
<text x="605.0" y="76" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" >7</text>
<line x1="95.0" y1="106" x2="167.85714285714283" y2="106" stroke="#1d2b44" stroke-width="4"/>
<circle cx="95.0" cy="106" r="6" fill="#1d2b44" stroke="#1d2b44" stroke-width="2"/>
<circle cx="167.9" cy="106" r="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="131.42857142857142" y="128" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" >Math.random()</text>
<line x1="95.0" y1="146" x2="532.1428571428571" y2="146" stroke="#1d2b44" stroke-width="4"/>
<circle cx="95.0" cy="146" r="6" fill="#1d2b44" stroke="#1d2b44" stroke-width="2"/>
<circle cx="532.1" cy="146" r="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="313.57142857142856" y="168" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" >Math.random() * 6</text>
<line x1="167.85714285714283" y1="186" x2="605.0" y2="186" stroke="#1d2b44" stroke-width="4"/>
<circle cx="167.9" cy="186" r="6" fill="#1d2b44" stroke="#1d2b44" stroke-width="2"/>
<circle cx="605.0" cy="186" r="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="386.42857142857144" y="208" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" >Math.random() * 6 + 1, then cast with (int) gives 1, 2, 3, 4, 5 or 6</text>
</svg>
<figcaption>Figure 1. Each step on the way to a die roll. Filled dots are included and open dots are excluded. Multiplying by 6 stretches 0 up to 1 into 0 up to 6, and adding 1 shifts it to 1 up to 7. Casting to int then gives the whole numbers 1 to 6.</figcaption>
</figure>

### The general recipe

To get a random **`int`** from `low` to `high`, **both inclusive**, there are `high - low + 1` possible values. So:

`(int) (Math.random() * (high - low + 1)) + low`

To get a random **`double`** from `low` inclusive up to `high` exclusive:

`Math.random() * (high - low) + low`

| Wanted | Expression | Why |
|---|---|---|
| int from 0 to 9 | `(int) (Math.random() * 10)` | 10 values, starting at 0 |
| int from 1 to 6 | `(int) (Math.random() * 6) + 1` | 6 values, shifted up by 1 |
| int from 5 to 12 | `(int) (Math.random() * 8) + 5` | 12 - 5 + 1 = 8 values, shifted by 5 |
| int from 20 to 30 | `(int) (Math.random() * 11) + 20` | 11 values |
| double from 0.5 up to (not including) 2.5 | `Math.random() * 2 + 0.5` | width 2, shifted by 0.5 |

You cannot print "the" output of a random program, because it varies from run to run. Instead, you reason about the **range** that is possible. To test your reasoning, plug in the extreme possible values of `Math.random()`. The following helper takes the random value as a parameter, so we can try chosen values: 0.0 (the smallest possible), 0.5, and 0.999 (close to the largest).

```java
public class Scale {
    public static int scale(double r, int low, int high) {
        return (int) (r * (high - low + 1)) + low;
    }

    public static void main(String[] args) {
        System.out.println(scale(0.0, 1, 6) + " " + scale(0.17, 1, 6) + " " + scale(0.5, 1, 6) + " " + scale(0.999, 1, 6));
        System.out.println(scale(0.0, 5, 12) + " " + scale(0.5, 5, 12) + " " + scale(0.999, 5, 12));
    }
}
```

```text
1 2 4 6
5 9 12
```

The smallest random value (0.0) gives the lowest number, 1 or 5, and a value just under 1 gives the highest, 6 or 12. Every value in between falls into one of the equal-width slices.

## Using Math results safely

Because `pow`, `sqrt` and `random` return `double` values, you meet the rules from Topics 1.3 and 1.5 again every time you use them. Three habits prevent most errors.

**Check the type you are storing into.** `int area = Math.pow(side, 2);` does not compile, because the right side is a `double`. Either declare `area` as a `double`, or cast: `int area = (int) Math.pow(side, 2);`. The cast truncates, so it is safe only when the exact result is a whole number, and you should be sure that is true. For a square of an `int`, simply writing `side * side` avoids the issue and the round-off error of Topic 1.5.

**Remember that `double` results may not be exact.** `Math.sqrt(2)` cannot be written exactly, and some `pow` results with fractional exponents carry a tiny round-off error. For the exam, expect perfect squares and small whole-number powers, where the answers are exact.

**Mind the order of evaluation.** In `Math.sqrt(a * a + b * b)`, the multiplications and addition happen before the call, because the argument is evaluated first. In `Math.sqrt(a) * 2`, the call happens first and the product afterwards. Brackets and nested calls are read from the inside out, just as in Topic 1.10.

Finally, keep the precondition idea from Topic 1.8 in mind. `Math.sqrt` is documented for a non-negative argument, so it is the caller's job to be sure the value is not negative. The course does not ask about the special results that Java returns for a negative argument, but a good programmer never relies on them.

A short checklist for any random-number question:

1. How many different values are wanted? That is the multiplier.
2. What is the smallest value wanted? That is the shift.
3. Is the result an `int` (cast the product, then shift) or a `double` (no cast)?
4. Test the two extremes, with `Math.random()` equal to 0.0 and just under 1.0.

## Worked example 1: A distance and a mixed expression

**Task.** Evaluate `Math.sqrt(Math.pow(6, 2) + Math.pow(8, 2))` and state the type. Then evaluate `Math.abs(-4) * Math.sqrt(9)`.

**First expression.** `Math.pow(6, 2)` is 36.0 and `Math.pow(8, 2)` is 64.0. Their sum is 100.0, and `Math.sqrt(100.0)` is **10.0**. The type is `double`, because `sqrt` returns a `double`.

**Second expression.** `Math.abs(-4)` has an `int` argument, so it returns the `int` 4. `Math.sqrt(9)` returns the `double` 3.0. In `4 * 3.0` one operand is a `double`, so the result is the `double` **12.0**.

**Check.** The type of a Math expression depends on which methods are used and how they combine: all of `pow`, `sqrt` and `random` give `double` results, and `abs` follows its argument. Storing the first result in an `int` variable would not compile without a cast.

## Worked example 2: A random whole number between 5 and 12

**Task.** Write an expression for a random `int` from 5 to 12, **both inclusive**, and show that it gives the right range.

**Step 1, count the values.** The integers 5, 6, 7, 8, 9, 10, 11 and 12 are 12 - 5 + 1 = **8** values.

**Step 2, scale and cast.** `(int) (Math.random() * 8)` is one of 0, 1, 2, 3, 4, 5, 6, 7.

**Step 3, shift.** Add 5: the values become 5 to 12. The expression is

`(int) (Math.random() * 8) + 5`

**Step 4, test the extremes.**

- If `Math.random()` returned its smallest value 0.0: `0.0 * 8` is 0.0, the cast gives 0, and 0 + 5 is **5**.
- If it returned 0.5: `0.5 * 8` is 4.0, the cast gives 4, and 4 + 5 is **9**.
- If it returned 0.999: `0.999 * 8` is 7.992; the cast truncates to 7, and 7 + 5 is **12**.

It can never give 13, because to get 8.0 or more from `Math.random() * 8` would need `Math.random()` to reach 1.0, which is excluded.

**Step 5, the brackets.** The cast is applied to the whole bracket `(Math.random() * 8)`, and the shift is added **after** the cast. If you wrote `(int) (Math.random() * 8 + 5)` instead, the shift would come before the cast and the result would still be 5 to 12 (here because the shift is a whole number); but for a non-integer shift the two forms differ, so place the brackets deliberately.

## Common misconceptions

- **"`(int) Math.random() * 6` gives 0 to 5."** The cast applies to `Math.random()` alone, which truncates to 0, and `0 * 6` is 0. It is always 0, and `+ 1` makes it always 1. Put brackets around the product.
- **"`Math.random()` can return 1.0."** It cannot: it is less than 1.0.
- **"`Math.pow(2, 5)` returns the `int` 32."** It returns the `double` 32.0.
- **"`Math.abs` always returns a `double`."** It follows its argument: an `int` argument gives an `int`.
- **"I must write `import java.lang.Math;`."** `java.lang` classes are available by default.
- **"A random expression has one answer I can print."** The answer varies; reason about the range.
- **"To get 1 to 6, use `(int) (Math.random() * 7)`."** That gives 0 to 6, seven values.
- **"Multiplying by the upper number and adding the lower number is the whole recipe."** The multiplier is the **count** of values (`high - low + 1`), not the upper end.

## Where this leads

Try the [Topic 1.11 practice questions](/advanced-course-resources/computer-science-a/1-11-math-class-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-a/1-11-math-class-revision-notes/) and tick off the [checklist](/advanced-course-resources/computer-science-a/1-11-math-class-checklist/). The next topic, [1.12 Objects: Instances of Classes](/advanced-course-resources/computer-science-a/1-12-objects-instances-classes-study-guide/), moves from class methods to objects, the other half of how classes are used.
