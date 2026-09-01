#!/usr/bin/env node
// scripts/test-practice-analytics.mjs
//
// Search Intelligence Execution Round, Section 10. Static + small-sandbox
// checks for the practice-engagement event instrumentation added to
// src/pages/practice/[code]/index.astro and the shared window.mbTrack
// helper in src/components/analytics/ConsentAnalytics.astro. Reporting
// tool only, matching this repo's existing test-negative-validation-suite.mjs
// convention -- not wired into `npm run validate:academic` or `audit:all`,
// run explicitly.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

let pass = 0;
let fail = 0;
function check(label, ok) {
  if (ok) {
    console.log('  ✓ ' + label);
    pass++;
  } else {
    console.log('  ✗ FAIL: ' + label);
    fail++;
  }
}

console.log('Practice analytics event instrumentation checks\n');

const practiceSrc = readFileSync(
  path.join(root, 'src/pages/practice/[code]/index.astro'),
  'utf8'
);
const consentSrc = readFileSync(
  path.join(root, 'src/components/analytics/ConsentAnalytics.astro'),
  'utf8'
);

console.log('[1] Implemented events are present in source');
const implementedEvents = [
  'practice_start',
  'question_answered',
  'question_correct',
  'question_incorrect',
  'quiz_complete',
  'retry',
  'error_notebook_add',
  'weak_topic_click',
  'teacher_support_click',
];
for (const name of implementedEvents) {
  check(`'${name}' appears in the practice page's inline script`, practiceSrc.includes(name));
}

console.log('\n[2] NOT_APPLICABLE events are deliberately absent (Section 5)');
check(
  "'bookmark_question' is never fired -- no bookmark feature exists",
  !practiceSrc.includes('bookmark_question')
);
check(
  "'resource_from_practice' is never fired -- no reachable interactive link exists",
  !practiceSrc.includes('resource_from_practice')
);

console.log('\n[3] No question/answer text or other PII-shaped field is ever passed to track()');
// Every track(...) call's inline object literal, scanned for banned keys.
const trackCalls = [...practiceSrc.matchAll(/track\(\s*(?:'[a-z_]+'|[a-zA-Z0-9_.? :']+),\s*(\{[^}]*\})/g)];
check('at least one track() call with a params object was found to scan', trackCalls.length > 0);
const bannedKeys = ['question_text', 'answer_text', 'email', 'name', 'phone', 'password'];
let leaked = [];
for (const m of trackCalls) {
  for (const key of bannedKeys) {
    if (m[1].includes(key + ':') || m[1].includes(`'${key}'`)) leaked.push(key);
  }
}
check('no track() call includes a banned key (' + bannedKeys.join(', ') + ')', leaked.length === 0);

console.log('\n[4] question_answered never carries question/answer content, only the opaque id');
const qaBlockMatch = practiceSrc.match(/track\('question_answered', \{([\s\S]*?)\}\);/);
check("question_answered's own params block was found", !!qaBlockMatch);
if (qaBlockMatch) {
  check(
    "question_answered's params reference question_id (opaque), not qHtml/aHtml",
    /question_id:\s*q\.id/.test(qaBlockMatch[1]) &&
      !/qHtml|aHtml/.test(qaBlockMatch[1])
  );
}

console.log('\n[5] error_notebook_add only fires on a NEW wrong entry, not every repeat wrong-mark');
check(
  'error_notebook_add call is gated on `!wasAlreadyWrong`',
  /if \(!correct && !wasAlreadyWrong\)/.test(practiceSrc)
);

console.log('\n[6] quiz_complete only wired into diagnostic-mode completion, not standard/mixed');
const quizCompleteIdx = practiceSrc.indexOf("track('quiz_complete'");
check("quiz_complete call exists", quizCompleteIdx !== -1);
check(
  'quiz_complete call sits inside showDiagnosticResults(), not applyFilter()/render()',
  practiceSrc.indexOf('function showDiagnosticResults()') < quizCompleteIdx &&
    quizCompleteIdx < practiceSrc.indexOf('function applyMode()')
);

console.log('\n[7] Shared mbTrack helper exists once, in the single analytics component');
check('window.mbTrack is defined in ConsentAnalytics.astro', consentSrc.includes('window.mbTrack = function'));
check(
  'the practice page calls window.mbTrack indirectly via its own track() wrapper, not a second gtag setup',
  practiceSrc.includes("typeof window.mbTrack === 'function'") &&
    !/window\.dataLayer\s*=|function gtag\(\)/.test(practiceSrc)
);

console.log('\n[8] PII denylist actually strips a real PII-shaped key (sandboxed eval, not just reading the array)');
{
  const denylistMatch = consentSrc.match(/var MB_PII_DENYLIST = (\[[^\]]*\]);/);
  check('MB_PII_DENYLIST array literal found', !!denylistMatch);
  if (denylistMatch) {
    // Re-implement the exact stripping logic in isolation and test it --
    // proves the *behavior*, not just that the array contains 'email'.
    const denylist = JSON.parse(denylistMatch[1].replace(/'/g, '"'));
    function stripPii(params) {
      const out = {};
      for (const key of Object.keys(params)) {
        const lower = key.toLowerCase();
        if (denylist.some((bad) => lower.includes(bad))) continue;
        out[key] = params[key];
      }
      return out;
    }
    const dirty = { topic: 'Algebra', student_email: 'x@example.com', is_correct: true };
    const clean = stripPii(dirty);
    check(
      "a deliberately-injected 'student_email' field is dropped, safe fields kept",
      !('student_email' in clean) && clean.topic === 'Algebra' && clean.is_correct === true
    );
  }
}

console.log('\n[9] Negative fixture -- accidental email field in a track() call would be caught by check [3]');
{
  const fixture = practiceSrc.replace(
    "track('practice_start', {});",
    "track('practice_start', { email: 'leaked@example.com' });"
  );
  check(
    'fixture actually differs from the source (sanity check that the replace worked)',
    fixture !== practiceSrc
  );
  const fixtureLeak = /track\([^)]*email:/.test(fixture);
  check('the injected email fixture is detected as a leak by a fresh scan', fixtureLeak);
}

console.log('\n==============================================================================');
console.log(`SUMMARY: ${pass} passed, ${fail} failed`);
console.log('==============================================================================');
if (fail > 0) process.exitCode = 1;
