---
resourceId: "mb-ap-csa-1.15-study-guide"
title: "String Manipulation: Study Guide (Computer Science A 1.15)"
description: "Learn how String objects are created, joined and indexed, why they are immutable, and how to use length, substring, indexOf, equals and compareTo to take strings apart and compare them."
course: "computer-science-a"
unit: 1
topics: ["1.15"]
resourceType: "study-guide"
prerequisites: ["Topic 1.14: calling instance methods on objects", "Topic 1.3: string literals and escape sequences"]
prerequisiteResources: ["mb-ap-csa-1.14-study-guide"]
learningObjectives: ["Create String objects with literals and the constructor, and combine strings and other values with + and +=", "Explain that a String is immutable and that String methods return new values rather than changing the object", "Use indices from 0 to length() - 1 with length, substring, and indexOf, and predict StringIndexOutOfBoundsException", "Compare strings with equals and compareTo, and explain why equals is used rather than =="]
skills: ["2", "3", "4"]
studyMinutes: 55
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.15-revision-notes", "mb-ap-csa-1.15-practice", "mb-ap-csa-1.15-checklist"]
next: "mb-ap-csa-1.15-practice"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["A String object is a sequence of characters, created from a literal or by calling the String constructor; String is in java.lang.", "A String is immutable: methods called on it do not change it, so you must store a returned value to keep it.", "Indices run from 0 to length() - 1; substring(from, to) includes from and excludes to; using an index outside the range throws StringIndexOutOfBoundsException.", "indexOf(str) returns the index of the first occurrence, or -1 if str is not found.", "Use equals to compare the characters of two strings and compareTo to order them: a value below 0, zero, or above 0."]
faqs: [{"question": "Why does word.substring(1); not change word?", "answer": "A String is immutable: once created, its characters cannot be changed. substring returns a new String and leaves the original untouched. To keep the result you store it: word = word.substring(1);."}, {"question": "What is the difference between substring(a, b) and substring(a)?", "answer": "substring(a, b) returns the characters from index a up to, but not including, index b. substring(a) returns everything from index a to the end, which is the same as substring(a, length())."}, {"question": "Why use equals instead of == to compare strings?", "answer": "equals compares the sequences of characters. The == operator asks whether two variables refer to the same object, so two different String objects with identical text can give false. Compare the content of strings with equals."}, {"question": "What does \"a\" + 1 + 2 print?", "answer": "The letter a followed by 1 and then 2, run together as text. The + operators are evaluated left to right. The first one joins a String and an int, producing the text a1; the second joins that text with 2. By contrast 1 + 2 + \"a\" gives 3a, because 1 + 2 is added first."}]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

## Strings are objects

The `String` class is part of the `java.lang` package, so it is **available by default**. A **`String` object represents a sequence of characters**. You can create one in two ways:

- with a **string literal**: `String s = "hello";`
- by calling the **`String` class constructor**: `String t = new String("hello");`

Both give you a reference to a `String` object (Topic 1.12). Literals are far more common, so for the rest of the guide you will see few `new String(...)` calls.

### Strings cannot be changed

A `String` object is **immutable**: once it has been created, its attributes cannot be changed. **Methods called on a `String` object do not change the content of the `String` object.** They produce a new value. This single fact explains most beginner errors with strings.

```java
public class Immutable {
    public static void main(String[] args) {
        String word = "cat";
        word.substring(1);
        System.out.println(word);
        word = word.substring(1);
        System.out.println(word);
    }
}
```

```text
cat
at
```

The first call to `substring` computed `"at"` and threw it away, because nothing stored it. `word` still refers to the original `"cat"`. The second call **stored** the returned reference back in `word`, so now `word` refers to a different `String`, `"at"`. The original `"cat"` object was not changed; the variable simply refers elsewhere.

### Joining strings with + and +=

Two `String` objects can be **concatenated** (joined) with the `+` or `+=` operator, resulting in a **new `String` object**. A **primitive value can be concatenated with a `String`**, and the primitive value is implicitly converted to a `String`. A `String` can also be concatenated with any **object**, which implicitly calls that object's `toString` method (a method that every class has, because every class is a subclass of `Object`).

Operators of equal precedence go from left to right, and this matters a great deal when `+` is sometimes addition and sometimes joining:

```java
public class Concat {
    public static void main(String[] args) {
        System.out.println("a" + 1 + 2);
        System.out.println(1 + 2 + "a");
        System.out.println("a" + (1 + 2));
        int n = 5;
        String msg = "n = " + n;
        msg += "!";
        System.out.println(msg);
        System.out.println("x" + 2.5 + true);
    }
}
```

