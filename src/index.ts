
let totalPrice : any = 0;
let historyArray: number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
totalPrice = "0"

const listWrapper = document.getElementById("listOfProducts");
const priceReference = document.getElementById("cart");
const cartImageRef = document.getElementById("cartImage") ;
const cartWrapper = document.getElementById("cartWrapper");
priceReference!.innerHTML = totalPrice.toString()
const itemTotal = document.createElement("div");


for(let i = 0; i < product.length; i++){

    let itemImage = document.createElement("img");
    itemImage.setAttribute("class", "image")
    itemImage.src = product[i].image

    let itemName = document.createElement("div");
    itemName.innerHTML = product[i].title

    let itemPrice = document.createElement("div");
    itemPrice.innerHTML = `$ ${product[i].price}`

    let singleItem = document.createElement("div");
    singleItem.appendChild(itemImage)
    singleItem.appendChild(itemName);
    singleItem.appendChild(itemPrice);



    singleItem.setAttribute("class", "single-cell");


    singleItem.addEventListener("click",()=>{
       totalPrice += product[i].price;
       priceReference.innerHTML = `$ ${totalPrice}`
       historyArray[product[i].id]+=1;
       addToCart();
    });

    listWrapper!.appendChild(singleItem);
}


cartWrapper!.innerHTML = "";
if(cartWrapper!.innerHTML === ""){

    const emptyCart = document.createElement("div");
    emptyCart.innerHTML = "Your Cart is Empty !"
    emptyCart.setAttribute("class", "empty-cart")
    cartWrapper!.appendChild(emptyCart)
}

const addToCart = () => {

    cartWrapper!.innerHTML = "";

    for(let i = 0; i < product.length; i++){
        
        const count = historyArray[i];
        const price = product[i].price;
        let totalPriceCurr = count * price;

        if(count > 0){

            const itemCount = document.createElement("div");
            itemCount.setAttribute("class", "single-price-item")
            itemCount.innerHTML = `${count} * ${price} = ${totalPriceCurr}`
               
            itemCount.addEventListener("click", () => {
                console.log("click")
                historyArray[product[i].id]-=1;
                totalPrice -= price
                priceReference!.innerHTML = `$ ${totalPrice}`
                itemTotal.innerHTML = `Total Price : $ ${totalPrice}`;
                addToCart();
            })

            cartWrapper!.appendChild(itemCount);
        }  
    }

   
    itemTotal.innerHTML = `Total Price : $ ${totalPrice}`;
    itemTotal.setAttribute("class", "total-price-item")
    cartWrapper!.appendChild(itemTotal)

    if(cartWrapper!.innerHTML === ""){
        const emptyCart = document.createElement("div");
        emptyCart.innerHTML = "Your Cart is Empty !"
        emptyCart.setAttribute("class", "empty-cart")
        cartWrapper!.appendChild(emptyCart)
    }
}