---
title: "Cambridge A Level Computer Science (9618): Computational Thinking Skills -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 9: Algorithm Design and Problem-solving"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 9.1
syllabusTopics:
  - qualification: "a-level"
    topic: "algorithm-design-and-problem-solving"
    subtopic: "computational-thinking-skills"
description: "Original questions with mark-scheme answers on abstraction, abstract models, decomposition and modules for Cambridge AS Computer Science 9618."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Computational Thinking Skills study guide](/resources/cambridge-a-level-computer-science-9618-computational-thinking-skills/) · [Computational Thinking Skills revision notes](/resources/cambridge-a-level-computer-science-9618-computational-thinking-skills-revision-notes/) · [Algorithm Design and Problem-solving practice questions](/resources/cambridge-a-level-computer-science-algorithm-design-and-problem-solving-practice/)

These questions practise section 9.1 of Cambridge International AS & A Level Computer Science 9618. All scenarios are invented. Answers are in mark-scheme style, with [1] for each creditable point.

---

## Section A

**1.** State what is meant by an **abstract model**. **[1]**

**2.** Explain why abstraction reduces the memory a program needs. **[2]**

**3.** State the difference between abstraction and decomposition. **[2]**

**4.** Which module type should be used to calculate and give back the total cost of an order?

A: A procedure, because it performs a task.

B: A function, because it returns a single value.

C: A procedure, because it can take parameters.

D: A function, because it outputs the result to the screen.

**[1]**

**5.** A program helps a farmer record the milk produced by each cow each day. Identify **two** details about a cow that the program should store and **two** that it should not store. **[2]**

**6.** Give **one** reason why the same object, such as a book, may be represented differently in two different programs. **[1]**

## Section B

**7.** A hospital wants a program that shows the number of free beds on each ward, so that new patients can be sent to a ward with space.

**(a)** Explain what is meant by abstraction in the context of this program. **[2]**

**(b)** Identify **three** items of data the program needs about each ward, and **two** real-world details it should leave out. Give a reason for each item you leave out. **[5]**

**(c)** Write a pseudocode record type for a ward, using your answer to part (b). **[3]**

**8.** Explain **three** benefits of using abstraction when designing a program. **[3]**

**9.** A gym's app will let members book classes. The task is: check the member is logged in, show the timetable, let the member choose a class, check there is a place, record the booking and send a confirmation email.

**(a)** Describe what is meant by decomposition. **[2]**

**(b)** Decompose the task into **four** sub-problems. **[4]**

**(c)** For **two** of your sub-problems, state whether it should be a procedure or a function, and justify your choice. **[2]**

**10.** A programmer writes this function:

```
FUNCTION PlacesLeft(Capacity : INTEGER, Booked : INTEGER) RETURNS INTEGER
   RETURN Capacity - Booked
ENDFUNCTION
```

**(a)** State the value returned by `PlacesLeft(20, 17)`. **[1]**

**(b)** Write a pseudocode statement that uses the function to output "Class full" when no places are left for a class with capacity 20 and 20 bookings. **[2]**

**(c)** Explain **one** benefit of writing this calculation as a function rather than repeating it in the program. **[2]**

**11.** Explain **three** benefits of decomposing a large program into modules when a team of programmers is developing it. **[3]**

**12.** A delivery company's route-planning program uses a map of roads. Explain how abstraction is used in such a map, giving **two** details kept and **two** removed. **[4]**

---

## Answers

**1.** A simplified representation of a system that includes only the details essential for a particular purpose [1].

**2.** Unneeded details are removed from the model [1], so the program does not store or process data about them, and less memory is used [1].

**3.** Abstraction removes / hides unnecessary detail from a problem [1]; decomposition breaks a problem down into smaller sub-problems [1].

**4.** **B** [1].

**5.** Store (any two): cow ID / tag number; daily milk volume; date of each reading [1]. Do not store (any two): colour / markings; name of the field it grazes in; height [1].

**6.** The programs have different purposes, so different details are essential (e.g. a library needs loan status; a shop needs price) [1].

**7. (a)** Only the details needed to find a ward with free beds are kept in the model [1]; other details about wards, beds and patients are left out [1].

**(b)** Needed (one mark each, any three): ward name / ID; total number of beds; number of beds occupied (or free); type of ward / specialism [3].
Left out (one mark each, with reason, any two): the colour of the walls, because it does not affect whether a bed is free [1]; the names of the cleaners on the ward, because they do not affect bed availability [1]; the make of each bed, because any free bed can be used [1].

**(c)**

```
TYPE TWard
   DECLARE WardName : STRING
   DECLARE TotalBeds : INTEGER
   DECLARE BedsOccupied : INTEGER
ENDTYPE
```

TYPE ... ENDTYPE with a name [1]; at least three fields with DECLARE [1]; suitable data types [1].

**8.** Any three: the problem is easier to understand because there are fewer details [1]; the program is quicker to design and write [1]; less data is stored and processed, so less memory and processing time are needed [1]; the program has fewer parts, so it is easier to test and maintain [1]; the design focuses on what the user needs [1].

**9. (a)** Breaking a problem down into smaller sub-problems [1], each of which is easier to understand and solve, and may be broken down further [1].

**(b)** Any four, one mark each: check login; display timetable; get member's choice of class; check whether a place is available; record the booking; send confirmation email [4].

**(c)** One mark each for two justified choices, for example: "check whether a place is available" is a function, because it returns a single value (TRUE/FALSE) [1]; "send confirmation email" is a procedure, because it performs an action and returns no value [1].

**10. (a)** 3 [1].

**(b)** `IF PlacesLeft(20, 20) = 0 THEN OUTPUT "Class full"` with ENDIF [1] [1].

**(c)** Any one, fully explained: the calculation is written once and can be called wherever it is needed [1], so a change (for example to allow for a waiting list) only has to be made in one place [1]; or the function can be tested on its own [1], so errors in the calculation are found before it is used [1].

**11.** Any three: modules can be given to different programmers to write at the same time, so the program is finished sooner [1]; each module can be tested independently, so errors are easier to find [1]; programmers can specialise in the module they understand best [1]; modules can be reused in other parts or programs, saving time [1]; a change to one task means only one module needs to be altered [1].

**12.** Only the details needed to plan routes are kept, and the rest are removed [1].
Kept (any two): road connections / junctions; distances or travel times; one-way restrictions; delivery addresses [1].
Removed (any two): buildings' appearance; trees and parks; road surface colour; landmarks not used for navigation [1].
Explanation that this makes routes quicker to calculate / the map easier to process [1].

---

## Where marks are usually lost

- Excluding details without a reason linked to the program's purpose.
- Describing decomposition as "making it simpler" without saying the problem is broken into sub-problems.
- Calling a module that returns a value a procedure.
- Giving the same benefit twice in different words.
