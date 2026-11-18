---
title: "Cambridge A Level Computer Science (9618): File Processing and Exception Handling"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 20: Further Programming"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "A"
order: 20.2
syllabusTopics:
  - qualification: "a-level"
    topic: "further-programming"
    subtopic: "file-processing-and-exception-handling"
description: "Study guide to 9618 section 20.2: file modes, serial, sequential and random file operations in pseudocode, and when and how to write exception handling."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 20.2 "File Processing and Exception Handling" of Cambridge International AS & A Level Computer Science 9618 asks you to "write code to perform file-processing operations": to "open (in read, write, append mode) and close a file", to "read a record from a file and write a record to a file", and to "perform file-processing operations on serial, sequential, random files". It also asks you to "show understanding of an exception and the importance of exception handling", to "know when it is appropriate to use exception handling" and to "write program code to use exception handling". It is assessed in Paper 3 (pseudocode) and Paper 4 (program code in Java, Visual Basic or Python).

Related: [File processing and exception handling revision notes](/resources/cambridge-a-level-computer-science-9618-file-processing-and-exception-handling-revision-notes/) · [File processing and exception handling practice questions](/resources/cambridge-a-level-computer-science-9618-file-processing-and-exception-handling-practice/) · [Topic 20 Further Programming study guide](/resources/a-level-computer-science-further-programming-a-level/)

## File modes and the pseudocode you need

| Operation | Cambridge pseudocode | Effect |
|---|---|---|
| Open to read | `OPENFILE "Data.txt" FOR READ` | Read from the start; the file must exist |
| Open to write | `OPENFILE "Data.txt" FOR WRITE` | Creates the file; any existing contents are lost |
| Open to append | `OPENFILE "Data.txt" FOR APPEND` | Adds to the end; existing contents kept |
| Read a line | `READFILE "Data.txt", Line` | Next line into the variable |
| Write a line | `WRITEFILE "Data.txt", Line` | Writes the data as a new line |
| End of file? | `EOF("Data.txt")` | TRUE when no more data remains |
| Close | `CLOSEFILE "Data.txt"` | Completes the transfer and releases the file |
| Open random | `OPENFILE "Data.dat" FOR RANDOM` | Allows reading and writing at any position |
| Move | `SEEK "Data.dat", Address` | Moves to the record position |
| Read a record | `GETRECORD "Data.dat", Rec` | Reads the record at the current position |
| Write a record | `PUTRECORD "Data.dat", Rec` | Writes the record at the current position |

The most expensive slip is opening a file FOR WRITE when it should be APPEND: every existing record is deleted. Always close a file before opening it again in a different mode.

## Serial files: append and search

In a **serial** file, records are stored in the order they were added. New records go at the end:

```
OPENFILE "Visits.txt" FOR APPEND
WRITEFILE "Visits.txt", NewVisit
CLOSEFILE "Visits.txt"
```

Searching or counting means reading from the start to the end of the file, because there is no order to use:

```
Count ← 0
OPENFILE "Visits.txt" FOR READ
WHILE NOT EOF("Visits.txt")
   READFILE "Visits.txt", Visit
   IF LEFT(Visit, 4) = "2026" THEN
      Count ← Count + 1
   ENDIF
ENDWHILE
CLOSEFILE "Visits.txt"
OUTPUT Count
```

Note the loop tests EOF **before** each read, so an empty file produces no reads at all.

## Sequential files: insert and delete with a second file

A **sequential** file holds records in order of a key field. A text file cannot have a line pushed into the middle, so adding or removing a record means **copying** to a new file.

### Worked example 1: inserting a record in order

*Members.txt holds member names in alphabetical order, one per line. Insert NewName in the correct place.*

```
DECLARE Name : STRING
DECLARE Inserted : BOOLEAN
Inserted ← FALSE
OPENFILE "Members.txt" FOR READ
OPENFILE "NewMembers.txt" FOR WRITE
WHILE NOT EOF("Members.txt")
   READFILE "Members.txt", Name
   IF Inserted = FALSE AND NewName < Name THEN
      WRITEFILE "NewMembers.txt", NewName
      Inserted ← TRUE
   ENDIF
   WRITEFILE "NewMembers.txt", Name
ENDWHILE
IF Inserted = FALSE THEN
   WRITEFILE "NewMembers.txt", NewName
ENDIF
CLOSEFILE "Members.txt"
CLOSEFILE "NewMembers.txt"
```

How it works: every old record is copied across. The first time an old name comes after NewName, NewName is written first. The flag stops it being written twice. If NewName belongs after every existing name (or the file was empty), the loop never writes it, so the final IF adds it at the end. Afterwards the new file replaces the old one.

