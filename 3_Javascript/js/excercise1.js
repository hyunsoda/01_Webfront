const numberbtn = document.querySelectorAll(".number");
const result = document.getElementById("result");
const reset = document.getElementById("reset");



let str="";

const regExp=/^\d{,10}$/;

for(let i=0; i<numberbtn.length-1;i++){
        
       numberbtn[i].addEventListener("click",() =>{
        numberbtn[i] = i+1;
        str+=(i+1);

 
        result.innerText=str;
      

       });
        };
        
       numberbtn[9].addEventListener("click",() => {
        
        numberbtn[9].value='0';
        str+= numberbtn[9].value;
        result.innerText=str;

        
       });

//   if(regExp.test(Number(result.value))){
          
//   } else{
//   alert("10자 초과입니다.")
//   }
        
   

    
    reset.addEventListener("click",()=>{
    result.innerText="";
    str="";
     
    return;
      

   });

//    if (regExp.test(result.innerText)){
//        result.innerText=str;
//    }else{
//        alert("10자리를 초과하였습니다.")
//    };


 
