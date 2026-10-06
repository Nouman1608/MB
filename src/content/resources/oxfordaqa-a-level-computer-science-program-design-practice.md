---
title: "OxfordAQA A-Level Computer Science: Program design (9645) -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS Program Design Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Program design"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
stage: "AS"
order: 3
syllabusTopics:
  - qualification: "a-level"
    topic: "program-design-9645"
description: "Original OxfordAQA A-Level Computer Science practice questions on program design, with worked answers on tracing, charts and test data."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover section 3.3 Program design (3.3.1 to 3.3.4) of the OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards. All of it is AS content, also needed for the full International A-level. Where a question asks for program code, write it in C#, Python or VB.Net. The model answers use Python. The pseudo-code is language-neutral, because the specification doesn't set out its own conventions: `←` is assignment and arrays are indexed from 0.

Learn the content first in the [study guide](/resources/oxfordaqa-a-level-computer-science-program-design/) and the [revision notes](/resources/oxfordaqa-a-level-computer-science-program-design-revision-notes/). Course hub: [/boards/oxfordaqa/a-level/computer-science/](/boards/oxfordaqa/a-level/computer-science/). Checklist: [/checklists/oxfordaqa/a-level/computer-science/](/checklists/oxfordaqa/a-level/computer-science/).

## Questions

**1.** State what is meant by the term *algorithm*. **[2]**

**2.** A city is building an app that shows riders where hire bikes are available at docking stations.

**(a)** Explain what is meant by abstraction, and identify **two** details about the bikes that the app's data model could leave out. **[3]**
**(b)** Describe how decomposition could be applied to designing the app. **[3]**

**3.** Complete a trace table for this algorithm and state the output. **[5]**

```
text ← "WWBBBW"
result ← ""
count ← 1
FOR i ← 1 TO LEN(text) - 1
    IF text[i] = text[i - 1] THEN
        count ← count + 1
    ELSE
        result ← result + text[i - 1] + STR(count)
        count ← 1
    ENDIF
ENDFOR
result ← result + text[LEN(text) - 1] + STR(count)
OUTPUT result
```

**4.** This subroutine returns two values.

```
SUBROUTINE Summary(scores)
    highest ← scores[0]
    times ← 0
    FOR i ← 0 TO LEN(scores) - 1
        IF scores[i] > highest THEN
            highest ← scores[i]
            times ← 1
        ELSE IF scores[i] = highest THEN
            times ← times + 1
        ENDIF
    ENDFOR
    RETURN highest, times
ENDSUBROUTINE
```

**(a)** Write the subroutine in your chosen programming language. **[4]**
**(b)** State the values returned when the subroutine is called with the list [14, 19, 7, 19, 11]. **[1]**

**5.** A theatre's ticketing program was written as one long block of code, and every variable is global. A team of programmers now has to maintain it. Explain **two** ways in which rewriting it using the structured approach would help the team. **[4]**

**6.** A car-park pay station program must read the car's registration, take payment, calculate the expiry time and print a ticket. Taking payment means either accepting coins or processing a card.

**(a)** Draw a hierarchy chart for the program. **[4]**
**(b)** State what a structure chart would show that your hierarchy chart does not, giving one example from this program. **[2]**

**7.** A greenhouse controller accepts a target temperature, entered to one decimal place, from 12.0 to 30.0 °C inclusive.

**(a)** Draw up a test table with normal, boundary and erroneous test data and the expected result for each. **[5]**
**(b)** Explain why boundary data is included in testing. **[1]**

**8.** A programmer writes:

```
balance ← 50
WHILE balance ≠ 0
    balance ← balance - 15
ENDWHILE
```

**(a)** Explain why this is not an algorithm. **[2]**
**(b)** Correct the loop condition so that it terminates, and state the value of balance when the loop ends. **[2]**

**9.** A shop gives a discount of 5.00 on orders of 50.00 or more. The programmer writes:

```
SUBROUTINE FinalPrice(total)
    discount ← 0
    IF total > 50 THEN
        discount ← 5
    ENDIF
    RETURN total - discount
ENDSUBROUTINE
```

The programmer tests it with 30 and 72, and both results are correct.

**(a)** State the type of test data that would reveal the error, and give a suitable value. **[2]**
**(b)** For your value, state the expected result and the actual result. **[2]**
**(c)** Write the corrected condition. **[1]**
**(d)** State which evaluation criterion the original subroutine fails. **[1]**

**10.** A tennis club wants an app that lets members book courts.

**(a)** Describe how the developers should establish the requirements of the app. **[2]**
**(b)** State **two** things that should be designed before the app is coded. **[2]**
**(c)** Explain what is meant by the critical path, and identify it for this app. **[2]**
**(d)** Suggest how the finished app could be judged against each of correctness, efficiency and maintainability. **[3]**

## Answers

**1.** A sequence of steps that can be followed to complete a task [1], and that always terminates [1]. **[2]**
*Examiner insight:* Termination is the part that is easy to leave out. "A set of instructions" with no mention of finishing gives only half the definition.

**2. (a)** Abstraction is removing unnecessary details from a problem [1] to make it easier to solve. Details that could be left out, any two: **frame colour** [1], **manufacturer or frame material**, date of purchase, **number of gears** [1].
**(b)** Break the problem into sub-problems, each doing one identifiable task [1], for example *find nearest station*, *show bikes available* and *reserve a bike* [1]. Each sub-problem can be broken down further and written as a subroutine, for example *find nearest station* splits into *get rider location* and *calculate distances* [1].
*Examiner insight:* Details you leave out must be truly irrelevant to the app. Bike location or whether a bike is docked must stay, so naming either would not earn credit.

**3.**

