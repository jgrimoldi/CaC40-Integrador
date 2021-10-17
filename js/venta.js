function category(element){

    const select = document.getElementById('select');
    const selectedCategory = element.id;

    select.value = selectedCategory;

}

function deleteSpan(){
    const span = document.getElementById('showPrice');
    span.classList.add('visually-hidden');
}


function calculateDiscount(precio, descuento){
    return (descuento * precio) / 100
}

function discount(){
    const span = document.getElementById('showPrice');
    const cantidad = Number(document.getElementById('InputQuantity').value);
    const precioTicket = 200;
    const category = Number(document.getElementById('select').value);
    const precioDescuento = precioTicket - calculateDiscount(precioTicket, category);
    const precioTotal = cantidad * precioDescuento;

    span.classList.remove('visually-hidden')
    span.textContent = "Total a Pagar: $" + precioTotal;
}