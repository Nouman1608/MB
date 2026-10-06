---
title: "Cambridge A Level Information Technology (ICT): Mail merge (9626) -- Practice Questions"
seoTitle: "Cambridge A Level ICT 9626 Mail Merge Practice Questions"
resourceType: "practice-questions"
subject: "ict"
level: ["a-levels"]
topic: "Mail merge"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 18
syllabusTopics:
  - qualification: "a-level"
    topic: "mail-merge"
description: "Original practice questions with worked answers for Cambridge A Level IT 9626 Mail merge, from custom labels to Ask fields and recipient rules."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover **topic 18, Mail merge** (section 18.1) of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 3). It is **A Level only** content. The syllabus bases Paper 3 (Advanced Theory) questions on sections 12–21 and Paper 4 (Advanced Practical) tasks on sections 17–21, so mail merge can appear in both. Every question can be answered on paper, and the arithmetic works by hand (calculators are not allowed in Paper 3).

Learn the content first in the [mail merge study guide](/resources/a-level-cambridge-ict-mail-merge/) and the [mail merge revision notes](/resources/a-level-cambridge-ict-mail-merge-revision-notes/). Course hub: [Cambridge A Level IT](/boards/cambridge/a-level/ict/). Checklist: [9626 checklist](/checklists/cambridge/a-level/ict/). Find your weak spots with a [free 10-minute diagnostic](/diagnostics/).

Answers show one acceptable set of points, with a [1] per creditworthy point. This is indicative marking, not an official mark scheme.

## Questions

**1.** Explain the difference between a master document and a data source in a mail merge. **[2]**

**2.** A college sends a results letter to each of its 600 students. Explain why it uses mail merge rather than typing each letter. **[3]**

**3.** A sports club's membership spreadsheet will be the data source for a mail merge. It has one column headed "Name" holding entries such as "Mr Ali Raza", one column holding the whole address in a single cell, and blank rows between groups of members. Describe the changes needed before it is used for the merge. **[4]**

**4.** A non-standard A4 label sheet measures 210 mm × 297 mm. Each label is 64 mm wide and 37 mm high. There are 3 labels across and 7 down, with a 3 mm gap between columns and a 2 mm gap between rows. The labels are centred on the sheet.

**(a)** Calculate the horizontal pitch and the vertical pitch. **[2]**
**(b)** Calculate the side margin and the top margin. Show your working. **[2]**
**(c)** 230 address labels are to be printed. Calculate how many sheets are needed and how many labels are printed on the last sheet. **[2]**

**5.** A leisure centre wants one printed list of all its coaches, showing each coach's name, sport and phone number.

**(a)** State the type of master document that should be used. **[1]**
**(b)** Explain why a letter master document would not be suitable. **[1]**
**(c)** Explain where the heading "Coach contact list" should be placed. **[1]**

**6.** For each item in a merged letter, state the most suitable type of field.

**(a)** "Page 2 of 3" in the footer **[1]**
**(b)** The author's name taken from the file's information **[1]**
**(c)** The date on which the letters are merged **[1]**
**(d)** The customer's surname **[1]**

**7.** A school merges a letter to parents about a trip. The trip date must appear twice in every letter and is the same for all parents. Each letter also needs a short comment from the form tutor about that student.

**(a)** Identify the field type you would use for the trip date and how often it should prompt. Give a reason. **[3]**
**(b)** Identify the field type you would use for the tutor's comment and how often it should prompt. **[2]**
**(c)** Write a suitable prompt for the trip date and explain one feature that makes it suitable. **[2]**

**8.** A tennis club's data source is shown below. Plan fees are 90 for Gold and 60 for Silver. Members of 5 or more years get 20% off.

