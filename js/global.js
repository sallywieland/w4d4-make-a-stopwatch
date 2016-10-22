// alert('it works!')
var tens = 0
var secs = 0
var mins = 0
var button = document.getElementById('start_pause')
var timer

button.addEventListener('click', function() {
    clearInterval(timer)
    timer = setInterval(startStopWatch, 100)

    if (button.innerHTML === 'START' || button.innerHTML === 'CONTINUE') {
        button.innerHTML = 'PAUSE'
    }
    else {
        clearInterval(timer)
        button.innerHTML = 'CONTINUE'
    }
})
button.addEventListener('dblclick', function() {

})

function startStopWatch() {
    tens++
    if (tens < 9) {
        document.getElementById('tens').innerHTML = '0' + tens
    }
    if (tens > 9) {
        document.getElementById('tens').innerHTML = tens
    }
    if (tens > 99) {
        secs++
        document.getElementById('secs').innerHTML = '0' + secs
        tens = 0
        document.getElementById('tens').innerHTML = '0' + 0
    }
    if (secs > 9) {
        document.getElementById('secs').innerHTML = secs
    }
    if (secs > 59) {
        mins++
        document.getElementById('mins').innerHTML = '0' + mins
        secs = 0
        document.getElementById('secs').innerHTML = 0
    }
}

//
// document.getElementById('stopwatch_face').innerHTML = counter
//

//
// function stopWatchStart() {
//     counter++
//     document.getElementById('stopwatch_face').innerHTML = counter
// }
//
// document.getElementById('start_pause').addEventListener('click', function() {
//     if (this.innerHTML === 'START') {
//         stopWatchStart()
//         this.innerHTML = 'PAUSE'
//     }
//     else {
//         this.innerHTML = 'CONTINUE'
//     }
// })
//
//
//
// function start() {
//         timer = setInterval(stopWatch, 1000)
// }

// document.getElementById('start_pause').addEventListener('click', function() {
//     clearInterval(timer)
//
//     if (this.innerHTML === 'START') {
//         start()
//         this.innerHTML = 'PAUSE'
//     }
//     else {
//         this.innerHTML = 'START'
//     }
//
// })
// start()
