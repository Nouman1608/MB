---
title: "Cambridge IGCSE ICT (0417): Manipulate data -- Practice Questions"
resourceType: "practice-questions"
subject: "ict"
level: ["igcse"]
topic: "Topic 18: Databases"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 18.2
syllabusTopics:
  - qualification: "igcse"
    topic: "databases-0417"
    subtopic: "manipulate-data-0417"
description: "Original questions with worked answers on calculated fields and controls, summary functions, sorting and queries with operators and wildcards, for 0417."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These questions cover section 18.2 **Manipulate data** of Cambridge IGCSE ICT 0417: calculated fields and controls, sum, average, maximum, minimum and count, single and multiple sorts, and queries using AND, OR, NOT, LIKE, comparison operators and wildcards. Most questions use the table below; every answer lists the records found.

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available through your school or
> Cambridge directly.

Related: [Manipulate data study guide](/resources/cambridge-igcse-ict-0417-manipulate-data/) · [Manipulate data revision notes](/resources/cambridge-igcse-ict-0417-manipulate-data-revision-notes/)

An invented music school stores lessons in a table called **Lessons**. Hours is a decimal number, RatePerHour is currency and Paid is Boolean.

| LessonID | Student | Instrument | Hours | RatePerHour | Paid |
|---|---|---|---|---|---|
| L1 | Amara | Piano | 2 | 18.00 | Yes |
| L2 | Ben | Guitar | 1.5 | 16.00 | No |
| L3 | Chloe | Piano | 1 | 18.00 | Yes |
| L4 | Dara | Violin | 3 | 20.00 | No |
| L5 | Ellis | Guitar | 2.5 | 16.00 | Yes |
| L6 | Farah | Drums | 2 | 17.50 | Yes |

---

## Section A: short answers

**1.** State the meaning of the operator `<>`. **[1]**

**2.** Which **one** of the following criteria would select lessons of at least 2 hours?

A: Hours > 2

B: Hours >= 2

C: Hours < 2

D: Hours <> 2

**[1]**

**3.** State the LessonIDs of the records selected by `Instrument = "Guitar" OR Instrument = "Violin"`. **[1]**

**4.** State the LessonIDs of the records selected by `Paid = No AND Hours >= 2`. **[1]**

**5.** State the LessonIDs of the records selected by `NOT Instrument = "Piano"`. **[1]**

**6.** State the wildcard that, in many database packages, stands for exactly one character. **[1]**

---

## Section B: structured questions

**7.** The school wants to see the cost of each lesson.

**(a)** Write a calculated field called *Cost* that multiplies Hours by RatePerHour. **[1]**

**(b)** Calculate the Cost for each of L2, L4 and L6. **[3]**

**(c)** Explain why Cost should be a calculated field in a query and not a field typed into the table. **[2]**

**8.** A report based on the Lessons table and the Cost field has calculated controls in its report footer.

**(a)** Give the expression for a control that shows the total of Cost. **[1]**

**(b)** State the values shown by controls for the sum, average, maximum and minimum of Cost, and the count of LessonID. **[5]**

**9.** The query `Instrument LIKE "*i*"` is run.

**(a)** State the LessonIDs selected. **[1]**

**(b)** A user expected only the violin lesson. Explain why the result is different. **[2]**

**10.** State the LessonIDs selected by `Student LIKE "?e*"`, and explain your answer. **[2]**

**11.** The Lessons table is sorted by Instrument in ascending order, then by Hours in descending order.

**(a)** State the order of the LessonIDs after the sort. **[2]**

**(b)** Explain why sorting by Hours first and then Instrument would give a different order. **[1]**

**12.** The head of the school asks: "Show me the paid lessons that are either piano or longer than 2 hours."

**(a)** Write the criteria for this query. **[2]**

**(b)** State the LessonIDs selected. **[1]**

**(c)** Explain how the result would change if the brackets were left out and AND were applied first. **[2]**

**13.** A report must show the number of paid lessons and their average Cost. State the two values. **[2]**

---

## Answers

**1.** Not equal to. **[1]**

**2.** B: Hours >= 2. **[1]**

**3.** L2, L4, L5. **[1]**

**4.** L4 (L2 is unpaid but only 1.5 hours). **[1]**

**5.** L2, L4, L5, L6. **[1]**

**6.** `?` (in some packages, `_`). **[1]**

**7. (a)** `Cost: [Hours]*[RatePerHour]`. **[1]**

**(b)** 1 mark each: L2: 1.5 × 16.00 = 24.00 (1); L4: 3 × 20.00 = 60.00 (1); L6: 2 × 17.50 = 35.00 (1). **[3]**

**(c)** It is worked out from data already stored, so storing it again would repeat data (1); a calculated field is recalculated each time the query runs, so it is always correct if Hours or RatePerHour changes, whereas a typed value could become wrong (1). **[2]**

**8. (a)** `=Sum([Cost])`. **[1]**

**(b)** Costs are 36.00, 24.00, 18.00, 60.00, 40.00, 35.00. 1 mark each: sum 213.00 (1); average 213 ÷ 6 = 35.50 (1); maximum 60.00 (1); minimum 18.00 (1); count 6 (1). **[5]**

**9. (a)** L1, L2, L3, L4, L5. **[1]**

**(b)** `*i*` matches an *i* anywhere in the value (1), so Piano, Guitar and Violin all contain *i* and are selected; only Drums does not (1). **[2]**

**10.** L2 (1): `?` matches exactly one character and `e` must be the second letter, followed by anything; only *Ben* has *e* as its second letter (1). **[2]**

**11. (a)** L6, L5, L2, L1, L3, L4 (2 marks for the fully correct order; 1 mark if the instruments are in the right order but Hours within an instrument are not). **[2]**

**(b)** The first sort field decides the main order, so the lessons would be ordered by Hours from longest to shortest, with Instrument used only to separate lessons of equal length. **[1]**

**12. (a)** Paid = Yes (1) AND (Instrument = "Piano" OR Hours > 2) (1). **[2]**

**(b)** L1, L3, L5. **[1]**

**(c)** Without brackets the query becomes (Paid = Yes AND Instrument = "Piano") OR Hours > 2 (1), so L4, which is unpaid but 3 hours long, would also be selected (1). **[2]**

**13.** Paid lessons: L1, L3, L5, L6, so the count is 4 (1); their costs are 36.00, 18.00, 40.00 and 35.00, total 129.00, so the average is 129 ÷ 4 = 32.25 (1). **[2]**

## Frequently asked questions

**Does the syllabus require a particular wildcard symbol?**
The syllabus says "perform searches using wildcards". Learn what your software uses: in many packages `*` means any number of characters and `?` one character.

**Should I show the query design or just the results?**
In the practical paper, show both, because marks are usually given for the criteria and sort settings as well as the records produced.

## Official syllabus

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Version 3, Topic 18 "Databases", 18.2 Manipulate data.
