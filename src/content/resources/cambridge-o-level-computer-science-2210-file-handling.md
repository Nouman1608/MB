---
title: "Cambridge O Level Computer Science (2210): File handling"
seoTitle: "Cambridge O Level CS 2210 File Handling Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["o-levels"]
topic: "Topic 8 – Programming"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 8.3
syllabusTopics:
  - qualification: "o-level"
    topic: "programming-2210"
  - qualification: "o-level"
    topic: "programming-2210"
    subtopic: "file-handling-2210"
description: "Study guide to Cambridge O Level Computer Science 2210 section 8.3: why programs store data in files, and how to open, read, write and close a file using Cambridge pseudocode."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

Section 8.3 of Cambridge O Level Computer Science 2210 has two learning statements. Candidates should understand the **purpose of storing data in a file to be used by a program**, and be able to **open, close and use a file for reading and writing**, including reading and writing single items of data and reading and writing a line of text. This guide explains why files are needed, shows each pseudocode command and works through complete examples with their results.

## Part 1: why store data in a file?

Variables and arrays live in RAM, which is **volatile**. When a program ends, or the computer is switched off, their contents are lost. A **file** is stored on secondary storage, such as a hard disk or flash drive, so its contents **remain** when the program is not running.

A program uses files to:

- **keep data between runs**: for example, a game that remembers the high score, or a program that stores customer records;
- **hold large amounts of data** that would not fit in the program's own code, such as thousands of names;
- **share data between programs**, or let different people use the same data;
- **read data prepared outside the program**, such as a list of test results typed in by a teacher;
- **keep a record or backup**, such as a log of events.

## Part 2: the four file operations

The syllabus pseudocode uses four commands. A file name is a string, such as `"Scores.txt"`.

| Operation | Pseudocode | Purpose |
|---|---|---|
| Open | `OPENFILE <name> FOR <mode>` | Gets the file ready and sets its mode |
| Read | `READFILE <name>, <variable>` | Reads the next item of data from the file into a variable |
| Write | `WRITEFILE <name>, <variable>` | Writes data into the file |
| Close | `CLOSEFILE <name>` | Finishes with the file |

### File modes

| Mode | Use | Effect |
|---|---|---|
| `READ` | Data is read from the file | The file must already exist |
| `WRITE` | Data is written to the file | A **new file is created** and any **existing data in the file is lost** |

A file should be opened in **only one mode at a time**. To read a file that was just written, close it first and then open it again for READ.

### Good practice

- Always **open** the file before using it and say the mode.
- Always **close** the file when you have finished. Closing makes sure that all the data is saved and releases the file for other programs.
- Use a variable of a suitable data type to hold each item that is read.

## Part 3: writing to a file

### Writing single items

This program saves three player names, one per line, in a file called `Players.txt`.

```
DECLARE PlayerName : STRING
OPENFILE "Players.txt" FOR WRITE
FOR Count ← 1 TO 3
   OUTPUT "Enter a player name"
   INPUT PlayerName
   WRITEFILE "Players.txt", PlayerName
NEXT Count
CLOSEFILE "Players.txt"
```

If the user enters Asha, Ben and Chen, the file then holds three lines:

```
Asha
Ben
Chen
```

Run the program again with different names, and the old names are gone, because WRITE replaces the old contents.

### Writing a line of text

A **line of text** is a string, written as a single item. The same command is used.

```
DECLARE Message : STRING
Message ← "Meeting at 9.30 in Room 4"
OPENFILE "Notes.txt" FOR WRITE
WRITEFILE "Notes.txt", Message
CLOSEFILE "Notes.txt"
```

## Part 4: reading from a file

### Reading single items

Suppose `Scores.txt` holds five whole numbers, one on each line: 12, 7, 20, 15, 6. This program totals them.

```
DECLARE Score : INTEGER
DECLARE Total : INTEGER
Total ← 0
OPENFILE "Scores.txt" FOR READ
FOR Count ← 1 TO 5
   READFILE "Scores.txt", Score
   Total ← Total + Score
NEXT Count
CLOSEFILE "Scores.txt"
OUTPUT "Total ", Total, " average ", Total / 5
```

Each READFILE takes the next item. A trace:

| Count | Score read | Total |
|---|---|---|
| 1 | 12 | 12 |
| 2 | 7 | 19 |
| 3 | 20 | 39 |
| 4 | 15 | 54 |
| 5 | 6 | 60 |

