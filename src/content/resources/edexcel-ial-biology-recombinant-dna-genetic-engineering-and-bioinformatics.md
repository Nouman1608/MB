---
title: "Pearson Edexcel International A Level Biology: Recombinant DNA, Genetic Engineering and Bioinformatics (YBI11)"
seoTitle: "Edexcel IAL Biology Recombinant DNA Study Guide"
resourceType: "study-guides"
subject: "biology"
level: ["a-levels"]
topic: "Recombinant DNA, Genetic Engineering and Bioinformatics"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YBI11"]
syllabusSeries: "Issue 2"
order: 148
syllabusTopics:
  - qualification: "a-level"
    topic: "coordination-response-and-gene-technology-edexcel-alevel-biology"
description: "Study guide to recombinant DNA, restriction enzymes, vectors, microarrays, bioinformatics and GM risks and benefits for Edexcel IAL Biology (YBI11)."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

This guide follows the Pearson Edexcel International Advanced Subsidiary/Advanced Level Biology specification (YBI11), Issue 2, and covers statements 8.17 to 8.22 in Topic 8. Topics 1 to 4 are International AS (IAS) and Topics 5 to 8 are International A2 (IA2), so this material is part of the IA2 course. There are no tiers. For quick recall use the [revision notes](/resources/edexcel-ial-biology-recombinant-dna-genetic-engineering-and-bioinformatics-revision-notes/), then test yourself with the [practice questions](/resources/edexcel-ial-biology-recombinant-dna-genetic-engineering-and-bioinformatics-practice/). The [Edexcel A Level Biology hub](/boards/edexcel/a-level/biology/) and the [printable checklist](/checklists/edexcel/a-level/biology/) list the rest of the course, and the [free diagnostics](/diagnostics/) show where to start. For PCR and gel electrophoresis see the [PCR and electrophoresis guide](/resources/edexcel-ial-biology-decomposition-pcr-electrophoresis-and-forensic-biology/).

## What the unit covers

| Statement | What you need to be able to do |
|---|---|
| 8.17 | Know how drugs can be made using genetically modified organisms (plants, animals and microorganisms) |
| 8.18 | Understand how recombinant DNA is produced, including the roles of restriction endonucleases and DNA ligase |
| 8.19 | Understand how recombinant DNA is inserted into other cells |
| 8.20 | Know how microarrays can be used to identify active genes |
| 8.21 | Understand what is meant by the term bioinformatics |
| 8.22 | Understand the risks and benefits of genetically modified organisms |

## Making recombinant DNA (8.18)

**Recombinant DNA** is DNA made by joining DNA from two different sources, for example a human gene and a bacterial plasmid. A **genetically modified organism (GMO)** is an organism whose genome contains such DNA. The cut-and-join steps are the same whichever organism receives the gene.

**Step 1: obtain the gene.** Three routes are common.
- Cut it from the genome with restriction endonucleases.
- Make complementary DNA (cDNA). In a cell that expresses the gene, there is plenty of its mRNA. The enzyme **reverse transcriptase** copies mRNA into single-stranded DNA, and DNA polymerase then makes it double-stranded. This copy has no introns, which matters because bacteria cannot splice introns out.
- Synthesise the gene in a machine from a known base sequence.

**Step 2: cut the gene and the vector.** A **restriction endonuclease** hydrolyses the sugar-phosphate backbone of DNA at a specific **recognition sequence**. Most recognition sequences are palindromic: the 5′ to 3′ sequence is the same on both strands. EcoRI recognises GAATTC and cuts between G and A on each strand. The cuts are staggered, so each end has a short single-stranded overhang called a **sticky end**. Some enzymes cut straight across, giving **blunt ends**.

Cutting the gene and the **vector** (usually a plasmid) with the same enzyme gives sticky ends that are complementary. Each enzyme fits only its own sequence, because the shape of its active site is complementary to that sequence.

**Step 3: join them.** The sticky ends of gene and plasmid pair by hydrogen bonds between complementary bases. This is **annealing**, and it is temporary. **DNA ligase** then forms phosphodiester bonds between the sugar-phosphate backbones, closing the gaps permanently.

