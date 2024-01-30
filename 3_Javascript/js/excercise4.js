const btn = document.getElementById("btn");
const result = document.getElementById("result");
const fruit = document.querySelectorAll(".fruit");
const apple = document.getElementById("apple");
const banana = document.getElementById("banana");
const melon = document.getElementById("melon");
// const applev = document.querySelector(".row > input:nth-child(2)")
// const bananav = document.querySelector(".row > input:nth-child(2)")
// const melonv = document.querySelector(".row > input:nth-child(2)")
const inputvbox = document.querySelectorAll(".row> input:last-child");

btn.addEventListener("click",()=>{
    let appleResult=0;
    let bananaResult=0;
    let melonResult=0;
    let countResult=0;

        if(fruit[0].checked){
            appleResult += Number(inputvbox[0].value);
           
        }
        if(fruit[1].checked){
            bananaResult += Number(inputvbox[1].value);
           
        }
        if(fruit[2].checked){
            melonResult += Number(inputvbox[2].value);   
        }
    countResult = appleResult*2000 + bananaResult*3000 + melonResult*5000
    console.log(inputvbox);
     console.log(countResult);
     result.innerHTML=`사과 ${appleResult}개 바나나${bananaResult}개 메론 ${melonResult}개 총합 ${countResult}원 `

    // for(let i = 0; i < fruit.length; i++){
    //     if(fruit[0].checked){
    //         appleResult += Number(inputvbox[0].value);
    //     }
    //     if(fruit[1].checked){
    //         bananaResult = "바나나";
    //     }
    //     if(fruit[0].checked){
    //         melonResult += "멜론";
    //     }
        
    // } ;
    // result.append(span);
    // span.innertext="d"
});




