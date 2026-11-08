---
title: "Cambridge IGCSE Computer Science (0478): Automated and emerging technologies -- Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 6: Automated and emerging technologies"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 6
syllabusTopics:
  - qualification: "igcse"
    topic: "automated-and-emerging-technologies"
description: "Guide to Cambridge IGCSE Computer Science 0478 Topic 6: automated systems with sensors and actuators, robotics, and AI with its rule base and inference engine."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

Automated and emerging technologies asks how computers can run processes and make decisions without a person watching every step. The topic is mostly about description and explanation: you are expected to say what each part of an automated system does, give sensible real-world examples, and weigh up advantages and disadvantages. There is very little calculation, so marks are won by precise vocabulary and by applying that vocabulary to the scenario in the question.

## Where this fits in the specification

In Cambridge IGCSE Computer Science 0478 this is the last topic in the "Computer systems" half of the syllabus, after data representation, data transmission, hardware, software and the internet. It builds on the hardware topic (a microprocessor is a type of processor) and on data representation (sensors produce analogue readings that must be converted before a computer can use them). The topic covers three areas: automated systems, robotics and artificial intelligence. Questions can appear on either written paper, so be ready for short definitions and for longer scenario questions.

## Automated systems

An automated system carries out a task with little or no human intervention. Most are built from the same three kinds of component.

- **Sensors** measure a physical property of the environment, such as temperature, light, pressure, moisture, sound, infra-red radiation or proximity. A sensor produces a signal that depends on what it measures.
- A **microprocessor** (or other controller) reads the sensor data, compares it with stored values and decides what to do. It runs a program, so the logic can be changed without changing the hardware.
- **Actuators** are the output devices that cause a physical change: motors, pumps, heaters, valves, buzzers and lamps. The processor sends a signal and the actuator turns it into movement or heat.

Sensors usually produce **analogue** signals, which vary continuously. A computer works with digital data, so an **analogue-to-digital converter (ADC)** is needed between sensor and processor. In the other direction, a **digital-to-analogue converter (DAC)** may be needed so that a digital output can drive an actuator such as a motor at variable speed. Naming the ADC is a common way to gain a mark on a "describe how the system works" question.

### The feedback loop

Many automated systems work in a loop that repeats continuously:

1. the sensor takes a reading;
2. the reading is converted to digital form;
3. the processor compares it with a stored target (the preset value);
4. if action is needed, the processor sends a signal to an actuator;
5. the sensor takes the next reading, which now reflects the effect of the action.

This is called **feedback** because the output affects the next input. The loop is what stops a heater overshooting or a pump running dry.

### Examples of automated systems

You should be able to discuss uses across several areas. Typical examples are:

- **Industry**: a production line where sensors check that products are present and correctly sized, and actuators move parts or reject faulty items.
- **Transport**: automatic braking or parking aids using proximity sensors, and traffic lights that change timings when sensors detect queues.
- **Agriculture**: greenhouses and irrigation that use moisture, temperature and light sensors to control watering, heating, ventilation and lighting.
- **Weather monitoring**: stations that log temperature, pressure and wind speed without an operator.
- **Lighting and gaming**: street lamps that switch on when light levels fall, and games that respond to motion sensors.

The advantages of automation include working continuously, consistent quality, faster response than a person, and removing people from dangerous places. The disadvantages include high set-up and maintenance cost, loss of some jobs, the need for skilled technicians, and the risk that a faulty sensor or program causes the wrong action to be repeated at speed.

## Robotics

A **robot** is a machine, controlled by a computer program, that can carry out physical tasks. The syllabus expects you to recognise the main characteristics of a robot: it has a mechanical structure (such as arms, wheels or legs), it has electrical components such as sensors, motors and a processor, and it is programmable. A machine that cannot be reprogrammed is closer to a simple automated device.

Robots weld and assemble in factories, carry stock in warehouses, work in dangerous places such as bomb disposal, and vacuum or mow at home. A robot's role is usually one of three types: a task that is repetitive, dangerous or needs great precision.

| Advantages | Disadvantages |
|---|---|
| Works non-stop without breaks | High purchase and maintenance cost |
| Very consistent and accurate | Cannot easily cope with unexpected situations |
| Can work in hazardous places | Can cause unemployment in some jobs |
| Can lift heavy loads safely | Needs programming and skilled technicians |

Tie each point to the context: "cheaper" is weak, but "cheaper over time than paying a person to repeat the same welding task" is developed.

## Artificial intelligence

**Artificial intelligence (AI)** is the ability of a computer system to carry out tasks that normally need human intelligence. The key characteristics to state are that an AI system collects data, uses rules to reason about that data, and can adapt its behaviour in response to what it finds. Examples are speech recognition, medical diagnosis support and route-planning.

At IGCSE you need the basic operation of an AI system and its main components:

