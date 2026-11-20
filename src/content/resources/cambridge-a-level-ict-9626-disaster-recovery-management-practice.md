---
title: "Cambridge A Level Information Technology (9626): Disaster recovery management -- Practice Questions"
seoTitle: "A Level IT 9626 Disaster Recovery: Practice Questions"
resourceType: "practice-questions"
subject: "ict"
level: ["a-levels"]
topic: "Topic 14 – Communications technology"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 14.95
syllabusTopics:
  - qualification: "a-level"
    topic: "communications-technology"
  - qualification: "a-level"
    topic: "communications-technology"
    subtopic: "disaster-recovery-management"
description: "Thirteen original Cambridge 9626 IT section 14.10 questions with answers on risk analysis, quantifying risk, backups and disaster recovery strategies."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs; examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Disaster recovery management study guide](/resources/cambridge-a-level-ict-9626-disaster-recovery-management/) | [Communications technology revision notes](/resources/a-level-cambridge-ict-communications-technology-revision-notes/)

These questions are for **section 14.10 Disaster recovery management** (Topic 14, A Level) of Cambridge International AS & A Level Information Technology (9626), 2025–2027. All organisations and figures are invented.

---

## Section A

**1.** Give **three** types of disaster that can cause data loss. **[3]**

**2.** Describe what is meant by risk analysis. **[2]**

**3.** Explain the purpose of perpetrator analysis. **[2]**

**4.** State the purpose of an uninterruptible power supply. **[2]**

**5.** Distinguish between an incremental backup and a differential backup. **[2]**

## Section B

**6.** Lakeside Printing has assessed three risks.

| Risk | Cost of one incident | Expected number per year |
|---|---|---|
| Fire | £80,000 | 0.01 |
| Power cut | £5,000 | 0.5 |
| Malware attack | £30,000 | 0.2 |

**(a)** Calculate the expected yearly loss for each risk. **[3]**

**(b)** State which risk should be dealt with first and give a reason. **[2]**

**(c)** A protection costs £2,000 a year and would remove the malware risk entirely. State whether it is worth buying, with a calculation. **[2]**

**7.** A server room uses a UPS with 900 watt-hours of stored energy, of which 75% is usable. The equipment uses 450 watts.

**(a)** Calculate how long the UPS can supply power, in hours. **[3]**

**(b)** State why this is not enough on its own for a long power cut, and what else is needed. **[2]**

**8.** A full backup of 400 GB is made on Sunday. Each day from Monday to Friday, 15 GB of data is added.

**(a)** Calculate the storage used by the end of Friday if incremental backups are made each day. **[2]**

**(b)** Calculate the storage used by the end of Friday if differential backups are made each day. **[3]**

**(c)** State how many backup sets are needed to restore on Friday evening for each type. **[2]**

**(d)** Explain **one** advantage of each type. **[2]**

**9.** An online shop earns £1,800 an hour. A failure stops the site for 8 hours. Calculate the income lost and state **one** other cost to the shop. **[2]**

**10.** Explain why backup copies should be tested and kept off-site. **[4]**

**11.** Describe the contents of a disaster recovery plan. **[6]**

**12.** A hospital must restore its patient record system within 2 hours of a failure and lose no more than 15 minutes of data. Explain what recovery time and recovery point measures are, and describe how the hospital could meet these targets. **[6]**

**13.** A small company in a flood-prone area asks you to advise on reducing the risk to its data. Evaluate the measures it should take. **[6]**

---

## Answers

**1.** Any three from: natural disaster such as a flood or fire [1]; equipment or power failure [1]; cybercrime such as hacking or ransomware [1]; malware [1]; criminal activity such as theft [1]; accidental events such as deleting files [1]. **[3]**

**2.** Identifying what could go wrong [1] and estimating how likely each threat is and how serious its effect would be, so that the most serious risks are tackled first [1]. **[2]**

**3.** To find out who might carry out a deliberate attack and why, such as a criminal, a competitor or an employee [1], so that defences can be matched to the way they are likely to work and what they may target [1]. **[2]**

**4.** It supplies power from a battery [1] when the mains fails, giving time to save work and shut down safely, or until a generator starts [1]. **[2]**

**5.** An incremental backup copies only data changed since the last backup of any type [1]; a differential backup copies all data changed since the last full backup [1]. **[2]**

**6. (a)** Fire: 80,000 × 0.01 = £800 [1]. Power cut: 5,000 × 0.5 = £2,500 [1]. Malware: 30,000 × 0.2 = £6,000 [1].

**(b)** Malware [1], because it has the highest expected yearly loss [1].

**(c)** The loss prevented is £6,000, which is more than the £2,000 cost [1], so it is worth buying, saving £4,000 a year [1].

**7. (a)** Usable energy = 900 × 0.75 = 675 watt-hours [1]; time = 675 ÷ 450 [1] = 1.5 hours [1].

**(b)** A UPS has limited battery capacity [1], so a generator is needed for a long outage [1].

**8. (a)** 400 + (5 × 15) [1] = 475 GB [1].

**(b)** Differential backups: 15, 30, 45, 60, 75 = 225 GB [1][1]; 400 + 225 = 625 GB [1].

**(c)** Incremental: the full backup and 5 incrementals, which is 6 sets [1]. Differential: the full backup and the latest differential, which is 2 sets [1].

**(d)** Incremental: uses less storage and is quicker to make [1]. Differential: quicker and simpler to restore, with fewer sets needed [1].

**9.** 8 × 1,800 = £14,400 [1]. Other cost, for example: repair costs, loss of customer trust, or staff overtime [1]. **[2]**

**10.** A backup that has never been restored may not work or may be incomplete [1], so testing proves that data can be recovered and shows problems before a real disaster [1]. If backups are kept in the same place as the original, a fire or flood would destroy both [1], so a copy kept off-site, or in the cloud, survives [1]. **[4]**

**11.** Any six from: a named team with roles and contact details [1]; a list of systems in order of priority to restore [1]; where and how backups are stored and restored [1]; alternative premises and equipment, such as a hot or warm site [1]; steps to take for each type of disaster [1]; how to communicate with staff, customers and suppliers [1]; the recovery time and recovery point targets [1]; a schedule for testing and updating the plan [1]. **[6]**

**12.** Recovery time objective: the longest time the system can be unavailable, here 2 hours [1]. Recovery point objective: the longest period of data that can be lost, here 15 minutes [1]. To meet the data target, back up or replicate data at least every 15 minutes [1] to a second server in a different place [1]. To meet the time target, keep a standby system ready to take over (a hot site) [1], with a tested plan and trained staff [1]. Maximum 6 marks. **[6]**

**13.** Keep backups off-site, or in the cloud, so a flood does not destroy them [1]; move servers to an upper floor or a raised, waterproof room [1]; use a UPS and generator in case flooding cuts the power [1]; have a plan for an alternative location from which staff can work [1]; test restoring from backups regularly [1]; also protect from other threats such as malware, with anti-malware and access controls [1]. Evaluation: off-site backups are the cheapest and most valuable measure [1], while moving the room costs more but removes the risk to hardware [1]. Maximum 6 marks. **[6]**

## Where marks are usually lost

- Giving a list of disasters without any link to data loss.
- Quantifying risk by cost only, ignoring the probability.
- Mixing up incremental and differential backups.
- Ignoring testing and off-site storage of backups.
- Writing "have a plan" without saying what the plan contains.
