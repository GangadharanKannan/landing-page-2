var menu = document.getElementById("menuBtn");
var cross = document.getElementById("crossBtn");
var content = document.getElementById("content");
var home = document.getElementById("home");
var plan = document.getElementById("plan");
var blog = document.getElementById("blog");

menu.addEventListener("click",()=>{
    cross.classList.toggle("hidden");
    content.classList.toggle("hidden");
    menu.classList.toggle("hidden");
})
cross.addEventListener("click",()=>{
    cross.classList.toggle("hidden");
    content.classList.toggle("hidden");
    menu.classList.toggle("hidden");
})
home.addEventListener("click",()=>{
    cross.classList.toggle("hidden");
    content.classList.toggle("hidden");
    menu.classList.toggle("hidden");
})
plan.addEventListener("click",()=>{
    cross.classList.toggle("hidden");
    content.classList.toggle("hidden");
    menu.classList.toggle("hidden");
})
blog.addEventListener("click",()=>{
    cross.classList.toggle("hidden");
    content.classList.toggle("hidden");
    menu.classList.toggle("hidden");
})