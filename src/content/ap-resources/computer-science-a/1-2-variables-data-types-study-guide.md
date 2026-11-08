---
resourceId: "mb-ap-csa-1.2-study-guide"
title: "Variables and Data Types: Study Guide (Computer Science A 1.2)"
description: "Learn what a data type is, how int, double and boolean differ from reference types such as String, and how a variable is declared to store a value."
course: "computer-science-a"
unit: 1
topics: ["1.2"]
resourceType: "study-guide"
prerequisites: ["Topic 1.1: a Java program is written, compiled and run, one statement at a time", "Knowing the difference between a whole number, a decimal number and a true/false statement"]
prerequisiteResources: ["mb-ap-csa-1.1-study-guide"]
learningObjectives: ["Explain a data type as a set of values together with the operations allowed on them, and sort types into primitive and reference", "Choose int, double or boolean as the most appropriate type for a described piece of data", "Write a variable declaration, with and without an initial value, that follows Java's rules for names and types", "Predict whether a declaration compiles and what value the variable holds"]
skills: ["2", "3"]
studyMinutes: 40
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.2-revision-notes", "mb-ap-csa-1.2-practice", "mb-ap-csa-1.2-checklist"]
next: "mb-ap-csa-1.2-practice"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["A data type is a set of values and the operations that work on them. Types are either primitive or reference.", "The three primitive types in this course are int (whole numbers), double (real numbers) and boolean (true or false).", "A variable is a named storage location with a data type; its value can change while the program runs.", "A reference type, such as String, defines objects. A variable of a reference type holds a reference to an object, not the object itself.", "Compatibility is checked by the compiler: a double value cannot be stored in an int variable without conversion, and a String cannot be stored in a boolean."]
faqs: [{"question": "Why does Java have both int and double?", "answer": "They store different kinds of number. An int holds whole numbers exactly and uses integer arithmetic; a double holds real numbers, including fractions, but is stored in a limited number of digits. Choose int for things you count and double for things you measure."}, {"question": "Do I need long, float, short, byte or char for the exam?", "answer": "No. The course names only int, double and boolean as its primitive types; the other five Java primitive types are outside the scope of the course and exam."}, {"question": "Is String a primitive type?", "answer": "No. String is a class, so it is a reference type. A String variable holds a reference to a String object, and String values (called literals when written in code) are written in double quotes."}, {"question": "Does the capital letter in a variable name matter?", "answer": "Yes. Java is case-sensitive, so count and Count are two different names. By convention variable names start with a lower-case letter."}]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

## Storing information needs a plan for what kind of information it is

A program has to remember things: how many tickets were sold, the price of each one, whether a customer is a member. Each of these is a different **kind** of thing. The number of tickets is a whole number. The price can have a fraction. Membership is a yes or no. Java makes you say what kind of information a name will hold, so that it can check your work for you.

That "kind" is a **data type**. A data type is a **set of values** together with a **set of operations** you can perform on those values. For example, whole numbers can be added, subtracted and compared, and you cannot ask for the "length" of one. Truth values can be combined with "and" and "or", but you cannot add two of them.

Data types fall into two categories:

- **Primitive types** hold simple values directly. In this course the three primitive types are `int`, `double` and `boolean`.
- **Reference types** define **objects**. Every class gives rise to a reference type, such as `String`. You will study these from Topic 1.7 onwards.

| Type | Category | Set of values | Examples of values |
|---|---|---|---|
| `int` | primitive | integers (whole numbers) in a fixed range | `0`, `-42`, `2025` |
| `double` | primitive | real numbers, stored with limited precision | `3.5`, `-0.25`, `4.0` |
| `boolean` | primitive | exactly two values | `true`, `false` |
| `String` | reference | sequences of characters | `"Ada"`, `"12 Oak Road"` |

Java has five other primitive types (`long`, `short`, `byte`, `float` and `char`). They are outside the scope of this course and the exam, so you will not need them.

### Why `int` and `double` are different

An `int` value is an integer: it has no fractional part. A `double` value is a real number that can have a fractional part. The number 4 and the number 4.0 are not stored in the same way: `4` is an `int` and `4.0` is a `double`. Any value with a decimal point in the code is a `double`. That difference matters later, when division behaves differently depending on the types (Topic 1.3).

A rule of thumb: **count with `int`, measure with `double`**. The number of students in a class is an `int`. The average mass of those students is a `double`.

## Variables: named storage that can change

A **variable** is a storage location that holds a value, and the value can change while the program is running. Every variable has:

