const runscript = require('runscript');
const path = require('path');
const eventName = process.argv.pop();

const getResult = require(path.resolve('./events', eventName));
if (getResult) {
  runscript(`echo '${JSON.stringify(getResult)}' | fun local invoke ${eventName}`).then(console.log).catch(console.error)
}