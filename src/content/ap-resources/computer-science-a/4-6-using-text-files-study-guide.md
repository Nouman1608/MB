---
resourceId: "mb-ap-csa-4.6-study-guide"
title: "Using Text Files: Study Guide (Computer Science A 4.6)"
description: "How a Java program reads a text file with File and Scanner: the hasNext loop, nextInt, next, nextLine, split, throws IOException and close, with two traced examples."
course: "computer-science-a"
unit: 4
topics: ["4.6"]
resourceType: "study-guide"
prerequisites:
  - "while loops and the hasNext idea of looping until data runs out (Topic 2.7)"
  - "String methods and calling methods on objects (Topics 1.14 and 1.15)"
  - "Parsing a String to a number is new here; the wrapper-class topic (4.7) goes deeper"
learningObjectives:
  - "Explain why a file is needed to keep data after a program stops, and how a Scanner connected to a File reads it"
  - "Write a while loop that reads every token of a file using hasNext with nextInt, nextDouble, nextBoolean or next"
  - "Read a file line by line with nextLine and split each line into fields with split"
  - "State what throws IOException, the import statements and close() are for, and name the exceptions that bad input can cause"
skills: ["2", "3", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.6-revision-notes", "mb-ap-csa-4.6-practice", "mb-ap-csa-4.6-checklist"]
next: "mb-ap-csa-4.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "A file stores data that persists after the program ends; a Scanner built from a File object reads it one token or line at a time, from the start, moving only forward."
  - "The standard loop is Scanner in = new Scanner(new File(name)); while (in.hasNext()) { ... in.nextInt() / next() / nextLine() ... } in.close();"
  - "Code that creates a File object must say what to do if the file cannot be opened; the exam way is to add throws IOException to the method header."
  - "nextInt, nextDouble and nextBoolean throw InputMismatchException on the wrong kind of token; every next method throws NoSuchElementException if nothing is left; split(del) cuts a line into a String array."
faqs:
  - question: "Does the exam ask me to read from the keyboard?"
    answer: "No. Accepting input from the keyboard is outside the scope of the course and exam. Reading data from a text file with Scanner(File) is the in-scope way to bring outside data into a program."
  - question: "Do I have to write a try-catch block for the file?"
    answer: "The course description gives one way to handle the possibility that a file cannot be opened: add throws IOException to the header of the method that uses the file. If the file name is invalid, the program ends. You will not be asked to write a try-catch to answer a typical question on this topic."
  - question: "What is the difference between next() and nextLine()?"
    answer: "next() returns the next token, which is a run of characters without whitespace. nextLine() returns everything from the current position to the end of the line, and it can return the empty string if the cursor is already at the end of a line."
  - question: "Why call close()?"
    answer: "Closing a Scanner tells the system that the program has finished with the file so that resources are released. The course description states that a file should be closed when the program is finished using it."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

## Why programs need files

A variable lives in memory, and memory is wiped when the program ends. Suppose a weather station wants a program that totals a month of rainfall. The readings cannot be typed into the source code every time; they must come from somewhere that **persists**. A **file** is storage for data that remains after the program stops running. A program can **retrieve** that data while it runs.

In Java you connect a file to a program with two classes:

- the `File` class, which represents a file by its name (or path), and
- the `Scanner` class, which reads characters from a source and breaks them into pieces you can use.

The idea is the same as a library desk. The `File` object is the title of the book. The `Scanner` is the person who reads the book aloud one word (or one line) at a time, always moving forward, never going back. When you are done you hand the book back with `close()`.

The course covers reading from text files only. Taking input from the keyboard is outside the scope of the course and exam, so every reading example here uses a file.

## The standard pattern

Every file-reading method in this unit has the same skeleton:

```java
import java.io.File;
import java.io.IOException;
import java.util.Scanner;

public class Rainfall
{
    public static int totalRainfall(String fileName) throws IOException
    {
        File f = new File(fileName);       // 1. name the file
        Scanner in = new Scanner(f);       // 2. connect a Scanner to it
        int total = 0;
        while (in.hasNext())               // 3. is there another token?
        {
            total += in.nextInt();         // 4. read one token as an int
        }
        in.close();                        // 5. finished with the file
        return total;
    }
}
```

Take the parts in turn.

**Imports.** `File` and `IOException` are in the `java.io` package, and `Scanner` is in `java.util`. Neither is in `java.lang`, so each needs an `import` statement.

**`throws IOException`.** Creating a `Scanner` from a `File` can fail, for example if the file name is wrong. Java insists that you say what happens in that case. The way the course uses is to add `throws IOException` to the header of the method that uses the file. If the name is invalid at run time, the program terminates. Without the clause the code does not compile. A method that calls your method must also deal with it (usually by throwing it onward in its own header, as `main` often does).

**The constructors.** `File(String str)` opens the named file for reading. `Scanner(File f)` accepts a `File`. You can combine the two: `new Scanner(new File(fileName))`.

**The loop.** `hasNext()` returns `true` if there is another item to read in the file and `false` otherwise, so it is the natural loop condition. It is the file-reading version of "keep going until the data runs out".

**Closing.** `close()` tells Java the program has finished with the file.

## The Scanner methods you need

The Java Quick Reference lists the methods below. Learn what each returns and what can go wrong.

| Method | Returns | Problem if it fails |
|---|---|---|
| `boolean hasNext()` | `true` if there is another item to read | never throws for a normal file |
| `int nextInt()` | next token as an `int` | `InputMismatchException` if the next token is not an `int` or is out of range |
| `double nextDouble()` | next token as a `double` | `InputMismatchException` |
| `boolean nextBoolean()` | next token as a `boolean` | `InputMismatchException` |
| `String next()` | next token as a `String` | `NoSuchElementException` if nothing is left |
| `String nextLine()` | the rest of the current line as a `String`; may be `""` | `NoSuchElementException` if no line is left |
| `void close()` | nothing | none |

A **token** is a run of non-whitespace characters. Spaces, tabs and line breaks all separate tokens, which is why the line structure of the file does not matter to `next()` or `nextInt()`.

Figure 1 shows how the Scanner sees a file.

<figure>
<svg viewBox="0 0 476 120" role="img" aria-labelledby="tokens46-t tokens46-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="tokens46-t">The tokens of the file rain.txt in the order Scanner returns them</title>
<desc id="tokens46-d">A row of eight boxes holding the tokens 12, 0, 7, 3, 25, 0, 8 and 1, numbered 1 to 8 beneath. The first box is labelled next token. An arrow-free note below says the Scanner only moves forward: each call to nextInt returns the token after the last one it returned.</desc>
<rect width="476" height="120" fill="#ffffff"/>
<text x="30" y="18" font-size="13" fill="#1d2b44" font-weight="bold">Token position (not an array index) in rain.txt</text>
<rect x="30" y="34" width="52" height="40" fill="#e8eefc" stroke="#1d2b44" stroke-width="3"/>
<text x="56.0" y="60" text-anchor="middle" font-size="15" fill="#1d2b44">12</text>
<text x="56.0" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">1</text>
<rect x="82" y="34" width="52" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="108.0" y="60" text-anchor="middle" font-size="15" fill="#1d2b44">0</text>
<text x="108.0" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">2</text>
<rect x="134" y="34" width="52" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="160.0" y="60" text-anchor="middle" font-size="15" fill="#1d2b44">7</text>
<text x="160.0" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">3</text>
<rect x="186" y="34" width="52" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="212.0" y="60" text-anchor="middle" font-size="15" fill="#1d2b44">3</text>
<text x="212.0" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">4</text>
<rect x="238" y="34" width="52" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="264.0" y="60" text-anchor="middle" font-size="15" fill="#1d2b44">25</text>
<text x="264.0" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">5</text>
<rect x="290" y="34" width="52" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="316.0" y="60" text-anchor="middle" font-size="15" fill="#1d2b44">0</text>
<text x="316.0" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">6</text>
<rect x="342" y="34" width="52" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="368.0" y="60" text-anchor="middle" font-size="15" fill="#1d2b44">8</text>
<text x="368.0" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">7</text>
<rect x="394" y="34" width="52" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="420.0" y="60" text-anchor="middle" font-size="15" fill="#1d2b44">1</text>
<text x="420.0" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">8</text>
<text x="56.0" y="112" text-anchor="middle" font-size="12" fill="#1d2b44" font-weight="bold">next</text>
</svg>
<figcaption>Figure 1. A Scanner sees the file as a left-to-right stream of tokens. The line breaks in rain.txt (after 7 and after 25) are just whitespace between tokens, so nextInt treats all eight numbers alike.</figcaption>
</figure>

The Scanner has a hidden cursor. Each `next` call returns the item after the cursor and moves the cursor past it. There is no rewind. If you need the data twice, store it (in an array or `ArrayList`) or open a new `Scanner`.

## Reading whole lines and cutting them up

Many files hold records, one per line, with fields separated by a character such as a comma:

```
Amira,72
Bilal,88
Chen,65
Dalia,88
```

`nextLine()` returns a whole line as one `String`. `String[] split(String del)` from the Quick Reference then cuts that `String` around each match of `del`, returning the pieces in order. Here `"Bilal,88".split(",")` gives `{"Bilal", "88"}`. Use `Integer.parseInt` (the next topic covers it) to turn `"88"` into an `int`. A comma works as a delimiter; patterns that use the special properties of regular expressions are outside the scope of the exam.

One warning: the exam does not require code that mixes `nextLine` with other Scanner methods on the same source, because the methods treat whitespace differently. Keep to one style per loop: tokens with `next`/`nextInt`, or lines with `nextLine`.

## Worked example 1: totalling rainfall

The file `rain.txt` contains these three lines.

```
12 0 7
3 25
0 8 1
```

**Task.** Trace `totalRainfall("rain.txt")` and state the result.

**Step 1.** The `File` is created, the `Scanner` is connected, and `total` is 0. The cursor is before `12`.

**Step 2.** Trace the loop. After each pass the cursor has moved one token to the right.

| Pass | `hasNext()` | token read by `nextInt()` | `total` after |
|---|---|---|---|
| 1 | true | 12 | 12 |
| 2 | true | 0 | 12 |
| 3 | true | 7 | 19 |
| 4 | true | 3 | 22 |
| 5 | true | 25 | 47 |
| 6 | true | 0 | 47 |
| 7 | true | 8 | 55 |
| 8 | true | 1 | 56 |
| 9 | false | (loop ends) | 56 |

**Step 3.** `in.close()` runs, then `56` is returned. The check: 12 + 0 + 7 + 3 + 25 + 0 + 8 + 1 = 56.

Compiled and run against exactly this file, the method printed `56`.

**Why the line breaks did not matter.** `nextInt()` skips whitespace, including line breaks, to find the next token. The loop made eight passes because there are eight tokens, not three lines.

## Worked example 2: the top scorer

Using the four-line `scores.csv` file above, write `topScorer(fileName)`, which returns the name of the person with the highest score. If two people tie, return the one who appears first.

**Plan.** Read line by line. Split each line at the comma. Parse the score. Keep the best score and its owner so far, as in any "find the maximum" algorithm.

```java
public static String topScorer(String fileName) throws IOException
{
    Scanner in = new Scanner(new File(fileName));
    String best = "";
    int bestScore = -1;
    while (in.hasNext())
    {
        String line = in.nextLine();
        String[] parts = line.split(",");
        int score = Integer.parseInt(parts[1]);
        if (score > bestScore)
        {
            bestScore = score;
            best = parts[0];
        }
    }
    in.close();
    return best;
}
```

**Trace.**

| Line read | `parts[0]` | `parts[1]` | `score > bestScore`? | `best` | `bestScore` |
|---|---|---|---|---|---|
| (start) | | | | "" | -1 |
| `Amira,72` | Amira | "72" | 72 > -1, true | Amira | 72 |
| `Bilal,88` | Bilal | "88" | 88 > 72, true | Bilal | 88 |
| `Chen,65` | Chen | "65" | 65 > 88, false | Bilal | 88 |
| `Dalia,88` | Dalia | "88" | 88 > 88, false | Bilal | 88 |

The method returns `"Bilal"`; running it gave exactly that. The strict `>` is what keeps the first of the tied people. Writing `>=` would return `"Dalia"`.

**Why start at -1?** Scores in this file cannot be negative, so any real score beats -1. Starting the maximum at a value that no data can be lower than is a safe habit.

## What can go wrong

| Situation | What Java does |
|---|---|
| File name wrong at run time | program terminates (`FileNotFoundException`, a kind of `IOException`) |
| Header lacks `throws IOException` | does not compile |
| `nextInt()` meets the token `two` | `InputMismatchException` |
| Any `next...` call after the data has run out | `NoSuchElementException` |
| `parts[1]` on a line with no comma | `ArrayIndexOutOfBoundsException` |
| Forgetting `close()` | usually still runs, but the file is not released as it should be |

The first, third and fourth rows were confirmed by running code: a missing file gave `java.io.FileNotFoundException`, the token `two` gave `java.util.InputMismatchException` and a fourth `nextInt()` on a file holding three numbers gave `java.util.NoSuchElementException`.

## Common misconceptions

- **"The Scanner reads the file all at once."** It reads forward a little at a time from a cursor. Once past an item it cannot return to it.
- **"`nextInt()` reads a whole line."** It reads one token. Use `nextLine()` for a whole line.
- **"`hasNext()` moves the cursor."** It only looks. Calling it twice in a row gives the same answer.
- **"The loop runs once per line."** A `next` or `nextInt` loop runs once per token.
- **"If the file is empty, the loop crashes."** An empty file makes `hasNext()` false at once, so the loop body never runs and `total` stays at its starting value.
- **"`throws IOException` is optional."** Without it (or another way to handle the possibility) the code does not compile.
- **"`split` changes the String."** Strings are immutable; `split` returns a new array and leaves the original line unchanged.
- **"Each `nextInt()` in the same loop body reads the same value."** Each call consumes a new token. Store the value in a variable if you need it twice.

## Where this leads

Reading data from a file is how the data sets of the unit arrive: values read in a loop are usually stored in an array (Topic 4.3) or an `ArrayList` (Topic 4.8) and then processed with the standard algorithms of Topics 4.5 and 4.10. Practise with the [Topic 4.6 practice questions](/advanced-course-resources/computer-science-a/4-6-using-text-files-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-a/4-6-using-text-files-revision-notes/), and tick off the [checklist](/advanced-course-resources/computer-science-a/4-6-using-text-files-checklist/). Next comes the [Topic 4.7 study guide on wrapper classes](/advanced-course-resources/computer-science-a/4-7-wrapper-classes-study-guide/), which explains `Integer.parseInt` and `Double.parseDouble`, the methods used above to turn text into numbers.
