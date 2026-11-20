---
title: "Cambridge A Level Information Technology (ICT): 21.1 Programming for the web (9626) -- Practice Questions"
seoTitle: "Cambridge A Level IT 9626: Web Programming Practice"
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
  - qualification: "a-level"
    topic: "programming-for-the-web"
    subtopic: "programming-for-the-web-content"
description: "Original practice questions with marked answers on JavaScript events, loops, switch, type conversion, functions and timing events for section 21.1 of Cambridge A Level IT 9626."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover **section 21.1 Programming for the web** of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 4). This is **A Level only** content. The syllabus tests the practical skills in Paper 4 (Advanced Practical) and bases Paper 3 (Advanced Theory) on sections 12 to 21, where calculators are not allowed. These written questions can be answered on paper; run the code in a browser to check your own answers once you have tried them.

Revise first with the [study guide](/resources/cambridge-a-level-ict-9626-programming-for-the-web/) and the [topic revision notes](/resources/a-level-cambridge-ict-programming-for-the-web-revision-notes/). The [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) lists every topic.

## Questions

**1.** State **two** ways of adding JavaScript to a web page, and give **one** advantage of using an external script file. **[3]**

**2.** State the JavaScript event that is triggered by each of the following.

**(a)** The user clicks a button. **[1]**
**(b)** The mouse pointer moves onto a picture. **[1]**
**(c)** The user chooses a different item in a drop-down list. **[1]**
**(d)** The user presses a key in a text box. **[1]**

**3.** State the method that would be used for each of the following.

**(a)** Showing a message in a popup box with an OK button. **[1]**
**(b)** Asking the user to type their name and returning the text typed. **[1]**
**(c)** Asking the user to choose OK or Cancel and returning true or false. **[1]**
**(d)** Writing a test value into the browser console that users will not see. **[1]**

**4.** A web page contains a paragraph `<p id="info">Hello</p>`.

**(a)** Write a JavaScript statement that changes the text of the paragraph to "Welcome". **[2]**
**(b)** Write a JavaScript statement that changes the colour of the text in the paragraph to red. **[2]**
**(c)** Write a JavaScript statement that hides the paragraph completely so that the other content moves up to fill its space. **[2]**
**(d)** State how the answer to (c) would differ if the space should be kept. **[1]**

**5.** State the output (the final value of `total`) of this code.

```js
var total = 0;
for (var i = 1; i <= 4; i++) {
  total = total + i * 2;
}
console.log(total);
```

**[2]**

**6.** This code is run.

```js
var n = 10;
var count = 0;
while (n > 1) {
  n = n / 2;
  count++;
}
```

**(a)** State the final values of `count` and `n`. **[2]**
**(b)** Explain how the result would differ, for the starting value n = 1, if the loop were a do/while loop instead. **[2]**

**7.** State the value displayed by each expression.

**(a)** `"10" + 5` **[1]**
**(b)** `"10" - 5` **[1]**
**(c)** `5 == "5"` **[1]**
**(d)** `5 === "5"` **[1]**

**8.** Write a JavaScript function named `toFahrenheit` that takes a temperature in degrees Celsius and returns the temperature in degrees Fahrenheit. The formula is Fahrenheit = Celsius x 9 / 5 + 32. State the value returned for an input of 25. **[4]**

**9.** This code is run.

```js
var d = 2;
var r = "";
switch (d) {
  case 1: r += "A";
  case 2: r += "B";
  case 3: r += "C"; break;
  default: r += "D";
}
```

**(a)** State the final value of `r`. **[1]**
**(b)** Explain why the value is not just "B". **[1]**

**10.** A page must show a "Time is up" message exactly once, 2.5 seconds after it loads.

**(a)** Name the method to use. **[1]**
**(b)** State the delay value that must be given. **[1]**
**(c)** State the method that would repeat an action every second, and the delay value. **[2]**

**11.** A student writes this code to ask a user their age and say if they are an adult. It does not work correctly.

```js
var age = prompt("Enter your age");
if (age = 18) {
  alert("Adult");
}
```

**(a)** Identify **two** errors in the code. **[2]**
**(b)** Write a corrected version of the if statement. **[2]**

**12.** Evaluate the use of an external JavaScript file instead of writing the JavaScript inside each HTML page, for a website of 30 pages. **[4]**

## Answers

**1.** Any two ways, one mark each: inserting the code between script tags in the HTML page [1]; linking to an external script file with the script element and its src attribute. [1] Advantage of an external file (any one): the same code is shared by many pages; it is changed in one place; it keeps the HTML tidy. [1] **[3]**

