
// let totalPrice = 0;
// let history=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

// const listWrapper = document.getElementById("listOfProducts");
// const priceReference = document.getElementById("cart");
// const cartImageRef = document.getElementById("cartImage");
// const cartWrapper = document.getElementById("cartWrapper");
// priceReference.innerHTML = totalPrice;
// const itemTotal = document.createElement("div");


// for(let i = 0; i < product.length; i++){

//     let itemImage = document.createElement("img");
//     itemImage.setAttribute("class", "image")
//     itemImage.src = product[i].image

//     // let itemId = document.createElement("div");
//     // itemId.innerHTML = product[i].id

//     let itemName = document.createElement("div");
//     itemName.innerHTML = product[i].title

//     let itemPrice = document.createElement("div");
//     itemPrice.innerHTML = `$ ${product[i].price}`

//     let singleItem = document.createElement("div");
//     singleItem.appendChild(itemImage)
//     singleItem.appendChild(itemName);
//     singleItem.appendChild(itemPrice);



//     singleItem.setAttribute("class", "single-cell");


//     singleItem.addEventListener("click",()=>{
//        totalPrice += product[i].price;
//     //    totalPrice = Math.round((totalPrice + Number.EPSILON) * 100) / 100
//        priceReference.innerHTML = `$ ${totalPrice}`
//        history[product[i].id]+=1;
//        console.log(history);

//        addToCart();
//     });

//     listWrapper.appendChild(singleItem);
// }


// cartWrapper.innerHTML = "";
// if(cartWrapper.innerHTML === ""){

//     const emptyCart = document.createElement("div");
//     emptyCart.innerHTML = "Your Cart is Empty !"
//     emptyCart.setAttribute("class", "empty-cart")
//     cartWrapper.appendChild(emptyCart)
// }

// const addToCart = () => {

//     cartWrapper.innerHTML = "";

//     for(let i = 0; i < product.length; i++){
        
//         const count = history[i];
//         const price = product[i].price;
//         let totalPriceCurr = count * price;
//         // totalPriceCurr = Math.round((totalPriceCurr + Number.EPSILON) * 100) / 100


//         if(count > 0){

//             const itemCount = document.createElement("div");
//             itemCount.setAttribute("class", "single-price-item")
//             itemCount.innerHTML = `${count} * ${price} = ${totalPriceCurr}`
           
        
//             itemCount.addEventListener("click", () => {
//                 console.log("click")
//                 history[product[i].id]-=1;
//                 totalPrice -= price
//                 priceReference.innerHTML = `$ ${totalPrice}`
//                 itemTotal.innerHTML = `Total Price : $ ${totalPrice}`;
//                 addToCart();
//             })

//             cartWrapper.appendChild(itemCount);
//         }

        
//     }

   
//     itemTotal.innerHTML = `Total Price : $ ${totalPrice}`;
//     itemTotal.setAttribute("class", "total-price-item")
//     cartWrapper.appendChild(itemTotal)

//     if(cartWrapper.innerHTML === ""){

//         const emptyCart = document.createElement("div");
//         emptyCart.innerHTML = "Your Cart is Empty !"
//         emptyCart.setAttribute("class", "empty-cart")
//         cartWrapper.appendChild(emptyCart)
//     }
// }