const button = document.getElementById("js-menu-btn");
const menu = document.getElementById("mobile-menu");
const button2 = document.getElementById("mobile-menu-close");
button.addEventListener("click", () => {
    menu.style.display = "block";
})
button2.addEventListener("click", () => {
    menu.style.display = "none";
})