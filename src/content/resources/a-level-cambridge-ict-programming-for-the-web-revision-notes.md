---
title: "Cambridge A Level Information Technology (ICT): Programming for the web (9626) -- Revision Notes"
seoTitle: "Cambridge A Level ICT 9626 Programming for the Web Notes"
resourceType: "revision-notes"
subject: "ict"
level: ["a-levels"]
topic: "Programming for the web"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 21
syllabusTopics:
  - qualification: "a-level"
    topic: "programming-for-the-web"
description: "Revision notes for Cambridge A Level IT 9626 Programming for the web: JavaScript syntax tables, events, popups, loops, timers and a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

These revision notes cover **topic 21, Programming for the web**, of Cambridge International AS & A Level Information Technology (9626), following the syllabus for examination in 2025, 2026 and 2027 (version 3), section 21.1. Topic 21 is **A Level only**. Paper 3 (Advanced Theory) questions are based on sections 12–21 and Paper 4 (Advanced Practical) tasks on sections 17–21, so expect JavaScript in both. For full explanations and worked examples, use the [Programming for the web study guide](/resources/a-level-cambridge-ict-programming-for-the-web/).

Course hub: [Cambridge A Level ICT](/boards/cambridge/a-level/ict/). Checklist: [9626 checklist](/checklists/cambridge/a-level/ict/). Test yourself with the [Programming for the web practice questions](/resources/a-level-cambridge-ict-programming-for-the-web-practice/), and find your weak spots with a [free 10-minute diagnostic](/diagnostics/). Pseudocode versions of loops and selection are in the [Algorithms and flowcharts revision notes](/resources/a-level-cambridge-ict-algorithms-and-flowcharts-revision-notes/).

## Topic 21 at a glance

| Area of 21.1 | Key items |
|---|---|
| Adding interactivity | `<script>` in HTML; external `.js` file via `src` |
| Changing content | `innerHTML`, calculations, string methods, image `src`/`width`/`alt` |
| Changing styles | `document.getElementById(id).style.property = new style` |
| Show/hide | `style.visibility`, `style.display` |
| Displaying data | `innerHTML`, `document.write()`, `window.alert()`, `console.log()` |
| Events | `onload`, `onchange`, `onclick`, `onmouseover`, `onmouseout`, `onkeydown` |
| Popups | `alert()`, `confirm()`, `prompt()` |
| Syntax | values, operators, comparisons, expressions, keywords, comments |
| Control | `if`, `else`, `else if`, `switch`, ternary, `for`, `for/in`, `while`, `do/while`, `break` |
| Functions and timing | event, invoked, self-invoked; `setTimeout()`, `setInterval()` |
| Data | number, string, Boolean, array, object; type conversions |

## Definitions

- **Statement**: one instruction, ended with `;`.
- **Literal**: a fixed value written in the code, such as `7`, `"Lahore"`, `false`.
- **Variable**: a named store whose value can change. Declared with `let`, `const` or `var`.
- **Expression**: values and operators that work out to one value, such as `price * qty`.
- **Keyword**: a reserved word with a set meaning (`if`, `for`, `function`, `return`, `break`).
- **Comment**: text the browser ignores: `//` to the end of the line, or `/* ... */` over several lines.
- **Array**: an ordered list in square brackets; the first index is 0.
- **Object**: named properties in curly brackets, such as `{town: "Multan", pop: 2}`.
- **Function**: a named block of code that runs only when executed.
- **Event**: something that happens to an HTML element, which can trigger code.

## Adding JavaScript to a page

| Method | How | Good for |
|---|---|---|
| Inline script | Code between `<script>` and `</script>` in the `<head>` or `<body>` | Short code used by one page |
| External script | `<script src="file.js"></script>`; the `.js` file has no `<script>` tags | Code shared by many pages; one edit updates all; file can be cached |

## Method in steps -- change content, images and styles

