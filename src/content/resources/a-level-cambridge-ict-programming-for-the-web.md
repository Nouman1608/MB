---
title: "Cambridge A Level Information Technology (ICT): Programming for the web (9626)"
seoTitle: "Cambridge A Level ICT 9626 Programming for the Web Guide"
resourceType: "study-guides"
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
description: "Study guide for Cambridge A Level IT 9626 Programming for the web: JavaScript in HTML, events, output, data types, operators, loops and timers."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This study guide covers **topic 21, Programming for the web**, of Cambridge International AS & A Level Information Technology (9626). It follows the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 3), section 21.1. Topic 21 is **A Level only**. The syllabus bases **Paper 3 (Advanced Theory)** questions on sections 12–21 and **Paper 4 (Advanced Practical)** tasks on sections 17–21, so you can meet JavaScript in both papers. The syllabus recommends a working knowledge of HTML and CSS first, for example from website authoring in Cambridge IGCSE ICT.

Course hub: [Cambridge A Level ICT](/boards/cambridge/a-level/ict/). Printable checklist: [9626 checklist](/checklists/cambridge/a-level/ict/). Find your gaps with a [free 10-minute diagnostic](/diagnostics/). The same selection and loop logic appears as pseudocode in [Algorithms and flowcharts](/resources/a-level-cambridge-ict-algorithms-and-flowcharts/).

## What this topic covers

| Section | What you must be able to do | Stage |
|---|---|---|
| 21.1 | Insert JavaScript in HTML and use external scripts | A Level only |
| 21.1 | Change HTML content (text, numbers, calculations, strings, images) and styles | A Level only |
| 21.1 | Show and hide elements with `visibility` and `display` | A Level only |
| 21.1 | Display data with `innerHTML`, `document.write()`, `window.alert()`, `console.log()` | A Level only |
| 21.1 | React to `onload`, `onchange`, `onclick`, `onmouseover`, `onmouseout`, `onkeydown` | A Level only |
| 21.1 | Use `confirm()` and `prompt()` popups | A Level only |
| 21.1 | Statement structure: values, operators, comparisons, expressions, keywords, comments | A Level only |
| 21.1 | Functions run by events, by code and self-invoked; `setTimeout()`, `setInterval()` | A Level only |
| 21.1 | Loops: `for`, `for/in`, `while`, `do/while`; `break` | A Level only |
| 21.1 | Data types, type conversions, variables, arrays, logical, comparison and conditional operators | A Level only |

## Putting JavaScript in a page

**Inserting JavaScript in HTML.** Code goes between `<script>` and `</script>` tags in the `<head>` or the `<body>`.

```html
<p id="msg">Waiting...</p>
<script>
  document.getElementById("msg").innerHTML = "Script ran";
</script>
```

**External scripts.** Code is saved in its own `.js` file and linked with the `src` attribute. The `.js` file holds only JavaScript, with no `<script>` tags.

```html
<script src="scripts/booking.js"></script>
```

External scripts keep HTML and code apart, let several pages share one file, and let the browser cache that file. One edit updates every page that uses it.

## Changing HTML content

`document.getElementById("id")` finds one element by its `id`. Its `innerHTML` property holds the content between its tags.

**Worked example 1 -- a calculation.** A text box `qty` holds the number of tickets. Each costs £4.50.

```js
let qty = Number(document.getElementById("qty").value);
let total = qty * 4.5;
document.getElementById("cost").innerHTML = "£" + total.toFixed(2);
```

For 3 tickets: `total` = 3 × 4.5 = 13.5, and `toFixed(2)` gives the string `"13.50"`, so the page shows **£13.50**. The `value` of a text box is always a string. Without `Number()`, `"3" + 4.5` would join the two and give `"34.5"`.

**Worked example 2 -- string manipulation.** `let n = "amina khan";`

| Expression | Result |
|---|---|
| `n.toUpperCase()` | `"AMINA KHAN"` |
| `n.length` | `10` (the space counts) |
| `n.substring(0, 5)` | `"amina"` (positions 0 to 4) |
| `n.charAt(0).toUpperCase() + n.charAt(n.indexOf(" ") + 1).toUpperCase()` | `"AK"` |

**Images and image properties.** Change the attributes of an `<img>` element in the same way:

```js
let pic = document.getElementById("product");
pic.src = "images/blue.jpg";
pic.width = 300;
pic.alt = "Blue rucksack";
```

