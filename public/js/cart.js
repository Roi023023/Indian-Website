document.addEventListener("DOMContentLoaded", function () {
    updateTotalAmount();
  
    const deleteButtons = document.querySelectorAll(".delete-item");
    deleteButtons.forEach(function (button) {
      button.addEventListener("click", function (e) {
        const cartItem = e.target.closest(".cart-item");
        cartItem.remove();
        updateTotalAmount();
      });
    });
  });
  
  function updateTotalAmount() {
    let total = 0;
    const prices = document.querySelectorAll(".item-price");
    prices.forEach(function (price) {
      total += parseFloat(price.textContent.replace("$", ""));
    });
    document.querySelector(".total-amount").textContent = "$" + total.toFixed(2);
  }
  