---
title: "O Level Computer Science: Databases — Practice Questions (Cambridge 2210)"
resourceType: "practice-questions"
subject: "computer-science"
level: ["o-levels"]
topic: "Databases"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 9
syllabusTopics:
  - qualification: "o-level"
    topic: "databases-2210"
description: "Original exam-style questions with full worked answers on fields, records and primary keys, choosing data types for fields, and writing and reading SQL using SELECT, FROM, WHERE, ORDER BY, SUM and COUNT, for Cambridge O Level Computer Science (2210)."
author: "marlbridge-academic-team"
publishedDate: 2026-09-24
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Each question practises a skill tested in the June 2025 Paper 22. After each answer there is a mark-scheme insight or a tip and, where one matches, the real question to try next.

---

## Questions

**1.** A vet's clinic stores data about the animals it treats in a database called Pet. Each record has the fields PetID (a unique code such as P01), PetName, Species, OwnerSurname, WeightKg (the weight in kg, to one decimal place), Vaccinated (whether or not the animal is fully vaccinated) and Visits (the number of visits so far this year). The database holds these records: P01 is Biscuit, a dog owned by Khan, 12.4 kg, vaccinated, 3 visits; P02 is Misty, a cat owned by Ahmed, 4.1 kg, not vaccinated, 1 visit; P03 is Rocky, a dog owned by Silva, 31.0 kg, vaccinated, 2 visits; P04 is Pepper, a cat owned by Okafor, 3.6 kg, vaccinated, 4 visits; P05 is Nibbles, a rabbit owned by Khan, 1.8 kg, not vaccinated, 2 visits; P06 is Bruno, a dog owned by Ahmed, 24.5 kg, not vaccinated, 5 visits.

**(a)** State how many fields and how many records the Pet database holds.

**(b)** Identify the most suitable primary key for Pet and explain why OwnerSurname would not be suitable as the primary key. **[4]**

**2.** A vet's database called Pet has the fields PetID (a unique code such as P01), PetName, Species, OwnerSurname, WeightKg (the weight in kg, to one decimal place), Vaccinated (whether or not the animal is fully vaccinated) and Visits (the number of visits so far this year). The Species field holds values such as Dog, Cat and Rabbit. State the most suitable data type for each of these fields: WeightKg, Vaccinated, Species and Visits. **[2]**

**3.** A vet's database called Pet has the fields PetID, PetName, Species, OwnerSurname, WeightKg, Vaccinated and Visits. The Species field holds values such as 'Dog', 'Cat' and 'Rabbit'. Write an SQL statement to list only the pet name and the owner's surname of every dog in Pet. **[4]**

**4.** A vet's database called Pet has the fields PetID, PetName, Species, OwnerSurname, WeightKg (the weight in kg, to one decimal place), Vaccinated and Visits. Write an SQL statement to list the PetID and weight of every animal that weighs more than 20 kg, with the heaviest animal first. **[4]**

**5.** A vet's database called Pet has the fields PetID, PetName, Species, OwnerSurname, WeightKg, Vaccinated and Visits. Species values are stored as 'Dog', 'Cat' and 'Rabbit', and Vaccinated is TRUE or FALSE. It holds six records: P01 is Biscuit, a dog owned by Khan, 12.4 kg, vaccinated, 3 visits; P02 is Misty, a cat owned by Ahmed, 4.1 kg, not vaccinated, 1 visit; P03 is Rocky, a dog owned by Silva, 31.0 kg, vaccinated, 2 visits; P04 is Pepper, a cat owned by Okafor, 3.6 kg, vaccinated, 4 visits; P05 is Nibbles, a rabbit owned by Khan, 1.8 kg, not vaccinated, 2 visits; P06 is Bruno, a dog owned by Ahmed, 24.5 kg, not vaccinated, 5 visits. State the output of each SQL statement.

**(a)** `SELECT COUNT(*) FROM Pet WHERE Vaccinated = TRUE;`

**(b)** `SELECT SUM(Visits) FROM Pet WHERE Species = 'Dog';`

**(c)** `SELECT PetName FROM Pet WHERE WeightKg < 5 ORDER BY PetName;` **[3]**

---

## Answers

**1.** **(a)** **7 fields** [1] and **6 records** [1]. **(b)** **PetID** [1]. OwnerSurname is not unique: for example, Khan owns both Biscuit and Nibbles, so the surname cannot identify one record on its own [1].

*Tip:* A primary key must hold a different value in every record. Look for repeated values in the data you are given to rule out other fields.

**2.** WeightKg: **real**; Vaccinated: **Boolean**; Species: **text**; Visits: **integer**. All four correct [2]; two or three correct [1].

*Mark-scheme insight (June 2025):* The same banding was used: two marks for all four fields correct, one mark for two or three. An identifier field was accepted as either integer or text, because the right type depends on what the values look like, so base your choice on the data given.

*Try the real question next:* Cambridge O Level Computer Science 2210, June 2025, Paper 22, Question 9.

**3.**

```
SELECT PetName, OwnerSurname
FROM Pet
WHERE Species = 'Dog';
```

Both correct fields, and only those, after SELECT [1]; FROM Pet [1]; the correct field Species in the WHERE clause [1]; the correct criterion 'Dog' in quotation marks [1].

*Mark-scheme insight (June 2025):* Each part of the statement earned its own mark: the fields after SELECT, the keyword FROM, the field in WHERE and the criterion. A text criterion was accepted in either single or double quotation marks.

*Try the real question next:* Cambridge O Level Computer Science 2210, June 2025, Paper 22, Question 9.

**4.**

```
SELECT PetID, WeightKg
FROM Pet
WHERE WeightKg > 20
ORDER BY WeightKg DESC;
```

PetID and WeightKg after SELECT and FROM Pet [1]; WHERE WeightKg > 20 [1]; ORDER BY WeightKg [1]; DESC so the heaviest comes first [1]. (With the six records given in Question 5, this would list P03, 31.0 and then P06, 24.5.)

*Tip:* A numeric criterion is written without quotation marks, and ORDER BY sorts in ascending order unless you add DESC.

*Try the real question next:* Cambridge O Level Computer Science 2210, June 2025, Paper 22, Question 9.

**5.** **(a)** **3** (P01, P03 and P04 are vaccinated) [1]. **(b)** **10** (the dogs have 3 + 2 + 5 visits) [1]. **(c)** **Misty, Nibbles, Pepper**: the animals under 5 kg are Misty (4.1), Pepper (3.6) and Nibbles (1.8), listed in alphabetical order of name [1].

*Tip:* Work through the records one at a time, first picking out those that meet the WHERE condition, and only then apply COUNT, SUM or ORDER BY to that smaller set.

---

## Where marks are usually lost

- Listing extra fields after SELECT (or using SELECT \*) when the question asks for only some fields.
- Leaving out FROM and the name of the database, or putting the wrong field in the WHERE clause.
- Forgetting quotation marks around a text criterion, or putting them around a number.
- Choosing text for a field that only ever holds numbers, or integer for a value with decimal places.
- Forgetting DESC when the largest value must come first.
