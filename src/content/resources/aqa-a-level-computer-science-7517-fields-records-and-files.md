---
title: "AQA A-Level Computer Science (7517): Fields, Records and Files"
resourceType: "study-guides"
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
description: "Deeper guide to AQA 7517 section 4.2.1.3: fields and records, reading and writing text files and binary files, with traced algorithms and byte counts."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers **4.2.1.3 Fields, records and files** in AQA A-Level Computer Science (7517). The specification asks you to **be able to read/write from/to a text file** and **be able to read/write data from/to a binary (non-text) file**. The [abstract data types study guide](/resources/a-level-aqa-computer-science-abstract-data-types/) summarises the difference between the two file types in a paragraph; this page shows how each is processed, with worked algorithms, traced output and the byte-level reasoning behind binary files.

Condensed notes are in the [fields, records and files revision notes](/resources/aqa-a-level-computer-science-7517-fields-records-and-files-revision-notes/), and exam-style questions are in the [fields, records and files practice questions](/resources/aqa-a-level-computer-science-7517-fields-records-and-files-practice/).

## Fields, records and files

- A **field** is a single item of data about something, such as a surname or a price.
- A **record** is a collection of related fields about one entity, such as one product. Fields in a record can have different data types.
- A **file** is a named collection of data held in secondary storage, so it persists after the program ends. A data file usually holds many records of the same structure.
- A **key field** holds a value that is unique to each record, such as a product code, so a record can be identified.

In a program, a record is usually declared as a user-defined type (see 4.1.1.1), and the records read from a file are held in memory, often in an array of records, while they are processed.

## The pattern for any file operation

Every file task follows the same three stages:

1. **Open** the file, stating the mode: read, write (create or overwrite) or append (add to the end).
2. **Read or write** the data.
3. **Close** the file, so that buffered data is written to storage and the file is released for other programs.

Because opening can fail (the file may be missing, or permission may be refused), file code is a common place to use **exception handling** from 4.1.1.9.

AQA does not specify pseudocode commands for files, and every language names them differently. The examples below use readable generic commands; in the exam, write the equivalent statements for your own language.

## Text files

A **text file** stores everything as **characters**, using a character set such as ASCII or Unicode. Numbers are stored as their digit characters, so the integer 287 is stored as the three characters '2', '8' and '7'. The file is divided into **lines**, each ended by a newline marker. For record-based data a common layout is **one record per line, with fields separated by a delimiter** such as a comma.

Consequences:

- A person can open and read the file in a text editor.
- When a line is read, every field arrives as a **string** and must be **converted** (for example string to integer) before arithmetic.
- Lines can be different lengths, so to find record 50 the program reads through the first 49: access is **sequential**.

**Worked example 1: reading a text file.** The invented file `scores.txt` contains:

```
Amira,72
Ben,58
Chen,91
Dara,66
```

The algorithm finds the mean score and the name of the highest scorer.

```
file ← OPEN("scores.txt", READ)
total ← 0
count ← 0
bestScore ← -1
WHILE NOT END_OF_FILE(file)
    line ← READ_LINE(file)
    fields ← SPLIT(line, ",")
    name ← fields[0]
    score ← STRING_TO_INT(fields[1])
    total ← total + score
    count ← count + 1
    IF score > bestScore THEN
        bestScore ← score
        bestName ← name
    ENDIF
ENDWHILE
CLOSE(file)
OUTPUT total / count, bestName
```

| line read | score | total | count | bestName |
|---|---|---|---|---|
| Amira,72 | 72 | 72 | 1 | Amira |
| Ben,58 | 58 | 130 | 2 | Amira |
| Chen,91 | 91 | 221 | 3 | Chen |
| Dara,66 | 66 | 287 | 4 | Chen |

Output: 71.75 and Chen. Two details carry marks: the end-of-file test comes **before** each read, so an empty file causes no read at all (though the final division would then fail, so a robust version checks `count > 0`); and `STRING_TO_INT` converts the field before it is added.

**Writing a text file.** Writing builds each line as a string, converting numbers to strings and joining fields with the delimiter:

