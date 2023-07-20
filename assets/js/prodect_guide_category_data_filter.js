        // 카테고리 필터링 처리
        $(document).ready(function() {
            $('.tab_btn4 a').on('click', function() {
              var category = $(this).data('filter');
              if (category == 'all') {
                $('.faq-list li').show();
              } else {
                $('.faq-list li').hide();
                $('.faq-list li[data-filter="' + category + '"]').show();
              }
            });
          });
  
                // 카테고리 active 처리
        $(document).ready(function() {
          $('.tab_btn4 a').on('click', function() {
            $('.tab_btn4 a').removeClass('active');
            $(this).addClass('active');
            return false;
          });
        });