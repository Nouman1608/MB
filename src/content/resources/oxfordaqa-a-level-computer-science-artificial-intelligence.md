---
title: "OxfordAQA A-Level Computer Science: Artificial intelligence (9645)"
seoTitle: "OxfordAQA A-Level CS 9645 Artificial Intelligence Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Artificial intelligence"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 16
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "artificial-intelligence-9645"
description: "Study guide to AI uses, neural networks, deep and machine learning, biased training data, and AI benefits and risks for OxfordAQA A-level Computer Science."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This study guide teaches section **3.16 Artificial intelligence** of the OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1 (International AS exams May/June 2025 onwards, International A-level exams May/June 2026 onwards). It covers subsections 3.16.1 to 3.16.3, all **International A-level only**. The section belongs to Unit 4 (Advanced concepts and principles of computer science), which the specification assesses by written exam.

Related pages: [OxfordAQA A-level Computer Science hub](/boards/oxfordaqa/a-level/computer-science/) · [printable checklist](/checklists/oxfordaqa/a-level/computer-science/) · [AI revision notes](/resources/oxfordaqa-a-level-computer-science-artificial-intelligence-revision-notes/) · [AI practice set](/resources/oxfordaqa-a-level-computer-science-artificial-intelligence-practice/) · [9645 exam preparation](/resources/oxfordaqa-a-level-computer-science-exam-preparation/) · [free 10-minute diagnostics](/diagnostics/)

## Outcomes in this section

All rows below are International A-level only.

| Spec ref | Expected of you |
|---|---|
| 3.16.1 | Know the characteristics of AI; be aware that current AI is narrow, not generally intelligent; be aware of four application areas (generative AI, search and recommendation, strategic games, medical diagnosis) |
| 3.16.2 | Know what a neural network is and how it can be used; describe its layered structure; know that backpropagation is commonly used to train it; know what deep learning and machine learning are; know that biased training data leads to biased systems |
| 3.16.3 | Understand the benefits and the risks of using AI |

**Notation.** The specification sets no pseudo-code conventions for this section, so the one short pseudo-code fragment below is language-neutral.

## 3.16.1 Applications of artificial intelligence

### Characteristics of AI

There is **no single accepted definition** of artificial intelligence. Say this if a question asks you to define it, then give the characteristics the specification describes. A system is often called artificially intelligent if it solves a complex problem and reaches a solution:

- by a **method similar to the one a human might follow**, or
- that is **at least as good as a human** would reach.

The problems AI tackles are typically ones that computers historically **could not solve**. People believed they needed human intelligence, and they could not be solved algorithmically on the hardware available. Recognising a face in a crowd is a good example: nobody can write down a complete set of rules for it.

### Narrow, not general

Current AI systems work in **narrow fields**. A system that reads road signs cannot also write a poem or plan a train timetable. A **generally intelligent** system, one that could learn and reason across any field as a person can, is still an **area of research**. Some people argue that modern deep learning systems are early versions of generally intelligent systems. Treat this as a disputed view, not a fact.

### Four application areas

| Area | What the AI does | Example of the idea |
|---|---|---|
| Generative AI | Produces new content (text, images, audio, program code) from patterns learned in its training data | Drafting a product description from a few keywords |
| Search and recommendation | Ranks search results or suggests items a user is likely to want, using past behaviour of that user and of similar users | Suggesting the next book to borrow |
| Playing strategic games | Chooses moves by searching possible future positions and judging which are likely to win | Chess, Go |
| Medical diagnosis | Analyses scans, test results or symptoms and suggests likely conditions for a clinician to check | Flagging a possible fracture on an X-ray |

Two landmark game results show how far this has come. In May 1997 IBM's Deep Blue beat the reigning world chess champion, Garry Kasparov, 3½–2½ in a six-game match under standard tournament time controls. In March 2016 DeepMind's AlphaGo beat Lee Sedol 4–1 at Go, using neural networks combined with tree search.

### Worked example: a recommendation from borrowing data

