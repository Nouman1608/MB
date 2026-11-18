---
title: "AQA A-Level Computer Science (7517): Fields, Records and Files -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of data structures"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 2.13
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "fields-records-and-files-7517"
description: "Original AQA 7517 section 4.2.1.3 questions with mark-scheme answers on fields, records, text file algorithms, binary record sizes and file choice."
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
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Fields, records and files study guide](/resources/aqa-a-level-computer-science-7517-fields-records-and-files/) | [Fields, records and files revision notes](/resources/aqa-a-level-computer-science-7517-fields-records-and-files-revision-notes/)

Pseudocode file commands in these questions are generic (`OPEN`, `READ_LINE`, `WRITE_LINE`, `END_OF_FILE`, `CLOSE`). In your answers, you may use the equivalent statements of any language you have studied.

---

## Section A

**1.** Explain the difference between a **field** and a **record**. **[2]**

**2.** State what is meant by a **key field**. **[1]**

**3.** Describe how data is stored in a text file and in a binary file. **[2]**

**4.** Give **two** reasons why a program should close a file when it has finished with it. **[2]**

**5.** Explain the difference between opening a file in **write** mode and in **append** mode. **[2]**

## Section B

**6.** The file `temps.txt` contains:

```
Mon,14
Tue,17
Wed,11
Thu,19
```

The following algorithm is run.

```
file ← OPEN("temps.txt", READ)
warm ← 0
WHILE NOT END_OF_FILE(file)
    parts ← SPLIT(READ_LINE(file), ",")
    IF STRING_TO_INT(parts[1]) > 15 THEN
        warm ← warm + 1
        OUTPUT parts[0]
    ENDIF
ENDWHILE
CLOSE(file)
OUTPUT warm
```

**(a)** Complete a trace table with columns parts[0], parts[1], warm and output. **[4]**
**(b)** State the final output of `warm`. **[1]**

**7.** A text file `members.txt` holds one record per line in the form `memberID,name,yearJoined`, for example `1047,Tomas Reyes,2012`. Write an algorithm that reads the file and writes every record for a member who joined before 2015 to a new file `longstanding.txt`, in the same format. **[6]**

**8.** A binary file stores fixed-length student records. Each record has a student ID (4 bytes), a surname fixed at 15 characters (1 byte each), an average mark stored as a real (8 bytes) and a fees-paid Boolean (1 byte).

**(a)** Calculate the size of one record. **[1]**
**(b)** Calculate the size of a file holding 500 records. **[1]**
**(c)** Records are numbered from 0. Calculate the byte at which record 120 begins. **[1]**
**(d)** Explain why the position of a particular record cannot usually be calculated in the same way for a text file. **[2]**

**9.** Three integers, 5, 40000 and 1234567, are to be saved.

**(a)** Calculate the number of bytes needed to store them as the single text line `5,40000,1234567` (1 byte per character, ignoring the line ending), and as three 4-byte integers in a binary file. **[2]**
**(b)** Explain, with an example, why storing integers in a binary file does not always use less space than storing them as text. **[2]**

**10.** Identify whether a text file or a binary file is more suitable in each case, and justify your choice.

**(a)** A settings file for a game, which players are expected to open and edit by hand. **[2]**
**(b)** An airline's seat records for 400 000 seats, where individual seats are updated many times a minute. **[2]**

**11.** A student's code contains these two problems:

```
REPEAT
    line ← READ_LINE(file)
    fields ← SPLIT(line, ",")
    total ← total + fields[1]
UNTIL END_OF_FILE(file)
```

**(a)** Explain the problem with the line `total ← total + fields[1]` and how to correct it. **[2]**
**(b)** Explain what happens if the file is empty, and how the loop should be changed. **[2]**

**12.** Write an algorithm fragment that attempts to open `stock.dat` for reading and, if the file cannot be opened, outputs a message instead of the program stopping. **[3]**

