const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");

const product = {
    1: {name:"Mezcla original 200 g", price: 500},
    2: {name: "Mezcla original 500 g", price: 900},
    3: {name: "Mezcla original 200 g", price: 700},
    4: {name: "Mezcla original 500 g", price: 1200}
}

let purchases = [];

function add() {
    const productId = parseInt(priceElement.value);
    const cantidad = parseInt(numberElement.value);
    
    if (productId && cantidad) {
        const ProductoSeleccionado = product[productId];
        if (ProductoSeleccionado) {
            let purchase = {
                name: ProductoSeleccionado.name,
                price: ProductoSeleccionado.price,
                cantidad: cantidad
            };
            purchases.push(purchase);
            window.alert(`${display()}\nSubtotal: ${subtotal()} yenes`);
            priceElement.value = "";
            numberElement.value = "";
        }
    }
}

function display() {
    let string = "Productos agregados:\n";
    for (let i = 0; i < purchases.length; i++) {
        const item = purchases[i];
        string += `${item.name} a ${item.price} yenes: ${item.cantidad} unidad/es.\n`;
    }
    return string;
}

function subtotal() {
    let sum = 0;
    for (let i = 0; i < purchases.length; i++) {
        const item = purchases[i];
        sum += item.price * item.cantidad;
    }
    return sum;
}

function calc() {
    let message = "Productos agregados:\n";
    let subtotal = 0;
    for (let i = 0; i < purchases.length; i++) {
        const item = purchases[i];
        message += `${item.name} (${item.price} yenes): ${item.cantidad} unidad/es\n`;
        subtotal += item.price * item.cantidad;
    }
    const postage = calculatePostage(subtotal);
    const total = subtotal + postage;
    message += `\nSubtotal: ${subtotal} yenes\nGastos de envío: ${postage} yenes\n\nTotal: ${total} yenes`;
    window.alert(message);
    purchases = [];
    priceElement.value= "";
    numberElement.value = "";
}

function calculatePostage(subtotal) {
    if (subtotal == 0 || subtotal >= 3000) {
        return 0;
    } else if (subtotal < 2000) {
        return 500;
    } else {
        return 250;
    }
}