## Changing styles, showing and hiding

The syllabus form is `document.getElementById(id).style.property = new style`. CSS names with a hyphen become camelCase: `background-color` becomes `backgroundColor`. Values are strings and need units.

```js
document.getElementById("warn").style.color = "red";
document.getElementById("warn").style.fontSize = "20px";
```

| Statement | Effect |
|---|---|
| `.style.visibility = "hidden"` | Invisible, but its space stays in the layout |
| `.style.visibility = "visible"` | Shown again |
| `.style.display = "none"` | Removed from the layout; content below moves up |
| `.style.display = "block"` | Shown again as a block |

Use `visibility` when the layout must not jump. Use `display` for menus and help panels that should take no space when closed.

## Four ways to display data

| Method | Where the output goes | Typical use |
|---|---|---|
| `innerHTML` | Inside an existing element | Results, messages, totals |
| `document.write()` | Straight into the HTML output | Testing only |
| `window.alert()` | A popup box the user must close | Urgent warnings |
| `console.log()` | The browser console, not the page | Debugging |

Calling `document.write()` after the page has finished loading clears the existing page, so never use it inside an event handler.

## Events

| Event | Fires when | Example use |
|---|---|---|
| `onload` | The page (or an image) has finished loading | Start a clock |
| `onchange` | An element's value is changed; for a text box, when it loses focus | Recalculate when a drop-down changes |
| `onclick` | The element is clicked | Submit a form |
| `onmouseover` | The pointer moves onto the element | Swap an image |
| `onmouseout` | The pointer leaves the element | Swap it back |
| `onkeydown` | A key is pressed | Count characters typed |

```html
<body onload="startClock()">
<select id="size" onchange="updatePrice()">...</select>
```

## Popups for user interaction

- `confirm("Delete this item?")` shows OK and Cancel. It returns `true` for OK and `false` for Cancel.
- `prompt("Enter your name", "")` shows a text box. It returns the text as a **string**, or `null` if Cancel is clicked.

```js
let name = prompt("Enter your name");
if (name === null || name === "") {
  window.alert("No name entered");
} else if (confirm("Save " + name + "?")) {
  document.getElementById("user").innerHTML = name;
}
```

## Structure and syntax of statements

A **statement** is one instruction, ended with a semicolon. It is built from:

- **Values**: **literals** (fixed values such as `42`, `"Lahore"`, `true`) and **variables** (named stores).
- **Keywords**: reserved words such as `let`, `const`, `var`, `if`, `else`, `switch`, `for`, `while`, `do`, `break`, `function`, `return`.
- **Expressions**: combinations of values and operators that give one value, such as `qty * 4.5`.
- **Comments**: `// single line` and `/* multi-line */`. The browser ignores them. Use them to explain what code does and why.

**Operators.** The syllabus lists assignment, arithmetic, algebraic and string operators.

| Type | Operators | Example → result |
|---|---|---|
| Assignment | `=` `+=` `-=` `*=` `/=` | `x += 2` adds 2 to x |
| Arithmetic | `+` `-` `*` `/` `%` (remainder) `**` (power) `++` `--` | `17 % 5` → 2; `2 ** 3` → 8 |
| Order (algebraic rules) | brackets first, then `**`, then `* / %`, then `+ -` | `3 + 4 * 2` → 11; `(3 + 4) * 2` → 14 |
| String | `+` `+=` join strings | `"Mar" + "lbridge"` → `"Marlbridge"` |

## Data types and type conversion

| Type | Example | `typeof` gives |
|---|---|---|
| Number | `17`, `4.5` | `"number"` |
| String | `"17"` | `"string"` |
| Boolean | `true`, `false` | `"boolean"` |
| Array | `[12, 15, 9]` | `"object"` |
| Object | `{name: "Bilal", age: 17}` | `"object"` |

`typeof` reports an array as `"object"`; `Array.isArray(x)` tests for an array.

**Automatic conversion** happens when types mix: `"5" + 3` gives `"53"` (joins), but `"5" - 3` gives `2` and `"5" * "2"` gives `10`.

**Explicit conversion:**

| Code | Result |
|---|---|
| `Number("12.5")` | `12.5` |
| `parseInt("12.9kg")` | `12` |
| `parseFloat("12.9kg")` | `12.9` |
| `Number("abc")` | `NaN` (not a number) |
| `String(42)` or `(42).toString()` | `"42"` |
| `Number(true)` | `1` |

