---
title: "Cambridge A Level Computer Science (9618): Files -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed notes on why files are needed and on file modes, READFILE, WRITEFILE and EOF patterns for Cambridge AS Computer Science 9618 10.3."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Quick-recall notes for **10.3 Files** (AS content, mainly Paper 2). The [Files study guide](/resources/cambridge-a-level-computer-science-9618-files/) works through four full algorithms; the [Files practice questions](/resources/cambridge-a-level-computer-science-9618-files-practice/) give exam-style practice. Arrays, which files are often loaded into, are in the [Arrays revision notes](/resources/cambridge-a-level-computer-science-9618-arrays-revision-notes/).

## Why files are needed

| Reason | Example |
|---|---|
| Data persists after the program ends (RAM is volatile) | A game's high-score table is still there tomorrow |
| Data can be shared between programs or users | A booking program writes a file the accounts program reads |
| Large amounts of data can be kept and processed a line at a time | A year of sensor readings |
| Input can be prepared in advance | A list of product codes loaded at start-up |
| Output can be kept as a permanent record | A log of every transaction |

## File modes

| Mode | Effect | Use when |
|---|---|---|
| READ | Read lines in order from the first | Loading or searching existing data |
| WRITE | Creates the file; **replaces** any existing contents | Saving a complete new version |
| APPEND | Adds new lines after the existing ones | Adding to a log or list |

## Statements

```
OPENFILE <filename> FOR <mode>
READFILE <filename>, <variable>
WRITEFILE <filename>, <data>
CLOSEFILE <filename>
EOF(<filename>)     // TRUE when no lines are left to read
```

- `<filename>` is a string literal such as "Log.txt" or a STRING variable.
- READFILE reads **one line** into a STRING variable.
- WRITEFILE writes its data as **one new line**.

## Patterns to learn

**Read every line**

```
OPENFILE "Data.txt" FOR READ
WHILE NOT EOF("Data.txt")
   READFILE "Data.txt", Line
   // process Line
ENDWHILE
CLOSEFILE "Data.txt"
```

**Count lines**: add `Count ← Count + 1` inside the loop (with `Count ← 0` before it).

**Search for a line**

```
Found ← FALSE
OPENFILE "Members.txt" FOR READ
WHILE NOT EOF("Members.txt") AND Found = FALSE
   READFILE "Members.txt", Line
   IF Line = Target THEN
      Found ← TRUE
   ENDIF
ENDWHILE
CLOSEFILE "Members.txt"
```

**Write an array**

```
OPENFILE "Out.txt" FOR WRITE
FOR Index ← 1 TO Count
   WRITEFILE "Out.txt", List[Index]
NEXT Index
CLOSEFILE "Out.txt"
```

**Add one line**

```
OPENFILE "Log.txt" FOR APPEND
WRITEFILE "Log.txt", Entry
CLOSEFILE "Log.txt"
```

**Copy selected lines**: open the source FOR READ and the target FOR WRITE; inside the read loop, WRITEFILE only when the condition holds; close both.

**Load into an array safely**: loop `WHILE NOT EOF(...) AND Count < UpperBound`.

**Numbers in files**: every line is a STRING. Use `STR_TO_NUM(Line)` before arithmetic and `NUM_TO_STR(Value)` before writing a number.

**Several lines per item**: read each line of the group inside one pass of the loop, in the order they were written.

## What is in the file? A mode trace

| Step | Statements | File now holds |
|---|---|---|
| 1 | OPENFILE FOR WRITE; WRITEFILE "A"; WRITEFILE "B"; CLOSEFILE | A, B |
| 2 | OPENFILE FOR APPEND; WRITEFILE "C"; CLOSEFILE | A, B, C |
| 3 | OPENFILE FOR READ; READFILE twice; CLOSEFILE | A, B, C (reading changes nothing; the variable now holds B) |
| 4 | OPENFILE FOR WRITE; WRITEFILE "D"; CLOSEFILE | D only |

Step 4 is the classic trap: opening FOR WRITE throws away A, B and C before anything is written. Each OPENFILE FOR READ also starts again from the first line.

## Key terms

| Term | Meaning |
|---|---|
| Text file | File of characters organised into lines |
| File mode | How a file is opened: READ, WRITE or APPEND |
| EOF | End of file; the function returns TRUE when no more lines remain |
| Persistent data | Data that survives after the program ends |
| Volatile | Memory whose contents are lost when power is removed (RAM) |

## Exam traps

- WRITE **deletes** what was in the file; use APPEND to keep it.
- Close **every** file you open.
- Use WHILE NOT EOF, not FOR, when the number of lines is unknown; WHILE also copes with an empty file.
- Test EOF **before** each READFILE.
- You cannot WRITEFILE to a file opened FOR READ.
- Convert numeric lines with STR_TO_NUM before calculating.
- To change one line, read the whole file and write a new version.

## Self-test

1. Give two reasons why a program needs to store data in a file.
2. Which mode would you use to add today's sales to a file without losing earlier sales?
3. What happens to the existing contents if a file is opened FOR WRITE?
4. What does EOF("Data.txt") return when the last line has been read?
5. Why is a WHILE loop better than REPEAT for reading a file?
6. Write the statement to read the next line of "Stock.txt" into Item.
7. Write the statement to close "Stock.txt".
8. Why must a number read from a text file be converted before arithmetic?
9. A file stores each pupil as three lines: name, form, age. How many READFILE statements are in the loop body?
10. Why should a loop that loads a file into `Data[1:50]` also test a counter?
11. How can a program change one line in a text file?
12. Two files are open at once. How many CLOSEFILE statements are needed?

**Answers**

1. Any two: data persists after the program ends; data can be shared; large volumes; input prepared in advance; permanent record of output.
2. APPEND.
3. They are replaced (lost).
4. TRUE.
5. The file could be empty; WHILE tests EOF before reading, REPEAT would try to read at least once.
6. `READFILE "Stock.txt", Item`
7. `CLOSEFILE "Stock.txt"`
8. Every line is read as a STRING.
9. Three, one for each line of the group.
10. To stop the array overflowing if the file has more than 50 lines.
11. Read every line, change the one needed, and write all the lines to a new file (opened FOR WRITE).
12. Two, one for each file.
