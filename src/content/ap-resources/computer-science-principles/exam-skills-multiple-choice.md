---
resourceId: "mb-ap-csp-exam-skills-multiple-choice"
title: "The End-of-Course Multiple-Choice Exam: Exam Skills Guide (Computer Science Principles)"
description: "How to read exam pseudocode, handle single-select and select-two items, use elimination, trace code, read a computing-innovation passage and pace 70 questions in 120 minutes, with original practice."
course: "computer-science-principles"
unit: 1
topics: []
resourceType: "exam-skills"
prerequisites:
  - "You have studied at least Units 1 to 3 of the course"
  - "You can trace short programs written in the exam reference notation"
learningObjectives:
  - "Describe the structure of the multiple-choice section and plan your 120 minutes across it"
  - "Read exam pseudocode accurately, including list indexing from 1, MOD, RANDOM and procedures with RETURN"
  - "Answer single-select and select-two questions with a reliable method"
  - "Use tracing tables, elimination and boundary tests to check code"
  - "Read a passage about a computing innovation and answer only from what it says"
skills: ["1", "2", "4", "5"]
studyMinutes: 55
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation, not a copy of the official reference sheet. Use the Exam Reference Sheet from your teacher for the official wording."
related: ["mb-ap-csp-exam-skills-create-task", "mb-ap-csp-3.8-study-guide", "mb-ap-csp-3.10-study-guide", "mb-ap-csp-3.12-study-guide", "mb-ap-csp-3.11-study-guide", "mb-ap-csp-2.1-study-guide"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "The section has 70 questions in 120 minutes: 57 single-select, 5 single-select on a passage and 8 select-two."
  - "Lists start at index 1 and a trace table with current values beats reading code in your head."
  - "In a select-two question both correct answers are needed, so judge every option on its own."
  - "Test code on the edge cases: an empty list, one item, equal values and the first and last positions."
  - "Pace yourself at about 1.7 minutes a question, flag hard items and come back to them."
faqs:
  - question: "Is there a penalty for wrong answers?"
    answer: "Check the current official exam instructions, but the exam has not used a guessing penalty. Answer every question, because a blank can never score."
  - question: "Do I need to know a particular programming language?"
    answer: "No. The exam uses its own reference notation, in block-based and text-based forms. Practise reading it until it feels ordinary."
  - question: "How do I get faster at tracing code?"
    answer: "Always write a table with one column per variable and one row per step. It feels slower for the first few questions and is faster and more accurate afterwards."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## How to use this guide

This guide is for any student preparing for the end-of-course exam in Computer Science Principles. It is about **technique**: how to read the questions, what to do with the code, and how to spend your time. It does not replace the topic study guides. Read it once, then work through the practice items before opening the answers. Every question here is **original Marlbridge practice**. None of it is past exam material, and the code is written in Marlbridge's rendering of the exam reference notation. Exam details change, so check your teacher's current instructions and the official course pages for the format in your exam year.

## The section at a glance

| Feature | Detail |
|---|---|
| Questions | 70 |
| Time | 120 minutes |
| Weight | 70% of the exam score (the Create performance task is the other 30%) |
| Single-select | 57 questions, 4 options, one correct answer |
| Passage questions | 5 single-select questions on a reading passage about a computing innovation |
| Select-two | 8 questions, 4 options, **two** correct answers |
| Tools | No calculator. The Exam Reference Sheet is provided |
| Format | Fully digital |

Roughly, the questions come from the course's five big ideas: creative development, data, algorithms and programming, computer systems and networks, and the impact of computing. Algorithms and programming is the biggest single share, so reading and tracing code matters most. Do not skip the others: the impact of computing questions are often quick marks if you have read the passage carefully.

## Reading the reference notation

Most mistakes in code questions come from reading the notation wrongly, not from misunderstanding the idea. Fix these in your mind.

| Notation | Meaning | Watch for |
|---|---|---|
| `x ← 5` | Assign 5 to `x` | The arrow is not "equals" |
| `a = b` | Test whether `a` equals `b` | Gives `true` or `false` |
| `a ≠ b` | Test whether `a` differs from `b` | |
| `a MOD b` | The remainder when `a` is divided by `b` | `17 MOD 5` is 2; `10 MOD 5` is 0 |
| `aList[i]` | Element at index `i` | **First index is 1** |
| `LENGTH(aList)` | Number of elements now | Changes after INSERT, APPEND, REMOVE |
| `REPEAT n TIMES` | Run the block n times | n is evaluated once |
| `REPEAT UNTIL(cond)` | Check `cond` first, run block until it becomes true | The block may run zero times |
| `FOR EACH item IN aList` | Visit each element in turn | `item` is a copy |
| `RANDOM(a, b)` | Random integer from `a` to `b`, **both included** | `RANDOM(1, 6)` can give 1 and 6 |
| `RETURN(value)` | Leave the procedure and send back `value` | Nothing after it runs |
| `DISPLAY(x)` | Show `x`; separate items are shown in order | |

Two habits repay themselves in every code question.

1. **Write the table.** One column for each variable the code changes, one row for each pass or step. Update only the variable that the line changes, and use *current* values.
2. **Read the whole block before you answer.** A line that sets a variable back to 0 inside a loop, or a `RETURN` inside an `IF`, changes the whole meaning.

### Worked example 1: a trace with MOD

```text
count ← 0
FOR EACH n IN [4, 9, 12, 7, 6]
{
  IF(n MOD 3 = 0)
  {
    count ← count + 1
  }
}
DISPLAY(count)
```

What is displayed?

- (A) 2
- (B) 3
- (C) 4
- (D) 5

<details>
<summary>Answer</summary>

**Answer: (B)**

| n | n MOD 3 | n MOD 3 = 0? | count |
|---|---|---|---|
| (start) | | | 0 |
| 4 | 1 | no | 0 |
| 9 | 0 | yes | 1 |
| 12 | 0 | yes | 2 |
| 7 | 1 | no | 2 |
| 6 | 0 | yes | 3 |

The code counts multiples of 3 in the list: 9, 12 and 6. Option (A) forgets 6; option (C) counts one extra element; option (D) counts every element and ignores the condition.

</details>

## Single-select questions

A single-select question has one best answer among four. A useful routine:

1. **Read the question stem first**, then the code or scenario. Know what you are looking for before you read.
2. **Decide what kind of question it is.** Does it ask for an output, a value after code runs, a missing line, a reason, a definition, or which statement is true?
3. **Predict the answer before looking at the options** when you can. Predicting stops a tempting wrong option from steering you.
4. **Eliminate.** Cross out options that are plainly wrong. Common wrong options are the answer you get from a typical slip, such as counting from 0, using the old value of a variable, or off by one in a loop.
5. **Choose, mark and move.** If two options remain and the clock is running, pick one, flag the question and return later.

### Wrong answers are designed

Each wrong option usually matches a specific mistake. Spotting the mistake it represents is a check on your own answer. If your answer equals the result of the classic slip, look again.

### Worked example 2: choosing the missing line

A procedure should return the number of elements of `aList` that are greater than `limit`.

```text
PROCEDURE countAbove(aList, limit)
{
  total ← 0
  FOR EACH item IN aList
  {
    <MISSING LINE>
  }
  RETURN(total)
}
```

Which replacement for `<MISSING LINE>` works?

- (A) `total ← total + item`
- (B) `IF(item > limit) { total ← total + 1 }`
- (C) `IF(item > limit) { RETURN(total + 1) }`
- (D) `IF(item > limit) { total ← 1 }`

<details>
<summary>Answer</summary>

**Answer: (B)**

The procedure must count, so it adds 1 for each qualifying element and returns the total at the end. (A) adds the *value* of every element, which is a sum. (C) returns early, at the first element above the limit. (D) sets the total to 1 each time, so it can only ever give 0 or 1.

Test with `aList ← [3, 8, 1, 9]` and `limit ← 2`: elements above 2 are 3, 8 and 9, so the answer is 3, and only (B) gives that.

</details>

## Select-two questions

In a select-two question you choose **two** options, and both must be correct. The question says "select two answers". Treat it like four true/false statements.

1. Read the stem.
2. **Judge each option separately** as true or false, writing T or F beside it.
3. You should finish with exactly two T's. If you have three, or one, one of your judgements is wrong, so recheck the closest call.
4. Do not mark a statement as correct because it *sounds* technical. Check it against what you know.

### Worked example 3: select two

Which **two** statements about the Internet are true?

- (A) Data sent across the Internet is split into packets that may take different routes.
- (B) Every message must travel along the same single path from sender to receiver.
- (C) Having several possible routes between devices helps the Internet keep working when part of it fails.
- (D) The Internet and the World Wide Web are two names for exactly the same thing.

<details>
<summary>Answer</summary>

**Answer: (A) and (C)**

(A) is true: packets can be routed independently and put back in order at the destination. (B) is false, since single-path delivery would make failures far worse. (C) is true: redundancy gives fault tolerance. (D) is false: the Web is a service that runs on the Internet, which is the network of networks.

</details>

## Reading a computing-innovation passage

Five questions refer to a passage about a computing innovation, such as a type of app, sensor system or online service. These questions test your reading as much as your knowledge.

- **Read the passage once for the story**, then read each question and go back to the exact lines it needs.
- **Answer from the passage and from the course ideas.** An option may be a reasonable thing in the real world but not supported by the text. Prefer the option the passage supports.
- Expect questions about **data** the innovation collects or uses, **beneficial and harmful effects**, **privacy and security**, **bias**, and what *kind* of data processing is going on.
- Match the vocabulary: if a question asks about "a harmful effect", an option that describes only a benefit is wrong even if it is accurate.

### Original practice passage

A fictional town library trials a "return-time predictor" app. It records the date each book is borrowed and returned, and the borrower's age group. From the history, it estimates when each borrowed book will come back, so staff can tell waiting readers. The library says the data is stored on its own server and used only to improve lending.

Which **two** of the following are potential concerns about the app that follow from the passage?

- (A) The age-group data could reveal patterns about individuals if it is combined with other information.
- (B) The app records the date of each loan, so it cannot be used on a computer.
- (C) If the history mostly comes from one age group, the predictions may be less accurate for others.
- (D) The server is owned by the library, so no data can ever be lost.

<details>
<summary>Answer</summary>

**Answer: (A) and (C)**

(A) is a privacy concern: even without names, combined data can identify people. (C) is a bias concern: a data set that over-represents one group gives predictions that fit that group better. (B) does not follow from anything in the passage. (D) is false, because any system can fail or be attacked.

</details>

## Pacing: 70 questions in 120 minutes

That is about 1 minute 43 seconds a question on average. Quick questions (definitions, short traces) will take 30 to 60 seconds, which pays for longer tracing items.

| Checkpoint | Question number | Time used (guide) |
|---|---|---|
| Quarter | 18 | about 30 minutes |
| Half | 35 | about 60 minutes |
| Three quarters | 53 | about 90 minutes |
| End | 70 | 105 minutes, leaving 15 to review |

- **First pass:** answer everything you can in under two minutes. If you have not got a method after about 90 seconds, flag the question and go on.
- **Second pass:** return to the flagged items. Now you have no new questions to fear, and sometimes a later question reminds you of an idea.
- **Final minutes:** make sure *every* question has an answer selected. A blank cannot earn marks.
- Do not change an answer without a reason. Change it only when you find a specific error in your first reasoning.

## Five technique habits for code

1. **Boundary cases.** Check an empty list, a list with one element, all-equal values, and the first and last positions. Many correct-looking procedures fail one of these.
2. **Off by one.** Ask: does the loop run n times or n + 1 times? Does an index go from 1 to `LENGTH(aList)`, never 0 and never past the end?
3. **Position of a statement.** Moving `total ← 0` into the loop, or a `RETURN` into the loop, changes the result. Notice which block each line sits in.
4. **Order of values after swaps.** To swap two variables you need a third temporary variable. Without one, the first assignment overwrites a value you still need.
5. **Binary search needs sorted data.** If the list is unsorted, binary search can miss a value that is present. Linear search works either way.

### Worked example 4: spotting an edge-case failure

```text
PROCEDURE biggest(aList)
{
  best ← 0
  FOR EACH item IN aList
  {
    IF(item > best)
    {
      best ← item
    }
  }
  RETURN(best)
}
```

A programmer says this procedure always returns the largest value in `aList`. Which input shows that this claim is false?

- (A) `[3, 8, 5]`
- (B) `[7]`
- (C) `[-4, -2, -9]`
- (D) `[2, 2, 2]`

<details>
<summary>Answer</summary>

**Answer: (C)**

`best` starts at 0. With all-negative values no element is greater than 0, so the procedure returns 0, which is not in the list. The inputs in (A), (B) and (D) all contain a positive value, so the procedure gives the right answer for them. A safer start is `best ← aList[1]`.

</details>

## Common misconceptions and slips

| Slip | What it looks like | Fix |
|---|---|---|
| Counting from 0 | Treating `aList[1]` as the second element | Say "first element is index 1" before every list question |
| Using the old value | Calculating `x ← x + 1` twice from the starting value | Update the table row by row |
| Reading `=` as assignment | Thinking `IF(a = 3)` changes `a` | `=` only tests; `←` changes |
| Ignoring the stem | Solving for output when asked for the *number of* times a line runs | Underline the thing asked for |
| Choosing a true but irrelevant option | Picking a correct statement that does not answer the question | Match the option to the stem |
| Over-reading a passage | Picking an option supported by general knowledge but not the text | Point to the line that supports it |
| Rushing select-two | Finding one correct answer and guessing the second | Test every option separately |

## Practice set: original Marlbridge practice

Do these in 12 minutes with no notes. Then check the answers and write down which slip, if any, you made.

**1.** What is displayed?

```text
x ← 2
y ← 5
x ← y
y ← x + 1
DISPLAY(x)
DISPLAY(y)
```

- (A) 2 and 3
- (B) 5 and 6
- (C) 5 and 3
- (D) 2 and 6

**2.** A list begins as `[5, 10, 15]`. After `INSERT(aList, 2, 7)` and then `REMOVE(aList, 3)`, which list results?

- (A) `[5, 7, 15]`
- (B) `[5, 7, 10, 15]`
- (C) `[5, 10, 15]`
- (D) `[7, 10, 15]`

**3.** A student wants a procedure that displays the numbers 1 to 5. Which loop is correct?

- (A) `n ← 1  REPEAT 5 TIMES { DISPLAY(n)  n ← n + 1 }`
- (B) `n ← 0  REPEAT 5 TIMES { DISPLAY(n)  n ← n + 1 }`
- (C) `n ← 1  REPEAT 6 TIMES { DISPLAY(n)  n ← n + 1 }`
- (D) `n ← 1  REPEAT 5 TIMES { n ← n + 1  DISPLAY(n) }`

**4.** Which **two** are true of a sorted list of 1000 elements searched with binary search?

- (A) Binary search can be used because the list is sorted.
- (B) In the worst case it must look at all 1000 elements.
- (C) Each check removes about half of the remaining elements.
- (D) It also works if the list is in random order.

<details>
<summary>Answers and notes</summary>

**1. (B).** After `x ← y`, x is 5. Then `y ← x + 1` uses the *new* x, so y is 6. Option (D) uses the old x of 2. Option (C) is the mixture that comes from skipping a row.

**2. (A).** After the INSERT the list is `[5, 7, 10, 15]`. Index 3 is now 10, so REMOVE(aList, 3) deletes 10, leaving `[5, 7, 15]`. Option (B) forgets the REMOVE; option (C) undoes both changes; option (D) removes the first element instead.

**3. (A).** It starts at 1 and runs five times, so it shows 1 to 5. (B) shows 0 to 4. (C) shows 1 to 6. (D) shows 2 to 6 because it adds before displaying.

**4. (A) and (C).** Binary search needs sorted data, and it halves the remaining range each time, so about 10 checks suffice for 1000 elements. (B) is false for binary search, but would be right for a linear search. (D) is false, since an unsorted list can make binary search miss a present value.

</details>

## A checklist for exam week

- ☐ I can trace a loop, a list operation and a procedure call with a table.
- ☐ I know the exam notation: first index 1, `MOD`, `RANDOM(a, b)` includes both ends, `RETURN` ends a procedure.
- ☐ I have done at least one full timed practice section of my teacher's choosing.
- ☐ I have a first-pass and second-pass routine and I know my checkpoints.
- ☐ For select-two questions I mark each option true or false.
- ☐ I read passages once for the story, then return to the lines each question needs.
- ☐ I have checked the current official exam instructions and my testing device set-up.

## Where to go next

Use the unit reviews for mixed practice, the topic checklists to find gaps, and the guide to the Create performance task for the other 30% of your score.
