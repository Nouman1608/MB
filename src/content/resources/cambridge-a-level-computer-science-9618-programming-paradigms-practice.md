---
title: "Cambridge A Level Computer Science (9618): Programming Paradigms -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 20: Further Programming"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "A"
order: 20.1
syllabusTopics:
  - qualification: "a-level"
    topic: "further-programming"
    subtopic: "programming-paradigms"
description: "Original 9618 practice questions with answers on addressing modes, low-level traces and code, OOP class design and declarative facts, rules and goals."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Programming paradigms study guide](/resources/cambridge-a-level-computer-science-9618-programming-paradigms/) · [Programming paradigms revision notes](/resources/cambridge-a-level-computer-science-9618-programming-paradigms-revision-notes/)

Questions 5 to 7 use the instruction set from the syllabus: one accumulator (ACC) and an index register (IX).

---

## Section A

**1.** Explain what is meant by a programming paradigm. **[2]**

**2.** Memory holds these values, and IX contains 1.

| Address | Contents |
|---|---|
| 50 | 80 |
| 51 | 12 |
| 80 | 99 |

State the contents of ACC after each instruction is executed on its own.

**(a)** LDM #50 **[1]**

**(b)** LDD 50 **[1]**

**(c)** LDI 50 **[1]**

**(d)** LDX 50 **[1]**

**3.** Explain what is meant by relative addressing, and give **one** benefit of using it. **[2]**

**4.** State **two** differences between imperative and declarative programming. **[2]**

## Section B

**5.** Study this low-level program.

```
        LDM #0
        STO RESULT
LOOP:   LDD RESULT
        ADD NUM
        STO RESULT
        LDD COUNT
        DEC ACC
        STO COUNT
        CMP #0
        JPN LOOP
        END
NUM:    6
COUNT:  3
RESULT: 0
```

**(a)** Trace the program, showing the values of RESULT and COUNT each time the comparison is made. **[3]**

**(b)** State the purpose of the program. **[1]**

**6.** The address of a value is stored at the location labelled P. Write low-level code that adds 5 to that value and stores the result at the location labelled ANSWER. **[3]**

**7.** Write low-level code that repeatedly inputs a character and outputs it, stopping without output when the character `*` (ASCII code 42) is input. **[4]**

**8.** A toll road charges vehicles. Every vehicle has a registration and a number of axles. A van also has a maximum load. The toll for a van is a fixed £6.00. A fleet company owns many vehicles.

**(a)** Identify the classes needed, with **one** attribute for each, and state the relationship between them. **[3]**

**(b)** The class Vehicle has the constructor NEW(GivenReg : STRING, GivenAxles : INTEGER). Write pseudocode for the class Van, including a constructor and a method CalculateToll() that returns the van's toll. **[4]**

**(c)** Vehicle also has a method CalculateToll(). Explain how this is an example of polymorphism. **[2]**

**9.** A declarative program contains:

```
01 part(engine, piston).
02 part(engine, valve).
03 part(car, engine).
04 part(car, wheel).
05 part(wheel, tyre).
06 contains(X, Y) IF part(X, Y).
07 contains(X, Y) IF part(X, Z) AND part(Z, Y).
```

**(a)** State the result of the goal `part(engine, P).` **[2]**

**(b)** State whether the goal `contains(car, tyre).` succeeds, and explain why. **[2]**

**(c)** Write a fact stating that a bicycle has a wheel. **[1]**

**(d)** List, in order, every value of Y returned by the goal `contains(car, Y).` **[3]**

**10.** A software house is writing a large booking system. Compare imperative programming and object-oriented programming for this task. **[4]**

---

## Answers

**1.** A paradigm is a style or approach to programming [1], with its own way of structuring a solution and its own language features, such as classes in object-oriented programming or facts and rules in declarative programming [1].

**2. (a)** **50** [1].

**(b)** **80** [1].

**(c)** **99** (address 50 holds 80; address 80 holds 99) [1].

**(d)** **12** (address 50 + IX 1 = 51) [1].

