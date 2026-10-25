'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const D = require('../src/data.js');
const mission = id => D.missions.find(item => item.id === id);

test('combined access log exercise asks for the response status, not the adjacent byte count', () => {
  const item = mission('m-r1');
  const fields = item.rows[0].raw.match(/^(\S+) - (\S+) \[([^\]]+)\] "([A-Z]+) (\S+) HTTP\/[^\"]+" (\d{3}) (\d+) "([^\"]*)" "([^\"]*)"$/);
  assert.ok(fields, 'source follows the nginx combined field order');
  assert.equal(fields[4], 'GET');
  assert.equal(fields[5], '/admin/users');
  assert.equal(fields[6], '403');
  assert.equal(fields[7], '162');
  const correct = item.tokens.find(token => token.id === item.answer.tokenId);
  assert.equal(correct.label, fields[6]);
  assert.ok(item.tokens.some(token => token.label === fields[7] && token.id !== correct.id), 'byte count remains a distinct distractor');
});

test('JSON DNS exercise reads the query value independently of the resolver and response code', () => {
  const item = mission('m-r2');
  const log = JSON.parse(item.rows[0].raw);
  assert.equal(log.type, 'A');
  assert.equal(log.rcode, 'NXDOMAIN');
  assert.ok(item.answer.values.includes(log.query));
  assert.ok(!item.answer.values.includes(log.resolver));
  assert.ok(!item.answer.values.includes(log.rcode));
});

test('duplicate-count exercise has identical visible events with separate selection identities', () => {
  const item = mission('m-f3');
  const duplicates = item.rows.filter((row, index, rows) => rows.some((other, otherIndex) => index !== otherIndex && row.raw === other.raw));
  assert.equal(duplicates.length, 2);
  assert.notEqual(duplicates[0].id, duplicates[1].id);
  for (const key of ['raw', 'time', 'note']) assert.equal(duplicates[0][key], duplicates[1][key], key + ' does not identify the replay');
  assert.ok(item.rows.every(row => !/\bcopy=/.test(row.raw)));
  const rejected = item.rows.filter(row => /\bresult=denied(?:\s|$)/.test(row.raw));
  const attempts = new Set(rejected.map(row => row.raw.match(/\battempt=([^\s]+)/)[1]));
  assert.ok(rejected.length > attempts.size, 'counting rows would produce a different answer');
  assert.ok(item.answer.values.includes(String(attempts.size)));
});
