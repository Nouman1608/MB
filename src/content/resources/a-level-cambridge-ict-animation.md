---
title: "Cambridge A Level Information Technology (ICT): Animation (9626)"
seoTitle: "Cambridge A Level ICT 9626 Animation Study Guide"
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
description: "Study guide for Cambridge A Level IT 9626 Animation: stage set-up, vector objects, layers, masks, tweening, frame rates and animation types."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This study guide covers **topic 20, Animation** (section 20.1) of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 3). It is **A Level only** content. The syllabus bases **Paper 3 (Advanced Theory)** questions on sections 12–21 and **Paper 4 (Advanced Practical)** tasks on sections 17–21, so you can meet animation in both papers. Calculators are not allowed in Paper 3, so every calculation here works by hand.

The syllabus names no software, so tools are described in general terms. Use this guide with the [Animation revision notes](/resources/a-level-cambridge-ict-animation-revision-notes/) and the [Animation practice questions](/resources/a-level-cambridge-ict-animation-practice/). Course hub: [Cambridge A Level ICT](/boards/cambridge/a-level/ict/). Printable checklist: [9626 checklist](/checklists/cambridge/a-level/ict/). Find your gaps first with a [free 10-minute diagnostic](/diagnostics/).

## What this topic covers

| Section | What you must be able to do | Level |
|---|---|---|
| 20.1 | Create stop motion and key frame animations that meet the needs of the application and audience | A Level only |
| 20.1 | Configure the stage (colour, size, aspect ratio with rulers, guides and grid, snapping); create and import vector objects (tracing bitmaps, text); control stroke, fill, size, position, orientation and transparency | A Level only |
| 20.1 | Set paths, use layers, apply masks, adjust frame rates, loop or stop animations | A Level only |
| 20.1 | Explain frames, key frames, property key frames, timings, coordinates, tweening (motion, shape, size, colour) and morphing | A Level only |
| 20.1 | Describe cel, stop motion, time lapse, flip book, CGI, 2D and 3D animation, and their advantages and disadvantages | A Level only |
| 20.1 | Identify primary, secondary and other components; explain how animation variables control position | A Level only |

Every choice is judged against one test: does the animation suit its **intended application and audience**? A looping web banner and a children's story need different sizes, speeds and styles.

## Setting up the stage

The **stage** (frame or canvas) is the area viewers see. Set it up first.

- **Colour.** The background colour sets the mood and must contrast with the objects on top.
- **Size.** Width and height in pixels, matched to where the animation will be shown.
- **Aspect ratio.** The ratio of width to height, such as 16:9 or 4:3. If the ratio is wrong the animation is stretched or shows bars when displayed.
- **Rulers, guides and grid.** Rulers show measurements along the edges. Guides are lines dragged from the rulers to mark positions such as the centre. A grid divides the stage into equal cells.
- **Snapping.** Moved objects jump to the nearest grid line, guide or object, so they line up exactly.

**Worked example 1 -- configuring a stage.** A museum wants a 16:9 animation 1280 pixels wide, with a 40-pixel grid and a guide through the centre.

```
Height = 1280 × 9 ÷ 16 = 720 px
Grid: 1280 ÷ 40 = 32 columns, 720 ÷ 40 = 18 rows
Centre guides: x = 1280 ÷ 2 = 640, y = 720 ÷ 2 = 360
```

40 divides both sides exactly, so there are no part-cells at the edges.

## Creating and controlling objects

### Vector objects

**Vector objects** are shapes stored as points, lines and curves with properties, not as a grid of pixels. They scale without losing quality and keep files small. Draw them with shape and pen tools or import them.

- **Tracing bitmaps.** Tracing converts a bitmap (such as a scanned sketch) into vector shapes by finding edges and areas of similar colour. The result scales and edits like any vector, but fine detail may be simplified.
- **Adding text.** Text is an object with font, size and colour. Keep it short and large enough to read while moving.

### Object properties

