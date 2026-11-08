---
resourceId: "mb-ap-csp-3.4-study-guide"
title: "Strings: Study Guide (Computer Science Principles 3.4)"
description: "What strings are, how concatenation and substrings work, and how to trace string code, including building a string in a loop. Two worked examples, an original substring diagram and misconceptions."
course: "computer-science-principles"
unit: 3
topics: ["3.4"]
resourceType: "study-guide"
prerequisites:
  - "Variables and assignment (Topic 3.1)"
prerequisiteResources: ["mb-ap-csp-3.1-study-guide"]
learningObjectives:
  - "Define a string as an ordered sequence of characters"
  - "Evaluate concatenation and substring expressions"
  - "Trace code that builds or cuts strings, including inside a loop"
  - "Decide when text, not a number, is the right type"
skills: ["4"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.4-revision-notes", "mb-ap-csp-3.4-practice", "mb-ap-csp-3.4-checklist"]
next: "mb-ap-csp-3.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "A string is an ordered sequence of characters, including spaces and punctuation."
  - "Concatenation joins strings end to end to make a new string; order matters."
  - "A substring is part of an existing string; the original is unchanged."
  - "\"7\" is a string and 7 is a number; joining number-strings gives text."
  - "Exam questions define their own string procedures: read where counting starts and whether the last argument is a length."
faqs:
  - question: "What is concatenation?"
    answer: "Joining two or more strings end to end to make a new string, for example joining \"sun\" and \"shine\" to make \"sunshine\"."
  - question: "What is a substring?"
    answer: "A part of an existing string, such as \"puter\" from \"computer\". The original string is not changed."
  - question: "Does a space count as a character?"
    answer: "Yes. A space occupies a position and adds to the length of the string."
  - question: "Why is \"7\" different from 7?"
    answer: "\"7\" is a string, a character. 7 is a number you can do arithmetic with. Joining \"7\" and \"7\" gives \"77\"."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

Text is data too. Names, messages, passwords, search terms and web addresses are all stored as **strings**. Programs constantly build new strings from old ones: joining a first name to a surname, cutting an area code off a phone number, producing a username. This topic covers what a string is, how **concatenation** and **substrings** work, and how to work out the result of code that manipulates strings.

**Notation.** The exam uses its own pseudocode, not a real programming language. The code in this pack is Marlbridge's rendering of that reference notation, not a copy of the official sheet: `←` is assignment, `=` tests equality, lists start at index 1, `DISPLAY` shows a value, and braces mark blocks. Use the Exam Reference Sheet from your teacher for the official wording.

**A note on string procedures.** The reference sheet focuses on numbers, Booleans and lists, and the exam describes any string procedure it needs inside the question itself. In this pack we use two Marlbridge names, `concat(a, b)` and `substring(text, start, length)`, so that the examples are unambiguous. **Always read the definition a question gives you** (in particular where counting starts and whether the last argument is a length or an end position) and apply exactly that.

## What a string is

A **string** is an ordered sequence of **characters**. Characters include letters, digits, spaces and punctuation. Strings are written between double quotes: `"hello"`, `"Room 12"`, `"  "` (two spaces) and `""` (the empty string, with no characters). Because the characters are *ordered*, position matters: `"tea"` and `"eat"` contain the same letters but are different strings.

A digit inside quotes is a character, not a number. `"7"` is a string, `7` is a number. You can add numbers but you cannot do arithmetic on `"7"`; joining `"7"` and `"7"` gives `"77"`, not 14.

In Marlbridge's convention the characters of a string are numbered from **1**, matching the way lists are numbered in this course.

<figure>
<svg viewBox="0 0 568 120" role="img" aria-labelledby="f34-t f34-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="14">
<title id="f34-t">The string computer split into characters</title>
<desc id="f34-d">Eight boxes numbered 1 to 8 holding the letters c, o, m, p, u, t, e, r. The boxes numbered 4 to 8 are highlighted, with box 4 labelled start and box 8 labelled end, to show the substring that starts at position 4 and has length 5.</desc>
<rect x="0" y="0" width="568" height="120" fill="#ffffff"/>
<defs><marker id="f34-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<text x="10" y="28" text-anchor="start" font-size="14" font-weight="bold" fill="#1d2b44">word</text><text x="108.0" y="50" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">1</text><rect x="80" y="58" width="56" height="38" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="108.0" y="82" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">c</text><text x="164.0" y="50" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">2</text><rect x="136" y="58" width="56" height="38" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="164.0" y="82" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">o</text><text x="220.0" y="50" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">3</text><rect x="192" y="58" width="56" height="38" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="220.0" y="82" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">m</text><text x="276.0" y="50" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">4</text><rect x="248" y="58" width="56" height="38" fill="#fff4d6" stroke="#1d2b44" stroke-width="4"/><text x="276.0" y="82" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">p</text><text x="276.0" y="112" text-anchor="middle" font-size="11" font-weight="normal" fill="#1d2b44">start</text><text x="332.0" y="50" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">5</text><rect x="304" y="58" width="56" height="38" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="332.0" y="82" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">u</text><text x="388.0" y="50" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">6</text><rect x="360" y="58" width="56" height="38" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="388.0" y="82" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">t</text><text x="444.0" y="50" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">7</text><rect x="416" y="58" width="56" height="38" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="444.0" y="82" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">e</text><text x="500.0" y="50" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">8</text><rect x="472" y="58" width="56" height="38" fill="#fff4d6" stroke="#1d2b44" stroke-width="4"/><text x="500.0" y="82" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">r</text><text x="500.0" y="112" text-anchor="middle" font-size="11" font-weight="normal" fill="#1d2b44">end</text>
</svg>
<figcaption>Figure 1. <code>"computer"</code> as eight characters. The highlighted part, positions 4 to 8, is <code>substring(word, 4, 5)</code>, which is <code>"puter"</code>.</figcaption>
</figure>

## Concatenation

**Concatenation** joins two or more strings end to end to make a **new string**. In this pack `concat(a, b)` joins `a` then `b`.

```text
DISPLAY(concat("sun", "shine"))
DISPLAY(concat("shine", "sun"))
DISPLAY(concat("Hello, ", "Aroha"))
```

Output: `sunshine shinesun Hello, Aroha`

Three things to notice. Order matters: `concat("sun","shine")` and `concat("shine","sun")` differ. Spaces are characters: `"Hello, "` ends with a space, which is why the greeting has a space after the comma. And `DISPLAY` adds its own space after each value, which is why the three results are separated on the screen.

To join more than two strings, nest the calls from the inside out: `concat(concat(a, b), c)`.

## Substrings

A **substring** is part of an existing string. Using `substring(text, start, length)`, the result is the `length` characters beginning at position `start`. The original string is **not changed**; a new string is made.

```text
word ← "computer"
DISPLAY(substring(word, 1, 3))
DISPLAY(substring(word, 4, 5))
DISPLAY(word)
```

Output: `com puter computer`

The first call takes three characters from position 1: `com`. The second takes five characters from position 4: `puter`. The last line shows that `word` itself is untouched.

## Worked example 1: cutting and rejoining

Find what this segment displays.

```text
word ← "computer"
a ← substring(word, 1, 3)
b ← substring(word, 4, 5)
DISPLAY(concat(b, a))
```

Output: `putercom`

| Line | Variable | Value | Reasoning |
|---|---|---|---|
| 1 | word | "computer" | Eight characters. |
| 2 | a | "com" | Three characters from position 1. |
| 3 | b | "puter" | Five characters from position 4: p, u, t, e, r. |
| 4 | (displayed) | "putercom" | `concat(b, a)` puts `b` first, then `a`. |

**Check.** The lengths add up: `a` has 3 characters and `b` has 5, so the joined string has 8, the same as the original. Swapping two parts of a string like this is a typical exam pattern.

## Worked example 2: building a username

A school builds a username from the first letter of a pupil's first name, the whole surname, and the last two digits of the birth year, held as a string. For Mina Okafor born in `"2011"` what is the username?

```text
first ← "Mina"
last ← "Okafor"
year ← "2011"
initial ← substring(first, 1, 1)
yearEnd ← substring(year, 3, 2)
username ← concat(concat(initial, last), yearEnd)
DISPLAY(username)
```

Output: `MOkafor11`

| Variable | Value | How |
|---|---|---|
| initial | "M" | 1 character from position 1 of "Mina" |
| yearEnd | "11" | 2 characters from position 3 of "2011" |
| concat(initial, last) | "MOkafor" | initial first, then the surname |
| username | "MOkafor11" | that joined to yearEnd |

**Check.** Four values were used, so three joins would be needed in general; nesting two `concat` calls joined three strings. The username has 1 + 6 + 2 = 9 characters ✓.

**Repeating a join.** Strings are often built a piece at a time inside a loop. The variable starts as the empty string and grows:

```text
result ← ""
REPEAT 3 TIMES
{
  result ← concat(result, "ab")
}
DISPLAY(result)
```

Output: `ababab`

Trace: `""` → `"ab"` → `"abab"` → `"ababab"`. This is the string version of a running total (compare `total ← total + price` in Topic 3.1).

## Choosing between a string and something else

Use a string when the data is text or when its characters matter individually, as with a postcode or a product code. Use a number when you need arithmetic. Use a list when you have many separate values. Choosing the wrong type causes subtle bugs, such as a leading zero disappearing from a phone number stored as a number.

## A reliable method for string questions

String slips are almost always counting slips, so make the counting visible.

1. **Write the string with its positions.** For `"computer"` write c-o-m-p-u-t-e-r and number the characters 1 to 8 underneath.
2. **Mark each requested part.** For `substring(word, 4, 5)` put brackets around the five characters starting at position 4.
3. **Evaluate inner calls first.** In `concat(concat(a, b), c)` work out `concat(a, b)` and write it down before adding `c`.
4. **Check the length.** The length of a concatenation is the sum of the lengths of its parts. If your answer has the wrong number of characters, you have a counting error.

Strings appear in real programs wherever text is processed: building a greeting, formatting a name for a list, cutting a file extension off a file name, or making a short code from several fields. In every case the program creates *new* strings from old ones, which is why strings are so useful for generalising a task: the same code works for any name, not only the one you tested with.

## Common misconceptions

- **"`substring` changes the original string."** It builds a new string; the original keeps its value.
- **"`concat(a, b)` and `concat(b, a)` give the same result."** The order of the two strings matters.
- **"The third argument of `substring` is the end position."** In Marlbridge's definition it is the *length*. `substring("computer", 4, 5)` is "puter", not the characters from 4 to 5. Check how each question defines it.
- **"Spaces do not count."** A space is a character. It occupies a position and counts toward the length.
- **"`"7"` and `7` are interchangeable."** One is text, the other a number. Joining two number-strings gives text such as `"77"`.
- **"Strings start at position 0."** Not in this course's notation. Use the starting position each question states.


## Where this leads

String skills are used in the Create task whenever a program builds messages or reads text, and in Topic 3.13 when a procedure returns a string. The next topic, Boolean expressions, gives you the true/false comparisons that conditionals use to make decisions, including comparing strings.

Next steps: try the [practice questions](/advanced-course-resources/computer-science-principles/3-4-strings-practice/), skim the [revision notes](/advanced-course-resources/computer-science-principles/3-4-strings-revision-notes/) the night before, and tick off the [topic checklist](/advanced-course-resources/computer-science-principles/3-4-strings-checklist/). The next topic is [Topic 3.5, Boolean Expressions](/advanced-course-resources/computer-science-principles/3-5-boolean-expressions-study-guide/).
