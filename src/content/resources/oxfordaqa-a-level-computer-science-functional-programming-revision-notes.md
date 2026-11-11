---
title: "OxfordAQA A-Level Computer Science: Functional programming (9645) -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS Functional Programming Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Functional programming"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 12
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "functional-programming"
description: "Condensed revision notes on functional programming for OxfordAQA A-level Computer Science: types, number sets, Haskell syntax, folds, lists, self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-06
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

These notes condense topic 12, Functional programming, of the OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards. They cover sections 3.12.1 to 3.12.3, all International A-level only and examined in the written Unit 4 paper. The specification says exam questions on this topic use Haskell, so all code below is Haskell.

Each idea is explained at length in the [study guide](/resources/oxfordaqa-a-level-computer-science-functional-programming/). Then work through the [practice questions](/resources/oxfordaqa-a-level-computer-science-functional-programming-practice/). Course links: [course hub](/boards/oxfordaqa/a-level/computer-science/), [printable checklist](/checklists/oxfordaqa/a-level/computer-science/), and a [free 10-minute diagnostic](/diagnostics/) to find your weak spots.

## 3.12.1 Key definitions

| Term | Definition to learn |
|---|---|
| Function type | f: A → B, where A is the argument type and B is the result type |
| Domain | The set the function's input values are chosen from (A) |
| Co-domain | The set the output values are chosen from (B); not every member has to be output |
| First-class object | A value that may appear in expressions, be assigned to a variable, be passed as an argument and be returned from a function call |
| Function application | Giving particular inputs (arguments) to a function |
| Cartesian product | integer × integer: the set of all pairs of integers, used as the domain of a two-argument function |
| Composition | g ∘ f combines f: A → B and g: B → C into one function of type A → C; f is applied first |
| Higher-order function | A function that takes a function as an argument, returns a function, or both |

### Number sets

| Set | Contents | Quick test |
|---|---|---|
| ℕ | 0, 1, 2, 3, … (zero included) | whole and not negative |
| ℤ | …, -2, -1, 0, 1, 2, … | whole |
| ℚ | fractions of integers, including all integers | can it be written as p/q with integers p and q? |
| ℝ | all real-world quantities | includes values such as π and √2 |

ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ. When asked for "the smallest set", pick the first one in that chain that contains the number.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-computer-science-functional-programming--16-number-sets.webp" width="900" height="880" alt="Four nested boxes. The outer box is the real numbers, which holds pi and root 2. Inside it are the rational numbers, holding 2.5 and 7 over 3. Inside that are the integers, holding minus 6. The innermost box is the natural numbers, which include zero, holding 0, 15 and 40. Every natural number is an integer, every integer is rational and every rational is real, so minus 6 is in the integers, rationals and reals but not the naturals." loading="lazy">
  <figcaption>Natural, integer, rational and real numbers nested, with the lesson’s examples placed.</figcaption>
</figure>


### Composition reminder

Let f(x) = x + 5 and g(y) = 2y on ℤ.

```
(g ∘ f)(3) = g(f(3)) = g(8)  = 16
(f ∘ g)(3) = f(g(3)) = f(6)  = 11
```

Read g ∘ f as "g after f". In Haskell: `(g . f) 3`.

**Type check:** the co-domain of the first function applied must match the domain of the second. If f: Char → ℕ and g: ℕ → Boolean, then g ∘ f: Char → Boolean.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-computer-science-functional-programming--15-domain-codomain.webp" width="900" height="900" alt="Two mapping diagrams. For sign from the integers to the set minus 1, 0, 1, inputs minus 6, 0 and 40 map to minus 1, 0 and 1, so every member of the co-domain is used. For toDigit from digit characters to the natural numbers, the characters 0, 3 and 9 map to the numbers 0, 3 and 9; only 0 to 9 are ever output, so most of the co-domain, such as 10, 11 and so on, is never used." loading="lazy">
  <figcaption>Domain and co-domain shown as mappings; not every co-domain member needs to be output.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-computer-science-functional-programming--17-composition-order.webp" width="900" height="700" alt="Two machines in a row. For g after f, the input 4 goes into f(x) = 3x minus 1 giving 11, and then into g(y) = y squared giving 121. For f after g, the input 4 goes into g first giving 16, then into f giving 47. The two answers 121 and 47 differ, so the order of composition matters. In g composed with f, the function applied first, f, is written on the right." loading="lazy">
  <figcaption>Composition order matters: 121 against 47 for the same input.</figcaption>
</figure>


## 3.12.2 Haskell syntax at a glance

| You want | Write | Note |
|---|---|---|
| Define a function | `name a b = expression` | no brackets or commas |
| Apply it | `name 7 2` | not `name(7, 2)` |
| Add, subtract, multiply | `+  -  *` | |
| Divide | `/` | fractional result |
| Whole-number division | `` `div` `` and `` `mod` `` | ``17 `div` 5`` = 3, ``17 `mod` 5`` = 2 |
| Power | `^` | `3 ^ 4` = 81 |
| Equal / not equal | `==`  `/=` | `/=` is not `!=` |
| Greater / less | `>  <  >=  <=` | |
| And / or / not | `&&  \|\|  not` | `not` is a function: `not (x > 2)` |

