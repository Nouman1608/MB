---
resourceId: "mb-ap-bio-4.2-study-guide"
title: "Introduction to Signal Transduction: Study Guide (Biology 4.2)"
description: "How a cell turns a signal into a response: ligands and receptors, G protein-coupled receptors, ligand-gated channels, intracellular receptors, phosphorylation cascades, cAMP and amplification."
course: "biology"
unit: 4
topics: ["4.2"]
resourceType: "study-guide"
prerequisites:
  - "Ways cells communicate and the idea of a target cell (Topic 4.1)"
  - "Membrane structure and which molecules cross a phospholipid bilayer (Unit 2)"
  - "Protein shape and function; ATP as an energy carrier (Units 1 and 3)"
prerequisiteResources: ["mb-ap-bio-4.1-study-guide"]
learningObjectives:
  - "Describe the three stages of cell signalling (reception, transduction, response) and the job of each"
  - "Explain how a receptor's ligand-binding domain recognises a specific ligand, and predict where the receptor sits from the type of ligand"
  - "Describe how G protein-coupled receptors, ligand-gated ion channels and intracellular receptors pass on a signal"
  - "Explain how kinases, phosphatases and second messengers such as cAMP relay and amplify a signal"
  - "Calculate the amplification in a model cascade and interpret experiments that locate a receptor or test a second messenger"
