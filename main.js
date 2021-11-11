let aboutContent;
let skillContent;
let projectContent;
let aboutButton;
let skillsButton;
let projectsButton;
let darkModeButton;
let lightModeButton;
let root;

window.onload = () => {
    aboutContent = document.getElementById("about-text");
    skillsContent = document.getElementById("skills-text");
    projectsContent = document.getElementById("projects-text");
    sectionButtons = document.getElementsByClassName("section-button");
    sections = document.getElementsByClassName("section");
    darkModeButton = document.getElementById("dark");
    lightModeButton = document.getElementById("light");
    root = document.documentElement;

    for (let i = 0; i < sectionButtons.length; i++) {
        el = sectionButtons[i];
        el.addEventListener("click", activateSection, false);
    }
    darkModeButton.addEventListener("click", darkMode, false);
    lightModeButton.addEventListener("click", lightMode, false);
    darkModeButton.style.fill = "var(--main-text-color)";
    lightModeButton.style.fill = "var(--secondary-text-color)";
};

async function darkMode () {
    await root.style.setProperty("--main-bg-color", "#131313");
    await root.style.setProperty("--secondary-bg-color", "#cccccc");
    await root.style.setProperty("--main-text-color", "#f8f8f8");
    await root.style.setProperty("--secondary-text-color", "#141414");
    darkModeButton.style.fill = "var(--main-text-color)";
    lightModeButton.style.fill = "var(--secondary-text-color)";
    darkModeButton.style.backgroundColor = "var(--main-bg-color)";
    lightModeButton.style.backgroundColor = "var(--secondary-bg-color)";
    darkModeButton.classList.toggle("color-selected");
    lightModeButton.classList.toggle("color-selected");;
}

async function lightMode () {
    await root.style.setProperty("--main-bg-color", "#cccccc");
    await root.style.setProperty("--secondary-bg-color", "#131313");
    await root.style.setProperty("--main-text-color", "#141414");
    await root.style.setProperty("--secondary-text-color", "#f8f8f8");
    darkModeButton.style.fill = "var(--secondary-text-color)";
    lightModeButton.style.fill = "var(--main-text-color)";
    darkModeButton.style.backgroundColor = "var(--secondary-bg-color)";
    lightModeButton.style.backgroundColor = "var(--main-bg-color)";
    darkModeButton.classList.toggle("color-selected");
    lightModeButton.classList.toggle("color-selected");
}

async function activateSection (evt) {
    let sectionName = evt.target.dataset.section;
    let box = document.getElementById("box-container");
    console.log(sectionName);
    
    for (let i = 0; i < sectionButtons.length; i++) {
        let el = sectionButtons[i];
        if (el.dataset.section == sectionName) {
            el.classList.add("selected");
        }
        else {
            el.classList.remove("selected");
        }
    }
    box.classList.add("shrink");
    await new Promise(r => setTimeout(r, 500));
    for (let i = 0; i < sections.length; i++) {
        let el = sections[i];
        if (el.dataset.section == sectionName) {
            el.classList.remove("hidden");
        }
        else {
            el.classList.add("hidden");
        }
    }
    box.classList.remove("shrink");
    await new Promise(r => setTimeout(r, 500));
};

