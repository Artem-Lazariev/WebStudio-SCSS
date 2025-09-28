const card1 = document.getElementById("card1")
const card2 = document.getElementById("card2")
const card3 = document.getElementById("card3")
const card4 = document.getElementById("card4")

const card5 = document.getElementById("card5")
const card6 = document.getElementById("card6")
const card7 = document.getElementById("card7")
const card8 = document.getElementById("card8")
const card9 = document.getElementById("card9")

function changeimg() {
    if (window.devicePixelRatio > 1) {
        if (window.innerWidth >= 756) {
            card1.src = "../img/card1-d.webp"
            card2.src = "../img/card2-d.webp"
            card3.src = "../img/card3-d.webp"
            card4.src = "../img/card4-d.webp"
            card5.src = "../img/card5-d.webp"
            card6.src = "../img/card6-d.webp"
            card7.src = "../img/card7-d.webp"
            card8.src = "../img/card8-d.webp"
            card9.src = "../img/card9-d.webp"
        }
        if (window.innerWidth < 756 && window.innerWidth >= 480) {
            card1.src = "../img/card1-t.webp"
            card2.src = "../img/card2-t.webp"
            card3.src = "../img/card3-t.webp"
            card4.src = "../img/card4-t.webp"
            card5.src = "../img/card5-t.webp"
            card6.src = "../img/card6-t.webp"
            card7.src = "../img/card7-t.webp"
            card8.src = "../img/card8-t.webp"
            card9.src = "../img/card9-t.webp"
        }
        if (window.innerWidth < 480) {
            card1.src = "../img/card1.webp"
            card2.src = "../img/card2.webp"
            card3.src = "../img/card3.webp"
            card4.src = "../img/card4.webp"
            card5.src = "../img/card5.webp"
            card6.src = "../img/card6.webp"
            card7.src = "../img/card7.webp"
            card8.src = "../img/card8.webp"
            card9.src = "../img/card9.webp"
        }
    } else {
        card1.src = "../img/texno.jpg"
        card2.src = "../img/star.jpg"
        card3.src = "../img/seafood.jpg"
        card4.src = "../img/prime.jpg"
        card5.src = "../img/boxes.jpg"
        card6.src = "../img/borders.jpg"
        card7.src = "../img/edition.jpg"
        card8.src = "../img/lab.jpg"
        card9.src = "../img/busines.jpg"
    }
}


changeimg()
window.addEventListener("resize", changeimg)