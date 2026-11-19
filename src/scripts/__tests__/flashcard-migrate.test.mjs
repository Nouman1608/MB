// D-505 -- unit tests for the saved-progress card-id migration.
// Run: node --experimental-strip-types --test src/scripts/__tests__/flashcard-migrate.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { migrateStore } from '../flashcard-migrate.ts';
import { DECK_OCR_AS_LEVEL_ECONOMICS } from '../../data/flashcards/ocr-as-level-economics.ts';

// A small migration shaped like H060's: some ids unchanged, some moved, one
// old id ('1.2-4') reused by a different card, and '3.3-1' removed.
const MIG = {
  id: 'test-v2-2026-11-19',
  before: '2026-11-19',
  map: { '1.1-1': '1.1-1', '1.2-2': '1.1-6', '1.2-4': '1.2-2', '2.2-1': '1.1-8' },
};
const OLD = '2026-11-02';
const store = (cards, extra = {}) => ({ v: 1, cards, ...extra });

test('remaps entries dated before the cutoff', () => {
  const s = store({ '1.1-1': { k: 1, t: OLD }, '1.2-2': { k: 0, t: '2026-10-30' }, '2.2-1': { k: 1, t: '2026-11-18' } });
  const out = migrateStore(s, MIG);
  assert.deepEqual(out.cards, {
    '1.1-1': { k: 1, t: OLD },
    '1.1-6': { k: 0, t: '2026-10-30' },
    '1.1-8': { k: 1, t: '2026-11-18' },
  });
  assert.equal(out.v, 1);
  assert.deepEqual(out.m, [MIG.id]);
});

test('drops old entries whose id is not in the map (removed cards)', () => {
  const out = migrateStore(store({ '3.3-1': { k: 1, t: OLD }, '1.1-1': { k: 1, t: OLD } }), MIG);
  assert.deepEqual(Object.keys(out.cards), ['1.1-1']);
});

test('keeps entries dated on or after the cutoff unchanged, even if their id is an old id in the map', () => {
  const s = store({ '1.2-2': { k: 1, t: '2026-11-19' }, '9.9-9': { k: 0, t: '2026-12-01' } });
  const out = migrateStore(s, MIG);
  assert.deepEqual(out.cards, { '1.2-2': { k: 1, t: '2026-11-19' }, '9.9-9': { k: 0, t: '2026-12-01' } });
});

test('collision: a remapped old entry never replaces a kept new entry', () => {
  // Old '1.2-4' (now '1.2-2') meets a new-dated mark on the new '1.2-2'.
  const s = store({ '1.2-4': { k: 1, t: OLD }, '1.2-2': { k: 0, t: '2026-11-19' } });
  assert.deepEqual(migrateStore(s, MIG).cards, { '1.2-2': { k: 0, t: '2026-11-19' } });
});

test('collision: between remapped entries the later date wins, and the first wins a tie', () => {
  const many = { ...MIG, map: { a: 'x', b: 'x', c: 'y', d: 'y' } };
  const s = store({ a: { k: 0, t: '2026-10-01' }, b: { k: 1, t: '2026-10-05' }, c: { k: 1, t: OLD }, d: { k: 0, t: OLD } });
  assert.deepEqual(migrateStore(s, many).cards, { x: { k: 1, t: '2026-10-05' }, y: { k: 1, t: OLD } });
});

test('the same id appearing as both old and new resolves to the new mark (trap case)', () => {
  // Old '1.2-2' moves to '1.1-6'; a new mark on '1.2-2' is a different card and stays.
  const s = store({ '1.2-2': { k: 1, t: OLD }, '1.1-6': { k: 0, t: '2026-11-20' } });
  // '1.2-2' is old-dated, so it moves; '1.1-6' already has a new mark, which wins.
  assert.deepEqual(migrateStore(s, MIG).cards, { '1.1-6': { k: 0, t: '2026-11-20' } });
});

test('idempotent: a second call returns the same store object', () => {
  const once = migrateStore(store({ '1.2-2': { k: 1, t: OLD } }), MIG);
  const twice = migrateStore(once, MIG);
  assert.equal(twice, once);
  assert.deepEqual(twice.cards, { '1.1-6': { k: 1, t: OLD } });
  assert.deepEqual(twice.m, [MIG.id]);
});

test('does not mutate the input and keeps other recorded migrations', () => {
  const s = store({ '1.2-2': { k: 1, t: OLD } }, { m: ['earlier'] });
  const copy = structuredClone(s);
  const out = migrateStore(s, MIG);
  assert.deepEqual(s, copy);
  assert.deepEqual(out.m, ['earlier', MIG.id]);
});

test('empty store: no cards, migration recorded', () => {
  const out = migrateStore(store({}), MIG);
  assert.deepEqual(out, { v: 1, cards: {}, m: [MIG.id] });
  assert.equal(migrateStore(out, MIG), out);
});

test('no migration: store returned as is', () => {
  const s = store({ 'x-1': { k: 1, t: OLD } });
  assert.equal(migrateStore(s, undefined), s);
});

test('H060 deck: a full old-id store lands on 135 distinct real cards', () => {
  const mig = DECK_OCR_AS_LEVEL_ECONOMICS.idMigration;
  assert.ok(mig);
  const ids = new Set(DECK_OCR_AS_LEVEL_ECONOMICS.cards.map((c) => c.id));
  const old = Object.fromEntries(Object.keys(mig.map).map((id) => [id, { k: 1, t: OLD }]));
  old['3.3-1'] = { k: 1, t: OLD }; // a removed card
  const out = migrateStore(store(old), mig);
  assert.equal(Object.keys(out.cards).length, 135);
  for (const id of Object.keys(out.cards)) assert.ok(ids.has(id), id);
});
