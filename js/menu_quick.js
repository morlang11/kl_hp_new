$(document).ready(function() {
  if (window.innerWidth > 768) {
      var currentPosition = parseInt($(".quickmenu").css("top"));
      $(window).scroll(function() {
          var position = $(window).scrollTop();
          $(".quickmenu").stop().animate({"top": position + currentPosition + "px"}, 1000);
      });
  }
});