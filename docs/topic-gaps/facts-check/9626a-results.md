# Facts check results: group 9626a (D-399)

Pages: 27 pages for 9626 topics 4 (algorithms and flowcharts), 5 (eSecurity), 6 (digital divide), 7 (expert systems), 8 (spreadsheets), 9 (modelling), 10 (database and file concepts), 11 (video and audio editing) and 12 (IT in society). Each topic has a study guide, revision notes and practice questions.

Reference text: /home/claude/syllabi/9626.txt. These items come straight from it, so they were not checked online: paper and section coverage, Paper 4 including sections 8-10, the ban on calculators in Paper 1, no marks for a wrong file format, version 3 published July 2025, the digital divide technology list, the six data mining stage names, the decentralised examples (Bitcoin, Litecoin), the MAXIF/MINIF listing, the export formats (MP4/AVI/MOV/WMV and MP3/MP4a/WAV/AAC), and the rule to remove DC offset when normalising. All invented or fictional data was skipped.

Note on the caller's flagged list: the flagged claims are not on any 9626a page. They are on the 9626b pages: MAC/IPv4/IPv6 bit lengths, OSI/TCP-IP, InARP, L2TP, BGP, WEP, 802.11, 3G/4G/5G, transponders, frequency reuse, PERT, prototyping and maintenance types, live test data, and system flowchart/DFD conventions. Those pages are a-level-cambridge-ict-communications-technology*, -project-management* and -system-life-cycle*. Because only files in this group's list may be edited, they were not checked here.

## Claims checked

| # | Claim | Page(s) | Verdict | Source |
|---|---|---|---|---|
| 1 | Flowchart shapes: terminator is a rounded rectangle, input/output a parallelogram, process a rectangle, decision a diamond, subroutine a rectangle with double vertical side lines, connector a small circle, flowline an arrow | algorithms-and-flowcharts (all 3) | Confirmed | https://static2.creately.com/guides/flowchart-symbols/ |
| 2 | Personal data relates to a living person who can be identified from it, alone or combined with other information | esecurity (all 3) | Confirmed | https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/personal-information-what-is-it/what-is-personal-information-a-guide/ |
| 3 | A geotag stores the GPS coordinates of where a photo was taken in its metadata, which can reveal a home location | esecurity (all 3) | Confirmed | https://imagen-ai.com/tools/geotag-remover/ |
| 4 | A duty of confidence arises when information is shared on the understanding that it stays private (doctor and patient, for example) | esecurity, esecurity-revision-notes | Confirmed | https://en.wikipedia.org/wiki/Confidentiality |
| 5 | Pharming uses malicious code or a tampered DNS server to redirect the user even when the correct address is typed | esecurity (all 3) | Confirmed | https://www.techtarget.com/cybersecurity/definition/What-is-pharming?amp=1 |
| 6 | Pharming prevention: anti-malware, checking the address bar and certificate, securing the router/DNS | esecurity, esecurity-revision-notes | Confirmed | https://www.pandasecurity.com/en/mediacenter/what-is-pharming/?amp=1 |
| 7 | A hardware firewall is often built into the router, protects every device, uses no host resources, and does not see internal traffic | esecurity (all 3) | Confirmed | https://nordlayer.com/learn/firewall/hardware/ |
| 8 | A trojan is disguised as legitimate software, often opens a back door, and does not self-replicate | esecurity (all 3) | Confirmed | https://arcticwolf.com/resources/glossary/trojan-horse/ |
| 9 | A worm is a standalone program that replicates and spreads without a host program and uses up bandwidth | esecurity (all 3) | Confirmed | https://en.wikipedia.org/wiki/Computer_worm |
| 10 | A rootkit gives root/administrator-level access and hides itself | esecurity (all 3) | Confirmed | https://csrc.nist.gov/glossary/term/rootkit |
| 11 | Paying a ransom does not guarantee files come back | esecurity (all 3) | Confirmed | https://www.ncsc.gov.uk/guidance/organisations-considering-payment-in-ransomware-incidents |
| 12 | Signature-based detection cannot catch new malware; heuristic detection can, but gives false positives | esecurity (all 3) | Confirmed | https://www.kaspersky.com/resource-center/definitions/heuristic-analysis |
| 13 | Digital literacy means the skills to find, use/evaluate and create information with digital technology | the-digital-divide (all 3) | Confirmed (consistent with the ALA definition) | https://alair.ala.org/handle/11213/9236 |
| 14 | Forward chaining is data driven and backward chaining is goal driven; knowledge comes from human experts; the explanation system says why and how; the knowledge base holds facts plus IF...THEN rules | expert-systems (all 3) | Confirmed | https://web.itu.edu.tr/~sonmez/lisans/ai/ExpertSystems.pdf |
| 15 | Excel: every cell starts locked, and locking only takes effect once the sheet is protected | spreadsheets, -revision-notes, -practice Q4 | Confirmed | https://support.microsoft.com/en-US/Excel/get-started/lock-or-unlock-specific-areas-of-a-protected-worksheet |
| 16 | LibreOffice Calc: every cell starts with Protected set, and it only takes effect once the sheet is protected | spreadsheets, -revision-notes | Confirmed | https://help.libreoffice.org/6.4/bs/text/scalc/guide/cell_protect.html |
| 17 | MAXA treats text as 0 (MAXA of -5, -2, "n/a" = 0) | spreadsheets, -revision-notes | Confirmed | https://support.microsoft.com/en-au/office/maxa-function-05b9cde0-761f-48cf-a23f-d82cd5f8984d |
| 18 | SUBTOTAL code 9 = SUM and code 1 = AVERAGE; rows hidden by a filter are left out | spreadsheets, -revision-notes | Confirmed | https://support.microsoft.com/en-gb/office/subtotal-function-7b027003-f060-4ade-9040-e478765b9939 |
| 19 | LOOKUP needs its search values sorted in ascending order | spreadsheets | Confirmed | https://support.microsoft.com/en-us/excel/lookup-function |
| 20 | XLOOKUP matches exactly by default, has its own not-found text, and can return from a column to the left | spreadsheets, -revision-notes | Confirmed | https://support.microsoft.com/excel/functions/xlookup-function |
| 21 | WEEKDAY by default numbers Sunday as 1 (Thursday = 5, Friday = 6, Saturday = 7) | spreadsheets, -revision-notes, -practice Q10 | Confirmed | https://support.microsoft.com/en-US/Excel/weekday-function |
| 22 | 14/03/2024 was a Thursday, 25/12/2026 is a Friday, 06/06/2026 is a Saturday | spreadsheets, -revision-notes, -practice | Confirmed (Python calendar check) | (computed) |
| 23 | INT rounds down, so INT(-2.3) = -3 | spreadsheets, -revision-notes | Confirmed | https://support.microsoft.com/en-gb/office/int-function-ec27b203-d582-4882-9615-cb056a8f0dc6 |
| 24 | AVI is Microsoft's long-established container | video-and-audio-editing, -revision-notes | Confirmed | https://en.wikipedia.org/wiki/Audio_Video_Interleave |
| 25 | MOV is Apple's QuickTime format: high quality, large files, suits editing, best on Apple software | video-and-audio-editing, -revision-notes | Confirmed | https://cloudinary.com/guides/video-formats/quicktime-file-format-mov-apples-mpeg-4-predecessor ; https://adobe.com/creativecloud/file-types/video/container/mov.html |
| 26 | WMV is a Microsoft format with small files and weaker support outside Windows | video-and-audio-editing, -revision-notes | Confirmed | https://cloudinary.com/guides/video-formats/windows-media-video-wmv-format-what-you-should-know |
| 27 | MP4 is a container that can hold several streams (audio, video, subtitles) | video-and-audio-editing (all 3) | Confirmed | https://wiki.videolan.org/MP4 |
| 28 | MP4a/.m4a is MPEG-4 audio, usually AAC | video-and-audio-editing (all 3) | Confirmed | https://fileinfo.com/extension/m4a |
| 29 | WAV is usually uncompressed, full quality, and has very large files | video-and-audio-editing (all 3) | Confirmed | https://cloudinary.com/guides/video-formats/what-is-the-m4a-format-understanding-the-difference-between-m4a-mp3-and-wav |
| 30 | AAC generally gives better quality than MP3 at the same bit rate; MP3 is more universal | video-and-audio-editing, -revision-notes | Confirmed | https://cloudinary.com/guides/front-end-development/aac-vs-mp3-the-future-of-audio-files |
| 31 | Captions also describe non-speech sounds for deaf and hard-of-hearing viewers; subtitles carry the spoken words | video-and-audio-editing (all 3) | Confirmed | https://help.sbs.com.au/hc/en-au/articles/360002079835-What-is-the-difference-between-captions-and-subtitles- |
| 32 | Normalising sets the peak to a target level; DC offset is removed (centred on 0) as the first step | video-and-audio-editing (all 3) | Confirmed | https://manual.audacityteam.org/man/normalize.html |

