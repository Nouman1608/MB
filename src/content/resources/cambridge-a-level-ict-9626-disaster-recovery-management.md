---
title: "Cambridge A Level Information Technology (9626): Disaster recovery management"
seoTitle: "A Level IT 9626 Disaster Recovery: Study Guide"
resourceType: "study-guides"
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
description: "Cambridge 9626 IT section 14.10 study guide: identifying and quantifying risks, controlling threats, restoring after a disaster and strategies such as UPS and backups."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide teaches **section 14.10 Disaster recovery management** of Topic 14 Communications technology in the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. It is A Level content, examined in Paper 3 Advanced Theory. The [communications technology revision notes](/resources/a-level-cambridge-ict-communications-technology-revision-notes/) summarise the whole topic; this page goes deeper on disaster recovery. Use it with the [disaster recovery practice questions](/resources/cambridge-a-level-ict-9626-disaster-recovery-management-practice/).

## What section 14.10 covers

| Syllabus strand | What you must be able to do |
|---|---|
| Identification of threats and risks | Types of disaster; risk analysis; perpetrator analysis; risk testing; quantifying the risk |
| Control of threats | How to detect threats and prevent a disaster, and how to restore after one |
| Strategies to minimise risks | Power protection, passwords and access controls, protection from malware and unauthorised access, back-up strategies |

A **disaster** is any event that causes loss of data or stops an organisation from using its IT systems. **Disaster recovery management** is the planning and action that keeps the damage small and restores normal operation quickly. It is part of a wider **business continuity** plan.

## Identifying threats and risks

### Types of disaster

| Type | Examples | Effect |
|---|---|---|
| Natural disasters | Flood, fire, earthquake, storm, lightning | Destroy buildings and equipment, and data stored there |
| Equipment and power failures | Disk crash, server fault, power cut, power surge | Stop systems and can corrupt or lose data |
| Cybercrime | Hacking, data theft, ransomware, denial of service | Steal, lock or destroy data and stop services |
| Malware | Viruses, worms, trojans | Corrupt files, spread across the network |
| Criminal activity | Theft of equipment, vandalism, sabotage, fraud | Loss of devices and data |
| Accidental disruptive events | Deleting a file, spilling a drink, human error, a digger cutting a cable | Loss of data or a link |

### Risk analysis

Risk analysis identifies **what could go wrong**, **how likely** it is, and **how serious** the effect would be. Steps: list the assets (data, hardware, software, staff, premises), list the threats to each, estimate the **likelihood** and **impact** of each, and rank them. Resources are then spent on the largest risks first.

### Perpetrator analysis

For deliberate threats, analyse **who** might attack and **why**: a competitor, a criminal seeking money, a disgruntled employee, a hacktivist or a foreign state. This shows what they would target, how skilled they are, what access they have and how they might work, and so which defences to use. For example, insiders are better stopped by access rights and monitoring than by a firewall at the edge.

### Risk testing

Testing shows whether defences and recovery plans work. Methods: **penetration testing** (authorised attempts to break in), **simulating disasters** (a fire drill or a pretend server failure), **restoring from backups** to check that they work, and reviewing logs. The results are used to improve the plan. Tests should be regular, because systems and threats change.

### Quantifying the risk

Risk can be given a number, so that the cost of protection can be compared with the cost of the loss.

**Annual loss expectancy = cost of one incident × expected number of incidents per year.**

**Worked example 1: comparing risks.**

- A server failure costs £20,000 and is expected once in 10 years (0.1 a year): 20,000 × 0.1 = **£2,000 a year**.
- A flood costs £150,000 and is expected once in 50 years (0.02 a year): 150,000 × 0.02 = **£3,000 a year**.
- A ransomware attack costs £60,000 and is expected once in 4 years (0.25 a year): 60,000 × 0.25 = **£15,000 a year**.

Ransomware is the greatest risk in money terms, so it needs the most attention, even though the flood is more severe per incident. A protection that costs £4,000 a year and removes the ransomware risk would save £11,000 a year overall. One that cost £20,000 a year to remove the flood risk would not be worth it.

Downtime can also be measured: if a system earns £2,500 an hour and is down for 6 hours, the lost income is 6 × 2,500 = **£15,000**, before the costs of repair are added.

## Control of threats

### Detecting threats and preventing a disaster

