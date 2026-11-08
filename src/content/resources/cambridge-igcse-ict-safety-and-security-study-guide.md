---
title: "Cambridge IGCSE ICT (0417): Safety and security -- Study Guide"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 8: Safety and security"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 8
syllabusTopics:
  - qualification: "igcse"
    topic: "safety-and-security"
  - qualification: "igcse"
    topic: "safety-and-security"
    subtopic: "physical-safety-0417"
  - qualification: "igcse"
    topic: "safety-and-security"
    subtopic: "esafety-0417"
  - qualification: "igcse"
    topic: "safety-and-security"
    subtopic: "security-of-data-0417"
description: "Physical safety, eSafety and the security of data, including threats and protection methods, for Cambridge IGCSE ICT 0417 Topic 8."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

Topic 8 of Cambridge IGCSE ICT 0417 covers three related but different ideas. **Physical safety** is about keeping people safe from the equipment. **eSafety** is about keeping people safe when they use the internet and electronic communication. **Security of data** is about keeping data safe from loss, damage and unauthorised access. A common cause of lost marks is blending these together, so keep the three headings separate in your revision.

## Where this fits in the specification

Safety and security connects to networks and communication (the places where data is sent and intercepted), to the systems life cycle (security is designed in from the start) and to the effects of ICT on society, such as the risks of social media. The [Network Issues and Communication study guide](/resources/igcse-ict-network-issues-and-communication/) covers the network side of security risks.

## 8.1 Physical safety

Physical safety questions ask for a **hazard**, the possible **harm** and a **way to reduce the risk**. All three parts are usually needed for full marks.

| Hazard | Harm | Prevention |
|---|---|---|
| Trailing cables | People trip and are injured; equipment is pulled down | Use cable ducts or covers, wireless connections, or tidy cable routes |
| Overloaded sockets or damaged cables | Fire | Use a limited number of devices per socket, check cables, use surge protectors |
| Liquids near equipment | Electric shock or short circuit | Do not allow drinks or food in the room |
| Heavy equipment on unstable furniture | Equipment falls and injures someone | Use strong, stable desks and stands |
| Exposed wires and faulty equipment | Electrocution | Regular testing by qualified staff; use a residual current device (RCD) |
| Poor ventilation | Overheating of equipment | Keep vents clear, do not stack equipment |

Fire protection also needs a suitable extinguisher (carbon dioxide or powder, not water, for electrical fires) and a clear escape route. Health issues from long-term use, such as back and eye strain, are dealt with in the effects of ICT, though you may be asked for ergonomic measures such as an adjustable chair, a footrest, a screen filter or regular breaks.

## 8.2 eSafety

eSafety is the safe use of the internet, email, social media and online games. Keep **personal data** (name, address, phone number, school, photos, bank details) private, because it can be used for identity theft, fraud or to find and harm a person.

**Sensible practice when using the internet and email**

- Only give personal information to websites you trust, and check that the address starts with **https** and shows a padlock.
- Do not open attachments or follow links in unexpected messages.
- Use a **nickname** or avatar instead of your real name, and do not publish a school uniform, address or location.
- Use **privacy settings** on social media so that only approved friends can view posts and photos.
- Never agree to meet someone you have only met online. Tell a trusted adult and report any abuse to the website.
- Think before posting. Content can be copied and may stay online permanently.
- Use **strong passwords** and keep them private.
- Use only reputable sites and software, and use **parental controls** or filtering where appropriate.

**Threats to know:** cyberbullying (harassment through messages or posts), **grooming** (an adult building a false friendship with a young person to harm them), exposure to inappropriate content, and scams that trick users into giving up data.

## 8.3 Security of data

### Threats

- **Hacking**: gaining unauthorised access to a computer system, to steal, change or delete data.
- **Malware**: harmful software including **viruses** (which attach to files and copy themselves), **worms**, **trojans** (programs that pretend to be useful), **spyware** (records activity) and **ransomware**.
- **Keylogger**: a type of spyware that records keystrokes to capture passwords.
- **Phishing**: a fraudulent email that appears to come from a trusted organisation and tricks the user into revealing details, often by following a link to a fake website.
- **Pharming**: malicious code redirects a user from a genuine website address to a fake one, even if the user types the correct address.
- **Smishing and vishing**: phishing carried out by SMS text message (smishing) and by voice call (vishing).
- **Data loss** from accident, hardware failure, fire or theft, and **interception** of data sent over a network.

