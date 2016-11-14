function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
      // 1. Add rows -> 2. Fill columns -> 3. 

      // Add rows
      //while (true) { 
      const columns = $('table.reportTable > tbody > tr', top.frames['ADMIN_CENTER'].document.body);
      let i = 0;
      let arr = []; // Use only last loop's one

      let flag = false;
      // let $a = $('.icon-plus_circle_16', columns);
      // let $a = $('.icon-plus_circle_16', columns);
      let $a = $('.resultRow0 firstRow', columns);
      console.log($a);
      /*
      for (i = 0; i < columns.length; i++) {
        if ($(columns[i]).attr('class') != null && $(columns[i]).attr('class').match(/firstRow/) != null) {
          let $iconPlus = $(columns[i]).find('.icon-plus_circle_16');
          if ($iconPlus.length > 0) {
            console.log(i, ": ", $iconPlus)
            if (flag == false) {
              $iconPlus.click();
              flag = true;
            }
          }
        }
      }
      */
      //}
    });

    return function main() {
      return _ref.apply(this, arguments);
    };
  })();

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  main();
  return this;

  /*
  var timer = null;
  var arr = [];
  function fill() {
    var time = 0;
    for (var i = 0; i < arr.length; i++) {
      if (i % 2 == 0) {
        $($(arr[i]).find('.clockLeft input')).attr('value', '9:00a');
        $($(arr[i]).find('.clockRight input')).attr('value', '12:00p');
      } else {
        $($(arr[i]).find('.clockLeft input')).attr('value', '1:00p');
        $($(arr[i]).find('.clockRight input')).attr('value', '6:00p');
      }
      (function(i) {
        setTimeout(function() {
          $($(arr[i]).find('.icon-List_18')[1]).click();
        }, time);
      }(i));
      time += 2000;
      (function(i) {
        setTimeout(function() {
          $($('.icon-Flag_16',
            top.frames['ADMIN_CENTER'].frames['PopupBodyFrame'].document.body)[3]).parent().click();
          if (i == (arr.length - 1)) {
            alert("Autofill is finished");
          }
        }, time);
      }(i));
      time += 2000;
    }
  }
  while (true) {
    var trs = $('table.reportTable > tbody > tr', top.frames['ADMIN_CENTER'].document.body);
    var i = 0;
    arr = []; // Use only last loop's one
    for (i = 0; i < trs.length; i++) {
      // Skip without firstRow
      if ($(trs[i]).attr("class") == null || $(trs[i]).attr("class").match(/firstRow/) == null) {
        continue;
      }
      // Skip Sat or Sun
      if ($($(trs[i]).find('.dateLabel > div')).text().match(/Sat|Sun/) != null) {
        continue;
      }
      // Check an index of next dayTotalRow
      var tmp = i;
      while ($(trs[tmp]).attr("class") !=
        null && $(trs[tmp]).attr("class").match(/dayTotalRow/) == null) {
        tmp += 1;
      }
      //console.log(i);
      // This day (trs[i]) is not edited
      if ($($(trs[tmp]).find('input')[1]).attr('value') == '0:00') {
        // console.log('this days is not edited:', i);
        if ($(trs[i + 1]).attr("class").match(/middleRow/) == null) {
          $($(trs[i]).find('a[title="Add Row"]')).click();
          break;
        } else {
          arr.push(trs[i]);
          arr.push(trs[i + 1]);
        }
      }
    }
    if (i == trs.length && timer != null) {
    clearInterval(timer);
    fill();
      // alert('Autofill is finished');
    }
  }
  add_row();
  timer = setInterval(function() {
    add_row();
  }, 2200);
  */
});