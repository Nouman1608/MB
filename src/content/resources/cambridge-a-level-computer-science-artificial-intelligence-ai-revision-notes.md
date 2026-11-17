---
title: "Cambridge A Level Computer Science (9618): Artificial Intelligence (AI) -- Revision Notes"
seoTitle: "Cambridge 9618 Artificial Intelligence Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes on graphs in AI, Dijkstra and A*, neural networks, supervised, unsupervised and reinforcement learning, back-propagation and regression for 9618."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: credited to harris-khan (accountable teacher, D-379)."
---

Topic 18 Artificial Intelligence (AI) covers how graphs help AI find routes (using Dijkstra's algorithm and A*), how artificial neural networks support machine learning, the categories of machine learning (supervised, unsupervised, reinforcement and deep learning) and why each is used, and back-propagation and regression. In Cambridge International AS & A Level Computer Science 9618 it is examined in Paper 3, where you trace searches on a given graph but are not asked to write the algorithms.

Related: [Artificial Intelligence study guide](/resources/cambridge-a-level-computer-science-artificial-intelligence-ai-study-guide/) · [AI practice questions](/resources/cambridge-a-level-computer-science-artificial-intelligence-ai-practice/) · [Computer Science course hub](/boards/cambridge/a-level/computer-science/)

## Syllabus coverage

| Section | Candidates should be able to |
|---|---|
| 18.1 | Show understanding of how graphs can be used to aid AI: the purpose and structure of a graph; use A* and Dijkstra's algorithms to perform searches on a graph (writing the algorithms is not required) |
| 18.1 | Show understanding of how artificial neural networks have helped with machine learning |
| 18.1 | Show understanding of deep learning, machine learning and reinforcement learning and the reasons for using them, including the categories supervised and unsupervised learning |
| 18.1 | Show understanding of back propagation of errors and regression methods in machine learning |

The social, economic and environmental impact of AI is AS content in Topic 7.

## Key definitions

| Term | Definition |
|---|---|
| Graph | A set of nodes (vertices) joined by edges; edges may be weighted and/or directed |
| Heuristic | An estimate of the cost from a node to the goal, used by A* |
| Machine learning | A system improves its performance at a task by learning from data, rather than following fixed rules for every case |
| Supervised learning | Learning from labelled data (inputs with the correct outputs) to predict outputs for new inputs |
| Unsupervised learning | Finding patterns or groups in unlabelled data |
| Reinforcement learning | An agent learns by trial and error which actions in an environment earn the most reward |
| Deep learning | Machine learning using neural networks with many hidden layers |
| Back-propagation | Passing the output error backwards through a neural network to adjust the weights |
| Regression | A method that predicts a continuous numerical value from input variables |

## Why do graphs help AI?

A graph is an abstraction of a real problem: places as nodes and routes as edges, with weights for distance, time or cost. AI uses graphs to model maps (satnav, delivery routes), game worlds and robot paths, social and computer networks, and states of a problem, then searches the graph for the best route or solution.

## Dijkstra versus A*

| | Dijkstra | A* |
|---|---|---|
| Chooses next | Unvisited node with the smallest distance from the start (g) | Open node with the smallest f = g + h |
| Uses a heuristic? | No | Yes: h estimates the cost to the goal |
| Finds | Shortest path from the start to every node | Shortest path to one goal (if h never overestimates) |
| Efficiency | Explores in every direction | Heads towards the goal, usually expanding fewer nodes |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-a-level-computer-science-artificial-intelligence-ai-study-guide--02-ai-dijkstra-table.webp" width="900" height="924" alt="A step table for Dijkstra. Start: A 0, others infinity. Step 1 A gives B 4, C 2; step 2 C gives B 3, D 10, E 12; step 3 B gives D 8; step 4 D gives E 10, F 14; step 5 E gives F 13; step 6 F. Final values are dark; B improved from 4 to 3." loading="lazy">
  <figcaption>Each row of the distance table is one step; B improves from 4 to 3 at step 2.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-a-level-computer-science-artificial-intelligence-ai-study-guide--03-ai-astar-f-score.webp" width="900" height="830" alt="A path from Start to a node (g, cost so far) and on to the Goal (h, estimate). Two bars: first node g 5 + h 3 = f 8, second g 2 + h 7 = f 9. A* expands the lower f, the first node." loading="lazy">
  <figcaption>A* expands the node with the lowest f = g + h.</figcaption>
</figure>

## Worked example: Dijkstra and A* on the same graph

Edges: S–A 3, S–B 6, S–E 4, A–B 2, A–C 7, B–C 3, B–D 8, C–D 2, C–T 9, D–T 4, E–T 20. Find the shortest route from S to T.

**Dijkstra**

| Step | Node fixed (distance) | Updates |
|---|---|---|
| 1 | S (0) | A = 3, B = 6, E = 4 |
| 2 | A (3) | B = 3 + 2 = 5 (better than 6); C = 10 |
| 3 | E (4) | T = 4 + 20 = 24 |
| 4 | B (5) | C = 5 + 3 = 8; D = 13 |
| 5 | C (8) | D = 8 + 2 = 10; T = 17 |
| 6 | D (10) | T = 10 + 4 = 14 |
| 7 | T (14) | Done |

Route (follow predecessors back): S → A → B → C → D → T, cost 14.

**A*** with heuristic h: S 10, A 9, B 7, C 5, D 4, E 15, T 0.

| Expand | Open nodes after expanding (f = g + h) |
|---|---|
| S | A 3 + 9 = 12, B 6 + 7 = 13, E 4 + 15 = 19 |
| A (12) | B 5 + 7 = 12, C 10 + 5 = 15, E 19 |
| B (12) | C 8 + 5 = 13, D 13 + 4 = 17, E 19 |
| C (13) | D 10 + 4 = 14, T 17 + 0 = 17, E 19 |
| D (14) | T 14 + 0 = 14, E 19 |
| T (14) | Goal reached |

Same route and cost, but A* never expands E, because its high heuristic shows it leads away from the goal. Dijkstra expanded E at step 3.

## How have neural networks helped machine learning?

An **artificial neural network** has an **input layer**, one or more **hidden layers** and an **output layer** of nodes. Each connection has a **weight**; each node sums its weighted inputs and applies an activation function. The network learns by **adjusting the weights** from examples, so it can learn patterns that are too complex to program as rules, such as recognising faces, speech or handwriting. With many hidden layers (deep learning), each layer learns more abstract features: edges, then shapes, then objects.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-a-level-computer-science-artificial-intelligence-ai-study-guide--05-ai-neuron.webp" width="900" height="830" alt="A neuron with inputs 0.5 and 0.8, weights 0.4 and minus 0.2 and bias 0.1 gives a sum of 0.14; a step activation outputs 1." loading="lazy">
  <figcaption>A neuron multiplies inputs by weights, adds the bias and applies an activation function.</figcaption>
</figure>

## Types of machine learning and when to use them

| Type | Data | How it learns | Reason to use / example |
|---|---|---|---|
| Supervised | Labelled | Compares its prediction with the known answer and adjusts | When correct answers are available: spam filtering, diagnosing from labelled scans, predicting prices |
| Unsupervised | Unlabelled | Finds clusters, patterns or associations itself | When no labels exist or patterns are unknown: customer segmentation, detecting unusual transactions |
| Reinforcement | No fixed data set; feedback from an environment | Agent tries actions, receives rewards or penalties, and learns a policy that maximises total reward | When the best action must be discovered by interaction: game playing, robot movement, self-driving control |
| Deep learning | Very large data sets, often unstructured (images, sound, text) | Neural network with many hidden layers learns features automatically | When the features are too complex to define by hand: image and speech recognition, translation |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-a-level-computer-science-artificial-intelligence-ai-study-guide--04-ai-learning-types.webp" width="900" height="1110" alt="Three panels: supervised learning trains on labelled emails and labels a new email; unsupervised learning groups unlabelled points into clusters; reinforcement learning has an agent send actions to an environment and receive rewards or penalties." loading="lazy">
  <figcaption>The type of machine learning depends on the data and feedback available.</figcaption>
</figure>

## Back-propagation in five steps

1. Input a training example and pass it **forward** through the network to get an output.
2. Compare the output with the expected output to find the **error**.
3. Pass the error **backwards** from the output layer through the hidden layers.
4. Adjust each weight in proportion to how much it contributed to the error, so the error will be smaller next time.
5. Repeat for many examples (and many passes) until the error is acceptably small.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-a-level-computer-science-artificial-intelligence-ai-study-guide--06-ai-backpropagation.webp" width="900" height="970" alt="A network with input, hidden and output layers joined by weighted connections. A forward arrow runs from inputs to output; the error is compared with the expected output and passed backwards to adjust the weights, repeated over many examples." loading="lazy">
  <figcaption>Back-propagation passes the output error backwards to adjust the weights.</figcaption>
</figure>

## Regression

Regression finds the relationship between input variables and a **numerical** output, for example a straight line of best fit y = mx + c that minimises the error between predicted and actual values. Once found, it predicts outputs for new inputs.

**Example**: training data (1, 3), (2, 5), (3, 7) fit y = 2x + 1 exactly; for x = 5 the prediction is 11. Classification predicts a category (spam or not); regression predicts a quantity (a price, a temperature).

## Common mistakes and exam traps

- Choosing the neighbour with the cheapest single edge in Dijkstra, instead of the unvisited node with the smallest total distance.
- Using h alone in A*; the node chosen has the lowest g + h.
- Forgetting to give the final route as well as the cost.
- Swapping supervised (labelled) and unsupervised (unlabelled) learning.
- Saying back-propagation sends the inputs backwards; it sends the error back to adjust the weights.
- Describing reinforcement learning as learning from labelled examples; it learns from rewards.

## Frequently asked questions

**Will I have to write Dijkstra's or A* code?** No. The 9618 syllabus says candidates will not be required to write algorithms to set up, access or search graphs. You must trace them on a graph given in the question.

**Why must an A* heuristic not overestimate?** If it overestimates, A* may ignore the node on the true shortest path because its f value looks too high, and return a longer route.

**Is deep learning a separate type from supervised learning?**
Deep learning describes the kind of model (a network with many layers). It can be trained by supervised, unsupervised or reinforcement learning.

## Official syllabus

Cambridge International AS & A Level Computer Science 9618, syllabus for 2026 and syllabus for 2027, 2028 and 2029, Topic 18 Artificial Intelligence (18.1). Examiner points are summarised on our [9618 past papers page](/resources/cambridge-a-level-computer-science-9618-past-papers/).
