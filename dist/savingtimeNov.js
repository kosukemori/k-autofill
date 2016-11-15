function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/* eslint-disable prefer-template */
// Fix saving time on Nov
(function (f, src) {
  let s = src;
  s = document.createElement('script');
  s.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js';
  s.onload = function () {
    f(jQuery.noConflict(true));
  };
  document.body.appendChild(s);
})(function ($) {
  let main = (() => {
    var _ref = _asyncToGenerator(function* () {
      // Fix saving times
      console.log('Start: Fill Saving times');
      const bodyCenter = top.frames.ADMIN_CENTER.document.body;
      const $firstRows = $('table.reportTable > tbody > .firstRow', bodyCenter);
      for (let i = 0; i < $firstRows.length; i += 1) {
        const day = $($firstRows[i]).find('.dateLabel > div').text();
        if (!day.match(/Sat|Sun/)) {
          let st = '';
          if (parseInt(day.match(/[\d]+/)[0], 10) < 6) {
            st = ' (DST)';
          } else {
            st = ' (ST)';
          }
          $($firstRows[i]).find('.clockLeft input').attr('value', '9:00a' + st);
          $($firstRows[i]).find('.clockRight input').attr('value', '12:00p' + st);
          $($firstRows[i]).next().find('.clockLeft input').attr('value', '1:00p' + st);
          $($firstRows[i]).next().find('.clockRight input').attr('value', '6:00p' + st);
        }
      }
      console.log('End: Fill Saving times');
      alert('Fixing saving time is finished!');
    });

    return function main() {
      return _ref.apply(this, arguments);
    };
  })();

  main();

  return this;
});