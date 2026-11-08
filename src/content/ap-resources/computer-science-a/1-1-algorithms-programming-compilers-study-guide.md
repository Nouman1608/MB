---
resourceId: "mb-ap-csa-1.1-study-guide"
title: "Introduction to Algorithms, Programming, and Compilers: Study Guide (Computer Science A 1.1)"
description: "Learn what an algorithm is, why order of steps (sequencing) matters, how a Java program is compiled and run, and how to tell syntax, logic and run-time errors apart."
course: "computer-science-a"
unit: 1
topics: ["1.1"]
resourceType: "study-guide"
prerequisites: ["No programming experience is needed", "Comfort following a numbered set of instructions, such as a recipe"]
learningObjectives: ["Describe an everyday process as an algorithm, using written steps or a diagram, and explain why the order of the steps matters", "Explain what an IDE and a compiler do and the order in which a Java program is written, compiled and run", "Classify a fault as a syntax error, a logic error or a run-time error (including an exception), and say how each is detected", "Trace a short sequence of statements to predict its result"]
skills: ["1", "3"]
studyMinutes: 40
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.1-revision-notes", "mb-ap-csa-1.1-practice", "mb-ap-csa-1.1-checklist"]
next: "mb-ap-csa-1.1-practice"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["An algorithm is a step-by-step process for a task; sequencing means the steps happen one at a time in a defined order, and changing the order can change the result.", "An IDE helps you write, compile and run code. The compiler checks the code for some errors and must accept it before the program can run.", "A syntax error breaks the rules of the language and is found by the compiler. A logic error compiles and runs but gives wrong results, and is found only by testing with chosen data.", "A run-time error happens while the program runs and usually stops it; an exception is a run-time error that interrupts the normal flow, such as dividing an int by zero."]
faqs: [{"question": "Does the compiler find every mistake in my program?", "answer": "No. The compiler only checks for some errors, mainly breaches of the language rules (syntax errors and type mismatches). It cannot know what you meant the program to do, so logic errors get through, and some problems only appear while the program runs."}, {"question": "Is a program that compiles without errors a correct program?", "answer": "Not necessarily. Compiling shows that the program obeys the rules of Java. Only testing with specific data, comparing results with what you expected, can show whether the algorithm behind it is right."}, {"question": "What is the difference between a run-time error and a logic error?", "answer": "A run-time error stops or disturbs the program while it executes, usually with an error message that names an exception. A logic error does not stop anything: the program finishes normally but produces the wrong answer or behaviour."}]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

## An algorithm is a plan you can follow one step at a time

Every program you will write in this course starts as an idea about how to get something done. That idea, written as an ordered set of steps, is an **algorithm**. You already use algorithms every day. A recipe is one. So are the directions you give a friend to your house, or the steps for borrowing a library book.

An algorithm can be written in everyday language, as a numbered list, or drawn as a diagram of boxes and arrows. The form does not matter. What matters is that anyone (or any machine) who follows the steps exactly gets the intended outcome.

Here is an algorithm for a small task, working out how much change a customer should get when they pay with a 20-unit note:

1. Read the price of the item.
2. Subtract the price from 20.
3. Display the result as the change.

The three steps happen **one at a time, in this order**. This idea is called **sequencing**: a sequence defines the order in which steps are completed, and the machine does not start step 3 until step 2 is finished. Sequencing is the first of three building blocks of algorithms. You will meet the other two, selection (making a decision) and iteration (repeating), in Unit 2. For the whole of Unit 1, a program is just a sequence of statements run from top to bottom, with the occasional detour into a method.

Why does order matter? Imagine swapping steps 2 and 3. "Display the result" before the result has been calculated would show nothing useful. Order also matters when two steps use the same storage, as in the worked example later in this guide.

## From idea to running program

Writing the steps in English is not enough for a computer. The algorithm must be turned into a program in a programming language, here **Java**. The path from your keyboard to a running program has a fixed order.

