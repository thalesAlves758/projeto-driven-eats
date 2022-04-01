function selectProduct(productEl, productTypeClass) {
    const selectedElement = document.querySelector(`.${productTypeClass} .selected`);

    if(selectedElement) selectedElement.classList.remove("selected");

    productEl.classList.add("selected");

    checkIfCanFinishRequest();
}

function checkIfCanFinishRequest() {
    const plateSelected = document.querySelector('.plates .selected');
    const drinkSelected = document.querySelector('.drinks .selected');
    const dessertSelected = document.querySelector('.desserts .selected');

    if(plateSelected && drinkSelected && dessertSelected) enableFinishRequestButton();
}

function enableFinishRequestButton() {
    const finishRequestButton = document.querySelector('.bottom-bar button');

    finishRequestButton.innerHTML = "Fechar pedido";
    finishRequestButton.disabled = false;
}