**Step 4: make the gene work.** The gene needs a **promoter** so RNA polymerase can start transcription, and a terminator at the end. Without a suitable promoter, the host will not express the gene.

### Worked example: fragment sizes

A circular plasmid of 6,000 base pairs (bp) has two EcoRI recognition sites, 2,200 bp apart. Predict the fragments after digestion.

1. A circular molecule cut twice gives two pieces.
2. One piece is the 2,200 bp between the sites.
3. The other is the remainder: 6,000 − 2,200 = 3,800 bp.

On a gel, the smaller fragment travels further, so the bands lie at 2,200 bp and 3,800 bp, with the 3,800 bp band nearer the wells. A plasmid with one site would give a single linear band of 6,000 bp.

### Worked example: size of the recombinant plasmid

A vector of 4,200 bp is cut once with EcoRI, and a gene fragment of 1,350 bp with EcoRI sticky ends is ligated in. Recombinant size: 4,200 + 1,350 = 5,550 bp. Cutting it with EcoRI again should release the 1,350 bp insert and a 4,200 bp vector band, which is how you can confirm the gene is present.

## Inserting recombinant DNA into cells (8.19)

The method depends on the host.

| Host | Method | Key points |
|---|---|---|
| Bacteria | Transformation | Cells are chilled in calcium chloride solution with plasmids, then given a brief heat shock (about 42 °C), which makes the membrane temporarily permeable to DNA. Electroporation uses a short electric pulse instead |
| Plant cells | *Agrobacterium tumefaciens* | The gene is placed in the bacterium's Ti plasmid. The bacterium infects plant tissue and transfers that DNA into the plant chromosomes. A gene gun, which fires DNA-coated metal particles, is an alternative |
| Animal cells | Microinjection | DNA is injected into the nucleus of a fertilised egg, and the embryo is placed in a surrogate mother |
| Animal cells | Viral vectors, liposomes | A modified virus carries the gene in, or DNA is wrapped in lipid vesicles that fuse with the cell membrane |

Only a few cells take up the DNA, so you must identify them. A **marker gene** is included in the vector. Antibiotic-resistance genes allow selection: only cells that took up the plasmid grow on agar containing that antibiotic. A gene for **green fluorescent protein** makes transformed cells glow under UV light, with no need to kill any cells.

**Insertional inactivation** goes further. If the new gene is inserted in the middle of a resistance gene, that resistance gene stops working. Cells with the recombinant plasmid have lost that resistance, whereas cells with plasmid that simply closed up again without the insert keep it.

### Worked example: finding the recombinant colonies

A plasmid carries genes for resistance to ampicillin and to tetracycline. A gene is inserted into the tetracycline-resistance gene. After transformation, cells are spread on agar with ampicillin. 164 colonies grow. They are copied by replica plating onto agar with both antibiotics, and 31 colonies grow.

1. All 164 contain a plasmid, because they resist ampicillin.
2. The 31 that also resist tetracycline have an intact tetracycline gene, so no insert.
3. Recombinant colonies: 164 − 31 = 133.
4. Percentage recombinant: 133 ÷ 164 × 100 = 81.1%.

### Worked example: transformation efficiency

A tube receives 0.02 µg of plasmid DNA. After recovery the cells are in 1.0 cm³ of broth, and 0.1 cm³ is spread on a plate that grows 85 colonies.

1. Colonies in the whole 1.0 cm³: 85 × 10 = 850.
2. Efficiency: 850 ÷ 0.02 = 42,500 transformed colonies per µg of DNA.

## Drugs made by GMOs (8.17)

The human gene for a protein drug is put into a host that makes the protein in large quantity.

- **Microorganisms.** Bacteria or yeast carrying the human insulin gene make insulin in fermenters. Advantages: the insulin has the human amino acid sequence, supply is not limited by animal pancreases, cells divide fast, and fermenters are easy to scale up. A 10,000 dm³ fermenter producing 0.8 g of insulin per dm³ yields 10,000 × 0.8 = 8,000 g, or 8.0 kg. Yeast cells have a eukaryotic system, so they can process some proteins that bacteria cannot.
- **Animals.** A gene joined to a promoter that is active only in mammary glands is injected into a fertilised egg. The animal then secretes the human protein in milk, from which it is purified. Human antithrombin, a protein that reduces blood clotting, has been made in the milk of genetically modified goats.
- **Plants.** Plants and plant cell cultures can be engineered to make human proteins. Plants are cheap to grow in large numbers and do not carry human pathogens, though yield and purification can be difficult.

