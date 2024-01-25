/* 인라인 이벤트 모델 확인 */
function check1(btn) {
    console.log(btn); // 버튼 태그 요소 자체가 출력됨
    // 매개 변수 btn == 클릭한 버튼(this) 자체를 의미

    // 버튼의 배경색을 얻어와 저장
    const bgColor = btn.style.backgroundColor;
        // this를 통해 얻어온 매개변수를 통해
        // 버튼 요소 자체를 이미 얻어와 있는 상태이기 때문
    console.log(bgColor);

    // 버튼이 클릭될 때마다 pink <-> yellow 변경

    if(bgColor == "yellow") {
        btn.style.backgroundColor = "pink";
    } else {
        btn.style.backgroundColor = "yellow";
    }

}

//--------------------------------------------------------------------

// 고전 이벤트 모델 확인

// 아이디가 test1-1인 요소를 얻어와 test1a 변수에 저장
const test1a = document.querySelector("#test1-1");

// ***고전 이벤트 모델 작성법 ***

//요소.이벤트리스너 = 이벤트 핸들러
test1a.onclick = function(){
    // 클릭했을 때 일어날 기능
    alert("고전 이벤트 모델 확인 버튼 클릭됨");
}

// 고전 이벤트 모델 제거

// #test1-2 버튼 클릭 시
// #test1-1의 onclick 이벤트 리스너의 이벤트 핸들러 제거하기
// 제거 버튼 누르면 모델 확인 눌렀을 때 alert 안 뜨게 하기

document.querySelector("#test1-2").onclick = function(){

    // 기존 onclick 이벤트 핸들러를
    // null로 덮어씌움 (이벤트 제거)
    document.querySelector("#test1-1").onclick = null;
    alert("이벤트 제거됨")
}

// 고전 이벤트 모델 단점

// #test1-3 요소를 얻어와 test1c 변수에 저장
const test1c = document.querySelector("#test1-3");

// #test1-3요소가 클릭 되었을 때 배경색을 red로 변경
test1c.onclick = function(){
    test1c.style.backgroundColor = "red";
}


//...................6 개월 후

// #test1-3이 클릭되었을 때 글자색을 "white"로 변경
test1c.onclick = function(){
    test1c.style.color = "white";
    // background color = "red"가 사라짐

}
// -> onclick에 저장된 값이 덮어씌워지면서
// 이전 코드(배경색 red)가 사라지는 문제 발생



//-------------------------------------

// 표준 이벤트 모델 확인
const test2 = document.querySelector("#test2");

//*** 표준 이벤트 모델 작성법 ***
// 요소.addEventListner("이벤트 종류", 이벤트핸들러(함수)) ;

test2.addEventListener("click", function(){
    // 투명도 1 (불투명) -> 0 (투명) 0.1씩 감소

    // 현재 #test2의 투명도 확인
    let curr = test2.style.opacity; //opacity : 투명도

    // 맨처음에는 투명도 '' -> 1대입
    if(curr==''){
        test2.style.opacity = 1; //요소 스타일에 1 대입
        curr = 1;
    }

    // 투명도 0.1감소
    test2.style.opacity = curr -0.1;
    //현재 opacity상태에서 -0.1 한 것 대입

    if(test2.style.opacity == 0){ //완전히 투명해 졌다면
        test2.style.opacity =1; //다시 불투명하게

    }
});



// test2 요소를 클릭하면 클릭 횟수 카운트
let count = 0;

test2.addEventListener("click", function(){
    count++; // 카운트 1증가

    // 표준 이벤트 모델의 이벤트 핸들러 안에서 this
    // == 이벤트가 발생한 요소

    this.innerText = count;
    // this = test2
    // = test2.innerText = count;


})



const box3 = document.querySelector("#box3");

const input3 = document.querySelector("#input3");

input3.addEventListener("keyup", function(e){
    
    // e : 이벤트 객체(발생한 이벤트에 대한 정보를 담은 객체) 
    // e.key : 입력된 키

    if(e.key == "Enter"){

    box3.style.backgroundColor = input3.value;
    }
});


// #box3를 클릭하면 현재 배경색을 alert로 출력
box3.addEventListener("click", function(e){
  

    // e : 이벤트 객체
    console.log(e);
    alert(`배경색 : ${e.target.style.backgroundColor}`);
    
    //e.target : 이벤트가 발생한 대상 요소(이벤트 발생 요소)


})

