---
title: "Cambridge A Level Information Technology (9626): Cloud computing"
seoTitle: "A Level IT 9626 Cloud Computing: Study Guide"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Topic 14 – Communications technology"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 14.4
syllabusTopics:
  - qualification: "a-level"
    topic: "communications-technology"
  - qualification: "a-level"
    topic: "communications-technology"
    subtopic: "cloud-computing"
description: "Cambridge 9626 IT section 14.4 study guide: characteristics and uses of cloud computing, shared resources, and its advantages and disadvantages for individuals and organisations."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide teaches **section 14.4 Cloud computing** of Topic 14 Communications technology in the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. It is A Level content, examined in Paper 3 Advanced Theory. The [communications technology revision notes](/resources/a-level-cambridge-ict-communications-technology-revision-notes/) summarise the whole topic; this page goes deeper on cloud computing. Use it with the [cloud computing revision notes](/resources/cambridge-a-level-ict-9626-cloud-computing-revision-notes/) and the [cloud computing practice questions](/resources/cambridge-a-level-ict-9626-cloud-computing-practice/).

## What section 14.4 covers

| Syllabus strand | What you must be able to do |
|---|---|
| Characteristics | Describe cloud computing, including the sharing of computing resources |
| Uses | Explain how individuals and organisations use it |
| Evaluation | Give advantages and disadvantages for individuals and for organisations |

**Cloud computing** means using computing resources, such as storage, processing power, databases and software, that are held on remote servers and reached over the internet, instead of on a local computer or the organisation's own servers. The "cloud" is the collection of servers, usually in large data centres owned by a provider. Users do not need to know where the servers are.

## Characteristics

### Shared computing resources

The provider's servers are **pooled** and shared between many customers. Each customer receives a share, often through virtual servers, and the system allocates more or less as demand changes. This is why cloud computing can be cheap. Customers pay for a share instead of buying whole machines that are idle most of the time.

Other typical characteristics:

- **On-demand self-service**: users create and remove resources themselves, using a web page, without asking the provider's staff.
- **Broad network access**: the service is reached from any device with an internet connection.
- **Rapid elasticity (scalability)**: resources increase when demand rises and decrease when it falls.
- **Measured service (pay as you use)**: the provider records use and charges for what is consumed, or for a monthly subscription.
- **Remote management**: the provider looks after hardware, power, cooling, updates and backup.

### Service levels

The cloud is offered at three common levels.

| Level | What the customer gets | Example use |
|---|---|---|
| Software as a Service (SaaS) | A finished application used through a browser | Web email, online office tools, customer management systems |
| Platform as a Service (PaaS) | An environment for building and running applications | A team deploys a web application without managing servers |
| Infrastructure as a Service (IaaS) | Virtual servers, storage and networks | A company hosts its own systems on rented servers |

### Where the cloud is located

A **public cloud** is shared by many customers. A **private cloud** is used by a single organisation, in its own premises or rented. A **hybrid cloud** combines both, for example keeping confidential data in a private cloud and using a public cloud for extra capacity.

## Uses of cloud computing

**By individuals:**
- Storing photographs, music and documents online, so they are available from any device.
- Using web-based email, calendars and document editing.
- Streaming video and music.
- Backing up phones and computers automatically.
- Collaborating on shared documents with friends or classmates.

**By organisations:**
- Hosting websites and online shops, with extra capacity at busy times.
- Storing and backing up company data.
- Running business applications such as accounts, payroll and customer records as a subscription.
- Large calculations and data analysis, using many servers for a short time.
- Software development and testing without buying hardware.
- Supporting staff who work from home or travel.
- Disaster recovery: copies of data and systems in a different location.

**Worked example 1: elasticity and cost.** A ticket seller normally needs 2 servers for 30 days (24 hours a day). For 3 days each month (72 hours), sales spike and it needs 8 more servers. A cloud server costs £0.40 per hour. Buying 10 servers would cost £250 a month each to own and run.

- Normal use: 2 × 24 × 30 = 1,440 server-hours.
- Peak extra use: 8 × 72 = 576 server-hours.
- Total = 1,440 + 576 = 2,016 server-hours × £0.40 = **£806.40** a month.
- Owning enough servers for the peak: 10 × £250 = **£2,500** a month.

The cloud is cheaper here because most of the owned capacity would be idle for 27 days of the month. If demand were constant, the comparison could go the other way.

**Worked example 2: owning against renting over time.** A company can buy a server for £12,000 and spend £1,500 a year on running costs. Over 4 years, the cost is 12,000 + (1,500 × 4) = **£18,000**. A cloud service of equal power costs £420 a month, which over 48 months is **£20,160**. The owned server is cheaper in raw cost, but the company must also pay for staff, replacement, security and idle capacity, and it has less flexibility. A fair decision includes these factors.

**Worked example 3: moving data to the cloud.** A company uploads 50 GB over a link of 20 megabits per second. 50 GB = 50 × 8,000 = 400,000 megabits. Time = 400,000 ÷ 20 = **20,000 seconds**, about 5.6 hours. For a large first upload, the speed of the internet connection limits how quickly cloud storage can be used, and a slow link makes regular large backups difficult.

## Advantages and disadvantages

### For individuals

| Advantages | Disadvantages |
|---|---|
| Files available from any device with an internet connection | Needs an internet connection; nothing is reachable offline unless synchronised |
| Free or cheap storage and software | Free space is limited and prices may rise |
| Automatic backup protects against loss of a device | Privacy: the provider holds personal files |
| Easy sharing and collaboration | Files may be lost or exposed if the provider is hacked or fails |
| Software kept up to date automatically | The user has little control and may be locked into one provider |

### For organisations

| Advantages | Disadvantages |
|---|---|
| No large purchase of hardware; costs can be spread as subscriptions | Costs continue indefinitely and can grow with use |
| Scale up or down quickly as demand changes | Depends on the internet connection and the provider's reliability |
| Provider handles maintenance, updates and backups, saving staff time | Less control over where and how data is kept |
| Staff can work from anywhere | Security and legal concerns, especially with personal or confidential data |
| Disaster recovery is easier, with data held at another site | Moving to another provider may be difficult and costly (lock-in) |
| Access to powerful processing for short periods | Performance may vary when the provider is busy |

Security risks include unauthorised access, data breaches at the provider, and data being stored in a country with different laws. Organisations reduce these by encrypting data, using strong access controls, choosing reputable providers, and keeping a copy of important data elsewhere.

## Common mistakes

- Defining the cloud as "the internet". It is a service of remote shared servers, reached through the internet.
- Giving "cheaper" as the only advantage, without explaining that the cost is shared or pay-per-use.
- Forgetting that cloud computing depends on the internet connection.
- Saying data in the cloud is "always safe". It depends on the provider and on the user's security.
- Treating individuals and organisations as the same. Their uses, costs and risks are different.
- Mixing up SaaS, PaaS and IaaS.

## Exam technique

- **Describe** the cloud with the idea of shared resources, remote servers and access over the internet.
- **Explain a use**: name the user, the service and the benefit.
- **Advantages and disadvantages**: give each point a reason, such as "scalable, so extra servers are added when sales rise".
- **Evaluate** a move to the cloud: weigh cost, flexibility, security and reliance on the connection for the organisation described, then give a decision.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, Cambridge International Education. Topic 14 Communications technology, section 14.4 Cloud computing.
