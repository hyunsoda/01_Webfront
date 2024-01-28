
const gameinput = document.querySelector(".gamenum");

// shuffle.addEventListener("click", ()=>{

//     const randomNumber = Math.floor(Math.random()*46);
//     let input;
//     const ball = new Array(45);
//     for(let i = 0; i < ball.length;i++){
//         ball[i] = i+1;
//     }


// });

const randomNumber = Math.floor(Math.random()*46);
    const ball = new Array(45);
    for(let i = 0; i<ball.length; i++){
        ball[i]=i+1;
    }
document.querySelector("#shuffle").addEventListener("click",function(){
    const randomNumbers = Math.floor(Math.random()*ball.length);
    
    while(gameinput.value !== null){
        
        if(Number(gameinput.value) == ball[randomNumbers]) {
            alert( "정답입니다"); break;

    }   if(Number(gameinput.value)!==ball[randomNumbers]){
        alert(`틀렸습니다. 정답은 ${ball[randomNumbers]}입니다`); break;
    }
        if(gameinput.value === null){
            alert("숫자를 입력해주세요");
            break;
        }
}


    // if(gameinput.value.length ==0){
    //     alert("숫자를 입력해주세요");
    // }
});
   