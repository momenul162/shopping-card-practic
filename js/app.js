function updateProductNumber(product, price, isIncrease) {
  const inputNumber = document.getElementById(product + "-number");
  let productNumber = inputNumber.value;
  if (isIncrease == true) {
    productNumber = parseInt(productNumber) + 1;
  } else if (productNumber > 0) {
    productNumber = parseInt(productNumber) - 1;
  }
  inputNumber.value = productNumber;
  const totalProduct = document.getElementById(product + "-total");
  totalProduct.innerText = productNumber * price;
  calculatePrice();
}

function getInputValue(product) {
  const inputField = document.getElementById(product + "-number");
  const productNumber = parseInt(inputField.value);
  return productNumber;
}
function calculatePrice() {
  const phoneTotal = getInputValue() * 1219;
  const caseTotal = getInputValue() * 59;
  const subtotal = phoneTotal + caseTotal;
  const taxAmount = subtotal / 10;
  const totalPrice = subtotal + taxAmount;
  document.getElementById("sub-total").innerText = subtotal;
  document.getElementById("tax-amount").innerText = taxAmount;
  document.getElementById("total-price").innerText = totalPrice;
}

document.getElementById("phone-plus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, true);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, false);
});
document.getElementById("case-plus").addEventListener("click", function () {
  updateProductNumber("case", 59, true);
});
document.getElementById("case-minus").addEventListener("click", function () {
  updateProductNumber("case", 59, false);
});
