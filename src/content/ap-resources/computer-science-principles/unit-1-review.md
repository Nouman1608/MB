---
resourceId: "mb-ap-csp-u1-review"
title: "Creative Development: Mixed Unit Review (Computer Science Principles Unit 1)"
description: "Big ideas, a one-table method summary and six original exam-style questions that combine Unit 1 topics, with worked solutions and suggested rubrics."
course: "computer-science-principles"
unit: 1
topics: []
resourceType: "unit-review"
prerequisites: 
  - "You have studied Topics 1.1 to 1.4"
  - "You have tried the Unit 1 diagnostic and closed any gaps it showed"
prerequisiteResources: ["mb-ap-csp-u1-diagnostic"]
learningObjectives: 
  - "Connect the ideas of Unit 1: collaboration, purpose, development process and error finding"
  - "Answer multi-part scenario questions that combine more than one topic"
  - "Justify design and testing choices using the details of a scenario"
  - "Write precise short answers, naming the specific idea asked for"
skills: ["1", "2", "4"]
studyMinutes: 50
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-u1-diagnostic", "mb-ap-csp-1.1-checklist", "mb-ap-csp-1.2-checklist", "mb-ap-csp-1.3-checklist", "mb-ap-csp-1.4-checklist"]
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "People shape programs: diverse input and user consultation help a product serve more people and carry less bias."
  - "A program has a purpose, a function and a behavior; inputs, events and outputs describe how it interacts."
  - "Development is iterative and incremental in practice, with documentation and acknowledgement throughout."
  - "Testing compares actual outputs with the outputs the requirements expect; boundaries are where errors hide."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "drafted"
---

Read the big ideas and the method table, then try the six questions without notes.

These are **original Marlbridge practice questions**, not past exam questions, with fictional scenarios. The rubrics are a **suggested Marlbridge rubric**, not official scoring. Code uses Marlbridge's rendering of the course's reference notation. No calculator is needed.

## Big ideas of the unit

- **Programs are made by people and for people.** Different perspectives, from teammates and from users, improve what is built and help avoid bias ([1.1](/advanced-course-resources/computer-science-principles/1-1-collaboration-study-guide/)).
- **Know what the program is for.** Purpose is why; function is what; behavior is how it acts when it runs. Inputs, events and outputs describe its interaction ([1.2](/advanced-course-resources/computer-science-principles/1-2-program-function-purpose-study-guide/)).
- **Development is a process, not a line.** Investigating, designing, prototyping and testing repeat. Iterative means revising from feedback; incremental means adding verified pieces; documentation and acknowledgement run throughout ([1.3](/advanced-course-resources/computer-science-principles/1-3-program-design-development-study-guide/)).
- **Testing needs expected outputs.** Requirements say what to expect; tests at and beyond the extremes expose logic errors, and the four error types call for different responses ([1.4](/advanced-course-resources/computer-science-principles/1-4-identifying-correcting-errors-study-guide/)).

## Key relationships and methods

| If the question asks you to... | Use... | Watch out for... |
|---|---|---|
| Explain a benefit of collaboration | A named missing perspective and the problem it prevents | Vague words such as "more ideas" |
| Separate purpose, function, behavior | Why / what / how it acts | Calling a function a purpose |
| Identify input, event, output | Into the program / trigger / out of the program | Treating a device response as input |
| Classify a development activity | Investigate, design, prototype, test | Calling every loop-back "incremental" |
| Describe documentation | Describes code and how it was developed; acknowledges sources | Saying comments change behavior |
| Find an error | Expected from the requirement vs actual; trace table | Taking the expected output from the code |
| Choose tests | Typical, boundary and just-beyond values | Only typical values |

## Question 1 (multiple choice · mixed)

A fictional team builds a school-canteen ordering app. Which pair of actions shows both **collaboration with users** and **an iterative process**?

- (A) The team writes the complete app, then asks a teacher to approve it.
- (B) The team surveys pupils and canteen staff, tests a first menu screen with them, and redesigns it after their comments.
- (C) The team splits the screens among members and combines them at the end without testing.
- (D) The team copies a menu design from a restaurant app and does not change it.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Surveying and testing with users is collaboration with users; redesigning after feedback is iterative.

- (A) asks for approval only at the end and has no revision cycle.
- (C) has no user input and no testing.
- (D) has no consultation and no revision.
</details>

## Question 2 (multiple choice · mixed)

```text
score ← INPUT()
IF (score >= 60)
{
  DISPLAY("pass")
}
ELSE
{
  DISPLAY("fail")
}
```

The requirement is: "pass for scores of 60 or more". A teacher plans tests. Which set is **best**?

- (A) 10, 20, 30
- (B) 59, 60, 61
- (C) 90, 95, 100
- (D) 60 only

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** It tests at and either side of the boundary and shows both outcomes (59 fails; 60 and 61 pass).

- (A) only tests fail results far from the boundary.
- (C) only tests pass results far from the boundary.
- (D) tests one value and shows only one outcome, so it would not check that a score just below 60 fails.
</details>

## Question 3 (multiple choice, select two · mixed)

A student's program displays the wrong total but finishes normally. Which **two** statements are accurate?

- (A) This is a logic error.
- (B) This is a syntax error, because the output is wrong.
- (C) Hand tracing with a table of variable values could help locate the problem.
- (D) Deleting the comments should fix it.

