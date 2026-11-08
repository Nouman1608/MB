---
resourceId: "mb-ap-csa-1.6-study-guide"
title: "Compound Assignment Operators: Study Guide (Computer Science A 1.6)"
description: "Learn the compound assignment operators +=, -=, *=, /= and %= and the post-increment and post-decrement operators ++ and --, and trace how they change a variable."
course: "computer-science-a"
unit: 1
topics: ["1.6"]
resourceType: "study-guide"
prerequisites: ["Topic 1.4: an assignment evaluates the right side and stores the result on the left", "Topic 1.3: integer division and the remainder operator"]
prerequisiteResources: ["mb-ap-csa-1.5-study-guide"]
learningObjectives: ["Rewrite a compound assignment such as x *= 2 + 3 as an equivalent ordinary assignment", "Determine the value stored in a variable after a sequence of compound assignments, ++ and --", "Explain how the type of the variable affects /= and %= (integer versus real arithmetic)", "Use compound assignment to write short update, accumulate and split-into-parts code"]
skills: ["2", "3"]
studyMinutes: 35
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.6-revision-notes", "mb-ap-csa-1.6-practice", "mb-ap-csa-1.6-checklist"]
next: "mb-ap-csa-1.6-practice"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["A compound assignment x op= e does the arithmetic between the current value of x and the value of the whole expression e, then stores the result in x.", "The operators are +=, -=, *=, /= and %=; x++ and x-- add or subtract 1 from a numeric variable.", "The right side is evaluated completely first, so x *= 2 + 3 means x = x * (2 + 3).", "On an int variable, /= is integer division and %= is the remainder.", "In this course ++ and -- appear after the variable and as statements on their own, not inside other expressions."]
faqs: [{"question": "Is x += 5 exactly the same as x = x + 5?", "answer": "For tracing values, yes: it adds 5 to the current value of x and stores the result in x. The shorthand is quicker to write and read. When the right side has several operators, treat it as bracketed: x *= 2 + 3 is x = x * (2 + 3)."}, {"question": "What does x++ do?", "answer": "The post-increment operator adds 1 to the stored value of a numeric variable and assigns the new value to the variable. As a statement on its own, x++; has the same effect as x += 1; and x = x + 1;."}, {"question": "Will the exam use ++x or arr[x++]?", "answer": "No. Increment and decrement operators in prefix form (such as ++x) and inside other expressions (such as arr[x++]) are outside the scope of the course and exam. Use ++ and -- as separate statements."}, {"question": "Can I use += with a double on the right and an int on the left?", "answer": "It compiles, because Java converts the result back to the variable's type for you, truncating any fraction. For example int n = 3; n += 2.9; leaves n as 5. This is easy to miss when tracing, so check the type of the variable on the left."}]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Updating a variable from its own value

Programs constantly update a variable using what it already holds: add a score to a running total, halve a size, count one more event. By Topic 1.4 you can write this as

```java
int total = 20;
total = total + 5;
```

Java offers a shorter form that says the same thing. A **compound assignment operator** performs an arithmetic operation between the value on the left and the value on the right, and then assigns the result to the variable on the left.

| Compound form | Meaning | Ordinary form |
|---|---|---|
| `x += e` | add | `x = x + (e)` |
| `x -= e` | subtract | `x = x - (e)` |
| `x *= e` | multiply | `x = x * (e)` |
| `x /= e` | divide | `x = x / (e)` |
| `x %= e` | remainder | `x = x % (e)` |

The brackets around `e` matter. The right side is worked out **in full first**, and only then combined with `x`. So with `int x = 4;`, the statement `x *= 2 + 3;` means `x = x * (2 + 3)`, which is 20, not `(4 * 2) + 3`, which is 11.

### Adding and subtracting 1

Adding or subtracting 1 is so common that it has its own operators. The **post-increment operator** `++` adds 1 to the stored value of a numeric variable and assigns the new value to the variable. The **post-decrement operator** `--` subtracts 1. As separate statements:

```java
int count = 3;
count++;    // same as count += 1;  and  count = count + 1;   (count is now 4)
count--;    // same as count -= 1;  and  count = count - 1;   (count is back to 3)
```

