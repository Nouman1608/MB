---
title: "Cambridge IGCSE ICT (0417): Create a presentation"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 19: Presentations"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 19.1
syllabusTopics:
  - qualification: "igcse"
    topic: "presentations"
    subtopic: "create-a-presentation-t19-0417"
description: "Creating a new presentation from a text file for Cambridge IGCSE ICT 0417 Topic 19: how outline levels become titles and bullets, and how to check the result."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Topic 19 of the Cambridge IGCSE ICT 0417 syllabus has no numbered subtopics. Its first content row, "Create a presentation", has one line of guidance: **create a new presentation using a text file**. It sounds small, but it is usually the first step of the presentation task in the practical paper, and every later mark depends on it. If the import produces the wrong number of slides, puts bullets at the wrong level or leaves stray blank slides, the master slide, editing and printing steps all build on a faulty file. This guide explains how a text file is turned into slides, what to check afterwards and how the skill is tested in theory questions.

For the whole topic, see the [Presentations study guide](/resources/cambridge-igcse-ict-presentations-study-guide/). This page has its own [revision notes for creating a presentation](/resources/cambridge-igcse-ict-0417-create-a-presentation-t19-revision-notes/) and [practice questions on creating a presentation](/resources/cambridge-igcse-ict-0417-create-a-presentation-t19-practice/).

## Why build slides from a text file?

Typing slide content by hand is slow and introduces errors. A text file already holds the words, and its structure tells the software which lines are slide titles and which are bullet points. Importing it:

- is **faster** than retyping, especially for a long presentation;
- is **more accurate**, because no words are rekeyed, so no new spelling mistakes appear;
- lets the content be **written by one person** (for example in a word processor) and **designed by another** in the presentation software;
- keeps the **structure** of the original, so headings stay as titles and sub-points stay under the right heading.

These reasons are the ones to give in a theory question that asks why a presentation might be created from an existing file.

## How the text file is structured

Presentation software reads a text file as an **outline**. Each line has a **level**, and the level decides what the line becomes.

| Level in the text file | Becomes on the slide |
|---|---|
| Top level (not indented) | The **title** of a new slide |
| Second level (indented once) | A first-level **bullet point** on that slide |
| Third level (indented twice) | A second-level (sub-) bullet, indented under the bullet above |

How a level is shown depends on the file type:

- In a **plain text file** (.txt), the level is set by **tab characters** at the start of the line. A line with no tab is a title; one tab makes a bullet; two tabs make a sub-bullet. Spaces are not the same as tabs, so a line indented with spaces may be read as a title.
- In a **rich text file** (.rtf) or word-processed file, the level usually comes from **heading styles or outline levels**: text in the Heading 1 style becomes slide titles and Heading 2 becomes bullets.

## The two usual routes

Packages differ in their menus, but there are two common methods:

1. **Open the file as an outline.** In the Open dialogue, change the file type filter so that text or outline files are listed, then open the file. A new presentation is created with one slide per top-level line.
2. **Insert slides from an outline into a new presentation.** Start a new blank presentation and use the command that inserts slides from an outline file. The new slides are added after the current slide.

The second route has a trap: a new blank presentation already contains one empty title slide, and the imported slides are added after it. Unless the task wants a separate title slide, you must **delete the empty first slide**.

## Worked example: from file to slides

*The file content in this example is original and invented.* A file called *garden.txt* contains the lines below. Here "[tab]" stands for one tab character at the start of the line.

```
Community Garden Project
[tab]Open to all residents
[tab]Meets every Saturday
Our Aims
[tab]Grow fresh vegetables
[tab][tab]Tomatoes, beans and herbs
[tab]Teach growing skills
How to Join
[tab]Visit the garden gate
```

After importing:

| Slide | Title | Bullets |
|---|---|---|
| 1 | Community Garden Project | Open to all residents; Meets every Saturday |
| 2 | Our Aims | Grow fresh vegetables, with the sub-bullet "Tomatoes, beans and herbs"; Teach growing skills |
| 3 | How to Join | Visit the garden gate |

Three top-level lines give **three slides**. If you see four slides, the most likely cause is a leftover blank slide at the start. If "Tomatoes, beans and herbs" appears at the same level as "Grow fresh vegetables", it has been demoted only once; use the software's demote command (often the Tab key) to move it down a level, or promote it (often Shift+Tab) if it has gone too far.

## Checking the new presentation

Work through this list straight after importing, before you touch the master slide:

- **Slide count**: one slide for every top-level line in the file, and no extras.
- **Titles**: each title is in the title placeholder, not in the body as a bullet.
- **Bullet levels**: each bullet is under the right title at the right level.
- **No empty slides or empty bullets**: blank lines in some files can produce an empty bullet or slide; remove them.
- **Text unchanged**: the words should match the file exactly. Do not retype or reword them unless the task tells you to.
- **Layout**: imported slides normally use a title and content layout. Apply a different layout only if the task asks.
- **Formatting**: text from a rich text file may bring its own fonts and colours. Most packages have a command to **reset** a slide so that it takes its formatting from the master. Resetting now means the master slide settings you apply next will reach every slide.

Then **save** the presentation in the software's own format, with the file name the task gives. The original text file is left unchanged.

## Linking to the next steps

Creating the presentation is only the start. The next content rows of Topic 19 take the imported slides forward: setting fonts, logos and slide numbers on the master slide, then editing individual slides, and finally outputting the show. Our pages on [using a master slide](/resources/cambridge-igcse-ict-0417-use-a-master-slide-t19/) and [editing a presentation](/resources/cambridge-igcse-ict-0417-edit-a-presentation-t19/) continue from here.

## Common mistakes

- Leaving the blank first slide of a new presentation in front of the imported slides.
- Copying and pasting the text instead of importing it, so titles land in the body placeholder.
- Indenting the source with spaces instead of tabs when preparing a file, so every line becomes a title.
- Not checking bullet levels, so a sub-point appears as a main point.
- Retyping text "to tidy it", which introduces new errors.
- Formatting each slide by hand before resetting, so the master slide settings do not take effect.

## Exam technique

In the practical paper the instruction will usually say something like *create a new presentation using the file supplied*. The marks are for the slide titles, the bullets under them and the absence of extra slides, so check those three things against the file. In the theory paper, *describe* questions on this skill want the steps (open or insert the outline, check levels, delete blank slides), while *explain* questions want a benefit with a reason, for example: "Importing the text file avoids retyping, so no new typing errors are introduced."
