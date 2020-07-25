// Product function 

function handleProductChange(product, isIncrease){
    const productCount = getInputValue(product);

    let productNewCount = productCount;

    if(isIncrease == true){
        productNewCount = productCount + 1;
    }
    if(isIncrease == false && productCount > 0){
        productNewCount = productCount -1;
    }
    document.getElementById(product + '-count').value = productNewCount;
    let productTotal = 0;

    if(product == 'phone'){
        productTotal = productNewCount * 1219;
    }
    if(product == 'case'){
        productTotal = productNewCount * 59;
    }
    document.getElementById(product + '-total').innerText = productTotal;
    calculateTotal();
};


function calculateTotal(){
    const phoneCount = getInputValue('phone');
    const caseCount = getInputValue('case');

    const totalPrice = phoneCount * 1219 + caseCount * 59;
    document.getElementById('total-price').innerText = '$ ' + totalPrice;

    const tax = Math.round((totalPrice * 0.1));
    document.getElementById('tax-amount').innerText = '$ ' + tax;
    
    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$ ' + grandTotal;
};

function getInputValue(product){
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    return productCount;
};