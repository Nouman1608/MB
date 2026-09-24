---
title: "A Level Computer Science: System Software (A Level) — Practice Questions (Cambridge 9618)"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "System Software"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2027-2029"
stage: "A"
order: 16
syllabusTopics:
  - qualification: "a-level"
    topic: "a-system-software"
description: "Original exam-style questions with full worked answers on interpreters, syntax rules and Backus-Naur Form, Reverse Polish Notation, multi-tasking, shortest remaining time scheduling and disk thrashing, for Cambridge AS & A Level Computer Science (9618)."
author: "marlbridge-academic-team"
publishedDate: 2026-09-24
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Each question practises a skill tested in the June 2025 Paper 31. After each answer there is an examiner insight, a mark-scheme insight or a tip, and the real question to try next where one matches.

---

## Questions

**1.** A student runs a program written in a high-level language using an interpreter. Describe how the interpreter executes the program. **[4]**

**2.** A museum gives each visitor a badge code. The rules for a valid badge code are: it starts with exactly one letter, which must be K, M, R or T; this is followed by one or more further characters, each of which is either a digit from 1 to 4 or one of the symbols ? and ~. No other characters are allowed. For each of the following, state why it is not a valid badge code.

**(a)** `M`

**(b)** `R26` **[2]**

**3.** Using the badge code rules from Question 2, and given that `<digit> ::= 1 | 2 | 3 | 4` and `<symbol> ::= ? | ~` have already been defined, write Backus-Naur Form (BNF) definitions for `<letter>`, `<tail>` (the part of the code after the letter) and `<badge>`. **[4]**

**4.** A laptop is playing music, downloading a file and running a virus scan while its user types a report. Explain the term multi-tasking and give one way it helps the operating system manage processes. **[2]**

**5.** An operating system uses the shortest remaining time (SRT) scheduling routine. Process Alpha arrives at time 0 and needs 7 units of processor time. Process Beta arrives at time 2 and needs 3 units. Process Gamma arrives at time 3 and needs 1 unit. Explain how SRT schedules these three processes, stating the time at which each one finishes, and give one benefit of this routine. **[4]**

**6.** An expression is written in infix form as (p + q) × (r − s).

**(a)** Write this expression in Reverse Polish Notation (RPN).

**(b)** Given p = 6, q = 2, r = 9 and s = 4, describe how a stack is used to evaluate your RPN expression, and state the result. **[4]**

**7.** A computer with little main memory uses virtual memory and paging. Explain what is meant by disk thrashing and why it happens. **[3]**

---

## Answers

**1.** The interpreter takes the source code and **translates a single line (statement) at a time** [1]. If the line has no errors it is **executed immediately**, before the next line is translated [1]. If an error is found, the interpreter **stops and reports an error message** for that line; the lines before it have already run [1]. **No executable (object code) file is produced**, so every line must be translated again each time it is run, including lines repeated inside a loop [1].

*Examiner insight (June 2025):* some candidates described compiling, or stages within compilation, instead of how an interpreter executes a program.

*Try the real question next:* Cambridge International AS & A Level Computer Science 9618, June 2025, Paper 31, Question 6.

**2.** **(a)** `M` has a valid first letter but **nothing after it**; at least one digit or symbol must follow the letter [1].

**(b)** `R26` contains the digit **6**, which is **not an allowed digit** (only 1 to 4 are allowed) [1].

*Mark-scheme insight (June 2025):* credit was given for a clear reason that names the rule broken, such as which character is not allowed or what must appear in that position, so say exactly which rule fails rather than writing "wrong format".

*Try the real question next:* Cambridge International AS & A Level Computer Science 9618, June 2025, Paper 31, Question 7.

**3.**
```
<letter> ::= K | M | R | T
<tail> ::= <digit> | <symbol> | <digit><tail> | <symbol><tail>
<badge> ::= <letter><tail>
```
`<letter>` lists exactly the four allowed letters separated by `|` [1]; `<tail>` includes the single-character options `<digit> | <symbol>` [1] and the **recursive** options `<digit><tail> | <symbol><tail>`, allowing one or more characters [1]; `<badge> ::= <letter><tail>` [1].

*Examiner insight (June 2025):* to earn full marks candidates had to use recursion to allow a repeated part of any length, and the list of allowed letters must not have a stray `|` at its start or end.

*Try the real question next:* Cambridge International AS & A Level Computer Science 9618, June 2025, Paper 31, Question 7.

**4.** Multi-tasking means **several processes run concurrently**: the operating system switches the processor between them so quickly (using scheduling and time slices) that they appear to run at the same time [1]. Benefit: the processor is kept busy, so **more tasks are completed in a given time** than if each had to finish before the next could start [1].

*Examiner insight (June 2025):* most candidates knew that multi-tasking allows processes to run concurrently; only those who also gave a benefit to process management earned both marks.

*Try the real question next:* Cambridge International AS & A Level Computer Science 9618, June 2025, Paper 31, Question 8.

**5.** SRT always runs the process with the **shortest remaining time**, and is **pre-emptive**: a newly arrived process with a shorter time replaces the running one. Alpha runs from 0 to 2; at time 2 Beta (3 units) is shorter than Alpha's remaining 5 units, so Beta pre-empts Alpha [1]. At time 3 Gamma (1 unit) is shorter than Beta's remaining 2 units, so Gamma runs from 3 to 4 [1]. Finishing times: **Gamma at 4, Beta at 6 (running 4 to 6), Alpha at 11 (running 6 to 11)** [1]. Benefit: short processes finish very quickly, so the **average waiting time is minimised** [1].

*Examiner insight (June 2025):* many candidates stated that the shortest job is run first; higher-scoring answers also explained how processes are ordered in the queue and that the routine is pre-emptive.

*Try the real question next:* Cambridge International AS & A Level Computer Science 9618, June 2025, Paper 31, Question 8.

**6.** **(a)** `p q + r s − ×` [2] (one mark for each correct bracketed part, `p q +` and `r s −`, placed before the final ×).

**(b)** Push 6 and 2; at `+` pop both and push 6 + 2 = 8. Push 9 and 4; at `−` pop both and push 9 − 4 = 5 [1]. At `×` pop 5 and 8 and push 8 × 5; the single value left on the stack is the result, **40** [1].

*Tip:* when evaluating RPN with a stack, the second value popped is the left-hand operand, which matters for − and ÷.

**7.** In virtual memory, **pages are swapped between main memory (RAM) and secondary storage** when they are needed [1]. If memory is too small for the processes running, pages that are swapped out are **needed again almost immediately** and must be swapped straight back in [1]. The computer then spends **more time swapping pages than executing instructions**, so performance falls sharply: this is disk thrashing [1].

*Tip:* thrashing is about the amount of swapping, not just about using virtual memory; make it clear that the swapping takes over from useful processing.

---

## Where marks are usually lost

- Describing compilation when the question asks about an interpreter.
- Writing BNF without recursion, so only a fixed number of characters is allowed.
- Leaving a stray `|` at the start or end of a list of alternatives in BNF.
- Saying SRT runs the shortest job first without explaining pre-emption when a shorter process arrives.
- Stating that multi-tasking runs processes concurrently without giving the benefit that was asked for.
