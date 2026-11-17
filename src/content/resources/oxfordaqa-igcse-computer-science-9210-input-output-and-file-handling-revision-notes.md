---
title: "OxfordAQA IGCSE Computer Science (9210): Input/output and file handling -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for OxfordAQA IGCSE Computer Science 9210 section 3.2.7: keyboard input, display output, reading and writing text files, traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-17
reviewNote: "2026-11-17: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-17: File-handling command names in the pseudocode are illustrative, not taken from OxfordAQA's pseudocode guide; please check they suit the board's current teaching guidance."
publishedDate: 2026-11-17
featured: false
---

Condensed notes for section **3.2.7 Input/output and file handling** of OxfordAQA International GCSE Computer
Science (9210). The worked examples are in the [input/output and file handling study
guide](/resources/oxfordaqa-igcse-computer-science-9210-input-output-and-file-handling/).

## What the specification asks

- Obtain **user input from a keyboard**.
- **Output** data and information from a program to the **computer display**.
- **Read from and write to a text file**.

## Keyboard input

- `name ← USERINPUT` stores what the user types.
- **Prompt** first: `OUTPUT "Enter the quantity"`.
- Input is a **string**: convert before arithmetic, `qty ← STRING_TO_INT(USERINPUT)`.
- Python: `qty = int(input("Enter the quantity: "))`.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-input-output-and-file-handling--01-keyboard-input.webp" width="900" height="586" alt="The display shows the prompt &quot;Enter your age&quot; and the user types 16. USERINPUT arrives as the string &quot;16&quot;, which STRING_TO_INT converts to the integer 16, ready for arithmetic. The pseudocode is OUTPUT &quot;Enter your age&quot; followed by age ← STRING_TO_INT(USERINPUT); in Python, age = int(input(&quot;Enter your age: &quot;))." loading="lazy">
  <figcaption>Prompt the user, then convert the string that arrives before doing arithmetic.</figcaption>
</figure>

## Display output

- `OUTPUT` sends text or values to the screen.
- Label values so the output is **information**, not just data: `OUTPUT "Average: " + REAL_TO_STRING(avg)`.
- Joining with `+` needs strings on both sides; convert numbers first.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-input-output-and-file-handling--02-output-data-information.webp" width="900" height="544" alt="Two displays: 14.5 on its own is just data, while &quot;Total cost: 14.5&quot; is information because the user knows what the number means. The statement OUTPUT &quot;Total cost: &quot; + REAL_TO_STRING(total) joins fixed text to the number after converting it to a string." loading="lazy">
  <figcaption>Label every value you output so it becomes information.</figcaption>
</figure>

## Why text files

| Variables | Text files |
|---|---|
| Lost when the program ends | Kept on secondary storage after the program ends |
| Only available to this run of the program | Can be reused next time and shared with other programs |
| Hold any data type | Hold lines of characters (numbers must be converted) |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-input-output-and-file-handling--03-why-text-files.webp" width="900" height="624" alt="Variables in a running program lose their values when it ends, but data saved to a text file on secondary storage is still there next time and can be shared with other programs. Typical uses are high scores, event logs, settings and lists of words or questions. Numbers read from a file are strings until converted." loading="lazy">
  <figcaption>A text file makes data persist after the program ends.</figcaption>
</figure>

## Reading a text file: four steps

1. **Open** for reading.
2. **Loop until end of file** (`WHILE NOT END_OF_FILE(file)`), so an empty file gives zero reads.
3. **Read a line** and **process** it (convert if numeric).
4. **Close** the file.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-input-output-and-file-handling--04-reading-a-file.webp" width="900" height="700" alt="A flowchart: open the file for reading, test for the end of the file, and while it is not reached read a line, process it and test again; at the end, close the file. Beside it, pseudocode that totals and counts the numbers in scores.txt and outputs total / count, with a note to check count > 0 so an empty file does not divide by zero." loading="lazy">
  <figcaption>Open, loop until end of file reading one line at a time, then close.</figcaption>
</figure>

## Writing a text file

| Mode | Existing contents | Typical use |
|---|---|---|
| Write | **Replaced** | Save a complete set of data, create a new file |
| Append | **Kept**; new lines added at the end | Log entries, adding a new score |

Steps: **open** (choose mode) → **write** each line (convert numbers to strings) → **close**.
Python modes: `"r"` read, `"w"` write, `"a"` append. Add `"\n"` at the end of each line when using `write`.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-input-output-and-file-handling--05-write-versus-append.webp" width="900" height="766" alt="A log file holds two existing lines. Opened in write mode, it is replaced and holds only the new line. Opened in append mode, the new line is added after the two existing lines. The pseudocode opens log.txt for appending, writes &quot;Login by &quot; + username and closes the file." loading="lazy">
  <figcaption>Write mode replaces the file; append mode adds to the end.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-input-output-and-file-handling--07-open-once-outside-loop.webp" width="900" height="760" alt="Pseudocode opens seven.txt in write mode, writes i x 7 = i * 7 for i from 1 to 12, then closes the file, giving 12 lines from 1 x 7 = 7 to 12 x 7 = 84. If the file were opened in write mode inside the loop, each pass would wipe it and only 12 x 7 = 84 would remain." loading="lazy">
  <figcaption>Open once before the loop and close once after it.</figcaption>
