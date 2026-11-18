---
title: "Cambridge IGCSE ICT (0417): Computer controlled systems"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 6: ICT applications"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 6.3
syllabusTopics:
  - qualification: "igcse"
    topic: "ict-applications"
    subtopic: "computer-controlled-systems-0417"
description: "How robots in manufacture, production line control and autonomous vehicles work, and their pros and cons compared with humans, for Cambridge IGCSE ICT 0417 6.3."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Subtopic 6.3 of Cambridge IGCSE ICT 0417 covers computer controlled systems, "including: robotics in manufacture, production line control, autonomous vehicles", and the "advantages and disadvantages of using computer controlled systems rather than humans". The [ICT Applications study guide](/resources/igcse-ict-applications-systems/) lists these briefly. This guide explains the control process step by step, applies it to each of the three named systems, and shows how to write a balanced comparison with human workers.

## How a computer controlled system works

Every computer controlled system follows the same loop:

1. **Sensors** measure the real world: position, light, pressure, temperature, distance.
2. If the sensor gives an analogue signal, an **analogue-to-digital converter (ADC)** changes it into digital data the computer can process.
3. The **computer or microprocessor** compares the reading with **preset values** stored in its program.
4. If action is needed, it sends a signal to an **actuator**, such as a motor, valve, pump or heater. A digital-to-analogue converter may be needed to drive it.
5. The actuator changes the real world, the sensors measure the new situation, and the loop repeats. This is **feedback**: the output affects the next input.

The key difference from 6.2 is that a model only **predicts**, while a control system **acts** on real objects.

## Robotics in manufacture

Industrial robots are computer controlled arms that carry out physical tasks. They are widely used in car factories and in making electronics, food and packaging.

**Typical tasks:**

- spot welding car body panels
- spray painting car bodies evenly
- assembling parts, such as fitting windscreens or placing components on circuit boards
- lifting and moving heavy items
- packing products into boxes and stacking boxes onto pallets
- inspecting products with cameras to find faults

**How a robot is set up:** the robot arm carries an **end effector**, the tool on the end of the arm, such as a welding gun, spray gun, gripper or suction cup. The robot is programmed with the exact sequence of movements. One method is for a skilled worker to guide the arm through the task once while the movements are recorded, so the robot can repeat them. Sensors on the robot detect whether a part is in the correct position before it acts.

## Production line control

A **production line** moves products through a series of stages on conveyor belts. Computer control coordinates every stage.

### Worked example: a bottle-filling line

1. A conveyor belt moves empty bottles along the line.
2. A **light sensor** detects when a bottle breaks a light beam in front of the filling station. The computer stops the conveyor motor.
3. The computer opens a **valve**, and liquid flows into the bottle.
4. A **level or weight sensor** detects when the bottle is full. The computer closes the valve.
5. The conveyor restarts; at the next station a cap is fitted and tightened.
6. A **camera** checks the label and fill level. If a bottle is faulty, the computer signals an actuator that pushes it off the line.
7. The computer keeps a count of bottles filled and rejected.

Each step uses the loop above: sensor reading, comparison with a preset value, signal to an actuator. If a sensor detects a fault, such as a jam, the computer can stop the whole line and raise an alarm.

## Autonomous vehicles

An autonomous vehicle is a computer controlled system on the move.

| Part of the loop | In an autonomous car |
|---|---|
| Sensors | Cameras (road signs, lane markings, traffic lights), radar (distance and speed of other vehicles), lidar (laser beams that build a 3D picture of surroundings), ultrasonic sensors (very close objects when parking) |
| Position data | GPS locates the vehicle on a stored map |
| Processing | The on-board computer combines all the data and decides what to do, comparing distances and speeds with safe values |
| Actuators | Control steering, brakes and accelerator; also lights and indicators |
| Feedback | Sensors keep measuring, so the vehicle continually adjusts |

The same principle is used in driverless trains and in aircraft autopilot systems. The effects of autonomous vehicles on society are covered in the [microprocessor-controlled devices study guide](/resources/cambridge-igcse-ict-0417-microprocessor-controlled-devices/); in 6.3 the focus is how they work as a controlled system and how they compare with human drivers.

## Computer control compared with humans

### Advantages

- **Continuous working**: robots and control systems work 24 hours a day without breaks, holidays or tiredness, so output rises.
- **Consistency and accuracy**: every weld or fill is the same, so quality is higher and less material is wasted.
- **Speed**: computers react to sensor data faster than humans.
- **Safety**: robots do dangerous jobs, such as working with toxic paint fumes, heavy loads or extreme heat.
- **Lower running costs**: no wages, although maintenance is needed.
- **Accurate records**: the system logs output and faults automatically.

### Disadvantages

- **High initial cost** of robots, sensors, computers and installation.
- **Maintenance and reprogramming** are expensive and need specialist staff; changing the product may mean reprogramming every robot.
- **Lack of flexibility**: a robot cannot deal with an unusual situation it was not programmed for, such as an oddly shaped part, whereas a human can adapt.
- **Breakdowns** can stop the whole production line.
- **Job losses** for manual workers, and **deskilling**, as workers no longer need craft skills. New jobs are created for technicians and programmers, but these need different skills.
- **Vulnerable to faults or hacking**: an error in the program is repeated on every item until it is noticed.

### Annotated comparison

**Question:** A furniture company is replacing workers who spray varnish onto tables with robots. Explain **two** advantages and **one** disadvantage of this. **[6]**

- Robots apply varnish evenly to every table *(advantage)*, so fewer tables are rejected and less varnish is wasted *(linked consequence)*.
- Workers are no longer exposed to varnish fumes *(advantage)*, which reduces health risks and the cost of protective equipment *(consequence)*.
- The robots are expensive to buy and program *(disadvantage)*, so it may take years for savings on wages to cover the cost *(consequence)*.

Each point is tied to varnishing tables, not to robots in general.

### Why the human comparison matters

The syllabus phrase is "rather than humans", so a strong answer compares directly: a human welder tires towards the end of a shift and quality can slip, while a robot's hundredth weld matches its first. A human driver can read an unexpected hand signal from a police officer, while an autonomous vehicle may not have been programmed to recognise it. Writing the human alternative into each point turns a list of features into a comparison.

## Common mistakes

- Missing the comparison step: the computer compares the sensor reading with a stored preset value.
- Saying a sensor "controls" something. Sensors only measure; the computer decides and the actuator acts.
- Saying robots "never make mistakes". They repeat a programming error on every item.
- Giving "cheaper" without explaining: high initial cost, lower running costs over time.
- Forgetting the human side: job losses, deskilling and new technical jobs.

## Exam technique

- **Describe** how a system works: name the sensor, say what the computer compares, and name the actuator and what it does. Use the scenario's details.
- **Explain** an advantage: point plus consequence for the business or worker.
- **Discuss** or **evaluate**: balance advantages against disadvantages for the named system and finish with a judgement.

## Keep going

- [Computer controlled systems revision notes](/resources/cambridge-igcse-ict-0417-computer-controlled-systems-revision-notes/)
- [Computer controlled systems practice questions](/resources/cambridge-igcse-ict-0417-computer-controlled-systems-practice/)
- [Modelling applications study guide](/resources/cambridge-igcse-ict-0417-modelling-applications/)

## Syllabus reference

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Topic 6 "ICT applications", 6.3 Computer controlled systems.
