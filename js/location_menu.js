$(document).ready(function() {
  // BI 섹션을 처음에는 숨김 처리
  $('.shop[data-filter="shop"]').hide();
  $('.office[data-filter="office"]').hide();

    var activeCategory = $('.tab_btn a.active').data('filter');
    $('.main3 > div[data-filter="' + activeCategory + '"]').fadeIn(500); // 초기에 선택된 카테고리 페이드인 애니메이션으로 보이기

    $('.tab_btn a').on('click', function() {
      var category = $(this).data('filter');
      $('.main3 > div[data-filter]').hide(); // 모든 카테고리 숨기기
      if (category === 'all') {
        $('.main3 > div[data-filter]').fadeIn(500); // 모든 데이터 페이드인 애니메이션으로 보이기
        $('.shop, .office').fadeIn(500); // shop과 office 클래스 페이드인 애니메이션으로 보이기
      } else {
        $('.main3 > div[data-filter="' + category + '"]').fadeIn(500); // 선택한 카테고리 페이드인 애니메이션으로 보이기

      }
      $('.tab_btn a').removeClass('active');
      $(this).addClass('active');
      $('.container3').show();
      $('.main3').show();
      $('.ceo_sign_img_wrapper').hide(); // 모든 이미지 숨기기
      $('.main3 > div[data-filter="' + category + '"] .ceo_sign_img_wrapper').fadeIn(100).addClass('zoom-in'); // 선택한 카테고리의 이미지 페이드인 및 확대 애니메이션 효과 추가

      return false;
    });

    $('.tab_btn a').click(function() {
      $('.tab_btn4').show();
    });

    $('.container3').show();
    $('.main3').show();
  });