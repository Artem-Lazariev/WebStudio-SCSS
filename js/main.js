// Отримуємо всі елементи
const teams = [
    document.getElementById("team1"),
    document.getElementById("team2"),
    document.getElementById("team3"),
    document.getElementById("team4")
];
const  mas = document.getElementById("mas");
const works = [
    document.getElementById("work1"),
    document.getElementById("work2"),
    document.getElementById("work3")
];

// Функція для зміни зображень команд
function changeTeamImgs() {
    if (window.devicePixelRatio > 1) {
        if (window.innerWidth >= 756) {
            mas.innerHTML = "1"

                teams[0].src = "img/team1-d.webp";
                teams[1].src = "img/team2-d.webp";
                teams[2].src = "img/team3-d.webp";
                teams[3].src = "img/team4-d.webp";

        } else if (window.innerWidth >= 756 && window.innerWidth <= 480) {
            mas.innerHTML = "2"

            teams[0].src = "img/team1-t.webp";
            teams[1].src = "img/team2-t.webp";
            teams[2].src = "img/team3-t.webp";
            teams[3].src = "img/team4-t.webp";

        } else {
            mas.innerHTML = "3"

            teams[0].src = "img/team1.webp";
            teams[1].src = "img/team2.webp";
            teams[2].src = "img/team3.webp";
            teams[3].src = "img/team4.webp";

        }
    } else {
        teams[0].src = 'img/igor.jpg';
        teams[1].src = 'img/olha.jpg';
        teams[2].src = 'img/mukola.jpg';
        teams[3].src = 'img/michael.jpg';
    }
}

// Функція для зміни зображень робіт
function changeWorkImgs() {
    if (window.devicePixelRatio > 1) {
        works[0].src = "./img/work1.webp";
        works[1].src = "./img/work2.webp";
        works[2].src = "./img/work3.webp";
    } else {
        works[0].src = "./img/comp.jpg";
        works[1].src = "./img/tel.jpg";
        works[2].src = "./img/tablet.jpg";
    }
}

// Загальна функція
function updateImgs() {
    changeTeamImgs();
    changeWorkImgs();
}

// Виклик одразу
updateImgs();

// Виклик при зміні розміру вікна
window.addEventListener("resize", updateImgs);
