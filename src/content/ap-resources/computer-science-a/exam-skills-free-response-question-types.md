---
resourceId: "mb-ap-csa-exam-skills-free-response-question-types"
title: "The Four Free-Response Question Types: Exam Skills Guide (Computer Science A)"
description: "How to approach each of the four Java free-response questions (methods and control, class design, ArrayList data analysis, 2D array), with original examples, solutions and a suggested rubric."
course: "computer-science-a"
unit: 1
topics: []
resourceType: "exam-skills"
prerequisites:
  - "You have studied all four units of the course, or at least the topics each example names"
  - "You can write Java by hand without an IDE or a compiler to catch your mistakes"
learningObjectives:
  - "Recognise the four free-response question types and say what each one tests"
  - "Write a method that uses a loop, a condition and a helper method the question supplies"
  - "Write a complete class from a written specification: fields, constructor, methods and toString"
  - "Traverse and modify an ArrayList correctly, including removing elements while you loop"
  - "Traverse a 2D array by rows and by columns and keep row and column indexes the right way round"
  - "Check a handwritten solution against the specification before moving on"
skills: ["1", "2", "3"]
studyMinutes: 60
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section. Every example here can be worked by hand. The Java Quick Reference lists the library methods you may use, so write their names exactly."
related: ["mb-ap-csa-2.8-study-guide", "mb-ap-csa-3.4-study-guide", "mb-ap-csa-3.5-study-guide", "mb-ap-csa-4.9-study-guide", "mb-ap-csa-4.10-study-guide", "mb-ap-csa-4.12-study-guide", "mb-ap-csa-4.13-study-guide", "mb-ap-csa-exam-skills-code-tracing-and-java-pitfalls"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "The free-response section has four questions in a fixed order: methods and control structures, class design, data analysis with ArrayList, and 2D array. All four ask you to write Java code."
  - "Read the specification and the examples before you write; the question tells you exactly what each method must return and which helper methods you may call."
  - "Use the methods the question provides instead of rewriting their logic, and use the exact names, parameter types and return types from the given signatures."
  - "Most lost points come from the same handful of slips: off-by-one loop bounds, removing from an ArrayList in a forward loop, swapping row and column, and returning too early."
  - "Test your solution on the question's own example by hand, writing the values of your variables as you go."
faqs:
  - question: "Does my code have to be perfect to earn points?"
    answer: "No. Each question is scored against a list of separate things the code must do, such as 'traverses every element' or 'returns the correct value'. A solution with one flaw can still earn most points. A minor syntax slip is usually forgiven, but a logic error is not, so spend your checking time on logic."
  - question: "Can I write helper methods or extra variables of my own?"
    answer: "Yes, unless the question says otherwise. Extra local variables are normal. Add a helper method only if it makes the solution simpler, and make sure it is complete and consistent with the rest of your code."
  - question: "What if I cannot solve one part that a later part uses?"
    answer: "Call the method anyway, as though it works as specified. The question usually lets you use a method you were asked to write in an earlier part, and the later part is marked on its own logic."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

## How to use this guide

This guide is for anyone preparing for the free-response section of the Computer Science A exam. It does not teach new Java. It shows how each of the four question types is built, what a complete answer contains, and the mistakes that cost points. Every question, class and data set here is **original Marlbridge practice**: the scenarios are invented and none of it comes from past exam papers. The points shown are a **suggested Marlbridge rubric** that mirrors the point totals in the course framework; it is not official scoring.

Try each question on paper before you open the model solution. Every solution below was compiled and run with a Java compiler against the sample data shown, so the printed results are real.

## The section at a glance

| Feature | Detail |
|---|---|
| Questions | 4, all answered in Java |
| Time | 90 minutes (about 22 minutes per question on average) |
| Weight | 45% of the exam |
| Question 1 | Methods and control structures (7 points) |
| Question 2 | Class design (7 points) |
| Question 3 | Data analysis with ArrayList (5 points) |
| Question 4 | 2D array (6 points) |
| Practice assessed | Practice 2, Develop Code, on every question |
| Tools | No calculator; the Java Quick Reference is provided in the exam app |

The order never changes, so you know in advance what the second question will ask for. Use that: before the exam, rehearse one answer of each type until the shape feels automatic.

## A routine for every question

1. **Read the whole question once**, including every part, the examples and the class given to you. Underline each method name you are allowed to call.
2. **Copy the signature exactly.** The method name, the parameter types and the return type are given. Writing `public int countBusyPeakHours(int[] rides)` correctly is worth thinking about for ten seconds, because everything else depends on it.
3. **Say the algorithm in one sentence** in the margin: "loop over every hour, count the ones that are peak and busy". If you cannot say it, you cannot code it.
4. **Write the code**, using the given helpers and the Quick Reference method names.
5. **Trace your code on the question's example.** Write the loop variable and the result variable on each pass. Fix what the example shows to be wrong.
6. **Check three things**: every path through the method returns a value of the right type; the loop bounds are right at both ends; you did not change a value that should be left alone.

Think of the points as a checklist the scorer holds against your code. A solution that visibly does each job on the list will earn the points even if the style is not elegant.

## Question 1: methods and control structures

This question gives you a class with some existing methods and asks you to write one or two methods that use loops, conditions, and calls to the methods already there. It usually involves a one-dimensional array, a String or simple arithmetic. It rewards clear control flow and **using what you are given**.

### Worked example 1

**Question (original).** The class `BikeShare` stores the busy threshold for a city's bike-hire scheme. The private method `isPeak` is already written: hours 7 to 9 and 16 to 18 are peak hours. (a) Write `countBusyPeakHours`, which returns the number of peak hours in which more than `threshold` rides started. The array `rides` has 24 entries and `rides[h]` is the number of rides that started in hour `h`. (b) Write `nextBusyPeakHour`, which returns the first peak hour at or after `start` with more than `threshold` rides, or -1 if there is none.

**Model solution.**

```java
public class BikeShare
{
    private int threshold;

    public BikeShare(int threshold)
    {
        this.threshold = threshold;
    }

    /** Hours 7-9 and 16-18 are peak hours. */
    private boolean isPeak(int hour)
    {
        return (hour >= 7 && hour <= 9) || (hour >= 16 && hour <= 18);
    }

    /** rides[h] is the number of rides starting in hour h (0 to 23).
     *  Returns how many peak hours had more than threshold rides. */
    public int countBusyPeakHours(int[] rides)
    {
        int count = 0;
        for (int h = 0; h < rides.length; h++)
        {
            if (isPeak(h) && rides[h] > threshold)
            {
                count++;
            }
        }
        return count;
    }

    /** Returns the first peak hour at or after start with more than
     *  threshold rides, or -1 if there is none. */
    public int nextBusyPeakHour(int[] rides, int start)
    {
        for (int h = start; h < rides.length; h++)
        {
            if (isPeak(h) && rides[h] > threshold)
            {
                return h;
            }
        }
        return -1;
    }
}
```

For `rides[7] = 40`, `rides[8] = 55`, `rides[9] = 20`, `rides[12] = 90`, `rides[17] = 61` (all other hours zero) and a threshold of 30, the code prints `3` for `countBusyPeakHours`, `17` for `nextBusyPeakHour(rides, 9)` and `-1` for `nextBusyPeakHour(rides, 18)`. Hour 12 has the most rides but is not a peak hour, so it is correctly ignored.

| Suggested Marlbridge rubric | Point |
|---|---|
| (a) Loops over every hour of the array with correct bounds | 1 |
| (a) Calls `isPeak` and compares with `threshold` using the right operators | 1 |
| (a) Counts and returns the result | 1 |
| (b) Starts the loop at `start` and stays in range | 1 |
| (b) Tests both peak status and the threshold in one condition | 1 |
| (b) Returns the hour as soon as it is found | 1 |
| (b) Returns -1 only after the loop has finished | 1 |

**Where points are lost.** Calling `isPeak` is the point of the question. A student who rewrites the 7-to-9 and 16-to-18 test inside the loop has repeated logic the question handed over, and any slip in the copy costs points. The second common loss is a `return -1` placed inside the loop's `else`: it ends the search at the first non-matching hour.

## Question 2: class design

You are given a description of an object and asked to write the whole class. The description lists what the class stores and what each method must do. It rewards **encapsulation and exact conformity to the specification**.

### Worked example 2

**Question (original).** A shop issues discount coupons. A `Coupon` has a code (a String), a percentage off (an int from 1 to 100) and a number of uses left. Write the complete class. The constructor takes the code, the percentage and the number of uses. The method `isValid` returns true when at least one use is left. The method `redeem(double price)` returns the discounted price and uses up one use; if the coupon is no longer valid it returns the price unchanged. The `toString` method returns text such as `SPRING: 25% off, 2 left`.

**Model solution.**

```java
public class Coupon
{
    private String code;
    private int percentOff;
    private int usesLeft;

    public Coupon(String code, int percentOff, int uses)
    {
        this.code = code;
        this.percentOff = percentOff;
        usesLeft = uses;
    }

    public boolean isValid()
    {
        return usesLeft > 0;
    }

    /** Returns the price after discount and uses up one use.
     *  If the coupon is not valid, returns price unchanged. */
    public double redeem(double price)
    {
        if (!isValid())
        {
            return price;
        }
        usesLeft--;
        return price * (100 - percentOff) / 100.0;
    }

    public String toString()
    {
        return code + ": " + percentOff + "% off, " + usesLeft + " left";
    }
}
```

Redeeming 80.0 gives 60.0 (25% off). Two uses are spent, so the third `redeem(10.0)` returns 10.0 unchanged, `isValid()` is `false`, and `toString` gives `SPRING: 25% off, 0 left`.

| Suggested Marlbridge rubric | Point |
|---|---|
| Class header and private instance variables of suitable types | 1 |
| Constructor with the right parameters that initialises every field | 1 |
| `isValid` returns the correct boolean | 1 |
| `redeem` returns the price unchanged for an invalid coupon | 1 |
| `redeem` reduces the number of uses only when it is valid | 1 |
| `redeem` calculates the discounted price as a double | 1 |
| `toString` returns a String in the specified format | 1 |

**Where points are lost.**

- **Public fields.** The instance variables must be `private`; methods and the constructor are `public`.
- **Integer division.** `price * (100 - percentOff) / 100` is fine because `price` is a double, but `(100 - percentOff) / 100` on its own is an integer division and gives 0 for any discount above 0. Keep a double in the expression, as the solution does with `100.0`.
- **Printing instead of returning.** The specification says `toString` returns a String. Calling `System.out.println` inside it earns nothing.
- **Shadowed fields.** A constructor written `String code = code;` or with a local declaration of the same name leaves the field unset. Use `this.code = code;`.

## Question 3: data analysis with ArrayList

You are given a class that holds an `ArrayList` of objects of another class (with getters) and asked to write methods that search, count, total or remove. It rewards **correct traversal and correct use of `size`, `get`, `add`, `set` and `remove`**.

### Worked example 3

**Question (original).** The class `Booking` has `getGuest()`, `getNights()` and `isCancelled()`. The class `BookingList` stores an `ArrayList<Booking>` named `bookings`. (a) Write `nightsFor(String guest)`, which returns the total nights booked by guests with that name. (b) Write `removeCancelled`, which removes every cancelled booking from the list and returns the number removed.

**Model solution.**

```java
import java.util.ArrayList;

public class BookingList
{
    private ArrayList<Booking> bookings;

    public BookingList(ArrayList<Booking> bookings)
    {
        this.bookings = bookings;
    }

    /** Removes every cancelled booking and returns how many were removed. */
    public int removeCancelled()
    {
        int removed = 0;
        for (int i = bookings.size() - 1; i >= 0; i--)
        {
            if (bookings.get(i).isCancelled())
            {
                bookings.remove(i);
                removed++;
            }
        }
        return removed;
    }

    /** Returns the total nights booked by guests whose name is guest. */
    public int nightsFor(String guest)
    {
        int total = 0;
        for (Booking b : bookings)
        {
            if (b.getGuest().equals(guest))
            {
                total += b.getNights();
            }
        }
        return total;
    }
}
```

With bookings Ana/2, Ben/3 (cancelled), Cy/1 (cancelled) and Ana/4, the call `nightsFor("Ana")` gives `6` and `removeCancelled()` gives `2`, leaving `[Ana/2, Ana/4]`.

| Suggested Marlbridge rubric | Point |
|---|---|
| (a) Accesses every element of the list | 1 |
| (a) Compares Strings with `equals` and accumulates and returns the total | 1 |
| (b) Accesses every element and tests `isCancelled` | 1 |
| (b) Removes elements without skipping or going out of range | 1 |
| (b) Counts the removals and returns the count | 1 |

**The forward-loop trap.** The solution loops from the end. Here is what happens with a forward loop that calls `remove(i)` and then moves on. For the list Ben (cancelled), Cy (cancelled), Di, the loop removes Ben at index 0, the list shifts left, `i` becomes 1 and Cy, now at index 0, is never examined. Running that code leaves `[Cy/1, Di/2]`: a cancelled booking survives. Two safe repairs are looping backwards, as above, or looping forwards and only incrementing `i` when you did *not* remove. Either earns the point. Calling `remove` inside a `for-each` loop is not safe either: it usually throws an exception.

Remember also that `ArrayList` uses `size()` and `get(i)`, not `length` and `[i]`. Mixing these up is one of the most common slips on this question.

## Question 4: 2D array

The last question gives you a 2D array, often as an instance variable of a class, and asks for two methods using nested loops. One tends to be by rows and the other by columns, or one asks for a search or count and the other for a more careful rule. It rewards **accurate nested loops with rows and columns the right way round**.

### Worked example 4

**Question (original).** The class `Seats` stores a rectangular 2D array `taken` in which `taken[r][c]` is `true` when the seat in row `r`, column `c` is taken. (a) Write `emptiestRow`, which returns the number of the row with the most empty seats; if two rows tie, return the lower row number. (b) Write `countFullColumns`, which returns how many columns have every seat taken.

**Model solution.**

```java
public class Seats
{
    private boolean[][] taken;

    public Seats(boolean[][] taken)
    {
        this.taken = taken;
    }

    /** Returns the number of the row with the most empty seats;
     *  if tied, the lowest row number. */
    public int emptiestRow()
    {
        int best = 0;
        int bestEmpty = -1;
        for (int r = 0; r < taken.length; r++)
        {
            int empty = 0;
            for (int c = 0; c < taken[r].length; c++)
            {
                if (!taken[r][c])
                {
                    empty++;
                }
            }
            if (empty > bestEmpty)
            {
                bestEmpty = empty;
                best = r;
            }
        }
        return best;
    }

    /** Returns the number of columns in which every seat is taken. */
    public int countFullColumns()
    {
        int full = 0;
        for (int c = 0; c < taken[0].length; c++)
        {
            boolean allTaken = true;
            for (int r = 0; r < taken.length; r++)
            {
                if (!taken[r][c])
                {
                    allTaken = false;
                }
            }
            if (allTaken)
            {
                full++;
            }
        }
        return full;
    }
}
```

For the three rows `{true, false, true, true}`, `{true, true, false, true}` and `{true, false, false, true}`, the empties per row are 1, 1 and 2, so `emptiestRow()` returns `2`. Columns 0 and 3 are full, so `countFullColumns()` returns `2`.

| Suggested Marlbridge rubric | Point |
|---|---|
| (a) Traverses every row and every seat in it | 1 |
| (a) Counts the empty seats for each row | 1 |
| (a) Tracks the best row so far and returns its index, keeping the lower row on a tie | 1 |
| (b) Traverses with columns in the outer loop (or otherwise checks each column fully) | 1 |
| (b) Detects a column in which every seat is taken | 1 |
| (b) Counts and returns the number of full columns | 1 |

**Where points are lost.**

- **Swapped bounds.** The number of rows is `taken.length`; the number of columns is `taken[0].length` (or `taken[r].length`). Writing `taken[r][c]` with the bounds the wrong way round throws an exception on a non-square grid, and the examples in these questions are rarely square.
- **Reset in the wrong place.** The `empty` counter must be declared inside the row loop and the `allTaken` flag inside the column loop. Declared outside, they carry values from the previous row or column.
- **Ties.** `>` keeps the first row with the maximum. Changing it to `>=` returns the last one, which contradicts the specification.

## Habits that separate full-credit answers

| Habit | Why it matters |
|---|---|
| Use given methods and constructors | The question is testing whether you read it; copying their logic risks mistakes and wastes time |
| Return a value of the declared type on every path | A method that can finish without returning does not compile |
| Return, do not print | `System.out.println` shows text; it does not give the caller a value |
| Compare Strings with `equals`, never `==` | `==` compares references and can be false for equal text |
| Keep loop variables local | Declaring `i` in the `for` header stops it leaking into later code |
| Name things as given | Case matters: `getGuest` and `getguest` are different methods |
| Do not change parameters you were told to leave alone | An array or ArrayList passed in is the caller's object, so altering it changes the caller's data |
| Write braces for every loop and `if` | Missing braces make the second statement run every time |

## A pacing plan

With 90 minutes for four questions, a workable split is about 25 minutes each for Questions 1 and 2, 18 minutes for Question 3 and 20 minutes for Question 4, leaving a few minutes to check. Adjust it to your strengths, but do not let one part take more than its share: an unattempted part earns nothing, and a partly correct solution to every part earns something on each.

If you are stuck, write the loop skeleton (the traversal) first. The traversal and the return statement are typically worth points by themselves, and once they are on the page the missing condition is easier to find.

## Common misconceptions

- **"My code must be neat to earn the point."** Points are earned for what the code does. Clear indentation helps *you* spot errors; it is not itself scored.
- **"A getter and a field are interchangeable."** Inside the class that owns the field you may use the field; in another class you must call the getter, because fields are private.
- **"`length`, `length()` and `size()` are the same."** Arrays use `length` (no parentheses), a String uses `length()`, an ArrayList uses `size()`.
- **"A comment saying what I meant will save my code."** The scorer reads the code, not your intention.
- **"I should keep every part's work in one method."** Split the work between methods when the question gives you a helper; the rubric looks for the call.

## Where to practise next

Choose the topic behind the question type you find hardest:

- [Methods: how to write them: study guide](/advanced-course-resources/computer-science-a/3-5-methods-how-write-them-study-guide/)
- [Constructors: study guide](/advanced-course-resources/computer-science-a/3-4-constructors-study-guide/)
- [ArrayList traversals: study guide](/advanced-course-resources/computer-science-a/4-9-arraylist-traversals-study-guide/)
- [Implementing ArrayList algorithms: study guide](/advanced-course-resources/computer-science-a/4-10-implementing-arraylist-algorithms-study-guide/)
- [2D array traversals: study guide](/advanced-course-resources/computer-science-a/4-12-2d-array-traversals-study-guide/)
- [Implementing 2D array algorithms: study guide](/advanced-course-resources/computer-science-a/4-13-implementing-2d-array-algorithms-study-guide/)
- [Code tracing and Java pitfalls: exam skills guide](/advanced-course-resources/computer-science-a/exam-skills-code-tracing-and-java-pitfalls/)
- [Unit 4 mixed review](/advanced-course-resources/computer-science-a/unit-4-review/)
