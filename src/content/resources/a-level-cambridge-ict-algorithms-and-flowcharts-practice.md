---
title: "Cambridge A Level Information Technology (ICT): Algorithms and flowcharts (9626) -- Practice Questions"
seoTitle: "Cambridge 9626 ICT Algorithms and Flowcharts Practice"
resourceType: "practice-questions"
subject: "ict"
level: ["a-levels"]
topic: "Algorithms and flowcharts"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 4
syllabusTopics:
  - qualification: "a-level"
    topic: "algorithms-and-flowcharts"
description: "Original practice questions with marked answers for Cambridge 9626 IT Topic 4: trace tables, pseudocode writing, flowcharts and finding errors."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover **Topic 4 Algorithms and flowcharts** (sections 4.1 Algorithms and 4.2 Flowcharts) of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027. This is **AS Level** content, examined in Paper 1 Theory; Paper 2 Practical also expects you to apply knowledge from sections 1–7. Every question can be answered on paper.

Before you start, read the [study guide](/resources/a-level-cambridge-ict-algorithms-and-flowcharts/) or the [revision notes](/resources/a-level-cambridge-ict-algorithms-and-flowcharts-revision-notes/). Course links: [Cambridge A Level ICT hub](/boards/cambridge/a-level/ict/) · [printable checklist](/checklists/cambridge/a-level/ict/). For control-system scenarios, see also the [Monitoring and control practice](/resources/a-level-ict-monitoring-control-practice/).

Pseudocode below uses `←` for assignment and the comparison operators >, < and =.

## Questions

**1.** Describe the shape of each of these program flowchart symbols: input/output, terminator, subroutine. **[3]**

**2.** Explain the difference between a WHILE…ENDWHILE loop and a REPEAT…UNTIL loop. **[2]**

**3.** Look at this algorithm.

```
FOR N ← 3 TO 15 STEP 4
    PRINT N * 2
NEXT N
```

**(a)** State the values that are output. **[2]**
**(b)** State how many times the loop would run if the step were changed to 5. **[1]**

**4.** A weather station sends readings to this algorithm.

```
Count ← 0
Total ← 0
INPUT Reading
WHILE Reading > 0
    Total ← Total + Reading
    IF Reading > 20 THEN
        Count ← Count + 1
    ENDIF
    INPUT Reading
ENDWHILE
PRINT Count, Total
```

Complete a trace table (columns: Reading, Total, Count, Output) for the inputs 18, 25, 31, 9, 0. **[5]**

**5.** A drinks machine has four buttons. Button 1 gives water (80p), 2 gives juice (150p), 3 gives cola (120p) and 4 gives tea (100p). Write an algorithm in pseudocode, using CASE…ENDCASE, that inputs the button number and outputs the price, or outputs "Invalid button" for any other number. **[5]**

**6.** This algorithm should input the midday temperature for 7 days and output the highest temperature and the number of days above 30 °C. It contains three errors.

```
1  Highest ← 0
2  FOR Day ← 1 TO 7
3      Hot ← 0
4      INPUT Temp
5      IF Temp > Highest THEN
6          Highest ← Day
7      ENDIF
8      IF Temp > 30 THEN
9          Hot ← 1
10     ENDIF
11 NEXT Day
12 PRINT Highest, Hot
```

Identify each error by line number and write the corrected line. **[6]**

**7.** A library charges 15p for each day a book is late, up to a maximum of 300p per visit.

**(a)** Write an algorithm in pseudocode that:
- inputs the number of books being returned, using REPEAT…UNTIL to make sure it is more than 0
- for each book, inputs the number of days late (0 if on time) and adds the charge
- applies the 300p maximum and outputs the fine. **[7]**

**(b)** State the fine output for a visit with books 0, 4 and 12 days late, and for a visit with books 10 and 14 days late. **[2]**

**8.** A pump fills a water tank. A level sensor gives the level as a percentage. If the level is below 30, the pump is switched on. If the level is above 90, the pump is switched off. The system keeps checking until it is switched off (System = 0). Draw (or describe box by box) a program flowchart for this system, naming the symbol used at each step. **[6]**

**9.** A flowchart is meant to output the 5 times table from 5 to 60. Its steps are:

START → process `N ← 1` → output `N * 5` → decision `N = 12?` → Yes: STOP; No: flowline back to the output box.

