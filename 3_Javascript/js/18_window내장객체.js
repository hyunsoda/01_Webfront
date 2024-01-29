// window.setTimeout()
// 버튼 클릭하면 3초 후에 alert창 키우기
document.getElementById("btn1").addEventListener("click",()=>{
    
    setTimeout(function(){ // 함수라 호출부 써줘야 한다 
        alert("3초 후 출력!");
    },3000); // 3000 = 3초

}); 

// window.setInterval()

let interval; // setInterval을 저장하기 위한 전역 변수

// 현재 시간 문자열로 반환 함수
function currentTime(){

    const now = new Date();
    let hour = now.getHours(); // 시,   함수(매서드)임 -> 호출부 쓰기
    let min = now.getMinutes(); // 분
    let sec = now.getSeconds(); // 초

    if(hour < 10) hour="0"+ hour;
    if(min < 10) min="0"+ min;
    if(sec < 10) sec="0"+ sec;

    console.log(sec);

    return hour + " : " + min + " : " + sec;
}

function clockFn() {
    
    const clock = document.getElementById("clock");
    clock.innerText = currentTime();
    // currentTime을 innerText로 대입하는 코드를 1초에 한 번씩 부르기
    interval = setInterval(function(){
        // 일 초 마다 clock이라는 요소에 시분초를 반환하는 함수를(currentTime())innerText로 대입하라
        clock.innerText = currentTime();
    }, 1000);

}


clockFn(); // 함수 호출



// clearInterval

document.getElementById("stop").addEventListener("click", () => {
    clearInterval(interval);
});





