---
title: "Cambridge A Level Computer Science (9618): Program Design -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 12: Software Development"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 12.2
syllabusTopics:
  - qualification: "a-level"
    topic: "software-development"
    subtopic: "program-design"
description: "Original 9618 section 12.2 questions with answers: structure chart symbols, headers and main programs from charts, and state-transition tables."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
reviewNeeded: true
reviewNote: "Please confirm the structure chart symbols described in words (data and flag couples, diamond for selection, curved arrow for iteration) match the notation Cambridge uses in current 9618 papers."
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Program Design study guide](/resources/cambridge-a-level-computer-science-9618-program-design/) · [Program Design revision notes](/resources/cambridge-a-level-computer-science-9618-program-design-revision-notes/)

---

## Section A

**1.** State **two** purposes of a structure chart. **[2]**

**2.** Describe the difference between a data couple and a flag couple on a structure chart. **[2]**

**3.** State how **(a)** selection and **(b)** iteration are shown on a structure chart. **[2]**

**4.** State the purpose of a state-transition diagram. **[2]**

## Section B

**5.** A library structure chart has the top module ReturnBook. Beneath it, from left to right, are four modules:

- GetBookID, which passes BookID (STRING) up;
- FindLoan, which receives BookID and passes DaysLate (INTEGER) up;
- CalculateFine, which receives DaysLate and passes Fine (REAL) up; a diamond on its connection shows it is called only if DaysLate is greater than 0;
- UpdateRecord, which receives BookID and passes nothing up.

**(a)** Write the pseudocode header for **each** of the four modules. **[4]**

**(b)** Write pseudocode for the main program ReturnBook, which calls the modules and finally outputs the fine (0 if the book is not late). **[4]**

**6.** A quiz program gets the player's name, then asks ten questions. For each question, a module asks the question and passes back a flag showing whether the answer was correct; another module receives the score and the flag and passes the updated score back. Finally, a module receives the name and the score and displays the result.

Describe the structure chart for this program, naming each module and stating every parameter, its direction and its type of couple, and how the repetition is shown. **[6]**

**7.** Study this pseudocode.

```
PROCEDURE ProcessOrder()
   CALL GetOrder(Item, Quantity)
   Cost ← PriceOf(Item) * Quantity
   IF Cost > 100 THEN
      CALL ApplyDiscount(Cost)
   ENDIF
   CALL PrintInvoice(Item, Quantity, Cost)
ENDPROCEDURE
```

GetOrder and ApplyDiscount use BYREF parameters. For each of the modules GetOrder, PriceOf, ApplyDiscount and PrintInvoice, state the parameters passed down and up that a structure chart would show, and the symbol that shows ApplyDiscount is conditional. **[5]**

**8.** A login algorithm starts in state Waiting. A correct password in any of the states Waiting, OneFail or TwoFail moves to LoggedIn. A wrong password moves Waiting to OneFail, OneFail to TwoFail, and TwoFail to Locked. LoggedIn and Locked are halting states.

**(a)** Complete a state-transition table for this algorithm with columns Current state, Event, Next state. **[5]**

**(b)** State how the halting states would be drawn on a state-transition diagram. **[1]**

**9.** A turnstile has this state-transition table.

| Current state | Event | Next state | Output |
|---|---|---|---|
| Locked | Coin | Unlocked | None |
| Locked | Push | Locked | "Insert coin" |
| Unlocked | Push | Locked | None |
| Unlocked | Coin | Unlocked | "Coin returned" |

The turnstile starts Locked. The events are: Push, Coin, Coin, Push, Push. State the state after each event and every output produced. **[4]**

**10.** Explain why a module that passes two values back up a structure chart is written as a procedure with BYREF parameters, not as a function. **[2]**

**11.** A student derives this header from a structure chart in which CheckStock receives ItemCode (STRING) and passes InStock (a flag) up:

```
PROCEDURE CheckStock(BYREF ItemCode : STRING, InStock : INTEGER)
```

