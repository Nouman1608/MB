---
title: "OxfordAQA A-Level Computer Science (9645): Applications of artificial intelligence -- Revision Notes"
seoTitle: "OxfordAQA 9645 Applications of AI Revision Notes"
resourceType: "revision-notes"
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
description: "Recall notes for OxfordAQA 9645 sub-topic 3.16.1: AI characteristics, narrow and general AI, generative AI, recommendation, games and diagnosis, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.16.1 Applications of artificial intelligence** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (International A-level content in topic 3.16, examined in Unit 4). For worked examples, see the [applications of AI study guide](/resources/oxfordaqa-a-level-computer-science-9645-applications-of-artificial-intelligence/), then practise with the [applications of AI practice questions](/resources/oxfordaqa-a-level-computer-science-9645-applications-of-artificial-intelligence-practice/).

## What the specification requires

- Know the **characteristics of artificial intelligence**; there is **no one accepted definition**.
- Be aware that current AI systems are **not generally intelligent** but work in **narrow fields**.
- Be aware of the application areas: **generative AI, search and recommendation systems, playing strategic games, medical diagnosis**.

## Key terms

| Term | Meaning |
|---|---|
| Artificial intelligence | A system that solves a complex problem in a human-like way or at least as well as a human might |
| Narrow AI | A system that works well in one specific field only |
| General AI | A system with human-like ability across any field; an area of research |
| Generative AI | A system that creates new content (text, images, audio, code) from a prompt |
| Recommendation system | Suggests items a user is likely to want, using data on the user and similar users |
| Heuristic | A rule of thumb used to judge options when a full search is impossible |
| False positive | A healthy case wrongly flagged as ill |
| False negative | An ill case wrongly cleared |

## Characteristics of AI

A system is often called AI if it solves a **complex problem** and:

- uses **a similar method to a human**, or
- reaches **a solution at least as good as a human's**.

The problems are typically ones that **could not be solved by computers in the past**, because they were believed to need human intelligence and could not be solved algorithmically with the available hardware.

## Narrow versus general

- All current systems are **narrow**: one field only.
- **General intelligence** is an area of **research**; no such system exists.
- Some argue modern deep learning systems are **early versions** of general AI.

## The four application areas

| Area | What the system does | Example of how |
|---|---|---|
| Generative AI | Creates new content | Predicts the next word, or pixel, from learned patterns |
| Search and recommendation | Ranks results; suggests items | Compares a user with similar users |
| Strategic games | Chooses moves | Searches positions; uses heuristics or a trained network |
| Medical diagnosis | Flags possible disease | Learns from many labelled scans or records |

### Worked reminders

**Next-word model.** From "the cat sat on the mat the cat ate the fish", the word after "the" is cat 2/4 = 50%, mat 25%, fish 25%.

**Recommendation.** Dee rated A 5 and B 5. Average difference from Ben (4, 5) is 0.5; from Cy (1, 2) is 3.5. Ben is the more similar user, so recommend the item Ben rated 5 that Dee has not seen: item D.

**Games.** Tic-tac-toe has 255,168 possible complete games and 5,478 reachable positions, so it can be searched in full. Chess cannot, so programs use heuristics or trained networks.

**Diagnosis.** Tested on 1,000 patients (50 ill, 950 healthy): 45 true positives, 5 false negatives, 20 false positives, 930 true negatives.

| Measure | Calculation | Result |
|---|---|---|
| Overall accuracy | (45 + 930) / 1,000 | 97.5% |
| Ill patients found | 45 / 50 | 90% |
| Flagged patients who are ill | 45 / 65 | about 69% |

Answering "healthy" for everyone would score 95% accuracy and find no ill patients, so accuracy alone can mislead.

## Matching an application to the characteristics

1. Complex problem.
2. Human-like method, or result at least as good.
3. Narrow field.
4. Relies on (usually very large) data.

## Exam traps

- **Definition.** Do not say there is a single agreed definition; say there is not.
- **Narrow, not general.** Never describe current systems as generally intelligent.
- **Name the area and the method.** "Used in medicine" earns less than "learns from labelled scans to flag likely tumours".
- **Accuracy alone** hides missed cases and false alarms.
- **Generative output** follows patterns and may be wrong.
- **Human oversight.** Diagnosis systems support clinicians; they do not replace the final decision.
- **Chess and Go** cannot be searched in full, which is why heuristics or trained networks are used.

## Quick self-test

1. Why is there no single definition of AI?
2. Give the two ways in which a system may be judged artificially intelligent.
3. What is meant by a narrow AI system?
4. Is general AI available today?
5. Name the four application areas in the specification.
6. What does a generative AI system produce?
7. How does a recommendation system decide which users are similar?
8. Why can tic-tac-toe be searched completely but chess cannot?
9. What is a false negative in medical diagnosis?
10. A system flags 65 patients and 45 are ill. What fraction of flagged patients are ill?
11. Why is accuracy alone a poor measure for a rare disease?
12. Who makes the final decision when AI supports diagnosis?

### Answers

1. Because what counts as intelligence is disputed and the standard shifts as technology improves.
2. It uses a human-like method, or it reaches a solution at least as good as a human might.
3. A system that works in one specific field only.
4. No: it is an area of research.
5. Generative AI; search and recommendation systems; playing strategic games; medical diagnosis.
6. New content such as text, images, audio or code.
7. By comparing their past ratings or behaviour.
8. Tic-tac-toe has few possible games (255,168); chess has far too many.
9. An ill patient who is wrongly cleared.
10. 45 / 65, about 69%.
11. A system that says "healthy" to everyone would still score a high accuracy.
12. A clinician.

## Next steps

- [Applications of AI study guide](/resources/oxfordaqa-a-level-computer-science-9645-applications-of-artificial-intelligence/)
- [Applications of AI practice questions](/resources/oxfordaqa-a-level-computer-science-9645-applications-of-artificial-intelligence-practice/)
- [Big data revision notes](/resources/oxfordaqa-a-level-computer-science-9645-big-data-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.16.1 Applications of artificial intelligence.
