let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homePoints = 0
let guestPoints = 0

// Add points to Home Team
function addOneHome () {
    homePoints += 1
    homeScore.textContent = homePoints
}

function addTwoHome () {
    homePoints += 2
    homeScore.textContent = homePoints
}

function addThreeHome () {
    homePoints += 3
    homeScore.textContent = homePoints
}

// Add points to Guest Team

function addOneGuest () {
    guestPoints += 1
    guestScore.textContent = guestPoints
}

function addTwoGuest () {
    guestPoints += 2
    guestScore.textContent = guestPoints
}

function addThreeGuest () {
    guestPoints += 3
    guestScore.textContent = guestPoints
}


// reset game score to zero

function resetScore () {
    homePoints = 0
    guestPoints = 0
    homeScore.textContent = homePoints
    guestScore.textContent = guestPoints
}