---
resourceId: "mb-ap-csa-1.9-study-guide"
title: "Method Signatures: Study Guide (Computer Science A 1.9)"
description: "Learn what a method is, how a method signature is made of a name and parameter types, how arguments are passed by value, and how overloading and return values work."
course: "computer-science-a"
unit: 1
topics: ["1.9"]
resourceType: "study-guide"
prerequisites: ["Topic 1.7: you read method entries in documentation", "Topic 1.8: preconditions and postconditions describe what a method expects and promises"]
prerequisiteResources: ["mb-ap-csa-1.8-study-guide"]
learningObjectives: ["Explain that a method is a named block of code that runs only when called, and describe procedural abstraction", "State the signature of a method and identify its parameters, return type and whether it is void", "Match a call to the right method by number, order and types of arguments, including overloaded methods", "Trace the flow of control through method calls, and explain call by value"]
skills: ["3", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.9-revision-notes", "mb-ap-csa-1.9-practice", "mb-ap-csa-1.9-checklist"]
next: "mb-ap-csa-1.9-practice"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["A method is a named block of code that runs only when it is called; procedural abstraction lets you use a method knowing what it does but not how.", "A parameter is a variable declared in the method header. A method signature is the method name plus the ordered list of parameter types.", "A void method has no return value and is not used in an expression; a non-void method returns a value of its return type, which must be stored or used.", "Arguments must match the parameters in number, order and compatible types. They are passed by value: each parameter starts as a copy of the argument.", "Overloaded methods share a name but have different signatures. A call interrupts the sequence; control returns to just after the call when the method ends."]
faqs: [{"question": "What exactly is in a method signature?", "answer": "The method name and the ordered list of parameter types. For average(int a, int b) the signature is average(int, int). The return type and the parameter names are not part of the signature, which is why two methods cannot differ only in return type."}, {"question": "What is the difference between a parameter and an argument?", "answer": "A parameter is a variable declared in the method's header, such as int n in square(int n). An argument is the value you pass when you call the method, such as 6 in square(6). Each parameter is initialized with a copy of the matching argument."}, {"question": "What does call by value mean?", "answer": "The parameters are initialized with copies of the arguments. If the method changes a primitive parameter, the variable in the calling code is not affected."}, {"question": "Can I call a non-void method as a statement and ignore the result?", "answer": "Yes. Calling square(4); on its own compiles; the returned value is just discarded. To use the result you must store it in a variable or use the call as part of an expression."}]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

## A method is a named block of code

Think about `System.out.println`. You call it by name, give it something to display, and it does its job. You have used it from your first program without needing to know how the characters reach the screen. That is the idea of a **method**: a **named block of code that only runs when it is called**.

A **block** of code is any section of code enclosed in braces `{ }`. A method is a block with a name. Methods exist to avoid repeating code and to make programs readable: you write the work once, give it a name, and call it wherever it is needed.

**Procedural abstraction** is what lets a programmer use a method **by knowing what the method does, even if they do not know how the method was written**. You have been doing this since Topic 1.7; here we look at how methods are described.

### The anatomy of a method header

The first line of a method is its **header**. Here is the header of a method that averages two whole numbers:

<figure>
<svg viewBox="0 0 532 200" role="img" aria-labelledby="fig-header-t fig-header-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="fig-header-t">The parts of a method header</title>
<desc id="fig-header-d">A method header split into labelled parts: 'public' labelled access; 'static' labelled class method; 'double' labelled return type; 'average' labelled name; '(int a,' labelled parameter; 'int b)' labelled parameter; a bracket under 'average' to 'int b)' labelled name + parameter types = signature.</desc>
<rect x="0" y="0" width="532" height="200" fill="#ffffff"/>
<rect x="20" y="20" width="74" height="40" rx="4" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="57.0" y="46" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">public</text>
<line x1="57.0" y1="60" x2="57.0" y2="78" stroke="#1d2b44" stroke-width="1.5"/>
<text x="57.0" y="96" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44" >access</text>
<rect x="100" y="20" width="74" height="40" rx="4" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="137.0" y="46" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">static</text>
<line x1="137.0" y1="60" x2="137.0" y2="78" stroke="#1d2b44" stroke-width="1.5"/>
<text x="137.0" y="96" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44" >class method</text>
<rect x="180" y="20" width="74" height="40" rx="4" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="217.0" y="46" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">double</text>
<line x1="217.0" y1="60" x2="217.0" y2="78" stroke="#1d2b44" stroke-width="1.5"/>
<text x="217.0" y="96" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44" >return type</text>
<rect x="260" y="20" width="83" height="40" rx="4" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="301.5" y="46" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">average</text>
<line x1="301.5" y1="60" x2="301.5" y2="78" stroke="#1d2b44" stroke-width="1.5"/>
<text x="301.5" y="96" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44" >name</text>
<rect x="349" y="20" width="83" height="40" rx="4" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="390.5" y="46" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">(int a,</text>
<line x1="390.5" y1="60" x2="390.5" y2="78" stroke="#1d2b44" stroke-width="1.5"/>
<text x="390.5" y="96" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44" >parameter</text>
<rect x="438" y="20" width="74" height="40" rx="4" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="475.0" y="46" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">int b)</text>
<line x1="475.0" y1="60" x2="475.0" y2="78" stroke="#1d2b44" stroke-width="1.5"/>
<text x="475.0" y="96" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44" >parameter</text>
<path d="M260 120 L260 132 L512 132 L512 120" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="386.0" y="154" text-anchor="middle" font-size="13" font-weight="bold" fill="#1d2b44" >name + parameter types = signature</text>
</svg>
<figcaption>Figure 1. A method header from left to right. The signature is only the name plus the ordered list of parameter types, here average(int, int). The return type and the parameter names are not part of it.</figcaption>
</figure>

- The **return type** (`double`) is the type of the value the method gives back. If the method gives back nothing, the return type is `void`.
- The **name** (`average`) is what you write to call it.
- The **parameters** (`int a, int b`) are variables declared in the header of the method. They can be used inside the body of the method, and they allow values (**arguments**) to be passed to the method when it is called.

A **method signature** for a method with parameters consists of **the method name and the ordered list of parameter types**. For `average` it is `average(int, int)`. A method without parameters has a signature made of its name and an empty parameter list, such as `second()`.

The words `public` and `static` also appear in the header. For now, treat `public static` as part of the pattern; Topic 1.10 explains `static`, and Unit 3 explains `public` and when methods are not static.

## Calling a method

A complete program with several methods shows the rules:

```java
public class Signatures {
    public static void greet(String name) {
        System.out.println("Hello, " + name);
    }

    public static int square(int n) {
        return n * n;
    }

    public static double average(int a, int b) {
        return (a + b) / 2.0;
    }

    public static void main(String[] args) {
        greet("Ada");
        int s = square(6);
        double avg = average(3, 4);
        System.out.println(s + " " + avg);
        System.out.println(square(2 + 3));
    }
}
```

```text
Hello, Ada
36 3.5
25
```

### Void and non-void methods

- A **void method** does not have a return value, so it is **not called as part of an expression**. `greet("Ada");` stands alone as a statement. Writing `int r = greet("Ada");` is a compile-time error.
- A **non-void method** returns a value of the type named in its header. To **use** the returned value, you must **store it in a variable** (`int s = square(6);`) or **use it as part of an expression** (`square(2 + 3)` inside `println`, or `average(1, 2) + average(3, 4)`). You may also call it as a statement and discard the value, as in `square(4);`, but then the call has no visible effect.

### Arguments must match parameters

An **argument** is a value passed into a method when it is called. The arguments must be **compatible in number and order** with the types in the parameter list. Passing `square("3")` fails, because a `String` is not an `int`. Passing `square(2, 3)` fails, because there are two arguments and only one parameter. Passing `show(3, "a")` to a method declared as `show(String label, int value)` fails because the order is wrong. The compiler reports all of these.

An `int` may be passed where a `double` is expected (it is converted automatically), but not the other way round.

### Call by value

When calling methods, arguments are passed using **call by value**. Call by value **initializes the parameters with copies of the arguments**. So a method that changes a primitive parameter changes only its own copy:

```java
public class ByValue {
    public static void change(int x) {
        x = x + 10;
        System.out.println("inside: " + x);
    }

    public static void main(String[] args) {
        int n = 5;
        change(n);
        System.out.println("outside: " + n);
    }
}
```

```text
inside: 15
outside: 5
```

The parameter `x` started as a copy of `n`'s value, 5. Adding 10 to the copy left `n` untouched.

### The flow of control

A method call **interrupts the sequential execution** of statements. The program first executes the statements in the method before continuing. Once the **last statement** in the method has been executed, or a **`return` statement** is executed, the flow of control returns to the point **immediately following where the method was called**.

```java
public class Flow {
    public static void first() {
        System.out.println("first start");
        second();
        System.out.println("first end");
    }

    public static void second() {
        System.out.println("second");
    }

    public static void main(String[] args) {
        System.out.println("main start");
        first();
        System.out.println("main end");
    }
}
```

```text
main start
first start
second
first end
main end
```

<figure>
<svg viewBox="0 0 600 518" role="img" aria-labelledby="fig-flow-t fig-flow-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="fig-flow-t">Control passing between methods</title>
<desc id="fig-flow-d">A top-to-bottom chain of steps with arrows between them: main: prints main start; then main calls first(); then first: prints first start; then first calls second(); then second: prints second; then first resumes: prints first end; then main resumes: prints main end.</desc>
<rect x="0" y="0" width="600" height="518" fill="#ffffff"/>
<rect x="20" y="14" width="360" height="40" rx="8" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="200.0" y="39.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" >main: prints main start</text>
<line x1="200.0" y1="54" x2="200.0" y2="82" stroke="#1d2b44" stroke-width="1.8"/>
<polygon points="200.0,82 196.5,73.7 203.5,73.7" fill="#1d2b44"/>
<rect x="20" y="84" width="360" height="40" rx="8" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="200.0" y="109.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" >main calls first()</text>
<line x1="200.0" y1="124" x2="200.0" y2="152" stroke="#1d2b44" stroke-width="1.8"/>
<polygon points="200.0,152 196.5,143.7 203.5,143.7" fill="#1d2b44"/>
<rect x="20" y="154" width="360" height="40" rx="8" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="200.0" y="179.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" >first: prints first start</text>
<line x1="200.0" y1="194" x2="200.0" y2="222" stroke="#1d2b44" stroke-width="1.8"/>
<polygon points="200.0,222 196.5,213.7 203.5,213.7" fill="#1d2b44"/>
<rect x="20" y="224" width="360" height="40" rx="8" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="200.0" y="249.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" >first calls second()</text>
<line x1="200.0" y1="264" x2="200.0" y2="292" stroke="#1d2b44" stroke-width="1.8"/>
<polygon points="200.0,292 196.5,283.7 203.5,283.7" fill="#1d2b44"/>
<rect x="20" y="294" width="360" height="40" rx="8" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="200.0" y="319.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" >second: prints second</text>
<line x1="200.0" y1="334" x2="200.0" y2="362" stroke="#1d2b44" stroke-width="1.8"/>
<polygon points="200.0,362 196.5,353.7 203.5,353.7" fill="#1d2b44"/>
<rect x="20" y="364" width="360" height="40" rx="8" fill="#b8c4d8" stroke="#1d2b44" stroke-width="1.5"/>
<text x="200.0" y="389.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" >first resumes: prints first end</text>
<line x1="200.0" y1="404" x2="200.0" y2="432" stroke="#1d2b44" stroke-width="1.8"/>
<polygon points="200.0,432 196.5,423.7 203.5,423.7" fill="#1d2b44"/>
<rect x="20" y="434" width="360" height="40" rx="8" fill="#b8c4d8" stroke="#1d2b44" stroke-width="1.5"/>
<text x="200.0" y="459.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" >main resumes: prints main end</text>
</svg>
<figcaption>Figure 2. The order in which the lines run. Each call pauses the caller, runs the method to its end, and then resumes just after the call.</figcaption>
</figure>

### Overloading

Methods are said to be **overloaded** when there are **multiple methods with the same name but different signatures**. The compiler chooses the version whose parameter types match the arguments you supply.

```java
public class Overload {
    public static int add(int a, int b) {
        return a + b;
    }

    public static double add(double a, double b) {
        return a + b;
    }

    public static int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        System.out.println(add(2, 3));
        System.out.println(add(2.5, 1));
        System.out.println(add(2, 3.5));
        System.out.println(add(1, 2, 3));
    }
}
```

```text
5
3.5
5.5
6
```

`add(2, 3)` matches `add(int, int)` exactly and gives an `int`. `add(2.5, 1)` has a `double` argument, so it can only use `add(double, double)`; the `1` is widened to 1.0. The three-argument call matches the third method. Because the **signature** is only the name and the parameter types, two methods may **not** differ only in their return type: the compiler cannot tell which one a call means, and reports that the method is already defined.

## Checking a call the way the compiler does

When you meet a method call in code, you can check it in the same order the compiler does. This turns a vague feeling of "that looks right" into a short, reliable procedure.

1. **Find the candidates.** List every method with that name. If there is only one, there is nothing to choose; if there are several, the class has overloaded the name.
2. **Count the arguments.** Discard any candidate whose number of parameters differs from the number of arguments. In the call `add(1, 2, 3)` only the three-parameter method survives.
3. **Work out the type of each argument expression.** The argument `2 + 3` is an `int`; `2 + 3.5` is a `double`; `"3"` is a `String`. Remember that an argument can itself contain method calls, which are evaluated first, from left to right, before the outer call happens.
4. **Compare types position by position.** An argument fits a parameter of the same type, and an `int` argument also fits a `double` parameter. Nothing else fits. If more than one candidate still fits, the one that matches most exactly is chosen.
5. **Check how the result is used.** If the method is void, the call must be a statement on its own. If it returns a type, the surrounding code must accept that type.

Failing at step 2 or 4 gives the "cannot be applied to given types" error; failing at step 5 gives the "incompatible types" error. If nothing in the class has that name, the compiler says it cannot find the symbol.

The same five steps also tell you **what a call means at run time**. The parameters are created and initialized with copies of the arguments; the body runs; a `return` statement hands a value back, which replaces the whole call in the surrounding expression; and execution resumes straight after. When you trace by hand, it helps to draw a small box for each method call, showing its parameters and any local variables, and to cross the box out when the method returns. The boxes make it obvious why a parameter named `n` inside a method is a different variable from an `n` in the caller.

## Worked example 1: Trace a program with calls

**Task.** State the output.

```java
public class Trace19 {
    public static int triple(int n) {
        n = n * 3;
        return n;
    }

    public static void show(String label, int value) {
        System.out.println(label + ": " + value);
    }

    public static void main(String[] args) {
        int x = 4;
        int y = triple(x);
        show("x", x);
        show("y", y);
        show("sum", triple(x) + triple(1));
    }
}
```

**Step 1, start in `main`.** Execution begins at `main`. `x` is 4.

**Step 2, `int y = triple(x);`.** The parameter `n` is initialized with a **copy** of `x` (4). Inside the method, `n` becomes 12 and `return n;` sends 12 back to the point where the call occurred. The value 12 is stored in `y`. `x` is still 4, because only the copy changed.

**Step 3, the first two `show` calls.** `show("x", x)` is a void method, called as a statement: `label` is `"x"`, `value` is 4. It prints `x: 4`. Then `show("y", y)` prints `y: 12`.

**Step 4, the last call.** The second argument is an **expression**: `triple(x) + triple(1)`. It is evaluated first, left to right: `triple(x)` is 12 and `triple(1)` is 3. The sum 15 is passed as `value`, so `sum: 15` is printed.

| Statement | x | y | Printed |
|---|---|---|---|
| `int x = 4;` | 4 | - | |
| `int y = triple(x);` | 4 | 12 | |
| `show("x", x);` | 4 | 12 | `x: 4` |
| `show("y", y);` | 4 | 12 | `y: 12` |
| `show("sum", triple(x) + triple(1));` | 4 | 12 | `sum: 15` |

**Output.**

```text
x: 4
y: 12
sum: 15
```

## Worked example 2: Which calls match which signature?

**Task.** A class declares four methods. You may use only their signatures.

```text
static int twice(int n)               returns 2 * n
static double twice(double n)         returns 2 * n
static int sum(int a, int b, int c)   returns a + b + c
static void report(String label, int value)   prints label=value
```

For each call, say whether it compiles and give the value, or the reason it fails:

(a) `twice(8)` (b) `twice(2.5)` (c) `twice(3) + twice(0.5)` (d) `sum(1, 2)` (e) `int v = report("a", 3);` (f) `report(3, "a");`

**(a)** One `int` argument matches `twice(int)` exactly. It compiles and returns the `int` **16**.

**(b)** `2.5` is a `double`, so only `twice(double)` fits. It returns the `double` **5.0**.

**(c)** `twice(3)` uses the `int` version and returns 6. `twice(0.5)` uses the `double` version and returns 1.0. In the sum, 6 + 1.0 has a `double` operand, so the value is the `double` **7.0**.

**(d)** Does not compile: `sum` needs three arguments and only two are supplied.

**(e)** Does not compile: `report` is a void method, which has no return value to store in `v`.

**(f)** Does not compile: the parameters are `(String, int)`, so the arguments must be in that order, but here they are `(int, String)`.

The program that compiles the valid calls prints `16`, `5.0` and `7.0` for (a) to (c).

```java
public class Check {
    public static int twice(int n) {
        return 2 * n;
    }

    public static double twice(double n) {
        return 2 * n;
    }

    public static void main(String[] args) {
        System.out.println(twice(8));
        System.out.println(twice(2.5));
        System.out.println(twice(3) + twice(0.5));
    }
}
```

```text
16
5.0
7.0
```

## Common misconceptions

- **"The return type is part of the signature."** It is not. The signature is the name and the ordered list of parameter types.
- **"Parameter names are part of the signature."** They are not.
- **"A method changes the variable I pass in."** For primitive arguments the parameter is a copy (call by value).
- **"A method runs when the program starts."** A method runs only when it is called (apart from `main`, where execution begins).
- **"I can use a void method in an expression."** It has no value.
- **"If I ignore a non-void result the compiler complains."** It does not; the value is discarded.
- **"Overloading means any two methods with similar names."** The names must be the same and the signatures different.
- **"After a call the program continues where the method ends."** It continues at the point immediately after the call.

## Where this leads

Try the [Topic 1.9 practice questions](/advanced-course-resources/computer-science-a/1-9-method-signatures-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-a/1-9-method-signatures-revision-notes/) and tick off the [checklist](/advanced-course-resources/computer-science-a/1-9-method-signatures-checklist/). The next topic, [1.10 Calling Class Methods](/advanced-course-resources/computer-science-a/1-10-calling-class-methods-study-guide/), explains the `static` keyword and how to call a method that belongs to a class rather than to an object.