| MemberID | Surname | City | Years | Plan | Owed |
|---|---|---|---|---|---|
| A101 | Lee | Lahore | 3 | Gold | 120 |
| A102 | Shah | Karachi | 6 | Silver | 0 |
| A103 | Mills | Lahore | 7 | Gold | 45 |
| A104 | Raza | Lahore | 1 | Silver | 30 |
| A105 | Noor | Islamabad | 5 | Gold | 60 |
| A106 | Hart | Lahore | 5 | Silver | 0 |
| A107 | Aziz | Lahore | 9 | Gold | 15 |
| A108 | Bell | Karachi | 2 | Gold | 75 |

**(a)** Describe the logic of the field or fields that would show each member's renewal fee in the letter. **[3]**
**(b)** Calculate the renewal fee shown for Mills, Hart and Bell. **[3]**

**9.** Use the data source in question 8.

**(a)** Reminder letters use the filter City = "Lahore" AND Owed > 0. List the MemberIDs selected. **[2]**
**(b)** The selected records are sorted by Owed, largest first. State the order of the surnames. **[1]**
**(c)** Explain why using OR instead of AND would be wrong, naming one record that would be wrongly included. **[2]**
**(d)** A separate long-service letter uses no filter but contains Skip Record If Years < 5. State the surnames of the members who receive this letter. **[2]**

**10.** Explain the difference between Skip Record If and Next Record If, and why Next Record If is less reliable for excluding recipients. **[4]**

**11.** A charity sends an annual appeal letter to 4,000 supporters. The master document contains an embedded chart of money raised this year. Some supporters have asked not to be contacted, some appear twice in the data source, and some have already donated this year. Explain why rules should be specified for selecting and excluding recipients in this merge, and the effect of embedding the chart rather than linking it. **[8]**

## Answers

**1.** The master document holds the fixed text and layout that are the same in every copy, with merge fields marking where data goes. [1] The data source holds the data that changes, as records (one per recipient) and fields with field names. [1] **[2]**
*Examiner insight:* State what each file contains; "one is a letter and one is a database" is too vague to be creditworthy.

**2.** The fixed text and layout are written once instead of 600 times, saving time. [1] Names and results come from stored data, so there are no retyping errors. [1] Every letter has the same layout and wording, which looks professional. [1] **[3]**
*Examiner insight:* "Quicker" on its own is a weak point; give the reason and link it to this context, such as 600 letters or stored results.

**3.** Split "Name" into separate Title, Forename and Surname fields, [1] so a salutation such as "Dear Mr Raza" can use the surname alone. [1] Split the address into separate fields, such as Address1, Town and Postcode. [1] Delete the blank rows so every row is one record. [1] **[4]**
*Examiner insight:* "Describe the changes" needs each change stated precisely; "tidy the data" with no named fields scores nothing.

**4. (a)** Horizontal pitch = 64 + 3 = **67 mm**. [1] Vertical pitch = 37 + 2 = **39 mm**. [1]
**(b)** Width used = 3 × 64 + 2 × 3 = 198, so side margin = (210 − 198) ÷ 2 = **6 mm**. [1] Height used = 7 × 37 + 6 × 2 = 271, so top margin = (297 − 271) ÷ 2 = **13 mm**. [1]
**(c)** 3 × 7 = 21 labels per sheet; 230 ÷ 21 = 10.95, so **11 sheets**. [1] The last sheet has 230 − 210 = **20 labels**. [1] **[6]**
*Examiner insight:* There is one fewer gap than labels in each direction; using 3 gaps across or 7 gaps down gives wrong margins, and the sheet count must be rounded up.

**5. (a)** A **directory** (catalogue). [1]
**(b)** A letter merge produces a separate document or page for each coach, not one list. [1]
**(c)** Outside the repeating part, added after merging, otherwise it is repeated above every coach. [1] **[3]**
*Examiner insight:* Part (b) must say what goes wrong (one page per record); "it is the wrong type" restates the question.

**6. (a)** Document field (page number and number of pages). [1]
**(b)** Document property. [1]
**(c)** Date/time field. [1]
**(d)** Merge field (Surname). [1] **[4]**
*Examiner insight:* "Field" alone is not enough; each answer needs the specific field type named in the syllabus.

