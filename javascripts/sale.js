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
    const sum = subtotal();
    const postage = calcPostageFromPurchase(sum);
    window.alert(`El subtotal es ${sum} yenes. El envío es ${postage} yenes. El total es ${sum + postage} yenes`);
    purchases = [];
    priceElement.value= "";
    numberElement.value = "";
}

function calcPostageFromPurchase(sum) {
    if (sum == 0 || sum >= 3000) {
    return 0;
    } else if (sum < 2000){
    return 500;
    } else {
    return 250;
    }
}