$(document).ready(function() {
  // BI 섹션을 처음에는 숨김 처리
  $('.BI[data-filter="BI"]').hide();

  var activeCategory = $('.tab_btn a.active').data('filter');
  $('.main3 > div[data-filter="' + activeCategory + '"]').fadeIn(500);

  $('.tab_btn a').on('click', function() {
      var category = $(this).data('filter');
      $('.main3 > div[data-filter]').hide();
      if (category === 'all') {
          $('.main3 > div[data-filter]').fadeIn(500);
      } else {
          $('.main3 > div[data-filter="' + category + '"]').fadeIn(500);
      }
      $('.tab_btn a').removeClass('active');
      $(this).addClass('active');
      $('.container3').show();
      $('.main3').show();
      $('.ceo_sign_img_wrapper').hide();
      $('.main3 > div[data-filter="' + category + '"] .ceo_sign_img_wrapper').fadeIn(100).addClass('zoom-in');
      return false;
  });

  $('.tab_btn a').click(function() {
      $('.tab_btn4').show();
  });

  $('.container3').show();
  $('.main3').show();
});

// CI, BI 카테고리의 데이터 표시 및 애니메이션
$('.CI[data-filter="CI"], .BI[data-filter="BI"]').fadeIn(500, function() {
  $('.CI[data-filter="CI"] .ceo_sign_img_wrapper, .BI[data-filter="BI"] .ceo_sign_img_wrapper').addClass('zoom-in');
});