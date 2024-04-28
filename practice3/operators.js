let hasCompletedCourse = true
let givesCertificate = true

if (hasCompletedCourse && givesCertificate) {
    generateCertificate()
}

function generateCertificate() {
    console.log("Generating certificate....")
}

let hasSolvedChallenge = false
let hasHintsLeft = false

if (hasSolvedChallenge === false && hasHintsLeft === false) {
    showSolution()
}

function showSolution() {
    console.log("Showing the solution....")
}

let likesDocumentaries = true
let likesStartups = true

if (likesDocumentaries === true || likesStartups === true) {
    recommendMovie()
}

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}