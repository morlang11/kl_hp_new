        // 페이지 로드 후 실행
        $(document).ready(function() {
            // 초기 설정: 첫 번째 뉴스 섹션만 보이도록 함
            $(".news-section").not("[data-filter='news-1']").hide();

            // 커스텀 페이지네이션 클릭 이벤트 처리
            $(".custom-pagination a[data-filter]").click(function(e) {
                e.preventDefault();

                // 클릭된 링크에 "active" 클래스 추가
                $(this).addClass("active");

                // 클릭된 링크의 부모 요소의 형제 요소들의 "active" 클래스 제거
                $(this).siblings().removeClass("active");

                // 클릭된 링크의 data-filter 속성 값을 가져옴
                const filterValue = $(this).data("filter");

                // 모든 뉴스 섹션을 숨김
                $(".news-section").hide();

                // data-filter 속성 값과 일치하는 뉴스 섹션을 보여줌
                $(`.news-section[data-filter='${filterValue}']`).show();
            });

            // Prev 버튼 클릭 이벤트 처리
            $(".custom-pagination .prev").click(function(e) {
                e.preventDefault();

                // 현재 "active" 클래스를 가진 링크의 이전 링크를 선택
                const prevLink = $(".custom-pagination a.active").prev("a[data-filter]");

                // 이전 링크가 존재하면 해당 링크를 클릭한 것과 동일한 처리 수행
                if (prevLink.length > 0) {
                    prevLink.click();
                } else {
                    // 현재 "active" 클래스를 가진 링크가 첫 번째 링크라면 마지막 링크를 선택하여 클릭
                    $(".custom-pagination a:last-child[data-filter]").click();
                }
            });

            // Next 버튼 클릭 이벤트 처리
            $(".custom-pagination .next").click(function(e) {
                e.preventDefault();

                // 현재 "active" 클래스를 가진 링크의 다음 링크를 선택
                const nextLink = $(".custom-pagination a.active").next("a[data-filter]");

                // 다음 링크가 존재하면 해당 링크를 클릭한 것과 동일한 처리 수행
                if (nextLink.length > 0) {
                    nextLink.click();
                } else {
                    // 현재 "active" 클래스를 가진 링크가 마지막 링크라면 첫 번째 링크를 선택하여 클릭
                    $(".custom-pagination a:first-child[data-filter]").click();
                }
            });

            function performSearch() {
                const searchKeyword = $("#searchInput").val().toLowerCase();

                // 모든 뉴스 섹션을 숨김
                $(".news-section").hide();

                // 검색어와 일치하는 뉴스 섹션을 보여줌
                const matchedSections = $(".news-section").filter(function() {
                    return $(this).text().toLowerCase().includes(searchKeyword);
                });

                if (matchedSections.length === 0) {
                    // 검색 결과가 없는 경우, alert 창으로 메시지를 보여줌
                    alert("해당 내용이 없습니다.");
                } else {
                    // 검색 결과가 있는 경우, 해당 섹션을 보여줌
                    matchedSections.show();
                }
            }

            // 검색 버튼 클릭 이벤트 처리
            $("#searchButton").click(function() {
                performSearch();
            });

            // 검색창 엔터키 이벤트 처리
            $("#searchInput").on("keydown", function(event) {
                if (event.key === "Enter") {
                    event.preventDefault();
                    performSearch();
                }
            });
        });