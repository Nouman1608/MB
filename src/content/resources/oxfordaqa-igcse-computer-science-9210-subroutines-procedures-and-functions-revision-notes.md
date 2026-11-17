---
title: "OxfordAQA IGCSE Computer Science (9210): Subroutines (procedures and functions) -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 2 – Programming"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 2.10
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "subroutines-procedures-and-functions-9210"
description: "Revision notes for OxfordAQA IGCSE Computer Science 9210 section 3.2.10: procedures, functions, parameters, return values, advantages, traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-17
featured: false
---

Condensed notes for section **3.2.10 Subroutines (procedures and functions)** of OxfordAQA International GCSE
Computer Science (9210). Worked traces are in the [subroutines study
guide](/resources/oxfordaqa-igcse-computer-science-9210-subroutines-procedures-and-functions/).

## What the specification asks

- Understand the **concept**: a subroutine is a **named "out of line" block of code** that is executed (**called**)
  by writing its name in a program statement.
- **Explain the advantages** of subroutines.
- **Use and describe parameters** to pass data in, including subroutines with **more than one** parameter.
- **Use subroutines that return values** and describe how data is passed out.

## How a call works

1. The call statement is reached.
2. Values are passed into the parameters, **in order**.
3. Execution jumps to the subroutine and runs its code.
4. A function's `RETURN` sends a value back; a procedure just finishes.
5. Execution continues **after** the call.

## Procedure or function?

| | Procedure | Function |
|---|---|---|
| Returns a value | No | Yes (`RETURN`) |
| Called as | A statement: `DrawGrid(8)` | Part of an expression: `t ← Total(a, b)` |
| Typical job | Output, display, update | Calculate, check, convert |

Exam material uses **"parameter"** for both the names in the definition and the values in the call (you may meet
"argument" elsewhere).

## Template code

```
SUBROUTINE Average(a, b, c)          -- function with three parameters
  RETURN (a + b + c) / 3
ENDSUBROUTINE

SUBROUTINE Greet(name, times)        -- procedure with two parameters
  FOR i ← 1 TO times
    OUTPUT "Hello " + name
  ENDFOR
ENDSUBROUTINE

mean ← Average(6, 9, 12)             -- mean = 9
Greet("Zara", 2)                     -- outputs Hello Zara twice
```

## Describing data flow (model wording)

- **In:** "Values are passed to the subroutine as parameters in the call; each value is copied into the matching
  parameter in the order they are listed."
- **Out:** "The function uses a return statement to pass a value back to the calling routine, where it can be
  stored in a variable or used in an expression."

## Advantages (each with its reason)

| Advantage | Why it helps |
|---|---|
| Code written once, called many times | Shorter program, fewer chances for errors |
| One place to change | A fix or update applies to every call |
| Tested independently | Errors found and fixed before parts are combined |
| Reusable | Can be used in other programs, saving time |
| Readable main program | Calls with meaningful names describe the steps |
| Work shared in a team | Programmers write different subroutines at once |

## Mini trace: a function used inside a loop

```
SUBROUTINE Square(n)
  RETURN n * n
ENDSUBROUTINE

total ← 0
FOR k ← 1 TO 3
  total ← total + Square(k)
ENDFOR
OUTPUT total
```

| k | Value passed | Value returned | total |
|---|---|---|---|
| 1 | 1 | 1 | 1 |
| 2 | 2 | 4 | 5 |
| 3 | 3 | 9 | 14 |

Output: **14**. Each pass makes a new call with the current value of `k`; the returned value replaces
`Square(k)` in the expression.

## Key terms

| Term | Meaning |
|---|---|
| Subroutine | A named, out-of-line block of code that runs when called |
| Call | A statement that runs a subroutine by using its name |
| Procedure | A subroutine that carries out a task and does not return a value |
| Function | A subroutine that returns a value to the calling routine |
| Parameter | A value passed into a subroutine, or the variable that receives it |
| Return value | The value a function sends back to the calling routine |
| Calling routine | The part of the program that called the subroutine |

## Exam traps

- **OUTPUT is not RETURN**: an output cannot be used by the calling routine.
- **Order matters**: `Power(2, 5)` and `Power(5, 2)` differ.
- **Count the parameters**: a call needs one value for each parameter.
- **Procedures cannot be assigned**: `x ← Greet("Zara", 2)` is wrong.
- **`RETURN` ends the function**: code after it in the same branch is not run.
- **Vague advantages**: "it's efficient" or "it's easier" earns nothing without a reason.

## Self-test

1. Define the term subroutine.
2. State the difference between a procedure and a function.
3. Explain what is meant by a parameter.
4. A function is defined as `SUBROUTINE Area(w, h)` and returns `w * h`. State the value of `Area(3, 7)`.
5. Write a call that passes the values 10 and 4 into `Area` and stores the result in `room`.
6. State what happens to execution when a subroutine finishes.
7. Explain why a function that outputs its answer instead of returning it is less useful.
8. Give two advantages of subroutines, each with a reason.
9. `SUBROUTINE Sub(a, b)` returns `a - b`. State the value of `Sub(2, 9)`.
10. Name one built-in subroutine from string handling or random number generation.
11. What term does the exam use for the values in a call?
12. Identify the error: `total ← PrintTotal(prices)` where `PrintTotal` is a procedure.

**Answers:**
1. A named, out-of-line block of code that runs when its name is written in a program statement.
2. A function returns a value to the calling routine; a procedure does not.
3. A value passed into a subroutine when it is called (and the variable in the definition that receives it).
4. 21.
5. `room ← Area(10, 4)`.
6. It returns to the statement just after the call and continues.
7. The calling routine cannot store or use the result in further calculations; it only appears on screen.
8. Any two from the advantages table, each with its reason.
9. −7.
10. Any one, for example `LEN`, `SUBSTRING`, `RANDOM_INT`, `STRING_TO_INT`.
11. Parameter.
12. A procedure does not return a value, so nothing can be assigned to `total`.

## Related resources

- [Subroutines study guide](/resources/oxfordaqa-igcse-computer-science-9210-subroutines-procedures-and-functions/)
- [Subroutines practice questions](/resources/oxfordaqa-igcse-computer-science-9210-subroutines-procedures-and-functions-practice/)
- [Structured programming revision notes](/resources/oxfordaqa-igcse-computer-science-9210-structured-programming-revision-notes/)
