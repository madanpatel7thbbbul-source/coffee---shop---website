let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    total += price;

    updateCart();
}

function updateCart() {
    const cartMessage = document.getElementById("cart-message");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartMessage.textContent = "Items in cart: " + cart.length;
    cartItems.innerHTML = "";

    cart.forEach(function(item, index) {
        const li = document.createElement("li");
        li.textContent = item.name + " - ₹" + item.price;
        cartItems.appendChild(li);
    });

    cartTotal.textContent = "Total: ₹" + total;
}

function clearCart() {
    cart = [];
    total = 0;

    document.getElementById("cart-message").textContent =
        "Your cart is empty.";

    document.getElementById("cart-items").innerHTML = "";

    document.getElementById("cart-total").textContent =
        "Total: ₹0";
}