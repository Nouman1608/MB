---
title: "AQA A-Level Computer Science (7517): Abstraction and automation -- Revision Notes"
seoTitle: "AQA A-Level CS Abstraction Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Theory of computation"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 4.1
syllabusTopics:
  - qualification: "a-level"
    topic: "theory-of-computation-7517"
  - qualification: "a-level"
    topic: "theory-of-computation-7517"
    subtopic: "abstraction-and-automation-7517"
description: "Condensed AQA 7517 section 4.4.1 recall: algorithms, the forms of abstraction, information hiding, decomposition, composition and automation, with a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.4.1 Abstraction and automation**, AQA A-Level Computer Science (7517). Fuller explanations and examples are in the [abstraction and automation study guide](/resources/aqa-a-level-computer-science-7517-abstraction-and-automation/); exam-style questions are in the [abstraction and automation practice questions](/resources/aqa-a-level-computer-science-7517-abstraction-and-automation-practice/).

## Algorithms (4.4.1.1 and 4.4.1.2)

- **Algorithm:** a sequence of steps that can be followed to complete a task and that **always terminates**.
- **Four constructs:** sequence, assignment, selection, iteration.
- **Skills:** express a solution in pseudocode, **hand-trace** it, convert it to a high-level language, and argue for its **correctness** and **efficiency** using logical reasoning, test data and user feedback.
- **Logic problems:** state the conditions with AND, OR and NOT, then **check** with cases that cover each combination or boundary.

**Trace check.** Digit sum of 4729: n takes the values 4729, 472, 47, 4, 0; digits added are 9, 2, 7, 4; the total is 22. The loop ends because n shrinks by a factor of ten each time, so it must reach 0.

## The forms of abstraction at a glance

| Term | Definition | Example |
|---|---|---|
| Abstraction | Removing unnecessary detail to focus on what matters | A railway map |
| Representational abstraction | A representation reached by **removing unnecessary details** | Map showing stations and lines only |
| Abstraction by generalisation or categorisation | Grouping by common characteristics, giving an **"is a kind of"** hierarchy | Car and lorry are kinds of vehicle |
| Information hiding | Hiding all details of an object that do not contribute to its **essential characteristics** | A stack user sees Push and Pop only |
| Procedural abstraction | Replacing actual values by parameters to give a **computational method**: a procedure | `DrawSquare(side)` |
| Functional abstraction | The **method** of computation is hidden; the result is a function | `SquareRoot(x)` |
| Data abstraction | Hiding **how data is represented**; new data objects built from existing types | Stack as array and pointer |
| Problem abstraction/reduction | Removing details until the problem **reduces to one already solved** | Median found by sorting |
| Decomposition | Breaking a problem into **sub-problems**, each an identifiable task | Quiz: load, ask, mark, score |
| Composition | Combining procedures or data objects into **compound** ones | `DrawHouse`; a record; a tree |
| Automation | Putting models into action: algorithm, code, data structure, execution | Bus arrival prediction |

## Telling similar terms apart

- **Procedural vs functional abstraction.** Procedural: the *method* is kept and the *values* are removed (a parameterised procedure). Functional: the *method itself* is hidden; only input and output matter.
- **Data abstraction vs information hiding.** Information hiding is the general idea of hiding non-essential detail. Data abstraction applies it to data: isolate how a compound object is **used** from how it is **built**.
- **Decomposition vs composition.** Decomposition splits a problem down. Composition builds bigger things up from parts.
- **Abstraction vs automation.** Abstraction produces the model. Automation makes the model run to solve the problem.

## Automation: the four things

1. Create **algorithms**.
2. Implement the algorithms in **program code**.
3. Implement the models in **data structures**.
4. **Execute** the code.

A model is a clean abstraction of messy real-world objects. Computer scientists choose what to include and what to discard: the **minimum detail** needed to solve the problem to the **required accuracy**.

## Why abstraction helps

- It makes problems **manageable** by reducing detail.
- It allows **reuse** (procedures, functions, data types).
- Hidden detail can **change without breaking** the code that uses it.
- Different programmers can work on different parts of a program at the same time.

## Worked examples to learn

- **Representational:** an underground map shows connections, not geography.
- **Generalisation:** `Vehicle` is a general class with `Car` and `Lorry` as kinds of vehicle.
- **Procedural:** `DrawSquare(50)` becomes `DrawSquare(side)`.
- **Functional:** callers of `SquareRoot` do not know how it works.
- **Data:** stack as array and a top-of-stack pointer.
- **Reduction:** a sliding puzzle becomes a shortest-path problem on a graph of positions.
- **Decomposition:** a quiz program split into subroutines.
- **Composition:** a tree built from nodes joined by pointers.

## Exam traps

- **Missing "terminates"** in the definition of an algorithm.
- **Mixing up** procedural and functional abstraction.
- **No example** when an example is requested.
- **Vague wording**: say "removes unnecessary detail", not "simplifies".
- **Incomplete trace**: show every variable that changes.
- **Forgetting accuracy**: a model must be accurate enough for its purpose.

## Key terms

| Term | Definition |
|---|---|
| Algorithm | A sequence of steps that completes a task and always terminates |
| Hand-trace | Following an algorithm by hand, recording variable values at each step |
| Abstraction | Removing unnecessary detail to focus on essentials |
| Information hiding | Concealing details that are not essential characteristics |
| Procedure | A named, reusable block of code resulting from procedural abstraction |
| Function | A named block that returns a value, with its method hidden from the caller |
| Compound data | Data built by combining other data objects |
| Decomposition | Splitting a problem into smaller sub-problems |
| Automation | Executing models and algorithms on a computer |

## Self-test

1. State the two requirements of an algorithm in the specification's definition.
2. Name the four standard constructs.
3. What is representational abstraction?
4. What kind of relationship does abstraction by generalisation give?
5. What is hidden in functional abstraction?
6. Give an example of data abstraction.
7. What does problem reduction mean?
8. Define decomposition and give one benefit.
9. How does composition differ from decomposition?
10. List the four steps of automation.

**Answers**

1. It is a sequence of steps that can be followed to complete a task, and it always terminates.
2. Sequence, assignment, selection, iteration.
3. A representation arrived at by removing unnecessary details.
4. A hierarchical "is a kind of" relationship.
5. The particular computation method.
6. A stack implemented as an array and a pointer, used only through Push and Pop.
7. Removing details until the problem becomes one that has already been solved.
8. Breaking a problem into sub-problems, each an identifiable task. Any one benefit: each part can be written, tested and reused separately; the work can be shared.
9. Composition combines procedures or data objects into compound ones, whereas decomposition splits a problem into parts.
10. Create algorithms; implement them in program code; implement the models in data structures; execute the code.

## More resources on this topic

- [Abstraction and automation study guide](/resources/aqa-a-level-computer-science-7517-abstraction-and-automation/)
- [Abstraction and automation practice questions](/resources/aqa-a-level-computer-science-7517-abstraction-and-automation-practice/)
- [Abstract data types revision notes for 4.2.1.4](/resources/aqa-a-level-computer-science-7517-abstract-data-types-data-structures-revision-notes/)
- [Theory of computation revision notes](/resources/aqa-a-level-computer-science-theory-of-computation-revision-notes/)
