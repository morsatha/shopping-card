
function updateCaseNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;

    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = productNumber * price;
}
document.getElementById('phone-mines').addEventListener('click', function () {
    updateCaseNumber('phone', 1219, false);
})
document.getElementById('phonp-plase').addEventListener('click', function () {
    updateCaseNumber('phone', 1219, true);
})
document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber('case', 59, true);

})
//Minus button
document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber('case', 59, false);

})

