
for(let num = 1; num <= 5; num++){
    // 조건식이 true인 경우 반복 수행할 코드;
    console.log("통과");
}

function check1(){
    let result =""; // 빈 문자열

    for(let num = 1; num <=5; num++){
       // console.log(num);
       result +=num;
       // result = result + num;
       // 문자열 + 숫자 = 문자열     
       //   "1"  =   ""     +  1 {1턴}  
       //  "12"  =   "1"    +  2 {2턴}  
       //  "123" =   "12"   +  3 {3턴}  
       //  "1234"=   "123"  +  4 {2턴}  
       //  "12345"=  "1234" +  5 {2턴}  
       //                      6
    // 6까지는 늘어나지만 조건식에 부합하지 않아 멈춘다
    }
    console.log(result);
}


function check2(){
    // 1부터 10까지 1씩 증가하며 출력
    for(let num = 1; num <= 10; num++){
        console.log(num);
    }
}


function check3() {
    // 1부터 20까지 1씩 증가하며 출력
    for(let num = 1; num <=20; num++){
        console.log(num);
    }
}

function check4(){
    // 5부터 15까지 1씩 증가하며 출력
    for(let num = 5; num <= 15; num++){
        console.log(num);
    }
}

function check5(){
    // 1부터 30까지 2씩 증가하며 출력
    for(let num = 1; num <= 30; num += 2){
        // 복합대입연산자 사용
    console.log(num);
    }
}

function check6(){
    let sum = 0; //합계를 저장하기 위한 변수
    for(let num =1; num <= 10; num++){
     sum += num;
    }
    console.log(sum);
}


// 입력 받은 범위 내에서 증감식 만큼 증가하며 모든 정수 출력하기
// const inputNumber1 = document.getElementById("inputNumber1-1")
// const inputNumber2 = document.getElementById("inputNumber1-2")
// const result1 = document.getElementById("result1")

// function sumFn() {
//     let sum = 0;
//     for(let num = Number(inputNumber1.value); num <=Number(inputNumber2.value); num++){
//         sum += num;
//     }
//     result1.innerText = sum;
// }

// 예시 답안
function sumFn(){
    //input에 작성된 값을 얻어와 저장
    const start = Number(document.getElementById("inputNumber1-1").value);
    const end = Number(document.getElementById("inputNumber1-2").value);

    // 결과를 출력하기 위한 요소 얻어와 저장
    const result1 = document.getElementById("result1");

    // 합계를 저장할 변수
    let sum = 0;

    // start 부터 end까지 1씩 증가하는 for문
    for(let num = start; num <= end; num++){
        sum += num; // num 값을 sum에 누적
    }
    result1.innerText = sum;
}






// 입력 받은 범위 내에서 증감식 만큼 증가하며 모든 정수 출력하기
const inputNumber2_1 = document.getElementById("inputNumber2-1")
const inputNumber2_2 = document.getElementById("inputNumber2-2")
const inputNumber2_3 = document.getElementById("inputNumber2-3")
const result2 = document.getElementById("result2")

function executeFn2(){
    for(let num = Number(inputNumber2_1.value); num <= Number(inputNumber2_2.value); num += Number(inputNumber2_3.value)){
       console.log(num);
    }
     
}



// 예시 답안

function executeFn2(){
    const start = Number(document.getElementById("inputNumber2-1").value);
    const end = Number(document.getElementById("inputNumber2-2").value);
    const val = Number(document.getElementById("inputNumber2-3").value);

    // 결과 출력할 ul요소
    const ul = document.getElementById("result2"); // ul태그

    ul.innerHTML = ""; //이전 ul에 작성된 내용을 모두 삭제
    // start부터 end까지 val씩 증가
    for(let num = start; num <= end; num += val){
        ul.innerHTML += `<li>${num}</li>`;
    }

}


// 중요! 동적으로 사용
// 요소.innerText = `<li>${num}</li>`
// -> 요소의 내용으로 문자열을 대입
// (HTML 태그를 해석하지 않고 문자열 그대로 보여줌)

// 요소.innerHTML = `<li>${num}</li>`
// -> HTML 태그를 해석해서 화면에 태그의 본 기능대로 출력








function executeFn3() {
    const start = Number(document.getElementById("input3").value);
    
    const ul = document.getElementById("result3");


    ul.innerHTML = "";

     for(let num = 1; num <=10; num++ ){
        ul.innerHTML += `<li>${start}*${num} = ${start*num}</li>`
    }
}