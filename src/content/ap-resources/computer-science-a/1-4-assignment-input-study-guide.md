---
resourceId: "mb-ap-csa-1.4-study-guide"
title: "Assignment Statements and Input: Study Guide (Computer Science A 1.4)"
description: "Learn how an assignment statement stores the value of an expression in a variable, why a variable must be initialized before use, and how a Scanner reads keyboard input."
course: "computer-science-a"
unit: 1
topics: ["1.4"]
resourceType: "study-guide"
prerequisites: ["Topic 1.2: declaring variables of type int, double and boolean", "Topic 1.3: evaluating arithmetic expressions"]
prerequisiteResources: ["mb-ap-csa-1.3-study-guide"]
learningObjectives: ["Explain that an assignment evaluates the expression on the right and stores the resulting value in the variable on the left", "Trace a sequence of assignments, including statements such as x = x + 1, and state the final values", "Explain why a variable must be initialized before it is used and why the assigned value must be of a compatible type", "Describe how the Scanner class reads text input from the keyboard and what the nextLine pitfall looks like"]
skills: ["2", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.4-revision-notes", "mb-ap-csa-1.4-practice", "mb-ap-csa-1.4-checklist"]
next: "mb-ap-csa-1.4-practice"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["The assignment operator = evaluates the expression on the right and stores the value in the variable on the left.", "Every variable must be assigned a value, of a compatible type, before it is used in an expression; the first assignment initializes it.", "An expression has one value with a type; an int expression can be stored in a double variable but not the other way round.", "A reference variable can hold an object reference or null, the literal meaning no object.", "The Scanner class is one way to read text from the keyboard; its methods return the next int, double, boolean, word or line."]
faqs: [{"question": "Is x = x + 1 a mistake because x can never equal x + 1?", "answer": "No. The = sign is not an equation. Java works out the right side first using the current value of x, then stores the result back in x, so the value of x goes up by one."}, {"question": "Why does Java say a variable might not have been initialized?", "answer": "A variable declared without a value has nothing in it. Using it in an expression before it has been assigned a value is a compile-time error, so the compiler stops you from using a value that does not exist."}, {"question": "What is null?", "answer": "The literal null is a special value that a reference variable holds when it is not associated with any object. A primitive variable such as an int can never hold null."}, {"question": "Do I need to memorise the exact way of reading input for the exam?", "answer": "No. The course says that Scanner is one way to read keyboard text, but any specific form of user input is outside the scope of the exam. What you do need is to read and trace assignment statements."}]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

## Assignment: evaluate on the right, store on the left

In Topic 1.2 you wrote lines such as `int total = 10;`. The `=` in that line is the **assignment operator**. It does one job: the **value of the expression on the right is stored in the variable on the left**. The assignment operator lets a program **initialize** a variable (give it a value for the first time) or **change** the value it already holds.

The order is the whole story, so say it every time you read an assignment: **right side first, then store**.

```java
int a = 3;
int b = a + 2;
a = a * b;
b = b - a;
System.out.println(a + " " + b);
```

```text
15 -10
```

Trace it with a table, one row per statement:

| After statement | a | b | How it was worked out |
|---|---|---|---|
| `int a = 3;` | 3 | - | the literal 3 is stored |
| `int b = a + 2;` | 3 | 5 | `a + 2` is 5 |
| `a = a * b;` | 15 | 5 | uses the current a (3) and b (5): 15 |
| `b = b - a;` | 15 | -10 | uses the **new** a (15): 5 - 15 is -10 |

Look at `a = a * b;`. In algebra that equation would say `b` is 1 (or `a` is 0). In Java it is not an equation; it is an instruction: "take the current `a`, multiply by `b`, and put the result back in `a`".

### An expression has a value and a type

During execution, an expression is evaluated to produce a **single value**, and that value has a **type** that depends on how the expression was evaluated. In `3 + 2` the value is the `int` 5. In `3 + 2.0` it is the `double` 5.0. The assignment is allowed only if the type of that value is **compatible** with the type of the variable:

- An `int` value can be stored in a `double` variable (`double d = a + 2;` holds `5.0`).
- A `double` value **cannot** be stored in an `int` variable (`int n = 2.5 * 2;` is rejected, even though 5.0 is whole, because the type of the value is `double`). You will see how to convert in Topic 1.5.
- A `boolean` value goes only in a `boolean` variable.

### Initialization: a variable must have a value before it is used

A variable is **initialized** the first time it is assigned a value. Every variable must be assigned a value before it can be used in an expression. If you try to use one that has never been given a value, the compiler refuses:

```java nocompile
int y;
int z = y + 1;
```

```text
error: variable y might not have been initialized
```

Declaring and initializing in one statement (`int y = 0;`) avoids this. A variable can also be declared first and assigned later, as long as the assignment comes before any use.

### Reference types and `null`

A variable of a **reference type**, such as `String`, can be assigned a new object or **`null`**. The literal `null` is a special value that indicates that the reference is **not associated with any object**.

```java
String title = "Dune";
String empty = null;
```

`title` refers to a `String` object. `empty` refers to nothing. A primitive variable cannot hold `null`: `int n = null;` does not compile. Calling a method on a `null` reference causes a `NullPointerException`, which Topic 1.14 covers.

## Input: getting values from a user

Programs become interactive when they can accept input. Input can come in many forms: tactile (touch), audio, visual or text. This course uses text typed at the keyboard as its example, through the **`Scanner` class**. (The exam does not test any specific way of getting user input; the aim here is to see how input becomes values in variables.)

A `Scanner` reads items from the keyboard. These methods return the next item of the right type:

| Method | Returns |
|---|---|
| `nextInt()` | the next `int` |
| `nextDouble()` | the next `double` |
| `nextBoolean()` | the next `boolean` |
| `next()` | the next word, as a `String` |
| `nextLine()` | the rest of the line, as a `String` |

If the next item cannot be read as the requested type (for instance, the user types `abc` when `nextInt()` is called), an `InputMismatchException` is thrown at run time.

```java stdin="Ada Lovelace|36|1.65"
import java.util.Scanner;

public class Greet {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String name = in.nextLine();
        int age = in.nextInt();
        double height = in.nextDouble();
        System.out.println(name + " is " + age + " and " + height + " m tall");
        int next = age + 1;
        System.out.println("Next year: " + next);
    }
}
```

```text
Ada Lovelace is 36 and 1.65 m tall
Next year: 37
```

Each `in.next...()` call is an expression whose value is stored by an assignment. The input becomes a value in a variable, and after that the program works with it like any other value.

### The `nextLine` pitfall

`nextInt()` reads the number but **leaves the end-of-line marker** unread. If `nextLine()` is called straight afterwards, it reads the rest of that **same** line, which is empty. The Quick Reference says this too: `nextLine` "can return the empty string if called immediately after another Scanner method".

```java stdin="5|hello"
import java.util.Scanner;

public class Pitfall {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        String rest = in.nextLine();
        System.out.println("[" + rest + "]");
        String line = in.nextLine();
        System.out.println("[" + line + "]");
    }
}
```

```text
[]
[hello]
```

The first `nextLine()` consumed the empty remainder of the line holding `5`; the second one read `hello`.

## A reliable method for tracing assignments

Most exam questions on this topic ask you to say what a few statements leave in the variables. The same four moves work every time:

1. **Draw a column for every variable** that appears, and write its type above it. The type tells you what kinds of values are allowed and how they will print.
2. **Take the statements one at a time, top to bottom.** Never skip ahead; every row depends on the one before it.
3. **For each statement, evaluate the right side first,** using the values in the table at that moment. Write down the value **and its type** (an `int` or a `double`), applying the rules from Topic 1.3.
4. **Overwrite only the variable on the left.** Copy every other cell down unchanged. If the left variable is a `double` and the value is an `int`, write it with a decimal point.

The commonest slips are updating the wrong column, using a value from a later row, and forgetting that an integer division has already thrown away its fraction before the result is stored. Rows with a gap, such as `-`, remind you that a variable cannot be used before it is declared and initialized.

Input fits the same method. A statement such as `int age = in.nextInt();` is an assignment whose right side is "the next integer typed". When you trace a program that reads input, the question tells you what the user typed; write that value in the table when the read statement runs. Choose variable names that say what was read (`age`, not `a`): it makes the trace, and the program, easier to follow.

## Worked example 1: Trace assignments with mixed types

**Task.** Trace the following segment and state what it prints.

```java
int items = 4;
double price = 2.5;
double cost = items * price;
items = items + 1;
cost = cost + items * price;
price = items;
System.out.println(items + " " + price + " " + cost);
```

**Step 1, trace.**

| After statement | items | price | cost | Working |
|---|---|---|---|---|
| `int items = 4;` | 4 | - | - | |
| `double price = 2.5;` | 4 | 2.5 | - | |
| `double cost = items * price;` | 4 | 2.5 | 10.0 | `4 * 2.5` is the `double` 10.0 |
| `items = items + 1;` | 5 | 2.5 | 10.0 | uses the old items, 4 |
| `cost = cost + items * price;` | 5 | 2.5 | 22.5 | `items * price` is `5 * 2.5` = 12.5, and 10.0 + 12.5 = 22.5 |
| `price = items;` | 5 | 5.0 | 22.5 | the `int` 5 is stored in a `double`, becoming 5.0 |

**Step 2, print.** The output is `5 5.0 22.5`.

**Step 3, check types.** `cost` and `price` are `double` variables, so they print with a decimal point; `items` is an `int` and prints as `5`. Notice that `price = items;` is legal (an `int` into a `double`) but the reverse, `items = price;`, would not compile.

## Worked example 2: A program driven by input

**Task.** A program reads the length and width of a rectangle (in metres) from the keyboard and prints its area and perimeter. Work out the output for the input 4.5 and 3.

**Step 1, plan.** Read two `double` values into variables, then compute `area = length * width` and `perimeter = 2 * (length + width)`.

```java stdin="4.5|3"
import java.util.Scanner;

public class Rectangle {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        double length = in.nextDouble();
        double width = in.nextDouble();
        double area = length * width;
        double perimeter = 2 * (length + width);
        System.out.println("Area: " + area);
        System.out.println("Perimeter: " + perimeter);
    }
}
```

```text
Area: 13.5
Perimeter: 15.0
```

**Step 2, trace by hand.** After the two reads, `length` holds 4.5 and `width` holds 3.0 (the input `3` is read by `nextDouble()` as the `double` 3.0). Then `area` is `4.5 * 3.0` = 13.5. For `perimeter`, the bracket is evaluated first: `4.5 + 3.0` = 7.5, and `2 * 7.5` is 15.0.

**Step 3, check.** Every variable is initialized by its assignment before it is used. Each assigned value is a `double`, matching the declared types. If the user typed `abc` for the length, `nextDouble()` would throw an `InputMismatchException`: a run-time error.

## Common misconceptions

- **"`x = x + 1` is impossible."** It is a normal, useful statement: evaluate the right side with the current `x`, then store the result in `x`.
- **"`=` tests whether two things are equal."** It stores a value. (Comparison is `==`, in Unit 2.)
- **"The new value is used while working out the right side."** The right side is evaluated first, using the values stored before the assignment.
- **"A variable declared without a value holds 0."** A variable you have not initialized cannot be used at all; the compiler rejects it.
- **"I can store 5.0 in an `int` because it is a whole number."** The compiler goes by the **type** of the value, `double`, not by whether it looks whole.
- **"`null` is the same as zero or an empty string."** `null` means no object at all; `""` is an actual empty `String` object.
- **"After `b = a;` the two variables are tied together."** For primitive values `b` received a copy; changing `a` later does not change `b`.
- **"`nextLine()` always waits for new text."** After `nextInt()` it may read the empty remainder of the previous line.

## Where this leads

Try the [Topic 1.4 practice questions](/advanced-course-resources/computer-science-a/1-4-assignment-input-practice/), use the [revision notes](/advanced-course-resources/computer-science-a/1-4-assignment-input-revision-notes/) for a recap and tick off the [checklist](/advanced-course-resources/computer-science-a/1-4-assignment-input-checklist/). The next topic, [1.5 Casting and Range of Variables](/advanced-course-resources/computer-science-a/1-5-casting-range-study-guide/), explains how to convert a `double` to an `int` deliberately and what happens when an `int` gets too big.
