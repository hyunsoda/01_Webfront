// break 확인
function check1(){

    // 1부터 10까지 1씩 증가하다가 5가 되면 멈춤
    for(let i = 1; i <= 10; i++){
        console.log("i :",i);

        if(i == 5) break;
        // break를 만나는 순간 가장 가까운 반복문을 멈춤
    }
}

// 무한 반복하는 while문 멈추기
function check2(){
    
    let i = 1;
    // 10 초과 시 멈춤
    while(true){
        // true일 때 반복 수행하는 코드
        console.log ("i :", i++);

        if(i > 10) break;
    }
}

// continue 확인하기
function check3(){

    // 1부터 20까지 출력. 단, 3의 배수는 건너뛰기
    for(let i = 1; i <= 20; i++){

        // 3의 배수인 경우
        if(i % 3 == 0) continue;

        // break를 작성하면 1,2에서 멈춤
        // continue는 종료되는 게 아니라 다음턴으로 넘어간다

        // 3의 배수인 경우 아래 코드는 수행하지 않음 
        console.log('i : ', i);
    }

}


// 1부터 30까지 1씩 증가하며 출력
//   단, 홀수 또는 10의 배수는 건너뛰기
function check4(){

    for(let i = 1; i <= 30; i++){

        if(i % 2 == 1 || i % 10 == 0) continue;

        console.log('i : ', i);
    }
}


/* 0~9 까지 5줄 출력
    - 각 줄에서 4의 배수는 건너뛰기
    - 3번째 줄 출력 후 멈추기
    01235679
    01235679
    01235679
    */

function check5(){
    for(let i = 1; i <= 5; i++){
        
        let str="";
        for(let y = 0; y <= 9; y++){
           
            // 0을 제외한 4의 배수인 경우
            if(y !=0 || y % 4 == 0) continue;
            
            str += y;
        }
        
       
        console.log(str);

        // 3번째 줄 출력 후 멈춤
        if(i == 3) break;
    }
}



function startGame(){
    const randomNumber = Math.floor(Math.random() * 101);

    let rCount = 1;
    let input;
    

    while(input !== null){
        input = prompt("숫자를 입력하세요")
        if(Number(input.value) == randomNumber) {
            alert( "정답입니다"); break;

    } if(Number(input.value) < randomNumber){
        alert(`Up ${rCount}`); rCount++; continue;

    }
        if(Number(input.value) > randomNumber){
            alert(`DOWN ${rCount}`); rCount++; continue;
        }

        if(input === null){
            break;
        }
}

}











