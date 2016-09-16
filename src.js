(function(f, s){
  s = document.createElement("script");
  s.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js";
  s.type = 'text/javascript';
  document.body.appendChild(s)
  var checkReady = function(callback) {
    if (window.jQuery) {
      callback(jQuery);
    }
    else {
      window.setTimeout(function() { checkReady(callback); }, 100);
    }
  };
  checkReady(function($){
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
            $($('.icon-Flag_16', top.frames['ADMIN_CENTER'].frames['PopupBodyFrame'].document.body)[3]).parent().click();
            if (i == (arr.length - 1)) {
              alert("Autofill is finished");
            }
          }, time);
        }(i));
        time += 2000;
      }
    }
    function add_row() {
      var trs = $('table.reportTable > tbody > tr', top.frames['ADMIN_CENTER'].document.body);
      var i = 0;
      arr = []; // Use only last loop's one
      for (i = 0; i < trs.length; i++) {
        // Skip without firstRow
        if ($(trs[i]).attr("class") == null || $(trs[i]).attr("class").match(/firstRow/) == null) {
          continue;
        }
        if ($($(trs[i]).find('.dateLabel > div')).text().match(/Sat|Sun/) != null) {
          continue;
        }
        // Check an index of next dayTotalRow
        var tmp = i;
        while ($(trs[tmp]).attr("class") != null && $(trs[tmp]).attr("class").match(/dayTotalRow/) == null) {
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
  });
})();