In this course the operators are written **after** the variable and used as **statements on their own**. Prefix forms such as `++x`, and uses inside other expressions such as `arr[x++]`, are outside the scope of the course and exam.

### Tracing a sequence

Follow `score` through a sequence of updates. Each statement uses the value left by the one before.

```java
public class Compound {
    public static void main(String[] args) {
        int score = 10;
        score += 5;
        score -= 3;
        score *= 2;
        score /= 5;
        score %= 3;
        score++;
        score--;
        score--;
        System.out.println(score);
    }
}
```

```text
0
```

<figure>
<svg viewBox="0 0 600 658" role="img" aria-labelledby="fig-score-t fig-score-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="fig-score-t">The value of score after each statement</title>
<desc id="fig-score-d">A top-to-bottom chain of steps with arrows between them: score = 10; then score += 5   gives 15; then score -= 3   gives 12; then score *= 2   gives 24; then score /= 5   gives 4; then score %= 3   gives 1; then score++   gives 2; then score--   gives 1; then score--   gives 0.</desc>
<rect x="0" y="0" width="600" height="658" fill="#ffffff"/>
<rect x="20" y="14" width="360" height="40" rx="8" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="200.0" y="39.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" >score = 10</text>
<line x1="200.0" y1="54" x2="200.0" y2="82" stroke="#1d2b44" stroke-width="1.8"/>
<polygon points="200.0,82 196.5,73.7 203.5,73.7" fill="#1d2b44"/>
<rect x="20" y="84" width="360" height="40" rx="8" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="200.0" y="109.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" >score += 5   gives 15</text>
<line x1="200.0" y1="124" x2="200.0" y2="152" stroke="#1d2b44" stroke-width="1.8"/>
<polygon points="200.0,152 196.5,143.7 203.5,143.7" fill="#1d2b44"/>
<rect x="20" y="154" width="360" height="40" rx="8" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="200.0" y="179.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" >score -= 3   gives 12</text>
<line x1="200.0" y1="194" x2="200.0" y2="222" stroke="#1d2b44" stroke-width="1.8"/>
<polygon points="200.0,222 196.5,213.7 203.5,213.7" fill="#1d2b44"/>
<rect x="20" y="224" width="360" height="40" rx="8" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="200.0" y="249.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" >score *= 2   gives 24</text>
<line x1="200.0" y1="264" x2="200.0" y2="292" stroke="#1d2b44" stroke-width="1.8"/>
<polygon points="200.0,292 196.5,283.7 203.5,283.7" fill="#1d2b44"/>
<rect x="20" y="294" width="360" height="40" rx="8" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="200.0" y="319.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" >score /= 5   gives 4</text>
<line x1="200.0" y1="334" x2="200.0" y2="362" stroke="#1d2b44" stroke-width="1.8"/>
<polygon points="200.0,362 196.5,353.7 203.5,353.7" fill="#1d2b44"/>
<rect x="20" y="364" width="360" height="40" rx="8" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="200.0" y="389.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" >score %= 3   gives 1</text>
<line x1="200.0" y1="404" x2="200.0" y2="432" stroke="#1d2b44" stroke-width="1.8"/>
<polygon points="200.0,432 196.5,423.7 203.5,423.7" fill="#1d2b44"/>
<rect x="20" y="434" width="360" height="40" rx="8" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="200.0" y="459.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" >score++   gives 2</text>
<line x1="200.0" y1="474" x2="200.0" y2="502" stroke="#1d2b44" stroke-width="1.8"/>
<polygon points="200.0,502 196.5,493.7 203.5,493.7" fill="#1d2b44"/>
<rect x="20" y="504" width="360" height="40" rx="8" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="200.0" y="529.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" >score--   gives 1</text>
<line x1="200.0" y1="544" x2="200.0" y2="572" stroke="#1d2b44" stroke-width="1.8"/>
<polygon points="200.0,572 196.5,563.7 203.5,563.7" fill="#1d2b44"/>
<rect x="20" y="574" width="360" height="40" rx="8" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="200.0" y="599.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" >score--   gives 0</text>
</svg>
<figcaption>Figure 1. The value held by score after each statement, from the first line to the last. Integer division makes 24 / 5 equal 4, and the remainder step then leaves 1.</figcaption>
</figure>

