// alert('It works!') // ensures HTML file is connecting with JS file

// var name = 'Christy'
// // alert(name) // runs immediately
//
// function runsLater () {
//     alert(name)
// }
 // even functions run immediately

// var firstTimeout = setTimeout(runsLater, 3000) // setTimeout is a built in function of JS within the 'window' concept
// console.log(firstTimeout) // will show what queue number

// var secondTimeout = setTimeout(function() { // can do an anonymous function
//     alert('this comes later')
// }, 5000)
// console.log(secondTimeout)
// // even when both functions have same amount of time, the first one will come first because JS reads down page
//
// clearTimeout(firstTimeout) // clears whatever setTimeout variable called
// clearTimeout(secondTimeout)

// var actionTimer // setting variable to be used below (needs to be outside of scope/function)
// var counter = 0
//
// document.getElementById('action').addEventListener('click', function() {
//     counter++
//     this.innerHTML = counter
//
//     clearTimeout(actionTimer) // clearTimeout is resetting
//     actionTimer = setTimeout(() => { // using arrow function because this. is being referred to the #action button
//         this.innerHTML = '0'
//         counter = 0
//         }, 2000)
// })

var counter = 0

function doThis() {
    counter++
    console.log(counter)
}

var timer // makes it shared between all
function start() { // we create a function be we will use start function later
    timer = setInterval(doThis, 1000) // adds number 1 second at a time
}
// start()

document.getElementById('action').addEventListener('click', function() {
    clearInterval(timer) // same as clearTimeout

    if (this.innerHTML === 'START') {
        start()
        this.innerHTML = 'Pause'
    }
    else {
        this.innerHTML = 'Paused'
    }
})
start()
// var animationId // needs to be global so animation/function can keep reaching it
// function animationLoop() {
//     var button = document.getElementById('action')
//     var top = Number(getComputedStyle(button).top.replace('px', '')) // css style - top: 0;
//
//     if (top >= 600) { // bounced button back to top
//         top = 0
//     }
//
//     button.style.position = 'absolute'
//     button.style.top = top + 5 + 'px' // number decides speed of animation
//
//
//     animationId = requestAnimationFrame(animationLoop) // requestAnimationFrame built in function in chrome
// }
// animationLoop()

// recursive loop - when a function loops on itself
    // browser usually doesn't like except the requestAnimationFrame is called it knows we are trying to do an animation

// var animatedCircle
// circle.style.width = '100px';
// circle.style.height = '100px';
//
// function animationCircle() {
//     var circle = document.getElementById('circle')
//     var width = Number(getComputedStyle(circle).width.replace('px', ''))
//     var height = Number(getComputedStyle(circle).height.replace('px', ''))
//
//         if (circle.style.width >= '400px' && circle.style.width >= '400px') {
//
//         }
//
//     circle.style.borderRadius = "400px";
//     circle.style.backgroundColor = "blue"
//     circle.style.width = width + 1 + 'px';
//     circle.style.height = height + 1 + 'px';
//
//     animatedCircle = requestAnimationFrame(animationCircle)
// }
// animationCircle()