```text
a12
3a
a3
n = 5!
x2.5true
```

Read each line left to right, one `+` at a time:

- `"a" + 1 + 2`: `"a" + 1` is the `String` `"a1"`, and `"a1" + 2` is `"a12"`.
- `1 + 2 + "a"`: `1 + 2` is the `int` 3, and `3 + "a"` is `"3a"`.
- `"a" + (1 + 2)`: the bracket is worked out first, so it is `"a" + 3`, which is `"a3"`.

The statement `msg += "!";` is the compound assignment of Topic 1.6: it creates a new `String` and stores the reference in `msg`.

## Indices and the String methods

Each character has a position called an **index**, and the **first character is at index 0**. A `String` object has index values from **0 to one less than the length** of the string. Attempting to access an index outside this range results in a **`StringIndexOutOfBoundsException`**.

<figure>
<svg viewBox="0 0 480 154" role="img" aria-labelledby="fig-str-t fig-str-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="fig-str-t">The string microscope with its indices</title>
<desc id="fig-str-d">the string "microscope" drawn as 10 boxes, one character each (a space is shown as an underscore), with indices 0 to 9 beneath; a bracket under indices 2 to 5: substring(2, 6) gives "cros".</desc>
<rect x="0" y="0" width="480" height="154" fill="#ffffff"/>
<rect x="20" y="24" width="44" height="40" rx="0" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="42.0" y="50" text-anchor="middle" font-size="18" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">m</text>
<text x="42.0" y="84" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" >0</text>
<rect x="64" y="24" width="44" height="40" rx="0" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="86.0" y="50" text-anchor="middle" font-size="18" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">i</text>
<text x="86.0" y="84" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" >1</text>
<rect x="108" y="24" width="44" height="40" rx="0" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="130.0" y="50" text-anchor="middle" font-size="18" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">c</text>
<text x="130.0" y="84" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" >2</text>
<rect x="152" y="24" width="44" height="40" rx="0" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="174.0" y="50" text-anchor="middle" font-size="18" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">r</text>
<text x="174.0" y="84" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" >3</text>
<rect x="196" y="24" width="44" height="40" rx="0" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="218.0" y="50" text-anchor="middle" font-size="18" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">o</text>
<text x="218.0" y="84" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" >4</text>
<rect x="240" y="24" width="44" height="40" rx="0" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="262.0" y="50" text-anchor="middle" font-size="18" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">s</text>
<text x="262.0" y="84" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" >5</text>
<rect x="284" y="24" width="44" height="40" rx="0" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="306.0" y="50" text-anchor="middle" font-size="18" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">c</text>
<text x="306.0" y="84" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" >6</text>
<rect x="328" y="24" width="44" height="40" rx="0" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="350.0" y="50" text-anchor="middle" font-size="18" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">o</text>
<text x="350.0" y="84" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" >7</text>
<rect x="372" y="24" width="44" height="40" rx="0" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="394.0" y="50" text-anchor="middle" font-size="18" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">p</text>
<text x="394.0" y="84" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" >8</text>
<rect x="416" y="24" width="44" height="40" rx="0" fill="#e3e8f0" stroke="#1d2b44" stroke-width="1.5"/>
<text x="438.0" y="50" text-anchor="middle" font-size="18" font-weight="normal" fill="#1d2b44" font-family="ui-monospace, Menlo, Consolas, monospace">e</text>
<text x="438.0" y="84" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" >9</text>
<path d="M111 108 L111 116 L281 116 L281 108" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="196.0" y="133" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44" >substring(2, 6) gives "cros"</text>
</svg>
<figcaption>Figure 1. The ten characters of microscope, each above its index (0 to 9). The bracket shows substring(2, 6): it starts at index 2 and stops just before index 6, so it is the four characters cros.</figcaption>
</figure>

The Java Quick Reference lists these `String` methods. All are instance methods, called on a `String` object (Topic 1.14).

| Method | Returns | What it does |
|---|---|---|
| `int length()` | `int` | the number of characters |
| `String substring(int from, int to)` | `String` | the characters beginning at index `from` and ending at index `to - 1` |
| `String substring(int from)` | `String` | the same as `substring(from, length())`: everything from `from` to the end |
| `int indexOf(String str)` | `int` | the index of the first occurrence of `str`; `-1` if not found |
| `boolean equals(Object other)` | `boolean` | `true` if this string has the same sequence of characters as `other` |
| `int compareTo(String other)` | `int` | below 0 if this string is before `other` alphabetically, 0 if equal, above 0 if after |