The output is `Total 60 average 12.0`.

### Reading a line of text

```
DECLARE Line : STRING
OPENFILE "Notes.txt" FOR READ
READFILE "Notes.txt", Line
CLOSEFILE "Notes.txt"
OUTPUT Line
```

This displays the whole line that was stored: `Meeting at 9.30 in Room 4`.

### Knowing when to stop

The syllabus pseudocode does not define a command for testing the end of a file, so in a question you are normally told how many items the file holds, or a special stop value is used. The loops above use a known count. If a question gives a count in a variable, use that variable as the end value of the FOR loop.

## Part 5: using two files together

A program can have more than one file open at once, as long as each is in only one mode. This one copies three lines from `Old.txt` into `New.txt`, changing each to upper case.

```
DECLARE Line : STRING
OPENFILE "Old.txt" FOR READ
OPENFILE "New.txt" FOR WRITE
FOR Count ← 1 TO 3
   READFILE "Old.txt", Line
   WRITEFILE "New.txt", UCASE(Line)
NEXT Count
CLOSEFILE "Old.txt"
CLOSEFILE "New.txt"
```

If `Old.txt` contains `red`, `green` and `blue`, then `New.txt` will contain `RED`, `GREEN` and `BLUE`. Both files are closed at the end.

## Part 6: a complete example, saving a high score

A game stores the best score in `HighScore.txt`. At the end of a game the program compares the new score with the stored one. It must read first, then close, then write.

```
DECLARE OldBest : INTEGER
DECLARE NewScore : INTEGER
INPUT NewScore
OPENFILE "HighScore.txt" FOR READ
READFILE "HighScore.txt", OldBest
CLOSEFILE "HighScore.txt"
IF NewScore > OldBest
   THEN
      OPENFILE "HighScore.txt" FOR WRITE
      WRITEFILE "HighScore.txt", NewScore
      CLOSEFILE "HighScore.txt"
      OUTPUT "New high score!"
   ELSE
      OUTPUT "Best is still ", OldBest
ENDIF
```

If the file holds 340 and the player scores 410, the file is closed, reopened for WRITE and now holds 410. If the player scores 250, the file is not changed. The file is closed before it is opened in a different mode.

## Worked example

**Question:** Write pseudocode that asks the user for five numbers and stores them in a file called Numbers.txt. [5]

```
DECLARE Number : INTEGER
OPENFILE "Numbers.txt" FOR WRITE
FOR Count ← 1 TO 5
   INPUT Number
   WRITEFILE "Numbers.txt", Number
NEXT Count
CLOSEFILE "Numbers.txt"
```

> File opened with the name and the WRITE mode [1]; a loop repeated five times [1]; input of a number inside the loop [1]; WRITEFILE using the file name and the variable inside the loop [1]; the file closed after the loop [1].

## Common mistakes

- **Forgetting to open the file** or opening it in the wrong mode.
- **Using WRITE when the old data is needed.** WRITE removes the existing contents.
- **Not closing the file.** Always end with CLOSEFILE.
- **Opening one file for both reading and writing at once.** Close it, then reopen in the other mode.
- **Putting the OPENFILE or CLOSEFILE inside the loop** (unless the question requires it). Open once before, close once after.
- **Missing the file name** in READFILE, WRITEFILE or CLOSEFILE.
- **Using the wrong data type** for the variable that receives the data.
- **Reading more items than the file holds.**

## Exam technique

- **Explain the purpose of a file:** data is kept after the program stops, because RAM loses its contents.
- **Write file code in this order:** DECLARE, OPENFILE, loop with READFILE or WRITEFILE, CLOSEFILE.
- **Trace file programs** with a table showing each item read, then the total or output.
- **State the mode** every time you open a file.

## Quick check

1. Why can a program not rely on a variable to store a high score between runs? *The variable is in RAM, which is lost when the program ends.*
2. Which mode creates a new file and removes old data? *WRITE.*
3. Which command ends the use of a file? *CLOSEFILE.*
4. Which command puts the next item from a file into a variable? *READFILE.*
5. What must you do before opening a file in a different mode? *Close it first.*

## Continue with

Revise with the [File handling revision notes](/resources/cambridge-o-level-computer-science-2210-file-handling-revision-notes/) and practise with the [File handling practice questions](/resources/cambridge-o-level-computer-science-2210-file-handling-practice/).
