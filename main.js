let navOpen = document.querySelector(".header")
let closBtn = document.querySelector(`[name="close-outline"]`)
let openBtn = document.querySelector(`[name="menu-outline"]`)



openBtn.addEventListener("click",(e)=>{
    navOpen.classList.add("nav-open")
})
closBtn.addEventListener("click",(e)=>{
    navOpen.classList.remove("nav-open")
})