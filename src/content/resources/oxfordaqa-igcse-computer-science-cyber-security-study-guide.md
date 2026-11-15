---
title: "OxfordAQA IGCSE Computer Science (9210): Cyber security -- Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 6: Cyber security"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 6
syllabusTopics:
  - qualification: "igcse"
    topic: "cyber-security-9210"
description: "Social engineering, malware, brute force and other cyber threats, and the methods used to detect and prevent them, for OxfordAQA International GCSE 9210."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: credited to harris-khan (accountable teacher, D-379)."
---

Cyber security is the protection of computer systems, networks and data from attack, damage and unauthorised access. Almost every organisation stores data about people, so a breach can cause financial loss, identity theft and harm to reputation. In OxfordAQA International GCSE Computer Science (9210) you need to know the main threats, how each works, and the measures that detect or prevent them. The best answers always say how a threat works and which measure stops it, not just the names.

## Where this fits in the specification

Cyber security is Topic 6, directly after computer networks, because most attacks travel across networks and many defences, such as firewalls and encryption, are network features. It also uses ideas from data representation (encryption changes data into a different form) and from relational databases (SQL injection targets database queries), so it is a good topic to revise alongside them.

## Why attacks happen

People attack systems for financial gain (stealing card details or demanding payment), to steal personal data, to disrupt a service, to gain information or competitive advantage, or simply to test their skill or cause damage. A threat can come from outside the organisation, or from inside it, through carelessness or deliberate misuse.

## Social engineering

**Social engineering** tricks people into giving away information or access, rather than breaking technical defences. People are often the weakest point in security. Techniques include:

- **Phishing**: an email or text that looks genuine and persuades the recipient to click a link or reveal details, such as a password. Warning signs are an unexpected message, a generic greeting, spelling mistakes, urgent wording and a link that does not match the real organisation.
- **Pharming**: redirecting a user from a genuine website to a fake one, even when the correct address is typed, so that login details are captured.
- **Blagging**: inventing a scenario, usually by phone, to persuade someone to hand over information, such as pretending to be from the bank.
- **Shouldering** (shoulder surfing): watching someone enter a PIN or password over their shoulder.

The main defence is training and awareness, along with sensible procedures, such as never giving a password by phone or email.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-cyber-security-study-guide--08-social-engineering.webp" width="900" height="970" alt="Four panels, one for each social engineering technique. Phishing: an envelope with a click button and a hook, a fake email or text that tempts you to click or reply. Pharming: a browser window with the right address typed is redirected by an arrow to a window marked FAKE site. Blagging: a phone and a speech bubble saying I am from your bank, an invented story that gets information. Shouldering: an eye watching a keypad, someone watching a PIN or password being entered. A note says the main defence is training and awareness." loading="lazy">
  <figcaption>Phishing, pharming, blagging and shouldering trick people instead of breaking technical defences.</figcaption>
</figure>


## Malware

**Malware** is software designed to harm a system or steal data. A **virus** attaches itself to a file and spreads when that file is opened or shared. A **worm** spreads by itself across a network without a host file. A **trojan** pretends to be useful software but contains harmful code. **Ransomware** locks or encrypts files and demands payment for release. **Spyware** secretly records what the user does, such as keystrokes. Effects include deleted or corrupted files, stolen data, slower computers and loss of control of the machine.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-cyber-security-study-guide--09-malware-types.webp" width="900" height="1036" alt="Five rows, one per kind of malware, each with a simple icon. Virus: a document with a bug attached; it attaches to a file and spreads when the file is opened. Worm: three linked computers with a wriggling red line between them; it spreads itself across a network with no host file. Trojan: a box marked FREE with a bug hidden inside; it looks like useful software but contains harmful code. Ransomware: a locked document; it locks or encrypts files and demands payment. Spyware: an eye above keys; it secretly records what you do, such as keystrokes. Effects listed are deleted files, stolen data and a slower computer." loading="lazy">
  <figcaption>Five kinds of malware and what each one does.</figcaption>
</figure>


## Other threats

