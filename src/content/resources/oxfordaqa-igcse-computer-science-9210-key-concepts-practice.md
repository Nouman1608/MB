---
title: "OxfordAQA IGCSE Computer Science (9210): Key concepts of web page design -- Practice Questions"
seoTitle: "OxfordAQA IGCSE CS 9210 Web Design Key Concepts Practice"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 8: Web page design"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 8.01
syllabusTopics:
  - qualification: "igcse"
    topic: "web-page-design"
  - qualification: "igcse"
    topic: "web-page-design"
    subtopic: "key-concepts-9210"
description: "Original OxfordAQA IGCSE Computer Science 9210 practice questions with answers on HTML, CSS, server-side scripting and client-side scripting."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs; examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Key concepts study guide](/resources/oxfordaqa-igcse-computer-science-9210-key-concepts/) | [Key concepts revision notes](/resources/oxfordaqa-igcse-computer-science-9210-key-concepts-revision-notes/)

These questions cover section 3.8.1 Key concepts of the OxfordAQA International GCSE Computer Science (9210)
specification.

---

## Section A

**1.** State what the letters HTML stand for. **[1]**

**2.** State what HTML is used for in a web page. **[1]**

**3.** State what CSS is used for in a web page. **[1]**

**4.** State what is meant by a dynamic web page. **[2]**

**5.** State whether each task is more likely to use server-side scripting or client-side scripting.

**(a)** looking up a customer's orders in a database and showing them on a page **[1]**

**(b)** showing a pop-up message when a user clicks a button, with no contact with the server **[1]**

## Section B

**6.** A school website has the same blue heading on every page. Explain why using HTML and CSS together, rather than
only HTML, makes it easier to change the colour of every heading. **[3]**

**7.** Describe the difference between server-side scripting and client-side scripting. **[4]**

**8.** A user logs in to an online shop. A script checks the user name and password against the shop's customer database
and then displays the user's saved basket.

**(a)** State whether this script is server-side or client-side. **[1]**

**(b)** Explain why it must run in this way. **[2]**

**9.** A web form asks for a date of birth. A script checks that the month is between 1 and 12 and shows an error
message at once if it is not.

**(a)** State whether this is a server-side or a client-side script. **[1]**

**(b)** Give two advantages of using this type of script for the check. **[2]**

**(c)** Explain why the shop should also check the date on the server. **[2]**

**10.** Explain the benefits and drawbacks of server-side scripting for a website that is used by thousands of people at
the same time. **[4]**

**11.** Describe the steps that take place from the moment a user clicks a link to the moment that the page is shown in
their browser. **[4]**

**12.** A student says, "HTML is a programming language that makes web pages look attractive." Identify two mistakes in
this statement. **[2]**

**13.** A football club's home page shows the latest results, which come from a database. Explain why the page is a dynamic
web page and not a static web page. **[3]**

---

## Answers

**1.** Hypertext Markup Language [1].

**2.** To create the structure of a web page [1].

**3.** To change the style (appearance) of a web page, for example colours, fonts or alignment [1].

**4.** A page that is generated when it is requested [1], so that its content can be different for different users or at
different times [1].

**5.** **(a)** Server-side [1]. **(b)** Client-side [1].

**6.** In HTML the headings are marked as headings, which gives the structure [1]; CSS holds the style rule for the heading
colour in one place [1]; changing that one rule changes every heading on every page, without editing each page [1].

**7.** Server-side scripts run on the web server [1], and create the HTML page that is sent to the browser [1]; client-side
scripts are sent to the user's browser and run on the user's computer [1], and add extra functionality to the page, such
as interactivity [1].

**8.** **(a)** Server-side [1]. **(b)** The customer database and the saved baskets are stored on the server [1]; the script
needs to reach that data, and it should not be sent to the user's computer, where it could be seen or changed, so the
script must run on the server [1].

**9.** **(a)** Client-side [1].
**(b)** Any two from: the user gets an immediate response without waiting for the server [1]; it reduces the amount of work
and data sent to the server [1]; the page is more interactive and easier to use [1].
**(c)** The client-side script can be changed, read or switched off by the user [1], so the date could still be wrong
when it arrives at the server; a second check on the server makes sure that only valid data is accepted [1].

**10.** Benefits: the code and data stay on the server, so it is more secure [1]; it can use the database to give each user
the right content [1]. Drawbacks: the server must do the work for every request, so it may slow down when thousands of
users are active [1]; each action needs a trip to the server, which can cause delays [1].

**11.** The browser sends a request to the web server [1]; the server finds the page, or runs a server-side script to
generate it [1]; the server sends the page (HTML) back to the browser [1]; the browser reads the HTML (and any style rules)
and displays the page [1].

**12.** HTML is not a programming language, it is a markup language [1]; HTML creates the structure of a page, and the
appearance is controlled by CSS [1].

**13.** The results are stored in a database [1]; a server-side script generates the page when it is requested, using the
latest data [1]; so the content is different at different times, whereas a static page would be the same fixed file for
every visitor [1].

---

## Where marks are usually lost

- Calling HTML a programming language, or saying that it controls the appearance.
- Not saying where each type of script runs, as in Question 7.
- Treating client-side checks as enough for security, as in Question 9(c).
- Defining a dynamic page as "a page with animation".
- Describing the response of a server without saying that the browser displays the page.
