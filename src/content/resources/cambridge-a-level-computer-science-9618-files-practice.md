---
title: "Cambridge A Level Computer Science (9618): Files -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 10: Data Types and Structures"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 10.3
syllabusTopics:
  - qualification: "a-level"
    topic: "data-types-and-structures"
    subtopic: "files"
description: "Original questions with mark-scheme answers on reading, writing, appending and searching text files in pseudocode for Cambridge AS Computer Science 9618."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Files study guide](/resources/cambridge-a-level-computer-science-9618-files/) · [Files revision notes](/resources/cambridge-a-level-computer-science-9618-files-revision-notes/) · [Data Types and Structures practice questions](/resources/cambridge-a-level-computer-science-data-types-and-structures-practice/)

These questions practise section 10.3 of Cambridge International AS & A Level Computer Science 9618. Write pseudocode in the style of the Cambridge Pseudocode Guide. All scenarios are invented. Answers are in mark-scheme style, with [1] for each creditable point.

---

## Section A

**1.** A school's timetable program stores lessons in arrays while it runs. Explain why it must also save the lessons to a file. **[2]**

**2.** State **two** other reasons why programs use files. **[2]**

**3.** Which statement opens a log file so that new lines are added after the existing ones?

A: OPENFILE "Log.txt" FOR READ

B: OPENFILE "Log.txt" FOR WRITE

C: OPENFILE "Log.txt" FOR APPEND

D: OPENFILE "Log.txt" FOR ADD

**[1]**

**4.** State the value returned by EOF("Log.txt") when there are still lines to be read. **[1]**

**5.** A programmer opens an existing file of 200 customer names FOR WRITE and writes one new name. State what the file now contains. **[1]**

**6.** Explain why a WHILE loop, rather than a FOR loop, is normally used to read a text file. **[2]**

## Section B

**7.** A text file Words.txt contains one word per line. Write pseudocode to count the words that are longer than 8 characters and output the count. **[5]**

**8.** Write a procedure AddVisitor(Name : STRING) that adds the visitor's name to the end of Visitors.txt without removing the existing names. **[3]**

**9.** A file Temps.txt holds one temperature per line, as text, for example "21.5".

**(a)** Explain why each line must be converted before the mean temperature is calculated. **[1]**

**(b)** Write pseudocode to output the mean of all the temperatures in the file. You may assume the file has at least one line. **[6]**

**10.** A file Members.txt holds one member ID per line. Write a function IsMember(ID : STRING) RETURNS BOOLEAN that returns TRUE if the ID is in the file. It should stop reading once the ID is found. **[5]**

**11.** A shop's file Stock.txt holds pairs of lines: a product code, then the quantity in stock (as text). Write pseudocode to write the code of every product with a quantity of 0 to a new file Reorder.txt. **[6]**

**12.** The array `Codes[1:300]` holds product codes, and the integer variable `CodeCount` holds how many are in use. Write pseudocode to save the codes in use to Codes.txt, replacing any previous contents. **[3]**

---

## Answers

**1.** Arrays are stored in main memory, which is volatile / is cleared when the program ends [1]; saving to a file on secondary storage means the timetable is still available the next time the program runs [1].

**2.** Any two: to share data with another program or user [1]; to store large amounts of data that would not all fit in memory [1]; so input data can be prepared in advance [1]; to keep a permanent record of output, such as a log [1].

**3.** **C** [1].

**4.** FALSE [1].

**5.** Only the one new name; the 200 previous names have been replaced / lost [1].

**6.** The number of lines in the file is not usually known in advance [1]; a WHILE NOT EOF loop stops when the end is reached, and does not run at all if the file is empty [1].

**7.**

```
DECLARE Word : STRING
DECLARE Count : INTEGER
Count ← 0
OPENFILE "Words.txt" FOR READ
WHILE NOT EOF("Words.txt")
   READFILE "Words.txt", Word
   IF LENGTH(Word) > 8 THEN
      Count ← Count + 1
   ENDIF
ENDWHILE
CLOSEFILE "Words.txt"
OUTPUT Count
```

