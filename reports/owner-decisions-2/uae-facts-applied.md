# UAE facts applied (owner approved 26 Nov 2026)

## Code changes
- `src/data/markets.ts`: new optional `Market` fields `localFacts` (heading, groups of paragraphs, sources, readOn) and `notOfferedExtra`; filled for the `uae` entry only.
- `src/components/sections/MarketPage.astro`: renders `notOfferedExtra` after the not-taught paragraph, and a new "Schools in the UAE: the facts we can source" section (before "What we do not teach") with a "Sources, read 26 November 2026" line linking the three URLs. Other markets are unchanged (fields absent, nothing renders).

## Facts added
- F1 (387,441 students, 227 schools, 2024-25): "Dubai private schools, 2024-25 (KHDA data)", stated as KHDA data via the Dubai Media Office, 9 January 2025.
- F2 (UK 37%, Indian 26%, US 14%, IB 7%, UK/IB 4%): same group; says these are shares of students, not schools, and the UK share is not split by board.
- F3 (17 curricula): same group.
- F4 (six new schools, five UK, one French, August 2025): own group; says the 233-school total at that date is a separate count from the 227 of 2024-25 and they are not combined.
- F5 (ADEK requires MoE subjects in every private school, exemptions not authorised): "What we do not teach" section, with: Marlbridge does not teach the MoE subjects, so families need them from school; Marlbridge classes are extra to them and do not replace them.
- F6 (MoE subjects defined): same paragraph.
- F7 (affiliation, Cambridge Education as example, no board share): "Abu Dhabi: external exam bodies" group.
- F8 (policy effective AY 2024/25, compliance 2025/26): second not-taught paragraph.

Not in the FAQ: the extra sentences are not added to `notOffered`, so the FAQ answer and JSON-LD are unchanged.

## Skipped
None. Not available from any readable source (not claimed): KHDA 2025-26 figures, Cambridge/Edexcel/AQA split, term dates, KHDA/ADEK ratings.

## Validators
validate-academic-content: OK. validate-commercial-claims: OK. validate-pricing-consistency: ran, no errors (silent output). Temporary node_modules junction removed. No markets-specific validator exists in package.json. No build run.
