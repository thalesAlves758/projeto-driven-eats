let selectedPlate;
let selectedDrink;
let selectedDessert;

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
