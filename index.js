let MAX_NUMBER = 100
let MIN_NUMBER = 0

let minGuess = MIN_NUMBER
let maxGuess = MAX_NUMBER


document.getElementById('too-high-btn').addEventListener('click', function () {
    let MAX_NUMBER = MAX_NUMBER / 2
   setMessage(`Is it ${guess}`)
 
})

document.getElementById('too-low-btn').addEventListener('click', function () {
   let MIN_NUMBER = minGuess + guess
    setMessage(`Is it ${guess}`)
    
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


document
    .getElementById('start-btn')
    .addEventListener('click', start)