<figure>
<svg viewBox="0 0 600 448" role="img" aria-labelledby="fig-pipeline-t fig-pipeline-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="fig-pipeline-t">How a Java program goes from source code to output</title>
<desc id="fig-pipeline-d">A top-to-bottom chain of steps with arrows between them: Write source code (Greeting.java); then Compile (the compiler checks the code); then Compile-time errors reported: fix and compile again; then Run the compiled program; then Run-time errors or exceptions: program stops, fix the code; then Output appears on the screen. Notes beside arrows: after step 2, code accepted; after step 3, back to the editor; after step 4, if nothing goes wrong.</desc>
<rect x="0" y="0" width="600" height="448" fill="#ffffff"/>
<rect x="20" y="14" width="360" height="40" rx="8" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="200.0" y="39.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" >Write source code (Greeting.java)</text>
<line x1="200.0" y1="54" x2="200.0" y2="82" stroke="#1d2b44" stroke-width="1.8"/>
<polygon points="200.0,82 196.5,73.7 203.5,73.7" fill="#1d2b44"/>
<rect x="20" y="84" width="360" height="40" rx="8" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="200.0" y="109.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" >Compile (the compiler checks the code)</text>
<line x1="200.0" y1="124" x2="200.0" y2="152" stroke="#1d2b44" stroke-width="1.8"/>
<polygon points="200.0,152 196.5,143.7 203.5,143.7" fill="#1d2b44"/>
<text x="214.0" y="143.0" text-anchor="start" font-size="12" font-weight="normal" fill="#1d2b44" >code accepted</text>
<rect x="20" y="154" width="360" height="40" rx="8" fill="#b8c4d8" stroke="#1d2b44" stroke-width="1.5"/>
<text x="200.0" y="179.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" >Compile-time errors reported: fix and compile again</text>
<line x1="200.0" y1="194" x2="200.0" y2="222" stroke="#1d2b44" stroke-width="1.8"/>
<polygon points="200.0,222 196.5,213.7 203.5,213.7" fill="#1d2b44"/>
<text x="214.0" y="213.0" text-anchor="start" font-size="12" font-weight="normal" fill="#1d2b44" >back to the editor</text>
<rect x="20" y="224" width="360" height="40" rx="8" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="200.0" y="249.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" >Run the compiled program</text>
<line x1="200.0" y1="264" x2="200.0" y2="292" stroke="#1d2b44" stroke-width="1.8"/>
<polygon points="200.0,292 196.5,283.7 203.5,283.7" fill="#1d2b44"/>
<text x="214.0" y="283.0" text-anchor="start" font-size="12" font-weight="normal" fill="#1d2b44" >if nothing goes wrong</text>
<rect x="20" y="294" width="360" height="40" rx="8" fill="#b8c4d8" stroke="#1d2b44" stroke-width="1.5"/>
<text x="200.0" y="319.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" >Run-time errors or exceptions: program stops, fix the code</text>
<line x1="200.0" y1="334" x2="200.0" y2="362" stroke="#1d2b44" stroke-width="1.8"/>
<polygon points="200.0,362 196.5,353.7 203.5,353.7" fill="#1d2b44"/>
<rect x="20" y="364" width="360" height="40" rx="8" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="200.0" y="389.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" >Output appears on the screen</text>
</svg>
<figcaption>Figure 1. The path of a Java program. The compiler is a gate: only code that passes it can be run, so syntax errors stop the process before the program starts.</figcaption>
</figure>

- You can write code in any text editor, but most programmers use an **integrated development environment (IDE)**. An IDE puts an editor, a compiler and a way to run the program in one place, and it provides tools to write, compile and run code.
- The **compiler** translates your source code into a form the machine can run, and on the way it checks the code for some errors. If the compiler finds an error it reports it, and **the program cannot be run until the error is fixed**.
- Once the code compiles, you **run** it. Statements execute one at a time in order. Problems that appear now are discovered during execution.

Here is the smallest complete Java program you need for now. It has a class with a `main` method, which is where execution begins:

```java
public class Greeting {
    public static void main(String[] args) {
        System.out.println("Plan first, then code.");
        System.out.println("Test with chosen data.");
    }
}
```

```text
Plan first, then code.
Test with chosen data.
```

The first `println` statement runs first and its text appears first. If you swapped the two lines, the output would appear in the swapped order. That is sequencing in action.

## Three families of error

Programmers make mistakes, and the course expects you to tell the kinds apart by **when** and **how** they show up.

| Error kind | What it is | When and how it is found | Example |
|---|---|---|---|
| Syntax error | A mistake where the rules of the language are not followed | By the **compiler**, before the program can run | Missing semicolon; putting a text value in an `int` variable |
| Logic error | A mistake in the algorithm or program that makes it behave incorrectly or unexpectedly | By **testing** the program with specific data and checking the result against what you expected | Calculating an average with the wrong bracketing |
| Run-time error | A mistake that occurs while the program is executing, usually making it terminate abnormally | When the program **runs**; an error message appears and execution stops | Dividing an `int` by zero |

An **exception** is a particular kind of run-time error. It occurs because of an unexpected problem that the compiler did not detect, and it interrupts the normal flow of the program's execution. Dividing an integer by zero causes an `ArithmeticException`, which you will see below.

### Seeing each kind

A **syntax error**. The compiler stops at the missing semicolon and refuses to produce a runnable program:

```java nocompile
public class A {
    public static void main(String[] args) {
        int score1 = 80
        System.out.println(score1);
    }
}
```

```text
A.java:3: error: ';' expected
        int score1 = 80
                       ^
1 error
```

A mismatch between what a variable holds and what you give it is also a rule breach caught at compile time. Writing `int count = "five";` produces `incompatible types: String cannot be converted to int`.

A **run-time error**. This compiles, because dividing two ints is allowed by the rules of the language. The problem only appears when the division is executed:

```java
public class C {
    public static void main(String[] args) {
        int total = 90;
        int students = 0;
        System.out.println("Average: " + total / students);
        System.out.println("Done");
    }
}
```

Running it prints no average. Execution stops at line 5 with `Exception in thread "main" java.lang.ArithmeticException: / by zero`, and the line that prints `Done` never runs.

A **logic error**. This compiles and runs to the end, so nothing complains. The answer is simply wrong:

```java
public class D {
    public static void main(String[] args) {
        int a = 70;
        int b = 90;
        System.out.println("Average: " + (a + b / 2));
        System.out.println("Average: " + (a + b) / 2);
    }
}
```

```text
Average: 115
Average: 80
```

The first line is the logic error: division happens before addition, so it works out `70 + 45`. The second, with brackets around the sum, gives the average of 70 and 90. Only someone who knew the expected answer, 80, would spot the fault. This is why you **test with specific data**: pick inputs where you already know the right answer.

## Worked example 1: Sequencing and swapping two values

**Task.** Two cups hold different drinks: cup A holds juice and cup B holds milk. Write an algorithm to swap the contents, then express it as a Java program that swaps two numbers.

**Step 1, think about the real task.** You cannot pour juice straight into cup B, because B is already full of milk. You need a spare empty cup, cup T (for temporary). A correct sequence is:

1. Pour A (juice) into T.
2. Pour B (milk) into A.
3. Pour T (juice) into B.

**Step 2, check the order.** Suppose steps 1 and 2 were swapped: pour B into A first. Cup A already holds juice, so the milk and juice mix, and the original juice cannot be recovered. The order is not cosmetic; it decides whether the algorithm works.

**Step 3, translate to Java.** A variable stores a value. The spare cup becomes a third variable. Trace each statement in order. You will study declarations in Topic 1.2 and assignment in Topic 1.4; here, read `int temp = a;` as "make a new int box called temp and copy the value in a into it".

```java
public class Swap {
    public static void main(String[] args) {
        int a = 8;
        int b = 3;
        int temp = a;
        a = b;
        b = temp;
        System.out.println("a = " + a + ", b = " + b);
    }
}
```

