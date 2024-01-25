// const bomberman = document.getElementById("bomberman");
// const container = document.getElementsByClassName("container");
// const imgcon = document.getElementById("imgcon")



// document.addEventListener("keydown",function(e){
//     // console.log(e);
//     // if(e.key == 37 || e.key == "ArrowRight"){
//     //     bomberman.style.bottom = "10px"
//     // };

    
//     switch(e.key){
    

//         // case "ArrowUp"||: bomberman.bottom ="10px"; break;
//         case "ArrowDown"|| '40': bomberman.style.bottom="10px"; break;
//         case 'ArrowRight': bomberman.style.right="20px"; break;
//         case 'ArrowLeft' : bomberman.style.left = "10px"; break;
//         case 'X' : container.innerHTML +=`<img src="/images/bomberman.png">`; break;
        
//     }
        
    
    
// })

// 예시 답안

let xindex = 0; // x좌표 방향대로 얼마큼 이동했는지 기억할 변수
let yindex = 0; // y좌표 방향대로 얼마큼 이동했는지 기억할 변수

// addEventListner("이벤트 종류", 함수(이벤트가 발생했을 때 수행할 기능))
// 전달인자 2개
document.addEventListener("keydown", function(e){

    // e : 이벤트 객체
    const bomberman = document.getElementById("bomberman"); // 봄버맨 이미지

    switch(e.key){
        case 'ArrowRight' : 
             xindex +=10; break;
        case 'ArrowLeft' : 
             xindex -=10; break;
        case 'ArrowUp' : 
             yindex -=10; break;
        case 'ArrowDown' : 
             yindex +=10; break;

        case 'x' : 
        const box = document.getElementById("box");
        box.innerHTML += `<img src="/images/boom.png" style="transform : translate3d(${xindex}px, ${yindex}px,0); position:absolute;">`; break;
        default : alert("방향키와 x만 가능"); break;
    }
        // let xindex = 0;
        // let yindex = 0; 가 함수 안에 있으면 키를 다시 눌렀을 때 누적되지 않고 0이 된다.

    bomberman.style.transform = `translate3d(${xindex}px, ${yindex}px,0)`;



















})