- **Monitoring**: logs, intrusion detection, alerts for unusual activity, and monitoring of temperature, smoke, water and power.
- **Anti-malware** scanning, with regular updates.
- **Access controls** and audit trails to show who did what.
- **Environmental protection**: fire detection and suppression, flood-proof server rooms, air conditioning.
- **Maintenance and updates** to remove faults and weaknesses.
- **Staff training** to reduce accidents and spot phishing.
- **Physical security** of the premises and equipment.

### Restoring after a disaster

A **disaster recovery plan** says exactly what to do. It includes:

1. A named team and contact list, with each person's role.
2. A list of systems in order of priority to restore.
3. How and where data is restored from backups.
4. Alternative premises and equipment, such as a **hot site** (ready to use at once), a **warm site** (equipment but needs data loading) or a **cold site** (empty space to fit out).
5. How to communicate with staff, customers and suppliers.
6. Testing and review after each event.

Two key measures guide the plan. The **recovery time objective (RTO)** is how long the system may be unavailable. The **recovery point objective (RPO)** is how much data, measured in time, may be lost. If backups are made every 4 hours, up to 4 hours of work could be lost in a failure, so the RPO is about 4 hours.

## Strategies to minimise risk

### Protection for power supplies

An **uninterruptible power supply (UPS)** holds a battery that takes over when the mains fails, giving time to save work and shut down safely, or to keep the system running until a generator starts. **Surge protectors** guard against voltage spikes. Backup generators supply long outages.

**Worked example 2: UPS run time.** A UPS stores 1,200 watt-hours, of which 80% is usable. The equipment draws 600 watts. Usable energy = 1,200 × 0.8 = 960 watt-hours. Run time = 960 ÷ 600 = **1.6 hours**, or 96 minutes. This is enough for a safe shutdown, but not for a long power cut, which needs a generator.

### Passwords and access controls

Strong passwords, two-factor authentication, user accounts with access rights set to the least needed, and timely removal of accounts when staff leave. These protect against unauthorised access and also limit accidental damage by users.

### Protection from malware and unauthorised access

Anti-malware software kept up to date, firewalls, encryption of sensitive data, software updates, restrictions on removable media, and email filtering.

### Backup strategies

A **backup** is a copy of data kept so it can be restored. Types:

| Type | What is copied | Backup time | Restore |
|---|---|---|---|
| Full | All data | Longest; most storage | Simplest: one set |
| Incremental | Only data changed since the last backup of any kind | Shortest; least storage | Slowest: the full backup plus every incremental |
| Differential | Data changed since the last full backup | Medium; grows each day | Full backup plus the latest differential |

**Worked example 3: comparing backup types.** A full backup of 500 GB is made on Sunday. About 20 GB of new data is added each day, and backups are made on Monday to Saturday.

- **Incremental:** each day copies the day's 20 GB. Storage for the week = 500 + 6 × 20 = **620 GB**. To restore on Saturday evening, you need the full backup and all six incrementals: 7 sets.
- **Differential:** each day copies everything since Sunday: 20, 40, 60, 80, 100, 120 GB, a total of 420 GB. Storage for the week = 500 + 420 = **920 GB**. To restore on Saturday evening, you need the full backup and one differential: 2 sets.

Incremental saves space and time, but is slower to restore. Differential uses more storage but restores faster and with fewer sets to go wrong.

Good practice also includes keeping copies **off-site** (or in the cloud) so a fire or flood at the main site does not destroy them, **testing** restores, **encrypting** backups, keeping several generations of backups (for example the grandfather-father-son cycle), and the **3-2-1 rule**: three copies, on two types of media, with one off-site.

## Common mistakes

- Treating a backup as the same as a disaster recovery plan. A backup is one part.
- Forgetting to test restores. A backup that has never been restored may not work.
- Keeping backups in the same room as the original data.
- Mixing up incremental and differential backups.
- Describing risks without likelihood or impact, or ignoring the cost of protection.
- Saying a UPS provides power indefinitely. It gives time to shut down or switch to a generator.

## Exam technique

- **Identify threats**: use the syllabus categories, and give an example of each for the scenario.
- **Quantify the risk**: use likelihood × cost, and show the working.
- **Strategies**: say what each does, and which risk it reduces.
- **Evaluate** a plan: link measures to the most serious risks, mention testing and off-site copies, and note the cost.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, Cambridge International Education. Topic 14 Communications technology, section 14.10 Disaster recovery management.