The type of the variable controls the arithmetic. `score` is an `int`, so `score /= 5` is **integer division**: 24 / 5 is 4, with the 0.8 thrown away, and `score %= 3` is the remainder 4 % 3 = 1. If `score` had been a `double`, `score /= 5` would have given 4.8.

```java
public class Types {
    public static void main(String[] args) {
        double price = 20.0;
        price /= 8;
        System.out.println(price);
        price -= 0.5;
        System.out.println(price);
        int items = 20;
        items /= 8;
        System.out.println(items);
    }
}
```

```text
2.5
2.0
2
```

### A detail to notice: the result goes back into the variable's type

When the variable on the left is an `int` and the right side is a `double`, Java converts the result back to an `int` for you, **truncating the fraction** (as a cast would in Topic 1.5). It does not report an error, so check the type of the variable on the left when you trace.

```java
public class Back {
    public static void main(String[] args) {
        int n = 10;
        n *= 1.5;
        System.out.println(n);
        int m = 5;
        m *= 1.5;
        System.out.println(m);
    }
}
```

```text
15
7
```

For `m`, the product 7.5 is truncated to 7 as it is stored. The plain assignment `m = m * 1.5;` would **not** compile, because it stores a `double` in an `int`.

## Three jobs that compound assignment does all the time

Once you can read `x op= e`, you will see it do the same few jobs in almost every program. Recognising the job makes both writing and tracing faster.

**Accumulating.** Start a variable at a neutral value and keep adding to it: `sum += price;`. The variable collects a running total, and after each statement it holds the total so far. In Unit 2 the same statement will sit inside a loop; for now, each use is a single step in a sequence.

**Counting.** A counter goes up by one each time something happens: `count++;`. It starts at zero and, after each event, holds the number of events so far. A statement such as `remaining--;` counts down in the same way.

**Scaling and reducing.** Multiply to scale (`price *= 2;` doubles a price), divide to shrink or to share (`pot /= 4;`), and take the remainder to wrap a value into a fixed range (`position %= 10;` always leaves a number from 0 to 9 for a non-negative position). When a division is used to share whole items, remember that on an `int` it discards the leftover, and the remainder operator recovers it.

A useful habit when you meet a compound assignment is to **read it aloud as a sentence**: "price times-equals two" becomes "make price twice what it was", and "total plus-equals tax" becomes "make total bigger by the tax". If a statement will not read as a sentence in plain English, you have probably mis-parsed it, and the usual cause is not noticing how far the right side extends.

One more point about the **order of statements**. Because each statement uses the value left by the one before it, swapping two adjacent compound assignments usually changes the answer. Adding 5 and then doubling gives a different result from doubling and then adding 5: starting from 10, `x += 5; x *= 2;` leaves 30, but `x *= 2; x += 5;` leaves 25. Sequencing, which you met in Topic 1.1, is exactly what makes a trace table work.

## Worked example 1: Trace a mixed sequence

**Task.** Trace the following code and state the final values of `a`, `b` and `c`.

```java
int a = 17;
int b = 4;
double c = 2.5;
a %= b;
b *= a + 1;
c += b;
a++;
c /= 2;
```

**Step 1, set up the table.**

| After statement | a | b | c | Working |
|---|---|---|---|---|
| `int a = 17;` | 17 | - | - | |
| `int b = 4;` | 17 | 4 | - | |
| `double c = 2.5;` | 17 | 4 | 2.5 | |
| `a %= b;` | 1 | 4 | 2.5 | 17 % 4: 4 * 4 = 16, remainder 1 |
| `b *= a + 1;` | 1 | 8 | 2.5 | the right side first: 1 + 1 = 2; then 4 * 2 = 8 |
| `c += b;` | 1 | 8 | 10.5 | 2.5 + 8 (the `int` 8 is widened to 8.0) |
| `a++;` | 2 | 8 | 10.5 | 1 + 1 |
| `c /= 2;` | 2 | 8 | 5.25 | `c` is a `double`, so 10.5 / 2 is 5.25 |

