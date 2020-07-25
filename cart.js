// Iphone Increase 
document.getElementById('iphone-increase').addEventListener('click', function(){
    const iphoneInput = document.getElementById('iphone-count');
    const iphoneCount = parseInt(iphoneInput.value);
    const iphoneNewCount = iphoneCount + 1;
    iphoneInput.value = iphoneNewCount;
    const totalIphone = iphoneNewCount * 1219;
    document.getElementById('iphone-total').innerText = totalIphone;
});

// Iphone Decrease 
document.getElementById('iphone-decrease').addEventListener('click', function(){
    const iphoneInput = document.getElementById('iphone-count');
    const iphoneCount = parseInt(iphoneInput.value);
    const iphoneNewCount = iphoneCount - 1;
    iphoneInput.value = iphoneNewCount;
    const totalIphone = iphoneNewCount * 1219;
    document.getElementById('iphone-total').innerText = totalIphone;
});

// Case Increase
document.getElementById('case-increase').addEventListener('click', function(){
    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);
    const caseNewCount = caseCount + 1;
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById('case-total').innerText = caseTotal;
});

 // Case Decrease 

document.getElementById('case-decrease').addEventListener('click', function(){
    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);
    const caseNewCount = caseCount - 1;
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById('case-total').innerText = caseTotal;
});
