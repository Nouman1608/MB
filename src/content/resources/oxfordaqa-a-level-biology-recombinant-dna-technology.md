---
title: "OxfordAQA International AS and A-level Biology: Recombinant DNA technology (9610)"
seoTitle: "OxfordAQA A-level Biology Recombinant DNA Study Guide"
resourceType: "study-guides"
subject: "biology"
level: ["a-levels"]
topic: "Recombinant DNA technology"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
stage: "A"
syllabusCodes: ["9610"]
syllabusSeries: "Version 5.1, for International A-level exams May/June 2018 onwards"
order: 272
syllabusTopics:
  - qualification: "a-level"
    topic: "control-oxfordaqa-alevel-biology"
description: "Study guide to recombinant DNA technology for OxfordAQA International A-level Biology: cDNA, restriction enzymes, PCR, vectors, markers and evaluation."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

This guide follows the OxfordAQA *International AS and A-level Biology (9610)* specification, Version 5.1, and covers section 3.4.10 (Recombinant DNA technology) in Unit 4, Control. In the specification, Units 1 and 2 are the content shared by the International AS and A-level, while Units 3 and 4 are International A-level only. This topic is in Unit 4. Use the [revision notes](/resources/oxfordaqa-a-level-biology-recombinant-dna-technology-revision-notes/) for quick recall and the [practice questions](/resources/oxfordaqa-a-level-biology-recombinant-dna-technology-practice/) to test yourself. The [course hub](/boards/oxfordaqa/a-level/biology/), the [printable checklist](/checklists/oxfordaqa/a-level/biology/) and the [free diagnostics](/diagnostics/) show the rest of the course. Required practical 10, on growth direction in roots or shoots, is listed in the specification after this section. It is a different topic and is not covered here.

## What the unit covers

| Section | What you must be able to do |
|---|---|
| 3.4.10.1 | Explain that recombinant DNA technology moves DNA fragments between organisms or species, and why the transferred DNA can be translated in the recipient |
| 3.4.10.2 | Describe three ways of producing DNA fragments: cDNA from mRNA with reverse transcriptase, restriction endonucleases, artificial gene synthesis |
| 3.4.10.3 | Explain the principles of PCR for amplifying DNA, and its use in identifying specific DNA fragments |
| 3.4.10.4 | Describe culturing fragments in transformed host cells: promoter and terminator regions, restriction endonucleases and ligases, vectors, transformation, marker genes |
| Whole topic | Interpret information about recombinant DNA technology; evaluate ethical, financial and social issues |

## 3.4.10.1 Principles

**Recombinant DNA** is DNA that contains fragments from more than one organism or species. The specification gives the reason it works: the genetic code, and the mechanisms of transcription and translation, are universal. A human gene placed in a bacterium is transcribed by the bacterial RNA polymerase and translated by bacterial ribosomes, and each codon specifies the same amino acid as it did in the human cell. Use the word "universal" in your answer, and link codons to amino acids.

Most amino acids have more than one codon, so a protein can be coded by many base sequences. For a peptide Met-Arg-Leu, methionine has one codon and arginine and leucine have six each, so 1 × 6 × 6 = 36 sequences are possible. A bacterium also has no means of removing introns, which affects how the gene must be prepared.

## 3.4.10.2 Producing DNA fragments

### cDNA from mRNA

Choose cells that make the protein in quantity. They hold plenty of its mRNA, and that mRNA has already had its introns removed. **Reverse transcriptase** uses the mRNA as a template to build a single strand of **complementary DNA (cDNA)**. DNA polymerase then builds the second strand. The result is a double-stranded gene with no introns.

*Worked example.* The mRNA 5′-AUGCCGAAGGUCUAA-3′ is copied by reverse transcriptase.

1. Pair each base, with T replacing U: the first cDNA strand is 3′-TACGGCTTCCAGATT-5′, which is TTAGACCTTCGGCAT written 5′ to 3′.
2. DNA polymerase makes the second strand, complementary to the first. It reads 5′-ATGCCGAAGGTCTAA-3′, the mRNA sequence with T in place of U.
3. The mRNA codes for Met-Pro-Lys-Val, then a stop codon.

cDNA has no promoter or terminator, because mRNA does not carry them. They have to be added, as section 3.4.10.4 explains.

### Restriction endonucleases

