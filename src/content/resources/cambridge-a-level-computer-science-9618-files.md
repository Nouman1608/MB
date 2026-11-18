---
title: "Cambridge A Level Computer Science (9618): Files"
resourceType: "study-guides"
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
description: "Why programs need files, and pseudocode for reading, writing, appending and searching text files, for Cambridge AS Computer Science 9618 section 10.3."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers **10.3 Files** in the Cambridge International AS & A Level Computer Science 9618 syllabus. It is AS content, assessed mainly on Paper 2, and all pseudocode follows the Cambridge Pseudocode Guide. The [Data Types and Structures study guide](/resources/cambridge-a-level-computer-science-data-types-and-structures-study-guide/) shows the basic file statements; this page goes further, with the reasons files are needed and four new worked algorithms that combine files with loops, arrays and conditions. Condensed notes are in the [Files revision notes](/resources/cambridge-a-level-computer-science-9618-files-revision-notes/), and the [Files practice questions](/resources/cambridge-a-level-computer-science-9618-files-practice/) let you test yourself.

## What 10.3 asks you to do

- show understanding of **why files are needed**
- write pseudocode to handle **text files** that consist of **one or more lines**.

Random and sequential file organisation, binary files and exception handling are A Level topics (13.2 and 20.2), so AS questions use text files read and written one line at a time.

## Why files are needed

Variables and arrays are held in main memory (RAM), which is **volatile** and is released when the program ends. A file is stored on secondary storage, so:

- data **persists** after the program stops or the computer is switched off, and can be used the next time the program runs
- data can be **shared**: one program can write a file that another program, or another user, reads
- **large amounts** of data can be kept that would not fit in memory at once, and processed a line at a time
- input data can be **prepared in advance**, for example a list of 500 product codes, instead of being typed in each run
- output can be kept as a **permanent record**, such as a log of transactions or a report to print later.

In an exam, one clear reason with an example from the scenario is worth more than a list of vague ones.

## The file statements

| Statement | Purpose |
|---|---|
| `OPENFILE "Data.txt" FOR READ` | Open an existing file to read it from the first line |
| `OPENFILE "Data.txt" FOR WRITE` | Create the file, or **replace** its contents if it already exists |
| `OPENFILE "Data.txt" FOR APPEND` | Open a file to add lines **after** its existing contents |
| `READFILE "Data.txt", Line` | Read the next line into the STRING variable Line |
| `WRITEFILE "Data.txt", Line` | Write Line to the file as a new line |
| `EOF("Data.txt")` | Function that returns TRUE when there are no more lines to read |
| `CLOSEFILE "Data.txt"` | Close the file |

The file identifier can be a string literal, as here, or a STRING variable holding the file name. A file opened for READ can only be read; to change one line of a text file, a program reads the whole file and writes a new one.

## Worked example 1: saving an array to a file

A program holds up to 100 names in `Names[1:100]`, with `NameCount` in use. Before it ends, it saves them:

```
DECLARE Index : INTEGER
OPENFILE "Names.txt" FOR WRITE
FOR Index ← 1 TO NameCount
   WRITEFILE "Names.txt", Names[Index]
NEXT Index
CLOSEFILE "Names.txt"
```

WRITE is correct here because the file should hold exactly the current list. Using APPEND would add today's names after yesterday's, so the file would grow with duplicates every run.

## Worked example 2: loading a file into an array

Next time the program starts, it reloads the names:

```
DECLARE Line : STRING
NameCount ← 0
OPENFILE "Names.txt" FOR READ
WHILE NOT EOF("Names.txt") AND NameCount < 100
   READFILE "Names.txt", Line
   NameCount ← NameCount + 1
   Names[NameCount] ← Line
ENDWHILE
CLOSEFILE "Names.txt"
OUTPUT NameCount, " names loaded"
```

Two conditions control the loop. `NOT EOF(...)` stops reading when the file runs out; `NameCount < 100` stops the array overflowing if the file is longer than expected. A **WHILE** loop is used because the file could be empty, in which case the body must not run at all.

## Worked example 3: copying selected lines to a new file

A file `Orders.txt` holds one order code per line. Codes starting with "X" are express orders. The program copies them to `Express.txt`:

```
DECLARE Code : STRING
OPENFILE "Orders.txt" FOR READ
OPENFILE "Express.txt" FOR WRITE
WHILE NOT EOF("Orders.txt")
   READFILE "Orders.txt", Code
   IF LEFT(Code, 1) = "X" THEN
      WRITEFILE "Express.txt", Code
   ENDIF
ENDWHILE
CLOSEFILE "Orders.txt"
CLOSEFILE "Express.txt"
```

Two files can be open at once, one for each mode. Each is closed separately.

## Worked example 4: files with more than one line per item

A quiz program stores each player as two lines: the name, then the score. `Scores.txt` contains:

```
Ama
17
Ben
12
Cara
19
```

Every line of a text file is read as a STRING, so the score must be converted to a number before it can be compared or added. The Pseudocode Guide's `STR_TO_NUM` function does this.

```
DECLARE Name : STRING
DECLARE ScoreText : STRING
DECLARE Score : INTEGER
DECLARE Best : INTEGER
DECLARE BestName : STRING
DECLARE Total : INTEGER
DECLARE Players : INTEGER
Best ← -1
Total ← 0
Players ← 0
OPENFILE "Scores.txt" FOR READ
WHILE NOT EOF("Scores.txt")
   READFILE "Scores.txt", Name
   READFILE "Scores.txt", ScoreText
   Score ← STR_TO_NUM(ScoreText)
   Total ← Total + Score
   Players ← Players + 1
   IF Score > Best THEN
      Best ← Score
      BestName ← Name
   ENDIF
ENDWHILE
CLOSEFILE "Scores.txt"
OUTPUT BestName, " has the highest score: ", Best
OUTPUT "Mean score: ", Total / Players
```

| Name | Score | Total | Players | Best | BestName |
|---|---|---|---|---|---|
| Ama | 17 | 17 | 1 | 17 | Ama |
| Ben | 12 | 29 | 2 | | |
| Cara | 19 | 48 | 3 | 19 | Cara |

Output: Cara has the highest score: 19, and a mean of 48 ÷ 3 = 16. The loop reads **two** lines per pass, which works because the file always has lines in pairs. Adding a new player at the end of the day needs APPEND:

```
OPENFILE "Scores.txt" FOR APPEND
WRITEFILE "Scores.txt", "Dev"
WRITEFILE "Scores.txt", NUM_TO_STR(14)
CLOSEFILE "Scores.txt"
```

## Common mistakes

- Opening with WRITE when the existing data must be kept; WRITE replaces the file's contents.
- Forgetting CLOSEFILE, so data may not be saved and the file stays locked.
- Using a FOR loop to read a file of unknown length instead of WHILE NOT EOF.
- Reading before checking EOF, which fails on an empty file.
- Treating a line read from a file as a number without converting it.
- Writing to a file that was opened FOR READ.

## Exam technique

When asked to **write pseudocode** for file handling, check you have: OPENFILE with the right mode; a loop controlled by EOF when reading; READFILE or WRITEFILE with the file name and a variable; and CLOSEFILE for every file opened. When asked to **explain why files are needed**, link your reason to the scenario: "the high scores must still be available the next time the game is played".