### Method in steps: writing a recursive function

1. Decide the **base case**: the simplest input, answered without recursion (often 0 or `[]`).
2. Write it as the **first** equation, with that value as the pattern.
3. Write the **recursive case**: do one piece of work and call the function on a smaller input.
4. Put brackets round any argument that is an expression: `f (n - 1)`, `g (x * 2)`.
5. Trace a small input by hand to check it reaches the base case.

Haskell uses **pattern matching**: it tries equations top to bottom and uses the first pattern that fits. A pattern can be a literal (`0`, `[]`), a name (`n`, matching anything), `(x:xs)` (any non-empty list) or `[x]` (exactly one item).

### map, filter, folds

| Function | What it does | Example | Result |
|---|---|---|---|
| `map f xs` | applies f to every element | `map (+1) [3, 8, 0]` | [4,9,1] |
| `filter p xs` | keeps elements where p is True | `filter even [3, 8, 0]` | [8,0] |
| `foldl f z xs` | combines from the left, starting with z | `foldl max 0 [8, 3, 12, 5]` | 12 |
| `foldr f z xs` | combines from the right, starting with z | `foldr (+) 0 [6, 7]` | 13 |

Expansions to copy in an exam:

```
foldl f z [a, b, c]  =  f (f (f z a) b) c      running value on the LEFT
foldr f z [a, b, c]  =  f a (f b (f c z))      list item on the LEFT
```

The specification describes `foldr` as starting with the rightmost item and working backward. In the Haskell grouping above, the rightmost item meets the start value first (`f c z` is innermost) and the result works back to the head.

For subtraction:

```
foldl (-) 50 [6, 2]  =  (50 - 6) - 2  = 42
foldr (-) 50 [6, 2]  =  6 - (2 - 50)  = 54
```

For `+` and `*` both folds give the same value. Start value: 0 for `+`, 1 for `*`.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-computer-science-functional-programming--19-filter-map-fold.webp" width="900" height="800" alt="A list 12, 7, 30, 5, 9 passes through three stages. Filter odd keeps 7, 5 and 9 and drops 12 and 30. Map triple turns them into 21, 15 and 27. Fold with plus and start value 0 adds them to 63." loading="lazy">
  <figcaption>filter, map and foldl applied in turn give 63.</figcaption>
</figure>


### Method in steps: evaluating a nested expression

1. Find the innermost bracket and evaluate it first.
2. Write down the intermediate list after each step, so working can be followed.
3. For a fold, write the full bracketed expansion before doing any arithmetic.
4. Check the final type: `map` and `filter` give lists; a fold over numbers gives one number.

Worked reminder:

```haskell
foldr (*) 1 (filter (> 2) (map (`div` 2) [9, 4, 13]))
```

``map (`div` 2)`` gives [4, 2, 6]; `filter (> 2)` gives [4, 6]; the fold gives 4 * (6 * 1) = **24**.

### Higher-order: taking or returning a function

```haskell
onBoth f a b = f a + f b      -- takes a function
addN n = (+ n)                -- returns a function
```

`onBoth (^ 2) 3 4` is 9 + 16 = **25**. `addN 4` is a function; `(addN 4) 10` is **14**. Both are higher-order. A function such as `sumList` below is recursive but not higher-order, because none of its arguments or results is a function.

## 3.12.3 Lists

```haskell
pair  = [5, 2]
blank = []
```

| Operation | Haskell | On `pair` | Result |
|---|---|---|---|
| head | `head pair` | first element | 5 |
| tail | `tail pair` | the rest, always a list | [2] |
| empty test | `null pair` | | False |
| length | `length pair` | | 2 |
| empty list | `[]` | | [] |
| append | `pair ++ [9]` | both sides are lists | [5,2,9] |

- `[5, 2]` is the same list as `5:[2]` and `5:2:[]`.
- `tail [5]` is `[]`; `null []` is `True`; `length []` is 0.
- `head []` and `tail []` cause an error.

### Using head and tail in a function

```haskell
sumList [] = 0
sumList (x:xs) = x + sumList xs
```

Called with `[40, 2, 7]`, x is 40 and xs is [2, 7] on the first call. The result is 49.

### Must-know distinctions

- **Domain vs co-domain:** inputs come from the domain; outputs come from the co-domain.
- **Co-domain vs outputs actually produced:** `sqr: ℝ → ℝ` never outputs a negative, but ℝ is still its co-domain.
- **g ∘ f vs f ∘ g:** usually different. The right-hand function is applied first.
- **Head vs tail:** the head is an element; the tail is a list.
- **`:` vs `++`:** `:` puts one element on the front (`5:[2]`); `++` joins two lists (`[5] ++ [2]`).
- **foldl vs foldr:** same answer for + and *, but they can differ for − and /.
- **map vs filter:** map keeps the length and changes values; filter keeps values and may change the length.

## Quick self-test

