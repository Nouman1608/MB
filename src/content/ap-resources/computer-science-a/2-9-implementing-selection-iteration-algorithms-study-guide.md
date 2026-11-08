---
resourceId: "mb-ap-csa-2.9-study-guide"
title: "Implementing Selection and Iteration Algorithms: Study Guide (Computer Science A 2.9)"
description: "Learn standard algorithms that combine selection and iteration, with a first-principles explanation, traced Java examples, a diagram, two worked examples and the mistakes to avoid."
course: "computer-science-a"
unit: 2
topics: ["2.9"]
resourceType: "study-guide"
prerequisites:
  - "while and for loops (Topics 2.7 and 2.8)"
  - "if statements and compound conditions (Topics 2.3 to 2.5)"
prerequisiteResources: ["mb-ap-csa-2.8-study-guide"]
learningObjectives:
  - "Write loops that test divisibility, extract the digits of an integer, count items that meet a criterion, find a minimum or maximum, and compute a sum or average"
  - "Choose a correct starting value for each kind of accumulator"
  - "Trace an algorithm by hand and describe what it computes"
  - "Spot the common faults: integer division in an average, a bad initial minimum, and an accumulator reset inside the loop"
skills: ["2", "3", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-2.9-revision-notes", "mb-ap-csa-2.9-practice", "mb-ap-csa-2.9-checklist"]
next: "mb-ap-csa-2.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources:
  - "ced-computer-science-a"
  - "page-computer-science-a"
  - "exam-computer-science-a"
keyPoints:
  - "Five standard algorithms need no data structures: divisibility, digits, frequency, minimum or maximum, and sum or average."
  - "n % d == 0 tests whether d divides n; n % 10 is the last digit and n / 10 removes it."
  - "A counter starts at 0, a sum starts at 0, a product starts at 1, and a minimum or maximum starts at the first value or an extreme."
  - "For an average, convert before dividing: (double) sum / count; sum / count with two ints truncates."
  - "Keep accumulators outside the loop, update them inside, and use them after it."
faqs:
  - question: "How do I get the digits of an integer?"
    answer: "The remainder n % 10 is the last digit, and the quotient n / 10 is the number with its last digit removed. Repeat in a loop while n > 0."
  - question: "What starting value should I use for a minimum?"
    answer: "Either the first value in the sequence or a value larger than anything you will see, such as Integer.MAX_VALUE. Starting at 0 gives the wrong answer when every value is positive."
  - question: "Why is my average wrong by a fraction?"
    answer: "If sum and count are both int, sum / count is integer division and discards the fractional part. Cast one of them to double first: (double) sum / count."
  - question: "Where do I declare the accumulator?"
    answer: "Before the loop. If you declare or reset it inside the loop body it starts again on every iteration, so the final value only reflects the last pass."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Patterns you will use again and again

Selection and iteration come together in a small set of **standard algorithms**. Once you can recognise them, many problems turn into "this is the counting pattern with a different condition". This topic covers the algorithms that need no data structure: no arrays and no lists, only variables and loops. They are:

- identify whether an integer is or is not evenly divisible by another integer;
- identify the individual digits in an integer;
- determine the frequency with which a specific criterion is met;
- determine a minimum or maximum value;
- compute a sum or average.

Each follows the same shape: set up accumulator variables before the loop, loop over the values, use selection inside the loop to decide what to do, and use the accumulators after the loop.

| Pattern | Before the loop | Inside the loop | After the loop |
|---|---|---|---|
| Count | `count = 0` | `if (criterion) { count++; }` | use `count` |
| Sum | `sum = 0` | `sum += value;` | use `sum` |
| Product | `product = 1` | `product *= value;` | use `product` |
| Minimum | `min = Integer.MAX_VALUE` | `if (value < min) { min = value; }` | use `min` |
| Maximum | `max = Integer.MIN_VALUE` | `if (value > max) { max = value; }` | use `max` |
| Average | `sum = 0`, count known | `sum += value;` | `(double) sum / count` |

`Integer.MAX_VALUE` and `Integer.MIN_VALUE` are the largest and smallest values an `int` can hold, so any real value will beat them on the first comparison.

## Divisibility

An integer `d` divides `n` evenly when the remainder is zero: `n % d == 0`. A loop over candidate divisors turns this into a count or a test.

```java
int n = 12;
int count = 0;
for (int d = 1; d <= n; d++) {
    if (n % d == 0) {
        count++;
    }
}
System.out.println(count);
```

**Output:**

```text
6
```

The divisors of 12 are 1, 2, 3, 4, 6 and 12, so 6 pass the test. This is the counting pattern with the criterion `n % d == 0`. A number is **prime** if it is at least 2 and has no divisor from 2 up to n - 1:

```java
public class PrimeCheck {
    public static boolean isPrime(int n) {
        if (n < 2) {
            return false;
        }
        for (int d = 2; d < n; d++) {
            if (n % d == 0) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println(isPrime(1));
        System.out.println(isPrime(13));
        System.out.println(isPrime(15));
    }
}
```

**Output:**

```text
false
true
false
```

A `return` inside the loop ends the method at once, so as soon as one divisor is found the answer is false. Only if the loop finishes without finding one does the method reach `return true`. For 15 the loop finds 3 divides it and returns false; for 13 it checks 2 to 12 and finds none.

## The digits of an integer

Two operations take an integer apart:

- `n % 10` is the **last digit** of `n` (for example, 4093 % 10 is 3).
- `n / 10` is `n` **without its last digit** (4093 / 10 is 409, using integer division).

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="f29-title f29-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="f29-title">Peeling digits off 4093 with % 10 and / 10</title>
<desc id="f29-desc">A table with five rows. Starting with n equal to 4093, n % 10 gives the last digit 3 and n / 10 gives 409. Next n is 409: digit 9, quotient 40. Next n is 40: digit 0, quotient 4. Next n is 4: digit 4, quotient 0. Finally n is 0 and the loop stops.</desc>
<defs><marker id="ah-f29" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="300" fill="#ffffff"/>
<rect x="40" y="10" width="140" height="34" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="110" y="31.55" font-size="13" text-anchor="middle" fill="#1d2b44" font-weight="bold">n</text>
<rect x="190" y="10" width="180" height="34" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="280" y="31.55" font-size="13" text-anchor="middle" fill="#1d2b44" font-weight="bold">n % 10 (digit)</text>
<rect x="380" y="10" width="160" height="34" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="460" y="31.55" font-size="13" text-anchor="middle" fill="#1d2b44" font-weight="bold">n / 10 (new n)</text>
<rect x="40" y="52" width="140" height="38" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="110" y="75.9" font-size="14" text-anchor="middle" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">4093</text>
<rect x="190" y="52" width="180" height="38" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="280" y="75.9" font-size="14" text-anchor="middle" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">3</text>
<rect x="380" y="52" width="160" height="38" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="460" y="75.9" font-size="14" text-anchor="middle" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">409</text>
<rect x="40" y="98" width="140" height="38" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="110" y="121.9" font-size="14" text-anchor="middle" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">409</text>
<rect x="190" y="98" width="180" height="38" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="280" y="121.9" font-size="14" text-anchor="middle" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">9</text>
<rect x="380" y="98" width="160" height="38" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="460" y="121.9" font-size="14" text-anchor="middle" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">40</text>
<rect x="40" y="144" width="140" height="38" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="110" y="167.9" font-size="14" text-anchor="middle" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">40</text>
<rect x="190" y="144" width="180" height="38" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="280" y="167.9" font-size="14" text-anchor="middle" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">0</text>
<rect x="380" y="144" width="160" height="38" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="460" y="167.9" font-size="14" text-anchor="middle" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">4</text>
<rect x="40" y="190" width="140" height="38" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="110" y="213.9" font-size="14" text-anchor="middle" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">4</text>
<rect x="190" y="190" width="180" height="38" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="280" y="213.9" font-size="14" text-anchor="middle" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">4</text>
<rect x="380" y="190" width="160" height="38" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="460" y="213.9" font-size="14" text-anchor="middle" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">0</text>
<rect x="40" y="236" width="140" height="38" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="110" y="259.2" font-size="12" text-anchor="middle" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">0</text>
<rect x="190" y="236" width="180" height="38" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="280" y="259.2" font-size="12" text-anchor="middle" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">stop: n &gt; 0 is false</text>
<rect x="380" y="236" width="160" height="38" rx="6" fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<text x="460" y="259.55" font-size="13" text-anchor="middle" fill="#1d2b44"></text>
<text x="545" y="290" font-size="10" text-anchor="middle" fill="#1d2b44"></text>
</svg>
<figcaption>Figure 1. Peeling the digits off 4093. Each pass records the last digit with % 10 and then discards it with / 10, until n reaches 0.</figcaption>
</figure>

Repeating while `n > 0` visits every digit, last to first. Inside the loop you can sum the digits, count them, test each one, or rebuild the number in another order.

```java
public class DigitTools {
    public static int digitSum(int n) {
        int sum = 0;
        while (n > 0) {
            sum += n % 10;
            n = n / 10;
        }
        return sum;
    }

    public static int reverse(int n) {
        int rev = 0;
        while (n > 0) {
            rev = rev * 10 + n % 10;
            n = n / 10;
        }
        return rev;
    }

    public static void main(String[] args) {
        System.out.println(digitSum(4093));
        System.out.println(reverse(4093));
        System.out.println(reverse(1200));
    }
}
```

**Output:**

```text
16
3904
21
```

`reverse(4093)` takes the last digit 3 first, then 9, then 0, then 4: `rev` goes 3, 39, 390, 3904. `reverse(1200)` gives 21, not 0021, because an `int` has no leading zeros. The parameter `n` is a copy, so changing it inside the method does not change the caller's variable.

## Frequency, minimum, maximum, sum and average

These four patterns can run in one loop. Suppose the "data" are produced by a method, `value(k) = (k * 7 + 3) % 10`, for k = 1 to 6.

```java
public class Stats {
    public static int value(int k) {
        return (k * 7 + 3) % 10;
    }

    public static void main(String[] args) {
        int min = Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;
        int sum = 0;
        int big = 0;
        for (int k = 1; k <= 6; k++) {
            int v = value(k);
            if (v < min) {
                min = v;
            }
            if (v > max) {
                max = v;
            }
            sum += v;
            if (v >= 5) {
                big++;
            }
        }
        System.out.println("min " + min + ", max " + max + ", sum " + sum + ", big " + big);
        System.out.println("average " + (double) sum / 6);
    }
}
```

**Output:**

```text
min 0, max 8, sum 25, big 3
average 4.166666666666667
```

The six values are 0, 7, 4, 1, 8, 5. The minimum is 0, the maximum is 8, the sum is 25, and three of them (7, 8, 5) are at least 5. The average is 25 / 6 = 4.1666..., which prints as `4.166666666666667` because it is a `double`. The cast `(double) sum / 6` converts `sum` first, so the division is a double division. With `sum / 6` on two ints the answer would be 4.

## Worked example 1: digits

**Question.** Write a method `countDigit(int n, int d)` that counts how many times the digit `d` appears in `n`, and find `countDigit(30303, 3)` and `countDigit(500, 0)`.

**Plan.** This is the counting pattern over the digits. Loop while `n > 0`; test whether the last digit equals `d`; remove the last digit.

```java
public class CountDigit {
    public static int countDigit(int n, int d) {
        int count = 0;
        while (n > 0) {
            if (n % 10 == d) {
                count++;
            }
            n = n / 10;
        }
        return count;
    }

    public static void main(String[] args) {
        System.out.println(countDigit(30303, 3));
        System.out.println(countDigit(500, 0));
    }
}
```

**Output:**

```text
3
2
```

**Trace for `countDigit(30303, 3)`.**

| Test | `n` | last digit | equals 3? | `count` | `n` after |
|---|---|---|---|---|---|
| 1 | 30303 | 3 | yes | 1 | 3030 |
| 2 | 3030 | 0 | no | 1 | 303 |
| 3 | 303 | 3 | yes | 2 | 30 |
| 4 | 30 | 0 | no | 2 | 3 |
| 5 | 3 | 3 | yes | 3 | 0 |
| 6 | 0 | | loop ends | 3 | |

**Check.** The digits of 30303 are 3, 0, 3, 0, 3: three 3s. For `countDigit(500, 0)` the digits are 0, 0 and 5, so two zeros. A limitation: `countDigit(0, 0)` returns 0, because the loop never runs, even though the number 0 contains one zero digit. A real program would handle that special case.

## Worked example 2: choosing the right start value

**Question.** A student writes a loop to find the **smallest** of the first six values of `value(k)` above, but initialises `min` to 0. What does the program report, and what is the fault? Then give a reliable fix for values 3, 5, 6, 4, 9, 7.

**Solution.** With `min = 0` and the test `if (v < min)`, no value can ever replace 0 unless it is negative. For the list 3, 5, 6, 4, 9, 7 the program reports 0, which is not in the data. The fault is the **initial value**: it must be at least as large as every value that could occur, or be the first value itself.

Here is the same idea with data produced by a method: the values 3, 5, 6, 4, 9, 7 for k = 1 to 6.

```java
public class MinData {
    public static int data(int k) {
        if (k == 1) { return 3; }
        else if (k == 2) { return 5; }
        else if (k == 3) { return 6; }
        else if (k == 4) { return 4; }
        else if (k == 5) { return 9; }
        else { return 7; }
    }

    public static void main(String[] args) {
        int bad = 0;
        int good = Integer.MAX_VALUE;
        for (int k = 1; k <= 6; k++) {
            int v = data(k);
            if (v < bad) {
                bad = v;
            }
            if (v < good) {
                good = v;
            }
        }
        System.out.println("bad " + bad + ", good " + good);
    }
}
```

**Output:**

```text
bad 0, good 3
```

**Conclusion.** Starting `min` at `Integer.MAX_VALUE` guarantees that the first value replaces it, so the answer is always a real value from the data. The same reasoning applies to a maximum: start at `Integer.MIN_VALUE` (or at the first value), never at 0 if negatives are possible.

## How this appears in exam questions

The standard algorithms are the raw material of the free-response question on methods and control structures. The question gives a precondition, such as "`n` is positive", and you may rely on it: you do not have to handle zero or negative values unless the problem says so. Decide first which pattern applies (count, sum, minimum or maximum, digits, divisors), write down the accumulator and its starting value, and only then write the loop. Check that the method **returns** a value if the header says so, rather than printing it, and that the accumulator is declared before the loop and returned after it. When tracing code for the multiple-choice section, remember that a method parameter is a copy: changing `n` inside the method does not change the caller's variable.

## Common misconceptions

- **"Start every accumulator at 0."** A sum or count starts at 0, but a product starts at 1, and a minimum or maximum must start at an extreme or at the first value.
- **"`sum / count` is the average."** If both are `int`, it truncates. Use `(double) sum / count`.
- **"Reset the accumulator at the top of the loop to be safe."** That throws away the earlier passes. Set it before the loop.
- **"`n / 10` gives the last digit."** `n % 10` is the last digit; `n / 10` is what remains.
- **"Changing the parameter changes the caller's variable."** The parameter is a copy of an `int`, so the caller's variable is unchanged.
- **"Dividing by 0 is fine when the count is empty."** `(double) sum / 0` gives infinity or NaN, and `sum / 0` with ints throws an exception. Test for an empty data set first.
- **"The loop to find divisors can stop at n."** For divisors of n, `d` must reach n itself (`d <= n`); for primality, `d < n` is enough because n always divides itself.

## Where this leads

The same patterns apply to strings in Topic 2.10, where the "values" are the characters of a string, and to arrays and `ArrayList` objects in Unit 4. Try the [practice questions](/advanced-course-resources/computer-science-a/2-9-implementing-selection-iteration-algorithms-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-a/2-9-implementing-selection-iteration-algorithms-revision-notes/) and tick off the [checklist](/advanced-course-resources/computer-science-a/2-9-implementing-selection-iteration-algorithms-checklist/). Then read the [Topic 2.10 study guide](/advanced-course-resources/computer-science-a/2-10-implementing-string-algorithms-study-guide/) on string algorithms. For the loop syntax, return to the [Topic 2.8 study guide](/advanced-course-resources/computer-science-a/2-8-for-loops-study-guide/).
