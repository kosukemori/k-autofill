(function (f, src) {
  let s = src;
  s = document.createElement('script');
  s.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js';
  s.onload = function () {
    f(jQuery.noConflict(true));
  };
  document.body.appendChild(s);
}(function ($) {
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function main() {
    try {
      const $a = $('a:contains("My Account")', top.frames[0].document.body);
      $a.click();
    } catch (e) { console.log(e); }
    await sleep(500);
    try {
      const $b = $('span:contains("My Timesheet")', top.frames[1].document.body);
      $b.click();
    } catch (e) { console.log(e); }
    await sleep(500);
    try {
      const $c = $('span:contains("My Current Timesheet")', top.frames[1].document.body);
      $c.click();
    } catch (e) { console.log(e); }
  }
  main();
  return this;
}));
