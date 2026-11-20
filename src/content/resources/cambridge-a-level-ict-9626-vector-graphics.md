---
title: "Cambridge A Level Information Technology (ICT): 19.2 Vector graphics (9626)"
seoTitle: "Cambridge A Level IT 9626: Vector Graphics Study Guide"
resourceType: "study-guides"
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
description: "Study guide to section 19.2 of Cambridge A Level IT 9626: vector drawing tools, Bezier curves, node and path editing, fills and tracing bitmaps into editable vector shapes."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
reviewNeeded: true
reviewNote: "2026-11-20: check the node-type descriptions (smooth, symmetrical, asymmetrical, cusp) against the vector software used on the course; names and behaviour differ between programs."
---

This guide goes deeper into section **19.2 Vector graphics** of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 4). It is **A Level only** content. Paper 4 (Advanced Practical) tests sections 17 to 21, and Paper 3 (Advanced Theory) is based on sections 12 to 21.

The syllabus asks you to be able to:

- create a vector graphic that meets the requirements of its intended application and audience
- use **vector drawing tools**: freehand drawing, Bezier curves, straight lines, shape tools (rectangles, ellipses, circles, arcs, stars, polygons and spirals) and envelopes and perspectives
- use **selection tools** to select and manipulate parts of a vector graphic, including convert to curves, replication and transformation tools
- use **fill tools** (solid and gradient)
- use **node and path editing**: add, move and delete nodes to simplify paths, use Bezier handles, work with symmetrical, asymmetrical, cusp and smooth nodes, and align and distribute nodes
- **convert bitmap images into editable vector shapes** (trace bitmap) and give the advantages and disadvantages of doing so.

Use it with the [graphics creation topic guide](/resources/a-level-cambridge-ict-graphics-creation/), the [topic revision notes](/resources/a-level-cambridge-ict-graphics-creation-revision-notes/) and the [practice questions](/resources/cambridge-a-level-ict-9626-vector-graphics-practice/). Layers, transform tools, colour systems and file formats are in the [common graphics skills guide](/resources/cambridge-a-level-ict-9626-common-graphics-skills/). The [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) lists every topic.

## What is a vector graphic?

A **vector graphic** stores a picture as a list of objects, each described by mathematics: shapes, lines and curves defined by points, positions, sizes, outline colours and fills. A bitmap, by contrast, is a grid of coloured pixels.

| Property | Vector | Bitmap |
|---|---|---|
| Stored as | Shapes and paths with properties | Grid of pixels |
| Enlarging | Redrawn at any size with no loss of quality | Becomes blocky or blurred |
| File size | Small for simple images; grows with the number of objects | Depends on pixels and colour depth, not on complexity |
| Editing | Each object can be selected and changed separately | Edits change pixels |
| Best for | Logos, diagrams, maps, text, technical drawings, signs | Photographs and complex shading |

Because the picture is made of objects, vector graphics suit work that must be scaled, edited and reused.

## Meeting the requirements of application and audience

Before drawing, decide:

- **Application:** where will it be used (web, print, signage, animation)? This determines size, colour system, file format and level of detail.
- **Audience:** who is it for? Age, interests and needs influence the style, colours and complexity.
- **Constraints:** size, colours, text, brand rules and file format.

For example, a school logo for a website and a minibus needs a simple shape, few colours and an SVG file that scales without loss.

## Vector drawing tools

| Tool | Use |
|---|---|
| **Freehand** | Draws a line following the mouse or pen; the software converts it into a path with nodes (some programs smooth it automatically) |
| **Bezier / pen tool** | Draws precise curves by placing nodes and adjusting handles |
| **Straight line** | Draws straight segments between points |
| **Shape tools** | Create rectangles, ellipses, circles, arcs, stars, polygons and spirals from parameters such as number of sides or points |
| **Envelope** | Reshapes an object by moving the corners and edges of a surrounding frame |
| **Perspective** | Skews an object so that it appears to recede in space |

Shapes have properties that can be changed after drawing, such as the number of points on a star, the corner rounding on a rectangle or the start and end angles of an arc.

### Bezier curves

A **Bezier curve** is defined by two end nodes (anchor points) and **handles** (control points). The direction in which a handle points sets the direction in which the curve leaves the node. The length of the handle sets how far the curve is pulled in that direction. A longer handle makes a broader curve. By moving handles, you can shape a smooth curve using very few points.

