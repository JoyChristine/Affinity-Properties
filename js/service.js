// $(document).ready(function(){
//     $("#icon-home").click(function(){
//       $(this.fadeToggle("slow"));
//     });

// });
$(document).ready(function(){

    $(".parent #icon-home").mouseover(
      function () {
        $(this).css({"color":"red"});
    });
    $(".parent #icon-home").mouseout(
      function () {
          $(this).css({"color":"white"});
    });
});