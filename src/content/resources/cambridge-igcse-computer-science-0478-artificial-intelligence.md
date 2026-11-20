---
title: "Cambridge IGCSE Computer Science (0478): Artificial intelligence"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 6: Automated and emerging technologies"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 6.3
syllabusTopics:
  - qualification: "igcse"
    topic: "automated-and-emerging-technologies"
  - qualification: "igcse"
    topic: "automated-and-emerging-technologies"
    subtopic: "artificial-intelligence-0478"
description: "Study guide to Cambridge IGCSE Computer Science 0478 section 6.3: the meaning and characteristics of artificial intelligence, and the operation and components of expert systems and machine learning."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---
Section 6.3 of the Cambridge IGCSE Computer Science 0478 syllabus has three content statements. You must **understand what is meant by artificial intelligence (AI)**, **describe the main characteristics of AI**, and **explain the basic operation and components of AI systems to simulate intelligent behaviour**. The syllabus limits the systems to **expert systems** and **machine learning**.

## What is artificial intelligence?

**Artificial intelligence** is a branch of computer science dealing with the **simulation of intelligent behaviours by computers**. The word "simulation" matters: the computer imitates behaviour that we would call intelligent when a person does it, such as recognising a face, understanding speech, diagnosing a problem or learning from experience. It does not mean that the computer thinks or feels as a person does.

## Characteristics of AI

The syllabus gives three characteristics.

| Characteristic | Meaning | Example |
|---|---|---|
| The collection of data and the rules for using that data | The system stores data and has rules that say how to use it | A chess program holds the rules of chess and data about positions |
| The ability to reason | The system uses the rules and the data to reach a conclusion or make a decision | A medical program concludes that a patient probably has a particular illness |
| The ability to learn and adapt (it can include) | The system improves its own performance using experience, and changes when circumstances change | A spam filter that gets better at spotting junk email |

The first two belong to every AI system. The third is something AI **can** include, and the wording is important: not every AI system learns.

## Expert systems

An **expert system** is a computer program that holds the knowledge of human experts in a particular field and uses it to give advice or make decisions, as an expert would. Examples are systems for medical diagnosis, for identifying a mineral, for finding a fault in a car engine, or for advising on tax.

### The four components

| Component | Purpose |
|---|---|
| **Knowledge base** | A database of facts and knowledge about the subject, collected from experts |
| **Rule base** | A set of rules, usually written as IF ... THEN statements, that link the facts to conclusions |
| **Inference engine** | The part that does the reasoning. It examines the user's answers, searches the knowledge base, applies the rules and reaches a conclusion |
| **Interface** | The part the user sees: it asks questions, accepts the user's answers and displays the result and advice |

### How an expert system works

1. The user answers questions given by the **interface**.
2. The **inference engine** takes the answers and looks for matching facts in the **knowledge base**.
3. The inference engine applies the **rules** in the rule base to the facts.
4. It reaches a conclusion and may give a probability or a recommended action.
5. The interface displays the result to the user.

### Worked example: diagnosing a plant problem

A garden expert system has these rules in its rule base:

| Rule | IF | THEN |
|---|---|---|
| 1 | Leaves are yellow AND soil is wet | Plant has too much water |
| 2 | Leaves are yellow AND soil is dry | Plant needs water |
| 3 | Leaves have brown spots AND leaves are damp | Plant may have a fungus |

A gardener answers the questions: leaves are yellow, soil is dry.

1. The interface collects the answers.
2. The inference engine compares them with the rules. Rule 1 requires wet soil, so it fails. Rule 2 matches both conditions. Rule 3 needs brown spots, so it fails.
3. The inference engine concludes: the plant needs water.
4. The interface displays "Your plant needs water".

The knowledge base holds the facts about plants and soil that the rules refer to. If the gardener answers "soil is wet", the same engine would give a different result using rule 1.

### Advantages and limitations

- **Advantages:** available at any time; gives consistent answers; holds more knowledge than one person; allows non-experts to get specialist advice; can explain the rules used.
- **Limitations:** only as good as the knowledge and rules put in; does not understand new situations; expensive to build; cannot use common sense; needs updating when knowledge changes.

