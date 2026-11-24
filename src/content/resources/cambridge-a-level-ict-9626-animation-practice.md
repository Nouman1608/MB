---
title: "Cambridge A Level Information Technology (ICT): 20.1 Animation (9626) -- Practice Questions"
seoTitle: "Cambridge A Level IT 9626: Animation Practice"
resourceType: "practice-questions"
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
description: "Original practice questions with marked answers on frames, key frames, tweening, morphing, frame rates and animation types for section 20.1 of Cambridge A Level IT 9626."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover **section 20.1 Animation** of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 4). This is **A Level only** content. The syllabus tests the practical skills in Paper 4 (Advanced Practical) and bases Paper 3 (Advanced Theory) on sections 12 to 21, where calculators are not allowed. These written questions can be answered on paper; practise creating animations in your own software too.

Revise first with the [study guide](/resources/cambridge-a-level-ict-9626-animation/) and the [topic revision notes](/resources/a-level-cambridge-ict-animation-revision-notes/). The [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) lists every topic.

## Questions

**1.** Explain the difference between a frame and a key frame. **[2]**

**2.** An animation of a bouncing ball runs for 6 seconds at 24 frames per second.

**(a)** Calculate the total number of frames. **[1]**
**(b)** The designer reduces the frame rate to 12 frames per second but keeps the same running time. State the effect on the number of frames and on the appearance of the movement. **[2]**

**3.** A rocket is positioned at x = 50 in key frame 1 and at x = 290 in key frame 49. The tween between them is linear (even steps).

**(a)** State the number of steps between the key frames. **[1]**
**(b)** Calculate how far the rocket moves in each frame. **[1]**
**(c)** Calculate the x position in frame 25. **[2]**
**(d)** The rocket is also made to shrink from 100% to 40% of its size between the two key frames. Name the type of tween and the property key frames used. **[2]**

**4.** A designer is creating an animation of a school logo that changes shape from a circle into a star.

**(a)** Name the technique. **[1]**
**(b)** Describe how the designer creates the effect using key frames. **[3]**
**(c)** Give **one** problem that may occur with this technique. **[1]**

**5.** A designer builds an animation for the school website. She sets the stage to 1,280 pixels wide at an aspect ratio of 16:9.

**(a)** Calculate the height of the stage in pixels. **[2]**
**(b)** State **two** tools that help her place objects accurately on the stage. **[2]**
**(c)** Explain what the animation settings loop and stop do, and which would suit a banner advert that should repeat continuously. **[3]**

**6.** The animation has a background layer, a character layer and a title layer.

**(a)** Give **two** benefits of using layers in an animation. **[2]**
**(b)** Describe how a mask could be used to make a spotlight that moves across the background. **[2]**
**(c)** Describe how a motion path makes a bird fly in a curve. **[2]**

**7.** State the type of animation for each of the following descriptions.

**(a)** Modelling clay figures are moved slightly and photographed for each frame. **[1]**
**(b)** Characters are drawn by hand on transparent sheets laid over a painted background. **[1]**
**(c)** A camera photographs a flower once every 10 minutes and the pictures are played at 24 frames per second. **[1]**
**(d)** A scene with depth, lighting and a virtual camera is made on a computer. **[1]**

**8.** A camera photographs a seed growing, taking one photograph every 20 minutes for 4 days. The photographs are played at 24 frames per second. Calculate the number of photographs and the length of the film in seconds. **[3]**

**9.** State **two** components of an animation that are described as secondary, and give an example of each. **[2]**

**10.** Evaluate the use of 2D animation and 3D animation for a short public information film that must be made quickly on a small budget. **[5]**

## Answers

**1.** A frame is any single image in the animation [1]. A key frame is one where the animator sets the important values or properties, such as the start and end positions, and the software creates the frames between them. [1] **[2]**

**2. (a)** 24 × 6 = 144 frames. [1] **[1]**
**(b)** The number of frames is halved, to 12 × 6 = 72 [1]; the movement looks less smooth (more jerky), but the file is smaller and less work is needed. [1] **[2]**

