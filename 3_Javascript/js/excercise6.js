const cart = document.getElementById("cart");
const total = document.getElementById("total");
const empty = document.querySelector("#empty-cart");
const menuitem = document.querySelectorAll(".menu-item");
const divs = document.querySelectorAll("section>div");


function addToCart(item,price){
    const menuitem = document.querySelectorAll(".menu-item");   
    empty.remove();
    // document.querySelector("footer>div").id="cart";
    for(let i = 0; i < divs.length;i++){
    
        switch(item){
        case '김밥' : cart.innerHTML=menuitem[0];break;
        

    };
console.log(divs);

    }
    
};