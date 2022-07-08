const Btn = document.querySelector(".btn1")
const bTn = document.querySelector(".btn2")
const btN = document.querySelector(".btn3")
const BtN = document.querySelector(".btn4")

const moon = document.querySelector(".moon")
const mars = document.querySelector(".mars")
const europa = document.querySelector(".europa")
const titan = document.querySelector(".titan")

const Word = document.querySelector(".defination")
const wOrd = document.querySelector(".defination2")
const woRd = document.querySelector(".defination3")
const worD = document.querySelector(".defination4")

const Texts = document.querySelector(".moontext")
const tExt = document.querySelector(".marstext")
const teXt = document.querySelector(".europatext")
const texT = document.querySelector(".titantext")

const Show = document.querySelector(".avg1")
const sHow = document.querySelector(".avg2")
const shOw = document.querySelector(".avg3")
const shoW = document.querySelector(".avg4")

const Shows = document.querySelector(".est1")
const sHows = document.querySelector(".est2")
const shOws = document.querySelector(".est3")
const shoWs = document.querySelector(".est4")

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
    Btn.style.borderBottom = "3px solid whitesmoke"
    bTn.style.borderBottom = "3px solid transparent"
    btN.style.borderBottom = "3px solid transparent"
    BtN.style.borderBottom = "3px solid transparent"

    moon.style.display = "flex"
    mars.style.display = "none"
    europa.style.display = "none"
    titan.style.display = "none"

    Word.style.display = "flex"
    wOrd.style.display = "none"
    woRd.style.display = "none"
    worD.style.display = "none"

    Texts.style.display = "flex"
    tExt.style.display = "none"
    teXt.style.display = "none"
    texT.style.display = "none"

    Show.style.display = "flex"
    sHow.style.display = "none"
    shOw.style.display = "none"
    shoW.style.display = "none"

    Shows.style.display = "flex"
    sHows.style.display = "none"
    shOws.style.display = "none"
    shoWs.style.display = "none"
}) 

bTn.addEventListener('click', () => {
    Btn.style.borderBottom = "3px solid transparent"
    bTn.style.borderBottom = "3px solid whitesmoke"
    btN.style.borderBottom = "3px solid transparent"
    BtN.style.borderBottom = "3px solid transparent"

    moon.style.display = "none"
    mars.style.display = "flex"
    europa.style.display = "none"
    titan.style.display = "none"

    Word.style.display = "none"
    wOrd.style.display = "flex"
    woRd.style.display = "none"
    worD.style.display = "none"

    Texts.style.display = "none"
    tExt.style.display = "flex"
    teXt.style.display = "none"
    texT.style.display = "none"

    Show.style.display = "none"
    sHow.style.display = "flex"
    shOw.style.display = "none"
    shoW.style.display = "none"

    Shows.style.display = "none"
    sHows.style.display = "flex"
    shOws.style.display = "none"
    shoWs.style.display = "none"
}) 

btN.addEventListener('click', () => {
    Btn.style.borderBottom = "3px solid transparent"
    bTn.style.borderBottom = "3px solid transparent"
    btN.style.borderBottom = "3px solid whitesmoke"
    BtN.style.borderBottom = "3px solid transparent"

    moon.style.display = "none"
    mars.style.display = "none"
    europa.style.display = "flex"
    titan.style.display = "none"

    Word.style.display = "none"
    wOrd.style.display = "none"
    woRd.style.display = "flex"
    worD.style.display = "none"

    Texts.style.display = "none"
    tExt.style.display = "none"
    teXt.style.display = "flex"
    texT.style.display = "none"

    Show.style.display = "none"
    sHow.style.display = "none"
    shOw.style.display = "flex"
    shoW.style.display = "none"

    Shows.style.display = "none"
    sHows.style.display = "none"
    shOws.style.display = "flex"
    shoWs.style.display = "none"
}) 

BtN.addEventListener('click', () => {
    Btn.style.borderBottom = "3px solid transparent"
    bTn.style.borderBottom = "3px solid transparent"
    btN.style.borderBottom = "3px solid transparent"
    BtN.style.borderBottom = "3px solid whitesmoke"

    moon.style.display = "none"
    mars.style.display = "none"
    europa.style.display = "none"
    titan.style.display = "flex"

    Word.style.display = "none"
    wOrd.style.display = "none"
    woRd.style.display = "none"
    worD.style.display = "flex"

    Texts.style.display = "none"
    tExt.style.display = "none"
    teXt.style.display = "none"
    texT.style.display = "flex"

    Show.style.display = "none"
    sHow.style.display = "none"
    shOw.style.display = "none"
    shoW.style.display = "flex"

    Shows.style.display = "none"
    sHows.style.display = "none"
    shOws.style.display = "none"
    shoWs.style.display = "flex"
}) 