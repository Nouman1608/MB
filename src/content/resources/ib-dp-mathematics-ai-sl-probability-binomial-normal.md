---
title: "IB DP Mathematics: Applications and Interpretation -- Probability, discrete random variables, binomial and normal distributions Study Guide"
seoTitle: "IB Maths AI Probability, Binomial and Normal Study Guide"
resourceType: "study-guides"
subject: "mathematics-applications-and-interpretation"
level: ["ib"]
topic: "Probability, discrete random variables, binomial and normal distributions"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Applications and Interpretation"]
syllabusSeries: "First assessments for SL and HL—2021"
order: 4.5
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-statistics-and-probability"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-4-5"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-statistics-and-probability"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-4-6"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-statistics-and-probability"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-4-7"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-statistics-and-probability"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-4-8"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-statistics-and-probability"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-4-9"
description: "Study guide to probability, Venn and tree diagrams, discrete random variables, binomial and normal distributions, with worked examples, for IB DP Maths AI."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-27
featured: false
---

This study guide teaches probability, discrete random variables and the binomial and normal distributions for IB Diploma Programme Mathematics: Applications and Interpretation. It is aligned to the IB *Mathematics: applications and interpretation guide*, first assessment 2021, and covers syllabus sections 4.5–4.9, which are common content for SL and HL. It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 sessions.

Every paper in this course is "technology required". The guide says binomial probabilities should be found using technology in examinations, and that normal probabilities and values must be found using technology. Your job is to pick the right model, set it up clearly and interpret the answer.

Useful links: the [course hub](/boards/ib/ib-dp/mathematics-applications-and-interpretation/), the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-applications-and-interpretation/), the [revision notes for this unit](/resources/ib-dp-mathematics-ai-sl-probability-binomial-normal-revision-notes/) and the [practice questions for this unit](/resources/ib-dp-mathematics-ai-sl-probability-binomial-normal-practice/). For a short overview of the whole strand, see the [statistics and probability overview](/resources/ib-dp-mathematics-ai-statistics-probability/).

## What this unit covers

| Syllabus section | What you must be able to do | SL/HL |
|---|---|---|
| 4.5 | Use trial, outcome, equally likely outcomes, relative frequency, sample space (U) and event; find P(A) = n(A)/n(U); use complementary events A and A′; find an expected number of occurrences | SL and HL |
| 4.6 | Use Venn diagrams, tree diagrams, sample space diagrams and tables of outcomes; use the combined events formula; recognise mutually exclusive and independent events; find conditional probability; work with and without replacement | SL and HL |
| 4.7 | Work with a discrete random variable and its probability distribution; find E(X) and apply it, including fair games | SL and HL |
| 4.8 | Recognise when the binomial distribution is an appropriate model; find binomial probabilities with technology; use the mean and variance | SL and HL |
| 4.9 | Know the properties and shape of the normal curve and the 68%, 95%, 99.7% guide; find normal probabilities and inverse normal values with technology | SL and HL |

## Section 4.5: The language of probability

A **trial** is one repetition of an experiment, such as one spin of a spinner. An **outcome** is one possible result. The **sample space**, U, is the set of all outcomes. An **event**, A, is a set of outcomes.

When outcomes are equally likely:

```
P(A) = n(A) / n(U)
```

The **complementary event** A′ is "A does not happen", and P(A′) = 1 − P(A). Use it whenever "at least one" appears.

**Relative frequency** is the experimental estimate: (number of times A happened) ÷ (number of trials). It approaches the theoretical probability as the number of trials grows.

The **expected number of occurrences** of A in n trials is n × P(A). It does not have to be a whole number.

### Worked example 1

A spinner is spun 250 times and lands on red 85 times.

```
Relative frequency of red = 85/250 = 0.34
Expected number of reds in 600 more spins = 600 × 0.34 = 204
```

Two fair spinners are spun. Spinner A is numbered 1, 2, 3 and spinner B is numbered 1, 2, 3, 4. The score is the product. A sample space diagram (a 3 by 4 table of products) has 12 equally likely outcomes. The even products are 2, 4 (from A = 1), 2, 4, 6, 8 (from A = 2) and 6, 12 (from A = 3), so 8 outcomes.

```
P(product even) = 8/12 = 2/3
```

## Section 4.6: Combined events and conditional probability

### The rules

```
P(A ∪ B) = P(A) + P(B) − P(A ∩ B)        (combined events)
Mutually exclusive:  P(A ∩ B) = 0
Independent:         P(A ∩ B) = P(A)P(B)
Conditional:         P(A | B) = P(A ∩ B) / P(B)
                     so P(A ∩ B) = P(B) P(A | B)
```

"A or B" in probability includes both. That is why P(A ∩ B) is subtracted: it was counted twice. The guide notes that many problems can be solved from a Venn diagram, tree diagram, sample space diagram or table without writing the formulae. Show the numbers you read off.

