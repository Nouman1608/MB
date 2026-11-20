---
title: "OxfordAQA IGCSE Computer Science (9210): Software classification -- Study Guide"
seoTitle: "OxfordAQA IGCSE CS 9210 Software Classification Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 4: Computer systems"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 4.03
syllabusTopics:
  - qualification: "igcse"
    topic: "computer-systems-9210"
  - qualification: "igcse"
    topic: "computer-systems-9210"
    subtopic: "software-classification-9210"
description: "Study guide to OxfordAQA IGCSE Computer Science 9210 section 3.4.3: system and application software, operating systems, the five areas an OS manages and utility programs."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers section **3.4.3 Software classification** of OxfordAQA International GCSE Computer Science (9210).
You must explain what is meant by **system software** and **application software**, and give examples of each. You must
understand the **need for, and functions of, operating systems (OS) and utility programs**. You must understand that the
OS handles management of the **processor(s), memory, I/O devices, applications and security**. The meaning of
software itself is covered in the [hardware and software study
guide](/resources/oxfordaqa-igcse-computer-science-9210-hardware-and-software/).

## Two classes of software

Software is divided into two broad classes, according to its job.

| | System software | Application software |
|---|---|---|
| Purpose | Manages the computer system's resources and acts as a platform to run application software | Performs tasks that the end user wants to do |
| Used by | The computer and other programs, mostly in the background | The user directly |
| Examples | Operating system, utility programs | Word processor, spreadsheet, web browser, game, media player, photo editor |

The specification's wording is that "system software manages the computer system resources. It also acts as a
platform to run application software", and that "application software is software that performs end-user tasks".

A useful question to sort a program is: *Is it for the user's own task, or does it look after the computer?* A
program that helps you write a letter is application software. A program that decides which program gets to use the
processor next is system software.

## System software

System software is the software that runs and looks after the computer. The two kinds named in the specification are
the **operating system** and **utility programs**.

### The operating system (OS)

The **operating system** is the main piece of system software. It starts when the computer is switched on and runs all the
time. Examples of operating systems include the ones used on desktop computers, laptops, tablets and phones.

**The need for an OS.** A computer's hardware is complex and each programmer cannot be expected to control the
processor, memory and devices directly. The OS:

- provides a **platform**, so application programs can run without being written for each piece of hardware;
- **shares out** the computer's resources between the programs that want them, so that they do not interfere;
- acts as the **go-between** for the user, the applications and the hardware.

Without an OS, every application would have to contain its own code for controlling the screen, keyboard, memory and
storage, and only one program could run at a time.

### What the OS manages

The specification names five areas.

**1. Processor management.** The OS decides which program the processor works on, and for how long. A processor can do
only one instruction at a time (per core), but the OS switches between programs so quickly that several seem to run
together. This is called **multitasking**. The OS shares processor time fairly and makes sure that no program takes
over.

**2. Memory management.** Programs and data must be in main memory (RAM) to be used. The OS **allocates** memory to
each program when it starts, keeps each program's memory **separate** from the others so that one cannot overwrite
another, and **frees** the memory when the program finishes so that it can be reused.

**3. Input/output (I/O) device management.** The OS controls the keyboard, mouse, screen, printer, storage and other
devices. It uses small programs called **device drivers**, which translate between the OS and each device, so an
application can print without knowing the details of any particular printer. It also deals with data going to and from
devices.

**4. Application management.** The OS **loads** programs into memory and starts them, **runs** them, provides them with
services (such as saving a file or showing a window), and **closes** them down, including when they stop responding. It
keeps track of which applications are running.

**5. Security management.** The OS protects the system and its data. It uses **user accounts** and **passwords** to
identify users, sets **access rights** (permissions) that control who can see, change or delete each file, and
keeps applications apart so that one cannot interfere with another's data.

Many operating systems also provide a **user interface**, such as windows, icons and menus, and manage **files** on
storage. These are widely accepted as OS functions as well, but the five above are those named in the specification.

### Utility programs

**Utility programs** are small programs that carry out maintenance and housekeeping tasks for the computer. They are
system software, because they look after the system rather than do an end user's task. Examples:

| Utility | Purpose |
|---|---|
| Anti-virus (anti-malware) | Scans for and removes malicious software, and protects against it |
| Backup | Makes a copy of files so that they can be restored if the original is lost or damaged |
| Disk defragmenter | Rearranges the pieces of files on a magnetic hard disk so that each file is stored together, which can speed up access |
| File compression | Reduces the size of files so that they take up less space or can be sent more quickly |
| Disk formatting and clean-up | Prepares a storage device for use, or removes unwanted files |
| Encryption | Scrambles data so that it cannot be read without the key |
| Firewall | Monitors network traffic and blocks unauthorised connections |

Some utilities are supplied with the operating system, and others can be installed separately.

## Application software

**Application software** performs tasks that the **end user** wants to do. It runs on top of the operating system.

| Type | What it does | Typical use |
|---|---|---|
| Word processor | Writing and formatting documents | Letters, reports, essays |
| Spreadsheet | Calculating and analysing numbers | Budgets, grade books |
| Database | Storing and searching records | Customer records, stock lists |
| Web browser | Viewing web pages | Searching, shopping, reading |
| Presentation | Slides | Talks, lessons |
| Graphics and photo editing | Drawing, editing pictures | Design, photos |
| Media player | Playing music or video | Entertainment |
| Games | Entertainment | Leisure |

Applications may be **general purpose**, such as a word processor, or written for one specific job, such as a stock
control program for a shop.

## Worked examples

### Worked example 1: classify the software

| Software | Class | Reason |
|---|---|---|
| A spreadsheet | Application | The user calculates budgets |
| A disk defragmenter | System (utility) | Maintains the storage |
| A device driver for a printer | System | Helps the OS control a device |
| A presentation program | Application | The user makes slides |
| The operating system | System | Manages resources and runs applications |
| An anti-virus program | System (utility) | Protects the computer |

### Worked example 2: describe the functions of an OS

**Question: describe two functions of an operating system. [4 marks]**

Answer: "**Memory management**: the OS allocates RAM to each program when it starts and stops one program from using
another's memory, then frees it when the program closes [2]. **Security**: the OS uses user accounts and passwords and
access rights, so that only authorised users can open or change files [2]."

Each function earns a mark for its name and a mark for the description. The description must say what the OS **does**.

### Worked example 3: explain the need for an OS

A tablet manufacturer wants to let developers create apps for many models. How does the OS help? The OS gives all models
the same platform. The app asks the OS to display text, play sound or save a file, and the OS controls the
particular hardware. The developer does not need to write a version for each model, and the OS also shares the processor
and memory between the apps so that they work well together.

## Common mistakes

- Saying that the OS is **hardware**, or that it is "the screen you see".
- Giving only a **name** of a function ("memory management") with no description of what it does.
- Describing **application software** as software that the user cannot see. It is software that performs the **user's**
  tasks.
- Listing a browser, spreadsheet or game as **system software**.
- Putting **utility programs** under application software. They are system software.
- Saying that an anti-virus **repairs the hardware**. It protects the system from malware.
- Saying that the OS "makes the computer run faster". It **manages** resources.
- Confusing **processor management** (sharing processing time) with **memory management** (sharing RAM).
- Using brand names alone. Examiners want the **type** of software, with a brand as an example only.

## Exam technique

- **Define** questions: give the purpose and an example, such as "software that performs tasks for the end user, for
  example a word processor".
- **Give an example** questions: use a type of software and not only a brand.
- **Functions of the OS**: choose from the five named areas. Name the function, then say what the OS does.
- **Explain the need** for an OS: link it to sharing hardware resources, providing a platform for applications and
  hiding hardware detail.
- **Utility** questions: name the utility and say what task it carries out.

## Next steps

For a condensed summary and a self-test, use the [Software classification revision
notes](/resources/oxfordaqa-igcse-computer-science-9210-software-classification-revision-notes/), and practise with the
[Software classification practice
questions](/resources/oxfordaqa-igcse-computer-science-9210-software-classification-practice/).
