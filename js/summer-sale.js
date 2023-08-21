const inputCoupon = document.getElementById('inputCoupon');
const buttonCoupon = document.getElementById('buttonCoupon');
inputCoupon.addEventListener('input', function () {
    const couponCode = inputCoupon.value;
    if (couponCode === 'SELL200') {
        buttonCoupon.removeAttribute('disabled');
    } else {
        buttonCoupon.setAttribute('disabled', 'disabled');
    }
});
buttonCoupon.addEventListener('click', function () {
    const couponCode = inputCoupon.value;
    if (couponCode === 'SELL200'){
        discount(0.2);
        inputCoupon.value = '';
        buttonCoupon.setAttribute('disabled', 'disabled')
    }
    enablePurchaseButton();
});
let totalPrice = 0;
let discountedAmount = 0;
function discount(percentage) {
    const mainPrice = parseFloat(totalPrice);
    discountedAmount = mainPrice * percentage;
    discountedAmount = discountedAmount.toFixed(2);
    grandTotal = mainPrice -discountedAmount;
    grandTotal = grandTotal.toFixed(2);
    const showDiscount = document.getElementById('discountedAmount');
    showDiscount.innerText = discountedAmount;
    document.getElementById('grandTotal').innerText = grandTotal;
}
let serial = 1;
function itemClick(target) {
  const itemContainer = document.getElementById('itemList');
  const itemNames = target.parentNode.childNodes[3].childNodes[3].innerText;
  const li = document.createElement('li');
  li.innerHTML = `<span class="serial">${serial}. </span> ${itemNames}`;
  serial++;
  itemContainer.appendChild(li);
  const price = target.parentNode.childNodes[3].childNodes[5].childNodes[0].innerText;
  totalPrice = parseFloat(totalPrice) + parseFloat(price);
  totalPrice = totalPrice.toFixed(2);
  document.getElementById('totalPrice').innerText = totalPrice;
  discountedAmount = 0;
  const showDiscount = document.getElementById('discountedAmount');
  showDiscount.innerText = discountedAmount;
  grandTotal = (totalPrice - discountedAmount).toFixed(2);
  document.getElementById('grandTotal').innerText = totalPrice;
  enablePurchaseButton();
}
const purchaseButton = document.getElementById('purchaseButton');
function enablePurchaseButton() {
    const grandTotal = parseFloat(document.getElementById('grandTotal').textContent);
    if (grandTotal > 0) {
        purchaseButton.removeAttribute('disabled');
    } else {
        purchaseButton.setAttribute('disabled', 'disabled');
    }
}
  document.getElementById('goHome').addEventListener('click', function () {
    location.reload();
  });
