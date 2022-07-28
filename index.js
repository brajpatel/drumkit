// Play audio on key press
const drumMachine = document.getElementById('drum-machine')
const audioName = document.getElementById('display')
const keys = Array.from(document.querySelectorAll('.drum-pad'))

// Add event listeners
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound)
window.addEventListener('keydown', displayName)

// Play audio
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    if(!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

// Remove playing class after key press
function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('playing')
}

// Display audio name
function displayName(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    audioName.innerHTML = audio.innerText
}

// Theme toggle
const body = document.querySelector('body')
const themeBtn = document.getElementById('theme')
const lightText = document.getElementById('light-text')
const darkText = document.getElementById('dark-text')
const sun = document.getElementById('sun')
const moon = document.getElementById('moon')

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark')
    lightText.classList.toggle('show')
    darkText.classList.toggle('hide')
    sun.classList.toggle('show')
    moon.classList.toggle('hide')
})