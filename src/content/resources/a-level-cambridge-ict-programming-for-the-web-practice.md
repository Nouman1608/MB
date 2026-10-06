---
title: "Cambridge A Level Information Technology (ICT): Programming for the web (9626) -- Practice Questions"
seoTitle: "Cambridge A Level ICT 9626 Programming for the Web Practice"
resourceType: "practice-questions"
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
description: "Original practice questions with worked answers for Cambridge A Level IT 9626 Programming for the web, from tracing JavaScript to writing timers."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover **topic 21, Programming for the web**, of Cambridge International AS & A Level Information Technology (9626), following the syllabus for examination in 2025, 2026 and 2027 (version 3), section 21.1. Topic 21 is **A Level only**. Paper 3 (Advanced Theory) questions are based on sections 12–21 and Paper 4 (Advanced Practical) tasks on sections 17–21. Every question here can be answered on paper.

Learn the content first in the [Programming for the web study guide](/resources/a-level-cambridge-ict-programming-for-the-web/) and the [Programming for the web revision notes](/resources/a-level-cambridge-ict-programming-for-the-web-revision-notes/). Course hub: [Cambridge A Level ICT](/boards/cambridge/a-level/ict/). Checklist: [9626 checklist](/checklists/cambridge/a-level/ict/). Find your weak spots with a [free 10-minute diagnostic](/diagnostics/).

Answers show one acceptable version, with a [1] per creditworthy point. This is indicative marking, not an official mark scheme; other correct code also earns credit.

## Questions

**1.** A developer is testing a delivery-charge page.

**(a)** State where the output appears for each of `console.log()`, `window.alert()` and `document.write()`. **[3]**
**(b)** Explain why `document.write()` should not be used inside a function called by `onclick`. **[2]**

**2.** Many pages on a college website use the same form-checking code.

**(a)** Write the HTML that links an external script file called `checkout.js`. **[1]**
**(b)** Explain two advantages of an external script over inserting the code in each page. **[2]**
**(c)** Write one single-line comment and one multi-line comment in JavaScript. **[2]**

**3.** Study this code.

```js
let a = "7";
let b = 3;
let c = a + b;
let d = a * b;
let e = Number(a) + b;
```

**(a)** State the values of `c`, `d` and `e`, and the result of `typeof c`. **[4]**
**(b)** State the results of `a == 7` and `a === 7`, and explain why they differ. **[2]**

**4.** A page has an element with the id `advert`.

**(a)** Write a statement that hides it but keeps its space on the page. **[1]**
**(b)** Write a statement that hides it and removes its space. **[1]**
**(c)** A help panel sits above a form. Explain which method should be used to close the panel. **[2]**

**5.** `let code = "lhr-204";` State the result of each expression.

**(a)** `code.toUpperCase()` **[1]**
**(b)** `code.length` **[1]**
**(c)** `code.indexOf("-")` **[1]**
**(d)** `code.substring(code.indexOf("-") + 1)` **[1]**

**6.** An online shop shows a bag in an image with the id `bag`. Write the HTML and JavaScript so that the image shows `back.jpg` while the pointer is over it and `front.jpg` when the pointer leaves. **[4]**

**7.** Study this code.

```js
let total = 0;
for (let i = 1; i <= 9; i += 2) {
  total = total + i;
}
```

**(a)** State the final value of `total`. **[1]**
**(b)** Rewrite the code using a `while` loop that gives the same result. **[3]**

**8.**

**(a)** State the value of `e` after: `let e = 20; do { e = e - 6; } while (e > 25);` **[1]**
**(b)** State the value of `d` after: `let d = 20; while (d > 25) { d = d - 6; }` **[1]**
**(c)** Explain why the two answers differ. **[2]**
**(d)** `let stock = {pens: 40, rulers: 0, rubbers: 12};` Write a `for/in` loop that writes to the console the name of every item with a value of 0. **[2]**

**9.** Describe three ways a JavaScript function can be executed. Give a code example for each. **[6]**

**10.** Tickets cost £6 each. Write a function `book()` that:
- uses `prompt()` to ask for the number of tickets
- shows the alert `Invalid number` on Cancel or if the entry is not a number of at least 1
- otherwise uses `confirm()` to ask the user to accept the total
- if accepted, writes the total (for example `£24.00`) into the element with id `total`. **[7]**

**11.** A timed quiz must show a countdown from 30 in the element `clock`, falling by 1 every second. At 0 the timer stops, the button `submit` is removed from the layout, and an alert says `Time up`.

