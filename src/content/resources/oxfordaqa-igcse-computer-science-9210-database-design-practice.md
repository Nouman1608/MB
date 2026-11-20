---
title: "OxfordAQA IGCSE Computer Science (9210): Database design -- Practice Questions"
seoTitle: "OxfordAQA IGCSE CS 9210 Database Design Practice"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 7: Relational databases and structured query language (SQL)"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 7.02
syllabusTopics:
  - qualification: "igcse"
    topic: "relational-databases-and-sql"
  - qualification: "igcse"
    topic: "relational-databases-and-sql"
    subtopic: "database-design-9210"
description: "Original OxfordAQA IGCSE Computer Science 9210 practice questions with answers on choosing data types, primary keys and designing databases of up to three tables."
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

Related: [Database design study guide](/resources/oxfordaqa-igcse-computer-science-9210-database-design/) | [Database design revision notes](/resources/oxfordaqa-igcse-computer-science-9210-database-design-revision-notes/)

These questions cover section 3.7.2 Database design of the OxfordAQA International GCSE Computer Science (9210)
specification. Table designs are written in the form TableName (Field1, Field2, ...) and the primary key is
underlined, shown here with the tags `<u>` and `</u>` around the field name.

---

## Section A

**1.** State the most suitable data type for each field.

**(a)** the telephone number of a customer **[1]**

**(b)** the price of a ticket **[1]**

**(c)** whether a member has paid their fee **[1]**

**(d)** the number of seats booked **[1]**

**2.** State what is meant by the length of a text field, and give a suitable length for a field that holds a
surname. **[2]**

**3.** A table called Member has the fields MemberID, Surname, Town and DateJoined. State which field is the most
suitable primary key, and explain why the other fields are not suitable. **[3]**

## Section B

**4.** A vet's surgery stores data about pets and their owners. For each owner it records the name and the
telephone number. For each pet it records the name, the type of animal, the date of birth and the owner. An owner may have
several pets, but each pet has one owner.

**(a)** Write a design for the database as two tables. Underline each primary key by using `<u>` and `</u>`. **[5]**

**(b)** State the foreign key and the table that it is in. **[2]**

**(c)** Explain why the owner's telephone number is not stored in the Pet table. **[2]**

**5.** A film club holds showings of films. Members book seats for showings. The club records each member's name and
email address, each film's title, year and age rating, and each booking: the member, the film, the date of the showing
and the number of seats.

**(a)** State how many tables are needed and name them. **[2]**

**(b)** Write a design for each table, underlining each primary key with `<u>` and `</u>`. **[4]**

**(c)** Identify the foreign keys. **[2]**

**(d)** State the data type for each field in the table that holds the bookings. **[3]**

**6.** A student designs a table for a school canteen.

Order (<u>OrderID</u>, PupilName, PupilForm, MealName, MealPrice, Quantity, TotalCost)

**(a)** Identify two problems caused by this design. **[2]**

**(b)** Write a better design using three tables. **[4]**

**7.** Explain why the primary key for a table of cars is better as a registration number than as the make of the car. **[2]**

**8.** A table called Staff has the fields StaffID, Forename, Surname, Postcode and Salary. Complete the table by
choosing a data type and, for text fields, a suitable length.

| Field | Data type | Length |
|---|---|---|
| StaffID | | |
| Forename | | |
| Surname | | |
| Postcode | | |
| Salary | | |

**[5]**

**9.** A designer wants to store the age of each swimmer in a field called Age. Explain why a date of birth is
a better choice. **[2]**

**10.** Explain what is meant by a one to many relationship, and state where the foreign key is placed. **[3]**

---

## Answers

**1.** **(a)** Text [1]. **(b)** Real [1]. **(c)** Boolean [1]. **(d)** Integer [1].

**2.** The maximum number of characters that the field can hold [1]; for a surname, a suitable length is 30 (accept 20 to
40) [1].

**3.** MemberID [1]. Surname, Town and DateJoined could be the same for several members [1], so they would not
uniquely identify each record [1].

**4.** **(a)** Owner (<u>OwnerID</u>, OwnerName, Telephone) with all the fields [1]; OwnerID underlined as the primary key [1];
Pet (<u>PetID</u>, PetName, AnimalType, DateOfBirth, OwnerID) with all the fields [1]; PetID underlined as the primary key [1];
OwnerID included in Pet to link the tables [1].
**(b)** OwnerID [1] in the Pet table [1].
**(c)** An owner may have several pets, so the telephone number would be repeated for each pet [1]; storing it once in the
Owner table avoids redundancy and inconsistency [1].

**5.** **(a)** Three tables [1]: Member, Film and Booking [1].
**(b)** Member (<u>MemberID</u>, MemberName, Email) [1]; Film (<u>FilmID</u>, Title, Year, AgeRating) [1]; Booking
(<u>BookingID</u>, MemberID, FilmID, ShowingDate, Seats) [1]; all three primary keys underlined [1].
**(c)** MemberID in Booking [1]; FilmID in Booking [1].
**(d)** BookingID: integer, MemberID: integer, FilmID: integer, ShowingDate: date, Seats: integer [3: one mark for the
three ID fields, one for the date, one for Seats].

**6.** **(a)** The pupil's name and form (and the meal's name and price) are repeated in every order, which is redundancy
[1]; TotalCost can be calculated from the price and quantity, so storing it repeats data and the value could be
inconsistent [1].
**(b)** Pupil (<u>PupilID</u>, PupilName, PupilForm) [1]; Meal (<u>MealID</u>, MealName, MealPrice) [1]; Order
(<u>OrderID</u>, PupilID, MealID, Quantity) [1]; foreign keys in Order, and TotalCost removed [1].

**7.** A registration number is unique for every car [1], whereas many cars have the same make, so it would not
identify one record [1].

**8.** StaffID: integer [1]; Forename: text, length 20 (accept 15 to 30) [1]; Surname: text, length 30 (accept 20 to 40)
[1]; Postcode: text, length 8 [1]; Salary: real (or integer if whole pounds) [1].

**9.** An age goes out of date and would have to be changed every year [1]; a date of birth stays correct, and the age can
be worked out from it [1].

**10.** In a one to many relationship one record in a table is linked to many records in another table (for example one
coach and many swimmers) [1]; the foreign key is placed in the table at the "many" end [1]; it is the primary key of the
table at the "one" end [1].

---

## Where marks are usually lost

- Choosing a non-unique field as a primary key, as in Question 3.
- Forgetting to underline the primary keys, or underlining a foreign key.
- Using an integer for a telephone number.
- Putting the foreign key in the wrong table in Questions 4 and 5.
- Keeping repeated or calculated data in a table, as in Question 6.
