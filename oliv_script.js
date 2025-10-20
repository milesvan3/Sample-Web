document.addEventListener('DOMContentLoaded', function() {
    const birthdayPage = document.getElementById('birthday-page');
    const sorryPage = document.getElementById('sorry-page');
    const musicPage = document.getElementById('music-page');
    const flowerPage = document.getElementById('flower-page');
    
    const nextBirthdayBtn = document.getElementById('next-birthday-btn');
    const nextSorryBtn = document.getElementById('next-sorry-btn');
    const pressMeBtn = document.getElementById('press-me-btn');
    const backBtn = document.getElementById('back-btn');
    
    const audioPlayer = document.getElementById('audio-player');
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const backgroundMusic = document.getElementById('background-music');
    const playBgMusic = document.getElementById('play-bg-music');
    const pauseBgMusic = document.getElementById('pause-bg-music');
    
    // Navigation functions
    function showPage(page) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        page.classList.add('active');
    }
    
    // Button event listeners
    nextBirthdayBtn.addEventListener('click', function() {
        showPage(sorryPage);
    });
    
    nextSorryBtn.addEventListener('click', function() {
        showPage(musicPage);
    });
    
    pressMeBtn.addEventListener('click', function() {
        showPage(flowerPage);
        // Start background music when flower page loads
        setTimeout(() => {
            if (backgroundMusic) {
                backgroundMusic.play().catch(e => {
                    console.log('Autoplay prevented, user needs to interact first');
                });
            }
        }, 500);
    });
    
    backBtn.addEventListener('click', function() {
        showPage(birthdayPage);
    });
    
    // Music player controls
    playBtn.addEventListener('click', function() {
        audioPlayer.play();
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'inline-block';
    });
    
    pauseBtn.addEventListener('click', function() {
        audioPlayer.pause();
        playBtn.style.display = 'inline-block';
        pauseBtn.style.display = 'none';
    });
    
    // Audio event listeners
    audioPlayer.addEventListener('ended', function() {
        playBtn.style.display = 'inline-block';
        pauseBtn.style.display = 'none';
    });
    
    // Background music controls
    playBgMusic.addEventListener('click', function() {
        if (backgroundMusic) {
            backgroundMusic.play();
            playBgMusic.style.display = 'none';
            pauseBgMusic.style.display = 'inline-block';
        }
    });
    
    pauseBgMusic.addEventListener('click', function() {
        if (backgroundMusic) {
            backgroundMusic.pause();
            playBgMusic.style.display = 'inline-block';
            pauseBgMusic.style.display = 'none';
        }
    });
    
    // Add some sparkle effects
    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.top = Math.random() * window.innerHeight + 'px';
        sparkle.style.fontSize = '20px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.animation = 'sparkle 2s ease-out forwards';
        sparkle.style.zIndex = '1000';
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 2000);
    }
    
    // Add sparkle animation to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkle {
            0% {
                opacity: 1;
                transform: scale(0) rotate(0deg);
            }
            50% {
                opacity: 1;
                transform: scale(1) rotate(180deg);
            }
            100% {
                opacity: 0;
                transform: scale(0) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Create sparkles periodically
    setInterval(createSparkle, 3000);
    
    // Add click effects to buttons
    document.querySelectorAll('.next-button, .control-btn, .press-me-button').forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Add birthday confetti effect
    function createConfetti() {
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7'];
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.animation = 'confettiFall 3s linear forwards';
        confetti.style.zIndex = '1000';
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
    
    // Add confetti animation
    const confettiStyle = document.createElement('style');
    confettiStyle.textContent = `
        @keyframes confettiFall {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(confettiStyle);
    
    // Create confetti on birthday page
    if (birthdayPage.classList.contains('active')) {
        setInterval(createConfetti, 500);
    }
    
    // Add confetti when birthday page is shown
    nextBirthdayBtn.addEventListener('click', function() {
        setTimeout(() => {
            setInterval(createConfetti, 500);
        }, 1000);
    });
});
