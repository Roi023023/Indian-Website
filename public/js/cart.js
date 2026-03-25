// public/js/cart.js
async function postAction(url, data) {
    try {
        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error("Action failed");
        return res.json();
    } catch (err) {
        console.error(err);
        throw err;
    }
}

button.addEventListener("click", async function() {
    try {
        await postAction("/cart/remove", { productId: this.dataset.id });
        location.reload(); 
    } catch {
        alert("Failed to remove item");
    }
});