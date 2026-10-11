---
title: "Pearson Edexcel International Advanced Level Mathematics: Route inspection and travelling salesman (YMA01) -- Practice Questions"
seoTitle: "Edexcel IAL Maths D1 Route Inspection and TSP Practice"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Route inspection (Chinese postman) and the travelling salesman problem"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 170
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-d1-decision-mathematics-1-edexcel-alevel-maths"
    subtopic: "d1-algorithms-on-graphs-ii-edexcel-alevel-maths"
description: "Original worked practice questions on route inspection, travelling salesman bounds and nearest neighbour for Edexcel International A Level Maths D1."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover Unit D1 (Decision Mathematics 1), section 3, topics 3.1 to 3.4, of the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification (YMA01), Issue 3, April 2019. The specification states that D1 is optional for IAS Mathematics and Further Mathematics and for IAL Mathematics and Further Mathematics. Revise first with the [study guide](/resources/edexcel-ial-mathematics-route-inspection-chinese-postman-and-the-travelling/) or the [revision notes](/resources/edexcel-ial-mathematics-route-inspection-chinese-postman-and-the-travelling-revision-notes/). Course pages: the [Edexcel A Level Mathematics hub](/boards/edexcel/a-level/mathematics/) and the [printable checklist](/checklists/edexcel/a-level/mathematics/). Not sure which topics to start with? Take a [free 10-minute diagnostic](/diagnostics/). Show each step of every algorithm.

## Questions

**1.** A network has six nodes with degrees 3, 4, 2, 3, 5 and 3.

**(a)** State how many nodes are odd. **[1]**
**(b)** Explain why no closed route can use every edge exactly once. **[2]**

**2.** A courier must travel along every road of a ring of streets at least once, starting and finishing at A. The lengths in km are AB 9, BC 4, CD 5, DE 7, EF 6, FA 8 and a bypass BE 20. Find the shortest possible route length, and name the roads that are travelled twice. **[5]**

**3.** A warden must walk every path of a reserve, starting and finishing at P. The path lengths in km are PQ 6, PR 9, QR 17, QS 15, RT 7, ST 5, SU 10 and TU 12. Find the length of the shortest route. **[6]**

**4.** **(a)** Describe the difference between the practical and the classical travelling salesman problems. **[2]**
**(b)** For vertices A, B and C, AB = 15, AC = 9 and CB = 8. Determine whether the triangle inequality holds. **[2]**

**5.** A network has these edges: JK 7, JL 11, KL 5, KM 14, LM 9, LN 12, MN 6. Convert it into a complete network of shortest distances. State the three pairs with no direct edge and find the shortest distance for each. **[4]**

**6.** Questions 6 to 8 use the table below, which gives the shortest distance in km for each pair among towns A to E.

| | A | B | C | D | E |
|---|---|---|---|---|---|
| A | – | 11 | 8 | 17 | 16 |
| B | 11 | – | 5 | 12 | 15 |
| C | 8 | 5 | – | 9 | 10 |
| D | 17 | 12 | 9 | – | 7 |
| E | 16 | 15 | 10 | 7 | – |

Use the nearest neighbour algorithm, starting at B, to find a tour and its length. **[4]**

**7.** Find a minimum spanning tree for the table in question 6. Use it to find an upper bound for the travelling salesman problem, starting at B, by doubling the tree and making short cuts. **[5]**

**8.** Find lower bounds for the travelling salesman problem in question 6 by deleting vertex A and by deleting vertex C. Using your answer to question 6, write down the best interval for the optimal tour length. **[7]**

**9.** In question 2 a new road CF of length x km is built, where 0 < x < 6.

**(a)** State the odd nodes of the new network. **[1]**
**(b)** Show that the shortest inspection route now has length 69 + x km. **[5]**
**(c)** Find the length of the shortest route when x = 3.5, and by how much it is shorter than the route in question 2. **[2]**

**10.** A technician visits five depots A to E, returning to A. The direct distances in km are:

