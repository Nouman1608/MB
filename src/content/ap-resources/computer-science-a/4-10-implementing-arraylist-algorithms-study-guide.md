---
resourceId: "mb-ap-csa-4.10-study-guide"
title: "Implementing ArrayList Algorithms: Study Guide (Computer Science A 4.10)"
description: "How to implement the standard ArrayList algorithms in Java: maximum, sum and average, counting, any and all tests, consecutive pairs, duplicates, shifting, reversing, inserting and deleting, with traces."
course: "computer-science-a"
unit: 4
topics: ["4.10"]
resourceType: "study-guide"
prerequisites:
  - "ArrayList methods and traversals, including safe removal (Topics 4.8 and 4.9)"
  - "Standard array algorithms: maximum, sum, count (Topic 4.5)"
  - "Boolean expressions and short-circuit evaluation (Topics 2.2 and 2.5)"
learningObjectives:
  - "Write the standard traversal algorithms on an ArrayList: minimum or maximum, sum or average, counting, any and all tests, consecutive pairs and duplicate detection"
  - "Write the structural algorithms: shift or rotate, reverse, insert and delete"
  - "Choose a correct starting value and loop bounds, and avoid integer division, out-of-range and division-by-zero errors"
  - "Trace each algorithm and use two lists or a String traversed together in one loop"