- **Brute force attack**: trying every possible combination of characters until the password is found. Longer passwords with a mix of character types take much longer to crack.
- **Denial of service (DoS) attack**: flooding a server with so many requests that it cannot respond to genuine users. A distributed attack (DDoS) uses many computers at once.
- **Data interception**: capturing data as it travels across a network, for example on an unsecured public Wi-Fi.
- **SQL injection**: entering SQL code into a web form field so that the database runs it, which can reveal or change data. Checking and sanitising user input prevents it.
- **Poor network policy**: weak passwords, no staff training, unpatched software and no rules about devices all leave gaps.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-cyber-security-study-guide--10-dos-attack.webp" width="900" height="1050" alt="Two panels. DoS: one attacker computer sends six arrows of requests at a server, which is too busy; a genuine user trying to reach the server has a dashed arrow blocked by a cross. DDoS, the distributed version: six attacker computers each send requests at the same server at once, and the genuine user is again blocked. The result in both cases is that so many requests arrive that genuine users cannot get in." loading="lazy">
  <figcaption>A DoS attack floods a server with requests; a DDoS attack does it from many computers at once.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-cyber-security-study-guide--14-sql-injection.webp" width="900" height="820" alt="Two lanes. In the first, input is not checked: SQL code typed into a web form field goes straight to the database, which runs it, so data is revealed or changed. In the second, input is checked and sanitised before it reaches the database, so the SQL code is treated as plain text and not run and the data stays safe." loading="lazy">
  <figcaption>Checking and sanitising input stops SQL code typed into a form from running.</figcaption>
</figure>


## Detecting and preventing threats

| Measure | What it does |
|---|---|
| Penetration testing | Authorised testers try to break into a system to find weaknesses before criminals do |
| Anti-malware software | Scans for and removes known malware and blocks suspicious files |
| Firewall | Monitors traffic and blocks unauthorised connections into and out of a network |
| Strong passwords and regular changes | Make guessing and brute force harder |
| User access levels | Limit each person to the data and actions they need |
| Encryption | Scrambles data so that intercepted data cannot be read without the key |
| Biometrics | Uses fingerprints or faces, which are hard to copy or share |
| CAPTCHA | A test that distinguishes humans from automated programs |
| Automatic software updates | Fix known weaknesses as soon as a patch is released |
| Backups | Allow data to be recovered after an attack |

**Encryption** converts plaintext into ciphertext using an algorithm and a key. Only someone with the right key can turn it back. It does not stop data from being intercepted; it makes intercepted data useless. A firewall does not remove malware that is already inside a device, which is why several layers of defence are used together.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-cyber-security-study-guide--12-encryption.webp" width="900" height="930" alt="A flow diagram. The plaintext HELLO is encrypted using an algorithm and a key to give the ciphertext KHOOR. The ciphertext is sent across the network. An eye representing an interceptor sees only KHOOR, which is unreadable without the key. The receiver decrypts the ciphertext with the key and gets HELLO again. The example cipher, shifting each letter by 3, is illustrative and not from the lesson. A note says encryption does not stop interception but makes intercepted data useless." loading="lazy">
  <figcaption>Encryption does not stop interception; it makes intercepted data unreadable without the key.</figcaption>
</figure>


## Worked example 1: how long does brute force take?

A hacker's program tries guesses at a steady rate. Compare three passwords.

(a) A 4-digit PIN uses only digits. Number of combinations = 10 x 10 x 10 x 10 = 10^4 = 10,000. At 1,000 guesses per second, the worst case is 10,000 / 1,000 = 10 seconds.

(b) A 6-character password of lower-case letters only. Combinations = 26^6 = 308,915,776. At 1,000,000 guesses per second the worst case is 308.9 seconds, which is just over 5 minutes.

(c) An 8-character password using upper-case, lower-case and digits (62 possible characters). Combinations = 62^8 = 218,340,105,584,896. At 1,000,000,000 guesses per second the worst case is about 218,340 seconds, which is about 60.7 hours, or about 2.5 days.

Lengthening the password and widening the character set increase the number of combinations dramatically, which is why both are recommended. The average attack finds the password in about half of the worst-case time, but the exam answer should use the total number of combinations unless told otherwise.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-cyber-security-study-guide--11-brute-force-time.webp" width="900" height="921" alt="Three horizontal bars on a logarithmic scale of the number of combinations. A 4-digit PIN has 10 to the power 4, which is 10,000 combinations, and takes 10 seconds at 1,000 guesses per second. A 6-character lower-case password has 26 to the power 6, which is 308,915,776 combinations, and takes 308.9 seconds, just over 5 minutes, at 1,000,000 guesses per second. An 8-character password of upper-case, lower-case and digits has 62 to the power 8, which is 218,340,105,584,896 combinations, and takes about 60.7 hours, about 2.5 days, at 1,000,000,000 guesses per second." loading="lazy">
  <figcaption>Longer passwords with more character types have vastly more combinations to try.</figcaption>
