---
title: "AQA A-Level Business (7132): Managing strategic implementation"
seoTitle: "AQA A-Level Business 7132 Strategic Implementation Guide"
resourceType: "study-guides"
subject: "business"
level: ["a-levels"]
topic: "Managing strategic change"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7132"]
syllabusSeries: "For first teaching from September 2023"
order: 10.3
syllabusTopics:
  - qualification: "a-level"
    topic: "managing-strategic-change-aqa-alevel-business"
  - qualification: "a-level"
    topic: "managing-strategic-change-aqa-alevel-business"
    subtopic: "managing-strategic-implementation-aqa-alevel-business"
description: "Study guide to AQA A-level Business 7132 section 3.10.3: leadership, communications and structure in implementing strategy, plus network analysis, critical path and total float."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide goes deeper into section **3.10.3 Managing strategic implementation** of the AQA AS and A-level Business specification (7132, for first teaching from September 2023). Section 3.10 is for the A-level only. The specification's content is:

- **how to implement strategy effectively**, to include **the value of leadership** and **the value of communications** in strategic implementation
- **the importance of organisational structure** in strategic implementation
- **the value of network analysis** in strategic implementation, to include **understanding and interpreting network diagrams, amendment of network diagrams, and identifying the critical path and total float**.

All businesses and figures are invented.

## From strategy to action

A strategy is only valuable if it is carried out. Implementation turns decisions into actions: allocating resources, setting responsibilities and deadlines, motivating people and monitoring progress. Many strategies fail not because the idea was wrong, but because of poor execution (see section 3.10.4). Three things matter especially: leadership, communications and structure. Network analysis helps to plan the timing.

## The value of leadership

**Leadership** is the ability to influence and direct others towards a goal. In implementation, leaders:

- **set direction** and explain why the strategy matters
- **motivate and inspire** staff to commit extra effort during change
- **make decisions** when problems arise and resolve conflicts
- **allocate resources** and remove obstacles
- **model the behaviour** they want, which shapes culture (see section 3.10.2)
- **build support** among managers and key stakeholders.

Different styles suit different situations:

| Style | Features | Suits implementation when |
|---|---|---|
| Autocratic | Leader decides and instructs | Speed is vital, such as in a crisis; staff are inexperienced |
| Democratic | Staff are consulted and involved | Commitment and ideas matter; staff are skilled |
| Laissez-faire | Staff given freedom | Staff are expert and self-motivated; creativity is needed |
| Paternalistic | Leader decides but with concern for staff welfare | Staff need reassurance during uncertainty |

**Evaluation.** Effective leaders adapt style to the situation, the task and the people. A strong, visible leader can drive a strategy through, but over-dependence on one individual is risky: if they leave or lose credibility, the strategy may stall. Leadership alone is not enough without resources, a suitable structure and communication.

## The value of communications

Clear communication is essential for implementation:

- It **explains** the strategy, the reasons and each person's role.
- It **reduces uncertainty and resistance**, since misunderstanding is a main reason for resistance to change (section 3.10.1).
- It **co-ordinates** departments so that actions fit together.
- It **feeds back** information on progress and problems so that plans can be corrected.
- It **builds commitment** when staff are consulted and heard (two-way communication).

**Methods:** briefings and meetings, intranet and email, newsletters, team talks, workshops, social media; one-way (top-down) or two-way.

**Problems:** too many layers distort messages; information overload; inconsistent messages from different managers; poor listening; remote or shift workers missed. Good practice is a clear message, repeated through several channels, with a way for staff to ask questions and respond.

## The importance of organisational structure

The structure sets out who is responsible for what, who reports to whom and how decisions flow. For a strategy to succeed, structure must **support it**.

| Structural feature | Effect on implementation |
|---|---|
| Span of control and layers | A tall structure slows communication; a flat one speeds decisions but increases managers' workloads |
| Centralised or decentralised decisions | Centralised gives control and consistency; decentralised gives speed and local responsiveness |
| Functional against product or market structure | Functional gives specialist expertise; product or market structure suits strategies of diversification or international expansion |
| Matrix and project teams | Combine specialists across departments, helpful for change projects but may confuse reporting lines |
| Clear accountability | Someone must own each action; unclear ownership leads to delay |

**Example.** A firm adopts a strategy of expanding into three overseas markets. A structure by region, with local decision-making power, will suit this better than a single central head office approving every local decision. If the structure does not change, the strategy is likely to be slowed or blocked.

## Network analysis

**Network analysis** (critical path analysis) plans complex projects by showing the activities, their durations and the order in which they must happen. It helps managers to:

- identify the **minimum time** to complete the project
- identify **critical activities** that cannot be delayed
- see where there is **slack** (float) to move resources or accept delays
- co-ordinate people and resources
- re-plan quickly when something changes.

### Key terms

| Term | Meaning |
|---|---|
| Activity | A task with a duration, shown as a node (box) |
| Dependency | An activity that must finish before another can start |
| Earliest start time (EST) | The earliest an activity can start, given its dependencies |
| Latest finish time (LFT) | The latest an activity can finish without delaying the project |
| Critical path | The longest path through the network; it sets the project duration |
| Critical activity | An activity with zero float |
| Total float | The time an activity can be delayed without delaying the project |

### Calculating

1. **Forward pass:** for each activity, EST = the largest of the earliest finish times of the activities before it. Earliest finish = EST + duration. The largest earliest finish is the project duration.
2. **Backward pass:** start with the project duration as the LFT of the last activity. For earlier activities, LFT = the smallest of the latest start times of the activities that follow. Latest start = LFT − duration.
3. **Total float = LFT − duration − EST.**
4. **Critical path:** the activities with zero float, forming a path from start to finish.

### Worked example: opening a new store

Nine activities (durations in weeks):

| Activity | Duration | Must follow |
|---|---|---|
| A: Secure lease | 3 | none |
| B: Design layout | 4 | none |
| C: Recruit manager | 5 | A |
| D: Shopfitting | 6 | A, B |
| E: Order stock | 3 | B |
| F: Install IT | 4 | D |
| G: Recruit and train staff | 4 | C |
| H: Stock delivery | 2 | D, E |
| I: Launch | 1 | F, G, H |

**Forward and backward pass:**

| Activity | EST | EFT | LFT | Total float |
|---|---|---|---|---|
| A | 0 | 3 | 4 | 1 |
| B | 0 | 4 | 4 | 0 |
| C | 3 | 8 | 10 | 2 |
| D | 4 | 10 | 10 | 0 |
| E | 4 | 7 | 12 | 5 |
| F | 10 | 14 | 14 | 0 |
| G | 8 | 12 | 14 | 2 |
| H | 10 | 12 | 14 | 2 |
| I | 14 | 15 | 15 | 0 |

The project takes **15 weeks**. The **critical path** is B, D, F, I: 4 + 6 + 4 + 1 = 15. These activities have zero float, so any delay to them delays the opening.

**Interpretation.** Activity E (order stock) has 5 weeks of float, so it can start late or take longer without affecting the launch; managers could use its staff elsewhere. Recruiting a manager (C) has 2 weeks of float.

### Amending the network

If shopfitting (D) takes 8 weeks, not 6, the EST and LFT of later activities change. Repeating the calculation gives a project time of **17 weeks**. The critical path is still B, D, F, I (4 + 8 + 4 + 1 = 17), and the float on C, E and G increases (to 4, 7 and 4 weeks). Speeding up the project requires shortening an activity on the critical path, for example paying for extra shopfitters. Shortening a non-critical activity, such as hiring the manager faster, saves no time.

### Value and limits of network analysis

**Value:** shows the shortest completion time; focuses attention on critical activities; helps allocate resources; gives a basis for monitoring and re-planning; highlights float; makes dependencies clear; can be used with costs.

**Limits:** it relies on accurate estimates of time; it does not show costs unless added; large networks are complex; it assumes resources are available; it can give a false sense of certainty; unexpected events can change the critical path; it does not deal with the human side of implementation, such as motivation.

## Putting it together

A good implementation plan combines: a **leader** who explains and drives the strategy, **communication** that carries the message and gathers feedback, a **structure** that gives clear responsibility, and a **network** plan that sequences the work and flags critical activities. Weakness in any one can undermine the rest.

## Exam technique

- For calculations, show the forward and backward pass, state the critical path and give the project duration with units.
- **Analyse:** explain what float or the critical path means for the managers' decisions.
- **Evaluate:** weigh the usefulness of leadership, communication, structure and network analysis for the case, and state which matters most and why.

## Common mistakes

- Taking the shortest path as the critical path. The critical path is the longest.
- Calculating float as LFT − EST without subtracting the duration.
- Forgetting that shortening a non-critical activity does not shorten the project.
- Treating communication as one-way.
- Recommending a leadership style without linking it to the situation.

Test your recall with the [revision notes](/resources/aqa-a-level-business-7132-managing-strategic-implementation-revision-notes/) and practise with the [practice questions](/resources/aqa-a-level-business-7132-managing-strategic-implementation-practice/).

*Written against the AQA AS and A-level Business specification (7132), section 3.10.3. Always check the current specification for your examination year.*
