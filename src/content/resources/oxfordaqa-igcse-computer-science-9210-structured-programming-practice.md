---
title: "OxfordAQA IGCSE Computer Science (9210): Structured programming -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 2 – Programming"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 2.11
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "structured-programming-9210"
description: "Original OxfordAQA IGCSE Computer Science 9210 practice questions with answers on modular design, interfaces, local variables and structured programming."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-17
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Structured programming study guide](/resources/oxfordaqa-igcse-computer-science-9210-structured-programming/) | [Structured programming revision notes](/resources/oxfordaqa-igcse-computer-science-9210-structured-programming-revision-notes/)

These questions cover section 3.2.11 Structured programming of the OxfordAQA International GCSE Computer Science
(9210) specification.

---

## Section A

**1.** State what is meant by **modularised programming**. **[1]**

**2.** State what is meant by a **local variable**, and give **one** reason for using local variables. **[2]**

**3.** State **two** items of information that should be included in the documented interface of a subroutine.
**[2]**

**4.** State the term used in exam material for the values passed to a subroutine when it is called. **[1]**

## Section B

**5.** Describe the structured approach to programming. **[4]**

**6.** A fitness app must: read the user's daily step counts for a week; check each value is from 0 to 100,000;
calculate the weekly total and daily mean; and display a summary with a message if the mean is below a target.

**(a)** Suggest **three** modules (subroutines) for this program. For each, give its name, its parameters and
what it returns (if anything). **[6]**
**(b)** Explain how one of your modules could be tested before the rest of the program is written. **[2]**

**7.** Study this subroutine:

```
SUBROUTINE Discount(price, percent)
  saving ← price * percent / 100
  RETURN price - saving
ENDSUBROUTINE
```

**(a)** Identify the local variable. **[1]**
**(b)** Write a documentation comment describing the interface of `Discount`. **[3]**
**(c)** The main program also uses a variable called `saving` to hold a customer's savings account balance.
Explain why calling `Discount` does not change the main program's `saving`. **[2]**

**8.** A programmer writes a game in which every subroutine reads and changes the same program-wide variables
`score`, `lives` and `level`. Explain **two** problems this could cause, and how the structured approach avoids
them. **[4]**

**9.** A company is replacing the routine that calculates delivery charges in its online shop. The routine is a
function `DeliveryCharge(weight, distance)` that returns a real. Explain why, in a structured program, the rest
of the shop software does not need to change, and state the condition that must be met for this to be true.
**[3]**

**10.** Explain **two** advantages of the structured approach for a team of five programmers writing a hospital
appointment system. **[4]**

**11.** Rewrite this code in a structured way, using a function `Hypotenuse(a, b)` with a documented interface.
`SQRT` returns the square root of a number.

```
OUTPUT "Enter side a"
x ← STRING_TO_REAL(USERINPUT)
OUTPUT "Enter side b"
y ← STRING_TO_REAL(USERINPUT)
OUTPUT SQRT(x * x + y * y)
```

**[4]**

**12.** A student says: "Structured programming just means using lots of subroutines." Explain why this
description is incomplete. **[2]**

---

## Answers

**1.** Splitting a program into separate modules (subroutines), each of which carries out one specific task [1].

**2.** A variable that is declared inside a subroutine and can only be used there, existing only while the
subroutine runs [1]. Reason: it cannot be changed by other parts of the program, so modules do not interfere with
each other (or: the same name can be reused safely in different subroutines) [1].

**3.** Any two: the subroutine's name and purpose [1]; its parameters with their data types [1]; its return value
and its data type. (Maximum 2.)

**4.** Parameter [1].

**5.** Any four: the program is decomposed into modules (subroutines) [1]; each module carries out a single,
well-defined task [1]; data is passed into modules through parameters [1]; results are passed back using return
values [1]; modules use local variables; each module has a clear, documented interface. (Maximum 4.)

**6.** **(a)** One mark for a sensible module name and purpose, and one for suitable parameters and return value,
for each of three modules. For example:
- `GetSteps()`, no parameters, returns a valid integer from 0 to 100,000 after checking the input [1] [1].
- `WeeklyTotal(steps)`, takes the array of seven counts, returns their total as an integer [1] [1].
- `ShowSummary(total, mean, target)`, takes three values, returns nothing (a procedure that outputs the summary)
  [1] [1].

Also accept `Mean(total, days)` returning a real, or `IsValid(value)` returning a Boolean.
**(b)** Call it on its own with chosen test values, for example `WeeklyTotal` with an array whose total is known
[1], and compare the returned value with the expected result [1].

**7.** **(a)** `saving` [1].
**(b)** For example: "Discount: returns the price after a percentage discount" [1]; "Parameters: price (real),
percent (real or integer, 0 to 100)" [1]; "Returns: real, the reduced price" [1].
**(c)** `saving` inside `Discount` is a local variable that exists only while the subroutine runs [1]; it is a
separate variable from the main program's `saving`, so changing it has no effect outside the subroutine [1].

**8.** Any subroutine can change the values, so a bug in one part (such as wrongly resetting `lives`) affects the
whole game and is hard to trace [1]; subroutines depend on each other's hidden use of the variables, so they
cannot be tested or reused separately [1]. The structured approach passes the values in as parameters and back as
return values [1], and uses local variables inside each subroutine, so each module only works on data it has been
given [1].

**9.** Other parts of the program only use the function through its interface: they pass a weight and a distance
and receive a real [1]. The code inside the function can be replaced without affecting the callers [1], provided
the interface stays the same: the same name, parameters and type of return value [1].

**10.** Any two, each with an explanation:
- Work can be divided so each programmer writes different modules at the same time [1], so the system is finished
  sooner [1].
- Agreed, documented interfaces mean each programmer can use the others' modules without reading their code [1],
  so modules fit together when combined [1].

Also accept, with the same two-mark split: each module can be tested separately before integration, so errors are
traced to one programmer's module; local variables mean one programmer's code cannot accidentally change another's
data.

**11.** One possible answer:

```
-- Hypotenuse: returns the length of the longest side of a right-angled triangle
-- Parameters: a, b (real), the two shorter sides
-- Returns: real
SUBROUTINE Hypotenuse(a, b)
  RETURN SQRT(a * a + b * b)
ENDSUBROUTINE

OUTPUT "Enter side a"
x ← STRING_TO_REAL(USERINPUT)
OUTPUT "Enter side b"
y ← STRING_TO_REAL(USERINPUT)
OUTPUT Hypotenuse(x, y)
```

Function with two parameters [1]; calculation returned, not output, inside the function [1]; documented interface
[1]; main program calls the function with the inputs and outputs the result [1].

**12.** Using subroutines is only one part [1]; the approach also requires each module to have a clear, documented
interface, with data passed in by parameters, results passed back by return values, and local variables used
inside modules [1].

---

## Where marks are usually lost

- Describing the structured approach with only one or two points.
- Suggesting modules without parameters or return values in Question 6.
- Saying a local variable "can be used by the whole program".
- Forgetting the condition that the interface must stay the same in Question 9.
- Outputting the result inside `Hypotenuse` instead of returning it.
