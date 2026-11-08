---
resourceId: "mb-ap-csa-1.8-study-guide"
title: "Documentation with Comments: Study Guide (Computer Science A 1.8)"
description: "Learn the three kinds of Java comment, how Javadoc comments document a method, and how preconditions and postconditions state what a method expects and guarantees."
course: "computer-science-a"
unit: 1
topics: ["1.8"]
resourceType: "study-guide"
prerequisites: ["Topic 1.7: documentation tells a programmer how to use a class or method", "Topics 1.1 to 1.6: statements, expressions and assignment"]
prerequisiteResources: ["mb-ap-csa-1.7-study-guide"]
learningObjectives: ["Name the three kinds of Java comment, write each correctly and say what the compiler does with them", "Explain what a precondition and a postcondition are and who is responsible for the precondition", "Write a precondition and a postcondition for a short method", "Use documentation alone to decide whether a call is valid and what it should return"]
skills: ["4"]
studyMinutes: 35
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.8-revision-notes", "mb-ap-csa-1.8-practice", "mb-ap-csa-1.8-checklist"]
next: "mb-ap-csa-1.8-practice"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["Comments help people read code; the compiler ignores them and they are not executed.", "Java has // for one line, /* */ for a block and /** */ for Javadoc comments that create API documentation.", "A precondition must be true just before a method runs for it to behave as expected; the method is not expected to check it.", "A postcondition must be true after the method has run: it describes what is returned or the new values of the object's attributes.", "A comment that disagrees with the code is a bug in the documentation: always check the code."]
faqs: [{"question": "Do comments make a program run slower or change its output?", "answer": "No. Comments are ignored by the compiler and are not executed when the program runs, so they have no effect on the output. Their audience is people: the original programmer and others who read the code later."}, {"question": "What is the difference between a precondition and a postcondition?", "answer": "A precondition is a condition that must be true just before a method runs for the method to behave as expected. A postcondition is a condition that is always true after the method has run, describing what it returned or what its object looks like afterwards."}, {"question": "Does the method have to check its precondition?", "answer": "No. There is no expectation that the method will check that its preconditions are satisfied. It is the caller's job to make sure the precondition is true. If it is not, the method makes no promise about its behavior, and it may fail."}, {"question": "When do I use /** */ instead of /* */?", "answer": "Use /** */ (a Javadoc comment) directly before a class or method to document it; tools use it to build API documentation. Use /* */ for a block comment over several lines and // for a short comment on one line."}]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

## Code is read far more often than it is written

You write a program once, but it gets read many times: by you next week, by a teammate, by whoever maintains it later. A program that works but cannot be understood is a liability. Variable names help. So do **comments**: notes in the source file, written for people.

**Comments are written for both the original programmer and other programmers to understand the code and its functionality, but they are ignored by the compiler and are not executed when the program is run.** That means you can write as many as you like without changing what the program does.

### The three kinds of comment

| Kind | Written as | Use |
|---|---|---|
| Single line | `// text` | a short note on one line; everything from `//` to the end of the line is a comment |
| Block | `/* text */` | a comment over several lines, or part of a line; everything between `/*` and `*/` is ignored |
| Javadoc | `/** text */` | a documentation comment placed just before a class or method; used to create API documentation |

```java
/** Shows the three kinds of comment. */
public class Comments {
    // a comment on one line
    /* a block comment
       that runs over two lines */
    public static void main(String[] args) {
        int x = 5; // the comment ends at the end of this line
        /* int x = 99; */
        System.out.println(x);
        // System.out.println("hidden");
    }
}
```

```text
5
```

The line `/* int x = 99; */` was **commented out**: it is turned into a comment so that it does not run. (If it ran, the compiler would also complain, since `x` would be declared twice.) Programmers often comment out a line while testing, then remove the comment to restore it. The last statement never printed `hidden`.

Two notes on syntax. A block comment ends at the **first** `*/` it meets, so block comments do not nest: writing a `/* ... */` inside another leaves the outer closing `*/` outside any comment, which is a compile-time (syntax) error. And a block comment that is never closed swallows the rest of the file.

## Documenting a method: Javadoc, preconditions and postconditions

When you use a library method, the documentation tells you **what you must supply** and **what you will get**. When you write a method, you should document it the same way, so that someone else can use it without reading its body. Two statements in a Javadoc comment do most of the work.

A **precondition** is a condition that **must be true just prior to the execution of a method** in order for it to behave as expected. It is a promise the **caller** makes. There is **no expectation that the method will check** to ensure its preconditions are satisfied.

A **postcondition** is a condition that **must always be true after the execution of the method**. Postconditions describe the outcome of the execution in terms of what is being returned or the current value of the attributes of an object. It is a promise the **method** makes, provided the precondition held.

