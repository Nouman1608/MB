---
title: "Cambridge IGCSE Computer Science (0478): File handling -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge IGCSE Computer Science 0478 section 8.3: OPENFILE, READFILE, WRITEFILE and CLOSEFILE, file modes and common file patterns."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
Condensed notes for syllabus section 8.3, File handling: why programs use files and how to use the four file commands.

## Four facts to start with

1. A file stores data on secondary storage, so it **survives** when the program ends.
2. `OPENFILE` prepares a file for `READ` or `WRITE`.
3. `READFILE` and `WRITEFILE` deal with one data item (or one line of text) at a time.
4. `CLOSEFILE` finishes with the file. Opening in `WRITE` mode **erases** existing data.

## Key terms

| Term | Definition |
|---|---|
| File | Named collection of data stored on secondary storage |
| File identifier | Name of the file, written as a string |
| File mode | Whether the file is open for `READ` or `WRITE` |
| Read | Copy a data item from a file into a variable |
| Write | Copy the value of a variable into a file |
| Volatile | Loses its contents when power is off, like RAM |

## Why use a file?

- Data is kept after the program ends.
- Large amounts of data can be stored.
- Data can be shared with other programs.
- The data can be changed without changing the program.

## The four commands

| Command | Example |
|---|---|
| Open | `OPENFILE "Scores.txt" FOR READ` |
| Read | `READFILE "Scores.txt", Score` |
| Write | `WRITEFILE "Scores.txt", Score` |
| Close | `CLOSEFILE "Scores.txt"` |

## File modes

| Mode | Use | Warning |
|---|---|---|
| `READ` | Take data from the file | File must exist |
| `WRITE` | Put data into the file | Existing data is lost |

Only one mode at a time for one file.

## Standard patterns

**Write a list:**

```
OPENFILE "List.txt" FOR WRITE
FOR Index ← 1 TO 5
    WRITEFILE "List.txt", Items[Index]
NEXT Index
CLOSEFILE "List.txt"
```

**Read a list into an array:** the same loop with `READFILE "List.txt", Items[Index]` and mode `READ`.

**Copy a line:** open both files, `READFILE` into a string variable, `WRITEFILE` that variable to the other file, close both files.

## Worked example: total from a file

`Marks.txt` holds 12, 18, 9 (one per line).

```
Total ← 0
OPENFILE "Marks.txt" FOR READ
FOR Index ← 1 TO 3
    READFILE "Marks.txt", Mark
    Total ← Total + Mark
NEXT Index
CLOSEFILE "Marks.txt"
OUTPUT Total
```

| Index | Mark | Total |
|---|---|---|
| 1 | 12 | 12 |
| 2 | 18 | 30 |
| 3 | 9 | 39 |

The output is 39.

## Worked example: what is in the file

```
OPENFILE "Test.txt" FOR WRITE
WRITEFILE "Test.txt", "Red"
WRITEFILE "Test.txt", "Blue"
CLOSEFILE "Test.txt"
OPENFILE "Test.txt" FOR WRITE
WRITEFILE "Test.txt", "Green"
CLOSEFILE "Test.txt"
```

After the first block the file holds Red and Blue. The second `OPENFILE ... FOR WRITE` replaces the contents, so the file finally holds only **Green**.

## Updating a file without losing data

1. Open in `READ`; read all items into an array; close.
2. Add the new item to the array.
3. Open in `WRITE`; write every item from the array; close.

Example: `Names.txt` holds Ali, Bea, Cai. After reading into `Names[1:4]` and setting `Names[4] ← "Dev"`, writing all four items leaves Ali, Bea, Cai, Dev in the file.

## Variable, array or file?

| Need | Use |
|---|---|
| Value only needed during the run | Variable |
| List needed during the run | Array |
| Data needed on the next run | File |

## Exam traps

- **WRITE to add data.** It erases the old data.
- **No CLOSEFILE.**
- **Wrong order** when reading.
- **Wrong mode** for the operation.
- **File name not a string.** It needs quotation marks.
- **Variables confused with files.** Variables are lost when the program ends.

## Self-test

1. Why is data in variables lost when a program ends?
2. State two reasons for storing data in a file.
3. Which command opens a file?
4. Which mode must be used to read a file?
5. What happens to existing data when a file is opened in `WRITE` mode?
6. What does `READFILE` do?
7. Why should a file be closed?
8. Can a file be open in both modes at once?
9. How many items does one `WRITEFILE` write?
10. How would you add a new line to an existing file using only `READ` and `WRITE`?

**Answers**

1. Variables are held in RAM, which is volatile.
2. Any two: data is kept after the program ends; larger amounts can be stored; data can be shared; data can be changed without changing the program.
3. `OPENFILE`.
4. `READ`.
5. It is lost; a new file is created.
6. It reads one data item from the file into a variable.
7. To make sure all data is written and to release the file.
8. No, a file should be opened in only one mode at a time.
9. One data item (or one line of text).
10. Read the existing lines into variables or an array, close the file, then open it in `WRITE` mode and write the old lines followed by the new one.

## Command words to expect

| Command word | What to write |
|---|---|
| State, Give, Identify | A short answer with no explanation |
| Define | A precise meaning |
| Describe | The main points or characteristics, or the steps in order |
| Explain | A reason or "how and why", supported with evidence from the question |
| Compare | Similarities and differences, naming both sides every time |
| Suggest | A sensible proposal that applies your knowledge to the situation given |
| Evaluate | A judgement based on advantages and disadvantages, ending with a conclusion |

## Next steps

Read the full explanations in the [File handling study guide](/resources/cambridge-igcse-computer-science-0478-file-handling/), then try the [File handling practice questions](/resources/cambridge-igcse-computer-science-0478-file-handling-practice/).

## Official syllabus

Cambridge IGCSE Computer Science (0478) syllabus for 2026, 2027 and 2028, section 8.3:
[official syllabus PDF](https://www.cambridgeinternational.org/Images/697167-2026-2028-syllabus.pdf).
