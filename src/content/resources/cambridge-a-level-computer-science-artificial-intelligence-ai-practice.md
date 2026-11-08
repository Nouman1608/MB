---
title: "Cambridge A Level Computer Science (9618): Artificial Intelligence (AI) -- Practice Questions"
seoTitle: "Cambridge 9618 Artificial Intelligence Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 18: Artificial Intelligence (AI)"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "A"
order: 18
syllabusTopics:
  - qualification: "a-level"
    topic: "artificial-intelligence-ai"
  - qualification: "a-level"
    topic: "artificial-intelligence-ai"
    subtopic: "artificial-intelligence-sub"
description: "Paper 3-style questions with answers on Dijkstra and A* traces, neural networks, machine learning types, back-propagation and regression for Cambridge 9618."
author: "marlbridge-academic-team"
publishedDate: 2026-11-08
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Artificial Intelligence revision notes](/resources/cambridge-a-level-computer-science-artificial-intelligence-ai-revision-notes/) · [Artificial Intelligence study guide](/resources/cambridge-a-level-computer-science-artificial-intelligence-ai-study-guide/)

These questions cover Topic 18 Artificial Intelligence (AI) of Cambridge International AS & A Level Computer Science 9618, A Level content assessed in Paper 3. As in the syllabus, you trace Dijkstra's algorithm and A* on a given graph but do not write code for them. Answers are in mark-scheme style.

---

## Questions

**1.** **(a)** Describe the structure of a graph. **[2]**
**(b)** Explain how a graph can be used to help an AI system plan delivery routes. **[2]**

**2.** A weighted, undirected graph has these edges:

P–Q 5, P–R 2, R–Q 1, Q–S 4, R–S 7, R–U 9, S–U 2, S–V 6, U–V 1

**(a)** Use Dijkstra's algorithm to find the shortest distance from P to every other node. Show the order in which nodes are fixed and every update. **[5]**
**(b)** State the shortest route from P to V. **[1]**

**3.** In an A* search, three nodes are open:

| Node | Cost from start (g) | Heuristic to goal (h) |
|---|---|---|
| X | 7 | 6 |
| Y | 4 | 10 |
| Z | 9 | 3 |

**(a)** Calculate f for each node and state which node A* expands next. **[2]**
**(b)** Explain why A* usually expands fewer nodes than Dijkstra's algorithm. **[2]**
**(c)** State the condition the heuristic must meet for A* to be guaranteed to find the shortest path. **[1]**

**4.** Explain how artificial neural networks have helped with machine learning. **[3]**

**5.** For **each** application, identify the most suitable type of machine learning (supervised, unsupervised or reinforcement) and justify your choice.

**(a)** A bank wants to group its customers by spending behaviour, with no groups decided in advance. **[2]**
**(b)** A hospital has 50 000 X-rays, each labelled by a doctor as "fracture" or "no fracture", and wants to classify new X-rays. **[2]**
**(c)** A robot must learn to walk across uneven ground. **[2]**

**6.** Describe what is meant by deep learning and give **two** reasons for using it. **[3]**

**7.** Describe how back-propagation of errors is used to train a neural network. **[4]**

**8.** A company uses regression to predict delivery time from distance.

**(a)** Explain what is meant by regression in machine learning. **[2]**
**(b)** The model found is time = 0.5 × distance + 12 (minutes, distance in km). Predict the delivery time for 30 km. **[1]**
**(c)** State the difference between regression and classification. **[1]**

---

## Answers

**1. (a)** A graph is a set of nodes / vertices [1] joined by edges, which may have weights (such as distance or cost) and may be directed [1].
**(b)** Each delivery location is a node and each road is an edge weighted with its distance or travel time [1]. The AI searches the graph (e.g. with A* or Dijkstra) to find the shortest / quickest route between locations [1].

**2. (a)**

