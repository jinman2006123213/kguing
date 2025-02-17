let currentLevel = 1; // 현재 무기 강화 상태
let enhanceButton = document.getElementById('enhanceButton');
let weaponStatus = document.getElementById('weaponStatus');
let resultMessage = document.getElementById('resultMessage');
let weaponImage = document.getElementById('weaponImage');

// 무기 이미지 배열 (인터넷에서 가져온 이미지 URL)
const weaponImages = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sword_icon_1.png/64px-Sword_icon_1.png', // +1 무기
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Sword_icon_2.png/64px-Sword_icon_2.png', // +2 무기
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Sword_icon_3.png/64px-Sword_icon_3.png', // +3 무기
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Sword_icon_4.png/64px-Sword_icon_4.png', // +4 무기
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Sword_icon_5.png/64px-Sword_icon_5.png'  // +5 무기
];

enhanceButton.addEventListener('click', function() {
    let y = 100 - 10 * currentLevel; // y 확률 계산
    let randomChance = Math.random() * 100; // 0-100 사이의 랜덤 수 생성

    if (randomChance < y) {
        currentLevel++; // 강화 성공
        resultMessage.innerText = `강화 성공! 현재 무기 상태: [ +${currentLevel} 무기 ]`;
    } else {
        resultMessage.innerText = `강화 실패! 현재 무기 상태: [ +${currentLevel} 무기 ]`;
        
        // 50% 확률로 강화 상태 강등
        if (Math.random() < 0.5 && currentLevel > 1) {
            currentLevel--; // 강화 상태 강등
            resultMessage.innerText += ` 강등되어 [ +${currentLevel} 무기 ]가 되었습니다.`;
        }
    }

    // 무기 이미지 업데이트
    weaponStatus.innerHTML = `<img id="weaponImage" src="${weaponImages[currentLevel - 1]}" alt="무기 이미지" />현재 무기 상태: [ +${currentLevel} 무기 ]`;
});
