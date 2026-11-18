---
title: "Cambridge IGCSE ICT (0417): Design -- Practice Questions"
resourceType: "practice-questions"
subject: "ict"
level: ["igcse"]
topic: "Topic 7: The systems life cycle"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 7.2
syllabusTopics:
  - qualification: "igcse"
    topic: "the-systems-life-cycle"
    subtopic: "design-0417"
description: "Twelve original questions with answers on file structures, data types, coding, validation, check digits and form and report design for Cambridge IGCSE ICT 0417."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These questions cover section 7.2 "Design" of Cambridge IGCSE ICT 0417: file and data structures, validation routines, input formats and output formats. All organisations and data are invented.

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available through your school or
> Cambridge directly.

Related: [Design study guide](/resources/cambridge-igcse-ict-0417-design/) · [Design revision notes](/resources/cambridge-igcse-ict-0417-design-revision-notes/)

---

## Section A: short answers

**1.** Name **two** items, other than field name, that are designed for each field in a file structure. **[2]**

**2.** Identify the validation check that would reject each of these entries.

**(a)** A blank Surname field. **[1]**

**(b)** The value "twelve" in a field that must hold a whole number. **[1]**

**(c)** A 3-digit entry in a field for a 4-digit PIN. **[1]**

**3.** Explain why a field storing a customer's mobile phone number should be given the data type text. **[2]**

**4.** State **one** advantage and **one** disadvantage of coding a T-shirt size as S, M, L or XL. **[2]**

**5.** State what is meant by a *format check*, giving an example. **[2]**

---

## Section B: structured questions

**6.** Oakfield Library is designing a file to store details of its books. Complete a design for the fields below, giving a suitable data type and field length for each.

| Field name | Data type | Field length |
|---|---|---|
| ISBN | | |
| Title | | |
| PublicationYear | | |
| OnLoan | | |

**[4]**

**7.** The library's book numbers use a check digit. The first 12 digits of one number are 978184356027. The check digit is calculated by multiplying the digits alternately by 1 and 3, adding the results, and choosing the digit that makes the total up to the next multiple of 10.

**(a)** Calculate the check digit. Show your working. **[2]**

**(b)** A librarian types the first 12 digits as 978184356207. Explain how the check digit shows that an error has been made. **[2]**

**8.** A hospital records each patient's body temperature in degrees Celsius to one decimal place.

**(a)** State a suitable data type for this field. **[1]**

**(b)** Describe **two** validation checks suitable for this field. **[4]**

**(c)** Explain why validation cannot guarantee that the temperature entered is correct. **[1]**

**9.** Pinecrest School is designing a paper data capture form for parents to give their child's details.

Describe **four** features of the form that would help the data to be completed and entered accurately. **[4]**

**10.** The school also needs a printed report listing pupils who have been absent for more than five days this term.

Describe **three** features that should be included in the design of the report layout. **[3]**

**11.** A delivery firm's online order screen asks for a postcode, a delivery date and a contact email address. For each field, identify **one** suitable validation check and explain what it checks. **[6]**

**12.** Explain the difference between a range check and a type check, using a field for the number of tickets a customer can buy (1 to 6) as your example. **[3]**

---

## Answers

**1.** Any two of: data type [1]; field length [1]; coding of the data [1]; validation routine [1]. Maximum 2. **[2]**

**2. (a)** Presence check [1].

**(b)** Type check [1].

**(c)** Length check [1]. **[3]**

**3.** A mobile number usually starts with zero, which would be removed if stored as a number [1]; it may also contain + or spaces, and it is never used in calculations [1]. **[2]**

**4.** Advantage, any one of: less storage; faster data entry; easier validation because only four codes are allowed; consistent values for searching [1]. Disadvantage, any one of: a size that is not one of the codes (such as XXL) cannot be recorded; users must know what the codes mean [1]. **[2]**

**5.** A check that the data entered matches a set pattern of characters [1], for example a student ID of two letters followed by four digits, or a date in the form DD/MM/YYYY [1]. **[2]**

**6.** One mark per correct row:
- ISBN: text, length 13 (or 17 if hyphens are stored) [1].
- Title: text, a length such as 50 to 100 [1].
- PublicationYear: integer or numeric, length 4 (date/time also accepted) [1].
- OnLoan: Boolean, length 1 [1]. **[4]**

**7. (a)** Products: 9, 21, 8, 3, 8, 12, 3, 15, 6, 0, 2, 21, which add up to 108 [1]. The next multiple of 10 is 110, so the check digit is 2 [1].

**(b)** The computer recalculates the check digit from the digits typed: the total is now 112, giving a check digit of 8 [1]. This does not match the stored check digit of 2, so the number is rejected as an input error (two digits have been swapped) [1]. **[4]**

**8. (a)** Real / decimal (numeric with one decimal place) [1].

**(b)** Any two described, 2 marks each: a range check [1] that the temperature lies within sensible limits for a living patient, such as 30.0 to 45.0 [1]; a presence check [1] so that the temperature cannot be left blank [1]; a type check [1] so that only numeric data is accepted [1]; a format check [1] that there is exactly one digit after the decimal point [1]. Maximum 4.

**(c)** Validation only checks that the value is sensible; a temperature of 37.2 when the true reading was 38.2 would still be accepted [1]. **[6]**

**9.** Any four, each a feature with its benefit [1 each]: clear title and instructions such as "use black ink and capitals" [1]; one box per character so handwriting is easier to read [1]; tick boxes for fixed answers such as year group, so no writing is needed [1]; fields in a logical order matching how the data will be typed in [1]; clear labels next to every field [1]; enough space for long answers such as addresses [1]; required fields clearly marked so they are not missed [1]. Maximum 4. **[4]**

**10.** Any three of: a clear title stating what the report shows [1]; the date or term the report covers [1]; column headings such as pupil name, form and days absent [1]; records sorted in a useful order, such as by form or by days absent [1]; page numbers and headers or footers [1]; a total count of pupils listed [1]. Maximum 3. **[3]**

**11.** One mark for each check and one for each explanation:
- Postcode: format check [1] that letters and digits are in the expected pattern / or length check that it has between 6 and 8 characters [1].
- Delivery date: range check [1] that the date is not in the past and is within the firm's delivery period / or type check that a valid date is entered [1].
- Email address: presence check [1] that it has not been left blank / or format check that it contains an @ followed by a domain [1]. **[6]**

**12.** A type check makes sure the data is the correct data type, here a whole number, so "three" or 2.5 would be rejected [1]. A range check makes sure the value lies between limits, here 1 and 6, so 0 or 7 would be rejected [1]. An entry such as 9 would pass the type check but fail the range check, so both are needed [1]. **[3]**

## Frequently asked questions

**Do I need to learn a particular check digit method?**
The syllabus names check digits as a validation routine without a set method. If a question asks you to calculate one, it will give you the method, as Question 7 does.

**How long should a field length be?**
Long enough for the longest real value. Questions accept a sensible range rather than one exact number, except for fixed-length data such as a 4-digit PIN.

## Syllabus reference

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Topic 7 "The systems life cycle", section 7.2 "Design".
