---
resourceId: "mb-ap-csp-exam-skills-create-task"
title: "The Create Performance Task: Exam Skills Guide (Computer Science Principles)"
description: "How to plan, build, document and reflect on a Create performance task program, and how to write clearly about your own code, with checklists and original practice. No sample submission."
course: "computer-science-principles"
unit: 1
topics: []
resourceType: "exam-skills"
prerequisites:
  - "You have studied Topics 1.1 to 1.4 and the procedures and lists topics (3.2, 3.10, 3.12, 3.13)"
  - "You have your teacher's current task instructions"
learningObjectives:
  - "Explain what the Create performance task asks you to do and what the written responses assess"
  - "Plan a program that is small enough to finish and rich enough to explain"
  - "Keep design, testing and sources documentation while you work"
  - "Choose and annotate the code segments that you will write about"
  - "Write precise answers about your own list, procedure, algorithm and testing"
  - "Follow the rules on collaboration, acknowledgement and the use of other people's code"
skills: ["1", "2", "3", "4", "6"]
studyMinutes: 60
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed, and none is needed. Code in this guide is written in Marlbridge's rendering of the exam reference notation. You may program in any language your teacher allows."
related: ["mb-ap-csp-exam-skills-multiple-choice", "mb-ap-csp-1.1-study-guide", "mb-ap-csp-1.3-study-guide", "mb-ap-csp-1.4-study-guide", "mb-ap-csp-3.10-study-guide", "mb-ap-csp-3.12-study-guide", "mb-ap-csp-3.13-study-guide"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "The Create task is 30% of the exam: a program you build in class, a short video and a Personalized Project Reference, then written responses on exam day."
  - "Your program needs a purpose, input, a list, a procedure with a parameter, an algorithm with sequencing, selection and iteration, and output."
  - "Keep a development log from day one: it is the evidence for your design, testing and acknowledgements."
  - "Written responses are about your own code: name the exact list, procedure and lines, then say what they do and why."
  - "This guide contains no sample submission, because your work must be your own. Always follow your teacher's and the current official instructions."
faqs:
  - question: "Can I use code that I did not write?"
    answer: "Only as your teacher and the current official instructions allow, and you must acknowledge it. Code you did not write cannot be the part you describe as your own procedure or algorithm. Ask your teacher before you rely on any outside code."
  - question: "Can my teacher or classmates help me?"
    answer: "Rules on help differ between the program-building time and the written-response time, and they are set by the official instructions. Read your teacher's version before you start, and never share or copy another student's program."
  - question: "What if my program is simple?"
    answer: "A simple program that meets every requirement and that you can explain precisely is better than an ambitious program that you cannot finish or describe. Aim for a small, complete program."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

## How to use this guide

This guide is for any student who is about to start, or is in the middle of, the Create performance task in Computer Science Principles. It explains what the task is for, how to plan it, how to keep the records that make the written responses easy, and how to write about your own program. It is a **method guide, not a model answer**. Your program, video and written responses must be your own work, so you will not find a sample submission here. The examples are **original Marlbridge practice** and use fictional programs only for illustration. They are not past exam material, and the marks and wording are not official.

> **Follow the official rules.** Requirements, dates, file limits, the help you may receive and what you may submit are set by your teacher and the current official instructions. They are updated from time to time. If anything here disagrees with them, the official instructions win. Ask your teacher before the task starts, not after.

## The task at a glance

| Feature | Detail |
|---|---|
| Weight | 30% of the exam score |
| Building time | At least 9 hours of class time to create the program, in the school year |
| What you submit | Program code, a short video of the running program and a Personalized Project Reference (the code segments you choose to write about), submitted by the deadline your teacher gives (30 April 2027 for the May 2027 series) |
| Exam-day written responses | 60 minutes, 2 questions with 4 prompts in all, about your own program, answered with your Personalized Project Reference |
| Calculator | Not used |

Why it exists: the multiple-choice exam tests whether you can *read* programs. The Create task tests whether you can **design, build, test and explain** one. The written responses check that you understand the code you submitted, which is why it has to be yours.

## What your program must contain

Programs differ a great deal: a quiz, a budget tracker, a game, a small simulation, a tool for a club. Whatever you choose, it must show these features in a way you can point to. Check the exact wording in the official task description.

| Feature | What it means in practice | A question to ask yourself |
|---|---|---|
| **A purpose** | A clear problem it solves or an interest it serves | Can I say in one sentence what it is for and who uses it? |
| **Input** | Data supplied by a user, a device, a file or an event | Where does the data come from and how does my code read it? |
| **A list (or similar collection)** | A data abstraction that stores several values and *manages complexity* | Would the program be harder to write or longer without the list? |
| **A student-developed procedure with a parameter** | A procedure **you** wrote, whose parameter changes what it does | Does the parameter affect the result? |
| **An algorithm** | Inside that procedure: **sequencing, selection and iteration** | Can I point to the loop and the condition? |
| **A call to the procedure** | The procedure is used by the program | Where is it called, and with which argument? |
| **Output** | Something the user sees, hears or receives in response | What does the output depend on? |

The list and the procedure are the main subjects of the written responses, so choose a design in which both are **genuinely needed**. A list that is created and never used, or a parameter that is ignored in the procedure body, is a weak point under questioning.

### Worked example 1: testing an idea against the table

A student proposes a "club snack tally" program. People type in the name of a snack, and the program shows the running count for each one and the top three. Test the idea.

| Feature | Idea | Verdict |
|---|---|---|
| Purpose | Help a school club track which snacks sell | Clear |
| Input | The user types a snack name | Clear |
| List | A list of snack names and a parallel list of counts | The lists store data of unknown length, so the program is simpler with them than with separate variables |
| Procedure with parameter | A procedure that takes the snack name and updates its count | The parameter changes what is updated |
| Algorithm | The procedure loops through the names (iteration), checks for a match (selection) and does the steps in order (sequencing) | All three present |
| Call | Called each time a snack is entered | Yes |
| Output | Displays the totals | Yes |

The idea passes. A weaker plan would be a program that adds two typed numbers: it has input and output, but there is no real list and no real need for a procedure.

## Planning: from idea to a finished program

Many Create tasks fail because the plan was too big, not too small. Use this order.

1. **Pick a purpose you care about.** You will spend hours with it, and a real purpose makes the explanation natural.
2. **Write a one-paragraph description.** Who uses it, what it does, what goes in, what comes out.
3. **Shrink it.** Keep the smallest version that still includes every required feature. You can add extras only after the core works.
4. **Sketch the data.** What list will you have? What does each element represent? What are example values?
5. **Sketch the main procedure** in plain steps before writing code. Name its parameter and say what changes with it.
6. **Plan tests.** Write 4 or 5 test cases before you code (a normal case, a boundary case, a case that should be rejected).
7. **Set milestones** across the hours you have: plan, core working, tests and fixes, polish, video and reference.

### A planning table to copy into your own log

| Item | Your entry |
|---|---|
| Purpose in one sentence | |
| Users and what they input | |
| The list: what it stores, how it grows | |
| The procedure: name, parameter, what the parameter changes | |
| The algorithm steps (sequence, condition, loop) | |
| Outputs | |
| Four test cases (input, expected output) | |
| Help and sources (people, tutorials, libraries) | |

## Document as you go

Do not leave the records until the end. A development log makes the written responses far easier, because you can see *what you did and why*.

- **Dated entries.** Even a few lines per session: what I did, what went wrong, what I changed.
- **Design decisions.** When you choose between two approaches, write why.
- **Testing.** Record test inputs, expected results, actual results and any fix. This is the evidence for the testing prompt.
- **Errors you found and corrected.** These show real understanding (see Topic 1.4).
- **Sources and acknowledgement.** Record any code, image, sound or idea that is not yours, with where it came from. Credit it in the way your teacher requires.
- **Backups.** Save versions with clear names. Losing the only copy is the commonest avoidable disaster.

### Collaboration, help and acknowledgement

Your teacher will explain what kinds of help are allowed at each stage. In general:

- Programming with someone else is collaboration, and **the written responses must be your own**. Never copy another student's program or answers, and never share yours.
- You may use libraries, tutorials and examples **if the rules allow it**, and you must credit them. Code that you did not write is not the code you describe as your own procedure or algorithm.
- A tool that generates code for you does not make the code yours. Ask your teacher what is allowed, and follow it. Using work that is not yours without saying so can lead to the task being disqualified.

## The video

The video shows your program running. Check the current limits (length, size and file type) in the official instructions. In general:

- Show **input**, the program **doing something with it**, and **output**.
- Keep it simple and silent or captioned as instructed. Do not add the program's name, your name or anything identifying if the instructions forbid it.
- Record it in one short run. Rehearse once.
- Watch it back to check it is readable and that it matches the code you submit.

## Choosing and annotating the code segments

The Personalized Project Reference holds the code you will use on exam day. Choose it carefully, because the written questions ask about *these* segments.

**Segment 1: the procedure.** Choose your procedure with a parameter, including its algorithm (sequencing, selection and iteration).

**Segment 2: the list.** Choose a place where the list is stored and a place where its data is used.

Make the segments **easy to read**: sensible variable names, consistent indentation and short comments. Check the current instructions on whether comments are allowed and how many pages or lines you may include.

### A readiness check for each segment

- [ ] I can say in one sentence what the procedure does.
- [ ] I can point to the parameter and say what changes when it changes.
- [ ] I can point to the loop, the condition and the order of steps.
- [ ] I can say what each element of the list represents, with an example.
- [ ] I can say how the program would be harder to write without the list.
- [ ] I can explain a call with a specific argument, and what happens.
- [ ] I can say how I tested it, and what I found.

## Writing about your own program

On exam day you answer questions about your own program with your reference. The skill is the same each time: **be specific, name the exact thing, and connect it to the purpose.**

### A pattern for every answer

1. **Name it.** "The procedure `countSnack`..." "The list `names`..."
2. **Say what it does**, step by step, not just what it is for.
3. **Say why it matters** to the program: what would be different without it?
4. **Use a concrete value** if the question allows: "when the argument is `chips`, ..."

### Weak and strong writing: a fictional contrast

The following uses a fictional program, **not** a model for yours. Note how the second explains.

Program: a fictional "habit streak" app with a list `days` of the days on which a habit was done, and a procedure `streakLength(days)`.

| Weak | Why it is weak | Stronger direction |
|---|---|---|
| "The list stores the data." | Says nothing a reader could not guess | Say *which* data, in what form, and what the program does with it |
| "The procedure makes the program work better." | A vague claim | Say what the procedure takes in, what it calculates, and what it returns |
| "I tested it and it worked." | No evidence | Give the test input, the expected result, the actual result |
| "It uses a loop to go through everything." | Names the tool, not the job | Say what each pass of the loop does and when it stops |

Your answers must describe **your** code. Do not reuse sentences from this guide, from classmates or from online examples. Reuse of text is easy for a reader to notice, and it shows nothing about what you understand.

### Sentence frames, not answers

Frames help you check that you have said enough. Fill them with details from your own work.

- "The list called ___ stores ___. Each element represents ___."
- "Without the list, the program would need ___, which would ___."
- "The procedure ___ has a parameter ___. When ___ changes, the procedure ___."
- "In the algorithm, the loop ___ and the condition ___. Together they ___."
- "I tested it with ___. I expected ___ and the program gave ___. As a result I ___."

### Worked example 2: turning a code line into an explanation

This is a small, fictional piece of code, written only to show how to *read* code aloud. It is not a complete program.

```text
PROCEDURE addLoyalty(points, spend)
{
  IF(spend ≥ 50)
  {
    points ← points + 10
  }
  RETURN(points)
}
```

How to talk about it, step by step.

1. Name: the procedure `addLoyalty` has two parameters, `points` and `spend`.
2. Do: it compares `spend` with 50 using selection. If the spend is at least 50, it adds 10 to the points. Either way it returns the points.
3. Effect of the parameter: `addLoyalty(40, 60)` returns 50; `addLoyalty(40, 20)` returns 40.
4. Test idea: boundary at 50. `addLoyalty(40, 50)` should return 50 and `addLoyalty(40, 49)` should return 40.

This shows the habit: **read the code, give an example, name a boundary**. Your own answers should use your own code in exactly this way.

## Testing and reflecting

Testing is not "run it once". The testing prompt looks for **purposeful** tests.

| Kind of test | What it checks | Example for a tally program |
|---|---|---|
| Normal | The usual case works | Enter a snack already in the list |
| New item | The program handles an unseen value | Enter a snack not yet in the list |
| Boundary | The edges of the allowed range | An empty list; the first and the last element |
| Invalid | Unwanted input is rejected or handled | Press enter without typing a name |
| Repeated | State persists correctly | Enter the same snack five times |

For each test, record the **input, the expected result and the actual result**. If they differ, record the fix. Reflection is not an extra: *explaining what failed and how you changed the code* is evidence of real work (see Topic 1.4).

## Common problems and fixes

| Problem | Why it hurts | Fix |
|---|---|---|
| Starting with an idea that is too big | The program is not finished | Plan the smallest version first |
| The list is not really needed | Hard to explain how it manages complexity | Choose a purpose where many values of the same kind are stored |
| The parameter is ignored | The procedure does not depend on it | Make the parameter control a value, a comparison or a loop limit |
| Writing the log at the end | Details are lost | Log after every session |
| Copying text from a model answer | The answers are not your own | Use your own wording about your own code |
| Confusing the procedure with the whole program | Vague writing | Describe *this procedure's* inputs, steps and result |
| No acknowledgement of sources | Breaks the rules | Credit anything not yours |
| A video that does not match the code | Looks unreliable | Record from the final version |

## Checklists

**Before you start**
- [ ] I have read the current official task description and my teacher's instructions.
- [ ] I know the allowed help, the deadline and the file rules.
- [ ] I have set up a development log and a backup routine.

**While you build**
- [ ] My plan lists purpose, input, list, procedure with parameter, algorithm and output.
- [ ] I log each session with dated notes and test results.
- [ ] I credit anything that is not mine.

**Before you submit**
- [ ] The program runs and matches the video.
- [ ] The segments I chose are readable and meet the requirements.
- [ ] I can explain every line in them without notes.
- [ ] My files meet the format and size rules.

**Before exam-day writing**
- [ ] I have reread my own code and my log.
- [ ] I can explain the list, the procedure, the algorithm and my testing.
- [ ] I have practised the answer pattern on a different, small program of my own.

## Where to go next

Practise the writing pattern on a small program that is not your submission, and then review the guide to the multiple-choice exam for the other 70% of your score.