| i | text[i] | count | result |
|---|---|---|---|
| – | – | 1 | "" |
| 1 | W | 2 | "" |
| 2 | B | 1 | "W2" |
| 3 | B | 2 | "W2" |
| 4 | B | 3 | "W2" |
| 5 | W | 1 | "W2B3" |

i = 1: count becomes 2 [1]. i = 2: result becomes "W2" and count resets to 1 [1]. i = 3 and 4: count becomes 2 then 3 [1]. i = 5: result becomes "W2B3", count resets to 1 [1]. After the loop, the last character and its count are added: output **W2B3W1** [1].
*Examiner insight:* The final line after the loop is easy to miss. Stopping at "W2B3" leaves the last run uncounted, so read every line below ENDFOR before writing the output.

**4. (a)**

```python
def summary(scores):
    highest = scores[0]
    times = 0
    for score in scores:
        if score > highest:
            highest = score
            times = 1
        elif score == highest:
            times = times + 1
    return highest, times
```

Subroutine defined with the parameter [1]; highest and times initialised, and every item visited [1]; both conditions correct, including resetting times to 1 for a new highest [1]; both values returned [1].
**(b)** highest = **19**, times = **2** [1].
*Examiner insight:* The first item is visited in the loop as well, which is why times starts at 0. Copy the pseudo-code's starting values exactly rather than "improving" them, or the count will be wrong.

**5.** Split the code into modules (subroutines), each with one task [1], so a fault can be traced to and fixed in one module without reading the whole program [1]. Replace global variables with local variables, passing data by parameters and return values [1], so changing one module cannot accidentally change data another module depends on [1]. **[4]**
*Examiner insight:* "Explain" needs the consequence as well as the feature. "Use modules" on its own describes the change but not how it helps the team.

**6. (a)**

```
Pay station
├── Read registration
├── Take payment
│   ├── Accept coins
│   └── Process card
├── Calculate expiry time
└── Print ticket
```

Single top-level box for the program [1]; *Read registration* and *Take payment* on the second level [1]; *Calculate expiry time* and *Print ticket* on the second level [1]; *Accept coins* and *Process card* below *Take payment* [1].
**(b)** The data passed between modules [1], for example *Take payment* returns amountPaid, which is passed to *Calculate expiry time*, which returns expiryTime [1].
*Examiner insight:* Sub-modules must hang from the module they belong to. Putting *Accept coins* on the same level as *Take payment* loses the structure the chart is meant to show.

**7. (a)**

| Type | Value | Expected |
|---|---|---|
| Normal | 21.5 | Accept |
| Boundary | 12.0 and 30.0 | Accept |
| Boundary | 11.9 and 30.1 | Reject |
| Erroneous | "warm" | Reject with message |

Normal value inside the range [1]; both valid boundaries, 12.0 and 30.0 [1]; both invalid values just outside, 11.9 and 30.1 [1]; erroneous value of the wrong type [1]; expected result given for each [1].
**(b)** Errors are most likely at the edges of a range, for example using < where ≤ was needed, and boundary values reveal them [1].
*Examiner insight:* Because entries are to one decimal place, the values just outside the range are 11.9 and 30.1, not 11 and 31. Match the step to the precision of the input.

**8. (a)** balance goes 50, 35, 20, 5, −10 and so on, skipping 0 [1], so the loop never ends, and an algorithm must always terminate [1].
**(b)** `WHILE balance > 0` [1]. The loop ends after four passes with balance = **−10** [1].
*Examiner insight:* Show the values that balance takes. Saying "it loops forever" without showing that 0 is skipped doesn't explain why.

**9. (a)** Boundary data [1]: a total of **50** [1].
**(b)** Expected result **45** [1]; actual result **50** [1].
**(c)** `IF total >= 50 THEN` [1]
**(d)** Correctness [1]
*Examiner insight:* Give both results for the same value. A bare "it gives the wrong answer" does not show that you ran the test.

**10. (a)** By interaction with the intended users, such as members and club staff [1], for example showing them a prototype and refining the requirements from their feedback (an agile approach) [1].
**(b)** Any two [1] [1]: data structures for the data model (courts, members, bookings); the algorithms, such as checking a court is free; the modular structure; the user interface.
**(c)** The part of the solution that everything else depends on [1]. Here it is storing and retrieving court bookings, since availability, booking and cancelling all rely on it [1].
**(d)** Correctness: a court is never booked twice for the same time [1]. Efficiency: availability appears quickly without using excessive memory [1]. Maintainability: another programmer could add a new court or change booking rules easily, helped by clear modules and names [1].
*Examiner insight:* Each criterion needs a point tied to this app. A general definition of maintainability with no link to courts or bookings shows recall but not application.

## Where marks are usually lost

- Defining an algorithm without saying it always terminates.
- Missing a line that runs after a loop ends when tracing.
- Updating a trace variable before the line that changes it has run.
- Converting pseudo-code but changing the starting values or loop bounds.
- Forgetting to return both values when a subroutine returns two.
- Placing sub-modules on the wrong level of a hierarchy chart.
- Giving boundary values on only one side of a limit, or with the wrong step size.
- Writing test data with no expected result.
- Naming a feature of the structured approach without explaining how it helps.
- Giving evaluation criteria as definitions only, with no link to the system described.

## Next steps

- [Program design revision notes](/resources/oxfordaqa-a-level-computer-science-program-design-revision-notes/)
- [Program design study guide](/resources/oxfordaqa-a-level-computer-science-program-design/)
- [Procedural programming practice](/resources/a-computer-science-procedural-practice/) for subroutines and scope
- [OxfordAQA A-Level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)
- [Printable checklist](/checklists/oxfordaqa/a-level/computer-science/)
- [All free 10-minute diagnostics](/diagnostics/)
- [Book a free trial class](/trial/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA. Section 3.3 Program design.