A **restriction endonuclease** cuts both strands of DNA at its own **recognition sequence**, a short sequence of bases. The active site is complementary in shape to that sequence only, which makes the enzyme specific. The cut hydrolyses the sugar-phosphate backbone. Many enzymes cut each strand at a different point, leaving **sticky ends**, short single-stranded overhangs. Others cut straight across and leave **blunt ends**.

| Enzyme | Recognition sequence (5′ to 3′) | Ends |
|---|---|---|
| BamHI | G^GATCC | Sticky |
| HindIII | A^AGCTT | Sticky |
| SmaI | CCC^GGG | Blunt |

Cutting a gene and a vector with the same enzyme gives complementary sticky ends that can pair. To cut a gene out of a genome, you need an enzyme whose sites lie on both sides of the gene and not inside it.

*Worked example: fragment sizes.* A linear DNA of 9,400 base pairs (bp) has HindIII sites 2,100 bp and 6,700 bp from the left end.

1. Cuts at two places divide a linear molecule into three pieces.
2. They are 2,100 bp, 6,700 − 2,100 = 4,600 bp, and 9,400 − 6,700 = 2,700 bp.
3. Check: 2,100 + 4,600 + 2,700 = 9,400.
4. On a gel the smallest fragment travels furthest, so from the wells the bands are 4,600, 2,700 and 2,100 bp.

A circular plasmid cut at n sites gives n fragments. A linear molecule gives n + 1.

*Worked example: how often does an enzyme cut?* If bases are random and equally frequent, a given 4-base sequence occurs about once in 4⁴ = 256 bp. A 6-base sequence occurs about once in 4⁶ = 4,096 bp. In 12,000 bp, expect about 12,000 ÷ 4,096 = 2.9 sites for a 6-base enzyme. Treat it as an estimate.

### Artificial gene synthesis

If the amino acid sequence of the protein is known, a gene can be designed using the genetic code and built in a machine, which joins nucleotides in the order given. Short synthetic pieces are joined to make the whole gene. Advantages: no source organism or mRNA is needed, there are no introns, and codons and restriction sites can be chosen to suit the host. Limits: the sequence must be known, and long genes cost more to make accurately.

For a protein of 85 amino acids, the coding sequence including one stop codon is 85 × 3 + 3 = 258 bases.

## 3.4.10.3 PCR: amplifying DNA in vitro

The **polymerase chain reaction (PCR)** copies a chosen DNA fragment many times over in a tube, without cells. The tube holds the template DNA, two **primers**, DNA nucleotides, a heat-stable **DNA polymerase** and a buffer. The primers are short single-stranded DNA pieces complementary to the ends of the target on opposite strands. A thermal cycler repeats three stages.

| Stage | Temperature | What happens |
|---|---|---|
| Denaturation | about 95 °C | High temperature separates the two template strands by breaking the hydrogen bonds between their bases |
| Annealing | about 50 to 65 °C | Each primer pairs with the matching sequence on its template strand |
| Extension | about 72 °C | Polymerase extends each primer from its 3′ end, adding nucleotides complementary to the template |

The polymerase from *Thermus aquaticus* (Taq) keeps its shape at 95 °C, so it need not be added again each cycle. The target roughly doubles each cycle, so a single starting molecule gives 2ⁿ copies after n cycles, if every cycle is complete.

*Worked example: yield and time.* Six template molecules are run for 28 cycles. Each cycle is 20 s denaturation, 20 s annealing and 45 s extension, so 85 s.

1. Perfect copying gives 6 × 2²⁸ = 1,610,612,736 copies, about 1.61 × 10⁹.
2. If each cycle is only 90% efficient, the factor per cycle is 1.9: 6 × 1.9²⁸ = 3.83 × 10⁸.
3. Time: 28 × 85 = 2,380 s, which is 39.7 minutes.

*Worked example: designing primers.* The sense strand is 5′-GCTAGGCATTCAGGTACCGATTGCAAGTCCTGAATCG-3′. Use 12-base primers.

1. Forward primer: the first 12 bases of the sense strand, 5′-GCTAGGCATTCA-3′. It pairs with the other strand.
2. Reverse primer: it must pair with the sense strand's 3′ end. Take the last 12 bases, AGTCCTGAATCG, and write the complement in reverse: 5′-CGATTCAGGACT-3′.

Real primers are longer, which makes them more specific.