Test with Members.txt = Ali, Chen, Femi and NewName = Dara: Ali copied; Chen copied; at Femi, Dara < Femi, so Dara is written, then Femi. Result: Ali, Chen, Dara, Femi.

**Deleting** uses the same copy pattern: read each record and write it to the new file **unless** it is the one being deleted. Because the file is in key order, the loop can also stop searching once a key larger than the target has been read, which is a benefit of sequential over serial organisation.

## Random files: go straight to a record

A **random** (direct-access) file stores fixed-length records, and each record's position is calculated from its key, usually with a hashing algorithm.

```
TYPE StockRecord
   DECLARE ProductID : INTEGER
   DECLARE Quantity : INTEGER
ENDTYPE

DECLARE Item : StockRecord
DECLARE Address : INTEGER
Address ← ProductID MOD 500
OPENFILE "Stock.dat" FOR RANDOM
SEEK "Stock.dat", Address
GETRECORD "Stock.dat", Item
IF Item.ProductID = ProductID THEN
   Item.Quantity ← Item.Quantity - 1
   SEEK "Stock.dat", Address
   PUTRECORD "Stock.dat", Item
ELSE
   OUTPUT "Record not at its home address"
ENDIF
CLOSEFILE "Stock.dat"
```

Two details carry marks. First, the key read back is checked, because two keys can hash to the same address (a collision) and the record may have been stored elsewhere. Second, SEEK is used again before PUTRECORD, so the updated record overwrites the one just read rather than the next one.

| Organisation | Add a record | Find a record | Suits |
|---|---|---|---|
| Serial | Append at end | Read from start | Logs and transaction files |
| Sequential | Copy to a new file, inserting in key order | Read from start; can stop early | Batch processing in key order |
| Random | Hash the key, write at that address | Hash the key, read at that address | Fast lookup of single records |

## Exceptions

An **exception** is an unexpected event that occurs while a program is running and disrupts its normal flow, such as trying to open a file that does not exist, reading past the end of a file, converting text such as "12a" to an integer, dividing by zero, or losing a network connection. If nothing handles it, the program stops with an error message, possibly leaving files open and data unsaved.

**Exception handling** places the risky code in a protected block (try). If an exception occurs, control passes to a handler (except in Python, catch in Java, Catch in Visual Basic) that deals with it, and the program continues. A finally block, where used, runs whether or not an exception occurred, which makes it the right place to close a file.

### Why it is important

- The program does not crash, so the user is not left with an error report they cannot understand.
- Files can be closed and data saved even when something goes wrong.
- The program can recover, for example by asking for another file name, using a default value, or skipping a bad record.
- Error-handling code is kept apart from the normal logic, which is easier to read.

### When it is appropriate

Use exception handling for problems that come from **outside the program's control** and cannot be fully checked in advance: file and network operations, and converting data that comes from a file or user. It is **not** a substitute for ordinary validation (checking a menu choice is in range is a simple IF), and it does not fix logic errors in the program itself.

### Worked example 2: reading a file of scores in Python

```python
def load_scores(filename):
    scores = []
    try:
        file = open(filename, "r")
    except FileNotFoundError:
        print("Cannot find", filename)
        return scores
    try:
        for line in file:
            try:
                scores.append(int(line))
            except ValueError:
                print("Skipped a line that is not a whole number:", line.strip())
    finally:
        file.close()
    return scores
```

Three exceptions are anticipated in three places. A missing file is reported and an empty list returned. A line that cannot be converted is reported and skipped, so one bad record does not lose the rest. The finally block closes the file whatever happens while reading. Java and Visual Basic use `try { } catch (...) { } finally { }` and `Try ... Catch ... Finally ... End Try` in the same way.

## Common mistakes

- Opening FOR WRITE to add a record, which wipes the file.
- Reading before testing EOF, so the last record is processed twice or an empty file causes an error.
- Inserting into a sequential file without handling the "goes at the end" case.
- Forgetting the second SEEK before PUTRECORD in a random file.
- Using exception handling for routine validation, or catching every exception with no message, which hides real faults.
- Not closing files in the handler or a finally block.

## Exam technique

- **Write file code**: open with the right mode, loop with `WHILE NOT EOF(...)`, close every file you open.
- **Describe** an operation on a file type: name the steps in order, including the temporary file for sequential insertion and deletion.
- **Explain** exception handling: define an exception, give an example from the scenario, and say what the handler does.
- **Paper 4**: put only the risky statements inside the try block, and print a message that tells the user what went wrong.
