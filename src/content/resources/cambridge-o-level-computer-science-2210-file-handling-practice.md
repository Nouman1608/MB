---
title: "Cambridge O Level Computer Science (2210): File handling -- Practice Questions"
seoTitle: "Cambridge O Level CS 2210 File Handling Questions"
resourceType: "practice-questions"
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
description: "Original questions with answers on Cambridge O Level Computer Science 2210 section 8.3: why files are used, and opening, reading, writing and closing files in pseudocode."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs. Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [File handling study guide](/resources/cambridge-o-level-computer-science-2210-file-handling/) and [File handling revision notes](/resources/cambridge-o-level-computer-science-2210-file-handling-revision-notes/)

---

## Section A

**1.** State **one** reason why a program stores data in a file. **[1]**

**2.** State the file mode that must be used to read data from a file. **[1]**

**3.** State what happens to any existing data in a file that is opened in WRITE mode. **[1]**

**4.** Write the pseudocode statement that opens a file called "Data.txt" so that data can be read from it. **[1]**

**5.** Write the pseudocode statement that closes the file called "Data.txt". **[1]**

**6.** State why a file should be closed when a program has finished using it. **[1]**

## Section B

**7.** A game keeps the best score in the variable BestScore. Explain why the programmer also stores the best score in a file. **[2]**

**8.** Study the pseudocode. The file Scores.txt holds the five numbers 12, 7, 20, 15 and 6, one on each line.

```
DECLARE Score : INTEGER
DECLARE Total : INTEGER
Total ← 0
OPENFILE "Scores.txt" FOR READ
FOR Count ← 1 TO 5
   READFILE "Scores.txt", Score
   Total ← Total + Score
NEXT Count
CLOSEFILE "Scores.txt"
OUTPUT "Average ", Total / 5
```

**(a)** State the value of Total after the second pass of the loop. **[1]**

**(b)** State what is output. **[2]**

**(c)** Explain why the pseudocode uses a FOR loop to read the file. **[1]**

**9.** Write pseudocode that asks the user to enter three names and saves them in a file called Friends.txt, one on each line. **[5]**

**10.** The file Words.txt holds three lines of text: red, green and blue. Study the pseudocode.

```
DECLARE Line : STRING
OPENFILE "Words.txt" FOR READ
OPENFILE "Upper.txt" FOR WRITE
FOR Count ← 1 TO 3
   READFILE "Words.txt", Line
   WRITEFILE "Upper.txt", UCASE(Line)
NEXT Count
CLOSEFILE "Words.txt"
CLOSEFILE "Upper.txt"
```

**(a)** State what is stored in Upper.txt after the program has run. **[2]**

**(b)** Explain what would happen to the contents of Upper.txt if the program were run a second time. **[2]**

**11.** A program stores the high score of a game in the file HighScore.txt, which holds one whole number. After each game the program compares the player's score with the stored number and replaces it if the new score is higher.

**(a)** Write pseudocode that inputs the player's score, reads the stored high score and, if the new score is higher, stores the new score in the file. **[6]**

**(b)** Explain why the file is closed before it is opened again in a different mode. **[1]**

**12.** A student writes the pseudocode below to save a message in a file.

```
Message ← "Hello"
WRITEFILE "Message.txt", Message
OPENFILE "Message.txt" FOR WRITE
```

**(a)** Identify **two** errors. **[2]**

**(b)** Write the corrected pseudocode. **[3]**

**13.** A teacher stores the marks of 20 students in a file called Marks.txt, one mark per line. Write pseudocode to read all 20 marks and output the highest. **[5]**

---

## Answers

**1.** Any one: the data is kept after the program ends; large amounts of data can be stored; data can be shared with other programs or users; data prepared outside the program can be read in [1].

**2.** READ [1].

**3.** The existing data is lost / a new file is created [1].

**4.** `OPENFILE "Data.txt" FOR READ` [1].

**5.** `CLOSEFILE "Data.txt"` [1].

**6.** So that all the data is saved correctly and the file is released for other use [1].

