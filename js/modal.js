const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const closeModal = document.getElementById("close");
const videoSrc = document.getElementById("video");
function modalActive() {
    modal.classList.toggle("activeModal");
    videoSrc.setAttribute("src", "https://www.youtube.com/embed/mqqft2x_Aa4");
}

function clearModal() {
    modal.classList.remove("activeModal");
    videoSrc.setAttribute("src", "");
}

btn.addEventListener("click", modalActive);

closeModal.addEventListener("click", clearModal);


    