**3.** The address is given as an offset from the address of the current instruction (or a base address), not as a fixed memory address [1]. Benefit: the code can be loaded into and run from any part of memory without changing its addresses [1].

**4.** Any two: imperative code gives the steps to solve the problem, declarative code states facts and rules about it [1]; in imperative code the programmer controls the order of execution, in declarative code the language's search decides it [1]; imperative programs change the values of variables by assignment, declarative programs do not [1].

**5. (a)**

| Comparison | RESULT | COUNT |
|---|---|---|
| 1st | 6 | 2 |
| 2nd | 12 | 1 |
| 3rd | 18 | 0 |

1 mark per correct row [3]; after the third comparison COUNT is 0, so the jump is not taken and the program ends.

**(b)** It multiplies NUM by COUNT (6 × 3 = 18) by repeated addition, storing the result in RESULT [1].

**6.** Example answer:

```
        LDI P
        ADD #5
        STO ANSWER
        END
```

LDI P to load the value using indirect addressing [1]; ADD #5 [1]; STO ANSWER [1].

**7.** Example answer:

```
LOOP:   IN
        CMP #42
        JPE DONE
        OUT
        JMP LOOP
DONE:   END
```

IN to input a character [1]; CMP #42 to test for `*` [1]; JPE to leave the loop before output when equal [1]; OUT followed by JMP back to the start of the loop [1].

**8. (a)** Vehicle with Registration (or Axles) [1]; Van with MaxLoad, which inherits from Vehicle [1]; Fleet with an array (collection) of Vehicle objects, which is containment / aggregation [1].

**(b)** Example answer:

```
CLASS Van INHERITS Vehicle
   PRIVATE MaxLoad : INTEGER
   PUBLIC PROCEDURE NEW(GivenReg : STRING, GivenAxles : INTEGER, GivenLoad : INTEGER)
      SUPER.NEW(GivenReg, GivenAxles)
      MaxLoad ← GivenLoad
   ENDPROCEDURE
   PUBLIC FUNCTION CalculateToll() RETURNS REAL
      RETURN 6.00
   ENDFUNCTION
ENDCLASS
```

Class header with INHERITS Vehicle and PRIVATE MaxLoad [1]; constructor with three parameters [1]; SUPER.NEW called with the registration and axles, and MaxLoad assigned [1]; CalculateToll function returning 6.00 [1].

**(c)** Van overrides the CalculateToll() method it inherits from Vehicle [1], so calling CalculateToll() on a Van object runs the Van version and returns £6.00, while other vehicles run the Vehicle version: the same method name behaves differently in different classes [1].

**9. (a)** P = **piston** [1]; P = **valve** [1].

**(b)** It **succeeds** [1]: rule 07 matches with Z = wheel, because part(car, wheel) and part(wheel, tyre) are both facts [1].

**(c)** `part(bicycle, wheel).` [1]

**(d)** From rule 06: **engine, wheel** [1]. From rule 07, with Z = engine: **piston, valve** [1]; with Z = wheel: **tyre** [1].

**10.** Any four, as comparison points:
- Imperative programs keep data separate from the procedures that change it, so in a large system any procedure can alter shared data; OOP encapsulates data inside objects, so it can be changed only through their methods [1].
- OOP classes such as Booking or Customer map directly onto things in the problem, which makes a large design easier to understand and divide among a team [1].
- Inheritance lets new types (for example a group booking) reuse existing code; imperative code would need new procedures or extra selection [1].
- Polymorphism lets each type handle a shared method in its own way without testing the type of each item [1].
- Imperative code can be simpler and quicker to write for small, step-by-step tasks within the system [1].

---

## Where marks are usually lost

- Giving 80 for LDI 50 (that is direct addressing) or 51 for LDX 50 (that is the address, not its contents).
- Using a jump such as "jump if greater", which is not in the instruction set.
- Placing OUT before the comparison, so the `*` is output.
- Forgetting SUPER.NEW in the subclass constructor.
- Naming polymorphism without saying the method is overridden.
- Writing declarative constants with capital letters, which turns them into variables.
- Stopping after the first answer to a goal that has several.
