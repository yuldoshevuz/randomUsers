const body = document.querySelector('body')
const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')

const localMode = localStorage.getItem('mode') ? localStorage.getItem('mode') : 0

// toggle mode
if (localMode === 'dark-mode') {
    toggleMode()
} else {
    body.classList.remove('dark-mode')
}
function toggleMode() {
    darkBtn.classList.toggle('hidden')
    lightBtn.classList.toggle('hidden')
    body.classList.toggle('dark-mode')
}
darkBtn.addEventListener('click', () => {
    toggleMode()
    localStorage.setItem('mode', 'dark-mode')
})
lightBtn.addEventListener('click', () => {
    toggleMode()
    localStorage.setItem('mode', '')
})