---
title: "Cambridge A Level Information Technology (ICT): Animation (9626) -- Revision Notes"
seoTitle: "Cambridge A Level ICT 9626 Animation Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge A Level IT 9626 Animation: key terms, tweening and frame-rate methods, animation types compared, and a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

These revision notes cover **topic 20, Animation** (section 20.1) of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 3). This is **A Level only** content. The syllabus bases Paper 3 (Advanced Theory) on sections 12–21 and Paper 4 (Advanced Practical) on sections 17–21, so animation can appear in both. Calculators are not allowed in Paper 3.

For full explanations and worked examples, use the [Animation study guide](/resources/a-level-cambridge-ict-animation/). Then test yourself with the [Animation practice questions](/resources/a-level-cambridge-ict-animation-practice/). Course hub: [Cambridge A Level ICT](/boards/cambridge/a-level/ict/). Checklist: [9626 checklist](/checklists/cambridge/a-level/ict/). Check your weak spots with a [free 10-minute diagnostic](/diagnostics/).

## 20.1 Key definitions

| Term | Meaning |
|---|---|
| Stage / frame / canvas | The visible area of the animation |
| Aspect ratio | Width : height, e.g. 16:9, 4:3 |
| Snapping | Objects jump to the nearest grid line, guide or object when moved |
| Vector object | Shape stored as points, lines and curves; scales without losing quality |
| Tracing a bitmap | Converting a pixel image into editable vector shapes |
| Stroke / fill | Outline of a shape / inside of a shape |
| Transparency (opacity) | How see-through an object is; 0% opacity is invisible |
| Path | Line or curve an object follows between key frames |
| Layer | Separate transparent sheet; objects on it animate independently |
| Mask | Shape that decides which parts of the masked layer(s) are visible |
| Frame | One image in the sequence |
| Key frame | Frame where a value is set or changes |
| Property key frame | Key frame that records one property (e.g. rotation) at a point in time |
| Timing | Where key frames sit on the timeline; closer = faster change |
| Coordinates | Object position as (x, y), or (x, y, z) in 3D |
| Tweening | Software generates the frames between two key frames |
| Morphing | Seamless change of one image or shape into another (warp + cross-fade) |
| Frame rate | Frames shown per second (fps) |
| Loop / stop | Replay from the start / hold on the last frame |
| Animation variable | Variable controlling the position of an object or part of it |

## Software skills checklist (Paper 4)

The syllabus names no software. You should be able to:

1. Set stage colour, size and aspect ratio; use rulers, guides and grid; turn snapping on or off.
2. Draw vector shapes, import images, trace a bitmap, and add text.
3. Set stroke and fill, size, position, rotation and transparency.
4. Create key frames and tweens for motion, shape, size and colour; attach an object to a path.
5. Organise objects on layers; apply a mask.
6. Set the frame rate; make the animation loop or stop.
7. Build a stop motion sequence from still images, one image per frame.
8. Check the result suits the application and audience.

## Method in steps

**Frames, rate and time**

```
frames = time (s) × frame rate (fps)
time   = frames ÷ frame rate
```

Changing the frame rate and keeping the frames changes the running time.

**Even (linear) tween value at a given frame**

```
1. intervals = end frame − start frame
2. change per frame = (end value − start value) ÷ intervals
3. value = start value + (frame − start frame) × change per frame
```

*Reminder:* x goes from 0 on frame 1 to 300 on frame 31. Intervals = 30, so 10 px per frame. On frame 16, x = 0 + 15 × 10 = **150**.

**Time lapse**

```
photos = capture time ÷ interval between photos
playback time = photos ÷ playback fps
```

*Reminder:* one photo every 10 s for 1 hour = 3600 ÷ 10 = 360 photos. At 30 fps, 360 ÷ 30 = **12 s**.

**Aspect ratio**

```
height = width × (second number ÷ first number)
```

*Reminder:* 4:3 at 800 px wide → 800 × 3 ÷ 4 = **600 px** high.

**Animation variable loop (pseudocode)**

```
each frame:
    x ← x + speed
    IF edge reached THEN speed ← −speed
```

## Must-know distinctions

