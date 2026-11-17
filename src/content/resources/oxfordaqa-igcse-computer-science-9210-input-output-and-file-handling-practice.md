---
title: "OxfordAQA IGCSE Computer Science (9210): Input/output and file handling -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 2 – Programming"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 2.07
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "input-output-and-file-handling-9210"
description: "Original OxfordAQA IGCSE Computer Science 9210 practice questions with answers on keyboard input, screen output and reading and writing text files."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "File-handling command names in the pseudocode are illustrative, not taken from OxfordAQA's pseudocode guide; please check they suit the board's current teaching guidance."
publishedDate: 2026-11-17
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Input/output and file handling study guide](/resources/oxfordaqa-igcse-computer-science-9210-input-output-and-file-handling/) | [Input/output and file handling revision notes](/resources/oxfordaqa-igcse-computer-science-9210-input-output-and-file-handling-revision-notes/)

These questions cover section 3.2.7 Input/output and file handling of the OxfordAQA International GCSE Computer
Science (9210) specification. Any clear file-handling commands are acceptable in your answers; the commands
`OPEN_FILE_READ`, `OPEN_FILE_WRITE`, `OPEN_FILE_APPEND`, `READ_LINE`, `WRITE_LINE`, `END_OF_FILE` and
`CLOSE_FILE` are used here for illustration.

---

## Section A

**1.** State the data type of a value obtained from the keyboard before it is converted. **[1]**

**2.** Explain why a program should output a prompt before asking for input. **[1]**

**3.** Give **two** reasons why a program might store data in a text file rather than only in variables. **[2]**

**4.** Explain the difference between opening a file in write mode and in append mode. **[2]**

**5.** State **two** reasons why a program should close a file when it has finished with it. **[2]**

## Section B

**6.** Write pseudocode that asks the user for the length and width of a rectangle in metres and outputs its area
with a suitable message. **[4]**

**7.** A text file `temps.txt` contains one temperature (a real number) per line. The number of lines is not
known.

**(a)** Write pseudocode that reads the file and outputs the highest temperature. **[5]**
**(b)** Explain why your loop tests for the end of the file rather than using a `FOR` loop. **[1]**

**8.** A club records the name of each new member in `members.txt`.

**(a)** Write pseudocode that asks for a new member's name and adds it to the file without removing the existing
names. **[4]**
**(b)** State what would happen to the file if it were opened in write mode instead. **[1]**

**9.** A student writes this code to save five names entered by the user:

```
FOR i ← 1 TO 5
  name ← USERINPUT
  file ← OPEN_FILE_WRITE("names.txt")
  WRITE_LINE(file, name)
  CLOSE_FILE(file)
ENDFOR
```

**(a)** State how many names are in the file after the code runs, and explain why. **[2]**
**(b)** Describe how to correct the code. **[2]**

**10.** A program reads the following three lines from `prices.txt` and adds each value to `total`, which starts
at 0:

```
2.50
1.25
4.00
```

**(a)** State the value of `total` if each line is converted to a real before it is added. **[1]**
**(b)** Explain what might happen if the lines were not converted. **[2]**

**11.** Write pseudocode that writes the squares of the numbers 1 to 10 into a new file `squares.txt`, one per
line. **[4]**

**12.** A quiz program reads questions from `questions.txt` and answers from `answers.txt`, where line *n* of one
file matches line *n* of the other. Describe, without writing code, how the program could ask each question,
check the user's answer and output a final score. **[4]**

---

## Answers

**1.** String [1].

**2.** So that the user knows what data is required (and in what form), since otherwise the program waits with no
indication of what to type [1].

**3.** The data is kept after the program ends [1]; it can be loaded again the next time the program runs or
shared with another program [1].

**4.** Write mode replaces any existing contents of the file [1]; append mode keeps the existing contents and adds
new data to the end [1].

**5.** To make sure all the data is saved to storage [1]; to release the file so that other programs can use it
[1].

**6.** One possible answer:

```
OUTPUT "Enter the length in metres"
length ← STRING_TO_REAL(USERINPUT)
OUTPUT "Enter the width in metres"
width ← STRING_TO_REAL(USERINPUT)
area ← length * width
OUTPUT "Area: " + REAL_TO_STRING(area) + " square metres"
```

Prompts and both inputs [1]; conversion to a number [1]; area calculated [1]; output with a message [1].

**7.** **(a)**

```
file ← OPEN_FILE_READ("temps.txt")
highest ← STRING_TO_REAL(READ_LINE(file))
WHILE NOT END_OF_FILE(file)
  t ← STRING_TO_REAL(READ_LINE(file))
  IF t > highest THEN
    highest ← t
  ENDIF
ENDWHILE
CLOSE_FILE(file)
OUTPUT highest
```

File opened for reading [1]; loop until end of file [1]; each line read and converted [1]; comparison updating
`highest` [1]; file closed and result output [1]. (Starting `highest` at a very low value is also acceptable,
but 0 is not, since every temperature could be below zero.)
**(b)** The number of lines is unknown, so the number of repetitions cannot be fixed in advance [1].

**8.** **(a)**

```
OUTPUT "Enter the new member's name"
name ← USERINPUT
file ← OPEN_FILE_APPEND("members.txt")
WRITE_LINE(file, name)
CLOSE_FILE(file)
```

Prompt and input [1]; file opened in append mode [1]; name written [1]; file closed [1].
**(b)** All the existing names would be deleted, leaving only the new name [1].

**9.** **(a)** One name, the last one entered [1], because opening the file in write mode inside the loop wipes it
each time [1].
**(b)** Open the file once before the loop [1] and close it once after the loop ends [1].

**10.** **(a)** 7.75 [1].
**(b)** The values are strings, so adding them would cause an error [1] or join them as text (for example
`"2.501.254.00"`) instead of adding them as numbers [1].

**11.** One possible answer:

```
file ← OPEN_FILE_WRITE("squares.txt")
FOR n ← 1 TO 10
  WRITE_LINE(file, INT_TO_STRING(n * n))
ENDFOR
CLOSE_FILE(file)
```

File opened in write mode before the loop [1]; loop from 1 to 10 [1]; square calculated and written each pass
[1]; file closed after the loop [1].

**12.** Open both files for reading and set a score to 0 [1]; in a loop until the end of the questions file, read
one line from each file and output the question [1]; input the user's answer and compare it with the answer line,
adding 1 to the score if they match [1]; close both files and output the score [1].

---

## Where marks are usually lost

- Forgetting to convert input or file data before calculating.
- Starting a highest value at 0 when values can be negative.
- Using write mode when the question says "add".
- Opening or closing a file inside the loop.
- Describing file reading without the final close step.
