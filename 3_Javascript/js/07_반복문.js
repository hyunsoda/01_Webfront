
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







// 입력 받은 단 출력하기
function executeFn3() {
    // 입력된 값(단)
    const start = Number(document.getElementById("input3").value);
    // 결과를 출력한 요소 ul태그
    const ul = document.getElementById("result3");


    ul.innerHTML = "";  // 이전 내용 삭제
    //입력 받은 단어 2~9 사이가 아닐 경우
    // "2~9 사이만 입력해주세요" 알림창 띄우기

    if(start <2 || start >9) {
        alert("2~9 사이만 입력해 주세요");
        return; // 함수를 종료하고 호출한 곳으로 돌아감
                // 함수 종료 정도로만 인식
                // 추후 코드가 나와도 excuteFn3()함수를 종료하고 돌아간다.
                // 밑에 코드가 실행되는 경우는 if문에 걸리지 않는 경우
                // return 뒤에 값이 있으면 값을 가지고 돌아간다
    }

     for(let num = 1; num <= 9; num++ ){
        ul.innerHTML += `<li>${start}X${num} = ${start*num}</li>`;
        // innerText로 하면 HTML코드를 해석하지 않고 문자 그대로 나오게 함
    }
}




/* 다음 모양 출력하기
    12345
    12345
    12345
    12345
    */

function check8() {

    // 4바퀴 반복하는 for문
    for(let y = 1; y <= 4; y++){  //1

        // "12345" 출력하는 구문
        let str = ""; //결과 저장용 변수
        for(let x=1 ; x <= 5; x++){             // 2 for문 전체 반복
            str += x;
            //"12345"
        }
        console.log(str);     //3
        //"12345"
        //"12345"
    }
}
// y가 불충족할 때까지 계속 반복



// 다음 모양 출력하기

function check9() {
    for(let y= 1; y <= 5; y++){ 
        let str = "";
        for(let x=1; x <= y; x++) {
            str += x;
        }
        console.log(str);
    }
}



function check16() {
    //prompt(); 입력창이 있는 경고창
    let val; // undefined

    // 취소를 누르기 전까지 반복
    // == 취소를 누르면 반복하지 않겠다
    while(val !== null) {

        // 동일 비교 연산자
        // A != B 값이 다른 경우
        // !== -> 값, 자료형이 모두 다른경우 true
        // === -> 값, 자료형이 모두 같은 경우 true

        val = prompt("입력 후 확인"); // 변수에 prompt값 대입
        // 확인 -> 입력한 값
        // 취소 -> null

        console.log(val);
    }
}



// 메뉴 주문하기

function check17() {

    // 메뉴 가격 변수
    const gimbap = 3000;
    const ramen = 3500;
    const donkatsu = 5000;

    // 주문 개수 카운트 변수
    let gCount = 0; // 김밥
    let rCount = 0; // 라면
    let dCount = 0; // 돈까스

    // prompt로 입력한 값을 저장할 변수 선언
    let input; // undefined

    // 확인 -> 입력한 값
    // 취소 -> null

    while(input !== null){ // 취소 누리기 전까지 반복
        // while은 괄호 안 조건식이 false일 때까지 반봅
        // 취소를 누르면 null값이 들어옴
        // null !== null -> null값이 null과 다르니? -> false -> 종료
        
        input = prompt("메뉴 번호를 입력하세요!")

        switch(input){
            case "1" : gCount++; break;
            case "2" : rCount++; break;
            case "3" : dCount++; break;
            case null : alert("주문 완료!"); break;
            default : alert("메뉴에 작성된 번호만 입력해주세요"); break;
        }

    }

    alert(`김밥 : ${gCount}, 라면 : ${rCount}, 돈까스 : ${dCount}`);
    let sum = (gCount*gimbap) + (rCount*ramen) + (dCount*donkatsu);
    
    alert(`총 가격 : ${sum}원`)
}




// while을 for문처럼 사용하기
function check18() {

    // 1부터 10까지 출력

    let num = 1;  //while 괄호 안에 넣을 변수, /for문의 초기식과 비슷
    while(num < 11){ //num이 11보다 작을 때만 반복 / for 문의 조건식과 비슷
        console.log(num);

        num++; // for 문의 증감식과 비슷 -> 안 쓰면 브라우저 터짐
        // 증감되지 않아 계속 1이고 다시 위로 올라가면 계속 true
   
    console.log("------------------")

    //10 부터 1까지 1씩 감소

    let dnum = 10;
    while(dnum > 0){
        console.log(dnum);

        dnum--;
    }


 }


}
