---
title: "Cambridge A Level Information Technology (ICT): 16.3 Design (9626) -- Revision Notes"
seoTitle: "Cambridge A Level IT 9626: Design Stage Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on section 16.3 of Cambridge A Level IT 9626: DFD levels and rules, system flowchart symbols, forms, reports and a quick self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

For full explanations and worked examples, read the [section 16.3 study guide](/resources/cambridge-a-level-ict-9626-design/) first. These notes condense **section 16.3 Design** of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 4). It is **A Level only** content, examined in Paper 3 (Advanced Theory).

Test yourself with the [practice questions](/resources/cambridge-a-level-ict-9626-design-practice/). The [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) has every topic and the [free diagnostics](/diagnostics/) show where to start.

## Design in one line

Analysis = *what*. Design = *how*. The result is the design specification.

## Data flow diagrams (DFD)

Show how data moves: sources, processes, stores, destinations.

| Symbol | Meaning |
|---|---|
| Process | Changes data; named with a verb phrase |
| Data store | Data held between processes |
| Data source or destination | External entity outside the system |
| Duplicate data source or destination | Same entity drawn again to avoid crossing lines |
| Arrow | Data flow, always labelled |

### Rules

- Label every flow.
- Data must pass through a process: **no** flow entity to entity, entity to store, or store to store.
- No data stores on level 0.
- Levels must balance: the flows into and out of the system do not change when detail is added.

### Levels

| Level | Shows |
|---|---|
| **0** (context) | One process for the whole system; external entities; flows in and out |
| **1** | Main processes; data stores; flows |
| **2** | One level 1 process split into sub-processes |

## System flowcharts

Show the hardware, files and documents that data passes through.

| Symbol | Use |
|---|---|
| Input/output | Data entered or received |
| Process | Operation on data |
| Single document output | One printed document |
| Multiple document output | A set of printed documents |
| Magnetic disk file | Data on disk, such as a master file |
| Magnetic tape file | Data on tape, such as a backup |
| Display | Output on screen |

**DFD vs system flowchart:** a DFD shows the movement of data between processes, stores and entities (logical). A system flowchart shows the physical media and processes (hardware, files, documents).

## Data storage

- **Files:** input files (data waiting to be processed), output files (results), master files (permanent records), transaction files.
- **Databases:** linked tables, less repeated data, many users, easy searching and reports.
- Design records, for each table or file: fields, data types, sizes, key field, validation.

## Input forms

**Features and elements**
- Clear title and instructions.
- Logical order, grouped sections.
- Labelled fields with enough space.
- Controls: text box, drop-down list, radio buttons (one choice), tick boxes (many choices), date picker, buttons.
- Default values and prompts (such as DD/MM/YYYY).
- Consistent fonts, colours, alignment; white space.
- Paper forms: character boxes, "for office use only".

**Appropriate use:** pick a control that limits mistakes (list for fixed choices, radio buttons for one-of-few, tick box for yes/no).

**Validation** checks data is reasonable: presence, range, type, format, length, lookup, check digit. Show a clear error message. **Verification** checks the data was copied correctly.

**Input screen layout:** first field top left, related fields grouped, logical tab order, required fields marked, buttons at the bottom.

## Output reports

| Output | Layout points |
|---|---|
| **Screen** | Heading, clear column titles, readable text, good colour contrast, scroll or page controls, sort and filter |
| **Printed** | Title, date, page numbers, repeated column headings, header and footer, totals and sub-totals, numbers right-aligned, margins that fit the paper |

## Must-know distinctions

- **Level 0** (no stores) vs **level 1** (stores and several processes).
- **DFD** (movement of data) vs **system flowchart** (hardware and media).
- **Validation** (reasonable) vs **verification** (copied correctly).
- **Radio buttons** (choose one) vs **tick boxes** (choose any).
- **Screen output** (quick, not kept) vs **printed output** (permanent, portable).

## Quick self-test

1. What is shown at level 0 of a DFD?
2. Why can a data flow not go directly from an entity to a data store?
3. Name the symbol for a printed set of payslips on a system flowchart.
4. Name the symbol for a backup held on tape.
5. At which DFD level do data stores first appear?
6. Name two features of a well-designed input form.
7. Which control should a form use to choose exactly one of three delivery options?
8. Name two things to put on every page of a printed report.
9. Give one example of a validation check on an input form.
10. What is a master file?

### Answers

1. One process (the whole system), the external entities and the data flows between them.
2. Data must pass through a process that handles it; an entity cannot update a store directly.
3. Multiple document output.
4. Magnetic tape file.
5. Level 1.
6. Any two: clear title and instructions, logical order, labelled fields, drop-down lists or radio buttons, consistent layout, defaults and prompts.
7. Radio buttons (a drop-down list is also acceptable).
8. Any two: page number, date, title, column headings.
9. Any one: range check on age, presence check on surname, format check on a postcode, lookup of a title in a list.
10. A file holding the permanent records, such as the employee file in a payroll system.

## Where marks are usually lost

- Putting data stores on a level 0 DFD.
- Drawing flows straight from an external entity into a data store.
- Not labelling the data flows.
- Using the wrong symbol set (system flowchart symbols on a DFD).
- Naming validation checks with no link to a field on the form.
- Describing a form as "easy to use" without naming a feature.
- Writing "colourful" for a screen layout instead of "good contrast, limited colours".

## Frequently asked questions

**What are the three DFD levels in the syllabus?**
Level 0 (context level), level 1 and level 2. Each adds detail to the one before it while the flows into and out of the system stay the same.

**Which symbols appear on a system flowchart?**
Input/output, process, single document output, multiple document output, magnetic disk file, magnetic tape file and display.

**Why use drop-down lists on a form?**
They limit entries to valid choices, so they reduce errors and are quicker for the user.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 4, Cambridge University Press & Assessment. Section 16.3: Design.
