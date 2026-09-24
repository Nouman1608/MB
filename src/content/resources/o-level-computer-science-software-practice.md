---
title: "O Level Computer Science: Software — Practice Questions (Cambridge 2210)"
resourceType: "practice-questions"
subject: "computer-science"
level: ["o-levels"]
topic: "Software"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 4
syllabusTopics:
  - qualification: "o-level"
    topic: "software-2210"
description: "Original exam-style questions with full worked answers on high-level languages, compilers and interpreters, IDE functions, operating system functions and interrupts, for Cambridge O Level Computer Science (2210)."
author: "marlbridge-academic-team"
publishedDate: 2026-09-24
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Each question practises a skill tested in the June 2025 Paper 12. After each answer there is a mark-scheme insight or a tip and, where one matches, the real question to try next.

---

## Questions

**1.** A developer is writing an app that lets a bakery keep track of its daily stock of bread and cakes. She decides to write it in a high-level language rather than in assembly language. Readability is one reason. Suggest **two** further advantages of a high-level language that could have influenced her decision. **[2]**

**2.** A student has written a program and must translate it before it can run. Describe **two** differences between the way a compiler and an interpreter translate the program. **[4]**

**3.** A student is building a quiz game in an IDE. The IDE includes a translator. Name **two** other features that IDEs usually offer and describe what each feature does for the programmer. **[4]**

**4.** A games studio uses an interpreter while it is developing and testing a new game, but uses a compiler to produce the final version that it sells to customers.

**(a)** Explain why an interpreter is useful while the game is being developed and tested.

**(b)** Explain why a compiler is more suitable for the version that is sold to customers. **[4]**

**5.** A laptop runs an operating system. State **three** functions of an operating system. **[3]**

**6.** While a user is typing a document, the printer runs out of paper and sends an interrupt to the processor.

**(a)** State what is meant by an interrupt.

**(b)** Describe how the processor deals with the interrupt. **[4]**

---

## Answers

**1.** Any two from: the program is **machine independent / portable**, so it can run on different types of computer [1]; it is **easier to debug** because the code uses English-like statements [1]; the programmer is **less likely to make errors** [1]; one statement can do the work of many machine-code instructions, so the program is quicker to write [1]. (Max 2.)

*Mark-scheme insight (June 2025):* The reasons credited were easier debugging, fewer errors and portability (machine independence). Readability is not in that list because the question had already given it, so use your two answers for other reasons.

*Try the real question next:* Cambridge O Level Computer Science 2210, June 2025, Paper 12, Question 3.

**2.** Any two differences, each described for both translators:

- A compiler translates the **whole program at once before it is executed** [1]; an interpreter **translates and executes the code one line at a time** [1].
- A compiler produces an **error report listing all the errors** after translation [1]; an interpreter **stops at the first error it finds** and continues only once that error is corrected [1].
- A compiler produces an **executable file** that can be run again without the translator [1]; an interpreter produces no executable file, so the program must be interpreted every time it is run [1].

*Mark-scheme insight (June 2025):* The credited points were the compiler translating the whole code before executing it and reporting all errors, and the interpreter translating and executing line by line and stopping when an error is found. The key terms credited included "whole code", "all" (errors), "line by line" and "error", so use precise phrases.

*Try the real question next:* Cambridge O Level Computer Science 2210, June 2025, Paper 12, Question 3.

**3.** One mark for each function and one mark for its matching role (any two pairs):

- **Code editor** [1]: lets the programmer type in and change the program code [1].
- **Run-time environment** [1]: lets the programmer run the code and see its output [1].
- **Error diagnostics** [1]: identifies and highlights errors in the code to help the programmer find and fix them [1].
- **Auto-completion** [1]: suggests how to complete a keyword or identifier as the programmer starts typing it [1].
- **Auto-correction** [1]: automatically corrects misspelt keywords [1].
- **Prettyprint** [1]: displays keywords and identifiers in different colours so the code is easier to read [1].

*Mark-scheme insight (June 2025):* One mark was given for naming a function and a second for a role that matches that function, so a correct role attached to the wrong function name does not earn the second mark.

*Try the real question next:* Cambridge O Level Computer Science 2210, June 2025, Paper 12, Question 3.

**4.** **(a)** The interpreter runs the code line by line and **stops as soon as it meets an error** [1], so the developers can see exactly where the problem is, fix it and carry on, which makes **debugging quicker** [1].

**(b)** The compiler produces an **executable file** [1]. Any one linked benefit: customers can run the game **without needing the translator**; the compiled game runs faster; or the source code is not given to customers, so it is harder for others to copy or change it [1].

*Tip:* In "explain why" questions, link each feature of the translator to the benefit it gives in the scenario; a list of features alone rarely earns all the marks.

*Try the real question next:* Cambridge O Level Computer Science 2210, June 2025, Paper 12, Question 3.

**5.** Any three from: **managing files** (creating, saving, deleting, moving) [1]; **managing memory** (allocating RAM to programs) [1]; **handling interrupts** [1]; **managing peripherals and drivers** [1]; **providing a user interface** [1]; **managing multitasking** [1]; **providing a platform for running applications** [1]; **providing system security** and managing user accounts [1]. (Max 3.)

*Tip:* Give the function in a few words and, if time allows, a brief example; vague answers such as "it runs the computer" are too general to credit.

**6.** **(a)** An interrupt is a **signal sent from a device or from software to the processor** [1] to tell it that something **needs its attention** [1].

**(b)** The processor checks for interrupts at the end of each fetch–decode–execute cycle and, if the interrupt has a higher priority than the current task, **saves the current state of the task it was running** [1] and then **runs the interrupt service routine** to deal with the interrupt (for example, displaying a "paper out" message) [1]. Afterwards it restores the saved state and continues with the original task.

*Tip:* Remember the order: check for the interrupt, save the current task, handle the interrupt, then restore and resume the original task.

---

## Where marks are usually lost

- Repeating a reason already given in the question, such as "easier to read", when asked for other reasons.
- Describing only the compiler or only the interpreter when a comparison of both is needed.
- Naming an IDE function but giving a role that belongs to a different function.
- Writing that an interpreter "shows all the errors" — it stops at the first error it meets.
- Describing an interrupt as the processor stopping for good, rather than saving its task and returning to it.