skills: ["1", "2", "3", "5", "6"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Amplification is found by multiplying the factor at each step of the cascade. All values in the worked examples are model values"
related: ["mb-ap-bio-4.2-revision-notes", "mb-ap-bio-4.2-practice", "mb-ap-bio-4.2-checklist"]
next: "mb-ap-bio-4.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "Signal transduction links reception of a signal to a response inside the cell, in three stages: reception, transduction and response."
  - "A ligand binds the ligand-binding domain of a specific receptor. Water-soluble ligands, such as peptides, use receptors on the cell surface; small nonpolar ligands, such as steroids, cross the membrane and bind receptors in the cytoplasm or nucleus."
  - "Binding changes the receptor's shape, including its intracellular domain, which starts transduction."
  - "Kinases add phosphate groups to proteins, switching their activity; a chain of kinases is a phosphorylation cascade. Second messengers such as cAMP relay the signal and amplify it."
  - "Responses include cell growth, secretion of molecules and changes in gene expression. Ligand-gated channels respond by opening or closing."
faqs:
  - question: "Is the second messenger the same as the hormone?"
    answer: "No. The hormone (the first messenger) usually stays outside the cell, bound to the receptor. The second messenger, such as cAMP, is a small molecule made inside the cell in response, which carries the message on."
  - question: "Does phosphorylation always switch a protein on?"
    answer: "No. Adding a phosphate group changes a protein's shape. For some proteins that switches them on; for others it switches them off. Either way, phosphorylation acts as a switch."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## From signal to response

In Topic 4.1 you saw how a signal reaches its target cell. But arriving is not enough. A hormone that binds the outside of a liver cell must somehow change what happens inside, often without the hormone ever entering. The process that converts a signal at the receptor into a response inside the cell is called **signal transduction**. ("Transduce" means to change something from one form into another.)

Every signalling pathway has three stages:

1. **Reception.** The signal molecule binds a receptor protein in the target cell.
2. **Transduction.** The receptor changes shape and passes the message on, usually through a chain of molecules inside the cell. This chain is the **signal transduction pathway**.
3. **Response.** The pathway changes something the cell does: for example, an enzyme is switched on, a molecule is secreted, a gene is switched on, or the cell starts to grow and divide.

A signal transduction pathway therefore **links reception to response**. Learn the three stage names: exam answers often need you to say which stage a component belongs to.

## Reception: ligands and receptors

The signal molecule that binds a receptor is called a **ligand**. Ligands are very varied. Some are **peptides or proteins**, such as insulin, glucagon and growth hormone. Others are **small molecules**, such as steroid hormones (estrogen, testosterone), thyroid hormones, neurotransmitters such as acetylcholine, or even a gas.

A receptor is a protein with distinct parts, called **domains**. The **ligand-binding domain** has a shape and pattern of charges that fit one particular ligand, as a substrate fits an enzyme's active site. This is why receptors are **specific**: a receptor for glucagon does not bind insulin. When the ligand binds, the receptor **changes shape**. That shape change is the start of transduction.

### Where is the receptor?

The answer depends on whether the ligand can cross the plasma membrane.

| Ligand | Can it cross the bilayer? | Where is the receptor? | Examples |
|---|---|---|---|
| Large or water-soluble (peptides, proteins, charged molecules) | No | **On the cell surface**, spanning the membrane | glucagon, insulin, growth hormone, acetylcholine |
| Small and nonpolar (lipid-soluble) | Yes, by diffusing through the bilayer | **In the cytoplasm or nucleus** | estrogen, testosterone, thyroid hormones |

A surface receptor has three domains: an **extracellular** ligand-binding domain, a **transmembrane** domain that crosses the bilayer, and an **intracellular** domain inside the cell. When the ligand binds outside, the whole protein changes shape, so the **intracellular domain** changes shape too. That is how a message crosses the membrane without the ligand crossing it.

## Three kinds of receptor to know

### G protein-coupled receptors (GPCRs)

GPCRs are a very large family of surface receptors in eukaryotes. Each one is a single protein that weaves back and forth across the membrane **seven times**. Its intracellular side works with a **G protein**, a separate protein attached to the inner face of the membrane. A G protein is "off" when it holds **GDP** and "on" when it holds **GTP**.

Follow the steps in Figure 1, using the hormone glucagon acting on a liver cell as the example:

1. Glucagon binds the ligand-binding domain of its GPCR.
2. The receptor changes shape. Its intracellular domain activates a G protein, which swaps GDP for GTP.
3. The active G protein moves along the membrane and switches on an enzyme, **adenylyl cyclase**.
4. Adenylyl cyclase converts ATP into **cyclic AMP (cAMP)**, many molecules of it.
5. cAMP activates a **protein kinase** (protein kinase A).
6. The kinase phosphorylates other proteins, which ends with enzymes that break down glycogen being switched on. The liver cell releases glucose into the blood.

The G protein switches itself off by breaking down its GTP to GDP, so the signal does not last for ever. Background: an enzyme called phosphodiesterase also breaks down cAMP, which helps to end the response.

<figure>
<svg viewBox="0 0 680 440" role="img" aria-labelledby="gp-title gp-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="gp-title">A G protein-coupled receptor pathway using cAMP</title>
<desc id="gp-desc">Diagram of a cell membrane drawn as two horizontal lines, with the outside of the cell above and the cytoplasm below. Step 1: a triangular ligand binds a receptor that spans the membrane. Step 2: the receptor activates a G protein on the inner face of the membrane, which swaps GDP for GTP. Step 3: the G protein activates adenylyl cyclase, another membrane protein. Step 4: adenylyl cyclase converts ATP into many cAMP molecules, shown as small hexagons. Step 5: cAMP activates a protein kinase. Step 6: the kinase adds phosphate groups, labelled P, to target proteins, giving a response such as glycogen breakdown. Brackets on the right label step 1 as reception, steps 2 to 5 as transduction and step 6 as response.</desc>
<rect x="0" y="0" width="680" height="440" fill="#ffffff"/>
<text x="20" y="30" font-size="13" fill="#1d2b44">Outside the cell</text>
<text x="20" y="168" font-size="13" fill="#1d2b44">Cytoplasm</text>
<line x1="20" y1="110" x2="560" y2="110" stroke="#1d2b44" stroke-width="2"/>
<line x1="20" y1="140" x2="560" y2="140" stroke="#1d2b44" stroke-width="2"/>
<text x="470" y="129" font-size="11" fill="#1d2b44">membrane</text>
<rect x="80" y="80" width="54" height="90" rx="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="107" y="190" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">GPCR</text>
<polygon points="95,52 119,52 107,76" fill="#1d2b44"/>
<text x="140" y="60" font-size="12" fill="#1d2b44">ligand</text>
<circle cx="78" cy="40" r="11" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<text x="78" y="45" text-anchor="middle" font-size="12" font-weight="700" fill="#1d2b44">1</text>
<ellipse cx="200" cy="162" rx="36" ry="20" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="200" y="166" text-anchor="middle" font-size="11" fill="#1d2b44">G protein</text>
<text x="200" y="200" text-anchor="middle" font-size="11" fill="#1d2b44">GDP → GTP</text>
<line x1="136" y1="158" x2="160" y2="160" stroke="#1d2b44" stroke-width="2"/>
<circle cx="168" cy="224" r="11" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<text x="168" y="229" text-anchor="middle" font-size="12" font-weight="700" fill="#1d2b44">2</text>
<rect x="290" y="80" width="80" height="90" rx="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="330" y="70" text-anchor="middle" font-size="12" font-weight="600" fill="#1d2b44">adenylyl cyclase</text>
<line x1="236" y1="160" x2="282" y2="160" stroke="#1d2b44" stroke-width="2"/>
<polygon points="282,154 292,160 282,166" fill="#1d2b44"/>
<circle cx="260" cy="190" r="11" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<text x="260" y="195" text-anchor="middle" font-size="12" font-weight="700" fill="#1d2b44">3</text>
<text x="300" y="232" font-size="12" fill="#1d2b44">ATP</text>
<line x1="330" y1="228" x2="365" y2="228" stroke="#1d2b44" stroke-width="2"/>
<polygon points="365,222 375,228 365,234" fill="#1d2b44"/>
<polygon points="390,220 398,215 406,220 406,229 398,234 390,229" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<polygon points="412,236 420,231 428,236 428,245 420,250 412,245" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<polygon points="392,244 400,239 408,244 408,253 400,258 392,253" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<polygon points="430,214 438,209 446,214 446,223 438,228 430,223" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<text x="455" y="236" font-size="12" font-weight="600" fill="#1d2b44">cAMP (many)</text>
<circle cx="345" cy="258" r="11" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<text x="345" y="263" text-anchor="middle" font-size="12" font-weight="700" fill="#1d2b44">4</text>
<line x1="420" y1="262" x2="420" y2="290" stroke="#1d2b44" stroke-width="2"/>
<polygon points="414,290 420,300 426,290" fill="#1d2b44"/>
<rect x="360" y="302" width="120" height="36" rx="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="420" y="325" text-anchor="middle" font-size="12" fill="#1d2b44">protein kinase</text>
<circle cx="345" cy="320" r="11" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<text x="345" y="325" text-anchor="middle" font-size="12" font-weight="700" fill="#1d2b44">5</text>
<line x1="420" y1="338" x2="420" y2="362" stroke="#1d2b44" stroke-width="2"/>
<polygon points="414,362 420,372 426,362" fill="#1d2b44"/>
<rect x="360" y="374" width="120" height="36" rx="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="420" y="397" text-anchor="middle" font-size="12" fill="#1d2b44">target protein</text>
<circle cx="490" cy="380" r="10" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<text x="490" y="384" text-anchor="middle" font-size="11" font-weight="700" fill="#1d2b44">P</text>
<text x="420" y="430" text-anchor="middle" font-size="12" fill="#1d2b44">response, e.g. glycogen broken down</text>
<circle cx="345" cy="392" r="11" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<text x="345" y="397" text-anchor="middle" font-size="12" font-weight="700" fill="#1d2b44">6</text>
<line x1="590" y1="40" x2="590" y2="100" stroke="#1d2b44" stroke-width="2"/>
<text x="600" y="75" font-size="12" font-weight="600" fill="#1d2b44">Reception</text>
<line x1="590" y1="140" x2="590" y2="345" stroke="#1d2b44" stroke-width="2"/>
<text x="600" y="250" font-size="12" font-weight="600" fill="#1d2b44">Transduction</text>
<line x1="590" y1="365" x2="590" y2="425" stroke="#1d2b44" stroke-width="2"/>
<text x="600" y="400" font-size="12" font-weight="600" fill="#1d2b44">Response</text>
</svg>
<figcaption>Figure 1. A GPCR pathway. Numbers match the steps in the text. The ligand stays outside; the message crosses the membrane as a change in the receptor's shape, and cAMP carries it through the cytoplasm.</figcaption>
</figure>

### Ligand-gated ion channels

Some receptors are channels. When the ligand binds, the channel **opens or closes**, changing which ions can flow across the membrane. At the junction between a motor neuron and a muscle cell, acetylcholine binds a channel in the muscle cell membrane. The channel opens, and sodium ions (Na⁺) flow into the cell down their concentration gradient. This changes the charge across the membrane and triggers contraction. Because no chain of relay molecules is needed, the response takes only milliseconds.

### Intracellular receptors

Small nonpolar hormones, such as estrogen, testosterone and thyroid hormones, diffuse through the plasma membrane. Their receptors are in the **cytoplasm** or the **nucleus**. The hormone–receptor complex binds DNA and acts as a **transcription factor**: it switches particular genes on or off. The response is a change in **gene expression**. These responses are slower, taking hours, but can last a long time.

Background: another family of surface receptors, the receptor tyrosine kinases (the insulin receptor is one), have their own kinase activity in the intracellular domain. You do not need their details for this topic.

## Transduction: relay, switch and amplify

### Protein phosphorylation

Most transduction pathways work by **changing proteins**. The commonest change is **phosphorylation**:

- A **protein kinase** is an enzyme that transfers a phosphate group from ATP to another protein.
- The phosphate group carries negative charge, so the protein **changes shape**, which switches its activity on (or, for some proteins, off).
- A **protein phosphatase** removes the phosphate group, reversing the switch.

Often, kinase 1 phosphorylates and activates kinase 2, which activates kinase 3, and so on. This chain is a **phosphorylation cascade**. Kinases and phosphatases act like light switches that the cell can flick on and off, so the pathway can be shut down quickly when the signal stops.

### Second messengers

The ligand is the **first messenger**. Inside the cell, many pathways use small, non-protein molecules or ions called **second messengers** to spread the signal. **cAMP** is the classic example. It is small and water-soluble, so it diffuses quickly through the cytoplasm. Calcium ions (Ca²⁺) act as second messengers in other pathways.

### Amplification

At several steps in a cascade, one active molecule activates **many** molecules of the next. One adenylyl cyclase makes many cAMP; one kinase phosphorylates many target proteins. So a few ligand molecules can cause a huge response. Worked example 1 puts numbers on this. A cascade with several steps also gives the cell several places where the signal can be regulated, and lets one signal branch to more than one response.

## Response

Signalling cascades end by changing what the cell does. Responses include:

- **cell growth** and division, for example in response to growth hormone;
- **secretion** of molecules, for example a gland cell releasing a hormone or enzyme;
- changes in **gene expression**, for example when a steroid–receptor complex switches genes on;
- changes in **enzyme activity**, as when glycogen breakdown is switched on in the liver;
- **opening or closing of ion channels**.

Hormones carried in the blood are a common source of the signal, but the same machinery handles local signals too. Topic 4.3 looks at these responses in more detail and at what happens when a pathway is changed.

## Worked example 1: how big is the amplification?

**Question.** In a model GPCR pathway, one ligand-bound receptor activates 20 G proteins. Each G protein activates one adenylyl cyclase, which makes 100 cAMP molecules. Every 4 cAMP molecules activate one protein kinase. Each kinase activates 200 molecules of a target enzyme, and each target enzyme makes 1000 product molecules per second.

(a) Calculate the number of molecules at each step and the product made per second from one ligand.
(b) Calculate the product made per second if 50 receptors bind ligand.
(c) Explain why the number of cAMP molecules is larger than the number of kinase molecules activated, and what this shows about amplification.

**(a)** Multiply step by step:

| Step | Calculation | Number |
|---|---|---|
| Bound receptors | — | 1 |
| Active G proteins (= active adenylyl cyclase) | 1 × 20 | 20 |
| cAMP | 20 × 100 | 2000 |
| Active kinases | 2000 ÷ 4 | 500 |
| Active target enzymes | 500 × 200 | 100 000 (1 × 10⁵) |
| Product per second | 100 000 × 1000 | 100 000 000 (**1 × 10⁸**) |

One ligand molecule leads to **1 × 10⁸** product molecules per second. The overall amplification factor is 20 × 100 ÷ 4 × 200 × 1000 = 1 × 10⁸.

**(b)** 50 × 1 × 10⁸ = **5 × 10⁹** product molecules per second.

**(c)** Several cAMP molecules are needed to activate one kinase, so this step **reduces** the number (2000 → 500). Amplification does not happen at every step; it happens where one active molecule acts on many others, as an **enzyme** does. Adenylyl cyclase, the kinases and the target enzymes are all enzymes, so the overall effect is still a huge gain.

<figure>
<svg viewBox="0 0 600 360" role="img" aria-labelledby="amp-title amp-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="amp-title">Number of molecules at each step of the model cascade, on a log scale</title>
<desc id="amp-desc">Bar chart with a logarithmic vertical axis from 10 to the power 0 to 10 to the power 8. Bars: bound receptor 1; G proteins 20; cAMP 2000; kinases 500; target enzymes 100 000; product per second 100 million. Every bar is taller than the one before except kinases, which is shorter than cAMP.</desc>
<rect x="0" y="0" width="600" height="360" fill="#ffffff"/>
<line x1="80" y1="300" x2="570" y2="300" stroke="#1d2b44" stroke-width="2"/>
<line x1="80" y1="300" x2="80" y2="90" stroke="#1d2b44" stroke-width="2"/>
<line x1="80" y1="250" x2="570" y2="250" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="80" y1="200" x2="570" y2="200" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="80" y1="150" x2="570" y2="150" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="80" y1="100" x2="570" y2="100" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<text x="72" y="304" text-anchor="end" font-size="12" fill="#1d2b44">10⁰</text>
<text x="72" y="254" text-anchor="end" font-size="12" fill="#1d2b44">10²</text>
<text x="72" y="204" text-anchor="end" font-size="12" fill="#1d2b44">10⁴</text>
<text x="72" y="154" text-anchor="end" font-size="12" fill="#1d2b44">10⁶</text>
<text x="72" y="104" text-anchor="end" font-size="12" fill="#1d2b44">10⁸</text>
<text x="24" y="200" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 24 200)">Number (log scale)</text>
<rect x="95" y="297" width="56" height="3" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="175" y="267.5" width="56" height="32.5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="255" y="217.5" width="56" height="82.5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="335" y="232.5" width="56" height="67.5" fill="#ffffff" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<rect x="415" y="175" width="56" height="125" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="495" y="100" width="56" height="200" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="123" y="290" text-anchor="middle" font-size="11" fill="#1d2b44">1</text>
<text x="203" y="261" text-anchor="middle" font-size="11" fill="#1d2b44">20</text>
<text x="283" y="211" text-anchor="middle" font-size="11" fill="#1d2b44">2000</text>
<text x="363" y="226" text-anchor="middle" font-size="11" fill="#1d2b44">500</text>
<text x="443" y="169" text-anchor="middle" font-size="11" fill="#1d2b44">10⁵</text>
<text x="523" y="94" text-anchor="middle" font-size="11" fill="#1d2b44">10⁸</text>
<text x="123" y="318" text-anchor="middle" font-size="11" fill="#1d2b44">receptor</text>
<text x="203" y="318" text-anchor="middle" font-size="11" fill="#1d2b44">G proteins</text>
<text x="283" y="318" text-anchor="middle" font-size="11" fill="#1d2b44">cAMP</text>
<text x="363" y="318" text-anchor="middle" font-size="11" fill="#1d2b44">kinases</text>
<text x="443" y="318" text-anchor="middle" font-size="11" fill="#1d2b44">enzymes</text>
<text x="523" y="318" text-anchor="middle" font-size="11" fill="#1d2b44">product s⁻¹</text>
<text x="330" y="345" text-anchor="middle" font-size="12" fill="#1d2b44">Dashed bar: the one step where the number falls</text>
</svg>
<figcaption>Figure 2. The model cascade from Worked example 1. Each grid line is a hundredfold step. A log scale is needed because the numbers span eight powers of ten.</figcaption>
</figure>

