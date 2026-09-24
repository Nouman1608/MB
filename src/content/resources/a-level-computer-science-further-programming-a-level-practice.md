---
title: "A Level Computer Science: Further Programming (A Level) — Practice Questions (Cambridge 9618)"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Further Programming"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2027-2029"
stage: "A"
order: 20
syllabusTopics:
  - qualification: "a-level"
    topic: "further-programming"
description: "Original exam-style questions with full worked answers on classes, encapsulation, inheritance and polymorphism, declarative programming, random file handling in pseudocode and exception handling, for Cambridge AS & A Level Computer Science (9618)."
author: "marlbridge-academic-team"
publishedDate: 2026-09-24
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Each question practises a skill tested in the June 2025 Paper 31. After each answer there is an examiner insight, a mark-scheme insight or a tip, and the real question to try next where one matches.

---

## Questions

**1.** A city bike-hire scheme uses objects of the class Bicycle. The class already has the private attribute Colour : STRING and the method SetBikeID(IDNumber : INTEGER). Each bicycle is identified by a unique six-digit number, and the class must also record the name of the docking station where the bicycle is currently parked. Write the attributes and methods still needed for the class, with data types, to include: an attribute for the bicycle's identification number, an attribute for the station name, setters for the colour and the station, and getters for the identification number, the colour and the station. **[4]**

**2.** In the Bicycle class from Question 1, all attributes are declared PRIVATE and can only be changed through the class's methods.

**(a)** Identify the object-oriented programming (OOP) feature this describes.

**(b)** A new class, ElectricBicycle, is created from Bicycle and adds an attribute for battery level. Describe what is meant by inheritance, using these classes. **[3]**

**3.** Both Bicycle and ElectricBicycle have a method called CalculateHireCost(). Explain how this is an example of polymorphism. **[2]**

**4.** A cinema stores one record for each seat in a random file called Seats.dat. The record for a seat is stored at the position given by its seat number. The variable NewBooking, of the user-defined type SeatRecord, already holds the updated details for the seat whose number is stored in the integer variable SeatNum. Write pseudocode statements to open Seats.dat, store NewBooking at the correct position, and close the file. **[4]**

**5.** A program asks the user for the name of a file and then opens it to read the data.

**(a)** Explain what is meant by an exception.

**(b)** Describe how exception handling could be used in this program. **[3]**

**6.** A declarative program contains these facts:
`speaks(ayesha, urdu).` `speaks(ayesha, english).` `speaks(bilal, arabic).` `speaks(chen, english).`

**(a)** State the result of the query `speaks(X, english).`

**(b)** Write a rule, `can_talk(A, B)`, that is true when person A and person B speak the same language. **[3]**

---

## Answers

**1.** Attributes: **BikeID : INTEGER** and **Station : STRING** [1]. Setters: **SetColour(NewColour : STRING)** and **SetStation(NewStation : STRING)** [1], each with a parameter name that is different from the attribute it sets [1]. Getters: **GetBikeID()**, **GetColour()** and **GetStation()** [1].

*Examiner insight (June 2025):* a common error was inconsistent naming: the attribute name should match the name used in its setter and getter (SetBikeID implies an attribute BikeID and a getter GetBikeID()), and each setter's parameter should have a different name from the attribute.

*Try the real question next:* Cambridge International AS & A Level Computer Science 9618, June 2025, Paper 31, Question 11.

**2.** **(a)** **Encapsulation** [1].

**(b)** Inheritance is where a **subclass (derived class) takes on the attributes and methods of a parent (base or super) class**: ElectricBicycle automatically has BikeID, Colour, Station and their methods from Bicycle [1]. The subclass can **add its own attributes and methods**, such as BatteryLevel, and can **override** inherited methods to change how they work [1].

*Mark-scheme insight (June 2025):* credit was given for saying a derived class takes the attributes and methods of a parent class, and for saying that these inherited members can be extended or overridden in the subclass.

*Try the real question next:* Cambridge International AS & A Level Computer Science 9618, June 2025, Paper 31, Question 11.

**3.** Polymorphism means a method with the **same name behaves differently depending on the class of the object** it is called on [1]. ElectricBicycle **overrides** CalculateHireCost() inherited from Bicycle (for example adding a charge for battery use), so calling CalculateHireCost() on each object runs the version belonging to that object's class [1].

*Tip:* polymorphism questions usually expect the word **override** and a link to inheritance: the subclass redefines a method it inherited.

**4.**
```
OPENFILE "Seats.dat" FOR RANDOM
SEEK "Seats.dat", SeatNum
PUTRECORD "Seats.dat", NewBooking
CLOSEFILE "Seats.dat"
```
Opening the file **FOR RANDOM** [1]; **SEEK** to the position SeatNum [1]; **PUTRECORD** to write NewBooking [1]; **CLOSEFILE** at the end [1].

*Examiner insight (June 2025):* candidates who knew the file-handling statements in the published pseudocode guide scored most highly on the matching algorithm, so learn the exact keywords OPENFILE … FOR RANDOM, SEEK, GETRECORD, PUTRECORD and CLOSEFILE.

*Try the real question next:* Cambridge International AS & A Level Computer Science 9618, June 2025, Paper 31, Question 12.

**5.** **(a)** An exception is an **unexpected event or error that occurs while the program is running** (at run time) and would otherwise make it crash, such as trying to open a file that does not exist [1].

**(b)** The statements that open and read the file are placed in a **TRY block** [1]; if an exception is raised, control passes to an **EXCEPT (catch) block**, which shows a helpful message such as "File not found" and lets the user enter another name instead of the program crashing [1].

*Tip:* link exception handling to the scenario: name a specific run-time error the program could meet and say what the handler does about it.

**6.** **(a)** `X = ayesha` and `X = chen` [1]

**(b)** `can_talk(A, B) IF speaks(A, L) AND speaks(B, L).` — using a shared variable, L, for the language in both conditions [1], joined correctly with IF and AND [1]. (Adding `AND A <> B` to stop a person matching themselves is also acceptable.)

*Tip:* in a declarative rule, using the **same variable** in two conditions is what forces the values to match; this is the key idea in most rule-writing questions.

---

## Where marks are usually lost

- Naming an attribute differently from its getter and setter, or giving a setter parameter the same name as the attribute.
- Leaving out data types for attributes and setter parameters.
- Describing inheritance without saying that the subclass can add to or override what it inherits.
- Using made-up file-handling keywords instead of those in the pseudocode guide, or forgetting to open the file FOR RANDOM before SEEK.
- Forgetting to close the file at the end of a file-handling algorithm.