skills: ["2", "3", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.10-revision-notes", "mb-ap-csa-4.10-practice", "mb-ap-csa-4.10-checklist"]
next: "mb-ap-csa-4.10-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "Most ArrayList algorithms are a traversal plus a small piece of state: a best-so-far, a running total, a counter or a flag."
  - "Start a maximum from the first element, not from 0; compute an average with a cast so integer division does not lose the decimals, and guard against an empty list."
  - "Pair and duplicate algorithms need index arithmetic: stop one early for consecutive pairs (i < size() - 1) and start the inner loop at i + 1 for duplicates."
  - "Reverse by swapping i with size() - 1 - i for i < size() / 2; rotate with add(remove(0)); insert in order by finding the position first, then add(index, value)."
faqs:
  - question: "Should I start a maximum at 0 or at the first element?"
    answer: "Start at the first element, list.get(0), then compare from index 1. Starting at 0 gives the wrong answer when every value is negative. Make sure the list is not empty before you call get(0)."
  - question: "Why does my average have no decimals?"
    answer: "Dividing an int by an int uses integer division. Cast one operand to double before dividing, for example (double) sum / list.size()."
  - question: "How do I check whether any element has a property?"
    answer: "Return true as soon as one element meets the test, and return false after the loop. For an all test, return false as soon as one element fails, and return true after the loop."
  - question: "Is it safe to use == to compare two Integers from a list?"
    answer: "No. == compares references. Use equals, or unbox to int by assigning to an int variable first."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

## Algorithms are patterns, not tricks

Once you can traverse a list (Topic 4.9), you can implement the **standard ArrayList algorithms**. The course lists them: find a minimum or maximum; compute a sum or average; decide whether **at least one** element has a property; decide whether **all** elements have one; **count** the elements that have one; access **consecutive pairs**; detect **duplicates**; **shift or rotate** elements; **reverse** the order; **insert** elements; **delete** elements. Some algorithms traverse **more than one** String, array or `ArrayList` at once.

Almost all of them follow one recipe:

1. **Initialise** a piece of state before the loop (a best-so-far, a total, a counter, a flag).
2. **Traverse** the list.
3. **Update** the state inside the loop, usually guarded by an `if`.
4. **Return or use** the state after the loop.

Learn the recipe and the right starting value for each pattern, and the bugs you meet in the exam become easy to spot. In all examples the list is `ArrayList<Integer>` and every method was compiled and run.

## Summary patterns

| Algorithm | Starting state | Inside the loop | After the loop |
|---|---|---|---|
| Maximum | `max = list.get(0)` | if `list.get(i) > max`, `max = list.get(i)` | return `max` |
| Minimum | `min = list.get(0)` | if `list.get(i) < min`, update | return `min` |
| Sum | `sum = 0` | `sum += x` | return `sum` |
| Average | `sum = 0` | `sum += x` | `(double) sum / list.size()` |
| Count | `count = 0` | if test, `count++` | return `count` |
| At least one | nothing | if test, `return true` | `return false` |
| All | nothing | if not test, `return false` | `return true` |
| Consecutive pairs | none | compare `get(i)` with `get(i + 1)` for `i < size() - 1` | |
| Duplicates | none | compare `get(i)` with `get(j)` for `j > i` | `return false` |

## Maximum and average

```java
public static int maxOf(ArrayList<Integer> list)
{
    int max = list.get(0);
    for (int i = 1; i < list.size(); i++)
    {
        if (list.get(i) > max)
        {
            max = list.get(i);
        }
    }
    return max;
}

public static double average(ArrayList<Integer> list)
{
    if (list.size() == 0)
    {
        return 0.0;
    }
    int sum = 0;
    for (int x : list)
    {
        sum += x;
    }
    return (double) sum / list.size();
}
```

**Why the first element, not 0.** Suppose the list is `[-5, -2, -9]` and `max` starts at 0. No element beats 0, so the method returns 0, a value that is not in the list. Starting from `list.get(0)` returns -2, which is correct. (both versions were run: 0 and -2) The loop starts at index 1 because index 0 is already in `max`.

**Why the cast.** `sum / list.size()` divides two `int`s. For `[4, 9, 2, 9, 7]` the sum is 31 and the size is 5. The version without the cast returned `6.0`; the version with `(double) sum` returned `6.2`. The cast must be applied to `sum` (or the size) **before** the division, not to the quotient.

**Why the guard.** With an empty list, `sum / list.size()` divides an `int` by 0, which throws an `ArithmeticException` (the run confirmed it). Returning a stated default for an empty list avoids the crash. Likewise `maxOf` would throw an `IndexOutOfBoundsException` on an empty list because of `get(0)`.

## Count, any and all

```java
public static boolean allEven(ArrayList<Integer> list)
{
    for (int x : list)
    {
        if (x % 2 != 0)
        {
            return false;      // one failure is enough
        }
    }
    return true;               // no failures found
}
```

For `[2, 4, 6]` it returns `true`, for `[2, 3, 6]` it returns `false`, and for an empty list it returns `true` (nothing fails). An **at least one** test mirrors it: `return true` inside, `return false` after the loop. Do **not** put the opposite return inside the loop; a loop such as `if (x % 2 == 0) { return true; } else { return false; }` decides on the first element only.

## Consecutive pairs and duplicates

**Consecutive pairs.** To compare each element with the next, stop one early so that `i + 1` is valid:

```java
public static int countIncreases(ArrayList<Integer> list)
{
    int c = 0;
    for (int i = 0; i < list.size() - 1; i++)
    {
        if (list.get(i) < list.get(i + 1))
        {
            c++;
        }
    }
    return c;
}
```

On `[1, 3, 2, 5, 6]` the pairs are (1, 3), (3, 2), (2, 5), (5, 6); three are increases, so the method returns 3 (run and confirmed). Writing `i < list.size()` would make the last pass call `get(size())`, which throws.

**Duplicates.** Compare each element with every **later** one:

```java
public static boolean hasDuplicate(ArrayList<Integer> list)
{
    for (int i = 0; i < list.size(); i++)
    {
        for (int j = i + 1; j < list.size(); j++)
        {
            if (list.get(i).equals(list.get(j)))
            {
                return true;
            }
        }
    }
    return false;
}
```

`[3, 8, 3]` gives `true`; `[3, 8, 4]` gives `false`. Starting `j` at `i + 1` avoids comparing an element with itself, which would always match. The comparison uses `equals` because the elements are `Integer` objects.

## Worked example 1: scores report

**Task.** `scores` holds `[70, 85, 60, 90]`. Find the maximum, the mean, and how many scores are strictly above the mean.

**Step 1: maximum.** Start `max = 70`. Compare 85 (new max 85), 60 (no), 90 (new max 90). Maximum 90.

**Step 2: mean.** Sum 70 + 85 + 60 + 90 = 305. `(double) 305 / 4` = 76.25.

**Step 3: count above.**

| `x` | `x > 76.25`? | `count` |
|---|---|---|
| 70 | no | 0 |
| 85 | yes | 1 |
| 60 | no | 1 |
| 90 | yes | 2 |

Two scores are above the mean. The program printed `76.25 2`. Notice that the comparison `x > avg` mixes an `int` and a `double`; Java widens `x` to a `double` first.

**Check.** The mean (76.25) lies between the minimum (60) and maximum (90), as any mean must. Also, since two scores are above the mean and two below, the result is plausible.

## Worked example 2: reverse, rotate and insert

**Reversing in place.** Swap element `i` with element `size() - 1 - i` for `i` from 0 up to, but not including, `size() / 2` (Figure 1).

<figure>
<svg viewBox="0 0 360 120" role="img" aria-labelledby="rev410-t rev410-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="rev410-t">Reversing a list of five elements by swapping pairs</title>
<desc id="rev410-d">Five boxes holding 1, 2, 3, 4, 5 at indices 0 to 4. Index 0 and index 4 are both labelled swap A. Index 1 and index 3 are both labelled swap B. Index 2 is labelled stays. The text in the caption says only the first half of the list needs to be visited.</desc>
<rect width="360" height="120" fill="#ffffff"/>
<text x="30" y="18" font-size="13" fill="#1d2b44" font-weight="bold">Reverse: swap pairs A and B</text>
<rect x="30" y="34" width="60" height="40" fill="#e8eefc" stroke="#1d2b44" stroke-width="3"/>
<text x="60.0" y="60" text-anchor="middle" font-size="15" fill="#1d2b44">1</text>
<text x="60.0" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">0</text>
<rect x="90" y="34" width="60" height="40" fill="#e8eefc" stroke="#1d2b44" stroke-width="3"/>
<text x="120.0" y="60" text-anchor="middle" font-size="15" fill="#1d2b44">2</text>
<text x="120.0" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">1</text>
<rect x="150" y="34" width="60" height="40" fill="#e8eefc" stroke="#1d2b44" stroke-width="3"/>
<text x="180.0" y="60" text-anchor="middle" font-size="15" fill="#1d2b44">3</text>
<text x="180.0" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">2</text>
<rect x="210" y="34" width="60" height="40" fill="#e8eefc" stroke="#1d2b44" stroke-width="3"/>
<text x="240.0" y="60" text-anchor="middle" font-size="15" fill="#1d2b44">4</text>
<text x="240.0" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">3</text>
<rect x="270" y="34" width="60" height="40" fill="#e8eefc" stroke="#1d2b44" stroke-width="3"/>
<text x="300.0" y="60" text-anchor="middle" font-size="15" fill="#1d2b44">5</text>
<text x="300.0" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">4</text>
<text x="60.0" y="112" text-anchor="middle" font-size="12" fill="#1d2b44" font-weight="bold">A</text>
<text x="300.0" y="112" text-anchor="middle" font-size="12" fill="#1d2b44" font-weight="bold">A</text>
<text x="120.0" y="112" text-anchor="middle" font-size="12" fill="#1d2b44" font-weight="bold">B</text>
<text x="240.0" y="112" text-anchor="middle" font-size="12" fill="#1d2b44" font-weight="bold">B</text>
<text x="180.0" y="112" text-anchor="middle" font-size="12" fill="#1d2b44" font-weight="bold">stays</text>
</svg>
<figcaption>Figure 1. To reverse in place, swap element i with element size() - 1 - i, but only for i from 0 up to (not including) size() / 2. Here size() / 2 is 2, so i takes the values 0 and 1; the middle element stays put.</figcaption>
</figure>

```java
public static void reverse(ArrayList<Integer> list)
{
    for (int i = 0; i < list.size() / 2; i++)
    {
        int j = list.size() - 1 - i;
        int tmp = list.get(i);
        list.set(i, list.get(j));
        list.set(j, tmp);
    }
}
```

Trace on `[1, 2, 3, 4, 5]`: `size() / 2` is 2. At `i` = 0 swap indices 0 and 4 giving `[5, 2, 3, 4, 1]`; at `i` = 1 swap indices 1 and 3 giving `[5, 4, 3, 2, 1]`. The loop stops, and the middle element is untouched. On `[1, 2, 3, 4]` the result is `[4, 3, 2, 1]`.

**The classic bug.** If the loop runs to `list.size()` instead of `list.size() / 2`, every pair is swapped twice. On `[1, 2, 3, 4]` the result was `[1, 2, 3, 4]` again: the reversal undid itself.

**Rotating.** Shift every element one place to the left, wrapping the first element round to the end:

```java
list.add(list.remove(0));            // rotate left:  [1, 2, 3, 4] -> [2, 3, 4, 1]
list.add(0, list.remove(list.size() - 1));   // rotate right: [1, 2, 3, 4] -> [4, 1, 2, 3]
```

`remove` returns the element it removes, so the same expression hands it straight to `add`. Both results were confirmed by running.

**Inserting in order.** The list is sorted ascending. Find the first element that is not smaller than the new value, then insert there:

```java
public static void insertSorted(ArrayList<Integer> list, int value)
{
    int i = 0;
    while (i < list.size() && list.get(i) < value)
    {
        i++;
    }
    list.add(i, value);
}
```

Trace with `[2, 5, 8, 11]` and value 6: `i` = 0 (2 < 6), `i` = 1 (5 < 6), `i` = 2 (8 < 6 is false) so stop; `add(2, 6)` gives `[2, 5, 6, 8, 11]`. For value 20 the loop runs `i` to 4 (`i < size()` fails first, which protects `get(4)`), so `add(4, 20)` appends. For value 1 the loop never moves and `add(0, 1)` inserts at the front. All three outputs matched.

**Order of the conditions matters.** `i < list.size()` must come **before** `list.get(i) < value`. With `&&`, if the first part is false Java skips the second (short-circuit evaluation), so `get(i)` is never called with an invalid index.

## Deleting and traversing two collections

Deleting follows Topic 4.9: loop backwards, or keep the index still after a removal. Never delete in a forward loop that adds one to the index every pass.

Some algorithms use two collections in one loop with a shared index. To count positions where two lists hold equal Strings:

```java
for (int i = 0; i < a.size() && i < b.size(); i++)
{
    if (a.get(i).equals(b.get(i))) { c++; }
}
```

Bounding the loop by both sizes means no `get` is called with an invalid index. On `[a, b, c, d]` and `[a, x, c, y]` the count is 2 (run and confirmed).

## Common misconceptions

- **"A maximum can start at 0."** Only if every value is guaranteed non-negative. Start at the first element.
- **"The average of ints is an int calculation."** Cast before dividing, or you lose the decimals.
- **"An any or all test can return in an else branch."** That decides on the first element.
- **"Duplicate search compares each element with all others."** Start the inner loop at `i + 1`, or every element matches itself.
- **"Reversal visits every element."** Visit only the first half, or the list is reversed twice.
- **"`==` compares two Integers from a list."** It compares references. Use `equals`.
- **"An empty list is an error for every algorithm."** Some, like `allEven`, return a sensible value; others need a guard.

## Where this leads

The same algorithms appear on 2D arrays in Topic 4.13, row by row and column by column. Linear search in Topic 4.14 is the "at least one" pattern returning an index, and the insertion step above is the heart of insertion sort in Topic 4.15. Practise with the [Topic 4.10 practice questions](/advanced-course-resources/computer-science-a/4-10-implementing-arraylist-algorithms-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-a/4-10-implementing-arraylist-algorithms-revision-notes/) and tick off the [checklist](/advanced-course-resources/computer-science-a/4-10-implementing-arraylist-algorithms-checklist/). Next: the [Topic 4.11 study guide on 2D array creation and access](/advanced-course-resources/computer-science-a/4-11-2d-array-creation-access-study-guide/).
