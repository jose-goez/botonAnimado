const btn = document.querySelector("a");
const burbujas = document.querySelector(".burbujas");

btn.addEventListener("click", ()=>{
    burbujas.style.display="block";
     setTimeout(function(){
    burbujas.style.display="none";

     },600);
})