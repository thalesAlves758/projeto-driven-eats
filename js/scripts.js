function selectProduct(productEl, productTypeClass) {
    const selectedElement = document.querySelector(`.${productTypeClass} .selected`);

    if(selectedElement) selectedElement.classList.remove("selected");

    productEl.classList.add("selected");
}
