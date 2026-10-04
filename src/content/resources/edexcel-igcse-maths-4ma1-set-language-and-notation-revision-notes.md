---
title: "Pearson Edexcel International GCSE Mathematics A 4MA1: Set language and notation -- Revision Notes"
seoTitle: "Edexcel IGCSE Maths 4MA1 Set Notation Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["igcse"]
topic: "Set language and notation"
boards: ["edexcel"]
qualifications: ["igcse"]
syllabusCodes: ["4MA1"]
syllabusSeries: "Specification Issue 2, November 2017"
order: 1
syllabusTopics:
  - qualification: "igcse"
    topic: "numbers-and-the-number-system-edexcel-igcse-maths"
  - qualification: "igcse"
    topic: "numbers-and-the-number-system-edexcel-igcse-maths"
    subtopic: "set-language-and-notation-edexcel-igcse-maths"
description: "Revision notes for Edexcel IGCSE Maths 4MA1 section 1.5: set symbols, Venn diagram regions, complements, n(A), subsets and a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-04
featured: false
---

These revision notes cover section 1.5, Set language and notation, of the Pearson Edexcel International GCSE Mathematics A (4MA1) specification, Issue 2 (November 2017), for papers sat in January and June. Foundation statements 1.5 A–E apply to both tiers. Higher statements 1.5 A–D (algebraic sets, subsets, n(A) and practical problems) are marked **Higher tier only**. For full explanations and worked examples, read the [set language and notation study guide](/resources/edexcel-igcse-maths-4ma1-set-language-and-notation/).

Other pages for this section and topic: the [set language practice questions](/resources/edexcel-igcse-maths-4ma1-set-language-and-notation-practice/), the [topic 1 revision notes](/resources/edexcel-igcse-mathematics-number-revision-notes/), the [topic 1 practice questions](/resources/edexcel-igcse-mathematics-number-practice/), the [Numbers and the number system study guide](/resources/igcse-edexcel-mathematics-numbers-and-the-number-system/), the [Edexcel IGCSE Mathematics hub](/boards/edexcel/igcse/mathematics/), the [printable 4MA1 checklist](/checklists/edexcel/igcse/mathematics/) and the free [10-minute diagnostics](/diagnostics/).

## Key definitions (both tiers)

- **Set**: a clearly defined collection of objects. You must be able to say, for any object, whether it belongs.
- **Element** (member): one object in a set.
- **Universal set ℰ**: everything under consideration in the question. Every other set is drawn from it.
- **Empty set ∅**: a set with no elements.
- **Complement A′**: the elements of ℰ that are not in A.

Listing rules: use curly brackets, separate elements with commas, list each element once, and order does not matter.

## Notation table

| Symbol | Read as | Tier |
|---|---|---|
| { } | the set of | Both |
| ∈ | is an element of | Both |
| ∉ | is not an element of | Both |
| ∩ | intersection ("and", in both) | Both |
| ∪ | union ("or", in either or both) | Both |
| ℰ | the universal set | Both |
| ∅ | the empty set | Both |
| A′ | the complement of A | Both |
| {x : …} | the set of all x such that … | Higher tier only |
| ⊂ | is a subset of | Higher tier only |
| n(A) | the number of elements in A | Higher tier only |

## Venn diagram regions (two sets)

| Words | Notation | Regions shaded |
|---|---|---|
| in A and B | A ∩ B | overlap only |
| in A or B or both | A ∪ B | both circles |
| in A only | A ∩ B′ | left circle minus overlap |
| in B only | A′ ∩ B | right circle minus overlap |
| in neither | (A ∪ B)′ or A′ ∩ B′ | outside both circles |
| not in both | (A ∩ B)′ | everything except overlap |
| not in A | A′ | everything outside left circle |
| in exactly one | (A ∩ B′) ∪ (A′ ∩ B) | both circles minus overlap |

Note the pair that is easy to confuse: (A ∪ B)′ is **one** region (outside both circles), while (A ∩ B)′ is **three** regions (everything but the overlap).

## Method in steps

**Listing a combined set**

1. Write out ℰ in full if it is short.
2. List each named set from ℰ.
3. Do brackets first, then complements, then ∩ or ∪.
4. Check each element against the words: "in A and not in B", and so on.

**Filling a Venn diagram with elements**

1. Overlap first (A ∩ B).
2. Then A only and B only.
3. Then everything left over goes outside the circles, inside the rectangle.
4. Count: the total must equal the number of elements in ℰ.

**Filling a Venn diagram with numbers (Higher tier only)**

1. Put the count you know for the innermost region first (the overlap, or the triple overlap for three sets).
2. Subtract outwards: A only = n(A) − n(A ∩ B).
3. If the overlap is unknown, call it x and write every region in terms of x.
4. Use the total n(ℰ) to form an equation.
5. Add all regions to check against n(ℰ).

**Three sets (Higher tier only)**

Start with the centre region (in all three). Next, the three "two sets only" regions: subtract the centre from each pairwise total. Then the three "one set only" regions: subtract the three regions already inside that circle from its total. Finally, "none" = n(ℰ) minus the sum of the seven regions inside the circles.

## Formulae and facts to recall

```
n(A ∪ B) = n(A) + n(B) − n(A ∩ B)
n(A′)    = n(ℰ) − n(A)
n(neither) = n(ℰ) − n(A ∪ B)
```

None of these is printed on the formulae sheet; they follow from counting regions, and a Venn diagram is the safest way to apply them.

## Small worked reminders

