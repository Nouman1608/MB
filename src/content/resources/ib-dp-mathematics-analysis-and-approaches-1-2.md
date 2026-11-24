---
title: "IB DP Mathematics: Analysis and Approaches (AA): 1.2 Arithmetic sequences and series"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Number and algebra"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 1.2
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-2"
description: "IB DP Maths AA section 1.2 in depth: nth term and sum formulae, sigma notation, finding n, simple interest and modelling data that is nearly arithmetic."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide covers syllabus section **1.2** of IB DP Mathematics: Analysis and Approaches (first assessment
2021), common to SL and HL: **arithmetic sequences and series**. The section includes use of the formulae
for the nth term and the sum of the first n terms, sigma notation for arithmetic sums, applications, and
"analysis, interpretation and prediction where a model is not perfectly arithmetic in real life". The
guide adds that technology may be used to generate and display sequences, and that if you use technology in
an exam you are expected to identify the first term and the common difference.

For quick recall use the [section 1.2 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-1-2-revision-notes/),
and test yourself with the [section 1.2 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-1-2-practice/).
The broader [sequences, series and financial applications study guide](/resources/ib-dp-mathematics-aa-sequences-series-financial/)
introduces the formulae; this page concentrates on the question types built from them.

## The formulae (in the formula booklet)

```
u_n = u_1 + (n − 1)d
S_n = (n/2)(2u_1 + (n − 1)d) = (n/2)(u_1 + u_n)
```

u₁ is the first term, d the common difference and n the number of terms. Use the second sum formula when
you know the last term; it avoids finding d.

**A useful view.** Expanding gives u_n = dn + (u₁ − d), a **linear** function of n with gradient d. Plotting
the terms against n gives points on a straight line, which links this section to straight-line graphs and
explains why a nearly arithmetic data set looks nearly linear.

## Question type 1: which term is it?

**Worked example 1 (calculator-free).** The sequence 7, 11, 15, … continues. Which term equals 203? Is 150
a term?

```
u_1 = 7, d = 4
7 + 4(n − 1) = 203  ->  4(n − 1) = 196  ->  n − 1 = 49  ->  n = 50
7 + 4(n − 1) = 150  ->  n − 1 = 35.75  ->  n = 36.75
```

203 is the **50th term**. 150 is **not a term**, because n must be a positive integer. Saying why is
part of the answer.

## Question type 2: sums with a condition

**Worked example 2 (calculator-free).** Find the sum of all multiples of 7 between 100 and 500.

```
First multiple above 100: 105 = 7 × 15
Last multiple below 500:  497 = 7 × 71
Number of terms: 71 − 15 + 1 = 57
S = (57/2)(105 + 497) = (57/2)(602) = 57 × 301 = 17 157
```

The "+1" when counting terms is the step most often missed: from the 15th to the 71st multiple inclusive is
57 multiples, not 56.

## Question type 3: from S_n back to the sequence

If you are given a formula for S_n, use u₁ = S₁ and u_n = S_n − S_{n−1}.

**Worked example 3 (calculator-free).** The sum of the first n terms of a sequence is S_n = 3n² + 2n. Show
that the sequence is arithmetic and find d.

```
u_1 = S_1 = 3 + 2 = 5
u_n = S_n − S_(n−1) = 3n² + 2n − [3(n − 1)² + 2(n − 1)]
    = 3n² + 2n − 3n² + 6n − 3 − 2n + 2
    = 6n − 1
u_n − u_(n−1) = (6n − 1) − (6n − 7) = 6, a constant
```

So the sequence is arithmetic with **d = 6** (and u₁ = 5 agrees with 6(1) − 1). Showing a constant
difference is the proof; listing three terms only illustrates it.

## Sigma notation

The sum Σ from k = 4 to 15 of (5 − 2k) means substitute k = 4, 5, …, 15 and add.

```
Number of terms: 15 − 4 + 1 = 12
First term: 5 − 8 = −3      Last term: 5 − 30 = −25
Sum = (12/2)(−3 + (−25)) = 6 × (−28) = −168
```

The coefficient of k (here −2) is the common difference. A negative d simply gives a decreasing sequence;
the formulae are unchanged.

## Question type 4: least n with technology

**Worked example 4 (calculator allowed).** A theatre has 24 seats in the front row and each row has 2 more
seats than the row in front. Find the least number of rows needed for at least 1000 seats.

```
u_1 = 24, d = 2
S_n = (n/2)(48 + 2(n − 1)) = n(n + 23)
n(n + 23) ≥ 1000  ->  n² + 23n − 1000 ≥ 0
Positive root: n = 22.148...
```

n must be a whole number of rows, so **n = 23**. Check: S₂₂ = 990 < 1000 and S₂₃ = 1058 ≥ 1000. On the GDC a
table of S_n against n, or solving the quadratic, gives the same result; write down u₁ = 24 and d = 2
first, as the guide expects.

## Applications: simple interest

Simple interest adds the same amount each year, so the balance is arithmetic. £1500 invested at 2.5% simple
interest gains 0.025 × 1500 = £37.50 a year, so after n years the balance is 1500 + 37.5n. It first exceeds
£2000 when 37.5n > 500, that is n > 13.3, so after **14 years**. Comparing simple and compound interest
leads into section 1.4.

## Modelling data that is not perfectly arithmetic

Real data rarely has an exact common difference. The guide expects you to approximate one, use it to
predict, and comment on the prediction.

**Worked example 5 (calculator allowed).** A club's membership at the end of five consecutive months is
412, 437, 465, 488, 514. Model it as arithmetic and predict month 10.

```
Differences: 25, 28, 23, 26 (not constant, but similar)
Approximate d = (514 − 412)/4 = 25.5
Model: u_n ≈ 412 + 25.5(n − 1)
u_10 ≈ 412 + 9 × 25.5 = 641.5, so about 642 members
```

A good interpretation says the model fits because the differences are roughly constant, and that the
month-10 prediction is an **extrapolation** beyond the data, so it is less reliable, especially if growth
slows. Using only the first two terms to set d (25) is valid but ignores most of the data; the
first-to-last method uses all of it.

## Exam technique

- **"Show that"**: every algebraic step must be visible, and the final line must match the given result.
- **"Hence"**: use the previous answer; a fresh method may not score.
- **"Find the least n"**: solve, then **round up** to an integer and check the neighbouring values.
- With a GDC, state u₁ and d (or the equation you solved) before giving the answer.

## Common mistakes

- Counting terms as last index − first index, forgetting +1.
- Using u_n = u₁ + nd, which shifts every term.
- Accepting a non-integer or negative n.
- Rounding the least n down instead of up.
- Treating nearly arithmetic data as exact without comment.

## More on this topic

- [Section 1.2 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-1-2-revision-notes/)
- [Section 1.2 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-1-2-practice/)
- [Section 1.3 study guide: geometric sequences and series](/resources/ib-dp-mathematics-analysis-and-approaches-1-3/)
- [IB DP Maths AA course hub](/boards/ib/ib-dp/mathematics-analysis-and-approaches/)

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*,
first assessment 2021: syllabus section 1.2, arithmetic sequences and series.
