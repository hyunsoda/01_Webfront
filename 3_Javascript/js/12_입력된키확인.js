// 문자열.toLowerCase(): 영어를 모두 소문자로 변경 (A->a)
// 문자열.toUpperCase(): 영어를 모두 대문자로 변경 (a->A)

// 문서(화면 전체)에서 키가 눌러지는 걸 감지했을 때 기능 수행
// const key_box = document.querySelector(".key-box");
// const body = document;
// const key = document.getElementsByClassName("key");
// const qkey = document.querySelector(".key-box > div");
// const wkey = document.querySelector(".key-box > div:nth-child(2)");
// const ekey = document.querySelector(".key-box > div:nth-child(3)");
// const rkey = document.querySelector(".key-box > div:nth-child(4)");



// body.addEventListener("keydown", function(e){
    
    

//     if(e.key == "q"){
//         qkey.style.backgroundColor ="yellowgreen";
//         "Q".toLowerCase;
//     } 
//     if(e.key == "w"){
//         wkey.style.backgroundColor ="yellowgreen";
//         "W".toLowerCase;
//     } 
//     if(e.key == "e"){
//         ekey.style.backgroundColor ="yellowgreen";
//         "E".toLowerCase;
//     } 
//     if(e.key == "r"){
//         rkey.style.backgroundColor ="yellowgreen";
//         "R".toLowerCase;
//     } 
//     if(e == ""){
//         key.style.backgroundColor = none;
//     }
    
// })








//예시 답안

// 화면에 존재하는 key 모두 얻어오기
const keys = document.querySelectorAll(".key");
    //배열 형태

// 문서(화면 전체)에서 키가 눌러지는 걸 감지했을 때
document.addEventListener("keydown", function(e){
    let idx; // 인덱스 값을 저장할 변수

    // 입력된 키를 소문자로 바꿔서 일치하는 case 실행
    switch(e.key.toLowerCase()) {
        case 'q' : idx = 0; break;
        case 'w' : idx = 1; break;
        case 'e' : idx = 2; break;
        case 'r' : idx = 3; break;
        default : return; //함수 종료
    }
    //idx 변호와 일치하는 keys 배열의 요소의 배경색을 변경
    keys[idx].style.backgroundColor = "yellowgreen";

});


// 키를 때면 배경색을 흰색으로 되돌리기
document.addEventListener("keyup",function(e){
        // 입력된 키를 소문자로 바꿔서 일치하는 case 실행
        switch(e.key.toLowerCase()) {
            case 'q' : idx = 0; break;
            case 'w' : idx = 1; break;
            case 'e' : idx = 2; break;
            case 'r' : idx = 3; break;
            default : return; //함수 종료
        }
        //idx 변호와 일치하는 keys 배열의 요소의 배경색을 변경
        keys[idx].style.backgroundColor = "white";
});