**Using PCR to identify DNA.** If the primers match only one sequence, such as a gene of a pathogen or a particular allele, a product appears only when that sequence is in the sample. Running the products on a gel shows a band of the expected size. A tube with no template acts as a control, and a band in it would show contamination.

## 3.4.10.4 In vivo amplification: culturing in host cells

Here the fragment is copied by living cells that divide.

1. **Add a promoter and a terminator.** A **promoter** is the region where RNA polymerase attaches so that transcription can begin. The **terminator** brings it to an end. A promoter must work in the host, or the gene is not expressed. cDNA and synthetic genes need these regions added.
2. **Cut the vector and ligate.** A **vector**, usually a plasmid, is cut with the same restriction endonuclease as the fragment. The sticky ends pair, and **DNA ligase** forms phosphodiester bonds to join the sugar-phosphate backbones. Two different enzymes at the two ends make the fragment enter in one direction only.
3. **Transformation.** The recombinant vector is put into host cells. For bacteria, cells are treated with calcium ions and given a brief heat shock, which makes the cell surface membrane temporarily permeable, or an electric pulse is used. Only a small share of cells take up the vector.
4. **Marker genes.** These identify cells that were transformed. A gene for resistance to an antibiotic means that only cells holding the vector survive on agar containing it. A gene for **green fluorescent protein** makes transformed colonies glow under UV light. If the new gene is inserted inside the marker gene, the marker stops working. This is **insertional inactivation**, and it separates recombinant cells from those with a vector that closed up without the gene.

*Worked example: transformation efficiency.* 0.040 µg of plasmid is mixed with bacteria, which then recover in 1,000 µl of broth. 100 µl is spread on agar with ampicillin and gives 138 colonies.

1. Colonies in all the broth: 138 × (1,000 ÷ 100) = 1,380.
2. Efficiency = 1,380 ÷ 0.040 = 34,500 colonies per µg of DNA.

*Worked example: finding recombinants.* A plasmid carries an ampicillin-resistance gene and a GFP gene. The new gene is inserted into the GFP gene. On ampicillin agar, 186 colonies grow and 142 fluoresce.

1. All 186 contain a plasmid.
2. The 142 that fluoresce have an intact GFP gene, so no insert.
3. Recombinant colonies: 186 − 142 = 44, which is 44 ÷ 186 × 100 = 23.7%.

## Interpreting data and evaluating the technology

You may be asked to read a method, a gel or a table, and then to judge the technology. Link each point to who is affected.

| Type of issue | Points in favour | Points against |
|---|---|---|
| Ethical | Medicines made without animal extracts; crops that need fewer inputs | Moving genes between species; effects on wild relatives through gene flow; animal welfare in some uses |
| Financial | Cheaper, reliable drug supply; higher yield | Development cost; seed or drug prices; patents held by companies |
| Social | Better health or food security; more choice | Unequal access; public concern; labelling and consumer choice |

*Worked example: a crop trial.* A drought-tolerant GM rice and a conventional rice are grown in dry conditions. Yields are 4.4 and 3.1 tonnes per hectare. Seed costs 61 and 38 currency units per hectare. Rice sells at 260 units per tonne.

1. Yield increase: (4.4 − 3.1) ÷ 3.1 × 100 = 41.9%.
2. Extra income: 1.3 × 260 = 338 units per hectare.
3. Extra seed cost: 61 − 38 = 23 units.
4. Net gain: 338 − 23 = 315 units per hectare.

A balanced answer then uses the numbers and weighs the issues: the gain is large in a dry season, but a farmer must buy seed each year if the seed is patented, and a single trial cannot show effects on wild relatives or other species. State a conclusion and its condition.

## Common errors

- Writing that the code is "similar" in all organisms. Say universal.
- Saying restriction endonucleases cut at random. They cut at one recognition sequence.
- Forgetting that cDNA has no promoter or terminator.
- Saying PCR needs ligase, or that Taq is used because it works at 37 °C.
- Calling the annealing stage the place where the polymerase works.
- Treating the marker as a way of making the host express the gene.

## Official syllabus

The OxfordAQA *International AS and A-level Biology (9610)* specification, Version 5.1, for International A-level exams May/June 2018 onwards, published by OxfordAQA. For general exam technique see [exam preparation](/resources/oxfordaqa-a-level-biology-exam-preparation/).