To **test independence**, compute P(A)P(B) and compare it with P(A ∩ B). Equal means independent. Mutually exclusive events with non-zero probabilities are never independent: if one happens, the other cannot.

### Worked example 2: Venn diagram

In a group of 60 students, 34 study Biology (B), 25 study Chemistry (C) and 12 study both.

```
Regions: B only = 34 − 12 = 22, both = 12, C only = 25 − 12 = 13
Neither = 60 − (22 + 12 + 13) = 13

P(B ∪ C) = (34 + 25 − 12)/60 = 47/60 ≈ 0.783
P(C | B) = 12/34 = 6/17 ≈ 0.353
Independence: P(B)P(C) = (34/60)(25/60) = 17/72 ≈ 0.236
              P(B ∩ C) = 12/60 = 0.2
0.236 ≠ 0.2, so B and C are not independent.
```

For P(C | B), the "given" event B becomes the new sample space: 34 students, of whom 12 study Chemistry.

### Worked example 3: tree diagram without replacement

A box holds 12 pens, 3 of them faulty (F). Two pens are taken at random without replacement.

```
First pen:   P(F) = 3/12        P(F′) = 9/12
Second pen:  after F:  P(F) = 2/11,  P(F′) = 9/11
             after F′: P(F) = 3/11,  P(F′) = 8/11

P(exactly one faulty) = (3/12)(9/11) + (9/12)(3/11) = 54/132 = 9/22 ≈ 0.409
P(at least one faulty) = 1 − P(F′F′) = 1 − (9/12)(8/11) = 1 − 72/132 = 5/11 ≈ 0.455
P(second faulty) = (3/12)(2/11) + (9/12)(3/11) = 33/132 = 1/4
P(second faulty | at least one faulty) = (1/4) ÷ (5/11) = 11/20 = 0.55
```

In the last line, "second faulty" is already inside "at least one faulty", so the intersection is just P(second faulty). With replacement, the second-stage fractions would be the same as the first (3/12 and 9/12) and the two draws would be independent.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-sl-probability-binomial-normal--01-imath-ai-sl-prob-venn-given.webp" width="900" height="1110" alt="A Venn diagram of 60 students with 22 studying only Biology, 12 studying both, 13 studying only Chemistry and 13 studying neither; the union of Biology and Chemistry contains 22 + 12 + 13 = 47 students, so P(B or C) = 47/60 which is about 0.783. A second copy of the diagram greys out everything outside Biology: given B, the sample space is the 34 students in Biology, of whom 12 also study Chemistry, so P(C given B) = 12/34 = 6/17 which is about 0.353. Circle areas and the overlap are drawn in proportion to the counts." loading="lazy">
  <figcaption>P(B ∪ C) = 47/60 and P(C | B) = 12/34 read straight from the counts.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-sl-probability-binomial-normal--02-imath-ai-sl-prob-independence.webp" width="900" height="1050" alt="Two horizontal bars compare P(B) times P(C), which is 34/60 times 25/60 = 0.236, with P(B and C) = 12/60 = 0.200. They are not equal, so Biology and Chemistry are not independent. Below, two events A and B drawn as non-overlapping circles have P(A and B) = 0, but with illustrative probabilities 0.3 and 0.4 the product P(A)P(B) = 0.12 is not 0, so mutually exclusive events with non-zero probabilities are never independent." loading="lazy">
  <figcaption>Independence means P(A)P(B) = P(A ∩ B); mutually exclusive events with non-zero probabilities are never independent.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-sl-probability-binomial-normal--03-imath-ai-sl-prob-tree.webp" width="900" height="1040" alt="A tree diagram for taking two pens without replacement from 12 pens of which 3 are faulty. First branches are 3/12 faulty and 9/12 not. After a faulty pen the second branches are 2/11 and 9/11; after a non-faulty pen they are 3/11 and 8/11. The four outcome probabilities are FF = 1/22, F then not F = 9/44, not F then F = 9/44 and not F not F = 6/11. Three strips show which outcomes make up each event: exactly one faulty is 9/22, at least one faulty is 5/11 and the second pen being faulty is 1/4." loading="lazy">
  <figcaption>Multiply along branches and add paths; without replacement the second-stage fractions change.</figcaption>
</figure>


## Section 4.7: Discrete random variables

A **discrete random variable** X takes separate values, each with a probability. The guide says a distribution may be given as a table or as a formula such as P(X = x) = k(…) for x in a listed set. In every case:

```
Σ P(X = x) = 1                   (use this to find an unknown)
E(X) = Σ x P(X = x)              (the mean, or expected value)
```

E(X) is the long-run average value of X. If X is a player's gain in a game, **E(X) = 0 means the game is fair**. A negative E(X) means the player loses on average.

### Worked example 4: a distribution given by a formula