```java
public class Methods {
    public static void main(String[] args) {
        String a = "microscope";
        System.out.println(a.length());
        System.out.println(a.substring(2, 6));
        System.out.println(a.substring(6));
        System.out.println(a.indexOf("sco"));
        System.out.println(a.indexOf("z"));
        System.out.println(a.substring(0, 1));
        System.out.println(a.substring(a.length() - 1));
        System.out.println("[" + a.substring(10) + "]" + "[" + a.substring(3, 3) + "]");
    }
}
```

```text
10
cros
cope
5
-1
m
e
[][]
```

Study each line against Figure 1.

- `length()` is 10, so the last index is 9.
- `substring(2, 6)` takes indices 2, 3, 4 and 5: `cros`. The `from` index is **included** and the `to` index is **excluded**.
- `substring(6)` takes everything from index 6 to the end: `cope`.
- `indexOf("sco")` finds the first place the three letters `sco` begin, at index 5. Not found gives `-1`.
- To get a **single character** (a one-letter `String`), use `substring(index, index + 1)`. `substring(0, 1)` is the first letter and `substring(a.length() - 1)` is the last.
- Two edge cases that are **legal**: `substring(10)` where 10 is the length gives the empty string `""`, and `substring(3, 3)` also gives `""`.

### Out-of-range indices

Using `substring` with an index outside 0 to `length()` for `from` or `to`, or with `from` greater than `to`, throws a `StringIndexOutOfBoundsException`. For `"abc"` (length 3): `substring(2, 10)` fails because 10 is beyond the end; `substring(3, 2)` fails because `from` is greater than `to`; `substring(4)` fails because 4 is past the end. By contrast `substring(3)` is legal and gives `""`.

### Comparing strings

```java
public class Compare {
    public static void main(String[] args) {
        String p = "hi";
        String q = new String("hi");
        System.out.println(p.equals(q));
        System.out.println("hello".equals("Hello"));
        System.out.println("apple".compareTo("banana"));
        System.out.println("banana".compareTo("apple"));
        System.out.println("cat".compareTo("cat"));
    }
}
```

```text
true
false
-1
1
0
```

- `equals` asks whether two strings have **exactly** the same characters. `"hello"` and `"Hello"` differ in the first letter's case, so the answer is `false`.
- `compareTo` orders strings **alphabetically**. The documentation guarantees only the **sign**: a value less than 0 if the object is less than the other, zero if equal and greater than 0 if greater. The actual numbers printed above (-1 and 1) are not something to rely on. (`"cat".compareTo("catalog")` is also negative, because a shorter string that matches the start of a longer one comes first.)
- The `==` operator on two object references asks something different: whether both variables refer to the **same object**. Here `p` and `q` are different objects with the same text, so `p == q` is `false` even though `p.equals(q)` is `true`. You will study `==` in Unit 2; for now, **compare the contents of strings with `equals`**.

## A routine for string questions

String questions reward a steady routine more than clever tricks. Whatever you are asked, the same five steps keep you out of trouble.

1. **Write the string with its indices.** Put each character in a box with its index underneath, as in Figure 1. Do not count in your head. A single missed space is the commonest source of wrong answers.
2. **Mark the start and end.** For `substring(from, to)` circle the character at `from` and the character just **before** `to`. Those, and everything between them, are the answer. For `substring(from)` the end is the last character.
3. **Find positions with `indexOf` rather than by counting,** whenever the question allows it. A program that uses `indexOf(" ")` works for any name; a program that hard-codes 5 works for one.
4. **Remember immutability.** If an expression's result is not stored or printed, it is lost. If a variable is reassigned, draw the **new** string in the table and keep the old one only if another variable still refers to it.
5. **Check the legal range** before you finish: `from` and `to` must satisfy `0 <= from <= to <= length()`. If they do not, the answer is a `StringIndexOutOfBoundsException`, and nothing after that line runs.

Two habits help with concatenation. When a line mixes `+` for numbers and `+` for text, rewrite it with brackets showing the order Java will really use: `(("a" + 1) + 2)`. And when you need a single character, write it as `substring(i, i + 1)`, never as an index on its own: the Java Quick Reference gives no way to read one character directly, and the one-letter `String` is exactly what the course expects.

