let navOpen = document.querySelector(".header")
let closBtn = document.querySelector(`[name="close-outline"]`)
let openBtn = document.querySelector(`[name="menu-outline"]`)

let navBtn = document.querySelectorAll(".main-nav-list li")

navBtn.forEach((e)=>{
    e.onclick = function(){
        navOpen.classList.remove("nav-open")
    }
})

openBtn.addEventListener("click",(e)=>{
    navOpen.classList.add("nav-open")
})
closBtn.addEventListener("click",(e)=>{
    navOpen.classList.remove("nav-open")
})

// ///////////////////////////////////////

const sectionHero = document.querySelector(".section-hero")

const obs = new IntersectionObserver(function(entries){
    const ent = entries[0]
    console.log(ent)
    if(ent.isIntersecting === false){
        document.body.classList.add("sticky")
    }else{
        document.body.classList.remove("sticky")

    }
},{
    root: null,
    threshold:0,
    rootMargin:'-80px'
})
obs.observe(sectionHero)

let sticky = document.querySelector(".sticky")