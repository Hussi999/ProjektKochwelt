
function updateIngredients() {
    const servingsInput = document.getElementById('portion');
    const ingredientItems = document.querySelectorAll('#ingredient li');

    let servings = parseInt(servingsInput.value);
    if (isNaN(servings) || servings < 1) {
        servings = 1;
    } else if (servings > 10) {
        servings = 10;
    }
    servingsInput.value = servings;

    for (let i = 0; i < ingredientItems.length; i++) {
        const item = ingredientItems[i];
        const baseAmount = +item.getAttribute('data-base');
        const unit = item.getAttribute('data-unit');
        const amount = baseAmount * servings;

        item.textContent = amount + " " + unit;
    }
}