The fictional e-library Pagewick records which titles each reader has borrowed. Ardent has just been borrowed by a new reader. Which title should Pagewick suggest next?

| Reader | Titles borrowed |
|---|---|
| R1 | Ardent, Bellwether, Cindermoor |
| R2 | Ardent, Cindermoor |
| R3 | Ardent, Driftmark, Cindermoor |
| R4 | Bellwether, Driftmark |
| R5 | Ardent, Bellwether, Emberly |

Step 1: keep only readers who borrowed Ardent: R1, R2, R3, R5.
Step 2: count how often each other title appears among them: Cindermoor 3, Bellwether 2, Driftmark 1, Emberly 1.
Step 3: recommend the highest count: **Cindermoor**.

Real systems use millions of readers and many more signals, but the principle is the same: people who behaved like you in the past are used to predict what you will want.

## 3.16.2 Creating artificially intelligent systems

### What a neural network is

A **neural network** is a network of **nodes** connected together in a way similar to **neurons in the human brain**. Each connection carries a **weight**. The outputs of the nodes in one layer are **weighted** to form the inputs to the nodes in the next layer. Neural networks are used where rules are hard to write by hand: classifying images, recognising speech, predicting values from many inputs.

### Structure

The nodes are built up in **layers**. A simple neural network has three layers:

- an **input layer**, which receives the data (one node per input value)
- a **hidden processing layer**, which combines the weighted inputs
- an **output layer**, which gives the result (for example, a yes/no decision or a score for each class).

Typically every node in one layer connects to every node in the next. A network with 2 input nodes, 2 hidden nodes and 1 output node has 2 × 2 + 2 × 1 = **6** weights.

### Worked example: one pass through a small network

A greenhouse controller decides whether to open a vent. Input 1 is a scaled temperature reading and input 2 a scaled humidity reading, both between 0 and 1. The specification does not name any rule for what a node does with its weighted sum, so this example uses a simple one: **a node outputs 1 if its weighted sum is at least 0.5, otherwise 0**.

| Connection | Weight |
|---|---|
| Input 1 → H1, Input 2 → H1 | 0.5, 0.7 |
| Input 1 → H2, Input 2 → H2 | −0.6, 0.9 |
| H1 → Output, H2 → Output | 1.2, −0.8 |

Readings: input 1 = 0.8, input 2 = 0.4.

```
H1 sum = 0.8 × 0.5 + 0.4 × 0.7    = 0.40 + 0.28  = 0.68   → 0.68 ≥ 0.5, H1 outputs 1
H2 sum = 0.8 × (−0.6) + 0.4 × 0.9 = −0.48 + 0.36 = −0.12  → below 0.5, H2 outputs 0
Output sum = 1 × 1.2 + 0 × (−0.8) = 1.2                    → 1.2 ≥ 0.5, output 1: open the vent
```

With readings 0.3 and 0.9 (cool but humid), H1 sum = 0.78 and H2 sum = 0.63, so both output 1. The output sum is 1.2 − 0.8 = 0.4, below 0.5, so the vent stays shut. The weights decide the behaviour, so choosing good weights is the whole problem. That is what training does.

The same calculation for one node, in language-neutral pseudo-code:

```
total ← 0
FOR i ← 1 TO numberOfInputs
    total ← total + input[i] * weight[i]
ENDFOR
IF total >= threshold THEN output ← 1 ELSE output ← 0 ENDIF
```

### Training with backpropagation

**Backpropagation** is commonly used to train a neural network. In outline:

1. Start with weights (often random).
2. Feed in a training example whose correct answer is known and work forward to get an output.
3. Compare the output with the correct answer to find the **error**.
4. Pass the error **backwards** through the network, from the output layer towards the input layer, adjusting each weight a little in the direction that would have reduced the error.
5. Repeat for many examples, many times, until the errors are acceptably small.

You need to know that backpropagation is used and what it achieves. The specification does not ask for its mathematics.

### Deep learning

