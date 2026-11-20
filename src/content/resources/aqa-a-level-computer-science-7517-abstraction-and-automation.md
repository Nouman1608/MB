---
title: "AQA A-Level Computer Science (7517): Abstraction and automation"
seoTitle: "AQA A-Level CS Abstraction Study Guide"
resourceType: "study-guides"
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
description: "Deeper guide to AQA 7517 section 4.4.1 Abstraction and automation: algorithms and tracing, the kinds of abstraction, decomposition, composition and automation."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.4.1 Abstraction and automation** in AQA A-Level Computer Science (7517). The specification splits it into eleven content blocks: problem-solving, following and writing algorithms, abstraction, information hiding, procedural abstraction, functional abstraction, data abstraction, problem abstraction/reduction, decomposition, composition and automation.

Most of these are definitions you must recognise and apply to a scenario, so the skill is to give a precise definition and then a concrete example. The wider [theory of computation study guide](/resources/aqa-a-level-computer-science-theory-of-computation-study-guide/) gives an overview of section 4.4. Condensed notes are in the [abstraction and automation revision notes](/resources/aqa-a-level-computer-science-7517-abstraction-and-automation-revision-notes/), and exam-style questions are in the [abstraction and automation practice questions](/resources/aqa-a-level-computer-science-7517-abstraction-and-automation-practice/).

## 4.4.1.1 Problem-solving

You must be able to **develop** and **check** solutions to simple logic problems. A logic problem gives a set of conditions and asks what follows from them, or when an outcome happens. Develop a solution by stating the conditions precisely, usually with AND, OR and NOT, and then check it by testing every combination or a set of examples that cover each boundary.

**Example.** An alarm sounds if the door is open while the system is armed, or if the smoke sensor is triggered whether or not the system is armed. As a condition: `alarm ← (door_open AND armed) OR smoke`. To check it, try the cases: door open and armed with no smoke gives True; door open but not armed with no smoke gives False; smoke alone gives True. A solution that has been checked against these cases can be trusted much more than one that has not.

## 4.4.1.2 Following and writing algorithms

An **algorithm** is a sequence of steps that can be followed to complete a task and that **always terminates**. Both parts matter. An instruction list that could run for ever (a loop whose condition never becomes false) is not an algorithm.

You must be able to express a solution to a simple problem in pseudocode using the four standard constructs:

- **sequence**: instructions carried out one after another;
- **assignment**: giving a variable a value, for example `total ← total + digit`;
- **selection**: choosing between paths, with `IF ... THEN ... ELSE`;
- **iteration**: repeating, with `WHILE`, `REPEAT ... UNTIL` or `FOR`.

You must also be able to **hand-trace** an algorithm and convert pseudocode into a high-level language program. You must be able to **argue for its correctness and efficiency** using logical reasoning, test data and user feedback.

### Worked example: hand-tracing

```
total ← 0
n ← 4729
WHILE n > 0
    digit ← n MOD 10
    total ← total + digit
    n ← n DIV 10
ENDWHILE
OUTPUT total
```

| Iteration | n at start | digit | total after | n after |
|---|---|---|---|---|
| 1 | 4729 | 9 | 9 | 472 |
| 2 | 472 | 2 | 11 | 47 |
| 3 | 47 | 7 | 18 | 4 |
| 4 | 4 | 4 | 22 | 0 |

The condition `n > 0` is now false, so the loop ends and the output is **22**, the sum of the digits. The algorithm terminates because `n` becomes smaller by a factor of ten on every pass, so it must reach 0.

To argue for correctness, say what the loop does on each pass (removes the last digit and adds it to the total), what is true when it stops (all digits have been added) and test with extreme data such as 0 (output 0, no passes), a single digit and a number with zeros inside, like 1005.

## 4.4.1.3 Abstraction

**Abstraction** is the process of removing unnecessary detail so that you can focus on what matters for the problem. The specification identifies two forms:

- **Representational abstraction**: a representation arrived at by removing unnecessary details. A map of a railway network shows stations and the lines between them, but not the real distances, gradients or the shape of the track. A programmer can use it to plan a journey without those details.
- **Abstraction by generalisation or categorisation**: grouping things by common characteristics to arrive at a hierarchy of the "**is a kind of**" type. A car **is a kind of** vehicle, and so is a lorry. Properties shared by all vehicles (such as a number of wheels or a speed) belong to the general category. This is the idea behind class hierarchies and inheritance in object-oriented programming.

## 4.4.1.4 Information hiding

**Information hiding** is hiding all the details of an object that do not contribute to its essential characteristics. A user of a `Stack` needs to know that it has `Push`, `Pop` and `IsEmpty`. They do not need to know whether the data is held in an array or a linked list. Hiding the detail means the internal design can change without breaking the code that uses it, and it stops other code from changing the data in ways that break its rules.

## 4.4.1.5 Procedural abstraction

**Procedural abstraction** represents a computational method. Start from a specific computation, such as drawing a square of side 50. Replace the actual values with parameters, and the result is a **computational pattern or method**: a **procedure**, `DrawSquare(side)`, which can be used for any side. The abstraction removes the particular values and keeps the method.