**Complement of a union.** ℰ = {1, 2, …, 10}, P = {1, 2, 3, 4}, Q = {3, 4, 5, 6}.
P ∪ Q = {1, 2, 3, 4, 5, 6}, so (P ∪ Q)′ = {7, 8, 9, 10}.

**Algebraic set (Higher tier only).** {x : x is an integer, 0 ≤ x < 4} = {0, 1, 2, 3}. Strict "<" leaves out 4; "≤" keeps 0.

**Subset test (Higher tier only).** Is {1, 5} ⊂ {odd numbers}? Both 1 and 5 are odd, so yes. Is {1, 2} ⊂ {odd numbers}? No, because 2 is not odd. One counter-example is enough.

**Counting (Higher tier only).** n(A) = 15, n(B) = 11, n(A ∩ B) = 6 gives n(A ∪ B) = 15 + 11 − 6 = 20.

**Unknown overlap (Higher tier only).** n(ℰ) = 50, n(A) = 30, n(B) = 26 and 4 elements are in neither set.

```
n(A ∪ B) = 50 − 4 = 46
n(A ∩ B) = 30 + 26 − 46 = 10
A only = 20, B only = 16
Check: 20 + 10 + 16 + 4 = 50 ✓
```

**Three-set centre first (Higher tier only).** n(P ∩ Q ∩ R) = 3 and n(P ∩ Q) = 7. The region "P and Q but not R" holds 7 − 3 = 4, not 7. If n(P) = 20, n(P ∩ R) = 5 and the centre is 3, then "P and R but not Q" holds 2, and "P only" holds 20 − 3 − 4 − 2 = 11.

## Must-know distinctions

- **∈ versus ⊂ (Higher tier only for ⊂).** An element *belongs* to a set: 3 ∈ {1, 3, 5}. A set is a *subset* of a set: {3} ⊂ {1, 3, 5}. Writing 3 ⊂ {1, 3, 5} is wrong.
- **∩ versus ∪.** ∩ is "and", so the answer is usually smaller than either set. ∪ is "or", so the answer is at least as big as either set.
- **∅ versus {0}.** ∅ has no elements; {0} has one element, zero.
- **A′ ∩ B versus (A ∩ B)′.** The first is "B only"; the second is "everything except the overlap".
- **n(A) versus A.** n(A) is a number; A is a set in curly brackets.
- **"Only" versus total.** "18 study Spanish" includes those who study both; "18 study only Spanish" does not.

## Quick self-test

Questions 1–6 suit both tiers; questions 7–11 are Higher tier only.

ℰ = {1, 2, 3, 4, 5, 6, 7, 8}, A = {1, 2, 3}, B = {2, 4, 6, 8}.

1. List A ∪ B.
2. List A ∩ B.
3. List A′.
4. List (A ∪ B)′.
5. Write the symbol for "is not an element of".
6. Write the set of months whose names begin with Z, using a symbol.
7. (Higher) List {x : x is an integer, −1 < x ≤ 3}.
8. (Higher) Find n({x : x is a prime number less than 20}).
9. (Higher) n(A) = 12, n(B) = 9 and n(A ∩ B) = 4. Find n(A ∪ B).
10. (Higher) Of 30 people, 18 have a cat, 15 have a dog and 6 have neither. How many have both?
11. (Higher) Is {2, 4} ⊂ {1, 2, 3, 4}? Give a reason.

### Answers

1. {1, 2, 3, 4, 6, 8}
2. {2}
3. {4, 5, 6, 7, 8}
4. {5, 7}
5. ∉
6. ∅
7. {0, 1, 2, 3}
8. The primes are 2, 3, 5, 7, 11, 13, 17, 19, so n = 8.
9. 12 + 9 − 4 = 17.
10. 30 − 6 = 24 have at least one pet; 18 + 15 − 24 = 9 have both.
11. Yes: 2 and 4 are both elements of {1, 2, 3, 4}.

## Where marks are usually lost

- Listing a shared element twice in a union, which loses the accuracy mark even when the method is clear.
- Taking the complement from the wrong universal set, or forgetting that a complement needs ℰ at all.
- Writing {∅} or {0} for the empty set instead of ∅.
- Shading (A ∩ B)′ when the question asks for (A ∪ B)′, or the other way round.
- Writing the total for a set straight into its "only" region in a survey question.
- Leaving the "neither" region blank, so the diagram does not add up to n(ℰ).
- Giving n(A) as a list of elements, or giving a list when the question asks "how many".
- Including an end point that a strict inequality excludes, such as 4 in {x : 0 ≤ x < 4}.
- Answering "is A a subset of B?" with "no" but no element to show why, which loses the reasoning mark.
- In three-set diagrams, subtracting the centre region only once from a circle's total instead of removing all three inner regions.

## Next steps

Go back to the [study guide](/resources/edexcel-igcse-maths-4ma1-set-language-and-notation/) for any self-test question you got wrong, then try the full [practice set](/resources/edexcel-igcse-maths-4ma1-set-language-and-notation-practice/). For Venn diagrams in probability, see the [statistics and probability revision notes](/resources/edexcel-igcse-maths-4ma1-statistics-and-probability-revision-notes/).

## Official syllabus

Pearson Edexcel International GCSE in Mathematics (Specification A) (4MA1), Specification Issue 2, November 2017, Pearson Education Limited. Topic 1, Numbers and the number system: section 1.5, Set language and notation (Foundation Tier statements A–E; Higher Tier statements A–D), with the notation listed in Appendix 6.
