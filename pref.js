const cssLink = document.querySelector("link");
const themeRange = document.querySelector("#range");
const themeText = document.querySelector("#themeI");
const switchBackground = document.querySelectorAll(".switchBackground");
let textViewable = true;

function savePref() {
    localStorage.setItem("theme", themeRange.value);
    localStorage.setItem("textViewable", JSON.stringify(textViewable));
}

function handleSwtBClick(event) {
    const swt = event.target;
    if (swt.className === "switchBackground" || swt.className === "switchBackground swtBY") {
        const swtTgg = swt.querySelector(".switchToggle");
        swt.classList.toggle("swtBY");
        swtTgg.classList.toggle("swtTY");
        if (swt.className === "switchBackground") {
            textViewable = true;
        } else {
            textViewable = false;
        }
    } else {
        const swtBg = swt.parentElement;
        swtBg.classList.toggle("swtBY");
        swt.classList.toggle("swtTY");
        if (swt.className === "switchToggle") {
            textViewable = true;
        } else {
            textViewable = false;
        }
    }
    savePref();
}

function loadTheme() {
    const theme = localStorage.getItem("theme");
    const textViewable = JSON.parse(localStorage.getItem("textViewable"));
    if (theme !== null) {
        themeRange.value = theme;
        if (theme === "1") {
            themeText.innerText = "Theme: Acrylic";
        } else if (theme === "2") {
            themeText.innerText = "Theme: Solid";
        } else {
            themeText.innerText = "Theme: Glass";
        }
    }
    if (textViewable !== null) {
        if (textViewable === false) {
            const swt = document.querySelector(".switchBackground");
            const swtTgg = swt.querySelector(".switchToggle");
            swt.classList.toggle("swtBY");
            swtTgg.classList.toggle("swtTY");
        }
    }
}

function init() {
    loadTheme();
    themeRange.addEventListener("input", () => {
        if (themeRange.value === "1") {
            themeText.innerText = "Theme: Acrylic";
        } else if (themeRange.value === "2") {
            themeText.innerText = "Theme: Solid";
        } else {
            themeText.innerText = "Theme: Glass";
        }
        savePref();
    });
    switchBackground.forEach((swt) => {
        swt.addEventListener("click", handleSwtBClick);
    });
}

init();