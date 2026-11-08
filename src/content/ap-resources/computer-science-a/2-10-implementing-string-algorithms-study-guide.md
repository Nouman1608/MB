---
resourceId: "mb-ap-csa-2.10-study-guide"
title: "Implementing String Algorithms: Study Guide (Computer Science A 2.10)"
description: "Learn standard algorithms that process strings with loops, with a first-principles explanation, traced Java examples, a diagram, two worked examples and the mistakes to avoid."
course: "computer-science-a"
unit: 2
topics: ["2.10"]
resourceType: "study-guide"
prerequisites:
  - "String methods length, substring, indexOf, equals and compareTo (Topic 1.15)"
  - "for and while loops (Topics 2.7 and 2.8)"
prerequisiteResources: ["mb-ap-csa-2.9-study-guide"]
learningObjectives:
  - "Traverse a String with a loop using length and substring(i, i + 1), without going out of range"
  - "Write standard string algorithms: check a property, count matching substrings, and build a reversed string"
  - "Explain that String objects cannot be changed, so methods return new strings that must be assigned"
  - "Diagnose StringIndexOutOfBoundsException, off-by-one errors in substring windows and compile errors in string code"
skills: ["2", "3"]
studyMinutes: 45
difficulty: "stretch"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-2.10-revision-notes", "mb-ap-csa-2.10-practice", "mb-ap-csa-2.10-checklist"]
next: "mb-ap-csa-2.10-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources:
  - "ced-computer-science-a"
  - "page-computer-science-a"
  - "exam-computer-science-a"
keyPoints:
  - "A String of length n has valid indexes 0 to n - 1. substring(a, b) returns the characters from index a up to, but not including, index b."
  - "To visit every character, loop i from 0 to length() - 1 and use substring(i, i + 1)."
  - "Compare the contents of strings with equals (never ==), and use indexOf to test whether a piece occurs: -1 means not found."
  - "Strings are immutable: substring, concatenation and the like return a new String, so the result must be stored or used."
  - "A window of length k can start at indexes 0 to length() - k; going one further throws StringIndexOutOfBoundsException."
faqs:
  - question: "How do I get one character of a String?"
    answer: "Use substring(i, i + 1), which returns a String of length 1. Compare it with another String using equals. This course's Java Quick Reference gives substring, length, indexOf, equals and compareTo as the String methods."
  - question: "What is a StringIndexOutOfBoundsException?"
    answer: "The error thrown when an index or range is outside the String. For a String of length n, indexes must be between 0 and n - 1, and substring(a, b) needs 0 <= a <= b <= n."
  - question: "Why does s.substring(1); not change s?"
    answer: "Strings are immutable. The method returns a new String and leaves s unchanged. If you want to keep the result you must assign it, for example s = s.substring(1);."
  - question: "How do I reverse a String?"
    answer: "Start with an empty String and loop through the original from the first character to the last. On each pass put the current character in front of the result: result = s.substring(i, i + 1) + result;."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Strings as sequences you can loop over

A `String` is an ordered sequence of characters, and you have already used methods to ask about it. Now you will combine those methods with loops to write real algorithms. The four methods you need are all in the Java Quick Reference:

| Method | What it returns |
|---|---|
| `int length()` | the number of characters |
| `String substring(int from, int to)` | the characters from index `from` up to, but **not including**, `to` |
| `String substring(int from)` | the characters from `from` to the end |
| `int indexOf(String str)` | the index of the first occurrence of `str`, or -1 if there is none |
| `boolean equals(Object other)` | true if the characters are the same |
| `int compareTo(String other)` | negative, zero or positive, by alphabetical order |

A String has index values from 0 to one less than its length. Asking for a position outside that range causes a `StringIndexOutOfBoundsException`.

