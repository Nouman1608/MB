---
resourceId: "mb-ap-csa-1.10-study-guide"
title: "Calling Class Methods: Study Guide (Computer Science A 1.10)"
description: "Learn what a class method is, why it is declared static, how to call it with the class name and the dot operator, and how to find and fix compile-time errors in a call."
course: "computer-science-a"
unit: 1
topics: ["1.10"]
resourceType: "study-guide"
prerequisites: ["Topic 1.9: method headers, signatures, parameters, arguments and return values", "Topic 1.7: classes belong to libraries and packages"]
prerequisiteResources: ["mb-ap-csa-1.9-study-guide"]
learningObjectives: ["Explain that a class method belongs to the class, not to an instance, and is marked with the keyword static", "Write calls to class methods using the class name and the dot operator, and omit the class name correctly inside the defining class", "Determine the result of calls, including nested calls and calls that pass results into other calls", "Explain why a call does not compile and correct it"]
skills: ["2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.10-revision-notes", "mb-ap-csa-1.10-practice", "mb-ap-csa-1.10-checklist"]
next: "mb-ap-csa-1.10-practice"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["Class methods are associated with the class, not with instances of it. Their headers include the keyword static before the method name.", "A class method is normally called with the class name, the dot operator, the method name and the arguments, such as Converter.toFahrenheit(100).", "When the call is inside the class that defines the method, the class name is optional.", "A call to a non-void class method is an expression with the value and type of its return type; a nested call is worked out from the inside out.", "Compile-time call errors come from the number, order or types of the arguments, from storing a void result, or from naming a method the compiler cannot find."]
faqs: [{"question": "What does static mean?", "answer": "A static method is a class method: it is associated with the class itself, not with any one object created from the class. Because it does not belong to an object, you call it using the class name, as in Math.sqrt(16), with no object needed."}, {"question": "Why is the class name optional inside the defining class?", "answer": "When the call occurs in the class that defines the method, the compiler already knows which class to look in, so square(4) and Maths.square(4) mean the same thing. From a different class you must include the class name."}, {"question": "Do I need to create an object to use Math.sqrt?", "answer": "No. The Math class contains only class methods, so you call them directly through the class name. You never write new Math()."}, {"question": "What is the dot operator?", "answer": "The dot between a class name (or, later, an object name) and a method name. It means look inside the thing on the left for the method on the right."}]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Methods that belong to the class

So far you have called methods by name, from inside the same class that defines them. In Topic 1.9 you also called `Math.sqrt`-style methods in documentation. What is the difference between a call like `square(6)` and a call like `Math.sqrt(16)`?

The answer is where the method **belongs**.

- A **class method** is associated with the **class**, not with instances of the class. Its header contains the keyword **`static`** before the method name.
- An **instance method** belongs to individual **objects** made from the class. You will meet those in Topics 1.12 to 1.14.

A class method does not need an object to exist. That is why the `Math` class, which contains only class methods, never needs `new Math()`. You can simply ask the class: `Math.sqrt(16)`.

### Calling a class method

Class methods are typically called using the **class name** along with the **dot operator**. When the method call occurs in the defining class, the use of the class name is optional.

<figure>
<svg viewBox="0 0 430 200" role="img" aria-labelledby="fig-call-t fig-call-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="fig-call-t">The parts of a class method call</title>
<desc id="fig-call-d">A method header split into labelled parts: 'Converter' labelled class name; '.' labelled dot operator; 'toFahrenheit' labelled method name; '(100.0)' labelled argument; a bracket under 'Converter' to '(100.0)' labelled a class method call.</desc>
<rect x="0" y="0" width="430" height="200" fill="#ffffff"/>
<rect x="20" y="20" width="101" height="40" rx="4" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="70.5" y="46" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">Converter</text>
<line x1="70.5" y1="60" x2="70.5" y2="78" stroke="#1d2b44" stroke-width="1.5"/>
<text x="70.5" y="96" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44" >class name</text>
<rect x="127" y="20" width="60" height="40" rx="4" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="157.0" y="46" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">.</text>
<line x1="157.0" y1="60" x2="157.0" y2="78" stroke="#1d2b44" stroke-width="1.5"/>
<text x="157.0" y="96" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44" >dot operator</text>
<rect x="193" y="20" width="128" height="40" rx="4" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="257.0" y="46" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">toFahrenheit</text>
<line x1="257.0" y1="60" x2="257.0" y2="78" stroke="#1d2b44" stroke-width="1.5"/>
<text x="257.0" y="96" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44" >method name</text>
<rect x="327" y="20" width="83" height="40" rx="4" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="368.5" y="46" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">(100.0)</text>
<line x1="368.5" y1="60" x2="368.5" y2="78" stroke="#1d2b44" stroke-width="1.5"/>
<text x="368.5" y="96" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44" >argument</text>
<path d="M20 120 L20 132 L410 132 L410 120" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="215.0" y="154" text-anchor="middle" font-size="13" font-weight="bold" fill="#1d2b44" >a class method call</text>
</svg>
<figcaption>Figure 1. A call to a class method from another class. The class name and dot say where to look; the method name says what to run; the argument is the value passed in.</figcaption>
</figure>