</figure>


## Worked example 2: recommending protection

A medical clinic stores patient records on a server that staff use from their own devices, and it also has a public website with an appointment form. Recommend protection.

Strong measures would be: encryption of records stored on the server and sent across the network, so intercepted data cannot be read; user access levels so that reception staff can see appointments but not full medical notes; a firewall to block unauthorised connections; anti-malware software and automatic updates on every device; and staff training about phishing and blagging. For the web form, validate and sanitise input to prevent SQL injection. Penetration testing would then check that the measures work. A clear answer links each measure to a specific threat in the scenario.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-cyber-security-study-guide--13-clinic-defences.webp" width="900" height="830" alt="A diagram of a medical clinic. On the left, the internet with an attacker whose arrow is stopped at a brick firewall wall, and an authorised tester who is allowed to probe the defences. On the right, the clinic network: the patient records server with encryption and access levels per role; staff devices with anti-malware, automatic updates and staff training on phishing; and the appointment form on the public website, where input is validated and sanitised to stop SQL injection. A note says a firewall controls traffic but does not remove malware." loading="lazy">
  <figcaption>Each measure in the clinic answers a specific threat.</figcaption>
</figure>


## Common mistakes

- Confusing a virus and a worm. A worm spreads by itself; a virus needs a host file to be opened.
- Saying that a firewall "stops viruses". A firewall controls network traffic; anti-malware software deals with viruses.
- Describing phishing, pharming and blagging all as "hacking". They are social engineering or redirection, not technical break-ins.
- Saying encryption prevents interception. It protects the content after interception.
- Naming a measure without saying what threat it stops.
- Thinking cyber security is only about outsiders, when staff mistakes cause many breaches.
- Calling penetration testing an attack. It is authorised, to find weaknesses.

## Exam technique

For **describe** questions on a threat, say what the attacker does and what happens as a result. For **explain how** a measure helps, name the threat and say how the measure stops or limits it, for example "a firewall blocks incoming connections that are not on the allowed list, so a hacker cannot reach the internal network". For recommendation questions, pick measures to match the scenario and avoid listing every measure. Use the correct terms: **malware**, **phishing**, **brute force**, **encryption**, **penetration testing**.

## Check your understanding

1. What is social engineering? *Tricking people into revealing information or giving access, rather than attacking the technology.*
2. Give two signs that an email may be a phishing attempt. *Unexpected sender or message, generic greeting, spelling mistakes, urgent request, suspicious link.*
3. State one difference between a virus and a worm. *A virus attaches to a file and needs it to be opened; a worm spreads by itself across a network.*
4. How does a DoS attack affect a website? *It floods the server with requests so that genuine users cannot access the site.*
5. Why is a long password with mixed characters harder to crack? *There are many more possible combinations to try in a brute force attack.*
6. How many combinations does a 3-digit PIN have? *10^3 = 1,000.*
7. Explain the purpose of penetration testing. *Authorised testers look for weaknesses so they can be fixed before real attackers find them.*
8. Why does encryption protect data that is intercepted? *Without the key the ciphertext cannot be turned back into readable data.*

## Frequently asked questions

**What is social engineering in cyber security?**
Social engineering tricks people into giving away information or access, rather than breaking technical defences. Examples include phishing, pharming, blagging and shouldering, and the main defence is training and awareness.

**What is the difference between a virus and a worm?**
A virus attaches itself to a file and needs that file to be opened to spread. A worm spreads by itself across a network.

**Does a firewall stop viruses?**
No. A firewall monitors network traffic and blocks unauthorised connections, while anti-malware software scans for and removes malware such as viruses. Saying a firewall "stops viruses" is a common mistake.

**Why is a long password harder to crack by brute force?**
A brute force attack tries every possible combination of characters. Making a password longer and using a wider character set increases the number of combinations dramatically, so the worst-case time to crack it grows.

**How should you answer a question asking you to recommend security measures?**
Pick measures that match the scenario and link each one to the specific threat it stops, rather than listing every measure. This topic is Topic 6 of OxfordAQA International GCSE Computer Science 9210.
