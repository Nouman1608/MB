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
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-17
reviewNote: "2026-11-17: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-subroutines-procedures-and-functions--01-call-jump-return.webp" width="900" height="660" alt="The main program calls ShowBanner(), outputs &quot;Question 1&quot;, then calls ShowBanner() again. Each call jumps to the separately written subroutine, runs its three OUTPUT statements, and returns to just after the call, so the banner appears before and after Question 1." loading="lazy">
  <figcaption>A subroutine runs only when called: jump, run, return to just after the call.</figcaption>
</figure>

## Procedure or function?

| | Procedure | Function |
|---|---|---|
| Returns a value | No | Yes (`RETURN`) |
| Called as | A statement: `DrawGrid(8)` | Part of an expression: `t ← Total(a, b)` |
| Typical job | Output, display, update | Calculate, check, convert |

Exam material uses **"parameter"** for both the names in the definition and the values in the call (you may meet
"argument" elsewhere).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-subroutines-procedures-and-functions--02-procedure-vs-function.webp" width="900" height="570" alt="A procedure such as ShowBanner() carries out a task, returns nothing and is called as a statement on its own. A function such as Area in area ← Area(4, 3) calculates a value and sends it back with RETURN, so it is called as part of an expression." loading="lazy">
  <figcaption>Both are subroutines; only a function returns a value to its caller.</figcaption>
</figure>

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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-subroutines-procedures-and-functions--06-grade-function.webp" width="900" height="624" alt="The function Grade(mark) returns &quot;Pass&quot; if mark ≥ 40 and &quot;Fail&quot; otherwise. The call OUTPUT Grade(STRING_TO_INT(USERINPUT)) passes the user’s input, converted from a string to an integer, into Grade and outputs the returned grade. Keeping input and output in the caller lets Grade be reused for marks from a file or an array." loading="lazy">
  <figcaption>Pass data in as a parameter and return the result; leave input and output to the caller.</figcaption>
</figure>

## Describing data flow (model wording)

- **In:** "Values are passed to the subroutine as parameters in the call; each value is copied into the matching
  parameter in the order they are listed."
- **Out:** "The function uses a return statement to pass a value back to the calling routine, where it can be
  stored in a variable or used in an expression."

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-subroutines-procedures-and-functions--03-parameters-in-order.webp" width="900" height="868" alt="ShowLine(symbol, length) is called with ShowLine(&quot;*&quot;, 5): &quot;*&quot; is copied into symbol and 5 into length, so it outputs *****. ShowLine(&quot;-&quot;, 3) outputs ---. Swapping the values, ShowLine(5, &quot;*&quot;), puts a number in symbol and a string in length, which breaks the loop." loading="lazy">
  <figcaption>Each value in the call is copied into the parameter in the same position.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-subroutines-procedures-and-functions--04-return-value.webp" width="900" height="697" alt="cost ← PriceAfterDiscount(80.0, 25) copies 80.0 into price and 25 into percent; the function calculates 80.0 - 80.0 * 25 / 100 and RETURN sends back 60.0, which replaces the call, so cost becomes 60.0. A returned value can be stored or reused; a value that is only output cannot be used by the caller." loading="lazy">
  <figcaption>RETURN sends the value back to the call, which is replaced by it.</figcaption>
</figure>

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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-subroutines-procedures-and-functions--05-tracing-calls.webp" width="900" height="776" alt="Larger(14, 9) receives a = 14, b = 9 and returns 14, so best is 14. Larger(best, 21) receives the current value 14 and 21 and returns 21, so best is 21. ShowResult(&quot;Mo&quot;, best) is a procedure that receives name &quot;Mo&quot; and score 21 and outputs Mo scored 21." loading="lazy">
  <figcaption>Record the parameters each call receives and what it returns, one call at a time.</figcaption>
</figure>

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

## More resources on this topic

- [Subroutines study guide](/resources/oxfordaqa-igcse-computer-science-9210-subroutines-procedures-and-functions/)
- [Subroutines practice questions](/resources/oxfordaqa-igcse-computer-science-9210-subroutines-procedures-and-functions-practice/)
- [Structured programming revision notes](/resources/oxfordaqa-igcse-computer-science-9210-structured-programming-revision-notes/)