---

## Answers

**1.** A field is a single item of data (for example a surname) [1]; a record is a collection of related fields about one entity (for example all the details of one student) [1].

**2.** A field whose value is unique to each record, so it identifies that record [1].

**3.** A text file stores data as characters using a character set such as ASCII or Unicode, usually in lines [1]; a binary file stores data in the program's internal representation (for example an integer's bit pattern), not as characters [1].

**4.** Any two [1 each]: so that buffered data is written to storage and not lost; so that the file is released for other programs or users; so that the resources used by the open file are freed.

**5.** Write mode creates a new file or overwrites the existing contents [1]; append mode keeps the existing contents and adds new data at the end [1].

**6. (a)**

| parts[0] | parts[1] | warm | output |
|---|---|---|---|
| Mon | 14 | 0 | |
| Tue | 17 | 1 | Tue |
| Wed | 11 | 1 | |
| Thu | 19 | 2 | Thu |

Mon row with warm unchanged [1]; Tue row with warm 1 and output Tue [1]; Wed row unchanged [1]; Thu row with warm 2 and output Thu [1].
**(b)** 2 [1].

**7.**
```
inFile ← OPEN("members.txt", READ)
outFile ← OPEN("longstanding.txt", WRITE)
WHILE NOT END_OF_FILE(inFile)
    line ← READ_LINE(inFile)
    fields ← SPLIT(line, ",")
    IF STRING_TO_INT(fields[2]) < 2015 THEN
        WRITE_LINE(outFile, line)
    ENDIF
ENDWHILE
CLOSE(inFile)
CLOSE(outFile)
```
Input file opened for reading and output file for writing [1]; loop that tests for end of file before each read [1]; line read and split on the comma [1]; year field converted to an integer [1]; comparison with 2015 and matching line written in the same format [1]; both files closed after the loop [1].

**8. (a)** 4 + 15 + 8 + 1 = **28 bytes** [1].
**(b)** 500 × 28 = **14 000 bytes** [1].
**(c)** 120 × 28 = byte **3360** [1].
**(d)** Text records are usually of variable length, because numbers and names take as many characters as they need [1], so the start of a line depends on the lengths of all earlier lines, which must be read first [1].

**9. (a)** Text: 1 + 1 + 5 + 1 + 7 = **15 bytes** [1]; binary: 3 × 4 = **12 bytes** [1].
**(b)** A binary integer always takes its fixed size, whatever its value [1]; for example the value 5 needs 1 byte as a text character but 4 bytes as a 32-bit binary integer, so a file of small numbers can be larger in binary [1].

**10. (a)** Text file [1]: it is stored as characters, so players can open, read and change it in an ordinary text editor [1].
**(b)** Binary file with fixed-length records [1]: the position of any seat's record can be calculated, so it can be read and updated directly without reading all earlier records, and no text-to-number conversion is needed [1].

**11. (a)** `fields[1]` is a string, so it cannot be added arithmetically (it would cause a type error or string concatenation) [1]; convert it first, for example `total ← total + STRING_TO_INT(fields[1])` [1].
**(b)** A REPEAT loop tests its condition after the body, so the program tries to read a line from an empty file, causing a run-time error [1]; use a WHILE NOT END_OF_FILE loop so the test happens before each read [1].

**12.**
```
TRY
    file ← OPEN("stock.dat", READ_BINARY)
EXCEPT
    OUTPUT "Stock file could not be opened"
ENDTRY
```
Open statement inside a protected (TRY) block [1]; handler (EXCEPT/CATCH) that runs if an exception is raised [1]; message output in the handler so the program continues rather than crashing [1].

---

## Where marks are usually lost

- Adding a field read from a text file without converting it from a string.
- Testing for end of file only after a read.
- Opening the output file in append mode when a fresh file was required, or the reverse.
- Forgetting to close one of two open files.
- Writing that binary files are always smaller.
