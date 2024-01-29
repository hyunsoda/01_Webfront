// 정규 표현식 객체 생성 + 확인하기

document.getElementById("btn1").addEventListener("click", () => {

    // 정규 표현식 객체 생성
    const regExp1 = new RegExp("script");
            // "script"와 일치하는 문자열이 있는지 검사하는 정규표현식

    const regExp2 = /java/;
            // "java"와 일치하는 문자열이 있는지 검사하는 정규표현식
            
    // 확인하기
    const str1 = "저희는 지금 javascript를 공부하고 있습니다.";
    const str2 = "jsp(java server page)도 나중에 할겁니다.";
    const str3 = "java, java, java";

    console.log("regExp1.test(str1) :" + regExp1.test(str1)); // 소괄호 안에 검사할 문자열
    // str1안에 script라는 문자열이 있는지 test후 true, false 반환
    console.log(regExp1.exec(str1)); // 매칭되는 문자열 중 처음 문자열을 반환


    console.log("regExp2.test(str2) :" + regExp2.test(str2));
    console.log(regExp2.exec(str2));

    console.log("regExp2.test(str3) :" + regExp2.test(str2));

});


// 메타문자 확인하기
document.getElementById("btn2").addEventListener("click",() => {
    
    const div1 = document.getElementById("div1");
    
    // a (일반문자열) : 문자열 내에 a라는 문자열이 존재하는지 검색
    const regExp1 = /a/;
    div1.innerHTML += "/a/, apple : " + regExp1.test("apple")+"<hr>"; // true
    // a라는 글자가 apple에 있는가
    div1.innerHTML += "/a/, price : " + regExp1.test("price")+"<hr>"; // false
    // a라는 글자가 price에 있는가

    // [abcd] : 문자열 내에 a,b,c,d 중 하나라도 일치하는 문자가 있는지 검색
    const regExp2 = /[abcd]/;
    div1.innerHTML += "/[abcd]/, apple : " + regExp1.test("apple")+"<hr>";
    div1.innerHTML += "/[abcd]/, sdfsdaf: " + regExp1.test("sdfsdaf")+"<hr>";
    div1.innerHTML += "/[abcd]/, qwerty: " + regExp1.test("qwerty")+"<hr>";

    // ^(캐럿) : 문자열의 시작을 의미
    const regExp3 = /^group/; // 문자열의 시작이 group인지 확인
    div1.innerHTML += "/^group/, group100: " + regExp3.test("group100")+"<hr>";
    div1.innerHTML += "/^group/, 100group: " + regExp3.test("100group")+"<hr>";


    // $(달러) : 문자열의 끝을 의미
    const regExp4 = /group$/; // 문자열의 끝이 group인지 확인
    div1.innerHTML += "/group$/, group100: " + regExp4.test("group100")+"<hr>";
    div1.innerHTML += "/group$/, 100group: " + regExp4.test("100group")+"<hr>";

});


// 이름 유효성 검사하기
document.getElementById("inputName").addEventListener("keyup",(e)=>{

    // 화살표 함수의 this
    // 화살표 함수의 this는 상위(부모) 스코프 값이 상속된다.
    // 이벤트 객체가 아님
    // this를 쓰려면 화살표 함수가 아닌 일반 함수 사용해야 함 or e.target

    // 이벤트 핸들러 내 일반 function : this -> 이벤트가 일어난 객체

    console.log(this);


    // 결과 출력용 span 얻어오기
    const span = document.getElementById("inputNameResult");
   
    // 한글 2~5글자 정규표현식 객체 만들기
    const regExp = /^[ㄱ-힣]{2,5}$/;
    
    // 빈칸인지 검사
    if(e.target.value.length == 0){
        // 이벤트 내에서의 this는 이벤트가 일어나고 있는 요소 == input창
        span.innerText=""; // 글이 있었으면 비워주라
        return; // 함수 종료
    } 

    // 유효성 검사
    if(regExp.test(inputName.value)){
        // this.value = input 창 속 글
        // 유효한 경우
        span.innerText = "유효한 이름 형식입니다";
        span.style.color = "green";
        span.style.fontWeight = "bold";
    } else{
        // 유효하지 않은 경우
        span.innerText = "이름 형식이 유효하지 않습니다";
        span.style.color="red";
        span.style.fontWeight = "bold";
    }


});



// 주민등록번호 유효성 검사

document.getElementById("inputPno").addEventListener("keyup",(e)=> {

    const span = document.getElementById("inputPnoResult");

    if(e.target.value.length == 0){
        span.innerText = "주민등록번호를 작성해주세요";
        span.classList.remove("error");
        span.classList.remove("confirm");

        return;
    } 

    // 생년월일(6)-고유번호(7)
    const regExp = /^\d{6}\-\d{7}$/;
    // : \- 가 눈에 보이는 -문자 

    // /
    // \d{6}  아무 숫자 6글자
    // \- '-'를 문자 그대로 인식하게 해주는 escape 문자 \
    // \d{7} 아무 숫자 7글자
    // /

    if(regExp.test(e.target.value)){
        span.innerText = "유효한 주민등록번호 형식입니다"; // 참일 때

        span.classList.remove("error"); // 기존 테스트에서 error가 있었으면 삭제
        span.classList.add("confirm");
    }else {
        span.innerText = "유효하지 않습니다";
        span.classList.remove("confirm");
        span.classList.add("error");
    }
});




// 회원가입창 만들기
document.getElementById("idInput").addEventListener("keyup",(e) => {
    const regExp =/^[a-z]{1}\w{5,13}$/;

    if(e.target.value.length==0){
        e.target.style.backgroundColor="white";
        return;
    }
    if(regExp.test(e.target.value)){
        e.target.style.backgroundColor ="springgreen";
    } else{
        e.target.style.backgroundColor = "white";
    }
    
  
});


document.getElementById("pwdInput").addEventListener("keyup",(e)=> {
    const pwdInput2 = document.getElementById("pwdInput2");
    const span = document.getElementById("pwdspan");

    if(pwdInput2.value.length >=1 && e.target.value.length == 0){
        alert("비밀번호를 입력해주세요");
        pwdInput2.value="";
        span.innerText="";
        return;
    }
    if(e.target.value == pwdInput2.value){
        span.innerText="비밀번호 일치";
        span.style.color = "green"; 
    }
    else{
        span.innerText="비밀번호 불일치";
        span.style.color="red";
    }
});

document.getElementById("nameInput").addEventListener("keydown",(e)=> {
    const span = document.getElementById("namespan");
    const regExp = /^[ㄱ-힣]{2,5}/;

    if(e.target.value.length == 0){
        span.innerText="";
    }
    if(regExp.test(e.target.value)){
        span.innerText="정상입력";
        span.style.color="green";
    }
    else{
        span.innerText="한글만 입력하세요";
        span.style.color="red";
    }
});

document.getElementById("submit").addEventListener("click",(e)=>{
    const regExp = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;
    const phone = document.getElementById("phonenumInput");
    
    const sex = document.getElementsByName("sex");
    
    let sexv;
    for(let i=0; i < sex.length; i++) {
     
        if(sex[i].checked) {
            sexv = sex[i].value;
        }
    };

    // if(sexv.value.length == 0){
    //     alert("성별을 입력하세요");
    //     return;
    // }

    if(phone.value.length ==0 ){
        alert("전화번호의 형식이 올바르지 않습니다");
        return;
        
    }

});