</figure>

## Why close a file

- Makes sure all data is **saved** to storage.
- **Releases** the file so other programs (or later parts of the same program) can open it.

## Template code

```
file ← OPEN_FILE_READ("words.txt")       -- count lines that start with "s"
count ← 0
WHILE NOT END_OF_FILE(file)
  word ← READ_LINE(file)
  IF SUBSTRING(0, 0, word) = "s" THEN
    count ← count + 1
  ENDIF
ENDWHILE
CLOSE_FILE(file)
OUTPUT "Words starting with s: " + INT_TO_STRING(count)
```

(File command names are illustrative; any suitable names are accepted if the logic is clear. `SUBSTRING(0, 0,
word)` is the first character, counting from 0.)

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-input-output-and-file-handling--06-high-score-sequence.webp" width="900" height="758" alt="The high-score pseudocode in four stages: input the score and convert it to an integer; open highscores.txt in append mode, write the score as a string and close; open the file for reading and loop to the end, converting each line and keeping the best; close the file and output &quot;Best score: &quot; with the result." loading="lazy">
  <figcaption>Convert, append, close, read every line, close, output: each step earns a mark.</figcaption>
</figure>

## Python equivalents

| Task | Python |
|---|---|
| Input a whole number | `n = int(input("Enter n: "))` |
| Output a labelled value | `print("Total:", total)` |
| Read every line | `with open("data.txt", "r") as f:` then `for line in f:` |
| Add a line to a file | `with open("log.txt", "a") as f:` then `f.write(entry + "\n")` |

## Key terms

| Term | Meaning |
|---|---|
| Input | Data entered into a program, here from the keyboard |
| Output | Data or information sent from a program, here to the display |
| Prompt | A message telling the user what to enter |
| Text file | A file of lines of characters stored on secondary storage |
| Open | Connect a program to a file for reading, writing or appending |
| End of file | The point at which there are no more lines to read |
| Append | Add data to the end of an existing file without removing what is there |
| Close | Finish using a file so data is saved and the file is released |

## Exam traps

- Missing **conversion** of input or file lines before arithmetic.
- **Write mode** where **append** was needed, wiping earlier data.
- File **opened or closed inside** the loop.
- **Fixed-count loops** for files of unknown length.
- Forgetting to **close** the file.
- **Unlabelled output** when the question asks for a meaningful message.
- Concatenating a number with a string without converting it.

## Self-test

1. State why a prompt should be output before `USERINPUT`.
2. State the data type of a value entered at the keyboard before conversion.
3. Give one reason a program saves data to a text file.
4. List the four steps for reading every line of a text file.
5. Explain the difference between write mode and append mode.
6. State two reasons for closing a file.
7. Why is a `WHILE` loop with the condition at the start suitable for reading a file?
8. A program reads `"7"` from a file and adds it to 3 without converting. What might happen?
9. Which mode should be used for a log of every login?
10. Give the Python mode letter for appending.
11. A program opens a file in write mode, writes one line and closes it, all inside a loop that runs 5 times. How many lines does the file contain at
the end?
12. Rewrite `OUTPUT "Score " + score` so it works when `score` is an integer.

**Answers:**
1. So the user knows what data to enter (and in what form).
2. String.
3. Any one: the data is kept after the program ends; it can be loaded next time; it can be shared with other
programs.
4. Open the file for reading; loop until the end of the file; read and process each line; close the file.
5. Write mode replaces the file's existing contents; append mode keeps them and adds new lines at the end.
6. To make sure the data is saved to storage, and to release the file for other programs.
7. If the file is empty, the condition is False at the start, so no line is read.
8. An error, or `"73"` if the language joins the values as strings, instead of 10.
9. Append.
10. `"a"`.
11. One (each opening wipes the file, so only the last line remains).
12. `OUTPUT "Score " + INT_TO_STRING(score)`.

## Related resources

- [Input/output and file handling study guide](/resources/oxfordaqa-igcse-computer-science-9210-input-output-and-file-handling/)
- [Input/output and file handling practice questions](/resources/oxfordaqa-igcse-computer-science-9210-input-output-and-file-handling-practice/)
- [Data structures, subroutines and translators revision notes](/resources/oxfordaqa-igcse-computer-science-programming-structures-and-translators-revision-notes/)
