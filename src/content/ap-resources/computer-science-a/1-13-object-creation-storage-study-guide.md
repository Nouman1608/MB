---
resourceId: "mb-ap-csa-1.13-study-guide"
title: "Object Creation and Storage (Instantiation): Study Guide (Computer Science A 1.13)"
description: "Learn how an object is created with the keyword new and a constructor, how constructor signatures and overloading select the right constructor, and what a reference variable holds before and after."
course: "computer-science-a"
unit: 1
topics: ["1.13"]
resourceType: "study-guide"
prerequisites: ["Topic 1.12: a class is a blueprint, an object is an instance, and a reference variable holds an object reference", "Topic 1.9: signatures, parameters, arguments and call by value"]
prerequisiteResources: ["mb-ap-csa-1.12-study-guide"]
learningObjectives: ["Explain that a constructor has the same name as its class and is called with new to create an object", "State a constructor's signature, and use the number, order and types of arguments to identify which overloaded constructor is called", "Declare a reference variable of the right type and create an object stored in it, or null if there is none", "Trace constructor calls, including call by value and the flow of control"]
skills: ["2", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.13-revision-notes", "mb-ap-csa-1.13-practice", "mb-ap-csa-1.13-checklist"]
next: "mb-ap-csa-1.13-practice"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["A class contains constructors, which have the same name as the class and are called to create objects, usually with the keyword new.", "A constructor signature is the class name plus the ordered list of parameter types; constructors with different signatures are overloaded.", "Constructor parameters let you set the initial values of an object's attributes; arguments must match in number, order and compatible type and are passed by value.", "A variable of a reference type holds an object reference or, if there is no object, null.", "A constructor call interrupts the sequential execution; when its last statement finishes, control returns to just after where it was called."]
faqs: [{"question": "What is the difference between declaring a variable and creating an object?", "answer": "Declaring (Box b;) makes a variable that can hold a reference to a Box. Creating (new Box(4)) builds the object by calling a constructor. The usual one-line form Box b = new Box(4); does both: the object is created and a reference to it is stored in b."}, {"question": "How do I know which constructor will be called?", "answer": "Match the arguments to the constructors' parameter lists by number, order and type. new Box() calls the constructor with no parameters; new Box(4) calls the one with a single int; new Box(3, 5) calls the one with two ints. If no signature matches, the code does not compile."}, {"question": "Does a constructor have a return type?", "answer": "No. A constructor's header has no return type, not even void, and its name is exactly the name of the class. That is how you recognise it."}, {"question": "Can I create an object without storing it in a variable?", "answer": "The code new Box(2); compiles as a statement, but the reference is discarded, so you cannot use the object afterwards. In practice you store the reference in a variable or pass it straight into something that uses it."}]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Making an object

In Topic 1.12 you declared a variable such as `Box b;` and saw that this creates no object. So where do objects come from? From the class itself. A class contains **constructors**, which are **called to create objects**. A constructor has the **same name as the class**, and, unlike a method, it has **no return type**.

An object is typically created with the keyword **`new`** followed by a call to one of the class's constructors. Here is a class `Box` that the examples will use. It has two attributes (`width` and `height`) and **three constructors**. (Methods in a class are called instance methods, Topic 1.14; for now notice only the constructors.)

```java
class Box {
    private int width;
    private int height;

    public Box() {
        width = 1;
        height = 1;
    }

    public Box(int side) {
        width = side;
        height = side;
    }

    public Box(int w, int h) {
        width = w;
        height = h;
    }

    public int area() {
        return width * height;
    }

    public String describe() {
        return width + " x " + height;
    }
}
```

Each constructor does the same kind of job: set the starting values of the attributes. They differ in what information the caller supplies.

### Constructor signatures and overloading

A **constructor signature** consists of the **constructor's name**, which is the same as the class name, and the **ordered list of parameter types**. The parameter list in the header of a constructor lists the types of the values that are passed and their variable names.

| Constructor header | Signature |
|---|---|
| `public Box()` | `Box()` |
| `public Box(int side)` | `Box(int)` |
| `public Box(int w, int h)` | `Box(int, int)` |

Constructors are **overloaded** when there are multiple constructors with different signatures. This is the same idea as overloaded methods in Topic 1.9: the compiler chooses by the number, order and types of the arguments.

### Creating objects and storing references

```java
public class MakeBoxes {
    public static void main(String[] args) {
        Box a = new Box();
        Box b = new Box(4);
        Box c = new Box(3, 5);
        Box d = null;
        System.out.println(a.describe() + " | " + b.describe() + " | " + c.describe());
        System.out.println(a.area() + b.area() + c.area());
    }
}
```

```text
1 x 1 | 4 x 4 | 3 x 5
32
```

Take `Box c = new Box(3, 5);` apart. There are three actions:

1. **Declare** a variable `c` of the reference type `Box`.
2. **Create** the object: `new Box(3, 5)` calls the constructor `Box(int, int)`, which sets `width` to 3 and `height` to 5.
3. **Store** the resulting object reference in `c` by assignment.

A variable of a reference type holds an object reference **or, if there is no object, `null`**. In the program, `d` is deliberately set to `null`: it refers to no box. (Calling a method on `d` would cause a `NullPointerException`, Topic 1.14.)

<figure>
<svg viewBox="0 0 600 328" role="img" aria-labelledby="fig-boxes-t fig-boxes-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="fig-boxes-t">Variables and the Box objects they refer to</title>
<desc id="fig-boxes-d">Variable boxes on the left, object boxes on the right. Objects: Box object with width = 1, height = 1; Box object with width = 4, height = 4; Box object with width = 3, height = 5. Arrows and values: variable a refers to the Box object object; variable b refers to the Box object object; variable c refers to the Box object object; variable d holds null and refers to no object.</desc>
<rect x="0" y="0" width="600" height="328" fill="#ffffff"/>
<text x="20" y="24" text-anchor="start" font-size="13" font-weight="bold" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">Box a</text>
<rect x="20" y="30" width="110" height="44" rx="4" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="75" y="57.0" text-anchor="middle" font-size="15" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace"></text>
<text x="20" y="90" text-anchor="start" font-size="13" font-weight="bold" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">Box b</text>
<rect x="20" y="96" width="110" height="44" rx="4" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="75" y="123.0" text-anchor="middle" font-size="15" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace"></text>
<text x="20" y="156" text-anchor="start" font-size="13" font-weight="bold" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">Box c</text>
<rect x="20" y="162" width="110" height="44" rx="4" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="75" y="189.0" text-anchor="middle" font-size="15" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace"></text>
<text x="20" y="222" text-anchor="start" font-size="13" font-weight="bold" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">Box d</text>
<rect x="20" y="228" width="110" height="44" rx="4" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="75" y="255.0" text-anchor="middle" font-size="15" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">null</text>
<rect x="330" y="30" width="240" height="74" rx="4" fill="#b8c4d8" stroke="#1d2b44" stroke-width="1.5"/>
<text x="450" y="52" text-anchor="middle" font-size="14" font-weight="bold" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">Box object</text>
<text x="450" y="74" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">width = 1</text>
<text x="450" y="94" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">height = 1</text>
<rect x="330" y="126" width="240" height="74" rx="4" fill="#b8c4d8" stroke="#1d2b44" stroke-width="1.5"/>
<text x="450" y="148" text-anchor="middle" font-size="14" font-weight="bold" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">Box object</text>
<text x="450" y="170" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">width = 4</text>
<text x="450" y="190" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">height = 4</text>
<rect x="330" y="222" width="240" height="74" rx="4" fill="#b8c4d8" stroke="#1d2b44" stroke-width="1.5"/>
<text x="450" y="244" text-anchor="middle" font-size="14" font-weight="bold" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">Box object</text>
<text x="450" y="266" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">width = 3</text>
<text x="450" y="286" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">height = 5</text>
<line x1="75" y1="52.0" x2="330" y2="47" stroke="#1d2b44" stroke-width="1.8"/>
<circle cx="75" cy="52.0" r="3" fill="#1d2b44"/>
<polygon points="330,47 321.8,50.7 321.6,43.7" fill="#1d2b44"/>
<line x1="75" y1="118.0" x2="330" y2="143" stroke="#1d2b44" stroke-width="1.8"/>
<circle cx="75" cy="118.0" r="3" fill="#1d2b44"/>
<polygon points="330,143 321.4,145.7 322.1,138.7" fill="#1d2b44"/>
<line x1="75" y1="184.0" x2="330" y2="239" stroke="#1d2b44" stroke-width="1.8"/>
<circle cx="75" cy="184.0" r="3" fill="#1d2b44"/>
<polygon points="330,239 321.2,240.7 322.6,233.8" fill="#1d2b44"/>
</svg>
<figcaption>Figure 1. Four variables. The variables a, b and c refer to three different Box objects, each with the width and height its constructor set. The variable d holds null and refers to no object.</figcaption>
</figure>

### Arguments and call by value

The parameters of a constructor let it accept values to establish the initial values of the object's attributes. A **constructor argument** is a value passed into a constructor when it is called. The arguments must be **compatible in order and number** with the types in the parameter list of the constructor signature. As with methods, arguments are passed by **call by value**: the parameters are initialized with **copies** of the arguments.

If no constructor matches, the compiler reports it. For the `Box` class:

| Statement | Fault |
|---|---|
| `new Box(1, 2, 3)` | no constructor has three parameters |
| `new Box("x")` | a `String` cannot be passed to the `int` parameter |
| `new Box(2.5)` | a `double` cannot be passed to an `int` parameter |

### The flow of control

A constructor call **interrupts the sequential execution** of statements, so the program first executes the statements in the constructor before continuing. Once the last statement in the constructor has been executed, the flow of control returns to the point **immediately following where the constructor was called**.

```java
class Note {
    public Note(String text) {
        System.out.println("creating " + text);
    }
}

public class Order {
    public static void main(String[] args) {
        System.out.println("before");
        Note n = new Note("A");
        System.out.println("after");
    }
}
```

```text
before
creating A
after
```

The message from inside the constructor appears **between** the two lines printed by `main`, because `new Note("A")` runs the constructor to its end before `main` continues.

## Constructors in the library

Library classes are created with constructors too, and you have already used several. The Java Quick Reference lists them next to the methods.

- `new Scanner(System.in)` calls a `Scanner` constructor with one argument, the source to read from.
- `new String("hello")` calls the `String` constructor `String(String str)`, which constructs a new `String` object that represents the same sequence of characters as `str`. (Topic 1.15 explains that a string literal such as `"hello"` also creates a `String` object, so for strings you rarely need `new`.)
- `new ArrayList<String>()` calls the `ArrayList` constructor that takes no arguments and creates an empty list; you will use it in Unit 4.

The reading skills are identical to those for your own classes: the class name tells you the type of object, the argument list selects the constructor, and the variable on the left must be declared with the class type (or a type the course says is compatible).

### What storage means

The topic title says object creation **and storage**. Two different things are stored. The **object**, with all of its attribute values, is stored in the computer's memory when the constructor runs. The **reference** to that object is what gets stored in the variable. That is why the same object can be reached through more than one variable (Topic 1.12), and why an object that no variable refers to any longer can no longer be used by the program.

You can check your understanding by predicting what each of these statements does to the diagram:

1. `Box a = new Box(2, 3);` creates one new object and makes `a` refer to it.
2. `Box b = a;` creates **no** new object; `b` now refers to the same one.
3. `a = new Box(9);` creates another object and makes `a` refer to it; `b` still refers to the first object.
4. `b = null;` makes `b` refer to nothing. The first object is now referred to by no variable.

Each statement changes what a variable holds; only statements that contain `new` ever create an object. A diagram with variables on the left, objects on the right and an arrow for each reference makes this process visible at every step, and drawing one is the most reliable way to avoid mistakes on exam questions about references.

## A routine for any constructor call

Exam questions on this topic usually ask one of three things: which constructor runs, what the attributes hold afterwards, or why a call does not compile. The same short routine answers all three.

1. **List the constructors.** Write each signature down from the class: here `Box()`, `Box(int)` and `Box(int, int)`.
2. **Evaluate the arguments.** Work out the value and the type of each argument, in order, left to right. An argument can be a literal, a variable, an expression or a method call.
3. **Pick the matching signature.** The number must be equal, and each argument's type must fit the parameter in the same position (an `int` fits a `double` parameter; a `double` does not fit an `int`). If none fits, the code does not compile. If two fit, the more exact match is used.
4. **Run the constructor.** Create a table of the parameters and the attributes. The parameters hold **copies** of the arguments. Follow each statement of the constructor in order, and note what it stores in the attributes.
5. **Return and store.** The constructor ends, control returns to the point after the call, and the new object's reference is stored where the statement says: in a variable, or passed on as an argument.

A few traps are worth knowing. If a constructor has a parameter with the **same name** as an attribute, it takes care to tell the two apart (Topic 3.9 explains how); in this topic's classes the names differ, so there is no confusion. If a class has **no** constructor with parameters but you pass arguments, the call does not compile. And if two constructors need the same type of information in a different **order** (for example `(int, double)` and `(double, int)`), they are different signatures, and the order of your arguments decides which is called.

## Worked example 1: Which constructor, and what do the attributes hold?

**Task.** Using the `Box` class above, state which constructor each statement calls and give the values of `width` and `height`.

(a) `Box p = new Box();`
(b) `Box q = new Box(6);`
(c) `Box r = new Box(2, 7);`
(d) `Box s = new Box(r.area());` (assume `r` is the box from (c))

**(a)** No arguments: `Box()`. Width 1, height 1.

**(b)** One `int` argument: `Box(int)`. Both attributes are set to the side: width 6, height 6.

**(c)** Two `int` arguments: `Box(int, int)`. Width 2, height 7.

**(d)** The argument `r.area()` is evaluated first, before the constructor is called. The area of `r` is 2 * 7 = 14, an `int`, so `Box(int)` is called with 14: width 14, height 14.

**Check.** In every case, the **number and type** of the arguments select the constructor. Part (d) shows that an argument may itself be a method call, which runs first.

## Worked example 2: Constructor parameters are copies

**Task.** A class `Wallet` has a constructor that adds a bonus to the starting value. State what is printed.

```java
class Wallet {
    private int coins;

    public Wallet(int start) {
        start = start + 5;
        coins = start;
    }

    public int getCoins() {
        return coins;
    }
}

public class Bonus {
    public static void main(String[] args) {
        int n = 10;
        Wallet w = new Wallet(n);
        System.out.println(n + " " + w.getCoins());
    }
}
```

**Step 1.** In `main`, `n` is 10. `new Wallet(n)` calls the constructor `Wallet(int)`.

**Step 2.** Call by value: the parameter `start` is initialized with a **copy** of `n`, which is 10.

**Step 3.** Inside the constructor, `start = start + 5;` makes the copy 15, and `coins = start;` stores 15 in the object's attribute. The constructor ends and control returns to `main`.

**Step 4.** `n` was never changed: only its copy was. `w.getCoins()` returns 15. The output is `10 15`.

```text
10 15
```

**Reflection.** The two numbers differ because the argument and the parameter are different variables, and because the object's attribute `coins` is a third location, set by the constructor.

## Common misconceptions

- **"A constructor is a method with a return type of its own class."** A constructor has no return type at all and shares the class's name.
- **"`Box b;` makes a box."** It declares a variable; `new Box(...)` makes the box.
- **"`new` is optional."** Without it, no object is created.
- **"A constructor with a different parameter name is a different constructor."** The signature is the name and the parameter **types**. Names do not count.
- **"A constructor changes the argument variable."** Arguments are passed by value; only the copy changes.
- **"A reference variable can never be `null`."** It can: `null` means no object.
- **"The statements after `new` run before the constructor."** The constructor runs completely first.
- **"I can pass any argument to any constructor."** The number, order and types must match one signature exactly (with `int` allowed for `double`).

## Where this leads

Practise with the [Topic 1.13 practice questions](/advanced-course-resources/computer-science-a/1-13-object-creation-storage-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-a/1-13-object-creation-storage-revision-notes/) and tick off the [checklist](/advanced-course-resources/computer-science-a/1-13-object-creation-storage-checklist/). The next topic, [1.14 Calling Instance Methods](/advanced-course-resources/computer-science-a/1-14-calling-instance-methods-study-guide/), shows how to use the objects you have just created by calling methods on them.
