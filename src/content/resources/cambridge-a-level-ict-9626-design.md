---
title: "Cambridge A Level Information Technology (ICT): 16.3 Design (9626)"
seoTitle: "Cambridge A Level IT 9626: Design Stage Study Guide"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "System life cycle"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 16.03
syllabusTopics:
  - qualification: "a-level"
    topic: "system-life-cycle"
  - qualification: "a-level"
    topic: "system-life-cycle"
    subtopic: "design"
description: "Study guide to section 16.3 of Cambridge A Level IT 9626: data flow diagrams, system flowcharts, data storage, input forms and output reports."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide goes deeper into section **16.3 Design** of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 4). It is **A Level only** content examined in Paper 3 (Advanced Theory). Calculators are not allowed.

The syllabus asks you to know:

- the processing and flow of data through a system, including **data flow diagrams (DFD)** at level 0 (context level), level 1 and level 2, and how to construct a **system flowchart** and a DFD using the correct symbols
- **data storage**: databases and files (input and output)
- **input forms**: features and elements, appropriate use for data collection, validation and checking of data collected, and input screen layouts
- **output reports**: output screen layouts and printed copy layouts.

Use it with the [whole-topic study guide](/resources/a-level-cambridge-ict-system-life-cycle/), the [section 16.3 revision notes](/resources/cambridge-a-level-ict-9626-design-revision-notes/) and the [practice questions](/resources/cambridge-a-level-ict-9626-design-practice/). The [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) lists every topic.

## What the design stage does

Analysis says *what* the system must do. Design says *how*. The output is the design specification: diagrams, file and database structures, forms and reports detailed enough for developers to build from. Good design checks the idea on paper, where changes are cheap.

## Data flow diagrams

A **data flow diagram (DFD)** shows how data moves through a system: where it comes from, what processes change it, where it is stored and where it goes. It does not show hardware or the order of decisions.

### Symbols

| Element | Meaning |
|---|---|
| **Process** | An action that changes data, named with a verb phrase such as "Check order" |
| **Data store** | Where data is held between processes, such as a file or database table |
| **Data source or destination** | An external entity outside the system that sends data in or receives data out, such as a customer |
| **Duplicate data source or destination** | The same external entity drawn again to avoid crossing lines |
| **Data flow (arrow)** | The movement of data, labelled with what moves |

### The rules

1. Every data flow arrow is **labelled** with the data it carries.
2. Data must **pass through a process**. A flow may not go directly between two external entities, between an entity and a data store, or between two data stores.
3. Every process has at least one input and one output.
4. Each data store needs data going in and coming out of it (or the store is pointless).
5. Level 0 shows no data stores.

### Levels

| Level | What it shows |
|---|---|
| **Level 0 (context diagram)** | The whole system as **one process**, with all external entities and the data flows between them and the system |
| **Level 1** | The one process broken into the **main processes**, with data stores and the flows between them |
| **Level 2** | One level 1 process broken down further into its **sub-processes** |

Each level must be consistent with the one above: the data flowing in and out of the system at level 1 must match level 0. Detail is added, not changed.

### Worked example: school trip payments

External entities: **Parent** and **Teacher**.

**Level 0.** One process, "School trip payment system".
- Parent to system: *Payment*, *Consent form*
- System to Parent: *Receipt*
- Teacher to system: *Trip details*
- System to Teacher: *List of paid pupils*

**Level 1.** The process is broken into:
- Process 1 "Record trip": receives *Trip details* from Teacher and writes *Trip record* to the data store **Trips**.
- Process 2 "Take payment": receives *Payment* and *Consent form* from Parent, reads *Trip cost* from **Trips**, writes *Payment record* to **Payments** and sends *Receipt* to Parent.
- Process 3 "Produce list": reads *Payment record* from **Payments** and *Trip record* from **Trips**, and sends *List of paid pupils* to Teacher.

Check: the same five external flows appear at level 0 and level 1 (Trip details, Payment, Consent form, Receipt, List of paid pupils). The two data stores appear only at level 1.

**Level 2** for process 2 might show "Check payment amount", "Record consent" and "Print receipt", with sub-processes numbered 2.1, 2.2 and 2.3.