Count initialised and file opened FOR READ [1]; WHILE NOT EOF loop [1]; READFILE inside the loop [1]; LENGTH test and increment [1]; file closed and Count output after the loop [1].

**8.**

```
PROCEDURE AddVisitor(Name : STRING)
   OPENFILE "Visitors.txt" FOR APPEND
   WRITEFILE "Visitors.txt", Name
   CLOSEFILE "Visitors.txt"
ENDPROCEDURE
```

Opened FOR APPEND [1]; WRITEFILE of the parameter [1]; CLOSEFILE [1].

**9. (a)** Every line is read as a STRING, so it must be converted to a number (e.g. with STR_TO_NUM) before arithmetic [1].

**(b)**

```
DECLARE Line : STRING
DECLARE Total : REAL
DECLARE Count : INTEGER
Total ← 0.0
Count ← 0
OPENFILE "Temps.txt" FOR READ
WHILE NOT EOF("Temps.txt")
   READFILE "Temps.txt", Line
   Total ← Total + STR_TO_NUM(Line)
   Count ← Count + 1
ENDWHILE
CLOSEFILE "Temps.txt"
OUTPUT Total / Count
```

Total and Count initialised [1]; file opened FOR READ [1]; WHILE NOT EOF loop with READFILE [1]; conversion and addition to Total [1]; Count incremented [1]; file closed and Total / Count output after the loop [1].

**10.**

```
FUNCTION IsMember(ID : STRING) RETURNS BOOLEAN
   DECLARE Line : STRING
   DECLARE Found : BOOLEAN
   Found ← FALSE
   OPENFILE "Members.txt" FOR READ
   WHILE NOT EOF("Members.txt") AND Found = FALSE
      READFILE "Members.txt", Line
      IF Line = ID THEN
         Found ← TRUE
      ENDIF
   ENDWHILE
   CLOSEFILE "Members.txt"
   RETURN Found
ENDFUNCTION
```

Found initialised to FALSE and file opened FOR READ [1]; loop condition tests both EOF and Found [1]; READFILE and comparison with ID [1]; Found set to TRUE on a match [1]; file closed before RETURN Found [1].

**11.**

```
DECLARE Code : STRING
DECLARE QtyText : STRING
OPENFILE "Stock.txt" FOR READ
OPENFILE "Reorder.txt" FOR WRITE
WHILE NOT EOF("Stock.txt")
   READFILE "Stock.txt", Code
   READFILE "Stock.txt", QtyText
   IF STR_TO_NUM(QtyText) = 0 THEN
      WRITEFILE "Reorder.txt", Code
   ENDIF
ENDWHILE
CLOSEFILE "Stock.txt"
CLOSEFILE "Reorder.txt"
```

Stock.txt opened FOR READ [1]; Reorder.txt opened FOR WRITE [1]; WHILE NOT EOF loop [1]; two READFILE statements per pass, in the right order [1]; conversion and test for 0, writing the code [1]; both files closed [1]. (Comparing `QtyText = "0"` without conversion is also acceptable.)

**12.**

```
OPENFILE "Codes.txt" FOR WRITE
FOR Index ← 1 TO CodeCount
   WRITEFILE "Codes.txt", Codes[Index]
NEXT Index
CLOSEFILE "Codes.txt"
```

Opened FOR WRITE [1]; loop from 1 to CodeCount with WRITEFILE of each element [1]; CLOSEFILE after the loop [1].

---

## Where marks are usually lost

- Opening with WRITE when the task says to keep the existing data.
- Forgetting to close one of two open files.
- Reading only one line per pass when each item uses two lines.
- Doing arithmetic on a line read from a file without converting it.
- Looping to the array's upper bound (300) instead of the number of items in use.
