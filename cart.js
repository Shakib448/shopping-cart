// Product function 

function handleProductChange(product, isIncrease){
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    let caseNewCount = productCount;
    if(isIncrease == true){
        productNewCount = productCount + 1;
    }
    if(isIncrease == false && productCount > 0){
        productNewCount = productCount -1;
    }
    productInput.value = productNewCount;
    let productTotal = 0;

    if(product == 'iphone'){
        productTotal = productNewCount * 1219;
    }
    if(product == 'case'){
        productTotal = productNewCount * 59;
    }
    document.getElementById(product + '-total').innerText = productTotal;
};
