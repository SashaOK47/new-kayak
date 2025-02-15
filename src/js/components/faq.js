export const faq = () => {

    const faqItem = document.querySelectorAll(".faq__item");

    faqItem.forEach((el) => {
        el.addEventListener("click", (e) => {
            e.preventDefault();
            const currentItem = e.target.closest(".faq__item");
            const content = e.target.nextElementSibling;
            currentItem.classList.toggle("active");
            if (currentItem.classList.contains("active")) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        });
    });
}