```
outFile ← OPEN("results.txt", WRITE)
FOR i ← 0 TO LEN(names) - 1
    IF scores[i] >= 60 THEN
        grade ← "PASS"
    ELSE
        grade ← "RESIT"
    ENDIF
    WRITE_LINE(outFile, names[i] + "," + INT_TO_STRING(scores[i]) + "," + grade)
ENDFOR
CLOSE(outFile)
```

Opening in **write** mode replaces any existing `results.txt`. To keep existing lines and add new ones, open in **append** mode.

## Binary files

A **binary (non-text) file** stores data in the **same internal format the program uses in memory**. An integer is stored as its binary bit pattern (for example in 4 bytes), a real number in its floating-point format, and a Boolean in a byte. Opened in a text editor, the file appears as meaningless symbols.

Consequences:

- The program reading the file must know the **exact layout** (which bytes form which field, and their types) that the writing program used.
- No conversion between strings and numbers is needed, so reading and writing can be quicker.
- With **fixed-length records**, every record occupies the same number of bytes, so the position of any record can be calculated and, in languages that allow it, the program can move straight to it: **direct (random) access**.

**Worked example 2: a fixed-length record layout.** Assume (sizes differ between languages) a stock record with:

| Field | Type | Bytes |
|---|---|---|
| productID | Integer | 4 |
| description | String, fixed at 20 characters of 1 byte | 20 |
| price | Real | 8 |
| **Total** | | **32** |

- A file of 500 records occupies 500 × 32 = 16 000 bytes.
- Records numbered from 0: record n starts at byte n × 32. Record 9 (the tenth) starts at byte 288.
- To update one price, the program can calculate the position, read that one record, change it and write it back, without reading the 9 records before it.

**Is binary always smaller?** Not necessarily. The integer 2 147 483 647 needs ten characters as text but four bytes in binary; the integer 7 needs one character as text but still four bytes in binary. Binary files have a **fixed, predictable size per value**; text files have a size that depends on the digits. Say "often more compact for numeric data" rather than "always smaller".

Reading and writing a binary file follow the same open, read or write, close pattern:

```
file ← OPEN("stock.dat", READ_BINARY)
WHILE NOT END_OF_FILE(file)
    item ← READ_RECORD(file)        # reads exactly 32 bytes into a StockItem record
    IF item.price > 50.0 THEN
        OUTPUT item.description
    ENDIF
ENDWHILE
CLOSE(file)
```

## Choosing between text and binary

| | Text file | Binary file |
|---|---|---|
| Stored as | Characters, usually in lines | Internal (in-memory) representation |
| Human readable | Yes | No |
| Conversion when reading numbers | String to number needed | None |
| Record length | Usually variable | Can be fixed |
| Finding record n | Read through earlier lines | Calculate position (fixed-length records) |
| Sharing between programs | Easy; any program can read characters | Reader must know the exact layout |
| Suits | Configuration files, logs, exchanging data | Large data sets, images, frequently updated records |

## Common mistakes

- Doing arithmetic on a field read from a text file without converting it from a string.
- Testing for end of file **after** reading, which tries to read past the end.
- Forgetting to close the file, or opening a file in write mode when append was needed.
- Claiming binary files are always smaller than text files.
- Saying a binary file "contains only 0s and 1s" as the distinguishing feature; every file is stored in binary. The point is that a binary file is not encoded as characters.
- Writing a record without a delimiter between fields in a text file.

## Exam technique

- **Write an algorithm to read a file**: open, loop until end of file, read, split, convert, process, close.
- **Explain a difference**: name what is stored (characters versus internal representation) and a consequence (readability, conversion, fixed size, direct access).
- **Calculate a file size or position**: show the bytes per field, the record size, then multiply.
- **Justify a file type**: link the scenario's need (people must edit it; records must be updated individually) to the property.

## Related resources

- [Fields, records and files revision notes](/resources/aqa-a-level-computer-science-7517-fields-records-and-files-revision-notes/)
- [Fields, records and files practice questions](/resources/aqa-a-level-computer-science-7517-fields-records-and-files-practice/)
- [Data structures study guide for 4.2.1.1](/resources/aqa-a-level-computer-science-7517-data-structures/)
- [Programming study guide, including string conversion and exceptions](/resources/aqa-a-level-computer-science-7517-programming-aqa-alevel-cs/)

*Written against the AQA A-level Computer Science (7517) specification, 4.2.1.3 Fields, records and files. Always check the current specification on the AQA website.*
