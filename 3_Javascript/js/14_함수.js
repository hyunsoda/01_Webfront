// 매개 변수, 전달인자

const input1 = document.querySelector("#input1");
const btn1 = document.querySelector("#btn1");

// 2개의 값을 전달 받아 출력하는 함수
function print1(num, str){ // 함수 선언
    // 함수 정의
    // 매개 변수 명이 뭐든 상관없이 전달인자의 자리만 맞으면 똑같은 값을 전달함
    console.log(`${num}은/는${str}입니다`);

}

// #btn1 클릭 시 #input1의 값을 읽어와 print1()함수 호출
btn1.addEventListener("click", function(){

    const value = input1.value;

    if(!typeof Number || value.trim().length ==0){
        // number가 아니거나 아무것도 쓰지 않았을 때
        console.log("숫자를 입력해주세요");
        return; // 함수를 종료 + 호출한 곳으로 돌아감
    }
    let result; //결과값을 저장할 변수
    if(Number(value) == 0) result ="0"; //value값이 0일 때 result는 0
    else if(Number(value) > 0) result ="양수"
    else                        result ="음수"

    // 함수 호출 (값 전달)
    // 중요 ! 전달되는 값의 순서가 중요합니다!
    print1(value,result);
});


// 매개 변수로 배열 전달하기

function arrayTest(arr){
    // 전달 받은 배열의 모든 요소 출력하기
    for (let i = 0; i <arr.length; i++){

        if(arr[i]=='멜론') arr[i] = "딸기"; //만약 arr의 i번째 요소가 멜론이면 arr의 i번째 요소를 딸기로 재대입

        console.log(`${i}번 인덱스 값:`, arr[i])
    }
}

// #btn2a 클릭 되었을 때 arrayTest() 함수 호출
document.querySelector("#btn2a").addEventListener("click",function(){
    const arr1 = [10,20,30];
    const arr2 = ["사과","바나나","멜론"];

    arrayTest(arr1); //arr1은 function arrayTest(arr)의 arr자리로 넘어감
    arrayTest(arr2);

    console.log("arr2[2] : ", arr2[2]);
    // 왜 멜론이 아니라 딸기가 출력될까?
    // -> arrayTest(arr2) 호출 시
    // arr2배열을 통째로 복사해서 전달하는 것이 아닌
    // arr2에 저장된 주소만 보내서 함수를 수행.

    // arrayTest()함수에서 arr2와 같은 배열을 참조해서 수정
    // -> 함수 수행 수 돌아와서도
    // 참조하고 있던 배열의 2번 인덱스 값이 변화되어 있음


    // 원본이 전달된 것이 아닌 참조하고 있던 주소가 전달된 것이기 때문에 주소에 들어있는 값이 바뀜



    /**
      참조란?

      - 객체 지향 언어에서 
      배열, 객체 등 object는 값을 여러 개 가지고 있는 자료형인데
      변수는 값을 1개만 저장할 수 있기 때문에 

      object를 메모리 다른 곳에 저장하고 
      저장된 곳의 주소를 변수에 저장해서
      
      필요할 때마다 해당 주소를 찾아가 
      원하는 값을 얻어오거나 수정할 수 있게 하는 것

      == 주소를 찾아가는 것을 [참조]라고 한다!!
     */
})




// 매개 변수로 요소 전달
function btn2bFn(el){
    // 매개 변수 el(eliment) : 이벤트가 발생한 요소
    // this를 전달인자로 보냈으니 el이란 매개 변수로 받아야 함
    el.style.backgroundColor = "yellow";
}


// 매개 변수로 함수 전달

function print2(fn){
    console.log(`a + b = ${fn(3,4)}`)
}




document.querySelector("#btn2c").addEventListener("click",function(){
    // 함수도 변수에 저장 가능! 변수명 == 함수명
    const sumFn = function(a,b){
        return a + b; // 함수를 끝냄
                      // +값(a+b)를 가지고 호출한 곳으로 돌아감
    }   

    // 전달인자로 함수를 전달
    print2(sumFn);
});






// return 확인하기

// 전달 받은 수(num) x제곱하여 반환
function pow(num,x){
    let result = 1; // 곱했을 때 결과에 영향을 주지 않기 위해 0이 아닌 1로 초기화
                    // 0을 곱하면 0이 되어버린다
    for(let i = 0; i < x; i++){
        result *= num;
    }
    return result;
}

function sumFn(arr){ //전달된 배열 요소의 합을 반환해야 한다
    let result2 = 0;
    for(let i = 0; i < arr.length; i++){ //i 값을 index값으로 사용
        result2 += arr[i];
    }
    return result2;
}



document.querySelector("#btn3a").addEventListener("click", function(){

    // 비어있는 배열을 생성해서 값을 밀어넣기 + 배열 안에 있는 배열들의 합계
    const numbers = []; // 비어있는 배열 생성

    // 배열.push(값) : 배열의 마지막 요소로 값을 추가
    numbers.push(30);
    numbers.push(50);
    numbers.push(4);
    numbers.push(pow(2,5)); // == numbers.push(32)

    // console.log(numbers);

    console.log("합계 : ", sumFn(numbers));
})










