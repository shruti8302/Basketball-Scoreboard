
let homeScore = 0
let homeEl = document.getElementById("home")

let guestScore = 0
let guestEl = document.getElementById("guest")

function homeAdd1(){
    homeScore += 1
    homeEl.textContent = homeScore
}

function homeAdd2(){
    homeScore += 2
    homeEl.textContent = homeScore
}

function homeAdd3(){
    homeScore += 3
    homeEl.textContent = homeScore
}

function add1(){
    guestScore += 1
    guestEl.textContent = guestScore
}

function add2(){
    guestScore += 2
    guestEl.textContent = guestScore
}

function add3(){
    guestScore += 3
    guestEl.textContent = guestScore
}