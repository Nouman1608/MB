---
title: "Cambridge O Level Computer Science (2210): File handling -- Revision Notes"
seoTitle: "Cambridge O Level CS 2210 File Handling Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge O Level Computer Science 2210 section 8.3: why files are used and the OPENFILE, READFILE, WRITEFILE and CLOSEFILE commands, with patterns and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Condensed notes for syllabus section 8.3, File handling. For the full explanations and worked examples, use the [File handling study guide](/resources/cambridge-o-level-computer-science-2210-file-handling/).

## Syllabus checklist

- The purpose of storing data in a file to be used by a program.
- Open, close and use a file for reading and writing.
- Read and write single items of data.
- Read and write a line of text.

## Key terms

| Term | Definition |
|---|---|
| File | A named collection of data stored on secondary storage |
| Volatile | Loses its contents when the power is off or the program ends (RAM) |
| Open | Make a file ready for use, stating the mode |
| Close | Finish with the file so that the data is saved and the file is released |
| READ mode | The file is opened so that data can be read from it |
| WRITE mode | The file is opened so that data can be written to it; a new file is created and old data is lost |
| Line of text | A string stored as one item on a line of the file |

## Why use files

- Variables and arrays are in RAM and their contents are **lost** when the program stops.
- A file is on secondary storage, so the data **stays**.
- Data can be **kept between runs**, such as a high score.
- Large amounts of data can be stored outside the program.
- Data can be **shared** with other programs or users.
- Data prepared outside the program can be read in.

## The four commands

| Command | Form | Example |
|---|---|---|
| Open | `OPENFILE <name> FOR <mode>` | `OPENFILE "Scores.txt" FOR READ` |
| Read | `READFILE <name>, <variable>` | `READFILE "Scores.txt", Score` |
| Write | `WRITEFILE <name>, <variable>` | `WRITEFILE "Scores.txt", Score` |
| Close | `CLOSEFILE <name>` | `CLOSEFILE "Scores.txt"` |

Rules:

- One mode at a time for each file.
- WRITE replaces existing data (the file is newly created).
- READ needs a file that exists.
- Close the file when it is no longer needed.
- To change mode, close the file and open it again.

## Order of statements

1. `DECLARE` the variables.
2. `OPENFILE` with the mode.
3. A loop (or single statement) with `READFILE` or `WRITEFILE`.
4. `CLOSEFILE`.

## Pattern 1: write several items

```
OPENFILE "Names.txt" FOR WRITE
FOR Count ← 1 TO 4
   INPUT Name
   WRITEFILE "Names.txt", Name
NEXT Count
CLOSEFILE "Names.txt"
```

## Pattern 2: read and total

```
Total ← 0
OPENFILE "Prices.txt" FOR READ
FOR Count ← 1 TO 6
   READFILE "Prices.txt", Price
   Total ← Total + Price
NEXT Count
CLOSEFILE "Prices.txt"
OUTPUT Total
```

## Pattern 3: read a line of text

```
OPENFILE "Notes.txt" FOR READ
READFILE "Notes.txt", Line
CLOSEFILE "Notes.txt"
OUTPUT Line
```

## Pattern 4: copy between files

```
OPENFILE "A.txt" FOR READ
OPENFILE "B.txt" FOR WRITE
READFILE "A.txt", Line
WRITEFILE "B.txt", Line
CLOSEFILE "A.txt"
CLOSEFILE "B.txt"
```

## Pattern 5: update a stored value

1. Open for READ, read the old value, CLOSE.
2. Compare with the new value.
3. If the new value is better, open for WRITE, write it, CLOSE.

## Trace practice

File `Marks.txt` holds 8, 3, 9 (one per line).

```
Best ← 0
OPENFILE "Marks.txt" FOR READ
FOR Count ← 1 TO 3
   READFILE "Marks.txt", Mark
   IF Mark > Best
      THEN
         Best ← Mark
   ENDIF
NEXT Count
CLOSEFILE "Marks.txt"
OUTPUT Best
```

| Count | Mark | Best |
|---|---|---|
| 1 | 8 | 8 |
| 2 | 3 | 8 |
| 3 | 9 | 9 |

The output is 9.

## About the end of a file

The syllabus pseudocode lists the four commands above and no end-of-file test. Questions therefore give the number of items, or use a stop value. Use a FOR loop with that number.

## Answer templates

**Explain why a program stores data in a file (2 marks):** RAM is volatile so variables lose their contents when the program ends; a file on secondary storage keeps the data so that it can be used again.

**Write pseudocode to save data in a file (4 or 5 marks):** OPENFILE with the name and WRITE; loop if there are several items; WRITEFILE with the name and variable; CLOSEFILE.

**Write pseudocode to read from a file (4 or 5 marks):** OPENFILE with READ; READFILE into a variable of the right type; use the value; CLOSEFILE.

## Exam traps

- **No CLOSEFILE.** It is usually a mark.
- **WRITE mode used to read.**
- **Old data lost** by using WRITE on a file that needs to keep its contents.
- **Missing the name** in READFILE or WRITEFILE.
- **Open or close inside the loop** for no reason.
- **Using the wrong variable type** for data read from the file.

## Self-test

1. Why is a file better than a variable for storing a high score?
2. Which mode is used to read a file?
3. What happens to existing data when a file is opened for WRITE?
4. Write the statement that opens "Data.txt" for reading.
5. Write the statement that reads the next item into Value.
6. Write the statement that writes Total into "Out.txt".
7. Why should a file be closed after use?
8. What must you do before reading a file that you have just written?
9. Give two reasons for storing data in a file.
10. How is a line of text stored in a file?
11. Why do exam questions give the number of items in a file?
12. If a file holds 4, 6 and 10 and the program totals them, what is the total?

**Answers**

1. A variable is in RAM and is lost when the program ends; a file is stored on secondary storage and keeps its data.
2. READ.
3. A new file is created and the existing data is lost.
4. `OPENFILE "Data.txt" FOR READ`
5. `READFILE "Data.txt", Value`
6. `WRITEFILE "Out.txt", Total`
7. So that all the data is saved and the file is released for other use.
8. Close it, then open it again in READ mode.
9. Any two: keep data between runs; store large amounts; share data; read data prepared elsewhere.
10. As a string, written or read as one item.
11. The pseudocode has no end-of-file test, so the loop needs a known count.
12. 20.