## 4.4.1.6 Functional abstraction

In **functional abstraction** the particular computation method is **hidden**. The result of procedural abstraction is a procedure, not a function; getting a function needs one further step, which disregards *how* the result is produced. A function such as `SquareRoot(x)` takes a value in and gives a value out. The caller knows what it returns but not whether it uses repeated approximation, a table or a hardware instruction, and does not care. The same function could be re-implemented with a faster method without any change to the code that calls it.

## 4.4.1.7 Data abstraction

In **data abstraction** the details of how data is represented are hidden, so new kinds of data object can be built from previously defined types. It allows us to isolate **how a compound data object is used** from **how it is constructed**. For example, a stack could be implemented as an array and a pointer for the top of the stack. A programmer using the stack only calls `Push` and `Pop`. The same abstract data type might later be rebuilt as a linked list, with no change in the code that uses it.

## 4.4.1.8 Problem abstraction/reduction

In **problem abstraction** (or **reduction**) details are removed until the problem is in a form that can be solved, because it **reduces to a problem that has already been solved**.

**Example.** To find the median of a set of exam marks, sort them and take the middle value. The median problem reduces to sorting, for which algorithms already exist. A second example is a sliding tile puzzle, which can be abstracted to finding a path through a graph whose vertices are board positions, so a shortest-path algorithm solves it.

## 4.4.1.9 Decomposition

**Procedural decomposition** means breaking a problem into a number of **sub-problems**, so that each sub-problem accomplishes an identifiable task, and each might itself be further subdivided.

**Example.** A program to run a quiz can be decomposed into: load the questions; for each question, display it, read the answer, mark it; and show the final score. "Mark it" could be subdivided further into converting the answer to a standard form, comparing it with the correct answer and updating the score. Each sub-problem becomes a subroutine, which can be written, tested and reused on its own.

## 4.4.1.10 Composition

**Composition** is the opposite process to decomposition. You build:

- a **composition abstraction** by combining procedures to form **compound procedures**. For example, `DrawHouse` calls `DrawSquare` for the walls and `DrawTriangle` for the roof;
- **data abstractions** by combining data objects to form **compound data**. A record that combines a name, an age and a score is compound data, and so is a **tree data structure**, which combines nodes through pointers.

Decomposition takes a big problem apart. Composition puts simple parts together to make bigger ones.

## 4.4.1.11 Automation

**Computer science** is about building clean abstract models (abstractions) of the messy, noisy real world, and deciding what to include in a model and what to discard, so as to have the minimum detail needed to solve the problem to the required accuracy. **Automation** is putting those models into action to solve problems. The specification gives four steps:

1. creating **algorithms**;
2. implementing the algorithms in **program code** (instructions);
3. implementing the models in **data structures**;
4. **executing** the code.

**Example.** A bus company wants to predict arrival times. The model might be a graph of stops with average travel times as weights and a list of timetables. The algorithm finds the quickest route between stops. The code is written in a high-level language, the graph is held in an adjacency list, and when the program runs on a computer the prediction is calculated automatically for every passenger.

## How the ideas fit together

| Idea | In one line |
|---|---|
| Abstraction | Remove detail that does not matter |
| Information hiding | Hide details that are not essential characteristics |
| Procedural abstraction | Replace values with parameters to get a reusable method |
| Functional abstraction | Hide the method used to compute a result |
| Data abstraction | Hide how data is stored, expose how it is used |
| Problem reduction | Turn the problem into one already solved |
| Decomposition | Split into sub-problems |
| Composition | Combine parts into compound procedures or data |
| Automation | Model, algorithm, code, execution |

## Common mistakes

- Defining an algorithm without saying that it must terminate.
- Confusing procedural abstraction (keeping the method, removing the values) with functional abstraction (hiding the method).
- Describing decomposition and composition as the same thing. They are opposite directions.
- Using "abstraction" to mean "making something vague" instead of removing unnecessary detail.
- Giving a definition with no example when the question says "explain" or "give an example".
- Confusing data abstraction (hiding the representation) with a data structure's implementation itself.

## Exam technique

- **Define, then illustrate.** One precise sentence, then an example from the scenario in the question.
- **Hand-trace** with a table and show every variable that changes.
- **Name the abstraction** that is being used in a scenario: representational, generalisation, procedural, functional, data or problem reduction.
- Use the specification's own phrases, such as "is a kind of", "isolate how it is used from how it is constructed" and "reduces to one that has already been solved".

## Related resources

- [Abstraction and automation revision notes](/resources/aqa-a-level-computer-science-7517-abstraction-and-automation-revision-notes/)
- [Abstraction and automation practice questions](/resources/aqa-a-level-computer-science-7517-abstraction-and-automation-practice/)
- [Abstract data types study guide for 4.2.1.4](/resources/aqa-a-level-computer-science-7517-abstract-data-types-data-structures/)
- [Classification of algorithms study guide](/resources/aqa-a-level-computer-science-7517-classification-of-algorithms/)

*Written against the AQA A-level Computer Science (7517) specification, 4.4.1 Abstraction and automation. Always check the current specification on the AQA website.*
