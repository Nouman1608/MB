---
resourceId: "mb-ap-csa-1.7-study-guide"
title: "Application Program Interface (API) and Libraries: Study Guide (Computer Science A 1.7)"
description: "Learn what libraries, packages, classes and an API specification are, how to read API documentation, and how attributes and behaviors describe what a class offers."
course: "computer-science-a"
unit: 1
topics: ["1.7"]
resourceType: "study-guide"
prerequisites: ["Topics 1.2 to 1.6: variables, expressions and assignment", "Topic 1.3: you have already called System.out.println, a library method"]
prerequisiteResources: ["mb-ap-csa-1.6-study-guide"]
learningObjectives: ["Explain what a library, a package, a class and an API specification are and how they relate", "Read a method entry in API documentation: return type, name, parameter list and description", "Distinguish the attributes and the behaviors of a class and say how each is represented in code", "Say which classes are available by default and which need an import statement"]
skills: ["4"]
studyMinutes: 35
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.7-revision-notes", "mb-ap-csa-1.7-practice", "mb-ap-csa-1.7-checklist"]
next: "mb-ap-csa-1.7-practice"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["A library is a collection of classes; an application programming interface (API) specification tells the programmer how to use them.", "Classes in libraries are grouped into packages. Classes in java.lang, such as String and Math, are available by default; others, such as Scanner in java.util, need an import.", "A class defines a specific reference type, and existing classes can be used to create objects.", "Attributes are the data related to the class, stored in variables. Behaviors are what instances of the class can do (or what can be done with them), defined by methods.", "API documentation is essential: it states each method's name, parameters, return type and what it does, so you can use it without seeing how it is written."]
faqs: [{"question": "What is the difference between a library and an API?", "answer": "A library is the collection of classes itself, ready to be used. The API (application programming interface) specification is the documentation that tells you how to use those classes: what each class, constructor and method is called, what it needs and what it does or returns."}, {"question": "Do I have to memorise every method in the Java library?", "answer": "No. The exam provides the Java Quick Reference, which lists the accessible library methods you may meet, with an explanation of each. You need to be able to read an entry and use it correctly, not recite it from memory."}, {"question": "Why do some classes need an import statement and others do not?", "answer": "Classes are grouped into packages. The java.lang package, which contains String, Math and Integer, is available to every program by default. A class in another package, such as Scanner in java.util, must be imported so that the compiler can find it."}, {"question": "Is System.out.println part of a library?", "answer": "Yes. println is a method of a library class; you have been using the library since your first program. You do not write how it works, only how to call it, and that is the idea of procedural abstraction."}]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Why use code that someone else wrote?

Every program so far has relied on code you did not write. When you called `System.out.println`, something displayed the characters on the screen. You did not need to know how: only **what** to call and **what you would get**. That idea is called **procedural abstraction**, and it is why modern programs can be built at all. If every programmer had to write screen drawing, text handling and mathematical functions from scratch, nothing would ever be finished.

The collection of ready-made code is organised in layers:

- A **library** is a collection of classes.
- Classes in the libraries are grouped into **packages**, a bit like files into folders.
- A **class** defines a specific **reference type** (Topic 1.2), and existing classes can be used to create **objects**.
- An **application programming interface (API) specification** informs the programmer how to use those classes. It is documentation: the manual for the library.

<figure>
<svg viewBox="0 0 524 248" role="img" aria-labelledby="fig-lib-t fig-lib-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="fig-lib-t">Libraries, packages and classes</title>
<desc id="fig-lib-d">A large box labelled Library: a collection of classes containing package boxes: package java.lang containing the classes String, Math, Integer; package java.util containing the classes Scanner, ArrayList.</desc>
<rect x="0" y="0" width="524" height="248" fill="#ffffff"/>
<rect x="10" y="10" width="504" height="228" rx="8" fill="#f4f6fa" stroke="#1d2b44" stroke-width="2"/>
<text x="262.0" y="34" text-anchor="middle" font-size="14" font-weight="bold" fill="#1d2b44" >Library: a collection of classes</text>
<rect x="28" y="52" width="214" height="164" rx="6" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="135.0" y="74" text-anchor="middle" font-size="13" font-weight="bold" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">package java.lang</text>
<rect x="50" y="90" width="170" height="30" rx="4" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<text x="135.0" y="110" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">class String</text>
<rect x="50" y="130" width="170" height="30" rx="4" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<text x="135.0" y="150" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">class Math</text>
<rect x="50" y="170" width="170" height="30" rx="4" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<text x="135.0" y="190" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">class Integer</text>
<rect x="282" y="52" width="214" height="124" rx="6" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="389.0" y="74" text-anchor="middle" font-size="13" font-weight="bold" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">package java.util</text>
<rect x="304" y="90" width="170" height="30" rx="4" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<text x="389.0" y="110" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">class Scanner</text>
<rect x="304" y="130" width="170" height="30" rx="4" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<text x="389.0" y="150" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">class ArrayList</text>
</svg>
<figcaption>Figure 1. A library holds packages, and each package holds classes. String, Math and Integer are in java.lang and are available by default. Scanner and ArrayList are in java.util and need an import statement.</figcaption>
</figure>

