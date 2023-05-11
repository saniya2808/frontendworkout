const exerciseTitle = document.querySelector('.exercise-title h3');

const previousButton = document.querySelector('.prev-arrow');
const nextButton = document.querySelector('.next-arrow');
const exercises = document.querySelectorAll('.exercise');
const exerciseName = document.querySelector('.exercise-container h3');

let currentExerciseIndex = 0;

function updateExercises() {
    exercises.forEach((exercise, index) => {
        if (index === currentExerciseIndex) {
            exercise.style.transform = 'rotateY(0deg) translateZ(0)';
            exercise.style.opacity = '1';
            exerciseTitle.textContent = exercise.dataset.title;
        } else {
            const rotation = 45 + 45 * (index - currentExerciseIndex);
            const translation = -1000 - 1000 * Math.abs(index - currentExerciseIndex);
            exercise.style.transform = `rotateY(${rotation}deg) translateZ(${translation}px)`;
            exercise.style.opacity = '0.5';
        }
    });
}

previousButton.addEventListener('click', () => {
    currentExerciseIndex = (currentExerciseIndex - 1 + exercises.length) % exercises.length;
    updateExercises();
});

nextButton.addEventListener('click', () => {
    currentExerciseIndex = (currentExerciseIndex + 1) % exercises.length;
    updateExercises();
});

updateExercises();


document.addEventListener("DOMContentLoaded", () => {
    const bgMusic = document.getElementById("bg-music");
    bgMusic.volume = 0.3;

    const playMusicButton = document.getElementById("play-music");
    playMusicButton.addEventListener("click", () => {
        bgMusic.play();
    });
});

function playHoverSound() {
    const hoverSound = document.getElementById("hover-sound");
    hoverSound.currentTime = 0;
    hoverSound.play();
}

document.querySelectorAll('.nav-arrow, .exercise img, nav ul li a').forEach((element) => {
    element.addEventListener('mouseover', playHoverSound);
});

// Smooth scrolling to section when clicking on nav link
document.querySelectorAll('nav a.scroll-link').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});