**2. (a)** onclick. [1]
**(b)** onmouseover. [1]
**(c)** onchange. [1]
**(d)** onkeydown. [1] **[4]**

**3. (a)** alert() (window.alert()). [1]
**(b)** prompt(). [1]
**(c)** confirm(). [1]
**(d)** console.log(). [1] **[4]**

**4. (a)** `document.getElementById("info").innerHTML = "Welcome";` [1 for getElementById("info"), 1 for setting innerHTML to the new text] **[2]**
**(b)** `document.getElementById("info").style.color = "red";` [1 for .style, 1 for the colour property and value] **[2]**
**(c)** `document.getElementById("info").style.display = "none";` [1 for the display property, 1 for the value "none"] **[2]**
**(d)** Use `style.visibility = "hidden"` instead, which hides the element but keeps its space. [1] **[1]**

**5.** 2 + 4 + 6 + 8 [1] = 20. [1] **[2]**
*Examiner insight:* Show the value added on each pass: i = 1, 2, 3, 4 add 2, 4, 6 and 8.

**6. (a)** n becomes 5, 2.5, 1.25 and 0.625, and the loop stops [1]. count is 4 and n is 0.625. [1] **[2]**
**(b)** A do/while loop runs the body once before testing the condition [1]; with n = 1 the body would run once (n becomes 0.5, count 1) whereas the while loop would not run at all. [1] **[2]**

**7. (a)** "105" (the string). [1]
**(b)** 5. [1]
**(c)** true. [1]
**(d)** false. [1] **[4]**

**8.** Sample: 
`function toFahrenheit(c) { return c * 9 / 5 + 32; }`
Function declared with a name and a parameter [1]; correct calculation [1]; the value returned with return [1]; the result for 25 is 25 × 9 ÷ 5 + 32 = 45 + 32 = 77. [1] **[4]**

**9. (a)** "BC". [1] **[1]**
**(b)** Case 2 has no break, so the program carries on into case 3 and adds "C" before the break stops it. [1] **[1]**

**10. (a)** setTimeout(). [1] **[1]**
**(b)** 2500 (milliseconds). [1] **[1]**
**(c)** setInterval() [1] with a delay of 1000 milliseconds. [1] **[2]**

**11. (a)** Any two: `=` assigns the value 18 to age instead of comparing, so a comparison operator is needed [1]; the test is for equality, so only an age of exactly 18 would count as an adult, and `>=` is needed [1]; the value from prompt() is text and should be converted to a number before comparing. [1] **[2]**
**(b)** `if (Number(age) >= 18) {` (or parseInt(age) >= 18) [1 for the conversion, 1 for the correct comparison operator] **[2]**

**12.** Advantages (up to 2 marks): the code is written once and used by all 30 pages [1]; a change is made in one file and appears on every page, which reduces errors and saves time. The browser can store the file, so pages after the first load faster. [1]
Disadvantages (up to 1 mark): an extra file request is needed for the first page, and if the file is missing or the path is wrong, all pages are affected. For page-specific code, an inline script may be simpler. [1]
Conclusion (1 mark): for a website of 30 pages, an external file is better because the same code is shared and easy to maintain. [1]
Maximum 4. **[4]**

## Where marks are usually lost

- Writing `=` instead of `==` or `===` in a condition.
- Forgetting that `prompt()` returns text.
- Confusing `setTimeout` with `setInterval`.
- Giving seconds instead of milliseconds.
- Using display when the space should be kept, or visibility when it should go.
- Leaving out `break` in a `switch` and not noticing the fall-through.
- Writing the answer to a trace question with no working.

## Next steps

- Recap with the [topic revision notes](/resources/a-level-cambridge-ict-programming-for-the-web-revision-notes/).
- Reread the [study guide](/resources/cambridge-a-level-ict-9626-programming-for-the-web/).
- Explore the [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) and the [printable 9626 checklist](/checklists/cambridge/a-level/ict/).
- Try all free 10-minute [diagnostics](/diagnostics/).
- [Book a free trial class](/trial/).

## Frequently asked questions

**Do I have to write JavaScript from memory?**
Yes. The practical paper requires working code, and the written paper can ask you to write, trace and correct short pieces of JavaScript.

**Why does the `+` operator sometimes join text?**
If either value is a string, `+` joins them instead of adding. Convert text from `prompt()` to a number first when you need arithmetic.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 4, Cambridge University Press & Assessment. Section 21.1: Programming for the web.
