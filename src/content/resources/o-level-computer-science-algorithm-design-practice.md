---
title: "O Level Computer Science: Algorithm design and problem-solving — Practice Questions (Cambridge 2210)"
resourceType: "practice-questions"
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
description: "Original exam-style questions with full worked answers on abstraction and decomposition, choosing test data, verification by double entry, tracing algorithms, finding errors in pseudocode and writing validation algorithms, for Cambridge O Level Computer Science (2210)."
author: "marlbridge-academic-team"
publishedDate: 2026-09-24
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Each question practises a skill tested in the June 2025 Paper 22. After each answer there is a mark-scheme insight or a tip and, where one matches, the real question to try next.

---

## Questions

**1.** A school library wants a program that works out the fine for a book that is returned late. The fine is $0.15 for each day the book is overdue. The librarian tells the programmer the number of days the book is overdue, the daily fine rate, the colour of the book's cover and the total fine to be paid.

**(a)** State what is meant by abstraction.

**(b)** Decompose the problem by identifying one input, the process and the output for this program. **[4]**

**2.** A quiz program asks the user to enter their score. A range check makes sure that the score is a whole number from 10 to 80 inclusive. Suggest one item of normal test data, one item of abnormal test data, one item of extreme test data and one item of boundary test data to check that the range check works correctly. **[4]**

**3.** When a user sets up a new account, they must choose a password.

**(a)** Give one reason why data is verified as it is typed into a computer.

**(b)** Write pseudocode for a double entry check. The user enters a new password and then enters it a second time. If the two entries are different, a suitable message is output and the user must enter both again. When the two entries match, the message "Password accepted" is output. You do not need to declare any variables. **[4]**

**4.** This pseudocode algorithm is used with a whole number greater than 1.

```
INPUT Num
Divisor ← 2
Prime ← TRUE
WHILE Prime = TRUE AND Divisor * Divisor <= Num DO
    IF MOD(Num, Divisor) = 0
      THEN
        Prime ← FALSE
      ELSE
        Divisor ← Divisor + 1
    ENDIF
ENDWHILE
IF Prime = TRUE
  THEN
    OUTPUT "Yes"
  ELSE
    OUTPUT "No"
ENDIF
```

**(a)** The number 35 is input. Work out the values of Divisor and Prime after each pass of the WHILE loop, and state what is output.

**(b)** Describe what the algorithm is designed to find out.

**(c)** Explain the two different ways in which the WHILE loop can stop. **[5]**

**5.** This pseudocode algorithm should input the rainfall, in mm, for each of the 30 days in a month and store each value in the array Rain[]. It should count how many days had more than 10 mm of rain and find the largest daily rainfall. It should then output the largest daily rainfall and the number of days with more than 10 mm. There are four errors in the algorithm.

```
01 DECLARE Rain : ARRAY[1:30] OF REAL
02 DECLARE Highest : REAL
03 DECLARE WetDays : INTEGER
04 DECLARE Day : INTEGER
05 Highest ← 100
06 WetDays ← 0
07 FOR Day ← 1 TO 30
08     INPUT Rain[Day]
09     IF Rain[Day] > 10
10       THEN
11         WetDays ← Day + 1
12     ENDIF
13     IF Rain[Day] < Highest
14       THEN
15         Highest ← Rain[Day]
16     ENDIF
17 NEXT Day
18 OUTPUT "Largest daily rainfall ", Highest, " mm"
19 OUTPUT "Days with more than 10 mm ", Day
```

Give the line number where each of the four errors appears, and rewrite that line correctly. **[4]**

**6.** A shop records the number of items it sells on each of 12 days. Each number entered must be a whole number from 0 to 200 inclusive; any value outside this range must be rejected and entered again. Write pseudocode that inputs the 12 values with this validation, adds up the accepted values and counts the number of days on which more than 150 items were sold. At the end, the total and the count must be output. You do not need to declare any variables. **[5]**

---

## Answers

**1.** **(a)** Abstraction means **removing details that are not relevant to solving the problem** [1]. **(b)** Input: the **number of days overdue** (the daily rate of $0.15 may also be treated as an input or a stored value) [1]. Process: **multiply the number of days overdue by 0.15** to calculate the fine [1]. Output: the **total fine to be paid** [1]. The colour of the book's cover is irrelevant, so it is removed by abstraction and is not an input.

*Mark-scheme insight (June 2025):* When a problem was decomposed into input, process and output, the mark scheme matched the measurements to input, the calculation to process and the final amount needed to output; an irrelevant detail was included as a distractor and was not matched to anything. Abstraction was credited as removing details that are not relevant.

*Try the real question next:* Cambridge O Level Computer Science 2210, June 2025, Paper 22, Question 2.

**2.** Normal: any whole number in the range, e.g. **45** [1] (a value well inside the range makes the choice clear). Abnormal: a value that should be rejected, e.g. **95**, **−3**, **12.5** or **"ten"** [1]. Extreme: a value at a limit of the range, **10 or 80** [1]. Boundary: a value at a limit or just beyond it, e.g. **80 (accepted) and 81 (rejected)**, or 10 and 9 [1].