**3. (a)** 49 − 1 = 48 steps. [1] **[1]**
**(b)** (290 − 50) ÷ 48 = 240 ÷ 48 = 5 units per frame. [1] **[1]**
**(c)** Frame 25 is 24 steps after frame 1 [1], so x = 50 + 24 × 5 = 170. [1] **[2]**
**(d)** A size tween [1], with property key frames for the size (100% in key frame 1 and 40% in key frame 49). [1] **[2]**

**4. (a)** Morphing (shape tween). [1] **[1]**
**(b)** Draw the circle in the first key frame [1]; draw the star in a later key frame [1]; apply a shape tween so that the software creates the in-between frames that change the circle gradually into the star. [1] **[3]**
**(c)** Any one: the in-between shapes can look distorted if the shapes have very different numbers of points; the result may need adjusting by hand (for example with shape hints). [1] **[1]**

**5. (a)** Height = 1,280 × 9 ÷ 16 [1] = 720 pixels. [1] **[2]**
**(b)** Any two: rulers; guides; grid; snapping. [1 each] **[2]**
**(c)** Loop makes the animation repeat continuously [1]; stop makes it play once and stop (on a chosen frame) [1]; loop suits the banner advert. [1] **[3]**

**6. (a)** Any two: objects can be animated separately without affecting each other; the stacking order can be controlled; layers can be hidden or locked while working on others; makes the animation easier to edit. [1 each] **[2]**
**(b)** Draw a circle on a mask layer above the background [1]; animate the circle across the stage with a motion tween, so only the area inside the circle shows the background. [1] **[2]**
**(c)** Draw a curved line as the motion path [1] and attach the bird to it, so the tween moves the bird along the curve (and can turn it to face the direction of travel). [1] **[2]**

**7. (a)** Stop motion. [1]
**(b)** Cel animation. [1]
**(c)** Time lapse. [1]
**(d)** 3D (computer-generated) animation, or CGI. [1] **[4]**

**8.** 4 days = 4 × 24 × 60 = 5,760 minutes [1]; 5,760 ÷ 20 = 288 photographs [1]; 288 ÷ 24 = 12 seconds. [1] **[3]**

**9.** Any two, one mark each with an example: sound [1], for example speech, music or sound effects; background [1], for example a landscape or a room. **[2]**

**10.** 2D (up to 2 marks): quicker and cheaper to produce [1]; simpler software and smaller files, so suitable for a small team and for web use. [1]
3D (up to 2 marks): more realistic, with depth and lighting [1]; but modelling and rendering take longer, need powerful computers and skilled staff, which a small budget may not allow. [1]
Judgement (1 mark): for example 2D is more suitable because the film must be made quickly and cheaply, and a public information film does not need photo-realism. [1]
Maximum 5. **[5]**
*Examiner insight:* The judgement must refer to time and budget in the question.

## Where marks are usually lost

- Confusing frames and key frames.
- Counting the wrong number of steps between key frames (49 − 1 = 48, not 49).
- Forgetting to convert hours or days into minutes or seconds.
- Mixing up morphing with motion tweening.
- Describing loop and stop without linking to the use in the scenario.
- Calling time lapse "stop motion".

## More on this topic

- Recap with the [topic revision notes](/resources/a-level-cambridge-ict-animation-revision-notes/).
- Reread the [study guide](/resources/cambridge-a-level-ict-9626-animation/).
- Explore the [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) and the [printable 9626 checklist](/checklists/cambridge/a-level/ict/).
- Try all free 10-minute [diagnostics](/diagnostics/).
- [Book a free trial class](/trial/).

## Frequently asked questions

**How do I work out the number of frames?**
Multiply the frame rate (frames per second) by the length of the animation in seconds.

**What is the difference between stop motion and time lapse?**
In stop motion, the animator moves objects slightly between each photograph. In time lapse, the camera photographs a slow natural change at regular intervals.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 4, Cambridge University Press & Assessment. Section 20.1: Animation.
