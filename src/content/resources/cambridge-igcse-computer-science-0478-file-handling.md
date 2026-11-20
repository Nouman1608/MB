---
title: "Cambridge IGCSE Computer Science (0478): File handling"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 8: Programming"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 8.3
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-0478"
  - qualification: "igcse"
    topic: "programming-0478"
    subtopic: "file-handling-0478"
description: "Study guide to Cambridge IGCSE Computer Science 0478 section 8.3: why programs store data in files, and how to open, read, write and close a file using the syllabus pseudocode."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---
Section 8.3 of the Cambridge IGCSE Computer Science 0478 syllabus has two content statements. You must **understand the purpose of storing data in a file to be used by a program**, and you must **open, close and use a file for reading and writing**, including reading and writing **single items of data** and **a line of text**.

## Why store data in a file?

When a program ends, the values held in its variables are lost, because variables live in RAM, which is volatile. A **file** is stored on secondary storage, such as a hard disk or solid-state drive, so its contents survive after the program closes and after the computer is switched off.

Programs store data in files so that they can:

- **keep data between runs**, such as high scores, a stock list or a student register;
- **share data** with other programs or with other users;
- **handle large amounts of data**, which would be too much to type in each time;
- **separate the data from the program**, so the data can be changed without changing the code;
- **keep a backup** or a record of what happened, such as a log of events.

| Variable | File |
|---|---|
| Held in RAM | Held on secondary storage |
| Lost when the program ends | Kept after the program ends |
| Very fast to access | Slower to access |
| Limited by memory | Can store large amounts of data |

## The four file operations

The syllabus pseudocode uses four commands.

| Command | Form | What it does |
|---|---|---|
| Open | `OPENFILE <File identifier> FOR <File mode>` | Prepares the file for use in the stated mode |
| Read | `READFILE <File identifier>, <Variable>` | Reads one data item from the file into a variable |
| Write | `WRITEFILE <File identifier>, <Variable>` | Writes the value of a variable into the file |
| Close | `CLOSEFILE <File identifier>` | Finishes with the file |

The file identifier is the name of the file, written as a string, for example `"Scores.txt"`.

### File modes

| Mode | Used for | Important effect |
|---|---|---|
| `READ` | Reading data from the file | The file must already exist; data cannot be changed |
| `WRITE` | Writing data to the file | A new file is created and **any existing data in the file is lost** |

A file should be opened in only one mode at a time. If a program needs to read a file and then change it, it must open it in `READ`, close it, then open it in `WRITE`.

### Why close a file?

Closing a file makes sure that all the data has been written to storage and releases the file so that other programs can use it. A program that forgets to close a file may lose data.

## Writing data to a file

```
DECLARE Name : STRING
DECLARE Score : INTEGER
OPENFILE "Scores.txt" FOR WRITE
FOR Player ← 1 TO 3
    INPUT Name
    INPUT Score
    WRITEFILE "Scores.txt", Name
    WRITEFILE "Scores.txt", Score
NEXT Player
CLOSEFILE "Scores.txt"
```

If the user enters Ali 34, Bea 41 and Cai 27, the file holds six items, one per line:

```
Ali
34
Bea
41
Cai
27
```

Each `WRITEFILE` writes a single item. Because the file was opened in `WRITE` mode, anything that was in `Scores.txt` before is replaced.

## Reading data from a file

```
DECLARE Name : STRING
DECLARE Score : INTEGER
DECLARE Total : INTEGER
Total ← 0
OPENFILE "Scores.txt" FOR READ
FOR Player ← 1 TO 3
    READFILE "Scores.txt", Name
    READFILE "Scores.txt", Score
    OUTPUT Name, " scored ", Score
    Total ← Total + Score
NEXT Player
CLOSEFILE "Scores.txt"
OUTPUT "Total ", Total
```

The reads happen in the same order as the writes: name, then score. The output is:

```
Ali scored 34
Bea scored 41
Cai scored 27
Total 102
```

The total is 34 + 41 + 27 = 102 and the average is 102 / 3 = 34.0.

If the program reads in the wrong order, for example the score into `Name`, the data goes into the wrong variables. The program must know the order in which items are stored in the file.

## Reading and writing a line of text

A single `READFILE` or `WRITEFILE` can also deal with a whole line of text held in a string.

