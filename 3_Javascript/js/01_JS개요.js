/*  .js 파일 내부를 <script> 태그 
내부라고 생각하면 됨 */

function externalFn() {
    alert("외부 파일에 작성된 externalFn()함수 호출됨");
}


/*********************** */

// JS 맛보기
// 버튼 클릭 시 body 태그의 글자색, 배경색을 변경


    // body 태그 요소 선택해줘야 한다
    // document -> html 전체를 말함
    // querySelector()안에 css에 선택자 쓰듯이 적어줌
const body = document.querySelector("body"); /* body 태그 선택*/ 
/*  const body -> body는 변수
    body라는 상자에 뒤에 명령어를 넣은 것
    앞으로 body라는 이름만 부르면 뒤의 명령어가 나옴
*/


/* 실행되면 다크모드로 바꾸는 함수(기능) */
function darkMode() {
    body.style.color = "white"; //글자색을 흰색으로 변경
    body.style.backgroundColor ="black"; //배경색 검정으로 변경

}
// style : js에서 css속성 부르는 것
//  = 표시 : 오른쪽 값을 왼쪽에 대입하는 대입연산자
// 같다는 ==

/* 실행되면 다크모드로 바꾸는 함수(기능) */
function lightMode() {
    body.style.color ="black";
    body.style.backgroundColor ="white";
}