| | A | B | C | D | E |
|---|---|---|---|---|---|
| A | – | 21 | 17 | 25 | 19 |
| B | 21 | – | 14 | 18 | 26 |
| C | 17 | 14 | – | 16 | 22 |
| D | 25 | 18 | 16 | – | 13 |
| E | 19 | 26 | 22 | 13 | – |

**(a)** Use nearest neighbour from A to find an upper bound. **[3]**
**(b)** Delete C to find a lower bound. **[4]**
**(c)** Write down the interval for the optimal tour length. Explain what the whole-number distances tell you. **[2]**

## Answers

**1. (a)** The odd degrees are 3, 3, 5, 3, so **4** nodes are odd [1].
**(b)** Each time a route passes through a node it uses one edge in and one edge out, which is two edges [1]. A node of odd degree has an edge left over, so the route cannot use every edge exactly once and still close. Four nodes are odd, so some edges must be repeated [1]. **[3]**
*Examiner insight:* Tie the explanation to degrees. A statement that "the graph is not Eulerian" repeats the question without reasoning.

**2.** Degrees: B and E are 3, all others 2, so the odd nodes are B and E [1]. Total weight = 9+4+5+7+6+8+20 = 59 [1]. Paths from B to E: BE = 20, B-C-D-E = 4+5+7 = 16, B-A-F-E = 23 [1]. The shortest is 16, so BC, CD and DE are repeated [1]. Length = 59 + 16 = **75 km** [1]. **[5]**
*Examiner insight:* List the competing paths. Taking the bypass BE because it is a direct edge is the common trap on this kind of question.

**3.** Total weight = 6+9+17+15+7+5+10+12 = 81. The degrees are Q, R, S, T = 3 and P, U = 2, so the odd nodes are Q, R, S, T [1]. Pairings:

```
QR + ST = 15 (Q-P-R) + 5 = 20
QS + RT = 15 + 7 = 22
QT + RS = 20 (Q-S-T) + 12 (R-T-S) = 32
```

Three pairings each correct [3]. The least is 20, repeating QP, PR and ST [1]. Length = 81 + 20 = **101 km** [1]. **[6]**
*Examiner insight:* QR is 17 as an edge but 15 through P. Showing the pairing table lets a marker see that you considered all three.

**4. (a)** In the classical problem each vertex is visited exactly once [1]. In the practical problem a vertex may be revisited [1].
**(b)** The longest side is AB = 15 and AC + CB = 17 [1]. Since 15 ≤ 17, the triangle inequality **holds** [1]. **[4]**
*Examiner insight:* Compare the longest side with the sum of the other two, and state the conclusion in words.

**5.** The pairs with no direct edge are J and M, J and N, K and N [1].

```
JM: J-L-M = 11+9 = 20 (J-K-M = 21)           JM = 20
JN: J-L-N = 11+12 = 23 (J-L-M-N = 26)        JN = 23
KN: K-L-N = 5+12 = 17 (K-M-N = 20)           KN = 17
```

Each of the three distances with a supporting route [3]. **[4]**
*Examiner insight:* Give the route as well as the number. Check every route through a third vertex, not only the first one you find.

**6.** From B the nearest town is C (5) [1]. From C the nearest unvisited town is A (8). From A the nearest unvisited is E (16), then D (7) [1]. Return from D to B (12) [1]. Tour B-C-A-E-D-B with length 5+8+16+7+12 = **48** [1]. **[4]**
*Examiner insight:* Record the distance chosen at every step and return to the start. A list of towns with no return leg is incomplete.

**7.** Kruskal: BC 5, DE 7, AC 8, CD 9 are accepted [1]. AB 11 is rejected because A and B are already connected [1]. The MST weight is 29, so the doubled walk has length 58 [1]. The walk is B-C-A-C-D-E-D-C-B. Take short cuts A to D (17) and E to B (15), giving the tour B-C-A-D-E-B [1]. Length = 5+8+17+7+15 = **52**, an upper bound [1]. **[5]**
*Examiner insight:* A short cut is only valid if you quote the direct distance from the table. Say that 52 is an upper bound and that a better one (48) has already been found.

