---
title: "Cambridge A Level Information Technology (9626): Personal data"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Topic 5 – eSecurity"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 5.1
syllabusTopics:
  - qualification: "a-level"
    topic: "esecurity"
  - qualification: "a-level"
    topic: "esecurity"
    subtopic: "personal-data"
description: "Cambridge 9626 IT section 5.1 study guide: what personal data is, keeping it confidential and secure, smishing, vishing, phishing, pharming and firewalls, with worked scenarios."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide teaches **section 5.1 Personal data** of Topic 5 eSecurity in the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. It is AS Level content, examined in Paper 1 Theory. The [eSecurity overview](/resources/a-level-cambridge-ict-esecurity/) covers the whole topic; this page goes deeper on personal data: why it must be protected, how it is kept confidential and secure, and how criminals try to gather it. Use it with the [personal data revision notes](/resources/cambridge-a-level-ict-9626-personal-data-revision-notes/) and the [personal data practice questions](/resources/cambridge-a-level-ict-9626-personal-data-practice/).

## What section 5.1 covers

| Syllabus point | What you must be able to do |
|---|---|
| What personal data is | Define and give examples |
| Keeping it confidential | Explain why, and how, including removing geotags, anonymising and aggregating, and duty of confidence measures |
| Keeping it secure | Describe network security measures |
| Gathering by unauthorised people | Explain smishing, vishing, phishing and pharming and how they can be prevented, including hardware and software firewalls |
| Evaluation | Give advantages and disadvantages of the methods of preventing misuse |

## What personal data is

**Personal data** is any information that relates to a living person who can be **identified** from it, either on its own or when combined with other data.

Examples: name, home address, email address, phone number, date of birth, photographs, national identity numbers, bank and card details, medical records, fingerprints, online usernames, location data and IP addresses.

Some data is more **sensitive** than the rest, such as health, political opinions, religion or biometric data, and needs extra protection. A person can be identified even without a name: a postcode, date of birth and job title together may point to one individual.

## Why personal data should be kept confidential

Confidentiality means that only people who are **authorised** can see the data. It matters because:

- **Identity theft and fraud:** criminals can open accounts, take loans or make purchases in someone else's name.
- **Physical safety:** a stranger who knows a home address, a routine or a child's school may harm or stalk someone.
- **Discrimination and embarrassment:** medical or financial details could cost a person a job or damage their reputation.
- **Legal duties:** organisations that hold personal data must protect it under data protection laws and can be fined if they do not.
- **Trust:** customers stop using a business that loses their data.

## How personal data can be kept confidential

### Removing geotags from photos and videos

A **geotag** is location information (latitude and longitude) stored automatically in a photo or video file by a phone or camera. Anyone who downloads the file could read it and learn where a child's bedroom, a home or a workplace is. The geotag is removed by turning off location tagging in the camera settings or by using a tool that strips the **metadata** before the file is shared or posted.

### Anonymising information

**Anonymising** removes or changes details that identify a person so the data can no longer be linked to them. For example, a hospital replaces names and addresses in research data with random codes and deletes the date of birth. The research can continue without revealing who the patients are.

### Aggregating information

**Aggregating** combines individual records into totals or averages so that no single person can be seen. Example: a school publishes "62% of Year 11 students passed", not each student's mark. Small groups must be treated with care, because a total for a group of two people could reveal the individual figures.

### Duty of confidence measures

A **duty of confidence** is a legal or contractual obligation to keep information secret. Measures include:
- Staff **contracts** and **confidentiality (non-disclosure) agreements**.
- A company **data protection policy** and regular **training**.
- **Access rights**, so staff see only the data their job requires.
- **Disciplinary action** for staff who share data without permission.
- Professional codes, such as the duty of a doctor or a lawyer to keep client information private.

## How personal data can be kept secure

**Security** is protecting data from unauthorised access, loss or change. Network security measures include:

| Measure | How it protects personal data |
|---|---|
| Strong passwords and two-factor authentication | Make it harder to log in as someone else |
| Access rights and user levels | Limit who can open, edit or delete records |
| Firewalls | Block unauthorised traffic into and out of a network |
| Encryption | Makes stolen data unreadable (see section 1.3) |
| Anti-malware software | Detects and removes software that steals data |
| Software updates (patches) | Close security weaknesses |
| Back-ups | Allow data to be restored after loss or ransomware |
| Physical security | Locked rooms and card entry stop theft of devices |
| Monitoring and audit logs | Show who accessed data and flag unusual activity |

## How personal data is gathered by unauthorised people

Criminals often trick people into giving away their data. This is called **social engineering**: using deception rather than technical hacking.

### Phishing

The criminal sends an **email** that appears to be from a trusted organisation, such as a bank. It asks the user to click a link to a fake website and enter their login or card details. The fake site looks real, but anything typed goes to the criminal.