<figure>
<svg viewBox="0 0 600 238" role="img" aria-labelledby="fig-contract-t fig-contract-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="fig-contract-t">The contract between a caller and a method</title>
<desc id="fig-contract-d">A top-to-bottom chain of steps with arrows between them: Caller makes sure the precondition is true; then Method runs; then Postcondition is guaranteed to be true afterwards. Notes beside arrows: after step 1, precondition holds; after step 2, method finishes.</desc>
<rect x="0" y="0" width="600" height="238" fill="#ffffff"/>
<rect x="20" y="14" width="360" height="40" rx="8" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="200.0" y="39.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" >Caller makes sure the precondition is true</text>
<line x1="200.0" y1="54" x2="200.0" y2="82" stroke="#1d2b44" stroke-width="1.8"/>
<polygon points="200.0,82 196.5,73.7 203.5,73.7" fill="#1d2b44"/>
<text x="214.0" y="73.0" text-anchor="start" font-size="12" font-weight="normal" fill="#1d2b44" >precondition holds</text>
<rect x="20" y="84" width="360" height="40" rx="8" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="200.0" y="109.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" >Method runs</text>
<line x1="200.0" y1="124" x2="200.0" y2="152" stroke="#1d2b44" stroke-width="1.8"/>
<polygon points="200.0,152 196.5,143.7 203.5,143.7" fill="#1d2b44"/>
<text x="214.0" y="143.0" text-anchor="start" font-size="12" font-weight="normal" fill="#1d2b44" >method finishes</text>
<rect x="20" y="154" width="360" height="40" rx="8" fill="#b8c4d8" stroke="#1d2b44" stroke-width="1.5"/>
<text x="200.0" y="179.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" >Postcondition is guaranteed to be true afterwards</text>
</svg>
<figcaption>Figure 1. A precondition is the caller's responsibility; a postcondition is the method's promise. If the precondition is false, the method makes no promise at all.</figcaption>
</figure>

Here is a documented method. (You will learn to write methods in Unit 3; for now, read the comment as you would read an API entry.)

```java
public class Maths {
    /**
     * Returns the integer quotient of two numbers.
     * Precondition: denominator != 0
     * Postcondition: the value returned is numerator / denominator,
     *                using integer division
     */
    public static int quotient(int numerator, int denominator) {
        return numerator / denominator;
    }

    public static void main(String[] args) {
        System.out.println(quotient(17, 5));
    }
}
```

```text
3
```

The precondition says that the method expects `denominator` to be non-zero. The postcondition says what you get back. Calling `quotient(17, 5)` honours the precondition and, as promised, returns 17 / 5 = 3.

What if the caller ignores the precondition? `quotient(7, 0)` compiles, because the compiler does not know the value is zero. When it runs, integer division by zero throws an `ArithmeticException`. The method did not check the denominator: that was **not its job**. The responsibility lay with the caller, who broke the precondition. After a broken precondition, the postcondition is no longer guaranteed (here nothing is returned at all, because the program stops).

Compare this with documentation you meet in libraries. The description of `indexOf` says it "returns -1 if not found": that is a postcondition-style statement written in words.

## Writing good comments

- **Say why, not just what.** `// convert minutes to seconds` is useful; `// multiply by 60` just repeats the code.
- **Keep comments true.** If you change the code, change the comment. A comment that disagrees with the code misleads everyone.
- **Describe the contract before the method.** State what the method needs (preconditions) and what it provides (postconditions). A user should not have to read the code to call it correctly.
- **Do not comment the obvious.** `x++; // add one to x` adds nothing.
- **Use comments to leave out code temporarily,** but do not leave large blocks of old code in a finished program.

## Reading a contract like a programmer

Preconditions and postconditions turn a vague promise ("this method converts times") into something you can check against. It helps to practise reading a contract in three passes.

**First pass: what goes in?** Read the signature and the precondition together. Count the parameters, note their types and note any limits. If the precondition says `n >= 0`, every call must supply a value that is at least zero, whether it is a literal such as `7`, a variable, or an expression such as `count - 1`. In the last case the caller needs to know that `count - 1` cannot go negative.

**Second pass: what comes out?** Read the postcondition. It names the outcome: a returned value, or for a method that changes an object, the new state of that object. A postcondition that says "returns the number of complete minutes in `seconds`" tells you the type (a whole number) and its meaning without telling you the formula.

**Third pass: what is not promised?** Anything the documentation does not say is not guaranteed. If the postcondition says the result is between 0 and 59, you may not assume it is never 0. If there is no statement about the object being unchanged, do not assume it.

