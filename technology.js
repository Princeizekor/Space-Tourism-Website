const Btn = document.querySelector(".btn1")
const bTn = document.querySelector(".btn2")
const btN = document.querySelector(".btn3")

const vehicle = document.querySelector(".vehicle")
const space = document.querySelector(".space")
const capsule = document.querySelector(".capsule")

const rock = document.querySelector(".rock")
const port = document.querySelector(".port")
const cap = document.querySelector(".cap")

const img1 = document.querySelector(".img1")
const img2 = document.querySelector(".img2")
const img3 = document.querySelector(".img3")

const burger = document.querySelector(".hamburger")
const closer = document.querySelector(".closer")
const desktop = document.querySelector(".desktopmenu")

burger.addEventListener("click", () => {
    desktop.style.top = "0%"
})

closer.addEventListener("click", () => {
    desktop.style.top = "-100%"
})

Btn.addEventListener('click', () => {
    Btn.style.backgroundColor = "whitesmoke"
    Btn.style.color = "black"
    bTn.style.color = "white"
    btN.style.color = "white"
    bTn.style.backgroundColor = "transparent"
    btN.style.backgroundColor = "transparent"

    vehicle.style.display = "block"
    space.style.display = "none"
    capsule.style.display = "none"

    rock.style.display = "flex"
    port.style.display = "none"
    cap.style.display = "none"

    img1.style.display = "flex"
    img2.style.display = "none"
    img3.style.display = "none"
}) 

bTn.addEventListener('click', () => {
    bTn.style.backgroundColor = "whitesmoke"
    Btn.style.color = "white"
    bTn.style.color = "black"
    btN.style.color = "white"
    Btn.style.backgroundColor = "transparent"
    btN.style.backgroundColor = "transparent"

    vehicle.style.display = "none"
    space.style.display = "block"
    capsule.style.display = "none"

    rock.style.display = "none"
    port.style.display = "flex"
    cap.style.display = "none"

    img1.style.display = "none"
    img2.style.display = "flex"
    img3.style.display = "none"
}) 

btN.addEventListener('click', () => {
    btN.style.backgroundColor = "whitesmoke"
    btN.style.color = "black"
    Btn.style.color = "white"
    bTn.style.color = "white"
    Btn.style.backgroundColor = "transparent"
    bTn.style.backgroundColor = "transparent"

    vehicle.style.display = "none"
    space.style.display = "none"
    capsule.style.display = "block"

    rock.style.display = "none"
    port.style.display = "none"
    cap.style.display = "flex"

    img1.style.display = "none"
    img2.style.display = "none"
    img3.style.display = "flex"
}) 
