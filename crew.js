const Btns = document.querySelector(".btn1")
const bTns = document.querySelector(".btn2")
const btNs = document.querySelector(".btn3")
const btnS = document.querySelector(".btn4")

const Show = document.querySelector(".douglasimage")
const sHow = document.querySelector(".markimage")
const ShOw = document.querySelector(".victorimage")
const ShoW = document.querySelector(".ansariimage")

const doug = document.querySelector(".douglastext")
const mark = document.querySelector(".marktext")
const victor = document.querySelector(".victortext")
const ansari = document.querySelector(".ansaritext")

const dougs = document.querySelector(".douglas")
const marks = document.querySelector(".mark")
const victors = document.querySelector(".victor")
const ansaris = document.querySelector(".ansari")

const Texts = document.querySelector(".text1")
const tExts = document.querySelector(".text2")
const teXts = document.querySelector(".text3")
const texTs = document.querySelector(".text4")

const burger = document.querySelector(".hamburger")
const closer = document.querySelector(".closer")
const desktop = document.querySelector(".desktopmenu")

burger.addEventListener("click", () => {
    desktop.style.top = "0%"
})

closer.addEventListener("click", () => {
    desktop.style.top = "-100%"
})

Btns.addEventListener("click", () => {
    Btns.style.backgroundColor = "white"
    bTns.style.backgroundColor = "grey"
    btNs.style.backgroundColor = "grey"
    btnS.style.backgroundColor = "grey"

    Show.style.display = "flex"
    sHow.style.display = "none"
    ShOw.style.display = "none"
    ShoW.style.display = "none"

    doug.style.display = "flex"
    mark.style.display = "none"
    victor.style.display = "none"
    ansari.style.display = "none"

    dougs.style.display = "block"
    marks.style.display = "none"
    victors.style.display = "none"
    ansaris.style.display = "none"

    Texts.style.display = "block"
    tExts.style.display = "none"
    teXts.style.display = "none"
    texTs.style.display = "none"
})

bTns.addEventListener("click", () => {
    Btns.style.backgroundColor = "grey"
    bTns.style.backgroundColor = "white"
    btNs.style.backgroundColor = "grey"
    btnS.style.backgroundColor = "grey"

    Show.style.display = "none"
    sHow.style.display = "flex"
    ShOw.style.display = "none"
    ShoW.style.display = "none"

    doug.style.display = "none"
    mark.style.display = "flex"
    victor.style.display = "none"
    ansari.style.display = "none"

    dougs.style.display = "none"
    marks.style.display = "block"
    victors.style.display = "none"
    ansaris.style.display = "none"

    Texts.style.display = "none"
    tExts.style.display = "block"
    teXts.style.display = "none"
    texTs.style.display = "none"
})

btNs.addEventListener("click", () => {
    Btns.style.backgroundColor = "grey"
    bTns.style.backgroundColor = "grey"
    btNs.style.backgroundColor = "white"
    btnS.style.backgroundColor = "grey"

    Show.style.display = "none"
    sHow.style.display = "none"
    ShOw.style.display = "flex"
    ShoW.style.display = "none"

    doug.style.display = "none"
    mark.style.display = "none"
    victor.style.display = "flex"
    ansari.style.display = "none"

    dougs.style.display = "none"
    marks.style.display = "none"
    victors.style.display = "block"
    ansaris.style.display = "none"

    Texts.style.display = "none"
    tExts.style.display = "none"
    teXts.style.display = "block"
    texTs.style.display = "none"
})

btnS.addEventListener("click", () => {
    Btns.style.backgroundColor = "grey"
    bTns.style.backgroundColor = "grey"
    btNs.style.backgroundColor = "grey"
    btnS.style.backgroundColor = "white"

    Show.style.display = "none"
    sHow.style.display = "none"
    ShOw.style.display = "none"
    ShoW.style.display = "flex"

    doug.style.display = "none"
    mark.style.display = "none"
    victor.style.display = "none"
    ansari.style.display = "flex"

    dougs.style.display = "none"
    marks.style.display = "none"
    victors.style.display = "none"
    ansaris.style.display = "block"

    Texts.style.display = "none"
    tExts.style.display = "none"
    teXts.style.display = "none"
    texTs.style.display = "block"
})