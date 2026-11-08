---
title: "O Level Computer Science: Algorithm Design and Problem-Solving — Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["o-levels"]
topic: "Algorithm design and problem-solving"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 7
syllabusTopics:
  - qualification: "o-level"
    topic: "algorithm-design-and-problem-solving-2210"
description: "Exam-focused notes for Topic 7 of Cambridge O Level Computer Science 2210, set out by Paper 2 question type: design, purpose, search, sort, validation, tracing."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

Topic 7 of Cambridge O Level Computer Science (2210) appears on Paper 2 in a handful of recurring question types: identify a life-cycle stage, decompose a problem, state an algorithm's purpose, choose test data, complete a trace table, find and correct errors, and write or amend an algorithm. These notes are organised around those question types, with the facts and templates each one needs.

Condensed for the final weeks. For the full teaching, use the
[algorithm design study guide](/resources/o-level-computer-science-algorithm-design/); then practise with the
[algorithm design practice questions](/resources/o-level-computer-science-algorithm-design-practice/).

## Syllabus coverage (2210, 2026–2028)

| Ref | What you must be able to do |
|---|---|
| 7.1 | Program development life cycle: analysis, design, coding, testing |
| 7.2 | Sub-systems; decomposition into inputs, processes, outputs, storage; structure diagrams, flowcharts, pseudocode |
| 7.3 | Explain the purpose of a given algorithm |
| 7.4 | Linear search, bubble sort, totalling, counting, maximum, minimum, average |
| 7.5 | Validation (range, length, type, presence, format, check digit) and verification (visual, double entry) |
| 7.6 | Normal, abnormal, extreme and boundary test data |
| 7.7 | Trace tables recording variables, outputs and user prompts |
| 7.8 | Identify and correct errors in algorithms |
| 7.9 | Write and amend algorithms in pseudocode, program code and flowcharts |

## Question type 1: "Which stage of the life cycle?"

- **Analysis** — abstraction, decomposition, identifying the problem and requirements.
- **Design** — structure diagrams, flowcharts, pseudocode (decomposition again).
- **Coding** — writing code with iterative testing.
- **Testing** — running the code with test data.

## Question type 2: "Decompose the problem"

Name one item for each of **input, process, output, storage**, using the words of the scenario. Abstraction removes details that do not affect the solution.

## Question type 3: "State the purpose of the algorithm"

1. One sentence: what does it achieve? ("It finds the cheapest item.")
2. Then the processes: what is input, what the loop does, what decisions are made, what is output.

Don't translate it line by line — that describes the code, not its purpose.

## Question type 4: "Choose test data"

Range 1–50 inclusive, whole numbers:

| Normal | Abnormal | Extreme | Boundary |
|---|---|---|---|
| 25 (accept) | 51, 0, "ten" (reject) | 1, 50 (accept) | 0/1 and 50/51 |

## Question type 5: "Complete the trace table"

- One column per variable plus OUTPUT; record **user prompts** in the output column too.
- Write a value only when it changes; move down a row each time.
- Check loop conditions carefully — a `<` versus `<=` decides whether the last pass happens.

## Question type 6: "Find and correct the errors"

Typical planted errors:

| Planted error | Fix |
|---|---|
| Counter or total starts at 1 | Start at 0 |
| Maximum starts at a large value (or minimum at a small one) | Start maximum low / minimum high, or at the first item |
| `AND` where `OR` is needed in a loop condition | Swap the operator |
| Output inside the loop | Move it after the loop |
| Wrong variable incremented (`Count ← Index + 1`) | `Count ← Count + 1` |
| Comparison the wrong way round (`<` for a maximum) | Use `>` |

## Question type 7: "Write the algorithm"

Templates to adapt (2210 pseudocode):

**Validation with re-entry**

```
REPEAT
    OUTPUT "Enter the number of guests (1 to 6)"
    INPUT Guests
    IF Guests < 1 OR Guests > 6
      THEN
        OUTPUT "Invalid, try again"
    ENDIF
UNTIL Guests >= 1 AND Guests <= 6
```

**Minimum and average from an array of 15 prices**

```
Cheapest ← Price[1]
Sum ← 0
FOR Item ← 1 TO 15
    Sum ← Sum + Price[Item]
    IF Price[Item] < Cheapest
      THEN
        Cheapest ← Price[Item]
    ENDIF
NEXT Item
OUTPUT "Cheapest: ", Cheapest, " Mean: ", Sum / 15
```

**Linear search** — loop while not found and not past the end; set a Boolean flag when found; output the result after the loop.

**Bubble sort** — repeat passes comparing `List[i]` with `List[i + 1]`; swap through a temporary variable; stop when a pass makes no swaps.

## Validation and verification in one table

| Check | Catches |
|---|---|
| Range | Values outside limits |
| Length | Too many or too few characters |
| Type | Wrong data type |
| Presence | Missing data |
| Format | Data not matching a pattern |
| Check digit | Transcription errors in codes such as barcodes |
| Visual (verification) | Entry differs from the source document |
| Double entry (verification) | Two entries differ |

## 2210 and its sibling syllabus

Topic 7 learning outcomes are the same in 2210 and Cambridge IGCSE Computer Science (0478), including the pseudocode format published in section 4 of each syllabus.

## Exam traps

Drawn from our [practice page](/resources/o-level-computer-science-algorithm-design-practice/), which paraphrases the Cambridge 2210 June 2025 mark schemes and lists where marks are usually lost:

- For an inclusive range check, extreme data was credited **only for the two limits themselves**; boundary data needed a limit and the value just outside it.
- The credited reason for verification was making sure data was **not altered as it was entered**.
- Each error was credited for identifying the faulty line (by number or by quoting it) **and** giving a correct replacement.
- When explaining how a loop stops, name the variables and the condition — "when it is done" scores nothing.
- A range check with `<` instead of `<=` wrongly rejects a limit value.

## Frequently asked questions

**Will I have to draw a flowchart?**
You may be asked to write or amend an algorithm as a flowchart, so know the standard symbols in section 4 of the 2210 syllabus: terminator, process, input/output, decision, subroutine and flow lines.

**Is a check digit validation or verification?**
Validation. The 2210 syllabus lists the check digit with the other validation checks.

**How precise does my pseudocode need to be?**
Precise enough that there is only one meaning. Use operators such as `>=`, not words such as "is at least".

## Self-test

1. Which life-cycle stage includes abstraction?
2. Give the extreme data for a whole number from 5 to 25.
3. Name the two verification checks.
4. In a bubble sort, what variable lets the algorithm stop early?
5. Why should an average be calculated after the loop?

**Answers:** 1. Analysis. 2. 5 and 25. 3. Visual check and double entry check. 4. A Boolean flag (such as `Swapped`) that records whether any swap was made in a pass. 5. All the values must be added to the total first; inside the loop the average would be calculated, and possibly output, many times using an incomplete total.
