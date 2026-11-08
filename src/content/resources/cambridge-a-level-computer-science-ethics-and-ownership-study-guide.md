---
title: "Cambridge A Level Computer Science (9618): Ethics and Ownership -- Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 7: Ethics and Ownership"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 7
syllabusTopics:
  - qualification: "a-level"
    topic: "ethics-and-ownership"
  - qualification: "a-level"
    topic: "ethics-and-ownership"
    subtopic: "ethics-and-ownership-sub"
description: "AS study guide to professional ethics, codes of conduct, copyright, software licences and the social impact of computing for Cambridge Computer Science 9618."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

Topic 7 is the least technical part of the AS course, but it rewards careful, structured writing. You are asked to understand why computing professionals follow codes of conduct, how software and other work is owned, what the main licensing models allow, and how to reason about an ethical dilemma using the language of a professional body. Because the answers are written in sentences, most lost marks come from vague points, not from missing knowledge.

## Where this fits in the specification

This is AS Level content, so it can appear on Paper 1 as short-answer or extended-response questions. It links to security and privacy (Topic 6), to the later artificial intelligence topic and to any scenario in which a programmer, a manager or a user has to choose between competing interests. Expect a short description of a situation followed by a question beginning "Discuss", "Explain" or "Justify".

## Why ethics matters in computing

**Ethics** is the set of moral principles that guide what people consider right and wrong behaviour. Many ethical choices in computing are not covered by law, or the law lags behind the technology. A developer who can read customer data stored in a database is trusted not to do so without a reason, whether or not anyone would find out.

**Professional bodies** such as the ACM, the IEEE Computer Society and the British Computer Society publish **codes of conduct**. You do not need to memorise the wording of any one code, but you should know the themes that recur:

- **Public interest**: work should benefit society and not harm health, safety or the environment.
- **Professional competence**: accept only tasks you are qualified to do, and keep your skills up to date.
- **Honesty and integrity**: do not misrepresent what a product can do, and report problems truthfully, including your own mistakes.
- **Confidentiality and privacy**: protect personal data and client information and use it only for the agreed purpose.
- **Respect for the law and for intellectual property**: do not copy or use others' work without permission.
- **Responsibility to colleagues and to the profession**: be fair, credit others for their work and do not damage the reputation of the profession.

A code gives a professional something to point to when they refuse an improper instruction, and it gives the public a basis for expecting standards. Its limits are that it is not law, that it often cannot say exactly what to do in a new situation, and that a body can only discipline its own members.

### Applying a code to a scenario

The method that earns marks is to name the principle, apply it to the facts and state the consequence. For instance, suppose a developer is told to hide a known fault in a medical dosage calculator until after launch. Public interest and honesty are both breached, because patients could be harmed and the client would be misled. The developer should report the fault, record that they did so and, if ignored, escalate or refuse to continue. Notice that each sentence uses a detail from the scenario. An answer that only says "this is unethical" gains little.

## Ownership of work and intellectual property

**Intellectual property** is creative or inventive work that can be owned. For software, the most relevant protection is **copyright**, which arises automatically when original work is created and stops others copying, selling or adapting it without permission. It covers source code, documentation, images, music and video. Copyright does not usually protect an idea or an algorithm as such, only its expression.

Copyright can be infringed by making and distributing copies, by using software with a licence that does not cover your use, by using an unlicensed copy of an image in a website, or by copying source code into your own product. **Software piracy** is the unauthorised copying or use of licensed software. Consequences can include fines and legal action for the user, loss of income for developers and risks from tampered copies that contain malware.

### Software licensing

A **software licence** is the legal agreement that sets out how software may be used. Cambridge expects you to compare these models.

| Type | Key features |
|---|---|
| Commercial | Bought or subscribed to; source code is normally secret; no copying or modification; support usually included |
| Shareware | Free for a trial period or with limited features; payment unlocks the full version; source code not shared |
| Freeware | Free to use, but the author keeps the copyright; source code is not normally supplied and modification is not allowed |
| Free Software Foundation (free software) | Users have freedom to run, study, change and share the software; source code is available; many such licences require modified versions to be shared under the same freedoms |
| Open Source Initiative (open source) | Source code is available and can be modified and redistributed; the emphasis is on practical benefits such as peer review and community improvement |

The word "free" in free software refers to freedom, not price, and a common mistake is to treat freeware and free software as the same thing. Freeware is free of cost but closed; free software gives freedom to change and share and may still be sold.

## Worked example 1: choosing a licence

