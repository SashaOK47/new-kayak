export const faq = () => {
    const accordionControls = document.querySelectorAll(
        ".accordion__control"
    );

    accordionControls.forEach((accordionControl) => {
        accordionControl.addEventListener("click", (event) => {
            accordionControl.classList.toggle("active");
            const accordionBody = accordionControl.nextElementSibling;
            if (accordionControl.classList.contains("active")) {
                accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
            } else {
                accordionBody.style.maxHeight = 0;
            }
        });
    });
}