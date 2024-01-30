const container = document.querySelectorAll(".container");
const result = document.getElementById("result");
const size = document.getElementById("size");
const color = document.getElementById("color");



document.getElementById("registration").addEventListener("click", (e)=>{
    
    const span = document.createElement("span");
    console.log(span);
    span.innerText = document.getElementById("content").value;
    result.append(span);

    document.getElementById("apply").addEventListener("click",()=>{
        span.style.fontSize = Number(size.value)+ 'px';
        span.style.color = color.value;
    });
 
});



