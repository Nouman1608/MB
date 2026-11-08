---
resourceId: "mb-ap-csa-1.5-study-guide"
title: "Casting and Range of Variables: Study Guide (Computer Science A 1.5)"
description: "Learn how the casting operators (int) and (double) convert values, how to round with a cast, and what integer overflow and round-off error do to results."
course: "computer-science-a"
unit: 1
topics: ["1.5"]
resourceType: "study-guide"
prerequisites: ["Topic 1.3: integer division and how the type of an operation is decided", "Topic 1.4: assignment and type compatibility"]
prerequisiteResources: ["mb-ap-csa-1.4-study-guide"]
learningObjectives: ["Use the casting operators (int) and (double) and say exactly what value each produces, including truncation toward zero", "Apply precedence correctly to casts, as in (double) a / b compared with (double) (a / b)", "Round a double to the nearest int with (int) (x + 0.5) for non-negative values and (int) (x - 0.5) for negative values", "Describe the range of int, say when integer overflow occurs and what it produces, and explain round-off error in double"]
skills: ["2", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.5-revision-notes", "mb-ap-csa-1.5-practice", "mb-ap-csa-1.5-checklist"]
next: "mb-ap-csa-1.5-practice"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["(int) converts a double to an int by truncating the digits after the decimal point; (double) converts an int to a double.", "A cast applies to the value immediately to its right, so (double) a / b divides as doubles but (double) (a / b) divides as ints first.", "For non-negative x, (int) (x + 0.5) rounds to the nearest int; for negative x use (int) (x - 0.5).", "An int is stored in 4 bytes, so it must lie between Integer.MIN_VALUE and Integer.MAX_VALUE; outside that range an overflow produces an in-range but unexpected int.", "A double stores limited precision, so some results carry a round-off error; using int values avoids it."]
faqs: [{"question": "Does (int) round a double?", "answer": "No. Casting a double to an int truncates: the digits to the right of the decimal point are simply dropped, so (int) 3.99 is 3 and (int) -3.99 is -3. To round to the nearest integer use (int) (x + 0.5) for non-negative numbers or (int) (x - 0.5) for negative numbers."}, {"question": "What are the largest and smallest int values?", "answer": "Integer.MAX_VALUE is 2147483647 and Integer.MIN_VALUE is -2147483648. You do not need to memorise the digits for the exam, but you must know the names and that adding 1 to Integer.MAX_VALUE overflows."}, {"question": "Is integer overflow an error that stops the program?", "answer": "No. No exception is thrown. The result is an int in the allowed range but not the value you expected. For example, Integer.MAX_VALUE + 1 evaluates to Integer.MIN_VALUE."}, {"question": "Why does 0.1 + 0.2 print 0.30000000000000004?", "answer": "A double has a limited amount of memory, and numbers such as 0.1 cannot be stored exactly. The result is rounded to the nearest representable value, which is a round-off error. Using int values (for example, whole cents instead of fractions of a pound) avoids the problem."}]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Changing a value from one type to another

Java stores whole numbers and real numbers in different ways, and Topics 1.3 and 1.4 showed the two rules that keep them apart: an `int` can go into a `double` without fuss, but a `double` cannot go into an `int`. What if you **want** to do that deliberately, or want a division to keep its fraction? You use a **cast**.

A **casting operator** is a type name in brackets, placed in front of a value. The course uses two:

- `(int)` converts a `double` value to an `int` value.
- `(double)` converts an `int` value to a `double` value.

### Casting a double to an int truncates

Casting a `double` value to an `int` value causes the digits to the **right of the decimal point to be truncated**. They are thrown away, not rounded.

```java
public class Casts {
    public static void main(String[] args) {
        System.out.println((int) 3.99);
        System.out.println((int) -3.99);
        System.out.println((int) 4.0);
        System.out.println((double) 7);
    }
}
```

```text
3
-3
4
7.0
```

For positive numbers, truncation moves toward the smaller whole number; for negative numbers it also moves **toward zero**, so `(int) -3.99` is `-3`, not `-4`.

### Automatic widening

Some code causes `int` values to be cast to `double` values **automatically**. When an `int` is stored in a `double` variable, or when an `int` and a `double` meet in an arithmetic operator, the `int` is widened to a `double` for you. No cast is needed, as in `double d = 5;` (which holds 5.0) or `3 + 2.5` (which is 5.5).

### Where the cast goes matters

The casting operator has **higher precedence** than `*`, `/` and `+`. It applies to the value **immediately to its right**. Compare the two ways of writing a cast in an average:

```java
public class CastOrder {
    public static void main(String[] args) {
        int a = 7;
        int b = 2;
        System.out.println(a / b);
        System.out.println((double) a / b);
        System.out.println((double) (a / b));
        System.out.println((int) (3.5 + 0.5));
    }
}
```

```text
3
3.5
3.0
4
```

- `a / b` is integer division: 3.
- `(double) a / b` converts `a` to 7.0 **first** (the cast is applied to `a` alone), so the division has a `double` operand and the result is 3.5.
- `(double) (a / b)` has brackets, so `a / b` is worked out first, as integer division, giving 3; only then is 3 converted to 3.0. **The fraction was already lost.**

The brackets decide whether the cast comes before or after the division. This is one of the most common traps in the course.

### Rounding to the nearest integer

A cast truncates, but you often want the **nearest** integer. Adding 0.5 before truncating achieves that for non-negative values:

- For non-negative `x`: `(int) (x + 0.5)`.
- For negative `x`: `(int) (x - 0.5)`.

For `x = 87.5`, `(int) (87.5 + 0.5)` is `(int) 88.0`, which is 88. For `x = 3.4`, `(int) 3.9` is 3. For `x = -3.6`, the negative form gives `(int) (-4.1)`, which is -4, the nearest integer, whereas the non-negative formula would have given `(int) (-3.1)`, or -3.

<figure>
<svg viewBox="0 0 700 150" role="img" aria-labelledby="fig-range-t fig-range-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="fig-range-t">The range of int values</title>
<desc id="fig-range-d">a horizontal number line with labelled tick marks; span all legal int values (4 bytes of memory): from -2147483648 (included, filled dot) to 2147483647 (included, filled dot).</desc>
<rect x="0" y="0" width="700" height="150" fill="#ffffff"/>
<line x1="95" y1="50" x2="605" y2="50" stroke="#1d2b44" stroke-width="2"/>
<line x1="95.0" y1="44" x2="95.0" y2="56" stroke="#1d2b44" stroke-width="2"/>
<text x="95.0" y="76" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" >MIN_VALUE: -2147483648</text>
<line x1="350.0000000593718" y1="44" x2="350.0000000593718" y2="56" stroke="#1d2b44" stroke-width="2"/>
<text x="350.0000000593718" y="76" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" >0</text>
<line x1="605.0" y1="44" x2="605.0" y2="56" stroke="#1d2b44" stroke-width="2"/>
<text x="605.0" y="76" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" >MAX_VALUE: 2147483647</text>
<line x1="95.0" y1="106" x2="605.0" y2="106" stroke="#1d2b44" stroke-width="4"/>
<circle cx="95.0" cy="106" r="6" fill="#1d2b44" stroke="#1d2b44" stroke-width="2"/>
<circle cx="605.0" cy="106" r="6" fill="#1d2b44" stroke="#1d2b44" stroke-width="2"/>
<text x="350.0" y="128" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" >all legal int values (4 bytes of memory)</text>
</svg>
<figcaption>Figure 1. Every int lies in the closed interval from Integer.MIN_VALUE to Integer.MAX_VALUE. There is nothing beyond either end: adding 1 to Integer.MAX_VALUE wraps around to Integer.MIN_VALUE.</figcaption>
</figure>

## The range of int

An `int` is stored in a finite amount of memory: **4 bytes**. That limits it to a fixed set of values. The constant `Integer.MAX_VALUE` holds the largest possible `int` and `Integer.MIN_VALUE` holds the smallest, so every `int` value must lie in the range from `Integer.MIN_VALUE` to `Integer.MAX_VALUE` **inclusive**. You will not need to memorise the digits, but you should recognise that they are about plus and minus two billion.

### Integer overflow

If an expression would evaluate to an `int` outside the allowed range, an **integer overflow** occurs. No exception is thrown. The result is an `int` **in the allowed range but not necessarily the value you expected**.

```java
public class Overflow {
    public static void main(String[] args) {
        System.out.println(Integer.MAX_VALUE);
        System.out.println(Integer.MAX_VALUE + 1);
        System.out.println(Integer.MIN_VALUE - 1);
        int days = 25000;
        System.out.println(days * 24 * 60 * 60);
    }
}
```

```text
2147483647
-2147483648
2147483647
-2134967296
```

Going one above the top wraps to the bottom, and one below the bottom wraps to the top, like a clock. The last line is a realistic accident: 25,000 days in seconds should be 2,160,000,000, which is larger than 2,147,483,647. The program silently prints a negative number.

### Round-off error in double

A `double` also uses a limited amount of memory. If an expression would produce a number with more precision than can be stored, a **round-off error** occurs, and the result is rounded to the nearest **representable** value. Many decimals, such as 0.1, cannot be stored exactly in the way a computer stores numbers.

```java
public class RoundOff {
    public static void main(String[] args) {
        System.out.println(0.1 + 0.2);
        System.out.println(1.0 - 0.9);
    }
}
```

```text
0.30000000000000004
0.09999999999999998
```

To avoid the rounding errors that naturally occur, use `int` values where you can. A shop that stores prices as a whole number of cents (`int`), not as pounds with a fraction (`double`), gets exact totals.

## A decision procedure for "will this keep its fraction?"

Many marks in this topic come from one question: **does the fractional part survive?** Answer it by working through the expression the way Java does, rather than by guessing from what the result is stored in.

1. **Find the division you care about.** Mark both of its operands.
2. **Work out the type of each operand as it exists at that moment.** A variable's declared type counts; so does a literal (`2` is an `int`, `2.0` is a `double`); so does a cast applied directly to it. A bracketed sub-expression has the type of its own result.
3. **If both operands are `int`, the division discards the fraction,** whatever happens afterwards. Nothing later in the statement, including a cast on the whole result or a `double` variable on the left of `=`, can bring it back.
4. **If at least one operand is a `double`, the division keeps the fraction.** To get this, put the cast, or a `2.0`-style literal, on one of the operands **before** the division.
5. **Only then consider what happens to the result:** stored in a `double` it is kept; stored in an `int` it needs a cast, which truncates.

Apply the procedure to `int a = 7; int b = 2;`:

| Expression | Division operands | Fraction kept? | Value |
|---|---|---|---|
| `a / b` | `int`, `int` | no | `3` |
| `(double) a / b` | `double`, `int` | yes | `3.5` |
| `a / (double) b` | `int`, `double` | yes | `3.5` |
| `(double) (a / b)` | `int`, `int` (inside the bracket) | no | `3.0` |
| `a * 1.0 / b` | `a * 1.0` is a `double`, then `int` | yes | `3.5` |
| `(int) (a / 2.0)` | `int`, `double` | yes, then the cast truncates | `3` |

The same procedure explains why integer overflow can sneak up on you. An expression such as `days * 24 * 60 * 60` is a chain of `int` multiplications, so every partial result must fit in an `int`. If one operand were a `double` the chain would turn into `double` arithmetic after that point, and the range of an `int` would no longer be the limit; the price is that `double` values are subject to round-off error instead.

## Worked example 1: Average, truncation and rounding

**Task.** Two test scores are stored as `int score1 = 85;` and `int score2 = 90;`. (a) Compute the average so that it keeps its fraction. (b) Say what is stored by `int bad = (score1 + score2) / 2;`. (c) Round the average to the nearest whole number.

**(a)** The sum is `85 + 90 = 175`. To keep the fraction, make the division a `double` division. Cast the sum, with brackets, before dividing:

`double average = (double) (score1 + score2) / 2;`

The cast has higher precedence than `/`, and it applies to the bracketed sum, so it becomes 175.0, then `175.0 / 2` is **87.5**.

**(b)** `(score1 + score2) / 2` is `175 / 2`, integer division, so `bad` holds **87**. The 0.5 is lost.

**(c)** The average is non-negative, so use `(int) (average + 0.5)`: `87.5 + 0.5` is `88.0`, and truncating gives **88**.

**Check by running.**

```java
public class Average {
    public static void main(String[] args) {
        int score1 = 85;
        int score2 = 90;
        double average = (double) (score1 + score2) / 2;
        int bad = (score1 + score2) / 2;
        int rounded = (int) (average + 0.5);
        System.out.println(average + " " + bad + " " + rounded);
    }
}
```

```text
87.5 87 88
```

**Why the brackets matter.** If you had written `(double) score1 + score2 / 2` the cast would apply only to `score1`, and `score2 / 2` is integer division: 90 / 2 = 45 happens to be exact here, so the answer would be 130.0, which is wrong for a different reason (precedence of `/` over `+`). Brackets around the whole sum are needed for both reasons.

## Worked example 2: Tracing casts and spotting overflow

**Task.** State the value of each expression, and say whether an overflow or a truncation occurs.

(a) `(int) 4.99` (b) `(int) (2.5 * 2)` (c) `(int) 2.5 * 2` (d) `Integer.MAX_VALUE + 1` (e) `1000000 * 1000000`

**(a)** The digits after the decimal point are dropped: **4**. Truncation, no rounding.

**(b)** The bracket is worked out first: `2.5 * 2` is the `double` 5.0, then the cast gives **5**.

**(c)** The cast has higher precedence than `*`, so it applies to 2.5 alone: `(int) 2.5` is 2, and `2 * 2` is **4**. Compare with (b): the position of the brackets changed the answer.

**(d)** The largest `int` plus one is outside the range, so an overflow occurs and the result is the smallest `int`: **-2147483648**.

**(e)** Both operands are `int`, so the product is an `int`. The true product is 10^12, far beyond 2,147,483,647, so an overflow occurs. The value that remains is **-727379968**. You would not be asked to calculate the exact wrapped value by hand, only to recognise that the result is not 10^12, is within the int range and has no warning.

```java
public class Trace {
    public static void main(String[] args) {
        System.out.println((int) 4.99);
        System.out.println((int) (2.5 * 2));
        System.out.println((int) 2.5 * 2);
        System.out.println(Integer.MAX_VALUE + 1);
        System.out.println(1000000 * 1000000);
    }
}
```

```text
4
5
4
-2147483648
-727379968
```

## Common misconceptions

- **"`(int)` rounds."** It truncates toward zero. Round with `(int) (x + 0.5)` (non-negative) or `(int) (x - 0.5)` (negative).
- **"`(double) (a / b)` keeps the fraction."** The integer division is done first inside the brackets, so the fraction is already gone.
- **"The cast affects the whole expression to its right."** It applies to the single value (or bracketed expression) immediately to its right.
- **"Overflow makes the program crash."** No exception is thrown; you just get a wrong in-range value.
- **"A `double` stores decimals exactly."** It stores the nearest representable value, so some results carry a tiny round-off error.
- **"I need a cast to store an `int` in a `double`."** Widening is automatic.
- **"`(int) -3.99` is -4."** It is -3: truncation moves toward zero.

## Where this leads

Next, try the [Topic 1.5 practice questions](/advanced-course-resources/computer-science-a/1-5-casting-range-practice/), use the [revision notes](/advanced-course-resources/computer-science-a/1-5-casting-range-revision-notes/) and tick off the [checklist](/advanced-course-resources/computer-science-a/1-5-casting-range-checklist/). The next topic, [1.6 Compound Assignment Operators](/advanced-course-resources/computer-science-a/1-6-compound-assignment-study-guide/), introduces shorthand such as `+=` and `++` for updating a variable.
