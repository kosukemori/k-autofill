/* eslint no-underscore-dangle: ["error", { "allow": ["_babelPolyfill"] }] */
/* eslint-disable global-require */
if (!global._babelPolyfill) {
  require('babel-polyfill');
}
/* eslint-enable global-require */

(function () {
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function main() {
    console.log('kosuke0');
    await sleep(1000);
    console.log('kosuke1');
    await sleep(1000);
    console.log('kosuke2');
    await sleep(1000);
    console.log('kosuke3');
    await sleep(1000);
    console.log('kosuke4');
    await sleep(1000);
    console.log('kosuke5');
  }
  main();
  return this;
}());
