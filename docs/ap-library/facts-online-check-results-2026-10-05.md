# Online check of the kept-facts lists -- AP library Phases 2 and 3 (5 Oct 2026, 21:10-22:00 PKT)

Six independent checkers took every fact in `facts-pending-online-check-2026-10-05.md` (Phase 2) and `facts-phase3-2026-10-05.md` (Phase 3), read what the pages actually say, and checked each against an online source with WebFetch only (Wikipedia, NIST WebBook, LibreTexts, OpenStax, official documents).

**Result: 287 confirmed, 0 corrected, 8 not checked online.** No page needed a change. The 8 not checked are standard statements whose sources were rate-limited or refused; each is listed below with the reason, and none is believed to be wrong:

- UNCHECKED | Marine bony fish produce only small amounts of urine (study guide "Osmoregulation"; practice Q6(c)) | None of the fetched pages (Wikipedia Osmoregulation, Fish physiology, Fish gill, Teleost, Kidney (vertebrates), Saltwater fish; OpenStax 41.1) states urine volume. Britannica and LibreTexts fetches needed permission and timed out. Standard textbook fact; left unchanged.
- UNCHECKED | Yeast pheromone response switches on the cell's own pheromone genes, so it releases more pheromone (guide, notes, practice Q6) | Primary-source pages could not be read: PMC PMC362535 rate-limited (HTTP 429), Tandfonline 403, ResearchGate 429, UniProt/EuropePMC permission timed out. A search result title supports it (Achstetter 1989, Mol Cell Biol 9:4507, "a-factor pheromone-induced expression of the MF alpha 1 and STE13 genes"); Genes Dev 5:741 abstract confirms pheromone raises transcription of many mating genes but does not name pheromone genes
- UNCHECKED | Honeybee waggle dance gives direction and distance (confirmed: Wikipedia "Waggle dance"); bees follow dancer in the dark hive by touch (not stated on Wikipedia "Waggle dance", "Bee learning and communication" or "Honey bee"; Britannica permission timed out) | tactile part not found online
- UNCHECKED | Mouse body temperature near 37 C (Worked example 2) | Wikipedia "House mouse", "Laboratory mouse" and "Mouse" give no figure; PMC source rate-limited
- UNCHECKED | The measured F–N=N angle in N2F2 is smaller than 120° (practice Q5(b), hedged wording) | Wikipedia "Dinitrogen difluoride" gives no angle; NIST CCCBDB and de.wikipedia were refused (permission not answered). The statement is very likely correct (literature about 105–115°).
- UNCHECKED | Silver chlorate is soluble (given data in Q4) | Wikipedia "Silver chlorate" says only "slightly soluble", with no number. PubChem was rate-limited (429). The handbook value is about 10–15 g/100 g water, enough for no precipitate in this test, so no change was made.
- UNCHECKED | |M| = |hᵢ/hₒ| = |sᵢ/sₒ| official form | apcentral AP Physics 2 equation-sheet PDF fetch refused (permission timed out). Local CED text (13.2.A.8, 13.4.A.6) gives M = hᵢ/hₒ = sᵢ/sₒ (extract loses any bars); pages consistent with prior PDF reading; no change
- UNCHECKED (in part) | Cl + NOCl → Cl₂ + NO elementary; N bonded to both O and Cl | Structure CONFIRMED by Wikipedia "Nitrosyl chloride" (N central, N=O and N–Cl, bent). Could not find the elementary-step status of Cl + NOCl in an allowed source (it is the usual second step of NOCl photolysis); the question uses it only as a given premise

Calculus exam-skills note: the three-decimal-place rounding and showing the set-up rather than calculator syntax are stated in the Calculus CED (course framework, rounding procedures).


---

## Fact-check results: bio1 (5 Oct 2026)

No page edits were needed, so the validator was not run.

## mb-ap-bio-1.2-study-guide
CONFIRMED | Hershey-Chase 1952: 35S labelled protein, 32P labelled DNA; most 32P entered, 35S stayed outside | en.wikipedia.org/wiki/Hershey–Chase_experiment (1952; about 80% of 32P entered; 35S stayed outside)
CONFIRMED | Cysteine and methionine are the two sulfur-containing standard amino acids | en.wikipedia.org/wiki/Methionine ("Cysteine and methionine are the two sulfur-containing proteinogenic amino acids")
CONFIRMED | Chitin is a nitrogen-containing modified polysaccharide in insect skeletons and fungal cell walls | en.wikipedia.org/wiki/Chitin (polymer of N-acetylglucosamine; fungal cell walls, arthropod exoskeletons)
CONFIRMED | Most of a plant's dry mass comes from atmospheric CO2, not soil | en.wikipedia.org/wiki/Plant_nutrition (C, H, O, N make up over 95% of dry mass; C and most O come from CO2); en.wikipedia.org/wiki/Jan_Baptist_van_Helmont (soil lost only 57 g)
CONFIRMED | Phosphatidylcholine is about two-thirds carbon by mass (POPC C42H82NO8P, 66.4%) | en.wikipedia.org/wiki/POPC (C42H82NO8P, 760.09 g/mol); recomputed 504.46/760.09 = 66.4%

## mb-ap-bio-1.4-study-guide
CONFIRMED | Most glucose molecules in water are in ring form | en.wikipedia.org/wiki/Glucose (more than 99% pyranose; open chain below 0.25%)
CONFIRMED | Sucrose is the form in which many plants move sugar | en.wikipedia.org/wiki/Phloem (phloem transports sucrose); en.wikipedia.org/wiki/Sucrose (glucose + fructose)
CONFIRMED | Glycogen is stored mainly in liver and muscle in animals, and also in fungi | en.wikipedia.org/wiki/Glycogen ("animals, fungi, and bacteria"; stored "primarily in the cells of the liver and skeletal muscle")
CONFIRMED | Chitin forms fungal cell walls and the exoskeletons of insects and crabs; its monomer is a nitrogen-containing modified glucose | en.wikipedia.org/wiki/Chitin
CONFIRMED | Cows digest cellulose only through gut microbes that make the enzymes; they get energy mostly from substances the microbes make | en.wikipedia.org/wiki/Ruminant (vertebrates lack cellulase; rumen microbes break down cellulose; carbohydrates fermented to VFAs)
CONFIRMED | Maltose forms when starch is digested; lactose (glucose + galactose) is milk sugar | en.wikipedia.org/wiki/Maltose; en.wikipedia.org/wiki/Lactose

## mb-ap-bio-1.5-study-guide
CONFIRMED | Most natural fatty acids have about 12 to 24 carbon atoms | openstax.org Biology 2e 3.3 ("range from 4 to 36. The most common are those containing 12–18 carbons"); en.wikipedia.org/wiki/Fatty_acid (overall range 4 to 28; C16/C18 dominant). The page's "most ... about 12 to 24" fits these sources.
CONFIRMED | Complete respiration of fat about 37 kJ/g; carbohydrate about 17 kJ/g | en.wikipedia.org/wiki/Food_energy (fat 37 kJ/g, carbohydrate 17 kJ/g)
CONFIRMED | Fat releases about 9 kcal per gram (practice Q3 distractor C, 555/9 = 61.7 g) | en.wikipedia.org/wiki/Food_energy (9 kcal/g); arithmetic rechecked
CONFIRMED | Coconut oil is mostly saturated and turns solid on a cool day; fish oils are mostly unsaturated | en.wikipedia.org/wiki/Coconut_oil (82% saturated; solid below about 25 °C); en.wikipedia.org/wiki/Fish_oil (rich in polyunsaturated omega-3s; it gives no saturated/unsaturated percentage, but the omega-3 content shown is the majority)
CONFIRMED | Cortisol raises blood glucose during stress; testosterone, oestrogen and cortisol are steroid hormones | en.wikipedia.org/wiki/Cortisol ("steroid hormone ... stress hormone ... increase blood sugar through gluconeogenesis"); OpenStax 3.3 (testosterone, estradiol are steroid hormones)
CONFIRMED | Whale and seal blubber insulates against heat loss | en.wikipedia.org/wiki/Blubber ("efficient thermal insulator")
CONFIRMED | Cholesterol restrains phospholipid movement when warm and prevents tight packing when cool | en.wikipedia.org/wiki/Membrane_fluidity (stabilises at high temperature; prevents clustering and stiffening at low temperature)

## mb-ap-bio-1.7-study-guide
CONFIRMED | About 20 common amino acids | en.wikipedia.org/wiki/Proteinogenic_amino_acid (20 in the standard genetic code, plus 2 special)
CONFIRMED | Sickle cell: Glu to Val in each beta chain; beta chain has more than 100 (146) amino acids; nonpolar surface patch makes deoxygenated Hb form fibres; cells stiff and sickle-shaped, block small vessels | en.wikipedia.org/wiki/Sickle_cell_disease (glutamate to valine at position 6 of beta-globin; exposed hydrophobic region in deoxy-HbS; fibrous polymers; rigid sickle cells block capillaries); en.wikipedia.org/wiki/Hemoglobin (beta chain 146 residues)
CONFIRMED | Hemoglobin has four chains, two alpha and two beta | en.wikipedia.org/wiki/Hemoglobin ("two α and two β subunits")
CONFIRMED | Collagen is three polypeptide chains wound around each other (skin, tendons) | en.wikipedia.org/wiki/Collagen (triple helix; tendons, skin)
CONFIRMED | One H atom is about 1 Da; water about 18 Da | en.wikipedia.org/wiki/Dalton_(unit) (1H = 1.0078 Da; used for protein masses); H2O = 18.02 by atomic masses

