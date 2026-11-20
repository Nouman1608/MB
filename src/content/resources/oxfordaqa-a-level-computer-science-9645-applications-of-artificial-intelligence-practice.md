---
title: "OxfordAQA A-Level Computer Science (9645): Applications of artificial intelligence -- Practice Questions"
seoTitle: "OxfordAQA 9645 Applications of AI Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 16 – Artificial intelligence"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 16.1
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "artificial-intelligence-9645"
  - qualification: "a-level"
    topic: "artificial-intelligence-9645"
    subtopic: "applications-of-artificial-intelligence-oxfordaqa-alevel-cs"
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.16.1 Applications of AI: AI characteristics, narrow AI, generative AI, recommendations, games and diagnosis."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions practise sub-topic **3.16.1 Applications of artificial intelligence** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: the characteristics of AI, narrow and general intelligence, and the application areas of generative AI, search and recommendation systems, strategic games and medical diagnosis.

Related pages: [applications of AI study guide](/resources/oxfordaqa-a-level-computer-science-9645-applications-of-artificial-intelligence/) ·
[applications of AI revision notes](/resources/oxfordaqa-a-level-computer-science-9645-applications-of-artificial-intelligence-revision-notes/)

## Section A

**1.** Describe **two** ways in which a computer system may be considered to be artificially intelligent. **[2]**

**2.** Explain what is meant by saying that current AI systems are **narrow**, and state the term for a system that is not narrow. **[2]**

**3.** State **four** application areas of artificial intelligence. **[2]**

**4.** Describe what a **generative AI** system does. **[2]**

## Section B

**5.** A simple text generator is trained on the text "red car red bus red car blue car". It counts which word follows each word.

**(a)** Complete the counts for the words that follow "red". **[1]**
**(b)** Calculate the probability that the word after "red" is "car". **[1]**
**(c)** Explain why a text generator based on word counts alone might produce fluent text that is wrong. **[2]**

**6.** An online shop recommends items using ratings out of 5.

| Person | P | Q | R | S |
|---|---|---|---|---|
| Hana | 4 | 5 | | |
| Ivo | 5 | 5 | 4 | 1 |
| Jon | 1 | 2 | 5 | 5 |

**(a)** Calculate the average difference between Hana's ratings and Ivo's, and between Hana's and Jon's, on the items rated by both. **[2]**
**(b)** State which person is more similar to Hana and which item the system should recommend to her, with a reason. **[2]**
**(c)** Describe one weakness of recommending items in this way. **[1]**

**7.** The number of possible complete games of noughts and crosses is 255,168 and the board can reach 5,478 different positions.

**(a)** Explain why a computer can play noughts and crosses perfectly. **[2]**
**(b)** Explain why a chess program cannot use the same method, and describe what it does instead. **[3]**

**8.** A medical screening system is tested on 2,000 patients, of whom 100 have the disease. It correctly flags 80 of the 100 ill patients and wrongly flags 38 of the 1,900 healthy patients.

**(a)** Calculate the number of healthy patients correctly cleared. **[1]**
**(b)** Calculate the overall accuracy as a percentage to 1 decimal place. **[2]**
**(c)** Calculate the percentage of ill patients that the system finds. **[1]**
**(d)** Calculate the percentage of flagged patients who are actually ill, to the nearest whole number. **[2]**

**9.** A hospital plans to use an AI system to help diagnose disease from scans. Explain why the hospital should still involve a clinician in each diagnosis. **[2]**

**10.** A student says: "A chess program counts as artificial intelligence because it runs on a computer." Evaluate this statement using the characteristics of AI. **[3]**

## Answers

**1.** Any two of: it solves a complex problem using a similar method to the one a human might follow **[1]**; it solves a complex problem and reaches a solution at least as good as a human might reach **[1]**; it solves problems that were historically believed to need human intelligence and could not be solved algorithmically **[1]**. **[2]**

**2.** A narrow system works well only in one specific field, for example playing chess, and cannot transfer that ability to other fields **[1]**. A system that is not narrow is a **generally intelligent** system (general AI) **[1]**. **[2]**

**3.** Any four of: generative AI; search systems; recommendation systems; playing strategic games; medical diagnosis. Award **[1]** for two and **[2]** for four. **[2]**

**4.** It creates new content such as text, images, audio or code **[1]** in response to a prompt, based on patterns learned from large amounts of training data **[1]**. **[2]**

**5. (a)** car 2, bus 1 **[1]**
**(b)** 2/3 (about 67%) **[1]**
**(c)** It predicts what is likely to come next from patterns, without checking whether the result is true **[1]**, so it can produce sentences that read well but state incorrect facts **[1]**. **[2]**

**6. (a)** Hana and Ivo: (|4 − 5| + |5 − 5|) / 2 = **0.5** **[1]**. Hana and Jon: (|4 − 1| + |5 − 2|) / 2 = **3** **[1]**. **[2]**
**(b)** Ivo is more similar (smaller average difference) **[1]**. Recommend item R (Ivo rated it 4, higher than his 1 for item S, and Hana has not rated it) **[1]**. **[2]**
**(c)** Any one of: it needs enough data about the user and others; it can only suggest items like those already liked; a new user with no ratings cannot be matched **[1]**.

**7. (a)** The number of possible games (255,168) is small enough for the computer to search every possible sequence of moves **[1]**, so it can always choose a move that leads to the best result **[1]**. **[2]**
**(b)** The number of possible chess games is far too large to search in full **[1]**. The program uses heuristics (rules of thumb) or a neural network trained on many games to judge which positions are good **[1]**, and searches only a limited number of moves ahead, choosing the most promising **[1]**. **[3]**

**8. (a)** 1,900 − 38 = **1,862** **[1]**
**(b)** (80 + 1,862) / 2,000 **[1]** = 1,942 / 2,000 = **97.1%** **[1]**. **[2]**
**(c)** 80 / 100 = **80%** **[1]**
**(d)** Flagged = 80 + 38 = 118 **[1]**; 80 / 118 = **68%** **[1]**. **[2]**

**9.** Any two of: the system can make errors, such as missing disease or giving false alarms **[1]**; it works in a narrow field and cannot take account of the whole patient **[1]**; a clinician can check the result and take responsibility for the decision **[1]**; training data may be biased, so results may be less reliable for some groups **[1]**. **[2]**

**10.** Running on a computer is not the test **[1]**. A system is considered AI if it solves a complex problem using a method similar to a human's or reaches a solution at least as good as a human's **[1]**. A strong chess program does meet this (a historically hard problem solved at least as well as a human), but it is a narrow AI, as it works only in one field **[1]**. **[3]**

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.16.1 Applications of artificial intelligence.