P(X = x) = kx² for x ∈ {1, 2, 3}.

```
k(1 + 4 + 9) = 1  →  14k = 1  →  k = 1/14
E(X) = 1(1/14) + 2(4/14) + 3(9/14) = (1 + 8 + 27)/14 = 36/14 = 18/7 ≈ 2.57
P(X ≥ 2) = 4/14 + 9/14 = 13/14
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-sl-probability-binomial-normal--05-imath-ai-sl-prob-find-k.webp" width="900" height="960" alt="A bar of total probability 1 is cut into 14 equal parts, with 1, 4 and 9 parts for x = 1, 2 and 3, so k = 1/14. A bar chart shows P(X = x) = 1/14, 4/14 and 9/14; the bars for x = 2 and 3 together give P(X at least 2) = 13/14. The balance point of the distribution, the expected value E(X) = 1(1/14) + 2(4/14) + 3(9/14) = 18/7, about 2.57, is marked below the axis." loading="lazy">
  <figcaption>The probabilities must sum to 1, which fixes k = 1/14, and E(X) is the balance point 18/7.</figcaption>
</figure>


### Worked example 5: a fair game

A player pays c euros to roll a fair six-sided die. A 6 pays out 12 euros, a 4 or 5 pays out 3 euros, and anything else pays nothing.

```
Expected payout = 12(1/6) + 3(2/6) + 0(3/6) = 2 + 1 = 3 euros
The game is fair when c = 3.
If c = 4, the gain X takes values 8, −1, −4 with probabilities 1/6, 2/6, 3/6:
E(X) = 8/6 − 2/6 − 12/6 = −6/6 = −1 euro per game.
```

Always say whose gain X is. The organiser's expected gain is the negative of the player's.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-sl-probability-binomial-normal--04-imath-ai-sl-prob-fair-game.webp" width="900" height="1060" alt="Two bar charts of the player gain X for a die game where a 6 pays 12 euros, a 4 or 5 pays 3 euros and other numbers pay nothing. With entry fee 3 euros the gains are −3, 0 and 9 with probabilities 3/6, 2/6 and 1/6, and the balance point E(X) is 0, so the game is fair. With entry fee 4 euros the gains are −4, −1 and 8 with the same probabilities and the balance point E(X) is −1, so the player loses 1 euro per game on average." loading="lazy">
  <figcaption>A game is fair when E(X) = 0; at an entry of 4 euros the player loses 1 euro per game on average.</figcaption>
</figure>


## Section 4.8: The binomial distribution

X ~ B(n, p) is an appropriate model when:

- there is a fixed number of trials, n;
- each trial has two outcomes, "success" and "failure";
- the probability of success, p, is the same on every trial;
- the trials are independent.

X counts the number of successes. For the binomial distribution:

```
E(X) = np            Var(X) = np(1 − p)
```

The guide does not require a proof of these, and links E(X) = np back to the expected number of occurrences in 4.5.

**Using your GDC.** Use the binomial pdf for P(X = r) and the binomial cdf for P(X ≤ r). Convert every other inequality into one of these:

```
P(X < r)  = P(X ≤ r − 1)
P(X ≥ r)  = 1 − P(X ≤ r − 1)
P(X > r)  = 1 − P(X ≤ r)
P(a ≤ X ≤ b) = P(X ≤ b) − P(X ≤ a − 1)
```

Write the distribution and the probability statement before the answer, for example "X ~ B(20, 0.85), P(X ≥ 18) = 1 − P(X ≤ 17)". This earns method marks even if you key in a wrong number.

### Worked example 6

Each seed in a packet germinates with probability 0.85, independently. A packet has 20 seeds. Let X be the number that germinate, so X ~ B(20, 0.85).

```
P(X = 17) = 0.243                        (binomial pdf)
P(X ≥ 18) = 1 − P(X ≤ 17) = 0.405
P(X < 15) = P(X ≤ 14) = 0.0673
E(X) = 20 × 0.85 = 17
Var(X) = 20 × 0.85 × 0.15 = 2.55,  standard deviation = √2.55 ≈ 1.60
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-sl-probability-binomial-normal--06-imath-ai-sl-prob-binomial.webp" width="900" height="1230" alt="Three copies of the bar chart for X binomial with n = 20 and p = 0.85, for x from 8 to 20. In the first, the single bar at 17 is highlighted: P(X = 17) = 0.243, the binomial pdf. In the second, the bars at 18, 19 and 20 are highlighted: P(X at least 18) = 1 − P(X at most 17) = 0.405. In the third, the bars up to 14 are highlighted: P(X less than 15) = P(X at most 14) = 0.0673. The mean is 17 and the variance is 2.55." loading="lazy">
  <figcaption>Convert every inequality into a pdf bar or a cdf (cumulative) sum before using the GDC.</figcaption>
