# Facts check results -- group 9626b (Cambridge A Level IT 9626, topics 13-21)

27 pages read in full. Claims the 9626 syllabus already states (topic lists, syllabus term "Performance Evaluation and Review Technique", Paper 3/4 coverage, "calculators are not allowed in Paper 3", version 3 published July 2025, syllabus symbol lists, "field selection buttons", frame relay/TCP connection mode, Ethernet/IP/UDP connectionless) were skipped. Pure method, definitions and arithmetic were skipped. Worked-example arithmetic was spot-checked and found correct.

## Claims checked

| Claim | Page(s) | Verdict | Source |
|---|---|---|---|
| MID with start + length beyond the end of the text returns the characters up to the end | data-analysis (guide, notes, practice) | Confirmed | https://support.microsoft.com/en-us/excel/mid-function |
| A pivot table must be refreshed after the source changes | data-analysis (guide, notes, practice) | Partly wrong: newer Excel can refresh automatically for local workbook data; older versions and other sources need a refresh. Guide sentence softened; "may need refreshing" elsewhere is already safe | https://support.microsoft.com/excel/refresh-pivottable-data |
| Text to Columns splits a column at a delimiter (comma, tab, space) | data-analysis guide | Confirmed | https://support.microsoft.com/en-us/office/split-text-into-different-columns-30b14928-5550-41f5-97ca-7a3e9c363ed7 |
| Spelling variants and trailing spaces ("Bikes" vs "Bikes ") appear as separate pivot rows | data-analysis (guide, notes, practice) | Confirmed | https://chandoo.org/forum/threads/repeated-same-data-in-pivot-table.29193 |
| XLOOKUP 4th argument returns the given text when no match is found | data-analysis guide, notes | Confirmed | https://support.microsoft.com/excel/functions/xlookup-function |
| Fill-in prompts and its response appears where the field is; can prompt once per merge (\o) or per record; default response (\d) | mail-merge (guide, notes, practice) | Confirmed | https://support.microsoft.com/en-us/word/field-codes-fill-in-field |
| Ask stores the response under a name (bookmark), shown by a reference (Ref) field; \o prompts once; \d default | mail-merge (guide, notes, practice) | Confirmed | https://support.microsoft.com/en-US/word/field-codes-ask-field |
| Next Record If: if true, the next record is merged into the current merged document; filter is preferred for selecting records | mail-merge (guide, notes, practice) | Confirmed (Microsoft recommends Filter, and NextIf only to control consecutive records) | https://support.microsoft.com/en-us/word/field-codes-nextif-field |
| Skip Record If: if true, cancels the current merged document and moves to the next record | mail-merge (guide, notes, practice) | Confirmed | https://support.microsoft.com/en-us/word/field-codes-skipif-field |
| Embedded object does not change when the source file changes; linked object updates | mail-merge (guide, notes, practice) | Confirmed | https://support.microsoft.com/en-US/Word/linked-objects-and-embedded-objects |
| Custom label settings: page size, top and side margin, label width and height, horizontal/vertical pitch (edge to same edge of next label), number across and down | mail-merge guide, notes | Confirmed | https://learn.microsoft.com/en-us/previous-versions/office/developer/office-2010/ms263350(v=office.14) |
| GIF lossless, 256 colours max, one transparent colour, animation | graphics (guide, notes, practice) | Confirmed | https://developer.mozilla.org/docs/Web/Media/Guides/Formats/Image_types |
| JPEG lossy, true colour (millions), no transparency | graphics (all three) | Confirmed | same MDN page |
| PNG lossless, supports transparency | graphics (all three) | Confirmed | same MDN page |
| BMP usually uncompressed | graphics guide, notes | Confirmed (MDN: most common form uncompressed) | same MDN page |
| TIF usually uncompressed or lossless | graphics guide, notes | Confirmed (MDN: most commonly uncompressed; LZW/PackBits lossless; JPEG lossy also possible, so "usually" is right) | same MDN page |
| SVG vector, supports transparency | graphics (all three) | Confirmed | same MDN page |
| HSL: hue 0-360 degrees on the colour wheel; lightness 0% black, 100% white | graphics guide, notes | Confirmed | https://developer.mozilla.org/en-US/docs/web/css/color_value/hsl |
| High-quality print commonly targets about 300 ppi | graphics guide, notes (and practice answers) | Confirmed | https://www.psprint.com/shared/html/fileprep/details/resolution.asp ; https://printninja.com/recommended-resolution/ |
| CMS = colour management system using device profiles to keep colour consistent between devices | graphics (all three) | Confirmed | https://en.wikipedia.org/wiki/Color_management |
| Node types: cusp handles move independently (sharp corner); smooth handles in line, may differ in length; symmetrical handles in line and equal length | graphics (all three) | Confirmed (CorelDRAW; page already notes software labels vary) | https://product.corel.com/help/CorelDRAW/540111148/CorelDRAW-en/CorelDRAW-Node-types.html |
| Stage coordinates: origin at top-left, y increases downwards (in many 2D tools) | animation guide | Confirmed | https://help.adobe.com/en_US/as3/dev/WS5b3ccc516d4fbf351e63e3d118a9b90204-7dcc.html |
| Animation variable (avar) controls the position of an object or part of it | animation (all three) | Confirmed | https://en.wikipedia.org/wiki/Avar_(animation_variable) |
| document.write() after the page has loaded calls document.open() and clears the page | web (guide, notes, practice) | Confirmed | https://developer.mozilla.org/es/docs/Web/API/document/write |
| onchange: text box fires when it loses focus after a change; select fires on selection | web (guide, notes) | Confirmed | https://developer.mozilla.org/En/DOM/Element.onchange |
| prompt() returns the typed string, "" if empty, null on Cancel | web (all three) | Confirmed | https://developer.mozilla.org/docs/Web/API/Window/prompt |
| confirm() returns true for OK, false for Cancel | web (all three) | Confirmed | https://developer.mozilla.org/docs/Web/API/Window/confirm |
| visibility hidden keeps the space; display none removes it from the layout | web (all three) | Confirmed | https://developer.mozilla.org/en/CSS/visibility |
| setInterval repeats every delay in ms and returns an ID for clearInterval; setTimeout runs once | web (all three) | Confirmed | https://developer.mozilla.org/en-US/docs/Web/API/Window.setInterval |
| External scripts: separate HTML and code; browser can cache the file | web (all three) | Confirmed | https://www-db.disi.unibo.it/courses/TW/DOCS/w3schools/js/js_whereto.asp.html (W3Schools mirror) |
| typeof an array gives "object"; Array.isArray tests for an array | web guide | Confirmed | https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/typeof |
| Order: ** before * / % before + - | web guide, notes | Confirmed | https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Operator_precedence |

