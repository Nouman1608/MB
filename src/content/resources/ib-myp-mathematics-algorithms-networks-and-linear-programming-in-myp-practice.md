---
title: "IB MYP Mathematics: Algorithms, networks and linear programming in MYP (MYP Mathematics) -- Practice Questions"
seoTitle: "MYP Maths Algorithms & Networks Practice Questions"
resourceType: "practice-questions"
subject: "mathematics"
level: ["ib"]
topic: "Algorithms, networks and linear programming in MYP"
boards: ["ib"]
qualifications: ["ib-myp"]
syllabusCodes: ["MYP Mathematics"]
syllabusSeries: "From 2020, first assessment 2022"
order: 342
syllabusTopics:
  - qualification: "ib-myp"
    topic: "ib-myp-mathematics-branches-of-mathematical-study"
    subtopic: "ib-myp-mathematics-branches-of-mathematical-study-thinking-with-models"
description: "Twelve original MYP Mathematics practice questions with worked answers on tracing algorithms, linear programming, weighted networks and model limits."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- the IB holds copyright in its own papers. Use these alongside
> the official exemplars available through your school or the IB store.

These questions practise the algorithm, network and linear programming content of the Thinking with models branch of the IB *Mathematics guide (for use from September 2020/January 2021)*, MYP Mathematics, first assessment 2022. Algorithms are MYP 4-5 standard; linear programming and networks are MYP 4-5 **extended**, as are questions 4 to 12 where they use those ideas. The marks in brackets are for your own self-marking.

Before you start, read the [study guide](/resources/ib-myp-mathematics-algorithms-networks-and-linear-programming-in-myp/) or the [revision notes](/resources/ib-myp-mathematics-algorithms-networks-and-linear-programming-in-myp-revision-notes/). Hub: [MYP Mathematics](/boards/ib/ib-myp/mathematics/). Checklist: [printable checklist](/checklists/ib/ib-myp/mathematics/).

## Questions

**1.** An algorithm starts with a = 84 and b = 36. Repeat: if a is bigger than b, replace a by a − b; otherwise replace b by b − a; stop when a = b and output a. Trace the algorithm in a table and say what the output represents. **[4]**

**2.** A shop reduces a price of 80 by 15% each week. After each reduction the algorithm asks whether the price is below 40. If it is, it outputs the number of reductions; if not, it reduces again. Trace the algorithm, giving prices to 2 decimal places, and state the output. **[4]**

**3.** A sorted list has 500 names. **(a)** State the greatest number of checks a linear search needs. **[1]** **(b)** Find the greatest number of checks a halving search needs, showing your reasoning. **[2]** **(c)** State one condition the list must meet for a halving search to work. **[1]**

**4.** A club sells x tickets in advance and y tickets on the door. **(a)** Write inequalities for: at least 6 advance tickets; no more than 30 tickets in total; door tickets at most three times the advance tickets. **[3]** **(b)** Decide whether 7 advance and 20 door tickets satisfies all three. **[1]**

**5.** Maximise P = 5x + 4y subject to x + y ≤ 9, x + 3y ≤ 15, x ≥ 0 and y ≥ 0. **[6]**

**6.** A farmer mixes x kg of feed A and y kg of feed B. The mix must satisfy 2x + y ≥ 12 and x + 3y ≥ 15, and must weigh no more than 10 kg, so x + y ≤ 10. Feed A costs £5 per kg and feed B costs £4 per kg. Find the cheapest mix and its cost. **[5]**

**7.** Maximise P = 7x + 5y subject to 2x + 3y ≤ 19 and 4x + y ≤ 21, where x and y are whole numbers that are not negative. **[5]**

**8.** A network has vertices A to F and edges AB, AC, BC, CD, CE, DE and EF. **(a)** Give the degree of each vertex. **[2]** **(b)** Use the degrees to check that the network has 7 edges. **[1]** **(c)** List every path from A to F. **[2]**

**9.** In a weighted network the edge weights (in minutes) are PQ 5, PR 3, QR 2, QS 6, RS 7, RT 4, ST 1, SU 3, TU 6, TV 5 and UV 2. **(a)** Find the length of the path P-Q-S-U-V. **[1]** **(b)** Use a labelling method to find the shortest path from P to V and its length. **[5]**

**10.** A directed network has arcs S to A (6), S to B (3), B to A (2), A to C (4), B to C (7), C to T (1), A to T (9) and B to T (12). **(a)** Explain why you cannot travel from A to B. **[1]** **(b)** Find the shortest path from S to T. **[3]** **(c)** List all paths from S to T. **[2]**