## Reading API documentation

Documentation found in API specifications and libraries is **essential** to understanding the attributes and behaviors of a class defined by an API. You do not have to see the code for `substring`; the documentation tells you everything you need to call it.

A method entry gives four things. Take the entry for one of the `String` methods:

| Part | In the entry | Meaning |
|---|---|---|
| Return type | `String` | the type of value the method gives back |
| Name | `substring` | what you write to call it |
| Parameter list | `(int from, int to)` | how many values you must give, their types and their order |
| Description | "returns the substring beginning at index `from` and ending at index `to - 1`" | what it does, and what exactly the returned value is |

The first three parts together (return type, name and parameter list) are what you see in a Quick Reference line such as `String substring(int from, int to)`. The description is the contract. If you give the method what it asks for, it does what it says.

On the exam, the **Java Quick Reference** is provided. It lists accessible library methods with an explanation of each. A very large part of the skill is reading an entry and using it correctly: matching the argument types and order, using the returned value, and knowing what happens at the boundaries.

## Attributes and behaviors

Every class describes two things.

- **Attributes** are the **data related to the class**, and they are stored in variables. For a `String`, the attribute is the sequence of characters it holds. For a `Scanner`, the attributes include the source it reads from and how far it has read.
- **Behaviors** are what **instances of the class can do** (or what can be done with them), and they are defined by **methods**. For a `String`, behaviors include reporting its length and extracting a part.

<figure>
<svg viewBox="0 0 520 250" role="img" aria-labelledby="fig-string-t fig-string-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="fig-string-t">A class has attributes and behaviors</title>
<desc id="fig-string-d">A class box named String. Its attributes compartment lists: the sequence of characters it holds. Its behaviors compartment lists: int length(); String substring(int from, int to); int indexOf(String str); boolean equals(Object other).</desc>
<rect x="0" y="0" width="520" height="250" fill="#ffffff"/>
<rect x="40" y="14" width="440" height="36" rx="4" fill="#b8c4d8" stroke="#1d2b44" stroke-width="2"/>
<text x="260.0" y="38" text-anchor="middle" font-size="16" font-weight="bold" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">class String</text>
<rect x="40" y="50" width="440" height="52" rx="0" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="260.0" y="70" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d2b44" >attributes (data stored in variables)</text>
<text x="260.0" y="88" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">the sequence of characters it holds</text>
<rect x="40" y="102" width="440" height="118" rx="0" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="260.0" y="122" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d2b44" >behaviors (defined by methods)</text>
<text x="260.0" y="140" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">int length()</text>
<text x="260.0" y="162" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">String substring(int from, int to)</text>
<text x="260.0" y="184" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">int indexOf(String str)</text>
<text x="260.0" y="206" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">boolean equals(Object other)</text>
</svg>
<figcaption>Figure 2. The String class seen as a blueprint. The attribute is the stored sequence of characters; the behaviors are methods you can call on a String object.</figcaption>
</figure>

When you hold a `String` object, you can ask it questions and request new strings by calling its behaviors. You usually cannot see or change its attributes directly; you use the methods. This split (data inside, a menu of behaviors outside) is the heart of object-oriented programming, and you will build classes of your own in Unit 3.

## Using classes from a library

The `Math` class and the `String` class are part of the **`java.lang` package**. Classes in the `java.lang` package are **available by default**, so you can use them with no extra line of code. A class in another package must be **imported**.

```java
import java.util.ArrayList;

public class Library {
    public static void main(String[] args) {
        double h = Math.sqrt(Math.pow(3, 2) + Math.pow(4, 2));
        System.out.println(h);
        String s = "banana";
        System.out.println(s.length() + " " + s.indexOf("a") + " " + s.substring(1, 4));
        ArrayList<String> list = new ArrayList<String>();
        list.add("one");
        System.out.println(list.size());
    }
}
```

```text
5.0
6 1 ana
1
```

`Math` and `String` need nothing extra. `ArrayList` lives in `java.util`, so the program begins with an `import` line. Without it the compiler cannot find the class:

```java nocompile
public class NoImport {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        System.out.println(n);
    }
}
```

```text
error: cannot find symbol
        Scanner in = new Scanner(System.in);
        symbol:   class Scanner
```

(You do not need to recite the import lines for the exam. Knowing **why** a missing class is reported, and which package a class belongs to, shows that you understand how libraries are organised.)

## A routine for using any API entry

New library methods appear on the exam, so it pays to have a routine that works for any entry, not only the ones you have practised. Follow these four steps in order.

1. **Find the class and decide how the method is reached.** Is it a method you call on an object (such as `substring` on a string), or one called through the class name (such as `Math.sqrt`)? Topics 1.10 and 1.14 explain the two forms; for now notice that the entry's heading and the word `static` tell you which.
2. **Match the parameters.** Count the values you must supply, check that each one is compatible with the parameter type, and put them in the order the entry gives. An `int` can fill a `double` parameter, but a `double` cannot fill an `int` parameter without a cast.
3. **Use the return type.** If the entry says `double`, the call is an expression of type `double`: store it in a `double`, use it inside a larger expression, or print it. If the entry says `void`, there is no value to use (Topic 1.9).
4. **Read the description for special cases.** Phrases such as "returns -1 if not found" or "ending at index `to - 1`" are the places where a careless reading loses marks.