1. Find the element: `document.getElementById("id")`. The id is a string in quotes and must match the HTML exactly.
2. Text or numbers: set `.innerHTML` to the new value or expression.
3. Images: set `.src` to the new file name; `.width`, `.height` and `.alt` change in the same way.
4. Styles: set `.style.property`; hyphenated CSS names become camelCase (`font-size` → `fontSize`, `background-color` → `backgroundColor`).
5. Style values are strings with units where needed: `"18px"`, `"blue"`, `"#ff0000"`.

## Output methods compared

| Method | Output appears | Watch out |
|---|---|---|
| `innerHTML` | Inside a chosen element | Element needs an `id` |
| `document.write()` | In the HTML output | After loading, it clears the page |
| `window.alert()` | Popup the user must close | Interrupts the user |
| `console.log()` | Browser console only | Users do not see it |

## Show and hide

| Code | Hidden? | Space kept? |
|---|---|---|
| `style.visibility = "hidden"` | Yes | Yes |
| `style.display = "none"` | Yes | No |
| `style.visibility = "visible"` / `style.display = "block"` | No (shown) | -- |

## Events

| Event | Fires when |
|---|---|
| `onload` | page or image finishes loading |
| `onchange` | value changes; a text box fires when it loses focus |
| `onclick` | element clicked |
| `onmouseover` / `onmouseout` | pointer enters / leaves the element |
| `onkeydown` | a key is pressed |

## Popups -- return values

| Popup | Buttons | Returns |
|---|---|---|
| `alert(msg)` | OK | nothing useful |
| `confirm(msg)` | OK, Cancel | `true` / `false` |
| `prompt(msg, default)` | OK, Cancel | the typed **string**, `""` if empty, `null` on Cancel |

## Operators

| Group | Operators |
|---|---|
| Assignment | `=` `+=` `-=` `*=` `/=` |
| Arithmetic | `+` `-` `*` `/` `%` `**` `++` `--` |
| String | `+` `+=` (join) |
| Comparison | `==` `===` `!=` `!==` `>` `<` `>=` `<=` |
| Logical | `&&` AND, `||` OR, `!` NOT |
| Ternary | `condition ? a : b` |
| Type | `typeof x` |

Order of working: brackets, then `**`, then `* / %`, then `+ -`.

**Comparison results with `x = 6`:**

| Expression | Result | Why |
|---|---|---|
| `x == "6"` | `true` | same value |
| `x === "6"` | `false` | different type |
| `x != "6"` | `false` | same value |
| `x !== "6"` | `true` | different type |
| `x >= 6 && x < 10` | `true` | both parts true |
| `x > 8 \|\| x === 6` | `true` | one part true |
| `!(x > 2)` | `false` | NOT reverses `true` |

## Data types and conversions

| Want | Use | Example → result |
|---|---|---|
| String to number | `Number()` | `Number("7.5")` → `7.5` |
| Whole number from text | `parseInt()` | `parseInt("45.8")` → `45` |
| Decimal from text | `parseFloat()` | `parseFloat("2.5m")` → `2.5` |
| Number to string | `String()` / `.toString()` | `String(9)` → `"9"` |
| Fixed decimals (gives string) | `.toFixed(n)` | `(2).toFixed(2)` → `"2.00"` |
| Check type | `typeof` | `typeof "true"` → `"string"` |

`+` with any string joins: `"4" + "4"` → `"44"`. Other arithmetic converts: `"9" / "3"` → `3`. Text that is not a number becomes `NaN`; test with `isNaN()`.

## Method in steps -- read, calculate, display

1. Give each HTML element an `id`.
2. Read input: `let v = document.getElementById("box").value;`
3. Convert: `v = Number(v);`
4. Validate: `if (isNaN(v)) { ... }`
5. Calculate in an expression.
6. Output: `document.getElementById("out").innerHTML = result;`
7. Attach the function to an event, such as `onclick` or `onchange`.

## Method in steps -- timers

