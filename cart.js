//Item increment event handler
const incrementBtn1 = document.getElementById('incrementBtn1');
incrementBtn1.addEventListener('click', function () {
    addProduct("itemValue1", 'currentPrice1', 1219);
});

const incrementBtn2 = document.getElementById('incrementBtn2');
incrementBtn2.addEventListener('click', function () {
    addProduct('itemValue2', 'currentPrice2', 59);

});

//Item Decrement event handler

const decrementBtn1 = document.getElementById('decrementBtn1');
decrementBtn1.addEventListener('click', function () {
    removeProduct('itemValue1', 'currentPrice1', 1219);
});

const decrementBtn2 = document.getElementById('decrementBtn2');
decrementBtn2.addEventListener('click', function () {
    removeProduct('itemValue2', 'currentPrice2', 59);
});


//add product function
function addProduct(id, priceId, price) {
    const incrementValue = document.getElementById(id).value;
    const tmpValue = parseInt(incrementValue);
    const items = tmpValue + 1;
    document.getElementById(id).value = items;

    //pricing
    const netPrice = price;
    const currentPrice = netPrice * items;
    document.getElementById(priceId).innerText = currentPrice;

    //subtotal 
    let subTotal = document.getElementById('subTotal').innerText;
    subTotal = parseInt(subTotal);
    subTotal = subTotal + price;
    document.getElementById('subTotal').innerText = subTotal;

    //Tax and Total amount
    let tax = (subTotal / 100) * 5;
    tax = tax.toFixed(2)
    document.getElementById('tax').innerText = tax;
    const totalAmount = subTotal - tax;
    document.getElementById('totalAmount').innerText = totalAmount;

}

//Remove Product Function 
function removeProduct(id, priceId, price) {
    const decrementValue = document.getElementById(id).value;
    const tmpValue = parseInt(decrementValue);
    const items = tmpValue - 1;
    document.getElementById(id).value = items;


    //Pricing
    let currentPrice = document.getElementById(priceId).innerText;
    currentPrice = parseInt(currentPrice);
    const netPrice = price;
    currentPrice = currentPrice - netPrice;
    document.getElementById(priceId).innerText = currentPrice;

    //subtotal 
    let subTotal = document.getElementById('subTotal').innerText;
    subTotal = parseInt(subTotal);
    subTotal = subTotal - price;
    document.getElementById('subTotal').innerText = subTotal;

    //Tax and Total amount
    let tax = (subTotal / 100) * 5;
    tax = tax.toFixed(2)
    document.getElementById('tax').innerText = tax;
    const totalAmount = subTotal - tax;
    document.getElementById('totalAmount').innerText = totalAmount;

}


//sub total

let productOne = document.getElementById('currentPrice1').innerText;
productOne = parseInt(productOne);
let productTwo = document.getElementById('currentPrice2').innerText;
productTwo = parseInt(productTwo);
const subTotal = productOne + productTwo;
document.getElementById('subTotal').innerText = subTotal;

let tax = (subTotal / 100) * 5;
tax = tax.toFixed(2);
document.getElementById('tax').innerText = tax;

const totalAmount = subTotal - tax;
document.getElementById('totalAmount').innerText = totalAmount;

//checkout
const checkout = document.getElementById('checkout');
const welcomePage = document.getElementById('welcomePage');
welcomePage.style.display = "none";
checkout.addEventListener('click', function () {
    const cart = document.getElementById('shoppingCart');
    cart.style.display = "none";
    welcomePage.style.display = "block";
});