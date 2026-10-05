---
resourceId: "mb-ap-bio-5.3-practice"
title: "Mendelian Genetics: Practice Questions (Biology 5.3)"
description: "Seven original Marlbridge practice questions on test crosses, probability rules, pedigrees and chi-square tests of cross data, with worked solutions and suggested mark points."
course: "biology"
unit: 5
topics: ["5.3"]
resourceType: "practice-questions"
prerequisites:
  - "Genotype, phenotype, dominant and recessive alleles"
prerequisiteResources: ["mb-ap-bio-5.3-study-guide"]
learningObjectives:
  - "Use a test cross and a pedigree to infer genotypes and the dominance of an allele"
  - "Apply the product and sum rules to crosses involving several genes or several children"
  - "Run a chi-square test on cross data and state the correct conclusion"
  - "Predict and explain the effect of a non-functional allele on phenotype"
skills: ["1", "2", "5", "6"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Chi-square critical values at p = 0.05: 3.84 (1 df), 5.99 (2 df), 7.81 (3 df). Give probabilities as fractions, or as decimals to 3 significant figures"
related: ["mb-ap-bio-5.3-study-guide", "mb-ap-bio-5.3-revision-notes", "mb-ap-bio-5.3-checklist"]
next: "mb-ap-bio-5.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working or reasoning."
  - "Split multi-gene crosses into one-gene crosses, then multiply."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Data for every question: χ² = Σ (o − e)² ÷ e; degrees of freedom = number of categories − 1; critical values at p = 0.05 are 3.84 (1 df), 5.99 (2 df) and 7.81 (3 df). All organisms with letter-named genes, and all data sets, are fictional.

## Question 1 (multiple choice · foundation)

In a hypothetical lizard, green scales (G) are dominant to grey scales (g). A green lizard is crossed with a grey lizard. They produce 23 green and 21 grey offspring. What is the most likely genotype of the green parent?

- (A) GG
- (B) Gg
- (C) gg
- (D) It cannot be decided without crossing two of the offspring.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** This is a test cross: the grey parent (gg) can only give g. Grey offspring (gg) must have received g from the green parent too, so the green parent carries g and is Gg. Gg × gg predicts a 1 : 1 ratio, and 23 : 21 is close to that.

- (A) GG × gg would give only Gg offspring, all green.
- (C) gg would be grey, not green.
- (D) The test cross already answers the question; that is its purpose.
</details>

## Question 2 (multiple choice · core)

The genes A, B and C are on different chromosomes, and each shows complete dominance. For the cross AaBbCc × AaBbcc, what is the probability of an offspring with the recessive phenotype for gene A, the dominant phenotype for gene B and the recessive phenotype for gene C?

- (A) 3/16
- (B) 3/32
- (C) 3/64
- (D) 1/16

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Treat each gene separately, then use the product rule.

- Aa × Aa: P(aa) = 1/4.
- Bb × Bb: P(dominant phenotype, BB or Bb) = 3/4.
- Cc × cc: P(cc) = 1/2.
- P = 1/4 × 3/4 × 1/2 = **3/32**.

Why the others are wrong:

- (A) 3/16 = 1/4 × 3/4 leaves out gene C altogether.
- (C) 3/64 uses 1/4 for cc, as if the cross were Cc × Cc. One parent is cc, so half the offspring are cc.
- (D) 1/16 = 1/4 × 1/2 × 1/2 uses 1/2 for the dominant B phenotype; that would only be right for Bb × bb.
</details>

## Question 3 (multiple choice · core)

Two parents, neither of whom has a rare trait, have three children: an affected daughter and two unaffected sons. Which pattern of inheritance best explains this family?

- (A) Autosomal dominant
- (B) Autosomal recessive
- (C) X-linked recessive
- (D) Y-linked

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Two unaffected parents with an affected child means the allele was hidden in both parents: it is recessive and both are carriers. A daughter receives one X from her father; if the trait were X-linked recessive, she would need the allele on her father's X, and he would be affected. He is not, so the gene is autosomal.

- (A) A dominant trait would show in at least one parent of an affected child.
- (C) is ruled out by the unaffected father, as explained above.
- (D) A Y-linked trait could not affect a daughter, because females have no Y chromosome.
</details>

## Question 4 (multiple choice · core)

Two heterozygous plants are crossed. Of 600 offspring, 432 show the dominant phenotype and 168 the recessive phenotype. A student tests the null hypothesis that the offspring fit a 3 : 1 ratio. Which result and conclusion are correct?

- (A) χ² = 2.88; reject the null hypothesis, because the observed counts differ from the expected counts.
- (B) χ² = 0.48; fail to reject the null hypothesis.
- (C) χ² = 2.88; fail to reject the null hypothesis.
- (D) χ² = 2.88; the data prove that the offspring follow a 3 : 1 ratio.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Expected counts: 600 × 3/4 = 450 and 600 × 1/4 = 150. χ² = (432 − 450)² ÷ 450 + (168 − 150)² ÷ 150 = 324 ÷ 450 + 324 ÷ 150 = 0.72 + 2.16 = **2.88**. There are 2 categories, so df = 1 and the critical value is 3.84. As 2.88 < 3.84, fail to reject: the difference can be explained by chance.

- (A) Observed and expected counts almost always differ a little. The test asks whether the difference is larger than chance would explain; here it is not.
- (B) 0.48 comes from using percentages (72% and 28% against 75% and 25%). Chi-square must use counts.
- (D) Failing to reject supports the hypothesis; it never proves it.
</details>

## Question 5 (pedigree · core)

The pedigree shows a fictional family with a rare trait.

<figure>
<svg viewBox="0 0 640 360" role="img" aria-labelledby="q5-title q5-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="q5-title">Three-generation pedigree for Question 5</title>
<desc id="q5-desc">Generation one: I-1, an affected male, filled square, and I-2, an unaffected female, open circle. Their children in generation two: II-2, an affected female; II-3, an unaffected male; II-4, an affected male. II-2 is partnered with II-1, an unaffected male from outside the family. II-4 is partnered with II-5, an affected female from outside the family. Generation three: children of II-1 and II-2 are III-1, an unaffected son, and III-2, an affected daughter. Children of II-4 and II-5 are III-3, an unaffected daughter, and III-4, an affected son.</desc>
<rect x="0" y="0" width="640" height="360" fill="#ffffff"/>
<text x="18" y="60" font-size="15" font-weight="700" fill="#1d2b44">I</text>
<text x="14" y="180" font-size="15" font-weight="700" fill="#1d2b44">II</text>
<text x="10" y="295" font-size="15" font-weight="700" fill="#1d2b44">III</text>
<rect x="232" y="37" width="36" height="36" fill="#1d2b44" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="350" cy="55" r="18" fill="#ffffff" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="268" y1="55" x2="332" y2="55" stroke="#1d2b44" stroke-width="2"/>
<text x="250" y="90" text-anchor="middle" font-size="12" fill="#1d2b44">I-1</text>
<text x="350" y="90" text-anchor="middle" font-size="12" fill="#1d2b44">I-2</text>
<line x1="300" y1="55" x2="300" y2="128" stroke="#1d2b44" stroke-width="2"/>
<line x1="150" y1="128" x2="430" y2="128" stroke="#1d2b44" stroke-width="2"/>
<line x1="150" y1="128" x2="150" y2="157" stroke="#1d2b44" stroke-width="2"/>
<line x1="280" y1="128" x2="280" y2="157" stroke="#1d2b44" stroke-width="2"/>
<line x1="430" y1="128" x2="430" y2="157" stroke="#1d2b44" stroke-width="2"/>
<rect x="52" y="157" width="36" height="36" fill="#ffffff" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="150" cy="175" r="18" fill="#1d2b44" stroke="#1d2b44" stroke-width="2.5"/>
<rect x="262" y="157" width="36" height="36" fill="#ffffff" stroke="#1d2b44" stroke-width="2.5"/>
<rect x="412" y="157" width="36" height="36" fill="#1d2b44" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="520" cy="175" r="18" fill="#1d2b44" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="88" y1="175" x2="132" y2="175" stroke="#1d2b44" stroke-width="2"/>
<line x1="448" y1="175" x2="502" y2="175" stroke="#1d2b44" stroke-width="2"/>
<text x="70" y="210" text-anchor="middle" font-size="12" fill="#1d2b44">II-1</text>
<text x="150" y="210" text-anchor="middle" font-size="12" fill="#1d2b44">II-2</text>
<text x="280" y="210" text-anchor="middle" font-size="12" fill="#1d2b44">II-3</text>
<text x="430" y="210" text-anchor="middle" font-size="12" fill="#1d2b44">II-4</text>
<text x="520" y="210" text-anchor="middle" font-size="12" fill="#1d2b44">II-5</text>
<line x1="110" y1="175" x2="110" y2="250" stroke="#1d2b44" stroke-width="2"/>
<line x1="70" y1="250" x2="150" y2="250" stroke="#1d2b44" stroke-width="2"/>
<line x1="70" y1="250" x2="70" y2="272" stroke="#1d2b44" stroke-width="2"/>
<line x1="150" y1="250" x2="150" y2="272" stroke="#1d2b44" stroke-width="2"/>
<rect x="52" y="272" width="36" height="36" fill="#ffffff" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="150" cy="290" r="18" fill="#1d2b44" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="475" y1="175" x2="475" y2="250" stroke="#1d2b44" stroke-width="2"/>
<line x1="440" y1="250" x2="520" y2="250" stroke="#1d2b44" stroke-width="2"/>
<line x1="440" y1="250" x2="440" y2="272" stroke="#1d2b44" stroke-width="2"/>
<line x1="520" y1="250" x2="520" y2="272" stroke="#1d2b44" stroke-width="2"/>
<circle cx="440" cy="290" r="18" fill="#ffffff" stroke="#1d2b44" stroke-width="2.5"/>
<rect x="502" y="272" width="36" height="36" fill="#1d2b44" stroke="#1d2b44" stroke-width="2.5"/>
<text x="70" y="325" text-anchor="middle" font-size="12" fill="#1d2b44">III-1</text>
<text x="150" y="325" text-anchor="middle" font-size="12" fill="#1d2b44">III-2</text>
<text x="440" y="325" text-anchor="middle" font-size="12" fill="#1d2b44">III-3</text>
<text x="520" y="325" text-anchor="middle" font-size="12" fill="#1d2b44">III-4</text>
<rect x="560" y="24" width="16" height="16" fill="#1d2b44"/>
<circle cx="568" cy="56" r="8" fill="#1d2b44"/>
<text x="584" y="37" font-size="11" fill="#1d2b44">affected</text>
<text x="584" y="60" font-size="11" fill="#1d2b44">affected</text>
<rect x="560" y="72" width="16" height="16" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="584" y="85" font-size="11" fill="#1d2b44">unaffected</text>
</svg>
<figcaption>Question 5 pedigree. Affected (filled): I-1, II-2, II-4, II-5, III-2, III-4. Unaffected (open): I-2, II-1, II-3, III-1, III-3.</figcaption>
</figure>

(a) Identify the pattern of inheritance. Give **two** pieces of evidence from the pedigree, one of which rules out X-linked inheritance.
(b) Give the genotypes of II-4 and II-5, using A and a. Explain how you know.
(c) Calculate the probability that the next child of II-4 and II-5 is (i) affected, and (ii) an affected son.
(d) III-4 is affected. Calculate the probability that he is homozygous.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** **Autosomal dominant.**

- II-4 and II-5 are both affected but have an unaffected daughter (III-3). If the trait were recessive, both parents would be aa and could only have aa (affected) children. So the allele is dominant.
- I-1 (affected father) has an affected son (II-4). A father gives his son a Y chromosome, not an X, so an X-linked allele could not pass from I-1 to II-4. II-4's mother, I-2, is unaffected, so for a dominant trait she cannot carry it. The gene must be autosomal.
- Also acceptable as supporting evidence: every affected child shown has at least one affected parent; the trait appears in every generation.

**(b)** Both are **Aa**. Each is affected, so has at least one A. Their daughter III-3 is aa, so each parent must have given her an a.

**(c)** Aa × Aa: P(affected, AA or Aa) = 3/4. P(son) = 1/2, and sex is independent of this gene, so P(affected son) = 3/4 × 1/2 = **3/8**.

**(d)** Among affected children of Aa × Aa, AA : Aa = 1 : 2. P(AA, given affected) = (1/4) ÷ (3/4) = **1/3**.

| Point | What earns it |
|---|---|
| 1 | Dominant, with the evidence of two affected parents and an unaffected child |
| 1 | Autosomal, with father-to-son transmission (or equivalent reasoning) |
| 1 | II-4 and II-5 both Aa, justified by the aa child |
| 1 | 3/4 and 3/8, with the product rule shown for the son |
| 1 | 1/3, with the reason that aa is excluded |
</details>

## Question 6 (constructed response · core)

In a hypothetical moth, spotted wings (S) are dominant to plain wings (s), and feathery antennae (F) are dominant to thread-like antennae (f). A moth heterozygous for both genes is test crossed with an ssff moth. The 400 offspring are:

| Phenotype | Spotted, feathery | Spotted, thread-like | Plain, feathery | Plain, thread-like |
|---|---|---|---|---|
| Number | 138 | 64 | 58 | 140 |

(a) State the null hypothesis and give the expected number in each class.
(b) Calculate χ² and state the degrees of freedom.
(c) State and justify your conclusion about the null hypothesis.
(d) Suggest a biological explanation for the pattern in the data.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Null hypothesis: "The wing-pattern and antenna genes assort independently, so the test cross gives the four phenotypes in a 1 : 1 : 1 : 1 ratio; any difference from this is due to chance." Expected: 400 ÷ 4 = **100** in each class.

**(b)**

| Class | o | e | (o − e)² ÷ e |
|---|---|---|---|
| spotted, feathery | 138 | 100 | 1444 ÷ 100 = 14.44 |
| spotted, thread-like | 64 | 100 | 1296 ÷ 100 = 12.96 |
| plain, feathery | 58 | 100 | 1764 ÷ 100 = 17.64 |
| plain, thread-like | 140 | 100 | 1600 ÷ 100 = 16.00 |

χ² = **61.04**. Degrees of freedom = 4 − 1 = **3**.

**(c)** The critical value for 3 df at p = 0.05 is 7.81. 61.04 is far greater than 7.81, so **reject** the null hypothesis. The deviation is very unlikely to be due to chance alone: the genes do not appear to assort independently.

**(d)** The two parental combinations (spotted feathery, 138, and plain thread-like, 140) are far more common than the two new combinations (64 and 58). This suggests the two genes are **on the same chromosome (linked)**, with S and F on one homologue and s and f on the other. The new combinations arise only when crossing over in prophase I separates the alleles. (Measuring how far apart the genes are is covered in Topic 5.4.)

| Point | What earns it |
|---|---|
| 1 | Null hypothesis names independent assortment and the 1 : 1 : 1 : 1 ratio; expected 100 each |
| 1 | χ² ≈ 61.0, with working |
| 1 | df = 3, compares with 7.81 and rejects the null hypothesis |
| 1 | Linkage proposed, supported by parental classes being more frequent |

Do not award the conclusion point for "the hypothesis is proved wrong"; rejecting means the data are unlikely under the null hypothesis.
</details>

## Question 7 (constructed response · stretch)

A hypothetical recessive condition is caused by an allele (e) that codes for a non-functional enzyme. The normal allele (E) codes for a working enzyme. Two parents are both heterozygous (Ee).

(a) Explain why the parents do not have the condition.
(b) Calculate the probability that their first child has the condition.
(c) Calculate the probability that **at least one** of their three children has the condition.
(d) Their first child is unaffected. Calculate the probability that this child is a carrier.
(e) A different mutation produces an allele whose enzyme blocks the normal enzyme from working. Predict whether this allele would be dominant or recessive, and explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Each parent has one E allele, which codes for a working enzyme. One working copy makes enough enzyme for a normal phenotype, so the effect of e is hidden.

**(b)** Ee × Ee: P(ee) = **1/4**.

**(c)** Use the complement. P(a child is unaffected) = 3/4. The children are independent, so P(all three unaffected) = (3/4)³ = 27/64. P(at least one affected) = 1 − 27/64 = **37/64 ≈ 0.578**.

**(d)** Unaffected children are EE or Ee in the ratio 1 : 2, so P(carrier) = (1/2) ÷ (3/4) = **2/3**.

**(e)** **Dominant.** In a heterozygote, the faulty enzyme would interfere with the normal enzyme made by the other allele. One copy would therefore be enough to change the phenotype, which is the definition of a dominant allele.

| Point | What earns it |
|---|---|
| 1 | One functional allele makes enough enzyme |
| 1 | 1/4 |
| 1 | 37/64, using 1 − (3/4)³ |
| 1 | 2/3, with ee excluded |
| 1 | Dominant, linked to the faulty product affecting the heterozygote |

Common error in (c): 3 × 1/4 = 3/4. Adding is wrong here, because "one child affected" and "another child affected" are not mutually exclusive events.
</details>

## How did you do?

- **Q1 or Q2 wrong:** re-read "Crosses as tools" and "The rules of probability" in the [study guide](/advanced-course-resources/biology/5-3-mendelian-genetics-study-guide/), then rework Worked example 1.
- **Q3 or Q5 wrong:** re-read "Reading pedigrees" and Figure 3; list the clues for dominant, recessive and X-linked patterns.
- **Q4 or Q6 wrong:** rework Worked example 2. Check that you used counts, the right degrees of freedom and the words "reject" or "fail to reject".
- **Q7 incomplete:** re-read "Why is one allele dominant?" and the conditional-probability step in Worked example 1 (d).

Then tick off the [topic checklist](/advanced-course-resources/biology/5-3-mendelian-genetics-checklist/).