There is a design choice hidden here. A method could instead **check** its own input and report a problem, but then the extra checking is part of its documented behavior, and it would be described in the postcondition (for example "returns -1 if the input is invalid"). That is a different contract. The precondition style puts the burden on the caller and keeps the method simple. Both are legitimate, and the exam tells you which one a given method uses by its documentation.

A final point links this topic to the rest of the unit. In Topic 1.7 you used a library method only through its documentation. A precondition is the part of that documentation that tells you what **you** have to do before calling, and a postcondition is the part that tells you what you can **rely on** afterwards. Writing your own documentation in the same style makes your classes usable in exactly the same way.

## Worked example 1: Write a precondition and a postcondition

**Task.** Here is a method with its Javadoc description blank. Write a precondition and a postcondition.

```java
public class Undocumented {
    public static int secondsIn(int hours, int minutes) {
        return hours * 3600 + minutes * 60;
    }
}
```

**Step 1, decide what the method assumes.** It converts a time to a number of seconds. A negative number of hours or minutes makes no sense. If `minutes` could be 75 the result would still be arithmetically correct but would look like a mistake; so we choose to require that `minutes` is between 0 and 59.

**Step 2, state the precondition.** `hours >= 0 and 0 <= minutes <= 59`.

**Step 3, state the postcondition.** It must describe the outcome in terms of what is returned: *the value returned is `hours * 3600 + minutes * 60`, the total number of seconds in the given time*.

**Step 4, assemble the Javadoc comment.**

```java
public class Clock {
    /**
     * Converts hours and minutes to seconds.
     * Precondition: hours >= 0 and 0 <= minutes <= 59
     * Postcondition: returns hours * 3600 + minutes * 60
     */
    public static int secondsIn(int hours, int minutes) {
        return hours * 3600 + minutes * 60;
    }

    public static void main(String[] args) {
        System.out.println(secondsIn(2, 30));
    }
}
```

```text
9000
```

**Step 5, check.** For 2 hours 30 minutes: 2 * 3600 + 30 * 60 = 7200 + 1800 = 9000. The call respects the precondition (2 >= 0 and 30 is between 0 and 59) and the postcondition holds. Notice that the precondition is about the **inputs**, the postcondition about the **result**.

## Worked example 2: Use documentation alone to judge calls

**Task.** A class provides these two documented methods. You cannot see their code.

```text
int wholeMinutes(int seconds)
   Precondition: seconds >= 0
   Postcondition: returns the number of complete minutes in seconds

int leftoverSeconds(int seconds)
   Precondition: seconds >= 0
   Postcondition: the value returned is between 0 and 59 inclusive,
                  and is the number of seconds left after removing complete minutes
```

For each call, say whether it respects the preconditions, and if so what it returns: (a) `wholeMinutes(200)` (b) `leftoverSeconds(200)` (c) `wholeMinutes(-5)`.

**(a)** 200 >= 0, so the precondition holds. There are 3 complete minutes in 200 seconds (180 seconds), so it returns **3**.

**(b)** The precondition holds. After removing 180 seconds, 20 are left, so it returns **20**, which satisfies the postcondition (between 0 and 59).

**(c)** The argument -5 breaks the precondition (`seconds >= 0`). The documentation makes **no promise** about what happens. A programmer relying on the documentation must not make this call. The method is not expected to check for it.

**Reflection.** Reading a precondition is like reading the terms of use. Before calling, you check that your arguments meet it; after the call, you may rely on the postcondition. If your own code might pass a bad value, the **caller** must test it first.

## Common misconceptions

- **"Comments affect how the program runs."** They are ignored by the compiler.
- **"`/* */` comments can be nested."** The first `*/` ends the comment, so nesting causes a syntax error.
- **"The method must check its precondition."** There is no such expectation. The caller is responsible.
- **"A postcondition describes what the method needs."** That is the precondition. A postcondition describes the outcome.
- **"If a precondition is violated, the method still keeps its postcondition."** After a violated precondition, nothing is guaranteed.
- **"Preconditions and postconditions are code."** They are written in comments (documentation), not enforced by the compiler.
- **"A comment must be true, so I can trust it more than the code."** If they disagree, the code is what runs. Fix the comment.

## Where this leads

Try the [Topic 1.8 practice questions](/advanced-course-resources/computer-science-a/1-8-documentation-comments-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-a/1-8-documentation-comments-revision-notes/) and tick off the [checklist](/advanced-course-resources/computer-science-a/1-8-documentation-comments-checklist/). The next topic, [1.9 Method Signatures](/advanced-course-resources/computer-science-a/1-9-method-signatures-study-guide/), looks closely at the first line of a method: its name, its parameters and how a call is matched to it.
