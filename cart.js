// Product Increase event handler 

const productIncreaseBtn1 = document.getElementById('productIncreaseBtn1');

productIncreaseBtn1.addEventListener('click', function(){
    addProduct('itemValue1','currentPrice1',1219);
});

const productIncreaseBtn2 = document.getElementById('productIncreaseBtn2');

productIncreaseBtn2.addEventListener('click', function(){
    addProduct('itemValue2','currentPrice2',59);
});

// Product Decrease event handler 

const productDecreaseBtn1 = document.getElementById('productDecreaseBtn1');

productDecreaseBtn1.addEventListener('click', function(){
    addProduct('itemValue1','currentPrice1',1219);
});

const productDecreaseBtn2 = document.getElementById('productDecreaseBtn2');

productDecreaseBtn2.addEventListener('click', function(){
    addProduct('itemValue2','currentPrice2',59);
});


// addProduct function

function addProduct(id, priceId, price){
    const increaseValue = document.getElementById(id).value;
    const valueConverter = parseInt(increaseValue);
    const productItems = valueConverter + 1;
    document.getElementById(id).value = productItems;

    // pricing
    const netPrice = price;
    const currentPrice = netPrice * productItems;
    document.getElementById(priceId).innerText = currentPrice;

    // subTotal
    let subTotal = 
};