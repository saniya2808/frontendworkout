document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('video');
    var playMusicButton = document.getElementById('play-music');
    var bgMusic = document.getElementById('bg-music');
    var hoverSound = document.getElementById('hover-sound');

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                video.srcObject = stream;
                video.play();
            });
    }

    playMusicButton.addEventListener('click', function () {
        if (bgMusic.paused) {
            bgMusic.play();
            playMusicButton.textContent = "Pause Music";
        } else {
            bgMusic.pause();
            playMusicButton.textContent = "Play Music";
        }
    });

    var navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function (link) {
        link.addEventListener('mouseenter', function () {
            hoverSound.play();
        });
    });
});