## mb-ap-bio-2.1-study-guide
CONFIRMED | Ribosome has a large and a small subunit; free ribosomes make cytosolic proteins, ER-bound ribosomes make proteins for export, membranes and lysosomes | en.wikipedia.org/wiki/Ribosome
CONFIRMED | Golgi glycosylation adds/trims sugar chains; vesicles arrive at one face and products leave from the other | en.wikipedia.org/wiki/Golgi_apparatus (ER vesicles reach the cis face; the trans Golgi network sends products to lysosomes, secretory vesicles and the cell surface; mannose removal, galactose and sialic acid addition)
CONFIRMED | Muscle cells tend to have many mitochondria with dense cristae | en.wikipedia.org/wiki/Mitochondrion ("Mitochondria from cells that have a greater demand for ATP, such as muscle cells, contain even more cristae")
CONFIRMED | Thylakoid membranes hold the light-absorbing pigments | en.wikipedia.org/wiki/Thylakoid ("photosynthetic pigments embedded directly in the membrane")
CONFIRMED | Glucose is broken down (glycolysis) before its products enter the mitochondrion (practice Q3 B) | en.wikipedia.org/wiki/Mitochondrion (pyruvate from glycolysis is transported into the matrix)

## mb-ap-bio-2.2-study-guide
CONFIRMED | For a given volume a sphere has the smallest possible surface area | en.wikipedia.org/wiki/Isoperimetric_inequality
CONFIRMED | Microvilli are finger-like projections on gut epithelial cells; root hairs are extensions of root surface cells for water and mineral uptake; stomata are opened and closed by a pair of guard cells and lead to leaf air spaces | en.wikipedia.org/wiki/Microvillus; en.wikipedia.org/wiki/Root_hair; en.wikipedia.org/wiki/Stoma
CONFIRMED | Shrew has a high metabolic rate per gram compared with larger mammals | en.wikipedia.org/wiki/Shrew ("unusually high metabolic rates")
CONFIRMED | Microvillus model values (r 0.05 um, h 1.0 um, 2000 per 100 um2) are labelled as model values; the caption's "real microvilli are far more numerous and narrower" refers to the drawing | en.wikipedia.org/wiki/Brush_border (about 100 nm diameter, 0.1 to 2 um long, so r = 0.05 um and h = 1.0 um are realistic). The caption sits under Figure 2 and the worked example says "modelled", so the wording is not misleading.
CONFIRMED | Pink agar indicator turns colourless in acid (practice Q4) | en.wikipedia.org/wiki/Phenolphthalein (colourless in acid, pink in base)

## mb-ap-bio-2.5-study-guide
CONFIRMED | K+ much more concentrated inside, Na+ much more concentrated outside a typical animal cell | en.wikipedia.org/wiki/Sodium–potassium_pump (K+ 100-140 mM inside vs 3.5-5 mM outside; Na+ 5-15 mM inside vs 135-145 mM outside)
CONFIRMED | Root hair cells take up mineral ions such as nitrate by active transport from more dilute soil water | en.wikipedia.org/wiki/Root_hair ("active uptake of water and minerals through root hairs"); en.wikipedia.org/wiki/Plasma_membrane_H+-ATPase (plant proton gradients drive nutrient uptake)
CONFIRMED | Animal cells use a pump moving Na+ out and K+ in | en.wikipedia.org/wiki/Sodium–potassium_pump
CONFIRMED | White blood cells engulf bacteria by phagocytosis; amoebae take in food particles by phagocytosis | en.wikipedia.org/wiki/Phagocytosis (neutrophils and macrophages; protozoa such as amoebae feed this way)
CONFIRMED | Pancreatic cells release digestive enzymes and insulin by exocytosis; nerve cells release neurotransmitters by exocytosis; secretory vesicles often come from the Golgi | en.wikipedia.org/wiki/Exocytosis (neurotransmitters; vesicles from Golgi to the cell surface); en.wikipedia.org/wiki/Beta_cell (insulin "by exocytosis"); en.wikipedia.org/wiki/Pancreas (acinar cells store digestive enzymes in granules)
CONFIRMED | ATP is used to reshape membrane and move vesicles along the cytoskeleton | en.wikipedia.org/wiki/Motor_protein (ATP hydrolysis moves vesicles along microtubules and actin); en.wikipedia.org/wiki/Exocytosis ("requires the use of energy")
CONFIRMED | Yeast can make ATP by fermentation without oxygen; carrot root cells respire aerobically and can make a small amount of ATP anaerobically | en.wikipedia.org/wiki/Ethanol_fermentation (yeast, anaerobic, 2 ATP per glucose); en.wikipedia.org/wiki/Alcohol_dehydrogenase (ADH expression rises sharply in oxygen-starved roots)

## mb-ap-bio-2.6-study-guide
CONFIRMED | K+ channels let K+ through but very few Na+; many channels are voltage- or ligand-gated | en.wikipedia.org/wiki/Potassium_channel (about 10,000-fold selectivity; voltage-gated and ligand-gated)
CONFIRMED | Glucose transporters (carriers) move glucose into red blood cells by facilitated diffusion | en.wikipedia.org/wiki/GLUT1 ("Glucose enters the erythrocyte by facilitated diffusion")
CONFIRMED | Resting nerve cell is about 70 mV more negative inside; K+ leaving makes the inside negative because large anions (proteins) cannot follow | en.wikipedia.org/wiki/Resting_potential (about -70 mV; K+ leak; impermeant intracellular protein anions)
CONFIRMED | Opening and closing of gated Na+ and K+ channels is the basis of nerve impulses | en.wikipedia.org/wiki/Action_potential
CONFIRMED | Cells keep internal glucose low by converting it (e.g. phosphorylation) on entry | en.wikipedia.org/wiki/Hexokinase (phosphorylation "traps" glucose as glucose-6-phosphate)
CONFIRMED | Aquaporins pass water in single file and exclude ions; ADH makes aquaporin vesicles fuse with collecting-duct membranes, increasing reabsorption and concentrating urine; plant root cells use aquaporins | en.wikipedia.org/wiki/Aquaporin (single file; excludes ions; plant roles); en.wikipedia.org/wiki/Aquaporin_2 (vasopressin causes AQP2 vesicles to fuse with the membrane). The fetched pages cover plant aquaporins in general; no root-specific statement was found online, but this is standard plant physiology.
CONFIRMED | Non-working collecting-duct aquaporins give large volumes of dilute urine; rare inherited nephrogenic diabetes insipidus can arise this way; extra ADH does not correct it | en.wikipedia.org/wiki/Nephrogenic_diabetes_insipidus (polyuria of dilute urine; AQP2 mutations; no response to desmopressin; rare); en.wikipedia.org/wiki/Aquaporin

## mb-ap-bio-2.7-study-guide
CONFIRMED | 0.9% NaCl is isotonic with blood plasma and used for IV fluids | en.wikipedia.org/wiki/Saline_(medicine) ("approximately isotonic to blood serum"; corrected osmolarity 286 against about 285 for blood)
CONFIRMED | Marine bony fish drink seawater and remove salt through gills | en.wikipedia.org/wiki/Fish_physiology; en.wikipedia.org/wiki/Fish_gill; openstax.org Biology 2e 41.1
UNCHECKED | Marine bony fish produce only small amounts of urine (study guide "Osmoregulation"; practice Q6(c)) | None of the fetched pages (Wikipedia Osmoregulation, Fish physiology, Fish gill, Teleost, Kidney (vertebrates), Saltwater fish; OpenStax 41.1) states urine volume. Britannica and LibreTexts fetches needed permission and timed out. Standard textbook fact; left unchanged.
CONFIRMED | Paramecium uses a contractile vacuole to expel water, and this needs energy | en.wikipedia.org/wiki/Contractile_vacuole (works through proton pumps and V-ATPase); en.wikipedia.org/wiki/Osmoregulation (contractile vacuoles pump out water)
CONFIRMED | 1 bar is close to atmospheric pressure | en.wikipedia.org/wiki/Bar_(unit) (1 atm = 1.01325 bar)

## mb-ap-bio-2.8-study-guide
CONFIRMED | Typical resting membrane potential of many animal cells is about -70 mV | en.wikipedia.org/wiki/Resting_potential
CONFIRMED | Pump cycle order: 3 Na+ bind inside, ATP phosphorylates the pump, shape change releases Na+ outside, 2 K+ bind, dephosphorylation, K+ released inside | en.wikipedia.org/wiki/Sodium–potassium_pump (same order; 3 Na+ out, 2 K+ in per ATP)
CONFIRMED | Most of the resting potential comes from K+ leak channels | en.wikipedia.org/wiki/Resting_potential (K+ through open channels is the main determinant)
CONFIRMED | H+ pumps move H+ out of plant cells and into lysosomes; Ca2+ pumps keep cytoplasmic Ca2+ low | en.wikipedia.org/wiki/Plasma_membrane_H+-ATPase; en.wikipedia.org/wiki/Lysosome (V-ATPase); en.wikipedia.org/wiki/Plasma_membrane_Ca2+_ATPase
CONFIRMED | Lysosome interior about pH 4.6-5, cytoplasm about 7.2; lysosomal enzymes work best at acidic pH (practice Q5) | en.wikipedia.org/wiki/Lysosome (cytosol pH 7.2; optimum about 4.5-5.0)
CONFIRMED | Resting cytoplasmic Ca2+ about 0.0001 mM (100 nM), extracellular about 1.2 mM; brief Ca2+ rises act as signals (practice Q6) | en.wikipedia.org/wiki/Calcium_signaling (about 100 nM; transient rises are signals); en.wikipedia.org/wiki/Hypocalcaemia (ionized Ca 1.16-1.31 mmol/L). The 12,000-fold ratio in Q6 comes from fictional data and is arithmetically correct.
CONFIRMED | At -70 mV, net passive K+ movement is outward | en.wikipedia.org/wiki/Resting_potential (E_K about -80 to -90 mV, more negative than the resting potential, so the net driving force on K+ is outward)