1. Write the function to repeat.
2. Start it: `let id = setInterval(tick, 1000);` (milliseconds).
3. Inside `tick`, change the counter and update the page.
4. Stop with `clearInterval(id)` when the end condition is met.
5. For a single delayed action, use `setTimeout(fn, ms)` instead.

## Loops

| Loop | Tests | Runs at least once? | Best for |
|---|---|---|---|
| `for` | before each pass | No | known number of passes, array indexes |
| `for/in` | -- | No | each property of an object |
| `while` | before each pass | No | unknown number of passes |
| `do/while` | after each pass | Yes | input that must be asked for at least once |

`break` leaves the loop (or a `switch`) at once.

## Functions -- three ways to run

| Way | Example | Runs when |
|---|---|---|
| On an event | `<button onclick="check()">` | The user clicks |
| Invoked from code | `let v = area(4, 5);` | That line is reached |
| Self-invoked | `(function () { ... })();` | As soon as it is read |

## Small worked reminders

- `let s = "Lahore";` gives `s.charAt(2)` → `"h"` and `s.indexOf("o")` → `3`. Positions start at 0.
- `let m = [4, 8, 6];` gives `m.length` → `3` and `m[1]` → `8`.
- `for (let k in {a: 1, b: 2})` visits the property names `a` then `b`.
- `setTimeout(show, 2500)` runs `show` once, 2.5 seconds later.
- Fall-through: with `g = 2`, `switch (g) { case 2: out += "B"; case 3: out += "C"; break; default: out += "X"; }` leaves `out` as `"BC"`, because case 2 has no `break`.

## Must-know distinctions

- `==` compares value only; `===` compares value **and** type.
- `=` assigns; `===` compares.
- `visibility = "hidden"` keeps the space; `display = "none"` removes it.
- `setTimeout` runs once; `setInterval` repeats.
- `while` tests first; `do/while` tests last.
- `if/else if` tests different conditions; `switch` matches one value against cases.
- Inline `<script>` is in the HTML file; an external script is a separate `.js` file linked with `src`.
- A function run by an event waits for the user; a self-invoked function runs as soon as it is read.

## Quick self-test

1. What does `"4" + "4"` give?
2. What does `"9" / "3"` give?
3. What is `10 % 4`?
4. Is `3 === "3"` true or false?
5. What does `typeof "true"` give?
6. What does `parseInt("45.8")` give?
7. After `let k = 0; for (let i = 0; i < 4; i++) { k += i; }`, what is `k`?
8. With `let t = 28;`, what does `t > 25 ? "Hot" : "Mild"` give?
9. After `let y = 0; do { y += 5; } while (y < 12);`, what is `y`?
10. With `let w = "Marlbridge";`, give `w.length` and `w.substring(0, 4)`.
11. What does `prompt()` return when Cancel is clicked?
12. Write a statement that removes the element with id `menu` from the layout.

### Answers

1. `"44"` (a string).
2. `3` (a number).
3. `2`.
4. False: same value, different type.
5. `"string"`.
6. `45`.
7. `6` (0 + 1 + 2 + 3).
8. `"Hot"`.
9. `15` (5, 10, 15; the test fails at 15).
10. `10` and `"Marl"`.
11. `null`.
12. `document.getElementById("menu").style.display = "none";`

## Where marks are usually lost

- Writing `getElementByID`; JavaScript is case-sensitive, so it fails.
- Forgetting quotes round style values or leaving out units (`"20px"`).
- Adding text-box values without converting, so `"2" + "3"` gives `"23"`.
- Saying `visibility` and `display` "do the same thing" without the layout difference.
- Describing `console.log()` as showing output to the user.
- Mixing up `setTimeout` (once) and `setInterval` (repeating), or giving times in seconds instead of milliseconds.
- Missing `break` in `switch`, so later cases also run.
- Tracing a `do/while` as if it tests first.
- Testing `prompt()` input for `""` but not `null`.
- Naming an event without saying which element it is attached to or what it triggers.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 3, Cambridge University Press & Assessment. Topic 21: Programming for the web (21.1 Programming for the web).
