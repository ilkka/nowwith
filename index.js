const numeral = require('numeral');
const Random = require('random-js');
const mt = Random.engines.mt19937().autoSeed();

function amount() {
  return Random.pick(mt, [
    `${numeral(Random.real(1.5, 7)(mt)).format('0[.]0')}x`,
    `${Random.integer(5, 300)(mt)}%`
  ]);
}

function direction(t) {
  return Random.pick(mt, ['more', (t.slice(-1) === 's' ? 'fewer' : 'less')]);
}

function adjective() {
  return Random.pick(mt, [
    'homeopathic',
    'resonant',
    'juvenile',
    'radioactive',
    'hypothetical',
    'organic',
    'malodorous',
    'supercalifragilistic',
    'cyclical',
  ]);
}

function thing() {
  return Random.pick(mt, [
    'riboflavin',
    'tribbles',
    'tachyons',
    'dependencies',
    'onomatopoeia',
  ]);
}

/**
 * @return a "now with" string.
 */
function nowWith() {
  const t = thing();
  return `Now with ${amount()} ${direction(t)} ${adjective()} ${t}`;
}

module.exports = nowWith;

