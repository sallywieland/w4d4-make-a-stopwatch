// alert('it works!')

// VARIABLES ! --> setting up the variables at top of page for organization!

var tens = 0
var secs = 0
var mins = 0
// sets starting points for the timers at 0
tensSpan = document.getElementById('tens')
secsSpan = document.getElementById('secs')
minsSpan = document.getElementById('mins')
// grabs the span tags from HTML file where the numbers will appear on screen --> REWORD
var button = document.getElementById('start_pause')
// grabs the button with the ID of 'start_pause' from HTML file --> created variable because it's easier for me to understand.
var timer // leaving this variable blank so that it can be defined under the EventListener --> defined it here for organization.
var timerReset // setting variable for the timerReset function --> defined it here for organization
var backgroundTimer // leaving this variable blank so that it can be defined under an EventListener
var colorsArray = ['#84B59F', '#69A297', '#A3C9A8'] // creating the array for the backgroundChange function to loop through.
var backgroundCount = 0 // setting the starting point of the backgroundChange function at 0.
var shortcuts = document.getElementById('start_pause') // grabbing the start button from the HTML file to connect with the keypress event

// EVENTS !

button.addEventListener('click', function() { // creating the click event for the button
    clearInterval(timer) // UNSURE WHY THIS IS NEEDED ALONG WITH THE OTHER ONE --> ASK
    // first time function runs, it ignores this clearInterval.
    timer = setInterval(startStopWatch, 10)
    // setting the var timer to a setInterval, calling the startStopWatch function

    if (button.innerHTML === 'START' || button.innerHTML === 'CONTINUE') {
        // if the button text is START, when it's clicked, show pause.
        // if the button text is CONTINUE, show pause.
        // || --> means OR. use this because it is basically doing the same process as the START.
        button.innerHTML = 'PAUSE' // changes button text to PAUSE when event click occurs.
    }
    else {
        clearInterval(timer) // pauses the timer because clearInterval stops the repeating process set above.
        button.innerHTML = 'CONTINUE' // changes button text from PAUSE to CONTINUE
    }
})

button.addEventListener('click', function() { // creating the click event that links to the background color changing.
    clearInterval(backgroundTimer)

    backgroundTimer = setInterval(backgroundChange, 1000)
    // setInterval for the background colors to change --> calling the backgroundChange function and setting it to change every second.
    if (button.innerHTML === 'CONTINUE' ||button.innerHTML === 'START') { // if the button text is 'CONTINUE' or 'START', it pauses the background color from changing.
        clearInterval(backgroundTimer)
    }
})

button.addEventListener('dblclick', function() { // creating the double click event to reset the timer.
    clearInterval(timer) // stops the currently running timer
    tens = '00'
    secs = '00'
    mins = '00'
    tensSpan.innerHTML = tens
    secsSpan.innerHTML = secs + ':'
    minsSpan.innerHTML = mins + ':'
    // when double click event happens, sets the text back to be double zeros because of the variables stated above
    if (tens === '00' && secs === '00' && mins === '00') {
        button.innerHTML = 'START'
    // when the tens, secs, & mins sections all are set at 00 --> button text reverts back to stating START
    }
})

shortcuts.addEventListener('keypress', pressKeys) // creating the keypress event to pause and continue timer by pressing the enter key --> UNSURE OF HOW TO GET IT SO THE EVENT ACTUALLY STARTS THE CLOCK.


// FUNCTIONS !

// timer reset after 15 seconds being paused
timerReset = setTimeout(function() { // setTimeout function states that if timer is untouched in 15 seconds, it resets ONLY when button text reads 'CONTINUE'
    if (button.innerHTML === 'CONTINUE') {
    clearInterval(timer) // stops the currently running timer
    tens = '00'
    secs = '00'
    mins = '00'
    tensSpan.innerHTML = tens
    secsSpan.innerHTML = secs + ':'
    minsSpan.innerHTML = mins + ':'
    }
}, 15000)
function startStopWatch() { // function for the stopwatch to actually start.
    tens++ // pulls from var tens above and begins adding +1
    if (tens < 9) {
        document.getElementById('tens').innerHTML = '0' + tens
    // if the tenths of a second section is less than 10, add a zero (through concatenation) to text in order to make it look like a traditional stopwatch.
    }
    if (tens > 9) {
        document.getElementById('tens').innerHTML = tens
    // if the tenths of a second section is greater than 9, take away concatenation stated above.
    }
    if (tens > 99) {
        secs++
        document.getElementById('secs').innerHTML = '0' + secs + ':'
    // when the tenths of a second section is great than 99, begin the var secs that +1 --> adds zero (through concatenation)
        tens = 0 // sets the tens variable back to zero.
        document.getElementById('tens').innerHTML = '0' + 0 // UNSURE OF WHAT THIS DOES --> ASK
    }
    if (secs > 9) {
        document.getElementById('secs').innerHTML = secs + ':'
    // if the seconds section is greater than 9, take away concatenation stated above.
    }
    if (secs > 59) {
        mins++
        document.getElementById('mins').innerHTML = '0' + mins + ':'
    // when the seconds sections is greater than 59, begin the var mins that +1 --> adds zero (through concatenation)
        secs = 0 // sets the secs variable back to zero.
        document.getElementById('secs').innerHTML = 0 // UNSURE OF WHAT THIS DOES -->
    }
}
function backgroundChange(){
    document.body.style.backgroundColor = colorsArray[backgroundCount];
    // grabbing the HTML element with ID of 'stopwatch_face' and setting the background color to go through the colorsArray variable starting at 0 because of the backgroundCount variable.
    backgroundCount++; // add +1 to loop through each item of the colorsArray.
    if (backgroundCount == colorsArray.length) {
        backgroundCount = 0;
    // when the backgroundCount goes through the length of the array, return the backgroundCount back to 0, or the start of the array.
    }
}
function pressKeys(event) {
    if (event.key === 'Enter') { // grabbing the 'enter' key
        startStopWatch()
    // when the enter button is pressed, the startStopWatch function below begins.
    }
    else if (event.key == 'r') { // grabbing the 'r' key for reset
        clearInterval(timer)
        tens = '00'
        secs = '00'
        mins = '00'
        tensSpan.innerHTML = tens
        secsSpan.innerHTML = secs + ':'
        minsSpan.innerHTML = mins + ':'
        clearInterval(backgroundTimer)
        button.innerHTML = 'START'
    }
}
