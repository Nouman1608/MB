---
title: "Cambridge A Level Information Technology (9626): User interfaces"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Topic 2 – Hardware and software"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 2.5
syllabusTopics:
  - qualification: "a-level"
    topic: "hardware-and-software"
    subtopic: "user-interfaces"
description: "Cambridge 9626 IT section 2.5 study guide: command line, graphical, dialogue and gesture-based interfaces, their uses, trade-offs and scenario answers."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide teaches **section 2.5 User interfaces** of Topic 2 Hardware and software in the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. It is AS Level content, examined in Paper 1 Theory. The [utility software and user interfaces overview](/resources/a-level-cambridge-ict-utility-software-and-user-interfaces/) lists the four types with an advantage and disadvantage each; this page explains how each one works and how to choose between them in a scenario. Use it with the [user interfaces revision notes](/resources/cambridge-a-level-ict-9626-user-interfaces-revision-notes/) and the [user interfaces practice questions](/resources/cambridge-a-level-ict-9626-user-interfaces-practice/).

## What section 2.5 covers

| Syllabus point | What you must be able to do |
|---|---|
| Types | Describe command line, graphical user, dialogue and gesture-based interfaces |
| Uses | Explain what each type is used for |
| Evaluation | Give advantages and disadvantages of each |

A **user interface** is the means by which a person and a computer system communicate: how the user gives instructions and how the system presents results. The best interface depends on **who** the user is, **what** they are doing and **where** they are doing it.

## Command line interface (CLI)

The user types instructions at a **prompt**, one command per line, using a fixed **syntax** (the exact words, order and symbols the system understands). The system replies with text. A command usually has a name, then options and the file or item it acts on, such as a command to copy every spreadsheet file from one folder into a back-up folder.

**How it is used.**
- **System administration**: configuring servers, managing user accounts, installing software on many machines.
- **Remote control** of computers over a network, since text needs little bandwidth.
- **Scripting**: commands saved in a file and run together, so a long task runs automatically.
- **Programming and troubleshooting**, where precise control is needed.

**Worked example 1: why experts choose a CLI.** A technician must rename 500 photo files to include the date and move them into folders by month. In a GUI this means hundreds of clicks and drags, with a high chance of a slip. With a CLI, a short script loops through the files, renames each and moves it, finishing in seconds. The same script can be reused next month.

**Advantages:** fast for experienced users; precise access to every setting; tasks can be scripted and repeated; uses very little memory and processing power, so it suits servers and older hardware.

**Disadvantages:** commands and syntax must be learned and remembered; a single typing error can cause an error or the wrong action, sometimes with serious results such as deleting files; unsuitable for beginners and occasional users; no visual overview.

## Graphical user interface (GUI)

The user interacts with **windows, icons, menus and a pointer** (WIMP), usually controlled by a mouse or trackpad, or by touching objects on a touch screen. Actions are visible: dragging a file icon onto a folder moves it.

**How it is used:** general home and office computing, tablets and smartphones, self-service kiosks, and most application software.

**Design features that make a GUI effective:** consistent menus and icons across programs; familiar symbols (a bin for delete); immediate visual feedback; undo; help that appears in context.

**Advantages:** intuitive and quick to learn; nothing to memorise, since options are visible in menus; several programs can be seen at once in separate windows; supports images, video and visual editing.

**Disadvantages:** needs more memory, processing power and screen space than a CLI; repetitive tasks are slow compared with scripting; options can be buried in menus; harder to use for people with impaired sight unless accessibility features are provided.

## Dialogue interface

The user and the system hold a **conversation**, usually spoken, sometimes typed. Speech-recognition software turns speech into text, the system works out what the user wants, and it replies in speech or on screen. Examples include voice assistants on phones and smart speakers, in-car voice control, and automated telephone services that ask questions and respond to the caller's answers.

**How it is used:** hands-free control while driving or cooking; accessibility for people with limited sight or movement; quick queries ("what is the weather tomorrow?"); controlling smart-home devices.

**Advantages:** natural, with little to learn; hands and eyes stay free, which improves safety in a car; helps users who cannot use a keyboard, mouse or screen.

**Disadvantages:** recognition errors with accents, unclear speech or background noise; limited range of understood commands, so complex tasks are hard; speaking aloud is unsuitable in quiet or public places and raises privacy concerns; devices that listen for a wake word worry some users.

## Gesture-based interface

The system recognises **movements** of the user's body, hands or fingers and treats them as commands. Gestures can be made on a **touch screen** (swipe, pinch to zoom, tap) or **in the air**, detected by cameras, infrared or motion sensors, and by sensors in handheld controllers or wearable devices.

**How it is used:** smartphones and tablets; motion-controlled games and virtual reality; interactive displays in museums and shops; car controls that respond to a hand wave; operating theatres, where a surgeon can scroll through scans without touching a non-sterile surface.

**Advantages:** intuitive, often feeling like handling real objects; no keyboard or mouse needed; touch-free control helps hygiene; engaging for games and displays.

**Disadvantages:** gestures can be misread or made by accident; holding arms up is tiring over long periods; needs suitable sensors, cameras and often good lighting; a limited set of gestures restricts complex input; users must learn which gestures exist.

## Comparing the four

| Criterion | CLI | GUI | Dialogue | Gesture |
|---|---|---|---|---|
| Learning needed | High | Low | Low | Low to medium |
| Speed for an expert | Very fast | Medium | Slow for complex tasks | Medium |
| Resources needed | Very few | High | Speech processing | Sensors and processing |
| Hands needed? | Yes (typing) | Yes | No | Yes, or body |
| Works in noise? | Yes | Yes | Poorly | Yes |
| Accessibility | Poor for most | Good with features | Good for limited sight or movement | Varies |

## Worked example 2: matching interfaces to users

A hospital has four needs. Choose an interface for each and justify it.

1. **IT staff managing 200 servers:** CLI, because scripts can apply the same settings to every server quickly and the staff are experts.
2. **Receptionists booking appointments:** GUI, because staff with little training can see the calendar and click free slots, reducing errors.
3. **Surgeons viewing scans during an operation:** gesture-based (touch-free), because they must not touch surfaces that are not sterile.
4. **A patient with limited hand movement controlling lights and TV:** dialogue, because spoken commands need no fine movement.

Each answer names the interface, links it to a feature of the user or setting, and states the benefit.

## Common mistakes

- Calling a touch screen a gesture interface in every case. Tapping icons on a touch screen is using a GUI; swiping and pinching are gestures.
- Describing a dialogue interface as "a dialogue box". A dialogue box is part of a GUI.
- Saying a CLI is "old-fashioned" instead of explaining why experts still choose it.
- Giving advantages that apply to all interfaces, such as "easy to use".
- Ignoring the environment, such as noise for dialogue or lighting for camera-based gestures.

## Exam technique

- **Describe** an interface: how the user gives input, how the system responds, and an example.
- **Explain a use**: link a feature of the interface to the user or setting with "because".
- **Advantages and disadvantages**: make each specific to the interface, and to the scenario if one is given.
- **Evaluate**: compare at least two interfaces for the scenario and conclude which suits it best.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, Cambridge International Education. Topic 2 Hardware and software, section 2.5 User interfaces.
