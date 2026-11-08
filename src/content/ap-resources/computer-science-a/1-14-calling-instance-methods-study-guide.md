---
resourceId: "mb-ap-csa-1.14-study-guide"
title: "Calling Instance Methods: Study Guide (Computer Science A 1.14)"
description: "Learn how to call instance methods on objects with the dot operator, how they use the object's own attributes, and why a method call on a null reference causes a NullPointerException."
course: "computer-science-a"
unit: 1
topics: ["1.14"]
resourceType: "study-guide"
prerequisites: ["Topic 1.13: creating objects with new and constructors", "Topic 1.10: calling class methods with the class name and the dot operator"]
prerequisiteResources: ["mb-ap-csa-1.13-study-guide"]
learningObjectives: ["Explain that instance methods are called on objects with the object name, the dot operator and the method name", "Predict the result of calls on different objects of the same class, and how void methods change an object", "Distinguish a call on an object from a call through a class name", "Explain when a NullPointerException occurs and how to avoid it"]
skills: ["2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.14-revision-notes", "mb-ap-csa-1.14-practice", "mb-ap-csa-1.14-checklist"]
next: "mb-ap-csa-1.14-practice"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["Instance methods are called on objects of the class, using the object name, the dot operator and the method name.", "Each object has its own attribute values, so the same call on two objects can give different results.", "A void instance method is called as a statement and may change the object; a non-void method returns a value that must be stored or used.", "A method call on a null reference results in a NullPointerException at run time.", "Call parameters and return values follow the same rules as for class methods: number, order and types must match, and arguments are passed by value."]
faqs: [{"question": "What is the difference between calling a class method and an instance method?", "answer": "A class method is called with the class name (Math.sqrt(16)) and does not need an object. An instance method is called on an object (box.area()) and works with that object's own attributes. You cannot call an instance method using only the class name."}, {"question": "Why does the same method give different answers for different objects?", "answer": "Because each object has its own attribute values. small.area() uses small's width and height; big.area() uses big's. The method is the same code; the data it works on is different."}, {"question": "What causes a NullPointerException?", "answer": "Calling an instance method on a reference variable that holds null, meaning it refers to no object. There is no object to carry out the method, so the program stops at that line with the exception."}, {"question": "Can a method call be part of a bigger expression?", "answer": "Yes, when the method returns a value. For example small.area() + big.area() adds two returned ints. A void method returns nothing, so it cannot be used inside an expression."}]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

## Asking an object to do something

By now you can create objects (Topic 1.13). Objects exist so that you can **use** them, and you use an object by calling its **instance methods**. These are the **behaviors** of Topic 1.7: what an object can do, or what can be done with it.

**Instance methods are called on objects of the class.** The **dot operator** is used along with the **object name** to call instance methods. The form is

`objectName.methodName(arguments)`

Compare this with Topic 1.10. A class method is called with the **class name** and needs no object (`Math.sqrt(16)`). An instance method is called with the **name of an object** (`small.area()`) because it needs a particular object to work on.

Here is a class `Rectangle`. As in Topic 1.13, you can focus on how it is **used**: a constructor creates a rectangle, and four methods report on it or change it. (You will write classes of your own in Unit 3.)

```java
class Rectangle {
    private int width;
    private int height;

    public Rectangle(int w, int h) {
        width = w;
        height = h;
    }

    public int area() {
        return width * height;
    }

    public int perimeter() {
        return 2 * (width + height);
    }

    public void grow(int amount) {
        width = width + amount;
        height = height + amount;
    }

    public String describe() {
        return width + " x " + height;
    }
}
```

The next program creates two rectangles and calls the same method on each.

```java
public class Instances {
    public static void main(String[] args) {
        Rectangle small = new Rectangle(2, 3);
        Rectangle big = new Rectangle(10, 10);
        System.out.println(small.area());
        System.out.println(big.area());
        System.out.println(small.area() + big.area());
    }
}
```

```text
6
100
106
```

The method `area` is the same code in both cases, but `small.area()` multiplies `small`'s own width and height (2 and 3), while `big.area()` uses `big`'s (10 and 10). The data belong to the object; the behavior belongs to the class.

### Void and non-void instance methods

Everything from Topic 1.9 still applies.

- A **non-void** method such as `area()` returns a value, so a call is an **expression**: store it, print it, or use it in a larger expression such as `small.area() + big.area()`.
- A **void** method such as `grow(int amount)` has no return value, so it is called as a **statement**. It works by **changing the object**: after `small.grow(1);` the object's width and height are one greater, and every later call on `small` sees the new values.
- The **arguments** must match the parameters in number, order and type, and are passed by value.

