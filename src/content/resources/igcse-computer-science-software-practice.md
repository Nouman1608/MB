---
title: "IGCSE Computer Science: Software — Practice Questions (Cambridge 0478)"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Software"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 4
syllabusTopics:
  - qualification: "igcse"
    topic: "software"
description: "Original Paper 1 style questions with mark-scheme answers on software types, firmware, interrupts, assembly language and translators for Cambridge IGCSE 0478."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available free from your board.

Related: [Software study guide](/resources/cambridge-igcse-computer-science-software-study-guide/) and
[revision notes](/resources/igcse-computer-science-software-revision-notes/)

This set practises every learning outcome in Topic 4 of the Cambridge IGCSE Computer Science 0478 syllabus (2026–2028): software types and the operating system (4.1) and programming languages, translators and IDEs (4.2). Topic 4 is examined on Paper 1, where calculators are not allowed and answers are short and precise.

---

## Section A

**1.** Tick (✓) one box in each row to show whether the software is system software or application software. **[4]**

| Software | System software | Application software |
|---|---|---|
| Photo-editing program | | |
| Anti-virus utility | | |
| Operating system | | |
| Spreadsheet | | |

**2.** Complete the sentences using words from the list. Not all words are used. **[3]**

*application · bootloader · compiler · firmware · hardware · operating system*

Applications are run on the ........................ . The operating system is run on the ........................ . The bootloader is run on the ........................ .

**3.** State what is meant by a mnemonic in assembly language, and name the translator that converts an assembly language program into machine code. **[2]**

## Section B

**4.** A hospital laptop is used by several nurses during each shift. Each nurse logs in with their own username, and patient records are saved in folders on the laptop.

Identify **three** functions of the operating system that are used in this situation. For each, describe how it is used. **[6]**

**5.** A program calculates the average waiting time at a clinic. When no patients have been seen, the program tries to divide by zero.

**(a)** State whether this is a hardware interrupt or a software interrupt. **[1]**
**(b)** Give **one** other example of the same type of interrupt. **[1]**
**(c)** Describe how the processor handles the interrupt. **[4]**

**6.** A programmer is writing software to control the motor in a robotic vacuum cleaner. She is deciding between a high-level language and a low-level language.

**(a)** Explain **one** reason why a low-level language might be chosen for this program. **[2]**
**(b)** Explain **two** disadvantages of using a low-level language rather than a high-level language. **[4]**

**7.** A student translates a 400-line program. The translator produces a report listing seven syntax errors on different lines, and no executable file is created until all seven are fixed.

**(a)** Identify the type of translator used. Give a reason for your answer. **[2]**
**(b)** Describe how the result would be different if the other type of high-level language translator had been used. **[3]**

**8.** A school's programming club uses an IDE.

**(a)** Describe what each of these IDE functions does: auto-completion, prettyprint and run-time environment. **[3]**
**(b)** Explain how auto-correction differs from error diagnostics. **[2]**

---

## Answers

**1.** Photo-editing program: application [1]. Anti-virus utility: system [1]. Operating system: system [1]. Spreadsheet: application [1].

*Tip:* utility programs serve the computer (keeping it secure or maintained), so they are system software even though the user may start them.

**2.** Applications are run on the **operating system** [1]. The operating system is run on the **firmware** [1]. The bootloader is run on the **hardware** [1].

*Tip:* this is the exact layering in syllabus point 4.1.3. "Compiler" and "application" are distractors.

**3.** A mnemonic is a short code (such as ADD or LDA) that represents a machine code instruction [1]. The translator is an **assembler** [1].

**4.** Any three functions, each with a matching use (1 mark for the function, 1 for the description linked to the hospital):

- **Managing user accounts** [1]: each nurse has their own account, with their own settings and storage area, created and maintained by the OS [1].
- **Providing system security** [1]: the OS checks each nurse's username and password before allowing access, so patient data is protected [1].
- **Managing files** [1]: the OS saves, names, opens and organises the patient records into folders [1].
- **Providing an interface** [1]: the OS gives the nurses a way to interact with the laptop, such as a graphical user interface with icons and windows [1].
- **Managing memory** [1]: the OS allocates RAM to the records program while it is open so programs do not overwrite each other's data [1].
- **Managing multitasking** [1]: the OS shares processor time so a nurse can keep the records program and email open at once [1].

(Max 6. Do not credit two descriptions of the same function.)

**5. (a)** Software interrupt [1].
**(b)** Two processes trying to access the same memory location [1].
**(c)** Any four from:
- the interrupt signal is sent to the processor [1]
- the processor checks for interrupts and compares the interrupt's priority with the current task [1]
- the current task's state (register contents) is saved [1]
- the matching interrupt service routine is run to deal with the error, for example by displaying an error message [1]
- the saved state is restored / the processor continues with the next task, or the program is stopped if the error cannot be recovered [1]

**6. (a)** Low-level code can directly manipulate the hardware [1], so the programmer can control the motor's registers or memory locations exactly, which suits an embedded device with a fixed processor [1].
**(b)** Any two, each explained:
- It is harder to read and write [1], because instructions are mnemonics or binary rather than English-like statements, so the program takes longer to produce [1].
- It is harder to debug [1], so errors in the motor control code take longer to find and correct [1].
- It is not machine independent [1], so if the vacuum cleaner is redesigned with a different processor the program must be rewritten [1].

**7. (a)** A compiler [1], because it translated the whole program and gave an error report covering all the errors / an executable file is produced only once the code is error-free [1].
**(b)** An interpreter would translate and execute the code line by line [1]. It would stop when it reached the **first** error [1] and report only that error; the student would fix it and run again to find the next one [1]. No executable file would be produced.

**8. (a)**
- Auto-completion: suggests or finishes keywords and identifiers as the programmer types [1].
- Prettyprint: displays the code with colour coding and consistent indentation to make it easier to read [1].
- Run-time environment: allows the program to be run and tested inside the IDE, showing its outputs [1].

**(b)** Auto-correction automatically fixes some simple mistakes, such as a misspelt keyword, as the code is typed [1]; error diagnostics identify and highlight errors so the programmer can find and fix them, but do not fix them automatically [1].

## Where marks are usually lost

- Q4: writing "the OS manages things" — each mark needs a named function and a use tied to the hospital.
- Q5(c): leaving out that the current state is **saved** and later **restored**. Without this the answer reads as if the original task is lost.
- Q6: answering "low-level is faster" with no link to hardware control. The syllabus point is direct manipulation of hardware.
- Q7(b): saying an interpreter "finds all the errors one at a time". It stops at the first error.

## Frequently asked questions

**How many OS functions should I learn for 0478?**
All nine listed in learning outcome 4.1.2. Questions usually ask for two to four, often set in a scenario, so practise linking each function to a situation.

**Are division by zero and a key press the same kind of interrupt?**
No. The syllabus classes division by zero as a software interrupt and pressing a key as a hardware interrupt.

**Will I be asked to compare a compiler and an interpreter?**
Yes, it is a common question type. Give each point for both translators, covering how they translate, how errors are reported and whether an executable file is produced.
