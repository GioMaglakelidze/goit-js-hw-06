const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const listItemBox = [];

ingredients.forEach((ingredient) => {
  const liItem = document.createElement("li");

  liItem.textContent = ingredient;

  liItem.classList.add("item");

  listItemBox.push(liItem);
});

list.append(...listItemBox);