**11.** A school makes x small gift boxes and y large gift boxes. A small box takes 20 minutes to assemble and a large box takes 30 minutes. There are 600 minutes available. At most 25 boxes can be stored, and at most 18 large boxes are wanted. Profit is £7 per small box and £10 per large box. **(a)** Write all constraints. **[3]** **(b)** Find the corners of the feasible region. **[3]** **(c)** Find the plan with the greatest profit and that profit. **[2]** **(d)** The large-box profit falls to £9. Does the best plan change? **[2]**

**12.** Use the network from question 9. Roadworks raise the weight of RT from 4 to 9. **(a)** Find the new shortest path from P to V and its length. **[3]** **(b)** State how much longer the journey is. **[1]** **(c)** Give two reasons why the model's answer may differ from a real journey. **[2]** **(d)** Suggest one change to the model and the extra information it would need. **[2]**

## Answers

**1.**

| a | b |
|---|---|
| 84 | 36 |
| 48 | 36 |
| 12 | 36 |
| 12 | 24 |
| 12 | 12 |

Correct first three passes [1]. Correct last two passes [1]. Output **12** [1]. It is the highest common factor of 84 and 36 [1]. **[4]**
*Examiner insight:* Write a new row for every pass; skipping one makes later values wrong.

**2.** Prices after each reduction: 68.00, 57.80, 49.13 [1], 41.76, 35.50 [1]. After the fifth reduction 35.50 is below 40 [1]. Output **5** [1]. **[4]**
*Examiner insight:* Multiply the current price by 0.85 each time rather than subtracting 15% of 80 repeatedly; the second method gives different values.

**3. (a)** **500** checks [1].
**(b)** A halving search with k checks can cover up to 2ᵏ − 1 names [1]. 2⁸ − 1 = 255 is too few and 2⁹ − 1 = 511 is enough, so **9** checks [1].
**(c)** The list must be sorted [1]. **[4]**
*Examiner insight:* Show the reasoning behind 9; the number alone hides how you reached it.

**4. (a)** x ≥ 6 [1]; x + y ≤ 30 [1]; y ≤ 3x [1].
**(b)** x = 7: 7 ≥ 6 true; 27 ≤ 30 true; 20 ≤ 21 true. So **yes, it is allowed** [1]. **[4]**
*Examiner insight:* When you check a point, substitute into every inequality and write the result of each, rather than just saying "yes".

**5.** The corners come from the axes and the boundary lines. Where x + y = 9 meets x + 3y = 15: subtracting gives 2y = 6, so y = 3 and x = 6 [1]. Corners: (0, 0), (9, 0), (6, 3), (0, 5) [2]. Values of P: 0, 45, 42, 20 [1]. Greatest is **P = 45 at (9, 0)** [1]. Check: at (9, 0), 9 ≤ 9 and 9 ≤ 15, so the point is allowed [1]. **[6]**
*Examiner insight:* The maximum can sit on an axis, so check the axis corners too.

**6.** The corners: 2x + y = 12 with x + y = 10 gives (2, 8) [1]. 2x + y = 12 with x + 3y = 15: y = 12 − 2x, so x + 36 − 6x = 15, giving x = 4.2 and y = 3.6 [1]. x + 3y = 15 with x + y = 10 gives (7.5, 2.5) [1]. Costs: 5(2) + 4(8) = 42; 5(4.2) + 4(3.6) = 35.4; 5(7.5) + 4(2.5) = 47.5 [1]. The cheapest mix is **4.2 kg of A and 3.6 kg of B, costing £35.40** [1]. **[5]**
*Examiner insight:* For a minimum, you still compare every corner; the first corner you find is not necessarily the cheapest.

**7.** Solving 2x + 3y = 19 with 4x + y = 21: y = 21 − 4x, so 2x + 63 − 12x = 19, giving x = 4.4 and y = 3.4 [1]. P = 47.8 at that corner, but it is not whole-number [1]. Nearby whole-number points: (4, 3) gives 43 and is allowed [1]. (4, 4) breaks 2x + 3y ≤ 19 (20) and (5, 2) breaks 4x + y ≤ 21 (22) [1]. (3, 4) gives 41 and (5, 1) gives 40, both smaller. The best plan is **x = 4, y = 3 with P = 43** [1]. **[5]**
*Examiner insight:* Name the nearby points you rejected and why; that justifies the choice.

