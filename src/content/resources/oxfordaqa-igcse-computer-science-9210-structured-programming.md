---
title: "OxfordAQA IGCSE Computer Science (9210): Structured programming"
resourceType: "study-guides"
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
description: "Study guide to OxfordAQA IGCSE Computer Science 9210 section 3.2.11: modular programs, documented interfaces, local variables, parameters and their advantages."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-17
reviewNote: "2026-11-17: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-17
featured: false
---

This guide covers section **3.2.11 Structured programming** of OxfordAQA International GCSE Computer Science
(9210). The specification has two statements: "describe the structured approach to programming" and "explain the
advantages of the structured approach". Its additional information says the description should include
"modularised programming, clear, well documented interfaces (local variables, parameters) and return values". The
section is mostly assessed through written explanation, so precise vocabulary matters. A shorter summary is in
the [data structures, subroutines and translators study
guide](/resources/igcse-oxfordaqa-computer-science-programming-structures-subroutines-translators/).

## The structured approach in one paragraph

A structured program is built from **modules**: subroutines that each carry out **one clearly defined task**. Each
module has a **clear, documented interface** that states what data it needs (its **parameters**) and what it gives
back (its **return value**). Inside a module, working data is held in **local variables**, which no other part of
the program can see or change. The main program then becomes a short sequence of calls to these modules.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-structured-programming--01-module-anatomy.webp" width="900" height="650" alt="A module carries out one clearly defined task. Data goes in through parameters and the result comes out as a return value; working data is kept in local variables that nothing else can see or change; and the interface is documented. The main program becomes a short sequence of calls to modules." loading="lazy">
  <figcaption>Modules with one task, parameters in, a return value out, local variables inside and a documented interface.</figcaption>
</figure>

## Modularised programming

Modularising means **decomposing** a problem into smaller sub-problems and writing a subroutine for each. A
program for a school library might be planned like this:

- **Main program**: show a menu and call the chosen option.
  - `LoanBook(memberID, bookID)`: record a loan.
    - `IsMemberValid(memberID)` returns True/False.
    - `IsBookAvailable(bookID)` returns True/False.
  - `ReturnBook(bookID)`: record a return.
    - `DaysLate(dueDate, today)` returns an integer.
    - `Fine(daysLate)` returns a real.
  - `ShowOverdue()`: list overdue books.

Each module is small enough to understand completely, and some are used by more than one other module. The
specification's subroutine material, including procedures and functions, is covered in the [subroutines study
guide](/resources/oxfordaqa-igcse-computer-science-9210-subroutines-procedures-and-functions/).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-structured-programming--02-library-structure-chart.webp" width="900" height="560" alt="A structure chart. The main program shows a menu and calls LoanBook, ReturnBook or ShowOverdue. LoanBook uses IsMemberValid and IsBookAvailable, which return True or False; ReturnBook uses DaysLate, which returns an integer, and Fine, which returns a real." loading="lazy">
  <figcaption>Decomposition: each sub-problem becomes a small module with one job.</figcaption>
</figure>

## Interfaces

A module's **interface** is everything another programmer needs to know to **use** it without reading its code:

- its **name**;
- its **parameters**, in order, with their data types and meaning;
- its **return value**, with its data type (or a statement that it returns nothing);
- a short description of what it does.

Documenting the interface usually means a comment block at the top of the subroutine:

```
-- Fine
-- Calculates the fine for a book returned late.
-- Parameter: daysLate (integer), number of days after the due date
-- Returns: real, the fine in dollars (0.0 if not late)
SUBROUTINE Fine(daysLate)
  CONSTANT RatePerDay ← 0.25
  IF daysLate ≤ 0 THEN
    RETURN 0.0
  ENDIF
  RETURN daysLate * RatePerDay
ENDSUBROUTINE
```

Anyone calling `Fine(8)` knows to expect `2.0` without needing to look inside. A **clear** interface also means
the module receives all its data through parameters and sends all its results back through the return value,
rather than reading and changing variables elsewhere in the program.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-structured-programming--03-documented-interface.webp" width="900" height="612" alt="The comment block for the Fine subroutine gives its name, what it does, its parameter daysLate (integer, days after the due date) and its return value (real, the fine in dollars, 0.0 if not late). Treated as a black box, Fine(8) returns 2.0 without the caller reading its code." loading="lazy">
  <figcaption>The interface tells a caller everything needed to use a module without reading its code.</figcaption>
</figure>

## Local variables

A **local variable** is declared inside a subroutine. It exists only while the subroutine is running and can be
used only inside it. When the subroutine finishes, the variable is discarded.

```
SUBROUTINE SumArray(values)
  total ← 0                       -- local to SumArray
  FOR i ← 0 TO LEN(values) - 1    -- i is also local
    total ← total + values[i]
  ENDFOR
  RETURN total
ENDSUBROUTINE
```

If the main program also has a variable called `total`, the two do not interfere: `SumArray` has its own `total`.
That independence is the point. The contrast is a variable declared for the whole program (often called a global
variable), which any subroutine can change. Suppose two subroutines both used one program-wide counter `i` for
their loops, and one called the other from inside its loop: the inner subroutine would change `i` and break the
outer loop, a bug that is very hard to find by reading either subroutine alone. Local variables prevent this kind
of unintended interaction.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-structured-programming--04-local-variables.webp" width="900" height="680" alt="The main program and SumArray each have their own variable called total; SumArray’s total and i are local and are discarded when it finishes, so they do not interfere. Below, if subroutines A and B share one program-wide counter i and A calls B inside its loop, B changes i and breaks A’s loop." loading="lazy">
  <figcaption>Local variables stop one module accidentally changing another module’s data.</figcaption>