Here is a program with two classes. `Converter` defines three class methods. `Main` calls them. (Both classes are in one file here to keep the example short.)

```java
class Converter {
    public static double toFahrenheit(double celsius) {
        return celsius * 9 / 5 + 32;
    }

    public static int wholeMinutes(int seconds) {
        return seconds / 60;
    }

    public static void banner(String text) {
        System.out.println("== " + text + " ==");
    }

    public static void run() {
        banner("local call");
        Converter.banner("qualified");
    }
}

public class Main {
    public static void main(String[] args) {
        double f = Converter.toFahrenheit(100);
        System.out.println(f);
        System.out.println(Converter.wholeMinutes(200));
        Converter.banner("Hello");
        Converter.run();
        System.out.println(Converter.toFahrenheit(Converter.wholeMinutes(1200)));
    }
}
```

```text
212.0
3
== Hello ==
== local call ==
== qualified ==
68.0
```

Look at the two ways of calling `banner` inside `run`. Because `run` is in the class `Converter`, which also defines `banner`, both `banner("local call")` and `Converter.banner("qualified")` work and do the same thing. From `Main`, a different class, the class name is required: `Converter.banner("Hello")`.

### The value of a call

Everything you learned in Topic 1.9 still applies. A **void** class method (such as `banner`) is called as a statement. A **non-void** class method (such as `toFahrenheit`) gives a value of its return type, so the call is an **expression** of that type. You can store it, print it, or pass it on.

The last line of `main` shows one call **inside** another: `Converter.toFahrenheit(Converter.wholeMinutes(1200))`. As always, work from the inside out:

1. The inner call `Converter.wholeMinutes(1200)` returns 1200 / 60 = 20 (an `int`).
2. The `int` 20 is passed to the `double` parameter, becoming 20.0.
3. The outer call returns 20.0 * 9 / 5 + 32. Multiplication and division go left to right: 20.0 * 9 is 180.0, divided by 5 is 36.0, plus 32 is 68.0.

### Class methods in the library

You already meet class methods from the library. `Math.abs`, `Math.pow`, `Math.sqrt` and `Math.random` are all class methods (the next topic covers them). `Integer.parseInt` is another. In their documentation, the word `static` in the entry is your signal that you call them through the class name.

```java
public class Nested {
    public static void main(String[] args) {
        double d = Math.sqrt(Math.abs(-16));
        System.out.println(d);
    }
}
```

```text
4.0
```

`Math.abs(-16)` is evaluated first and returns 16, and `Math.sqrt(16)` then returns 4.0.

## Why have class methods at all?

Some work does not depend on any particular object. Converting a temperature, finding an absolute value or splitting seconds into minutes needs only the numbers you give it. There is no object whose data the method must read or change. Putting such a method in a class as a **class method** is the natural design: the class acts as a labelled toolbox, and the method is a tool in it. The `Math` class is the standard example, and that is why its methods are all `static`.

Contrast this with the `String` methods you saw in Topic 1.7. `length()` and `substring(...)` need a particular string to work on, because "how long?" has no answer until you say **which** string. They are **instance methods**, called on an object (`word.length()`), not through the class name. You could not write `String.length()` and expect an answer. Deciding whether a method belongs to the class or to an object is a basic design question, and you will meet it again in Unit 3 when you write your own classes.

The method you have been writing every time, `public static void main(String[] args)`, is itself a **class method**. That is no accident. When a program starts, no objects exist yet, so the run-time system must be able to start execution by calling a method through the class name alone. It also explains why `main` can call the other class methods in its own class directly, as in `report(x)`: the class name is optional, and no object is needed.

A few details help when you read unfamiliar code.

- **Arguments are evaluated before the call.** In `Converter.toFahrenheit(Converter.wholeMinutes(1200))` the program first finishes the inner call, then enters the outer method with the result as its parameter value.
- **Several arguments are evaluated left to right.** If two arguments both contain calls that print something, the printing happens in that order, as in the tracing question in the practice set.
- **A call is just an expression** when the method is non-void. Anywhere you could write a number of that type, you can write the call: in an assignment, in an arithmetic expression, as an argument, or in a `println`.
- **The class name is spelt exactly** as the class is declared, including capital letters. `converter.toFahrenheit(100)` fails, because Java is case-sensitive, even if the program defines `Converter`.

## Why a call does not compile

When you are asked to explain why a code segment will not compile, the cause is nearly always one of four, so check them in order. Suppose `Converter` is defined as above and a different class contains these statements:

