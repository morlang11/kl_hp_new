$(document).ready(function() {
     
  $(".btn_shop").hide();
  $(function() {

      $(window).scroll(function() {
          if ($(this).scrollTop() > 100) {
              $('.btn_shop').fadeIn();
          } else {
              $('.btn_shop').fadeOut();
          }
      });
  });

});