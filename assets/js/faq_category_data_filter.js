$(document).ready(function() {
  $('.tab_btn4 a').on('click', function() {
    var category = $(this).data('filter');
    if (category == 'all') {
      $('.faq-list li').show();
      $('.section-header').show();
    } else {
      $('.faq-list li').hide();
      $('.faq-list li[data-filter="' + category + '"]').show();
      $('.section-header').hide();
    }
    $('.tab_btn4 a').removeClass('active');
    $(this).addClass('active');

    // section-header 클래스에 대한 처리
    if (category == 'all') {
      $('.section-header').show();
    } else {
      $('.section-header').hide();
      $('.section-header[data-filter="' + category + '"]').show();
    }
    
    return false;
  });
});