</figure>

## Worked example: restructuring a program

Unstructured version:

```
total ← 0
FOR i ← 1 TO 5
  OUTPUT "Enter mark"
  m ← STRING_TO_INT(USERINPUT)
  WHILE m < 0 OR m > 100
    OUTPUT "Enter mark"
    m ← STRING_TO_INT(USERINPUT)
  ENDWHILE
  total ← total + m
ENDFOR
OUTPUT total / 5
```

Structured version:

```
-- GetMark: asks until a mark from 0 to 100 is entered; returns it (integer)
SUBROUTINE GetMark()
  REPEAT
    OUTPUT "Enter a mark from 0 to 100"
    mark ← STRING_TO_INT(USERINPUT)
  UNTIL mark ≥ 0 AND mark ≤ 100
  RETURN mark
ENDSUBROUTINE

-- Mean: returns total / count (real); count must be greater than 0
SUBROUTINE Mean(total, count)
  RETURN total / count
ENDSUBROUTINE

CONSTANT NumMarks ← 5
sum ← 0
FOR i ← 1 TO NumMarks
  sum ← sum + GetMark()
ENDFOR
OUTPUT Mean(sum, NumMarks)
```

**What changed and why it matters:** input checking now lives in one module, `GetMark`, which can be tested alone
with values such as −1, 0, 100 and 101, and reused anywhere a mark is needed. `mark` is local to `GetMark`. Each
module has a documented interface. The main program is four lines that read as a plan: get five marks, add them,
output the mean.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-structured-programming--05-restructuring-marks.webp" width="900" height="690" alt="Before, input checking, adding and averaging are mixed in one block. After, input checking lives in GetMark, which asks until a mark from 0 to 100 is entered and returns it, and Mean returns total / count; the main program just loops NumMarks times adding GetMark() and outputs Mean(sum, NumMarks). GetMark can be tested alone with −1, 0, 100 and 101." loading="lazy">
  <figcaption>Pull each job into its own module and the main program becomes a readable plan.</figcaption>
</figure>

## Advantages of the structured approach

| Advantage | Explanation |
|---|---|
| Easier to understand | Each module is short and does one job; the main program reads like an outline of the solution |
| Easier to test and debug | Modules are tested individually, so an error can be traced to one module |
| Easier to maintain | A change is made inside one module; as long as its interface stays the same, the rest of the program is unaffected |
| Reuse | A module with a clear interface can be used again in this or other programs |
| Team development | Programmers can write different modules at the same time, relying only on the agreed interfaces |
| Fewer side effects | Local variables mean one module cannot accidentally change another module's data |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-structured-programming--06-features-to-advantages.webp" width="900" height="668" alt="Three features linked to six advantages. Modules with one job make a program easier to understand, easier to test and debug, and suit team development. Documented interfaces make it easier to maintain, allow reuse and let a team rely on agreed interfaces. Local variables mean fewer side effects." loading="lazy">
  <figcaption>For each advantage, say which feature causes it and what it allows or prevents.</figcaption>
</figure>

## Annotated model answer

**Question:** A council is developing software to manage parking permits. Explain **two** advantages of using a
structured approach to develop it. [4]

**Model answer:** First, the software can be split into modules such as `IssuePermit`, `RenewPermit` and
`CalculateFee`, and each can be tested on its own with known data, so if a fee is wrong the error can be traced to
`CalculateFee` instead of searching the whole program. Second, if the council changes its pricing, only the code
inside `CalculateFee` needs to change; because its parameters and return value stay the same, the modules that
call it do not need editing.

**Why it scores:** each advantage is stated, linked to the scenario with named modules, and followed by its effect
("so the error can be traced...", "the modules that call it do not need editing"). Two different advantages are
given; restating the same one in other words would earn the marks only once.

## Common mistakes

- **Describing only "using subroutines".** The description should also cover interfaces, parameters, return values
  and local variables.
- **Saying local variables "can be used anywhere".** They are only accessible inside their own subroutine.
- **Listing advantages with no explanation**, such as "easier to debug" with no reason.
- **Confusing the interface with the code.** The interface is what a module needs and returns, not how it works.
- **Using "argument" and "parameter" as if they mean different things in the exam.** The exam uses "parameter" for
  both.

## Exam technique

- **Describe** the structured approach: aim for four distinct points: modules with one task each; parameters to
  pass data in; return values to pass data out; local variables; documented interfaces.
- **Explain** an advantage: state it, then say what it allows or prevents ("...so an error can be traced to one
  module").
- In scenario questions, name example modules from the scenario, as with the library plan above.

## Next steps

Revise the key points with the [structured programming revision
notes](/resources/oxfordaqa-igcse-computer-science-9210-structured-programming-revision-notes/) and practise
written answers in the [structured programming practice
questions](/resources/oxfordaqa-igcse-computer-science-9210-structured-programming-practice/).
