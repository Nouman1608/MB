---
title: "Cambridge IGCSE ICT (0417): Expert systems -- Practice Questions"
resourceType: "practice-questions"
subject: "ict"
level: ["igcse"]
topic: "Topic 6: ICT applications"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 6.8
syllabusTopics:
  - qualification: "igcse"
    topic: "ict-applications"
    subtopic: "expert-systems-0417"
description: "Original exam-style questions with mark-scheme answers on expert system components, rules, setting up and named uses for Cambridge IGCSE ICT 0417 subtopic 6.8."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These questions cover subtopic 6.8 of Cambridge IGCSE ICT 0417: the characteristics, uses and purpose of expert systems, their five components, and how they produce possible solutions for different scenarios. All scenarios and rules are invented and simplified.

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available through your school or
> Cambridge directly.

Revise first with the [expert systems study guide](/resources/cambridge-igcse-ict-0417-expert-systems/) and the [expert systems revision notes](/resources/cambridge-igcse-ict-0417-expert-systems-revision-notes/).

---

## Section A: short answers

**1.** Which **one** component of an expert system shows the user how a conclusion was reached? **[1]**

A: Knowledge base

B: Explanation system

C: Rules base

D: User interface

**2.** State what is stored in the knowledge base. **[1]**

**3.** Name **three** uses of expert systems listed in the syllabus, other than medical diagnosis. **[3]**

**4.** State the purpose of the user interface in an expert system. **[1]**

**5.** Explain why an expert system often gives a probability with each suggested solution. **[2]**

---

## Section B: structured questions

**6.** A wildlife charity uses an expert system to help volunteers identify birds.

**(a)** Give **two** inputs the volunteer might provide. **[2]**

**(b)** Write **one** suitable rule for the rules base, using IF and THEN. **[2]**

**(c)** Describe what the inference engine does with the volunteer's answers. **[2]**

**7.** A mining company is setting up an expert system for mineral prospecting. Describe how the expert system would be created. **[5]**

**8.** An expert system for a delivery company uses these simplified rules.

Rule A: IF a delivery has a morning time slot THEN schedule it before 12:00.

Rule B: IF two deliveries are in the same postcode area THEN schedule them one after the other.

Rule C: IF a parcel is too heavy for the small van THEN assign it to the large van.

Delivery 1 is a heavy parcel with a morning time slot. Delivery 2 is a light parcel in the same postcode area as Delivery 1.

**(a)** State which rules apply to Delivery 1. **[2]**

**(b)** Describe how the system would schedule Delivery 2, giving the rule used. **[2]**

**9.** A clinic in a remote area has no doctor on most days. Nurses use a medical diagnosis expert system.

**(a)** Explain **two** benefits of the system for the clinic's patients. **[4]**

**(b)** Explain **one** reason why the nurse should not rely on the system alone. **[2]**

**10.** Explain the difference between the knowledge base and the rules base. **[2]**

---

## Section C: extended questions

**11.** Describe how an expert system is used to produce possible solutions, from the first question to the final result. **[6]**

**12.** A bank is considering using an expert system to give customers financial planning advice instead of human advisers. Evaluate this proposal. **[6]**

---

## Answers

**1.** **B** [1]. **[1]**

**2.** Facts about the specialist subject [1]. **[1]**

**3.** Car engine fault diagnosis [1]; chess games [1]; plant and animal identification [1] (also credit: mineral prospecting, financial planning, route scheduling for delivery vehicles). **[3]**

**4.** To ask the user questions and display the results [1]. **[1]**

**5.** More than one solution may match the user's answers [1], so the probability shows which is most likely and helps the user decide what to check first [1]. **[2]**

**6. (a)** Size of the bird [1]; colour of its feathers [1] (also credit: beak shape, habitat, song, time of year).

**(b)** A rule with an IF condition [1] and a THEN conclusion [1], for example: IF the bird is small AND has a red breast THEN it is probably a robin.

**(c)** It compares the answers with the rules in the rules base, using facts in the knowledge base [1], decides which question to ask next and reaches the most likely identification [1]. **[6]**

**7.** Experts such as geologists are interviewed and information is collected from surveys and past results [1]; the facts are entered into the knowledge base [1]; rules are written for the rules base, linking the data to the likelihood of finding minerals [1]; the inference engine, user interface and explanation system are designed [1]; the system is tested using sites where the results are already known, and corrected where needed [1]. **[5]**

**8. (a)** Rule A [1] and Rule C [1]. It is scheduled before 12:00 on the large van.

**(b)** Rule B applies because it is in the same postcode area as Delivery 1 [1], so it is scheduled immediately before or after Delivery 1 [1]. **[4]**

**9. (a)** Patients can be assessed on days when no doctor is present [1], so they are treated sooner and do not have to travel to a hospital [1]. The system combines the knowledge of many doctors and gives consistent suggestions [1], so serious conditions are less likely to be missed [1].

**(b)** The system only knows the rules it was given and has no common sense [1], so an unusual case may produce a wrong diagnosis that the nurse should question and refer to a doctor [1]. **[6]**

**10.** The knowledge base stores facts about the subject [1], whereas the rules base stores the IF ... THEN rules that link those facts to conclusions [1]. **[2]**

**11.** The user interface asks the user a question, often with yes or no answers [1]; the answer is passed to the inference engine [1]; the inference engine compares the answers with the rules base, using facts in the knowledge base [1]; it chooses the next question to ask, and this repeats [1]; the system displays possible solutions, often with probabilities [1]; the explanation system shows the user how the result was reached [1]. **[6]**

**12.** For: advice is available at any time, online, without an appointment [1]; the advice is consistent for customers in the same situation [1]; the bank saves on the cost of advisers for routine cases [1]. Against: the system cannot use common sense or judge a customer's unusual circumstances [1]; customers may want to discuss decisions with a person they trust [1]. Judgement: the expert system is suitable for simple, routine planning, but human advisers should remain for complex cases [1]. **[6]**

## Where marks are usually lost

- Placing the rules in the knowledge base.
- Saying the system "gives the answer" instead of possible solutions.
- Describing how a system is used when the question asks how it is created.
- Writing a rule without both IF and THEN.