1. A function is written h: ℤ → ℕ. State its domain and its co-domain.
2. According to the specification, is 0 a member of ℕ?
3. Give the smallest of ℕ, ℤ, ℚ, ℝ that contains -3/8.
4. f(x) = x − 2 and g(y) = y³. Evaluate (g ∘ f)(5).
5. Evaluate `map (*2) [6, 1, 9]`.
6. Evaluate `filter (/= 4) [4, 1, 4, 8]`.
7. Evaluate `foldl (-) 20 [5, 2]`.
8. Evaluate `foldr (-) 20 [5, 2]`.
9. Evaluate `tail [8]`.
10. Evaluate `[3, 0, 3] ++ []`.
11. Evaluate `5 /= 5 || not (2 > 3)`.
12. Name the four things a first-class object may do.

### Answers

1. Domain ℤ; co-domain ℕ.
2. Yes: ℕ = {0, 1, 2, 3, …}.
3. ℚ (it is a fraction of integers but not a whole number).
4. f(5) = 3, then g(3) = 27, so **27**.
5. **[12,2,18]**
6. **[1,8]**
7. (20 − 5) − 2 = **13**
8. 5 − (2 − 20) = 5 − (−18) = **23**
9. **[]** (the empty list, not nothing)
10. **[3,0,3]**
11. `5 /= 5` is False; `not (2 > 3)` is True; False || True is **True**.
12. Appear in expressions; be assigned to a variable; be passed as an argument; be returned from a function call.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-computer-science-functional-programming--18-recursion-power.webp" width="900" height="830" alt="Five frames show the recursive calls going down: power 3 4, power 3 3, power 3 2, power 3 1 and power 3 0. The last is the base case, which gives 1 directly. The answers then come back up: 3 times 1 is 3, 3 times 3 is 9, 3 times 9 is 27 and 3 times 27 is 81. So power 3 4 is 81." loading="lazy">
  <figcaption>Calls go down to the base case and answers come back up to 81.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-computer-science-functional-programming--20-foldl-foldr.webp" width="900" height="930" alt="The list 10, 4, 3 is folded with subtraction and start value 0. Foldl works from the left: 0 minus 10 is minus 10, minus 10 minus 4 is minus 14, minus 14 minus 3 is minus 17, grouped as ((0 minus 10) minus 4) minus 3. Foldr works from the right: 3 minus 0 is 3, 4 minus 3 is 1, 10 minus 1 is 9, grouped as 10 minus (4 minus (3 minus 0)). The answers are minus 17 and 9. For plus or times the two folds give the same answer." loading="lazy">
  <figcaption>foldl and foldr with subtraction give −17 and 9.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-computer-science-functional-programming--21-head-tail-list.webp" width="900" height="810" alt="The list 14, 9, 21, 6 is a head, 14, followed by a tail which is itself a list, 9, 21, 6. The function countItems drops the head each time and adds 1, so four rows show the list shrinking: after one call 9, 21, 6 remain, then 21, 6, then 6, then the empty list, which is the base case giving 0. The total is 1 plus 1 plus 1 plus 1 plus 0, which is 4." loading="lazy">
  <figcaption>A list is a head and a tail, and countItems counts by dropping heads.</figcaption>
</figure>


## Where marks are usually lost

- Describing the co-domain as "the set of outputs" instead of the set outputs are chosen from.
- Putting a negative number or 0.5 in ℕ, or forgetting that ℕ includes 0 in this specification.
- Evaluating g ∘ f by applying g first.
- Calling a function higher-order just because it is recursive. It must take or return a function.
- Writing `fact n - 1` instead of `fact (n - 1)` in a recursive case.
- A recursive case placed above the base case, so the base case never matches.
- Expanding `foldr (-)` as if it were `foldl`, or putting the start value on the wrong side.
- Writing `tail [5, 2]` as 2 rather than [2].
- Using `++` with a bare element, such as `xs ++ 9`.
- Giving the trace result but no working when the question asks you to show how it is evaluated.

## Frequently asked questions

**What is the difference between the domain and the co-domain of a function?**
For a function f: A → B, the domain A is the set the input values are chosen from, and the co-domain B is the set the output values are chosen from. The co-domain is not just the outputs actually produced; describing it that way loses marks.

**What makes a function higher-order in Haskell?**
A function is higher-order if it takes a function as an argument, returns a function as its result, or both. Being recursive does not make a function higher-order.

**What is the difference between foldl and foldr?**
foldl combines a list from the left, starting with the initial value, and foldr works from the rightmost item backward. They give the same answer for + and *, but can give different answers for subtraction and division.

**What is the difference between : and ++ in Haskell?**
The : operator puts one element on the front of a list, as in 5:[2]. The ++ operator joins two lists, so a single item must be written in brackets, as in xs ++ [9].

**What is a common mistake when writing a recursive function in Haskell?**
Leaving brackets out of the recursive call, such as writing fact n - 1 instead of fact (n - 1), is a common error. Another is placing the recursive case above the base case, so the base case never matches.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA. These notes cover section 3.12 Functional programming (3.12.1 to 3.12.3).
