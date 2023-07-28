document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("click", function (e) {
            this.classList.toggle("active");
            closeOtherDropdowns(this);
        });
    });

    function closeOtherDropdowns(currentDropdown) {
        dropdowns.forEach((dropdown) => {
            if (dropdown !== currentDropdown) {
                dropdown.classList.remove("active");
            }
        });
    }

    document.querySelector("#menuBtn").addEventListener("click", function (e) {
        const menuWrap = document.querySelector(".menuWrap");
        if (menuWrap.classList.contains("on")) {
            // 메뉴 slide
            menuWrap.classList.remove("on");
            document.getElementById("menuBtn").src = "img/menu_bar_m.png";
            document.querySelector("#menuBtn").classList.remove("btnRotate");
            document.querySelector("#dimmed").remove();
        } else {
            // 메뉴 slideIn
            menuWrap.classList.add("on");
            document.getElementById("menuBtn").src = "img/menu_close_m.png";
            document.querySelector("#menuBtn").classList.add("btnRotate");
            let div = document.createElement("div");
            div.id = "dimmed";
            document.body.append(div);

            // 페이지 스크롤 락 모바일 이벤트 차단
            document
                .querySelector("#dimmed")
                .addEventListener("scroll touchmove touchend mousewheel", function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                });
        }

        // 드롭다운 닫기
        closeOtherDropdowns(null);
    });
});