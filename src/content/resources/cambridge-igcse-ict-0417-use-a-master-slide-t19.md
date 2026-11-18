---
title: "Cambridge IGCSE ICT (0417): Use a master slide"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 19: Presentations"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 19.2
syllabusTopics:
  - qualification: "igcse"
    topic: "presentations"
    subtopic: "use-a-master-slide-t19-0417"
description: "Using a master slide for Cambridge IGCSE ICT 0417 Topic 19: logos, shapes, footers and slide numbers, placeholder position, headings and bullets."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

"Use a master slide" is the second content row of Cambridge IGCSE ICT 0417 Topic 19. The syllabus guidance has two parts. You must **insert and edit objects consistently**, including images, text, shapes, logos, slide headers and footers, placeholder position and automated slide numbering. You must also **format master slide objects**, including headings, subheadings, bullets and background colour. Both parts are about one idea: make a change once, on the master, so that it appears identically on every slide.

The [Presentations study guide](/resources/cambridge-igcse-ict-presentations-study-guide/) introduces the master slide alongside the rest of Topic 19. This page goes further into how the master is organised, how each listed object is set up and how to check it worked. Use the [master slide revision notes](/resources/cambridge-igcse-ict-0417-use-a-master-slide-t19-revision-notes/) and [master slide practice questions](/resources/cambridge-igcse-ict-0417-use-a-master-slide-t19-practice/) to consolidate it.

## How the master is organised

When you open the master view in most presentation packages, you see a **main master** at the top and a set of **layout masters** beneath it (title slide, title and content, two content, title only and so on).

- A change to the **main master** flows down to every layout, and therefore to every slide.
- A change to a **single layout master** affects only the slides that use that layout.
- A layout can be set to **hide background graphics**, which removes master objects (such as a logo) from that layout only. The title slide layout is sometimes set up this way by default.

This explains a frequent problem: a logo placed on the main master appears on every slide except the title slide, because that layout hides background graphics. Check every layout, not just the main master, whenever the task says "every slide".

## Inserting and editing objects consistently

Objects on the master sit behind the slide content and cannot be selected or moved in normal view. That is what makes them consistent: the same object, in the same position, on every slide, and nobody can nudge it out of place on one slide by accident.

### Images and logos

Insert the image on the main master, then position and size it as instructed, such as "in the top right corner". Keep the **aspect ratio** locked when resizing so the logo is not stretched. If the task gives a size, set it in the size dialogue, not by eye. For example, a logo 600 pixels wide and 400 pixels high, resized to 3 cm wide with the aspect ratio locked, becomes 3 × 400 / 600 = 2 cm high.

### Text and shapes

A text box on the master, such as an organisation's name, appears on every slide. Shapes such as a coloured bar, a line under the title area or a rectangle behind the footer are added in the same way. If a shape covers a placeholder, use the order commands (send to back) so that slide text stays visible.

### Slide headers and footers

The **footer** area of the master has placeholders for the footer text, the date and the slide number. Placing them on the master sets their position and formatting; you then switch them on in the header and footer settings so that they show on the slides. Those settings often include an option not to show them on the title slide, which you should use only if the task says so.

Many packages have no separate header placeholder on slides themselves. A **slide header** is created by placing a text box at the top of the master. The headers and footers settings for **notes and handouts** are separate and control printed pages, not slides.

### Placeholder position

The title and content placeholders can be moved and resized on the master. Moving them there moves them on every slide that uses that layout. Typical reasons are to leave room for a logo, or to set the title area to a specific position. Never fix this by dragging placeholders on individual slides: they will end up in slightly different places.

### Automated slide numbering

An automated slide number is a **field** that the software fills in. On the master it often appears as a symbol such as `<#>`; on each slide it shows that slide's number. If slides are added, moved or deleted, the numbers update automatically. A number typed into a text box on the master would show the same number on every slide, and numbers typed on each slide would be wrong as soon as the order changed.

## Formatting master slide objects

### Headings and subheadings

Format the **title placeholder** on the master to set every slide heading: font, size, colour, style (bold, italic) and alignment. **Subheadings** are formatted in the same way through the relevant placeholder or text level, such as the subtitle on the title slide layout. Select the whole placeholder, not a few characters, so the format applies to all text in it.

### Bullets

The body placeholder has several **levels** of text. Each level can be given its own bullet character (round, square, arrow or a symbol), bullet colour, bullet size and indent. If the task says "first-level bullets must be square", change only level 1. Sub-bullets keep their own setting unless told otherwise.

### Background colour

Set the background on the main master so that every layout inherits it. Choose the exact colour asked for, and check contrast: dark text on a dark background cannot be read from the back of a room.

## Worked example: setting up a master

*This brief is invented for practice.* A charity wants: a pale yellow background; titles in a sans-serif font, 40 point, bold, dark green, left aligned; first-level bullets as green squares in 24 point; the charity logo in the top right corner of every slide, 4 cm wide; a dark green bar across the bottom of every slide; the footer text *Helping Hands 2026*; and automated slide numbers at the bottom right.

1. Open master view and select the **main master**, not a layout.
2. Set the background to pale yellow.
3. Select the title placeholder; apply the sans-serif font, 40 point, bold, dark green and left alignment.
4. Select level 1 of the body text; set square bullets, green, and the text size to 24 point.
5. Insert the logo, lock the aspect ratio, set the width to 4 cm, drag it to the top right corner. Narrow the title placeholder so the title does not run under the logo.
6. Draw a rectangle across the bottom edge, fill it dark green, send it to the back so the footer text sits on top of it, and set the footer text colour so it contrasts with the bar.
7. Type *Helping Hands 2026* into the footer placeholder; check the slide number placeholder is at the bottom right.
8. Open header and footer settings; tick footer and slide number; apply to all.
9. Look at each layout master, especially the title slide layout, to check the logo and bar are not hidden. Close master view.
10. In slide sorter view, check every slide shows the same background, logo, bar, footer and a different, correct slide number.

## When the master seems not to work

If a slide ignores the master, it has **local formatting** that overrides it, usually because someone formatted that slide by hand or because text came in with formatting from another file. Use the reset command for the slide so its placeholders return to the master's settings. Then avoid formatting individual slides for anything the master should control.

## Common mistakes

- Formatting the title on each slide instead of on the master.
- Editing one layout master when the change was meant for the main master.
- Typing slide numbers instead of inserting the slide number field.
- Placing footer content on the master but forgetting to switch it on.
- Stretching a logo by dragging one edge with the aspect ratio unlocked.
- A logo hidden on the title slide because that layout hides background graphics.
- Changing every bullet level when only level 1 was asked for.

## Exam technique

Practical instructions use *set*, *place*, *insert* and *format*, and each named item is usually a separate mark, checked on more than one slide. In theory questions, *explain* the purpose of a master slide by giving a benefit and its reason: "The logo is placed once on the master, so it appears in exactly the same position on every slide and only needs changing in one place." For automated numbering, the reason to give is that numbers update when slides are added, moved or deleted.
