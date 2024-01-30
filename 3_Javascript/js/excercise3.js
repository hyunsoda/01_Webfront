const createBtn = document.getElementById("createBtn");
const lottoBoard = document.getElementById("lottoBoard");


createBtn.addEventListener("click",()=> {
    lottoBoard.innerHTML="";
    for(let i = 0; i < 45; i++){
    const box = document.createElement("div");
    box.classList.add("number");
    lottoBoard.append(box); 
    box.innerHTML=`${i+1}`;

    

    box.addEventListener("click",()=>{
    const lottoBoard = document.getElementById("lottoBoard");    
    const active = document.getElementsByClassName("active");
    box.classList.add("active");
        console.log(box);
        if(box.style.backgroundColor == "orange") {
            box.style.backgroundColor = "white";
        } else {
            box.style.backgroundColor = "orange";
        }
        
    });
   };
   
  
});


