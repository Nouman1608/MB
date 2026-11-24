---
title: "Cambridge A Level Information Technology (ICT): 19.2 Vector graphics (9626) -- Practice Questions"
seoTitle: "Cambridge A Level IT 9626: Vector Graphics Practice"
resourceType: "practice-questions"
subject: "ict"
level: ["a-levels"]
topic: "Graphics creation"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 19.2
syllabusTopics:
  - qualification: "a-level"
    topic: "graphics-creation"
  - qualification: "a-level"
    topic: "graphics-creation"
    subtopic: "vector-graphics"
description: "Original practice questions with marked answers on vector drawing tools, Bezier curves, node types, replication and tracing bitmaps for section 19.2 of Cambridge A Level IT 9626."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-20: check the node-type descriptions (smooth, symmetrical, asymmetrical, cusp) against the vector software used on the course; names and behaviour differ between programs. 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover **section 19.2 Vector graphics** of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 4). This is **A Level only** content. The syllabus tests the practical skills in Paper 4 (Advanced Practical) and bases Paper 3 (Advanced Theory) on sections 12 to 21, where calculators are not allowed. These written questions can be answered on paper; practise the tools in your own vector software too.

Revise first with the [study guide](/resources/cambridge-a-level-ict-9626-vector-graphics/) and the [topic revision notes](/resources/a-level-cambridge-ict-graphics-creation-revision-notes/). The [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) lists every topic.

## Questions

**1.** Explain what is meant by a vector graphic, and state **two** differences between a vector graphic and a bitmap image. **[4]**

**2.** A sports club needs a new logo. It will be printed on shirts, shown on its website and painted on the side of a minibus.

**(a)** Explain why a vector graphic is a suitable type of image for the logo. **[2]**
**(b)** State a suitable file format for the finished logo and give a reason. **[2]**
**(c)** Describe **two** things the designer should find out about the application and the audience before starting to draw. **[2]**

**3.** State the shape tool, or tool, that would be used to draw each of the following.

**(a)** a badge with five points **[1]**
**(b)** a smooth wavy line for the edge of a river on a map, using as few points as possible **[1]**
**(c)** a part of the outline of a circle, such as a pie slice **[1]**
**(d)** a shape that is flat and rectangular that needs to look as if it is leaning back into the distance **[1]**

**4.** A designer is drawing a flower with 12 identical petals around a centre. She draws one petal and then uses replication.

**(a)** State the angle between each petal and the next. **[1]**
**(b)** State the angle of rotation, measured from the original petal, of the fourth copy. **[1]**
**(c)** She also wants a row of 6 stars, spaced 25 mm apart, with the first star centred 15 mm from the left edge. State the distance of the last star from the left edge. **[2]**

**5.** A path that was drawn freehand has far too many nodes and a lumpy outline.

**(a)** Describe how the path can be improved using node and path editing. **[3]**
**(b)** Explain **two** benefits of a path with fewer nodes. **[2]**

**6.** Describe the effect of each type of node on a curve.

**(a)** cusp **[1]**
**(b)** smooth **[1]**
**(c)** symmetrical **[1]**
**(d)** asymmetrical **[1]**

**7.** Explain what a Bezier handle is and what happens to the curve when the handle is made longer. **[3]**

**8.** The designer converts the club's name, typed in a text box, into curves.

**(a)** Give **one** reason for doing this. **[1]**
**(b)** Give **one** problem that it creates. **[1]**

**9.** The club has an old logo that exists only as a scanned bitmap image. The designer uses a trace bitmap tool to convert it to an editable vector shape.

**(a)** Describe what trace bitmap does. **[2]**
**(b)** Give **two** advantages of converting the logo. **[2]**
**(c)** Give **two** disadvantages of converting bitmaps into vector shapes, with one example of an image for which it is a poor choice. **[3]**

## Answers

**1.** A vector graphic is stored as a set of objects (shapes, lines and curves) described by mathematical properties such as points, size, position, outline and fill [1]; a bitmap is stored as a grid of pixels [1]. Any two differences: a vector can be enlarged without loss of quality, while a bitmap becomes blocky [1]; each object in a vector can be edited separately, while a bitmap edit changes pixels; file size depends on the number of objects in a vector but on pixels and colour depth in a bitmap. [1] **[4]**

