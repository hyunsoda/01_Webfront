const boxList = document.querySelectorAll(".box");
// 배열형태로 얻어옴 , 길이 5의 배열이 나온다 (0~4)

const inputList = document.querySelectorAll(".color-input");
// 배열형태로 얻어옴 , 길이 5의 배열이 나온다 (0~4)

document.querySelector("#changeButton").addEventListener("click",function(){

    for(let i = 0; i < boxList.length; i++){
        // box index 각각 접근해서 input list i 번째 요소에 value값 적용
        boxList[i].style.backgroundColor = inputList[i].value;
    }
});