<figure>
<svg viewBox="0 0 600 308" role="img" aria-labelledby="fig-call-t fig-call-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="fig-call-t">What happens during small.area()</title>
<desc id="fig-call-d">A top-to-bottom chain of steps with arrows between them: main: reaches the call small.area(); then control passes to area() for the object small; then area() reads small's width and height and returns 2 * 3; then main resumes with the value 6.</desc>
<rect x="0" y="0" width="600" height="308" fill="#ffffff"/>
<rect x="20" y="14" width="360" height="40" rx="8" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="200.0" y="39.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" >main: reaches the call small.area()</text>
<line x1="200.0" y1="54" x2="200.0" y2="82" stroke="#1d2b44" stroke-width="1.8"/>
<polygon points="200.0,82 196.5,73.7 203.5,73.7" fill="#1d2b44"/>
<rect x="20" y="84" width="360" height="40" rx="8" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="200.0" y="109.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" >control passes to area() for the object small</text>
<line x1="200.0" y1="124" x2="200.0" y2="152" stroke="#1d2b44" stroke-width="1.8"/>
<polygon points="200.0,152 196.5,143.7 203.5,143.7" fill="#1d2b44"/>
<rect x="20" y="154" width="360" height="40" rx="8" fill="#b8c4d8" stroke="#1d2b44" stroke-width="1.5"/>
<text x="200.0" y="179.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" >area() reads small's width and height and returns 2 * 3</text>
<line x1="200.0" y1="194" x2="200.0" y2="222" stroke="#1d2b44" stroke-width="1.8"/>
<polygon points="200.0,222 196.5,213.7 203.5,213.7" fill="#1d2b44"/>
<rect x="20" y="224" width="360" height="40" rx="8" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="200.0" y="249.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44" >main resumes with the value 6</text>
</svg>
<figcaption>Figure 1. A call on an object. Control passes into the method, which reads the attributes of the object it was called on, and then returns to the point just after the call.</figcaption>
</figure>

### A call needs an object, so the class name alone is not enough

Because an instance method works with a particular object's data, you cannot call it through the class name. Given the class above, these statements in another class fail to compile:

```java nocompile
public class Wrong {
    public static void main(String[] args) {
        Rectangle r = new Rectangle(1, 1);
        int a = Rectangle.area();
        int b = area(r);
        int c = r.grow(2);
        r.grow();
        r.grow("2");
        int d = r.volume();
    }
}
```

| Statement | Fault |
|---|---|
| `Rectangle.area()` | `area` is an instance method: it needs an object, so it cannot be called through the class name |
| `area(r)` | there is no such method in this class; the object name and dot operator are missing |
| `int c = r.grow(2);` | `grow` is void, so there is no value to store |
| `r.grow();` | `grow` needs one `int` argument |
| `r.grow("2");` | a `String` cannot be passed to an `int` parameter |
| `int d = r.volume();` | `Rectangle` has no method `volume` |

## Calling a method on null

A reference variable can hold **`null`**, meaning it refers to **no object** (Topic 1.4 and Topic 1.13). An instance method needs an object to work on, so a method call on a `null` reference results in a **`NullPointerException`**. This is a run-time error, an exception like the `ArithmeticException` of Topic 1.1: the code compiles, because the compiler does not know which object a variable will refer to, but the program stops when the call is executed.

```java
public class NullDemo {
    public static void main(String[] args) {
        Rectangle t = null;
        System.out.println("before");
        System.out.println(t.area());
        System.out.println("after");
    }
}
```

The output is `before`, then the program stops with a `NullPointerException` at the call, and `after` is never printed. The cure is to make sure the variable refers to an object before using it: either create one (`Rectangle t = new Rectangle(2, 3);`) or, in Unit 2, test for `null` first.

## Why you use methods, not attributes

You may have noticed that the `Rectangle` attributes are marked `private`, and that every example reaches the data only through methods such as `area()` and `describe()`. This is deliberate. The class keeps its data **inside**, and offers a menu of behaviors **outside**. The code that uses the class cannot change a width to a nonsensical value, because it can only ask the object to do something through its methods. Writing `small.width` from another class would be rejected by the compiler. The idea is called **encapsulation**, and you will use it again when you write classes in Unit 3.

For tracing, this has a practical consequence: the only way an object's data can change is through a method call on it (or a constructor). When you follow a long program, scan for lines of the form `name.method(...)`. Those lines are exactly the places where an object might change.

### Calls inside calls

Because a non-void call is an expression of its return type, you can use one call as an argument of another, or use its result as the target of the next call. Work from the inside out, left to right.

- **As an argument:** `new Rectangle(small.area(), 2)` first calls `small.area()` (6), then creates a 6 by 2 rectangle.
- **On a returned object:** a method that returns a `String` lets you call a `String` method on the result. `word.substring(1).length()` first creates the substring and then asks for its length. This pattern is common with strings (Topic 1.15).
- **In a condition or calculation:** later units will use calls such as `list.size()` or `word.length()` inside loops and `if` statements. They work in exactly the same way.