```
DECLARE LineOfText : STRING
OPENFILE "FileA.txt" FOR READ
OPENFILE "FileB.txt" FOR WRITE
READFILE "FileA.txt", LineOfText
WRITEFILE "FileB.txt", LineOfText
CLOSEFILE "FileA.txt"
CLOSEFILE "FileB.txt"
```

This copies a line of text from one file to another. Two different files are open at the same time here, each in its own mode. The line that is read is stored in a variable before it is written.

## Worked example: finding the highest score

Read the three players from `Scores.txt` and output the name of the player with the highest score.

```
HighestScore ← 0
OPENFILE "Scores.txt" FOR READ
FOR Player ← 1 TO 3
    READFILE "Scores.txt", Name
    READFILE "Scores.txt", Score
    IF Score > HighestScore
       THEN
         HighestScore ← Score
         BestName ← Name
    ENDIF
NEXT Player
CLOSEFILE "Scores.txt"
OUTPUT BestName, " has the highest score: ", HighestScore
```

Trace for the data Ali 34, Bea 41, Cai 27:

| Player | Name | Score | HighestScore | BestName |
|---|---|---|---|---|
| start | | | 0 | |
| 1 | Ali | 34 | 34 | Ali |
| 2 | Bea | 41 | 41 | Bea |
| 3 | Cai | 27 | 41 | Bea |

The output is "Bea has the highest score: 41".

## Files and arrays together

A common pattern is to read a file into an array so the data can be searched or sorted in memory. For example, to read 5 names into `Names[1:5]`:

```
OPENFILE "Names.txt" FOR READ
FOR Index ← 1 TO 5
    READFILE "Names.txt", Names[Index]
NEXT Index
CLOSEFILE "Names.txt"
```

To save the array back to the file, open the file in `WRITE` mode and write each element in a loop. Remember that writing replaces the old contents.

## Updating a file safely

Because `WRITE` mode erases the old contents, the way to add a record to an existing file is to keep the old data first. The steps are:

1. Open the file in `READ` mode and read every existing item into an array.
2. Close the file.
3. Add the new item to the array.
4. Open the same file in `WRITE` mode.
5. Write every item in the array back, including the new one.
6. Close the file.

```
OPENFILE "Names.txt" FOR READ
FOR Index ← 1 TO 3
    READFILE "Names.txt", Names[Index]
NEXT Index
CLOSEFILE "Names.txt"
Names[4] ← "Dev"
OPENFILE "Names.txt" FOR WRITE
FOR Index ← 1 TO 4
    WRITEFILE "Names.txt", Names[Index]
NEXT Index
CLOSEFILE "Names.txt"
```

If `Names.txt` held Ali, Bea and Cai, it now holds Ali, Bea, Cai and Dev. The array must be declared with room for four items, for example `ARRAY[1:4] OF STRING`.

## Choosing between a variable, an array and a file

| Need | Best choice |
|---|---|
| A value used only while the program runs | Variable |
| Several values of one type used while the program runs | Array |
| Values needed again the next time the program runs | File |
| Settings or records shared by two programs | File |

## Common mistakes

- Reading from a file that has not been opened, or has been opened in `WRITE` mode.
- Forgetting `CLOSEFILE`.
- Opening a file in `WRITE` mode to add one more item. This **deletes** the existing data.
- Reading the items in a different order from the order they were written.
- Using the wrong data type: reading a score into a STRING variable and then adding it.
- Not using a loop, so each item needs its own pair of lines.
- Writing the file identifier without quotation marks.

## Exam technique

- **Open the file** in the correct mode before reading or writing, and **close** it afterwards.
- **Match the order**: read items in the order that they were written.
- **Explain the purpose**: data kept after the program ends; larger amounts; shared with other programs.
- **Dry-run** file code with a table that includes the file contents.

## Practise this sub-topic

Use the [File handling revision notes](/resources/cambridge-igcse-computer-science-0478-file-handling-revision-notes/) for quick recall and the [File handling practice questions](/resources/cambridge-igcse-computer-science-0478-file-handling-practice/) to test yourself.

## Official syllabus

Cambridge IGCSE Computer Science (0478) syllabus for 2026, 2027 and 2028, section 8.3 File handling:
[official syllabus PDF](https://www.cambridgeinternational.org/Images/697167-2026-2028-syllabus.pdf).