## Comparison, logical and conditional operators

| Operator | Meaning | Comparing `5` with `"5"` |
|---|---|---|
| `==` | equal value | `true` |
| `===` | equal value **and** equal type | `false` |
| `!=` | not equal value | `false` |
| `!==` | not equal value or not equal type | `true` |
| `>` `<` `>=` `<=` | greater, less, or equal | `8 >= 8` is `true` |

**Logical operators**: `&&` (AND), `||` (OR), `!` (NOT). With `age = 16`: `age >= 13 && age <= 19` is `true`; `!(age >= 18)` is `true`.

**Ternary operator**: `condition ? valueIfTrue : valueIfFalse`. `(age >= 18) ? "Adult" : "Child"` gives `"Child"`.

**if / else if / else** tests conditions in order and runs the first true branch only. **switch** compares one value against several `case` values:

```js
switch (day) {
  case 1: text = "Monday"; break;
  case 5: text = "Friday"; break;
  default: text = "Another day";
}
```

Without `break`, execution falls through into the next case. With `day = 5`, `text` is `"Friday"`; with `day = 3`, it is `"Another day"`.

## Loops and break

**Worked example 3 -- `for` over an array.** `let scores = [12, 15, 9, 18];`

```js
let total = 0;
let highest = scores[0];
for (let i = 0; i < scores.length; i++) {
  total += scores[i];
  if (scores[i] > highest) { highest = scores[i]; }
}
```

Total = 12 + 15 + 9 + 18 = **54**. Highest = **18**. Average = 54 / 4 = **13.5**. Indexes run from 0 to `length − 1`.

**`for/in`** visits each property name of an object (or each index of an array):

```js
let pupil = {name: "Bilal", age: 17, house: "Iqbal"};
for (let key in pupil) {
  console.log(key + ": " + pupil[key]);
}
```

Output: `name: Bilal`, `age: 17`, `house: Iqbal`.

**`while`** tests first, so the body may never run. `let n = 1; while (n < 100) { n = n * 2; }` ends with `n` = **128** after 7 passes.

**`do/while`** tests last, so the body always runs at least once. `let x = 10; do { x++; } while (x < 5);` ends with `x` = **11**.

**`break`** leaves a loop early. Searching `scores` for the first value over 14 and breaking stops at index **1** (value 15), without checking 9 or 18.

## Functions and timing events

A function is a named block of code that runs only when executed. The syllabus lists three ways:

1. **When an event occurs**: `<button onclick="checkAnswer()">`.
2. **When invoked from code**: `let cost = price(3);` inside another function or script.
3. **Automatically (self-invoked)**: the function is wrapped in brackets and called at once.

```js
(function () {
  document.getElementById("year").innerHTML = "2027";
})();
```

**Timing events** take a function and a time in **milliseconds**:

- `setTimeout(fn, 3000)` runs `fn` **once**, after 3 seconds.
- `setInterval(fn, 1000)` runs `fn` **every** second until stopped with `clearInterval(id)`.

**Worked example 4 -- countdown.**

```js
let n = 5;
let id = setInterval(function () {
  document.getElementById("clock").innerHTML = n;
  n--;
  if (n < 0) { clearInterval(id); }
}, 1000);
```

The clock shows 5, 4, 3, 2, 1, 0, then the interval stops.

## Common errors

- Writing `getElementByID` or `getElementbyId`. JavaScript is case-sensitive.
- Adding numbers read from text boxes without `Number()`, so they join as strings.
- Using `=` (assignment) inside an `if` when `===` (comparison) was meant.
- Forgetting `break` in a `switch` case.
- Giving a style value without units, such as `fontSize = 20`.
- Putting `<script>` tags inside an external `.js` file.
- Treating `prompt()`'s Cancel as an empty string; it returns `null`.
- Off-by-one loops: `i <= scores.length` reads one past the end of the array.

## Next steps

Condense this with the [Programming for the web revision notes](/resources/a-level-cambridge-ict-programming-for-the-web-revision-notes/), then test yourself with the [Programming for the web practice questions](/resources/a-level-cambridge-ict-programming-for-the-web-practice/).

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 3, Cambridge University Press & Assessment. Topic 21: Programming for the web (21.1 Programming for the web).
