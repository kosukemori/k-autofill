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
    var $a = $('#TopMenu_HM_Menu1', top.frames[0].document.body);
    $a.click();
    setTimeout(function(){
      var $b = $('#HM_Item1_12 .itemText', top.frames[1].document.body);
      $b.click();
    }, 500);
    setTimeout(function(){
      var $c = $('#HM_Item1_12_1 .itemText', top.frames[1].document.body);
      $c.click();
    }, 1000);
  });
})();
