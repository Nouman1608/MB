# Facts check results: group 7405a (AQA A-level Chemistry 7405, 45 pages)

All 45 pages in /home/claude/gaps/facts/7405a.txt were read in full. Claims that the specification itself states
(definitions, V2O5 in the Contact process, Fe in the Haber process, Mg(OH)2 sparingly soluble, BaSO4 insoluble,
uses of Mg(OH)2/Ca(OH)2/BaSO4/CaO/CaCO3, Ag+ linear complex, cisplatin cis, standard conditions, suggested
practicals) and values that questions supply as given data were skipped. All worked-example and answer
arithmetic was recomputed in Python. No arithmetic errors were found.

Sources (key used in the table):

- [WSEP] https://en.wikipedia.org/wiki/Standard_electrode_potential_(data_page)
- [CGH] https://chemguide.co.uk/inorganic/group7/halideions.html
- [CGT] https://chemguide.co.uk/inorganic/group7/testing.html
- [COG] https://cognito.org/courses/alevel/chemistry/aqa/notes/UUdwSkp6Zlg/10.1-the-halogens
- [CR3] https://chemrevise.org/wp-content/uploads/2026/02/2.4-revision-guide-period-3-aqa.pdf
- [CGO] https://chemguide.co.uk/inorganic/period3/oxidesphys.html
- [WB] https://en.wikibooks.org/wiki/A-level_Chemistry/AQA/Module_5/Periodicity
- [CS3] https://chemistrystudent.com/aqa-a-level/2.4-period-3-elements-and-oxides/properties-of-period-3-elements-and-their-oxides.html
- [CSV] https://chemistrystudent.com/aqa-a-level/2.5-transition-metals/variable-oxidation-states.html
- [KH] https://pmt.physicsandmathstutor.com/download/Chemistry/A-level/Notes/CAIE/A2-Inorganic-Chemistry/Knockhardy/28. Reactions of Transition Metal Ions - Cobalt, Copper, Iron, Manganese, Chromium, Silver and Vanadium.pdf
- [PMTC] https://pmt.physicsandmathstutor.com/download/Chemistry/A-level/Notes/OCR-Old/Unit-5/Set-A/Complex%20Ions.pdf
- [SMP] https://studymind.co.uk/notes/precipitation-reactions-of-metal-ions-in-solution/?catid=22
- [SMK] https://studymind.co.uk/notes/carrying-titrations-with-potassium-permanganate/
- [SMG] https://studymind.co.uk/notes/group-2-the-alkaline-earth-metals-2/
- [SME] https://www.savemyexams.com/a-level/chemistry/aqa/17/revision-notes/2-inorganic-chemistry/2-2-group-2-the-alkaline-earth-metals/2-2-3-reactions-of-group-2/
- [WAE] https://en.wikipedia.org/wiki/Alkaline_earth_metal
- [CAOH] https://wikipedia.jakami.de/content/wikipedia_en_chemistry_nopic/A/Ca(OH)2
- [PMT2] https://pmt.physicsandmathstutor.com/download/Chemistry/A-level/Notes/CAIE/AS-Inorganic-Chemistry/Detailed/10.%20Group%202.pdf
- [CC] https://www.creative-chemistry.org.uk/?p=1832

## Claims checked

