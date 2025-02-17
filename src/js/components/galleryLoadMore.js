export const galleryLoadMore = () => {
    const loadBtn = document.querySelector(".gallery__button-more");
    const galleryItems = [...document.querySelectorAll(".gallery__item")];
    let currentValue = 6;

    loadBtn.addEventListener("click", () => {
        setTimeout(() => {
            for (let i = currentValue; i < currentValue + 2; i++) {
                galleryItems[i].style.display = "block";
            }

            currentValue += 2;
            if (currentValue >= galleryItems.length) {
                loadBtn.style.display = "none";
            }
            loadBtn.innerText = "Загрузить больше фото";
            loadBtn.scrollIntoView({block: "end", inline: "nearest"});
        }, 1000);
        loadBtn.innerText = "";
        loadBtn.innerHTML = '<span class="gallery__button-loader"></span>';
    });
}