---

## Fact-check results: bio2 (5 Oct 2026)

Totals: 53 CONFIRMED, 0 CORRECTED, 3 UNCHECKED. No page edited.

## mb-ap-bio-4.3-study-guide
CONFIRMED | Cholera toxin: Gs alpha cannot hydrolyse GTP, adenylyl cyclase stays on, cAMP high, PKA activates CFTR, Cl- and water secreted, watery diarrhoea (guide table; practice Q2) | Wikipedia "Cholera toxin" (ADP-ribosylation of Arg201 inhibits GTP hydrolysis, locks Gs active, cAMP up, PKA phosphorylates CFTR, Cl- and water secreted, profuse watery diarrhoea)
CONFIRMED | Aliivibrio fischeri: AHL autoinducer binds LuxR, lux genes for light at high density; symbiont in Hawaiian bobtail squid light organ | Wikipedia "Aliivibrio fischeri"
CONFIRMED | Interdigital apoptosis; disrupting a BMP receptor in chick stopped it and gave duck-like webbed feet (guide; practice Q5 context) | Wikipedia "Webbed foot" ("mutations to a BMP receptor disrupted the apoptosis of interdigital tissue and caused webbed feet similar to ducks"); Wikipedia "Apoptosis" (digit separation)
CONFIRMED | Androgen insensitivity: AR gene mutation; testosterone normal or high; target cells cannot respond | Wikipedia "Androgen insensitivity syndrome" ("typical or elevated" testosterone; inability of cells to respond)
CONFIRMED | Oncogenic Ras cannot hydrolyse GTP, stays active; downstream of RTKs, upstream of MAP kinase cascade; page says "many human cancers" | Wikipedia "Ras GTPase" (activating mutations in 20-25% of all human tumours)
CONFIRMED | 1-methylcyclopropene blocks ethylene perception, delays ripening | Wikipedia "1-Methylcyclopropene"
CONFIRMED | Epinephrine in liver cells acts via cAMP to activate glycogen breakdown and glucose release | Wikipedia "Adrenaline" (beta2 receptors on liver cells, Gs, adenylyl cyclase, cAMP) + "Epinephrine (medication)" (stimulates glycogenolysis in liver)
CONFIRMED | Yeast pheromone binds receptors on opposite mating type, switches on mating genes, cell stops dividing and grows towards partner | J Biol Chem review "Heterotrimeric G protein-coupled receptor signaling in yeast mating pheromone response" (sciencedirect S0021925820407471): Far1 G1 arrest, Ste12 activates mating genes, polarized growth to partner; Wikipedia "Mating of yeast" (Ste2/Ste3 receptors, shmoo toward source)
CONFIRMED | Steroid hormones (testosterone) bind intracellular receptors; complex acts as transcription factor; HOX genes code transcription factors specifying body regions | Wikipedia "Steroid hormone receptor"; Wikipedia "Hox gene"
CONFIRMED | Beta blockers block epinephrine receptors in heart; some cancer drugs inhibit an overactive kinase | Wikipedia "Beta blocker"; Wikipedia "Protein kinase inhibitor" (imatinib vs BCR-ABL)
CONFIRMED | Apoptotic fragments engulfed by other cells without inflammation | Wikipedia "Apoptosis" (phagocytes engulf apoptotic bodies, no inflammatory response; caspases)
CONFIRMED | Practice Q4: epinephrine raises heart rate via receptor, G protein, adenylyl cyclase (cAMP) | Wikipedia "Adrenaline" (beta1, Gs, adenylyl cyclase, cAMP; increases heart rate)
CONFIRMED | Verifier item: yeast pheromone causes G1 arrest ("stops dividing") | J Biol Chem review above ("Fus3 imposes G1-specific growth arrest by phosphorylating Far1")

## mb-ap-bio-4.4-study-guide
CONFIRMED | Oxytocin (and vasopressin) receptor blockers such as atosiban delay premature labour (Worked example 2(c), "such drugs") | Wikipedia "Atosiban"
CONFIRMED | Iodine deficiency: low thyroxine, high TSH, goitre (practice Q3) | Wikipedia "Iodine deficiency"; Wikipedia "Goitre"
CONFIRMED | Ethylene in climacteric fruit (tomato) is self-stimulating; receptor blocker stops response (guide; practice Q6) | Wikipedia "Climacteric (botany)" (autocatalytic ethylene; tomato listed); Wikipedia "1-Methylcyclopropene"
CONFIRMED | Beta cells release insulin; acts on muscle, fat, liver; liver stores glycogen; alpha cells release glucagon; liver breaks down glycogen | Wikipedia "Insulin"
CONFIRMED | Sweating and vasodilation lose heat; shivering and vasoconstriction conserve/generate heat | Wikipedia "Thermoregulation"; Wikipedia "Shivering"
CONFIRMED | End-product inhibition at allosteric site of first enzyme; cholesterol-rich cells make less of the synthesis enzymes | Wikipedia "Enzyme inhibitor" (feedback inhibition, allosteric); Wikipedia "Sterol regulatory element-binding protein" (sterols block SREBP, negative feedback on sterol synthesis)
CONFIRMED | Childbirth (stretch -> pituitary oxytocin -> stronger contractions), lactation (oxytocin milk flow, prolactin milk production), clotting (platelets activate platelets) | Wikipedia "Oxytocin"; Wikipedia "Prolactin"; Wikipedia "Platelet"
CONFIRMED | Type 1 = immune destruction of beta cells, very low insulin; type 2 = insulin resistance, insulin often normal or high at first | Wikipedia "Diabetes" (type 2 insulin "normal, decreased or increased")
CONFIRMED | Synthetic oxytocin can start or strengthen labour | Wikipedia "Oxytocin" (pharmaceutical oxytocin stimulates contractions; used to induce childbirth)
CONFIRMED | Glucose mg/dL divided by 18 gives mmol/L | Wikipedia "Diabetes" (factor 18; 7.0 mmol/L = 126 mg/dL)

## mb-ap-bio-5.5-study-guide
CONFIRMED | Day length is the main cue for the moult to a white coat in snowshoe hares and arctic foxes; early snow melt leaves white hares conspicuous (guide, notes, practice Q5) | Yale Climate Connections "Warming can make winter camouflage a liability" (hare coat change "based on photoperiod", mismatch on bare ground); Wikipedia "Snowshoe hare" (white hares in snowless habitat lose camouflage); Wikipedia "Arctic fox" (white in winter, brown in summer; trigger not stated there)
UNCHECKED | Yeast pheromone response switches on the cell's own pheromone genes, so it releases more pheromone (guide, notes, practice Q6) | Primary-source pages could not be read: PMC PMC362535 rate-limited (HTTP 429), Tandfonline 403, ResearchGate 429, UniProt/EuropePMC permission timed out. A search result title supports it (Achstetter 1989, Mol Cell Biol 9:4507, "a-factor pheromone-induced expression of the MF alpha 1 and STE13 genes"); Genes Dev 5:741 abstract confirms pheromone raises transcription of many mating genes but does not name pheromone genes
CONFIRMED | UV exposure increases melanin production in skin (tanning) through pigment cells (practice Q7) | Wikipedia "Sun tanning" (UVB triggers melanogenesis, delayed tanning)
CONFIRMED | PKU recessive; cannot break down phenylalanine; low-phenylalanine diet from birth prevents brain damage | Wikipedia "Phenylketonuria"
CONFIRMED | Most mammals and birds: sex set by sex chromosomes; many reptiles lack sex chromosomes (TSD) | Wikipedia "Temperature-dependent sex determination" (TSD differs from chromosomal systems; pattern Ia in most turtles; aromatase; pivotal temperature)
CONFIRMED | Daphnia reproduce asexually (clonal offspring); some clones grow head crests in response to predator chemicals (practice Q4, fictional data) | Wikipedia "Daphnia" (parthenogenesis; morphological defences such as neck-teeth induced by predator kairomones)

## mb-ap-bio-7.10-study-guide
CONFIRMED | Allopatric speciation thought to be the most common route in animals | Wikipedia "Allopatric speciation" ("widely regarded as the most common form of speciation")
CONFIRMED | Polyploidy common in flowering plants | Wikipedia "Polyploidy" (30-80% of plant species polyploid; 15% of angiosperm speciation events with ploidy increase)

## mb-ap-bio-7.11-study-guide
CONFIRMED | Potatoes propagated from tubers, so plants in a field genetically almost identical (Lumper, blight) | Wikipedia "Great Famine (Ireland)" (Irish Lumper, vegetative propagation, lack of genetic variability, Phytophthora infestans)
CONFIRMED | Antibiotic resistance alleles often carry a growth cost without the drug (guide; practice Q6) | Wikipedia "Antimicrobial resistance" (resistance ribosomal mutation "may result in slower growth rate")