```text
a = 3, b = 8
```

**Step 4, trace it.** A trace table records the value of each variable after each statement. A dash means the variable does not exist yet.

| After statement | a | b | temp |
|---|---|---|---|
| `int a = 8;` | 8 | - | - |
| `int b = 3;` | 8 | 3 | - |
| `int temp = a;` | 8 | 3 | 8 |
| `a = b;` | 3 | 3 | 8 |
| `b = temp;` | 3 | 8 | 8 |

**Step 5, check the result.** The values have swapped: `a` is now 3 and `b` is 8. If you had written `a = b;` first, before saving `a` in `temp`, the 8 would have been overwritten and lost, exactly as with the mixed drinks.

## Worked example 2: Classify the faults in a program

**Task.** A student writes a program meant to display the average of three test scores, 70, 80 and 90, whose correct answer is 80. Three versions of the program each contain one fault. For each, state the kind of error, say how it is detected, and correct it.

**Version 1.** The relevant lines are:

```java nocompile
int sum = 70 + 80 + 90;
System.out.println("Average: " + sum / 3;
```

The closing bracket of `println(` is missing. That breaks the grammar of the language, so this is a **syntax error**. The **compiler** detects it, with an error message that points to the line, and the program will not run. Fix: `System.out.println("Average: " + sum / 3);`.

**Version 2.** The relevant lines are:

```java
int sum = 70 + 80 + 90;
System.out.println("Average: " + sum / 2);
```

This compiles and runs without any complaint, and prints `Average: 120`. The divisor 2 should be 3, because there are three scores. This is a **logic error**. No tool reports it. It is found by **testing**: you know that the average of 70, 80 and 90 must be 80, and 120 is not. Fix: divide by 3.

**Version 3.** The relevant lines are:

```java
int sum = 70 + 80 + 90;
int count = 0;
System.out.println("Average: " + sum / count);
```

This compiles. When it runs, the division by zero stops the program with an `ArithmeticException` and no average is printed. This is a **run-time error**, and the exception is the type of run-time error that interrupts normal execution. Fix: set `count` to 3.

**Summary of the method.** First ask whether the program can be compiled. If not, it is a syntax error. If it runs and stops with a message, it is a run-time error. If it runs to the end with a wrong result, it is a logic error.
## Common misconceptions

- **"If it compiles, it is correct."** Compiling means only that the rules of the language are satisfied. A program can compile and still compute the wrong thing (Version 2 above).
- **"The compiler finds all errors."** It finds some of them. Logic errors and some run-time errors are invisible to it.
- **"A syntax error and a run-time error are the same because both show red text."** The difference is timing. A syntax error is reported before the program starts. A run-time error appears while it is running, often after some output has already been produced.
- **"Statements run in whatever order makes sense to me."** They run one at a time, top to bottom, unless a method call or (later) a decision or a loop sends control elsewhere. Moving a line changes the meaning.
- **"An algorithm is code."** An algorithm is a plan; code is one way of expressing it. The same algorithm can be written in words, in a diagram or in different programming languages.
- **"An exception is something only advanced programmers meet."** Exceptions are a normal kind of run-time error; the course names `ArithmeticException` (dividing an int by zero) and later others.

## Where this leads

Next, practise on the [Topic 1.1 practice questions](/advanced-course-resources/computer-science-a/1-1-algorithms-programming-compilers-practice/) and use the [revision notes](/advanced-course-resources/computer-science-a/1-1-algorithms-programming-compilers-revision-notes/) when you are short of time. Then tick off the [checklist](/advanced-course-resources/computer-science-a/1-1-algorithms-programming-compilers-checklist/). The next topic, [1.2 Variables and Data Types](/advanced-course-resources/computer-science-a/1-2-variables-data-types-study-guide/), explains the boxes that held `a`, `b` and `temp` in the swap program: what a data type is and how a variable stores a value.
