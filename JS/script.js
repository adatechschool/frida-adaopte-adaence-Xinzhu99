





/*
form.addEventListener("submit", (event) => {
  event.preventDefault();

  cocktailContainer.innerHTML = ""

  const savedScript = localStorage.getItem(AGE_KEY);
  ageAlreadyChecked = savedScript ? JSON.parse(savedScript) : false;


  const inputValue = input.value.trim();

  if (!inputValue) {
    cocktailContainer.innerHTML = `<p class=errorIngredient> Please tap an ingredient or a cocktail name 🍋🍸</p>`;
    hide(form);
    return;
  }
  loadCocktailFetch(inputValue);
  hide(form);
  input.value = "";
});
*/