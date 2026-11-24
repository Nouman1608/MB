---
title: "OxfordAQA A-Level Computer Science (9645): Applications of artificial intelligence"
seoTitle: "OxfordAQA 9645 Applications of AI Study Guide"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.16.1 in depth: characteristics of AI, narrow and general AI, generative AI, recommendation systems, game playing and medical diagnosis."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.16.1 Applications of artificial intelligence** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.16 Artificial intelligence. It is International A-level content, examined in Unit 4, the written paper. The specification asks you to know the **characteristics of artificial intelligence**, to be aware that current systems are **not generally intelligent but work in narrow fields**, and to be aware of four common application areas: **generative AI, search and recommendation systems, playing strategic games, and medical diagnosis**.

The topic-level [artificial intelligence study guide](/resources/oxfordaqa-a-level-computer-science-artificial-intelligence/) covers all of topic 3.16 in one pass. This page gives applications their own space, with small worked calculations that show how each kind of system works and how its performance can be judged. Afterwards use the [applications of AI revision notes](/resources/oxfordaqa-a-level-computer-science-9645-applications-of-artificial-intelligence-revision-notes/) and the [applications of AI practice questions](/resources/oxfordaqa-a-level-computer-science-9645-applications-of-artificial-intelligence-practice/). The next two sub-topics explain [how AI systems are created](/resources/oxfordaqa-a-level-computer-science-9645-creating-artificially-intelligent-systems/) and the [benefits and risks](/resources/oxfordaqa-a-level-computer-science-9645-benefits-risks-of-artificial-intelligence/).

## What counts as artificial intelligence?

There is **no one accepted definition** of artificial intelligence. In practice, a system is often described as artificially intelligent if it solves a **complex problem** and reaches a solution in one of two ways:

- **using a similar method to the one a human might follow**, or
- by arriving at a solution that is **at least as good as a human might reach**.

The problems that AI systems tackle are typically ones that **historically could not be solved by computers**. They were believed to need human intelligence, and they could not be solved algorithmically with the hardware then available. Recognising a face, translating a sentence or playing a strategic game well are examples. As soon as a problem becomes routine, people often stop calling the solution AI, which is one reason the definition shifts.

### Narrow AI and general AI

Current AI systems are **not generally intelligent**. Each works in a **narrow field**: a system that plays chess to a very high level cannot also diagnose a disease or write a poem. A **generally intelligent** system, able to learn and reason across any field as a human can, is an **area of research**; none exists. Some people argue that modern deep learning systems are early versions of generally intelligent systems, while others disagree. You should be able to state that current systems are narrow, and that general intelligence remains a research aim.

## Generative AI

**Generative AI** systems create new content, such as text, images, audio or code, in response to a prompt. They are trained on very large collections of existing examples and learn patterns, then produce new output that follows those patterns.

**Worked example 1: a tiny language model.** Suppose a system is trained on the sentence "the cat sat on the mat the cat ate the fish". It counts which word follows each word:

| Word | Words that follow it (counts) |
|---|---|
| the | cat 2, mat 1, fish 1 |
| cat | sat 1, ate 1 |

After "the", the probabilities are cat 2/4 = 50%, mat 25% and fish 25%. To generate text, the system picks a next word using these probabilities and repeats. Real generative systems use neural networks trained on vast data, so they capture much longer patterns, but the principle is the same: predict what is likely to come next. Because the output follows patterns rather than checked facts, it can be fluent yet wrong.

## Search and recommendation systems

**Search systems** find and rank the pages or documents most relevant to a query. **Recommendation systems** suggest items, such as films or products, that a user is likely to like, using data about the user and about other users.

**Worked example 2: a simple recommendation.** Four people rate items A, B, C and D out of 5. A missing score means the person has not rated that item.

| Person | A | B | C | D |
|---|---|---|---|---|
| Asha | 5 | 4 | 1 | |
| Ben | 4 | 5 | 2 | 5 |
| Cy | 1 | 2 | 5 | 1 |
| Dee | 5 | 5 | | |

To recommend an item to Dee, find people whose ratings are most similar on the items they have both rated. The average difference between Dee's ratings and Ben's on A and B is (|5 − 4| + |5 − 5|) / 2 = **0.5**; against Cy it is (|5 − 1| + |5 − 2|) / 2 = **3.5**. Ben is far more similar to Dee, so the system suggests an item Ben rated highly that Dee has not seen: Item D (Ben rated it 5). This is how services recommend things from the behaviour of similar users.

