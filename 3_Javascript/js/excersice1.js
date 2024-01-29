const numberbtn = document.querySelectorAll(".number");
const result = document.getElementById("result");
const reset = document.getElementById("reset");



let str="";


for(let i=0; i<numberbtn.length-1;i++){
        
       numberbtn[i].addEventListener("click",() =>{
        numberbtn[i] = i+1;
        str+=i+1;
        result.innerText=str;
    console.log(numberbtn);
       });
        };
        
       numberbtn[9].addEventListener("click",() => {
        
        numberbtn[9].value='0';
        str+= numberbtn[9].value;
        result.innerText=str;
       });

   if(str.value.length == 11){
    alert("10자까지만 입력해주세요");
    result.value="";
    // return;
   };
    
   reset.addEventListener("click",()=>{
    reset.value="";
   });