<figure>
<svg viewBox="0 0 560 250" role="img" aria-labelledby="f210-title f210-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="f210-title">Indexes of the String rainbow and the substring from 2 to 5</title>
<desc id="f210-desc">The seven characters of the String rainbow are shown in boxes with indexes 0 to 6 beneath them: r 0, a 1, i 2, n 3, b 4, o 5, w 6. The boxes at index 2, 3 and 4 are drawn with a thick outline and a bracket beneath them labelled substring(2, 5) equals inb, because the end index 5 is not included. A note says length() is 7 and the last valid index is 6.</desc>
<defs><marker id="ah-f210" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="250" fill="#ffffff"/>
<rect x="50" y="40" width="60" height="60" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="80" y="79" font-size="26" text-anchor="middle" fill="#1d2b44" font-weight="bold" font-family="ui-monospace, Menlo, Consolas, monospace">r</text>
<text x="80" y="122" font-size="15" text-anchor="middle" fill="#1d2b44">0</text>
<rect x="120" y="40" width="60" height="60" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="150" y="79" font-size="26" text-anchor="middle" fill="#1d2b44" font-weight="bold" font-family="ui-monospace, Menlo, Consolas, monospace">a</text>
<text x="150" y="122" font-size="15" text-anchor="middle" fill="#1d2b44">1</text>
<rect x="190" y="40" width="60" height="60" rx="6" fill="#e6ecf7" stroke="#1d2b44" stroke-width="4"/>
<text x="220" y="79" font-size="26" text-anchor="middle" fill="#1d2b44" font-weight="bold" font-family="ui-monospace, Menlo, Consolas, monospace">i</text>
<text x="220" y="122" font-size="15" text-anchor="middle" fill="#1d2b44">2</text>
<rect x="260" y="40" width="60" height="60" rx="6" fill="#e6ecf7" stroke="#1d2b44" stroke-width="4"/>
<text x="290" y="79" font-size="26" text-anchor="middle" fill="#1d2b44" font-weight="bold" font-family="ui-monospace, Menlo, Consolas, monospace">n</text>
<text x="290" y="122" font-size="15" text-anchor="middle" fill="#1d2b44">3</text>
<rect x="330" y="40" width="60" height="60" rx="6" fill="#e6ecf7" stroke="#1d2b44" stroke-width="4"/>
<text x="360" y="79" font-size="26" text-anchor="middle" fill="#1d2b44" font-weight="bold" font-family="ui-monospace, Menlo, Consolas, monospace">b</text>
<text x="360" y="122" font-size="15" text-anchor="middle" fill="#1d2b44">4</text>
<rect x="400" y="40" width="60" height="60" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="430" y="79" font-size="26" text-anchor="middle" fill="#1d2b44" font-weight="bold" font-family="ui-monospace, Menlo, Consolas, monospace">o</text>
<text x="430" y="122" font-size="15" text-anchor="middle" fill="#1d2b44">5</text>
<rect x="470" y="40" width="60" height="60" rx="6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="500" y="79" font-size="26" text-anchor="middle" fill="#1d2b44" font-weight="bold" font-family="ui-monospace, Menlo, Consolas, monospace">w</text>
<text x="500" y="122" font-size="15" text-anchor="middle" fill="#1d2b44">6</text>
<text x="30" y="122" font-size="10" text-anchor="middle" fill="#1d2b44"></text>
<text x="280" y="22" font-size="14" text-anchor="middle" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">String s = "rainbow";   s.length() is 7</text>
<polyline points="190,140 190,152 400,152 400,140" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="295" y="175" font-size="14" text-anchor="middle" fill="#1d2b44" font-weight="bold" font-family="ui-monospace, Menlo, Consolas, monospace">substring(2, 5) is "inb"</text>
<text x="295" y="198" font-size="12" text-anchor="middle" fill="#1d2b44">starts at index 2, stops before index 5</text>
<text x="295" y="226" font-size="12" text-anchor="middle" fill="#1d2b44">the last valid index is length() - 1 = 6</text>
</svg>
<figcaption>Figure 1. The String "rainbow" has length 7 and indexes 0 to 6. substring(2, 5) takes the characters at indexes 2, 3 and 4, giving "inb". The end index 5 is not included.</figcaption>
</figure>

```java
String s = "rainbow";
System.out.println(s.length());
System.out.println(s.substring(2, 5));
System.out.println(s.substring(3));
System.out.println(s.indexOf("bow"));
System.out.println(s.indexOf("z"));
```

**Output:**

```text
7
inb
nbow
4
-1
```

## Visiting every character

A single character at index `i` is the String `s.substring(i, i + 1)`: from `i` up to, not including, `i + 1`. Looping `i` from 0 to `s.length() - 1` visits them all.

```java
String s = "rainbow";
for (int i = 0; i < s.length(); i++) {
    System.out.print(s.substring(i, i + 1) + "-");
}
```

**Output:**

```text
r-a-i-n-b-o-w-
```

