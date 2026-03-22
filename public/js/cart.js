document.addEventListener("DOMContentLoaded", () => {

  const deleteButtons = document.querySelectorAll(".delete-item");

  deleteButtons.forEach(button => {

    button.addEventListener("click", async function () {

      const productId = this.dataset.id;

      const response = await fetch("/cart/remove", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId })
      });

      if (response.ok) {
        location.reload();
      }

    });

  });

});