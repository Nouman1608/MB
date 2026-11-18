---
title: "Cambridge A Level Computer Science (9618): File Processing and Exception Handling -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed 9618 notes on file modes, serial, sequential and random file operations, exceptions and when to use exception handling, with a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section 20.2 "File Processing and Exception Handling" of Cambridge International AS & A Level Computer Science 9618: opening files in read, write and append mode and closing them, reading and writing records, operations on serial, sequential and random files, and understanding and writing exception handling. It is assessed in Paper 3 (pseudocode) and Paper 4 (program code).

Related: [File processing and exception handling study guide](/resources/cambridge-a-level-computer-science-9618-file-processing-and-exception-handling/) · [File processing and exception handling practice questions](/resources/cambridge-a-level-computer-science-9618-file-processing-and-exception-handling-practice/) · [Topic 20 Further Programming revision notes](/resources/a-level-computer-science-further-programming-a-level-revision-notes/)

## Key terms

| Term | Meaning |
|---|---|
| Record | A set of related fields about one item |
| Key field | Field that identifies a record uniquely |
| Serial file | Records stored in the order they were added |
| Sequential file | Records stored in order of the key field |
| Random (direct-access) file | Fixed-length records at positions calculated from the key |
| Hashing algorithm | Calculation that turns a key into a record address |
| Collision | Two keys giving the same address |
| Exception | Unexpected event at run time that disrupts the program's normal flow |
| Exception handling | Code that catches an exception and deals with it so the program can continue |

## File modes

| Mode | Use | Warning |
|---|---|---|
| READ | Read existing data from the start | File must exist |
| WRITE | Create a new file | Destroys existing contents |
| APPEND | Add to the end | Keeps existing contents |
| RANDOM | Read or write any record by position | Records must be fixed length |

## Pseudocode patterns

**Read every line**

```
OPENFILE "F.txt" FOR READ
WHILE NOT EOF("F.txt")
   READFILE "F.txt", Line
   // process Line
ENDWHILE
CLOSEFILE "F.txt"
```

**Add to a serial file**: OPENFILE FOR APPEND → WRITEFILE → CLOSEFILE.

**Random file update**: calculate address → SEEK → GETRECORD → check key → change fields → SEEK again → PUTRECORD → CLOSEFILE.

## Operations by file type

| Operation | Serial | Sequential | Random |
|---|---|---|---|
| Add | Append at the end | Copy to a new file, writing the new record at its key position (and at the end if it is last) | Hash the key, SEEK, PUTRECORD |
| Delete | Copy all other records to a new file | Copy all other records to a new file | Mark the record as empty / overwrite it |
| Find | Read from the start until found or EOF | Read from the start; stop when found or when a larger key is passed | Hash the key, SEEK, GETRECORD, check the key |
| Amend | Copy with the changed record | Copy with the changed record | Read, change, SEEK back, PUTRECORD |

**Sequential insertion checklist**: flag to stop writing the new record twice; write it before the first larger key; write it after the loop if never written; close both files; replace the old file with the new one.

## Exceptions

**Examples**: file not found; reading past end of file; disk full; text that cannot be converted to a number; division by zero; lost network connection; array index out of range.

**Why handle them**
- The program does not crash.
- Files are closed and data saved.
- The program can recover (ask again, skip, use a default).
- Error handling is separated from the main logic.

**When appropriate**: operations depending on things outside the program's control (files, devices, networks, data from outside). **Not** a replacement for validating predictable input, and not a fix for logic errors.

**Structure**

| Language | Form |
|---|---|
| Python | `try:` … `except ValueError:` … `finally:` |
| Java | `try { … } catch (Exception e) { … } finally { … }` |
| Visual Basic | `Try` … `Catch ex As Exception` … `Finally` … `End Try` |

Put only the statements that can fail inside the try block; give a helpful message in the handler; close files in finally.

## Exam traps

- FOR WRITE used to add records, wiping the file.
- READFILE before the EOF test.
- Forgetting the "insert at end" case for a sequential file.
- Only one file opened for a sequential insertion or deletion.
- No second SEEK before PUTRECORD.
- Key not checked after reading a hashed address.
- Exception handling used for a menu-range check.
- A handler that catches everything silently, hiding faults.

## Self-test

1. What happens to existing data when a file is opened FOR WRITE?
2. Which mode adds a record to the end of a serial file?
3. Why must EOF be tested before READFILE in a loop?
4. Why does inserting into a sequential file need a second file?
5. A product key 1,234 is hashed with key MOD 200. What is the address?
6. Why is the key checked after GETRECORD?
7. Why is SEEK used again before PUTRECORD?
8. Define an exception.
9. Give two examples of exceptions in file processing.
10. Give two reasons why exception handling is important.
11. Should a check that a menu choice is between 1 and 4 use exception handling? Why?
12. What is a finally block used for?

### Answers

1. It is lost: the file is created afresh.
2. APPEND.
3. So an empty file is not read and the last record is not processed twice or read past the end.
4. Lines cannot be inserted into the middle of a text file, so records are copied to a new file with the new one written in its place.
5. 34.
6. Another record may have hashed to the same address (a collision), so this may not be the record wanted.
7. GETRECORD moves the position on; SEEK returns to the record's address so it is overwritten.
8. An unexpected event during run time that disrupts the normal flow of the program.
9. Any two: file not found; reading past the end; disk full; data in the file that cannot be converted.
10. Any two: stops the program crashing; lets files be closed and data saved; allows recovery; separates error code from main logic.
11. No: it is predictable input, so a simple IF validation check is appropriate.
12. Code that runs whether or not an exception occurred, such as closing a file.