## mb-ap-bio-7.12-study-guide
CONFIRMED | Young Earth hot, frequent large impacts able to melt rock and boil away surface water | Wikipedia "Hadean" (surface molten; impacts boiled off up to 100 m of ocean)
CONFIRMED | Living stromatolites still form today in a few salty, shallow seas | Wikipedia "Stromatolite" (rare today; Shark Bay hypersaline; ~3.5 Gyr fossils)
CONFIRMED | DNA's sugar lacks the 2'-OH that makes RNA easier to break (guide; practice Q7) | Wikipedia "RNA" (2'-OH attacks adjacent phosphodiester bond, cleaving backbone)
CONFIRMED | Ribozymes that cut and join RNA (self-splicing introns) occur in living cells (practice Q7(b)) | Wikipedia "Ribozyme" (self-splicing introns, RNase P, ribosome; Cech and Altman 1989)

## mb-ap-bio-7.9-study-guide
CONFIRMED | Snakes lost their legs and many cave animals lost their eyes; both derived losses | Wikipedia "Snake" (descended from lizards; vestigial hind limbs); Wikipedia "Troglobite" (loss of eyes and pigment)
CONFIRMED | Fossils dated from surrounding rock layers with radioactive isotopes give a minimum age for a lineage | Wikipedia "Molecular clock" ("oldest fossil of a clade is used to constrain the minimum possible age"); Wikipedia "Radiometric dating" (dates fossils)

## mb-ap-bio-8.1-study-guide
CONFIRMED | Short-day plants need continuous darkness longer than a critical length; a light flash in the night prevents flowering; a dark break in the light period has little effect (practice Q4 cabinet D, fictional) | Wikipedia "Photoperiodism"; LibreTexts Botany 4.2.3 "Photoperiodism"; encyclopedia.com "Photoperiodism" ("An interruption of the light period with dark has no effect")
CONFIRMED | Weakly electric fish use discharges to attract mates and in recognition/territorial displays | Wikipedia "Electric fish"
CONFIRMED | Caterpillar-damaged plants release volatiles that attract parasitic wasps; herbivore saliva acts as trigger | Wikipedia "Plant defense against herbivory"
UNCHECKED | Honeybee waggle dance gives direction and distance (confirmed: Wikipedia "Waggle dance"); bees follow dancer in the dark hive by touch (not stated on Wikipedia "Waggle dance", "Bee learning and communication" or "Honey bee"; Britannica permission timed out) | tactile part not found online
CONFIRMED | Imprinting in young geese; songbird males learn song from adults; habituation (birds ignoring scarecrows) | Wikipedia "Imprinting (psychology)" (Lorenz geese); Wikipedia "Bird vocalization" (young learn from fathers/tutors); Wikipedia "Habituation" (definition; scarecrow example not given but fits)
CONFIRMED | Warning colours of poisonous frogs; firefly flashes as courtship; ant trail chemicals; territory scent marks; primate grooming | Wikipedia "Aposematism"; "Firefly"; "Ant trail"; "Territory (animal)"; "Social grooming"
CONFIRMED | Fight-or-flight raises heart rate and breathing and releases glucose | Wikipedia "Adrenaline" (heart rate, respiratory rate, blood sugar)
CONFIRMED | Some desert rodents are nocturnal, reducing heat and water loss | Wikipedia "Nocturnality" (desert nocturnality avoids heat, prevents water loss)

## mb-ap-bio-8.2-study-guide
CONFIRMED | Daphnia asexual for most of season, switch to sexual with tough resting eggs (ephippia) that survive cold, drought, poor food and hatch when conditions improve | Wikipedia "Daphnia"
CONFIRMED | Transfer efficiency "often between about 5% and 20%" (FAQ) | Wikipedia "Ecological efficiency" (about 10% generally; marine about 20%; Lindeman 0.1-37.5%): wording is a fair summary
CONFIRMED | About 20 J per mL O2; about 17 kJ per g dry food (carbohydrate/protein) | Wikipedia "Indirect calorimetry" (21.13 kJ per L O2 for carbohydrate, 19.62 for fat = about 20 J per mL); Wikipedia "Food energy" (protein and most carbohydrates about 17 kJ/g)
UNCHECKED | Mouse body temperature near 37 C (Worked example 2) | Wikipedia "House mouse", "Laboratory mouse" and "Mouse" give no figure; PMC source rate-limited
CONFIRMED | Aphids asexual when food plentiful, switch to sexual in autumn/poorer conditions | Wikipedia "Aphid" (photoperiod, temperature, food quality trigger sexual forms; overwintering eggs)
CONFIRMED | Biennials store energy in year 1, flower in year 2; reproductive diapause | Wikipedia "Biennial plant"; Wikipedia "Diapause" (reproductive development halted during food scarcity etc.)
CONFIRMED | Chemosynthetic bacteria/archaea at vents use hydrogen sulfide; vent communities depend on them; ammonia also used | Wikipedia "Hydrothermal vent"; Wikipedia "Chemosynthesis" (H2S, ammonia, H2; with or without oxygen; archaea included)
CONFIRMED | Phosphorus has no major atmospheric reservoir (guide; practice Q1) | Wikipedia "Phosphorus cycle"
CONFIRMED | Food chains rarely exceed four or five levels | Wikipedia "Food chain" ("usually no more than five trophic levels")

---

## Fact-check results: chem-a1 (5 Oct 2026)

No page edits were needed. Validator not run (no files edited).

## mb-ap-chem-1.2-study-guide
- CONFIRMED | Mg isotopes 23.985/24.986/25.983 amu, 78.99/10.00/11.01 %, average 24.31 | Wikipedia "Isotopes of magnesium": 23.98504, 24.98584, 25.98259 Da; abundance ranges 78.88-79.05 / 9.988-10.034 / 10.96-11.09 % (page values inside ranges); Ar 24.305. Recomputed average 24.305 -> 24.31.
- CONFIRMED | B isotopes 10.013 / 11.009 amu, ~19.9 / 80.1 %, average 10.81 | Wikipedia "Isotopes of boron": 10.01294, 11.00931 Da; 18.9-20.4 % / 79.6-81.1 %; Ar 10.81. Worked example (peak heights 24.8:100 -> 19.87 %/80.13 %, 10.811) consistent.
- CONFIRMED | Cu isotopes 62.930 / 64.928 amu, average 63.546, ~69.2/30.8 % | Wikipedia "Isotopes of copper": 62.92960, 64.92779 Da; 69.15/30.85 %; Ar 63.546.
- CONFIRMED | Ag isotopes 107/109 almost equal; Ar 107.87; only element with average between 107 and 109 | Wikipedia "Isotopes of silver" (51.839/48.161 %, 107.8682); "List of chemical elements" (Pd 106.42, Ag 107.87, Cd 112.41; Ag only element in 107-109).
- CONFIRMED | Cl 75.76 % 35Cl (34.969), 24.24 % 37Cl (36.966), average 35.45 | Wikipedia "Isotopes of chlorine": 34.96885, 36.96590 Da; 75.8(2)/24.2(2) %; Ar 35.45. Recomputed 35.453.
- CONFIRMED | Se 78.97, Br 79.90, Kr 83.80, Rb 85.47; Br isotopes 79/81 almost equal | Wikipedia "List of chemical elements" (78.971, 79.904, 83.798, 85.468); "Isotopes of bromine" 50.65/49.35 %.

## mb-ap-chem-1.7-study-guide
- CONFIRMED | First IEs Li 520 ... Ar 1521 (16 values) | Wikipedia "Ionization energies of the elements (data page)": Li 520.2, Be 899.5, B 800.6, C 1086.5, N 1402.3, O 1313.9, F 1681.0, Ne 2080.7, Na 495.8, Mg 737.7, Al 577.5, Si 786.5, P 1011.8, S 999.6, Cl 1251.2, Ar 1520.6 (Be 899 is an acceptable rounding of 899.5).
- CONFIRMED | Mg successive IEs 738, 1451, 7733 | same data page: 737.7, 1450.7, 7732.7.
- CONFIRMED | I 1008, Br 1140 | same data page: 1008.4, 1139.9 (also Wikipedia "Iodine").
- CONFIRMED | K 419, Rb 403, Cs 376; Sr > Rb | same data page: 418.8, 403.0, 375.7; Sr 549.5.
- CONFIRMED | Pauling EN F 3.98, O 3.44, Cl 3.16, N 3.04, S 2.58 | Wikipedia "Electronegativity".
- CONFIRMED | EA: Cl releases more than F; Br less than Cl | Wikipedia "Electron affinity (data page)" (Cl 348.6, F 328.2 kJ/mol); Wikipedia "Halogen" (Cl has the highest EA of any atom).
- CONFIRMED | Q4 data 580, 1820, 2750, 11600 match Al (rounded) | data page Al: 577.5, 1816.7, 2744.8, 11577.

## mb-ap-chem-1.8-study-guide
- CONFIRMED | Li 520, Na 496, K 419 | IE data page (above).
- CONFIRMED | Mg 738, 1451, 7733 | IE data page (above).
- CONFIRMED | Li fizzes steadily; Na melts/darts; K violent, H2 ignites, lilac flame | Wikipedia "Alkali metal" ("lithium reacts steadily with effervescence, but sodium and potassium can ignite"; K flame violet, i.e. lilac).
- CONFIRMED | Second EA of O endothermic in gas phase | Wikipedia "Electron affinity (data page)": O- -> O2- -744 kJ/mol (energy required).
- CONFIRMED | Fe2+/Fe3+, Cu+/Cu2+, Fe2O3 = iron(III) oxide | Wikipedia "Copper" (+1 and +2), "Iron(III) oxide" (Fe2O3; FeO, Fe3O4 show +2).
- CONFIRMED | Cl2 reacts more vigorously with hot iron than Br2 | Wikipedia "Halogen": iron's reaction with bromine is less reactive than with fluorine or chlorine; Cl2 + heated iron -> FeCl3.
- CONFIRMED | Mg very slow with cold water; Ca steady | Wikipedia "Magnesium" (reacts much more slowly than calcium; slow bubbles), "Calcium" (reacts with water more quickly than Mg).
- CONFIRMED | Be 9.012, Mg 24.31, Ca 40.08, Sr 87.62, Ba 137.33, Cl 35.45 | Wikipedia "List of chemical elements" (9.0122, 24.305, 40.078, 87.62, 137.33, 35.45).
- CONFIRMED | Ne forms no stable compounds with Cl | Wikipedia "Neon compounds" (only van der Waals species such as Ne2Cl2; neon least reactive element).

## mb-ap-chem-u1-diagnostic
- CONFIRMED | Q8 Be 899, B 801, Mg 738, Al 578 | IE data page (899.5, 800.6, 737.7, 577.5).
- CONFIRMED | P 30.97 g/mol | Wikipedia "List of chemical elements" (30.974).

## mb-ap-chem-u1-review
- CONFIRMED | S 1000 (999.6), Te 869 (869.3), Se measured 941 (940.9); estimate 934.5 ~ 935 | IE data page: S 999.6, Te 869.3, Se 941.0; mean (1000+869)/2 = 934.5 correct.
- CONFIRMED | Radius order S2- < Br- < Se2- (~184, 196, 198 pm) | Wikipedia "Ionic radius" effective radii S2- 184, Br- 196, Se2- 198 (crystal radii 170/182/184, same order).
- CONFIRMED | B 10.81, Al 26.98, Ga 69.72 | Wikipedia "List of chemical elements" (10.81, 26.982, 69.723).
- CONFIRMED | Illustrative K PES values; 0.42 MJ/mol consistent with K IE 419 kJ/mol | IE data page K 418.8 kJ/mol = 0.419 MJ/mol; values labelled illustrative.

## mb-ap-chem-2.1-study-guide
- CONFIRMED | HF made of discrete covalent HF molecules | Wikipedia "Hydrogen fluoride" (diatomic molecules in gas; covalent H-F bond 95 pm; chains of HF molecules in liquid/solid via H-bonding).
- CONFIRMED | Rough ionic cut-off about 1.7-2.0 quoted in some books | Wikipedia "Ionic bonding" (Pauling: difference 1.7 ~ 50 % ionic character); page frames it as a rough guide only.
- CONFIRMED | Brass = copper + zinc | Wikipedia "Brass".
- CONFIRMED | Diamond and quartz covalent networks, very high mp | Wikipedia "Diamond" (each C bonded to four others, 3-D network), "Quartz" (framework of SiO4 tetrahedra; silica melts ~1670-1713 C).
- CONFIRMED | Calcium solid with high mp | Wikipedia "Calcium" (mp 842 C).
- CONFIRMED | Sucrose non-conducting molecular solid, soluble, non-conducting solution; KCl conducts molten/in solution, brittle; tin conducts, malleable, insoluble | Wikipedia "Sucrose" (2.01 g/mL solubility), OpenStax Chemistry 2e 11.2 (nonelectrolytes give no ions, cannot conduct; ionic compounds strong electrolytes), Wikipedia "Electrolyte" (molten salts conduct), Wikipedia "Tin" (soft, malleable, ductile; resists water).

## mb-ap-chem-2.2-study-guide
- CONFIRMED | H-H 74 pm | NIST Chemistry WebBook H2: re = 0.74144 A.
- CONFIRMED | Cl-Cl 199 pm, I-I 267 pm | NIST WebBook Cl2 re = 1.9879 A; Wikipedia "Chlorine" (gaseous 199 pm); Wikipedia "Iodine" (266.6 pm).
- CONFIRMED | N-N 145, N=N 125, N#N 110 pm (average values) | Wikipedia "Hydrazine" (144.7 pm), "Azobenzene" (cis N=N 125.1 pm; trans 118.9 pm), "Nitrogen" (N2 109.76 pm). Page labels them average values; acceptable.
- CONFIRMED | H-F < H-Cl < H-Br < H-I | NIST WebBook re: HF 0.9168, HCl 1.2746, HBr 1.4144, HI 1.6092 A.
- CONFIRMED | K+-F- attracts more strongly than K+-I- (I- larger; 220 pm) | Wikipedia "Ionic radius" effective radii F- 133, I- 220 pm.

## mb-ap-chem-2.3-study-guide
- CONFIRMED | In NaCl a Na+ sits above each Cl- in the adjacent layer | Wikipedia "Sodium chloride" (each ion octahedrally surrounded by six of opposite charge, rock-salt structure; the six neighbours include the ions directly above and below in adjacent (100) layers).
- CONFIRMED | Effective radii Li+ 76, Na+ 102, K+ 138, Mg2+ 72, Ca2+ 100, F- 133, Cl- 181, Br- 196, I- 220, O2- 140 | Wikipedia "Ionic radius" effective-radius table (identical; crystal radii differ by 14 pm).
- CONFIRMED | mp NaF 993, NaCl 801 (800.7), KCl 770, MgO 2852 C | Wikipedia infoboxes "Sodium fluoride", "Sodium chloride", "Potassium chloride", "Magnesium oxide".

## mb-ap-chem-2.4-study-guide
- CONFIRMED | Brass harder than pure copper | Wikipedia "Solid solution strengthening" (substitutional Zn in Cu impedes dislocations, strengthening brass relative to copper).
- CONFIRMED | Alloys usually conduct less well than host metal | Wikipedia "Alloy" ("electrical and thermal conductivity of alloys is usually lower than that of the pure metals"); "Electrical resistivity and conductivity" (Cu 1.68e-8, brass 30 % Zn 5.99e-8 ohm m).
- CONFIRMED | Lustre from free electrons interacting with light (background) | Wikipedia "Metallic bonding" (delocalized electrons respond to light, so photons are reflected).
- CONFIRMED | Hume-Rothery: radii differ by less than about 15 % | Wikipedia "Hume-Rothery rules" ("must differ by no more than 15%").
- CONFIRMED | Interstitial atoms usually C, N, H or B | Wikipedia "Alloy" (C in steel), "Interstitial defect" (H in Pd), "Nitride" (interstitial nitrides). B not named explicitly in the pages fetched, but the "usually ... such as" wording is a standard textbook statement and not misleading.

---

## Fact-check results: chem-a2 (5 Oct 2026)

No page edits were made. The validator was not needed.

## mb-ap-chem-2.7-study-guide
CONFIRMED | cis-1,2-dichloroethene has a dipole moment; trans has none | Wikipedia "Cis–trans isomerism": in the cis isomer the C–Cl dipoles combine; in trans "the two C−Cl bond moments cancel and the molecule has a net zero dipole moment"
UNCHECKED | The measured F–N=N angle in N2F2 is smaller than 120° (practice Q5(b), hedged wording) | Wikipedia "Dinitrogen difluoride" gives no angle; NIST CCCBDB and de.wikipedia were refused (permission not answered). The statement is very likely correct (literature about 105–115°).

## mb-ap-chem-3.1-study-guide
CONFIRMED | Krypton boils above argon | Wikipedia infoboxes: Kr −153.4 °C, Ar −185.8 °C
CONFIRMED | Water takes part in up to four H bonds; methanol fewer per molecule | Wikipedia "Hydrogen bond": water's "total number of bonds ... is up to four" (two lone pairs + two H). Methanol has one O–H, so fewer (follows directly). Methanol bp 65, octane 126 °C also consistent.
CONFIRMED | Hydrogen bonds between bases hold DNA strands together | Wikipedia "Hydrogen bond": the double helix is "due largely to hydrogen bonding between its base pairs (as well as pi stacking)". The page also names other noncovalent forces.
CONFIRMED (note only) | CED extraction gap note | Not a factual claim; nothing to check.

## mb-ap-chem-3.11-study-guide
CONFIRMED | CuSO4(aq) looks blue because it absorbs mainly orange-red light | Wikipedia "Color of chemicals": absorbing orange (585–647 nm) gives a blue appearance; Cu2+ listed as blue. No fetched page gave the Cu(II) band itself (about 800 nm, red), so "orange-red" is consistent but not directly quoted.
CONFIRMED | Argon absorbs only high-energy (vacuum) UV | Wikipedia "Ultraviolet": VUV (100–200 nm) is absorbed by O2; instruments use "argon for shorter wavelengths", so argon is transparent down into the VUV.
CONFIRMED | The ground emits most of its energy as infrared | Wikipedia "Greenhouse effect": the surface "emits longwave radiation at mid- and far-infrared wavelengths"
CONFIRMED | CO2 does not absorb visible light; its electronic transitions need UV | Wikipedia "Carbon dioxide": colourless, "transparent to visible light but absorbs infrared" (4.26 and 14.99 μm vibrational modes). The UV part matches the course's UV/visible-to-electronic model.

## mb-ap-chem-3.12-study-guide
CONFIRMED | The exam equation sheet gives h and c (and N_A) | College Board "AP Chemistry Equations and Constants, effective 2025" (CED Appendix 2, local official copy): h = 6.626e-34 J s, c = 2.998e8 m/s, Avogadro's number 6.022e23. WebFetch to apcentral PDF was refused (permission). The page only claims the values are given.

## mb-ap-chem-3.2-study-guide
CONFIRMED | Graphite conducts through electrons moving along its layers | Wikipedia "Graphite": delocalised electrons; "conducted within the plane of the layers"
CONFIRMED | ortho-xylene has a small dipole; para-xylene is nonpolar | Wikipedia o-Xylene 0.64 D; p-Xylene 0.00 D. Table data also match (o: mp −25, bp 144 °C; p: mp 13, bp 138 °C)
CONFIRMED | In solid iodine, the distance between molecules is larger than the I–I bond | Wikipedia "Iodine": I–I is 266.6 pm (gas) and 271.5 pm (solid); van der Waals radius 198 pm, so the nonbonded contact is about 396 pm. mp 113.7 °C matches 114 °C.
CONFIRMED | Acetone has the highest vapour pressure at 20 °C (against water, ethanol and propan-1-ol) | Wikipedia: acetone 9.39 kPa at 0 °C and 30.6 kPa at 25 °C; ethanol 5.95 kPa and 1-propanol 1.99 kPa at 20 °C, so propan-1-ol is below ethanol, as stated.

## mb-ap-chem-4.1-study-guide
CONFIRMED | Mg ribbon burns with a bright white light | Wikipedia "Magnesium": "brilliant white light"
CONFIRMED | BaCl2 + Na2SO4 give a white BaSO4 precipitate | Wikipedia "Barium sulfate": white, insoluble, made by mixing Ba2+ and sulfate solutions
CONFIRMED | Cu wire in AgNO3: blue solution, silver crystals | Wikipedia "Silver nitrate": "hairlike crystals of silver metal and a blue solution of copper nitrate"
CONFIRMED | NaOH dissolving releases heat; NH4NO3 dissolving cools | Wikipedia "Sodium hydroxide" ("highly exothermic"); "Ammonium nitrate" ("dissolution ... highly endothermic", cold packs)
CONFIRMED | Iodine vapour is purple | Wikipedia "Iodine": "violet gas"; "Color of chemicals": I2 dark purple
CONFIRMED | Pale green Fe(OH)2 turns orange-brown in air (oxidised to Fe(III)) | Wikipedia "Iron(II) hydroxide": white with a greenish tinge from traces of O2; oxidation to Fe(III) shifts it towards reddish-brown
CONFIRMED | Mg + HCl and HCl + NaOH are exothermic; 25.0 mL each of 1.0 M gives about 6.8 °C | Wikipedia "Enthalpy of neutralization": −57.62 kJ/mol; 0.025 mol × 57.1–57.6 kJ ÷ (50 g × 4.18) = 6.8–6.9 °C (Python)
CONFIRMED | Ni(OH)2 precipitate is pale green; NiCl2 solution is green | Wikipedia "Nickel(II) hydroxide" (lime-green, made from Ni(II) salt + hydroxide); "Nickel(II) chloride" (hexahydrate green)
CONFIRMED | Mixing ethanol and water warms it slightly | Wikipedia "Ethanol": "Mixing ethanol and water is exothermic, with up to 777 J/mol"
CONFIRMED | Zn + CuSO4: blue fades, red-brown Cu forms, mixture warms; ZnSO4(aq) colourless | Wikipedia "Zinc sulfate" (all hydrates colourless); "Copper" (red-orange metal); "Single displacement reaction" (metal displacements are exothermic)
CONFIRMED | Toasting bread forms new brown compounds | Wikipedia "Toast (food)": browning is a Maillard reaction

## mb-ap-chem-4.2-study-guide
CONFIRMED | Mg(OH)2 precipitate is white | Wikipedia "Magnesium hydroxide": white solid, made by precipitation from a Mg salt with alkali
CONFIRMED | Calcium phosphate precipitate is white | Wikipedia "Calcium phosphate": white solid, practically insoluble
CONFIRMED | PbI2 is yellow; Pb(NO3)2 and KI solutions are colourless | Wikipedia "Lead(II) iodide": bright yellow, precipitated from lead nitrate + KI. The colourless solutions are implied there and are standard.
CONFIRMED | Fe(OH)3 precipitate is red-brown | Wikipedia "Qualitative inorganic analysis": "reddish-brown precipitate indicates Fe3+"
CONFIRMED | Cu in AgNO3 gives Ag metal + blue Cu(II) solution | Wikipedia "Silver nitrate" (as above)
CONFIRMED | Strong acids HCl, HBr, HI, HNO3, HClO4, H2SO4 match the CED | AP Chemistry CED EK 8.2.A.1 and 8.7 lists (local official copy): HCl, HBr, HI, HClO4, H2SO4, HNO3

## mb-ap-chem-u2-review
CONFIRMED | Pauling electronegativities Li 0.98 ... F 3.98 (all 12 values) | Wikipedia "Electronegativities of the elements (data page)": all 12 match
CONFIRMED | Cr radius 128 pm; Cr atomic weight 51.996 (used as 52.00) | Wikipedia "Chromium" infobox: empirical radius 128 pm, 51.996. Q5 recomputed (Python): 79.4 : 18.8 : 1.8 per 100 atoms; size differences 1.6% and 40.5%. Unchanged.
CONFIRMED | Stainless steel composition invented | Labelled on the page ("the alloy in Question 5 is invented")

## mb-ap-chem-u4-review
CONFIRMED | Ag2CO3 is insoluble | Wikipedia "Silver carbonate": poorly soluble (0.032 g/L at 25 °C), molar mass 275.75 (matches the page), made from AgNO3 + Na2CO3
CONFIRMED | 2KClO3 -> 2KCl + 3O2 with MnO2 catalyst; AgCl insoluble | Wikipedia "Potassium chlorate" (equation, MnO2 catalyst); "Silver chloride" (1.9 mg/L, white precipitate test for Cl−)
UNCHECKED | Silver chlorate is soluble (given data in Q4) | Wikipedia "Silver chlorate" says only "slightly soluble", with no number. PubChem was rate-limited (429). The handbook value is about 10–15 g/100 g water, enough for no precipitate in this test, so no change was made.
CONFIRMED | FeSO4·7H2O is sold for lawns; pure FeSO4·7H2O is 20.09% Fe | Wikipedia "Iron(II) sulfate": used "as a lawn conditioner", M = 278.02; 55.85/278.03 = 20.09% (Python)
CONFIRMED | Copper roofs turn green (new compounds); souring milk forms new substances | Wikipedia "Copper" (roofing forms a green patina of carbonate/sulfate compounds); "Soured milk" (lactose to lactic acid, coagulation)
CONFIRMED | Mg(OH)2 insoluble; Fe2O3 + 3CO -> 2Fe + 3CO2; Cu + dilute HNO3 gives NO | Wikipedia "Magnesium hydroxide" (0.00064 g/100 mL); "Blast furnace" (that equation); "Nitric acid" (3Cu + 8HNO3 -> 3Cu(NO3)2 + 2NO + 4H2O)

## mb-ap-chem-u6-diagnostic
CONFIRMED | 2Mg + O2 -> 2MgO, ΔH = −1203 kJ/mol | Wikipedia "Standard enthalpy of formation": MgO −601.6, ×2 = −1203.2
CONFIRMED | c(iron) = 0.449 J/g/°C | Wikipedia "Table of specific heat capacities": iron 0.449
CONFIRMED | Water ΔHfus 6.01; bond enthalpies C–H 413, C–C 347, C=C 614, C–O 358, O–H 467; ΔHf NH3(g) −46.1, H2O(l) −285.8, H2O(g) −241.8 | Wikipedia "Properties of water" (333.55 kJ/kg = 6.01 kJ/mol); LibreTexts "Bond Energies" Table 1 (all five match); Wikipedia "Standard enthalpy of formation" (−46.1, −285.8, −241.818)

## mb-ap-chem-u6-review
CONFIRMED | ΔHf ethanol(l) −277.6 kJ/mol | NIST (verifier, average −276 ± 2; Green 1960 −277.6); Wikipedia table −277.0. Acceptable as given data.
CONFIRMED | ΔHf propene +20.4; CO2 −393.5, H2O(g) −241.8, H2O(l) −285.8; bonds incl. O=O 495, C=O (CO2) 799 | NIST 20.41 (verifier); Wikipedia "Standard enthalpy of formation" (CO2 −393.509, H2O values); LibreTexts "Bond Energies" (O=O 495, C=O in CO2 799, others as above)
CONFIRMED | c(Al) 0.897, c(Cu) 0.385; water ΔHvap 40.7 kJ/mol at 100 °C | Wikipedia "Table of specific heat capacities" (0.897, 0.385); "Properties of water" (40.65 kJ/mol at the normal boiling point)

---

## Fact-check results: chem-b (5 Oct 2026)

No page edits were needed, so the validator was not run.

## mb-ap-chem-5.1-study-guide
- CONFIRMED | Warm hypochlorite disproportionates 3 ClO⁻ → ClO₃⁻ + 2 Cl⁻ | Wikipedia "Sodium hypochlorite" (3 NaOCl → 2 NaCl + NaClO3 at high temperature; keep below 40 °C to avoid chlorate)
- CONFIRMED | A 10 °C rise can roughly double the rate of many reactions | Wikipedia "Arrhenius equation" (factor about 2 to 3 per 10 °C for common Ea); Wikipedia "Q10"
- CONFIRMED | Light affects the rate of some (photochemical) reactions | Wikipedia "Photochemistry"; "Quantum yield" (H2 + Cl2 chain set off by blue light); "Sodium hypochlorite" (decomposition affected by light)
- CONFIRMED | Thiosulfate + acid gives a sulfur precipitate (mark-disappears method) | Wikipedia "Sodium thiosulfate" (acid gives S, SO2, H2O)

## mb-ap-chem-5.2-study-guide
- CONFIRMED | 2 NO + Cl₂ → 2 NOCl, rate = k[NO]²[Cl₂] | LibreTexts OpenStax Chemistry 2e 12.3 "Rate Laws" (Example 3). Note: the reaction is no longer on the 5.2 pages; Worked example 2 now uses the invented 2 X + Y₂ reaction, so nothing to change
- CONFIRMED | (CH₃)₃CBr + OH⁻ first order in (CH₃)₃CBr, zero order in OH⁻ | Wikipedia "SN1 reaction" (nucleophile concentration does not affect the rate)
- CONFIRMED | H₂O₂ + I⁻ (fixed [H⁺]) first order in each | Wikipedia "Iodine clock reaction" ("H2O2 and I− are both first order")
- CONFIRMED | 2 NO₂ → 2 NO + O₂ second order in NO₂ | LibreTexts Brown et al. 14.4 (rate = k[NO2]², second order)

## mb-ap-chem-5.3-study-guide
- CONFIRMED | Integrated rate laws and t1/2 = 0.693/k | Wikipedia "Rate equation" (integrated-law table; t1/2 = 0.693/k); LibreTexts OpenStax 12.4
- CONFIRMED | ln 2 = 0.693 | Python: ln 2 = 0.693147

## mb-ap-chem-5.5-study-guide
- CONFIRMED | Gas molecules at room conditions collide billions of times per second | Wikipedia "Mean free path" (air at ambient: 64-68 nm); with N2 mean speed 475 m/s at 298 K (Python), about 7 × 10⁹ collisions per second
- CONFIRMED | Cl + O₃ → ClO + O₂ is an elementary bimolecular step | Wikipedia "Ozone depletion" (single step of the chlorine cycle; Wikipedia does not use the word "elementary", but this is the standard gas-phase elementary step)
- CONFIRMED | OH⁻ + CH₃Br single step, attack opposite Br | Wikipedia "SN2 reaction" (concerted; nucleophile attacks 180° from leaving group)
- UNCHECKED (in part) | Cl + NOCl → Cl₂ + NO elementary; N bonded to both O and Cl | Structure CONFIRMED by Wikipedia "Nitrosyl chloride" (N central, N=O and N–Cl, bent). Could not find the elementary-step status of Cl + NOCl in an allowed source (it is the usual second step of NOCl photolysis); the question uses it only as a given premise
- CONFIRMED | Fraction of collisions with E ≥ Ea ≈ e^(−Ea/RT); collision frequency ∝ √T | Wikipedia "Collision theory". Python recheck: Ea = 60 kJ/mol gives 1 in 2.80 × 10¹⁰ (300 K), 1 in 6.23 × 10⁹ (320 K), × 4.50, frequency × 1.0328 (+3.3%); practice Q6: √(310/290) = 1.0339 (+3.4%); 3.8 × 1.034 ≈ 3.9. All match the pages

## mb-ap-chem-5.6-study-guide
- CONFIRMED | k = A e^(−Ea/RT); R = 8.314 J mol⁻¹ K⁻¹ | Wikipedia "Arrhenius equation"; "Gas constant" (8.31446 J K⁻¹ mol⁻¹)
- CONFIRMED | Transition state lasts about one molecular vibration and cannot be isolated | Wikipedia "Transition state" (femtosecond, vibration timescale; always decomposes)
- CONFIRMED | SN2 TS [HO···CH₃···Br]⁻ with O and Br opposite | Wikipedia "SN2 reaction" (pentacoordinate TS, nucleophile and leaving group on opposite sides)
- CONFIRMED | Unit 6 links ΔH to bond enthalpies | Wikipedia "AP Chemistry" (Unit 6 = Thermochemistry); the course's own Unit 6 has Topic 6.7 Bond Enthalpies (College Board course page fetch was not approved in time)

## mb-ap-chem-6.1-study-guide
- CONFIRMED | Burning fuels and neutralising an acid with a base are exothermic | Wikipedia "Exothermic reaction" (combustion, acid-base neutralization)
- CONFIRMED | Photosynthesis endothermic; CaCO₃ decomposition endothermic, needs continued heating | Wikipedia "Photosynthesis" (carbon fixation endothermic, stores light energy); "Calcium oxide" (calcination above 825 °C, endothermic; CaO recombines with CO2 on cooling)
- CONFIRMED | Rusting exothermic but slow | Wikipedia "Hand warmer" (exothermic oxidation of iron to rust; salt added to speed it up); "Exothermic reaction"
- CONFIRMED | Mg + dilute HCl exothermic, gives H₂ | Wikipedia "Magnesium" ("reacts exothermically with ... hydrochloric acid, producing magnesium chloride and hydrogen gas")
- CONFIRMED | Dissolving NaOH in water is exothermic | Wikipedia "Sodium hydroxide" ("highly exothermic")
- CONFIRMED | Near-ideal gases mix with almost no energy change | Wikipedia "Enthalpy of mixing" (zero for ideal mixtures, including ideal gases)
- CONFIRMED | Condensing steam on skin releases energy and can burn; evaporation cools | Wikipedia "Latent heat" (condensing vapour releases latent heat; steam more hazardous than boiling water); "Endothermic process" (evaporation)

## mb-ap-chem-6.2-study-guide
- CONFIRMED | ΔHfus ice at 0 °C = +6.01 kJ/mol | Wikipedia "Enthalpy of fusion" (333.55 J/g × 18.02 = 6.01 kJ/mol)
- CONFIRMED | Gas > liquid > solid in energy for one substance | Follows from positive ΔHfus and ΔHvap (Wikipedia "Enthalpy of fusion", "Enthalpy of vaporization")
- CONFIRMED | Temperature of a pure substance constant during a phase change | Wikipedia "Phase transition" ("temperature of the system will stay constant as heat is added")
- CONFIRMED | Catalyst lowers Ea but does not change ΔH | Wikipedia "Catalysis" (lower-Ea pathway; does not change energy difference between reactants and products)
- CONFIRMED | Other reactions and step values are invented | Invented, labelled as such; nothing to check

## mb-ap-chem-6.5-study-guide
- CONFIRMED | Water ΔHfus = 6.01 kJ/mol at 0 °C (333.55 J/g) | Wikipedia "Enthalpy of fusion"
- CONFIRMED | Water ΔHvap = 40.7 kJ/mol at 100 °C | Wikipedia "Enthalpy of vaporization" (40.66 kJ/mol)
- CONFIRMED | Ethanol ΔHvap = 38.6 kJ/mol at bp 78 °C | Wikipedia "Enthalpy of vaporization" (38.6); NIST WebBook ethanol (38.56 kJ/mol at bp, Majer and Svoboda; Tboil 351.5 K = 78.4 °C)
- CONFIRMED | c(ice) = 2.09 J g⁻¹ °C⁻¹ used as given data | Wikipedia "Ice" formula gives 2.12 (0 °C) to 2.04 (−10 °C); 2.09 is a fair average over that range

## mb-ap-chem-6.6-study-guide
- CONFIRMED | CH₄ combustion to H₂O(l), ΔH = −890 kJ/mol | Wikipedia "Standard enthalpy of formation" (Python: −890.2); "Heat of combustion" HHV 890.7
- CONFIRMED | N₂ + 3H₂ → 2NH₃, ΔH = −92 kJ/mol | Wikipedia "Standard enthalpy of formation" (NH3 −46.1; ×2 = −92.2)
- CONFIRMED | H₂ + Cl₂ → 2HCl(g), ΔH = −185 kJ/mol | Wikipedia "Standard enthalpy of formation" (HCl −92.30; ×2 = −184.6)
- CONFIRMED | C₃H₈ combustion to H₂O(l), ΔH = −2219 kJ/mol | Wikipedia "Standard enthalpy of formation" (propane −104.6; Python −2219.1); "Heat of combustion" HHV 2219.2

## mb-ap-chem-7.5-study-guide
- CONFIRMED | H₂/O₂ mixture shows no noticeable change at room temperature; a spark makes it react explosively | Wikipedia "Oxyhydrogen" (autoignition about 570 °C; spark ignition at tiny energy; explosive)

## mb-ap-chem-9.3-study-guide
- CONFIRMED | ΔG°f glucose(s) = −910.56 kJ/mol | LibreTexts Reference Table T1 gives −910.4 (T2: −910). Difference 0.16 kJ; WE1 would give −228.0 instead of −227.8 kJ/mol. Within normal table-to-table spread, not misleading; left unchanged

## mb-ap-chem-9.4-study-guide
- CONFIRMED | ΔG°f H₂O₂(l) = −120.35 kJ/mol | LibreTexts Table T1 (−120.4, ΔfH −187.8, S 109.6); Python from ΔfH −187.78 and S 109.6 gives −120.33. WE2 −233.58 and quick check −233.6 / −116.8 recomputed and correct
- CONFIRMED | ΔG°f NO(g) = +86.60 kJ/mol | Wikipedia "Nitric oxide" (ΔfH +90.29, S 210.76); Python gives +86.60. LibreTexts T1 lists 87.6 (with ΔfH 91.3), so both appear in tables; 86.60 matches the NIST/Wikipedia data. Q7 +173.2 correct

---

## Fact-check results: phys-econ (5 Oct 2026)

No page edits were needed.

## mb-ap-phys2-9.1-study-guide
CONFIRMED | k_B = 1.38 × 10⁻²³ J/K | Wikipedia "Boltzmann constant": exactly 1.380649 × 10⁻²³ J/K
CONFIRMED | He-4 atom mass 6.65 × 10⁻²⁷ kg | Wikipedia "Helium-4" (4.002603254 Da) × Wikipedia "Dalton (unit)" (1.66053906892 × 10⁻²⁷ kg) = 6.6465 × 10⁻²⁷ kg
CONFIRMED | Argon atom mass 6.63 × 10⁻²⁶ kg | Wikipedia "Argon": standard atomic weight 39.95 (abridged; interval 39.792–39.963) × 1.66054 × 10⁻²⁷ = 6.634 × 10⁻²⁶ kg (pages do not print 39.948)

## mb-ap-phys2-9.5-study-guide
CONFIRMED | c water ≈ 4180 J/(kg·K) | Wikipedia "Table of specific heat capacities": 4.181 J/(g·K) at 25 °C
CONFIRMED | c aluminium ≈ 900 | same table: 0.897 J/(g·K)
CONFIRMED | c copper ≈ 385 | same table: 0.385 J/(g·K)
CONFIRMED | c lead ≈ 130 | same table: 0.129 J/(g·K)
CONFIRMED | per mole (27, 64, 207 g) ≈ 24, 24, 27 J/K, "about", background | same table: molar 24.2, 24.47, 26.4 J/(mol·K); Dulong–Petit 3R ≈ 25; page values follow from the page's own c values
CONFIRMED | k copper ≈ 400 W/(m·K) | Wikipedia "List of thermal conductivities": 401
CONFIRMED | k aluminium ≈ 240 | same list: 237
CONFIRMED | k glass about 1 | same list: window/soda-lime 0.8–1.4
CONFIRMED | k water 0.6 | same list: 0.5918
CONFIRMED | k wood 0.1 to 0.2 | same list: 0.09–0.4 depending on species/moisture; 0.1–0.2 is typical dry wood, stated as approximate
CONFIRMED | k plastic foam 0.03 | same list: polyurethane foam 0.03, EPS 0.033–0.046
CONFIRMED | k still air 0.025 | same list: 0.0226 at 293 K (≈0.026 at 300 K)
CONFIRMED | steel c per kg lower than wood's (practice Q4 D) | Table of specific heat capacities: steel 0.466, wood 1.7 J/(g·K)
CONFIRMED | window: still-air layers take most of the ΔT (WE3, qualitative) | Wikipedia "R-value (insulation)": surface air films R 0.03–0.16 m²·K/W; 4 mm glass at k 0.8 has R = 0.005, so films carry ~95%+ of the resistance
CONFIRMED | metals conduct by free electrons, non-metal solids by lattice vibrations | Wikipedia "Thermal conductivity and resistivity": "In metals, thermal conductivity is typically dominated by free electrons"; dielectrics "by way of elastic vibrations of the lattice (phonons)"

## mb-ap-physcem-8.1-study-guide
CONFIRMED | e = 1.60 × 10⁻¹⁹ C | Wikipedia "List of physical constants": 1.602176634 × 10⁻¹⁹ C
CONFIRMED | 1/(4πε₀) = 8.99 × 10⁹ | computed from ε₀ (same list): 8.98755 × 10⁹
CONFIRMED | ε₀ = 8.85 × 10⁻¹² | same list: 8.8541878188 × 10⁻¹²
CONFIRMED | G = 6.67 × 10⁻¹¹ | same list: 6.67430 × 10⁻¹¹
CONFIRMED | m_p = 1.67 × 10⁻²⁷ kg | same list: 1.67262192595 × 10⁻²⁷
CONFIRMED | m_e = 9.11 × 10⁻³¹ kg | same list: 9.1093837139 × 10⁻³¹
CONFIRMED | F_e/F_g p–e ≈ 2.3 × 10³⁹, p–p ≈ 1.2 × 10³⁶ | Python: CODATA values give 2.269 × 10³⁹ and 1.236 × 10³⁶; rounded page values give 2.268 × 10³⁹ and 1.237 × 10³⁶ (practice Q3 "1.24 × 10³⁶" consistent)

## mb-ap-phys1-2.3-study-guide
CONFIRMED | Earth's mass about 6 × 10²⁴ kg | Wikipedia "Earth": (5.97217 ± 0.00028) × 10²⁴ kg

## mb-ap-phys1-2.9-study-guide
CONFIRMED | G = 6.67 × 10⁻¹¹, value on course equation table | CODATA 6.67430 × 10⁻¹¹ (Wikipedia list); 2025 AP Physics 1 equation sheet (College Board sheet, copy at mrbigler.com; apcentral PDF text did not extract) lists G = 6.67 × 10⁻¹¹

## mb-ap-phys1-4.3-study-guide
CONFIRMED | Earth's mass about 5.97 × 10²⁴ kg | Wikipedia "Earth"

## mb-ap-phys1-7.2-study-guide
CONFIRMED | spring oscillator measures mass in orbit (page: "That is how mass can be measured in orbit") | NASA GSFC "Stargazers" Skylab mass page (pwg.gsfc.nasa.gov/stargaze/ILmass.htm): mass measured "by tying the mass to a spring ... and measuring the period of oscillation". Note: ISS SLAMMD uses spring force + measured acceleration, not period; page wording does not claim ISS, so no change
CONFIRMED | stopwatch reaction time roughly 0.2 s | Wikipedia "Mental chronometry": visual simple RT ≈ 190 ms; "usually on the order of 200 ms"
CONFIRMED | T_s = 2π√(m/k) and T_p = 2π√(ℓ/g) on course equation table | 2025 AP Physics 1 equation sheet (copy at mrbigler.com) shows both; local CED scoring guideline uses T = 2π√(m/k)

## mb-ap-phys2-13.4-study-guide
UNCHECKED | |M| = |hᵢ/hₒ| = |sᵢ/sₒ| official form | apcentral AP Physics 2 equation-sheet PDF fetch refused (permission timed out). Local CED text (13.2.A.8, 13.4.A.6) gives M = hᵢ/hₒ = sᵢ/sₒ (extract loses any bars); pages consistent with prior PDF reading; no change

## mb-ap-phys2-14.1-study-guide
CONFIRMED | sound in dry air at 20 °C about 343 m/s; c "about 875 000 times" | Wikipedia "Speed of sound": about 343 m/s (343.21); 3.00 × 10⁸ / 343 = 874 600

## mb-ap-phys2-14.2-study-guide
CONFIRMED | octave = 2 : 1 frequency ratio | Wikipedia "Octave": "The ratio of frequencies of two notes an octave apart is therefore 2:1"

## mb-ap-physcm-2.10-study-guide
CONFIRMED | G = 6.67 × 10⁻¹¹ | Wikipedia "List of physical constants"
CONFIRMED | Earth's mass 5.97 × 10²⁴ kg | Wikipedia "Earth"
CONFIRMED | Earth's mean radius 6.37 × 10⁶ m | Wikipedia "Earth": 6371.0 km
CONFIRMED | fast objects in air: drag closer to v²; linear for slow/small or viscous | Wikipedia "Drag (physics)": "proportional to the velocity squared for high-speed flow"; at low Re "linearly proportional to the speed"

## mb-ap-physcm-2.6-study-guide
CONFIRMED | G = 6.67 × 10⁻¹¹ | Wikipedia "List of physical constants"
CONFIRMED | Earth's mass 5.97 × 10²⁴ kg | Wikipedia "Earth"
CONFIRMED | Earth's mean radius 6.37 × 10⁶ m | Wikipedia "Earth"

## mb-ap-physcm-6.6-study-guide
CONFIRMED | G = 6.67 × 10⁻¹¹, value on course table | CODATA value (Wikipedia list); AP Physics 1 sheet shows 6.67 × 10⁻¹¹ (C: Mechanics sheet itself not fetched)

## mb-ap-macro-1.3-study-guide
CONFIRMED | comparative advantage "usually credited to ... David Ricardo (1817)" | Wikipedia "Comparative advantage": Ricardo developed the classical theory in 1817, On the Principles of Political Economy and Taxation (Torrens 1815 / anonymous 1814 earlier; "usually credited" is fair)

## mb-ap-micro-1.2-study-guide
CONFIRMED | Soviet Union ran most of its economy through central plans until it broke up in 1991 | Wikipedia "Soviet Union": command economy directed by Gosplan five-year plans; dissolved 26 December 1991
CONFIRMED | "invisible hand" associated with Adam Smith | Wikipedia "Invisible hand": metaphor inspired by Adam Smith (Theory of Moral Sentiments 1759, Wealth of Nations 1776)

## mb-ap-stats-5.4-study-guide
CONFIRMED | many graphing calculators store last regression residuals in a list, often RESID | Texas Instruments KB Solution 34497 (education.ti.com): residuals "are automatically stored within a list called RESID"
