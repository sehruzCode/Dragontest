const hamburger = document.querySelector(".menu");
const layers = document.querySelectorAll(".hamburger span");
let listDisplay = true;

hamburger.addEventListener("click", function () {
   layers.forEach((layer) => layer.classList.toggle("active"));
   listDisplay =! listDisplay;
   let list = document.querySelector("ul");
   if(listDisplay){
    list.style.height = "0"
   }
   else {
    list.style.height = "160%"
   }


    
    
} )




