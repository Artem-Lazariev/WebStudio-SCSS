const team1 = document.getElementById("team1")
const team2 = document.getElementById("team2")
const team3 = document.getElementById("team3")
const team4 = document.getElementById("team4")

function changeImg() {
    if (window.devicePixelRatio > 1) {
        if (window.innerWidth >= 756) {
            team1.src = "../img/team1-d.webp"
            team2.src = "../img/team2-d.webp"
            team3.src = "../img/team3-d.webp"
            team4.src = "../img/team4-d.webp"
        }
        if (window.innerWidth < 756 && window.innerWidth >= 480) {
            team1.src = "../img/team1-t.webp"
            team2.src = "../img/team2-t.webp"
            team3.src = "../img/team3-t.webp"
            team4.src = "../img/team4-t.webp"
        }
        if (window.innerWidth < 480) {
            team1.src = "../img/team1.webp"
            team2.src = "../img/team2.webp"
            team3.src = "../img/team3.webp"
            team4.src = "../img/team4.webp"
        }
    } else {
        team1.src = '../img/igor.jpg'
        team2.src = '../img/olha.jpg'
        team3.src = '../img/mukola.jpg'
        team4.src = '../img/michael.jpg'
    }
}
changeImg()
window.addEventListener("resize", changeImg)