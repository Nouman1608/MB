---
title: "Cambridge O Level Computer Science (2210): Robotics"
seoTitle: "Cambridge O Level CS 2210 Robotics Guide"
resourceType: "study-guides"
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
description: "Study guide to Cambridge O Level Computer Science 2210 section 6.2: what robotics is, the characteristics of a robot, the roles robots perform, and the advantages and disadvantages of using them."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Section 6.2 of Cambridge O Level Computer Science 2210 has three learning statements. Candidates should understand **what is meant by robotics**, describe the **characteristics of a robot**, and understand the **roles that robots can perform**, with the advantages and disadvantages of using them. The guidance names the areas: industry, transport, agriculture, medicine, domestic settings and entertainment. This guide explains each statement and gives you the structure for a strong answer.

## Part 1: what is robotics?

**Robotics** is a branch of computer science that incorporates the **design, construction and operation of robots**. It combines computer science with engineering. People who work in robotics design the machine's body, build it and write the programs that control it.

The guidance gives three examples of robots:

- **factory equipment**, such as an arm that welds or paints cars;
- **domestic robots**, such as a robot vacuum cleaner or lawn mower;
- **drones**, flying machines that can be controlled remotely or follow a programmed route.

Not every machine with a computer is a robot. A washing machine has a program, but a robot is defined by the characteristics below.

## Part 2: the characteristics of a robot

The syllabus gives three characteristics. A robot has all three.

### 1. A mechanical structure or framework

The robot has a **physical body**. This holds the parts together and lets the robot move or carry out tasks. The framework might be an arm with joints, a body with wheels or legs, or the frame of a drone with propellers. Without a physical structure there is nothing to move, so a robot cannot be only software.

### 2. Electrical components

The robot has electrical components that let it sense its surroundings, make decisions and move.

- **Sensors** collect data about the environment. Examples are cameras, infrared sensors that detect obstacles, pressure sensors in a gripper and proximity sensors.
- **Microprocessors** process the sensor data and run the program.
- **Actuators** produce movement. Examples are electric motors that turn wheels or joints and pumps that operate hydraulic arms.

These three are the same components that form an automated system. A robot's mechanical structure is what makes it more than a control system.

### 3. Programmable

A robot is controlled by a **program**. The program can be written or changed so that the robot does a different job. A factory arm that welded car doors can be reprogrammed to weld car roofs. A program stored in the robot's microprocessor tells it what to do, how to respond to sensor input, and when to stop.

### Putting the characteristics together

| Characteristic | Example in a robot vacuum cleaner |
|---|---|
| Mechanical structure | Round body, wheels and brush |
| Electrical components | Bump and cliff sensors, a microprocessor, motors for wheels and brush |
| Programmable | Cleaning schedule and route can be set by the user and updated |

### A short example of a robot program

A robot arm moves ten boxes from a conveyor belt to a pallet. The procedures `MoveArm` and `GripOn` stand for commands that the robot's controller understands. In Cambridge pseudocode:

```
FOR Box ← 1 TO 10
   CALL MoveArm("Conveyor")
   CALL GripOn
   CALL MoveArm("Pallet")
   CALL GripOff
NEXT Box
```

If the factory wants twenty boxes, the programmer changes the 10 to 20. That is what programmable means: the same robot, different instructions.

## Part 3: the roles robots perform

| Area | Examples of what robots do |
|---|---|
| Industry | Welding, painting, assembling and packing products; moving heavy parts in a warehouse |
| Transport | Self-driving vehicles; delivery drones; automated guided vehicles in warehouses |
| Agriculture | Robots that pick fruit, plant seeds, spray crops or milk cows; drones that survey fields |
| Medicine | Robotic arms that help surgeons carry out precise operations; robots that move patients or deliver medicines in hospitals |
| Domestic settings | Robot vacuum cleaners, lawn mowers, window cleaners |
| Entertainment | Animatronic figures in theme parks, robot toys, drones for filming and light shows |

## Part 4: advantages and disadvantages of using robots

### Advantages

- **Dangerous or unpleasant tasks:** robots can work in places that are hot, toxic or unsafe, such as handling hazardous materials, so human workers are not put at risk.
- **Repeatability and accuracy:** a robot repeats the same movement with the same precision every time, which improves quality and reduces waste. In surgery, steady movements can be useful.
- **Continuous working:** robots do not get tired, so they can work all day and night.
- **Strength and speed:** they can lift heavy loads and work faster than a person for some tasks.
- **Saving labour costs** in the long term.

### Disadvantages

- **High cost** to buy, install, program and maintain.
- **Job losses:** workers whose jobs are taken by robots may need to be retrained.
- **Limited flexibility:** a robot is not good at tasks it was not programmed for or at problems that need judgement.
- **Breakdowns and software faults** can stop production or cause harm.
- **Dependence on power** and on the programmers who maintain the system.
- **Safety and security:** a robot that malfunctions can be dangerous, and a hacked robot could be misused.

### Scenario table

| Area | A strong advantage | A strong disadvantage |
|---|---|---|
| Industry | Works 24 hours a day with constant quality | Expensive; a fault stops the production line |
| Transport | May react faster than a tired driver | A sensor fault could cause an accident |
| Agriculture | Can work in all weather and harvest at the right time | Costly; may damage delicate crops if sensors misjudge |
| Medicine | Very precise, steady movements for delicate operations | Expensive to buy; staff need special training |
| Domestic | Saves time on chores | May get stuck or miss areas; cost |
| Entertainment | Performs complex shows repeatedly and safely | Expensive; viewers may miss human performers |

## Worked example

**Question:** A car factory replaces some of its human painters with robot arms. Describe **two** advantages and **one** disadvantage of using robots. [5]

> Advantage 1: the robots paint every car with the same accuracy [1], so the finish is consistent and less paint is wasted [1]. Advantage 2: paint fumes are harmful to people [1], and robots can do this task without being harmed [1]. Disadvantage: the robots are expensive to install and maintain, and painters may lose their jobs [1].

## Common mistakes

- **Calling any automatic machine a robot.** A robot must have a mechanical structure, electrical components and be programmable.
- **Leaving out the program.** Without a program, the robot cannot do anything.
- **Saying robots "think for themselves".** A robot follows its program. Artificial intelligence is a separate topic.
- **Giving only advantages.** Questions often ask for both.
- **Writing "robots are cheaper" with no qualification.** The initial cost is high. The saving is over time.
- **Listing roles without describing the task.** "Used in medicine" earns nothing. "Helps surgeons make precise cuts" earns the mark.

## Exam technique

- **Define robotics:** design, construction and operation of robots.
- **Characteristics:** name all three and give an example of each.
- **Roles:** name the area, then say what the robot does there.
- **Advantages and disadvantages:** apply to the scenario and give a reason.

## Quick check

1. What is robotics? *A branch of computer science that includes the design, construction and operation of robots.*
2. Name the three characteristics of a robot. *A mechanical structure, electrical components and programmable.*
3. Give one example of a robot used in medicine. *A robotic arm that helps a surgeon.*
4. What does programmable mean for a robot? *Its instructions can be written or changed, so it can do different tasks.*
5. Give one disadvantage of using robots in industry. *High cost; job losses; breakdowns stop production.*

## Continue with

Revise with the [Robotics revision notes](/resources/cambridge-o-level-computer-science-2210-robotics-revision-notes/) and practise with the [Robotics practice questions](/resources/cambridge-o-level-computer-science-2210-robotics-practice/).