**(a)** Write the HTML and JavaScript, starting the timer when the page loads. **[6]**
**(b)** Explain why `setInterval()` is used here rather than `setTimeout()`. **[2]**

**12.** Study this code.

```js
let age = 15;
let member = false;
let price = (age < 16 || member) ? 4 : 7;
```

**(a)** State the value of `price`. **[1]**
**(b)** State the value of `!member && age >= 16`. **[1]**
**(c)** State the value of `price` if `age` is 19 and `member` stays `false`. **[1]**
**(d)** A drop-down with id `theme` has the options `dark`, `light` and `print`. Write a function, run when the selection changes, that uses a `switch` statement to set the background colour of the element with id `page` to `#222222`, `#ffffff` or `#f0f0f0` respectively, and to `#ffffff` for any other value. **[5]**

## Answers

**1. (a)** `console.log()`: the browser console, not the page [1]. `window.alert()`: a popup box the user must close [1]. `document.write()`: straight into the HTML output of the page [1].
**(b)** The click happens after the page has loaded [1], and `document.write()` then clears the existing page [1]. **[5]**
*Examiner insight:* Say it is the browser console, which the user does not see on the page; "console" alone may not score.

**2. (a)** `<script src="checkout.js"></script>` [1]
**(b)** One edit to the file updates every page that uses it [1]. The browser can cache the file, so pages load faster after the first [1].
**(c)** `// checks the postcode` [1] and `/* checks every field before the form is sent */` [1]. **[5]**
*Examiner insight:* Each advantage needs its reason; "it is easier" with no explanation does not earn the mark.

**3. (a)** `c` is **`"73"`** [1], `d` is **21** [1], `e` is **10** [1], `typeof c` is **`"string"`** [1].
**(b)** `a == 7` is **true** and `a === 7` is **false** [1]; `==` compares value only, but `===` also needs the same type, and `a` is a string [1]. **[6]**
*Examiner insight:* Show `c` with quotes; writing 73 without quotes loses the point that it is a string.

**4. (a)** `document.getElementById("advert").style.visibility = "hidden";` [1]
**(b)** `document.getElementById("advert").style.display = "none";` [1]
**(c)** Use `display = "none"` [1], because the panel's space is removed and the form moves up, so no blank gap is left [1]. **[4]**
*Examiner insight:* Naming the method alone gets one mark in (c); the second needs the effect on the layout.

**5. (a)** **`"LHR-204"`** [1]
**(b)** **7** [1]
**(c)** **3** (positions start at 0) [1]
**(d)** **`"204"`** [1] **[4]**
*Examiner insight:* Off-by-one answers (8 for the length, 4 for the position) lose the mark; positions count from 0.

**6.**

```html
<img id="bag" src="front.jpg" alt="Bag" onmouseover="showBack()" onmouseout="showFront()">
<script>
function showBack() { document.getElementById("bag").src = "back.jpg"; }
function showFront() { document.getElementById("bag").src = "front.jpg"; }
</script>
```

`onmouseover` attached to the image [1]; `onmouseout` attached to the image [1]; one function sets `src` to `back.jpg` using `getElementById` [1]; the other sets it to `front.jpg` [1]. **[4]**
*Examiner insight:* The event must be on the image itself; attaching `onmouseover` to the body or a button does not meet the brief.

**7. (a)** 1 + 3 + 5 + 7 + 9 = **25** [1]
**(b)**

```js
let total = 0;
let i = 1;
while (i <= 9) {
  total = total + i;
  i = i + 2;
}
```

`i` set to 1 before the loop [1]; condition `i <= 9` [1]; `i` increased by 2 inside the loop body [1]. **[4]**
*Examiner insight:* Without a change to `i` inside the body the loop never ends, so the increment mark is lost.

**8. (a)** **14** [1]
**(b)** **20** [1]
**(c)** `do/while` runs the body before testing, so it always runs at least once [1]; `while` tests first, and 20 > 25 is false, so its body never runs [1].
**(d)** `for (let item in stock) {` [1] `if (stock[item] === 0) { console.log(item); } }` [1] -- this outputs `rulers`. **[6]**
*Examiner insight:* In (c), describe both loops; explaining only `do/while` gains one of the two marks.

