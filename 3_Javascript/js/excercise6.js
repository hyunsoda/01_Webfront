// const cart = document.getElementById("cart");
// const total = document.getElementById("total");
// const empty = document.querySelector("#empty-cart");
// const menuitem = document.querySelectorAll(".menu-item");
// const cartitem = document.querySelectorAll(".cart-item");
// const footer = document.querySelector("footer");

// function addToCart(item,price){
//     const menuitem = document.querySelectorAll(".menu-item");   
//     const cartitem = document.querySelectorAll(".cart-item");
//     const cart = document.getElementById("cart");
    
//         cart.style.display = 'block';
//         empty.style.display = 'none';
    
    
//             const box = document.createElement("div");
          
//             box.classList.add("cart-item");
            
//             const span1 = document.createElement("span");
//             span1.innerHTML=`${item}`;
//             box.append(span1);

//             const span2 = document.createElement("span");
//             const span2div = document.createElement("div");
//             const quantitybtn1 = document.createElement("button");

//             const quantitybtn2 = document.createElement("button");
//             const innerspan = document.createElement("span");
//             quantitybtn2.innerHTML="+"
//             quantitybtn1.innerHTML="-"
//             span2.classList.add("quantity");
//             span2.append(span2div);
//             span2div.append(quantitybtn1);
//             span2div.append(innerspan);
//             span2div.append(quantitybtn2);
//             box.append(span2);
            
//             const span3 = document.createElement("span");
//             span3.classList.add("delete-button");
//             span3.innerHTML=("&times;");
//             box.append(span3);
            
//         console.log(box);

   





//     // 항목 없애기 
//             span3.addEventListener("click",(e)=>{
//                const parent = e.target.parentElement; 
//                parent.remove()
//             })


//             // box[i]=i+1;
//             switch(item){
//                 case '김밥' : cart.append(box); break;
//                 case '라면' : cart.append(box); break;
//                 case '튀김' : cart.append(box); break;
//                 case '떡볶이' :cart.append(box); break;
//                 case '돈까스' : cart.append(box); break;
//                 case '우동' : cart.append(box); break;
//                 case null: empty.style.display = 'block';
//                       cart.style.display = 'none'; break;
//             }   


 

//         let acount = 0;
//         let bcount = 0;
//         let ccount = 0;
//         let dcount = 0;
//         let ecount = 0;
//         let fcount = 0;

//         const a = 3000;
//         const b = 4500;
//         const c = 5000;
//         const d = 6000;
//         const e = 7500;
//         const f = 5000;
        
//             switch(item){
                
//                 case '김밥' : acount++ ; break;
//                 case '라면' : bcount++ ; break;
//                 case '튀김' : ccount++; break;
//                 case '떡볶이' : dcount++ ; break;
//                 case '돈까스' : ecount++; break;
//                 case '우동' : fcount++; break;
                
          
//             }   

//         // total.innerHTML =`합계 : ₩${acount*3000+bcount*4500+ccount*5000
//         //                            +dcount*6000+ ecount*7500+fcount*5000}`

      
//  let tprice = (a*acount) + (b*bcount) + (c*ccount) + (d*dcount) + (e*ecount) + (f*fcount); 
      


//             // switch(item){
                
//             //     case '김밥' : tprice+=3000 ; break;
//             //     case '라면' : tprice+=4500 ; break;
//             //     case '튀김' : tprice+=5000; break;
//             //     case '떡볶이' : tprice+=6000 ; break;
//             //     case '돈까스' : tprice+=7500; break;
//             //     case '우동' : tprice+=5000; break;
   
//             // }   
//         total.innerHTML =`합계 : ₩${tprice}`
      
           
      
         
//     span3.addEventListener("click",()=>{
//         switch(item){
//             case '김밥' : tprice-=3000; break;
//             case '라면' : bcount-- ; break;
//             case '튀김' : ccount--; break;
//             case '떡볶이' : dcount-- ; break;
//             case '돈까스' : ecount--; break;
//             case '우동' : fcount--; break;
         
           
//         }   
       

//         total.innerHTML =`합계 : ₩${tprice}`
   

//     });
//         //     case '김밥' : tprice-=3000 ; break;
//         //     case '라면' : tprice-=4500 ; break;
//         //     case '튀김' : tprice-=5000; break;
//         //     case '떡볶이' : tprice-=6000; break;
//         //     case '돈까스' : tprice-=7500; break;
//         //     case '우동' : tprice-=5000; break;
            

  
// //   console.log(box[i]);

//   // plus 버튼

