---
resourceId: "mb-ap-csp-3.12-study-guide"
title: "Calling Procedures: Study Guide (Computer Science Principles 3.12)"
description: "What procedures, parameters and arguments are, how a call interrupts and returns control, the difference between DISPLAY and RETURN, and how to trace calls. Two worked examples including early return."
course: "computer-science-principles"
unit: 3
topics: ["3.12"]
resourceType: "study-guide"
prerequisites:
  - "Variables and assignment (Topic 3.1)"
  - "Mathematical expressions (Topic 3.3)"
  - "Lists (Topic 3.10)"
prerequisiteResources: ["mb-ap-csp-3.1-study-guide"]
learningObjectives:
  - "Distinguish parameters from arguments and match them by position"
  - "Trace a procedure call, including the value returned and where control resumes"
  - "Distinguish DISPLAY from RETURN, and a call used as a statement from a call used as an expression"
  - "Use INPUT and procedure calls inside expressions"
skills: ["3", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.12-revision-notes", "mb-ap-csp-3.12-practice", "mb-ap-csp-3.12-checklist"]
next: "mb-ap-csp-3.12-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "A procedure is a named group of instructions that may have parameters and return a value."
  - "Parameters are the input variables in the definition; arguments are the values given in the call, matched by position."
  - "A call interrupts sequential execution; after the last statement or a RETURN, control resumes immediately after the call."
  - "DISPLAY shows a value to the user; RETURN sends a value back to the caller and ends the procedure."
  - "A call that returns a value can be used inside an expression or assigned: result ← procName(arg1, arg2)."
faqs:
  - question: "What is the difference between a parameter and an argument?"
    answer: "A parameter is an input variable named in the procedure definition. An argument is the value supplied for that parameter when the procedure is called."
  - question: "What does RETURN do?"
    answer: "It sends the value of its expression back to the point where the procedure was called and ends the procedure immediately."
  - question: "Where does the program continue after a procedure call?"
    answer: "At the point immediately following the call, using the returned value if there is one."
  - question: "Is a procedure the same as a function or method?"
    answer: "The names vary by language. The exam uses the word procedure for all of them."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

You use procedures every day without noticing. When you press "send" you do not think about how the message is packed up and delivered; you just call on that service. In programming, a **procedure** is a named group of instructions that you can **call** whenever you need its job done. This topic is about *using* procedures: how a call works, what parameters and arguments are, how a procedure gives a value back, and how to trace the flow of control when a program jumps into a procedure and out again. Topic 3.13 then shows how to write your own.

**Notation.** The exam uses its own pseudocode, not a real programming language. The code in this pack is Marlbridge's rendering of that reference notation, not a copy of the official sheet: `←` is assignment, `=` tests equality, lists start at index 1, `DISPLAY` shows a value, and braces mark blocks. Use the Exam Reference Sheet from your teacher for the official wording.

## What a procedure is

A **procedure** is a named group of programming instructions. It may have **parameters** and it may **return a value**. Different languages call procedures by different names, such as *method* or *function*; the exam uses "procedure".

Two words are easy to mix up:

- A **parameter** is an *input variable* of the procedure, named where the procedure is defined.
- An **argument** is the *actual value* supplied for a parameter when the procedure is called.

In `PROCEDURE rectArea(width, height)` the names `width` and `height` are parameters. In the call `rectArea(3, 4)` the values 3 and 4 are arguments: `3` is assigned to `width` and `4` to `height`, in order.

## Calling a procedure and the flow of control

A procedure call **interrupts the sequential execution** of statements. The program jumps into the procedure, runs the statements inside it, and when the last statement (or a `RETURN`) has executed, flow of control **returns to the point immediately following the call**, and the program carries on.

The notation for a call is `procName(arg1, arg2, ...)`, with zero or more arguments. A procedure can be used in two ways.

1. **As a statement.** The call stands on its own line and only its **effect** matters, such as displaying something.
2. **As an expression.** The call produces a value that is used straight away, for example `result ← procName(arg1, arg2)`, or inside a larger expression, `total ← price + tax(price)`. The call is **replaced by the returned value** before the rest of the line is evaluated.

<figure>
<svg viewBox="0 0 640 200" role="img" aria-labelledby="f312-t f312-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="14">
<title id="f312-t">A procedure call passes arguments in and returns a value</title>
<desc id="f312-d">Two boxes. On the left, the caller contains the statement result gets rectArea of 3 and 4. On the right, the procedure rectArea has parameters width and height. A solid arrow labelled arguments goes from the caller to the procedure carrying 3 and 4. A dashed arrow goes back from the procedure to the caller labelled returns 12, which is then stored in result.</desc>
<rect x="0" y="0" width="640" height="200" fill="#ffffff"/>
<defs><marker id="f312-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="20" y="40" width="200" height="110" rx="8" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="120" y="30" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d2b44">Caller</text><text x="120" y="98" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">result ← rectArea(3, 4)</text><rect x="420" y="40" width="200" height="110" rx="8" fill="#fff4d6" stroke="#1d2b44" stroke-width="2"/><text x="520" y="30" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d2b44">Procedure</text><text x="520" y="90" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">rectArea(width, height)</text><text x="520" y="107" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">RETURN(width * height)</text><line x1="220" y1="75" x2="415" y2="75" stroke="#1d2b44" stroke-width="2" marker-end="url(#f312-a)"/><text x="318" y="66" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">arguments</text><line x1="420" y1="125" x2="225" y2="125" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#f312-a)"/><text x="318" y="148" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">returns 12</text>
</svg>
<figcaption>Figure 1. The caller sends arguments in order; the procedure runs; <code>RETURN</code> sends the value back to exactly where the call was made.</figcaption>
</figure>

## Tools the reference sheet provides

| Procedure | What it does | Example |
|---|---|---|
| `DISPLAY(expression)` | Shows the value of the expression, followed by a space | `DISPLAY(a + 1)` |
| `INPUT()` | Accepts a value from the user and returns it | `n ← INPUT()` |
| `RETURN(expression)` | Inside a procedure: sends a value back to the caller and ends the procedure immediately | `RETURN(width * height)` |
| `RANDOM(a, b)` | Returns a random integer from a to b inclusive (Topic 3.15) | `RANDOM(1, 6)` |

Notice the difference between **displaying** a value and **returning** one. `DISPLAY` shows something to the user and gives nothing back to the program. `RETURN` gives a value back to the program (the caller) and displays nothing. Mixing the two up is a classic error.

## Worked example 1: tracing calls

Trace this program and state what is displayed.

```text
PROCEDURE rectArea(width, height)
{
  RETURN(width * height)
}
a ← rectArea(3, 4)
b ← rectArea(a, 2)
DISPLAY(a + b)
```

Output: `36`

| Step | What happens | Values |
|---|---|---|
| 1 | Definition. The program only records the procedure; nothing runs yet. | – |
| 2 | `rectArea(3, 4)`: width = 3, height = 4. `RETURN(3 * 4)` gives 12. `a ← 12`. | a = 12 |
| 3 | `rectArea(a, 2)`: `a` is 12 so width = 12, height = 2. Returns 24. `b ← 24`. | b = 24 |
| 4 | `DISPLAY(a + b)` shows 12 + 24. | 36 |

**Check.** The result 36 is plausible: 12 + 24. A slip would be to treat `width` and `height` as variables that already exist in the main program; they exist only while the procedure runs.

**Order of arguments matters.** Arguments are matched to parameters by position. With `PROCEDURE diff(first, second) { RETURN(first - second) }`:

```text
PROCEDURE diff(first, second)
{
  RETURN(first - second)
}
DISPLAY(diff(10, 4))
DISPLAY(diff(4, 10))
```

Output: `6 -6`

Swapping the arguments swaps `first` and `second`, so the result changes sign.

## Worked example 2: side effects, early return and flow of control

A procedure can have effects (such as displaying) as well as a returned value. This one also uses `RETURN` early.

```text
PROCEDURE check(n)
{
  IF(n < 0)
  {
    DISPLAY("negative")
    RETURN(0)
  }
  DISPLAY("ok")
  RETURN(n * 2)
}
x ← check(5)
y ← check(-3)
DISPLAY(x + y)
```

Output: `ok negative 10`

| Step | Call | Inside the procedure | Returned | Displayed so far |
|---|---|---|---|---|
| 1 | `check(5)` | `5 < 0` is false, so skip the IF. Display `ok`. `RETURN(5 * 2)` | 10 | `ok` |
| 2 | `x ← 10` |  |  | `ok` |
| 3 | `check(-3)` | `-3 < 0` is true: display `negative`. `RETURN(0)` leaves **immediately**; the lines after it do not run | 0 | `ok negative` |
| 4 | `y ← 0` |  |  |  |
| 5 | `DISPLAY(x + y)` |  |  | `ok negative 10` |

**Check.** The two displays inside the procedure happen *during* the calls, before the final `DISPLAY`. A `RETURN` ends the procedure at once, so the line `DISPLAY("ok")` is not reached when `n` is negative. Notice also that a procedure call is complete before the next statement begins: the program never "goes back" into a procedure it has finished.

**Taking input.** `INPUT()` is a procedure that returns a value typed by the user. With the user typing 7:

```text
n ← INPUT()
DISPLAY(n * 2)
```

Output: `14`

The call is replaced by the value returned (7), which is stored in `n`.

## Reading a call correctly

Use this checklist whenever a procedure call appears in code.

1. **Find the definition** and write down its parameters in order.
2. **Match the arguments to the parameters** by position and record the values.
3. **Run the body** with those values, tracking any `DISPLAY` output.
4. **Note the returned value**, if any. A call that returns a value is replaced by it.
5. **Resume** at the point just after the call, using the returned value in the expression.

A procedure is also a form of **abstraction**: you can call `rectArea` without knowing how it multiplies. That idea, using a procedure only knowing *what* it does, is the heart of Topic 3.13.

## Arguments and calls can be any expression

An argument does not have to be a plain value. It can be a variable, an arithmetic expression, a list or even another call; the program evaluates it first and then passes the result. A call that returns a Boolean can also be used as a condition, which keeps the decision readable:

```text
PROCEDURE isEven(n)
{
  RETURN(n MOD 2 = 0)
}
x ← 6
IF(isEven(x + 1))
{
  DISPLAY("even")
}
ELSE
{
  DISPLAY("odd")
}
```

Output: `odd`

Here the argument `x + 1` is evaluated first (7), the call returns `false`, and the ELSE block runs. Naming the test `isEven` makes the IF read almost like English. This is one reason procedures help with clarity as well as with reuse.

## Common misconceptions

- **"Parameters and arguments are the same thing."** A parameter is the name inside the definition; an argument is the value in the call.
- **"Arguments can be given in any order."** They are matched to parameters by position.
- **"DISPLAY and RETURN do the same job."** `DISPLAY` shows a value to the user; `RETURN` gives a value back to the calling code and ends the procedure.
- **"Code after a RETURN still runs."** A `RETURN` causes an immediate return to the call.
- **"A procedure runs when it is defined."** It runs only when called.
- **"Variables in a procedure's body are the same as the caller's variables."** Parameters are new variables that receive the argument values when the call is made.


## Where this leads

Next, Topic 3.13 shows how to develop your own procedures with parameters, why procedural abstraction manages complexity, and how to explain it for the Create performance task.

Next steps: try the [practice questions](/advanced-course-resources/computer-science-principles/3-12-calling-procedures-practice/), skim the [revision notes](/advanced-course-resources/computer-science-principles/3-12-calling-procedures-revision-notes/) the night before, and tick off the [topic checklist](/advanced-course-resources/computer-science-principles/3-12-calling-procedures-checklist/). The next topic is [Topic 3.13, Developing Procedures](/advanced-course-resources/computer-science-principles/3-13-developing-procedures-study-guide/).
