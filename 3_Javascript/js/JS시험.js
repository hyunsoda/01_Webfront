const btn = document.getElementById("btn");
const textinput = document.getElementById("textinput");
// const span = document.getElementById("span");
const container = document.querySelector(".container");
const widths = document.getElementById("width");
const heights = document.getElementById("height");
const bgColor = document.getElementById("bgColor");
const fontsz = document.getElementById("fontsz");
const colora = document.getElementById("color");
const bold = document.getElementById("bold");
const light = document.getElementById("light");
const weight = document.getElementsByName("weight");
const row = document.getElementsByName("row");
const col = document.getElementsByName("col");




btn.addEventListener("click",()=>{
    const box = document.createElement("div");
    // console.log(box);
    box.classList.add("box");

    let widthv = Number(widths.value)+'px';
    let heightv = Number(heights.value)+'px';
    let bgColorv = bgColor.value;
    let fontszv = Number(fontsz.value)+'px';
    let colorav = colora.value;
    // let fweight = weight.value;
    
    let fweight;
    for(let i=0; i < weight.length; i++) {
     
        if(weight[i].checked) {
            fweight = weight[i].value;
        }
    }

    let rowv;
    for(let i=0; i < row.length; i++) {
     
        if(row[i].checked) {
            rowv = row[i].value;
        }
    }

    let colv;
    for(let i=0; i < col.length; i++) {
     
        if(col[i].checked) {
            colv = col[i].value;
        }
    }





    box.style.width = widthv;
    box.style.height = heightv;
    box.style.backgroundColor=bgColorv;
    box.style.justifyContent=rowv;
    box.style.alignItems=colv;
    container.append(box);



   
    // fweight[0] = "bold";
    // fweight[1] = "light";
    // console.log(fweight)  ;  
    // fweight[0]=weight[0];
    // fweight[1]=weight[0];

    // for(i<0; i<weight.length;i++){
    //     weight[i]=i+1;
    // }
    // fweight[i].value;
 
    const span = document.createElement("span");
    box.append(span)
    span.innerHTML=textinput.value;
    span.style.fontSize = fontszv;
    span.style.color = colorav;
    span.style.fontWeight = fweight;
    
   

   
});
 