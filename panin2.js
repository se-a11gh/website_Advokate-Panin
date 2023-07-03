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

