---
title: "Cambridge A Level Information Technology (ICT): 20.1 Animation (9626)"
seoTitle: "Cambridge A Level IT 9626: Animation Study Guide"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Animation"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 20
syllabusTopics:
  - qualification: "a-level"
    topic: "animation"
  - qualification: "a-level"
    topic: "animation"
    subtopic: "animation-content"
description: "Study guide to section 20.1 of Cambridge A Level IT 9626: stage set-up, frames and key frames, tweening and morphing, layers, masks, frame rates and the types of animation."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide goes deeper into section **20.1 Animation** of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 4). It is **A Level only** content. Paper 4 (Advanced Practical) tests sections 17 to 21, and Paper 3 (Advanced Theory) is based on sections 12 to 21, where calculators are not allowed.

The syllabus asks you to be able to:

- create an animation (stop motion and key frame) that meets the requirements of its intended application and audience
- configure the **stage, frame or canvas**: colour, size, aspect ratio, rulers, guides, grid and snapping
- import and create **vector objects**, including tracing bitmaps and adding text
- control **object properties**: stroke and fill, size, position and orientation, and transparency
- set **paths**, use **layers** and apply **masks**
- control animations by **adjusting frame rates** and **looping or stopping** animations
- explain the **basic principles** of animation: frames, key frames, property key frames, timings, coordinates, tweening (motion, shape, size, colour) and morphing
- describe the **animation types and methods**: cel, stop motion, time lapse, flip book, CGI, 2D and 3D
- describe the **components** of an animation, the use of **animation variables**, and the advantages and disadvantages of different types.

Use it with the [animation topic guide](/resources/a-level-cambridge-ict-animation/), the [topic revision notes](/resources/a-level-cambridge-ict-animation-revision-notes/) and the [practice questions](/resources/cambridge-a-level-ict-9626-animation-practice/). The [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) lists every topic.

## What is animation?

**Animation** creates the illusion of movement by showing a sequence of still images (frames) quickly, one after another. The eye holds each image briefly (persistence of vision), so changes between frames are seen as smooth motion.

## Basic principles

### Frames and frame rate

A **frame** is one still image. The **frame rate** is the number of frames shown each second (frames per second, fps).

- Film often uses 24 fps. Web and TV animations commonly use 24 to 30 fps. Simple animations may use 12 fps.
- Total frames = frame rate x duration. A 5-second animation at 24 fps needs 24 x 5 = 120 frames.
- A higher frame rate gives smoother motion but needs more frames and a larger file. A lower rate looks jerky but is quicker to make.

### Key frames and property key frames

A **key frame** is a frame where something important is defined, such as the start and end positions of an object. A **property key frame** records the value of a **property** (position, size, rotation, colour, transparency) at that moment. The software calculates the frames between key frames.

### Inbetweening (tweening)

**Tweening** (inbetweening) automatically creates the frames between two key frames. It can change:

| Tween type | What changes |
|---|---|
| **Motion** | Position (and rotation) along a straight line or a path |
| **Shape** | One shape changes into another |
| **Size** | The object grows or shrinks |
| **Colour** | The colour (or transparency) changes gradually |

### Worked example: motion tween

A ball is at x = 0 in key frame 1 and x = 240 in key frame 25. There are 24 steps between them. With even steps (a linear tween), the ball moves 240 / 24 = 10 units per frame. In frame 13, 12 steps have passed, so x = 0 + 12 x 10 = 120. At 24 fps, the move takes 24 / 24 = 1 second.

Key frames at x = 100 (frame 1) and x = 300 (frame 31): 30 steps and a 200 unit change, so 200 / 30 is about 6.7 units per frame. In frame 16, 15 steps have passed, so x = 100 + 15 x (200 / 30) = 200, halfway.

### Morphing

**Morphing** is a shape tween in which one shape smoothly changes into another, such as a circle into a square, or one face into another. The software works out intermediate shapes by moving points and blending between the two. It makes smooth transformations that would take many hand-drawn frames. Complex morphs can look odd if the two shapes have very different numbers of points.

### Timings and coordinates

**Timing** is when things happen and how long they take: the number of frames between key frames sets the speed. Spacing key frames close together makes fast action, and wide spacing makes slow motion. **Coordinates** (x, y, and z in 3D) place objects on the stage. Position changes are described by coordinate values. The origin is usually at the top left of the stage in 2D animation software.

### Animation variables

An **animation variable** is a value that controls a property of an object, and which can change over time. A variable can control the position of an animated object or parts of an object, for example the x position, or the angle of an arm. Changing the variable over time creates movement. Linking variables saves work: for example, one variable can move a wheel and another can be tied to it so the body moves with it.

## Setting up the stage