//   let add = 1;
//   innerspan.innerHTML=`${add}`
//   console.log(box);
//     if(quantitybtn1 = "click"){
//         add--;
//     } if(quantitybtn2 = "click"){
//         add++;
//     } 
 



// };

// 예시 답안

const cart = document.getElementById('cart');
const totalElement = document.getElementById('total');
const emptyCartDiv = document.getElementById('empty-cart');
let total = 0;

// 장바구니 메뉴 요소 생성 함수
function createCartItemElement(item, price) {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.setAttribute('data-item', item);
    cartItem.setAttribute('data-price',price);

    const itemName = document.createElement('span');
    itemName.innerText = item;

    const quantityContainer = document.createElement('div');
    quantityContainer.classList.add('quantity');

    const decreaseButton = document.createElement("button");
    decreaseButton.innerText = '-';
    decreaseButton.onclick = function(){
        decreaseQuantity(decreaseButton); };
    
    const quantitySpan = document.createElement('span');
    quantitySpan.innerText = '1';

    const increaseButton = document.createElement('button');
    increaseButton.innerText = '+';
    increaseButton.onclick = function(){
        increasQuantity(increaseButton); };
    
    const deleteButton = document.createElement ('span');
    deleteButton.classList.add('delete-button');
    deleteButton.innerText = 'X';
    deleteButton.onclick = function(){
        deleteItem(deleteButton); };

    quantityContainer.appendChild(decreaseButton);
    quantityContainer.appendChild(increaseButton);
    quantityContainer.appendChild(deleteButton);

    cartItem.appendChild(itemName);
    cartItem.appendChild(quantityContainer);
    cartItem.appendChild(deleteButton);

    return cartItem;

}
// 메뉴 선택 시 장바구니 함수
    function addToCart(item,price){
        const cartItems = document.getElementsByClassName('cart-item');
        let existingItem = null;

        // 검사해서 이미 장바구니에 존재하는지 확인
        for (const cartItem of cartItems){
            if(cartItem.getAttribute('data-item')===item){
                existingItem = cartItem;
                break;
            }
        }
        // 장바구니에 아이템이 이미 있는 경우
        if (existingItem){
            const quantityElement = existingItem.querySelector('.quantity span');
            const quantity = parseInt(quantityElement.innerText, 10)+1;
            quantityElement.innerText= quantity;
        }else{
            // 장바구니에 아이템이 없는 경우 
            const cartItem = createCartItemElement(item,price);
            cart.appendChild(cartItem);
        
        // 합계 갱신
        total += price;
        totalElement.innerText = ` 합계 : ₩${total.toLocaleString()}`

        // 장바구니가 비어 있습니다 문구 감춤
        emptyCartDiv.style.display = 'none';
        cart.style.display = 'block'
        }

        // 메뉴 개수 증가버튼 함수
        function increaseQuantity(button){
            const quantityElement = button.parentElement.querySelector('span');
            const quantity = parseInt(quantityElement.innerText, 10)+1;
            quantityElement.innerText = quantity;
            updateTotal();
        }
        // 메뉴 개수 감소버튼 함수
        function decreaseQuantity(button){
            const quantityElement = button.parentElement.querySelector('span');
            let quantity=parseInt(quantityElement.innerText,10)-1;
            quantity = Math.max(1,quantity);
            //최소값은 1로 유지
            quantityElement.innerText = quantity;
            updateTotal();
        }
        // 장바구니 메뉴 삭제 함수
        function deleteItem(button){
            const cartItem = button.parentElement;
            const price = pareInt(cartItem.dataset.price,10);
            const quantity = pareInt(cartItem.querySelector('.quantityspan').innerText,10);

            // 합계에서 해당 아이템 가격 차감
            total -= price *quantity;

            //합계 갱신
            totalElement.innerText=`합계 : ₩${total.toLocaleString()} `;
            cartItem.remove();

            // 장바구니가 비어 있습니다. 문구 갱신
            if(cart.children.length ===0) {
                emptyCartDiv.style.display = 'block';
                cart.style.display = 'none';
            }
        }
        // 장바구니에 담긴 메뉴 합계 업데이트 함수
        function updateTotal(){
            total = 0;
            const cartItems = document.getElementsByClassName('cart-item');
            for (const cartItem of cartItems){
                const price = parseInt(cartItem.dataset.price,10);
                const quantity = parseInt(cartItem.querySelector('.quantityspan').innerText,10);
                total += price * quantity;
            }
            totalElement.innerText=`합계 :₩${total.toLocaleString()}`;

            // 장바구니가 비어 있습니다. 문구 갱신
            if(cart.children.length ===0){
                emptyCartDiv.style.display = 'block';
                cart.style.display = 'none'
            }
         }

    }









