// Iphone function 

function handleIphoneProductChange(isIncrease){
    const iphoneInput = document.getElementById('iphone-count');
    const iphoneCount = parseInt(iphoneInput.value);
    let iphoneNewCount = iphoneCount;
    if(isIncrease == true){
        iphoneNewCount = iphoneCount + 1;
    }
    if(isIncrease == false && iphoneCount > 0){
        iphoneNewCount = iphoneCount -1;
    }
    iphoneInput.value = iphoneNewCount;
    const totalIphone = iphoneNewCount * 1219;
    document.getElementById('iphone-total').innerText = totalIphone;
}

// Case function 

function handleCaseProductChange(isIncrease){
    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);
    let caseNewCount = caseCount;
    if(isIncrease == true){
        caseNewCount = caseCount + 1;
    }
    if(isIncrease == false && caseCount > 0){
        caseNewCount = caseCount -1;
    }
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById('case-total').innerText = caseTotal;
};