**9.** When an event occurs: the function runs in response to a user action or page event [1], e.g. `<input id="search" onkeydown="countKeys()">` [1]. When invoked from code: another statement calls it by name [1], e.g. `let cost = price(3);` [1]. Automatically (self-invoked): it is wrapped in brackets and called at once, with no call elsewhere [1], e.g. `(function () { console.log("ready"); })();` [1]. **[6]**
*Examiner insight:* Each way needs a description and a matching example; wrong brackets on a self-invoked function lose that mark.

**10.**

```js
function book() {
  let n = prompt("How many tickets?");
  if (n === null || isNaN(Number(n)) || Number(n) < 1) {
    window.alert("Invalid number");
  } else {
    let total = Number(n) * 6;
    if (confirm("Total £" + total.toFixed(2) + ". Continue?")) {
      document.getElementById("total").innerHTML = "£" + total.toFixed(2);
    }
  }
}
```

Function declared as `book()` [1]; `prompt()` result stored [1]; test for `null` (Cancel) [1]; test for not a number or less than 1 [1]; alert with the message [1]; entry converted with `Number()` and multiplied by 6 [1]; `confirm()` result tested before writing to `innerHTML` [1]. For 4 tickets the page shows **£24.00**. **[7]**
*Examiner insight:* `Number("abc") < 1` is false, because comparisons with `NaN` are false, so a check without `isNaN()` lets text through.

**11. (a)**

```html
<body onload="startTimer()">
<p id="clock">30</p>
<button id="submit">Submit</button>
<script>
let secs = 30;
let timer;
function startTimer() { timer = setInterval(tick, 1000); }
function tick() {
  secs--;
  document.getElementById("clock").innerHTML = secs;
  if (secs === 0) {
    clearInterval(timer);
    document.getElementById("submit").style.display = "none";
    window.alert("Time up");
  }
}
</script>
```

`onload` calls the start function [1]; `setInterval` with 1000 ms [1]; counter decreased by 1 each call [1]; clock updated with `innerHTML` [1]; test for 0 then `clearInterval` [1]; button hidden with `display = "none"` and alert shown [1].
**(b)** `setInterval()` repeats the function every 1000 ms, which a countdown needs [1]; `setTimeout()` runs it only once, so it would have to be restarted on every tick [1]. **[8]**
*Examiner insight:* A delay of 1 instead of 1000 is a common error; the time is in milliseconds.

**12. (a)** **4** (`age < 16` is true) [1]
**(b)** **false** (`age >= 16` is false) [1]
**(c)** **7** (both conditions false) [1]
**(d)**

```html
<select id="theme" onchange="setTheme()">...</select>
```

```js
function setTheme() {
  let t = document.getElementById("theme").value;
  let pg = document.getElementById("page");
  switch (t) {
    case "dark": pg.style.backgroundColor = "#222222"; break;
    case "light": pg.style.backgroundColor = "#ffffff"; break;
    case "print": pg.style.backgroundColor = "#f0f0f0"; break;
    default: pg.style.backgroundColor = "#ffffff";
  }
}
```

`onchange` on the drop-down calls the function [1]; selected value read with `getElementById(...).value` [1]; `switch` with a `case` for each option [1]; `style.backgroundColor` set with a quoted value [1]; `break` after each case and a `default` [1]. **[8]**
*Examiner insight:* `background-color` with a hyphen is CSS, not JavaScript; the property must be `backgroundColor`.

## Where marks are usually lost

- Writing `getElementByID`, or leaving the quotes off an id.
- Giving `"73"` as 73, or 10, when a string is joined to a number.
- Choosing `visibility` or `display` without saying what happens to the space.
- Starting a `setInterval` with no `clearInterval`, so the countdown runs below 0.
- Tracing a `do/while` loop as if it tests before the first pass.
- Checking `prompt()` input with `< 1` only, so Cancel (`null`) and text slip through.
- Attaching events to the wrong element, or calling a function that is never written.
- Using CSS property names (`background-color`, `font-size`) in JavaScript.

## Next steps

- Revise with the [Programming for the web revision notes](/resources/a-level-cambridge-ict-programming-for-the-web-revision-notes/).
- Go back to the [Programming for the web study guide](/resources/a-level-cambridge-ict-programming-for-the-web/) for full explanations.
- [Cambridge A Level ICT hub](/boards/cambridge/a-level/ict/) and [9626 checklist](/checklists/cambridge/a-level/ict/).
- Try [all free 10-minute diagnostics](/diagnostics/).
- [Book a free trial class](/trial/).

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 3, Cambridge University Press & Assessment. Topic 21: Programming for the web (21.1 Programming for the web).