### Protection

| Method | What it does | Limitation |
|---|---|---|
| Passwords and user IDs | Restrict access to authorised users | Weak or shared passwords can be guessed |
| Two-factor authentication | A second proof, such as a code sent to a phone | Needs a second device; can be intercepted |
| Biometrics | Fingerprint, face or iris recognition | Costly; can fail through injury or poor lighting |
| Firewall | Monitors and blocks suspicious traffic in and out | Cannot stop users running malware they download |
| Anti-malware software | Scans and removes malware; needs regular updates | Cannot detect brand-new threats immediately |
| Encryption | Scrambles data so that it is unreadable without the key | Needs a key; slows processing |
| SSL/TLS | Encrypts data between a browser and a website | Does not prove the website itself is honest |
| Back-ups | Copies of data kept elsewhere to restore after loss | Take time and storage; must also be protected |
| Access rights | Different users can read, write or delete only what they need | Needs managing |

Encryption does not stop data being intercepted; it makes interception useless without the key. Make this distinction in explanation questions.

### Worked example: why password length matters

A password is made only of lower-case letters (26 possibilities per character) and has 8 characters.

Number of combinations = 26 to the power 8 = **208 827 064 576**.

If the same 8-character password may use upper-case, lower-case and digits (62 possibilities per character), the number is 62 to the power 8 = **218 340 105 584 896**.

That is about 1 000 times more combinations (218 340 105 584 896 / 208 827 064 576 is roughly 1 045), so a hacker trying every combination needs far longer. Adding characters increases the number even faster. This is why advice is to use a long password with a mix of character types, and not to reuse it across sites. Remember that a long password made from a common word or personal detail can still be guessed by a dictionary attack, so combinations alone do not guarantee strength.

### Worked example: a scenario answer

A clinic stores patient records on a network. A strong answer to "describe how the clinic can keep the data secure" might say: staff log in with a user ID and password, and the records system gives doctors write access but receptionists read-only access; a firewall blocks unauthorised traffic; patient files are encrypted so that stolen data is unreadable; anti-malware is updated daily; and a back-up is taken every night and stored in a separate building. Each method comes with a purpose, which is what gains the marks.

## Common mistakes

- Giving "use an anti-virus" for every threat without naming what threat it counters.
- Mixing up phishing (the user is tricked into acting) with pharming (the user is redirected silently).
- Saying that a firewall removes viruses. It filters traffic; anti-malware removes malware.
- Describing a hazard without saying the harm it causes, or a precaution without saying the risk it reduces.
- Saying that encryption prevents hacking. It protects the data after access is gained.

## Exam technique

**State** and **give** need a short answer. **Describe** needs the feature plus what it does. **Explain** needs a reason. Always match the answer to the scenario and use the board's terms, such as eSafety, phishing, pharming, encryption and firewall.

## Check your understanding

1. Give one physical safety hazard and a way of reducing it. *Trailing cables; use cable ducts or wireless links.*
2. State two eSafety rules for using social media. *Use privacy settings; do not share personal data such as address or school.*
3. What is grooming? *An adult builds a false friendship online to gain trust and harm a young person.*
4. Distinguish between phishing and pharming. *Phishing tricks a user to give details through a fake message or link; pharming redirects the user to a fake website automatically.*
5. Why does two-factor authentication improve security? *A password alone is not enough; the attacker also needs a second item, such as the user's phone.*
6. State the purpose of a firewall. *It monitors network traffic and blocks unauthorised access.*
7. Calculate the number of possible 4-digit PIN codes using digits 0 to 9. *10 to the power 4 = 10 000.*
8. Explain why back-ups are part of data security. *They allow data to be restored after loss, damage or ransomware.*