## Playing strategic games

Games have fixed rules and a clear goal, which suits computers, but the number of possible sequences of moves can be vast.

**Worked example 3: tic-tac-toe.** Counting every possible complete game of noughts and crosses (stopping a game when someone wins or the board is full) gives **255,168** different games, and the board can reach **5,478** different positions. A computer can search all of these, so it can play perfectly. For chess the number of possible games is so large that it cannot be searched in full, so a chess program must use rules of thumb (heuristics) and, in modern systems, a neural network trained by playing a very large number of games, to judge which positions are good. Reaching and passing the best human players at such games is a well-known sign of progress in AI.

## Medical diagnosis

AI systems can be trained on large numbers of medical images or records to help identify diseases, for example by flagging a scan that may contain a tumour. They are used to **support** clinicians, who make the final decision.

**Worked example 4: judging a diagnostic system.** A screening tool is tested on 1,000 patients, of whom 50 have the disease and 950 do not. It correctly flags 45 of the 50 patients (true positives), misses 5, and wrongly flags 20 of the 950 healthy patients (false positives), so 930 healthy patients are correctly cleared.

| Measure | Calculation | Result |
|---|---|---|
| Overall accuracy | (45 + 930) / 1,000 | 97.5% |
| Share of ill patients found | 45 / 50 | 90% |
| Share of flagged patients who are ill | 45 / 65 | about 69% |

Accuracy alone can mislead. A useless system that said "healthy" to everyone would score 950 / 1,000 = 95%, yet find no ill patients. The 5 missed cases and 20 false alarms both matter: a miss delays treatment, and a false alarm causes worry and unnecessary tests.

## Search systems in more detail

A search system has to decide which of millions of pages best matches a short query. A very simple scoring rule might give 2 points for each query word found in a page's title and 1 point for each time a query word appears in the body. For the query "solar panel cost", suppose three pages score as follows.

| Page | Query words in title | Query words in body | Score (2 × title + 1 × body) |
|---|---|---|---|
| Page 1 | 2 | 3 | 7 |
| Page 2 | 1 | 6 | 8 |
| Page 3 | 0 | 9 | 9 |

Page 3 would be ranked first, even though a person might judge Page 1 the most useful. This is the weakness of a fixed rule. An AI search system instead **learns what counts as relevant** from large amounts of data, such as which results people choose, and combines many signals, so the ranking is adjusted by experience rather than by one formula written by a programmer.

## Evaluating an application

For any application you may be asked to judge how well it works. A balanced answer covers four points.

| Point | Question to ask | Example |
|---|---|---|
| Quality of results | How often is it right, and what kinds of mistake does it make? | A diagnosis tool that misses 5 of 50 ill patients |
| Data | What was it trained on, and does that match the people it is used on? | A recommendation system trained mostly on one age group |
| Scope | Is it working inside the narrow field it was built for? | A chess program asked to give medical advice |
| Oversight | Does a person check important decisions? | A clinician confirming a flagged scan |

## Linking applications to characteristics

When you describe an application, show that it matches the characteristics: it solves a complex problem; it uses a method like a human's or gets a result at least as good; it works in a narrow field; and it relies on data, usually a very large amount.

## Exam technique

- **Define AI cautiously**: there is no single accepted definition, so use the two descriptions above.
- **Narrow versus general:** state that today's systems are narrow, and that general intelligence is a research area.
- **Applications:** name the application, say what it does, and say what data or method it uses.
- **Evaluate:** mention a limitation, such as errors, bias in data or the need for human oversight.

## Common mistakes

- Saying that current AI is generally intelligent.
- Claiming that AI systems "understand" in the way people do.
- Listing an application without saying what the AI does in it.
- Treating a high accuracy figure as proof that the system is safe.

## More on this topic

- [Applications of AI revision notes](/resources/oxfordaqa-a-level-computer-science-9645-applications-of-artificial-intelligence-revision-notes/)
- [Applications of AI practice questions](/resources/oxfordaqa-a-level-computer-science-9645-applications-of-artificial-intelligence-practice/)
- [Creating artificially intelligent systems study guide](/resources/oxfordaqa-a-level-computer-science-9645-creating-artificially-intelligent-systems/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.16.1 Applications of artificial intelligence.
