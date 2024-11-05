const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const mainForm = document.getElementById("main-form");
const planForm = document.getElementById("plan-form");

navToggle.addEventListener("click",()=> {
    if(nav.getAttribute("aria-disabled") === "true") {
        nav.setAttribute("aria-disabled","false");
    } else {
        nav.setAttribute("aria-disabled","true");
    }
});
const displayForm = () => {
    if(mainForm.getAttribute("aria-disabled") === "true") {
        mainForm.setAttribute("aria-disabled","false");
    }
}
const closeForm = () => {
    if(mainForm.getAttribute("aria-disabled") === "false") {
        mainForm.setAttribute("aria-disabled","true");
    }
}
const displayPlanForm = () => {
    if(planForm.getAttribute("aria-disabled") === "true") {
        planForm.setAttribute("aria-disabled","false");
    }
}
const closePlanForm = () => {
    if(planForm.getAttribute("aria-disabled") === "false") {
        planForm.setAttribute("aria-disabled","true");
    }
}