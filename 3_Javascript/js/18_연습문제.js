const keypadbtn = document.querySelector(".keypadbtn");
const keypad = document.querySelector("#keypad");
const keyshow = document.getElementById("keyshow");
const addbtn = document.getElementById("addnum");
const resetbtn = document.getElementById("resetnum");
const numlist = document.getElementById("numlist");

const key1 = document.getElementById("key1");
const key2 = document.getElementById("key2");
const key3 = document.getElementById("key3");
const key4 = document.getElementById("key4");
const key5 = document.getElementById("key5");
const key6 = document.getElementById("key6");
const key7 = document.getElementById("key7");
const key8 = document.getElementById("key8");
const key9 = document.getElementById("key9");
const key_ = document.getElementById("key#");
const key0 = document.getElementById("key0");
const keyq = document.getElementById("key*");

keypadbtn.addEventListener("click",()=> {

    let key="";

    key1.addEventListener("click",()=> {
        
        key += key1.value;
        keyshow.innerText = key;

        
    });

    key2.addEventListener("click",()=> {
        
        key += key2.value;

        keyshow.innerText = key;
    });
    key3.addEventListener("click",()=> {
        
        key += key3.value;

        keyshow.innerText = key;
    });
    key4.addEventListener("click",()=> {
        
        key += key4.value;

        keyshow.innerText = key;
    });
    key5.addEventListener("click",()=> {
        
        key += key6.value;

        keyshow.innerText = key;
    });
    // key6.addEventListener("click",()=> {
        
    //     key += key3.value;

    //     keyshow.innerText = key;
    // });
    // key3.addEventListener("click",()=> {
        
    //     key += key3.value;

    //     keyshow.innerText = key;
    // });
    // key3.addEventListener("click",()=> {
        
    //     key += key3.value;

    //     keyshow.innerText = key;
    // });


});

//=================

// key1.addEventListener("click",()=>{
//     let key = key1.value;
//     fnKeyPadBtn(key);
// })
// function fnKeyPadBtn(e){
//     console.log(e);
// };
// const array = [1,2,3,4,5,6,7,8,9,'#',0,'*'];
// arr1=[];
// array.forEach((array) => {
//     arr1.push(array);
//   });




// keypadbtn.addEventListener("click",function(e){

//     console.log(e);
//     let key ="";
    
//     // arr=[1,2,3,4,5,6,7,8,9,'#',0,'*'];
//     for(let i=1; i<arr1.length; i++){
//         key +=arr1[i].value;
//         keyshow.innerText = key;
//     }
// });




// const keypadbtn = document.querySelector("#key .keypadbtn");
// function fnKeyPadBtn(){
//     let key ="";
    
//     arr=[1,2,3,4,5,6,7,8,9,'#',0,'*'];
//     for(let i=1; i<11; i++){
//         key +=arr[i].value;
//         keyshow.innerText = key;
//     }
// };

// keypadbtn.addEventListener("click",fnKeyPadBtn);
