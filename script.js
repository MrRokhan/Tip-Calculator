const billPayed = document.getElementById("bill");
const calculateTip = document.getElementById("generate");
const tipIs = document.getElementById("tip");

function billValue() {
    let billAmount = parseFloat(billPayed.value);

    if (isNaN(billAmount) || billAmount === "") {
        alert("Enter a valid bill amount");
    } else if (billAmount < 0) {
        alert("Bill amount cannot be negative");
    } else {
        let tipCalculation = billAmount * 0.05;
        tipIs.textContent = `Tip: $${tipCalculation.toFixed(2)}`;
    }
}

calculateTip.addEventListener("click", billValue);