## System flowcharts

A **system flowchart** shows the hardware and files that data passes through and the processes applied to it. It is more physical than a DFD: it shows the media (disk, paper, screen) involved. Symbols from the syllabus are:

| Element | Use |
|---|---|
| **Input/output** | Data entered or received |
| **Process** | An operation carried out on the data |
| **Single document output** | One printed document |
| **Multiple document output** | Several copies or documents, such as a set of payslips |
| **Magnetic disk file** | Data held on disk, such as a master file |
| **Magnetic tape file** | Data held on tape, such as a backup |
| **Display** | Output on a screen |

Flow lines with arrowheads join the symbols.

### Worked example: weekly payroll

1. Timesheets are keyed in (**input**).
2. "Validate timesheet data" (**process**), with errors sent to the **display**.
3. Valid data is written to the **transaction file** on **magnetic disk**.
4. "Calculate pay" (**process**) reads the transaction file and the **employee master file** (magnetic disk).
5. The master file is updated (written back to disk).
6. Payslips are produced (**multiple document output**).
7. A copy of the master file is written to **magnetic tape** as a backup.

## Data storage

Designers decide how data will be stored.

- **Files** hold data in a structured way. Input files hold data waiting to be processed, such as transactions, and output files hold results. A master file holds permanent records.
- **Databases** hold related tables with linked keys. They avoid repeated data, allow several users and make searching and reports easier.

The design specifies each table or file: the fields, the data type and size of each field, the key field and the validation rules.

## Input forms

An input form collects data, on paper or on screen.

### Features and elements

- A clear **title** and short instructions.
- Fields in a **logical order** that follows the source document, grouped in sections.
- Each field has a clear **label** and enough space for the longest value.
- Suitable controls: **text boxes**, **drop-down lists** and **radio buttons** (choose one), **tick boxes** (choose any), **date pickers**, **buttons** such as Submit and Clear.
- **Default values** and prompts, for example a date format guide such as DD/MM/YYYY.
- Consistent fonts, colours and alignment, with enough white space to be easy to read.
- On paper forms, **character boxes** (one box per letter) and a section marked "For office use only".

### Appropriate use

Choose the control that limits wrong entries: a drop-down list for a title or a county; radio buttons for male/female/other; a tick box for "I agree".

### Validation and checking

Validation checks that data is reasonable, not that it is correct. Typical checks: presence, range, type, format, length, lookup (list) and check digit. A form should show a clear **error message** that says what is wrong and how to fix it. Verification (for example double entry or visual checking) confirms that data was copied correctly.

### Input screen layouts

A screen layout shows where each label, field and button goes. Good practice: place the first field top left, group related fields, keep the tab order logical, mark required fields and put buttons at the bottom.

## Output reports

### Output screen layouts

On screen, a report should have a heading, clear column titles, readable text size, limited colours with good contrast, scroll or page controls, and options to sort or filter. Screens suit data needed quickly and not kept.

### Printed copy layouts

Printed reports need a **title**, the date and time, **page numbers**, column headings repeated on every page, headers and footers, **totals and sub-totals**, consistent alignment (numbers right-aligned), margins that fit the paper and no cut-off columns. Printed reports suit records, legal documents and people without a screen.

## Common errors

- Drawing a data flow between an external entity and a data store.
- Showing data stores on a level 0 diagram.
- Leaving data flows unlabelled.
- Using the system flowchart symbols when asked for DFD symbols.
- Listing validation checks without saying what they check on the form.
- Describing "good design" without naming a feature, such as drop-down lists or instructions.

## Frequently asked questions

**What does a level 0 DFD show?**
It shows the whole system as one process, the external entities and the data flowing between them and the system. It shows no data stores.

**What is the difference between a DFD and a system flowchart?**
A DFD shows how data moves between processes, stores and external entities. A system flowchart shows the hardware, files and documents that the data passes through.

**What is validation on an input form?**
Validation is an automatic check that entered data is reasonable, such as a date in a valid range, and does not prove that it is correct.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 4, Cambridge University Press & Assessment. Section 16.3: Design.