```java nocompile
public class Bad {
    public static void main(String[] args) {
        double f = toFahrenheit(100);
        int w = Converter.wholeMinutes(2.5);
        String s = Converter.banner("x");
        Converter.wholeMinutes();
    }
}
```

| Statement | Fault | What the compiler says (in effect) |
|---|---|---|
| `double f = toFahrenheit(100);` | `toFahrenheit` is defined in `Converter`, not in `Bad`, and the class name is missing | cannot find symbol: method `toFahrenheit(int)` |
| `int w = Converter.wholeMinutes(2.5);` | a `double` argument for an `int` parameter | incompatible types: possible lossy conversion from `double` to `int` |
| `String s = Converter.banner("x");` | `banner` is void, so there is no value to store | incompatible types: `void` cannot be converted to `String` |
| `Converter.wholeMinutes();` | the method needs one argument | cannot be applied to the given types: required `int`, found no arguments |

The fixes: `Converter.toFahrenheit(100)`, `Converter.wholeMinutes(2)` (or a different method that accepts a `double`), `Converter.banner("x");` as a statement on its own, and `Converter.wholeMinutes(200)` with an argument.

## Worked example 1: Trace calls that call other methods

**Task.** State the output.

```java
public class Chain {
    public static int twice(int n) {
        return n * 2;
    }

    public static int plus(int a, int b) {
        return a + b;
    }

    public static void report(int value) {
        System.out.println("Result: " + value);
    }

    public static void main(String[] args) {
        int x = twice(5);
        report(x);
        report(plus(twice(3), twice(4)));
        report(plus(x, 1) * 2);
    }
}
```

**Step 1.** `twice(5)` returns 10, so `x` is 10. `report(x)` prints `Result: 10`.

**Step 2.** In `report(plus(twice(3), twice(4)))`, the arguments of `plus` are evaluated first, left to right: `twice(3)` is 6 and `twice(4)` is 8. `plus(6, 8)` is 14. That value is passed to `report`, which prints `Result: 14`.

**Step 3.** In `report(plus(x, 1) * 2)`, the argument is the expression `plus(x, 1) * 2`. `plus(10, 1)` is 11, and 11 * 2 is 22. It prints `Result: 22`.

```text
Result: 10
Result: 14
Result: 22
```

**Check.** All three methods are class methods in the same class, so the class name is optional in the calls, and the program compiles and prints the three lines above.

## Worked example 2: Find and correct the errors

**Task.** A class `Tools` has these class methods:

```text
static int twice(int n)
static int plus(int a, int b)
static void show(String label, int value)
```

A different class contains the lines below. For each line, say whether it compiles, give the reason if it does not, and write a corrected line.

(a) `int r = Tools.twice(2.5);`
(b) `int r = plus(2, 3);`
(c) `Tools.show(7, "total");`
(d) `String s = Tools.twice(4);`
(e) `int r = Tools.plus(Tools.twice(2), 3);`

**(a)** Does not compile: `2.5` is a `double` and the parameter is an `int`. Correction: `int r = Tools.twice(2);` (or change the intended method).

**(b)** Does not compile: this line is in a different class, so `plus` cannot be found without the class name. Correction: `int r = Tools.plus(2, 3);`.

**(c)** Does not compile: the arguments are in the wrong order. The parameters are `(String, int)`. Correction: `Tools.show("total", 7);`.

**(d)** Does not compile: `twice` returns an `int`, which cannot be stored in a `String`. Correction: `int s = Tools.twice(4);`.

**(e)** Compiles. `Tools.twice(2)` is 4, and `Tools.plus(4, 3)` is 7, so `r` holds 7.

**Method.** Work in this order: is the method findable (class name present where needed)? Is the number of arguments right? Are the types and the order right? Is the return value used correctly? A failure at any step explains the error.

## Common misconceptions

- **"`static` means the value cannot change."** In a method header it means the method belongs to the class, not to an object.
- **"I need an object to call a class method."** You call it with the class name; no object is needed.
- **"The class name is always required."** Inside the defining class it is optional.
- **"The class name is never required."** From a different class it is required.
- **"The dot is just decoration."** It tells the compiler where to look for the method.
- **"A nested call is evaluated left to right as written."** The innermost call is evaluated first, and its result becomes the argument of the next call out.
- **"`Math.sqrt(16)` gives 4."** It returns a `double`, so the value is 4.0.
- **"Anything that does not print an error must be right."** A call can compile and still use the wrong method or the wrong argument order.

## Where this leads

Practise with the [Topic 1.10 practice questions](/advanced-course-resources/computer-science-a/1-10-calling-class-methods-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-a/1-10-calling-class-methods-revision-notes/) and tick off the [checklist](/advanced-course-resources/computer-science-a/1-10-calling-class-methods-checklist/). The next topic, [1.11 Math Class](/advanced-course-resources/computer-science-a/1-11-math-class-study-guide/), uses this knowledge on the most important class of class methods in the library.