The boundary `i < s.length()` is exactly right. At `i = 6` the call is `substring(6, 7)`, which is allowed because the end index may equal the length. If the loop ran to `i <= s.length()`, then `i = 7` would call `substring(7, 8)` and throw an exception.

## The three standard string algorithms

**1. Does the string have a property? Count characters that meet a criterion.** This is the frequency pattern from Topic 2.9 with the characters as the "values". To test membership in a set of letters, use `indexOf` on a String of those letters: a result of 0 or more means "found".

**2. Count substrings that meet a criterion.** Slide a window of length `k` along the string. A window starting at index `i` is `s.substring(i, i + k)`. The last window starts at `s.length() - k`, so the loop runs `i <= s.length() - k`.

**3. Build a new string.** Start with the empty string `""` and add to it. Putting each new character on the **front** reverses the order.

```java
public class StringTools {
    public static int countVowels(String s) {
        int count = 0;
        for (int i = 0; i < s.length(); i++) {
            String letter = s.substring(i, i + 1);
            if ("aeiou".indexOf(letter) >= 0) {
                count++;
            }
        }
        return count;
    }

    public static String reverse(String s) {
        String result = "";
        for (int i = 0; i < s.length(); i++) {
            result = s.substring(i, i + 1) + result;
        }
        return result;
    }

    public static boolean isPalindrome(String s) {
        return s.equals(reverse(s));
    }

    public static void main(String[] args) {
        System.out.println(countVowels("rainbow"));
        System.out.println(reverse("rainbow"));
        System.out.println(isPalindrome("racecar"));
        System.out.println(isPalindrome("rainbow"));
    }
}
```

**Output:**

```text
3
wobniar
true
false
```

`countVowels("rainbow")` finds a, i and o: 3. In `reverse`, each pass puts the new letter before what has been built so far: "r", "ar", "iar", "niar", "bniar", "obniar", "wobniar". A **palindrome** reads the same both ways, so the test is that the string equals its reverse. Notice that `isPalindrome` uses `equals`, not `==`: the reverse is a new object, so `==` would compare references and be false.

## Strings are immutable

A `String` object cannot be changed. Methods such as `substring` and the `+` operator return a **new** String and leave the original alone. So a call whose result is not stored has no effect on the variable:

```java
String s = "cat";
s.substring(1);
String t = s.substring(1);
System.out.println(s + " " + t);
```

**Output:**

```text
cat at
```

The first call computes "at" and throws it away. Only the second stores it in `t`. The loop that builds `result` works because each pass **assigns** the new, longer String back to `result`.

## Out of range

Each of these throws `StringIndexOutOfBoundsException`:

```java
String w = "banana";
String bad1 = w.substring(4, 7);
String bad2 = w.substring(7);
String bad3 = w.substring(-1, 2);
```

The String has length 6, so valid ends are at most 6, and valid starts are at least 0. `substring(6)` (start equal to the length) is allowed and returns the empty String, but `substring(7)` is not. When you write a window loop, always check the **last** window.

## Comparing strings

`equals` tests whether two Strings have the same characters. `compareTo` orders them alphabetically: a negative result means the first String comes first, zero means they are equal, and a positive result means it comes later. Use the sign, not a particular value.

```java
String a = "apple";
String b = "banana";
System.out.println(a.equals(b));
System.out.println(a.compareTo(b) < 0);
System.out.println(b.compareTo(a) > 0);
System.out.println(a.compareTo("apple") == 0);
```

**Output:**

```text
false
true
true
true
```

## Worked example 1: counting a letter and building a new string

**Question.** Write a method `countLetter(String s, String letter)` that counts the occurrences of a one-letter String, and a method `removeLetter(String s, String letter)` that returns `s` with that letter left out. Use them on "banana" with "a".

```java
public class LetterTools {
    public static int countLetter(String s, String letter) {
        int count = 0;
        for (int i = 0; i < s.length(); i++) {
            if (s.substring(i, i + 1).equals(letter)) {
                count++;
            }
        }
        return count;
    }

    public static String removeLetter(String s, String letter) {
        String result = "";
        for (int i = 0; i < s.length(); i++) {
            String current = s.substring(i, i + 1);
            if (!current.equals(letter)) {
                result = result + current;
            }
        }
        return result;
    }

    public static void main(String[] args) {
        System.out.println(countLetter("banana", "a"));
        System.out.println(removeLetter("banana", "a"));
    }
}
```

**Output:**

```text
3
bnn
```

**Trace for `removeLetter("banana", "a")`.**