Identify **two** errors and write a correct header. **[3]**

---

## Answers

**1.** Any two, 1 mark each: shows how the problem is decomposed into modules [1]; shows the parameters passed between the modules [1]; fixes each module's interface so that modules can be written by different programmers [1]; gives the basis for procedure and function headers when coding [1].

**2.** A data couple (arrow with an open circle) shows a data item passed between modules [1]. A flag couple (arrow with a filled circle) shows a BOOLEAN value used to control processing, such as whether a record was found [1].

**3.** **(a)** A diamond on the connection to the module that is called only if a condition is met [1].

**(b)** A curved arrow across the connections to the modules that are called repeatedly [1].

**4.** To document an algorithm by showing the states it can be in [1] and the events or inputs that cause each transition from one state to another [1].

**5.** **(a)** One mark each:

```
PROCEDURE GetBookID(BYREF BookID : STRING)
FUNCTION FindLoan(BookID : STRING) RETURNS INTEGER
FUNCTION CalculateFine(DaysLate : INTEGER) RETURNS REAL
PROCEDURE UpdateRecord(BookID : STRING)
```

(GetBookID may also be written as FUNCTION GetBookID() RETURNS STRING.)

**(b)** Model answer:

```
CALL GetBookID(BookID)
DaysLate ← FindLoan(BookID)
Fine ← 0
IF DaysLate > 0 THEN
   Fine ← CalculateFine(DaysLate)
ENDIF
CALL UpdateRecord(BookID)
OUTPUT "Fine: ", Fine
```

GetBookID then FindLoan called in order with correct arguments [1]; CalculateFine called inside IF DaysLate > 0 [1]; Fine set to 0 when not late [1]; UpdateRecord called and Fine output [1].

**6.** Top module (for example Quiz) with GetName, AskQuestion, UpdateScore and DisplayResult beneath it, left to right [1]. GetName passes Name up as a data couple [1]. A curved arrow spans the connections to AskQuestion and UpdateScore, showing they repeat [1]. AskQuestion passes Correct up as a flag couple [1]. UpdateScore receives Score and Correct, and passes Score back up as a data couple [1]. DisplayResult receives Name and Score as data couples, with nothing passed up [1].

**7.** GetOrder: Item and Quantity passed up [1]. PriceOf: Item passed down, the price passed up [1]. ApplyDiscount: Cost passed down and back up (changed) [1]. PrintInvoice: Item, Quantity and Cost passed down, nothing up [1]. A diamond on the connection from ProcessOrder to ApplyDiscount shows it is conditional [1].

**8.** **(a)** Model answer:

| Current state | Event | Next state |
|---|---|---|
| Waiting | Correct password | LoggedIn |
| Waiting | Wrong password | OneFail |
| OneFail | Correct password | LoggedIn |
| OneFail | Wrong password | TwoFail |
| TwoFail | Correct password | LoggedIn |
| TwoFail | Wrong password | Locked |

Waiting rows [1]; OneFail correct [1]; OneFail wrong [1]; TwoFail correct [1]; TwoFail wrong to Locked [1].

**(b)** As double circles [1].

**9.** Push: Locked, output "Insert coin" [1]. Coin: Unlocked, no output [1]. Coin: Unlocked, output "Coin returned" [1]. Push: Locked; Push: Locked, output "Insert coin" [1].

**10.** A function can return only one value through its return value [1]. A procedure with BYREF parameters lets the module change two caller variables, so both values reach the calling module [1].

**11.** ItemCode is only passed down, so it should be BYVAL (or unstated), not BYREF [1]. InStock is a flag passed up, so it should be BOOLEAN and returned; one value passed up means a function [1]. Correct header: FUNCTION CheckStock(ItemCode : STRING) RETURNS BOOLEAN [1].

---

## Where marks are usually lost

- Parameters described without their direction.
- A function written for a module that passes two values up.
- Missing the diamond or the curved arrow when a scenario says "if" or "repeat".
- State-transition tables that leave out one input for one state.