1. a **name**, chosen by the programmer;
2. a **data type**, which cannot change; and
3. a **value**, which can change as the program runs.

A variable of a primitive type holds a primitive value of that type. You can picture it as a labelled box.

<figure>
<svg viewBox="0 0 620 130" role="img" aria-labelledby="fig-vars-t fig-vars-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="fig-vars-t">Four variables as labelled boxes</title>
<desc id="fig-vars-d">Boxes, each labelled with a type and a variable name and holding its value: variable tickets of type int holding 3; variable price of type double holding 12.5; variable member of type boolean holding true; variable total of type double holding 37.5.</desc>
<rect x="0" y="0" width="620" height="130" fill="#ffffff"/>
<text x="85.0" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">int tickets</text>
<rect x="20" y="34" width="130" height="54" rx="4" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="85.0" y="66.0" text-anchor="middle" font-size="16" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">3</text>
<text x="235.0" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">double price</text>
<rect x="170" y="34" width="130" height="54" rx="4" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="235.0" y="66.0" text-anchor="middle" font-size="16" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">12.5</text>
<text x="385.0" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">boolean member</text>
<rect x="320" y="34" width="130" height="54" rx="4" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="385.0" y="66.0" text-anchor="middle" font-size="16" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">true</text>
<text x="535.0" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">double total</text>
<rect x="470" y="34" width="130" height="54" rx="4" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="535.0" y="66.0" text-anchor="middle" font-size="16" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">37.5</text>
</svg>
<figcaption>Figure 1. Each box has a type and a name above it and a value inside. The type is fixed when the variable is declared; the value in the box is what changes.</figcaption>
</figure>

### Declaring a variable

A **declaration** introduces the variable by giving its type and name:

```java
int tickets;
```

A variable is **initialized** the first time it is assigned a value. You can declare and initialize in a single statement:

```java
int tickets = 3;
double price = 12.5;
boolean member = true;
```

The `=` sign here means "store the value on the right in the variable on the left". It is **not** a claim about equality as in algebra. Topic 1.4 covers assignment in depth; for now, read each of those lines as "make a box of this type with this name and put this value in it".

Putting it together in a small program, and using the variables to calculate a new one:

```java
public class Declare {
    public static void main(String[] args) {
        int tickets = 3;
        double price = 12.5;
        boolean member = true;
        double total = tickets * price;
        System.out.println(tickets + " " + price + " " + member + " " + total);
        price = 10;
        System.out.println(price);
    }
}
```

```text
3 12.5 true 37.5
10.0
```

Notice two things. First, `price = 10;` changed the value inside the box without declaring the variable again: the type was fixed at the declaration, so there is no type on the left. Second, the `int` value 10 was stored in a `double` variable and printed as `10.0`: Java is happy to store a whole number in a `double` box because every integer is also a real number.

### Naming rules and habits

- A name (an *identifier*) is made of letters, digits, underscores and dollar signs, and **cannot start with a digit**.
- Names are **case-sensitive**: `count` and `Count` are different variables.
- A name cannot be a **keyword** that Java reserves, such as `class`, `int` or `boolean`.
- By convention, variable names start with a lower-case letter, and a name made of several words capitalises the later words (for example `totalPrice`). Choose names that say what the variable means: `tickets` is better than `t`.

### The compiler checks types

Java is a **type-checked** language. When you declare a variable, the compiler remembers its type and checks every use of it. A value must be of a **compatible** data type to be stored in the variable.

| Declaration | Compiles? | Why |
|---|---|---|
| `int count = 12;` | yes | an `int` value in an `int` variable |
| `double rate = 4;` | yes, and `rate` holds `4.0` | every integer can be stored as a real number |
| `int size = 3.0;` | no | a `double` value cannot be stored in an `int` without being converted; the compiler reports `possible lossy conversion from double to int` |
| `boolean done = "true";` | no | `"true"` is a `String`, not a `boolean`; the compiler reports `String cannot be converted to boolean` |
| `String name = "Ada";` | yes | a `String` is a reference type; the variable holds a reference to a `String` object |

## Worked example 1: Choose the data type for each piece of data

**Task.** A school is writing a program to store information about each student. For each item, choose the most appropriate type from `int`, `double`, `boolean` or `String`, and write a declaration.

(a) the number of books the student has borrowed
(b) the student's average mark, such as 71.5
(c) whether the student has paid the trip fee
(d) the student's first name
(e) the student's house number on their street (for example 14)