<details>
<summary>Answer and explanation</summary>

**Answer: (A) and (C).** Wrong behavior in a program that runs to the end is a logic error, and tracing is an effective way to find it.

- (B) a syntax error breaks language rules, often stopping the program.
- (D) comments do not affect behavior.
</details>

## Question 4 (constructed response · 1.1 and 1.3)

A fictional team of five classmates, all aged 15, is building an app for tourists visiting their town. They plan to ask only their classmates what the app should include.

(a) Explain **one** problem with their plan. (2 points)

(b) Describe **one** investigation method they could use instead, and give **one** requirement it might produce. (2 points)

(c) After testing a first version with tourists, the team changes the search screen and tests again. Name the type of process shown and explain. (2 points)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (6 points).**

| Point | Award when the response… |
|---|---|
| 1 | says classmates are not the users; the plan leaves out tourists' perspectives |
| 2 | says what could go wrong (the app may miss maps, languages or opening hours tourists need) |
| 3 | names a method (interviewing or surveying tourists, observing tourists at the information office) |
| 4 | gives a requirement (for example, the app must show opening times for each attraction) |
| 5 | identifies the process as iterative |
| 6 | explains that feedback from testing led to revision and a return to an earlier phase |

**Sample response.** (a) Classmates live there and do not need what visitors need, so the app could leave out things tourists want. (b) Interview tourists at the information office; a requirement might be that the app displays opening hours. (c) Iterative: they revised the search screen because of feedback and tested again.
</details>

## Question 5 (constructed response · 1.2 and 1.4)

A fictional app displays a message when a user's step count reaches a goal.

```text
steps ← 0
goal ← INPUT()
REPEAT UNTIL (steps = goal)
{
  steps ← steps + 1
}
DISPLAY("Goal reached")
```

(a) Describe the function of the code in one sentence. (1 point)

(b) State the output when the input is 3, and show the values of `steps` after each pass. (2 points)

(c) A tester enters 0. Describe what happens and why it matches the requirement "display the message when the goal is reached". (1 point)

(d) A tester enters -2. Explain what goes wrong and what type of error this is. (2 points)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (6 points).**

| Point | Award when the response… |
|---|---|
| 1 | says the code counts up one step at a time until the goal is reached, then displays the message |
| 2 | shows `steps` as 1, 2, 3 after the passes |
| 3 | states the output "Goal reached" |
| 4 | says that for input 0 the loop does not run (steps already equals goal) and the message displays at once |
| 5 | says that for -2 `steps` counts upward from 0 and never equals -2, so the loop never ends |
| 6 | names it a logic error (the program does not handle that input; also acceptable: describe it as a flaw that a test case with a negative input would reveal) |

**Sample response.** (a) It adds 1 to a count until it matches the goal, then shows "Goal reached". (b) steps: 1, 2, 3; output "Goal reached". (c) The loop is skipped because 0 = 0 at the start, and the message shows straight away, which is correct. (d) steps goes 1, 2, 3, ... and never equals -2, so the program never finishes. It is a logic error: the algorithm does not cope with a negative goal, which a boundary test would have found.
</details>

## Question 6 (constructed response · all topics)

A fictional team has finished a program that converts a temperature from degrees Celsius to degrees Fahrenheit using `f ← c * 9 / 5 + 32`. The team wants to document and test it before sharing it with other students.

(a) Write a comment for the statement that explains its purpose. (1 point)

(b) The formula was suggested by a student, Maria Costa. Show how to acknowledge her. (1 point)

(c) Give **three** test inputs with expected outputs, including one that is a typical value and one that tests a limit of the allowed values (for example, the freezing point). (3 points)

(d) Explain why passing your three tests would not prove the program correct. (1 point)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (6 points).**

| Point | Award when the response… |
|---|---|
| 1 | gives a comment that states the purpose (converts the Celsius value to Fahrenheit) |
| 2 | gives an acknowledgement that names Maria Costa and what she contributed |
| 3 to 5 | gives three correct tests, with correct expected outputs (one point each), for example 0 gives 32, 100 gives 212, 37 gives 98.6, -40 gives -40 |
| 6 | says the tests cover only those inputs; other inputs could still show an error |

**Sample response.** (a) `/* Converts temperature c in Celsius to Fahrenheit. */` (b) `/* Formula suggested by Maria Costa. */` (c) 0 should give 32; 100 should give 212; -40 should give -40 (both scales agree). (d) The program could still fail on inputs not tested, such as very large or non-numeric values.
</details>

## How did you do?

If you lost marks on the scenario questions, check whether you named the specific idea asked for (a perspective, a phase, an error type) and linked it to the scenario. For gaps, return to the topic checklists: [1.1](/advanced-course-resources/computer-science-principles/1-1-collaboration-checklist/), [1.2](/advanced-course-resources/computer-science-principles/1-2-program-function-purpose-checklist/), [1.3](/advanced-course-resources/computer-science-principles/1-3-program-design-development-checklist/) and [1.4](/advanced-course-resources/computer-science-principles/1-4-identifying-correcting-errors-checklist/). Then go to the [Unit 2 diagnostic](/advanced-course-resources/computer-science-principles/unit-2-diagnostic/) when it is time to move on.
