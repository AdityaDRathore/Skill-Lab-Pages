function fadeIn(element) {
    element.style.opacity = 0;
    element.style.transition = "opacity 0.5s ease-in";
    element.style.display = "block";

    setTimeout(() => {
        element.style.opacity = 1;
    }, 50);
}

function fadeOut(element) {
    element.style.opacity = 1;
    element.style.transition = "opacity 0.5s ease-out";

    setTimeout(() => {
        element.style.opacity = 0;
        setTimeout(() => {
            element.style.display = "none";
        }, 500);
    }, 50);
}

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        fadeIn(section);
    });

    const projectThumbnails = document.querySelectorAll(".project-thumbnail");
    projectThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("mouseenter", () => {
            thumbnail.classList.add("hover-effect");
        });
        thumbnail.addEventListener("mouseleave", () => {
            thumbnail.classList.remove("hover-effect");
        });
    });
});