- **Stroke and fill.** The stroke is the outline (its colour, width and style); the fill is the inside (a solid colour, gradient or pattern).
- **Size, position and orientation.** Width and height; x and y coordinates; rotation angle.
- **Transparency.** Often set as opacity, from 0% (invisible) to 100% (solid). Changing it over time makes objects fade in or out.

### Paths, layers and masks

- **Paths.** A path is a line or curve that an object follows between two key frames. Without a path, a motion tween moves in a straight line. A path lets a bird swoop or a car follow a winding road.
- **Layers.** Each layer is a separate transparent sheet. Put the background, each character and the text on their own layers, so you can animate one without disturbing the others and control which object appears in front.
- **Masks.** A mask is a shape on one layer that controls what shows on the layer(s) beneath it: only the parts under the mask shape are visible. Moving the mask gives effects such as a spotlight sweeping across a scene.

### Controlling playback

- **Frame rate** is the number of frames shown each second (fps). A higher rate gives smoother motion but needs more frames and a larger file. Changing it without changing the frames changes the running time.
- **Looping** plays the animation again from the start when it ends, which suits banners and loading icons. **Stopping** holds the last frame, which suits a story or an advert that ends on a logo.

**Worked example 2 -- frame rate.** An animation has 144 frames at 24 fps.

```
Running time = 144 ÷ 24 = 6 s
Same 144 frames at 12 fps: 144 ÷ 12 = 12 s (twice as long, jerkier)
Frames needed for 6 s at 12 fps: 6 × 12 = 72 frames
```

## The basic principles of animation

- A **frame** is a single image in the sequence.
- A **key frame** marks a point where something is defined or changes, such as the start and end positions of a movement.
- A **property key frame** records the value of one property (such as position, rotation or opacity) at a point in time, without fixing the others. You can then change, say, the colour on a different timing from the movement.
- **Timings** are where the key frames sit on the timeline. Key frames close together give a fast change; far apart give a slow one.
- **Coordinates** give an object's position as (x, y) on the stage, or (x, y, z) in 3D. Many 2D tools measure from the top-left corner, with y increasing downwards; check the convention in your software.

### Inbetweening ('tweening')

**Tweening** is the software generating the frames between two key frames. You set the start and end; the computer calculates every frame in between. Tweens can change:

- **motion** (position, possibly along a path)
- **shape** (one shape gradually becomes another)
- **size** (scaling up or down)
- **colour** (including transparency)

With even timing, each in-between frame changes by the same amount.

**Worked example 3 -- a motion, size and transparency tween.** A balloon is at (100, 300) on frame 1 and at (580, 60) on frame 25. Its width goes from 50 to 200 pixels. Its opacity goes from 100% to 20%. Find its values on frame 13, and its opacity on frame 19.

```
Frame intervals = 25 − 1 = 24
x changes by 580 − 100 = 480 → 480 ÷ 24 = 20 px per frame
y changes by 60 − 300 = −240 → −10 px per frame (moving up)

Frame 13 is 12 of 24 intervals = halfway
x = 100 + 240 = 340, y = 300 − 120 = 180 → (340, 180)
Width = 50 + (150 ÷ 2) = 125 px

Frame 19 is 18 of 24 = 3/4 of the way
Opacity = 100 − (3/4 × 80) = 40%
```

### Morphing

**Morphing** changes one image or shape into another through a seamless transition. The first image is warped towards the shape of the second while the two cross-fade. The effect is a smooth transformation, such as one face turning into another.

## Animation types and methods

- **Cel animation.** Characters are drawn and painted on transparent sheets called cels (short for celluloid) and laid over a static painted background. The background is drawn once, which cuts the number of times an image has to be redrawn.
- **Stop motion.** Real objects, such as puppets or clay figures, are moved in small steps and photographed one frame at a time. Played back, they appear to move by themselves.
- **Time lapse.** Frames are captured at a much lower rate than they are played back, so slow processes such as a plant growing or clouds moving appear speeded up.
- **Flip book.** A booklet of images that change gradually from page to page; flicking the pages quickly makes the images appear to move.
- **CGI (computer-generated imagery).** Images and animation created with computer graphics, used in films, adverts, games and simulators. It covers 2D and 3D work.
- **2D animation.** Flat images with x and y only, drawn by hand or as vectors.
- **3D animation.** Objects are built as 3D models (x, y and z), given surfaces, lighting and camera positions, then rendered into frames.