**Warning signs:** a generic greeting ("Dear customer"), spelling mistakes, an urgent threat ("your account will be closed"), a sender address that does not match the organisation, and links that point to a different web address from the one displayed.

### Smishing

**Smishing** is phishing by **SMS text message**. The text claims, for example, that a parcel could not be delivered and asks the user to follow a link and pay a small fee or enter card details.

### Vishing

**Vishing** is phishing by **voice**: a phone call or voicemail. The caller pretends to be from a bank, tax office or technical support and asks the victim to read out a PIN, password or one-time code, or to install remote access software.

### Pharming

In **pharming** the user is sent to a fake website **even when they type the correct address**. Malicious code on the computer, or a tampered DNS record, redirects the web address to the criminal's server, which holds a copy of the real site. The user does not need to click a link, so it is harder to spot. A padlock and a valid certificate in the browser are signs that the site is genuine.

| Attack | Delivered by | User action needed |
|---|---|---|
| Phishing | Email | Click a link or open an attachment and enter details |
| Smishing | SMS text | Follow a link or reply |
| Vishing | Phone call | Give details by voice |
| Pharming | Malicious code that redirects | Visit the website normally |

### Preventing these attacks

- **Do not click links** in unexpected messages. Go to the organisation's website by typing the address or using a saved bookmark.
- **Never give passwords, PINs or one-time codes** over the phone or in a message. Real organisations do not ask for them.
- Check the web address and the **padlock** or certificate before entering details.
- Use **anti-malware software** and keep browsers and operating systems **updated** to block pharming code.
- Use **spam filters** to catch phishing emails and **two-factor authentication**, so a stolen password alone is not enough.
- **Train** staff and users to recognise attacks and report them.
- Use a **firewall**.

### Firewalls

A **firewall** examines the data packets entering and leaving a network or computer and compares them with a set of **rules**. It blocks packets from unauthorised sources or to unwanted ports and allows the rest. It can also stop spyware from sending data out.

| Feature | Hardware firewall | Software firewall |
|---|---|---|
| What it is | A separate device (or part of a router) placed between the network and the internet | A program installed on one computer |
| Protects | Every device on the network | Only the device it is installed on |
| Advantages | Does not use the computer's processing power; protects the whole network; managed in one place | Cheap or free; can have different rules for each program; protects a laptop on any network |
| Disadvantages | More expensive; needs a specialist to set up; does not protect a laptop away from the network | Uses the computer's memory and processor; must be installed and updated on every device; can be disabled by malware |

Neither type stops a user from being **tricked**. A firewall will allow an email that passes its rules, so a person can still click a phishing link.

## Advantages and disadvantages of the methods

| Method | Advantage | Disadvantage |
|---|---|---|
| Anonymising | Data can be shared for research without identifying people | Can be reversed if records are combined with other data; information is lost |
| Aggregating | Shows trends without revealing individuals | Detail is lost; small groups may still reveal individuals |
| Removing geotags | Stops location being revealed | The user must remember to do it each time |
| Duty of confidence | Clear rules and legal consequences | Cannot stop a determined person who ignores the rules |
| Firewall | Blocks many unauthorised connections | Does not stop a user being tricked; needs correct rules |
| Staff training | Reduces human error | Needs repeating; people still make mistakes |

## Worked example: advising a small clinic

A dental clinic stores patient names, addresses and health records on a network. Patients have recently received text messages that appear to come from the clinic, asking them to pay an invoice by following a link.

1. **Identify the attack:** smishing, because the message is an SMS that tries to collect payment details.
2. **Explain the risk:** the criminals could take card details, and the link might install spyware.
3. **Actions for the clinic:** tell patients that the clinic never asks for payment by text link; protect patient records with access rights, encryption and a hardware firewall; train staff on phishing and vishing; and remove names from any data used for reports (anonymise).
4. **Conclusion:** technical measures protect the stored data, but the main defence against smishing is informing patients and staff.

## Common mistakes

- Defining personal data as only a name and address.
- Mixing up **anonymising** (removing identifying details) and **aggregating** (combining into totals).
- Writing that pharming needs the user to click a link. It redirects even when the correct address is typed.
- Saying that a firewall prevents all hacking and phishing.
- Confusing smishing (text) with vishing (voice).
- Listing "use strong passwords" for every question without linking it to the scenario.

## Exam technique

- **Define** terms with one precise sentence and add an example.
- **Explain** prevention: state the measure, how it works and what it stops.
- For **hardware and software firewalls**, give the difference in what is protected.
- For **evaluate** or **discuss** questions, give an advantage and a disadvantage of each method and finish with a judgement about the scenario.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, Cambridge International Education. Topic 5 eSecurity, section 5.1 Personal data.
