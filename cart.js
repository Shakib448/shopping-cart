// Case Increase 
var caseIncrease = document.getElementById('case-increase');

caseIncrease.addEventListener('click', function(){
    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);
    const caseNewCount = caseCount + 1;
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById('case-total').innerText = caseTotal;
});

// Case Decrease 

var caseDecrease = document.getElementById('case-decrease');

caseDecrease.addEventListener('click', function(){
    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);
    const caseNewCount = caseCount - 1;
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById('case-total').innerText = caseTotal;
});