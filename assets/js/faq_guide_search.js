
  function search() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const faqItems = document.querySelectorAll('#faq .faq-list li');

    if (searchInput.length === 1) {
      alert('더 길게 입력해주세요.');
      return;
    }

    let hasMatch = false; // 일치하는 내용이 있는지 여부를 나타내는 변수

    faqItems.forEach((item) => {
      const content = item.querySelector('.collapsed').textContent.toLowerCase();
      const pTags = item.querySelectorAll('p');

      if (content.includes(searchInput)) {
        item.style.display = 'block';
        hasMatch = true; // 일치하는 내용이 있음을 표시

        // p태그 내용의 색상 변화 초기화
        pTags.forEach((pTag) => {
          pTag.style.color = '#000'; // 검정색으로 변경
        });
      } else {
        item.style.display = 'none';
      }
    });

    // 일치하는 내용이 없을 때 메시지 출력
    const noMatchMessage = document.getElementById('no-match-message');
    if (hasMatch) {
      noMatchMessage.style.display = 'none'; // 메시지 숨김
    } else {
      noMatchMessage.style.display = 'block'; // 메시지 표시
      alert('일치하는 내용을 찾을 수 없습니다.'); // 일치하는 내용이 없을 때 알림 메시지 출력
    }
  }

  function activateElement(element) {
    element.querySelector('.collapsed').click(); // li 요소 안에 있는 div 요소가 클릭되도록 설정
  }

  document.getElementById('search-input').addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      search();
    }
  });

  document.getElementById('search-btn').addEventListener('click', () => {
    search();
  });

  document.querySelectorAll('#faq .faq-list li').forEach((element) => {
    element.addEventListener('click', () => {
      activateElement(element);
    });

    element.addEventListener('mouseover', () => {
      element.classList.add('active'); // li 요소에 마우스를 올리면 hover 효과가 발생하도록 설정
    });

    element.addEventListener('mouseout', () => {
      element.classList.remove('active'); // li 요소에서 마우스를 떼면 hover 효과가 사라지도록 설정
    });
  });