### A tracing routine

1. **Make a column per object**, not per variable, if two variables can be aliases. Label which variables refer to it.
2. **For each call, find the object** named before the dot. If that variable is `null`, the program stops with a `NullPointerException`.
3. **Check the arguments** against the method's parameters, then run the method on that object's data.
4. **Update the object's column** if the method is void and changes it. Write down the returned value if the method is non-void.
5. **Continue** with the next statement, using the **updated** values.

## Worked example 1: Trace calls on two objects

**Task.** State the output.

```java
Rectangle p = new Rectangle(2, 3);
Rectangle q = new Rectangle(4, 4);
p.grow(1);
q.grow(2);
int total = p.area() + q.perimeter();
System.out.println(p.describe() + " " + q.describe() + " " + total);
```

**Step 1, create.** `p` is 2 by 3 and `q` is 4 by 4. They are separate objects.

**Step 2, void calls.** `p.grow(1);` adds 1 to both sides of `p`: 3 by 4. `q.grow(2);` adds 2 to both sides of `q`: 6 by 6. Each call changes only the object it was called on.

**Step 3, the expression.** `p.area()` is 3 * 4 = 12. `q.perimeter()` is 2 * (6 + 6) = 24. The sum is 36, stored in `total`.

**Step 4, print.** `p.describe()` returns `"3 x 4"` and `q.describe()` returns `"6 x 6"`.

| After statement | `p` | `q` | `total` |
|---|---|---|---|
| `Rectangle p = new Rectangle(2, 3);` | 2 x 3 | - | - |
| `Rectangle q = new Rectangle(4, 4);` | 2 x 3 | 4 x 4 | - |
| `p.grow(1);` | 3 x 4 | 4 x 4 | - |
| `q.grow(2);` | 3 x 4 | 6 x 6 | - |
| `int total = p.area() + q.perimeter();` | 3 x 4 | 6 x 6 | 36 |

The output is `3 x 4 6 x 6 36`.

## Worked example 2: Two names, then null

**Task.** State what is printed and where the program stops.

```java
Rectangle r = new Rectangle(1, 1);
Rectangle s = r;
s.grow(4);
System.out.println(r.area());
Rectangle t = null;
System.out.println(t.area());
System.out.println("done");
```

**Step 1.** `r` refers to a 1 by 1 rectangle. `Rectangle s = r;` copies the reference, so `s` refers to the **same** object (Topic 1.12).

**Step 2.** `s.grow(4);` changes that single object to 5 by 5. Calling `r.area()` asks the same object, so it returns 25 and `25` is printed.

**Step 3.** `Rectangle t = null;` makes `t` refer to no object. `t.area()` tries to call an instance method on `null`, so a `NullPointerException` occurs, the program stops, and `done` is never printed.

```text
25
```

**Check.** The output before the failure is a single line, `25`, followed by the exception message from the system. The calls compile because the compiler only checks that `Rectangle` has an `area()` method; it cannot know that `t` will be `null` at that moment.

## String objects use instance methods too

`String` is a class, so its methods from Topic 1.7 are instance methods, called on a `String` object, which can be a variable or a literal. That is why you write `word.length()`, not `String.length(word)`.

```java
public class OnStrings {
    public static void main(String[] args) {
        String word = "programming";
        System.out.println(word.length());
        System.out.println(word.indexOf("g"));
        System.out.println("programming".length() + "programming".indexOf("g"));
    }
}
```

```text
11
3
14
```

If `word` held `null`, `word.length()` would throw a `NullPointerException`, for the same reason as above.

## Common misconceptions

- **"I can call an instance method with just the class name."** You need an object: `Rectangle.area()` does not compile.
- **"A method call on one object affects all objects of the class."** It affects only the object it is called on (or any other name for the same object).
- **"A `NullPointerException` is a compile-time error."** It occurs at run time; the code compiles.
- **"A void method returns a value I can store."** It returns nothing.
- **"Two variables of the same class share their data."** Only if they refer to the same object.
- **"An instance method works the same for every object."** The code is the same, but it uses each object's own attributes.
- **"`null` is an object with no data."** It is the absence of an object.

## Where this leads

Practise with the [Topic 1.14 practice questions](/advanced-course-resources/computer-science-a/1-14-calling-instance-methods-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-a/1-14-calling-instance-methods-revision-notes/) and tick off the [checklist](/advanced-course-resources/computer-science-a/1-14-calling-instance-methods-checklist/). The final topic of the unit, [1.15 String Manipulation](/advanced-course-resources/computer-science-a/1-15-string-manipulation-study-guide/), puts everything together on the most used class in the course.