**Step 1, ask what the values look like.**

- (a) Books are counted, so the value is a whole number: `int`.
- (b) The average can have a fraction (71.5): `double`.
- (c) The answer is yes or no: `boolean`.
- (d) A name is a sequence of characters, so `String`. This is a **reference** type.
- (e) The house number is a whole number, so `int` is allowed. (There is a design question, since you would never add two house numbers together, but with only `int`, `double`, `boolean` and `String` to choose from, `int` is the best fit.)

**Step 2, write the declarations with sample values.**

```java
int booksBorrowed = 4;
double averageMark = 71.5;
boolean tripFeePaid = true;
String firstName = "Mina";
int houseNumber = 14;
```

**Step 3, check each one.** Each value matches the declared type: 4 is an `int`, 71.5 is a `double`, `true` is a `boolean`, `"Mina"` is a `String` and 14 is an `int`. Each name is a valid identifier that starts with a lower-case letter and describes its meaning.

**Step 4, a check on operations.** Because `averageMark` is a `double`, arithmetic with it can have a fractional result. Because `tripFeePaid` is a `boolean`, you can combine it with logical operators (Unit 2), but you could not multiply it by 2. The type decides which operations make sense.

## Worked example 2: Which declarations compile, and what do they hold?

**Task.** The following lines are declared in a method, one after the other. For each, say whether the compiler would accept it, and if so what value the variable holds.

```java
int a = 5;
double b = 9 / 2;
boolean c = false;
int d = a;
double e = a;
```

**Step 1, line by line.**

- `int a = 5;` compiles. `a` holds 5.
- `double b = 9 / 2;` compiles. The expression `9 / 2` has two `int` operands, so it is integer division and evaluates to 4 (you will study this in Topic 1.3). The `int` 4 is then stored in a `double` variable, so `b` holds `4.0`. A common mistake is to expect 4.5.
- `boolean c = false;` compiles. `c` holds `false`.
- `int d = a;` compiles. A variable can supply a value: `d` receives a **copy** of the value in `a`, so `d` holds 5.
- `double e = a;` compiles. The `int` value 5 is stored as a `double`, so `e` holds `5.0`.

**Step 2, verify by running.**

```java
public class Check {
    public static void main(String[] args) {
        int a = 5;
        double b = 9 / 2;
        boolean c = false;
        int d = a;
        double e = a;
        a = 20;
        System.out.println(a + " " + b + " " + c + " " + d + " " + e);
    }
}
```

```text
20 4.0 false 5 5.0
```

**Step 3, interpret the last line.** After `a = 20;`, the variable `a` holds 20, but `d` and `e` still hold 5 and 5.0. They received copies of the value at the time of the assignment; they are not linked to `a`. A primitive variable has its own box.

**Step 4, a related mistake.** If the program had said `int f = 3.5;`, the compiler would reject it, because a `double` cannot be stored in an `int`, as in the table above. Rejecting it protects you from silently losing the `.5`.

## Common misconceptions

- **"`4` and `4.0` are the same."** Both are numbers, but they have different types: `4` is an `int`, `4.0` is a `double`. They print differently (`4` and `4.0`), and arithmetic behaves differently.
- **"`double b = 9 / 2;` stores 4.5."** The division happens first, using integer arithmetic, so the result is 4, which is then stored as `4.0`.
- **"A variable's type can change when I assign a different kind of value."** The type is fixed by the declaration. The compiler rejects incompatible assignments.
- **"`=` means equals."** It means "store the value on the right in the variable on the left". Comparison is a different operator.
- **"`count` and `Count` are the same variable."** Java is case-sensitive.
- **"`String` is a primitive type like `int`."** `String` is a class, so it is a reference type, and a `String` variable holds a reference to an object.
- **"A variable with a type but no value is fine to use."** A variable must be assigned a value before it can be used in an expression; the compiler reports that the variable might not have been initialized (Topic 1.4).

## Where this leads

Try the [Topic 1.2 practice questions](/advanced-course-resources/computer-science-a/1-2-variables-data-types-practice/), use the [revision notes](/advanced-course-resources/computer-science-a/1-2-variables-data-types-revision-notes/) for a quick recap, then tick off the [checklist](/advanced-course-resources/computer-science-a/1-2-variables-data-types-checklist/). The next topic, [1.3 Expressions and Output](/advanced-course-resources/computer-science-a/1-3-expressions-output-study-guide/), shows how to calculate with these variables and display results, including the integer-division rule you met above.