| Order fixed | Node (distance) | Updates |
|---|---|---|
| 1 | P (0) | Q = 5, R = 2 |
| 2 | R (2) | Q = 2 + 1 = 3 (better than 5); S = 9; U = 11 |
| 3 | Q (3) | S = 3 + 4 = 7 (better than 9) |
| 4 | S (7) | U = 7 + 2 = 9 (better than 11); V = 13 |
| 5 | U (9) | V = 9 + 1 = 10 (better than 13) |
| 6 | V (10) | Done |

Marks: P fixed first and initial distances [1]; R next with Q updated to 3 [1]; Q then S with S updated to 7 [1]; U updated to 9 and V to 13 then 10 [1]; final distances Q 3, R 2, S 7, U 9, V 10 [1].

**(b)** P → R → Q → S → U → V (distance 10) [1].

**3. (a)** f(X) = 13, f(Y) = 14, f(Z) = 12 [1]; A* expands **Z**, which has the lowest f [1].
**(b)** A* adds a heuristic estimate of the remaining distance to the cost so far [1], so it gives priority to nodes that appear to lead towards the goal and does not explore nodes leading away from it, whereas Dijkstra expands nodes in every direction in order of distance from the start [1].
**(c)** The heuristic must never overestimate the true remaining cost (it must be admissible) [1].

**4.** Any three: neural networks model connected layers of nodes (input, hidden, output) with weighted connections [1]; they learn by adjusting the weights from training examples rather than by being given rules [1]; this lets machines learn complex, non-linear patterns that are hard to program, such as recognising images or speech [1]; with many hidden layers (deep learning) they can learn features automatically from large data sets [1]; their accuracy improves as more data is used for training [1].

**5. (a)** Unsupervised [1]: the data is not labelled and the bank wants the system to find the groups (clusters) itself [1].
**(b)** Supervised [1]: each X-ray has a correct label, so the system can learn by comparing its predictions with the labels, then classify new X-rays [1].
**(c)** Reinforcement [1]: there is no labelled data; the robot learns by trial and error, receiving rewards for progress (and penalties for falling), and learns the actions that maximise reward [1].

**6.** Deep learning uses artificial neural networks with many hidden layers [1]. Reasons (any two): it learns features automatically, without people having to define them [1]; it gives high accuracy on complex, unstructured data such as images, sound and natural language [1]; its performance keeps improving with larger amounts of data [1].

**7.** Training data is input and passed forward through the network to give an output [1]. The output is compared with the expected (target) output to calculate the error [1]. The error is propagated backwards from the output layer through the hidden layers [1]. Each weight is adjusted according to its contribution to the error, and the process is repeated over many examples until the error is acceptably small [1].

**8. (a)** A method that finds the relationship between input variables and a continuous numerical output (e.g. a line of best fit) [1], so the model can predict a numerical value for new inputs [1].
**(b)** 0.5 × 30 + 12 = **27 minutes** [1].
**(c)** Regression predicts a numerical (continuous) value; classification predicts which category / class an item belongs to [1].

---

## Where marks are usually lost

- In Dijkstra, fixing the neighbour joined by the cheapest edge instead of the unvisited node with the smallest total distance.
- Giving the distance but not the route, or the route but not the distance, when both are asked for.
- Choosing the A* node with the lowest h or lowest g alone.
- Describing back-propagation as sending the inputs back through the network.
- Justifying a learning type without mentioning whether the data is labelled.

## Frequently asked questions

**How should I set out a Dijkstra trace?**
Use a table with one row per node fixed, recording each update and keeping the old values visible. Examiners award marks for intermediate updates as well as for the final answer.

**Is A* always faster than Dijkstra?** It usually expands fewer nodes when the heuristic is good. With a heuristic of 0 for every node it behaves exactly like Dijkstra.

**Can a neural network use regression?**
Yes. A network whose output is a number (such as a price) is doing regression; one whose output is a class is doing classification.

## Official syllabus

Questions are written against Cambridge International AS & A Level Computer Science 9618, syllabus for 2026 and syllabus for 2027, 2028 and 2029, Topic 18 Artificial Intelligence. Examiner comments by series are on the [9618 past papers page](/resources/cambridge-a-level-computer-science-9618-past-papers/).
