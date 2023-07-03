let btn = document.querySelector(".btn_call");
window.addEventListener("scroll", function(e){
if(scrollY > 700){
    btn.style.display = "block";
}else{
    btn.style.display = "none";
}
});


let asideMenu = document.querySelector(".btn_close");
let menu = document.querySelector(".wrap_aside_menu");
let fonMenu = document.querySelector(".fon_aside_menu");

let btn_menu = document.querySelector(".btn_menu");
btn_menu.addEventListener('click', function(){
    menu.style.left = "0%";
    fonMenu.style.display = "block";
});
asideMenu.addEventListener('click', function(){
    menu.style.left = "-40%";
    fonMenu.style.display = "none";
});


   
// popUp консультации --------------------------------------------------------------------------//
let btn_consult = document.querySelectorAll(".consl");
let fon_popUp = document.querySelector(".fon_popUp");
let btn_close_pop = document.querySelector(".btn_close_pop");
btn_consult.forEach((e)=>{
    e.addEventListener('click', function(){
        fon_popUp.style.display = "flex";
    });
});
btn_close_pop.addEventListener('click', function(){
    fon_popUp.style.display = "none";
});




let btn_ask = document.querySelector(".btn_ask");
let popUp_ask = document.querySelector(".popUp_ask");
let btnCloseAskForm = document.querySelector(".btnCloseAskForm");
btn_ask.addEventListener('click', function(){
    popUp_ask.style.display = "flex";
});
btnCloseAskForm.addEventListener('click', function(){
    popUp_ask.style.display = "none";
});