- the **knowledge base** (the data store) holds facts about the subject area, for example symptoms and diseases;
- the **rule base** holds the rules, normally of the form IF condition THEN conclusion;
- the **inference engine** is the part that applies the rules to the facts to reach a conclusion;
- an **interface** lets the user enter information and see the result.

**Machine learning** is a branch of AI in which the system improves its performance by learning from data, rather than being given every rule by a programmer. A spam filter, for instance, can be shown many messages already labelled as spam or not spam, and then adjusts itself to classify new ones. Be careful with wording: the learning comes from the data the system is given, so poor or biased data produces poor decisions.

AI is fast, tireless and good at finding patterns in large data sets. Its disadvantages are cost, dependence on good data, lack of human judgement and unclear responsibility when it gets something wrong.

## Worked example 1: an automated greenhouse heater

A greenhouse has a temperature sensor, a microprocessor and a heater. The heater must be on whenever the temperature is below 20 degrees Celsius. The pseudocode below runs once for each reading.

```
INPUT Temperature
IF Temperature < 20 THEN
    HeaterOn ← TRUE
ELSE
    HeaterOn ← FALSE
ENDIF
```

Readings taken one after another are 17, 19, 22, 25, 21 and 18.

| Reading (degrees Celsius) | Temperature < 20? | Heater |
|---|---|---|
| 17 | Yes | On |
| 19 | Yes | On |
| 22 | No | Off |
| 25 | No | Off |
| 21 | No | Off |
| 18 | Yes | On |

The heater is on for three of the six readings (the first, second and sixth). To describe the whole system in words: the temperature sensor sends an analogue signal, which the ADC converts to digital; the microprocessor compares it with the stored value of 20; if it is lower, the microprocessor sends a signal to switch the heater (the actuator) on; the sensor then measures again, so the process repeats continuously.

## Worked example 2: a rule-based medical check

A simple diagnosis program has a rule base with two rules.

- Rule 1: IF temperature is high AND throat is sore THEN suggest "possible infection".
- Rule 2: IF temperature is normal THEN suggest "no action".

A user enters "temperature high" and "throat sore". The inference engine searches the rule base, finds that both conditions in Rule 1 match the facts supplied, and outputs "possible infection". Rule 2 is not used because its condition is false. A new rule can be added to the rule base without rewriting the inference engine, which is a useful point in an exam.

## Common mistakes

- Saying a sensor "decides" or "turns on" the device. Sensors only measure; the processor decides and the actuator acts.
- Forgetting the ADC when describing how analogue sensor data reaches the processor.
- Confusing the knowledge base (facts) with the rule base (rules) and the inference engine (the part that reasons).
- Treating machine learning and AI as exactly the same thing. Machine learning is one approach within AI.

## Exam technique

**State** needs a short fact, **describe** a sequence or set of features, **explain** a reason, and **discuss** both sides with a judgement. In scenarios, name the specific sensor (a moisture sensor, not "a sensor") and the specific actuator (a pump, not "an output"). In a long answer, cover the full loop: sensor, conversion, processor decision, actuator, repeat.

## Check your understanding

1. Name the three main components of an automated system and say what each one does. *Sensor: measures a physical property. Microprocessor: reads the data, compares with stored values and decides. Actuator: carries out the physical action.*
2. Why is an analogue-to-digital converter needed between a sensor and a microprocessor? *The sensor produces a continuously varying analogue signal, but the microprocessor only processes digital data.*
3. A street lamp switches on when it gets dark. Name the sensor and the actuator. *A light sensor; a lamp (switch) as the actuator.*
4. Give two disadvantages of using robots in a factory. *Examples: high cost to buy and maintain; cannot cope with unexpected situations; may cause job losses.*
5. State the purpose of the inference engine in an AI system. *It applies the rules in the rule base to the facts in the knowledge base to reach a conclusion.*
6. What is the difference between the knowledge base and the rule base? *The knowledge base stores facts; the rule base stores IF...THEN rules used to reason about those facts.*
7. Using Worked example 1, what would the heater do for a reading of exactly 20? *It would be off, because 20 is not less than 20.*
8. Explain why machine learning needs good data. *The system learns patterns from the data it is given, so inaccurate, limited or biased data leads to poor or unfair decisions.*

## Frequently asked questions

**What are the three main parts of an automated system?**
Sensors measure a physical property, a microprocessor reads the data, compares it with stored values and decides what to do, and actuators such as motors, pumps or heaters carry out the physical action.

**Why does an automated system need an analogue-to-digital converter?**
Sensors usually produce analogue signals that vary continuously, but a microprocessor only processes digital data, so an ADC converts the sensor's signal first.

**What is the difference between the knowledge base, the rule base and the inference engine?**
The knowledge base stores facts, the rule base stores IF condition THEN conclusion rules, and the inference engine applies the rules to the facts to reach a conclusion.

**Is machine learning the same as artificial intelligence?**
No. Machine learning is one branch of AI in which a system improves its performance by learning from data rather than being given every rule by a programmer.