**Deep learning** systems use neural networks with **several hidden layers**. Each extra layer can build on the patterns found by the layer before (in an image: edges, then shapes, then whole objects). Using more layers allows **more complex problems** to be solved, at the cost of needing more training data and more processing.

### Machine learning

**Machine learning** is a type of AI in which the **performance of the system improves based on experience**. The program is not rewritten by hand; it improves as it processes more data.

**Worked example.** The fictional Haverly Water predicts daily demand in megalitres. Here are its predictions for the same four days after training on 3 weeks of data, and after training on 2 years of data.

| Day | Actual | Early prediction | Error | Later prediction | Error |
|---|---|---|---|---|---|
| Mon | 62 | 55 | 7 | 60 | 2 |
| Tue | 58 | 64 | 6 | 59 | 1 |
| Wed | 71 | 60 | 11 | 69 | 2 |
| Thu | 66 | 73 | 7 | 67 | 1 |

Mean error early = (7 + 6 + 11 + 7) ÷ 4 = **7.75 megalitres**. Mean error later = (2 + 1 + 2 + 1) ÷ 4 = **1.5 megalitres**. Same program, more experience, better performance: that is machine learning.

### Training data and bias

AI systems are often **trained using data**. Care must be taken when selecting the training data so that the system does not develop **bias**. A system can only learn the patterns present in its data. If a group is under-represented, or if past decisions in the data were unfair, the system reproduces that.

**Worked example.** A council helpline uses speech-to-text software trained on 10,000 recordings: 9,100 from speakers with accent group A and 900 from accent group B. That is 91% and 9%. Tested on 2,000 words from each group, it transcribes 1,880 correctly for group A (**94%**) but only 1,530 for group B (**76.5%**). Callers in group B are misunderstood more often. The fix is in the data: collect a training set that represents every group of caller, then re-test each group separately.

## 3.16.3 Benefits and risks of artificial intelligence

### Benefits

- **Improved and more consistent decisions**: for example, more accurate analysis of medical data. An AI does not get tired at the end of a shift.
- **Very large data sets analysed quickly**: millions of records in the time a person reads a few.
- **Continuous availability**: it works at 3 a.m. and on public holidays.
- **Lower cost of operation** once built.
- **Wider access**: available to more people, including places where human expertise is not readily available, such as a rural clinic with no specialist.

### Risks

- **Elimination of jobs** and the **social impact** of that, such as unemployment in one sector or region and the need to retrain.
- **Bias in decision making**, which could be based on characteristics such as **gender or race**, usually inherited from the training data.
- **False information** can be output if the data used to train a system is incorrect.
- **Plagiarism**: generative AI can reproduce others' work, and people can submit AI output as their own.
- **Surveillance**: for example, automatic face recognition across a city's cameras.
- **Risk to human existence** from **superintelligent** systems, a long-term concern about systems far more capable than people.

When a question gives a scenario, **apply** each benefit or risk to it. "It is faster" earns less than "it can check every overnight X-ray before the morning ward round".

## Common errors

- Giving one fixed definition of AI instead of saying there is none and describing the characteristics.
- Calling today's systems generally intelligent.
- Describing a neural network as "like a brain" with no mention of nodes, layers and weighted connections.
- Saying backpropagation runs data forwards; it passes the **error** backwards to adjust weights.
- Defining deep learning as "a lot of training data" rather than several hidden layers.
- Writing "bias" without explaining how the training data caused it.
- Listing benefits and risks without linking them to the scenario.

## Where next

For the short version, use the [revision notes](/resources/oxfordaqa-a-level-computer-science-artificial-intelligence-revision-notes/); to check your answers under pressure, use the [practice set](/resources/oxfordaqa-a-level-computer-science-artificial-intelligence-practice/). Heuristics and intractable problems, which matter in game playing, are in the [theory of computation guide](/resources/oxfordaqa-a-level-computer-science-theory-of-computation/). To spot weak areas across the course, take a [free 10-minute diagnostic](/diagnostics/).

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA. Section 3.16 Artificial intelligence.