**Interpretation.** Real numbers vary between pathways, but the pattern is general: a hormone present at very low concentration in the blood can still produce a large response, because the cascade multiplies its effect.

## Worked example 2: where is the receptor, and is cAMP the messenger?

**Question.** A fictional hormone H makes gland cells secrete a protein. Researchers record the percentage of cells secreting within 10 minutes (means of three trials):

| Treatment | Cells secreting / % |
|---|---|
| 1. Buffer only (control) | 4 |
| 2. Hormone H added to the fluid | 86 |
| 3. Hormone H fixed to large beads that cannot cross the membrane | 83 |
| 4. No hormone; a cAMP-like molecule that can enter cells | 80 |
| 5. Hormone H injected directly into the cytoplasm | 5 |

They also find that 1 minute after hormone H is added, cAMP in the cells rises from 0.5 to 12.0 pmol per million cells.

(a) Where is the receptor for hormone H? Use treatments 3 and 5.
(b) What evidence suggests that cAMP acts as a second messenger in this pathway?
(c) Suggest what type of receptor this is, and what further evidence would strengthen the conclusion.

**(a)** Fixed to beads, hormone H cannot enter the cells, yet it still gives 83% secretion, which is 83 ÷ 86 × 100 = **96.5%** of the response to free hormone. Injected inside the cell, it gives only 5%, about the same as the buffer control (4%). So the receptor must be **on the cell surface**: the hormone works from outside and does nothing from inside.

