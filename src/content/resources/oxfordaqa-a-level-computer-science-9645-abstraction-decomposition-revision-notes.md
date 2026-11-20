---
title: "OxfordAQA A-Level Computer Science (9645): Abstraction and decomposition -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Abstraction Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 3 – Program design"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 3.2
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "program-design-9645"
  - qualification: "a-level"
    topic: "program-design-9645"
    subtopic: "abstraction-and-decomposition-oxfordaqa-alevel-cs"
description: "Recall notes for OxfordAQA 9645 sub-topic 3.3.2: definitions of abstraction and decomposition, examples, benefits, exam traps and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.3.2 Abstraction and decomposition** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (AS content in topic 3.3 Program design). For longer examples, see the [abstraction and decomposition study guide](/resources/oxfordaqa-a-level-computer-science-9645-abstraction-decomposition/); then practise with the [abstraction and decomposition practice questions](/resources/oxfordaqa-a-level-computer-science-9645-abstraction-decomposition-practice/).

## What the specification requires

- Be familiar with **abstraction**: removing unnecessary details from a problem to facilitate its solution.
- Be familiar with **decomposition**: breaking a problem into a number of sub-problems, so that each sub-problem accomplishes an identifiable task, which might itself be further subdivided.
- Know that decomposition can be achieved through the use of **subroutines**.

## Key terms

| Term | Meaning |
|---|---|
| Abstraction | Removing unnecessary detail so that the problem is easier to solve |
| Decomposition | Breaking a problem into sub-problems, each with an identifiable task |
| Sub-problem | One part of a larger problem that can be solved on its own |
| Identifiable task | A piece of work you can name and describe |
| Procedural abstraction | Using a subroutine through its name and parameters without knowing its internals |
| Data model | The abstraction of real-world data held in a program |
| Subroutine | A named block of code that carries out a task; used to implement decomposition |

## Abstraction: keep what the purpose needs

The same real object has different abstractions for different purposes.

| Object | Purpose | Kept | Removed |
|---|---|---|---|
| Railway network | Journey planning | Stations, lines, interchanges | Track curves, exact distances |
| Student | Library system | Name, ID, loans | Height, hobbies |
| Student | Timetable | Name, subjects, year | Loans, results |
| Bus route | Counting stops | Ordered stop names | Roads, traffic lights |

Rule: a detail is "unnecessary" only in relation to the purpose.

## Decomposition: split into tasks

Car park system, split in two levels:

1. Get entry and exit times.
2. Work out the stay.
3. Work out the fee: (3.1) up to 60 minutes is 2.00 pounds; (3.2) add 1.50 pounds per further hour or part hour; (3.3) cap at 12.00 pounds.
4. Display the ticket.

Recomputed fees:

| Stay (minutes) | Further part hours | Fee (pounds) |
|---|---|---|
| 45 | 0 | 2.00 |
| 145 | 2 | 5.00 |
| 570 | 9 | 12.00 (15.50 before the cap) |

Each sub-problem becomes a subroutine that can be tested alone.

## Bus route abstraction in code

```python
route = ["Park", "School", "Library", "Market", "Station"]

def stops_between(start, end):
    return abs(route.index(end) - route.index(start))
```

`stops_between("Park", "Station")` returns 4. The data model is just an ordered list.

## Levels of abstraction

Abstraction can be layered. Each layer hides detail from the layer above it.

| Layer | What the user of this layer sees | What is hidden |
|---|---|---|
| Application | Click Save | Which file routines are called |
| Subroutine | `save(document)` | The code inside `save` |
| Operating system | A file in a folder | Which sectors on the drive hold the data |
| Hardware | Bits stored and read | The electronics of the storage device |

A programmer working at one layer can ignore the detail of the layers below. This is why abstraction makes large systems manageable.

## Decomposition checklist

1. State the whole problem in one sentence.
2. Split it into the main tasks. Check that each has a name and one purpose.
3. Split any task that is still too large.
4. Stop when each piece can be written as a short subroutine.
5. Check that the pieces together solve the whole problem and nothing is missing.

## Comparing the two

| | Abstraction | Decomposition |
|---|---|---|
| Asks | What can I ignore? | What are the parts? |
| Makes the problem | Simpler | Smaller |
| Output | A model with needed details only | A set of sub-problems |
| Seen in code as | Data model; calling a subroutine by name | Subroutines |

## Benefits

| Technique | Benefits |
|---|---|
| Abstraction | Less complexity; focus on essentials; reusable general solution; subroutines usable without knowing their code |
| Decomposition | Manageable pieces; parallel work by a team; separate testing; easier to change one part |

## How to answer

1. Quote the definition (use the specification wording).
2. Apply it to the scenario: say what is kept or removed, or list the sub-problems.
3. Give a benefit tied to the scenario.

## Exam traps

- **Abstraction is not "hiding code".** It is removing unnecessary detail, judged against the purpose.
- **Decomposition is not "shorter code".** It is splitting into sub-problems.
- **One task per sub-problem.** "Input and calculate and print" is not decomposed.
- **Do not remove needed detail.** The stop order must stay in the bus example.
- **Sub-problems can be split again.** Stop only when each is small enough to code.
- **Use scenario words.** "Calculate the fee" scores better than "do the calculation".

## Quick self-test

1. Define abstraction.
2. Define decomposition.
3. How can decomposition be achieved in a program?
4. Give one detail kept and one removed when abstracting a student for a library system.
5. A railway map shows only stations and lines. Is this abstraction or decomposition?
6. List three sub-problems for a program that runs a quiz.
7. Why is `sqrt(x)` an example of abstraction?
8. A car park stay is 145 minutes. Using the rules in these notes, what is the fee?
9. Why can the sub-problems be tested separately?
10. True or false: a sub-problem cannot be split further.
11. What does "identifiable task" mean?
12. Give one benefit of decomposition for a team.

### Answers

1. Removing unnecessary details from a problem to facilitate its solution.
2. Breaking a problem into sub-problems, each accomplishing an identifiable task, which might be further subdivided.
3. By using subroutines.
4. Kept: name or loans (any needed item); removed: height or hobbies (any unneeded item).
5. Abstraction.
6. For example: ask a question, check the answer, keep the score, show the result.
7. The programmer uses it without needing to know how the root is calculated.
8. 5.00 pounds (2.00 plus two further part hours at 1.50).
9. Each has a single task and a clear input and output.
10. False. A sub-problem may itself be subdivided.
11. A piece of work that can be named and described.
12. Different programmers can write different parts at the same time.

## Next steps

- [Abstraction and decomposition study guide](/resources/oxfordaqa-a-level-computer-science-9645-abstraction-decomposition/)
- [Abstraction and decomposition practice questions](/resources/oxfordaqa-a-level-computer-science-9645-abstraction-decomposition-practice/)
- [Program design revision notes](/resources/oxfordaqa-a-level-computer-science-program-design-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.3.2 Abstraction and decomposition.
