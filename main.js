const burger = document.querySelector(".hamburger")
const closer = document.querySelector(".closer")
const desktop = document.querySelector(".desktopmenu")

burger.addEventListener("click", () => {
    desktop.style.top = "0%"
})

closer.addEventListener("click", () => {
    desktop.style.top = "-100%"
})