*Mark-scheme insight (June 2025):* For a similar range check, extreme data was credited only for the two limits themselves, but boundary data was credited for either a limit or the value just outside it. Abnormal data could be a value outside the range, a non-integer or a non-numeric entry.

*Try the real question next:* Cambridge O Level Computer Science 2210, June 2025, Paper 22, Question 3.

**3.** **(a)** To check that the data has **not been changed or mistyped when it was entered**, i.e. it matches the original [1]. **(b)** One possible answer:

```
REPEAT
    OUTPUT "Enter your new password"
    INPUT Password
    OUTPUT "Enter the password again"
    INPUT Check
    IF Password <> Check
      THEN
        OUTPUT "The passwords do not match. Please try again."
    ENDIF
UNTIL Password = Check
OUTPUT "Password accepted"
```

A loop that repeats until the two entries match [1]; two inputs that are compared with each other [1]; a mismatch message inside the loop and "Password accepted" output once, after the loop [1].

*Mark-scheme insight (June 2025):* The credited reason for verification was making sure the value was not altered as it was entered. In the double entry algorithm, the final confirmation message had to be outside the loop so that it appears only once, after all checking is finished.

*Try the real question next:* Cambridge O Level Computer Science 2210, June 2025, Paper 22, Question 4.

**4.** **(a)** Divisor starts at 2 and Prime at TRUE. Pass 1: MOD(35, 2) = 1, so Divisor = 3, Prime = TRUE. Pass 2: MOD(35, 3) = 2, so Divisor = 4, Prime = TRUE. Pass 3: MOD(35, 4) = 3, so Divisor = 5, Prime = TRUE. Pass 4: MOD(35, 5) = 0, so **Prime = FALSE** and Divisor stays at 5 [1]. The loop stops and the output is **"No"** [1]. **(b)** It checks whether the number input is a **prime number** (outputs "Yes" if it is prime and "No" if it is not) [1]. **(c)** The loop stops when a divisor is found that divides exactly into Num, because **Prime is set to FALSE** [1]; or when **Divisor × Divisor is greater than Num**, which means every possible divisor has been checked without finding a factor [1].

*Mark-scheme insight (June 2025):* When explaining how an algorithm knows when to stop checking, the mark scheme credited describing how the variables change on each pass, the condition that ends the checking once everything has been checked, and the early exit when a check fails. Name the variables and the exact conditions rather than saying "when it has finished".

*Try the real question next:* Cambridge O Level Computer Science 2210, June 2025, Paper 22, Question 6.

**5.** Line **05**: `Highest ← 0` (a low starting value, so the first reading replaces it) [1]. Line **11**: `WetDays ← WetDays + 1` [1]. Line **13**: `IF Rain[Day] > Highest` [1]. Line **19**: `OUTPUT "Days with more than 10 mm ", WetDays` [1].

*Mark-scheme insight (June 2025):* Each error was credited for identifying the faulty line (by its number or by quoting it) and giving a correct replacement statement. The planted errors included a wrong starting value, the loop counter used where a running variable should have been, and outputting the wrong identifier, so check each variable's starting value, how it is updated and what is finally output.

*Try the real question next:* Cambridge O Level Computer Science 2210, June 2025, Paper 22, Question 5.

**6.** One possible answer:

```
Total ← 0
BusyDays ← 0
FOR Day ← 1 TO 12
    REPEAT
        INPUT Sold
        IF Sold < 0 OR Sold > 200
          THEN
            OUTPUT "Invalid value, please enter it again"
        ENDIF
    UNTIL Sold >= 0 AND Sold <= 200
    Total ← Total + Sold
    IF Sold > 150
      THEN
        BusyDays ← BusyDays + 1
    ENDIF
NEXT Day
OUTPUT "Total items sold: ", Total
OUTPUT "Days with more than 150 sold: ", BusyDays
```

Any five from: a loop that runs 12 times [1]; input of each value [1]; a validation loop with the **correct inclusive range check** (0 and 200 accepted) [1]; totalling with Total ← Total + Sold after Total is set to 0 [1]; counting days with more than 150 using a selection statement [1]; output of the total and the count **after** the loop [1]. (Max 5.)

*Mark-scheme insight (June 2025):* A separate mark was given for a range check with the correct limits, and in that question the limits were exclusive. Read carefully whether each end of the range is included, and choose < or <= (and > or >=) to match.

*Try the real question next:* Cambridge O Level Computer Science 2210, June 2025, Paper 22, Question 7.

---

## Where marks are usually lost

- Giving the same value for extreme and boundary data without saying which side of the limit it is on, or giving an "extreme" value that is outside the range.
- Stating a line number with no correction, or rewriting a whole line when only the variable name was wrong but introducing a new error.
- Getting a range check the wrong way round: mixing up < and <=, or AND and OR, so that a limit value is wrongly accepted or rejected.
- Putting a final output inside a loop, so the message or total is printed many times.
- Describing when a loop stops in vague terms ("when it is done") instead of naming the variables and the condition.
