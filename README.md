<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Happy 21st Birthday Oliv! 🎂</title>
    <link rel="stylesheet" href="oliv_style.css">
</head>
<body>
    <!-- Birthday Page -->
    <div id="birthday-page" class="page active">
        <div class="container">
            <div class="birthday-box">
                <h1>Happy 21st Birthday Oliv! 🎂</h1>
                <p>I hope na nalaban nimo imong course and I'm proud of you!</p>
                
                <!-- Animated Cake -->
                <div class="cake-container">
                    <div class="cake">
                        <div class="cake-layer layer-1"></div>
                        <div class="cake-layer layer-2"></div>
                        <div class="cake-layer layer-3"></div>
                        <div class="candles">
                            <div class="candle"></div>
                            <div class="candle"></div>
                            <div class="candle"></div>
                            <div class="candle"></div>
                            <div class="candle"></div>
                        </div>
                    </div>
                    <div class="cake-plate"></div>
                </div>
                
                <div class="birthday-message">
                    <p>🎉 Welcome to your 21st year! 🎉</p>
                    <p>You're amazing and I'm so proud of you! 💜</p>
                </div>
                
                <button id="next-birthday-btn" class="next-button">Next</button>
            </div>
        </div>
    </div>

    <!-- Sorry Page -->
    <div id="sorry-page" class="page">
        <div class="container">
            <div class="sorry-box">
                <h1>I'm Sorry 💜</h1>
                <div class="sorry-message">
                    <p>I'm sorry for the things I say to you na nakasakit sa imoha.</p>
                    <p>Sometimes I lose patience and that's human.</p>
                    <p>But I want to be better for you.</p>
                    <p>I care about you more than words can say.</p>
                </div>
                <div class="heart">💜</div>
                <button id="next-sorry-btn" class="next-button">Next</button>
            </div>
        </div>
    </div>

    <!-- Music Player Page -->
    <div id="music-page" class="page">
        <div class="container">
            <h2>Listen to My Heart</h2>
            <div class="music-player">
                <h3>🎵 Listen to My Heart</h3>
                <audio id="audio-player" controls>
                    <source src="https://www.bensound.com/bensound-music/bensound-romantic.mp3" type="audio/mpeg">
                    <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" type="audio/wav">
                    Your browser doesn't support audio.
                </audio>
                <div class="music-controls">
                    <button id="play-btn" class="control-btn">▶️ Play</button>
                    <button id="pause-btn" class="control-btn">⏸️ Pause</button>
                </div>
                <p class="music-note">💜 This romantic music will play in the background...</p>
            </div>
            <button id="press-me-btn" class="press-me-button">Press Me 💜</button>
        </div>
    </div>

    <!-- Purple Flower Page -->
    <div id="flower-page" class="page">
        <!-- Background Music -->
        <audio id="background-music" loop>
            <source src="https://www.bensound.com/bensound-music/bensound-romantic.mp3" type="audio/mpeg">
            <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" type="audio/wav">
        </audio>
        
        <div class="container">
            <div class="flower-container">
                <div class="flower">
                    <div class="petal"></div>
                    <div class="petal"></div>
                    <div class="petal"></div>
                    <div class="petal"></div>
                    <div class="petal"></div>
                    <div class="petal"></div>
                    <div class="center"></div>
                </div>
                <div class="stem"></div>
                <div class="leaf"></div>
                <div class="leaf leaf-right"></div>
            </div>
            <h2>For You Oliv 💜</h2>
            <p>This purple flower represents my promise to you</p>
            <p>I'll do better this time 💜</p>
            <div class="music-controls-flower">
                <button id="play-bg-music" class="control-btn">🎵 Play Background Music</button>
                <button id="pause-bg-music" class="control-btn" style="display: none;">⏸️ Pause Music</button>
            </div>
            <p class="music-info">💜 Click play to hear the romantic music</p>
            <button id="back-btn" class="next-button">Start Over</button>
        </div>
    </div>

    <script src="oliv_script.js"></script>
</body>
</html>
