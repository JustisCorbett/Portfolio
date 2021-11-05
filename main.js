let aboutContent;
let skillContent;
let projectContent;
let aboutButton;
let skillsButton;
let projectsButton;

window.onload = () => {
    aboutContent = document.getElementById("about-text");
    skillsContent = document.getElementById("skills-text");
    projectsContent = document.getElementById("projects-text");
    sectionButtons = document.getElementsByClassName("section-button");
    sections = document.getElementsByClassName("section");

    for (let i = 0; i < sectionButtons.length; i++) {
        el = sectionButtons[i];
        el.addEventListener("click", activateSection, false);
    }
};

async function activateSection (evt) {
    let sectionName = evt.target.dataset.section;
    let box = document.getElementById("box-container");
    console.log(sectionName);
    box.classList.add("shrink");
    await new Promise(r => setTimeout(r, 500));
    for (let i = 0; i < sectionButtons.length; i++) {
        let el = sectionButtons[i];
        if (el.dataset.section == sectionName) {
            el.classList.add("selected");
        }
        else {
            el.classList.remove("selected");
        }
    }
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