</figure>


## Section 4.9: The normal distribution

X ~ N(μ, σ²) models a continuous variable, such as a mass or a time, that clusters around a mean. Note that the second parameter is the **variance**. N(150, 12²) has standard deviation 12.

Properties of the normal curve:

- bell-shaped and symmetrical about x = μ, so mean = median = mode;
- total area under the curve is 1, and area gives probability;
- for a continuous variable, P(X = a) = 0, so P(X < a) = P(X ≤ a).

The guide expects you to know that approximately **68%** of the data lies within μ ± σ, **95%** within μ ± 2σ and **99.7%** within μ ± 3σ.

**Using your GDC.** Use normal cdf with a lower bound, an upper bound, μ and σ. For inverse normal, enter the area to the **left** and the guide says μ and σ will be given. The guide states this does not involve transforming to the standardised variable z. A quick sketch with the mean and shaded area catches "left or right" errors.

### Worked example 7

The masses of apples are modelled by X ~ N(150, 12²) grams.

```
About 68% of apples have masses between 150 − 12 = 138 g and 150 + 12 = 162 g.
P(X > 165) = 0.106
P(140 < X < 160) = 0.595
Heaviest 5%: P(X < m) = 0.95 → m = 169.7 ≈ 170 g
Expected number over 165 g in 500 apples = 500 × 0.10565… ≈ 52.8
```

### Worked example 8: normal feeding into binomial

A bag contains 8 of these apples, chosen independently. Let Y be the number in the bag heavier than 165 g. Then Y ~ B(8, 0.10565…).

```
P(Y ≥ 2) = 1 − P(Y ≤ 1) = 0.204
```

Carry the unrounded 0.10565… from your GDC into the binomial calculation. Rounding it first can change the third significant figure.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-sl-probability-binomial-normal--07-imath-ai-sl-prob-normal-area.webp" width="900" height="1060" alt="Three copies of the normal curve for apple masses with mean 150 g and standard deviation 12 g. The first shades the region from 138 g to 162 g, within one standard deviation of the mean, which holds about 68 percent of apples. The second shades the right tail above 165 g, P(X &gt; 165) = 0.106. The third shades the area between 140 g and 160 g, P(140 &lt; X &lt; 160) = 0.595." loading="lazy">
  <figcaption>Normal probabilities are areas under the curve: about 68% within one σ, then tails and bands from normal cdf.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-sl-probability-binomial-normal--08-imath-ai-sl-prob-inverse-normal.webp" width="900" height="960" alt="Two normal curves for apple masses with mean 150 g and standard deviation 12 g. In the first, the area to the left of m is 0.95 and the area to the right is 0.05, which gives m = 169.7 g, the mass above which the heaviest 5 percent of apples lie. In the second, entering 0.05 as the area to the left gives 130.3 g, the lightest 5 percent, which is the wrong answer to the question. Sketching the curve shows which side the area is on." loading="lazy">
  <figcaption>Inverse normal needs the area to the left; entering the right-hand area gives the wrong end of the curve.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-sl-probability-binomial-normal--09-imath-ai-sl-prob-normal-binomial.webp" width="900" height="990" alt="A normal curve for apple masses with the tail above 165 g shaded gives p = P(X &gt; 165) = 0.10565. An arrow leads to a binomial model: in a bag of 8 independent apples the number heavier than 165 g is Y ~ B(8, p). A bar chart of Y from 0 to 8 shades the bars from 2 upwards, so P(Y at least 2) = 1 − P(Y at most 1) = 0.204. A note says to keep the unrounded value of p from the calculator." loading="lazy">
  <figcaption>The normal tail probability becomes p in a binomial model, and the unrounded value should be kept.</figcaption>
</figure>


## Common errors

- Adding P(A) + P(B) for "A or B" when the events overlap.
- Treating "mutually exclusive" and "independent" as the same thing.
- Dividing by the whole sample space in a conditional probability instead of by P(given event).
- Keeping the same denominators on the second branch of a "without replacement" tree.
- Using binomial cdf for P(X ≥ r) directly, or turning P(X < 15) into P(X ≤ 15).
- Using a binomial model when p changes from trial to trial, as with drawing without replacement.
- Entering the variance instead of the standard deviation into normal cdf.
- Entering the area to the right into inverse normal.

## Where to go next

Test your recall with the [revision notes](/resources/ib-dp-mathematics-ai-sl-probability-binomial-normal-revision-notes/), then work through the [practice questions](/resources/ib-dp-mathematics-ai-sl-probability-binomial-normal-practice/). For how the papers are set out, see the [exam preparation guide](/resources/ib-dp-mathematics-applications-and-interpretation-exam-preparation/) and the [syllabus guide](/resources/ib-dp-mathematics-applications-and-interpretation-syllabus-guide/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: applications and interpretation guide*, first assessment 2021.
