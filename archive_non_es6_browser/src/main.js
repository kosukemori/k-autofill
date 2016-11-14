// Sample

(function () {
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function main() {
    console.log('blah0');
    sleep(1000);
    console.log('blah1');
    sleep(1000);
    console.log('blah2');
    sleep(1000);
    console.log('blah3');
  }
  main();
});