## Machine learning

**Machine learning** is when a program has the **ability to automatically adapt its own processes and/or data**. Rather than relying only on rules written by a programmer, the program uses examples to improve.

### How it works

1. The program is given a large amount of **data**, such as emails marked "spam" or "not spam".
2. It looks for patterns in the data and sets its own rules or values.
3. When it makes a decision, such as marking a new email as spam, the result is checked, and the program **adjusts** its processes or data using the outcome.
4. Over time the program makes more accurate decisions.

### Worked example: a spam filter

At the start the filter knows nothing. It is shown 1,000 emails that people have already labelled. It finds that emails containing the phrases "claim your prize" and "urgent payment" are nearly always spam. It adds these patterns to its data. A user then marks a new junk email that the filter missed. The filter adds the new pattern, so next time it catches similar emails. No programmer wrote the new rule: the program adapted its own data.

### Expert system versus machine learning

| | Expert system | Machine learning |
|---|---|---|
| Source of rules | Written in advance from human experts | Found by the program from data |
| Changes with experience? | Only if someone updates the rules | Yes, the program adapts itself |
| Key parts | Knowledge base, rule base, inference engine, interface | Data, and a program able to adapt its processes or data |
| Example | Medical diagnosis helper | Spam filter, speech recognition, a game program that improves by playing |

## Where AI is used

| Area | How AI is used |
|---|---|
| Voice assistants | Recognise speech, find an answer and reply |
| Online shops and streaming | Suggest items based on what the user has bought or watched |
| Navigation | Choose a route using traffic data |
| Medicine | Help doctors by suggesting possible diagnoses from symptoms or scans |
| Games | Computer opponents that react to the player and improve with play |
| Driverless vehicles | Combine sensors with rules and learned patterns to decide how to drive |

## Benefits and concerns

AI can work faster and for longer than people, and it can find patterns in huge amounts of data. There are also concerns.

- **Jobs:** tasks done by people may be taken over by AI systems.
- **Errors and bias:** an AI system is only as good as its data and rules. If the data is incomplete or unfair, its decisions can be wrong or unfair.
- **Privacy:** many systems collect large amounts of personal data to work, and this data must be kept safe.
- **Trust:** users may rely on a system without checking, even when it is wrong.

## Annotated model answer

**Question:** Describe the components of an expert system. [4]

> The knowledge base is a database of facts and knowledge about the subject [1]. The rule base is a set of rules, such as IF ... THEN statements, that link facts to conclusions [1]. The inference engine reasons by searching the knowledge base and applying the rules to the user's answers to reach a conclusion [1]. The interface lets the user enter answers and see the result [1].

**Why it scores 4:** each of the four components is named and given its own role. A common weaker answer says "the inference engine is the brain" without saying what it does.

## Common mistakes

- Saying AI means computers that think exactly like humans. The syllabus word is simulate.
- Confusing the knowledge base with the rule base. The knowledge base holds facts; the rule base holds the rules for using them.
- Leaving out the user interface when listing the components.
- Saying all AI learns. Learning and adapting is something AI can include.
- Writing that machine learning means "the computer is told what to do". It adapts its own processes and data.
- Treating a program that follows a fixed set of instructions as AI. Without reasoning from data and rules, it is not AI.

## Exam technique

- **Understand what is meant by AI**: use the word "simulation" and "intelligent behaviours".
- **Describe the characteristics**: data and rules, reasoning, learning and adapting.
- **Explain operation of an expert system**: name all four components and give each one's role in order.
- **Explain machine learning**: data, patterns, adjustment, better decisions.

## Practise this sub-topic

Use the [Artificial intelligence revision notes](/resources/cambridge-igcse-computer-science-0478-artificial-intelligence-revision-notes/) for quick recall and the [Artificial intelligence practice questions](/resources/cambridge-igcse-computer-science-0478-artificial-intelligence-practice/) to test yourself.

## Official syllabus

Cambridge IGCSE Computer Science (0478) syllabus for 2026, 2027 and 2028, section 6.3 Artificial intelligence:
[official syllabus PDF](https://www.cambridgeinternational.org/Images/697167-2026-2028-syllabus.pdf).
