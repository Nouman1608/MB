---
title: "OxfordAQA IGCSE Computer Science (9210): Subroutines (procedures and functions) -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 2 – Programming"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 2.10
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "subroutines-procedures-and-functions-9210"
description: "Original OxfordAQA IGCSE Computer Science 9210 practice questions with answers on procedures, functions, parameters, return values and their advantages."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-17
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Subroutines study guide](/resources/oxfordaqa-igcse-computer-science-9210-subroutines-procedures-and-functions/) | [Subroutines revision notes](/resources/oxfordaqa-igcse-computer-science-9210-subroutines-procedures-and-functions-revision-notes/)

These questions cover section 3.2.10 Subroutines (procedures and functions) of the OxfordAQA International GCSE
Computer Science (9210) specification. Subroutines are written here as `SUBROUTINE ... ENDSUBROUTINE`; any clear
format is acceptable in your answers.

---

## Section A

**1.** State what is meant by a **subroutine**. **[2]**

**2.** State **one** difference between a procedure and a function. **[1]**

**3.** A function is defined as follows:

```
SUBROUTINE Volume(l, w, h)
  RETURN l * w * h
ENDSUBROUTINE
```

**(a)** State how many parameters the function has. **[1]**
**(b)** State the value of `Volume(2, 5, 3)`. **[1]**

**4.** Describe how data is passed **into** a subroutine. **[2]**

**5.** Describe how data is passed **out of** a function to the calling routine. **[2]**

## Section B

**6.** Study this pseudocode:

```
SUBROUTINE Calc(x, y)
  IF x > y THEN
    RETURN x - y
  ENDIF
  RETURN y * 2
ENDSUBROUTINE

p ← Calc(10, 4)
q ← Calc(3, 8)
r ← Calc(p, q)
OUTPUT r
```

**(a)** State the values of `p` and `q`. **[2]**
**(b)** State the value output. **[1]**
**(c)** Explain why the statement `RETURN y * 2` is not reached in the call `Calc(10, 4)`. **[1]**

**7.** Write a function `IsLeap(year)` that returns True if `year` is divisible by 4 and False otherwise. (Ignore
the extra rules for century years.) **[3]**

**8.** Write a procedure `Box(width, height)` that outputs a rectangle of `#` characters with the given width and
height. For example, `Box(4, 2)` outputs two lines of `####`. **[4]**

**9.** A programmer writes this function:

```
SUBROUTINE AddVat(price)
  OUTPUT price * 1.2
ENDSUBROUTINE

total ← AddVat(50) + AddVat(30)
```

**(a)** Explain why the final statement does not work as intended. **[2]**
**(b)** Write a corrected version of the function. **[1]**

**10.** A shop program calculates the cost of an order in several places: when showing the basket, when printing
a receipt and when sending a confirmation email. Explain **two** advantages of writing the cost calculation as a
function. **[4]**

**11.** Write a function `CountChar(text, ch)` that returns how many times the single character `ch` appears in
the string `text`. Then write a statement that uses it to output how many times `"s"` appears in
`"mississippi"`. **[5]**

**12.** A student calls the procedure `ShowLine(symbol, length)` with `ShowLine(6, "=")`. Explain what has gone
wrong. **[2]**

---

## Answers

**1.** A named block of code, written out of line from the main program [1], that runs when it is called by
writing its name in a program statement [1].

**2.** A function returns a value to the calling routine; a procedure does not [1].

**3.** **(a)** 3 [1] **(b)** 30 [1].

**4.** Values are given in the call, in brackets after the subroutine's name [1]; each value is passed into the
matching parameter, in order, and used as a variable inside the subroutine [1].

**5.** The function calculates a value and uses a `RETURN` statement [1] to send it back to the statement that
called it, where it can be stored in a variable or used in an expression [1].

**6.** **(a)** `p` = 6 [1]; `q` = 16 [1].
**(b)** 32 [1] (`Calc(6, 16)`: 6 is not greater than 16, so 16 × 2).
**(c)** `RETURN x - y` runs first because 10 > 4, and a `RETURN` ends the subroutine immediately [1].

**7.** One possible answer:

```
SUBROUTINE IsLeap(year)
  IF year MOD 4 = 0 THEN
    RETURN True
  ELSE
    RETURN False
  ENDIF
ENDSUBROUTINE
```

Definition with the parameter `year` [1]; test using `MOD 4 = 0` [1]; True and False returned (not output) [1].
(`RETURN year MOD 4 = 0` is also correct.)

**8.** One possible answer:

```
SUBROUTINE Box(width, height)
  FOR row ← 1 TO height
    line ← ""
    FOR col ← 1 TO width
      line ← line + "#"
    ENDFOR
    OUTPUT line
  ENDFOR
ENDSUBROUTINE
```

Procedure definition with two parameters [1]; outer loop for `height` lines [1]; inner loop building `width`
characters [1]; each line output (no return value) [1].

**9.** **(a)** The subroutine outputs the price instead of returning it [1], so no value comes back to be added and
assigned to `total` [1].
**(b)** Replace `OUTPUT price * 1.2` with `RETURN price * 1.2` [1].

**10.** Any two, each with an explanation:
- The calculation is written once and called in all three places [1], so the program is shorter and the three
  costs cannot become inconsistent [1].
- If the pricing rule changes, only the function needs editing [1], and every part of the program then uses the
  new rule [1].

Also accept, with the same two-mark split: the function can be tested on its own with known orders before the
rest of the program is built; another programmer can work on the email part while this function is written.

**11.** One possible answer:

```
SUBROUTINE CountChar(text, ch)
  count ← 0
  FOR i ← 0 TO LEN(text) - 1
    IF SUBSTRING(i, i, text) = ch THEN
      count ← count + 1
    ENDIF
  ENDFOR
  RETURN count
ENDSUBROUTINE

OUTPUT CountChar("mississippi", "s")
```

Definition with two parameters [1]; loop over every character [1]; comparison and count increased [1]; count
returned after the loop [1]; call with the two values in the right order and the result output (4) [1].

**12.** The values are in the wrong order [1]: 6 is passed into `symbol` and `"="` into `length`, so the loop has a
string instead of a number for its count and the subroutine fails [1].

---

## Where marks are usually lost

- Returning inside the loop in Question 11, so the function ends after the first character.
- Using `OUTPUT` in a function the question says must return a value.
- Forgetting to reset the line inside the outer loop in Question 8.
- Listing advantages without saying what difference they make.
- Losing track of which value goes into which parameter when tracing nested calls.
