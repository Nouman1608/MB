---
title: "IGCSE ICT: Databases — Practice Questions"
resourceType: "practice-questions"
subject: "ict"
level: ["igcse"]
topic: "Topic 18: Databases"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 18
syllabusTopics:
  - qualification: "igcse"
    topic: "databases-0417"
  - qualification: "igcse"
    topic: "databases-0417"
    subtopic: "create-a-database-structure-0417"
  - qualification: "igcse"
    topic: "databases-0417"
    subtopic: "manipulate-data-0417"
  - qualification: "igcse"
    topic: "databases-0417"
    subtopic: "present-data-0417"
description: "Original exam-style database questions with worked answers on data types, keys, relational tables, forms, queries and reports for Cambridge IGCSE ICT 0417."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

These questions cover Cambridge IGCSE ICT 0417 Topic 18: creating a database structure (18.1), manipulating data (18.2) and presenting data (18.3). Theory points such as keys, flat-file and relational databases and form design appear in Paper 1; the practical skills are tested in Paper 2, so Section C sets practical-style tasks.

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available through your school or
> Cambridge directly.

Related: [Databases revision notes](/resources/cambridge-igcse-ict-databases-revision-notes/) · [Databases study guide](/resources/cambridge-igcse-ict-databases-study-guide/)

---

## Section A: short answers

**1.** State what is meant by a *primary key*. **[1]**

**2.** Give the most suitable data type for each field: *TelephoneNumber*, *DateJoined*, *MembershipFee*, *Paid*. **[4]**

**3.** State what the wildcard criterion `LIKE "*ton"` would find in a Town field. **[1]**

---

## Section B: structured questions

**4.** A library stores data in two tables.

*Books*: BookID, Title, Author, Genre
*Loans*: LoanID, BookID, MemberID, DateOut

**(a)** Identify the primary key of the *Books* table. **[1]**
**(b)** Identify the foreign key in the *Loans* table that links it to *Books*, and explain how it creates the relationship. **[2]**
**(c)** Explain two advantages of storing this data in a relational database rather than a single flat file. **[4]**

**5.** A data entry form is being designed for new library members.

**(a)** Describe three features of good form design. **[3]**
**(b)** Membership type can be Adult, Child or Senior. Explain why a drop-down menu or radio buttons should be used for this field. **[2]**

**6.** A shop's *Products* table has the fields ProductName, Category, Price, StockLevel.

**(a)** Write the criteria to find products in the *Garden* category that cost less than $15. **[2]**
**(b)** Write the criteria to find products whose category is *Garden* or *Kitchen*. **[2]**
**(c)** Write the criterion to find all products not in the *Toys* category. **[1]**
**(d)** Describe how to sort the results by Category ascending and then by Price descending. **[2]**

**7.** A report is produced from the *Products* table.

**(a)** State where each item should appear: the title *Stock Report*; the column headings; the page number; the total value of all stock. **[4]**
**(b)** Describe how the Price field should be formatted and aligned. **[2]**

---

## Section C: practical-style tasks

**8.** Import a .csv file of products. Set ProductID as the primary key, Price as currency with 2 decimal places and InStock as a Boolean field displayed as a checkbox. **[4]**

**9.** Create a query that shows only products where InStock is true and the ProductName begins with "S", with a calculated field *VAT* equal to Price × 0.2. Sort by ProductName A–Z. **[5]**

**10.** Produce a tabular report from the query with the title *S Products in Stock*, all labels and data fully visible, prices right-aligned, and the average price shown at the end of the report. **[4]**

---

## Worked answers

**1.** A field that holds a unique value for every record, used to identify each record. **[1]**

**2.** TelephoneNumber: text (1); DateJoined: date/time (1); MembershipFee: currency (numeric) (1); Paid: Boolean/logical (1). **[4]**

**3.** All towns whose names end in "ton", for example Brighton or Luton. **[1]**

**4. (a)** BookID. **[1]**
**(b)** BookID (in *Loans*) (1); it holds the primary key values of *Books*, so each loan record can be matched to exactly one book record (1). **[2]**
**(c)** Two explained advantages, 2 marks each:
- Less duplicated data (1): book titles and authors are stored once, not on every loan, saving storage (1).
- Fewer inconsistencies (1): a change, such as correcting an author's name, is made in one place and applies to every related loan (1).
- More flexible queries (1): data from both tables can be combined, for example listing all loans by genre (1). **[4]**

**5. (a)** Any three: fields in a logical order matching the paper form; clear labels next to each field; appropriate font style and size; sensible spacing and white space; field boxes sized to fit the data; a clear title and instructions; navigation or save buttons. **[3]**
**(b)** The user chooses from fixed options instead of typing (1), so spelling errors and invalid values are avoided and data entry is faster (1). **[2]**

**6. (a)** Category: ="Garden" (1) AND Price: <15 (in the same criteria row) (1). **[2]**
**(b)** Category: ="Garden" OR ="Kitchen" (1 mark for both values, 1 mark for using OR). **[2]**
**(c)** Category: NOT "Toys" (or <>"Toys"). **[1]**
**(d)** Set Category as the first sort field, ascending (1), and Price as the second sort field, descending (1). **[2]**

**7. (a)** Title: report header (1); column headings: page header (1); page number: page footer (1); total value: report footer (1). **[4]**
**(b)** Currency format with the symbol and 2 decimal places (1), right-aligned (decimal aligned) so the values line up (1). **[2]**

**8.** 1 mark each: data imported with correct field names; ProductID set as primary key; Price is currency with 2 decimal places; InStock is Boolean displayed as a checkbox. **[4]**

**9.** 1 mark each: InStock = true (Yes); ProductName `LIKE "S*"`; both criteria applied together (AND); calculated field VAT = Price × 0.2 correctly named; sorted by ProductName ascending. **[5]**

**10.** 1 mark each: tabular layout with title *S Products in Stock* in the report header; all labels and data fully visible; prices right-aligned; average price calculated in the report footer. **[4]**

## Frequently asked questions

**Why is a telephone number stored as text?**
It may begin with 0 or contain spaces or a plus sign, and it is never used in calculations. A numeric field would drop leading zeros.

**What is the difference between a calculated field and a calculated control?**
A calculated field is created in a query and calculates a value for each record. A calculated control is placed on a form or report, for example to show a total or average.

## Official syllabus

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Version 3, Topic 18 "Databases" (18.1 Create a database structure, 18.2 Manipulate data, 18.3 Present data).
