---
title: "Cambridge A Level Information Technology (ICT): 16.3 Design (9626) -- Practice Questions"
seoTitle: "Cambridge A Level IT 9626: Design Stage Practice"
resourceType: "practice-questions"
subject: "ict"
level: ["a-levels"]
topic: "System life cycle"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 16.03
syllabusTopics:
  - qualification: "a-level"
    topic: "system-life-cycle"
  - qualification: "a-level"
    topic: "system-life-cycle"
    subtopic: "design"
description: "Original practice questions with marked answers on DFDs, system flowcharts, input forms and output reports for section 16.3 of Cambridge A Level IT 9626."
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
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover **section 16.3 Design** of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 4). This is **A Level only** content examined in Paper 3 (Advanced Theory), where calculators are not allowed. Diagrams are described in words so that every question can be answered on paper.

Revise first with the [study guide](/resources/cambridge-a-level-ict-9626-design/) and [revision notes](/resources/cambridge-a-level-ict-9626-design-revision-notes/). The [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) lists every topic.

## Questions

**1.** A gym is developing a membership system. The external entities are Member and Manager. Members send joining forms and payments, and receive membership cards. The manager receives a monthly list of members whose membership has expired.

**(a)** Describe what the level 0 (context) DFD for this system shows. **[3]**
**(b)** State **one** thing that must not appear on the level 0 DFD. **[1]**
**(c)** A level 1 DFD has processes "Join member", "Take payment" and "Produce expiry list", and data stores Members and Payments. Describe the data flows for "Produce expiry list". **[3]**
**(d)** A student draws a flow labelled "Payment" directly from the Member to the data store Payments. Explain the error and correct it. **[2]**

**2.** Explain the difference between a level 1 DFD and a level 2 DFD. **[2]**

**3.** State the name of the system flowchart symbol used for each of the following in a gym's weekly billing system.

**(a)** The members' master file stored on disk. **[1]**
**(b)** A set of invoices printed for all members. **[1]**
**(c)** The monthly backup of the master file on tape. **[1]**
**(d)** A warning message shown on the clerk's monitor. **[1]**

**4.** Describe the weekly billing process as a series of steps on a system flowchart, using these items: attendance data keyed in, calculate fees, master file on disk, printed invoices. Refer to the symbol for each step. **[4]**

**5.** Explain the difference between a data flow diagram and a system flowchart. **[2]**

**6.** The gym wants an on-screen joining form with these fields: title, first name, surname, date of birth, membership type (basic, standard or premium) and whether the member agrees to receive emails.

**(a)** For each of these three fields, state the best control to use and give a reason: membership type, agrees to emails, title. **[3]**
**(b)** State **two** validation checks that could be applied to the date of birth field and what each would check. **[2]**
**(c)** Describe **two** other features of a well-designed on-screen form. **[2]**
**(d)** The form is rejected when the surname field is empty. State the type of check and write a suitable error message. **[2]**

**7.** The manager wants a report of members whose membership has expired.

**(a)** Describe **three** features of a well-designed printed report layout. **[3]**
**(b)** Explain **one** reason why the manager might prefer the report on screen instead of printed. **[1]**

**8.** Describe the difference between validation and verification. **[2]**

## Answers

**1. (a)** One process representing the whole membership system [1]; the external entities Member and Manager [1]; labelled data flows such as joining form and payment from Member, membership card to Member, expiry list to Manager. [1] **[3]**
**(b)** Data stores (Members or Payments). [1] **[1]**
**(c)** The process reads member details (such as expiry dates) from the data store Members [1]; it produces a list of expired members [1] and sends it to the Manager. Each flow is labelled. [1] **[3]**
**(d)** Data cannot flow directly from an external entity into a data store [1]; the payment must go to the process "Take payment", which then writes the payment record to Payments. [1] **[2]**
*Examiner insight:* The correction needs both flows: Member to the process, and the process to the store.

**2.** Level 1 breaks the whole system into its main processes, with data stores [1]; level 2 breaks one of the level 1 processes into more detailed sub-processes. [1] **[2]**

**3. (a)** Magnetic disk file. [1]
**(b)** Multiple document output. [1]
**(c)** Magnetic tape file. [1]
**(d)** Display. [1] **[4]**

**4.** Attendance data keyed in: input/output symbol [1]. Calculate fees: process symbol [1], which reads from and updates the master file on disk (magnetic disk file symbol) [1]. Invoices produced: multiple document output symbol, joined by flow lines with arrowheads. [1] **[4]**
*Examiner insight:* Name the symbol with each step; a list of steps with no symbols scores few marks.

**5.** A DFD shows how data moves between processes, data stores and external entities (the logical flow) [1]; a system flowchart shows the hardware, files and documents that the data passes through, such as disk, tape, printout and screen. [1] **[2]**

**6. (a)** Membership type: radio buttons or drop-down list, because there are only three fixed choices and only one can be selected. [1]
Agrees to emails: a tick box, because the answer is yes or no. [1]
Title: a drop-down list, because the set of choices is fixed and it prevents spelling variations. [1] **[3]**
**(b)** Any two, one mark each: range check, the date must not be in the future and the age must be within an allowed range [1]; format check, the date must be in the format DD/MM/YYYY (or type check, must be a valid date). [1] **[2]**
**(c)** Any two: clear title or instructions; fields in a logical order; labels next to every field; prompts or default values such as date format; consistent layout and fonts; mark the required fields. [1 each] **[2]**
**(d)** Presence check [1]; for example "Surname is required. Please enter your surname." [1] **[2]**
*Examiner insight:* An error message should say what is wrong and how to fix it, not just "Invalid".

**7. (a)** Any three: a clear title [1]; date and page numbers [1]; column headings repeated on each page [1]; numbers aligned right and columns aligned [1]; header and footer [1]; margins so that nothing is cut off [1]. **[3]**
**(b)** Any one: the manager can sort or filter the list quickly [1]; no paper is used; the data is up to date. **[1]**

**8.** Validation is an automatic check that the data entered is reasonable (it cannot prove it is correct) [1]; verification checks that the data has been copied or entered accurately, such as by entering it twice or checking it against the source. [1] **[2]**

## Where marks are usually lost

- Showing data stores on level 0, or flows straight from entities to stores.
- Leaving data flows unlabelled.
- Using system flowchart symbols in a DFD answer.
- Naming a control without a reason that links to the field.
- Writing "accurate" where "reasonable" is the point of validation.
- Writing vague error messages such as "Wrong".

## Next steps

- Recap with the [revision notes](/resources/cambridge-a-level-ict-9626-design-revision-notes/).
- Reread the [study guide](/resources/cambridge-a-level-ict-9626-design/).
- Explore the [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) and the [printable 9626 checklist](/checklists/cambridge/a-level/ict/).
- Try all free 10-minute [diagnostics](/diagnostics/).
- [Book a free trial class](/trial/).

## Frequently asked questions

**Do I have to draw DFDs in Paper 3?**
The syllabus says candidates construct a system flowchart and a DFD using the correct symbols, so you should practise drawing them as well as describing them.

**What is the most common DFD mistake?**
Joining an external entity directly to a data store. Data must always pass through a process.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 4, Cambridge University Press & Assessment. Section 16.3: Design.
