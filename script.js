document.getElementById('surprise-button').addEventListener('click', function() {
    // 显示惊喜消息
    const surpriseMessage = document.getElementById('surprise-message');
    surpriseMessage.classList.remove('hidden');

    // 播放背景音乐
    const birthdayMusic = document.getElementById('birthday-music');
    birthdayMusic.play().catch(error => {
        console.error("音频播放失败:", error);
    });

    // 创建彩纸效果
    createConfetti();
});

function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.left = `${Math.random() * 100}vw`;
        confettiPiece.style.animationDelay = `${Math.random() * 5}s`;
        confettiPiece.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confettiContainer.appendChild(confettiPiece);
    }
}