**(b)** Two pieces of evidence. First, cAMP rises **24-fold** (12.0 ÷ 0.5 = 24) within a minute of adding the hormone. Second, a cAMP-like molecule **on its own**, without hormone, gives 80% secretion, which is 93.0% of the hormone response. So cAMP is made in response to the hormone and is enough to trigger secretion.

**(c)** A surface receptor that raises cAMP is most likely a **G protein-coupled receptor**, acting through adenylyl cyclase. The data show cAMP is **sufficient**, but not that it is **necessary**. A stronger test would show that blocking cAMP production stops the hormone's effect (Topic 4.3 deals with chemicals that block pathways), and the experiment should be repeated with more trials so that variation can be judged.

## Common misconceptions

- **"The hormone enters the cell and causes the response."** For surface receptors, the ligand stays outside. The message crosses the membrane as a change in the receptor's shape.
- **"The second messenger is the hormone."** The hormone is the first messenger. cAMP is made inside the cell.
- **"The G protein and the GPCR are the same thing."** The GPCR is the receptor; the G protein is a separate protein that the receptor activates.
- **"Phosphorylation always activates a protein."** It changes shape: some proteins are switched on, others off.
- **"Kinases remove phosphates."** Kinases add phosphate groups; phosphatases remove them.
- **"Amplification means more ligand binds."** Amplification happens inside the cell, because each active enzyme activates many molecules of the next step.
- **"All receptors are on the cell surface."** Receptors for small nonpolar hormones such as steroids are in the cytoplasm or nucleus.
- **"Each stage amplifies the signal."** Steps where several molecules are needed to activate one (such as cAMP and the kinase) reduce the number; the enzyme steps produce the gain.

## Where this leads

Now that you know the components of a pathway, [Topic 4.3, signal transduction pathways](/advanced-course-resources/biology/4-3-signal-transduction-pathways-study-guide/), looks at the different responses pathways produce and what happens when a component is changed by a mutation or a drug. Look back at [Topic 4.1, cell communication](/advanced-course-resources/biology/4-1-cell-communication-study-guide/) for how signals reach their targets. Test yourself with the [practice questions](/advanced-course-resources/biology/4-2-introduction-signal-transduction-practice/), then use the [revision notes](/advanced-course-resources/biology/4-2-introduction-signal-transduction-revision-notes/) and the [checklist](/advanced-course-resources/biology/4-2-introduction-signal-transduction-checklist/) to consolidate.
