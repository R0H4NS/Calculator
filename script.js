function clearScreen() {
    document.getElementById("screen").value = "";
}

function display(value) {
    document.getElementById("screen").value += value;
}

function calculate() {
    var p = document.getElementById("screen").value;
    var q = eval(p);
    document.getElementById("screen").value = q;
}

function deletes() {
    var screen = document.getElementById("screen")
    if(screen.value.length > 0)
    {
        screen.value = screen.value.substring(0, screen.value.length-1);
    }
}

function displayCartItems() {
    var cartContainer = document.getElementById('cart-items');
    var cartItems = JSON.parse(localStorage.getItem('cart'));
    if (cartItems && cartItems.length > 0) {
        cartContainer.innerHTML = '';
        cartItems.forEach(item => {
            var itemElement = document.createElement('div');
            itemElement.textContent = item.name + " - Customizations: " + item.customizations;
            cartContainer.appendChild(itemElement);
        });
    } else {
        cartContainer.innerHTML = '<div>Your cart is empty.</div>';
    }
}