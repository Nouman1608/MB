---
title: "Theme A -- Concepts of Computer Science: Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["ib"]
topic: "Theme A -- Concepts of computer science"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Computer Science"]
syllabusSeries: "First assessment 2027"
order: 1
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-computer-science-theme-a"
description: "Original practice questions with full worked answers covering computer fundamentals, networks, databases and machine learning, for Theme A of IB Diploma Programme Computer Science."
author: "marlbridge-academic-team"
publishedDate: 2026-09-06
featured: false
---

> **These are original questions written for Marlbridge**, in the style and at the
> standard of the examination. They are **not** reproduced past-paper questions --
> the IB holds copyright in its own papers. Use these alongside the official past
> papers available through your school or the IB store.

Related: [Theme A revision notes](/resources/ib-dp-computer-science-theme-a-revision-notes/) and the
[IB DP Computer Science syllabus guide](/resources/ib-dp-computer-science-syllabus-guide/).

## Section A

**1.** State the three main components of a CPU covered in A.1. **[2]**

**2.** Define the term "protocol" in the context of computer networks. **[1]**

**3.** State two benefits of storing data in a relational database rather than a flat file. **[2]**

## Section B

**4.** A school wants to store information about students, the courses they take, and their teachers.

**(a)** Explain why a relational database with separate tables for students, courses and teachers would reduce data redundancy compared with a single flat-file table. **[2]**
**(b)** Identify what a foreign key in the "enrolments" table linking students to courses would represent. **[2]**

**5.** Distinguish between a LAN and a WAN, giving one example of each. **[2]**

**6.** A company deploys a machine learning model trained on historical loan-approval data to decide whether to approve new loan applications.

**(a)** Explain, using the terms "training data" and "features", how the model learns to make decisions. **[2]**
**(b)** Identify one ethical concern raised by this application, and explain why it arises. **[2]**

## Section C

**7.** A pre-released case study describes a hospital system that uses networked databases and an AI-based triage tool to prioritise patients.

**(a)** Explain how the fetch-execute cycle allows the hospital's computer systems to process a triage request. **[2]**
**(b)** Explain why packet switching, rather than a single dedicated connection, is well suited to a hospital's network carrying many simultaneous requests. **[2]**
**(c)** Explain the difference between supervised and unsupervised learning, and state which is more likely used for the AI triage tool if it was trained on labelled patient outcomes. **[3]**
**(d)** Evaluate one advantage and one risk of using an AI-based triage tool in this context. **[3]**

## Worked answers

**1.** The control unit, the arithmetic and logic unit (ALU), and registers. **[2]** (1 mark for any two correctly named, full marks for all three)

**2.** A protocol is an agreed set of rules that governs how data is formatted, transmitted and received, allowing different systems to communicate reliably. **[1]**

**3.** Any two of: reduced data redundancy (data stored once rather than repeated across records); improved data integrity (changes made in one place, avoiding inconsistent copies); controlled access (permissions can be set per table). **[2]**

**4. (a)** In a flat file, course and teacher details would be repeated for every student enrolled, wasting storage and risking inconsistency if a course name changes in one row but not another; splitting into separate tables stores each piece of data once and links it via keys. **[2]**
**(b)** It would represent a link to the primary key of the students table (and/or courses table), connecting a specific student to a specific course without duplicating either student or course details in the enrolments table itself. **[2]**

**5.** A LAN (Local Area Network) covers a small geographic area such as a single building, e.g. a school's internal network. A WAN (Wide Area Network) spans a large geographic area, connecting multiple LANs, e.g. the internet. **[2]**

**6. (a)** The training data consists of historical examples (past loan applications and their outcomes); the model identifies patterns in the features (such as income, credit history) associated with approval or rejection, and derives its own decision rules from these patterns rather than being explicitly programmed with rules. **[2]**
**(b)** Bias in training data is a valid concern: if historical loan decisions reflected discriminatory lending patterns, the model can learn and perpetuate that bias in its own decisions, even without being explicitly told to discriminate. **[2]** (Other valid answers, e.g. lack of transparency in automated decisions, are also acceptable.)

**7. (a)** Each instruction involved in processing the triage request (e.g. retrieving patient data, running the AI model) is fetched from memory, decoded, and executed by the CPU in a repeating cycle, allowing the system to carry out the sequence of operations the triage software requires. **[2]**
**(b)** Packet switching splits data into independent packets that can travel via different routes and be reassembled at the destination, so if one route is congested or fails, packets can be rerouted -- this makes efficient, resilient use of shared network capacity for many simultaneous hospital requests, rather than requiring a dedicated line reserved for each one. **[2]**
**(c)** Supervised learning uses labelled data (inputs paired with known correct outputs) to learn a mapping from input to output; unsupervised learning finds patterns or groupings in unlabelled data with no predefined correct answer. **[2]** Since the triage tool was trained on labelled patient outcomes, it is most likely using supervised learning. **[1]**
**(d)** Advantage: the tool can process large volumes of patient data faster and more consistently than manual triage, potentially speeding up urgent cases. Risk: if the training data under-represents certain patient groups, the model may produce biased or inaccurate triage decisions for those groups, with serious real-world consequences given the medical context. **[3]** (1 mark for a valid advantage, 2 marks for a well-explained risk connecting back to a genuine A.4 concept such as bias or transparency)

## Why question 7 combines all four sub-topics

Question 7 is deliberately built around a single case-study-style scenario touching A.1 (fetch-execute
cycle), A.2 (packet switching), and A.4 (supervised learning and its ethical risks) at once, because
this is exactly how the real Paper 1 case-study questions are structured -- Theme A content rarely
appears as four separate standalone questions in the actual exam. Practising the skill of pulling the
relevant sub-topic out of a scenario, rather than only answering direct recall questions, is the single
biggest gap the revision notes flag between Theme A's content and how it is actually assessed.

## Official syllabus

International Baccalaureate Organization, *Diploma Programme Subject Brief -- Computer Science*, first
assessment 2027 -- the same source cited by the
[Theme A revision notes](/resources/ib-dp-computer-science-theme-a-revision-notes/) and the
[IB DP Computer Science syllabus guide](/resources/ib-dp-computer-science-syllabus-guide/).
