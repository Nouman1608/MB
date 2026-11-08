---
resourceId: "mb-ap-csa-1.8-revision-notes"
title: "Documentation with Comments: Revision Notes (Computer Science A 1.8)"
description: "A one-page recap of Java comments, Javadoc, preconditions and postconditions, and who is responsible for each."
course: "computer-science-a"
unit: 1
topics: ["1.8"]
resourceType: "revision-notes"
prerequisites: ["Read the study guide first, or use this page as a recap"]
learningObjectives: ["Recall the three comment forms and what the compiler does with comments", "Define precondition and postcondition and say who is responsible for each", "Write a precondition and a postcondition for a simple method"]
skills: ["4"]
studyMinutes: 15
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.8-study-guide", "mb-ap-csa-1.8-practice", "mb-ap-csa-1.8-checklist"]
next: "mb-ap-csa-1.8-practice"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["Comments are for people: ignored by the compiler and never executed.", "A precondition is what must be true before the method runs; a postcondition is what is true after.", "The caller is responsible for the precondition; the method need not check it."]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/computer-science-a/1-8-documentation-comments-study-guide/).

## Recap

- **Comments** help the original programmer and other programmers understand the code and its functionality. The compiler ignores them and they are not executed.
- Three kinds: `//` (one line), `/* */` (a block of comments) and `/** */` (**Javadoc**, used to create API documentation).
- A **precondition** is a condition that must be true just prior to the execution of a method for it to behave as expected. There is **no expectation** that the method checks it.
- A **postcondition** is a condition that must always be true after the method has executed. It describes the outcome: what is returned, or the current value of the object's attributes.

## Key relationships

| Idea | Remember |
|---|---|
| `// note` | the comment ends at the end of the line |
| `/* note */` | everything up to the first `*/` is comment; it does not nest |
| `/** note */` | placed before a class or method; makes API documentation |
| Precondition | about the **inputs** (arguments, state) before the call; the **caller** is responsible |
| Postcondition | about the **outcome** after the call; the **method** promises it, if the precondition held |
| Broken precondition | no promise about the result; the method may fail (for example `x / 0` throws) |
| Comments vs the compiler | comments never change the output |
| Commenting out code | wrap a line in `//` or `/* */` so that it does not run |

## Reading a contract in three passes

1. **What goes in?** Read the signature with the precondition: how many arguments, of which types, with what limits.
2. **What comes out?** Read the postcondition: the returned value, or the new state of the object.
3. **What is not promised?** Anything the documentation does not say is not guaranteed.

## Assumptions and conventions

- Preconditions and postconditions are written in comments, not enforced by the compiler.
- A postcondition is stated in terms of what is returned or the attributes of the object.
- A precondition is not a promise that the method will test its own inputs.
- Comments should say why code does something, and must be kept true when the code changes.

## Mistakes to avoid

1. **Believing comments change how the program runs.**
2. **Nesting `/* */` comments.**
3. **Mixing up precondition and postcondition.**
4. **Assuming the method checks its precondition**, so the caller can ignore it.
5. **Expecting a postcondition to hold after a violated precondition.**
6. **Writing comments that repeat the code** without adding meaning.
7. **Leaving a comment untrue after the code changed.**

## Quick self-check

1. Which comment form creates API documentation? *(`/** */`, a Javadoc comment.)*
2. Does a `//` comment change the output? *(No.)*
3. For `static int half(int n)` that returns `n / 2`, name a sensible precondition and a postcondition. *(Precondition: `n >= 0`. Postcondition: returns `n / 2` using integer division, which is the integer part of half of `n`.)*
4. Who checks a precondition? *(The caller makes sure it is true; the method is not expected to check it.)*
5. If a caller breaks a precondition, is the postcondition guaranteed? *(No.)*

Next: [practice questions](/advanced-course-resources/computer-science-a/1-8-documentation-comments-practice/).