**8. (a)** A 2, B 2, C 4 [1]; D 2, E 3, F 1 [1].
**(b)** The total is 14 and 14 ÷ 2 = 7, so there are **7 edges** [1].
**(c)** A-C-E-F, A-B-C-E-F [1], A-C-D-E-F, A-B-C-D-E-F [1]. **[5]**
*Examiner insight:* List paths in a systematic order, such as always trying the lower-lettered neighbour first, so that you do not miss one.

**9. (a)** 5 + 6 + 3 + 2 = **16** minutes [1].
**(b)** Finish P (0): Q 5, R 3 [1]. Finish R (3): S 10, T 7 and Q stays 5 [1]. Finish Q (5): S stays 10. Finish T (7): S 8, U 13, V 12 [1]. Finish S (8): U 11. Finish U (11): V stays 12 [1]. Trace back: V from T, T from R, R from P. The shortest path is **P-R-T-V, 12 minutes** [1]. **[6]**
*Examiner insight:* Show the label changes at each step; a bare path and number cannot show that you ruled out other routes.

**10. (a)** The only arc between A and B points from B to A [1].
**(b)** Finish S (0): A 6, B 3. Finish B (3): A 5, C 10, T 15 [1]. Finish A (5): C 9, T 14. Finish C (9): T 10 [1]. The shortest path is **S-B-A-C-T, length 10** [1].
**(c)** S-B-A-C-T, S-A-C-T, S-B-C-T [1]; S-B-A-T, S-A-T, S-B-T [1]. **[6]**
*Examiner insight:* In a directed network, check every step against the arrow before adding its weight.

**11. (a)** 20x + 30y ≤ 600 (or 2x + 3y ≤ 60) [1]; x + y ≤ 25 and y ≤ 18 [1]; x ≥ 0 and y ≥ 0 [1].
**(b)** y = 18 meets 2x + 3y = 60 where 2x = 6, so (3, 18) [1]. x + y = 25 meets 2x + 3y = 60: y = 25 − x, so 2x + 75 − 3x = 60, giving x = 15, y = 10 [1]. The other corners are (0, 0), (0, 18) and (25, 0) [1].
**(c)** P = 7x + 10y: 0, 180, 201, 205, 175 for (0,0), (0,18), (3,18), (15,10), (25,0) [1]. The best plan is **15 small and 10 large boxes, profit £205** [1].
**(d)** With P = 7x + 9y the values at (3, 18) and (15, 10) are 183 and 195 [1]. So **the best plan does not change**, and the profit is £195 [1]. **[10]**
*Examiner insight:* Part (d) asks for a decision; state it in words.

**12. (a)** Finish P (0): Q 5, R 3. Finish R (3): S 10, T 12 [1]. Finish Q (5): S stays 10. Finish S (10): T 11, U 13 [1]. Finish T (11): V 16. Finish U (13): V 15. The shortest path is **P-R-S-U-V, 15 minutes** [1].
**(b)** 15 − 12 = **3 minutes** longer [1].
**(c)** For example: travel times change with traffic, so the weights are not fixed [1]; the model ignores waiting at junctions or road type [1].
**(d)** For example, use time-of-day weights (peak and off-peak) [1], which would need recorded journey times at different hours [1]. **[8]**
*Examiner insight:* Say how the answer could change, not only that something is unrealistic.

## Where marks are usually lost

- Leaving out a row of a trace table or applying a decision the wrong way.
- Subtracting a percentage from the original instead of applying it to the current value.
- Reading "at least" and "at most" the wrong way round.
- Missing the axis corners of a feasible region.
- Giving the value of the objective without the point where it happens.
- Counting edges instead of adding weights when asked for the shortest path.
- Stopping the labelling as soon as the destination gets a label.
- Writing "not realistic" without saying what changes.

## Next steps

- [Revision notes](/resources/ib-myp-mathematics-algorithms-networks-and-linear-programming-in-myp-revision-notes/)
- [Study guide](/resources/ib-myp-mathematics-algorithms-networks-and-linear-programming-in-myp/)
- [MYP Mathematics hub](/boards/ib/ib-myp/mathematics/)
- [Printable checklist](/checklists/ib/ib-myp/mathematics/)
- [All free 10-minute diagnostics](/diagnostics/)
- [Book a free trial class](/trial/)

## Official syllabus

IB *Mathematics guide (for use from September 2020/January 2021)*, MYP Mathematics, first assessment 2022, published by the International Baccalaureate Organization.
