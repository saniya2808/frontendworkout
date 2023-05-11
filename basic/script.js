// Smooth scrolling to section when clicking on nav link
// Smooth scrolling to section when clicking on nav link
document.querySelectorAll('nav a.scroll-link').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});


document.addEventListener("DOMContentLoaded", () => {
    const bgMusic = document.getElementById("bg-music");
    bgMusic.volume = 0.3;

    const playMusicButton = document.getElementById("play-music");
    playMusicButton.addEventListener("click", () => {
        bgMusic.play();
    });

    // Play hover sound effect on start button hover
    const startButton = document.querySelector(".lets-play");
    const hoverSound = document.getElementById("hover-sound");
    startButton.addEventListener("mouseover", () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
    });
});

// New code to add hover sound to the nav list items
const navItems = document.querySelectorAll("nav ul li");
navItems.forEach(item => {
    item.addEventListener("mouseover", () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
    });
});
// ...


