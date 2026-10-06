---
title: "Cambridge A Level Information Technology (ICT): Animation (9626) -- Practice Questions"
seoTitle: "Cambridge A Level ICT 9626 Animation Practice Questions"
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
description: "Original practice questions with worked answers for Cambridge A Level IT 9626 Animation, from tween calculations to choosing an animation type."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover **topic 20, Animation** (section 20.1) of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 3). This is **A Level only** content. The syllabus bases Paper 3 (Advanced Theory) questions on sections 12–21 and Paper 4 (Advanced Practical) tasks on sections 17–21. Every question here can be answered on paper, and the numbers work without a calculator, as calculators are not allowed in Paper 3.

Learn the content first in the [Animation study guide](/resources/a-level-cambridge-ict-animation/) and the [Animation revision notes](/resources/a-level-cambridge-ict-animation-revision-notes/). Course hub: [Cambridge A Level ICT](/boards/cambridge/a-level/ict/). Checklist: [9626 checklist](/checklists/cambridge/a-level/ict/). Find your weak spots with a [free 10-minute diagnostic](/diagnostics/).

Answers show one acceptable set of points, with a [1] per creditworthy point. This is indicative marking, not an official mark scheme; other valid points also earn credit.

## Questions

**1.** Explain the difference between a key frame and a tweened frame. **[2]**

**2.** An animator sets up a stage 1920 pixels wide and 1080 pixels high.

**(a)** State the aspect ratio of the stage in its simplest form. **[1]**
**(b)** A grid with 120-pixel squares is shown. Calculate the number of columns and rows. **[2]**
**(c)** Explain why the animator turns on snapping to the grid. **[1]**

**3.** A logo is drawn as a vector object.

**(a)** Describe the difference between the stroke and the fill of the logo. **[2]**
**(b)** Explain how changing the transparency of the logo over time could be used at the start of an animation. **[2]**

**4.** A paper plane is at x = 50 on frame 10 and at x = 350 on frame 40. Over the same frames it rotates from 0° to 270°. The tween is even.

**(a)** Calculate the change in x per frame. **[2]**
**(b)** Calculate the x coordinate and the angle of rotation on frame 25. **[2]**

**5.** An animation runs for 10 seconds at 25 frames per second.

**(a)** Calculate the number of frames. **[1]**
**(b)** The frame rate is changed to 50 fps with no frames added. State the new running time. **[1]**
**(c)** Give one advantage and one disadvantage of creating the animation at a higher frame rate. **[2]**

**6.** A school wants its logo to be revealed by a circle of light moving across a dark stage. Describe how layers and a mask would be used to create this effect. **[4]**

**7.** A photographer records a sunset for 90 minutes, taking one photograph every 15 seconds. The photographs are played back at 24 fps.

**(a)** Calculate the number of photographs taken. **[2]**
**(b)** Calculate the running time of the time lapse. **[1]**
**(c)** State how many times faster than real time the sunset appears. **[1]**

**8.**

**(a)** Explain what a property key frame allows an animator to do that a single key frame for all properties does not. **[2]**
**(b)** Describe morphing and the effect it creates. **[2]**

**9.** A robot's arm in a 2D animation swings back and forth. Its angle is held in an animation variable `armAngle`, which starts at −45° and changes by 15° each frame up to 45°.

**(a)** Explain what is meant by an animation variable. **[2]**
**(b)** Calculate the number of frames for one sweep from −45° to 45°. **[1]**
**(c)** Write pseudocode that makes the arm swing back and forth between −45° and 45°. **[3]**

**10.** A children's cartoon teaches recycling. It shows a talking bottle, a park background and background music.

**(a)** Identify the primary component and two secondary components. **[2]**
**(b)** Explain why the secondary components must be chosen with the audience in mind. **[2]**

**11.** A student makes a 20-second stop motion animation at 12 fps using clay models.

**(a)** Calculate the number of photographs needed. **[1]**
**(b)** The student can set up and photograph 30 poses per hour. Calculate the time needed. **[1]**
**(c)** Describe how a stop motion animation is created. **[2]**

**12.** A wildlife charity wants a 30-second animation for its website, aimed at young children, showing a caterpillar turning into a butterfly. Evaluate the use of stop motion, time lapse, cel animation and 3D CGI for this animation, and recommend one. **[10]**

## Answers

**1.** A key frame is set by the animator and defines a value such as position, colour or size at that point [1]. A tweened frame is calculated by the software between two key frames [1]. **[2]**
*Examiner insight:* Two separate points are needed: one about who sets the key frame, one about how tweened frames are produced.

**2. (a)** **16:9** [1].
**(b)** 1920 ÷ 120 = **16 columns** [1]; 1080 ÷ 120 = **9 rows** [1].
**(c)** Objects jump to grid lines, so they line up exactly and start and end positions are consistent [1].
*Examiner insight:* In (a), 1920:1080 is not simplest form and would not be credited.

**3. (a)** The stroke is the outline of the logo, with its own colour and width [1]. The fill is the colour, gradient or pattern inside the shape [1].
**(b)** Opacity could start at 0% and rise to 100% over several frames [1], so the logo fades in smoothly instead of appearing suddenly [1].
*Examiner insight:* For (b), say how the property changes and what effect the viewer sees; "make it transparent" alone is one point at most.

