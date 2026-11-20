---
title: "Cambridge A Level Information Technology (ICT): 21.1 Programming for the web (9626)"
seoTitle: "Cambridge A Level IT 9626: Web Programming Study Guide"
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
  - qualification: "a-level"
    topic: "programming-for-the-web"
    subtopic: "programming-for-the-web-content"
description: "Study guide to section 21.1 of Cambridge A Level IT 9626: JavaScript in web pages, changing content and styles, events, popups, timing events, loops, functions and data types."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide goes deeper into section **21.1 Programming for the web** of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 4). It is **A Level only** content. The syllabus recommends a working knowledge of HTML and CSS before this section. Paper 4 (Advanced Practical) tests sections 17 to 21, and Paper 3 (Advanced Theory) is based on sections 12 to 21, where calculators are not allowed.

The syllabus asks you to use **JavaScript** to:

- add interactivity to web pages by inserting JavaScript in HTML and by creating and using external scripts
- change HTML content (text and numbers, including calculations and string manipulation, and images and their properties) and HTML styles
- show and hide HTML elements
- display data in different ways: `innerHTML`, `document.write()`, `window.alert()` and `console.log()`
- react to events: onload, onchange, onclick, onmouseover, onmouseout and onkeydown
- provide user interaction using `confirm()` and `prompt()`
- understand the structure and syntax of JavaScript (statements, values, operators, comparison, expressions, keywords, comments), functions, timing events and loops
- use object-based techniques and terms: data types, type conversions, variables and arrays, operators, conditional statements, `break`, and interaction.

Use it with the [programming for the web topic guide](/resources/a-level-cambridge-ict-programming-for-the-web/), the [topic revision notes](/resources/a-level-cambridge-ict-programming-for-the-web-revision-notes/) and the [practice questions](/resources/cambridge-a-level-ict-9626-programming-for-the-web-practice/). The [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) lists every topic.

## Where JavaScript goes

HTML gives a page its structure, CSS styles it, and JavaScript makes it respond to the user. JavaScript runs in the browser.

**Inserted in the HTML** inside a script element:

```html
<script>
  document.getElementById("msg").innerHTML = "Hello";
</script>
```

**In an external script file**, which keeps the HTML tidy and lets many pages share one file:

```html
<script src="myscript.js"></script>
```

The file `myscript.js` holds only JavaScript, with no script tags. An external file is cached by the browser, is reused by every page and is easier to maintain. Place the script after the elements it uses (or at the end of the body) so the elements exist when it runs.

## The structure and syntax of JavaScript

| Term | Meaning | Example |
|---|---|---|
| **Statement** | One instruction, usually ending in a semicolon | `var total = 0;` |
| **Value (literal)** | A fixed value | `42`, `"hello"`, `true` |
| **Variable** | A named store for a value | `var score = 10;` |
| **Keyword** | A reserved word with a fixed meaning | `var`, `if`, `for`, `function`, `return` |
| **Expression** | Something that produces a value | `price * qty` |
| **Operator** | A symbol that acts on values | `+  -  *  /  %` |
| **Comment** | Text ignored by the browser, to explain code | `// single line` and `/* multi-line */` |

### Operators

| Type | Operators |
|---|---|
| **Assignment** | `=`, `+=`, `-=` |
| **Arithmetic** | `+  -  *  /  %` (remainder), `++`, `--` |
| **String** | `+` joins strings: `"Hello " + name` |
| **Comparison** | `==` (equal value), `===` (equal value and type), `!=` (not equal value), `!==` (not equal value or type), `>`, `<`, `>=`, `<=` |
| **Logical** | `&&` (AND), `\|\|` (OR), `!` (NOT) |
| **Conditional (ternary)** | `condition ? valueIfTrue : valueIfFalse` |

`5 == "5"` is true because the values match after conversion, but `5 === "5"` is false because the types differ (number and string).

## Data types and type conversion

The main data types are **number**, **string**, **Boolean**, **array** and **object**.

```js
var age = 17;                 // number
var name = "Ali";             // string
var member = true;            // Boolean
var marks = [4, 8, 15];       // array
var pupil = {name: "Ali", age: 17};  // object
```

**Type conversion** changes one type to another. JavaScript sometimes converts automatically:

| Expression | Result | Reason |
|---|---|---|
| `"10" + 5` | `"105"` | `+` with a string joins |
| `"10" - 5` | `5` | `-` works only on numbers |
| `"10" * 5` | `50` | text converted to a number |
| `"abc" * 2` | `NaN` | cannot convert (not a number) |

You can also convert deliberately: `Number("12")` gives 12, `parseInt("42px")` gives 42, and `String(7)` gives `"7"`. Input from `prompt()` is always text, so convert it before doing arithmetic.

## Changing HTML content

Elements are found with `document.getElementById("id")`.

```js
document.getElementById("total").innerHTML = 5 * 3;   // number from a calculation
document.getElementById("greeting").innerHTML = "Hello " + "Sam".toUpperCase();
document.getElementById("photo").src = "dog.jpg";     // change an image
document.getElementById("photo").width = 200;         // change an image property
```

**String manipulation** examples, with `var s = "Marlbridge";`:

| Code | Result |
|---|---|
| `s.length` | 10 |
| `s.toUpperCase()` | "MARLBRIDGE" |
| `s.substring(0, 4)` | "Marl" |
| `s.charAt(4)` | "b" |
| `s.indexOf("b")` | 4 |

## Changing styles and showing or hiding elements

The general form is `document.getElementById(id).style.property = new style;`

```js
document.getElementById("box").style.color = "red";
document.getElementById("box").style.backgroundColor = "yellow";
document.getElementById("box").style.fontSize = "24px";
```

Note that CSS names with a hyphen become camel case in JavaScript (`background-color` becomes `backgroundColor`).

**Showing and hiding** use two different properties:

```js
document.getElementById("note").style.visibility = "hidden";   // invisible, space kept
document.getElementById("note").style.visibility = "visible";
document.getElementById("note").style.display = "none";        // removed, space released
document.getElementById("note").style.display = "block";
```

`visibility` hides an element but keeps its space on the page. `display = "none"` removes it completely, so the other content moves up.

## Displaying data

| Method | Where the output goes |
|---|---|
| `innerHTML` | Into an HTML element on the page |
| `document.write()` | Into the page as it loads (using it after the page has loaded replaces the whole page) |
| `window.alert()` | A popup box with an OK button |
| `console.log()` | The browser console, for testing and debugging; users do not see it |

## Events

An **event** is something that happens on the page. An event handler runs a function when it happens.

| Event | When it fires |
|---|---|
| `onload` | The page or element has finished loading |
| `onchange` | The value of an input changes (for example, a drop-down choice) |
| `onclick` | The element is clicked |
| `onmouseover` | The mouse pointer moves onto the element |
| `onmouseout` | The mouse pointer leaves the element |
| `onkeydown` | A key is pressed |

```html
<img id="pic" src="a.jpg" onmouseover="swap()" onmouseout="back()">
<button onclick="greet()">Say hello</button>
```

## User interaction: confirm and prompt

```js
var name = prompt("Enter your name:");        // returns the text typed
var ok = confirm("Delete this item?");        // returns true (OK) or false (Cancel)
alert("Welcome " + name);
```

## Functions

A **function** is a named block of code that can be reused. It can take **parameters** and send a value back with `return`.

```js
function total(price, qty) {
  return price * qty * 1.2;
}
var cost = total(5, 3);       // 18
```

Functions can run:

- **when an event occurs**, via an event handler such as `onclick="total(5,3)"`
- **when invoked from code**, by another statement calling `total(5, 3)`
- **automatically (self-invoked)**, with a function that runs as soon as it is defined: `(function () { console.log("Started"); })();`

## Selection

```js
if (age >= 18) {
  status = "adult";
} else if (age >= 13) {
  status = "teen";
} else {
  status = "child";
}
```

A `switch` chooses between many exact values. Use `break` to stop it running into the next case:

```js
var d = 2, r = "";
switch (d) {
  case 1: r += "A";
  case 2: r += "B";
  case 3: r += "C"; break;
  default: r += "D";
}
// r is "BC": case 2 has no break, so it continues into case 3
```

## Loops

| Loop | Use | Example |
|---|---|---|
| **for** | A known number of repeats | `for (var i = 1; i <= 5; i++) { sum += i; }` gives 15 |
| **for/in** | Go through the property names of an object (or array indexes) | `for (var key in pupil) { ... }` |
| **while** | Repeat while a condition is true; the test comes first | `while (n > 1) { n = n / 2; }` |
| **do/while** | The test comes after, so the body always runs **at least once** | `do { x++; } while (x < 3);` |

`break` leaves a loop early.

### Worked example: tracing a loop

```js
var n = 10, count = 0;
while (n > 1) {
  n = n / 2;
  count++;
}
```

n becomes 5, 2.5, 1.25, then 0.625, so the loop runs 4 times. At the end count is 4 and n is 0.625. For the `do/while` loop above, x starts at 5, becomes 6, and the test `6 < 3` is false, so the loop ends with x = 6 after running once.

## Timing events

| Method | Action |
|---|---|
| `setTimeout(function, ms)` | Runs the function **once** after a delay in milliseconds |
| `setInterval(function, ms)` | Runs the function **repeatedly** at the interval |

```js
setTimeout(showMessage, 3000);   // once, after 3 seconds
var timer = setInterval(tick, 1000);   // every second
clearInterval(timer);            // stops the repeating
```

1,000 milliseconds make one second.

## Common errors

- Writing `=` in a condition when `==` or `===` is needed.
- Forgetting that `prompt()` returns text, so `"10" + 5` gives `"105"`.
- Misspelling an id, so `getElementById` finds nothing.
- Forgetting `break` in a switch.
- Mixing up visibility and display.
- Putting the script before the elements it uses.
- Using `document.write()` after the page has loaded.
- Writing seconds when setTimeout needs milliseconds.

## Frequently asked questions

**What is the difference between `==` and `===`?**
`==` compares the values after any conversion, and `===` compares both value and type.

**What is the difference between setTimeout and setInterval?**
`setTimeout` runs a function once after a delay. `setInterval` runs it repeatedly at a fixed interval.

**What is the difference between visibility and display?**
Setting visibility to hidden hides an element but keeps its space. Setting display to none removes the element and its space.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 4, Cambridge University Press & Assessment. Section 21.1: Programming for the web.