## Worked arithmetic re-checked (no errors)

I re-checked every worked example and answer key: trace tables; FOR...STEP values; the till example (56.70); library fines (240p/300p); the grade percentage (75); the digital divide percentages (93/34, 86/46, 725); all spreadsheet function results (25.4, 3, 2, 720, 33.3, 480, 42/27, 84, 32.4/32, 120, 53.6%); the modelling figures (55,204; 3.71%; 2,249.73; 6.27%; 26,225; 26,997; 2.76; 207); every database query result set, the cross-tabs, 117 and the hashing mods (27, 15, 14); the audio sizes (4.8 MB, 9.6 MB, 2.4 MB, 80 kB) and crop/scale sizes; and the IT in society figures (11,400; 2,720; 85%/80%; 10.80, 4 journeys).

## Not checked online (search budget used up)

The shared web-search limit for this turn ran out before these could be searched. Each one is standard textbook content with no specific figure attached, and each was left unchanged:

- DVD export is standard definition.
- High pass filters remove rumble and hum; low pass filters remove hiss.
- Intraframe vs interframe compression.
- PSD is Photoshop's proprietary format; rtf keeps basic formatting; csv/txt keep values only.
- AVERAGE ignores blank cells; MAX ignores text.
- Crow's foot notation; conceptual/logical/physical ERDs; definitions of 1NF to 3NF.
- Each blockchain block stores the hash of the previous block; the definitions of central bank digital money and stored value cards.
- The descriptions of the CRISP-DM-style data mining stages.
- The Celsius-to-Fahrenheit formula; the 16:9, 4:3 and 9:16 aspect ratios.

A follow-up run could check these.

## Edits

None. No claim was found wrong and none needed softening, so no page was changed.