**4. (a)** Intervals = 40 − 10 = 30 [1]; (350 − 50) ÷ 30 = **10 px per frame** [1].
**(b)** Frame 25 is 15 intervals on: x = 50 + 15 × 10 = **200** [1]; angle = 270 ÷ 30 × 15 = **135°** [1].
*Examiner insight:* Using 31 frames instead of 30 intervals is a common slip; showing the subtraction 40 − 10 gives evidence of method.

**5. (a)** 10 × 25 = **250 frames** [1].
**(b)** 250 ÷ 50 = **5 s** [1].
**(c)** Advantage: smoother motion [1]. Disadvantage: more frames to create, so more work and a larger file [1].
*Examiner insight:* "Better quality" is too vague for the advantage; name the smoother motion.

**6.** Put the logo on one layer and the dark background on a layer below it [1]. Draw a circle on a mask layer above the logo layer [1]. Link the mask to the logo layer so only the part of the logo under the circle is visible [1]. Tween the circle's position across the stage so the visible area moves like a spotlight [1]. **[4]**
*Examiner insight:* The key point is that the mask shape is what shows; saying the mask "hides the logo" gets the logic backwards.

**7. (a)** 90 × 60 = 5400 s [1]; 5400 ÷ 15 = **360 photographs** [1].
**(b)** 360 ÷ 24 = **15 s** [1].
**(c)** 5400 ÷ 15 = **360 times faster** [1].
*Examiner insight:* Convert minutes to seconds before dividing by the interval; mixing units loses the method mark.

**8. (a)** A property key frame records the value of just one property, such as rotation [1], so that property can change on a different timing from the others, such as the movement [1].
**(b)** Morphing changes one image or shape into another through a seamless transition [1]. The first image is warped towards the second while they cross-fade, so it appears to transform smoothly [1].
*Examiner insight:* For (b), describing only a fade between two images misses the shape change, which is what makes it morphing.

**9. (a)** A variable whose value controls the position of an animated object or part of an object [1]; changing it each frame moves that part without redrawing the whole object [1].
**(b)** (45 − (−45)) ÷ 15 = **6 frames** [1].
**(c)** Example:

```
armAngle ← -45
step ← 15
EACH FRAME
    armAngle ← armAngle + step
    IF armAngle >= 45 OR armAngle <= -45 THEN
        step ← -step
    ENDIF
```

Add the step to the angle each frame [1]; test both limits [1]; reverse the sign of the step at a limit [1].
*Examiner insight:* Pseudocode is credited for logic, not syntax; a loop that tests only one limit cannot swing back and forth.

**10. (a)** Primary: the talking bottle [1]. Secondary: the park background and the music [1].
**(b)** Young children are easily distracted, so the background should be simple and the music quiet behind speech [1], so attention stays on the bottle and the recycling message [1].
*Examiner insight:* Both secondary components are needed for the second mark in (a).

**11. (a)** 20 × 12 = **240 photographs** [1].
**(b)** 240 ÷ 30 = **8 hours** [1].
**(c)** The models are moved by a small amount and one photograph is taken [1]; this is repeated, and the photographs are played back in order as frames so the models appear to move [1].
*Examiner insight:* "Taking lots of photos" is not enough; the small movement between each photo must be stated.

**12.** Indicative points:
- Stop motion: real models of a caterpillar and butterfly look tactile and appeal to young children [1], but 30 s needs hundreds of photos and the delicate wings would be hard to pose [1].
- Time lapse: real footage of an actual transformation would be accurate and educational [1], but the process takes days with a fixed camera, and real footage has no friendly character to hold young children's attention [1].
- Cel: a hand-drawn cartoon style suits young children and the background is drawn once [1], but every moving drawing is made by hand, so it is slow and costly [1].
- 3D CGI: a realistic butterfly can be shown from any angle and edited easily [1], but needs specialist software, skills and long render times, and large files may load slowly on a website [1].
- Recommendation linked to the audience, e.g. cel animation for a simple, friendly cartoon look [1], with a justification that balances cost against appeal, e.g. a short loop keeps file size small for the website [1]. **[10]**
*Examiner insight:* "Evaluate" needs both sides of each type and a justified recommendation; listing advantages only caps the marks.

## Where marks are usually lost

- Counting frames instead of intervals when working out tween values.
- Mixing minutes and seconds in time lapse calculations.
- Giving 1920:1080 instead of the simplest ratio.
- Saying a mask hides what is under it; the mask shape is what stays visible.
- Describing morphing as a plain cross-fade.
- Pseudocode for animation variables that never reverses direction.
- Calling the background or music a primary component.
- In evaluations, giving advantages only, or no recommendation linked to the audience.

## Next steps

- Revise with the [Animation revision notes](/resources/a-level-cambridge-ict-animation-revision-notes/).
- Go back to the [Animation study guide](/resources/a-level-cambridge-ict-animation/) for full explanations.
- Frame rates and aspect ratios also appear in [Video and audio editing](/resources/a-level-cambridge-ict-video-and-audio-editing/).
- [Cambridge A Level ICT hub](/boards/cambridge/a-level/ict/) and [9626 checklist](/checklists/cambridge/a-level/ict/).
- Try [all free 10-minute diagnostics](/diagnostics/).
- [Book a free trial class](/trial/).

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 3, Cambridge University Press & Assessment. Topic 20: Animation (20.1 Animation).