**Step 2, answer.** The final values are `a = 2`, `b = 8` and `c = 5.25`.

**Step 3, the two traps in this example.** First, `b *= a + 1;` uses `a` as it is **after** the previous statement (1), and the sum `a + 1` is evaluated before the multiplication. Second, `c /= 2;` is a real division because `c` is a `double`. With an `int` it would have truncated.

**Check by running.**

```java
public class Trace {
    public static void main(String[] args) {
        int a = 17;
        int b = 4;
        double c = 2.5;
        a %= b;
        b *= a + 1;
        c += b;
        a++;
        c /= 2;
        System.out.println(a + " " + b + " " + c);
    }
}
```

```text
2 8 5.25
```

## Worked example 2: Split a bill

**Task.** Three items cost 250, 199 and 75 pence. The order is doubled, a coupon takes off 100 pence, and the total is shared equally between 4 people, using whole pence. Find what each person pays, in pounds and pence.

**Step 1, plan in sequence.** Keep the total in one `int` variable `cents` (using whole pence avoids the round-off error of Topic 1.5), and update it with compound operators in the order the story gives.

**Step 2, work it out.**

| Step | Statement | cents |
|---|---|---|
| Start | `int cents = 0;` | 0 |
| First item | `cents += 250;` | 250 |
| Second item | `cents += 199;` | 449 |
| Third item | `cents += 75;` | 524 |
| Doubled | `cents *= 2;` | 1048 |
| Coupon | `cents -= 100;` | 948 |
| Share between 4 | `cents /= 4;` | 237 |

Each share is 237 pence (948 / 4 is exactly 237).

**Step 3, pounds and pence.** Use `/` for whole pounds and `%` for the leftover pence, as in Topic 1.3. `237 / 100` is 2 and `237 % 100` is 37. With the compound form: `int pence = cents; pence %= 100;` gives 37.

```java
public class Bill {
    public static void main(String[] args) {
        int cents = 0;
        cents += 250;
        cents += 199;
        cents += 75;
        cents *= 2;
        cents -= 100;
        cents /= 4;
        int pounds = cents / 100;
        int pence = cents;
        pence %= 100;
        System.out.println(pounds + " pounds " + pence + " pence");
    }
}
```

```text
2 pounds 37 pence
```

**Step 4, check.** Each person pays 2 pounds 37 pence. Four shares make 948 pence, which is the total after the coupon. (If the division had not been exact, `/=` would have dropped the remaining pence. That is a fact to keep in mind whenever you use integer division on money.)

## Common misconceptions

- **"`x *= 2 + 3` means `x = x * 2 + 3`."** The whole right side is evaluated first: it means `x = x * (2 + 3)`.
- **"`x =+ 5` is the same as `x += 5`."** `x =+ 5` is an ordinary assignment of positive 5. It compiles, but it stores 5 in `x` and ignores the old value. The operator is `+=` with the plus first.
- **"`/=` always keeps the fraction."** On an `int` variable it is integer division.
- **"`x++` returns the new value, so I can use it in an expression."** The course uses `++` and `--` only as separate statements.
- **"A compound assignment to an `int` with a `double` is an error."** It compiles, and the result is truncated when stored.
- **"`%=` gives a percentage."** It stores the remainder.
- **"Each statement works on the original value of the variable."** Each uses the value left by the previous statement.

## Where this leads

Practise with the [Topic 1.6 practice questions](/advanced-course-resources/computer-science-a/1-6-compound-assignment-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-a/1-6-compound-assignment-revision-notes/) and tick off the [checklist](/advanced-course-resources/computer-science-a/1-6-compound-assignment-checklist/). The next topic, [1.7 Application Program Interface (API) and Libraries](/advanced-course-resources/computer-science-a/1-7-api-libraries-study-guide/), moves from single variables to classes that other programmers have already written for you to use.
