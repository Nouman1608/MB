---
title: "Cambridge IGCSE ICT (0417): Find and replace text"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 17: Document production"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 17.3
syllabusTopics:
  - qualification: "igcse"
    topic: "document-production"
    subtopic: "find-and-replace-text-t17-0417"
description: "Find, replace and replace all with match case and whole words options for Cambridge IGCSE ICT 0417 Topic 17, with counted examples of what each option matches."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Topic 17 Document production in Cambridge IGCSE ICT 0417 lists **find and replace text**, "including matching case, whole words". It looks like the simplest skill in the topic, but it is where many practical candidates damage a document they had otherwise formatted perfectly: one careless Replace all can change dozens of words that should have been left alone. This guide explains exactly what each option matches, with every count worked out, and how to check the result. The [Document production study guide](/resources/cambridge-igcse-ict-document-production-study-guide/) places this skill alongside the rest of the topic.

## The tools

- **Find** searches for a word or phrase and highlights each occurrence in turn (or lists them all). It changes nothing.
- **Find next** moves to the next occurrence.
- **Replace** changes the occurrence that is currently highlighted, then moves to the next one.
- **Replace all** changes every occurrence in one step and usually reports how many replacements were made.

Find on its own is useful for checking: for example, finding every occurrence of a name to see whether it is spelt the same way throughout.

## The two options in the syllabus

### Match case

With **match case** on, the search treats capital and lower-case letters as different. A search for *Park* finds "Park" but not "park" or "PARK". With it off, all three are found.

### Find whole words only

With **whole words** on, the search finds the text only where it stands as a complete word, with a space, punctuation mark or line ending on each side. A search for *art* finds "art" but not the *art* inside "party" or "start". With it off, the text is found anywhere, including inside longer words.

## Worked example: counting what each option finds

Original text:

> "Art club meets in the art room. Martin brings ARTWORK, and the party starts at 4. Art is fun."

The letters *a-r-t* appear seven times: Art, art, M**art**in, **ART**WORK, p**art**y, st**art**s, Art. Searching for *art*:

| Match case | Whole words | Occurrences found | Count |
|---|---|---|---|
| Off | Off | Art, art, Martin, ARTWORK, party, starts, Art | 7 |
| Off | On | Art, art, Art | 3 |
| On | Off | art, Martin, party, starts | 4 |
| On | On | art (in "art room") | 1 |

Points to notice:

- Match case **on** removes "Art" and "ARTWORK", because they use capitals, but keeps the lower-case *art* inside Martin, party and starts.
- Whole words **on** removes Martin, ARTWORK, party and starts, because *art* is part of a longer word in each.
- Only with **both** options on is the search restricted to the single lower-case word.

### What Replace all would do

Suppose the instruction is "replace the word *art* with *craft*" and the candidate uses Replace all with both options off. Every one of the seven occurrences is changed, producing nonsense such as "Mcraftin", "craftWORK", "pcrafty" and "scrafts". With **whole words** on, only the three real words *Art*, *art* and *Art* change, which is what the instruction meant. After replacing, check the capital letters at the start of each sentence, because the replacement may be inserted exactly as it was typed in the Replace box.

## Choosing the options from the instruction

Read the wording of the task closely.

| Instruction says | Options to use |
|---|---|
| "Replace the word *Lee* with *Leigh*" | Whole words on, so "Leeds" and "sleeve" are untouched |
| "Replace *IT* with *ICT*" | Match case on, so "it" and "with" are untouched, and whole words on, so a capitalised word such as "ITEM" is untouched |
| "Replace every *e-mail* with *email*" | Neither is essential, but check the result |
| "Replace *Ms Rao* with *Dr Rao*" | Match case on (capital M); the phrase is unlikely to occur inside other words |

A short search term is far more dangerous than a long one. A two- or three-letter word almost always occurs inside other words, so whole words is nearly always needed. Proper nouns and abbreviations in capitals usually need match case too.

## Safe working method

1. **Find first.** Before replacing, search with your chosen options and look at the number of occurrences. Does it match what you expect?
2. **Replace one at a time if unsure.** Use Find next and Replace on each occurrence, skipping any that should stay.
3. **Use Replace all only when** the search finds exactly the occurrences you want.
4. **Check the count** reported after Replace all.
5. **Search again for the old text** to confirm nothing remains that should have changed, and for the new text to check that nothing has been doubled.

## Swapping two words

An instruction may ask you to swap two terms, for example change every *north* to *south* and every *south* to *north*. Replacing north with south first turns every north into south, and then replacing south with north turns *all* of them, old and new, into north. The fix is a temporary placeholder that does not occur anywhere in the document:

1. Replace *north* with *zzzz*.
2. Replace *south* with *north*.
3. Replace *zzzz* with *south*.
4. Search for *zzzz* to confirm none is left.

Use whole words for each step.

## Uses of find and replace

- Correcting a name or term that is spelt wrongly throughout a document.
- Updating details, such as a new venue name or a new year in a document reused from last year.
- Making terms consistent with a house style, for example changing *e-mail* to *email*.
- Removing repeated mistakes such as two spaces after full stops, by finding two spaces and replacing with one.

## Common mistakes

- Replace all with whole words off, changing letters inside other words.
- Leaving match case off when replacing an abbreviation in capitals, so lower-case words are also changed.
- Not checking the number of replacements.
- Swapping two words without a placeholder, so both end up the same.
- Assuming the job is done without searching again for the old text.

## Exam technique

In the practical paper the instruction is usually "replace the word X with Y". The marker checks every occurrence: all the correct ones should change and nothing else should. Use the options, then search again for the old word. On the theory paper, if asked to *explain* why whole words or match case would be used, give a specific example of a word that would otherwise be changed wrongly, such as the *art* in "party".

## Check your understanding

1. What does Find do that Replace does not? *It locates text without changing it.*
2. With whole words on, will a search for *cat* find "category"? *No.*
3. With match case on, will a search for *Bank* find "bank"? *No.*
4. Why is a search for *it* dangerous without whole words? *"it" occurs inside many words such as "with", "little" and "unit".*
5. How do you swap *left* and *right* throughout a document? *Use a placeholder: left to a temporary word, right to left, then the temporary word to right.*
6. What should you do after Replace all? *Check the count, then search for the old text to confirm nothing wrong remains.*

## Next steps

Revise with the [find and replace revision notes](/resources/cambridge-igcse-ict-0417-find-and-replace-text-t17-revision-notes/), then try the [find and replace practice questions](/resources/cambridge-igcse-ict-0417-find-and-replace-text-t17-practice/).

## Official syllabus

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Version 3, Topic 17 "Document production", find and replace text.
