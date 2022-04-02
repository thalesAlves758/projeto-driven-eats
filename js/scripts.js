let selectedPlate;
let selectedDrink;
let selectedDessert;

let userName;
let userAddress;

function selectPlate(plateEl) {
    if(selectedPlate) selectedPlate.classList.remove("selected");

    selectedPlate = plateEl;
    selectedPlate.classList.add("selected");
    
    checkIfCanFinishPurchase();
}

function selectDrink(drinkEl) {
    if(selectedDrink) selectedDrink.classList.remove("selected");

    selectedDrink = drinkEl;
    selectedDrink.classList.add("selected");
    
    checkIfCanFinishPurchase();
}

function selectDessert(dessertEl) {
    if(selectedDessert) selectedDessert.classList.remove("selected");

    selectedDessert = dessertEl;
    selectedDessert.classList.add("selected");
    
    checkIfCanFinishPurchase();
}

function checkIfCanFinishPurchase() {
    if(selectedPlate && selectedDrink && selectedDessert) enableFinishPurchaseButton();
}

function enableFinishPurchaseButton() {
    const finishPurchaseButton = document.querySelector('.bottom-bar button');

    finishPurchaseButton.innerHTML = "Fechar pedido";
    finishPurchaseButton.disabled = false;
}

function finishPurchase() {
    userName = prompt("Digite o seu nome:");
    userAddress = prompt("Digite o seu endereço:");

    insertPurchaseIntoModal();

    showConfirmModal();
}

function showConfirmModal() {
    document.querySelector('.confirmation-modal').classList.remove('hidden');
}

function insertPurchaseIntoModal() {
    const purchaseListEl = document.querySelector('.confirmation-modal ul');
    
    const plateItemElement = getListItem(selectedPlate);
    const drinkItemElement = getListItem(selectedDrink);
    const dessertItemElement = getListItem(selectedDessert);
    const totalItemElement = getTotalListItem();

    purchaseListEl.innerHTML = plateItemElement + drinkItemElement + dessertItemElement + totalItemElement;
}

function getListItem(element) {
    return `<li>
        <h3>${getItemName(element)}</h3>
        <h4>${formatToReal(getItemPrice(element))}</h4>
    </li>`.trim();
}

function getTotalListItem() {
    return `<li class="total">
        <h3>TOTAL</h3>
        <h4>${formatToReal(getTotal())}</h4>
    </li>`;
}

function getItemName(element) {
    return element.querySelector('h4').innerText;
}

function getItemPrice(element) {
    const currencyRegex = /[^0-9.-]+/g;

    return Number(element.querySelector('h5').innerText.replace(currencyRegex,"")) / 100;
}

function getTotal() {
    return getItemPrice(selectedPlate) + getItemPrice(selectedDrink) + getItemPrice(selectedDessert);
}

function formatToReal(value) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

function hideConfirmModal() {
    document.querySelector('.confirmation-modal').classList.add('hidden');
}

function sendPurchaseToWhatsapp() {
    const msg = "Olá, gostaria de fazer o pedido:\n" +
    "- Prato: " + getItemName(selectedPlate) + "\n" +
    "- Bebida: " + getItemName(selectedDrink) + "\n" +
    "- Sobremesa: " + getItemName(selectedDessert) + "\n" +
    "Total: " + formatToReal(getTotal()) + "\n\n" +
    "Nome: " + userName + "\n" +
    "Endereço: " + userAddress;

    const url = 'https://wa.me/5532991003499?text=' + encodeURIComponent(msg);

    window.open(url, '_blank');
}
