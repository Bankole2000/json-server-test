const traces = require('./data/traces.json');
const points = require('./data/points.json');

module.exports = () => {
  const data = {traces, points}
  return data
}