Finally, remember what strings are **not**. They are not arrays of boxes you can edit; you cannot put a new letter at index 3. To "change" a letter you build a new string from the parts before and after it: `s.substring(0, 3) + "x" + s.substring(4)`. That sentence contains most of what Topic 1.15 teaches.

## Worked example 1: Reformat a name

**Task.** The variable `full` holds `"Grace Hopper"`. Write code that displays `Hopper, G.` Show the index arithmetic.

**Step 1, find the space.** `full.indexOf(" ")` is 5, because G0 r1 a2 c3 e4 then the space at index 5.

**Step 2, take the parts.** The first name is `full.substring(0, 5)`, which is `"Grace"`. The last name starts just after the space, at index 6, so it is `full.substring(5 + 1)`, which is `"Hopper"`.

**Step 3, build the result.** The first initial is `first.substring(0, 1)`, which is `"G"`. Join the pieces: `last + ", " + initial + "."`.

```java
public class Reformat {
    public static void main(String[] args) {
        String full = "Grace Hopper";
        int sp = full.indexOf(" ");
        String first = full.substring(0, sp);
        String last = full.substring(sp + 1);
        System.out.println(sp + " " + first + " " + last);
        System.out.println(last + ", " + first.substring(0, 1) + ".");
    }
}
```

```text
5 Grace Hopper
Hopper, G.
```

**Step 4, check.** Every index is inside 0 to 12 (the length of the string is 12): `substring(0, 5)` and `substring(6)` are legal. The program works for any two-word name, because it finds the space rather than assuming where it is.

## Worked example 2: Trace strings that never change

**Task.** Trace this code and give the output.

```java
String s = "abcdef";
String t = s.substring(2, 4);
s = t + s.substring(4);
String u = s.substring(1, 3) + s.indexOf("f");
System.out.println(s + " " + t + " " + u + " " + u.length());
```

**Step 1.** `s` refers to `"abcdef"` (a0 b1 c2 d3 e4 f5). `t = s.substring(2, 4)` takes indices 2 and 3: `"cd"`.

**Step 2.** `s.substring(4)` is `"ef"`. `t + "ef"` is `"cdef"`, and the assignment makes `s` refer to this **new** string. The old `"abcdef"` is not changed; `s` simply refers to something else.

**Step 3.** Now `s` is `"cdef"` (c0 d1 e2 f3). `s.substring(1, 3)` is `"de"`, and `s.indexOf("f")` is 3. Joining a `String` and an `int` gives `"de3"`.

**Step 4.** `u.length()` is 3.

| After statement | `s` | `t` | `u` |
|---|---|---|---|
| `String s = "abcdef";` | `"abcdef"` | - | - |
| `String t = s.substring(2, 4);` | `"abcdef"` | `"cd"` | - |
| `s = t + s.substring(4);` | `"cdef"` | `"cd"` | - |
| `String u = s.substring(1, 3) + s.indexOf("f");` | `"cdef"` | `"cd"` | `"de3"` |

The output is `cdef cd de3 3`.

## Common misconceptions

- **"`word.substring(1);` changes `word`."** Strings are immutable; the result must be stored.
- **"`substring(from, to)` includes the character at `to`."** It stops at `to - 1`.
- **"The first character is at index 1."** It is at index 0; the last is at `length() - 1`.
- **"The expression `"a" + 1 + 2` gives `a3`."** It gives `a12`: the `+` operators go left to right.
- **"`indexOf` returns 0 when the text is not found."** It returns `-1`; 0 means "found at the start".
- **"`==` compares the text of two strings."** Use `equals`.
- **"`compareTo` returns exactly -1, 0 or 1."** Only the sign is guaranteed.
- **"`substring(length())` is an error."** It is legal and gives the empty string.
- **"Calling a method on a string variable that holds `null` is fine."** It throws a `NullPointerException`.

## Where this leads

This is the last topic of Unit 1. Practise with the [Topic 1.15 practice questions](/advanced-course-resources/computer-science-a/1-15-string-manipulation-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-a/1-15-string-manipulation-revision-notes/) and tick off the [checklist](/advanced-course-resources/computer-science-a/1-15-string-manipulation-checklist/). Then take the [Unit 1 diagnostic](/advanced-course-resources/computer-science-a/unit-1-diagnostic/) and the [Unit 1 mixed review](/advanced-course-resources/computer-science-a/unit-1-review/). Unit 2 builds on strings with selection and iteration, so that you can process every character of a string, not just those you pick out by index.
