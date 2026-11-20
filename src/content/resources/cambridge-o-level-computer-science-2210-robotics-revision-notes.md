---
title: "Cambridge O Level Computer Science (2210): Robotics -- Revision Notes"
seoTitle: "Cambridge O Level CS 2210 Robotics Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["o-levels"]
topic: "Topic 6 – Automated and emerging technologies"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 6.2
syllabusTopics:
  - qualification: "o-level"
    topic: "automated-and-emerging-technologies-2210"
  - qualification: "o-level"
    topic: "automated-and-emerging-technologies-2210"
    subtopic: "robotics-2210"
description: "Revision notes for Cambridge O Level Computer Science 2210 section 6.2: the meaning of robotics, the three characteristics of a robot, robot roles and advantages and disadvantages, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Condensed notes for syllabus section 6.2, Robotics. For the full explanations and a worked example, use the [Robotics study guide](/resources/cambridge-o-level-computer-science-2210-robotics/).

## Syllabus checklist

- What is meant by robotics.
- The characteristics of a robot: a mechanical structure or framework, electrical components (sensors, microprocessors and actuators) and being programmable.
- The roles robots can perform, in areas including industry, transport, agriculture, medicine, domestic settings and entertainment.
- The advantages and disadvantages of using robots.

## Key terms

| Term | Definition |
|---|---|
| Robotics | A branch of computer science that incorporates the design, construction and operation of robots |
| Robot | A programmable machine with a mechanical structure and electrical components |
| Sensor | Collects data about the robot's surroundings |
| Microprocessor | Processes data and runs the robot's program |
| Actuator | Produces movement, for example a motor |
| Programmable | The instructions can be written or changed |
| Drone | A flying robot that can be controlled remotely or follow a programmed route |

## Examples named in the syllabus

- Factory equipment.
- Domestic robots.
- Drones.

## The three characteristics

| Characteristic | Meaning | Example (robot arm in a factory) |
|---|---|---|
| Mechanical structure or framework | A physical body that holds the parts and lets it move | Jointed metal arm and gripper |
| Electrical components | Sensors, microprocessors and actuators | Pressure sensor in the gripper; controller; motors in the joints |
| Programmable | A program controls it and can be changed | Reprogrammed to handle a different product |

All three are needed. A machine with no mechanical structure is only software. A machine with no program is not a robot.

## Robot versus automated system

| Automated system | Robot |
|---|---|
| Sensors, microprocessor, actuators | Also has a mechanical structure (body) |
| May be fixed, such as a thermostat | Often moves or manipulates objects |
| Controlled by a program | Controlled by a program that can be changed |

Every robot contains the parts of an automated system, but not every automated system is a robot.

## Roles by area

| Area | Roles |
|---|---|
| Industry | Welding, painting, assembly, packing, warehouse handling |
| Transport | Self-driving vehicles, delivery drones, automated guided vehicles |
| Agriculture | Picking, planting, spraying, milking, crop surveys by drone |
| Medicine | Robotic surgery assistance, patient lifting, delivering supplies |
| Domestic | Vacuum cleaners, lawn mowers, window cleaners |
| Entertainment | Animatronics, robot toys, filming drones, light shows |

## Advantages and disadvantages

| Advantages | Disadvantages |
|---|---|
| Can do dangerous or unpleasant jobs | High cost to buy, install and maintain |
| Repeat tasks accurately and consistently | Workers may lose jobs |
| Work without tiredness, day and night | Not flexible: cannot cope with unexpected problems |
| Can lift heavy loads and work quickly | Faults or breakdowns can stop production or cause harm |
| Save labour costs in the long term | Depend on power and software; a hacked robot could be misused |

## A pseudocode pattern for a robot task

```
FOR Box ← 1 TO 10
   CALL MoveArm("Conveyor")
   CALL GripOn
   CALL MoveArm("Pallet")
   CALL GripOff
NEXT Box
```

Changing the program changes the job. That is what "programmable" means.

## Answer templates

**State what is meant by robotics (2 marks):** a branch of computer science; design, construction and operation of robots.

**Describe the characteristics of a robot (3 marks):** a mechanical structure or framework; electrical components such as sensors, microprocessors and actuators; programmable.

**Describe the role of robots in one area (2 marks):** name the area; say the task the robot performs and why a robot suits it.

**Discuss using robots (4 marks):** two advantages with reasons; two disadvantages with reasons; apply to the scenario.

## Exam traps

- **Missing the mechanical structure.** Many answers list sensors and processors only.
- **"Robots are intelligent".** They follow programs. That is not the same as AI.
- **A role without a task.** "Robots are used in farming" is incomplete.
- **Only listing advantages.**
- **"Robots never go wrong".** Faults and breakdowns are a disadvantage.
- **Confusing a drone with a toy.** A drone is a flying robot with sensors, a processor and motors.

## Self-test

1. What is robotics?
2. Give three examples of robots.
3. Name the three characteristics of a robot.
4. Give an example of a sensor in a robot.
5. What does an actuator do in a robot?
6. What does "programmable" mean?
7. Give one role of a robot in agriculture.
8. Give one role of a robot in medicine.
9. Give two advantages of using robots.
10. Give two disadvantages of using robots.
11. How is a robot different from a thermostat-controlled heating system?
12. Why might a robot not suit a task that changes every day?

**Answers**

1. A branch of computer science that incorporates the design, construction and operation of robots.
2. Any three: factory equipment, domestic robots, drones, robot vacuum cleaner, surgical robot.
3. A mechanical structure or framework; electrical components (sensors, microprocessors, actuators); programmable.
4. Any one: camera, infrared sensor, pressure sensor, proximity sensor.
5. It produces movement, such as turning a wheel or a joint.
6. Its instructions can be written or changed, so it can do different tasks.
7. Any one: picking fruit, planting seeds, spraying crops, milking cows, surveying fields with a drone.
8. Any one: assisting surgeons with precise operations, lifting patients, delivering medicines.
9. Any two: can do dangerous jobs; accurate and consistent; works without tiredness; strong and fast; saves labour costs.
10. Any two: high cost; job losses; cannot cope with the unexpected; breakdowns; depends on power and software.
11. A robot has a mechanical structure that moves or handles objects, and it can be reprogrammed to do different jobs; a thermostat system does one fixed control task.
12. A robot does only what it is programmed to do, so each change needs reprogramming and it cannot use judgement.
