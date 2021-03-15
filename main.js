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
        console.log(el);
        el.addEventListener("click", activateSection(el));
    }
};

function activateSection (button) {
    let sectionName = button.dataset.section;
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
    for (let i = 0; i < sections.length; i++) {
        let el = sections[i];
        if (el.dataset.section == sectionName) {
            el.classList.remove("hidden");
        }
        else {
            el.classList.add("hidden");
        }
    }
};