**(a)** Explain what happens when this flowchart runs, and why. **[2]**
**(b)** Describe the edit needed so that it works as intended. **[2]**

**10.** Look at this algorithm.

```
Total ← 0
FOR Row ← 1 TO 4
    FOR Col ← 1 TO Row
        Total ← Total + Col
    NEXT Col
NEXT Row
PRINT Total
```

**(a)** State how many times the line `Total ← Total + Col` runs. **[1]**
**(b)** State the value output, showing your working. **[2]**

**11.** A teacher enters exam marks one at a time and enters -1 to finish. For each mark the program outputs a grade: 70 or more is "Distinction", 50 to 69 is "Merit", 40 to 49 is "Pass", below 40 is "Fail". After each student it calls a procedure PrintDivider, which outputs a line of dashes. At the end it outputs the percentage of students who achieved Pass or better.

**(a)** Write the algorithm in pseudocode, including the procedure. **[8]**
**(b)** State every output for the marks 72, 38, 55, 40, -1 (ignore the dashes). **[2]**

## Answers

**1.** Input/output: a parallelogram [1]. Terminator: a rectangle with rounded ends [1]. Subroutine: a rectangle with a double vertical line down each side [1]. **[3]**
*Examiner insight:* Each mark is for one named symbol, so a sketch is fine as long as it is clearly the right shape; a plain rectangle for the subroutine scores nothing.

**2.** WHILE tests its condition at the start, so the body may not run at all [1]. REPEAT tests its condition at the end, so the body always runs at least once [1]. **[2]**
*Examiner insight:* "One checks first, one checks last" needs the consequence (zero runs vs at least one run) to earn both marks; two separate, contrasting points are needed.

**3. (a)** N takes the values 3, 7, 11, 15 [1], so the outputs are **6, 14, 22, 30** [1].
**(b)** N = 3, 8, 13, so **3 times** [1]. **[3]**
*Examiner insight:* Stop when the next value would pass the end value; listing 18 (or 36 as an output) loses the accuracy mark.

**4.**

| Reading | Total | Count | Output |
|---|---|---|---|
| 18 | 0 → 18 | 0 | |
| 25 | 43 | 1 | |
| 31 | 74 | 2 | |
| 9 | 83 | 2 | |
| 0 | | | 2, 83 |

Total column 18, 43, 74, 83 [1] [1]; Count column increases only for 25 and 31 [1]; loop ends at 0 and 0 is not added [1]; output **2, 83** [1]. **[5]**
*Examiner insight:* Marks follow the columns, so a single early slip can still earn the later marks if the rest of the trace is followed through correctly from it.

**5.**

```
INPUT Button
CASE OF Button
    1 : PRINT 80
    2 : PRINT 150
    3 : PRINT 120
    4 : PRINT 100
    OTHERWISE PRINT "Invalid button"
ENDCASE
```

INPUT of the button number [1]; CASE OF Button … ENDCASE structure [1]; all four cases with correct prices [1] [1] (two correct for one mark, all four for both); OTHERWISE with the error message [1]. **[5]**
*Examiner insight:* A chain of IFs does not answer a question that names CASE…ENDCASE; and a missing ENDCASE usually costs the structure mark.

**6.** Line 3: Hot is reset every day [1]; move `Hot ← 0` to before the loop (before line 2) [1]. Line 6: stores the day number, not the temperature [1]; correct to `Highest ← Temp` [1]. Line 9: sets Hot to 1 instead of counting [1]; correct to `Hot ← Hot + 1` [1]. **[6]**
*Examiner insight:* Each error is worth one mark for identifying it and one for the correction; "line 6 is wrong" with no rewritten line earns only half.

**7. (a)**

```
REPEAT
    INPUT Books
UNTIL Books > 0
Fine ← 0
FOR Book ← 1 TO Books
    INPUT DaysLate
    IF DaysLate > 0 THEN
        Fine ← Fine + DaysLate * 15
    ENDIF
NEXT Book
IF Fine > 300 THEN
    Fine ← 300
ENDIF
PRINT Fine
```

REPEAT…UNTIL Books > 0 [1]; Fine ← 0 before the loop [1]; FOR loop from 1 to Books [1]; INPUT DaysLate inside the loop [1]; adds DaysLate * 15 [1]; cap applied after the loop [1]; output Fine [1].
**(b)** (0 + 4 + 12) × 15 = **240p** [1]; (10 + 14) × 15 = 360, capped to **300p** [1]. **[9]**
*Examiner insight:* Applying the cap inside the loop can still give the right answer, but initialising Fine inside the loop never can; check where every assignment sits relative to FOR and NEXT.

