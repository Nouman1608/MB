---
resourceId: "mb-ap-csa-1.1-revision-notes"
title: "Introduction to Algorithms, Programming, and Compilers: Revision Notes (Computer Science A 1.1)"
description: "A one-page recap of algorithms, sequencing, the compile-and-run process and the three kinds of programming error, with a quick self-check."
course: "computer-science-a"
unit: 1
topics: ["1.1"]
resourceType: "revision-notes"
prerequisites: ["Read the study guide first, or use this page as a recap"]
learningObjectives: ["Recall the definitions of algorithm, sequencing, IDE and compiler", "Sort a fault into syntax, logic or run-time error from how and when it appears", "Trace a short sequence of statements in a table"]
skills: ["1", "3"]
studyMinutes: 15
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.1-study-guide", "mb-ap-csa-1.1-practice", "mb-ap-csa-1.1-checklist"]
next: "mb-ap-csa-1.1-practice"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["An algorithm is an ordered, step-by-step process; sequencing fixes the order, one step at a time.", "Compile first, run second: errors found by the compiler must be fixed before the program can run.", "Syntax errors are found by the compiler, logic errors by testing, run-time errors while running."]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/computer-science-a/1-1-algorithms-programming-compilers-study-guide/).

## Recap

- An **algorithm** is a step-by-step process for completing a task or solving a problem. It can be written in everyday language or drawn as a diagram.
- **Sequencing** defines the order in which steps happen. Steps are completed one at a time, and changing the order can change the outcome.
- An **integrated development environment (IDE)** provides tools to write, compile and run code. Code can also be written in any text editor.
- The **compiler** checks code for some errors. Errors it detects must be fixed before the program can run.
- Every program in this course is written in Java, begins at `main`, and (in Unit 1) runs its statements from top to bottom, with detours into methods.

## Key relationships

| Idea | What to remember |
|---|---|
| Order of work | write, then compile, then run |
| Syntax error | breaks the rules of the language; **detected by the compiler** |
| Logic error | compiles and runs but behaves incorrectly or unexpectedly; **detected by testing with specific data** |
| Run-time error | occurs **during** execution; the program usually terminates abnormally |
| Exception | a run-time error from an unexpected problem the compiler did not detect; it interrupts normal flow |
| Integer division by zero | `ArithmeticException` at run time (for example `12 / 0`) |
| Trace table | one row per statement; one column per variable; shows each value after each statement |

## Assumptions and conventions

- Examples assume a class with a `main` method, as in `public static void main(String[] args)`.
- A compile error means the program **does not run at all**. A run-time error means it **starts and then fails**; any output printed before the failure still appears.
- "Test with specific data" means choosing inputs whose correct output you can work out independently.
- No calculator is allowed on the exam, so work every trace by hand.

## Mistakes to avoid

1. **Saying "it compiled, so it is right".** Compiling does not prove the algorithm is correct.
2. **Confusing the three error kinds.** Ask: could it be compiled? Did it stop while running? Did it finish with a wrong answer?
3. **Reordering statements carelessly.** Moving a line changes the meaning, especially when two steps use the same variable.
4. **Calling every error message a syntax error.** An exception message at run time is a run-time error.
5. **Using test data that hides a bug.** Zero, or equal values, can make a faulty formula give the right answer by luck.
6. **Describing an algorithm as "the code".** An algorithm is the plan; the code is one way to write it.

## Quick self-check

1. Is a missing semicolon a syntax, logic or run-time error, and which tool finds it? *(Syntax error; the compiler.)*
2. A program prints `Average: 120` for the scores 70, 80 and 90 and does not crash. What kind of error is this? *(A logic error; the correct average is 80, found by testing.)*
3. `int n = 0; System.out.println(50 / n);` compiles. What happens when it runs? *(An `ArithmeticException` stops the program: a run-time error.)*
4. Trace: `int a = 2; int b = 5; a = b; b = a;` What are `a` and `b`? *(Both are 5, because `a` was overwritten before its old value was saved.)*

Next: [practice questions](/advanced-course-resources/computer-science-a/1-1-algorithms-programming-compilers-practice/).