**Worked example 4 -- time lapse and stop motion planning.**

```
Time lapse: a photo every 30 s for 2 hours
2 h = 7200 s → 7200 ÷ 30 = 240 photos
Played at 24 fps: 240 ÷ 24 = 10 s of animation
Speed-up = 7200 s ÷ 10 s = 720 times

Stop motion: 15 s at 12 fps → 15 × 12 = 180 photos
At 2 minutes per pose: 180 × 2 = 360 min = 6 hours
```

## Components of an animation

- **Primary components** are the main focus, such as the main characters or the product in an advert.
- **Secondary components** support the primary ones, for example **sound** (music, voice, effects) and the **background**.
- **Other components** include props, on-screen text, lighting and special effects. These are examples; the syllabus does not list them.

Secondary components should not compete with the primary ones: a busy background or loud music can hide the message.

## Animation variables

An **animation variable** (avar) is a variable that controls the position of an animated object or part of it, such as a character's arm angle or the x coordinate of a ball. A character may have many avars, one for each joint or feature. Changing an avar from frame to frame moves that part without redrawing the whole object.

**Worked example 5 -- a bouncing ball.** A ball 60 px wide starts at x = 40 on a stage 550 px wide. Each frame, x increases by the variable `speed` = 15.

```
Each frame:
    x ← x + speed
    IF x + 60 ≥ 550 OR x ≤ 0 THEN speed ← −speed

Right edge reached when x = 550 − 60 = 490
Frames needed = (490 − 40) ÷ 15 = 30 frames
At 24 fps: 30 ÷ 24 = 1.25 s
```

Reversing the sign of `speed` makes the ball bounce back. A variable such as `armAngle` could swing an arm between two limits in the same way.

## Advantages and disadvantages of animation types

| Type | Advantages | Disadvantages |
|---|---|---|
| Cel | Background drawn once; hand-drawn style; work can be split between teams | Every moving drawing is made by hand; slow and labour-intensive |
| Stop motion | Real textures and lighting; distinctive look; needs only a camera and models | Slow (one photo per frame); small knocks to the set show up as jumps |
| Time lapse | Shows slow changes clearly; little effort once the camera is set | Only suits real, slow processes; needs a fixed camera and long capture time |
| Flip book | Cheap; no equipment; good for teaching how animation works | Very short; one viewer at a time; cannot be edited easily |
| CGI | Realistic or impossible scenes; easy to edit, reuse and re-render | Needs powerful hardware, specialist software and skills; rendering can be slow |
| 2D | Faster and cheaper to produce than 3D; smaller files | Flat; less realistic depth |
| 3D | Realistic depth, lighting and camera moves; models reusable from any angle | Complex modelling; long render times; large files |

## Common errors

- Saying a key frame is "any frame". A key frame defines a value; tweened frames are calculated from it.
- Changing the frame rate and expecting the running time to stay the same.
- Confusing a mask with a layer: the mask decides what is visible on the layers it masks.
- Describing time lapse as "playing a video fast": frames are captured at long intervals.
- Calling all computer animation "3D". CGI covers 2D and 3D.

Next, test recall with the [revision notes](/resources/a-level-cambridge-ict-animation-revision-notes/) and try the [practice questions](/resources/a-level-cambridge-ict-animation-practice/). Frame rate and aspect ratio also appear in the AS topic [Video and audio editing](/resources/a-level-cambridge-ict-video-and-audio-editing/).

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 3, Cambridge University Press & Assessment. Topic 20: Animation (20.1 Animation).
