---
title: "AQA A-level Biology (7402): Gene technologies allow the study and alteration of gene function allowing a better understanding of organism function and the design of new industrial and medical processes"
resourceType: "study-guides"
subject: "biology"
level: ["a-levels"]
topic: "The control of gene expression"
boards: ["aqa"]
qualifications: ["a-level"]
stage: "A"
syllabusCodes: ["7402"]
syllabusSeries: "For first teaching 2015"
order: 8.4
syllabusTopics:
  - qualification: "a-level"
    topic: "the-control-of-gene-expression-aqa-alevel-biology"
    subtopic: "gene-technologies-aqa-alevel-biology"
description: "Choosing DNA fragment methods, sticky ends, PCR or cloning, marker genes, gene therapy, screening and fingerprints for AQA A-level Biology 7402 section 3.8.4."
author: "marlbridge-academic-team"
reviewer: "hina-mogul"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hina-mogul (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---
This guide covers section 3.8.4 of the AQA AS and A-level Biology specification (7401/7402), for first teaching 2015: *Gene technologies allow the study and alteration of gene function allowing a better understanding of organism function and the design of new industrial and medical processes*. It is A-level only and has three parts: 3.8.4.1 recombinant DNA technology, 3.8.4.2 using differences in DNA for identification and diagnosis of heritable conditions, and 3.8.4.3 genetic fingerprinting.

The broader page, [genome projects and gene technologies](/resources/aqa-a-level-biology-genome-projects-and-gene-technologies/), describes each technique step by step. This page is about the decisions and interpretation that exam questions test: which method to choose, why each step is needed, how to read results, and how to evaluate uses. Test yourself with the [revision notes on gene technologies](/resources/aqa-a-level-biology-7402-gene-technologies-aqa-alevel-biology-revision-notes/) and the [practice questions on gene technologies](/resources/aqa-a-level-biology-7402-gene-technologies-aqa-alevel-biology-practice/).

## What you must be able to do

| Part | Skills the specification names |
|---|---|
| 3.8.4.1 | Interpret information on recombinant DNA technology; evaluate ethical, financial and social issues in agriculture, industry and medicine; balance humanitarian aspects against opposition from environmentalists and anti-globalisation activists; relate recombinant DNA technology to gene therapy |
| 3.8.4.2 | Evaluate information on screening individuals for genetically determined conditions and drug responses |
| 3.8.4.3 | Explain the principles of genetic fingerprinting; interpret gel electrophoresis results; explain its use in forensic science, medical diagnosis, and animal and plant breeding |

## Why gene transfer works at all

The specification gives the reason in one sentence: the genetic code is universal, as are transcription and translation mechanisms. A human gene placed in a bacterium is read with the same triplets and the same kinds of enzymes, so the bacterium makes the human polypeptide. The recipient is called **transgenic**.

## Choosing how to make the fragment

The specification names three methods. Questions often ask which one suits a situation.

| Method | Starting material | Introns? | Best when | Drawbacks |
|---|---|---|---|---|
| Reverse transcriptase | mRNA from a cell that makes the protein | No | The gene will be expressed in a prokaryote, and a cell type making lots of the protein is available | Needs a source rich in that mRNA |
| Restriction enzymes | DNA containing the gene | Yes, if from a eukaryote | The whole gene, including its own sequence around it, is needed | Eukaryotic introns cannot be removed by bacteria, so the protein may not be made correctly |
| Gene machine | The known amino acid or base sequence, on a computer | No | No source of DNA or mRNA is available, or a modified sequence is wanted | The sequence must already be known |

The key reasoning point: bacteria cannot splice out introns, so a eukaryotic gene for expression in bacteria is made by reverse transcriptase or a gene machine, not cut from genomic DNA.

## Sticky ends and the same enzyme

A restriction endonuclease recognises a specific short base sequence. Many recognition sites are **palindromic**: the sequence reads the same on both strands when each is read in the same direction. For example, an enzyme recognising GGATCC sees GGATCC on one strand and, reading the other strand the same way, GGATCC again. If it cuts each strand between the two G bases, both pieces are left with the single-stranded overhang GATC: a sticky end.

Exam reasoning:

1. The plasmid and the fragment are cut with the **same** restriction enzyme, so their sticky ends have **complementary** bases.
2. The sticky ends pair by hydrogen bonding.
3. **DNA ligase** forms phosphodiester bonds in the sugar-phosphate backbone, sealing the recombinant DNA.

The recognition site must be absent from inside the gene of interest, otherwise the enzyme would cut the gene itself.

## In vitro or in vivo amplification?

| Feature | PCR (in vitro) | Culture of transformed host cells (in vivo) |
|---|---|---|
| Speed | Fast: many copies within hours | Slower: depends on cell division |
| Living cells | Not needed | Needed |
| Product | DNA only | DNA, and the protein if the gene is expressed |
| Needs | Primers, so part of the sequence must be known | Vector, promoter, terminator, marker genes |
| Typical use | Small DNA samples, such as for genetic fingerprinting | Producing a protein such as human insulin in bacteria |

**Worked example 1: PCR cycles (invented data).** A sample contains 50 copies of a DNA fragment. A test needs more than 100 million copies. After n cycles there are 50 × 2ⁿ copies. After 20 cycles: 50 × 1,048,576 = 52,428,800, not enough. After 21 cycles: 104,857,600. So **21 cycles** are needed, assuming every copy doubles each cycle.

## Interpreting marker gene results

Only a small proportion of host cells take up a plasmid, and not every plasmid takes up the gene. One way to tell them apart is to insert the gene **inside** a marker gene. The marker gene is then disrupted, so its product is no longer made.

**Worked example 2 (invented).** A plasmid carries marker gene 1, giving resistance to antibiotic A, and marker gene 2, which makes a fluorescent protein. The desired gene is inserted into marker gene 2. Bacteria are grown on agar containing antibiotic A.

| Colony appearance on antibiotic A | Interpretation |
|---|---|
| No growth | Cell took up no plasmid |
| Grows and fluoresces | Took up a plasmid without the gene (marker 2 intact) |
| Grows, does not fluoresce | Took up a recombinant plasmid (marker 2 disrupted by the inserted gene) |

If 90 colonies grow and 18 do not fluoresce, then 18 ÷ 90 × 100 = **20%** of transformed cells contain the gene. You will not be asked to recall named marker genes; you are expected to reason from information like this.

## Gene therapy

The specification asks you to relate recombinant DNA technology to gene therapy. The link is that the same tools are used: a functional allele is produced (for example as cDNA), a promoter is added, and a **vector**, such as a modified harmless virus or a small lipid sphere (liposome), carries it into the patient's cells.

- For a condition caused by a **recessive** allele, adding a functional dominant allele can allow the cell to make the working protein.
- **Somatic** gene therapy alters body cells. It is not inherited, and may need repeating because the treated cells die and are replaced.
- **Germ line** gene therapy would alter cells such as eggs or early embryos, so the change would be inherited. This raises much greater ethical concern.

## Evaluating recombinant DNA technology

A strong answer gives a benefit, a concern and a judgement, in context. Organise points by the groups the specification names.

| Viewpoint | Typical argument |
|---|---|
| Humanitarian | Crops with higher yield or added nutrients (for example, rice modified to produce beta-carotene, which the body converts to vitamin A) could reduce malnutrition; proteins such as human insulin can be made in bacteria |
| Environmentalist | Genes could spread to wild relatives; pest-resistant crops could harm non-target insects; reliance on a few GM varieties reduces genetic diversity |
| Anti-globalisation | Large companies hold patents on GM seed, so farmers may have to buy seed each season; poorer farmers may lose out |
| Financial | Development is expensive; patents allow companies to recover costs but raise prices |
| Ethical | Is it acceptable to move genes between species, or to alter human cells? Who owns genetic information? |

## Screening with probes: evaluating information

A labelled DNA probe is complementary to a specific allele, so it hybridises only with DNA carrying that allele. Screening can reveal heritable conditions, likely drug responses or health risks. Two uses follow:

- **Genetic counselling**: explaining to people the results, risks and options, for example the chance of passing on an allele.
- **Personalised medicine**: choosing a drug or dose suited to a patient's alleles, so treatment is more effective and side effects are fewer.

When evaluating, weigh: early treatment or lifestyle change; informed decisions about having children; avoiding drugs that will not work; against anxiety, results that show only a risk rather than a certainty, cost, privacy, and possible discrimination by employers or insurers.

## Interpreting genetic fingerprints

Each band is a DNA fragment of a particular length containing VNTRs; shorter fragments move further through the gel.

- **Relationships:** each band in a child must be present in the mother or the father. More shared bands suggest closer relatedness.
- **Genetic variability within a population:** fingerprint a sample of individuals. Many different band patterns means high variability; similar patterns mean low variability, which breeders use to avoid inbreeding.

**Worked example 3 (invented).** Two herds of goats are fingerprinted at one VNTR region. Herd X shows 9 different band positions across 20 animals; herd Y shows 3 different band positions across 20 animals. Herd Y has less genetic variability, so a breeder wanting to keep diversity would bring in animals from herd X rather than breed within herd Y.

## Common mistakes

- Choosing restriction enzymes on genomic DNA for a human gene to be expressed in bacteria, ignoring introns.
- Saying the plasmid is cut with "a different enzyme to make it fit". The same enzyme gives complementary sticky ends.
- Claiming PCR produces protein. It copies DNA only.
- Treating somatic gene therapy as inherited.
- Evaluating with benefits only, or with no judgement.
- Reading bands as "bigger fragments move further". Smaller fragments move further.

## Frequently asked questions

**Why is cDNA used to make human proteins in bacteria?**
cDNA is made from mature mRNA, which has had its introns removed. Bacteria cannot remove introns, so cDNA lets them make the correct polypeptide.

**When would you use PCR rather than transformed host cells?**
Use PCR to make many copies of DNA quickly from a small sample, such as for genetic fingerprinting. Use transformed host cells when you also want the protein the gene codes for.

## Official syllabus

AQA AS and A-level Biology (7401/7402) specification, for first teaching 2015, sections 3.8.4.1, 3.8.4.2 and 3.8.4.3 (A-level only), published by AQA.