## Microarrays (8.20)

A **microarray** is a slide carrying thousands of tiny spots, each holding single-stranded DNA probes for one known gene. It shows which genes are being transcribed in a tissue at a given time.

1. Extract mRNA from the cells.
2. Make cDNA from the mRNA with reverse transcriptase, labelling it with a fluorescent dye.
3. Add the labelled cDNA to the array. Each cDNA hybridises, by complementary base pairing, only to the spot with its matching probe.
4. Wash off unbound cDNA and scan the slide. Brighter fluorescence means more mRNA, so a more active gene.

With two samples, such as healthy and tumour tissue, label each with a different dye (say red for tumour, green for healthy) and apply both to one array. Red means expressed more in tumour, green means more in healthy tissue, and yellow means about equal.

### Worked example: reading an array

| Spot | Red intensity | Green intensity | Red ÷ green |
|---|---|---|---|
| A | 8,000 | 500 | 16 |
| B | 450 | 460 | 0.98 |
| C | 300 | 2,400 | 0.125 |
| D | 1,200 | 600 | 2.0 |

Spot A is far more active in the red sample (16 times). Spot B is essentially equal. Spot C is eight times more active in the green sample. Spot D is twice as active in the red sample. A gene that looks active in the tumour only is a possible drug target.

## Bioinformatics (8.21)

**Bioinformatics** is the use of computer software and databases to store, retrieve, compare and analyse biological data, especially DNA, RNA and protein sequences. Genome sequencing and microarrays produce too much data to handle by hand. Typical uses are searching a database for matches to a new sequence, finding genes, comparing species to build evolutionary relationships, and finding variants linked to a disease.

### Worked example: comparing two sequences

Aligned 20-base stretches of the same gene in two species:

| Species | Sequence |
|---|---|
| X | ATGGCTAAGCTTGACCGTAA |
| Y | ATGGCTCAGCTTGACAGTAA |

Counting positions that differ gives 2 differences, so 18 of 20 bases are identical: 18 ÷ 20 × 100 = 90% identity. A higher percentage suggests a more recent common ancestor.

## Risks and benefits of GMOs (8.22)

| Benefits | Risks and concerns |
|---|---|
| Higher yield, for example crops resistant to insect pests (Bt toxin) or to herbicides | Gene flow to wild relatives, perhaps creating herbicide-resistant weeds |
| Less insecticide use, saving cost and reducing pollution | Harm to non-target insects; pests may evolve resistance to the toxin |
| Improved nutrition, for example rice making beta-carotene | Possible allergic reactions to new proteins; long-term health effects hard to rule out |
| Medicines made cheaply and in quantity | Seeds are patented, so small farmers may face high costs and dependence on suppliers |
| Crops tolerant of drought or salt | Welfare and ethical objections to modifying animals |

### Worked example: weighing the data

A trial gives a GM cotton yield of 1,820 kg per hectare, against 1,450 for non-GM. Insecticide sprays fall from 6 to 2 per season.

- Yield rise: (1,820 − 1,450) ÷ 1,450 × 100 = 25.5%.
- Sprays saved: (6 − 2) ÷ 6 × 100 = 66.7%.

A balanced evaluation sets these against higher seed cost and resistance risk, and notes that one trial may not apply elsewhere.

## Common errors

- Saying ligase joins sticky ends by hydrogen bonds. Hydrogen bonds anneal them; ligase makes phosphodiester bonds.
- Saying restriction enzymes cut at "any" sequence. They cut at one specific sequence.
- Forgetting that the cDNA route avoids introns.
- Describing the heat shock as killing bacteria. It makes them take up DNA.
- Treating microarray brightness as DNA amount rather than mRNA amount.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Biology (YBI11), Specification, Issue 2, February 2021, Pearson Education Limited.