| Pair | Difference |
|---|---|
| Key frame v tweened frame | A key frame is set by you; tweened frames are calculated by the software |
| Key frame v property key frame | A key frame can fix several values; a property key frame records one property, so properties can change on different timings |
| Motion tween v shape tween | Motion moves the object (position, possibly on a path); shape changes its outline into another shape |
| Shape tween v morphing | A shape tween changes vector shapes; morphing warps and cross-fades one image into another |
| Layer v mask | A layer holds objects; a mask controls what is visible on the layers it masks |
| Loop v stop | Loop replays (banners, loading icons); stop holds the final frame (stories, adverts ending on a logo) |
| Stop motion v time lapse | Stop motion: you move objects between photos. Time lapse: the scene changes by itself between photos |
| Cel v flip book | Cel: characters on transparent sheets over one background, filmed. Flip book: a booklet of drawings flicked by hand |
| 2D v 3D | 2D: x and y only, flat. 3D: x, y and z, with models, lighting, camera and rendering |
| CGI v 3D | CGI is any computer-generated imagery, 2D or 3D |
| Primary v secondary component | Primary is the main focus (main characters). Secondary supports it (sound, background) |

## Animation types: one-line pros and cons

- **Cel.** + Background drawn once; teams can split work. − Every moving drawing is hand-made; slow.
- **Stop motion.** + Real textures; simple equipment. − One photo per frame; any knock to the set shows.
- **Time lapse.** + Shows slow change clearly; little effort once set up. − Only suits real, slow processes; long capture.
- **Flip book.** + Cheap; no equipment; shows how animation works. − Very short; hard to edit; one viewer.
- **CGI.** + Realistic or impossible scenes; easy to edit and reuse. − Needs powerful hardware and specialist skills.
- **2D.** + Quicker and cheaper than 3D; small files. − Less realistic depth.
- **3D.** + Realistic depth and camera moves; models reused from any angle. − Complex; long render times; large files.

## Components of an animation

- **Primary**: the main focus, e.g. main characters.
- **Secondary**: supporting elements, e.g. sound and background.
- **Other**: e.g. props, on-screen text, lighting, effects (examples, not a syllabus list).

Keep secondary components from drowning out the primary focus.

## Quick self-test

1. An animation runs for 4 s at 30 fps. How many frames does it have?
2. An animation has 200 frames at 25 fps. How long does it run?
3. A shape rotates from 0° on frame 1 to 180° on frame 13 with an even tween. What is its angle on frame 7?
4. A clip has 90 frames. It plays at 12 fps. How long does it last?
5. State two things you can set when configuring the stage.
6. State the difference between the stroke and the fill of a shape.
7. Explain why a mask might be used in a title sequence.
8. State one reason for putting the background on its own layer.
9. Describe what a property key frame allows you to do.
10. Explain why time lapse makes a plant appear to grow quickly.
11. Name one primary and one secondary component of a cartoon.
12. State one disadvantage of 3D animation compared with 2D.

### Answers

1. 4 × 30 = **120 frames**.
2. 200 ÷ 25 = **8 s**.
3. 12 intervals, 15° per frame; frame 7 is 6 intervals on: **90°**.
4. 90 ÷ 12 = **7.5 s**.
5. Any two of: background colour; size; aspect ratio (using rulers, guides and grid); snapping options.
6. The stroke is the outline of the shape; the fill is the colour or pattern inside it.
7. The mask shape controls which part of the layer beneath shows, so text can be revealed gradually as the mask moves.
8. It can be locked so it is not moved by accident, and characters can be animated in front of it without changing it.
9. It records the value of one property at a point in time, so that property can change on its own timing.
10. Photos are captured at long intervals but played back at a normal frame rate, so hours of growth play in seconds.
11. Primary: the main character. Secondary: the background or the music.
12. Any one of: longer to model; long render times; larger files; needs more powerful hardware.

## Where marks are usually lost

- Writing "a key frame is a frame in the animation" without saying it sets or changes a value.
- Dividing by the number of key frames instead of the number of frame intervals in a tween calculation.
- Forgetting that halving the frame rate doubles the running time if the frames are unchanged.
- Describing a mask as "hiding things" without saying the mask shape is what stays visible.
- Mixing up stop motion (objects moved by hand) and time lapse (scene changes by itself).
- Saying CGI means 3D only.
- Listing advantages of an animation type that are not linked to the scenario's audience, budget or time.
- Calling sound or the background a primary component; the syllabus gives them as secondary examples.
- Naming a tool instead of explaining what it does to the animation.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 3, Cambridge University Press & Assessment. Topic 20: Animation (20.1 Animation).
