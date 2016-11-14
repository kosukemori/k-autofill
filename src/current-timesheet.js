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
      const $a = $('#TopMenu_HM_Menu1', top.frames[0].document.body);
      $a.click();
    } catch (e) { /* Do nothing */ }
    await sleep(500);
    try {
      const $b = $('#HM_Item1_12', top.frames[1].document.body);
      $b.click();
    } catch (e) { /* Do nothing */ }
    await sleep(500);
    try {
      const $c = $('#HM_Item1_12_1 .itemText', top.frames[1].document.body);
      $c.click();
    } catch (e) { /* Do nothing */ }
  }
  main();
  return this;
}));
