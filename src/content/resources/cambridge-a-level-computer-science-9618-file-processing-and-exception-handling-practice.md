---
title: "Cambridge A Level Computer Science (9618): File Processing and Exception Handling -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original 9618 practice questions with answers on file modes, serial, sequential and random file pseudocode, and writing exception handling code."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [File processing and exception handling study guide](/resources/cambridge-a-level-computer-science-9618-file-processing-and-exception-handling/) · [File processing and exception handling revision notes](/resources/cambridge-a-level-computer-science-9618-file-processing-and-exception-handling-revision-notes/)

---

## Section A

**1.** State the difference between opening a file in WRITE mode and in APPEND mode. **[2]**

**2.** Explain why a loop that reads a text file should test EOF before each READFILE statement. **[2]**

**3.** Explain what is meant by an exception, and give **two** examples of exceptions that could occur when a program processes a file. **[3]**

**4.** State **two** reasons why exception handling is important. **[2]**

**5.** For each situation, state whether exception handling or a validation check is more appropriate.

**(a)** Checking that a menu choice typed by the user is between 1 and 4. **[1]**

**(b)** Reading a file from a memory stick that the user might remove during reading. **[1]**

## Section B

**6.** Write pseudocode to add the string held in NewScore to the end of the existing text file Scores.txt. **[3]**

**7.** The text file Products.txt holds one product name per line. Write pseudocode that outputs every name with more than 10 characters, followed by the number of such names. Use the function LENGTH(s). **[5]**

**8.** The text file Members.txt holds member names in alphabetical order, one per line. Write pseudocode that removes the name held in Target by creating the new file NewMembers.txt that contains every other name in the same order. **[5]**

**9.** The insertion algorithm below is used with Members.txt containing Bea, Jon, Kim and NewName = "Zak".

```
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

**(a)** State the contents of NewMembers.txt after the algorithm runs. **[1]**

**(b)** Explain why the IF statement after the loop is needed. **[2]**

**10.** A random file Parts.dat stores fixed-length records of type PartRecord, with the fields PartID : INTEGER and Description : STRING. A record's address is PartID MOD 200.

**(a)** Calculate the address for PartID 1234. **[1]**

**(b)** Write pseudocode to read the record at the address for the PartID held in the variable SearchID and output its Description, or output "Not found" if the record at that address has a different PartID. **[4]**

**(c)** Explain why the PartID in the record must be checked after it is read. **[2]**

**11.** This Python program asks for two whole numbers and divides one by the other.

```python
a = int(input("First number: "))
b = int(input("Second number: "))
print(a / b)
```

**(a)** Identify **two** exceptions that could occur. **[2]**

**(b)** Rewrite the program so that it handles both exceptions, giving a suitable message for each. You may use Python, Java or Visual Basic. **[4]**

---

## Answers

**1.** WRITE creates a new file, so any existing contents are lost [1]; APPEND keeps the existing contents and adds new data to the end of the file [1].

**2.** If the file is empty, or all records have been read, a READFILE would try to read past the end of the file and cause an error or reprocess the last record [1]. Testing EOF first means the loop body only runs when there is another record to read [1].

**3.** An exception is an unexpected event or error that occurs while the program is running and stops its normal flow [1]. Any two examples: the file does not exist [1]; an attempt to read past the end of the file [1]; the disk is full when writing [1]; data read from the file cannot be converted to the required type [1].

**4.** Any two: the program does not crash [1]; files can be closed and data saved before the program stops [1]; the program can recover, for example by asking for another file name [1]; it keeps error-handling code separate from the main logic [1].

**5. (a)** **Validation check**: the input is predictable and can be tested with a simple condition [1].

**(b)** **Exception handling**: the removal is outside the program's control and cannot be checked in advance [1].

**6.**

```
OPENFILE "Scores.txt" FOR APPEND
WRITEFILE "Scores.txt", NewScore
CLOSEFILE "Scores.txt"
```

Opens in APPEND mode [1]; writes NewScore [1]; closes the file [1].

**7.** Example answer:

```
DECLARE Name : STRING
DECLARE Count : INTEGER
Count ← 0
OPENFILE "Products.txt" FOR READ
WHILE NOT EOF("Products.txt")
   READFILE "Products.txt", Name
   IF LENGTH(Name) > 10 THEN
      OUTPUT Name
      Count ← Count + 1
   ENDIF
ENDWHILE
CLOSEFILE "Products.txt"
OUTPUT Count
```

Count initialised to 0 and file opened FOR READ [1]; loop until EOF [1]; READFILE inside the loop [1]; LENGTH(Name) > 10 tested, outputting the name and incrementing Count [1]; file closed and Count output after the loop [1].

**8.** Example answer:

```
DECLARE Name : STRING
OPENFILE "Members.txt" FOR READ
OPENFILE "NewMembers.txt" FOR WRITE
WHILE NOT EOF("Members.txt")
   READFILE "Members.txt", Name
   IF Name <> Target THEN
      WRITEFILE "NewMembers.txt", Name
   ENDIF
ENDWHILE
CLOSEFILE "Members.txt"
CLOSEFILE "NewMembers.txt"
```

Opens Members.txt FOR READ [1] and NewMembers.txt FOR WRITE [1]; loop until EOF with READFILE [1]; writes each name only if it is not Target [1]; closes both files [1].

**9. (a)** **Bea, Jon, Kim, Zak** [1].

**(b)** "Zak" comes after every name in the file, so the condition NewName < Name is never true and it is not written inside the loop [1]. The IF after the loop writes it at the end when Inserted is still FALSE (this also covers an empty file) [1].

**10. (a)** 1234 MOD 200 = **34** [1].

**(b)** Example answer:

```
DECLARE Part : PartRecord
OPENFILE "Parts.dat" FOR RANDOM
SEEK "Parts.dat", SearchID MOD 200
GETRECORD "Parts.dat", Part
IF Part.PartID = SearchID THEN
   OUTPUT Part.Description
ELSE
   OUTPUT "Not found"
ENDIF
CLOSEFILE "Parts.dat"
```

Opens FOR RANDOM [1]; SEEK to SearchID MOD 200 [1]; GETRECORD into a PartRecord variable [1]; compares PartID with SearchID and outputs Description or "Not found", then closes the file [1].

**(c)** Different PartIDs can produce the same address (a collision), for example 1234 and 1034 both give 34 [1], so the record at the address may belong to another part, or the required record may have been stored at a different address [1].

**11. (a)** A value error (ValueError in Python) if the input is not a whole number [1]; a division-by-zero error (ZeroDivisionError) if the second number is 0 [1].

**(b)** Example answer in Python:

```python
try:
    a = int(input("First number: "))
    b = int(input("Second number: "))
    print(a / b)
except ValueError:
    print("Please enter whole numbers only")
except ZeroDivisionError:
    print("The second number must not be 0")
```

Risky statements placed in a try block [1]; handler for the conversion error [1]; handler for division by zero [1]; each handler gives a suitable message instead of the program crashing [1].

---

## Where marks are usually lost

- Opening Scores.txt FOR WRITE, which deletes the existing scores.
- Placing READFILE outside the loop, or before the EOF test.
- Forgetting to close one of the two files in a sequential operation.
- Writing to the same file that is being read.
- Not checking the key after reading from a hashed address.
- A single handler that catches every error with no message, so the user cannot tell what went wrong.
