let MAX_NUMBER = 100
let MIN_NUMBER = 0

let minGuess = MIN_NUMBER
let maxGuess = MAX_NUMBER

document.getElementById('too-high-btn').addEventListener('click', function () {
   setMessage(`Is it ${guess-- - 1}`)
 
})

document.getElementById('too-low-btn').addEventListener('click', function () {
   setMessage(`Is it ${guess++ + 1}`)
    
})

document.getElementById('is-correct-btn').addEventListener('click', function () {
    setMessage('Woho! :)')
    
})


function setMessage(msg) {
    document.getElementById('message').innerText = msg
}

function start() {
    document.getElementById('before-start').style.display = 'none'
    document.querySelector('main').style.display = 'block'

    

    setMessage(`Is it ${guess}?`)
}

let guess = 50

document
    .getElementById('start-btn')
    .addEventListener('click', start)

