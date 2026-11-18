---
title: "Cambridge IGCSE ICT (0417): Computer controlled systems -- Revision Notes"
resourceType: "revision-notes"
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
description: "Quick-recall notes on the control loop, robots in manufacture, production lines and autonomous vehicles, with a self-test, for Cambridge IGCSE ICT 0417 6.3."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense subtopic 6.3 of Cambridge IGCSE ICT 0417, computer controlled systems. For full explanations and the bottle-filling worked example, read the [computer controlled systems study guide](/resources/cambridge-igcse-ict-0417-computer-controlled-systems/); then try the [computer controlled systems practice questions](/resources/cambridge-igcse-ict-0417-computer-controlled-systems-practice/).

## Syllabus coverage

- Computer controlled systems including robotics in manufacture, production line control and autonomous vehicles.
- Advantages and disadvantages of using computer controlled systems rather than humans.

## Key terms

| Term | Meaning |
|---|---|
| Sensor | Input device that measures a physical quantity, such as light, pressure or distance |
| ADC | Analogue-to-digital converter: turns an analogue sensor signal into digital data |
| Preset value | A stored value the computer compares readings with, such as "bottle full" |
| Actuator | Output device that causes movement or change: motor, valve, pump, heater |
| Feedback | The output changes the conditions the sensors measure next, so the system keeps adjusting |
| End effector | The tool on the end of a robot arm, such as a gripper, welding gun or spray gun |
| Production line | A sequence of stages, linked by conveyors, through which products are made |
| Lidar | Sensor that uses laser beams to build a 3D picture of a vehicle's surroundings |
| Deskilling | Workers no longer need the craft skills a machine has taken over |

## The control loop in five steps

1. Sensor takes a reading.
2. ADC converts it to digital (if analogue).
3. Computer compares it with the preset value.
4. Computer signals an actuator if action is needed.
5. Sensors read again: feedback loop repeats.

Sensors **measure**. The computer **decides**. Actuators **act**.

### Writing one control step for full marks

Each step in a description needs three things: the **sensor** and what it detects, the **comparison** the computer makes, and the **actuator** and what it does. For example: a pressure sensor detects the weight of a box; the computer compares the weight with the preset value; when they match, it signals the motor to restart the conveyor. A step that names only the sensor earns at most one mark.

## The three named systems

### Robotics in manufacture

- Tasks: welding, spray painting, assembling, lifting heavy items, packing, palletising, camera inspection.
- Programmed with exact movements; a worker can guide the arm once so the movements are recorded and repeated.
- Sensors check that parts are in position before acting.

### Production line control

- Conveyors move products between stations.
- Sensors detect a product's arrival; the computer stops the conveyor, starts the process (fill, cap, label), checks quality and restarts.
- Faulty items pushed off the line by an actuator; counts logged automatically.
- A detected jam or fault can stop the whole line and sound an alarm.

### Autonomous vehicles

- Sensors: cameras, radar, lidar, ultrasonic; GPS with a stored map.
- On-board computer combines the data, compares distances and speeds with safe values.
- Actuators: steering, brakes, accelerator, lights and indicators.
- Same principle: driverless trains, aircraft autopilot.

## Computer control rather than humans

| Advantages | Disadvantages |
|---|---|
| Works 24/7 without breaks or tiredness | High initial cost to buy and install |
| Consistent quality; less waste | Expensive maintenance and reprogramming |
| Faster reactions than humans | Cannot cope with situations it was not programmed for |
| Does dangerous jobs (fumes, heat, heavy loads) | A breakdown can stop the whole line |
| No wages, so lower running costs over time | Job losses and deskilling for manual workers |
| Automatic records of output and faults | A program error is repeated on every item |

Remember the human balance: jobs are lost on the line, but new ones are created for technicians, engineers and programmers, which need different skills and training.

## Exam traps

- Saying the sensor turns something on. Only actuators act, after the computer decides.
- Leaving out the comparison with a preset value when describing control.
- Saying robots are "cheaper" without separating initial cost from running cost.
- Writing "robots are always accurate". They repeat errors in their program.
- Mixing up modelling and control. A model predicts; a control system acts.
- Using generic points in a scenario question. Tie each point to the product or task named.

## Self-test

1. What does an ADC do?
2. Name two actuators used in a production line.
3. Explain what is meant by feedback in a control system.
4. Give three tasks done by robots in car manufacture.
5. What is an end effector?
6. In a bottle-filling line, which sensor detects that a bottle has arrived?
7. Describe what the computer does when a bottle is full.
8. Name three sensors used by autonomous vehicles.
9. What does GPS provide to an autonomous vehicle?
10. Give two advantages of robots over human workers.
11. Give two disadvantages of robots compared with human workers.
12. Explain why a robot is less flexible than a human worker.

### Answers

1. Converts an analogue signal from a sensor into digital data the computer can process.
2. Any two: motor driving the conveyor; valve controlling liquid flow; pump; arm that pushes rejects off the line.
3. The output changes the conditions measured by the sensors, so the system keeps adjusting.
4. Any three: welding; spray painting; fitting parts such as windscreens; lifting heavy panels; inspecting with cameras.
5. The tool on the end of a robot arm, such as a gripper or spray gun.
6. A light sensor (the bottle breaks a light beam).
7. Compares the level or weight reading with the preset value; when it matches, closes the valve and restarts the conveyor.
8. Any three: cameras; radar; lidar; ultrasonic sensors.
9. The vehicle's position on a stored map, used for navigation.
10. Any two: work continuously; consistent quality; faster; can work in dangerous conditions; no wages.
11. Any two: high initial cost; costly maintenance; cannot handle unexpected situations; breakdowns stop production; job losses.
12. It can only do what it has been programmed to do, so it cannot adapt to an unusual part or problem.