**8.** Delete A: the MST of B, C, D, E is BC 5, DE 7, CD 9 = 21 [1]. The two shortest edges at A are AC 8 and AB 11, so the bound is 21+8+11 = **40** [1]. Delete C: the MST of A, B, D, E is DE 7, AB 11, BD 12 = 30 [1]. The two shortest edges at C are CB 5 and CA 8, so the bound is 30+5+8 = **43** [1]. The better lower bound is the larger, 43 [1]. The best upper bound is 48 from question 6 [1]. So **43 ≤ L ≤ 48** [1]. **[7]**
*Examiner insight:* Say which bound you are using and why. The larger lower bound and the smaller upper bound give the tightest interval.

**9. (a)** C and F gain a degree, so the odd nodes are **B, C, E, F** [1].
**(b)** Total weight = 59 + x [1]. For 0 < x < 6 the shortest paths are BC = 4, EF = 6, BE = 4+x+6 = 10+x (through C and F), CF = x, BF = 4+x, CE = 6+x. The pairings are:

```
BC + EF = 4 + 6 = 10
BE + CF = (10+x) + x = 10 + 2x
BF + CE = (4+x) + (6+x) = 10 + 2x
```

Pairing BC with EF [1], BE with CF [1], BF with CE [1]. For x > 0 the smallest is 10 [1]. Route length = 59 + x + 10 = **69 + x** (shown).
**(c)** For x = 3.5 the length is 69 + 3.5 = **72.5 km** [1]. The route in question 2 was 75 km, so it is **2.5 km** shorter [1]. **[8]**
*Examiner insight:* Work with x throughout. Substituting one value of x cannot prove a result that is stated in terms of x.

**10. (a)** From A the nearest is C (17) [1]. Then B (14), D (18), E (13), and back to A (19) [1]. Length 17+14+18+13+19 = **81** [1]. **[3]**
**(b)** Delete C: the MST of A, B, D, E is DE 13, BD 18, AE 19 = 50 [2]. The two shortest edges at C are CB 14 and CD 16 [1]. Lower bound = 50+14+16 = **80** [1]. **[4]**
**(c)** **80 ≤ L ≤ 81** [1]. Every tour is a sum of whole numbers, so L is a whole number and must be 80 or 81 [1]. **[2]**
*Examiner insight:* State the interval as an inequality for the optimal length, not as two separate numbers. Keep the upper and lower roles clear.

## Where marks are usually lost

- Using a direct edge between odd nodes without checking for a shorter path through other nodes.
- Listing fewer than the three pairings for four odd nodes.
- Quoting only the repeated length and not adding it to the total weight.
- Applying nearest neighbour without returning to the start vertex.
- Making a short cut without checking the direct distance exists in the table.
- Giving one lower bound when the question asks for the best, which is the largest.
- Adding the two longest edges at the deleted vertex.
- Treating a lower bound as a tour. Only a tour you can list is an upper bound.
- Not showing the tree edges in Prim or Kruskal.
- Stating a bound without saying whether it is upper or lower.

## Next steps

- Review the [revision notes](/resources/edexcel-ial-mathematics-route-inspection-chinese-postman-and-the-travelling-revision-notes/)
- Reread the [study guide](/resources/edexcel-ial-mathematics-route-inspection-chinese-postman-and-the-travelling/)
- Back to the [Edexcel A Level Mathematics hub](/boards/edexcel/a-level/mathematics/)
- Track progress on the [printable checklist](/checklists/edexcel/a-level/mathematics/)
- Take [all free 10-minute diagnostics](/diagnostics/)
- [Book a free trial class](/trial/)

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics (YMA01), Specification, Issue 3, April 2019, Pearson Education Limited. Unit D1: Decision Mathematics 1, section 3 (topics 3.1 to 3.4) and the Glossary for D1.