**2. (a)** The logo will be used at very different sizes (a shirt, a web page, a minibus) [1]; a vector graphic can be scaled to any size with no loss of quality. [1] **[2]**
**(b)** SVG [1], because it keeps the shapes as vectors so it stays sharp at any size and is suitable for the web. (Accept PDF with a reason.) [1] **[2]**
**(c)** Any two: where it will be used and at what size (print, web or signage); the number and type of colours (for example screen or print colours); the age and interests of the audience, which affect style; any brand rules, text or file format that must be used. [1 each] **[2]**

**3. (a)** Star (shape tool), with five points. [1]
**(b)** Bezier (pen) tool. [1]
**(c)** Arc (or ellipse/circle tool set to a pie or arc). [1]
**(d)** Perspective (or envelope). [1] **[4]**

**4. (a)** 360 ÷ 12 = 30 degrees. [1] **[1]**
**(b)** 4 × 30 = 120 degrees. [1] **[1]**
**(c)** The stars are 5 gaps apart (6 stars) [1], so 15 + 5 × 25 = 140 mm. [1] **[2]**
*Examiner insight:* Six stars have five gaps. The common error is 15 + 6 × 25 = 165 mm.

**5. (a)** Select the path and delete unnecessary nodes (or use a simplify command) [1]; adjust the Bezier handles on the remaining nodes to smooth the curves [1]; set the nodes at changes of direction to smooth or symmetrical, and use cusp nodes only for corners. [1] **[3]**
**(b)** Any two: the curves are smoother and look better [1]; the path is easier to edit [1]; the file is smaller [1]; it is quicker to display. **[2]**

**6. (a)** The handles move independently, so the path can have a sharp corner or sudden change of direction. [1]
**(b)** The handles lie on a straight line, so the curve passes through the node without a corner. [1]
**(c)** The handles lie on a straight line and are the same length, so the curve bends equally on both sides. [1]
**(d)** The handles lie on a straight line but have different lengths, so the curve bends more on one side than the other. [1] **[4]**

**7.** A Bezier handle is a control point attached to a node [1]; it sets the direction that the curve leaves the node [1]; a longer handle pulls the curve further in that direction, making a broader, more rounded curve. [1] **[3]**

**8. (a)** Any one: so that the lettering can be edited node by node or reshaped; so that the logo does not depend on the font being installed on other computers. [1] **[1]**
**(b)** The text can no longer be edited as text (for example to correct a spelling mistake) and the font properties are lost. [1] **[1]**

**9. (a)** It examines the bitmap and creates vector paths that follow the edges and colour areas in the image [1], using settings such as the number of colours and smoothing, to produce editable shapes. [1] **[2]**
**(b)** Any two: the logo can be scaled to any size without loss of quality; each shape can be edited or recoloured; the file may be smaller for a simple logo. [1 each] **[2]**
**(c)** Any two: fine detail and shading are lost; a complex image produces a very large file with a lot of nodes; the result usually needs manual clean-up; the colours are reduced. [1 each] Example: a photograph. [1] **[3]**

## Where marks are usually lost

- Describing a vector graphic as made of pixels.
- Forgetting that six items have five gaps.
- Confusing smooth and symmetrical nodes.
- Not explaining the effect on the curve when asked about a handle.
- Saying that tracing "improves quality".
- Not linking the file format to the application.

## More on this topic

- Recap with the [topic revision notes](/resources/a-level-cambridge-ict-graphics-creation-revision-notes/).
- Reread the [study guide](/resources/cambridge-a-level-ict-9626-vector-graphics/).
- Explore the [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) and the [printable 9626 checklist](/checklists/cambridge/a-level/ict/).
- Try all free 10-minute [diagnostics](/diagnostics/).
- [Book a free trial class](/trial/).

## Frequently asked questions

**When is a vector graphic better than a bitmap?**
When the image must be scaled, edited object by object or reused at different sizes, such as logos, diagrams and signs.

**What is the purpose of node editing?**
To control the shape of a path precisely, with as few nodes as possible, so that it is smooth, easy to edit and small.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 4, Cambridge University Press & Assessment. Section 19.2: Vector graphics.
