---
title: "Cambridge IGCSE Computer Science (0478): File handling -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original questions with full answers on Cambridge IGCSE Computer Science 0478 section 8.3: purpose of files, file modes, and reading and writing data in pseudocode."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs. Use these alongside the official past papers available from your board.

Related: [File handling study guide](/resources/cambridge-igcse-computer-science-0478-file-handling/) and [File handling revision notes](/resources/cambridge-igcse-computer-science-0478-file-handling-revision-notes/)

---

## Section A

**1.** State **two** reasons why a program might store data in a file. **[2]**

**2.** State the purpose of the pseudocode command `CLOSEFILE`. **[1]**

**3.** State the effect of opening an existing file in `WRITE` mode. **[1]**

**4.** The file `Names.txt` is opened with `OPENFILE "Names.txt" FOR READ`. Write the pseudocode statement that reads the next item into the variable `Name`. **[1]**

**5.** State why data held in variables is not suitable for storing a high score between two runs of a game. **[1]**

## Section B

**6.** Write pseudocode that asks the user to enter 4 numbers and writes them to a file called `Numbers.txt`. **[4]**

**7.** The file `Marks.txt` holds three marks, 12, 18 and 9, one per line.

```
Total ← 0
OPENFILE "Marks.txt" FOR READ
FOR Index ← 1 TO 3
    READFILE "Marks.txt", Mark
    Total ← Total + Mark
NEXT Index
CLOSEFILE "Marks.txt"
OUTPUT Total / 3
```

**(a)** State the output. **[2]**

**(b)** State the purpose of the algorithm. **[1]**

**8.** Write pseudocode to copy one line of text from the file `Source.txt` to the file `Backup.txt`. **[5]**

**9.** The code below is run.

```
OPENFILE "Colours.txt" FOR WRITE
WRITEFILE "Colours.txt", "Red"
WRITEFILE "Colours.txt", "Blue"
CLOSEFILE "Colours.txt"
OPENFILE "Colours.txt" FOR WRITE
WRITEFILE "Colours.txt", "Green"
CLOSEFILE "Colours.txt"
```

State the contents of `Colours.txt` at the end and explain your answer. **[3]**

**10.** A game stores each player's name followed by their score in the file `Scores.txt`. The file holds Ali, 34, Bea, 41, Cai, 27. Write pseudocode to read the three players and output the name of the player with the lowest score. **[6]**

**11.** Explain why a program should close a file when it has finished using it. **[2]**

**12.** A student wrote a program that opens `Report.txt` in `WRITE` mode to add a new line to the end of the report. The old report disappeared. Explain why. **[2]**

---

## Answers

**1.** Any two from: so the data is kept after the program ends; to store large amounts of data; so the data can be shared with other programs; so the data can be changed without changing the program [1 each].

**2.** To finish with the file, making sure that all data is saved and releasing the file [1].

**3.** The existing data in the file is lost [1] (a new file is created).

**4.** `READFILE "Names.txt", Name` [1].

**5.** Variables are held in RAM and their values are lost when the program ends [1].

**6.** Example answer:

```
OPENFILE "Numbers.txt" FOR WRITE
FOR Index ← 1 TO 4
    INPUT Number
    WRITEFILE "Numbers.txt", Number
NEXT Index
CLOSEFILE "Numbers.txt"
```

File opened for `WRITE` [1]; loop that runs 4 times with `INPUT` [1]; `WRITEFILE` inside the loop with the correct file and variable [1]; `CLOSEFILE` after the loop [1].

**7.** **(a)** Total = 12 + 18 + 9 = 39 [1]. Output = 39 / 3 = 13.0 (accept 13) [1].

**(b)** To calculate the average of the marks stored in the file [1].

**8.** Example answer:

```
DECLARE LineOfText : STRING
OPENFILE "Source.txt" FOR READ
OPENFILE "Backup.txt" FOR WRITE
READFILE "Source.txt", LineOfText
WRITEFILE "Backup.txt", LineOfText
CLOSEFILE "Source.txt"
CLOSEFILE "Backup.txt"
```

Source file opened for `READ` [1]; backup file opened for `WRITE` [1]; line read into a string variable [1]; variable written to the second file [1]; both files closed [1].

**9.** The file holds only "Green" [1]. The second `OPENFILE ... FOR WRITE` creates a new file [1], so the earlier contents, Red and Blue, are lost [1].

**10.** Example answer:

```
LowestScore ← 1000
OPENFILE "Scores.txt" FOR READ
FOR Player ← 1 TO 3
    READFILE "Scores.txt", Name
    READFILE "Scores.txt", Score
    IF Score < LowestScore
       THEN
         LowestScore ← Score
         LowestName ← Name
    ENDIF
NEXT Player
CLOSEFILE "Scores.txt"
OUTPUT LowestName
```

File opened for `READ` [1]; loop for 3 players [1]; name read before score, matching the file order [1]; comparison with the lowest so far using `<` [1]; name and score stored when lower [1]; file closed and `LowestName` output (Cai) [1].

**11.** To make sure that all the data has been written to storage [1] and to release the file so it can be used by other programs or opened in a different mode [1].

**12.** Opening a file in `WRITE` mode creates a new file [1], so the old contents are lost instead of the new line being added after them [1].

---

## Where marks are usually lost

- Question 6: forgetting `CLOSEFILE`, or putting `OPENFILE` inside the loop so the file is reset each time.
- Question 7: giving 39 instead of the average.
- Question 8: opening both files in `READ` mode, or not using a variable to carry the line.
- Question 9: saying the file holds Red, Blue and Green.
- Question 10: reading the score before the name, or starting `LowestScore` at 0.
- Question 12: saying the file "was not saved".

## Quick reference for checking your answers

| Item | Key point |
|---|---|
| File | Keeps data after the program ends |
| `READ` | Take data from a file |
| `WRITE` | Put data into a file; old data is lost |
| `CLOSEFILE` | Always close |