**7. (a)** An **Ask** field, [1] set to prompt **once** for the whole merge, [1] because its stored answer can be shown in both places, and every parent gets the same date. [1]
**(b)** A **Fill-in** field (or an Ask field shown where it is placed) [1] that prompts **for each record**, as each comment is different. [1]
**(c)** "Enter the trip date as day, month name and year (e.g. 18 May 2027)". [1] It shows the format with an example, so every date is entered the same way and cannot be misread. [1] **[7]**
*Examiner insight:* A bare "Enter date" is too vague; the prompt must tell the user exactly what to type and in which format.

**8. (a)** A condition tests Plan: IF «Plan» = "Gold" THEN fee 90 ELSE fee 60. [1] A second condition tests Years: IF «Years» >= 5 THEN multiply the fee by 0.8 (20% off) ELSE leave it. [1] The result is inserted with a formula field formatted as a number, so it is calculated for each record. [1]
**(b)** Mills: Gold, 7 years → 90 × 0.8 = **72**. [1] Hart: Silver, 5 years → 60 × 0.8 = **48**. [1] Bell: Gold, 2 years → **90**. [1] **[6]**
*Examiner insight:* The boundary matters: Hart has exactly 5 years, so >= is needed; a condition written with > gives Hart the wrong fee of 60.

**9. (a)** **A101, A103, A104, A107**. [1] [1]
**(b)** **Lee, Mills, Raza, Aziz**. [1]
**(c)** OR selects records meeting either condition, adding Lahore members who owe nothing and members elsewhere who owe money. [1] For example A106 Hart (Lahore, owes 0) or A108 Bell (Karachi, owes 75). [1]
**(d)** **Shah, Mills, Noor, Hart, Aziz**. [1] [1] **[7]**
*Examiner insight:* For (a) and (d), check every row against every condition; one missed or extra record makes the list wrong.

**10.** Skip Record If tests a condition and, if it is true, produces no copy for that record. [1] Next Record If tests a condition and, if it is true, moves on to the next record within the same merged document. [1] Next Record If moves on only one record each time it is tested; [1] the new record is not tested, so if two matching records are next to each other the second is still used. [1] **[4]**
*Examiner insight:* "Explain the difference" needs both fields described, not just one; saying Next Record If "deletes" a record is wrong.

**11.** Selecting rules: a filter (for example Donated this year = "No") sends the appeal only to supporters who have not yet given, [1] which avoids annoying people who have already given and saves printing and postage. [1] Sorting by postcode lets letters be bundled for posting. [1] Excluding: supporters who asked not to be contacted must be excluded, by deselecting them or with Skip Record If on a contact field, [1] because contacting them ignores their request and data protection rules, harming the charity's reputation. [1] Duplicate records should be removed or excluded so no one receives two letters, [1] which saves cost and looks professional. [1] Embedding stores a copy of the chart in the master, so every letter shows the same chart even if the spreadsheet is later edited; a linked chart would update from its file. [1] **[8]**
*Examiner insight:* Each "why" must be tied to the charity's situation; a list of sort, filter and exclude with no reasons does not answer "explain".

## Where marks are usually lost

- Forgetting there is one fewer gap than labels in a row or column.
- Rounding label sheets down.
- Naming "a field" instead of the specific field type.
- Mixing up Fill-in and Ask, or not saying whether the prompt runs once or per record.
- Writing > where the rule says "5 or more".
- Using OR where both conditions must be true.
- Saying Next Record If deletes or permanently skips a record.

## Next steps

- [Mail merge revision notes](/resources/a-level-cambridge-ict-mail-merge-revision-notes/)
- [Mail merge study guide](/resources/a-level-cambridge-ict-mail-merge/)
- [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) and [9626 checklist](/checklists/cambridge/a-level/ict/)
- [All free 10-minute diagnostics](/diagnostics/)
- [Book a free trial class](/trial/)

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, version 3 (published July 2025), Cambridge International, part of Cambridge University Press & Assessment. Topic 18, Mail merge, section 18.1.
