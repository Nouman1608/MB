---
title: "AQA A-Level Computer Science: Programming Paradigms — Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of programming"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 1
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-programming"
    subtopic: "programming-paradigms-aqa-alevel-cs"
description: "Original AQA A-Level Computer Science 7517 questions with answers on procedural and object-oriented paradigms, hierarchy charts, classes, inheritance and UML."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Fundamentals of programming study guide](/resources/aqa-a-level-computer-science-fundamentals-of-programming/) |
[Fundamentals of programming revision notes](/resources/a-computer-science-programming-revision-notes/)

These questions cover section **4.1.2 Programming paradigms** of the AQA AS and A-level Computer Science
specification (7517), Version 1.6: 4.1.2.1 the procedural and object-oriented paradigms, 4.1.2.2 procedural-oriented
programming (structured design and hierarchy charts) and 4.1.2.3 object-oriented programming (classes, objects,
instantiation, encapsulation, inheritance, aggregation, composition, polymorphism, overriding, design principles and
class diagrams). Code is written in Python-style pseudocode; answer in the language your school uses. For data
types, selection, iteration and subroutines, use the
[Fundamentals of programming practice questions](/resources/a-computer-science-programming-practice/).

## What does 4.1.2 require?

| Section | You must be able to |
|---|---|
| 4.1.2.1 | Describe the characteristics of the procedural and object-oriented paradigms |
| 4.1.2.2 | Explain the structured approach, draw and use hierarchy charts, and explain the approach's advantages |
| 4.1.2.3 | Explain class, object, instantiation, encapsulation, inheritance, aggregation, composition, polymorphism and overriding; explain why OOP is used and the three design principles; write OOP code with abstract, virtual and static methods and public, private and protected specifiers; draw and interpret class diagrams |

## Questions

**1.** Describe **two** characteristics of the procedural programming paradigm. **[2]**

**2.** A program to run a school library is to be designed using a structured approach.

**(a)** Explain what is meant by the structured approach to program design. **[2]**
**(b)** The top-level task "Library system" is broken down into "Manage members", "Manage loans" and "Produce
reports". "Manage loans" is broken down into "Issue book", "Return book" and "Calculate fine". Describe how this
would be shown on a hierarchy chart. **[3]**
**(c)** Explain **three** advantages of the structured approach. **[3]**

**3.** Define the following terms: **(a)** class; **(b)** object; **(c)** instantiation. **[3]**

**4.** Study this class definition.

```
CLASS BankAccount
    PRIVATE balance
    PRIVATE accountNumber
    PUBLIC PROCEDURE New(number)
        accountNumber = number
        balance = 0
    ENDPROCEDURE
    PUBLIC PROCEDURE Deposit(amount)
        IF amount > 0 THEN
            balance = balance + amount
        ENDIF
    ENDPROCEDURE
    PUBLIC FUNCTION GetBalance()
        RETURN balance
    ENDFUNCTION
ENDCLASS
```

**(a)** Identify the constructor. **[1]**
**(b)** Explain how this class shows encapsulation, and why this is useful. **[3]**
**(c)** Write a statement that creates an object of this class with account number 4471 and assigns a reference to
it to a variable called `acc`. **[1]**
**(d)** After the statements `acc.Deposit(50)`, `acc.Deposit(-20)` and `acc.Deposit(30)`, state the value returned
by `acc.GetBalance()`. **[1]**

**5.** `SavingsAccount` inherits from `BankAccount`. It adds a private attribute `interestRate` and a public method
`AddInterest()`.

**(a)** Explain what is meant by inheritance. **[2]**
**(b)** `balance` is declared private in `BankAccount`. Explain why `AddInterest()` cannot change `balance`
directly, and state the specifier that would allow it. **[2]**
**(c)** Draw (or describe) the class diagram for the two classes, showing the inheritance arrow and access
specifiers. **[3]**

**6.** A game has a class `Shape` with a method `Area()`. Classes `Circle` and `Rectangle` inherit from `Shape`, and
each has its own `Area()` method.

**(a)** Explain what is meant by overriding. **[1]**
**(b)** A list contains a `Circle` with radius 2 and a `Rectangle` 3 by 5. The program loops through the list calling
`Area()` on each. Explain how this demonstrates polymorphism, and calculate the value returned for each object
(use pi = 3.14). **[4]**
**(c)** `Shape.Area()` has no body and must be overridden. State the type of method `Area()` is in `Shape`, and
the consequence for creating `Shape` objects. **[2]**

**7.** Explain the difference between a **virtual** method and a **static** method. **[2]**

**8.** A `Car` object contains four `Wheel` objects that are created when the `Car` is created and destroyed with
it. A `Garage` object holds references to `Car` objects that exist independently.

**(a)** Identify which relationship is composition and which is aggregation. Explain your answer. **[3]**
**(b)** State how each relationship is shown on a UML class diagram. **[2]**

**9.** Explain what is meant by each object-oriented design principle:
**(a)** encapsulate what varies; **(b)** favour composition over inheritance; **(c)** program to interfaces, not
implementation. **[3]**

**10.** Explain **three** reasons why the object-oriented paradigm is used for large software projects. **[3]**

**11.** In a class diagram, an attribute is written as `# speed : Integer` and a method as
`+ Accelerate(amount : Integer)`. State what `#` and `+` mean. **[2]**

## Answers

