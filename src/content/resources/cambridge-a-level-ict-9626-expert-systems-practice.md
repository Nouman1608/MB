---
title: "Cambridge A Level Information Technology (9626): Expert systems -- Practice Questions"
resourceType: "practice-questions"
subject: "ict"
level: ["a-levels"]
topic: "Topic 7 – Expert systems"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 7.1
syllabusTopics:
  - qualification: "a-level"
    topic: "expert-systems"
  - qualification: "a-level"
    topic: "expert-systems"
    subtopic: "expert-systems-content"
description: "Twelve original Cambridge 9626 IT section 7.1 questions with answers on expert system components, forward and backward chaining and evaluation."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs; examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Expert systems study guide](/resources/cambridge-a-level-ict-9626-expert-systems/)

These questions are for **section 7.1 Expert systems** (Topic 7, AS Level) of Cambridge International AS & A Level Information Technology (9626), 2025–2027. All organisations are invented.

---

## Section A

**1.** Define the term expert system. **[2]**

**2.** State the purpose of the inference engine. **[2]**

**3.** Name the component of an expert system that is described in each case.

**(a)** It lets the system's managers add and change rules. **[1]**

**(b)** It shows the user how a conclusion was reached. **[1]**

**(c)** It stores the facts and the rules. **[1]**

**4.** State the difference between forward chaining and backward chaining. **[2]**

**5.** Identify **two** scenarios in which an expert system could be used. **[2]**

## Section B

**6.** A bird identification system holds these rules.

- Rule 1: IF the animal has feathers THEN it is a bird.
- Rule 2: IF it is a bird AND it lives near water AND it dives for fish THEN it is a kingfisher.
- Rule 3: IF it is a bird AND it cannot fly AND it lives in cold regions THEN it is a penguin.

A user reports these facts: the animal has feathers, it lives near water and it dives for fish.

**(a)** Describe how forward chaining reaches a conclusion from these facts. **[4]**

**(b)** The system now uses backward chaining with the goal "it is a penguin". Describe what happens. **[4]**

**7.** A hospital uses an expert system to help nurses with medical diagnosis.

**(a)** Describe the role of the user interface. **[2]**

**(b)** Explain why the explanation system is important to the nurses. **[2]**

**(c)** Explain why a knowledge base editor is needed. **[2]**

**8.** Explain what is meant by a rules base and a database of facts in the knowledge base. **[4]**

**9.** Distinguish between data driven and goal driven reasoning, using computer gaming as an example. **[4]**

**10.** An insurance company wants to use an expert system to advise customers on the cover they need. Discuss the advantages and disadvantages of this system. **[6]**

**11.** A car mechanic says: "An expert system for engine faults will never replace me." Explain **two** limitations of an expert system that support this view. **[4]**

**12.** Hartwell Farm is considering an expert system to identify crop diseases from photographs and descriptions provided by workers. Evaluate whether the farm should use it. **[6]**

---

## Answers

**1.** A computer system that stores the knowledge of human experts in a subject [1] and uses it to answer questions and give advice or possible solutions to users [1]. **[2]**

**2.** It applies the rules in the rules base to the facts supplied [1] and works out conclusions, deciding which question to ask next [1]. **[2]**

**3. (a)** Knowledge base editor [1].

**(b)** Explanation system [1].

**(c)** Knowledge base [1]. **[3]**

**4.** Forward chaining starts with known facts and applies rules to reach a conclusion [1], whereas backward chaining starts with a goal and works back to find facts that support it [1]. **[2]**

**5.** Any two from: mineral prospecting [1]; investment analysis [1]; financial planning [1]; insurance planning [1]; car engine fault diagnosis [1]; medical diagnosis [1]; route scheduling for delivery vehicles [1]; plant and animal identification [1]. **[2]**

**6. (a)** The fact "has feathers" matches Rule 1, so the system adds the fact that it is a bird [1]. Rule 2 now has all three conditions: it is a bird, it lives near water, it dives for fish [1]. Rule 2 fires [1], and the conclusion is that it is a kingfisher [1].

**(b)** The goal "penguin" is concluded by Rule 3 [1]. Rule 3 needs three conditions: it is a bird, it cannot fly and it lives in cold regions [1]. "It is a bird" is proved through Rule 1, because the animal has feathers [1]. The system then asks whether it can fly and whether it lives in cold regions. The user reports that it lives near water and dives for fish, so the answer to the cold regions question is no, the goal is rejected, and the system tries another goal such as kingfisher [1]. **[8]**

**7. (a)** It displays questions to the nurse [1] and accepts the answers and shows the conclusions in an easy-to-use form [1].

**(b)** It shows how the system reached its diagnosis [1], so the nurse can check the reasoning and decide whether to trust it [1].

**(c)** Medical knowledge changes, and rules may be wrong [1], so the editor lets experts update or correct the rules without rewriting the system [1]. **[6]**

**8.** The database of facts holds information about the subject, for example the symptoms of each illness [1], stored so that it can be searched [1]. The rules base holds the IF...THEN rules that link facts to conclusions [1], for example IF fever AND rash THEN measles is likely [1]. **[4]**

**9.** Data driven reasoning starts from the data available and works forwards to a result [1], for example a computer opponent that reacts to the player's last move [1]. Goal driven reasoning starts from a goal and works backwards to find the steps needed [1], for example a computer opponent with the goal of capturing a flag and planning the moves to reach it [1]. **[4]**

**10.** Advantages: customers can get advice at any time without waiting for an adviser [1]; advice is consistent for every customer [1]; it costs less than employing many advisers [1]. Disadvantages: it is expensive to build and keep up to date [1]; it cannot deal with unusual situations outside its rules [1]; customers may trust it too much when the rules are wrong or out of date [1]. Conclusion: it suits common types of cover, with human advisers for complex cases [1]. Any six marks. **[6]**

**11.** Any two limitations, each developed: it has no common sense or judgement [1], so it cannot deal with a fault that is not in its rules [1]; it cannot see, hear or smell the car [1], so it relies on the user's description which may be wrong [1]; it cannot learn from new problems unless a person updates the rules [1], so it can become out of date [1]. **[4]**

**12.** For: workers can identify diseases quickly without calling an expert [1]; consistent advice across the farm [1]; early identification can save the crop [1]. Against: it is costly to set up and keep up to date [1]; it may misidentify new diseases not in the knowledge base, or if photographs are unclear [1]; workers might rely on it without checking [1]. Conclusion: it is worth using as an aid for common diseases, if experts can still be consulted [1]. Any six marks. **[6]**

## Where marks are usually lost

- Calling the inference engine the "database".
- Giving only one part of the knowledge base (facts or rules).
- Mixing up forward and backward chaining.
- Describing the explanation system as a help guide.
- Giving general advantages (such as "it is fast") without linking them to the scenario.