## Selection tools

- **Select** an object, or several, to move, resize or change its properties. Selecting one node or segment lets you edit part of the shape.
- **Convert to curves** (or convert object to path) changes a shape or text into an ordinary path made of nodes. After conversion the object can be edited node by node, but the original properties are lost: a rectangle no longer has "corner radius", and text can no longer be edited as text.
- **Replication** makes copies of an object: duplicate, clone, or arrays of copies at set spacing or angles. This is quick and accurate.
- **Transformation tools** resize, rotate, skew, reflect and move selected objects (see the common graphics skills guide).

### Worked example: replication

A designer wants a flower with 8 petals. She draws one petal, then makes 7 more copies. Each copy is rotated about the flower's centre by 360 degrees / 8 = 45 degrees more than the last, giving rotations of 45, 90, 135, 180, 225, 270 and 315 degrees. For a row of 5 stars, 20 mm apart, starting at 10 mm from the left, the star centres are at 10, 30, 50, 70 and 90 mm.

## Fill tools

A **solid fill** uses one colour. A **gradient fill** blends two or more colours, in a linear or radial pattern, with control of the colours, their positions and direction. The outline (stroke) has its own colour and width. A fill can be set to none, so only the outline appears.

## Node and path editing

A **path** is a line or curve made of nodes joined by segments. Editing the nodes changes the shape.

| Action | Purpose |
|---|---|
| **Add node** | Gives more control over a segment |
| **Delete node** | Removes a point; fewer nodes give a simpler, smoother path with a smaller file |
| **Move node** | Changes the shape of the path |
| **Align and distribute nodes** | Line up nodes on an axis or space them equally, for neat shapes |
| **Use Bezier handles** | Change the curve's direction and tension at a node |

### Types of node

| Node type | Handles | Result |
|---|---|---|
| **Cusp** | Move independently | Allows a sharp corner or a sudden change in direction |
| **Smooth** | Lie on a straight line through the node | The curve passes through without a corner |
| **Symmetrical** | On a straight line and **equal in length** | The curve bends equally on both sides of the node |
| **Asymmetrical** | On a straight line but **different lengths** | The curve is more tightly bent on one side than the other |

Choosing the right node type is the key to smooth, professional-looking curves: smooth or symmetrical for flowing curves, cusp for points.

**Simplifying paths:** after tracing or freehand drawing, a path may have far too many nodes. Deleting unnecessary nodes (or using a simplify command) makes the path smoother, easier to edit and the file smaller.

## Converting bitmaps into vector shapes: trace bitmap

**Trace bitmap** analyses a bitmap image and produces vector paths that follow edges and areas of colour. Typical settings are the number of colours or scans, a brightness threshold, smoothing and the removal of speckles.

| Advantages | Disadvantages |
|---|---|
| The result can be scaled to any size without loss of quality | Fine detail and subtle shading are lost, and the colours are reduced |
| Each shape can be edited, recoloured or deleted | A photograph produces a large, complicated path with thousands of nodes and a big file |
| Simple images such as logos or line drawings can have smaller files | The tracing is rarely perfect and often needs manual clean-up of nodes |
| Useful for turning a scanned sketch or old logo into a usable file | The result may not look like the original |

Tracing works best on images with clear edges and few colours, such as a black and white logo scanned at a good resolution, and worst on photographs.

## Common errors

- Describing vector graphics as "made of pixels".
- Saying vectors cannot be enlarged. They can, without loss.
- Converting text to curves too early and then being unable to correct a spelling mistake.
- Adding too many nodes, giving lumpy curves.
- Tracing a photograph and expecting a small file.
- Confusing smooth and cusp nodes.
- Not matching file format and size to the application.

## Frequently asked questions

**Why can vector graphics be enlarged without loss of quality?**
They are stored as mathematical descriptions of shapes, which are redrawn at the new size, instead of a fixed grid of pixels.

**What does convert to curves do?**
It changes an object or text into an editable path of nodes, so it can be edited node by node. The original shape or text properties are lost.

**What is a Bezier handle?**
A control point attached to a node that sets the direction and the pull of the curve at that node.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 4, Cambridge University Press & Assessment. Section 19.2: Vector graphics.