**8.** A correct chart contains:
- terminator START at the top and STOP at the end [1]
- parallelogram: INPUT Level (from the sensor) [1]
- diamond `Level < 30?`, Yes to a rectangle `Switch pump on` [1]
- diamond `Level > 90?`, Yes to a rectangle `Switch pump off` [1]
- diamond `System = 0?`, Yes to STOP [1]
- No branches and the end of each process box join flowlines that loop back to the INPUT Level box, all with arrowheads [1]. **[6]**

*Examiner insight:* A control flowchart that reads the sensor only once scores no loop mark; the flowline must go back to the input so the level is checked again.

**9. (a)** N is never changed, so it stays 1 [1]; the decision is always No, so 5 is output again and again in an endless loop [1].
**(b)** Add a process box `N ← N + 1` [1] on the No branch, between the decision and the flowline back to the output box [1]. **[4]**
*Examiner insight:* The position of the new box earns its own mark; an increment placed before the output box but outside the loop runs only once, so the loop still never ends.

**10. (a)** 1 + 2 + 3 + 4 = **10** times [1].
**(b)** Row 1 adds 1; row 2 adds 1 + 2 = 3; row 3 adds 6; row 4 adds 10 [1]; Total = **20** [1]. **[3]**
*Examiner insight:* The inner loop's end value depends on Row, so assuming it always runs 4 times (16 passes) loses the mark in (a) and the working mark in (b).

**11. (a)**

```
PROCEDURE PrintDivider
    PRINT "----------"
ENDPROCEDURE

Count ← 0
Passes ← 0
INPUT Mark
WHILE Mark > -1
    Count ← Count + 1
    IF Mark > 69 THEN
        PRINT "Distinction"
    ELSE
        IF Mark > 49 THEN
            PRINT "Merit"
        ELSE
            IF Mark > 39 THEN
                PRINT "Pass"
            ELSE
                PRINT "Fail"
            ENDIF
        ENDIF
    ENDIF
    IF Mark > 39 THEN
        Passes ← Passes + 1
    ENDIF
    CALL PrintDivider
    INPUT Mark
ENDWHILE
Percentage ← Passes / Count * 100
PRINT Percentage
```

Count and Passes set to 0 before the loop [1]; first INPUT before the loop and `WHILE Mark > -1` [1]; next INPUT at the end of the loop body [1]; Distinction and Merit boundaries correct [1]; Pass and Fail boundaries correct [1]; Passes increased for 40 or more [1]; procedure defined and called each pass [1]; percentage calculated and output after the loop [1].
**(b)** Distinction, Fail, Merit, Pass [1]; percentage **75** (3 of 4 students) [1]. **[10]**
*Examiner insight:* With only >, < and =, "70 or more" must be written as `> 69`; writing `> 70` sends a mark of exactly 70 to Merit and loses the boundary mark.

## Where marks are usually lost

- Setting a total or counter to 0 inside the loop.
- Forgetting the INPUT at the end of a WHILE body, or processing the rogue value.
- Writing the REPEAT condition for "keep going" rather than "stop".
- Boundary slips: `> 70` when the scenario says "70 or more".
- Naming an error without writing the corrected line.
- Flowcharts with an unlabelled decision exit, no arrowheads, or no loop back to the input.
- Wrong symbol: calculations in parallelograms, START in a plain rectangle.
- Trace tables that skip rows or record values the algorithm never produces.

## Next steps

- [Revision notes for this topic](/resources/a-level-cambridge-ict-algorithms-and-flowcharts-revision-notes/)
- [Study guide for this topic](/resources/a-level-cambridge-ict-algorithms-and-flowcharts/)
- [Cambridge A Level ICT hub](/boards/cambridge/a-level/ict/)
- [Printable checklist](/checklists/cambridge/a-level/ict/)
- [All free 10-minute diagnostics](/diagnostics/)
- [Book a free trial class](/trial/)

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 3), Cambridge International Education. Topic 4: Algorithms and flowcharts (4.1 Algorithms, 4.2 Flowcharts) and the flowchart symbols table at the end of the subject content.