| `i` | `current` | is it "a"? | `result` after |
|---|---|---|---|
| 0 | b | no | b |
| 1 | a | yes | b |
| 2 | n | no | bn |
| 3 | a | yes | bn |
| 4 | n | no | bnn |
| 5 | a | yes | bnn |

**Check.** "banana" has three a's, so `countLetter` is 3, and removing them leaves b, n, n. The original `s` is unchanged, because the method builds a new String. This follows the "build a new string" pattern: the new letter goes on the **end** (`result + current`) to keep the original order.

## Worked example 2: counting substrings with a window

**Question.** Write `countSub(String s, String target)` that counts how many times `target` occurs in `s`, allowing occurrences to overlap. Find `countSub("banana", "ana")`.

**Plan.** The window has the length of `target`, which is `k = target.length()`. It starts at `i`, and `s.substring(i, i + k)` is the window. The last start is `s.length() - k`, so the loop test is `i <= s.length() - k`.

```java
public class CountSub {
    public static int countSub(String s, String target) {
        int count = 0;
        int k = target.length();
        for (int i = 0; i <= s.length() - k; i++) {
            if (s.substring(i, i + k).equals(target)) {
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        System.out.println(countSub("banana", "ana"));
        System.out.println(countSub("banana", "na"));
        System.out.println(countSub("banana", "x"));
    }
}
```

**Output:**

```text
2
2
0
```

**Trace for `countSub("banana", "ana")`.** Here `k = 3` and the loop runs for `i` from 0 to 6 - 3 = 3.

| `i` | window `substring(i, i + 3)` | equals "ana"? | `count` |
|---|---|---|---|
| 0 | ban | no | 0 |
| 1 | ana | yes | 1 |
| 2 | nan | no | 1 |
| 3 | ana | yes | 2 |

**Check.** The two occurrences, at indexes 1 and 3, overlap on the middle "a". Note what happens with a wrong boundary. With `i < s.length() - k` the last window, at `i = 3`, would be missed and the answer would be 1. With `i < s.length()` the window at `i = 4` would be `substring(4, 7)`, which is out of range and throws an exception.

## How this appears in exam questions

String algorithms in an exam use only the methods in the Java Quick Reference: `length`, `substring` (both forms), `indexOf`, `equals` and `compareTo`. To look at one character you write `substring(i, i + 1)`, and to compare it you use `equals`. Two habits protect you from the most common lost marks. First, check the **last** index you use: for single characters the loop stops at `length() - 1`, and for a window of `k` characters it stops at `length() - k`. An index outside the String throws a `StringIndexOutOfBoundsException`, which an examiner will treat as a bug. Second, remember that a String cannot be changed: if the task says to produce a modified String, build a new one in a variable and return that variable. When a question gives you a precondition about the input, such as words separated by single spaces, you can rely on it.

## Common misconceptions

- **"substring(a, b) includes the character at index b."** It stops before `b`, so the length of the result is `b - a`.
- **"The last index is `length()`."** It is `length() - 1`. `substring(length())` is the empty String, but `substring(length(), length() + 1)` is out of range.
- **"`==` compares strings."** It compares references. Use `equals`.
- **"`s.substring(1);` shortens `s`."** Strings are immutable: the result must be assigned.
- **"The window loop can run to `length()`."** Each window must fit inside the String, so the last start is `length() - k`.
- **"`indexOf` returns true or false."** It returns an index, with -1 for not found. Test with `>= 0`.
- **"Building a new string in a loop changes the original."** The original is untouched; only the variable holding the result changes.

## Where this leads

String algorithms use the same patterns as Topic 2.9: counting, searching and building. In Unit 4 the same ideas apply to arrays and `ArrayList` objects, and the searching and sorting algorithms of Topics 4.14 and 4.15 use `compareTo` on strings. Try the [practice questions](/advanced-course-resources/computer-science-a/2-10-implementing-string-algorithms-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-a/2-10-implementing-string-algorithms-revision-notes/) and tick off the [checklist](/advanced-course-resources/computer-science-a/2-10-implementing-string-algorithms-checklist/). Then read the [Topic 2.11 study guide](/advanced-course-resources/computer-science-a/2-11-nested-iteration-study-guide/) on nested iteration. For the loop patterns, revisit the [Topic 2.9 study guide](/advanced-course-resources/computer-science-a/2-9-implementing-selection-iteration-algorithms-study-guide/).
