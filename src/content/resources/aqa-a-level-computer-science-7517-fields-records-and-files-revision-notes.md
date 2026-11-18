---
title: "AQA A-Level Computer Science (7517): Fields, Records and Files -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA 7517 section 4.2.1.3 recall: fields, records, text and binary file handling, record sizes, direct access, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Condensed recall for **4.2.1.3 Fields, records and files**, AQA A-Level Computer Science (7517): reading and writing text files and binary (non-text) files. Worked algorithms and traces are in the [fields, records and files study guide](/resources/aqa-a-level-computer-science-7517-fields-records-and-files/); exam-style questions are in the [fields, records and files practice questions](/resources/aqa-a-level-computer-science-7517-fields-records-and-files-practice/).

## Definitions

| Term | Meaning |
|---|---|
| Field | One item of data, such as a price |
| Record | Related fields about one entity; fields may have different types |
| File | Named collection of data in secondary storage that persists after the program ends |
| Key field | Field whose value is unique to each record |
| Delimiter | Character separating fields in a text record, such as a comma |
| Fixed-length record | Every record occupies the same number of bytes |

## Every file operation

```
OPEN   (mode: READ, WRITE = create/overwrite, APPEND = add to end)
READ or WRITE
CLOSE  (flushes buffered data, releases the file)
```

Wrap opening in exception handling: the file may be missing or locked.

## Text files

- Data stored as **characters** (ASCII or Unicode), in **lines**.
- Usually one record per line, fields separated by a delimiter.
- Every field is read as a **string**: convert before arithmetic.
- Numbers written must be converted **to** strings.
- Readable and editable in a text editor.
- Variable-length lines → **sequential access**: to reach line 50, read lines 1 to 49.

**Read pattern**

```
file ← OPEN("data.txt", READ)
WHILE NOT END_OF_FILE(file)
    line ← READ_LINE(file)
    fields ← SPLIT(line, ",")
    … convert and process fields …
ENDWHILE
CLOSE(file)
```

**Write pattern**: build a string with delimiters, `WRITE_LINE`, then close. Write mode overwrites; append mode adds.

**Round trip example.** Writing name "Ola", score 64 and grade "PASS": `"Ola" + "," + INT_TO_STRING(64) + "," + "PASS"` produces the line `Ola,64,PASS`. Reading it back, `SPLIT` returns ["Ola", "64", "PASS"]; only "64" needs converting with `STRING_TO_INT` before it is used in a calculation.

## Binary (non-text) files

- Data stored in the program's **internal representation** (integers as bit patterns, reals in floating-point form).
- Not human-readable as text.
- No string conversion when reading or writing.
- Reader must know the **exact layout** of every record.
- **Fixed-length records** allow the position of any record to be calculated: **direct (random) access**.

**Record arithmetic** (sizes depend on language; questions will state them):

```
record size  = sum of field sizes
file size    = number of records × record size
start of record n (numbered from 0) = n × record size
```

Example: 4 + 20 + 8 = 32 bytes per record; 500 records = 16 000 bytes; record 9 starts at byte 288.

## Text versus binary

| | Text | Binary |
|---|---|---|
| Stored as | Characters | Internal representation |
| Readable by people | Yes | No |
| Number conversion | Needed | Not needed |
| Record length | Usually variable | Can be fixed |
| Access to record n | Sequential | Direct with fixed-length records |
| Size of a number | Depends on its digits | Fixed by its type |

Binary is **often** more compact for numeric data, but not always: 7 is one character as text and four bytes as a 32-bit integer.

## Choosing a file type

- People need to read or edit it, or several different programs must read it → **text**.
- Many records, frequently updated individually, read by the same program → **binary with fixed-length records**.

## Exam traps

- Arithmetic on an unconverted string field.
- Testing end of file after reading instead of before.
- Opening in write mode when the old contents must be kept.
- Forgetting to close the file.
- "Binary files contain 0s and 1s": all files do; say the data is not encoded as characters.
- "Binary is always smaller": it is not.
- Forgetting a delimiter between fields when writing a text record.

## Self-test

1. Distinguish a field from a record.
2. What is a key field?
3. Name the three stages of every file operation.
4. What is the difference between opening a file in write mode and in append mode?
5. Why must a numeric field read from a text file be converted?
6. Why is access to a particular line in a text file usually sequential?
7. How is data stored in a binary file?
8. What must a program know to read a binary file correctly?
9. Records have fields of 4, 30 and 8 bytes. How large is a file of 250 records?
10. In that file, at which byte does record 40 (numbered from 0) start?
11. Give one situation in which a text file is the better choice.
12. Why should a file be closed after use?

**Answers**

1. A field is one item of data; a record is a collection of related fields about one entity.
2. A field whose value is unique to each record, used to identify it.
3. Open, read or write, close.
4. Write mode creates the file or overwrites its contents; append mode adds to the end of the existing contents.
5. Every field in a text file is read as a string of characters, so it cannot be used in arithmetic until converted.
6. Lines can be different lengths, so the position of a line cannot be calculated; earlier lines must be read first.
7. In the same internal representation the program uses in memory, not as characters.
8. The exact layout: the order, type and size of every field in each record.
9. Record size 42 bytes; 250 × 42 = 10 500 bytes.
10. 40 × 42 = byte 1680.
11. Any one: people need to read or edit it; it is a configuration or log file; data is exchanged with a different program.
12. To make sure buffered data is written to storage and to release the file for other programs.

## Related resources

- [Fields, records and files study guide](/resources/aqa-a-level-computer-science-7517-fields-records-and-files/)
- [Fields, records and files practice questions](/resources/aqa-a-level-computer-science-7517-fields-records-and-files-practice/)
- [Abstract data types revision notes](/resources/aqa-a-level-computer-science-abstract-data-types-revision-notes/)
