// JOY'S JS
$(document).ready(function() {

    $('.bank b').mouseover(
       
       function () {
          $(this).css({"text-decoration":"underline"});
    });
    $(".bank b").mouseout(
        function () {
            $(this).css({"text-decoration":"none"});
      });
       
 })