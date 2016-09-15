(function(f, s){
  s = document.createElement("script");
  s.src = "//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js";
  s.onload = function() {
    f(jQuery.noConflict(true))
  };
  document.body.appendChild(s)
})(function($){
  var time = 0;
  var timer = setInterval(function() {
    // console.log('while');
    var trs = $('table.reportTable > tbody > tr', top.frames['ADMIN_CENTER'].document.body);
    var i = 0;
    for (i = 0; i < trs.length; i++) {
      // Skip without firstRow
      if ($(trs[i]).attr("class") == null || $(trs[i]).attr("class").match(/firstRow/) == null) {
        continue;
      }
      // Check an index of next dayTotalRow
      var tmp = i;
      while ($(trs[tmp]).attr("class") != null && $(trs[tmp]).attr("class").match(/dayTotalRow/) == null) {
        tmp += 1;
      }
      // console.log(i);
      // if this day (trs[i]) is not edited, update the timesheet
      if ($($(trs[tmp]).find('input')[1]).attr('value') == '0:00') {
        // console.log('this days is not edited:', i);
        if ($(trs[i + 1]).attr("class").match(/middleRow/) == null) {
          // console.log('click', i);
          $($(trs[i]).find('a[title="Add Row"]')).click();
          break;
        } else {
          // console.log('input', i);
          $($(trs[i]).find('.clockLeft input')).attr('value', '9:00a');
          $($(trs[i]).find('.clockRight input')).attr('value', '12:00p');
          $($(trs[i + 1]).find('.clockLeft input')).attr('value', '1:00p');
          $($(trs[i + 1]).find('.clockRight input')).attr('value', '6:00p');
        }
      }
    }
    if (i == trs.length) {
      clearInterval(timer);
    }
  }, 2000);
});