| Setting | Notes |
|---|---|
| **Colour** | Background colour of the stage |
| **Size** | The pixel dimensions, such as 1,920 x 1,080 |
| **Aspect ratio** | The ratio of width to height, for example 16:9 or 4:3. Keep it matched to the display. A width of 1,280 at 16:9 gives a height of 1,280 x 9 / 16 = 720 |
| **Rulers, guides and grid** | Help to place and align objects accurately |
| **Snapping** | Makes objects snap to the grid, guides or other objects |

Choose the settings for the intended **application** (web, TV, phone, presentation) and **audience** (for example young children need simple, bright animation).

## Objects, layers, paths and masks

### Vector objects

Animation software usually uses vector objects, which stay sharp when scaled and have small file sizes. You can **create** shapes, **import** vector files, **trace a bitmap** to turn it into editable vector shapes, and **add text**.

### Object properties

| Property | Control |
|---|---|
| **Stroke and fill** | The outline (colour, width) and the inside (solid or gradient) |
| **Size, position and orientation** | How big, where and which way it faces (rotation) |
| **Transparency** | How see-through, from solid to invisible. Animating this makes fades |

### Paths

A **motion path** is a line or curve along which an object travels. Drawing a curved path gives natural movement, such as a bird flying in an arc. The object can be set to face the direction it travels (orient to path).

### Layers

**Layers** hold separate parts of the scene, such as the background, a character and the title. They keep objects from interfering with each other, allow each to be animated separately, and set the stacking order (front and back). Lock or hide layers while working on others.

### Masks

A **mask** is a shape on a layer that controls what is visible on the layer beneath: only the area inside the mask shows. Moving the mask over a picture creates a spotlight or a reveal effect.

## Controlling playback

- **Frame rate** can be adjusted to speed up or slow down the whole animation.
- **Looping** repeats the animation continuously, such as a walking cycle or an advert on a web page.
- **Stopping** (a stop action) makes the animation play once and stop on a chosen frame.

## Types and methods of animation

| Type | Description | Advantages | Disadvantages |
|---|---|---|---|
| **Cel animation** | Each frame is hand-drawn on transparent sheets (cels) laid over a background; the cels are photographed in turn | Traditional, artistic look; background can be reused | Very labour-intensive; many drawings needed |
| **Stop motion** | Real objects (clay, puppets) are moved a little between photographs of each frame | Distinctive physical look; no special software needed | Slow and precise work; any mistake may need the sequence to be repeated; limited by real objects |
| **Time lapse** | Photographs taken at long intervals of a slow change (a flower opening, clouds) and then played quickly | Shows changes too slow to see; simple to capture | Needs a fixed camera and a lot of time; lighting can change |
| **Flip book** | A series of drawings on pages that appear to move when flicked | Simple, cheap | Limited length and quality; not digital |
| **CGI** | Computer-generated images created and animated in software | Any scene possible; easy to edit; can combine with live action | Needs powerful computers and skilled staff; can be costly |
| **2D** | Flat, two-dimensional images (x and y) | Quicker to produce; smaller files; good for web, cartoons and presentations | Less depth and realism |
| **3D** | Models with depth (x, y and z), lit and viewed by a virtual camera | Realistic with depth, shadows and lighting | Modelling and rendering take time; needs powerful hardware; large files |

### Worked example: frames for stop motion and time lapse

- A stop motion film runs at 12 fps for 10 seconds, so it needs 12 x 10 = 120 photographs.
- A camera photographs a building site every 30 seconds for 2 hours. 2 hours is 7,200 seconds, so 7,200 / 30 = 240 photographs. Played at 24 fps, they last 240 / 24 = 10 seconds.

## Components of an animation

| Component | Examples |
|---|---|
| **Primary** | The main focus of the animation, such as the main characters or key objects |
| **Secondary** | Supporting parts: **sound** (speech, music, effects) and the **background** |
| **Other** | Other parts such as titles, captions, props, lighting and special effects |

A good animation is planned, for example with a **storyboard** (a series of sketches of key scenes) before it is built.

## Common errors

- Confusing frames with key frames. Key frames are the frames you define; tweening makes the frames between.
- Saying that a higher frame rate always means a better animation. It increases the number of frames and file size.
- Mixing up morphing (shape change) and motion tweening (position change).
- Confusing stop motion (real objects, photographed) with CGI.
- Using a mask when a layer is wanted, or the reverse.
- Forgetting to match the stage size and aspect ratio to the output.

## Frequently asked questions

**What is the difference between a frame and a key frame?**
A frame is any single image in the sequence. A key frame is one where the animator sets the important values, and the software fills in the frames between.

**What is tweening?**
Creating the frames between two key frames automatically, so that motion, shape, size or colour change gradually.

**What is morphing?**
A tween in which one shape smoothly turns into another.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 4, Cambridge University Press & Assessment. Section 20.1: Animation.