## Not checked online (the shared web-search budget for this turn ran out)

These are standard textbook facts that I believe correct; none were edited except the IPv6 wording below.

- Communications technology: MAC address 48 bits; IPv4 32 bits, IPv6 128 bits in eight hex groups; OSI 7 layers and TCP/IP 4 layers with the stated mapping; InARP finds an IP address from a link-layer address; L2TP often paired with IPsec; POP3 usually removes mail from the server, IMAP keeps it; ICMP used by ping; hub-based star is logically a bus; satellite transponder amplifies and changes frequency; 4G all-IP, 5G; Wi-Fi is IEEE 802.11; WEP weak, WPA2/WPA3; BGP between autonomous systems; GPS uses signal timing from several satellites; NFC range; Bluetooth "a few metres".
- "IPv6 introduced because IPv4 addresses ran out": softened (see edits), since IPv6 was standardised before IPv4 exhaustion.
- New and emerging technologies: holograms from laser interference patterns; holographic storage reads a page at once; CD/DVD/Blu-ray as optical generations; DNA storage uses four bases; blockchain block holds previous block's hash; CAT translation memory and terminology database; RF energy harvesting from Wi-Fi.
- Animation: "cel" short for celluloid; morphing as warp plus cross-fade; time lapse capture rate lower than playback.
- Graphics: magic wand contiguous with tolerance; pencil hard edges (already hedged "typically"); kerning vs letter spacing; font size in points.
- Mail merge: A4 is 210 × 297 mm; date field updates on merge.

## Edits made

1. `a-level-cambridge-ict-data-analysis-and-visualisation.md`: "If the source list changes, refresh the pivot table so its figures update." now ends "(some newer versions refresh automatically)." To stay within 2,100 words, "Skipping step 2 gives wrong totals however good the chart looks." was shortened to "Skipping step 2 gives wrong totals." Now 2,097 words; the only checker flag is the known `$A$2` cell-reference false positive.
2. `a-level-cambridge-ict-communications-technology.md`: "introduced because IPv4 addresses ran out" changed to "introduced because IPv4 addresses were running out". Checker OK (2,097 words).

No other page in the list needed a change. Practice answers that tell students to refresh a pivot table are still correct as an action, and other pages already say "may need refreshing".
