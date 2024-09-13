// ELEMENTOS DEL DOM
const slash  = document.querySelector("img#slash");
const logoHome = document.querySelector("#home");

const allSections = document.querySelectorAll("main > section");

const sectionSlash = document.querySelector("section.slash");
const sectionMainPage = document.querySelector("section.mainPage");
const sectionAboutUs = document.querySelector("section.aboutUs");
const sectionConoceMas = document.querySelector("section.conoce-mas");
const sectionPlanes = document.querySelector("section.planesSubcripcion");
const conoceMas = document.querySelector("#conoce-mas-landing");
const  subcripcionLanding= document.querySelector("#subcripcion-landing");

const slashOpcions = document.querySelector(".slash__opcions");

const headerOpcions = document.querySelector(".header__sections");


//EVENTOS
slash.addEventListener('click', openSlash);
headerOpcions.addEventListener('click', openSection);
slashOpcions.addEventListener('click', openSection);
sectionMainPage.addEventListener('click', openSection);
logoHome.addEventListener('click', home);


// FUNCIONES
function openSlash(){
    const isClick = sectionSlash.classList.contains("hidden");
    hideAllSections();
    if (isClick) {
        sectionSlash.classList.remove("hidden");
    } else {
        sectionMainPage.classList.remove("hidden");
    }
}

function home(){
    hideAllSections();
    sectionMainPage.classList.remove("hidden");
}

function openSection(e){
    const isLi  = e.target.nodeName =  'LI';
    console.log(e.target.id);
    if (isLi) {
        hideAllSections();
    };
    if (e.target.classList.contains("slash__aboutus") && isLi) {
        sectionAboutUs.classList.remove("hidden");
    }
    if ((e.target.classList.contains("slash__knowmore") && isLi)|| e.target.id=="conoce-mas-landing") {
        sectionConoceMas.classList.remove("hidden");
    }
    if ((e.target.classList.contains("slash__plans") && isLi ) || e.target.id=="subcripcion-landing"){
        location.replace("https://fastlearners-opensource.web.app/subscriptions");
    }
}

function hideAllSections(){
    allSections.forEach((section) => {
        section.classList.add("hidden");
    })
}





