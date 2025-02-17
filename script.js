// 버튼 요소를 선택합니다.
const generateButton = document.getElementById('generateBtn');
const gridContainer = document.getElementById('gridContainer');
let imageCount = 0; // 이미지 개수를 추적하는 변수

// 클릭 이벤트에 대한 함수를 정의합니다.
function handleButtonClick() {
    // 이미지 개수가 30개 미만일 때만 이미지 생성
    if (imageCount < 30) {
        // 랜덤 숫자를 생성합니다.
        const randomNumber = Math.floor(Math.random() * 1000) + 1; // 1부터 1000까지의 랜덤 숫자 생성

        // 새로운 이미지 요소를 생성합니다.
        const img = document.createElement('img');
        img.src = `https://picsum.photos/500?random=${randomNumber}`; // 랜덤 숫자를 URL에 추가
        img.alt = '랜덤 이미지'; // 이미지 설명 추가  
        
        // 클릭 이벤트 리스너를 추가하여 이미지 클릭 시 삭제하도록 설정
        img.addEventListener('click', function() {
            gridContainer.removeChild(img); // 클릭된 이미지를 삭제
            imageCount--; // 이미지 개수 감소
        });

        // gridContainer에 이미지를 추가합니다.
        gridContainer.appendChild(img);
        imageCount++; // 이미지 개수 증가
    } else {
        // 이미지 갯수가 30개 초과 시 confirm 창 띄우기
        if (confirm('이미지가 30개 찼습니다. 모든 사진을 지우시겠습니까?')) {
            gridContainer.innerHTML = ''; // 모든 이미지를 삭제
            imageCount = 0; // 이미지 개수 초기화
        }
    }
}

// 선택한 버튼에 이벤트 리스너를 추가합니다.
generateButton.addEventListener('click', handleButtonClick);