**1.** Any two [1 each]: the program is a sequence of instructions executed in order; it is broken into procedures
/ functions (subroutines) that are called; data and the code that acts on it are kept separate; it uses
selection, iteration and sequence (structured constructs); variables can be local or global.

**2. (a)** The problem is broken down (top-down / stepwise refinement) into smaller sub-problems / modules [1], each
solved by a subroutine using sequence, selection and iteration, with clear interfaces (parameters) [1].
**(b)** "Library system" is a single box at the top [1]; "Manage members", "Manage loans" and "Produce reports" are
boxes on the next level, joined by lines to the top box [1]; "Issue book", "Return book" and "Calculate fine" are on
the level below, joined only to "Manage loans" [1].
**(c)** Any three [1 each]: modules can be written and tested independently, so errors are easier to find; tasks can
be shared between programmers; modules can be reused in other programs; programs are easier to read, understand
and maintain; a change to one module is less likely to affect others.

**3. (a)** A class is a template / blueprint that defines the attributes (properties) and methods common to a type
of object [1]. **(b)** An object is an instance of a class, with its own values for the attributes [1].
**(c)** Instantiation is creating an object from a class, using a constructor [1].

**4. (a)** `New(number)` [1].
**(b)** The attributes `balance` and `accountNumber` are private [1], so they can only be accessed through the public
methods `Deposit` and `GetBalance` [1]; this protects the data from invalid changes (for example `Deposit` rejects
negative amounts) / hides implementation, so the class can change internally without affecting other code [1].
**(c)** `acc = NEW BankAccount(4471)` (accept language-equivalent, for example `acc = BankAccount(4471)`) [1].
**(d)** 0 + 50 = 50; -20 is rejected; 50 + 30 = **80** [1].

**5. (a)** A subclass (child) takes on the attributes and methods of a superclass (parent) [1], and can add its own
attributes and methods or override inherited ones [1].
**(b)** Private members can be accessed only within the class that declares them, not by subclasses [1]; declaring
`balance` as **protected** would allow the subclass to access it [1].
**(c)** Two class boxes, each with name, attributes and methods sections [1]; an arrow with an unfilled (hollow)
triangle head pointing from `SavingsAccount` to `BankAccount` [1]; private attributes shown with `-` (`- balance`,
`- accountNumber`, `- interestRate`) and public methods with `+` (`+ Deposit(amount)`, `+ GetBalance()`,
`+ AddInterest()`) [1].

**6. (a)** A subclass provides its own version of a method inherited from its superclass, with the same name (and
parameters) [1].
**(b)** The same method call `Area()` is used for every object, but each object responds with its own class's
version [1]; the correct version is chosen at run time according to the object's class [1].
Circle: 3.14 x 2 x 2 = **12.56** [1]. Rectangle: 3 x 5 = **15** [1].
**(c)** An abstract method [1]; `Shape` becomes an abstract class, so `Shape` objects cannot be instantiated (only
objects of its subclasses) [1].

**7.** A virtual method has an implementation in the superclass that a subclass may override [1]. A static method
belongs to the class itself rather than any object, so it can be called without instantiating an object (and
cannot access an object's attributes) [1].

**8. (a)** `Car`–`Wheel` is composition [1], because the wheels are created and destroyed with the car / cannot
exist without it [1]. `Garage`–`Car` is aggregation, because the cars exist independently of the garage [1].
**(b)** Composition: a line with a black (filled) diamond at the containing class (`Car`) [1]. Aggregation: a line with
a white (hollow) diamond at the containing class (`Garage`) [1].

**9. (a)** Identify the parts of a program likely to change and keep them separate (encapsulated) from the parts that
stay the same, so changes affect less code [1]. **(b)** Build classes by containing objects of other classes rather
than by deep inheritance hierarchies, which is more flexible and avoids tight coupling to a parent class [1].
**(c)** Code should depend on the methods an object offers (its interface), not on how a particular class
implements them, so implementations can be swapped [1].

**10.** Any three [1 each]: classes model real-world entities, making design easier to understand; encapsulation
protects data and reduces unintended side effects; inheritance and composition allow code reuse; classes can be
developed and tested independently by different programmers; programs are easier to maintain and extend, as new
subclasses can be added without changing existing code (polymorphism).

**11.** `#` means protected: accessible in the class and its subclasses [1]. `+` means public: accessible from
outside the class [1].

## Where marks are usually lost

- Defining a class and an object as the same thing.
- Saying private attributes are "hidden from the user" without saying they are only accessible through methods.
- Confusing the black diamond (composition) and white diamond (aggregation).
- Saying a subclass can access private attributes of its superclass.
- Describing polymorphism without saying the same method call gives different behaviour depending on the object.
- Drawing hierarchy chart lines between boxes on the same level.

## Frequently asked questions

**Will I have to program to an interface in the exam?**
No. The specification says students will not be explicitly tested on programming to interfaces, or required to
program to interfaces in any practical exam, though they should be aware of the principle.

**What is the difference between overriding and polymorphism?**
Overriding is a subclass redefining an inherited method. Polymorphism is the ability to call that method on objects
of different classes and get each class's own behaviour.

**Which class diagram features are examined?**
Single inheritance, composition (black diamond), aggregation (white diamond), and public (+), private (-) and
protected (#) specifiers.

## Official syllabus

AQA AS and A-level Computer Science (7516/7517) specification, Version 1.6 (31 July 2023), section 4.1 Fundamentals of
programming, 4.1.2 Programming paradigms (4.1.2.1 to 4.1.2.3).