This routine also guards against a very common mistake: assuming a method changes what it is called on. Reading the documentation of `String` methods shows that they return **new** strings; you will see in Topic 1.15 that a `String` object cannot be changed by calling a method on it.

Finally, remember the purpose of the layers in Figure 1. Because a library is organised into packages and classes, two different classes may have methods with the same name, and the class tells you which one you mean. `Math.abs` and a method called `abs` somewhere else are different things; the class name in front of the dot is part of the address.

## Worked example 1: Use an API entry to write a call

**Task.** The Quick Reference includes these `Math` methods:

- `static double pow(double base, double exponent)`: returns the value of the first parameter raised to the power of the second parameter.
- `static double sqrt(double x)`: returns the nonnegative square root of a `double` value.

A right-angled triangle has shorter sides 3 and 4. Use these methods to find the hypotenuse.

**Step 1, read the entries.** Both are `static` (Topic 1.10 explains why you call them with the class name) and both return a `double`. `pow` takes two `double` parameters, `base` first and `exponent` second. `sqrt` takes one `double` parameter.

**Step 2, plan.** The hypotenuse is the square root of 3 squared plus 4 squared.

**Step 3, write the call.** The arguments 3, 2 and 4 are `int` values; they are converted to `double` automatically (Topic 1.5), so they fit the `double` parameters.

```java
double hyp = Math.sqrt(Math.pow(3, 2) + Math.pow(4, 2));
```

**Step 4, work it out.** `Math.pow(3, 2)` returns 9.0 and `Math.pow(4, 2)` returns 16.0. Their sum is 25.0, and `Math.sqrt(25.0)` returns 5.0.

**Step 5, check.** The result is `5.0` (see the first program above). Notice what you used: only the **signature** and the **description**. You did not need to know how `pow` or `sqrt` are written.

**A trap.** `Math.pow(3, 2)` returns a `double` (9.0), not an `int`. Storing it in an `int` variable without a cast is a compile-time error.

## Worked example 2: Classify attributes and behaviors, and choose the method

**Task.** The `String` class documentation includes `int length()`, `String substring(int from, int to)` and `int indexOf(String str)`, whose description says it "returns the index of the first occurrence of `str`; returns -1 if not found". For the string `"banana"`:

(a) State which of these three is an attribute and which are behaviors.
(b) Choose the method and write a call that finds the position of the first `"nan"`.
(c) Write a call that extracts `"ana"` (the characters from index 1 up to, but not including, index 4).
(d) What would `indexOf("x")` return?

**(a)** None of the three is an attribute: all three are **behaviors**, defined by methods. The attribute of a `String` is the sequence of characters itself, which these methods read.

**(b)** `indexOf` finds a position, so `"banana".indexOf("nan")` returns 2: the letters are b(0) a(1) n(2) a(3) n(4) a(5), and "nan" starts at index 2.

**(c)** `substring(int from, int to)` returns the substring beginning at index `from` and ending at index `to - 1`, so `"banana".substring(1, 4)` returns `"ana"` (indices 1, 2 and 3).

**(d)** The documentation says it returns -1 if `str` is not found, so `"banana".indexOf("x")` is -1.

```java
public class Docs {
    public static void main(String[] args) {
        String s = "banana";
        System.out.println(s.length());
        System.out.println(s.indexOf("nan"));
        System.out.println(s.substring(1, 4));
        System.out.println(s.indexOf("x"));
    }
}
```

```text
6
2
ana
-1
```

**Check.** Each result matches what the description promised. The skill here is to take a documented contract and use it, including the special case the documentation mentions (the -1).

## Common misconceptions

- **"A library and an API are the same thing."** The library is the code; the API specification is the documentation that explains how to use it.
- **"I must see the code of a method to use it."** Documentation is enough. That is procedural abstraction.
- **"All library classes are available automatically."** Only `java.lang` is. Others need an `import`.
- **"Attributes are methods."** Attributes are data stored in variables; behaviors are methods.
- **"The parameter list tells me what the method returns."** The return type comes before the name; the parameter list is what goes in.
- **"If I pass an `int` where a `double` is needed, I get an error."** An `int` is converted to a `double` automatically.
- **"I need to memorise the Quick Reference."** It is provided; you need to read it accurately.

## Where this leads

Practise with the [Topic 1.7 practice questions](/advanced-course-resources/computer-science-a/1-7-api-libraries-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-a/1-7-api-libraries-revision-notes/) and tick off the [checklist](/advanced-course-resources/computer-science-a/1-7-api-libraries-checklist/). The next topic, [1.8 Documentation with Comments](/advanced-course-resources/computer-science-a/1-8-documentation-comments-study-guide/), turns to the other side of documentation: writing it yourself, as comments, preconditions and postconditions.