| Claim | Page(s) | Verdict | Source |
|---|---|---|---|
| E⦵ Mg²⁺/Mg −2.37 V | electrode guide, notes; practice Q4 (given) | Confirmed (−2.372) | [WSEP] |
| E⦵ Zn²⁺/Zn −0.76 V | electrode guide, notes, practice; redox | Confirmed (−0.7618) | [WSEP] |
| E⦵ Fe²⁺/Fe −0.44 V | electrode guide, notes | Confirmed | [WSEP] |
| E⦵ Pb²⁺/Pb −0.13 V | electrode guide | Confirmed (−0.126) | [WSEP] |
| E⦵ Ni²⁺/Ni −0.25 V | electrode notes; practice Q4 (given) | Confirmed (−0.257) | [WSEP] |
| E⦵ Cu²⁺/Cu +0.34 V | electrode guide, notes, practice | Confirmed (+0.337) | [WSEP] |
| E⦵ I₂/I⁻ +0.54 V | electrode guide, notes; transition notes | Confirmed | [WSEP] |
| E⦵ Fe³⁺/Fe²⁺ +0.77 V | electrode guide, notes; transition notes | Confirmed (+0.771) | [WSEP] |
| E⦵ Ag⁺/Ag +0.80 V | electrode notes, practice | Confirmed (+0.7996) | [WSEP] |
| E⦵ Br₂/Br⁻ +1.07 V | electrode guide, notes, practice | Confirmed (1.066 liquid, 1.087 aq) | [WSEP] |
| E⦵ Cl₂/Cl⁻ +1.36 V | electrode notes, practice | Confirmed | [WSEP] |
| E⦵ MnO₄⁻/Mn²⁺ +1.51 V | electrode guide | Confirmed | [WSEP] |
| E⦵ Cr₂O₇²⁻/Cr³⁺ +1.33 V | electrode practice Q6 (given data) | Confirmed (table value 1.33) | [WSEP] |
| E⦵ Sn⁴⁺/Sn²⁺ +0.15 V | electrode practice Q5 (given) | Confirmed (+0.151) | [WSEP] |
| E⦵ O₂/OH⁻ +0.40 V and H₂O/H₂ −0.83 V; fuel cell EMF 1.23 V | electrode guide, notes | Confirmed (+0.401, −0.8277) | [WSEP] |
| E⦵ PbSO₄/Pb −0.36 V | electrode practice Q11 (given) | Confirmed (−0.3588) | [WSEP] |
| E⦵ S₂O₈²⁻/SO₄²⁻ +2.01 V | transition notes | Confirmed | [WSEP] |
| Br₂ standard state is liquid | energetics guide, notes, practice; thermodynamics | Confirmed (data page lists Br₂(l)) | [WSEP] |
| Halogen boiling points F₂ −188, Cl₂ −34, Br₂ 59, I₂ 184 °C | halogens guide | Confirmed (Cl₂ −34 to −35) | [COG] |
| Halogen colours/states: F₂ pale yellow gas, Cl₂ pale green gas, Br₂ red-brown liquid, I₂ grey-black solid | halogens guide, notes | Confirmed | [COG] |
| AgCl white, AgBr cream, AgI yellow; F⁻ gives no precipitate | halogens guide, notes, practice | Confirmed | [CGT] |
| AgCl dissolves in dilute NH₃, AgBr only in concentrated, AgI in neither | halogens guide, notes, practice | Confirmed | [CGT] |
| Nitric acid removes interfering ions before AgNO₃ | halogens guide, notes, practice | Confirmed | [CGT] |
| NaF/NaCl + conc H₂SO₄: steamy fumes only, no redox | halogens guide, notes, practice | Confirmed | [CGH] |
| NaBr + conc H₂SO₄: steamy fumes, brown Br₂ vapour, SO₂ | halogens guide, notes, practice | Confirmed | [CGH] |
| NaI + conc H₂SO₄: I₂ as dark solid / purple vapour, H₂S (bad eggs), S | halogens guide, notes, practice | Confirmed | [CGH] |
| Group 2 first IE Mg 738, Ca 590, Sr 550, Ba 503 kJ mol⁻¹ (approx.) | Group 2 guide | Confirmed (737.7, 589.8, 549.5, 502.9) | [WAE] |
| Group 2 melting points Mg 650, Ca 842, Sr 777, Ba 727 °C | Group 2 guide | Confirmed | [WAE] |
| Mg hexagonal close-packed, Ca face-centred cubic; Mg melting point out of line because of different structure | Group 2 guide, notes | Confirmed at A-level level (structures confirmed; [CC] notes the structural explanation is incomplete, but the pages only say the simple argument does not apply) | [SMG], [CC] |
| Mg burns in steam with bright white flame/light giving white MgO | Group 2 guide, notes, practice; Period 3 guide, notes, practice | Confirmed | [SME], [CR3] |
| Mg with cold water very slow, weakly alkaline (pH 9–10) | Period 3 guide, notes; Group 2 | Confirmed | [SME] |
| Ca, Sr, Ba react with cold water (fizzing), reactivity increases down group | Group 2 guide, notes, practice | Confirmed | [SMG], [PMT2] |
| Mg(OH)₂ used as antacid | Group 2 guide, notes, practice | Confirmed | [SMG] |
| Ca(OH)₂ called slaked lime; used on acidic soil | Group 2 guide | Confirmed | [CAOH], [SMG] |
| BaSO₄ opaque to X-rays; barium meal | Group 2 guide, notes, practice | Confirmed | [WAE], [SMG] |
| Hydroxide solubility increases and sulfate solubility decreases down Group 2 | Group 2 pages | Confirmed | [PMT2] |
| Period 3 oxide melting-point order MgO > Al₂O₃ > SiO₂ > Na₂O > P₄O₁₀ > SO₃; MgO highest | Period 3 guide, notes | Confirmed (2852, 2072, 1703, 1275, 300 sublimes, low) | [WB], [CGO] |
| Approximate pH: Na₂O 13–14, MgO 9–10, Al₂O₃ and SiO₂ 7, P₄O₁₀ 0–1, SO₂ 2–3, SO₃ 0–1 | Period 3 guide, notes, practice | Confirmed as approximate (sources give 13–14, 9–10, 0–2, 2–3, 0–1) | [CS3], [CR3] |
| Burning observations: Na yellow flame; Mg, Al, P bright white flame/white smoke; S blue flame, choking gas | Period 3 guide, notes | Confirmed | [CR3] |
| SiO₂ reacts only with (very) concentrated NaOH → Na₂SiO₃ | Period 3 guide, notes, practice | Confirmed | [CR3] |
| P₄O₁₀ and SO₃ simple molecular, low melting points; electrons 140 vs 40 | Period 3 guide | Confirmed (arithmetic) | [CGO] |
| Vanadium colours: VO₂⁺ yellow, VO²⁺ blue, V³⁺ green, V²⁺ violet | transition guide, notes, practice | Confirmed (sources: purple/lavender for V²⁺) | [CSV], [KH] |
| [Co(H₂O)₆]²⁺ pink, [CoCl₄]²⁻ blue | transition guide | Confirmed | [PMTC], [KH] |
| [Cu(H₂O)₆]²⁺ blue, [CuCl₄]²⁻ yellow, [Cu(NH₃)₄(H₂O)₂]²⁺ deep blue | transition guide; equilibria guide, notes; aqueous ions | Confirmed | [PMTC], [KH] |
| Co(II) in excess ammonia oxidised by air to Co(III) | transition guide | Confirmed | [PMTC], [KH] |
| HCl not used in MnO₄⁻ titrations (Cl⁻ oxidised to Cl₂); dilute H₂SO₄ used | transition guide, notes, practice | Confirmed | [SMK], [KH] |
| MnO₄⁻ purple, Mn²⁺ effectively colourless, self-indicating | transition guide, notes, practice | Confirmed | [SMK] |
| Aqua ion colours: Fe²⁺ pale green, Cu²⁺ blue, Fe³⁺ yellow(-brown) as usually seen, Al³⁺ colourless | aqueous ions guide, notes, practice | Confirmed | [SMP], [KH] |
| Precipitates: Fe(OH)₂ green, darkens in air; Cu(OH)₂ (pale) blue; Fe(OH)₃ brown; Al(OH)₃ white, dissolves in excess NaOH not NH₃; Cu ppt dissolves in excess NH₃ to deep blue | aqueous ions guide, notes, practice | Confirmed | [SMP], [KH] |
| Carbonate: Fe²⁺/Cu²⁺ give MCO₃ precipitates (green / blue-green), no gas; Fe³⁺/Al³⁺ give hydroxide + CO₂ | aqueous ions guide, notes, practice | Confirmed | [SMP], [KH] |
| Kw = 1.00 × 10⁻¹⁴ mol² dm⁻⁶ at 298 K; Kw increases with temperature | acids guide, notes, practice | Not checked online (search budget exhausted); standard value, left unchanged | none |
| Ethanoic acid Ka 1.74 × 10⁻⁵ mol dm⁻³, pKa 4.76 | acids guide | Not checked online (search budget exhausted); standard value, left unchanged | none |
| Methyl orange 3.1–4.4, phenolphthalein 8.3–10.0 | acids guide, notes (practice Q8 gives ranges as data) | Not checked online (search budget exhausted); standard values, left unchanged | none |
| Blood pH 7.35–7.45, carbonic acid–hydrogencarbonate buffer | acids guide, notes | Not checked online (search budget exhausted); left unchanged | none |
| R = 8.31 J K⁻¹ mol⁻¹ | rate equations pages; Group 2 practice | Not checked online; specification says R is given; standard value | none |
| Minor descriptive items: SO₂ toxic/irritant; salt bridge of KNO₃-soaked paper; NH₄NO₃ dissolves endothermically; Zn + CuSO₄ brown solid, blue fades; Cu + dilute HNO₃ → NO; NaF in water to reduce tooth decay; starch blue-black in iodine clock; green intermediate when conc HCl is added to Cu²⁺(aq) | various | Not checked online (search budget exhausted); standard textbook facts, left unchanged | none |

## Edits

None. Every claim checked online was confirmed, and no arithmetic errors were found, so no page was changed
(check_new.py not needed). The items marked "Not checked online" could not be searched because the shared
WebSearch budget for the turn ran out; they are standard textbook values and were left as written.
