const btn = document.querySelector("#btn");
const inputnum = document.querySelectorAll(".input-number");
const container = document.getElementById("container");
const inputbox = document.querySelector("input") ;

btn.addEventListener("click",()=>{
   container.innerHTML="";
   for(let i = 0; i < Number(inputbox.value);i++){
   
   const input = document.createElement("input");
   input.classList.add("input-number");
   input.type="Number";
   container.append(input);

};
});

document.getElementById("sumBtn").addEventListener("click", function(){
   const result = document.getElementById("result");
   const inputnum = document.querySelectorAll(".input-number");
   const inputbox = document.querySelector("input") ;
   // const value1 = Number(inputnum.value);
  

   let sum=0;
   for(let i = 0; i < Number(inputbox.value); i++){
       
      console.log(inputnum[i].value);
       sum += Number(inputnum[i].value);
       console.log(sum);
        result.innerText = sum;
   };
     
});


   // Number.input = Number(inputbox.value);
   // if(Number(inputbox.value) >= 1){
   //    inputnum.remove();
   //    return;
   // };


