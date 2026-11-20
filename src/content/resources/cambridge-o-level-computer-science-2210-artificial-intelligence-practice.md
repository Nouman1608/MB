---
title: "Cambridge O Level Computer Science (2210): Artificial intelligence -- Practice Questions"
seoTitle: "Cambridge O Level CS 2210 Artificial Intelligence Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["o-levels"]
topic: "Topic 6 – Automated and emerging technologies"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 6.3
syllabusTopics:
  - qualification: "o-level"
    topic: "automated-and-emerging-technologies-2210"
  - qualification: "o-level"
    topic: "automated-and-emerging-technologies-2210"
    subtopic: "artificial-intelligence-2210"
description: "Original questions with answers on Cambridge O Level Computer Science 2210 section 6.3: artificial intelligence, expert systems and machine learning."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Artificial intelligence study guide](/resources/cambridge-o-level-computer-science-2210-artificial-intelligence/) and [Artificial intelligence revision notes](/resources/cambridge-o-level-computer-science-2210-artificial-intelligence-revision-notes/)

---

## Section A

**1.** State what is meant by artificial intelligence (AI). **[2]**

**2.** Name the **two** types of AI system covered in this part of the syllabus. **[2]**

**3.** Name the component of an expert system that stores the facts about the subject. **[1]**

**4.** Name the component of an expert system that applies the rules to reach a conclusion. **[1]**

**5.** State what is meant by machine learning. **[1]**

**6.** Give **one** example of the use of machine learning. **[1]**

## Section B

**7.** Describe the main characteristics of AI. **[3]**

**8.** A hospital uses an expert system to help doctors to diagnose a skin condition.

**(a)** Describe the purpose of the knowledge base. **[1]**

**(b)** Describe the purpose of the rule base. **[1]**

**(c)** Describe what the interface is used for. **[2]**

**(d)** Explain how the inference engine produces a diagnosis. **[2]**

**9.** The rule base of a plant-care expert system contains these rules.

- Rule 1: IF the leaves are yellow AND the soil is wet THEN the plant has too much water.
- Rule 2: IF the leaves are yellow AND the soil is dry THEN the plant needs water.
- Rule 3: IF the leaves are brown at the edges AND the air is dry THEN the plant needs more humidity.

A user enters: the leaves are yellow, and the soil is dry.

**(a)** State the output of the expert system. **[1]**

**(b)** Explain how the inference engine decides on this output. **[2]**

**(c)** The user changes the soil answer to "wet". State the new output. **[1]**

**10.** A music streaming service uses machine learning to suggest songs.

**(a)** Explain how the service could use machine learning to improve its suggestions over time. **[3]**

**(b)** Explain why this is different from a program that suggests the same songs to everyone. **[2]**

**11.** Compare an expert system with a machine learning system. **[4]**

**12.** A bank uses AI to check card payments for fraud.

**(a)** Identify **one** type of data the system could collect. **[1]**

**(b)** Describe how the system could show the ability to reason. **[2]**

**(c)** Describe how the system could show the ability to learn and adapt. **[2]**

**13.** A student says: "Artificial intelligence means that a computer thinks and understands like a person." Explain why this statement is not correct. **[2]**

**14.** A student says: "A robot is the same thing as AI." Explain why this is not correct. **[2]**

---

## Answers

**1.** A branch of computer science [1] dealing with the simulation of intelligent behaviours by computers [1].

**2.** Expert systems [1]; machine learning [1].

**3.** The knowledge base [1].

**4.** The inference engine [1].

**5.** When a program has the ability to automatically adapt its own processes and/or data [1].

**6.** Any one: spam filtering; recommendations; image recognition; speech recognition; fraud detection [1].

**7.** It collects data and has rules for using that data [1]; it has the ability to reason / draw conclusions from the data and rules [1]; it can include the ability to learn and adapt [1].

**8. (a)** It stores the facts about skin conditions that have been collected from human experts [1].
**(b)** It stores the rules (in the form IF ... THEN ...) for using the facts to reach a conclusion [1].
**(c)** The doctor enters the patient's symptoms or answers questions through it [1], and the diagnosis is displayed through it [1].
**(d)** The inference engine searches the knowledge base for facts that match the symptoms entered [1] and applies the rules in the rule base to them to reach the most likely diagnosis [1].

**9. (a)** The plant needs water [1].
**(b)** The inference engine checks the entered answers against the rules [1]. Rule 2 matches (yellow leaves and dry soil), and Rules 1 and 3 do not match [1].
**(c)** The plant has too much water [1].

**10. (a)** The service collects data about the songs the user plays, skips and likes [1]. The program uses this data to find patterns in the user's taste and adapts its own settings or data [1]. Its suggestions are checked against what the user does next, and the feedback is used to improve the next suggestions [1].
**(b)** A fixed program would give the same suggestions whatever the user does [1]. Machine learning changes its suggestions automatically for each user, as it learns from more data [1].

**11.** In an expert system, the rules are written by people from human experts, whereas in machine learning the program finds patterns in data itself [1]. An expert system changes only when people update its knowledge base and rules, whereas a machine learning system adapts automatically as it gets more data [1]. An expert system has a knowledge base, rule base, inference engine and interface, whereas machine learning needs training data and a program that can adapt its processes and/or data [1]. Both are types of AI that simulate intelligent behaviour in a limited area / both use data to reach decisions [1].

**12. (a)** Any one: the amount, location, time and shop of past payments; the customer's usual spending pattern [1].
**(b)** It compares a new payment with the customer's usual pattern and the rules for fraud [1]. It concludes that a payment is probably fraud if, for example, it is for a large amount in a different country within minutes of a local payment [1].
**(c)** The system is told which flagged payments were really fraud and which were genuine [1]. It adapts its own rules or data so that it flags fraud more accurately in future [1].

**13.** AI is a simulation of intelligent behaviour [1]. A computer follows programs, rules and data and does not think or understand like a person [1].

**14.** A robot is a machine with a mechanical structure, electrical components and a program [1]. AI is software that simulates intelligent behaviour, and it can be used in a robot but also in systems with no body, such as an expert system [1].

---

## Where marks are usually lost

- Question 1: writing "a computer that thinks". Use "simulation of intelligent behaviours".
- Question 3 and Question 4: swapping the knowledge base, rule base and inference engine.
- Question 7: listing examples of AI instead of characteristics.
- Question 8 (c): saying the interface "does the thinking". It is for input and output.
- Question 9 (b): giving the output without saying that the rules were matched against the answers.
- Question 10: describing a person updating the suggestions. The program adapts itself.
- Question 11: describing each system separately instead of comparing them.
- Question 13 and Question 14: saying "AI is different" with no reason.

## Checking an expert system trace

Write each rule's conditions next to the user's answers and tick the ones that match. Only the rule where every condition is ticked gives the output.
