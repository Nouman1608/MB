---
title: "Cambridge A Level Information Technology (9626): Data dictionary -- Practice Questions"
resourceType: "practice-questions"
subject: "ict"
level: ["a-levels"]
topic: "Topic 10 – Database and file concepts"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 10.3
syllabusTopics:
  - qualification: "a-level"
    topic: "database-and-file-concepts"
  - qualification: "a-level"
    topic: "database-and-file-concepts"
    subtopic: "data-dictionary"
description: "Eleven original Cambridge 9626 IT section 10.3 questions with answers on data types, data dictionary components and completing a dictionary."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs; examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Data dictionary study guide](/resources/cambridge-a-level-ict-9626-data-dictionary/) | [Data dictionary revision notes](/resources/cambridge-a-level-ict-9626-data-dictionary-revision-notes/)

These questions are for **section 10.3 Data dictionary** (Topic 10, AS Level) of Cambridge International AS & A Level Information Technology (9626), 2025–2027. All organisations are invented.

---

## Section A

**1.** State the purpose of a data dictionary. **[2]**

**2.** Name the most suitable data type for each item.

**(a)** The number of tickets sold. **[1]**

**(b)** The price of a ticket in pounds and pence. **[1]**

**(c)** Whether a customer wants a receipt (yes or no). **[1]**

**(d)** A customer's date of birth. **[1]**

**3.** State **three** components that can be included in a data dictionary for a field. **[3]**

**4.** Explain why a telephone number should be stored as text and not as a number. **[2]**

## Section B

**5.** Wynford Vets stores data about animals. For each animal it records:

- a patient code of three letters followed by three digits (such as `DOG204`);
- the animal's name, up to 20 characters;
- the date of its last visit;
- its weight in kilograms to one decimal place;
- whether it has been vaccinated (yes or no).

Complete a data dictionary for these fields. Include the field name, data type, field size or format and a validation rule for each field. State which field is the primary key. **[11]**

**6.** For each field, name the validation check that is most suitable and describe what it checks.

**(a)** `Weight` in kilograms, which must be between 0.1 and 120. **[2]**

**(b)** `PatientCode`, which must be six characters. **[2]**

**(c)** `Species`, which must be one of Dog, Cat, Rabbit or Bird. **[2]**

**7.** A student writes "Number" as the data type for a postcode field and "Text" as the data type for the date of a visit. Explain why both choices are poor. **[4]**

**8.** Describe **three** benefits of creating a data dictionary before building a database. **[3]**

**9.** A data dictionary entry says: Field name `Discount`; Data type Percentage; Range 0% to 40%; Default 0%. Explain what each of the data type, the range and the default means for a user entering data. **[3]**

**10.** Explain the difference between a data dictionary and the database it describes. **[2]**

**11.** Discuss whether a small business with one simple table needs a data dictionary. **[4]**

---

## Answers

**1.** It describes the structure of a database or file [1], listing each field with properties such as its data type, size and validation rule, to guide design, building and maintenance [1]. **[2]**

**2. (a)** Integer [1].

**(b)** Currency [1].

**(c)** Boolean [1].

**(d)** Date [1]. **[4]**

**3.** Any three from: field name [1]; data type [1]; field size [1]; format [1]; validation rule [1]; whether the field is required [1]; default value [1]; key [1]; description [1]. **[3]**

**4.** A telephone number is not used in calculations [1], and it may begin with a zero or contain a plus sign or spaces, which a numeric field would remove or reject [1]. **[2]**

**5.** One mark each for the following, to a maximum of eleven:

| Field name | Data type | Size or format | Validation |
|---|---|---|---|
| PatientCode (primary key) | Alphanumeric | 6, format `AAA999` | Format check and length check |
| AnimalName | Text | 20 | Presence check |
| LastVisit | Date | `dd/mm/yyyy` | Limit check: not in the future |
| Weight | Decimal | 1 decimal place | Range check: more than 0 |
| Vaccinated | Boolean | Yes/No | None needed |

Allocation: correct field names [1]; PatientCode alphanumeric with size 6 or format [2]; AnimalName text with size 20 [2]; LastVisit date type and a suitable validation rule [2]; Weight decimal with one decimal place and a suitable rule [2]; Vaccinated Boolean [1]; primary key identified as PatientCode [1]. **[11]**

**6. (a)** Range check [1] that the value lies between the lower limit of 0.1 and the upper limit of 120 [1].

**(b)** Length check [1] that the code has exactly six characters [1].

**(c)** Lookup check [1] that the value matches one of the items in the list of allowed values [1]. **[6]**

**7.** A postcode contains letters and digits, so it cannot be stored as a number (it should be alphanumeric or text) [1], and it is not used in calculations [1]. A date stored as text cannot be sorted into time order or used in calculations such as the time since the last visit [1], and it can be typed in different formats [1]. **[4]**

**8.** Any three from: it gives one agreed description, so everyone builds and uses the database in the same way [1]; it shows what is missing before building starts [1]; it helps testers to know what each field should accept [1]; it makes later changes easier for people who did not build the database [1]; it guides data entry through formats and rules [1]. **[3]**

**9.** Data type: the value is a percentage, so the user enters a share such as 15% [1]. Range: values below 0% or above 40% are rejected [1]. Default: if the user enters nothing, the value is 0% [1]. **[3]**

**10.** The data dictionary describes the structure of the data (fields and their properties) [1]; the database holds the actual data values [1]. **[2]**

**11.** For: even a small table benefits from clear field types and rules, which reduces errors [1]; if someone else takes over, it explains the database [1]. Against: for a very small table it may take longer to write than the value it brings [1]; it must be kept up to date, or it becomes misleading [1]. (Any four points, or two for and two against, with a judgement for full marks.) **[4]**

## Where marks are usually lost

- Choosing a numeric type for telephone numbers or postcodes.
- Choosing text for dates or yes/no data.
- Giving a field size as a word instead of a number.
- Naming a validation rule without naming the check.
- Forgetting to identify the primary key.
