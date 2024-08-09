// Js for Features 2

const feature1 = document.getElementById("premium");
const feature2 = document.getElementById("wide");
const feature3 = document.getElementById("quality");
const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const tab3 = document.getElementById("tab3");
const borderLeft = "3px solid #1E2203";

feature1.addEventListener('click', () => {
    tab1.style.display = "block";
    tab2.style.display = "none";
    tab3.style.display = "none";
    feature1.style.borderLeftColor = "#1E2203";
    feature2.style.borderLeftColor = "white";
    feature3.style.borderLeftColor = "white";
});

feature2.addEventListener('click', () => {
    tab2.style.display = "block";
    tab1.style.display = "none";
    tab3.style.display = "none";
    feature1.style.borderLeftColor = "white";
    feature2.style.borderLeftColor = "#1E2203";
    feature3.style.borderLeftColor = "white";
});

feature3.addEventListener('click', () => {
    tab3.style.display = "block";
    tab1.style.display = "none";
    tab2.style.display = "none";
    feature1.style.borderLeftColor = "white";
    feature2.style.borderLeftColor = "white";
    feature3.style.borderLeftColor = "#1E2203";
});

// Js for Features 3

const feature11 = document.getElementById("premium1");
const feature21 = document.getElementById("wide1");
const feature31 = document.getElementById("quality1");
const tab11 = document.getElementById("tab11");
const tab21 = document.getElementById("tab21");
const tab31 = document.getElementById("tab31");
const borderLeft1 = "3px solid #1E2203";

feature11.addEventListener('click', () => {
    tab11.style.display = "block";
    tab21.style.display = "none";
    tab31.style.display = "none";
    feature11.style.borderLeftColor = "#1E2203";
    feature21.style.borderLeftColor = "white";
    feature31.style.borderLeftColor = "white";
});

feature21.addEventListener('click', () => {
    tab21.style.display = "block";
    tab11.style.display = "none";
    tab31.style.display = "none";
    feature11.style.borderLeftColor = "white";
    feature21.style.borderLeftColor = "#1E2203";
    feature31.style.borderLeftColor = "white";
});

feature31.addEventListener('click', () => {
    tab31.style.display = "block";
    tab11.style.display = "none";
    tab21.style.display = "none";
    feature11.style.borderLeftColor = "white";
    feature21.style.borderLeftColor = "white";
    feature31.style.borderLeftColor = "#1E2203";
});

// for burger-menu

const menuToggle = document.getElementById("menu-toggle");
const navbarDrop = document.getElementById("navbar");
const closeMenu = document.getElementById('close')

menuToggle.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    navbarDrop.style.display = "flex";
    menuToggle.style.display = "none";
    closeMenu.style.display = "flex";
};

function close() {
    navbarDrop.style.display = "none";
    menuToggle.style.display = "flex";
    closeMenu.style.display = "none";
}
