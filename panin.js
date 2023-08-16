let icon_strela2 = document.querySelectorAll(".icon_d");

icon_strela2.forEach((i)=>{
    i.addEventListener("click", ()=>{
        const sosed = i.nextElementSibling;
        sosed.classList.toggle('categ_list_punkts');
    });
});
function a(){
    icon_strela2.forEach((e)=>{
        e.addEventListener('click', function(){
        e.style.transform = "rotate(90deg)";            
        e.addEventListener('click', function(){
        e.style.transform = "rotate(0deg)";
        a(); }); });});
}
a();

let btn = document.querySelector(".btn_call");
window.addEventListener("scroll", function(e){
if(scrollY > 700){
    btn.style.display = "block";
}else{
    btn.style.display = "none";
}
});

let element_body = document.querySelector('body');
let asideMenu = document.querySelector(".btn_close");
let menu = document.querySelector(".wrap_aside_menu");
let fonMenu = document.querySelector(".fon_aside_menu");

let btn_menu = document.querySelector(".btn_menu");
btn_menu.addEventListener('click', function(){
    element_body.classList.toggle('page_lock');
    menu.style.left = "0%";
    fonMenu.style.display = "block";
});
asideMenu.addEventListener('click', function(){
    element_body.classList.toggle('page_lock');
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






















/*========================================================*/





//------------------------------------------------------------------//
let bl_ask_1 = document.querySelector(".bl_ask_1");
let bl_ask_2 = document.querySelector(".bl_ask_2");
let bl_ask_3 = document.querySelector(".bl_ask_3");
let selectCatg_2 = document.querySelector(".selectCatg_2");

selectCatg_2.addEventListener('click', (e)=>{
    if(e.target.value == 1){
        bl_ask_2.setAttribute('data-mass', 1);
        bl_ask_1.setAttribute('data-mass', 1);
        bl_ask_3.setAttribute('data-mass', 1);
    }
    else if(e.target.value == 2){
        bl_ask_2.setAttribute('data-mass', 2);
        bl_ask_1.setAttribute('data-mass', 2);
        bl_ask_3.setAttribute('data-mass', 2);
    }
});

let selectCatg_1 = document.querySelector(".selectCatg_1");
selectCatg_1.addEventListener('click', (e)=>{
    if(e.target.value == 1){
        bl_ask_1.style.display = "flex";
        bl_ask_2.style.display = "none";
        bl_ask_3.style.display = "none";
    }
    else if(e.target.value == 2){
        bl_ask_2.style.display = "flex";
        bl_ask_1.style.display = "none";
        bl_ask_3.style.display = "none";
    }
    else if(e.target.value == 3){
        bl_ask_3.style.display = "flex";
        bl_ask_2.style.display = "none";
        bl_ask_1.style.display = "none";
    }
});