A school has 85 computers and wants a word-processing package. A commercial vendor offers a per-user licence at 18 pounds per computer per year, or a site licence at 1,100 pounds per year for unlimited machines. An open-source alternative costs nothing to buy but needs 12 hours of technician time at 25 pounds per hour for set-up and training.

1. Per-user commercial cost: 85 x 18 = 1,530 pounds per year.
2. Site licence: 1,100 pounds per year, so it is cheaper than per-user by 1,530 - 1,100 = 430 pounds.
3. Open-source set-up: 12 x 25 = 300 pounds in the first year.

On cost alone, open source is cheapest in the first year and the site licence is next. But cost is only one factor. The school should also consider that commercial licences include support and may suit file formats already used, whereas open source lets the school see and adapt the code, with support coming from a community. A balanced conclusion would say that open source is likely to be best if staff can learn the software, and the site licence is a sensible fallback if guaranteed support matters more. Note that the figures are an example only; the reasoning pattern is what you should reproduce.

## Worked example 2: an ethical dilemma

A programmer at a games company finds that a colleague has copied 400 lines from an open-source library into the company's paid product. The library's licence says any product that includes the code must also be released as open source.

1. Identify the issue: the licence conditions are being broken, so there is a copyright and licensing problem.
2. Identify the stakeholders: the library author, the company, the colleague and the customers.
3. Link to the principles: respect for intellectual property, honesty and professional responsibility.
4. Recommend an action: tell the colleague and the team lead, then either remove the code and rewrite it, obtain a different licence from the author, or release the product under a compatible licence.

The best answer gives a recommended action with a reason. Doing nothing because "nobody will find out" fails the honesty principle and exposes the company to legal action.

## Wider social and environmental questions

You may also be asked about the impact of computing on society. Useful balanced points include the benefits of automation and access to information, the risk of job losses and a digital divide between those with and without access, the spread of false information, the energy used by data centres and the disposal of electronic waste, and the use of data to monitor people. Always give an advantage and a disadvantage when the command word is "discuss".

## Common mistakes

- Writing "it is illegal" when the question asks about ethics. Many unethical acts are legal.
- Confusing freeware, shareware and free software.
- Saying copyright protects an idea. It protects the particular way the idea is expressed.
- Giving a list of codes of conduct with no connection to the scenario.

## Exam technique

For a "discuss" question, use a two-sided structure: a point for, a point against, then a judgement. For "explain", every statement needs a reason. Use the bodies' vocabulary correctly: public interest, competence, integrity, confidentiality. Keep to the facts in the scenario and avoid inventing new ones.

## Check your understanding

1. State two reasons why professional bodies publish a code of conduct. *To set standards of behaviour for members and to give the public confidence; also to give professionals support when refusing an improper instruction.*
2. Give two items that copyright protects in software. *Source code and documentation (also images, audio and video included in the product).*
3. Describe the difference between freeware and free software. *Freeware costs nothing but the source code is closed and cannot be modified; free software gives users freedom to run, study, change and share the code.*
4. Give two features of shareware. *Available for a trial period or with limited features, and payment is required to unlock or continue using the full version.*
5. Explain one advantage and one disadvantage of open-source software for a business. *Advantage: the code can be inspected and adapted, with reviewed improvements; disadvantage: support may depend on a community and not be guaranteed.*
6. A developer is asked to claim a system is more secure than it is. Which principle is broken? *Honesty and integrity, and also the duty to the public interest if users could be harmed.*
7. Explain what software piracy is and one risk to the user. *Using or copying software without permission under its licence; the copy may contain malware or the user may face legal action.*
8. Calculate the yearly cost of 60 per-user licences at 22 pounds each and compare it with a site licence at 1,000 pounds. *60 x 22 = 1,320 pounds, so the site licence is cheaper by 320 pounds.*

## Frequently asked questions

**What is the difference between freeware and free software?**
Freeware costs nothing, but the author keeps the copyright and the source code is closed. Free software gives users the freedom to run, study, change and share the code, and may still be sold.

**Does copyright protect an idea or an algorithm?**
Copyright does not usually protect an idea or an algorithm as such, only its particular expression, such as the source code.

**How do you answer an ethics scenario question in Cambridge 9618?**
Name the principle, apply it to the facts of the scenario and state the consequence or recommended action. An answer that only says something is unethical gains little.

**Is unethical always the same as illegal?**
No. Many unethical acts are legal, so writing that something is illegal does not answer a question about ethics.