**7.** The variable is stored in RAM, which loses its contents when the program ends or the computer is switched off [1]. A file is stored on secondary storage, so the best score is still there when the game is next run [1].

**8. (a)** 19 [1] (12 + 7).
**(b)** The total is 60 [1], so the output is `Average 12.0` [1].
**(c)** The number of items in the file is known (five), so a count-controlled loop can be used / the pseudocode has no end-of-file test [1].

**9.** Sample answer:

```
DECLARE FriendName : STRING
OPENFILE "Friends.txt" FOR WRITE
FOR Count ← 1 TO 3
   OUTPUT "Enter a name"
   INPUT FriendName
   WRITEFILE "Friends.txt", FriendName
NEXT Count
CLOSEFILE "Friends.txt"
```

Marks: file opened in WRITE mode with the correct name [1]; loop repeated three times [1]; input of a name inside the loop [1]; WRITEFILE with the file name and the variable inside the loop [1]; file closed after the loop [1].

**10. (a)** The three lines RED, GREEN and BLUE [2]. Award 1 mark for the words in lower case, or for two of the three correct.
**(b)** The file is opened in WRITE mode, which creates a new file and removes the existing data [1]. The three upper-case words would be written again, so the file would hold the same three lines, not six [1].

**11. (a)** Sample answer:

```
DECLARE NewScore : INTEGER
DECLARE OldBest : INTEGER
INPUT NewScore
OPENFILE "HighScore.txt" FOR READ
READFILE "HighScore.txt", OldBest
CLOSEFILE "HighScore.txt"
IF NewScore > OldBest
   THEN
      OPENFILE "HighScore.txt" FOR WRITE
      WRITEFILE "HighScore.txt", NewScore
      CLOSEFILE "HighScore.txt"
ENDIF
```

Marks: input of the new score [1]; file opened in READ mode and the old high score read into a variable [1]; file closed after reading [1]; comparison of the new score with the old high score [1]; file opened in WRITE mode only if the new score is higher, and the new score written [1]; file closed after writing [1].
**(b)** A file should only be open in one mode at a time [1].

**12. (a)** The file is written to before it has been opened (the OPENFILE statement comes after the WRITEFILE statement) [1]. The file is never closed with CLOSEFILE [1].
**(b)**
```
Message ← "Hello"
OPENFILE "Message.txt" FOR WRITE
WRITEFILE "Message.txt", Message
CLOSEFILE "Message.txt"
```
Marks: OPENFILE before the write [1]; WRITEFILE after it [1]; CLOSEFILE added at the end [1].

**13.** Sample answer:

```
DECLARE Mark : INTEGER
DECLARE Highest : INTEGER
OPENFILE "Marks.txt" FOR READ
READFILE "Marks.txt", Highest
FOR Count ← 2 TO 20
   READFILE "Marks.txt", Mark
   IF Mark > Highest
      THEN
         Highest ← Mark
   ENDIF
NEXT Count
CLOSEFILE "Marks.txt"
OUTPUT Highest
```

Marks: file opened in READ mode [1]; first mark read and used as the starting highest value (or Highest set to a very low value) [1]; a loop that reads the remaining marks, 19 more [1]; comparison and replacement of Highest [1]; file closed and Highest output [1].

---

## Where marks are usually lost

- Question 3: saying the data is "added to". WRITE replaces the old data.
- Question 4 and Question 5: leaving out the file name or the mode.
- Question 8: giving the average as 12 without the decimal point, because the division gives a real value.
- Question 9: opening and closing the file inside the loop, which would replace the earlier names each time.
- Question 10 (b): saying the file would hold six lines. WRITE starts a new file each time.
- Question 11: writing to the file while it is still open for reading.
- Question 12: using the file before opening it.
- Question 13: no CLOSEFILE, or reading 20 marks after already reading the first.

## Checking a file program

Underline OPENFILE, READFILE or WRITEFILE, and CLOSEFILE in your answer. Each file should have one OPENFILE with a mode, at least one read or write, and one CLOSEFILE, in that order.
