const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let currentIndex = 0;

function displayCurrentLetter() {
    const currentLetter = letters[currentIndex];
    document.getElementById('letter-container').innerText = currentLetter;
}

function showNextLetter() {
    currentIndex++;
    if (currentIndex >= letters.length) {
        currentIndex = 0; // Reset index if end of alphabet is reached
    }
    displayCurrentLetter();
}

const nextButton = document.getElementById('next-button');
nextButton.addEventListener('click', showNextLetter);

// Initial display
displayCurrentLetter();
