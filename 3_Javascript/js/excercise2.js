const btn = document.querySelector("#btn");
const inputclass = document.querySelector(".input-number");
const container = document.getElementById("container");
const inputbox = document.querySelector("input") ;

btn.addEventListener("click",()=>{
   const input = document.createElement("input");
//    console.log(input);
   input.classList.add(".input-number");
   input.type="Number";
   for(let i = 0; i <= Number(inputbox.value);i++){
   container.append(input);
   Number.input = Number(inputbox.value);
};
});